//Clean dishes
var room20 = {};
room20.main = function () {
    chat(0, 20);
};

room20.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room20.chatcatch = function (callback) {
    switch (callback) {
        case "finish":
            g.mod("rentKnockOff", 5);
            g.setflag("choreDishes");
            char.addtime(20);
            char.room(15);
            break;
        default:
            break;
    }
};

room20.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Yea.. cleaning dishes again for $5 off rent. ",
            button: [
                { chatID: -1, text: "Finished cleaning", callback: "finish" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};