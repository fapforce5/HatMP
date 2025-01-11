//Room name
var room320 = {};
room320.main = function () {
    if (gv.get("janiceDatr") !== null) {
        nav.buildnav([318]);
    }
    else {
        if (cl.hasoutfit("public") === null) {
            var navList = [0];
            nav.buildnav(navList);
        }
        else {
            chat(999, 320);
        }
    }
};

room320.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room320.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room320.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "thinking",
            text: "I'm missing my " + cl.hasoutfit("public") + ". ",
            button: []
        };
    }
    else {
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
    }
};