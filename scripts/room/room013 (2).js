 //Sister's Room
var room13 = {};

room13.main = function () {
    var btnList = new Array();
    var lockdrawer = gv.get("lockdrawer");
    if (lockdrawer) 
        nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");
    if (g.pass === "endSleepyTime") {
        g.pass = "";
        nav.bg("28_transformation/twin.jpg");
        chat(176, 13);
    }
    else if (sc.getstep("lola") === 9) {
        nav.button({
            "type": "img",
            "name": "welcomeHome",
            "left": 192,
            "top": 121,
            "width": 1416,
            "height": 338,
            "image": "13_sisterRoom/welcome.png"
        }, 13);
        nav.button({
            "type": "img",
            "name": "welcomeGirls",
            "left": 842,
            "top": 174,
            "width": 915,
            "height": 906,
            "image": "13_sisterRoom/welcome1.png"
        }, 13);
        chat(110, 13);
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
            chat(137, 13);
            break;
        case "closenightstand":
            char.room(13);
            break;
        case "panties":
            if (!gv.get("lolaPanties")) {
                gv.set("lolaPanties", true);
                levels.mod("xdress", 50, 1);
            }

            if (levels.get("xdress").l < 1) 
                chat(5, 13);
            else 
                chat(6, 13);
            break;
        case "dresser":
            if (gv.get("lockdrawer"))
                chat(109, 13);
            else {
                nav.killall();
                nav.bg("13_sisterRoom/013_pantyDrawer.png");
                chat(0, 13);
            }
            break;
        case "puter":
            char.room(31);
            break;
        case "lola":
            if (cl.c.cumface) {
                chat(140, 13);
            }
            else if (scc.changesDiffernt("lola", false)) {
                chat(139, 13);
            }
            else if (daily.get("lola")) {
                chat(17, 13);
            }
            else {
                room13.btnclick("lolaChat");
            }
            break;
        case "lolaChat":
            var lolaSetp = sc.getstep("lola");
            switch (lolaSetp) {
                case 0:
                    chat(11, 13);
                    break;
                case 1:
                    chat(12, 13);
                    break;
                case 2:
                    chat(20, 13);
                    break;
                case 3:
                    chat(28, 13);
                    break;
                case 4:
                    var hour = g.dt.getHours() + (g.dt.getMinutes() / 60);
                    if (sc.step("eva") < 3)
                        chat(30, 13);
                    else if (!inv.has("wine"))
                        chat(32, 13);
                    else if (hour.between(17, 22))
                        chat(36, 13);
                    else
                        chat(34, 13);
                    break;
                case 5:
                    chat(40, 13);
                    break;
                case 6:
                    chat(49, 13);
                    break;
                case 7:
                    if (g.hourBetween(17, 23))
                        chat(75, 13);
                    else
                        chat(74, 13);

                    break;
                case 8:
                    chat(142, 13);
                    break;
                case 10:
                case 11:
                case 12:
                case 13:
                    chat(135, 13);
                    break;
                case 14:
                    if (sc.getstep("landlord") === 11)
                        chat(254, 13);
                    else
                        chat(250, 13);
                    break;
                case 15:
                    chat(250, 13);
                    break;
                case 200:
                    chat(147, 13);
                    break;
                case 201:
                    if (cl.appearance() > 1)
                        chat(174, 13);
                    else
                        chat(177, 13);
                    break;
                case 202:
                    chat(210, 13);
                    break;
            }

            break;
        case "eva":
            if (cl.c.cumface) {
                chat(141, 13);
            }
            else if (scc.changesDiffernt("eva", false)) {
                chat(138, 13);
            }
            else if (daily.get("eva")) {
                chat(19, 13);
            }
            else {
                room13.btnclick("evaChat");
            }
            break;
        case "evaChat":
            var evaStep = sc.getstep("eva");
            switch (evaStep) {
                case 0:
                    chat(8, 13);
                    break;
                case 1:
                    chat(18, 13);
                    break;
                case 2:
                    chat(23, 13);
                    break;
                case 3:
                    var hour3 = g.dt.getHours() + (g.dt.getMinutes() / 60);
                    if (sc.step("lola") < 4)
                        chat(31, 13);
                    else if (!inv.has("wine"))
                        chat(32, 13);
                    else if (hour3.between(17, 22))
                        chat(36, 13);
                    else
                        chat(34, 13);
                    break;
                case 4:
                    chat(42, 13);
                    break;
                case 5:
                    chat(54, 13);
                    break;
                case 6:
                    if (g.hourBetween(17, 23))
                        chat(75, 13);
                    else
                        chat(73, 13);
                    break;
                case 7:
                    chat(142, 13);
                    break;
                case 9:
                case 10:
                case 11:
                case 12:
                    chat(136, 13);
                    break;
                case 13:
                    if (sc.getstep("landlord") === 11)
                        chat(254, 13);
                    else
                        chat(250, 13);
                    break;
                case 14:
                    chat(250, 13);
                    break;
                case 200:
                    chat(148, 13);
                    break;
                case 201:
                    if (cl.appearance() > 1)
                        chat(174, 13);
                    else
                        chat(177, 13);
                    break;
                case 202:
                    chat(219, 13);
                    break;
                case 203:
                    chat(245, 13);
                    break;
                default:
                    break;
            }
            break;
        case "bed":
            nav.killbutton("bed");
            nav.bg("13_sisterRoom/13_bedBG.png", "13_sisterRoom/13_bedBG.png");
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
                "name": "sheet3",
                "left": 904,
                "top": 582,
                "width": 716,
                "height": 478,
                "image": "13_sisterRoom/13_sheet3.png"
            }, 13);
            break;
        case "sheet3":
            nav.killbutton("sheet3");
            nav.killbutton("pjs");
            var llStepx = sc.getstep("lola");
            var evaStepx = sc.getstep("eva");
            if (llStepx < 200 && llStepx > 6 && evaStepx > 5) {
                nav.killall();
                nav.bg("13_sisterRoom/b0.jpg");
                g.internal = 1;
                nav.button({
                    "type": "btn",
                    "name": "b0",
                    "left": 981,
                    "top": 418,
                    "width": 497,
                    "height": 471,
                    "image": "13_sisterRoom/b0.png"
                }, 13);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "pjs",
                    "left": 985,
                    "top": 93,
                    "width": 485,
                    "height": 883,
                    "image": "13_sisterRoom/13_pjs.png"
                }, 13);
            }
            break;
        case "pjs":
            nav.killbutton("pjs");
            var lolaStep = sc.getstep("lola");
            if (lolaStep > 199) {
                nav.bg("13_sisterRoom/sleep200_0.jpg");
                chat(175, 13);
            }
            else {
                nav.bg("13_sisterRoom/trouble_pj1.jpg");
                chat(63, 13);
            }
            break;
        case "br5Panties1":
            nav.killbutton("br5Panties1");
            nav.button({
                "type": "btn",
                "name": "br5Panties2",
                "left": 753,
                "top": 558,
                "width": 994,
                "height": 294,
                "image": "13_sisterRoom/br5Panties2.png "
            }, 13);
            break;
        case "br5Panties2":
            if (sc.getstep("lola") === 202) {
                var llove = scc.get("lola").love;
                if (llove < 25) {
                    nav.killbutton("br5Panties2");
                    nav.bg("13_sisterRoom/013_bedBr5pullUp.jpg");
                    chat(85, 13);
                }
                else {
                    nav.killbutton("br5Panties2");
                    nav.bg("13_sisterRoom/013_bedBr6.jpg");
                    nav.button({
                        "type": "btn",
                        "name": "br5Panties6",
                        "left": 780,
                        "top": 851,
                        "width": 965,
                        "height": 217,
                        "image": "13_sisterRoom/br5Panties3.png "
                    }, 13);
                }
            }
            else {
                nav.killbutton("br5Panties2");
                nav.bg("13_sisterRoom/013_bedBr5pullUp.jpg");
                chat(85, 13);
            }
            break;
        case "br5Panties3":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_004.gif"
            }, 13);
            daily.set("lola");
            if (sc.getstep('lola') > 6)
                chat(72, 13);
            else {
                sc.setstep("lola", 7);
                chat(53, 13);
            }
            break;
        case "br5Panties6":
            nav.killbutton("br5Panties6");
            nav.button({
                "type": "btn",
                "name": "br5Panties7",
                "left": 1160,
                "top": 403,
                "width": 198,
                "height": 198,
                "image": "13_sisterRoom/br5Panties7.png"
            }, 13);
            break;
        case "br5Panties7":
            scc.love("lola", 10, 100);
            nav.bg("13_sisterRoom/013_bedBr7.jpg");
            nav.button({
                "type": "img",
                "name": "br5Panties7",
                "left": 815,
                "top": 236,
                "width": 889,
                "height": 844,
                "image": "13_sisterRoom/013_backrub_007.gif"
            }, 13);
            if (scc.get("lola").love > 50) {
                g.roomTimeout = setTimeout(function () {
                    chat(212, 13);
                }, 2000);
            }
            else {
                g.roomTimeout = setTimeout(function () {
                    daily.set("lola");
                    nav.killall();
                    nav.bg("13_sisterRoom/013_backrub_008.jpg");
                    chat(211, 13);
                }, 3000);
            }
            break;
        case "br11":
            nav.bg("13_sisterRoom/br11_" + g.internal + ".jpg");
            if (g.internal === 4) {
                nav.killall();
                chat(217, 13);
            }
            g.internal++;
            break;
        case "lick2Feet":
            nav.killall();
            nav.bg("13_sisterRoom/lick3.jpg");
            daily.set("eva");;
            chat(225, 13);
            break;
        case "lick2Pussy":
            nav.killall();
            nav.bg("13_sisterRoom/lick5.jpg");
            chat(228, 13);
            break;
        case "b0":
            nav.killbutton("b0");
            nav.button({
                "type": "btn",
                "name": "b1",
                "left": 981,
                "top": 418,
                "width": 497,
                "height": 471,
                "image": "13_sisterRoom/b1.png"
            }, 13);
            break;
        case "b1":
            nav.killbutton("b1");
            nav.button({
                "type": "btn",
                "name": "b2",
                "left": 946,
                "top": 580,
                "width": 481,
                "height": 309,
                "image": "13_sisterRoom/b2.png"
            }, 13);
            break;
        case "b2":
            nav.killbutton("b2");
            nav.button({
                "type": "btn",
                "name": "b3",
                "left": 979,
                "top": 656,
                "width": 447,
                "height": 233,
                "image": "13_sisterRoom/b3.png"
            }, 13);
            break;
        case "b3":
            nav.killbutton("b3");
            nav.button({
                "type": "btn",
                "name": "b4",
                "left": 1192,
                "top": 433,
                "width": 282,
                "height": 139,
                "image": "13_sisterRoom/b4.png"
            }, 13);
            break;
        case "b4":
            if (sc.getstep("eva") > 8 && sc.getstep("lola") > 9) {
                nav.killall();
                nav.bg("13_sisterRoom/b5.jpg");
                nav.button({
                    "type": "btn",
                    "name": "b5",
                    "left": 986,
                    "top": 93,
                    "width": 483,
                    "height": 883,
                    "image": "13_sisterRoom/b5.png"
                }, 13);
            }
            else {
                nav.killall();
                nav.bg("13_sisterRoom/zzz1.jpg");
                chat(63, 13);
            }
            break;
        case "b5":
            if (sc.getstep("eva") > 11 && sc.getstep("lola") > 12) {
                nav.killall();
                nav.bg("13_sisterRoom/b6.jpg");
                chat(246, 13);
            }
            else {
                nav.killall();
                nav.bg("13_sisterRoom/zzz2.jpg");
                chat(63, 13);
            }
            break;
        case "3some":
            if (g.internal === 9) {
                chat(252, 13);
                nav.killbutton("3some");
            }
            else {
                nav.bg("13_sisterRoom/3some" + g.internal + ".jpg");
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room13.chatcatch = function (callback) {
    switch (callback) {
        case "footrub":
            daily.set("eva");;
            nav.bg("13_sisterRoom/013_footrubLarge.gif");
            nav.killall();
            gv.mod("arousal", 30);
            sc.setstep("eva", 3);
            scc.love("eva", 5, 50);
            break;
        case "footrub1":
            daily.set("eva");;
            nav.bg("13_sisterRoom/013_footrubLarge.gif");
            nav.killall();
            gv.mod("arousal", 30);
            sc.setstep("eva", 4);
            break;
        case "sucktoes":
            nav.killbutton("footrub");
            nav.bg("13_sisterRoom/013_toeSuck.gif");
            g.internal = cl.c.shirt;
            cl.c.shirt = null;
            cl.display();
            gv.mod("arousal", 30);
            break;
        case "finishSuckToes":
            cl.c.shirt = g.internal;
            cl.display();
            sc.setstep('eva', 5);
            char.room(13);
            break;
        case "footjob1":
            cl.nude();
            nav.killall();
            nav.bg("13_sisterRoom/013_footjob1.jpg");
            break;
        case "footjob2":
            nav.bg("13_sisterRoom/013_footjob2.jpg");
            break;
        case "footjob3":
            nav.bg("13_sisterRoom/footjob3.gif");
            break;
        case "footjob4":
            cl.doCum(true);
            gv.mod("receiveFootjobFemale", 1);
            nav.bg("13_sisterRoom/013_footjob4.jpg");
            break;
        case "footjob5":
            sc.setstep("eva", 6);
            cl.undo();
            char.room(13);
            daily.set("eva");;
            char.addtime(30);
            break;
        case "footjob5.5":
            cl.undo();
            char.room(13);
            daily.set("eva");;
            char.addtime(30);
            break;
        case 'takePanties':
            levels.mod("xdress", 50, 2);
            cl.add("panties", "w");
            break;
        case "killPantyIcon":
            nav.killbutton("panties");
            break;
        case "killPantyIconx":
            nav.killbutton("panties");
            chat(86, 13);
            break;
        case "checkPanties":
            nav.bg("13_sisterRoom/013_angryCaught.png");
            break;
        case "kickOutRoom":
            scc.love("eva", -5, 100);
            scc.love("lola", -5, 100);
            char.room(11);
            break;
        case "pullDown":
            nav.killbutton("bed1");
            nav.killbutton("handReach");
            nav.button({
                "type": "img",
                "name": "sleepNaked",
                "left": 894,
                "top": 89,
                "width": 604,
                "height": 951,
                "image": "13_sisterRoom/13_sleeping.png"
            }, 13);
            break;
        case "LeaveKickOut":
            char.addtime(30);
            char.room(11);
            scc.love("eva", -5, 100);
            scc.love("lola", -5, 100);
            break;
        case "reset":
            char.room(13);
            break;
        case "resetlolalove":
            scc.love("lola", 5, 100);
            char.room(13);
            break;
        case "resetevalove":
            scc.love("eva", 5, 100);
            char.room(13);
            break;
        case "resetellove":
            scc.love("lola", 5, 100);
            scc.love("eva", 5, 100);
            char.room(13);
            break;
        case "tord":
            char.room(23);
            break;
        case "lolaDisgust":
            nav.button({
                "type": "btn",
                "name": "lola_laying1",
                "left": 1449,
                "top": 260,
                "width": 215,
                "height": 820,
                "image": "13_sisterRoom/13_lola_reading1.png"
            }, 13);
            break;
        case "lolaOrig":
            nav.killbutton("lola_laying1");
            break;
        case "getBook":
            sc.setstep("eva", 1);
            sc.setstep("lola", 1);
            break;
        case "br1":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 880,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_001.gif "
            }, 13);
            daily.set("lola");
            sc.setstep("lola", 2);
            scc.love("lola", 5, 50);
            gv.mod("arousal", 15);
            break;
        case "br2":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr.jpg");
            nav.button({
                "type": "btn",
                "name": "br2Shirt",
                "left": 880,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_001_5.gif"
            }, 13);
            daily.set("lola");
            gv.mod("arousal", 30);
            sc.setstep("lola", 3);
            break;
        case "br3":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 880,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_002.gif"
            }, 13);
            daily.set("lola");
            gv.mod("arousal", 45);
            scc.love("lola", 5, 50);
            sc.setstep("lola", 4);
            break;
        case "br4":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_003.gif"
            }, 13);
            daily.set("lola");
            sc.setstep("lola", 6);
            break;
        case "br4.5":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_003.gif"
            }, 13);
            daily.set("lola");
            break;
        case "br5":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr5.jpg");
            nav.button({
                "type": "btn",
                "name": "br5Panties1",
                "left": 805,
                "top": 335,
                "width": 881,
                "height": 320,
                "image": "13_sisterRoom/bedBr5Panties1.png "
            }, 13);
            break;
        case "br8":
            nav.modbutton("br5Panties7", "13_sisterRoom/013_backrub_008.gif");
            if (scc.get("lola").love < 75) {
                g.setTimeout = setTimeout(function () {
                    nav.killall();
                    nav.bg("13_sisterRoom/013_backrub_008.jpg");
                    chat(211, 13);
                }, 3000);
            }
            else
                g.setTimeout = setTimeout(function () {
                    chat(213, 13);
                }, 3000);
                
            break;
        case "br9":
            nav.killall();
            nav.bg("13_sisterRoom/br9.jpg");
            break;
        case "br10":
            nav.bg("13_sisterRoom/br10.jpg");
            break;
        case "br9Bad":
            scc.love("lola", -25, 100);
            scc.love("eva", -15, 100);
            daily.set("lola");
            daily.set("eva");;
            char.addtime(60);
            char.room(11);
            break;
        case "br11":
            g.internal = 2;
            nav.bg("13_sisterRoom/br11.jpg");
            nav.button({
                "type": "tongue",
                "name": "br11",
                "left": 923,
                "top": 561,
                "width": 370,
                "height": 370,
                "image": "13_sisterRoom/br11.png"
            }, 13);
            break;
        case "br12":
            nav.bg("13_sisterRoom/room.jpg", "13_sisterRoom/roomNight.jpg");
            btnListxx = [{
                "type": "btn",
                "name": "lola",
                "left": 1449,
                "top": 260,
                "width": 215,
                "height": 820,
                "image": "13_sisterRoom/br12.png"
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
            $.each(btnListxx, function (i, v) {
                nav.button(v, 13);
            });
            nav.buildnav([11]);
            break; 
        case "spinTheBottle":
            char.room(24);
            break;
        case "buttRubPantiesOn":
            nav.killall();
            scc.love("lola", 5, 100);
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_004.gif"
            }, 13);
            daily.set("lola");
            if (sc.getstep('lola') > 6)
                chat(72, 13);
            else {
                sc.setstep("lola", 7);
                chat(53, 13);
            }
            break;
        case "hide":
            nav.killall();
            nav.bg("13_sisterRoom/floor.jpg");
            break;
        case "hide1":
            nav.bg("13_sisterRoom/floor1.jpg");
            break;
        case "hide2":
            nav.bg("13_sisterRoom/floor2.jpg");
            break;
        case "hide3":
            nav.bg("13_sisterRoom/floor3.jpg");
            break;
        case "hide4":
            gv.mod("arousal", 40);
            nav.bg("13_sisterRoom/floor4.jpg");
            break;
        case "hide5":
            nav.bg("13_sisterRoom/room.jpg");
            break;
        case "hide6":
            char.addtime(360);
            char.room(10);
            break;
        case "peek1":
            nav.bg("13_sisterRoom/peek1.jpg");
            break;
        case "peek2":
            nav.bg("13_sisterRoom/peek2.jpg");
            break;
        case "peek3":
            nav.bg("13_sisterRoom/peek3.jpg");
            break;
        case "peek4":
            cl.add("panties", "w");
            g.internal = "room10pass";
            char.addtime(30);
            char.room(10);
            break;
        case "sniff1":
            nav.bg("13_sisterRoom/sniff1.jpg");
            break;
        case "sniff2":
            if (cl.c.chastity !== null)
                chat(107, 13);
            else {
                if (cl.c.cock > 1)
                    nav.bg("13_sisterRoom/sniff2a.jpg");
                else
                    nav.bg("13_sisterRoom/sniff2.jpg");
                chat(108, 13);
            }
            gv.set("lockdrawer", true);
            break;
        case "welcome2":
            nav.killbutton("welcomeGirls");
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 1449,
                "top": 260,
                "width": 215,
                "height": 820,
                "image": "13_sisterRoom/13_lola_reading.png"
            }, 13);
            nav.button({
                "type": "img",
                "name": "eva",
                "left": 760,
                "top": 295,
                "width": 291,
                "height": 785,
                "image": "13_sisterRoom/13_eva_sitting.png"
            }, 13);

            if (cl.appearanceBody > 1)
                chat(115, 13);
            else if (cl.isCrossdressing())
                chat(117, 13);
            else
                chat(119, 13);

            break;
        case "motherMother":
            nav.button({
                "type": "img",
                "name": "m",
                "left": 1093,
                "top": 175,
                "width": 321,
                "height": 905,
                "image": "13_sisterRoom/m.png"
            }, 13);

            break;
        case "end9":
            char.addtime(60);
            sc.setstep("lola", 10);
            sc.setstep("eva", 9);
            char.room(13);
            break;
        case "evachangeText":
            room13.btnclick("evaChat");
            break;
        case "lolachangeText":
            room13.btnclick("lolaChat");
            break;
        case "angry10":
            scc.love("eva", -10, 100);
            scc.love("lola", -10, 100);
            break;
        case "lhate":
            scc.love("lola", -2, 100);
            break;
        case "ehate":
            scc.love("eva", -2, 100);
            break;
        case "love10":
            scc.love("eva", 10, 100);
            scc.love("lola", 10, 100);
            break;
        case "9present":
            nav.modbutton("eva", "13_sisterRoom/13_eva_sittingt.png", null, null);
            nav.modbutton("lola", "13_sisterRoom/13_lola_readingt.png", null, null);
            break;
        case "9presentx":
            daily.set("lola");
            scc.love("lola", 5, 75);
            scc.love("eva", 5, 75);
            char.addtime(60); 
            char.room(29);
            break;
        case "200_1":
            nav.killall();
            nav.bg("13_sisterRoom/200_1.jpg");
            break;
        case "200_2":
            nav.bg("13_sisterRoom/200_2.jpg");
            break;
        case "200_3":
            nav.bg("13_sisterRoom/200_3.jpg");
            zcl.displayMain(-100, 500, .28, "clothes", true);
            break;
        case "200_4":
            cl.nude();
            zcl.displayMain(-100, 500, .28, "", true);
            if (cl.c.chastity !== null)
                chat(155, 13);
            else if (cl.c.cock > 2)
                chat(160, 13);
            else
                chat(162, 13);
            break;
        case "200_5":
            nav.bg("13_sisterRoom/200_5.jpg");
            break;
        case "200_6":
            cl.c.panties = "m";
            cl.c.bra = "l";
            cl.display();
            zcl.displayMain(-100, 500, .28, "clothes", true);
            g.roomTimeout = setTimeout(function () { chat(167, 13); }, 2000);
            break;
        case "200_7":
            zcl.displayMain(-100, 500, .28, "clothes", false);
            g.roomTimeout = setTimeout(function () { chat(169, 13); }, 2000);
            break;
        case "200_8":
            zcl.displayMain(-100, 500, .28, "clothes", true);
            break;
        case "200_9":
            cl.add("panties", "m");
            cl.add("bra", "l");
            sc.setstep("eva", 201);
            sc.setstep("lola", 201);
            daily.set("lola");
            daily.set("eva");;
            char.room(10);
            break;
        case "sleep":
            g.pass = 13;
            char.room(28);
            break;
        case "returnRoom10":
            char.room(10);
            break;
        case "201_1":
            nav.killall();
            char.changeMenu("hide", false, true);
            nav.bg("13_sisterRoom/201_1.jpg");
            break;
        case "201_2":
            var mollybad = sc.getEvent("holly", -1);
            nav.button({
                "type": "img",
                "name": "molly",
                "left": 1214,
                "top": 0,
                "width": 706,
                "height": 1080,
                "image": "13_sisterRoom/201_2" + (mollybad ? "b" : "a") + ".png"
            }, 13);
            if (mollybad)
                chat(182, 13);
            else
                chat(189, 13);
            break;
        case "201_1c":
            nav.modbutton("molly", "13_sisterRoom/201_2c.png", null, null);
            break;
        case "201_1d":
            sc.setstep("lola", 202);
            sc.setstep("eva", 202);
            scc.love("lola", -10, 100);
            scc.love("eva", -10, 100);
            daily.set("lola");
            daily.set("eva");;
            char.addtime(45);
            char.room(0);
            break;
        case "201_3":
            if (sc.getstep("holly") > 2)
                chat(191, 13);
            else {
                if (gv.get("money") > 29)
                    chat(192, 13);
                else
                    chat(193, 13);
            }
            break;
        case "201_4a":
            nav.killall();
            nav.bg("13_sisterRoom/201_4.jpg");
            scc.love("lola", 10, 100);
            scc.love("eva", 10, 100);
            break;
        case "201_4b":
            nav.killall();
            nav.bg("13_sisterRoom/201_4.jpg");
            gv.mod("money", -30);
            scc.love("lola", 10, 100);
            scc.love("eva", 10, 100);
            break;
        case "201_4c":
            nav.killall();
            nav.bg("13_sisterRoom/201_4.jpg");
            scc.love("lola", -5, 100);
            scc.love("eva", -5, 100);
            break;
        case "201_4":
            nav.killall();
            nav.bg("13_sisterRoom/201_4.jpg");
            break;
        case "201_5":
            nav.bg("13_sisterRoom/201_5.jpg");
            break;
        case "201_6":
            nav.bg("13_sisterRoom/201_6.jpg");
            break;
        case "201_6a":
            scc.love("jones", 10, 100);
            scc.love("lola", -5, 100);
            scc.love("eva", -5, 100);
            gv.mod("phum", 1);
            nav.bg("13_sisterRoom/201_6a.jpg");
            break;
        case "201_7":
            sc.setstep("lola", 202);
            sc.setstep("eva", 202);
            char.addtime(127);
            daily.set("lola");
            daily.set("eva");;
            char.room(0);
            break;
        case "201_6b":
            scc.love("jones", -10, 100);
            scc.love("lola", 5, 100);
            nav.bg("13_sisterRoom/201_6a.jpg");
            break;
        case "lick1":
            var lickLove = scc.get("eva").love;
            if (lickLove < 25) {
                nav.killall();
                nav.bg("13_sisterRoom/013_toeSuck.gif");
                g.roomTimeout = setTimeout(function () {
                    scc.love("eva", 5, 100);
                    daily.set("eva");;
                    chat(222, 13);
                }, 3000);
            }
            else {
                nav.modbutton("eva", "13_sisterRoom/evalick1.png", null, null);
                chat(223, 13);
            }
            break;
        case "lick2":
            nav.killall();
            
            nav.bg("13_sisterRoom/lick2.jpg");
            nav.button({
                "type": "tongue",
                "name": "lick2Feet",
                "left": 1018,
                "top": 162,
                "width": 650,
                "height": 710,
                "image": "13_sisterRoom/lick2Feet.png"
            }, 13);
            nav.button({
                "type": "kiss",
                "name": "lick2Pussy",
                "left": 1137,
                "top": 873,
                "width": 213,
                "height": 199,
                "image": "13_sisterRoom/lick2Pussy.png"
            }, 13);
            setTimeout(function () {
                $("#room_footer").hide();
            }, 1000 );
            setTimeout(function () {
                $("#room_footer").hide();
            }, 2000);
            break;
        case "lick4":
            nav.bg("13_sisterRoom/room.jpg", "13_sisterRoom/roomNight.jpg");
            btnListxx = [{
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
                "left": 570,
                "top": 103,
                "width": 596,
                "height": 977,
                "image": "13_sisterRoom/lick4.png"
            }];
            $.each(btnListxx, function (i, v) {
                nav.button(v, 13);
            });
            nav.buildnav([11]);
            break;
        case "lick6":
            nav.bg("13_sisterRoom/room.jpg", "13_sisterRoom/roomNight.jpg");
            btnListxx = [{
                "type": "img",
                "name": "eva",
                "left": 930,
                "top": 278,
                "width": 233,
                "height": 802,
                "image": "13_sisterRoom/lick6.png"
            },
            {
                "type": "img",
                "name": "lola",
                "left": 1449,
                "top": 260,
                "width": 215,
                "height": 820,
                "image": "13_sisterRoom/13_lola_reading.png"
            }];
            $.each(btnListxx, function (i, v) {
                nav.button(v, 13);
            });
            nav.buildnav([11]);
            break;
        case "lick7":
            zcl.displayMain(200, 600, .16, "", true);
            break;
        case "lick8":
            nav.killall();
            nav.bg("13_sisterRoom/lick8.jpg");
            break;
        case "lick9":
            nav.bg("13_sisterRoom/lick9.jpg");
            scc.love("eva", 5, 100);
            break;
        case "lick10":
            nav.bg("13_sisterRoom/lick10.jpg");
            scc.love("eva", 5, 100);
            break;
        case "lick11":
            nav.bg("13_sisterRoom/lick11.jpg");
            scc.love("eva", 5, 100);
            break;
        case "lick12":
            var evaLove = 50 - scc.get("eva").love;
            nav.bg("13_sisterRoom/lick12.jpg");
            if (evaLove > 0)
                scc.love("eva", evaLove, 100);
            
            sc.setstep("eva", 203);
            daily.set("eva");;
            break;
        case "leave":
            char.addtime(30);
            char.room(11);
            break;
        case "b7":
            nav.bg("13_sisterRoom/b7.jpg");
            break;
        case "b8":
            cl.doCum(false);
            nav.bg("13_sisterRoom/b8.jpg");
            break;
        case "3some1":
            char.changeMenu("hide", false, false);
            nav.killall();
            nav.bg("13_sisterRoom/3some1.jpg");
            g.internal = 2;
            nav.button({
                "type": "btn",
                "name": "3some",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 13);
            
            break;
        case "3someEnd":
            scc.love("eva", 200, 100);
            scc.love("lola", 200, 100);
            gv.mod("fuckPussy", 2);
            char.addtime(120);
            daily.set("lola");
            daily.set("eva");;
            char.room(10);
            break;
        default:
            console.log(callback + " - miss");
            break;
    }
};

