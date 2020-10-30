//sperm bank

var room350 = {};
room350.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "nurse",
            "left": 1038,
            "top": 455,
            "width": 166,
            "height": 292,
            "image": "350_spermBank/nurse.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 350);
    });
    nav.buildnav(navList);

    if (g.pass === "350_nursePay") {
        g.pass = null;
        chat(8, 350);
    }
};

room350.btnclick = function (name) {
    switch (name) {
        case "nurse":
            var llStep = sc.getstep("landlord");
            if (llStep === 6) {
                if (cl.appearance() > 0) {
                    sc.setstep("landlord", 7);
                    chat(11, 350);
                }
                else
                    chat(0, 350);
            }
            else if (llStep > 8) {
                if (g.hourBetween(6, 10)) {
                    if (cl.getBodyHair() !== null)
                        chat(30, 350);
                    else if (cl.c.hairLength < 2)
                        chat(31, 350);
                    else if (llStep === 9)
                        chat(32, 350);
                    else if(llStep < 15)
                        chat(33, 350);
                    else
                        chat(41, 350)
                }
                else
                    chat(29, 350);
            }
            else if (sc.getstep("landlord") > 6) {
                if (cl.appearance() > 1) {
                    chat(16, 350);
                }
                else
                    chat(15, 350);
            }
            else if (sc.checkevent("landlord", -1))
                chat(9, 350);
            else if (sc.getstep("landlord") > 2) {
                if (cl.getCum() < .75)
                    chat(3, 350);
                else
                    chat(6, 350);
            }
            else
                chat(0, 350);
            break;
        default:
            break;
    }
};

room350.chatcatch = function (callback) {
    switch (callback) {
        case "waitingRoom":
            g.pass = "landlord";
            char.room(351);
            break;
        case "payTheMan":
            g.mod("money", 30);
            break;
        case "leave":
            char.room(0);
            break;
        case "leave9":
            sc.setstep("landlord", 9);
            char.addtime(182);
            char.room(0);
            break;
        case "follow352":
            g.pass = "";
            char.room(352);
            break;
        case "checkCash":
            if (g.get("money") > 499)
                chat(39, 350);
            else
                chat(40, 350);
            break;
        case "follow352Chastity":
            g.pass = "follow352Chastity";
            g.mod("money", -500);
            char.room(352);
            break;
        default:
            break;
    }
};

