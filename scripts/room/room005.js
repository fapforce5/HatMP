//Eva Massage
var room5 = {};
room5.main = function () {
    g.internal = { level: 0, shirt: null, nude: false };
    if (daily.get("evamassage")) {
        chat(0, 5);
    }
    else if (sc.getMission("eva", "massage").fail) {
        chat(32, 5);
    }
    else {
        daily.set("evamassage");
        switch (sc.taskGetStep("eva", "massage")) {
            case -1:
            case 0:
                g.internal.level = 0;
                chat(2, 5);
                break;
            case 1:
                g.internal.level = 1;
                chat(8, 5);
                break;
            case 2:
                g.internal.level = 2;
                chat(18, 5);
                break;
            case 3:
                g.internal.level = 3;
                if (gender.get("eva", "chastity") || gender.get("eva", "cock") > 2)
                    chat(32, 5);
                else
                    chat(33, 5);
                break;
            default:
                sc.select("massage0", "5_evaMassage/icon_massage.png", 0);
                sc.select("massage1", "5_evaMassage/icon_suck.png", 1);
                sc.select("massage2", "5_evaMassage/icon_footjob.png", 2);
                sc.selectCancel("cancel", 3);
                break;
        }
    }
};

room5.btnclick = function (name) {
    switch (name) {
        case "charismaLose":
            g.internal.level = 0;
            chat(12, 5);
            break;
        case "charisma1win":
            chat(13, 5);
            break;
        case "massage0":
            g.internal.level = 0;
            chat(4, 5);
            break;
        case "massage1":
            g.internal.level = 1;
            chat(11, 5);
            break;
        case "massage2":
            g.internal.level = 3;
            chat(43, 5);
            break;
        case "cancel":
            char.room(13);
            break;
        default:
            break;
    }
};

