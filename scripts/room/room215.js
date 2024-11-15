//Whore Room
var room215 = {};
room215.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "whore",
    //        "left": 779,
    //        "top": 544,
    //        "width": 327,
    //        "height": 486,
    //        "image": "215_pinkroom/work.png",
    //        "title": "Sell your sissy ass"
    //    }
    //];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 215);
    //});
    chat(45, 215);
    nav.buildnav([213, 214, 171, 170]);
};

room215.btnclick = function (name) {
    switch (name) {
        case "whore":
            if (gv.get("energy") < 25)
                char.room(213);
            else {
                g.internal = { assout: true, customer: 0, s: 0, t: 0 };
                nav.killbutton("whore");
                chat(0, 215);
            }
            break;
        case "cock":
            nav.killbutton("cock");
            nav.bg("215_pinkroom/pr_" + g.internal.customer + "_1.jpg");
            chat(101, 215);
            break;
        case "cock1":
            nav.killbutton("cock1");
            nav.bg("215_pinkroom/pr_" + g.internal.customer + "_2.jpg");
            g.roomTimeout = setTimeout(function () {
                chat(102, 215);
            }, 1000);
            break;
        case "trio":
            nav.bg("215_pinkroom/trio" + g.pass + ".jpg");
            g.pass++;
            if (g.pass === 7) {
                nav.killbutton("trio");
                chat(40, 215);
            }
            break;
        default:
            break;
    }
};

