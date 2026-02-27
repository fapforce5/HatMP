//Room name
var room487 = {};
room487.main = function () {
    chat(0, 487);
};

room487.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room487.chatcatch = function (callback) {
    switch (callback) {
        case "bush2":
        case "bush3":
        case "bush4":
            nav.kill();
            nav.bg("487_castle/" + callback + ".webp");
            break;
        case "leave":
            char.room(475);
            break;
        case "closer":
            nav.bg("487_castle/bush.webp", "487_castle/bush_n.webp"); 
            zcl.displayMain(300, 800, .3, "clothes", true);
            break;
        case "closer1":
            nav.bg("487_castle/bush1.webp", "487_castle/bush1_n.webp"); 
            break;
        case "end":
            g.pass = "sneak";
            char.room(949);
            break;
        default:
            break;
    }
};

room487.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "This has to be the cult's castle. I really should leave this place and never come " +
                "back. Terrible things happen to people here. ",
            button: [
                { chatID: -1, text: "Be smart. Leave. ", callback: "leave" },
                { chatID: 1, text: "Be an idiot and take a closer look. ", callback: "closer" },
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Oh wow. They's a bunch of them. I should come back later when I have a better " +
                "idea of what's going on. ",
            button: [
                { chatID: -1, text: "Be smart. Leave. ", callback: "leave" },
                { chatID: 2, text: "Be an idiot and try to sneak past them. ", callback: "closer1" },
            ]
        },
        {
            chatID: 2,
            speaker: "daria",
            text: "Hey. I see you're trying to sneak around. I pretty much know everyone here, and " +
                "you aren't someone that belongs here. Now I'm not going to stop you from doing whatever " +
                "you're doing, but I've know what happens in there and it isn't pretty. You should really " +
                "go. ",
            button: [
                { chatID: 3, text: "ok. thanks", callback: "closer" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "That chick is right. It is really dangerous and stupid to try and sneak in... but " +
                "being stupid is sometimes smart...",
            button: [
                { chatID: -1, text: "Be smart. Leave. ", callback: "leave" },
                { chatID: 4, text: "Be an idiot and try to sneak past them. ", callback: "bush2" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I'll just sneak between the bushes...",
            button: [
                { chatID: 5, text: "...", callback: "bush3" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I think I hear somone coming. I'll just stay very still...",
            button: [
                { chatID: 6, text: "...", callback: "bush4" },
            ]
        },
        {
            chatID: 6,
            speaker: "cult",
            text: "What do we have here?",
            button: [
                { chatID: 7, text: "I was uhhh... Looking for my contact lens. Have you seen it? ", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "cult",
            text: "Let's take you inside. Wouldn't want you to catch cold out here. Hehehe. ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "end" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};