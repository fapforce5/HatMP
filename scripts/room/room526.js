//Room name
var room526 = {};
room526.main = function () {
    var btnList = [{
        "type": "btn",
        "name": "zoey",
        "left": 923,
        "top": 175,
        "width": 318,
        "height": 140,
        "image": "526_bar/barmaid.jpg"
    }];
    if (sc.getstep("poppy") === 0) {
        sc.setstep("poppy", 1);
        btnList.push({
            "type": "btn",
            "name": "group",
            "left": 500,
            "top": 0,
            "width": 1229,
            "height": 1080,
            "image": "526_bar/group1.png"
        });
        chat(0, 526);
    }
    $.each(btnList, function (i, v) {
        nav.button(v, 526);
    });

    nav.buildnav([0]);
};

room526.btnclick = function (name) {
    switch (name) {
        case "group2":
            nav.killbutton("group2");
            nav.bg("526_bar/group3.jpg");
            nav.button({
                "type": "btn",
                "name": "group3",
                "left": 1120,
                "top": 407,
                "width": 266,
                "height": 266,
                "image": "526_bar/group3.png"
            }, 526);
            break;
        case "group3":
            nav.killbutton("group3");
            nav.bg("526_bar/group4.jpg");
            nav.button({
                "type": "btn",
                "name": "group4",
                "left": 1120,
                "top": 407,
                "width": 266,
                "height": 266,
                "image": "526_bar/group4.png"
            }, 526);
            break;
        case "group4":
            nav.killbutton("group4");
            nav.bg("526_bar/group5.jpg");
            nav.button({
                "type": "btn",
                "name": "group5",
                "left": 1120,
                "top": 407,
                "width": 266,
                "height": 266,
                "image": "526_bar/group5.png"
            }, 526);
            chat(8, 526);
            break;
        case "zoey":
            nav.killall();
            nav.bg("526_bar/bgclose.jpg");
            nav.button({
                "type": "btn",
                "name": "close",
                "left": 1222,
                "top": 374,
                "width": 194,
                "height": 290,
                "image": "526_bar/close.png"
            }, 526);
            nav.buildnav([526, 0]);
            break;
        case "close":

            if (!sc.checkevent("zoey", -1)) {
                sc.setstep("zoey", -1);
                chat(16, 526);
            }
            break;
        default:
            break;
    }
};

room526.chatcatch = function (callback) {
    switch (callback) {
        case "checkCock":
            if (cl.c.chastity !== null)
                chat(5, 526);
            else if (cl.c.cock > 2)
                chat(6, 526);
            else {
                nav.killall();
                nav.bg("526_bar/group2.jpg");
                nav.button({
                    "type": "btn",
                    "name": "group2",
                    "left": 1127,
                    "top": 553,
                    "width": 285,
                    "height": 285,
                    "image": "526_bar/group2.png"
                }, 526);
            }
            break;
        case "group6":
            nav.killbutton("group5");
            nav.bg("526_bar/group6.jpg");
            break;
        case "group7":
            nav.bg("526_bar/group7.jpg");
            cl.doCum(false);
            g.mod("giveAnalMale", 1);
            break;
        case "group8":
            nav.bg("526_bar/group8.jpg");
            zcl.displayMain(-100, 600, .23, "clothes", true);
            nav.button({
                "type": "img",
                "name": "group8",
                "left": 1140,
                "top": 0,
                "width": 743,
                "height": 1080,
                "image": "526_bar/group8.png"
            }, 526);
            break;
        case "group9":
            nav.killbutton("group8");
            scc.love("zoey", -5, 100);
            zcl.displayMain(-100, 600, .23, "clothes", false);
            nav.button({
                "type": "img",
                "name": "group8",
                "left": 1140,
                "top": 0,
                "width": 743,
                "height": 1080,
                "image": "526_bar/group8.png"
            }, 526);
            break;
        case "seeZoey":
            room526.btnclick("zoey");
            room526.btnclick("close");
            break;
        default:
            break;
    }
};

