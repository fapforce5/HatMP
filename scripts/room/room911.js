//Room name
var room911 = {};
room911.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "mayor",
            "left": 885,
            "top": 592,
            "width": 157,
            "height": 169,
            "title": "Mayor's Office",
            "image": "911_cityhall/mayor.png"
        },
        {
            "type": "btn",
            "name": "records",
            "left": 1745,
            "top": 673,
            "width": 145,
            "height": 330,
            "title": "Record's Office",
            "image": "911_cityhall/records.png"
        },
    ];
    var navList = [910, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 911);
    });
    nav.buildnav(navList);
};

room911.btnclick = function (name) {
    switch (name) {
        case "mayor":
            chat(0, 911);
            break;
        case "records":
            char.room(910);
            break;
        default:
            break;
    }
};

room911.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room911.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I'm not going up there. I don't have any business with the mayor.",
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