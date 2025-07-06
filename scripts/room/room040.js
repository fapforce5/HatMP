//Room name
var room40 = {};
room40.main = function () {
    daily.set("bigguyGarage")
    g.internal = cl.hasoutfit("public");
    if (g.internal === null) {
        nav.bg("40_garage/bg_all.jpg");
        if (sc.getMissionTask("bigguy", "rent", 1).notStarted) {
            sc.completeMissionTask("bigguy", "rent", 1);
            chat(0, 40);
        }
        else {
            chat(12, 40);
        }
    }
    else {
        nav.bg("10_mainchar/10_bedroom.png");
        nav.button({
            "type": "btn",
            "name": "wardrobe",
            "left": 1684,
            "top": 230,
            "width": 236,
            "height": 602,
            "title": "Wardrobe",
            "image": "10_mainchar/10_wardrobe.png"
        }, 40);
        chat(1000, 775);
    }
};

room40.btnclick = function (name) {
    switch (name) {
        case "wardrobe":
            g.pass = 40;
            char.room(8);
            break;
        case "rat":
            nav.killbutton("rat");
            chat(5, 40);
            break;
        case "clean":
            nav.killall();
            nav.bg("40_garage/cleanend.jpg");
            gv.mod("pastRent", -75);
            chat(999, 40);
            break;
        case "chat":
            nav.killall();
            nav.bg("40_garage/tom.jpg");
            if (future.get("lolaboy") > -1) {
                chat(16, 40);
            }
            else {
                switch (sc.taskGetStep("tom", "chat")) {
                    case -1:
                    case 0:
                        sc.startMission("tom", "chat");
                        sc.show("tom");
                        sc.completeMissionTask("tom", "chat", 0);
                        chat(8, 40);
                        break;
                    case 1:
                        sc.completeMissionTask("tom", "chat", 0);
                        chat(13, 40);
                        break;
                }
            }
            break;
        default:
            break;
    }
};

room40.chatcatch = function (callback) {
    switch (callback) {
        case "rt1":
        case "rat1":
            nav.killall();
            nav.bg("40_garage/" + callback + ".jpg");
            break;
        case "rattrap":
            nav.killall();
            nav.bg("40_garage/ratbg.jpg");
            nav.button({
                "type": "btn",
                "name": "rat",
                "left": 970,
                "top": 736,
                "width": 385,
                "height": 149,
                "title": "Rat trap",
                "image": "40_garage/rat.png"
            }, 40);
            break;
        case "chatOrClean":
            nav.bg("40_garage/chatOrClean.jpg");
            char.settime(12, 17);
            sc.select("chat", "40_garage/icon_chat.png", 0);
            sc.select("clean", "40_garage/icon_clean.png", 1);
            break;
        case "cleanOnly":
            nav.bg("40_garage/chatOrClean.jpg");
            char.settime(12, 17);
            sc.select("clean", "40_garage/icon_clean.png", 1);
            break;
        case "leave":
            gv.set("workMonday", false);
            char.settime(15, 12);
            gv.set("map", 3);
            char.room(0);
            break;
        case "endlolaboyTom":
            daily.set("lola");
            future.kill("lolaboy");
            sc.completeMissionTask("lola", "sissy", 5);
            sc.completeMission("lola", "sissy");
            sc.startMission("lola", "tom");
            sc.completeMissionTask("lola", "tom", 0);
            room40.chatcatch("cleanOnly");
            break;
        case "endlolaboyChad":
            sc.completeMissionTask("lola", "sissy", 5, false);
            sc.completeMission("lola", "tom", false);
            room40.chatcatch("cleanOnly");
            break;
        default:
            break;
    }
};

