//Room name
var room328 = {};
room328.main = function () {
    if (sc.getMission("rachel", "ranch").notStarted) {
        g.map = {
            trust: 20,
            anger: 0,
            event: "meadow",
            day: 1,
            step: 0,
            eat: 0,
            temp: 0,
            pig: null,
            kinsey: 0,
            firsteat: true,
            milked: false,
            badcounter: 0,
            punish: null,
            nightvisit: false,
            badevent: 0,
            barn: false,
            barnTooLong: false,
            av: 0,
            avclean: false,
            ppgirl: false,
            ppgirleat: false,
            jars: [
                { i: 0, n: "emptyjar", t: 0 },
                { i: 1, n: "pissjarboy", t: 0 },
                { i: 2, n: "pissjargirl", t: 0 },
                { i: 3, n: "cumjar", t: 0 },
                { i: 4, n: "dogcumjar", t: 0 },
                { i: 5, n: "horsecumjar", t: 0 },
                { i: 6, n: "pigcumjar", t: 0 }
            ]
        };
        sc.completeMission("kinsey", "milk", sc.getMissionTask("kinsey", "milk", 4).complete);
        sc.show("kinsey");
        sc.show("rachel");
        sc.completeMission("rachel", "horse", sc.getMission("rachel", "horse").startedOrComplete);
        cl.c.buttplug = null;
        cl.c.chastity = null;
        cl.c.accessories = null;
        cl.c.necklace = null;
        cl.c.earring = null;
        cl.c.nosering = null;
        cl.c.bellyring = null;
        cl.c.nipplering = null;
        cl.nude();
        sc.startMission("rachel", "ranch");
        room328.btnclick("meadow");
        nav.button({
            "type": "img",
            "name": "bg",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "999_phone/clear.webp"
        }, 328);
        
        sc.select("icon_stand", "328_farm/icon_stand.webp", -2);
        return;
    }
    else if (g.map.barnTooLong) {
        g.map.barnTooLong = false;
    }
    else if (g.map.event === "meadow") {
        if (g.gethourdecimal() > 12 && !g.map.milked) {
            char.settime(12, 24);
            g.map.event = "milk";
        }
        else if (g.gethourdecimal() > 17) {
            if (g.gethourdecimal() > 18)
                char.settime(17, 45);
            g.map.event = "eat";
        }
        else if (g.map.trust > 50 && !g.map.barn) {
            nav.bg("328_farm/meadowbg.webp");
            nav.button({
                "type": "img",
                "name": "bg",
                "left": 1004,
                "top": 210,
                "width": 270,
                "height": 798,
                "image": "328_farm/rachel_tits.webp"
            }, 328);
            zcl.pucker(600, 800, .25, "back", false);
            g.map.barn = true;
            chat(124, 328);
        }
        else {
            room328.btnclick("meadow");
            sc.select("icon_stand", "328_farm/icon_stand.webp", -2);
            sc.select("icon_frolic", "328_farm/icon_frolic.webp", -1);
            sc.select("icon_nap", "328_farm/icon_nap.webp", 0);
            sc.select("icon_moo", "328_farm/icon_moo.webp", 1);
            sc.select("icon_drink", "328_farm/icon_drink.webp", 2);
            sc.select("icon_pee", "328_farm/icon_pee.webp", 3);
            if (g.map.barn)
                sc.select("icon_barn", "328_farm/icon_barn.webp", 4);
        }
    }

    if (g.map.event === "eat") {
        room328.btnclick("progressbar");
        g.map.event = "eat";
        nav.bg("328_farm/feed.webp");
        sc.select("icon_eat", "328_farm/icon_eat.webp", -2);
        sc.select("icon_eatno", "328_farm/icon_eatno.webp", -1);
        if (g.map.ppgirl && g.gethourdecimal() < 12) {
            if (sc.getMissionTask("ppgirl", "ranch", 2).startedOrComplete) {
                sc.select("icon_food1", "328_farm/icon_food1.webp", 0);
            }
            else {
                sc.select("icon_food0", "328_farm/icon_food0.webp", 0);
            }
        }
    }
     
    if (g.map.event === "milk") {
        g.map.milked = true;
        g.map.event = "meadow";
        room328.btnclick("meadow");
        nav.button({
            "type": "img",
            "name": "rachel",
            "left": 972,
            "top": 134,
            "width": 554,
            "height": 946,
            "image": "328_farm/rachel_back.webp"
        }, 328);
        chat(6, 328);
    }

    if (g.map.event === "bed") {
        g.map.punish = null;
        g.map.temp = 0;
        if (g.map.anger > 74) {
            if (g.map.badevent % 3 === 0) {
                nav.bg("328_farm/punish0_0.webp");
                chat(52, 328);
            }
            else {
                zcl.pucker(590, 900, .25, "back", true);
                nav.bg("328_farm/pig0.webp");
                chat(112, 328);
            }
            g.map.badevent += 1;
        }
        else {
            nav.bg("328_farm/sleep_visit0.webp");
            switch (sc.taskGetStep("security", "ranch")) {
                case -1:
                case 0:
                    sc.show("security");
                    sc.completeMissionTask("security", "ranch", 0);
                    sc.startMission("security", "ranch");
                    sc.modSecret("security", 100);
                    if (sc.getMissionTask("horse", "sex", 1).complete) {
                        sc.modLevel("security", 100, 10);
                        chat(71, 328);
                    }
                    else {
                        chat(73, 328);
                    }
                    break;
                case 1:
                    if (sc.getMissionTask("horse", "sex", 1).complete) {
                        chat(74, 328);
                    }
                    else {
                        chat(75, 328);
                    }
                    break;
                default:
                    chat(98, 328);
                    break;
            }
        }
    }
    if (g.map.event === "sleep") {
        let sleepenergy = 0;
        sleepenergy += g.map.eat * 20;
        gv.set("energy", sleepenergy);

        g.pass = null;
        g.map.event = "eat";
        g.map.milked = false;
        g.map.day++;
        g.map.eat = 0;
        g.map.anger = 0;
        g.map.ppgirleat = false;
        room328.chatcatch("addtrust");
        g.map.nightvisit = false;
        nav.bg("328_farm/sleep_wake.webp");
        if (cl.stinky()) {
            chat(90, 328);
        }
        else {
            chat(11, 328);
        }
    }
    inv.hide();
};

