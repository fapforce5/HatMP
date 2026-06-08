//Room name
var room323 = {};
room323.main = function () {
    let currentEvent = sc.taskGetStepEndMission("janice");
    if (currentEvent.missionName === "*doggy") {

    }
    else {

    }

};

room323.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room323.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room323.chat = function (chatID) {
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