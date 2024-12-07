//Room name
var room353 = {};
room353.main = function () {
    
    var goingLewd = Math.floor(Math.random() * 3) === 0;
    g.internal = { ev: new Array(), islewd: false, success: 0, fail: 0 };
    var i, idx;
    var characters = ["m", "m", "f", "f"];
    var numberOfExtraChar = g.rand(0, 5) + 1;
    for (i = 0; i < numberOfExtraChar; i++) {
        characters.push(g.rand(0, 2) === 0 ? "f" : "m");
    }
    g.shuffleArray(characters);
    
    if (goingLewd) {
        characters.splice(g.rand(1, 3), 0, "g");
    }
    characters.splice(g.rand(0, 3), 0, "h");
    var m = [2, 5, 7, 8, 10, 11, 12, 16, 17, 18];
    var f = [1, 3, 4, 6, 9, 13, 14, 15, 19];
    for (i = 0; i < characters.length; i++) {
        if (characters[i] === "g" || characters[i] === "b") {
            g.internal.ev.push({ id: 0, g: characters[i] });
        }
        else if (characters[i] === "m") {
            idx = Math.floor(Math.random() * m.length);
            g.internal.ev.push({ id: m[idx], g: "m" });
            m.splice(idx, 1);
        }
        else {
            idx = Math.floor(Math.random() * f.length);
            g.internal.ev.push({ id: f[idx], g: "f" });
            f.splice(idx, 1);
        }
    }



    //g.internal = { s: 0, y: 0, talk: "", good: 0, bad: 0, indif: 0, islewd: false };
    char.changeMenu("hide", false);
    if (sc.getEvent("landlord", 3)) {
        nav.bg("353_mascot/b0.jpg");
        chat(12, 353);
    }
    else {
        sc.setEvent("landlord", 3);
        zcl.displayMain(350, 850, .11, "clothes", true);
        nav.bg("353_mascot/start0.jpg");
        chat(0, 353);
    }
};

room353.btnclick = function (name) {
    switch (name) {
        case "icon_donate":
            nav.killall();
            if (g.internal.ev[0].g === "m") {
                g.internal.success++;
                chat(999, 353);
            }
            else {
                g.internal.fail++;
                chat(998, 353);
            }
            g.internal.ev.splice(0, 1);
            break;
        case "icon_ignore":
            nav.killall();
            g.internal.ev.splice(0, 1);
            room353.chatcatch("newperson");
            break;
        case "icon_donateg":
            g.internal.ev.splice(0, 1);
            chat(21, 353);
            break;
        case "icon_ignoreg":
            g.internal.ev.splice(0, 1);
            chat(22, 353);
            break;
        default:
            break;
    }
};

