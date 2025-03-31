//Room name
var room315 = {};
room315.main = function () {
    if (g.isNight()) {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 1038,
            "top": 81,
            "width": 319,
            "height": 753,
            "image": "315_girlfriend/door_night.png"
        }, 315);
    }
    else {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 1029,
            "top": 72,
            "width": 322,
            "height": 755,
            "image": "315_girlfriend/door.png"
        }, 315);
    }
    var navList = [0];
    nav.buildnav(navList);
};


room315.btnclick = function (name) {
    switch (name) {
        case "door":
            var vacation = sc.getMission("dog", "vacation");
            if (vacation.inProgress) {
                char.room(316);
            }
            else if (g.gethourdecimal() > 22 || g.gethourdecimal() < 6) {
                if (inv.has("lockpick"))
                    chat(15, 315);
                else
                    chat(3, 315);
            }
            else if (sc.getMission("janice", "breakup").inProgress) {
                nav.killall();
                nav.bg("315_girlfriend/day.jpg", "315_girlfriend/night.jpg");
                chat(14, 315);
            }
            else if (sc.taskGetStep("janice", "femdom") === 1) {
                sc.completeMissionTask("janice", "femdom", 1);
                chat(18, 315);
            }
            else {
                var dateTask = sc.taskGetStep("janice", "date");
                if (cl.c.chest > 2)
                    sc.modSecret("janice", 100);
                if (cl.isLewd()) {
                    if (cl.c.chastity !== null)
                        sc.modSecret("janice", 50);
                    nav.kill();
                    nav.bg("315_girlfriend/day.jpg", "315_girlfriend/night.jpg");
                    chat(27, 315);
                    return;
                }
                if (dateTask === 2) {
                    if (g.dt.getDay() === 5 || g.dt.getDay() === 6) {
                        if (gv.get("money") < 100) {
                            chat(13, 315);
                        }
                        else if (g.gethourdecimal() < 19) {
                            chat(11, 315);
                        }
                        else if (g.gethourdecimal() > 21) {
                            chat(12, 315);
                        }
                        else {
                            nav.bg("315_girlfriend/day.jpg", "315_girlfriend/night.jpg");
                            chat(4, 315);
                        }
                    }
                    else {
                        chat(10, 315);
                    }
                }
                else if (g.isNight()) {
                    if (g.gethourdecimal() < 21) {
                        nav.killall();
                        nav.bg("315_girlfriend/night.jpg");
                        chat(4, 315);
                    }
                    else if (g.gethourdecimal() < 25) {
                        nav.kill();
                        chat(1, 315);
                        nav.bg("315_girlfriend/nightx.jpg");
                    }
                    else {
                        chat(3, 315);
                    }
                }
                else {
                    nav.killall();
                    if (daily.get("janice")) {
                        nav.bg("315_girlfriend/day.jpg");
                        chat(5, 315);
                    }
                    else {
                        var datestep = sc.taskGetStep("janice", "date");
                        if (datestep === 3) {
                            nav.button({
                                "type": "img",
                                "name": "aak",
                                "left": 446,
                                "top": 123,
                                "width": 595,
                                "height": 353,
                                "image": "315_girlfriend/aak.png"
                            }, 315);
                            chat(6, 315);
                        }
                        else if (datestep === 4) {
                            nav.button({
                                "type": "img",
                                "name": "aak",
                                "left": 576,
                                "top": 0,
                                "width": 545,
                                "height": 1080,
                                "image": "315_girlfriend/waiter.png"
                            }, 315);
                            chat(7, 315);
                        }
                        else {
                            nav.bg("315_girlfriend/day.jpg", "315_girlfriend/night.jpg")
                            chat(4, 315);
                        }
                    }
                }
            }
            break;
        case "picked":
            chat(17, 315);
            break;
        case "notpicked":
            chat(16, 315);
            break;
        default:
            break;
    }
};

room315.chatcatch = function (callback) {
    switch (callback) {
        case "bitch_1":
        case "bitch_2":
        case "bitch_3":
            nav.bg("315_girlfriend/" + callback + ".jpg");
            break;
        case "bitch_0":
            nav.killall();
            nav.bg("315_girlfriend/" + callback + ".jpg");
            break;
        case "reset":
            char.room(315);
            break;
        case "goinside":
            char.room(316);
            break;
        case "leave":
            char.room(0);
            break;
        case "bg":
            nav.killall();
            break;
        case "waitTask3":
            char.settime(19, 0);
            char.room(316);
            break;
        case "picklock":
            lockpick.init(2, "picked", "notpicked", 30, 315);
            break;
        case "picked":
            g.pass = "picked_316";
            char.room(316);
            break;
        case "completeBitch3":
            char.room(316);
            break;
        default:
            break;
    }
};

