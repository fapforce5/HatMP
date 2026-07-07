//Room name
var room150 = {};
room150.main = function () {
    if (daily.get("jonesCleanEnd")){
        nav.bg("150_jones/jeeves.jpg");
        chat(23, 150);
    }
    else if (daily.get("jonesCleanStart") && !daily.get("jonesCleanEnd")) {
        nav.bg("150_jones/bg.jpg");
        sc.select("exposedClean", "150_jones/icon_expose.png", 0);
        if (sc.getMissionTask("jones", "invite", 3).complete)
            sc.select("icon_wander", "150_jones/icon_wander.png", 1);
        nav.buildnav([152, 153, 154]);
    }
    else if (sc.getMission("jones", "fail").startedOrComplete) {
        nav.bg("150_jones/day.jpg", "150_jones/night.jpg");
        chat(7, 150);
    }
    else if (g.isNight()) {
        nav.bg("150_jones/night.jpg");
        chat(0, 150);
    }
    else {
        nav.bg("150_jones/jeeves.jpg");
        switch (sc.taskGetStep("jones", "invite")) {
            case 0:
            case 1:
                chat(1, 150);
                break;
            default:
                sc.select("expose", "150_jones/icon_expose.png", 0);
                break;
        }
    }
};

room150.btnclick = function (name) {
    switch (name) {
        case "expose":
            cl.nude();
            nav.kill();
            cl.c.dress = "maid";
            cl.display();
            nav.bg("150_jones/entrance.jpg");
            zcl.poseExpose(550, 800, .16, "", false);
            nav.wait("expose0");
            break;
        case "icon_wander":
            char.room(155);
            break;
        case "expose0":
            nav.killbutton("expose0");
            switch (sc.taskGetStep("jones", "invite")) {
                case 0: 
                case 1:
                    nav.button({
                        "type": "img",
                        "name": "bitch",
                        "left": 710,
                        "top": 371,
                        "width": 182,
                        "height": 641,
                        "image": "150_jones/bitch_back.png"
                    }, 150);
                    chat(10, 150);
                    break;
                default:
                    nav.button({
                        "type": "img",
                        "name": "bitch",
                        "left": 710,
                        "top": 371,
                        "width": 182,
                        "height": 641,
                        "image": "150_jones/bitch_back.png"
                    }, 150);
                    if (cl.stinky()) {
                        chat(28, 150);
                    }
                    else {
                        chat(22, 150);
                    }
                    break;
            }
            break;
        case "exposedClean":
            if (sc.taskGetStep("bitch", "bitch") === 0) {
                nav.killbutton("bitch");
                chat(29, 150);
            }
            else {
                nav.killall();
                nav.bg("150_jones/entrance.jpg");
                zcl.poseExpose(550, 800, .16, "", false);
                nav.wait("exposedCleanWait");
            }
            break;
        case "exposedCleanWait":
            nav.killbutton("exposedCleanWait");
            char.addtime(15);
            switch (g.rand(0, 4)) {
                case 0:
                    nav.button({
                        "type": "img",
                        "name": "x",
                        "left": 1083,
                        "top": 343,
                        "width": 144,
                        "height": 471,
                        "image": "150_jones/butler.png"
                    }, 150);
                    chat(900, 150);
                    break;
                case 1:
                    nav.button({
                        "type": "img",
                        "name": "x",
                        "left": 611,
                        "top": 391,
                        "width": 274,
                        "height": 630,
                        "image": "150_jones/g1.png"
                    }, 150);
                    chat(901, 150);
                    break;
                case 2:
                    nav.button({
                        "type": "img",
                        "name": "x",
                        "left": 1102,
                        "top": 389,
                        "width": 152,
                        "height": 488,
                        "image": "150_jones/man.png"
                    }, 150);
                    chat(902, 150);
                    break;
                default:
                    invoker.invokeCurrent("chatcatch", "exposedCleanWait");
                    break;
            }
            break;
        case "exposedCleanWait1":
            nav.killbutton("exposedCleanWait1");
            nav.killbutton("x");
            if (daily.get("jonesCleanRoom1") && daily.get("jonesCleanRoom2") && daily.get("jonesCleanRoom3")) {
                if (gv.get("jonesroom") === 154) {
                    nav.button({
                        "type": "img",
                        "name": "jonesCleanRoom1",
                        "left": 710,
                        "top": 371,
                        "width": 182,
                        "height": 641,
                        "image": "150_jones/bitch_back.png"
                    }, 150);
                    chat(24, 150);
                }
                else if (gv.get("jonestotal") > 3 && sc.getMission("bitch", "bitch").notStarted) {
                    sc.startMission("bitch", "bitch");
                    g.internal = 0;
                    nav.wait("wander");
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "jonesCleanRoom1",
                        "left": 710,
                        "top": 371,
                        "width": 182,
                        "height": 641,
                        "image": "150_jones/bitch_back.png"
                    }, 150);
                    chat(21, 150);
                }
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "jonesCleanRoom1",
                    "left": 710,
                    "top": 371,
                    "width": 182,
                    "height": 641,
                    "image": "150_jones/bitch_back.png"
                }, 150);
                chat(20, 150);
            }
            break;
        case "wander":
            if (g.internal < 4) {
                char.addtime(30);
            }
            else {
                nav.killbutton("wander");
                chat(27, 150);
            }
            g.internal++;
            break;
        case "spank":
            nav.bg("150_jones/spank1_" + gender.pronoun("f") + ".jpg");
            nav.kill();
            g.roomTimeout = setTimeout(function () {
                gv.mod("energy", -5);
                nav.bg("150_jones/spank2_" + gender.pronoun("f") + ".jpg");
                chat(800, 150);
            }, 800);
            break;
        default:
            break;
    }
};

