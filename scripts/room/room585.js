//Room name
var room585 = {};

room585.main = function () {
    let bgchar = [
        { i: "q0", x: 161, y: 0, w: 269, h: 621 },
        { i: "q1", x: 1414, y: 317, w: 506, h: 752 },
        { i: "q2", x: 1346, y: 0, w: 265, h: 704 },
        { i: "q3", x: 599, y: 143, w: 296, h: 501 },
    ];
    let loop = g.rand(0, bgchar.length);
    for (let i = 0; i < loop; i++) {
        let t = g.rand(0, bgchar.length);
        nav.button({
            "type": "img",
            "name": "bg",
            "left": bgchar[t].x,
            "top": bgchar[t].y,
            "width": bgchar[t].w,
            "height": bgchar[t].h,
            "image": "585_livingRoom/" + bgchar[t].i + ".webp"
        }, 585);
        bgchar.splice(t, 1);
    }
    

    if (sc.getMissionTask("eva", "sissy", 7).notStarted) {
        daily.set("eva585");
        sc.completeMissionTask("eva", "sissy", 7);
        nav.bg("585_livingRoom/eva_7.jpg");
        chat(0, 585);
        return;
    }

    switch (g.rand(0, 4)) {
        case 0: //eva
            if (!daily.get("eva585")) {
                if (sc.getMissionTask("eva", "sissy", 8).notStarted) {
                    nav.bg("585_livingRoom/eva0.webp");
                    zcl.displayMain(-300, 600, .3, "clothes", true)
                    chat(20, 585);
                    return;
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "eva",
                        "left": 576,
                        "top": 0,
                        "width": 819,
                        "height": 1080,
                        "image": "585_livingRoom/eva.webp"
                    }, 585);
                }
            }
            break;
        case 1: //liam
            if (!daily.get("liam")) {
                if (sc.getMission("liam", "date").success) {
                    nav.button({
                        "type": "btn",
                        "name": "liam_together",
                        "left": 333,
                        "top": 47,
                        "width": 374,
                        "height": 994,
                        "image": "585_livingRoom/liam_together.webp"
                    }, 585);
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "liam",
                        "left": 1032,
                        "top": 59,
                        "width": 408,
                        "height": 696,
                        "image": "585_livingRoom/liam_0.webp"
                    }, 585);
                    if (!daily.get("belle")) {
                        nav.button({
                            "type": "btn",
                            "name": "belle",
                            "left": 264,
                            "top": 30,
                            "width": 392,
                            "height": 1021,
                            "image": "585_livingRoom/belle_0.webp"
                        }, 585);
                    }
                }
            }
            break;
        case 2: //utah
            if (!daily.get("utahFuck")) {
                nav.button({
                    "type": "btn",
                    "name": "utah",
                    "left": 1081,
                    "top": 0,
                    "width": 839,
                    "height": 1080,
                    "image": "585_livingRoom/utah.png"
                }, 585);
            }
            break;
        case 3: //sporty
            if (sissy.get("test1").ach && !daily.get("sportyAndDoofus")) {
                nav.button({
                    "type": "btn",
                    "name": "sporty",
                    "left": 253,
                    "top": 0,
                    "width": 450,
                    "height": 857,
                    "image": "585_livingRoom/sporty.png"
                }, 585);
            }
            break;
    }
    nav.buildnav([586, 587, 588, 589, 0]);

};

