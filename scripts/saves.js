// Ren'Py style save system: paged save slots (6 per page) with scene thumbnails.
// Saves live in IndexedDB (much larger quota than localStorage); localStorage is a fallback.
// Slot keys: "1".."N" for manual saves, "auto-1".."auto-6" for rotating auto saves.
var saves = {};

saves.pageCount = 8;
saves.slotsPerPage = 6;
saves.autoCount = 6;
saves.minVersion = 21;
saves.dbName = "HatMP_saves";
saves.legacyPrefix = "HatMP_";
saves.page = 1;            // 0 = auto page, 1..pageCount = manual pages
saves.mode = "save";       // "save" | "load"
saves.renderToken = 0;
saves.dbPromise = null;

//---------------------------------------------------------------------------
// Storage
//---------------------------------------------------------------------------

saves.openDb = function () {
    if (saves.dbPromise !== null)
        return saves.dbPromise;

    saves.dbPromise = new Promise(function (resolve) {
        var request;
        try {
            if (!window.indexedDB) {
                resolve(null);
                return;
            }
            request = window.indexedDB.open(saves.dbName, 2);
        }
        catch (err) {
            console.warn("IndexedDB unavailable, using localStorage for saves.", err);
            resolve(null);
            return;
        }
        request.onupgradeneeded = function () {
            var db = request.result;
            if (!db.objectStoreNames.contains("meta"))
                db.createObjectStore("meta");
            if (!db.objectStoreNames.contains("data"))
                db.createObjectStore("data");
            if (!db.objectStoreNames.contains("settings"))
                db.createObjectStore("settings");
        };
        request.onsuccess = function () { resolve(request.result); };
        request.onerror = function () {
            console.warn("IndexedDB unavailable, using localStorage for saves.", request.error);
            resolve(null);
        };
        request.onblocked = function () { resolve(null); };
    }).then(function (db) {
        return saves.migrateLegacy(db).then(function () { return db; });
    });

    return saves.dbPromise;
};

saves.idbRequest = function (db, storeNames, mode, action) {
    return new Promise(function (resolve, reject) {
        var tx = db.transaction(storeNames, mode);
        var result;
        action(tx, function (value) { result = value; });
        tx.oncomplete = function () { resolve(result); };
        tx.onerror = function () { reject(tx.error); };
        tx.onabort = function () { reject(tx.error); };
    });
};

saves.lsKey = function (store, key) {
    return saves.legacyPrefix + store + "_" + key;
};

saves.getAllMeta = function () {
    return saves.openDb().then(function (db) {
        if (db === null) {
            var list = {};
            for (var i = 0; i < localStorage.length; i++) {
                var name = localStorage.key(i);
                if (name.startsWith(saves.lsKey("meta", ""))) {
                    try {
                        list[name.substring(saves.lsKey("meta", "").length)] = JSON.parse(localStorage.getItem(name));
                    }
                    catch (err) { }
                }
            }
            return list;
        }
        return saves.idbRequest(db, ["meta"], "readonly", function (tx, done) {
            var list = {};
            tx.objectStore("meta").openCursor().onsuccess = function (e) {
                var cursor = e.target.result;
                if (cursor) {
                    list[cursor.key] = cursor.value;
                    cursor.continue();
                }
                else
                    done(list);
            };
        });
    });
};

saves.getData = function (key) {
    return saves.openDb().then(function (db) {
        if (db === null)
            return localStorage.getItem(saves.lsKey("data", key));
        return saves.idbRequest(db, ["data"], "readonly", function (tx, done) {
            tx.objectStore("data").get(key).onsuccess = function (e) {
                done(e.target.result === undefined ? null : e.target.result);
            };
        });
    });
};

saves.putLocal = function (key, meta, data) {
    return saves.openDb().then(function (db) {
        if (db === null) {
            localStorage.setItem(saves.lsKey("data", key), data);
            localStorage.setItem(saves.lsKey("meta", key), JSON.stringify(meta));
            return true;
        }
        return saves.idbRequest(db, ["meta", "data"], "readwrite", function (tx, done) {
            tx.objectStore("meta").put(meta, key);
            tx.objectStore("data").put(data, key);
            done(true);
        });
    });
};

