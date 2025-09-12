//Sister's Room
var room13 = {};

room13.main = function () {
    g.internal = "";
    var btnList = new Array();
    var lockdrawer = gv.get("lockdrawer");
    if (lockdrawer) 
        nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");

    //if (g.pass === "endSleepyTime") {
    //    g.pass = "";
    //    nav.bg("28_transformation/twin.jpg");
    //    chat(176, 13);
    //}
    //else
    if (g.hourBetween(22, 25) || g.hourBetween(0, 6)) {
        nav.bg("13_sisterRoom/roomSleep.jpg", "13_sisterRoom/roomSleep.jpg");
        var lolaDrunk = daily.get("lolaDrunk");
        var evaDrunk = daily.get("evaDrunk");
        var drunkImg;

        if (lolaDrunk) {
            drunkImg = "lolaSleep3.png";
            
            btnList.push({
                "type": "img",
                "name": "bed",
                "left": 1229,
                "top": 409,
                "width": 141,
                "height": 107,
                "image": "13_sisterRoom/" + drunkImg
            });
        }
        if (evaDrunk) {
            drunkImg = "evaSleep3.png";

            btnList.push({
                "type": "img",
                "name": "bed",
                "left": 1449,
                "top": 408,
                "width": 192,
                "height": 143,
                "image": "13_sisterRoom/" + drunkImg
            });
        }

        btnList.push({
            "type": "btn",
            "name": "bed",
            "left": 1039,
            "top": 527,
            "width": 543,
            "height": 288,
            "image": "13_sisterRoom/13_bedFar.png"
        });
    }
    else {
        if (sc.getTimeline("lola").thisRoom) {
            if (sc.taskGetStep("eva", "sissy") > 6 && sc.getMission("eva", "teach").notStarted && !daily.get("evaTeach")) {
                nav.button({
                    "type": "img",
                    "name": "fuckin",
                    "left": 816,
                    "top": 0,
                    "width": 797,
                    "height": 1080,
                    "image": "13_sisterRoom/fuckin.webp"
                }, 13);
                chat(273, 13);
                return;
            }
            else if (cl.isLewd()) {
                nav.bg("13_sisterRoom/angry.jpg");
                chat(119, 13);
                return;
            }
            else if (sc.taskGetStep("eva", "sissy") === 6) {
                nav.bg("13_sisterRoom/evaSissy_6.jpg");
                chat(196, 13);
            }
            else if (future.get("lolaboy") > -1) {
                nav.button({
                    "type": "btn",
                    "name": "eva_lolaboy",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": (g.isNight() ? "13_sisterRoom/13_eva_pj.png" : "13_sisterRoom/13_eva_sitting.png")
                }, 13);
            }
            else {
                if (!daily.get("lolahide")) {
                    nav.button({
                        "type": "btn",
                        "name": "lola",
                        "left": 1449,
                        "top": 260,
                        "width": 215,
                        "height": 820,
                        "image": g.isNight() ? "13_sisterRoom/13_lola_pj.png" : "13_sisterRoom/13_lola_reading.png"
                    }, 13);
                }
                btnList = [{
                    "type": "grab",
                    "name": "lolaboobs",
                    "left": 1469,
                    "top": 507,
                    "width": 116,
                    "height": 60,
                    "image": "13_sisterRoom/13_lola_readingboob.png"
                },
                {
                    "type": "btn",
                    "name": "eva",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": (g.isNight() ? "13_sisterRoom/13_eva_pj.png" : "13_sisterRoom/13_eva_sitting.png")
                },
                {
                    "type": "grab",
                    "name": "evaboobs",
                    "left": 876,
                    "top": 512,
                    "width": 118,
                    "height": 70,
                    "image": "13_sisterRoom/13_eva_sittingboobs.png"
                }];
                g.internal = { lola: scc.getSet("lola"), eva: scc.getSet("eva") };
                //if (g.internal.lola.anyanyChanges || g.internal.eva.anyanyChanges) {
                    //put logic for changes / secret here
                //}
                if (cl.c.cumface) {
                    if (sc.getSecret("lola").secretOut) {
                        chat(241, 13);
                    }
                    else {
                        sc.modSecret("lola", 50);
                        sc.modSecret("eva", 50);
                        chat(242, 13);
                    }
                }
            }
        }
        else {
            btnList = [
                {
                    "type": "btn",
                    "name": "puter",
                    "left": 295,
                    "top": 551,
                    "width": 295,
                    "height": 260,
                    "image": "13_sisterRoom/puter.png",
                    "night": "13_sisterRoom/puterNight.png"
                },
                {
                    "type": "btn",
                    "name": "nightstand",
                    "left": 1577,
                    "top": 562,
                    "width": 318,
                    "height": 236,
                    "image": "13_sisterRoom/nightstand.png",
                    "night": "13_sisterRoom/nightstandNight.png"
                },
            ];
            if (lockdrawer) {
                btnList.push({
                    "type": "btn",
                    "name": "dresser",
                    "left": 907,
                    "top": 288,
                    "width": 226,
                    "height": 315,
                    "image": "13_sisterRoom/13_dresserl.png",
                    "night": "13_sisterRoom/13_dresserNightl.png"
                });
            }
            else {
                btnList.push({
                    "type": "btn",
                    "name": "dresser",
                    "left": 907,
                    "top": 288,
                    "width": 226,
                    "height": 315,
                    "image": "13_sisterRoom/13_dresser.png",
                    "night": "13_sisterRoom/13_dresserNight.png"
                });
            }
            if (!cl.hasClothing("panties", "w")){
                btnList.push({
                    "type": "btn",
                    "name": "laundry",
                    "left": 1642,
                    "top": 769,
                    "width": 205,
                    "height": 98,
                    "image": "13_sisterRoom/13_laundry.png",
                    "night": "13_sisterRoom/13_laundryNight.png"
                });
            }
        }
    }

    navList = [11];

    $.each(btnList, function (i, v) {
        nav.button(v, 13);
    });

    nav.buildnav(navList);
};

