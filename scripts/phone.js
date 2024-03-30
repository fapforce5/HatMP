var phone = {};
var room9999 = {};
//var pic = {};

phone.build = function (selection) {
    phone.clear(true);
    inv.close();
    var btnList = [
        { n: "phone_save", img: "bSave", x: 0, y: 0 },
        { n: "phone_rel", img: "bRelationships", x: 1, y: 0 },
        { n: "phone_contacts", img: "bContacts", x: 2, y: 0 },
        { n: "phone_pic", img: "bPic", x: 3, y: 0 },
              
        //{ n: "phone_stats", img: "bStats", x: 0, y: 1 },
        { n: "phone_time", img: "bTime", x: 0, y: 1 },
        { n: "phone_ach", img: "bAch", x: 2, y: 1 },
        { n: "phone_settings", img: "bSettings", x: 3, y: 1 },

        { n: "phone_cheat", img: "bCheat", x: 0, y: 2 },
        { n: "phone_help", img: "bHelp", x: 1, y: 2 },
        { n: "phone_patron", img: "bPatron", x: 2, y: 2 },
        { n: "phone_thankyou", img: "bPatreon", x: 3, y: 2 }
    ];

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
            room9999.btnclick("phone_save");
            nav.killbutton("phonex_menu");
        }
        else if (selection === "time") {
            room9999.btnclick("phone_time");
            nav.killbutton("phonex_menu");
        }
    }
};

phone.clear = function (clearAll) {
    nav.killbuttonStartsWith("phone_");
    if (clearAll)
        nav.killbuttonStartsWith("phonex_");
};

phone.backbutton = function (icon) {
    var btnList = [
        { n: "phone_save", img: "bSave", x: 0, y: 0 },
        { n: "phone_rel", img: "bRelationships", x: 1, y: 0 },
        { n: "phone_contacts", img: "bContacts", x: 2, y: 0 },
        { n: "phone_pic", img: "bPic", x: 3, y: 0 },

        //{ n: "phone_stats", img: "bStats", x: 0, y: 1 },
        { n: "phone_time", img: "bTime", x: 0, y: 1 },
        { n: "phone_ach", img: "bAch", x: 2, y: 1 },
        { n: "phone_settings", img: "bSettings", x: 3, y: 1 },

        { n: "phone_help", img: "bHelp", x: 0, y: 2 },
        { n: "phone_patron", img: "bPatron", x: 2, y: 2 },
        { n: "phone_thankyou", img: "bPatreon", x: 3, y: 2 }
    ];
    for (i = 0; i < btnList.length; i++) {
        if (icon === btnList[i].n) {
            nav.button({
                "type": "zbtn",
                "name": btnList[i].n,
                "left": 1662,
                "top": 525,
                "width": 90,
                "height": 112,
                "image": "999_phone/" + btnList[i].img + ".png",
            }, 9999);
        }
    }
};

phone.saveMenu = function () {
    var minVersion = 21;
    phone.clear(false);
    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": "999_phone/save_bg.jpg",
    }, 9999);
    for (var i = 0; i < 10; i++) {
        var cookieName = 'HatMP_' + i;
        const top = 180 + (i * 60);
        if (localStorage.getItem(cookieName) !== null) {
            var initTemp = JSON.parse(localStorage[cookieName]);

            

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
                    "left": 500,
                    "top": top,
                    "width": 125,
                    "height": 50,
                    "title": "Save",
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
        else if (!g.newLoad) {
            nav.button({
                "type": "zbtn",
                "name": "phone_save_save_" + i,
                "left": 500,
                "top": top,
                "width": 125,
                "height": 50,
                "title": "Import Save",
                "image": "999_phone/save.png",
            }, 9999);
        }
    }

    nav.button({
        "type": "zbtn",
        "name": "phone_save_import",
        "left": 500,
        "top": 180 + (10 * 60),
        "width": 125,
        "height": 50,
        "image": "999_phone/import.png",
    }, 9999);
};

