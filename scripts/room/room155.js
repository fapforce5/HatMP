//Room name
var room155 = {};
room155.main = function () {
    sc.select("icon_maid", "155_wander/icon_maid.webp", 0);
    sc.select("icon_servent", "155_wander/icon_servent.webp", 1);
    sc.select("icon_kitchen", "155_wander/icon_kitchen.webp", 2);
    sc.select("icon_basement", "155_wander/icon_basement.webp", 3);
    nav.buildnav([150]);
};

room155.btnclick = function (name) {
    switch (name) {
        case "icon_maid":
            char.room(150);
            break;
        case "icon_servent":
            nav.kill();
            switch (sc.taskGetStep("bitch", "bitch")) {
                case 2:
                    sc.completeMissionTask("bitch", "bitch", 2); 
                    nav.bg("155_wander/servent0.webp");
                    chat(12, 155);
                    break;
                case 3:
                    sc.completeMissionTask("bitch", "bitch", 3);
                    nav.bg("155_wander/servent0.webp");
                    chat(13, 155);
                    break;
                //case 4:

                //    break;
                default:
                    nav.bg("155_wander/servent.webp");
                    nav.button({
                        "type": "btn",
                        "name": "servent_diary",
                        "left": 1708,
                        "top": 669,
                        "width": 143,
                        "height": 96,
                        "image": "155_wander/diary.webp"
                    }, 155);
                    nav.buildnav([155], true);
                    break;
            }
            break;
        case "servent_diary":
            nav.kill();
            nav.bg("155_wander/diaryopen.webp");
            nav.close("icon_servent");
            break;
        case "icon_kitchen":
            nav.kill();
            if (sc.taskGetStep("bitch", "bitch") === 0) {
                nav.bg("155_wander/kitchen1.webp");
                chat(0, 155);
            }
            else {
                if (daily.get("chef155")) {
                    nav.bg("155_wander/kitchen1.webp");
                    chat(5, 155);
                }
                else {
                    daily.set("chef155");
                    switch (sc.getLevel("chef")) {
                        case 0:
                        case 1:
                            sc.show("chef");
                            nav.bg("155_wander/kitchen1.webp");
                            chat(2, 155);
                            break;
                        case 2:
                        case 3:
                            sc.show("chef");
                            nav.bg("155_wander/kitchen1.webp");
                            chat(6, 155);
                            break;
                        case 4:
                        case 5:
                            sc.show("chef");
                            nav.bg("155_wander/kitchen1.webp");
                            chat(6, 155);
                            break;
                        case 6:
                        case 7:
                            sc.show("chef");
                            nav.bg("155_wander/kitchen1.webp");
                            chat(7, 155);
                            break;
                        default:
                            sc.show("chef");
                            nav.bg("155_wander/kitchen2.webp");
                            chat(8, 155);
                            break;
                    }
                }
            }
            break;
        case "icon_basement":
            nav.kill();
            if (sc.taskGetStep("bitch", "bitch") === 0) {
                sc.startMission("bitch", "bitch");
                sc.completeMissionTask("bitch", "bitch", 0);
                nav.bg("155_wander/dung0.webp");
                sc.show("bitch");
                chat(1, 155);
            }
            else {
                nav.bg("155_wander/dung.webp");
            }
            break;
        default:
            break;
    }
};

room155.chatcatch = function (callback) {
    switch (callback) {
        case "servent1":
        case "servent3":
        case "servent4":
            nav.bg("155_wander/" + callback + ".webp");
            break;
        case "servent2":
            cl.nude();
            nav.bg("155_wander/" + callback + ".webp");
            break;
        case "servent5":
            char.settime(20, 5);
            break;
        case "reset":
            char.room(155);
            break;
        case "end":
            daily.set("jonesCleanEnd");
            sc.modLevel("jones", 40, 1);
            var jonesroom = gv.get("jonesroom");
            jonesroom++;
            if (jonesroom > 154)
                jonesroom = 152;
            gv.set("jonesroom", jonesroom);
            gv.mod("jonestotal", 1);
            char.room(0);
            break;
        case "chefbj0":
            nav.kill();
            nav.bg("155_wander/kitchen_bg.webp");
            zcl.bjpov(0, 600, .6, "", false);
            break;
        case "chefbj1":
            zcl.bjpov(0, 600, .6, "closed", false);
            break;
        case "chefbj2":
            levels.oral(3, "m", "chef", true);
            char.addtime(15);
            zcl.bjpov(0, 600, .6, "cumswallow", false);
            break;
        case "chef100":
            sc.modLevel("chef", 200, 10); 
            break;
        case "badEnd":
            char.addtime(30);
            sc.completeMission("jones", "invite", false);
            sc.completeMission("jones", "fail");
            sc.completeMission("bitch", "bitch", false); 
            char.room(0);
            break;
        case "servent7":
            g.pass = "sushi_154";
            char.room(154);
            break;
        default:
            break;
    }
};