room315.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "not used ",
            button: []
        },
        {
            chatID: 1,
            speaker: "janice",
            text: "Oh. It's you. I'm getting ready for bed. Come by during the day baby.  ",
            button: [
                { chatID: 2, text: "Do you want me to tuck you in? ", callback: "" },
                { chatID: -1, text: "ok", callback: "reset" },
            ]
        },
        {
            chatID: 2,
            speaker: "janice",
            text: "Hahaha, no. You know my rules on dating. No sex till marriage. ",
            button: [
                { chatID: -1, text: "ok", callback: "reset" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "It's pretty late. I don't want to come across as a psycho boyfriend.",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "janice",
            text: "I'm so glad you dropped by! Come in!",
            button: [
                { chatID: -1, text: "...", callback: "goinside" },
            ]
        },
        {
            chatID: 5,
            speaker: "janice",
            text: "Hey baby. I'm about to run errands. Catch me tomorrow. ",
            button: [
                { chatID: -1, text: "ok", callback: "leave" },
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "That sounds like " + sc.n("janice") + "! I better see if she's ok!",
            button: [
                { chatID: -1, text: "[Go save her!]", callback: "goinside" },
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "Hey! You're that waiter from Docia. What are you doing here!",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "!waiter",
            text: "hahaha. ",
            button: [
                { chatID: 9, text: "...", callback: "bg" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "What the fuck was that! Did he just laugh at me and walk away! Who does that. " +
                "Why is he here? Is she cheating on me! I'm going to find out right now! ",
            button: [
                { chatID: -1, text: "[Barge inside her home.]", callback: "goinside" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "I have a date with " + sc.n("janice") + " this weekend. I can come on either " +
                "Friday or Saturday. I'll come back then. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "I have a big date today, but I'm a bit early. ",
            button: [
                { chatID: -1, text: "Wait here till my date. ", callback: "waitTask3" },
                { chatID: -1, text: "I'll come back", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "I'm way totally late for our date! I'll have to come back next Friday or " +
                "Saturday before " + nav.convertTime(21, 0) + ". ",
            button: [
                { chatID: -1, text: "I'll have to come back another day. ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Our big date is today! I need to find some money. I'm going to need at least " +
                "$100 to take her out. ",
            button: [
                { chatID: -1, text: "I'll have get more money. ", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "janice",
            text: "Stop stalking me! We broke up! ",
            button: [
                { chatID: -1, text: "sigh.. ok ", callback: "reset" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "It's too late to knock on her door. She's probably asleep. ",
            button: [
                { chatID: -1, text: "Try to pick her lock", callback: "picklock" },
                { chatID: -1, text: "Leave her alone. ", callback: "reset" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "Damn! Didn't get in ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "Sweet! I'm just going to sneak into her house late at night.",
            button: [
                { chatID: -1, text: "...", callback: "picked" },
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Should I knock? I do still have her key, and she did say she loved me. " +
                "Maybe I should just go in. See if that takes us to the next step. Yeah. Plus " +
                "she says she's a virgin, but I get the feeling she's cheeting on me. I should " +
                "just go in and see what she does all day! ",
            button: [
                { chatID: 19, text: "Just go in", callback: "bitch_0" },
            ]
        },
        {
            chatID: 19,
            speaker: "janice",
            text: "Ok viewers! This pussy is for you! Keep donating to turn my vibrator " +
                "up soooo high I'll be spraying pussy juice all over my living room!",
            button: [
                { chatID: 20, text: sc.n("janice") + "!!!!", callback: "bitch_1" },
            ]
        },
        {
            chatID: 20,
            speaker: "janice",
            text: "AAAAAAkkkk! " + sc.n("me") + "!!! W-w-w-w",
            button: [
                { chatID: 21, text: "Who are you talking to!", callback: "bitch_2" },
            ]
        },
        {
            chatID: 21,
            speaker: "janice",
            text: "Shut up! Let me close this computer program thingy..... crap!",
            button: [
                { chatID: 22, text: "Close what! What are you up to! Let me see!", callback: "bitch_3" },
            ]
        },
        {
            chatID: 22,
            speaker: "janice",
            text: "Dammit! You ruined my stream! I only made $20 and I had this guy " +
                "that might have given me 20 more! This could have really saved me! " +
                "I could have been able to pay my bills and do a shopping trip at Sappho's Makeup!",
            button: [
                { chatID: 23, text: "Stream? What are you talking about. Were you talking to some guy?", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "janice",
            text: "Hehehe. Is that what you're thinking? No I made an account on Whore " +
                "Chat. On my trip I ran into my friend Piper and she told me about this " +
                "website Whore Chat and how she uses it to pay her bills. She made like " +
                "over $500 last week! She made me an account and we bought this cute little " +
                "vibrator they can use. I don't know these men. I just use them to get money. " +
                "I don't even know who they are. ",
            button: [
                { chatID: 24, text: "Really?", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "janice",
            text: "Yeah. This could really solve all my money problems! Hey!! I just " +
                "thought of something! I was looking at the other girls and the ones " +
                "that had sex on camera made WAYYYYY more money. Like it's not even " +
                "close! You could help me so much if you would go on camera with me! ",
            button: [
                { chatID: 25, text: "me?", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "janice",
            text: "Yes silly. We would make such a cute couple I'll bet we could even " +
                "make more than $500! What do you say? Are you in? ",
            button: [
                { chatID: 26, text: "Let me think about it, but maybe. ", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "janice",
            text: "You're the best! Let me throw my clothes back on so my pussy isn't hanging " +
                "out everywhere. ",
            button: [
                { chatID: -1, text: "...", callback: "completeBitch3" },
            ]
        },
        {
            chatID: 27,
            speaker: "janice",
            text: "That's so disrespectful! Go put on clothes before coming here! ",
            button: [
                { chatID: -1, text: "oh. Of course. ", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};