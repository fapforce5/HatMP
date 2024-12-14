//Living Room
var room26 = {};
room26.main = function () {
    var btnList = new Array();

    if (sc.getTimeline("landlord").thisRoom) {
        if (sc.getTimeline("bigguy").thisRoom) {
            if (daily.get("bigguy")) {
                nav.bg("26_livingRoom/bg_1.jpg");
                chat(27, 26);
            }
            else {
                var straightPath = sc.taskGetStep("bigguy", "straight");
                if (straightPath === 0) {
                    nav.bg("26_livingRoom/bg_1.jpg");
                    chat(17, 26);
                }
                else if (straightPath === 1) {
                    nav.bg("26_livingRoom/bg_2.jpg");
                    chat(19, 26);
                }
                else if (straightPath === 2) {
                    nav.bg("26_livingRoom/bg_4.jpg");
                    chat(23, 26);
                }
                else if (straightPath === 3) {
                    nav.bg("26_livingRoom/bg_1.jpg");
                    chat(28, 26);
                }
            }
        }
        else if (sc.getTimeline("lola").thisRoom) {
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            btnList.push({
                "type": "btn",
                "name": "all3",
                "left": 501,
                "top": 68,
                "width": 1138,
                "height": 1012,
                "image": "26_livingRoom/all3.png"
            });
        }
        else {
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            btnList.push({
                "type": "btn",
                "name": "landlord",
                "left": 977,
                "top": 69,
                "width": 634,
                "height": 942,
                "image": "26_livingRoom/ll.png"
            });
        }
    }

    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 26);
    });
    nav.buildnav(navList);
    //}
};

