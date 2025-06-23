//Park Men's Room
var room451 = {};

room451.main = function () {
    g.pass = "";
    var canGoOut = cl.hasoutfit("public");
    if (canGoOut === null) {
        var btnList = [
            {
                "type": "btn",
                "name": "stall1",
                "left": 1225,
                "top": 172,
                "width": 166,
                "height": 546,
                "image": "451_parkMensRoom/451_stall1.png"
            },
            {
                "type": "btn",
                "name": "stall2",
                "left": 1001,
                "top": 149,
                "width": 184,
                "height": 586,
                "image": "451_parkMensRoom/451_stall2.png"
            },
            {
                "type": "btn",
                "name": "stall3",
                "left": 750,
                "top": 118,
                "width": 207,
                "height": 632,
                "image": "451_parkMensRoom/451_stall3.png"
            },
            {
                "type": "btn",
                "name": "mirror",
                "left": 1621,
                "top": 76,
                "width": 233,
                "height": 490,
                "image": "451_parkMensRoom/sink.png"
            }
        ];

        if (!g.isNight() && Math.floor(Math.random() * 3) === 0) {
            btnList.push({
                "type": "btn",
                "name": "pee",
                "left": 160,
                "top": 156,
                "width": 315,
                "height": 730,
                "image": "451_parkMensRoom/pee0.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "urinal",
                "left": 243,
                "top": 354,
                "width": 158,
                "height": 255,
                "image": "451_parkMensRoom/urinal.png"
            });
        }

        var navList = [450];

        $.each(btnList, function (i, v) {
            nav.button(v, 451);
        });

        nav.buildnav(navList);

        //if (g.isNight()) {
        //    fame.event();
        //}
    }
    else {
        g.internal = canGoOut;
        chat(0, 451);
    }
};

