//Room name
var room29 = {};
room29.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "ladder",
            "left": 261,
            "top": 0,
            "width": 342,
            "height": 798,
            "image": "29_backyard/ladder.png",
            "night": "29_backyard/ladder_night.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 29);
    });
    nav.buildnav(navList);
};

room29.btnclick = function (name) {
    switch (name) {
        case "ladder":
            break;
        default:
            break;
    }
};

room29.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room29.chat = function (chatID) {
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