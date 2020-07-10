//Room name
var room208 = {};
room208.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "name",
            "left": 1741,
            "top": 618,
            "width": 130,
            "height": 252,
            "image": "208_red/hole.png"
        }
    ];
    var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 208);
    //});
    nav.buildnav(navList);
};

room208.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room208.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room208.chat = function (chatID) {
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