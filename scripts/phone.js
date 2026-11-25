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
    phone.achPage = 0; //a tab always opens on its first page
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
        saves.write(slotId).then(phone.saveMenu);
        return true;
    }

    if (name.startsWith("phone_save_load_verify_")) {
        slotId = name.replace("phone_save_load_verify_", "");
        chat(-1, 0);
        saves.load(slotId);
        return true;
    }

    if (name.startsWith("phone_save_delete_verify_")) {
        slotId = name.replace("phone_save_delete_verify_", "");
        saves.remove(slotId).then(phone.saveMenu);
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

    //Settings page 2 (Points / Percentage), achievements Other page 2 and cheat pages - added
    if (name === "phone_setting_next") {
        phone.settings2();
        return true;
    }

    if (name === "phone_setting_prev") {
        phone.settings();
        return true;
    }

    if (name === "phone_setting_percent_on" || name === "phone_setting_percent_off") {
        gv.set("showBarPercent", name === "phone_setting_percent_on");
        sstat.makeGraph();
        phone.settings2();
        return true;
    }

    if (name === "phone_setting_points_on" || name === "phone_setting_points_off") {
        gv.set("showAbilityPoints", name === "phone_setting_points_on");
        sstat.makeGraph();
        phone.settings2();
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
        sc.syncSissyClasses(); //keep Mistress Martha's class missions in step with the Sissy School before showing a mission
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
            //title tag: [Failed - Secret Known], [Another Path Chosen]/[Ranch Closed], [Repeatable], [Not Fully Implemented Yet]
            text: sc.charMission[ch.i].mission[ch.j].title + (sc.isSecretFailedMission(sc.charMission[ch.i].mission[ch.j]) ? ' <span style="color:#cc3333">[Failed - Secret Known]</span>' : " [" + (sc.isAltPathMission(sc.charMission[ch.i].name, sc.charMission[ch.i].mission[ch.j].missionName) ? sc.altPathLabel(sc.charMission[ch.i].name, sc.charMission[ch.i].mission[ch.j].missionName) : sc.mStatus(sc.charMission[ch.i].mission[ch.j].mStatus)) + "]") + phone.repeatableTag(sc.charMission[ch.i].mission[ch.j]) + phone.notImplementedTag(sc.charMission[ch.i].mission[ch.j])
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
        let blockedNoteShown = false; //a blocked step's note line is shown once per mission
        for (i = 0; i < sc.charMission[ch.i].mission[ch.j].task.length; i++) {
            var thisTask = sc.charMission[ch.i].mission[ch.j].task[i];
            if (thisTask.show || (thisTask.showWhenDone && thisTask.mStatus > 99) || gv.get("showHiddenTasks")) { //showWhenDone: hidden until completed; cheat toggle shows all
                var roomName = thisTask.roomName ?? g.roomDisplayName(g.getRooms(thisTask.roomId)); //roomName: optional label for a spot inside a room (e.g. Saucy Change Room)
                roomList = roomName === "" ? "" : " @: " + roomName; //no location known - leave off the "@:"
                var tcolor = "#ffffff";
                var mstatus;
                switch (sc.mStatus(sc.charMission[ch.i].mission[ch.j].task[i].mStatus)) {
                    case "Failed": tcolor = "#cc3333"; mstatus = " ✘ "; break;
                    case "Completed": tcolor = thisTask.repeatable ? "#ffffff" : "#33cc33"; mstatus = " ☑ "; break; //repeatable steps show in white
                    case "Not Started": tcolor = "#999999"; mstatus = " ☐ "; break;
                    default: tcolor = "#ffffff"; mstatus = " ";
                }
                var struck = false;
                var orStruck = false; //the other choice of an either/or pair was picked
                //once a mission is finished (Completed, Failed or Closed - e.g. Lola's Sissy after picking Tom),
                //steps that were never reached can't be done any more - strike them out
                var thisMission = sc.charMission[ch.i].mission[ch.j];
                if (thisMission.mStatus > 99 && thisTask.mStatus < 100 && !thisTask.repeatable && !thisTask.optional && !thisTask.notImplemented && !(thisTask.ongoing && thisTask.mStatus > 0)) //optional and WIP (Not Implemented Yet) steps are never struck out
                    struck = true;
                if (thisTask.blocked && thisTask.mStatus < 100) //blocked: can't be done any more (e.g. "Secret Known")
                    struck = true;
                //orTask: this step and another are alternatives - once the other one is done, strike this one out.
                //This also covers a choice the game marked Failed because the other one was picked:
                //it is struck out in grey instead of red. Red is kept for steps that really failed.
                if (thisTask.orTask !== undefined && thisTask.mStatus !== 100) {
                    var otherTask = sc.charMission[ch.i].mission[ch.j].task[thisTask.orTask];
                    if (otherTask && otherTask.mStatus === 100) {
                        struck = true;
                        orStruck = true;
                        mstatus = " ☐ ";
                    }
                }
                //[Another Path Chosen]: every step is struck out, colours stay as they are
                var altPath = sc.isAltPathMission(sc.charMission[ch.i].name, thisMission.missionName);
                //closed by the story (e.g. [Ranch Closed]): only the steps you didn't get to are struck out, in grey
                var closedByStory = altPath && sc.isClosedByStory(sc.charMission[ch.i].name, thisMission.missionName);
                if (closedByStory) {
                    if (thisTask.mStatus < 100) {
                        struck = true;
                        tcolor = "#999999";
                    }
                }
                else if (altPath) {
                    struck = true;
                    if (orStruck)
                        tcolor = "#999999"; //the choice you didn't pick stays grey, not red (e.g. Spanky's Hypno)
                }
                else if (struck)
                    tcolor = "#999999";
                //the line-through starts at the step text, not at the check box
                var strikeOn = !struck ? '' : (thisTask.blocked && thisTask.mStatus < 100)
                    ? '<span style="text-decoration: line-through; text-decoration-color: #cc3333;">' //blocked (e.g. Secret Known): red strike line
                    : '<span style="text-decoration: line-through;">';
                var strikeOff = struck ? '</span>' : '';
                var taskText = '<span class="phone-step-box">' + mstatus + '</span>' + strikeOn + thisTask.txt + roomList + strikeOff;
                //WIP (Not Implemented Yet) step: short [WIP] tag at the end of the step line instead of a note line under it
                //(the mission line keeps the full [Not Fully Implemented Yet] tag)
                var wipStep = thisTask.notImplemented && thisTask.mStatus < 100;
                if (wipStep)
                    taskText += ' <span style="color:#33cc33">[</span><span style="color:#ffffff">WIP</span><span style="color:#33cc33">]</span>';
                nav.t({
                    type: "zimg",
                    name: "phone_charsel_",
                    "left": 910,
                    "top": 350 + (taskcounter * 40),
                    font: 24,
                    hex: tcolor,
                    //step line built above: check box, strike-out rules, location and [WIP]
                    text: taskText
                }, 1);
                //a blocked step's reason (e.g. "Secret Known") goes at the end of the step line after " - " if it fits;
                //otherwise it goes on its own line under the step (only once per mission so long missions still fit)
                var noteInline = false;
                if (thisTask.blocked && thisTask.mStatus < 100 && thisTask.note && !Array.isArray(thisTask.note)) {
                    var stepEl = $('#room-buttons .resize-font').last()[0];
                    if (stepEl) {
                        stepEl.innerHTML = taskText + " - " + thisTask.note;
                        if (stepEl.offsetLeft + stepEl.offsetWidth <= 1626 * g.ratio)
                            noteInline = true;
                        else
                            stepEl.innerHTML = taskText;
                    }
                }
                taskcounter += phone.wrapLastLine(350 + (taskcounter * 40)); //a long step goes onto a second line (or shrinks if there's no room below)
                //note: an extra line under the step, lined up with the step text (e.g. "(Not Implemented Yet)")
                var showNoteLine = !!thisTask.note && !noteInline && !(thisTask.notImplemented && thisTask.note === "(Not Implemented Yet)"); //WIP steps show [WIP] on the step line instead
                if (showNoteLine && thisTask.blocked) {
                    if (blockedNoteShown)
                        showNoteLine = false;
                    blockedNoteShown = true;
                }
                if (showNoteLine) {
                    //note can be one line or a list of lines
                    var noteLines = Array.isArray(thisTask.note) ? thisTask.note : [thisTask.note];
                    for (var nl = 0; nl < noteLines.length; nl++) {
                        var noteText = '<span class="phone-step-box" style="visibility:hidden;">' + mstatus + '</span>' + (thisTask.blocked ? noteLines[nl] : strikeOn + noteLines[nl] + strikeOff); //a blocked step's reason (e.g. Secret Known) is not struck
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 910,
                            "top": 350 + (taskcounter * 40),
                            font: 24,
                            hex: tcolor,
                            text: noteText
                        }, 1);
                        taskcounter += phone.wrapLastLine(350 + (taskcounter * 40));
                    }
                }
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
        else if (name === "phone_cheatmod_next") {
            phone.cheat2();
        }
        //Cheats landing page buttons
        else if (name === "phone_cheatmod_patreon") {
            //Login to Patreon - not hooked up yet, does nothing for now
        }
        else if (name === "phone_cheatmod_abilities") {
            phone.cheatAbilities();
        }
        else if (name === "phone_cheatmod_skills") {
            phone.cheatSkills();
        }
        else if (name === "phone_cheatmod_bodyland") {
            phone.cheatBodyFrom = 1; //Previous Page on the body page comes back to the landing page
            phone.cheatBody();
        }
        else if (name === "phone_cheatmod_landprev") {
            phone.cheat();
        }
        else if (name.startsWith("phone_cheatmod_add_") || name.startsWith("phone_cheatmod_max_")) {
            //Abilities / Skills: + 100 points or Max Level, then redraw the page you're on
            var cheatSkill = name.substring("phone_cheatmod_add_".length);
            if (name.startsWith("phone_cheatmod_add_"))
                phone.cheatAddLevel(cheatSkill);
            else
                phone.cheatMaxOut(cheatSkill);
            if (phone.cheatPage === "skills")
                phone.cheatSkills();
            else
                phone.cheatAbilities();
            $('#char_alert').hide();
        }
        else if (name === "phone_cheatmod_prev") {
            phone.cheat();
        }
        else if (name === "phone_cheatmod_day_minus" || name === "phone_cheatmod_day_plus") {
            //Day of Week: picks a day inside the current week (Sunday to Saturday), same time of day.
            //It rolls over at the ends of the week: + on Saturday goes back to Sunday, - on Sunday goes to Saturday.
            //So it never moves into another week. Never before the first day of the game.
            var dayStep = name === "phone_cheatmod_day_plus" ? 1 : -1;
            var dow = g.dt.getDay();
            if (dayStep > 0 && dow === 6) dayStep = -6;
            else if (dayStep < 0 && dow === 0) dayStep = 6;
            var newDt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate() + dayStep, g.dt.getHours(), g.dt.getMinutes(), 0, 0);
            var firstDay = new Date(g.startDate.getFullYear(), g.startDate.getMonth(), g.startDate.getDate());
            if (newDt >= firstDay) {
                g.dt = newDt;
                nav.buildclock();
            }
            phone.cheat2();
        }
        else if (name === "phone_cheatmod_time_minus" || name === "phone_cheatmod_time_plus") {
            //Adjust Time: steps to the top of the hour, kept within today so the day doesn't change (that's done by sleeping).
            //+ goes to the next full hour (1:12 -> 2:00); - goes to the previous full hour (1:12 -> 1:00, 1:00 -> 12:00).
            var curHour = g.dt.getHours();
            var newHour;
            if (name === "phone_cheatmod_time_plus")
                newHour = curHour + 1;
            else
                newHour = g.dt.getMinutes() > 0 ? curHour : curHour - 1;
            if (newHour >= 0 && newHour <= 23) {
                char.settime(newHour, 0);
                cl.display();
            }
            phone.cheat2();
        }
        else if (name === "phone_cheatmod_body" || name === "phone_cheatmod_body2") {
            phone.cheatBodyFrom = name === "phone_cheatmod_body" ? 1 : 2; //Previous Page on the body page goes back here
            phone.cheatBody();
        }
        else if (name === "phone_cheatmod_prev2") {
            if (phone.cheatBodyFrom === 1)
                phone.cheat();
            else
                phone.cheat2();
        }
        else if (name.startsWith("phone_cheatmod_lips_")) {
            cl.c.lips = parseInt(name.replace("phone_cheatmod_lips_", ""));
            cl.display();
            phone.cheatBody();
        }
        else if (name === "phone_cheatmod_hidden_on" || name === "phone_cheatmod_hidden_off") {
            gv.set("showHiddenTasks", name === "phone_cheatmod_hidden_on");
            phone.cheat2();
        }
        else if (name.startsWith("phone_cheatmod_cock_")) {
            if (cl.c.cock !== 5) { //never turns a pussy back into a penis, and never makes one
                cl.c.cock = parseInt(name.replace("phone_cheatmod_cock_", ""));
                cl.display();
            }
            phone.cheatBody();
        }
        else if (name.startsWith("phone_cheatmod_leg_")) {
            cl.c.leg = parseInt(name.replace("phone_cheatmod_leg_", ""));
            cl.display();
            phone.cheatBody();
        }
        else if (name.startsWith("phone_cheatmod_chest_")) {
            cl.c.chest = parseInt(name.replace("phone_cheatmod_chest_", ""));
            cl.display();
            phone.cheatBody();
        }
        else if (name === "phone_cheatmod_chast_on") {
            if (cl.c.chastity === null) {
                var lastCage = gv.get("lastChastity");
                if (lastCage === null || cl.where("chastity", lastCage) < 0) { //never worn one: first one you own, else the basic cage
                    var owned = cl.list.find(function (c) { return c.type === "chastity" && c.inv; });
                    lastCage = owned ? owned.name : "cage";
                }
                cl.c.chastity = lastCage;
                cl.display();
            }
            phone.cheat2();
        }
        else if (name === "phone_cheatmod_chast_off") {
            if (cl.c.chastity !== null) {
                gv.st[gv.i("lastChastity")].t = cl.c.chastity;
                cl.c.chastity = null;
                cl.display();
            }
            phone.cheat2();
        }
        else if (name.startsWith("phone_cheatmod_level_")) { //was a plain else - any other cheat name would have been treated as a level
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

    //6 rows of 3 cards fit above the tabs (rows at 200..700, tabs at 800). Tabs with more than that
    //(Other) are split into pages with the same Next/Prev buttons as the Settings pages.
    const perPage = 18;
    const pageCount = Math.max(1, Math.ceil(newAchList.length / perPage));
    if (typeof phone.achPage !== "number" || phone.achPage < 0 || phone.achPage >= pageCount)
        phone.achPage = 0;
    const pageList = newAchList.slice(phone.achPage * perPage, (phone.achPage + 1) * perPage);

    for (let i = 0; i < pageList.length; i++)
        phone.addAchievementCard(pageList[i], i);

    if (phone.achPage < pageCount - 1)
        phone.settingsPageButton("phone_ach_next", "999_phone/settings_next.png");
    else if (phone.achPage > 0)
        phone.settingsPageButton("phone_ach_prev", "999_phone/settings_prev.png");
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

    if (phone.preservedMenuOverlay !== null)
        return;

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
        text: config.labelText !== undefined ? config.labelText : $("[data-name='phone_save_load_name_" + config.slotId + "']").text()
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

//Shrink the font of the text line just added until it fits inside the phone screen
//(screen right edge is 451 + 1185 = 1636, minus a small margin). Never goes below 16px.
phone.fitLastLine = function (maxRight = 1626, minFont = 16) {
    var el = $('#room-buttons .resize-font').last()[0];
    if (!el)
        return;
    var size = parseFloat(el.style.fontSize);
    while (el.offsetLeft + el.offsetWidth > maxRight * g.ratio && size > minFont * g.ratio) {
        size -= 1;
        el.style.fontSize = size + "px";
    }
};

//A mission step line that is too wide for the phone screen wraps onto a second line, with the
//second line lined up under the step text (not the check box). Lines are 40 apart, the same as the
//steps, so the next step simply moves down. Returns how many 40-high rows the step used.
//If there isn't room below (screen bottom is 155 + 815 = 970), the font is shrunk instead.
phone.wrapLastLine = function (top, maxRight = 1626, bottom = 970) {
    var el = $('#room-buttons .resize-font').last()[0];
    if (!el || el.offsetLeft + el.offsetWidth <= maxRight * g.ratio)
        return 1;
    var fs = parseFloat(el.style.fontSize);
    var rowPx = 40 * g.ratio;
    var oneLine = el.offsetHeight;
    var box = el.querySelector(".phone-step-box");
    var indent = box ? box.offsetWidth / fs : 0;
    //em units so the layout keeps its shape when the window is resized (only font-size is rescaled)
    el.style.width = ((maxRight * g.ratio - el.offsetLeft) / fs) + "em";
    el.style.whiteSpace = "normal";
    el.style.lineHeight = (rowPx / fs) + "em";
    el.style.marginTop = (-(rowPx - oneLine) / 2 / fs) + "em";
    el.style.paddingLeft = indent + "em";
    el.style.textIndent = -indent + "em";
    el.style.boxSizing = "border-box";
    var rows = Math.max(1, Math.round(el.offsetHeight / rowPx));
    if (top + rows * 40 <= bottom)
        return rows;
    //no room for the extra line: undo the wrap and shrink the font to fit on one line
    ["width", "whiteSpace", "lineHeight", "marginTop", "paddingLeft", "textIndent", "boxSizing"].forEach(function (k) { el.style[k] = ""; });
    phone.fitLastLine(maxRight);
    return 1;
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

    privateChat.speakerButton({
        "type": "zbtn",
        "name": "phone_charselect_" + character.name,
        "left": left,
        "top": top,
        "width": 150,
        "height": 150,
        "image": "../speaker/" + character.image,
    }, character.name, 9999);

    const waiting = phone.charNameWaiting(character); //only Not Implemented steps left
    nav.t({
        type: "zimg",
        name: "phone_char_",
        "left": left,
        "top": top + 150,
        font: character.display.length < 20 ? 20 : 12,
        hex: waiting ? "#ffdd33" : (phone.charNameDone(character) ? "#33cc33" : "#ffffff"), //yellow: only Not Implemented steps left; green (same as Completed) when the character is "done"
        text: character.display + (character.name === "me" ? " (Me)" : ""), //mark the main character
    }, 1);

    //yellow characters get "WIP" (work in progress) in yellow under the level bar, same size as "They know";
    //"They know"/"Suspicious" comes first on that line, then a white dash, then WIP
    //NOTE: the WIP tag is removed automatically when the character's missions are complete - see phone.charNameWaiting
    //level bar under the name: green, filled by level; a character with no level gets a full white bar the same size
    const noLevel = !(character.l > 0);
    $('#room-buttons').append('<div class="resize room-img" data-name="phone_char_" data-room="999" style=" ' +
        g.makeCss(5, (noLevel ? 150 : (character.l > 10 ? 10 : character.l) * 15), top + 180, left) +
        '  background: ' + (noLevel ? '#ffffff' : '#00ff00') + '; border-radius:100px; z-index:2" ></div>');

    const secretTxt = character.secret > 99 ? "They know" : (character.secret === 0 ? "" : "Suspicious");
    //one line under the bar: "They know" (pink), then a white " - ", then "WIP" (yellow) for WIP characters
    let secretLine = secretTxt;
    if (waiting)
        secretLine = (secretTxt === "" ? "" : secretTxt + '<span style="color:#ffffff"> - </span>') + '<span style="color:#ffdd33">WIP</span>';
    nav.t({
        type: "zimg",
        name: "phone_char_",
        "left": left,
        "top": top + 185,
        font: 20,
        hex: "#ffc2ff",
        text: secretLine, //"They know"/"Suspicious" and " - WIP" for WIP characters
    }, 1);
    $('[data-name="phone_char_"]').last().css("white-space", "nowrap"); //keep "They know - WIP" on one line
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
        hex: (!achieved && achievement.notInGame) ? "#ffdd33" : "#cccccc",
        //notInGame: nothing in the game awards it yet (remove notInGame from its trophy.st entry once something does)
        text: achieved ? sc.replace(achievement.display) : (achievement.notInGame ? "Not in the game yet" : "Not Achieved")
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
    phone.clear(false);
    phone.showPanel("999_phone/save_bg.jpg");
    saves.renderScreen();
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
    phone.settingsPageButton("phone_setting_next", "999_phone/settings_next.png");
};

//Settings page buttons sit right-justified on the "Settings" line at the bottom of settingbg.jpg
phone.settingsPageButton = function (name, image) {
    nav.button({
        "type": "zbtn",
        "name": name,
        "left": 1401,   //right edge 1601 = 35px in from the panel's right side
        "top": 875,     //centred on the "Settings" text line
        "width": 200,
        "height": 50,
        "image": image,
    }, 9999);
};

//Settings page 2 - same layout as page 1: rows start at 220, buttons start at 925 and are 200 x 50
phone.settings2 = function () {
    phone.clear(false);
    phone.showPanel("999_phone/settingbg2.png");

    //Line one: Points - shows "current / needed Points" under Abilities on the stats screen
    phone.settingsToggle(0, "points", gv.get("showAbilityPoints"));
    //Line two: Percentage - shows the % inside the Abilities progress bars
    phone.settingsToggle(1, "percent", gv.get("showBarPercent"));

    phone.settingsPageButton("phone_setting_prev", "999_phone/settings_prev.png");
};

// " [Not Fully Implemented Yet]" after a Completed mission that still has a step marked notImplemented
// (a step with no scene yet, e.g. Envy's Girlfriend step 7): brackets green, words white
// To clear it when a step gets its scene: delete note: "(Not Implemented Yet)", notImplemented: true from that step in
// supportingChar.js and follow the NOTE above that step (REMOVE lines in the room file and the repair in sc.load).
phone.notImplementedTag = function (mission) {
    if (mission.mStatus !== 100 && !phone.missionWaitingOnNI(mission)) //also In Progress missions that only have Not Implemented steps left
        return "";
    for (let i = 0; i < mission.task.length; i++) {
        if (mission.task[i].notImplemented && mission.task[i].mStatus < 100)
            return ' <span style="color:#33cc33">[</span><span style="color:#ffffff">Not Fully Implemented Yet</span><span style="color:#33cc33">]</span>';
    }
    return "";
};

//true when a mission isn't finished but every step still to do is marked notImplemented (no scene yet),
//so there's nothing left you can do in it (optional steps are ignored)
phone.missionWaitingOnNI = function (mission) {
    if (mission.mStatus > 99 || !mission.task)
        return false;
    let hasNI = false;
    for (let i = 0; i < mission.task.length; i++) {
        let t = mission.task[i];
        if (t.mStatus >= 100 || t.optional)
            continue;
        if (!t.notImplemented)
            return false;
        hasNI = true;
    }
    return hasNI;
};

//Yellow name on the Characters screen: nothing left you can do with this character, but at least one of their
//steps is marked Not Implemented Yet (waiting on new content). Missions ruled out by another path don't count.
//NOTE - REMOVING THE WIP TAG: nothing to edit here. The yellow name and "WIP" go away by themselves once the
//character's Not Implemented steps are done: when a step gets its scene, delete note: "(Not Implemented Yet)",
//notImplemented: true from that step in supportingChar.js (and follow the NOTE above that step). When the step
//is ticked or the mission is completed, the character turns white (more to do) or green (all missions complete).
phone.charNameWaiting = function (character) {
    if (character.name === "mainstory" || character.name === "me")
        return false;
    let entry = sc.charMission.find(function (c) { return c.name === character.name; });
    if (!entry || !entry.mission || entry.mission.length === 0)
        return false;
    let hasNI = false;
    for (let j = 0; j < entry.mission.length; j++) {
        let m = entry.mission[j];
        if (sc.isAltPathMission(character.name, m.missionName))
            continue;
        if (m.mStatus > 99) {
            if (m.mStatus === 100 && phone.notImplementedTag(m) !== "")
                hasNI = true;
            continue;
        }
        if (!phone.missionWaitingOnNI(m))
            return false; //something you can still do
        hasNI = true;
    }
    return hasNI;
};

//Unlocks listed on the main character's phone page (Wear panties ... Lewd in public)
phone.meUnlocks = [0, 1, 2, 3, 4, 24, 7, 5, 8, 25, 9, 23, 10];

//Green name on the Characters screen:
// - main character: every item on their page shows Unlocked
// - Main Story: every story step is done ("All steps complete")
// - everyone else: all their missions are complete, or they have no tasks at all
phone.charNameDone = function (character) {
    if (character.name === "mainstory")
        return sc.mainStory.status().current < 0;
    if (character.name === "me") {
        for (let i = 0; i < phone.meUnlocks.length; i++)
            if (!qdress.st[phone.meUnlocks[i]].ach)
                return false;
        return true;
    }
    return sc.allMissionsComplete(character.name) || sc.hasNoTasks(character.name);
};

// " [Repeatable]" after a Completed mission that has a repeatable step: brackets green, word white
phone.repeatableTag = function (mission) {
    if (mission.mStatus !== 100 || !sc.isRepeatableMission(mission))
        return "";
    return ' <span style="color:#33cc33">[</span><span style="color:#ffffff">Repeatable</span><span style="color:#33cc33">]</span>';
};

//On/Off toggle on a settings row - same size and spacing as page 1 (rows 125 apart from 220, buttons 200 x 50 from 925)
phone.settingsToggle = function (row, key, isOn) {
    var top = 220 + (row * 125);
    nav.button({
        "type": "zbtn",
        "name": "phone_setting_" + key + "_on",
        "left": 925,
        "top": top,
        "width": 200,
        "height": 50,
        "image": "999_phone/d_on_" + (isOn ? "active" : "inactive") + ".png",
    }, 9999);
    nav.button({
        "type": "zbtn",
        "name": "phone_setting_" + key + "_off",
        "left": 1125,
        "top": top,
        "width": 200,
        "height": 50,
        "image": "999_phone/d_off_" + (isOn ? "inactive" : "active") + ".png",
    }, 9999);
    phone.addToggleOffEdge("phone_setting_" + key + "_off", 1125, top, 200, 50);
};

//d_off is the middle button in Settings, so its graphic has no right edge.
//Round its right corners and draw a white rounded edge that matches the left side of d_on.
//Measured on a 31.25px-high button: corner radius ~5.6, side border ~1.7, top/bottom line ~1.1 game px.
phone.addToggleOffEdge = function (name, left, top, width, height) {
    var k = height / 31.25;
    var edgeRadius = 5.6 * k * g.ratio;
    $('[data-name="' + name + '"]').css({
        "border-top-right-radius": edgeRadius + "px",
        "border-bottom-right-radius": edgeRadius + "px"
    });
    $('#room-buttons').append('<div data-name="' + name + '_edge" style="position:absolute; pointer-events:none; z-index:3; box-sizing:border-box; ' +
        'left:' + (left * g.ratio) + 'px; top:' + (top * g.ratio) + 'px; ' +
        'width:' + (width * g.ratio) + 'px; height:' + (height * g.ratio) + 'px; ' +
        'border-style:solid; border-color:#ffffff; ' +
        'border-width:' + (1.1 * k * g.ratio) + 'px ' + (1.7 * k * g.ratio) + 'px ' + (1.1 * k * g.ratio) + 'px 0; ' +
        'border-top-right-radius:' + edgeRadius + 'px; border-bottom-right-radius:' + edgeRadius + 'px;"></div>');
};

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
    
    //Characters are listed alphabetically by the name on their card; Main Story and you (Me) stay first,
    //then characters with missions still to do, then ones only waiting on Not Implemented steps, then characters whose missions are all done
    let shown = sc.char.filter(function (c) { return c.show; });
    let pinned = ["mainstory", "me"];
    //in progress (white name) first, then waiting on Not Implemented steps (yellow), then all done (green)
    let done = {};
    shown.forEach(function (c) { done[c.name] = phone.charNameWaiting(c) ? 1 : (phone.charNameDone(c) ? 2 : 0); });
    shown.sort(function (a, b) {
        let pa = pinned.indexOf(a.name), pb = pinned.indexOf(b.name);
        if (pa > -1 || pb > -1)
            return (pa > -1 ? pa : 99) - (pb > -1 ? pb : 99);
        if (done[a.name] !== done[b.name])
            return done[a.name] - done[b.name];
        return String(a.display).localeCompare(String(b.display), undefined, { sensitivity: "base" });
    });
    //keep the page in range (a quick double click on Prev/Next could push it below 0 or past the last page,
    //which drew an empty screen with no buttons) - pages start at 0, 18, 36...
    if (typeof phone.charPointer !== "number" || isNaN(phone.charPointer) || phone.charPointer < 0)
        phone.charPointer = 0;
    if (phone.charPointer >= shown.length)
        phone.charPointer = Math.max(0, Math.floor((shown.length - 1) / 18) * 18);
    phone.charPointer -= phone.charPointer % 18;
    let j = 0;
    for (let k = phone.charPointer; k < shown.length && j < 18; k++) { //18 cards a page from the sorted list (was drawn straight from sc.char in its stored order)
        phone.addCharacterCard(shown[k], Math.floor(j / 6), j % 6);
        j++;
    }
    if (shown.length > phone.charPointer + 18)
        j = 18; //more on the next page
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

phone.drawMainStory = function () {
    const s = sc.mainStory.status();
    const header = s.current < 0 ? "All steps complete" : "Next: " + s.steps[s.current].txt;
    nav.t({ type: "zimg", name: "phone_charsel_", left: 850, top: 180, font: 30, hex: "#FF76FF", text: g.linebreak(header, 50) }, 1);
    let top = 330;
    if (s.caseTxt !== "") {
        nav.t({ type: "zimg", name: "phone_charsel_", left: 850, top: 280, font: 20, hex: "#ffffff", text: g.linebreak("Current case: " + s.caseTxt, 70) }, 1);
        top = 350;
    }
    for (let i = 0; i < s.steps.length; i++) {
        let marker = "";
        let color = "#999999";
        if (i === s.current) {
            marker = "▶";
            color = "#FF76FF";
        }
        else if (s.steps[i].done) {
            marker = "☑";
            color = "#33cc33";
        }
        nav.t({ type: "zimg", name: "phone_charsel_", left: 850, top: top + (i * 30), font: 22, hex: color, text: marker }, 1);
        nav.t({ type: "zimg", name: "phone_charsel_", left: 890, top: top + (i * 30), font: 22, hex: color, text: (i + 1) + ". " + s.steps[i].txt }, 1);
    }
};
phone.characterSelect = function (name) {
    sc.syncSissyClasses(); //keep Mistress Martha's class missions up to date
    phone.clear(false);
    phone.backbutton("phone_rel");

    var thisChar = sc.get(name);

    phone.showPanel("999_phone/rel_bg.jpg");

    privateChat.speakerButton({
        "type": "zimg",
        "name": "phone_",
        "left": 500,
        "top": 170,
        "width": 250,
        "height": 250,
        "image": "../speaker/" + thisChar.image,
    }, thisChar.name, 9999);
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
        phone.fitLastLine(750); //long names (e.g. Mistress Martha) shrink to fit the 250-wide card, like the name box on other pages
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
    
    if (name === "mainstory") {
        phone.drawMainStory();
        return;
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
            text: thisTimeline.subList[i].hstart + ":00 " + thisTimeline.subList[i].hend + ":00 " + g.roomNameText(thisTimeline.subList[i].room) //fix: Ralph's house rooms use her initial after the rename
        }, 1);
        $('#room-buttons .resize-font').last().css("white-space", "nowrap");
        phone.fitLastLine(785, 12); //long room names (e.g. Bimbo's Living Room) shrink so they don't run into the mission list
    }
    if (name === "me") {
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
            //the Missy message below is two lines when locked, so the list starts one line lower
            nav.t({
                type: "zimg",
                name: "phone_charselx",
                "left": 850,
                "top": sissy.st[0].ach ? 240 : 275, //fix: the locked Missy message is 2 lines, so the list starts lower and doesn't overlap it
                font: 30,
                hex: "#ffffff",
                text: metxt
            }, 9999);
        if (!sissy.st[0].ach) {
            nav.t({
                type: "zimg",
                name: "phone_charselx",
                "left": 850,
                "top": 180,
                font: 30,
                hex: "#ffffff",
                text: "To unlock and grow you must prove to Missy<br/>you deserve it. Keep working." //2 lines so it stays inside the phone screen
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
                text: "Gain Sissy Points to unlock and grow. "
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
    //Mistress Martha and Ms. Pussywinks use the normal mission list (the "must graduate" text is now a note on The Pink Room)
    {
        for (i = 0; i < sc.charMission.length; i++) {
            if (sc.charMission[i].name === thisChar.name) {
                //mission order (2026-11-24): by completion, then A to Z by title inside each group -
                //In Progress, Not Started, done (Completed / Failed / Closed), only Not Implemented steps left,
                //and missions ruled out by another path at the very bottom (before: only that last group was moved down,
                //the rest kept the order they are defined in supportingChar.js)
                var missionOrder = [];
                var charName = sc.charMission[i].name;
                var missionList = sc.charMission[i].mission;
                var missionRank = function (m) {
                    if (sc.isAltPathMission(charName, m.missionName)) return 4;
                    if (phone.missionWaitingOnNI(m)) return 3;
                    if (m.mStatus > 99) return 2;
                    if (m.mStatus > 0) return 0;
                    return 1;
                };
                for (j = 0; j < missionList.length; j++)
                    missionOrder.push(j);
                missionOrder.sort(function (a, b) {
                    var r = missionRank(missionList[a]) - missionRank(missionList[b]);
                    if (r !== 0)
                        return r;
                    return String(missionList[a].title).localeCompare(String(missionList[b].title), undefined, { sensitivity: "base" });
                });
                for (var row = 0; row < missionOrder.length; row++) {
                    j = missionOrder[row];
                    var tcolor = "#ffffff";
                    var mstatus;
                    switch (sc.mStatus(sc.charMission[i].mission[j].mStatus)) {
                        case "Failed":
                            tcolor = "#cc3333";
                            mstatus = " [Fail]";
                            if (sc.isAltPathMission(sc.charMission[i].name, sc.charMission[i].mission[j].missionName)) {
                                mstatus = ' [<span style="color:#ffffff">' + sc.altPathLabel(sc.charMission[i].name, sc.charMission[i].mission[j].missionName) + '</span>]'; //words white, brackets grey
                                tcolor = "#999999"; //another path chosen: standard grey, not red
                            }
                            break;
                        case "Completed": tcolor = "#33cc33"; mstatus = " ☑"; break;
                        //Not Started but ruled out: show [Another Path Chosen] (or [Ranch Closed])
                        case "Not Started": tcolor = "#999999"; mstatus = sc.isAltPathMission(sc.charMission[i].name, sc.charMission[i].mission[j].missionName) ? ' [<span style="color:#ffffff">' + sc.altPathLabel(sc.charMission[i].name, sc.charMission[i].mission[j].missionName) + '</span>]' : ""; break;
                        case "Closed": tcolor = "#3e3e5c"; mstatus = ""; break;
                        default:
                            tcolor = "#ffffff"; mstatus = "";
                            if (sc.isClosedByStory(sc.charMission[i].name, sc.charMission[i].mission[j].missionName)) { //In Progress but closed by the story
                                tcolor = "#999999";
                                mstatus = ' [<span style="color:#ffffff">' + sc.altPathLabel(sc.charMission[i].name, sc.charMission[i].mission[j].missionName) + '</span>]';
                            }
                    }
                    if (sc.isSecretFailedMission(sc.charMission[i].mission[j])) {
                        tcolor = "#cc3333"; //every step left needs the secret unknown - shown as failed
                        mstatus = " [Failed - Secret Known]";
                    }
                    
                    if (sc.charMission[i].mission[j].missionName.startsWith("*")) {
                        if (tcolor === "#999999")
                            tcolor = "#444444";
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 850,
                            "top": 180 + (row * 80), //row = position after sorting Another Path missions to the bottom (was j)
                            font: 30,
                            hex: tcolor,
                            //added [Repeatable] and [Not Fully Implemented Yet] tags after the mission title
                            text: sc.charMission[i].mission[j].title + mstatus + phone.repeatableTag(sc.charMission[i].mission[j]) + phone.notImplementedTag(sc.charMission[i].mission[j])
                        }, 9999);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 1500,
                            "top": 180 + (row * 80), //row = position after sorting Another Path missions to the bottom (was j)
                            font: 10,
                            hex: tcolor,
                            text: "Ending"
                        }, 9999);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 900,
                            "top": 220 + (row * 80), //row = position after sorting Another Path missions to the bottom (was j)
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
                            "top": 180 + (row * 80), //row = position after sorting Another Path missions to the bottom (was j)
                            font: 30,
                            hex: tcolor,
                            //added [Repeatable] and [Not Fully Implemented Yet] tags after the mission title
                            text: sc.charMission[i].mission[j].title + mstatus + phone.repeatableTag(sc.charMission[i].mission[j]) + phone.notImplementedTag(sc.charMission[i].mission[j])
                        }, 9999);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 900,
                            "top": 220 + (row * 80), //row = position after sorting Another Path missions to the bottom (was j)
                            font: 20,
                            hex: "#999999",
                            text: sc.charMission[i].mission[j].desc
                        }, 1);
                        nav.t({
                            type: "zimg",
                            name: "phone_charsel_",
                            "left": 900,
                            "top": 220 + (row * 80), //row = position after sorting Another Path missions to the bottom (was j)
                            font: 20,
                            hex: "#ffffff",
                            text: sc.charMission[i].mission[j].desc
                        }, 1);
                    }
                    
                    nav.button({
                        "type": "zbtn",
                        "name": "phone_charsel_" + sc.charMission[i].name + "_" + sc.charMission[i].mission[j].missionName,
                        "left": 800,
                        "top": 180 + (row * 80), //row = position after sorting Another Path missions to the bottom (was j)
                        "width": 40,
                        "height": 40,
                        "image": "999_phone/char_left.png",
                    }, 9999);
                }
            }
        }
    }
    //keep long text inside the phone screen: wrap it at the screen's right edge (panel ends at 451 + 1185)
    $('[data-name="phone_charselx"]').css({ "max-width": ((451 + 1185 - 850 - 25) * g.ratio) + "px", "white-space": "normal" });
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
        "SirGuren (Contributor)", "SOLISTS", "WendyJ", "Wild86willie"
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
        //Cheats landing page (laid out like the original page 1): Login to Patreon top left, then the
        //Abilities, Skills and Body buttons, then the Money line. Next Page (bottom right) still goes to page 2.
        //Uses the background without the icons, since the rows no longer match them.
        phone.showPanel("999_phone/cheat_bg2.jpg");
        phone.cheatPage = "landing";

        //Login to Patreon - does nothing for now
        phone.cheatTextBtn("phone_cheatmod_patreon", "Login to Patreon", 520, 175, 260, false);

        phone.cheatPurpleBtn("phone_cheatmod_abilities", "Abilities and Talents", 700, 290, 750, 70, 36);
        phone.cheatPurpleBtn("phone_cheatmod_skills", "Skills", 700, 445, 750, 70, 36);
        phone.cheatPurpleBtn("phone_cheatmod_bodyland", "Body", 700, 600, 750, 70, 36);

        //Money - moved here from the original page 1, same layout
        nav.t({
            type: "zimg",
            name: "phone_cheatmod",
            left: 700,
            top: 765,
            font: 40,
            hex: "#ffffff",
            text: "Money: $" + gv.get("money")
        }, 1);
        nav.button({
            "type": "zbtn",
            "name": "phone_cheatmod_money",
            "left": 1200,
            "top": 765,
            "width": 250,
            "height": 50,
            "image": "999_phone/cheat_money.png",
        }, 9999);

        phone.settingsPageButton("phone_cheatmod_next", "999_phone/settings_next.png");
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

