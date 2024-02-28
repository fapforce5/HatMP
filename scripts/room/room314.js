//Room name
var room314 = {};
room314.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "door",
            "left": 581,
            "top": 518,
            "width": 160,
            "height": 307,
            "image": "314_thirdFloor/door.png"
        },
        {
            "type": "btn",
            "name": "stairs",
            "left": 1176,
            "top": 371,
            "width": 107,
            "height": 573,
            "image": "314_thirdFloor/stairs.png"
        },
    ];
    var navList = [300, 310, 303, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 314);
    });
    nav.buildnav(navList);
};

room314.btnclick = function (name) {
    switch (name) {
        case "stairs":
            char.room(303);
            break;
        default:
            break;
    }
};

room314.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room314.chat = function (chatID) {
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