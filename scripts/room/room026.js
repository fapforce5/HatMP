//Room name
var room26 = {};
room26.main = function () {
    var btnList = new Array();

    if (sc.mother().thisRoom) {
        nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg")
        btnList.push({
            "type": "btn",
            "name": "landlord",
            "left": 764,
            "top": 58,
            "width": 701,
            "height": 930,
            "image": "26_livingRoom/ll.png"
        });
    }
    
    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 26);
    });
    nav.buildnav(navList);
};

room26.btnclick = function (name) {
    switch (name) {
        case "landlord":
            if (g.get("momchat"))
                chat(2, 26)
            else {
                var ll = sc.getstep("landlord");
                if (!sc.checkevent("me", 2))
                    chat(0, 26);
                else if (ll === 0)
                    chat(1, 26);
                else if (ll === 1)
                    chat(3, 26);
                else if (ll === 2)
                    chat(4, 25);
                else if (ll === 3)
                    chat(7, 25);
                else if (ll === 4)
                    chat(9, 26)
                else if (ll === 5)
                    chat(9, 26)
                else if (ll === 6)
                    chat(11, 26);
                else if (ll === 7)
                    chat(30, 26);
                else if (ll === 8)
                    chat(43, 26);
                else if (ll < 4)
                    chat(11, 26);
                else 
                    chat(2, 26);
            }
            break;
        case "butthole":
            g.pass++;
            if (g.pass === 1)
                chat(20, 26);
            if (g.pass === 2)
                chat(21, 26);
            if (g.pass === 3)
                chat(22, 26);
            if (g.pass === 4) {
                nav.killbutton("butthole");
                nav.bg("26_livingRoom/passtime6g.jpg");
                chat(23, 26);
            }
            break;
        default:
            break;
    }
};

room26.chatcatch = function (callback) {
    switch (callback) {
        case "passtime":
            char.addtime(30);
            break;
        case "passtimeStop":
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime1":
            sc.setstep("landlord", 1);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime2":
            sc.setstep("landlord", 2);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime3":
            sc.setstep("landlord", 3);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "takekey":
            inv.update("landlordKey", true, null);
            break;
        case "passtime4":
            sc.setstep("landlord", 4);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime5":
            sc.setstep("landlord", 6);
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime6":
            char.addtime(30);
            g.setflag("momchat");
            char.room(26);
            break;
        case "passtime6a":
            nav.killall();
            nav.bg("26_livingRoom/passtime6a.jpg");
            break;
        case "passtime6b":
            nav.bg("26_livingRoom/passtime6b.jpg");
            break;
        case "passtime6c":
            nav.killbutton("landlord");
            nav.bg("26_livingRoom/passtime6c.jpg");
            cl.nude();
            break;
        case "passtime6c1":
            nav.bg("26_livingRoom/passtime6c.jpg");
            break;
        case "passtime6d":
            nav.bg("26_livingRoom/passtime6d.jpg");
            g.pass = 0;
            nav.button({
                "type": "tongue",
                "name": "butthole",
                "left": 1214,
                "top": 588,
                "width": 174,
                "height": 174,
                "image": "26_livingRoom/butthole.png"
            }, 26);
            break;
        case "passtime6e":
            nav.bg("26_livingRoom/passtime6e.jpg");
            break;
        case "passtime6f":
            nav.bg("26_livingRoom/passtime6f.jpg");
            break;
        case "passtime6g":
            nav.bg("26_livingRoom/passtime6g.jpg");
            break;
        case "passtime6h":
            nav.bg("26_livingRoom/passtime6h.jpg");
            break;
        case "passtime6i":
            g.mod("arousal", 100);
            nav.bg("26_livingRoom/passtime6i.jpg");
            break;
        case "passtime6j":
            char.addtime(69);
            cl.undo();
            sc.setstep("landlord", 7);
            g.setflag("momchat");
            char.room(16);
            break;
        case "passtime7":
            nav.bg("26_livingRoom/passtime7.jpg");
            break;
        case "passtime7a":
            nav.bg("26_livingRoom/passtime7a.jpg");
            break;
        case "passtime7b":
            nav.bg("26_livingRoom/passtime7b.jpg");
            break;
        case "passtime7c":
            nav.bg("26_livingRoom/passtime7c.jpg");
            break;
        case "passtime7d":
            char.addtime(69);
            cl.undo();
            sc.setstep("landlord", 8);
            g.setflag("momchat");
            char.room(16);
            break;
        case "passtime8":
            nav.killbutton("landlord");
            nav.bg("26_livingRoom/passtime8.jpg");
            break;
        case "passtime8a":
            nav.bg("26_livingRoom/passtime8a.jpg");
            break;
        case "passtime8b":
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg")
            nav.button({
                "type": "btn",
                "name": "landlord",
                "left": 764,
                "top": 58,
                "width": 701,
                "height": 930,
                "image": "26_livingRoom/ll.png"
            }, 26);
            break;
        default:
            break;
    }
};


