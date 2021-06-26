//Bar bathroom
var room527 = {};
room527.main = function () {
    
    var navList = [526];
    nav.buildnav(navList);
    chat(0, 527);
};

room527.btnclick = function (name) {
    switch (name) {
        case "s":
            nav.bg("527_bathroom/s" + g.internal + ".jpg");
            g.internal++;
            if (g.internal === 5) {
                g.mod("pissedonMale", 1);
                nav.killbutton("s");
                chat(5, 527);
            }
            break;
        default:
            break;
    }
};

room527.chatcatch = function (callback) {
    switch (callback) {
        case "wait":
            if (g.hourBetween(17, 25) || g.hourBetween(0, 2)) {
                var app = cl.appearance();
                if (app > 2) {
                    var thisr = Math.floor(Math.random() * 10);
                    if (app > thisr) {
                        if (Math.floor(Math.random() * 2) === 0) {
                            if (sc.getstep("zoey") < 300) {
                                g.roomTimeout = setTimeout(function () {
                                    nav.button({
                                        "type": "img",
                                        "name": "trouble",
                                        "left": 744,
                                        "top": 0,
                                        "width": 722,
                                        "height": 1080,
                                        "image": "527_bathroom/zoey.png"
                                    }, 526);
                                    chat(6, 527);
                                }, 500);
                            }
                            else {
                                nav.button({
                                    "type": "img",
                                    "name": "trouble",
                                    "left": 744,
                                    "top": 0,
                                    "width": 722,
                                    "height": 1080,
                                    "image": "527_bathroom/zoey.png"
                                }, 526);
                                chat(13, 527);
                            }
                        }
                        else {
                            g.roomTimeout = setTimeout(function () {
                                zcl.displayMain(100, 300, .15, "clothes", false);
                                nav.button({
                                    "type": "btn",
                                    "name": "trouble",
                                    "left": 584,
                                    "top": 0,
                                    "width": 1195,
                                    "height": 1080,
                                    "image": "527_bathroom/trouble.png"
                                }, 526);
                                chat(4, 527);
                            }, 500);
                        }
                    }
                    else {
                        zcl.displayMain(100, 300, .15, "clothes", false);
                        chat(3, 527);
                    }
                }
                else {
                    char.addtime(60);
                    chat(2, 527);
                }
            }
            else {
                chat(1, 527);
            }
            break;
        case "leave":
            char.room(526);
            break;
        case "leave60":
            char.addtime(60);
            char.room(526);
            break;
        case "s1":
            nav.killall();
            nav.bg("527_bathroom/s1.jpg");
            g.internal = 2;
            nav.button({
                "type": "btn",
                "name": "s",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 527);
            break;
        case "reset":
            char.addtime(60);
            char.room(527);
            break;
        case "z1":
            nav.killall();
            nav.bg("527_bathroom/z1.jpg");
            break;
        case "z2":
            nav.bg("527_bathroom/z2.jpg");
            break;
        case "z3":
            scc.love("zoey", 5, 100); 
            g.mod("pissedonFemale", 1);
            nav.bg("527_bathroom/z3.jpg");
            break;
        default:
            break;
    }
};

room527.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "This place is creepy...",
            button: [
                { chatID: -1, text: "Wait here", callback: "wait" },
                { chatID: -1, text: "Get out!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "It's too late to wait for someone here.",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Hmmm. An hour's passed an nothing. Maybe I'm not attactive enough. ",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Time has passed...",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "random",
            text: "Oh look, a present for me. Strip and get on your knees toilet.",
            button: [
                { chatID: -1, text: "Do as he says", callback: "s1" },
                { chatID: -1, text: "Squeel and run away", callback: "leave60" }
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "Good toilet. Now thank me and clean up. ",
            button: [
                { chatID: -1, text: "Thank you sir. ", callback: "reset" }
            ]
        },
        {
            chatID: 6,
            speaker: "zoey",
            text: sc.n("me") + " are you waiting in here so you can be someone's toilet? ",
            button: [
                { chatID: 8, text: "Uhhh yea", callback: "" },
                { chatID: 7, text: "Wha. No. Gross", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "zoey",
            text: "Well I need to pee, and there's only one bathroom, so if you don't mind.",
            button: [
                { chatID: -1, text: "I was just finishing up. Later.", callback: "leave60" }
            ]
        },
        {
            chatID: 8,
            speaker: "zoey",
            text: "Sigh, fine lay down. You can be my toilet. Strip off your clothes so you don't drip pee all over my bar. ",
            button: [
                { chatID: 9, text: "Sweet!", callback: "z1" }
            ]
        },
        {
            chatID: 9,
            speaker: "zoey",
            text: "You better be ready cause once I start I can not stop. ",
            button: [
                { chatID: 10, text: "I'm ready.", callback: "z2" }
            ]
        },
        {
            chatID: 10,
            speaker: "zoey",
            text: "Bois mon pipi",
            button: [
                { chatID: 11, text: "Slurp, gurgle", callback: "z3" }
            ]
        },
        {
            chatID: 11,
            speaker: "zoey",
            text: "Hahaha. Fille dégoûtante. Don't drip any of that on my floor, there's enough gross things I have to clean up. ",
            button: [
                { chatID: 12, text: "Lol ok " + sc.n("zoey") + ". ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "zoey",
            text: "Ok, I've got to get back to work. Later ma petite amie.",
            button: [
                { chatID: -1, text: "See ya. ", callback: "leave60" }
            ]
        },
        {
            chatID: 13,
            speaker: "zoey",
            text: "je vais pisser. Get out.",
            button: [
                { chatID: -1, text: "Ok", callback: "leave60" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};