room328.btnclick = function (name) {
    switch (name) {
        case "progressbar":
            nav.killbutton("trust");
            nav.killbutton("progressAnger");
            if (g.map.trust < 0)
                g.map.trust = 0;
            else if (g.map.trust > 100)
                g.map.trust = 100;

            if (g.map.anger < 0)
                g.map.anger = 0;
            else if (g.map.anger > 100)
                g.map.anger = 100;

            nav.progressBar({
                "type": "img",
                "name": "trust",
                "left": 400,
                "top": 30,
                "width": 1200,
                "height": 10,
                "color": (g.map.trust < 51 ? "red" : "green"),
                "maxVal": 100,
                "val": g.map.trust,
                "title": "Rachel's Trust"
            }, 322);

            nav.progressBar({
                "type": "img",
                "name": "progressAnger",
                "left": 400,
                "top": 70,
                "width": 1200,
                "height": 10,
                "color": (g.map.anger < 75 ? "green" : "red"),
                "maxVal": 100,
                "val": g.map.anger,
                "title": "Racher's Anger: Day " + g.map.day
            }, 322);
            break;
        case "pigrun_progress":
            nav.progressBar({
                "type": "img",
                "name": "trust",
                "left": 400,
                "top": 30,
                "width": 1200,
                "height": 10,
                "color": "pink",
                "maxVal": 15,
                "val": g.map.temp,
                "title": "Rachel's Trust"
            }, 322);
            break;
        case "icon_frolic":
            if (gv.get("energy") < 5) {
                chat(38, 328);
            }
            else {
                nav.kill();
                if (g.rand(0, 3) === 0) {
                    if (g.map.trust < 50) {
                        nav.kill();
                        nav.bg("328_farm/frolicbg.webp");
                        nav.button({
                            "type": "btn",
                            "name": "me",
                            "left": 689,
                            "top": 487,
                            "width": 443,
                            "height": 366,
                            "image": "328_farm/frolic0_" + gender.pronoun("f") + ".webp"
                        }, 328);
                        nav.button({
                            "type": "img ",
                            "name": "me",
                            "left": 1266,
                            "top": 509,
                            "width": 491,
                            "height": 348,
                            "image": "328_farm/frolic_r" + g.rand(0, 3) + ".webp"
                        }, 328);
                        char.addtime(30);
                        chat(40, 328);
                    }
                    else {
                        nav.bg("328_farm/frolicbg.webp");
                        switch (g.rand(0, 2)) {
                            case 0:
                                nav.button({
                                    "type": "btn",
                                    "name": "me",
                                    "left": 689,
                                    "top": 487,
                                    "width": 443,
                                    "height": 366,
                                    "image": "328_farm/frolic0_" + gender.pronoun("f") + ".webp"
                                }, 328);
                                nav.button({
                                    "type": "img ",
                                    "name": "me",
                                    "left": 1266,
                                    "top": 509,
                                    "width": 491,
                                    "height": 348,
                                    "image": "328_farm/frolic_r1.webp"
                                }, 328);
                                char.addtime(30);
                                chat(41, 328);
                                break;
                            case 1:
                                nav.button({
                                    "type": "btn",
                                    "name": "me",
                                    "left": 689,
                                    "top": 487,
                                    "width": 443,
                                    "height": 366,
                                    "image": "328_farm/frolic0_" + gender.pronoun("f") + ".webp"
                                }, 328);
                                nav.button({
                                    "type": "img ",
                                    "name": "me",
                                    "left": 1266,
                                    "top": 509,
                                    "width": 491,
                                    "height": 348,
                                    "image": "328_farm/frolic_r2.webp"
                                }, 328);
                                char.addtime(30);
                                chat(43, 328);
                                break;
                        }
                    }
                }
                else {
                    gv.mod("energy", -5);
                    char.addtime(60);
                    levels.mod("fitness", 10);
                    nav.bg("328_farm/frolic_" + gender.pronoun("f") + ".webp");
                    chat(39, 328);
                }
            }
            break;
        case "meadow":
            nav.kill();
            room328.btnclick("progressbar");
            nav.bg("328_farm/meadowbg.webp");
            nav.button({
                "type": "btn",
                "name": "lead",
                "left": 1212,
                "top": 567,
                "width": 402,
                "height": 298,
                "image": "328_farm/lead.webp"
            }, 328);
            nav.button({
                "type": "btn",
                "name": "kinsey",
                "left": 235,
                "top": 567,
                "width": 191,
                "height": 162,
                "image": "328_farm/kinsey.webp"
            }, 328);
            if (sc.getMission("envy", "hucow").startedOrComplete) {
                nav.button({
                    "type": "btn",
                    "name": "envy",
                    "left": 682,
                    "top": 552,
                    "width": 181,
                    "height": 142,
                    "image": "328_farm/envy.webp"
                }, 328);
            }
            zcl.pucker(600, 800, .25, "back", false);
            break;
        case "icon_stand":
            room328.btnclick("killbuttonsMeadow");
            zcl.embarrass(200, 800, .65, "back", false);
            chat(0, 328);
            break;
        case "icon_moo":
            nav.killbuttonStartsWith("icon");
            nav.button({
                "type": "img",
                "name": "moo",
                "left": 1070,
                "top": 396,
                "width": 617,
                "height": 218,
                "image": "328_farm/moo.webp"
            }, 328);
            if (g.rand(0, 3) === 0) {
                if (!daily.get("moofuck")) {
                    daily.set("moofuck");
                    chat(26, 328);
                }
                else {
                    char.addtime(20);
                    g.map.anger += 20;
                    room328.btnclick("progressbar");
                    chat(36, 328);
                }
            }
            else {
                if (daily.get("moo328")) {
                    daily.set("moo328");
                    room328.chatcatch("addtrust");
                }
                char.addtime(20);
                chat(25, 328);
            }
            break;
        case "icon_nap":
            nav.killbuttonStartsWith("icon_");
            sc.select("icon_nap2", "322_dog/icon_nap2.webp", -2);
            sc.select("icon_nap4", "322_dog/icon_nap4.webp", -1);
            sc.select("icon_napa", "322_dog/icon_napAll.webp", 0);
            sc.selectCancel("icon_cancel", 1)
            break;
        case "icon_nap2":
            nav.kill();
            nav.bg("999_phone/black.jpg");
            gv.mod("energy", 10);
            g.roomTimeout = setTimeout(function () {
                char.addtime(120);
                char.room(328);
            }, 1200);
            break;
        case "icon_nap4":
            nav.kill();
            nav.bg("999_phone/black.jpg");
            gv.mod("energy", 20);
            g.roomTimeout = setTimeout(function () {
                char.addtime(240);
                char.room(328);
            }, 1200);
            break;
        case "icon_napa":
            gv.mod("energy", 20);
            nav.kill();
            nav.bg("999_phone/black.jpg");
            g.roomTimeout = setTimeout(function () {
                char.settime(17, 2);
                char.room(328);
            }, 1200);
            break;
        case "icon_cancel":
            nav.killbuttonStartsWith("icon_");
            sc.select("icon_stand", "328_farm/icon_stand.webp", -2);
            sc.select("icon_frolic", "328_farm/icon_frolic.webp", -1);
            sc.select("icon_nap", "328_farm/icon_nap.webp", 0);
            sc.select("icon_moo", "328_farm/icon_moo.webp", 1);
            sc.select("icon_drink", "328_farm/icon_drink.webp", 2);
            sc.select("icon_pee", "328_farm/icon_pee.webp", 3);
            if (g.map.barn)
                sc.select("icon_barn", "328_farm/icon_barn.webp", 4);
            break;
        case "killbuttonsMeadow":
            nav.killbuttonStartsWith("icon_");
            break;
        case "icon_eat":
            nav.killbutton("icon_eat");
            nav.killbutton("icon_eatno");
            g.map.eat += 1;
            gv.mod("hormone", 20);
            gv.mod("energy", 40);
            nav.bg("328_farm/feed0.webp");
            room328.chatcatch("addtrust");
            room328.btnclick("progressbar");
            if (g.map.firsteat) {
                g.map.firsteat = false;
                chat(3, 328);
            }
            else
                chat(5, 328);
            break;
        case "icon_eatno":
            nav.killbutton("icon_eat");
            nav.killbutton("icon_eatno");
            g.popUpNotice("Trust has gone down");
            g.map.trust -= 5;
            g.map.anger += 40;
            nav.bg("328_farm/feed0.webp");
            chat(10, 328);
            break;
        case "icon_bedturn":
            nav.kill();
            if (g.map.temp === 0) {
                g.map.temp = 1;
                nav.bg("328_farm/sleep0.webp");
                sc.select("icon_bedturn", "328_farm/icon_turn.webp", -2);
                sc.select("icon_bang", "328_farm/icon_bang.webp", -1);
                
            }
            else {
                g.map.temp = 0;
                nav.bg("328_farm/sleep1.webp");
                sc.select("icon_bedturn", "328_farm/icon_turn.webp", -2);
                sc.select("icon_sleep", "328_farm/icon_sleep.webp", -1);
            }
            break;
        case "icon_sleep":
            g.pass = 328;
            g.map.event = "sleep";
            char.room(28);
            break;
        case "icon_drink":
            if (gv.get("bladder") > .98) {
                chat(138, 328);
            }
            else {
                nav.kill();
                char.addtime(30);
                switch (g.rand(0, 6)) {
                    case 0:
                        gv.mod("bladder", .3);
                        nav.bg("328_farm/drink3.webp");
                        chat(128, 328);
                        break;
                    case 1:
                        nav.bg("328_farm/drink1.webp");
                        chat(130, 328);
                        break;
                    case 2:
                        nav.bg("328_farm/drink2.webp");
                        chat(132, 328);
                        break;
                    default:
                        gv.mod("bladder", .3);
                        nav.bg("328_farm/drink0.webp");
                        chat(137, 328);
                        break;
                }
                zcl.facedown(300, 900, .4, "", false);
                nav.button({
                    "type": "img",
                    "name": "kinsey",
                    "left": 1004,
                    "top": 709,
                    "width": 33,
                    "height": 53,
                    "image": "328_farm/drink_tongue.webp"
                }, 328);
            }
            break;
        case "icon_pee":
            if (gv.get("bladder") < .1) {
                chat(140, 328);
            }
            else {
                nav.kill();
                nav.bg("328_farm/frolicbg.webp");
                gv.set("bladder", 0);
                zcl.pee(250, 800, .4, "", false);
                char.addtime(25);
                chat(139, 328);
            }
            break;
        case "icon_food0":
            nav.kill();
            sc.startMissionTask("ppgirl", "ranch", 2);
            chat(141, 328);
            break;
        case "icon_food1":
            nav.kill();
            g.map.ppgirleat = true;
            nav.bg("328_farm/feed_bussy.webp");
            g.map.eat += 1;
            gv.mod("hormone", 20);
            gv.mod("energy", 40);
            chat(142, 328);
            break;
        case "icon_bang":
            nav.kill();
            nav.bg("328_farm/sleep_visit0.webp");
            if (!g.map.nightvisit) {
                g.map.nightvisit = true;
                g.map.temp = 0;
                switch (sc.taskGetStep("security", "ranch")) {
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                        chat(76, 328);
                        break;
                    case 3:
                        chat(99, 328);
                        break;
                    case 4:
                        sc.completeMissionTask("security", "ranch", 4);
                        chat(105, 328);
                        break;
                    case 5:
                        sc.completeMissionTask("security", "ranch", 5);
                        chat(108, 328);
                        break;
                    case 6:
                        chat(111, 328);
                        break;

                }
                
            }
            else {
                g.map.temp = 0;
                if (sc.getMissionTask("security", "ranch", 1).notStarted)
                    chat(89, 328);
                else
                    chat(96, 328);
            }
            break;
        case "kinsey":
            zcl.kill();
            nav.killbuttonStartsWith("icon");
            nav.killbutton("kinsey");
            daily.set("kinsey");
            if (sc.getMission("kinsey", "ranch").notStarted) {
                char.addtime(30);
                sc.startMission("kinsey", "ranch");
                sc.completeMissionTask("kinsey", "ranch", 0);
                if (sc.getMission("kinsey", "milk").success) {
                    nav.button({
                        "type": "img",
                        "name": "kinsey",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "328_farm/kinseyc_happy.webp"
                    }, 328);
                    chat(12, 328);
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "kinsey",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "328_farm/kinseyc_normal.webp"
                    }, 328);
                    chat(16, 328);
                }
            }
            else if (g.map.punish === "kinsey") {
                char.addtime(45);
                g.map.punish = null;
                nav.button({
                    "type": "img",
                    "name": "kinsey",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "328_farm/kinseyc_mad.webp"
                }, 328);
                daily.set("moofuckkinsey");
                sc.modLevel("kinsey", 50, 10);
                chat(69, 328);
            } 
            else if (g.map.punish === "pigpen") {
                char.addtime(45);
                g.map.punish = null;
                nav.button({
                    "type": "img",
                    "name": "kinsey",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "328_farm/kinseyc_mad.webp"
                }, 328);
                daily.set("moofuckkinsey");
                sc.modLevel("kinsey", 50, 10);
                chat(122, 328);
            } 
            else {
                if (daily.get("moofuck") && !daily.get("moofuckkinsey")) {
                    nav.button({
                        "type": "img",
                        "name": "kinsey",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "328_farm/kinseyc_mad.webp"
                    }, 328);
                    daily.set("moofuckkinsey");
                    sc.modLevel("kinsey", 25, 10);
                    chat(37, 328);
                }
                char.addtime(30);
                nav.button({
                    "type": "img",
                    "name": "kinsey",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "328_farm/kinseyc_normal.webp"
                }, 328);
                chat(700, 328);
            }
            break;
        case "envy":
            zcl.kill();
            nav.killbuttonStartsWith("icon");
            char.addtime(30);
            if (gv.getButtCum().total > 0) {
                nav.killbutton("envy");
                zcl.kill();
                nav.button({
                    "type": "img",
                    "name": "envy",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "328_farm/envyc_alert.webp"
                }, 328);
                chat(19, 328);
            }
            else {
                nav.killbutton("envy");
                zcl.kill();
                nav.button({
                    "type": "img",
                    "name": "envy",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "328_farm/envyc.webp"
                }, 328);
                chat(800, 328);
            }
            break;
        case "moo4":
            nav.killbutton("moo4");
            chat(31, 328);
            break;
        case "pigPen":
            g.map.temp++;
            g.map.pig = [null, null, null];
            var pig_x = [189, 823, 1425];
            nav.bg("328_farm/pig_bg0.webp");
            gv.mod("energy", -4);
            nav.kill();
            room328.btnclick("pigrun_progress");
            if (g.map.temp > 14) {
                nav.bg("328_farm/pig_finish.webp");
                zcl.bellydown(100, 550, .7, "sad", false);
                chat(946, 328);
                return;
            }
            if (g.map.temp < 4) {
                g.map.pig[g.rand(0, 3)] = g.rand(0, 3) === 0 ? "pig" : "puddle";
            }
            else if(g.map.temp < 7) {
                for (let i = 0; i < 3; i++) {
                    switch (g.rand(0, 5)) {
                        case 0: g.map.pig[i] = "pig"; break;
                        case 1: g.map.pig[i] = "puddle"; break;
                    }
                }
            }
            else {
                for (let i = 0; i < 3; i++) {
                    switch (g.rand(0, 2)) {
                        case 0: g.map.pig[i] = "pig"; break;
                        case 1: g.map.pig[i] = "puddle"; break;
                    }
                }
            }

            if (g.map.kinsey > 0) {
                room328.btnclick("pigkinsey");
                g.map.kinsey++;
            }

            if (g.map.pig[0] === "pig") {
                nav.button({
                    "type": "img",
                    "name": "pigobs",
                    "left": pig_x[0],
                    "top": 429,
                    "width": 321,
                    "height": 362,
                    "image": "328_farm/pig_p_r.webp"
                }, 328);
            }
            else if (g.map.pig[0] === "puddle") {
                nav.button({
                    "type": "img",
                    "name": "pigobs",
                    "left": 82,
                    "top": 587,
                    "width": 588,
                    "height": 303,
                    "image": "328_farm/pig_o_0.webp"
                }, 328);
            }

            if (g.map.pig[1] === "pig") {
                nav.button({
                    "type": "img",
                    "name": "pigobs",
                    "left": pig_x[1],
                    "top": 429,
                    "width": 321,
                    "height": 362,
                    "image": "328_farm/pig_p_l.webp"
                }, 328);
            }
            else if (g.map.pig[1] === "puddle") {
                nav.button({
                    "type": "img",
                    "name": "pigobs",
                    "left": 637,
                    "top": 553,
                    "width": 693,
                    "height": 273,
                    "image": "328_farm/pig_o_1.webp"
                }, 328);
            }

            if (g.map.pig[2] === "pig") {
                nav.button({
                    "type": "img",
                    "name": "pigobs",
                    "left": pig_x[2],
                    "top": 429,
                    "width": 321,
                    "height": 362,
                    "image": "328_farm/pig_p_l.webp"
                }, 328);
            }
            else if (g.map.pig[2] === "puddle") {
                nav.button({
                    "type": "img",
                    "name": "pigobs",
                    "left": 1332,
                    "top": 587,
                    "width": 588,
                    "height": 303,
                    "image": "328_farm/pig_o_2.webp"
                }, 328);
            }
            zcl.pucker(590, 900, .25, "back", true);

            if (g.map.kinsey === 0) {
                nav.button({
                    "type": "img",
                    "name": "pigkinsey",
                    "left": 613,
                    "top": 610,
                    "width": 300,
                    "height": 470,
                    "image": "328_farm/pig_kinsey.webp"
                }, 328);
            }
            nav.button({
                "type": "btn",
                "name": "pig_center",
                "left": 810,
                "top": 100,
                "width": 300,
                "height": 100,
                "image": "1001_rand/straight.png"
            }, 328);
            nav.button({
                "type": "btn",
                "name": "pig_left",
                "left": 410,
                "top": 100,
                "width": 300,
                "height": 100,
                "image": "1001_rand/left.png"
            }, 328);
            nav.button({
                "type": "btn",
                "name": "pig_right",
                "left": 1210,
                "top": 100,
                "width": 300,
                "height": 100,
                "image": "1001_rand/right.png"
            }, 328);
            break;
        case "pig_center":
            nav.killbutton("pig_right");
            nav.killbutton("pig_left");
            nav.killbutton("pig_center");
            nav.killbutton("pigkinsey");
            zcl.pucker(590, 900, .25, "back", true);
            room328.btnclick("pigkinsey");
            if (g.map.kinsey === 0) {
                if (g.map.pig[0] === null) {
                    nav.button({
                        "type": "img",
                        "name": "pigkinsey",
                        "left": 150,
                        "top": 610,
                        "width": 300,
                        "height": 470,
                        "image": "328_farm/pig_kinsey.webp"
                    }, 328);
                }
                else {
                    zcl.kill();
                    nav.killbutton("pigkinsey");
                    nav.button({
                        "type": "img",
                        "name": "pigkinsey",
                        "left": 650,
                        "top": 567,
                        "width": 702,
                        "height": 513,
                        "image": "328_farm/pig_kinsey_bump.webp"
                    }, 328);
                    nav.next("pig_bump");
                }
            }
            if (g.map.pig[1] === null) {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pigPen");
                }, 2000);
            }
            else if (g.map.pig[1] === "puddle") {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pig_splash");
                }, 2000);
            }
            else {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pig_face");
                }, 2000);
            }
            break;
        case "pig_left":
            nav.killbutton("pig_right");
            nav.killbutton("pig_left");
            nav.killbutton("pig_center");
            nav.killbutton("pigkinsey");
            zcl.pucker(590, 400, .25, "back", true);
            room328.btnclick("pigkinsey");
            if (g.map.kinsey === 0) {
                zcl.kill();
                nav.killbutton("pigkinsey");
                nav.button({
                    "type": "img",
                    "name": "pigkinsey",
                    "left": 150,
                    "top": 567,
                    "width": 702,
                    "height": 513,
                    "image": "328_farm/pig_kinsey_bump.webp"
                }, 328);
                nav.next("pig_bump");
            }
            if (g.map.pig[0] === null) {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pigPen");
                }, 2000);
            }
            else if (g.map.pig[0] === "puddle") {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pig_splash");
                }, 2000);
            }
            else {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pig_face");
                }, 2000);
            }
            break;
        case "pig_right":
            nav.killbutton("pig_right");
            nav.killbutton("pig_left");
            nav.killbutton("pig_center");
            nav.killbutton("pigkinsey");
            zcl.pucker(590, 1500, .25, "back", true);
            room328.btnclick("pigkinsey"); 
            if (g.map.kinsey === 0) {
                if (g.map.pig[0] === null) {
                    nav.button({
                        "type": "img",
                        "name": "pigkinsey",
                        "left": 150,
                        "top": 610,
                        "width": 300,
                        "height": 470,
                        "image": "328_farm/pig_kinsey.webp"
                    }, 328);
                }
                else if (g.map.pig[1] === null) {
                    nav.button({
                        "type": "img",
                        "name": "pigkinsey",
                        "left": 613,
                        "top": 610,
                        "width": 300,
                        "height": 470,
                        "image": "328_farm/pig_kinsey.webp"
                    }, 328);
                }
                else if (g.map.pig[2] === null) {
                    zcl.kill();
                    nav.killbutton("pigkinsey");
                    nav.button({
                        "type": "img",
                        "name": "pigkinsey",
                        "left": 150,
                        "top": 567,
                        "width": 702,
                        "height": 513,
                        "image": "328_farm/pig_kinsey_bump.webp"
                    }, 328);
                    nav.next("pig_bump");
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "pigkinsey",
                        "left": 613,
                        "top": 610,
                        "width": 300,
                        "height": 470,
                        "image": "328_farm/pig_kinsey.webp"
                    }, 328);
                }
            }
            if (g.map.pig[2] === null) {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pigPen");
                }, 2000);

            }
            else if (g.map.pig[2] === "puddle") {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pig_splash");
                }, 2000);
            }
            else {
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pig_face");
                }, 2000);
            }
            break;
        case "pig_bump":
            g.map.kinsey = 1;
            room328.btnclick("pig_fuck0");
            break;
        case "pig_splash":
            nav.kill();
            nav.bg("328_farm/pig_splatbg.webp");
            zcl.pucker(400, 800, .2, "back", false);
            nav.button({
                "type": "img",
                "name": "pigkinsey",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_splatfg.webp"
            }, 328);
            nav.button({
                "type": "btn",
                "name": "pig_struggle",
                "left": 810,
                "top": 850,
                "width": 300,
                "height": 100,
                "image": "1001_rand/struggle.png"
            }, 328);
            break;
        case "pig_struggle":
            nav.killbutton("pig_struggle");
            gv.mod("energy", -30);
            if (gv.get("energy") < 1) {
                nav.kill();
                nav.bg("328_farm/pig_fuckbg0.webp");
                zcl.pucker(400, 800, .2, "back", false);
                nav.button({
                    "type": "img",
                    "name": "pig_struggle",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "328_farm/pig_fuckfg0.webp"
                }, 328);
                nav.drawButton("1001_rand/cry.png", "pig_fuck0");
            }
            else {
                g.popUpNotice("You freed yourself and used 30 points of energy!");
                g.roomTimeout = setTimeout(function () {
                    room328.btnclick("pigPen");
                }, 2000);
            }
            break;
        case "pig_face":
            nav.kill();
            if (g.map.kinsey < 1)
                g.map.kinsey = 1;
            nav.bg("328_farm/pig_face.webp");
            nav.drawButton("1001_rand/cry.png", "pig_face1");
            break;
        case "pig_face1":
            nav.kill();
            nav.bg("328_farm/pig_face1.webp");
            chat(950, 328);
            break;
        case "pig_fuck0":
            nav.kill();
            room328.btnclick("pigkinsey");
            if (g.rand(0, 2) === 0) {
                nav.button({
                    "type": "img",
                    "name": "pig_struggle",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "328_farm/pig_fuck_0.webp"
                }, 328);
                nav.drawButton("1001_rand/cry.png", "pig_fuck1");
            }
            else {
                room328.btnclick("pig_fuck3"); 
            }
            break;
        case "pig_fuck1":
            nav.killbutton("pig_fuck1");
            nav.modbutton("pig_struggle", "328_farm/pig_fuck_1.webp", null, null);
            nav.drawButton("1001_rand/cry.png", "pig_fuck2");
            break;
        case "pig_fuck2":
            nav.killbutton("pig_fuck2");
            nav.modbutton("pig_struggle", "328_farm/pig_fuck_2.webp", null, null);
            nav.drawButton("1001_rand/cry.png", "pig_fuck3");
            break;
        case "pig_fuck3":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "pig",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_bg.webp"
            }, 328);
            zcl.double(300, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_fg.webp"
            }, 328);
            nav.drawButton("1001_rand/cry.png", "pig_fuck4");
            break;
        case "pig_fuck4":
            nav.killbutton("pig_fuck4");
            switch (g.rand(0, 3)) {
                case 0:
                    nav.button({
                        "type": "img",
                        "name": "pig_f_oral_pre",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "328_farm/pig_f_oral_pre0.webp"
                    }, 328);
                    chat(118, 328);
                    break;
                case 1:
                    room328.btnclick("pig_double_0");
                    break;
                case 2:
                    room328.btnclick("pig_anal_0");
                    break;
            }
            break;
        case "pig_anal_0":
            chat(947, 328);
            break;
        case "pig_double_0":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "pigbg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_bg.webp"
            }, 328);
            nav.button({
                "type": "img",
                "name": "pigbg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_oral_bg.webp"
            }, 328);
            zcl.double(300, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_fg.webp"
            }, 328);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_oral_fg.webp"
            }, 328);
            nav.takeit("pig_double_1");
            break;
        case "pig_double_1":
            nav.killbutton("pigfg");
            nav.killbutton("pig_double_1");
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_double_fgcum.webp"
            }, 328);
            levels.anal(3, false, "m", true, "!pig", "pig");
            levels.oral(3, "m", "!pig", true, "pig");
            nav.next("pig_double_2");
            break;
        case "pig_double_2":
            nav.killbutton("pig_double_2");
            chat(120, 328);
            break;
        case "pigkinsey":
            if (g.map.kinsey === 0)
                return;
            if (g.map.kinsey === 1) {
                nav.button({
                    "type": "img",
                    "name": "pigkinsey",
                    "left": 776,
                    "top": 377,
                    "width": 115,
                    "height": 196,
                    "image": "328_farm/pig_k_1.webp"
                }, 328);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "pigkinsey",
                    "left": 679,
                    "top": 299,
                    "width": 189,
                    "height": 104,
                    "image": "328_farm/pig_k_" + (g.map.kinsey > 4 ? 4 : g.map.kinsey) + ".webp"
                }, 328);
            }
            break;
        case "pig_finish0":
            nav.button({
                "type": "img",
                "name": "pigkinsey",
                "left": 1260,
                "top": 0,
                "width": 660,
                "height": 1080,
                "image": "328_farm/pig_finish0.webp"
            }, 328);
            break;
        case "icon_barn":
            char.room(329);
            break;
        default:
            break;
    }
};

