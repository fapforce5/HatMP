//Room name
var room455 = {};
room455.main = function () {
    g.roomTimeout = setTimeout(function () {
        chat(0, 455);
    }, 500);
};

room455.btnclick = function (name) {
    switch (callback) {
        case "Complete":
            char.room(450);
            break;
        default:
            break;
    }
};

room455.chatcatch = function (callback) {
    switch (callback) {
        case "Complete":
            char.room(450);
            break;
        default:
            break;
    }
};

room455.chat = function (chatID) {
    g.mod("energy", -30);
    char.addtime(60);
    g.mod("fitness", 10);
    var tempFit = g.get("fitness");
    if (tempFit < 25) {
        return {
            chatID: 0,
            speaker: "me",
            text: "I HATE running, I have a ways to go before I'm not fat...",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        };
    }
    else if (tempFit < 50) {
        return {
            chatID: 0,
            speaker: "me",
            text: "I Dislike running. I'm more than a quarter of the way to not being fat. ",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        };
    }
    else if (tempFit < 75) {
        return {
            chatID: 0,
            speaker: "me",
            text: "I don't mind running. I'm more than half way there. Starting to feel sexy. ",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        };
    }
    else {
        return {
            chatID: 0,
            speaker: "me",
            text: "Ok I hate running again. I'm almost there. Almost a sexy man.. ",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        };
    }
};