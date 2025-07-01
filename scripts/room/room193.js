//Room name
var room193 = {};
room193.main = function () {

    switch (g.rand(0, 3)) {
        case 0:
            nav.bg("193_afternoon/cop0.webp");
            chat(0, 193);
            break;
        case 1:
            nav.bg("200_frontOffice/case_beaver0.jpg");
            g.internal = {
                bg: g.rand(0, 3),
                guesses: 0,
                btns: new Array(),
                caught: 0
            };
            switch (g.internal.bg) {
                case 0:
                    g.internal.btns = [
                        { id: 0, x: 841, y: 729, w: 340, h: 144, t: false },
                        { id: 1, x: 357, y: 706, w: 160, h: 171, t: false },
                        { id: 2, x: 535, y: 590, w: 274, h: 248, t: false },
                        { id: 3, x: 1669, y: 786, w: 185, h: 110, t: false },
                        { id: 4, x: 1669, y: 656, w: 185, h: 95, t: false },
                        { id: 5, x: 1393, y: 739, w: 124, h: 86, t: false },
                        { id: 6, x: 1393, y: 636, w: 124, h: 75, t: false },
                        { id: 7, x: 1516, y: 704, w: 153, h: 86, t: false },
                    ];
                    break;
                case 1:
                    g.internal.btns = [
                        { id: 0, x: 111, y: 728, w: 703, h: 288, t: false },
                        { id: 1, x: 1740, y: 710, w: 180, h: 370, t: false },
                        { id: 2, x: 1246, y: 643, w: 220, h: 89, t: false },
                        { id: 3, x: 1248, y: 601, w: 219, h: 86, t: false },
                        { id: 4, x: 1251, y: 548, w: 217, h: 88, t: false },
                        { id: 5, x: 1058, y: 609, w: 90, h: 48, t: false },
                        { id: 6, x: 1059, y: 560, w: 88, h: 35, t: false },
                    ];
                    break;
                case 2:
                    g.internal.btns = [
                        { id: 0, x: 888, y: 587, w: 263, h: 98, t: false },
                        { id: 1, x: 1616, y: 791, w: 270, h: 244, t: false },
                        { id: 2, x: 32, y: 813, w: 149, h: 153, t: false },
                        { id: 3, x: 663, y: 784, w: 430, h: 179, t: false },
                        { id: 4, x: 492, y: 730, w: 183, h: 129, t: false },
                        { id: 5, x: 1282, y: 737, w: 177, h: 96, t: false },
                        { id: 6, x: 1281, y: 690, w: 181, h: 86, t: false },
                        { id: 7, x: 1280, y: 648, w: 183, h: 76, t: false }
                    ];
                    break;
            }
            g.internal.btns[g.rand(0, g.internal.btns.length)].t = true;
            chat(19, 193);
            break;
        default:
            nav.bg("200_frontOffice/bg.jpg");
            g.internal = {
                bg: g.rand(0, 4),
                step: 0,
                events: g.shuffleArray([0, 1, 2, 10, 11]),
                pictures: new Array(),
                totalPics: 0,
                totalPay: 0
            };
            if (missy.get("193caseExplain") === 0) {
                chat(12, 193);
            }
            else {
                chat(15, 193);
            }
            missy.mod("193caseExplain", 1);
            break;
    }
};

