//Room name
var room56 = {};
room56.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "shower",
            "left": 50,
            "top": 0,
            "width": 1027,
            "height": 1080,
            "image": "56_bathroom/shower.png"
        },
        {
            "type": "btn",
            "name": "mirror",
            "left": 1294,
            "top": 0,
            "width": 625,
            "height": 471,
            "image": "56_bathroom/mirror.png"
        }
    ];
    var navList = [51, 55];
    $.each(btnList, function (i, v) {
        nav.button(v, 56);
    });
    nav.buildnav(navList);
};

room56.btnclick = function (name) {
    switch (name) {
        case "shower":
            if (g.diffDatesByDays(g.dt, g.get("shower")) === 0)
                chat(0, 56);
            else {
                nav.killall();
                cl.clean("all");
                cl.nude();
                zcl.displayMain(0, 400, .22, "shower");
                nav.bg("56_bathroom/shower.jpg", "56_bathroom/shower.jpg");
                if (inv.get("razor").count > 0)
                    chat(1, 56);
                else
                    chat(2, 56);
            }
            break;
        case "mirror":
            g.pass = 56;
            char.room(27);
            break;
        default:
            break;
    }
};

room56.chatcatch = function (callback) {
    switch (callback) {
        case "shaveBody":
            g.set("bodyhair", 0);
            zcl.displayMain(0, 400, .22, "shower");
            inv.use("razor");
            char.addtime(15);
            cl.display();
            break;
        case "finishShowering":
            cl.undo();
            g.mod("energy", 30);
            char.addtime(30);
            g.set("shower", new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 0, 0, 0, 0));
            char.room(56);
            break;
        case "reloadRoom":
            char.room(56);
            break;
        case "wash":
            cl.clean("face");
            zcl.displayMirror();
            break;
        default:
            break;
    }
};

room56.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I already took a shower today... I'm not OCD",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: 3, text: "Shave your body", callback: "shaveBody" },
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "You shaved your body",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Gotta get clean.",
            button: [
                { chatID: 5, text: "Apply Makeup", callback: "" },
                { chatID: 5, text: "Apply Lipstick", callback: "" },
                { chatID: 6, text: "Wash Face", callback: "wash" },
                { chatID: -1, text: "Finish", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "I don't have that.",
            button: [
                { chatID: -1, text: "Finish", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "All Clean",
            button: [
                { chatID: -1, text: "Finish", callback: "reloadRoom" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};