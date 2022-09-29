//Room name
var room325 = {};
room325.main = function () {
    if (g.isNight) {
        chat()
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "rachel",
                "left": 1066,
                "top": 74,
                "width": 675,
                "height": 1006,
                "image": "325_farm/rachel.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 325);
        });
    }
    var navList = [0];
    nav.buildnav(navList);
};

room325.btnclick = function (name) {
    switch (name) {
        case "rachel":
            switch (sc.getstep("rachel")) {
                case 0:
                    chat(0, 325);
                    break;
            }
            break;
        default:
            break;
    }
};

room325.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room325.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "rachel",
            text: "Howdy stranger. What brings you to my farm? ",
            button: [
                { chatID: 1, text: "Just wandering around I guess. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "rachel",
            text: "Wanderin' huh. Well you better wander somewhere else, 'lessen you want to shovel horse shit fer me. ",
            button: [
                { chatID: 2, text: "Would I get paid? ", callback: "" },
                { chatID: -1, text: "Gross, no. I 'lessin I'll leave now. ", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "rachel",
            text: "Oh we got a worker don't we. I'll tell you what kid, I got a farm hand that does that, be he " + 
                "is shit at brushing the horses. You brush my horse and I'll pay you $20 a day. How's 'bout it?",
            button: [
                { chatID: 3, text: "That sounds awesome! ", callback: "" },
                { chatID: -1, text: "I don't need any money. ", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "rachel",
            text: "Arright. Follow me to the li'l barn and I'll show you how it's done. ",
            button: [
                { chatID: -1, text: "Follow her", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};