room451.btnclick = function (name) {
    switch (name) {
        case "case_usb":
            nav.killall();
            nav.bg("451_parkMensRoom/case_usb1.jpg");
            nav.button({
                "type": "btn",
                "name": "case_usb1",
                "left": 762,
                "top": 451,
                "width": 56,
                "height": 130,
                "image": "451_parkMensRoom/case_usb1.png"
            }, 451);
            break;
        case "case_usb1":
            inv.add("missyusb");
            missy.set("reusableCaseCounter", 2);
            missy.set("activeCaseComplete", 1);
            nav.killbutton("case_usb1");
            chat(56, 451);
            break;
        case "stall3":
            nav.killall();
            if (missy.get("activeCase") === 4 && missy.get("reusableCaseCounter") < 2) {
                if (missy.get("reusableCaseCounter") === 0) {
                    missy.set("reusableCaseCounter", 1);
                    nav.bg("451_parkMensRoom/blumpkin.jpg");
                    chat(54, 451);
                }
                else {
                    nav.bg("451_parkMensRoom/case_usb0.jpg");
                    nav.button({
                        "type": "btn",
                        "name": "case_usb",
                        "left": 892,
                        "top": 226,
                        "width": 420,
                        "height": 854,
                        "image": "451_parkMensRoom/toilet.png"
                    }, 451);
                    chat(55, 451);
                }
            }
            else if (Math.floor(Math.random() * 3) === 0) {
                nav.bg("451_parkMensRoom/blumpkin.jpg");
                chat(54, 451);
            }
            else {
                nav.kill();
                nav.bg("451_parkMensRoom/stall.jpg");
                nav.button({
                    "type": "btn",
                    "name": "toilet",
                    "left": 1065,
                    "top": 227,
                    "width": 327,
                    "height": 742,
                    "image": "451_parkMensRoom/toilet1.png"
                }, 451);
            }
            nav.buildnav([451]);
            break;
        case "stall2":
            nav.killall();
            nav.bg("451_parkMensRoom/gloryHoleInsert.jpg");
            if (sc.getTimeline("cecilia").thisRoom) {
                nav.button({
                    "type": "btn",
                    "name": "insert_1",
                    "left": 1649,
                    "top": 158,
                    "width": 124,
                    "height": 218,
                    "image": "451_parkMensRoom/insert_1.png"
                }, 451);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "insert",
                    "left": 1649,
                    "top": 158,
                    "width": 124,
                    "height": 218,
                    "image": "451_parkMensRoom/insert.png"
                }, 451);
            }
            nav.buildnav([451]);
            break;
        case "stall1":
            if (sc.getTimeline("cecilia").thisRoom) {
                if (sc.getMission("cecilia", "gloryhole").inProgress) {
                    chat(14, 451);
                }
                else {
                    chat(5, 451);
                }
            }
            else {
                nav.killall();
                nav.bg("451_parkMensRoom/gbg.jpg");
                nav.button({
                    "type": "kiss",
                    "name": "gloryhole",
                    "left": 530,
                    "top": 311,
                    "width": 80,
                    "height": 194,
                    "image": "451_parkMensRoom/gloryhole.png"
                }, 451);
                nav.button({
                    "type": "dick",
                    "name": "toilet",
                    "left": 1065,
                    "top": 227,
                    "width": 327,
                    "height": 742,
                    "image": "451_parkMensRoom/toilet1.png"
                }, 451);
                nav.buildnav([451]);
            }
            break;
        case "mirror":
            g.pass = 451;
            char.room(27);
            break;
        case "toilet":
            g.pass = 451;
            char.room(22);
            break;
        case "insert":
            chat(1, 451);
            break;
        case "insert_1":
            nav.killall();
            nav.bg("451_parkMensRoom/bj1.jpg");
            if (gv.get("jobapplyconst") < 100)
                chat(6, 451);
            else
                chat(7, 451);
            break;
        case "gloryhole":
            if (sc.getMissionTask("cecilia", "gloryhole", 0).complete) {
                if (g.isNight()) {
                    nav.button({
                        "type": "img",
                        "name": "stick",
                        "left": 528,
                        "top": 311,
                        "width": 286,
                        "height": 194,
                        "image": "451_parkMensRoom/stick.png"
                    }, 451);
                    chat(59, 451);
                }
                else {
                    if (gv.get("energy") < 20)
                        chat(63, 451);
                    else
                        room451.chatcatch("suck1");
                }
            }
            else
                chat(2, 451);
            break;
        case "bj4":
            nav.killbutton("bj4");
            nav.button({
                "type": "img",
                "name": "bjx",
                "left": 725,
                "top": 103,
                "width": 890,
                "height": 874,
                "image": "451_parkMensRoom/bj3.png"
            }, 451);
            nav.button({
                "type": "btn",
                "name": "bj5",
                "left": 975,
                "top": 840,
                "width": 405,
                "height": 905,
                "image": "451_parkMensRoom/cock.png"
            }, 451);
            break;
        case "bj5":
            nav.killbutton("bj5");
            nav.button({
                "type": "btn",
                "name": "bj6",
                "left": 975,
                "top": 770,
                "width": 405,
                "height": 905,
                "image": "451_parkMensRoom/cock.png"
            }, 451);
            break;
        case "bj6":
            nav.killbutton("bj6");
            nav.button({
                "type": "btn",
                "name": "bj7",
                "left": 975,
                "top": 680,
                "width": 405,
                "height": 905,
                "image": "451_parkMensRoom/cock.png"
            }, 451);
            break;
        case "bj7":
            nav.killbutton("bj7");
            nav.killbutton("bjx");
            nav.bg("451_parkMensRoom/bj0.jpg");
            nav.button({
                "type": "img",
                "name": "bj8",
                "left": 665,
                "top": 0,
                "width": 1017,
                "height": 1080,
                "image": "451_parkMensRoom/bj8.gif"
            }, 451);
            g.roomTimeout = setTimeout(function () { chat(10, 451); }, 3000);

            break;
        case "cecilia":
            if (gv.get("energy") < 20)
                chat(66, 451);
            else
                chat(46, 451);
            break;
        case "c1":
            g.pass = 1;
            nav.killall();
            nav.bg("451_parkMensRoom/c2.jpg");
            chat(17, 451);
            break;
        case "gc3":
            if (g.pass === 1) {
                nav.bg("451_parkMensRoom/gc4.jpg");
                chat(20, 451);
                g.pass = 2;
            }
            else if (g.pass === 2) {
                nav.bg("451_parkMensRoom/gc5.jpg");
                nav.button({
                    "type": "btn",
                    "name": "gc3",
                    "left": 593,
                    "top": 0,
                    "width": 992,
                    "height": 1080,
                    "image": "451_parkMensRoom/gc5.png"
                }, 451);
                g.pass = 3;
            }
            else if (g.pass === 3) {
                nav.killall();
                nav.bg("451_parkMensRoom/gc6.jpg");
                chat(21, 451);
            }
            break;
        case "ceciliaStall":
            if (gv.get("oncase") === "gloryholeanal") {
                gv.set("oncase") === null;
                g.sissy[17].ach = true;
            }
            else if (g.sissy[17].ach) {
                nav.bg("451_parkMensRoom/gbgcock.jpg");
                chat(46, 451);
            }
            else {
                nav.killall();
                nav.bg("451_parkMensRoom/gbgcockx.jpg");
                chat(45, 451);
            }
            
            break;
        case "ghole1":
            if (g.sissy[17].ach)
                chat(41, 451);
            else
                chat(32, 451);
            break;
        case "pee":
            chat(50, 451);
            break;
        case "urinal":
            if (gv.get("bladder") < .1) {
                chat(52, 451);
            }
            else if (g.sissy[22].ach) {
                chat(53, 451);
            }
            else {
                nav.killall();
                gv.set("bladder", 0);
                nav.bg("451_parkMensRoom/urinal.jpg");
                chat(51, 451);
            }
            break;
        case "gh_pass":
            char.addtime(60);
            room451.btnclick("stall1");
            break;
        case "suck2":
            nav.killbutton("gh_pass");
            if (qdress.st[23].ach)
                chat(61, 451);
            else
                chat(62, 451);
            break;
        case "gh_anal":
            if (g.internal.step === 0) {
                if (levels.analTake(g.internal.s).canTake) {
                    nav.killall();
                    nav.bg("451_parkMensRoom/a0.jpg");
                    nav.next("gh_anal");
                }
                else {
                    nav.killbutton("gh_oral");
                    nav.killbutton("gh_anal");
                    chat(65, 451);
                }
            }
            else if (g.internal.step === 1) {
                nav.bg("451_parkMensRoom/a1" + (cl.c.chastity === null ? "" : "_c") + ".jpg");
            }
            else {
                levels.anal(g.internal.s, false, "m", true, null, "unk");
                nav.killall();
                if (g.internal.m) {
                    nav.bg("451_parkMensRoom/g_bg.jpg");
                    nav.button({
                        "type": "hand",
                        "name": "gh_money",
                        "left": 502,
                        "top": 248,
                        "width": 575,
                        "height": 410,
                        "image": "451_parkMensRoom/money_" + (g.internal.c > 1 ? "b" : "w") + ".png"
                    }, 451);
                }
                else
                    chat(996, 451);
            }
            g.internal.step++;
            break;
        case "gh_oral":
            if (levels.oralTake(g.internal.s).canTake) {
                nav.killall();
                g.internal.s = 1;
                nav.bg("451_parkMensRoom/g_0_" + g.internal.c + (cl.c.cumface ? "_c" : "") + ".jpg");
                nav.next("gh_oral1");
            }
            else {
                nav.killbutton("gh_oral");
                nav.killbutton("gh_anal");
                chat(64, 451);
            }
            break;
        case "gh_oral1":
            nav.killbutton("gh_oral1");
            nav.bg("451_parkMensRoom/g_1_" + g.internal.c + (cl.c.cumface ? "_c" : "") + ".jpg");
            sc.select("gh_swallow", "451_parkMensRoom/icon_swallow.png", 0);
            sc.select("gh_facial", "451_parkMensRoom/icon_facial.png", 1);
            break;
        case "gh_swallow":
            nav.killall();
            levels.oral(g.internal.s, true, false, "m", null, "unk");
            nav.bg("451_parkMensRoom/g_2_" + g.internal.c + (cl.c.cumface ? "_c" : "") + ".jpg");
            nav.next("gh_oral2");
            break;
        case "gh_facial":
            nav.killall();
            levels.oral(g.internal.s, false, false, "m", null, "unk");
            nav.bg("451_parkMensRoom/g_2_" + g.internal.c + "_f.jpg");
            nav.next("gh_oral2");
            break;
        case "gh_oral2":
            gv.mod("energy", -15);
            nav.killall();
            if (g.internal.m) {
                nav.bg("451_parkMensRoom/g_bg.jpg");
                nav.button({
                    "type": "hand",
                    "name": "gh_money",
                    "left": 502,
                    "top": 248,
                    "width": 575,
                    "height": 410,
                    "image": "451_parkMensRoom/money_" + (g.internal.c > 1 ? "b" : "w") + ".png"
                }, 451);
            }
            else {
                nav.bg("451_parkMensRoom/g_3" + (cl.c.cumface ? "_c" : "") + ".jpg");
                chat(997, 451);
            }
            break;
        case "gh_money":
            chat(998, 451);
            break;
        default:
            break;
    }
};

