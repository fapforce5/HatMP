//lola massage
var room4 = {};
room4.main = function () {
    g.internal = { level: 0 };
    if (daily.get("lolamassage")) {
        chat(23, 4);
    }
    else {
        daily.set("lolamassage");
        switch (sc.taskGetStep("lola", "massage")) {
            case -1:
            case 0:
                g.internal.level = 0;
                chat(0, 4);
                break;
            case 1:
                g.internal.level = 1;
                chat(10, 4);
                break;
            case 2:
                g.internal.level = 2;
                chat(12, 4);
                break;
            case 3:
                g.internal.level = 3;
                chat(14, 4);
                break;
            default:
                sc.select("massage0", "4_lolamassage/icon_0.png", 0);
                //sc.select("massage1", "4_lolamassage/icon_1.png", 1);
                sc.select("massage2", "4_lolamassage/icon_2.png", 1);
                sc.select("massage3", "4_lolamassage/icon_3.png", 2);
                sc.selectCancel("cancel", 3);
                break;
        }
    }
};

room4.btnclick = function (name) {
    switch (name) {
        case "massageFinish":
            room4.chatcatch("massageFinish");
            break;
        case "massage1Shirt":
            nav.killbutton("massage1Shirt");
            nav.modbutton("lolabody", "4_lolamassage/lola_topPushedUp.png", null, null);
            nav.killbutton("endMassage");
            nav.button({
                "type": "btn",
                "name": "massage1Bra",
                "left": 1209,
                "top": 301,
                "width": 130,
                "height": 40,
                "image": "4_lolamassage/lola_braStrap.png"
            }, 4);
            if (sc.getLevel("lola") < 1) {
                chat(3, 4);
            }
            break;
        case "charismaLose":
            chat(5, 4);
            break;
        case "charisma5Lose":
            nav.killall();
            nav.bg("4_lolamassage/massage5_deny.jpg");
            chat(22, 4);
            break;
        case "charisma2Win":
            sc.completeMissionTask("lola", "massage", g.internal.level, true);
            sc.modLevel("lola", 999, g.internal.level);
            g.internal.level++;
            chat(7, 4);
            break;
        case "massage1Bra":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "massage",
                "left": 869,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "4_lolamassage/013_backrub_002.gif"
            }, 4);
            g.roomTimeout = setTimeout(function () {
                chat(9, 4);
            }, 2000);
            break;
        case "massage0":
            nav.killall();
            g.internal.level = 0;
            chat(0, 4);
            break;
        case "massage1":
            nav.killall();
            g.internal.level = 1;
            chat(10, 4);
            break;
        case "massage2":
            nav.killall();
            g.internal.level = 2;
            chat(12, 4);
            break;
        case "massage3":
            nav.killall();
            g.internal.level = 3;
            chat(14, 4);
            break;
        case "massage4":
            nav.killall();
            nav.bg("4_lolamassage/013_backrub_006_2.jpg");
            if (sc.getLevel("lola") < 4) {
                charisma.init(g.internal.level + 7, "charisma4Win", "charismaLose", 4);
            }
            else {
                g.internal.level = 4;
                nav.killall();
                nav.bg("4_lolamassage/013_backrub_004.jpg");
                nav.button({
                    "type": "img",
                    "name": "massage",
                    "left": 869,
                    "top": 0,
                    "width": 772,
                    "height": 1080,
                    "image": "4_lolamassage/013_backrub_006.gif"
                }, 4);
                nav.button({
                    "type": "img",
                    "name": "massage",
                    "left": 335,
                    "top": 10,
                    "width": 502,
                    "height": 502,
                    "image": "4_lolamassage/lolaBlush0.png"
                }, 4);
                g.roomTimeout = setTimeout(function () {
                    chat(17, 4);
                }, 2000);
            }
            break;
        case "massage5":
            nav.killbutton("massage5");
            nav.killbutton("massageFinish");
            nav.button({
                "type": "btn",
                "name": "massage5_1",
                "left": 991,
                "top": 400,
                "width": 498,
                "height": 177,
                "image": "4_lolamassage/massage5_1.png"
            }, 4);
            break;
        case "massage5_1":
            if (sc.getLevel("lola") < 5) {
                charisma.init(g.internal.level + 1 + 7, "charisma5Win", "charisma5Lose", 4);
            }
            else {
                room4.btnclick("massage5_2");
            }
            break;
        case "charisma6Win":
            sc.modLevel("lola", 999, 4);
            room4.btnclick("massage5_2");
            break;
        case "massage5_2":
            nav.killall();
            nav.bg("4_lolamassage/013_backrub_004.jpg");
            nav.button({
                "type": "img",
                "name": "massage",
                "left": 869,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "4_lolamassage/013_backrub_007.gif"
            }, 4);
            nav.button({
                "type": "img",
                "name": "massage",
                "left": 335,
                "top": 10,
                "width": 502,
                "height": 502,
                "image": "4_lolamassage/lolaBlush1.png"
            }, 4);
            g.roomTimeout = setTimeout(function () {
                chat(18, 4);
            }, 2500);
            break;
        case "charisma4Win":
            sc.modLevel("lola", 999, 3);
            room4.btnclick("massage4");
            break;
        case "charisma5Win":
            room4.btnclick("massage5_2");
            break;
        case "cancel":
            char.room(13);
            break;
        default:
            break;
    }
};

