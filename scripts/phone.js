var phone = {};
var room9999 = {};
phone.charPointer = 0;
phone.preservedMenuOverlay = null;
//var pic = {};

phone.mainButtons = function () {
    return [
        { n: "phone_save", img: "bSave", x: 0, y: 0 },
        { n: "phone_rel", img: "bRelationships", x: 1, y: 0 },
        { n: "phone_contacts", img: "bContacts", x: 2, y: 0 },
        { n: "phone_pic", img: "bPic", x: 3, y: 0 },
        { n: "phone_time", img: "bTime", x: 0, y: 1 },
        { n: "phone_purity", img: "bPurity", x: 1, y: 1 },
        { n: "phone_ach", img: "bAch", x: 2, y: 1 },
        { n: "phone_settings", img: "bSettings", x: 3, y: 1 },
        { n: "phone_cheat", img: "bCheat", x: 0, y: 2 },
        { n: "phone_help", img: "bHelp", x: 1, y: 2 },
        { n: "phone_patron", img: "bPatron", x: 2, y: 2 },
        { n: "phone_thankyou", img: "bPatreon", x: 3, y: 2 }
    ];
};

phone.findMainButton = function (name) {
    return phone.mainButtons().find(function (button) {
        return button.n === name;
    }) || null;
};

phone.getAchievementGroups = function (index) {
    switch (index) {
        case 0: return ["panties", "bra"];
        case 1: return ["oral", "anal", "vaginal"];
        case 2: return ["fuck"];
        case 3: return ["event", "school", "pinkroom"];
        case 4: return ["end"];
        default: return [];
    }
};

phone.showAchievementGroup = function (index) {
    phone.charPointer = index;
    invoker.invoke(9999, "btnclick", "phone_ach_draw");
};

phone.isOpen = function () {
    return $('[data-name="phonex_reserve"]:visible').length > 0;
};

phone.close = function () {
    if (!phone.isOpen())
        return false;

    phone.clear(true);
    phone.restoreMenuOverlay();
    return true;
};

phone.handleSaveMenuAction = function (name) {
    let slotId;

    if (name === "phone_save_load_cancel") {
        phone.saveMenu();
        return true;
    }

    if (name.startsWith("phone_save_replace_verify_")) {
        slotId = name.replace("phone_save_replace_verify_", "");
        menu.saveDel('HatMP_' + slotId);
        menu.save('HatMP_' + slotId, true);
        phone.saveMenu();
        return true;
    }

    if (name.startsWith("phone_save_replace_")) {
        slotId = name.replace("phone_save_replace_", "");
        phone.showSaveConfirmDialog({
            overlayName: "phone_replace_verify",
            promptLeft: 650,
            promptText: "Are you sure you wish to overwrite save: ",
            slotId: slotId,
            confirmName: "phone_save_replace_verify_" + slotId,
            confirmImage: "999_phone/save.png",
            cancelImage: "999_phone/cancel_grey.png"
        });
        return true;
    }

    if (name.startsWith("phone_save_load_verify_")) {
        slotId = name.replace("phone_save_load_verify_", "");
        chat(-1, 0);
        menu.load('HatMP_' + slotId);
        return true;
    }

    if (name.startsWith("phone_save_load_")) {
        slotId = name.replace("phone_save_load_", "");
        if (g.newLoad) {
            chat(-1, 0);
            menu.load('HatMP_' + slotId);
        }
        else {
            phone.showSaveConfirmDialog({
                overlayName: "phone_load_verify",
                promptLeft: 750,
                promptText: "Are you sure you wish to load: ",
                slotId: slotId,
                confirmName: "phone_save_load_verify_" + slotId,
                confirmImage: "999_phone/load.png",
                cancelImage: "999_phone/cancel.png"
            });
        }
        return true;
    }

    if (name.startsWith("phone_save_delete_verify_")) {
        slotId = name.replace("phone_save_delete_verify_", "");
        menu.saveDel('HatMP_' + slotId);
        phone.saveMenu();
        return true;
    }

    if (name.startsWith("phone_save_delete_")) {
        slotId = name.replace("phone_save_delete_", "");
        phone.showSaveConfirmDialog({
            overlayName: "phone_load_verify",
            promptLeft: 750,
            promptText: "Are you sure you wish to delete: ",
            slotId: slotId,
            confirmName: "phone_save_delete_verify_" + slotId,
            confirmImage: "999_phone/delete.png",
            cancelImage: "999_phone/cancel_grey.png"
        });
        return true;
    }

    if (name.startsWith("phone_save_export_")) {
        slotId = name.replace("phone_save_export_", "");
        char.export(slotId);
        return true;
    }

    if (name.startsWith("phone_save_save_")) {
        slotId = name.replace("phone_save_save_", "");
        menu.save('HatMP_' + slotId, true);
        phone.saveMenu();
        return true;
    }

    return false;
};

phone.handleSettingsAction = function (name) {
    if (name.startsWith("phone_setting_diff")) {
        gv.set("difficulty", parseInt(name.replace("phone_setting_diff", "")));
        phone.settings();
        return true;
    }

    if (name.startsWith("phone_setting_clock")) {
        gv.set("clock24", name.replace("phone_setting_clock", ""));
        nav.buildclock();
        phone.settings();
        return true;
    }

    if (name === "phone_setting_encM" || name === "phone_setting_encF" ||
        name === "phone_setting_encBeast" || name === "phone_setting_encMyth") {
        gv.set(name.replace("phone_setting_", ""), !gv.get(name.replace("phone_setting_", "")));
        phone.settings();
        return true;
    }

    if (name === "phone_setting_d_on") {
        gv.set("transformation", "voluntary");
        phone.settings();
        return true;
    }

    if (name === "phone_setting_d_off") {
        gv.set("transformation", "voluntaryoff");
        phone.settings();
        return true;
    }

    if (name === "phone_setting_d_auto") {
        gv.set("transformation", "forced");
        phone.settings();
        return true;
    }

    if (name === "phone_setting_m" || name === "phone_setting_f" || name === "phone_setting_a") {
        gv.set("pronouns", name.replace("phone_setting_", ""));
        phone.settings();
        return true;
    }

    return false;
};

