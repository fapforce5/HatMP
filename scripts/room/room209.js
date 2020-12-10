//Room name
var room209 = {};
room209.main = function () {

    if (sc.getstep("missy") < 10) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        chat(0, 209);
    }
    else {
        //

    }
};

room209.btnclick = function (name) {
    switch (name) {
        case "exit":
            g.pass = "207blue";
            char.room(207);
            break;
        default:
            break;
    }
};

room209.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room209.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I don't know what this room is, but it's creepy as fuck.",
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