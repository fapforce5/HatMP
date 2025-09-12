//Room name
var room183 = {};
room183.main = function () {

    if (g.pass === "riverstart0") {
        nav.bg("183_pinkroom/ll1.jpg");
        chat(0, 183);
        g.pass = null;
    }
    else if (g.pass === "beaver0") {
        nav.bg("183_pinkroom/trio0.jpg");
        chat(16, 183);
        g.pass = null;
    }
    else {
        if (!(g.pass === "triostart0" || g.pass === "bbc0" || g.pass === "femdom0" || g.pass === "bwc0")) {
            g.pass = "triostart0";
            console.log("g.pass miss ");
            console.log(g.pass);
        }
        switch (g.pass) {
            case "bbc0":
                g.internal = {
                    customer: 0,
                    step: 0
                }
                break;
            case "triostart0":
                g.internal = {
                    customer: 1,
                    step: 0
                }
                break;
            case "femdom0":
                g.internal = {
                    customer: 2,
                    step: 0
                }
                break;
            case "bwc0":
                g.internal = {
                    customer: 3,
                    step: 0
                }
                break;
        }
        //g.pass = null;
        nav.bg("183_pinkroom/pr_" + g.internal.customer + "_0.jpg");
        chat(100, 183);
    }
};

room183.btnclick = function (name) {
    switch (name) {
        case "whore":
            if (gv.get("energy") < 25)
                char.room(213);
            else {
                g.internal = { assout: true, customer: 0, s: 0, t: 0 };
                nav.killbutton("whore");
                chat(0, 183);
            }
            break;
        case "fuck2":
            if (g.internal.step > 3) {
                switch (g.internal.customer) {
                    case 0:
                        levels.anal(4, false, "m", true, "!bbc");
                        break;
                    case 1:
                        levels.anal(3, false, "m", true, "!bwc");
                        levels.gavehandjob("m", "!man");
                        levels.gavehandjob("m", "!man");
                        break;
                    case 2:
                        levels.anal(6, false, "f", false, "!girl");
                        break;
                    case 3:
                        levels.anal(3, false, "m", false, "!bwc");
                        levels.oral(3, "m", "!bwc", true);
                        break;
                }
                levels.mod("whore", 25);
                nav.killbutton("fuck2");
                gv.mod("money", 30 + (levels.get("whore").l * 5));
                levels.mod("whore", 30);
                chat(101, 183);
            }
            else {
                nav.bg("183_pinkroom/pr_" + g.internal.customer + "_" + g.internal.step + ".jpg");
            }
            g.internal.step++;
            break;
        case "trio":
            nav.bg("183_pinkroom/trio" + g.pass + ".jpg");
            g.pass++;
            if (g.pass === 7) {
                nav.killbutton("trio");
                chat(22, 183);
            }
            break;
        default:
            break;
    }
};

room183.chatcatch = function (callback) {
    switch (callback) {
        case "fuck1":
            g.internal.step = 1;
            nav.takeit("fuck2");
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
            nav.bg("183_pinkroom/pr_" + g.internal.customer + "_3.jpg");
            break;
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
        case "trio1":
            nav.bg("183_pinkroom/" + callback + ".jpg");
            break;
        case "ll13":
            sc.completeMissionTask("landlord", "misc", 3);
            sc.modLevel("landlord", 50, 10);
            sc.modLevel("river", 100, 10);
            levels.mod("whore", 25);
            levels.anal(4, false, "m", true, "river");
            levels.oral(4, "m", "river", false, null, true);
            break;






        case "c0":
            nav.killall();
            nav.bg("183_pinkroom/c0.jpg");
            break;
        case "c1":
            nav.killall();
            nav.bg("183_pinkroom/c1.jpg");
            break;
        case "c2":
            nav.bg("183_pinkroom/c2.jpg");
            break;
        case "c3":
            nav.bg("183_pinkroom/c3.jpg");
            break;
        case "c4":
            nav.bg("183_pinkroom/c4.jpg");
            break;
        case "c5":
            pic.add("chloe");
            nav.bg("183_pinkroom/c5.jpg");
            break;
        case "c6":
            nav.bg("183_pinkroom/trio_bad.jpg");
            break;
        case "c7":
            menu.initBuild("init");
            nav.buildnav([183]);
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
            nav.bg("183_pinkroom/trio0.jpg");
            if (sc.getEvent("holly", -1))
                chat(18, 183);
            else
                chat(21, 183);
            break;
        case "trio2":
            nav.bg("183_pinkroom/trio2.jpg");
            g.pass = 3;
            nav.takeit("trio");
            break;
        case "trio3":
            nav.bg("183_pinkroom/pr_1_3.jpg");
            levels.anal(4, true, "n", true, "holly");
            levels.oral(4, "n", "molly", true);
            levels.gothandjob("n", "molly");
            levels.mod("whore", 25);
            break;
        case "trio_bad":
            nav.bg("183_pinkroom/trio_bad.jpg");
            break;
        case "resetWhore":
            nav.killbutton("f");
            break;
        case "leave":
            g.pass = "dirtydirtywhore"
            char.room(215);
            break;
        case "relax":
            char.room(185);
            break;
        default:
            break;
    }
};

