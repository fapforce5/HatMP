//const Work
var room103 = {};

room103.main = function () {
    btnList = [
        {
            "type": "btn",
            "name": "hole",
            "left": 1302,
            "top": 531,
            "width": 135,
            "height": 124,
            "image": "103_constSite/hole.png",
            "night": "103_constSite/holenight.png"
        },
        {
            "type": "btn",
            "name": "work",
            "left": 315,
            "top": 718,
            "width": 513,
            "height": 272,
            "image": "103_constSite/work.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 103);
    });
    //var thisRand = Math.floor(Math.random() * 10);
    //if (thisRand === 1)
    //    chat(1, 103);
    //else if (thisRand === 2) {
    //    nav.bg("103_constSite/103_topless.png");
    //    chat(3, 103);
    //}
    //else
    //    chat(0, 103);
};

room103.btnclick = function (name) {
    switch (name) {
        case "work":
            console.log("hi")
            chat(0, 103);
            break;
        default:
            break;
    }
};

room103.chatcatch = function (callback) {
    switch (callback) {
        case "complete":
            char.addtime(540);
            g.mod("energy", -60);
            g.mod("fitness", 10);
            g.set("jobConstWorkToday", 1);
            char.room(101);
            break;
        case "pantsed":
            nav.bg("103_constSite/103_pants.png");
            break;
        case "backtoWork":
            nav.bg("103_constSite/103_sweep.png");
            break;
        default:
            break;
    }
};

room103.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "....",
            button: [
                { chatID: -1, text: "Complete Work", callback: "complete" }
            ]
        },
        {
            chatID: 1,
            speaker: "rand",
            text: "Hay " + sc.n("me") + " check this out!!",
            button: [
                { chatID: 2, text: "Huh?", callback: "pantsed" },
                { chatID: 0, text: "No, I've got work to do", callback: "backtoWork" }
            ]
        },
        {
            chatID: 2,
            speaker: "rand",
            text: "Hahahaha check out Jimmy's balls!",
            button: [
                { chatID: 0, text: "Dammit you made me look. [Back to Work]", callback: "backtoWork" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Why is he just standing there... weird",
            button: [
                { chatID: 0, text: "[Back to Work]", callback: "backtoWork" }
            ]
        }
    ];

    return cArray[chatID];
};