phone.settings = function () {
    phone.clear(false);
    
    var fantasyCreatures = gv.get("fantasyCreatures");
    var difficulty = gv.get("difficulty");
    var clock24 = gv.get("clock24");
    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": "999_phone/settingbg.jpg",
    }, 9999);
    var settings = [
        { y: 0, x: 0, b: 3, n: "diff0", i: "diffEasy", active: difficulty === 0 },
        { y: 0, x: 1, b: 3, n: "diff1", i: "diffNormal", active: difficulty === 1 },
        { y: 0, x: 2, b: 3, n: "diff2", i: "diffHard", active: difficulty === 2 },
        { y: 1, x: 0, b: 2, n: "clock12", i: "clock12", active: clock24 === "12" },
        { y: 1, x: 1, b: 2, n: "clock24", i: "clock24", active: clock24 === "24" },
        { y: 2, x: 0, b: 2, n: "fantOff", i: "fantOff", active: !fantasyCreatures },
        { y: 2, x: 1, b: 2, n: "fantOn", i: "fantOn", active: fantasyCreatures },
    ];
    $.each(settings, function (i, v) {
        nav.button({
            "type": "zbtn",
            "name": "phone_setting_" + v.n,
            "left": 925 + (v.x * (600/v.b)),
            "top": 300 + (v.y * 200),
            "width": 600/v.b,
            "height": 50,
            "image": "999_phone/" + v.i + "_" + (v.active ? "active" : "inactive") + ".png",
        }, 9999);
    });
}

phone.pictures = function () {
    phone.clear(false);
    
    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": "999_phone/pics_bg.jpg",
    }, 9999);
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
    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": "999_phone/rel_bg.jpg",
    }, 9999);
    
    var j = 0;
    for (var i = 0; i < sc.char.length; i++) {
        if (sc.char[i].show) {
            var secret = "Secret: " + sc.char[i].secret + "%";
            nav.button({
                "type": "zbtn",
                "name": "phone_charselect_" + sc.char[i].name,
                "left": 485 + ((j % 6) * 190),
                "top": 180 + (Math.floor(j / 6) * 220),
                "width": 150,
                "height": 150,
                "image": "../speaker/" + sc.char[i].image,
            }, 9999);

            nav.t({
                type: "zimg",
                name: "phone_char_",
                "left": 485 + ((j % 6) * 190),
                "top": 330 + (Math.floor(j / 6) * 220),
                font: 30,
                hex: "#ffffff",
                text: "Level: " + sc.char[i].l,
            }, 1);

            nav.t({
                type: "zimg",
                name: "phone_char_",
                "left": 485 + ((j % 6) * 190),
                "top": 360 + (Math.floor(j / 6) * 220),
                font: 30,
                hex: "#ffffff",
                text: "Secret: " + sc.char[i].secret + "%",
            }, 1);


            j++;

        }
    }
};

phone.characterSelect = function (name) {
    phone.clear(false);
    phone.backbutton("phone_rel");

    var thisChar = sc.get(name);

    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": "999_phone/rel_bg.jpg",
    }, 9999);

    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 500,
        "top": 200,
        "width": 250,
        "height": 250,
        "image": "../speaker/" + thisChar.image,
    }, 9999);
    if (!thisChar.setName) {
        nav.t({
            type: "zimg",
            name: "phone_",
            "left": 500,
            "top": 460,
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
            "top": 460,
            "width": 250,
            "height": 30,
            "title": thisChar.display,
        }, 9999);
        nav.button({
            "type": "zbtn",
            "name": "phone_charRename_" + thisChar.name,
            "left": 500,
            "top": 525,
            "width": 250,
            "height": 50,
            "image": "999_phone/char_rename.png",
        }, 9999);
    }
   
    
    
    nav.t({
        type: "zimg",
        name: "phone_",
        "left": 500,
        "top": 580,
        font: 30,
        hex: "#ffffff",
        text: "Level: " + thisChar.l
    }, 1);

    nav.t({
        type: "zimg",
        name: "phone_",
        "left": 500,
        "top": 615,
        font: 30,
        hex: "#ffffff",
        text: "Secret: " + thisChar.secret + "%"
    }, 1);
    var thisTimeline = sc.getTimeline(name);
    
    for (i = 0; i < thisTimeline.subList.length; i++) {
        nav.t({
            type: "zimg",
            name: "phone_",
            "left": 500,
            "top": 660 + (i*22),
            font: 20,
            hex: thisTimeline.subList[i].current ? "#FF76FF" : "#ffffff",
            text: thisTimeline.subList[i].hstart + ":00 " + thisTimeline.subList[i].hend + ":00 " + thisTimeline.subList[i].room
        }, 1);
    }
    
    for (i = 0; i < sc.charMission.length; i++) {
        if (sc.charMission[i].name === thisChar.name) {
            for (j = 0; j < sc.charMission[i].mission.length; j++) {
                var tcolor = "#ffffff";
                var mstatus;
                switch (sc.mStatus(sc.charMission[i].mission[j].mStatus)) {
                    case "Failed": tcolor = "#cc3333"; mstatus = " [Fail]"; break;
                    case "Completed": tcolor = "#33cc33"; mstatus = " ☑"; break;
                    case "Not Started": tcolor = "#999999"; mstatus = ""; break;
                    default: tcolor = "#ffffff"; mstatus = "";
                }
                nav.t({
                    type: "zimg",
                    name: "phone_charsel_",
                    "left": 850,
                    "top": 180 + (j * 100),
                    font: 30,
                    hex: tcolor,
                    text: sc.charMission[i].mission[j].title + mstatus
                }, 9999);
                nav.t({
                    type: "zimg",
                    name: "phone_charsel_",
                    "left": 900,
                    "top": 220 + (j * 100),
                    font: 20,
                    hex: "#ffffff",
                    text: sc.charMission[i].mission[j].desc
                }, 1);
                nav.button({
                    "type": "zbtn",
                    "name": "phone_charsel_" + sc.charMission[i].name + "_" + sc.charMission[i].mission[j].missionName,
                    "left": 800,
                    "top": 180 + (j * 100),
                    "width": 40,
                    "height": 40,
                    "image": "999_phone/char_left.png",
                }, 9999);
            }
        }
    }
    
}

