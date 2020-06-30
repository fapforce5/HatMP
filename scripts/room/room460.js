//Room name
var room460 = {};
room460.main = function () {
    g.pass = 0;
    if (g.get("fitness") > 0) 
        g.pass = Math.floor(Math.random() * 5);
    
    if (g.pass > 0 && g.pass < 4) {
        var image = "460_girlRun1.png";
        if (g.pass === 2)
            image = "460_girlRun2.png";
        else if (g.pass === 3)
            image = "460_girlRun3.png";
        nav.button({
            "type": "img",
            "name": "girl",
            "left": 1234,
            "top": 60,
            "width": 587,
            "height": 1020,
            "image": "460_parkRun/" + image
        }, 460);
    }
    chat(0, 460);
};

room460.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room460.chatcatch = function (callback) {
    switch (callback) {
        case "runNext":
            var outfit = cl.hasoutfit("workout");

            if (outfit === null) {
                if (g.get("energy") > 29) {
                    g.mod("energy", -30);
                    g.mod("fitness", 15);
                    g.mod("leg", 10);
                    char.addtime(60);

                    nav.killbutton("girl");
                    nav.bg("460_parkRun/460_run2.png");
                    if (cl.c.chest < 1)
                        chat(1, 460);
                    else
                        chat(2, 460);

                    if (g.pass === 4) {
                        nav.button({
                            "type": "img",
                            "name": "girl",
                            "left": 1128,
                            "top": 653,
                            "width": 598,
                            "height": 422,
                            "image": "460_parkRun/460_girl2Run1.png"
                        }, 460);
                    }
                }
                else {
                    chat(4, 460);
                }
            }
            else {
                g.internal = outfit;
                chat(3, 460);
            }
            break;
        case "Complete":
            char.room(450);
            break;
        case "dark":
            char.room(475);
            break;
        case "redo":
            chat(0, 460);
            break;
        default:
            break;
    }
};

room460.chat = function (chatID) {
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
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};