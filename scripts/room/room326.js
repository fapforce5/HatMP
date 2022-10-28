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
            else if (horseLove2 <= 80) {
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
            else {
                //get fucked bitch
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
            if (sc.getstep("horse") < 60) {
                nav.killall();
                nav.bg("326_stable/horse3.jpg");
                chat(3, 326);
            }
            else {
                nav.killall();
                nav.bg("326_stable/horse5.jpg");
                chat(9, 326);
            }
            break;
        default:
            break;
    }
};

room326.chatcatch = function (callback) {
    switch (callback) {
        case "brushEnd":
            var horseLove = sc.getstep("horse");
            if (horseLove < 40)
                horseLove += 5;
            sc.setstep("horse", horseLove);
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
            var horseLove = sc.getstep("horse");
            if (horseLove < 60)
                horseLove = 60;
            else if (horseLove < 80)
                horseLove += 5;
            sc.setstep("horse", horseLove);

            g.mod("money", 20);
            g.mod("giveHandjobMale", 1);
            g.setflag("rachelDayEvent");
            char.addtime(60);
            char.room(0);
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
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "That's a good boy. All brushed up. ",
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};