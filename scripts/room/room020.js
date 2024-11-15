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
            daily.set("momChoreDishes");
            sc.modLevel("landlord", 10, 4);
            gv.mod("money", 5);
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
            text: "Yea.. cleaning dishes again for my $5. ",
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