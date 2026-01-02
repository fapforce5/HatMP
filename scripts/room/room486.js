




//Must pass through the Dozen Degrading Doors
//Do you want to play a game
//doll maker working with the mad professor from the woods
//1. shoe on head
//2. grow breasts
//3. grow butt
//4. grow lips
//5. dildo in butt
//6. dance like a fool
//7. get peed on
//8. tell a guy you're a giant whore
//9. slime falls from the celing
//10. wear a stupid outfit
//11. clown makup level 3
//12. drink a big cup of horse semen level 11
//13. drink a big cup of pig semen level 11
//14. moon the camera
//15. shrink penis
//16. wear clown shoes
//17. lick a horse penis level 12
//18. suck off a pig level 12
//19. hug a weird doll
//20. Yell "I'm a sissy cocksucker!" level 1
//21. eat a cum fart

//posters go up around town - raises fame
var room486 = {};
room486.main = function () {
    if (g.pass === null || g.pass === "") {
        gv.mod("486gamecounter", 1);
        g.pass = {
            r: 0,
            a1: [],
            a2: [],
            inst: false,
            greenbutton: false,
            r1: null,
            r2: null,
            r3: null,
            r4: null,//nippleclip spank
            r5: null,//anal pain
            r6: null,//cum piss
            r7: null,//hole
            r8: null,
            r9: null,
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
        g.pass.r++;
        g.pass.inst = false;
        g.pass.greenbutton = false;
        nav.bg("486_game/r" + g.pass.r + ".webp");
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
    }
};

room486.btnclick = function (name) {
    switch (name) {
        case "redrawroom":
            nav.bg("486_game/r" + g.pass.r + ".webp");
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

            break;
        case "drawbtns":
            nav.killbutton("mask");
            nav.killbutton("redbutton");
            nav.killbutton("greenbutton");
            nav.button({
                "type": "hand",
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
                "type": "hand",
                "name": "redbutton",
                "left": 852,
                "top": 444,
                "width": 94,
                "height": 102,
                "image": "486_game/redbutton.webp"
            }, 486);
            if (g.pass.greenbutton)
                nav.button({
                    "type": "hand",
                    "name": "greenbutton",
                    "left": 1156,
                    "top": 444,
                    "width": 94,
                    "height": 102,
                    "image": "486_game/greenbutton.webp"
                }, 486);
            else
                nav.button({
                    "type": "hand",
                    "name": "greenbutton",
                    "left": 1156,
                    "top": 444,
                    "width": 94,
                    "height": 102,
                    "image": "486_game/greenbuttonx.webp"
                }, 486);
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
                        "type": "clickthrough",
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
                    g.internal = {
                        bucket: 0,
                        c: [null, null, null, null, null] 
                    };
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
            //if (g.pass.r === 0) {
            //    chat(5, 486);
            //}
            break;
        case "greenbutton":
            if (g.pass.greenbutton) {
                nav.killbutton("redbutton");
                nav.killbutton("greenbutton");
                nav.modbutton("mask", "486_game/m" + g.pass.r + ".webp", null, "img");
                nav.modbutton("bg-door", "486_game/r_open.webp", null, null);
                g.roomTimeout = setTimeout(function () {
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
        case "room1":
            nav.killbutton("room1");
            chat(10011, 486);
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
                "left": 1400,
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
            g.pass.inst = true;
            chat(13, 486);
            break;
        case "room4_1":
            nav.killbutton("room4_0");
            nav.killbutton("room4_1");
            g.pass.inst = true;
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
                "image": "486_game/room5" + (g.pass === "anal" ? "2" : "3") + ".webp"
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
                }, 219);
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
                }, 219);
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
                }, 219);
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
                }, 219);
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
                }, 219);
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
                }, 219);
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
            if(g.internal.bucket === 0)
            chat(10091, 486);
            break;
        case "room9c0":
        case "room9c1":
        case "room9c2":
        case "room9c3":
        case "room9c4":
            var room9c = parseInt(name.replace("room9c", ""));

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
            if (!g.pass.inst) {
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
            room486.btnclick("redrawroom"); 
            room486.chatcatch("greenbuttonON");
            gv.mod("energy", -15);
            levels.anal(5, false, "m", false, "!statue");
            levels.oral(5, "m", "!statue", false, null, true);
            nav.button({
                "type": "clickthrough",
                "name": "room7",
                "left": 449,
                "top": 344,
                "width": 1182,
                "height": 736,
                "image": "486_game/room7.webp"
            }, 486);
            zcl.hanging(560, 865, .25, "", false);
            break;
        case "room8":
            if (!g.pass.inst) {
                sc.select("room8_0", "486_game/icon_r8_0.webp", 0);
                sc.select("room8_1", "486_game/icon_r8_1.webp", 1);
            }
            g.pass.inst = true;
            break;
        case "room9":
            nav.kill();
            var room9CockCounter = 0;
            for (let i = 0; i < 5; i++) {
                if (g.internal.c[i] === null) {
                    switch (g.rand(0, 4)) {
                        case 0: g.internal.c[i] = 0; break;
                        case 1: g.internal.c[i] = 1; break;
                    }
                }
            }
            for (let i = 0; i < 5; i++) {
                if (g.internal.c[i] === null) {
                    room9CockCounter++;
                }
            }

            if (room9CockCounter === 5) {
                room486.chatcatch("room9");
                return;
            }

            for (let i = 0; i < 5; i++) {
                if (g.internal.c[i] !== null) {
                    nav.button({
                        "type": "img",
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
                    "name": "room9c" + i,
                    "left": 50 + (i * 210),
                    "top": 300,
                    "width": 200,
                    "height": 75,
                    "image": "486_game/room9b_" + i.toString() + ".webp"
                }, 486);
            }
            break;
        case "greenlightRedraw":
            nav.kill();
            nav.bg("486_game/r" + g.pass.r + ".webp");
            nav.button({
                "type": "img",
                "name": "bg-door",
                "left": 672,
                "top": 158,
                "width": 703,
                "height": 604,
                "image": "486_game/r_openholder.webp"
            }, 486);
            room486.btnclick("initroom");
            g.pass.greenbutton = true;
            room486.btnclick("drawbtns");
            break;
        case "greenbuttonON":
            g.pass.greenbutton = true;
            room486.btnclick("drawbtns");
            break;
        case "redrawroom":
            room486.btnclick("redrawroom");
            break;
        default:
            break;
    }
};

