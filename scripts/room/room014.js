//motherRoom
var room14 = {};

room14.main = function () {
    var btnList = new Array();

    if (sc.getTimeline("landlord").thisRoom) {
        if (g.hourBetween(7, 22)) {
            nav.bg("14_motherRoom/14_motherRoomNightLight.jpg");
        }
    }

    if (g.pass === "room14_confess1") {
        g.pass = null;
        nav.bg("14_motherRoom/confess0.jpg");
        chat(162, 14);
    }
    else {

        g.internal = { pussy: 0, asshole: 0 };

        if (!g.hourBetween(6, 22)) {
            if (sc.getTimeline("bigguy").thisRoom) {
                btnList = [{
                    "type": "btn",
                    "name": "dickSleep",
                    "left": 986,
                    "top": 696,
                    "width": 713,
                    "height": 193,
                    "image": "14_motherRoom/14_motherAsleepDick.png"
                }];
            }
            else {
                btnList = [{
                    "type": "btn",
                    "name": "motherSleep",
                    "left": 1031,
                    "top": 779,
                    "width": 591,
                    "height": 114,
                    "image": "14_motherRoom/14_motherAsleep.png"
                }];
            }
        }
        else if (sc.getTimeline("landlord").thisRoom) {
            if (sc.getTimeline("bigguy").thisRoom) {
                if (daily.get("bigguy")) {
                    btnList = [{
                        "type": "btn",
                        "name": "couple",
                        "left": 737,
                        "top": 0,
                        "width": 714,
                        "height": 1080,
                        "image": "14_motherRoom/couple.png"
                    }];
                }
                else {
                    if (sc.getMission("landlord", "sissy").notStarted) {
                        daily.set("bigguy");
                        nav.bg("14_motherRoom/bg_1.jpg");
                        chat(33, 14);
                    }
                    else {
                        daily.set("bigguy");
                        switch (sc.taskGetStep("bigguy", "sissy")) {
                            case -1:
                            case 0:
                                sc.modLevel("bigguy", 100, 10);
                                sc.startMission("bigguy", "sissy");
                                sc.show("bigguy");
                                sc.completeMissionTask("bigguy", "sissy", 0);
                                nav.bg("14_motherRoom/bigguy_0.jpg");
                                chat(130, 14);
                                break;
                            case 1:
                                if (cl.c.chest < 2) {
                                    nav.button({
                                        "type": "img",
                                        "name": "couple",
                                        "left": 737,
                                        "top": 0,
                                        "width": 714,
                                        "height": 1080,
                                        "image": "14_motherRoom/couple1.png"
                                    }, 14);
                                    chat(155, 14);
                                }
                                else {
                                    sc.modLevel("bigguy", 100, 10);
                                    nav.bg("14_motherRoom/bigguy_10.jpg");
                                    g.internal = 0;
                                    nav.next("bigguy_11");
                                }
                                break;
                            case 2:
                                sc.modLevel("bigguy", 200, 10);
                                nav.button(
                                    {
                                        "type": "img",
                                        "name": "couple",
                                        "left": 737,
                                        "top": 0,
                                        "width": 714,
                                        "height": 1080,
                                        "image": "14_motherRoom/couple1.png"
                                    }, 14);
                                chat(137, 14);
                                break;
                            case 3:
                            case 4:
                                nav.button(
                                    {
                                        "type": "img",
                                        "name": "couple",
                                        "left": 737,
                                        "top": 0,
                                        "width": 714,
                                        "height": 1080,
                                        "image": "14_motherRoom/couple2.png"
                                    }, 14);
                                chat(156, 14);
                                break;
                            case 5:
                                sc.modLevel("bigguy", 200, 10);
                                nav.button(
                                    {
                                        "type": "img",
                                        "name": "couple",
                                        "left": 737,
                                        "top": 0,
                                        "width": 714,
                                        "height": 1080,
                                        "image": "14_motherRoom/couple2.png"
                                    }, 14);
                                chat(152, 14);
                                break;
                        }
                    }
                }
            }
            else {
                if (sc.getMission("landlord", "man").notStarted && g.rand(0, 2) === 0 && sc.getLevel("landlord") < 5) {
                    nav.bg("14_motherRoom/mast.jpg");
                    chat(69, 14);
                    btnList = new Array();
                }
                else {
                    btnList = [{
                        "type": "btn",
                        "name": "motherRobe",
                        "left": 844,
                        "top": 195,
                        "width": 499,
                        "height": 885,
                        "image": "14_motherRoom/14_motherRobe.png"
                    }];
                }
            }
        }
        else {
            if (!daily.get("momChoreBed")) {
                btnList.push({
                    "type": "btn",
                    "name": "bedMessy",
                    "title": "Make Bed?",
                    "left": 939,
                    "top": 755,
                    "width": 776,
                    "height": 325,
                    "image": "14_motherRoom/14_bed.png"
                });
            }
            btnList.push({
                "type": "btn",
                "name": "closet",
                "left": 414,
                "top": 375,
                "width": 461,
                "height": 538,
                "image": "14_motherRoom/14_closet.png"
            });
            btnList.push({
                "type": "btn",
                "name": "dresser",
                "left": 1569,
                "top": 781,
                "width": 317,
                "height": 299,
                "image": "14_motherRoom/dresserDay.png"
            });
        }
        console.log(btnList);
        navList = [16];
        $.each(btnList, function (i, v) {
            nav.button(v, 14);
        });

        nav.buildnav(navList);
    }
};

