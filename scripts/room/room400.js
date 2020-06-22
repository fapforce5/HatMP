//room
var room400 = {};

room400.main = function () {

    if (sc.getstep("me") === 7 && g.pass === 0) {
        nav.button({
            "type": "btn",
            "name": "tiffany0",
            "left": 506,
            "top": 33,
            "width": 626,
            "height": 1047,
            "image": "400_mall/tiffany.png"
        }, 400);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "mens",
                "left": 1435,
                "top": 90,
                "width": 291,
                "height": 349,
                "title": "Male Fashion",
                "image": "400_mall/male.png"
            },
            {
                "type": "btn",
                "name": "shoe",
                "left": 1251,
                "top": 178,
                "width": 176,
                "height": 257,
                "title": "Shoe Store",
                "image": "400_mall/footsie.png"
            },
            {
                "type": "btn",
                "name": "saucy",
                "left": 1112,
                "top": 465,
                "width": 208,
                "height": 515,
                "title": "Lady's Clothing Store",
                "image": "400_mall/saucy.png"
            },
            {
                "type": "btn",
                "name": "electronic",
                "left": 950,
                "top": 525,
                "width": 162,
                "height": 244,
                "title": "Electronic Store",
                "image": "400_mall/electronic.png"
            },
            {
                "type": "btn",
                "name": "bra",
                "left": 1325,
                "top": 497,
                "width": 509,
                "height": 583,
                "title": "Sissy Panties and Bras",
                "image": "400_mall/girl.png"
            },
            {
                "type": "btn",
                "name": "purse",
                "left": 1015,
                "top": 214,
                "width": 146,
                "height": 217,
                "title": "Mommy's Purse Store",
                "image": "400_mall/purse.png"
            },
            {
                "type": "btn",
                "name": "happyGirl",
                "left": 301,
                "top": 80,
                "width": 98,
                "height": 357,
                "title": "Happy Girl Home Goods",
                "image": "400_mall/happyGirl.png"
            }
        ];

        var navList = [0];


        $.each(btnList, function (i, v) {
            nav.button(v, 400);
        });

        nav.buildnav(navList);
    }
};

room400.btnclick = function (name) {
    g.pass = name;
    if (g.pass === "bra")
        char.room(402);
    else if (g.pass === "saucy") {
        if (sc.getstep("me") > 7) {
            g.pass = "saucy";
            char.room(401);
        }
        else {
            char.room(403);
        }
    }
    else if (g.pass === "tiffany0")
        chat(0, 400);
    else if (g.pass === "happyGirl") {
        if (sc.getstep("me") < 8)
            chat(1, 400);
        else {
            g.pass = "happyGirl";
            char.room(401);
        }
    }
    else
        char.room(401);
    //switch (name) {
    //    case "male":
    //        char.room(402);
    //        break;
    //    case "footsie":
    //        g.pass = "footsie";
    //        char.room(401);
    //        break;
    //    default:
    //        break;
    //}
};

room400.chatcatch = function (callback) {
    switch (callback) {
        case "tSaucy":
            char.room(403);
            break;
        default:
            break;
    }
};

room400.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "Ok! first thing is getting the dress, then we know which panties and shoes to get! Lets go to saucy!!",
            button: [
                { chatID: -1, text: "[Follow " + sc.n("tiffany") + " to saucy]", callback: "tSaucy" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I don't need any girly room decorations",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Next release you'll be able to decorate your room!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    ];
    return cArray[chatID];
};