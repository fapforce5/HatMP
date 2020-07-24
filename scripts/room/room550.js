//Room name
var room550 = {};
room550.main = function () {
    if (sc.getstep("chad") > 1) {
        char.room(551);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "man",
                "left": 793,
                "top": 93,
                "width": 812,
                "height": 930,
                "image": "550_gymFront/550_frontDesk.png"
            }
        ];
        var navList = [0];
        $.each(btnList, function (i, v) {
            nav.button(v, 550);
        });
        nav.buildnav(navList);
    }
};

room550.btnclick = function (name) {
    switch (name) {
        case "man":
            if (sc.step('chad') === 0) {
                chat(0, 550);
            }
            else if (sc.step('chad') === 1) {
                if (pic.has("lolaTopless"))
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
            sc.setstep('chad', 1);
            break;
        case "pay500":
            if (g.get("money") >= 500) {
                sc.setstep('chad', -1);
                sc.setstep('chad', 2);
                g.mod("money", -500);
                chat(10, 550);
            }
            else 
                chat(9, 550);
            break;
        case "tittyPic":
            sc.setstep('chad', -2);
            sc.setstep('chad', 2);
            break;
        case "getpass":
            inv.update("gym", true, null);
            sc.setstep('chad', 2);
            break;
        case "one":
            nav.killbutton("man");
            nav.button({
                "type": "btn",
                "name": "man",
                "left": 793,
                "top": 93,
                "width": 812,
                "height": 930,
                "image": "550_gymFront/550_frontDesk1.png"
            }, 550);
            break;
        case "two":
            nav.killbutton("man");
            nav.button({
                "type": "btn",
                "name": "man",
                "left": 793,
                "top": 93,
                "width": 812,
                "height": 930,
                "image": "550_gymFront/550_frontDesk2.png"
            }, 550);
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
            text: "Hay dweeb! What's a runt like you doing here. Came to look at dudes I bet!!",
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
            text: "Hay twerp, here to work out?",
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
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};