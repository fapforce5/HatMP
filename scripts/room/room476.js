//Room name
var room476 = {};
room476.main = function () {
    if (g.pass === "room476_cross") {
        daily.newday();
        room28.future();
        g.pass = null;
        nav.bg("476_cabin/bg_empty.jpg", "476_cabin/bg_empty_night.jpg");
        zcl.displayMain(320, 545, .042, "armsup", false);
        
        g.internal = {
            rope: 100,
            walker: new Array()
        };
        g.internal.walker.push(g.rand(7, 13));
        g.internal.walker.push(g.rand(13, 21));
        nav.button({
            "type": "img",
            "name": "cross",
            "left": 546,
            "top": 324,
            "width": 175,
            "height": 52,
            "image": "476_cabin/cross_tie.png",
        }, 476);
        sc.select("cry", "476_cabin/icon_cry.png", 1);
        sc.select("help", "476_cabin/icon_help.png", 3);
        sc.select("free", "476_cabin/icon_free.png", 5);
        sc.select("rest1", "476_cabin/icon_rest1.png", 7);
        sc.select("rest3", "476_cabin/icon_rest3.png", 9);
        sc.select("rest8", "476_cabin/icon_rest8.png", 11);
    }
    else {
        if (g.isNight() && g.dt.getDay() !== 5) {
            //if (sissy.st[10].ach) {
                nav.bg("476_cabin/bg_night_cult.jpg");
                chat(1, 476);
            //}
            //else {
            //    nav.bg("476_cabin/bg_night_cult.jpg");

            //}
            return;
        }

        nav.button({
            "type": "btn",
            "name": "door",
            "left": 572,
            "top": 416,
            "width": 95,
            "height": 215,
            "image": "476_cabin/door.png",
            "night": "476_cabin/door_night.png",
        }, 476);

        nav.buildnav([475]);
    }
};

