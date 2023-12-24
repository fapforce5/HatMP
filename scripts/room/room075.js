//Room name
var room75 = {};
room75.main = function () {
    g.pass = "";
    if (g.isNight()) {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 602,
            "top": 29,
            "width": 507,
            "height": 1051,
            "image": "75_bimbo/doorNight.png",
        }, 75);
    }
    else {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 568,
            "top": 45,
            "width": 520,
            "height": 1035,
            "image": "75_bimbo/door.png",
        }, 75);
    }

    var navList = [0];
    nav.buildnav(navList);
};

room75.btnclick = function (name) {
    switch (name) {
        case "door":
            if (inv.has("lockpick"))
                chat(0, 75);
            else
                chat(1, 75);
            break;
        case "picked":
            char.room(77);
            break;
        case "notpicked":
            chat(2, 75);
            break;
        default:
            break;
    }
};

room75.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "pick":
            lockpick.init(2, "picked", "notpicked", 60, 75);
            break;
        case "enter":
            char.room(77);
            break;
        default:
            break;
    }
};

room75.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "The door's locked. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "The door's locked. ",
            button: [
                { chatID: -1, text: "Pick the Lock", callback: "pick" },
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Crap! That didn't work. ",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};