room13.btnclick = function (name) {
    switch (name) {
        case "laundry":
            if (!cl.hasClothing("panties", "w"))
                nav.button({
                    "type": "btnNoHover",
                    "name": "panties",
                    "left": 611,
                    "top": 162,
                    "width": 1004,
                    "height": 757,
                    "image": "13_sisterRoom/panties.png"
                }, 13);
            else
                chat(4, 13);
            break;
        case "nightstand":
            nav.killall();
            nav.bg("13_sisterRoom/drawer.jpg");
            if (!inv.has("flatmateKey"))
                nav.button({
                    "type": "btn",
                    "name": "flatmateKey",
                    "left": 1205,
                    "top": 267,
                    "width": 378,
                    "height": 509,
                    "image": "13_sisterRoom/key.png"
                }, 13);
            nav.button({
                "type": "btn",
                "name": "closenightstand",
                "left": 915,
                "top": 850,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 13);
            break;
        case "flatmateKey":
            inv.add("flatmateKey");
            nav.killbutton("flatmateKey");
            chat(25, 13);
            break;
        case "closenightstand":
            char.room(13);
            break;
        case "panties":
                chat(6, 13);
            break;
        case "dresser":
            if (gv.get("lockdrawer"))
                chat(7, 13);
            else {
                nav.killall();
                nav.bg("13_sisterRoom/013_pantyDrawer.jpg");
                chat(0, 13);
            }
            break;
        case "puter":
            char.room(31);
            break;
        case "lolaboobs":
            nav.killbutton("lolaboobs");
            if (g.isNight()) {
                nav.modbutton("lola", "13_sisterRoom/13_lola_pj2.png", null, null);
            }
            else {
                nav.modbutton("lola", "13_sisterRoom/13_lola_reading2.png", null, null);
            }
            chat(194, 13);
            break;
        case "evaboobs":
            nav.killbutton("evaboobs");
            if (g.isNight()) {
                nav.modbutton("eva", "13_sisterRoom/13_eva_pj2.png", null, null);

            }
            else {
                nav.modbutton("eva", "13_sisterRoom/13_eva_sitting2.png", null, null);
            }
            chat(195, 13);
            break;
        case "lola":
            if (sc.getMission("lola", "sissy").notStarted) {
                nav.button({
                    "type": "img",
                    "name": "chatbg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1001_rand/black_25.png"
                }, g.roomID);
                sc.select("lolachat", "13_sisterRoom/icon_chatLola.png", 0);
                if (!sc.getMission("lola", "massage").notStarted)
                    sc.select("lolamassage", "13_sisterRoom/icon_massage.png", 1);
                if (sc.getMissionTask("lola", "games", 0).complete)
                    sc.select("spin", "13_sisterRoom/icon_spinthebottle.png", 2);
                if (sc.getMissionTask("lola", "games", 1).complete)
                    sc.select("tord", "13_sisterRoom/icon_truthordare.png", 3);
                if (sc.getMission("lola", "date").inProgress && !g.isNight()) {
                    sc.select("practiceDate", "13_sisterRoom/icon_practice.png", 4);
                }
                sc.select("dick", "13_sisterRoom/icon_dick.png", 5);
                sc.select("clearChat", "13_sisterRoom/icon_cancel.png", 6);
            }
            else if (sc.getMission("lola", "sissy").inProgress) {
                if (daily.get("lola")) {
                    chat(24, 13);
                }
                else {
                    daily.set("lola");
                    let lolaSissy = sc.taskGetStep("lola", "sissy");
                    if (lolaSissy < 1)
                        chat(166, 13);
                    else if (lolaSissy < 2)
                        chat(120, 13);
                    else if (lolaSissy === 2)
                        chat(141, 13);
                    else if (lolaSissy === 3) {
                        sc.completeMissionTask("lola", "sissy", 3);
                        daily.set("lola");
                        daily.set("evaTalkSecret")
                        chat(163, 13);
                    }
                    else if (lolaSissy === 4 || lolaSissy === 5) {
                        chat(213, 13);
                    }
                    else if (lolaSissy === 6) {
                        chat(214, 13);
                    }
                    else if (lolaSissy === 7) {
                        sc.completeMissionTask("lola", "sissy", 7);
                        chat(218, 13);
                    }
                    else if (lolaSissy === 8) {
                        nav.kill();
                        sc.completeMissionTask("lola", "sissy", 8);
                        nav.bg("13_sisterRoom/sissy7_0_day.jpg", "13_sisterRoom/sissy7_0_night.jpg");
                        chat(252, 13);
                    }
                    else if (lolaSissy === 9) {
                        daily.set("lola", false);
                        sc.completeMissionTask("lola", "sissy", 9);
                        chat(286, 13);
                    }
                    else if (lolaSissy === 10) {
                        chat(289, 13);
                    }
                    else if (lolaSissy === 11) {
                        sc.completeMissionTask("lola", "sissy", 11);
                        chat(291, 13);
                    }
                    else if (lolaSissy === 13) {
                        chat(306, 13);
                    }
                }
            }
            else {
                if (daily.get("lola")) {
                    if (sc.taskGetStep("lola", "tom") === 1)
                        chat(233, 13);
                    else
                        chat(234, 13);
                }
                else {
                    daily.set("lola");
                    switch (sc.taskGetStep("lola", "tom")) {
                        case 0:
                        case 1:
                            sc.completeMissionTask("lola", "tom", 1);
                            chat(235, 13);
                            break;
                        case 2:
                            sc.completeMissionTask("lola", "tom", 2);
                            chat(237, 13);
                            break;
                        default: chat(234, 13); break;
                    }
                }
            }
            break;
        case "eva":
            if (sc.getMission("eva", "sissy").notStarted) {
                nav.button({
                    "type": "img",
                    "name": "chatbg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1001_rand/black_25.png"
                }, g.roomID);
                sc.select("evachat", "13_sisterRoom/icon_chatEva.png", 0);
                if (!sc.getMission("eva", "massage").notStarted)
                    sc.select("evamassage", "13_sisterRoom/icon_feet.png", 1);
                if (sc.getMissionTask("eva", "games", 0).complete)
                    sc.select("spin", "13_sisterRoom/icon_spinthebottle.png", 2);
                if (sc.getMissionTask("eva", "games", 1).complete)
                    sc.select("tord", "13_sisterRoom/icon_truthordare.png", 3);
                sc.select("dick", "13_sisterRoom/icon_dick.png", 4);
                sc.select("clearChat", "13_sisterRoom/icon_cancel.png", 5);
            }
            else {
                let evaSissy = sc.taskGetStep("eva", "sissy");
                if (evaSissy < 1)
                    chat(166, 13);
                else if (evaSissy < 2)
                    chat(120, 13);
                else if (evaSissy === 2)
                    chat(141, 13);
                else if (evaSissy === 3) {
                    if (cl.c.chest < 2)
                        chat(192, 13)
                    else if (cl.c.chastity === null)
                        chat(168, 13);
                    else
                        chat(190, 13);
                }
                else if (evaSissy === 4 || evaSissy === 5)
                    chat(187, 13);
                else if (evaSissy === 9) {
                    sc.completeMissionTask("eva", "sissy", 9);
                    sc.completeMission("eva", "sissy");
                    if (sc.getMissionTask("eva", "sissy", 8).fail) {
                        chat(244, 13);
                    }
                    else {
                        chat(248, 13);
                    }
                }
                else { //if (evaSissy === 7) {          
                    nav.button({
                        "type": "img",
                        "name": "chatbg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "1001_rand/black_25.png"
                    }, g.roomID);
                    sc.select("chatSissy10", "13_sisterRoom/icon_chatEva.png", 0);
                    if (!daily.get("evaTeach") && !daily.get("lolahide"))
                        sc.select("icon_teach", "13_sisterRoom/icon_teach.png", 1);
                    sc.selectCancel("icon_evaCancel", 2);
                }
            }
            break;
        case "icon_evaCancel":
            nav.killbutton("chatSissy10");
            nav.killbutton("icon_teach");
            nav.killbutton("icon_evaCancel");
            nav.killbutton("chatbg");
            break;
        case "icon_teach":
            if (!daily.get("lolahide")) {
                daily.set("evaTeach");
                g.pass = "evalolateachme";
                char.room(174);
            }
            else
                chat(268, 13);
            break;
        case "chatSissy10":
            nav.killbutton("chatSissy10");
            nav.killbutton("icon_teach");
            nav.killbutton("icon_evaCancel");
            nav.killbutton("chatbg");
            if (g.dt.getDay() === 5 || g.dt.getDay() === 6) {
                if (cl.appearance() < 3) {
                    chat(204, 13);
                }
                else {
                    chat(203, 13);
                }
            }
            else {
                chat(200, 13);
            }
            break;
        case "clearChat":
            nav.killbutton("chatbg");
            nav.killbutton("lolachat");
            nav.killbutton("evachat");
            nav.killbutton("lolamassage");
            nav.killbutton("evamassage");
            nav.killbutton("spin");
            nav.killbutton("tord");
            nav.killbutton("dick");
            nav.killbutton("clearChat");
            nav.killbutton("practiceDate");
            break
        case "lolachat":
            room13.btnclick("clearChat");
            if (daily.get("lolatalk")) {
                chat(24, 13);
            }
            else {
                daily.set("lolatalk");
                var massageStep = sc.taskGetStep("lola", "massage");
                switch (sc.taskGetStep("lola", "talk")) {
                    case 0: chat(10, 13); break;
                    case 1: chat(14, 13); break;
                    case 2: if (massageStep > 0) chat(17, 13); else chat(14, 13); break;
                }
            }
            break;
        case "evachat":
            room13.btnclick("clearChat");
            if (daily.get("evatalk")) {
                chat(46, 13);
            }
            else {
                daily.set("evatalk");
                switch (sc.taskGetStep("eva", "talk")) {
                    case 0: chat(26, 13); break;
                    case 1: chat(33, 13);
                }
            }
            break;
        case "lolamassage":
            if (g.isNight()) {
                room13.btnclick("clearChat");
                chat(42, 13);
            }
            else
                char.room(4);
            break;
        case "evamassage":
            if (g.isNight()) {
                room13.btnclick("clearChat");
                chat(41, 13);
            }
            else
                char.room(5);
            break;
        case "spin":
            if (!inv.has("wine")) {
                room13.btnclick("clearChat");
                chat(43, 13)
            }
            else if (!g.isNight()) {
                chat(44, 13);
            }
            else {
                char.room(24);
            }
            break;
        case "tord":
            if (cl.c.shirt === null || cl.c.pants === null) {
                room13.btnclick("clearChat");
                chat(205, 13);
            }
            else if (!inv.has("wine")) {
                chat(45, 13)
            }
            else if (!g.isNight()) {
                chat(106, 13);
            }
            else {
                char.room(23);
            }
            break;
        case "dick":
            if (!daily.get("lolaDick")) {
                daily.set("lolaDick");
                room13.btnclick("clearChat");
                if (cl.c.chastity !== null) {
                    sc.modSecret("lola", 100);
                    sc.modSecret("eva", 100);
                    chat(104, 13);
                }
                else if (cl.pantiesTxt() === "panties") {
                    sc.modSecret("lola", 100);
                    sc.modSecret("eva", 100);
                    chat(99, 13);
                }
                if (sc.getMissionTask("lola", "date", 5).complete) {
                    nav.button({
                        "type": "img",
                        "name": "dick",
                        "left": 1127,
                        "top": 765,
                        "width": 189,
                        "height": 315,
                        "image": "13_sisterRoom/dick.png"
                    }, g.roomID);
                    chat(114, 13);
                }
                else if (sc.getLevel("lola") > 3) {
                    nav.button({
                        "type": "img",
                        "name": "dick",
                        "left": 1127,
                        "top": 765,
                        "width": 189,
                        "height": 315,
                        "image": "13_sisterRoom/dick.png"
                    }, g.roomID);
                    chat(107, 13);
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "dick",
                        "left": 1127,
                        "top": 765,
                        "width": 189,
                        "height": 315,
                        "image": "13_sisterRoom/dick.png"
                    }, g.roomID);
                    sc.modLevel("lola", 10, 7);
                    sc.modLevel("eva", 10, 7);
                    chat(113, 13);
                }
            }
            else {
                chat(112, 13);
            }
            break;
        case "reset":
            char.room(13);
            break;
        case "bed":
            if (daily.get("elsleep")) {
                nav.killall();
                nav.bg("13_sisterRoom/trouble_pj1.jpg");
                chat(58, 13);
            }
            else {
                g.internal = {
                    evaPants: true,
                    lolaPants: true,
                    evaPanties: true,
                    lolaPanties: true,
                    step: 0,
                    dailyComplete: daily.get("elsleep")
                };
                nav.kill();

                nav.bg("13_sisterRoom/bedbg.jpg");
                nav.button({
                    "type": "img",
                    "name": "pjs",
                    "left": 985,
                    "top": 93,
                    "width": 485,
                    "height": 883,
                    "image": "13_sisterRoom/13_pjs.png"
                }, 13);
                nav.button({
                    "type": "btn",
                    "name": "sheet1",
                    "left": 904,
                    "top": 259,
                    "width": 716,
                    "height": 801,
                    "image": "13_sisterRoom/13_sheet1.png"
                }, 13);
                room13.chatcatch("displaySnore");
            }
            break;
        case "sheet1":
            nav.killbutton("sheet1");
            nav.button({
                "type": "btn",
                "name": "sheet2",
                "left": 904,
                "top": 386,
                "width": 716,
                "height": 674,
                "image": "13_sisterRoom/13_sheet2.png"
            }, 13);
            break;
        case "sheet2":
            nav.killbutton("sheet2");
            nav.button({
                "type": "btn",
                "name": "choice",
                "left": 904,
                "top": 582,
                "width": 716,
                "height": 478,
                "image": "13_sisterRoom/13_sheet3.png"
            }, 13);
            break;
        case "choice":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "sleep",
                "left": 986,
                "top": 93,
                "width": 482,
                "height": 883,
                "image": "13_sisterRoom/sleep.png"
            }, 13);
            if (g.internal.lolaPanties) {
                nav.button({
                    "type": "img",
                    "name": "lolapanties",
                    "left": 1196,
                    "top": 499,
                    "width": 131,
                    "height": 69,
                    "image": "13_sisterRoom/pj_lola_panties.png"
                }, 13);
            }
            if (g.internal.lolaPants) {
                nav.button({
                    "type": "img",
                    "name": "lolapants",
                    "left": 985,
                    "top": 488,
                    "width": 342,
                    "height": 395,
                    "image": "13_sisterRoom/pj_lola_pants.png"
                }, 13);
            }
            
            if (g.internal.evaPanties) {
                nav.button({
                    "type": "img",
                    "name": "evapanties",
                    "left": 1343,
                    "top": 437,
                    "width": 126,
                    "height": 111,
                    "image": "13_sisterRoom/pj_eva_panties.png"
                }, 13);
            }
            if (g.internal.evaPants) {
                nav.button({
                    "type": "img",
                    "name": "evapants",
                    "left": 1225,
                    "top": 422,
                    "width": 244,
                    "height": 463,
                    "image": "13_sisterRoom/pj_eva_pants.png"
                }, 13);
            }
            room13.chatcatch("displaySnore");
            g.internal.step = 0;
            if (g.internal.lolaPanties)
                sc.select("lolaStrip", "13_sisterRoom/icon_focuslolastrip.png", 0);
            if (g.internal.evaPanties)
                sc.select("evaStrip", "13_sisterRoom/icon_focusevastrip.png", 1);
            sc.select("bothRoll", "13_sisterRoom/icon_rollover.png", 2);
            sc.selectCancel("leave", 3);
            break;
        case "lolaStrip":
            nav.killbutton("lolaStrip");
            nav.killbutton("evaStrip");
            nav.killbutton("leave");
            nav.killbutton("bothRoll");
            if (g.internal.lolaPants) {
                if (g.internal.dailyComplete) {
                    //
                }
                else if (g.internal.step === 3) {
                    g.internal.lolaPants = false;
                    if (!daily.get("lolaDrunk")) {
                        room13.btnclick("sleepAngry");
                        return;
                    }
                    room13.btnclick("choice");
                    daily.set("elsleep");
                }
                else {
                    nav.killbutton("lolapants");
                    nav.button({
                        "type": "btn",
                        "name": "lolaStrip",
                        "left": 978,
                        "top": 481,
                        "width": 356,
                        "height": 409,
                        "image": "13_sisterRoom/pj_lola_pants" + g.internal.step + ".png"
                    }, 13);
                    g.internal.step++;
                }
            }
            else if (g.internal.lolaPanties) {
                nav.killbutton("lolapanties");
                if (g.internal.step === 0) {
                    nav.button({
                        "type": "btn",
                        "name": "lolaStrip",
                        "left": 1189,
                        "top": 492,
                        "width": 145,
                        "height": 83,
                        "image": "13_sisterRoom/pj_lola_panties0.png"
                    }, 13);
                    g.internal.step++;
                }
                else if (g.internal.step === 1) {
                    nav.button({
                        "type": "btn",
                        "name": "lolaStrip",
                        "left": 1147,
                        "top": 569,
                        "width": 117,
                        "height": 48,
                        "image": "13_sisterRoom/pj_lola_panties1.png"
                    }, 13);
                    g.internal.step++;
                }
                else if (g.internal.step === 2) {
                    nav.button({
                        "type": "btn",
                        "name": "lolaStrip",
                        "left": 1055,
                        "top": 571,
                        "width": 160,
                        "height": 133,
                        "image": "13_sisterRoom/pj_lola_panties2.png"
                    }, 13);
                    g.internal.step++;
                }
                else if (g.internal.step === 3) {
                    nav.button({
                        "type": "btn",
                        "name": "lolaStrip",
                        "left": 1130,
                        "top": 761,
                        "width": 132,
                        "height": 43,
                        "image": "13_sisterRoom/pj_lola_panties3.png"
                    }, 13);
                    g.internal.step++;
                }
                else if (g.internal.step === 4) {
                    g.internal.lolaPanties = false;
                    if (!daily.get("lolaDrunk")) {
                        room13.btnclick("sleepAngry");
                        return;
                    }
                    room13.btnclick("choice");
                }
            }
            break;
        case "evaStrip":
            nav.killbutton("lolaStrip");
            nav.killbutton("evaStrip");
            nav.killbutton("leave");
            nav.killbutton("bothRoll");
            if (g.internal.evaPants) {
                if (g.internal.dailyComplete) {
                    //
                }
                else if (g.internal.step === 4) {
                    g.internal.evaPants = false;
                    if (!daily.get("evaDrunk")) {
                        room13.btnclick("sleepAngry");
                        return;
                    }
                    else {
                        room13.btnclick("choice");
                        daily.set("elsleep");
                    }
                }
                else {
                    nav.killbutton("evapants");
                    nav.button({
                        "type": "btn",
                        "name": "evaStrip",
                        "left": 1218,
                        "top": 415,
                        "width": 258,
                        "height": 477,
                        "image": "13_sisterRoom/pj_eva_pants" + g.internal.step + ".png"
                    }, 13);
                    g.internal.step++;
                }
            }
            else if (g.internal.evaPanties) {
                if (g.internal.step === 0) {
                    nav.killbutton("evapanties");
                    nav.button({
                        "type": "btn",
                        "name": "evaStrip",
                        "left": 1337,
                        "top": 430,
                        "width": 139,
                        "height": 125,
                        "image": "13_sisterRoom/pj_eva_panties0.png"
                    }, 13);
                    g.internal.step++;
                }
                else if (g.internal.step === 1) {
                    nav.button({
                        "type": "btn",
                        "name": "evaStrip",
                        "left": 1252,
                        "top": 534,
                        "width": 137,
                        "height": 124,
                        "image": "13_sisterRoom/pj_eva_panties1.png"
                    }, 13);
                    g.internal.step++;
                }
                else if (g.internal.step === 2) {
                    nav.button({
                        "type": "btn",
                        "name": "evaStrip",
                        "left": 1248,
                        "top": 630,
                        "width": 114,
                        "height": 135,
                        "image": "13_sisterRoom/pj_eva_panties2.png"
                    }, 13);
                    g.internal.step++;
                }
                else if (g.internal.step === 3) {
                    g.internal.evaPanties = false;
                    if (!daily.get("evaDrunk")) {
                        room13.btnclick("sleepAngry");
                        return;
                    }
                    room13.btnclick("choice");
                }
            }
            break;
        case "bothRoll":
            nav.killall();
            var lolaImg, evaImg;
            if (g.internal.lolaPants)
                lolaImg = "lola_sleep_c_2.png";
            else if (g.internal.lolaPanties)
                lolaImg = "lola_sleep_c_1.png";
            else
                lolaImg = "lola_sleep_c_0.png";

            if (g.internal.evaPants)
                evaImg = "eva_sleep_c_2.png";
            else if (g.internal.evaPanties)
                evaImg = "eva_sleep_c_1.png";
            else
                evaImg = "eva_sleep_c_0.png";

            nav.button({
                "type": "btn",
                "name": "lolaLay",
                "left": 861,
                "top": 77,
                "width": 353,
                "height": 931,
                "image": "13_sisterRoom/" + lolaImg
            }, 13);
            nav.button({
                "type": "clickthrough",
                "name": "lolaLay",
                "left": 861,
                "top": 77,
                "width": 353,
                "height": 931,
                "image": "13_sisterRoom/lola_sleep_f_sleep.png"
            }, 13);

            nav.button({
                "type": "btn",
                "name": "evaLay",
                "left": 1193,
                "top": 97,
                "width": 516,
                "height": 698,
                "image": "13_sisterRoom/" + evaImg
            }, 13);
            nav.button({
                "type": "clickthrough",
                "name": "evaLay",
                "left": 1193,
                "top": 97,
                "width": 516,
                "height": 698,
                "image": "13_sisterRoom/eva_sleep_f_sleep.png"
            }, 13);
            sc.selectCancel("leave", 13);
            break;
        case "leave":
            char.addtime(30);
            char.room(11);
            break;
        case "lolaLay":
            if (g.internal.lolaPants) {
                nav.killall();
                nav.bg("13_sisterRoom/sleep_lola_chest_0.jpg");
                if (cl.c.chastity !== null) {
                    chat(47, 13);
                }
                else {
                    chat(50, 13);
                }
            }
            else if (g.internal.lolaPanties) {
                nav.killall();
                nav.bg("13_sisterRoom/sleep_lola_panties_0.jpg");
                if (cl.c.chastity !== null) {
                    chat(47, 13);
                }
                else {
                    chat(54, 13);
                }
            }
            else {
                nav.killall();
                g.internal = 0;
                nav.bg("13_sisterRoom/sleep_lola_nude_0.jpg");
                sc.select("fingerlola", "13_sisterRoom/icon_fingerlola.png", 0);
                sc.select("licklola", "13_sisterRoom/icon_lick.webp", 1);
                sc.select("fucklola", "13_sisterRoom/icon_fuck.webp", 2);
                sc.selectCancel("leave", 3);
            }
            break;
        case "evaLay":
            if (g.internal.evaPants) {
                nav.killall();
                nav.bg("13_sisterRoom/sleep_chest_0.jpg");
                if (cl.c.chastity !== null) {
                    chat(47, 13);
                }
                else {
                    chat(48, 13);
                }
            }
            else if (g.internal.evaPanties) {
                nav.killall();
                nav.bg("13_sisterRoom/sleep_panties_0.jpg");
                if (cl.c.chastity !== null) {
                    chat(47, 13);
                }
                else {
                    chat(52, 13);
                }
            }
            else {
                nav.killall();
                g.internal = 0;
                nav.bg("13_sisterRoom/sleep_nude_0.jpg");
                sc.select("fingereva", "13_sisterRoom/icon_fingerlola.png", 0);
                sc.select("lickeva", "13_sisterRoom/icon_lick.webp", 1);
                sc.select("fuckeva", "13_sisterRoom/icon_fuck.webp", 2);
                sc.selectCancel("leave", 3);
                //if (cl.c.chastity !== null) {
                //    chat(47, 13);
                //}
                //else {
                //    g.internal.step = 1;
                //    nav.button({
                //        "type": "tongue",
                //        "name": "lickEva0",
                //        "left": 1010,
                //        "top": 465,
                //        "width": 126,
                //        "height": 279,
                //        "image": "13_sisterRoom/eva_sleep_nude_click.png"
                //    }, 13);
                //    chat(59, 13);
                //}
            }
            break;
        case "fingereva":
            nav.kill();
            g.internal = 1;
            if (!daily.get("fingerevasleep")) {
                daily.set("fingerevasleep");
                levels.gavehandjob("f", "eva");
            }
            nav.bg("13_sisterRoom/sleep_nude_0.jpg");
            nav.button({
                "type": "img",
                "name": "evafinger",
                "left": 626,
                "top": 80,
                "width": 871,
                "height": 1000,
                "image": "13_sisterRoom/evafinger.gif"
            }, 13);
            nav.next("evafuckreset");
            break;
        case "evafuckreset":
            nav.kill();
            nav.bg("13_sisterRoom/sleep_nude_0.jpg");
            sc.select("fingereva", "13_sisterRoom/icon_fingerlola.png", 0);
            sc.select("lickeva", "13_sisterRoom/icon_lick.webp", 1);
            sc.select("fuckeva", "13_sisterRoom/icon_fuck.webp", 2);
            sc.selectCancel("leave", 3);
            break;
        case "lickeva":
            nav.kill();
            g.internal = 1;
            if (!daily.get("lickevasleep")) {
                daily.set("lickevasleep");
                levels.oral(3, "f", "eva");
            }
            nav.bg("13_sisterRoom/sleep_nude_0.jpg");
            nav.button({
                "type": "img",
                "name": "evafinger",
                "left": 626,
                "top": 80,
                "width": 871,
                "height": 1000,
                "image": "13_sisterRoom/evalicksleep.gif"
            }, 13);
            nav.next("evafuckreset");
            break;
        case "fuckeva":
            if (cl.c.chastity !== null) {
                chat(271, 13);
                return;
            }
            nav.kill();
            nav.bg("13_sisterRoom/evafuck0.webp");
            chat(269, 13);
            nav.next("evafuck0");
            break;
        case "evafuck0":
            nav.kill();
            if (g.internal === 0) {
                nav.bg("13_sisterRoom/sleep_nude_4.jpg");
                nav.next("sleepAngry0");
                chat(270, 13);
            }
            else {
                nav.cum("evafuck1");
                nav.bg("13_sisterRoom/evaFuck.gif");
            }
            break;
        case "sleepAngry0":
            nav.bg("13_sisterRoom/sleep_nude_5.jpg");
            nav.killbutton("sleepAngry0");
            nav.next("sleepAngry");
            break;
        case "evafuck1":
            sc.completeMissionTask("eva", "random", 0);
            sc.setMissionTask("landlord", "misc", 4, 1);
            nav.bg("13_sisterRoom/evafuck2.webp");
            chat(272, 13);
            break;
        case "fucklola":
            if (cl.c.chastity !== null) {
                chat(271, 13);
                return;
            }
            nav.kill();
            nav.bg("13_sisterRoom/lolafuck0.webp");
            chat(269, 13);
            nav.next("fucklola0");
            break;
        case "fucklola0":
            if (g.internal > 0) {
                nav.killbutton("fucklola0");
                nav.bg("13_sisterRoom/lolafuck0.gif");
                nav.cum("fucklola1");
            }
            else {
                nav.kill();
                nav.bg("13_sisterRoom/sleep_lola_nude_2.jpg");
                nav.next("fucklolabad1")
            }
            break;
        case "fucklola1":
            nav.killbutton("fucklola1")
            nav.bg("13_sisterRoom/lolafuck1.webp");
            nav.next("fucklola2");
            break;
        case "fucklola2":
            nav.kill();
            levels.fuckpussy("lola", "f");
            sc.setMissionTask("landlord", "misc", 4, 1);
            sc.completeMissionTask("lola", "random", 1);
            nav.bg("13_sisterRoom/lolafuck2.webp");
            chat(272, 13);
            break;
        case "fucklolabad1":
            nav.bg("13_sisterRoom/sleep_lola_nude_3.jpg");
            chat(270, 13);
            nav.next("fingerlola4");
            break;
        case "evaSleepingJackTits1":
            nav.killall();
            nav.bg("13_sisterRoom/sleep_chest_1.jpg");
            chat(49, 13);
            break;
        case "evaSleepingJackPanties1":
            nav.killall();
            nav.bg("13_sisterRoom/sleep_panties_1.jpg");
            chat(53, 13);
            break;
        case "lolaSleepingJackTits1":
            nav.killall();
            nav.bg("13_sisterRoom/sleep_lola_chest_1.jpg");
            chat(51, 13);
            break;
        case "lolaSleepingJackPanties1":
            nav.killall();
            nav.bg("13_sisterRoom/sleep_lola_panties_1.jpg");
            chat(55, 13);
            break;
        case "fingerlola":
            nav.killall();
            g.internal = 1;
            nav.bg("13_sisterRoom/sleep_lola_nude_1.gif");
            nav.next("fingerlola1");
            break;
        case "fingerlola1":
            nav.killbutton("fingerlola1");
            nav.bg("13_sisterRoom/sleep_lola_nude_2.jpg");
            nav.next("lickmolestReset");
            if (!daily.get("lolafingerpussy")) {
                daily.set("lolafingerpussy");
                levels.gavehandjob("f", "lola");
            }
            break;
        case "fingerlola4":
            nav.killbutton("fingerlola4");
            nav.bg("13_sisterRoom/sleep_lola_nude_4.jpg");
            nav.next("sleepAngry");
            break;
        case "licklola":
            g.internal = 1;
            nav.kill();
            nav.bg("13_sisterRoom/lolaLickbg.webp");
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 873,
                "top": 195,
                "width": 900,
                "height": 800,
                "image": "13_sisterRoom/lolalick0.gif"
            }, 13);
            nav.next("lickmolestReset");
            if (!daily.get("lolalickpussy")) {
                daily.set("lolalickpussy");
                levels.oral(3, "f", "lola");
            }
            break;
        case "lickmolestReset":
            nav.killall();
            nav.bg("13_sisterRoom/sleep_lola_nude_0.jpg");
            sc.select("fingerlola", "13_sisterRoom/icon_fingerlola.png", 0);
            sc.select("licklola", "13_sisterRoom/icon_lick.webp", 1);
            sc.select("fucklola", "13_sisterRoom/icon_fuck.webp", 2);
            sc.selectCancel("leave", 3);
            break;
        case "lickEva0":
            nav.bg("13_sisterRoom/sleep_nude_" + g.internal.step + ".jpg");
            g.internal.step++;
            if (g.internal.step > 3) {
                levels.oral(3, "f", "eva");
                chat(60, 13);
            }
            break;
        case "evaLick2":
            nav.bg("13_sisterRoom/sleep_nude_5.jpg");
            nav.killbutton("evaLick2");
            nav.next("sleepAngry");
            break;
        case "sleepAngry":
            nav.killall();
            nav.bg("13_sisterRoom/bedbg.jpg");
            var angryEva, angryLola;
            if (g.internal.evaPants)
                angryEva = "eva_angry_pj.png"
            else if (g.internal.evaPanties)
                angryEva = "eva_angry_panties.png";
            else
                angryEva = "eva_angry_nude.png";

            if (g.internal.lolaPants)
                angryLola = "lola_angry_pj.png";
            else if (g.internal.lolaPanties)
                angryLola = "lola_angry_panties.png";
            else
                angryLola = "lola_angry_nude.png";

            nav.button({
                "type": "img",
                "name": "eva",
                "left": 1186,
                "top": 25,
                "width": 365,
                "height": 1021,
                "image": "13_sisterRoom/" + angryEva
            }, 13);
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 960,
                "top": 57,
                "width": 259,
                "height": 998,
                "image": "13_sisterRoom/" + angryLola
            }, 13);
            chat(57, 13);
            break;
        case "practiceDate":
            room13.btnclick("clearChat");
            switch (sc.taskGetStep("lola", "date")) {
                case 0: chat(61, 13); break;
                case 1: chat(65, 13); break;
                case 2:
                    if (g.isNight())
                        chat(66, 13);
                    else
                        chat(67, 13);
                    break;
                default:
                    sc.select("datePark", "13_sisterRoom/icon_pdPark.png", 0);
                    sc.select("dateFair", "13_sisterRoom/icon_pdCarnival.png", 1);
                    if (!sc.getMissionTask("lola", "date", 4).complete)
                        sc.select("dateHere", "13_sisterRoom/icon_pdRoom.png", 2);
                    sc.selectCancel("dateCancel", 3);
                    break;
            }
            break;
        case "dateCancel":
            nav.killbutton("datePark");
            nav.killbutton("dateFair");
            nav.killbutton("dateHere");
            nav.killbutton("dateCancel");
            room13.btnclick("lola");
            break;
        case "dateFair":
            g.pass = { who: "lola", ferrisWheel: false, bong: false, ball: false };
            char.room(625);
            break;
        case "datePark":
            g.pass = "lolaPark2";
            char.room(450);
            break;
        case "dateHere":
            nav.killbutton("datePark");
            nav.killbutton("dateFair");
            nav.killbutton("dateHere");
            nav.killbutton("dateCancel");
            if (sc.getLevel("lola") < 7)
                chat(68, 13);
            else {
                nav.killbutton("eva");
                nav.killbutton("evaboobs");
                chat(69, 13);
            }
            break;
        case "date":
            nav.bg("13_sisterRoom/date" + g.internal + ".jpg");
            if (g.internal === 16) {
                nav.bg("13_sisterRoom/datebg.jpg");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 479,
                    "top": 0,
                    "width": 1200,
                    "height": 1080,
                    "image": "13_sisterRoom/date16.gif"
                }, 13);
            }
            else if (g.internal === 17) {
                nav.killbutton("lola");
                nav.killbutton("lolaboobs");
            }
            else if (g.internal === 18) {
                nav.killall();
                chat(88, 13);
            }
            g.internal++;
            break;
        case "date25":
            nav.bg("13_sisterRoom/date25.jpg");
            nav.killbutton("date25");
            chat(98, 13);
            break;
        case "f":
            if (g.internal > 8) {
                nav.killbutton("f");
                chat(116, 13);
            }
            else {
                nav.bg("13_sisterRoom/f" + g.internal + ".jpg");
            }
            g.internal++;
            break;
        case "sissyEva3_1foot":
            if (g.internal === 0) {
                nav.killbutton("sissyEva3_1foot");
                nav.button({
                    "type": "kiss",
                    "name": "sissyEva3_1foot",
                    "left": 767,
                    "top": 153,
                    "width": 631,
                    "height": 637,
                    "title": "lick her feet",
                    "image": "13_sisterRoom/sissyEva3_1foot0.png"
                }, 13);
                chat(172, 13);
                g.internal = 1;
            }
            else {
                nav.killall();
                chat(173, 13);
            }
            break;
        case "sissyEva3_1pussy":
            nav.killall();
            nav.bg("13_sisterRoom/sissyEva3_2.jpg");
            chat(174, 13);
            break;
        case "eva_lolaboy":
            chat(211, 13);
            break;
        default:
            break;
    }
};

