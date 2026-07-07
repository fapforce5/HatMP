//Room name
var room484 = {};
room484.main = function () {

    if (!(cl.isLewd() || cl.c.swimsuit === "w")) {
        nav.killall();
        nav.bg("483_cave/enter_bad.jpg");
        chat(0, 484);
        return;
    }
    if (!cl.hasClothing("swimsuit", "w")) {
        nav.button({
            "type": "btn",
            "name": "treasure",
            "left": 350,
            "top": 634,
            "width": 259,
            "height": 190,
            "image": "484_cave/treasure.webp"
        }, 484);
    }
    sc.select("sleep", "328_farm/icon_sleep.webp", 0);
    if (!g.isNight()) {
        nav.button({
            "type": "btn",
            "name": "wolfgirl",
            "left": 1444,
            "top": 643,
            "width": 120,
            "height": 174,
            "image": "484_cave/girl.webp"
        }, 484);
        sc.select("frolic", "484_cave/icon_frolic.webp", 1);
        sc.select("lobo", "484_cave/icon_lobo.webp", 2);
    }
    var navList = [475];
    nav.buildnav(navList);
};

room484.btnclick = function (name) {
    switch (name) {
        case "wardrobe":
            g.pass = 484;
            char.room(8);
            break;
        case "leave":
            char.room(475);
            break;
        case "treasure":
            nav.killbutton("treasure");
            cl.add("swimsuit", "w");
            gv.mod("money", 150);
            nav.button({
                "type": "img",
                "name": "furkini",
                "left": 847,
                "top": 194,
                "width": 405,
                "height": 579,
                "image": "484_cave/furkini.webp"
            }, 484);
            chat(1, 484);
            break;
        case "frolic":
            nav.kill();
            if (sc.getMissionTask("wolf", "pack", 2).notStarted) {
                sc.completeMissionTask("wolf", "pack", 2);
            }
            sc.modLevel("wolf", 75, 10);
            if (gv.get("energy") < 35) {
                chat(7, 484)
            }
            else {
                gv.mod("energy", -35);
                if (g.rand(0, 4) === 0) {
                    rape.init(4, "", 484, "reset");
                }
                else {
                    levels.mod("fitness", 35);
                    nav.button({
                        "type": "img",
                        "name": "furkini",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "484_cave/frolic.webp"
                    }, 484);
                    chat(8, 484);
                }
            }
            break;
        case "sleep":
            g.pass = 484;
            char.room(28);
            break;
        case "lobo":
            if (sc.getMissionTask("wolf", "pack", 2).notStarted) {
                sc.completeMissionTask("wolf", "pack", 2);
            }
            sc.modLevel("wolf", 75, 10);
            nav.kill();
            nav.bg("484_cave/lobo.webp");
            zcl.assupNew(550, 300, .35, "", true);
            nav.button({
                "type": "img",
                "name": "furkini",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "484_cave/lobo_fg.webp"
            }, 484);
            chat(9, 484);
            break;
        case "wolfgirl":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "wolfgirl",
                "left": 1082,
                "top": 351,
                "width": 708,
                "height": 729,
                "image": "484_cave/girl1.webp"
            }, 484);
            chat(2, 484);
            break;
        case "lobopiss":
            nav.kill();
            nav.bg("484_cave/piss1_" + gender.pronoun("f") + ".webp");
            levels.piss(false, false, true, "m", "wolf");
            chat(10, 484);
            break;
        case "reset":
            char.room(484);
            break;
        default:
            break;
    }
};

