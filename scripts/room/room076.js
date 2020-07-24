//Room name
var room76 = {};
room76.main = function () {

    if (g.pass === "boobjob") {
        nav.button({
            "type": "img",
            "name": "bimbo",
            "left": 886,
            "top": 48,
            "width": 665,
            "height": 1032,
            "image": "76_bimboRoom/bimbo1.png"
        }, 76);
        chat(0, 76);
    }
    else {
        var navList = [77];
        if (sc.bimbo().thisRoom) {
            nav.button({
                "type": "btn",
                "name": "bimbo",
                "left": 757,
                "top": 482,
                "width": 544,
                "height": 228,
                "image": "76_bimboRoom/bimoLay.png"
            }, 76);
        }
        nav.buildnav(navList);
    }
};

room76.btnclick = function (name) {
    switch (name) {
        case "bimbo":
            nav.killbutton("bimbo");
            nav.bg("76_bimboRoom/laying.jpg");
            nav.button({
                "type": "btn",
                "name": "butthole",
                "left": 925,
                "top": 559,
                "width": 183,
                "height": 183,
                "image": "76_bimboRoom/butthole.png"
            }, 76);
            nav.button({
                "type": "btn",
                "name": "pussy",
                "left": 1114,
                "top": 496,
                "width": 300,
                "height": 202,
                "image": "76_bimboRoom/pussy.png"
            }, 76);
            break;
        case "butthole":
            if (cl.usecock()) {
                nav.killall();
                nav.bg("76_bimboRoom/a1.gif");
                chat(9, 76);
            }
            else if (cl.c.chastity !== null) {
                chat(14, 76);
            }
            else {
                chat(15, 76);
            }
            break;
        case "pussy":
            if (cl.usecock()) {
            nav.killall();
            nav.bg("76_bimboRoom/p1.jpg");
                chat(11, 76);
            }
            else if (cl.c.chastity !== null) {
                chat(14, 76);
            }
            else {
                chat(15, 76);
            }
            break;
        default:
            break;
    }
};

room76.chatcatch = function (callback) {
    switch (callback) {
        case "bimbo2":
            if (cl.c.chastity === null && cl.c.cock < 3) {
                nav.killbutton("bimbo");
                nav.button({
                    "type": "img",
                    "name": "bimbo",
                    "left": 866,
                    "top": 48,
                    "width": 685,
                    "height": 1032,
                    "image": "76_bimboRoom/bimbo2.png"
                }, 76);
                chat(1, 76);
            }
            else {
                nav.killbutton("bimbo");
                nav.button({
                    "type": "img",
                    "name": "bimbo",
                    "left": 866,
                    "top": 48,
                    "width": 685,
                    "height": 1032,
                    "image": "76_bimboRoom/bimbo1b.png"
                }, 76);
                if (cl.c.chastity !== null)
                    chat(4, 76);
                else if (cl.c.cock === 0)
                    chat(5, 76);
                else
                    chat(6, 76);
            }
            break;
        case "bimbo3":
            nav.killbutton("bimbo");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 866,
                "top": 48,
                "width": 665,
                "height": 1032,
                "image": "76_bimboRoom/bimbo3.png"
            }, 76);
            g.mod("arousal", 100);
            break;
        case "leave1":
            sc.setstep("bimbo", 2);
            char.room(0);
            break;
        case "titfuck":
            nav.killbutton("bimbo");
            nav.bg("76_bimboRoom/bedcock.jpg");
            break;
        case "titfuck1":
            nav.bg("76_bimboRoom/bed.jpg");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 435,
                "top": 0,
                "width": 1400,
                "height": 1080,
                "image": "76_bimboRoom/76_boobjob.gif"
            }, 76);
            g.roomTimeout = setTimeout(function () { chat(7, 76); }, 5000);
            break;
        case "titfuck2":
            nav.killbutton("bimbo");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 435,
                "top": 0,
                "width": 1400,
                "height": 1080,
                "image": "76_bimboRoom/76_boobjob1.gif"
            }, 76);
            g.roomTimeout = setTimeout(function () { room76.chatcatch("titfuck3"); }, 4600);
            break;
        case "titfuck3":
            nav.killbutton("bimbo");
            nav.bg("76_bimboRoom/room.jpg", "76_bimboRoom/roomNight.jpg");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 769,
                "top": 73,
                "width": 827,
                "height": 1005,
                "image": "76_bimboRoom/bimboCumface.png"
            }, 76);
            g.mod("receiveBoobJob", 1);
            cl.doCum(false);
            chat(8, 76);
            sc.setstep("bimbo", 2);
            break;
        case "leave":
            nav.room(0);
            break;
        case "ass1":
            nav.bg("76_bimboRoom/a2.gif");
            break;
        case "ass2":
            g.mod("giveAnalFemale", 1);
            cl.doCum(false);
            nav.killall();
            nav.bg("76_bimboRoom/laying3.jpg");
            nav.buildnav([77, 0]);
            break;
        case "pussy1":
            nav.bg("76_bimboRoom/p1.gif");
            break;
        case "pussy2":
            nav.bg("76_bimboRoom/p2.gif");
            break;
        case "pussy3":
            g.mod("fuckPussy", 1);
            nav.bg("76_bimboRoom/p2.jpg");
            cl.doCum(false);
            nav.buildnav([77, 0]);
            break;
        default:
            break;
    }
};