room13.showChatBox = function () {
    $('.room-chatBox').show();
};

room13.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "So many panties...",
            button: [
                { chatID: 106, text: "Sniff " + sc.n("eva") + "'s and " + sc.n("lola") + "'s panties", callback: "sniff1" },
                { chatID: -1, text: "Close the drawer.", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "lola",
            text: sc.n("me") + "!!!! what are your doing. Are you going through our panties!!!",
            button: [
                { chatID: 2, text: "....", callback: "angry10" }
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
                { chatID: -1, text: "[Leave]", callback: "kickOutRoom" }
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
                { chatID: 7, text: "yea... ", callback: "takePanties" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "[Panties added to Inventory]",
            button: [
                { chatID: -1, text: "...", callback: "killPantyIconx" }
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
            speaker: "eva",
            text: "So I have to get a new basic math textbook and it's soooo expensive. Can i use yours since you're not " +
                "using it?",
            button: [
                { chatID: 10, text: "Of course, stop by my room anytime and pick it up", callback: "getBook" },
                { chatID: -1, text: "Get your own book bologna brain", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "eva",
            text: "You're the best, I don't care what they say about you in the boy's locker room.",
            button: [
                { chatID: -1, text: "Better than what they say about you!!", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "I think " + sc.n("eva") + " needs to borrow your math book. ",
            button: [
                { chatID: -1, text: "Oh, she always wants something for free. ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "lola",
            text: "Hey " + sc.n("me") + ". I'm sorry you got fired from the Burger Joint. That manager always so mean. You're " +
                "better off without that stupid job!",
            button: [
                { chatID: 13, text: "Thanks " + sc.n("lola") + ". So how's the first day of college?", callback: "lolaDisgust" }
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "A little hectic and scary. I accidentally went to the wrong classroom and I was midway through the lecture before I " +
                "figured it out. On my way out I tripped over some boys bag and the entire classroom started laughing at me!",
            button: [
                { chatID: 14, text: "oh no..", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "lola",
            text: "And to make it worse when I got to the right classroom the teacher scolded me for 10 minutes for being late. She " +
                "didn't even let me explain why! ",
            button: [
                { chatID: 15, text: "That's terrible! I'm sure tomorrow will be better.", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "I hope so. There's no way I'm going back to school if everyday is like this. I dont' suppose you would be " +
                "up to give me a back rub so I feel better?",
            button: [
                { chatID: 16, text: "Of course!", callback: "br1" },
                { chatID: -1, text: "Nope", callback: "lolaOrig" }
            ]
        },
        {
            chatID: 16,
            speaker: "lola",
            text: "MMMmmmmm that feels soooo good " + sc.n("me") + ". Thank you.",
            button: [
                { chatID: -1, text: "You're welcome", callback: "reset" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "Thank you sooo much! Maybe we can talk tomorrow! ",
            button: [
                { chatID: -1, text: "You're welcome " + sc.n("lola"), callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: "I'll stop by in the morning to pick up the text book",
            button: [
                { chatID: -1, text: "....", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "eva",
            text: "You're welcome you foot fetish weirdo.",
            button: [
                { chatID: -1, text: "I uh....", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "lola",
            text: sc.n("me") + " I could really go for a back rub, if you don't mind.",
            button: [
                { chatID: 21, text: "I'd love to", callback: "br1" },
                { chatID: -1, text: "Naw.. got stuff to do", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Do you mind if I lift up your shirt and undo your bra strap? It's a much better back rub.",
            button: [
                { chatID: 22, text: "....", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "Oh..... I guess, if you promise not to do anything bad. ",
            button: [
                { chatID: 16, text: "I promise", callback: "br2" }
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "Hey loser. ",
            button: [
                { chatID: 25, text: "Hey butt-head", callback: "" },
                { chatID: 24, text: "That's not nice", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "eva",
            text: "Grow a pair sissy boy and rub my feet!",
            button: [
                { chatID: 26, text: "Sure!", callback: "footrub" },
                { chatID: -1, text: "I'm not touching those smelly things", callback: "ehate" }
            ]
        },
        {
            chatID: 25,
            speaker: "eva",
            text: "Hey why don't you make yourself useful and rub my feet. ",
            button: [
                { chatID: 26, text: "Sure!", callback: "footrub" },
                { chatID: -1, text: "I'm not touching those smelly things", callback: "ehate" }
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "If this didn't feel so good there's no way I would let you near my feet you pervert.",
            button: [
                { chatID: 27, text: "I'm not a pervert. I'm just giving you a foot rub.", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "eva",
            text: "Ok butt sniffer. My feet feel great, you're done.. for now.",
            button: [
                { chatID: -1, text: "Haha ok. [Finish]", callback: "resetevalove" }
            ]
        },
        {
            chatID: 28,
            speaker: "lola",
            text: "You were sooo right about a back rub being better without a shirt in the way. Is it ok if you " +
                "give me a back rub without my shirt on?",
            button: [
                { chatID: 29, text: "Of course", callback: "br3" },
                { chatID: -1, text: "No, I'm pretty busy right now", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "You really are the best " + sc.n("me") + "! That was absolutley wonderful",
            button: [
                { chatID: -1, text: "Awwww, you're wonderful", callback: "reset" }
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "I feel guilty about getting so many back rubs. You should give some attention to " + sc.n("eva"),
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "eva",
            text: "Ok you pervert, how about you pay attention to " + sc.n('lola') + " for a bit.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "lola",
            text: "You know, I'm feel like getting a little wild, " + sc.n("me") + " could you get us some wine? ",
            button: [
                { chatID: 33, text: "...", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "eva",
            text: "Oh Yea!!! You should totally get us some wine and stop by at night! It's going to be awesome!!",
            button: [
                { chatID: -1, text: "Ok", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "eva",
            text: "Awesome, you have the wine! " + sc.n('lola') + " you want to drink?",
            button: [
                { chatID: 35, text: "...", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "lola",
            text: "It's far too early to drink, I have too much to do. " + sc.n("me") + " how about you come back after " +
                "5:00 PM and we can have some fun!",
            button: [
                { chatID: -1, text: "Ok, I'll come back after 5:00 PM", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "lola",
            text: "Oh good, you brought the wine! I'm so excited. ",
            button: [
                { chatID: 37, text: "....", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "eva",
            text: "Oh yea! crack that bottle open so we can get some! ",
            button: [
                { chatID: 38, text: "....", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "lola",
            text: "Slow down " + sc.n("eva") + ". How about we play a game? How about spin the bottle? I've always wanted to play, but no one's ever " +
                "invited me to play with them.",
            button: [
                { chatID: 39, text: "Sounds like fun, are you in " + sc.n("eva") + "?", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "eva",
            text: "I'm in, but no cheating your dirty pervert!",
            button: [
                { chatID: -1, text: "Whaaa I would never cheat", callback: "spinTheBottle" }
            ]
        },
        {
            chatID: 40,
            speaker: "lola",
            text: "My legs are pretty sore from swimming. Would you mind rubbing those instead of my back? " +
                "It would mean so much to me.",
            button: [
                { chatID: 41, text: "Sure, It may be pretty hard to give a good let rub with your skirt on.", callback: "" },
                { chatID: -1, text: "Sorry, I've got stuff to do.", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "lola",
            text: "Oh. I suppose you're right. You don't mind seeing me in just my panties do you?",
            button: [
                { chatID: 16, text: "I will be fine. I'll give you a great leg massage. [Give Massage]", callback: "br4" }
            ]
        },
        {
            chatID: 42,
            speaker: "eva",
            text: "How about a foot rub, and if you do a good job I have a perverted reward for you.",
            button: [
                { chatID: 44, text: "I like perverted rewards", callback: "footrub1" },
                { chatID: -1, text: "No, I've gotta run", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "me",
            text: "no op - skip number",
            button: []
        },
        {
            chatID: 44,
            speaker: "eva",
            text: "I can tell you've been working out, if you take off your shirt and show me your bod I'll let you suck my toes.",
            button: [
                { chatID: 45, text: "uhhh what?", callback: "" }
            ]
        },
        {
            chatID: 45,
            speaker: "eva",
            text: "I've always wanted to see what it's like to get my toes sucked. If you take off your shirt I'll let " +
                "you suck them. I know a pervert like you wants to taste my toes",
            button: [
                { chatID: 46, text: "Don't you think it will be weird to suck your toes in from of " + sc.n('lola'), callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "lola",
            text: "You're fine. The thing about " + sc.n('el') + " is that they see all the weird stuff each other do. ",
            button: [
                { chatID: 48, text: "Ok " + sc.n('eva') + " I'll do it [Take off shirt]", callback: "sucktoes" }
            ]
        },
        {
            chatID: 47,
            speaker: "me",
            text: "no op",
            button: []
        },
        {
            chatID: 48,
            speaker: "eva",
            text: "Hahaha that feels weird.... Stop peeking at my panties you big freak. ",
            button: [
                { chatID: -1, text: "[Finish sucking her toes]", callback: "finishSuckToes" }
            ]
        },
        {
            chatID: 49,
            speaker: "lola",
            text: "Since you are such a gentleman, and a great masseuse, do you mind rubbing my legs again? Please... ",
            button: [
                { chatID: 50, text: "Of course", callback: "br4" },
                { chatID: -1, text: "Sorry " + sc.n('lola') + ", got stuff to do", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "lola",
            text: "MMmmmm you are just so amazing. I pulled my butt muscle the other day, but I've been too embarrassed " +
                "to ask you to massage it. Could you rub it for me?",
            button: [
                { chatID: 51, text: "Yes, but I think your panties will be in the way, can I take them off to give you a better massage?", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "lola",
            text: "I think that will be ok. " + sc.n('eva') + ", you don't mind if I take off my panties to do you?",
            button: [
                { chatID: 52, text: "...", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "eva",
            text: "Hahaha, you try and act so proper when other people are around. Just take your panties off. ",
            button: [
                { chatID: -1, text: "I'll help you with those " + sc.n('lola'), callback: "br5" }
            ]
        },
        {
            chatID: 53,
            speaker: "lola",
            text: "You really are the best, thanks for being a gentleman. ",
            button: [
                { chatID: -1, text: "[Finish the butt massage]", callback: "reset" }
            ]
        },
        {
            chatID: 54,
            speaker: "eva",
            text: "So freak, me and " + sc.n('lola') + " have been talking, and since you've been so nice to " +
                "us I'm going to give you a perverts reward. ",
            button: [
                { chatID: 55, text: "A reward?", callback: "" },
                { chatID: -1, text: "Thanks, but I have stuff to do", callback: "" }
            ]
        },
        {
            chatID: 55,
            speaker: "lola",
            text: "Yeah, you've been so nice, we thought you deserve a little something extra.",
            button: [
                { chatID: 56, text: "...", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "eva",
            text: "So here's the deal, we're not going to have sex with you, or put your penis in our mouths, but I know " +
                "how much guys like to come, so I'm willing to rub it with my feet.",
            button: [
                { chatID: 57, text: "Huh? Like a foot job?", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "eva",
            text: "Yeah dummy. So if you want one take off your clothes and sit down.",
            button: [
                { chatID: 58, text: "Oh! OK [Take off clothes]", callback: "footjob1" }
            ]
        },
        {
            chatID: 58,
            speaker: "eva",
            text: "So this is what your dick looks like. Not bad, you should be proud of yourself. I've seen " +
                "bigger, but not very many. Are you ready?",
            button: [
                { chatID: 59, text: "So very ready", callback: "footjob2" }
            ]
        },
        {
            chatID: 59,
            speaker: "eva",
            text: "Whatever you do, just don't cum on me; I've already taken a shower.",
            button: [
                { chatID: 60, text: "I promise", callback: "footjob3" }
            ]
        },
        {
            chatID: 60,
            speaker: "me",
            text: "oooOOooohh mmmMMMMmmmmmmmmmmmm",
            button: [
                { chatID: 61, text: "[Cum]", callback: "footjob4" }
            ]
        },
        {
            chatID: 61,
            speaker: "eva",
            text: "Oh gross!!! You said you wouldn't get any one me! Blech",
            button: [
                { chatID: 62, text: "Oh my bad, I can't control that thing", callback: "" }
            ]
        },
        {
            chatID: 62,
            speaker: "eva",
            text: "Just put your clothes back on while I wipe up my feet you dirty pervert",
            button: [
                { chatID: -1, text: "Oh yea.", callback: "footjob5" }
            ]
        },
        {
            chatID: 63,
            speaker: "lola",
            text: "AAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaa",
            button: [
                { chatID: 83, text: "....", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "eva",
            text: "Did you want me to rub your wiener with my feet again pervert?",
            button: [
                { chatID: 65, text: "Oh yes!", callback: "" },
                { chatID: -1, text: "No, gotta run", callback: "" }
            ]
        },
        {
            chatID: 65,
            speaker: "eva",
            text: "Ok, strip",
            button: [
                { chatID: 66, text: "[Remove all your clothes]", callback: "footjob1" }
            ]
        },
        {
            chatID: 66,
            speaker: "eva",
            text: "Squishy Squishy",
            button: [
                { chatID: 67, text: "...", callback: "footjob2" }
            ]
        },
        {
            chatID: 67,
            speaker: "eva",
            text: "You have the dumbest perverted look in your eyes.",
            button: [
                { chatID: 68, text: "...", callback: "footjob3" }
            ]
        },
        {
            chatID: 68,
            speaker: "eva",
            text: "Oh yeah cum for me you sick twisted panty sniffer!",
            button: [
                { chatID: 69, text: "...", callback: "footjob4" }
            ]
        },
        {
            chatID: 69,
            speaker: "eva",
            text: "I don't really mind having your cum cover my feet. I'm starting to get used to it. I just rub it into my skin " +
                "and it disappears. ",
            button: [
                { chatID: -1, text: "...", callback: "footjob5.5" }
            ]
        },
        {
            chatID: 70,
            speaker: "lola",
            text: "Hi " + sc.n("me") + ". I hate to ask, but could you massage my glutes again? " + sc.n("eva") + " said " +
                "she was too busy playing on her phone. ",
            button: [
                { chatID: 71, text: "Anything for you.", callback: "br4.5" },
                { chatID: -11, text: "Sorry, far too busy!", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "lola",
            text: "You can take my panties off, it feels so much better with a skin to skin massage.",
            button: [
                { chatID: -1, text: "[Remove " + sc.n('lola') + "'s panties]", callback: "br5" }
            ]
        },
        {
            chatID: 72,
            speaker: "lola",
            text: "You really know how to work a butt!",
            button: [
                { chatID: -1, text: "You bet I do", callback: "reset" }
            ]
        },
        {
            chatID: 73,
            speaker: "eva",
            text:  sc.n('lola') + " and I have a game we've always wanted to play with a boy, you should come back tonight!",
            button: [
                { chatID: -1, text: "Sounds awesome, see you tonight", callback: "" }
            ]
        },
        {
            chatID: 74,
            speaker: "lola",
            text: "We're so excited to play truth or dare with a boy! Come back tonight so we can play!",
            button: [
                { chatID: -1, text: "Sounds awesome, see you tonight", callback: "" }
            ]
        },
        {
            chatID: 75,
            speaker: "eva",
            text: "Hey weird-o, me and " + sc.n("lola") + " wanted to play truth or dare. Are you down for a game?",
            button: [
                { chatID: 76, text: "Oh course!!!", callback: "" },
                { chatID: -1, text: "I'm pretty busy, some other time maybe. ", callback: "" }
            ]
        },
        {
            chatID: 76,
            speaker: "lola",
            text: "Oh good! Let's play!",
            button: [
                { chatID: -1, text: "[Play truth or dare]", callback: "tord" }
            ]
        },
        {
            chatID: 77,
            speaker: "eva",
            text: "Hahaha you will once you see how dirty " + sc.n('lola') + "'s panties get after she works out! All those " +
                "muscle guys in the gym really make her leak!",
            button: [
                { chatID: 78, text: "...", callback: "" }
            ]
        },
        {
            chatID: 78,
            speaker: "lola",
            text: sc.n("eva") + "! I do not leak!",
            button: [
                { chatID: 79, text: "...", callback: "" }
            ]
        },
        {
            chatID: 79,
            speaker: "eva",
            text: "Hahaha, sometimes she pees a little too! ",
            button: [
                { chatID: 80, text: "...", callback: "" }
            ]
        },
        {
            chatID: 80,
            speaker: "lola",
            text: "It's perfectly normal to pee a little sometimes! Besides it's always just a tiny squirt!",
            button: [
                { chatID: 81, text: "...", callback: "" }
            ]
        },
        {
            chatID: 81,
            speaker: "eva",
            text: "We've been looking for a while, why don't we just play some truth or dare then look for them after?",
            button: [
                { chatID: 82, text: "...", callback: "" }
            ]
        },
        {
            chatID: 82,
            speaker: "lola",
            text: "Ok, let play, I'm sure they'll turn up!",
            button: [
                { chatID: -1, text: "[Play Truth or Dare]", callback: "tord" }
            ]
        },
        {
            chatID: 83,
            speaker: "eva",
            text: "What the hell you pervert!!!! ",
            button: [
                { chatID: 84, text: "I uh wha.... uh", callback: "" }
            ]
        },
        {
            chatID: 84,
            speaker: "eva",
            text: "GET OUT, GET OUT, GET OUT, GET OUT, GET OUT GET OUT!!!",
            button: [
                { chatID: -1, text: "Oh yea.... [Leave]", callback: "LeaveKickOut" }
            ]
        },
        {
            chatID: 85,
            speaker: "lola",
            text: "On second thought, maybe these should stay on. I don't want you to get the wrong idea about me. ",
            button: [
                { chatID: -1, text: "Oh sure", callback: "buttRubPantiesOn" }
            ]
        },
        {
            chatID: 86,
            speaker: "me",
            text: "Oh crap I hear them at the door!",
            button: [
                { chatID: 87, text: "HIDE UNDER THE BED!!!", callback: "hide" }
            ]
        },
        {
            chatID: 87,
            speaker: "lola",
            text: "OMG " + sc.n("eva") + " you we're awesome! I don't think I've ever cum that hard before. ",
            button: [
                { chatID: 88, text: "I can hear them talking", callback: "" }
            ]
        },
        {
            chatID: 88,
            speaker: "eva",
            text: "No one has better tongue action than me! I can still taste you in my mouth... MMMmmMMmmmmmm",
            button: [
                { chatID: 89, text: "Huh...", callback: "hide1" }
            ]
        },
        {
            chatID: 89,
            speaker: "lola",
            text: "I'm still so turned on.. You know I do owe you one..",
            button: [
                { chatID: 90, text: "...", callback: "hide2" }
            ]
        },
        {
            chatID: 90,
            speaker: "eva",
            text: "I've got something better. Use this vibrator on my clit, maybe finger my butt-hole?",
            button: [
                { chatID: 91, text: "Is that the sounds of a vibrator I hear?", callback: "hide3" }
            ]
        },
        {
            chatID: 91,
            speaker: "lola",
            text: "I love that. ....Oh hahah whoops, I dropped it. ",
            button: [
                { chatID: 92, text: "Crap! Don't look under the bed, don't look under the bed", callback: "hide4" }
            ]
        },
        {
            chatID: 92,
            speaker: "eva",
            text: "I got it. Now how about you use it on me!",
            button: [
                { chatID: 93, text: "....", callback: "hide" }
            ]
        },
        {
            chatID: 93,
            speaker: "lola",
            text: "How's my finger, it's so warm. I'm glad you're just so naturally clean. Hehehe I can feel it vibrate all the way through " +
            "you're pussy. ",
            button: [
                { chatID: 94, text: "....", callback: "" }
            ]
        },
        {
            chatID: 94,
            speaker: "eva",
            text: "OOOoooOOOooooohhh yyyyyyeeesssssssssssss",
            button: [
                { chatID: 95, text: "....", callback: "" }
            ]
        },
        {
            chatID: 95,
            speaker: "lola",
            text: "**lick** MMmmMMM **lick** mmMMMMMMMMmmmmmmmmm",
            button: [
                { chatID: 96, text: "Don't peek", callback: "" },
                { chatID: 99, text: "Take a peek", callback: "peek1" }
            ]
        },
        {
            chatID: 96,
            speaker: "eva",
            text: "ooOOooohhh OOOooooooooooooooooohhh fuck! I'm cumming, can you feel my pussy tighten around your tongue? Fuck you are good!",
            button: [
                { chatID: 97, text: "...", callback: "" }
            ]
        },
        {
            chatID: 97,
            speaker: "eva",
            text: "That was fun! Lets get dressed and get out of here.",
            button: [
                { chatID: 98, text: "Thank god", callback: "hide5" }
            ]
        },
        {
            chatID: 98,
            speaker: "me",
            text: "Oh good they're gone. I've got to get out of here!",
            button: [
                { chatID: -1, text: "...", callback: "hide6" }
            ]
        },
        {
            chatID: 99,
            speaker: "eva",
            text: "ooOOooohhh OOOooooooooooooooooohhh fuuuuuuuck! I'm cumming!",
            button: [
                { chatID: 100, text: "...", callback: "peek2" }
            ]
        },
        {
            chatID: 100,
            speaker: "lola",
            text: sc.n("me") + "!!! What the hell!",
            button: [
                { chatID: 101, text: "ahh crap...", callback: "peek3" }
            ]
        },
        {
            chatID: 101,
            speaker: "eva",
            text: sc.n("me") + "!!! Way to ruin an orgasm! ",
            button: [
                { chatID: 102, text: "...", callback: "" }
            ]
        },
        {
            chatID: 102,
            speaker: "lola",
            text: "Why are you hiding under our bed! That's so rude ",
            button: [
                { chatID: 103, text: "oh.. uh um", callback: "" }
            ]
        },
        {
            chatID: 103,
            speaker: "eva",
            text: "He was hiding there to perv on us",
            button: [
                { chatID: 104, text: "well", callback: "" }
            ]
        },
        {
            chatID: 104,
            speaker: "lola",
            text: "Oh my. That's so rude.",
            button: [
                { chatID: 105, text: "yea", callback: "" }
            ]
        },
        {
            chatID: 105,
            speaker: "eva",
            text: "Don't worry " + sc.n("lola") + " I have a plan. " + sc.n("me") + " you go wait in your room while we get dressed. " +
            "You better do it or we'll tell " + sc.n("landlord") + ".",
            button: [
                { chatID: -1, text: "sigh, ok", callback: "peek4" }
            ]
        },
        {
            chatID: 106,
            speaker: "me",
            text: "These panties smell just like " + sc.n("lola") + ", maybe I could just jack off really quick.",
            button: [
                { chatID: -1, text: "...", callback: "sniff2" }
            ]
        },
        {
            chatID: 107,
            speaker: "me",
            text: "Oh yeah... I'm totally wearing my chastity cage. ",
            button: [
                { chatID: 1, text: "...", callback: "checkPanties" }
            ]
        },
        {
            chatID: 108,
            speaker: "me",
            text: "I'm totally going to jack off with these panties and cum all in them.",
            button: [
                { chatID: 1, text: "...", callback: "checkPanties" }
            ]
        },
        {
            chatID: 109,
            speaker: "me",
            text: "Dammit! They locked their panty drawer. Try to jack off into their panties once and you're locked out forever.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 110,
            speaker: "eva",
            text: sc.n("me") + "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
            button: [
                { chatID: 111, text: sc.n("eva") + "!!!!", callback: "" }
            ]
        },
        {
            chatID: 111,
            speaker: "lola",
            text: "WE TOTALLY MISSED YOU SOOOOOO MUCH!!!!!!!!!!!!!!!!!!!!!!",
            button: [
                { chatID: 112, text: sc.n("lola") + "!!!!", callback: "" }
            ]
        },
        {
            chatID: 112,
            speaker: "eva",
            text: "Don't ever leave us again! I was sooooo sad!",
            button: [
                { chatID: 113, text: "...", callback: "" }
            ]
        },
        {
            chatID: 113,
            speaker: "lola",
            text: "Yeah, we've been so sad with your gone. You really bring us all together. ",
            button: [
                { chatID: 114, text: "...", callback: "" }
            ]
        },
        {
            chatID: 114,
            speaker: "eva",
            text: "You really do. You're a weird pervert, but you're our weird pervert. ",
            button: [
                { chatID: -1, text: "...", callback: "welcome2" }
            ]
        },
        {
            chatID: 115,
            speaker: "eva",
            text: "So... aaaahhhh has your body changed? You look like a girl.",
            button: [
                { chatID: 116, text: "Oh yeah", callback: "" }
            ]
        },
        {
            chatID: 116,
            speaker: "lola",
            text: "Yeah, it looks like we're all sisters now! You look really cute! I'll miss having a brother, but I'm " +
            "happy to have gained a sister.",
            button: [
                { chatID: 120, text: "...", callback: "" }
            ]
        },
        {
            chatID: 117,
            speaker: "lola",
            text: "I love your new look. It's so cute. ",
            button: [
                { chatID: 118, text: "Thank you", callback: "" }
            ]
        },
        {
            chatID: 118,
            speaker: "eva",
            text: "You just want to wear dresses so you can have easy access to flash everyone pervert.",
            button: [
                { chatID: 120, text: "oh well maybe.", callback: "" }
            ]
        },
        {
            chatID: 119,
            speaker: "eva",
            text: "You haven't changed a bit. I've really missed messing with you.",
            button: [
                { chatID: 120, text: "I do like the way you mess me with", callback: "" }
            ]
        },
        {
            chatID: 120,
            speaker: "lola",
            text: "We've been working on " + sc.n("landlord") + " the entire time you've been gone! She was sooooo mad.",
            button: [
                { chatID: 121, text: "Really", callback: "" }
            ]
        },
        {
            chatID: 121,
            speaker: "eva",
            text: "Oh My God yeah she was. Crazy mad. She threatened to lock us both up until we turn 30. She then demanded to know " +
            "if we we're still virgins. I had to lie my ass off. ",
            button: [
                { chatID: 122, text: "Oh wow", callback: "" }
            ]
        },
        {
            chatID: 122,
            speaker: "lola",
            text: "Luckily I didn't have to lie. Boys don't like me like they like " + sc.n("eva") + ". ",
            button: [
                { chatID: 123, text: "They do, you're just uptight.", callback: "" }
            ]
        },
        {
            chatID: 123,
            speaker: "eva",
            text: "Hahaha you are uptight! Remember when Johnny B. tried to grab your boob and you ran away. You were talking " +
            "him for months and when he made a move you disappeared like a fart in church!",
            button: [
                { chatID: 124, text: "What does that even mean?", callback: "" }
            ]
        },
        {
            chatID: 124,
            speaker: "eva",
            text: "I don't know, I thought it was a saying. You know, 'cause you don't fart in church. ",
            button: [
                { chatID: 125, text: "...", callback: "" }
            ]
        },
        {
            chatID: 125,
            speaker: "lola",
            text: "That is so not a saying. Also don't compare me to a fart. You're a fart!",
            button: [
                { chatID: 126, text: "...", callback: "" }
            ]
        },
        {
            chatID: 126,
            speaker: "eva",
            text: "Hahaha see we missed you. We need you around. We'll be more careful next time. No yelling out again " + sc.n("lola") +
            ". You screamed out like a fart in church! And that's a saying",
            button: [
                { chatID: 127, text: "Stop trying to make 'Fart like a church' happen. It's not going to happen.", callback: "" }
            ]
        },
        {
            chatID: 127,
            speaker: "lola",
            text: "Haha. Once " + sc.n("eva") + " gets something in her head it never leaves. ",
            button: [
                { chatID: 128, text: "Oh I know.", callback: "" }
            ]
        },
        {
            chatID: 128,
            speaker: "eva",
            text: sc.n("lola") + "'s right. You know what been on my mind? I want to see your penis again. There's something so " +
                "wrong, yet so right about it. I loved how you squirmed when I rubbed it with my feet, I haven't been able to get it out " +
            "of my mind. Show it to us!",
            button: [
                { chatID: 129, text: "...", callback: "" }
            ]
        },
        {
            chatID: 129,
            speaker: "lola",
            text: "Oh yeah. I kinda want to see it too.",
            button: [
                { chatID: 130, text: "Well...", callback: "motherMother" }
            ]
        },
        {
            chatID: 130,
            speaker: "landlord",
            text: "Hey kids, just checking up on you three. Making sure we don't have a repeat of the last little incident.",
            button: [
                { chatID: 131, text: "Oh no", callback: "motherMother" }
            ]
        },
        {
            chatID: 131,
            speaker: "lola",
            text: "Oh " + sc.n("landlord") + ". We won't do anything like that again. I promised you it was just a little game that " +
            "just got out of control. You know I wouldn't break my promise to you.",
            button: [
                { chatID: 132, text: "...", callback: "" }
            ]
        },
        {
            chatID: 132,
            speaker: "landlord",
            text: "I trust you " + sc.n("lola") + ". I just don't trust " + sc.n("eva") + " and " + sc.n("me") + ". ",
            button: [
                { chatID: 133, text: "Whaaa", callback: "" }
            ]
        },
        {
            chatID: 133,
            speaker: "eva",
            text: "HEY!!!! ",
            button: [
                { chatID: 134, text: "...", callback: "" }
            ]
        },
        {
            chatID: 134,
            speaker: "landlord",
            text: "I know you two well enough to know you're up to no good. At least my little angle, " + sc.n("lola") + 
            ", is here to keep an eye on you both. Now be good you three. I'm going to keep an eye on you.",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "end9" }
            ]
        },
        {
            chatID: 135,
            speaker: "lola",
            text: "We promised " + sc.n("landlord") + " we wouldn't do anything to get in trouble again. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 136,
            speaker: "eva",
            text: sc.n("lola") + " the prude made me promise we'ld be good. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 137,
            speaker: "thinking",
            text: "Nice, this must be the key to their room!",
            button: [
                { chatID: -1, text: "Key added to inventory", callback: "" }
            ]
        },
        {
            chatID: 138,
            speaker: "eva",
            text: scc.changeText,
            button: [
                { chatID: -1, text: "Butthead!", callback: "evachangeText" }
            ]
        },
        {
            chatID: 139,
            speaker: "lola",
            text: scc.changeText,
            button: [
                { chatID: -1, text: "Thanks!", callback: "lolachangeText" }
            ]
        },
        {
            chatID: 140,
            speaker: "lola",
            text: "oh, uhhhhh, it appears you have something on your face.",
            button: [
                { chatID: -1, text: "Thanks, I'll go lick it off!", callback: "lhate" }
            ]
        },
        {
            chatID: 141,
            speaker: "eva",
            text: "hahaha gross, someone came all over your face!",
            button: [
                { chatID: -1, text: "Thanks, I'll go lick it off!", callback: "" }
            ]
        },
        {
            chatID: 142,
            speaker: "lola",
            text: "We're really sorry for getting your kicked out!",
            button: [
                { chatID: 143, text: "...", callback: "" }
            ]
        },
        {
            chatID: 143,
            speaker: "eva",
            text: "Oh yeah! We're working on " + sc.n("landlord") + " on getting you back in. She's really really mad. " +
                "I don't think I've seen her so mad before. ",
            button: [
                { chatID: 144, text: "...", callback: "" }
            ]
        },
        {
            chatID: 144,
            speaker: "lola",
            text: "I bet if you visit " + sc.n("landlord") + " at her work and are really nice, she may let you back in. ",
            button: [
                { chatID: 145, text: "OK! I'll  try that.", callback: "" }
            ]
        },
        {
            chatID: 145,
            speaker: "eva",
            text: "Since we feel so guilty here's a present for you! ",
            button: [
                { chatID: 146, text: "OK! I'll  try that.", callback: "9present" }
            ]
        },
        {
            chatID: 146,
            speaker: "lola",
            text: "Hopefully you like them! You need to get out of here before " + sc.n("landlord") + " gets back though.",
            button: [
                { chatID: -1, text: "Ok! see you later!", callback: "9presentx" }
            ]
        },
        {
            chatID: 147,
            speaker: "lola",
            text: "We're going to have so much sister time fun! I can't believe I didn't see it before!",
            button: [
                { chatID: 149, text: "Squeel", callback: "" }
            ]
        },
        {
            chatID: 148,
            speaker: "eva",
            text: "I still think you're just doing this to see us naked some more, but I'm willing to help you out.",
            button: [
                { chatID: 149, text: "I'm really a sissy girl.", callback: "" }
            ]
        },
        {
            chatID: 149,
            speaker: "lola",
            text: "Well, I guess since we're all girls here we can play dress up!",
            button: [
                { chatID: 150, text: "OOoo I love dress up", callback: "200_1" }
            ]
        },
        {
            chatID: 150,
            speaker: "eva",
            text: "I'm in. I love dress up, but we have to play it the right way! Dress all the way up; like we used to!",
            button: [
                { chatID: 151, text: "All the way?", callback: "" }
            ]
        },
        {
            chatID: 151,
            speaker: "lola",
            text: "I don't know about that. *whipser* I mean I don't like being naked in front of boys.",
            button: [
                { chatID: 152, text: "...", callback: "" }
            ]
        },
        {
            chatID: 152,
            speaker: "eva",
            text: "He's not a boy, you said so yourself, just three girls here so it's ok if she sees us naked. Besides " +
                "we need to make sure her panties are cute. Now strip and stop complaining you wet blanket.",
            button: [
                { chatID: 153, text: "...", callback: "200_2" }
            ]
        },
        {
            chatID: 153,
            speaker: "lola",
            text: "Fine, but no funny business, and only because we're all girls here. ",
            button: [
                { chatID: 154, text: "nice!", callback: "200_3" }
            ]
        },
        {
            chatID: 154,
            speaker: "eva",
            text: "What are you smirking about, you need to strip too girl! ",
            button: [
                { chatID: -1, text: "Oh. Yeah, of course.", callback: "200_4" }
            ]
        },
        {
            chatID: 155,
            speaker: "lola",
            text: "What is that thing on you penis?",
            button: [
                { chatID: 156, text: "huh?", callback: "" }
            ]
        },
        {
            chatID: 156,
            speaker: "eva",
            text: sc.n("lola") + " you can't just ask a girl what's on their penis! So rude. It's obviously a fake vagina. ",
            button: [
                { chatID: 157, text: "Oh, it's a chastity cage...", callback: "" }
            ]
        },
        {
            chatID: 157,
            speaker: "lola",
            text: "Oh, I've heard of those. It's so you can't have sex. I've always wondered why someone would wear one of those.",
            button: [
                { chatID: 158, text: "I can still have sex, I just use my sissy pussy, aka my butthole", callback: "" },
                { chatID: 159, text: "I just wear it as a joke", callback: "" }
            ]
        },
        {
            chatID: 158,
            speaker: "eva",
            text: "You really are a girl now. Anal really is awesome, but my pussy will always win. ",
            button: [
                { chatID: 164, text: "Yeah, maybe some day I'll have a pussy too.", callback: "" }
            ]
        },
        {
            chatID: 159,
            speaker: "eva",
            text: "That's not really funny, but I guess girls don't have cocks.",
            button: [
                {
                    chatID: 164, text: "I know.", callback: ""
                }
            ]
        },
        {
            chatID: 160,
            speaker: "eva",
            text: "Haha. You're a girl 'cause of your tiny cock huh? It's so tiny you couldn't get a girl, just boys yeah!",
            button: [
                { chatID: 161, text: "...", callback: "" }
            ]
        },
        {
            chatID: 161,
            speaker: "lola",
            text: "That's so rude " + sc.n("eva") + ".",
            button: [
                { chatID: 164, text: "It's ok, I do have a tiny cock. ", callback: "" }
            ]
        },
        {
            chatID: 162,
            speaker: "eva",
            text: "You know, it really is a shame you're a girl now, because that is one amazing cock!",
            button: [
                { chatID: 163, text: "...", callback: "" }
            ]
        },
        {
            chatID: 163,
            speaker: "lola",
            text: sc.n("eva") + "! She's a girl now, you shouldn't talk about her penis. ",
            button: [
                { chatID: 164, text: "...", callback: "" }
            ]
        },
        {
            chatID: 164,
            speaker: "lola",
            text: "So what should we start with?",
            button: [
                { chatID: 165, text: "Start with?", callback: "" }
            ]
        },
        {
            chatID: 165,
            speaker: "eva",
            text: "I like red! Everyone put on red panties and bra. ",
            button: [
                { chatID: 166, text: "I didn't ", callback: "200_5" }
            ]
        },
        {
            chatID: 166,
            speaker: "lola",
            text: "Don't worry " + sc.n("me") + " you can wear a set of mine. I'll give you my sexiest pair. ",
            button: [
                { chatID: -1, text: "I didn't ", callback: "200_6" }
            ]
        },
        {
            chatID: 167,
            speaker: "eva",
            text: "Not gunna lie, you do make a sexy chick!",
            button: [
                { chatID: 168, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 168,
            speaker: "lola",
            text: "I love it. Turn around let us see that butt. Hehehe",
            button: [
                { chatID: 169, text: "Oh yeah!", callback: "200_7" }
            ]
        },
        {
            chatID: 169,
            speaker: "lola",
            text: "I love it. With those matching panties and bra you make a sexy girl. ",
            button: [
                { chatID: 170, text: "Thanks", callback: "200_8" }
            ]
        },
        {
            chatID: 170,
            speaker: "lola",
            text: "You know, every girl needs some matching panties and bra to make herself feel good. You can keep those. " +
                "I don't really wear them anyways. ",
            button: [
                { chatID: 171, text: "Oh wow. Really?", callback: "" }
            ]
        },
        {
            chatID: 171,
            speaker: "eva",
            text: "We just want to make you feel good. We're all " + sc.n("el") + " and " + sc.n("el") + " look out for each other. " +
                "We just want to make sure you know you're loved, even if your now a girl pervert. ",
            button: [
                { chatID: 172, text: "You're ok " + sc.n("eva") + ".", callback: "" }
            ]
        },
        {
            chatID: 172,
            speaker: "lola",
            text: "We love you and want you to feel accepted. ",
            button: [
                { chatID: 173, text: "I love you too " + sc.n("lola") + ". ", callback: "" }
            ]
        },
        {
            chatID: 173,
            speaker: "eva",
            text: "We better change back before " + sc.n("landlord") + " comes in. I don't know if she'll be happy with all of " +
                "us in our sexy panties. ",
            button: [
                { chatID: -1, text: "Yeah. Catch you two later. ", callback: "200_9" }
            ]
        },
        {
            chatID: 174,
            speaker: "el",
            text: "We're in the mood for ice cream! Do you want to go to the Naked Beaver and get some ice cream with us!",
            button: [
                { chatID: 178, text: "Yes I do! I love ice cream!", callback: "" },
                { chatID: -1, text: "Naw, I'm not in the mood for ice cream. ", callback: "" }
            ]
        },
        {
            chatID: 175,
            speaker: "eva",
            text: "Hey " + sc.n("me") + ". Did you want to cuddle with us and sleep?",
            button: [
                { chatID: -1, text: "Yes I do.", callback: "sleep" },
                { chatID: -1, text: "Nope, just being a pervert.", callback: "reset" }
            ]
        },
        {
            chatID: 176,
            speaker: "thinking",
            text: "What a lovely sleep . I better get back to my room. ",
            button: [
                { chatID: -1, text: "[Return to room]", callback: "returnRoom10" }
            ]
        },
        {
            chatID: 177,
            speaker: "lola",
            text: "Awww, you look like a boy. We want to go out with you, but as your true self. You should put on something pretty.",
            button: [
                { chatID: -1, text: "Oh yeah. I should wear pretty clothes!", callback: "" }
            ]
        },
        {
            chatID: 178,
            speaker: "eva",
            text: "Sweet! Lets head down now I can't wait!",
            button: [
                { chatID: 179, text: "[Head to the Naked Beaver Diner] ", callback: "201_1" }
            ]
        },
        {
            chatID: 179,
            speaker: "lola",
            text: "You look so pretty today, I'm kinda jealous how well you pull off that outfit. ",
            button: [
                { chatID: 180, text: "Thanks ", callback: "" }
            ]
        },
        {
            chatID: 180,
            speaker: "eva",
            text: "It's cause she's knows what perverts like to look at! ",
            button: [
                { chatID: 181, text: "... ", callback: "" }
            ]
        },
        {
            chatID: 181,
            speaker: "lola",
            text: "Hey be nice. She's going through a lot right now. It's a big change. Almost as big as the ice cream I'm about to order. ",
            button: [
                { chatID: -1, text: "... ", callback: "201_2" }
            ]
        },
        {
            chatID: 182,
            speaker: "molly",
            text: "Oh, it's you. Did you come here to narc on us some more?",
            button: [
                { chatID: 183, text: "... ", callback: "" }
            ]
        },
        {
            chatID: 183,
            speaker: "lola",
            text: "Huh? We're just here for some ice cream.",
            button: [
                { chatID: 184, text: "... ", callback: "" }
            ]
        },
        {
            chatID: 184,
            speaker: "molly",
            text: "I don't serve ice cream to assholes. You all should leave.",
            button: [
                { chatID: 185, text: "but... ", callback: "" }
            ]
        },
        {
            chatID: 185,
            speaker: "eva",
            text: "Did you perv on her? Why do we have to go?",
            button: [
                { chatID: 186, text: "No. She was stealing.", callback: "201_1c" }
            ]
        },
        {
            chatID: 186,
            speaker: "dolly",
            text: "We trusted you, and you fucked us. Just get out. ",
            button: [
                { chatID: 187, text: "....", callback: "" }
            ]
        },
        {
            chatID: 187,
            speaker: "lola",
            text: "We should just go. They don't seem to like us. ",
            button: [
                { chatID: 188, text: "....", callback: "" }
            ]
        },
        {
            chatID: 188,
            speaker: "eva",
            text: "Yeah. You ruined ice cream day, way to go pervert. We're going.",
            button: [
                { chatID: -1, text: "Awww damn", callback: "201_1d" }
            ]
        },
        {
            chatID: 189,
            speaker: "molly",
            text: "Why hello my favorite customers. What can I get you?",
            button: [
                { chatID: 190, text: "...", callback: "" }
            ]
        },
        {
            chatID: 190,
            speaker: "el",
            text: "ICE CREAM!",
            button: [
                { chatID: -1, text: "Ice Cream!", callback: "201_3" }
            ]
        },
        {
            chatID: 191,
            speaker: "molly",
            text: "Comming right up, and since " + sc.n("me") + " is such a terrific girl it's on the house. I was just telling " +
                sc.n("molly") + " how great you are. We heard what " + sc.n("jeffery") + " did. He's such a terrible pervert. Free " +
                "ice cream is the least we could do for such a wonderful girl.",
            button: [
                { chatID: 194, text: "Awesome Thanks!", callback: "201_4a" }
            ]
        },
        {
            chatID: 192,
            speaker: "molly",
            text: "Sure, It'll be $30 for everyone.",
            button: [
                { chatID: 194, text: "I'll get it", callback: "201_4b" },
                { chatID: 194, text: "I'm a bit light, can you get this?", callback: "201_4c" }
            ]
        },
        {
            chatID: 193,
            speaker: "molly",
            text: "Sure, It'll be $30 for everyone.",
            button: [
                { chatID: 194, text: "I'm a bit light, can you get this?", callback: "201_4c" }
            ]
        },
        {
            chatID: 194,
            speaker: "lola",
            text: "Is it wrong how excited I am for this ice cream? I haven't had any sweets for two weeks now. Staying skinny " +
                "is just too much work sometimes. Maybe I should just chuck it all and eat ice cream all day. ",
            button: [
                { chatID: 195, text: "That would be the life", callback: "" }
            ]
        },
        {
            chatID: 195,
            speaker: "eva",
            text: "You liar, we had ice cream a couple days ago in the school cafeteria. When we started eating it you said the exact " +
                "same thing. You're addicted to swimming, and eating healthy, and always doing the right thing, admit it.",
            button: [
                { chatID: 196, text: "Oh", callback: "" }
            ]
        },
        {
            chatID: 196,
            speaker: "lola",
            text: "Oh yeah, I guess we did have ice cream. I'm such an airhead sometimes. *groan* ", 
            button: [
                { chatID: 197, text: "You're not an airhead. You're the smartest girl I know. ", callback: "" }
            ]
        },
        {
            chatID: 197,
            speaker: "eva",
            text: "Shut up white knight. Speaking of air heads, did you hear " + sc.n("jada") + " was dating " + sc.n("jimmy") +
                " again. I swear I don't see what she sees in him. All he does is play cards with those losers down the street. " +
                "She could do so much better than him. ",
            button: [
                { chatID: 198, text: "Hay!", callback: "" }
            ]
        },
        {
            chatID: 198,
            speaker: "lola",
            text: "I don't know, he's kinda cute you know. When I was younger I had such a crush on him. He's really good at rugby. ",
            button: [
                { chatID: 199, text: "Yeah, they are good together. ", callback: "201_5" }
            ]
        },
        {
            chatID: 199,
            speaker: "jones",
            text: "Hi slut. Enjoying a day out with the girls? When you're done here you should stop by my house " +
                "and service my cock. You can even bring these two if you want. ",
            button: [
                { chatID: 200, text: "Wha...?", callback: "" }
            ]
        },
        {
            chatID: 200,
            speaker: "lola",
            text: "Do you know this man?",
            button: [
                { chatID: 201, text: "Yes, I know him", callback: "" },
                { chatID: 207, text: "Nope, never seen him before. ", callback: "" }
            ]
        },
        {
            chatID: 201,
            speaker: "jones",
            text: "Yeah you do. Now show me your tits slut. ",
            button: [
                { chatID: 202, text: "Yes sir [Flash your titties]", callback: "201_6" },
                { chatID: 207, text: "I'm not doing that! You can go.", callback: "" }
            ]
        },
        {
            chatID: 202,
            speaker: "jones",
            text: "Good girl. I like a girl that knows how to obey. I look forward to you serving me. Now thank me.",
            button: [
                { chatID: 203, text: "Thank you sir.", callback: "201_6a" }
            ]
        },
        {
            chatID: 203,
            speaker: "eva",
            text: "What the fuck was that!",
            button: [
                { chatID: 204, text: "Well, ummmm, ", callback: "" }
            ]
        },
        {
            chatID: 204,
            speaker: "lola",
            text: "That was crazy. I've never seen such a lack of respect before. Just because you're now a girl doesn't give " +
                "any man the right to treat you like that. You're so much better than this. ",
            button: [
                { chatID: 205, text: "I know. Thank you ", callback: "" }
            ]
        },
        {
            chatID: 205,
            speaker: "eva",
            text: "If he did that to me I would have just punched him in the dick. What an asshole. You don't have to do what he " +
                "says. I've lost my appetite. Do you want to go?",
            button: [
                { chatID: 206, text: "...", callback: "" }
            ]
        },
        {
            chatID: 206,
            speaker: "lola",
            text: "Yes, let's go. You need to respect yourself more. We love you too much to see you belittled like this. ",
            button: [
                { chatID: -1, text: "I know. Bye", callback: "201_7" }
            ]
        },
        {
            chatID: 207,
            speaker: "jones",
            text: "So that's how it is. I'll break your spirit and turn you into my slut someday. 'til then...",
            button: [
                { chatID: 208, text: "...", callback: "201_6b" }
            ]
        },
        {
            chatID: 208,
            speaker: "lola",
            text: "That has got to be the worst man I've ever met. Good for you for standing up to him. ",
            button: [
                { chatID: 209, text: "...", callback: "" }
            ]
        },
        {
            chatID: 209,
            speaker: "eva",
            text: "Yeah. That was so weird, it's like we're in some kind of strange porn game where people do weird sexual " +
                "things in public without any realistic consequences. We're going to head home now, see you later. ",
            button: [
                { chatID: -1, text: "...", callback: "201_7" }
            ]
        },
        {
            chatID: 210,
            speaker: "lola",
            text: "So how about another massage?",
            button: [
                { chatID: -1, text: "Oh Yeah!", callback: "br5" },
                { chatID: -1, text: "nah", callback: "" }
            ]
        },
        {
            chatID: 211,
            speaker: "lola",
            text: "That felt good. almost too good. Thank you.",
            button: [
                { chatID: -1, text: "Of course", callback: "reset" }
            ]
        },
        {
            chatID: 212,
            speaker: "thinking",
            text: "She's not stopping me this time. ",
            button: [
                { chatID: -1, text: "Go further...", callback: "br8" },
                { chatID: -1, text: "I better stop here. Don't want to go too far.", callback: "reset" },
            ]
        },
        {
            chatID: 213,
            speaker: "lola",
            text: "I know it's wrong, but I just can't help it, I need more. I've been so flustered with dirty dirty lust. " +
                "Please don't think less of me, I've tried to be good, but I need you now!",
            button: [
                { chatID: 214, text: "Oh yeah! [Start pulling off your clothes]", callback: "br9" }
            ]
        },
        {
            chatID: 214,
            speaker: "lola",
            text: "No, I made a promise we wouldn't have sex, but I could keep that promise if you used your mouth. After all " +
                "kissing me down there isn't sex..",
            button: [
                { chatID: 216, text: "Sure!", callback: "br10" },
                { chatID: 215, text: "No way you dirty dirty tease. You'll take my dick and like it!", callback: "" }
            ]
        },
        {
            chatID: 215,
            speaker: "lola",
            text: "I can't believe I let you get this far! Get out. Get out now!!!",
            button: [
                { chatID: -1, text: "Drat! I don't know what I was thinking.", callback: "br9Bad" }
            ]
        },
        {
            chatID: 216,
            speaker: "lola",
            text: "Please lick me, I need it soooo bad. I need you more than I've needed anything. ",
            button: [
                { chatID: -1, text: "Help her out", callback: "br11" }
            ]
        },
        {
            chatID: 217,
            speaker: "lola",
            text: "Oh FFFFFFFFFF!",
            button: [
                { chatID: 218, text: "...", callback: "" }
            ]
        },
        {
            chatID: 218,
            speaker: "lola",
            text: "Oh my, you're really good at that. I don't think I've ever cum that hard!",
            button: [
                { chatID: -1, text: "Thanks.", callback: "br12" }
            ]
        },
        {
            chatID: 219,
            speaker: "eva",
            text: "I still think you're a pervert, I don't care that you now wear panties. ",
            button: [
                { chatID: 221, text: "I know. I am such a pervert.", callback: "" },
                { chatID: 220, text: "I'm not a pervert. I'm a sweet little girl. ", callback: "" }
            ]
        },
        {
            chatID: 220,
            speaker: "eva",
            text: "*GROAN* Whatever. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 221,
            speaker: "eva",
            text: "I'll let you lick my feet. That's all perverts get. ",
            button: [
                { chatID: -1, text: "Yes!", callback: "lick1" },
                { chatID: -1, text: "Oh, I'm busy... with stuff", callback: "" }
            ]
        },
        {
            chatID: 222,
            speaker: "eva",
            text: "Hahaha it tickles. That's enough. I'm getting your slobber all over my feet weird-o. ",
            button: [
                { chatID: -1, text: "ok", callback: "reset" }
            ]
        },
        {
            chatID: 223,
            speaker: "eva",
            text: "You know you're a pervert, but I like that about you. I'll let you look at my vag while you lick my feet. " + 
                "Don't say I never do nothing for ya!",
            button: [
                { chatID: 224, text: "sweet", callback: "lick2" }
            ]
        },
        {
            chatID: 224,
            speaker: "eva",
            text: "You know you're a pervert, but I like that about you. I'll let you look at my vag while you lick my feet. " +
                "Don't say I never do nothing for ya!",
            button: [
                { chatID: -1, text: "sweet", callback: "" }
            ]
        },
        {
            chatID: 225,
            speaker: "me",
            text: "SLURP!",
            button: [
                { chatID: 226, text: "...", callback: "lick4" }
            ]
        },
        {
            chatID: 226,
            speaker: "eva",
            text: "That's so gross. I feel like a dog slobbered all over my feet you weird-o.",
            button: [
                { chatID: 227, text: "...", callback: "" }
            ]
        },
        {
            chatID: 227,
            speaker: "thinking",
            text: "I better do something else if I'm going to get her to like me more. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 228,
            speaker: "eva",
            text: "Hey I said you could lick my feet, not munch my box! You know if I tell " + sc.n("landlord") + " she'll kick " +
                "you out of this place so fast!",
            button: [
                { chatID: 229, text: "Oh! I'm sorry, I thought...", callback: "" }
            ]
        },
        {
            chatID: 229,
            speaker: "eva",
            text: "I know what you thought! You're not a girl, you're still a pervert! ",
            button: [
                { chatID: 230, text: "Please don't tell! She'll kick me out for good. I'll do anything.", callback: "lick6" }
            ]
        },
        {
            chatID: 230,
            speaker: "eva",
            text: "Anything?",
            button: [
                { chatID: 231, text: "Yes. Please just don't tell on me. ", callback: "" }
            ]
        },
        {
            chatID: 231,
            speaker: "eva",
            text: "ok, ummm, I've never had a slave before... Strip slave.",
            button: [
                { chatID: 232, text: "ok", callback: "lick7" }
            ]
        },
        {
            chatID: 232,
            speaker: "eva",
            text: "Oh.. um ok, kiss my feet. ",
            button: [
                { chatID: 233, text: "Absolutly!", callback: "lick8" }
            ]
        },
        {
            chatID: 233,
            speaker: "eva",
            text: "Hahah wow! You're like a doggy on all fours. Roll over. ",
            button: [
                { chatID: 234, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 234,
            speaker: "eva",
            text: "Roll over. You're my doggy now, and doggies do tricks. Do it or I'm telling " + sc.n("landlord") + ".",
            button: [
                { chatID: 235, text: "...", callback: "" }
            ]
        },
        {
            chatID: 235,
            speaker: "thinking",
            text: "Oh wow. This is so embarrassing, especially in front of " + sc.n("lola") + ", but " +
                "I really don't want her to tell on me. ",
            button: [
                { chatID: 236, text: "I should do what she says and play doggy. ", callback: "lick9" },
                { chatID: 243, text: "Ask " + sc.n("lola") + " for help. ", callback: "" }
            ]
        },
        {
            chatID: 236,
            speaker: "eva",
            text: "Roll over. You're my doggy now, and doggies do tricks. Do it or I'm telling " + sc.n("landlord") + ".",
            button: [
                { chatID: 237, text: "ok, ok", callback: "lick9" }
            ]
        },
        {
            chatID: 237,
            speaker: "eva",
            text: "Good doggy! Now bark for me like a happy doggy. ",
            button: [
                { chatID: 238, text: "Ruf", callback: "lick10" }
            ]
        },
        {
            chatID: 238,
            speaker: "eva",
            text: "Do you like it when I rub my feet on your doggy dick? Bark doggy. ",
            button: [
                { chatID: 239, text: "Ruf", callback: "" }
            ]
        },
        {
            chatID: 239,
            speaker: "eva",
            text: "Now beg for me. Beg like a good doggy. ",
            button: [
                { chatID: 240, text: "[Beg]", callback: "lick11" }
            ]
        },
        {
            chatID: 240,
            speaker: "eva",
            text: "Awww good doggy. ",
            button: [
                { chatID: 241, text: "Ruf", callback: "lick12" }
            ]
        },
        {
            chatID: 241,
            speaker: "lola",
            text: "That's so embarrasing, she's had enough. Both of you should get dressed before we all get in trouble again. ",
            button: [
                { chatID: 242, text: "...", callback: "" }
            ]
        },
        {
            chatID: 242,
            speaker: "eva",
            text: "Awwww ok. Text me doggy and we'll play somewhere else so we don't get in trouble. ",
            button: [
                { chatID: -1, text: "ok", callback: "reset" }
            ]
        },
        {
            chatID: 243,
            speaker: "lola",
            text: "You shouldn't lick her vag like that. I exptected you to be better since you're a girl now. You're on " +
                "your own. I'm not helping!",
            button: [
                { chatID: 236, text: "...", callback: "" }
            ]
        },
        {
            chatID: 244,
            speaker: "eva",
            text: "UGH! I won't tell this time, but do it again and I just may. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 245,
            speaker: "eva",
            text: "I promised " + sc.n("lola") + " that we wouldn't do anything at home. Call me from your phone. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 246,
            speaker: "eva",
            text: "I suppose you want to fuck us? It's late and we're tired. Just jack-off on our feet you pervert. ",
            button: [
                { chatID: 247, text: "Don't mind if I do", callback: "b7" },
                { chatID: -1, text: "Nope, I'm just perving on your naked bodies", callback: "leave" }
            ]
        },
        {
            chatID: 247,
            speaker: "thinking",
            text: "Well this is weird, but ok.",
            button: [
                { chatID: 248, text: "Shoot your load on their feet.", callback: "b8" }
            ]
        },
        {
            chatID: 248,
            speaker: "thinking",
            text: "That felt empty.",
            button: [
                { chatID: -1, text: "Pull their blanket back up and leave.", callback: "leave" }
            ]
        },
        {
            chatID: 249,
            speaker: "eva",
            text: "PUT SOME CLOTHES ON AND GET OUT YOU PERVERT!!!!",
            button: [
                { chatID: -1, text: "Ooooff", callback: "leave" }
            ]
        },
        {
            chatID: 250,
            speaker: "eva",
            text: "So did you come here to perv on us, or have sex?",
            button: [
                { chatID: 251, text: "Dirty dirty sex", callback: "" },
                { chatID: -1, text: "Just perving", callback: "" }
            ]
        },
        {
            chatID: 251,
            speaker: "lola",
            text: "Oh good. I really need some dick. Hehe I mean that would be great. ",
            button: [
                { chatID: -1, text: "Fuck them both", callback: "3some1" }
            ]
        },
        {
            chatID: 252,
            speaker: "eva",
            text: "You may be a weird pervert, but you sure can fuck. ",
            button: [
                { chatID: 253, text: "...", callback: "" }
            ]
        },
        {
            chatID: 253,
            speaker: "lola",
            text: "My little pussy is so cummie. I love it. ",
            button: [
                { chatID: -1, text: "...", callback: "3someEnd" }
            ]
        },
        {
            chatID: 254,
            speaker: "lola",
            text: sc.n("landlord") + " said she wanted to speak with you in her room. Said it was urgent. ",
            button: [
                { chatID: -1, text: "Oh, I hope I'm not in trouble. ", callback: "" }
            ]
        },
    ];
    return cArray[chatID];
};
