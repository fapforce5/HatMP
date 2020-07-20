//Room name
var room205 = {};
room205.main = function () {
    if (g.pass === "norm")
        chat(0, 205);
    else if (g.pass === "hypno1") {
        nav.bg("205_computerWork/workdesk.jpg");
        chat(22, 205);
    }
    else if (g.pass === "repeatHypno") {
        nav.bg("205_computerWork/workdesk.jpg");
        chat(24, 205);
    }
};

room205.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room205.chatcatch = function (callback) {
    switch (callback) {
        case "ogBG":
            nav.killall();
            nav.bg("205_computerWork/205_computerWork.png");
            break;
        case "doIgetABj":
            if (Math.random() < .7)
                chat(3, 205);
            else
                chat(2, 205);
            break;
        case "leave":
            g.dt.setHours(18);
            g.pass = "finishComputer";
            char.room(200);
            break;
        case "leavehypno1":
            g.pass = "finishhypno1";
            g.mod("arousal", 100);
            g.mod("sissy", 100);
            char.addtime(420);
            char.room(200);
            break;
        case "leavehypno1repeat":
            g.pass = "finishhypno1repeat";
            g.mod("arousal", 100);
            g.mod("sissy", 20);
            char.addtime(420);
            char.room(200);
            break;
        case "changeBG1":
            nav.bg("205_computerWork/205_emptyChair.png");
            chat(4, 205);
            break;
        case "changeBG2":
            nav.bg("205_computerWork/205_blowBG.png");
            nav.button({
                "type": "img",
                "name": "bj1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "205_computerWork/205_blow1.png"
            }, 205);
            break;
        case "changeBG3":
            nav.bg("205_computerWork/205_blowBG.png");
            nav.button({
                "type": "img",
                "name": "bj2",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "205_computerWork/205_blow2.png"
            }, 205);
            break;
        case "changeBG4":
            nav.button({
                "type": "img",
                "name": "bj3",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "205_computerWork/205_blow3.png"
            }, 205);
            nav.killbutton("bj2");
            nav.killbutton("bj4");
            break;
        case "changeBG5":
            nav.button({
                "type": "img",
                "name": "bj4",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "205_computerWork/205_blow4.png"
            }, 205);
            nav.killbutton("bj3");
            break;
        case "changeBG6":
            nav.button({
                "type": "img",
                "name": "bj5",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "205_computerWork/205_blow5.png"
            }, 205);
            nav.killbutton("bj3");
            nav.killbutton("bj4");
            break;
        case "changeBGNo":
            nav.button({
                "type": "img",
                "name": "bjno",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "205_computerWork/205_blow6.png"
            }, 205);
            nav.killbutton("bj1");
            break;
        case 'black':
            nav.killall();
            nav.bg("205_computerWork/blackBg.jpg");
            break;
        case "hypno1":
            nav.bg("205_computerWork/blackBg.jpg");
            nav.button({
                "type": "img",
                "name": "hypno",
                "left": 500,
                "top": 40,
                "width": 1000,
                "height": 1000,
                "image": "205_computerWork/200_trance1.gif"
            }, 205);
            g.roomTimeout = setTimeout(function () { chat(23, 205); }, 15000);
            break;
        case "hypno1repeat":
            nav.bg("205_computerWork/blackBg.jpg");
            nav.button({
                "type": "img",
                "name": "hypno",
                "left": 500,
                "top": 40,
                "width": 1000,
                "height": 1000,
                "image": "205_computerWork/200_trance1.gif"
            }, 205);
            g.roomTimeout = setTimeout(function () { chat(25, 205); }, 15000);
            break;
        default:
            break;
    }
};

