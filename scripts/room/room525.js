//Room name
var room525 = {};
room525.main = function () {
    if (g.isNight()) {
        var btnList = [
            {
                "type": "btn",
                "name": "cindy",
                "left": 451,
                "top": 200,
                "width": 721,
                "height": 827,
                "image": "525_entrance/cindy.png"
            }
        ];
        var navList = [0];
        if (cl.appearance() > 0)
            navList.push(526);
        $.each(btnList, function (i, v) {
            nav.button(v, 525);
        });
        nav.buildnav(navList);
    }
    else {
        nav.buildnav([0]);
    }
};

room525.btnclick = function (name) {
    switch (name) {
        case "cindy":
            if (cl.appearance() < 1)
                chat(0, 525);
            else
                chat(1, 525);
            break;
        default:
            break;
    }
};

room525.chatcatch = function (callback) {
    switch (callback) {
        case "enter":
            char.room(526);
            break;
        default:
            break;
    }
};

room525.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Hay cutie I can't let you in. You have to meet the dress code, and by dress code, you have to wear a dress. lol!",
            button: [
                { chatID: -1, text: "oh ok", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "Looking great honey! Come on in!",
            button: [
                { chatID: -1, text: "Sweet!", callback: "enter" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};