room193.btnclick = function (name) {
    if (name.startsWith("pantyi_")) {
        let id = parseInt(name.replace("pantyi_", ""));
        let foundPanties = false;
        nav.killbutton(name);

        for (let i = 0; i < g.internal.btns.length; i++) {
            if (g.internal.btns[i].id === id) {
                foundPanties = g.internal.btns[i].t;
                break;
            }
        }
        if (foundPanties) {
            nav.kill();
            nav.button({
                "type": "btnNoHover",
                "name": "panties",
                "left": 611,
                "top": 162,
                "width": 1004,
                "height": 757,
                "image": "193_afternoon/panty" + g.internal.bg + "_2.webp"
            }, 13);
            chat(23, 193);
        }
        else {
            if (g.rand(0, 100) < g.internal.caught) { //caught
                nav.kill();
                switch (g.rand(0, 5)) {
                    case 0:
                        nav.button({
                            "type": "img",
                            "name": "cop",
                            "left": 870,
                            "top": 39,
                            "width": 784,
                            "height": 1041,
                            "image": "452_parkWomansRoom/cop.png"
                        }, 452);
                        chat(26, 193);
                        break;
                    case 1:
                        nav.button({
                            "type": "img",
                            "name": "cop",
                            "left": 794,
                            "top": 162,
                            "width": 600,
                            "height": 918,
                            "image": "193_afternoon/panty_caught0.webp"
                        }, 452);
                        chat(27, 193);
                        break;
                    case 2:
                        nav.button({
                            "type": "img",
                            "name": "cop",
                            "left": 794,
                            "top": 162,
                            "width": 600,
                            "height": 918,
                            "image": "193_afternoon/panty_caught2.webp"
                        }, 452);
                        chat(29, 193);
                        break;
                    case 3:
                        nav.button({
                            "type": "img",
                            "name": "cop",
                            "left": 794,
                            "top": 162,
                            "width": 600,
                            "height": 918,
                            "image": "193_afternoon/panty_caught3.webp"
                        }, 452);
                        chat(29, 193);
                        break;
                    default:
                        nav.button({
                            "type": "img",
                            "name": "cop",
                            "left": 794,
                            "top": 162,
                            "width": 600,
                            "height": 918,
                            "image": "193_afternoon/panty_caught1.webp"
                        }, 452);
                        chat(31, 193);
                        break;
                }
                
                return;
            }
            else {
                switch (g.internal.guesses) {
                    case 0: g.internal.caught = 15; break;
                    case 1: g.internal.caught = 25; break;
                    case 2: g.internal.caught = 40; break;
                    case 3: g.internal.caught = 55; break;
                    case 4: g.internal.caught = 75; break;
                    case 5: g.internal.caught = 80; break;
                    case 6: g.internal.caught = 85; break;
                    case 7: g.internal.caught = 90; break;
                    default: g.internal.caught = 95; break;
                }
                nav.killbutton("cper");
                nav.t({
                    type: "img",
                    name: "cper",
                    left: 400,
                    top: 10,
                    font: 60,
                    hex: "#ffffff",
                    stroke: "black",
                    text: "Chance of getting caught: " + g.internal.caught + "%"
                }, 193);
            }
        }
        g.internal.guesses++;
        return;
    }
    switch (name) {
        case "icon_leave":
            char.addtime(67);
            char.room(0);
            break;
        case "copdick":
            if (g.internal === 0)
                chat(5, 193);
            else if (g.internal === 1) {
                g.internal = 2;
                nav.modbutton("copdick", "193_afternoon/cop_dick1.webp", null, "tongue");
                chat(7, 193);
            }
            else if (g.internal === 2) {
                nav.button({
                    "type": "img",
                    "name": "copdickchat",
                    "left": 897,
                    "top": 49,
                    "width": 792,
                    "height": 311,
                    "image": "193_afternoon/copchat_2.webp"
                }, 193);
                g.internal++;
            }
            else if (g.internal === 8) {
                nav.modbutton("copdick", "193_afternoon/cop_dick2.webp", null, null);
                nav.modbutton("copdickchat", "193_afternoon/copchat_3.webp", null, null);
                g.internal++;
            }
            else if (g.internal > 8) {
                nav.killbutton("copdickchat");
                chat(8, 193);
                g.internal++;
            }
            else {
                nav.modbutton("copdickchat", "193_afternoon/copchat_" + (g.internal % 3) + ".webp", null, null);
                g.internal++;
            }
            break;
        case "copballs":
            nav.killbutton("copballs");
            nav.bg("193_afternoon/cop2.webp");
            nav.modbutton("copdick", null, null, "kiss");
            g.internal = 1;
            chat(6, 193);
            break;
        case "cop4":
            nav.kill();
            nav.bg("193_afternoon/cop4.webp");
            zcl.face(400, 1000, .7, "cum", false);
            levels.oral(3, "m", "cop2", true);
            chat(9, 193);
            break;
        case "pic":
            if (g.internal.step > 3) {
                nav.kill();
                chat(17, 193)
            }
            else {
                nav.kill();
                nav.bg("193_afternoon/pic" + g.internal.bg + "_" + g.internal.events[g.internal.step] + ".webp");
                nav.button({
                    "type": "img",
                    "name": "pic",
                    "left": 823,
                    "top": 573,
                    "width": 1225,
                    "height": 579,
                    "image": "193_afternoon/pic_bush.webp"
                }, 193);
                zcl.backOfHead(600, 1000, .3);
                for (let i = 0; i < g.internal.pictures.length; i++) {
                    nav.button({
                        "type": "img",
                        "name": "pic",
                        "left": 400 + (i * 75),
                        "top": 50 + (i * 10),
                        "width": 192,
                        "height": 108,
                        "image": "193_afternoon/pic" + g.internal.bg + "_" + g.internal.pictures[i] + ".webp"
                    }, 193);
                }
                sc.select("pwait", "193_afternoon/icon_wait.webp", 0);
                sc.select("ppic", "193_afternoon/icon_pic.webp", 1);
            }
            break;
        case "pwait":
            char.addtime(61);
            g.popUpNoticeBottom("An hour passes");
            g.internal.step++;
            room193.btnclick("pic");
            break;
        case "ppic":
            char.addtime(61);
            g.internal.pictures.push(g.internal.events[g.internal.step]);
            g.internal.step++;
            g.internal.totalPics++;
            room193.btnclick("pic");
            break;
        case "pantyLockpickFail":
            chat(22, 193);
            break;
        case "pantyLockpick":
            nav.kill();
            nav.bg("193_afternoon/panty" + g.internal.bg + "_1.webp");
            for (var i = 0; i < g.internal.btns.length; i++) {
                nav.button({
                    "type": "btn",
                    "name": "pantyi_" + g.internal.btns[i].id,
                    "left": g.internal.btns[i].x,
                    "top": g.internal.btns[i].y,
                    "width": g.internal.btns[i].w,
                    "height": g.internal.btns[i].h,
                    "image": "193_afternoon/pantyi" + g.internal.bg + "_" + g.internal.btns[i].id + ".webp"
                }, 193);
            }
            sc.select("icon_leave", "125_poker/icon_leave.png", -2);
            nav.t({
                type: "img",
                name: "cper",
                left: 400,
                top: 10,
                font: 60,
                hex: "#ffffff",
                stroke: "black",
                text: "Chance of getting caught: " + g.internal.caught + "%"
            }, 193);
            break;
        case "rapeEnd":
            char.addtime(87);
            char.room(0);
            break;
        default:
            break;
    }
};

