﻿//Government / lic office
var room910 = {};

room910.main = function () {
    if (cl.isLewd()) {
        nav.button({
            "type": "img",
            "name": "cop",
            "left": 870,
            "top": 39,
            "width": 784,
            "height": 1041,
            "image": "452_parkWomansRoom/cop.png"
        }, 400);
        chat(13, 910);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "lady",
                "left": 991,
                "top": 350,
                "width": 158,
                "height": 267,
                "image": "910_gov/lady.png"
            }
        ];
        var navList = [911, 0];
        $.each(btnList, function (i, v) {
            nav.button(v, 910);
        });
        nav.buildnav(navList);
    }
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
                gv.mod("money", -100);
                inv.update("pi_lic", true, null);
            }
            break;
        case "changename":
            if (gv.get("money") < 100)
                chat(7, 910);
            else if (sc.getstep("govlady") > 0)
                chat(6, 910);
            else if (cl.appearance() > 1)
                chat(8, 910);
            else
                chat(11, 910);
            break;
        case "changeit":
            var temp = sc.n("me");
            sc.setcharname("me", gv.get("girlname"));
            gv.set("girlname", temp);
            sc.setstep("govlady", 1);
            char.addtime(30);
            break;
        case "jail":
            g.pass = "jail";
            char.room(376);
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
                { chatID: (gv.get("money") < 100 ? 5: 1), text: "I would like to purchase a Private Investigator License ", callback: "" },
                { chatID: -1, text: "I would like to change my name ", callback: "changename" }
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
            text: "What can I do for you?",
            button: [
                { chatID: -1, text: "I would like to change my name ", callback: "changename" }
            ]
        },
        {
            chatID: 5,
            speaker: "govlady",
            text: "$100 Sonny",
            button: [
                { chatID: -1, text: "I don't have $100 ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "govlady",
            text: "Sorry honey, you only get to change your name once.",
            button: [
                { chatID: -1, text: "Of course", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "govlady",
            text: "I can change your name, it's $100",
            button: [
                { chatID: -1, text: "Oh, I don't have enough money.", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "govlady",
            text: "Name changes are $100 and you can only change your name once. It's a big step sweetie. Are you sure?",
            button: [
                { chatID: -1, text: "Nevermind", callback: "" },
                { chatID: 9, text: "I'm ready. Change my name to " + gv.get("girlname") + ".", callback: "changeit" }
            ]
        },
        {
            chatID: 9,
            speaker: "govlady",
            text: "That should do it. How you do like your new name?",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "I love it! " + sc.n("me") + " is so much more fitting!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "govlady",
            text: "Would you like to change your name?",
            button: [
                { chatID: -1, text: "Nope", callback: "" },
                { chatID: 12, text: "Yes! change my name to " + gv.get("girlname") + ".", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "govlady",
            text: "I'm sorry sir, I can't change your name to a girl's name. You're way to manly for that.",
            button: [
                { chatID: -1, text: "Oh, ok", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "cop2",
            text: "Ok slut. You can't be running around the mall naked. Time for jail. ",
            button: [
                { chatID: -1, text: "...", callback: "jail" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