//a button styled like the purple "+ 100" buttons (same gradient, white border, rounded)
phone.cheatPurpleBtn = function (name, text, left, top, width, height, font) {
    nav.t({ type: "zbtn", name: name, left: left, top: top, font: font, hex: "#ffffff", text: text }, 9999);
    $('[data-name="' + name + '"]').last().css({
        "width": (width * g.ratio) + "px", "height": (height * g.ratio) + "px", "line-height": ((height - 4) * g.ratio) + "px",
        "text-align": "center", "white-space": "nowrap", "box-sizing": "border-box", "cursor": "pointer",
        "border-radius": (8 * g.ratio) + "px", "border": (2 * g.ratio) + "px solid #ffffff",
        "background": "linear-gradient(to bottom, #c923c3, #3e063c)"
    });
};

//Max Level for the cheats: the level's own cap (Fitness has no real cap, 999, so it uses the normal 15)
phone.cheatMaxLevel = function (lv) {
    return lv.cap > 100 ? LEVEL_CAP_DEFAULT : lv.cap;
};

//+100 points (levels that don't level up from points - Cheerleader - go up one level instead)
phone.cheatAddLevel = function (n) {
    var lv = levels.st[levels.i(n)];
    if (lv.autoLevel)
        levels.mod(n, 100);
    else if (lv.l < phone.cheatMaxLevel(lv))
        lv.l++;
};

