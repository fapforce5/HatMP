//Room name
var room207 = {};
room207.main = function () {
    room207.btnclick("purple");
};

room207.btnclick = function (name) {
    switch (name) {
        case "office":
            char.room(203);
            break;
        case "elevator":
            if (sc.getstep("missy") < 25) {
                nav.killbutton("elevator");
                nav.button({
                    "type": "img",
                    "name": "purple",
                    "left": 1125,
                    "top": 180,
                    "width": 433,
                    "height": 900,
                    "image": "207_door/c.png"
                }, 207);
                chat(4, 207);
            }
            else {
                if (g.hourBetween(6, 10)) {
                    nav.bg("207_door/buttons.jpg");
                    nav.killall();
                    var btnListx = [
                        {
                            "type": "btn",
                            "name": "purple",
                            "left": 925,
                            "top": 742,
                            "width": 163,
                            "height": 165,
                            "title": "1st Floor",
                            "image": "207_door/purple.png"
                        },
                        {
                            "type": "btn",
                            "name": "pink",
                            "left": 925,
                            "top": 553,
                            "width": 163,
                            "height": 165,
                            "title": "1st Floor",
                            "image": "207_door/pink.png"
                        },
                        {
                            "type": "btn",
                            "name": "red",
                            "left": 925,
                            "top": 364,
                            "width": 163,
                            "height": 165,
                            "title": "1st Floor",
                            "image": "207_door/red.png"
                        },
                        {
                            "type": "btn",
                            "name": "black",
                            "left": 925,
                            "top": 175,
                            "width": 163,
                            "height": 165,
                            "title": "1st Floor",
                            "image": "207_door/black.png"
                        },
                    ];
                    $.each(btnListx, function (i, v) {
                        nav.button(v, 207);
                    });
                }
                else {
                    nav.killbutton("elevator");
                    nav.button({
                        "type": "img",
                        "name": "purple",
                        "left": 1125,
                        "top": 180,
                        "width": 433,
                        "height": 900,
                        "image": "207_door/c.png"
                    }, 207);
                    chat(5, 207);
                }
            }
            break;
        case "purple":
            nav.killall();
            nav.bg("207_door/elevator.jpg");
            var btnListp = [
                {
                    "type": "btn",
                    "name": "elevator",
                    "left": 1138,
                    "top": 198,
                    "width": 563,
                    "height": 836,
                    "title": "Elevator",
                    "image": "207_door/elevator.png"
                },
                {
                    "type": "btn",
                    "name": "office",
                    "left": 418,
                    "top": 290,
                    "width": 121,
                    "height": 545,
                    "title": "Front Office",
                    "image": "207_door/office.png"
                }
            ];
            var navList = [203, 0];
            $.each(btnListp, function (i, v) {
                nav.button(v, 207);
            });
            nav.buildnav(navList);
            break;
        case "pink":
        case "red":
        case "black":
            nav.killall();
            nav.bg("207_door/" + name + ".jpg");
            var btnListc = [
                {
                    "type": "btn",
                    "name": "elevator",
                    "left": 1138,
                    "top": 198,
                    "width": 563,
                    "height": 836,
                    "title": "Elevator",
                    "image": "207_door/elevator.png"
                },
                {
                    "type": "btn",
                    "name": name + "_char",
                    "left": 534,
                    "top": 669,
                    "width": 481,
                    "height": 411,
                    "title": "Front Office",
                    "image": "207_door/" + name + "_char.png"
                }
            ];
            $.each(btnListc, function (i, v) {
                nav.button(v, 207);
            });
            break;
        case "pink_char":
            chat(0, 207);
            break;
        case "red_char":
            chat(1, 207);
            break;
        case "black_char":
            chat(2, 207);
            break;
        default:
            break;
    }
};

room207.chatcatch = function (callback) {
    switch (callback) {
        case "enterRed":
            char.room(208);
            break;
        default:
            break;
    }
};

room207.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Welcome to the Pink Level of Pleasure. To enter you you must be your most beautiful self. [In progress]",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "Welcome to the Red Level of Discipline. To enter you must prove your worth to " + sc.n("missy") + " our Mistress.",
            button: [
                { chatID: 3, text: "I have Proven my worth, may I enter?", callback: "" },
                { chatID: -1, text: "No, not right now", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "Welcome to the Black Level of Pain. To enter you must show you accept that pain is pleasure. [In progress]",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "You have proven yourself worthy. You may enter to serve your Mistress.",
            button: [
                { chatID: -1, text: "Cool", callback: "enterRed" },
            ]
        },
        {
            chatID: 4,
            speaker: "cecilia",
            text: "Sorry " + sc.n("me") + " " + sc.n("missy") + " hasn't allowed you to ride the elevator.",
            button: [
                { chatID: -1, text: "oh... drat!", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "cecilia",
            text: "Sorry honey. You know you have to come in before 10:00.",
            button: [
                { chatID: -1, text: "oh... yea...", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};