room26.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Stop straing at my pussy and go get a job!",
            button: [
                { chatID: -1, text: "...", callback: "passtime" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "Hay " + sc.n("me") + ", I'm happy you're trying to improve yourself. It's what I've always wanted. " +
                "I've been working at the ol' Helping Hands Sperm Bank for years. If you apply yourself and work hard you won't " +
                "be a complete homeless loser. Now run along.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord"), callback: "passtime1" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: sc.n("landlord") + "'s watching her shows.. run along.",
            button: [
                { chatID: -1, text: "[Run along]", callback: "passtime" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Hi sweetie. I've been so busy at the Sperm Bank. We've been going through so much sperm and " + sc.n("landlord") + "'s " +
                "tired. Run along now.",
            button: [
                { chatID: -1, text: "[Run Along]", callback: "passtime2" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Hi honey. So the weirdest thing happend today... Someone has been stealing sperm from work! At least " +
                "50 differt samples have disappeared without a trace. I mean who would steal all that sperm?! I bet it was that damned " +
                "sex cult that lives in the woods. I've heard they sit around and drink sperm in their rituals. ",
            button: [
                { chatID: 5, text: "That's weird....", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "I know! I could understand if it was a vile or two of one of our higher end samples, but they " +
                "grabbed some of the cheapest sperm we had. Some of those samples were downright vile, but " +
                "we've just been so busy we've had to lower the bar on who could donate.",
            button: [
                { chatID: 6, text: "....", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "The police are investigating it now, but just between you and me the police are completely incompetent. " +
                "It's like watching a comedy show of buffoons tripping over each other. Since we're so low, if you want to donate " +
                "some of your specimens come down, we can use some of the cheap stuff.  ",
            button: [
                { chatID: -1, text: "That's terrible. The police in this town are the worst! ", callback: "passtime3" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Young man I'm sure you could make some extra money. I'll tell you what, each day you make my bed I'll take " +
                "5 dollars off the rent, but only if you promise not to mess with anything in the room. ",
            button: [
                { chatID: 8, text: "I promise only to touch the bed and nothing else! [Take Key]", callback: "takekey" },
                { chatID: -1, text: "No thanks, I don't want extra chores.", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "OK, I'll take your word for it, I know you're a good boy. I'm getting back to my shows. Run along now.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord") + "!", callback: "passtime4" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Hi sweetie. You should be proud of how hard you've worked so far. Maybe I'll have you help me out sometime at the " +
                "sperm store. You seem like the kind of boy that would like that.. hahahah. ",
            button: [
                { chatID: 10, text: "Oh gross", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You don't have to pretend with me honey. I know you're an odd little boy. ",
            button: [
                { chatID: -1, text: sc.n("landlord"), callback: "passtime5" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "You know staring at your " + sc.n("landlord") + "'s pussy is wrong don't you?",
            button: [
                { chatID: 12, text: sc.n("landlord") + "?", callback: "" },
                { chatID: -1, text: "Sorry " + sc.n("landlord"), callback: "passtimeStop" },
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Don't act innocent with me. I can tell what you're staring at. I'm just trying to watch my shows and you keep coming over to stare at my " +
                "vagina. Lets get this over with, come take a closer look.",
            button: [
                { chatID: 13, text: "[Take a closer look]", callback: "passtime6a" }
            ]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "Closer...",
            button: [
                { chatID: 14, text: "...", callback: "passtime6b" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "Do you like my pussy? I bet you want us to take off our clothes, let you play with my pussy?",
            button: [
                { chatID: 15, text: "Yes " + sc.n("landlord") + " I want to play with your pussy!", callback: "passtime6c" },
                { chatID: -1, text: "No that's too much", callback: "passtimeStop" }
            ]
        },
        {
            chatID: 15,
            speaker: "landlord",
            text: "You do have a wonderful cock. Before I make your cock feel good you have to make me feel good. Do you want to make me feel good?",
            button: [
                { chatID: 16, text: "OH Yes!", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Before I let you eat my pussy you have to eat my ass. I love a good ass eating. Start by licking around my hole before really eating me.",
            button: [
                { chatID: 17, text: "Wait, what? Your ass?", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "landlord",
            text: "Oh yes. Good boys always do what their told, come to " + sc.n("landlord") + ".",
            button: [
                { chatID: 18, text: "Yes..", callback: "passtime6e" }
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "Look at this cute little face. It looks so hungry, now stick out your tongue.",
            button: [
                { chatID: 19, text: "Yes..", callback: "passtime6f" }
            ]
        },
        {
            chatID: 19,
            speaker: "landlord",
            text: "Oh yes good boy, nice and wet... are you ready?",
            button: [
                { chatID: -1, text: "uh huh", callback: "passtime6d" }
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "Oh yes, that's a good boy.",
            button: [
                { chatID: -1, text: "hmmmmm", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "landlord",
            text: "Oh yeah.. keep licking " + sc.n("landlord") + "'s asshole.",
            button: [
                { chatID: -1, text: "uuuhhhuh", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "Oh yeah, I need it deeper..",
            button: [
                { chatID: -1, text: "slup lick lick", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "landlord",
            text: "Oh yes, you're good for something.. Deeper!!",
            button: [
                { chatID: 29, text: "sssllluuurrrrppp", callback: "passtime6h" }
            ]
        },
        {
            chatID: 24,
            speaker: "landlord",
            text: "I'm so close!!!! Keep going!!!",
            button: [
                { chatID: 25, text: "lick probe slrup", callback: "passtime6i" }
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "AAhaahhaAHHAHAHA AAHHAHAH aHaA hH AHAHAHHA HAH A HAHahHAhAhaHA HA",
            button: [
                { chatID: 26, text: "Slurppppppp", callback: "passtime6c1" }
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Oh wow, that was good. I guess you want your reward....",
            button: [
                { chatID: 27, text: "Oh Yeah!", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "Well that's too bad. I'm busy catching up on my shows, now scamper along..",
            button: [
                { chatID: 28, text: "But....", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "landlord",
            text: "Nope, now go before I punish those fargile little balls of yours!",
            button: [
                { chatID: -1, text: "Ok...", callback: "passtime6j" }
            ]
        },
        {
            chatID: 29,
            speaker: "landlord",
            text: "Oh yes keep eating my ass!",
            button: [
                { chatID: 24, text: "MmmMMMMMMM", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "Yes?",
            button: [
                { chatID: 31, text: "I was... uh wondering.. uh", callback: "" },
                { chatID: -1, text: "Nothing", callback: "passtimeStop" },
            ]
        },
        {
            chatID: 31,
            speaker: "landlord",
            text: "You were wondering if I could play with your little weiner weren't you?",
            button: [
                { chatID: 32, text: "Umm well...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "Sigh... Let me take this off, you stip down too.",
            button: [
                { chatID: 33, text: "Grin", callback: "passtime6c" }
            ]
        },
        {
            chatID: 33,
            speaker: "landlord",
            text: "I bet you want me to put that thing in my mouth, huh. That's not going to happen... Hmmmm... Have you ever had a hand job before?",
            button: [
                { chatID: 34, text: "No", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "I'll let you eat my pussy, and if you're really good.. and I mean really good I just may give you a hand job. ",
            button: [
                { chatID: 35, text: "Oh YEA!", callback: "passtime7" }
            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "That's right honey, focus on my clit. It's where the magic happens..",
            button: [
                { chatID: 36, text: "[Bury your face in " + sc.n("landlord") + "'s pussy]", callback: "passtime7a" }
            ]
        },
        {
            chatID: 36,
            speaker: "lola",
            text: sc.n("me") + " .... " + sc.n("landlord") + " what's going on???",
            button: [
                { chatID: 37, text: "No", callback: "passtime7b" }
            ]
        },
        {
            chatID: 37,
            speaker: "landlord",
            text: "Girls... remember when I sat with you two and went over your no no parts. ",
            button: [
                { chatID: 38, text: "?", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "Well I was just going over boy and girl parts with " + sc.n("me") + " here. So he knows what the no no spots are. Now I know " +
            "you two have never seen a penis before... Take a look at " + sc.n("me") + "'s penis.",
            button: [
                { chatID: 39, text: "...", callback: "passtime7c" }
            ]
        },
        {
            chatID: 39,
            speaker: "landlord",
            text: "That's what I told you about. Penises are bad, I know you girls stay away from penises, don't you girls? ",
            button: [
                { chatID: 40, text: "...", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "eva",
            text: "Oh yes " + sc.n("landlord") + ". We don't go near those nasty things!",
            button: [
                { chatID: 41, text: "...", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "lola",
            text: "I would never touch one of those.",
            button: [
                { chatID: 42, text: "...", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "landlord",
            text: "That's good girls. Now run along all, I'm going to get back to my shows. ",
            button: [
                { chatID: -1, text: "[Run along]", callback: "passtime7d" }
            ]
        },
        {
            chatID: 43,
            speaker: "landlord",
            text: "Are you really coming back to interrupt my shows asking for a hand job again?",
            button: [
                { chatID: 44, text: "Yes I am", callback: "" },
                { chatID: -1, text: "no", callback: "passtimeStop" },
            ]
        },
        {
            chatID: 44,
            speaker: "landlord",
            text: "Sigh... Give me your penis.",
            button: [
                { chatID: 45, text: "[pull out your penis]", callback: "passtime8" },
            ]
        },
        {
            chatID: 45,
            speaker: "landlord",
            text: "Do you like it when I touch your penis?",
            button: [
                { chatID: 46, text: "Oh yes!", callback: "passtime8a" },
            ]
        },
        {
            chatID: 46,
            speaker: "landlord",
            text: "Idiot!",
            button: [
                { chatID: 47, text: "AAAAAAaaaaaaaa!!!!", callback: "passtime8b" },
            ]
        },
        {
            chatID: 47,
            speaker: "landlord",
            text: "Get that thing out of here! I'm trying to watch my shows.",
            button: [
                { chatID: -1, text: "[Whimper away]", callback: "passtimeStop" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};