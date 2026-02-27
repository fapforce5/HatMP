//posters go up around town - raises fame
var room486 = {};
room486.main = function () {
    if (g.pass === null || g.pass === "") {
        nav.bg("486_game/a_entrance.webp");
        nav.button({
            "type": "zhand",
            "name": "startgreen",
            "left": 1156,
            "top": 444,
            "width": 94,
            "height": 102,
            "image": "486_game/greenbutton.webp"
        }, 486);
        nav.button({
            "type": "zhand",
            "name": "nodoor",
            "left": 1627,
            "top": 408,
            "width": 220,
            "height": 541,
            "image": "486_game/a_entrance_no.webp"
        }, 486);
        sc.select("leave", "316_livingroom/icon_leave.png", -2);
    }
    else if (g.pass === "endSleepyTime") {
        nav.bg("486_game/r0.webp");
        nav.button({
            "type": "zhand",
            "name": "masknobegin0",
            "left": 1398,
            "top": 463,
            "width": 100,
            "height": 180,
            "image": "486_game/m0.webp"
        }, 486);
        nav.button({
            "type": "hand",
            "name": "redbuttonbegin",
            "left": 852,
            "top": 444,
            "width": 94,
            "height": 102,
            "image": "486_game/redbutton.webp"
        }, 486);
        nav.button({
            "type": "zhand",
            "name": "greenbutton_no",
            "left": 1156,
            "top": 444,
            "width": 94,
            "height": 102,
            "image": "486_game/greenbuttonx.webp"
        }, 486);
    }
    else if (g.pass === "beginTheGame486"){
        gv.mod("486gamecounter", 1);
        g.pass = {
            r: 0,
            a1: [],
            a2: [],
            inst: false,
            greenbutton: false,
            cum: 0,
            r1: null,
            r2: null,
            r3: null,
            r4: null,//nippleclip spank
            r5: null,//anal pain
            r6: null,//cum piss
            r7: null,//hole
            r8: null,
            r9: null,
            r10: null,
            r11: null,
            r12: null
        };

        nav.button({
            "type": "img",
            "name": "bg-door",
            "left": 672,
            "top": 158,
            "width": 703,
            "height": 604,
            "image": "486_game/r_openholder.webp"
        }, 486);
        room486.btnclick("drawbtns");
        nav.button({
            "type": "img",
            "name": "room0",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "486_game/room0.webp"
        }, 486);
        chat(0, 486);
    }
    else {
        levels.mod("fame", 5);
        g.pass.inst = false;
        g.pass.greenbutton = false;
        nav.bg("486_game/r" + g.pass.r + ".webp");
        nav.button({
            "type": "btn",
            "name": "bg-window",
            "left": 1585,
            "top": 207,
            "width": 335,
            "height": 605,
            "image": "486_game/w" + (g.pass.r < 2 ? 2 : g.pass.r) + ".webp"
        }, 486);
        nav.button({
            "type": "img",
            "name": "bg-door",
            "left": 672,
            "top": 158,
            "width": 703,
            "height": 604,
            "image": "486_game/r_openholder.webp"
        }, 486);
        room486.btnclick("drawbtns");
        room486.btnclick("initroom");
        if (g.pass.r > 3 && g.pass.r < 12) {
            if (g.pass.r6 !== null) {
                nav.button({
                    "type": "zimg",
                    "name": "roomDisplay",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/a6_" + g.pass.r6 + ".webp"
                }, 486);
                if (g.pass.r6 === "piss")
                    g.popUpNotice("I totally smell like piss");
                else
                    g.popUpNotice("I stink of old cum");
            }
            nav.button({
                "type": "zimg",
                "name": "roomDisplay",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/a_" + gender.pronoun("f") + ".webp"
            }, 486);
            if (g.pass.r5 !== null) {
                nav.button({
                    "type": "zimg",
                    "name": "roomDisplay",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/a5_" + g.pass.r5 + ".webp"
                }, 486);
            }
            if (g.pass.r > 7) {
                nav.button({
                    "type": "zimg",
                    "name": "roomDisplay",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/a7.webp"
                }, 486);
            }
            if (g.pass.r4 !== null) {
                if (g.pass.r4 === "spank") {
                    nav.button({
                        "type": "zimg",
                        "name": "roomDisplay",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "486_game/a4_1.webp"
                    }, 486);
                }
                else {
                    nav.button({
                        "type": "zimg",
                        "name": "roomDisplay",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "486_game/a4_" + gender.pronoun("f") + ".webp"
                    }, 486);
                    gv.mod("energy", -5);
                    g.popUpNotice("These nipple clamps really hurt! [-5 energy]");
                }
            }
            if (g.pass.r5 === "pain") {
                nav.button({
                    "type": "zimg",
                    "name": "roomDisplay",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/a5_drip.webp"
                }, 486);
                gv.mod("energy", -3);
                g.popUpNotice("Ouch! Candle wax dripped on my butt! [-3 energy]");
            }
            if (g.pass.r10 === "sh") {
                nav.button({
                    "type": "zimg",
                    "name": "roomDisplay",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/a10_sh.webp"
                }, 486);
                gv.mod("energy", -20);
                g.popUpNotice("OWOWOWOW! That plug just shocked by asshole! [-20 energy]");
            }
            else if (g.pass.r10 === "i") {
                nav.button({
                    "type": "zimg",
                    "name": "roomDisplay",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/a10_i.webp"
                }, 486);
                if (g.pass.r === 11) {
                    cl.c.buttplug = "i_1";
                    cl.display();
                    levels.mod("anal", 30);
                    g.popUpNotice("Oh no! That plug just inflated on it's own! I think my asshole is going to fall out!");
                }
            }
                
            if (g.pass.r === 4) {
                g.popUpNotice("I'm feeling so exposed infront of everyone! [-3 energy]"); 
            }
            nav.next("killroomDisplay");
        }
    }
};

