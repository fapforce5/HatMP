//Room name
var room30 = {};
room30.main = function () {
    if (!g.isNight()) {
        if (sc.sister().roomID === 13) {
            nav.bg("30_peek/pillow.jpg");
        }
    }
    var btnList = [
        {
            "type": "btn",
            "name": "window",
            "left": 240,
            "top": 0,
            "width": 1449,
            "height": 1080,
            "image": "30_peek/window.png"
        }
    ];
    var navList = [0, 29];
    $.each(btnList, function (i, v) {
        nav.button(v, 30);
    });
    nav.buildnav(navList);
};

room30.btnclick = function (name) {
    switch (name) {
        case "window":
            if (g.isNight())
                chat(0, 30);
            else if (sc.sister().roomID === 13)
                chat(1, 30);
            else
                char.room(13);
            break;
        default:
            break;
    }
};

room30.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room30.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: ".... in dev",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 0,
            speaker: "me",
            text: "THEY'RE RIGHT THERE DUMBASS. I can't sneak in now.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};