 //Sister's Room
var room13 = {};

room13.main = function () {
    g.internal = "";
    var btnList = new Array();
    var lockdrawer = gv.get("lockdrawer");
    if (lockdrawer) 
        nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");

    if (g.pass === "endSleepyTime") {
        g.pass = "";
        nav.bg("28_transformation/twin.jpg");
        chat(176, 13);
    }
    else if (g.hourBetween(22, 25) || g.hourBetween(0, 6)) {
        nav.bg("13_sisterRoom/roomSleep.jpg", "13_sisterRoom/roomSleep.jpg");
        btnList = [{
            "type": "btn",
            "name": "bed",
            "left": 1039,
            "top": 527,
            "width": 543,
            "height": 288,
            "image": "13_sisterRoom/13_bedFar.png"
        }];
    }
    else {
        if (sc.getTimeline("lola").thisRoom) {
            if (cl.isLewd()) {
                btnList = new Array();
                nav.bg("13_sisterRoom/013_angryCaught.png");
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
                    "image": "13_sisterRoom/13_lola_reading.png"
                },
                {
                    "type": "btn",
                    "name": "eva",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": "13_sisterRoom/13_eva_sitting.png"
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
            if (!gv.get("lolaPanties")) {
                gv.set("lolaPanties", true);
                levels.mod("xdress", 33, 1);
            }

            if (levels.get("xdress").l < 1) 
                chat(5, 13);
            else 
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
            if (sc.getMission("lola", "massage").inProgress)
                sc.select("lolamassage", "13_sisterRoom/icon_massage.png", 1);
            //sc.select("spinbottle", "13_sisterRoom/icon_spinthebottle.png", 2);
            if (sc.getMission("lola", "tord").inProgress)
                sc.select("tord", "13_sisterRoom/icon_truthordare.png", 3);
            sc.select("dick", "13_sisterRoom/icon_dick.png", 4);
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
            if (sc.getMission("eva", "massage").inProgress)
                sc.select("evamassage", "13_sisterRoom/icon_feet.png", 1);
            //sc.select("spinbottle", "13_sisterRoom/icon_spinthebottle.png", 2);
            if (sc.getMission("lola", "tord").inProgress)
                sc.select("tord", "13_sisterRoom/icon_truthordare.png", 3);
            sc.select("dick", "13_sisterRoom/icon_dick.png", 4);
            sc.select("clearChat", "13_sisterRoom/icon_cancel.png", 5);
            break;
        case "clearChat":
            nav.killbutton("chatbg");
            nav.killbutton("lolachat");
            nav.killbutton("evachat");
            nav.killbutton("lolamassage");
            nav.killbutton("evamassage");
            nav.killbutton("spinbottle");
            nav.killbutton("tord");
            nav.killbutton("dick");
            nav.killbutton("clearChat");
            break
        case "lolachat":
            room13.btnclick("clearChat");
            var mtask = sc.getMission("lola", "massage").inProgress;
            switch (sc.taskGetStep("lola", "talk")) {
                case 0: chat(10, 13); break;
                case 1: chat(14, 13); break;
                case 2: if (mtask) chat(17, 13); else chat(14, 13); break;
            }
            break;
        case "evachat":
            var ecEvaLeval = sc.getLevel("eva");
            switch (sc.taskGetStep("eva", "talk")) {
                case 0: chat(44, 13); break;
                case 1: chat()
            }
            break;
        case "lolamassage":
            chat(999, 13);
            break;
        case "evamassage":
            chat(998, 13);
            break;
        case "spinbottle":

            break;
        case "tord":
            char.room(23);
            break;
        case "dick":

            break;
        case "lolaMassageLose":
            levels.mod("charisma", 20, 999);
            daily.set("lola");
            chat(27, 13);
            break;
        case "massage0":
            char.room(13);
            break;
        case "massage1chance":
            levels.mod("charisma", 20, 999);
            room13.chatcatch("massage1");
            break;
        case "massage2chance":
            levels.mod("charisma", 20, 999);
            room13.chatcatch("massage2");
            break;
        case "massage2chanceLose":
            nav.killbutton("massage2Bra");
            nav.modbutton("lolabody", "13_sisterRoom/lola_topPulledDown.png", null, null); 
            chat(31, 13);
            break;
        case "massage2chanceWin":
            sc.modLevel("lola", 100, 3);
            chat(28, 13);
            break;
        case "massage6":
            var massage5charisma = g.internal.charisma;
            g.internal = { level: 6, charisma: massage5charisma + 1 };
            if (sc.getLevel("lola") > 5) {
                room13.chatcatch("doMassage");
            }
            else {
                nav.killall();
                nav.bg("13_sisterRoom/013_backrub_006_2.jpg");
                charisma.init(g.internal.charisma, "doMassage", "endMassage", g.roomID);
            }
            break;
        case "massage7":
            var massage6charisma = g.internal.charisma;
            g.internal = { level: 7, charisma: massage6charisma + 1 };
            if (sc.getLevel("lola") > 6) {
                room13.chatcatch("doMassage");
            }
            else {
                nav.killall();
                nav.bg("13_sisterRoom/013_backrub_007_2.jpg");
                charisma.init(g.internal.charisma, "doMassage", "endMassage", g.roomID);
            }
            break;
        
        case "reset":
            char.room(13);
            break;
        case "massage2Shirt":
            nav.killbutton("massage2Shirt");
            nav.modbutton("lolabody", "13_sisterRoom/lola_topPushedUp.png", null, null); 
            nav.killbutton("endMassage");
            nav.button({
                "type": "btn",
                "name": "massage2Bra",
                "left": 1209,
                "top": 301,
                "width": 130,
                "height": 40,
                "image": "13_sisterRoom/lola_braStrap.png"
            }, 13);
            if (sc.getLevel("lola") < 2) {
                charisma.init(g.internal.charisma, "massage2chanceWin", "massage2chanceLose", g.roomID);
            }
            
            break;
        case "massage2Bra":
            g.internal = { level: 2, charisma: 2 + 7 };
            nav.killall();
            nav.button({
                "type": "img",
                "name": "massage",
                "left": 869,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_002.gif"
            }, 13);
            g.roomTimeout = setTimeout(function () {
                chat(26, 13);
            }, 2000);
            break;
        case "doMassage":
            room13.chatcatch("doMassage");
            break;
        case "endMassage":
            chat(26, 13);
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
            case "massage1chance":
                charisma.init(g.internal.charisma, "massage1chance", "lolaMassageLose", g.roomID) 
                break;
            case "massage2":
                nav.killbutton("massage");
                nav.button({
                    "type": "img",
                    "name": "lolabody",
                    "left": 1106,
                    "top": 85,
                    "width": 337,
                    "height": 967,
                    "image": "13_sisterRoom/lola_topless.png"
                }, 13);
                nav.button({
                    "type": "btn",
                    "name": "massage2Shirt",
                    "left": 1184,
                    "top": 219,
                    "width": 199,
                    "height": 177,
                    "image": "13_sisterRoom/lola_shirt.png"
                }, 13);
                nav.button({
                    "type": "btn",
                    "name": "endMassage",
                    "left": 360,
                    "top": 260,
                    "width": 600,
                    "height": 100,
                    "image": "13_sisterRoom/icon_finishMassage.png"
                }, 13);
                break;
            case "massage3chance":
                charisma.init(g.internal.charisma, "massage3chance", "lolaMassageLose", g.roomID)
                break;
            case "massage5":
                nav.killall();
                nav.bg("13_sisterRoom/013_backrub_006.jpg");
                nav.button({
                    "type": "btn",
                    "name": "massage6",
                    "left": 1021,
                    "top": 218,
                    "width": 442,
                    "height": 250,
                    "image": "13_sisterRoom/013_backrub_006.png"
                }, 13);
                
                sc.select("endMassage", "13_sisterRoom/icon_finishMassage.png", 0);
                
                break;
            case "massage6":
                nav.killall();
                nav.bg("13_sisterRoom/013_backrub_006.jpg");
                nav.button({
                    "type": "btn",
                    "name": "massage7",
                    "left": 1021,
                    "top": 218,
                    "width": 442,
                    "height": 250,
                    "image": "13_sisterRoom/013_backrub_006.png"
                }, 13);

                sc.select("endMassage", "13_sisterRoom/icon_finishMassage.png", 0);
                break;
            case "massage7":
                nav.bg("13_sisterRoom/013_backrub_007.jpg");
                break;
            case "massage7_1":
                nav.killall();
                nav.bg("13_sisterRoom/massage7day.jpg", "13_sisterRoom/massage7night.jpg");
                break;
            case "doMassage":
                nav.killall();
                gv.mod("arousal", 70);
                switch (g.internal.level) {
                    case 1:
                        nav.bg("13_sisterRoom/013_bedBr.jpg");
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 869,
                            "top": 0,
                            "width": 772,
                            "height": 1080,
                            "image": "13_sisterRoom/013_backrub_001.gif"
                        }, 13);
                        g.roomTimeout = setTimeout(function () {
                            chat(29, 13);
                        }, 2000);
                        break;
                    case 3:
                        nav.killall();
                        nav.bg("13_sisterRoom/013_bedBr.jpg");
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 880,
                            "top": 0,
                            "width": 772,
                            "height": 1080,
                            "image": "13_sisterRoom/013_backrub_003.gif"
                        }, 13);
                        g.roomTimeout = setTimeout(function () {
                            chat(26, 13);
                        }, 2500);
                        break;
                    case 4:
                        nav.killall();
                        nav.bg("13_sisterRoom/013_backrub_004.jpg");
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 880,
                            "top": 0,
                            "width": 772,
                            "height": 1080,
                            "image": "13_sisterRoom/013_backrub_004.gif"
                        }, 13);
                        g.roomTimeout = setTimeout(function () {
                            chat(26, 13);
                        }, 2500)
                        break;
                    case 5:
                        nav.killall();
                        nav.bg("13_sisterRoom/013_bedZoom.jpg");
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 725,
                            "top": 0,
                            "width": 1100,
                            "height": 1080,
                            "image": "13_sisterRoom/013_backrub_005.gif"
                        }, 13);
                        g.roomTimeout = setTimeout(function () {
                            chat(35, 13);
                        }, 2500)
                        break;
                    case 6:
                        sc.modLevel("lola", 75, g.internal.level - 1);
                        nav.killall();
                        nav.bg("13_sisterRoom/013_backrub_004.jpg");
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 869,
                            "top": 0,
                            "width": 772,
                            "height": 1080,
                            "image": "13_sisterRoom/013_backrub_006.gif"
                        }, 13);
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 335,
                            "top": 10,
                            "width": 502,
                            "height": 502,
                            "image": "13_sisterRoom/lolaBlush0.png"
                        }, 13);
                        g.roomTimeout = setTimeout(function () {
                            chat(36, 13);
                        }, 2500)
                        break;
                    case 7:
                        sc.modLevel("lola", 75, g.internal.level - 1);
                        nav.killall();
                        nav.bg("13_sisterRoom/013_backrub_004.jpg");
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 869,
                            "top": 0,
                            "width": 772,
                            "height": 1080,
                            "image": "13_sisterRoom/013_backrub_007.gif"
                        }, 13);
                        nav.button({
                            "type": "img",
                            "name": "massage",
                            "left": 335,
                            "top": 10,
                            "width": 502,
                            "height": 502,
                            "image": "13_sisterRoom/lolaBlush1.png"
                        }, 13);
                        g.roomTimeout = setTimeout(function () {
                            chat(37, 13);
                        }, 2500);
                        break;
                }
                
                
                break;
            case "evamassage":
                nav.killall();
                switch (g.internal.level) {
                    case 1:
                        nav.bg("13_sisterRoom/eva_massage_1.gif");
                        gv.mod("arousal", 70);
                        g.roomTimeout = setTimeout(function () {
                            if (sc.getLevel("eva") > 2) {
                                sc.modLevel("eva", 200, 2);
                                if (cl.c.chastity !== null)
                                    chat(51, 13);
                                else
                                    chat(54, 13);
                            }
                            else
                                chat(43, 13);
                        }, 2500);
                        break;
                    case 3:
                        nav.bg("13_sisterRoom/eva_massage_3.gif");
                        gv.mod("arousal", 70);
                        g.roomTimeout = setTimeout(function () {
                            chat(60, 13);
                        }, 2500);
                        break;
                }
                break;
            case "evaMassage2":
                nav.killall();
                nav.bg("13_sisterRoom/eva_massage_2.jpg");

                break;
            case 'takePanties':
                cl.add("panties", "w");
                levels.mod("xdress", 33, 2);
                nav.killbutton("panties");
                break;
            case "killPantyIcon":
                nav.killbutton("panties");
                break;
            case "massageEnd":
                char.addtime(45);
                daily.set("lola");
                sc.modLevel("lola", 75, g.internal.level);
                char.room(13);
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
                sc.startMission("eva", "massage");
                sc.completeMissionTask("eva", "talk", 0, true);
                sc.modLevel("eva", 101, 0);
                char.room(13);
                break;
            case "talkLola0":
                char.addtime(20);
                daily.set("lolatalk");
                sc.startMission("lola", "massage");
                sc.completeMissionTask("lola", "talk", 0, true);
                sc.modLevel("lola", 101, 0);
                char.room(13);
                break;
            case "talkLola1":
                char.addtime(20);
                daily.set("lolatalk");
                sc.completeMissionTask("lola", "talk", 1, true);
                sc.modLevel("lola", 15, 2);
                char.room(13);
                break;
        };
    });
};

