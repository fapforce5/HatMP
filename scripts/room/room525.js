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
            if (missy.getenvelope("chef").active || sc.getLevel("chef") > 7) {
                chat(5, 525);
            }
            else if (cl.isLewd())
                chat(3, 525);
            else if (cl.c.cock === 5)
                chat(6, 525);
            else
                chat(2, 525);

            break;
        case "chef0":
            if (missy.getenvelope("chef").active) {

            }
            else {

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
        case "chef0":
            nav.kill();
            nav.bg("525_entrance/chef0.webp");
            nav.button({
                "type": "btn",
                "name": "chef0",
                "left": 1145,
                "top": 96,
                "width": 411,
                "height": 889,
                "image": "525_entrance/check0_d.webp"
            }, 525);
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
            text: "Haha. I can see your dick print. ",
            button: [
                { chatID: -1, text: "oh ok", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "chef",
            text: "Now that's a slut! ",
            button: [
                { chatID: -1, text: "Thanks? ", callback: "" }
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
                { chatID: 7, text: "I'm sure it's fine [Follow him]", callback: "chef0" },
                { chatID: -1, text: "Sorry, busy", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "chef",
            text: "Smells like sushi... or is that your nasty cunt! Haha",
            button: [
                { chatID: -1, text: "*sigh*", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(525, room525);
