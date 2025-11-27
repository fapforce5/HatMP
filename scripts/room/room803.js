//Room name
var room803 = {};
room803.main = function () {
    if (g.pass === "803-3some") {
        g.pass = null;
        nav.bg("803_parentbedroom/3some_s0.webp");
        chat(81, 803);
        return;
    }
    if (sc.getTimeline("ralphsdad").roomID !== null && !sc.getTimeline("ralphsmom").thisRoom) {
        if (sc.getMissionTask("ralphsdad", "main", 3).notStarted && !daily.get("803daddick")) {
            nav.bg("803_parentbedroom/no.webp");
            chat(0, 803);
        }
        else if (!sc.getMissionTask("ralphsdad", "main", 3).complete) {
            daily.set("803daddick");
            nav.bg("803_parentbedroom/no.webp");
            chat(13, 803);
        }
        else if (sc.getMissionTask("ralphsdad", "main", 6).notStarted) {
            daily.set("803daddick");
            nav.button({
                "type": "btn",
                "name": "daddick",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d_d.webp"
            }, 801);
            chat(29, 803);
        }
        else if (!daily.get("room800dad")) {
            daily.set("803daddick");
            nav.button({
                "type": "btn",
                "name": "daddick",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d_d.webp"
            }, 801);
            chat(75, 803);
        }
    }
    else if (sc.getTimeline("ralphsmom").thisRoom) {
        nav.bg("803_parentbedroom/read_bg.webp");
        nav.button({
            "type": "btn",
            "name": "mom",
            "left": 281,
            "top": 436,
            "width": 406,
            "height": 311,
            "image": "803_parentbedroom/read0.webp"
        }, 803);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "closet",
                "left": 1317,
                "top": 3,
                "width": 574,
                "height": 999,
                "image": "803_parentbedroom/closet.webp"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 803);
        });
    }
    nav.buildnav([801]);
};