room486.btnclick = function (name) {
    switch (name) {
        case "killroomDisplay":
            nav.killbutton("roomDisplay");
            nav.killbutton("killroomDisplay");
            break;
        case "redrawroom":
            nav.kill();
            nav.bg("486_game/r" + g.pass.r + ".webp");
            nav.button({
                "type": "btn",
                "name": "bg-window",
                "left": 1585,
                "top": 207,
                "width": 335,
                "height": 605,
                "image": "486_game/w" + (g.pass.r < 2 ? 2 : g.pass.r) + ".webp"
            }, 486);
            nav.button({
                "type": "img",
                "name": "bg-door",
                "left": 672,
                "top": 158,
                "width": 703,
                "height": 604,
                "image": "486_game/r_openholder.webp"
            }, 486);
            room486.btnclick("drawbtns");
            room486.btnclick("initroom");
            switch (g.pass.r) {
                case 1:
                    if (g.pass.inst &&  !g.pass.greenbutton) {
                        g.pass.inst = false;
                        room486.chatcatch("room1");
                    }
                    break;
                case 3:
                    if (g.pass.inst && !g.pass.greenbutton) {
                        g.pass.inst = false;
                        room486.chatcatch("room3");
                    }
                    break;
                case 4:
                    if (g.pass.inst && !g.pass.greenbutton) {
                        g.pass.inst = false;
                        room486.chatcatch("room4");
                    }
                    break;
                case 5:
                    if (g.pass.inst && !g.pass.greenbutton) {
                        g.pass.inst = false;
                        room486.chatcatch("room5");
                    }
                    break;
                case 6:
                    if (g.pass.inst && !g.pass.greenbutton) {
                        g.pass.inst = false;
                        room486.chatcatch("room6");
                    }
                    break;
                case 7:
                    if (g.pass.inst && !g.pass.greenbutton) {
                        g.pass.inst = false;
                        room486.chatcatch("room7");
                    }
                    break;
                case 9:
                    if (g.pass.inst && !g.pass.greenbutton) {
                        room486.chatcatch("room9redraw");
                    }
                    break;
            }
            break;
        case "drawbtns":
            nav.killbutton("mask");
            nav.killbutton("redbutton");
            nav.killbutton("greenbutton");
            nav.button({
                "type": "zhand",
                "name": "mask",
                "left": 1398,
                "top": 463,
                "width": 100,
                "height": 180,
                "image": "486_game/m" + g.pass.r + ".webp"
            }, 486);
            nav.killbutton("redbutton");
            nav.killbutton("greenbutton");
            nav.button({
                "type": "zhand",
                "name": "redbutton",
                "left": 852,
                "top": 444,
                "width": 94,
                "height": 102,
                "image": "486_game/redbutton.webp"
            }, 486);
            if (g.pass.greenbutton)
                nav.button({
                    "type": "zhand",
                    "name": "greenbutton",
                    "left": 1156,
                    "top": 444,
                    "width": 94,
                    "height": 102,
                    "image": "486_game/greenbutton.webp"
                }, 486);
            else
                nav.button({
                    "type": "zhand",
                    "name": "greenbutton",
                    "left": 1156,
                    "top": 444,
                    "width": 94,
                    "height": 102,
                    "image": "486_game/greenbuttonx.webp"
                }, 486);
            break;
        case "startgreen":
            if (future.get("486_nextevent") > -1) {
                chat(999, 486);
            }
            else {
                nav.killbutton("startgreen");
                nav.button({
                    "type": "img",
                    "name": "bg-door",
                    "left": 672,
                    "top": 158,
                    "width": 703,
                    "height": 604,
                    "image": "486_game/r_open.webp"
                }, 486);
                nav.killbutton("leave");
                sc.select("leave", "316_livingroom/icon_leave.png", -2);
                sc.select("enterstart", "486_game/icon_enter.webp", -1);
            }
            break;
        case "enterstart":
            nav.kill();
            nav.bg("486_game/r0.webp");
            nav.button({
                "type": "zhand",
                "name": "masknobegin",
                "left": 1398,
                "top": 463,
                "width": 100,
                "height": 180,
                "image": "486_game/m0.webp"
            }, 486);
            nav.button({
                "type": "hand",
                "name": "redbuttonbegin",
                "left": 852,
                "top": 444,
                "width": 94,
                "height": 102,
                "image": "486_game/redbutton.webp"
            }, 486);
            nav.button({
                "type": "zhand",
                "name": "greenbutton_no",
                "left": 1156,
                "top": 444,
                "width": 94,
                "height": 102,
                "image": "486_game/greenbuttonx.webp"
            }, 486);
            chat(44, 486);
            break;
        case "redbuttonbegin":
            chat(45, 486);
            break;
        case "masknobegin":
            chat(46, 486);
            break;
        case "masknobegin0":
            chat(47, 486);
            break;
        case "initroom":
            g.pass.temp = 0;
            switch (g.pass.r) {
                case 1: g.pass.temp = g.rand(0, 3); break;
                case 2:
                    nav.button({
                        "type": "grab",
                        "name": "room2",
                        "left": 968,
                        "top": 850,
                        "width": 129,
                        "height": 168,
                        "image": "486_game/room2.webp"
                    }, 486);
                    break;
                case 3: g.pass.temp = -1; break;
                case 4:
                    nav.button({
                        "type": "clickthrough",
                        "name": "room4",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "486_game/room4.webp"
                    }, 486);
                    break;
                case 5:
                    nav.button({
                        "type": "clickthrough",
                        "name": "room5",
                        "left": 897,
                        "top": 937,
                        "width": 235,
                        "height": 45,
                        "image": "486_game/room5.webp"
                    }, 486);
                    break;
                case 7:
                    nav.button({
                        "type": "zclickthrough",
                        "name": "room7",
                        "left": 449,
                        "top": 344,
                        "width": 1182,
                        "height": 736,
                        "image": "486_game/room7.webp"
                    }, 486);
                    zcl.displayMain(600, 900, .065, "clothes", true);
                    break;
                case 8:
                    nav.button({
                        "type": "clickthrough",
                        "name": "room7",
                        "left": 706,
                        "top": 826,
                        "width": 642,
                        "height": 242,
                        "image": "486_game/room8.webp"
                    }, 486);
                    break;
                case 9:
                    if (!g.pass.inst) {
                        g.internal = {
                            bucket: 0,
                            s: null,
                            c: [null, null, null, null, null]
                        };
                    }
                    nav.bg("486_game/room9bg.webp");
                    nav.button({
                        "type": "btn",
                        "name": "room9bucket",
                        "left": 1516,
                        "top": 807,
                        "width": 112,
                        "height": 111,
                        "image": "486_game/room9_bucket.webp"
                    }, 486);
                    break;
                case 10:
                    nav.button({
                        "type": "img",
                        "name": "room10_0a",
                        "left": 483,
                        "top": 0,
                        "width": 527,
                        "height": 1080,
                        "image": "486_game/room10_0.webp"
                    }, 486);
                    nav.button({
                        "type": "img",
                        "name": "room10_1a",
                        "left": 1039,
                        "top": 0,
                        "width": 527,
                        "height": 1080,
                        "image": "486_game/room10_1.webp"
                    }, 486);
                    nav.button({
                        "type": "grab",
                        "name": "room10_0",
                        "left": 717,
                        "top": 710,
                        "width": 101,
                        "height": 102,
                        "image": "486_game/room10_btn.webp"
                    }, 486);
                    nav.button({
                        "type": "grab",
                        "name": "room10_1",
                        "left": 1271,
                        "top": 710,
                        "width": 101,
                        "height": 102,
                        "image": "486_game/room10_btn.webp"
                    }, 486);
                    if (g.pass.r10 === "i") {
                        nav.modbutton("room10_1a", "486_game/room10_1_out.webp", null, null)
                        nav.killbutton("room10_1");
                        nav.killbutton("room10_0");
                    }
                    else if (g.pass.r10 === "sh") {
                        nav.modbutton("room10_0a", "486_game/room10_0_out.webp", null, null)
                        nav.killbutton("room10_1");
                        nav.killbutton("room10_0");
                    }
                    break;
                case 11:
                    nav.button({
                        "type": "tongue",
                        "name": "room11_0",
                        "left": 130,
                        "top": 213,
                        "width": 610,
                        "height": 850,
                        "image": "486_game/room11_0.webp"
                    }, 486);
                    nav.button({
                        "type": "tongue",
                        "name": "room11_1",
                        "left": 1393,
                        "top": 82,
                        "width": 527,
                        "height": 987,
                        "image": "486_game/room11_1.webp"
                    }, 486);
                    break;
                case 12:
                    nav.kill();
                    nav.bg("486_game/room12_0.webp");
                    chat(36, 486);
                    break;
            }
            break;
        case "mask":
            switch (g.pass.r) {
                case 0: chat(5, 486); break;
                case 1: chat(1001, 486); break;
                case 2: chat(1002, 486); break;
                case 3: chat(1003, 486); break;
                case 4: chat(1004, 486); break;
                case 5: chat(1005, 486); break;
                case 6: chat(1006, 486); break;
                case 7: chat(1007, 486); break;
                case 8: chat(1008, 486); break;
                case 9: chat(1009, 486); break;
                case 10: chat(10010, 486); break;
                case 11: chat(10011, 486); break;
                case 12: chat(10012, 486); break;
            }
            break;
        case "redbutton":
            chat(48, 486);
            break;
        case "greenbutton":
            if (g.pass.greenbutton) {
                if (gv.get("energy") < 1) {
                    chat(50, 486);
                    return;
                }
                nav.killbutton("redbutton");
                nav.killbutton("greenbutton");
                nav.modbutton("mask", "486_game/m" + g.pass.r + ".webp", null, "img");
                nav.modbutton("bg-door", "486_game/r_open.webp", null, null);
                g.roomTimeout = setTimeout(function () {
                    g.pass.r++;
                    char.room(486);
                }, 1200);
            }
            else {
                if (g.pass.r === 0)
                    chat(5, 486);
                else
                    chat(7, 486);
            }
            break;
        case "nodoor":
            chat(43, 486);
            break;
        case "room1":
            nav.killbutton("room1");
            chat(1011, 486);
            break;
        case "room2":
            if (!g.pass.inst) {
                chat(8, 486);
            }
            else if (!g.pass.greenbutton) {
                nav.modbutton("room2", "486_game/room2a.webp", null, "img");
                cl.nude();
                nav.button({
                    "type": "img",
                    "name": "me",
                    "left": 270,
                    "top": 271,
                    "width": 302,
                    "height": 809,
                    "image": "486_game/room2_" + gender.pronoun("f") + ".webp"
                }, 486);
                room486.chatcatch("greenbuttonON");
                chat(9, 486);
            }
            break;
        case "room3_0":
            nav.killbutton("room3_0");
            nav.killbutton("room3_1");
            zcl.assup(800, 1200, .3, "", false);
            room486.chatcatch("greenbuttonON");
            g.pass.temp = 0;
            chat(11, 486);
            break;
        case "room3_1":
            nav.killbutton("room3_0");
            nav.killbutton("room3_1");
            room486.chatcatch("greenbuttonON");
            nav.button({
                "type": "img",
                "name": "me",
                "left": 950,
                "top": 408,
                "width": 546,
                "height": 672,
                "image": "486_game/room3_" + gender.pronoun("f") + ".webp"
            }, 486);
            g.pass.temp = 1;
            chat(12, 486);
            break;
        case "room4_0":
            nav.killbutton("room4_0");
            nav.killbutton("room4_1");
            g.pass.r4 = "spank";
            chat(13, 486);
            break;
        case "room4_1":
            nav.killbutton("room4_0");
            nav.killbutton("room4_1");
            chat(14, 486);
            break;
        case "room4_2":
            nav.kill();
            nav.bg("486_game/room4_0_2_" + gender.pronoun("f") + ".webp");
            chat(16, 486);
            break;
        case "room5_0":
            g.pass.r5 = "anal";
            room486.btnclick("5_2");
            break;
        case "room5_1":
            g.pass.r5 = "pain";
            room486.btnclick("5_2");
            break;
        case "5_2":
            nav.killbutton("room5_0");
            nav.killbutton("room5_1");
            nav.button({
                "type": "clickthrough",
                "name": "me",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/room50.webp"
            }, 486);
            if (g.pass.r4 === "spank") {
                nav.button({
                    "type": "clickthrough",
                    "name": "me",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/room51.webp"
                }, 486);
            }
            nav.button({
                "type": "clickthrough",
                "name": "me",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/room5" + (g.pass.r5 === "anal" ? "2" : "3") + ".webp"
            }, 486);
            chat(10051, 486);
            break;
        case "room6_0":
            levels.mod("piss", 20);
            nav.killbutton("room6_0");
            nav.killbutton("room6_1");
            g.pass.r6 = "piss";
            nav.button({
                "type": "clickthrough",
                "name": "r6",
                "left": 902,
                "top": 0,
                "width": 324,
                "height": 753,
                "image": "486_game/room6_0.webp"
            }, 486);
            nav.next("room6_01");
            break;
        case "room6_1":
            levels.mod("cum", 20);
            nav.killbutton("room6_0");
            nav.killbutton("room6_1");
            g.pass.r6 = "cum";
            cl.c.cumface = true;
            nav.button({
                "type": "clickthrough",
                "name": "r6",
                "left": 902,
                "top": 0,
                "width": 324,
                "height": 753,
                "image": "486_game/room6_1.webp"
            }, 486);
            nav.next("room6_11");
            break;
        case "room6_01":
        case "room6_11":
            zcl.kill();
            nav.killbutton("room6_01");
            nav.killbutton("room6_11");
            nav.killbutton("r6");
            nav.button({
                "type": "clickthrough",
                "name": "r6",
                "left": 789,
                "top": 802,
                "width": 444,
                "height": 229,
                "image": "486_game/" + name + ".webp"
            }, 486);
            room486.chatcatch("greenbuttonON");
            chat(10061, 486);
            break;
        case "room7":
            nav.kill();
            nav.bg("486_game/room7_0_" + gender.pronoun("f") + ".webp");
            if (levels.oralTake(5).canTake) {
                chat(20, 486);
            }
            else {
                g.pass.inst = false;
                chat(26, 486);
            }
            break;
        case "room8_0":
            nav.killbutton("room8_0");
            nav.killbutton("room8_1");
            if (g.rand(0, 2) === 0) {
                pil = levels.get("pi");
                if (pil.l < 1)
                    pil.l = 1;
                levels.set("pi", 0, pil.l - 1);
                g.popUpNotice("You have become dumber");
                chat(24, 486);
            }
            else {
                pil = levels.get("strength");
                if (pil.l < 1)
                    pil.l = 1;
                levels.set("strength", 0, pil.l - 1);
                g.popUpNotice("You have become weaker");
                chat(25, 486);
            }
            room486.chatcatch("greenbuttonON");
            break;
        case "room8_1":
            nav.killbutton("room8_0");
            nav.killbutton("room8_1");
            var room8_1trans = false;
            if (cl.c.cock < 4) {
                cl.c.cock++;
                nav.button({
                    "type": "zimg",
                    "name": "hypno",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "28_transformation/cock_" + cl.c.cock + ".gif"
                }, 486);
                room8_1trans = true;
            }
            else if (cl.c.leg < 3) {
                cl.c.leg++;
                nav.button({
                    "type": "zimg",
                    "name": "hypno",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "28_transformation/leg_" + cl.c.leg + ".gif"
                }, 486);
                room8_1trans = true;
            }
            else if (cl.c.chest < 3) {
                cl.c.chest++;
                nav.button({
                    "type": "zimg",
                    "name": "hypno",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "28_transformation/chest_" + cl.c.chest + ".gif"
                }, 486);
                room8_1trans = true;
            }
            else if (cl.c.leg < 5) {
                cl.c.leg++;
                nav.button({
                    "type": "zimg",
                    "name": "hypno",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "28_transformation/leg_" + cl.c.leg + ".gif"
                }, 486);
                room8_1trans = true;
            }
            else if (cl.c.chest < 6) {
                cl.c.chest++;
                nav.button({
                    "type": "zimg",
                    "name": "hypno",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "28_transformation/chest_" + cl.c.chest + ".gif"
                }, 486);
                room8_1trans = true;
            }
            else if (cl.c.lips < 2) {
                cl.c.lips++;
                nav.button({
                    "type": "zimg",
                    "name": "hypno",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "28_transformation/lip_" + cl.c.lips + ".gif"
                }, 486);
                room8_1trans = true;
            }

            if (room8_1trans) {
                cl.display();
                g.roomTimeout = setTimeout(function () {
                    nav.killbutton("hypno");
                    chat(28, 486);
                }, 6000);
            }
            else {
                chat(29, 486);
            }
            break;
        case "room9bucket":
            chat(10091, 486);
            break;
        case "room9c0":
        case "room9c1":
        case "room9c2":
        case "room9c3":
        case "room9c4":
            var room9c = parseInt(name.replace("room9c", ""));
            if (g.internal.c[room9c] === null) {
                g.popUpNotice("There's no cock there, dumb ass.");
                return;
            }
            nav.kill();
            g.internal.s = room9c;
            nav.bg("486_game/room9d_" + g.internal.s.toString() + g.internal.c[g.internal.s].toString() + ".webp");
            zcl.bj(0, 900, 1, "", false);
            sc.select("icon_room9suck", "451_parkMensRoom/icon_suck.png", -2);
            sc.select("icon_room9anal", "451_parkMensRoom/icon_anal.png", -1);
            break;
        case "icon_room9suck":
            nav.kill();
            nav.bg("486_game/room9e_" + g.internal.s.toString() + g.internal.c[g.internal.s].toString() + ".webp");
            zcl.double(0, 320, 1.1, "open", false);
            fame.moanAnimate("center");
            sc.select("icon_room9suck1", "486_game/icon_r9_oral.webp", -2);
            break;
        case "icon_room9anal":
            nav.kill();
            nav.bg("486_game/room9e_" + g.internal.s.toString() + g.internal.c[g.internal.s].toString() + ".webp");
            zcl.hanging(0, 300, 1.2, "", true);
            fame.moanAnimate("right");
            sc.select("icon_room9anal1", "486_game/icon_r9_anal.webp", -2);
            break;
        case "icon_room9suck1":
            nav.kill();
            fame.moanAnimateStop();
            sc.select("icon_room9oral2", "486_game/icon_r9_fillbucket.webp", -2);
            nav.bg("486_game/room9f_" + g.internal.s.toString() + g.internal.c[g.internal.s].toString() + ".webp");
            levels.oral(3, "m", "!man", false, null, true);
            zcl.bj(0, 900, 1, "cummouth", false);
            break;
        case "icon_room9anal1":
            nav.killbutton("icon_room9anal1");
            nav.button({
                "type": "img",
                "name": "room9bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/room9anal1.webp"
            }, 486);
            levels.anal(3, false, "m", true, "!man");
            sc.select("icon_room9anal2", "486_game/icon_r9_fillbucket.webp", -2);
            break;
        case "icon_room9anal2":
            fame.moanAnimateStop();
            nav.killbutton("icon_room9anal2");
            room486.btnclick("window_draw");
            g.internal.bucket += gv.getButtCum().total;
            gv.clearButtCum();
            room486.btnclick("room9bucket_draw");
            nav.button({
                "type": "img",
                "name": "room9bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/room9_cumanal_" + gender.pronoun("f") + ".webp"
            }, 486);
            sc.select("icon_r9_nextcock", "486_game/icon_r9_nextcock.webp", -2); 
            break;
        case "icon_room9oral2":
            fame.moanAnimateStop();
            nav.killbutton("icon_room9anal2");
            room486.btnclick("window_draw");
            g.internal.bucket++;
            room486.btnclick("room9bucket_draw");
            nav.button({
                "type": "img",
                "name": "room9bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/room9_cumoral_" + gender.pronoun("f") + ".webp"
            }, 486);
            sc.select("icon_r9_nextcock", "486_game/icon_r9_nextcock.webp", -2); 
            break;
        case "icon_r9_nextcock":
            if (g.internal.bucket > 6) {
                g.pass.greenbutton = true;
            }
            room486.btnclick("redrawroom"); 
            break;
        case "room9bucket_draw":
            if (g.internal.bucket > 7) {
                g.internal.bucket = 7;
            }
            nav.button({
                "type": "img",
                "name": "room9bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/room9_bucket" + (g.internal.bucket - 4 < 0 ? 0 : (g.internal.bucket - 4)) + ".webp"
            }, 486);
            break;
        case "bg-window":
            room486.btnclick("window_draw");
            nav.back("redrawroom");
            break;
        case "window_draw":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "room9bg_window",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/w_bg" + (g.pass.r < 2 ? 2 : g.pass.r)+ ".webp"
            }, 486);
            break;
        case "room10_0":
            if (!g.pass.inst) {
                chat(32, 486);
            }
            else {
                nav.killbutton("room10_0");
                nav.killbutton("room10_1");
                nav.modbutton("room10_0a", "486_game/room10_0_out.webp", null, null);
                cl.c.buttplug = "sh";
                cl.add("buttplug", "sh");
                g.pass.r10 = "sh";
                nav.button({
                    "type": "img",
                    "name": "room10_kill",
                    "left": 641,
                    "top": 149,
                    "width": 700,
                    "height": 704,
                    "image": "486_game/room10_0d.webp"
                }, 486);
                chat(33, 486);
            }
            break;
        case "room10_1":
            if (!g.pass.inst) {
                chat(32, 486);
            }
            else {
                cl.c.buttplug = "i";
                cl.add("buttplug", "i");
                nav.killbutton("room10_0");
                nav.killbutton("room10_1");
                nav.modbutton("room10_1a", "486_game/room10_1_out.webp", null, null);
                g.pass.r10 = "i";
                nav.button({
                    "type": "img",
                    "name": "room10_kill",
                    "left": 641,
                    "top": 149,
                    "width": 700,
                    "height": 704,
                    "image": "486_game/room10_1d.webp"
                }, 486);
                chat(33, 486);
            }
            break;
        case "room11_0":
            if (g.pass.inst && !g.pass.greenbutton) {
                g.pass.r11 = 0;
                g.internal = 0;
                nav.kill();
                nav.killbutton("room11_0");
                nav.killbutton("room11_1");
                nav.button({
                    "type": "img",
                    "name": "bg-window",
                    "left": 1585,
                    "top": 207,
                    "width": 335,
                    "height": 605,
                    "image": "486_game/w" + (g.pass.r < 2 ? 2 : g.pass.r) + ".webp"
                }, 486);
                nav.button({
                    "type": "zimg",
                    "name": "room11_kill",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/room11_0b.webp"
                }, 486);
                nav.button({
                    "type": "ztongue",
                    "name": "room11_lick",
                    "left": 957,
                    "top": 347,
                    "width": 202,
                    "height": 202,
                    "image": "486_game/room11_box.webp"
                }, 486);
            }
            else {
                chat(35, 486);
            }
            break;
        case "room11_1":
            if (g.pass.inst && !g.pass.greenbutton ) {
                g.pass.r11 = 1;
                g.internal = 0;
                nav.kill();
                nav.killbutton("room11_0");
                nav.killbutton("room11_1");
                nav.button({
                    "type": "img",
                    "name": "bg-window",
                    "left": 1585,
                    "top": 207,
                    "width": 335,
                    "height": 605,
                    "image": "486_game/w" + (g.pass.r < 2 ? 2 : g.pass.r) + ".webp"
                }, 486);
                nav.button({
                    "type": "zimg",
                    "name": "room11_kill",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/room11_1b.webp"
                }, 486);
                nav.button({
                    "type": "ztongue",
                    "name": "room11_lick",
                    "left": 957,
                    "top": 347,
                    "width": 202,
                    "height": 202,
                    "image": "486_game/room11_box.webp"
                }, 486);
            }
            else {
                chat(35, 486);
            }
            break;
        case "room11_lick":
            if (g.internal === 0) {
                nav.button({
                    "type": "img",
                    "name": "room11_lickx",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/room11_c0.webp"
                }, 486);
            }
            else if (g.internal < 3) {
                nav.modbutton("room11_lickx", "486_game/room11_c" + g.internal + ".webp", null, null);
            }
            else {
                nav.killbutton("room11_lickx");
                nav.killbutton("room11_lick");
                nav.button({
                    "type": "zimg",
                    "name": "room11_lickx",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "486_game/room11_c3.webp"
                }, 486);
                setTimeout(function () {
                    nav.button({
                        "type": "zimg",
                        "name": "room11_lickx",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "14_motherRoom/white.jpg"
                    }, 486);
                    setTimeout(function () {
                        nav.killbutton("room11_lickx");
                        pic.add("12dd_" + g.pass.r11.toString() + gender.pronoun("f"));
                        chat(34, 486);
                    }, 400);
                }, 1200);
            }
            g.internal++;
            break;
        case "room12":
            if (g.internal === 4) {
                nav.bg("486_game/room12_" + g.internal + "_" + gender.pronoun("f") + ".webp");
            }
            else if (g.internal < 7) {
                levels.anal(3, false, "m", true, "!man");
                levels.anal(g.rand(2, 4), false, "m", true, "!man");
                levels.anal(g.rand(2, 4), false, "m", true, "!man");

                levels.oral(3, "m", "!man", true);
                levels.oral(g.rand(2, 4), "m", "!man", false);
                levels.oral(g.rand(2, 4), "m", "!man", true);
                nav.bg("486_game/room12_" + g.internal + ".webp");
            }
            else {
                nav.bg("486_game/room12_" + g.internal + ".webp");
                levels.oral(3, "n", "orchid", true);
                levels.oral(4, "n", "poppy", true);
                levels.anal(4, false, "n", true, "juniper");
                zcl.bellydown(610, 870, .23, "sad", false);
                nav.killbutton("room12");
                chat(40, 486);
            }
            g.internal++;
            break;
        case "room12_treasure":
            nav.killbutton("room12_treasure");
            nav.button({
                "type": "img",
                "name": "room12_treasure",
                "left": 1490,
                "top": 728,
                "width": 254,
                "height": 250,
                "image": "486_game/room12_treasure_empty.webp"
            }, 486);
            gv.mod("money", 2280);
            g.pass.r12 = true;
            break;
        case "room12_leave":
            if (g.pass.r12 === null) {
                chat(42, 486);
            }
            else {
                g.pass = null;
                future.add("486_nextevent", 7);
                char.room(475);
            }
            break;
        case "leave":
            char.room(475);
            break;
        default:
            break;
    }
};

