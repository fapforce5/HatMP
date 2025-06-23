//Room name
var room170 = {};
room170.main = function () {
    if (gv.get("sissySchoolClass") === "ex317") {
        if (g.pass === 170) {
            g.pass = null;
            room170.btnclick("dressingRoom");
            return;
        }
        switch (gv.get("sissySchoolClassDays")) {
            case 0:
                nav.bg("170_stage/ex317_0.jpg");
                chat(1, 170);
                break;
            case 2:
            case 3:
                nav.bg("181_black/bg_black.jpg");
                chat(18, 170);
                break;
        }
    }
    else if (gv.get("sissySchoolClass") === "finalx") {
        nav.bg("170_stage/final_bg.webp");
        if (g.gethourdecimal() < 17) {
            nav.button({
                "type": "btn",
                "name": "final_wander",
                "left": 173,
                "top": 0,
                "width": 354,
                "height": 596,
                "image": "170_stage/final_door.webp"
            }, 170);

            sc.select("final_makeup", "27_mirror/icon_makeup.png", 1);
            sc.select("final_wander", "170_stage/icon_sneak.webp", 3);
            sc.select("final_wait", "527_bathroom/icon_wait.png", 5);
        }
        else if (g.gethourdecimal() < 18) {
            sc.select("final_makeup", "27_mirror/icon_makeup.png", 1);
            sc.select("final_wait", "527_bathroom/icon_wait.png", 3);
        }
        else {
            if (g.map.event === 0) {
                g.map.event = 1;
                nav.kill();
                nav.bg("170_stage/fashion20.webp");
                chat(45, 170);
            }
            else {
                let eventTitle = "";
                switch (g.map.event) {
                    case 1:
                    case 2: eventTitle = "SWIMSUIT"; break;
                    case 3: eventTitle = g.map.talent; break;
                    case 4: eventTitle = "Q and A"; break;
                    case 5: eventTitle = "Evening Dress"; break;
                    case 6: eventTitle = "Coronation"; break;
                }
                nav.t({
                    type: "img",
                    name: "x",
                    left: 1100,
                    top: 120,
                    font: 60,
                    hex: "#f7d4e3",
                    text: eventTitle,
                    stroke: "black"
                }, 170);
                sc.select("final_makeup", "27_mirror/icon_makeup.png", 1);
                sc.select("wardrobe", "316_livingroom/icon_wardrobe.png", 3);
                sc.select("final_show", "170_stage/icon_catwalk.png", 5);
            }
        }
        return;
    }
    else {
        chat(0, 170);
        nav.buildnav([213, 214, 171, 215]);
    }
};

room170.btnclick = function (name) {
    switch (name) {
        case "final_show":
            switch (g.map.event) {
                case 0:
                case 1:
                    nav.kill();
                    nav.bg("170_stage/fashion21" + g.map.ralph + ".webp");
                    zcl.displayMain(200, 890, .037, "clothes", false);
                    nav.button({
                        "type": "btn",
                        "name": "catwalk",
                        "left": 811,
                        "top": 110,
                        "width": 334,
                        "height": 432,
                        "image": "170_stage/fashion21_o.webp"
                    }, 170);
                    chat(47, 170);
                    break;
                case 2:
                    if (cl.hasoutfit("swimsuit") !== null) {
                        chat(54, 170);
                    }
                    else {
                        nav.kill();
                        nav.bg("170_stage/stage.jpg");
                        zcl.displayMain(250, 800, .09, "clothes", false);
                        chat(55, 170);
                    }
                    break;
                case 3:
                    if (g.map.talent === "cheerleader") {
                        if (cl.hasoutfit("cheerleaderOptional") === null) {
                            nav.kill();
                            nav.bg("170_stage/fashion_cheer0.webp");
                            chat(58, 170);
                        }
                        else {
                            nav.kill();
                            nav.bg("170_stage/stage.jpg");
                            zcl.displayMain(250, 800, .09, "clothes", false);
                            chat(60, 170);
                        }
                    }
                    else if (g.map.talent === "stripper") {
                        if (cl.hasoutfit("braAndPantiesIgnored") === null) {
                            nav.kill();
                            nav.bg("170_stage/fashion_strip0.webp");
                            chat(61, 170);
                        }
                        else {
                            nav.kill();
                            nav.bg("170_stage/fashion_strip-1.webp");
                            zcl.displayMain(200, 700, .12, "clothes", true);
                            chat(64, 170);

                        }
                    }
                    else if (g.map.talent === "whore") {
                        nav.kill();
                        nav.bg("170_stage/stage.jpg");
                        zcl.displayMain(250, 800, .09, "clothes", false);
                        chat(65, 170);
                    }
                    break;
                case 4:
                    if (cl.hasoutfit("nude") === null) {
                        nav.kill();
                        nav.bg("170_stage/fashion30.webp");
                        zcl.displayMain(-2000, -1000, .7, "clothes", true);
                        chat(76, 170);
                    }
                    else {
                        chat(75, 170);
                    }
                    break;
                case 5:
                    nav.kill();
                    nav.bg("170_stage/stage.jpg");
                    zcl.displayMain(250, 800, .09, "clothes", false);
                    if (cl.isLewd()) {
                        chat(94, 170);
                    }
                    else {
                        chat(95, 170);
                    }
                    break;
                case 6:
                    nav.bg("170_stage/fashion21" + g.map.ralph + ".webp");
                    zcl.displayMain(200, 890, .037, "clothes", false);
                    chat(97, 170);
                    break;
            }

            break;
        case "final_wait":
            char.settime(18, 0);
            char.room(170);
            break;
        case "final_wander":
            nav.kill();
            nav.bg("170_stage/hallway.jpg");
            nav.button({
                "type": "btn",
                "name": "final_catwalk",
                "left": 1143,
                "top": 548,
                "width": 101,
                "height": 414,
                "image": "170_stage/catwalkDoor.png"
            }, 170);
            nav.button({
                "type": "btn",
                "name": "final_dressing",
                "left": 1361,
                "top": 73,
                "width": 175,
                "height": 959,
                "image": "170_stage/dressingRoomDoor.png"
            }, 170);
            break;
        case "final_catwalk":
            nav.kill();
            nav.bg("170_stage/lightson.webp");
            zcl.displayMain(400, 870, .05, "clothes", false);
            chat(33, 170);
            break;
        case "final_dressing":
            char.addtime(5);
            char.room(170);
            break;
        case "final_makeup":
            g.pass = 170;
            char.room(27);
            break;
        case "dressingRoom":
            nav.kill();
            var askForMakeup = false;
            if (inv.get("makeup").count < 1) {
                inv.add("makeup", 5);
                askForMakeup = true;
            }
            if (inv.get("redl").count < 1) {
                inv.add("redl", 5);
                askForMakeup = true;
            }
            if (inv.get("eyeshadow").count < 1) {
                inv.add("eyeshadow", 5);
                askForMakeup = true;
            }

            nav.bg("170_stage/dressingRoom.jpg");
            sc.select("wardrobe", "316_livingroom/icon_wardrobe.png", -2);
            sc.select("makeup", "27_mirror/icon_makeup.png", 0);
            sc.select("hallway", "170_stage/icon_catwalk.png", 2);
            if (askForMakeup)
                chat(32, 170);
            break;
        case "wardrobe":
            g.pass = 170;
            char.room(8);
            break;
        case "makeup":
            g.pass = 170;
            char.room(27);
            break;
        case "hallway":
            nav.kill();
            nav.bg("170_stage/bitch.jpg");
            switch (gv.get("sissySchoolClassDays")) {
                case 0: chat(900, 170); break;
                case 1: chat(901, 170); break;
                case 2: chat(902, 170); break;
            }
            break;
        case "catwalk":
            nav.kill();
            switch (gv.get("sissySchoolClassDays")) {
                case 0: nav.bg("170_stage/ex317_4.jpg"); chat(4, 170);  break;
                case 1:
                    nav.bg("170_stage/stage.jpg");
                    zcl.displayMain(250, 800, .09, "clothes", false);
                    chat(15, 170);
                    break;
            }
            break;
        default:
            break;
    }
};

