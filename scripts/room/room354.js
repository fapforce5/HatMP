//Room name
var room354 = {};
room354.main = function () {
    char.settime(12, 0);
    if (sc.getMission("raven", "bitch").inProgress) {
        var ravenStep = sc.taskGetStep("raven", "bitch");
        switch (ravenStep) {
            case 0:
            case 1:
                nav.bg("354_raven/grabBoobs.jpg");
                chat(0, 354);
                break;
            case 2:
                if (sc.getMissionTask("landlord", "spermbank", 2).inProgress) {
                    //
                }
                else {
                    nav.bg("354_raven/e0.jpg");
                    chat(6, 354);
                }
                break;
            case 3:
                if (sc.getMissionTask("landlord", "spermbank", 2).inProgress) {
                    //
                }
                else {
                    switch (g.rand(0, 3)) {
                        case 0: nav.bg("354_raven/grabBoobs.jpg"); break;
                        case 1: nav.bg("354_raven/grabAss.jpg"); break;
                        case 2: nav.bg("354_raven/nude.jpg"); break;
                    }
                    chat(13, 354);
                }
                break;
            case 4:
                nav.bg("354_raven/e2.jpg");
                chat(7, 354);
                break;
            case 5:
                chat(10, 354);
                break;
            case 6:
                nav.bg("354_raven/bg_big.jpg");
                zcl.displayMain(0, 700, .16, "clothes", false);
                var clothese = cl.c.shirt === null && cl.c.pants === null && cl.c.pj === null && cl.c.dress === null && cl.c.swimsuit === null;
                var appear = cl.appearance();
                if (clothese || appear > 2) {
                    chat(12, 354);
                }
                else {
                    chat(13, 354);
                }
                break;
        }
    }
    else {
        char.room(0);
    }
};

room354.btnclick = function (name) {
    switch (name) {
        case "icon_donate":
            
            break;
        default:
            break;
    }
};

room354.chatcatch = function (callback) {
    switch (callback) {
        case "e0":
        case "e1":
        case "e2":
        case "shock":
            nav.bg("354_raven/" + callback + ".jpg");
            break;
        case "event_1_end":
            sc.completeMissionTask("raven", "bitch", 1);
            sc.modLevel("landlord", 15, 5);
            char.addtime(10);
            char.room(0);
            break;
        case "event_2_end":
            sc.completeMissionTask("raven", "bitch", 2);
            char.addtime(10);
            char.room(0);
            break;
        case "event_3_end":
            sc.modLevel("landlord", 15, 5);
            char.addtime(10);
            char.room(0);
            break;
        default:
            break;
    }
};

room354.chat = function (chatID) {
    if (chatID === 1000) {
        if (cl.isLewd()) {
            if (cl.c.chastity === null)
                return {
                    chatID: 1000,
                    speaker: "raven",
                    text: "I see you went full nude. You do have a nice ass, but I'm not sure what your end " +
                        "game is here. ",
                    button: [
                        { chatID: 16, text: "uhhh...", callback: "" }
                    ]
                };
            return {
                chatID: 1000,
                speaker: "raven",
                text: "Nice chastity cage. I see you know your purpose.  ",
                button: [
                    { chatID: 16, text: "uhhh...", callback: "" }
                ]
            };
        }
        else {
            if (cl.getEntry("panties", cl.c.panties).sex === "f")
                return {
                    chatID: 1000,
                    speaker: "raven",
                    text: "Nice panties. I like a cock wrapped up in panties. ",
                    button: [
                        { chatID: 16, text: "uhhh...", callback: "" }
                    ]
                };
            return {
                chatID: 1000,
                speaker: "raven",
                text: "Ugh. Boy underwear. I want to see you in panties. ",
                button: [
                    { chatID: 16, text: "uhhh...", callback: "" }
                ]
            };
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "landlord",
                text: "Akkk! Don't touch me there! ",
                button: [
                    { chatID: 1, text: "[Rush in and save her!]", callback: "shock" }
                ]
            },
            {
                chatID: 1,
                speaker: "me",
                text: "Get your hands off my " + sc.n("landlord") + "! How dare you! ",
                button: [
                    { chatID: 2, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "raven",
                text: "Whatever. I was just leaving anyways. Till next time. ",
                button: [
                    { chatID: 3, text: "*hrumph*", callback: "e0" }
                ]
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "I'm sorry you had to see that. " + sc.n("raven") + " was completely out of line. ",
                button: [
                    { chatID: 4, text: "That's assult! I'm going to call the police on him.", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "landlord",
                text: "Oh, don't call the police. It's ok. That's just how he plays. I don't need " +
                    "those idiot cops bumbling around my business. ",
                button: [
                    { chatID: 5, text: "..but", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "landlord",
                text: "I appreciate your concern, but let me handle " + sc.n("raven") + ". There's stuff " +
                    "going on that you don't need to worry about. I've got to get home to " + sc.n("bigguy") +
                    ". See you there. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "event_1_end" }
                ]
            },
            {
                chatID: 6,
                speaker: "landlord",
                text: "I'm sorry I'm running late. Feel free to hang out and have a snack. Just lock up " +
                    "when you're done. ",
                button: [
                    { chatID: 8, text: "Ok. Thanks. ", callback: "e1" }
                ]
            },
            {
                chatID: 7,
                speaker: "landlord",
                text: "notused ",
                button: [
                    { chatID: 7, text: "Ok. Thanks. ", callback: "e1" }
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "Oh wow. It's nice to just sit down sometime and think. Plus a burrito. I never " +
                    "realized just how perfect the burrito is. You have all the great stuff inside an edible " +
                    "wrapper. Burritos are amazing. ",
                button: [
                    { chatID: 9, text: "...", callback: "e2" }
                ]
            },
            {
                chatID: 9,
                speaker: "raven",
                text: "Oh. You're in here. You see your " + sc.n("landlord") + " anywhere? ",
                button: [
                    { chatID: 10, text: "Fuck off. Stop molesting my " + sc.n("landlord") + ". ", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "raven",
                text: "Listen kid. I can tell you love your " + sc.n("landlord") + ", but I should tell you that " +
                    "there's something going on here and I'm just trying to get to the bottom of it and keep her " +
                    "out of trouble. If you want to stay out of trouble you'll you'll stay out of my way. ",
                button: [
                    { chatID: 11, text: "Eat a bag of dicks asshole.  ", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "raven",
                text: "I am the bag of dicks boy! I'm done for the day. You better stay clear of me or you'll " +
                    "be eating my dick. Nice to meet you. Good bye.",
                button: [
                    { chatID: 12, text: "Fuck you. ", callback: "e1" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "I hate that guy. " + sc.n("landlord") + " wanted me to leave it alone, but I have " +
                    "to keep checking on her each Saturday to keep him away from her. I wouldn't want her to " +
                    "get hurt. ",
                button: [
                    { chatID: -1, text: "[Pack up and leave. ]", callback: "event_2_end" }
                ]
            },
            {
                chatID: 13,
                speaker: "me",
                text: "Hey. I said keep your hands off my " + sc.n("landlord") + "! ",
                button: [
                    { chatID: 14, text: "...", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "raven",
                text: "Again! Dammit kid. Fuck this, I'm out of here. ",
                button: [
                    { chatID: 15, text: "...", callback: "e0" }
                ]
            },
            {
                chatID: 15,
                speaker: "landlord",
                text: "Oh thank you again. I'll see you at home sweetie.  ",
                button: [
                    { chatID: -1, text: "...", callback: "event_3_end" }
                ]
            },
        ];
        
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};