room353.chatcatch = function (callback) {
    switch (callback) {
        case "start1":
        case "start2":
        case "start3":
        case "start4":
        case "b0":
        case "none":
        case "g1":
        case "g2_big1":
        case "g2_big3":
        case "g2_chastity2":
        case "g2_tiny2":
            nav.killall();
            nav.bg("353_mascot/" + callback + ".jpg");
            break;
        case "newperson":
            nav.killall();
            if (g.internal.ev.length === 0) {
                if (!g.internal.islewd) {
                    nav.bg("353_mascot/end_good.jpg");
                    chat(997, 353);
                }
                else if (cl.c.chastity !== null) {
                    nav.bg("353_mascot/end_chastity.jpg");
                    sc.modLevel("landlord", -30, 999);
                    if (gender.getChange("landlord", "chastity")) {
                        gv.mod("money", 60);
                        gender.setChanges("landlord", "chastity")
                        sc.modSecret("landlord", 5);
                        chat(14, 353);
                    }
                    else {
                        sc.modSecret("landlord", 15);
                        chat(17, 353);
                    }
                }
                else if (gender.isCockTooSmallForSex()) {
                    gender.setChanges("landlord", "cock");
                    sc.modLevel("landlord", -60, 999);
                    nav.bg("353_mascot/end_tiny.jpg");
                    chat(13, 353)
                }
                else {
                    sc.modLevel("landlord", 55, 4);
                    gv.mod("money", 60);
                    nav.bg("353_mascot/end_dick.jpg");
                    gender.setChanges("landlord", "cock");
                    chat(19, 353);
                }
            }
            else if (g.internal.ev[0].g === "g") {
                nav.bg("353_mascot/g0.jpg");
                sc.select("icon_donateg", "353_mascot/icon_donate.png", 10);
                sc.select("icon_ignoreg", "353_mascot/icon_ignore.png", 11);
            }
            else {
                nav.bg("353_mascot/p" + g.internal.ev[0].id + ".jpg");
                if (g.internal.islewd) {
                    chat(996, 353);
                }
                else {
                    sc.select("icon_donate", "353_mascot/icon_donate.png", 10);
                    sc.select("icon_ignore", "353_mascot/icon_ignore.png", 11);
                }
            }
            break;
        case "leave":
            char.room(354);
            break;
        case "secretsOut":
            gv.mod("money", 60);
            sc.modSecret("landlord", 999);
            break;
        case "g2":
            g.internal.islewd = true;
            if (cl.c.chastity !== null) {
                nav.bg("353_mascot/g2_chastity.jpg");
                chat(28, 353);
            }
            else if (gender.isCockTooSmallForSex()) {
                nav.bg("353_mascot/g2_tiny.jpg");
                chat(30, 353);
            }
            else {
                nav.bg("353_mascot/g2_big.jpg");
                chat(24, 353);
            }
            break;
        case "g2_big2":
            cl.doCum();
            sex.mod("hand", false, "f", 1);
            nav.bg("353_mascot/g2_big2.jpg");
            break;
        default:
            break;
    }
};

