//Room name
var room51 = {};
room51.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "54_folder/hole.png"
    //    }
    //];

    //$.each(btnList, function (i, v) {
    //    nav.button(v, 54);
    //});
    var navList = [50];
    nav.buildnav(navList);
};

room51.btnclick = function (name) {
    switch (name) {
        case "":
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