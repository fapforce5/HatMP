//Room name
var room801 = {};
//after sissy school day 1 > find out Ralph told him mom everything
//after sissy school > mom buys and brings panties to Ralph
room801.main = function () {
    if (sc.getTimeline("ralphsdad").thisRoom) {
        if (sc.getMission("ralphsdad", "main").notStarted) {
            gv.set("ralphcycle", 1);
            daily.set("room800dad");
            sc.startMission("ralphsdad", "main");
            sc.completeMissionTask("ralphsdad", "main", 0);
            nav.bg("801_ralphlivingroom/dad.webp");
            nav.button({
                "type": "btn",
                "name": "dad",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d.webp"
            }, 801);
            chat(0, 801);
        }
        else if (daily.get("room800dad")) {
            nav.button({
                "type": "btn",
                "name": "dad",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d.webp"
            }, 801);
        }
        else if (cl.appearance() > 1) {
            daily.set("room800dad");
            if (!sc.getMissionTask("ralphsdad", "main", 1).complete) {
                if (sc.getMissionTask("ralphsdad", "main", 1).notStarted) {
                    nav.button({
                        "type": "btn",
                        "name": "dadflowers",
                        "left": 926,
                        "top": 86,
                        "width": 437,
                        "height": 994,
                        "image": "801_ralphlivingroom/d_f.webp"
                    }, 801);
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "dadflowers",
                        "left": 926,
                        "top": 86,
                        "width": 437,
                        "height": 994,
                        "image": "801_ralphlivingroom/d_r.webp"
                    }, 801);
                }
            }
            else if (!sc.getMissionTask("ralphsdad", "main", 6).complete) {
                if (sc.getMissionTask("ralphsdad", "main", 2).notStarted) {
                    nav.button({
                        "type": "btn",
                        "name": "dadbuttgrab",
                        "left": 926,
                        "top": 86,
                        "width": 437,
                        "height": 994,
                        "image": "801_ralphlivingroom/d.webp"
                    }, 801);
                }
                else {
                    if (sc.getLevel("ralphsdad") > 4) {
                        sc.completeMissionTask("ralphsdad", "main", 2);
                        sc.startMissionTask("ralphsdad", "main", 3);
                        nav.bg("801_ralphlivingroom/kiss0.webp");
                        chat(18, 801);
                    }
                    else {
                        switch (sc.getMissionTask("ralphsdad", "main", 2).mStatus % 2) {
                            case 0:
                                nav.button({
                                    "type": "btn",
                                    "name": "daddick",
                                    "left": 926,
                                    "top": 86,
                                    "width": 437,
                                    "height": 994,
                                    "image": "801_ralphlivingroom/d_d.webp"
                                }, 801);
                                break;
                            case 1:
                                nav.bg("801_ralphlivingroom/assgrab_bg.webp");
                                zcl.displayMain(-1400, 0, .5, "clothes", true);
                                nav.button({
                                    "type": "img",
                                    "name": "dad",
                                    "left": 260,
                                    "top": 0,
                                    "width": 754,
                                    "height": 826,
                                    "image": "801_ralphlivingroom/assgrab_fg.webp"
                                }, 801);
                                chat(2, 801);
                                break;
                        }
                        if (sc.getMissionTask("ralphsdad", "main", 2).mStatus > 90)
                            sc.modMissionTask("ralphsdad", "main", 2, -77);
                        sc.modMissionTask("ralphsdad", "main", 2, 1);
                    }
                }
            }
            else {
                daily.set("room800dad");
                nav.button({
                    "type": "btn",
                    "name": "daddick",
                    "left": 926,
                    "top": 86,
                    "width": 437,
                    "height": 994,
                    "image": "801_ralphlivingroom/d_d.webp"
                }, 801);
                chat(22, 801);
            }
        }
        else {
            nav.bg("801_ralphlivingroom/dad.webp");
            nav.button({
                "type": "btn",
                "name": "dad",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d.webp"
            }, 801);
        }
    }
    if (daily.get("noRoom803"))
        nav.buildnav([802, 0]);
    else
        nav.buildnav([802, 803, 804, 0]);
};

room801.btnclick = function (name) {
    switch (name) {
        case "dad":
            if (cl.appearance() > 1)
                chat(12, 801);
            else
                chat(1, 801);
            break;
        case "dadflowers":
            if (sc.getMissionTask("ralphsdad", "main", 1).notStarted) {
                chat(4, 801);
            }
            else {
                chat(9, 801);
            }
            break;
        case "dadbuttgrab":
            daily.set("room800dad");
            chat(13, 801);
            break;
        case "daddick":
            chat(7, 801);
            break;
        default:
            break;
    }
};