room451.chatcatch = function (callback) {
    switch (callback) {
        case "reloadRoom":
            char.room(451);
            break;
        case "c3":
        case "c4":
        case "c5":
        case "c6":
        case "c7":
        case "c8_s":
            nav.bg("451_parkMensRoom/" + callback + ".jpg");
            break;
        case "busted":
            nav.killall();
            nav.bg("451_parkMensRoom/" + callback + ".jpg");
            break;
        case "c8_f":
            cl.c.cumface = true;
            levels.oral(4, false, false, "m");
            cl.display();
            nav.bg("451_parkMensRoom/" + callback + ".jpg");
            break;
        case "c9_s":
            levels.oral(4, true, false, "m", null, "unk");
            nav.bg("451_parkMensRoom/" + callback + ".jpg");
            break;
        case "cleanface":
            cl.clean("face");
            zcl.displayMirror();
            cl.display();
            break;
        case "bj2":
            nav.bg("451_parkMensRoom/bj2.jpg");
            break;
        case "bj3":
            if (cl.c.chastity === null) {
                nav.button({
                    "type": "btn",
                    "name": "bj4",
                    "left": 725,
                    "top": 103,
                    "width": 890,
                    "height": 874,
                    "image": "451_parkMensRoom/bj3.png"
                }, 451);
            }
            else {
                nav.bg("451_parkMensRoom/bj2a.jpg");
                chat(9, 451);
            }
            break;
        case "bj8":
            nav.killbutton("bj8");
            nav.bg("451_parkMensRoom/bj8.jpg");
            break;
        case "bj9":
            nav.button({
                "type": "img",
                "name": "bj9",
                "left": 665,
                "top": 0,
                "width": 1017,
                "height": 1080,
                "image": "451_parkMensRoom/bj9.gif"
            }, 451);
            g.roomTimeout = setTimeout(function () { chat(12, 451); }, 2400);
            break;
        case "bj10":
            nav.killbutton("bj9");
            nav.bg("451_parkMensRoom/bj10.jpg");
            break;
        case "bj11":
            char.addtime(60);
            gv.mod("receiveOralMale", 1);
            cl.doCum(false);
            char.room(451);
            break;
        case "enterstall":
            nav.killall();
            nav.bg("451_parkMensRoom/gbg.jpg");
            nav.button({
                "type": "btn",
                "name": "cecilia",
                "left": 1278,
                "top": 48,
                "width": 495,
                "height": 1034,
                "image": "451_parkMensRoom/c1.png"
            }, 451);
            if (sc.taskGetStep("cecilia", "gloryhole") < 1) {
                sc.completeMissionTask("cecilia", "gloryhole", 0);
                sc.modLevel("cecilia", 100, 999);
                chat(15, 451);
            }
            else if (!sc.getTimeline("cecilia").thisRoom) {
                chat(58, 451);
                nav.buildnav([451, 450]);
            }
            else {
                nav.bg("451_parkMensRoom/c_bg.jpg");
                nav.buildnav([451, 450]);
            }
            break;
        case "gc1":
            nav.killall();
            g.internal = 1;
            nav.bg("451_parkMensRoom/c0.jpg");
            nav.button({
                "type": "tongue",
                "name": "c1",
                "left": 524,
                "top": 310,
                "width": 283,
                "height": 190,
                "image": "451_parkMensRoom/c0.png"
            }, 451);
            break;
        case "gc7":
            nav.killall();
            nav.bg("451_parkMensRoom/gc7.jpg");
            break;
        case "gc8_swollow":
            nav.bg("451_parkMensRoom/gc6.jpg");
            break;
        case "gc8_swollow1":
            gv.mod("giveOralMale", 1);
            gv.mod("loadSwollowed", 1);
            nav.bg("451_parkMensRoom/gc8_swollow1.jpg");
            break;
        case "gc8_face":
            gv.mod("giveOralMale", 1);
            gv.mod("loadSpit", 1);
            cl.c.cumface = true;
            cl.display();
            nav.bg("451_parkMensRoom/gc8_face.jpg");
            break;
        case "endgc1":
            char.addtime(60);
            nav.buildnav([451, 450]);
            break;
        case "reset":
            char.room(451);
            break;
        case "suck1":
            g.internal = {
                c: null,
                s: null,
                m: false,
                step: 0
            };
            nav.killbutton("toilet");
            switch (g.rand(0, 6)) {
                case 0: g.internal.c = 0; g.internal.s = 2; break;
                case 1: g.internal.c = 1; g.internal.s = 3; break;
                case 2: g.internal.c = 2; g.internal.s = 4; break;
                case 3: g.internal.c = 3; g.internal.s = 5; break;
                default:
                    g.internal.c = null;
                    break;
            }
            if (g.internal.c !== null) {
                nav.button({
                    "type": "kiss",
                    "name": "suck2",
                    "left": 529,
                    "top": 310,
                    "width": 367,
                    "height": 195,
                    "image": "451_parkMensRoom/g" + g.internal.c + ".png"
                }, 451);
                sc.select("gh_pass", "451_parkMensRoom/icon_pass.png", 11);
            }
            else {
                chat(31, 451);
            }

            //var rdm = Math.floor(Math.random() * 10);
            //    rdm = 8;
            //    if (rdm === 0) {
            //        nav.killall();
            //        nav.bg("451_parkMensRoom/suck1.jpg");
            //        zcl.displayMirror();
            //        nav.button({
            //            "type": "btn",
            //            "name": "gc1",
            //            "left": 0,
            //            "top": 0,
            //            "width": 1920,
            //            "height": 1080,
            //            "image": "451_parkMensRoom/suck1.png"
            //        }, 451);
            //        chat(30, 451);
            //    }
            //    else if (rdm < 6) {
            //        nav.killall();
            //        nav.bg("451_parkMensRoom/suck1.jpg");
            //        zcl.displayMirror();
            //        nav.button({
            //            "type": "btn",
            //            "name": "aaa",
            //            "left": 0,
            //            "top": 0,
            //            "width": 1920,
            //            "height": 1080,
            //            "image": "451_parkMensRoom/suck1e.png"
            //        }, 451);
            //        chat(31, 451);
            //    }
            //    else {
            //        if (Math.floor(Math.random() * 2) === 0) {
            //            g.pass = "w";
            //            nav.button({
            //                "type": "btn",
            //                "name": "ghole1",
            //                "left": 363,
            //                "top": 155,
            //                "width": 382,
            //                "height": 234,
            //                "title": "A cock",
            //                "image": "451_parkMensRoom/g0.png"
            //            }, 451);
            //        }
            //        else {
            //            g.pass = "b";
            //            nav.button({
            //                "type": "btn",
            //                "name": "ghole1",
            //                "left": 363,
            //                "top": 155,
            //                "width": 382,
            //                "height": 234,
            //                "title": "A cock",
            //                "image": "451_parkMensRoom/gc2.png"
            //            }, 451);
            //        }
            //        //nav.button({
            //        //    "type": "btn",
            //        //    "name": "ghole1",
            //        //    "left": 432,
            //        //    "top": 304,
            //        //    "width": 150,
            //        //    "height": 192,
            //        //    "title": "A cock",
            //        //    "image": "451_parkMensRoom/gc0.png"
            //        //}, 451);
            //    }

            //}
            break;
        case "arrest":
            g.pass = "jail";
            char.room(376);
            break;
        case "gloryholeEmpty":
            char.addtime (30);
            room451.btnclick("stall1");
            break;
        case "resetStall1":
            g.pass = "";
            room451.btnclick("stall1");
            break;
        case "suckit1":
            nav.killall();
            nav.bg("451_parkMensRoom/blow1" + g.pass + ".jpg");
            break;
        case "suckit2":
            gv.mod("giveOralMale", 1);
            gv.mod("loadSwollowed", 1);
            nav.bg("451_parkMensRoom/blow2" + g.pass + ".jpg");
            break;
        case "suckit3":
            nav.bg("451_parkMensRoom/blow3" + g.pass + ".jpg");
            gv.mod("giveOralMale", 1);
            gv.mod("loadSpit", 1);
            cl.c.cumface = true;
            cl.display();
            break;
        case "suckit4":
            gv.mod("money", 20);
            gv.mod("giveOralMale", 1);
            char.addtime(60);
            room451.btnclick("stall1");
            break;
        case "suckit5":
            gv.mod("giveOralMale", 1);
            char.addtime(60);
            room451.btnclick("stall1");
            break;
        case "anal1":
            cl.nude();
            zcl.displayMain(-400, 800, .35, "", true);
            nav.bg("451_parkMensRoom/anal1.jpg");
            break;
        case "anal2":
            zcl.kill();
            nav.bg("451_parkMensRoom/anal2.jpg");
            break;
        case "anal3":
            nav.bg("451_parkMensRoom/anal3.jpg");
            break;
        case "anal4":
            nav.bg("451_parkMensRoom/anal4.jpg");
            break;
        case "anal5":
            nav.bg("451_parkMensRoom/anal5.jpg");
            zcl.displayMain(-200, 500, .18, "", true);
            break;
        case "anal6":
            cl.undo();
            char.settime(17, 5);
            g.sissy[17].ach = true;
            gv.set("oncase", null);
            char.room(451);
            break;
        case "ass1":
            nav.killall();
            nav.bg("451_parkMensRoom/ass1.jpg");
            break;
        case "ass2":
            nav.bg("451_parkMensRoom/ass2.jpg");
            break;
        case "ass3":
            gv.mod("money", 40);
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            char.addtime(60);
            room451.btnclick("stall1");
            break;
        case "ass4":
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            char.addtime(60);
            room451.btnclick("stall1");
            break;
        case "duo1":
            nav.killall();
            nav.bg("451_parkMensRoom/duo1.jpg");
            break;
        case "duo2":
            nav.bg("451_parkMensRoom/duo2.jpg");
            gv.mod("energy", -20);
            sc.modLevel("cecilia", 20, 999);
            if (sc.getMissionTask("cecilia", "gloryhole", 1).notStarted)
                sc.completeMissionTask("cecilia", "gloryhole", 1);
            levels.oral(4, true, false, "m", null, "unk");
            char.addtime(60);
            break;
        case "duo3":
            nav.killall();
            nav.bg("451_parkMensRoom/duo3.jpg");
            break;
        case "duo4":
            nav.bg("451_parkMensRoom/duo4.jpg");
            break;
        case "duo5":
            levels.anal(4, false, "m", true, null, "unk");
            gv.mod("energy", -20);
            sc.modLevel("cecilia", 20, 999);
            if (sc.getMissionTask("cecilia", "gloryhole", 1).notStarted)
                sc.completeMissionTask("cecilia", "gloryhole", 1);
            char.addtime(100);
            nav.bg("451_parkMensRoom/duo5.jpg");
            break;
        case "suck3":
            nav.button({
                "type": "img",
                "name": "icon_bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1002_quickfight/black20Alpha.png"
            }, 451);
            sc.select("gh_oral", "451_parkMensRoom/icon_suck.png", 10);
            sc.select("gh_anal", "451_parkMensRoom/icon_anal.png", 11);
            break;
        case "resetRoom":
            room451.btnclick("stall1");
            break;
        default:
            break;
    }
};

