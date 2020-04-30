//Room name
var room476 = {};
room476.main = function () {
    g.internal.lastFight = 0;
    var btnList = [
        {
            "type": "img",
            "name": "name",
            "left": 300,
            "top": 120,
            "width": 1085,
            "height": 960,
            "title": "badguy",
            "image": "475_fight/man_pose_0.png"
        },
        {
            "type": "btn",
            "name": "punch",
            "left": 450,
            "top": 800,
            "width": 150,
            "height": 150,
            "title": "Punch",
            "image": "475_fight/punch.png"
        },
        {
            "type": "btn",
            "name": "kick",
            "left": 620,
            "top": 800,
            "width": 150,
            "height": 150,
            "title": "Kick",
            "image": "475_fight/kick.png"
        },
        {
            "type": "btn",
            "name": "block",
            "left": 790,
            "top": 800,
            "width": 150,
            "height": 150,
            "title": "Block",
            "image": "475_fight/block.png"
        },
        {
            "type": "btn",
            "name": "undress",
            "left": 1310, 
            "top": 800,
            "width": 150,
            "height": 150,
            "title": "Remove Clothing",
            "image": "475_fight/undress_disable.png"
        },
        {
            "type": "btn",
            "name": "crawl",
            "left": 1480,
            "top": 800,
            "width": 150,
            "height": 150,
            "title": "Give Up",
            "image": "475_fight/crawl_disable.png"
        },
        {
            "type": "btn",
            "name": "run",
            "left": 1650,
            "top": 800,
            "width": 150,
            "height": 150,
            "title": "Block",
            "image": "475_fight/run.png"
        },
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 476);
    });
    nav.buildnav(navList);
};

room476.btnclick = function (name) {
    switch (name) {
        case "punch":
        case "kick":
        case "block":
            chat(0, 476);
            break;
        case "run":
            chat(1, 476);
            break;
        default:
            break;
    }
};

room476.chatcatch = function (callback) {
    switch (callback) {
        case "run":
            char.room(475);
            break;
        default:
            break;
    }
};

room476.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Still in development",
            button: [
                { chatID: -1, text: "close", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Run Away???",
            button: [
                { chatID: -1, text: "Run Away!!!!", callback: "run" },
                { chatID: -1, text: "I ain't no chicken", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};