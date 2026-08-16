//Room name
var room50 = {};
room50.main = function () {
    var btnList;
    var navList = [0];
    var tifStep = sc.taskGetStep("tiffany", "friend");
    if (missy.getenvelope("treyvon").active) {
        nav.bg("50_lobby/t0_b.webp");
        zcl.displayMain(-2000, -200, .7, "clothes", true);
        nav.button({
            "type": "img",
            "name": "d",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "50_lobby/t0_f.webp"
        }, 50);
        chat(11, 50);
        return;
    }
    else if (missy.activecase().caseId === 11 && tifStep > 0 && tifStep < 4) {
        btnList = [
            {
                "type": "btn",
                "name": "doorman",
                "left": 826,
                "top": 15,
                "width": 774,
                "height": 1065,
                "image": "50_lobby/tif.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 50);
        });
        chat(2, 50);
    }
    else {
        btnList = [
            {
                "type": "btn",
                "name": "doorman",
                "left": 825,
                "top": 15,
                "width": 668,
                "height": 1065,
                "image": "50_lobby/doorman.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 50);
        });
        nav.buildnav(navList);
    }
};

room50.btnclick = function (name) {
    switch (name) {
        case "doorman":
           if (sc.getMission("treyvon", "doorman").inProgress && cl.appearance() > 0)
                chat(10, 50);
            else
                chat(0, 50);
            break;
        default:
            break;
    }
};