room4.chatcatch = function (callback) {
    switch (callback) {
        case "massage0":
            nav.bg("4_lolamassage/013_bedBr.jpg");
            nav.button({
                "type": "img",
                "name": "massage",
                "left": 869,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "4_lolamassage/013_backrub_001.gif"
            }, 4);
            g.roomTimeout = setTimeout(function () {
                chat(2, 4);
            }, 2000);
            break;
        case "massage1":
            nav.killbutton("massage");
            nav.bg("4_lolamassage/013_bedBr.jpg");
            nav.button({
                "type": "img",
                "name": "lolabody",
                "left": 1106,
                "top": 85,
                "width": 337,
                "height": 967,
                "image": "4_lolamassage/lola_topless.png"
            }, 4);
            nav.button({
                "type": "btn",
                "name": "massage1Shirt",
                "left": 1184,
                "top": 219,
                "width": 199,
                "height": 177,
                "image": "4_lolamassage/lola_shirt.png"
            }, 4);
            sc.select("massageFinish", "4_lolamassage/icon_finishMassage.png", 0);
            break;
        case "massage2":
            nav.bg("4_lolamassage/013_backrub_004.jpg");
            nav.button({
                "type": "img",
                "name": "massage",
                "left": 880,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "4_lolamassage/013_backrub_004.gif"
            }, 4);
            g.roomTimeout = setTimeout(function () {
                chat(9, 4);
            }, 2000);
            break;
        case "massage3":
            nav.bg("4_lolamassage/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "massage",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "4_lolamassage/013_backrub_005.gif"
            }, 4);
            g.roomTimeout = setTimeout(function () {
                chat(16, 4);
            }, 2000);
            break;
        case "massage4":
            nav.killall();
            nav.bg("4_lolamassage/013_backrub_006.jpg");
            nav.button({
                "type": "btn",
                "name": "massage4",
                "left": 1021,
                "top": 218,
                "width": 442,
                "height": 250,
                "image": "4_lolamassage/013_backrub_006.png"
            }, 4);
            sc.select("massageFinish", "4_lolamassage/icon_finishMassage.png", 0);
            break;
        case "massage5":
            nav.killall();
            nav.bg("4_lolamassage/013_backrub_006.jpg");
            nav.button({
                "type": "btn",
                "name": "massage5",
                "left": 1021,
                "top": 218,
                "width": 442,
                "height": 250,
                "image": "4_lolamassage/013_backrub_006.png"
            }, 4);
            sc.select("massageFinish", "4_lolamassage/icon_finishMassage.png", 0);
            break;
        case "massage6":
            sc.completeMission("lola", "massage", true);
            nav.bg("4_lolamassage/013_backrub_007.jpg");
            break;
        case "massage6_1":
            nav.killall();
            nav.bg("4_lolamassage/massage7day.jpg", "4_lolamassage/massage7night.jpg");
            break;
        case "charRoll":
            nav.killbutton("massageFinish");
            charisma.init(g.internal.level + 7, "charisma2Win", "charismaLose", 4);
            break;
        case "massageFinish":
            gv.mod("arousal", 53);
            sc.completeMissionTask("lola", "massage", g.internal.level, true);
            if (g.internal.level > 0) {
                if (sc.getMission("lola", "games").notStarted) {
                    sc.startMission("lola", "games");
                    sc.completeMissionTask("lola", "games", 0);
                }
            }
            sc.modLevel("lola", 38, g.internal.level);
            char.addtime(46);
            if (g.hourBetween(7, 21))
                char.room(13);
            else
                char.room(11);
            break;
        case "leave":
            if (g.hourBetween(7, 21))
                char.room(13);
            else
                char.room(11);
            break;
        default:
            break;
    }
};

