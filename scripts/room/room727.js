//Room name
var room727 = {};
room727.main = function () {
    if (g.pass === "727tim") {
        g.pass = "";
        nav.bg("727_bathroom/toilettall.jpg");
        nav.button({
            "type": "img",
            "name": "tim",
            "left": 814,
            "top": 0,
            "width": 454,
            "height": 1080,
            "image": "727_bathroom/tim1.png"
        }, 728);
        nav.button({
            "type": "btn",
            "name": "pants",
            "left": 893,
            "top": 609,
            "width": 363,
            "height": 471,
            "image": "727_bathroom/tim1pants.png"
        }, 727);
        var timStep = sc.getstep("tim");
        if (timStep < 2) {
            chat(0, 727);
        }
    }
    else if (g.pass === "supriseSex") {
        nav.button({
            "type": "btn",
            "name": "supriseSex",
            "left": 599,
            "top": 64,
            "width": 135,
            "height": 1016,
            "image": "727_bathroom/stall.png"
        }, 727);
        g.setflag("cindy");
        chat(9, 727);
        nav.buildnav([725, 726, 0]);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "mirror",
                "left": 815,
                "top": 251,
                "width": 801,
                "height": 357,
                "image": "727_bathroom/mirror.png"
            },
            {
                "type": "btn",
                "name": "stall",
                "left": 599,
                "top": 64,
                "width": 135,
                "height": 1016,
                "image": "727_bathroom/stall.png"
            },
        ];
        var navList = [725, 726, 0];
        $.each(btnList, function (i, v) {
            nav.button(v, 727);
        });
        nav.buildnav(navList);
    }
};

room727.btnclick = function (name) {
    switch (name) {
        case "mirror":
            g.pass = 727;
            char.room(27);
            break;
        case "stall":
            nav.killbutton("stall");
            nav.killbutton("mirror");
            if (g.pass === "slutfuck") {
                //fuck slut
            }
            else {
                nav.bg("727_bathroom/toilet.jpg");
            }
            break;
        case "pants":
            nav.killbutton("pants");
            nav.modbutton("tim", "727_bathroom/tim2.png", null, null);
            nav.button({
                "type": "kiss",
                "name": "tim2cock",
                "left": 971,
                "top": 700,
                "width": 124,
                "height": 169,
                "image": "727_bathroom/tim2cock.png"
            }, 727);
            chat(1, 727);
            break;
        case "tim2cock":
            nav.killbutton("tim2cock");
            nav.modbutton("tim", "727_bathroom/tim2a.png", null, null);
            chat(2, 727);
            break;
        case "supriseSex":
            nav.killall();
            nav.bg("727_bathroom/girl1.jpg");
            g.mod("arousal", 100);
            g.roomTimeout = setTimeout(function () { chat(10, 727); }, 2000);
            break;
        default:
            break;
    }
};

room727.chatcatch = function (callback) {
    switch (callback) {
        case "tim2b":
            nav.modbutton("tim", "727_bathroom/tim2b.png", null, null);
            break;
        case "tim2c":
            nav.killbutton("tim");
            nav.bg("727_bathroom/tim2c.jpg");
            break;
        case "tim2d":
            nav.bg("727_bathroom/toilettall.jpg");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 60,
                "top": 0,
                "width": 1170,
                "height": 1080,
                "image": "727_bathroom/time2d.png"
            }, 727);
            zcl.kneel(-100, 200, 1.5, "open");

            break;
        case 'tim2da':
            nav.killbutton("tim2d");
            zcl.kneel(-100, 200, 1.5, "open");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 501,
                "top": 0,
                "width": 1170,
                "height": 1080,
                "image": "727_bathroom/time2d.png"
            }, 727);
            zcl.kneel(-100, 200, 1.5, "open");
            break;
        case "tim2e":
            nav.killbutton("tim2d");
            zcl.displayMain(-250, -800, .9, "mirror");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 883,
                "top": 780,
                "width": 360,
                "height": 300,
                "image": "727_bathroom/tim2e.gif"
            }, 727);
            g.roomTimeout = setTimeout(function () { chat(7, 727); }, 3000);
            break;
        case "tim2f":
            cl.c.cumface = true;
            zcl.displayMain(-200, -200, .6, "mirror");
            nav.killbutton("tim2d");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 1299,
                "top": 0,
                "width": 621,
                "height": 687,
                "image": "727_bathroom/tim2f.png"
            }, 727);

            break;
        case "tim2end":
            g.mod("sissy", 30);
            g.setflag("tim");
            sc.setstep("tim", 2);
            char.addtime(60);
            char.room(727);
            break;
        case "girl2":
            nav.bg("727_bathroom/girl2.jpg");
            break;
        case "girl3":
            cl.changeClothingSave();
            cl.c.panties = null;
            cl.c.pants = null;
            cl.c.swimsuit = null;
            cl.c.pj = null;
            zcl.displayMain(-800, -150, .4, "clothes", true);
            if (cl.c.chastity !== null)
                chat(12, 727);
            else if (cl.c.cock > 2)
                chat(14, 727);
            else
                chat(15, 727);
            break;
        case "girl3a":
            nav.killall();
            nav.bg("727_bathroom/girl3.jpg");
            break;
        case "girl4":
            nav.bg("727_bathroom/girl4.jpg");
            break;
        case "girl5":
            nav.bg("727_bathroom/girl5.jpg");
            break;
        case "girl6":
            nav.bg("727_bathroom/girl6.jpg");
            break;
        case "girl7":
            cl.doCum(false);
            nav.bg("727_bathroom/girl7.jpg");
            break;
        case "girl8":
            cl.changeClothing();
            cl.display();
            g.pass = g.internal = null;
            g.mod("sissy", 20);
            g.mod("fuckPussy", 1);
            g.setflag("cindy");
            char.addtime(60);
            sc.setstep("cindy", 3);
            char.room(727);
            break;
        case "girlBad":
            cl.changeClothing();
            cl.display();
            g.pass = g.internal = null;
            g.setflag("cindy");
            char.addtime(60);
            char.room(727);
            break;
        default:
            break;
    }
};

