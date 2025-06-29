//Room name
var room49 = {};
room49.main = function () {
    if (g.isNight() && g.rand(0, 3) === 0) {
        g.internal = "g1";
        nav.button({
            "type": "img",
            "name": "name",
            "left": 775,
            "top": 473,
            "width": 560,
            "height": 781,
            "image": "49_train/g1.png"
        }, 49);
    }

    sc.select("sit", "49_train/icon_sit.png", 8);
    sc.select("stand", "49_train/icon_stand.png", 9);
    sc.select("nextStop", "49_train/icon_sneak.png", 10);
};

room49.btnclick = function (name) {
    switch (name) {
        case "nextStop":
            if (gv.get("map") === 0)
                gv.set("map", 3);
            else
                gv.set("map", 0);
            char.room(0);
            break;
        case "sit":
            nav.kill();
            nav.bg("49_train/sit_day_" + gender.pronoun("f") + ".webp", "49_train/sit_night_" + gender.pronoun("f") + ".webp");
            nav.next("nextStop");
            break;
        case "stand":
            nav.kill();
            var pantlist = ["v", "bs", "cl", "co", "h", "d", "ss", "sq", "k"];
            if ((cl.c.dress !== null || pantlist.includes(cl.c.pants)) &&
                (!g.isNight() && gender.pronoun("f") === "f" && g.rand(0, 3) === 2)) {
                nav.bg("49_train/stand_bg_1.webp");
                zcl.displayMain(150, 1200, .11, "clothes", true);
                nav.button({
                    "type": "img",
                    "name": "stand0",
                    "left": 960,
                    "top": 59,
                    "width": 312,
                    "height": 1021,
                    "image": "49_train/stand_1.webp"
                }, 49);
                g.internal = 0;
                nav.next("stand0b");
            }
            else {
                nav.bg("49_train/stand_bg.webp");
                zcl.displayMain(150, 1200, .11, "clothes", true);
                nav.next("nextStop");
            }
            break;
        case "stand0b":
            switch (g.internal) {
                case 0:
                    nav.killbutton("stand0")
                    nav.button({
                        "type": "img",
                        "name": "stand0",
                        "left": 1350,
                        "top": 59,
                        "width": 312,
                        "height": 1021,
                        "image": "49_train/stand_1.webp"
                    }, 49);
                    break;
                case 1:
                    nav.kill();
                    if (cl.c.panties === null)
                        nav.bg("49_train/stand_bg_1a.webp");
                    else
                        nav.bg("49_train/stand_bg_1a_panties.webp");
                    chat(0, 49);
                    break;
            }

            g.internal++;
            break;
        default:
            break;
    }
};

room49.chatcatch = function (callback) {
    switch (callback) {
        case "stand_1b":
            if (cl.c.panties === null)
                nav.bg("49_train/stand_bg_1b.webp");
            else
                nav.bg("49_train/stand_bg_1b_panties.webp");
            break;
        case "stand_1c":
            nav.bg("49_train/stand_bg_1c.webp");
            break;
        case "stand_1d":
            if (cl.c.panties === null)
                nav.bg("49_train/stand_bg_1d.webp");
            else
                nav.bg("49_train/stand_bg_1d_panties.webp");
            break;
        case "stand_1e":
            if (cl.c.panties === null)
                nav.bg("49_train/stand_bg_1e.webp");
            else
                nav.bg("49_train/stand_bg_1e_panties.webp");
            break;
        case "stand_1f":
            nav.bg("49_train/stand_bg_1f.webp");
            break;
        case "stand_1g":
            if (cl.c.panties === null)
                nav.bg("49_train/stand_bg_1g.webp");
            else
                nav.bg("49_train/stand_bg_1g_panties.webp");
            break;
        case "stand_1h":
            levels.anal(4, false, "m", true, "!man");
            nav.bg("49_train/stand_bg_1h.webp");
            zcl.displayMain(150, 1100, .11, "clothes", true);
            break;
        case "nextStop":
            room49.btnclick("nextStop");
            break;
        default:
            break;
    }
};

room49.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Is that his hard penis pressing into my ass? How rude. There's plenty of " +
                "space on the train. He doesn't have to stand so close. ",
            button: [
                { chatID: 1, text: "...", callback: "stand_1b" },
                { chatID: -1, text: "[Silently move away]", callback: "nextStop" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Something else is poking my butt... Maybe there's a " +
                "pencil in his pocket? ",
            button: [
                { chatID: 2, text: "...", callback: "stand_1c" },
                { chatID: -1, text: "[Silently move away]", callback: "nextStop" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "OOoooo That's totally not a pencil in his pocket. He just slipped a " +
                "finger inside me and is molesting my butt! There's so many people. I shouldn't make a scene. I " +
                "just hope he stops!",
            button: [
                { chatID: 3, text: "...", callback: "stand_1d" },
                { chatID: -1, text: "[Silently move away]", callback: "nextStop" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "What is that resting on my balls... It's not a... No. There's too many " +
                "people here, there's no way...",
            button: [
                { chatID: 4, text: "...", callback: "stand_1e" },
                { chatID: -1, text: "[Silently move away]", callback: "nextStop" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "OOoo no! He just shoved his cock up my ass! He just raped by ass. I should be so, " +
                "mad right now but it feels so good.",
            button: [
                { chatID: 5, text: "...", callback: "stand_1f" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I wonder if anyone knows. Is no one is saying anything while " +
                "this man just fucks my ass in a crowded train? I wonder if they know. They have to " +
                "have to know I'm getting fucked by some stranger. Maybe they all think I asked for it.",
            button: [
                { chatID: 6, text: "...", callback: "stand_1g" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I know that feeling. I can feel his cock getting super hard and twitching. " +
                "He totally just came in me and I don't even know his face. I hope it doesn't " +
                "leak out on the floor. I must clench my hole so I don't leak everywhere! ",
            button: [
                { chatID: 7, text: "...", callback: "stand_1h" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Dammit. Here's the stop. Now I'll never know who just came inside me. ",
            button: [
                { chatID: -1, text: "[Get off the bus]", callback: "nextStop" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};