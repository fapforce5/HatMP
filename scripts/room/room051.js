//Room name
var room51 = {};
room51.main = function () {
    if (sc.getstep("tiffany") === 15) {
        nav.bg("51_livingRoom/t1.jpg");
        chat(0, 51);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "hallway",
                "left": 1033,
                "top": 268,
                "width": 260,
                "height": 437,
                "image": "51_livingRoom/hallway.png"
            },
            {
                "type": "btn",
                "name": "reddoor",
                "left": 1664,
                "top": 214,
                "width": 250,
                "height": 603,
                "image": "51_livingRoom/reddoor.png"
            },
        ];

        $.each(btnList, function (i, v) {
            nav.button(v, 51);
        });
        var navList = [55, 0];
        nav.buildnav(navList);
    }
};

room51.btnclick = function (name) {
    switch (name) {
        case "hallway":
            char.room(55);
            break;
        case "reddoor":
            chat(0, 51);
            break;
        default:
            break;
    }
};

room51.chatcatch = function (callback) {
    switch (callback) {
        case "t2":
            nav.bg("51_livingRoom/t2.jpg");
            break;
        case "t3":
            nav.bg("51_livingRoom/t3.jpg");
            break;
        case "t4":
            nav.bg("51_livingRoom/t4.jpg");
            break;
        case "t5":
            nav.bg("51_livingRoom/t5.jpg");
            break;
        case "t6":
            nav.bg("51_livingRoom/t6.jpg");
            break;
        case "t7":
            nav.bg("51_livingRoom/t7.jpg");
            break;
        case "t8":
            nav.bg("51_livingRoom/t8.jpg");
            break;
        case "t9":
            nav.bg("51_livingRoom/t9.jpg");
            break;
        case "t10":
            nav.bg("51_livingRoom/t10.jpg");
            break;
        case "t11":
            nav.bg("51_livingRoom/t11.jpg");
            break;
        case "t12":
            nav.bg("51_livingRoom/t12.jpg");
            break;
        case "t13":
            nav.bg("51_livingRoom/t13.jpg");
            break;
        default:
            break;
    }
};

room51.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "Hay baby, I brought home a new toy!",
            button: [
                { chatID: 1, text: "...", callback: "t2" }
            ]
        },
        {
            chatID: 1,
            speaker: "candy",
            text: "Oh awesome it's " + sc.n("me") + "! I was hoping we could play with him! He looked like so much fun at the store! What is that " +
            "thing he's wearing?",
            button: [
                { chatID: 2, text: "...", callback: "t3" }
            ]
        },
        {
            chatID: 2,
            speaker: "candy",
            text: "Did you do that thing where you find a strange boy and dress him up in the ugliest dress you could find again?",
            button: [
                { chatID: 3, text: "huh?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "Hahahaha I totally did! I took him to the mall and everything! I had him try on panties at Popular Girl, I even had the clerk help us!",
            button: [
                { chatID: 4, text: "...", callback: "t4" }
            ]
        },
        {
            chatID: 4,
            speaker: "candy",
            text: "Hahahaha you are so silly! Why do boys like you always fall for the ugly dress game? You really are the worst " + sc.n("tiffany") +
                "! Picking on this simple silly boy!",
            button: [
                { chatID: 5, text: "Hay!", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "It's not my fault it's he's so easy! He's like a lost puppy dog that just follows you around and does whatever you tell him! ",
            button: [
                { chatID: 6, text: "Now wait a minute!", callback: "t5" }
            ]
        },
        {
            chatID: 6,
            speaker: "candy",
            text: "He's so cute. So is this one staying in the room, or does he have his own place? ",
            button: [
                { chatID: 7, text: "?", callback: "t6" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "The poor little guy doesn't have any place to go. I was going to put him in Bambi's old room. I going to go show him " +
            "where he lives now. Follow me down the hallway " + sc.n("me") + ", I know you've had a busy day.",
            button: [
                { chatID: 8, text: "[Follow " + sc.n("tiffany") + "]", callback: "t7" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "Our apartment is pretty tiny. Your room is straight forward. Our old roommate Bambi got really angry one day and ripped the door " +
            "right off the hinges, so you won't have a door. " + sc.n("candy") + "'s door is on the right and I'll show you my room.",
            button: [
                { chatID: 9, text: "[Follow " + sc.n("tiffany") + "]", callback: "t8" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "So this is my room. It's not much, but it's all mine, what do you think?",
            button: [
                { chatID: 10, text: "It's really nice", callback: "t9" },
            ]
        },
        {
            chatID: 10,
            speaker: "candy",
            text: "So I was thinking about something.. come here",
            button: [
                { chatID: 11, text: "...", callback: "t10" },
            ]
        },
        {
            chatID: 11,
            speaker: "candy",
            text: "[Whispers in her ear....]",
            button: [
                { chatID: 12, text: "What are you two whispering about?", callback: "t11" },
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "[Whispers in her ear....]",
            button: [
                { chatID: 13, text: "Hay", callback: "t12" },
            ]
        },
        {
            chatID: 13,
            speaker: "candy",
            text: "Since you're here and we're both really horny we should have some fun!",
            button: [
                { chatID: -1, text: "Oh fuck yea!", callback: "t13" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};