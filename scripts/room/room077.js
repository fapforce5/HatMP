//Room name
var room77 = {};
room77.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "stairs",
            "left": 1615,
            "top": 0,
            "width": 305,
            "height": 835,
            "image": "77_bimboLiving/stairs.png",
            "night": "77_bimboLiving/stairsNight.png"
        }
    ];
    if (sc.bimbo().thisRoom) {
        nav.bg("77_bimboLiving/livingRoomx.jpg", "77_bimboLiving/livingRoomNightx.jpg");
        btnList.push({
            "type": "btn",
            "name": "bimbo",
            "left": 246,
            "top": 438,
            "width": 632,
            "height": 198,
            "image": "77_bimboLiving/sleep.png",
            "night": "77_bimboLiving/sleepNight.png"
        });
    }
    var navList = [76, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 77);
    });
    nav.buildnav(navList);
};

room77.btnclick = function (name) {
    switch (name) {
        case "stairs":
            char.room(76);
            break;
        case "bimbo":
            nav.killbutton("stairs");
            nav.killbutton("bimbo");
            nav.bg("77_bimboLiving/closeup.jpg");
            chat(0, 77);
            break;
        case "bimboass":
            nav.kill("bimboass");
            nav.button({
                "type": "btn",
                "name": "bimboass",
                "left": 848,
                "top": 0,
                "width": 1072,
                "height": 1080,
                "image": "77_bimboLiving/butt1.png"
            }, 77);
            chat(18, 77);
            break;
        default:
            break;
    }
};

room77.chatcatch = function (callback) {
    switch (callback) {
        case "takedickout":
            if (cl.usecock()) {
                nav.bg("77_bimboLiving/closeup1.jpg");
                chat(3, 77);
            }
            else if (cl.c.chastity !== null) {
                nav.bg("77_bimboLiving/closeupno.jpg");
                chat(1, 77);
            }
            else {
                nav.bg("77_bimboLiving/closeupno.jpg");
                chat(2, 77);
            }
            break;
        case "mouth":
            nav.bg("77_bimboLiving/suck1.jpg");
            break;
        case "mouth1":
            nav.bg("77_bimboLiving/gray.jpg");
            nav.button({
                "type": "btn",
                "name": "bimbo",
                "left": 320,
                "top": 80,
                "width": 1600,
                "height": 1000,
                "image": "77_bimboLiving/bj1.gif"
            });
            break;
        case "mouth2":
            nav.kill("bimbo");
            nav.button({
                "type": "btn",
                "name": "bimbo",
                "left": 320,
                "top": 80,
                "width": 1600,
                "height": 1000,
                "image": "77_bimboLiving/bj2.gif"
            });
            break;
        case "mouth3":
            nav.kill("bimbo");
            nav.button({
                "type": "btn",
                "name": "bimbo",
                "left": 320,
                "top": 80,
                "width": 1600,
                "height": 1000,
                "image": "77_bimboLiving/bj3.gif"
            });
            break;
        case "mouth4":
            nav.kill("bimbo");
            nav.button({
                "type": "btn",
                "name": "bimbo",
                "left": 320,
                "top": 80,
                "width": 1600,
                "height": 1000,
                "image": "77_bimboLiving/bj4.gif"
            });
            break;
        case "mouth5":
            nav.kill("bimbo");
            nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 769,
                "top": 73,
                "width": 827,
                "height": 1005,
                "image": "76_bimboRoom/bimboCumface.png"
            }, 77);
            g.mod("receiveOralFemale", 1);
            cl.doCum(false);
            break;
        case "pussy":
            nav.killall();
            nav.bg("77_bimboLiving/laying.jpg");
            break;
        case "pussy1":
            nav.bg("77_bimboLiving/f1.gif");
            break;
        case "pussy2":
            if (sc.checkevent("bimbo", -1))
                chat(12, 77);
            else
                chat(25, 77);
            break;
        case "pussy3":
            nav.bg("77_bimboLiving/f3.gif");
            break;
        case "pussy4":
            nav.bg("77_bimboLiving/f2.gif");
            break;
        case "pussy5":
            g.mod("fuckPussy", 1);
            cl.doCum(false);
            nav.bg("77_bimboLiving/p5.jpg");
            break;
        case "pussy6":
            nav.killbutton("tube");
            g.mod("fuckPussy", 1);
            cl.doCum(false);
            nav.bg("77_bimboLiving/p6.jpg");
            break;
        case "pussy7":
            g.mod("fuckPussy", 1);
            cl.doCum(false);
            nav.bg("77_bimboLiving/p1.jpg");
            nav.button({
                "type": "img",
                "name": "tube",
                "left": 0,
                "top": 276,
                "width": 1920,
                "height": 400,
                "image": "77_bimboLiving/p1.gif"
            }, 77);
            if (g.get("knockedup") === null) {
                g.set("knockedup", g.dt);
                chat(29, 77);
            }
            else if (g.get("knockedup").getFullYear() < 2000) {
                g.set("knockedup", g.dt);
                chat(29, 77);
            }
            else {
                chat(27, 77);
            }
            break;
        case "pussy7a":
            nav.killbutton("tube");
            nav.bg("77_bimboLiving/p1a.jpg");
            break;
        case "pussy7a1":
            nav.killbutton("tube");
            nav.bg("77_bimboLiving/p1a1.jpg");
            break;
        case "pussy7a2":
            nav.killbutton("tube");
            nav.bg("77_bimboLiving/p1a2.jpg");
            break;
        case "end":
            char.addtime(60);
            nav.buildnav([76, 0]);
            break;
        case "ass":
            nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
            nav.kill("bimbo");
            nav.button({
                "type": "btn",
                "name": "bimboass",
                "left": 848,
                "top": 0,
                "width": 1072,
                "height": 1080,
                "image": "77_bimboLiving/butt.png"
            }, 77);
            break;
        case "ass1":
            nav.kill("bimbo");
            nav.bg("77_bimboLiving/b1.gif");
            break;
        case "ass2":
            nav.kill("bimbo");
            nav.bg("77_bimboLiving/b2.gif");
            break;
        case "ass3":
            nav.bg("77_bimboLiving/b3.gif");
            break;
        case "ass4":
            nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
            g.mod("giveAnalFemale", 1);
            cl.doCum(false);
            nav.kill("bimbo");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 848,
                "top": 0,
                "width": 1072,
                "height": 1080,
                "image": "77_bimboLiving/butt2.png"
            }, 77);
            break;
        case "ass5":
            g.mod("giveAnalFemale", 1);
            cl.doCum(false);
            nav.bg("77_bimboLiving/b4.gif");
            break;
        case "ass6":
            g.mod("giveAnalFemale", 1);
            nav.bg("77_bimboLiving/livingRoom.jpg", "77_bimboLiving/livingRoomNight.jpg");
            cl.doCum(false);
            nav.kill("bimbo");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 918,
                "top": 46,
                "width": 851,
                "height": 1031,
                "image": "77_bimboLiving/s1.png"
            }, 77);
            break;
        default:
            break;
    }
};

