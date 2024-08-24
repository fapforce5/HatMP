﻿//Room name
var room213 = {};
room213.main = function () {
    nav.button({
        "type": "img",
        "name": "lb",
        "left": 125,
        "top": 456,
        "width": 802,
        "height": 409,
        "image": "213_pink/lb" + g.rand(0, 3) + ".png",
    }, 213);
    nav.button({
        "type": "img",
        "name": "rb",
        "left": 1101,
        "top": 487,
        "width": 683,
        "height": 317,
        "image": "213_pink/rb" + g.rand(0, 3) + ".png",
    }, 213);
    nav.button({
        "type": "img",
        "name": "c",
        "left": 656,
        "top": 440,
        "width": 732,
        "height": 570,
        "image": "213_pink/c" + g.rand(0, 3) + ".png",
    }, 213);
    nav.button({
        "type": "img",
        "name": "lf",
        "left": 20,
        "top": 272,
        "width": 661,
        "height": 808,
        "image": "213_pink/lf" + g.rand(0, 3) + ".png",
    }, 213);
    nav.button({
        "type": "img",
        "name": "rf",
        "left": 1408,
        "top": 383,
        "width": 433,
        "height": 651,
        "image": "213_pink/rf" + g.rand(0, 3) + ".png",
    }, 213);

    if (sc.getMissionTask("p", "pink", 0).notStarted) {
        sc.completeMissionTask("p", "pink", 0);
        nav.button({
            "type": "btn",
            "name": "p",
            "left": 587,
            "top": 94,
            "width": 684,
            "height": 986,
            "image": "213_pink/p.png",
        }, 213);
        chat(0, 213);
    }
    else {
        sc.select("icon_waitress", "213_pink/icon_waitress.png", 1);
        nav.buildnav([214, 215, 171]);
    }
};

room213.btnclick = function (name) {
    switch (name) {
        case "icon_waitress":
            if (gv.get("energy") < 33) {
                chat(33, 213);
            }
            else if (sc.getMissionTask("p", "pink", 2).notStarted) {
                sc.completeMissionTask("p", "pink", 2);
                nav.killall();
                nav.bg("213_pink/bgc.jpg");
                room213.btnclick("drawCloseupBgChar");

                if (missy.get("pinkEntrance") === 0) {
                    nav.button({
                        "type": "img",
                        "name": "pg",
                        "left": 482,
                        "top": 0,
                        "width": 1249,
                        "height": 1080,
                        "image": "213_pink/pg.png",
                    }, 213);
                    chat(7, 213);
                }
            }
            else {
                nav.killall();
                nav.bg("213_pink/bgc.jpg");
                room213.btnclick("drawCloseupBgChar");
                nav.button({
                    "type": "img",
                    "name": "g",
                    "left": 1226,
                    "top": 0,
                    "width": 505,
                    "height": 1080,
                    "image": "213_pink/g.png",
                }, 213);
                chat(34, 213);
            }
            break;
        case "drawCloseupBgChar":
            nav.killbutton("bgc");
            nav.killbutton("bgc1")
            nav.button({
                "type": "img",
                "name": "bgc",
                "left": 806,
                "top": 444,
                "width": 597,
                "height": 479,
                "image": "213_pink/wc" + g.rand(0, 3) + ".png",
            }, 213);
            nav.button({
                "type": "img",
                "name": "bgc1",
                "left": 0,
                "top": 282,
                "width": 1920,
                "height": 798,
                "image": "213_pink/we" + g.rand(0, 4) + ".png",
            }, 213);
            break;
        default:
            break;
    }
};