room353.chat = function (chatID) {
    if (chatID === 999) {
        var goodChat = [
            "Awesome! I'm always looking for way to increase my financial portfolio. ",
            "Oh jolly good. I'll go do that now!",
            "Well I guess I could use some money for the bar tonight. ",
            "I would rather put it in you, but a working man's gotta get money.",
            "Oh yes! I love masturbation, and money!",
            "oh Sure. ",
            "You want me to jack off? For money? Sure. ",
            "Totally",
            "Awesome. ",
            "You know that's a great idea. I'll do that. ",
            "Only if that cute nurse is still working. ",
            "I have one love in life sonny, and that's cumming.",
            "You're just trying to get my sperm. And you know what? You can have it. ",
            "Yeah, I'll jack it for you sweetie pie.",
            "Sure, after I finish here. ",
            "I was going to jack off in a tissue, but I guess I can do it for you. ",
            "Fuck yeah! Dude that's brilliant! "
        ];
        return {
            chatID: 999,
            speaker: "!boy",
            text: goodChat[g.rand(0, goodChat.length)],
            button: [
                { chatID: -1, text: "Cool!", callback: "newperson" }
            ]
        };
    }
    else if (chatID === 998) {
        var badChat = [
            "Do I look like I have a dick to you? ",
            "Oh gross! ",
            "I'm not going to do that!",
            "Pervert!",
            "I would need balls to give sperm. ",
            "I'm going to talk to your manager about your crass behavior! ",
            "Stop talking to me loser. ",
            "That's disgusting!",
            "Well I've never! ",
            "What the fuck? ",
            "You know I don't have a dick right?",
            "I don't talk to people in weird costumes. ",
            "Gross",
            "That's disgusting. "
        ];
        return {
            chatID: 998,
            speaker: "!girl",
            text: badChat[g.rand(0, badChat.length)],
            button: [
                { chatID: 20, text: "Oh no. Sorry.", callback: "none" }
            ]
        };
    }
    else if (chatID === 997) {
        if (g.internal.fail > 1) {
            sc.modLevel("landlord", -15, 999);
            return {
                chatID: 997,
                speaker: "landlord",
                text: "I had too many complaints today. Do you event look at who you're talking to? We had someone " +
                    "come in and slap Nurse Madison. I had to give her a few days off as an apology for you bad " +
                    "behavior. Now take that suit off, you're not getting paid today. ",
                button: [
                    { chatID: -1, text: "Crap. I was hoping they didn't say anything. ", callback: "leave" }
                ]
            };
        }
        else if (g.internal.success > 2 && g.internal.fail === 0) {
            sc.modLevel("landlord", 100, 4);
            var succPay = 60 + (g.internal.success * 10);
            gv.mod("money", succPay);
            return {
                chatID: 997,
                speaker: "landlord",
                text: "Wow! No complaints and you talked so many people into coming in! Really great job. I'm " +
                    "going to give you a little bonus of $10 for each person that came in plus your $60 for a " +
                    "total of $" + succPay + ". I'm impressed! Now go take that thing off. ",
                button: [
                    { chatID: -1, text: "Sweet! Thanks! ", callback: "leave" }
                ]
            };
        }
        else {
            sc.modLevel("landlord", 53, 4);
            gv.mod("money", 60);
            return {
                chatID: 997,
                speaker: "landlord",
                text: "Not a bad days work. Didn't get a lot of extra customers, but I guess they may come in later. " +
                    "Here's $60 for an honest day's pay for an honest day's work. You can take that off. ",
                button: [
                    { chatID: -1, text: "Sweet! Thanks! ", callback: "leave" }
                ]
            };
        }
    }
    else if (chatID === 996) {
        var speaker = g.internal.ev[0].g === "f" ? "!girl" : "!boy";
        g.internal.ev.splice(0, 1);
        var badtalk = [
            "Oh gross I can see your penis! ",
            "You asshole! This isn't the place to do that! ",
            "Filthy, just filthy. ",
            "Have you no shame. ",
            "What are you doing! ",
            "Are you some kind of sex pervert? ",
        ];
        if (cl.c.chastity !== null) {
            badtalk.push("What is that on your dick?");
            badtalk.push("What the fuck...");
            badtalk.push("Are you some kind of sissy?");
            badtalk.push("Everyone, look at the nancy boy! ");
            badtalk.push("Why are you showing everyone your chastity cage? ");
        }
        else if (gender.isCockTooSmallForSex()) {
            badtalk.push("Hahahaha! Tiny pecker! ");
            badtalk.push("I didn't know they made dicks that small.");
            badtalk.push("Oh look a cock, only smaller. ");
            badtalk.push("Someone's going fishing, 'cause I can see a worm dangling. ");
            badtalk.push("You must be really embarrassed when you get undressed. ");
            badtalk.push("Your penis can be completely covered with a grain of rice. ");
        }
        else {
            badtalk.push("Oh wow! That's a monster! ");
            badtalk.push("You mother must be proud of the cock she raised. ");
            badtalk.push("That looks like it would break me in half! ");
            badtalk.push("Nice cock! ");
            badtalk.push("You're the reason women walked bowlegged. ");
            badtalk.push("Yummy. I want to suck it, but I have things to do. ");
        }
        return {
            chatID: 996,
            speaker: speaker,
            text: badtalk[g.rand(0, badtalk.length)],
            button: [
                { chatID: -1, text: "Awww...", callback: "newperson" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "The hell is that‽ ",
                button: [
                    { chatID: 1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "me",
                text: "That's the mascot, Sammy the Happy Sperm. It's marketing. When people walk by and see Sammy " +
                    "they connect sperm to him. That way when they go home and jack off they think of me. Er.. My " +
                    "business. Then the next time they think about jacking off they come here, so they can get paid " +
                    "to do what they love. ",
                button: [
                    { chatID: 2, text: "I'm not putting that on. What if someone I know sees me? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "landlord",
                text: "Don't be ridiculous. No one will be able to tell it's you. Just put on the costume and tell " +
                    "young men to come in and donate. It can't be simpler. Now a deal's a deal. Put on the costume " +
                    "and follow me across the street. ",
                button: [
                    { chatID: 3, text: "...but...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "You shut your pathetic ass up and put on the suit. I'm done arguing with you. I've done so " +
                    "much for you, but you can't even help me out for a few hours? ",
                button: [
                    { chatID: 4, text: "Fine. I'll put it on.", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "landlord",
                text: "Thank you. Meet me across the street in front of the park when you're ready. That has the " +
                    "best foot traffic. ",
                button: [
                    { chatID: 5, text: "*sigh* ok", callback: "start1" }
                ]
            },
            {
                chatID: 5,
                speaker: "landlord",
                text: "Well don't you just look like the cutest little sperm. ",
                button: [
                    { chatID: 6, text: "...", callback: "start2" }
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "It's so hot and stuffy in here. I'm dying. Also these wrist straps are the worst! I can't " +
                    "even move my hands. What if I have to go to the bathroom? ",
                button: [
                    { chatID: 7, text: "...", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "landlord",
                text: "That's so you don't move your arms around too much. I don't want the costume distorted because " +
                    "you wanted to rest your arms in a weird spot. If you need to use the potty come see me and I'll help " +
                    "you out. Did you think I would make you wet your pants? ",
                button: [
                    { chatID: 8, text: "Well, no. I guess not. ", callback: "b0" }
                ]
            },
            {
                chatID: 8,
                speaker: "landlord",
                text: "One last thing. Going to attach you to this pole. I know lazy you are and I wouldn't want you " +
                    "to drop the suit and hang out with your friends, like that lazy lesbian. This way I know you're " +
                    "one the job and I don't have to stand here and watch you all morning. ",
                button: [
                    { chatID: 9, text: "What! You can't do that. What if there's a fire?", callback: "start3" }
                ]
            },
            {
                chatID: 9,
                speaker: "landlord",
                text: "There isn't going to be a fire. Everything here is really green. Besides I'll come out and " +
                    "rescue you, like I've always been doing. If you weren't so damn lazy I wouldn't have to do this. " +
                    "Really you did it to yourself. ",
                button: [
                    { chatID: 10, text: "This is so dumb", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "landlord",
                text: "Maybe. Think of this like prison rape. You can try to fight it, or just " +
                    "relax and try to enjoy it since it's going to happen anyway. Don't forget to only advertise " +
                    "to men. I don't want a bunch of angry women yelling at me again. See you in a few hours. ",
                button: [
                    { chatID: 11, text: "*groan*", callback: "start4" }
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "This suit is stupid. I can barely see anything out of it. Where the eye holes are, I can only " +
                    "see people crotches. This is probably the dumbest thing I've done.  ",
                button: [
                    { chatID: -1, text: "...", callback: "newperson" }
                ]
            },
            {
                chatID: 12,
                speaker: "landlord",
                text: "I'll just lock in you place... And don't give me too many complaints. ",
                button: [
                    { chatID: -1, text: "ok", callback: "newperson" }
                ]
            },
            {
                chatID: 13,
                speaker: "landlord",
                text: "I should be mad at you flashing your penis to everyone, but your tiny little peepee on display " +
                    "for everyone is just too funny! Take the $60. With a penis that small you're going to have to " +
                    "dazzle the girls with money if you ever want to get laid! ",
                button: [
                    { chatID: -1, text: "*groan*", callback: "leave" }
                ]
            },
            {
                chatID: 14,
                speaker: "landlord",
                text: "What the hell is that on your penis? ",
                button: [
                    { chatID: 15, text: "A chastity device. I want to be a sissy girl", callback: "secretsOut" },
                    { chatID: 16, text: "I don't know! Someone put it on me!", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "landlord",
                text: "What... Oh no. no, no, no. ok. Go ahead and change, we will talk about this when we get home.",
                button: [
                    { chatID: -1, text: "Ok. See you at home. ", callback: "leave" },
                ]
            },
            {
                chatID: 16,
                speaker: "landlord",
                text: "Well if your dick wasn't hanging out for everyone to see I guess they wouldn't mess with it. " +
                    "You'll never attract a good girl if you keep doing weird things. You aren't getting paid for " +
                    "being a weird little pervert. Go put some clothes on. ",
                button: [
                    { chatID: -1, text: "Ok. ", callback: "leave" },
                ]
            },
            {
                chatID: 17,
                speaker: "landlord",
                text: "Let me guess, those 'other kids' put that thing on your penis again? ",
                button: [
                    { chatID: 18, text: "Oh, yes they did. ", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "landlord",
                text: "Look. I know you're young and doing weird sex things are fun, but for the love of god don't " +
                    "do those things while you're wearing Sammy the Happy Sperm. He's a wholesome mascot for sperm " +
                    "donation, not a sick perverted freak. You aren't getting paid today. Please stop being a little " +
                    "pervert in public. Now put that away and get dressed. ",
                button: [
                    { chatID: -1, text: "ok ", callback: "leave" },
                ]
            },
            {
                chatID: 19,
                speaker: "landlord",
                text: "Oh yummy. I mean. What the hell! You little pervert! Shaking your giant dick around for " +
                    "everyone to see. I mean it is a thing of beauty, but you shouldn't just stand outside naked " +
                    "like that. Go put that away and get some clothes on. ",
                button: [
                    { chatID: -1, text: "ok ", callback: "leave" },
                ]
            },
            {
                chatID: 20,
                speaker: "thinking",
                text: "damn. I got that wrong. I hope they don't tell on me. ",
                button: [
                    { chatID: -1, text: "...", callback: "newperson" },
                ]
            },
            {
                chatID: 21,
                speaker: "!girl",
                text: "Haha! No we don't want to donate sperm! You're the giant sperm, why don't you do it! ",
                button: [
                    { chatID: 23, text: "...", callback: "g1" },
                ]
            },
            {
                chatID: 22,
                speaker: "!girl",
                text: "OMG Becky Look at that giant sperm! ",
                button: [
                    { chatID: 23, text: "huh? ", callback: "g1" },
                ]
            },
            {
                chatID: 23,
                speaker: "!girl",
                text: "I wonder if his sperm is giant too! Show us your giant sperms! ",
                button: [
                    { chatID: -1, text: "What? no ", callback: "g2" },
                ]
            },
            {
                chatID: 24,
                speaker: "!girl",
                text: "It's just so big! I love it! I need to see if his sperm is giant like his cock!  ",
                button: [
                    { chatID: 25, text: "Oooooo", callback: "g2_big1" },
                ]
            },
            {
                chatID: 25,
                speaker: "!girl",
                text: "Just relax and let me jack you off! I need to see your cum! ",
                button: [
                    { chatID: 26, text: "Oooooo", callback: "g2_big2" },
                ]
            },
            {
                chatID: 26,
                speaker: "!girl",
                text: "Oh. It's a big cum shot, but normal sized sperm. That was disappointing. Oh well. Let's " +
                    "get out of here. ",
                button: [
                    { chatID: 27, text: "oh... wait. Pull up my pants. My hands are trapped in this! ", callback: "g2_big3" },
                ]
            },
            {
                chatID: 27,
                speaker: "!oldlady",
                text: "Hrumph! Back in my day a proper lady wouldn't waste sperm on the ground like that. ",
                button: [
                    { chatID: -1, text: "....", callback: "newperson" },
                ]
            },
            {
                chatID: 28,
                speaker: "!girl",
                text: "Haha. He's got a thing on his dick! Are you some sort of gay boy! Let's go Becky. He obviously " +
                    "isn't a real man! Let everyone see it!",
                button: [
                    { chatID: 29, text: "What, no, I can't move my arm. Pull my pants back up! ", callback: "g2_chastity2" },
                ]
            },
            {
                chatID: 29,
                speaker: "!oldlady",
                text: "In my day we wouldn't waste a perfectly good penis like that. ",
                button: [
                    { chatID: -1, text: "...", callback: "newperson" },
                ]
            },
            {
                chatID: 30,
                speaker: "!girl",
                text: "Oh hahaha! it's so tiny! After you have sex with a girl she would still be a virgin 'cause " +
                    "that is too small to penetrate her! Shrimp dick! Let's go Becky. He obviously " +
                    "isn't a real man! Let everyone see it!",
                button: [
                    { chatID: 31, text: "What, no, I can't move my arm. Pull my pants back up! ", callback: "g2_tiny2" },
                ]
            },
            {
                chatID: 31,
                speaker: "!oldlady",
                text: "I haven't seen a penis that small since after the war. Of course that man lost his due to " +
                    "artillery blowing it off near him. Damn shame too. ",
                button: [
                    { chatID: -1, text: "...", callback: "newperson" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};