room526.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "poppy",
            text: "Oh... hello. We wern't expecting any new girls here! ",
            button: [
                { chatID: 1, text: "GULP", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "orchid",
            text: "Oh is there someone new here! Who is it! ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "juniper",
            text: "Yes, what's your name? ",
            button: [
                { chatID: 3, text: "I'm " + sc.n("me") + ". What is this place?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "poppy",
            text: "Zoey's bar you silly sissy. The best damn bar in this town! So did you want to take a turn with " + 
                sc.n("orchid") + "? I bet you fuck like a freight train.",
            button: [
                { chatID: -1, text: "Fuck Yes!", callback: "checkCock" },
                { chatID: 4, text: "Oh no.... I'm a scared little bitch", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "orchid",
            text: "Awwww, I was hoping for more cum in my bum!",
            button: [
                { chatID: -1, text: "I'm going to chat with Zoey. You girls have fun.", callback: "seeZoey" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Oh wait.. I'm wearing a chastity cage. I guess I won't fuck " + sc.n("orchid") + ". Sad Noises.",
            button: [
                { chatID: -1, text: "Fuck Yes!", callback: "seeZoey" }
            ]
        },
        {
            chatID: 6,
            speaker: "juniper",
            text: "Oh hahaha! What a tiny little cock! You should have just told us you're a bottom! ",
            button: [
                { chatID: -1, text: "Sad noises.. I'll go see " + sc.n("zoey") + ".", callback: "seeZoey" }
            ]
        },
        {
            chatID: 7,
            speaker: "orchid",
            text: "Oh yes!!! Use " + sc.n("poppy") + "'s cum as lube! Fuck my dirty asshole!",
            button: [
                { chatID: -1, text: "[Fuck her dirty asshole]", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "orchid",
            text: "Ohhhh yes!!",
            button: [
                { chatID: 9, text: "Take it slut!", callback: "group6" }
            ]
        },
        {
            chatID: 9,
            speaker: "orchid",
            text: "Oh yes daddy! Fill my bum bum so I can leak it everywhere!",
            button: [
                { chatID: 10, text: "[I'm going to cum]", callback: "group7" }
            ]
        },
        {
            chatID: 10,
            speaker: "orchid",
            text: "Fuck I feel your cum in my bum! hehehe",
            button: [
                { chatID: 11, text: "Oh Yesssss! I love cumming in stangers! ", callback: "group8" }
            ]
        },
        {
            chatID: 11,
            speaker: "zoey",
            text: "Zut alors!!! " + sc.n("me") + " you are getting man goo all over my table!",
            button: [
                { chatID: 12, text: "Huh? ", callback: "group9" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "OH!!" + sc.n("zoey") + "!! Oh hahaha hi, I didn't mean to, he, I, ummmmm",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "OH!! " + sc.n("zoey") + "!! Oh hahaha hi, I didn't mean to, he, I, ummmmm",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "zoey",
            text: "It's ok. It's not the first time " + sc.n("orchid") + " has leaked man goo over my bar. If she wasn't " +
                "a regular I would kick her out!",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "zoey",
            text: "Come over to the bar, I'll get you a drink.",
            button: [
                { chatID: -1, text: "OK!", callback: "seeZoey" }
            ]
        },
        {
            chatID: 16,
            speaker: "zoey",
            text: "It's about time you came by my bar! What took you so long? ",
            button: [
                { chatID: 17, text: "You're crazy dress code! ", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "zoey",
            text: "Oh yeah, I'm glad there's a dress code, 'cause you look great in a dress! You ever thinking about going full " +
                "fem? You make a really pretty girl.",
            button: [
                { chatID: 18, text: "oh hahaha *blush*", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "zoey",
            text: "Tu me rends excitée. Don't be a stranger!",
            button: [
                { chatID: -1, text: "I won't", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};