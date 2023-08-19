//Room name
var room197 = {};
room197.main = function () {
    var sub = levels.get("sub");
    if (sub.l < 1) {
        chat(0, 197);
    }
    else if (sub.l < 2) {

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
        case "increaseSub":
            levels.mod("sub", 5, 5);
            break;
        case "complete":
            levels.mod("sub", 40, 999);
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};