room170.chatcatch = function (callback) {
    switch (callback) {
        case "ex317_1":
        case "ex317_2":
        case "ex317_10":
        case "ex317_100":
        case "ex317_101":
        case "ex317_102":
        case "ex317_103":
        case "ex317_104_bad":
        case "ex317_104":
        case "ex317_105":
        case "bitch":
            nav.bg("170_stage/" + callback + ".jpg");
            break;
        case "fashion0":
        case "fashion4":
        case "fashion5":
        case "fashion23":
        case "fashion24":
        case "fashion25":
        case "fashion26":
        case "fashion_cheer1":
        case "fashion31":
        case "fashion32":
        case "fashion33":
            nav.bg("170_stage/" + callback + ".webp");
            break;
        case "fashion20":
        case "fashion22":
        case "fashion_strip1":
        case "fashion_strip2":
        case "fashion_whore2":
        case "fashion_whore4":
        case "fashion_whore5":
            nav.kill();
            nav.bg("170_stage/" + callback + ".webp");
            break;
        case "bitch1":
            nav.kill();
            nav.bg("170_stage/bitch.jpg");
            break;
        case "ex317_3":
            cl.add("dress", "rose");
            room170.chatcatch("dressingRoom");
            return;
        case "dressingRoom":
            nav.bg("170_stage/hallway.jpg");
            nav.button({
                "type": "btn",
                "name": "dressingRoom",
                "left": 1361,
                "top": 73,
                "width": 175,
                "height": 959,
                "image": "170_stage/dressingRoomDoor.png"
            }, 170);
            break;
        case "gotoDressingRoom":
            room170.btnclick("dressingRoom");
            break;
        case "hallwayCatwalk":
            nav.kill();
            nav.bg("170_stage/hallway.jpg");
            nav.button({
                "type": "btn",
                "name": "catwalk",
                "left": 1143,
                "top": 548,
                "width": 101,
                "height": 414,
                "image": "170_stage/catwalkDoor.png"
            }, 170);
            break;
        case "ex317_5":
            nav.bg("170_stage/stage.jpg");
            zcl.displayMain(250, 800, .09, "clothes", false);
            break;
        case "ex317_6":
            zcl.displayMain(250, 850, .055, "clothes", true);
            break;
        case "ex317_7":
            nav.kill();
            gv.set("sissySchoolClassDays", 1);
            cl.add("shirt", "cor");
            cl.add("pants", "co");
            nav.bg("170_stage/ex317_7.jpg");
            break;
        case "ex317_8":
            nav.kill();
            cl.c.panties = null;
            cl.display();
            nav.bg("170_stage/ex317_8.jpg");
            break;
        case "ex317_9":
            nav.bg("170_stage/hallwayJones.jpg");
            zcl.displayMain(100, 550, .2, "clothes", true);
            break;
        case "ex317_11":
            nav.kill();
            nav.bg("170_stage/ex317_11.jpg");
            break;
        case "ex317_105_bad":
            nav.kill();
            nav.bg("170_stage/ex317_105_bad.jpg");
            zcl.displayMain(200, 550, .17, "clothes", true);
            break;
        case "ex317_badend":
            sc.completeMission("jones", "invite", false);
            sc.startMission("jones", "fail", true);
            gv.mod("money", 20);
            sissy.passclass(true);
            break;
        case "ex317_106":
            nav.bg("170_stage/stage.jpg");
            zcl.displayMain(250, 800, .09, "clothes", false);
            break;
        case "classComplete":
            gv.mod("sissySchoolClassDays", 1);
            levels.mod("xdress", 30, 999);
            levels.mod("fame", 100);
            char.settime(17, 15);
            char.room(201);
            break;
        case "sissyEnd":
            sc.startMission("jones", "invite");
            sc.completeMissionTask("jones", "invite", 0);
            sc.show("jones");
            g.roomMapAccess(150, true, true);
            sc.modSecret("jones", 100);
            levels.mod("fame", 200);
            sissy.passclass(true);
            break;
        case "final_dressingRoom":
            char.settime(17, 30);
            char.room(170);
            break;
        case "final_dressingRoom_good":
            g.map.gavebj = true;
            char.settime(17, 30);
            char.room(170);
            break;
        case "fashion1":
            nav.bg("170_stage/fashion1.webp");
            zcl.displayMain(200, 550, .23, "clothes", true);
            break;
        case "fashion2":
        case "fashion3":
        case "fashion6":
            nav.bg("170_stage/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "outfitSelect":
            var eventTitle = "";
            switch (g.map.event) {
                case 1:
                case 2: eventTitle = "SWIMSUIT"; break;
                case 3: eventTitle = g.map.talent; break;
                case 4: eventTitle = "Q and A"; break;
                case 5: eventTitle = "Evening Dress"; break;
                case 6: eventTitle = "Coronation"; break;
            }
            nav.t({
                type: "img",
                name: "x",
                left: 1100,
                top: 120,
                font: 60,
                hex: "#f7d4e3",
                text: eventTitle,
                stroke: "black"
            }, 170);
            sc.select("final_makeup", "27_mirror/icon_makeup.png", 1);
            sc.select("wardrobe", "316_livingroom/icon_wardrobe.png", 3);
            sc.select("final_show", "170_stage/icon_catwalk.png", 5);
            break;
        case "fashion_event2":
            g.map.event = 2;
            char.addtime(30);
            char.room(170);
            break;
        case "fashion27":
            nav.kill();
            nav.bg("170_stage/fashion27.webp");
            room170.chatcatch("makeScore");
            break;
        case "fashion28": //cheerleader
            nav.kill();
            nav.bg("170_stage/fashion28.webp");
            room170.chatcatch("makeScore");
            var xcoord1 = [359, 653, 894, 1195, 1453];
            if (cl.hasoutfit("cheerleaderOptional") === null) {
                var cheerLevel = levels.get("cheer").l - 2;
                g.map.score1 = 0;
                var scorec1 = new Array(5);
                for (i = 0; i < 5; i++) {
                    scorec1[i] = cheerLevel + g.rand(0, 3);
                    if (scorec1[i] > 10)
                        scorec1[i] = 10;
                    if (scorec1[i] < 4)
                        scorec1[i] = g.rand(3, 6);
                }
                for (let i = 0; i < xcoord1.length; i++) {
                    nav.button({
                        "type": "img",
                        "name": "scorecard",
                        "left": xcoord1[i],
                        "top": 447,
                        "width": 176,
                        "height": 226,
                        "image": "170_stage/scorecard.webp"
                    }, 170);

                    nav.t({
                        type: "img",
                        name: "scorecard",
                        left: xcoord1[i] + (scorec1[i] < 10 ? 40 : -5),
                        top: 470,
                        font: 160,
                        hex: "#000000",
                        text: scorec1[i]
                    }, 170);
                    g.map.score1 += scorec1[i];
                }
                chat(800, 170);
            }
            else {
                room170.chatcatch("makeScore");
            }
            break;
        case "fashion28-s": //stripper
            nav.kill();
            nav.bg("170_stage/fashion28.webp");
            room170.chatcatch("makeScore");
            var xcoord1s = [359, 653, 894, 1195, 1453];
            if (cl.hasoutfit("braAndPantiesIgnored") === null) {
                var stripLevel = levels.get("stripper").l - 2;
                g.map.score1 = 0;
                scorec1s = new Array(5);
                for (i = 0; i < 5; i++) {
                    scorec1s[i] = stripLevel + g.rand(0, 3);
                    if (scorec1s[i] > 10)
                        scorec1s[i] = 10;
                    if (scorec1s[i] < 4)
                        scorec1s[i] = g.rand(3, 6);
                }
                for (let i = 0; i < xcoord1s.length; i++) {
                    nav.button({
                        "type": "img",
                        "name": "scorecard",
                        "left": xcoord1s[i],
                        "top": 447,
                        "width": 176,
                        "height": 226,
                        "image": "170_stage/scorecard.webp"
                    }, 170);

                    nav.t({
                        type: "img",
                        name: "scorecard",
                        left: xcoord1s[i] + (scorec1s[i] < 10 ? 40 : -5),
                        top: 470,
                        font: 160,
                        hex: "#000000",
                        text: scorec1s[i]
                    }, 170);
                    g.map.score1 += scorec1s[i];
                }
                chat(800, 170);
            }
            else {
                room170.chatcatch("makeScore");
            }
            break;
        case "fashion28-w":
            nav.bg("170_stage/fashion28.webp");
            //room170.chatcatch("makeScore");
            var xcoord1w = [359, 653, 894, 1195, 1453];
            var whoreLevel = levels.get("whore").l - 2;
            levels.anal(4, false, "m", true, null, "unk");
            g.map.score1 = 0;
            var scorec1w = new Array();
            for (let i = 0; i < 5; i++) {
                scorec1w[i] = whoreLevel + g.rand(0, 3);
                if (scorec1w[i] > 10)
                    scorec1w[i] = 10;
                if (scorec1w[i] < 4)
                    scorec1w[i] = g.rand(3, 6);
            }

            for (let i = 0; i < xcoord1w.length; i++) {
                nav.button({
                    "type": "img",
                    "name": "scorecard",
                    "left": xcoord1w[i],
                    "top": 447,
                    "width": 176,
                    "height": 226,
                    "image": "170_stage/scorecard.webp"
                }, 170);

                nav.t({
                    type: "img",
                    name: "scorecard",
                    left: xcoord1w[i] + (scorec1w[i] < 10 ? 40 : -5),
                    top: 470,
                    font: 160,
                    hex: "#000000",
                    text: scorec1w[i]  
                }, 170);
                g.map.score1 += scorec1w[i];
            }
            chat(800, 170);
            break;
        case "fashion29":
            nav.kill();
            nav.bg("170_stage/fashion29.webp");
            room170.chatcatch("makeScore");
            break;
        case "fashion35":
            nav.kill();
            nav.bg("170_stage/fashion35.webp");
            var xcoord1q = [359, 653, 894, 1195, 1453];
            var scorec1q = new Array(5);
            scorec1q[0] = g.map.j1;
            scorec1q[1] = g.map.j2;
            scorec1q[2] = g.map.j3;
            scorec1q[3] = g.map.j4;
            scorec1q[4] = g.map.j5;
            g.map.score2 = 0;

            for (let i = 0; i < xcoord1q.length; i++) {
                nav.button({
                    "type": "img",
                    "name": "scorecard",
                    "left": xcoord1q[i],
                    "top": 447,
                    "width": 176,
                    "height": 226,
                    "image": "170_stage/scorecard.webp"
                }, 170);

                nav.t({
                    type: "img",
                    name: "scorecard",
                    left: xcoord1q[i] + (scorec1q[i] < 10 ? 40 : -5),
                    top: 470,
                    font: 160,
                    hex: "#000000",
                    text: scorec1q[i]
                }, 170);
                g.map.score2 += scorec1q[i];
            }
            chat(800, 170);
            break;
        case "makeScore":
            var totals = 0;
            var scorec = new Array(5);
            var swc = cl.appearanceClothes();
            var totalApp = (swc.earnedPoints / swc.totalPoints) * 10;
            var swa = cl.appearance() * 2;
            var jonesMission = sc.taskGetStep("jones", "invite");
            if (jonesMission > 3)
                jonesMission = 3;
            var shoes = cl.getEntry("shoes", cl.c.shoes).daring * 2;
            if (shoes < 0)
                shoes = 1;

            scorec[0] = Math.round((swa - 2) + (g.map.gavebj ? 2 : 0)); //oldman
            scorec[1] = Math.round(totalApp);
            scorec[2] = Math.round((swa - 3) + g.rand(0, 4));
            scorec[3] = Math.round((((totalApp + swa) / 2) - 3) + jonesMission);
            scorec[4] = Math.round(shoes + g.rand(0, 2));
            if (g.map.event === 3) {
                for (let i = 0; i < 5; i++)
                    scorec[i] = Math.floor(scorec[i] / 3);
            }
            for (let i = 0; i < 5; i++) {
                if (scorec[i] > 10)
                    scorec = 10;
                if (scorec < 1)
                    scorec = 1;

                totals += scorec[i];
            }
           
            var xcoord = [359, 653, 894, 1195, 1453];
            for (let i = 0; i < xcoord.length; i++) {
                nav.button({
                    "type": "img",
                    "name": "scorecard",
                    "left": xcoord[i],
                    "top": 447,
                    "width": 176,
                    "height": 226,
                    "image": "170_stage/scorecard.webp"
                }, 170);
                
                nav.t({
                    type: "img",
                    name: "scorecard",
                    left: xcoord[i] + (scorec[i] < 10 ? 40 : -5),
                    top: 470,
                    font: 160,
                    hex: "#000000",
                    text: scorec[i]
                }, 170);
            }
            switch (g.map.event) {
                case 1:
                case 2: g.map.score0 = totals; break;
                case 3: g.map.score1 = totals; break;
                case 4: g.map.score2 = totals; break;
                case 5: g.map.score3 = totals; break;
            }
            chat(800, 170);
            break;
        case "fashion_whore0":
            nav.button({
                "type": "img",
                "name": "whore",
                "left": 713,
                "top": 285,
                "width": 856,
                "height": 795,
                "image": "170_stage/fashion_whore0.webp"
            }, 170);
            break;
        case "fashion_whore1":
        case "fashion_whore3":
            nav.kill();
            cl.nude();
            nav.bg("170_stage/" + callback + "_" + gender.pronoun("f") + ".webp")
            break;
        case "cheerleader":
        case "stripper":
        case "whore":
            g.map.talent = callback;
            g.map.event = 3;
            char.room(170);
            break;
        case "fashion34":
            nav.bg("170_stage/" + callback + ".webp");
            if (gender.canUseCock()) {
                chat(90, 170);
            }
            else {
                chat(91, 170);
            }
            break;
        case "formalEvent":
            g.map.event = 5;
            char.room(170);
            break;
        case "reset":
            char.room(170);
            break;
        case "qanda":
            cl.c.chastity = null;
            g.map.event = 4;
            char.room(170);
            break;
        case "pfinal":
            g.map.event = 6;
            char.room(170);
            break;
        case "j1-1":
            g.map.j1 = 10;
            break;
        case "j1-2":
            g.map.j1 = 6;
            break;
        case "j1-3":
            if (g.map.gavebj) {
                g.map.j1 = 1;
                chat(79, 170);
            }
            else {
                g.map.j1 = 4;
                chat(80, 170);
            }
            break;
        case "j2-1":
            g.map.j2 = 10;
            break;
        case "j2-2":
            g.map.j2 = g.rand(4, 7);
            break;
        case "j3-1":
            g.map.j3 = g.rand(8, 11);
            break;
        case "j4-1":
            g.map.j4 = 10;
            break;
        case "j4-2":
            g.map.j4 = 7;
            break;
        case "j4-3":
            g.map.j4 = 1;
            break;
        case "j5-1":
            g.map.j5 = 10;
            break;
        case "j5-2":
            g.map.j5 = 7;
            break;
        case "j5-3":
            g.map.j5 = 4;
            break;
        case "crown0":
            nav.kill();
            nav.bg("170_stage/fashion50_1.webp");
            break;
        case "crown1":
            if (g.map.score0 + g.map.score1 + g.map.score2 + g.map.score3 < 140) {
                gv.set("sissyfinal_pageant", false);
                nav.bg("170_stage/fashion50_2.webp");
                gv.mod("sissyfinal_pageant", false);
                chat(99, 170);
            }
            else {
                gv.set("sissyfinal_pageant", true);
                cl.add("accessories", "crownsissy");
                cl.c.accessories = "crownsissy";
                cl.display();
                nav.bg("170_stage/fashion50_3.webp");
                zcl.displayMain(110, 750, .115, "clothes", false);
                gv.mod("sissyfinal_pageant", true);
                levels.mod("fame", 500);
                chat(101, 170);
            }
            break;
        case "crownEnd":
            if (g.map.score0 + g.map.score1 + g.map.score2 + g.map.score3 < 140) {
                levels.mod("fame", 200);
            }
            char.addtime(400);
            char.room(207);
            break;
        default:
            break;
    }
};

room170.chat = function (chatID) {
    if (chatID === 900) {
        if (cl.c.dress !== "rose") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Is that the Rose Dress? Shut up! No it's not! Put on the rose dress " +
                    "you stupid bimbo! ",
                button: [
                    { chatID: -1, text: "Oh. Yeah. I'll put on the pink rose dress", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.makeup === "clown") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Are you wearing clown makeup? Go put on normal makeup you supid bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on different makeup. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.lipstick === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on lipstick you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on lipstick. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.pissface === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on eyeshadow you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on eyeshadow. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.socks !== null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why the fuck are you wearing sock! This isn't a gym. Go take those off " +
                    "you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll take off my socks. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.getEntry("shoes", cl.c.shoes).sex !== "f") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Go put on some sexy shoes you knuckle dragger! ",
                button: [
                    { chatID: -1, text: "Oh. I'll put on my sexiest shoes. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        return {
            chatID: 0,
            speaker: "!bitch",
            text: "*ugh* I guess that's good enough. Go out there and don't make an ass " +
                "of us you brain dead bimbo! ",
            button: [
                { chatID: -1, text: "Yes ma'am!", callback: "hallwayCatwalk" }
            ]
        };
    }
    else if (chatID === 901) {
        if (cl.c.shirt !== "cor" || cl.c.pants !== "co") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Is that the corset and micro skirt? Shut up! No it's not! Put on the " +
                    "corset and micro skirt you stupid bimbo! ",
                button: [
                    { chatID: -1, text: "Oh. Yeah. I'll put on the pink rose dress", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.makeup === "clown") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Are you wearing clown makeup? Go put on normal makeup you supid bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on different makeup. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.lipstick === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on lipstick you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on lipstick. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.pissface === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on eyeshadow you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on eyeshadow. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.socks !== null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why the fuck are you wearing sock! This isn't a gym. Go take those off " +
                    "you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll take off my socks. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.getEntry("shoes", cl.c.shoes).sex !== "f") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Go put on some sexy shoes you knuckle dragger! ",
                button: [
                    { chatID: -1, text: "Oh. I'll put on my sexiest shoes. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.bra !== null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why are you wearing a bra? Go take that off. It's a stuipid bra! ",
                button: [
                    { chatID: -1, text: "Oh. I'll remove my bra. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.panties === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Oh gross. Go put on some panties. No one wants to see that " +
                    "nasty little dangling thing. Disgusting!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on some panties. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        nav.bg("170_stage/hallwayJones.jpg");
        zcl.displayMain(100, 550, .2, "clothes", true);
        return {
            chatID: 0,
            speaker: "jones",
            text: "Why is she wearing panties! I didn't design those rags. They " +
                "look terrible with my design! She'll ruin the show! ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 902) {
        if (!cl.wearing().nude) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why are you wearing clothes. Strip it all off! Should I get some " +
                    "Q-tips so you can clean your ears and listen? ",
                button: [
                    { chatID: -1, text: "Oh. Yeah. I'll remove all my clothes. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.makeup === "clown") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Are you wearing clown makeup? Go put on normal makeup you supid bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on different makeup. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.lipstick === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on lipstick you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on lipstick. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.pissface === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on eyeshadow you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on eyeshadow. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        nav.bg("170_stage/ex317_101.jpg");
        return {
            chatID: 0,
            speaker: "jones",
            text: "Wonderful! You came! You're going to be the final piece of my " +
                "show, wearing the most beautiful thing a woman can wear. I'm so " +
                "excited. They'll be talking about this for years! Assistant, you " +
                "can go. I'll take it from here. ",
            button: [
                { chatID: 20, text: "...", callback: "ex317_102" }
            ]
        };
    }
    else if (chatID === 800) {
        let txt = "";
        let txtAppend = "";
        let tscore = 0;
        let nextChat = 0;
        switch (g.map.event) {
            case 1:
            case 2:
                txtAppend = "Let's see how this fine young woman did in the swimsuit competition. "
                tscore = g.map.score0;
                nextChat = 56;
                break;
            case 3:
                txtAppend = "Let's see how this fine young woman did in the talent competition. "
                tscore = g.map.score1;
                nextChat = 74;
                break;
            case 4:
                txtAppend = "Judges? "
                tscore = g.map.score2;
                nextChat = 72;
                break;
            case 5:
                txtAppend = "Judges? "
                tscore = g.map.score3;
                nextChat = 96;
                break;
        }
        if (tscore < 25)
            txt = "We have a dissapointing score of " + tscore + ". ";
        else if (tscore < 37)
            txt = "We have a respectable score of " + tscore + ". ";
        else if (tscore < 45)
            txt = "We have an amazing score of " + tscore + ". ";
        else if (tscore < 50)
            txt = "I am stunned! She has a truly spectaular score of " + tscore + ". ";
        else
            txt = "I have never seen this before for this competition! A perfect score from all the judges!!!";
        return {
            chatID: 0,
            speaker: "p",
            text: txtAppend + txt,
            button: [
                { chatID: nextChat, text: "[Return to the dressing room]", callback: "fashion20" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "random",
                text: "In progress. Will be added in future release",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "black",
                text: "I have such the treat for you. There's a fasion show today put on by Mr. Jones. " +
                    "Follow me to the dressing room and we'll meet his assistant. ",
                button: [
                    { chatID: 2, text: "...", callback: "ex317_1" }
                ]
            },
            {
                chatID: 2,
                speaker: "!bitch",
                text: "These must be the *ugh* sissies that are going to model for Mr. Jones. " +
                    "You can go " + sc.n("black") + ". I'll take them from here. ",
                button: [
                    { chatID: 3, text: "...", callback: "ex317_2" }
                ]
            },
            {
                chatID: 3,
                speaker: "!bitch",
                text: "Take this dress, put on some makeup and nice shoes, then come " +
                    "back out here to walk the catwalk. Chop chop!",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "ex317_3" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "Holy crap. This is all happening so fast. I've never modeled before " +
                    "and here I am going out on the catwalk in front of I don't know how many " +
                    "people. I hope they don't boo me. Just remember walk through the " +
                    "blud door and don't trip, don't trip, don't fall on my ass in front of everyone.",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "Oh wow... There's so many people out there staring at me! I think " +
                    "I'm gunna barf. Maybe I could just run away... No! I'm a big girl! " +
                    "I'm going to go out there and show off this dress! And I'm not gunna " +
                    "barf doing it! Just do it!",
                button: [
                    { chatID: 6, text: "...", callback: "ex317_5" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "I made it to the end of the runway. Still haven't tripped or " +
                    "barfed! I'll do my little turn and walk back. So simple. Just " +
                    "turn and walk...",
                button: [
                    { chatID: 7, text: "...", callback: "ex317_6" }
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "Almost out. Almost free!",
                button: [
                    { chatID: 8, text: "...", callback: "ex317_7" }
                ]
            },
            {
                chatID: 8,
                speaker: "!bitch",
                text: "You did fine. Not a model, but good enough. Now we're doing " +
                    "evening wear. Go put this on. ",
                button: [
                    { chatID: 9, text: "It's very revealing. Is there more to it?", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "!bitch",
                text: "*Ugh* I don't have time for this. Just put it on and get ready " +
                    "to model it. I though you bimbo sissies wanted to show off your bodies. ",
                button: [
                    { chatID: -1, text: "*sigh* ok", callback: "gotoDressingRoom" }
                ]
            },
            {
                chatID: 10,
                speaker: "!bitch",
                text: "What if people see her penis under the skirt? *ugh* I'll have to " +
                    "get another model to wear this. You. Bimbo. You're done here. ",
                button: [
                    { chatID: 11, text: "awww", callback: "ex317_8" }
                ]
            },
            {
                chatID: 11,
                speaker: "jones",
                text: "There isn't time to get another model. Bend forward I'm going " +
                    "to rip those stupid panties off myself! ",
                button: [
                    { chatID: 12, text: "*gasp*", callback: "ex317_9" }
                ]
            },
            {
                chatID: 12,
                speaker: "jones",
                text: "Better. Now walk your little ass out there and make my designs " +
                    "sexy!",
                button: [
                    { chatID: 13, text: "Yes sir.", callback: "ex317_10" }
                ]
            },
            {
                chatID: 13,
                speaker: "!bitch",
                text: "You stupid bimbo bitch! If you ever, and I mean ever, make me " +
                    "look like a fool in front of Mr. Jones again I will ruin you! " +
                    "I will make sure you end up in a gutter on the streets where only " +
                    "the rats will want to be around you! Don't fucking ever do that again! ",
                button: [
                    { chatID: 14, text: "*gulp*", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "!bitch",
                text: "Now get out there and show that ass of yours and never come back. " +
                    "I'm so done with your ugly bimbo face! ",
                button: [
                    { chatID: -1, text: "y-y-yes ma'am", callback: "hallwayCatwalk" }
                ]
            },
            {
                chatID: 15,
                speaker: "thiking",
                text: "What a mean cruel bitch! It wasn't my fault she didn't tell me " +
                    "what to wear. I'm so done with this. I'm so not coming back " +
                    "ever again! Walking out here in barely anthing for all these " +
                    "faceless people! ",
                button: [
                    { chatID: 16, text: "...", callback: "ex317_11" }
                ]
            },
            {
                chatID: 16,
                speaker: "jones",
                text: "I was just talking with " + sc.n("black") + " here about you. Love " +
                    "your look and energy! I'm going to do a private show and I " +
                    "must have you model at it. It lines up with your next class date, so " +
                    "it's perfect! You must come! I'll even give you the dress and corset your modeled " +
                    "as a thank you. Please say yes",
                button: [
                    { chatID: 17, text: "...", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "black",
                text: "She'll do it. I'll make sure she comes to the next show. We're so happy " +
                    "you chose the pink room to display your clothing lines and are more than " +
                    "happy to help. Now I've got to get this one back to class. ",
                button: [
                    { chatID: -1, text: "...", callback: "classComplete" }
                ]
            },
            {
                chatID: 18,
                speaker: "black",
                text: "I need crack several testicles of some naughty pigs today. " +
                    "Just head to the stage in the Pink Room. I've already let the " +
                    "guard know you'll be coming through. Be on your best behavior or " +
                    "I'll be cracking your testicles today too. ",
                button: [
                    { chatID: 19, text: "Yes ma'am", callback: "ex317_100" }
                ]
            },
            {
                chatID: 19,
                speaker: "!bitch",
                text: "Oh fuck. You did come. I was so hoping you knew where you " +
                    "wern't wanted. You have two brain cells fighting over " +
                    "second place and they both lost. Go in the change room and stip " +
                    "down. Mr. Jones said he had a special dress for you. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "gotoDressingRoom" }
                ]
            },
            {
                chatID: 20,
                speaker: "jones",
                text: "I've been designing women's clothing for almost 20 years. It " +
                    "really is a passion of mine. One that has made me an amazing " +
                    "amount of money over the years. When I design a piece, I don't " +
                    "think, does this accentuate her curves, or does this hide " +
                    "her flaws. No those thoughts are for amatures. ",
                button: [
                    { chatID: 21, text: "...", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "jones",
                text: "I only make clothing that when a woman wears it, it makes me " +
                    "think... Do I want to rip it off her and fuck her right here and " +
                    "now. When I first saw you, I knew you were special. So I designed " +
                    "the perfect outfit for you, and you alone. An outfit that speaks to " +
                    "the kind of woman you really are! ",
                button: [
                    { chatID: 22, text: "Yes!", callback: "ex317_103" }
                ]
            },
            {
                chatID: 22,
                speaker: "jones",
                text: "You will be wearing my piss. It for the woman that is too " +
                    "trashy to say no, and too stupid to towel off. The most " +
                    "submissive thing a woman can wear. It shows her man that she " +
                    "is just property to with as her man pleases. Now go out there and " +
                    "show off my pièce de résistance!",
                button: [
                    { chatID: 27, text: "Yes sir", callback: "ex317_104" },
                    { chatID: 23, text: "What, no! So gross. You just pissed on my ass! No way I'm walking out there like this!", callback: "ex317_104_bad" },
                ]
            },
            {
                chatID: 23,
                speaker: "jones",
                text: "No? No one ever tells me no! Get out of here! I'm going to ruin " +
                    "your carrier! You'll never model for another soul again! I should " +
                    "have known you were just another air head, idiot bimbo! Get out " +
                    "of my hallway and back to the trash you are! " + sc.n("black") + 
                    "is going to get an ear full from me, loaning me her undesirables! " +
                    "You ruined my fucking show! ",
                button: [
                    { chatID: 24, text: "Run away crying", callback: "ex317_105_bad" },
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "What the hell? Why are you streaking across my foyer? Is " +
                    "this one of " + sc.n("black") + "'s tasks?",
                button: [
                    { chatID: 26, text: "[Tell Missy what happened]", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "What the hell? Why are you streaking across my foyer? Is " +
                    "this one of " + sc.n("black") + "'s tasks?",
                button: [
                    { chatID: 26, text: "[Tell Missy what happened]", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: sc.n("jones") + " is an idiot that surrounds himself with sycophants. " +
                    "No one really cares about his options they just hold on to his kite " +
                    "string for their own financial gain. Don't worry about anything he " +
                    "says, it won't effect your life one little bit. And don't worry about " + 
                    "seeing him again. No one calls my sissies trash! I'm going to go slap " +
                    "his stupid face with my strap-on and kick him out forever. Go get dressed " +
                    "and enjoy the rest of the afternoon. Maybe get some ice cream on me. ",
                button: [
                    { chatID: -1, text: "Thanks ma'am", callback: "ex317_badend" },
                ]
            },
            {
                chatID: 27,
                speaker: "thinking",
                text: "It's one thing to walk out there in front of hundreds of strangers " +
                    "in a skimpy outfit, but to strut out there naked covered in piss... I don't " +
                    "know... Damn it. I guess I just need to put on my big girl panties " +
                    "and go out and do it! Without the panties of course. ",
                button: [
                    { chatID: 28, text: "...", callback: "ex317_105" },
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "Oh wow! They love me! They really love me! ",
                button: [
                    { chatID: 29, text: "...", callback: "ex317_106" },
                ]
            },
            {
                chatID: 29,
                speaker: "thinking",
                text: "I am a submissive trashy piss whore and everyone knows it! ",
                button: [
                    { chatID: 30, text: "...", callback: "bitch1" },
                ]
            },
            {
                chatID: 30,
                speaker: "!bitch",
                text: "*ugh* " + sc.n("jones") + " ordered me to tell you that he " +
                    "loves how you've modeled his creations. You are invited to his " +
                    "mansion in the North East corner of the residential section of the city " +
                    "if you would like to work for him. But I recommend you do not " +
                    "show your face there or I will make you life a living hell!",
                button: [
                    { chatID: 31, text: "If you don't want me there, why did you tell me? ", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "!bitch",
                text: "We always do what " + sc.n("jones") + " tells us to do. No questions asked, " +
                    "no matter what. He told me to tell you to come, but he didn't say I couldn't " +
                    "make your life miserable if you do show. Now, I've got to go, you just take " +
                    "your bimbo brain home and never come by. *grrrr*",
                button: [
                    { chatID: -1, text: "Oh. ok", callback: "sissyEnd" },
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "I'm a bit short of makeup. I'm sure they won't mind if I " +
                    "barrow some from this open kit... ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "It's so open and bright in here. I wonder how many people are " +
                    "to be here to judge us. I feel the butterflies in my stomach I'm " +
                    "so very much more nervous now!",
                button: [
                    { chatID: 34, text: "...", callback: "fashion0" },
                ]
            },
            {
                chatID: 34,
                speaker: "!man",
                text: "Why hello there. A bit early aren't you? I don't believe this " +
                    "show start for a number of hours still.",
                button: [
                    { chatID: 35, text: "Oh! hehehe. Yeah. I was just looking around. Do you work here?", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "me",
                text: "Aaaaah. The curious mind. I do love a lady that is always looking for that little " +
                    "more. I'm " + sc.n("!judge") + ", one of the judges for the show. Tell me are you one of the " +
                    "contestants?",
                button: [
                    { chatID: 37, text: "[Walk closer to the mysterious man]", callback: "fashion1" },
                    { chatID: 36, text: "Oh I am. I'm so excited to be here!", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "!man",
                text: "Well. Best of luck to you. I must be on my way. Don't want to " +
                    "give you an early advantage! ",
                button: [
                    { chatID: -1, text: "Oh. Ok. bye. [Return to the dressing room]", callback: "final_dressingRoom" },
                ]
            },
            {
                chatID: 37,
                speaker: "me",
                text: "I am. Did you know you have a smudge on your " +
                    "beautiful suit?",
                button: [
                    { chatID: 39, text: "[Lick up the stain]", callback: "fashion2" },
                    { chatID: 38, text: "...", callback: "" },

                ]
            },
            {
                chatID: 38,
                speaker: "!judge",
                text: "How dreadful. I'll need to get this cleaned right away.  ",
                button: [
                    { chatID: -1, text: "Oh. Ok. bye. [Return to the dressing room]", callback: "final_dressingRoom" },
                ]
            },
            {
                chatID: 39,
                speaker: "!judge",
                text: "Oh! Well that's one way to remove a stain. hehehe",
                button: [
                    { chatID: 40, text: "You seem to have a stain on your neck too", callback: "fashion3" },

                ]
            },
            {
                chatID: 40,
                speaker: "!judge",
                text: "Oohhhh feisty little minx, aren't you. This needs to end here. My integrity as " +
                    "a judge is too important. ",
                button: [
                    { chatID: 41, text: "[Suck his neck and run your fingers along his inner thigh]", callback: "fashion4" },

                ]
            },
            {
                chatID: 41,
                speaker: "!judge",
                text: "I do appreciate the attention, but this is wrong. I don't want to give " +
                    "you any ideas of us dating. Plus my wife would be so angry if she saw this. ",
                button: [
                    { chatID: 42, text: "[Strock his cock outside his pants]", callback: "fashion5" },
                    { chatID: -1, text: "Oh! sorry mister. [Return to the dressing room]", callback: "final_dressingRoom" },
                ]
            },
            {
                chatID: 42,
                speaker: "me",
                text: "I've been working so hard to win this beauty contest. You have " +
                    "no idea how much I've put in and would do anything to win. ",
                button: [
                    { chatID: 43, text: "[Kneel before his cock]", callback: "fashion6" },
                ]
            },
            {
                chatID: 43,
                speaker: "!judge",
                text: "Oh. I do see you are a hard worker. mmmMmmmm. I do declare that " +
                    "I can see you doing... yeah almost there ... very well in this " +
                    "contest. ",
                button: [
                    { chatID: 44, text: "[Swallow his cum you dirty bitch]", callback: "fashion7" },
                ]
            },
            {
                chatID: 44,
                speaker: "!judge",
                text: "That was quite the suprise. I've heard about you sissies, but " +
                    "hadn't met one in the wild 'til now. I must remain impartial in my " +
                    "voting, but I'm sure you'll be amazing tonight. I must run along so " +
                    "no one questions me. Best of luck tonight. ",
                button: [
                    { chatID: -1, text: "Awww thanks mister!", callback: "final_dressingRoom_good" },
                ]
            },
            {
                chatID: 45,
                speaker: "martha",
                text: "Right then, ladies! I trust you're all feeling quite prepared for this evening's delightful competition. We shall proceed with the opening number, followed immediately by your introductions. After a brief interlude for any necessary adjustments, we shall move on to the swimsuit presentation, where the judges will be observing your fitness. Following that, we have the talent showcase, a wonderful opportunity for you to display your chosen skills. Then, we shall admire your poise and grace in the evening gown segment. And finally, we will conclude with the on-stage questions, a chance for you to demonstrate your communication abilities under a touch of pressure. You'll have a few moments between each event to ensure you're looking your absolute best. Good luck to you all!",
                button: [
                    { chatID: 46, text: "...", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "martha",
                text: "For our opening presentation, I'd like each of you to choose the outfit you believe showcases you best for this occasion. Once you've made your selection, please do meet me in the hallway. I shall be waiting there for you all.",
                button: [
                    { chatID: -1, text: "...", callback: "outfitSelect" },
                ]
            },
            {
                chatID: 47,
                speaker: "p",
                text: "We have a very exciting evening for you all tonight! A chance to " +
                    "celebrate these young ladies blossoming into womanhood! When they " +
                    "started this journey they were all just frumpy boys with no direction " +
                    "in life, but look at them now! Beautiful radiant women with so much " +
                    "good to put into this world! Now let's introduce our judges. ",
                button: [
                    { chatID: 48, text: "...", callback: "fashion22" },
                ]
            },
            {
                chatID: 48,
                speaker: "p",
                text: "Our first judge is " + sc.n("!judge") + ", the world famous " +
                    "pathfinder. He doesn't just visit places, he immerses himself in " +
                    "them. With a well-worn passport and an open heart, he seeks out " +
                    "authentic experiences and untold stories, bringing the world's " +
                    "diverse beauty to life through his explorations. ",
                button: [
                    { chatID: 49, text: "...", callback: "fashion23" },
                ]
            },
            {
                chatID: 49,
                speaker: "p",
                text: "Our next judge is " + sc.n("!airwrecka") + ", " + (new Date().getFullYear() - 3) +
                    "'s Miss Fetville. She went to win State and has been an a member of our community " +
                    "helping future young ladies in their own pageant journey. ",
                button: [
                    { chatID: 50, text: "...", callback: "fashion24" },
                ]
            },
            {
                chatID: 50,
                speaker: "p",
                text: sc.n("tudor") + " our wonderful financier and a huge supporter " +
                    "of the arts in Fetville. He's not only built multinational businesses, " +
                    "but he's also built a community of love and understanding. ",
                button: [
                    { chatID: 51, text: "...", callback: "fashion25" },
                ]
            },
            {
                chatID: 51,
                speaker: "p",
                text: "Next is the legend " + sc.n("jones") + ". A man who not just knows " +
                    "fashion, but has molded and shaped it. ",
                button: [
                    { chatID: 52, text: "...", callback: "fashion26" },
                ]
            },
            {
                chatID: 52,
                speaker: "p",
                text: "Finally, our own lovely " + sc.n("orchid") + ". Last years winner " +
                    "of this compition and a rapidly growning flower of our town. She's going " +
                    "to come up here and speak on the importance of finding yourself while our " +
                    "ladies get ready for the swimsuit compition. ",
                button: [
                    { chatID: 53, text: "...", callback: "fashion20" },
                ]
            },
            {
                chatID: 53,
                speaker: "martha",
                text: "Ok ladies, get ready for the swimsuit compition. Once you've " +
                    "adorned the proper attire meet me in the hallway. ",
                button: [
                    { chatID: -1, text: "...", callback: "fashion_event2" },
                ]
            },
            {
                chatID: 54,
                speaker: "thinking",
                text: "What am I doing? I need a swimsuit.  ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 55,
                speaker: "p",
                text: "Isn't she lovely and toned, let's see what the judges think. ",
                button: [
                    { chatID: -1, text: "...", callback: "fashion27" },
                ]
            },
            {
                chatID: 56,
                speaker: "martha",
                text: "It's time for the talent portion of our delightful gathering. I want each of you to close your eyes for a moment, and truly envision the magnificent talent you are going to display. Let that vision take hold, let it shimmer and sparkle in your mind's eye. And then, my dears, I want you to dress for that vision. Adorn yourselves in a manner that not only complements but truly embodies the very essence of your chosen brilliance. I simply cannot wait to see what marvels you all unfold!",
                button: [
                    { chatID: 57, text: "...", callback: "" },
                ]
            },
            {
                chatID: 57,
                speaker: "thinking",
                text: "What talent am I going to do? What ever I pick, I need to dress for the part! ",
                button: [
                    { chatID: -1, text: "Cheerleader", callback: "cheerleader" },
                    { chatID: -1, text: "Stripper", callback: "stripper" },
                    { chatID: -1, text: "Whore", callback: "whore" },
                ]
            },
            {
                chatID: 58,
                speaker: "me",
                text: "Ready, set, strut and pose!<br/>" +
                    "Ignore our clitty everyone knows<br/>" +
                    "Flip us over, rip off our clothes<br/>" +
                    "Fuck our bussy till the cum stream flows!!!!",
                button: [
                    { chatID: 59, text: "...", callback: "fashion_cheer1" },
                ]
            },
            {
                chatID: 59,
                speaker: "me",
                text: "YEAH!!! Go Sissy School Beauty Pageant!!!!",
                button: [
                    { chatID: -1, text: "...", callback: "fashion28" },
                ]
            },
            {
                chatID: 60,
                speaker: "me",
                text: "Ready, set, strut and pose!<br/>" +
                    "Ignore our clitty everyone knows<br/>" +
                    "Flip us over our bussy's exposed!!!",
                button: [
                    { chatID: -1, text: "...", callback: "fashion28" },
                ]
            },
            {
                chatID: 61,
                speaker: "!music",
                text: "🎵She's my cherry pie🎵",
                button: [
                    { chatID: 62, text: "...", callback: "fashion_strip1" },
                ]
            },
            {
                chatID: 62,
                speaker: "!music",
                text: "🎵Tastes so good, make a grown man cry🎵",
                button: [
                    { chatID: 63, text: "...", callback: "fashion_strip2" },
                ]
            },
            {
                chatID: 63,
                speaker: "!music",
                text: "🎵Sweet cherry pie🎵",
                button: [
                    { chatID: -1, text: "...", callback: "fashion28-s" },
                ]
            },
            {
                chatID: 64,
                speaker: "!music",
                text: "🎵Sweet cherry pie🎵",
                button: [
                    { chatID: 63, text: "...", callback: "fashion_strip2" },
                ]
            },
            {
                chatID: 65,
                speaker: "me",
                text: "For my talent can I get a volunteer from the audiance please? ",
                button: [
                    { chatID: 66, text: "...", callback: "fashion_whore0" },
                ]
            },
            {
                chatID: 66,
                speaker: "me",
                text: "Perfect. Come on up! ",
                button: [
                    { chatID: 67, text: "...", callback: "fashion_whore1" },
                ]
            },
            {
                chatID: 67,
                speaker: "me",
                text: "Everyone, for my talent I'm going to take it up the ass in front " +
                    "of you all to show what a giant whore I am! Now please, sir, can " +
                    "you take your dick out so I can make you cum in me in front of everyone!",
                button: [
                    { chatID: 68, text: "...", callback: "fashion_whore2" },
                ]
            },
            {
                chatID: 68,
                speaker: "me",
                text: "Oh my! You're all so lucky. I picked a fat cock to take up " +
                    "my tight little bussy! And look at the huge balls! I'm going to " +
                    "drip buckets of cum for you all! Now watch me as I shove this fat " +
                    "cock right up my ass!",
                button: [
                    { chatID: 69, text: "...", callback: "fashion_whore3" },
                ]
            },
            {
                chatID: 69,
                speaker: "me",
                text: "Don't we all love a man that just shoves his cock deep with " +
                    "one powerful slam! He's so big it's gone past my rectum right into " +
                    "my colon! And look at those powerful thrusts! A normal sissy would " +
                    "break on the power of that cock, but not me! I'm a " +
                    "giant whore! ",
                button: [
                    { chatID: 70, text: "...", callback: "fashion_whore4" },
                ]
            },
            {
                chatID: 70,
                speaker: "me",
                text: "There it is folks! The cum shot! He must have been saving that load " +
                    "just for me! He came so deep I'll be burping up his future kids all day. ",
                button: [
                    { chatID: 71, text: "...", callback: "fashion_whore5" },
                ]
            },
            {
                chatID: 71,
                speaker: "p",
                text: "A round of applause for the biggest whore in the " +
                    "Sissy School. Let's see what the judges think.",
                button: [
                    { chatID: -1, text: "...", callback: "fashion28-w" },
                ]
            },
            {
                chatID: 72,
                speaker: "martha",
                text: "Esteemed ladies, we now come to the concluding event of the evening: the presentation of evening attire. This distinguished occasion affords you the honour of demonstrating your utmost grace, composure, and refined elegance. Conduct yourselves with the decorum and dignity befitting a true lady of distinction.",
                button: [
                    { chatID: -1, text: "...", callback: "formalEvent" },
                ]
            },
            {
                chatID: 73,
                speaker: "p",
                text: "Isn't she beautiful? When " + sc.n("me") + " first came to our " +
                    "school, she, or I should say, he, was just another ugly boy. Now look " +
                    "at here, the envy of women and the desire of men. Let's see what the " +
                    "judges think.",
                button: [
                    { chatID: -1, text: "...", callback: "formal29" },
                ]
            },
            {
                chatID: 74,
                speaker: "martha",
                text: "And now, we arrive at the moment of truth—the question and answer portion. As the judges most assuredly have no interest in hearing a sissy’s sentimental notions on world peace, each shall instead present you with a question to uncover the depths of your character. In this round, you shall stand exposed, of course—with naught to conceal the essence of who you truly are. Let the veil fall, my dear, and show us the soul beneath the sparkle. Now to remove those ridged chastity devices from those that still wear them. ",
                button: [
                    { chatID: -1, text: "...", callback: "qanda" },
                ]
            },
            {
                chatID: 75,
                speaker: "thinking",
                text: "What am I doing? I have to be nude.  ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 76,
                speaker: "!judge",
                text: "If you had to choose between being the center of a gangbang, a lovely date with " +
                    "a nice boy, or sex with a girl, which would you choose? ",
                button: [
                    { chatID: 77, text: "A Gangbang!", callback: "j1-1" },
                    { chatID: 78, text: "Date with a nice boy.", callback: "j1-2" },
                    { chatID: -1, text: "Sex with a girl.", callback: "j1-3" },
                ]
            },
            {
                chatID: 77,
                speaker: "!judge",
                text: "Excellent answer. You do look like the centerpiece of a " +
                    "giant cock gangbang. I would very much enjoy watching that. ",
                button: [
                    { chatID: 81, text: "...", callback: "fashion31" },
                ]
            },
            {
                chatID: 78,
                speaker: "!judge",
                text: "A fine answer, I suppose. Such a waste of a body like yours to " +
                    "only be used by one boy. But we have our preferences. ",
                button: [
                    { chatID: 81, text: "...", callback: "fashion31" },
                ]
            },
            {
                chatID: 79,
                speaker: "!judge",
                text: "Don't lie. We all know you're a cock hungy sissy. Earlier today " +
                    "you came up to me to suck my penis without any prompting from me. " +
                    "I'm dissapointed in your lie to us and yourself. ",
                button: [
                    { chatID: 81, text: "oh damn", callback: "fashion31" },
                ]
            },
            {
                chatID: 80,
                speaker: "!judge",
                text: "You say that, but you have turned your body into a very desirable " +    
                    "vessle for cock. I find your answer stinks, like moldy cum.  ",
                button: [
                    { chatID: 81, text: "?", callback: "fashion31" },
                ]
            },
            {
                chatID: 81,
                speaker: "!airwrecka",
                text: "If youse had to pick a cock to suck, what kinda cock do youse choose?",
                button: [
                    { chatID: 83, text: "Any cock", callback: "j2-2" },
                    { chatID: 83, text: "Uncircumcised", callback: "j2-2" },
                    { chatID: 83, text: "Musky Cock", callback: "j2-2" },
                    { chatID: 82, text: "BBC", callback: "j2-1" },
                    { chatID: 83, text: "A big cock", callback: "j2-2" },
                ]
            },
            {
                chatID: 82,
                speaker: "!airwrecka",
                text: "O.M.G! Me too! You go girl! Youse know a cock worth taking! " +
                    "That's my bad bitch! ",
                button: [
                    { chatID: 84, text: "...", callback: "fashion32" },
                ]
            },
            {
                chatID: 83,
                speaker: "!airwrecka",
                text: "eh. Youse haven't tried enough different cocks if that's what " +
                    "you think. Ya basic. ",
                button: [
                    { chatID: 84, text: "...", callback: "fashion32" },
                ]
            },
            {
                chatID: 84,
                speaker: "tudor",
                text: "Very delighted to see you up there. I know your journey has been " +
                    "long and hard, like the many cocks you've taken, hehehe. So tell us, " +
                    "why do you do it? Why be the sissy we see before us?",
                button: [
                    { chatID: 85, text: "Men love a curvy body, I love a hard cock.", callback: "j3-1" },
                    { chatID: 85, text: "I may have a penis, but deep down I am a woman.", callback: "j3-1" },
                    { chatID: 85, text: "Just bored I guess", callback: "j3-1" },
                    { chatID: 85, text: "The sissygasms! ", callback: "j3-1" },
                ]
            },
            {
                chatID: 85,
                speaker: "tudor",
                text: "Interesting. When I started this school I had my reason, but over " +
                    "the years I have found that each sissy had their own reasons for being " +
                    "here. Of course most just wanted to get fucked like a woman, but some. " +
                    "Some had some truly interesting stories. I'm glad we could help you " +
                    "create your own story. ",
                button: [
                    { chatID: 86, text: "...", callback: "fashion33" },
                ]
            },
            {
                chatID: 86,
                speaker: "jones",
                text: "The only real reason to have a sissy is to own your own submissive " +
                    "cock hole that you can punish and toy with however you like. If I ever " +
                    "let you choose your punishment for my amusement, what would you choose? ",
                button: [
                    { chatID: 87, text: "Over the knee spanking", callback: "j4-2" },
                    { chatID: 88, text: "Whipped till I'm bleeding", callback: "j4-1" },
                    { chatID: 88, text: "Used as a urinal for you and your friends", callback: "j4-1" },
                    { chatID: 88, text: "Double fisted while bound", callback: "j4-1" },
                    { chatID: 89, text: "Oh no. No way", callback: "j4-3" },
                ]
            },
            {
                chatID: 87,
                speaker: "jones",
                text: "Far too tame for an ass like yours. You need to try harder. ",
                button: [
                    { chatID: -1, text: "...", callback: "fashion34" },
                ]
            },
            {
                chatID: 88,
                speaker: "jones",
                text: "I can see you know your place. You will make a fine sissy.  ",
                button: [
                    { chatID: -1, text: "...", callback: "fashion34" },
                ]
            },
            {
                chatID: 89,
                speaker: "jones",
                text: "I love a sissy that fights back. I would love to break you.",
                button: [
                    { chatID: -1, text: "...", callback: "fashion34" },
                ]
            },
            {
                chatID: 90,
                speaker: "orchid",
                text: "That is a fat cock honey! With a cock like that my only question " +
                    "is if you could use me however you wanted, would you stuff that cock " +
                    "in my mouth or bussy?",
                button: [
                    { chatID: 92, text: "mouth", callback: "j5-3" },
                    { chatID: 92, text: "bussy", callback: "j5-2" },
                ]
            },
            {
                chatID: 91,
                speaker: "orchid",
                text: "Awww, look at that tiny little clitty! Does it even work anymore? " +
                    "Hahahaha! Has a girl even seen it? I'll bet any girl that sees it just " +
                    "laughs and leaves you with your pants down!!!",
                button: [
                    { chatID: 93, text: "No girls has seen my tiny clitty", callback: "j5-1" },
                    { chatID: 93, text: "They all just laugh at my tiny clitty", callback: "j5-1" },
                    { chatID: 93, text: "One girl tried, but gave up because it's too small", callback: "j5-1" },
                    { chatID: 93, text: "Boys laugh at it before bending me over and fucking me.", callback: "j5-1" },

                ]
            },
            {
                chatID: 92,
                speaker: "p",
                text: "I'm sure those two are going to meet up after the show!  ",
                button: [
                    { chatID: -1, text: "bussy", callback: "fashion35" },
                ]
            },
            {
                chatID: 93,
                speaker: "p",
                text: "I'm sure we can all agree that this sissy is no longer a man " +
                    "and is only worth the cocks in her holes!",
                button: [
                    { chatID: -1, text: "...", callback: "fashion35" },
                ]
            },
            {
                chatID: 94,
                speaker: "p",
                text: "Oh wow, someone's horny! When we asked for an evening dress we didn't mean how " +
                    "you dress on date in the evening! Let's see what the judges think " +
                    "of this slut!",
                button: [
                    { chatID: -1, text: "...", callback: "fashion29" },
                ]
            },
            {
                chatID: 95,
                speaker: "p",
                text: "Isn't she lovely folks. Style, grace, a cute little face. The kind " +
                    "of girl that you can take home to meet your parents, then take home " +
                    "and put it in any hole. Let's see what the judges think. ",
                button: [
                    { chatID: -1, text: "...", callback: "fashion29" },
                ]
            },
            {
                chatID: 96,
                speaker: "martha",
                text: "And so, this most enchanting evening draws to its splendid close. The hour is upon us to bestow the crown — a symbol of grace, poise, and true refinement — upon the lady deemed most worthy of such an honour. Let all assembled now make their way to the grand stage, where the coronation shall commence! ",
                button: [
                    { chatID: -1, text: "...", callback: "pfinal" },
                ]
            },
            {
                chatID: 97,
                speaker: "p",
                text: "And now we will celebrate the sissiest sissy. The boy that is " +
                    "the most girly. The object of our desires! ",
                button: [
                    { chatID: 98, text: "...", callback: "crown0" },
                ]
            },
            {
                chatID: 98,
                speaker: "p",
                text: "Our Sissy Runner up is.... " + sc.n("!kareem") + "! She has " +
                    "shown real growth and poise on her transformation from just another " +
                    "lame boy to this radiant girl you see before you. I remember the first " +
                    "penis she put in her mouth! She was so scared. But look at her now. Men " +
                    "will be lined around the block to put their penis inside her!",
                button: [
                    { chatID: -1, text: "...", callback: "crown1" },
                ]
            },
            {
                chatID: 99,
                speaker: "p",
                text: "And the winner is.... " + sc.n("!timothy") + "!!! Sissies " +
                    "everywhere want to be her; men want to breed her. Her brain is " +
                    "empty, her tits are perky, her clitty is a nub, and her bussy is both " +
                    "bottomless and tight! Everyone meet this year's Sissy School Pageant winner! ",
                button: [
                    { chatID: 100, text: "...", callback: "" },
                ]
            },
            {
                chatID: 100,
                speaker: "p",
                text: "That's all for tonight folks! You'll be able to visit your favorite sissy " +
                    "in the Pink Room next week! Don't forget to tip them! Sexy clothes and makeup " +
                    "aren't cheap. G'night folks! Don't forget to visit the glory wall " +
                    "on you way out! ",
                button: [
                    { chatID: -1, text: "...", callback: "crownEnd" },
                ]
            },
            {
                chatID: 101,
                speaker: "p",
                text: "And the winner is.... " + sc.n("me") + "!!! Sissies " +
                    "everywhere want to be her; men want to breed her. She has come " +
                    "such a long way on this journey and has proven she is the sissiest of " +
                    "all sissies! Everyone meet your Sissy School Pageant Winner!!!!",
                button: [
                    { chatID: -1, text: "Yeah me!!", callback: "crownEnd" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};