//Room name
var room32 = {};
room32.main = function () {
    if (sc.getMission("lola", "*wife").startedOrComplete) {
        nav.button({
            "type": "btn",
            "name": "lola",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "32_bedroom/lola_preggers.webp"
        }, 957);
        nav.button({
            "type": "btn",
            "name": "lola",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "32_bedroom/eva.webp"
        }, 957);
    }
    else if (sc.getMission("lola", "*tom2").startedOrComplete) {

    }
    else {

    }
    nav.buildnav([11]);
};

room32.btnclick = function (name) {
    switch (name) {
        case "lola":
            switch (sc.taskGetStep("lola", "*wife")) {
                case -1:
                case 0:
                    
                    chat(0, 32);
                    
                    break;
            }
            break;
        default:
            break;
    }
};

room32.chatcatch = function (callback) {
    switch (callback) {
        case "wife0":
            nav.kill();
            nav.button({
                "type": "btn",
                "name": "lola",
                "left": 717,
                "top": 0,
                "width": 892,
                "height": 1080,
                "image": "32_bedroom/wife0.webp"
            }, 957);
            break;
        default:
            break;
    }
};

room32.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Soooo... You're pregnant? ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "lola",
            text: "You, you were gone for so long. I was afraid that you would never come back. ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};