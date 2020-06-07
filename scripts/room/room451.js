﻿//Park Men's Room
var room451 = {};

room451.main = function () {
    var canGoOut = cl.hasoutfit("public");
    if (canGoOut === null) {
        var btnList = [
            {
                "type": "btn",
                "name": "stall1",
                "left": 1225,
                "top": 172,
                "width": 166,
                "height": 546,
                "image": "451_parkMensRoom/451_stall1.png"
            },
            {
                "type": "btn",
                "name": "stall2",
                "left": 1001,
                "top": 149,
                "width": 184,
                "height": 586,
                "image": "451_parkMensRoom/451_stall2.png"
            },
            {
                "type": "btn",
                "name": "stall3",
                "left": 750,
                "top": 118,
                "width": 207,
                "height": 632,
                "image": "451_parkMensRoom/451_stall3.png"
            },
            {
                "type": "btn",
                "name": "mirror",
                "left": 1621,
                "top": 76,
                "width": 233,
                "height": 490,
                "image": "451_parkMensRoom/sink.png"
            },
        ];

        var navList = [450];

        $.each(btnList, function (i, v) {
            nav.button(v, 451);
        });

        nav.buildnav(navList);
    }
    else {
        g.internal = canGoOut;
        chat(0, 451);
    }
};

room451.btnclick = function (name) {
    switch (name) {
        case "stall3":
            nav.killall();
            nav.bg("451_parkMensRoom/stall.jpg");
            nav.buildnav([451]);
            break;
        case "stall2":
            nav.killall();
            nav.bg("451_parkMensRoom/gloryHoleInsert.jpg");
            nav.button({
                "type": "btn",
                "name": "insert",
                "left": 1649,
                "top": 158,
                "width": 124,
                "height": 218,
                "image": "451_parkMensRoom/insert.png"
            }, 451);
            nav.buildnav([451]);
            break;
        case "stall1":
            nav.killall();
            nav.bg("451_parkMensRoom/gloryHole.jpg");
            nav.button({
                "type": "btn",
                "name": "gloryhole",
                "left": 385,
                "top": 158,
                "width": 124,
                "height": 218,
                "image": "451_parkMensRoom/gloryhole.png"
            }, 451);
            nav.buildnav([451]);
            break;
        case "mirror":
            nav.killall();
            nav.bg("451_parkMensRoom/mirror.jpg", "451_parkMensRoom/mirror.jpg");
            cl.displayMirror();
            chat(3, 451);
            break;
        case "insert":
            chat(1, 451);
            break;
        case "gloryhole":
            chat(2, 451);
            break;
        default:
            break;
    }
};

room451.chatcatch = function (callback) {
    switch (callback) {
        case "reloadRoom":
            char.room(451);
            break;
        default:
            break;
    }
};

room451.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I can't go out like this. I need my " + g.internal + ". ",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I'm not going to stick my dick in that...",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I'm not going put my mouth there.",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Looking good",
            button: [
                { chatID: -1, text: "...", callback: "reloadRoom" }
            ]
        }
    ];

    return cArray[chatID];
}