room328.chatcatch = function (callback) {
    switch (callback) {
        case "feed1":
        case "feed0":
        case "milk5":
        case "milk6":
        case "punish0_1":
        case "punish0_2":
        case "punish0_3":
        case "punish0_4":
        case "punish0_7":
        case "punish0_8":
        case "sleep_visit1":
        case "sleep0":
        case "sleep_visit13":
        case "sleep_visit14":
        case "sleep_visit16":
        case "sleep_visit17":
        case "sleep_visit18":
        case "sleep_visit19":
            nav.bg("328_farm/" + callback + ".webp");
            break;
        case "punish0_6":
        case "sleep_visit0":
        case "sleep_visit12":
        case "pig1":
            nav.kill();
            nav.bg("328_farm/" + callback + ".webp");
            break;
        case "envyshok":
            nav.killbutton("envy");
            room328.chatcatch("shock");
            break;
        case "shock":
            zcl.kill();
            gv.mod("energy", -50);
            g.popUpNotice("Trust has gone down");
            g.map.trust -= 2;
            g.map.anger += 80;
            room328.btnclick("progressbar");
            nav.button({
                "type": "img",
                "name": "shock",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/elec.webp"
            }, 328);
            break;
        case "shock1":
            char.addtime(10);
            nav.killbutton("shock");
            nav.button({
                "type": "img",
                "name": "shock",
                "left": 714,
                "top": 127,
                "width": 386,
                "height": 953,
                "image": "328_farm/elec_m.webp"
            }, 328);
            break;
        case "finisheating":
            if (g.gethourdecimal() > 12) 
                g.map.event = "bed";
            else
                g.map.event = "meadow";
            char.room(328);
            break;
        case "milk0":
            if (gv.get("milk") === -1) {
                nav.kill();
                nav.bg("327_milking/milk3.jpg");
                chat(7, 328);
            }
            else {
                char.room(327);
            }
            break;
        case "kinseymad":
            nav.modbutton("kinsey", "328_farm/kinseyc_mad.webp", null, null);
            break;
        case "kinseynormal":
            nav.modbutton("kinsey", "328_farm/kinseyc_normal.webp", null, null);
            break;
        case "envy1":
            nav.killbutton("envy");
            nav.button({
                "type": "img",
                "name": "envy",
                "left": 857,
                "top": 416,
                "width": 936,
                "height": 421,
                "image": "328_farm/envy_cumdrink.webp"
            }, 328);
            zcl.amazon(300, 600, .6, "", false);
            break;
        case "envy2":
            zcl.kill();
            gv.clearButtCum();
            levels.gotbj("f", "envy");
            nav.killbutton("envy");
            nav.button({
                "type": "img",
                "name": "envy",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/envyc_cumchin.webp"
            }, 328);
            break;
        case "envybreed":
            nav.modbutton("envy", "328_farm/envyc_pussy.webp", null, null);
            break;
        case "moo1":
            zcl.kill();
            nav.killbutton("moo");
            nav.button({
                "type": "img",
                "name": "moo",
                "left": 693,
                "top": 132,
                "width": 652,
                "height": 893,
                "image": "328_farm/moo1.webp"
            }, 328);
            zcl.pucker(600, 800, .25, "back", false);
            break;
        case "moo2":
            nav.killbutton("moo");
            zcl.double(0, 800, 1.4, "", false);
            nav.button({
                "type": "img",
                "name": "moo",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/moo2.webp"
            }, 328);
            break;
        case "moo3":
            zcl.kill();
            nav.killbutton("moo");
            nav.button({
                "type": "img",
                "name": "moo",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/duo13/phase5_1.webp"
            }, 328);
            break;
        case "moo4":
            nav.kill();
            nav.bg("328_farm/moo4bg.webp");
            zcl.double(400, 300, .6, "open", true);
            nav.button({
                "type": "img",
                "name": "moo",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/moo4fb.webp"
            }, 328);
            nav.next("moo4");
            break;
        case "moo5":
            nav.modbutton("moo", "328_farm/moo5fb.webp", null, null);
            break;
        case "moo6":
            levels.anal(3, true, "m", true, "!rancher1");
            levels.oral(3, "m", "!rancher", true);
            char.addtime(120);
            nav.modbutton("moo", "328_farm/moo6fb.webp", null, null);
            break;
        case "moo7":
            nav.modbutton("moo", "328_farm/moo4fb.webp", null, null);
            break;
        case "frolic_anal":
            nav.kill();
            nav.bg("328_farm/frolic_anal.webp");
            levels.oralass("f", "!hucow");
            break;
        case "frolic_r2_penis":
            nav.button({
                "type": "img",
                "name": "frolic_r2_overlay",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/frolic_r2_penis.webp"
            }, 328);
            break;
        case "frolic_r2_pee":
            if (gv.get("bladder") > 0) {
                nav.modbutton("frolic_r2_overlay", "328_farm/frolic_r2_pee.webp", null, null);
                gv.set("bladder", 0);
            }
            else {
                chat(50, 328);
            }
            break;
        case "frolic_r2_cum":
            levels.gotbj("f", "!hucow");
            nav.modbutton("frolic_r2_overlay", "328_farm/frolic_r2_cum.webp", null, null);
            break;
        case "punish0_5":
            nav.bg("328_farm/punish0_5.webp");
            zcl.double(650, 1150, .12, "", false);
            nav.button({
                "type": "img",
                "name": "frolic_r2_overlay",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/punish0_5fg.webp"
            }, 328);
            break;
        case "endKinsey":
            g.map.punish = "kinsey";
            g.map.event = "bed";
            g.map.anger = 0;
            char.room(328);
            break;
        case "endpigpen":
            g.map.punish = "pigpen";
            g.map.event = "bed";
            g.map.anger = 0;
            char.room(328);
            break;
        case "icon_bedturn":
            room328.btnclick("icon_bedturn");
            break;
        case "sleep_visit2":
            nav.bg("328_farm/sleep0_open.webp");
            zcl.bj(100, 800, .8, "", false);
            nav.button({
                "type": "img",
                "name": "sleep_visit",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/sleep_visit2.webp"
            }, 328);
            break;
        case "sleep_visit3":
            nav.kill();
            zcl.bj(100, 620, .8, "bj", false);
            nav.button({
                "type": "img",
                "name": "sleep_visit",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/sleep_visit3.webp"
            }, 328);
            if (sc.getMissionTask("security", "ranch", 1).notStarted) {
                chat(86, 328);
            }
            else {
                chat(97, 328);
            }
            break;
        case "sleep_visit4":
            nav.kill();
            zcl.bj(100, 620, .8, "w", false);
            sc.completeMissionTask("security", "ranch", 1);
            nav.button({
                "type": "img",
                "name": "sleep_visit",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/sleep_visit3.webp"
            }, 328);
            sc.modLevel("security", 76, 10);
            levels.oral(2, "m", "security", true);
            break;
        case "sleep_visit15":
            levels.gavehandjob("m", "security");
            sc.modLevel("security", 100, 10);
            sc.completeMissionTask("security", "ranch", 3);
            nav.bg("328_farm/" + callback + ".webp");
            break;
        case "securityLevelUp":
            levels.mod("charisma", 20);
            sc.modLevel("security", 76, 10);
            break;
        case "wash":
            nav.kill();
            cl.clean();
            nav.bg("328_farm/wash.webp");
            zcl.facedown(300, 900, .4, "", false);
            nav.button({
                "type": "img",
                "name": "sleep_visit",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/washfg.webp"
            }, 328);
            break;
        case "sleep_visit10":
            nav.button({
                "type": "img",
                "name": "sleep_visitpop",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/sleep_visit10.webp"
            }, 328);
            sc.completeMissionTask("security", "ranch", 2);
            break;
        case "sleep_visit11":
            sc.modLevel("security", 76, 10);
            levels.oral(2, "m", "security", true);
            nav.modbutton("sleep_visitpop", "328_farm/sleep_visit11.webp", null, null);
            break;
        case "pigexplain":
            nav.kill();
            
            nav.bg("328_farm/pig_bg0.webp");
            zcl.pucker(590, 900, .25, "back", true);
            nav.killbutton("pigkinsey");
            nav.button({
                "type": "img",
                "name": "pigkinsey",
                "left": 613,
                "top": 610,
                "width": 300,
                "height": 470,
                "image": "328_farm/pig_kinsey.webp"
            }, 328);
            break;
        case "startpigrun":
            g.map.kinsey = 0;
            g.map.temp = -1;
            room328.btnclick("pigPen");
            break;
        case "pigbj":
            nav.kill();
            nav.bg("328_farm/pig_bg1.webp");
            nav.button({
                "type": "img",
                "name": "pig",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_oral_bg.webp"
            }, 328);
            zcl.double(300, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_oral_fg.webp"
            }, 328);
            break;
        case "pigbj2":
            gv.mod("energy", -20);
            levels.oral(3, "m", "!pig", true, "pig");
            nav.modbutton("pigfg", "328_farm/pig_f_oral_fgcum.webp");
            break;
        case "pigPen":
            room328.btnclick("pigPen");
            break;
        case "pig_f_oral_pre1":
            nav.killbutton("pig_f_oral_pre");
            nav.killbutton("pigfg");
            zcl.double(300, 500, .6, "", false);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_fg.webp"
            }, 328);
            nav.button({
                "type": "img",
                "name": "pig_f_oral_pre",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_oral_pre1.webp"
            }, 328);
            levels.mod("beast", 15);
            levels.mod("xdress", 15);
            break;
        case "pig_double_0":
            room328.btnclick("pig_double_0");
            break;
        case "pig_anal_0":
            nav.killbutton("pigfg");
            zcl.double(300, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_fgcum.webp"
            }, 328);
            nav.next("pigPen");
            break;
        case "addtrust":
            if (g.map.trust < 50)
                g.map.trust += 4
            else
                g.map.trust += 2;
            g.popUpNotice(sc.n("rachel") + " trusts you more.");
            break;
        case "drink1":
            room328.chatcatch("addtrust");
            levels.piss(true, false, false, "m", "!rancher");
            break;
        case "drink2":
            nav.kill();
            if (levels.get("beast").l < 5) {
                levels.mod("beast", 15);
                chat(143, 328);
            }
            else {
                zcl.pucker(260, 1100, .2, "", false);
                chat(133, 328);
            }
            break;
        case "drink2_1":
            nav.kill();
            nav.bg("328_farm/drink2_1.webp");
            nav.button({
                "type": "img",
                "name": "pig",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_bg.webp"
            }, 328);
            zcl.double(300, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_fg.webp"
            }, 328);
            break;
        case "drink2_2":
            nav.killbutton("pigfg");
            zcl.double(300, 500, .6, "open", false);
            nav.button({
                "type": "img",
                "name": "pigfg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/pig_f_anal_fgcum.webp"
            }, 328);
            levels.anal(3, false, "m", true, "!pig", "pig");
            break;
        case "drink2_3":
            nav.kill();
            zcl.bellydown(50, 500, .7, "", false);
            break;
        case "drink3":
            nav.kill();
            zcl.embarrass(-100, 0, 1.25, "back", true);
            break;
        case "reset":
            char.room(328);
            break;
        default:
            break;
    }
};