phone.handlePrefixAction = function (name) {
    if (name.startsWith("phone_photo_")) {
        phone.clear(false);
        var imgName = name.replace("phone_photo_", "");
        for (var i = 0; i < pic.master.length; i++) {
            if (pic.master[i].name === imgName) {
                nav.button({
                    "type": "zimg",
                    "name": "phone_photo_",
                    "left": 451,
                    "top": 155,
                    "width": 1185,
                    "height": 815,
                    "image": "999_phone/pic/" + pic.master[i].image,
                }, 9999);
            }
            phone.backbutton("phone_pic");
        }
        return true;
    }

    if (name.startsWith("phone_charselect_")) {
        phone.characterSelect(name.replace("phone_charselect_", ""));
        return true;
    }

    if (name.startsWith("phone_modtime")) {
        var modTime = name.replace("phone_modtime_", "");
        if (modTime === "x") {
            char.addtime(58);
            char.room(g.roomID);
        }
        else {
            var timeHour = parseInt(modTime);
            if (timeHour === 0)
                g.dt.setDate(g.dt.getDate() + 1);
            char.settime(parseInt(modTime), 0);
            char.room(g.roomID);
        }
        return true;
    }

    if (name.startsWith("phone_charsel_")) {
        nav.killbuttonStartsWith("phone_charsel_");
        var charstep1 = name.replace("phone_charsel_", "");
        var varstep2 = charstep1.split("_");
        var ch = sc.getMission(varstep2[0], varstep2[1]);
        var roomList = "";
        nav.t({
            type: "zimg",
            name: "phone_charsel_" + sc.charMission[ch.i].name + "_" + sc.charMission[ch.i].mission[ch.j].missionName,
            "left": 850,
            "top": 250,
            font: 30,
            hex: "#ffffff",
            text: sc.charMission[ch.i].mission[ch.j].title + " [" + sc.mStatus(sc.charMission[ch.i].mission[ch.j].mStatus) + "]"
        }, 9999);
        nav.t({
            type: "zimg",
            name: "phone_charsel_",
            "left": 900,
            "top": 300,
            font: 20,
            hex: "#ffffff",
            text: sc.charMission[ch.i].mission[ch.j].desc
        }, 1);
        nav.button({
            "type": "zbtn",
            "name": "phone_charselect_" + varstep2[0],
            "left": 800,
            "top": 250,
            "width": 40,
            "height": 40,
            "image": "999_phone/char_down.png",
        }, 9999);
        let taskcounter = 0;
        for (i = 0; i < sc.charMission[ch.i].mission[ch.j].task.length; i++) {
            if (sc.charMission[ch.i].mission[ch.j].task[i].show) {
                roomList = " @: " + (g.getRooms(sc.charMission[ch.i].mission[ch.j].task[i].roomId).name ?? "");
                var tcolor = "#ffffff";
                var mstatus;
                switch (sc.mStatus(sc.charMission[ch.i].mission[ch.j].task[i].mStatus)) {
                    case "Failed": tcolor = "#cc3333"; mstatus = " ✘ "; break;
                    case "Completed": tcolor = "#33cc33"; mstatus = " ☑ "; break;
                    case "Not Started": tcolor = "#999999"; mstatus = " ☐ "; break;
                    default: tcolor = "#ffffff"; mstatus = " ";
                }
                nav.t({
                    type: "zimg",
                    name: "phone_charsel_",
                    "left": 910,
                    "top": 350 + (taskcounter * 40),
                    font: 24,
                    hex: tcolor,
                    text: mstatus + sc.charMission[ch.i].mission[ch.j].task[i].txt + roomList
                }, 1);
                taskcounter++;
            }
        }
        return true;
    }

    if (name.startsWith("phone_cheatmod")) {
        if (name === "phone_cheatmod_money") {
            gv.mod("money", 100);
            phone.cheat();
            $('#char_alert').hide();
        }
        else if (name === "phone_cheatmod_on") {
            gv.set("cheatMode", true);
            phone.cheat();
        }
        else {
            var cheatLevel = name.replace("phone_cheatmod_level_", "");
            levels.mod(cheatLevel, 100);
            phone.cheat();
            $('#char_alert').hide();
        }
        return true;
    }

    if (name.startsWith("phone_charRename_")) {
        var charrename = name.replace("phone_charRename_", "");
        sc.setcharname(charrename, $(".room-img[data-name='phone_charRenameDisplay']").val());
        g.popUpNoticeBottom(sc.n(charrename) + " has been renamed.");
        return true;
    }

    if (name.startsWith("phone_purity_")) {
        let purid = parseInt(name.replace("phone_purity_", ""));
        nav.killbuttonStartsWith("phone_purity");
        phone.backbutton("phone_purity");
        phone.showPanel("999_phone/purity_bg.jpg", "phone_purity");
        phone.addPurityText({
            left: 500,
            top: 200,
            font: 60,
            hex: "#000000",
            text: sex.st[purid].d,
            zindex: 1
        });
        phone.addPurityDetailRow(300, "Boys: ", sex.st[purid].ent[0], 1);
        phone.addPurityDetailRow(350, "Girls: ", sex.st[purid].ent[1], 1);
        phone.addPurityDetailRow(400, "Non-binary: ", sex.st[purid].ent[2], 1);
        phone.addPurityNamesColumnHeaders();
        phone.addPurityNames(sex.st[purid], 1);
        return true;
    }

    return false;
};

phone.changeCharacterPage = function (delta) {
    phone.charPointer += delta;
    phone.characters();
};

phone.openExternal = function (url) {
    window.open(url, "_blank");
};

phone.help = function () {
    phone.clear(false);
    $('#room-buttons').append('<div class="room-img resize" data-name="phone_help_bg" style="position:absolute; z-index:2; ' +
        g.makeCss(815, 1185, 155, 451) + ' background:#111114;"></div>');
    $('#room-buttons').append('<div class="room-img resize" data-name="phone_help_inner" style="position:absolute; z-index:2; ' +
        g.makeCss(735, 1095, 195, 496) + ' background:#19191d; border:2px solid #2f3140; border-radius:18px;"></div>');

    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 225,
        font: 42,
        hex: "#ffffff",
        text: "Keyboard Shortcuts"
    }, 9999);

    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 325,
        font: 26,
        hex: "#ffffff",
        text: "I  -  Open or close inventory"
    }, 9999);
    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 385,
        font: 26,
        hex: "#ffffff",
        text: "Space  -  Advance single-step dialog or Next scenes"
    }, 9999);
    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 445,
        font: 26,
        hex: "#ffffff",
        text: "S  -  Toggle chat auto-skip when available"
    }, 9999);
    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 505,
        font: 26,
        hex: "#ffffff",
        text: "1-9  -  Pick visible chat choices by order"
    }, 9999);
    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 565,
        font: 26,
        hex: "#ffffff",
        text: "Middle Click Phone  -  Open save menu"
    }, 9999);
    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 625,
        font: 26,
        hex: "#ffffff",
        text: "Esc  -  Close phone"
    }, 9999);
    nav.t({
        type: "zimg",
        name: "phone_help",
        left: 550,
        top: 695,
        font: 22,
        hex: "#ffd7f5",
        text: "Some scenes still require direct clicks."
    }, 9999);

    $('#room-buttons').append('<div class="room-img resize" data-name="phone_help_site" style="position:absolute; z-index:2; ' +
        g.makeCss(68, 360, 735, 550) + ' background:#1f3a8a; border:2px solid #ffffff; border-radius:12px;"></div>');
    nav.button({
        "type": "zbtn",
        "name": "phone_help_site",
        "left": 550,
        "top": 735,
        "width": 360,
        "height": 68,
        "image": "1002_quickfight/black20Alpha.png",
    }, 9999);
    nav.tcenter({
        type: "zbtn",
        name: "phone_help_site",
        left: 550,
        width: 360,
        top: 755,
        font: 26,
        hex: "#ffffff",
        text: "Open Support Site"
    }, 9999);
};

