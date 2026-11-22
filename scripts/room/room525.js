//Room name
var room525 = {};
room525.main = function () {
    if (g.gethourdecimal() > 18 || g.gethourdecimal() < 2) {
        var btnList = [
            {
                "type": "btn",
                "name": "cindy",
                "left": 991,
                "top": 249,
                "width": 318,
                "height": 501,
                "image": "525_entrance/cindy.png"
            }
        ];

        if (g.hourBetween(19, 25) && !daily.get("chef525")) {
            daily.set("chef525");
            btnList.push({
                "type": "btn",
                "name": "chef",
                "left": 354,
                "top": 295,
                "width": 213,
                "height": 461,
                "image": "525_entrance/chef.webp"
            });
        }

        $.each(btnList, function (i, v) {
            nav.button(v, 525);
        });
        let navList = [0];
        if (cl.appearance() > 0)
            navList.push(526);
        nav.buildnav([0]);
    }
    else {
        nav.bg("525_entrance/closed.jpg");
        nav.buildnav([0]);
    }
};

room525.btnclick = function (name) {
    switch (name) {
        case "cindy":
            if (cl.appearance() < 1)
                chat(0, 525);
            else
                chat(1, 525);
            break;
        case "chef":
            if (sc.getMission("chef", "*env").success) {
                nav.kill();
                nav.bg("525_entrance/chef0.webp");
                nav.button({
                    "type": "btn",
                    "name": "chef0",
                    "left": 1145,
                    "top": 96,
                    "width": 411,
                    "height": 889,
                    "image": "525_entrance/check0_d.webp"
                }, 525);
                chat(24, 525);
            }
            else if (missy.getenvelope("chef").active) {
                
                if (sc.getMission("chef", "*env").notStarted) {
                    sc.show("chef");
                    sc.startMission("chef", "*env");
                    sc.completeMissionTask("chef", "*env", 0);
                    char.addtime(45);
                    chat(5, 525);
                }
                else {
                    switch (sc.taskGetStep("chef", "*env")) {
                        case 0:
                        case 1:
                            chat(9, 525);
                            break;
                        case 2:
                            chat(13, 525);
                            break;
                    }
                }
            }
            else if (cl.isLewd())
                chat(3, 525);
            else if (cl.c.cock === 5)
                chat(6, 525);
            else
                chat(2, 525);

            break;
        default:
            break;
    }
};

