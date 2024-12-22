//Liam
var room589 = {};
room589.main = function () {
    let roomEvents = room585.getRoomsNow(false);
    switch (Math.floor(g.gethourdecimal())) {
        case 20:
        case 21:
            
            
            break;
        case 22:
            if (roomEvents.r9 === "stacy") {
                nav.button({
                    "type": "img",
                    "name": "courtney",
                    "left": 852,
                    "top": 31,
                    "width": 710,
                    "height": 1049,
                    "image": "589_liam/stacy_0.png"
                }, 586);
                chat(0, 589);
            }
            break;
        case 23:
            break;
        case 0:
            break;
        default:
            break;
    }
    nav.buildnav([585, 586, 587, 588]);
};

room589.btnclick = function (name) {
    switch (name) {
        case "stacy":
            if (g.internal < 12) {
                nav.bg("589_liam/stacy_" + g.internal + ".jpg");
            }
            else {
                levels.mod("xdress", 20);
                char.settime(23, 0);
                char.room(585);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room589.chatcatch = function (callback) {
    switch (callback) {
        case "stacy_1":
            nav.killall();
            nav.bg("589_liam/stacy_1.jpg");
            break;
        case "black":
            nav.bg("172_punishblack/black.jpg");
            g.internal = 2;
            nav.killall();
            nav.next("stacy");
            break;
        default:
            break;
    }
};

room589.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "stacy",
            text: "What are you doing in here? I told you that's MY dick. You know " +
                "what happens when you piss me off?",
            button: [
                { chatID: 1, text: "huh? ", callback: "stacy_1" }
            ]
        },
        {
            chatID: 1,
            speaker: "stacy",
            text: "This!",
            button: [
                { chatID: -1, text: "AAaaaaaaaaaa", callback: "black" }
            ]
        },

    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};