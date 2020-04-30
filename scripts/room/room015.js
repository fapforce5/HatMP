//Kitchen
var room15 = {};
room15.main = function () {
    var btnList = [];

    if (!g.checkflag("choreDishes")) {
        btnList.push({
            "type": "btn",
            "name": "dishes",
            "left": 1205,
            "top": 449,
            "width": 170,
            "height": 68,
            "image": "15_kitchen/dishes.png"
        });
    }
    else {
        btnList.push({
            "type": "img",
            "name": "dishesComplete",
            "left": 1128,
            "top": 448,
            "width": 102,
            "height": 78,
            "image": "15_kitchen/dishesDone.png"
        });
    }

    if (sc.mother().roomID === 15) {
        btnList.push({
            "type": "btn",
            "name": "ll",
            "left": 1317,
            "top": 163,
            "width": 383,
            "height": 917,
            "image": "15_kitchen/15_nurse.png"
        });
    }

    var navList = [11, 16];
    $.each(btnList, function (i, v) {
        nav.button(v, 15);
    });
    nav.buildnav(navList);
};

room15.btnclick = function (name) {
    switch (name) {
        case "dishes":
            char.room(20);
            break;
        case "ll":
            var ll = sc.getstep("landlord");
            if (!sc.checkevent("me", 2))
                chat(1, 15);
            else if (ll === 0)
                chat(2, 15);
            else if (ll === 1)
                chat(3, 15);
            else if (ll === 2)
                chat(4, 15);
            else if (ll === 3)
                chat(7, 15);
            else
                chat(6, 15);
            break;
        default:
            break;
    }
};

room15.chatcatch = function (callback) {
    switch (callback) {
        case "passtime1":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 1);
            break;
        case "passtime2":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 2);
            break;
        case "passtime3":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 3);
            break;
        case "passtime4":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 4);
            break;
        case "passtime5":
            char.settime(9, 0);
            nav.killbutton("ll");
            break;
        case "takekey":
            inv.update("landlordKey", true, null);
            break;
        default:
            break;
    }
};

room15.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "Hay " + sc.n("me") + " everyone pays rent around here, even " + sc.n("lola") + " and " + sc.n("eva") +
                ". You need to check the help wanted on your computer if you want to see what's available. ",
            button: [
                { chatID: -1, text: "Got it " + sc.n("landlord"), callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "Hay " + sc.n("me") + " you're trying to improve yourself. It's what I've always wanted. " +
                "I've got to get ready to work at the ol' Helping Hands Sperm Bank, got a big delivery due in today from the east " +
                "and I need to get them in the cryo unit right away. Be good today ok sweetie.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord"), callback: "passtime1" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Morning Sweetie. It's so busy at the Sperm Bank! I don't know if it's something in the air, or just that time of year, but " +
                "we're going through about a gallon of sperm each day. I swear you could paint a house with all the sperm where " +
                "putting out! Well I've got to get to work, so busy....",
            button: [
                { chatID: -1, text: "Have fun at work.", callback: "passtime2" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Young man I'm sure you could make some extra money. I'll tell you what, each day you make my bed I'll take " +
                "5 dollars off the rent, but only if you promise not to mess with anything in the room. ",
            button: [
                { chatID: 5, text: "I promise only to touch the bed and nothing else! [Take Key]", callback: "takekey" },
                { chatID: -1, text: "No thanks, I don't want extra chores.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "OK, I'll take your word for it, I know you're a good boy. I've got to get to work now, be good.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord") + "!", callback: "passtime4" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "So much sperm moving in and out of my office... Gotta get to work.",
            button: [
                { chatID: -1, text: "Have fun at work " + sc.n("landlord"), callback: "passtime5" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Good morning honey. So the weirdest thing happend today... Someone has been stealing sperm from work! At least " +
                "50 differt samples have disappeared without a trace. I mean who would steal all that sperm?! I bet it was that damned " +
                "sex cult that lives in the woods. I've heard they sit around and drink sperm in their rituals. ",
            button: [
                { chatID: 8, text: "That's weird....", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "I know! I could understand if it was a vile or two of one of our higher end samples, but they " +
                "grabbed some of the cheapest sperm we had. Some of those samples were downright vile, but " +
                "we've just been so busy we've had to lower the bar on who could donate.",
            button: [
                { chatID: 9, text: "....", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "The police are investigating it now, but just between you and me the police are completely incompetent. " +
                "It's like watching a comedy show of buffoons tripping over each other. Since we're so low, if you want to donate " +
                "some of your specimens come down, we can use some of the cheap stuff.  ",
            button: [
                { chatID: -1, text: "That's terrible. The police in this town are the worst! ", callback: "passtime3" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};