phone.drawAchievements = function () {
    phone.clear(false);
    var groups = phone.getAchievementGroups(phone.charPointer);
    phone.showPanel("999_phone/Achievements_bg.jpg");
    phone.drawAchievementTabs();

    let newAchList = trophy.st
        .filter(item => groups.includes(item.group))
        .sort((a, b) => {
            const indexA = groups.indexOf(a.group);
            const indexB = groups.indexOf(b.group);

            if (indexA !== indexB)
                return indexA - indexB;

            return a.o - b.o;
        });

    for (let i = 0; i < newAchList.length; i++)
        phone.addAchievementCard(newAchList[i], i);
};

phone.build = function (selection = null) {
    phone.clear(true);
    phone.captureMenuOverlay();
    inv.close(phone.preservedMenuOverlay !== null);
    var btnList = phone.mainButtons();

    nav.button({
        "type": "zimg",
        "name": "phonex_reserve",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "999_phone/" + inv.get(inv.phone).image,
    }, 9999);
    nav.button({
        "type": "zbtn",
        "name": "phonex_power",
        "left": 1662,
        "top": 181,
        "width": 90,
        "height": 90,
        "image": "999_phone/power.png",
    }, 9999);
    nav.button({
        "type": "zbtn",
        "name": "phonex_menu",
        "left": 1662,
        "top": 375,
        "width": 90,
        "height": 75,
        "image": "999_phone/hamburger.png",
    }, 9999);
    $.each(btnList, function (i, v) {
        nav.button({
            "type": "zbtn",
            "name": v.n,
            "left": 475 + (v.x * 300),
            "top": 180 + (v.y * 260),
            "width": 200,
            "height": 250,
            "image": "999_phone/" + v.img + ".png",
        }, 9999);
    });

    if (selection !== null) {
        if (selection === "save") {
            invoker.invoke(9999, "btnclick", "phone_save");
            nav.killbutton("phonex_menu");
        }
        else if (selection === "time") {
            invoker.invoke(9999, "btnclick", "phone_time");
            nav.killbutton("phonex_menu");
        }
        else {
            invoker.invoke(9999, "btnclick", selection);
            nav.killbutton("phonex_menu");
        }
    }
};

phone.captureMenuOverlay = function () {
    var overlay = $('#room-menuButtons');

    if (inv.isOpen || !overlay.is(":visible") || overlay.children().length === 0) {
        phone.preservedMenuOverlay = null;
        return;
    }

    phone.preservedMenuOverlay = {
        background: overlay.css('background'),
        children: overlay.children().detach()
    };
    overlay.hide().html('');
};

phone.restoreMenuOverlay = function () {
    var overlay = $('#room-menuButtons');

    if (phone.preservedMenuOverlay === null)
        return false;

    overlay.html('');
    if (phone.preservedMenuOverlay.background)
        overlay.css('background', phone.preservedMenuOverlay.background);
    overlay.append(phone.preservedMenuOverlay.children);
    overlay.show();
    phone.preservedMenuOverlay = null;
    return true;
};

phone.clear = function (clearAll) {
    nav.killbuttonStartsWith("phone_");
    if (clearAll)
        nav.killbuttonStartsWith("phonex_");
};

phone.backbutton = function (icon) {
    var button = phone.findMainButton(icon);
    if (button !== null) {
        nav.button({
            "type": "zbtn",
            "name": button.n,
            "left": 1662,
            "top": 525,
            "width": 90,
            "height": 112,
            "image": "999_phone/" + button.img + ".png",
        }, 9999);
    }
};

phone.showSaveConfirmDialog = function (config) {
    nav.button({
        "type": "zimg",
        "name": config.overlayName,
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "999_phone/verify.png",
    }, 9999);

    nav.t({
        type: "zimg",
        name: "phone_",
        left: config.promptLeft,
        top: 400,
        font: 30,
        hex: "#ffffff",
        text: config.promptText
    }, 1);
    nav.t({
        type: "zimg",
        name: "phone_",
        left: 650,
        top: 450,
        font: 30,
        hex: "#ffffff",
        text: $("[data-name='phone_save_load_name_" + config.slotId + "']").text()
    }, 1);
    nav.button({
        "type": "zbtn",
        "name": config.confirmName,
        "left": 650,
        "top": 600,
        "width": 250,
        "height": 100,
        "image": config.confirmImage,
    }, 9999);
    nav.button({
        "type": "zbtn",
        "name": "phone_save_load_cancel",
        "left": 1030,
        "top": 600,
        "width": 250,
        "height": 100,
        "image": config.cancelImage,
    }, 9999);
};

phone.showPanel = function (image, name = "phone_") {
    nav.button({
        "type": "zimg",
        "name": name,
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": image,
    }, 9999);
};

phone.addCharacterCard = function (character, row, column) {
    const top = 180 + (row * 220);
    const left = 485 + (column * 190);

    $('#room-buttons').append('<div class="room-img resize" data-name="phone_char_bg" ' +
        'style="position: absolute; background: ' + character.hex + '; z-index:2; ' +
        g.makeCss(150, 150, top, left) + '">' +
        '</div>');

    nav.button({
        "type": "zbtn",
        "name": "phone_charselect_" + character.name,
        "left": left,
        "top": top,
        "width": 150,
        "height": 150,
        "image": "../speaker/" + character.image,
    }, 9999);

    nav.t({
        type: "zimg",
        name: "phone_char_",
        "left": left,
        "top": top + 150,
        font: character.display.length < 20 ? 20 : 12,
        hex: "#ffffff",
        text: character.display,
    }, 1);

    $('#room-buttons').append('<div class="resize room-img" data-name="phone_char_" data-room="999" style=" ' +
        g.makeCss(5, (character.l * 15), top + 180, left) +
        '  background: #00ff00; border-radius:100px; z-index:2" ></div>');

    nav.t({
        type: "zimg",
        name: "phone_char_",
        "left": left,
        "top": top + 185,
        font: 20,
        hex: "#ffc2ff",
        text: character.secret > 99 ? "They know" : (character.secret === 0 ? "" : "Suspicious"),
    }, 1);
};

phone.addStatBar = function (config) {
    nav.t({
        type: "zimg",
        name: config.name || "phone_",
        "left": config.left,
        "top": config.top,
        font: config.font || 30,
        hex: config.hex || "#ffffff",
        text: config.label
    }, 1);

    $('#room-buttons').append('<div class="room-img" data-name="phone_charbar" style="position: absolute; bottom: 1%; background: #2d2d40; ' +
        g.makeCss(config.height || 10, config.width, config.top + (config.barOffsetTop || 20), config.left) + ' z-index:2;">' +
        '<div style="background: ' + config.barColor + '; border-radius: 20px; height: ' + g.ratio * (config.height || 10) + 'px; width: ' + config.value + '%;" class="resize-height rl-bar"></div>' +
        '</div>');
};

phone.addPurityText = function (config) {
    nav.t({
        type: config.type || "zimg",
        name: config.name || "phone_purity",
        left: config.left,
        top: config.top,
        font: config.font || 24,
        hex: config.hex || "#ffffff",
        text: config.text
    }, config.zindex || 9999);
};

