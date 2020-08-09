//Room name
var room58 = {};
room58.main = function () {
    var btnList = [
        {
            "type": "img",
            "name": "name",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "58_camwhore/fg.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 58);
    });
    $(".room-left").hide();
    chat(0, 58);
};

room58.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room58.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            $(".room-left").show();
            char.room(57);
            break;
        default:
            break;
    }
};

room58.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "This is yet to come",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};