room801.chatcatch = function (callback) {
    switch (callback) {
        case "kiss1":
            nav.bg("801_ralphlivingroom/" + callback + ".webp");
            break;
        case "ralphRoom":
            char.room(802);
            break;
        case "assgrab0":
            nav.kill();
            nav.bg("801_ralphlivingroom/assgrab_bg0.webp");
            zcl.displayMain(-1400, 0, .5, "clothes", true);
            break;
        case "assgrab1":
            sc.modLevel("ralphsdad", 51, 4);
            sc.startMissionTask("ralphsdad", "main", 2);
            nav.kill();
            nav.bg("801_ralphlivingroom/assgrab_bg.webp");
            zcl.displayMain(-1400, 0, .5, "clothes", true);
            nav.button({
                "type": "img",
                "name": "dad",
                "left": 260,
                "top": 0,
                "width": 754,
                "height": 826,
                "image": "801_ralphlivingroom/assgrab_fg.webp"
            }, 801);
            break;
        case "takeFlowers":
            daily.set("room800dad");
            if (sc.getMissionTask("ralphsdad", "main", 1).notStarted) {
                sc.startMissionTask("ralphsdad", "main", 1);
                inv.add("bouquet");
            }
            else {
                sc.completeMissionTask("ralphsdad", "main", 1);
                inv.add("roses");
            }
            sc.modLevel("ralphsdad", 51, 1);
            nav.modbutton("dadflowers", "801_ralphlivingroom/d.webp", null, null);
            break;
        case "likeDick":
            sc.modLevel("ralphsdad", 51, 4);
            levels.mod("xdress", 15);
            break;
        case "kissgood":
            sc.modLevel("ralphsdad", 51, 7);
            char.room(801);
            break;
        case "bj0":
            nav.modbutton("dad", "801_ralphlivingroom/d_d1.webp", null, "img");
            zcl.displayMain(550, 880, .14, "clothes", true);
            break;
        case "bj1":
            daily.set("room800dad");
            levels.oral(4, "m", "ralphsdad", true);
            nav.button({
                "type": "img",
                "name": "dad",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "801_ralphlivingroom/bj1.webp"
            }, 801);
            break;
        case "reset":
            char.room(801);
            break;
        default:
            break;
    }
};