room215.chatcatch = function (callback) {
    switch (callback) {
        case "private1":
            nav.killall();
            nav.bg("215_pinkroom/private1.jpg");
            break;
        case "private2b":
            if (gv.get("energy") < 25) {
                chat(5, 215);
            }
            else {
                nav.killall();
                nav.bg("215_pinkroom/private2b.jpg");
                g.internal.assout = false;
            }
            break;
        case "private2a":
            if (gv.get("energy") < 25) {
                chat(5, 215);
            }
            else {
                nav.killall();
                nav.bg("215_pinkroom/private2a.jpg");
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
                if (!sc.getEvent("landlord", -10) && sc.getstep("landlord") > 201) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 490,
                        "top": 153,
                        "width": 382,
                        "height": 927,
                        "image": "215_pinkroom/prill.png"
                    }, 215);
                    chat(6, 215);
                }
                else if (sc.getstep("chloe") > 2 && !sc.getEvent("chloe", -1)) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 423,
                        "top": 217,
                        "width": 402,
                        "height": 863,
                        "image": "215_pinkroom/pri3.png"
                    }, 215);
                    chat(11, 215);
                }
                else {
                    g.internal.customer = Math.floor(Math.random() * 4);
                    if (g.internal.customer === 3) {
                        nav.button({
                            "type": "img",
                            "name": "f",
                            "left": 227,
                            "top": 278,
                            "width": 756,
                            "height": 802,
                            "image": "215_pinkroom/prtranny.png"
                        }, 215);
                        chat(17, 215);
                    }
                    else if (g.internal.customer === 0) {
                        nav.button({
                            "type": "img",
                            "name": "f",
                            "left": 317,
                            "top": 222,
                            "width": 409,
                            "height": 858,
                            "image": "215_pinkroom/pri0.png"
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
                            "image": "215_pinkroom/pri1.png"
                        }, 215);
                        chat(100, 215);
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "f",
                            "left": 327,
                            "top": 213,
                            "width": 442,
                            "height": 867,
                            "image": "215_pinkroom/pri2.png"
                        }, 215);
                        chat(100, 215);
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
            nav.bg("215_pinkroom/pr_" + g.internal.customer + "_0.jpg");
            nav.button({
                "type": "btn",
                "name": "cock",
                "left": 1450,
                "top": 30,
                "width": 429,
                "height": 343,
                "image": "215_pinkroom/cock.png"
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
                "image": "215_pinkroom/cock1.png"
            }, 215);
            break;
        case "fuck2":
            gv.mod("energy", -25);
            gv.mod("money", 50);
            switch (g.internal.customer) {
                case 0:
                    gv.mod("receiveAnalMale", 1);
                    gv.mod("creamPied", 1);
                    break;
                case 1:
                    gv.mod("receiveAnalMale", 3);
                    gv.mod("giveHandjobMale", 3);
                    gv.mod("creamPied", 1);
                    break;
                case 2:
                    gv.mod("receiveAnalFemale", 1);
                    break;
            }
            nav.bg("215_pinkroom/pr_" + g.internal.customer + "_3.jpg");
            break;
        case "reset":
            char.room(215);
            break;
        case "reset0":
            char.room(215);
            break;
        case "ll0":
            nav.killall();
            nav.bg("215_pinkroom/ll0.jpg");
            break;
        case "ll1":
        case "ll2":
        case "ll3":
        case "ll4":
        case "ll5":
        case "ll6":
        case "ll7":
        case "ll8":
        case "ll9":
        case "ll10":
        case "ll11":
        case "ll12":
            nav.bg("215_pinkroom/" + callback + ".jpg");
            break;
        case "ll13":
            sc.setstep("landlord", -10);
            gv.mod("receiveAnalMale", 3);
            gv.mod("receiveOralMale", 3);
            gv.mod("creamPied", 1);
            break;
        case "c0":
            nav.killall();
            nav.bg("215_pinkroom/c0.jpg");
            break;
        case "c1":
            nav.killall();
            nav.bg("215_pinkroom/c1.jpg");
            break;
        case "c2":
            nav.bg("215_pinkroom/c2.jpg");
            break;
        case "c3":
            nav.bg("215_pinkroom/c3.jpg");
            break;
        case "c4":
            nav.bg("215_pinkroom/c4.jpg");
            break;
        case "c5":
            pic.add("chloe");
            nav.bg("215_pinkroom/c5.jpg");
            break;
        case "c6":
            nav.bg("215_pinkroom/trio_bad.jpg");
            break;
        case "c7":
            menu.initBuild("init");
            nav.buildnav([215]);
            gv.mod("fuckPussy", 1);
            gv.mod("loadSwollowed", 1);
            sc.setstep("chloe", -1);
            setTimeout(function () {
                menu.mClick("contact");
                sc.phone("zoey1");
            }, 1000);
            break;
        case "trio0":
            nav.killall();
            nav.bg("215_pinkroom/trio0.jpg");
            if (sc.getEvent("holly", -1))
                chat(18, 215);
            else
                chat(21, 215);
            break;
        case "trio1":
            nav.bg("215_pinkroom/trio1.jpg");
            break;
        case "trio2":
            nav.bg("215_pinkroom/trio2.jpg");
            g.pass = 3;
            nav.button({
                "type": "btn",
                "name": "trio",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 215);
            break;
        case "trio3":
            nav.bg("215_pinkroom/pr_1_3.jpg");
            gv.mod("receiveAnalFemale", 1);
            gv.mod("receiveOralFemale", 1);
            gv.mod("receiveHandjobFemale", 1);
            gv.mod("creamPied", 1);
            break;
        case "trio_bad":
            nav.bg("215_pinkroom/trio_bad.jpg");
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
            "Hey whore! ",
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
            speaker: "river",
            text: "Hey skidmark. figures a loser like you would be in here. I'm going to show you what a real man's cock " + 
                "looks like.",
            button: [
                { chatID: 7, text: "No. Go away " + sc.n("river") + " ! I'm not going to do anything with you! You ruined my life. ", callback: "ll0" },
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: sc.n("me") + "! What the hell! Both of you, get in that room this instant!",
            button: [
                { chatID: 8, text: sc.n("landlord") + "! What are you doing here?", callback: "ll1" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "What the hell do you think you're doing! I can't believe you're selling your ass like a common " +
                "whore! I take that back, I do believe it. Bending over for this man that you don't even know to " +
                "show your sissy pussy and get violated by his cock. I don't even know what to say! ",
            button: [
                { chatID: 9, text: sc.n("landlord") + "?", callback: "ll2" }
            ]
        },
        {
            chatID: 9,
            speaker: "river",
            text: "You got yelled at by your " + sc.n("landlord") + "! I always knew you were a loser, ever since I hung " +
                "you up by your underwear in the hallway and got the entire school to call you skid mark. ",
            button: [
                { chatID: 10, text: "Shut up " + sc.n("river") + ". ", callback: "ll3" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You were going to have sex with this boy that made fun of you for money? I had hoped I raised you better, " +
                "but I guess this is what you are. ",
            button: [
                { chatID: 26, text: "I wasn't going to have sex with him! ", callback: "ll4" }
            ]
        },
        {
            chatID: 11,
            speaker: "random",
            text: "Hey you. I need some of that girl dick. you down? ",
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
            text: "Now that you're cuffed and can't get away I can take this off and reveal myself. " +
                "Surprised? I'm going to rape your tiny dicklette " +
                "and shoot your cum into my dripping pussy. You're going to love it. Then I'm going to take " + 
                "a picture and send it to " + sc.n("zoey") + " so you will know what it feels like to be betrayed. ",
            button: [
                { chatID: 15, text: "What! No no no no no", callback: "c3" }
            ]
        },
        {
            chatID: 15,
            speaker: "chloe",
            text: "Like how easily my sloppy dripping pussy rides up and down your cock. I can feel how " +
                "hard you are. " + sc.n("zoey") + " is going to be so mad. She'll probably never speak to you " +
                "again and you won't have any friends. It's really better this way. A slut like you will always be " +  
                "a terrible firend. ",
            button: [
                { chatID: 16, text: "Get off of me! Please don't tell her! ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "chloe",
            text: "You fucking ruined my chances with her. Now I'm going to fucking ruin both of your lives! Go ahead, " +
                "beg me not to tell. Tell me you'll do anything for me to keep my mouth shut. " +
                "Beg me you asshole! ",
            button: [
                { chatID: 42, text: "I'm begging. I'll do anything! ", callback: "c4" }
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
                { chatID: 24, text: "Yes", callback: "trio1" }
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
                { chatID: 39, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "river",
            text: "Oh yes you are. I came in here to fuck something, and you look like something to me. Nurse lady you can join " +
                "in too. I do love fuckin' MILFs. ",
            button: [
                { chatID: 27, text: "Uhhh no", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "Oh my. You are cute but I was just here because I heard my little girl was working as a prostitute. I " +
                "had to see for myself. But.... If she's going to be a whore I guess this may be a good lesson for her. " +
                "Get up. Get on your knees. Open your mouth like a good prostitute. ",
            button: [
                { chatID: 28, text: "!", callback: "ll5" }
            ]
        },
        {
            chatID: 28,
            speaker: "river",
            text: "That's why I'm talking about! I used to kick your ass, now I'm going to fuck your ass! ",
            button: [
                { chatID: 30, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "landlord",
            text: "This may be a tough lesson to swallow, but he's right. You've made your choice of what kind of girl you " +
                "are. Given your bad grades and inability to hold a job, this just may your best life, laying here on your " +
                "back taking cocks for money. We all have a differnt path in life, and this looks like your path. Let " +
                "me help guide you on your path. ",
            button: [
                { chatID: 30, text: "hmmm....", callback: "ll6" }
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "Don't think about the man attached to the dick. Just think about that big fat juicy dick entering your wet " + 
                "warm mouth. That's what you're here for isn't it. That dick. ",
            button: [
                { chatID: 31, text: "mmmMMmmmm", callback: "ll7" }
            ]
        },
        {
            chatID: 31,
            speaker: "river",
            text: "Oh yeah she likes that dick! I can feel her tongue licking up and down my cock shaft. ",
            button: [
                { chatID: 32, text: "*slurp* Huh?", callback: "ll8" }
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "Even when you hate this bully you can't help but show what a cock hungry whore you are.  " +
                "Bend over my little slutty girl and show him how hungry for cock you are. ",
            button: [
                { chatID: 33, text: "What? No no no no no! Not him! Please don't do this. ", callback: "ll9" }
            ]
        },
        {
            chatID: 33,
            speaker: "landlord",
            text: "Jam your cock in my little sissy girl. Make her squal like a whore. ",
            button: [
                { chatID: 34, text: "....Oh no...", callback: "ll10" }
            ]
        },
        {
            chatID: 34,
            speaker: "river",
            text: "Oh yes! ",
            button: [
                { chatID: 35, text: "*moan*", callback: "ll11" }
            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "That's a good girl. Take it all the way. Be a good little cum dump for " + sc.n("landlord") + ". ",
            button: [
                { chatID: 36, text: "Gaaaaa  mmMMmmmmm", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "river",
            text: "ffff-f-f-fuck I'm going to cum in this sweet ass! ",
            button: [
                { chatID: 37, text: "OohhoOOoooooo MmmmMMmmmmm", callback: "ll12" }
            ]
        },
        {
            chatID: 37,
            speaker: "landlord",
            text: "See. Doesn't that feel right. When " + sc.n("bigguy") + " makes love to me there is no better feeling than " +
                "letting his cum drip out before I run to my toilet and squeeze it out. I see this is what you are now, " +
                "A dum dump whore. Wear it with pride. Cum is what built our home amd put food on our table...",
            button: [
                { chatID: 38, text: "...", callback: "ll13" }
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "...and cum is my greatest love in life. You keep making something of yourself, even if that something " +
                "is a whore. ",
            button: [
                { chatID: 1, text: "[Stand at the door]", callback: "private2b" },
                { chatID: 2, text: "[Stick your ass out the door]", callback: "private2a" },
                { chatID: -1, text: "[Leave]", callback: "reset0" }
            ]
        },
        {
            chatID: 39,
            speaker: "holly",
            text: "I hope you're ready sugar, 'cause you're in for one hell of a pounding. ",
            button: [
                { chatID: -1, text: "oh yeah!", callback: "trio2" }
            ]
        },
        {
            chatID: 40,
            speaker: "molly",
            text: "Well that was more fun than a possum riding down a greased up slip 'n slide! We'll have to do this again! ",
            button: [
                { chatID: 41, text: "oh yeah!", callback: "trio3" }
            ]
        },
        {
            chatID: 41,
            speaker: "thinking",
            text: "That was awesome. I'm so full of cum.... ",
            button: [
                { chatID: 1, text: "[Stand at the door]", callback: "private2b" },
                { chatID: 2, text: "[Stick your ass out the door]", callback: "private2a" },
                { chatID: -1, text: "[Leave]", callback: "reset0" }
            ]
        },
        {
            chatID: 42,
            speaker: "chloe",
            text: "Fuck you. Eat your cum out of my pussy asshole. I'm going to send your precious friend a picture of " +
                "you eating my dirty wet pussy dripping with your cum. Rot in hell you son of a bitch! ",
            button: [
                { chatID: 43, text: "HhhmmmHHHmmmm mmmm", callback: "c5" }
            ]
        },
        {
            chatID: 43,
            speaker: "p",
            text: "Looks like you got yourself a bit tied up. I'll get you free. You should be more careful with who you let in. ",
            button: [
                { chatID: 44, text: "I will, thanks. ", callback: "c6" }
            ]
        },
        {
            chatID: 44,
            speaker: "thinking",
            text: "Wow that was crazy. I hope she didn't send that photo..... Oh. It looks like " + sc.n("zoey") + " is calling " +
                "me. So I guess she did send that picture. Damn it!",
            button: [
                { chatID: -1, text: "Answer phone. ", callback: "c7" }
            ]
        },
        {
            chatID: 45,
            speaker: "random",
            text: "This is still in progress. Future release",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};