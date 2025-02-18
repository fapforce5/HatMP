//Room name
var room476 = {};
room476.main = function () {
    if (g.isNight() && g.dt.getDay() !== 5) {
        nav.bg("476_cabin/bg_night_cult.jpg");
        chat(0, 476);

        return
    }

    nav.button({
        "type": "btn",
        "name": "door",
        "left": 572,
        "top": 416,
        "width": 95,
        "height": 215,
        "image": "476_cabin/door.png",
        "night": "476_cabin/door_night.png",
    }, 477);

    nav.buildnav([475]);
};

room476.btnclick = function (name) {
    switch (name) {
        case "door":
            nav.kill();
            nav.bg("", "");
            break;
        default:
            break;
    }
};

room476.chatcatch = function (callback) {
    switch (callback) {
        case "cult0":
            nav.bg("476_cabin/bg_night_cult1.jpg");
            break;
        default:
            break;
    }
};

room476.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Oh crap! I need to get out of here! ",
            button: [
                { chatID: 1, text: "[RUN AWAY!!!]", callback: "cult0" }
            ]
        },
        {
            chatID: 0,
            speaker: "cult",
            text: "Where do you think you're going?",
            button: [
                { chatID: 1, text: "*gulp!*", callback: "cult1" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};