//Room name
var room661 = {};
room661.main = function () {
    if (g.pass === "new") {
        var btnList = [
            {
                "type": "img",
                "name": "tiffany",
                "left": 648,
                "top": 223,
                "width": 487,
                "height": 857,
                "image": "661_peephole/661_tiffany.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 661);
        });
        chat(0, 661);
    }
    else {
        nav.bg("661_peephole/661_peephole.jpg");
        chat(2, 661);
    }
    g.internal = 0;

};

room661.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room661.chatcatch = function (callback) {
    switch (callback) {
        case "takePlace":
            nav.killall();
            nav.bg("661_peephole/661_peephole.jpg");
            chat(2, 661);
            break;
        case "makePerson":
            if (Math.floor(Math.random() * 2) === 0)
                nav.bg("661_peephole/661_peephole0.jpg");
            else
                nav.bg("661_peephole/661_peephole1.jpg");
            break;
        case "check":
            nav.bg("661_peephole/661_interior.png");
            break;
        case "recycle":
            char.addtime(60);
            g.internal++;
            if (g.internal > 0 && sc.getstep("tiffany") > 3) {
                nav.bg("661_peephole/662_peephole2.jpg");
                chat(17, 661);
            }
            else if (g.internal < 5) {
                nav.bg("661_peephole/661_peephole.jpg");
                chat(2, 661);
            }
            else {
                nav.bg("661_peephole/661_backroom.jpg");
                nav.button({
                    "type": "img",
                    "name": "tifAngry",
                    "left": 648,
                    "top": 223,
                    "width": 487,
                    "height": 857,
                    "image": "661_peephole/661_tiffany.png"
                }, 661);
                chat(9, 661);
            }
            break;
        case "end":
            g.setflag("tiffanyDayEvent");
            if (sc.getstep("tiffany") < 10)
                sc.incstep("tiffany", 1);
            char.room(651);
            break;
        case "peek1":
            nav.bg("661_peephole/peek1.jpg");
            zcl.displayMain(-200, 500, .40, "clothes", true);
            break;
        case "peek2":
            nav.bg("661_peephole/peek2.jpg");
            zcl.kill();
            nav.button({
                "type": "img",
                "name": "tiffany1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "661_peephole/661_masterbate.gif"
            }, 661);
            break;
        case "peek3":
            nav.killbutton("tiffany1");
            nav.bg("661_peephole/peek3.jpg");
            break;
        case "peek4":
            nav.bg("661_peephole/peek4.jpg");
            zcl.displayMain(-200, -100, .35, "clothes", true);
            break;
        case "peek5":
            char.addtime(360);
            sc.setstep("tiffany", -5);
            sc.setstep("tiffany", 5);
            sc.setstep("missy", 8);
            g.roomMapAccess(650, false, false);
            char.room(0);
            break;
        case "nap":
            nav.bg("661_peephole/661_black.jpg");
            break;
        case "wakeUp":
            nav.bg("661_peephole/661_backroom.jpg");
            nav.button({
                "type": "img",
                "name": "tifAngry",
                "left": 648,
                "top": 223,
                "width": 487,
                "height": 857,
                "image": "661_peephole/661_tiffanyangry.png"
            }, 661);
            break;
        case "changeEx":
            nav.killbutton("tifAngry");
            nav.button({
                "type": "img",
                "name": "tifAngry1",
                "left": 648,
                "top": 223,
                "width": 487,
                "height": 857,
                "image": "661_peephole/661_tiffany.png"
            }, 661);
            break;
        case "angryAgain":
            nav.button({
                "type": "img",
                "name": "tifAngry",
                "left": 648,
                "top": 223,
                "width": 487,
                "height": 857,
                "image": "661_peephole/661_tiffanyangry.png"
            }, 661);
            break;
        
        case "caught":
            nav.bg("661_peephole/caught.jpg");
            break;
        case "caught1":
            nav.bg("661_peephole/caught1.jpg");
            break;
        case "caught2":
            nav.bg("661_peephole/661_black.jpg");
            break;
        case "caught3":
            nav.bg("661_peephole/caught3.jpg");
            break;
        case "caught4":
            nav.bg("661_peephole/caught4.jpg");
            break;
        case "caught5":
            nav.bg("661_peephole/caught5.jpg");
            break;
        case "caught6":
            nav.bg("661_peephole/caught6.jpg");
            g.roomTimeout = setTimeout(function () { chat(25, 661); }, 1000);
            break;
        case "caught7":
            nav.bg("661_peephole/caught7.jpg");
            break;
        case "caught8":
            char.addtime(360);
            sc.setstep("tiffany", -4);
            sc.setstep("tiffany", 5);
            sc.setstep("missy", 8);
            char.room(0);
            break;
        default:
            break;
    }
};