room26.btnclick = function (name) {
    switch (name) {
        case "landlord":
            if (sc.getMission("landlord", "sissy").notStarted) {
                nav.button({
                    "type": "img",
                    "name": "chatbg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1001_rand/black_25.png"
                }, g.roomID);
                if (!daily.get("landlordChat")) {
                    sc.select("chat_landlord", "26_livingRoom/chat_landlord.png", 0);
                }
                if (sc.getMissionTask("landlord", "talk", 2).complete) {
                    sc.select("sit_landlord", "26_livingRoom/icon_tv.png", 1);
                    sc.select("sit_dick", "26_livingRoom/icon_dick.png", 2);
                }
                sc.select("sissy_confess", "26_livingRoom/icon_sissy.png", 3)
                sc.selectCancel("chat_cancel", 4);
            }
            else {
                if (daily.get("landlordChat")) {
                    chat(80, 26);
                }
                else {
                    daily.set("landlordChat");
                    switch (sc.taskGetStep("landlord", "sissy")) {
                        case -1:
                        case 0:
                            chat(79, 26);
                            break;
                        case 1:
                            if (cl.c.dress === "pd") {
                                sc.completeMissionTask("landlord", "sissy", 1);
                                chat(83, 26);
                            }
                            else {
                                chat(81, 26);
                            }
                            break;
                    }
                }
            }
            break;
        case "sissy_confess":
            room26.btnclick("chat_cancel");
            chat(73, 26);
            break;
        case "sit_dick":
            room26.btnclick("chat_cancel");
            if (cl.c.chastity !== null) {
                sc.modSecret("landlord", 100);
                chat(59, 26);
            }
            else if (cl.pantiesTxt() === "panties") {
                sc.modSecret("landlord", 100);
                chat(60, 26);
            }
            else {
                if (sc.getMissionTask("landlord", "man", 4).complete && !daily.get("landlordDick")) {
                    daily.set("landlordDick");
                    nav.killall();
                    nav.bg("26_livingRoom/q0.jpg");
                    chat(63, 26);
                }
                else {
                    nav.killall();
                    nav.bg("26_livingRoom/passtime8.jpg");
                    chat(61, 26);
                }
            }
            break;
        case "chat_cancel":
            nav.killbutton("chatbg");
            nav.killbutton("chat_cancel");
            nav.killbutton("sit_landlord");
            nav.killbutton("sit_dick");
            nav.killbutton("sissy_confess");
            nav.killbutton("chat_landlord");
            return;
        case "chat_landlord":
            room26.btnclick("chat_cancel");
            daily.set("landlordChat");
            var jobapplyconst = gv.get("jobapplyconst");
            var chatEvent = sc.taskGetStep("landlord", "talk");

            if (jobapplyconst < 2) {
                chat(0, 26);
            }
            else {
                if (!daily.get("landlordChat"))
                    sc.modLevel("landlord", 25, 7);
                if (chatEvent === 0)
                    chat(1, 26);
                else if (chatEvent === 1)
                    chat(3, 26);
                else if (chatEvent === 2)
                    chat(6, 26);
                else if (chatEvent === 3)
                    chat(7, 26);
                else if (chatEvent === 4)
                    chat(29, 26);
                else if (chatEvent === 5)
                    chat(38, 26);
                else if (chatEvent === 6) {
                    sc.completeMissionTask("landlord", "talk", 6);
                    chat(11, 26);
                }
                else
                    chat(11, 26);
            }
            break;
        case "sit_landlord":
            nav.killall();
            g.internal = { s: 0, c: 0 };
            nav.bg("26_livingRoom/sit0.jpg");
            sc.select("tv_chat", "26_livingRoom/chat_landlord.png", 10);
            sc.select("tv_closer", "26_livingRoom/icon_closer.png", 11);
            sc.select("tv_watch", "26_livingRoom/icon_tv.png", 12);
            sc.selectCancel("tv_complete", 13);
            break;
        case "tv_chat":
            nav.killall();
            chat(34, 26);
            break;
        case "tv_closer":
            switch (g.internal.c) {
                case 0:
                    g.internal.c = 1;
                    nav.bg("26_livingRoom/sit1.jpg");
                    break;
                case 1:
                    g.internal.c = 2;
                    nav.bg("26_livingRoom/sit2.jpg");
                    if (sc.getLevel("landlord") < 1) 
                        chat(31, 26);
                    break;
                case 2:
                    g.internal.c = 3;
                    nav.bg("26_livingRoom/sit3.jpg");
                    if (sc.getLevel("landlord") < 2)
                        chat(31, 26);
                    else
                        sc.modLevel("landlord", 25, 6);
                    break;
                case 3:
                    g.internal.c = 4;
                    nav.bg("26_livingRoom/sit4.jpg");
                    if (sc.getLevel("landlord") < 3)
                        chat(31, 26);
                    else {
                        nav.killall();
                        sc.modLevel("landlord", 25, 6);
                        g.roomTimeout = setTimeout(function () {
                            nav.bg("26_livingRoom/sit5.jpg");
                            chat(32, 26);
                        }, 1000);
                    }
                    break;
            }
            g.internal.s++;
            break;
        case "tv_watch":
            chat(999, 26);
            break;
        case "tv_complete":
            char.addtime(120);
            char.room(26);
            break;
        case "all3":
            if (sc.getMission("lola", "sissy").notStarted) {
                chat(40, 26);
            }
            else {
                switch (sc.taskGetStep("landlord", "sissy")) {
                    case -1:
                    case 0:
                        chat(79, 26);
                        break;
                    case 1:
                        if (cl.c.dress === "pd") {
                            sc.completeMissionTask("landlord", "sissy", 1);
                            chat(83, 26);
                        }
                        else {
                            chat(81, 26);
                        }
                        break;
                }
            }
            break;
        case "e_reset":
            char.room(26);
            break;
        case "e_tv":
            nav.killall();
            char.settime(22, 0);
            nav.bg("26_livingRoom/eend.jpg");
            sc.modLevel("lola", 30, 7);
            sc.modLevel("eva", 30, 7);
            sc.modLevel("landlord", 30, 7);
            chat(41, 26);
            break;
        case "e_molest":
            nav.killall();
            g.internal = 0;
            sc.select("e_molest1", "26_livingRoom/icon_molest0.png", 0);
            sc.selectCancel("e_tv", 2);
            nav.bg("26_livingRoom/m0.jpg");
            break;
        case "e_molest1":
            nav.killall();
            if (sc.getLevel("lola") > 1) {
                nav.bg("26_livingRoom/m1_good.jpg");
                sc.select("e_molest2", "26_livingRoom/icon_molest1.png", 0);
                sc.selectCancel("e_tv", 2);
            }
            else {
                nav.bg("26_livingRoom/m1_bad.jpg");
                chat(69, 26);
            }
            break;
        case "e_molest2":
            nav.killall();
            if (sc.getLevel("lola") > 2) {
                nav.bg("26_livingRoom/m2_good.jpg");
                sc.select("e_molest3", "26_livingRoom/icon_molest2.png", 0);
                sc.selectCancel("e_tv", 2);
            }
            else {
                nav.bg("26_livingRoom/m2_bad.jpg");
                chat(69, 26);
            }
            break;
        case "e_molest3":
            nav.killall();
            if (sc.getLevel("lola") > 3) {
                nav.bg("26_livingRoom/m3_good.jpg");
                sc.select("e_molest4", "26_livingRoom/icon_molest3.png", 0);
                sc.selectCancel("e_tv", 2);
            }
            else {
                nav.bg("26_livingRoom/m3_bad.jpg");
                chat(69, 26);
            }
            break;
        case "e_molest4":
            nav.killall();
            nav.bg("26_livingRoom/m4.jpg");
            chat(70, 26);
            break;
        case "m6":
            nav.killbutton("m6");
            if (g.rand(0, 2) === 0) {
                nav.bg("26_livingRoom/m6_bad.jpg");
                chat(72, 26);
            }
            else {
                sex.mod("hand", true, "f", 1);
                sc.modLevel("lola", 30, 7);
                nav.bg("26_livingRoom/m6.jpg");
                chat(71, 26);
            }
            break;
        case "f1":
            nav.killall();
            gv.mod("arousal", 50);
            nav.bg("26_livingRoom/f1.jpg");
            chat(47, 26);
            break;
        case "f7":
            if (g.internal > 13) {
                nav.killall();
                sc.completeMissionTask("landlord", "misc", 1);
                levels.fuckpussy("eva");
                levels.fuckpussy("lola");
                levels.fuckpussy("landlord");
                sc.modLevel("eva", 50, 10);
                sc.modLevel("lola", 50, 10);
                sc.modLevel("landlord", 50, 10);
                chat(58, 26);
            }
            else {
                nav.bg("26_livingRoom/f" + g.internal + ".jpg");
                g.internal++;
            }
            break;
        case "q4":
            if (g.internal > 2) {
                nav.killall();
                nav.bg("26_livingRoom/q5.jpg");
                g.internal = 6;
                nav.next("q5");
            }
            else {
                nav.bg("26_livingRoom/q4_" + g.internal + ".jpg");
                g.internal++;
            }
            break;
        case "q5":
            if (g.internal === 8) {
                nav.bg("26_livingRoom/q0.jpg");
                sc.modLevel("landlord", 25, 10);
                nav.killall();
                levels.oralGive(3, false, false, "f");
                chat(67, 26);
            }
            else {
                nav.bg("26_livingRoom/q" + g.internal + ".jpg");
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room26.chatcatch = function (callback) {
    $.each(callback.split(" "), function (i, v) {
        switch (v.trim()) {
            case "bg_3":
            case "bg_4":
            case "bg_5":
            case "bg_6":
            case "f3":
            case "f4":
            case "passtime8a":
            case "q1":
            case "q2":
            case "q3":
                nav.bg("26_livingRoom/" + callback + ".jpg");
                break;
            case "f6":
                if (cl.c.chastity !== null) {
                    nav.bg("26_livingRoom/f6_bad.jpg");
                    chat(55, 26);
                }
                else if (cl.pantiesTxt() === "panties") {
                    nav.bg("26_livingRoom/f6_badp.jpg");
                    chat(56, 26);
                    
                }
                else {
                    nav.killall();
                    nav.bg("26_livingRoom/" + callback + ".jpg");
                    chat(57, 26);
                }
                break;
            case "f6BadEnd":
                sc.modSecret("lola", 100);
                sc.modSecret("eva", 100);
                sc.modSecret("landlord", 100);
                char.room(10);
                break;
            case "f2":
                char.settime(21, 58);
                nav.bg("26_livingRoom/" + callback + ".jpg");
                break;
            case "f5":
                gv.mod("arousal", 100);
                nav.bg("26_livingRoom/" + callback + ".jpg");
                break;
            case "f0_eva":
            case "f1":
                nav.killall();
                nav.bg("26_livingRoom/" + callback + ".jpg");
                break;
            case "f7":
                g.internal = 8;
                nav.bg("26_livingRoom/" + callback + ".jpg");
                nav.next("f7");
                break;
            case "passtime":
                char.addtime(30);
                break;
            case "level1":
                sc.modLevel("landlord", 100, 4);
                break;
            case "missionSpermBank":
                sc.completeMissionTask("landlord", "talk", 1);
                break;
            case "pantycheck":
                if (gv.get("lockdrawer"))
                    chat(9, 26);
                else
                    chat(8, 26);
                break;
            case "talk_0_complete":
                sc.completeMissionTask("landlord", "talk", 0);
                sc.modLevel("landlord", 50, 4);
                break;
            case "talk_3_complete":
                sc.completeMissionTask("landlord", "talk", 3);
                inv.add("landlordKey");
                sc.modLevel("landlord", 50, 4);
                sc.startMission("landlord", "man");
                char.addtime(30);
                break;
            case "talk_4_complete":
                sc.completeMissionTask("landlord", "talk", 4);
                sc.modLevel("landlord", 50, 4);
                char.addtime(30);
                break;
            case "talk_5_complete":
                sc.completeMissionTask("landlord", "talk", 5);
                sc.startMission("lola", "date");
                sc.modLevel("landlord", 50, 4);
                char.addtime(30);
                break;
            case "talk_6_complete":
                sc.modLevel("landlord", 50, 4);
                break;
            case "bg_s_0_end":
                sc.char[sc.i("bigguy")].show = true;
                sc.completeMissionTask("bigguy", "straight", 0, true);
                char.addtime(37);
                daily.set("bigguy");
                break;
            case "bg_s_1_end":
                gv.mod("money", 10);
                sc.completeMissionTask("bigguy", "straight", 1, true);
                char.addtime(37);
                daily.set("bigguy");
                break;
            case "bg_s_2_end":
                sc.completeMissionTask("bigguy", "straight", 2, true);
                char.addtime(37);
                daily.set("bigguy");
                break;
            case "tv_closer":
                g.internal.c--;
                nav.bg("26_livingRoom/sit" + g.internal.c + ".jpg");
                break;
            case "sit6":
                nav.bg("26_livingRoom/sit6.jpg");
                sc.modLevel("landlord", 30, 6);
                char.settime(23, 17);
                break;
            case "tvEnd":
                sc.modLevel("landlord", 25, 5);
                char.addtime(120);
                char.room(26);
                break;
            case "tvChatEnd":
                sc.select("tv_chat", "26_livingRoom/chat_landlord.png", 10);
                sc.select("tv_closer", "26_livingRoom/icon_closer.png", 11);
                sc.select("tv_watch", "26_livingRoom/icon_tv.png", 12);
                sc.selectCancel("tv_complete", 13);
                break;
            case "reset":
                char.room(26);
                break;
            case "e1":
                nav.killall();
                if (sc.getMissionTask("lola", "date", 5).complete) {
                    nav.bg("26_livingRoom/e1.jpg");
                    nav.next("f1");
                }
                else if (sc.getLevel("lola") > 4 && sc.getLevel("eva") > 4) {
                    nav.killall();
                    nav.bg("26_livingRoom/night.jpg");
                    char.settime(21, 58);
                    nav.button({
                        "type": "img",
                        "name": "f0",
                        "left": 428,
                        "top": 130,
                        "width": 1178,
                        "height": 918,
                        "image": "26_livingRoom/f0.png"
                    }, 26);
                    chat(43, 26);
                }
                else {
                    nav.bg("26_livingRoom/e1.jpg");
                    sc.select("e_molest", "26_livingRoom/icon_molest.png", 10);
                    sc.select("e_tv", "26_livingRoom/icon_watch.png", 12);
                    sc.selectCancel("e_reset", 13);
                }
                break;
            case "f0_end":
                sc.modLevel("lola", 40, 7);
                sc.modLevel("eva", 40, 7);
                sc.modLevel("landlord", 40, 7);
                char.room(26);
                break;
            case "leave":
                char.room(10);
                break;
            case "f3exit":
                nav.killall();
                nav.bg("26_livingRoom/night.jpg");
                nav.button({
                    "type": "img",
                    "name": "all3",
                    "left": 501,
                    "top": 68,
                    "width": 1138,
                    "height": 1012,
                    "image": "26_livingRoom/all3.png"
                }, 26);
                zcl.displayMain(-400, 500, .3, "clothes", true);
                break;
            case "q4":
                nav.bg("26_livingRoom/q4.jpg");
                g.internal = 0;
                nav.button({
                    "type": "tongue",
                    "name": "q4",
                    "left": 1191,
                    "top": 367,
                    "width": 135,
                    "height": 135,
                    "image": "26_livingRoom/butthole.png"
                }, 26);
                break;
            case "e_tv":
                room26.btnclick("e_tv");
                break;
            case "m5":
                if (sc.getLevel("lola") > 4) {
                    nav.bg("26_livingRoom/m5_good.jpg");
                    nav.next("m6");
                }
                else {
                    nav.bg("26_livingRoom/m5_bad.jpg");
                    chat(69, 26);
                }
                break;
            case "spanking":
                char.addtime(60);
                g.pass = "finger";
                char.room(21);
                break;
            case "sissyEnd":
                sc.modSecret("landlord", 100);
                char.room(26);
                break;
            case "ll200":
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "ll200",
                    "left": 800,
                    "top": 0,
                    "width": 700,
                    "height": 1080,
                    "image": "26_livingRoom/ll200.png"
                }, 26);
                break;
            case "ll200_1":
                nav.killall();
                nav.bg("26_livingRoom/ll200_1.jpg");
                break;
            case "ll200_2":
                char.addtime(180);
                char.room(450);
                break;
            default:
                console.log("unknown callback: " + v)
                break;
        }
    });
};

room26.chat = function (chatID) {
    if (chatID === 999) {
        var fl = gv.get("forbotenLove");
        if (fl > 8) {
            fl = 0;
            gv.set("forbotenLove", 1);
        }
        else
            gv.mod("forbotenLove", 1);

        nav.killall();
        nav.bg("26_livingRoom/tv" + fl + ".jpg");
        var chatz = [
            "I can't wait to see this show! It's a story of a love that wasn't supposed to be. ",
            "They so aren't right for each other. He's too boring for her. ",
            "Awwww. I hope it works out. They could be such a better couple. ",
            "When I was younger we used to walk everywhere. You kids today don't even know how hard it was to find entertainment. ",
            "OOooo. It's starting to get spicy! ",
            "He has such a sexy butt. Oh my. You may have to step out of the room. Hehehe. ",
            "They do make the perfect couple. I'm so happy they were able to find each other. ",
            "I guess that's life. Sometimes people cheat. If he provided what she needed, she wouldn't have to go out and cheat on him. ",
            "Well that was a show. Not a great show, but it was a show. "
        ];
        return {
            chatID: 0,
            speaker: "landlord",
            text: chatz[fl],
            button: [
                { chatID: -1, text: "[Finish watching the show]", callback: "tvEnd" }
            ]
        };
    }
    else {

        var cArray = [
            {
                chatID: 0,
                speaker: "landlord",
                text: "Stop staring at my tits and go get a job!",
                button: [
                    { chatID: -1, text: "...", callback: "passtime" }
                ]
            },
            {
                chatID: 1,
                speaker: "landlord",
                text: "I'm so glad you have such a manly job! You're really growing up. A few weeks working out there and you'll get " +
                    "some big sexy man muscles! Some lucky girls going to just love running her hands all over your hard veiny construction " +
                    "muscles... Anyway, I'm so happy you aren't a lazy fuck up anymore. ",
                button: [
                    { chatID: -1, text: "Thanks? ", callback: "passtime talk_0_complete" }
                ]
            },
            {
                chatID: 2,
                speaker: "landlord",
                text: sc.n("landlord") + "'s watching her shows.. run along.",
                button: [
                    { chatID: -1, text: "[Run along]", callback: "passtime" }
                ]
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "You would not believe the day I had at the Sperm Bank today! First I got a huge order to ship out to our local buyer, way " +
                    "to big for us to fill, but I couldn't say no. So now I have to find a way to double the donations I get in a month somehow. " +
                    "I just don't know how I'll do it, but god finds a way I guess. ",
                button: [
                    { chatID: 4, text: "I'm sorry. It must be hard getting more customers. ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "landlord",
                text: "I know I don't allow you to come to the Sperm Bank, but now that you're a working man, you could help. I have " +
                    "a couple ideas. You can come by on Saturday morning if you want to help me out. I don't want to interfere " +
                    "with your job, my working man. ",
                button: [
                    { chatID: 5, text: "Sounds cool.", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "landlord",
                text: "Great! I'll be at the Sperm Bank Saturday Morning. I have a couple ideas on how you can help, but I'll " +
                    "let you choose when you get there! ",
                button: [
                    { chatID: -1, text: "Ok. See you Saturday!", callback: "missionSpermBank" }
                ]
            },
            {
                chatID: 6,
                speaker: "landlord",
                text: "I'm so happy we'll get to work together. Can't wait to see you Saturday morning! ",
                button: [
                    { chatID: -1, text: "Ok. See you Saturday!", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "landlord",
                text: "I can't thank you enough for helping me out. You really are growing into a man. Since you like helping " +
                    "so much you can help me in the morning. Here's my bedroom key. If you make my bed in the morning I'll give " +
                    "you $5 in allowance in addition to cleaning the dishes. ",
                button: [
                    { chatID: -1, text: "Oh. cool", callback: "pantycheck" }
                ]
            },
            {
                chatID: 8,
                speaker: "landlord",
                text: "And no funny business. Your " + sc.n("el") + " like to go into my closet and steal things. I know there " +
                    "isn't anything for you in there, but I just have to say. ",
                button: [
                    { chatID: 10, text: "Oh. cool", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "landlord",
                text: "And don't be rooting around my panty drawer like you did with your " + sc.n("el") + ". I know that horny young " +
                    "men love the smell of pussy, but I don't need your fluids on my clean panties. ",
                button: [
                    { chatID: 10, text: "Oh. ok.", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "landlord",
                text: "I know you'll be a good boy and help me out. Here's the key, and behave yourself. ",
                button: [
                    { chatID: -1, text: "Sweet. I will", callback: "talk_3_complete" }
                ]
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "So what do you want to talk about?",
                button: [
                    { chatID: 12, text: "That's a very revealing night gown you're wearing", callback: "" },
                    { chatID: 13, text: "Why are you so hard on me?", callback: "" },
                    { chatID: 14, text: "Can you tell me about my father?", callback: "" },
                    { chatID: 15, text: "What are your opinions of the cult? ", callback: "" },
                    { chatID: -1, text: "Oh, nothing. ", callback: "talk_6_complete" },
                ]
            },
            {
                chatID: 12,
                speaker: "landlord",
                text: "When I'm at home, I'm relaxing. There's no need to dress stuffy. You all need to just accept " +
                    "that I don't care. You can dress however you want if you're paying the bills. ",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "landlord",
                text: "I'm hard on you so you don't end up in the streets. It's not out of anger, it's out of love.  " +
                    "With " + sc.n("lola") + " I don't have to be mean, but with you and " + sc.n("eva") + " I do. " +
                    "I really want to be nice, but you two don't respond to that, so you make me mean so I can get " +
                    "through to you.",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 14,
                speaker: "landlord",
                text: "Your father was a good man. Not a manly man, but a good man. I don't really like talking about " +
                    "him, but he got mixed up with that cult. I told him that it was trouble, but he didn't listen. He " +
                    "never was good at listening to good advice, much like you. It ended up costing his life. Never " +
                    "trust them. Never go there. ",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "landlord",
                text: "I'm a terrible person to ask. They are my main buyer, but I hate them. Really I use them as a " +
                    "means to an end. The sperm bank was owned by a man named " + sc.n("charlie") + ". Now he used to " +
                    "own almost half the town, till his gamling and whoring caught up with him and forced him to sell off " +
                    "most of his properites. For cheap. Cheap enough for me to buy it, with a little help from the bank. ",
                button: [
                    { chatID: 16, text: "uh huh", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "landlord",
                text: "So after I bought it, I found out that there isn't a huge demand in this town for sperm. After " +
                    "about three months I was about to go under till I was approached by the cult. They offered to buy " +
                    "all my extra sperm for a good price. While I hate them for everything they are, I needed them to " +
                    "stay afloat. So I take their dirty money, but I use it for good, like paying on this house. " +
                    "So I hate them and you should avoid them, I use them for their money. ",
                button: [
                    { chatID: 11, text: "...", callback: "" },
                ]
            },
            {
                chatID: 17,
                speaker: "landlord",
                text: "Hi honey. I don't think you've met " + sc.n("bigguy") + " yet. ",
                button: [
                    { chatID: 18, text: "oh. Hello.", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "bigguy",
                text: "Oh. Hi. Why don't you run along little one. Your " + sc.n("landlord") + " and I kinda busy here. ",
                button: [
                    { chatID: -1, text: "oh. ok. ", callback: "bg_s_0_end" },
                ]
            },
            {
                chatID: 19,
                speaker: "landlord",
                text: "Oh fuck... right there.... fuck.....",
                button: [
                    { chatID: 20, text: sc.n("landlord") + "?", callback: "bg_3" },
                ]
            },
            {
                chatID: 20,
                speaker: "landlord",
                text: "Oh my. I guess I got caught being a bit naughty. ",
                button: [
                    { chatID: 21, text: "...", callback: "" },
                ]
            },
            {
                chatID: 21,
                speaker: "bigguy",
                text: "Hey kid. Why don't you run along and go play in traffic or something. Let the grown ups talk about grown up things. ",
                button: [
                    { chatID: 22, text: "...", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "landlord",
                text: "Here's $10. Go play at the mall. I know you guys like playing at the mall. ok. ",
                button: [
                    { chatID: -1, text: "Oh. Sure. ", callback: "bg_s_1_end" },
                ]
            },
            {
                chatID: 23,
                speaker: "bigguy",
                text: "You ever see real man's cock cum in your " + sc.n("landlord") + "? ",
                button: [
                    { chatID: 24, text: "huh? ", callback: "bg_5" },
                ]
            },
            {
                chatID: 24,
                speaker: "landlord",
                text: "*gulp*",
                button: [
                    { chatID: 25, text: "...", callback: "bg_6" },
                ]
            },
            {
                chatID: 25,
                speaker: "landlord",
                text: "Oh my. I'm sorry you saw this. You see sometimes when two adults get together.. ",
                button: [
                    { chatID: 26, text: "I know what's going on. I don't need the details. ", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "bigguy",
                text: "Since you're such a smart little guy, why don't you figure out how to remove yourself from this room. ",
                button: [
                    { chatID: -1, text: "Ugh. ok", callback: "bg_s_2_end" },
                ]
            },
            {
                chatID: 27,
                speaker: "bigguy",
                text: "I know I told you to run along. Now get going before I move you along. ",
                button: [
                    { chatID: -1, text: "*Huff*", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "bigguy",
                text: "Why don't you run along cock blocker.  ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "landlord",
                text: "You know you're really grown into a handsome man. You must have the girls " +
                    "beating down the door trying to get with you. ",
                button: [
                    { chatID: 30, text: "Oh thanks. ", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "landlord",
                text: "You know if I was a younger woman I would absolutely date you. I love " +
                    "how I can see your veiny arms pop whenever you touch your face. ",
                button: [
                    { chatID: 37, text: "oh " + sc.n("landlord"), callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "landlord",
                text: "What are you doing. Give me some space. ",
                button: [
                    { chatID: -1, text: "Oh. yeah. Sorry.", callback: "tv_closer" },
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "So soft and comfortable. I'm just going to close my eyes for a minute. ",
                button: [
                    { chatID: 33, text: "zzz", callback: "sit6" },
                ]
            },
            {
                chatID: 33,
                speaker: "landlord",
                text: "Honey. Wake up. You should go to bed.",
                button: [
                    { chatID: -1, text: "Oh. yeah. Sorry.", callback: "reset" },
                ]
            },
            {
                chatID: 34,
                speaker: "me",
                text: "Hey, do you...",
                button: [
                    { chatID: 35, text: "...", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "landlord",
                text: "Shhh. It's rude to talk when I'm watching the T.V.",
                button: [
                    { chatID: 36, text: "oh... sorry. ", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "landlord",
                text: "Don't be sorry. Be quit. ",
                button: [
                    { chatID: -1, text: "...", callback: "tvChatEnd" },
                ]
            },
            {
                chatID: 37,
                speaker: "landlord",
                text: "Oh my, I'm flushed now. Be good. ",
                button: [
                    { chatID: -1, text: "Hahaha ok", callback: "talk_4_complete" },
                ]
            },
            {
                chatID: 38,
                speaker: "landlord",
                text: "You know you should talk to your friends about " + sc.n("lola") + ". " +
                    "She's a good girl and really should be dating more. Maybe you two " +
                    "should date, you know as a practice date. You're both single and " +
                    "awkward around other people. ",
                button: [
                    { chatID: 39, text: "What? That's weird.", callback: "" },
                ]
            },
            {
                chatID: 39,
                speaker: "landlord",
                text: "It's not that weird. Just keep it cordial. Maybe a dinner and movie, " +
                    "just to practice for when you two get real boyfriends and girlfriends.",
                button: [
                    { chatID: -1, text: "Maybe. Let me think on it", callback: "talk_5_complete" },
                ]
            },
            {
                chatID: 40,
                speaker: "lola",
                text: "If it isn't my favorite boy. Come sit with us, watch some TV. ",
                button: [
                    { chatID: -1, text: "Sure!", callback: "e1" },
                    { chatID: -1, text: "I'll pass", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "thinking",
                text: "Wow. What a pleasant and wholesome time. I really enjoyed " +
                    "just haning out with everyone. ",
                button: [
                    { chatID: 42, text: "...", callback: "" },
                ]
            },
            {
                chatID: 42,
                speaker: "landlord",
                text: "It's getting late. Time to head to bed. ",
                button: [
                    { chatID: -1, text: "ok", callback: "reset" },
                ]
            },
            {
                chatID: 43,
                speaker: "landlord",
                text: "What a great show! I hope you kids don't mind, but I got to let this thing air out " +
                    "while we watch TV. It suddenly got really warm in here. ",
                button: [
                    { chatID: 44, text: "...", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "eva",
                text: "Oh gross " + sc.n("landlord") + ". No one wants to see your old " +
                    "pussy! ",
                button: [
                    { chatID: 45, text: "...", callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "landlord",
                text: "That boy Malcom that used to always come over seemed to like it. I " +
                    "even let him eat it once! You said you two were just friends. ",
                button: [
                    { chatID: 46, text: "...", callback: "f0_eva" },
                ]
            },
            {
                chatID: 46,
                speaker: "eva",
                text: "YUK! yuk, yuk, yuk. I'm going to bed! ",
                button: [
                    { chatID: -1, text: "...", callback: "f0_end" },
                ]
            },
            {
                chatID: 47,
                speaker: "thinking",
                text: sc.n("lola") + "'s leg keeps rubbing against my dick.  ",
                button: [
                    { chatID: 48, text: "...", callback: "f2" },
                ]
            },
            {
                chatID: 48,
                speaker: "thinking",
                text: "Is that her hand. I'm just trying to sit and watch some TV with " +
                    "everyone and she can't keep her hands off my dick! ",
                button: [
                    { chatID: 51, text: "Lay back and see what happens", callback: "f3" },
                    { chatID: 49, text: "Make an excuse to leave ", callback: "f3exit" }
                ]
            },
            {
                chatID: 49,
                speaker: "me",
                text: "Oh wow, it's getting late. Better head for bed. ",
                button: [
                    { chatID: 50, text: "...", callback: "" },
                ]
            },
            {
                chatID: 50,
                speaker: "landlord",
                text: "Nobody cares! Get out of the way so we can catch the end of our " +
                    "show!!! Move!",
                button: [
                    { chatID: -1, text: "Oh. ok. 'night", callback: "leave" },
                ]
            },
            {
                chatID: 51,
                speaker: "eva",
                text: "That show really turned us on. ",
                button: [
                    { chatID: 52, text: "?", callback: "f4" },
                ]
            },
            {
                chatID: 52,
                speaker: "lola",
                text: "Let's sneak upstairs to our room so we can show you how wet we are. ",
                button: [
                    { chatID: 53, text: "!", callback: "f5" },
                ]
            },
            {
                chatID: 53,
                speaker: "landlord",
                text: "Hold it right there you three! I know exactly what you're planning. " +
                    "Girls, I can smell your arousal. You two must be soaking with all the " +
                    "sexual tension. ",
                button: [
                    { chatID: 54, text: "We weren't doing anything...", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "landlord",
                text: "Really? Girls, pull his dick out. If it's hard I know you're lying. Show " +
                    "us that you weren't planning something. ",
                button: [
                    { chatID: -1, text: "huh?", callback: "f6" },
                ]
            },
            {
                chatID: 55,
                speaker: "landlord",
                text: "Oh. I guess you wern't. That's a chastity cage isn't it? I know " +
                    "the type of 'men' that wear those, and they aren't men. Girls, " +
                    "go to bed. We'll talk about this in the morning. I have to process " +
                    "the fact that my little boy is secretly a girl. ",
                button: [
                    { chatID: -1, text: "oh. 'night I guess. ", callback: "f6BadEnd" },
                ]
            },
            {
                chatID: 56,
                speaker: "landlord",
                text: "Oh. I guess you wern't. You're wearing women's panties. I know " +
                    "the type of 'men' that wear those, and they aren't men. Girls, " +
                    "go to bed. We'll talk about this in the morning. I have to process " +
                    "the fact that my little boy is secretly a girl. ",
                button: [
                    { chatID: -1, text: "oh. 'night I guess. ", callback: "f6BadEnd" },
                ]
            },
            {
                chatID: 57,
                speaker: "landlord",
                text: "That looks pretty hard to me. Since we share in this house, " +
                    sc.n("eva") + " you have ride it first, then " + sc.n("lola") + 
                    ", and last me. You better keep that penis hard, becuse I could " +
                    "use an orgasm. ",
                button: [
                    { chatID: -1, text: "oh yeah!", callback: "f7" },
                ]
            },
            {
                chatID: 58,
                speaker: "landlord",
                text: "That dick is amazing! Now girls, go wash your face, you don't want " +
                    "to go to bed stinking of cum. And you, " + sc.n("me") + " be sure to " +
                    "wash you dick since I just cleaned your sheets and I'm not doing it again " +
                    "for a week. Night everyone. ",
                button: [
                    { chatID: -1, text: "'night", callback: "reset" },
                ]
            },
            {
                chatID: 59,
                speaker: "landlord",
                text: "Oh honey. Is that a chastity cage. Are you trying to tell me " +
                    "in your own weird way that you secretly desire to be my little girl. " +
                    "I'm sorry. I wasn't expecting this. Why don't we talk in the morning " +
                    "when I've had time to process this. ",
                button: [
                    { chatID: -1, text: "oh. ok. ", callback: "reset" },
                ]
            },
            {
                chatID: 60,
                speaker: "landlord",
                text: "Oh honey. Are you wearing women's panties? Are you trying to tell me " +
                    "in your own weird way that you secretly desire to be my little girl. " +
                    "I'm sorry. I wasn't expecting this. Why don't we talk in the morning " +
                    "when I've had time to process this. ",
                button: [
                    { chatID: -1, text: "oh. ok. ", callback: "reset" },
                ]
            },
            {
                chatID: 61,
                speaker: "landlord",
                text: "Oh look, your penis. I bet you want to stick this inside me? ",
                button: [
                    { chatID: 62, text: "I sure do!", callback: "passtime8a" },
                ]
            },
            {
                chatID: 62,
                speaker: "landlord",
                text: "Put your dick away! I'm watching my shows! ",
                button: [
                    { chatID: -1, text: "OW! ow ow ow. *whipmer* ok", callback: "reset" },
                ]
            },
            {
                chatID: 63,
                speaker: "landlord",
                text: "Oh wow! I love it when you just take your dick out! So forward. " +
                    "It's like my dreams have come true! Do you want to shove it in " +
                    "my tight wet pussy? Pump your dick in and out until you spread your " +
                    "seed inside me?",
                button: [
                    { chatID: 64, text: "Oh yeah! ", callback: "q1" },
                ]
            },
            {
                chatID: 64,
                speaker: "landlord",
                text: "Well that's not going to happen! I'm just sitting here watching " +
                    "my shows, trying to relax and you want to poke me with your dick! " +
                    "The nerve! Bring you face over here! Stick your tongue out.",
                button: [
                    { chatID: 65, text: "Huh? ", callback: "q2" },
                ]
            },
            {
                chatID: 65,
                speaker: "landlord",
                text: "That's my boy, come closer. ",
                button: [
                    { chatID: 66, text: "...", callback: "q3" },
                ]
            },
            {
                chatID: 66,
                speaker: "landlord",
                text: "Give me that tongue. I'm going to shove it right up my ass. " +
                    "Maybe that will teach you a lesson on how to leave me alone to " +
                    "watch my shows! Now lick my clean! ",
                button: [
                    { chatID: -1, text: "Yeethhh", callback: "q4" },
                ]
            },
            {
                chatID: 67,
                speaker: "landlord",
                text: "Fuck I needed my ass eaten! You probably want your reward? ",
                button: [
                    { chatID: 68, text: "Oh yeah!", callback: "q1" },
                ]
            },
            {
                chatID: 68,
                speaker: "landlord",
                text: "Your reward is living in my house. Now scram. I'm watching my shows.  ",
                button: [
                    { chatID: -1, text: "Ok", callback: "reset" },
                ]
            },
            {
                chatID: 69,
                speaker: "thinking",
                text: "She looks angry. I better stop here before she cuauses a scene. ",
                button: [
                    { chatID: -1, text: "[Increase your level with her]", callback: "e_tv" },
                ]
            },
            {
                chatID: 70,
                speaker: "thinking",
                text: "Oh wow. She hasn't stopped me. I can smell her pussy, but it's " +
                    "really faint. I wonder if " + sc.n("eva") + " or " + sc.n("landlord") +
                    " can smell her. They haven't looked over, so I'm probably good. I'm " +
                    "just going to try dipping my fingers inside her pussy. Just to see " +
                    "how it feels. ",
                button: [
                    { chatID: -1, text: "[Finger that slut]", callback: "m5" },
                ]
            },
            {
                chatID: 71,
                speaker: "thinking",
                text: "Yes! I totally fingered her! My fingers smell like her pussy. I'm " +
                    "totally never washing them. Better put my finger away before we get caught. ",
                button: [
                    { chatID: -1, text: "[Sniff your fingers and watch TV]", callback: "e_tv" },
                ]
            },
            {
                chatID: 72,
                speaker: "landlord",
                text: "Get your fingers out of your " + g.makeSingular(sc.n("el")) + 
                    "! Do you two really think I have lost my ability to smell of feel. " +
                    sc.n("lola") + " go wash your vagina, it smells! " + sc.n("me") + " stop " +
                    "fingering " + sc.n("lola") + ". Now follow me for your spanking!  ",
                button: [
                    { chatID: -1, text: "Awwwww", callback: "spanking" },
                ]
            },
            {
                chatID: 73,
                speaker: "me",
                text: sc.n("landlord") + ", I have something I need to tell you. ",
                button: [
                    { chatID: 74, text: "...", callback: "" },
                ]
            },
            {
                chatID: 74,
                speaker: "landlord",
                text: "Make it quick. You're interrupting my shows. ",
                button: [
                    { chatID: 75, text: "I'm a cock craving sissy. ", callback: "" },
                    { chatID: 76, text: "Deep down I feel like I'm the wrong gender. ", callback: "" },
                    { chatID: 78, text: "I don't know what gender I am. ", callback: "" },
                ]
            },
            {
                chatID: 75,
                speaker: "landlord",
                text: "*sigh* I know dear. Everyone knows except " + sc.n("lola") + ", " +
                    "that poor girl. I suppose I should be glad you've finally admitted " +
                    "who you are to yourself. Go get the dicks and let me finish my shows. ",
                button: [
                    { chatID: -1, text: "Oh. ok.", callback: "sissyEnd" },
                ]
            },
            {
                chatID: 76,
                speaker: "landlord",
                text: "Oh my sweet baby girl, I know. I guess I've always known. You've " +
                    "just been letting life pass you by while you try to find yourself. " +
                    "admitting to me who you really are is your first step to being who " +
                    "you are. Find yourself and start living the life you were meant to live. ",
                button: [
                    { chatID: 77, text: "...", callback: "" },
                ]
            },
            {
                chatID: 77,
                speaker: "landlord",
                text: "I know it's a huge step for you, but it's a big step for us all too. " +
                    "Let me watch my shows and think about my next words before we talk further. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "sissyEnd" },
                ]
            },
            {
                chatID: 78,
                speaker: "landlord",
                text: "It sounds like you know who you are, but you're afraid to commit to " +
                    "who you are. Take the day. Think about who you really are. We'll talk " +
                    "more tomorrow. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "sissyEnd" },
                ]
            },
            {
                chatID: 79,
                speaker: "landlord",
                text: "I know you have a lot to talk about, but give me a day to process " +
                    "it. In the mean time let me watch my shows. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "reset" },
                ]
            },
            {
                chatID: 80,
                speaker: "landlord",
                text: "ssssshh. Let me watch my shows. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "reset" },
                ]
            },
            {
                chatID: 81,
                speaker: "landlord",
                text: "Hi honey. I'm glad you've finally found your true self. If you " +
                    "want to earn some extra money, now that you're a girl you can work " +
                    "with me at the Sperm Bank. Make yourself pretty, because only pretty " +
                    "girls can work with me. ",
                button: [
                    { chatID: -1, text: "oh cool!", callback: "" },
                ]
            },
            {
                chatID: 82,
                speaker: "landlord",
                text: "I also want to help you on your road to be a proper lady. " +
                    "Meet me in the living room and we'll have a picnic. " +
                    "Your first lesson on being a proper lady is proper clothing. " +
                    "Wear a nice polka dot dress. Polka dots are the perfect dress " +
                    "for a picnic outing. No rush. When you're ready to buy and wear " +
                    "a dress I'll be here. ",
                button: [
                    { chatID: -1, text: "I will!", callback: "" },
                ]
            },
            {
                chatID: 83,
                speaker: "landlord",
                text: "You really do look pretty in that dress. Just a second let me " +
                    "change into my dress and we'll go out. ",
                button: [
                    { chatID: 84, text: "Yes!", callback: "ll200" },
                ]
            },
            {
                chatID: 84,
                speaker: "landlord",
                text: "It's been too long since I've had a reason to wear this dress. Lets head to the park and have a nice picnic.",
                button: [
                    { chatID: 85, text: "[Head to the park]", callback: "ll200_1" }
                ]
            },
            {
                chatID: 85,
                speaker: "landlord",
                text: "Such a beautiful day, down't you think?",
                button: [
                    { chatID: 86, text: "Oh yes, it is wonderful.", callback: "" }
                ]
            },
            {
                chatID: 86,
                speaker: "landlord",
                text: "Such a beautiful day, down't you think?",
                button: [
                    { chatID: 87, text: "Oh yes, it is wonderful.", callback: "" }
                ]
            },
            {
                chatID: 87,
                speaker: "landlord",
                text: "So many changes. I'm so excited you've found your real self. I've always preferred " +
                    "girls. I suppose when Harry left me for a 18 year old bimbo I've soured to men. I think that's why I've been so hard " +
                    "on you. I've been afriad that you would turn out like him. ",
                button: [
                    { chatID: 88, text: "I'm nothing like Harry.", callback: "" }
                ]
            },
            {
                chatID: 88,
                speaker: "landlord",
                text: "Oh honey I know! Harry was a man's man. They kind of of guy that that would go hunting, clean his deer, then " +
                    "spend the rest of the night drinking with the boys. You're not much of a hunter and " +
                    "in your cute little dress drinking with the boys is going to be... different.",
                button: [
                    { chatID: 89, text: "Hehehe yeah", callback: "" }
                ]
            },
            {
                chatID: 89,
                speaker: "landlord",
                text: "So I've been a woman for a while, and I know that you're new to it. Do you have any questions about your new found " +
                    "femininity that I could help you with?",
                button: [
                    { chatID: 91, text: "What's the best way to get rid of all this body hair!", callback: "" },
                    { chatID: 92, text: "How do I measure my bra size?", callback: "" },
                    { chatID: 93, text: "Is a bigger always better?", callback: "" },
                    { chatID: 94, text: "Nothing", callback: "" }
                ]
            },
            {
                chatID: 90,
                speaker: "landlord",
                text: "Anymore questions?",
                button: [
                    { chatID: 91, text: "What's the best way to get rid of all this body hair!", callback: "" },
                    { chatID: 92, text: "How do I measure my bra size?", callback: "" },
                    { chatID: 93, text: "Is a bigger always better?", callback: "" },
                    { chatID: 94, text: "Nothing", callback: "" }
                ]
            },
            {
                chatID: 91,
                speaker: "landlord",
                text: "Oh honey. Women have been trying to figure this out since we've first had to get rid of our body hair. " +
                    "Personally I just wax. It hurts the first time, but after a while it hurts less. ",
                button: [
                    { chatID: 90, text: "I have more questions", callback: "" },
                    { chatID: 94, text: "Nothing", callback: "" }
                ]
            },
            {
                chatID: 92,
                speaker: "landlord",
                text: "You look like a " + cl.cupsize() + ". I had that nice young girl at Popular Girl measure me. She's really good. ",
                button: [
                    { chatID: 90, text: "I have more questions", callback: "" },
                    { chatID: 94, text: "Nothing", callback: "" }
                ]
            },
            {
                chatID: 93,
                speaker: "landlord",
                text: "Oh my... Yes! But not how you think. I like a thick penis, but it needs to be 8 inches (20 cm) or " +
                    "shorter or it hits my cervix. I had a real bull of a man with the longest penis you've ever seen and he just " +
                    "kept hitting me hard. Worst sex ever. I suppose since you don't have a cervix longer is fine, but you just " +
                    "have to experiance many differnt penises to find what you like. ",
                button: [
                    { chatID: 90, text: "I have more questions", callback: "" },
                    { chatID: 94, text: "Nothing", callback: "" }
                ]
            },
            {
                chatID: 94,
                speaker: "landlord",
                text: "So you may wonder why I brought you out here for a picnic. As you know I've been running the Sperm Bank, mostly " +
                    "on my own. You may wonder how such a small town can have a Sperm Bank with so few people and still stay in business. ",
                button: [
                    { chatID: 95, text: "I never thought of that. ", callback: "" }
                ]
            },
            {
                chatID: 95,
                speaker: "landlord",
                text: "I've been selling my excess sperm to the cult. No matter how much I get, they always want more. I have no idea " +
                    "what they do with it. I probably send them a gallon a week. What someone does with a gallon of sperm I'll never know. " +
                    "It's enough to impregnate every woman in this town and all the surrounding towns. ",
                button: [
                    { chatID: 96, text: "Oh wow. That's a lot of sperm.", callback: "" }
                ]
            },
            {
                chatID: 96,
                speaker: "landlord",
                text: "I need a delivery girl on the weekends. I had a girl, D.M., delivering it, but she just stopped coming in one day. " +
                    "She was always irresponsible, but I just don't trust that cult. I think they are responsible for her disappearance. " +
                    "Now that you're such a cute girl I need to warn you to stay away from them. Bad things happen. I've made them promise " +
                    "not to go near your " + sc.n("el") + ". I just don't know what to do. I think the cops in this town are working for them.",
                button: [
                    { chatID: 97, text: "I could take it to " + sc.n("missy") + ". She's amazing.", callback: "" }
                ]
            },
            {
                chatID: 97,
                speaker: "landlord",
                text: "You know you're right. Maybe I can work with her to find D.M. She was odd, but a lovely girl. I would hate to " +
                    "think she got mixed up with that cult. I'm just hoping she met a boy and ran off with him somewhere. ",
                button: [
                    { chatID: 98, text: "...", callback: "" }
                ]
            },
            {
                chatID: 98,
                speaker: "thinking",
                text: "I bet I could find her! I hope " + sc.n("landlord") + " takes this to " + sc.n("missy") + ". ",
                button: [
                    { chatID: 99, text: "...", callback: "" }
                ]
            },
            {
                chatID: 99,
                speaker: "landlord",
                text: "Well it's starting to get late. I'm going to pick up and head home. Do you need help getting home?",
                button: [
                    { chatID: 100, text: "I'm good. Thanks!", callback: "" }
                ]
            },
            {
                chatID: 100,
                speaker: "landlord",
                text: "I like you better as a girl. I know you'll discover your true self. ",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "ll200_2" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
