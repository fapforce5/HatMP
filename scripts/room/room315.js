//Room name
var room315 = {};
room315.main = function () {
    if (g.isNight()) {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 1038,
            "top": 81,
            "width": 319,
            "height": 753,
            "image": "315_girlfriend/door_night.png"
        }, 315);
    }
    else {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 1029,
            "top": 72,
            "width": 322,
            "height": 755,
            "image": "315_girlfriend/door.png"
        }, 315);
    }
    var navList = [0];
    nav.buildnav(navList);
};


room315.btnclick = function (name) {
    switch (name) {
        case "stairs":
            chat(0, 315);
            break;
        case "door":
            var vacation = sc.getMission("dog", "vacation");
            if (vacation.inProgress) {
                char.room(316);
            }
            else if (sc.getMission("janice", "breakup").inProgress) {
                nav.killall();
                nav.bg("315_girlfriend/day.jpg", "315_girlfriend/night.jpg");
                chat(14, 315);
            }
            else {
                var dateTask = sc.taskGetStep("janice", "date");
                if (dateTask === 2) {
                    if (g.dt.getDay() === 5 || g.dt.getDay() === 6) {
                        if (gv.get("money") < 100) {
                            chat(13, 315);
                        }
                        else if (g.gethourdecimal() < 19) {
                            chat(11, 315);
                        }
                        else if (g.gethourdecimal() > 21) {
                            chat(12, 315);
                        }
                        else {
                            nav.bg("315_girlfriend/day.jpg", "315_girlfriend/night.jpg");
                            chat(4, 315);
                        }
                    }
                    else {
                        chat(10, 315);
                    }
                }
                else if (g.isNight()) {
                    if (g.gethourdecimal() < 21) {
                        nav.killall();
                        nav.bg("315_girlfriend/night.jpg");
                        chat(4, 315);
                    }
                    else if (g.gethourdecimal() < 25) {
                        nav.kill();
                        chat(1, 315);
                        nav.bg("315_girlfriend/nightx.jpg");
                    }
                    else {
                        chat(3, 315);
                    }
                }
                else {
                    nav.killall();
                    if (daily.get("janice")) {
                        nav.bg("315_girlfriend/day.jpg");
                        chat(5, 315);
                    }
                    else {
                        var datestep = sc.taskGetStep("janice", "date");
                        if (datestep === 3) {
                            nav.button({
                                "type": "img",
                                "name": "aak",
                                "left": 446,
                                "top": 123,
                                "width": 595,
                                "height": 353,
                                "image": "315_girlfriend/aak.png"
                            }, 315);
                            chat(6, 315);
                        }
                        else if (datestep === 4) {
                            nav.button({
                                "type": "img",
                                "name": "aak",
                                "left": 576,
                                "top": 0,
                                "width": 545,
                                "height": 1080,
                                "image": "315_girlfriend/waiter.png"
                            }, 315);
                            chat(7, 315);
                        }
                        else {
                            nav.bg("315_girlfriend/day.jpg", "315_girlfriend/night.jpg")
                            chat(4, 315);
                        }
                    }
                }
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
        case "goinside":
            char.room(316);
            break;
        case "leave":
            char.room(0);
            break;
        case "bg":
            nav.killall();
            break;
        case "waitTask3":
            char.settime(19, 0);
            char.room(316);
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
            text: "I'm so glad you dropped by! Come in!",
            button: [
                { chatID: -1, text: "...", callback: "goinside" },
            ]
        },
        {
            chatID: 5,
            speaker: "janice",
            text: "Hey baby. I'm about to run errands. Catch me tomorrow. ",
            button: [
                { chatID: -1, text: "ok", callback: "leave" },
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "That sounds like " + sc.n("janice") + "! I better see if she's ok!",
            button: [
                { chatID: -1, text: "[Go save her!]", callback: "goinside" },
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "Hey! You're that waiter from Docia. What are you doing here!",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "!waiter",
            text: "hahaha. ",
            button: [
                { chatID: 9, text: "...", callback: "bg" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "What the fuck was that! Did he just laugh at me and walk away! Who does that. " +
                "Why is he here? Is she cheating on me! I'm going to find out right now! ",
            button: [
                { chatID: -1, text: "[Barge inside her home.]", callback: "goinside" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "I have a date with " + sc.n("janice") + " this weekend. I can come on either " +
                "Friday or Saturday. I'll come back then. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "I have a big date today, but I'm a bit early. ",
            button: [
                { chatID: -1, text: "Wait here till my date. ", callback: "waitTask3" },
                { chatID: -1, text: "I'll come back", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "I'm way totally late for our date! I'll have to come back next Friday or " +
                "Saturday before " + nav.convertTime(21, 0) + ". ",
            button: [
                { chatID: -1, text: "I'll have to come back another day. ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Our big date is today! I need to find some money. I'm going to need at least " +
                "$100 to take her out. ",
            button: [
                { chatID: -1, text: "I'll have get more money. ", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "janice",
            text: "Stop stalking me! We broke up! ",
            button: [
                { chatID: -1, text: "sigh.. ok ", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};