//Room name
var room225 = {};
room225.main = function () {
    var navList = [0];
    char.map();
    var slut = true;
    if (inv.has("sewer")) {
        if (cl.isLewd()) {
            slut = false;
            zcl.kill();
            nav.button({
                "type": "img",
                "name": "copx",
                "left": 456,
                "top": 35,
                "width": 585,
                "height": 1045,
                "image": "225_sewer/cop.png"
            }, 225);
            zcl.displayClothed();
            nav.button({
                "type": "img",
                "name": "copx1",
                "left": 395,
                "top": 341,
                "width": 1525,
                "height": 739,
                "image": "225_sewer/crowd.png"
            }, 225);
            chat(0, 225);
        }
        else {
            var btnList = [
                {
                    "type": "btn",
                    "name": "lid",
                    "left": 280,
                    "top": 831,
                    "width": 356,
                    "height": 143,
                    "image": "225_sewer/lid.png",
                    "NIGHT": "225_sewer/lid_night.png"
                }
            ];
            $.each(btnList, function (i, v) {
                nav.button(v, 225);
            });
        }
    }
    if (slut && g.isNight()) {
        zcl.displayMain(200, 1000, .09, "clothes", false);
        nav.button({
            "type": "btn",
            "name": "hang",
            "left": 984,
            "top": 186,
            "width": 397,
            "height": 806,
            "image": "225_sewer/hangout.png"
        }, 225);
    }
    nav.buildnav(navList);
};

room225.btnclick = function (name) {
    switch (name) {
        case "lid":
            char.room(228);
            break;
        case "hang":
            var appearance = cl.appearance();
            if (appearance < 2) {
                char.addtime(60);
                if (appearance === -1)
                    chat(2, 225);
                if (appearance === 0)
                    chat(3, 225);
                else if (appearance === 1)
                    chat(4, 225);
            }
            else {
                var pickup = 0;
                if (appearance === 2)
                    pickup = Math.floor(Math.random() * 8);
                else if (appearance === 3)
                    pickup = Math.floor(Math.random() * 4);
                else if (appearance === 4)
                    pickup = Math.floor(Math.random() * 2);
                else
                    pickup = 1;
                if (pickup === 1) {
                    nav.killall();
                    g.internal = Math.floor(Math.random() * 3);
                    g.internal = 0;
                    switch (g.internal) {
                        case 0:
                            nav.bg("225_sewer/p0_0.jpg");
                            chat(6, 225);
                            break;
                        case 1:
                            nav.bg("225_sewer/p1_0.jpg");
                            chat(11, 225);
                            break;
                        case 2:

                            break;
                    }
                }
                else {
                    char.addtime(60);
                    chat(5, 225);
                }
            }
            break;
        default:
            break;
    }
};

room225.chatcatch = function (callback) {
    switch (callback) {
        case "tojail":
            g.pass = "jail";
            char.room(425);
            break;
        case "reset":
            char.room(225);
            break;
        case "p01":
            nav.bg("225_sewer/p0_1.jpg");
            break;
        case "p02":
            nav.bg("225_sewer/p0_2.jpg");
            break;
        case "p03":
            nav.bg("225_sewer/p0_3.jpg");
            break;
        case "p0end":
            g.mod("receiveAnalMale", 1);
            g.mod("creamPied", 1);
            char.addtime(120);
            g.mod("money", 50);
            char.room(225);
            break;
        default:
            break;
    }
};

room225.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cop2",
            text: "Alright. If you're going to prostitute yourself for sex be less obvious about it and wear some clothes. ",
            button: [
                { chatID: -1, text: "but officer, I wasn't....", callback: "tojail" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I need more energy to wander around the sewers.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Well. No one wants to talk to me. I probably should go running in the woods a bit.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I look good, just not pick up on the street corner good. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Not one look. Maybe if I kept working on my looks. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I got a few glances. I could try to looked sluttier, or I could wait some more. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 6,
            speaker: "random",
            text: "Hola! You've very bonita. I don't suppose you want to go for a ride señorita? ",
            button: [
                { chatID: 7, text: "Sure!", callback: "" },
                { chatID: -1, text: "I'll pass", callback: "reset" }
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "Oh Buena! Hop on in!",
            button: [
                { chatID: 8, text: "Go for a ride. ", callback: "p01" }
            ]
        },
        {
            chatID: 8,
            speaker: "random",
            text: "Este es un buen lugar. Quiero follarte por mi puta de recogida",
            button: [
                { chatID: 9, text: "I don't know what you said, but let me hop out and and you guide me.", callback: "p02" }
            ]
        },
        {
            chatID: 9,
            speaker: "random",
            text: "¡Yujuu! Te voy a llenar el culo de semen puta",
            button: [
                { chatID: 10, text: "Ughhhhh", callback: "p03" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "UUuughhh cum fart!",
            button: [
                { chatID: -1, text: "Return to the alley", callback: "p0end" }
            ]
        },
        {
            chatID: 11,
            speaker: "random",
            text: "uhhh hi. Are you working? ",
            button: [
                { chatID: 12, text: "Sure!", callback: "" },
                { chatID: -1, text: "Nope. Just standing on a steet corner dressed like a whore. ", callback: "reset" }
            ]
        },
        {
            chatID: 12,
            speaker: "random",
            text: "So, are you a cop. You know you have to tell me if you are.",
            button: [
                { chatID: 13, text: "Haha. I'm not a cop, just an easy whore.", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "random",
            text: "Hop in I need a quick BJ. I got $20. Just act casual. ok. ",
            button: [
                { chatID: 14, text: "Sure. I'll suck your cock for $20. ", callback: "p11" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};