room150.chatcatch = function (callback) {
    switch (callback) {
        case "bitch":
        case "bg":
        case "bitch_smile":
            nav.bg("150_jones/" + callback + ".jpg");
            break;
        case "endBad":
            sc.completeMission("jones", "invite", false);
            sc.startMission("jones", "fail");
            char.addtime(60);
            levels.mod("dom", 100);
            char.room(0);
            break;
        case "expose":
            sc.select("expose", "150_jones/icon_expose.png", 0);
            break;
        case "invite1":
            cl.add("maid");
            cl.add("bh");
            cl.add("f");
            cl.nude();
            cl.c.dress = "maid";
            cl.c.shoes = "bh";
            cl.c.socks = "f";
            cl.display();
            zcl.displayMain(380, 870, .06, "clothes", false);
            if (cl.c.chest < 3)
                chat(11, 150);
            else if (cl.c.chest > 4)
                chat(12, 150);
            else
                chat(13, 150);
            break;
        case "invite2":
            nav.kill();
            nav.bg("152_sittingRoom/bg_bitch.jpg");
            break;
        case "invite3":
            nav.kill();
            nav.bg("153_bathroom/bitch.jpg");
            break;
        case "invite4":
            nav.kill();
            nav.bg("154_diningRoom/bitch.jpg");
            break;
        case "start1":
            daily.set("jonesCleanStart");
            if (sc.taskGetStep("bitch", "bitch") === 1) {
                sc.completeMissionTask("bitch", "bitch", 1);
                chat(30, 150);
            }
            else {
                char.room(150);
            }
            break;
        case "start":
            sc.completeMissionTask("jones", "invite", 1);
            daily.set("jonesCleanStart");
            char.room(150);
            break;
        case "start1":
            sc.modLevel("jones", -15, 10);
            char.room(150);
            break;
        case "leave":
            char.room(0);
            break;
        case "exposedCleanWait":
            nav.wait("exposedCleanWait1");
            break;
        case "spank":
            g.internal = 0;
            nav.kill();
            nav.bg("150_jones/spank0_" + gender.pronoun("f") + ".jpg");
            nav.next("spank");
            break;
        case "spank1":
            g.internal++;
            if (g.internal < 10) {
                nav.bg("150_jones/spank1_" + gender.pronoun("f") + ".jpg");
                g.roomTimeout = setTimeout(function () {
                    gv.mod("energy", -5);
                    nav.bg("150_jones/spank2_" + gender.pronoun("f") + ".jpg");
                    chat(800, 150);
                }, 800);
            }
            else {
                nav.bg("150_jones/spank3.jpg");
                chat(26, 150);
            }
            break;
        case "wander":
            sc.completeMissionTask("jones", "invite", 3);
            char.room(150);
            break;
        case "end":
            daily.set("jonesCleanEnd");
            gv.mod("money", 50);
            sc.modLevel("jones", 40, 1);
            var jonesroom = gv.get("jonesroom");
            jonesroom++;
            if (jonesroom > 154)
                jonesroom = 152;
            gv.set("jonesroom", jonesroom);
            gv.mod("jonestotal", 1);
            char.room(0);
            break;
        case "reset":
            char.room(150);
            break;
        default:
            break;
    }
};

