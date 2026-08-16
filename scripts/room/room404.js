//Room name
var room404 = {};
room404.main = function () {
    if (cl.isLewd()) {
        chat(3, 404);
    }
    var btnList = [
        {
            "type": "btn",
            "name": "spanky",
            "left": 962,
            "top": 80,
            "width": 568,
            "height": 909,
            "image": "404_spankys/spanky.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 404);
    });
    nav.buildnav(navList);
    if (sc.taskGetStep("envy", "gf") === 0) {
        chat(4, 404);
    }
};

room404.btnclick = function (name) {
    switch (name) {
        case "spanky":
            if (sc.getMission("spanky", "shop").notStarted)
                chat(0, 404);
            else if (missy.getenvelope("spanky").active) {
                chat(10, 404);
            }
            else {
                g.pass = "general";
                char.room(401);
            }
            break;
        default:
            break;
    }
};

room404.chatcatch = function (callback) {
    switch (callback) {
        case "purchase":
            sc.show("spanky");
            sc.startMission("spanky", "shop");
            sc.completeMissionTask("spanky", "shop", 0);
            g.pass = "general";
            char.room(401);
            break;
        case "envy100":
            sc.completeMissionTask("envy", "gf", 0);
            sc.completeMission("spanky", "hypno", false);
            sc.completeMissionTask("spanky", "hypno", 2);
            char.addtime(60);
            char.room(0);
            break;
        case "env0":
            if (missy.getenvelope("spanky").hasKey) {
                if (sc.getMission("envy", "gf").startedOrComplete) {

                }
                else {
                    chat(13, 404);
                    missy.setenvelope("spanky");
                }
            }
            else {
                chat(11, 404);
                missy.setenvelope("spanky");
            }
            break;
        case "money500":
            if (gv.get("money") > 499) {
                gv.mod("money", -500);
                missy.setenvelope("spanky");
                chat(17, 404);
            }
            else
                chat(18, 404);
            break;
        default:
            break;
    }
};