phone.addPurityColumnHeaders = function (left, top, hex, labels) {
    for (let i = 0; i < labels.length; i++) {
        phone.addPurityText({
            left: left + (i * 50),
            top: top,
            hex: hex,
            text: labels[i]
        });
    }
};

phone.addPurityNamesColumnHeaders = function () {
    const labels = ["Boys: ", "Girls: ", "Non-binary: "];
    for (let i = 0; i < labels.length; i++) {
        phone.addPurityText({
            left: 1100 + (i * 150),
            top: 180,
            hex: "#ffffff",
            text: labels[i]
        });
    }
};

phone.addPurityFirstTime = function (left, top, day, hex, zindex = 9999) {
    phone.addPurityText({
        left: left,
        top: top,
        hex: hex,
        text: day === null ? "" : "First time: Day " + day,
        zindex: zindex
    });
};

phone.addPurityDetailRow = function (top, label, entry, zindex = 9999) {
    phone.addPurityText({
        left: 500,
        top: top,
        hex: "#000000",
        text: label,
        zindex: zindex
    });
    phone.addPurityText({
        left: 650,
        top: top,
        hex: "#000000",
        text: entry.c,
        zindex: zindex
    });
    phone.addPurityFirstTime(750, top, entry.day, "#000000", zindex);
};

phone.addPurityNames = function (purity, zindex = 9999) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < purity.ent[i].names.length; j++) {
            phone.addPurityText({
                left: 1100 + (i * 150),
                top: 210 + (j * 25),
                font: 20,
                text: g.trunc(purity.ent[i].names[j], 15),
                zindex: zindex
            });
        }
    }
};

phone.addPurityOverviewRow = function (purity, top, color, labelLeft, countLefts) {
    phone.addPurityText({
        type: "zbtn",
        name: "phone_purity_" + purity.id,
        left: labelLeft,
        top: top,
        hex: color,
        text: purity.d
    });
    for (let i = 0; i < 3; i++) {
        phone.addPurityText({
            type: "zbtn",
            name: "phone_purity_" + purity.id,
            left: countLefts[i],
            top: top,
            hex: color,
            text: purity.ent[i].c
        });
    }
};

phone.addPuritySummaryLine = function (top, text) {
    phone.addPurityText({
        left: 750,
        top: top,
        text: text
    });
};

phone.addPurityStatLine = function (top, text) {
    phone.addPurityText({
        type: "zbtn",
        left: 1100,
        top: top,
        text: text
    });
};

phone.addAchievementTab = function (name, left, text) {
    nav.t({
        type: "zbtn",
        name: name,
        left: left,
        top: 800,
        font: 30,
        hex: "#ffffff",
        text: text
    }, 9999);
};

phone.drawAchievementTabs = function () {
    phone.addAchievementTab("phone_ach", 550, "Clothing");
    phone.addAchievementTab("phone_ach1", 750, "Sex");
    phone.addAchievementTab("phone_ach2", 950, "Events");
    phone.addAchievementTab("phone_ach3", 1150, "Other");
    phone.addAchievementTab("phone_ach4", 1350, "Endings");
};

phone.addAchievementCard = function (achievement, index) {
    const left = (index % 3 * 380) + 485;
    const top = 200 + (Math.floor(index / 3) * 100);
    const achieved = achievement.ach;

    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": left,
        "top": top,
        "width": 350,
        "height": 84,
        "image": achieved ? "999_phone/ach/" + achievement.img : "999_phone/ach/x.webp",
    }, 9999);

    nav.t({
        type: "zimg",
        name: "phone_",
        "left": left + 95,
        "top": top + 50,
        font: 16,
        hex: "#cccccc",
        text: achieved ? sc.replace(achievement.display) : "Not Achieved"
    }, 9999);

    nav.t({
        type: "zimg",
        name: "phone_",
        "left": left + 95,
        "top": top + 10,
        font: 20,
        hex: "#ffffff",
        text: sc.replace(achievement.title)
    }, 9999);
};

phone.saveMenu = function () {
    let minVersion = 21;
    let mostRecent = new Date(1999, 1, 1);
    let mostRecentRow = null;
    let saveByOrder = new Array();
    phone.clear(false);
    phone.showPanel("999_phone/save_bg.jpg");
    let newestSave = new Date(1900, 0, 0);
    let newestSaveId = -1;
    let savedt;
    for (var i = 0; i < 10; i++) {
        var cookieName = 'HatMP_' + i;
        const top = 180 + (i * 60);
        if (localStorage.getItem(cookieName) !== null) {
            
            var initTemp = JSON.parse(localStorage[cookieName]);
            if (initTemp.saveDt !== undefined && i < 10) {
                savedt = new Date(initTemp.saveDt);
                saveByOrder.push({ id: i, dt: savedt, order: 0 });
                if (savedt > newestSave) {
                    newestSave = savedt;
                    newestSaveId = i;
                }
            }
            if (initTemp.version < minVersion) {
                nav.t({
                    type: "zimg",
                    name: "phone_save_load_name_" + i,
                    left: 520,
                    top: top + 20,
                    font: 25,
                    hex: "#ffffff",
                    text: initTemp.savename.substring(0, 10) + "... Incompatible save. Please Begin a new game. "
                }, 1);
            }
            else {
                nav.button({
                    "type": "zbtn",
                    "name": "phone_save_load_" + i,
                    "left": 520,
                    "top": top,
                    "width": 125,
                    "height": 50,
                    "title": "Load",
                    "image": "999_phone/load.png",
                }, 9999);

                nav.t({
                    type: "zimg",
                    name: "phone_save_load_name_" + i,
                    left: 650,
                    top: top + 10,
                    font: 30,
                    hex: "#ffffff",
                    text: initTemp.savename
                }, 1);
            }

            if (i !== 9) {
                if (!g.newLoad) {
                    nav.button({
                        "type": "zbtn",
                        "name": "phone_save_replace_" + i,
                        "left": 460,
                        "top": top,
                        "width": 50,
                        "height": 50,
                        "title": "Overwrite Save",
                        "image": "999_phone/overwrite.png",
                    }, 9999);
                }

                nav.button({
                    "type": "zbtn",
                    "name": "phone_save_delete_" + i,
                    "left": 1370,
                    "top": top,
                    "width": 125,
                    "height": 50,
                    "title": "Delete Save",
                    "image": "999_phone/delete.png",
                }, 9999);
            }
            else {
                nav.t({
                    type: "zimg",
                    name: "phone_",
                    left: 1360,
                    top: top + 10,
                    font: 30,
                    hex: "#ffffff",
                    text: "[Auto Save]"
                }, 1);
            }
            nav.button({
                "type": "zbtn",
                "name": "phone_save_export_" + i,
                "left": 1530,
                "top": top,
                "width": 50,
                "height": 50,
                "title": "Export Save",
                "image": "999_phone/export.png",
            }, 9999);
        }
        else if (!g.newLoad && i !== 9) {
            nav.button({
                "type": "zbtn",
                "name": "phone_save_save_" + i,
                "left": 520,
                "top": top,
                "width": 125,
                "height": 50,
                "title": "Import Save",
                "image": "999_phone/save.png",
            }, 9999);
        }
    }

    saveByOrder.sort((a, b) => b.dt.getTime() - a.dt.getTime());
    for (i = 0; i < saveByOrder.length; i++) {
        $("div[data-name='phone_save_load_name_" + saveByOrder[i].id + "']")
            .prepend('<span style="font-size:' + (15 * g.ratio) + 'px;">' + (i + 1) + '. </span>');
    }
    if (newestSaveId > -1) {
        $("div[data-name='phone_save_load_name_" + newestSaveId + "']").css({ "color": "#ffc7f6" });
    }

    nav.button({
        "type": "zbtn",
        "name": "phone_save_import",
        "left": 520,
        "top": 180 + (10 * 60),
        "width": 125,
        "height": 50,
        "image": "999_phone/import.png",
    }, 9999);
};

