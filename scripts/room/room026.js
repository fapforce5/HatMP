//Room name
var room26 = {};
room26.main = function () {
    var btnList = new Array();

    if (sc.mother().thisRoom) {
        nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg")
        btnList.push({
            "type": "btn",
            "name": "landlord",
            "left": 764,
            "top": 58,
            "width": 701,
            "height": 930,
            "image": "26_livingRoom/ll.png"
        });
    }
    
    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 26);
    });
    nav.buildnav(navList);
};

room26.btnclick = function (name) {
    switch (name) {
        case "landlord":
            if (g.get("momchat"))
                chat(2, 26)
            else {
                var ll = sc.getstep("landlord");
                if (!sc.checkevent("me", 2))
                    chat(0, 26);
                else if (ll === 0)
                    chat(1, 26);
                else if (ll === 1)
                    chat(3, 26);
                else if (ll === 2)
                    chat(4, 25);
                else if (ll === 3)
                    chat(7, 25);
                else if (ll === 4)
                    chat(9, 26)
                else if (ll === 5)
                    chat(9, 26)
                else if (ll === 6)
                    chat(11, 26);
                else if (ll < 4)
                    chat(11, 26);
                else 
                    chat(2, 26);
            }
            break;
        default:
            break;
    }
};

room26.chatcatch = function (callback) {
    switch (callback) {
        case "passtime":
            char.addtime(30);
            break;
        case "passtimeStop":
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime1":
            sc.setstep("landlord", 1);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime2":
            sc.setstep("landlord", 2);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime3":
            sc.setstep("landlord", 3);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "takekey":
            inv.update("landlordKey", true, null);
            break;
        case "passtime4":
            sc.setstep("landlord", 4);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime5":
            sc.setstep("landlord", 6);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime6":
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime6a":
            nav.killall();
            nav.bg("26_livingRoom/passtime6a.jpg");
            break;
        case "passtime6b":
            nav.bg("26_livingRoom/passtime6b.jpg");
            break;
        default:
            break;
    }
};

room26.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Stop straing at my pussy and go get a job!",
            button: [
                { chatID: -1, text: "...", callback: "passtime" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "Hay " + sc.n("me") + ", I'm happy you're trying to improve yourself. It's what I've always wanted. " +
                "I've been working at the ol' Helping Hands Sperm Bank for years. If you apply yourself and work hard you won't " +
                "be a complete homeless loser. Now run along.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord"), callback: "passtime1" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: sc.n("landlord") + "'s watching her shows.. run along.",
            button: [
                { chatID: -1, text: "[Run along]", callback: "passtime" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Hi sweetie. I've been so busy at the Sperm Bank. We've been going through so much sperm and " + sc.n("landlord") + "'s " +
                "tired. Run along now.",
            button: [
                { chatID: -1, text: "[Run Along]", callback: "passtime2" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Hi honey. So the weirdest thing happend today... Someone has been stealing sperm from work! At least " +
                "50 differt samples have disappeared without a trace. I mean who would steal all that sperm?! I bet it was that damned " +
                "sex cult that lives in the woods. I've heard they sit around and drink sperm in their rituals. ",
            button: [
                { chatID: 5, text: "That's weird....", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "I know! I could understand if it was a vile or two of one of our higher end samples, but they " +
                "grabbed some of the cheapest sperm we had. Some of those samples were downright vile, but " +
                "we've just been so busy we've had to lower the bar on who could donate.",
            button: [
                { chatID: 6, text: "....", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "The police are investigating it now, but just between you and me the police are completely incompetent. " +
                "It's like watching a comedy show of buffoons tripping over each other. Since we're so low, if you want to donate " +
                "some of your specimens come down, we can use some of the cheap stuff.  ",
            button: [
                { chatID: -1, text: "That's terrible. The police in this town are the worst! ", callback: "passtime3" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Young man I'm sure you could make some extra money. I'll tell you what, each day you make my bed I'll take " +
                "5 dollars off the rent, but only if you promise not to mess with anything in the room. ",
            button: [
                { chatID: 8, text: "I promise only to touch the bed and nothing else! [Take Key]", callback: "takekey" },
                { chatID: -1, text: "No thanks, I don't want extra chores.", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "OK, I'll take your word for it, I know you're a good boy. I'm getting back to my shows. Run along now.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord") + "!", callback: "passtime4" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Hi sweetie. You should be proud of how hard you've worked so far. Maybe I'll have you help me out sometime at the " +
                "sperm store. You seem like the kind of boy that would like that.. hahahah. ",
            button: [
                { chatID: 10, text: "Oh gross", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You don't have to pretend with me honey. I know you're an odd little boy. ",
            button: [
                { chatID: -1, text: sc.n("landlord"), callback: "passtime5" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "You know staring at your " + sc.n("landlord") + "'s pussy is wrong don't you?",
            button: [
                { chatID: -1, text: "Sorry " + sc.n("landlord"), callback: "passtimeStop" },
                { chatID: 12, text: sc.n("landlord") + "?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Don't act innocent with me. I can tell what you're staring at. I'm just trying to watch my shows and you keep coming over to stare at my " +
                "vagina. Lets get this over with, come take a closer look.",
            button: [
                { chatID: 13, text: "[Take a closer look]", callback: "passtime6a" }
            ]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "Closer...",
            button: [
                { chatID: 14, text: "...", callback: "passtime6b" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "To be continued",
            button: [
                { chatID: -1, text: "...", callback: "passtime6" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};