//Room name
var room354 = {};
room354.main = function () {
    char.settime(12, 0);
    if (sc.getMission("raven", "bitch").inProgress) {
        var ravenStep = sc.taskGetStep("raven", "bitch");
        switch (ravenStep) {
            case 0:
            case 1:
                nav.bg("354_raven/e0.jpg");
                chat(0, 354);
                break;
            case 2:
                nav.bg("354_raven/e2.jpg");
                chat(7, 354);
                break;
            case 3:
                chat(10, 354);
                break;
            case 4:
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
        case "e1":
        case "e2":
            nav.bg("354_raven/" + callback + ".jpg");
            break;
        case "event_1_end":
            sc.completeMissionTask("raven", "bitch", 1);
            char.addtime(10);
            char.room(0);
            break;
        case "event_2_end":
            sc.completeMissionTask("raven", "bitch", 2);
            char.addtime(10);
            char.room(0);
            break;
        case "event_3_end":
            sc.completeMissionTask("raven", "bitch", 3);
            g.pass = 354;
            char.room(8);
            break;
        case "e_4_0":
            nav.button({
                "type": "img",
                "name": "raven",
                "left": 1228,
                "top": 0,
                "width": 692,
                "height": 1080,
                "image": "354_raven/e_4_0.png"
            }, 354);
            break;
        case "e_4_1":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "raven",
                "left": 558,
                "top": 0,
                "width": 462,
                "height": 1080,
                "image": "354_raven/e_4_1.png"
            }, 354);
            zcl.displayMain(0, 700, .16, "clothes", false);
            break;
        case "e_4_2":
            nav.killbutton("raven");
            break;
        case "event_4_end":
            levels.mod("xdress", 30, 999);
            levels.mod("pi", 20, 999);
            sc.completeMissionTask("raven", "bitch", 4);
            char.addtime(20);
            g.pass = 0;
            char.room(8);
            break;
        case "badEnd":
            sc.completeMission("raven", "bitch", false);
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
                text: "I've got to get home to " + sc.n("bigguy") + ". Feel free to hang out, make yourself a " +
                    "snack. Lock up when you're done. Bye bye sweetie. ",
                button: [
                    { chatID: 1, text: "See you later. [Make yourself a snack]", callback: "e1" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "Oh wow. It's nice to just sit down sometime and think. Plus have a burrito. I never " +
                    "realized just how perfect the burrito is. You have all the great stuff inside an edible " +
                    "wrapper. Burritos are amazing. ",
                button: [
                    { chatID: 2, text: "...", callback: "e2" }
                ]
            },
            {
                chatID: 2,
                speaker: "raven",
                text: "Are you hanging out to spy on me?",
                button: [
                    { chatID: 3, text: "huh? What? You're that asshole that's trying to blackmail my " + sc.n("landlord") + "! ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "raven",
                text: "Blackmail? What are you talking about. I'm just the inspector! ",
                button: [
                    { chatID: 4, text: "Don't lie! I heard everything! I aught to kick your ass! ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "raven",
                text: "Listen kid. I can tell you love your " + sc.n("landlord") + ", but I should tell you that " +
                    "there's something going on here and I'm just trying to get to the bottom of it and keep her " +
                    "out of trouble. If you want to stay out of trouble you'll you'll stay out of my way. ",
                button: [
                    { chatID: 5, text: "Eat a bag of dicks asshole.  ", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "raven",
                text: "I am the bag of dicks boy! I'm done for the day. You better stay clear of me or you'll " +
                    "be eating my dick. Nice to meet you. Good bye.",
                button: [
                    { chatID: 6, text: "Fuck you. ", callback: "e1" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "He seems so convinced that " + sc.n("landlord") + " is stealing sperm. She's a great lady " +
                    "and would never do anything like that. It's her business. Why would she steal from herself? " +
                    "That guy's just and asshole. ",
                button: [
                    { chatID: -1, text: "[Pack up and leave. ]", callback: "event_1_end" }
                ]
            },
            {
                chatID: 7,
                speaker: "raven",
                text: "Well well. If it isn't the mean angry " + gender.pronoun("boy") + " eating a burrito. It's quite impressive how " +
                    "wide you can open your mouth to take that entire thing in. I'll bet you could eat it down " +
                    "in one bit. ",
                button: [
                    { chatID: 8, text: "I'm just trying to enjoy my lunch. ", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "raven",
                text: "You know I think I almost have enough to close this place down. I'm going to keep looking " +
                    "around. Later.",
                button: [
                    { chatID: 9, text: "*grrrrr*", callback: "e1" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "I need to come up with a way to distract him next week so he can't continue looking around. " +
                    "I think he's lying, but I really don't want my " + sc.n("landlord") + " to get in trouble. I'm sure " +
                    "I'll come up with something. ",
                button: [
                    { chatID: -1, text: "[Pack up and leave. ]", callback: "event_2_end" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "I know " + sc.n("raven") + "'s going to pop his head in here anytime now while he looks " +
                    "for some way to blackmail my " + sc.n("landlord") + ". I've got to distract him somehow. " +
                    "He was looking at my body in a weird way. Maybe I could be the blackmail so save " + sc.n("landlord") +
                    ". Hmmm. I've got to act fast. No telling what he has or how far he's gone! ",
                button: [
                    { chatID: 11, text: "...", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "<span class='hl-blue'>You're going to get one chance to take the blackmail from your " + sc.n("landlord") + " " +
                    "and put it on yourself. If you come out in your normal clothes this event will end and your " +
                    "landlord will be blackmailed. If you come out in something slutty enough you'll be the focus of the blackmail. " +
                    "You can as much, or as little as you want. The choice is yours. </span>",
                button: [
                    { chatID: -1, text: "[Change clothes, or not]", callback: "event_3_end" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "That should do it. I'm so going to save my " + sc.n("landlord") + " from getting blackmailed! ",
                button: [
                    { chatID: 15, text: "[Wait for him]", callback: "e_4_0" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "I don't think this is distracting enough. Maybe I should go bolder. ",
                button: [
                    { chatID: -1, text: "[Try again. ]", callback: "event_3_end" },
                    { chatID: 14, text: "I'm not goint to get involved. ", callback: "e_4_0" }
                ]
            },
            {
                chatID: 14,
                speaker: "raven",
                text: "Hey kid. I'm leaving. You don't have to worry about seeing me again. I have " +
                    "everything I need. Take it easy. ",
                button: [
                    { chatID: -1, text: "Oh ok. ", callback: "badEnd" }
                ]
            },
            {
                chatID: 15,
                speaker: "raven",
                text: "Oh shit. I don't know what I walked in on, but I'm glad I did. Stand still. Let me look " +
                    "at you. ",
                button: [
                    { chatID: 1000, text: "Oh ok. ", callback: "e_4_1" }
                ]
            },
            {
                chatID: 16,
                speaker: "raven",
                text: "I see we're going to have a lot of fun, but right now I have to file this report. " +
                    "I'll see you next week. ",
                button: [
                    { chatID: 17, text: "Oh ok...bye ", callback: "e_4_2" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "Oh wow! Did I really just do that! My heart is beating a 1000 times a minute! I hope " +
                    "this helps my " + sc.n("landlord") + ". I better change and get out of here! ",
                button: [
                    { chatID: -1, text: "...", callback: "event_4_end" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};