room328.chat = function (chatID) {
    if (chatID === 1000) {
        gv.set("milk", .1);
        char.addtime(30);
        nav.bg("327_milking/milk4.jpg");
        if (cl.c.chest < 3) {
            return {
                chatID: 1000,
                speaker: "me",
                text: "Take a look at these breasts. These here are milking breasts. Grade A milk! The best in " +
                    "the country. Now look at your tiny pathetic udders. There's no way those things will " +
                    "create enough milk worth drinking. Don't worry our food pellets are stuffed with enough " +
                    "hormones to turn a bull into a heifer. You just keep eating your feed and I'll turn " +
                    "you into a first class hucow. Now bend over the table, show me your ass. ",
                button: [
                    { chatID: 8, text: "*whimper*", callback: "milk5" }
                ]
            }
        }
        return {
            chatID: 1000,
            speaker: "me",
            text: "Take a look at these breasts. These here are milking breasts. Grade A milk! The best in " +
                "the country. Now you have some great udders. Really hucow material. That's why I kept you. " +
                "But you need to start producing milk for me. Now bend over the table, show me your ass. ",
            button: [
                { chatID: 8, text: "*whimper*", callback: "milk5" }
            ]
        }
    }
    if (chatID === 950) {
        let pigdickc = [
            "His dick is going stright for my face! ",
            "Oooff! It's so dirty and twisty! ",
            "No! Please don't put that in my mouth! ",
            "I'm about to get a mouthful of pig dick!",
            "It's so long! It's going to go deep down my throat! ",
            "Oh no! Don't put that in my mouth! "
        ];
        return {
            chatID: 950,
            speaker: "me",
            text: pigdickc[g.rand(0, pigdickc.length)],
            button: [
                { chatID: 949, text: "*whimper*", callback: "pigbj" }
            ]
        }
    }
    if (chatID === 949) {
        let pigdickc1 = [
            "*ugh* I can feel it twisting down my throat ",
            "It's so long and squishy! ",
            "This smells so bad and tastes even worse! ",
            "I can't believe I'm suck off a pig's dick!",
            "It's so deep down my throat! I can feel it twisting in and out! ",
            "His dick is so twisty it's beating my tonsils like a punching bag. ",
            "So twisty and soft! ",
            "Fuck! This pig is raping my face in front of everyone! How humiliating! "
        ];
        return {
            chatID: 949,
            speaker: "me",
            text: pigdickc1[g.rand(0, pigdickc1.length)],
            button: [
                { chatID: 948, text: "*gluck* *gluck* ", callback: "pigbj2" }
            ]
        }
    }
    if (chatID === 948) {
        let pigdickc2 = [
            "I can feel it's dick twitch all the way down in my belly ",
            "I can't even stop it. It went straight to my belly ",
            "*ugh* So full of pig cum",
            "I'm a pig cum dumster",
            "So long and slimey",
            "So disrespectful! Just cumming in me without asking!  ",
            "I'm a pig cum dump now",
        ];
        return {
            chatID: 949,
            speaker: "me",
            text: pigdickc2[g.rand(0, pigdickc2.length)],
            button: [
                { chatID: -1, text: "...", callback: "pigPen" }
            ]
        }
    }
    if (chatID === 947) {
        let pigdickc3 = [
            "I can feel it's dick twitch all the way in my intestines ",
            "I've never had a dick go so deep in me!",
            "So slimy in my rectum.",
            "Ooooff. He's so heavy... and stinky",
            "So long and slimey",
            "Fuck that's weird feeling his piggy dick squirming inside me.",
            "I'm such a piggy bitch.",
        ];
        return {
            chatID: 949,
            speaker: "me",
            text: pigdickc3[g.rand(0, pigdickc3.length)],
            button: [
                { chatID: -1, text: "...", callback: "pig_anal_0" }
            ]
        }
    }
    if (chatID === 946) {
        let pigdickc46 = [
            "Great. I'm going to be queefing pig semen all night now. ",
            "So glad that's over. ",
            "Every time I fart piggy cum squirts out. ",
            "How much cum does a pig have in it's balls anyway!",
            "I can still taste pig dick. ",
            "Why do they always cheer when I get pig dick up the ass?",
            "My uterus hurts so much from those pigs dick trying to ram it inside my hole. ",
        ];
        return {
            chatID: 949,
            speaker: "kinsey",
            text: pigdickc46[g.rand(0, pigdickc46.length)],
            button: [
                { chatID: 121, text: "...", callback: "pig_finish0" }
            ]
        }
    }
    else if (chatID === 800) {
        //envy recycle
        let envychat = [
            "I so much love it here!!",
            "I hope I get gangbanged tonight!!!",
            "God I need dick!",
            "Do you think they'll piss in my mouth tonight?",
            "Ever been with a horse? It so much better than you think!",
            "I NEED CUM!!",
            "I like to save the cream pies in my ass for when I get to my room at night. I fart them on my pillow and lick it up as an eveining snack.",
            "Do you think Kinsey will let me eat her creampies?",
            "If you get creampied save it for me! I love dirty ass cum!",
            "I heard pigs are very human like. If a pig cums in me do I get pregnant with just one piglet, or will it be a lot like a girl pig? ",
            "My breasts are always so full of milk. I get a little orgasm when I get milked. So good."
        ];
        return {
            chatID: 800,
            speaker: "envy",
            text: envychat[g.rand(0, envychat.length)],
            button: [
                { chatID: 22, text: "So, uhhh. Do you want to have sex with me? ", callback: "envybreed" },
                { chatID: -1, text: "You're always so insightful", callback: "reset" },
            ]
        }
    }
    else if (chatID === 700) {
        let kinseychat = [
            "I hate these fuckers so much!",
            "Drake is such an asshole. I want to castrate him!",
            "My tits are so sore all the time. A woman wasn't meant to be milked like this. ",
            "My nipples are so sensative. Fuck!",
            "We need a way to break out of here. ",
            "I'm so tired of pissing in the field. ",
            "I wish these ranchers would learn to just jack off and stop fucking me all the time. ",
            "Every time I fart I can feel their disgusting cum leak out of my ass. ",
            "When I sleep all I can smell is the cum leaking out of my holes. ",
            "Don't piss them off. You don't want to see them mad. ",
            "Don't make them angry. You don't want to visit the pig pen. ",
            "Just be good and lay low. We'll get out of this. "
        ];
        return {
            chatID: 700,
            speaker: "kinsey",
            text: kinseychat[g.rand(0, kinseychat.length)],
            button: [
                { chatID: -1, text: "... ", callback: "reset" },
            ]
        }
    }
    else if (chatID === 600) {
        let seclevel600 = sc.getLevel("security");
        let c600 = [
            "You know, I love your pretty green eyes. ",
            "A man of power like yourself must get all the ladies. ",
            "That black suit really looks good on you.",
            "The way you wear your power is so sexy. ",
            "I guess the CUM cult only puts their best to guard us li'l hucows",
            "We're so lucky to have such a big strong man to protect us poor li'l hucows. ",
            "You look like a man that knows how to breed us hucows just right. ",
            "Your manly shoulders turn me on. ",
            "Any hucow would be lucky to have a bull like you. ",
            "That suit would look better on my floor. ",
        ];
        if (seclevel600 < 4) {
            return {
                chatID: 600,
                speaker: "me",
                text: c600[g.rand(0, c600.length)],
                button: [
                    { chatID: 78, text: "... ", callback: "securityLevelUp" },
                ]
            }
        }
        else if (seclevel600 < 6) {
            return {
                chatID: 600,
                speaker: "me",
                text: c600[g.rand(0, c600.length)],
                button: [
                    { chatID: 79, text: "... ", callback: "securityLevelUp" },
                ]
            }
        }
        else if (sc.getMissionTask("security", "ranch", 1).notStarted) {
            return {
                chatID: 600,
                speaker: "me",
                text: c600[g.rand(0, c600.length)],
                button: [
                    { chatID: 80, text: "... ", callback: "securityLevelUp" },
                ]
            }
        }
        return {
            chatID: 600,
            speaker: "me",
            text: c600[g.rand(0, c600.length)],
            button: [
                { chatID: 84, text: "... ", callback: "sleep_visit1" },
            ]
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "Ugh. My knees are so sore.",
                button: [
                    { chatID: 1, text: "...", callback: "shock" }
                ]
            },
            {
                chatID: 1,
                speaker: "!rancher",
                text: "HEY!!!  ",
                button: [
                    { chatID: 2, text: "EEe e e e eeeee ee eeee", callback: "shock1" }
                ]
            },
            {
                chatID: 2,
                speaker: "!rancher",
                text: "Livestock don't walk on 2 feet! Dumb ass cow. ",
                button: [
                    { chatID: -1, text: "*groan*", callback: "reset" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "*blech* What the hell is this! It looks like cardboard and smells stale! Do they really " +
                    "expect me to eat this crap!",
                button: [
                    { chatID: 4, text: "...", callback: "feed1" }
                ]
            },
            {
                chatID: 4,
                speaker: "!rancher1",
                text: "You better eat up. There's all the nutrients a hucow needs for their milking. ",
                button: [
                    { chatID: 5, text: "[Eat up]", callback: "feed0" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "YUCK!! It tastes as bad as it smells. I think I'm going to barf. ",
                button: [
                    { chatID: -1, text: "[Finish eating]", callback: "finisheating" }
                ]
            },
            {
                chatID: 6,
                speaker: "rachel",
                text: "Ok cows! Time for your milking!!!",
                button: [
                    { chatID: -1, text: "[Get milked]", callback: "milk0" }
                ]
            },
            {
                chatID: 7,
                speaker: "rachel",
                text: "Welcome back to my examination room. Don't try anything or I'll lock you in the pig pen " +
                    "and all you'll have to eat is slop and pig cum. Moo for me if you understand that being " +
                    "a hucow is much better than being a piggy. ",
                button: [
                    { chatID: 1000, text: "mooo", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "rachel",
                text: "Now, normally I give these in pill form, but I don't trust ya to swallow so you get " +
                    "the needle in the rump, just like my cows. Hahahaha. This will really get that milk flowing! ",
                button: [
                    { chatID: 9, text: "OUCHHHHH!!! Damn!!!", callback: "milk6" }
                ]
            },
            {
                chatID: 9,
                speaker: "rachel",
                text: "Now I'm going to put you back out to the pasture, but tomorrow get ready for a milkin' " +
                    "darlin'. Now get. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "Gross. I'm not eating that garbage! ",
                button: [
                    { chatID: -1, text: "...", callback: "finisheating" }
                ]
            },
            {
                chatID: 11,
                speaker: "!rancher1",
                text: "Get up hucows need to be in the field now. ",
                button: [
                    { chatID: -1, text: "ugh", callback: "reset" }
                ]
            },
            {
                chatID: 12,
                speaker: "kinsey",
                text: "Oh my god! I thought that was you!!! What the hell are you doing here? ",
                button: [
                    { chatID: 13, text: "[Tell her what happened]", callback: "kinseymad" }
                ]
            },
            {
                chatID: 13,
                speaker: "kinsey",
                text: "Oh shit! You came here to try and save us, and now you're with us! Those fuckers! " +
                    "Shit we got to get a way out. The cops stopped by once and they put us all in the barn. " +
                    "I tried screaming for help, but they just tased and gagged me. I heard them say it was " +
                    "just a screaming goat. These cops are so worthless. ",
                button: [
                    { chatID: 14, text: "They really are", callback: "kinseynormal" }
                ]
            },
            {
                chatID: 14,
                speaker: "kinsey",
                text: "What ever you do don't make them mad. Just do what they say, no matter how terrible. " +
                    "I came in as a virgin and my pussy hole doesn't close up anymore. It's just permanently " +
                    "gaped open with all the terrible things they've stuffed in me. I tried to resist, but " +
                    "it's just much easier to to moo, eat, and get milked. Since you hooked me up, " +
                    "I'll try to repay the favor. I just don't know how. ",
                button: [
                    { chatID: 15, text: "Don't worry about it. ", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "kinsey",
                text: "It was huge. I just with it was cold. That energy drink was so warm when I pushed it " +
                    "out of my ass. But oh so good! Best day I had since I've been here. You're the best. ",
                button: [
                    { chatID: -1, text: "Aww you are. ", callback: "reset" }
                ]
            },
            {
                chatID: 16,
                speaker: "kinsey",
                text: "Hey new " + gender.pronoun("girl") + ". Got caught didn't you?",
                button: [
                    { chatID: 17, text: "Totally caught. [Tell her what happened]", callback: "kinseymad" }
                ]
            },
            {
                chatID: 17,
                speaker: "kinsey",
                text: "Oh shit! You came here to try and save us, and now you're with us! Those fuckers! " +
                    "Shit we got to get a way out. The cops stopped by once and they put us all in the barn. " +
                    "I tried screaming for help, but they just tased and gagged me. I heard them say it was " +
                    "just a screaming goat. These cops are so worthless. ",
                button: [
                    { chatID: 18 , text: "They really are", callback: "kinseynormal" }
                ]
            },
            {
                chatID: 18,
                speaker: "kinsey",
                text: "What ever you do don't make them mad. Just do what they say, no matter how terrible. " +
                    "I came in as a virgin and my pussy hole doesn't close up anymore. It's just permanently " +
                    "gaped open with all the terrible things they've stuffed in me. I tried to resist, but " +
                    "it's just much easier to to moo, eat, and get milked. Just keep you head down and " +
                    "and breasts full. ",
                button: [
                    { chatID: -1, text: "I will", callback: "reset" }
                ]
            },
            {
                chatID: 19,
                speaker: "envy",
                text: "*sniff* *sniff* I smell cum... hmmmm... Wait!!! Do you have a cream pie!!! You do! " +
                    "I can smell the creamy yummy cum from here!!! Let me eat your cream pie!!! I need cum!!!" +
                    "GIMMIE GIMMIE!!!!",
                button: [
                    { chatID: 20, text: "huh?", callback: "envy1" }
                ]
            },
            {
                chatID: 20,
                speaker: "envy",
                text: "I LOVE CUM!!! YUMMY YUMMY CUM!!!!!! ",
                button: [
                    { chatID: 21, text: "Oooohhhh yeahhh", callback: "envy2" }
                ]
            },
            {
                chatID: 21,
                speaker: "envy",
                text: "Thanks for the cum! hehe! ",
                button: [
                    { chatID: -1, text: "*sigh* I was saving that for me. ", callback: "reset" }
                ]
            },
            {
                chatID: 22,
                speaker: "envy",
                text: "PPllleeeaasseee!!! Fuck me in my breeding hole! ",
                button: [
                    { chatID: 23, text: "Fuck yeah!", callback: "envyshok" }
                ]
            },
            {
                chatID: 23,
                speaker: "!rancher",
                text: "HEY!!!  ",
                button: [
                    { chatID: 24, text: "EEe e e e eeeee ee eeee", callback: "shock1" }
                ]
            },
            {
                chatID: 24,
                speaker: "!rancher",
                text: "Only bulls get to mate with the heifers. Don't want shitty calves coming from " +
                    "such a fine heifer like her. ",
                button: [
                    { chatID: -1, text: "*groan*", callback: "reset" }
                ]
            },
            {
                chatID: 25,
                speaker: "thinking",
                text: "It does feel good to moo once in a while.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 26,
                speaker: "!rancher",
                text: "Who's that mooing?",
                button: [
                    { chatID: 27, text: "moo?", callback: "moo1" }
                ]
            },
            {
                chatID: 27,
                speaker: "!rancher",
                text: "This heifer here. Seems like she's ready to breed. Think we should breed her? ",
                button: [
                    { chatID: 28, text: "*gulp*", callback: "" }
                ]
            },
            {
                chatID: 28,
                speaker: "!rancher1",
                text: "I think it would be a damn shame if she didn't get bread. ",
                button: [
                    { chatID: 29, text: "...", callback: "moo2" }
                ]
            },
            {
                chatID: 29,
                speaker: "!rancher",
                text: "C'mon 'ere heifer. Open that mouth ",
                button: [
                    { chatID: 30, text: "...", callback: "moo3" }
                ]
            },
            {
                chatID: 30,
                speaker: "!rancher1",
                text: "I do love a fat hucow ass! Fuck that's good! ",
                button: [
                    { chatID: -1, text: "...", callback: "moo4" }
                ]
            },
            {
                chatID: 31,
                speaker: "kinsey",
                text: "Hey! Let her go! She's had enough! ",
                button: [
                    { chatID: 32, text: "*gluck* *gluck* ", callback: "" }
                ]
            },
            {
                chatID: 32,
                speaker: "!rancher1",
                text: "Shut up " + sc.n("kinsey") + " or you'll be cleaning cock. ",
                button: [
                    { chatID: 33, text: "*sissy moan* ", callback: "moo5" }
                ]
            },
            {
                chatID: 33,
                speaker: "!rancher1",
                text: "'sides " + gender.pronoun("she") + "'s loving this cock. Look at " + gender.pronoun("her") +
                    " comming all over! This heifer needs to be bred! ",
                button: [
                    { chatID: 34, text: "*uncontrollable moaning* ", callback: "moo6" }
                ]
            },
            {
                chatID: 34,
                speaker: "!rancher",
                text: "Fuck that's a good hucow! Swallow that load!! ",
                button: [
                    { chatID: 35, text: "*glug* *moan* *slurp* ", callback: "moo7" }
                ]
            },
            {
                chatID: 35,
                speaker: "kinsey",
                text: "Assholes...",
                button: [
                    { chatID: -1, text: "*cum gurgle*", callback: "reset" }
                ]
            },
            {
                chatID: 36,
                speaker: "!rancher",
                text: "Shut your hocow ass!",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 37,
                speaker: "kinsey",
                text: "That rape looked terrible! Those assholes think they can just fuck us when ever they " +
                    "like! I don't care if we do cum, it still doesn't mean it's right! I hate this place! ",
                button: [
                    { chatID: -1, text: "Thanks. It was so brutal. ", callback: "reset" }
                ]
            },
            {
                chatID: 38,
                speaker: "thinking",
                text: "I'm too tired to frolic ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 39,
                speaker: "me",
                text: "Moooo!!!!",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 40,
                speaker: "!hucow",
                text: "I was told not to talk to you. You're trouble",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "reset" }
                ]
            },
            {
                chatID: 41,
                speaker: "!hucow",
                text: "Moo! Feel free to say no, but I'm so horny right now. Could you be a dear and " +
                    "eat my butt while I finger my clit. I so need to orgasm? ",
                button: [
                    { chatID: 42, text: "Hell yeah!!", callback: "frolic_anal" },
                    { chatID: -1, text: "Some other time. ", callback: "reset" },
                ]
            },
            {
                chatID: 42,
                speaker: "!hucow",
                text: "moo moo moo MOO MOOOOOOOOO!!!!!! YEAHHHH!!!! Oh yeah!!! Thanks! ",
                button: [
                    { chatID: -1, text: "nom nom nom ", callback: "reset" },
                ]
            },
            {
                chatID: 43,
                speaker: "!hucow",
                text: "My mouth is so parched, and this grass is doing nothing! I just need a little  " +
                    "moisture. So thristy. ",
                button: [
                    { chatID: -1, text: "Sorry, can't help you.", callback: "reset" },
                    { chatID: 44, text: "I could pee in your mouth.", callback: "" },
                    { chatID: 47, text: "It's not much, but I could cum in your mouth", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "!hucow",
                text: "They don't let us stand up. Just stay on all fours and I'll put your penis in my mouth. 'k? ",
                button: [
                    { chatID: 45, text: "ok!", callback: "frolic_r2_penis" },
                ]
            },
            {
                chatID: 45,
                speaker: "me",
                text: "ok, here it comes!",
                button: [
                    { chatID: 46, text: "...", callback: "frolic_r2_pee" },
                ]
            },
            {
                chatID: 46,
                speaker: "!hucow",
                text: "nom nom nom!!! Thank you so much!!!",
                button: [
                    { chatID: -1, text: "You're welcome!", callback: "reset" },
                ]
            },
            {
                chatID: 47,
                speaker: "!hucow",
                text: "They don't let us stand up. Just stay on all fours and I'll put your penis in my mouth. 'k? ",
                button: [
                    { chatID: 48, text: "ok!", callback: "frolic_r2_penis" },
                ]
            },
            {
                chatID: 48,
                speaker: "!hucow",
                text: "MMMMmmm. You're penis is yummy!!",
                button: [
                    { chatID: 49, text: "...", callback: "frolic_r2_cum" },
                ]
            },
            {
                chatID: 49,
                speaker: "!hucow",
                text: "nom nom nom!!! Thank you so much!!!",
                button: [
                    { chatID: -1, text: "You're welcome!", callback: "reset" },
                ]
            },
            {
                chatID: 50,
                speaker: "me",
                text: "Oh. I guess I don't have to pee right now.",
                button: [
                    { chatID: 51, text: "...", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "!hucow",
                text: "Hrmf!! asshole!",
                button: [
                    { chatID: -1, text: "sorry", callback: "reset" },
                ]
            },
            {
                chatID: 52,
                speaker: "rachel",
                text: "If there's one thing I can't stand for, it's a hucow that want's to act up! Now I " +
                    "think " + sc.n("kinsey") + " here can help you control yourself, which is why every " +
                    "time you act up, she'll get her a punishment to help remind her to help you. Boys, " +
                    "make sure these two learn how to control themselves. ",
                button: [
                    { chatID: 53, text: "*whimper*", callback: "punish0_1" },
                ]
            },
            {
                chatID: 53,
                speaker: "!rancher",
                text: "I'm going to enjoy this. " + sc.n("kinsey") + " you ready for your learnin'?",
                button: [
                    { chatID: 54, text: "...", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "kinsey",
                text: "Fuck all of you! Assholes!",
                button: [
                    { chatID: 55, text: "...", callback: "" },
                ]
            },
            {
                chatID: 55,
                speaker: "!rancher",
                text: "Hahah, darlin' no. But we just may fuck your asshole. Now spread those legs or I'm " +
                    "gunna put a red hot branding iron up your asshole. ",
                button: [
                    { chatID: 56, text: "...", callback: "punish0_2" },
                ]
            },
            {
                chatID: 56,
                speaker: "!rancher",
                text: "Well well well. If it isn't your little friend, the cattle prod. I swear with as " +
                    "much as you act up, you must love him and his shocking personality. ",
                button: [
                    { chatID: 57, text: "...", callback: "punish0_3" },
                ]
            },
            {
                chatID: 57,
                speaker: "kinsey",
                text: "eeeeEEEeeeeeeaaaaAAAAAAAAAAAAAAAAAAAAAAA ",
                button: [
                    { chatID: 58, text: "...", callback: "punish0_4" },
                ]
            },
            {
                chatID: 58,
                speaker: "!rancher",
                text: "hehehe. So what should we shock next? Clit, nipples, or asshole? Maybe all three in " +
                    "that order? Or maybe the arm pits. You know that really hurts the most. Not as sexy as " +
                    "the others, but more painful. hehehe",
                button: [
                    { chatID: 59, text: "...", callback: "punish0_5" },
                ]
            },
            {
                chatID: 59,
                speaker: "!rancher",
                text: "Hey " + sc.n("!rancher1") + "! You wanna take a few of these? I'd hate to leave you out. ",
                button: [
                    { chatID: 60, text: "...", callback: "" },
                ]
            },
            {
                chatID: 60,
                speaker: "!rancher1",
                text: "Naw, man. Just trying to get my dick sucked then I'm going to call it a day. Gotta get " +
                    "home or the wife is going to be bitchin' at me, ya know. Just hurry up with what ever you're  " +
                    "going to do so we can put them in their cells and get home. ",
                button: [
                    { chatID: 61, text: "...", callback: "" },
                ]
            },
            {
                chatID: 61,
                speaker: "!rancher1",
                text: "Lame. I'm just gunna shove it up her ass then and shock her from the inside then.   ",
                button: [
                    { chatID: 62, text: "...", callback: "" },
                ]
            },
            {
                chatID: 62,
                speaker: "!rancher",
                text: "Whatever you gotta do, man. Just don't take all day. ",
                button: [
                    { chatID: 63, text: "...", callback: "punish0_6" },
                ]
            },
            {
                chatID: 63,
                speaker: "kinsey",
                text: "Oh god no! Not there! Please just rape my asshole or shock my nipples! Please not up " +
                    "there!!!",
                button: [
                    { chatID: 64, text: "...", callback: "punish0_7" },
                ]
            },
            {
                chatID: 64,
                speaker: "!rancher",
                text: "Hahahahaha!!! Don't worry, I'll rape your asshole tomorrow! ",
                button: [
                    { chatID: 65, text: "...", callback: "punish0_8" },
                ]
            },
            {
                chatID: 65,
                speaker: "kinsey",
                text: "*huff* You win. Please just stop. We'll be good.  ",
                button: [
                    { chatID: 66, text: "...", callback: "punish0_7" },
                ]
            },
            {
                chatID: 66,
                speaker: "!rancher",
                text: "Hahaha. I don't care! I love this shit!!",
                button: [
                    { chatID: 67, text: "...", callback: "punish0_8" },
                ]
            },
            {
                chatID: 67,
                speaker: "kinsey",
                text: "fuck you  ",
                button: [
                    { chatID: 68, text: "...", callback: "" },
                ]
            },
            {
                chatID: 68,
                speaker: "!rancher1",
                text: "Arrright. Throw them in the cell. I've got to get going.  ",
                button: [
                    { chatID: -1, text: "...", callback: "endKinsey" },
                ]
            },
            {
                chatID: 69,
                speaker: "me",
                text: "So... how's your butt?",
                button: [
                    { chatID: 70, text: "...", callback: "" },
                ]
            },
            {
                chatID: 70,
                speaker: "kinsey",
                text: "Those fuckers will never break me. But yeah. It fuckin' hurts to fart. Like nails " +
                    "grinding inside me. I'll never be their little moo cow bitch! They'll pay someday! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 71,
                speaker: "security",
                text: "Well, well, well. If it isn't the dirty horse fucker. ",
                button: [
                    { chatID: 72, text: "I only sucked his dick", callback: "" },
                ]
            },
            {
                chatID: 72,
                speaker: "security",
                text: "Hahah! Yeah, if not for me. Now keep it down so I can put the other hucows back " +
                    "in their cells horse fucker! ",
                button: [
                    { chatID: 77, text: "ok", callback: "sleep0" },
                ]
            },
            {
                chatID: 73,
                speaker: "security",
                text: "Welcome to your new home. Keep it down and we won't have any problems. ",
                button: [
                    { chatID: 77, text: "ok", callback: "sleep0" },
                ]
            },
            {
                chatID: 74,
                speaker: "security",
                text: "Keep is quiet you dirty horse fucker. ",
                button: [
                    { chatID: -1, text: "ok", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 75,
                speaker: "security",
                text: "Keep it quiet you. ",
                button: [
                    { chatID: -1, text: "ok", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 76,
                speaker: "security",
                text: "I said keep it down!",
                button: [
                    { chatID: 600, text: "[Compliment him]", callback: "" },
                    { chatID: -1, text: "Sorry, I'll keep it down", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 77,
                speaker: "thinking",
                text: "What a little prick. He seems like the kind of guy no one likes. I wonder if I can " +
                    "get him to trust me so I can get out of here. ",
                button: [
                    { chatID: -1, text: "...", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 78,
                speaker: "security",
                text: "Oh! yeah. I guess so. Well I've gotta watch the hucows. Try to keep it down.  ",
                button: [
                    { chatID: -1, text: "Mooo!", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 79,
                speaker: "security",
                text: "Hehehe. You know you're really cute for a hucow. Too bad I'm no longer allowed to " +
                    "to touch you girls. Just try to keep it down, 'k?", 
                button: [
                    { chatID: -1, text: "Mooo!", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 80,
                speaker: "security",
                text: "Do you really mean it? I mean all those things you've been saying?",
                button: [
                    { chatID: 82, text: "A man like you shouldn't question if a hucow like me doesn't think you're sexy. ", callback: "" },
                    { chatID: 81, text: "No. Just having some fun", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 81,
                speaker: "security",
                text: "Oh. hahaha. Thought so. Keep it down.",
                button: [
                    { chatID: -1, text: "Mooo!", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 82,
                speaker: "security",
                text: "You are so amazing. I want so much to go in there, but I got in trouble with that " +
                    "bitch, " + sc.n("rachel") + ". She doesn't understand that hucows aren't real people " +
                    "and are made to be bred and used. The C.U.M. Cult teaches us that a man's role is to " +
                    "cum into inferior bodies like yours. " +
                    "Each day I look forward to seeing your hot naked body. You are " +
                    "the sexiest hucow here. There's nothing more I want than to mount you like a bull and " +
                    "breed you. ",
                button: [
                    { chatID: 83, text: "What's stopping you? " + sc.n("rachel") + " doesn't need to know. ", callback: "" },
                ]
            },
            {
                chatID: 83,
                speaker: "security",
                text: "Our secret? ",
                button: [
                    { chatID: 84, text: "Our secret.", callback: "sleep_visit1" },
                ]
            },
            {
                chatID: 84,
                speaker: "security",
                text: "I am going to break your throat wide open with this big ol' dick! I want you to " +
                    "impale your face! I've been staring at you lips for so long picturing my cock sliding in and out of " +
                    "those lips... MMmmmm hhmmmm. Tell me how much you want it. Tell me you want my dick in your mouth. ",
                button: [
                    { chatID: 85, text: "Please let me suck you dick! Pleeeseeeee", callback: "sleep_visit2" },
                ]
            },
            {
                chatID: 85,
                speaker: "security",
                text: "Oh yeah! This is going to feel so good! ",
                button: [
                    { chatID: -1, text: "MmmmMm", callback: "sleep_visit3" },
                ]
            },
            {
                chatID: 86,
                speaker: "security",
                text: "OH yeah! You do know how to suck a dick! ",
                button: [
                    //{ chatID: 92, text: "[Insert a finger into his rectum]", callback: "sleep_visit10" },
                    { chatID: 87, text: "[Wrap your lips around his tiny veiny cock]", callback: "sleep_visit4" },
                ]
            },
            {
                chatID: 87,
                speaker: "security",
                text: "OOhh yeah! Serve your purpose and guzzle that cum!!! You'd make a great slave! ",
                button: [
                    { chatID: 88, text: "Mmmmm Yummy!", callback: "sleep_visit0" },
                ]
            },
            {
                chatID: 88,
                speaker: "security",
                text: "This is just between us. Also keep it down slave. ",
                button: [
                    { chatID: -1, text: "ok", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 89,
                speaker: "security",
                text: "I'm telling " + sc.n("rachel") + "! Keep it down",
                button: [
                    { chatID: -1, text: "ok", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 90,
                speaker: "!rancher1",
                text: "You smell like a mix of piss and steer shit. Get on the side of barn so I can hose " +
                    "you off 'fore I throw up. GIT!",
                button: [
                    { chatID: 91, text: "mooo", callback: "wash" },
                ]
            },
            {
                chatID: 91,
                speaker: "!rancher1",
                text: "Nasty lazy ass cow. ",
                button: [
                    { chatID: -1, text: "ooOOooo so cold!!", callback: "reset" },
                ]
            },
            {
                chatID: 92,
                speaker: "thinking",
                text: "Oh wow. His sissy button is rock hard and so smooth. hehehe. It's kind of fun playing with  " +
                    "it. ",
                button: [
                    { chatID: 93, text: "*nom nom nom*", callback: "sleep_visit11" },
                ]
            },
            {
                chatID: 93,
                speaker: "security",
                text: "GGGFEEEGEEEGGkKKKKkkkkk aaaaAAAAaaa",
                button: [
                    { chatID: 94, text: "*gulp*", callback: "sleep_visit12" },
                ]
            },
            {
                chatID: 94,
                speaker: "security",
                text: "OOooooo that was the best orgasm of my entire life! Wow! What? My legs and body are so " +
                    "shaky. Like a full body orgasm! Ohhhhh wow! ",
                button: [
                    { chatID: 95, text: "...", callback: "" },
                ]
            },
            {
                chatID: 95,
                speaker: "security",
                text: "...wow... ",
                button: [
                    { chatID: 96, text: "So, did you like it? ", callback: "" },
                ]
            },
            {
                chatID: 96,
                speaker: "security",
                text: "That was the most amazing orgasm I've ever had. I loved it. I'm going to be thinking " +
                    "about you the rest of my shift here. Crap! I have to close the gate! Sorry, gotta run " +
                    "before I get in trouble again. I'll be thinking about you! ",
                button: [
                    { chatID: -1, text: "Bye baby", callback: "reset" },
                ]
            },
            {
                chatID: 97,
                speaker: "security",
                text: "OH yeah! You do know how to suck a dick! ",
                button: [
                    { chatID: 92, text: "[Insert a finger into his rectum]", callback: "sleep_visit10" },
                    { chatID: 87, text: "[Just suck the cum out of his penis]", callback: "sleep_visit4" },
                ]
            },
            {
                chatID: 98,
                speaker: "security",
                text: "I can't stop thinking about you. Call me if you want some fun. ",
                button: [
                    { chatID: -1, text: "*gush*", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 99,
                speaker: "security",
                text: "Hey. Can you do that thing again? I tried doing what you did at home, but it didn't " +
                    "work. Can you do it to me again, but just the one thing? No blow job, just that thing?  Please!!!",
                button: [
                    { chatID: 100, text: "Sure!", callback: "sleep_visit13" },
                    { chatID: -1, text: "Maybe some other time. ", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 100,
                speaker: "security",
                text: "Oh thank you! That orgasm has been on my mind non-stop! You know since joining the cult I've wondered " +
                    "if I'm in the right place. They made me a Castellan, which is really high up, but it's never felt right. " +
                    "I see my slaves, and most days it feels like they are happier than me, ya know. I've got to pretend to " +
                    "be this tough guy all the time and keep them in line and fuck them. It's fun, but most days I would " +
                    "rather be them. ",
                button: [
                    { chatID: 101, text: "[slide your finger in his bussy]", callback: "sleep_visit14" },
                ]
            },
            {
                chatID: 101,
                speaker: "security",
                text: "Oh oh oh oh!!! That feel so amazing!!!! I can't control my body, I feel my orgasm building " +
                    "everywhere!!",
                button: [
                    { chatID: 102, text: "[speed up]", callback: "sleep_visit15" },
                ]
            },
            {
                chatID: 102,
                speaker: "security",
                text: "My entire body is orgasiming!!! It's so intense!!!",
                button: [
                    { chatID: 103, text: "...", callback: "sleep_visit12" },
                ]
            },
            {
                chatID: 103,
                speaker: "security",
                text: "That was amazing!!!! Oh thank you for showing me what I've known all along! I'm just so excited! " +
                    "I feel like I finally know what I need to do with my life. I've known this was never really me!!! " +
                    "*hrumph* What am I going to do? I feel so trapped. No. I can't be a sissy! I have to be a Castellan! " +
                    "It's what the Cult wants! I have to do it. ",
                button: [
                    { chatID: 104, text: "You just need to...", callback: "sleep_visit16" },
                ]
            },
            {
                chatID: 104,
                speaker: "security",
                text: "No! I'm not a sissy! Keep it down in here! I've got to finish my rounds!  ",
                button: [
                    { chatID: -1, text: "oh", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 105,
                speaker: "security",
                text: "Sorry about getting mad at you the other day. ",
                button: [
                    { chatID: 106, text: "oh", callback: "sleep_visit17" },
                ]
            },
            {
                chatID: 106,
                speaker: "security",
                text: "Yeah. I shouldn't have yelled at you like that. I've got a secret to show you! ",
                button: [
                    { chatID: 107, text: "What is it?", callback: "sleep_visit18" },
                ]
            },
            {
                chatID: 107,
                speaker: "security",
                text: "I'm wearing panties! I had to steal them the hucow locker room when no one was looking. " +
                    "I don't even know who's they are, but they fit nice! I was afraid they would be too tight, " +
                    "but they fit just right. I love the feeling of the thong between my cheeks when I walk " +
                    "around! Anyways, back to my rounds! ",
                button: [
                    { chatID: -1, text: "Ok!", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 108,
                speaker: "security",
                text: "I have another secret for you! I'm totally wearing a butt plug! Wanna see? ",
                button: [
                    { chatID: 109, text: "I really do!", callback: "sleep_visit18" },
                    { chatID: -1, text: "Another time", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 109,
                speaker: "security",
                text: "I got a purple one. Love the color purple, but I never get to wear it. Oooo! " +
                    "I should get a purple dress! You know, just to see how it looks. Love how it rubs " +
                    "against me. I'm thinking about getting a bigger plug, but this works for right now hehe.",
                button: [
                    { chatID: 110, text: "So cute!", callback: "sleep_visit17" },
                ]
            },
            {
                chatID: 110,
                speaker: "security",
                text: "I know! I've got to get back to my rounds. Lately C.U.M. has been doing checkups on " +
                    "me for some reason. Not sure what they know, but it might just be normal checks. But I " +
                    "can't let them know what I'm up to, hehehe. Anyway I'm a Castellan. That means I'm in charge " +
                    "around here, so they shouldn't be too much trouble. Just keep it a secret, 'k?",
                button: [
                    { chatID: -1, text: "Totally my secret! ", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 111,
                speaker: "me",
                text: "In progress...",
                button: [
                    { chatID: -1, text: "...", callback: "icon_bedturn" },
                ]
            },
            {
                chatID: 112,
                speaker: "rachel",
                text: "You are the worst. Always finding ways to get into trouble. Well, I gots somethin' " +
                    "for the both of ya!",
                button: [
                    { chatID: 113, text: "...", callback: "pig1" },
                ]
            },
            {
                chatID: 113,
                speaker: "rachel",
                text: "Take a look at that. Isn't it beautiful. These are my boars. You see, I have pens with " +
                    "gilts, those are female pigs, and barrows, those are castrated male pigs, but these are " +
                    "my breeding pigs. You see I castrate most of my male pigs. Meats better and the uncastrated " +
                    "pigs get really mean and aggressive. Too aggressive for even my ranchers to enter the pen. ",
                button: [
                    { chatID: 114, text: "*gulp*", callback: "" },
                ]
            },
            {
                chatID: 114,
                speaker: "rachel",
                text: "You two are here so they can let off some of that steam. That and we do love a show, " +
                    "don't we boys!",
                button: [
                    { chatID: 115, text: "...", callback: "" },
                ]
            },
            {
                chatID: 115,
                speaker: "!rancher",
                text: "We sure do! Hahahahah! Now get in there you two!",
                button: [
                    { chatID: 116, text: "...", callback: "" },
                ]
            },
            {
                chatID: 116,
                speaker: "kinsey",
                text: "Fuck. I hate the pig run. I would rather get tased up my ass 100 time than do the " +
                    "pig run again. The thing about pigs is they're strong, but they're lazy. If we can run " +
                    "through the entire pen and get to the other side we're safe. I've made it across a couple " +
                    "times. ",
                button: [
                    { chatID: 117, text: "Oh. Then we should just run through then?", callback: "" },
                ]
            },
            {
                chatID: 117,
                speaker: "kinsey",
                text: "Yeah, but you have to be careful. If you run face first into a pig, expect a pig dick " +
                    "in your mouth. If you run into a puddle you'll need to struggle to get out or you'll " +
                    "get stuck and fucked. Most important we need to keep some space between us. If there's a " +
                    "pig in the middle you go right and I'll go left. If we both go left we'll run into each " +
                    "other and have to scramble to keep going. Chances are one of us is getting fucked, and I " +
                    "don't want those nasty pig dicks inside me, so keep right, 'k?",
                button: [
                    { chatID: -1, text: "Ok! I'll see you on the other side! ", callback: "startpigrun" },
                ]
            },
            {
                chatID: 118,
                speaker: "thinking",
                text: "*ugh* Not only am I getting fucked up my ass by a pig, now a second pig wants to " +
                    "play. So gross I think he's going to try to lick my mouth! ",
                button: [
                    { chatID: 119, text: "Tongue kiss the pig sissy", callback: "pig_f_oral_pre1" },
                    { chatID: -1, text: "*blech* no way!", callback: "pig_double_0" },
                ]
            },
            {
                chatID: 119,
                speaker: "thinking",
                text: "I am such a piggy bitch. ",
                button: [
                    { chatID: -1, text: "[Open your mouth to take the piggy cock]", callback: "pig_double_0" },
                ]
            },
            {
                chatID: 120,
                speaker: "thinking",
                text: "oooof. My belly is so full of pig cum. So gross. ",
                button: [
                    { chatID: -1, text: "Trudge on", callback: "pigPen" },
                ]
            },
            {
                chatID: 121,
                speaker: "rachel",
                text: " Shows over everyone. My cum receptacles need to get to bed.",
                button: [
                    { chatID: -1, text: "*ugh*", callback: "endpigpen" },
                ]
            },
            {
                chatID: 122,
                speaker: "me",
                text: "So... how are you?",
                button: [
                    { chatID: 70, text: "...", callback: "" },
                ]
            },
            {
                chatID: 123,
                speaker: "kinsey",
                text: "*ugh* My bed smell like pig semen and my pussy still hurts from those long pokey dicks. " +
                    "Oh, I'm I'm trapped here giving milk making my nipples sore all the time. But other than " +
                    "that I'm great! Now I'm going to go and fart out some more pig semen if you'll excuse me. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 124,
                speaker: "rachel",
                text: "Nice sunny day like this I like to wander the field topless. You know the sun does " +
                    "wonderful things to promote lactation. Also I like showing these puppies off. Feels like " +
                    "a real shame to hide them all the time. Them new farm boys get to stammerin' when they " +
                    "see them. ",
                button: [
                    { chatID: 125, text: "moo?", callback: "" },
                    { chatID: 126, text: "They do look great", callback: "" },
                ]
            },
            {
                chatID: 125,
                speaker: "rachel",
                text: "You can cut the 'moo' crap with me. I know you're not a great hucow. Got too many thoughts " +
                    "running though that head of yours. All my girls are great hucows 'cept you and that Kinsey " +
                    "girl. Now I need some help in the barn and you've been behavin' yourself enough lately that " +
                    "I thought you might be good for the help. If you get tired of crawlin' around on your knees " +
                    "all day, just head on in the barn. Just no screwin' around 'k?",
                button: [
                    { chatID: 127, text: "Ok! Can Kinsey help too?", callback: "" },
                ]
            },
            {
                chatID: 126,
                speaker: "rachel",
                text: "I know my tit's look great. That's what I just said. Look, I know you're not a great hucow. Got too many thoughts " +
                    "running though that head of yours. All my girls are great hucows 'cept you and that Kinsey " +
                    "girl. Now I need some help in the barn and you've been behavin' yourself enough lately that " +
                    "I thought you might be good for the help. If you get tired of crawlin' around on your knees " +
                    "all day, just head on in the barn. Just no screwin' around 'k?",
                button: [
                    { chatID: 127, text: "Ok! Can Kinsey help too?", callback: "" },
                ]
            },
            {
                chatID: 127,
                speaker: "rachel",
                text: "Hahaha. No. Kinsey'll just go about and wreck everything. She's got a hotter head than the " +
                    "devil himself. You know, fire in the crotch, fire in the belly. When you get in there, just " +
                    "do what you're told and don't make me regret it. Now I'm going to go check out my new farm hand. " +
                    "He's got muscles on muscles. My kinda guy. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 128,
                speaker: "!hucow",
                text: "I feel so dirty. Do you think you could wash my back? ",
                button: [
                    { chatID: 129, text: "Sure!", callback: "drink3" },
                    { chatID: -1, text: "Sorry. Too busy", callback: "reset" },
                ]
            },
            {
                chatID: 129,
                speaker: "!hucow",
                text: "That feels so nice. You really do have great hands. Thanks so much!",
                button: [
                    { chatID: -1, text: "You're welcome!", callback: "reset" },
                ]
            },
            {
                chatID: 130,
                speaker: "!rancher",
                text: "Hahaha! You thirst? How about you drink some piss water hucow!",
                button: [
                    { chatID: 131, text: "*sigh* [Keep drinking]", callback: "drink1" },
                    { chatID: -1, text: "ewww gross. Leave", callback: "reset" },
                ]
            },
            {
                chatID: 131,
                speaker: "!rancher",
                text: "I knew you were a freak!",
                button: [
                    { chatID: -1, text: "[Finish drinking the piss water]", callback: "reset" },
                ]
            },
            {
                chatID: 132,
                speaker: "thinking",
                text: "Oh gross. There's a pig in my drinking water. ",
                button: [
                    { chatID: -1, text: "[Flash the piggy your bussy]", callback: "drink2" },
                    { chatID: -1, text: "[Just leave]", callback: "reset" },
                ]
            },
            {
                chatID: 133,
                speaker: "!pig",
                text: "GRUNT!!",
                button: [
                    { chatID: 134, text: "Am I really going to let this pig slide his penis inside my bussy?", callback: "drink2_1" },
                ]
            },
            {
                chatID: 134,
                speaker: "me",
                text: "YES! I really am!! I love degrading myself by taking piggy dick!!! ",
                button: [
                    { chatID: 135, text: "...", callback: "drink2_2" },
                ]
            },
            {
                chatID: 135,
                speaker: "!pig",
                text: "SQUEEEELLL!!!! ",
                button: [
                    { chatID: 136, text: "OOooh Fill my belly with your piggy cum!", callback: "drink2_3" },
                ]
            },
            {
                chatID: 136,
                speaker: "me",
                text: "I needed that! ",
                button: [
                    { chatID: -1, text: "[Crawl back to the meadow]", callback: "reset" },
                ]
            },
            {
                chatID: 137,
                speaker: "thinking",
                text: "This dirty puddle tastes disgusting! Too bad it's the only place to get a drink.  ",
                button: [
                    { chatID: -1, text: "[Crawl back to the meadow]", callback: "reset" },
                ]
            },
            {
                chatID: 138,
                speaker: "thinking",
                text: "My bladder will burst if I drink anything more. I've got to pee first.  ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 139,
                speaker: "thinking",
                text: "So much better!  ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 140,
                speaker: "thinking",
                text: "I don't have to pee.  ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 141,
                speaker: "thinking",
                text: "How am I going to smuggle this food for " + sc.n("ppgirl") + "? I could keep it in my " +
                    "hand, but they might catch me and I wouldn't be able to get her more food. Maybe my mouth? " +
                    "No that won't work. It dissolves too quickly with all my saliva. I really wish I had pockets! " +
                    "Oh wait. My bussy is kind of like a pocket! I'll just store some food pellets in there! I guess " +
                    "it's true, desperate times calls for desperate measures. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 142,
                speaker: "thinking",
                text: "One food pellet for " + sc.n("ppgirl") + " and 1 food pellet for me. " +
                    "One food pellet for " + sc.n("ppgirl") + " and 1 food pellet for me. " + 
                    "One food pellet for " + sc.n("ppgirl") + " and 1 food pellet for me. ",
                button: [
                    { chatID: -1, text: "...", callback: "finisheating" },
                ]
            },
            {
                chatID: 143,
                speaker: "thinking",
                text: "Gross! I'm going going to let that piggy put his piggy penis up my bussy! What's " +
                    "got into my head? ",
                button: [
                    { chatID: -1, text: "[Crawl back to the meadow]", callback: "reset" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};