room13.chatcatch = function (callback) {
    $.each(callback.split(" "), function (i, v) {
        switch (v) {
            case "sissy0_0":
            case "sissy0_1":
            case "sissy0_2":
            case "sissy0_4":
            case "200_2":
            case "sissyEva3_3":
            case "sissyEva3_6":
            case "sissyEva3_7":
            case "sissyEva3_8":
            case "sissyEva3_9":
            case "sissyEva3_10":
            case "lolaSissy8_0":
            case "lolaSissy8_1":
            case "lolaSissy8_2":
            case "lolaSissy8_3":
            case "lolaSissy8_4":
            case "lolaSissy8_5":
                nav.killall();
                nav.bg("13_sisterRoom/" + callback + ".jpg");
                break;
            case "lolaSissy8_6":
                levels.oral(5, "m", "chad", false);
                nav.bg("13_sisterRoom/" + callback + ".jpg");
                break;
            case "sissyeva4":
                cl.nude();
                nav.killall();
                sc.completeMissionTask("eva", "sissy", 4);
                nav.bg("13_sisterRoom/" + callback + ".jpg");
                break;
            case "200_3":
                zcl.displayMain(-100, 500, .28, "clothes", true);
                nav.bg("13_sisterRoom/" + callback + ".jpg");
                break;
            case "200_4":
                cl.nude();
                zcl.displayMain(-100, 500, .28, "", true);
                if (cl.c.chastity !== null)
                    chat(147, 13);
                else if (cl.c.cock > 2)
                    chat(151, 13);
                else
                    chat(153, 13);
                break;
            case "200_5":
                cl.c.panties = "m";
                cl.c.bra = "l";
                cl.display();
                cl.add("panties", "m");
                cl.add("bra", "l");
                levels.mod("xdress", 10);
                zcl.displayMain(-100, 500, .28, "clothes", true);
                nav.bg("13_sisterRoom/" + callback + ".jpg");
                break;
            case "200_6":
                zcl.displayMain(-100, 500, .28, "clothes", false);
                break;
            case "200_7":
                zcl.displayMain(-100, 500, .28, "clothes", true);
                break;
            case "200_8":
                sc.completeMissionTask("eva", "sissy", 2);
                sc.completeMissionTask("lola", "sissy", 2);
                char.addtime(90);
                g.pass = 10;
                char.room(8);
                break;
            case "lolaDayEvent":
                daily.set("lola");
                char.room(13);
                break;
            case "lolaLevelDown":
                sc.modLevel("lola", 5, 999);
                break;
            case "evaLevelDown":
                sc.modLevel("eva", 5, 999);
                break;
            case "lolaLevelQuater":
                sc.modLevel("lola", 26, 999);
                break;
            case "lolaLevelHalf":
                sc.modLevel("lola", 53, 999);
                break;
            case "lolaLevelfull":
                sc.modLevel("lola", 101, 999);
                break;
            case "evaLevelQuater":
                sc.modLevel("eva", 26, 999);
                break;
            case "evaLevelHalf":
                sc.modLevel("eva", 53, 999);
                break;
            case "evaLevelfull":
                sc.modLevel("eva", 101, 999);
                break;
            case "secret5":
                sc.modSecret("lola", 5);
                sc.modSecret("eva", 5);
                break;
            case "dom":
                levels.mod("dom", 20, 999);
                break;
            case "sub":
                levels.mod("sub", 20, 999);
                break;
            case "beast":
                levels.mod("beast", 20, 999);
                break;
            case "charisma":
                levels.mod("charisma", 25, 999);
                break;
            case "xdress1":
                levels.mod("xdress", 33, 1);
                break;
            case "reset":
                char.room(13);
                break;
            case "leave":
                char.room(11);
                break;
            case "dresserLocked":
                gv.set("lockdrawer", true);
                break;
            case "arousal":
                gv.mod("arousal", 75);
                break;
            case "sniff1":
            case "sniff2":
                nav.bg("13_sisterRoom/" + v + ".jpg");
                break;
            case 'takePanties':
                cl.add("panties", "w");
                levels.mod("xdress", 50, 999);
                nav.killbutton("panties");
                break;
            case "killPantyIcon":
                nav.killbutton("panties");
                break;
            case "evaMassageEnd":
                char.addtime(45);
                daily.set("eva");
                sc.modLevel("eva", 75, g.internal.level);
                char.room(13);
                break;
            case "evatalk0":
                char.addtime(20);
                daily.set("evatalk");
                sc.completeMissionTask("eva", "talk", 0, true);
                sc.modLevel("eva", 27, 0);
                char.room(13);
                break;
            case "evatalk1":
                char.addtime(20);
                daily.set("evatalk");
                sc.completeMissionTask("eva", "talk", 0, true);
                sc.startMission("eva", "massage");
                sc.modLevel("eva", 27, 1);
                char.room(13);
                break;
            case "talkLola0":
                char.addtime(20);
                sc.completeMissionTask("lola", "talk", 0, true);
                sc.modLevel("lola", 27, 4);
                char.room(13);
                break;
            case "talkLola1":
                char.addtime(20);
                sc.startMission("lola", "massage");
                sc.completeMissionTask("lola", "talk", 1, true);
                sc.modLevel("lola", 27, 4);
                char.room(13);
                break;
            case "rollChrisma2":
                charisma.init(g.internal.charisma, "massage2chanceWin", "massage2chanceLose", g.roomID);
                break;
            case "sleepReset":
                nav.bg("13_sisterRoom/bedbg.jpg");
                room13.btnclick("bothRoll");
                break;
            case "evaSleepingJackTits":
                nav.button({
                    "type": "img",
                    "name": "jackDick",
                    "left": 1072,
                    "top": 280,
                    "width": 800,
                    "height": 800,
                    "image": "13_sisterRoom/jackDick.gif"
                }, 13);
                nav.next("evaSleepingJackTits1");
                break;
            case "evaSleepingJackPanties":
                nav.button({
                    "type": "img",
                    "name": "jackDick",
                    "left": 1072,
                    "top": 280,
                    "width": 800,
                    "height": 800,
                    "image": "13_sisterRoom/jackDick.gif"
                }, 13);
                nav.next("evaSleepingJackPanties1");
                break;
            case "lolaSleepingJackTits":
                nav.button({
                    "type": "img",
                    "name": "jackDick",
                    "left": 1072,
                    "top": 280,
                    "width": 800,
                    "height": 800,
                    "image": "13_sisterRoom/jackDick.gif"
                }, 13);
                nav.next("lolaSleepingJackTits1");
                break;
            case "lolaSleepingJackPanties":
                nav.button({
                    "type": "img",
                    "name": "jackDick",
                    "left": 1072,
                    "top": 280,
                    "width": 800,
                    "height": 800,
                    "image": "13_sisterRoom/jackDick.gif"
                }, 13);
                nav.next("lolaSleepingJackPanties1");
                break;
            case "fingerlola2":
                nav.bg("13_sisterRoom/sleep_lola_nude_3.jpg");
                nav.next("fingerlola4")
                break;
            case "evaLick1":
                nav.killall();
                nav.bg("13_sisterRoom/sleep_nude_4.jpg");
                nav.next("evaLick2");
                break;
            case "endEvaSleepEvent":
                cl.doCum();
                char.room(11);
                break;
            case "leaveMad":
                daily.set("elsleep");
                char.addtime(65);
                char.room(11);
                break;
            case "displaySnore":
                var lolaDrunk = daily.get("lolaDrunk");
                var evaDrunk = daily.get("evaDrunk");
                var drunkImg;

                if (lolaDrunk) {
                    drunkImg = "lolaSleep3.png";

                    nav.button({
                        "type": "img",
                        "name": "bed",
                        "left": 580,
                        "top": 120,
                        "width": 282,
                        "height": 214,
                        "image": "13_sisterRoom/" + drunkImg
                    }, 13);
                }
                if (evaDrunk) {
                    drunkImg = "evaSleep3.png";
                    nav.button({
                        "type": "img",
                        "name": "bed",
                        "left": 1620,
                        "top": 120,
                        "width": 288,
                        "height": 214,
                        "image": "13_sisterRoom/evaSleep2.png"
                    }, 13);
                }
                break;
            case "practiceDate0_end":
                sc.completeMissionTask("lola", "date", 0);
                future.add("practiceDate0", 1);
                char.room(13);
                break;
            case "lolaPark":
                g.pass = "lolaPark";
                char.room(450);
                break;
            case "drawDateIcons":
                sc.select("datePark", "13_sisterRoom/icon_pdPark.png", 0);
                sc.select("dateFair", "13_sisterRoom/icon_pdCarnival.png", 1);
                if (!sc.getMissionTask("lola", "date", 4).complete)
                    sc.select("dateHere", "13_sisterRoom/icon_pdRoom.png", 2);
                sc.selectCancel("dateCancel", 3);
                break;
            case "date0":
                nav.killall();
                nav.bg("13_sisterRoom/date0.jpg");
                break;
            case "date1":
                nav.killall();
                if (cl.pantiesTxt() === "panties") {
                    chat(99, 13);
                }
                else if (cl.c.bra !== null) {
                    chat(100, 13);
                }
                else if (!gender.canUseCock()) {
                    if (cl.c.chastity !== null)
                        chat(104, 13);
                    else
                        chat(105, 13);
                }
                else {
                    cl.nude();
                    nav.bg("13_sisterRoom/date1.jpg");
                    chat(74, 13);
                }
                break;
            case "date2":
            case "date3":
            case "date4":
            case "date5":
            case "date6":
            case "date7":
            case "date8":
            case "date9":
            case "date10":
            case "date20":
            case "date21":
            case "date22":
            case "date23":
                nav.bg("13_sisterRoom/" + v + ".jpg");
                break;
            case "date24":
                nav.bg("13_sisterRoom/" + v + ".gif");
                nav.next("date25");
                break;
            case "date11":
                g.internal = 12;
                nav.bg("13_sisterRoom/" + v + ".jpg");
                nav.next("date");
                break;
            case "dateEnd":
                levels.fuckpussy("lola");
                levels.gotbj("f", "eva");
                sc.completeMissionTask("lola", "date", 4);
                sc.completeMissionTask("lola", "date", 5);
                sc.startMission("eva", "fuck");
                sc.completeMissionTask("eva", "fuck", 0);
                char.addtime(192);
                char.room(10);
                break;
            case "leaveSecret":
                sc.modSecret("lola", 100);
                char.room(10);
                break;
            case "dateFail":
                sc.completeMission("lola", "date", false);
                char.room(10);
                break;
            case "room23":
                char.settime(20, 0);
                char.room(23);
                break;
            case "room24":
                char.settime(20, 0);
                char.room(24);
                break;
            case "dickBad":
                daily.set("eva");
                daily.set("lola");
                char.addtime(30);
                char.room(11);
                break;
            case "bj1":
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "bed",
                    "left": 887,
                    "top": 19,
                    "width": 990,
                    "height": 1061,
                    "image": "13_sisterRoom/bj1.png"
                }, 13);
                break;
            case "bj2":
                nav.killall();
                
                sc.modLevel("lola", 40, 7);
                nav.button({
                    "type": "btn",
                    "name": "lola",
                    "left": 1449,
                    "top": 260,
                    "width": 215,
                    "height": 820,
                    "image": (g.isNight() ? "13_sisterRoom/13_lola_pj.png" : "13_sisterRoom/13_lola_reading.png")
                }, 13);
                nav.button({
                    "type": "btn",
                    "name": "eva",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": (g.isNight() ? "13_sisterRoom/13_eva_pj.png" : "13_sisterRoom/13_eva_sitting.png")
                }, 13);
                break;
            case "f0":
                nav.killall();
                g.internal = 1;
                cl.nude();
                nav.bg("13_sisterRoom/f0.jpg");
                nav.next("f");
                break;
            case "fEnd":
                levels.fuckpussy("eva");
                levels.fuckpussy("lola");
                sc.completeMissionTask("lola", "date", 6);
                sc.completeMissionTask("eva", "fuck", 2);
                sc.modLevel("eva", 100, 10);
                sc.modLevel("lola", 100, 10);
                g.pass = 13;
                char.room(28);
                break;
            case "sissy0_3":
                levels.mod("xdress", 25);
                nav.bg("13_sisterRoom/sissy0_3.jpg");
                zcl.displayMain(0, 400, .32, "", false);
                if (cl.c.chest > 2)
                    chat(138, 13);
                else
                    chat(139, 13);
                break;
            case "endSissy0":
                sc.completeMissionTask("lola", "sissy", 1);
                sc.completeMissionTask("eva", "sissy", 1);
                char.addtime(180);
                char.room(575);
                break;
            case "killeva":
                nav.killbutton("eva");
                nav.killbutton("evaboobs");
                break;
            case "killLola":
                nav.killbutton("lola");
                break;
            case "sissyEva3_0":
                nav.modbutton("eva", "13_sisterRoom/sissyEva3_0.png", null, null);
                break;
            case "sissyEva3_1":
                g.internal = 0;
                nav.killall();
                nav.bg("13_sisterRoom/sissyEva3_1.jpg");
                nav.button({
                    "type": "tongue",
                    "name": "sissyEva3_1foot",
                    "left": 767,
                    "top": 153,
                    "width": 631,
                    "height": 637,
                    "title": "lick her feet",
                    "image": "13_sisterRoom/sissyEva3_1foot.png"
                }, 13);
                nav.button({
                    "type": "kiss",
                    "name": "sissyEva3_1pussy",
                    "left": 902,
                    "top": 803,
                    "width": 153,
                    "height": 126,
                    "title": "eat her pussy",
                    "image": "13_sisterRoom/sissyEva3_1pussy.png"
                }, 13);
                
                break;
            case "sissyEva3_4":
                cl.nude();
                zcl.displayMain(-1000, -500, .5, "clothes", true);
                break;
            case "sissyEva3_5":
                nav.killall();
                nav.bg("13_sisterRoom/sissyEva3_5.jpg");
                zcl.assup(500, 800, .7, "")
                nav.button({
                    "type": "img",
                    "name": "sissyEva3_5",
                    "left": 777,
                    "top": 0,
                    "width": 295,
                    "height": 1006,
                    "image": "13_sisterRoom/sissyEva3_5.png"
                }, 13);
                break;
            case "sissyEva3_11":
                sc.completeMissionTask("eva", "sissy", 3);
                char.room(10);
                break;
            case "evaSissy6":
                sc.completeMissionTask("eva", "sissy", 6);
                char.addtime(15);
                daily.set("evaTeach");
                char.room(13);
                break;
            case "room585":
                if (g.gethourdecimal() < 21)
                    char.settime(21, 2);
                else
                    char.addtime(54);
                g.pass = "room585First"
                char.room(585);
                break;
            case "hallway":
                nav.killall();
                nav.bg("11_hallway/11_hallway.jpg", "11_hallway/11_hallwayNight.jpg");
                break;
            case "lolaSissy6End":
                daily.set("lolahide");
                sc.completeMissionTask("lola", "sissy", 6);
                nav.killbutton("lola");
                break;
            case "lolaSissy7_0":
                nav.kill();
                nav.bg("13_sisterRoom/sissy7_0_day.jpg", "13_sisterRoom/sissy7_0_night.jpg");
                break;
            case "lolaSissy7_1":
                nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
                nav.kill();
                nav.button({
                    "type": "img",
                    "name": "c1",
                    "left": 1378,
                    "top": 73,
                    "width": 501,
                    "height": 1007,
                    "image": "13_sisterRoom/chad.webp"
                }, 13);
                nav.button({
                    "type": "img",
                    "name": "c",
                    "left": 1400,
                    "top": 260,
                    "width": 215,
                    "height": 820,
                    "image": (g.isNight() ? "13_sisterRoom/13_lola_pj.png" : "13_sisterRoom/13_lola_reading.png")
                }, 13);
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": (g.isNight() ? "13_sisterRoom/13_eva_pj.png" : "13_sisterRoom/13_eva_sitting.png")
                }, 13);
                break;
            case "lolaSissy7_2":
                nav.modbutton("c1", "13_sisterRoom/chad0.webp", null, null);
                break;
            case "lolaSissy7_3":
                nav.kill();
                nav.bg("13_sisterRoom/chad1.webp");
                break;
            case "lolaSissy7_4":
                nav.bg("13_sisterRoom/chad2.webp");
                break;
            case "lolaSissy7_5":
                nav.kill();
                sc.completeMissionTask("lola", "sissy", 7);
                daily.set("lolahide");
                nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
                nav.button({
                    "type": "btn",
                    "name": "eva",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": (g.isNight() ? "13_sisterRoom/13_eva_pj.png" : "13_sisterRoom/13_eva_sitting.png")
                }, 13);
                break;
            case "evanude":
                nav.kill();
                nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
                nav.button({
                    "type": "btn",
                    "name": "eva",
                    "left": 1163,
                    "top": 110,
                    "width": 488,
                    "height": 970,
                    "image": "13_sisterRoom/lolanude.png"
                }, 13);
                nav.button({
                    "type": "btn",
                    "name": "eva_lolaboy",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": (g.isNight() ? "13_sisterRoom/13_eva_pj.png" : "13_sisterRoom/13_eva_sitting.png")
                }, 13);
                break;
            //case "lolaSissy8_3":
            //    nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
            //    nav.button({
            //        "type": "img",
            //        "name": "lola",
            //        "left": 643,
            //        "top": 37,
            //        "width": 1092,
            //        "height": 1043,
            //        "image": "13_sisterRoom/lolaSissy8_3.png"
            //    }, 13);
            //    zcl.displayMain(260, 1400, .083, "clothes", false);
            //    break;
            case "privateMomFuck":
                g.pass = "privateMomFuck";
                char.room(174);
                break;
            case "fuckin0":
                nav.killbutton("fuckin");
                nav.button({
                    "type": "img",
                    "name": "fuckin",
                    "left": 739,
                    "top": 0,
                    "width": 874,
                    "height": 1080,
                    "image": "13_sisterRoom/fuckin0.webp"
                }, 13);
                break;
            case "fuckinEnd":
                sc.startMission("eva", "teach");
                daily.set("evaTeach");
                char.addtime(30);
                char.room(11);
                break;
            case "room174":
                g.pass = "lolaGetFucked";
                char.room(174);
                break;
            case "pillsaregood":
                inv.add("sleepingpills");
                break;
            case "sissy_13":
                if (sc.getMissionTask("lola", "sissy", 13).notStarted)
                    sc.completeMissionTask("lola", "sissy", 13);
                g.pass = "everyoneGetsFucked";
                char.room(174);
                break;
            default: break;
        }
    });
};

