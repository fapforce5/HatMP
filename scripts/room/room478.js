//Room name
var room478 = {};
room478.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "name",
            "left": 1741,
            "top": 618,
            "width": 130,
            "height": 252,
            "image": "478_folder/hole.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 478);
    });
    nav.buildnav(navList);
};

room478.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room478.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room478.chat = function (chatID) {
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