phone.settings = function () {
    phone.clear(false);
    
    var difficulty = gv.get("difficulty");
    var clock24 = gv.get("clock24");
    let encM = gv.get("encM");
    let encF = gv.get("encF");
    let encBeast = gv.get("encBeast");
    let encMyth = gv.get("encMyth");
    let transformation = gv.get("transformation");
    let pronouns = gv.get("pronouns");

    phone.showPanel("999_phone/settingbg.jpg");
    var settings = [
        { y: 0, x: 0, b: 3, n: "diff0", i: "diffEasy", active: difficulty === 0 },
        { y: 0, x: 1, b: 3, n: "diff1", i: "diffNormal", active: difficulty === 1 },
        { y: 0, x: 2, b: 3, n: "diff2", i: "diffHard", active: difficulty === 2 },
        { y: 1, x: 0, b: 2, n: "clock12", i: "clock12", active: clock24 === "12" },
        { y: 1, x: 1, b: 2, n: "clock24", i: "clock24", active: clock24 === "24" },
        { y: 2, x: 0, b: 4, n: "encM", i: "encM", active: encM },
        { y: 2, x: 1, b: 4, n: "encF", i: "encF", active: encF },
        { y: 2, x: 2, b: 4, n: "encBeast", i: "encBeast", active: encBeast },
        { y: 2, x: 3, b: 4, n: "encMyth", i: "encMyth", active: encMyth },
        { y: 3, x: 0, b: 3, n: "d_on", i: "d_on", active: transformation === "voluntary" },
        { y: 3, x: 1, b: 3, n: "d_off", i: "d_off", active: transformation === "voluntaryoff" },
        { y: 3, x: 2, b: 3, n: "d_auto", i: "d_auto", active: transformation === "forced" },
        { y: 4, x: 0, b: 3, n: "m", i: "ident_male", active: pronouns === "m" },
        { y: 4, x: 1, b: 3, n: "f", i: "ident_female", active: pronouns === "f" },
        { y: 4, x: 2, b: 3, n: "a", i: "ident_appearance", active: pronouns === "a" },
    ];
    $.each(settings, function (i, v) {
        nav.button({
            "type": "zbtn",
            "name": "phone_setting_" + v.n,
            "left": 925 + (v.x * (600/v.b)),
            "top": 220 + (v.y * 125),
            "width": 600/v.b,
            "height": 50,
            "image": "999_phone/" + v.i + "_" + (v.active ? "active" : "inactive") + ".png",
        }, 9999);
    });
}

phone.pictures = function () {
    phone.clear(false);

    phone.showPanel("999_phone/pics_bg.jpg");
    var c = 0;
    for (var i = 0; i < pic.master.length; i++) {
        if (pic.master[i].entry) {
            nav.button({
                "type": "zbtn",
                "name": "phone_photo_" + pic.master[i].name,
                "left": 485 + ((c % 7) * 160),
                "top": 200 + (Math.floor(c / 7) * 160),
                "width": 150,
                "height": 150,
                "image": "999_phone/pic/" + pic.master[i].thumb,
            }, 9999);
            c++;
        }
    }
};

phone.characters = function () {
    phone.clear(false);
    phone.showPanel("999_phone/rel_bg.jpg");
    
    let j = 0;
    let i;
    let showCharcterCounter = 0;
    for (i = 0; i < sc.char.length; i++) {
        if (sc.char[i].show) {
            if (showCharcterCounter >= phone.charPointer && j < 18) {
                phone.addCharacterCard(sc.char[i], Math.floor(j / 6), j % 6);
                j++;
            }
            showCharcterCounter++;
        }
    }
    let prevexists = phone.charPointer > 0;
    let nextexist = j > 17;
    nav.button({
        "type": prevexists ? "zbtn" :"zimg",
        "name": "phone_rel_prev",
        "left": 1280,
        "top": 880,
        "width": 150,
        "height": 50,
        "image": "999_phone/prev_" + (prevexists ? "" : "in") + "active.png",
    }, 9999);

    nav.button({
        "type": nextexist ? "zbtn" : "zimg",
        "name": "phone_rel_next",
        "left": 1430,
        "top": 880,
        "width": 150,
        "height": 50,
        "image": "999_phone/next_" + (nextexist ? "" : "in") + "active.png",
    }, 9999);
};

