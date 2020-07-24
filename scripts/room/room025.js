//Room name
var room25 = {};
room25.main = function () {
    var btnList = [{
        "type": "btn",
        "name": "upstairs",
        "left": 1466,
        "top": 0,
        "width": 454,
        "height": 523,
        "image": "25_dining/upstairs.png",
        "night": "25_dining/upstairsNight.png"
    }];
    
    var thisSister = sc.sister();
    var thisMother = sc.mother();

    if (thisMother.roomID === 26) {
        btnList.push({
            "type": "btn",
            "name": "livingroom",
            "left": 275,
            "top": 12,
            "width": 455,
            "height": 375,
            "image": "25_dining/livingroomM.png",
            "night": "25_dining/livingroomMN.png",
        });
    }
    else if (thisSister.roomID === 26) {
        btnList.push({
            "type": "btn",
            "name": "livingroom",
            "left": 275,
            "top": 12,
            "width": 455,
            "height": 375,
            "image": "25_dining/livingroomS.png",
            "night": "25_dining/livingroomSN.png",
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "livingroom",
            "left": 275,
            "top": 12,
            "width": 455,
            "height": 375,
            "image": "25_dining/livingroom.png",
            "night": "25_dining/livingroomN.png",
        });
    }

    if (thisMother.thisRoom) {
        nav.bg("25_dining/025_diningRoomMom.jpg");
        btnList.push({
            "type": "btn",
            "name": "mom",
            "left": 1303,
            "top": 42,
            "width": 519,
            "height": 569,
            "image": "25_dining/momCoffee.png"
        });
    }
    
    if (thisSister.thisRoom) {
        nav.bg("25_dining/025_diningRoomLandE.jpg");
        btnList.push({
            "type": "btn",
            "name": "lolaAndEva",
            "left": 582,
            "top": 90,
            "width": 750,
            "height": 669,
            "image": "25_dining/lAndE.png"
        });
    }



    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 25);
    });
    nav.buildnav(navList);
};

room25.btnclick = function (name) {
    switch (name) {
        case "upstairs":
            char.room(11);
            break;
        case "mom":
            var ll = sc.getstep("landlord");
            if (!g.get("momchat")) {
                if (!sc.checkevent("me", 2))
                    chat(1, 25);
                else if (ll === 0)
                    chat(2, 25);
                else if (ll === 1)
                    chat(3, 25);
                else if (ll === 2)
                    chat(7, 25);
                else if (ll === 3)
                    chat(4, 25);
                else if (ll === 4)
                    chat(42, 25);
                else
                    chat(6, 25);
            }
            else
                chat(6, 25);
            break;
        case "lolaAndEva":
            var le = sc.getstep("lola");
            switch (le) {
                case 0:
                case 1:
                    chat(10, 25);
                    break;
                case 2:
                case 3:
                    chat(11, 25);
                    break;
                case 4:
                    chat(28, 25);
                    break;
                case 5:
                case 6:
                    chat(32, 25);
                    break;
                default:
                    chat(37, 25);
                    break;
            }
            break;
        case "livingroom":
            char.room(26);
            break;
        default:
            break;
    }
};

room25.chatcatch = function (callback) {
    switch (callback) {
        case "passtime1":
            sc.setstep("landlord", 1);
            room25.chatcatch("motherPassTime");
            break;
        case "passtime2":
            sc.setstep("landlord", 2);
            room25.chatcatch("motherPassTime");
            break;
        case "passtime3":
            sc.setstep("landlord", 3);
            room25.chatcatch("motherPassTime");
            break;
        case "passtime4":
            sc.setstep("landlord", 4);
            room25.chatcatch("motherPassTime");
            break;
        case "passtime5":
            sc.setstep("landlord", 5);
            room25.chatcatch("motherPassTime");
            break;
        case "motherPassTime":
            if (g.hourBetween(0, 12))
                char.addtime(60);
            else
                char.addtime(120);
            char.room(25);
            break;
        case "takekey":
            inv.update("landlordKey", true, null);
            break;
        case "passTimeLE":
            char.addtime(75);
            char.room(25);
            break;
        default:
            break;
    }
};

