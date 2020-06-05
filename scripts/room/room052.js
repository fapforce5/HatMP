//Room name
var room52 = {};
room52.main = function () {
    if (sc.getstep("me") === 7) {
        nav.button({
            "type": "btn",
            "name": "tif",
            "left": 566,
            "top": 15,
            "width": 516,
            "height": 1065,
            "image": "50_livingRoom/tif_talk.png"
        }, 52);
        chat(2, 52);
    }
    else {
        $('.room-topper').show();
        var btnList = [
            {
                "type": "btn",
                "name": "wardrobe",
                "left": 1745,
                "top": 242,
                "width": 175,
                "height": 605,
                "title": "Wardrobe",
                "image": "52_myroom/wardrobe.png",
                "night": "52_myroom/wardrobeNight.png",
            },
            {
                "type": "btn",
                "name": "Bed",
                "left": 480,
                "top": 481,
                "width": 592,
                "height": 495,
                "title": "Sleep",
                "image": "52_myroom/bed.png",
                "night": "52_myroom/bedNight.png",
            },
            {
                "type": "btn",
                "name": "nightStand",
                "left": 309,
                "top": 609,
                "width": 153,
                "height": 214,
                "title": "Toybox",
                "image": "52_myroom/nightstand.png",
                "night": "52_myroom/nightstandNight.png"
            },
            {
                "type": "btn",
                "name": "computer",
                "left": 1183,
                "top": 481,
                "width": 131,
                "height": 110,
                "image": "52_myroom/computer.png",
                "night": "52_myroom/computerNight.png"
            }
        ];

        navList = [51, 55];
       
        $.each(btnList, function (i, v) {
            nav.button(v, 52);
        });

        nav.buildnav(navList);
    }
};

room52.btnclick = function (name) {
    switch (name) {
        case "computer":
            g.pass = 52;
            char.room(9);
            break;
        case "Bed":
            chat(0, 52);
            break;
        case "wardrobe":
            g.pass = 52;
            char.room(8);
            break;
        case "nightStand":
            g.pass = 52;
            char.room(18);
            break;
        default:
            break;
    }
};

room52.chatcatch = function (callback) {
    switch (callback) {
        case "nap_sleep":
            char.newday();
            char.room(7);
            break;
        case "tifLeave":
            sc.setstep("me", 8);
            g.roomMapAccess(50, true, true);
            cl.c.wig = null;
            cl.display();
            char.room(52);
            break;
        default:
            break;
    }
};

room52.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "How Long do you want to sleep?",
            button: [
                { chatID: 4, text: "Sleep till morning", callback: "nap_sleep" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Before I leave I need to get dressed. <span class='hl'>I'm missing my " + g.internal + ".</span>",
            button: []
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "Here's your room. Since we're letting you stay here for free there's some rules you need to follow.",
            button: [
                { chatID: 3, text: "Rules?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "Yes silly! Rule 1. You have to at least wear underwear when you walk around the house. ",
            button: [
                { chatID: 4, text: "Oh, that's not a bad rule", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "Hehehe I know, me and " + sc.n("candy") + " just don't want your naked butt on our couch. Rule 2. " +
                "No going into our rooms when we're not here. ",
            button: [
                { chatID: 5, text: "I would <span class='hl'>never</span> enter a girls room if they weren't there.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "Rule 3. You have to do what we tell you.",
            button: [
                { chatID: 6, text: "Huh? Like what?", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "Oh I don't know.... liiikkkkeee maybe clean the kitchen, vacuum the house, or eat our pussies. ",
            button: [
                { chatID: 7, text: "Oh, I can totally do that. ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "Ok, honey! Also I know " + sc.n("missy") + " is looking for you, she has a new case for you! Oh and I " +
                "need my wig back hehe. ",
            button: [
                { chatID: -1, text: "Allright! Thanks " + sc.n("tiffany"), callback: "tifLeave" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "I need something to cover my ass up.",
            button: []
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};