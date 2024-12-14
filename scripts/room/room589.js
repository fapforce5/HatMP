//Room name
var room589 = {};
room589.main = function () {
    switch (Math.floor(g.gethourdecimal())) {
        case 20:
        case 21:
            nav.button({
                "type": "btn",
                "name": "utah",
                "left": 106,
                "top": 18,
                "width": 755,
                "height": 1062,
                "image": "585_livingRoom/utah.png"
            }, 586);
            
            break;
        case 22:

            nav.bg("586_kitchen/bg_22.jpg");
            break;
        case 23:
            nav.bg("586_kitchen/bg_23.jpg");
            break;
        case 0:
            nav.bg("586_kitchen/bg_0.jpg");
            break;
        default:
            nav.bg("586_kitchen/bg_1.jpg");
            break;
    }
    nav.buildnav([585, 586, 587, 588]);
};

room589.btnclick = function (name) {
    switch (name) {
        case "utah":
            chat()
            break;
        default:
            break;
    }
};

room589.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room589.chat = function (chatID) {
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