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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};