// Writes to browser storage and, when a saves folder is connected, to a file in it.
saves.put = function (key, meta, data) {
    return saves.putLocal(key, meta, data).then(function () {
        return saves.folder.write(key, meta, data).catch(function (err) {
            console.error("Unable to write save file:", err);
            saves.folder.status = "error";
        });
    }).then(function () {
        return true;
    });
};

saves.remove = function (key) {
    return saves.folder.remove(key).catch(function (err) {
        console.error("Unable to delete save file:", err);
    }).then(saves.openDb).then(function (db) {
        if (db === null) {
            localStorage.removeItem(saves.lsKey("data", key));
            localStorage.removeItem(saves.lsKey("meta", key));
            return true;
        }
        return saves.idbRequest(db, ["meta", "data"], "readwrite", function (tx, done) {
            tx.objectStore("meta").delete(key);
            tx.objectStore("data").delete(key);
            done(true);
        });
    });
};

// Copies the old 10 localStorage slots (HatMP_0..HatMP_9) into the new system once.
// Old slots 0-8 become slots 1-9, the old auto save (9) becomes auto-1.
// With IndexedDB the originals are kept as a backup; with the localStorage fallback they are moved.
saves.migrateLegacy = function (db) {
    var flag = saves.legacyPrefix + "savesMigrated";
    try {
        if (localStorage.getItem(flag) !== null)
            return Promise.resolve();
    }
    catch (err) {
        return Promise.resolve();
    }

    var chain = Promise.resolve();
    for (var i = 0; i < 10; i++) {
        (function (i) {
            var legacyName = saves.legacyPrefix + i;
            var data = localStorage.getItem(legacyName);
            if (data === null)
                return;
            var state;
            try {
                state = JSON.parse(data);
            }
            catch (err) {
                return;
            }
            var key = i === 9 ? "auto-1" : String(i + 1);
            var meta = saves.buildMeta(state, null, null);
            chain = chain.then(function () {
                if (db === null) {
                    localStorage.setItem(saves.lsKey("data", key), data);
                    localStorage.setItem(saves.lsKey("meta", key), JSON.stringify(meta));
                    localStorage.removeItem(legacyName);
                    return;
                }
                return saves.idbRequest(db, ["meta", "data"], "readwrite", function (tx) {
                    tx.objectStore("meta").put(meta, key);
                    tx.objectStore("data").put(data, key);
                });
            });
        })(i);
    }
    return chain.then(function () {
        localStorage.setItem(flag, "1");
    }).catch(function (err) {
        console.error("Save migration failed:", err);
    });
};

//---------------------------------------------------------------------------
// Save / load
//---------------------------------------------------------------------------

saves.currentRoomName = function () {
    var thisRoom = "Unknown";
    $.each(g.rooms, function (i, v) {
        if (v.roomID === g.roomID) {
            thisRoom = v.name;
            return false;
        }
    });
    return thisRoom;
};

saves.buildMeta = function (state, roomName, thumb) {
    return {
        savename: state.savename || "",
        saveDt: state.saveDt ? new Date(state.saveDt).toISOString() : new Date().toISOString(),
        version: state.version,
        room: roomName,
        gameDt: state.g && state.g.dt ? new Date(state.g.dt).toISOString() : null,
        thumb: thumb
    };
};

// Records the visible scene as image layers (in 1920x1080 game coordinates)
// so the slot can redraw it as a thumbnail without needing canvas access.
saves.captureScene = function () {
    var ratio = g.ratio || 1;
    var bg = $('#room-background img').first().attr('src') || null;
    var layers = [];

    $('#room-buttons').children('img').each(function () {
        var el = $(this);
        var name = el.attr('data-name') || "";
        var src = el.attr('src');
        if (!src || el.attr('data-room') === "9999" || name.startsWith("phone") || src.indexOf("/999_phone/") > -1)
            return;
        if (this.style.display === "none" || this.style.visibility === "hidden")
            return;
        layers.push([
            src,
            Math.round(parseFloat(this.style.left) / ratio) || 0,
            Math.round(parseFloat(this.style.top) / ratio) || 0,
            Math.round(parseFloat(this.style.width) / ratio) || 0,
            Math.round(parseFloat(this.style.height) / ratio) || 0,
            el.hasClass("room-zindex") ? 1 : 0
        ]);
    });
    layers.sort(function (a, b) { return a[5] - b[5]; });

    return { bg: bg, layers: layers.slice(-40) };
};

