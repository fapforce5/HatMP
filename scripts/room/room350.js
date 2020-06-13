//sperm bank

var room350 = {};
room350.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "nurse",
            "left": 1038,
            "top": 455,
            "width": 166,
            "height": 292,
            "image": "350_spermBank/nurse.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 350);
    });
    nav.buildnav(navList);

    if (g.pass === "350_nursePay") {
        g.pass = null;
        chat(8, 350);
    }
};

room350.btnclick = function (name) {
    switch (name) {
        case "nurse":
            if (sc.checkevent("landlord", -1))
                chat(9, 350);
            else if (sc.getstep("landlord") > 2) {
                if (cl.getCum() < .75)
                    chat(3, 350);
                else
                    chat(6, 350);
            }
            else
                chat(0, 350);
            break;
        default:
            break;
    }
};

room350.chatcatch = function (callback) {
    switch (callback) {
        case "waitingRoom":
            g.pass = "landlord";
            char.room(351);
            break;
        case "payTheMan":
            g.mod("money", 30);
            break;
        case "leave5":
            char.room(0);
            break;
        default:
            break;
    }
};

room350.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: sc.n("me") + " what are you doing here?",
            button: [
                { chatID: 1, text: "I came to make a deposit", callback: "" },
                { chatID: 2, text: "Just wanted to say hi.", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "I don't think so. We don't take sperm from college dropouts.",
            button: [
                { chatID: -1, text: "Awww shucks", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "That's nice, now run along.",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: sc.n("me") + " what are you doing here?",
            button: [
                { chatID: 4, text: "I came to make a deposit", callback: "" },
                { chatID: 2, text: "Just wanted to say hi.", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Has it been more than 3 days since you've touched yourself?",
            button: [
                { chatID: 5, text: "wel.... no", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "You bring great shame to your family, you truely are a filthy pig...",
            button: []
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: sc.n("me") + " what are you doing here?",
            button: [
                { chatID: 7, text: "I came to make a deposit", callback: "" },
                { chatID: 2, text: "Just wanted to say hi.", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "sigh.... you're lucky our stocks are so low due to this damned sperm theif. Go into waiting room 1, disrobe, and I'll be right in.",
            button: [
                { chatID: -1, text: "Yes " + sc.n('landlord') + ". [Go to waiting room]", callback: "waitingRoom" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "Ok " + sc.n("me") + ", since your sperm is so basic you can have $30 for it. It's not much but, " +
                "neither is the demand for drop out sperm. ",
            button: [
                { chatID: -1, text: "[Receive $30]", callback: "payTheMan" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Uggghhhh What are you doing here?",
            button: [
                { chatID: 10, text: "Making a deposit?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You have lost your damned mind! You're lucky I'm at work or I'd put a whooping to your backside.",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave5" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};