room77.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "...",
            button: [
                { chatID: -1, text: "Take your dick out.", callback: "takedickout" },
                { chatID: -1, text: "Stare at her for a bit, like a creep", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "I would love to stick that in me, but you're all locked up honey.",
            button: [
                { chatID: -1, text: "Oh... ok", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "Oh honey... it's so small. There's nothing I can do with such a tiny little cock. You need a man to bend you over cause they only thing " +
            "you're good for now. I love taking a big cock, there's no better feeling, you should feel that too.",
            button: [
                { chatID: -1, text: "Oh.... ouch", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "bimbo",
            text: "OOOOooooo is that for me? How do you want to fuck me?",
            button: [
                { chatID: 4, text: "In your mouth", callback: "mouth" },
                { chatID: 10, text: "In your pussy", callback: "pussy" },
                { chatID: 17, text: "In your asshole", callback: "ass" }
            ]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "So are you going to fill my mouth with your giant cock daddy?",
            button: [
                { chatID: 5, text: "Yes I am", callback: "mouth1" }
            ]
        },
        {
            chatID: 5,
            speaker: "bimbo",
            text: "uuuHHHmmmmMM",
            button: [
                { chatID: 6, text: "Continue", callback: "mouth2" }
            ]
        },
        {
            chatID: 6,
            speaker: "bimbo",
            text: "aaahhahhhah",
            button: [
                { chatID: 7, text: "Continue", callback: "mouth3" }
            ]
        },
        {
            chatID: 7,
            speaker: "bimbo",
            text: "ugh ugh ugh",
            button: [
                { chatID: 8, text: "Paint her face in cum", callback: "mouth4" }
            ]
        },
        {
            chatID: 8,
            speaker: "bimbo",
            text: "aaaAAAAaaa!",
            button: [
                { chatID: 9, text: "Finish", callback: "mouth5" }
            ]
        },
        {
            chatID: 9,
            speaker: "bimbo",
            text: "MMmmmmmmm I love the taste of your cum!",
            button: [
                { chatID: -1, text: "yeah you do", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "bimbo",
            text: "Sooo you going to destroy my pussy big boy?",
            button: [
                { chatID: 11, text: "Yes I will", callback: "pussy1" }
            ]
        },
        {
            chatID: 11,
            speaker: "bimbo",
            text: "I haven't been fucked like this since my bondage gang bang!",
            button: [
                { chatID: -1, text: "*GROAN*", callback: "pussy2" }
            ]
        },
        {
            chatID: 12,
            speaker: "bimbo",
            text: "Oh cum for me baby!",
            button: [
                { chatID: 13, text: "[Pull out]", callback: "pussy3" },
                { chatID: 15, text: "[Cum in her]", callback: "pussy4" }
            ]
        },
        {
            chatID: 13,
            speaker: "bimbo",
            text: "Oh yes! Spray your cum all over my body!",
            button: [
                { chatID: 14, text: "[Finish]", callback: "pussy5" }
            ]
        },
        {
            chatID: 14,
            speaker: "bimbo",
            text: "Don't I look hot covered in your cum?",
            button: [
                { chatID: -1, text: "Yes you do.", callback: "end" }
            ]
        },
        {
            chatID: 15,
            speaker: "bimbo",
            text: "Oh god yes! It feels so warm in me!",
            button: [
                { chatID: 16, text: "MMmmmmm", callback: "pussy6" }
            ]
        },
        {
            chatID: 16,
            speaker: "bimbo",
            text: "Hahaha, Happy pussy!!!!",
            button: [
                { chatID: -1, text: "...", callback: "end" }
            ]
        },
        {
            chatID: 17,
            speaker: "bimbo",
            text: "So you going to spit on it baby?",
            button: [
                { chatID: -1, text: "Sure", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "bimbo",
            text: "Oh yesss, shove that cock in my ass!",
            button: [
                { chatID: 19, text: "...", callback: "ass1" }
            ]
        },
        {
            chatID: 19,
            speaker: "bimbo",
            text: "Oh fuck, oh fuck, oh fuck, oh fuck fuck fuck fuck fuckfuckfucfkfukfuk",
            button: [
                { chatID: 20, text: "*GROAN*", callback: "ass2" }
            ]
        },
        {
            chatID: 20,
            speaker: "bimbo",
            text: "Oh oh god! My ass is so full of your hard cock!",
            button: [
                { chatID: 21, text: "[Cum in her ass]", callback: "ass3" },
                { chatID: 23, text: "[Pull out]", callback: "ass5" }
            ]
        },
        {
            chatID: 21,
            speaker: "bimbo",
            text: "ooohhhhhhh MMmmmmmmmm",
            button: [
                { chatID: 22, text: "Ugh", callback: "ass4" }
            ]
        },
        {
            chatID: 22,
            speaker: "bimbo",
            text: "My ass is sooo full of your cum! You like it?",
            button: [
                { chatID: -1, text: "...", callback: "end" }
            ]
        },
        {
            chatID: 23,
            speaker: "bimbo",
            text: "Oh yeah",
            button: [
                { chatID: 24, text: "Ugh", callback: "ass6" }
            ]
        },
        {
            chatID: 24,
            speaker: "bimbo",
            text: "Hahaha My back is full of cum!",
            button: [
                { chatID: -1, text: "...", callback: "end" }
            ]
        },
        {
            chatID: 25,
            speaker: "bimbo",
            text: "Please don't cum in me!",
            button: [
                { chatID: 13, text: "[Pull out]", callback: "pussy3" },
                { chatID: 26, text: "[Cum in her]", callback: "pussy4" }
            ]
        },
        {
            chatID: 26,
            speaker: "bimbo",
            text: "Are you cumming in me?!?",
            button: [
                { chatID: -1, text: "MMmmmmm", callback: "pussy7" }
            ]
        },
        {
            chatID: 27,
            speaker: "bimbo",
            text: "Oh well, it feels sooo good. I probably won't get pregnant.",
            button: [
                { chatID: 28, text: "MMmmmmm", callback: "pussy6" }
            ]
        },
        {
            chatID: 28,
            speaker: "bimbo",
            text: "Hahaha, Happy pussy!!!!",
            button: [
                { chatID: -1, text: "...", callback: "end" }
            ]
        },
        {
            chatID: 29,
            speaker: "bimbo",
            text: "....",
            button: [
                { chatID: 30, text: "...", callback: "pussy7a" }
            ]
        },
        {
            chatID: 30,
            speaker: "bimbo",
            text: "....",
            button: [
                { chatID: 31, text: "...", callback: "pussy7a1" }
            ]
        },
        {
            chatID: 31,
            speaker: "bimbo",
            text: "....",
            button: [
                { chatID: 27, text: "...", callback: "pussy7a2" }
            ]
        },
        {
            chatID: 32,
            speaker: "bimbo",
            text: "Ooooo i love the feeling of a cum filled pussy!",
            button: [
                { chatID: 28, text: "...", callback: "pussy7" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
}; 