//Room name
var room825 = {};
room825.main = function () {
    if (g.isNight() && g.gethourdecimal() > 19) {
        var btnList = [
            {
                "type": "btn",
                "name": "gang",
                "left": 263,
                "top": 34,
                "width": 1065,
                "height": 1065,
                "image": "825_lot/gang.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 825);
        });
        
    }
    var navList = [0];
    nav.buildnav(navList);
};

room825.btnclick = function (name) {
    switch (name) {
        case "gang":
            chat(0, 825);
            break;
        default:
            break;
    }
};

room825.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room825.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "This is our lot. You better get or we're going to sick chopper on you! ",
            button: [
                { chatID: -1, text: "Squeal and run", callback: "leave" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};