room183.chat = function (chatID) {
    if (chatID === 100) {
        var chat100 = [
            "I'm going to bend you into a sissy pretzel",
            "We love teaming up on hot chicks, and you're the hottest!!!! ",
            "You will feel the flame of my dragon cock!",
            "I so want to be balls deep in that asshole!"
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat100[g.internal.customer],
            button: [
                { chatID: -1, text: "Come and get it!", callback: "fuck1" },
            ]
        };
    }
    if (chatID === 101) {
        var chat101 = [
            "You are such a tight little slut! My big beautiful cock loves little white sissy whores",
            "We love how cock hungry you are. We'll be back to fill you up again. ",
            "My purple dragon cock loves your tight little hole! We'll be back to split you open again!",
            "I love my women like I love my trucks. Dirty and ready to play rough!"
        ];
        return {
            chatID: 101,
            speaker: "random",
            text: chat101[g.internal.customer],
            button: [
                { chatID: -1, text: "OoooooOOoooOOo", callback: "leave" },
                { chatID: -1, text: "Hang out in your room for a bit", callback: "relax" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "What the hell do you think you're doing! I can't believe you're selling your ass like a common " +
                "whore! I take that back, I do believe it. Bending over for this man that you don't even know to " +
                "show your sissy pussy and get violated by his cock. I don't even know what to say! ",
            button: [
                { chatID: 1, text: sc.n("landlord") + "?", callback: "ll2" }
            ]
        },
        {
            chatID: 1,
            speaker: "river",
            text: "You got yelled at by your " + sc.n("landlord") + "! I always knew you were a loser, ever since I hung " +
                "you up by your underwear in the hallway and got the entire school to call you skid mark. ",
            button: [
                { chatID: 2, text: "Shut up " + sc.n("river") + ". ", callback: "ll3" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "You were going to have sex with this boy that made fun of you for money? I had hoped I raised you better, " +
                "but I guess this is what you are. ",
            button: [
                { chatID: 3, text: "I wasn't going to have sex with him! ", callback: "ll4" }
            ]
        },
        {
            chatID: 3,
            speaker: "river",
            text: "Oh yes you are. I came in here to fuck something, and you look like something to me. Nurse lady you can join " +
                "in too. I do love fuckin' MILFs. ",
            button: [
                { chatID: 4, text: "Uhhh no", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Oh my. You are cute but I was just here because I heard my little girl was working as a prostitute. I " +
                "had to see for myself. But.... If she's going to be a whore I guess this may be a good lesson for her. " +
                "Get up. Get on your knees. Open your mouth like a good prostitute. ",
            button: [
                { chatID: 5, text: "!", callback: "ll5" }
            ]
        },
        {
            chatID: 5,
            speaker: "river",
            text: "That's why I'm talking about! I used to kick your ass, now I'm going to fuck your ass! ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "This may be a tough lesson to swallow, but he's right. You've made your choice of what kind of girl you " +
                "are. Given your bad grades and inability to hold a job, this just may your best life, laying here on your " +
                "back taking cocks for money. We all have a different path in life, and this looks like your path. Let " +
                "me help guide you on your path. ",
            button: [
                { chatID: 7, text: "hmmm....", callback: "ll6" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Don't think about the man attached to the dick. Just think about that big fat juicy dick entering your wet " +
                "warm mouth. That's what you're here for isn't it. That dick. ",
            button: [
                { chatID: 8, text: "mmmMMmmmm", callback: "ll7" }
            ]
        },
        {
            chatID: 8,
            speaker: "river",
            text: "Oh yeah she likes that dick! I can feel her tongue licking up and down my cock shaft. ",
            button: [
                { chatID: 9, text: "*slurp* Huh?", callback: "ll8" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Even when you hate this bully you can't help but show what a cock hungry whore you are.  " +
                "Bend over my little slutty girl and show him how hungry for cock you are. ",
            button: [
                { chatID: 10, text: "What? No no no no no! Not him! Please don't do this. ", callback: "ll9" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "Jam your cock in my little sissy girl. Make her squal like a whore. ",
            button: [
                { chatID: 11, text: "....Oh no...", callback: "ll10" }
            ]
        },
        {
            chatID: 11,
            speaker: "river",
            text: "Oh yes! ",
            button: [
                { chatID: 12, text: "*moan*", callback: "ll11" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "That's a good girl. Take it all the way. Be a good little cum dump for " + sc.n("landlord") + ". ",
            button: [
                { chatID: 13, text: "Gaaaaa  mmMMmmmmm", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "river",
            text: "ffff-f-f-fuck I'm going to cum in this sweet ass! ",
            button: [
                { chatID: 14, text: "OohhoOOoooooo MmmmMMmmmmm", callback: "ll12" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "See. Doesn't that feel right. When " + sc.n("bigguy") + " makes love to me there is no better feeling than " +
                "letting his cum drip out before I run to my toilet and squeeze it out. I see this is what you are now, " +
                "A dum dump whore. Wear it with pride. Cum is what built our home and put food on our table...",
            button: [
                { chatID: 15, text: "...", callback: "ll13" }
            ]
        },
        {
            chatID: 15,
            speaker: "landlord",
            text: "...and cum is my greatest love in life. You keep making something of yourself, even if that something " +
                "is a whore. ",
            button: [
                { chatID: -1, text: "[Whimper back out the door]", callback: "leave" },
                { chatID: -1, text: "Hang out in your room for a bit", callback: "relax" }
            ]
        },
        {
            chatID: 16,
            speaker: "holly",
            text: "We wanted to reward you for helping us out. ",
            button: [
                { chatID: 17, text: "hum?", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "dolly",
            text: "And you're as pretty as a spotted horse in a daisy pasture. ",
            button: [
                { chatID: 18, text: "*blush*", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "molly",
            text: "So we have a present for you.",
            button: [
                { chatID: 19, text: "Yes", callback: "trio1" }
            ]
        },
        {
            chatID: 19,
            speaker: "molly",
            text: "It's our cocks. We're going to fuck you. ",
            button: [
                { chatID: 20, text: "Oh", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "dolly",
            text: "Get ready to put the dill in our pickle cutie.",
            button: [
                { chatID: 21, text: "...", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "holly",
            text: "I hope you're ready sugar, 'cause you're in for one hell of a pounding. ",
            button: [
                { chatID: -1, text: "oh yeah!", callback: "trio2" }
            ]
        },
        {
            chatID: 22,
            speaker: "molly",
            text: "Well that was more fun than a possum riding down a greased up slip 'n slide! We'll have to do this again! ",
            button: [
                { chatID: 23, text: "oh yeah!", callback: "trio3" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "That was awesome. I'm so full of cum.... ",
            button: [
                { chatID: -1, text: "Fart cum on you way back to the door. ", callback: "leave" },
                { chatID: -1, text: "Hang out in your room for a bit", callback: "relax" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};