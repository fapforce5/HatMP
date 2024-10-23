//Room name
var room171 = {};
room171.main = function () {
    var holes = g.shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    var waiting = holes.splice(0, 5);
    var fuckers = g.shuffleArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

    g.internal = {
        i: 0,
        holes: holes,
        waiting: waiting,
        fuckers: [null, g.rand(0, 6), null, null, g.rand(7, 14)],
        fuckersWaiting: fuckers,
        fuckersPointer: 0,
        fuckersDick: [2, 1, 3, 2, 2, 1, 1, 2, 1, 1, 2, 1, 0, 1, 2, 2, 1],
        cam: "cam1"
    };

    nav.bg("216_pinkglory/bg.jpg");
    for (i = 0; i < 5; i++) {
        if (i === 2) {
            nav.button({
                "type": "img",
                "name": "ho_" + i,
                "left": 300 + (i * 335),
                "top": 73,
                "width": 335,
                "height": 324,
                "image": "216_pinkglory/z_s.png",
                "title": "Free Use Slut"
            }, 171);
            nav.button({
                "type": "btn",
                "name": "start",
                "left": 300 + (i * 335),
                "top": 400,
                "width": 335,
                "height": 570,
                "image": "216_pinkglory/z_d.png",
                "title": "Free Use Slut"
            }, 171);
        }
        else {
            nav.button({
                "type": "img",
                "name": "ho_" + i,
                "left": 300 + (i * 335),
                "top": 73,
                "width": 335,
                "height": 324,
                "image": "216_pinkglory/" + g.internal.holes[i] + "_s.png",
                "title": "Free Use Slut"
            }, 171);
            nav.button({
                "type": "img",
                "name": "hox_" + i,
                "left": 300 + (i * 335),
                "top": 400,
                "width": 335,
                "height": 570,
                "image": "216_pinkglory/" + g.internal.holes[i] + "_d.png",
                "title": "Free Use Slut"
            }, 171);
        }
    }
    room171.btnclick("fuckers");
    if (gv.get("pinkGloryHole") === 0) {
        nav.button({
            "type": "img",
            "name": "killp",
            "left": 320,
            "top": 94,
            "width": 684,
            "height": 986,
            "image": "213_pink/p.png",
        }, 213);
        chat(8, 171);
    }
    nav.buildnav([213, 214, 215, 170]);
};

