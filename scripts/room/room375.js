//Room name
var room375 = {};
room375.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "cop",
            "left": 1198,
            "top": 196,
            "width": 380,
            "height": 280,
            "image": "375_cop/cop2.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 375);
    });
    nav.buildnav(navList);
};

room375.btnclick = function (name) {
    switch (name) {
        case "cop":
            chat(0, 375);
            break;
        default:
            break;
    }
};

room375.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room375.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cop2",
            text: "Yeah?",
            button: [
                { chatID: -1, text: "I've got nothing. ", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};