room13.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 0,
            speaker: "me",
            text: "error",
            button: []
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "So many panties...",
                button: [
                    { chatID: 23, text: "Sniff " + sc.n("eva") + "'s and " + sc.n("lola") + "'s panties", callback: "sniff1 arousal xdress1" },
                    { chatID: -1, text: "Close the drawer.", callback: "reset" }
                ]
            },
            {
                chatID: 1,
                speaker: "lola",
                text: sc.n("me") + "!!!! what are you doing. Are you going through our panties!!!",
                button: [
                    { chatID: 2, text: "....", callback: "secret5" }
                ]
            },
            {
                chatID: 2,
                speaker: "eva",
                text: sc.n("lola") + ", are you surprised. You always knew " + sc.n("me") + " was a dirty perv.",
                button: [
                    { chatID: 3, text: "I was just looking for my...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "lola",
                text: "Get out!! Get out get out get out!!!",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "lolaLevelDown evaLevelDown dresserLocked leave" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "Nothing in here but dirty clothes...",
                button: [
                    { chatID: -1, text: "Close", callback: "killPantyIcon" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: sc.n("lola") + "'s dirty panties! So simple and modest. And so dirty. The smell is so musky and sweet. " +
                    "She must have worn these all day and peed a bit in them. So dirty, but so sexy!  ",
                button: [
                    { chatID: -1, text: "...", callback: "killPantyIcon" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: sc.n("lola") + "'s dirty panties! So simple and modest. And so dirty. The smell is so musky and sweet. " +
                    "She must have worn these all day and peed a bit in them. So dirty, but so sexy!  ",
                button: [
                    { chatID: -1, text: "Put back her gross panties.", callback: "killPantyIcon" },
                    { chatID: -1, text: "Steal her dirty peed stained panties. ", callback: "takePanties" }
                ]
            },
            {
                chatID: 7,
                speaker: "me",
                text: "Dammit! They locked their panty drawer. Try to jack off into their panties once and you're locked out forever.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 8,
                speaker: "eva",
                text: "Hey panty sniffer, can't handle a burger job? ",
                button: [
                    { chatID: 9, text: "Eat my boogers " + sc.n("eva"), callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "lola",
                text: "I'm good. Thanks. ",
                button: [
                    { chatID: -1, text: "Ok. cool", callback: "lolaDayEvent" }
                ]
            },
            {
                chatID: 10,
                speaker: "lola",
                text: "Hey big guy! It's ok that you didn't do well in school. We're still rooting for you. " +
                    " I just wanted to say that I'm really proud of you. You've been working so hard lately, and it's showing. " +
                    "I can see how much you've accomplished, and it's amazing. I'm so lucky to have you as my big brother. You're " +
                    "my best friend, and I love you very much. ",
                button: [
                    { chatID: 11, text: "Thanks. I love you too.", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "lola",
                text: "I know. Our love will never be broken. Also our love for you too " + sc.n("eva") + " even " +
                    "if you are a bit of a pain in the ass sometimes. ",
                button: [
                    { chatID: 12, text: "Haha totally", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "eva",
                text: "Ok love birds. You're going to make me barf.  ",
                button: [
                    { chatID: 13, text: "Then barf butthead. ", callback: "evaLevel1half" },
                    { chatID: 13, text: "Oh sorry. ", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "lola",
                text: "Awww she just wants some love too. I love you too " + sc.n("eva") + " with all my " +
                    "heart. No boy will come between us. ",
                button: [
                    { chatID: -1, text: "Oh sorry. ", callback: "talkLola0" },
                ]
            },
            {
                chatID: 14,
                speaker: "lola",
                text: "My back is so sore! I really pushed myself swimming. " + sc.n("eva") + ", wanna " +
                    "rub it for me? ",
                button: [
                    { chatID: 15, text: "...", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "eva",
                text: "Stop hitting on me ho-bag! I ain't your bitch! ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "lola",
                text: "Welp, best buddy, ol' pal, I guess I'll have to beg your for a massage. My shoulders can " +
                    "really use it. ",
                button: [
                    { chatID: -1, text: "Anytime!", callback: "talkLola1" },
                ]
            },
            {
                chatID: 17,
                speaker: "lola",
                text: "You have such great hands! So manly and strong. I bet you would make a really sexy  " +
                    "firefighter. Rushing into burning buildings and saving people. Wearing all that big " +
                    "manly gear. ",
                button: [
                    { chatID: 18, text: "I am so manly", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "eva",
                text: "Hrumph. He couldn't save himself from a burning candle. We all know you get moist watching " +
                    "that firefighter show. ",
                button: [
                    { chatID: -1, text: "Hey", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "lola",
                text: "I'm sure " + sc.n("me") + " could be a firefighter. Besides I can't help loving them, they're " +
                    "all so big and brave. ",
                button: [
                    { chatID: 20, text: "I could be! I would totally rescue you!", callback: "lolaLevelQuater dom" },
                    { chatID: 21, text: "I don't know. Firefighter seems a dangerous.", callback: "evaLevelQuater sub" },
                ]
            },
            {
                chatID: 20,
                speaker: "lola",
                text: "You would be the best firefighter ever! You can save me anytime! ",
                button: [
                    { chatID: -1, text: "And I would too!", callback: "lolaLevelHalf lolaDayEvent" },
                ]
            },
            {
                chatID: 21,
                speaker: "eva",
                text: "Even he knows he's too much of a wimp to do it. He better at licking my feet like a dog " +
                    "than saving people. ",
                button: [
                    { chatID: 22, text: "...", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "lola",
                text: "You're so rude! He's not a dog, he's a boy!",
                button: [
                    { chatID: -1, text: "I am a boy!", callback: "lolaDayEvent" },
                    { chatID: -1, text: "Nope. I would totally lick " + sc.n("eva") + "'s feet like a dog", callback: "lolaLevelDown evaLevelQuater sub beast lolaDayEvent" },
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "So fresh and so clean. Delicate and tiny just like " + sc.n('eva') + ". I bet they wouldn't notice if " +
                    "I steal just one pair. ",
                button: [
                    { chatID: 2, text: "...", callback: "sniff2" }
                ]
            },
            {
                chatID: 24,
                speaker: "lola",
                text: "Hehe. Love your style. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "thinking",
                text: "Nice, this must be the key to their room!",
                button: [
                    { chatID: -1, text: "Key added to inventory", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "eva",
                text: "Hey panty sniffer, can't handle a burger job? ",
                button: [
                    { chatID: 27, text: "Eat my boogers ", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "eva",
                text: "I would, but you've already picked and ate them. That's why your breath smells so bad!",
                button: [
                    { chatID: 30, text: "Well at least my breath doesn't smell like dick! ", callback: "lolaLevelDown evaLevelHalf" },
                    { chatID: 28, text: "That's hurtful ", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "eva",
                text: "Oooo is the baby going to cry? ",
                button: [
                    { chatID: 29, text: "...no ", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "eva",
                text: "You should play with " + sc.n("lola") + ". She's much nicer. ",
                button: [
                    { chatID: -1, text: "She is nicer. ", callback: "reset" },
                ]
            },
            {
                chatID: 30,
                speaker: "lola",
                text: "Just because she's a little... promiscuous, you shouldn't call her that. ",
                button: [
                    { chatID: 31, text: "Awwww, sorry, I didn't mean it. I was just trying to be funny. ", callback: "lolaLevelQuater" },
                ]
            },
            {
                chatID: 31,
                speaker: "eva",
                text: "I'm promiscuous? You say that like I've slept with half the football team. I'll have you know I've only " +
                    "had sex with one of them. And I was very drunk, so it doesn't count. ",
                button: [
                    { chatID: 32, text: "Well if being drunk doesn't count, then you're still a virgin ", callback: "evaLevelHalf" },
                    { chatID: -1, text: "You're right. It doesn't count. ", callback: "evatalk0" },
                ]
            },
            {
                chatID: 32,
                speaker: "lola",
                text: "You two are the worst! ",
                button: [
                    { chatID: -1, text: "We are", callback: "evatalk0" },
                ]
            },
            {
                chatID: 33,
                speaker: "me",
                text: "So how is the football team? ",
                button: [
                    { chatID: 34, text: "...", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "eva",
                text: "I wouldn't know. I broke up with Amari months ago. I would ask you how the cheerleaders are, but I know they " +
                    "would never touch you!",
                button: [
                    { chatID: 35, text: "Pshhhttt I could date a cheerleader if I wanted! ", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "eva",
                text: "Maybe if they were blind and deaf and no one told them what a loser you were. Even " + sc.n("chuck") + " the " +
                    "weird guy is able to bag a cheerleader. ",
                button: [
                    { chatID: 36, text: "Didn't YOU go out with him?", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "eva",
                text: "Yeah, in the 5th grade! He was even weird then. He kept trying to lick my feet. Didn't even want to kiss me. Just " +
                    "my feet. What is it with you guys and feet anyways? ",
                button: [
                    { chatID: 38, text: "I really don't know. ", callback: "" },
                    { chatID: 37, text: "It's because they're just so soft and delicate. Love a freshly peticured foot", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "eva",
                text: "I always thought you were one of the weird feet guys! I bet you'd love to worship my feet like some kind of pervert.",
                button: [
                    { chatID: 39, text: "Yes I would", callback: "" },
                ]
            },
            {
                chatID: 38,
                speaker: "eva",
                text: "Whatever. You're so one of those weird guys.  I bet you'd love to worship my feet like some kind of pervert.",
                button: [
                    { chatID: 39, text: "meh", callback: "" },
                ]
            },
            {
                chatID: 39,
                speaker: "eva",
                text: "Well ok. I'll admit I do love a foot massage. If you want to perv on my feet let me know. ",
                button: [
                    { chatID: -1, text: "Oh yea! ", callback: "evaLevelQuater evatalk1" },
                    { chatID: -1, text: "eh..", callback: "evatalk1" },
                ]
            },
            {
                chatID: 40,
                speaker: "!blank",
                text: "In progress...  ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "eva",
                text: "It's too late in the day for a massage. Catch me earlier. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "" },
                ]
            },
            {
                chatID: 42,
                speaker: "lola",
                text: "It's too late in the day for a massage. Catch me earlier. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "" },
                ]
            },
            {
                chatID: 43,
                speaker: "eva",
                text: "We can't play spin the bottle without a bottle stupid. Go get some wine! ",
                button: [
                    { chatID: -1, text: "Oh yeah. I'll go get some wine. ", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "lola",
                text: "It's too early in the day for wine. I still have so much to do and I don't " +
                    "want to ruin optimal study hours drinking wine.",
                button: [
                    { chatID: -1, text: "Wiat 'til dark and play. ", callback: "room24" },
                    { chatID: -1, text: "Ok. I'll come back after dark.  ", callback: "" }
                ]
            },
            {
                chatID: 45,
                speaker: "eva",
                text: "You know a bottle of wine makes these game so much more fun. I won't play " +
                    "without fun! ",
                button: [
                    { chatID: -1, text: "Oh yeah. I'll go get some wine. ", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "eva",
                text: "Hey booger brain, why don't you go fart on a pillow and stop staring at me.",
                button: [
                    { chatID: -1, text: "You're the fart... I mean.. I hate you.", callback: "" },
                ]
            },
            {
                chatID: 47,
                speaker: "thinking",
                text: "She's so hot. Too bad I'm in chastity or I might do something naughty. ",
                button: [
                    { chatID: -1, text: "...", callback: "sleepReset" },
                ]
            },
            {
                chatID: 48,
                speaker: "thinking",
                text: "So soft and peaceful. She really does sleep deeply. I wonder if " +
                    "she'll wake up if I jack off on her. I'm so horny right now. Just a " +
                    "quick one all over those beautiful tits. I'm sure she won't mind. ",
                button: [
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + sc.el() + ".", callback: "sleepReset" },
                    { chatID: -1, text: "Just a quick jack won't hurt", callback: "evaSleepingJackTits" },
                ]
            },
            {
                chatID: 49,
                speaker: "thinking",
                text: "Hahaha. I totally covered her in cum! She's a slut now. I better get going " +
                    "before I get caught..",
                button: [
                    { chatID: -1, text: "Disappear into the night. Also you're a sick pervert. ", callback: "endEvaSleepEvent" },
                ]
            },
            {
                chatID: 50,
                speaker: "thinking",
                text: "So soft and peaceful. Her skin is so pale and smooth. My dick is so " +
                    "hard right now it hurts. I don't think she'd mine if I took care of it " +
                    "really quick...",
                button: [
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + sc.el() + ".", callback: "sleepReset" },
                    { chatID: -1, text: "Just a quick jack won't hurt", callback: "lolaSleepingJackTits" },
                ]
            },
            {
                chatID: 51,
                speaker: "thinking",
                text: "Hahaha. I totally covered her in cum! She's a slut now. I better get going " +
                    "before I get caught..",
                button: [
                    { chatID: -1, text: "Disappear into the night. Also you're a sick pervert. ", callback: "endEvaSleepEvent" },
                ]
            },
            {
                chatID: 52,
                speaker: "thinking",
                text: "Look at that soft pubic mound. She's such a natural slut with her legs " +
                    "spread open and ready. Fuck that would look so sexy with my cum leaking " +
                    "out of her. I so want to fuck her. I'm going to cum all over those little white panties. ",
                button: [
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + sc.el() + ".", callback: "sleepReset" },
                    { chatID: -1, text: "Just a quick jack won't hurt", callback: "evaSleepingJackPanties" },
                ]
            },
            {
                chatID: 53,
                speaker: "thinking",
                text: "Fuck that cum needs to be in her and not dripping down those cute little " +
                    "panties of hers. ",
                button: [
                    { chatID: -1, text: "Disappear into the night. Also you're a sick pervert. ", callback: "endEvaSleepEvent" },
                ]
            },
            {
                chatID: 54,
                speaker: "thinking",
                text: "What a tight ass! That swimming really is paying off. I so want to rub my " +
                    "dick between those cheeks. Fuck I'm horny. I just really need to spank the monkey " +
                    "really quick. ",
                button: [
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + sc.el() + ".", callback: "sleepReset" },
                    { chatID: -1, text: "Just a quick jack won't hurt", callback: "lolaSleepingJackPanties" },
                ]
            },
            {
                chatID: 55,
                speaker: "thinking",
                text: "Fuck that cum needs to be in her and not dripping off that hot " +
                    "ass of hers. ",
                button: [
                    { chatID: -1, text: "Disappear into the night. Also you're a sick pervert. ", callback: "endEvaSleepEvent" },
                ]
            },
            {
                chatID: 56,
                speaker: "thinking",
                text: sc.n("lola") + "'s pussy is so wet and warm. I so need to fuck my " +
                    "hot, sexy " + sc.el() + "! Damn that pussy needs cock so bad! ",
                button: [
                    { chatID: -1, text: "Carefully slide your dick into her", callback: "fingerlola2" },
                    { chatID: -1, text: "Do the right thing. ", callback: "sleepReset" },
                ]
            },
            {
                chatID: 57,
                speaker: "lola",
                text: "Aaaa what are you doing?",
                button: [
                    { chatID: 58, text: "Ohhh uh", callback: "" },
                ]
            },
            {
                chatID: 58,
                speaker: "eva",
                text: "Dirty dirty pervert!!! Get out of our room before we tell on you! ",
                button: [
                    { chatID: -1, text: "Yes, right away. Sorry...", callback: "leaveMad" },
                ]
            },
            {
                chatID: 59,
                speaker: "thinking",
                text: sc.n("eva") + "'s suck a slut! Just laying there with her legs open displaying " +
                    "her pussy. She's so easy I could just start fucking her here. Looks a bit dry, " +
                    "maybe I should like it first to lube her up before I fuck her. ",
                button: [
                    { chatID: -1, text: "Get her juices flowing and lick her pussy.", callback: "" },
                    { chatID: -1, text: "Do the right thing. ", callback: "sleepReset" },
                ]
            },
            {
                chatID: 60,
                speaker: "thinking",
                text: "She's dripping wet and so hungry for my cock. Get ready slut. hehehe",
                button: [
                    { chatID: -1, text: "Gently slide your cock into your " + sc.el() + "'s pussy.", callback: "evaLick1" },
                ]
            },
            {
                chatID: 61,
                speaker: "me",
                text: "So uhhh, our " + sc.n("landlord") + " wanted me, er us, to go on a practice date. ",
                button: [
                    { chatID: 62, text: "...", callback: "" },
                ]
            },
            {
                chatID: 62,
                speaker: "lola",
                text: "Oh yeah. She's been trying to get me to date for a while, but she always picks " +
                    "such terrible boys. I'll go on the date, but they're so terrible I usually end it " +
                    "before we even get anywhere. She mentioned I needed to practice dating. I didn't know " +
                    "this is what she came up with. ",
                button: [
                    { chatID: 63, text: "Yeah. She sprung it on me too. I thought it was weird, but you know. Why not. Did you want to go on a practice date? ", callback: "" },
                ]
            },
            {
                chatID: 63,
                speaker: "lola",
                text: "Hmmmm. Sure. Why not. What can it hurt. I'll pick the spot. I don't want to run into " +
                    "my friends to ask why I'm going on a date with.... well you know...",
                button: [
                    { chatID: 64, text: "Haha. Yeah. That would be weird. ", callback: "" },
                ]
            },
            {
                chatID: 64,
                speaker: "lola",
                text: "Cool! Give me at least a day to get everything ready! Ask me before it gets dark. So excited! ",
                button: [
                    { chatID: -1, text: "Haha. Yeah. That would be weird. ", callback: "practiceDate0_end" },
                ]
            },
            {
                chatID: 65,
                speaker: "lola",
                text: "Ask me before it's dark tomorrow. I've got to get ready. ",
                button: [
                    { chatID: -1, text: "ok", callback: "reset" },
                ]
            },
            {
                chatID: 66,
                speaker: "lola",
                text: "It's too late for a friendly date. Ask me before it's dark. ",
                button: [
                    { chatID: -1, text: "ok", callback: "reset" },
                ]
            },
            {
                chatID: 67,
                speaker: "lola",
                text: "Oh goody! We're going to go to the park! Let's go! ",
                button: [
                    { chatID: -1, text: "Totally! ", callback: "lolaPark" },
                ]
            },
            {
                chatID: 68,
                speaker: "lola",
                text: "There isn't anything to do here. Let's go out somewhere.",
                button: [
                    { chatID: -1, text: "oh sure [Need Level 7]", callback: "drawDateIcons" },
                ]
            },
            {
                chatID: 69,
                speaker: "lola",
                text: "Here? What did you have in mind? ",
                button: [
                    { chatID: 70, text: "I was hoping we could practice making out. ", callback: "" },
                ]
            },
            {
                chatID: 70,
                speaker: "lola",
                text: "So I know you like making out. I love making out with you, but I have " +
                    "something that's been bothering me for a long long while that I need to " +
                    "get out before we make out on the bed. ",
                button: [
                    { chatID: 71, text: "What's that? ", callback: "date0" },
                ]
            },
            {
                chatID: 71,
                speaker: "lola",
                text: "I love you. I think I've always loved you. I've never gone more than " +
                    "a single date with any boy in my life because I always compare them to " +
                    "you. I can't get you out of my mind. Do you love me back? ",
                button: [
                    { chatID: 72, text: "Sure ", callback: "" },
                ]
            },
            {
                chatID: 72,
                speaker: "lola",
                text: "Sure? Here I am practically throwing myself at you, and all you can say " +
                    "is sure? Surely you have something, anything, more romantic than that! ",
                button: [
                    { chatID: 73, text: "...", callback: "" },
                ]
            },
            {
                chatID: 73,
                speaker: "me",
                text: sc.n("lola") + ". I've been chasing after you to get to this day for " +
                    "years. There is nothing I want more than to be in this room right now " +
                    "with you. You are all I think about. ",
                button: [
                    { chatID: 74, text: "...", callback: "date1" },
                ]
            },
            {
                chatID: 74,
                speaker: "lola",
                text: "Come here you big beautiful man! I'm so ready to lose my virginity to you! ",
                button: [
                    { chatID: 75, text: "...", callback: "date2" },
                ]
            },
            {
                chatID: 75,
                speaker: "landlord",
                text: "And just what in the hell are you two doing? ",
                button: [
                    { chatID: 76, text: "eeep!", callback: "date3" },
                ]
            },
            {
                chatID: 76,
                speaker: "lola",
                text: "Where did you come from?",
                button: [
                    { chatID: 77, text: "...", callback: "" },
                ]
            },
            {
                chatID: 77,
                speaker: "landlord",
                text: "I've been watching from the window. You need to start locking that window. " +
                    "But that's not important. " + sc.n("me") + " you were about to take " + sc.n("lola") +
                    "'s virginity weren't you? A " + sc.n("landlord") + " can tell. Just a couple horny " +
                    "teenagers about to have sex! ",
                button: [
                    { chatID: 78, text: "Uhhhhh, no, no, we were....", callback: "date4" },
                ]
            },
            {
                chatID: 78,
                speaker: "landlord",
                text: "Yes you were! I'm so happy. I was so afraid that " + sc.n("lola") + " would turn " +
                    "into one of those weird lonly cat ladies and die a virgin. I'm so happy you have " +
                    "a sex drive. ",
                button: [
                    { chatID: 79, text: "?", callback: "" },
                ]
            },
            {
                chatID: 79,
                speaker: "lola",
                text: "So, you aren't mad at us? ",
                button: [
                    { chatID: 80, text: "...", callback: "" },
                ]
            },
            {
                chatID: 80,
                speaker: "landlord",
                text: "I'm not mad. I'm so happy for you. Which is why I'm here. Losing your " +
                    "virginity is a special time for a girl and I want to make sure it's " +
                    "everything that it should be. " + sc.n("me") + " is a good boy, but he's " +
                    "such an idiot. Let's make your first time memorable and not something you " +
                    "regret later. Now you are taking those birth control pills I gave you right? ",
                button: [
                    { chatID: 87, text: "...", callback: "" },
                ]
            },
            {
                chatID: 81,
                speaker: "landlord",
                text: "Good girl, now lay down on the bed. " +
                    sc.n("me") + " get on top of her, but don't you dare insert your penis into " +
                    "her vagina till I tell you to.",
                button: [
                    { chatID: 82, text: "...ok", callback: "date5" },
                ]
            },
            {
                chatID: 82,
                speaker: "landlord",
                text: "Start by kissing her on the mouth and move down to her neck. " +
                    "light kissing and sucking. ",
                button: [
                    { chatID: 83, text: "*suck* *lick*", callback: "date6" },
                ]
            },
            {
                chatID: 83,
                speaker: "landlord",
                text: "Good boy. Now move down to hear breasts. Lightly lick and suck her nipples. " +
                    "Not too hard, she's got sensative nipples. ",
                button: [
                    { chatID: 84, text: "*lick* *suckle*", callback: "date7" },
                ]
            },
            {
                chatID: 84,
                speaker: "landlord",
                text: "Move down the belly, past her vagina to her inner thigh. Start kissing her " +
                    "gengly, but you can get a little more rougher in there. Show her how aroused " +
                    "you are, and how much to desire to insert your penis into her vagina. ",
                button: [
                    { chatID: 85, text: "*kiss*", callback: "date8" },
                ]
            },
            {
                chatID: 85,
                speaker: "landlord",
                text: "Good boy. That smell in the room is " + sc.n("lola") + "'s arousal. Her body " +
                    "is getting ready for sex by lubricating her vagina. Now move your mouth up and " +
                    "lick around her vaginal lips before flicking and licking her clitorus. ",
                button: [
                    { chatID: 86, text: "*lick* *suck*", callback: "date9" },
                ]
            },
            {
                chatID: 86,
                speaker: "landlord",
                text: "Notice how sopping wet she is. She is now ready to take your penis inside her " +
                    "vagina. Now, " + sc.n("lola") + " since it's your first time you need to get on top " +
                    "so you can control the speed and depth of " + sc.n("me") + "'s penis inside you. ",
                button: [
                    { chatID: 87, text: "...", callback: "date10" },
                ]
            },
            {
                chatID: 87,
                speaker: "landlord",
                text: "I was scared my first time, but I learned to enjoy it. Don't you worry " +
                    "baby, just take it inside of you nice and slow.",
                button: [
                    { chatID: -1, text: "...", callback: "date11" },
                ]
            },
            {
                chatID: 88,
                speaker: "eva",
                text: "Why is everyone fucking in MY room?",
                button: [
                    { chatID: 89, text: "...", callback: "date19" },
                ]
            },
            {
                chatID: 89,
                speaker: "landlord",
                text: "Watch you language! I've told you a thousand times, no cussing in my " +
                    "house. You remember what happened the last time you used such foul language " +
                    "under my roof! " +
                    "You just ruined " + sc.n("lola") + "'s experience. " +
                    "Unlike yourself losing her virginity is a big deal for your " + sc.el() + 
                    ". ",
                button: [
                    { chatID: 90, text: "...", callback: "" },
                ]
            },
            {
                chatID: 90,
                speaker: "eva",
                text: "Fuck you! Your precious little " + sc.n("lola") + " is just too scared to " +
                    "get laid doesn't mean she's better! Besides, you're both just jealous I can " +
                    "get any man I want. ",
                button: [
                    { chatID: 91, text: "...", callback: "" },
                ]
            },
            {
                chatID: 91,
                speaker: "landlord",
                text: "Don't make me laugh. You know your last boyfriend, Jimmy? He stopped by my " +
                    "work and we had a little talk about why he dumped you. It seems like you're " +
                    "terrible at giving blow jobs. Since you've decided to behave unlady like and " +
                    "cuss at me under my roof, you punishment will be how to give a proper deep throat. " +
                    "Every punishement needs a lesson, and you're getting yours right now! ",
                button: [
                    { chatID: 92, text: "?", callback: "date20" },
                ]
            },
            {
                chatID: 92,
                speaker: "eva",
                text: "B-b-but, it's so dirty",
                button: [
                    { chatID: 93, text: "...", callback: "" },
                ]
            },
            {
                chatID: 93,
                speaker: "landlord",
                text: "Oh please. I know what you do in this room all night. This isn't the first time " +
                    "you've tasted " + sc.n("lola") + "'s vaginal fluids. Put your hands to your side " +
                    "and take his soft penis all the way into your mouth. ",
                button: [
                    { chatID: 94, text: "...", callback: "date21" },
                ]
            },
            {
                chatID: 94,
                speaker: "landlord",
                text: "That's my good girl. Take it all the way into your throat. ",
                button: [
                    { chatID: 95, text: "...", callback: "date22" },
                ]
            },
            {
                chatID: 95,
                speaker: "eva",
                text: "He's hard! It hurts to take him all the way in my throat when he's hard like " +
                    "that. Tell him to get soft again! ",
                button: [
                    { chatID: 96, text: "...", callback: "" },
                ]
            },
            {
                chatID: 96,
                speaker: "landlord",
                text: "Oh dear, you silly girl, you do need help. ",
                button: [
                    { chatID: 97, text: "...", callback: "date23" },
                ]
            },
            {
                chatID: 97,
                speaker: "landlord",
                text: "Just relax your throat and take his entire penis into your mouth like this! ",
                button: [
                    { chatID: -1, text: "...", callback: "date24" },
                ]
            },
            {
                chatID: 98,
                speaker: "landlord",
                text: "That's my girl! It's such a gift to be given a man's cum! You look so " +
                    "pretty covered in his white sticky goo. " + sc.n("me") + " go to your room " +
                    "and let the girls clean up in private. After all, a girl has to have some " +
                    "privacy. ", 
                button: [
                    { chatID: -1, text: "Ok. ", callback: "dateEnd" },
                ]
            },
            {
                chatID: 99,
                speaker: "lola",
                text: "Are you wearing panties? Why are you wearing panties? ",
                button: [
                    { chatID: 101, text: "Oh, what. Uhhh ", callback: "" },
                ]
            },
            {
                chatID: 100,
                speaker: "lola",
                text: "Are you wearing bra? Why are you wearing bra? ",
                button: [
                    { chatID: 101, text: "Oh, what. Uhhh ", callback: "" },
                ]
            },
            {
                chatID: 101,
                speaker: "lola",
                text: "You're crossdressing aren't you? It's ok you can tell me. I've known " +
                    "you for a long time. You want to be a girl down't you? ",
                button: [
                    { chatID: 102, text: "What? Me, no.", callback: "" },
                    { chatID: 103, text: "It's such a relief. Yes, I want to be a girl!", callback: "" },
                ]
            },
            {
                chatID: 102,
                speaker: "lola",
                text: "You don't have to lie to me. I know you do. Why would you wear girl's " +
                    "underwear. You need to be true to yourself. It's time to come out and your true " +
                    "self. ",
                button: [
                    { chatID: 103, text: "Fine, I want to be a girl. ", callback: "" },
                ]
            },
            {
                chatID: 103,
                speaker: "lola",
                text: "I'm so proud of you. It takes guts to be the real you. I'm going to " +
                    "run and catch up with some friends. Just know I'm very proud of you. ",
                button: [
                    { chatID: -1, text: "..oh. ok. Bye bye. ", callback: "leaveSecret" },
                ]
            },
            {
                chatID: 104,
                speaker: "lola",
                text: "Oh my. That's a chastity thing isn't it. I've heard about those. Boys who " +
                    "want to be girls wear them. Do you want to be a girl? ",
                button: [
                    { chatID: 103, text: "It's such a relief. Yes, I want to be a girl!", callback: "" },
                ]
            },
            {
                chatID: 105,
                speaker: "lola",
                text: "Oh my. I didn't realise you have such a tiny penis. There's nothing wrong " +
                    "with that. I just don't know if I can do this. I've got to go see some friends. ",
                button: [
                    { chatID: -1, text: "...ok", callback: "dateFail" },
                ]
            },
            {
                chatID: 106,
                speaker: "lola",
                text: "It's too early in the day for games. I still have so much to do and I don't " +
                    "want to ruin optimal study hours drinking wine.",
                button: [
                    { chatID: -1, text: "Wait till dark and play. ", callback: "room23" },
                    { chatID: -1, text: "Ok. I'll come back after dark.  ", callback: "" }
                ]
            },
            {
                chatID: 107,
                speaker: "lola",
                text: "Oh my. That's your penis.",
                button: [
                    { chatID: 108, text: "Yes it is!", callback: "" }
                ]
            },
            {
                chatID: 108,
                speaker: "lola",
                text: "...um, do you mind if I lick it?",
                button: [
                    { chatID: 110, text: "Anything for you", callback: "bj1" },
                    { chatID: 109, text: "Nope. This dick is for " + sc.n("eva") + ". ", callback: "" },
                ]
            },
            {
                chatID: 109,
                speaker: "eva",
                text: "Gross! I don't want that. No one wants that! Get out pervert!",
                button: [
                    { chatID: -1, text: "Oh. ok. ", callback: "dickBad" },
                ]
            },
            {
                chatID: 110,
                speaker: "lola",
                text: "oooo. It tastes a little salty. Is that cum? Did you cum?",
                button: [
                    { chatID: 111, text: "...huh. No, I didn't cum! That's just precum!", callback: "bj2" },
                ]
            },
            {
                chatID: 111,
                speaker: "eva",
                text: sc.n("lola") + " you're such a nerd! You need to get laid! ",
                button: [
                    { chatID: -1, text: "Yeah you do. *wink*", callback: "reset" },
                ]
            },
            {
                chatID: 112,
                speaker: "thinking",
                text: "I already took my dick out. Don't want to be too weird about it.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 113,
                speaker: "lola",
                text: "Oh my. That's your penis. You better put that away or " + sc.n("landlord") +
                    " will come in and yell at us. ",
                button: [
                    { chatID: -1, text: "...oh. ok.", callback: "reset" },
                ]
            },
            {
                chatID: 114,
                speaker: "eva",
                text: "Oh look. The pervert's waving his dick around again. ",
                button: [
                    { chatID: 115, text: "hehehe", callback: "" },
                ]
            },
            {
                chatID: 115,
                speaker: "lola",
                text: "Shut up " + sc.n("eva") + ". We need this! ",
                button: [
                    { chatID: -1, text: "😉", callback: "f0" },
                ]
            },
            {
                chatID: 116,
                speaker: "lola",
                text: "My legs won't stop shaking from my orgasm overload! Damn that " +
                    "was fun. ",
                button: [
                    { chatID: 117, text: "Hahaha, yeah. I can feel the entire bed shake. ", callback: "" },
                ]
            },
            {
                chatID: 117,
                speaker: "eva",
                text: "Yeah. For a weird pervert, you can sling that dick. The bed is just " +
                    "a mess of sweat, cum, and squirt that we'll be laying in all night. ",
                button: [
                    { chatID: 118, text: "Well then stop squirting so much! ", callback: "" },
                ]
            },
            {
                chatID: 118,
                speaker: "lola",
                text: "Life is just perfect right now. I just want to stay this moment " +
                    "forever. ",
                button: [
                    { chatID: -1, text: "Me too. [Drift off to sleep]", callback: "fEnd" },
                ]
            },
            {
                chatID: 119,
                speaker: "eva",
                text: "Oh my god! Go put on some clothes!",
                button: [
                    { chatID: -1, text: "Oh. hahaha", callback: "leave" },
                ]
            },
            {
                chatID: 120,
                speaker: "eva",
                text: "I still think you're just doing this to see us naked some more, " +
                    "but I'm willing to help you out.",
                button: [
                    { chatID: 122, text: "I'm really a sissy!", callback: "" },
                ]
            },
            {
                chatID: 121,
                speaker: "eva",
                text: "We're going to have so much fun! I can't believe I didn't see it before!",
                button: [
                    { chatID: 122, text: "Yea!", callback: "" },
                ]
            },
            {
                chatID: 122,
                speaker: "lola",
                text: "We're in the mood for some ice cream. Come with us! It'll be great! ",
                button: [
                    { chatID: 123, text: "Sure!", callback: "sissy0_0" },
                    { chatID: 123, text: "Some other time. ", callback: "reset" },
                ]
            },
            {
                chatID: 123,
                speaker: "lola",
                text: "You look so pretty today, I'm kinda jealous how well you pull off that outfit. ",
                button: [
                    { chatID: 124, text: "Thanks!", callback: "" },
                ]
            },
            {
                chatID: 124,
                speaker: "eva",
                text: "It's cause she's knows what perverts like to look at! ",
                button: [
                    { chatID: 125, text: "*sigh*", callback: "" },
                ]
            },
            {
                chatID: 125,
                speaker: "lola",
                text: "Hey be nice. She's going through a lot right now. It's a big " +
                    "change. Almost as big as the ice cream I ordered. ",
                button: [
                    { chatID: 126, text: "...", callback: "sissy0_1" },
                ]
            },
            {
                chatID: 126,
                speaker: "lola",
                text: "Is it wrong how excited I am for this ice cream? I haven't had " +
                    "any sweets for two weeks now. Staying skinny is just too much work " +
                    "sometimes. Maybe I should just chuck it all and eat ice cream all day. ",
                button: [
                    { chatID: 127, text: "That would be the life!", callback: "" },
                ]
            },
            {
                chatID: 127,
                speaker: "eva",
                text: "You liar, we had ice cream a couple days ago in the school " +
                    "cafeteria. When we started eating it you said the exact same " +
                    "thing. You're addicted to swimming, and eating healthy, and " +
                    "always doing the right thing, admit it.",
                button: [
                    { chatID: 128, text: "hmmmm", callback: "" },
                ]
            },
            {
                chatID: 128,
                speaker: "eva",
                text: "Oh yeah, I guess we did have ice cream. I'm such an airhead " +
                    "sometimes. *groan* ",
                button: [
                    { chatID: 129, text: "You aren't an airhead! You're the smartest person I know!", callback: "" },
                ]
            },
            {
                chatID: 129,
                speaker: "eva",
                text: "Shut up white knight. Speaking of air heads, did you hear " +
                    sc.n("jada") + " was dating " + sc.n("jimmy") + " again. I swear I don't see what she sees " +
                    "in him. All he does is play cards with those losers down the " +
                    "street. She could do so much better than him.",
                button: [
                    { chatID: 130, text: "Hay!", callback: "" },
                ]
            },
            {
                chatID: 130,
                speaker: "lola",
                text: "I don't know, he's kinda cute you know. When I was younger I " +
                    "had such a crush on him. He's really good at rugby. ",
                button: [
                    { chatID: 131, text: "They are good together", callback: "sissy0_2" },
                ]
            },
            {
                chatID: 131,
                speaker: "river",
                text: "Hey girls, wanna ditch this loser and hang out with me? I can " +
                    "totally take you both on. I'll even tell you which one of you is " +
                    "better. ",
                button: [
                    { chatID: 132, text: "huh?", callback: "" },
                ]
            },
            {
                chatID: 132,
                speaker: "lola",
                text: "If I wanted to see a shrimp penis I would visit the aquarium. " +
                    "Why don't you just go away and let us enjoy our ice cream in peace. ",
                button: [
                    { chatID: 133, text: "yeah", callback: "" },
                ]
            },
            {
                chatID: 133,
                speaker: "river",
                text: "Shrimp dick? I have a huge dick! Plus I'm not some loser queer like " +
                    sc.n("me") + " over here. Show them what a loser you are. Flash your " +
                    "sissy tits for me fairy or I'll pound your face. ",
                button: [
                    { chatID: -1, text: "[Reluctantly flash your sissy tits]", callback: "sissy0_3" },
                    { chatID: 134, text: "I'm not doing that!", callback: "" }
                ]
            },
            {
                chatID: 134,
                speaker: "lola",
                text: "The only loser in here is you! Now go away before I get the manager " +
                    "and make it so you can never come back and have ice cream again! ",
                button: [
                    { chatID: 135, text: "...", callback: "" },
                ]
            },
            {
                chatID: 135,
                speaker: "river",
                text: "I was just jokin'. Just thought I'ld give you a chance. Ya'll have " +
                    "a good day. ",
                button: [
                    { chatID: 136, text: "...", callback: "sissy0_1" },
                ]
            },
            {
                chatID: 136,
                speaker: "eva",
                text: "Ugh. He can be such a butthead sometimes. ",
                button: [
                    { chatID: 137, text: "...", callback: "" },
                ]
            },
            {
                chatID: 137,
                speaker: "lola",
                text: "Yeah. That was so weird, it's like we're in some kind of strange porn game " +
                    "where people do weird sexual things in public without any realistic consequences. " +
                    "We're going to head home now, see you later. ",
                button: [
                    { chatID: -1, text: "...", callback: "endSissy0" },
                ]
            },
            {
                chatID: 138,
                speaker: "river",
                text: "Nice tits! I bet they jiggle when you get fucked! Maybe I'll take " +
                    "all three of you on. Later fools. ",
                button: [
                    { chatID: 140, text: "bye?", callback: "sissy0_4" },
                ]
            },
            {
                chatID: 139,
                speaker: "river",
                text: "Flat as a pancake! Go get some tits slut, then I might think about " +
                    "nailing all three of you at the same time. Later fools. ",
                button: [
                    { chatID: 140, text: "bye?", callback: "sissy0_4" },
                ]
            },
            {
                chatID: 140,
                speaker: "lola",
                text: "You need to have more self respect than that. I'm no longer hungery. " +
                    "Let's head home " + sc.n('eva') + ".",
                button: [
                    { chatID: -1, text: "Yeah. I'll see you at home. ", callback: "endSissy0" },
                ]
            },
            {
                chatID: 141,
                speaker: "lola",
                text: "You know, we were talking and thought to celebrate you, you need " +
                    "new sexy underwear! ",
                button: [
                    { chatID: 142, text: "Really?", callback: "" },
                ]
            },
            {
                chatID: 142,
                speaker: "eva",
                text: "Yeah. " + sc.n("lola") + " was going to give you a pair of hers, but " +
                    "I told her you'd just jack off with them so we got you a new pair. ",
                button: [
                    { chatID: 143, text: "I would never", callback: "" },
                ]
            },
            {
                chatID: 143,
                speaker: "lola",
                text: "Oh you two! Let's stop arguing and play dress up! We're all girls here. " +
                    "It'll be so much fun!",
                button: [
                    { chatID: 144, text: "Oooo I love dress up!", callback: "" },
                ]
            },
            {
                chatID: 144,
                speaker: "eva",
                text: "Eh. I do love dress up! Let's play like we used to! You know what to " +
                    "do lola!",
                button: [
                    { chatID: 145, text: "?", callback: "200_2" },
                ]
            },
            {
                chatID: 145,
                speaker: "lola",
                text: "Fine, but no funny business, and only because we're all girls here.",
                button: [
                    { chatID: 146, text: "Nice!", callback: "200_3" },
                ]
            },
            {
                chatID: 146,
                speaker: "eva",
                text: "What are you smirking about, you need to strip too girl! ",
                button: [
                    { chatID: -1, text: "oh yeah. Of course", callback: "200_4" },
                ]
            },
            {
                chatID: 147,
                speaker: "eva",
                text: "What's that on your penis?",
                button: [
                    { chatID: 148, text: "huh?", callback: "" },
                ]
            },
            {
                chatID: 148,
                speaker: "lola",
                text: sc.n("eva") + " you can't just ask a girl what's on their penis! " +
                    "So rude. It's obviously a fake vagina. ",
                button: [
                    { chatID: 149, text: "Oh. It's a chastity cage.", callback: "" },
                ]
            },
            {
                chatID: 149,
                speaker: "eva",
                text: "Hahahaha! I know what that is! I have a gay friend. He does it " +
                    "because he likes to take it up the butt! ",
                button: [
                    { chatID: 150, text: "Well...", callback: "" },
                ]
            },
            {
                chatID: 150,
                speaker: "lola",
                text: "Oh stop. I don't want to hear about how she takes it in the butt. " +
                    "So gross. Why don't we just play dress up. ",
                button: [
                    { chatID: 155, text: "Yeah. Dress up time! ", callback: "" },
                ]
            },
            {
                chatID: 151,
                speaker: "eva",
                text: "Haha. You're a girl 'cause of your tiny cock huh? It's so tiny " +
                    "you couldn't get a girl, just boys yeah!",
                button: [
                    { chatID: 152, text: "*groan*", callback: "" },
                ]
            },
            {
                chatID: 152,
                speaker: "lola",
                text: "So rude. You never tell a girl how small her penis is. ",
                button: [
                    { chatID: 155, text: "It's ok. I do have a tiny penis. ", callback: "" },
                ]
            },
            {
                chatID: 153,
                speaker: "eva",
                text: "You know, it really is a shame you're a girl now, because that " +
                    "is one amazing cock!",
                button: [
                    { chatID: 154, text: "...", callback: "" },
                ]
            },
            {
                chatID: 154,
                speaker: "lola",
                text: "She's a girl now. You shouldn't talk about her penis. ",
                button: [
                    { chatID: 155, text: "Thanks", callback: "" },
                ]
            },
            {
                chatID: 155,
                speaker: "lola",
                text: "So what should we start with? ",
                button: [
                    { chatID: 156, text: "Start with? ", callback: "" },
                ]
            },
            {
                chatID: 156,
                speaker: "eva",
                text: "Red to match her new panties and bra! Let's get sexy! ",
                button: [
                    { chatID: 157, text: "Awesome! ", callback: "200_5" },
                ]
            },

            {
                chatID: 157,
                speaker: "eva",
                text: "Not gunna lie, you do make a sexy chick!",
                button: [
                    { chatID: 158, text: "I really do ", callback: "" },
                ]
            },
            {
                chatID: 158,
                speaker: "lola",
                text: "I love it. Turn around let us see that butt. Hehehe",
                button: [
                    { chatID: 159, text: "[Turn around show you butt] ", callback: "200_6" },
                ]
            },
            {
                chatID: 159,
                speaker: "eva",
                text: "I love it. With those matching panties and bra you make a sexy " +
                    "girl.",
                button: [
                    { chatID: 160, text: "I feel sexy", callback: "200_7" },
                ]
            },
            {
                chatID: 160,
                speaker: "lola",
                text: "I just want to make you feel good. We're all " + sc.n("el") +
                    " and " + sc.n("el") + " look out for each other. We just want " +
                    "to make sure you know you're loved. ",
                button: [
                    { chatID: 161, text: "Awwww. I love you girls", callback: "" },
                ]
            },
            {
                chatID: 161,
                speaker: "eva",
                text: "I love you too, even if you are a wird-o pervert. ",
                button: [
                    { chatID: 162, text: "So nice. ", callback: "" },
                ]
            },
            {
                chatID: 162,
                speaker: "lola",
                text: "I'm going to get back dressed. " + sc.n("landlord") + " gets " +
                    "weird with us when she catches us in our underwear. ",
                button: [
                    { chatID: -1, text: "Yeah. I'm going to change too. ", callback: "200_8" },
                ]
            },
            {
                chatID: 163,
                speaker: "lola",
                text: "OOoo! One minute, just got a call!",
                button: [
                    { chatID: 206, text: "?", callback: "killLola" },
                ]
            },
            {
                chatID: 164,
                speaker: "eva",
                text: "Oh yeah. Good luck you two. I'm sorry. ",
                button: [
                    { chatID: 165, text: "...", callback: "killeva" },
                ]
            },
            {
                chatID: 165,
                speaker: "lola",
                text: "You know I really do love you, but it's different now. Before " +
                    "I loved you as the man I've always wanted, but now I love you like " +
                    "I do with " + sc.n("eva") + ". Sure we fool around, but I'm not going " +
                    "to marry her. ",
                button: [
                    { chatID: 165, text: "...", callback: "killeva" },
                ]
            },
            {
                chatID: 166,
                speaker: "lola",
                text: "Sorry, we can't play today. Got a big test to study for. ",
                button: [
                    { chatID: 167, text: "oh?", callback: "" },
                ]
            },
            {
                chatID: 167,
                speaker: "eva",
                text: "Yep. Big test. Lots of study. ",
                button: [
                    { chatID: -1, text: "ok", callback: "" },
                ]
            },
            {
                chatID: 168,
                speaker: "eva",
                text: "I still think you're a pervert, even if you wear panties. ",
                button: [
                    { chatID: 170, text: "I am a giant pervert. ", callback: "" },
                    { chatID: 169, text: "I'm not a pervert. I'm a sweet little girl", callback: "" },
                ]
            },
            {
                chatID: 169,
                speaker: "eva",
                text: "*groan* Whatever...",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 170,
                speaker: "eva",
                text: "I knew it! If it wasn't so dirty it would be genius to dress like " +
                    "a girl to see other chick's naked. I'll tell you what, since you like feet " +
                    "so much, I'll let you lick my feet. ",
                button: [
                    { chatID: 171, text: "Yes!", callback: "sissyEva3_0" },
                    { chatID: -1, text: "Oh, I'm busy.. with stuff", callback: "" },
                ]
            },
            {
                chatID: 171,
                speaker: "eva",
                text: "At least you know you're still a pervert. That's what I like about " +
                    "you. I'll let you look at my vag while you lick my feet. Don't say that " +
                    "I never do anything for you. ",
                button: [
                    { chatID: -1, text: "Sweet!", callback: "sissyEva3_1" },
                ]
            },
            {
                chatID: 172,
                speaker: "eva",
                text: "Hahaha, that tickels! Now slurp up your nasty drool off my feet " +
                    "doggy! ",
                button: [
                    { chatID: -1, text: "sure", callback: "" },
                ]
            },
            {
                chatID: 173,
                speaker: "eva",
                text: "You're welcome my weird little foot fetish doggy! ",
                button: [
                    { chatID: -1, text: "Mmmmmm", callback: "reset" },
                ]
            },
            {
                chatID: 174,
                speaker: "eva",
                text: "Hey I said you could lick my feet, not munch my box! You know " +
                    "if I tell " + sc.n("landlord") + " she'll kick you out of this " +
                    "place so fast!",
                button: [
                    { chatID: 175, text: "Oh! I'm sorry, I thought...", callback: "" },
                ]
            },
            {
                chatID: 175,
                speaker: "eva",
                text: "I know what your thought! You're not a girl, you're still a " +
                    "pervert!",
                button: [
                    { chatID: 176, text: "Please don't tell! I don't want her to kick me out. I'll do anything.", callback: "sissyEva3_3" },
                ]
            },
            {
                chatID: 176,
                speaker: "eva",
                text: "Anything?",
                button: [
                    { chatID: 177, text: "Oh. Anything. 😉", callback: "" },
                ]
            },
            {
                chatID: 177,
                speaker: "eva",
                text: "Ok, ummm. You're going to be my slave. I've never had a slave " +
                    "before. Show me what a good slave you are and strip!",
                button: [
                    { chatID: 178, text: "oh yeah!", callback: "sissyEva3_4" },
                ]
            },
            {
                chatID: 178,
                speaker: "eva",
                text: "Now bow at my feet slave! ",
                button: [
                    { chatID: 179, text: "Bow at her feet", callback: "sissyEva3_5" },
                ]
            },
            {
                chatID: 179,
                speaker: "eva",
                text: "Hahaha! You're not a slave, you're a doggy! Roll over on your " +
                    "back doggy and bark for me. But a cute girl doggy bark. ", 
                button: [
                    { chatID: 180, text: "*sigh* ok ", callback: "sissyEva3_6" },
                ]
            },
            {
                chatID: 180,
                speaker: "eva",
                text: "What a pathetic loser! Hahaha. This is going to be fun! ",
                button: [
                    { chatID: 181, text: "*happy noises*", callback: "sissyEva3_7" },
                ]
            },
            {
                chatID: 181,
                speaker: "eva",
                text: "I bet you like it when I rub my foot on your pitiful doggy dick. " +
                    "Bark once to tell me you like it. ",
                button: [
                    { chatID: 182, text: "...", callback: "sissyEva3_8" },
                ]
            },
            {
                chatID: 182,
                speaker: "eva",
                text: "Good doggy. You want me to rub it with my foot till you " +
                    "cum don't you doggy. Beg for it doggy. Get on you knees and beg " +
                    "like a good little doggy. Beg me to touch your pee pee with my foot. ",
                button: [
                    { chatID: 183, text: "[Beg doggy]", callback: "sissyEva3_9" },
                ]
            },
            {
                chatID: 183,
                speaker: "me",
                text: "Please please please rub your foot on my pee pee.",
                button: [
                    { chatID: 184, text: "...", callback: "" },
                ]
            },
            {
                chatID: 184,
                speaker: "lola",
                text: "Hahaha no! Girl doggies don't have weiners! ",
                button: [
                    { chatID: 185, text: "...", callback: "sissyEva3_10" },
                ]
            },
            {
                chatID: 185,
                speaker: "lola",
                text: "Ok you two. I'm starting to get icked out by this. You two " +
                    "should play elsewhere so I don't have to watch. *blech*",
                button: [
                    { chatID: 186, text: "...", callback: "" },
                ]
            },
            {
                chatID: 186,
                speaker: "eva",
                text: "I like that. Let me think of a place to play my doggy slave! " +
                    "hehehe! Now go to your room and get dressed. You're leaking doggy " +
                    "dribbles all over our floor. ",
                button: [
                    { chatID: -1, text: "ok", callback: "sissyEva3_11" },
                ]
            },
            {
                chatID: 187,
                speaker: "me",
                text: "Hey, what's up?",
                button: [
                    { chatID: 188, text: "...", callback: "" },
                ]
            },
            {
                chatID: 188,
                speaker: "eva",
                text: "Why is my slave doggy talking to me. Doggies don't wear clothes. " +
                    "Strip and beg doggy or I'll tell on you!",
                button: [
                    { chatID: 189, text: "?", callback: "sissyeva4" },
                ]
            },
            {
                chatID: 189,
                speaker: "eva",
                text: "Since " + sc.n("lola") + " won't let us play here, but I know the " +
                    "perfect place. The university library never has anyone around " +
                    "anymore. Probably because libraries are dumb. " +
                    "Call me and wait till I get there. ",
                button: [
                    { chatID: 193, text: "Oh yeah! I'll meet you there!", callback: "" },
                ]
            },
            {
                chatID: 190,
                speaker: "eva",
                text: "Are you wearing that chastity thing?",
                button: [
                    { chatID: 191, text: "I am", callback: "" },
                ]
            },
            {
                chatID: 191,
                speaker: "eva",
                text: "Talk to me when you're not wearing one. It weirds me out! ",
                button: [
                    { chatID: -1, text: "ok ", callback: "" },
                ]
            },
            {
                chatID: 192,
                speaker: "eva",
                text: "I don't think you're a real girl. Prove it and grow some tits! ",
                button: [
                    { chatID: -1, text: "*grrrr*", callback: "" },
                ]
            },
            {
                chatID: 193,
                speaker: "eva",
                text: "Good I'll see you at the library. Now get out of my room doggy! ",
                button: [
                    { chatID: -1, text: "arf", callback: "leave" },
                ]
            },
            {
                chatID: 194,
                speaker: "lola",
                text: "Hey! Hands off my boobs mister!",
                button: [
                    { chatID: -1, text: "ooop. Sorry", callback: "" },
                ]
            },
            {
                chatID: 195,
                speaker: "eva",
                text: "Stop groping my tits you pervert!",
                button: [
                    { chatID: -1, text: "hehehe, You said tits.", callback: "" },
                ]
            },
            {
                chatID: 196,
                speaker: "eva",
                text: "HAHAHAHA oh wow. You should have seen your face when that " +
                    "librarian caught you! Classic! That really was so much fun! So " +
                    "do you have the butt plug Deb brought? ",
                button: [
                    { chatID: 197, text: "No! It popped out when I was running away. That was really mean. ", callback: "" },
                ]
            },
            {
                chatID: 197,
                speaker: "lola",
                text: "You know you don't have to embarrass yourself for her. It's often " +
                    "embarrassing enough being a girl in this world with everyone trying to " +
                    "hit on you all the time. You can just be a nice girl ",
                button: [
                    { chatID: 198, text: "...", callback: "" },
                ]
            },
            {
                chatID: 198,
                speaker: "eva",
                text: "She's not a nice kind of girl! She loves it and I'll prove it to you! " +
                    "Deb throws a party every Friday at her place. It's mostly just our friends " +
                    "from college. Meet me here on Friday and I'll take you there as my slave. " +
                    "Wear something cute. And don't wear that stuipid chastity thing! ",
                button: [
                    { chatID: 199, text: "I'll think about it. ", callback: "" },
                ]
            },
            {
                chatID: 199,
                speaker: "lola",
                text: "You don't have to do this. You can stand up for yourself if you want. ",
                button: [
                    { chatID: -1, text: "Maybe ", callback: "evaSissy6" },
                ]
            },
            {
                chatID: 200,
                speaker: "eva",
                text: "Prove me right. Come by Friday and show " + sc.n("lola") + " that " +
                    "you're a dirty girl! Also Don't wear one of those stupid chastity things. ",
                button: [
                    { chatID: -1, text: "*ugh* ", callback: "" },
                ]
            },
            {
                chatID: 201,
                speaker: "eva",
                text: "Are you wearing one of those stupid chastity things? ",
                button: [
                    { chatID: 202, text: "oh yeah ", callback: "" },
                ]
            },
            {
                chatID: 202,
                speaker: "eva",
                text: "Maybe next week then. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 203,
                speaker: "eva",
                text: "Ready to go slave? ",
                button: [
                    { chatID: -1, text: "I am", callback: "room585" },
                    { chatID: -1, text: "No! I'm standing up for myself! ", callback: "" },
                ]
            },
            {
                chatID: 204,
                speaker: "eva",
                text: "You're not sexy enough. Go do something with yourself. ",
                button: [
                    { chatID: -1, text: "[Check self in mirror, need 'Sexy']", callback: "" },
                ]
            },
            {
                chatID: 205,
                speaker: "eva",
                text: "No fair cheating. Go put on some pants and a shirt before we play! ",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "reset" },
                ]
            },
            {
                chatID: 206,
                speaker: "eva",
                text: "Ugh! She's such a goob! Talking to him again!",
                button: [
                    { chatID: 207, text: "who? Who is she talking to?", callback: "" },
                ]
            },
            {
                chatID: 207,
                speaker: "eva",
                text: sc.n("chad") + ". He's really is a dick. I told her he's just trying to sleep with her, but she " +
                    "thinks he's cute and nice to her. Sheesh. ",
                button: [
                    { chatID: 208, text: "What? She can't really be talking to him. ", callback: "" },
                ]
            },
            {
                chatID: 208,
                speaker: "eva",
                text: "For real! When you came out as a sissy it really broke her heart. She's just gone completely boy " +
                    "crazy. And that " + sc.n("chad") + " has been trying to get in her panties for a while. He is silky smooth ",
                button: [
                    { chatID: 209, text: "oh no. We've got to break them up somehow. ", callback: "" },
                ]
            },
            {
                chatID: 209,
                speaker: "eva",
                text: "That's one thing you and I agree on booger eater. I'll snoop on her phone, see what's he's up to. I'll " +
                    "let you know if we should be worried. ",
                button: [
                    { chatID: 210, text: "Do that. Let me know. We can't let those two get together! ", callback: "hallway" },
                ]
            },
            {
                chatID: 210,
                speaker: "thinking",
                text: "I can't let " + sc.n("chad") + " date my " + g.makeSingular(sc.n("el")) + "! She's such a nice girl " +
                    "she'll totally fall for his games. That asshole! I must think of something to make sure she doens't " +
                    "use her and dump her. ",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
            {
                chatID: 211,
                speaker: "me",
                text: "Where's " + sc.n("lola") + "?",
                button: [
                    { chatID: 212, text: "...", callback: "" },
                ]
            },
            {
                chatID: 212,
                speaker: "eva",
                text: "With " + sc.n("chad") + "! Why are you here! I told you to go find a boy " +
                    "that we haven't fucked! Go. Go find a boy for her! ",
                button: [
                    { chatID: -1, text: "ok. I'll keep looking", callback: "" },
                ]
            },
            {
                chatID: 213,
                speaker: "lola",
                text: "Sorry, I'm lost in thought. I'll have to rain check. Too much on my mind.",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 214,
                speaker: "me",
                text: "Hey, how life?",
                button: [
                    { chatID: 215, text: "...", callback: "" },
                ]
            },
            {
                chatID: 215,
                speaker: "lola",
                text: "Great. " + sc.n("chad") + " said I dress lame like I'm going to church, and not like " +
                    "a girl my age. So I have to change when I'm out with him. He said they're still lame, " +
                    "but not super lame anymore. I'm going to have to rethink my wardrobe. " +
                    "Hehehe. The breeze does feel nice against my thighs when I'm out with him. ",
                button: [
                    { chatID: 216, text: "wha", callback: "" },
                ]
            },
            {
                chatID: 216,
                speaker: "eva",
                text: "Yeah, " + sc.n("chad") + " is going to ruin you if you keep dating him you know. " +
                    "This isn't you at all. ",
                button: [
                    { chatID: 217, text: "yeah", callback: "" },
                ]
            },
            {
                chatID: 217,
                speaker: "lola",
                text: "Oh you. tbbbth. You're just mad my skirt is shorter than yours. Maybe this is me. " +
                    "Well me now. I told you I don't want to talk about it anymore. I'm going to meet up " +
                    "with " + sc.n("chad") + "! ",
                button: [
                    { chatID: -1, text: "ugh", callback: "lolaSissy6End" },
                ]
            },
            {
                chatID: 218,
                speaker: "lola",
                text: "I'm so in love! " + sc.n("chad") + " is the man I've always dreamed of, " +
                    "but didn't know it was him I was dreaming of! ",
                button: [
                    { chatID: 219, text: "You know he's kind of a jerk", callback: "" },
                ]
            },
            {
                chatID: 219,
                speaker: "lola",
                text: "He's not! He's amazing! You should....",
                button: [
                    { chatID: 221, text: "?", callback: "lolaSissy7_0" },
                ]
            },
            {
                chatID: 220,
                speaker: "chad",
                text: "Hey babe, babe's almost as hot twin sister, and small dick loser! You know you should lock " +
                    "your window. Anyone can just use that ladder out there and get in. ",
                button: [
                    { chatID: 221, text: sc.n("chad") + "....", callback: "lolaSissy7_0" },
                ]
            },
            {
                chatID: 221,
                speaker: "chad",
                text: "Hey babe, babe's almost as hot twin sister, and small dick loser! You know you should lock " +
                    "your window. Anyone can just use that ladder out there and get in. ",
                button: [
                    { chatID: 222, text: sc.n("chad") + "....", callback: "lolaSissy7_1" },
                ]
            },
            {
                chatID: 222,
                speaker: "chad",
                text: "I was running around and remembered how much I missed you. ",
                button: [
                    { chatID: 223, text: "*groan*", callback: "" },
                ]
            },
            {
                chatID: 223,
                speaker: "lola",
                text: "Awww! Isn't he the sweetest!  ",
                button: [
                    { chatID: 224, text: "...", callback: "lolaSissy7_2" },
                ]
            },
            {
                chatID: 224,
                speaker: "chad",
                text: "Totally! So you think I could get a quick bj? I'll totally need it to get " +
                    "a good night sleep. ",
                button: [
                    { chatID: 225, text: "!!!", callback: "" },
                ]
            },
            {
                chatID: 225,
                speaker: "lola",
                text: "wha? Not in front of everyone!",
                button: [
                    { chatID: 226, text: "...", callback: "" },
                ]
            },
            {
                chatID: 226,
                speaker: "chad",
                text: "It's cool. I don't mind. They can watch if they want. 'com on! You're really " +
                    "good at it and you know I don't touch myself like some loser. Gotta get a good " +
                    "sleep for tomorrows game. ",
                button: [
                    { chatID: 227, text: "...you don't have to", callback: "lolaSissy7_3" },
                ]
            },
            {
                chatID: 227,
                speaker: "chad",
                text: "*ugh* Too much talkie not enough sucky sucky. Take notes " + sc.n("eva") +
                    ". This is how a real cock sucker gobbles the cock. ",
                button: [
                    { chatID: 228, text: "💢", callback: "lolaSissy7_4" },
                ]
            },
            {
                chatID: 228,
                speaker: "eva",
                text: "What the hell! Not even a warning, you're just going to shoot your load down her " +
                    "throat! ",
                button: [
                    { chatID: 229, text: "[Snap out of it]", callback: "lolaSissy7_1" },
                ]
            },
            {
                chatID: 229,
                speaker: "lola",
                text: "It's ok. I told him that I would give him oral sex when he needed it so " +
                    "he wouldn't get distracted by other girls at his games. I just didn't expect " +
                    "to do it in front of everyone, but since you're my " + sc.n("el") + " it's ok. ",
                button: [
                    { chatID: 230, text: "...", callback: "" },
                ]
            },
            {
                chatID: 230,
                speaker: "chad",
                text: "That's why you're my girl! Welp, gotta run. later losers! ",
                button: [
                    { chatID: -1, text: "*sigh*", callback: "reset" },
                ]
            },
            {
                chatID: 231,
                speaker: "lola",
                text: "Sorry girls. I promised I would go to this party. I'll see you both tomorrow. ",
                button: [
                    { chatID: 232, text: "*sigh*", callback: "lolaSissy7_5" },
                ]
            },
            {
                chatID: 232,
                speaker: "eva",
                text: "*sigh* I should be mad, but he is so sexy. And amazing. And strong. " +
                    "I just hope he doens't hurt her too bad. ",
                button: [
                    { chatID: -1, text: "Yeah. He is sexy, er an ass", callback: "" },
                ]
            },
            {
                chatID: 233,
                speaker: "lola",
                text: sc.n("eva") + " told me about this Tom. I'm not sure, but I'll give him a chance. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 234,
                speaker: "lola",
                text: "Thanks you two! I'm so in love! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 235,
                speaker: "lola",
                text: "I'm so in love!!! Oh wow! I didn't think I would ever love again, but " +
                    "Tom is so sweet and nice! He was on his high school swim team and got bronze " +
                    "in his big swim meet! ",
                button: [
                    { chatID: 236, text: "Love again?", callback: "" },
                ]
            },
            {
                chatID: 236,
                speaker: "lola",
                text: "He grew up poor, and often was starving, so now he volunteers at the " +
                    "homeless shelter. He really is a great guy! I'm so happy you two set me up! ",
                button: [
                    { chatID: -1, text: "Yeah. We're so happy for you too. ", callback: "" },
                ]
            },
            {
                chatID: 237,
                speaker: "eva",
                text: "Oh my god! Don't talk to her! All day bla bla bla about Tom! My god! " +
                    "It's sweet you two are in love, but damn! If I knew you were going to be this " +
                    "annoying about it I would have let you date " + sc.n("chad") + "!",
                button: [
                    { chatID: 238, text: "oh snap!", callback: "" },
                ]
            },
            {
                chatID: 238,
                speaker: "lola",
                text: "hrumph! " + sc.n("chad") + " was a total jerk. I see that now. Always trying to " +
                    "stick his fingers in my pussy. He would even pull his penis out and rub it on my leg. " +
                    "We were at a party and he refused to take me home till I have him a blowie, but I said no! " +
                    "He ended up jacking off and shooting his cum on the back of my dress. I had to wash it by hand so " +
                    sc.n("landlord") + " didn't know. I'm just really happy to be with a good boy like Tom. And " +
                    "I'm just excited and wanted to share so tbbbth",
                button: [
                    { chatID: 239, text: "...", callback: "" },
                ]
            },
            {
                chatID: 239,
                speaker: "eva",
                text: "*sigh* I know " + sc.n("chad") + " is a giant dick head, and I'm really " +
                    "happy you're dating Tom, but damn girl! We get it. He's the best boy ever. ",
                button: [
                    { chatID: 240, text: "Yeah", callback: "" },
                ]
            },
            {
                chatID: 240,
                speaker: "lola",
                text: "Oh. oooohhhhh. I'm so sorry. I get it. I've found the one and you're both " +
                    "still searching for your one. You'll find your one. Your funny, nice, and " +
                    "a little hottie like me! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 241,
                speaker: "eva",
                text: "*ugh* gross. There's cum all over your face. You should just swallow it. " +
                    "Go clean that up so we don't have some random guy's cum drip over our floor. ",
                button: [
                    { chatID: -1, text: "oh hahhaha. ok", callback: "leave" },
                ]
            },
            {
                chatID: 242,
                speaker: "lola",
                text: "What's all over your face? ",
                button: [
                    { chatID: 243, text: "My face?", callback: "" },
                ]
            },
            {
                chatID: 243,
                speaker: "eva",
                text: "Hahahah! That's totally cum on your face! You sucked a dick didn't you! ",
                button: [
                    { chatID: -1, text: "Huh?! Oh That's uhhhh.... lotion! Yeah lotion. Gotta clean that up!", callback: "leave" },
                ]
            },
            {
                chatID: 244,
                speaker: "eva",
                text: "Hey, I was talking to Doofus and he said we went pretty far for his party " +
                    "and maybe he was right. He made me promise that if we want to do sex stuff " +
                    "with you we do it in the room. Forgive me?",
                button: [
                    { chatID: 245, text: "I forgive you. ", callback: "" },
                ]
            },
            {
                chatID: 245,
                speaker: "lola",
                text: "I've never head " + sc.n("eva") + " aplologize before. What did she make you do? ",
                button: [
                    { chatID: 246, text: "She made me strip in front of everyone at the party", callback: "" },
                ]
            },
            {
                chatID: 246,
                speaker: "lola",
                text: sc.n("eva") + "! You beast!",
                button: [
                    { chatID: 247, text: "...", callback: "" },
                ]
            },
            {
                chatID: 247,
                speaker: "eva",
                text: "Heh. I thought she would be into it. I didn't know. Besides I said I was sorry! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 248,
                speaker: "eva",
                text: "Hahahaha!!! How did Latika's ass taste you dirty dirty pervert!! ",
                button: [
                    { chatID: 249, text: "ech", callback: "" },
                ]
            },
            {
                chatID: 249,
                speaker: "lola",
                text: "What happened? ",
                button: [
                    { chatID: 250, text: "...", callback: "" },
                ]
            },
            {
                chatID: 250,
                speaker: "eva",
                text: sc.n("me") + " pulled Latika's butt plug out, in front of everyone! " +
                    "Then she ran out of the house naked crying!!! You were the talk of the night! " +
                    "Doofus said you were never allowed back, but Liam " +
                    "talked to him and Doofus agreed that a slut like you can come back anytime. Just do " +
                    "the sex stuff in the bedrooms. I think Liam wants to fuck you. hehehehe",
                button: [
                    { chatID: 251, text: "Really?", callback: "" },
                ]
            },
            {
                chatID: 251,
                speaker: "lola",
                text: sc.n("eva") + "! You know " + sc.n("me") + " can't control her dirty impulses! " +
                    "You two can really be too much sometimes. This is the reason I don't go to those " +
                    "house parties. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 252,
                speaker: "chad",
                text: "Hey " + sc.n("lola") + " and her loser friends. Hey what are you wearing! ",
                button: [
                    { chatID: 253, text: "*groan*", callback: "lolaSissy7_1" },
                ]
            },
            {
                chatID: 253,
                speaker: "lola",
                text: "I wasn't planning on going out, I was just talking with my " + sc.n("el") +
                    ". ",
                button: [
                    { chatID: 254, text: "...", callback: "" },
                ]
            },
            {
                chatID: 254,
                speaker: "chad",
                text: "Doesn't matter. I told you to stop dressing like you decorate ginger bread houses. " +
                    "Take that shit off. ",
                button: [
                    { chatID: 255, text: "...", callback: "" },
                ]
            },
            {
                chatID: 255,
                speaker: "lola",
                text: "...but I'm not wearing underwear.",
                button: [
                    { chatID: 256, text: "...", callback: "" },
                ]
            },
            {
                chatID: 256,
                speaker: "chad",
                text: "I know. Do what I tell you.",
                button: [
                    { chatID: 257, text: "...", callback: "evanude" },
                ]
            },
            {
                chatID: 257,
                speaker: "chad",
                text: "You know. I've seen you both naked, but never together. Are your tits the " +
                    "same size?",
                button: [
                    { chatID: 258, text: "...", callback: "" },
                ]
            },
            {
                chatID: 258,
                speaker: "eva",
                text: "Nope! Mind are bigger! So tbbbbtthhhh",
                button: [
                    { chatID: 259, text: "...", callback: "" },
                ]
            },
            {
                chatID: 259,
                speaker: "lola",
                text: "Hey! You know we're the same size!",
                button: [
                    { chatID: 260, text: "...", callback: "" },
                ]
            },
            {
                chatID: 260,
                speaker: "chad",
                text: "I don't know about the same. I remember " + sc.n('eva') + "'a being a bit smaller than " +
                    "you. ",
                button: [
                    { chatID: 261, text: "...", callback: "lolaSissy8_0" },
                ]
            },
            {
                chatID: 261,
                speaker: "eva",
                text: "I am bigger! ",
                button: [
                    { chatID: 262, text: "...", callback: "" },
                ]
            },
            {
                chatID: 262,
                speaker: "lola",
                text: "No! You aren't! ",
                button: [
                    { chatID: 263, text: "...", callback: "lolaSissy8_1" },
                ]
            },
            {
                chatID: 263,
                speaker: "eva",
                text: "Yes I am! ",
                button: [
                    { chatID: 264, text: "...", callback: "lolaSissy8_2" },
                ]
            },
            {
                chatID: 264,
                speaker: "chad",
                text: "Girls, girls, girls. You're forgetting what's really important. My exetremely " +
                    "large penis. Do I need to remind you two that I can stay hard for hours and cum " +
                    "again and again?",
                button: [
                    { chatID: 265, text: "*gasp*", callback: "lolaSissy8_3" },
                ]
            },
            {
                chatID: 265,
                speaker: "eva",
                text: "It uhhh. It is really big and thick and right in front of my face.... " +
                    sc.n("lola") + " do you mind if I take a lick? Please? ",
                button: [
                    { chatID: 266, text: "...", callback: "" },
                ]
            },
            {
                chatID: 266,
                speaker: "lola",
                text: "oh. Sure. I guess we can share. " + sc.n("el") + "s always share. " + 
                    sc.n("me") + ", did you want to share too? ",
                button: [
                    { chatID: 267, text: "Oh yes!", callback: "lolaSissy8_4" },
                ]
            },
            {
                chatID: 267,
                speaker: "chad",
                text: "Good girls. Suck that cock!",
                button: [
                    { chatID: 283, text: "Mmmmm sllluurrrppp", callback: "lolaSissy8_5" },
                ]
            },
            {
                chatID: 268,
                speaker: "eva",
                text: "It doesn't feel right without " + sc.n("lola") + " here. ",
                button: [
                    { chatID: -1, text: "Yeah", callback: "" },
                ]
            },
            {
                chatID: 269,
                speaker: "thinking",
                text: "She's so cute when she's sleeping. I'm sure she won't mind if I just " +
                    "put my penis in her vagina for a little bit. Just to see how it feels. ",
                button: [
                    { chatID: -1, text: "[Carefully slide your penis into your sleeping " + g.makeSingular(sc.n("el")) + "]", callback: "" },
                    { chatID: -1, text: "[Leave. Not worth getting caught]", callback: "leave" },
                ]
            },
            {
                chatID: 270,
                speaker: "thinking",
                text: "Fuck she's so dry. I should have played with her pussy to get it a little " +
                    "wet first. Let me see if I can shove it in her dry pussy hole. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 271,
                speaker: "thinking",
                text: "I can't fuck her. I'm wearing my chastity cage! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 272,
                speaker: "thinking",
                text: "She's so hot with my cum leaking out of her! I love her like this so much! ",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
            {
                chatID: 273,
                speaker: "lola",
                text: "Aakk! Sometimes I wish you would knock! ",
                button: [
                    { chatID: 274, text: "...", callback: "fuckin0" },
                ]
            },
            {
                chatID: 274,
                speaker: "eva",
                text: "Hahaha. I guess it was only time until she found out about our little " +
                    "practice sessions. It was only time until this little pervert was able " +
                    "to get a peek of my butthole. ",
                button: [
                    { chatID: 276, text: "...", callback: "fuckin1" },
                ]
            },
            {
                chatID: 275,
                speaker: "me",
                text: "noop",
                button: [
                    { chatID: 275, text: "...", callback: "" },
                ]
            },
            {
                chatID: 276,
                speaker: "lola",
                text: "hehehe. She does have a pretty butthole. Not that I'm into that! We " +
                    "were just practicing. You know for sex. Because uhhh...",
                button: [
                    { chatID: 277, text: "...", callback: "" },
                ]
            },
            {
                chatID: 277,
                speaker: "eva",
                text: "*psshhh* " + sc.n("lola") + " just wants to get fucked, but doesn't want " +
                    "to rack up a high body count, so I agreed to fuck her, but made her promise " +
                    "she would fuck me too. She won't admit it, but she totally loves my dildo " +
                    "in her ass while I finger her vagina. ",
                button: [
                    { chatID: 278, text: "...", callback: "" },
                ]
            },
            {
                chatID: 278,
                speaker: "lola",
                text: sc.n("eva") + "!! That's so dirty! ",
                button: [
                    { chatID: 279, text: "So what's up with the clothes?", callback: "" },
                ]
            },
            {
                chatID: 279,
                speaker: "eva",
                text: "Oh. Hahaha. We found we needed something to hold the dildos so we could " +
                    "fuck each other, and well... we saw these and had to get them. I have one too, " +
                    "but I usually only wear it when I'm fucking " + sc.n("lola") + " during our " +
                    "little 'practice sex' sessions. ",
                button: [
                    { chatID: 280, text: "It's so hot! ", callback: "" },
                ]
            },
            {
                chatID: 280,
                speaker: "lola",
                text: "Hehe. We'll girls need to practice sex sometimes. Hey! Would you like " +
                    "to practice sex? You know, as a girl. I could totally get you your own outfit! " + 
                    "I saw one in the store that totally fits your sexy body and you would look great " +
                    "in it. I've been thinking about it ever since you came out! ",
                button: [
                    { chatID: 281, text: "That would be awesome!", callback: "" },
                ]
            },
            {
                chatID: 281,
                speaker: "lola",
                text: "We could teach you other things about being a girl too! It would be so " +
                    "much fun! Let me get your outfit and we'll start teaching how to be a pretty " +
                    "girl! Joy!",
                button: [
                    { chatID: 282, text: "...", callback: "" },
                ]
            },
            {
                chatID: 282,
                speaker: "eva",
                text: "As much as I love letting my drippy pussy hang out, we're going to get " +
                    "changed. I'm pretty tired we'll start teaching you how to be less of a pervert " +
                    "tomorrow. 'k?",
                button: [
                    { chatID: -1, text: "ok! [Leave to let them change back]", callback: "fuckinEnd" },
                ]
            },
            {
                chatID: 283,
                speaker: "chad",
                text: "Oh fuck! Three cum covered sluts! You girls are the best! I'm out I'll see " +
                    "you girls later! When I get horny again. ",
                button: [
                    { chatID: 284, text: "Mmmmm sllluurrrppp", callback: "lolaSissy8_6" },
                ]
            },
            {
                chatID: 284,
                speaker: "lola",
                text: "MMmmMMMMmm. That was fun. I'm going to towel off. ",
                button: [
                    { chatID: 285, text: "Mmmmm sllluurrrppp", callback: "" },
                ]
            },
            {
                chatID: 285,
                speaker: "eva",
                text: "Yeah. You should go clean up too. Your face is covered in cum. ",
                button: [
                    { chatID: -1, text: "Oh yeah. ok.", callback: "leave" },
                ]
            },
            {
                chatID: 286,
                speaker: "lola",
                text: "Well, that was wild. I didn't expect to blow my boyfriend with both my " +
                    sc.n("el") + ". Not going to lie, that was really fun. You know, " + sc.n("chad") +
                    " has a lot of cum. Would you both be willing to do that again? ",
                button: [
                    { chatID: 287, text: "Ooooo", callback: "" },
                ]
            },
            {
                chatID: 287,
                speaker: "eva",
                text: "Get railed by my " + g.makeSingular(sc.n("el")) + "'s perverted boyfriend? " +
                    "Sure. He was right. He does have a giant hard cock and can go for hours. For you, " +
                    sc.n("lola") + ", I'll get fucked. ", 
                button: [
                    { chatID: 288, text: "...", callback: "" },
                ]
            },
            {
                chatID: 288,
                speaker: "lola",
                text: "Sweet! You can get fucked too " + sc.n("me") + "! Just let me know when and I'll " +
                    "give him a call! ",
                button: [
                    { chatID: -1, text: "Sweet!", callback: "" },
                ]
            },
            {
                chatID: 289,
                speaker: "lola",
                text: "Hey " + sc.n("me") + " what's up?",
                button: [
                    { chatID: 290, text: "Could you call your boyfriend up and fuck us all. OwO", callback: "" },
                    { chatID: -1, text: "Nothing... Nothing all all", callback: "" },
                ]
            },
            {
                chatID: 290,
                speaker: "lola",
                text: "Oh. Sure! Since you asked so nicely. Let's get fucked! ",
                button: [
                    { chatID: -1, text: "*Girly sqeel*", callback: "room174" },
                ]
            },
            {
                chatID: 291,
                speaker: "lola",
                text: "I am so incredibly angry!!! How dare she steal MY boyfriend!!! THIS " +
                    "CANNOT STAND!!! ",
                button: [
                    { chatID: 292, text: "oh", callback: "" },
                ]
            },
            {
                chatID: 292,
                speaker: "eva",
                text: "Now don't get all crazy like you did in when we were in high school. " +
                    "That poor girl won't even leave her house anymore. ",
                button: [
                    { chatID: 293, text: "what? What is this. I haven't heard about it.", callback: "" },
                ]
            },
            {
                chatID: 293,
                speaker: "lola",
                text: "That's becuase she deserved it! And it's not worth talking about.  ",
                button: [
                    { chatID: 294, text: "...", callback: "" },
                ]
            },
            {
                chatID: 294,
                speaker: "eva",
                text: "Don't tell anyone, but in high school Elsa kissed a boy she liked. So " +
                    sc.n("lola") + " here snuck a naked photo of her in the shower at school " +
                    "and put it on flyers with her phone number in every bathroom stall. " +
                    "For a month. She also started rumors about Elsa that she has sex with her dog " +
                    "and one that she had sex with the entire basketball team. She even talked a " +
                    "boy from the computer club to add a slide into a slide show during a school " +
                    "assembly that said Elsa was a giant slut. ",
                button: [
                    { chatID: 295, text: "WHA!!!", callback: "" },
                ]
            },
            {
                chatID: 295,
                speaker: "lola",
                text: "She deserved that. She knew I liked him, but she made out with him right in " +
                    "front of me! It was the second time she stole a boy away from me. You know what " +
                    "a butt head she is, you promised me you would never tell anyone! ",
                button: [
                    { chatID: 296, text: "whoa", callback: "" },
                ]
            },
            {
                chatID: 296,
                speaker: "eva",
                text: "You made me promise that this was a secret between girls. Now that " +
                    sc.n("me") + " is a girl too, she should know how crazy you get when another girl " +
                    "steals a boy you really like away from her. ",
                button: [
                    { chatID: 297, text: "So why aren't you mad at us for having sex with him? ", callback: "" },
                ]
            },
            {
                chatID: 297,
                speaker: "lola",
                text: "That was sharing, not stealing. You asked. But " + sc.n("landlord") + " did not! " +
                    "She stole my boyfriend! And now I'm going to steal her boyfriend!",
                button: [
                    { chatID: 298, text: "Steal him? Do you mean " + sc.n("bigguy") + "?", callback: "" },
                ]
            },
            {
                chatID: 298,
                speaker: "eva",
                text: "Oh boy. Here we go. I told her this was a bad idea. ",
                button: [
                    { chatID: 299, text: "...", callback: "" },
                ]
            },
            {
                chatID: 299,
                speaker: "lola",
                text: "So she fucked my boyfriend, so I'm going to fuck her boyfriend right in " +
                    "front of her! Fair is fair. ",
                button: [
                    { chatID: 300, text: "What makes you think that's going to happen? ", callback: "" },
                ]
            },
            {
                chatID: 300,
                speaker: "lola",
                text: "We're going to drug them, tie them up, then I'm going to wait for them to wake " +
                    "up and climb on " + sc.n("bigguy") + "'s dick right in front of her. She will then " +
                    "know how terrible it is to steal my boyfriend. ",
                button: [
                    { chatID: 301, text: "Oh my god.. Wait, what do you mean by 'we'?", callback: "" },
                ]
            },
            {
                chatID: 301,
                speaker: "lola",
                text: sc.n("landlord") + " and I aren't talking, so she'll expect somethings up if I " +
                    "try to give them something to drink. But you. You can offer to refil their drinks " +
                    "and they won't think anything of it. I just need you to put the sleeping pills in " +
                    "their wine and give it to them when they eat. They'll just think you have some " +
                    "weird maid fetish if you do. That's it. I already have the pills. You just put it " +
                    "in their drinks and I'll do the rest. ",
                button: [
                    { chatID: 302, text: "That's just crazy", callback: "" },
                ]
            },
            {
                chatID: 302,
                speaker: "lola",
                text: "I need you for this! Here. Just hold on to the pills. You don't have to do it, but " +
                    "if you do, let me know. Give it to them when they're both here. They both need to be " +
                    "out for it to work. ",
                button: [
                    { chatID: 303, text: "...but", callback: "pillsaregood" },
                ]
            },
            {
                chatID: 303,
                speaker: "lola",
                text: "You know I'm right. What she did hurt me! Hurt me deep! Now I'm going to " +
                    "hurt her in the exact same way! There's no difference! ",
                button: [
                    { chatID: 304, text: "This is totally different!", callback: "" },
                ]
            },
            {
                chatID: 304,
                speaker: "eva",
                text: "There's no use arguing with her. I tried to argue with her about Elsa, and now " +
                    "this. You see " + sc.n("lola") + " is the sweetest thing until you piss her off, then " +
                    "look out 'cause she ain't got no chill when she's angry. ",
                button: [
                    { chatID: 305, text: "*ugh* I'll think about it. ", callback: "" },
                ]
            },
            {
                chatID: 305,
                speaker: "thinking",
                text: sc.n("lola") + " is crazy. I don't know if I should help her. Maybe if I do " +
                    "nothing, nothing will come. But she is right, what " + sc.n("landlord") + 
                    " did was terrible, and maybe she does have it coming to her.... I don't know. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 306,
                speaker: "thinking",
                text: "Should I ask her if we can all have sex again?",
                button: [
                    { chatID: 307, text: "Yes, I need to get fucked!!", callback: "" },
                    { chatID: -1, text: "naw, maybe next time. ", callback: "reset" },
                ]
            },
            {
                chatID: 307,
                speaker: "lola",
                text: "If I know you, you want us all to have sex again, don't you? ",
                button: [
                    { chatID: 308, text: "So much! Please please please!", callback: "" },
                ]
            },
            {
                chatID: 308,
                speaker: "lola",
                text: "Fine. I'll call " + sc.n("chad") + " and ask " + sc.n("landlord") + 
                    " to bring " + sc.n("bigguy") + " over. ",
                button: [
                    { chatID: -1, text: "YEAH!!!", callback: "sissy_13" },
                ]
            },
        ];
        return cArray[chatID];
    }
};