room801.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "ralphsdad",
            text: "Hey champ! Just watching the big game. I guess you came over to see my boy " +
                sc.n("ralph") + "! You'll find him upstairs playing in his room. You know you " +
                "boys should go outside and play a bit. A little kick ball is good for ya. ",
            button: [
                { chatID: -1, text: "Sure Ralph's dad. Maybe we will. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ralphsdad",
            text: sc.n("ralph") + "'s room is just around the corner. I'm sure he's been waiting " +
                "for you. ",
            button: [
                { chatID: -1, text: "Thanks. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "ralphsdad",
            text: "You're looking really firm. I love it when you come by.",
            button: [
                { chatID: 3, text: "[Linger a bit]", callback: "assgrab" },
                { chatID: -1, text: "Thanks! Just came by to see " + sc.n("ralph") + "!", callback: "ralphRoom" },
            ]
        },
        {
            chatID: 3,
            speaker: "ralphsdad",
            text: "I love watching you grow into the woman you are. ",
            button: [
                { chatID: -1, text: "You're sweet " + sc.n("ralphsdad") + ".", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "ralphsdad",
            text: "I got you some flowers that are almost as pretty as you are dear. ",
            button: [
                { chatID: 6, text: "Awww thanks", callback: "takeFlowers" },
                { chatID: 5, text: "No thanks. What would your wife say", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "ralphsdad",
            text: "Just trying to be friendly. *sheesh* ",
            button: [
                { chatID: -1, text: "sure", callback: "reset" },
            ]
        },
        {
            chatID: 6,
            speaker: "ralphsdad",
            text: "I knew you would love them. A girl as pretty as you needs pretty things. ",
            button: [
                { chatID: -1, text: "Awwww", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "ralphsdad",
            text: "Oh! hahaha. It appears my dick is out! Let me put that back. ",
            button: [
                { chatID: 8, text: "It is a nice thick juicy dick.", callback: "likeDick" },
                { chatID: -1, text: "Oh my! I have to run", callback: "ralphRoom" },
            ]
        },
        {
            chatID: 8,
            speaker: "ralphsdad",
            text: "It is. You should see it hard. Hehehe. ",
            button: [
                { chatID: -1, text: "Oh " + sc.n("ralphsdad") + "!", callback: "reset" },
            ]
        },
        {
            chatID: 9,
            speaker: "ralphsdad",
            text: "Since you liked the last bouquet so much I got you some roses. " +
                "They're more lovely to match your growing beauty. ",
            button: [
                { chatID: 10, text: "Awww thanks", callback: "takeFlowers" },
                { chatID: 5, text: "No thanks. What would your wife say", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "ralphsdad",
            text: "I'm so glad you liked them. You know red roses typically means " +
                "romantic love, or even passion, but I'm just giving these to you " +
                "as a friend to welcome you into womanhood. Since you are a very " +
                "beautiful woman. I'm so glad you accepted them and let me help welcome " +
                "you to womanhood. ",
            button: [
                { chatID: 11, text: "Thank you, they are very lovely. ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "ralphsdad",
            text: "Hahaha yes, almost as lovely as you. You know you're very beautiful. Any " +
                "man would be happy to have you as their girlfriend. Your house must be overflowing " +
                "in flowers from suitors. Such a tight little body you have would make any man " +
                "go crazy with lust. You really did become a hot little thing. ",
            button: [
                { chatID: -1, text: "*blush* Well thank you", callback: "reset" },
            ]
        },
        {
            chatID: 12,
            speaker: "ralphsdad",
            text: sc.n("ralph") + "'s room is just around the corner. I'm sure he's been waiting " +
                "for you. Unless you came to see me, then my room is right over there. " +
                "hahaha, just kidding. ",
            button: [
                { chatID: -1, text: "*blush* Thanks, I'll go see " + sc.n("ralph"), callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "ralphsdad",
            text: "I don't suppose you have a hug for your best friend's dad?",
            button: [
                { chatID: 15, text: "Oh. Sure", callback: "assgrab0" },
                { chatID: 14, text: "I don't think it's right with your wife around.", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "ralphsdad",
            text: "Pssst. It's just a friendly hug. She wouldn't mind. ",
            button: [
                { chatID: -1, text: "I'll be heading to " + sc.n("ralph") + "'s room. ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "*oof* He really is squeezing me tight... ",
            button: [
                { chatID: 16, text: "...", callback: "assgrab1" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "wait.. he just reached down and grabbed by butt! oh no. I can feel " +
                "his dick getting hard and pressing into me. It's poking me right " +
                "in my belly. This is so wrong. What would his wife say? ",
            button: [
                { chatID: 17, text: "...", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "ralphsdad",
            text: "You're so soft in all the right places. I could squeeze you forever, " +
                "but you should go see " + sc.n("ralph") + ". ",
            button: [
                { chatID: -1, text: "uuuh, yeah. I'll go see " + sc.n("ralph") + ".", callback: "reset" },
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Huh? Why is he leaning into me? ",
            button: [
                { chatID: 19, text: "...", callback: "kiss1" },
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "hmmm! Is he kissing me? And fondeling my chest. He's squeezing me so " +
                "tight I can't pull away. What if " + sc.n("ralphsmom") + " walked in. " +
                "She would totally kill me! I should pull away.. He's too strong, I can't.",
            button: [
                { chatID: 20, text: "...", callback: "kiss2" },
            ]
        },
        {
            chatID: 20,
            speaker: "ralphsdad",
            text: "I could't help myself. I just had to see if you were as into me as " +
                "I was into you. I'm so glad you didn't pull away. You have such great " +
                "lips. I knew you would. This is totally going to make my dad. ",
            button: [
                { chatID: 21, text: "Oh yes. You are such a great kisser!", callback: "reset" },
                { chatID: -1, text: "You brute! I couldn't pull away! I'm going to visit my friend!", callback: "ralphRoom" },

            ]
        },
        {
            chatID: 21,
            speaker: "ralphsdad",
            text: "Kissing your lips isn't the only thing I'm great at hehehe. You'll just " +
                "have to see some other time. ",
            button: [
                { chatID: -1, text: "OOooooo. Sounds dirty", callback: "kissgood" },
            ]
        },
        {
            chatID: 22,
            speaker: "ralphsdad",
            text: "I'm so glad you came by! I've been thinking about those lips around my dick all day. ",
            button: [
                { chatID: 23, text: "[Get down on your knees and suck his dick]", callback: "bj0" },
                { chatID: -1, text: "That's hot, could we do a three some instead? ", callback: "3some" },
                { chatID: -1, text: "Just came to visit " + sc.n("ralph"), callback: "ralphRoom" },
            ]
        },
        {
            chatID: 23,
            speaker: "ralphsdad",
            text: "Oh perfect. Love that you just get down on your knees to suck me off. You're so perfect.",
            button: [
                { chatID: 24, text: "*slurp* *suck* mmhmm *slurp*", callback: "bj1" },
            ]
        },
        {
            chatID: 24,
            speaker: "ralphsdad",
            text: "Oh shit. Feels so good. You're such a great side piece. Love I can just get a bj when ever " +
                "I need. Fuck that's good. You'll make a bad man really happy some day. ",
            button: [
                { chatID: -1, text: "*slurp* mmhhhmmm *gulp*", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};