room193.chatcatch = function (callback) {
    switch (callback) {
        case "punish":
            g.pass = "insubordination";
            char.room(217);
            break;
        case "cop1":
            nav.kill();
            nav.bg("193_afternoon/cop1.webp");
            g.internal = 0;
            nav.button({
                "type": "grab",
                "name": "copballs",
                "left": 1071,
                "top": 569,
                "width": 367,
                "height": 409,
                "image": "193_afternoon/cop_balls.webp"
            }, 193);
            nav.button({
                "type": "grab",
                "name": "copdick",
                "left": 1156,
                "top": 494,
                "width": 229,
                "height": 374,
                "image": "193_afternoon/cop_dick.webp"
            }, 193);
            break;
        case "cop3":
            nav.kill();
            nav.bg("193_afternoon/" + callback + ".webp");
            nav.next("cop4");
            break;
        case "cop5":
            zcl.face(400, 1000, .7, "up", false);
            break;
        case "200bg":
            nav.kill();
            nav.bg("200_frontOffice/bg.jpg");
            break;
        case "endok":
            char.settime(17, 15);
            missy.mod("mood", 5);
            char.room(201);
            break;
        case "endGood":
            char.settime(17, 15);
            missy.mod("mood", 30);
            char.room(201);
            break;
        case "endBad":
            char.settime(17, 15);
            missy.mod("mood", -30);
            char.room(201);
            break;
        case "pic0":
            char.settime(13, 30);
            room193.btnclick("pic");
            break;
        case "picSetup":
            nav.bg("193_afternoon/pic" + g.internal.bg + "_0.webp");
            nav.button({
                "type": "img",
                "name": "pic",
                "left": 823,
                "top": 573,
                "width": 1225,
                "height": 579,
                "image": "193_afternoon/pic_bush.webp"
            }, 193);
            zcl.backOfHead(600, 1000, .3);
            break;
        case "panty0":
            char.addtime(97);
            nav.kill();
            nav.bg("193_afternoon/panty" + g.internal.bg + "_0.webp");
            break;
        case "panty1":
            lockpick.init(4, "pantyLockpick", "pantyLockpickFail", 30, 193);
            break;
        case "panty2":
            nav.kill();
            nav.bg("200_frontOffice/case_beaver0.jpg");
            break;
        case "pantyGoodEnd":
            gv.mod("money", 100);
            char.addtime(40);
            missy.mod("mood", 30);
            char.room(201);
            break;
        case "room0":
            char.addtime(30);
            gv.set("map", 1);
            char.room(0);
            break;
        case "jail":
            char.room(376);
            break;
        case "pantyRape":
            nav.kill();
            rape.init(2, null, 193, "rapeEnd");
            break;
        default:
            break;
    }
};

