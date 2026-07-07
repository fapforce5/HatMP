//Room name
var room152 = {};
room152.main = function () {
    if (!daily.get("jonesCleanRoom1"))
        sc.select("clean", "152_sittingRoom/clean.png", 0);

    nav.buildnav([150, 153, 154]);
};

room152.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            char.addtime(60);
            nav.bg("152_sittingRoom/dust.jpg");
            daily.set("jonesCleanRoom1");
            if (gv.get("jonesroom") === g.roomID) {
                g.internal = 0;
                nav.next("dicksout");
            }
            else {
                nav.next("finishClean");
            }
            break;
        case "finishClean":
            char.room(152);
            break;
        case "dicksout":
            if (g.internal === 0) {
                nav.bg("152_sittingRoom/e0.webp");
            }
            else if (g.internal === 1) {
                nav.bg("152_sittingRoom/e1.webp");
            }
            else {
                nav.kill();
                nav.bg("152_sittingRoom/e2.webp");
                chat(0, 152);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room152.chatcatch = function (callback) {
    switch (callback) {
        case "e3":
        case "e4":
        case "e5":
        case "e7":
            nav.bg("152_sittingRoom/" + callback + ".webp");
            break;
        case "e6":
            levels.oral(4, "m", "jones", true);
            nav.bg("152_sittingRoom/" + callback + ".webp");
            break;
        case "e8":
            zcl.displayMain(300, 800, .16, "clothes", true);
            char.addtime(30);
            nav.bg("152_sittingRoom/e8.webp");
            break;
        case "reset":
            char.room(152); 
            break;
        default:
            break;
    }
};

room152.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bitch",
            text: "You fucking idiot! Can't you see that " + sc.n("jones") + " has his dick out while you're " +
                "fucking around with those microscopic specks of dust! You get here right now and take care of " +
                "that dick! ",
            button: [
                { chatID: 1, text: "Oh. Yes ma'am. ", callback: "e3" }
            ]
        },
        {
            chatID: 1,
            speaker: "bitch",
            text: "Look at this giant penis. It's the most amazing penis you will ever have the pleasure to suck. " +
                "If this penis is laid out in front of you, you will run over and suck it like it's the antidote " +
                "to the poison you just swallowed! Now suck that cock you stupid whore! ",
            button: [
                { chatID: 2, text: "aaahhhh ", callback: "e4" }
            ]
        },
        {
            chatID: 2,
            speaker: "bitch",
            text: "Get all the way down. He deserves to thrust into your tight throat so " +
                sc.n("jones") + " can really feel it.",
            button: [
                { chatID: 3, text: "Guk!", callback: "e5" }
            ]
        },
        {
            chatID: 3,
            speaker: "bitch",
            text: "This is how your fuck your own face!",
            button: [
                { chatID: 4, text: "hmmm gluk mmMmmm gluk", callback: "e6" }
            ]
        },
        {
            chatID: 4,
            speaker: "bitch",
            text: "There you go. Keep it deep in there. " + sc.n("jones") + " needs to continue to feel " +
                "your tight throat as he gives you the gift of his cum. ",
            button: [
                { chatID: 5, text: "*gulp* *gulp* *gulp*", callback: "e7" }
            ]
        },
        {
            chatID: 5,
            speaker: "jones",
            text: "*spitting* Next time don't make me wait.",
            button: [
                { chatID: 6, text: "sowwrrry *gulp*", callback: "e8" }
            ]
        },
        {
            chatID: 6,
            speaker: "bitch",
            text: "You're such a disappointment. You should be glad he didn't kick you out for your insolence.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "reset" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(152, room152);