room213.chatcatch = function (callback) {
    switch (callback) {
        
        case "reset":
            char.room(213);
            break;
        case "g0":
            nav.killbutton("pg");
            nav.button({
                "type": "img",
                "name": "g",
                "left": 1226,
                "top": 0,
                "width": 505,
                "height": 1080,
                "image": "213_pink/g.png",
            }, 213);
            break;
        case "g1":
            room213.btnclick("drawCloseupBgChar");
            nav.killbutton("g");
            nav.button({
                "type": "img",
                "name": "g",
                "left": 704,
                "top": 1,
                "width": 824,
                "height": 1079,
                "image": "213_pink/g1.png",
            }, 213);
            
            break;
        case "_0":
            nav.killall();
            room213.btnclick("drawCloseupBgChar");
            room213.chatcatch("_0_" + g.rand(0, 3));
            return;
        case "_0_0":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 980,
                "top": 148,
                "width": 406,
                "height": 932,
                "image": "213_pink/_0_0.png",
            }, 213);
            chat(12, 213);
            break;
        case "_0_1":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 767,
                "top": 109,
                "width": 619,
                "height": 958,
                "image": "213_pink/_0_1.png",
            }, 213);
            chat(14, 213);
            break;
        case "_0_1a":
            nav.killbutton("e");
            nav.button({
                "type": "img",
                "name": "e",
                "left": 767,
                "top": 109,
                "width": 822,
                "height": 958,
                "image": "213_pink/_0_1a.png",
            }, 213);
            break;
        case "_0_1b":
            nav.killbutton("e");
            nav.button({
                "type": "img",
                "name": "e",
                "left": 767,
                "top": 109,
                "width": 619,
                "height": 958,
                "image": "213_pink/_0_1.png",
            }, 213);
            break;
        case "_0_2":
            nav.killbutton("e");
            nav.button({
                "type": "img",
                "name": "e",
                "left": 700,
                "top": 0,
                "width": 686,
                "height": 1080,
                "image": "213_pink/_0_2.png",
            }, 213);
            if (sc.getMission("construction", "sex").notStarted) {
                sc.startMission("construction", "sex");
                sc.completeMissionTask("construction", "sex", 0);
                sc.show("construction");
                chat(18, 213);
            }
            else
                chat(19, 213);
            break;
        case "_1":
            nav.killall();
            room213.btnclick("drawCloseupBgChar");
            room213.chatcatch("_1_" + g.rand(0, 3));
            break;
        case "_1_0":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 635,
                "top": 0,
                "width": 966,
                "height": 1080,
                "image": "213_pink/_1_0.png",
            }, 213);
            chat(20, 213);
            break;
        case "_1_1":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 635,
                "top": 89,
                "width": 1117,
                "height": 991,
                "image": "213_pink/_1_1.png",
            }, 213);
            chat(21, 213);
            break;
        case "_1_2":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 635,
                "top": 85,
                "width": 931,
                "height": 995,
                "image": "213_pink/_1_2.png",
            }, 213);
            chat(24, 213);
            break;
        case "_2":
            nav.killall();
            nav.bg("213_pink/bgc.jpg");
            room213.btnclick("drawCloseupBgChar");
            room213.chatcatch("_2_" + g.rand(0, 3));
            break;
        case "_2_0":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 862,
                "top": 160,
                "width": 866,
                "height": 920,
                "image": "213_pink/_2_0.png",
            }, 213);
            chat(25, 213);
            break;
        case "_2_0a":
            nav.killbutton("e");
            nav.button({
                "type": "img",
                "name": "e",
                "left": 793,
                "top": 150,
                "width": 569,
                "height": 930,
                "image": "213_pink/_2_0a.png",
            }, 213);
            break;
        case "_2_0b":
            nav.killall();
            nav.bg("213_pink/_2_0b.jpg");
            levels.anal(3, false, "m", true);
            break;
        case "_2_1":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 528,
                "top": 62,
                "width": 949,
                "height": 1018,
                "image": "213_pink/_2_1.png",
            }, 213);
            chat(29, 213);
            break;
        case "_2_1a":
            sc.completeMissionTask("photo", "photo", 1);
            nav.killbutton("e");
            nav.button({
                "type": "img",
                "name": "e",
                "left": 1109,
                "top": 132,
                "width": 368,
                "height": 948,
                "image": "213_pink/_2_1a.png",
            }, 213);
            break;
        case "_2_2":
            nav.button({
                "type": "img",
                "name": "e",
                "left": 732,
                "top": 39,
                "width": 745,
                "height": 1041,
                "image": "213_pink/_2_2.png",
            }, 213);
            chat(31, 213);
            break;
        case "_3":
            nav.killall();
            nav.bg("213_pink/bgc.jpg");
            room213.btnclick("drawCloseupBgChar");
            gv.mod("energy", -33);
            gv.mod("money", 25);
            gv.mod("pink", 1);
            nav.button({
                "type": "img",
                "name": "e",
                "left": 623,
                "top": 1,
                "width": 856,
                "height": 1079,
                "image": "213_pink/_3.png",
            }, 213);
            chat(32, 213);
            break;
        default:
            break;
    }
};