room727.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tim",
            text: "It's ok my sexy girl. My dick don't bite. Pull it out.",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tim",
            text: "That's a sexy cock isn't it? Why don't you kiss it.",
            button: [
                { chatID: -1, text: "Like this?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "tim",
            text: "That's a beautiful cock isn't it? I bet your pussy is dripping looking at it. Let me strip all this off " +
            "so you can see my awesome abs while you suck it.",
            button: [
                { chatID: 3, text: "Oh yeah baby, make my pussy wet.", callback: "tim2b" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I can't believe he still thinks I'm a girl. I wonder what he would do if he found out.",
            button: [
                { chatID: 4, text: "...", callback: "tim2c" }
            ]
        },
        {
            chatID: 4,
            speaker: "tim",
            text: "Oh yeah slut, like what you see?",
            button: [
                { chatID: 5, text: "Uh huh.", callback: "tim2d" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I can't wait for him to start fucking my face!",
            button: [
                { chatID: 6, text: "...", callback: "tim2da" }
            ]
        },
        {
            chatID: 6,
            speaker: "tim",
            text: "I'm going to throat fuck you.",
            button: [
                { chatID: -1, text: "GACKKKK", callback: "tim2e" }
            ]
        },
        {
            chatID: 7,
            speaker: "tim",
            text: "I'm going to cum all over your face so everyone knows that you sucked the best dick in this club!",
            button: [
                { chatID: 8, text: "Huh?", callback: "tim2f" }
            ]
        },
        {
            chatID: 8,
            speaker: "tim",
            text: "I'm going to take off. You do look beautiful wearing my cum. You should totally wear that home! ",
            button: [
                { chatID: -1, text: "You're right, I'm beautiful in my cum.", callback: "tim2end" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "She's probably in the stall. I'll just walk right in, or I can chicken out.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "cindy",
            text: "...",
            button: [
                { chatID: 11, text: "Oh... hi... I thought you...", callback: "girl2" }
            ]
        },
        {
            chatID: 11,
            speaker: "cindy",
            text: "I was hoping to see you again, just didn't think it would be here... So what do ya got, let's see it.",
            button: [
                { chatID: -1, text: "[Pull out your cock]", callback: "girl3" }
            ]
        },
        {
            chatID: 12,
            speaker: "cindy",
            text: "Awww. Did you break your penis, it looks like it's got a cast. Poor little penis. ",
            button: [
                { chatID: 13, text: "Oh yeah... It's got a cast.", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "cindy",
            text: "That's ok. We can do this later when your penis is better. ",
            button: [
                { chatID: -1, text: "*Sad noises* ok, bye.", callback: "girlBad" }
            ]
        },
        {
            chatID: 14,
            speaker: "cindy",
            text: "You're kidding right? I like to enjoy getting fucked, and that little thing isn't going to please anyone. " +
                "You should look into growing your penis little man, then maybe we can do this. ",
            button: [
                { chatID: 13, text: "*Sad noises* ok, bye.", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "cindy",
            text: "That is a beautiful penis, I love it! Do you know how to use it? ",
            button: [
                { chatID: 16, text: "Let me show you!", callback: "girl3a" }
            ]
        },
        {
            chatID: 16,
            speaker: "cindy",
            text: "Oh my my ",
            button: [
                { chatID: 17, text: "Grunt", callback: "girl4" }
            ]
        },
        {
            chatID: 17,
            speaker: "cindy",
            text: "Yes! Yes! YES! YES! ",
            button: [
                { chatID: 18, text: "Groan", callback: "girl5" }
            ]
        },
        {
            chatID: 18,
            speaker: "cindy",
            text: "I'm so close! Don't you dare cum yet!",
            button: [
                { chatID: 19, text: "MMmmmMMMMm", callback: "girl6" }
            ]
        },
        {
            chatID: 19,
            speaker: "cindy",
            text: "Fuck you're good! You can cum now!",
            button: [
                { chatID: 20, text: "Groan", callback: "girl7" }
            ]
        },
        {
            chatID: 20,
            speaker: "cindy",
            text: "Thanks! You're a good fuck!",
            button: [
                { chatID: 21, text: "You're welcome", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "cindy",
            text: "Come back and fuck me anytime!",
            button: [
                { chatID: -1, text: "Sweet!", callback: "girl8" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};