room150.chat = function (chatID) {
    if (chatID === 900) {
        let butlerTxt = [
            "Please tell me your bare ass isn't making marks on my floor. ",
            "There are other ways to live a life than kneeling naked in the entrance. Like you could be a garbage man, or scuba diver. But if you come after my job I'll put a boot up your ass! ",
            "If I slip on anything that leaks that come from your genitals, expect a boot up your ass. ",
            "You know " + sc.n("bitch") + " is really a pussy cat... 'cause she's afraid of loud noises! Just yell at her and she'll run away. .",
            "Woof! Who farted in here... Oh. It was me wasn't it. Enjoy. ",
            "If I had your youth, I would be running in a field, or paying dirty dirty prostitute for sex. I can pay them now, but my penis stopped working years ago. ",
            "Once upon a time " + sc.n("bitch") + " was at the very place you are now. Some times she forgets this. "
        ];
        return {
            chatID: 0,
            speaker: "!butler",
            text: butlerTxt[g.rand(0, butlerTxt.length)],
            button: [
                { chatID: -1, text: "...", callback: "exposedCleanWait" },
            ]
        };
    }
    else if (chatID === 901) {
        let coupleTxt = [
            "*ugh* disgusting. Could you imagine how low one would be to just sit here naked? ",
            "Oh dear. " + sc.n("jones") + " left his whore in the entry way again. ",
            "Oh my. That's quite disgusting. ",
            "I do wish " + sc.n("jones") + " would leave his pets outside. ",
            "I don't know why someone subjects themselves to such a vile situation. "
        ];
        return {
            chatID: 0,
            speaker: "!girl",
            text: coupleTxt[g.rand(0, coupleTxt.length)],
            button: [
                { chatID: -1, text: "...", callback: "exposedCleanWait" },
            ]
        };
    }
    else if (chatID === 902) {
        let manTxt = [
            "Hehehe! I bet you smell great. I need me a sissy! ",
            "I'm so jealous of this man. Just a revolving door of sluts! ",
            "Nice!",
            "I need one of those. ",
        ];
        return {
            chatID: 0,
            speaker: "!boy",
            text: manTxt[g.rand(0, manTxt.length)],
            button: [
                { chatID: -1, text: "...", callback: "exposedCleanWait" },
            ]
        };
    }
    else if (chatID === 800) {
        let mwords = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];
        let hwords = [
            "You'll get ten bare bottoms spankings! Count them out bitch! ",//1
            "Naughty naughty " + gender.pronoun("boy") + "!",//2
            "Dripping your butt cum all over the floor!",//3
            "You deserve this!",//4
            "Worst maid ever!",//5
            "HRRNG!! That one stung!",//6
            "You won't be sitting down for a week when I'm done!",//7
            "Filthy filthy " + gender.pronoun("boy") + ". ",//8
            "I hope that one hurt!",//9
            "Last one! Now clean up this mess!",//10
        ];
        return {
            chatID: 0,
            speaker: "bitch",
            text: hwords[g.internal],
            button: [
                { chatID: -1, text: mwords[g.internal], callback: "spank1" },
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "!boy",
            text: sc.n("jones") + " doesn't accept guests after hours. You'll have to come back during the day.",
            button: [
                { chatID: -1, text: "Yes, sir", callback: "leave" },
            ]
        },
        {
            chatID: 1,
            speaker: "!butler",
            text: "Huh? I don't remember " + sc.n("jones") + " ordering a common trollop. Hehe. So what can I do for you?",
            button: [
                { chatID: 2, text: sc.n("jones") + " asked me to come by for work.", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!butler",
            text: "Oh! So it appears we did order a common trollop! And it's been delivered. How wonderful! I'll fetch " + sc.n("bitch") + " straight away. A most lovely woman who can assist you.",
            button: [
                { chatID: 3, text: "Oh, thanks.", callback: "bitch" }
            ]
        },
        {
            chatID: 3,
            speaker: "bitch",
            text: "Fuck! I thought I told you to stay the fuck away! Fuck, fuck, fuck! You really are an idiot, aren't you! Fuck. Wait right here while I talk to " + sc.n("jones") + " about what to do with you.",
            button: [
                { chatID: 4, text: "Ok, I'll wait", callback: "bg" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "She's such a bitch! Maybe that's why everyone calls her " + sc.n("bitch") + ". I hope I get to talk just with " + sc.n("jones") + " and she leaves us alone. I just don't get why she's always so mean to me.",
            button: [
                { chatID: 5, text: "...", callback: "bitch_smile" }
            ]
        },
        {
            chatID: 5,
            speaker: "bitch",
            text: sc.n("jones") + " wants you to be the house bitch. He put me in charge of training you on being the house bitch. Basically you'll clean, serve meals, attend to guests, and do whatever you're told. No questions asked. I'm going to be in charge of you, so you'll do whatever I say. Think you can do that?",
            button: [
                { chatID: 8, text: "I'm in.", callback: "bitch" },
                { chatID: 6, text: "Life is too short. I'm not going to deal with your craziness.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "bitch",
            text: "Perfect. I'll let " + sc.n("!butler") + " know you'll never be back.",
            button: [
                { chatID: -1, text: "Do that. You're a terrible person and I hope I never see you again.", callback: "endBad" }
            ]
        },
        {
            chatID: 7,
            speaker: "!boy",
            text: sc.n("jones") + " said you're not allowed on this property.",
            button: [
                { chatID: -1, text: "Yeah. That sounds right.", callback: "leave" }
            ]
        },
        {
            chatID: 8,
            speaker: "bitch",
            text: "Pfft. Fine! Strip off your clothes. You only wear what I tell you to wear. When you come here you will strip down, get on your knees with your hands behind your head and wait for me. It's called the exposed position. You'll assume that position when told. Sometimes you'll have to wait for hours if I'm busy. But once you enter that is what you do until " + sc.n("jones") + " or I tell you otherwise. Got it!",
            button: [
                { chatID: 9, text: "Yeah", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "bitch",
            text: "Well... I'm waiting!",
            button: [
                { chatID: -1, text: "Oh", callback: "expose" }
            ]
        },
        {
            chatID: 10,
            speaker: "bitch",
            text: "I guess that's fine. For now you'll just clean around the mansion since our last maid just quit. Let's get you into uniform and I'll show you to your duties.",
            button: [
                { chatID: 11, text: "[Change into your uniform]", callback: "invite1" }
            ]
        },
        {
            chatID: 11,
            speaker: "bitch",
            text: "Gross. You really can't fill a uniform with such tiny tits. Follow me.",
            button: [
                { chatID: 15, text: "Ok", callback: "invite2" }
            ]
        },
        {
            chatID: 12,
            speaker: "bitch",
            text: "Gross. Your tits are too big. You really overdid it, didn't you? Follow me.",
            button: [
                { chatID: 15, text: "Ok", callback: "invite2" }
            ]
        },
        {
            chatID: 13,
            speaker: "bitch",
            text: "Well aren't you just the perfect slut with your perky tits? Follow me.",
            button: [
                { chatID: 15, text: "Ok", callback: "invite2" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "not used",
            button: [
                { chatID: 15, text: "Ok", callback: "invite2" }
            ]
        },
        {
            chatID: 15,
            speaker: "bitch",
            text: "This is the sitting room. You're expected to use the feather duster and dust every corner of this room.",
            button: [
                { chatID: 16, text: "Ok", callback: "invite3" }
            ]
        },
        {
            chatID: 16,
            speaker: "bitch",
            text: "This is the bathroom. I'm sure you know what a clean toilet looks like. Or maybe not.",
            button: [
                { chatID: 17, text: "*sigh*", callback: "invite4" }
            ]
        },
        {
            chatID: 17,
            speaker: "bitch",
            text: "And finally, clear off the table and wipe it clean. You won't have to do dishes, we have a dishwasher that can do that. Now follow me back to the entrance.",
            button: [
                { chatID: 18, text: "...", callback: "bitch" }
            ]
        },
        {
            chatID: 18,
            speaker: "bitch",
            text: "All rooms will be thoroughly cleaned, but most important, if anyone tells you to do something you stop what you're doing right then and there and do it. I don't care what they ask. If the dishwasher asks you to kiss his dirty hairy ass, then you bend over and kiss it. You are the bottom rung here and the excrement in the toilet has more status than you. At times " + sc.n("jones") + " may watch you to ensure you're doing a proper job. You will not look at him or address him. You will only do your job or anything asked of you. Got it?",
            button: [
                { chatID: 19, text: "Got it.", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "bitch",
            text: "Good. I'll let you get to it then. When you're complete you'll return to this room and assume the expose position.",
            button: [
                { chatID: -1, text: "Ok.", callback: "start" }
            ]
        },
        {
            chatID: 20,
            speaker: "bitch",
            text: "You haven't cleaned all the rooms yet! Idiot bimbo! Get back to work!",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "start1" }
            ]
        },
        {
            chatID: 21,
            speaker: "bitch",
            text: "You did fine. Here's your day's pay. Now take the walk of shame and leave! You don't deserve clothes. Bye bimbo! ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "end" }
            ]
        },
        {
            chatID: 22,
            speaker: "bitch",
            text: "You're back again. Fine! Clean up. ",
            button: [
                { chatID: -1, text: "Yes ma'am. ", callback: "start1" }
            ]
        },
        {
            chatID: 23,
            speaker: "!butler",
            text: "You know you already cleaned the house. My god what an airhead. ",
            button: [
                { chatID: -1, text: "oh. ok", callback: "leave" }
            ]
        },
        {
            chatID: 24,
            speaker: "bitch",
            text: "You did fine. Here's your... wait. Is that god damned cum on the floor? It's dripping from your ass! You're " +
                "dripping ass cum all over the floor in the middle of the hallway!",
            button: [
                { chatID: 25, text: "huh?", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "bitch",
            text: "That all you can say? You are very naughty! Bend over the railing. Now! Ass up!",
            button: [
                { chatID: -1, text: "*groan* [Bend over the railing]", callback: "spank" }
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "So glad it's not carpet. Cleaning cum out of carpet is the worst. Well cleaning " +
                "a bukkake from my hair is even worse, but still, cleaning cum out of carpet sucks. ",
            button: [
                { chatID: -1, text: "[Finish cleaning and go home]", callback: "end" }
            ]
        },
        {
            chatID: 27,
            speaker: "thinking",
            text: "That's odd. I've been waiting for almost 3 hours. I wonder if she forgot about me, " +
                "or is this some kind of test. Hmmm. Fuck her test, she's such a bitch. I'm not kneeling " +
                "on this floor any longer. Also my knees really really hurt. ",
            button: [
                { chatID: -1, text: "Stand up", callback: "wander" }
            ]
        },
        {
            chatID: 28,
            speaker: "bitch",
            text: "You smell like a homeless man fell into an outhouse. Go shower. So gross.  ",
            button: [
                { chatID: -1, text: "Yea ma'am. ", callback: "leave" }
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "There's no way I can get on my knees. They hurt way too much!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "thinking",
            text: "You know what. I was going to ask her if she's ok, but fuck her. She's such a " +
                "bitch! ",
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

invoker.registerRoom(150, room150);
