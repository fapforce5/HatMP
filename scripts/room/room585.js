//Room name
var room585 = {};

room585.main = function () {
    if (g.pass === "room585First") {
        g.pass =
            [
                { t: 21, r5: null, r6: null, r7: null, r8: null, r9: null },
                { t: 22, r5: null, r6: null, r7: null, r8: null, r9: null },
                { t: 23, r5: null, r6: null, r7: null, r8: null, r9: null },
                { t: 0, r5: null, r6: null, r7: null, r8: null, r9: null },
                { t: 1, r5: null, r6: null, r7: null, r8: null, r9: null },
                { t: 2, r5: null, r6: null, r7: null, r8: null, r9: null },
            ];
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
                    "left": 1081,
                    "top": 0,
                    "width": 839,
                    "height": 1080,
                    "image": "585_livingRoom/utah.png"
                }, 585);
                
                break;
            case 22:
                //if (sissy.get("test1").ach) {
                //    nav.button({
                //        "type": "btn",
                //        "name": "sporty",
                //        "left": 253,
                //        "top": 0,
                //        "width": 450,
                //        "height": 857,
                //        "image": "585_livingRoom/sporty.png"
                //    }, 585);
                //}
                break;
            case 23:
                //if (sc.taskGetStep("eva", "sissy") === 8) {

                //}
                break;
            case 0:
                break;
            default:
                break;
        }
        nav.buildnav([586, 587, 588, 589, 0]);
    }
    
};

room585.getRoomsNow = function (room = null, time = null, who = null) {
    if (room !== null && time !== null) {
        for (let i = 0; i < g.pass.length; i++) {
            if (g.pass[i].t === time) {
                switch (room) {
                    case 585: g.pass[i].r5 = who; break;
                    case 586: g.pass[i].r6 = who; break;
                    case 587: g.pass[i].r7 = who; break;
                    case 588: g.pass[i].r8 = who; break;
                    case 589: g.pass[i].r9 = who; break;
                }
                break;
            }
        }
    }

    let timenow = Math.floor(g.gethourdecimal());
    if (timenow < 21 && timenow > 7)
        timenow = 21;
    for (let i = 0; i < g.pass.length; i++) {
        if (timenow === g.pass[i].t)
            return g.pass[i];
    }
    return g.pass[g.pass.length - 1];
}

room585.btnclick = function (name) {
    switch (name) {
        case "utah":
            if (qdress.st[24].ach) {
                if (levels.get("cheer").l > 1)
                    chat(6, 585);
                else
                    chat(5, 585)
            }
            else
                chat(14, 585);
            break;
        case "sporty":
            nav.killbutton("sporty");
            nav.button({
                "type": "img",
                "name": "sporty",
                "left": 750,
                "top": 0,
                "width": 806,
                "height": 1080,
                "image": "585_livingRoom/sporty1.png"
            }, 585);
            chat(15, 585);
            break;
        default:
            break;
    }
};

room585.chatcatch = function (callback) {
    let roomEvents = room585.getRoomsNow(false);

    switch (callback) {
        case "utah3":
        case "utah4":
        case "utah5":
            nav.killall();
            nav.bg("585_livingRoom/" + callback + ".jpg");
            break;
        case "reset30":
            char.addtime(30);
            char.room(585);
            break;
        case "utah2":
            nav.killbutton("utah");
            nav.button({
                "type": "img",
                "name": "utah",
                "left": 876,
                "top": 17,
                "width": 411,
                "height": 1063,
                "image": "585_livingRoom/utah2.png"
            }, 586);
            break;
        case "reset":
            char.room(585);
            break;
        case "utah6":
            room585.getRoomsNow(589, 22, "stacy");
            char.settime(22, 3);
            char.room(585);
            break;
        case "sporty_588":
            g.pass = "sporty_588";
            char.room(588);
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
            text: "You're cute, but I only fuck cheerleaders and models. ",
            button: [
                { chatID: -1, text: "rude", callback: "reset30" }
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
                { chatID: 9, text: "So Darius do you want to get us a beer? ", callback: "utah2" },
                { chatID: 10, text: "Yeah Darius really looks super strong. I love those big arms. ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "utah",
            text: "Good call. I needed a beer. That's what I like about Darius, " +
                "always helping out. ",
            button: [
                { chatID: 10, text: "So have you thought about checking out the bedrooms? ", callback: "" },
                { chatID: -1, text: "Yeah, he is a good guy. ", callback: "reset30" },
            ]
        },
        {
            chatID: 10,
            speaker: "utah",
            text: "Huh? Everyone is out here. Why would I go into the bedroom? ",
            button: [
                { chatID: 11, text: "[Rub his dick over his pants.]", callback: "utah3" },
            ]
        },
        {
            chatID: 11,
            speaker: "utah",
            text: "I love being me. Let's go slut! ",
            button: [
                { chatID: 12, text: "[Follow him to the bedroom]", callback: "utah4" },
            ]
        },
        {
            chatID: 12,
            speaker: "utah",
            text: "Bring that ass over here, I'm going to drop some blue chip spunk into it! ",
            button: [
                { chatID: 13, text: "[Get fucked]", callback: "utah5" },
            ]
        },
        {
            chatID: 13,
            speaker: "stacy",
            text: "Get out you slut! No one touches that dick but me! ",
            button: [
                { chatID: -1, text: "*eep* [run away]", callback: "utah6" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "I really don't feel confident enough to hit on Utah",
            button: [
                { chatID: -1, text: "[Unlock Confidence in the sissy menu]", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "sporty",
            text: "Hey! Just chatting with my old friend Doofus here. He knew me " +
                "back before.. you know. ",
            button: [
                { chatID: 16, text: "Oh nice", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!doofus",
            text: "Totally. You're totally hot now! Your friend is totally hot too! " +
                "It's like you left high school and got hot and hot friends. Totally " +
                "crazy. So you you two ever do each other since you're both so hot? ",
            button: [
                { chatID: 17, text: "Oh hahaha", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "sporty",
            text: "She is hot, but I prefer a more manly man. Like you. But she " +
                "would be fun to play with. ",
            button: [
                { chatID: 18, text: "...", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!doofus",
            text: "I would love to see that! Love to see two chicks dyke out! ",
            button: [
                { chatID: 19, text: "I would be down to dyke out with you two. ", callback: "" },
                { chatID: -1, text: "Sounds fun, but I need another drink. ", callback: "reset30" },
            ]
        },
        {
            chatID: 19,
            speaker: "sporty",
            text: "Oh that's hot! Let's check out your bedroom! ",
            button: [
                { chatID: -1, text: "Yes, let's!", callback: "sporty_588" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};