room213.chat = function (chatID) {
    if (chatID === 100) {
        return;

    }
    var cArray = [
        {
            chatID: 0,
            speaker: "p",
            text: "Welcome to the Pink Room. The most exclusive place in the entire city. Let me give you a short tour. ",
            button: [
                { chatID: 1, text: "ok!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "p",
            text: "This is the parlour. Many of my clients like to relax and network with other like minded " +
                "busy professionals in our area. I want a girl out here to serve drinks to our guests " +
                "while they wait, but I'm always so short staffed. It's a great way to start working here. ",
            button: [
                { chatID: 2, text: "Sounds like fun. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "p",
            text: "Yes. Just know that many of our cliets can get a little handsy. It can be surprising for a new girl. " +
                "Now follow me to the game room. ",
            button: [
                { chatID: 3, text: "[Follow her]", callback: "game" }
            ]
        },
        {
            chatID: 3,
            speaker: "p",
            text: "This is the game room. Some of our patrons like to socialize while getting serviced. There's a few " +
                "young gentlemen that spend more time here than at their own home. Let's continue the tour. ",
            button: [
                { chatID: 4, text: "[Follow her]", callback: "hallway" }
            ]
        },
        {
            chatID: 4,
            speaker: "p",
            text: "These are the rooms. Only the best get a room here. As you can see girls and boys get a steady run " +
                "of clients. The last location I'm going to show you is a favorite of the local perverts. Come. ",
            button: [
                { chatID: 5, text: "[Follow her]", callback: "hole" }
            ]
        },
        {
            chatID: 5,
            speaker: "p",
            text: "This is the glory ho wall. Only the sluttiest of sluts can serve here. Sluts that live by the rule " +
                "that the client can do anything they want to your holes. Let's return back to the main parlour.",
            button: [
                { chatID: 6, text: "[Return to the main parlour]", callback: "parlourx" }
            ]
        },
        {
            chatID: 6,
            speaker: "p",
            text: "Now that you've viewed each room, I can't have an awkward virgin working in all the room. I use your " +
                "Sissy points to determin your worth. The more sissy points you have the more options for work. ",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "p",
            text: "Oh great! I do need a sexy girl like you to mingle and entertain our arriving " +
                "guests. Each person should get a friendly greeting once they walk in the door and " +
                "a invitation to come back when they leave. If someone looks nervous, or lost " +
                "I need you to help them feel welcome and guide them to the room they want. ",
            button: [
                { chatID: 8, text: "I can do that!", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "p",
            text: "Awesome! I know you'll do great! Geoffrey here will get you ready and show " +
                "you the ropes. Listen to what he says. He really is the best! I've got to mingle. ", 
            button: [
                { chatID: 9, text: "ok", callback: "g0" }
            ]
        },
        {
            chatID: 9,
            speaker: "!g",
            text: "Ugh. Another idiot sissy. I don't know why " + sc.n("p") + " keeps you idiots " +
                "around. I swear every one of you has two brain cells fighting for second place. " +
                "*snort* You best fit will be a wind holder. I have just the setup to hold the wine " +
                "and ensure you don't pester our customers with the drivel that pours out of your " +
                "mouth. ",
            button: [
                { chatID: 10, text: "..but how will I greet people? ", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "!g",
            text: "That's the beauty. You won't. Leave that to me. We don't need you scaring off " +
                "people when they arrive. Stand by while I get you set up in your new attire. ",
            button: [
                { chatID: 11, text: "grrrr...", callback: "g1" }
            ]
        },
        {
            chatID: 11,
            speaker: "!g",
            text: "Perfect. Now you'll need to keep your mouth closed so you don't spill a drop. " +
                "Now post here and serve our guests. ",
            button: [
                { chatID: -1, text: "MMmmmMmmmm", callback: "_0" }
            ]
        },
        {
            chatID: 12,
            speaker: "!thomas",
            text: "OOOoo hey baby! Isn't the Pink Room the best! ",
            button: [
                { chatID: 13, text: "uhhmm hhmmmm", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "!thomas",
            text: "I've swollow so much cum I don't even eat lunch anymore. Oh! I see my " +
                "favorite customer. Let me grab a glass of wine for him. When he's drunk he lasts " +
                "so much longer, and his dick hits me in just the right place! I'll catch you later " +
                "baby. ",
            button: [
                { chatID: -1, text: "MMmm mmm", callback: "_1" }
            ]
        },
        {
            chatID: 14,
            speaker: "!boy",
            text: "Hi. You're pretty. Do you play Risk? I love playing Risk. It's a great board " +
                "game. This one time I was playing I was stuck starting with Asia. I don't like " +
                "starting with Asia... proceeds to tell you about his entire game....",
            button: [
                { chatID: 15, text: ".....", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "!boy",
            text: "I like you. You're easy to talk to. Would you like to come over and play " +
                "Risk? I have the new version where you can be space pirates....",
            button: [
                { chatID: 16, text: ".....", callback: "_0_1a" }
            ]
        },
        {
            chatID: 16,
            speaker: "!girl",
            text: "HAhahahaha! What a loser! Can't you see she can't talk! No one would ever " +
                "play Risk with you! Get a life! ",
            button: [
                { chatID: 17, text: ".....", callback: "_0_1b" }
            ]
        },
        {
            chatID: 17,
            speaker: "!boy",
            text: "Oh... I'm just going to get a wine... *sniffle* ",
            button: [
                { chatID: -1, text: "Hmmmm", callback: "_1" }
            ]
        },
        {
            chatID: 18,
            speaker: "bossman",
            text: "Oh shit! " + sc.n("me") + "! I didn't know you're a slut! You should come " +
                "put in some hours at the site, I could use some lunch time anal. ",
            button: [
                { chatID: -1, text: "mmMmmMmmmm", callback: "_1" }
            ]
        },
        {
            chatID: 19,
            speaker: "bossman",
            text: "Looking to spread those cheeks at lunch slut",
            button: [
                { chatID: -1, text: "mmMmmMmmmm", callback: "_1" }
            ]
        },
        {
            chatID: 20,
            speaker: "boy",
            text: "It's a good thing we're in public. I would love to take you back to my " +
                "trailer, skin you like a deer, and make you into sausages. ",
            button: [
                { chatID: -1, text: "hhrrrrmmmm!", callback: "_2" }
            ]
        },
        {
            chatID: 21,
            speaker: "!chris",
            text: "Oh my god! I so need a break. I just spent an hour in the glory hole, which  " +
                "I usually love, but the last guy that came in stunk so bad I threw up in my " +
                "mouth a little bit. Why is it so hard for men to take a quick shower before " +
                "fucking me in my ass. It's like there's no respect here. ",
            button: [
                { chatID: 22, text: "MMm hhhhmmmmm!", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "!thomas",
            text: "Speaking of resepct. I met the nicest dom. She had a private room that she took " +
                "me too, tied me up, teased me for an hour, then made such beautiful love to me! " +
                "I'm so totally in love right now. I'm so totally going to be her wife, cook her " +
                "meals, clean the house, and dress in the prettiest dresses for her. Ohhhh wow. I'm " +
                "so in love. ",
            button: [
                { chatID: 23, text: "MMMMmmmm hhmmmm!", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "!chris",
            text: "That's so beautiful. I want my own mommy dommy. And a daddy dommy. I just want " +
                "to be fucked. " + sc.n("me") + ", I'm going to grab a glass of your wine and get " +
                "back to the glory holes. I need to get fucked some more!",
            button: [
                { chatID: -1, text: "hhhmmmm mmmm!", callback: "_2" }
            ]
        },
        {
            chatID: 24,
            speaker: "!girl",
            text: "Oh darling. You're so hot. Love the bindings. Nothing hotter that a slut " +
                "that knows their worth. Have you heard of the C.U.M. Cult? They would love " +
                "a tasty treat like you. ",
            button: [
                { chatID: 25, text: "Mmmmm MMmmmm", callback: "_2" }
            ]
        },
        {
            chatID: 25,
            speaker: "!boy",
            text: "Oooooo, nice ass! ",
            button: [
                { chatID: 26, text: "?", callback: "_2_0a" }
            ]
        },
        {
            chatID: 26,
            speaker: "!boy",
            text: "Oooooo, nice ass! ",
            button: [
                { chatID: 27, text: "?", callback: "_2_0a" }
            ]
        },
        {
            chatID: 27,
            speaker: "!boy",
            text: "Oh fuck! Love an easy slut! FFuuuckkk you feel good!",
            button: [
                { chatID: 28, text: "hhMMmhhh mMMmhhhMmmmm", callback: "_2_0b" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "What the hell! I guess I'm just a free use whore now. I don't even know " +
                "what he looked like, but I do know what his cum dribbling out of my ass " +
                "feels like. ",
            button: [
                { chatID: -1, text: "mmmmm", callback: "_3" }
            ]
        },
        {
            chatID: 29,
            speaker: "!boy",
            text: "say qie zi!",
            button: [
                { chatID: 30, text: "hmmmm", callback: "_2_1a" }
            ]
        },
        {
            chatID: 30,
            speaker: "thinking",
            text: "What the hell was that? Did I just become a photo for someone's vacation? ",
            button: [
                { chatID: -1, text: "hmmmm", callback: "_3" }
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "Aren't you just the cutest wine holder. I'd love to chat, but I do have " +
                "an appointment to run to. I so am looking forward to using that ass though! " +
                "I'm going to fuck you so deep you'll fart cum for a week! ",
            button: [
                { chatID: -1, text: "Hmmm mmmhhh", callback: "_3" }
            ]
        },
        {
            chatID: 32,
            speaker: "!g",
            text: "I suppose you earned your $25 pay. ",
            button: [
                { chatID: -1, text: "hhhmmm ooooo", callback: "reset" }
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "I'm too tired to work this room. ",
            button: [
                { chatID: -1, text: "[Need at least 33 energy]", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "!g",
            text: "Ugh. Back again. Let me get you ready. ",
            button: [
                { chatID: -1, text: "Yes!", callback: "_0" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};