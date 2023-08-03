//Room name
var room220 = {};
room220.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "clean",
            "left": 562,
            "top": 586,
            "width": 283,
            "height": 482,
            "image": "201_bathroom/clean.png"
        }
    ];
    if (Math.floor(Math.random() * 3) === 0) {
        btnList.push({
            "type": "btn",
            "name": "pills",
            "left": 1459,
            "top": 685,
            "width": 41,
            "height": 28,
            "image": "201_bathroom/pills.png"
        })
    }
    $.each(btnList, function (i, v) {
        nav.button(v, 220);
    });
};

room220.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "name",
                "left": 940,
                "top": 554,
                "width": 274,
                "height": 526,
                "image": "201_bathroom/201_clothes.png"
            }, 220);
            if (gv.get("arousal") > 50) {
                chat(1, 220);
            }
            else {
                chat(4, 220);
            }
            break;
        case "pills":
            chat(0, 220);
            break;
        default:
            break;
    }
};

room220.chatcatch = function (callback) {
    switch (callback) {
        case "takePills":
            inv.addMulti("hormone", 3);
            nav.killbutton("pills");
            break;
        case "clean1":
            nav.bg("201_bathroom/bg0.jpg");
            gv.mod("arousal", 15);
            break;
        case "clean2":
            nav.killall();
            nav.bg("201_bathroom/missy2.jpg");
            break;
        case "clean1x":
            nav.killall();
            nav.bg("201_bathroom/missy1.jpg");
            break;
        case "badCleanEnd":
            missy.mod(5, 1);//jobCleanToilet
            missy.mod(28, 1);//jobCleanToiletThisWeek
            missy.mod(0, -10);
            char.room(224);
            break;
        case "goodCleanEnd":
            missy.mod(5, 1);//jobCleanToilet
            missy.mod(28, 1);//jobCleanToiletThisWeek
            missy.mod(0, 10);
            char.room(224);
            break;
        default:
            break;
    }
};

room220.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Hmmm. Looks like " + sc.n("cecilia") + " left some pills in here. Should I take them?",
            button: [
                { chatID: -1, text: "Take them!", callback: "takePills" },
                { chatID: -1, text: "They aren't mine. I should leave them. ", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I'm so horny I can't concentrate on cleaning this stupid dirty bathroom! ",
            button: [
                { chatID: 2, text: "...", callback: "clean1" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "That should do it! ",
            button: [
                { chatID: 3, text: "...", callback: "clean2" },
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "I see you failed to properly clean this mess! You fogot this big blue cum filled " +
                "condom that was under the sink! I should rub your nose in it, but I won't. This " +
                "time. Expect your pay to get docked for doing a substandard job. Now go get lunch. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "badCleanEnd" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Who the fuck cleans toilets in a suit? This is so dumb, how did I get myself into " +
                "this stupid mess. ",
            button: [
                { chatID: 5, text: "...", callback: "clean1" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "That should do it! ",
            button: [
                { chatID: 6, text: "...", callback: "clean1x" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "That's a good boy. You earned your pay. Keep doing well on the small jobs, and " +
                "you'll do amazing on the big one. ",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "goodCleanEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};