room171.btnclick = function (name) {
    var i, j;
    switch (name) {
        case "start":
            if (gv.get("energy") < 33) {
                chat(6, 171);
            }
            else {
                nav.killall();
                nav.bg("171_gh/face_t0.jpg");
                if (sc.getMissionTask("p", "pink", 3).notStarted) {
                    sc.startMissionTask("p", "pink", 3);
                    chat(0, 171);
                }
                else {
                    chat(1, 171);
                }
            }
            break;
        case "cumRoom":
            nav.killall();
            nav.bg("216_pinkglory/bg.jpg");
            for (i = 0; i < 5; i++) {

                if (i === 2) {
                    nav.button({
                        "type": "img",
                        "name": "display",
                        "left": 300 + (i * 335),
                        "top": 73,
                        "width": 335,
                        "height": 324,
                        "image": "171_gh/display.png",
                        "title": "Free Use Slut"
                    }, 171);
                    nav.button({
                        "type": "img",
                        "name": "start",
                        "left": 300 + (i * 335),
                        "top": 400,
                        "width": 335,
                        "height": 570,
                        "image": "171_gh/h" + g.internal.i + ".png",
                        "title": "Free Use Slut"
                    }, 171);
                    nav.t({
                        type: "img",
                        name: "display",
                        left: 1130,
                        top: 314,
                        font: 16,
                        hex: "#f8dac1",
                        text: sc.n("me")
                    }, 171);

                    var stars = Math.floor(gv.get("pinkGloryHole") / 10);
                    for (j = 0; j < 5; j++) {
                        nav.button({
                            "type": "img",
                            "name": "display",
                            "left": 1130 + (j * 14),
                            "top": 360,
                            "width": 12,
                            "height": 12,
                            "image": "171_gh/displayStar" + (j >= stars ? "Empty" : "") + ".png", 
                        }, 171);
                    }
                }

                else {
                    nav.button({
                        "type": "img",
                        "name": "ho_" + i,
                        "left": 300 + (i * 335),
                        "top": 73,
                        "width": 335,
                        "height": 324,
                        "image": "216_pinkglory/" + g.internal.holes[i] + "_s.png",
                        "title": "Free Use Slut"
                    }, 171);
                    nav.button({
                        "type": "img",
                        "name": "hox_" + i,
                        "left": 300 + (i * 335),
                        "top": 400,
                        "width": 335,
                        "height": 570,
                        "image": "216_pinkglory/" + g.internal.holes[i] + "_d.png",
                        "title": "Free Use Slut"
                    }, 171);
                }
            }
            break;
        case "drawButtons":
            for (j = 0; j < 5; j++) {
                if (j === 4) {
                    if (g.internal.fuckers[2] === null) {
                        nav.button({
                            "type": "zbtn",
                            "name": "nextCock",
                            "left": 320 + (j * 235),
                            "top": 10,
                            "width": 225,
                            "height": 75,
                            "image": "1001_rand/wait.png"
                        }, g.roomID);
                        nav.buildnav([213, 214, 215, 170]);
                    }
                    else {
                        nav.button({
                            "type": "zbtn",
                            "name": "takeit",
                            "left": 320 + (j * 235),
                            "top": 10,
                            "width": 225,
                            "height": 75,
                            "image": "171_gh/cx.png"
                        }, g.roomID);
                    }
                }
                else {
                    nav.button({
                        "type": "zbtn",
                        "name": "cam" + j,
                        "left": 320 + (j * 235),
                        "top": 10,
                        "width": 225,
                        "height": 75,
                        "image": "171_gh/c" + j + ".png"
                    }, g.roomID);
                }
            }
            break;
        case "fuckers":
            nav.killbutton("fuckers");
            for (i = 0; i < 5; i++) {
                if (g.internal.fuckers[i] !== null) {
                    nav.button({
                        "type": "img",
                        "name": "fuckers",
                        "left": 300 + (i * 335),
                        "top": -73,
                        "width": 335,
                        "height": 1080,
                        "image": "171_gh/f" + g.internal.fuckers[i] + ".png",
                        "title": "Free Use Slut"
                    }, 171);
                }
            }
            break;
        case "cam0":
            nav.killall();
            g.internal.cam = name;
            if (g.internal.fuckers[2] !== null) {
                switch (g.internal.fuckersDick[g.internal.fuckers[2]]) {
                    case 0:
                    case 3:
                        nav.bg("171_gh/face_t1.jpg"); break;
                    case 1:
                        nav.bg("171_gh/face_t2.jpg"); break;
                    case 2:
                        nav.bg("171_gh/face_t0.jpg"); break;
                    default:
                        nav.bg("171_gh/face_t0.jpg"); break;
                }
                
            }
            else {
                nav.bg("171_gh/face_t5.jpg");
            }
            room171.btnclick("drawButtons");
            break;
        case "cam1":
            nav.killall();
            g.internal.cam = name;
            room171.btnclick("cumRoom");
            room171.btnclick("fuckers");
            if (g.internal.fuckers[2] !== null) {
                nav.button({
                    "type": "img",
                    "name": "fuckers",
                    "left": 1300,
                    "top": 365,
                    "width": 350,
                    "height": 350,
                    "image": "171_gh/gif" + g.internal.fuckersDick[g.internal.fuckers[2]] + ".gif",
                }, 171);
            }
            if (g.rand(0, 6) === 0) {
                nav.button({
                    "type": "img",
                    "name": "fuckers",
                    "left": 37,
                    "top": 71,
                    "width": 850,
                    "height": 1009,
                    "image": "171_gh/zr" + g.rand(0, 4) + ".png",
                }, 171);
            }
            if (g.rand(0, 6) === 0) {
                nav.button({
                    "type": "img",
                    "name": "fuckers",
                    "left": 1414,
                    "top": 82,
                    "width": 506,
                    "height": 994,
                    "image": "171_gh/zl" + g.rand(0, 3) + ".png",
                }, 171);
            }
            room171.btnclick("drawButtons");
            break;
        case "cam2":
            nav.killall();
            g.internal.cam = name;
            nav.bg("171_gh/gh" + g.internal.i + ".jpg");
            if (g.internal.fuckers[2] !== null) {
                nav.button({
                    "type": "img",
                    "name": "fuckers",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "171_gh/g" + g.internal.fuckers[2] + ".png",
                }, 171);
            }
            if (g.internal.fuckers[2] !== null) {
                nav.button({
                    "type": "img",
                    "name": "fuckers",
                    "left": 1500,
                    "top": 185,
                    "width": 350,
                    "height": 350,
                    "image": "171_gh/gif" + g.internal.fuckersDick[g.internal.fuckers[2]] + ".gif",
                }, 171);
            }
            room171.btnclick("drawButtons");
            break;
        case "cam3":
            nav.killall();
            g.internal.cam = name;
            if (g.internal.fuckers[2] !== null) {
                nav.bg("171_gh/gix" + g.internal.fuckersDick[g.internal.fuckers[2]] + ".gif");
            }
            else {
                nav.bg("171_gh/gix.jpg");
            }
            room171.btnclick("drawButtons");
            break;
        case "nextCock":
            if (gv.get("energy") < 33) {
                chat(7, 171);
            }
            else {
                char.addtime(20);
                g.internal.fuckers = new Array();
                for (i = 0; i < 5; i++) {
                    if (g.rand(0, 2) === 0) {
                        g.internal.fuckers.push(g.internal.fuckersWaiting[g.internal.fuckersPointer]);
                        g.internal.fuckersPointer++;
                        if (g.internal.fuckersPointer >= g.internal.fuckersWaiting.length)
                            g.internal.fuckersPointer = 0;
                    }
                    else {
                        g.internal.fuckers.push(null);
                    }
                }
                room171.btnclick(g.internal.cam);
            }
            break;
        case "takeit":
            char.addtime(20);
            var depositCum = true;
            if (g.internal.fuckers[2] !== null) {

                var pghStars = Math.floor(gv.get("pinkGloryHole") / 10) + 1;
                if (pghStars > 5)
                    pghStars = 5;
                gv.mod("pinkGloryHole", 1);
                gv.mod("money", g.rand(5, 10) * pghStars);

                switch (g.internal.fuckersDick[g.internal.fuckers[2]]) {
                    case 0:
                        levels.anal(2, false, "m", true);
                        break;
                    case 1:
                        levels.anal(3, false, "m", true);
                        break;
                    case 2:
                        levels.anal(4, false, "m", true);
                        break;
                    case 3:
                        levels.anal(5, false, "f", false);
                        depositCum = false;
                        break;
                }
                levels.mod("xdress", 25, 999);
                gv.mod("energy", -25);

                if (depositCum && g.internal.i < 15) {
                    g.internal.i++;
                }
            }
            switch (g.internal.fuckers[2]) {
                case 8: chat(2, 171); break;
                case 10: chat(3, 171); break;
                case 11: chat(4, 171); break;
                default: chat(999, 171); break;
            }
            g.internal.fuckers[2] = null;
            room171.btnclick(g.internal.cam);
            break;
        default:
            break;
    }
};

