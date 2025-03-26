//Room name
var room150 = {};
room150.main = function () {
    if (sc.getMission("jones", "fail").startedOrComplete) {
        nav.bg("150_jones/day.jpg", "150_jones/night.jpg");
        chat(7, 150);
    }
    if (g.isNight()) {
        nav.bg("150_jones/night.jpg");
        chat(0, 150);
    }

    nav.bg("150_jones/jeeves.jpg");
    switch (sc.taskGetStep("jones", "invite")) {
        case 0: 
        case 1:
            chat(1, 150);

            break;
    }
};

room150.btnclick = function (name) {
    switch (name) {
        case "door":
            nav.button({
                "type": "img",
                "name": "jones",
                "left": 974,
                "top": 107,
                "width": 515,
                "height": 973,
                "image": "150_jones/jones.png"
            }, 150);
            var onc = gv.get("oncase");
            if (onc === "clothes0") {
                chat(3, 150);
            }
            else if (onc === "clothes1") {
                chat(4, 150);
            }
            else if (onc === "clothes2" || onc === "clothes3") {
                if (cl.c.panties === null && cl.c.bra === null)
                    chat(4, 150);
                else
                    chat(5, 150);
            }
            else if (g.sissy[34].ach) {
                char.room(152);
            }
            else {
                chat(0, 150);
            }
            break;
        default:
            break;
    }
};

room150.chatcatch = function (callback) {
    switch (callback) {
        case "bitch":
        case "bg":
        case "bitch_smile":
            nav.bg("150_jones/" + callback + ".jpg");
            break;
        case "endBad":
            sc.completeMission("jones", "invite", false);
            sc.startMission("jones", "fail");
            char.addtime(60);
            levels.mod("dom", 100);
            char.room(0);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room150.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!boy",
            text: sc.n("jones") + " doesn't accept guests after hours. You'll have to come " +
                "back during the day. ",
            button: [
                { chatID: 1, text: "Yes sir", callback: "leave" },
            ]
        },
        {
            chatID: 1,
            speaker: "butler",
            text: "Huh? I don't remember " + sc.n("jones") + " ordering a common trollop. " +
                "hehe. So what can I do for you? ",
            button: [
                { chatID: 2, text: sc.n("jones") + " asked me to come by. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "jones",
            text: "Oh! So it appears we did order a common trollop! And it's been delivered. " +
                "How wonderful! I'll fetch " + sc.n("!bitch") + " straight away. A most lovely " +
                "woman who can assist you. ",
            button: [
                { chatID: 3, text: "Oh thanks. ", callback: "bitch" }
            ]
        },
        {
            chatID: 3,
            speaker: "!bitch",
            text: "Fuck! I thought I told you to stay the fuck away! Fuck fuck fuck! " +
                "You really are an idiot aren't you! fuck. Wait right here while I " +
                "talk to " + sc.n("jones") + " on what to do with you. ",
            button: [
                { chatID: 4, text: "ok [wait] ", callback: "bg" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "She's such a bitch! Maybe that's why everyone calls her " + sc.n("!bitch") +
                ". I hope I get to talk just with " + sc.n("jones") + " and she leaves us " +
                "alone. I just don't get why she's always so mean to me. ",
            button: [
                { chatID: 5, text: "...", callback: "bitch_smile" }
            ]
        },
        {
            chatID: 5,
            speaker: "!bitch",
            text: sc.n("jones") + " decided that you aren't ready to attend to him until " +
                "after I have properly trained you as his house bitch. Only after I have " +
                "properly broken you down and created you into a proper house bitch can " +
                "you attend to " + sc.n("jones") + ". You can leave now, or do what ever " +
                "I tell you, and you won't like it! ",
            button: [
                { chatID: 8, text: "I'm in. I'll do anything to see " + sc.n("jones") + " again. ", callback: "bitch" },
                { chatID: 6, text: "Life is too short. I'm not going to deal with your craziness.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!bitch",
            text: "Perfect. I'll let " + sc.n("butler") + " know you'll never be back. ",
            button: [
                { chatID: -1, text: "Do that. You're a terrible person and I hope I never see you again. ", callback: "endBad" }
            ]
        },
        {
            chatID: 7,
            speaker: "!boy",
            text: sc.n("jones") + " said you're aren't allowed on this property. ",
            button: [
                { chatID: -1, text: "Yeah. That sounds right. ", callback: "leave" }
            ]
        },
        {
            chatID: 8,
            speaker: "!bitch",
            text: "pfffft. Fine! Strip off your clothes. You only wear what I tell you " +
                "to wear. When you come here you will strip down get on your knees " +
                "with your hands behind your back and wait for me. It's called the " +
                "exposed position. You'll assume that position when told. " +
                "Sometime you'll have to wait for " + +
                "hours if I'm busy. But once you enter that is what you do until " +
                sc.n("jones") + " or I tell you otherwise. Got it! ",
            button: [
                { chatID: 9, text: "Yeah ", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "!bitch",
            text: "Well.... I'm waiting! ",
            button: [
                { chatID: -1, text: "oh", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
