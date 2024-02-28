//Room name
var room303 = {};
room303.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "stairs",
            "left": 1176,
            "top": 371,
            "width": 107,
            "height": 573,
            "image": "303_secondFloor/stairs.png"
        },
        {
            "type": "btn",
            "name": "door",
            "left": 581,
            "top": 518,
            "width": 160,
            "height": 307,
            "image": "303_secondFloor/door.png"
        }
    ];
    if (sc.getstep("jeffery") === 10) {
        btnList.push({
            "type": "btn",
            "name": "pizza",
            "left": 894,
            "top": 803,
            "width": 121,
            "height": 69,
            "image": "303_secondFloor/pizza.png"
        });
        btnList.push({
            "type": "btn",
            "name": "mat",
            "left": 514,
            "top": 827,
            "width": 292,
            "height": 49,
            "image": "303_secondFloor/mat.png"
        });
        btnList.push({
            "type": "btn",
            "name": "garbage",
            "left": 361,
            "top": 736,
            "width": 94,
            "height": 124,
            "image": "303_secondFloor/garbage.png"
        });
    }
    var navList = [300, 310, 314, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 303);
    });
    nav.buildnav(navList);

    //fame.event();
    
};

room303.btnclick = function (name) {
    switch (name) {
        case "stairs":
            char.room(300);
            //chat(4, 303);
            break;
        case "pizza":
            nav.kill();
            nav.bg("303_secondFloor/pizza.jpg");
            nav.button({
                "type": "btn",
                "name": "reload",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 303);
            break;
        case "garbage":
            nav.kill();
            nav.bg("303_secondFloor/garbage.jpg");
            nav.button({
                "type": "btn",
                "name": "reload",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 303);
            break;
        case "mat":
            nav.kill();
            nav.bg("303_secondFloor/mat.jpg");
            nav.button({
                "type": "btn",
                "name": "reload",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 303);
            if (!inv.has("key202")) {
                nav.button({
                    "type": "btn",
                    "name": "key202",
                    "left": 376,
                    "top": 580,
                    "width": 296,
                    "height": 295,
                    "image": "303_secondFloor/key202.png"
                }, 303);
            }
            break;
        case "key202":
            nav.killbutton("key202");
            inv.add("key202");
            break;
        case "reload":
            char.room(303);
            break;
        case "door":
            if (sc.getstep("jeffery") === 10) {
                if (g.isNight()) {
                    chat(2, 303);
                }
                else if (inv.has("key202")) {
                    char.room(304);
                }
                else {
                    chat(3, 303);
                }
            }
            else {
                if (g.isNight())
                    chat(0, 303);
                else
                    chat(1, 303);
            }
            break;
        default:
            break;
    }
};

room303.chatcatch = function (callback) {
    switch (callback) {
        case "300":
            char.room(300);
            break;
        case "315":
            char.room(315);
            break;
        default:
            break;
    }
};

room303.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "No answer. They must be asleep. Or just not answering their door in the middle of the night. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "No answer. They are either out, or won't answer the door to some random person coming by. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I can't go in there during the night. They're probably there and there's no way they would let me " +
                "steal their panties while they watch. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "The door's locked. Maybe I should look for clues... ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I'm on the second floor. ",
            button: [
                { chatID: -1, text: "First floor", callback: "300" },
                { chatID: -1, text: "Second floor", callback: "315" },
                { chatID: 1, text: "Stay here", callback: "" },
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};