//Room name
var room54 = {};
room54.main = function () {

    if (!sc.getstep("tiffany") === 7) {
        room54.chatcatch("tifstraight candytalk");
        chat(0, 54);
    }
    else {
        var navList = [51, 55];
        if (g.hourBetween(6, 21) && cl.hasoutfit("public") === null)
            navList.push(0);
        nav.buildnav(navList);
        if (sc.tiffany().thisRoom && sc.candy().thisRoom()) {
            nav.button({
                "type": "btn",
                "name": "tif9",
                "left": 566,
                "top": 15,
                "width": 516,
                "height": 1065,
                "image": "54_livingRoom/tif_talk.png"
            }, 54);
            nav.button({
                "type": "btn",
                "name": "candy8",
                "left": 1254,
                "top": 40,
                "width": 542,
                "height": 1040,
                "image": "54_livingRoom/candy_talk.png"
            }, 54);
        }
        else if (sc.tiffany().thisRoom) {
            nav.button({
                "type": "btn",
                "name": "tif10",
                "left": 566,
                "top": 15,
                "width": 516,
                "height": 1065,
                "image": "54_livingRoom/tif_talk.png"
            }, 54);
        }
        else if (sc.candy().thisRoom) {
            room54.chatcatch("candytalk");
            chat(8, 54);
        }
    }
};

room54.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room54.chatcatch = function (callback) {
    var cArray = callback.split(" ");
    for (i = 0; i < cArray.length; i++) {
        switch (cArray[i]) {
            case "tifsmile":
                nav.killbutton("tif");
                nav.button({
                    "type": "btn",
                    "name": "tif",
                    "left": 566,
                    "top": 15,
                    "width": 516,
                    "height": 1065,
                    "image": "54_livingRoom/tif_smile.png"
                }, 54);
                break;
            case "tiftalk":
                nav.killbutton("tif");
                nav.button({
                    "type": "btn",
                    "name": "tif",
                    "left": 566,
                    "top": 15,
                    "width": 516,
                    "height": 1065,
                    "image": "54_livingRoom/tif_talk.png"
                }, 54);
                break;
            case "tifstraight":
                nav.killbutton("tif");
                nav.button({
                    "type": "btn",
                    "name": "tif",
                    "left": 566,
                    "top": 15,
                    "width": 516,
                    "height": 1065,
                    "image": "54_livingRoom/tif_straight.png"
                }, 54);
                break;
            case "candysmile":
                nav.killbutton("candy");
                nav.button({
                    "type": "btn",
                    "name": "candy",
                    "left": 1254,
                    "top": 40,
                    "width": 542,
                    "height": 1040,
                    "image": "54_livingRoom/candy_smile.png"
                }, 54);
                break;
            case "candytalk":
                nav.killbutton("candy");
                nav.button({
                    "type": "btn",
                    "name": "candy",
                    "left": 1254,
                    "top": 40,
                    "width": 542,
                    "height": 1040,
                    "image": "54_livingRoom/candy_talk.png"
                }, 54);
                break;
            case "candystraight":
                nav.killbutton("candy");
                nav.button({
                    "type": "btn",
                    "name": "candy",
                    "left": 1254,
                    "top": 40,
                    "width": 542,
                    "height": 1040,
                    "image": "54_livingRoom/candy_straight.png"
                }, 54);
                break;
            case "candylaugh":
                nav.killbutton("candy");
                nav.button({
                    "type": "btn",
                    "name": "candy",
                    "left": 1333,
                    "top": 175,
                    "width": 451,
                    "height": 905,
                    "image": "54_livingRoom/candyLaugh.png"
                }, 54);
                break;
            case "goRoom":
                char.room(52);
                break;
            case "candy8":
                chat(8, 54);
                break;
            case "tif9":
                chat(9, 54);
                break;
            case "tif10":
                chat(10, 54);
                break;
            default:
                break;
        }
    }
};

room54.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "candy",
            text: "Hay " + sc.n("tiffany") + ". Is this the guy that didn't catch the cum dude? Why is he in a dress? ",
            button: [
                { chatID: 1, text: "Hay..", callback: "candysmile tifsmile" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "I told him we live in a girls only house!",
            button: [
                { chatID: 2, text: "...", callback: "candytalk" }
            ]
        },
        {
            chatID: 2,
            speaker: "candy",
            text: "Huh, what's a girl's only house?",
            button: [
                { chatID: 3, text: "...", callback: "candystraight tiftalk" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "I lied to him to get him to dress up like a girl by saying we live in a girls only house!",
            button: [
                { chatID: 4, text: "...", callback: "candylaugh tifsmile" }
            ]
        },
        {
            chatID: 4,
            speaker: "candy",
            text: "Wha.. you beleived her? Who's ever heard of a girls only house? You've been walking around town dressed " +
                "as a girl all day! ",
            button: [
                { chatID: 5, text: sc.n("tiffany") + "!", callback: "tifsmile" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "Sorry " + sc.n("me") + ". I couldn't help it. But we had so much fun shopping and playing dress up at the mall.",
            button: [
                { chatID: 6, text: sc.n("tiffany") + "!", callback: "tifstraight" }
            ]
        },
        {
            chatID: 6,
            speaker: "candy",
            text: "You walked around like that at the mall! That would be so embarrasing! ",
            button: [
                { chatID: 7, text: "It was! She paraded me in front of my ex!", callback: "tiftalk candysmile" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "He got kicked out of his house, I told him he could crash in our extra bedroom. I'm going to show him his room. ",
            button: [
                { chatID: -1, text: "[Follow Tiffany to your room]", callback: "goRoom" }
            ]
        },
        {
            chatID: 8,
            speaker: "candy",
            text: "HHay sweetie, I bet you would love to watch us fuck each other... You'll have to wait for the next release.",
            button: []
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Oh yea, I bet you would love to see me eat " + sc.n('candy') + " out, but you'll have to wait for the next release. ",
            button: []
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "Sorry baby, you'll have to come visit me on the next release.",
            button: []
        },
        {
            chatID: 11,
            speaker: "candy",
            text: "I bet you want to watch me suck " + sc.n("chad") + "'s dick.. you'll have to wait for the next releases",
            button: []
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};