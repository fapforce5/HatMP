//Room name
var room949 = {};
room949.main = function () {
    chat(0, 949);
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "949_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 949);
    //});
    //nav.buildnav(navList);
};

room949.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room949.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room949.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!blank",
            text: "You have reached the end of this release. Next release will have the cult and the " +
                "choice. Until then you are stuck here. ",
            button: [
                { chatID: 0, text: "Repeat message (Becuase I didn't read it)", callback: "" },
                { chatID: -1, text: "Close so I can save", callback: "" },
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};