// Captures the game state, thumbnail and story percent right now (synchronously).
saves.snapshot = function () {
    var data = menu.save(" ", false);
    var meta = saves.buildMeta(g.saveState, saves.currentRoomName(), saves.captureScene());
    try { meta.storyPct = sc.mainStory.percent(); meta.story = sc.mainStory.shortText(); } catch (err) { }
    return { data: data, meta: meta };
};

saves.store = function (key, snap) {
    return saves.put(key, snap.meta, snap.data).then(function () {
        return true;
    }).catch(function (err) {
        if (!g.saveAlert) {
            g.saveAlert = true;
            alert("Unable to save. Your browser may be blocking the save or you're in incognito mode that doesn't allow saving.");
        }
        console.error("Save failed:", err);
        return false;
    });
};

saves.write = function (key) {
    return saves.store(key, saves.snapshot());
};

saves.autoSave = function () {
    var snap = saves.snapshot(); // taken now; the slot lookup below is asynchronous
    return saves.getAllMeta().then(function (list) {
        var target = null;
        var oldest = null;
        for (var i = 1; i <= saves.autoCount; i++) {
            var key = "auto-" + i;
            if (!list[key]) {
                target = key;
                break;
            }
            var dt = new Date(list[key].saveDt).getTime();
            if (oldest === null || dt < oldest) {
                oldest = dt;
                target = key;
            }
        }
        return saves.store(target, snap);
    });
};
saves.load = function (key) {
    return saves.getData(key).then(function (data) {
        if (data === null)
            return false;
        fame.moanAnimateStop();
        if (g.newLoad)
            char.showGameShell();
        g.newLoad = false;

        var tp = JSON.parse(data);
        var saveVersion = char.applyLoadedState(tp);
        char.finishLoadedState(saveVersion, {
            updateMap: true,
            hideExportDialog: false,
            resetPastSaves: true
        });
        return true;
    });
};

saves.exportSlot = function (key) {
    return saves.getData(key).then(function (data) {
        if (data === null)
            return;
        char.showExportDialog({
            data: data,
            saveID: key,
            showLoad: false,
            showLoadFile: false,
            showSaveFile: true,
            showExportText: true,
            showImportText: false
        });
    });
};

//---------------------------------------------------------------------------
// Saves folder (File System Access API: Chrome / Edge / Opera)
// Every slot is mirrored to "<folder>/slot-<key>.save". Browser storage stays the
// working copy, so the slot grid keeps working when the folder is unavailable.
//---------------------------------------------------------------------------

saves.folder = {
    handle: null,
    status: "none",       // "unsupported" | "none" | "prompt" | "ready" | "error"
    filePrefix: "slot-",
    fileExt: ".save"
};

saves.folder.isSupported = function () {
    return typeof window.showDirectoryPicker === "function";
};

saves.folder.fileName = function (key) {
    return saves.folder.filePrefix + key + saves.folder.fileExt;
};

saves.folder.keyFromFile = function (name) {
    if (!name.startsWith(saves.folder.filePrefix) || !name.endsWith(saves.folder.fileExt))
        return null;
    var key = name.substring(saves.folder.filePrefix.length, name.length - saves.folder.fileExt.length);
    return /^(auto-\d+|\d+)$/.test(key) ? key : null;
};

saves.folder.storeHandle = function (handle) {
    return saves.openDb().then(function (db) {
        if (db === null)
            return;
        return saves.idbRequest(db, ["settings"], "readwrite", function (tx) {
            if (handle === null)
                tx.objectStore("settings").delete("folder");
            else
                tx.objectStore("settings").put(handle, "folder");
        });
    });
};

