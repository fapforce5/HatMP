//Whore Room
var room215 = {};
room215.main = function () {
    
    var btnList = [
        {
            "type": "btn",
            "name": "whore",
            "left": 779,
            "top": 544,
            "width": 327,
            "height": 486,
            "image": "215_pink/work.png",
            "title": "Sell your sissy ass"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 215);
    });
    nav.buildnav([213, 214, 216, 0]);
};

room215.btnclick = function (name) {
    switch (name) {
        case "whore":
            if (g.get("energy") < 25)
                char.room(213);
            else {
                g.internal = { assout: true, customer: 0, s: 0, t: 0 };
                nav.killbutton("whore");
                chat(0, 215);
            }
            break;
        case "cock":
            nav.killbutton("cock");
            nav.bg("215_pink/pr_" + g.internal.customer + "_1.jpg");
            chat(101, 215);
            break;
        case "cock1":
            nav.killbutton("cock1");
            nav.bg("215_pink/pr_" + g.internal.customer + "_2.jpg");
            g.roomTimeout = setTimeout(function () {
                chat(102, 215);
            }, 1000);
            break;
        default:
            break;
    }
};

room215.chatcatch = function (callback) {
    switch (callback) {
        case "private1":
            nav.killall();
            nav.bg("215_pink/private1.jpg");
            break;
        case "private2b":
            if (g.get("energy") < 25) {
                chat(5, 215);
            }
            else {
                nav.killall();
                nav.bg("215_pink/private2b.jpg");
                g.internal.assout = false;
            }
            break;
        case "private2a":
            if (g.get("energy") < 25) {
                chat(5, 215);
            }
            else {
                nav.killall();
                nav.bg("215_pink/private2a.jpg");
                g.internal.assout = true;
            }
            break;
        case "private3":
            var customer = true;
            if (g.internal.assout) {
                customer = true;
            }
            else {
                customer = Math.floor(Math.random() * 3) === 0;
            }
            if (customer) {
                g.internal.customer = Math.floor(Math.random() * 4);
                g.internal.customer = 3;
                if (g.internal.customer === 0) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 317,
                        "top": 222,
                        "width": 409,
                        "height": 858,
                        "image": "215_pink/pri0.png"
                    }, 215);
                    chat(100, 215);
                }
                else if (g.internal.customer === 1) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 300,
                        "top": 163,
                        "width": 856,
                        "height": 917,
                        "image": "215_pink/pri1.png"
                    }, 215);
                    chat(100, 215);
                }
                else if (g.internal.customer === 2) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 327,
                        "top": 213,
                        "width": 442,
                        "height": 867,
                        "image": "215_pink/pri2.png"
                    }, 215);
                    chat(100, 215);
                }
                else { //special events
                    if (false) {
                        //if (sc.checkevent("landlord", -10) && sc.getstep("landlord") > 199) {
                        nav.button({
                            "type": "img",
                            "name": "f",
                            "left": 490,
                            "top": 153,
                            "width": 382,
                            "height": 927,
                            "image": "215_pink/prill.png"
                        }, 215);
                        chat(6, 215);
                    }
                    else if (false) {
                        //else if (sc.getstep("chloe") > 3) {
                        //if (bonusEvent === 0) {
                        nav.button({
                            "type": "img",
                            "name": "f",
                            "left": 423,
                            "top": 217,
                            "width": 402,
                            "height": 863,
                            "image": "215_pink/pri3.png"
                        }, 215);
                        chat(11, 215);
                        //}
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "f",
                            "left": 227,
                            "top": 278,
                            "width": 756,
                            "height": 802,
                            "image": "215_pink/prtranny.png"
                        }, 215);
                        chat(17, 215);
                    }
                }
            }
            else {
                chat(3, 215);
            }
            break;
        case "privateReset":
            nav.killbutton("f");
            char.addtime(30);
            break;
        case "fuck0":
            nav.killall();
            g.internal.s = 1;
            g.internal.t++;
            nav.bg("215_pink/pr_" + g.internal.customer + "_0.jpg");
            nav.button({
                "type": "btn",
                "name": "cock",
                "left": 1450,
                "top": 30,
                "width": 429,
                "height": 343,
                "image": "215_pink/cock.png"
            }, 215);
            break;
        case "fuck1":
            nav.button({
                "type": "btn",
                "name": "cock1",
                "left": 1450,
                "top": 30,
                "width": 429,
                "height": 343,
                "image": "215_pink/cock1.png"
            }, 215);
            break;
        case "fuck2":
            g.mod("energy", -25);
            switch (g.internal.customer) {
                case 0:
                    g.mod("receiveAnalMale", 1);
                    g.mod("creamPied", 1);
                    break;
                case 1:
                    g.mod("receiveAnalMale", 3);
                    g.mod("giveHandjobMale", 3);
                    g.mod("creamPied", 1);
                    break;
                case 2:
                    g.mod("receiveAnalFemale", 1);
                    break;
            }
            nav.bg("215_pink/pr_" + g.internal.customer + "_3.jpg");
            break;
        case "reset":
            char.room(215);
            break;
        case "reset0":
            g.mod("money", g.internal.t * 50);
            char.room(215);
            break;
        case "ll0":
            nav.killall();
            nav.bg("215_pink/ll0.jpg");
            break;
        case "ll1":
            nav.bg("215_pink/ll1.jpg");
            break;
        case "ll2":
            nav.bg("215_pink/ll2.jpg");
            break;
        case "c0":
            nav.killall();
            nav.bg("215_pink/c0.jpg");
            break;
        case "c1":
            nav.killall();
            nav.bg("215_pink/c1.jpg");
            break;
        case "trio0":
            nav.killall();
            nav.bg("215_pink/trio_0.jpg");
            if (sc.checkevent("holly", -1))
                chat(18, 215);
            else
                chat(21, 215);
            break;
        case "trio_1":
            nav.bg("215_pink/trio_1.jpg");
            break;
        case "trio_bad":
            nav.bg("215_pink/trio_bad.jpg");
            break;
        case "resetWhore":
            nav.killbutton("f");
            break;
        default:
            break;
    }
};

