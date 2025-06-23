//room
var room400 = {};

room400.main = function () {

    if (missy.activecase().caseId === 11 && sc.taskGetStep("tiffany", "friend") === 1) {
        missy.set("activeCaseComplete", 1);
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
    else if (cl.isLewd()) {
        nav.button({
            "type": "img",
            "name": "cop",
            "left": 870,
            "top": 39,
            "width": 784,
            "height": 1041,
            "image": "452_parkWomansRoom/cop.png"
        }, 400);
        chat(3, 400);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "mens",
                "left": 1425,
                "top": 442,
                "width": 230,
                "height": 229,
                "title": "Male Fashion",
                "image": "400_mall/male.png"
            },
            {
                "type": "btn",
                "name": "shoe",
                "left": 1671,
                "top": 442,
                "width": 230,
                "height": 230,
                "title": "Shoe Store",
                "image": "400_mall/footsie.png"
            },
            {
                "type": "btn",
                "name": "saucy",
                "left": 1427,
                "top": 732,
                "width": 228,
                "height": 283,
                "title": "Saucy - Lady's Clothing Store",
                "image": "400_mall/saucy.png"
            }, 
            {
                "type": "btn",
                "name": "bling",
                "left": 477,
                "top": 730,
                "width": 301,
                "height": 286,
                "title": "Shiny Jewlery",
                "image": "400_mall/bling.png"
            },
            {
                "type": "btn",
                "name": "eyes",
                "left": 860,
                "top": 732,
                "width": 304,
                "height": 284,
                "title": "Contacts",
                "image": "400_mall/eyes.png"
            },
            {
                "type": "btn",
                "name": "makeup",
                "left": 232,
                "top": 730,
                "width": 229,
                "height": 285,
                "title": "Sappho's Makeup",
                "image": "400_mall/makeup.png"
            },
            {
                "type": "btn",
                "name": "electronic",
                "left": 231,
                "top": 442,
                "width": 231,
                "height": 229,
                "title": "Electronic Store",
                "image": "400_mall/electronic.png"
            },
            {
                "type": "btn",
                "name": "bra",
                "left": 1181,
                "top": 730,
                "width": 229,
                "height": 287,
                "title": "Sissy Panties and Bras",
                "image": "400_mall/girl.png"
            },
            {
                "type": "btn",
                "name": "purse",
                "left": 1181,
                "top": 443,
                "width": 229,
                "height": 228,
                "title": "Mommy's Purse Store",
                "image": "400_mall/purse.png"
            },
            {
                "type": "btn",
                "name": "happyGirl",
                "left": 1671,
                "top": 730,
                "width": 230,
                "height": 286,
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
        if (gv.get("xdress")) {
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
        if (g.sissy[29].ach)
            chat(1, 400);
        else {
            g.pass = "happyGirl";
            char.room(401);
        }
    }
    else if (g.pass === "makeup") {
        char.room(407);
    }
    else if (g.pass === "eyes") {
        char.room(406)
    }
    else {
        g.pass = name;
        char.room(401);
    }
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
        case "jail":
            g.pass = "jail";
            char.room(376);
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
            text: "Ok! First thing is getting the dress, then we know which panties and shoes to get! Lets go to saucy!!",
            button: [
                { chatID: -1, text: "[Follow " + sc.n("tiffany") + " to Saucy]", callback: "tSaucy" }
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
        },
        {
            chatID: 3,
            speaker: "cop2",
            text: "Ok slut. You can't be running around the mall naked. Time for jail. ",
            button: [
                { chatID: -1, text: "...", callback: "jail" }
            ]
        }
    ];
    return cArray[chatID];
};