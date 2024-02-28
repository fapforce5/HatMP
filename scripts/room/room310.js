﻿//Room name
var room310 = {};
room310.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "name",
            "left": 581,
            "top": 518,
            "width": 160,
            "height": 307,
            "image": "310_secondfloor/door.png"
        },
        {
            "type": "btn",
            "name": "stairs",
            "left": 1176,
            "top": 371,
            "width": 107,
            "height": 573,
            "image": "314_thirdFloor/stairs.png"
        },
    ];
    var navList = [300, 314, 303, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 310);
    });
    nav.buildnav(navList);
};

room310.btnclick = function (name) {
    switch (name) {
        case "stairs":
            char.room(314);
            break;
        case "door":
            nav.button({
                "type": "img",
                "name": "dollmaker",
                "left": 725,
                "top": 470,
                "width": 329,
                "height": 610,
                "image": "314_thirdFloor/dollmaker.png"
            }, 310)
            
            break;
        default:
            break;
    }
};

room310.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room310.chat = function (chatID) {
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