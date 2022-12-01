//Room name
var room327 = {};
room327.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "getmilked",
            "left": 726,
            "top": 232,
            "width": 470,
            "height": 605,
            "image": "327_milking/getmilked.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 327);
    });
    nav.buildnav(navList);
};

room327.btnclick = function (name) {
    switch (name) {
        case "getmilked":
            nav.killall();
            break;
        default:
            break;
    }
};

room327.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room327.chat = function (chatID) {
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