room50.chatcatch = function (callback) {
    switch (callback) {
        case "grab":
            nav.killall();
            nav.bg("50_lobby/grab.jpg");
            break;
        case "followtif":
            sc.show("treyvon");
            sc.startMission("treyvon", "doorman");
            sc.completeMissionTask("treyvon", "doorman", 0, true);
            char.room(51);
            break;
        case "gohome":
            char.room(51);
            break;
        case "t1":
            nav.killall();
            zcl.displayMain(-1000, 0, .5, "clothes", false);
            break;
        case "t2":
            nav.kill();
            cl.nude();
            nav.bg("50_lobby/t2.webp");
            zcl.embarrass(0, 400, 1, "back", true);
            break;
        case "t3":
            nav.bg("50_lobby/t3.webp");
            zcl.pucker(650, 850, .36, "back", true);
            break;
        case "t4":
            nav.bg("50_lobby/t4.webp");
            zcl.allfours(-150, 200, .9, "", true);
            nav.button({
                "type": "img",
                "name": "finger",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "50_lobby/t4_" + (cl.c.cock === 5 ? "pussy" : "anus") + ".webp"
            }, 50);
            if (cl.c.cock === 5)
                chat(21, 50);
            else
                chat(22, 50);
            break;
        case "t5":
            nav.kill();
            nav.bg("50_lobby/t5.webp");
            zcl.front(300, 600, .4, "0", true);
            break;
        case "t6":
            nav.bg("50_lobby/t6.webp");
            zcl.sissygasm(0, 400, .7, "0", false);
            break;
        case "t7":
            nav.kill();
            nav.bg("50_lobby/t7.webp");
            if (cl.c.cock === 5)
                levels.fuckedinpussy(true, "m", true, "treyvon");
            else
                levels.anal(4, true, "m", true, "treyvon");
            break;
        case "t8":
            if (missy.getenvelope("treyvon").hasKey)
                chat(29, 50);
            else
                chat(27, 50);
            missy.setenvelope("treyvon");
            break;
        case "tend":
            cl.undo();
            char.room(0);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room50.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "treyvon",
            text: "Hey, boy, you're not allowed here.",
            button: [
                { chatID: -1, text: "I know", callback: "" },
                { chatID: 1, text: "Can I rent an apartment?", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "treyvon",
            text: "No, we don't rent to boys like you.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "treyvon",
            text: "Hey " + sc.n("tiffany") + ", welcome home. Who's this cutie you have with you?",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "This is my new friend. She's a lot of fun! She's just visiting.",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "treyvon",
            text: "Ohhh, you're lookin' good, baby girl. With a butt like that you gotta be able to shake them hips — sexy.",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "Oh, she can totally shake it, can't you? You should feel those hips of hers!",
            button: [
                { chatID: 6, text: "Wha?", callback: "grab" }
            ]
        },
        {
            chatID: 6,
            speaker: "treyvon",
            text: "Oh yea! That a nice ass you got there. I bet you can take a cock really good. What did you say your name was?",
            button: [
                { chatID: 7, text: "Oh my, that's your hand on my butt.. ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "treyvon",
            text: "I know. You don't squeeze the fruit until you buy it hehe. So what's your name, girl?",
            button: [
                { chatID: 8, text: "It's... ahh... ummmm... " + gv.get("girlname") + "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "treyvon",
            text: gv.get("girlname") + ". That's a really pretty name for a really pretty girl. I'm " + sc.n("treyvon") + ". " +
            "I'll get you anything you need — just scream my name. *wink*",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "You two are really hitting it off. I guess I could give you two some alone time... Oh yeah, I forgot " + sc.n("candy") + " wanted " +
                "to see you. Sorry " + sc.n("treyvon") + ", but I have to get " + gv.get("girlname") + " home.",
            button: [
                { chatID: -1, text: "[Follow " + sc.n("tiffany") + " home]", callback: "followtif" }
            ]
        },
        {
            chatID: 10,
            speaker: "treyvon",
            text: "Hey sexy. It's getting boring down here, want to show me that booty of yours?",
            button: [
                { chatID: -1, text: "No, just going home", callback: "gohome" }
            ]
        },
        {
            chatID: 11,
            speaker: "treyvon",
            text: "I've heard about you. ",
            button: [
                { chatID: 12, text: "Oh my. I can feel your boner poking into my stomach. ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "treyvon",
            text: "That's not the only thing my boner's going to poke into. Turn around. Let me see what " +
                "you're working with. ",
            button: [
                { chatID: 13, text: "[Turn around and show him your butt]", callback: "t1" },
                { chatID: -1, text: "[Run away]", callback: "leave" },
            ]
        },
        {
            chatID: 13,
            speaker: "treyvon",
            text: "Damn " + gender.pronoun("girl") + "! Does that butt clap?",
            button: [
                { chatID: 14, text: "[Try to get the code]", callback: "" },
                { chatID: -1, text: "[Leave] Yes, but not for you. ", callback: "leave" },
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "It does more than clap. It turns coherent sentences into nothing but moans. Do you want to " +
                "take a ride big boy? I don't know if you can handle this butt. ",
            button: [
                { chatID: 15, text: "...", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "treyvon",
            text: "Baby " + gender.pronoun("girl") + " just the thought of that clapping ass " +
                "already got me throbbing. Come take the ride and I’ll make it bounce on this " +
                "thick dick till you can’t form sentences.",
            button: [
                { chatID: 16, text: "I'd love to, but I have to figure out a way to visit my friend at the C.U.M. compound first. ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "treyvon",
            text: "Oh. I may know a way in, but you'll have to convince me. ",
            button: [
                { chatID: 17, text: "And how could I convince you to help me? [Rub his penis with your hand]", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "treyvon",
            text: "Follow me to the mop closet. Let's see if you convince me. ",
            button: [
                { chatID: 18, text: "[Follow him]", callback: "t2" },
            ]
        },
        {
            chatID: 18,
            speaker: "treyvon",
            text: "Get over here bitch. Suck my hairy balls",
            button: [
                { chatID: 19, text: "[Suck his sweaty, musky, hairy balls]", callback: "t3" },
            ]
        },
        {
            chatID: 19,
            speaker: "treyvon",
            text: "Get over here. Suck my hairy balls.",
            button: [
                { chatID: 20, text: "[Suck his sweaty, musky, hairy balls]", callback: "t3" },
            ]
        },
        {
            chatID: 20,
            speaker: "treyvon",
            text: "You are a hungry pleaser aren't you. Let me finger that. Open you up so you can take " +
                "this big dick. ",
            button: [
                { chatID: -1, text: "o-o-ok. ", callback: "t4" },
            ]
        },
        {
            chatID: 21,
            speaker: "treyvon",
            text: "Damn girl! That's a tight pussy! I can barely fit two fingers there. Gunna be a real " +
                "shame when I rip it open with my cock! hahaha! ",
            button: [
                { chatID: 23, text: "*moan*", callback: "t5" },
            ]
        },
        {
            chatID: 22,
            speaker: "treyvon",
            text: "Damn " + gender.pronoun("girl") + "! That's a fine ass you got! Can't wait to bury my " +
                "nut deep up there! ",
            button: [
                { chatID: 23, text: "*moan*", callback: "t5" },
            ]
        },
        {
            chatID: 23,
            speaker: "treyvon",
            text: "Oh fuck that's good! I'm gunna beat that hole till you're gape! ",
            button: [
                { chatID: 24, text: "*panting* *moaning*", callback: "t6" },
            ]
        },
        {
            chatID: 24,
            speaker: "me",
            text: "oh god oh god oh god. Yours is the greatest dick I've ever had! So good! I love " +
                "your dick!!!!!",
            button: [
                { chatID: 25, text: "*slutty orgasm sounds*", callback: "t7" },
            ]
        },
        {
            chatID: 25,
            speaker: "treyvon",
            text: "*panting* damn that was good. I almost want to fuck you again!",
            button: [
                { chatID: 26, text: "...almost?", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "treyvon",
            text: sc.n("treyvon") + " only fucks a bitch once. Need to spread my seed far and wide, ya know. " +
                "Start fucking the same bitch too many times and you get hooked. Why do you think I work here. " +
                "New opportunities keep flowing to this dick. ",
            button: [
                { chatID: -1, text: "oh. So about that code. Did I convince you? ", callback: "t8" },
            ]
        },
        {
            chatID: 27,
            speaker: "treyvon",
            text: "You totally did. To get in just walk through the front door. They pretty much let everyone in. ",
            button: [
                { chatID: 28, text: "The front door! No, what's the code to the back door! ", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "treyvon",
            text: "Shit, I don't know. Who do you think I am? I just always walk in the front door. ",
            button: [
                { chatID: -1, text: "Dammit! [Pick your clothes off the dirty floor and leave!]", callback: "tend" },
            ]
        },
        {
            chatID: 29,
            speaker: "treyvon",
            text: "Shit. I did say I would give you the code didn't I? it's 1-2-3-4-5. Just put that in " +
                "the gate in the back. But you didn't get that from me, 'k?",
            button: [
                { chatID: -1, text: "Won't say a word. Thanks champ! [Pick your clothes off the dirty floor and leave!]", callback: "tend" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(50, room50);
