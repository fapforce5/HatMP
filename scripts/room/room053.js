//Candy name
var room53 = {};
room53.main = function () {
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
    if (sc.candy().thisRoom) {
        nav.bg("53_candy/53_candyRoom_night_sleep.jpg")
    }
    var navList = [51, 55];
    nav.buildnav(navList);
};

room53.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room53.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room53.chat = function (chatID) {
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