phone.characterSelect = function (name) {
    phone.clear(false);
    phone.backbutton("phone_rel");

    var thisChar = sc.get(name);

    phone.showPanel("999_phone/rel_bg.jpg");

    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 500,
        "top": 170,
        "width": 250,
        "height": 250,
        "image": "../speaker/" + thisChar.image,
    }, 9999);
    if (!thisChar.setName) {
        nav.t({
            type: "zimg",
            name: "phone_",
            "left": 500,
            "top": 425,
            font: 40,
            hex: "#ffffff",
            text: thisChar.display
        }, 1);
    }
    else {
        nav.inputbox({
            "type": "zimg",
            "name": "phone_charRenameDisplay",
            "left": 500,
            "top": 425,
            "width": 250,
            "height": 30,
            "title": thisChar.display,
        }, 9999);
        nav.button({
            "type": "zbtn",
            "name": "phone_charRename_" + thisChar.name,
            "left": 500,
            "top": 480,
            "width": 250,
            "height": 50,
            "image": "999_phone/char_rename.png",
        }, 9999);
    }
    
    nav.t({
        type: "zimg",
        name: "phone_",
        "left": 500,
        "top": 540,
        font: 30,
        hex: "#ffffff",
        text: sc.levelName(sc.i(name))
    }, 1);
    phone.addStatBar({
        left: 500,
        top: 580,
        font: 14,
        hex: "#aaaaaa",
        label: "Till Next Level",
        width: 250,
        value: thisChar.c,
        barColor: "#FF76FF"
    });
    phone.addStatBar({
        left: 500,
        top: 620,
        label: "Secret:",
        width: 250,
        value: thisChar.secret,
        barColor: "#189000",
        barOffsetTop: 30
    });
    var thisTimeline = sc.getTimeline(name);
    
    for (i = 0; i < thisTimeline.subList.length; i++) {
        nav.t({
            type: "zimg",
            name: "phone_",
            "left": 500,
            "top": 680 + (i*22),
            font: 20,
            hex: thisTimeline.subList[i].current ? "#FF76FF" : "#ffffff",
            text: thisTimeline.subList[i].hstart + ":00 " + thisTimeline.subList[i].hend + ":00 " + thisTimeline.subList[i].room
        }, 1);
    }
    if (name === "me") {
        if (sissy.st[0].ach) {
            var locked = '<span style="color:#cc3333">Locked</span>';
            var unlocked = '<span style="color:#33cc33">Unlocked</span>';
            var metxt =
                "Cup size: " + cl.cupsize() + "<br/>" +
                "Ass: " + cl.buttsize() + "<br/>" +
                "Lips: " + cl.lipsize() + "<br/>" +
                "Cock: " + cl.cocksize() + "<br/><br/>" +
                "Wear panties: " + (qdress.st[0].ach ? unlocked : locked) + "<br/>" +
                "Wear bra: " + (qdress.st[1].ach ? unlocked : locked) + "<br/>" +
                "Buy dildos: " + (qdress.st[2].ach ? unlocked : locked) + "<br/>" +
                "Cross dress in public: " + (qdress.st[3].ach ? unlocked : locked) + "<br/>" +
                "Wear earrings: " + (qdress.st[4].ach ? unlocked : locked) + "<br/>" +
                "Seduce men: " + (qdress.st[24].ach ? unlocked : locked) + "<br/>" +
                "Buy sexy clothes: " + (qdress.st[7].ach ? unlocked : locked) + "<br/>" +
                "Wear makeup: " + (qdress.st[5].ach ? unlocked : locked) + "<br/>" +
                "Buy bimbo clothes: " + (qdress.st[8].ach ? unlocked : locked) + "<br/>" +
                "Work as a stripper: " + (qdress.st[25].ach ? unlocked : locked) + "<br/>" +
                "Panties and bra are optional: " + (qdress.st[9].ach ? unlocked : locked) + "<br/>" +
                "Work as a whore: " + (qdress.st[23].ach ? unlocked : locked) + "<br/>" +
                "Lewd in public: " + (qdress.st[10].ach ? unlocked : locked) + "<br/>";
            nav.t({
                type: "zimg",
                name: "phone_charselx",
                "left": 850,
                "top": 180,
                font: 30,
                hex: "#ffffff",
                text: metxt
            }, 9999);
        }
        else if (qdress.st[0].ach) {
            nav.t({
                type: "zimg",
                name: "phone_charselx",
                "left": 850,
                "top": 180,
                font: 30,
                hex: "#ffffff",
                text: "I really like wearing panties. <br />" +
                    "It's like my own private secret that no one knows. <br/>" +
                    "I really need to just wear panties all the time. <br/><br/>"
            }, 9999);
        }
        else {
            nav.t({
                type: "zimg",
                name: "phone_charselx",
                "left": 850,
                "top": 180,
                font: 30,
                hex: "#ffffff",
                text: "I don't know why I'm obsessed with women's panties. <br/>" +
                    "I just like the smell and fell of them. <br/>" +
                    "I should steal some panties."
            }, 9999);
        }
    }
    if (name === "missy") {
        var sissySchoolInvite = "Attend Sissy School Monday - Thursday.";
        var mmood = missy.get("mood");
        var mmoodtxt = "";
        let mtxt;

        if (gv.get("cultEscape") === null) {
            if (!sissy.st[17].ach)
                sissySchoolInvite = g.linebreak("You haven't proven yourself worth of attending the sissy school. Easiest way is to go to work and complete the cases. ", 50);
            else if (sissy.st[21].ach)
                sissySchoolInvite = g.linebreak("Congratulations on passing and proving yourself a true sissy! You can visit the school for additional training. Just take the elevator. ", 50);

            if (mmood > 70)
                mmoodtxt = "Loves her little " + gender.pronoun("sissy") + ".";
            else if (mmood > 30)
                mmoodtxt = "Good " + gender.pronoun("sissy") + ", but do better.";
            else if (mmood > 0)
                mmoodtxt = "You're ok, try harder";
            else if (mmood > -30)
                mmoodtxt = "Disappointed in her " + gender.pronoun("sissy") + ". ";
            else
                mmoodtxt = "Angry at her " + gender.pronoun("sissy") + ". ";

            mtxt =
                "Mood: " + mmoodtxt + "<br/>" +
                "Weekly Pay: $" + missy.get("weeklyPay") + "<br/><hr/>" +
                "Current case: <br/>" +
                g.linebreak(missy.activecase().txt, 50) + "<hr />" +
                "Sissy School: <br/>" +
                sissySchoolInvite;
        }
        else {
            mtxt = "Free Missy!"
        }
        
        nav.t({
            type: "zimg",
            name: "phone_charselx",
            "left": 850,
            "top": 180,
            font: 30,
            hex: "#ffffff",
            text: mtxt
        }, 9999);
    }
    if ((name === "p" || name === "martha") && !sissy.st[21].ach) {
        switch (name) {
            case "p":
                var ptxt = "Pink Room: <br />Must graduate from the Sissy School.";
                nav.t({
                    type: "zimg",
                    name: "phone_charselx",
                    "left": 850,
                    "top": 180,
                    font: 30,
                    hex: "#ffffff",
                    text: ptxt
                }, 9999);
                break;
            case "martha":
                if (gv.get("sissySchoolClass") === "finalx") {
                    var m1txtss = "Sissy School Final! <br/>" +
                        "Days left: " + future.get("sissyfinal") + "<br/>" +
                        "1. Friday Night: Strip at the stip club<br/>" +
                        "2. Saturday Night: Visit the Pink Room at Missy's<br/> &nbsp;&nbsp;&nbsp;&nbsp; before " + nav.convertTime(18, 0) + "<br/>" +
                        "3. At the fast food restaurant get a boy's phone number. <br/>" +
                        "4. Get as many creampies as you can!";
                    nav.t({
                        type: "zimg",
                        name: "phone_charselx",
                        "left": 850,
                        "top": 180,
                        font: 30,
                        hex: "#ffffff",
                        text: m1txtss
                    }, 9999);
                }
                else {
                    var m1txt = "Classes completed: <br/>";
                    var m2txt = "Classes not taken: <br/>";
                    var c1 = new Array();
                    var c2 = new Array();
                    for (let mi = 0; mi < 8; mi++) {
                        c1.push("");
                        c2.push("");
                    }
                    for (let mi = 0; mi < sissy.st.length; mi++) {
                        if (sissy.st[mi].active && sissy.st[mi].y > 0 && sissy.st[mi].y < 7) {
                            if (sissy.st[mi].ach)
                                c1[sissy.st[mi].y] += sissy.st[mi].name + ", ";
                            else {
                                c2[sissy.st[mi].y] += sissy.st[mi].name + ", ";
                            }
                        }
                    }
                    for (let mi = 1; mi < 7; mi++) {
                        if (c1[mi].length > 0) {
                            c1[mi] = c1[mi].replace(/,\s*$/, "");
                            m1txt += g.linebreak(c1[mi], 50) + "<br/>";
                        }
                        if (c2[mi].length > 0) {
                            c2[mi] = c2[mi].replace(/,\s*$/, "");
                            m2txt += g.linebreak(c2[mi], 50) + "<br/>";
                        }
                    }

                    nav.t({
                        type: "zimg",
                        name: "phone_charselx",
                        "left": 850,
                        "top": 180,
                        font: 30,
                        hex: "#ffffff",
                        text: m1txt + "<br /><br />" + m2txt
                    }, 9999);
                }
                break;
        }
    }
    else {
        for (i = 0; i < sc.charMission.length; i++) {
            if (sc.charMission[i].name === thisChar.name) {
                for (j = 0; j < sc.charMission[i].mission.length; j++) {
                    var tcolor = "#ffffff";
                    var mstatus;
                    switch (sc.mStatus(sc.charMission[i].mission[j].mStatus)) {
                        case "Failed": tcolor = "#cc3333"; mstatus = " [Fail]"; break;
                        case "Completed": tcolor = "#33cc33"; mstatus = " ☑"; break;
                        case "Not Started": tcolor = "#999999"; mstatus = ""; break;
                        case "Closed": tcolor = "#3e3e5c"; mstatus = ""; break;
                        default: tcolor = "#ffffff"; mstatus = "";
                    }
                    
                    if (sc.charMission[i].mission[j].missionName.startsWith("*")) {
                        if (tcolor === "#999999")
                            tcolor = "#444444";
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 850,
                            "top": 180 + (j * 80),
                            font: 30,
                            hex: tcolor,
                            text: sc.charMission[i].mission[j].title + mstatus
                        }, 9999);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 1500,
                            "top": 180 + (j * 80),
                            font: 10,
                            hex: tcolor,
                            text: "Ending"
                        }, 9999);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 900,
                            "top": 220 + (j * 80),
                            font: 20,
                            hex: "#999999",
                            text: sc.charMission[i].mission[j].desc
                        }, 1);
                    }
                    else {
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 850,
                            "top": 180 + (j * 80),
                            font: 30,
                            hex: tcolor,
                            text: sc.charMission[i].mission[j].title + mstatus
                        }, 9999);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 900,
                            "top": 220 + (j * 80),
                            font: 20,
                            hex: "#999999",
                            text: sc.charMission[i].mission[j].desc
                        }, 1);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 900,
                            "top": 220 + (j * 80),
                            font: 20,
                            hex: "#ffffff",
                            text: sc.charMission[i].mission[j].desc
                        }, 1);
                    }
                    
                    nav.button({
                        "type": "zbtn",
                        "name": "phone_charsel_" + sc.charMission[i].name + "_" + sc.charMission[i].mission[j].missionName,
                        "left": 800,
                        "top": 180 + (j * 80),
                        "width": 40,
                        "height": 40,
                        "image": "999_phone/char_left.png",
                    }, 9999);
                }
            }
        }
    }
}