room486.chatcatch = function (callback) {
    switch (callback) {
        case "room4_0_3":
        case "room4_0_5":
        case "room4_0_4":
        case "room12_1":
        case "room12_2":
        case "room12_3":
            nav.bg("486_game/" + callback + ".webp");
            break;
        case "room7_2":
            nav.bg("486_game/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "room0":
            nav.modbutton("room0", "486_game/room0_1.webp", null, null);
            g.setTimeout = setTimeout(function () {
                room486.chatcatch("greenbuttonON");
                nav.killbutton("room0");
            }, 1200);
            break;
        case "room1":
            if (!g.pass.inst) {
                zcl.displayMain(600, 950, .055, "clothes", true);
                sc.select("room1", "486_game/icon_r1_" + g.pass.temp + ".webp", 0);
            }
            g.pass.inst = true;
            break;
        case "room3":
            if (!g.pass.inst) {
                sc.select("room3_0", "486_game/icon_r3_0.webp", 0);
                sc.select("room3_1", "486_game/icon_r3_1.webp", 1);
            }
            g.pass.inst = true;
            break;
        case "room4":
            g.pass.inst = true;
            if (!g.pass.greenbutton) {
                nav.killbutton("room4_0");
                nav.killbutton("room4_1");
                sc.select("room4_0", "486_game/icon_r4_0.webp", 0);
                sc.select("room4_1", "486_game/icon_r4_1.webp", 1);
            }
            break;
        case "room4_1":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/room4_1_" + gender.pronoun("f") + ".webp"
            }, 486);
            g.pass.r4 = "nippleclip";
            break;
        case "room4_0":
            zcl.facedown(800, 850, .2, "", false);
            break;
        case "room4_2":
            nav.kill();
            nav.bg("486_game/room4_0_1.webp");
            nav.next("room4_2");
            break;
        case "room5":
            if (!g.pass.inst) {
                sc.select("room5_0", "486_game/icon_r5_0.webp", 0);
                sc.select("room5_1", "486_game/icon_r5_1.webp", 1);
            }
            g.pass.inst = true;
            break;
        case "room6":
            if (!g.pass.inst) {
                zcl.displayMain(600, 950, .055, "clothes", true);
                sc.select("room6_0", "486_game/icon_r6_0.webp", 0);
                sc.select("room6_1", "486_game/icon_r6_1.webp", 1);
            }
            g.pass.inst = true;
            break;
        case "room7":
            if (!g.pass.inst) {
                sc.select("room7", "486_game/icon_r7.webp", 0);
            }
            g.pass.inst = true;
            break;
        case "room7_1":
            nav.bg("486_game/" + callback + ".webp");
            if (levels.analSize(5).canTake) {
                chat(21, 486);
            }
            else {
                chat(27, 486);
                g.pass.inst = false;
            }
            break;
        case "room7_3":
            room486.chatcatch("greenbuttonON");
            room486.btnclick("redrawroom"); 
            gv.mod("energy", -15);
            levels.anal(5, false, "m", false, "!statue");
            levels.oral(5, "m", "!statue", false, null, true);
            nav.button({
                "type": "zclickthrough",
                "name": "room7",
                "left": 449,
                "top": 344,
                "width": 1182,
                "height": 736,
                "image": "486_game/room7.webp"
            }, 486);
            zcl.hanging(560, 865, .25, "", false);
            $(".room-img[data-name='zzz-clothing-kill']").addClass("room-zindex");
            break;
        case "room8":
            if (!g.pass.inst) {
                sc.select("room8_0", "486_game/icon_r8_0.webp", 0);
                sc.select("room8_1", "486_game/icon_r8_1.webp", 1);
            }
            g.pass.inst = true;
            break;
        case "room9":
            g.pass.inst = true;
            room486.btnclick("redrawroom"); 
            break;
        case "room9redraw":
            var room9CockCounter = 0;
            for (let i = 0; i < 5; i++) {
                switch (g.rand(0, 3)) {
                    case 0: g.internal.c[i] = 0; break;
                    case 1: g.internal.c[i] = 1; break;
                    default: g.internal.c[i] = null; break;
                }
            }
            for (let i = 0; i < 5; i++) {
                if (g.internal.c[i] === null) {
                    room9CockCounter++;
                }
            }

            if (room9CockCounter === 5) {
                g.internal.c[g.rand(0, 4)] = g.rand(0, 1);
            }
            for (let i = 0; i < 5; i++) {
                if (g.internal.c[i] !== null) {
                    nav.button({
                        "type": "clickthrough",
                        "name": "cock",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "486_game/room9c_" + i.toString() + g.internal.c[i].toString() + ".webp"
                    }, 486);
                }
            }
            for (let i = 0; i < 5; i++) {
                nav.button({
                    "type": "btn",
                    "name": "room9c" + (4 - i),
                    "left": 300 + (i * 210),
                    "top": 300,
                    "width": 200,
                    "height": 75,
                    "image": "486_game/room9b_" + i.toString() + ".webp"
                }, 486);
            }
            nav.button({
                "type": "btn",
                "name": "room9bucket",
                "left": 1516,
                "top": 807,
                "width": 112,
                "height": 111,
                "image": "486_game/room9_bucket.webp"
            }, 486);
            break;
        case "room10_redraw":
            cl.display();
            nav.killbutton("room10_kill");
            g.pass.greenbutton = true;
            room486.btnclick("redrawroom");
            break;
        case "room11":
            g.pass.inst = true;
            break;
        case "room11_end":
            g.pass.greenbutton = true;
            room486.btnclick("redrawroom");
            phone.build("phone_pic");
            break;
        case "room12_4":
            g.internal = 4;
            nav.next("room12");
            break;
        case "room12_end":
            nav.kill();
            nav.bg("486_game/room12_8.webp");
            nav.button({
                "type": "btn",
                "name": "room12_leave",
                "left": 669,
                "top": 155,
                "width": 709,
                "height": 573,
                "image": "486_game/room12_leave.webp"
            }, 486);
            nav.button({
                "type": "btn",
                "name": "room12_treasure",
                "left": 1490,
                "top": 728,
                "width": 254,
                "height": 250,
                "image": "486_game/room12_treasure.webp"
            }, 486);
            break;
        case "greenlightRedraw":
            g.pass.greenbutton = true;
            room486.btnclick("redrawroom");
            break;
        case "greenbuttonON":
            g.pass.greenbutton = true;
            room486.btnclick("drawbtns");
            break;
        case "redrawroom":
            room486.btnclick("redrawroom");
            break;
        case "sleep":
            g.pass = 486;
            char.room(28);
            break;
        case "waitbegin":
            char.settime(18, 47);
            g.pass = "beginTheGame486";
            char.room(486);
            break;
        case "leave":
            room486.btnclick("room12_leave");
            break;
        case "redbuttonquit":
            nav.button({
                "type": "zimg",
                "name": "kill",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "486_game/redbutton_quit.webp"
            }, 486);
            break;
        case "redbuttonEnd":
            char.addDays(1);
            char.settime(14, 57);
            if (sissy.st[21].ach) {
                g.pass = "redbutton";
                char.room(949);
            }
            else {
                if (m.fmap === null) {
                    m.createFmap();
                }
                outerLoop:
                for (let i = 0; i < m.fmap.length; i++) {
                    for (let j = 0; j < m.fmap[i].length; j++) {
                        if (m.fmap[i][j].used === "h") {
                            g.map.row = i;
                            g.map.col = j;
                            break outerLoop; // Stops the inner loop
                        }
                    }
                }
                m.fmap = null;
                cl.nude();
                g.pass = "room476_cross";
                char.room(476);
            }

            break;
        default:
            break;
    }
};