room404.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "spanky",
            text: "**cough** **cough** What the fuck you want. ",
            button: [
                { chatID: 1, text: "Buy some shit dumbass", callback: "" },
                { chatID: 2, text: "I would like to purchase some of your wares", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "spanky",
            text: "Oh yea",
            button: [
                { chatID: -1, text: "[Buy some shit]", callback: "purchase" }
            ]
        },
        {
            chatID: 2,
            speaker: "spanky",
            text: "huh. we ain't got wares dumb fuck. Piss off",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "spanky",
            text: "That's what I'm talking about! You make a sexy slut!",
            button: [
                { chatID: -1, text: "Thank you!", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Hey man, you've really got to help me out! I'm in a total bind! I told " + sc.n("envy") + " about " +
                "those tapes of yours and she's complaining she can't stop masturbating. How do I undo it? She's totally " +
                "pissed. ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "spanky",
            text: "Holy crap. You told her! You are the dumbest dude ever! I can't believe you would go and do something " +
                "so dumb and ruin my chances! It was all perfect, I, like, had you showing that slut the videos so she " +
                "would turn all slut and stuff, then I could stop by and fuck her however I wanted. Then you told her! " +
                "You ruined my life dude! I was going to spend the rest of my life with her, all fucking her when and " +
                "how I wanted. ",
            button: [
                { chatID: 6, text: "...dude, not cool. ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "spanky",
            text: "Don't tell me that's not cool. You showed her the tape so you could fuck her. Shit we could " +
                "both fuck her, but it's ruined. These tapes are hypno dude. It's not like a pill that only lasts " +
                "for a day. That's the beauty of hypno, it's forever. I could be fucking her till we're both old " +
                "and gross, but not anymore! ",
            button: [
                { chatID: 7, text: "So there isn't a way to reverse it? ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "spanky",
            text: "Fuck no idiot. How many tapes did you show her? ",
            button: [
                { chatID: 8, text: "Just the first one. ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "spanky",
            text: "Just the batin' one? Fuck. Well she's just always going to want to flick her bean. That's who she " +
                "is now. You could try to get her one of those remote controlled vibrators so she can cum when she's " +
                "all horned up and shit I guess. Maybe I'll stop by and ask if she wants me to eat her pussy... You " +
                "didn't tell her where you got it from did you. ",
            button: [
                { chatID: 9, text: "...oh well maybe I told her it was from you...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "spanky",
            text: "Great! Just great! Now I'll never be able to fuck that tight pussy slut! I'm never going to " +
                "work with you again! Also all my prices are triple from now on for you! No more deals for rats! " +
                "Get out of my store! ",
            button: [
                { chatID: -1, text: "Oh crap", callback: "envy100" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Hey " + sc.n("spanky") + " my ol' buddy. You wouldn't know how to get in the back " +
                "door of the C.U.M. compound would you? ",
            button: [
                { chatID: -1, text: "...", callback: "env0" }
            ]
        },
        {
            chatID: 11,
            speaker: "spanky",
            text: "Naw man, I don't. But speaking of back doors, one time I was fuckin’ this dude straight up in his back door and holy shit it was unreal, like he was just so fuckin’ happy to take it I couldn’t believe it. The second I slid in he started pushin’ back on me hard, moanin’ and carryin’ on like a total bitch in heat, tellin’ me over and over how good it felt gettin’ stretched out by my dick. I was just rammin’ him deep as I could go, no mercy, and he never once told me to slow down or ease up, just kept beggin’ for more, harder, deeper, like this was the best ass-fuckin’ he ever got in his life.",
            button: [
                { chatID: 12, text: "Really", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "spanky",
            text: "Yeah man. He’d grab the sheets and shove himself back onto me every time I pulled out, like he couldn’t stand even a second without me buried in him, and the whole time he’s moanin’ about how full he felt and how he wanted me to just wreck that hole. I musta been goin’ at him for a good twenty minutes straight and he was still happy as hell about it, never once acted like it was too much, just pure fuckin’ enthusiasm the whole way through.",
            button: [
                { chatID: -1, text: "Cool. Thanks for the info. ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "spanky",
            text: "Anything for a bro. The code's 1-2-3-4-5. But speaking of back doors, one time I was fuckin’ this dude straight up in his back door and holy shit it was unreal, like he was just so fuckin’ happy to take it I couldn’t believe it. The second I slid in he started pushin’ back on me hard, moanin’ and carryin’ on like a total bitch in heat, tellin’ me over and over how good it felt gettin’ stretched out by my dick. I was just rammin’ him deep as I could go, no mercy, and he never once told me to slow down or ease up, just kept beggin’ for more, harder, deeper, like this was the best ass-fuckin’ he ever got in his life.",
            button: [
                { chatID: 12, text: "Really", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "spanky",
            text: "You know what. I do have it and I'm not giving it to you! You ruined my chances with " +
                sc.n("envy") + " when you told her about the hypno. No way am I gunna give you the code! ",
            button: [
                { chatID: 15, text: "How about a wet sloppy blow job? ", callback: "" },
                { chatID: 16, text: "How about I let you pick a hole and fuck it? ", callback: "" },
                { chatID: -1, text: "How about $500", callback: "money500" },
                { chatID: -1, text: "Damn. I'll be back later to get that code. ", callback: "" }

            ]
        },
        {
            chatID: 15,
            speaker: "spanky",
            text: "No way! If you didn't ruin it I would be getting wet sloppy blowjobs everyday from " +
                sc.n("envy") + "! So no, not going to work!",
            button: [
                { chatID: 15, text: "How about I let you pick a hole and fuck it? ", callback: "" },
                { chatID: -1, text: "How about $500", callback: "money500" },
                { chatID: -1, text: "Damn. I'll be back later to get that code. ", callback: "" }

            ]
        },
        {
            chatID: 16,
            speaker: "spanky",
            text: "No way! If you didn't ruin it I would be nuts deep inside " +
                sc.n("envy") + " every night! So no, not going to work!",
            button: [
                { chatID: 15, text: "How about a wet sloppy blow job? ", callback: "" },
                { chatID: -1, text: "How about $500", callback: "money500" },
                { chatID: -1, text: "Damn. I'll be back later to get that code. ", callback: "" }

            ]
        },
        {
            chatID: 17,
            speaker: "spanky",
            text: "Yeah. I can always use money. Sure I'll take $500. The code's 1-2-3-4-5. If you weren't a " +
                "dick I would have just given it to you. ",
            button: [
                { chatID: -1, text: "Thanks. ", callback: "" }

            ]
        },
        {
            chatID: 18,
            speaker: "spanky",
            text: "Yeah. I can always use money. Sure I'll take $500. ",
            button: [
                { chatID: 19, text: "I don't have the money yet", callback: "" }

            ]
        },
        {
            chatID: 19,
            speaker: "spanky",
            text: "When you get the money I'll give you the code. ",
            button: [
                { chatID: -1, text: "I'll come back with the $500 to get the code. ", callback: "" }

            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(404, room404);
