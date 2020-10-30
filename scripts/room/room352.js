//Room name
var room352 = {};
room352.main = function () {
    if (g.pass === "follow352Chastity") {
        g.pass = "";
        nav.button({
            "type": "img",
            "name": "ll",
            "left": 622,
            "top": 23,
            "width": 508,
            "height": 1057,
            "image": "352_jackoff/m.png"
        }, 352);
        nav.bg("352_jackoff/waitroom.jpg");
        chat(31, 352);
    }
    else {
        g.pass = {
            shirt: cl.c.shirt,
            pants: cl.c.pants,
            dress: cl.c.dress,
            swimsuit: cl.c.swimsuit,
            pj: cl.c.pj,
            socks: cl.c.socks,
            shoes: cl.c.shoes
        };
        cl.c.shirt = cl.c.pants = cl.c.swimsuit = cl.c.pj = null;
        cl.c.dress = "nu";
        cl.c.socks = "s";
        cl.c.shoes = "nu";
        cl.display();
        if (sc.getstep("landlord") === 9) {
            nav.button({
                "type": "btn",
                "name": "ll",
                "left": 622,
                "top": 23,
                "width": 508,
                "height": 1057,
                "image": "352_jackoff/m.png"
            }, 352);
            zcl.displayMain(80, 750, .20, "panties shirt pants socks shoes bra", true);
            chat(0, 352);
            g.internal = {
                success: 0,
                fail: 0,
                events: [
                    { t: "boob", s: 1, c: 0, x: null },
                    { t: "butt", s: 0, c: 1, x: null },
                ]
            };
        }
        else {
            var howMany = Math.floor(Math.random() * 9);
            var i, s, t, q, r, howmanyReally;
            switch (howMany) {
                case 0:
                    howmanyReally = 0;
                    break;
                case 1:
                case 2:
                case 3:
                case 4:
                    howmanyReally = 1;
                    break;
                case 5:
                case 6:
                case 7:
                    howmanyReally = 2;
                    break;
                case 8:
                    howmanyReally = 3;
                    break;
                default:
                    howmanyReally = 4;
                    break;
            }

            g.internal = {
                success: 0,
                fail: 0,
                events: new Array()
            };

            for (i = 0; i < howmanyReally; i++) {
                s = Math.floor(Math.random() * 3);
                q = Math.floor(Math.random() * 9);
                if (q < 2)
                    s = 1;
                else if (q < 4)
                    s = 2;
                else if (q < 7)
                    s = 3;
                else if (q < 8)
                    s = 4;
                else
                    s = 5;

                r = Math.floor(Math.random() * 4);
                if (r === 0) t = "boob";
                else if (r === 1) t = "butt";
                else t = "mouth";

                g.internal.events.push({ t: t, s: s, c: Math.floor(Math.round() * 2), x: null });
                nav.bg("352_jackoff/waitroom.jpg");
                chat(4, 352);
            }
        }
    }
};

room352.btnclick = function (name) {
    switch (name) {
        case "donor":
            switch (g.internal.events[0].t) {
                case "boob":
                    chat(6, 352);
                    break;
                case "butt":
                    chat(18, 352);
                    break;
                case "mouth":
                    chat(25, 352);

                    break;
            }
            break;
        default:
            break;
    }
};

