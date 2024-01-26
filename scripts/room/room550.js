//Room name
var room550 = {};
room550.main = function () {
    if (cl.isLewd()) {
        nav.button({
            "type": "img",
            "name": "man",
            "left": 960,
            "top": 271,
            "width": 376,
            "height": 396,
            "image": "550_gymFront/550_frontDesk1.png"
        }, 550);
        chat(13, 550);
    }
    else if (sc.getstep("chad") > 1) {
        char.room(551);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "man",
                "left": 960,
                "top": 271,
                "width": 376,
                "height": 396,
                "image": "550_gymFront/550_frontDesk.png"
            }
        ];
        var navList = [0];
        $.each(btnList, function (i, v) {
            nav.button(v, 550);
        });
        nav.buildnav(navList);
    }
    char.room(556);
};

room550.btnclick = function (name) {
    switch (name) {
        case "man":
            var entrace = sc.taskGetStep("chad", "membership");
            if (entrace === -1) {
                chat(0, 550);
            }
            else if (entrace === 1) {
                if (pic.has("lolaTopless") || pic.has("lolaMast"))
                    chat(6, 550);
                else
                    chat(7, 550);
            }
            else {
                chat(11, 550);
            }
            break;
        default:
            break;
    }
};

room550.chatcatch = function (callback) {
    switch (callback) {
        case "enter":
            char.room(551);
            break;
        case "chadInit":
            sc.startMission("chad", "membership");
            sc.completeMissionTask("chad", "membership", 0, true);
            sc.show("chad");
            break;
        case "pay500":
            if (gv.get("money") >= 500) {
                sc.completeMission("chad", "membership");
                sc.completeMissionTask("chad", "membership", 1, true);
                gv.mod("money", -500);
                chat(10, 550);
            }
            else 
                chat(9, 550);
            break;
        case "tittyPic":
            sc.completeMission("chad", "membership");
            sc.completeMissionTask("chad", "membership", 2, true);
            break;
        case "getpass":
            inv.update("gym", true, null);
            break;
        case "one":
            nav.killbutton("man");
            nav.button({
                "type": "btn",
                "name": "man",
                "left": 960,
                "top": 271,
                "width": 376,
                "height": 396,
                "image": "550_gymFront/550_frontDesk1.png"
            }, 550);
            break;
        case "two":
            nav.killbutton("man");
            nav.button({
                "type": "btn",
                "name": "man",
                "left": 960,
                "top": 271,
                "width": 376,
                "height": 396,
                "image": "550_gymFront/550_frontDesk2.png"
            }, 550);
            break;
        case "g1":
            nav.killall();
            nav.bg("550_gymFront/g1.jpg");
            break;
        case "g2":
            nav.bg("552_boy/lockeroom.jpg");
            nav.button({
                "type": "img",
                "name": "zzz",
                "left": 279,
                "top": 110,
                "width": 1388,
                "height": 970,
                "image": "550_gymFront/g2.png"
            }, 550);
            break;
        case "g3":
            nav.killall();
            nav.bg("550_gymFront/g3.jpg");
            break;
        case "g4":
        case "g5":
        case "g6":
            nav.bg("550_gymFront/" + callback + ".jpg");
            break;
        case "g7":
            gv.mod("giveOralMale", 1);
            gv.mod("creamPied", 1);
            gv.mod("receiveAnalMale", 1);
            char.room(0);
            char.addtime(180);
            break;
        default:
            break;
    }
};