room13.chat = function (chatID) {
    var buttons, txt;
    if (chatID === 999) {
        var lolaLevel = sc.getLevel("lola");
        
        g.internal = { level: lolaLevel, charisma: lolaLevel + 7 };
        switch (lolaLevel) {
            case 0:
                txt = "Should I just ask her if she wants a massage? "
                buttons = [
                    { chatID: -1, text: "I should talk to her first.", callback: "massage0" },
                    { chatID: -1, text: "You look stiff and sore from swimming. Would you like a massage? " + charisma.getStats(g.internal.charisma).txt, callback: "massage1chance" }
                ];
                break;
            case 1:
            case 2:
                g.internal = { level: 1, charisma: 1 + 7 };
                txt = "I know you go swimming a lot, do you need a massage? "
                buttons = [
                    { chatID: 30, text: "Do you want a massage?", callback: "" },
                ];
                break;
            case 3:
                txt = "You're looking really tight today. "
                buttons = [
                    { chatID: 32, text: "Do you want a massage? It's even better without a shirt. ", callback: "" },
                    { chatID: -1, text: "Your glutes seem stressed, do you want me to massage them? " + charisma.getStats(g.internal.charisma).txt, callback: "massage3chance" }
                ];
                break;
            case 4:
                txt = "Hey " + sc.n("lola") + ". "
                buttons = [
                    { chatID: 33, text: "Your quads and calves seem stressed, do you want me to massage them?", callback: "" },
                    { chatID: -1, text: "It's better to massage your glutes without your skirt. " + charisma.getStats(g.internal.charisma).txt, callback: "massage4chance" }
                ];
                break;
            //case 5:
            default:
                g.internal = { level: 5, charisma: 5 + 7 };

                txt = "I noticed that your glutes are really tight. It can lead to a bad back when you get older. Do you want me to take " +
                    "care of it for you? "
                buttons = [
                    { chatID: 34, text: "...", callback: "" },
                ];
                break;
        };
        return {
            chatID: 999,
            speaker: "me",
            text: txt,
            button: buttons
        };
    }
    else if (chatID === 998) {
        var evaLevel = sc.getLevel("eva");
        g.internal = { level: evaLevel, charisma: evaLevel + 7 };
        switch (evaLevel) {
            case 0:
                txt = "Should I just ask her if she wants a massage? "
                buttons = [
                    { chatID: -1, text: "I should talk to her first.", callback: "reset" },
                    { chatID: 41, text: "Do you want a massage? ", callback: "" }
                ];
                break;
            case 1:
            case 2:
                g.internal = { level: 1 };
                txt = "So.. uh do you want a massage? "
                buttons = [
                    { chatID: 42, text: "...", callback: "" },
                ];
                break;
            case 3:
                g.internal = { level: 3 };
                txt = "So, uh, can I rub you feet again?"
                buttons = [
                    { chatID: 59, text: "...", callback: "" },
                ];
                break;
            case 4:
                txt = "Hey " + sc.n("lola") + ". "
                buttons = [
                    { chatID: 33, text: "Your quads and calves seem stressed, do you want me to massage them?", callback: "" },
                    { chatID: -1, text: "It's better to massage your glutes without your skirt. " + charisma.getStats(g.internal.charisma).txt, callback: "massage4chance" }
                ];
                break;
            //case 5:
            default:
                g.internal = { level: 5, charisma: 5 + 7 };

                txt = "I noticed that your glutes are really tight. It can lead to a bad back when you get older. Do you want me to take " +
                    "care of it for you? "
                buttons = [
                    { chatID: 34, text: "...", callback: "" },
                ];
                break;
        };
        return {
            chatID: 999,
            speaker: "me",
            text: txt,
            button: buttons
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
                text: "Should I take " + sc.n("lola") + "'s dirty panties?",
                button: [
                    { chatID: -1, text: "Gross... no", callback: "killPantyIcon" },
                    { chatID: -1, text: "yea... ", callback: "takePanties" }
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
                text: "This is a work in progress. You'll see much much more in the next release.!",
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
                speaker: "lola",
                text: "MmmmmmmMMMm I love your hands. So powerful. You're really the best! ",
                button: [
                    { chatID: -1, text: "[Finish the massage]", callback: "massageEnd" }
                ]
            },
            {
                chatID: 27,
                speaker: "lola",
                text: "No thanks, That's a little too much right now. ",
                button: [
                    { chatID: -1, text: "oh ok", callback: "reset" }
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "Nice! She didn't stop me. I guess this slut wants my hands all over her body. Now to remove that pesky bra strap. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 29,
                speaker: "thinking",
                text: "She's so tight and trim. I really love touching her, but I want to touch her skin. Maybe she'll let me " +
                    "pull up her shirt. It's innocent enough. I'm doing her a favor by giving her a better massage. ",
                button: [
                    { chatID: -1, text: "...", callback: "massage2" },
                ]
            },
            {
                chatID: 30,
                speaker: "lola",
                text: "Oh, uh, sure! I guess I could really use a massage. ",
                button: [
                    { chatID: -1, text: "Great, just lay back and relax and I'll take care of you.", callback: "doMassage" },
                ]
            },
            {
                chatID: 31,
                speaker: "lola",
                text: "That's ok. I'm not ready for that. ",
                button: [
                    { chatID: -1, text: "Well, that should do it. ", callback: "massageEnd" },
                ]
            },
            {
                chatID: 32,
                speaker: "lola",
                text: "I guess. It's just my bare back, so that should be ok. ",
                button: [
                    { chatID: -1, text: "Yes. Just your back. ", callback: "doMassage" },
                ]
            },
            {
                chatID: 33,
                speaker: "lola",
                text: "Oh. How'd you know? They are really tight. I guess it's ok if I leave my panties on. ",
                button: [
                    { chatID: -1, text: "Of course ", callback: "doMassage" },
                ]
            },
            {
                chatID: 34,
                speaker: "lola",
                text: "Really? I really don't want a bad back. Sure you can massage them. Just don't stray too far mister! ",
                button: [
                    { chatID: -1, text: "I promise! ", callback: "doMassage" },
                ]
            },
            {
                chatID: 35,
                speaker: "thinking",
                text: "Her pussy is peeking out at me! Surely she knows I can see it. I bet she wants me to finger her. She's " + 
                    "totally wants my dick! ",
                button: [
                    { chatID: -1, text: "...", callback: "massage5" },
                ]
            },
            {
                chatID: 36,
                speaker: "thinking",
                text: "She's not stopping me! She's so wet. I wonder if she'll let stick it in. Maybe I'll try to pull down her panties. ",
                button: [
                    { chatID: -1, text: "...", callback: "massage6" },
                ]
            },
            {
                chatID: 37,
                speaker: "thinking",
                text: "I can't believe I got this far. She's totally ready. I bet I can just slip it in and she'll never say no. ",
                button: [
                    { chatID: 38, text: "...", callback: "massage7" },
                ]
            },
            {
                chatID: 38,
                speaker: "lola",
                text: "Huh? ",
                button: [
                    { chatID: 39, text: "...", callback: "massage7_1" },
                ]
            },
            {
                chatID: 39,
                speaker: "eva",
                text: "I'm standing right here! ",
                button: [
                    { chatID: 40, text: "...", callback: "evaLevelDown" },
                ]
            },
            {
                chatID: 40,
                speaker: "lola",
                text: "Oh oh. Yes. Sorry it was very relaxed. You need to get off me so I can get dressed. I'm so sorry. This " +
                    "is just inappropriate. ",
                button: [
                    { chatID: -1, text: "oh yeah.", callback: "massageEnd" },
                ]
            },
            {
                chatID: 41,
                speaker: "eva",
                text: "Keep your nasty hands away from me butt sniffer!",
                button: [
                    { chatID: -1, text: "ok.", callback: "reset" },
                ]
            },
            {
                chatID: 42,
                speaker: "eva",
                text: "Why are you so desperate to touch me pervert? You know what, you can touch my feet. At least you're not " +
                    "rubbing on my body. ",
                button: [
                    { chatID: -1, text: "Sweet!.", callback: "evamassage" },
                ]
            },
            {
                chatID: 43,
                speaker: "eva",
                text: "You know. That's wasn't terrible. I guees perverts do give great foot massages. ",
                button: [
                    { chatID: -1, text: "We sure do!", callback: "evaMassageEnd" },
                ]
            },
            {
                chatID: 44,
                speaker: "eva",
                text: "Hey panty sniffer, can't handle a burger job? ",
                button: [
                    { chatID: 45, text: "Eat my boogers " , callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "eva",
                text: "I would, but you've already picked and ate them. That's why your breath smells so bad!",
                button: [
                    { chatID: 48, text: "Well at least my breath doesn't smell like dick! ", callback: "lolaLevelDown evaLevelHalf" },
                    { chatID: 46, text: "That's hurtful ", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "eva",
                text: "Oooo is the baby going to cry? ",
                button: [
                    { chatID: 47, text: "...no ", callback: "" },
                ]
            },
            {
                chatID: 47,
                speaker: "eva",
                text: "You should play with " + sc.n("lola") + ". She's much nicer. ",
                button: [
                    { chatID: -1, text: "She is nicer. ", callback: "reset" },
                ]
            },
            {
                chatID: 48,
                speaker: "lola",
                text: "Just becuase she's a little... promiscuous, you shouldn't call her that. ",
                button: [
                    { chatID: 49, text: "Awwww, sorry, I didn't mean it. I was just trying to be funny. ", callback: "lolaLevelQuater" },
                ]
            },
            {
                chatID: 49,
                speaker: "eva",
                text: "I'm promiscuous? You say that like I've slept with half the football team. I'll have you know I've only " +
                    "had sex with one of them. And I was very drunk, so it doesn't count. ",
                button: [
                    { chatID: 50, text: "Well if being drunk doesn't count, then you're still a virgin ", callback: "evaLevelHalf" },
                    { chatID: -1, text: "You're right. It doesn't count. ", callback: "evatalk0" },
                ]
            },
            {
                chatID: 50,
                speaker: "lola",
                text: "You two are the worst! ",
                button: [
                    { chatID: -1, text: "We are", callback: "evatalk0" },
                ]
            },
            {
                chatID: 51,
                speaker: "eva",
                text: "Do you have a boner? ",
                button: [
                    { chatID: 52, text: "Whaaa? Pssst,no!", callback: "evaMassage2" },
                ]
            },
            {
                chatID: 52,
                speaker: "eva",
                text: "Yes you do! I can feel it! Were you peeking up my skirt? Pervert!   ",
                button: [
                    { chatID: 53, text: "I wasn't peeking! I didn't make you wear a short skirt. ", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "eva",
                text: "What ever you pervert! You're like a dog, always trying to hump something! ",
                button: [
                    { chatID: -1, text: "Stop showing and I'll stop looking. ", callback: "evaMassageEnd" },
                ]
            },
            {
                chatID: 54,
                speaker: "eva",
                text: "So you like rubbing my feet? Do you have a foot fetish. I knew a guy that had that. ",
                button: [
                    { chatID: 55, text: "No. I just wanted to do something nice. ", callback: "" },
                    { chatID: 56, text: "I totally do! I love feet and I don't care who knows. ", callback: "" },
                ]
            },
            {
                chatID: 55,
                speaker: "eva",
                text: "Hmmmm. You totally do, why else would you rub my feet this much. Unless you're trying to get in " + 
                    "my panties. ",
                button: [
                    { chatID: 58, text: "Whatever butthead. No one's trying to get in your panties.  ", callback: "" },
                ]
            },
            {
                chatID: 56,
                speaker: "eva",
                text: "I knew it! After the first massage I told " + sc.n("lola") + " that you're one of those foot fetish " +
                    "weirdos! You would probably orgasm if I let you lick them wouldn't you. ",
                button: [
                    { chatID: 57, text: "...", callback: "" },
                ]
            },
            {
                chatID: 57,
                speaker: "lola",
                text: "That's not nice. There's nothing weird about being attracted to feet. It's endearing. ",
                button: [
                    { chatID: 58, text: "...", callback: "" },
                ]
            },
            {
                chatID: 58,
                speaker: "eva",
                text: "Whatever. You're like a dog. Just trying to hump something.  ",
                button: [
                    { chatID: -1, text: "You're a dog", callback: "evaMassageEnd" },
                ]
            },
            {
                chatID: 59,
                speaker: "eva",
                text: "No. That's boring. Doggies lick. You can lick my feet and suck my toes. Suck up doggy.  ",
                button: [
                    { chatID: -1, text: "woof.", callback: "evamassage" },
                ]
            },
            {
                chatID: 60,
                speaker: "eva",
                text: "Hahah gross. Good doggy.",
                button: [
                    { chatID: -1, text: "....", callback: "evaMassageEnd" },
                ]
            },
        ];
        return cArray[chatID];
    }
};