room484.chatcatch = function (callback) {
    switch (callback) {
        case "hunt0":
        case "hunt1":
        case "hunt2":
            nav.kill();
            nav.bg("484_cave/" + callback + ".webp");
            break;
        case "nap":
            nav.kill();
            char.addtime(180);
            gv.mod("energy", 45);
            nav.bg("484_cave/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "openingbad":
            sc.select("wardrobe", "316_livingroom/icon_wardrobe.png", 2);
            sc.select("leave", "316_livingroom/icon_leave.png", 3);
            break;
        case "lobo":
            if (sc.getLevel("wolf") > 9 && !inv.has("horn")) {
                sc.completeMissionTask("wolf", "pack", 3);
                inv.add("horn");
                nav.kill();
                zcl.assupNew(550, 300, .35, "", true);
                nav.button({
                    "type": "img",
                    "name": "furkini",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "484_cave/horn.webp"
                }, 484);
                chat(17, 484);
            }
            else {
                switch (g.rand(0, 10)) {
                    case 0:
                    case 1:
                        nav.kill();
                        nav.bg("484_cave/piss0_" + gender.pronoun("f") + ".webp");
                        nav.next("lobopiss");
                        break;
                    case 2:
                    case 3:
                    case 4:
                        nav.kill();
                        rape.init(5, "cave", 484, "reset");
                        break;
                    case 5:
                    case 6:
                        nav.kill();
                        nav.bg("484_cave/lobo.webp");
                        zcl.assupNew(550, 300, .35, "", true);
                        nav.button({
                            "type": "img",
                            "name": "furkini",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "484_cave/lobo_fg1.webp"
                        }, 484);
                        char.addtime(180);
                        chat(11, 484);
                        break;
                    default:
                        chat(15, 484);
                        break;
                }
            }
            break;
        case "reset":
            char.room(484);
            break;
        default:
            break;
    }
};

room484.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "uh oh. They're pretty angry at me. Maybe I should change my clothes to something " +
                "more natural. ",
            button: [
                { chatID: -1, text: "...", callback: "openingbad" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Sweet! Someone must have left this here. I found $150, and a furkini made " +
                "from wolf hair. That's weird. ",
            button: [
                { chatID: -1, text: "Take it all", callback: "reset" }
            ]
        },
        {
            chatID: 2,
            speaker: "!wolfgirl",
            text: "Hey! What's up?",
            button: [
                { chatID: 3, text: "What's your name?", callback: "" },
                { chatID: 4, text: "Why are you here?", callback: "" },
                { chatID: 5, text: "What's that around your neck?", callback: "" },
                { chatID: 6, text: "How do I leave?", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "!wolfgirl",
            text: "Oh. Poeple called me " + sc.n("!wolfgirl") + " before I came here, so it just kinda stuck, " +
                "ya know. It was too hard to get dressed, so I just gave up. And since I have a really sensative " +
                "vagina I'm always dripping a bit, so you know, it's like a snail trail where ever I go. ",
            button: [
                { chatID: 2, text: "Ask more questions. ", callback: "" },
                { chatID: -1, text: "Thanks.", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "!wolfgirl",
            text: "Those stupid cultist brought me to their cabin and did terrible things. When they were done " +
                "and I was just oozing cum they threw me away in the woods to die. Luckily some wolves found me and " +
                "brought me here as one of their own. Been here ever since. Best home I've had. ",
            button: [
                { chatID: 2, text: "Ask more questions. ", callback: "" },
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 5,
            speaker: "!wolfgirl",
            text: "It's my horn. " + sc.n("wolf") + " found it and gave it to me. If I ever need help " +
                "I blow it and they come running. When you're in the forest there's always some wolves around. ",
            button: [
                { chatID: 2, text: "Ask more questions. ", callback: "" },
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 6,
            speaker: "!wolfgirl",
            text: "Hehe. You can leave any time silly. If any of the wolves give you trouble I'll just " +
                "have my boyfriend, Koda the brown wolf, chase them off. ",
            button: [
                { chatID: 2, text: "Ask more questions. ", callback: "" },
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "I'm too tired for that. ",
            button: [
                { chatID: -1, text: "[Need 35 energy]", callback: "reset" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Hehe. So much fun!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 9,
            speaker: "me",
            text: "arf",
            button: [
                { chatID: -1, text: "...", callback: "lobo" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Awww gross. He just pissed all over me. It's so pungent and warm. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Oh cool. We're going out on a hunt! ",
            button: [
                { chatID: 12, text: "arf", callback: "hunt0" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "So much running! ",
            button: [
                { chatID: 13, text: "...", callback: "hunt1" },
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "What a cute little bunny... they aren't going to... ",
            button: [
                { chatID: 14, text: "...", callback: "hunt2" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "Ugh. I can't watch. I'm going back to the cave.  ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "I think he's going to take a nap",
            button: [
                { chatID: 16, text: "...", callback: "nap" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "zzZzzzZz",
            button: [
                { chatID: -1, text: "[Wake up]", callback: "reset" },
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "Sweet. He gave me a horn. I guess I can use this to call for help if I get attacked " +
                "in the forest to call for help!",
            button: [
                { chatID: -1, text: "arf", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(484, room484);