room5.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(13);
            break;
        case "laugh":
            nav.bg("5_evaMassage/laugh.jpg", "5_evaMassage/laugh_night.jpg");
            break;
        case "feet":
            sc.modLevel("eva", 52, 7);
            nav.bg("5_evaMassage/bg.jpg", "5_evaMassage/bg_night.jpg");
            break;
        case "boobs":
            sc.modLevel("lola", 52, 7);
            nav.bg("5_evaMassage/bg.jpg", "5_evaMassage/bg_night.jpg");
            break;
        case "massage0":
            nav.killall();
            nav.bg("5_evaMassage/eva_massage_1.gif");
            g.roomTimeout = setTimeout(function () {
                if (g.internal.level === 0)
                    chat(6, 5);
                else
                    chat(9, 5);
            }, 2000);
            break;
        case "massage1check":
            if (sc.getLevel("eva") > 1) {
                chat(13, 5);
            }
            else {
                charisma.init(g.internal.level + 7, "charisma1win", "charismaLose", 5);
            }
            break;
        case "massage1":
            nav.killall();
            g.internal.level = 1;
            nav.bg("5_evaMassage/eva_massage_3.gif");
            g.roomTimeout = setTimeout(function () {
                chat(15, 5);
            }, 2000);
            break;
        case "shirtoff":
            g.internal.shirt = cl.c.shirt;
            cl.c.shirt = null;
            cl.display();
            break;
        case "massage2":
            nav.killall();
            g.internal.nude = true;
            cl.nude();
            zcl.displayMain(-600, 300, .35, "", true);
            if (gender.canUseCock()) {
                gender.setChanges("lola", "cock");
                gender.setChanges("eva", "cock");
                nav.bg("5_evaMassage/show_big.jpg", "5_evaMassage/show_big_night.jpg");
                chat(21, 5);
            }
            else {
                nav.bg("5_evaMassage/show_small.jpg", "5_evaMassage/show_small_night.jpg");
                if (cl.c.chastity !== null) {
                    gender.setChanges("lola", "chastity");
                    gender.setChanges("eva", "chastity");
                    sc.modSecret("lola", 25);
                    sc.modSecret("eva", 25);
                    chat(26, 5);
                }
                else {
                    gender.setChanges("lola", "cock");
                    gender.setChanges("eva", "cock");
                    chat(29, 5);
                }
            }
            break;
        case "massge3":
            nav.killall();
            nav.bg("5_evaMassage/013_footjob1.jpg");
            break;
        case "massge3_1":
            nav.bg("5_evaMassage/013_footjob2.jpg");
            break;
        case "massge3_2":
            nav.bg("5_evaMassage/footjob3.gif");
            g.roomTimeout = setTimeout(function () {
                chat(39, 5);
            }, 2000);
            break;
        case "massge3_3":
            cl.doCum(false);
            sex.mod("foot", false, "f", 1);
            nav.bg("5_evaMassage/013_footjob4.jpg");
            break;
        case "nude":
            cl.nude();
            g.internal.nude = true;
            if (gender.canUseCock()) {
                chat(35, 5);
            }
            else {
                nav.bg("5_evaMassage/show_small.jpg", "5_evaMassage/show_small_night.jpg");
                if (cl.c.chastity !== null) {
                    gender.setChanges("lola", "chastity");
                    gender.setChanges("eva", "chastity");
                    sc.modSecret("lola", 50);
                    sc.modSecret("eva", 50);
                    chat(26, 5);
                }
                else {
                    gender.setChanges("lola", "cock");
                    gender.setChanges("eva", "cock");
                    chat(29, 5);
                }
            }
            break;
        case "massageFinish":
            gv.mod("arousal", 53);
            sc.completeMissionTask("eva", "massage", g.internal.level, true);
            if (g.internal.level > 0) {
                if (sc.getMission("eva", "games").notStarted) {
                    sc.startMission("eva", "games");
                    sc.completeMissionTask("eva", "games", 0);
                }
            }
            if (g.internal.level > 2) {
                sc.completeMission("eva", "massage", true);
            }
            if (g.internal.shirt !== null) {
                cl.c.shirt = g.internal.shirt;
                cl.display();
            }
            else if (g.internal.nude)
                cl.undo();
            sc.modLevel("eva", 52, 7);
            char.addtime(46);
            if (g.hourBetween(7, 21))
                char.room(13);
            else
                char.room(11);
            break;
        case "massageFinish0":
            g.internal.level = 0;
            room5.chatcatch("massageFinish");
            break;
        case "massageFinishFail":
            sc.completeMission("eva", "massage", false);
            room5.chatcatch("massageFinish");
            break;
        case "check50":
            if (gv.get("money") > 49) {
                gv.mod("money", -50);
                chat(34, 5);
            }
            else
                chat(46, 5);
            break;
        case "leavefail":
            sc.completeMission("eva", "massage", false);
            char.room(13);
            break;
        default:
            break;
    }
};

