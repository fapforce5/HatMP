//Room name
var room725 = {};
room725.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "725_folder/hole.png"
    //    }
    //];
    var navList = [0, 726];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 725);
    //});
    nav.buildnav(navList);
};

room725.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room725.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room725.chat = function (chatID) {
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