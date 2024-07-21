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

        if(daily.get("loladrunk"))
            btnList.push({
                "type": "img",
                "name": "bed",
                "left": 1229,
                "top": 409,
                "width": 141,
                "height": 107,
                "image": "13_sisterRoom/lolaSleep.png"
            });
        if (daily.get("evadrunk"))
            btnList.push({
                "type": "img",
                "name": "bed",
                "left": 1449,
                "top": 408,
                "width": 192,
                "height": 143,
                "image": "13_sisterRoom/evaSleep.png"
            });

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
            if (cl.isLewd()) {
                btnList = new Array();
                nav.bg("13_sisterRoom/013_angryCaught.jpg");
                chat(249, 13);
            }
            else {
                btnList = [{
                    "type": "btn",
                    "name": "lola",
                    "left": 1449,
                    "top": 260,
                    "width": 215,
                    "height": 820,
                    "image": (g.isNight() ? "13_sisterRoom/13_lola_pj.png" : "13_sisterRoom/13_lola_reading.png")
                },
                {
                    "type": "btn",
                    "name": "eva",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": (g.isNight() ? "13_sisterRoom/13_eva_pj.png" : "13_sisterRoom/13_eva_sitting.png")
                }];
                g.internal = { lola: scc.getSet("lola"), eva: scc.getSet("eva") };
                //if (g.internal.lola.anyanyChanges || g.internal.eva.anyanyChanges) {
                    //put logic for changes / secret here
                //}
                if (cl.c.cumface) {
                    //secret increases
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
        case "lola":
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
            if (sc.getMission("lola", "date").inProgress) {
                sc.select("practiceDate", "13_sisterRoom/icon_practice.png", 4);
            }
            //sc.select("dick", "13_sisterRoom/icon_dick.png", 4);
            sc.select("clearChat", "13_sisterRoom/icon_cancel.png", 5);
            break;
        case "eva":
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
            //sc.select("dick", "13_sisterRoom/icon_dick.png", 4);
            sc.select("clearChat", "13_sisterRoom/icon_cancel.png", 5);
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
            if (!inv.has("wine")) {
                chat(45, 13)
            }
            else if (!g.isNight()) {
                chat(44, 13);
            }
            else {
                char.room(23);
            }
            break;
        case "dick":

            break;
        
        case "reset":
            char.room(13);
            break;
        case "bed":
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
           
            g.internal.step = 0;
            if (g.internal.lolaPanties)
                sc.select("lolaStrip", "13_sisterRoom/icon_focuslola.png", 0);
            if (g.internal.evaPanties)
                sc.select("evaStrip", "13_sisterRoom/icon_focuseva.png", 1);
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
                    room13.btnclick("choice");
                    daily.set("elsleep");
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
        default:
            break;
    }
};

room13.chatcatch = function (callback) {

    $.each(callback.split(" "), function (i, v) {
        switch (v) {
            case "lolaDayEvent":
                daily.set("lola");
                char.room(13);
                break;
            case "lolaLevelDown":
                sc.modLevel("lola", -48, 999);
                break;
            case "evaLevelDown":
                sc.modLevel("eva", -48, 999);
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
            case "endEvaSleepEvent":
                char.room(11);
                break;
        };
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
                    { chatID: -1, text: "Ok. I'll come back after dark.  ", callback: "" },
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
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + g.makeSingular(sc.n("el")) + ".", callback: "sleepReset" },
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
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + g.makeSingular(sc.n("el")) + ".", callback: "sleepReset" },
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
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + g.makeSingular(sc.n("el")) + ".", callback: "sleepReset" },
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
                    { chatID: -1, text: "No! That's fucked up. I'm not going to jack off on my sleeping " + g.makeSingular(sc.n("el")) + ".", callback: "sleepReset" },
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
        ];
        return cArray[chatID];
    }
};
