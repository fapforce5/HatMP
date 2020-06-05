//Room name
var room51 = {};
room51.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "hallway",
            "left": 1033,
            "top": 268,
            "width": 260,
            "height": 437,
            "image": "51_livingRoom/hallway.png"
        }
    ];

    $.each(btnList, function (i, v) {
        nav.button(v, 51);
    });
    var navList = [55, 0];
    nav.buildnav(navList);
};

room51.btnclick = function (name) {
    switch (name) {
        case "hallway":
            char.room(55);
            break;
        default:
            break;
    }
};

room51.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room51.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};