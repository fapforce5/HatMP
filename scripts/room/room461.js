//Room name
var room461 = {};
room461.main = function () {
    if (Math.floor(Math.random() * 3) === 1) {
        nav.button({
            "type": "img",
            "name": "girl",
            "left": 1128,
            "top": 653,
            "width": 598,
            "height": 422,
            "image": "460_parkRun/460_girl2Run1.png"
        }, 461);
    }

    g.mod("energy", -30);
    g.mod("fitness", 15);
    g.mod("leg", 10);
    char.addtime(60);

    if (cl.c.chest < 1)
        chat(1, 461);
    else
        chat(2, 461);
};

room461.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room461.chatcatch = function (callback) {
    switch (callback) {
        case "Complete":
            char.room(450);
            break;
        case "dark":
            char.room(475);
            break;
        case "redo":
            chat(0, 461);
            break;
        case "killgirl":
            nav.killbutton("girlr");
            break;
        default:
            break;
    }
};

room461.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Take the darkened side path", callback: "dark" },
                { chatID: -1, text: "Return to Carnalville Park ", callback: "Complete" },
                { chatID: -1, text: "Run on main path.", callback: "runNext" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Must keep running to lose this weight.... ",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I may be thin, but I'm getting more fit! Also I still hate running....",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "I can't run in this! I'm missing my " + g.internal + ". I can change in the men's bathroom if I saved " +
                "a set of running clothes in my wardrobe saves. ",
            button: [
                { chatID: -1, text: "......", callback: "redo" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I'm too tired to run, must sleep or eat something. ",
            button: [
                { chatID: -1, text: "......", callback: "redo" }
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "Aaaa they're in the woods!!!! Don't go that way!!",
            button: [
                { chatID: -1, text: "Who's in the woods....", callback: "killgirl" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};