// Restores the remembered folder. Browsers ask for permission again after a reload,
// which needs a click, so the folder may come back in the "prompt" state.
saves.folder.init = function () {
    if (!saves.folder.isSupported()) {
        saves.folder.status = "unsupported";
        return Promise.resolve();
    }
    if (saves.folder.initPromise)
        return saves.folder.initPromise;

    saves.folder.initPromise = saves.openDb().then(function (db) {
        if (db === null)
            return null;
        return saves.idbRequest(db, ["settings"], "readonly", function (tx, done) {
            tx.objectStore("settings").get("folder").onsuccess = function (e) {
                done(e.target.result || null);
            };
        });
    }).then(function (handle) {
        if (handle === null)
            return;
        saves.folder.handle = handle;
        return handle.queryPermission({ mode: "readwrite" }).then(function (state) {
            if (state === "granted") {
                saves.folder.status = "ready";
                return saves.folder.sync();
            }
            saves.folder.status = "prompt";
        });
    }).catch(function (err) {
        console.error("Unable to restore saves folder:", err);
        saves.folder.status = "error";
    });
    return saves.folder.initPromise;
};

// Must run from a click handler.
saves.folder.choose = function () {
    return window.showDirectoryPicker({ id: "hatmp-saves", mode: "readwrite" }).then(function (handle) {
        saves.folder.handle = handle;
        saves.folder.status = "ready";
        return saves.folder.storeHandle(handle).then(saves.folder.sync);
    }).catch(function (err) {
        if (err && err.name !== "AbortError")
            console.error("Unable to open saves folder:", err);
    });
};

// Must run from a click handler.
saves.folder.reconnect = function () {
    if (saves.folder.handle === null)
        return saves.folder.choose();
    return saves.folder.handle.requestPermission({ mode: "readwrite" }).then(function (state) {
        if (state !== "granted")
            return;
        saves.folder.status = "ready";
        return saves.folder.sync();
    }).catch(function (err) {
        console.error("Unable to reconnect saves folder:", err);
        saves.folder.status = "error";
    });
};

saves.folder.disconnect = function () {
    saves.folder.handle = null;
    saves.folder.status = "none";
    return saves.folder.storeHandle(null);
};

saves.folder.write = function (key, meta, data) {
    if (saves.folder.status !== "ready")
        return Promise.resolve();
    var content = JSON.stringify({ format: "HatMP-slot", key: key, meta: meta, data: data });
    return saves.folder.handle.getFileHandle(saves.folder.fileName(key), { create: true }).then(function (fileHandle) {
        return fileHandle.createWritable();
    }).then(function (writable) {
        return writable.write(content).then(function () { return writable.close(); });
    });
};

saves.folder.remove = function (key) {
    if (saves.folder.status !== "ready")
        return Promise.resolve();
    return saves.folder.handle.removeEntry(saves.folder.fileName(key)).catch(function (err) {
        if (!err || err.name !== "NotFoundError")
            throw err;
    });
};

saves.folder.readAll = function () {
    var files = {};
    var iterator = saves.folder.handle.values();
    var next = function () {
        return iterator.next().then(function (step) {
            if (step.done)
                return files;
            var entry = step.value;
            var key = entry.kind === "file" ? saves.folder.keyFromFile(entry.name) : null;
            if (key === null)
                return next();
            return entry.getFile().then(function (file) {
                return file.text();
            }).then(function (text) {
                try {
                    var parsed = JSON.parse(text);
                    if (parsed && parsed.meta && typeof parsed.data === "string")
                        files[key] = parsed;
                }
                catch (err) {
                    console.warn("Skipping unreadable save file " + entry.name);
                }
                return next();
            });
        });
    };
    return next();
};