room25.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "Hay " + sc.n("me") + " everyone pays rent around here, even " + sc.n("lola") + " and " + sc.n("eva") +
            ". You need to check the help wanted on your computer if you want to see what's available. ",
            button: [
                { chatID: -1, text: "Got it " + sc.n("landlord"), callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "Hay " + sc.n("me") + ", I'm happy you're trying to improve yourself. It's what I've always wanted. " +
            "I've got to get ready to work at the ol' Helping Hands Sperm Bank, we've got a big delivery due in today " +
            "and I need to get them in the cryo unit. Be good today ok sweetie.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord"), callback: "passtime1" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Morning Sweetie. It's so busy at the Sperm Bank! I don't know if it's something in the air, or just that time of year, but " +
            "we're going through about a gallon of sperm each day. I swear you could paint a house with all the sperm where " +
            "putting out! Well I've got to get to work, so busy....",
            button: [
                { chatID: -1, text: "Have fun at work.", callback: "passtime2" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Young man I'm sure you could make some extra money. I'll tell you what, each day you make my bed I'll take " +
            "5 dollars off the rent, but only if you promise not to mess with anything in the room. ",
            button: [
                { chatID: 5, text: "I promise only to touch the bed and nothing else! [Take Key]", callback: "takekey" },
                { chatID: -1, text: "No thanks, I don't want extra chores.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "OK, I'll take your word for it, I know you're a good boy. I've got to get to work now, be good.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord") + "!", callback: "passtime4" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "So much sperm moving in and out of my office... Gotta get to work.",
            button: [
                { chatID: -1, text: "Have fun at work " + sc.n("landlord"), callback: "motherPassTime" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Good morning honey. So the weirdest thing happend yesterday... Someone has been stealing sperm from work! At least " +
            "50 differt samples have disappeared without a trace. I mean who would steal all that sperm?! I bet it was that damned " +
            "sex cult that lives in the woods. I've heard they sit around and drink sperm in their rituals. ",
            button: [
                { chatID: 8, text: "That's weird....", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "I know! I could understand if it was a vile or two of one of our higher end samples, but they " +
            "grabbed some of the cheapest sperm we had. Some of those samples were downright vile, but " +
            "we've just been so busy we've had to lower the bar on who could donate.",
            button: [
                { chatID: 9, text: "....", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "The police are investigating it now, but just between you and me the police are completely incompetent. " +
            "It's like watching a comedy show of buffoons tripping over each other. Since we're so low, if you want to donate " +
            "some of your specimens come down, we can use some of the cheap stuff.  ",
            button: [
                { chatID: -1, text: "That's terrible. The police in this town are the worst! ", callback: "passtime3" }
            ]
        },
        {
            chatID: 10,
            speaker: "lola",
            text: "Hay " + sc.n("me") + ". " + sc.n('eva') + " and I were just talking about you.",
            button: [
                { chatID: 11, text: "Me?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "eva",
            text: "Yeah, we were talking about what a big ol' butt head you are!",
            button: [
                { chatID: 13, text: "Me?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "noop",
            button: [
                { chatID: -1, text: "Me?", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "No! We were talking about how hard college must be! I always thought you were smart, but if you couldn't do it " +
                "we're afraid we might fail too.",
            button: [
                { chatID: 14, text: "College isn't hard, you just have to go to class. I totally skipped a bunch of classes.", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "eva",
            text: "I hate going to class sooooo much. Its sooo boring.",
            button: [
                { chatID: 15, text: "Yeah it is", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: sc.n('landlord') + " will kill us if we fail too. She's still so mad at you for dropping out. I don't think she'll " +
                "ever forget that.",
            button: [
                { chatID: 16, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "eva",
            text: "Yeah, she didn't even get mad at me when she caught me sneaking in after dark. Thanks for taking one for the team!",
            button: [
                { chatID: 17, text: "Sure " + sc.n('eva'), callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "Hahah yeah, you're so lucky " + sc.n('eva') + ". We're going to head out. I know great things will happen for you " +
                sc.n("me") + ".",
            button: [
                { chatID: -1, text: "Thanks " + sc.n("lola") +". ", callback: "passTimeLE" }
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: "If it isn't the master masseuse. Come to see if you can touch us some more?",
            button: [
                { chatID: 19, text:  "Good " + char.greeting() + " to you.", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "lola",
            text: sc.n("eva") + " is just cranky if her feet haven't been rubbed in a while!",
            button: [
                { chatID: 20, text: "Aww I can help you with that", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "I'm torn between letting you get off on touching my feet, and getting a great foot massage.",
            button: [
                { chatID: 21, text: "Why not be happy with both?", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "eva",
            text: "You kow who needs a good massage, Lola. She's been whining ever since Jamie dumped her.",
            button: [
                { chatID: 22, text: "Yeah, Jamie is such an ass.", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "He is such a pig. We've only been dating for two months and he pulled out his penis and tried rubbing it on " +
                "my face. I mean I know he's horny, but that's no way to take my virginity.",
            button: [
                { chatID: 23, text: "Haha I didn't know he did that.", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "I warned her that Jamie isn't the kind of guy that liked waiting.",
            button: [
                { chatID: 24, text: "...", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "I really thought he was the one, but I guess not.",
            button: [
                { chatID: 25, text: "You'll find the guy, you just have to keep looking.", callback: "" },
                { chatID: 27, text: "I'm the guy you've been looking for.", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "I know. oh well, shall we finish up here?",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "Lets head out",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "eva",
            text: "HAHAHHAHAHAHAHAHHAHAHHAA!!!! Real smooth there pervert! What a weird-o. C'mon " + sc.n("lola") +
                "we're heading out.",
            button: [
                { chatID: -1, text: "Er.. I mean...", callback: "passTimeLE" }
            ]
        },
        {
            chatID: 28,
            speaker: "eva",
            text: "Hay butt head. I'm looking forward to getting a sneak of some of that liquor.",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "I've only drank twice before, and only " + sc.n("eva") + " knows about what happened one of those times.",
            button: [
                { chatID: 30, text: "Oh really, what happened?", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "eva",
            text: "She totally lost her panties at a party! " + sc.n("lola") + " the virgin can't keep her panties on when she's " + 
                "drunk!",
            button: [
                { chatID: 31, text: sc.n("lola") + "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "lola",
            text: "I don't know what happened. I had them when I went, but when we got back they were just gone.",
            button: [
                { chatID: -1, text: "Happens to the best of us", callback: "passTimeLE" }
            ]
        },
        {
            chatID: 32,
            speaker: "eva",
            text: "You know " + sc.n("me") + " you may be a dirty pervert, but you're also a great guy.",
            button: [
                { chatID: 33, text: sc.n('eva') + " with a compliment?", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "eva",
            text: "Hay! I'm not mean to you all the time. Just when your being all weird and stuff.",
            button: [
                { chatID: 34, text: "...", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "lola",
            text: "Awwww, the rare compliment from " + sc.n("eva") + ". You should feel honored " + sc.n("me") + ".",
            button: [
                { chatID: 35, text: "I truly am honored. You're not bad yourself " + sc.n("eva") + ".", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "eva",
            text: "Shut up you guys! I hate you both.",
            button: [
                { chatID: 36, text: "Awww we love you " + sc.n("eva") + ".", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "lola",
            text: "I think we've teased her enough. Lets get going " + sc.n("eva") + ".",
            button: [
                { chatID: -1, text: "Ok, See ya", callback: "passTimeLE" }
            ]
        },
        {
            chatID: 37,
            speaker: "lola",
            text: sc.n("eva") + " and I were just talking about some boys at school. " + sc.n("eva") + " has a crush on one!",
            button: [
                { chatID: 38, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "eva",
            text: "Yes I do and I don't care who knows it!",
            button: [
                { chatID: 39, text: "Awwww", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "lola",
            text: "You can be such a softy sometimes, I love it. We're going to go meet him and his friend, catch you later.",
            button: [
                { chatID: -1, text: "Ok, See ya", callback: "passTimeLE" }
            ]
        },
        {
            chatID: 40,
            speaker: "landlord",
            text: "Morning Sweetie. It's so busy at the Sperm Bank! I don't know if it's something in the air, or just that time of year, but " +
                "we're going through about a gallon of sperm each day. I swear you could paint a house with all the sperm where " +
                "putting out! Seeing all those hot men jack off really turns me on... oh well I'm going to go rub one out.",
            button: [
                { chatID: -1, text: "What?", callback: "passtime2" }
            ]
        },
        {
            chatID: 41,
            speaker: "landlord",
            text: "So much sperm moving in and out of my office. I just love all those big huge cocks I play with... Off to masturbate!",
            button: [
                { chatID: -1, text: "Oh. Have fun " + sc.n("landlord"), callback: "motherPassTime" }
            ]
        },
        {
            chatID: 42,
            speaker: "landlord",
            text: "Good morning sweetie. You should be proud of how hard you've worked so far. Maybe I'll have you help me out sometime at the " +
            "sperm store. You seem like the kind of boy that would like that.. hahahah. ",
            button: [
                { chatID: 43, text: "Oh gross", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "landlord",
            text: "You don't have to pretend with me honey. I know you're an odd little boy. ",
            button: [
                { chatID: -1, text: sc.n("landlord"), callback: "passtime5" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};