room550.chat = function (chatID) {
    
    var cArray = [
        {
            chatID: 0,
            speaker: "chad",
            text: "Hey dweeb! What's a runt like you doing here. Came to look at dudes I bet!!",
            button: [
                { chatID: 1, text: 'Hi ' + sc.n('chad') + ' I thought you left to play minor league baseball', callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "chad",
            text: "Haha fuck that team. They're a bunch of pussies! This job as a personal trainer is way cooler " +
                "no one telling me what to do. So what are you doing here, you're too puny to work out!",
            button: [
                { chatID: 12, text: 'Just trying to get in shape ' + sc.n('chad'), callback: "one" }
            ]
        },
        
        {
            chatID: 2,
            speaker: "chad",
            text: "You'll always be a loser who doesn't belong in a gym. I'll tell you what, for you I'll " +
                "let you have a <span class='hl'>gym pass for only $500</span> cause we're such good friends.",
            button: [
                { chatID: 3, text: "but they're only $100 on the sign", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "chad",
            text: "Look bro, since we're buddies I'm going you a favor by letting you know that " +
                "you don't belong here.",
            button: [
                { chatID: 4, text: "That's not fair!", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "chad",
            text: "You're right bro. That price is for regular people, not twerps.... " +
                "There's a way I could give you a pass for free.",
            button: [
                { chatID: 5, text: "Really that's awesome!", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "chad",
            text: "Just get me a picture of " + sc.n('lola') + "'s naked tits and the gym pass is yours, " +
                "or pay me $500, the choice is yours.",
            button: [
                { chatID: -1, text: "...", callback: "chadInit" }
            ]
        },
        {
            chatID: 6,
            speaker: "chad",
            text: "Sup bro. You got that titty picture of " + sc.n('lola') + '?',
            button: [
                { chatID: 8, text: "Yes, here you go", callback: "tittyPic" },
                { chatID: -1, text: "No, I'm just going to pay your $500", callback: "pay500" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "chad",
            text: "Sup bro. You got that titty picture of " + sc.n('lola') + '?',
            button: [
                { chatID: -1, text: "No, I'm just going to pay your $500", callback: "pay500" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "chad",
            text: "Fucking sweet dude. I've wanted to fuck her for years. You're still a dweeb, " + 
                "but a cool dweeb.",
            button: [
                { chatID: -1, text: "[Pick Up Pass]", callback: "getpass" }
            ]
        },
        {
            chatID: 9,
            speaker: "chad",
            text: "Bro, I know I failed math, but I can count to 500. Fuck off before beat your " + 
                "wimpy ass.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "chad",
            text: "I always knew you were a pussy, here's your pass bro.",
            button: [
                { chatID: -1, text: "[Pick Up Pass]", callback: "getpass" }
            ]
        },
        {
            chatID: 11,
            speaker: "chad",
            text: "Hey twerp, here to work out?",
            button: [
                { chatID: -1, text: "Yes", callback: "enter" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "chad",
            text: "HAHAHAHahahaaaa. You're dick's too tiny to work out here!",
            button: [
                { chatID: 2, text: "It's not small, it's a good size!", callback: "two" }
            ]
        },
        {
            chatID: 13,
            speaker: "chad",
            text: "Hey slut! You come in here looking for me?",
            button: [
                { chatID: 14, text: "Slut?", callback: "g1" }
            ]
        },
        {
            chatID: 14,
            speaker: "chad",
            text: "I'm going to show you what happens when sluts come in my gym.",
            button: [
                { chatID: 15, text: "huh...", callback: "g2" }
            ]
        },
        {
            chatID: 15,
            speaker: "chad",
            text: "My friends and I are going to show you what happens to sluts in my gym, and you're not going to like it. ",
            button: [
                { chatID: 16, text: "no...", callback: "g3" }
            ]
        },
        {
            chatID: 16,
            speaker: "chad",
            text: "You want to scream out in pain? I'm going to jam my cock down your throat to shut you up! ",
            button: [
                { chatID: 17, text: "AAAAAAaaaa", callback: "g4" }
            ]
        },
        {
            chatID: 17,
            speaker: "chad",
            text: "That's better. Ready for your prize slut?",
            button: [
                { chatID: 18, text: "GLUK", callback: "g5" }
            ]
        },
        {
            chatID: 18,
            speaker: "chad",
            text: "Oh  fuck you're a dirty slut! Flip over and squirt it out for us! ",
            button: [
                { chatID: 19, text: "Ok!", callback: "g6" }
            ]
        },
        {
            chatID: 19,
            speaker: "chad",
            text: "Nasty slut. Now get the fuck out of my gym! ",
            button: [
                { chatID: -1, text: "huh?", callback: "g7" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};