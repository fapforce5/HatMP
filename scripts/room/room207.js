//Room name
var room207 = {};
room207.main = function () {
    if (g.pass === "207blue") {
        room207.btnclick("blue");
    }
    else
        room207.btnclick("purple");
};

room207.btnclick = function (name) {
    switch (name) {
        case "office":
            char.room(203);
            break;
        case "elevator":
            nav.bg("207_door/buttons.jpg");
            nav.killall();
            var btnListx = [
                {
                    "type": "btn",
                    "name": "purple",
                    "left": 925,
                    "top": 645,
                    "width": 163,
                    "height": 165,
                    "title": "1st Floor",
                    "image": "207_door/purple.png"
                },
                {
                    "type": "btn",
                    "name": "pink",
                    "left": 925,
                    "top": 458,
                    "width": 163,
                    "height": 165,
                    "title": "1st Floor",
                    "image": "207_door/pink.png"
                },
                {
                    "type": "btn",
                    "name": "red",
                    "left": 925,
                    "top": 269,
                    "width": 163,
                    "height": 165,
                    "title": "1st Floor",
                    "image": "207_door/red.png"
                },
                {
                    "type": "btn",
                    "name": "black",
                    "left": 925,
                    "top": 80,
                    "width": 163,
                    "height": 165,
                    "title": "1st Floor",
                    "image": "207_door/black.png"
                },
                {
                    "type": "btn",
                    "name": "blue",
                    "left": 925,
                    "top": 834,
                    "width": 163,
                    "height": 165,
                    "title": "1st Floor",
                    "image": "207_door/blue.png"
                },
            ];
            $.each(btnListx, function (i, v) {
                nav.button(v, 207);
            });

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
        case "blue":
            nav.killall();
            nav.bg("207_door/" + name + ".jpg");
            nav.button({
                "type": "btn",
                "name": "elevator",
                "left": 1138,
                "top": 198,
                "width": 563,
                "height": 836,
                "title": "Elevator",
                "image": "207_door/elevator.png"
            }, 207);
            nav.button({
                "type": "btn",
                "name": "blueDoor",
                "left": 537,
                "top": 356,
                "width": 177,
                "height": 223,
                "title": "Elevator",
                "image": "207_door/blue_door.png"
            }, 207);
            break;
        case "pink_char":
            if (g.sissy[14].ach)
                char.room(213);
            else
                chat(0, 207);
            break;
        case "red_char":
            if (g.get("oncase") === "redroom" || g.sissy[15].ach)
                chat(1, 207);
            else
                chat(6, 207);
            break;
        case "black_char":
            if (g.sissy[50].ach)
                if (g.gethourdecimal() < 11)
                    chat(7, 207);
                else
                    chat(8, 207);
            else
                chat(2, 207);
            break;
        case "blueDoor":
            char.room(209);
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
        case "checkTime":
            if (g.dt.getHours() < 11)
                chat(3, 207);
            else
                chat(5, 207);
            break;
        case "blackRoom":
            char.room(212);
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
                { chatID: -1, text: "I have Proven my worth, may I enter?", callback: "checkTime" },
                { chatID: -1, text: "No, not right now", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "Welcome to the Black Level of Pain. To enter you must show you accept that pain is pleasure.",
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
        {
            chatID: 6,
            speaker: "random",
            text: "You must prove your worth of service before entering.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "You may enter the Black Room of Pain.",
            button: [
                { chatID: -1, text: "...", callback: "blackRoom" }
            ]
        },
        {
            chatID: 8,
            speaker: "random",
            text: sc.n("black") + " only sees slaves before 11. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};