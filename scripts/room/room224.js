//Lunch
var room224 = {};
room224.main = function () {
    var icons = new Array();
    if (g.pass === "punish") {
        icons.push({ n: "punish", img: "punish.png" });
    }
    else {
        icons.push({ n: "mom", img: "lunch0.png" });
        if(sc.getMission("janice", "breakup").notStarted)
            icons.push({ n: "janice", img: "lunch3.png" });
        if (sc.getMission("envy", "gf").startedOrComplete)
            icons.push({ n: "envy", img: "lunch4.png" });
        icons.push({ n: "zoey", img: "lunch5.png" });
        if(sc.getMissionTask("elijah", "elijah", 3).complete)
            icons.push({ n: "elijah", img: "lunch6.png" });
        icons.push({ n: "cecilia", img: "lunch7.png" });
        icons.push({ n: "skip", img: "lunchno.png" });
    }
    //char.room(199);
    $.each(icons, function (i, v) {
        sc.select(v.n, "224_lunch/" + v.img, i);
    });
};

room224.btnclick = function (name) {
    switch (name) {
        case "skip":
            nav.kill();
            room224.chatcatch("endlunch");
            break;
        case "punish":
            nav.killall();
            nav.bg("200_frontOffice/bg.jpg");
            chat(1, 224);
            break;
        case "mom":
            room224.btnclick("drawbg");
            nav.button({
                "type": "img",
                "name": "fg",
                "left": 1094,
                "top": 0,
                "width": 504,
                "height": 1080,
                "image": "224_lunch/landlord.webp"
            }, 224);
            chat(1000, 224);
            break;
        case "janice":
            room224.btnclick("drawbg");
            nav.button({
                "type": "img",
                "name": "fg",
                "left": 963,
                "top": 0,
                "width": 581,
                "height": 1080,
                "image": "224_lunch/janice.webp"
            }, 224);
            chat(999, 224);
            break;
        case "elijah":
            room224.btnclick("drawbg");
            nav.button({
                "type": "img",
                "name": "fg",
                "left": 975,
                "top": 0,
                "width": 609,
                "height": 1080,
                "image": "224_lunch/elijah" + (sc.getMissionTask("elijah", "elijah", 5).complete ? "1" : "0") + ".webp"
            }, 224);
            chat(998, 224);
            break;
        case "zoey":
            room224.btnclick("drawbg");
            chat(5, 224);
            break;
        case "envy":
            room224.btnclick("drawbg");
            nav.button({
                "type": "img",
                "name": "fg",
                "left": 996,
                "top": 0,
                "width": 543,
                "height": 1080,
                "image": "224_lunch/envy.webp"
            }, 224);
            chat(997, 224);
            break;
        case "cecilia":
            nav.kill();
            if (cl.c.chastity !== null) {
                nav.bg("224_lunch/cecilia0.webp");
                chat(7, 224);
            }
            else {
                nav.bg("224_lunch/cecilia0.webp");
                chat(9, 224);
            }
            break;
        case "drawbg":
            nav.kill();
            if (cl.c.shirt === "s") {
                nav.bg("224_lunch/bgm.webp");
            }
            else {
                nav.bg("224_lunch/bgf.webp");
            }
            break;
        case "ceciliabj":
            if (g.internal === 4) {
                nav.kill();
                levels.gotbj("f", "cecilia");
                nav.bg("224_lunch/cecilia0.webp"); 
                chat(8, 224);
            }
            else {
                nav.bg("224_lunch/cecilia" + g.internal + ".webp"); 
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room224.chatcatch = function (callback) {
    switch (callback) {
        case "endlunch":
            char.settime(13, 15);
            var missyAfterlunch = missy.afterLunch();
            if (missyAfterlunch === 211 && sissy.st[21].ach) {
                nav.bg("200_frontOffice/bg.jpg");
                chat(4, 224);
                return;
            }
            char.room(missy.afterLunch());
            break;
        case "endlunchEnergy":
            gv.mod("energy", 50);
            room224.chatcatch("endlunch");
            break;
        case "endlunchPunish":
            gv.mod("energy", -20);
            room224.chatcatch("endlunch");
            break;
        case "standInCorner":
            nav.bg("224_lunch/punish0.jpg");
            break;
        case "eatpussy":
            nav.kill();
            levels.oral(3, "f", "envy", false);
            nav.bg("224_lunch/envy1.jpg"); 
            break;
        case "ceciliabj":
            nav.kill();
            nav.bg("224_lunch/cecilia1.webp"); 
            g.internal = 2;
            nav.next("ceciliabj");
            break;
        case "leave":
            char.room(203);
            break;
        default:
            break;
    }
};

room224.chat = function (chatID) {
    let c;
    let crossdressing = cl.c.shirt === "r";
    if (chatID === 1000) { //landlord
        if (sc.getSecret("landlord").secretOut) {
            sc.modLevel("landlord", 45, 7);
            c = [
                "I'm so proud of you. My little girl has a big girl job! ",
                "I would never work a job where I couldn't have a bit of wine at lunch. ",
                "I saw the biggest penis at work today! I don't even know how that man can walk around. ",
                "Your blouse is so cute! My little working girl! ",
            ];
        }
        else if (crossdressing) {
            sc.modSecret("landlord", 100);
            return {
                chatID: 0,
                speaker: "landlord",
                text: "Oh my. I didn't know you wore women's clothing when you're out and about. *sigh* " +
                    "I guess I should have known my little boy wasn't going to stay my little boy. We " +
                    "really should wait till you get home to talk about it. ",
                button: [
                    { chatID: -1, text: "oh. Hehe. Yeah, we'll talk about at home. ", callback: "endlunchEnergy" }
                ]
            };
        }
        else {
            sc.modLevel("landlord", 26, 5);
            c = [
                "So proud of my little man! Working a real big boy job! ",
                "You look so handsome in your suit. You should wear it more often. ",
                "I can't wait for you to meet the right girl and give me lots of little grand children. ",
            ]
        }
        return {
            chatID: 0,
            speaker: "landlord",
            text: c[g.rand(0, c.length)],
            button: [
                { chatID: -1, text: "Awww " + sc.n("landlord") + ".", callback: "endlunchEnergy" }
            ]
        };
    }
    else if (chatID === 999) { //janice
        if (sc.getSecret("janice").secretOut) {
            sc.modLevel("janice", 45, 7);
            c = [
                "I gave a blowjob to that nice waiter. He always gives me $20 after. Such a nice man. ",
                "*queef* hehehe. I think some of the repairman's sperms squirted out of me. hehe ",
                "I can't wait to have you pick out a real man for me to fuck. I must be ovulating 'cause I'm so horny. ",
                "Your blouse is so cute! Maybe someday you'll be as cute as me, hehe. ",
            ];
        }
        else if (crossdressing) {
            sc.modSecret("janice", 100);
            return {
                chatID: 0,
                speaker: "janice",
                text: "Oh my. I didn't know you wore women's clothing when you're out and about. *sigh* " +
                    "Somehow I always knew you weren't a real man. We should talk about this when you come over. ",
                button: [
                    { chatID: -1, text: "oh. Hehe. Yeah, we'll talk about it later. ", callback: "endlunchEnergy" }
                ]
            };
        }
        else {
            sc.modLevel("janice", 26, 5);
            c = [
                "So glad my man has a real job so he can take care of me. ",
                "So glad you're working so you can take care of me. ",
                "Be sure to put in lots of overtime so you can take care of me. ",
            ]
        }
        return {
            chatID: 0,
            speaker: "janice",
            text: c[g.rand(0, c.length)],
            button: [
                { chatID: -1, text: "Awww " + sc.n("janice") + ".", callback: "endlunchEnergy" }
            ]
        };
    }
    else if (chatID === 998) { //elijah
        if (sc.getMissionTask("elijah", "elijah", 5).complete) {
            if (cl.c.necklace !== "eli") {
                return {
                    chatID: 0,
                    speaker: "elijah",
                    text: "Awww you're not wearing my necklace. I was hoping you would wear it all the time " +
                        "so other men knew you were taken. ",
                    button: [
                        { chatID: -1, text: "Oh sorry. Totally forgot it.", callback: "endlunchEnergy" }
                    ]
                };
            }
            sc.modLevel("elijah", 26, 10);
            return {
                chatID: 0,
                speaker: "elijah",
                text: "Love how you're still wearing my necklace. Shows other men you're spoken for to be " +
                    "my future wife.",
                button: [
                    { chatID: -1, text: "I'm all yours baby. ", callback: "endlunchEnergy" }
                ]
            };
        }
        sc.modLevel("elijah", 26, 10);
        c = [
            "Don't worry baby. Once I get a job you'll never have to work again. Just stay home all day raising our babies. ",
            "Hate that you work and I don't. Once we're married and I get a baby in you, you'll have to leave this job. ",
            "Every day is more beautiful with you in in. ",
        ]
        return {
            chatID: 0,
            speaker: "elijah",
            text: c[g.rand(0, c.length)],
            button: [
                { chatID: -1, text: "Awww " + sc.n("elijah") + ".", callback: "endlunchEnergy" }
            ]
        };
    }
    else if (chatID === 997) { //envy
        if (sc.getMissionTask("envy", "gf", 5).complete) {
            return {
                chatID: 0,
                speaker: "envy",
                text: "My pussy is so... horny. Can you eat me out please! I need an orgasm so I can get " +
                    "back to school. ",
                button: [
                    { chatID: 6, text: "Sure!", callback: "eatpussy" },
                    { chatID: -1, text: "Can't. Gotta get back to work babe. ", callback: "endlunchEnergy" },
                ]
            };
        }
        return {
            chatID: 0,
            speaker: "envy",
            text: "I hate you, but I'm hungry. Don't think that I'm not still mad at you! ",
            button: [
                { chatID: -1, text: "Yeah. I'm sorry about that. ", callback: "endlunchEnergy" },
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I'm going to skip lunch. ",
            button: [
                { chatID: -1, text: "...", callback: "endlunchEnergy" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Since you can't seem to follow simple instructions you can stand in the corner and think about " +
                "ways to correct your behavior while I go out. You better be standing there when I get back. ",
            button: [
                { chatID: 2, text: "Yes ma'am", callback: "standInCorner" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Why is she treating me like a child. Standing in the corner is so humiliating and dumb. ",
            button: [
                { chatID: -1, text: "[End lunch]", callback: "endlunchPunish" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "More to come later....",
            button: [
                { chatID: -1, text: "[End lunch]", callback: "endlunch" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "I don't have any cases today. Go work in the pink room or start " +
                "working on the bigger cases.",
            button: [
                { chatID: -1, text: "[End Day]", callback: "leave" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "*sigh* I guess she's still sleeping. ",
            button: [
                { chatID: -1, text: "...", callback: "endlunchEnergy" }
            ]
        },
        {
            chatID: 6,
            speaker: "envy",
            text: "That's my good " + gender.pronoun("boy") + "! Fuck, err, I mean fudge I needed that! " +
                "welp, time to get back to school. ",
            button: [
                { chatID: -1, text: "...", callback: "endlunchEnergy" }
            ]
        },
        {
            chatID: 7,
            speaker: "cecilia",
            text: "Oh sweet! I've been staring at your cock all day and need a taste. Pleeeessseee!!! " +
                "Can I suck your penis! ",
            button: [
                { chatID: -1, text: "Fuck yeah!", callback: "ceciliabj" },
                { chatID: -1, text: "Oh. Some other time. ", callback: "endlunch" },
            ]
        },
        {
            chatID: 8,
            speaker: "cecilia",
            text: "Hehehe! Thanks for the cum. I won't have to go get lunch today! ",
            button: [
                { chatID: -1, text: "You're welcome!", callback: "endlunch" },
            ]
        },
        {
            chatID: 7,
            speaker: "cecilia",
            text: "Oh sweet! I've been wanting to suck a penis all day! ",
            button: [
                { chatID: 8, text: "Oh. I'm locked up ", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "cecilia",
            text: "Awww. Some other time then. ",
            button: [
                { chatID: -1, text: "...", callback: "endlunch" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};