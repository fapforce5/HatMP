//mother spank
var room21 = {};
room21.main = function () {
    nav.button({
        "type": "btn",
        "name": "spank1",
        "left": 1008,
        "top": 0,
        "width": 424,
        "height": 1080,
        "image": "21_motherSpank/021_yell.png"
    }, 21);
    if (g.pass === "closet") {
        g.pass = 3;
        chat(0, 21);
    }
    else if (g.pass === "sleepSpank") {
        g.pass = 7;
        chat(6, 21);
    }
    else if (g.pass === "kitchen") {
        char.addtime(60);
        g.pass = 9;
        chat(8, 21);
    }
    else if (g.pass === "finger") {
        char.addtime(60);
        g.pass = 9;
        chat(10, 21);
    }
    else if (g.pass === "chastity") {
        char.addtime(60);
        g.pass = 12;
        chat(11, 21);
    }
};

room21.btnclick = function (name) {
    switch (name) {
        case "spank1":
            if (g.pass === "closet")
                chat(0, 21);
            else {
                chat(0, 21);
                alert("no know reason for being here. ");
            }
            sc.setstep("landlord", -1);
            break;
        default:
            break;
    }
};

room21.chatcatch = function (callback) {
    switch (callback) {
        case "spank2":
            cl.showdick();
            break;
        case "spank3":
            nav.killbutton("spank1");
            nav.button({
                "type": "img",
                "name": "spank2",
                "left": 552,
                "top": 145,
                "width": 1227,
                "height": 935,
                "image": "21_motherSpank/021_Spank.gif"
            }, 21);
            break;
        case "arouse":
            gv.mod("arousal", 30);
            break;
        case "leave":
            sc.modLevel("landlord", 15, 4);
            cl.undo();
            char.room(16);
            break;
        case "leave0":
            cl.undo();
            sc.modLevel("landlord", 15, 7);
            char.room(0);
            break;
        default:
            break;
    }
};

room21.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "What do you think you doing! My closet is private, not a free for all for you! Remember " +
                "when I told you that if you act like a child I'll treat your like a child. I meant it. You're getting a bare bottom spanking " + 
                "as punishment for going where you're not supposed to go. Now pull your pants down.",
            button: [
                { chatID: 1, text: "[Pull down your pants]", callback: "spank2" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "OK naughty boy, get over my knee.",
            button: [
                { chatID: 2, text: "Get over " + sc.n("landlord") + "'s knee", callback: "spank3" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "I'm doing this for your own good",
            button: [
                { chatID: g.pass, text: "OUCH!!!", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Say I'm a naughty boy and I won't go peeking in my closet again, or I'll get more bare bottom spankings.",
            button: [
                { chatID: 4, text: "I'm a naughty boy and I won't go peeking in " + sc.n("landlord") + "'s closet again, or I'll get more bare bottom spankings", callback: "arouse" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I can't believe I'm getting turned on by this...",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "OK. get out of my room you bad boy. ",
            button: [
                { chatID: -1, text: "Pull up pants and leave " + sc.n("landlord") + "'s bedroom. ", callback: "leave" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "Since you want to touch me inappropriately, I'll have to touch you inappropriately with " +
                "a bare bottom spanking! Now pull your pants down and get over my knee!",
            button: [
                { chatID: 1, text: "[Pull down your pants]", callback: "spank2" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Say I'm not going to stick my dirty penis into my " + sc.n("landlord") + " again " +
                "or I'll get more bare bottom spankings.",
            button: [
                { chatID: 4, text: "I'm not going to stick my dirty penis into my " + sc.n("landlord") + " again or I'll get more bare bottom spankings", callback: "arouse" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "I'm going to show you how to properly spank an ass! Pants down mister!",
            button: [
                { chatID: 1, text: "oh, What?", callback: "spank2" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "That is how you spank and ass! ",
            button: [
                { chatID: -1, text: "OOooooohch", callback: "leave" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You need to learn to keep your hands out of others! " +
                "Now pull down your pants!",
            button: [
                { chatID: 1, text: "oh no", callback: "spank2" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "You are not allowed into this house if you're not wearing your chastity " +
                "cage. I can't have you raping my other little girls! ",
            button: [
                { chatID: 1, text: "oh no", callback: "spank2" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Now get out out of my house and don't come back till that little pecker " +
                "is locked away! ",
            button: [
                { chatID: -1, text: "Ok", callback: "leave0" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};