//Park Men's Room
var room451 = {};

room451.main = function () {
    var canGoOut = cl.hasoutfit("public");
    if (canGoOut === null) {
        var btnList = [
            {
                "type": "btn",
                "name": "stall1",
                "left": 880,
                "top": 155,
                "width": 233,
                "height": 703,
                "image": "451_parkMensRoom/451_stall1.png"
            },
            {
                "type": "btn",
                "name": "stall2",
                "left": 1170,
                "top": 185,
                "width": 206,
                "height": 661,
                "image": "451_parkMensRoom/451_stall2.png"
            },
            {
                "type": "btn",
                "name": "stall3",
                "left": 1427,
                "top": 211,
                "width": 185,
                "height": 623,
                "image": "451_parkMensRoom/451_stall3.png"
            }
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
        case "stall1":
        case "stall2":
        case "stall3":
            nav_roomPass = { name: name, room: "men" };
            char.room(453);
            break;
        default:
            break;
    }
};

room451.chatcatch = function (callback) {
    switch (callback) {
        case "":
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
        }
    ];

    return cArray[chatID];
}