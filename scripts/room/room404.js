//Room name
var room404 = {};
room404.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "spanky",
            "left": 962,
            "top": 80,
            "width": 568,
            "height": 909,
            "image": "404_spankys/spanky.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 404);
    });
    nav.buildnav(navList);
};

room404.btnclick = function (name) {
    switch (name) {
        case "spanky":
            if (sc.getstep("spanky") === 0)
                chat(0, 404);
            else {
                g.pass = "general";
                char.room(401);
            }
            break;
        default:
            break;
    }
};

room404.chatcatch = function (callback) {
    switch (callback) {
        case "purchase":
            sc.setstep("spanky", 1);
            g.pass = "general";
            char.room(401);
            break;
        default:
            break;
    }
};

room404.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "spanky",
            text: "**cough** **cough** What the fuck you want. ",
            button: [
                { chatID: 1, text: "Buy some shit dumbass", callback: "" },
                { chatID: 2, text: "I would like to purchase some of your wares", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "spanky",
            text: "Oh yea",
            button: [
                { chatID: -1, text: "[Buy some shit]", callback: "purchase" }
            ]
        },
        {
            chatID: 2,
            speaker: "spanky",
            text: "huh. we ain't got wares dumb fuck. Piss off",
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