room451.chat = function (chatID) {
    if (chatID === 999) {
        let whore = levels.get("whore").l;
        if (g.rand(0, 10) > whore) {
            levels.mod("whore", 10);
            return {
                chatID: 999,
                speaker: "boy",
                text: "*scoff* I don't pay for sex. ",
                button: [
                    { chatID: -1, text: "Damn!", callback: "gloryholeEmpty" },
                ]
            };
        }
        g.internal.m = true;
        return {
            chatID: 999,
            speaker: "boy",
            text: "You're going to earn your money whore. ",
            button: [
                { chatID: -1, text: "Sweet! ", callback: "suck3" },
            ]
        };
    }
    else if (chatID === 998) {
        let money = g.rand(5, 10) + (levels.get("whore").l * 2);
        let moneyCel = g.rand(50, 75);
        if (money > moneyCel)
            money = moneyCel;
        gv.mod("money", money);
        nav.killbutton("gh_money");
        return {
            chatID: 998,
            speaker: "thinking",
            text: "Nice I got $" + money + "! ",
            button: [
                { chatID: -1, text: "...", callback: "resetRoom" },
            ]
        };
    }
    else if (chatID === 997) {
        let txt = [
            "Yummy! ",
            "He must eat a lot of pineapple, cause that was so sweet! ",
            "He must of come stright from the gym, 'cuase that cock tasted like sweat socks. ",
            "I am such a cock sucking slut! ",
            "I love cum soooo much! ",
            "I'm a dirty dirty slut. ",
            "I do love sucking a strange cock!",
            "I wonder if I knew that man...",
            "Why does sucking cock turn me on so much? ",
            "Nom nom nom!",
            "Sissies love cock more than other girls, that's why gloryholes always have a sissy on the inside. ",
            "Hi ho, hi ho, it's off to suck I go, with puffy lips, and sugar tits, hi ho, hi ho, i'a a ho",
            "I am the greatest cock sucker in the world! "
        ];
        return {
            chatID: 997,
            speaker: "thinking",
            text: txt[g.rand(0, txt.length)],
            button: [
                { chatID: -1, text: "...", callback: "resetRoom" },
            ]
        };
    }
    else if (chatID === 996) {
        let txt1 = [
            "Everytime I fart I feel a bit more cum leak down my leg. ",
            "I think I can feel their cum trying to swimming deeper into me.",
            "I love cum soooo much! ",
            "I'm a dirty dirty slut. ",
            "I do love shoving cocks up my bussy!",
            "I wonder if I knew that man...",
            "Why does anal feel so much better than regular sex? ",
            "If only " + sc.n("cecilia") + " was here to eat my drippy hole. ",
            "I wonder if it's possible to overdose on creampies? ",
            "Everyone should try anal, at least 500 times.",
            "Why am I so anally obsessed!",
            "My butt, my butt. Guys love a slut with a hungry butt!",
            "The best part of a creampie, is that I can have a warm snack later! ",
            "I wish I could just have a 100 men line up and fuck my bussy all day. "
        ];
        return {
            chatID: 996,
            speaker: "thinking",
            text: txt1[g.rand(0, txt1.length)],
            button: [
                { chatID: -1, text: "...", callback: "resetRoom" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "I can't go out like this. I need my " + g.internal + ". ",
                button: []
            },
            {
                chatID: 1,
                speaker: "me",
                text: "I'm not going to stick my dick in that...",
                button: []
            },
            {
                chatID: 2,
                speaker: "me",
                text: "I'm not going put my mouth there.",
                button: []
            },
            {
                chatID: 3,
                speaker: "me",
                text: "Looking good",
                button: [
                    { chatID: 4, text: "Clean your face", callback: "cleanface" },
                    { chatID: -1, text: "...", callback: "reloadRoom" }
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: "Looking good",
                button: [
                    { chatID: -1, text: "...", callback: "reloadRoom" }
                ]
            },
            {
                chatID: 5,
                speaker: "me",
                text: "It's locked. I guess someone is in there.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "cecilia",
                text: "Hey stanger, I love getting my mouth filled with cock. Can I suck yours?",
                button: [
                    { chatID: 8, text: "huh?", callback: "bj2" }
                ]
            },
            {
                chatID: 7,
                speaker: "cecilia",
                text: "Oh " + sc.n("me") + ", I'm so happy you're here. Want to shove you cock down my throat?",
                button: [
                    { chatID: 8, text: "Hmmmm", callback: "bj2" }
                ]
            },
            {
                chatID: 8,
                speaker: "cecilia",
                text: "Shove it in, and don't be nice.",
                button: [
                    { chatID: -1, text: "Here it comes", callback: "bj3" },
                    { chatID: -1, text: "Oh, I'd rather not.", callback: "reloadRoom" }
                ]
            },
            {
                chatID: 9,
                speaker: "cecilia",
                text: "Awww you're all locked up. Maybe later cutie!",
                button: [
                    { chatID: -1, text: "I guess no blowjob for me.", callback: "reloadRoom" }
                ]
            },
            {
                chatID: 10,
                speaker: "cecilia",
                text: "GLUK GLUK GLUK",
                button: [
                    { chatID: 11, text: "Cum down her throat", callback: "bj8" }
                ]
            },
            {
                chatID: 11,
                speaker: "cecilia",
                text: "!!!",
                button: [
                    { chatID: -1, text: "....", callback: "bj9" }
                ]
            },
            {
                chatID: 12,
                speaker: "cecilia",
                text: "GULP",
                button: [
                    { chatID: 13, text: "....", callback: "bj10" }
                ]
            },
            {
                chatID: 13,
                speaker: "cecilia",
                text: "I love you cum! Thank you sexy!",
                button: [
                    { chatID: -1, text: "[Finish up]", callback: "bj11" }
                ]
            },
            {
                chatID: 14,
                speaker: "cecilia",
                text: sc.n("me") + "! Get in here you slut!",
                button: [
                    { chatID: -1, text: "Enter the stall", callback: "enterstall" }
                ]
            },
            {
                chatID: 15,
                speaker: "cecilia",
                text: "Welcome to my stall you big slut! I've always wanted to have " +
                    "some dirty toilet gloryhole with a sissy friend! ",
                button: [
                    { chatID: 16, text: "Me too!", callback: "gc1" }
                ]
            },
            {
                chatID: 16,
                speaker: "cecilia",
                text: "Oh look a cock! It's so yummy and thick... Oh yeah, I forgot you wanted to suck that cock. Sorry I got " +
                    "so cock hungry I forgot you were here. You go ahead and suck that. It's easy start by licking the tip!",
                button: [
                    { chatID: -1, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "I feel like such a confused dirty girl. What am I doing? Why am I about to suck some stanger's cock? I've really lost my mind. I'm so glad " +
                    sc.n("cecilia") + "'s here to support me, but really maybe I should go...",
                button: [
                    { chatID: 18, text: "...", callback: "c3" }
                ]
            },
            {
                chatID: 18,
                speaker: "cecilia",
                text: "You are so lucky! That really is a beautiful cock! " +
                    "Lick the tip sweetie. Taste it. ",
                button: [
                    { chatID: 19, text: "Mmmmm", callback: "c4" }
                ]
            },
            {
                chatID: 19,
                speaker: "thinking",
                text: "MMMmmm that does taste plump and yummy. Wait what am I thinking. " +
                    "Forget it! I'm going to suck this strage cock! I can't let " +
                    sc.n("cecilia") + " down. ",
                button: [
                    { chatID: 20, text: "...", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "cecilia",
                text: "Oh yeah! Make love to that cock! Take the tip into your mouth!",
                button: [
                    { chatID: 21, text: "...", callback: "c5" }
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "I feel like my jaw is going to fall off. It's so thick! If she wasn't " +
                    "here I don't think I could make myself take this cock in my mouth. I guess " +
                    "I'll see how deep I can go.",
                button: [
                    { chatID: 57, text: "...", callback: "c6" }
                ]
            },
            {
                chatID: 22,
                speaker: "thinking",
                text: "I can feel my throat strech with each thrust. Must not show how " +
                    "uncomfortable I am! Must take that cock till he blows! I AM A SISSY! ",
                button: [
                    { chatID: 23, text: "Swallow like a sissy!", callback: "c8_s" },
                    { chatID: 26, text: "Take the facial", callback: "c8_f" }
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "I feel his load flowing down my slutty throat...",
                button: [
                    { chatID: 24, text: "*glug*", callback: "c9_s" }
                ]
            },
            {
                chatID: 24,
                speaker: "cecilia",
                text: "You slut! I love you, you hungry cock whore! We're going to be great friends!",
                button: [
                    { chatID: 25, text: "*pant pant*", callback: "enterstall" }
                ]
            },
            {
                chatID: 25,
                speaker: "cecilia",
                text: "That was awesome! Feel free to use my glory hole anytime. Just be careful that fat cop likes to come " +
                    "in and bust me! We can take more cock if you want. ",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "endgc1" }
                ]
            },
            {
                chatID: 26,
                speaker: "cecilia",
                text: "Awwww you didn't swallow, what a waste of yummy cummy!",
                button: [
                    { chatID: 25, text: "Gack spit cough", callback: "enterstall" }
                ]
            },
            {
                chatID: 27,
                speaker: "cecilia",
                text: "Mmmmmm ",
                button: [
                    { chatID: 44, text: "*lick*", callback: "duo2" }
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "Should I wait around and suck some stange cock?",
                button: [
                    { chatID: -1, text: "Yes, feed me the cum!", callback: "suck1" },
                    { chatID: -1, text: "No", callback: "reset" }

                ]
            },
            {
                chatID: 29,
                speaker: "me",
                text: "The park's closed. No one is coming in.",
                button: [
                    { chatID: -1, text: "Give Up", callback: "reset" }
                ]
            },
            {
                chatID: 30,
                speaker: "cop",
                text: "Ok sick-o. I've received calls on someone blowing stangers in this bathroom. Time to go.",
                button: [
                    { chatID: -1, text: "Get arrested for being a pervert", callback: "arrest" }
                ]
            },
            {
                chatID: 31,
                speaker: "me",
                text: "Hmmm no one around... Guess I might have to wait a bit. ",
                button: [
                    { chatID: -1, text: "Wait", callback: "gloryholeEmpty" }
                ]
            },
            {
                chatID: 32,
                speaker: "me",
                text: "Oh, a cock!",
                button: [
                    { chatID: 33, text: "Suck it", callback: "suckit1" },
                    { chatID: -1, text: "Pass", callback: "resetStall1" }
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "He's going to blow!",
                button: [
                    { chatID: 34, text: "Swallow", callback: "suckit2" },
                    { chatID: 34, text: "Spit", callback: "suckit3" }
                ]
            },
            {
                chatID: 34,
                speaker: "thinking",
                text: "...",
                button: [
                    { chatID: -1, text: "Take the money", callback: "suckit4" },
                    { chatID: -1, text: "A true sissy does it for free", callback: "suckit5" }
                ]
            },
            {
                chatID: 35,
                speaker: "cecilia",
                text: "MMMmmmmmmm",
                button: [
                    { chatID: 36, text: "I'm here to take that cock in my ass! ", callback: "anal1" },
                    { chatID: 36, text: "Oh, hi. I was told to come down here ", callback: "anal1" },
                ]
            },
            {
                chatID: 36,
                speaker: "cecilia",
                text: "Well get over here slut! This is the perfect cock for that ass!  ",
                button: [
                    { chatID: 37, text: "Yes!", callback: "anal2" },
                ]
            },
            {
                chatID: 37,
                speaker: "cecilia",
                text: "That looks yummy. I want a taste.",
                button: [
                    { chatID: 38, text: "Ooooooo MMmmmMMmmm", callback: "anal3" },
                ]
            },
            {
                chatID: 38,
                speaker: "cecilia",
                text: "MMmmmm. Gimme that man cock!",
                button: [
                    { chatID: 39, text: "Oh fuck, oh fuck. This feels so good!", callback: "anal4" },
                ]
            },
            {
                chatID: 39,
                speaker: "cecilia",
                text: "Nom nom nom! ",
                button: [
                    { chatID: 40, text: "FFFuuuuuuuu", callback: "anal5" },
                ]
            },
            {
                chatID: 40,
                speaker: "cecilia",
                text: "Isn't taking anonymous cocks in the ass the best! Feel free to play more with or without me you slut!",
                button: [
                    { chatID: -1, text: "Oh yeah!", callback: "anal6" },
                ]
            },
            {
                chatID: 41,
                speaker: "me",
                text: "Oh, a cock!",
                button: [
                    { chatID: 33, text: "Suck it", callback: "suckit1" },
                    { chatID: 42, text: "Shove it in your ass", callback: "ass1" },
                    { chatID: -1, text: "Pass", callback: "resetStall1" }
                ]
            },
            {
                chatID: 42,
                speaker: "thinking",
                text: "I love taking a strager's cock in my ass! ",
                button: [
                    { chatID: 43, text: "...", callback: "ass2" }
                ]
            },
            {
                chatID: 43,
                speaker: "thinking",
                text: "I am a sloppy bitch! ",
                button: [
                    { chatID: -1, text: "Take the money", callback: "ass3" },
                    { chatID: -1, text: "A true sissy does it for free", callback: "ass4" }
                ]
            },
            {
                chatID: 44,
                speaker: "cecilia",
                text: "Hot!",
                button: [
                    { chatID: -1, text: "*drool*", callback: "enterstall" }
                ]
            },
            {
                chatID: 45,
                speaker: "cecilia",
                text: "Shall we blow him?",
                button: [
                    { chatID: 27, text: "Blow job!", callback: "duo1" },
                ]
            },
            {
                chatID: 46,
                speaker: "cecilia",
                text: "Shall we blow him, or shove it up our asses?",
                button: [
                    { chatID: 27, text: "Blow job!", callback: "duo1" },
                    { chatID: 47, text: "Anal!", callback: "duo3" },
                ]
            },
            {
                chatID: 47,
                speaker: "cecilia",
                text: "OOoo that's deep!",
                button: [
                    { chatID: 48, text: "*lick*", callback: "duo4" },
                ]
            },
            {
                chatID: 48,
                speaker: "me",
                text: "Oh fuck that's big!",
                button: [
                    { chatID: 49, text: "*suck*", callback: "duo5" },
                ]
            },
            {
                chatID: 49,
                speaker: "cecilia",
                text: "*lick* YUM!",
                button: [
                    { chatID: -1, text: "MMmmm", callback: "enterstall" },
                ]
            },
            {
                chatID: 50,
                speaker: "random",
                text: "You better back off of a man while he's pissin' or you're liable to get a fist to your face there partner",
                button: [
                    { chatID: -1, text: "oh. Sorry. ", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "thinking",
                text: "Just pissing in the toilet with my massive dong. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 52,
                speaker: "thinking",
                text: "I don't need to pee. I better hydrate. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "thinking",
                text: "I better sit down to pee. Don't want to get in trouble.  ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "random",
                text: "What the hell dude? Get out I'm taking a shit here.   ",
                button: [
                    { chatID: -1, text: "Oh. Whoops", callback: "reset" },
                ]
            },
            {
                chatID: 55,
                speaker: "thinking",
                text: "Now to find that USB drive...",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 56,
                speaker: "thinking",
                text: "Got it. Now to bring it back to Missy. I wonder what's on it. Kind of weird it was left in the men's " +
                    "bathroom. Maybe I could plug it into my PC and take a peek. There's no way she'll know I had a peek. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 57,
                speaker: "cecilia",
                text: "YES! You deep throating slut! Fuck his cock with your face! You " +
                    "are officially my new best friend! ",
                button: [
                    { chatID: 22, text: "[Fuck your own face]", callback: "c7" },
                ]
            },
            {
                chatID: 58,
                speaker: "cecilia",
                text: "Sorry, I promised the Cum gang I would be the center of their " +
                    "gang bang. It's pretty rough crowd. I leave there smelling of piss, " +
                    "beer, cum, and musk and a bussy that doesn't close for a day. I " +
                    "would invite you, but it's a very private party. ",
                button: [
                    { chatID: -1, text: "Awww. ok. ", callback: "resetRoom" },
                ]
            },
            {
                chatID: 59,
                speaker: "thinking",
                text: "Awww crap. Is that a police baton?",
                button: [
                    { chatID: 60, text: "...", callback: "busted" },
                ]
            },
            {
                chatID: 60,
                speaker: "cop2",
                text: "Sucking dick in the park after dark are we girly man? C'mon with " +
                    "with me. I've got a place for offenders like you. ",
                button: [
                    { chatID: -1, text: "fuck", callback: "arrest" },
                ]
            },
            {
                chatID: 61,
                speaker: "thinking",
                text: "I do love a cock! ",
                button: [
                    { chatID: -1, text: "Do it for free like a true sissy", callback: "suck3" },
                    { chatID: 999, text: "Ask for money", callback: "" },
                ]
            },
            {
                chatID: 62,
                speaker: "cop2",
                text: "I do love a cock! ",
                button: [
                    { chatID: -1, text: "[Need to unlock Whore to ask for money]", callback: "suck3" },
                ]
            },
            {
                chatID: 63,
                speaker: "thinking",
                text: "I do love a cock, but I'm too tired to suck dick right now. ",
                button: [
                    { chatID: -1, text: "[Need 20 energy]", callback: "resetRoom" },
                ]
            },
            {
                chatID: 64,
                speaker: "thinking",
                text: "That cock is too big for my tiny little mouth. I need to work " +
                    "on my blow job skills.",
                button: [
                    { chatID: -1, text: "...", callback: "resetRoom" },
                ]
            },
            {
                chatID: 65,
                speaker: "thinking",
                text: "That cock is too big for my tiny little hole. I need to work " +
                    "on my anal skills.",
                button: [
                    { chatID: -1, text: "...", callback: "resetRoom" },
                ]
            },
            {
                chatID: 66,
                speaker: "thinking",
                text: "I do love a cock, but I'm too tired to play right now. ",
                button: [
                    { chatID: -1, text: "[Need 20 energy]", callback: "" },
                ]
            },
        ];
        return cArray[chatID];
    }
};