phone.thankyou = function () {
    phone.clear(false);

    phone.showPanel("999_phone/thankyou_bg.jpg");
    var l = [
        "Arothiel", "Asako", "Discretlysinful (Aaron M )",
        "Fuck you Arin",
        "geebster",
        "John R. (AngryJ)", "Krueschen", "Kylie V.", "Merchanto", "Orrin",
        "Rachel",
        "reverseclipse",
        "SirGuren (Contributor)", "WendyJ", "Wild86willie"
    ];
    $.each(l, function (i, v) {
        nav.t({
            type: "zimg",
            name: "phone_",
            left: 475,
            top: 180 + (i * 28),
            font: 25,
            hex: "#ffffff",
            text: v
        }, 1);
    });
    
};

phone.passtime = function () {
    phone.clear(false);

    var currentTime = g.gethourdecimal();
    var bgnum = 4;
    if (currentTime >= 20)
        bgnum = 4;
    else if (currentTime >= 17)
        bgnum = 3;
    else if (currentTime >= 9)
        bgnum = 2;
    else if (currentTime >= 6)
        bgnum = 1;

    phone.showPanel("999_phone/time_bg_" + bgnum + ".jpg");
    nav.t({
        type: "zimg",
        name: "phone_time_currenttime",
        left: 800,
        top: 200,
        font: 40,
        hex: "#ffffff",
        text: "Current time: " + nav.friendlyTime()
    }, 1);

    if (g.passtime.includes(g.roomID)) {

        var time = [9, 12, 17, 18, 20, 0];
        var clock = gv.get("clock24");
        var active;

        for (i = 0; i < time.length; i++) {
            if (currentTime < 7)
                active = false;
            else
                active = (currentTime < time[i]) || time[i] === 0;

            nav.button({
                "type": active ? "zbtn" : "zimg",
                "name": "phone_modtime_" + time[i],
                "left": 900,
                "top": 300 + (i * 70),
                "width": 250,
                "height": 50,
                "image": "999_phone/time_" + time[i] + "_" + clock + "_" + (active ? "active" : "inactive") + ".png",
            }, 9999);
        }
        active = currentTime > 6.9 || currentTime < 2;
        nav.button({
            "type": active ? "zbtn" : "zimg",
            "name": "phone_modtime_x",
            "left": 900,
            "top": 750,
            "width": 250,
            "height": 50,
            "image": "999_phone/time_1hour_" + (active ? "active" : "inactive") + ".png",
        }, 9999);
    }
    else {
        nav.t({
            type: "zimg",
            name: "phone_time_currenttime",
            left: 740,
            top: 300,
            font: 40,
            hex: "#ffffff",
            text: "Can't pass the time in this room. "
        }, 1);
    }
};

phone.cheat = function () {
    phone.clear(false);

    if (gv.get("cheatMode")) {
        phone.showPanel("999_phone/cheat_bg.jpg");

        var levelToMod = ["fitness", "charisma"];

        nav.t({
            type: "zimg",
            name: "phone_cheatmod",
            left: 700,
            top: 300,
            font: 40,
            hex: "#ffffff",
            text: "Money: $" + gv.get("money")
        }, 1);

        nav.button({
            "type": "zbtn",
            "name": "phone_cheatmod_money",
            "left": 1200,
            "top": 300,
            "width": 250,
            "height": 50,
            "image": "999_phone/cheat_money.png",
        }, 9999);

        for (var i = 0; i < levelToMod.length; i++) {
            var l = levels.st[levels.i(levelToMod[i])];
            nav.t({
                type: "zimg",
                name: "phone_cheatmod",
                left: 700,
                top: 300 + ((i + 1) * 155),
                font: 40,
                hex: "#ffffff",
                text: l.d + " Level: " + l.l
            }, 1);

            nav.button({
                "type": "zbtn",
                "name": "phone_cheatmod_level_" + levelToMod[i],
                "left": 1200,
                "top": 300 + ((i + 1) * 155),
                "width": 250,
                "height": 50,
                "image": "999_phone/cheat_stats.png",
            }, 9999);
        }
    }
    else {
        phone.showPanel("999_phone/cheat_bg1.jpg");

        nav.button({
            "type": "zbtn",
            "name": "phone_cheatmod_on",
            "left": 651,
            "top": 600,
            "width": 800,
            "height": 100,
            "image": "999_phone/cheat_button.png",
        }, 9999);
    }
};