room5.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "You want me to get at them feet again? ",
            button: [
                { chatID: 1, text: "?", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "eva",
            text: "No. I'm kinda grossed out by you enough for today. ",
            button: [
                { chatID: -1, text: "oh. ok", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "eva",
            text: "So. Uh... I have to admit I am totally into feet. Can I take you up on that foot massage?  ",
            button: [
                { chatID: 3, text: "?", callback: "laugh" }
            ]
        },
        {
            chatID: 3,
            speaker: "eva",
            text: "I knew it! I told " + sc.n("lola") + " that you were a foot guy! She said you were obviously a breast guy! " +
                "So which is it? Do you prefer feet or boobs? ",
            button: [
                { chatID: 4, text: "...foot?", callback: "feet" },
                { chatID: 5, text: "...breast?", callback: "boobs" },
            ]
        },
        {
            chatID: 4,
            speaker: "eva",
            text: "Yes! I knew it! Rub my feet loser pervert! ",
            button: [
                { chatID: -1, text: "Yes!", callback: "massage0" },
            ]
        },
        {
            chatID: 5,
            speaker: "eva",
            text: "I don't believe you. Rub my feet and tell me you're not a foot guy. ",
            button: [
                { chatID: -1, text: "ok!", callback: "massage0" },
            ]
        },
        {
            chatID: 6,
            speaker: "eva",
            text: "You know. That does feel really really good. Like really good. I don't think I've had a guy massage my " +
                "feet before. I mean.. wow. It's better than sex!",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "Wait... do you have a boner? ",
            button: [
                { chatID: 16, text: "Whaaa? Pssst,no!", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "eva",
            text: "Back for more my foot fetish guy? ",
            button: [
                { chatID: -1, text: "yeah, I am. ", callback: "massage0" },
            ]
        },
        {
            chatID: 9,
            speaker: "eva",
            text: "Oh yeah, that's good! ",
            button: [
                { chatID: 10, text: "Do you want a better massage? ", callback: "" },
                { chatID: -1, text: "All done. Thanks", callback: "massageFinish0" },
            ]
        },
        {
            chatID: 10,
            speaker: "eva",
            text: "Better?",
            button: [
                { chatID: 11, text: "Let me massage your feet with my mouth. ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "eva",
            text: "huh?",
            button: [
                { chatID: -1, text: "I want to suck your toes. ", callback: "massage1check" },
            ]
        },
        {
            chatID: 12,
            speaker: "eva",
            text: "Ewww no! Get away from weird-o!",
            button: [
                { chatID: -1, text: "Just asking...", callback: "massageFinish" },
            ]
        },
        {
            chatID: 13,
            speaker: "eva",
            text: "Maybe.. If you're going to get weird, take your shirt off. ",
            button: [
                { chatID: 14, text: "sure", callback: "shirtoff" },
            ]
        },
        {
            chatID: 14,
            speaker: "eva",
            text: "Hmmm. ok. Let's see what you can do. ",
            button: [
                { chatID: -1, text: "...", callback: "massage1" },
            ]
        },
        {
            chatID: 15,
            speaker: "eva",
            text: "Hahaha. That feels so funny. You're like the doggy I've always wanted but could never have. Ok doggy, stop licking " +
                "my feet. They're getting slobbery and gross. ",
            button: [
                { chatID: -1, text: "ok", callback: "massageFinish" },
            ]
        },
        {
            chatID: 16,
            speaker: "eva",
            text: "Yes you do! I can feel it! Were you peeking up my skirt? Pervert!   ",
            button: [
                { chatID: 17, text: "I wasn't peeking! I didn't make you wear a short skirt. ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "eva",
            text: "What ever you pervert! You're like a dog, always trying to hump something! ",
            button: [
                { chatID: -1, text: "Stop showing and I'll stop looking. ", callback: "massageFinish" },
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: "I'm bored with the feet thing. Show us your penis. ",
            button: [
                { chatID: 19, text: "huh? ", callback: "" },
                { chatID: -1, text: "I'm not going to do that. ", callback: "leave" },
            ]
        },
        {
            chatID: 19,
            speaker: "eva",
            text: "I want to see it. " + sc.n("lola") + " wants to see it too. She just won't admit it. C'mon show it to us. ",
            button: [
                { chatID: 20, text: "Show me your vagina", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "No. I'm not going to touch it, just show it to us. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "massage2" },
                { chatID: -1, text: "I'm not going to do that. ", callback: "leave" },
            ]
        },
        {
            chatID: 21,
            speaker: "eva",
            text: "Oh wow. Good for you! ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "Ooooo. yeah... mmmmm.. ok... wow....",
            button: [
                { chatID: 23, text: "So is it everything you hoped it would be? ", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "I like it. It's a nice looking dick.",
            button: [
                { chatID: 24, text: "...", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "Yeah. nice. ",
            button: [
                { chatID: 25, text: "...", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "eva",
            text: "Ok. Put that away. The way it's looking at me is making me nervous. ",
            button: [
                { chatID: -1, text: "Sure", callback: "massageFinish" },
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "What's that on your dick? ",
            button: [
                { chatID: 27, text: "Oh.. yeah", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "lola",
            text: "Is that a cast? Did you break your penis? ",
            button: [
                { chatID: 28, text: "Yeah! I broke my penis. Nearly healed. I don't like to talk about it. ", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "lola",
            text: "Awwww that's too bad. I'm sorry to hear. I hope it heals well. ",
            button: [
                { chatID: -1, text: "Thanks. ", callback: "massageFinishFail" },
            ]
        },
        {
            chatID: 29,
            speaker: "eva",
            text: "Hahaha! It's so small! I bet you're a virgin with a dick that small! ",
            button: [
                { chatID: 30, text: " ", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "It is small, but there's more to a man than just his penis. You just need to find a girl that likes you for you. ",
            button: [
                { chatID: 31, text: "Yeah?", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "eva",
            text: "No girls going to want that! I guess you have to find someone that's into tiny peepees! ",
            button: [
                { chatID: -1, text: "...yeah", callback: "massageFinishFail" },
            ]
        },
        {
            chatID: 32,
            speaker: "eva",
            text: "I'm not feeling up to it. Sorry about your penis.",
            button: [
                { chatID: -1, text: "...yeah", callback: "leavefail" },
            ]
        },
        {
            chatID: 33,
            speaker: "eva",
            text: "Soooo. There's something I've been thinking about trying and I need a test subject. ",
            button: [
                { chatID: 34, text: "Trying? ", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "eva",
            text: "Yes. Take your clothes. off ",
            button: [
                { chatID: -1, text: "Sure! ", callback: "nude" },
                { chatID: -1, text: "Nope. I'm going to keep them on ", callback: "leave" },
            ]
        },
        {
            chatID: 35,
            speaker: "eva",
            text: "Nice! Now lay down on your back.",
            button: [
                { chatID: 36, text: "What are you going to do? ", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "eva",
            text: "Don't worry about it. Just lay down. ",
            button: [
                { chatID: 37, text: "ok ", callback: "massge3" },
            ]
        },
        {
            chatID: 37,
            speaker: "eva",
            text: "Do you like how my foot feels on your dick? ",
            button: [
                { chatID: 38, text: "Oh yeah! ", callback: "massge3_1" },
            ]
        },
        {
            chatID: 38,
            speaker: "eva",
            text: "Now don't do anything while I try this... ",
            button: [
                { chatID: -1, text: "ok..", callback: "massge3_2" },
            ]
        },
        {
            chatID: 39,
            speaker: "me",
            text: "Oh fuck... I think I'm gunna.....",
            button: [
                { chatID: 40, text: "...", callback: "massge3_3" },
            ]
        },
        {
            chatID: 40,
            speaker: "me",
            text: "...cum!",
            button: [
                { chatID: 41, text: "...", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "eva",
            text: "Oh gross! It got all over my feet! Gross gross gross you nasty pervert! Couldn't you shoot that somewhere else?  ",
            button: [
                { chatID: 42, text: "...no", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "eva",
            text: sc.n("lola") + " can you get us some tissues so we can clean up this mess. ",
            button: [
                { chatID: -1, text: "Yeah", callback: "massageFinish" },
            ]
        },
        {
            chatID: 43,
            speaker: "me",
            text: "So... uh... Can you jack me off with your feet again? ",
            button: [
                { chatID: 44, text: "...", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "eva",
            text: "Ewww. gross no! I told you I just wanted to try it. ",
            button: [
                { chatID: 45, text: "Please", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "eva",
            text: "I'll tell you what. Give me $50 and I will. ",
            button: [
                { chatID: -1, text: "Sure", callback: "check50" },
                { chatID: -1, text: "Naw", callback: "leave" },
            ]
        },
        {
            chatID: 46,
            speaker: "me",
            text: "Oh. I don't have $50. Maybe next time. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};