//Max Level: level up through levels.mod so its side effects still happen (Fitness raises max energy)
phone.cheatMaxOut = function (n) {
    var lv = levels.st[levels.i(n)];
    var max = phone.cheatMaxLevel(lv);
    var guard = 0;
    while (lv.l < max && lv.autoLevel && guard++ < 200)
        levels.mod(n, levels.getPointsCapForLevel(lv) - lv.c);
    if (lv.l < max)
        lv.l = max;
};

//Abilities and Talents page - grouped like the stats screen: Abilities (Fitness, Strength, Charisma, Intelligence)
//and Talents (Cheerleader, Stripping, Whore), each with + 100 and Max Level
phone.cheatAbilityList = ["fitness", "strength", "charisma", "pi"];
phone.cheatTalentList = ["cheer", "stripper", "whore"];
phone.cheatAbilities = function () {
    phone.clear(false);
    phone.showPanel("999_phone/cheat_bg2.jpg");
    phone.cheatPage = "abilities";
    var row = function (n, top) {
        var lv = levels.st[levels.i(n)];
        nav.t({ type: "zimg", name: "phone_cheatmod", left: 600, top: top, font: 34, hex: "#ffffff", text: lv.d + " Level: " + lv.l }, 1);
        phone.cheatPurpleBtn("phone_cheatmod_add_" + n, "+ 100", 1180, top, 200, 46, 28);
        phone.cheatPurpleBtn("phone_cheatmod_max_" + n, "Max Level", 1395, top, 200, 46, 24);
    };
    nav.t({ type: "zimg", name: "phone_cheatmod", left: 520, top: 180, font: 30, hex: "#e75480", text: "Abilities" }, 1);
    $.each(phone.cheatAbilityList, function (i, n) { row(n, 235 + (i * 72)); });
    nav.t({ type: "zimg", name: "phone_cheatmod", left: 520, top: 525, font: 30, hex: "#e75480", text: "Talents" }, 1);
    $.each(phone.cheatTalentList, function (i, n) { row(n, 580 + (i * 72)); });
    phone.settingsPageButton("phone_cheatmod_landprev", "999_phone/settings_prev.png");
};