room4.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I know you go swimming a lot, do you need a massage?",
            button: [
                { chatID: 1, text: "?", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "lola",
            text: "Oh, uh, sure! I guess I could really use a massage. ",
            button: [
                { chatID: -1, text: "Great, just lay back and relax and I'll take care of you.", callback: "massage0" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "She's so tight and trim. I really love touching her, but I want to touch her skin. Maybe she'll let me " +
                "pull up her shirt. It's innocent enough. I'm doing her a favor by giving her a better massage. ",
            button: [
                { chatID: -1, text: "...", callback: "massage1" },
            ]
        },
        {
            chatID: 3,
            speaker: "lola",
            text: "I don't think I'm ready for that. ",
            button: [
                { chatID: 4, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I need to improve my relationship with " + sc.n("lola") + ". Maybe I can speed things up by talking her into it. ",
            button: [
                { chatID: -1, text: "It's worth a try. " + charisma.getStats(g.internal.level + 7).txt, callback: "charRoll" },
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Hey baby you want to strip them clothes? ",
            button: [
                { chatID: 6, text: "...", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "lola",
            text: "No! We're done here. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "massageFinish" },
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "You know it would be better if I lifted your shirt up. Just to give you a much better massage. ",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "lola",
            text: "I guess that's ok. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "lola",
            text: "MmmmmmmMMMm I love your hands. So powerful. You're really the best! ",
            button: [
                { chatID: -1, text: "[Finish the massage]", callback: "massageFinish" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Do you want to take your shirt off. Just to give you the best massage. ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "I guess that's ok. You won't try any funny business with your " + sc.n("el") + ". ",
            button: [
                { chatID: -1, text: "Nope. No funny business here. ", callback: "massage1" }
            ]
        },
        {
            chatID: 12,
            speaker: "lola",
            text: "Hey, my legs are really really tight. Can you massage them for me? ",
            button: [
                { chatID: 13, text: "Sure! Your dress is really thick. Do you mind taking it off so I can give you a proper massage? ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "Well... I guess that's ok if you see me in my panties. I'm your " + sc.n("el") + " afterall. ",
            button: [
                { chatID: -1, text: "Ok.", callback: "massage2" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "You know... I noticed how tight your glutes are. With as much stress as you put on them they could use " +
                "a good massage. Tight glutes give you bad posture. ",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "Really? That makes sense. I'm game, but don't you dare touch my no no zones. ",
            button: [
                { chatID: -1, text: "I would never!", callback: "massage3" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "She is so horny I can smell her arousal. I wonder if she'll let me slide her panties to the side and rub her pussy.... ",
            button: [
                { chatID: -1, text: "...", callback: "massage4" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "She's not stopping me! Let's see if she lets me pull off her panties. ",
            button: [
                { chatID: -1, text: "...", callback: "massage5" }
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "She's so horny and wet. Maybe I can eat her out or fuck her. Let's see how far she'll let me go! ",
            button: [
                { chatID: 19, text: "...", callback: "massage6" },
            ]
        },
        {
            chatID: 19,
            speaker: "lola",
            text: "Huh? ",
            button: [
                { chatID: 20, text: "...", callback: "massage6_1" },
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "I'm standing right here! ",
            button: [
                { chatID: 21, text: "...", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "Oh oh. Yes. Sorry it was very relaxed. You need to get off me so I can get dressed. I'm so sorry. This " +
                "is just inappropriate. ",
            button: [
                { chatID: -1, text: "oh yeah.", callback: "massageFinish" },
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "Not so fast mister slick hands. These are staying on!",
            button: [
                { chatID: -1, text: "oh yeah.", callback: "massageFinish" },
            ]
        },
        {
            chatID: 23,
            speaker: "me",
            text: "I'll bet you could use another massage.",
            button: [
                { chatID: 24, text: "...", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "I'm still good from the one you gave me earlier today Mr. Handsy. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};