room193.chat = function (chatID) {
    if (chatID === 900) {
        nav.killbutton("killpic");
        if (g.internal.totalPics === 0) {
            return {
                chatID: 900,
                speaker: "missy",
                text: "You were out there for hours and you didn't take one picture? " +
                    "What did I tell you about paying attention and not playing with " +
                    "your booty hole!!! Get out you failure!",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "endBad" }
                ]
            };
        }
        else if (g.internal.pictures.length === 0) {
            if (g.internal.totalPay > 0) {
                gv.mod("money", g.internal.totalPay);
                return {
                    chatID: 900,
                    speaker: "missy",
                    text: "For your great work I'll give you $" + g.internal.totalPay +
                        ". Keep it up. ",
                    button: [
                        { chatID: -1, text: "Yes ma'am!", callback: "endGood" }
                    ]
                };
            }
            else if (g.internal.totalPay === 0) {
                return {
                    chatID: 900,
                    speaker: "missy",
                    text: "You wasted your day and my patience. Focus on what you really " +
                        "need to photograph. ",
                    button: [
                        { chatID: -1, text: "Yes ma'am", callback: "endok" }
                    ]
                };
            }
            else {
                return {
                    chatID: 900,
                    speaker: "missy",
                    text: "This is all garbage! I know that both your bimbo brain cells " +
                        "are overloaded with holding the camera and taking a picture, " +
                        "but you need to involve that third brain cell to observe. Do better!",
                    button: [
                        { chatID: -1, text: "Yes ma'am", callback: "endBad" }
                    ]
                };
            }
        }
        else {
            nav.button({
                "type": "img",
                "name": "killpic",
                "left": 300,
                "top": 50,
                "width": 1600,
                "height": 900,
                "image": "193_afternoon/pic" + g.internal.bg + "_" + g.internal.pictures[0] + ".webp"
            }, 193);
            if (g.internal.pictures[0] < 10) {
                g.internal.pictures.shift();
                g.internal.totalPay -= 25;
                return {
                    chatID: 900,
                    speaker: "missy",
                    text: "Not what I was looking for. There's nothing here I can use. ",
                    button: [
                        { chatID: 900, text: "sigh", callback: "" }
                    ]
                };
            }
            else {
                g.internal.pictures.shift();
                g.internal.totalPay += 50;
                return {
                    chatID: 900,
                    speaker: "missy",
                    text: "Great picture! I see you can think for yourself! ",
                    button: [
                        { chatID: 900, text: "Yes ma'am", callback: "" }
                    ]
                };
            }
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Sissy, I need you to suck this officer's dick. ",
                button: [
                    { chatID: 1, text: "?", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "cop2",
                text: "Yeah, " + gender.pronoun("he") + "'ll do. Come here and suck my " +
                    "dick! Make sure you play with my balls. ",
                button: [
                    { chatID: 2, text: "ma'am?", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "I do love the eloquence of our local law enforcment, but yes. You " +
                    "need to suck his dick. And do tickle his balls. " +
                    "He really does seem to enjoy it. ",
                button: [
                    { chatID: 4, text: "Yes ma'am! One sloppy BJ coming up!", callback: "cop1" },
                    { chatID: 3, text: "No way! ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "You have lost your mind, but lucky for you I'll help you find it! " +
                    "Leave us, I have to set my sissy straight! ",
                button: [
                    { chatID: -1, text: "*gulp*", callback: "punish" }
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "Gently caress his balls. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "No dummy, his balls. Don't just start jerking him off. You have to " +
                    "caress the balls first. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "Good sissy. Now lightly tickle his balls and kiss the head of his " +
                    "dick. Let his dick know that you love it, intimately and deeply. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "Good sissy. Now lick his penis and keep licking until you start to " +
                    "see some precum dripping. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "Good sissy. That precum means he's ready for you to take his " +
                    "penis into your mouth. Take his penis in your mouth and suck it until " +
                    "he cums. Be sure to swallow everything. I don't like cum on my carpet. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "cop3" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "That's my good little cum dumpster. Now officer, I think you owe me " +
                    "the records I requested. ",
                button: [
                    { chatID: 10, text: "*gulp*", callback: "cop5" }
                ]
            },
            {
                chatID: 10,
                speaker: "cop2",
                text: "Yeah yeah yeah, I'll send them to you. Totally worth it. " +
                    "If you need more files you know my price. ",
                button: [
                    { chatID: 11, text: "...", callback: "200bg" }
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "You did well. Take the rest of the afternoon off. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "endGood" }
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: "You're finally smart enough to be useful to me. I have some " +
                    "real PI work I need you to do this afternoon that takes precedence " +
                    "over your desire to put objects in your bussy hole. ",
                button: [
                    { chatID: 13, text: "...", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: "This is where I need you to use that bimbo brain of yours. " +
                    "It's very simple; I need you to take pictures of people coming in " +
                    "or out of the house as well as anything that you think is of interest " +
                    "on the street in front of the house. I'll provide the address and camera, " +
                    "just take pictures. ",
                button: [
                    { chatID: 14, text: "Yes ma'am I'll take pictures of anything of interest. ", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "missy",
                text: "Good. I just need you to sit there for a few hours then report back to me. " +
                    "I pay $50 per good picture and subtract $25 for every stupid picture " +
                    "you take. Keep your eyes open and keep your dirty dick beaters " +
                    "on the camera button. Now go get me those pictures. ",
                button: [
                    { chatID: 16, text: "Yes ma'am!", callback: "picSetup" }
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "I need you to go out and take some more pictures. " +
                    "Take pictures of people coming in " +
                    "or out of the house as well as anything that you think is of interest " +
                    "on the street in front of the house. I'll provide the address and camera, " +
                    "just take pictures.",
                button: [
                    { chatID: -1, text: "Yes ma'am!", callback: "pic0" }
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "This is the place she sent me to. Must be that house. I'll just " +
                    "hide behind this bush and observe. ",
                button: [
                    { chatID: -1, text: "...", callback: "pic0" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "I got to get back to Missy. Let's see how it turned out. ",
                button: [
                    { chatID: 18, text: "...", callback: "200bg" }
                ]
            },
            {
                chatID: 18,
                speaker: "missy",
                text: "Let see how you did. Let me see your pictures. ",
                button: [
                    { chatID: 900, text: "...", callback: "" }
                ]
            },
            {
                chatID: 19,
                speaker: "jeffery",
                text: "Y-y-y-you need to get me panties! ",
                button: [
                    { chatID: 20, text: "...", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "missy",
                text: "Shut up " + sc.n("jeffery") + ". If you didn't have money no one " +
                    "would listen to you. " + sc.n("me") + " we need to to break into a " +
                    "young woman's house and steal her panties. You'll need to picke the " +
                    "lock on her front door, find a pair of dirty panties, and return " +
                    "them back here for " + sc.n("jeffery") + ". I'll send you to the house, " +
                    "but you'll have to break in and steal the panties. If you get caught you " +
                    "will probably go to jail, so if it gets dangerous, feel free to leave. ",
                button: [
                    { chatID: 21, text: "Yes ma'am I'll get those panties! ", callback: "panty0" }
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "Now I have to break in to this poor girl's house to steal her panties. ",
                button: [
                    { chatID: -1, text: "[Pick her lock]", callback: "panty1" }
                ]
            },
            {
                chatID: 22,
                speaker: "thinking",
                text: "Dammit! This lock is hard to pick! You know what, I'm just going " +
                    "to take the rest of the day off!",
                button: [
                    { chatID: -1, text: "...", callback: "room0" }
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "Sweet! Found some! Now to take them back for my reward!",
                button: [
                    { chatID: 24, text: "...", callback: "panty2" }
                ]
            },
            {
                chatID: 24,
                speaker: "jeffery",
                text: "W-w-w-wow! There're so pungent. My night is planned! Here's the " +
                    "$500 I owe you Missy!",
                button: [
                    { chatID: 25, text: "...", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "And for your hard work you can have $100 and take the rest of the " +
                    "afternoon off. ",
                button: [
                    { chatID: -1, text: "Thank's ma'am", callback: "pantyGoodEnd" }
                ]
            },
            {
                chatID: 26,
                speaker: "cop2",
                text: "We had reports of a burgler in the area. Looks like you're coming " +
                    "downtown! ",
                button: [
                    { chatID: -1, text: "Drat!", callback: "jail" }
                ]
            },
            {
                chatID: 27,
                speaker: "sporty",
                text: "Oh! Hey! Didn't hear you come in! What's up?",
                button: [
                    { chatID: -1, text: "I uh... wrong house!", callback: "leave" },
                    { chatID: 28, text: "Oh! It's dumb. I was sent here to steal your panties.", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "sporty",
                text: "Oh hahaha! Yeah, ok. Getting panties as a new sissy is hard. Here's a " +
                    "pair. Hope they're ok! You might want to wash them. I haven't had a " +
                    "chance to do laundry.",
                button: [
                    { chatID: 24, text: "Awesome! You're the best. Thanks!", callback: "panty2" },
                ]
            },
            {
                chatID: 29,
                speaker: "!girl",
                text: "AAAAaaaa HELP! There's a rapist in my HOUSE! HELP HELP HELP!! RAPIST!!!",
                button: [
                    { chatID: 30, text: "No! I uhh. crap [run away]", callback: "room0" },
                ]
            },
            {
                chatID: 30,
                speaker: "thinking",
                text: "Holy crap! She thought I was going to rape her! I was only " +
                    "trying to steal her panties! Damn that was brutal.",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "!futa0",
                text: "Well, well, well. It looks like I have a dirty dirty theif. You " +
                    "know what I do to theives? ",
                button: [
                    { chatID: -1, text: "*gulp*", callback: "pantyRape" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};