//Skills page - the stats screen's Skills (except Beast) plus Sissy, in two columns, + 100 and Max on each
//(Intelligence and the Talents moved to the Abilities and Talents page, matching the stats screen)
phone.cheatSkillList = ["makeup", "heels", "oral", "anal", "sub", "dom", "cum", "piss", "fame", "xdress"];
phone.cheatSkills = function () {
    phone.clear(false);
    phone.showPanel("999_phone/cheat_bg2.jpg");
    phone.cheatPage = "skills";
    //"Skills" heading, same as the Abilities / Talents headings
    nav.t({ type: "zimg", name: "phone_cheatmod", left: 520, top: 180, font: 30, hex: "#e75480", text: "Skills" }, 1);
    var perCol = Math.ceil(phone.cheatSkillList.length / 2);
    $.each(phone.cheatSkillList, function (i, n) {
        var lv = levels.st[levels.i(n)];
        var col = Math.floor(i / perCol);
        var left = col === 0 ? 510 : 1065;
        var top = 240 + ((i % perCol) * 92); //starts under the heading
        nav.t({ type: "zimg", name: "phone_cheatmod", left: left, top: top + 6, font: 26, hex: "#ffffff", text: lv.d + ": " + lv.l }, 1);
        phone.cheatPurpleBtn("phone_cheatmod_add_" + n, "+ 100", left + 280, top, 110, 44, 22);
        phone.cheatPurpleBtn("phone_cheatmod_max_" + n, "Max", left + 400, top, 110, 44, 22);
    });
    phone.settingsPageButton("phone_cheatmod_landprev", "999_phone/settings_prev.png");
};