room40.chat = function (chatID) {
    if (chatID === 1000) {
        return {
            chatID: 1000,
            speaker: "thinking",
            text: "Before I work I need to get dressed. <span class='hl'>I'm missing my " + g.internal + ".</span>",
            button: []
        };
    }
    else if (chatID === 999) {
        let pastRent = gv.get("pastRent");
        if (pastRent > 0) {
            return {
                chatID: 1000,
                speaker: "bigguy",
                text: "I'm proud of you. A man takes care of his bills, and you're " +
                    "on your way. You still owe me $" + pastRent + ". I'll see you Saturday to see if you can " +
                    "be a man and pay your bills proper. ",
                button: [
                    { chatID: -1, text: "ok", callback: "leave" }
                ]
            };
        }
        else {
            return {
                chatID: 1000,
                speaker: "bigguy",
                text: "I'm proud of you. A man takes care of his bills, and you've " +
                    "taken care of yours. I'll see you Saturday to see if you can " +
                    "start paying your bills like a man. ",
                button: [
                    { chatID: -1, text: "ok", callback: "leave" }
                ]
            };
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "bigguy",
                text: "So this is my shop. Tom here is my right hand man. He's been " +
                    "working on cars for a few years now so he knows what he's doing. " +
                    "The problem is we're both so busy with a back log of cars that I " +
                    "need someone to do the bitch work. Since you know shit about cars " +
                    "you'll do the bitch work. ",
                button: [
                    { chatID: 1, text: "oh", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "bigguy",
                text: "A man's gotta start at the bottom and work their way up. " +
                    "You should have seen Tom here clean the traps on his first day, " +
                    "He dropped the cage and that damn rat ran up his leg! Watching " +
                    "him hop around almost made me piss my damn pants! ",
                button: [
                    { chatID: 2, text: "rat trap? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "bigguy",
                text: "Yeah. Little fuckers keep chewing on the wires, fucks the cars up. " +
                    "After lunch you'll clean this place up. The oil makes it slippery " +
                    "than hot shit on an hockey rink. I need you to clean it up for us " +
                    "se we can focus on getting work done. Got it. ",
                button: [
                    { chatID: 3, text: "I guess", callback: "rt1" }
                ]
            },
            {
                chatID: 3,
                speaker: "bigguy",
                text: "Around the edges are the rat traps. Normally I just empty the cage " +
                    "into a bucket and smash it with my boot, but you can kill them however " +
                    "you want. I've got to finish a car up by noon. I'll let you get to it. ",
                button: [
                    { chatID: 4, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "I'm not going to put you in a bucket and smash you to death. Let me " +
                    "set you free. ",
                button: [
                    { chatID: -1, text: "...", callback: "rattrap" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "Now to set you free. ",
                button: [
                    { chatID: 6, text: "...", callback: "rat1" }
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "There you go little guy. Be free. Now time to clean I guess. ",
                button: [
                    { chatID: -1, text: "...", callback: "chatOrClean" }
                ]
            },
            {
                chatID: 7,
                speaker: "bigguy",
                text: "You did allright. I'm going to know ",
                button: [
                    { chatID: -1, text: "...", callback: "chatOrClean" }
                ]
            },
            {
                chatID: 8,
                speaker: "me",
                text: "So, you work for " + sc.n("bigguy") + "?",
                button: [
                    { chatID: 9, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "tom",
                text: "Oh yeah. Just until I get closer to finishing my degree and " +
                    "can get on with an internship. Gotta pay them bills ya know!",
                button: [
                    { chatID: 10, text: "Oh yeah. So how's he to work with? ", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "tom",
                text: "Tough, but fair, ya know. He taught me a lot. His 'Don't be a " +
                    "pussy' speaches get a little long, but I know how to fix these " +
                    "cars backwards and forwards. Ya know, if'n he lets you, maybe " +
                    "I can show you a thing or two. ",
                button: [
                    { chatID: 11, text: "Cool. Thanks", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "tom",
                text: "I gotta get back to work, 'fore he gets angry. Tryin' to " +
                    "keep this job until I get a better one. ",
                button: [
                    { chatID: -1, text: "ok.", callback: "cleanOnly" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "Guess I'll start with the rat traps. ",
                button: [
                    { chatID: -1, text: "...", callback: "rattrap" }
                ]
            },
            {
                chatID: 13,
                speaker: "tom",
                text: "So I got to talking with " + sc.n("bigguy") + ". He's dating " +
                    "your " + sc.n("landlord") + "? ",
                button: [
                    { chatID: 14, text: "yeah", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "tom",
                text: "Wow, small world. So your " + g.makeSingular(sc.n("el")) + " is " +
                    sc.n("lola") + "? She's was in my biology class last year. Haven't " +
                    "seen her since. It is a big campus. ",
                button: [
                    { chatID: 15, text: "Oh yeah. She's my " + g.makeSingular(sc.n("el")) + ". ", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "tom",
                text: "Is she... aww never mind. I gotta get some work done. I'll have " +
                    "to chat later. ",
                button: [
                    { chatID: -1, text: "ok ", callback: "cleanOnly" }
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "Hmmmm. He's really nice, and I don't think he would even have sex with " + sc.n("eva") + " since " +
                    "she's way to wild for him. He might make a good boyfriend for " + sc.n("lola") + ". " +
                    "Way better than " + sc.n("chad") + ". But maybe " + sc.n("lola") + " needs a bad boy to " +
                    "snap her into reality. Hmmm. I wonder if I should try to set he up or let " + sc.n("lola") +
                    " date " + sc.n("chad") + ". ",
                button: [
                    { chatID: 17, text: "Try to set up " + sc.n("tom") + " with " + sc.n("lola") + ". ", callback: "" },
                    { chatID: 23, text: "Let " + sc.n("lola") + " date " + sc.n("chad") + ". ", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "me",
                text: "Hey " + sc.n("tom") + " what do you think of " + sc.n("lola") + "? ",
                button: [
                    { chatID: 18, text: "...", callback: "" }
                ]
            },
            {
                chatID: 18,
                speaker: "tom",
                text: "She's the best. Really my dream girl. I would give anything to hang out with " +
                    "her. ",
                button: [
                    { chatID: 19, text: "...", callback: "" }
                ]
            },
            {
                chatID: 19,
                speaker: "me",
                text: "So you'd be ok if I try to set you up on a date with her? ",
                button: [
                    { chatID: 20, text: "...", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "tom",
                text: "REALLY!!!!! Really? YES!! Please, please, please. She's so amazing! " +
                    "Please set me up! Pleeeaaasseeee!!!!",
                button: [
                    { chatID: 21, text: "...", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "me",
                text: "Hahah. Ok. I'll text " + sc.n("eva") + " now and have her set it up. Be " +
                    "good to her or " + sc.n("eva") + " will get one of her boyfriends to beat " +
                    "you up! ",
                button: [
                    { chatID: 22, text: "...", callback: "" }
                ]
            },
            {
                chatID: 22,
                speaker: "tom",
                text: "Oh wow! You're the best ever! I'll be the best boyfriend she's ever had! " +
                    "thank you thank you thank you!",
                button: [
                    { chatID: -1, text: "...", callback: "endlolaboyTom" }
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "Hehehe! I'm going to see how far " + sc.n("lola") + "goes with " + sc.n("chad") +
                    ". Way more entertaining than boring lame Tom. ",
                button: [
                    { chatID: -1, text: "...", callback: "endlolaboyChad" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};