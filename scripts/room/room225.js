//Room name
var room225 = {};
room225.main = function () {
    var navList = [0];
    char.map();
    
    if (inv.has("sewer")) {
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
    if (g.isNight()) {
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
    else if (cl.isLewd()) {
        nav.bg("225_sewer/day_walk.jpg");
        chat(0, 225);
    }
    nav.buildnav(navList);
    //fame.event();
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
                    pickup = Math.floor(Math.random() * 6);
                else if (appearance === 3)
                    pickup = Math.floor(Math.random() * 3);
                else if (appearance === 4)
                    pickup = Math.floor(Math.random() * 2);
                else
                    pickup = 1;
                if (pickup === 1) {
                    nav.killall();
                    g.internal = Math.floor(Math.random() * 3);
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
                            nav.bg("225_sewer/p2_0.jpg");
                            chat(16, 225);
                            break;
                    }
                }
                else {
                    char.addtime(60);
                    chat(5, 225);
                }
            }
            break;
        case "p11":
            nav.bg("225_sewer/p1_" + g.internal + ".jpg");
            if (g.internal === 5) {
                nav.killbutton("p11");
                gv.mod("giveOralMale", 1);
                gv.mod("loadSwollowed", 1);
                gv.mod("money", 20);
                cl.c.cumface = true;
                chat(14, 225);
            }
            g.internal++;
            break;
        case "p21":
            nav.killall();
            nav.bg("24_spinTheBottle/black.jpg");
            chat(17, 225);
            break;
        case "p2":
            nav.bg("225_sewer/p2_" + g.internal + ".jpg");
            if (g.internal > 12) {
                nav.killall();
                chat(21, 225);
            }
            g.internal++;
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
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            char.addtime(120);
            gv.mod("money", 50);
            char.room(225);
            break;
        case "p11":
            nav.killall();
            nav.bg("225_sewer/p1_1.jpg");
            g.internal = 2;
            nav.button({
                "type": "btn",
                "name": "p11",
                "left": 1687,
                "top": 900,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 225);
            break;
        case "p16":
            nav.bg("225_sewer/p1_6.jpg");
            break;
        case "p21":
            nav.killall();
            nav.bg("225_sewer/p2_1.jpg");
            nav.button({
                "type": "btn",
                "name": "p21",
                "left": 1238,
                "top": 237,
                "width": 251,
                "height": 293,
                "image": "225_sewer/p2_1.png"
            }, 225);
            break;
        case "p22":
            nav.bg("225_sewer/p2_2.jpg");
            break;
        case "p23":
            nav.bg("225_sewer/p2_3.jpg");
            break;
        case "p23a":
            nav.bg("225_sewer/p2_3a.jpg");
            break;
        case "p213":
            nav.bg("225_sewer/p2_13.jpg");
            break;
        case "p24":
            g.internal = 5;
            nav.bg("225_sewer/p2_4.jpg");
            nav.button({
                "type": "btn",
                "name": "p2",
                "left": 1687,
                "top": 900,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 225);
            break;
        case "p25":
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            gv.mod("money", 100);
            char.nexttime(7);
            char.room(225);
            break;
        case "remove":
            nav.bg("225_sewer/day.jpg");
            break;
        default:
            break;
    }
};

room225.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Nasty Trollop! ",
            button: [
                { chatID: -1, text: "huh", callback: "remove" }
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
                { chatID: -1, text: "Sure. I'll suck your cock for $20. ", callback: "p11" },
            ]
        },
        {
            chatID: 14,
            speaker: "random",
            text: "*spit* Get out slut.",
            button: [
                { chatID: 15, text: "huh? ", callback: "p16" },
            ]
        },
        {
            chatID: 15,
            speaker: "random",
            text: "Change your ways or Azrael will find you. ",
            button: [
                { chatID: -1, text: "What the fuck....", callback: "reset" },
            ]
        },
        {
            chatID: 16,
            speaker: "random",
            text: "Hi little girl. Do you want to go for a ride in my van. I have lots of yummy candy. ",
            button: [
                { chatID: -1, text: "I like candy. ", callback: "p21" },
                { chatID: -1, text: "Fuck no! ", callback: "reset" },
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "*snore*",
            button: [
                { chatID: 18, text: "...", callback: "p22" },
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Ugh.. my head, and my legs and feet hurt... and bussy....",
            button: [
                { chatID: 19, text: "... ", callback: "p23" },
            ]
        },
        {
            chatID: 19,
            speaker: "random",
            text: "Oh hi. You're up. I'm taking you back now to where I picked you up. You were wonderful. Did you " +
                "want to see the fun we had?",
            button: [
                { chatID: 20, text: "Huh? sure, let's see ", callback: "p24" },
                { chatID: 21, text: "UUUgh. no. Just take me back", callback: "p213" },
            ]
        },
        {
            chatID: 20,
            speaker: "random",
            text: "Oh wonderful. I love showing my handiwork. Just lay there and see my beauty. ",
            button: [
                { chatID: -1, text: "... ", callback: "p24" },
            ]
        },
        {
            chatID: 21,
            speaker: "random",
            text: "I'm glad we could share this experience. It looks like we're here. I hope to play with you again. ",
            button: [
                { chatID: -1, text: "Uhhh yeah...", callback: "p25" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};