//Room name
var room326 = {};
room326.main = function () {
    nav.button({
        "type": "brush",
        "name": "horse",
        "left": 491,
        "top": 21,
        "width": 1300,
        "height": 1062,
        "image": "326_stable/horse.png"
    }, 326);
    nav.button({
        "type": "hand",
        "name": "cock",
        "left": 857,
        "top": 633,
        "width": 80,
        "height": 184,
        "image": "326_stable/cock0.png"
    }, 326);
    g.internal = 0;
    var navList = [0];
    nav.buildnav(navList);
};

room326.btnclick = function (name) {
    switch (name) {
        case "horse":
            nav.killall();
            nav.bg("326_stable/brush1.jpg");
            chat(0, 326);
            break;
        case "cock":
            var horseLove2 = sc.getstep("horse");
            if (horseLove2 <= 40) {
                chat(2, 326);
            }
            else {
                nav.killbutton("cock");
                nav.button({
                    "type": "hand",
                    "name": "cock1",
                    "left": 865,
                    "top": 623,
                    "width": 250,
                    "height": 263,
                    "image": "326_stable/cock1.png"
                }, 326);
            }
            break;
        case "cock1":
            nav.killbutton("cock1");
            nav.button({
                "type": "hand",
                "name": "cock2",
                "left": 863,
                "top": 621,
                "width": 355,
                "height": 219,
                "image": "326_stable/cock2.png"
            }, 326);
            break;
        case "cock2":
            var horseystep = sc.getstep("horse");
            if (horseystep < 45) {
                nav.killall();
                nav.bg("326_stable/horse3.jpg");
                chat(3, 326);
            }
            if (horseystep < 60) {
                nav.killall();
                nav.bg("326_stable/horse5.jpg");
                chat(9, 326);
            }
            else {
                chat(14, 326);
            }
            break;
        default:
            break;
    }
};

room326.chatcatch = function (callback) {
    switch (callback) {
        case "brushEnd":
            g.internal = "brush";
            room326.chatcatch("incrementHorse");
            g.mod("money", 20);
            g.setflag("rachelDayEvent");
            char.addtime(60);
            char.room(0);
            break;
        case "badEnd":
            g.setflag("rachelDayEvent");
            char.addtime(60);
            char.room(0);
            break;
        case "stop":
            nav.bg("326_stable/bg.jpg");
            break;
        case "horse4":
            nav.killall();
            nav.bg("326_stable/horse4.jpg");
            break;
        case "horse5":
            nav.bg("326_stable/horse5.jpg");
            break;
        case "horse6":
            nav.bg("326_stable/horse6.jpg");
            break;
        case "horse7":
            cl.c.cumface = true;
            nav.bg("326_stable/bg1.jpg");
            nav.button({
                "type": "img",
                "name": "horse",
                "left": 491,
                "top": 21,
                "width": 1300,
                "height": 1062,
                "image": "326_stable/horse.png"
            }, 326);
            nav.button({
                "type": "img",
                "name": "cock",
                "left": 857,
                "top": 633,
                "width": 80,
                "height": 184,
                "image": "326_stable/cock0.png"
            }, 326);
            zcl.displayface();
            cl.display();
            break;
        case "horseJackitEnd":
            g.internal = "jack";
            room326.chatcatch("incrementHorse");
            g.mod("money", 20);
            g.mod("giveHandjobMale", 1);
            g.setflag("rachelDayEvent");
            char.addtime(60);
            char.room(0);
            break;
        case "checkBrush":
            var checkHorse = sc.getstep("horse");
            if (checkHorse < 20)
                chat(1, 326);
            else if (checkHorse < 40)
                chat(10, 326);
            else if (checkHorse < 60)
                chat(11, 326);
            else if (checkHorse < 80)
                chat(12, 326);
            else
                chat(13, 326);
            break;
        case "incrementHorse":
            var topLevel;
            switch (g.internal) {
                case "brush":
                    topLevel = 40;
                    break;
                case "jack":
                    topLevel = 60;
                    break;
            }
            var horseLove = sc.getstep("horse");
            if (horseLove < topLevel) {
                horseLove += 8;
                if (horseLove > topLevel)
                    horseLove = topLevel;
                sc.setstep("horse", horseLove);
            }
            break;
        case "lick0":
            nav.killall();
            nav.bg("326_stable/lick0.jpg");
            break;
        default:
            break;
    }
};

room326.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "horse",
            text: "*Whinny* *Sigh*",
            button: [
                { chatID: -1, text: "...", callback: "checkBrush" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "That's a good boy. All brushed up. If I keep brushing you I'm sure you'll trust  me.",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 2,
            speaker: "horse",
            text: "*Snort* *Groan*",
            button: [
                { chatID: -1, text: "I don't think he liked that. Probably doens't trust me enough yet. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "What the hell am I doing? I should stop this. ",
            button: [
                { chatID: 4, text: "...", callback: "horse4" },
                { chatID: 6, text: "Stop", callback: "stop" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Really. I should stop, what a fucking degenerate I am. ",
            button: [
                { chatID: 5, text: "...", callback: "horse5" },
                { chatID: 6, text: "Stop, Really", callback: "stop" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "STOP YOU SICK FUCK. Stop stop stop!",
            button: [
                { chatID: 7, text: "...", callback: "horse6" },
                { chatID: 6, text: "Stop or he's going to blow!", callback: "stop" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "I'll just put " + sc.n("horse") + " back and never speak of this. ",
            button: [
                { chatID: -1, text: "...", callback: "badEnd" }
            ]
        },
        {
            chatID: 7,
            speaker: "horse",
            text: "*Whinny* *Neight* *Sigh*",
            button: [
                { chatID: 8, text: "AAAAAaaahhhhh!", callback: "horse7" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "BLECH! I'm covered in horse cum! ",
            button: [
                { chatID: -1, text: "I guess I'll have to walk home and show everyone how disgusting I am.", callback: "horseJackitEnd" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Here I go, jacking of horses again. ",
            button: [
                { chatID: 7, text: "...", callback: "horse6" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "That's a good boy. He doesn't trust me yet, but it's getting closer.",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "I'm almost there. I can feel the horse trusting me more. ",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "I'm pretty sure the horse trusts me pretty good now. ",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "I'm sure the horse completely trusts me now. ",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Hay " + sc.n("horse") + ". Can I fit you in my mouth?",
            button: [
                { chatID: 15, text: "Lick it", callback: "lick0" },
                { chatID: -1, text: "Just brush it", callback: "horse" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "Not as bad as I thought. I wonder if I can fit it in my mouth?",
            button: [
                { chatID: 16, text: "...", callback: "lick1" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "So big! I don't think I can fit any more in! I hope I'm deep enough to make him cum.",
            button: [
                { chatID: 17, text: "...", callback: "lick2" },
            ]
        },
        {
            chatID: 17,
            speaker: "rachel",
            text: "This isn't quite what I thought you'd be doin' when you came in to brush " + sc.n("horse") + ". ",
            button: [
                { chatID: 18, text: "!!!", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "rachel",
            text: "I didn't mean for you to stop. Keep going. I've never seen a horse get a blow job. Finish up, I want " +
                "to watch. ",
            button: [
                { chatID: 19, text: "*GULP* ok. ", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};