//Cheats page 2 - five rows 120 apart; label on top, buttons under it
phone.cheatPenisSizes = ["Porn star", "Large", "Average", "Small", "Clitty"]; //cl.c.cock 0-4 (5 = pussy, never set from here)
phone.cheatBreastSizes = ["Flat", "A", "B", "C", "D", "DD", "DDD"];      //cl.c.chest 0-6, named as real cup sizes
phone.cheatAssSizes = ["Manly", "Tiny", "Trim", "Phat Ass!", "Plump", "Porn star"]; //cl.c.leg 0-5, the game's own names (cl.buttsize)
phone.cheatLipSizes = ["Thin", "Plump", "Bimbo"];                                   //cl.c.lips 0-2, the game's own names (cl.lipsize); "Bimbo cock sucker" shortened to "Bimbo" for the button
phone.cheatRows = [270, 390, 510, 630, 750];
phone.cheatLabel = function (row, text) {
    nav.t({ type: "zimg", name: "phone_cheatmod", left: 520, top: phone.cheatRows[row] - 30, font: 40, hex: "#ffffff", text: text }, 1);
};
//a text button styled like the Next Page button: dark, rounded, white text; the current choice is the purple of the "+ 100" buttons (was pink)
phone.cheatTextBtn = function (name, text, left, top, width, active) {
    nav.t({ type: "zbtn", name: name, left: left, top: top, font: 24, hex: "#ffffff", text: text }, 9999);
    $('[data-name="' + name + '"]').last().css({
        "width": (width * g.ratio) + "px", "height": (44 * g.ratio) + "px", "line-height": (44 * g.ratio) + "px",
        "text-align": "center", "white-space": "nowrap", "box-sizing": "border-box", "cursor": "pointer",
        "border-radius": (8 * g.ratio) + "px", "border": (2 * g.ratio) + "px solid " + (active ? "#ffffff" : "#555555"),
        "background": active ? "linear-gradient(to bottom, #c923c3, #3e063c)" : "#2b2b2b"
    });
};
//On / Off pair, same images as the Settings toggles
phone.cheatOnOff = function (key, top, isOn) {
    nav.button({ "type": "zbtn", "name": "phone_cheatmod_" + key + "_on", "left": 520, "top": top, "width": 200, "height": 50,
        "image": "999_phone/d_on_" + (isOn ? "active" : "inactive") + ".png" }, 9999);
    nav.button({ "type": "zbtn", "name": "phone_cheatmod_" + key + "_off", "left": 720, "top": top, "width": 200, "height": 50,
        "image": "999_phone/d_off_" + (isOn ? "inactive" : "active") + ".png" }, 9999);
    phone.addToggleOffEdge("phone_cheatmod_" + key + "_off", 720, top, 200, 50);
};

