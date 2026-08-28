//Room name
var room525 = {};
room525.main = function () {
    if (g.gethourdecimal() > 18 || g.gethourdecimal() < 2) {
        var btnList = [
            {
                "type": "btn",
                "name": "cindy",
                "left": 991,
                "top": 249,
                "width": 318,
                "height": 501,
                "image": "525_entrance/cindy.png"
            }
        ];

        if (g.hourBetween(19, 25) && !daily.get("chef525")) {
            daily.set("chef525");
            btnList.push({
                "type": "btn",
                "name": "chef",
                "left": 354,
                "top": 295,
                "width": 213,
                "height": 461,
                "image": "525_entrance/chef.webp"
            });
        }

        $.each(btnList, function (i, v) {
            nav.button(v, 525);
        });
        let navList = [0];
        if (cl.appearance() > 0)
            navList.push(526);
        nav.buildnav([0]);
    }
    else {
        nav.bg("525_entrance/closed.jpg");
        nav.buildnav([0]);
        //if (g.isNight()) {
        //    fame.event();
        //}
    }
};

room525.btnclick = function (name) {
    switch (name) {
        case "cindy":
            if (cl.appearance() < 1)
                chat(0, 525);
            else
                chat(1, 525);
            break;
        case "chef":
            if (cl.c.cock > 3 || cl.c.chastity !== null) {
                chat(4, 525);
            }
            else {
                if (cl.isLewd())
                    chat(3, 525);
                else
                    chat(2, 525);
            }
            break;
        default:
            break;
    }
};

room525.chatcatch = function (callback) {
    switch (callback) {
        case "enter":
            char.room(526);
            break;
        default:
            break;
    }
};

room525.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!cindy",
            text: "Hey cutie I can't let you in. You have to meet the dress code, and by dress code, you have to wear a dress. lol!",
            button: [
                { chatID: -1, text: "oh ok", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!cindy",
            text: "Looking great honey! Come on in!",
            button: [
                { chatID: -1, text: "Sweet!", callback: "enter" }
            ]
        },
        {
            chatID: 2,
            speaker: "chef",
            text: "*sigh* No. I can see your dick print. Gross. ",
            button: [
                { chatID: -1, text: "oh ok", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "chef",
            text: "*sigh* No. Just no. ",
            button: [
                { chatID: -1, text: "oh ok", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "chef",
            text: "Hey cutie. You're looking good. ",
            button: [
                { chatID: 5, text: "oh you. ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "chef",
            text: "I have something in the alley I want to show you. Follow me. ",
            button: [
                { chatID: 6, text: "I'm sure it's fine [Follow him]", callback: "" },
                { chatID: -1, text: "Sorry, busy", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "chef",
            text: " ",
            button: [
                { chatID: 6, text: "I'm sure it's fine [Follow him]", callback: "" },
                { chatID: -1, text: "Sorry, busy", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(525, room525);
