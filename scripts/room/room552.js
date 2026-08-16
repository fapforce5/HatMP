//boy's changing room
var room552 = {};
room552.main = function () {
    if (cl.hasoutfit("public") === null) {
        g.pass = "boy";
        var btnList = [
            {
                "type": "btn",
                "name": "shower",
                "left": 874,
                "top": 279,
                "width": 187,
                "height": 393,
                "image": "552_boy/shower.jpg"
            }
        ];
        if (Math.floor(Math.random() * 2) === 1 && !daily.get("room552handjob")) {
            btnList.push({
                "type": "img",
                "name": "treyvon",
                "left": 1020,
                "top": 27,
                "width": 601,
                "height": 1053,
                "image": "552_boy/man.webp"
            });
            btnList.push({
                "type": "grab",
                "name": "treyvonTowel",
                "left": 1151,
                "top": 662,
                "width": 382,
                "height": 299,
                "image": "552_boy/towel.webp"
            });
        }
        var navList = [551, 554, 0];
        $.each(btnList, function (i, v) {
            nav.button(v, 552);
        });
        nav.buildnav(navList);
    }
    else
        chat(0, 552);
};

room552.btnclick = function (name) {
    switch (name) {
        case "shower":
            char.room(554);
            break;
        case "treyvonTowel":
            nav.killbutton("treyvonTowel");
            if (qdress.st[24].ach) {
                chat(4, 552);
            }
            else {
                chat(1, 552);
            }
            break;
        default:
            break;
    }
};

room552.chatcatch = function (callback) {
    switch (callback) {
        case "Complete":
            char.room(551);
            break;
        case "stroke0":
            nav.kill();
            zcl.handjob(0, 300, .8, "", false, "b");
            break;
        case "stroke1":
            zcl.handjob(0, 300, .8, "stroke", false, "b");
            break;
        case "stroke2":
            daily.set("room552handjob");
            levels.gavehandjob("m", "!bbc");
            cl.c.cumface = true;
            cl.display();
            zcl.handjob(0, 300, .8, "cum", false, "b");
            break;
        case "stroke3":
            daily.set("room552handjob");
            levels.gavehandjob("m", "!bbc");
            cl.c.cumface = true;
            cl.display();
            break;
        default:
            break;
    }
};

room552.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I can't go out like this.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!bbc",
            text: "Hey shrimp, you like how my cock looks?",
            button: [
                { chatID: 2, text: "I do", callback: "" },
                { chatID: 3, text: "I don't know why I did that", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!bbc",
            text: "I know, you keep pulling my towel and I'll shove this cock straight up your ass.",
            button: [
                { chatID: -1, text: "I know [Need to unlock Secude Men]", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!bbc",
            text: "Don't lie, you wanted to check out what a real man looks like cock slut.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!bbc",
            text: "I see you're a horny cock slut. Quick, stroke my dick before someone comes in. ",
            button: [
                { chatID: 5, text: "Oh yeah!", callback: "stroke0" },
                { chatID: 3, text: "I don't know why I did that", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!bbc",
            text: "Don't just stare at it. Rub it.",
            button: [
                { chatID: 6, text: "Rub his penis. ", callback: "stroke1" }
            ]
        },
        {
            chatID: 6,
            speaker: "!bbc",
            text: "Oh yeah, that's it. Keep rubbin ma dick. ",
            button: [
                { chatID: 7, text: "...", callback: "stroke2" }
            ]
        },
        {
            chatID: 7,
            speaker: "!bbc",
            text: "Hehehe. That's what you get for rubing a man's penis. Cum on yo face! Thanks " + gender.pronoun("boy") + ". ",
            button: [
                { chatID: -1, text: "hehe. Yeah", callback: "reset" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(552, room552);
