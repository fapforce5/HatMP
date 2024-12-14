//Room name
var room585 = {};
room585.main = function () {
    if (g.pass === "room585First") {
        g.pass = "";
    }

    if (sc.getMissionTask("eva", "sissy", 7).notStarted) {
        sc.completeMissionTask("eva", "sissy", 7);
        nav.bg("585_livingRoom/eva_7.jpg");
        chat(0, 585);
    }
    else {
        switch (Math.floor(g.gethourdecimal())) {
            case 20:
            case 21:
                nav.button({
                    "type": "btn",
                    "name": "utah",
                    "left": 106,
                    "top": 18,
                    "width": 755,
                    "height": 1062,
                    "image": "585_livingRoom/utah.png"
                }, 586);
                if(levels.get("cheer") > 8)
                    chat(6, 585);
                else
                    chat(5, 585)
                break;
            case 22:

                nav.bg("586_kitchen/bg_22.jpg");
                break;
            case 23:
                nav.bg("586_kitchen/bg_23.jpg");
                break;
            case 0:
                nav.bg("586_kitchen/bg_0.jpg");
                break;
            default:
                nav.bg("586_kitchen/bg_1.jpg");
                break;
        }
        nav.buildnav([586, 587, 588, 589]);
    }
    
};

room585.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room585.chatcatch = function (callback) {
    switch (callback) {
        case "reset30":
            char.addtime(30);
            char.room(585);
            break;
        case "reset":
            char.room(585);
            break;
        default:
            break;
    }
};

room585.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!deb",
            text: "So did you bring me back my favorite butt plug?",
            button: [
                { chatID: 1, text: "It fell out when I was running away. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!deb",
            text: "*UGH* That was a gift from my ex! That's ok, I'll get my payback sissy. ",
            button: [
                { chatID: 2, text: "but it wasn't my fault ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "eva",
            text: "Hahaha yeah! Later though, I just got here! " + sc.n("me") + " this " +
                "is Liam and Doofus's house. They let us party here. Don't worry if " +
                "you spill a drink, I don't think these floors have been cleaned since " +
                "they got here. There's only one house rule, and that's if you hurl, " +
                "hurl outside or in the toilet. ",
            button: [
                { chatID: 3, text: "I can do that", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!latika",
            text: "I need a beer. Let's head to the kitchen. ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!deb",
            text: "Totally, let's go. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "utah",
            text: "You're cute, but not cool enough for me to fuck. ",
            button: [
                { chatID: 6, text: "rude", callback: "reset30" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Hi Utah! Looking good in that shirt. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "utah",
            text: "I know. Did you see my awesome game last weekend? ",
            button: [
                { chatID: 8, text: "Yeah! You were the greatest! ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "utah",
            text: "I really am the greatest. With how great we're doing I'm in " +
                "the running for best quarterback, maybe even of all time. Of " +
                "course I couldn't be the best without Darius here. Hehehe",
            button: [
                { chatID: 9, text: "So Darius do you want to get us a beer? ", callback: "" },
                { chatID: 10, text: "Yeah Darius really looks super strong. I love those big arms. ", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};