//Government / lic office
var room910 = {};

room910.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "lady",
            "left": 774,
            "top": 102,
            "width": 598,
            "height": 773,
            "image": "910_gov/lady.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 910);
    });
    nav.buildnav(navList);
};

room910.btnclick = function (name) {
    switch (name) {
        case "lady":
            if (!inv.has("pi_lic")) {
                chat(0, 910);
            }
            else {
                chat(4, 910);
            }
            break;
        default:
            break;
    }
};

room910.chatcatch = function (callback) {
    switch (callback) {
        case "pay":
            if (!inv.has("pi_lic")) {
                g.mod("money", -100);
                inv.update("pi_lic", true, null);
            }
            break;
        default:
            break;
    }
};

room910.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "govlady",
            text: "yea",
            button: [
                { chatID: (g.get("money") < 100 ? 5: 1), text: "I would like to purchase a Private Investigator License ", callback: "" },
                { chatID: 3, text: "I would like to change my name ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "govlady",
            text: "100 Dollars",
            button: [
                { chatID: 2, text: "Pay $100", callback: "pay" },
                { chatID: -1, text: "Nevermind", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "govlady",
            text: "Here's your License. Good day sir.",
            button: []
        },
        {
            chatID: 3,
            speaker: "govlady",
            text: "To come later release. ",
            button: []
        },
        {
            chatID: 4,
            speaker: "govlady",
            text: "yea",
            button: [
                { chatID: 3, text: "I would like to change my name ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "govlady",
            text: "$100 Sonny",
            button: [
                { chatID: -1, text: "I don't have $100 ", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};