room803.btnclick = function (name) {
    switch (name) {
        case "closet":
            chat(1, 803);
            break;
        case "bedprogress":
            nav.progressBar({
                "type": "img",
                "name": "bedprogress",
                "left": 400,
                "top": 50,
                "width": 1200,
                "height": 10,
                "color": "pink",
                "maxVal": 100,
                "val": g.internal.p,
                "title": sc.n("ralphsmom") + "'s arousal"
            }, 322);

            break;
        case "mom":
            if (daily.get("803momchat")) {
                chat(44, 803);
            }
            else if (sc.getMissionTask("ralphsmom", "book", 0).notStarted) {
                chat(38, 803);
            }
            else if (sc.getMissionTask("ralphsmom", "book", 1).notStarted) {
                chat(45, 803);
            }
            else if (sc.getMissionTask("ralphsmom", "book", 2).notStarted) {
                if (sc.getLevel("ralphsmom") < 6) {
                    chat(50, 803);
                }
                else {
                    chat(51, 803);
                }
            }
            break;
        case "reset":
            char.room(803);
            break;
        case "search":
            if (daily.get("ralphpartentssearch")) {
                chat(4, 803);
            }
            else {
                nav.kill();
                daily.set("ralphpartentssearch")
                charisma.itelInit(10, "searchwin", "searchlose", 803);
            }
            break;
        case "searchwin":
            if (!cl.hasClothing("pants", "y")) {
                nav.kill();
                nav.bg("803_parentbedroom/cy.webp");
                cl.add("pants", "y");
                chat(35, 803);
            }
            else if (!cl.hasClothing("panties", "cr")) {
                nav.kill();
                nav.bg("803_parentbedroom/cr.webp");
                cl.add("panties", "cr");
                cl.add("bra", "cr");
                chat(10, 803);
            }
            else if (!inv.has("blackDildo")) {
                nav.kill();
                nav.button({
                    "type": "img",
                    "name": "bbc",
                    "left": 809,
                    "top": 258,
                    "width": 301,
                    "height": 564,
                    "image": "19_layInBed/blackDildo.png"
                }, 803);
                daily.set("803bbcdildo");
                inv.add("blackDildo");
                chat(6, 803);
            }
            else {
                if (g.rand(0, 2) === 0) {
                    nav.kill();
                    nav.bg("803_parentbedroom/cw.webp");
                    inv.add("wine");
                    chat(36, 803);
                }
                else {
                    nav.kill();
                    nav.bg("803_parentbedroom/ce.webp");
                    inv.addMulti("eyeshadow", 5);
                    chat(37, 803);
                }
            }
            break;
        case "searchlose":
            chat(5, 803);
            break;
        case "hide":
            if (g.isNight()) {
                chat(2, 803);
            }
            else {
                nav.kill();
                nav.bg("803_parentbedroom/peek0.webp");
                sc.select("keephiding", "803_parentbedroom/icon_hide0.webp", 0);
                sc.select("cancelHide", "13_sisterRoom/icon_cancel.png", 1);
            }
            break;
        case "cancelHide":
            room803.chatcatch("closet");
            break;
        case "keephiding":
            if (g.isNight()) {
                chat(2, 803);
            }
            else {
                char.addtime(45);
                if (g.rand(0, 4) === 0) {
                    nav.kill();
                    nav.bg("803_parentbedroom/peek1.webp");
                    chat(7, 803);
                }
                else {
                    g.popUpNotice("45 minutes passed...");
                }
            }
            break;
        case "daddick":
            chat(16, 803);
            break;
        case "bed_l0":
            g.internal.p += 5;
            room803.btnclick("bedprogress");
            nav.killbutton("bed_l0");
            
            nav.button({
                "type": "grab",
                "name": "bed_l1",
                "left": 1021,
                "top": 248,
                "width": 655,
                "height": 569,
                "image": "803_parentbedroom/bed_l1.webp"
            }, 803);
            nav.modbutton("bed_n", "803_parentbedroom/bed_n3.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            break;
        case "bed_l1":
            g.internal.p += 5;
            g.internal.pants = false;
            room803.btnclick("bedprogress");
            nav.killbutton("bed_l1");
            nav.modbutton("bed_n", "803_parentbedroom/bed_n3.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            break;
        case "bed_p0":
            g.internal.p += 3;
            room803.btnclick("bedprogress");
            nav.killbutton("bed_p0");
            nav.button({
                "type": "grab",
                "name": "bed_p1",
                "left": 840,
                "top": 258,
                "width": 158,
                "height": 388,
                "image": "803_parentbedroom/bed_p1.webp"
            }, 803);
            nav.modbutton("bed_n", "803_parentbedroom/bed_n3.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            chat(59, 803);
            break;
        case "bed_p1":
            g.internal.p += 7;
            g.internal.panties = false;
            room803.btnclick("bedprogress");
            nav.killbutton("bed_p1");
            nav.modbutton("bed_n", "803_parentbedroom/bed_n3.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            break;
        case "bed_s0":
            g.internal.p += 5;
            g.internal.shirt = false;
            room803.btnclick("bedprogress");
            nav.killbutton("bed_s0");
            nav.modbutton("bed_n", "803_parentbedroom/bed_n3.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            break;
        case "bed_lips":
            nav.button({
                "type": "img",
                "name": "bed_kill1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "803_parentbedroom/bed_pop_kiss_" + gender.pronoun("f") + ".webp"
            }, 803);
            if (g.internal.kiss === 0) {
                g.internal.p += 20;
                room803.btnclick("bedprogress");
            }
            else {
                g.internal.p += 10;
                room803.btnclick("bedprogress");
            }
            nav.next("bed_kill");
            nav.modbutton("bed_n", "803_parentbedroom/bed_n4.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            g.internal.kiss++;
            break;
        case "bed_tittop":
            nav.button({
                "type": "img",
                "name": "bed_kill1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "803_parentbedroom/bed_pop_niplick_" + gender.pronoun("f") + ".webp"
            }, 803);
            if (g.internal.niplick === 0) {
                g.internal.p += 10;
                room803.btnclick("bedprogress");
            }
            else if (g.internal.niplick === 1) {
                g.internal.p += 3;
                room803.btnclick("bedprogress");
            }
            nav.next("bed_kill");
            nav.modbutton("bed_n", "803_parentbedroom/bed_n1.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            g.internal.niplick++;
            break;
        case "bed_titbottom":
            nav.button({
                "type": "img",
                "name": "bed_kill1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "803_parentbedroom/bed_pop_boobsqueeze.webp"
            }, 803);
            if (g.internal.boobsqueeze === 0) {
                g.internal.p += 5;
                room803.btnclick("bedprogress");
            }
            else if (g.internal.boobsqueeze === 1) {
                g.internal.p += 2;
                room803.btnclick("bedprogress");
            }
            nav.next("bed_kill");
            nav.modbutton("bed_n", "803_parentbedroom/bed_n1.webp", null, null);
            clearTimeout(g.roomTimeout);
            g.roomTimeout = setTimeout(function () {
                nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
            }, 2000);
            g.internal.boobsqueeze++;       
            break;
        case "bed_twat":
            if (g.internal.twat === 0 || g.internal.p < 30) {
                if (!daily.get("803twatfingers")) {
                    daily.set("803twatfingers");
                    levels.gavehandjob("f", "ralphsmom");
                }
                g.internal.twat = 1;
                g.internal.p += 7;
                room803.btnclick("bedprogress");
                if (g.internal.p > 29) {
                    nav.killbutton("bed_twat");
                    nav.button({
                        "type": "tongue",
                        "name": "bed_twat",
                        "left": 874,
                        "top": 433,
                        "width": 92,
                        "height": 66,
                        "image": "803_parentbedroom/bed_twat.webp"
                    }, 803);
                }
                nav.button({
                    "type": "img",
                    "name": "bed_kill1",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "803_parentbedroom/bed_pop_twatfinger.webp"
                }, 803);
                nav.modbutton("bed_n", "803_parentbedroom/bed_n2.webp", null, null);
                clearTimeout(g.roomTimeout);
                g.roomTimeout = setTimeout(function () {
                    nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
                }, 2000);
            }
            else {
                if (!daily.get("803twatlick")) {
                    daily.set("803twatlick");
                    levels.oral(3, "f", "ralphsmom");
                }
                g.internal.twat = 2;
                g.internal.p += 20;
                room803.btnclick("bedprogress");
                if (g.internal.p > 95 && !g.internal.shirt && !g.internal.pants && !g.internal.panties) {
                    nav.killbutton("bed_twat");
                    nav.button({
                        "type": "dick",
                        "name": "bed_fuck",
                        "left": 874,
                        "top": 433,
                        "width": 92,
                        "height": 66,
                        "image": "803_parentbedroom/bed_twat.webp"
                    }, 803);
                }
                nav.button({
                    "type": "img",
                    "name": "bed_kill1",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "803_parentbedroom/bed_pop_twatlick_" + gender.pronoun("m") + ".webp"
                }, 803);
                nav.modbutton("bed_n", "803_parentbedroom/bed_n2.webp", null, null);
                clearTimeout(g.roomTimeout);
                g.roomTimeout = setTimeout(function () {
                    nav.modbutton("bed_n", "803_parentbedroom/bed_n0.webp", null, null);
                }, 2000);
            }

            nav.next("bed_kill");
            break;
        case "bed_fuck":
            nav.kill();
            if (cl.c.chastity !== null) {
                nav.bg("803_parentbedroom/bed_fuck_end.webp");
                chat(85, 803);
            }
            else if (!gender.canUseCock()) {
                nav.bg("803_parentbedroom/bed_fuck_tiny.webp");
                nav.next("bed_tiny");
            }
            else {
                nav.bg("803_parentbedroom/bed_fuck_0.webp");
                nav.next("bed_fuck1");
            }
            break;
        case "bed_tiny":
            nav.kill();
            chat(61, 803);
            break;
        case "bed_fuck1":
            nav.kill();
            chat(60, 803);
            break;
        case "bed_fuck2":
            nav.killbutton("bed_fuck2");
            if (gender.canUseCock()) {
                chat(62, 803);
            }
            else {
                chat(63, 803);
            }
            break;
        case "bed_kill":
            nav.killbutton("bed_kill");
            nav.killbutton("bed_kill1");
            break;
        case "3some_0":
            if (g.internal < 4) {
                nav.bg("803_parentbedroom/3some_" + g.internal + ".webp");
            }
            else {
                nav.kill();
                nav.bg("803_parentbedroom/3some_s2_" + gender.pronoun("f") + ".webp");
                chat(83, 803);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room803.chatcatch = function (callback) {
    switch (callback) {
        case "peek0":
        case "peek1":
        case "peek2":
        case "lpeek1":
        case "suck0":
        case "suck1":
        case "suck4":
        case "suck5":
        case "suck6":
        case "suck7":
        case "suck8":
        case "suck9":
        case "suck10":
        case "suck11":
        case "anal1":
        case "read3":
        case "read4":
        case "anal6":
        case "anal11":
        case "anal12":
        case "anal13":
        case "3some_s1":
        case "3some_s3":
        case "read5":
            nav.bg("803_parentbedroom/" + callback + ".webp");
            break;
        case "anal0":
        case "anal3":
        case "anal5":
        case "anal3a":
            nav.bg("803_parentbedroom/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "anal2":
            nav.bg("803_parentbedroom/" + callback + "_" + gender.pronoun("f") + ".mp4");
            break;
        case "read2":
        case "bed_fuck_4":
        case "bed_fuck_3":
            nav.kill();
            nav.bg("803_parentbedroom/" + callback + ".webp");
            break;
        case "peekbath":
            nav.kill();
            nav.bg("805_bathroom/peek.webp");
            break;
        case "read1":
            nav.kill();
            nav.bg("803_parentbedroom/read1.webp");
            if (sc.getMissionTask("ralphsmom", "book", 4).complete) {
                chat(88, 803);
            }
            else if (daily.get("803ralphmomfuck")) {
                chat(87, 803);
            }
            else if (sc.getTimeline("ralphsdad").roomID !== null) {
                chat(53, 803);
            }
            else {
                daily.set("803ralphmomfuck");
                chat(54, 803);
            }
            break;
        case "suck3":
            nav.kill();
            nav.bg("803_parentbedroom/" + callback + ".webp");
            break;
        case "closet":
            nav.kill();
            nav.bg("803_parentbedroom/insidecloset.webp");
            sc.select("search", "803_parentbedroom/icon_search.webp", 0);
            sc.select("hide", "803_parentbedroom/icon_hide.webp", 1);
            sc.select("reset", "301_living/icon_leave.png", 2);
            break;
        case "peekLeave":
            daily.set("noRoom803");
            char.room(801);
            break;
        case "suck2":
            nav.bg("803_parentbedroom/bg.webp");
            nav.button({
                "type": "kiss",
                "name": "daddick",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d_d.webp"
            }, 803);
            break;
        case "room801bg":
            nav.bg("801_ralphlivingroom/bg.webp");
            nav.button({
                "type": "btn",
                "name": "dad",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d.webp"
            }, 801);
            daily.set("room800dad");
            break;
        case "bathroom":
            nav.kill();
            nav.bg("805_bathroom/bg.webp");
            break;
        case "ralphmomlike":
            if (!daily.get("803ralphmomlike")) {
                daily.set("803ralphmomlike");
                sc.modLevel("ralphsmom", 51, 6);
            }
            break;
        case "resettalk":
            daily.set("803momchat");
            if (sc.getMissionTask("ralphsmom", "book", 0).notStarted) {
                sc.startMission("ralphsmom", "book");
                sc.completeMissionTask("ralphsmom", "book", 0);
            }
            else if (sc.getMissionTask("ralphsmom", "book", 1).notStarted) {
                sc.completeMissionTask("ralphsmom", "book", 1);
            }
            char.room(803);
            break;
        case "bed":
            nav.killall();
            char.changeMenu("hide", false, true);
            g.internal = {
                p: 0,
                kiss: 0,
                niplick: 0,
                boobsqueeze: 0,
                twat: 0,
                shirt: true,
                pants: true,
                panties: true
            };
            room803.btnclick("bedprogress");
            nav.bg("803_parentbedroom/bed_bg.webp");
            nav.button({
                "type": "img",
                "name": "bed_n",
                "left": 48,
                "top": 204,
                "width": 1825,
                "height": 672,
                "image": "803_parentbedroom/bed_n0.webp"
            }, 803);
            nav.button({
                "type": "hand",
                "name": "bed_twat",
                "left": 874,
                "top": 433,
                "width": 92,
                "height": 66,
                "image": "803_parentbedroom/bed_twat.webp"
            }, 803);
            nav.button({
                "type": "tongue",
                "name": "bed_tittop",
                "left": 570,
                "top": 294,
                "width": 78,
                "height": 78,
                "image": "803_parentbedroom/bed_tittop.webp"
            }, 803);
            nav.button({
                "type": "hand",
                "name": "bed_titbottom",
                "left": 580,
                "top": 587,
                "width": 78,
                "height": 77,
                "image": "803_parentbedroom/bed_titbottom.webp"
            }, 803);
            nav.button({
                "type": "kiss",
                "name": "bed_lips",
                "left": 287,
                "top": 415,
                "width": 64,
                "height": 104,
                "image": "803_parentbedroom/bed_lips.webp"
            }, 803);
            
            nav.button({
                "type": "grab",
                "name": "bed_p0",
                "left": 818,
                "top": 260,
                "width": 127,
                "height": 380,
                "image": "803_parentbedroom/bed_p0.webp"
            }, 803);
            nav.button({
                "type": "grab",
                "name": "bed_l0",
                "left": 784,
                "top": 243,
                "width": 1057,
                "height": 574,
                "image": "803_parentbedroom/bed_l0.webp"
            }, 803);
            nav.button({
                "type": "grab",
                "name": "bed_s0",
                "left": 368,
                "top": 213,
                "width": 454,
                "height": 456,
                "image": "803_parentbedroom/bed_s0.webp"
            }, 803);
            break;
        case "bed_fuck1":
            nav.kill();
            if (gender.canUseCock()) {
                nav.bg("803_parentbedroom/bed_fuck_1_bigdick.webp");
            }
            else {
                nav.bg("803_parentbedroom/bed_fuck_1_tinydick.webp");
            }
            nav.button({
                "type": "img",
                "name": "kill",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "803_parentbedroom/bed_fuck_1_" + gender.pronoun("f") + ".webp"
            }, 803);
            nav.next("bed_fuck2");
            break;
        case "bed_fuck_end":
            char.addtime(97);
            levels.fuckpussy("ralphsmom", "f");
            if (gender.canUseCock())
                sc.completeMissionTask("ralphsmom", "book", 3);
            else
                sc.completeMissionTask("ralphsmom", "book", 4);
            nav.bg("803_parentbedroom/bed_fuck_end.webp");
            break;
        case "bjAlmostleave":
            sc.completeMissionTask("ralphsdad", "main", 3);
            char.addtime(30);
            char.room(801);
            break;
        case "anal4":
            if (sc.getMissionTask("ralphsdad", "main", 4).complete &&
                (sc.getMissionTask("ralphsmom", "book", 3).complete || sc.getMissionTask("ralphsmom", "book", 4).complete)) {
                nav.bg("803_parentbedroom/anal10_" + gender.pronoun("f") + ".webp");
                chat(71, 803);
            }
            else {
                nav.bg("803_parentbedroom/" + callback + "_" + gender.pronoun("f") + ".webp");
                chat(67, 803);
            }
            break;
        case "analFirstEnd":
            sc.completeMissionTask("ralphsdad", "main", 4);
            levels.anal(4, true, "m", true, "ralphsdad");
            char.addtime(30);
            char.room(802);
            break;
        case "anal14End":
            sc.completeMissionTask("ralphsdad", "main", 5);
            sc.completeMissionTask("ralphsmom", "room", 3);
            levels.anal(4, false, "m", true, "ralphsdad");
            char.addtime(45);
            daily.set("803caught");
            future.add("803caught", 9999);
            char.room(0);
            break;
        case "anal5end":
            levels.anal(4, true, "m", true, "ralphsdad");
            char.addtime(30);
            char.room(802);
            break;
        case "3some_0":
            g.internal = 0;
            nav.killall();
            nav.next("3some_0");
            break;
        case "3someEnd":
            levels.anal(4, false, "m", true, "ralphsdad");
            levels.oral(3, "f", "ralphsmom");
            sc.completeMissionTask("ralphsmom", "room", 5);
            sc.completeMissionTask("ralphsdad", "main", 7);
            daily.set("room800dad");
            char.addtime(97);
            char.room(802);
            break;
        case "ralphroom":
            char.room(802);
            break;
        case "leave":
            char.room(801);
            break;
        default:
            break;
    }
};

room803.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "ralphsdad",
            text: "Hey champ, I think you're a bit lost. " + sc.n("ralph") + "'s room is the other " +
                "way. ",
            button: [
                { chatID: -1, text: "oh whoops. Ok.", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Should I go through their closet? ",
            button: [
                { chatID: -1, text: "Totally!", callback: "closet" },
                { chatID: -1, text: "Gross. That's an invastion of privacy!", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "It's getting pretty late. I better leave before " + sc.n("ralphsmom") + 
                "gets back. She doens't like us playing after dark. ",
            button: [
                { chatID: -1, text: "...", callback: "closet" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "There's nothing else in here. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I've already searched their closet today. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Damn! Didn't find anything",
            button: [
                { chatID: -1, text: "...", callback: "closet" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Damn " + sc.n("ralphsmom") + "! What a dirty girl you are! I wonder if your " +
                "husband knows you have such a big fake cock. Well, not anymore. Hopefully " +
                sc.n("ralph") + " doesn't get blamed for me taking this. ",
            button: [
                { chatID: -1, text: "[BBC dildo added to inventory]", callback: "closet" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "That's " + sc.n("ralphsmom") + "! I know that butt anywhere! She me dem titties " +
                "girl! Take them out and shake 'em!",
            button: [
                { chatID: 8, text: "...", callback: "peek2" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Oh nice! I so much want to touch that butt! Bend over for me baby. Just bend " +
                "over and spread those holes!",
            button: [
                { chatID: 9, text: "...", callback: "peek0" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Oh. I hear the bath running. Now's my chance to get out of here before I " +
                "get caught. ",
            button: [
                { chatID: -1, text: "I should just go.", callback: "peekLeave" },
                { chatID: 28, text: "I can't resist. I need to get a peek", callback: "peekbath" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "You dirty girl, " + sc.n("ralphsmom") + "! Crotchless panties and see through bra. " +
                "I'll bet you wore this for " + sc.n("ralphsdad") + " a few times to seduce him. " +
                "I'm so going to dress up in my closet and check my slutty self out later when I put " +
                "these on! ",
            button: [
                { chatID: -1, text: "[Slutty Bra and panties added to inventory]", callback: "closet" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Oh wow! He's really giving it to her! He sure does know how to fuck! ",
            button: [
                { chatID: 12, text: "[Take a peek]", callback: "lpeek1" },
                { chatID: -1, text: "[Give them their privacy]", callback: "leave" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "oh wow. Now that's fuckin'! ",
            button: [
                { chatID: -1, text: "[Give them their privacy]", callback: "leave" },
            ]
        },
        {
            chatID: 13,
            speaker: "ralphsdad",
            text: "What are you doing in my bedroom? ",
            button: [
                { chatID: 14, text: "I uh...", callback: "suck0" },
            ]
        },
        {
            chatID: 14,
            speaker: "ralphsdad",
            text: "You came in here hoping I'd follow you, didn't you? You wanted me to " +
                "follow you, didn't you " + sc.n("me") + "? But why would you want me to " +
                "follow you into my bedroom? ",
            button: [
                { chatID: 15, text: "well", callback: "suck1" },
            ]
        },
        {
            chatID: 15,
            speaker: "ralphsdad",
            text: "We both know why. You want to wrap that pretty mouth around my cock. " +
                "We have about 15 minutes before my wife comes walking around. Just enough time " +
                "to get a taste of my dick. That is what you want isn't it? ",
            button: [
                { chatID: -1, text: "...", callback: "suck2" },
            ]
        },
        {
            chatID: 16,
            speaker: "ralphsdad",
            text: "Oh yeah, I still got it. Just lick it a little ",
            button: [
                { chatID: 17, text: "*lick*", callback: "suck3" },
            ]
        },
        {
            chatID: 17,
            speaker: "ralphsdad",
            text: "Oh that feel so good. You have such a tender tongue. Take a small taste. " +
                "I think you'll like it.",
            button: [
                { chatID: 18, text: "*nibble*", callback: "suck4" },
            ]
        },
        {
            chatID: 18,
            speaker: "ralphsdad",
            text: "*whispering* Oh crap. That's the front door. Quick in the closet!",
            button: [
                { chatID: 19, text: "*gasp*", callback: "suck5" },
            ]
        },
        {
            chatID: 19,
            speaker: "ralphsdad",
            text: "*whispering* Just stay here till I tell you the coast is clear ok. " +
                "Don't make a sound!",
            button: [
                { chatID: 20, text: "*nod your head*", callback: "suck6" },
            ]
        },
        {
            chatID: 20,
            speaker: "ralphsmom",
            text: "So what are you doing hanging out in here? Jacking your pee pee again?",
            button: [
                { chatID: 21, text: "...", callback: "suck7" },
            ]
        },
        {
            chatID: 21,
            speaker: "ralphsdad",
            text: "What? no. I was just taking a leak. ",
            button: [
                { chatID: 22, text: "...", callback: "suck8" },
            ]
        },
        {
            chatID: 22,
            speaker: "ralphsmom",
            text: "You were peeing in MY toilet? I hope you wiped off the pee sprinkles from " +
                "the lid. ",
            button: [
                { chatID: 23, text: "...", callback: "suck9" },
            ]
        },
        {
            chatID: 23,
            speaker: "ralphsdad",
            text: "So what are you up to? Taking off your pants so we can have sex?",
            button: [
                { chatID: 24, text: "...", callback: "suck10" },
            ]
        },
        {
            chatID: 24,
            speaker: "ralphsmom",
            text: "Hahaha. Not a chance. Slipped in a mud spot, now I have take a bath " +
                "and change my pants. Kindly get out so I can bathe in peace and not " +
                "get molested the entire time. ",
            button: [
                { chatID: 25, text: "...", callback: "suck11" },
            ]
        },
        {
            chatID: 25,
            speaker: "ralphsdad",
            text: "Yes dear ",
            button: [
                { chatID: 26, text: "...", callback: "peek0" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "Looks like the coast's clear. Poor guy, just wants to have sex with " +
                "his wife and is totally denied right in front of me! If I was his wife " +
                "I would have let him stick his dick in me. Oh well. Gotta sneak out.",
            button: [
                { chatID: 27, text: "...", callback: "room801bg" },
            ]
        },
        {
            chatID: 27,
            speaker: "ralphsdad",
            text: "Oh wow! That was so close! She didn't see you did she? Of course she " +
                "didn't or she would be in here screaming at me. You should probably just " +
                "go upstairs and play with " + sc.n("ralph") + ". My heart's beating too hard " +
                "to get a BJ right now. ",
            button: [
                { chatID: -1, text: "Sure. I'll go play with my little friend. ", callback: "bjAlmostleave" },
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "Bubble bath! Damn, She does look peacful though. I shouldn't distrub " +
                "her. ",
            button: [
                { chatID: -1, text: "...", callback: "peekLeave" },
            ]
        },
        {
            chatID: 29,
            speaker: "ralphsdad",
            text: "I need to fuck you now! But not here. We'll get caught. Quick into " +
                "the bathroom. ",
            button: [
                { chatID: 30, text: "huh?", callback: "bathroom" },
            ]
        },
        {
            chatID: 30,
            speaker: "ralphsdad",
            text: "Bend over the toilet! We have to make this quick.",
            button: [
                { chatID: 31, text: "yeah?", callback: "anal0" },
            ]
        },
        {
            chatID: 31,
            speaker: "ralphsdad",
            text: "Call me daddy. I've always wanted to have sex with a butthole! Can " +
                "you believe my wife has never, never let fuck has ass? No matter how much " +
                "I ask and beg, I never get fuck her ass. Spread it. I want to see that hole. ",
            button: [
                { chatID: 32, text: "MMmmmm oh yeah daddy", callback: "anal1" },
            ]
        },
        {
            chatID: 32,
            speaker: "ralphsdad",
            text: "Oh yeah. That's so hot! I love that you're just ready to take my dick! " +
                "I'm going to really enjoy this. Tell me you want this. Beg for it. ",
            button: [
                { chatID: 33, text: "Please daddy. Please stick you big hard cock up my tight little asshole. I need your cum so bad.", callback: "anal2" },
            ]
        },
        {
            chatID: 33,
            speaker: "ralphsdad",
            text: "Oh fuck. This is even better than I thought. I don't know if I can go " +
                "back to boring missionary again. I love ass. I love this. I love you. Fuck " +
                "I love you. Now beg for me to cum in you. Tell me how much you want it. ",
            button: [
                { chatID: 34, text: "Oh daddy. Please ram your dick in my bussy and fill it with thick ropes of cum. I want to feel the hot wet spermies going up inside me.", callback: "anal3" },
            ]
        },
        {
            chatID: 34,
            speaker: "ralphsdad",
            text: "GGGEEEEeeee aaaahhhhhh!  ",
            button: [
                { chatID: -1, text: "*pant* *pant*", callback: "anal4" },
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "She has so many of these yoga pants, I'm sure she won't notice if " +
                "I just grab one. ",
            button: [
                { chatID: -1, text: "[Yoga pants added to inventory]", callback: "closet" },
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "She's hiding bottles of wine in her closet. Weird.  ",
            button: [
                { chatID: -1, text: "[Wine added to inventory]", callback: "closet" },
            ]
        },
        {
            chatID: 37,
            speaker: "thinking",
            text: "Cool. It's a well used eye shadow kit. ",
            button: [
                { chatID: -1, text: "[Five eyeshadow uses added to inventory]", callback: "closet" },
            ]
        },
        {
            chatID: 38,
            speaker: "me",
            text: "Hi " + sc.n("ralphsmom") + " what are you up to? ",
            button: [
                { chatID: 39, text: "...", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "ralphsmom",
            text: "Just reading my book. What's up? ",
            button: [
                { chatID: 40, text: "Wha cha reading? ", callback: "" },
                { chatID: -1, text: "oh nothing.", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "ralphsmom",
            text: "It's a romance book called Sir Lancelot's Tragic Love of Queen Guinevere.  ",
            button: [
                { chatID: 41, text: "Cool. What's it about?", callback: "ralphmomlike" },
                { chatID: -1, text: "oh nothing.", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "ralphsmom",
            text: "Oh. I've never had anyone ask me about what I'm reading. It seems like " +
                "my husband only cares about football, and my little " + sc.n("ralph") + 
                " only cares about his little dolls. ",
            button: [
                { chatID: 42, text: "Well, I'm interested in you. ", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "ralphsmom",
            text: "Oh you. Well, I just started it, but it's abou the tragic love of one of " +
                "King Arthur's knights and his wife, the Queen. The love was barely there between " +
                "Guinevere and Arthur, and when she saw the passion in Lancelot she could " +
                "hardly contain herself and stay loyal to Arthur. ",
            button: [
                { chatID: 43, text: "Oh. ", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "ralphsmom",
            text: "Yes. The way to a woman is through passion. I'm going to get back " +
                "to my book, why don't you go play. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "resettalk" },
            ]
        },
        {
            chatID: 44,
            speaker: "ralphsmom",
            text: "Hi dear. I'm busy ready. Why don't you go play. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "ralphsmom",
            text: "Hi dear. Did you come by to inquire about my current book? ",
            button: [
                { chatID: 46, text: "I did. It sounds so exciting!", callback: "" },
                { chatID: -1, text: "No, I'm going to run off and play. ", callback: "" },
            ]
        },
        {
            chatID: 46,
            speaker: "ralphsmom",
            text: "I finsished that book and I'm starting Madame Bovary. ",
            button: [
                { chatID: 47, text: "What's that about?", callback: "" },
                { chatID: -1, text: "cool. ", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "ralphsmom",
            text: "It's a tragic story about Emma who's married to Charles Bovary " +
                "a dull man in a boring town as she searches for love and passion.",
            button: [
                { chatID: 48, text: "I don't blame her. A woman needs love and passion in her life. ", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "ralphsmom",
            text: "Oh dear, we really do honey. Men need to realize there's an entire " +
                "body attached to our... yummy honey bits. Just like honey, if you " +
                "want it to spread, you have to warm it up a bit. ",
            button: [
                { chatID: 49, text: "I would love to try your warm honey ", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "ralphsmom",
            text: "hehehe. I would be nice for someone to eat my honey biscuits again. " +
                "mmmMMMmmm. I've got to get back to my book before we get into some " +
                "kind of trouble. Why don't you go play. ",
            button: [
                { chatID: -1, text: "Ok, but I do want to try your warm honey biscuit sometime. ", callback: "resettalk" },
            ]
        },
        {
            chatID: 50,
            speaker: "ralphsmom",
            text: "I'm really into this new book, Frayed Silk about an older married " +
                "woman in a stale marriage in a secret romance with a much younger man. " +
                "Really saucy. ",
            button: [
                { chatID: -1, text: "So hot! [Need " + sc.n("ralphsmom") + " level 6 to progress]", callback: "resettalk" },
            ]
        },
        {
            chatID: 51,
            speaker: "ralphsmom",
            text: "Come to inquire about what I'm reading again? ",
            button: [
                { chatID: 52, text: "Yes, unless you want to let me try your warm honey buiscuit.", callback: "read1" },
            ]
        },
        {
            chatID: 52,
            speaker: "ralphsmom",
            text: " ",
            button: [
                { chatID: -1, text: "Yes, unless you want to let me try your warm honey buiscuit.", callback: "read1" },
            ]
        },
        {
            chatID: 53,
            speaker: "ralphsmom",
            text: "Hehehe, don't temp me while my husband is in the other room. I mean " +
                "what would he think about you eating my yummy honey buiscuit. ",
            button: [
                { chatID: -1, text: "heheh, yeah", callback: "" },
            ]
        },
        {
            chatID: 54,
            speaker: "ralphsmom",
            text: "Now young one, what do you mean by that? ",
            button: [
                { chatID: 55, text: "[Put your hand on her leg]", callback: "read2" },
            ]
        },
        {
            chatID: 55,
            speaker: "me",
            text: "I mean, you are one amazing cook, and a beautiful woman. Any man would " +
                "be lucky to taste your home cooking. ",
            button: [
                { chatID: 56, text: "...", callback: "read3" },
            ]
        },
        {
            chatID: 56,
            speaker: "ralphsmom",
            text: "Oh my. I do think you're trying to take advantage of me. What would " +
                "my husband say if he saw this? ",
            button: [
                { chatID: 57, text: "...", callback: "read4" },
            ]
        },
        {
            chatID: 57,
            speaker: "me",
            text: "He should say that he should have paid more attention to you, but " +
                "that doesn't matter. He's not here. We're here. Right here, right now. " +
                "Let me be your Sir Lancelot and show you the passion you've lost. ",
            button: [
                { chatID: 58, text: "[Kiss the girl]", callback: "read5" },
            ]
        },
        {
            chatID: 58,
            speaker: "ralphsmom",
            text: "This is the passion I've been missing. Now what are you going to do " +
                "to me my Sir Lancelot? ",
            button: [
                { chatID: -1, text: "...", callback: "bed" },
            ]
        },
        {
            chatID: 59,
            speaker: "me",
            text: "Someone's sopping wet.. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 60,
            speaker: "ralphsmom",
            text: "OH god! I haven't been this aroused since college! Please please please.",
            button: [
                { chatID: -1, text: "...", callback: "bed_fuck1" },
            ]
        },
        {
            chatID: 61,
            speaker: "ralphsmom",
            text: "Hahah! I'm so sorry. I shouldn't laugh. It tickels me so much I can't help it. Just keep " +
                "going till you finish honey. Don't worry about me. Just do your thing. ",
            button: [
                { chatID: -1, text: "...", callback: "bed_fuck1" },
            ]
        },
        {
            chatID: 62,
            speaker: "ralphsmom",
            text: "Oh yes! Keep going, keep going.... I'm almost there! ",
            button: [
                { chatID: 64, text: "...", callback: "bed_fuck_4" },
            ]
        },
        {
            chatID: 63,
            speaker: "ralphsmom",
            text: "You're doing good honey. Just hurry up and finish.  ",
            button: [
                { chatID: 65, text: "...", callback: "bed_fuck_3" },
            ]
        },
        {
            chatID: 64,
            speaker: "ralphsmom",
            text: "Oh fuck oh fuck oh fuck! Yes yes yes!!!! ",
            button: [
                { chatID: 66, text: "*grunt*", callback: "bed_fuck_end" },
            ]
        },
        {
            chatID: 65,
            speaker: "ralphsmom",
            text: "You did a good job baby. ",
            button: [
                { chatID: 66, text: "...", callback: "bed_fuck_end" },
            ]
        },
        {
            chatID: 66,
            speaker: "ralphsmom",
            text: "Thanks honey. Now I've got to clean up. Go and play with your little friend.  ",
            button: [
                { chatID: -1, text: "ok", callback: "leave" },
            ]
        },
        {
            chatID: 67,
            speaker: "ralphsdad",
            text: "That's a great ass you have. I haven't cum like that in forever. *huff* Fuck I'm going " +
                "to need that hole all the time. *smack*",
            button: [
                { chatID: 68, text: "*gasp*", callback: "anal5" },
            ]
        },
        {
            chatID: 68,
            speaker: "thinking",
            text: "OOoooooohhhh. wow! Did I just cum from getting my ass smacked? I'm such a submissive " +
                "slut. But it did feel soooo good!!! wowwy wowwy wow. ",
            button: [
                { chatID: 69, text: "...", callback: "anal6" },
            ]
        },
        {
            chatID: 69,
            speaker: "ralphsdad",
            text: "So this is just between you and me, ok. No one, not my wife or kid need to know what " +
                "we just did. Tell me that this is just a secret between you and me. ",
            button: [
                { chatID: 70, text: "Yes daddy, it's our little secret. ", callback: "" },
            ]
        },
        {
            chatID: 70,
            speaker: "ralphsdad",
            text: "That's a good " + gender.pronoun("boy") + ". Now run along and go play. We don't need " +
                "my wife getting suspicious. ",
            button: [
                { chatID: -1, text: "Ok daddy. I'll go play with my friend. ", callback: "analFirstEnd" },
            ]
        },
        {
            chatID: 71,
            speaker: "ralphsmom",
            text: "I thought I head sex in my bathroom! I didn't expect to find My husband with his penis " +
                "in our son's friend's butt! ",
            button: [
                { chatID: 72, text: "*gasp*", callback: "anal11" },
            ]
        },
        {
            chatID: 72,
            speaker: "ralphsdad",
            text: "Well excuse me! I asked you if you wanted to have sex, but like always you turned me down! " +
                "I don't know how many times I try to initiate sex with my wife, I get a no. For the first time " +
                "in my life, I got a yes. No hesitation, no whining, just a happy yes! And " + gender.pronoun("she") +
                " let me put it up her ass. Something you've NEVER done! ",
            button: [
                { chatID: 73, text: "[Busy getting dressed]", callback: "anal12" },
            ]
        },
        {
            chatID: 73,
            speaker: "ralphsmom",
            text: "You tried to initiate sex? I'm sorry, but trying to put your finger in my butt is not " +
                "initiating sex. It's border line sexual assult, becuse I keep telling you to stop that. If " +
                "you really wanted to have sex with me, try some romance. Or ask me about my day. Then maybe " +
                "start with some oral. You know how much I love oral. I don't orgasm from you just pounding " +
                "away on me like I'm some empty hole.",
            button: [
                { chatID: 74, text: "[Keep getting dressed]", callback: "anal13" },
            ]
        },
        {
            chatID: 74,
            speaker: "ralphsdad",
            text: "Oral? When's the last time you've given me a blow job? Besides I'm happy with your honey pot, " +
                "but you never let me near it. Is it too much to ask for a quickie every once in a while? " +
                "I'm so tired of masturbating all the time.... ",
            button: [
                { chatID: -1, text: "[Run away]", callback: "anal14End" },
            ]
        },
        {
            chatID: 75,
            speaker: "ralphsdad",
            text: "I knew you wanted to get fucked! Let's go to the bathroom so we don't make too much noise. " +
                "Wouldn't want " + sc.n("ralph") + " to walk in on us. ",
            button: [
                { chatID: 76, text: "Yes daddy!", callback: "anal0" },
            ]
        },
        {
            chatID: 76,
            speaker: "ralphsdad",
            text: "Love how you're always ready for dick. I don't even have to try! Show me where I'm going " +
                "to stick my cock. ",
            button: [
                { chatID: 77, text: "Like this daddy?", callback: "anal1" },
            ]
        },
        {
            chatID: 77,
            speaker: "ralphsdad",
            text: "Just like that. You have such a pretty hole. I need this so bad! ",
            button: [
                { chatID: 78, text: "Oh yes daddy. stop teasing me and put it inside me!", callback: "anal2" },
            ]
        },
        {
            chatID: 78,
            speaker: "ralphsdad",
            text: "I love sissies so much! You asshole is so tight it just is begging to milk my dick. I " +
                "love anal so much!",
            button: [
                { chatID: 79, text: "*grunt* *squeel* yes harder daddy, I can feel my sissygasm! *huff*", callback: "anal3a" },
            ]
        },
        {
            chatID: 79,
            speaker: "ralphsdad",
            text: "Oh god I'm cumming up your ass! So hot! ",
            button: [
                { chatID: 80, text: "*sissy squeel* So good! I'm cumming so hard!", callback: "anal4" },
            ]
        },
        {
            chatID: 80,
            speaker: "ralphsdad",
            text: "Damn that was awesome! My balls were overflowing. I so needed that. So glad my wife and " +
                "agreed we could use you however we wanted. Now go play and remember, this is just between us.  ",
            button: [
                { chatID: -1, text: "Yes daddy. Our little secret. ", callback: "anal5end" },
            ]
        },
        {
            chatID: 81,
            speaker: "ralphsmom",
            text: "I'm so excited! I get to enjoy my favorite part of sex and I don't have to fend off my " +
                "husband's dick always trying to get into my butt.  ",
            button: [
                { chatID: 82, text: "...", callback: "3some_s1" },
            ]
        },
        {
            chatID: 82,
            speaker: "ralphsmom",
            text: "And you get the best of both worlds. My husband's fat penis and my yummy honey pot. ",
            button: [
                { chatID: -1, text: "mmmMmmmm", callback: "3some_0" },
            ]
        },
        {
            chatID: 83,
            speaker: "ralphsdad",
            text: "Oh god, that was amazing. I love a tight butthole. ",
            button: [
                { chatID: 84, text: "*gasp*", callback: "" },
            ]
        },
        {
            chatID: 84,
            speaker: "ralphsmom",
            text: "Not as much as I love to get licked. I orgasdmed so much I don't think I have any left. hehehe ",
            button: [
                { chatID: 85, text: "*lick*", callback: "3some_s3" },
            ]
        },
        {
            chatID: 85,
            speaker: "ralphsmom",
            text: "Thank you so much for making our marriage better. It's hard to keep it fresh for " +
                "so many years. Now go run along and play. Just remember, it's our little secret. ",
            button: [
                { chatID: -1, text: "I'll keep it between just us. ", callback: "3someEnd" },
            ]
        },
        {
            chatID: 86,
            speaker: "ralphsmom",
            text: "Oh. Well it looks like you have that thing on your penis. That's ok honey. To be honest " +
                "I really just prefer to have my honey pot eaten. For me a penis is like sprinkles on a cake. " +
                "It's nice, but I don't need it to enjoy my cake. And sometimes I just prefer no sprinkles on " +
                "my cake. You did good. Go play with your friend. ",
            button: [
                { chatID: -1, text: "ok. cool. ", callback: "ralphroom" },
            ]
        },
        {
            chatID: 87,
            speaker: "ralphsmom",
            text: "I'm spent. I'm not a spring chicken anymore. Why don't you go play with my little " + sc.n("ralph") + ". ",
            button: [
                { chatID: -1, text: "Sure ", callback: "ralphroom" },
            ]
        },
        {
            chatID: 88,
            speaker: "ralphsmom",
            text: "Oh honey. I like being the object of desire, but if I'm going to let you rub your naked " +
                "body all over mine I need to feel some pleasure. Now I know you'll find a nice someone that " +
                "is happy with your size, but I'm going to need something bigger. Surely you're aware how " +
                "small and limp your fun stick is. It's nice, just not for me. Why don't you go play with " +
                "my little " + sc.n("ralph") + ", I'm going to work on this book. ",
            button: [
                { chatID: -1, text: "oh ok ", callback: "ralphroom" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};