room476.btnclick = function (name) {
    switch (name) {
        case "door":
            nav.kill();
            nav.bg("476_cabin/bg_empty.jpg", "476_cabin/bg_empty_night.jpg");
            chat(0, 476);
            break;
        case "cry":
            room476.btnclick("killRope");
            nav.button({
                "type": "btn",
                "name": "cross_other",
                "left": 610,
                "top": 256,
                "width": 351,
                "height": 172,
                "image": "476_cabin/cross_cry.png",
            }, 476);
            nav.next("cry1");
            break;
        case "cry1":
            nav.killbutton("cry1");
            chat(17, 476);
            break;
        case "help":
            room476.btnclick("killRope");
            nav.button({
                "type": "btn",
                "name": "cross_other",
                "left": 640,
                "top": 298,
                "width": 621,
                "height": 315,
                "image": "476_cabin/cross_help.png",
            }, 476);
            nav.next("help1");
            
            break;
        case "help1":
            nav.killbutton("cross_other");
            if (g.internal.walker.includes(g.dt.getHours())) {
                nav.button({
                    "type": "btn",
                    "name": "cross_other",
                    "left": 650,
                    "top": 91,
                    "width": 557,
                    "height": 989,
                    "image": "476_cabin/cross_help1.png",
                }, 476);
                chat(18, 476);
            }
            else {
                room476.chatcatch("cross_inc");
            }
            break;
        case "free":
            room476.btnclick("killRope");
            var points = Math.floor((levels.get("strength").l * (gv.get("energy") / 100)) * 3);
            if (points < 15)
                points = 15;
            gv.mod("energy", -15);
            g.internal.rope -= points;

            if (g.internal.rope < 1) {
                zcl.displayMain(100, 800, .15, "clothes", false);
                chat(20, 476);
            }
            else {
                chat(999, 476);
            }
            break;
        case "rest1":
            gv.mod("energy", 10);
            room476.chatcatch("cross_inc");
            break;
        case "rest3":
            gv.mod("energy", 35);
            char.addtime(120);
            room476.chatcatch("cross_inc");
            break;
        case "rest8":
            gv.mod("energy", 120);
            char.addtime(420);
            room476.chatcatch("cross_inc");
            break;
        case "killRope":
            nav.killbutton("cry");
            nav.killbutton("help");
            nav.killbutton("free");
            nav.killbutton("rest1");
            nav.killbutton("rest3");
            nav.killbutton("rest8");
            nav.killbutton("cross_noise");
            break;
        case "sybian":
            switch (g.internal) {
                case 10:
                    nav.killall();
                    nav.next("sybian");
                    nav.bg("476_cabin/bg_night_cult10.jpg");
                    zcl.armsup(350, 1300, .35, "worried", false);
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 1572,
                        "top": 0,
                        "width": 317,
                        "height": 1080,
                        "image": "476_cabin/sybian_top.png",
                    }, 476);
                    break;
                case 11:
                    nav.bg("476_cabin/bg_night_cult11.jpg");
                    break;
                case 12:
                    nav.killbutton("sybian");
                    nav.suck("sybian");
                    nav.killbutton("sybianbg");
                    zcl.armsup(-200, 500, .85, "worried", false);
                    nav.bg("476_cabin/bg_night_cult12.jpg");
                    gv.mod("energy", -15);
                    break;
                case 13:
                    nav.bg("476_cabin/bg_night_cult13.jpg");
                    zcl.armsup(-200, 500, .85, "open", false);
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 747,
                        "top": 0,
                        "width": 854,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult13.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 14:
                    nav.killbutton("sybianbg");
                    nav.bg("476_cabin/bg_night_cult14.jpg");
                    zcl.armsup(-200, 500, .85, "worried", false);
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 1321,
                        "top": 524,
                        "width": 36,
                        "height": 104,
                        "image": "476_cabin/bg_night_cult14.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 15:
                    nav.killbutton("sybianbg");
                    nav.bg("476_cabin/bg_night_cult15.jpg");
                    zcl.armsup(-200, 500, .85, "open", false);
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 558,
                        "top": 0,
                        "width": 892,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult15.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 16:
                    nav.killbutton("sybianbg");
                    nav.bg("476_cabin/bg_night_cult16.jpg");
                    zcl.armsup(-200, 500, .85, "cry", false);
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 469,
                        "top": 0,
                        "width": 1183,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult16.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 17:
                    nav.killbutton("sybianbg");
                    zcl.armsup(-200, 500, .85, "open", false);
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 751,
                        "top": 0,
                        "width": 980,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult17.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 18:
                    nav.killbutton("sybianbg");
                    nav.bg("476_cabin/bg_night_cult18.jpg");
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 854,
                        "top": 0,
                        "width": 553,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult18.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 19:
                    nav.killbutton("sybianbg");
                    nav.bg("476_cabin/bg_night_cult_sg0.jpg");
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 1251,
                        "top": 434,
                        "width": 251,
                        "height": 576,
                        "image": "476_cabin/bg_night_cult_sg0.png",
                    }, 476);
                    chat(16, 476);
                    break;
                case 20:
                    
                    nav.killbutton("sybianbg");
                    zcl.kill();
                    var sybian21body = cl.c.chest > 1 ? "m" : "f";
                    var sybian21cock = cl.c.cock < 3 ? "b" : "s";
                    if (cl.c.chastity)
                        sybian21cock = "c";
                    nav.bg("476_cabin/bg_night_cult_sg_" + sybian21body + "_" + sybian21cock + ".jpg");
                    gv.mod("energy", -15);
                    break;
                case 21:
                    nav.killbutton("sybianbg");
                    zcl.armsup(-200, 500, .85, "open", false);
                    nav.bg("476_cabin/bg_night_cult19.jpg");
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 514,
                        "top": 0,
                        "width": 993,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult19.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 22:
                    nav.killbutton("sybianbg");
                    nav.bg("476_cabin/bg_night_cult20.jpg");
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 543,
                        "top": 0,
                        "width": 959,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult20.png",
                    }, 476);
                    gv.mod("energy", -15);
                    break;
                case 23:
                    nav.killbutton("sybianbg");
                    nav.bg("476_cabin/bg_night_cult21.jpg");
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 339,
                        "top": 0,
                        "width": 1163,
                        "height": 1080,
                        "image": "476_cabin/bg_night_cult21.png",
                    }, 476);
                    break;
                case 24:
                    nav.kill();
                    levels.anal(3, true);
                    levels.oral(4, true, false, "m", null, "unk");
                    levels.oral(2, true, false, "m");
                    levels.oral(3, true, false, "m");
                    levels.oral(2, true, false, "m");
                    levels.oral(4, true, false, "m");
                    levels.oral(5, true, false, "m");
                    levels.oral(3, true, false, "m");
                    if (g.hourBetween(17, 24))
                        char.addDays(1);
                    char.settime(5, 59);
                    nav.bg("476_cabin/bg_night_cult22.jpg");
                    zcl.armsup(-200, 500, .85, "cry", false);
                    nav.button({
                        "type": "img",
                        "name": "sybianbg",
                        "left": 1251,
                        "top": 434,
                        "width": 403,
                        "height": 646,
                        "image": "476_cabin/bg_night_cult22.png",
                    }, 476);
                    chat(13, 476);
                    break;
            }
            g.internal++;
            break;
        case "pillory":
            gv.mod("energy", -10);
            if (g.internal === 16 || g.internal === 17)
                nav.bg("476_cabin/pillory" + g.internal + ".jpg");
            else if (g.internal === 19) {
                levels.anal(5, false, "m", true, null, "unk");
                levels.anal(3, false, "m", true);
                levels.anal(3, false, "m", true);
                levels.anal(3, false, "m", true);
                levels.anal(4, false, "m", true);
                levels.oral(3, false, false, "m", null, "unk");
                levels.oral(2, false, false, "m");
                levels.oral(2, false, false, "m");
                levels.oral(4, false, false, "m");
                levels.oral(3, false, false, "m");

                nav.bg("476_cabin/pillory" + g.internal + ".jpg");
                nav.killall();
                if (g.hourBetween(17, 24))
                    char.addDays(1);
                char.settime(5, 59);
                if (g.dt.getDay() === 5)
                    chat(14, 476);
                else
                    chat(13, 476);
            }
            else
                nav.bg("476_cabin/pillory" + g.internal + "_" + (cl.c.hairLength > 2 ? "f" : "m") + ".jpg");

            g.internal++;
            break;
        case "cookie1":
            nav.killbutton("cookie");
            nav.killbutton("cookie1");
            nav.button({
                "type": "img",
                "name": "cookie",
                "left": 1035,
                "top": 909,
                "width": 327,
                "height": 171,
                "image": "476_cabin/cookie_2.png",
            }, 476);
            chat(34, 476);
            break;
        case "cookie9":
            nav.kill();
            nav.bg("476_cabin/cookie9_" + gender.pronoun("f") + ".jpg");
            if (cl.c.chastity !== null) {
                nav.button({
                    "type": "img",
                    "name": "cookie",
                    "left": 920,
                    "top": 656,
                    "width": 161,
                    "height": 144,
                    "image": "476_cabin/cookie_chastity1.png",
                }, 476);
            }
            chat(41, 476);
            break;
        case "cookie12":
            if (g.internal > 18) {
                nav.killbutton("cookie12");
                levels.anal(5, false, "m", true, null, "unk");
                levels.anal(4, false, "m", true);
                levels.anal(4, false, "m", true);
                levels.anal(4, false, "m", true);
                levels.anal(5, false, "m", true);
                chat(44, 476);
                return;
            }
            if (g.internal % 2 === 1) {
                nav.killbutton("cookie_chastity");
                nav.bg("476_cabin/cookie" + g.internal + "_" + (cl.c.chastity === null ? "n" : "c") + ".jpg");
            }
            else {
                nav.bg("476_cabin/cookie" + g.internal + "_" + gender.pronoun("f") + ".jpg");
                if (cl.c.chastity !== null) {
                    nav.button({
                        "type": "img",
                        "name": "cookie_chastity",
                        "left": 920,
                        "top": 656,
                        "width": 161,
                        "height": 144,
                        "image": "476_cabin/cookie_chastity1.png",
                    }, 476);
                }
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room476.chatcatch = function (callback) {
    switch (callback) {
        case "bg_night_cult1":
        case "bg_night_cult2":
        case "bg_night_cult5":
        case "bg_night_cult7":
        case "pillory3":
        case "pillory4":
        case "pillory5":
        case "cookie6":
            nav.bg("476_cabin/" + callback + ".jpg");
            break;
        case "pillory8":
            nav.bg("476_cabin/pillory8_" + (cl.c.chest > 2 ? "f" : "m") + ".jpg");
            break;
        case "pillory9":
            nav.killall();
            g.internal = 10;
            nav.bg("476_cabin/pillory9_" + (cl.c.hairLength > 2 ? "f" : "m") + ".jpg");
            nav.next("pillory");
            break;
        case "pillory2":
            nav.killall();
            nav.bg("476_cabin/" + callback + ".jpg");
            break;
        case "bg_night_cult3":
            char.addtime(60);
            cl.nude();
            gv.mod("energy", -120);
            nav.bg("172_punishblack/black.jpg");
            break;
        case "bg_night_cult6":
        case "bg_night_cult8":
            nav.bg("476_cabin/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "bg_night_cult9":
            g.internal = 10;
            nav.bg("476_cabin/bg_night_cult9.jpg");
            sc.select("sybian", "476_cabin/sybian0.png", 3);
            break;
        case "add5":
            char.addtime(10);
            break;
        case "bg_night_cult4":
            if (g.isNight()) {
                nav.bg("476_cabin/bg_night_cult4.jpg");
                if (sc.getMission("cult", "cabin").notStarted) {
                    sc.startMission("cult", "cabin");
                    sc.completeMissionTask("cult", "cabin", 0);
                    sc.show("cult");
                    chat(7, 476);
                }
            }
            else {
                nav.bg("476_cabin/bg_empty.jpg", "476_cabin/bg_empty_night.jpg");
                zcl.displayMain(300, 535, .045, "armsup", false);
                chat(6, 476);
            }
            break;
        case "leave":
            char.room(475);
            break;
        case "fridayFreedom":
            if (g.isNight())
                char.settime(6, 5);
            char.room(476);
            break;
        case "bg_night_cult_sg":
            room476.btnclick("sybian");
            break;
        case "cross":
            gv.mod("cultcabin", 1);
            char.newdayfake();
            g.pass = "room476_cross";
            char.room(476);
            break;
        case "nextEvent":
            nav.killall();
            if (g.dt.getDay() === 5) {
                nav.button({
                    "type": "img",
                    "name": "cross_end",
                    "left": 793,
                    "top": 296,
                    "width": 966,
                    "height": 784,
                    "image": "476_cabin/cross_end_0.png",
                }, 476);
                chat(45, 476);
            }
            else {
                
                nav.bg("476_cabin/cross_end.jpg");
                zcl.displayMain(280, 800, .11, "armsup", false);
                nav.button({
                    "type": "img",
                    "name": "cross_end",
                    "left": 793,
                    "top": 296,
                    "width": 966,
                    "height": 784,
                    "image": "476_cabin/cross_end.png",
                }, 476);
                chat(21, 476);
            }
            break;
        case "nextEvent1":
            nav.killall();
            if (g.dt.getDay() === 5) {
                nav.button({
                    "type": "img",
                    "name": "cross_end",
                    "left": 793,
                    "top": 296,
                    "width": 966,
                    "height": 784,
                    "image": "476_cabin/cross_end_0.png",
                }, 476);
                chat(45, 476);
            }
            else {
                switch (gv.get("cultcabin") % 3) {
                    case 0:
                        nav.bg("476_cabin/bg_night_cult5.jpg");
                        chat(8, 476);
                        break;
                    case 1:
                        nav.bg("476_cabin/pillory0_" + (cl.c.chest > 2 ? "f" : "m") + ".jpg");
                        zcl.head(200, 540, .31, "angryleft");
                        chat(22, 476);
                        break;
                    case 2:
                        nav.bg("476_cabin/cookie0_" + gender.pronoun("f") + ".jpg");
                        if (cl.c.chastity !== null) {
                            nav.button({
                                "type": "img",
                                "name": "cookie_chastity",
                                "left": 1112,
                                "top": 799,
                                "width": 84,
                                "height": 91,
                                "image": "476_cabin/cookie_chastity0.png",
                            }, 476);
                        }
                        chat(32, 476);
                        break;
                }
            }
            break;
        case "cross_inc":
            room476.btnclick("killRope");
            nav.killbutton("cross_other");
            char.addtime(60);
            if (g.isNight()) {
                room476.chatcatch("nextEvent");
                return;
            }
            sc.select("cry", "476_cabin/icon_cry.png", 1);
            sc.select("help", "476_cabin/icon_help.png", 3);
            sc.select("free", "476_cabin/icon_free.png", 5);
            sc.select("rest1", "476_cabin/icon_rest1.png", 7);
            if(g.gethourdecimal() < 18)
                sc.select("rest3", "476_cabin/icon_rest3.png", 9);
            if (g.gethourdecimal() < 13)
                sc.select("rest8", "476_cabin/icon_rest8.png", 11);
            if (g.internal.walker.includes(g.dt.getHours())) {
                nav.button({
                    "type": "img",
                    "name": "cross_noise",
                    "left": 888,
                    "top": 887,
                    "width": 145,
                    "height": 140,
                    "image": "476_cabin/cross_noise.png",
                }, 476);
            }
            break;
        case "cross_help2":
            nav.button({
                "type": "btn",
                "name": "cross_other",
                "left": 720,
                "top": 253,
                "width": 417,
                "height": 827,
                "image": "476_cabin/cross_help2.png",
            }, 476);
            zcl.displayMain(100, 800, .2, "clothes", true);
            break;
        case "pillory1":
            nav.bg("476_cabin/pillory0_" + (cl.c.chest > 2 ? "f" : "m") + ".jpg");
            break;
        case "pillory6":
            nav.bg("476_cabin/pillory6_" + (cl.c.chest > 2 ? "f" : "m") + ".jpg");
            zcl.head(200, 540, .31, "shock");
            break;
        case "pillory7":
            nav.bg("476_cabin/pillory7_" + (cl.c.chest > 2 ? "f" : "m") + ".jpg");
            nav.button({
                "type": "img",
                "name": "cross_other",
                "left": 882,
                "top": 0,
                "width": 684,
                "height": 1080,
                "image": "476_cabin/pillory7.png",
            }, 476);
            break;
        case "cookie1":
            nav.button({
                "type": "img",
                "name": "cookie",
                "left": 1035,
                "top": 190,
                "width": 422,
                "height": 890,
                "image": "476_cabin/cookie_1.png",
            }, 476);
            nav.next("cookie1");
            
            break;
        case "cookie_3":
            nav.kill("cookie");
            if (cl.c.chastity !== null) {
                nav.button({
                    "type": "img",
                    "name": "cookie_chastity",
                    "left": 1112,
                    "top": 799,
                    "width": 84,
                    "height": 91,
                    "image": "476_cabin/cookie_chastity0.png",
                }, 476);
            }
            nav.button({
                "type": "img",
                "name": "cookie",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "476_cabin/cookie_3.png",
            }, 476);
            break;
        case "cookie4":
            nav.killbutton("cookie");
            nav.bg("476_cabin/cookie4_" + gender.pronoun("f") + ".jpg");
            break;
        case "cookie5":
            nav.killbutton("cookie_chastity");
            nav.bg("476_cabin/cookie5_" + gender.pronoun("f") + ".jpg");
            break;
        case "cookie7":
            nav.bg("476_cabin/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "cookie8":
            nav.bg("476_cabin/" + callback + "_" + gender.pronoun("f") + ".jpg");
            nav.next("cookie9");
            break;
        case "cookie10":
            nav.killbutton("cookie");
            nav.bg("476_cabin/" + callback + "_" + (cl.c.chastity === null ? "n" : "c") + ".jpg");
            break;
        case "cookie11":
            nav.bg("476_cabin/" + callback + "_" + (cl.c.chastity === null ? "n" : "c") + ".jpg");
            g.internal = 12;
            nav.next("cookie12");
            break;
        case "room460":
            char.room(460);
            break;
        case "room475":
            char.room(475);
            break;
        case "friday":
            nav.kill();
            nav.bg("476_cabin/friday.jpg");
            zcl.displayMain(250, 400, .12, "clothes", true);
            break;
        case "reset":
            char.room(476);
            break;
        default:
            break;
    }
};

room476.chat = function (chatID) {
    if (chatID === 999) {
        var message = "Damn the ropes are still really tight. ";
        if (g.internal.rope < 25)
            message = "The ropes are pretty loose. Just a bit more and I can be free. ";
        else if (g.internal.rope < 50)
            message = "I'm more than halfway there. The ropes are starting to get loose. ";
        else if (g.internal.rope < 75)
            message = "The ropes are less tight. Still have a way to go. ";
        return {
            chatID: 0,
            speaker: "thinking",
            text: message,
            button: [
                { chatID: -1, text: g.internal.rope + "% free", callback: "cross_inc" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "This place is creepy. I need to stay away from here. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "Oh crap! I need to get out of here! ",
                button: [
                    { chatID: 2, text: "[RUN AWAY!!!]", callback: "bg_night_cult1" }
                ]
            },
            {
                chatID: 2,
                speaker: "cult",
                text: "Where do you think you're going?",
                button: [
                    { chatID: 3, text: "*gulp!*", callback: "bg_night_cult2" }
                ]
            },
            {
                chatID: 3,
                speaker: "cult",
                text: "Lights out, fuck toy.",
                button: [
                    { chatID: 4, text: "...", callback: "bg_night_cult3" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "...ouch! My head really hurts. She didn't have to puch me so hard. " +
                    "There was so many of them, I'm afraid to open my eyes. Maybe they all " +
                    "left. I'm sure they have something else to do. Maybe I'm just laying " +
                    "on the ground and I can limp home. I really hope they're all gone.. ",
                button: [
                    { chatID: 7, text: "[Open your eyes]", callback: "bg_night_cult4" },
                    { chatID: 5, text: "[Keep your eyes closed]", callback: "" },
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "I wonder how much time passed.. Should I open my eyes?",
                button: [
                    { chatID: 7, text: "[Open your eyes]", callback: "bg_night_cult4" },
                    { chatID: 5, text: "[Keep your eyes closed]", callback: "add5" },
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "...fuck",
                button: [
                    { chatID: -1, text: "...", callback: "cross" }
                ]
            },
            {
                chatID: 7,
                speaker: "cult",
                text: "Oh good you're awake. It is so much more fun when the fuck meat is " +
                    "conscious. Hearing their screams make my dick so hard. I just don't " +
                    "know why the sound of a sobbing bitch makes me want to fuck. ",
                button: [
                    { chatID: 8, text: "*whimper*", callback: "bg_night_cult5" }
                ]
            },
            {
                chatID: 8,
                speaker: "cult",
                text: "Oh hay! What's up? They awake! Fuck yeah, I gotta get a piece of that " +
                    "ass. ",
                button: [
                    { chatID: 9, text: "*whimper*", callback: "bg_night_cult6" }
                ]
            },
            {
                chatID: 9,
                speaker: "cult",
                text: "Oh you will get a piece, we'll all get a piece, but first.. ",
                button: [
                    { chatID: 10, text: "...", callback: "bg_night_cult7" }
                ]
            },
            {
                chatID: 10,
                speaker: "cult",
                text: "That seat looks so uncomfortable. Let me help you with that. ",
                button: [
                    { chatID: 11, text: "*gulp*", callback: "bg_night_cult8" }
                ]
            },
            {
                chatID: 11,
                speaker: "cult",
                text: "I always do like the look on a sluts face when they're on the sybian. " +
                    "It's starts as pure joy, but as time goes on it turns to horror as they " +
                    "can't possibly cum any more, but can't get away. ",
                button: [
                    { chatID: 12, text: "uh-uh-uhhhhhh", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "cult",
                text: "Oh us? Are you worried that we aren't going to get the chance to enjoy " +
                    "ourselves since you're on the sybian. Don't worry little " + gender.pronoun("girl") +
                    " we're going to use your face hole for all our pleasure. Hehehe.  ",
                button: [
                    { chatID: -1, text: "b-b-b-bbb ooooooo", callback: "bg_night_cult9" }
                ]
            },
            {
                chatID: 13,
                speaker: "cult",
                text: "You did good tonight and it's getting late. We've got to head home, " +
                    "some of us have jobs we have to get to, others just need to get some " +
                    "sleep. We want to take that sissy ass of yours so " +
                    "we're gunna put you up on the cross and save you for tomorrow. " +
                    "Try to get some sleep up there 'cause tomorrow we're going to have some " +
                    "more fun wit' cha. hehehehe",
                button: [
                    { chatID: -1, text: "....no", callback: "cross" }
                ]
            },
            {
                chatID: 14,
                speaker: "cult",
                text: "You're lucky we have church tomorrow and need to save our cum. " +
                    "we're going to set you loose. If you talk we'll know. Don't try to go to " +
                    "the police, they work for us. One word to anyone and we'll find " +
                    "you and bury you in the swamp where no one will ever find you.  " +
                    "Tell me you won't tell anyone about our cabin.",
                button: [
                    { chatID: 15, text: "I promise I'll never tell anyone about your cabin.", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "cult",
                text: "Good slut. We're going to go. Don't try to follow us!",
                button: [
                    { chatID: -1, text: "yes sir.", callback: "fridayFreedom" }
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "Oh no.... That sybian up my ass is making my sissy spot tingle... " +
                    "Fuck it feels sooooo good!!!",
                button: [
                    { chatID: -1, text: "...", callback: "bg_night_cult_sg" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "*sniffle* well, I feel better, but I'm still stuck here.",
                button: [
                    { chatID: -1, text: "...", callback: "cross_inc" }
                ]
            },
            {
                chatID: 18,
                speaker: "!jenna",
                text: "What are you doing here! You should never come to this cabin! Like " +
                    "ever! Let me get you down. You're so lucky I found you. From the looks " +
                    "of it you know a taste of the terrible things that happen in this cabin! ",
                button: [
                    { chatID: 19, text: "Oh thanks!", callback: "cross_help2" }
                ]
            },
            {
                chatID: 19,
                speaker: "!jenna",
                text: "The forest is a dangerous place. Do you want me to take you to the " +
                    "park?",
                button: [
                    { chatID: -1, text: "Yes. Take me to the park. Thanks!", callback: "room460" },
                    { chatID: -1, text: "No. I'll wander the forest some more. Thanks.", callback: "room475" },
                ]
            },
            {
                chatID: 20,
                speaker: "me",
                text: "YES! I was able to pull myself free! Damn my wrists are sore! No more rape for me!",
                button: [
                    { chatID: -1, text: "Wander back into the forest.", callback: "room475" },
                ]
            },
            {
                chatID: 21,
                speaker: "cult",
                text: "Time to get you ready for the party!",
                button: [
                    { chatID: -1, text: "*groan*", callback: "nextEvent1" },
                ]
            },
            {
                chatID: 22,
                speaker: "river",
                text: "I'm so happy I came by the cabin today! Looks like we get to " +
                    "rip your sissy ass open! Hope you love the taste of your own ass " +
                    "'cuase our cocks are going straight from your ass to your mouth! ",
                button: [
                    { chatID: 23, text: "Fuck you " + sc.n("river") + "!", callback: "" },
                ]
            },
            {
                chatID: 23,
                speaker: "river",
                text: "Oh no, I'm going to fuck you like the sissy slut I've always known you " +
                    "to be. You know you want my cock balls deep in that ass. You've wanted it " +
                    "ever since I first met you all those years ago. Tick tock, here comes my cock!",
                button: [
                    { chatID: 24, text: "*grrrrr*", callback: "pillory1" },
                ]
            },
            {
                chatID: 24,
                speaker: "river",
                text: "Complain all you want, nothing you can do to stop me from sliding " +
                    "my cock inside that unwilling hole of yours. I'm really going to enjoy this. ",
                button: [
                    { chatID: 25, text: "No! Stop! Not you!", callback: "pillory2" },
                ]
            },
            {
                chatID: 25,
                speaker: "river",
                text: "I don't know. That mouth of yours says not, but that ass is saying yes. " +
                    "Should I just shove it in dry and rip you open? ",
                button: [
                    { chatID: 26, text: "What no! Don't shove it in at all!", callback: "pillory3" },
                ]
            },
            {
                chatID: 26,
                speaker: "river",
                text: "*PTOO* Naw, I'll spit on your hole. I really am nice to my bitches. ",
                button: [
                    { chatID: 27, text: "STOP!", callback: "pillory4" },
                ]
            },
            {
                chatID: 27,
                speaker: "river",
                text: "It's really gripping my finger. Your hole really does want my " +
                    "cock doesn't it. ",
                button: [
                    { chatID: 28, text: "No it doesn't. Get your finger out of my ass!", callback: "pillory5" },
                ]
            },
            {
                chatID: 28,
                speaker: "river",
                text: "So should I insert it slowly so you can get used to being filled " +
                    "by a real man's cock, or just jam it in all at once so I can hear " +
                    "you scream like the bitch you are? ",
                button: [
                    { chatID: 29, text: "Don't shove it in at all!", callback: "pillory6" },
                ]
            },
            {
                chatID: 29,
                speaker: "river",
                text: "Fuck yeah! Balls deep bitch! hehehe. Hey Billy. Shove your dick " +
                    "in this bitches mouth. Shut her up! ",
                button: [
                    { chatID: 30, text: "ow ow ow ow", callback: "pillory7" },
                ]
            },
            {
                chatID: 30,
                speaker: "river",
                text: "Damn! I'm about to fill this little fuck hole! I really wanted to " +
                    "last longer and really tear that ass up!",
                button: [
                    { chatID: 31, text: "*glug* *glug*", callback: "pillory8" },
                ]
            },
            {
                chatID: 31,
                speaker: "cult",
                text: "Don't worry " + sc.n("river") + " I'll tear that ass up! When " +
                    "I get done with this little sissy " + gender.pronoun("she") + 
                    " won't be able to walk for a week! Hope you like it deep little " +
                    "girl. ",
                button: [
                    { chatID: -1, text: "*glug* *glug*", callback: "pillory9" },
                ]
            },
            {
                chatID: 32,
                speaker: "cult",
                text: "You must really love cock! Just " +
                    "stay right there and don't move or we'll stomp the shit out of you. " +
                    "Got it!",
                button: [
                    { chatID: -1, text: "y-y-yes", callback: "cookie1" },
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "This place is creepy. I need to stay away from here. ",
                button: [
                    { chatID: -1, text: "Sneak away", callback: "leave" }
                ]
            },
            {
                chatID: 34,
                speaker: "me",
                text: "OW! You don't have to be so rough!",
                button: [
                    { chatID: 35, text: "...", callback: "" }
                ]
            },
            {
                chatID: 35,
                speaker: "cult",
                text: "Shut up slut! Holes don't get to complain. If you didn't want to " +
                    "be raped by everyone here, you shouldn't have come! ",
                button: [
                    { chatID: 36, text: "*whimper*", callback: "cookie_3" }
                ]
            },
            {
                chatID: 36,
                speaker: "cult",
                text: "But you are here. You want all our dicks inside you. I could feel " +
                    "you prostate twitch around my finger begging to get pounded again " +
                    "and again by all these cocks! You should thank us. We're just giving " +
                    "you what you want, but are too scared to ask for it. ",
                button: [
                    { chatID: 37, text: "...no", callback: "cookie4" }
                ]
            },
            {
                chatID: 37,
                speaker: "cult",
                text: "Shut up! Holes don't talk! ",
                button: [
                    { chatID: 38, text: "ooooffff!", callback: "cookie5" }
                ]
            },
            {
                chatID: 38,
                speaker: "cult",
                text: "OOhh. Is the little " + gender.pronoun("boy") + " going to cry?",
                button: [
                    { chatID: 39, text: "*whimper in pain*", callback: "cookie6" }
                ]
            },
            {
                chatID: 39,
                speaker: "cult",
                text: "I'm about to give you something to cry about you baby! ",
                button: [
                    { chatID: 40, text: "*whimper in pain*", callback: "cookie7" }
                ]
            },
            {
                chatID: 40,
                speaker: "cult",
                text: "You like my big stick toying with your ass? I know you do. Sluts " +
                    "love my big stick toying up their ass! ",
                button: [
                    { chatID: -1, text: "*whimper in pain*", callback: "cookie8" }
                ]
            },
            {
                chatID: 41,
                speaker: "cult",
                text: "All right boys! Who wants to fuck the meat bag? ",
                button: [
                    { chatID: 42, text: "*sobbing in desperation*", callback: "cookie10" }
                ]
            },
            {
                chatID: 42,
                speaker: "cult",
                text: "Should I pull the club out of " + gender.pronoun("his") + " ass first? ",
                button: [
                    { chatID: 43, text: "p-p-p-please", callback: "" }
                ]
            },
            {
                chatID: 43,
                speaker: "cult",
                text: "Naw! Fuck " + gender.pronoun("him") + " with the club in; " + 
                    gender.pronoun("she") + " can pretend like " + gender.pronoun("she") + 
                    "'s getting fucked by two cocks at the same time! Hehehehe",
                button: [
                    { chatID: -1, text: "*whine*", callback: "cookie11" }
                ]
            },
            {
                chatID: 44,
                speaker: "cult",
                text: "Ok cum sack. Time to put you back on the cross. We're going " +
                    "to enjoy raping you some more! I do love a broken sissy! ",
                button: [
                    { chatID: -1, text: "*whine*", callback: "cross" }
                ]
            },
            {
                chatID: 45,
                speaker: "kei",
                text: "Hey, what are you doing in the fuck cabin? ",
                button: [
                    { chatID: 46, text: "I was kidnapped and tied up here. Let me down dude?", callback: "" }
                ]
            },
            {
                chatID: 46,
                speaker: "kei",
                text: "Sure. Of course.  ",
                button: [
                    { chatID: 47, text: "Oh thank you! Thank you so much! ", callback: "friday" }
                ]
            },
            {
                chatID: 47,
                speaker: "kei",
                text: "You're lucky I stop by the cabin on Fridays or you would have been stuck up there all night! " +
                    "I'd love to help you get back, but I have to get to the sermon. Can't " +
                    "miss Friday Surmon! Later! ",
                button: [
                    { chatID: -1, text: "Sure. Later. ", callback: "reset" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};