// Two-way sync by save time: newer files are pulled into the browser,
// browser saves that are newer or missing from the folder are written out.
saves.folder.sync = function () {
    if (saves.folder.status !== "ready")
        return Promise.resolve();
    return Promise.all([saves.folder.readAll(), saves.getAllMeta()]).then(function (results) {
        var files = results[0];
        var local = results[1];
        var chain = Promise.resolve();
        var time = function (meta) {
            var t = meta ? new Date(meta.saveDt).getTime() : 0;
            return isNaN(t) ? 0 : t;
        };

        $.each(files, function (key, file) {
            if (time(file.meta) > time(local[key]))
                chain = chain.then(function () { return saves.putLocal(key, file.meta, file.data); });
        });
        $.each(local, function (key, meta) {
            if (time(meta) > time(files[key] ? files[key].meta : null)) {
                chain = chain.then(function () {
                    return saves.getData(key).then(function (data) {
                        if (data !== null)
                            return saves.folder.write(key, meta, data);
                    });
                });
            }
        });
        return chain;
    }).catch(function (err) {
        console.error("Saves folder sync failed:", err);
        saves.folder.status = "error";
    });
};

saves.folder.buildButton = function () {
    var status = saves.folder.status;
    if (status === "unsupported")
        return null;

    var btn = $('<span class="sv-tab sv-folder"></span>');
    if (status === "ready") {
        btn.text("Folder: " + saves.folder.handle.name).attr("title", "Saves are mirrored to this folder. Click to choose another folder.");
        btn.on('click', function () { saves.folder.choose().then(saves.renderScreen); });
    }
    else if (status === "prompt" || status === "error") {
        btn.addClass("sv-folder-warn").text("Reconnect folder")
            .attr("title", "Allow access to " + (saves.folder.handle ? saves.folder.handle.name : "the saves folder") + " again to keep writing save files.");
        btn.on('click', function () { saves.folder.reconnect().then(saves.renderScreen); });
    }
    else {
        btn.text("Save to folder…").attr("title", "Pick a folder; every save slot will also be written there as a file.");
        btn.on('click', function () { saves.folder.choose().then(saves.renderScreen); });
    }
    return btn;
};

//---------------------------------------------------------------------------
// Save screen UI
//---------------------------------------------------------------------------

saves.slotKeys = function (page) {
    var keys = [];
    for (var i = 1; i <= saves.slotsPerPage; i++) {
        if (page === 0)
            keys.push(i <= saves.autoCount ? "auto-" + i : null);
        else
            keys.push(String(((page - 1) * saves.slotsPerPage) + i));
    }
    return keys;
};

saves.slotLabel = function (key) {
    return key.startsWith("auto-") ? "Auto " + key.substring(5) : "Slot " + key;
};

saves.restorePage = function () {
    try {
        var stored = parseInt(localStorage.getItem(saves.legacyPrefix + "savePage"), 10);
        if (!isNaN(stored) && stored >= 0 && stored <= saves.pageCount)
            saves.page = stored;
    }
    catch (err) { }
};

saves.setPage = function (page) {
    saves.page = Math.max(0, Math.min(saves.pageCount, page));
    try {
        localStorage.setItem(saves.legacyPrefix + "savePage", String(saves.page));
    }
    catch (err) { }
    saves.renderScreen();
};