room155.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "chef",
            text: "Who are you? Get the fuck outta my kitchen! ",
            button: [
                { chatID: -1, text: "oops", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Oh! That explains why she wasn't there. He's really thrashed her good. By the looks " +
                "of those scars on her back this isn't the first time. I'll leave them to it and ask " +
                "her about it tomorrow. ",
            button: [
                { chatID: -1, text: "...", callback: "end" }
            ]
        },
        {
            chatID: 2,
            speaker: "chef",
            text: "I just heard we gots ourselves a new maid. You know you're really hot. ",
            button: [
                { chatID: 4, text: "Aww thank you!", callback: "chef100" },
                { chatID: 3, text: "Yeah, and you're fat and ugly!", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "chef",
            text: "Bitch",
            button: [
                { chatID: -1, text: "Asshole", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "chef",
            text: "You're so sweet. Gotta get back to work though. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 5,
            speaker: "chef",
            text: "Sorry tits, gotta work right now.",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 6,
            speaker: "chef",
            text: "You know you look really hot in that dress. It would look better on the floor! " +
                "Haha! ",
            button: [
                { chatID: 4, text: "Haha yeah!", callback: "chef100" },
                { chatID: 3, text: "What? That's stupid. ", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "chef",
            text: "If you keep poking around in here people will think I'm feeding you my sausage. ",
            button: [
                { chatID: 4, text: "I would love to eat your sausage! ", callback: "chef100" },
                { chatID: 3, text: "What? That's stupid. ", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "chef",
            text: "Haha! Caught you looking at my sausage! You know you want a lick. Go on, give " +
                "it a taste. ",
            button: [
                { chatID: 9, text: "*shrug* Why not", callback: "chefbj0" },
                { chatID: 3, text: "What? That's stupid. ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "chef",
            text: "Fuck yeah. Love the maids around here! ",
            button: [
                { chatID: 10, text: "Suck on his penis.", callback: "chefbj1" },
            ]
        },
        {
            chatID: 10,
            speaker: "chef",
            text: "O yeah! Get ready for my special gravy! ",
            button: [
                { chatID: 11, text: "*gluck* *gluck*", callback: "chefbj2" },
            ]
        },
        {
            chatID: 11,
            speaker: "chef",
            text: "That's my special recipe. Now go clean up. I've got work to do. ",
            button: [
                { chatID: -1, text: "*nod like a good " + gender.pronoun("girl") + "*", callback: "reset" },
            ]
        },
        {
            chatID: 12,
            speaker: "bitch",
            text: "What the fuck are you doing in my room! You dumb bitch, this isn't a room you're " +
                "supposed to clean! Get out! Never come back in my room again or I'm going to " +
                "make you pay! ",
            button: [
                { chatID: -1, text: "*gulp* Sorry. I got lost. I'll never come back. ", callback: "reset" },
            ]
        },
        {
            chatID: 13,
            speaker: "bitch",
            text: "I told you to never come in here! " + sc.n("chef") + "!! " + sc.n("chef") + "!! Get " +
                "in here! I need your help!! ",
            button: [
                { chatID: 14, text: "What? ", callback: "servent1" },
            ]
        },
        {
            chatID: 14,
            speaker: "bitch",
            text: "I know you wanted to do a roast for tonight's gathering, but I think it's better " +
                "we do the sushi spread. This bitch here wants to poke around my room. We'll see how " +
                gender.pronoun("she") + " like being poked by rude old men instead! ",
            button: [
                { chatID: 15, text: "huh? ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "chef",
            text: "I'll call my buddy to make the dinner. I need you to wash her; get that stink off her " +
                "body. ",
            button: [
                { chatID: 16, text: "?", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "bitch",
            text: "Gladly. Come with me idiot! ",
            button: [
                { chatID: 17, text: "Follow her.", callback: "servent2" },
                { chatID: -1, text: "Yelp! [Run away!!]", callback: "badEnd" },
            ]
        },
        {
            chatID: 17,
            speaker: "bitch",
            text: "Stop whining! I only put it half hot. I've taken way worse than this you big baby! ",
            button: [
                { chatID: 18, text: "ow ow owie owie ow", callback: "servent3" },
            ]
        },
        {
            chatID: 18,
            speaker: "bitch",
            text: "Now just wait right there. I'll come back down when everything's ready. ",
            button: [
                { chatID: 19, text: "What?", callback: "servent4" },
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "...hello? ",
            button: [
                { chatID: 20, text: "...", callback: "servent5" },
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "It's been hours and I'm so stiff. Sorry for going into your room. Please...",
            button: [
                { chatID: 21, text: "...", callback: "servent6" },
            ]
        },
        {
            chatID: 21,
            speaker: "bitch",
            text: "It's time. When we get up there I'm going to put you in place. The most important thing " +
                "is once you're set don't move a muscle. No matter what happens, you just stay still unless " +
                sc.n("jones") + " tells you otherwise. Got it? ",
            button: [
                { chatID: 20, text: "*meekly* Got it. ", callback: "servent7" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(155, room155);