room585.btnclick = function (name) {
    switch (name) {
        case "utah":
            if (qdress.st[24].ach) {
                if (levels.get("cheer").l > 1)
                    chat(6, 585);
                else
                    chat(5, 585)
            }
            else
                chat(14, 585);
            break;
        case "eva":
            chat(55, 585);
            break;
        case "sporty":
            nav.killbutton("sporty");
            nav.button({
                "type": "img",
                "name": "sporty",
                "left": 750,
                "top": 0,
                "width": 806,
                "height": 1080,
                "image": "585_livingRoom/sporty1.png"
            }, 585);
            chat(15, 585);
            break;
        case "eva7":
            nav.kill();
            nav.bg("585_livingRoom/eva8.webp");
            chat(36, 585);
            break;
        case "liam":
            if (sc.getMission("liam", "date").fail) {
                chat(59, 585);
                return;
            }
            switch (sc.taskGetStep("liam", "date")) {
                case -1:
                case 0:
                case 1:
                    sc.startMission("liam", "date");
                    sc.completeMissionTask("liam", "date", 0);
                    sc.show("liam");
                    chat(40, 585);
                    break;
                case 2:
                    sc.completeMissionTask("liam", "date", 2);
                    chat(51, 585);
                    break;
                default:
                    if (daily.get("belle"))
                        chat(56, 585);
                    else
                        chat(900, 585);
                    break;
            }
            break;
        case "belle":
            if (sc.getMission("liam", "date").fail) {
                chat(44, 585);
                return;
            }
            switch (sc.taskGetStep("liam", "date")) {
                case -1:
                case 0:
                    chat(44, 585);
                    break;
                case 1: chat(46, 585); break;
                case 2:
                case 3: chat(44, 585); break;
            }
            break;
        case "liam_together":
            chat(57, 585);
            break;
        default:
            break;
    }
};

room585.chatcatch = function (callback) {
    if (callback.startsWith("liamchoice")) {
        let lid = parseInt(callback.replace("liamchoice", ""));
        sc.completeMissionTask("liam", "date", lid);
        return;
    }
    switch (callback) {
        case "eva1":
        case "eva2":
        case "eva4":
        case "eva5":
        case "eva6":
        case "eva9":
        case "eva10":
            nav.bg("585_livingRoom/" + callback + ".webp");
            break;
        case "utah3":
        case "utah4":
        case "utah5":
            nav.killall();
            nav.bg("585_livingRoom/" + callback + ".jpg");
            break;
        case "reset30":
            char.addtime(30);
            char.room(585);
            break;
        case "utah2":
            nav.killbutton("utah");
            nav.button({
                "type": "img",
                "name": "utah",
                "left": 876,
                "top": 17,
                "width": 411,
                "height": 1063,
                "image": "585_livingRoom/utah2.png"
            }, 586);
            break;
        case "reset":
            char.room(585);
            break;
        case "utah6":
            daily.set("utahFuck");
            char.settime(22, 3);
            char.room(585);
            break;
        case "sporty_588":
            g.pass = "sporty_588";
            char.room(588);
            break;
        case "evaFail8":
            sc.completeMissionTask("eva", "sissy", 8, false);
            char.addtime(30);
            gv.set("map", 3);
            char.room(0);
            break;
        case "eva3":
            cl.c.bra = null;
            cl.c.shirt = cl.c.pj = cl.c.dress = cl.c.swimsuit = null;
            zcl.displayMain(-300, 600, .3, "clothes", true)
            nav.bg("585_livingRoom/eva3.webp");
            break;
        case "eva7":
            nav.kill();
            cl.nude();
            nav.bg("585_livingRoom/eva7.webp");
            nav.button({
                "type": "kiss",
                "name": "eva7",
                "left": 954,
                "top": 663,
                "width": 111,
                "height": 111,
                "image": "585_livingRoom/eva7_a.webp"
            }, 585);
            break;
        case "eva11":
            gv.set("map", 3);
            sc.completeMissionTask("eva", "sissy", 8, true);
            levels.mod("xdress", 50);
            char.room(0);
            break;
        case "add30":
            char.addtime(20);
            break;
        case "liam1End":
            sc.completeMissionTask("liam", "date", 1);
            daily.set("belle");
            char.addtime(20);
            nav.killbutton("belle");
            break;
        case "liam2End":
            char.addtime(20);
            sc.completeMissionTask("liam", "date", 2);
            char.room(585);
            break;
        case "liamBad":
            sc.completeMission("liam", "date", false);
            break;
        default:
            break;
    }
};