room205.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "La Ti Da, working on the computer, work work work....",
            button: [
                { chatID: 1, text: "[Continue working on computer]", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I'm soooo bored",
            button: [
                { chatID: -1, text: "[Continue working on computer]", callback: "doIgetABj" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Work Complete",
            button: [
                { chatID: -1, text: "[Report to " + sc.n("missy") + "]", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "cecilia",
            text: "Pssst, hey " + sc.n("me") + ".",
            button: [
                { chatID: 4, text: "Ask " + sc.n("cecilia") + " what she wants", callback: "changeBG1" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: sc.n("cecilia") + "... where'd you go.",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "cecilia",
            text: "Hehehe down here silly.",
            button: [
                { chatID: 6, text: "[Look down]", callback: "changeBG2" }
            ]
        },
        {
            chatID: 6,
            speaker: "cecilia",
            text: "I'm so bored do you wanna have some fun?",
            button: [
                { chatID: 8, text: "Yes I would", callback: "" },
                { chatID: 7, text: "No, I just want to get this work done", callback: "changeBGNo" }
            ]
        },
        {
            chatID: 7,
            speaker: "cecilia",
            text: "Awww OK, I'll let you get back to work..",
            button: [
                { chatID: 2, text: "[continue working]", callback: "ogBG" }
            ]
        },
        {
            chatID: 8,
            speaker: "cecilia",
            text: "Yea!! Close your eyes...",
            button: [
                { chatID: 9, text: "[Close eyes]", callback: "black" }
            ]
        },
        {
            chatID: 9,
            speaker: "me",
            text: "Cecilia.. what are you doing?",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "cecilia",
            text: "Shhhh.. just keep your eyes closed and relax.",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "hahah that tickles!",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "cecilia",
            text: "OK you can open them.",
            button: [
                { chatID: 13, text: "[Open eyes]", callback: "changeBG3" }
            ]
        },
        {
            chatID: 13,
            speaker: "cecilia",
            text: "Awww your cock is asleep, let me wake him up.",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "cecilia",
            text: "Suck a beautiful cock. I need a bigger taste.",
            button: [
                { chatID: 15, text: "...", callback: "changeBG4" }
            ]
        },
        {
            chatID: 15,
            speaker: "cecilia",
            text: "MmmmmmHHMmmhh",
            button: [
                { chatID: 16, text: "...", callback: "changeBG5" }
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "oh yeah Cecilia that feels soooo good.",
            button: [
                { chatID: 17, text: "...", callback: "changeBG4" }
            ]
        },
        {
            chatID: 17,
            speaker: "cecilia",
            text: "mmm oooh mmmmHHMMHMmmhHH",
            button: [
                { chatID: 18, text: "...", callback: "changeBG5" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "Oh god, I think I'm about to cum..",
            button: [
                { chatID: 19, text: "...", callback: "changeBG4" }
            ]
        },
        {
            chatID: 19,
            speaker: "cecilia",
            text: "I want your cum, shoot it in my mouth",
            button: [
                { chatID: 20, text: "...", callback: "changeBG5" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "Oh yes!!!! Here it cumsss",
            button: [
                { chatID: 21, text: "...", callback: "changeBG6" }
            ]
        },
        {
            chatID: 21,
            speaker: "cecilia",
            text: "Yummy, You cum is delicious. Thank you baby, I have to get back to work. ",
            button: [
                { chatID: 2, text: "Yes, I should too before " + sc.n("missy").display + " gets angry.", callback: "ogBG" }
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "A happy sissy serves others ",
            button: [
                { chatID: -1, text: "...", callback: "hypno1" }
            ]
        },
        {
            chatID: 23,
            speaker: "me",
            text: "I'm only happy when filled...",
            button: [
                { chatID: -1, text: "[snap out of it]", callback: "leavehypno1" }
            ]
        },
        {
            chatID: 24,
            speaker: "me",
            text: "A happy sissy serves others ",
            button: [
                { chatID: -1, text: "...", callback: "hypno1repeat" }
            ]
        },
        {
            chatID: 25,
            speaker: "me",
            text: "I'm only happy when filled...",
            button: [
                { chatID: -1, text: "[snap out of it]", callback: "leavehypno1repeat" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};