room661.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "So, like, there's this peep hole in this door. You can use it watch for people going into the booths.",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "When you see someone go in get a good look at them, then check the booth for shit. It's so disgusting " +
                "you need to find and stop that filthy fuck! Also I'll be working around the corner, don't be mister pervert and " +
                "peek at me. K?",
            button: [
                { chatID: -1, text: "Got it. I'll get him. [Take your place at the peephole]", callback: "takePlace" }
            ]
        },
        {
             chatID: 2,
             speaker: "me",
             text: "This is the most boring job ever...",
             button: [
                 { chatID: 3, text: "[Continue Working]", callback: "" }
             ]
        },
        {
             chatID: 3,
             speaker: "me",
             text: "So boring...",
             button: [
                 { chatID: 4, text: "[Continue Working]", callback: "" }
             ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I wonder what " + sc.n("tiffany") + " is up to...",
            button: [
                { chatID: 10, text: "[Take a quick peek]", callback: "peek1" },
                { chatID: 5, text: "[Continue Working]", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "sooo boring....",
            button: [
                { chatID: 10, text: "[Take a quick peek]", callback: "peek1" },
                { chatID: 6, text: "[Continue Working]", callback: "makePerson" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Oh look a customer",
            button: [
                { chatID: 7, text: "[Check if they are the cum shooter]", callback: "check" }
            ]
        },
        {
             chatID: 7,
             speaker: "me",
             text: "Damn! Only one cum shot!",
             button: [
                 { chatID: -1, text: "[go back to watching]", callback: "recycle" }
             ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "Still not the cum shooter. I guess I'll have to try to get him tomorrow. ",
            button: [
                { chatID: -1, text: "[go back to checking]", callback: "recycle" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Well it's looks like that's it for today. Feel free to come back tomorrow. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "end" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "That is so hot! I need a closer look!",
            button: [
                { chatID: 11, text: "[Get a better view]", callback: "peek2" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Nice....",
            button: [
                { chatID: 12, text: "[Continue to perv on Tiffany]", callback: "peek3" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "hmmmmm.....",
            button: [
                { chatID: 13, text: "Oh shit, did she see me?", callback: "peek4" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "What the fuck!!!",
            button: [
                { chatID: 14, text: "I'm so sorry " + sc.n("tiffany") + ".. I thought I heard a noise...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "You're totally lying, you're perving on me instead of trying to catch the cum monster! ",
            button: [
                { chatID: 15, text: "...uhhhh", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "You need to go. I don't want to see you in this store again!",
            button: [
                { chatID: 16, text: "but... ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "tiffany",
            text: "No, I'm so mad right now.. Just go you filthy little fuck!!",
            button: [
                { chatID: -1, text: "[Leave]", callback: "peek5" }
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "What is going on with that? Is that one of those cult people? I bet he's the one!",
            button: [
                { chatID: 18, text: "Go check", callback: "caught" }
            ]
        },
        {
            chatID: 18,
            speaker: "cultjgirl",
            text: "Who dares interrupt the extraction process?",
            button: [
                { chatID: 19, text: "Huh?", callback: "caught1" }
            ]
        },
        {
            chatID: 19,
            speaker: "cultjgirl",
            text: "Cult PUNCH",
            button: [
                { chatID: 20, text: "OOooofffff", callback: "caught2" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "ZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
            button: [
                { chatID: 21, text: "...", callback: "caught3" }
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "WHAT THE FUCK!!",
            button: [
                { chatID: 22, text: "wha....", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "Are you sleeping! ",
            button: [
                { chatID: 23, text: "wha....  no... I caught her. [Tell " + sc.n("tiffany") + " what happened]", callback: "caught4" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "Oh I'm so sorry! It looked like you were sleeping. I feel terrible! Are you ok?",
            button: [
                { chatID: 24, text: "Just a little woozy", callback: "caught5" }
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "I suppose you deserve an apology for me being so mean.",
            button: [
                { chatID: -1, text: "huh", callback: "caught6" }
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "Here's a free peek. I hope you don't mind a drippy pussy, I'm always horny. ",
            button: [
                { chatID: 26, text: "oh yeah", callback: "caught7" }
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "I'll let " + sc.n("missy") + " know what a big help you were! Those cultist are always trouble! You're the best! ",
            button: [
                { chatID: -1, text: "Thanks! [Leave]", callback: "caught8" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
