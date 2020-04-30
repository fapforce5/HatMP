//Fashionable Male
var room402 = {};
room402.main = function () {
    if (sc.getstep("me") < 7) {
        chat(0, 402);
    }
    var navList = [400];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 402);
    //});
    nav.buildnav(navList);
};

room402.btnclick = function (name) {
    switch (name) {
        case "clerk":
            g.pass = "mens";
            char.room(401);
            break;
        case "fitting":
            chat(0, 402);
            break;
        default:
            break;
    }
};

room402.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(400);
            break;
        default:
            break;
    }
};

room402.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "There's no way I'm going into this store!",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};