room486.chat = function (chatID) {
    let carray;
    if (chatID === 1001) {
        carray = [
            "I really love penises in my butt. They tickle my fancy, I'm a slut!'",
            "I would lick anyone’s butt on command. Rim job ready, I’m your biggest fan!",
            "I'm a pee pee girl, wild and free. Golden showers just for me!"
        ];
        return {
            chatID: 0,
            speaker: "!ann",
            text: "This first room starts off light, Shout the line with all your might! " +
                carray[g.pass.temp] +
                " Let the crowd hear clear and true, Loud as thunder, that’s on you!",
            button: [
                { chatID: -1, text: "Shout the line? ", callback: "room1" }
            ]
        };
    }
    else if (chatID === 10011) {
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
            text: "Now that you’ve boasted you’re a slut so bold,"+
                "Prove it to all, let the truth unfold." +
                "Peel off your threads, every last stitch bare," +
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
            text: "Now the game truly begins," +
                "Choices will test your skin." +
                "Some sting and shame on the spot," +
                "Others fester and rot." +
                "Energy guards your fate " +
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
            text: "Pain is yours to pick and choose. Ten hard spanks in this room you’ll lose, " +
                "Or clip those nipples, bite the sting, Carry the ache through ev’ry thing!",
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
            text: "Two markers lie, pink and black," +
                "Pick one, bend over, write beside your crack." +
                "Pink for the 'Anal Whore' who craves ass destruction," +
                "Black for the 'Pain Slut' who begs agony and abduction." +
                "Ass up now choose and obey," +
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
            text: "You're halfway there, feeling that thrill," +
                "Stand in the middle, let your voice spill, " +
                "Pee or cum — your choice, make it quick, " +
                "Drizzle or flood me, with your filthy pricks!",
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
                    "I feel so gross right now. It's a good thing cum is good for your skin becuase every " +
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
            text: "Two stone cocks, hard as sin. " +
                "One splits your throat, one rams in. " +
                "Mouth full, ass stretched, you're their whore. " +
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
            text: "The good doctor has left you alone with his gift. " +
                "Blue cup steals your mind, to leave you adrift. " +
                "Red cup breaks your body, then builds it anew. " +
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
            text: "Empty bucket waits, cold and bare, "+
                "cocks swollen, loaded, beyond compare. " +
                "Stroke hard, erupt, let the hot ropes fly " +
                "Fill that bucket till it's brimming high. " +
                "Pump those cocks till they're ready to shoot. " +
                "Hot cum churning, begging for route." +
                "Slide it deep in your mouth or your ass so tight. " +
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
        else if (g.internal.bucket < 4)
            c10091 = "There's a little cum in this bucket";
        else if (g.internal.bucket < 6)
            c10091 = "This bucket is almost half full of cum. ";
        else if (g.internal.bucket < 9)
            c10091 = "This bucket is almost 3/4 full of cum. ";
        else if (g.internal.bucket < 12)
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
    else if (chatID === 1010) {
       //zcl.double(-100, -100, 1.2, "open", true)
        //zcl.bj(100, 500, .8, "open", false)
        //zcl.bj(100, 600, .8, "", false)
    }
    else if (chatID === 1011) {
        carray = [
            "Suck the cum out this woman's vagina",
            "Lay over his lap for 10 spankings",
            "Up on the rack", //rack with fucking machine and nipple clamps and face fucking
            "Stick ass through hole in glass and let the spectators fuck you"
        ];
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
            
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};