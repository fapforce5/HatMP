//Room name
var room488 = {};
room488.main = function () {
    if (g.isNight()) {
        nav.bg("488_cabin/bg1_n.webp");
        chat(5, 488);
    }
    else if (sc.getMission("daria", "cabin").notStarted) {
        sc.completeMission("daria", "cabin");
        sc.completeMissionTask("daria", "cabin", 0);
        sc.show("daria");
        chat(0, 488);
    }
    else if (sc.getTimeline("daria").thisRoom) {
        chat(6, 488);
    }
    nav.buildnav([475]);
};

room488.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room488.chatcatch = function (callback) {
    switch (callback) {
        case "insidex":
            nav.bg("488_cabin/" + callback + ".webp");
            break;
        case "insidey":
            nav.bg("488_cabin/" + callback + ".webp");
            if (sissy.st[21].ach)
                chat(11, 488);
            else
                chat(10, 488);
            break;
        case "inside":
            if (sc.getTimeline("morgan").thisRoom) {
                nav.bg("488_cabin/insidex.webp");
                chat(7, 488);
            }
            else {
                nav.bg("488_cabin/inside.webp");
                chat(8, 488);
            }
            break;
        case "room460":
            char.room(460);
            break;
        case "leave":
            char.room(475);
            break;
        default:
            break;
    }
};

room488.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "What is this place? Seems dangerous, but at the same time... not. Should I go look inside? ",
            button: [
                { chatID: 1, text: "Go inside", callback: "insidex" },
                { chatID: -1, text: "Just leave", callback: "leave" },
            ]
        },
        {
            chatID: 1,
            speaker: "daria",
            text: "...uhhhh. What are you doing here?",
            button: [
                { chatID: 2, text: "Oh. Well you see... ", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "daria",
            text: "Stop. You shouldn't be here. Just turn around and go back home, there's nothing here " +
                "for you except fear and pain. ",
            button: [
                { chatID: 3, text: "Ok. So... are we going to have sex now?", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "daria",
            text: "What? No! I have a fiance! Just leave. I've seen your kind thinking the cult " +
                "can't break them. Well you know what, those that don't bend to their desire get " +
                "broken. Broken in half and thrown into the swamps. You're best to just leave this " +
                "town and never come back. ",
            button: [
                { chatID: 4, text: "ok. 'bye?", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "daria",
            text: "If you want I can escort you out of here. Or you can find the way back on your own. ",
            button: [
                { chatID: -1, text: "Show me the way back. ", callback: "room460" },
                { chatID: -1, text: "I'll find my own way ", callback: "leave" },
            ]
        },
        {
            chatID: 5,
            speaker: "cult",
            text: "Hey, you. Who is that? ",
            button: [
                { chatID: -1, text: "Crap, it's the cult [Run away!]", callback: "leave" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Should I go visit " + sc.n("daria") + " again? ",
            button: [
                { chatID: -1, text: "[Go in]", callback: "inside" },
                { chatID: -1, text: "[Leave]", callback: "leave" },
            ]
        },
        {
            chatID: 7,
            speaker: "daria",
            text: "I thought I told you to never come back here. If you want I can escort you out of here. Or you can find the way back on your own. ",
            button: [
                { chatID: -1, text: "Show me the way back. ", callback: "room460" },
                { chatID: -1, text: "I'll find my own way ", callback: "leave" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "There's no one here. Should I look around, or just go? ",
            button: [
                { chatID: -1, text: "Look around", callback: "insidey" },
                { chatID: -1, text: "Leave", callback: "leave" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "There's no one here. Should I look around, or just go? ",
            button: [
                { chatID: 10, text: "Look around", callback: "insidey" },
                { chatID: -1, text: "Leave", callback: "leave" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Not much here, just this picture. It's her and what appears to be her dad. No money, " +
                "no sexy clothes, just a bunch of green jackets. ",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Not much here, just a picture of her and Mr. Tudor. Weird. I wonder if he's her dad? " +
                "Not much else here. No money, " +
                "no sexy clothes, just a bunch of green jackets. ",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};