room352.chatcatch = function (callback) {
    switch (callback) {
        case "waitroom":
            if (g.internal.events.length === 0) {
                nav.killall();
                nav.bg("352_jackoff/waitroom.jpg");
                nav.button({
                    "type": "btn",
                    "name": "ll",
                    "left": 622,
                    "top": 23,
                    "width": 508,
                    "height": 1057,
                    "image": "352_jackoff/m.png"
                }, 352);
                chat(24, 352);
            }
            else {
                nav.killall();
                nav.bg("352_jackoff/waitroom.jpg");
                chat(4, 352);
            }
            break;
        case "waitroom1":
            nav.bg("352_jackoff/waitroom1.jpg");
            break;
        case "begin":
            nav.killall();
            nav.bg("352_jackoff/room.jpg");
            zcl.displayMain(20, 500, .22, "panties shirt pants socks shoes bra", false);
            if (g.internal.events[0].c === 0) {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 1464,
                    "top": 325,
                    "width": 456,
                    "height": 755,
                    "image": "352_jackoff/w1.png"
                }, 352);
            }
            else {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 1176,
                    "top": 319,
                    "width": 744,
                    "height": 761,
                    "image": "352_jackoff/b1.png"
                }, 352);
            }

            break;
        case "showTittes":
            zcl.displayMain(-500, 100, .40, "panties socks shoes bra", false);
            if (cl.c.chest <= g.internal.events[0].s) {
                nav.killbutton("donor");
                zcl.kneel(-1000, -1000, 1.6, "", true);
                if (g.internal.events[0].c === 0) {
                    nav.button({
                        "type": "zbtn",
                        "name": "donor",
                        "left": 979,
                        "top": 292,
                        "width": 941,
                        "height": 788,
                        "image": "352_jackoff/w2.png"
                    }, 352);
                }
                else {
                    nav.button({
                        "type": "zbtn",
                        "name": "donor",
                        "left": 1011,
                        "top": 250,
                        "width": 909,
                        "height": 830,
                        "image": "352_jackoff/b2.png"
                    }, 352);
                }
                g.mod("sissy", 10);
                chat(13, 352);
            }
            else {
                g.mod("sissy", 5);
                chat(12, 352);
            }
            break;
        case "showass":
            nav.button({
                "type": "zbtn",
                "name": "mybutt",
                "left": 0,
                "top": 0,
                "width": 1141,
                "height": 1080,
                "image": "352_jackoff/butt.png"
            }, 352);

            if (cl.c.leg <= g.internal.events[0].s) {
                nav.killbutton("donor");
                zcl.kneel(-1000, -1000, 1.6, "", true);
                if (g.internal.events[0].c === 0) {
                    nav.button({
                        "type": "zbtn",
                        "name": "donor",
                        "left": 979,
                        "top": 292,
                        "width": 941,
                        "height": 788,
                        "image": "352_jackoff/w2.png"
                    }, 352);
                }
                else {
                    nav.button({
                        "type": "zbtn",
                        "name": "donor",
                        "left": 1011,
                        "top": 250,
                        "width": 909,
                        "height": 830,
                        "image": "352_jackoff/b2.png"
                    }, 352);
                }
                chat(20, 352);
                g.mod("sissy", 10);
            }
            else {
                g.mod("sissy", 5);
                chat(19, 352);
            }
            break;
        case "getLandlord":
            nav.button({
                "type": "btn",
                "name": "ll",
                "left": 622,
                "top": 23,
                "width": 508,
                "height": 1057,
                "image": "352_jackoff/m.png"
            }, 352);
            break;
        case "breakroomFail":
            g.internal.fail++;
            if (g.internal.events.length > 1) {
                g.internal.events.splice(0, 1);

            }
            break;
        case "endRotation":

            cl.c.shirt = g.pass.shirt;
            cl.c.pants = g.pass.pants;
            cl.c.dress = g.pass.dress;
            cl.c.swimsuit = g.pass.swimsuit;
            cl.c.pj = g.pass.pj;
            cl.c.socks = g.pass.socks;
            cl.c.shoes = g.pass.shoes;
            cl.display();
            char.room(0);
            break;
        case "jackit":
            nav.killbutton("donor");
            if (g.internal.events[0].c === 0) {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 720,
                    "top": 0,
                    "width": 1200,
                    "height": 1080,
                    "image": "352_jackoff/wj.gif"
                }, 352);
            }
            else {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 720,
                    "top": 0,
                    "width": 1200,
                    "height": 1080,
                    "image": "352_jackoff/bj.gif"
                }, 352);
            }
            break;
        case "jackit1":
            nav.killbutton("donor");
            if (g.internal.events[0].c === 0) {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 642,
                    "top": 167,
                    "width": 1278,
                    "height": 913,
                    "image": "352_jackoff/wcum.png"
                }, 352);
            }
            else {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 636,
                    "top": 130,
                    "width": 1284,
                    "height": 950,
                    "image": "352_jackoff/bcum.png"
                }, 352);
            }

            break;
        case "jackit2":
            nav.killbutton("donor");
            zcl.kill();
            if (g.internal.events[0].c === 0) {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 1464,
                    "top": 325,
                    "width": 456,
                    "height": 755,
                    "image": "352_jackoff/w1.png"
                }, 352);
            }
            else {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 1176,
                    "top": 319,
                    "width": 744,
                    "height": 761,
                    "image": "352_jackoff/b1.png"
                }, 352);
            }
            nav.button({
                "type": "zbtn",
                "name": "donor",
                "left": 0,
                "top": 396,
                "width": 872,
                "height": 618,
                "image": "352_jackoff/jackit2.png"
            }, 352);
            break;
        case "jackit2ass":
            nav.killbutton("mybutt");
            room352.chatcatch("jackit2");
            break;
        case "jackit3":
            nav.killall();
            nav.bg("352_jackoff/coldStorage.jpg");
            room352.chatcatch("prepNextSuccess");
            break;
        case "prepNextSuccess":
            g.internal.success++;
            if (g.internal.events.length > 0)
                g.internal.events.splice(0, 1);

            break;
        case "complete0":
            var thisSuccess = g.internal.success;
            var thisFail = g.internal.fail;
            var llStepComplete = sc.getstep("landlord");
            g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 17, 0, 0, 0);
            if (llStepComplete < 15) {
                llStepComplete += thisSuccess;
                if (llStepComplete >= 15) {
                    sc.setstep("landlord", 15);
                    chat(30, 352);
                }
                else {
                    sc.setstep("landlord", llStepComplete);
                    if (thisSuccess === 0 && thisFail === 0)
                        g.internal = "Sorry, it seems no one needed your help today. Don't worry honey if you keep working they'll cum.";
                    else if (thisSuccess === 0)
                        g.internal = "If you want to work your way back into my house you'll have to work harder to earn my trust.";
                    else if (thisFail === 0)
                        g.internal = "You did so good today honey! If you keep this up you may just work your way back into my home.";
                    else
                        g.internal = "";

                    chat(999, 352);
                }
            }
            else {
                if (thisSuccess === 0 && thisFail === 0)
                    g.internal = "Sorry, it seems no one needed your help today. Don't worry honey if you keep working they'll cum.";
                else if (thisSuccess === 0)
                    g.internal = "If you want to be a proper girl you need to work on being prettier.  ";
                else if (thisFail === 0)
                    g.internal = "You did so good today honey! You're such a pretty little girl!";
                else
                    g.internal = "I suppose you did fine. Just keep working harder and you'll be a sexy as your " + sc.n("landlord") + ".";
                chat(999, 352);
            }
            
            break;
        case "l1":
            nav.killall();
            g.mod("sissy", 15);
            nav.bg(g.internal.events[0].c === 0 ? "352_jackoff/wl1.jpg" : "352_jackoff/bl1.jpg");
            break;
        case "l2":
        case "l3":
        case "l4":
            nav.killall();
            nav.bg(g.internal.events[0].c === 0 ? ("352_jackoff/w" + callback + ".jpg") : ("352_jackoff/b" + callback + ".jpg"));
            break;
        case "l5":
            nav.bg("352_jackoff/room.jpg");
            if (g.internal.events[0].c === 0) {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 720,
                    "top": 0,
                    "width": 1200,
                    "height": 1080,
                    "image": "352_jackoff/wj.gif"
                }, 352);
            }
            else {
                nav.button({
                    "type": "zbtn",
                    "name": "donor",
                    "left": 720,
                    "top": 0,
                    "width": 1200,
                    "height": 1080,
                    "image": "352_jackoff/bj.gif"
                }, 352);
            }
            break;
        case "backin":
            g.roomMapAccess(16, true, true);
            sc.setstep("landlord", 16);
            sc.setstep("lola", 9);
            sc.setstep("eva", 8);
            sc.setstep("me", -13);
            g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 17, 0, 0, 0);
            char.room(0);
            break;
        default:
            break;
    }
};