room76.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bimbo",
            text: "I'm so glad you came up. It's been so long since I've had any cum and I was wondering if you could help.",
            button: [
                { chatID: -1, text: "...", callback: "bimbo2" }
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "I just need you to cum in my mouth.",
            button: [
                { chatID: 2, text: "...", callback: "bimbo3" }
            ]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "Cum over to my bed and slide that cock between my tits.",
            button: [
                { chatID: 6, text: "I can do that too.", callback: "titfuck" }
            ]
        },
        {
            chatID: 3,
            speaker: "bimbo",
            text: "Oh, it's all locked up. Well I guess there's not much I can do with that. Too bad, I bet your cum would have been yummy! ",
            button: [
                { chatID: -1, text: "oh yea.. oh well [leave]", callback: "leave1" }
            ]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "Oh,I didn't realize you had a pussy! I though you were one of those guys with tits. Oh well, I guess I'll get my cum from someone else. ",
            button: [
                { chatID: -1, text: "oh yea.. oh well [leave]", callback: "leave1" }
            ]
        },
        {
            chatID: 5,
            speaker: "bimbo",
            text: "It's soooo tiny! I was going to rub my titties all over it, but my tits are sooo big that little thing will get lost. Sorry honey. ",
            button: [
                { chatID: -1, text: "oh yea.. oh well [leave]", callback: "leave1" }
            ]
        },
        {
            chatID: 6,
            speaker: "bimbo",
            text: "I love your cock! Are you going to slide it between my tits and feed me your cum?",
            button: [
                { chatID: -1, text: "Yes I am", callback: "titfuck1" }
            ]
        },
        {
            chatID: 7,
            speaker: "bimbo",
            text: "So are you going to feed me your cum?",
            button: [
                { chatID: -1, text: "Oh yeah, here it comes!", callback: "titfuck2" }
            ]
        },
        {
            chatID: 8,
            speaker: "bimbo",
            text: "I love your cum! I think I'll wear it for a while! Feel free to come back and use me anytime sexy! ",
            button: [
                { chatID: -1, text: "Sure [Leave]", callback: "leave" }
            ]
        },
        {
            chatID: 9,
            speaker: "bimbo",
            text: "zzZZZz zzZZZzzz",
            button: [
                { chatID: 10, text: "Fill her ass full of cum", callback: "ass1" }
            ]
        },
        {
            chatID: 10,
            speaker: "bimbo",
            text: "zzZZZz zzZZZzzz",
            button: [
                { chatID: -1, text: "...", callback: "ass2" }
            ]
        },
        {
            chatID: 11,
            speaker: "bimbo",
            text: "zzZZZz zzZZZzzz",
            button: [
                { chatID: 12, text: "[Stick it in]", callback: "pussy1" }
            ]
        },
        {
            chatID: 12,
            speaker: "bimbo",
            text: "zzZZZz zzZZZzzz",
            button: [
                { chatID: 13, text: "[Cum all over her]", callback: "pussy2" }
            ]
        },
        {
            chatID: 13,
            speaker: "bimbo",
            text: "zzZZZz zzZZZzzz",
            button: [
                { chatID: -1, text: "[finish]", callback: "pussy3" }
            ]
        },
        {
            chatID: 14,
            speaker: "bimbo",
            text: "zzZZZz zzZZZzzz",
            button: [
                { chatID: -1, text: "[My cock is all locked up. Can't do anything]", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "bimbo",
            text: "zzZZZz zzZZZzzz",
            button: [
                { chatID: -1, text: "[My little tiny cock won't please her, there's no point in even trying]", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};