room525.chatcatch = function (callback) {
    switch (callback) {
        case "shoop":
            nav.kill();
            nav.bg("525_entrance/" + callback + ".webp");
            break;
        case "chef1":
        case "chef3":
            nav.kill();
            nav.bg("525_entrance/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "chef00":
            nav.bg("525_entrance/chef0.webp");
            break;
        case "chef4":
            nav.kill();
            nav.bg("525_entrance/" + callback + "_" + (cl.c.cock === 5 ? "f" : "m") + ".webp");
            break;
        case "chef2":
            levels.gavehandjob("m", "chef");
            sc.completeMissionTask("chef", "*env", 1);
            sc.modLevel("chef", 100, 10);
            nav.bg("525_entrance/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "chef5":
            if (cl.c.cock === 5) {
                levels.fuckedinpussy(false, "m", true, "chef");
            }
            else {
                levels.anal(3, false, "m", true, "chef");
            }
            nav.bg("525_entrance/" + callback + ".webp");
            break;
        case "enter":
            char.room(526);
            break;
        case "chef0":
            nav.kill();
            nav.bg("525_entrance/chef0.webp");
            nav.button({
                "type": "btn",
                "name": "chef0",
                "left": 1145,
                "top": 96,
                "width": 411,
                "height": 889,
                "image": "525_entrance/check0_d.webp"
            }, 525);
            break;
        case "env":
            nav.kill();
            nav.bg("525_entrance/shoop.webp");
            if (missy.getenvelope("chef").hasKey) {
                chat(20, 525);
            }
            else {
                chat(21, 525);
            }
            sc.completeMissionTask("chef", "*env", 2);
            sc.completeMission("chef", "*env");
            missy.setenvelope("chef");
            break;
        case "reset":
            char.room(525);
            break;
        default:
            break;
    }
};

room525.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!cindy",
            text: "Hey cutie I can't let you in. You have to meet the dress code, and by dress code, you have to wear a dress. lol!",
            button: [
                { chatID: -1, text: "oh ok", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!cindy",
            text: "Looking great honey! Come on in!",
            button: [
                { chatID: -1, text: "Sweet!", callback: "enter" }
            ]
        },
        {
            chatID: 2,
            speaker: "chef",
            text: "Haha. I can see your dick print. ",
            button: [
                { chatID: -1, text: "oh ok", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "chef",
            text: "Now that's a slut! ",
            button: [
                { chatID: -1, text: "Thanks? ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "chef",
            text: "Hey cutie. You're looking good. ",
            button: [
                { chatID: 5, text: "oh you. ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "chef",
            text: "I have something in the alley I want to show you. Follow me. ",
            button: [
                { chatID: 7, text: "I'm sure it's fine [Follow him]", callback: "chef0" },
                { chatID: -1, text: "Sorry, busy", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "chef",
            text: "Smells like sushi... or is that your nasty cunt! Haha",
            button: [
                { chatID: -1, text: "*sigh*", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "chef",
            text: "It's my penis. I wanted to show you my penis! ",
            button: [
                { chatID: 8, text: "...", callback: "shoop" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Oh, weird. He just ran away. Oh well. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 9,
            speaker: "chef",
            text: "I have something in the alley I want to show you. Follow me. ",
            button: [
                { chatID: 10, text: "I'm sure it's fine [Follow him]", callback: "chef0" },
                { chatID: -1, text: "Sorry, busy", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "chef",
            text: "It's my penis! Hahaha. You wanna touch it? ",
            button: [
                { chatID: 11, text: "Boy, would I!", callback: "chef1" },
                { chatID: -1, text: "Sorry, busy", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "chef",
            text: "Oooo! That's really good",
            button: [
                { chatID: 12, text: "[Keep playing with his penis]", callback: "chef2" },
            ]
        },
        {
            chatID: 12,
            speaker: "chef",
            text: "oh no!",
            button: [
                { chatID: 8, text: "[Watch his cum drip down your arm]", callback: "shoop" },
            ]
        },
        {
            chatID: 13,
            speaker: "chef",
            text: "I have something in the alley I want to show you. Follow me. ",
            button: [
                { chatID: 14, text: "I'm sure it's fine [Follow him]", callback: "chef0" },
                { chatID: -1, text: "Sorry, busy", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "chef",
            text: "So what do you think? ",
            button: [
                { chatID: 15, text: "I think you have an amazing dick", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "chef",
            text: "You're the first person that didn't run away when I took out my dick. Listen. I've been a virgin my entire life. Is there " +
                "any way we could... you know... ",
            button: [
                { chatID: 16, text: "You want to lose your virginity to me? ", callback: "chef3" }
            ]
        },
        {
            chatID: 16,
            speaker: "chef",
            text: "...yeah? ",
            button: [
                { chatID: 17, text: "Yeah. Let's do this standing up. I'm totally not getting on my knees again in this dirty alley.", callback: "chef4" }
            ]
        },
        {
            chatID: 17,
            speaker: "chef",
            text: "Hehe! It's so much tighter than a mouth. Can you loosen it so I can slide in better? ",
            button: [
                { chatID: 18, text: "Honey, you gotta just push it in. ", callback: "chef5" }
            ]
        },
        {
            chatID: 18,
            speaker: "chef",
            text: "Oh god that's tight... oh no I'm cumming... ",
            button: [
                { chatID: 19, text: "already? ", callback: "chef0" }
            ]
        },
        {
            chatID: 19,
            speaker: "chef",
            text: "Oh, I uhh... ",
            button: [
                { chatID: -1, text: "Hey, before you run off again, do you know the code to the back door at the compound?", callback: "env" }
            ]
        },
        {
            chatID: 20,
            speaker: "chef",
            text: "It's 1-2-3-4-5! ",
            button: [
                { chatID: 22, text: "...", callback: "chef00" }
            ]
        },
        {
            chatID: 21,
            speaker: "chef",
            text: "I have no idea! ",
            button: [
                { chatID: 23, text: "...", callback: "chef00" }
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Sweet! I have the code. Now to go tell ##p## at ##missy##'s!",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "I guess he's just going to cum in a " + gender.pronoun("girl") + " and run. How rude. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 24,
            speaker: "chef",
            text: "You want to do the sex again?",
            button: [
                { chatID: 25, text: "I sure do!", callback: "chef4" },
                { chatID: -1, text: "Maybe next time", callback: "reset" }
            ]
        },
        {
            chatID: 25,
            speaker: "chef",
            text: "I'll just slide in here",
            button: [
                { chatID: 26, text: "oh yeah", callback: "chef5" }
            ]
        },
        {
            chatID: 26,
            speaker: "chef",
            text: "oh I'm cumming!",
            button: [
                { chatID: 27, text: "You just put it in", callback: "shoop" }
            ]
        },
        {
            chatID: 27,
            speaker: "thinking",
            text: "He could at least say thank you. Damn.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(525, room525);
