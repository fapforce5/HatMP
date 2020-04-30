//Pee - not used right now
var room22 = {};
room22.main = function () {
    var btnList = [
        {
            "type": "img",
            "name": "name",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "22_toilet/012_pee_dickanim.gif"
        }
    ];
    var navList = [12];
    $.each(btnList, function (i, v) {
        nav.button(v, 22);
    });
    nav.buildnav(navList);
};

room22.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room22.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room22.chat = function (chatID) {
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