room350.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: sc.n("me") + " what are you doing here?",
            button: [
                { chatID: 1, text: "I came to make a deposit", callback: "" },
                { chatID: 2, text: "Just wanted to say hi.", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "I don't think so. We don't take sperm from college dropouts.",
            button: [
                { chatID: -1, text: "Awww shucks", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "That's nice, now run along.",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: sc.n("me") + " what are you doing here?",
            button: [
                { chatID: 4, text: "I came to make a deposit", callback: "" },
                { chatID: 2, text: "Just wanted to say hi.", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Has it been more than 3 days since you've touched yourself?",
            button: [
                { chatID: 5, text: "wel.... no", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "You bring great shame to your family, you truly are a filthy pig...",
            button: []
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: sc.n("me") + " what are you doing here?",
            button: [
                { chatID: 7, text: "I came to make a deposit", callback: "" },
                { chatID: 2, text: "Just wanted to say hi.", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "sigh.... you're lucky our stocks are so low due to this damned sperm thief. Go into waiting room 1, disrobe, and I'll be right in.",
            button: [
                { chatID: -1, text: "Yes " + sc.n('landlord') + ". [Go to waiting room]", callback: "waitingRoom" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "Ok " + sc.n("me") + ", since your sperm is so basic you can have $30 for it. It's not much but, " +
                "neither is the demand for drop out sperm. ",
            button: [
                { chatID: -1, text: "[Receive $30]", callback: "payTheMan" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Uggghhhh What are you doing here?",
            button: [
                { chatID: 10, text: "Making a deposit?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You have lost your damned mind! You're lucky I'm at work or I'd put a whooping to your backside.",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "So my loser boy has decided he's a girl now. I had a feeling this day would come. So are you still working or have you " +
                "decided to pass your time sucking cocks for money?",
            button: [
                { chatID: 12, text: "Well hello to you too " + sc.n("landlord") + ".", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "You know... Now that you you're a girl I can get you a job here. We always need more sperm extractor specialists. It doesn't pay " +
                "well, but if you do it at least I won't have to do it anymore. ",
            button: [
                { chatID: 13, text: "What that?", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "You're the hands on nurse that extracts the sperm from the client. I'll tell you what, if you do well I'll even let you back into the house " +
                "and into your old room. What do you think?",
            button: [
                { chatID: 14, text: "I could do that", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "I know you could, I've always known. If you're going to work as the sperm extractor specialist you need to make sure you look pretty. Wear " +
                "something sexy. The sexier you are the more you will make. Come see me later.",
            button: [
                { chatID: -1, text: "Thank you " + sc.n("landlord"), callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "landlord",
            text: "You're not pretty enough. Fix yourself up and come back.",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Well don't you look like a pretty little whore. I bet you're here to work as my assistant and extract cum?",
            button: [
                { chatID: 17, text: "Yes I would!", callback: "" },
                { chatID: -1, text: "Oh, what.. No, gross", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "landlord",
            text: "You know, I've watched you be a puddle of dissapointment for most of your life. After you graduated high school " +
                "you've just been a lazy lazy waste of space. But now, but now look at you.",
            button: [
                { chatID: 18, text: "...yes...", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "You've really put a lot of work into making yourself into a pretty little girl. I don't think I've seen you work harder " +
                "on anything in your life. Maybe it was my fault for hoping you'll become a proper and successful young man when all the time " +
                "you've just been a slutty whorish girl.",
            button: [
                { chatID: 19, text: "Not the whole time", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "landlord",
            text: "I suppose this is my fault. You've been around girls the entire time. You've never been properly shown how to be a boy. " +
                "From the looks of it, it seems too late to go down that path, this is the path you're on. As your " + sc.n("landlord") + 
            " I suppose it's my resonsiblility to help you on your path.",
            button: [
                { chatID: 20, text: "Help me?", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "Yes. I'm going to help you honey. AFter all I've been a girl for far longer than you, so I know a thing or two. " +
                "I'm going to make you my new project. What kind of girl are trying to be?",
            button: [
                { chatID: 21, text: "A nice sweet innocent girl", callback: "" },
                { chatID: 22, text: "A cum slut", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "landlord",
            text: "Oh hahaha. I don't believe you. I know you too well. Deep down I know you're the kind of girl that gives it up " +
                "on the first date. " + sc.n("lola") + " is the sweet innocent type. You're more like " + sc.n("eva") + ", but even more " +
            "so. ",
            button: [
                { chatID: 23, text: "oh.", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "That was just a test. I knew what a dirty dirty girl you are. I just wasn't sure if you knew yourself.",
            button: [
                { chatID: 23, text: "oh.", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "landlord",
            text: "What you were doing with your " + sc.n("el") + " was unforgiveable, but I'm willing to give you a second chance. " +
            "I'll let you back into my home if you help me out around here. ",
            button: [
                { chatID: 24, text: "ok, that could be fun.", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "landlord",
            text: "You're going to do all the things I hate doing. Organizing samples, greeting customers, and most importantly " +
            "assisting the donors. ",
            button: [
                { chatID: 25, text: "Assisting the donors?", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "Some men come in and have a hard time creating a donation, so it will be your responsibility to assit them. Some " +
            "just need a peek at your boobs, some need to check out your butt, and others need a help hand.",
            button: [
                { chatID: 26, text: "Helping hand, do you mean...", callback: "checkNext" },
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Yes, I mean you'll have to jack off their cocks. Now I know how much you love cum, but you can only use your hands. " +
            "Anything else will ruin the sample. ",
            button: [
                { chatID: 27, text: "I don't know if I can jack off stange men", callback: "" },
                { chatID: 28, text: "I will be the best sperm collecter you've seen!", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "I didn't ask you to tell me what a selfish little girl you are. This is your chance to actually do some work and " +
            "help your " + sc.n("landlord") + ". I'll be expecting you before 10:00 each morning. Now get out.",
            button: [
                { chatID: -1, text: ".... ok", callback: "leave9" },
            ]
        },
        {
            chatID: 28,
            speaker: "landlord",
            text: "I know. I suppose deep down I've always known. Now run along and come back before 10:00 to help " + sc.n("landlord") +
            " out. ",
            button: [
                { chatID: -1, text: ".... ok", callback: "leave9" },
            ]
        },
        {
            chatID: 29,
            speaker: "landlord",
            text: "Stop being a dissapointment. Come in on time.",
            button: [
                { chatID: -1, text: ".... ok", callback: "leave" },
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "Oh gross. You look disgusting. Barf. You need to shave before working here, no one wants a hairly little girl.",
            button: [
                { chatID: -1, text: ".... ok", callback: "leave" },
            ]
        },
        {
            chatID: 31,
            speaker: "landlord",
            text: "Oh dear. Your hair looks like a boy. You need to grow it out more if you want to service these men. ",
            button: [
                { chatID: -1, text: ".... ok", callback: "leave" },
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "I'm glad to see you can come in on time. I'm going to help you get ready for your first day of work. Follow me.",
            button: [
                { chatID: -1, text: "[Follow her]", callback: "follow352" },
            ]
        },
        {
            chatID: 33,
            speaker: "landlord",
            text: "Such a wonderful girl coming back into work and helping your " + sc.n("landlord") + ". Are you excited to get to work?",
            button: [
                { chatID: -1, text: "Yes I am", callback: "follow352" },
                { chatID: -1, text: "Oh no. Maybe later", callback: "" },
                { chatID: 34, text: "I'm working hard, isn't there some other way I could earn your trust back?", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "You know I should have expected you to try and get out working. You haven't changed at all have you? ",
            button: [
                { chatID: 35, text: "I have, I just didn't want to do that...", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "Oh, so you're Miss Hardworking Moneybags now? You haven't the slightest idea on how to do a good honest day's work.",
            button: [
                { chatID: 36, text: "I've changed. I've made all kinds of money. A ton of money.", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "landlord",
            text: "Really? If you're so rich you'll pay me for all that time you were freeloading off me. ",
            button: [
                { chatID: 37, text: "I'm tottally rich enough to do that, how much?", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "landlord",
            text: "I added it after you left. It comes out to $158,349. But for you I'll only charge you $500 because I'm your " +
            sc.n("landlord") + ".",
            button: [
                { chatID: -1, text: "I can totally pay you $500", callback: "checkCash" },
                { chatID: 38, text: "I don't have enough to pay you $500", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "I know. That's why you need to work. I'm willing to let you continue working here to show me that you've made a change. ",
            button: [
                { chatID: -1, text: "Thank you", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "landlord",
            text: "Oh wow, I'm rearely suprised, but you have done just that. I'll take that back rent. Follow me into the break room.",
            button: [
                { chatID: -1, text: "Pay your " + sc.n("landlord") + " $500", callback: "follow352Chastity" },
            ]
        },
        {
            chatID: 40,
            speaker: "landlord",
            text: "Not only are you lazy, but you're a liar too. Run along.",
            button: [
                { chatID: -1, text: "Oh.. ", callback: "leave" },
            ]
        },
        {
            chatID: 41,
            speaker: "landlord",
            text: "Such a wonderful girl coming back into work and helping your " + sc.n("landlord") + ". Are you excited to get to work?",
            button: [
                { chatID: -1, text: "Yes I am", callback: "follow352" },
                { chatID: -1, text: "Oh no. Maybe later", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
