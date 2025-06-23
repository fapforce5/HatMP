//Room name
var room41 = {};
room41.main = function () {
    if (g.dt.getDay() === 6 || g.dt.getDay() === 0) {
        nav.bg("41_garage/bg.webp");
        chat(2, 41);
    }
    else if (cl.isCrossdressing() && !sc.getSecret("landlord").secretOut) {
        nav.bg("41_garage/bg.webp");
        chat(3, 41);
    }
    else if (daily.get("bigguyGarage"))
        chat(1, 41);
    else
        chat(0, 41);
    nav.buildnav([0]);
};

room41.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room41.chatcatch = function (callback) {
    switch (callback) {
        case "room40":
            char.room(40);
            break;
        default:
            break;
    }
};

room41.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bigguy",
            text: "Get lost kid. Got man's work to do here, unless you want to clean up rat traps. ",
            button: [
                { chatID: -1, text: "I'll leave", callback: "" },
                { chatID: -1, text: "I'll clean up rat traps! Joy!", callback: "room40" },
            ]
        },
        {
            chatID: 1,
            speaker: "bigguy",
            text: "Get lost kid. Got man's work to do here. ",
            button: [
                { chatID: -1, text: "I'll leave", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "It's closed on the weekend, 'cause he's at home fucking my " + sc.n("landlord") + ".",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I can't go in there like this! No one knows I'm a secret sissy!",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};