//Room name
var room315 = {};
room315.main = function () {
    var btnList = [
        {
            "type": "img",
            "name": "board",
            "left": 272,
            "top": 528,
            "width": 275,
            "height": 220,
            "image": "315_girlfriend/board0.png"
        },
        {
            "type": "btn",
            "name": "door",
            "left": 581,
            "top": 518,
            "width": 160,
            "height": 307,
            "image": "315_girlfriend/door.png"
        },
        {
            "type": "btn",
            "name": "stairs",
            "left": 1176,
            "top": 371,
            "width": 107,
            "height": 573,
            "image": "303_secondFloor/stairs.png"
        }
    ];
    var navList = [300, 303, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 315);
    });
    nav.buildnav(navList);
};

room315.btnclick = function (name) {
    switch (name) {
        case "stairs":
            chat(0, 315);
            break;
        case "door":
            var janiceStep = sc.getstep("janice");
            if (g.isNight()) {
                if (g.gethourdecimal() > 8) {
                    nav.killall();
                    nav.bg("315_girlfriend/night.jpg");
                    chat(1, 315);
                }
                else {
                    chat(3, 315);
                }
            }
            else if (janiceStep === 0) {
                nav.killall();
                nav.bg("315_girlfriend/day.jpg");
                chat(4, 315);
            }
            break;
        default:
            break;
    }
};

room315.chatcatch = function (callback) {
    switch (callback) {
        case "300":
            char.room(300);
            break;
        case "303":
            char.room(303);
            break;
        case "reset":
            char.room(315);
            break;
        default:
            break;
    }
};

room315.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I'm on the second floor. ",
            button: [
                { chatID: -1, text: "First floor", callback: "300" },
                { chatID: -1, text: "Third floor", callback: "303" },
                { chatID: 1, text: "Stay here", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "janice",
            text: "Oh. It's you. I'm getting ready for bed. Come by during the day baby.  ",
            button: [
                { chatID: 2, text: "Do you want me to tuck you in? ", callback: "" },
                { chatID: -1, text: "ok", callback: "reset" },
            ]
        },
        {
            chatID: 2,
            speaker: "janice",
            text: "Hahaha, no. You know my rules on dating. No sex till marriage. ",
            button: [
                { chatID: -1, text: "ok", callback: "reset" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "It's pretty late. I don't want to come across as a psycho boyfriend.",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "janice",
            text: "I'm so glad you dropped by! end here",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};