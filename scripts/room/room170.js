//Room name
var room170 = {};
room170.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "170_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 170);
    //});
    chat(0, 170);
    nav.buildnav([213, 214, 171, 215]);
};

room170.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room170.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room170.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "In progress. Will be added in future release",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};