room14.btnclick = function (name) {
    switch (name) {
        case "closet":
            if (!daily.get("momRaidCloset"))
                char.room(17);
            else
                chat(1, 14);
            break;
        case "dresser":
            nav.killall();
            nav.bg("14_motherRoom/014_dresserDrawer.jpg");
            if (!cl.hasClothing("buttplug", "s")) {
                nav.button({
                    "type": "btn",
                    "name": "buttplug",
                    "left": 391,
                    "top": 378,
                    "width": 338,
                    "height": 394,
                    "image": "14_motherRoom/d_plug.png"
                }, 14);
            }
            nav.button({
                "type": "btn",
                "name": "pic",
                "left": 858,
                "top": 168,
                "width": 765,
                "height": 655,
                "image": "14_motherRoom/d_pic.png"
            }, 14);
            nav.back("reset");
            break;
        case "bedMessy":
            nav.killbutton("bedMessy");
            sc.modLevel("landlord", 15, 4);
            daily.set("momChoreBed");
            gv.mod("money", 5);
            chat(9, 14);
            break;
        case "pic":
            nav.killall();
            nav.bg("14_motherRoom/014_dresserDrawer1.jpg");
            chat(5, 14);
            break;
        case "buttplug":
            nav.killall();
            nav.bg("14_motherRoom/014_dresserDrawer2.jpg");
            chat(6, 14);
            break;
        case "reset":
            char.room(14);
            break;
        case "motherRobe":
            if (sc.getMission("landlord", "sissy").notStarted) {
                if (!daily.get("landlord")) {
                    if (gv.get("jobapplyconst") < 2)
                        chat(10, 14);
                    else if (sc.getLevel("landlord") < 5) {
                        if (!daily.get("landlordChat")) {
                            daily.set("landlordChat");
                            chat(70, 14);
                        }
                        else
                            chat(14, 14);
                    }
                    else if (daily.get("landlord")) {
                        chat(14, 14);
                    }
                    else {
                        var llstep = sc.taskGetStep("landlord", "man");
                        daily.set("landlord");
                        switch (llstep) {
                            case -1: chat(15, 14); break;
                            case 0: chat(11, 14); break;
                            case 1: chat(17, 14); break;
                            case 2: chat(26, 14); break;
                            case 3: chat(59, 14); break;
                            case 4: chat(45, 14); break;
                            case 5: chat(54, 14); break;
                            case 6: chat(75, 14); break;
                            case 7: chat(81, 14); break;
                            case 8: chat(94, 14); break;
                            case 9:
                            case 10:
                                sc.completeMissionTask("landlord", "man", 9);
                                nav.modbutton("motherRobe", "14_motherRoom/14_motherRobeLaugh.png", null, "img");
                                sc.select("fuck_missionary", "14_motherRoom/icon_missionary.png", 0);
                                sc.select("fuck_doggy", "14_motherRoom/icon_doggy.png", 1);
                                sc.select("fuck_bj", "14_motherRoom/icon_bj.png", 2);
                                sc.selectCancel("fuck_cancel", 3);
                                break;
                            default: chat(14, 14); break;
                        }
                    }
                }
                else
                    chat(14, 14);
            }
            else {
                if (sc.getMissionTask("landlord", "misc", 2).notStarted) {
                    sc.completeMissionTask("landlord", "misc", 2);
                    chat(121, 14);
                }
                else {
                    chat(122, 14);
                }
            }
            break;
        case "fuck_missionary":
        case "fuck_doggy":
        case "fuck_bj":
            if (cl.c.chastity !== null || cl.getEntry("panties", cl.c.panties) === "f") {
                nav.killbutton("fuck_missionary");
                nav.killbutton("fuck_doggy");
                nav.killbutton("fuck_bj");
                nav.killbutton("fuck_cancel");
                if (cl.c.chastity !== null)
                    chat(60, 14);
                else
                    chat(73, 14);
            }
            else {
                switch (name) {
                    case "fuck_missionary":
                        nav.killall();
                        nav.bg("14_motherRoom/task_9_m_0.jpg");
                        chat(106, 14);
                        break;
                    case "fuck_doggy":
                        nav.killall();
                        nav.bg("14_motherRoom/task_9_d_0.jpg");
                        chat(109, 14);
                        break;
                    case "fuck_bj":
                        nav.killbutton("fuck_missionary");
                        nav.killbutton("fuck_doggy");
                        nav.killbutton("fuck_bj");
                        nav.killbutton("fuck_cancel");
                        chat(113, 14);
                        break;
                }
            }
            break;
        case "task_9_next":
            nav.killbutton("task_9_next");
            chat(107, 14);
            break;
        case "task_9d_next":
            nav.killbutton("task_9d_next");
            chat(110, 14);
            break;
        case "fuck_cancel":
            char.room(16);
            break;
        case "level4win":
            nav.bg("14_motherRoom/task1_2.jpg");
            g.internal = 0;
            nav.next("task1_2");
            sc.modLevel("landlord", 999, 4);
            break;
        case "level4lose":
            nav.killall();
            nav.bg("14_motherRoom/task1_1_lose.jpg");
            sc.modLevel("landlord", 15, 4);
            chat(20, 14);
            break;
        case "task1_2":
            if (g.internal === 0) {
                g.internal = 1;
                nav.bg("14_motherRoom/task1_3.jpg");
            }
            else {
                nav.killbutton("task1_2");
                nav.bg("14_motherRoom/task1_4.jpg");
                chat(22, 14);
            }
            break;
        case "motherSleep":
            nav.kill();
            nav.bg("14_motherRoom/sleep_bed.jpg");
            if (!pic.has("landlordSleep")) {
                nav.button({
                    "type": "btn",
                    "name": "takePic",
                    "left": 502,
                    "top": 381,
                    "width": 259,
                    "height": 124,
                    "image": "14_motherRoom/camera.png"
                }, 14);
            }
            
            nav.button({
                "type": "btn",
                "name": "sleepmolest",
                "left": 959,
                "top": 481,
                "width": 297,
                "height": 409,
                "image": "14_motherRoom/sleepmolest.png"
            }, 14);
            break;
        case "takePic":
            nav.killall();
            nav.bg("14_motherRoom/white.jpg");
            pic.add("landlordSleep");
            daily.set("landlordmolest");
            g.roomTimeout = setTimeout(function () {
                nav.bg("14_motherRoom/sleep_angry.jpg");
                chat(31, 14);
            }, 500);
            break;
        case "sleepmolest":
            if (daily.get("landlordmolest")) {
                chat(27, 14);
                nav.killbutton("sleepmolest");
            }
            else {
                sc.select("icon_finger", "14_motherRoom/icon_finger.png", 0);
                sc.select("icon_ass", "14_motherRoom/icon_ass.png", 1);
                sc.select("icon_lickass", "14_motherRoom/icon_lickass.png", 2);
                sc.select("icon_fuck", "14_motherRoom/icon_fuck.png", 3);
                sc.selectCancel("motherSleep", 4);
                nav.killbutton("sleepmolest");
                nav.killbutton("takePic");
            }
            break;
        case "icon_finger":
            nav.killall();
            sex.mod("hand", true, "f", 1);
            gv.mod("horny", 50);
            nav.bg("14_motherRoom/Sleeping_FingerPussy.gif");
            nav.next("icon_finish");
            break;
        case "icon_ass":
            nav.killall();
            sex.mod("hand", true, "f", 1);
            gv.mod("horny", 50);
            nav.bg("14_motherRoom/Sleeping_FingerAhole.gif");
            nav.next("icon_finish");
            break;
        case "icon_lickass":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "sleep",
                "left": 673,
                "top": 367,
                "width": 800,
                "height": 600,
                "image": "14_motherRoom/sleep_blick.gif"
            }, 14);
            nav.next("icon_finish");
            break;
        case "icon_fuck":
            nav.killall();
            nav.bg("14_motherRoom/sleep_dick.jpg");
            nav.next("icon_fuck1");
            break;
        case "icon_fuck1":
            nav.killbutton("icon_fuck1");
            nav.bg("14_motherRoom/sleep_angry.jpg");
            chat(29, 14);
            break;
        case "icon_finish":
            nav.killall();
            nav.bg("14_motherRoom/sleep_happy.jpg");
            daily.set("landlordmolest");
            sc.modLevel("landlord", 26, 7);
            chat(28, 14);
            break;
        case "couple":
            var bgstep = sc.taskGetStep("bigguy", "straight");
            if (bgstep === 0) {
                chat(34, 14);
            }
            else
                chat(36, 14);
            break;
        case "dickSleep":
            chat(37, 14);
            break;
        case "task_3_3":
            nav.kill();
            if (levels.get("oral").l < 1) {
                g.popUpNotice("Oral level too low. Her orgasm failed. ");
                nav.bg("14_motherRoom/task_3_3.jpg");
                chat(50, 14);
            }
            else {
                nav.bg("14_motherRoom/task_3_3a.jpg");
                chat(51, 14);
            }
            break;
        case "task_4_1":
            nav.kill();
            if (levels.get("oral").l < 1) {
                g.popUpNotice("Oral level too low. Her orgasm failed. ");
                nav.bg("14_motherRoom/task_3_3.jpg");
                chat(56, 14);
            }
            else {
                nav.bg("14_motherRoom/task_3_3a.jpg");
                chat(51, 14);
            }
            break;
        case "task_4_2":
            nav.kill();
            nav.bg("14_motherRoom/task_3_5.jpg");
            chat(57, 14);
            break;
        case "task_3_4":
            nav.killbutton("task_3_4");
            chat(53, 14);
            break;
        case "task_9_b_2":
            nav.killbutton("task_9_b_2");
            levels.mod("xdress", 20, 999);
            levels.mod("cum", 20, 999);
            chat(120, 14);
            break;
        case "screwdriver":
        case "purpleDildo":
        case "pinkDildo":
        case "whiteDildo":
        case "blackDildo":
        case "blackBallsDildo":
        case "towerDildo":
        case "pinkFatDildo":
        case "horseDildo":
            if (levels.analTake(inv.anal(name)).c > 2) {
                chat(124, 14);
            }
            else {
                if (name !== "screwdriver")
                    nav.killbutton("screwdriver");
                if (name !== "purpleDildo")
                    nav.killbutton("purpleDildo");
                if (name !== "pinkDildo")
                    nav.killbutton("pinkDildo");
                if (name !== "whiteDildo")
                    nav.killbutton("whiteDildo");
                if (name !== "blackDildo")
                    nav.killbutton("blackDildo");
                if (name !== "blackBallsDildo")
                    nav.killbutton("blackBallsDildo");
                if (name !== "towerDildo")
                    nav.killbutton("towerDildo");
                if (name !== "pinkFatDildo")
                    nav.killbutton("pinkFatDildo");
                if (name !== "horseDildo")
                    nav.killbutton("horseDildo");
                g.internal = name;
                nav.killall();
                nav.bg("14_motherRoom/butt1.jpg");
                if (name === "horseDildo" || name === "pinkFatDildo" || name === "towerDildo")
                    chat(126, 14);
                else
                    chat(125, 14);
            }
            break;
        case "cancelDildo":
            char.room(14);
            break;
        case "bigguy_11":
            if (g.internal === 0)
                nav.bg("14_motherRoom/bigguy_11.jpg");
            else if (g.internal === 1) {
                nav.bg("14_motherRoom/bigguy_12.jpg");
                nav.button({
                    "type": "img",
                    "name": "bigguy_12_0x",
                    "left": 1033,
                    "top": 486,
                    "width": 278,
                    "height": 594,
                    "image": "14_motherRoom/bigguy_12_0.png"
                }, 14);
            }
            else if (g.internal === 2) {
                nav.killbutton("bigguy_11");
                nav.killbutton("bigguy_12_0x");
                g.internal = 1;
                nav.button({
                    "type": "tongue",
                    "name": "bigguy_12_0",
                    "left": 1033,
                    "top": 486,
                    "width": 278,
                    "height": 594,
                    "image": "14_motherRoom/bigguy_12_0.png"
                }, 14);
                chat(131, 14);
            }
            g.internal++;
            break;
        case "bigguy_12_0":
            nav.modbutton("bigguy_12_0", "14_motherRoom/bigguy_12_" + g.internal + ".png", null, null);
            if (g.internal > 4) {
                levels.mod("cum", 25, 999);
                sc.completeMissionTask("bigguy", "sissy", 1);
                nav.killbutton("bigguy_12_0");
                chat(134, 14);
            }
            g.internal++;
            break;
        case "bigguy_25":
            if (g.internal === 0)
                nav.bg("14_motherRoom/bigguy_25.jpg");
            else if (g.internal === 6)
                nav.bg("14_motherRoom/bigguy_28.jpg");
            else if (g.internal > 6) {
                nav.killbutton("bigguy_25");
                chat(147, 14);
                return;
            }
            else if(g.internal % 2 === 1)
                nav.bg("14_motherRoom/bigguy_26.jpg");
            else
                nav.bg("14_motherRoom/bigguy_27.jpg");
            g.internal++;
            break;
        case "bigguy_30_dick":
            if (g.internal.dick < 4) {
                nav.modbutton("bigguy_30_dick", "14_motherRoom/bigguy_30_dick_" + g.internal.dick + ".png", null, null);
            }
            else {
                nav.killbutton("bigguy_30_dick");
                levels.oralGive(5, true, false, "m");
                if (g.internal.pussy > 4) {
                    char.addtime(180);
                    if (!g.internal.mission2Complete) {
                        sc.completeMissionTask("bigguy", "sissy", 2);
                        chat(149, 14);
                    }
                    else {
                        sc.completeMissionTask("bigguy", "sissy", 3);
                        chat(161, 14);
                    }
                }
            }
            g.internal.dick++;
            break;
        case "bigguy_30_pussy":
            if (g.internal.pussy < 4) {
                nav.modbutton("bigguy_30_pussy", "14_motherRoom/bigguy_30_pussy_" + g.internal.pussy + ".png", null, null);
            }
            else {
                nav.killbutton("bigguy_30_pussy");
                levels.oralGive(3, true, false, "f");
                if (g.internal.dick > 4) {
                    char.addtime(120);
                    if (!g.internal.mission2Complete) {
                        sc.completeMissionTask("bigguy", "sissy", 2);
                        chat(149, 14);
                    }
                    else {
                        sc.completeMissionTask("bigguy", "sissy", 3);
                        chat(161, 14);
                    }
                }
            }
            g.internal.pussy++;
            break;
        case "bigguy_40":
            nav.bg("14_motherRoom/bigguy_" + g.internal + ".jpg");
            if (g.internal > 44) {
                char.addtime(120, 14);
                nav.killbutton("bigguy_40");
                levels.anal(5, false, "m", false);
                levels.oralGive(5, true, false, "m");
                chat(154, 14);
            }
            g.internal++;
            break;
        case "bigguy_x":
            switch (g.internal) {
                case 0:
                    nav.bg("14_motherRoom/bigguy_x1.jpg");
                    break;
                case 1:
                    nav.bg("14_motherRoom/bigguy_27.jpg");
                    break;
                case 2:
                    nav.bg("14_motherRoom/bigguy_28.jpg");
                    break;
                case 3:
                    nav.killall();
                    gv.mod("arousal", 50);
                    chat(159, 14);
                    break;
            }
            g.internal++;
            break;
        case "confess_fight_win":
            nav.killall();
            zcl.displayMain(-500, 600, .3, "clothes", true);
            nav.bg("14_motherRoom/confess_win.jpg");
            chat(183, 14);
            break;
        case "confess_fight":
            nav.killall();
            nav.bg("14_motherRoom/confess_fight.jpg");
            quickFight.init(30, sc.n("bigguy"), "confess_fight_win", "confess_bitch", "confess_bitch", 14);
            break;
        case "confess_bitch":
            nav.killall();
            cl.nude();
            nav.bg("14_motherRoom/confess3.jpg");
            chat(177, 14);
            break;
        case "confess4":
            if (g.internal > 45) {
                nav.killbutton("confess4");
                char.addtime(120);
                levels.anal(5, false, "m", false);
                levels.oralGive(5, true, false, "m");
                nav.bg("14_motherRoom/14_motherRoomNightLight.jpg");
                nav.button({
                    "type": "img",
                    "name": "couple",
                    "left": 737,
                    "top": 0,
                    "width": 714,
                    "height": 1080,
                    "image": "14_motherRoom/couple2.png"
                }, 14);
                chat(181, 14);
            }
            else {
                nav.bg("14_motherRoom/bigguy_" + g.internal + ".jpg");
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room14.chatcatch = function (callback) {
    switch (callback) {
        case "task_2_2":
        case "task_2_3":
        case "task_2_4":
        case "task_2_5":
        case "task_3_2":
        case "task_5_4":
        case "task_5_5":
        case "task_5_6":
        case "task_5_3":
        case "phone2":
        case "task_7_1":
        case "task_7_2":
        case "task_7_3":
        case "task_7_4":
        case "task_7_5":
        case "task_7_6":
        case "task_7_7":
        case "task_7_9":
        case "task_7_10":
        case "task_7_11":
        case "task_8_1":
        case "task_8_2":
        case "task_8_3":
        case "task_8_4":
        case "task_8_5":
        case "task_8_6":
        case "task_9_d_2":
        case "task_9_b_1":
        case "bigguy_21":
        case "bigguy_22":
        case "bigguy_23":
        case "bigguy_24":
        case "confess2":
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "confess1":
            char.settime(20, 4);
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "task1_1":
        case "task1_4":
        case "task_3_5":
        case "task_5_1":
        case "phone0":
        case "phone1":
        case "task_7_0":
        case "task_9_b_0":
        case "bigguy_20":
            nav.killall();
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "bigguy_25":
            g.internal = 0;
            nav.next("bigguy_25");
            break;
        case "task1_3":
            nav.bg("14_motherRoom/" + callback + ".jpg");
            sc.modLevel("landlord", 30, 5);
            levels.mod("dom", 53, 999);
            break;
        case "reset":
            char.room(14);
            break;
        case "resetDresser":
            room14.btnclick("dresser");
            break;
        case "stealplug":
            cl.add("buttplug", "s");
            levels.mod("xdress", 40, 2);
            room14.btnclick("dresser");
            break;
        case "domlaugh":
            levels.mod("dom", 38, 999);
            sc.modLevel("landlord", 20, 999);
            nav.modbutton("motherRobe", "14_motherRoom/14_motherRobeLaugh.png", null, null);
            break;
        case "ll_man_1":
            sc.completeMissionTask("landlord", "man", 0, true);
            sc.modLevel("landlord", 53, 4);
            char.addtime(47);
            char.room(16);
            break;
        case "task1_2":
            if (sc.getLevel("landlord") > 5) {
                nav.bg("14_motherRoom/task1_2.jpg");
                g.internal = 0;
                nav.next("task1_2");
            }
            else {
                chat(21, 14);
            }
            break;
        case "level4Roll":
            charisma.init(8 - sc.getLevel("landlord"), "level4win", "level4lose", 14);
            break;
        case "task1_leave":
            sc.completeMissionTask("landlord", "man", 1, true);
            sc.modLevel("landlord", 53, 5);
            char.settime(22, 14);
            char.room(16);
            break;
        case "levelLeave":
            sc.modLevel("landlord", 22, 4);
            char.addtime(47);
            daily.set("landlord");
            char.room(16);
            break;
        case "spanking":
            daily.set("landlordmolest");
            g.pass = "sleepSpank";
            char.room(21);
            break;
        case "dom":
            levels.mod("dom", 20, 999);
            break;
        case "leave":
            daily.set("landlord");
            char.room(16);
            break;
        case "leaveSub":
            daily.set("landlord");
            levels.mod("sub", 30, 999);
            char.room(16);
            break;
        case "bg_s_0_end":
            sc.char[sc.i("bigguy")].display = true;
            sc.completeMissionTask("bigguy", "straight", 0, true);
            char.addtime(37);
            daily.set("bigguy");
            char.room(16);
            break;
        case "task2_1":
            nav.killall();
            levels.mod("dom", 20, 999);
            nav.bg("14_motherRoom/task1_2.jpg");
            break;
        
        case "task_3_1":
            nav.kill();
            levels.mod("dom", 20, 999);
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "task_3_3":
            nav.button({
                "type": "tongue",
                "name": "task_3_3",
                "left": 1197,
                "top": 692,
                "width": 107,
                "height": 145,
                "image": "14_motherRoom/task_3_3.png"
            }, 14);
            break;
        case "task_3_4":
            nav.bg("14_motherRoom/" + callback + ".jpg");
            nav.next("task_3_4");
            break;
        case "task_2_end":
            sc.modLevel("landlord", 50, 10);
            sc.completeMissionTask("landlord", "man", 2, true);
            char.addtime(30);
            daily.set("landlord");
            char.room(16);
            break;
        case "task_3_end":
            levels.oralGive(3, false, false, "f");
            gv.mod("horny", 75);
            levels.mod("oral", 50, 0);
            char.addtime(60);
            sc.modLevel("landlord", 50, 10);
            sc.completeMissionTask("landlord", "man", 4, true);
            daily.set("landlord");
            char.room(16);
            break;
        case "task_4_end":
            levels.oralGive(3, false, false, "f");
            gv.mod("horny", 75);
            levels.mod("oral", 50, 0);
            char.addtime(60);
            sc.modLevel("landlord", 5, 3);
            daily.set("landlord");
            char.room(16);
            break;
        case "task_4_goodend":
            levels.oralGive(3, false, false, "f");
            char.addtime(60);
            sc.modLevel("landlord", 75, 10);
            if (!sc.getMissionTask("landlord", "man", 4).complete) {
                sc.completeMissionTask("landlord", "man", 4, true);
            }
            sc.completeMissionTask("landlord", "man", 5, true);
            daily.set("landlord");
            char.room(16);
            break;
        case "task_4_1":
            nav.killall();
            nav.bg("14_motherRoom/task_3_2.jpg");
            nav.button({
                "type": "tongue",
                "name": "task_4_1",
                "left": 1197,
                "top": 692,
                "width": 107,
                "height": 145,
                "image": "14_motherRoom/task_3_3.png"
            }, 14);
            break;
        case "task_4_2":
            nav.kill();
            nav.bg("14_motherRoom/task_3_4.jpg");
            nav.next("task_4_2");
            break;
        case "task_3_goodend":
            nav.bg("14_motherRoom/task_3_goodend.jpg");
            break;
        case "task_5_0":
            if (cl.c.chastity !== null) {
                chat(60, 14);
            }
            else if (cl.getEntry("panties", cl.c.panties).sex === "f") {
                chat(73, 14);
            }
            else {
                nav.killall();
                nav.bg("14_motherRoom/task_5_0.jpg");
                chat(62, 14);
            }
            break;
        case "manFail":
            sc.completeMission("landlord", "man", false);
            daily.set("landlord");
            char.room(16);
            break;
        case "secretOut":
            sc.modSecret("landlord", 100);
            daily.set("landlord");
            char.room(16);
            break;
        case "sub5End":
            sc.modLevel("landlord", 30, 10);
            break;
        case "manMissionStart":
            sc.modLevel("landlord", 15, 10);
            sc.startMission("landlord", "man");
            break;
        case "task_5_end":
            sc.modLevel("landlord", 50, 10);
            sc.completeMissionTask("landlord", "man", 3);
            char.addtime(79);
            sex.mod("hand", false, "f", 1);
            dreams.add("dream_landlordHandjob");
            char.room(16);
            break;
        case "task_6_0":
            nav.bg("25_dining/025_diningRoomNight.jpg");
            break;
        case "task_6_end":
            sc.completeMissionTask("landlord", "man", 6);
            char.addtime(79);
            char.room(16);
            break;
        case "task_7_end":
            levels.fuckpussy("landlord");
            sc.completeMissionTask("landlord", "man", 7);
            sc.modLevel("landlord", 500, 10);
            char.addtime(154);
            char.room(16);
            break;
        case "task_8_0":
            if (cl.c.chastity !== null || cl.getEntry("panties", cl.c.panties) === "f") {
                if (cl.c.chastity !== null)
                    chat(60, 14);
                else
                    chat(73, 14);
            }
            else {
                nav.killall();
                nav.bg("14_motherRoom/task_8_0.jpg");
                chat(96, 14);
            }
            break;
        case "task_8_end":
            sc.completeMissionTask("landlord", "man", 8);
            char.addtime(154);
            char.room(16);
            break;
        case "task_9_m_1":
            nav.bg("14_motherRoom/task_7_6.jpg");
            nav.next("task_9_next");
            break;
        case "task_9_d_1":
            nav.bg("14_motherRoom/task_8_1.jpg");
            nav.next("task_9d_next");
            break;
        case "task_9_end":
            nav.bg("14_motherRoom/task1_3.jpg");
            levels.fuckpussy("landlord");
            break;
        case "task_9_b_2":
            nav.bg("14_motherRoom/task_9_b_2.jpg");
            nav.button({
                "type": "kiss",
                "name": "task_9_b_2",
                "left": 1136,
                "top": 564,
                "width": 152,
                "height": 152,
                "image": "14_motherRoom/task_9_b_2.png"
            }, 14);
            
            break;
        case "task_9_b_end":
            levels.getBlowJob("landlord", "f");
            char.addtime(97);
            char.room(16);
            break;
        case "butt1":
            nav.button({
                "type": "img",
                "name": "bgbg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1001_rand/black_25.png"
            }, 14);
            if (inv.has("screwdriver"))
                nav.button({
                    "type": "btn",
                    "name": "screwdriver",
                    "left": 371,
                    "top": 544,
                    "width": 87,
                    "height": 400,
                    "image": "19_layInBed/screwdriverDildo.png"
                }, 14);
            if (inv.has("purpleDildo"))
                nav.button({
                    "type": "btn",
                    "name": "purpleDildo",
                    "left": 475,
                    "top": 639,
                    "width": 69,
                    "height": 302,
                    "image": "19_layInBed/purpleDildo.png"
                }, 14);
            if (inv.has("pinkDildo"))
                nav.button({
                    "type": "btn",
                    "name": "pinkDildo",
                    "left": 561,
                    "top": 567,
                    "width": 70,
                    "height": 374,
                    "image": "19_layInBed/pinkDildo.png"
                }, 14);
            if (inv.has("whiteDildo"))
                nav.button({
                    "type": "btn",
                    "name": "whiteDildo",
                    "left": 648,
                    "top": 478,
                    "width": 184,
                    "height": 466,
                    "image": "19_layInBed/whiteDildo.png"
                }, 14);
            if (inv.has("blackDildo"))
                nav.button({
                    "type": "btn",
                    "name": "blackDildo",
                    "left": 849,
                    "top": 390,
                    "width": 301,
                    "height": 564,
                    "image": "19_layInBed/blackDildo.png"
                }, 14);
            if (inv.has("pinkFatDildo"))
                nav.button({
                    "type": "btn",
                    "name": "pinkFatDildo",
                    "left": 1167,
                    "top": 485,
                    "width": 200,
                    "height": 469,
                    "image": "19_layInBed/pinkFatDildo.png"
                }, 14);
            if (inv.has("blackBallsDildo"))
                nav.button({
                    "type": "btn",
                    "name": "blackBallsDildo",
                    "left": 1384,
                    "top": 478,
                    "width": 261,
                    "height": 449,
                    "image": "19_layInBed/blackBallsDildo.png"
                }, 14);
            if (inv.has("towerDildo"))
                nav.button({
                    "type": "btn",
                    "name": "towerDildo",
                    "left": 1106,
                    "top": 110,
                    "width": 631,
                    "height": 228,
                    "image": "19_layInBed/towerDildo.png"
                }, 14);
            if (inv.has("horseDildo"))
                nav.button({
                    "type": "btn",
                    "name": "horseDildo",
                    "left": 218,
                    "top": 98,
                    "width": 789,
                    "height": 311,
                    "image": "19_layInBed/horseDildo.png"
                }, 14);
            nav.button({
                "type": "btn",
                "name": "cancelDildo",
                "left": 1700,
                "top": 478,
                "width": 146,
                "height": 146,
                "image": "19_layInBed/cancel.png"
            }, 14);
            break;
        case "butt2":
            nav.killall();
            nav.bg("14_motherRoom/butt" + g.internal + ".jpg");
            g.roomTimeout = setTimeout(function () { chat(127, 14); }, 2000);
            break;
        case "butt3":
            nav.bg("14_motherRoom/butt3bg.jpg");
            zcl.displayMirror();
            nav.button({
                "type": "btn",
                "name": "buttOface",
                "left": 874,
                "top": 295,
                "width": 321,
                "height": 287,
                "image": "14_motherRoom/butt3.png"
            }, 14);
            break;
        case "butt4":
            nav.killall();
            nav.bg("14_motherRoom/butt4.jpg");
            levels.anal(inv.anal(g.internal), true, null, false, null);
            break;
        case "butt5":
            char.addtime(120);
            char.room(16);
            break;
        case "bigguy_29":
            nav.bg("14_motherRoom/bigguy_29.jpg");
            g.internal = {
                dick: 1,
                pussy: 1,
                mission2Complete: sc.getMissionTask("bigguy", "sissy", 2).complete 
            };
            nav.button({
                "type": "tongue",
                "name": "bigguy_30_dick",
                "left": 504,
                "top": 342,
                "width": 246,
                "height": 674,
                "image": "14_motherRoom/bigguy_30_dick_0.png"
            }, 14);
            nav.button({
                "type": "tongue",
                "name": "bigguy_30_pussy",
                "left": 1452,
                "top": 743,
                "width": 139,
                "height": 168,
                "image": "14_motherRoom/bigguy_30_pussy_0.png"
            }, 14);
            break;
        case "bigguy_40":
            nav.killall();
            nav.bg("14_motherRoom/bigguy_40.jpg");
            g.internal = 41;
            nav.next("bigguy_40");
            break;
        case "bigguy_x0":
            nav.killall();
            g.internal = 0;
            nav.bg("14_motherRoom/" + callback + ".jpg");
            nav.next("bigguy_x");
            break;
        case "confess3":
            sc.select("confess_fight", "14_motherRoom/icon_fight.png", 0);
            sc.select("confess_bitch", "14_motherRoom/icon_bitch.png", 1);
            break;
        case "confess4":
            nav.bg("14_motherRoom/14_motherRoomNightLight.jpg");
            g.internal = 41;
            nav.next("confess4");
            break;
        case "confess5":
            nav.bg("14_motherRoom/16_downStairsNight.jpg");
            break;
        case "confess_end":
            sc.completeMissionTaskAll("bigguy", "sissy", 4);
            sc.completeMissionTaskAll("bigguy", "rent", 2);
            char.room(16);
            break;
        case "confess_win_0":
            nav.killall();
            nav.bg("14_motherRoom/task_8_5.jpg");
            break;
        case "confess_win_end":
            sc.startMission("bigguy", "ex");
            sc.completeMissionTask("bigguy", "ex", 0);
            sc.completeMission("bigguy", "rent");
            sc.completeMission("bigguy", "sissy");
            char.addtime(120);
            char.room(16);
            break;
        default:
            break;
    }
};

room14.chat = function (chatID) {
    if (chatID === 999) {
        //placeholder
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "Nothing here..",
                button: [
                    { chatID: 1, text: "", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "I've already raided " + sc.n("landlord") + "'s closet today. I better wait till tomorrow. ",
                button: []
            },
            {
                chatID: 2,
                speaker: "landlord",
                text: "You need to log into your computer in your room, look for job, then go work. I'm not supporting your any longer.",
                button: []
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "Hello honey, I'm so proud that you're working now. you keep it up and you just may make something of yourself.",
                button: []
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "Mustn't wake " + sc.n("landlord") + "...",
                button: []
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "oh wow. I can't remember " + sc.n("landlord") + " with long hair. I always thought she just kept it short. " +
                    "I wonder who that guy is. They do look happy. ",
                button: [
                    { chatID: -1, text: "[Put the picture back.]", callback: "resetDresser" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "Gross!! Is this what I think it is? ",
                button: [
                    { chatID: -1, text: "[Put it back]", callback: "resetDresser" },
                    { chatID: 7, text: "[Sniff it]", callback: "" },
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "OOo it smells like butt. This has to be " + sc.n("landlord") + "'s butt plug. I didn't take her for someoene " +
                    "that was into butt stuff. This is so disgusting. I really should put it back. ",
                button: [
                    { chatID: -1, text: "[Put it back]", callback: "resetDresser" },
                    { chatID: 8, text: "[Steal her butt plug]", callback: "stealplug" },
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "I'm such a dirty dirty dirty bitch! This has been up my " + sc.n("landlord") + "'s ass and I'm going to insert " +
                    "up my ass. Like some kind of weird ass to ass porn. ",
                button: []
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "She must think I'm her maid, making her bed every day. ",
                button: []
            },
            {
                chatID: 10,
                speaker: "landlord",
                text: "Stop sniffing around my tits and get a job. ",
                button: []
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "You know a man with a job is the sexiest thing there is. With your good looks you'll have to beat those young " +
                    "girls away with a stick. If I was younger I would be all over you. Now you get that cute butt out of here so I " +
                    "can sleep. ",
                button: [
                    { chatID: 12, text: "My cute butt wants to stare at your cute butt a bit longer.", callback: "domlaugh" },
                    { chatID: -1, text: "Ok. Good night.", callback: "leave" },
                ]
            },
            {
                chatID: 12,
                speaker: "landlord",
                text: "Oh stop! This old butt is not sexy to young men. ",
                button: [
                    { chatID: 13, text: "As a young man I can assure you, your ass is sexy. ", callback: "phone0" },
                    { chatID: -1, text: "Yeah. You're right. ", callback: "leave" },
                ]
            },
            {
                chatID: 13,
                speaker: "landlord",
                text: "Oh, one second " + sc.n("bigguy") + " is texting me...",
                button: [
                    { chatID: 74, text: "...", callback: "phone2" },
                ]
            },
            {
                chatID: 14,
                speaker: "landlord",
                text: "You've bugged me enough today. Run along. ",
                button: [
                    { chatID: -1, text: "Ok. ", callback: "leave" },
                ]
            },
            {
                chatID: 15,
                speaker: "landlord",
                text: "Did you come in here to try to catch me naked, or do you have something for me. ",
                button: [
                    { chatID: 16, text: "You have such a great body, I was hoping to catch you naked. ", callback: "domlaugh" },
                    { chatID: -1, text: "No. Sorry. I should go. ", callback: "leave" },
                ]
            },
            {
                chatID: 16,
                speaker: "landlord",
                text: "Ok, ok. Smart ass. Run along. I'm getting ready for bed.  ",
                button: [
                    { chatID: -1, text: "Good night. ", callback: "manMissionStart" },
                ]
            },
            {
                chatID: 17,
                speaker: "landlord",
                text: "I suppose you came to compliment my butt again? ",
                button: [
                    { chatID: 18, text: "Not just your butt, but your boobs too! ", callback: "domlaugh" },
                    { chatID: -1, text: "Oh no. g'night ", callback: "leave" },
                ]
            },
            {
                chatID: 18,
                speaker: "landlord",
                text: "Oh you.  ",
                button: [
                    { chatID: 19, text: "[Put your hand on her shoulder.] ", callback: "task1_1" },
                ]
            },
            {
                chatID: 19,
                speaker: "landlord",
                text: "What are you doing? ",
                button: [
                    { chatID: -1, text: "[Go in for the kiss] ", callback: "task1_2" },
                ]
            },
            {
                chatID: 20,
                speaker: "landlord",
                text: "I don't think so mister! You march your butt out of here so I can get to bed! ",
                button: [
                    { chatID: -1, text: "ok. Good night. ", callback: "leave" },
                ]
            },
            {
                chatID: 21,
                speaker: "!blank",
                text: "Level check failed to kiss. Improve your relationship with her. ",
                button: [
                    { chatID: -1, text: "Roll for charisma: " + charisma.getStats(6 - sc.getLevel("landlord")).txt, callback: "level4Roll" }
                ]
            },
            {
                chatID: 22,
                speaker: "landlord",
                text: "We can't do this. It's so very very wrong. What would " + sc.n("bigguy") + " say? ",
                button: [
                    { chatID: 23, text: "I don't care what he says. I just know that I only to feel your lips on mine. ", callback: "" }
                ]
            },
            {
                chatID: 23,
                speaker: "landlord",
                text: "I... There's so much... We just can't... You need to go. I need to process this. ",
                button: [
                    { chatID: -1, text: "ok.", callback: "task1_leave" },
                    { chatID: 24, text: "[Kiss her one more time]", callback: "task1_3" },
                ]
            },
            {
                chatID: 24,
                speaker: "landlord",
                text: "*moan*",
                button: [
                    { chatID: 25, text: "...", callback: "task1_4" },
                ]
            },
            {
                chatID: 25,
                speaker: "landlord",
                text: "No. You need to go. NOW!",
                button: [
                    { chatID: -1, text: "ok. ", callback: "task1_leave" },
                ]
            },
            {
                chatID: 26,
                speaker: "landlord",
                text: "Oh good. I wanted to talk about that kiss. You're a wonderful boy, and if I was a " +
                    "bit younger and not your " + sc.n("landlord") + " I would be flattered, but this just " +
                    "isn't right.You caught me at a moment of weakness. It's sick and disgusting. ",
                button: [
                    { chatID: 39, text: "[Kiss her] [Continue this path]", callback: "task2_1" },
                    { chatID: 38, text: "Stay silent. [Stop this path]", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "thinking",
                text: "I already played with her tonight. Best not to risk it. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "I think she liked that! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 29,
                speaker: "landlord",
                text: "What the hell are you doing? ",
                button: [
                    { chatID: 30, text: "I uhhhhh... huh?", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "landlord",
                text: "I can't believe you thought you could get away with sticking your dirty penis inside me while I'm " +
                    "sleeping, what gets in your head.",
                button: [
                    { chatID: -1, text: "Oooohhhh no.", callback: "spanking" },
                ]
            },
            {
                chatID: 31,
                speaker: "landlord",
                text: "What the hell are you doing? ",
                button: [
                    { chatID: 32, text: "I couldn't sleep?", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "landlord",
                text: "Well then go lay your head on your pillow and try harder. Now go! ",
                button: [
                    { chatID: -1, text: "ok. Good night. ", callback: "leave" },
                ]
            },
            {
                chatID: 33,
                speaker: "landlord",
                text: "AAAAkkk, Get out! ",
                button: [
                    { chatID: -1, text: "crap.", callback: "leave" },
                ]
            },
            {
                chatID: 34,
                speaker: "landlord",
                text: "Oh. You're in here late. I guess you shoud meet " + sc.n("bigguy") + ". ",
                button: [
                    { chatID: 35, text: "hi", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "bigguy",
                text: "Yeah little boy. It's late. Why don't you go to bed now. The adults are doing stuff. Get going now. ",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "bg_s_0_end" },
                ]
            },
            {
                chatID: 36,
                speaker: "bigguy",
                text: "You need to get out of here before I put you out of here!",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "leave" },
                ]
            },
            {
                chatID: 37,
                speaker: "thinking",
                text: "I'm not messing with him when he's sleeping. He can totally crush me! ",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "leave" },
                ]
            },
            {
                chatID: 38,
                speaker: "landlord",
                text: "So from now on you and I will never kiss like that again. Good night. ",
                button: [
                    { chatID: -1, text: "Ok. Sorry. Good night. ", callback: "manFail" },
                ]
            },
            {
                chatID: 39,
                speaker: "landlord",
                text: "*mwah* ...stop. We can't do this. ",
                button: [
                    { chatID: 40, text: "[Grab her butt]", callback: "task_2_2" },
                ]
            },
            {
                chatID: 40,
                speaker: "landlord",
                text: "Ooooooo",
                button: [
                    { chatID: 41, text: "[Move your hand to her pussy]", callback: "task_2_3" },
                ]
            },
            {
                chatID: 41,
                speaker: "landlord",
                text: "*moan*",
                button: [
                    { chatID: 42, text: "[Move your finger between her pussy lips]", callback: "task_2_4" },
                ]
            },
            {
                chatID: 42,
                speaker: "landlord",
                text: "This is so wrong. You shouldn't rub my pussy like like. I don't like it. ",
                button: [
                    { chatID: 43, text: "Then why are you so wet?", callback: "task_2_5" },
                ]
            },
            {
                chatID: 43,
                speaker: "landlord",
                text: "*moan* You should go. I can't do this. It's so wrong. Please.  ",
                button: [
                    { chatID: 44, text: "Do you really want me to go? It feels so right. ", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "landlord",
                text: "Yes. Go. Please. ",
                button: [
                    { chatID: -1, text: "Ok. Sweet dreams " + sc.n("landlord") + ". ", callback: "task_2_end" },
                ]
            },
            {
                chatID: 45,
                speaker: "landlord",
                text: "Don't. I know what you came for. We can't do this. ",
                button: [
                    { chatID: 47, text: "[Push her onto the bed and kiss her] ", callback: "task_3_1" },
                    { chatID: 46, text: "What? No. I just came to say hi.", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "landlord",
                text: "Well, hello and good night. We can't do this. ",
                button: [
                    { chatID: -1, text: "Good night. ", callback: "leave" },
                ]
            },
            {
                chatID: 47,
                speaker: "landlord",
                text: "Oh! Oh my! I didn't know you were so aggressive. Now that you have your " +
                    sc.n("landlord") + " on her back in her bed, what are you going to do? ",
                button: [
                    { chatID: 48, text: "Just relax and I'll show you.", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "thinking",
                text: "Oh fuck! I didn't think I would get this far. " +
                    "Oh crap oh crap. I'm so glad " +
                    "that worked, but now what. Should I just stick my dick in her pussy? Maybe her mouth. " +
                    "Fuck. I don't want to ruin this. " +
                    "She's so hot with her green eyes staring into me. " +
                    "I so want to fuck her! Maybe I'll make her horny. Yeah. " +
                    "Maybe lick her pussy? Yeah. I'll start by eating her out. ",
                button: [
                    { chatID: 49, text: "[Slide her clothes off]", callback: "task_3_2" },
                ]
            },
            {
                chatID: 49,
                speaker: "landlord",
                text: "Ooooo. Are you going to do oral on me? I'm so excited! " + sc.n("bigguy") + " never " +
                    "does oral. He says pussies are just made for cock and nothing else. I do really miss " +
                    "oral. Your father used to do oral on me all the time. He was really good at it. Oh. " +
                    "I should stop talking about other men I've been with. You can start. ",
                button: [
                    { chatID: -1, text: "Shesh. Thanks " + sc.n("landlord") + ". [Lick her pussy]", callback: "task_3_3" },
                ]
            },
            {
                chatID: 50,
                speaker: "landlord",
                text: "Oh honey. You're going to have to work on how to eat a girl out. You can't just jab " +
                    "your tongue into my pussy. I'm going to have to train you on cunnilingus. ",
                button: [
                    { chatID: 52, text: "*mlah* *mlah* huh", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "landlord",
                text: "Oh wow. You really now what you're doing. Fuck. Keep licking my clit!",
                button: [
                    { chatID: 58, text: "*mlah* *mlah*", callback: "task_3_goodend" },
                ]
            },
            {
                chatID: 52,
                speaker: "landlord",
                text: "It's ok baby. I can finish myself off with my vibrator. Just sit back and watch. ",
                button: [
                    { chatID: -1, text: "...", callback: "task_3_4" },
                ]
            },
            {
                chatID: 53,
                speaker: "landlord",
                text: "If you're going to get a girlfirend you have to be able to please her. Stop by my " +
                    "bedroom at night before I go to sleep and I'll help you get better at pleasing a girl. " +
                    "Now you get some sleep sweetie. ",
                button: [
                    { chatID: -1, text: "Thank you. g'night", callback: "task_3_end" },
                ]
            },
            {
                chatID: 54,
                speaker: "landlord",
                text: "Come back for some more cunnilingus lessons? ",
                button: [
                    { chatID: 55, text: "Yes I am!", callback: "task_4_1" },
                    { chatID: -1, text: "Nope just trying to get a peek. ", callback: "" },
                ]
            },
            {
                chatID: 55,
                speaker: "landlord",
                text: "Yum yum, eat it up my big little boy.  ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 56,
                speaker: "landlord",
                text: "Still need some work. That's what " + sc.n("landlord") + "'s pussy is for. Practice " +
                    "for when you get the real thing. Let me finish myself off with my vibrator ",
                button: [
                    { chatID: -1, text: "...", callback: "task_4_2" },
                ]
            },
            {
                chatID: 57,
                speaker: "landlord",
                text: "Feel free to come back for some more practice. ",
                button: [
                    { chatID: -1, text: "...", callback: "task_4_end" },
                ]
            },
            {
                chatID: 58,
                speaker: "landlord",
                text: "Fuck that was good. I'm a wet sloppy mess! I need to go clean up in the bathroom " +
                    "and change my sheets. You did really good honey. ",
                button: [
                    { chatID: -1, text: "Oh yeah! ", callback: "task_4_goodend" },
                ]
            },
            {
                chatID: 59,
                speaker: "landlord",
                text: "Oh good you're here! I have a new device from work I need to try out and I don't have " +
                    "a penis. I get some free samples to try out at the Sperm Bank, but " + sc.n("bigguy") +
                    " hates using toys so I never get to try them. Pull down your pants and give me your " +
                    "penis. So I can see if this really works. ",
                button: [
                    { chatID: 72, text: "What kind of device? ", callback: "" },
                    { chatID: -1, text: "I'm not ready for that yet. ", callback: "" },
                ]
            },
            {
                chatID: 60,
                speaker: "landlord",
                text: "Is that a chastity cage. Oh honey. I know about chastity cages. You're a sissy " +
                    "aren't you. It's ok. Tell " + sc.n("landlord") + " you're a sissy. ",
                button: [
                    { chatID: 61, text: "Oh. I'm a sissy " + sc.n("landlord") + ". ", callback: "" },
                ]
            },
            {
                chatID: 61,
                speaker: "landlord",
                text: "Well talk more about this in the morning. Go put your penis away and go to bed. I " +
                    "have a lot to think about and I don't want to do anything I'll later regret. Night night honey. ",
                button: [
                    { chatID: -1, text: "Ok. Night night ", callback: "secretOut" },
                ]
            },
            {
                chatID: 62,
                speaker: "landlord",
                text: "That is a beatuful cock. I really shouldn't be stroking it, but I just can't help " +
                    "myself. It's so hard and thick. You really have grown into a man....",
                button: [
                    { chatID: 63, text: sc.n("landlord") + "? ", callback: "task_5_1" },
                ]
            },
            {
                chatID: 63,
                speaker: "landlord",
                text: "Oh sorry. I lost my thoughts for a minute. Yeah, the toy. Here it is. Let me lube it " +
                    "up. ",
                button: [
                    { chatID: 64, text: "...", callback: "task_5_2" },
                ]
            },
            {
                chatID: 64,
                speaker: "landlord",
                text: "You want to get the hole nice and lubed. Every guy likes a wet sloppy pussy. This " +
                    "one is pretty tight, but I'll be able to squeeze your cock into it. ",
                button: [
                    { chatID: 65, text: "*gulp*", callback: "task_5_3" },
                ]
            },
            {
                chatID: 65,
                speaker: "landlord",
                text: "A little drip is good. That's how you know you have enough. Now I'm going to slide " +
                    "my tight little toy around your cock. You'll feel a slight grip as the ridges inside " +
                    "pull at your frenulum and penis crown. Now just relax and don't be afraid to cum right " +
                    "away. It's perfectly normal. ",
                button: [
                    { chatID: 66, text: "*gulp*", callback: "task_5_4" },
                ]
            },
            {
                chatID: 66,
                speaker: "landlord",
                text: "I can feel your breath on my cheek. You're so sexy when you give me control. I can't " +
                    "help myself. ",
                button: [
                    { chatID: 67, text: "Oooo mMMmmm", callback: "task_5_5" },
                ]
            },
            {
                chatID: 67,
                speaker: "landlord",
                text: "Oh baby, cum for me. Shoot your load of cum into my pleasure sleeve.  ",
                button: [
                    { chatID: 68, text: "oooo... fffuck", callback: "task_5_6" },
                ]
            },
            {
                chatID: 68,
                speaker: "landlord",
                text: "Good boy. I'll take this cum to work and analyze it. It's getting late. You go get some " +
                    "sleep. A well rested boy is a happy boy. ",
                button: [
                    { chatID: -1, text: "Yes " + sc.n("landlord") + ". ", callback: "task_5_end" },
                ]
            },
            {
                chatID: 69,
                speaker: "thinking",
                text: "Oh wow. She's so hot cumming all over that vibrator. She really is a " +
                    "horny girl. I better close the door before she catches me. She would be " +
                    "so pissed that I watched her in her private moment. ",
                button: [
                    { chatID: -1, text: "[Silently back out and close the door.]", callback: "leave" },
                ]
            },
            {
                chatID: 70,
                speaker: "landlord",
                text: "I'm so glad you have a job! Such a big boy now!  ",
                button: [
                    { chatID: 71, text: "I am a big boy. Do you want to how big I am? ", callback: "" },
                    { chatID: -1, text: "Thanks", callback: "" },
                ]
            },
            {
                chatID: 71,
                speaker: "landlord",
                text: "Stop trying to hit on your " + sc.n("landlord") + " or I'll bend you over " +
                    "my knee again. Such a dirty boy!",
                button: [
                    { chatID: -1, text: "Sorry [Need to reach level 5 to go further]", callback: "sub5End" },
                ]
            },
            {
                chatID: 72,
                speaker: "landlord",
                text: "Stop being a little baby and show me your penis. I know you've been " +
                    "looking forward to this, I've seen the way you stare at my tits. ",
                button: [
                    { chatID: -1, text: "Ok. [Pull down your pants]", callback: "task_5_0" },
                ]
            },
            {
                chatID: 73,
                speaker: "landlord",
                text: "Are you wearing panties? Oh honey. Men don't wear panties. You're a sissy " +
                    "aren't you. It's ok. Tell " + sc.n("landlord") + " you're a sissy. ",
                button: [
                    { chatID: 61, text: "Oh. I'm a sissy " + sc.n("landlord") + ". ", callback: "" },
                ]
            },
            {
                chatID: 74,
                speaker: "landlord",
                text: "That guy is alwasy texting me. Has a bit of a jealous streak in him. I " +
                    "guess that happens when you catch your wife in bed with another man. Anyway. " +
                    "what were we talking about. ",
                button: [
                    { chatID: -1, text: "Oh nothing. Good night.", callback: "ll_man_1" },
                ]
            },
            {
                chatID: 75,
                speaker: "landlord",
                text: "So did you come back for some lessons? ",
                button: [
                    { chatID: 76, text: "I came back for more than lesson.", callback: "" },
                    { chatID: -1, text: "No. I shoud go.", callback: "leave" },
                ]
            },
            {
                chatID: 76,
                speaker: "landlord",
                text: "Oh really? What did you have in mind?",
                button: [
                    { chatID: 77, text: "Well I thought we would start with a cunnilugus lesson, then I would teach you a little something.", callback: "phone1" },
                ]
            },
            {
                chatID: 77,
                speaker: "landlord",
                text: "Oh. " + sc.n("bigguy") + " is texting me. One second. ",
                button: [
                    { chatID: 78, text: "[Wait for her to finish texting]", callback: "task1_4" },
                ]
            },
            {
                chatID: 78,
                speaker: "landlord",
                text: "You know " + sc.n("bigguy") + " is going through some stuff right now. " +
                    "let me give him a call. We really should stop this. It's gone too far and " +
                    "it isn't right. You need to stop coming to my room at night honey. ",
                button: [
                    { chatID: 79, text: "...but", callback: "" },
                ]
            },
            {
                chatID: 79,
                speaker: "landlord",
                text: "No buts. This really is inappropriate. I'm going to call " + sc.n("bigguy") +
                    ". Good night. ",
                button: [
                    { chatID: 80, text: "Fine! Good night.", callback: "task_6_0" },
                ]
            },
            {
                chatID: 80,
                speaker: "thinking",
                text: "Fucking " + sc.n("bigguy") + " always cock blocking me! And " + sc.n("landlord") +
                    " keeps falling for it. If she stops me again I have I have to do something more " +
                    "drastic. I know she wants me, I just have to push her into it.",
                button: [
                    { chatID: -1, text: "...", callback: "task_6_end" },
                ]
            },
            {
                chatID: 81,
                speaker: "landlord",
                text: "I thought I told you you need to leave. Nothing is going to happen " +
                    "between us. ",
                button: [
                    { chatID: 82, text: "You have teased me long enough " + sc.n("landlord") + " [Push her onto the bed]", callback: "task_7_0" },
                    { chatID: -1, text: "Oh yeah. Sorry. [Leave]", callback: "leaveSub" },
                ]
            },
            {
                chatID: 82,
                speaker: "landlord",
                text: "Hey! Don't you just push me on the bed! I'm your " + sc.n("landlord") + "!",
                button: [
                    { chatID: 83, text: "[Kiss her]", callback: "task_7_1" },
                ]
            },
            {
                chatID: 83,
                speaker: "landlord",
                text: "*mwah* no.. This isn't right. I don't want it. ",
                button: [
                    { chatID: 84, text: "[Stick your finger inside her]", callback: "task_7_2" },
                    { chatID: -1, text: "[Snap out of it. Apoligize and leave]", callback: "apoligize" }
                ]
            },
            {
                chatID: 84,
                speaker: "me",
                text: "You seem to want it. You're pussy is sopping wet. It's gripping my finger " +
                    "like it wants something more than my finger. ",
                button: [
                    { chatID: 85, text: "...", callback: "task_7_3" }
                ]
            },
            {
                chatID: 85,
                speaker: "landlord",
                text: "Please. What about " + sc.n("bigguy") + "? ",
                button: [
                    { chatID: 86, text: "I don't care about " + sc.n("bigguy") + ". [Slide off her lingerie]", callback: "task_7_5" },
                    { chatID: -1, text: "[Snap out of it. Apoligize and leave]", callback: "apoligize" }
                ]
            },
            {
                chatID: 86,
                speaker: "landlord",
                text: "This is so wrong. We really sholdn't do this. It doesn't matter how much we want " +
                    "it. ",
                button: [
                    { chatID: 87, text: "I love you too much to not do this. [Slide your cock into her]", callback: "task_7_4" },
                    { chatID: -1, text: "[Snap out of it. Apoligize and leave]", callback: "apoligize" }
                ]
            },
            {
                chatID: 87,
                speaker: "landlord",
                text: "UUuuunnngggg... OOooooooooo ",
                button: [
                    { chatID: 88, text: "[Fuck your " + sc.n("landlord") + "]", callback: "task_7_6" },
                ]
            },
            {
                chatID: 88,
                speaker: "landlord",
                text: "Oh fuck, you feel good. I've wanted this for so long, but I just couldn't...",
                button: [
                    { chatID: 89, text: "I'm happy I did. You feel so good. ", callback: "task_7_7" },
                ]
            },
            {
                chatID: 89,
                speaker: "landlord",
                text: "You feel so good. Oh wow. I'm about to cum it feels so good. Oooo my.",
                button: [
                    { chatID: 90, text: "I'm going to cum too " + sc.n("landlord") + ". ", callback: "task_7_6" },
                ]
            },
            {
                chatID: 90,
                speaker: "landlord",
                text: "You're amazing. Now be a good boy and cum inside " + sc.n("landlord") + ". ",
                button: [
                    { chatID: 91, text: "UUUghhhh", callback: "task_7_9" },
                ]
            },
            {
                chatID: 91,
                speaker: "landlord",
                text: "That's my good boy. Now get off of me, I need to get ready for bed. ",
                button: [
                    { chatID: 92, text: "...", callback: "task_7_10" },
                ]
            },
            {
                chatID: 92,
                speaker: "landlord",
                text: "You were amazing, but we have to keep this between us. I don't want " +
                    "anyone to know we're sleeping together. What would they say.",
                button: [
                    { chatID: 93, text: "I promise not to tell anyone.", callback: "task_7_11" },
                ]
            },
            {
                chatID: 93,
                speaker: "landlord",
                text: "Oh no! You need to go so I can clean you cum off my floor. ",
                button: [
                    { chatID: -1, text: "Oh haha. ok. Night night ", callback: "task_7_end" },
                ]
            },
            {
                chatID: 94,
                speaker: "landlord",
                text: "Oh god. I'm so glad you're here. I don't know if I can keep doing this. " +
                    "I think I'm falling in love with you. I don't mean a love between a boy and " +
                    "his " + sc.n("landlord") + " type love. I mean a love where I get so see the " +
                    "real you. Even the naked you, hehehe.",
                button: [
                    { chatID: 95, text: "I think I'm falling in love with you too. ", callback: "" },
                    { chatID: -1, text: "Oh. I can't get into this now. Have to wake up early tomorrow", callback: "leave" },
                ]
            },
            {
                chatID: 95,
                speaker: "landlord",
                text: "I'm so happy you didn't just turn and run. My heart is beating so hard. I " +
                    "need you. I need to feel you inside me. I love your cock so much! ",
                button: [
                    { chatID: -1, text: "Fuck yeah! [Strip off your clothes. ]", callback: "task_8_0" },
                ]
            },
            {
                chatID: 96,
                speaker: "landlord",
                text: "So are you going to stare at me, or give me what I need? ",
                button: [
                    { chatID: 97, text: "I hope you need dick, 'cause that's what I'm going to give you!", callback: "task_8_1" },
                ]
            },
            {
                chatID: 97,
                speaker: "landlord",
                text: "Oh fuck. I love your dick so much! ",
                button: [
                    { chatID: 98, text: "...", callback: "task_8_2" },
                ]
            },
            {
                chatID: 98,
                speaker: "eva",
                text: sc.n("landlord") + ", are you in there. I need to talk. ",
                button: [
                    { chatID: 99, text: "...", callback: "task_8_3" },
                ]
            },
            {
                chatID: 99,
                speaker: "eva",
                text: "Coming honey. Let me put on something...",
                button: [
                    { chatID: 100, text: "...", callback: "task_8_4" },
                ]
            },
            {
                chatID: 100,
                speaker: "eva",
                text: "Sorry to bother you so late, but I need advice, I'm totally freaking out. You see there's this guy " +
                    "I like, Samual, and I would do anything to get him to like me back. But he's " +
                    "playing really hard to get. So he invited me over to his house the other night. " +
                    "Well, anyway he has's being all mean to me and I thought I needed to do something " +
                    "more so he likes me. Like you said, sometimes a girl's got to do what a girls got to do. ",
                button: [
                    { chatID: 101, text: "...", callback: "" },
                ]
            },
            {
                chatID: 101,
                speaker: "landlord",
                text: "Oh honey, what did you do?",
                button: [
                    { chatID: 102, text: "...", callback: "" },
                ]
            },
            {
                chatID: 102,
                speaker: "eva",
                text: "You know I really like dogs, so he has this german shepard. And I was petting " +
                    "him when he got this boner. Well on thing led to another and Samual talked me into " +
                    "having sex with his dog. I thought Samual would like me the way he was talking, but " +
                    "I got so lost in the sex that I let the dog cum in me! Now I'm worried that I'm " +
                    "pregnant from the dog and I don't know what to do! I don't want to have puppies. " +
                    "Everyone at school will laugh at me if I have puppies. They'll all know what I did! ",
                button: [
                    { chatID: 103, text: "...", callback: "" },
                ]
            },
            {
                chatID: 103,
                speaker: "landlord",
                text: "Oh my dear sweet " + sc.n("eva") + ". That' not how it works... ",
                button: [
                    { chatID: 104, text: "[Wait for them to finish talking]", callback: "task_8_5" },
                ]
            },
            {
                chatID: 104,
                speaker: "landlord",
                text: "Sorry. I'm so not in the mood anymore. I'm sorry you heard that, I didn't " +
                    "expect that from her. Your " + g.makeSingular(sc.n("eva")) + " really has " +
                    "a lot to learn about life. Too bad she's not more like " + sc.n("lola") + 
                    ". My job as her " + sc.n("landlord") + " would be much easier. Now give me a " +
                    "kiss before you go. ",
                button: [
                    { chatID: 105, text: "[Kiss her goodnight]", callback: "task_8_6" },
                ]
            },
            {
                chatID: 105,
                speaker: "me",
                text: "night night. ",
                button: [
                    { chatID: -1, text: "...", callback: "task_8_end" },
                ]
            },
            {
                chatID: 106,
                speaker: "landlord",
                text: "This is my favorite position. I love staring into your eyes when we " +
                    "make love. ",
                button: [
                    { chatID: -1, text: "And I love you. ", callback: "task_9_m_1" },
                ]
            },
            {
                chatID: 107,
                speaker: "landlord",
                text: "Oh fuck you're good! Now fill " + sc.n("landlord") + " up with your " +
                    "cum. I want to sleep with you dripping out of me.",
                button: [
                    { chatID: 108, text: "OOOOohhh fuck! ", callback: "task_7_9" },
                ]
            },
            {
                chatID: 108,
                speaker: "landlord",
                text: "See that. That's a happy pussy flooded with your cum baby. You're " +
                    "such a good boy. ",
                button: [
                    { chatID: 112, text: "Oh yeah", callback: "task_9_end" },
                ]
            },
            {
                chatID: 109,
                speaker: "landlord",
                text: "Fuck me in my puppy hole. Hahaha. Sorry, little joke. Now grab my hips " +
                    "and make me your woman. ",
                button: [
                    { chatID: -1, text: "Oh yeah", callback: "task_9_d_1" },
                ]
            },
            {
                chatID: 110,
                speaker: "landlord",
                text: "Oh fuck! I'm cumming all over your hard dick! Fuck me baby, fill me up!. ",
                button: [
                    { chatID: 111, text: "OOOOohhh fuck!", callback: "task_9_d_2" },
                ]
            },
            {
                chatID: 111,
                speaker: "landlord",
                text: "Hehehe. My baby is such a big cummer! ",
                button: [
                    { chatID: 112, text: "Oh yeah", callback: "task_9_end" },
                ]
            },
            {
                chatID: 112,
                speaker: "landlord",
                text: "I love you. Always and forever. ",
                button: [
                    { chatID: -1, text: "I love you too.", callback: "leave" },
                ]
            },
            {
                chatID: 113,
                speaker: "landlord",
                text: "I do enjoy some oral play, but I need a toy so I can enjoy it too. ",
                button: [
                    { chatID: 114, text: "...", callback: "task_9_b_0" },
                ]
            },
            {
                chatID: 114,
                speaker: "me",
                text: "Oh wow. ",
                button: [
                    { chatID: 115, text: "...", callback: "" },
                ]
            },
            {
                chatID: 115,
                speaker: "landlord",
                text: "What can I say? I do love a big black cock. Now you get your cock over " +
                    "here so I can suck it. ",
                button: [
                    { chatID: 116, text: "Oh yeah! ", callback: "task_9_b_1" },
                ]
            },
            {
                chatID: 116,
                speaker: "landlord",
                text: "*GLUG* *GLUG* *GLUG*",
                button: [
                    { chatID: 117, text: "Oh fuck.. I'm going to cum!", callback: "" },
                ]
            },
            {
                chatID: 117,
                speaker: "landlord",
                text: "*glug* *glug* *GULP* Good boy. " + sc.n("landlord") + " love swallowing " +
                    "your yummy cummies. ",
                button: [
                    { chatID: 118, text: "whew.. I needed that. ", callback: "task_9_b_2" },
                ]
            },
            {
                chatID: 118,
                speaker: "landlord",
                text: "You're cummies are really yummy. Now give me a kiss before you leave. ",
                button: [
                    { chatID: -1, text: "[Kiss her on her lips]", callback: "" },
                    { chatID: 119, text: "No thanks. There's some cum on your lips", callback: "dom" },
                ]
            },
            {
                chatID: 119,
                speaker: "landlord",
                text: "Oh hahaha. I'll have to save that for later. Night night my big strong " +
                    "man. ",
                button: [
                    { chatID: -1, text: "Good night", callback: "task_9_b_end" },
                ]
            },
            {
                chatID: 120,
                speaker: "landlord",
                text: "Love you. Good night baby. ",
                button: [
                    { chatID: -1, text: "Good night", callback: "task_9_b_end" },
                ]
            },
            {
                chatID: 121,
                speaker: "landlord",
                text: "Well. I suppose if you're going to be my little girl now " +
                    "you probably need some help in the bedroom. I don't know weather or " +
                    "not you have toys to help you, but if you do, bring them to me " +
                    "and I'll help you in that area. ",
                button: [
                    { chatID: -1, text: "Yeah!", callback: "" },
                ]
            },
            {
                chatID: 122,
                speaker: "landlord",
                text: "If it isn't my sweet little girl. What are you doing in " + sc.n("landlord") + "'s room so late at night?",
                button: [
                    { chatID: 123, text: "I'm so horny " + sc.n("landlord") + ".", callback: "" },
                    { chatID: -1, text: "Nothing. I should leave", callback: "leave" },
                ]
            },
            {
                chatID: 123,
                speaker: "landlord",
                text: "Awww. " + sc.n("landlord") + " can help you with that. Show me all your girly dildos and I'll help you orgasm " +
                    "like a real girl. ",
                button: [
                    { chatID: -1, text: "[Show your dildos] ", callback: "butt1" }
                ]
            },
            {
                chatID: 124,
                speaker: "landlord",
                text: "Oh honey. That is much too large for your tight little hole. ",
                button: [
                    { chatID: -1, text: "ok *sad* ", callback: "" }
                ]
            },
            {
                chatID: 125,
                speaker: "landlord",
                text: "Such a cute dildo. Ready for " + sc.n("landlord") + " to fill your little butt?",
                button: [
                    { chatID: -1, text: "Oh yes! ", callback: "butt2" }
                ]
            },
            {
                chatID: 126,
                speaker: "landlord",
                text: "Oh wow, such a little slut. Your girly pussy is so big and gaping from taking so many big cocks. ",
                button: [
                    { chatID: -1, text: "I am such a butt slut!", callback: "butt2" }
                ]
            },
            {
                chatID: 127,
                speaker: "landlord",
                text: "You really like dicks in your pussy don't you? You're twitching like you're going to orgasm from your " +
                    "girly pussy. ",
                button: [
                    { chatID: 128, text: "UNGH", callback: "butt3" }
                ]
            },
            {
                chatID: 128,
                speaker: "me",
                text: "OOooooOOoo UNGH FUCK",
                button: [
                    { chatID: 129, text: "Cum like a sissy", callback: "butt4" }
                ]
            },
            {
                chatID: 129,
                speaker: "landlord",
                text: "Awww, you had a girl orgasm. How cute. Now run along " + sc.n("landlord") + " needs some sleep. ",
                button: [
                    { chatID: -1, text: "ok.", callback: "butt5" }
                ]
            },
            {
                chatID: 130,
                speaker: "bigguy",
                text: "Like what you see little girl? If you keep staring I might take " +
                    "you next! Ahahahaha",
                button: [
                    { chatID: -1, text: "*yelp* [Run away]", callback: "leave" }
                ]
            },
            {
                chatID: 131,
                speaker: "landlord",
                text: "Blub..",
                button: [
                    { chatID: 132, text: "...", callback: "" }
                ]
            },
            {
                chatID: 132,
                speaker: "bigguy",
                text: "Haha it's hard to talk with your mouth full of my cum. Looks like " +
                    "little " + sc.n("me") + " wanted to see you with a mouthful of my cum. She " +   
                    "sure looks like she wants a taste of it. ",
                button: [
                    { chatID: 133, text: "...", callback: "" }
                ]
            },
            {
                chatID: 133,
                speaker: "landlord",
                text: "Is that what you want? Do you want to taste his cum? You're such a " +
                    "dirty girl. Here. Lick the cum off my face. It really is yummy. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 134,
                speaker: "bigguy",
                text: "Hahaha! How's my cum taste little girl? Now finish swollowing " +
                    "it down. Enjoy a taste of a real man. Hehehe. ",
                button: [
                    { chatID: 135, text: "...", callback: "" }
                ]
            },
            {
                chatID: 135,
                speaker: "landlord",
                text: "You really are lucky. He eats a lot of pineapple. That's why his " +
                    "cum is so good! ",
                button: [
                    { chatID: 136, text: "...", callback: "" }
                ]
            },
            {
                chatID: 136,
                speaker: "bigguy",
                text: "Cute. Now scram little girl unless you want to taste my cum from " +
                    "her pussy. Hahaha. Get out though. I've gotta finish her off. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "leave" }
                ]
            },
            {
                chatID: 137,
                speaker: "bigguy",
                text: "You keep coming back. You looking for my dick girl? ",
                button: [
                    { chatID: 138, text: "Oooo", callback: "" }
                ]
            },
            {
                chatID: 138,
                speaker: "landlord",
                text: "Now " + sc.n("bigguy") + " I told you she is going through a " +
                    "lot. A lot of questions running through her head.",
                button: [
                    { chatID: 139, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 139,
                speaker: "bigguy",
                text: "There's something I want to run through her head... and by head " +
                    "I mean mouth.",
                button: [
                    { chatID: 140, text: "MMmmm", callback: "" }
                ]
            },
            {
                chatID: 140,
                speaker: "landlord",
                text: "You know, since your really connecting with your femanine " +
                    "side you need to know how to act like a lady in the bedroom. " +
                    "Just stand back and landlord is going to show you how to embrace " +
                    "your femanine side. ",
                button: [
                    { chatID: 141, text: "?", callback: "bigguy_20" }
                ]
            },
            {
                chatID: 141,
                speaker: "landlord",
                text: "The first thing is to let your man lay back and get comfortable.",
                button: [
                    { chatID: 142, text: "...", callback: "bigguy_21" }
                ]
            },
            {
                chatID: 142,
                speaker: "landlord",
                text: "Before you slide on to his cock, slide your soft body over his. " +
                    "Let him feel your soft warm body before he feels your soft warm " +
                    "vagina. ",
                button: [
                    { chatID: 143, text: "...", callback: "bigguy_22" }
                ]
            },
            {
                chatID: 143,
                speaker: "landlord",
                text: "I like to start in the reverse cowgirl. Let's him get a view of " +
                    "my pussy and ass from behind as I slide down on his cock.",
                button: [
                    { chatID: 144, text: "...", callback: "bigguy_23" }
                ]
            },
            {
                chatID: 144,
                speaker: "landlord",
                text: "Oh fuck, that feels really good!",
                button: [
                    { chatID: 145, text: "...", callback: "bigguy_24" }
                ]
            },
            {
                chatID: 145,
                speaker: "thinking",
                text: "Well, this is awkward. I'm just standing here watching my " +
                    sc.n("landlord") + " getting absolutely filled and fucked by " +
                    "her boyfriend while my little clitty is twiching in arousal.",
                button: [
                    { chatID: 146, text: "...", callback: "bigguy_23" }
                ]
            },
            {
                chatID: 146,
                speaker: "thinking",
                text: "She's really loving that dick. I'm sure sure who I'm most " +
                    "jealous of, my " + sc.n("landlord") + " or her boyfriend. ",
                button: [
                    { chatID: -1, text: "...", callback: "bigguy_25" }
                ]
            },
            {
                chatID: 147,
                speaker: "landlord",
                text: "Hehehe. Such a creamy mess we've made! " + sc.n("bigguy") + " has " +
                    "the biggest cum loads of any man I've met. ",
                button: [
                    { chatID: 148, text: "...", callback: "bigguy_29" }
                ]
            },
            {
                chatID: 148,
                speaker: "landlord",
                text: "Now be a good girl and clean up our mess. Lick us both clean. ",
                button: [
                    { chatID: -1, text: "Yum!", callback: "" },
                    { chatID: -1, text: "I'm so sorry! I can't do this! [Run away crying]", callback: "leave" },
                ]
            },
            {
                chatID: 149,
                speaker: "landlord",
                text: "You did such a good job eating all that cum. You know if you " +
                    "eat enough cum it will really make your skin glow.",
                button: [
                    { chatID: 150, text: "Really?", callback: "" },
                ]
            },
            {
                chatID: 150,
                speaker: "bigguy",
                text: "Hahaha I'll make you skin glow every morning little girl. ",
                button: [
                    { chatID: 151, text: "Oh thbptttttttt", callback: "" },
                ]
            },
            {
                chatID: 151,
                speaker: "landlord",
                text: "Well we're going to bed. Run along. ",
                button: [
                    { chatID: -1, text: "Ok. Bye", callback: "leave" },
                ]
            },
            {
                chatID: 152,
                speaker: "bigguy",
                text: "I see you just can't get enough of my dick. ",
                button: [
                    { chatID: 153, text: "I really do! ", callback: "" },
                    { chatID: -1, text: "*squeel* [Run away]", callback: "leave" },
                ]
            },
            {
                chatID: 153,
                speaker: "landlord",
                text: "I guess I can share. Come here help me get this giant dick hard. ",
                button: [
                    { chatID: -1, text: "MMmmmmm", callback: "bigguy_40" },
                ]
            },
            {
                chatID: 154,
                speaker: "bigguy",
                text: "I do love a pair of sluts. Now I'm tired. Get going so I can " +
                    "sleep. ",
                button: [
                    { chatID: -1, text: "yes sir", callback: "leave" },
                ]
            },
            {
                chatID: 155,
                speaker: "bigguy",
                text: "I'm trying to fuck your " + sc.n("landlord") + " and you're " +
                    "throwing me off. If you want to watch grow some tits little girl. ",
                button: [
                    { chatID: -1, text: "[Need larger breasts to progress]", callback: "leave" },
                ]
            },
            {
                chatID: 156,
                speaker: "bigguy",
                text: "She keeps comming back. I think she really wants my dick.  ",
                button: [
                    { chatID: 157, text: "*drool*", callback: "" },
                ]
            },
            {
                chatID: 157,
                speaker: "landlord",
                text: "Oh " + sc.n("bigguy") + "! You know your cock is only for me. " +
                    "She can watch and do clean up duty, but nothing more.",
                button: [
                    { chatID: 158, text: "*sad noises*", callback: "" },
                ]
            },
            {
                chatID: 158,
                speaker: "landlord",
                text: "Now go kneel over there and wait till we're finished. You can " +
                    "clean up all the cum. ",
                button: [
                    { chatID: -1, text: "Ok [Kneel at the foot of the bed]", callback: "bigguy_x0" },
                ]
            },
            {
                chatID: 159,
                speaker: "thinking",
                text: "What I wouldn't give to be her right now. " + sc.n("bigguy") +
                    " can really fuck hard and deep. I bet I would have cum 10 " +
                    "times if that cock was up my ass. She really is lucky! ",
                button: [
                    { chatID: 160, text: "...", callback: "bigguy_29" },
                ]
            },
            {
                chatID: 160,
                speaker: "landlord",
                text: "Ok honey, you can clean us up now. Mouth only! ",
                button: [
                    { chatID: -1, text: " oh yeah!", callback: "" },
                ]
            },
            {
                chatID: 161,
                speaker: "landlord",
                text: "Good girl! You'll make some man really happy some day. But now " +
                    "I need all cum guzzlers out so I can snuggle with my man. ",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
            {
                chatID: 162,
                speaker: "landlord",
                text: "I've called him and he's on his way. While we wait you go stand " +
                    "in the corner and stare at the wall until I tell you you can turn " +
                    "around! ",
                button: [
                    { chatID: 163, text: "yes " + sc.n("landlord") + ". ", callback: "confess1" },
                ]
            },
            {
                chatID: 163,
                speaker: "thinking",
                text: "Oh man she's really pissed. I really shouldn't have done that. " +
                    "I'm such a terrible person. I hope she doesn't kick me out. At least " +
                    "I have friends I can stay with if she does. I do hope she forgives me. " +
                    "I'll never do that again. I've got to be more chaste. Sex just keeps " +
                    "getting me in trouble. ",
                button: [
                    { chatID: 164, text: "[Hear " + sc.n("bigguy") + " come in]", callback: "" },
                ]
            },
            {
                chatID: 164,
                speaker: "bigguy",
                text: "What's the emergency? I came as quick as I could. Why is she staring " +
                    "at the wall? ",
                button: [
                    { chatID: 165, text: "...", callback: "" },
                ]
            },
            {
                chatID: 165,
                speaker: "landlord",
                text: "<span class='color:#61000a'>You're cheating on me! " + sc.n("me") +
                    " told me all the dirty details of you two fucking behind my back in my " +
                    "own home! DISGUSTING! We're OVER! I never want to see you again, I just " +
                    "wanted to say it to your face so " + sc.n("me") + " could hear what a " +
                    "horrible thing you two have done!</span>",
                button: [
                    { chatID: 166, text: "...", callback: "" },
                ]
            },
            {
                chatID: 166,
                speaker: "bigguy",
                text: "Now wait just a minute. I know you're mad, but can we talk about this. " +
                    "Alone. Without her here? ",
                button: [
                    { chatID: 167, text: "...", callback: "" },
                ]
            },
            {
                chatID: 167,
                speaker: "landlord",
                text: "Anything you want to say to me you can say to her. It won't change anything. " +
                    "She needs to hear the consequences of her actions! ",
                button: [
                    { chatID: 168, text: "...", callback: "" },
                ]
            },
            {
                chatID: 168,
                speaker: "bigguy",
                text: "It wasn't my fault. I just went up to get rent and she was all " +
                    "over me. I told her no, but you know how she is. It was everything " +
                    "I could to to keep her hands off my dick. ",
                button: [
                    { chatID: 169, text: "...", callback: "" },
                ]
            },
            {
                chatID: 169,
                speaker: "landlord",
                text: "Oh don't blame her. You're 5 times her size. If you didn't want to " +
                    "put your dick in her all you had to do was walk out! You wanted to fuck " +
                    "her! Admit it, ever since she changed you've been wanting to fuck her! ",
                button: [
                    { chatID: 170, text: "...", callback: "" },
                ]
            },
            {
                chatID: 170,
                speaker: "bigguy",
                text: "Well yeah. She's hot like you, but I'm not fucking anyone else. You " +
                    "two are more than enough for me. C'mon, part of you liked parading her " +
                    "in front of me, teasing me with her. ",
                button: [
                    { chatID: 171, text: "...", callback: "" },
                ]
            },
            {
                chatID: 171,
                speaker: "landlord",
                text: "I was teaching her how to be a proper girl! It doesn't mean you get " +
                    "to fuck her! Stop blaming me and admit we're over!",
                button: [
                    { chatID: 172, text: "...", callback: "" },
                ]
            },
            {
                chatID: 172,
                speaker: "bigguy",
                text: "We're not done. If I leave I'll stop paying your mortgage, then you and " +
                    "the girls will be out on the street! Is that what you want, to be homeless? " +
                    "This is stupid, I won't let you leave me. ",
                button: [
                    { chatID: 173, text: "...", callback: "" },
                ]
            },
            {
                chatID: 173,
                speaker: "landlord",
                text: "You don't get to tell me if I can leave you! That's what breaking " +
                    "up is! You no longer get to tell me what I can or can't do! ",
                button: [
                    { chatID: 174, text: "...", callback: "" },
                ]
            },
            {
                chatID: 174,
                speaker: "bigguy",
                text: "Oh I get to tell you what to do, 'cause we ain't done. It seems to " +
                    "me you and you little girl need to learn some manners when it comes to " +
                    "the man of the house and I'm going to teach you two some manners. ",
                button: [
                    { chatID: 175, text: "?", callback: "" },
                ]
            },
            {
                chatID: 175,
                speaker: "landlord",
                text: "Aaa stop! Don't...",
                button: [
                    { chatID: 176, text: "[Turn around]", callback: "" },
                ]
            },
            {
                chatID: 176,
                speaker: "bigguy",
                text: "You're both going to learn what a woman's place is in the house. " +
                    sc.n("me") + " strip down and join your " + sc.n("landlord") + " bitch.",
                button: [
                    { chatID: -1, text: "oh no...", callback: "confess3" },
                ]
            },
            {
                chatID: 177,
                speaker: "bigguy",
                text: "The three of us are all going to make up and return to our proper " +
                    "roles starting now. My role is that I help with your bills. Your role " +
                    "is you make my cock hard and take my cum. Let me know you understand " +
                    "by saying 'Yes sir'",
                button: [
                    { chatID: 178, text: "...", callback: "" },
                ]
            },
            {
                chatID: 178,
                speaker: "landlord",
                text: "Yes sir",
                button: [
                    { chatID: 180, text: "Yes sir", callback: "" },
                ]
            },
            {
                chatID: 179,
                speaker: "landlord",
                text: "Yes sir",
                button: [
                    { chatID: 180, text: "Yes sir", callback: "" },
                ]
            },
            {
                chatID: 180,
                speaker: "bigguy",
                text: "Good. Now make my cock hard so you can take my cum! ",
                button: [
                    { chatID: -1, text: "...", callback: "confess4" },
                ]
            },
            {
                chatID: 181,
                speaker: "bigguy",
                text: "I'm so happy we all made up and stopped thinking silly things. " +
                    "Come back anytime you want to be my hole. ",
                button: [
                    { chatID: 182, text: "uhhh yeah", callback: "confess5" },
                ]
            },
            {
                chatID: 182,
                speaker: "thinking",
                text: "I'm not so sure about that. Are we ok? " + sc.n("landlord") +
                    " seemed to enjoy it. He does have a great dick and helps her so " +
                    "much. I do feel sorry for her. She seems trapped. I don't know " +
                    "if there's anything I can do. ",
                button: [
                    { chatID: -1, text: "...", callback: "confess_end" },
                ]
            },
            {
                chatID: 183,
                speaker: "thinking",
                text: "She said she's done! You're done! Never come back, never talk " +
                    "to us, never show your face here again! You got it?",
                button: [
                    { chatID: 184, text: "...", callback: "" },
                ]
            },
            {
                chatID: 184,
                speaker: "bigguy",
                text: "I was only kidding...",
                button: [
                    { chatID: 185, text: "No! You will not come back ever again!", callback: "" },
                ]
            },
            {
                chatID: 185,
                speaker: "bigguy",
                text: "She'll be back. You'll both be back. I'm out of here! ",
                button: [
                    { chatID: 186, text: "!", callback: "confess_win_0" },
                ]
            },
            {
                chatID: 186,
                speaker: "landlord",
                text: "That was crazy! I didn't expect that at all. I guess he really " +
                    "showed his true self. I'm so you were able to get rid of him. I " +
                    "have no idea what he would have done! ",
                button: [
                    { chatID: 187, text: "yeah. I didn't know I had it in me. How will you afford your bills?", callback: "" },
                ]
            },
            {
                chatID: 187,
                speaker: "landlord",
                text: "Don't worry about that. But if I get a new boyfriend, no more " +
                    "fucking him ok? This night has been more than I can handle. Go " +
                    "to bed and let me decompress. ok. ",
                button: [
                    { chatID: -1, text: "Ok. ", callback: "confess_win_end" },
                ]
            },
        ];


        return cArray[chatID];
    }
};
