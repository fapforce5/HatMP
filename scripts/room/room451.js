//Park Men's Room
var room451 = {};

room451.main = function () {
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

        var navList = [450];

        $.each(btnList, function (i, v) {
            nav.button(v, 451);
        });

        nav.buildnav(navList);
    }
    else {
        g.internal = canGoOut;
        chat(0, 451);
    }
};

room451.btnclick = function (name) {
    switch (name) {
        case "stall3":
            nav.killall();
            nav.bg("451_parkMensRoom/stall.jpg");
            nav.buildnav([451]);
            break;
        case "stall2":
            nav.killall();
            nav.bg("451_parkMensRoom/gloryHoleInsert.jpg");
            if ((g.dt.getDay() === 0 || g.dt.getDay() === 6) && g.hourBetween(6, 16)) {
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
            if ((g.dt.getDay() === 0 || g.dt.getDay() === 6) && g.hourBetween(6, 16)) {
                var oncase = g.get("oncase");
                if (oncase === "gloryholebj")
                    chat(14, 451);
                else if (g.sissy[13].ach) {
                    nav.killall();
                    nav.bg("451_parkMensRoom/gbg.jpg");
                    nav.button({
                        "type": "btn",
                        "name": "ceciliaStall",
                        "left": 1260,
                        "top": 0,
                        "width": 347,
                        "height": 1026,
                        "image": "451_parkMensRoom/c1.png"
                    }, 451);
                }
                else
                    chat(5, 451);
            }
            else {
                nav.killall();
                nav.bg("451_parkMensRoom/gloryHole.jpg");
                nav.button({
                    "type": "btn",
                    "name": "gloryhole",
                    "left": 385,
                    "top": 158,
                    "width": 124,
                    "height": 218,
                    "image": "451_parkMensRoom/gloryhole.png"
                }, 451);
                nav.buildnav([451]);
            }
            break;
        case "mirror":
            g.pass = 451;
            char.room(27);
            //nav.killall();
            //nav.bg("451_parkMensRoom/mirror.jpg", "451_parkMensRoom/mirror.jpg");
            //zcl.displayMirror();
            //chat(3, 451);
            break;
        case "insert":
            chat(1, 451);
            break;
        case "insert_1":
            nav.killall();
            nav.bg("451_parkMensRoom/bj1.jpg");
            if (sc.getstep("missy") < 2)
                chat(6, 451);
            else
                chat(7, 451);
            break;
        case "gloryhole":
            if (g.sissy[13].ach)
                chat(28, 451);
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
        case "cbj1":
            chat(15, 451);
            break;
        case "gc1":
            g.pass = 1;
            nav.killall();
            nav.bg("451_parkMensRoom/gc2.jpg");
            nav.button({
                "type": "btn",
                "name": "gc3",
                "left": 0,
                "top": 368,
                "width": 910,
                "height": 443,
                "image": "451_parkMensRoom/gc3.png"
            }, 451);
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
            chat(27, 451);
            break;
        case "ghole1":
            chat(32, 451);
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
            g.mod("receiveOralMale", 1);
            cl.doCum(false);
            char.room(451);
            break;
        case "enterstall":
            nav.killall();
            nav.bg("451_parkMensRoom/gbg.jpg");
            nav.button({
                "type": "btn",
                "name": "cbj1",
                "left": 1260,
                "top": 0,
                "width": 347,
                "height": 1026,
                "image": "451_parkMensRoom/c1.png"
            }, 451);
            break;
        case "gc1":
            char.changeMenu("hide", false);
            nav.button({
                "type": "btn",
                "name": "gc1",
                "left": 432,
                "top": 274,
                "width": 218,
                "height": 222,
                "title": "A cock",
                "image": "451_parkMensRoom/gc1.png"
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
            g.mod("sissy", 50);
            g.mod("giveOralMale", 1);
            g.mod("loadSwollowed", 1);
            nav.bg("451_parkMensRoom/gc8_swollow1.jpg");
            break;
        case "gc8_face":
            g.mod("sissy", 15);
            g.mod("giveOralMale", 1);
            g.mod("loadSpit", 1);
            cl.c.cumface = true;
            cl.display();
            nav.bg("451_parkMensRoom/gc8_face.jpg");
            break;
        case "endgc1":
            char.settime(17, 5);
            g.sissy[13].ach = true;
            g.set("oncase", null);
            char.room(451);
            break;
        case "reset":
            char.room(451);
            break;
        case "suck1":
            if (g.hourBetween(20, 25) || g.hourBetween(0, 6))
                chat(29, 451);
            else {
                var rdm = Math.floor(Math.random() * 10);
                rdm = 8;
                if (rdm === 0) {
                    nav.killall();
                    nav.bg("451_parkMensRoom/suck1.jpg");
                    zcl.displayMirror();
                    nav.button({
                        "type": "btn",
                        "name": "gc1",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "451_parkMensRoom/suck1.png"
                    }, 451);
                    chat(30, 451);
                }
                else if (rdm < 6) {
                    nav.killall();
                    nav.bg("451_parkMensRoom/suck1.jpg");
                    zcl.displayMirror();
                    nav.button({
                        "type": "btn",
                        "name": "aaa",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "451_parkMensRoom/suck1e.png"
                    }, 451);
                    chat(31, 451);
                }
                else {
                    if (Math.floor(Math.random() * 2) === 0) {
                        g.pass = "w";
                        nav.button({
                            "type": "btn",
                            "name": "ghole1",
                            "left": 363,
                            "top": 155,
                            "width": 382,
                            "height": 234,
                            "title": "A cock",
                            "image": "451_parkMensRoom/gc1.png"
                        }, 451);
                    }
                    else {
                        g.pass = "b";
                        nav.button({
                            "type": "btn",
                            "name": "ghole1",
                            "left": 363,
                            "top": 155,
                            "width": 382,
                            "height": 234,
                            "title": "A cock",
                            "image": "451_parkMensRoom/gc2.png"
                        }, 451);
                    }
                    //nav.button({
                    //    "type": "btn",
                    //    "name": "ghole1",
                    //    "left": 432,
                    //    "top": 304,
                    //    "width": 150,
                    //    "height": 192,
                    //    "title": "A cock",
                    //    "image": "451_parkMensRoom/gc0.png"
                    //}, 451);
                }

            }
            break;
        case "arrest":
            g.pass = "jail";
            char.room(425);
            break;
        case "gloryholeEmpty":
            char.addtime (120);
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
            g.mod("giveOralMale", 1);
            g.mod("loadSwollowed", 1);
            nav.bg("451_parkMensRoom/blow2" + g.pass + ".jpg");
            break;
        case "suckit3":
            nav.bg("451_parkMensRoom/blow3" + g.pass + ".jpg");
            g.mod("giveOralMale", 1);
            g.mod("loadSpit", 1);
            cl.c.cumface = true;
            cl.display();
            break;
        case "suckit4":
            g.mod("money", 20);
            g.mod("sissy", 3);
            char.addtime(60);
            room451.btnclick("stall1");
            break;
        case "suckit5":
            g.mod("sissy", 15);
            char.addtime(60);
            room451.btnclick("stall1");
            break;
        default:
            break;
    }
};

room451.chat = function (chatID) {
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
            text: sc.n("me") + "! Get in here!",
            button: [
                { chatID: -1, text: "Enter the stall", callback: "enterstall" }
            ]
        },
        {
            chatID: 15,
            speaker: "cecilia",
            text: "I'm so excited to have a sissy friend! I've always dreamed of sucking dick with a friend!",
            button: [
                { chatID: 16, text: "Me too!", callback: "gc1" }
            ]
        },
        {
            chatID: 16,
            speaker: "cecilia",
            text: "Oh look a cock! It's so yummy and thick... Oh yeah, I forgot you wanted to suck that cock. Sorry I got " +
                "so cock hungry I forgot you were here. You take go ahead and suck that. It's easy start by licking the tip!",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "What am I doing? Why am I about to suck some stanger's cock? I've really lost my mind. I'm so glad " +
                sc.n("cecilia") + "'s here to support me, but really maybe I should go...",
            button: [
                { chatID: 18, text: "...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "cecilia",
            text: "You are so lucky! That really is a beautiful cock! go ahead just lick the tip sweetie.",
            button: [
                { chatID: 19, text: "Mmmmm", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cecilia",
            text: "Crap. I can't let " + sc.n("cecilia") + " down. I guess I'm just going to suck this dick. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "cecilia",
            text: "Oh yeah! Enjoy that cock! Take the tip into your mouth!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "cecilia",
            text: "YES! You're a natural! I can tell we're going to be great sissy friends! Suck that cock slut!",
            button: [
                { chatID: 22, text: "...", callback: "gc7" }
            ]
        },
        {
            chatID: 22,
            speaker: "cecilia",
            text: "He's going to blow! Are you going to get a facial, or swollow like a real sissy!",
            button: [
                { chatID: 23, text: "Swollow like a sissy!", callback: "gc8_swollow" },
                { chatID: 26, text: "Take the facial", callback: "gc8_face" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "I feel his load flowing down my slutty throat...",
            button: [
                { chatID: 24, text: "*glug*", callback: "gc8_swollow1" }
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
                "in and bust me! I have to get to my date, you keep sucking you cock slut!",
            button: [
                { chatID: -1, text: "Thanks!", callback: "endgc1" }
            ]
        },
        {
            chatID: 26,
            speaker: "cecilia",
            text: "Awwww you didn't swollow, what a waste of yummy cummy!",
            button: [
                { chatID:25, text: "Gack spit cough", callback: "enterstall" }
            ]
        },
        {
            chatID: 27,
            speaker: "cecilia",
            text: "Sorry, in progress... ",
            button: [
                { chatID: -1, text: "Sad noises", callback: "reset" }
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
            text: "Hmmm no one around... ",
            button: [
                { chatID: -1, text: "Give up", callback: "gloryholeEmpty" }
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
                { chatID: 34, text: "Swollow", callback: "suckit2" },
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
    ];

    return cArray[chatID];
};
