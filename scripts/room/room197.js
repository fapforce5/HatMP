//submissiveness
var room197 = {};
room197.main = function () {
    var sub = levels.get("sub");
    var sublist = [
        { n: "rubfeet", chatid: 0 },
        { n: "kissfeet", chatid: 5 },
        { n: "lickfeet", chatid: 8 },
    ];
    var selected;
    if (sub.l < 2) {
        selected = "rubfeet";
    }
    else if (sub.l < 3) {
        selected = "kissfeet";
    }
    else if (sub.l < 4) {
        selected = "lickfeet";
    }
    else {
        selected = sublist[Math.floor(Math.random() * sublist.length)].n;
    }
    for (i = 0; i < sublist.length; i++) {
        if (sublist[i].n === selected) {
            chat(sublist[i].chatid, 197);
            break;
        }
    }
};

room197.btnclick = function (name) {
    switch (name) {
        case "leftfootRub":
            nav.killall();
            nav.bg("197_sub/sidedesk2.jpg");
            nav.button({
                "type": "hand",
                "name": "rightfootRub",
                "left": 1044,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/rightFoot.png"
            }, 197);
            chat(3, 197);
            break;
        case "rightfootRub":
            nav.killall();
            nav.bg("197_sub/sidedesk3.jpg");
            chat(4, 197);
            break;
        case "kissfoot":
            nav.killall();
            nav.bg("197_sub/sidedesk3.jpg");
            chat(7, 197);
            break;
        case "lickfoot":
            if (g.internal > 4) {
                nav.killall();
                nav.bg("197_sub/sidedesk3.jpg");
                chat(10, 197);
            }
            else if (g.internal === 3) {
                nav.killbutton("lickfoot");
                nav.button({
                    "type": "tongue",
                    "name": "lickfoot",
                    "left": 1044,
                    "top": 476,
                    "width": 173,
                    "height": 286,
                    "image": "197_sub/rightFoot.png"
                }, 197);
                nav.bg("197_sub/lick" + g.internal + ".jpg");
                g.internal++;
            }
            else {
                nav.bg("197_sub/lick" + g.internal + ".jpg");
                g.internal++;
            }
            break;
        default:
            break;
    }
};

room197.chatcatch = function (callback) {
    switch (callback) {
        case "punish":
            g.pass = "insubordination";
            levels.mod("dom", 25, 999);
            missy.mod("mood", -25);
            char.room(217);
            break;
        case "sideDesk":
            nav.killall();
            levels.mod("sub", 5, 5);
            nav.bg("197_sub/sidedesk0.jpg");
            break;
        case "presentFoot":
            nav.bg("197_sub/sidedesk1.jpg");
            nav.button({
                "type": "hand",
                "name": "leftfootRub",
                "left": 723,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/leftFoot.png"
            }, 197);
            break;
        case "kissfoot":
            nav.bg("197_sub/sidedesk1.jpg");
            nav.button({
                "type": "kiss",
                "name": "kissfoot",
                "left": 723,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/leftFoot.png"
            }, 197);
            break;
        case "lickfoot":
            nav.killall();
            g.internal = 1;
            nav.bg("197_sub/sidedesk1.jpg");
            nav.button({
                "type": "tongue",
                "name": "lickfoot",
                "left": 723,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/leftFoot.png"
            }, 197);
            break;
        case "increaseSub":
            levels.mod("sub", 5, 5);
            break;
        case "complete":
            levels.mod("sub", 40, 5); //UPDATE THIS WITH NEW EVENTS
            missy.mod("mood", 30);
            char.settime(17, 5);
            char.room(0);
            break;
        default:
            break;
    }
};

room197.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "Come kneel at my feet.",
            button: [
                { chatID: 2, text: "Yes ma'am!", callback: "sideDesk" },
                { chatID: 1, text: "No", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "No? I don't think you understand your place in this world. It appears I need to fix " +
                "your insubordination problem. ",
            button: [
                { chatID: -1, text: "huh?", callback: "punish" },
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "I've been running around all day. I need you to massage them.",
            button: [
                { chatID: -1, text: "Yes ma'am!", callback: "presentFoot" },
                { chatID: 1, text: "Gross, no!", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "Mmmmmmm that's good. Now do my other foot.  ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "MMmmm yeah. I needed that. You can go now. ",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "complete" },
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "Come kneel at my feet. ",
            button: [
                { chatID: 6, text: "Yes ma'am", callback: "sideDesk" },
                { chatID: 1, text: "Now way!", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "Since you've been a good little submissive I'll allow you to kiss my feet. Just a small kiss, I don't want " +
                "your disgusting spit on me. ",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "kissfoot" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "That's a good pet. Now go my little foot slave.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "complete" },
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "You are really showing what a submissive you are. I suppose I'll let you lick the soles of my bare feet. " +
                "really taste the sweat that collects in my high heel shoes as I walk around all day. Come kneel at my feet " +
                "and stick out your tongue.",
            button: [
                { chatID: 9, text: "Yes ma'am", callback: "sideDesk" },
                { chatID: 1, text: "Now way!", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "MMmmm yes. You know what to do.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "lickfoot" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "I do enjoy a submissive foot slave. Oink for me slave. ",
            button: [
                { chatID: -1, text: "*snort* oink oink", callback: "complete" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};