//Cheats page 2 - Show Hidden Tasks and Chastity
phone.cheat2 = function () {
    phone.clear(false);
    phone.showPanel("999_phone/cheat_bg2.jpg");
    var rows = phone.cheatRows;

    //Line one: Show Hidden Tasks (moved here from page 1)
    phone.cheatLabel(0, "Show Hidden Tasks");
    phone.cheatOnOff("hidden", rows[0] + 25, gv.get("showHiddenTasks"));

    //Line two: Chastity On/Off - On puts back the last chastity device you wore
    phone.cheatLabel(1, "Chastity");
    phone.cheatOnOff("chast", rows[1] + 25, cl.c.chastity !== null);

    //Line three: Adjust Time (steps to the top of the hour) - [ - ] [ time ] [ + ] moves the clock one hour, within today (00:xx to 23:xx).
    //The time follows the 12h/24h setting and sits in a fixed-width box so it doesn't change size between them.
    phone.cheatLabel(2, "Adjust Time");
    var timeTop = rows[2] + 28;
    phone.cheatTextBtn("phone_cheatmod_time_minus", "-", 520, timeTop, 60, false);
    var timeTxt = nav.friendlyTime(); //same format as the game clock: "01:12 PM" (12h) or "13:12" (24h)
    nav.t({ type: "zimg", name: "phone_cheatmod", left: 590, top: timeTop, font: 24, hex: "#ffffff", text: timeTxt }, 1);
    $('[data-name="phone_cheatmod"]').last().css({
        "width": (150 * g.ratio) + "px", "height": (44 * g.ratio) + "px", "line-height": (44 * g.ratio) + "px",
        "text-align": "center", "white-space": "nowrap", "box-sizing": "border-box",
        "border-radius": (8 * g.ratio) + "px", "border": (2 * g.ratio) + "px solid #555555", "background": "#1b1b1b"
    });
    phone.cheatTextBtn("phone_cheatmod_time_plus", "+", 750, timeTop, 60, false);

    //Line four: Day of Week - same layout: [ - ] [ day ] [ + ] shows one day at a time, Sunday to Saturday,
    //and rolls over at the end of the week (time stays the same).
    //It only changes the date; it doesn't run a night's sleep, so daily resets and countdowns don't happen.
    phone.cheatLabel(3, "Day of Week");
    var dayTop = rows[3] + 28;
    phone.cheatTextBtn("phone_cheatmod_day_minus", "-", 520, dayTop, 60, false);
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    nav.t({ type: "zimg", name: "phone_cheatmod", left: 590, top: dayTop, font: 24, hex: "#ffffff", text: dayNames[g.dt.getDay()] }, 1);
    $('[data-name="phone_cheatmod"]').last().css({
        "width": (150 * g.ratio) + "px", "height": (44 * g.ratio) + "px", "line-height": (44 * g.ratio) + "px",
        "text-align": "center", "white-space": "nowrap", "box-sizing": "border-box",
        "border-radius": (8 * g.ratio) + "px", "border": (2 * g.ratio) + "px solid #555555", "background": "#1b1b1b"
    });
    phone.cheatTextBtn("phone_cheatmod_day_plus", "+", 750, dayTop, 60, false);

    //Previous Page (to page 1) sits left of Next Page (to the body page)
    nav.button({ "type": "zbtn", "name": "phone_cheatmod_prev", "left": 1191, "top": 875, "width": 200, "height": 50, "image": "999_phone/settings_prev.png" }, 9999);
    phone.settingsPageButton("phone_cheatmod_body2", "999_phone/settings_next.png");
};

