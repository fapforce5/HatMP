//Room name
var room224 = {};
room224.main = function () {
    char.room(199);
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "224_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 224);
    //});
    //nav.buildnav(navList);
};

room224.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room224.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room224.chat = function (chatID) {
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