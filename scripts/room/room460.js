//Room name
var room460 = {};
room460.main = function () {
    $("#room-inv").show();
    $("#room-menu").show();
    if (Math.floor(Math.random() * 3) === 1) {
        nav.button({
            "type": "btn",
            "name": "girlr",
            "left": 426,
            "top": 400,
            "width": 372,
            "height": 468,
            "image": "460_parkRun/run1.png"
        }, 460);
    }
    nav.button({
        "type": "btn",
        "name": "path1",
        "left": 492,
        "top": 792,
        "width": 492,
        "height": 288,
        "image": "460_parkRun/path1.png"
    }, 460);
    nav.button({
        "type": "btn",
        "name": "path2",
        "left": 1357,
        "top": 265,
        "width": 563,
        "height": 609,
        "image": "460_parkRun/path2.png"
    }, 460);
    nav.button({
        "type": "btn",
        "name": "path3",
        "left": 0,
        "top": 254,
        "width": 528,
        "height": 604,
        "image": "460_parkRun/path3.png"
    }, 460);

    navList = [475, 450];
    g.pass = cl.hasoutfit("workout");
    g.pass = g.pass === null ? "" : g.pass;
    if (g.get("energy") > 29 && g.pass === "")
        navList.push(461);

    nav.buildnav(navList);
};

room460.btnclick = function (name) {
    switch (name) {
        case "girlr":
            chat(0, 460);
            break;
        case "path1":
            char.room(450);
            break;
        case "path2":
            if (g.get("energy") > 29 && g.pass === "")
                char.room(461);
            else {
                if (g.get("energy") < 31)
                    chat(1, 460);
                else
                    chat(2, 460);
            }
            break;
        case "path3":
            if (g.get("energy") < 5)
                chat(4, 460);
            else {
                g.map = { count: 0, lastGold: 0, lastFight: 0, row: 78, col: 10 };
                char.room(475);
            }
            break;
        default:
            break;
    }
};

room460.chatcatch = function (callback) {
    switch (callback) {
        case "killgirl":
            nav.killbutton("girlr");
            break;
        default:
            break;
    }
};

room460.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Aaaa they're in the woods!!!! Don't go that way!!",
            button: [
                { chatID: -1, text: "Who's in the woods....", callback: "killgirl" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I'm too tired to run, must sleep or eat something. ",
            button: [
                { chatID: -1, text: "......", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I can't run in this! I'm missing my " + g.pass + ". I can change in the men's bathroom if I saved " +
                "a set of running clothes in my wardrobe saves. ",
            button: [
                { chatID: -1, text: "......", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "In the middle of... This release",
            button: [
                { chatID: -1, text: "......", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I'm too tired to go adventuring. ",
            button: [
                { chatID: -1, text: "......", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};