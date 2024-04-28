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
            if (missy.get("uniform") === 0) {
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
            }
            else if (missy.get("jobCleanToiletUniform") === 0) {
                nav.killall();
                nav.bg("201_bathroom/panties0.jpg");
                chat(7, 220);
            }
            else {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": 940,
                    "top": 554,
                    "width": 274,
                    "height": 526,
                    "image": "201_bathroom/201_panties.png"
                }, 220);
                if (gv.get("arousal") > 50) {
                    chat(1, 220);
                }
                else {
                    chat(9, 220);
                }
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
            if (missy.get("uniform") === 0)
                nav.bg("201_bathroom/missy1.jpg");
            else
                nav.bg("201_bathroom/missy1_panties.jpg");
            break;
        case "clean1x":
            nav.killall();
            if (missy.get("uniform") === 0)
                nav.bg("201_bathroom/missy0.jpg");
            else
                nav.bg("201_bathroom/missy0_panties.jpg");
            break;
        case "badCleanEnd":
            missy.didJob(0, .5, null);
            missy.mod("mood", -10);
            char.room(224);
            break;
        case "goodCleanEnd":
            missy.didJob(0, 1, null);
            missy.mod("mood", 10);
            char.room(224);
            break;
        case "panties1":
            nav.bg("201_bathroom/panties1.jpg");
            break;
        case "panties2":
            nav.bg("201_bathroom/bg0.jpg");
            nav.button({
                "type": "img",
                "name": "name",
                "left": 940,
                "top": 554,
                "width": 274,
                "height": 526,
                "image": "201_bathroom/201_panties.png"
            }, 220);
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
        {
            chatID: 7,
            speaker: "missy",
            text: "So now that you're my little panty boy, it's time to celebrate this little achievement. ",
            button: [
                { chatID: 8, text: "...", callback: "panties1" },
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "From now on you'll " +
                "clean my bathroom in only your panties. You might think that I'm doing this because I'm making you more " +
                "confident in your panties, or I'm incrasing your boldness. Both would be wrong. I just think it's funny watching " +
                "on you knees cleaning my dirty toilet in your panties. Now get to work panty boy. ",
            button: [
                { chatID: 9, text: "Thank you ma'am", callback: "panties2" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "It's not as bad cleaning the bathroom in panties. Better than a suit. Still shitty.. heh, shitty. ",
            button: [
                { chatID: 5, text: "...", callback: "clean1" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};