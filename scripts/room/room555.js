//Room name
var room555 = {};
room555.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "chad",
            "left": 506,
            "top": 25,
            "width": 637,
            "height": 1055,
            "image": "555_backgym/chad.png"
        },
        {
            "type": "btn",
            "name": "g",
            "left": 1321,
            "top": 86,
            "width": 549,
            "height": 994,
            "image": "555_backgym/g.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 555);
    });
    nav.buildnav(navList);
    chat(0, 555);
};

room555.btnclick = function (name) {
    switch (name) {
        case "chad":

            break;
        case "g":

            break;
        default:
            break;
    }
};

room555.chatcatch = function (callback) {
    switch (callback) {
        case "strip":
            cl.nude();
            cl.display();
            if (cl.c.chest > 3)
                chat(1, 555);
            else if (cl.c.chest > 2)
                chat(2, 555);
            else if (cl.c.chest === 2)
                chat(3, 555);
            else if (cl.c.chastity !== null)
                chat(4, 555);
            else if (cl.c.cock < 2)
                chat(5, 555);
            else
                chat(6, 555);
            break;
        default:
            break;
    }
};

room555.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "g",
            text: "Clothes are allowed back here. Strip if off bitch.",
            button: [
                { chatID: -1, text: "[Strip]", callback: "strip" }
            ]
        },
        {
            chatID: 1,
            speaker: "chad",
            text: "Nice tits loser",
            button: [
                { chatID: -1, text: "Thanks?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "Awww your tits are coming in nicely",
            button: [
                { chatID: -1, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "chad",
            text: "Hahaha, look at those tiny titties! You're such a bitch your body is turning into one!",
            button: [
                { chatID: -1, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "chad",
            text: "Hahaha. What kind of loser locks their cock away? I always knew you were a loser, but I didn't know you were such a little " +
            "faggot too!",
            button: [
                { chatID: -1, text: "oh", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "g",
            text: "Oh wow, You're packing such a big beautiful cock! You should show that thing off more often!",
            button: [
                { chatID: -1, text: "Thank you", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "chad",
            text: "Hahaha you have such a tiny cock! I get chicks laugh at you when you pull down your pants!",
            button: [
                { chatID: -1, text: "Oh, they do..", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};