room486.chat = function (chatID) {
    let carray;
    if (chatID === 999) {
        let daysleft = future.get("486_nextevent");
        return {
            chatID: 0,
            speaker: "!ann",
            text: "The game has been played, the echoes fade slow<br/>" +
                "We've had our fun, now the quiet winds blow<br/>" +
                "Next new game waits, " + daysleft + " days to the line<br/>" +
                "A pause in the play, but the pull stays divine",
            button: [
                { chatID: -1, text: "Damn! I so wanted to get gangbanged again! ", callback: "" }
            ]
        };
    }
    else if (chatID === 1001) {
        carray = [
            "I really love penises in my butt. They tickle my fancy, I'm a slut!'",
            "I would lick anyone’s butt on command. Rim job ready, I’m your biggest fan!",
            "I'm a pee pee girl, wild and free. Golden showers just for me!"
        ];
        return {
            chatID: 0,
            speaker: "!ann",
            text: "This first room starts off light<br/> Shout the line with all your might! <br/>" +
                carray[g.pass.temp] +
                "<br/>Let the crowd hear clear and true<br/>Loud as thunder, that’s on you!<br/>",
            button: [
                { chatID: -1, text: "Shout the line? ", callback: "room1" }
            ]
        };
    }
    else if (chatID === 1011) {
        carray = [
            "I REALLY LOVE PENISES IN MY BUTT. THEY TICKLE MY FANCY, I'M A SLUT!",
            "I WOULD LICK ANYONE’S BUTT ON COMMAND. RIM JOB READY, I’M YOUR BIGGEST FAN!",
            "I'M A PEE PEE GIRL, WILD AND FREE. GOLDEN SHOWERS JUST FOR ME!"
        ];
        return {
            chatID: 0,
            speaker: "me",
            text: carray[g.pass.temp],
            button: [
                { chatID: -1, text: "...", callback: "greenbuttonON" }
            ]
        };
    }
    else if (chatID === 1002) {
        g.pass.inst = true;
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Now that you’ve boasted you’re a slut so bold,<br/>"+
                "Prove it to all, let the truth unfold.<br/>" +
                "Peel off your threads, every last stitch bare,<br/>" +
                "Drop all your clothes in the barrel there ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 1003) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Now the game truly begins, <br/>" +
                "Choices will test your skin. <br/>" +
                "Some sting and shame on the spot, <br/>" +
                "Others fester and rot.<br/>" +
                "Energy guards your fate <br/>" +
                "Pass the door, or seal your fate. ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 1004) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Pain is yours to pick and choose. <br/>Ten hard spanks in this room you’ll lose, <br/>" +
                "Or clip those nipples, bite the sting, <br/>Carry the ache through ev’ry thing!",
            button: [
                { chatID: -1, text: "...", callback: "room4" }
            ]
        };
    }
    else if (chatID === 10041) {
        gv.mod("energy", -4);
        let c10041 = [
            "ONE! OOooo. That butt's going to be red!",
            "TWO!!",
            "THREE... ooo that one looked like it really hurt1",
            "FOUR, " + gender.pronoun("she") + "'s screaming for more!",
            "FIVE, we're half way there. " + gender.pronoun("she") + "'s living on a prayer1!",
            "SIX!!",
            "SEVEN!! We're in the stretch! ",
            "EIGHT!!! Two more!",
            "NINE!!!! One more to go!!",
            "TEN!!!!!! " + gender.pronoun("she") + " won't be able to sit down for a week! "
        ];
        let c10041b = [
            "AAAaaahhh!!!",
            "ouchie ouchie ouchie",
            "OOooohhhh f-f-f-fuck!",
            "EEeggghhhhh"
        ];
        return {
            chatID: 0,
            speaker: "!ann",
            text: c10041[g.pass.temp],
            button: [
                { chatID: 10042, text: c10041b[g.pass.temp % c10041b.length], callback: "room4_0_5" }
            ]
        };
    }
    else if (chatID === 10042) {
        g.pass.temp++;
        let c10042 = [
            "",
            "Fuck that really hurt!",
            "I don't know how many more I can take...",
            "OH no!! I'm done, please I'm so done!",
            "Stop! I quit! I said I'm done!",
            "Ouchie, I quit! Red button! stop! No more please!!!!",
            "Please!!! Please!!!! STOP!!! NO MORE!!!!",
            "*screaming in pain*",
            "*softly sobbing*",
            "....",
            "*sob*"
        ];
        return {
            chatID: 0,
            speaker: "me",
            text: c10042[g.pass.temp],
            button: [
                { chatID: (g.pass.temp === 10 ? 18 : 10041), text: "....", callback: "room4_0_4" }
            ]
        };
    }
    else if (chatID === 1005) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Two markers lie, pink and black,<br/>" +
                "Pick one, bend over, write beside your crack.<br/>" +
                "Pink for the 'Anal Whore' who craves ass destruction,<br/>" +
                "Black for the 'Pain Slut' who begs agony and abduction.<br/>" +
                "Ass up now choose and obey,<br/>" +
                "Which color’s staining your cheeks today?",
            button: [
                { chatID: -1, text: "...", callback: "room5" }
            ]
        };
    }
    else if (chatID === 10051) {
        let r5txt;
        if (g.pass.r5 === "pain")
            r5txt = "It was hard to write, but it suits me. I am a little pain slut. I really hope it " +
                "comes back to bite me. hehehe";
        else
            r5txt = "I have to admit, I do love cocks in my bussy! I guess everyone here knows that now! ";
        return {
            chatID: 0,
            speaker: "thinking",
            text: r5txt,
            button: [
                { chatID: -1, text: "...", callback: "greenlightRedraw" }
            ]
        };
    }
    else if (chatID === 1006) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "You're halfway there, feeling that thrill,<br/>" +
                "Stand in the middle, let your voice spill, <br/>" +
                "Pee or cum — your choice, make it quick, <br/>" +
                "Drizzle or flood me, with your filthy pricks!<br/>",
            button: [
                { chatID: -1, text: "...", callback: "room6" }
            ]
        };
    }
    else if (chatID === 10061) {
        return {
            chatID: 0,
            speaker: "me",
            text:
                g.pass.r6 === "piss" ? "I feel so gross right now. I think some of that piss has somehow " +
                    "flowed into every hole of my body, or include my ear holes. I now know what piss sounds " +
                    "like. " :
                    "I feel so gross right now. It's a good thing cum is good for your skin because every " +
                    "inch of my body is covered in it. *sigh*",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 1007) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Two stone cocks, hard as sin. <br/>" +
                "One splits your throat, one rams in. <br/>" +
                "Mouth full, ass stretched, you're their whore. <br/>" +
                "Double stuffed slut we all adore.",
            button: [
                { chatID: -1, text: "...", callback: "room7" }
            ]
        };
    }
    else if (chatID === 1008) {
        return {
            chatID: 0,
            speaker: "!ann",
            text: "The good doctor has left you alone with his gift. <br/>" +
                "Blue cup steals your mind, to leave you adrift. <br/>" +
                "Red cup breaks your body, then builds it anew. <br/>" +
                "One erases the past, one the vessel you knew.",
            button: [
                { chatID: -1, text: "...", callback: "room8" }
            ]
        };
    }
    else if (chatID === 1009) {
        //tattoo
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Empty bucket waits, cold and bare, <br/>"+
                "cocks swollen, loaded, beyond compare. <br/>" +
                "Stroke hard, erupt, let the hot ropes fly <br/>" +
                "Fill that bucket till it's brimming high. <br/>" +
                "Pump those cocks till they're ready to shoot. <br/>" +
                "Hot cum churning, begging for route.<br/>" +
                "Slide it deep in your mouth or your ass so tight. <br/>" +
                "Drain every drop straight into the bucket tonight.",
            button: [
                { chatID: -1, text: "...", callback: "room9" }
            ]
        };
    }
    else if (chatID === 10091) {
        let c10091 = "";
        if (g.internal.bucket === 0)
            c10091 = "It's an empty bucket";
        else if (g.internal.bucket < 2)
            c10091 = "There's a little cum in this bucket";
        else if (g.internal.bucket < 4)
            c10091 = "This bucket is almost half full of cum. ";
        else if (g.internal.bucket < 5)
            c10091 = "This bucket is almost 3/4 full of cum. ";
        else if (g.internal.bucket < 7)
            c10091 = "This bucket is almost full of cum ";
        else
            c10091 = "It's bucket full of cum. So much cum!!";
        return {
            chatID: 0,
            speaker: "thinking",
            text: c10091,
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 10010) {
        g.pass.inst = true;
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Two butt plugs before your eyes, <br/>" +
                "Pick one to wear; make your choice wise. <br/>" +
                "One shocks from within with electric fire, <br/>" +
                "The other inflates for all our desire.",
            button: [
                { chatID: 31, text: "...", callback: "room10" }
            ]
        };
    }
    else if (chatID === 10011) {
        g.pass.inst = true;
        return {
            chatID: 0,
            speaker: "!ann",
            text: "Now the game is almost done <br/>" +
                "You’ve proved a slut, the nastiest one <br/>" +
                "Mouth and ass both stretched and used <br/>" +
                "Every room so far abused <br/>" +
                "The next door waits, filthy and wide <br/>" +
                "How low you’ll sink, no need to hide <br/>" +
                "Pick the hairy, sweaty, fat old schmuck <br/>" +
                "And tongue their asshole, you filthy fuck <br/> ",
            button: [
                { chatID: -1, text: "...", callback: "room11" }
            ]
        };
    }
    else if (chatID === 1012) {
        carray = [
            "Suck off this horse's dick",
            "Suck off this pig's dick",
            "enema to mouth - drink till it's empty hung upside down"
        ];
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "!barker",
                text: "Welcome newcomer you're the next contestant to the underground " +
                    "game show The Dozen Degrading Doors!!!! ",
                button: [
                    { chatID: 1, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "!barker",
                text: "That's right, you are lucky to be here in front of our live studio audience." +
                    "You must make it through all 12 doors to get your freedom. If you can't make " +
                    "it through all 12 doors... well then. It'll be bad. Really bad. ",
                button: [
                    { chatID: 2, text: "What if I don't want to play? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "!barker",
                text: "I can see you're excited to play! Tap the face of challenge to hear what must  " +
                    "be done to pass. Then press the Green Button once you're done. It will only open " +
                    "the door once you've completed the task! ",
                button: [
                    { chatID: 3, text: "But what if I don't want to play? ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "!barker",
                text: "What ever you do don't press the Red Button! The Red Button ends the game " +
                    "and you will be punished. Given to the CUM cult so they may use you as their " +
                    "toy! It is much better to pass all 12 doors! Don't forget to smile for the " +
                    "audiance! They do enjoy a competitor!",
                button: [
                    { chatID: 4, text: "Please just let me out ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "!barker",
                text: "That’s the spirit! I know you'll do great. Now let the game begin! Claus, pull me " +
                    "up! ",
                button: [
                    { chatID: -1, text: "*sigh* ", callback: "room0" }
                ]
            },
            {
                chatID: 5,
                speaker: "!barker",
                text: "Press the mask of instruction now. Launch the game to take your bow! ",
                button: [
                    { chatID: -1, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "!ann",
                text: "To start the game press the green button, When the crowd gets excited and shoutin'. ",
                button: [
                    { chatID: -1, text: "crap. Here again.", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "!ann",
                text: "You skipped the task, oh what a shame! Press the mask to hear the instructions again!",
                button: [
                    { chatID: -1, text: "*sigh*", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "Huh. I wonder what that barrel is for?",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "If being naked in front of everyone is the second room, what could possibly be in store " +
                    "for the next 10!",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "!ann",
                text: "For this next task, the choice is yours. Fun " + gender.pronoun("girl") + " vibes or slut that roars!" +
                    " Shake that ass for the crowd to cheer, Or bend right over, show your bussy clear!",
                button: [
                    { chatID: -1, text: "...", callback: "room3" }
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "I guess I've chosen that I'm a slut. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "I'm not just some slut! I'm a fun time " + gender.pronoun("girl") + "! ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "Do I just gend down on my knees with my butt up?",
                button: [
                    { chatID: 15, text: "[Get on the ground with your butt up]", callback: "room4_0" },
                    { chatID: -1, text: "[Change your mind]", callback: "room4" },
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "I suppose I just put these clothes pins on my nipples. Seems easy. ", 
                button: [
                    { chatID: 19, text: "[Put the clothes pins on your nipples]", callback: "room4_1" },
                    { chatID: -1, text: "[Change your mind]", callback: "room4" },
                ]
            },
            {
                chatID: 15,
                speaker: "!barker",
                text: "No dummy! Put the shackles on your feet, then lean over the chain with your butt up, " +
                    "and finally shackle your wrists to the ground! ",
                button: [
                    { chatID: -1, text: "Oh. I knew that", callback: "room4_2" },
                    { chatID: -1, text: "[Change your mind]", callback: "room4" },
                ]
            },
            {
                chatID: 16,
                speaker: "!barker",
                text: "Onto the stage is " + sc.n("!seller") + "!!! The destroyer of asses, the breaker of souls, " +
                    "the crusher of dream!! With him, his trusty paddle! I feel sorry for our poor contestant! " +
                    gender.pronoun("she") + " is about to get the paddling of " + gender.pronoun("her") + " life!!",
                button: [
                    { chatID: 17, text: "*groan*", callback: "room4_0_3" },
                ]
            },
            {
                chatID: 17,
                speaker: "!barker",
                text: "Look at that ass ladies and gentlemen! It's a shame what's about to happen to it! " +
                    sc.n("!seller") + " give " + gender.pronoun("her") + " the 10 hard spankings that she wants!!!!",
                button: [
                    { chatID: 10041, text: "*gulp*", callback: "room4_0_4" },
                ]
            },
            {
                chatID: 18,
                speaker: "!barker",
                text: sc.n("!seller") + " you may unlock " + gender.pronoun("her") + "! Lets see her crawl to " +
                    "our next game!!!",
                button: [
                    { chatID: -1, text: "...", callback: "greenlightRedraw" },
                ]
            },
            {
                chatID: 19,
                speaker: "thinking",
                text: "Ouch! That's suprisingly painful! I hope I get to take them off soon!",
                button: [
                    { chatID: -1, text: "...", callback: "greenlightRedraw" },
                ]
            },
            {
                chatID: 20,
                speaker: "thinking",
                text: "How do I get up there. It's so high. Do I just put my mouth... No. How do I get the " +
                    "other dick in my ass....",
                button: [
                    { chatID: -1, text: "...", callback: "room7_1" },
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "Maybe if I impale my ass first... No, it's too high. Can't get that cock in... Maybe " +
                    "if I climb up on it and just....",
                button: [
                    { chatID: 22, text: "...", callback: "room7_2" },
                ]
            },
            {
                chatID: 22,
                speaker: "thinking",
                text: "Ok. I have the cock in my mouth, now to just angle the other cock up my ass....",
                button: [
                    { chatID: 23, text: "...", callback: "room7_3" },
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "I did it!!! But fuck. Those stone dicks don't bend at all! So big in my holes I can " +
                    "feel them stretch me open! I'm going to have to really relax my hole to slip out of " +
                    "this one. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "me",
                text: "That tea was yummy! I wonder where bubbles go when they pop? ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "me",
                text: "That tea was yummy! I do hope to be overpowered by some big strong man! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "me",
                text: "Crap. That stone penis is way too big for my mouth. I'll have to practice oral more " +
                    "if I'm ever going to get through this. I guess I have to call it quits here. Damn me and " +
                    "my tight mouth! ",
                button: [
                    { chatID: -1, text: "...", callback: "redrawroom" },
                ]
            },
            {
                chatID: 27,
                speaker: "me",
                text: "Crap. That stone penis is way too big for my bussy. I'll have to practice anal more " +
                    "if I'm ever going to get through this. I guess I have to call it quits here. Damn me and " +
                    "my tight asshole! ",
                button: [
                    { chatID: -1, text: "...", callback: "redrawroom" },
                ]
            },
            {
                chatID: 28,
                speaker: "me",
                text: "I'm starting to look like a dumb ass slutty bimbo. Yeah me!!!! ",
                button: [
                    { chatID: -1, text: "...", callback: "greenbuttonON" },
                ]
            },
            {
                chatID: 29,
                speaker: "me",
                text: "Hey!!! Nothing happened!!! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "!barker",
                text: "Oh... ummm. Probably because you're already the perfect bimbo. ",
                button: [
                    { chatID: -1, text: "...", callback: "greenbuttonON" },
                ]
            },
            {
                chatID: 31,
                speaker: "thinking",
                text: "I guess I just pull the butt plug out of one of these girls and slide it in my " +
                    "butt. Hmmm, who to choose?",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "I'm not just going to grab that girl's ass, even though it's hanging out all naked " +
                    "and stuff. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "Allright. Now I'll just take this butt plug I pulled out of her ass and shove it " +
                    "up my own ass. Easy Peasy!",
                button: [
                    { chatID: -1, text: "...", callback: "room10_redraw" },
                ]
            },
            {
                chatID: 34,
                speaker: "!barker",
                text: "Haha! So gross! Don't worry we took a picture and sent it to your phone! You " +
                    "can check it out in your phone to remind yourself how filthy you are! ",
                button: [
                    { chatID: -1, text: "ugh...", callback: "room11_end" }
                ]
            },
            {
                chatID: 35,
                speaker: "thinking",
                text: "ooof! I can't tell who smells worse! They should totally take a shower. It smells " +
                    "like a mix of body odor and day old fish. I hope I don't have to do anything with them. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 36,
                speaker: "!barker",
                text: "Congratulations on making it to the 12th door! You'll be suprised on how few actually " +
                    "make it here! Only the slutties, natiest sluts make it here, and you are one of them. To " +
                    "achieve such a feat deserves a reward. ",
                button: [
                    { chatID: 37, text: "A reward? ", callback: "room12_1" },
                ]
            },
            {
                chatID: 37,
                speaker: "!barker",
                text: "Oh, not for you. For us. You see, my friends and I are always searching for the " +
                    "the next hole to cum in, and you are that hole. We do appreciate the magnificant show " +
                    "you put on for us. I mean, wow! We kept giving you nasiter and nastier tasks, and " +
                    "you didn't even pause or try to leave. you just kept shoving cocks into all your " +
                    "holes. ",
                button: [
                    { chatID: 38, text: "...", callback: "room12_2" },
                ]
            },
            {
                chatID: 38,
                speaker: "!barker",
                text: "And now we're all super horny and need to fuck!",
                button: [
                    { chatID: 39, text: "oh no", callback: "room12_3" },
                ]
            },
            {
                chatID: 39,
                speaker: "!twat",
                text: "Why are you looking at me? Oh, I'm not doing anything. I just came to watch you, the " +
                    "biggest slut, take all these dicks. I'm not going to help or anything. So gross.",
                button: [
                    { chatID: -1, text: "*gulp*", callback: "room12_4" },
                ]
            },
            {
                chatID: 40,
                speaker: "orchid",
                text: "We're so impressed! Poppy tried to do the 12 room challenge last year, but got hung " +
                    "up on the statue. Couldn't get the dick in her tiny mouth. haha. Juniper collapsed after " +
                    "eight spankings. I haven't done it since I prefer to fuck. But you deserve your winnings. ",
                button: [
                    { chatID: 41, text: "My winnings? ", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "orchid",
                text: "Yeah. It's a $40 cover charge to come. If you make it to the end you get to keep it. " +
                    "Nice deal really. Plus you get to keep all that cum in your butt! hehe! Anyway, good luck " +
                    "we've got to get back. It's a long walk. Later babe! ",
                button: [
                    { chatID: -1, text: "Yeah. Later. ", callback: "room12_end" },
                ]
            },
            {
                chatID: 42,
                speaker: "thinking",
                text: "Did I really want to leave without taking the money?  ",
                button: [
                    { chatID: -1, text: "No, I should grab the money first", callback: "" },
                    { chatID: -1, text: "Yeah. I'm out. ", callback: "leave" },
                ]
            },
            {
                chatID: 43,
                speaker: "thinking",
                text: "Hmmmm. Door won't budge. Must be locked. Maybe the green button opens something.",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "thinking",
                text: "Huh. The door behind me closed on it's own. Did I just walk into a trap like an " +
                    "idiot? What is this place? ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "!ann",
                text: "The game has not begun<br/>To leave now would be no fun</br>",
                button: [
                    { chatID: -1, text: "What the fuck? ", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "!ann",
                text: "We've been notified that you're here<br/>" +
                    "Fear not—the gang is drawing near<br/>" +
                    "Nothing to do but sleep in the black<br/>" +
                    "Tomorrow they come and there's no way back",
                button: [
                    { chatID: -1, text: "Well, that's messed up. How do I get out of here. ", callback: "" },
                    { chatID: -1, text: "Fuck. I don't know what this is, but I guess I should just sleep and hope for the best.", callback: "sleep" },
                ]
            },
            {
                chatID: 47,
                speaker: "!ann",
                text: "The sun has risen, pale and wrong<br/>" +
                    "The men are coming, not for long<br/>" +
                        "Just wait in silence, cold and deep<br/>" +
                    "And soon the game begins; no retreat",
                button: [
                    { chatID: -1, text: "What the fuck! There's got to be a way out! ", callback: "" },
                    { chatID: -1, text: "I guess I'll just wait [Space off for a few hours]", callback: "waitbegin" },
                ]
            },
            {
                chatID: 48,
                speaker: "!ann",
                text: "Quitting the game like that is so lame<br/>" +
                    "We still wanna rail that asshole just the same<br/>" +
                    "The penalty hits harder than you feared<br/>" +
                    "Scream “I QUIT” three times to disappear",
                button: [
                    { chatID: 49, text: "I QUIT, I QUIT, I QUIT", callback: "redbuttonquit" },
                    { chatID: -1, text: "ooops. That was an accident.", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "!ann",
                text: "Sleep now, your game is over<br/>" +
                    "No more plays, no do-overs<br/>" +
                    "Where you wake, the truth will sting<br/>" +
                    "You will hate everything",
                button: [
                    { chatID: -1, text: "I feel so sleepy....", callback: "redbuttonEnd" },
                ]
            },
            {
                chatID: 50,
                speaker: "thinking",
                text: "I don't have enough energy to go to a new room. Should I grab a snack or hit " +
                    "the red button and call it quits. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "!ann",
                text: "The task is over, no more doom<br/>" +
                    "Press the Green Button for the next room",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};