room585.chat = function (chatID) {
    if (chatID === 900) {
        let animal = "seal";
        if (sc.getMissionTask("liam", "date", 6).complete)
            animal = "elephant";
        else if (sc.getMissionTask("liam", "date", 7).complete)
            animal = "turtle";

        if (inv.has(animal))
            return {
                chatID: 900,
                speaker: "liam",
                text: "So did you bring the " + animal + "?",
                button: [
                    { chatID: 901, text: "Sure did. Here. Go get her!", callback: "" },
                    { chatID: -1, text: "[Lie] Nope. Haven't got it yet. ", callback: "" },
                ]
            };
        return {
            chatID: 900,
            speaker: "liam",
            text: "So did you bring the " + animal + "?",
            button: [
                { chatID: -1, text: "Nope. Haven't been to the mall to get it yet. ", callback: "" },
            ]
        };
    }
    if (chatID === 901) {
        let animal1 = "seal";
        if (sc.getMissionTask("liam", "date", 6).complete)
            animal1 = "elephant";
        else if (sc.getMissionTask("liam", "date", 7).complete)
            animal1 = "turtle";
        inv.use(animal1);
        return {
            chatID: 901,
            speaker: "liam",
            text: "Sweet! Let me go see if I can talk to her!!",
            button: [
                { chatID: 902, text: "Sure [Wait and see how it goes]", callback: "" },
            ]
        };
    }
    if (chatID === 902) {
        nav.killbutton("belle");
        nav.killbutton("liam");
        nav.button({
            "type": "img",
            "name": "liam",
            "left": 353,
            "top": 81,
            "width": 406,
            "height": 999,
            "image": "585_livingRoom/liam_chat.png"
        }, 586);
        return {
            chatID: 902,
            speaker: "thinking",
            text: "Hmmm... I can't tell how it's going... Hope it's good...",
            button: [
                { chatID: 903, text: "[Wait a bit longer...]", callback: "" },
            ]
        };
    }
    if (chatID === 903) {
        nav.kill("liam");
        nav.button({
            "type": "img",
            "name": "liam",
            "left": 730,
            "top": 17,
            "width": 553,
            "height": 1063,
            "image": "585_livingRoom/liam_t.webp"
        }, 586);
        
        let txt903 = "";
        let jsuc = sc.getMissionTask("liam", "date", 4).complete;
        let asuc = sc.getMissionTask("liam", "date", 7).complete;
        if (jsuc || asuc) {
            daily.set("liam");
            sc.completeMission("liam", "date");
            inv.addMulti("emptyjar", 7);
            if (jsuc && asuc)
                txt903 = "You are my hero! I bow before your greatness! ";
            else if (jsuc)
                txt903 = "Her favorite animal is the Turtle, but don't worry, I saved it with some fish facts I knew. ";
            else
                txt903 = "She's a biology student!! Lucky you gave me that seal. Totally saved it! "
            txt903 += "We have a date tomorrow! Just coffee, but I'm so totally stoked! I don't have much, but here's some jars. It used to be a set of 8, but we totally broke one. "
            return {
                chatID: 903,
                speaker: "liam",
                text: txt903,
                button: [
                    { chatID: -1, text: "Sweet thanks! ", callback: "reset" }
                ]
            };
        }
        sc.completeMission("liam", "date", false);
        return {
            chatID: 903,
            speaker: "liam",
            text: "I totally looked like an ass! She's a marine biology student and her favorite " +
                "animal is the seal! I was so embarrassed. I don't think I'll ever talk to her again. ",
            button: [
                { chatID: -1, text: "Awww, dude, I'm so sorry. ", callback: "reset" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "!deb",
            text: "So did you bring me back my favorite butt plug?",
            button: [
                { chatID: 1, text: "It fell out when I was running away. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!deb",
            text: "*UGH* That was a gift from my ex! That's ok, I'll get my payback sissy. ",
            button: [
                { chatID: 2, text: "but it wasn't my fault ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "eva",
            text: "Hahaha yeah! Later though, I just got here! " + sc.n("me") + " this " +
                "is Liam and Doofus's house. They let us party here. Don't worry if " +
                "you spill a drink, I don't think these floors have been cleaned since " +
                "they got here. There's only one house rule, and that's if you hurl, " +
                "hurl outside or in the toilet. ",
            button: [
                { chatID: 3, text: "I can do that", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!latika",
            text: "I need a beer. Let's head to the kitchen. ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!deb",
            text: "Totally, let's go. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "utah",
            text: "You're cute, but I only fuck cheerleaders and models. ",
            button: [
                { chatID: -1, text: "rude", callback: "reset30" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Hi Utah! Looking good in that shirt. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "utah",
            text: "I know. Did you see my awesome game last weekend? ",
            button: [
                { chatID: 8, text: "Yeah! You were the greatest! ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "utah",
            text: "I really am the greatest. With how great we're doing I'm in " +
                "the running for best quarterback, maybe even of all time. Of " +
                "course I couldn't be the best without Darius here. Hehehe",
            button: [
                { chatID: 9, text: "So Darius do you want to get us a beer? ", callback: "utah2" },
                { chatID: 10, text: "Yeah Darius really looks super strong. I love those big arms. ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "utah",
            text: "Good call. I needed a beer. That's what I like about Darius, " +
                "always helping out. ",
            button: [
                { chatID: 10, text: "So have you thought about checking out the bedrooms? ", callback: "" },
                { chatID: -1, text: "Yeah, he is a good guy. ", callback: "reset30" },
            ]
        },
        {
            chatID: 10,
            speaker: "utah",
            text: "Huh? Everyone is out here. Why would I go into the bedroom? ",
            button: [
                { chatID: 11, text: "[Rub his dick over his pants.]", callback: "utah3" },
            ]
        },
        {
            chatID: 11,
            speaker: "utah",
            text: "I love being me. Let's go slut! ",
            button: [
                { chatID: 12, text: "[Follow him to the bedroom]", callback: "utah4" },
            ]
        },
        {
            chatID: 12,
            speaker: "utah",
            text: "Bring that ass over here, I'm going to drop some blue chip spunk into it! ",
            button: [
                { chatID: 13, text: "[Get fucked]", callback: "utah5" },
            ]
        },
        {
            chatID: 13,
            speaker: "stacy",
            text: "Get out you slut! No one touches that dick but me! ",
            button: [
                { chatID: -1, text: "*eep* [run away]", callback: "utah6" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "I really don't feel confident enough to hit on Utah",
            button: [
                { chatID: -1, text: "[Unlock Confidence in the sissy menu]", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "sporty",
            text: "Hey! Just chatting with my old friend Doofus here. He knew me " +
                "back before.. you know. ",
            button: [
                { chatID: 16, text: "Oh nice", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!doofus",
            text: "Totally. You're totally hot now! Your friend is totally hot too! " +
                "It's like you left high school and got hot and hot friends. Totally " +
                "crazy. So you you two ever do each other since you're both so hot? ",
            button: [
                { chatID: 17, text: "Oh hahaha", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "sporty",
            text: "She is hot, but I prefer a more manly man. Like you. But she " +
                "would be fun to play with. ",
            button: [
                { chatID: 18, text: "...", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!doofus",
            text: "I would love to see that! Love to see two chicks dyke out! ",
            button: [
                { chatID: 19, text: "I would be down to dyke out with you two. ", callback: "" },
                { chatID: -1, text: "Sounds fun, but I need another drink. ", callback: "reset30" },
            ]
        },
        {
            chatID: 19,
            speaker: "sporty",
            text: "Oh that's hot! Let's check out your bedroom! ",
            button: [
                { chatID: -1, text: "Yes, let's!", callback: "sporty_588" },
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "Oh is my little doggy wandering around? I bet you thought I invited you here " +
                "so you could make new friends? Nope! I called them all in here so you can prove " +
                "to everyone you're a dirty pervert. ",
            button: [
                { chatID: 21, text: "Huh? Not here. There's too many people around. ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "!latika",
            text: "Hahaha. Does the poor little slut think she has a choice? awwww",
            button: [
                { chatID: 22, text: "?", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "!deb",
            text: "This party needs something exciting, and you're it! Don't try to play like " +
                "you're some kind of prude. We already know you're a party favor! ",
            button: [
                { chatID: 23, text: "awww", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "Now doggy, show everyone that you're my doggy. Bark for us. ",
            button: [
                { chatID: 25, text: "...", callback: "eva1" },
            ]
        },
        {
            chatID: 24,
            speaker: "me",
            text: "No! I'm not your bitch! I'm a strong independent " + gender.pronoun("girl") + "! " +
                "You are the bitches! I'm never coming back! ",
            button: [
                { chatID: -1, text: "[Leave on your own accord]", callback: "evaFail8" },
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "Why now. I was happily moving between the groups and enjoying myself, and " +
                sc.n("eva") + " has to ruin that. If she does what I think she's going to do then " +
                "no one here will ever see me more than her party favor. *sigh*",
            button: [
                { chatID: 26, text: "[Lost your dignity and bark for her]", callback: "eva1" },
                { chatID: 24, text: "[Stand up for yourself]", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "I can't hear you! Bark louder doggy!",
            button: [
                { chatID: 27, text: "[Bark louder]", callback: "eva2" },
                { chatID: 24, text: "[Stand up for yourself]", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "eva",
            text: "hehehe! Good doggy! Now show everyone your tits! ",
            button: [
                { chatID: 28, text: "*sigh* [show them your tits]", callback: "eva3" },
                { chatID: 24, text: "[Stand up for yourself]", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "Well there goes my dignity. Now everyone will just know me as some " +
                "kind of slut becuase once again I'm making a fool of myself.  ",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "eva",
            text: "So what should we have her do next? ",
            button: [
                { chatID: 30, text: "...", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "!deb",
            text: "Well, she does owe me for losing my favorite butt plug, and I haven't had a " +
                "chance to get a new one. *pout* ",
            button: [
                { chatID: 31, text: "...", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "!latika",
            text: "Oh, I'm wearing my plug! Maybe she could fetch it?",
            button: [
                { chatID: 32, text: "What? Not again", callback: "eva4" },
            ]
        },
        {
            chatID: 32,
            speaker: "eva",
            text: "*hrumph* Slave doggies don't get to say no. I think we need we need to shut your " +
                "yapper. Hehehehe. We should stuff her mouth with with Latika's plug. Hahaha",
            button: [
                { chatID: 33, text: "...", callback: "eva5" },
            ]
        },
        {
            chatID: 33,
            speaker: "!deb",
            text: "Oh! She should be on all fours and get it out with her mouth. Doggies don't get " +
                "to use their hands! ",
            button: [
                { chatID: 34, text: "...", callback: "eva6" },
            ]
        },
        {
            chatID: 34,
            speaker: "eva",
            text: "You heard her. Pull out Latika's butt plug with your mouth doggy. And give everyone " +
                "a good show, do it naked. Hehehe. Show them what a dirty pervert you are! ",
            button: [
                { chatID: 35, text: "...", callback: "eva7" },
            ]
        },
        {
            chatID: 35,
            speaker: "!latika",
            text: "I've been wearing this butt plug all day for you, you dirty dirty pervert. ",
            button: [
                { chatID: -1, text: "arf", callback: "" },
                { chatID: 24, text: "[Stand up for yourself]", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "eva",
            text: "Oh my god! You really did it! I thought for sure you were going to walk out, " +
                "but there you are on your hand and knees with Latika's butt plug in your mouth! " +
                "And in front of everyone!!! HAHAHAHAHAHA",
            button: [
                { chatID: 37, text: "*mumble*", callback: "eva9" },
            ]
        },
        {
            chatID: 37,
            speaker: "thinking",
            text: "What? Do they hate that? They're all laughing at me. I just did what " +
                sc.n("eva") + " said to do. Why do they seem disgusted?",
            button: [
                { chatID: 38, text: "...", callback: "eva10" },
            ]
        },
        {
            chatID: 38,
            speaker: "!boy",
            text: "Hey freak! You need to leave! ",
            button: [
                { chatID: 39, text: "[Run out crying]", callback: "eva11" },
            ]
        },
        {
            chatID: 39,
            speaker: "thinking",
            text: "That sucked. That really sucked. I thought they would all love me for my " +
                "based quirky nature and free will. I've never been more embarrassed in my life! " +
                "Maybe I have gone too far into this whole sissy thing, or maybe it's just not the " +
                "right crowd for me. I don't know. ",
            button: [
                { chatID: -1, text: "[Wander the city to clear your head]", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "liam",
            text: "She's so pretty...",
            button: [
                { chatID: 41, text: "Huh? Who?", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "liam",
            text: "Belle. She always comes to my party, but ends up chatting with every guy but me. ",
            button: [
                { chatID: 42, text: "Have you tried talking to her. ", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "liam",
            text: "Once. I didn't know how to start, so I just walked away.  ",
            button: [
                { chatID: 43, text: "Oh. Do you know anything about her? ", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "liam",
            text: "I don't... Hey! You're a girl. Can you talk to her. Find out what she likes " +
                "for me? I would owe you so big time! ",
            button: [
                { chatID: -1, text: "Oh. I suppose so. I'll do some girl talk with her. ", callback: "add30" },
            ]
        },
        {
            chatID: 44,
            speaker: "me",
            text: "Hey. Cute dress!",
            button: [
                { chatID: 45, text: "...", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "!belle",
            text: "Thanks! You're really cute too! ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 46,
            speaker: "me",
            text: "Hey, I just had to come over. ",
            button: [
                { chatID: 48, text: "You're a real cutie! How do you do it?", callback: "" },
                { chatID: 47, text: "The dude on the couch wants to fuck you. ", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "!belle",
            text: "Oh. Gross. Please leave me alone. ",
            button: [
                { chatID: -1, text: "Hahaha. That was a joke.... But yeah. I'll go ", callback: "liamBad" },
            ]
        },
        {
            chatID: 48,
            speaker: "!belle",
            text: "Oh. You're a really sweetie! My friend I met in Social Studies helped me pick it " +
                "out. ",
            button: [
                { chatID: 49, text: "Oh. Are you in college? What are you studying?", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "!belle",
            text: "Marine Biology. I saw this video of turtles getting caught in trash and I knew I " +
                "just had to do something to save them. Turtles are really the coolest animals ever! ",
            button: [
                { chatID: 50, text: "They sure are!", callback: "" },
            ]
        },
        {
            chatID: 50,
            speaker: "!belle",
            text: "Well, it was nice talking to you, I have to get home before it gets too late. My " +
                "parents get angry if I'm out too late. ",
            button: [
                { chatID: -1, text: "It was good getting to know you too!", callback: "liam1End" },
            ]
        },
        {
            chatID: 51,
            speaker: "Liam",
            text: "Well? Did you talk to her? What did you find out? ",
            button: [
                { chatID: 52, text: "...", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "thinking",
            text: "Crap. Did I actually pay attention to what was said? " +
                "What did she say about herself?",
            button: [
                { chatID: 53, text: "She works as a waitress", callback: "liamchoice3" },
                { chatID: 53, text: "She's a marine biology student", callback: "liamchoice4" },
                { chatID: 53, text: "She likes milk", callback: "liamchoice5" }
            ]
        },
        {
            chatID: 53,
            speaker: "liam",
            text: "Oh. ok cool. I can start with that. Anything else you can help me with?",
            button: [
                { chatID: 54, text: "Her favorite animal is an elephant", callback: "liamchoice6" },
                { chatID: 54, text: "Her favorite animal is an turtle", callback: "liamchoice7" },
                { chatID: 54, text: "Her favorite animal is an seal", callback: "liamchoice8" }
            ]
        },
        {
            chatID: 54,
            speaker: "liam",
            text: "OH! The jewlery shop in the mall sells gifts! Can you go there and get me " +
                "a stuffed animal? That would be really cool! I would get it myself, but I'm totally " +
                "broke. ",
            button: [
                { chatID: -1, text: "No problem. I've gotcha!", callback: "liam2End" }
            ]
        },
        {
            chatID: 55,
            speaker: "eva",
            text: "I'm so sad I don't get to mess with you here. Oh well. See you at home pervert.",
            button: [
                { chatID: -1, text: "Yeah.", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "Liam",
            text: "Look likes Belle Left. I'll try talking to her next time. ",
            button: [
                { chatID: -1, text: "Yeah.", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "Liam",
            text: "This is the chick that totally game me to confidance to talk to you! ",
            button: [
                { chatID: 58, text: "...", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "!belle",
            text: "Awww thank you! I've been coming here for weeks hoping he'll get up and talk " +
                "to me. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "liam",
            text: "You ruined me. I'll be alone forever. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};