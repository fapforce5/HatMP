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
    },
    {
        "type": "btn",
        "name": "bathroom",
        "left": 546,
        "top": 135,
        "width": 53,
        "height": 436,
        "image": "526_bar/bathroom.png"
    }];

    if (sc.getstep("poppy") === 0) {
        sc.setstep("poppy", 1);
        g.setflag("zbar");
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
    else {
        if (!g.get("zbar")) {
            btnList.push({
                "type": "btn",
                "name": "g1",
                "left": 1055,
                "top": 0,
                "width": 865,
                "height": 1080,
                "image": "526_bar/g1.png"
            });
        }
    }
    $.each(btnList, function (i, v) {
        nav.button(v, 526);
    });

    nav.buildnav([527, 0]);
};

room526.btnclick = function (name) {
    switch (name) {
        case "bathroom":
            char.room(527);
            break;
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
        case "g1":
                chat(19, 526);
            break;
        case "g1_big2":
            if (g.internal < 6) {
                nav.bg("526_bar/g1_big" + g.internal + ".jpg");
                g.internal++;
            }
            else {
                nav.killbutton("g1_big2");
                g.mod("giveOralMale", 1);
                zcl.displayMain(-200, 1000, .25, "clothes", true);
                nav.bg("526_bar/g1_big6.jpg");
                chat(25, 526);
            }
            break;
        case "g1_smol2":
            nav.bg("526_bar/g1_smol" + g.internal + ".jpg");
            if (g.internal < 5) {
                g.internal++;
            }
            else {
                nav.killbutton("g1_smol2");
                g.mod("receiveAnalMale", 1);
                chat(30, 526);
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
        case "killem":
            nav.killbutton("g1");
            break;
        case "g1_1":
            nav.killall();
            char.changeMenu("hide", false);
            if (cl.c.chastity !== null) {
                nav.bg("526_bar/g1_chastity.jpg");
                chat(27, 526);
            }
            else if (cl.c.cock < 2) {
                nav.bg("526_bar/g1_big.jpg");
                chat(21, 526);
            }
            else {
                nav.bg("526_bar/g1_smol.jpg");
                chat(34, 526);
            }
            break;
        case "g1_big1":
            nav.bg("526_bar/g1_big1.jpg");
            break;
        case "g1_big2":
            g.internal = 3;
            nav.bg("526_bar/g1_big2.jpg");
            nav.button({
                "type": "btn",
                "name": "g1_big2",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 526);
            break;
        case "g1_small1":
            nav.killall();
            g.internal = 2;
            nav.bg("526_bar/g1_smol1.jpg");
            nav.button({
                "type": "btn",
                "name": "g1_smol2",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 526);
            
            break;
        case "g1_end":
            sc.setstep("poppy", 2);
            g.setflag("zbar");
            char.addtime(75);
            char.room(526);
            break;
        case "g1_small2":
            nav.bg("526_bar/bg.jpg");
            nav.button({
                "type": "btn",
                "name": "juniper",
                "left": 1055,
                "top": 0,
                "width": 460,
                "height": 1080,
                "image": "526_bar/juniper.png"
            }, 256);
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
        {
            chatID: 19,
            speaker: "juniper",
            text: "Hay honey, you want to play a game?",
            button: [
                { chatID: 20, text: "I sure do!", callback: "" },
                { chatID: -1, text: "No, not right now. ", callback: "killem" }
            ]
        }, 
        {
            chatID: 20,
            speaker: "juniper",
            text: "Oh fun! We're going to play our favorite game; who has the smallest cock. Strip it off honey!",
            button: [
                { chatID: -1, text: "ok! ", callback: "g1_1" }
            ]
        }, 
        {
            chatID: 21,
            speaker: "orchid",
            text: "Oh man, am I the smallest again!",
            button: [
                { chatID: 22, text: "...", callback: "" }
            ]
        }, 
        {
            chatID: 22,
            speaker: "poppy",
            text: "Yep, you're the smallest. You know what that means...",
            button: [
                { chatID: 23, text: "...", callback: "" }
            ]
        }, 
        {
            chatID: 23,
            speaker: "orchid",
            text: "Sigh... I know...",
            button: [
                { chatID: 24, text: "...", callback: "g1_big1" }
            ]
        }, 
        {
            chatID: 24,
            speaker: "orchid",
            text: "...don't be gentle.",
            button: [
                { chatID: -1, text: "...", callback: "g1_big2" }
            ]
        }, 
        {
            chatID: 25,
            speaker: "orchid",
            text: "I'm going to be farting cum for a week. It will be glorius!",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "poppy",
            text: "Yeah. We play this game all the time. Feel free to cum back!",
            button: [
                { chatID: -1, text: "I will!", callback: "g1_end" }
            ]
        },
        {
            chatID: 27,
            speaker: "juniper",
            text: "We have a chastity slut girls! You know what that means.",
            button: [
                { chatID: 28, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "orchid",
            text: "It means I didn't lose, you do!",
            button: [
                { chatID: 29, text: "Lose?", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "poppy",
            text: "Oh yeah, get ready honey.",
            button: [
                { chatID: -1, text: "Ready?", callback: "g1_small1" }
            ]
        },
        {
            chatID: 30,
            speaker: "juniper",
            text: "FFFuuuuuu",
            button: [
                { chatID: 31, text: "UGH", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "poppy",
            text: "Ooooo Yeah",
            button: [
                { chatID: 32, text: "...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "orchid",
            text: "Such a great ass",
            button: [
                { chatID: 33, text: "UGH! I'm so full.", callback: "g1_small2" }
            ]
        },
        {
            chatID: 33,
            speaker: "juniper",
            text: "You were great! Stop by again, we play this game every night.",
            button: [
                { chatID: -1, text: "I will, it's my favorite game. ", callback: "g1_end" }
            ]
        },
        {
            chatID: 34,
            speaker: "juniper",
            text: "Awww it's so small. You know what that means...",
            button: [
                { chatID: 28, text: "Huh?", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};