room215.chat = function (chatID) {
    if (chatID === 100) {
        var chat100 = [
            "I want to take you to pound town! ",
            "Hay whore! ",
            "I love an easy lay ",
            "You should meet my cock. I'm sure you'll get along great! ",
            "I want to fuck you like a whorthless whore",
            "Fuck me if I'm wrong, but you look easy. ",
            "I'm going to fuck you like I hate you",
            "My favorite whore is out today, I guess you'll do",
            "You piece of shit! I fucking hate whores like you. You only live to take cock. ",
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat100[Math.floor(Math.random() * chat100.length)],
            button: [
                { chatID: -1, text: "Come on in.", callback: "fuck0" },
                { chatID: 0, text: "I'm going to pass", callback: "resetWhore" }
            ]
        };
    }
    if (chatID === 101) {
        var chat101 = [
            "You are such a tight little slut! My BBC loves little white sissy whores",
            "We're going to fill you with out cum whore! We've never met someone so hungry for all our cocks!",
            "My purple cock loves your tight little hole! I'm going to bend you over and really fuck your hole!"
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat101[g.internal.customer],
            button: [
                { chatID: -1, text: "OoooooOOoooOOo", callback: "fuck1" }
            ]
        };
    }
    if (chatID === 102) {
        var chat102 = [
            "You'll be farting out my cum all day. ",
            "Such a cock hungry tasty cum whore! We'll be back to fill you up again. ",
            "Oh fuck! I've never fucked a slut like you! You're really the best! "
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat102[g.internal.customer],
            button: [
                { chatID: 4, text: "UUuugghhhhhh", callback: "fuck2" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I can't believe I'm going to whore myself out. ",
            button: [
                { chatID: 1, text: "[Stand at the door]", callback: "private2b" },
                { chatID: 2, text: "[Stick your ass out the door]", callback: "private2a" },
                { chatID: -1, text: "[Leave]", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I hope I meet someone nice ",
            button: [
                { chatID: -1, text: "[Wait for a customer]", callback: "private3" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I feel so exposed with my asshole haning open for anyone that comes by. ",
            button: [
                { chatID: -1, text: "[Wait for a customer]", callback: "private3" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Damn, got passed by for one of those other sluts! ",
            button: [
                { chatID: 0, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "My ass is so sore! Better get back out there. So many cocks to empty. ",
            button: [
                { chatID: 1, text: "[Stand at the door]", callback: "private2b" },
                { chatID: 2, text: "[Stick your ass out the door]", callback: "private2a" },
                { chatID: -1, text: "[Leave]", callback: "reset0" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I need more energy to work. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "reset0" }
            ]
        },
        {
            chatID: 6,
            speaker: "random",
            text: "Show me how much you need my cock in you slut. I want you on you knees ready to worship my feet. ",
            button: [
                { chatID: 7, text: "Come on in.", callback: "ll0" },
                { chatID: 0, text: "I'm going to pass", callback: "resetWhore" }
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "Show me how pathictic you are. Suck my toes before I shove my foot up your ass. ",
            button: [
                { chatID: 8, text: "Lick his toes slut", callback: "ll1" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "What the hell do you think you're doing! I can't believe you're selling your ass like a common " +
                "whore! I take that back, I do believe it. Bending over for this man that you don't even know to " +
                "lick his toes and get your sissy pussy violated by his feet and cock. I don't even know what to say! ",
            button: [
                { chatID: 9, text: sc.n("landlord") + "?", callback: "ll2" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "If you want to be a whore, then come with me and let's make you a whore. ",
            button: [
                { chatID: 10, text: "My clothes....", callback: "ll3" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Why did you drag me out here naked in the street? You think I'm going to be embarrased? I'm " +
                "proud of my body! ",
            button: [
                { chatID: -1, text: "...", callback: "ll4" }
            ]
        },
        {
            chatID: 11,
            speaker: "random",
            text: "Hay you. I need some of that girl dick. you down? ",
            button: [
                { chatID: 12, text: "I sure am!", callback: "c0" },
                { chatID: 0, text: "I'm going to pass", callback: "resetWhore" }
            ]
        },
        {
            chatID: 12,
            speaker: "random",
            text: "First I'm going to tie you up. ",
            button: [
                { chatID: 13, text: "OOoo I like this!", callback: "c1" }
            ]
        },
        {
            chatID: 13,
            speaker: "random",
            text: "Then I'm so going to fuck you!",
            button: [
                { chatID: 14, text: "Why the full body stocking?", callback: "c2" }
            ]
        },
        {
            chatID: 14,
            speaker: "chloe",
            text: "Let me take that off, now that you're cuffed and can't get away I can reveal myself. " +
                "I'm going to rape your tiny dicklette " +
                "and shoot your cum into my dripping pussy, and you're going to love it. Then I'm going to take " + 
                "a picture and send it to " + sc.n("zoey") + ". Now you will know what it feels like to be betrayed. ",
            button: [
                { chatID: 15, text: "What! No no no no no", callback: "c3" }
            ]
        },
        {
            chatID: 15,
            speaker: "chloe",
            text: "Like how easily my sloppy dripping pussy rides up and down your cock. I can feel how " +
                "hard you are. " + sc.n("zoey") + " isn't going to be so mad. She'll probably never speak to you " +
                "again and you won't have any friends. It's really better this way. A slut like you will always be " +  
                "a terrible girlfirend for her. ",
            button: [
                { chatID: 16, text: "Get off of me! Please don't tell her! ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "chloe",
            text: "You fucking ruined my chances with her. Now I'm going to fucking ruin both of your lives! Go ahead, " +
                "beg me not to tell. Tell me you'll do anything for me to keep my mouth shut and not share the picture. " +
                "Beg me you asshole! ",
            button: [
                { chatID: -1, text: "I'm begging. I'll do anything! ", callback: "c4" }
            ]
        },
        {
            chatID: 17,
            speaker: "random",
            text: "You want to take us for a ride bby?",
            button: [
                { chatID: -1, text: "Come on in.", callback: "trio0" },
                { chatID: 0, text: "I'm going to pass", callback: "resetWhore" }
            ]
        },
        {
            chatID: 18,
            speaker: "holly",
            text: "We were going to fuck fuck, but asshole's like you don't deserve us. ",
            button: [
                { chatID: 19, text: "Uhh", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "molly",
            text: "You're a real piece of shit. I was going to eat your ass like a pussy. ",
            button: [
                { chatID: 20, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "dolly",
            text: "You're lower than a doodle bug. Let's go girls. ",
            button: [
                { chatID: 0, text: "bye....", callback: "trio_bad" }
            ]
        },
        {
            chatID: 21,
            speaker: "holly",
            text: "We wanted to reward you for helping us out. ",
            button: [
                { chatID: 22, text: "hum?", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "dolly",
            text: "And you're as pretty as a spotted horse in a daisy pasture. ",
            button: [
                { chatID: 23, text: "*blush*", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "molly",
            text: "So we have a present for you.",
            button: [
                { chatID: 24, text: "Yes", callback: "trio_1" }
            ]
        },
        {
            chatID: 24,
            speaker: "molly",
            text: "It's our cocks. We're going to fuck you. ",
            button: [
                { chatID: 25, text: "Oh", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "dolly",
            text: "Get ready to put the dill in our pickle cutie.",
            button: [
                { chatID: 24, text: "oh yeah", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};