//Cheats body page - every body change on one page (also reached straight from page 1's Body button).
//Each button changes your actual body, so dialog and your portrait follow it.
phone.cheatBody = function () {
    phone.clear(false);
    phone.showPanel("999_phone/cheat_bg2.jpg");
    var rows = phone.cheatRows;
    var i;

    //Penis Size - no pussy option
    if (cl.c.cock === 5) {
        phone.cheatLabel(0, "Penis Size: Pussy (can't be changed here)");
    }
    else {
        phone.cheatLabel(0, "Penis Size");
        //shown smallest to biggest (Clitty ... Porn star); each button still sets its own cl.c.cock value
        for (i = 0; i < phone.cheatPenisSizes.length; i++) {
            var cockVal = phone.cheatPenisSizes.length - 1 - i;
            phone.cheatTextBtn("phone_cheatmod_cock_" + cockVal, phone.cheatPenisSizes[cockVal], 520 + (i * 210), rows[0] + 28, 200, cl.c.cock === cockVal);
        }
    }

    //Breast Size - 7 sizes, Flat to DDD
    phone.cheatLabel(1, "Breast Size");
    for (i = 0; i < phone.cheatBreastSizes.length; i++)
        phone.cheatTextBtn("phone_cheatmod_chest_" + i, phone.cheatBreastSizes[i], 520 + (i * 150), rows[1] + 28, 140, cl.c.chest === i);

    //Ass Size
    phone.cheatLabel(2, "Ass Size");
    for (i = 0; i < phone.cheatAssSizes.length; i++)
        phone.cheatTextBtn("phone_cheatmod_leg_" + i, phone.cheatAssSizes[i], 520 + (i * 175), rows[2] + 28, 165, cl.c.leg === i);

    //Lip Size
    phone.cheatLabel(3, "Lip Size");
    for (i = 0; i < phone.cheatLipSizes.length; i++)
        phone.cheatTextBtn("phone_cheatmod_lips_" + i, phone.cheatLipSizes[i], 520 + (i * 260), rows[3] + 28, 250, cl.c.lips === i);

    //Previous Page goes back to the page you came from (page 1 via Body, page 2 via Next Page)
    phone.settingsPageButton("phone_cheatmod_prev2", "999_phone/settings_prev.png");
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
                //opening from the phone starts on Save; only a new load (no game yet) starts on Load
                saves.mode = g.newLoad ? "load" : "save";
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
            //achievements Other tab split over 2 pages
            case "phone_ach_next":
                phone.achPage = (phone.achPage || 0) + 1;
                phone.drawAchievements();
                break;
            case "phone_ach_prev":
                phone.achPage = Math.max(0, (phone.achPage || 0) - 1);
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

//Cheat menu press feedback: while the Next / Previous / Body page buttons or a + / - button is held down,
//it turns the same purple as the "+ 100" buttons on cheat page 1. It goes back to normal as soon as it's let go.
//The page buttons are pictures, so they swap to a purple "_down" copy of the same picture while held.
phone.cheatPressNames = ["phone_cheatmod_next", "phone_cheatmod_prev", "phone_cheatmod_prev2", "phone_cheatmod_body", "phone_cheatmod_body2", "phone_cheatmod_landprev", "phone_cheatmod_patreon",
    "phone_cheatmod_time_minus", "phone_cheatmod_time_plus", "phone_cheatmod_day_minus", "phone_cheatmod_day_plus"];
phone.cheatPressRelease = function () {
    $('[data-cheatpressed="1"]').each(function () {
        var el = $(this);
        if (this.tagName === "IMG")
            el.attr("src", el.attr("data-cheatsrc"));
        else
            el.css("background", el.attr("data-cheatbg"));
        el.removeAttr("data-cheatpressed");
    });
};
$(document).on("mousedown.cheatpress touchstart.cheatpress", "[data-name]", function () {
    var name = $(this).attr("data-name");
    if (phone.cheatPressNames.indexOf(name) === -1) return;
    var el = $(this);
    el.attr("data-cheatpressed", "1");
    if (this.tagName === "IMG") {
        el.attr("data-cheatsrc", el.attr("src"));
        el.attr("src", el.attr("src").replace(/\.png($|\?)/, "_down.png$1"));
    }
    else {
        el.attr("data-cheatbg", this.style.background);
        el.css("background", "linear-gradient(to bottom, #c923c3, #3e063c)"); //purple of the "+ 100" buttons on cheat page 1
    }
});
$(document).on("mouseup.cheatpress touchend.cheatpress touchcancel.cheatpress", phone.cheatPressRelease);
$(document).on("mouseleave.cheatpress", "[data-cheatpressed]", phone.cheatPressRelease);
