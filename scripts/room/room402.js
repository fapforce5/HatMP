//Fashionable Male
var room402 = {};
room402.main = function () {
    if (sc.getstep("me") < 7) {
        chat(0, 402);
    }
    else if (sc.getstep("me") > 7) {
        nav.button({
            "type": "btn",
            "name": "change",
            "left": 1222,
            "top": 110,
            "width": 653,
            "height": 675,
            "image": "402_mens/change.png"
        }, 402);
        nav.button({
            "type": "btn",
            "name": "jada",
            "left": 498,
            "top": 87,
            "width": 584,
            "height": 993,
            "image": "402_mens/jada.png"
        }, 402);
    }
    var navList = [400];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 402);
    //});
    nav.buildnav(navList);
};

room402.btnclick = function (name) {
    switch (name) {
        case "change":
            g.pass = "bra";
            char.room(401);
            break;
        case "jada":
            chat(1, 402);
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
        },
        {
            chatID: 1, 
            speaker: "jada",
            text: "We will talk more in the future.",
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