phone.thankyou = function () {
    phone.clear(false);

    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": "999_phone/thankyou_bg.jpg",
    }, 9999);
    var l = [
        "Arothiel", "Discretlysinful (Aaron M )", "John R. (AngryJ)", "Krueschen", "Kylie V.", "Merchanto", "Orrin",
        "Rachel",
        "reverseclipse",
        "SirGuren (Contributor)", "WendyJ", "Wild86willie"
    ];
    $.each(l, function (i, v) {
        nav.t({
            type: "zimg",
            name: "phone_",
            left: 475,
            top: 180 + (i * 25),
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

    nav.button({
        "type": "zimg",
        "name": "phone_",
        "left": 451,
        "top": 155,
        "width": 1185,
        "height": 815,
        "image": "999_phone/time_bg_" + bgnum + ".jpg",
    }, 9999);
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

        var time = [9, 12, 17, 20, 0];
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
        active = currentTime > 6.9;
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

        nav.button({
            "type": "zimg",
            "name": "phone_",
            "left": 451,
            "top": 155,
            "width": 1185,
            "height": 815,
            "image": "999_phone/cheat_bg.jpg",
        }, 9999);

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
                "image": "999_phone/cheat_level.png",
            }, 9999);
        }
    }
    else {
        nav.button({
            "type": "zimg",
            "name": "phone_",
            "left": 451,
            "top": 155,
            "width": 1185,
            "height": 815,
            "image": "999_phone/cheat_bg1.jpg",
        }, 9999);

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

room9999.btnclick = function (name) {
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
    }
    else if (name.startsWith("phone_charselect_")) {
        phone.characterSelect(name.replace("phone_charselect_", ""));
    }
    else if (name.startsWith("phone_modtime")) {
        var modTime = name.replace("phone_modtime_", "");
        if (modTime === "x") {
            char.addtime(58);
            char.room(g.roomID);
            //phone.build("time");
        }
        else {
            var timeHour = parseInt(modTime);
            if (timeHour === 0)
                g.dt.setDate(g.dt.getDate() + 1);
            char.settime(parseInt(modTime), 0);
            char.room(g.roomID);
            //phone.build("time");
        }
    }
    else if (name.startsWith("phone_charsel_")) {
        nav.killbuttonStartsWith("phone_charsel_");
        var charstep1 = name.replace("phone_charsel_", "");
        var varstep2 = charstep1.split("_");
        var ch = sc.getMission(varstep2[0], varstep2[1]);
        var roomList = "";
        console.log(charstep1);
        console.log(varstep2);
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
        
        for (i = 0; i < sc.charMission[ch.i].mission[ch.j].task.length; i++) {
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
                "top": 350 + (i * 40),
                font: 30,
                hex: tcolor,
                text: mstatus + sc.charMission[ch.i].mission[ch.j].task[i].txt + roomList
            }, 1);
        }
    }
    else if (name.startsWith("phone_cheatmod")) {
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
            levels.mod(cheatLevel, 100, 999);
            phone.cheat();
            $('#char_alert').hide();
        }
    }
    else if (name.startsWith("phone_charRename_")) {
        var charrename = name.replace("phone_charRename_", "");
        sc.setcharname(charrename, $(".room-img[data-name='phone_charRenameDisplay']").val());
        g.popUpNoticeBottom(sc.n(charrename) + " has been renamed.");
    }
    else {
        switch (name) {
            case "phonex_power":
                phone.clear(true);
                break;
            case "phonex_menu":
                phone.clear(true);
                phone.build();
                break;
            case "phone_save":
                phone.saveMenu();
                break;
            case "phone_rel":
                phone.characters();
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
                window.open("http://fapforce5.com", "_blank");
                break;
            case "phone_patron":
                window.open("https://www.patreon.com/FF5", "_blank");
                break;
            case "phone_thankyou":
                phone.thankyou();
                break;
            case "phone_contacts":
                phone.clear(false);
                nav.button({
                    "type": "zimg",
                    "name": "phone_",
                    "left": 451,
                    "top": 155,
                    "width": 1185,
                    "height": 815,
                    "image": "999_phone/call_bg.jpg",
                }, 9999);
                break;
            case "phone_ach":
                phone.clear(false);
                nav.button({
                    "type": "zimg",
                    "name": "phone_",
                    "left": 451,
                    "top": 155,
                    "width": 1185,
                    "height": 815,
                    "image": "999_phone/Achievements_bg.jpg",
                }, 9999);
                break;
            case "phone_time":
                phone.passtime();
                break;
            case "phone_setting_diff0":
            case "phone_setting_diff1":
            case "phone_setting_diff2":
                gv.set("difficulty", parseInt(name.replace("phone_setting_diff", "")));
                phone.settings();
                break;
            case "phone_setting_clock12":
            case "phone_setting_clock24":
                gv.set("clock24", name.replace("phone_setting_clock", ""));
                phone.settings();
                break;
            case "phone_setting_fantOff":
            case "phone_setting_fantOn":
                gv.set("fantasyCreatures", name === "phone_setting_fantOn");
                phone.settings();
                break;
            case "phone_save_save_0":
            case "phone_save_save_1":
            case "phone_save_save_2":
            case "phone_save_save_3":
            case "phone_save_save_4":
            case "phone_save_save_5":
            case "phone_save_save_6":
            case "phone_save_save_7":
            case "phone_save_save_8":
                var saveID = name.replace("phone_save_save_", "");
                menu.save('HatMP_' + saveID, true);
                phone.saveMenu();
                break;
            case "phone_save_load_0":
            case "phone_save_load_1":
            case "phone_save_load_2":
            case "phone_save_load_3":
            case "phone_save_load_4":
            case "phone_save_load_5":
            case "phone_save_load_6":
            case "phone_save_load_7":
            case "phone_save_load_8":
            case "phone_save_load_9":
                var loadId = name.replace("phone_save_load_", "");
                if (g.newLoad) {
                    chat(-1, 0);
                    menu.load('HatMP_' + loadId);
                }
                else {
                    nav.button({
                        "type": "zimg",
                        "name": "phone_load_verify",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "999_phone/verify.png",
                    }, 9999);

                    nav.t({
                        type: "zimg",
                        name: "phone_",
                        left: 750,
                        top: 400,
                        font: 30,
                        hex: "#ffffff",
                        text: "Are you sure you wish to load: "
                    }, 1);
                    nav.t({
                        type: "zimg",
                        name: "phone_",
                        left: 650,
                        top: 450,
                        font: 30,
                        hex: "#ffffff",
                        text: $(".room-img[data-name='phone_save_load_name_" + loadId + "']").text()
                    }, 1);
                    nav.button({
                        "type": "zbtn",
                        "name": "phone_save_load_verify_" + loadId,
                        "left": 650,
                        "top": 600,
                        "width": 250,
                        "height": 100,
                        "image": "999_phone/load.png",
                    }, 9999);
                    nav.button({
                        "type": "zbtn",
                        "name": "phone_save_load_cancel",
                        "left": 1030,
                        "top": 600,
                        "width": 250,
                        "height": 100,
                        "image": "999_phone/cancel.png",
                    }, 9999); nav.button({
                        "type": "zimg",
                        "name": "phone_load_verify",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "999_phone/verify.png",
                    }, 9999);

                    nav.t({
                        type: "zimg",
                        name: "phone_",
                        left: 750,
                        top: 400,
                        font: 30,
                        hex: "#ffffff",
                        text: "Are you sure you wish to load: "
                    }, 1);
                    nav.t({
                        type: "zimg",
                        name: "phone_",
                        left: 650,
                        top: 450,
                        font: 30,
                        hex: "#ffffff",
                        text: $(".room-img[data-name='phone_save_load_name_" + loadId + "']").text()
                    }, 1);
                    nav.button({
                        "type": "zbtn",
                        "name": "phone_save_load_verify_" + loadId,
                        "left": 650,
                        "top": 600,
                        "width": 250,
                        "height": 100,
                        "image": "999_phone/load.png",
                    }, 9999);
                    nav.button({
                        "type": "zbtn",
                        "name": "phone_save_load_cancel",
                        "left": 1030,
                        "top": 600,
                        "width": 250,
                        "height": 100,
                        "image": "999_phone/cancel.png",
                    }, 9999);

                }
                break;
            case "phone_save_load_cancel":
                phone.saveMenu();
                break;
            case "phone_save_load_verify_0":
            case "phone_save_load_verify_1":
            case "phone_save_load_verify_2":
            case "phone_save_load_verify_3":
            case "phone_save_load_verify_4":
            case "phone_save_load_verify_5":
            case "phone_save_load_verify_6":
            case "phone_save_load_verify_7":
            case "phone_save_load_verify_8":
            case "phone_save_load_verify_9":
                var loadverifyId = name.replace("phone_save_load_verify_", "");
                chat(-1, 0);
                menu.load('HatMP_' + loadverifyId);
                break;
            case "phone_save_delete_0":
            case "phone_save_delete_1":
            case "phone_save_delete_2":
            case "phone_save_delete_3":
            case "phone_save_delete_4":
            case "phone_save_delete_5":
            case "phone_save_delete_6":
            case "phone_save_delete_7":
            case "phone_save_delete_8":
                var delId = name.replace("phone_save_delete_", "");
                nav.button({
                    "type": "zimg",
                    "name": "phone_load_verify",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "999_phone/verify.png",
                }, 9999);

                nav.t({
                    type: "zimg",
                    name: "phone_",
                    left: 750,
                    top: 400,
                    font: 30,
                    hex: "#ffffff",
                    text: "Are you sure you wish to delete: "
                }, 1);
                nav.t({
                    type: "zimg",
                    name: "phone_",
                    left: 650,
                    top: 450,
                    font: 30,
                    hex: "#ffffff",
                    text: $(".room-img[data-name='phone_save_load_name_" + delId + "']").text()
                }, 1);
                nav.button({
                    "type": "zbtn",
                    "name": "phone_save_delete_verify_" + delId,
                    "left": 650,
                    "top": 600,
                    "width": 250,
                    "height": 100,
                    "image": "999_phone/delete.png",
                }, 9999);
                nav.button({
                    "type": "zbtn",
                    "name": "phone_save_load_cancel",
                    "left": 1030,
                    "top": 600,
                    "width": 250,
                    "height": 100,
                    "image": "999_phone/cancel_grey.png",
                }, 9999);
                break;
            case "phone_save_delete_verify_0":
            case "phone_save_delete_verify_1":
            case "phone_save_delete_verify_2":
            case "phone_save_delete_verify_3":
            case "phone_save_delete_verify_4":
            case "phone_save_delete_verify_5":
            case "phone_save_delete_verify_6":
            case "phone_save_delete_verify_7":
            case "phone_save_delete_verify_8":
                var deleteId = name.replace("phone_save_delete_verify_", "");
                menu.saveDel('HatMP_' + deleteId);
                phone.saveMenu();
                break;
            case "phone_save_export_0":
            case "phone_save_export_1":
            case "phone_save_export_2":
            case "phone_save_export_3":
            case "phone_save_export_4":
            case "phone_save_export_5":
            case "phone_save_export_6":
            case "phone_save_export_7":
            case "phone_save_export_8":
            case "phone_save_export_9":
                var exportId = name.replace("phone_save_export_", "");
                char.export(exportId);
                break;
            case "phone_save_import":
                $('#room-export-text').hide();
                $('#room-import-text').show();
                $("#room_export").slideDown();
                $("#room_export_data").val('');
                $('#room_export_load').show();
                $('#room_export_load_file').show();
                $('#room_export_file').hide();
                break;
            default:
                break;
        }
    }
};