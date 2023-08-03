//Game Room
var room214 = {};
room214.main = function () {
    if (gv.get("energy") < 25) {
        char.room(213)
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "crowd",
                "left": 905,
                "top": 539,
                "width": 1015,
                "height": 541,
                "image": "214_pink/crowd.png",
                "title": "Migle with the crowd"
            },
            {
                "type": "btn",
                "name": "gamer",
                "left": 197,
                "top": 456,
                "width": 717,
                "height": 573,
                "image": "214_pink/gamers.png",
                "title": "Visit the gamers"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 214);
        });
        nav.buildnav([213, 215, 216, 0]);
    }
};

room214.btnclick = function (name) {
    switch (name) {
        case "crowd":
            nav.killall();
            nav.bg("213_pink/chat0.jpg");
            chat(28, 213);
            break;
        case "gamer":
            nav.killall();
            nav.bg("213_pink/gm0.jpg");
            nav.button({
                "type": "btn",
                "name": "gamegirl",
                "left": 1126,
                "top": 0,
                "width": 794,
                "height": 1080,
                "image": "213_pink/gm0_woman.png",
                "title": "Girl"
            }, 214);
            nav.button({
                "type": "btn",
                "name": "gameboy",
                "left": 119,
                "top": 0,
                "width": 1064,
                "height": 1080,
                "image": "213_pink/gm0_man.png",
                "title": "Boy"
            }, 214);
            break;
        case "gamegirl":
            nav.killall();
            nav.bg("213_pink/gmw1.jpg");
            chat(21, 213);
            break;
        case "gameboy":
            nav.killall();
            nav.bg("213_pink/gm1.jpg");
            chat(25, 213);
            break;
        default:
            break;
    }
};

room214.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room214.chat = function (chatID) {
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