saves.formatRealDate = function (iso) {
    var dt = new Date(iso);
    if (isNaN(dt.getTime()))
        return "";
    return dt.toLocaleString(undefined, { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
};

saves.formatGameDate = function (iso) {
    if (!iso)
        return "";
    var dt = new Date(iso);
    if (isNaN(dt.getTime()))
        return "";
    var day = Math.floor((dt.getTime() - g.startDate.getTime()) / (1000 * 3600 * 24)) + 1;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var hours = dt.getHours();
    var minutes = ("0" + dt.getMinutes()).slice(-2);
    var time;
    if (typeof gv !== "undefined" && gv.get("clock24") === "12")
        time = ((hours % 12) || 12) + ":" + minutes + (hours < 12 ? " AM" : " PM");
    else
        time = ("0" + hours).slice(-2) + ":" + minutes;
    return { when: days[dt.getDay()] + " " + time, day: "Day " + day };
};

saves.buildThumb = function (meta) {
    var thumb = $('<div class="sv-thumb"></div>');
    if (!meta.thumb || (!meta.thumb.bg && meta.thumb.layers.length === 0)) {
        thumb.append($('<div class="sv-thumb-empty"></div>').text(meta.room || "No preview"));
        return thumb;
    }
    var scene = $('<div class="sv-scene"></div>');
    if (meta.thumb.bg)
        scene.append($('<img alt="" decoding="async" draggable="false"/>').attr('src', meta.thumb.bg)
            .css({ left: 0, top: 0, width: "1920px", height: "1080px" }));
    $.each(meta.thumb.layers, function (i, l) {
        scene.append($('<img alt="" decoding="async" draggable="false"/>').attr('src', l[0])
            .css({ left: l[1] + "px", top: l[2] + "px", width: l[3] + "px", height: l[4] + "px" }));
    });
    thumb.append(scene);
    return thumb;
};

saves.buildCard = function (key, meta, newestKey) {
    var card = $('<div class="sv-card"></div>');
    if (key === null)
        return card.addClass("sv-card-blank");

    var isAuto = key.startsWith("auto-");
    var head = $('<div class="sv-card-head"></div>').text(saves.slotLabel(key));
    card.append(head);

    if (!meta) {
        card.addClass("sv-card-empty");
        card.append($('<div class="sv-thumb"><div class="sv-thumb-empty">Empty</div></div>'));
        card.append($('<div class="sv-card-info"></div>'));
        if (saves.mode === "save" && !isAuto) {
            card.addClass("sv-card-active").on('click', function () {
                saves.write(key).then(function () { saves.renderScreen(); });
            });
        }
        return card;
    }

    var incompatible = meta.version < saves.minVersion;
    if (key === newestKey) {
        card.addClass("sv-card-newest");
        head.append('<span class="sv-badge">NEW</span>');
    }
    card.append(saves.buildThumb(meta));

    var info = $('<div class="sv-card-info"></div>');
    info.append($('<div class="sv-card-room"></div>').text(incompatible ? "Incompatible save" : (meta.room || meta.savename)));
    var gameDate = saves.formatGameDate(meta.gameDt); if (gameDate) info.append($('<div class="sv-card-line sv-story"></div>').append($('<span></span>').text(gameDate.when)).append($('<span></span>').text(gameDate.day)));
    if (typeof meta.storyPct === "number")
        info.append($('<div class="sv-card-line sv-story"></div>').append($('<span></span>').text(meta.story || "")).append($('<span></span>').text(meta.storyPct + "%")));
    info.append($('<div class="sv-card-line sv-dim"></div>').text(saves.formatRealDate(meta.saveDt)));
    card.append(info);

    var label = saves.slotLabel(key) + " - " + (meta.room || meta.savename);
    var tools = $('<div class="sv-tools"></div>');
    tools.append($('<span class="sv-tool" title="Export Save">Export</span>').on('click', function (e) {
        e.stopPropagation();
        saves.exportSlot(key);
    }));
    tools.append($('<span class="sv-tool sv-tool-del" title="Delete Save">Delete</span>').on('click', function (e) {
        e.stopPropagation();
        saves.confirm("delete", key, label);
    }));
    card.append(tools);

    if (saves.mode === "load" && !incompatible) {
        card.addClass("sv-card-active").on('click', function () {
            if (g.newLoad) {
                chat(-1, 0);
                saves.load(key);
            }
            else
                saves.confirm("load", key, label);
        });
    }
    else if (saves.mode === "save" && !isAuto) {
        card.addClass("sv-card-active").on('click', function () {
            saves.confirm("replace", key, label);
        });
    }
    return card;
};

saves.confirm = function (action, key, label) {
    var config = {
        replace: { promptText: "Are you sure you wish to overwrite save: ", promptLeft: 650, image: "999_phone/save.png", cancel: "999_phone/cancel_grey.png" },
        load: { promptText: "Are you sure you wish to load: ", promptLeft: 750, image: "999_phone/load.png", cancel: "999_phone/cancel.png" },
        delete: { promptText: "Are you sure you wish to delete: ", promptLeft: 750, image: "999_phone/delete.png", cancel: "999_phone/cancel_grey.png" }
    }[action];

    phone.showSaveConfirmDialog({
        overlayName: "phone_save_verify",
        promptLeft: config.promptLeft,
        promptText: config.promptText,
        labelText: label,
        confirmName: "phone_save_" + action + "_verify_" + key,
        confirmImage: config.image,
        cancelImage: config.cancel
    });
};

saves.buildPager = function () {
    var pager = $('<div class="sv-pager"></div>');
    var addBtn = function (text, page, extraClass) {
        var btn = $('<span class="sv-page"></span>').text(text);
        if (extraClass)
            btn.addClass(extraClass);
        if (page === saves.page)
            btn.addClass("sv-page-current");
        if (page < 0 || page > saves.pageCount)
            btn.addClass("sv-page-disabled");
        else
            btn.on('click', function () { saves.setPage(page); });
        pager.append(btn);
    };

    var windowSize = 10;
    var first = Math.max(1, Math.min(saves.page - Math.floor(windowSize / 2), saves.pageCount - windowSize + 1));
    var last = Math.min(saves.pageCount, first + windowSize - 1);

    addBtn("<", saves.page - 1, "sv-page-arrow");
    addBtn("A", 0);
    if (first > 1)
        addBtn("1", 1);
    if (first > 2)
        pager.append('<span class="sv-page-gap">…</span>');
    for (var p = first; p <= last; p++)
        addBtn(String(p), p);
    if (last < saves.pageCount - 1)
        pager.append('<span class="sv-page-gap">…</span>');
    if (last < saves.pageCount)
        addBtn(String(saves.pageCount), saves.pageCount);
    addBtn(">", saves.page + 1, "sv-page-arrow");
    return pager;
};

saves.renderScreen = function () {
    var token = ++saves.renderToken;
    if (g.newLoad)
        saves.mode = "load";

    saves.folder.init().then(saves.getAllMeta).then(function (list) {
        if (token !== saves.renderToken)
            return;

        var newestKey = null;
        var newest = 0;
        $.each(list, function (key, meta) {
            var dt = new Date(meta.saveDt).getTime();
            if (dt > newest) {
                newest = dt;
                newestKey = key;
            }
        });

        $('[data-name="phone_savescreen"]').remove();
        var screen = $('<div class="sv-screen room-zindex" data-name="phone_savescreen" data-room="9999"></div>');
        screen.css('--r', g.ratio);

        var top = $('<div class="sv-top"></div>');
        var tabs = $('<div class="sv-tabs"></div>');
        if (!g.newLoad) {
            tabs.append($('<span class="sv-tab">Save</span>').toggleClass("sv-tab-current", saves.mode === "save")
                .on('click', function () { saves.mode = "save"; saves.renderScreen(); }));
        }
        tabs.append($('<span class="sv-tab">Load</span>').toggleClass("sv-tab-current", saves.mode === "load")
            .on('click', function () { saves.mode = "load"; saves.renderScreen(); }));
        top.append(tabs);
        top.append($('<div class="sv-title"></div>').text(saves.page === 0 ? "Automatic Saves" : "Page " + saves.page));
        var actions = $('<div class="sv-actions"></div>');
        actions.append(saves.folder.buildButton());
        actions.append($('<span class="sv-tab">Import</span>').on('click', function () {
            invoker.invoke(9999, "btnclick", "phone_save_import");
        }));
        top.append(actions);
        screen.append(top);

        var grid = $('<div class="sv-grid"></div>');
        $.each(saves.slotKeys(saves.page), function (i, key) {
            grid.append(saves.buildCard(key, key === null ? null : list[key], newestKey));
        });
        screen.append(grid);
        screen.append(saves.buildPager());

        $('#room-buttons').append(screen);
    }).catch(function (err) {
        console.error("Unable to read saves:", err);
    });
};

saves.isScreenOpen = function () {
    return $('[data-name="phone_savescreen"]').length > 0;
};

saves.handleKey = function (e) {
    if (!saves.isScreenOpen() || $('[data-name="phone_save_verify"]').length > 0)
        return;
    if (e.key === "ArrowLeft" || e.key === "PageUp")
        saves.setPage(saves.page - 1);
    else if (e.key === "ArrowRight" || e.key === "PageDown")
        saves.setPage(saves.page + 1);
    else
        return;
    e.preventDefault();
    e.stopPropagation();
};

saves.restorePage();
document.addEventListener('keydown', saves.handleKey, true);
