//girl's change room
var room553 = {};
room553.main = function () {
    var navList = new Array();
    var btnList = new Array();
    if (cl.hasoutfit("public") === null) {
        if (cl.appearance() < 2) {

            g.pass = "girl";
            navList = [551, 0];
            if (!sc.checkevent("candy", -1)) {
                btnList.push({
                    "type": "img",
                    "name": "candy",
                    "left": 996,
                    "top": 41,
                    "width": 591,
                    "height": 1039,
                    "image": "553_girl/candy.png"
                });
                chat(0, 553);
            }
            else {
                btnList.push({
                    "type": "img",
                    "name": "candy",
                    "left": 957,
                    "top": 0,
                    "width": 823,
                    "height": 1080,
                    "image": "553_girl/candy3.png"
                });
                chat(4, 553);
            }

        }
        else {
            g.pass = "girl";
            btnList = [
                {
                    "type": "btn",
                    "name": "shower",
                    "left": 874,
                    "top": 279,
                    "width": 187,
                    "height": 393,
                    "image": "553_girl/shower.jpg"
                }
            ];
            navList = [551, 0];
        }
    }
    else
        chat(5, 553);

    $.each(btnList, function (i, v) {
        nav.button(v, 553);
    });
    nav.buildnav(navList);
};

room553.btnclick = function (name) {
    switch (name) {
        case "shower":
            char.room(554);
            break;
        default:
            break;
    }
};

room553.chatcatch = function (callback) {
    switch (callback) {
        case "peek":
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 917,
                "top": 281,
                "width": 755,
                "height": 799,
                "image": "553_girl/candy1.png"
            }, 553);
            break;
        case "candy1a":
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 917,
                "top": 281,
                "width": 755,
                "height": 799,
                "image": "553_girl/candy1a.png"
            }, 553);
            break;
        case "candy2a":
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 957,
                "top": 0,
                "width": 823,
                "height": 1080,
                "image": "553_girl/candy2a.png"
            }, 553);
            break;
        case "candy2":
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 957,
                "top": 0,
                "width": 823,
                "height": 1080,
                "image": "553_girl/candy2.png"
            }, 553);
            break;
        case "runaway":
            sc.setstep("candy", -1);
            char.room(0);
            break;
        case "runawayx":
            char.room(0);
            break;
        default:
            break;
    }
};

room553.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "candy",
            text: "Oh hi " + sc.n("me") + "! What are you doing here, come for a quick peek of my sexy body? Just a quick one, then you " +
            "need to get out or " + sc.n("g") + " will get mad. She's already yelled at me twice for having sex in the locker room!",
            button: [
                { chatID: 1, text: "Yes, just a quick peek", callback: "peek" }
            ]
        },
        {
            chatID: 1,
            speaker: "candy",
            text: "You know... I could use a good fuck! Why don't you pull that cock of your's out and fill me up?",
            button: [
                { chatID: 2, text: "Oh yes! [Pull your cock out]", callback: "candy1a" },
                { chatID: 3, text: "We can't do that here!", callback: "candy2" }
            ]
        },
        {
            chatID: 2,
            speaker: "candy",
            text: "Oh yes! Jam that in my juicy pussy!",
            button: [
                { chatID: 3, text: "[Fuck her]", callback: "candy2a" }
            ]
        },
        {
            chatID: 3,
            speaker: "g",
            text: "Dammit " + sc.n("candy") + "! I said there's no fucking in the locker room. and you... You better get out or I'm going " +
            "to twist your cock into a pretzel! Now get out of this gym!",
            button: [
                { chatID: -1, text: "[Squeal like a girl and run]", callback: "runaway" }
            ]
        },
        {
            chatID: 4,
            speaker: "g",
            text: "I thought I told you to stop coming in the girl's bathroom. Get out of here before I make you my bitch!",
            button: [
                { chatID: -1, text: "[Squeal like a girl and run]", callback: "runawayx" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "I can't go out like this!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};