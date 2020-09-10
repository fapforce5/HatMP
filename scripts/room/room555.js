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
    $.each(btnList, function (i, v) {
        nav.button(v, 555);
    });
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
            if (sc.getstep("missy") > 26)
                chat(28, 555);
            else
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
        case "thrust":
            g.pass++;
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "thrust1",
                "left": 231,
                "top": 0,
                "width": 1599,
                "height": 1080,
                "image": "555_backgym/thrust2.png"
            }, 555);
            break;
        case "thrust1":
            if (g.pass > 5) {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "thrust1",
                    "left": 231,
                    "top": 0,
                    "width": 1559,
                    "height": 1080,
                    "image": "555_backgym/thrust3.png"
                }, 555);
                chat(25, 555);
            }
            else {
                nav.killall();
                nav.button({
                    "type": "btn",
                    "name": "thrust",
                    "left": 231,
                    "top": 0,
                    "width": 1559,
                    "height": 1080,
                    "image": "555_backgym/thrust1.png"
                }, 555);
            }
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
        case "exitLowercum":
            cl.doCum();
            g.mod("fitness", 30);
            g.mod("energy", -50);
            g.mod("body", 34);
            char.addtime(60);
            g.setflag("gworkout");
            cl.undo();
            char.room(551);
            break;
        case "hips":
            if (sc.checkevent("g", -3)) {
                chat(16, 555);
            }
            else {
                chat(16, 555);
                sc.setstep("g", -3);
            }
            break;
        case "hip1":
            nav.killbutton("g");
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 385,
                "top": 529,
                "width": 1221,
                "height": 551,
                "image": "555_backgym/thrust0b.png"
            }, 555);
            break;
        case "hip2":
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 385,
                "top": 529,
                "width": 1221,
                "height": 551,
                "image": "555_backgym/thrust0a.png"
            }, 555);
            break;
        case "hip3":
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 389,
                "top": 0,
                "width": 1234,
                "height": 1080,
                "image": "555_backgym/thrust0c.png"
            }, 555);
            break;
        case "hip4":
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 385,
                "top": 0,
                "width": 1221,
                "height": 1080,
                "image": "555_backgym/thrust0d.png"
            }, 555);
            break;
        case "hip5":
            g.mod("arousal", 100);
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 231,
                "top": 0,
                "width": 1599,
                "height": 1080,
                "image": "555_backgym/thrust1.png"
            }, 555);
            break;
        case "hip5Click":
            g.pass = 0;
            nav.killbutton("hip");
            nav.button({
                "type": "btn",
                "name": "thrust",
                "left": 231,
                "top": 0,
                "width": 1599,
                "height": 1080,
                "image": "555_backgym/thrust1.png"
            }, 555);
            break;
        case "hip6":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 231,
                "top": 0,
                "width": 1559,
                "height": 1080,
                "image": "555_backgym/thrust2.png"
            }, 555);
            break;
        case "hip7":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "thrust",
                "left": 231,
                "top": 0,
                "width": 1559,
                "height": 1080,
                "image": "555_backgym/thrust4.png"
            }, 555);
            break;
        case "hip8":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "g",
                "left": 1321,
                "top": 86,
                "width": 549,
                "height": 994,
                "image": "555_backgym/gcum.png"
            }, 555);
            break;
        case "resetLeave":
            cl.undo();
            char.room(551);
            break;
        case "spar":
            if (inv.has("sewer"))
                chat(30, 555);
            else
                chat(29, 555);
            break;
        case "training":
            char.room(556);
            break;
        case "fight":
            g.internal = { name: "g", bg: "gym", returnRoom: 556 };
            char.room(227);
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
                { chatID: -1, text: "Hip Thrusters", callback: "hips" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
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
        {
            chatID: 16,
            speaker: "g",
            text: "Ok champ, I'm going to let you try some hip thrusters. Lay on your back with your knees up, then thrust up your hips. " +
            "focus on squeezing your butt when you do it. Ready",
            button: [
                { chatID: 17, text: "I am", callback: "hip1" }
            ]
        },
        {
            chatID: 17,
            speaker: "g",
            text: "Ok, now thrust your hips up",
            button: [
                { chatID: 18, text: "I am", callback: "hip2" }
            ]
        },
        {
            chatID: 18,
            speaker: "g",
            text: "And down",
            button: [
                { chatID: 19, text: "I am", callback: "hip1" }
            ]
        },
        {
            chatID: 19,
            speaker: "g",
            text: "This is boring...",
            button: [
                { chatID: 20, text: "hmmm", callback: "hip3" }
            ]
        },
        {
            chatID: 20,
            speaker: "g",
            text: "Now thrust up",
            button: [
                { chatID: 21, text: "hmmm", callback: "hip4" }
            ]
        },
        {
            chatID: 21,
            speaker: "g",
            text: "And down",
            button: [
                { chatID: 22, text: "hmmm", callback: "hip3" }
            ]
        },
        {
            chatID: 22,
            speaker: "g",
            text: "You know, it's such a waste of a good cock... Let's try something a bit different....",
            button: [
                { chatID: 23, text: "?", callback: "hip5" }
            ]
        },
        {
            chatID: 23,
            speaker: "g",
            text: "OOooooo thrust up! thrust up",
            button: [
                { chatID: 24, text: "[Thrust into her ass]", callback: "hip6" }
            ]
        },
        {
            chatID: 24,
            speaker: "g",
            text: "Fuck keep going",
            button: [
                { chatID: -1, text: "...", callback: "hip5Click" }
            ]
        },
        {
            chatID: 25,
            speaker: "g",
            text: "I can feel your cum filling my tight ass up!",
            button: [
                { chatID: 26, text: "...", callback: "hip7" }
            ]
        },
        {
            chatID: 26,
            speaker: "g",
            text: "It's sooo full of your cum!",
            button: [
                { chatID: 27, text: "...", callback: "hip8" }
            ]
        },
        {
            chatID: 27,
            speaker: "g",
            text: "Good workout today. I love a cum filled ass. Now hit the showers champ.",
            button: [
                { chatID: -1, text: "...", callback: "exitLowercum" }
            ]
        },
        {
            chatID: 28,
            speaker: "g",
            text: "What will it be today shrimp?",
            button: [
                { chatID: 9, text: "Workout", callback: "" },
                { chatID: -1, text: "Spar", callback: "spar" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
            ]
        },
        {
            chatID: 29,
            speaker: "g",
            text: "Ok wimp, I'm going to train you how to fight.",
            button: [
                { chatID: -1, text: "[Begin training]", callback: "training" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
            ]
        },
        {
            chatID: 30,
            speaker: "g",
            text: "What will it be today shrimp?",
            button: [
                { chatID: -1, text: "[Begin training]", callback: "training" },
                { chatID: 31, text: "[Spar]", callback: "" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
            ]
        },
        {
            chatID: 31,
            speaker: "g",
            text: "Future release will include a full walkthrough and spar",
            button: [
                { chatID: 30, text: "Oh well...", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};