phone.purity = function () {
    phone.clear(false);
    let penisvirgin = sex.getvirgin(27);
    let oralvirgin = sex.getvirgin(29);
    let pussyvirgin = sex.getvirgin(28);
    let analvirgin = sex.getvirgin(26);

    phone.showPanel("999_phone/purity_bg.jpg", "phone_purity");
    phone.addPurityColumnHeaders(850, 170, "#000", ["Boy", "Girl", "NB"]);
    phone.addPurityColumnHeaders(1450, 170, "#fff", ["Boy", "Girl", "NB"]);
    
    let subcount, domcounter, l, t, col, lm, lf, ln;
    subcount = domcounter = 0;
    
    for (let i = 0; i < sex.st.length; i++) {
        if (i < 26 || i > 29) {
            if (sex.st[i].subdom === "sub") {
                l = 500;
                t = (subcount * 30) + 210;
                col = "#000000";
                lm = 850;
                lf = 900;
                ln = 950;
                subcount++;
            }
            else {
                l = 1100;
                t = (domcounter * 30) + 210;
                col = "#ffffff";
                lm = 1450;
                lf = 1500;
                ln = 1550;
                domcounter++;
            }

            phone.addPurityOverviewRow(sex.st[i], t, col, l, [lm, lf, ln]);
        }
    }
    let penisVirginTxt, analVirginTxt, pussyVirginTxt, oralVirginTxt;
    if (penisvirgin.virgin) {
        if (cl.c.cock === 5)
            penisVirginTxt = "Lost your penis and never used it.";
        else
            penisVirginTxt = "Virgin";
    }
    else {
        penisVirginTxt = "Penis virginity lost to " + penisvirgin.who + " on day: " + penisvirgin.day;
    }

    if (oralvirgin.virgin) {
        oralVirginTxt = "Haven't performed oral on anyone. ";
    }
    else {
        if (oralvirgin.gender === "f")
            oralVirginTxt = "First cunnilingus on " + oralvirgin.who + " on day: " + oralvirgin.day;
        else
            oralVirginTxt = "First cock sucked " + oralvirgin.who + " on day: " + oralvirgin.day;
    }

    if (cl.c.cock === 5) {
        if (pussyvirgin.virgin)
            pussyVirginTxt = "Never been fucked in your pussy";
        else
            pussyVirginTxt = "Lost your pussy virginity to " + pussyvirgin.who + " on day: " + pussyvirgin.day;
    }
    else {
        pussyVirginTxt = ""
    }

    if (cl.c.cock === 5) {
        pussyVirginTxt = "Lost your pussy virginity to " + pussyvirgin.who + " on day: " + pussyvirgin.day;
    }
    else {
        pussyVirginTxt = "No pussy"
    }

    if (analvirgin.virgin)
        analVirginTxt = "Never been fucked up your ass";
    else
        analVirginTxt = "Lost your anal virginity to " + analvirgin.who + " on day: " + analvirgin.day;

    phone.addPuritySummaryLine(840, penisVirginTxt);
    phone.addPuritySummaryLine(870, analVirginTxt);
    phone.addPuritySummaryLine(900, oralVirginTxt);
    phone.addPuritySummaryLine(930, pussyVirginTxt);

    domcounter = 13;
    if (cl.c.cock === 5) {
        phone.addPurityStatLine((domcounter * 30) + 240, "Times you played with your pussy: " + gv.get("masturbate_pussy"));
    }
    domcounter++;
    phone.addPurityStatLine((domcounter * 30) + 240, "Times you played with your penis: " + gv.get("masturbate_dick"));
    domcounter++;
    phone.addPurityStatLine((domcounter * 30) + 240, "Times you used a vibrator on your penis: " + gv.get("masturbate_vibrator"));
    domcounter++;
    phone.addPurityStatLine((domcounter * 30) + 240, "Times sucked on a dildo: " + gv.get("masturbate_oral"));
    domcounter++;
    phone.addPurityStatLine((domcounter * 30) + 240, "Times slid your finger in your anus: " + gv.get("masturbate_finger"));
    domcounter++;
    phone.addPurityStatLine((domcounter * 30) + 240, "Times you fucked a dildo: " + gv.get("masturbate_dildo"));
};

room9999.btnclick = function (name) {
    if (phone.handlePrefixAction(name))
        return;
    else {
        if (phone.handleSaveMenuAction(name))
            return;

        if (phone.handleSettingsAction(name))
            return;

        switch (name) {
            case "phonex_power":
                phone.close();
                break;
            case "phonex_menu":
                phone.clear(true);
                phone.build();
                break;
            case "phone_save":
                phone.saveMenu();
                break;
            case "phone_rel":
                //phone.charPointer = 0;
                phone.characters();
                break;
            case "phone_rel_next":
                phone.changeCharacterPage(18);
                break;
            case "phone_rel_prev":
                phone.changeCharacterPage(-18);
                break;
            case "phone_settings":
                phone.settings();
                break;
            case "phone_pic":
                phone.pictures();
                break;
            case "phone_cheat":
                phone.cheat();
                break;
            case "phone_help":
                phone.help();
                break;
            case "phone_help_site":
                phone.openExternal("http://fapforce5.com");
                break;
            case "phone_patron":
                phone.openExternal("https://www.patreon.com/FF5");
                break;
            case "phone_thankyou":
                phone.thankyou();
                break;
            case "phone_contacts":
                phone.clear(false);
                phone.showPanel("999_phone/call_bg.jpg");
                break;
            case "phone_ach":
                phone.showAchievementGroup(0);
                break;
            case "phone_ach1":
                phone.showAchievementGroup(1);
                break;
            case "phone_ach2":
                phone.showAchievementGroup(2);
                break;
            case "phone_ach3":
                phone.showAchievementGroup(3);
                break;
            case "phone_ach4":
                phone.showAchievementGroup(4);
                break;
            case "phone_ach_draw":
                phone.drawAchievements();
                break;
            case "phone_time":
                phone.passtime();
                break;
            case "phone_save_import":
                char.showExportDialog({
                    data: '',
                    showLoad: true,
                    showLoadFile: true,
                    showSaveFile: false,
                    showExportText: false,
                    showImportText: true
                });
                break;
            case "phone_purity":
                phone.purity();
                break;
            default:
                break;
        }
    }
};

invoker.registerRoom(9999, room9999);

$(document).on('keyup', function (e) {
    if (e.which !== 27 || e.altKey || e.ctrlKey || e.metaKey)
        return;
    if (char.isTypingTarget(e.target))
        return;
    if ($('#room_export').is(":visible"))
        return;

    if (phone.close())
        e.preventDefault();
});
