//Room name
var room555 = {};
room555.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "chad",
            "left": 506,
            "top": 25,
            "width": 637,
            "height": 1055,
            "image": "555_backgym/chad.png"
        },
        {
            "type": "btn",
            "name": "g",
            "left": 1321,
            "top": 86,
            "width": 549,
            "height": 994,
            "image": "555_backgym/g.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 555);
    });
    nav.buildnav(navList);
    chat(0, 555);
};

room555.btnclick = function (name) {
    switch (name) {
        case "chad":
            if (cl.appearance() > 1)
                chat(7, 555);
            else
                chat(8, 555);
            break;
        case "g":
            nav.killbutton("chad");
            chat(9, 555);
            break;
        case "row1":
            nav.killall();
            nav.bg("555_backgym/pull2.jpg");
            nav.button({
                "type": "btn",
                "name": "row2",
                "left": 380,
                "top": 0,
                "width": 236,
                "height": 1080,
                "image": "555_backgym/rope2l.png"
            }, 555);
            nav.button({
                "type": "btn",
                "name": "row2",
                "left": 1306,
                "top": 0,
                "width": 236,
                "height": 1066,
                "image": "555_backgym/rope2r.png"
            }, 555);
            if (g.pass === 5)
                chat(13, 555);
            break;
        case "row2":
            g.pass++;
            nav.killall();
            nav.bg("555_backgym/pull1.jpg");
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 0,
                "top": 0,
                "width": 364,
                "height": 1080,
                "image": "555_backgym/rope1l.png"
            }, 555);
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 1674,
                "top": 0,
                "width": 246,
                "height": 1066,
                "image": "555_backgym/rope1r.png"
            }, 555);
            break;
        default:
            break;
    }
};

room555.chatcatch = function (callback) {
    switch (callback) {
        case "strip":
            cl.nude();
            cl.display();
            if (cl.c.chest > 3)
                chat(1, 555);
            else if (cl.c.chest > 2)
                chat(2, 555);
            else if (cl.c.chest === 2)
                chat(3, 555);
            else if (cl.c.chastity !== null)
                chat(4, 555);
            else if (cl.c.cock < 2)
                chat(5, 555);
            else
                chat(6, 555);
            break;
        case "rows":
            if (!sc.checkevent("g", -2)) {
                sc.setstep("g", -2);
                chat(10, 555);
            }
            else {

                chat(12, 555);
            }
            break;
        case "rows1":
            g.pass = 0;
            nav.killall();
            nav.bg("555_backgym/pull1.jpg");
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 0,
                "top": 0,
                "width": 364,
                "height": 1080,
                "image": "555_backgym/rope1l.png"
            }, 555);
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 1674,
                "top": 0,
                "width": 246,
                "height": 1066,
                "image": "555_backgym/rope1r.png"
            }, 555);
            break;
        case "toetouch":
            nav.killbutton("g");
            nav.button({
                "type": "img",
                "name": "toe",
                "left": 633,
                "top": 0,
                "width": 952,
                "height": 1080,
                "image": "555_backgym/bend.gif"
            }, 555);
            setTimeout(function () { chat(15, 555); }, 5000);
            break;
        case "exitUpper":
            g.mod("fitness", 30);
            g.mod("energy", -50);
            g.mod("leg", 34);
            char.addtime(60);
            g.setflag("gworkout");
            cl.undo();
            char.room(551);
            break;
        case "exitLower":
            g.mod("fitness", 30);
            g.mod("energy", -50);
            g.mod("body", 34);
            char.addtime(60);
            g.setflag("gworkout");
            cl.undo();
            char.room(551);
            break;
        default:
            break;
    }
};

room555.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "g",
            text: "Clothes aren't allowed back here. Strip if off bitch.",
            button: [
                { chatID: -1, text: "[Strip]", callback: "strip" }
            ]
        },
        {
            chatID: 1,
            speaker: "chad",
            text: "Nice tits loser",
            button: [
                { chatID: -1, text: "Thanks?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "Awww your tits are coming in nicely",
            button: [
                { chatID: -1, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "chad",
            text: "Hahaha, look at those tiny titties! You're such a bitch your body is turning into one!",
            button: [
                { chatID: -1, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "chad",
            text: "Hahaha. What kind of loser locks their cock away? I always knew you were a loser, but I didn't know you were such a little " +
            "faggot too!",
            button: [
                { chatID: -1, text: "oh", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "g",
            text: "Oh wow, You're packing such a big beautiful cock! You should show that thing off more often!",
            button: [
                { chatID: -1, text: "Thank you", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "chad",
            text: "Hahaha you have such a tiny cock! I get chicks laugh at you when you pull down your pants!",
            button: [
                { chatID: -1, text: "Oh, they do..", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "chad",
            text: "You're looking good, but this will be a future release.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "chad",
            text: "No way loser, I'm not training you. Maybe come back when you got some tits faggot.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "g",
            text: "Ok champ, let's work on that puny little body of yours. What do you want to do? ",
            button: [
                { chatID: 14, text: "Toe Touches", callback: "" },
                { chatID: -1, text: "Standing Rows", callback: "rows" },
                { chatID: -1, text: "n/a", callback: "" },
                { chatID: -1, text: "Nevermind", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "g",
            text: "So this is the first time we're going to do Standing Rows. The point of this exercise is to make you back more sexy and " +
                "give you an hourglass figure. I get so bored with the normal Standing Rows so I put in a bit of a twist, you're going to lift " +
            "me up. The added bonus for me is that I like being tied up.",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "g",
            text: "I'm going to tie myself into position, you grab the ropes and lift me up. Do you think you can handle that?",
            button: [
                { chatID: 12, text: "I can!", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "g",
            text: "Don't drop me with those puny little arms of yours!",
            button: [
                { chatID: -1, text: "Ok!", callback: "rows1" }
            ]
        },
        {
            chatID: 13,
            speaker: "g",
            text: "Good work out. Now hit the showers bitch.",
            button: [
                { chatID: -1, text: "Ok!", callback: "exitUpper" }
            ]
        },
        {
            chatID: 14,
            speaker: "g",
            text: "I like watching you do toe touches. Your pathetic little butt actually looks cute when you do it. Ready begin.",
            button: [
                { chatID: -1, text: "Ok!", callback: "toetouch" }
            ]
        },
        {
            chatID: 15,
            speaker: "g",
            text: "Ok slick, that's enough. Go hit the showers.",
            button: [
                { chatID: -1, text: "Ok!", callback: "exitLower" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};