room352.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 26,
            speaker: "landlord",
            text: g.internal,
            button: [
                { chatID: -1, text: "...", callback: "endRotation" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "landlord",
                text: "Well don't you look pretty. You'll wait in the side room till I call you. You may need to help with many men, or none, " +
                    "it really depends on how many we get that day. Most of our donors can just come in and make their deposit and be on their way. " +
                    "but some need a little extra. I'll take care of the normal customers, I need you to help with the more difficult ones. ",
                button: [
                    { chatID: 1, text: "What will I do if you call me?", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "landlord",
                text: "Oh hahaha. You are still a simple girl. The great thing about our donors are that most of them are very verbal " +
                    "and have no problem telling you exactly what they want. If you can't help them call me in and I'll take care of it.",
                button: [
                    { chatID: 2, text: "Ok, I'll call you in", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "landlord",
                text: "Just know I only pay you for the samples you collect. So if you need to call me in I'm not going to pay you for " +
                    "work I do. ",
                button: [
                    { chatID: 3, text: "Yes " + sc.n("landlord"), callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "Ok, now go sit in the back room till I call you.",
                button: [
                    { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "waitroom" }
                ]
            },
            {
                chatID: 4,
                speaker: "random",
                text: "** Elevator Music Plays **",
                button: [
                    { chatID: 5, text: "Wait...", callback: "waitroom1" }
                ]
            },
            {
                chatID: 5,
                speaker: "landlord",
                text: "I have a client ready",
                button: [
                    { chatID: -1, text: "[Assist the donor]", callback: "begin" }
                ]
            },
            {
                chatID: 6,
                speaker: "random",
                text: "Hay nurse! I need some help. Could you show me your titties while I do this?",
                button: [
                    { chatID: -1, text: "Sure!", callback: "showTittes" },
                    { chatID: 7, text: "oh no, I'll have to get another nurse ", callback: "getLandlord" },
                ]
            },
            {
                chatID: 7,
                speaker: "landlord",
                text: "Don't worry honey, It's not your fault you're not pretty enough. I'll take care of this. Now run along.",
                button: [
                    { chatID: -1, text: "Go back to the break room ", callback: "breakroomFail" },
                ]
            },
            {
                chatID: 8,
                speaker: "landlord",
                text: "I looks like everyone was able to jack themselves off today. Maybe next time honey.",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "endRotation" },
                ]
            },
            {
                chatID: 9,
                speaker: "landlord",
                text: "Awwww baby, you did so well today! I always knew deep down you were just a slutty girl, just like your " +
                    sc.n("landlord") + ".",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "endRotation" },
                ]
            },
            {
                chatID: 10,
                speaker: "landlord",
                text: "Today was not your day. If you keep working on yourself I know you'll be pretty someday, you're just not pretty yet.",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "endRotation" },
                ]
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "I suppose you did fine honey. Just keep working at it and you'll be pretty enough. ",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "endRotation" },
                ]
            },
            {
                chatID: 12,
                speaker: "random",
                text: "Oh, I like a bigger chest, those really aren't for me. Can you call in someone else?",
                button: [
                    { chatID: 7, text: "Awww, ok I'll call in the other nurse. ", callback: "getLandlord" },
                ]
            },
            {
                chatID: 13,
                speaker: "random",
                text: "Oh wow! Those are perfect! I can definitely jack it to those!",
                button: [
                    { chatID: 14, text: "...", callback: "jackit" },
                ]
            },
            {
                chatID: 14,
                speaker: "random",
                text: "Oh fuck I'm going to make a huge donation!!!!",
                button: [
                    { chatID: 15, text: "...", callback: "jackit1" },
                ]
            },
            {
                chatID: 15,
                speaker: "random",
                text: "Ohhh YEAAAAAAAAAA",
                button: [
                    { chatID: 16, text: "...", callback: "jackit2" },
                ]
            },
            {
                chatID: 16,
                speaker: "me",
                text: "What a wonderful donation. I'm going to put this in the donation room. The other nurse will see you out.",
                button: [
                    { chatID: 17, text: "...", callback: "jackit3" },
                ]
            },
            {
                chatID: 17,
                speaker: "me",
                text: "Another cup of sperm for the wall.",
                button: [
                    { chatID: -1, text: "...", callback: "waitroom" },
                ]
            },
            {
                chatID: 18,
                speaker: "random",
                text: "Hay nurse! I need some help. Could you show me that ass while I do this?",
                button: [
                    { chatID: -1, text: "Sure!", callback: "showass" },
                    { chatID: 7, text: "oh no, I'll have to get another nurse ", callback: "getLandlord" },
                ]
            },
            {
                chatID: 19,
                speaker: "random",
                text: "Oh, I like a big phat ass. Can you get me a nurse with an ass?",
                button: [
                    { chatID: 7, text: "Awww, ok I'll call in the other nurse. ", callback: "getLandlord" },
                ]
            },
            {
                chatID: 20,
                speaker: "random",
                text: "Now that a nice ass! It's making my cock hard baby!",
                button: [
                    { chatID: 21, text: "...", callback: "jackit" },
                ]
            },
            {
                chatID: 21,
                speaker: "random",
                text: "Oh fuck I'm going to make a huge donation!!!!",
                button: [
                    { chatID: 22, text: "...", callback: "jackit1" },
                ]
            },
            {
                chatID: 22,
                speaker: "random",
                text: "Ohhh YEAAAAAAAAAA",
                button: [
                    { chatID: 23, text: "...", callback: "jackit2ass" },
                ]
            },
            {
                chatID: 23,
                speaker: "me",
                text: "What a wonderful donation. I'm going to put this in the donation room. The other nurse will see you out.",
                button: [
                    { chatID: 17, text: "...", callback: "jackit3" },
                ]
            },
            {
                chatID: 24,
                speaker: "landlord",
                text: "That looks like that's all for today. ",
                button: [
                    { chatID: -1, text: "...", callback: "complete0" },
                ]
            },
            {
                chatID: 25,
                speaker: "random",
                text: "Hay I can't seem to get hard. Could you help me with this so I can make my donation?",
                button: [
                    { chatID: 26, text: "Sure. I can try licking it.", callback: "l1" },
                    { chatID: 7, text: "oh no, I'll have to get another nurse ", callback: "getLandlord" },
                ]
            },
            {
                chatID: 26,
                speaker: "random",
                text: "Oh yeah. Keep going",
                button: [
                    { chatID: 27, text: "*Slurp", callback: "l2" },
                ]
            },
            {
                chatID: 27,
                speaker: "random",
                text: "ohhhh yeah",
                button: [
                    { chatID: 28, text: "*Lick", callback: "l3" },
                ]
            },
            {
                chatID: 28,
                speaker: "random",
                text: "You're getting me hard!",
                button: [
                    { chatID: 29, text: "mmMMmMMmMMMMmmmmmm", callback: "l4" },
                ]
            },
            {
                chatID: 29,
                speaker: "random",
                text: "I got it from here sexy.",
                button: [
                    { chatID: 14, text: "**slurp", callback: "l5" },
                ]
            },
            {
                chatID: 30,
                speaker: "landlord",
                text: "You know " + sc.n("me") + " you have really suprised me! I thought you were going to do your typical bullshit " +
                "of working a little bit only to give up after it started to get a little bit hard. ",
                button: [
                    { chatID: 32, text: "...", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "landlord",
                text: "You're probably wondering why I brought you back here. We need to go over some things first. ",
                button: [
                    { chatID: 32, text: "...", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "landlord",
                text: "I'm not just going to let you back into my house. How I caught you with " + sc.n("lola") + " and " + sc.n("eva") +
                "was not acceptable. ",
                button: [
                    { chatID: 33, text: "oh what?", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "landlord",
                text: "You know very well what. You may be dressing like a girl, but I know your penis still controls you. I won't " +
                "let your penis anywhere near my sweet innocent girls",
                button: [
                    { chatID: 34, text: "Oh, it won't", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "landlord",
                text: "I don't believe you. I'm going to be watching you like a hawk when you're in my home. You WILL NOT lay " +
                "your dirty fingers or penis on " + sc.n("lola") + " or " + sc.n("eva") + ". Can I trust you in my house again?",
                button: [
                    { chatID: 35, text: "Oh yeah. I'll keep my penis.. err fingers off of them.", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "landlord",
                text: "Don't screw this up or I'll never ever let you back into my house, understand?",
                button: [
                    { chatID: 36, text: "Yes " + sc.n("landlord"), callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "landlord",
                text: "Ok honey. You're room is just the way you left it. Feel free to come by anytime sweety.",
                button: [
                    { chatID: -1, text: "Thank you " + sc.n("landlord") + ". See you at home!", callback: "backin" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};