room171.chatcatch = function (callback) {
    switch (callback) {
        case "cumRoom":
            room171.btnclick("cam1");
            break;
        case "reset":
            char.room(171);
            break;
        case "killP":
            nav.killbutton("killp");
            break;
        case "closeUp":
            nav.killall();
            nav.bg("171_gh/booth.jpg");
            break;
        default:
            break;
    }
};

room171.chat = function (chatID) {
    if (chatID === 999) {
        var c = [
            "Nice hole, slut. ",
            "You're as loose as a drunk goose. ",
            "Thanks ma'am. I needed that nut.",
            "Queer duck. ",
            "Fuck I love that hole!",
            "Ugh. I can't believe I fucked such a nasty slut. What will my girlfriend say?",
            "Love that hole! ",
            "Thanks", 
            "I'm going to tell my friends about you! ",
            "When you're done here, find me. I'm looking for a bride. ",
            "Damn sugar! You too fine!",
            "I love an easy cum dump.",
            "You have something on your asshole.... Oh wait, that's my cum. ",
            "Nasty slut.",
            "I do love an easy sissy. ",
            "Sissy have the best bussy!",
            "I do love fucking an easy bussy.",
            "Whore. "
        ];
        return {
            chatID: 1,
            speaker: "!glory",
            text: c[g.rand(0, c.length)],
            button: [
                { chatID: -1, text: "Thanks?", callback: "" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "What the hell am I doing? Just laying in here with my bare ass hanging out " +
                    "of a hole. Anyone can come by and there's no telling what they'll do! What if " +
                    "they do something mean, like hit me. Should I run away or just take it. What if " +
                    "they're really gross. Do I just lay here and take their gross disgusting dick? " +
                    "Fuck. I guess I'll just lay here and find out what I do. ",
                button: [
                    { chatID: -1, text: "[Prepare for cock]", callback: "cumRoom" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "Well, here I go taking anonymous cocks again! ",
                button: [
                    { chatID: -1, text: "[Prepare for cock]", callback: "cumRoom" }
                ]
            },
            {
                chatID: 2,
                speaker: "black",
                text: "I do love punishing a sissy's asshole. ",
                button: [
                    { chatID: -1, text: "*groan*", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "river",
                text: "What a loser! You just hang out in that hole and let anyone fuck you! " +
                    "I can't wait to get my hands on you at the C.U.M. compound.",
                button: [
                    { chatID: -1, text: "*moan*", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "!philbert",
                text: "You always were my favorite cum dump.",
                button: [
                    { chatID: 5, text: "Aren't you supposed to be in the hole? We were told we couldn't fuck anyone! ", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "!philbert",
                text: "Hahaha. Maybe, but I couldn't pass up such a fine ass like yours! Later sissy.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "I'm too tired to work the glory hole. ",
                button: [
                    { chatID: -1, text: "[Need 33 energy]", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "I'm too tired to work the glory hole. ",
                button: [
                    { chatID: -1, text: "[Need 33 energy]", callback: "reset" }
                ]
            },
            {
                chatID: 8,
                speaker: "p",
                text: "Would you like to learn about the glory hole room?",
                button: [
                    { chatID: 9, text: "Yes", callback: "" },
                    { chatID: -1, text: "No thanks", callback: "killP" },
                ]
            },
            {
                chatID: 9,
                speaker: "p",
                text: "Well then, welcome to the glory hole room! If there's a heaven for " +
                    "sissies, this is it. You're free to come and go as you please, but once " +
                    "you're in the booth and there's a dick inside you, you can't leave. We " +
                    "guarantee 100% satisfaction for all our customers. Let's take a look at " +
                    "your new home. ",
                button: [
                    { chatID: 10, text: "ok", callback: "closeUp" },
                ]
            },
            {
                chatID: 10,
                speaker: "p",
                text: "Each booth has a tv monitor so you can watch your slutty ass get fucked " +
                    "from all the angles, and see how cum covered your bussy gets so you know " +
                    "when it's time to step out and clean yourself up a bit. Every girl that " +
                    "works the booths gets paid according to her worth. Since you're new your " +
                    "worth is not much at all. After you get fucked each customer will have a " +
                    "chance to rate how well you take dick. ",
                button: [
                    { chatID: 11, text: "rated?", callback: "" },
                ]
            },
            {
                chatID: 11,
                speaker: "p",
                text: "Yeah. I wouldn't worry too much about that. Every guy thinks the hole their " +
                    "fucking is a perfect five stars. Once you get enough 5 star ratings your overall " +
                    "rating will increase and you'll get a bit of a raise for each dick you take. ",
                button: [
                    { chatID: 12, text: "ok", callback: "" },
                ]
            },
            {
                chatID: 12,
                speaker: "p",
                text: "Feel free to hang your ass out and take all the dick you want. The more dick,  " +
                    "the more money. Now get up in there slut and take some cock!",
                button: [
                    { chatID: -1, text: "...ok. I'll give it a try. ", callback: "cumRoom" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};