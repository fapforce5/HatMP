//Fight Room
var room556 = {};
room556.main = function () {
    nav.bg("556_spar/bg1.jpg");
    if (sc.getMission("g", "spar").notStarted) {
        sc.startMission("g", "spar");
        sc.completeMissionTask("g", "spar", 0, true);
        daily.set("g");
        chat(0, 556);
    }
};

room556.btnclick = function (name) {
    switch (name) {
        case "exit":
            char.room(551);
            break;
        case "fightm":
            daily.set("g");
            nav.killbutton("fightm");
            nav.killbutton("fightg");
            nav.killbutton("exit");
            var thisEnergy = gv.get("energy");
            if (thisEnergy < 10) {
                chat(9, 556);
            }
            else {
                nav.bg("556_spar/bg3.jpg");
                quickFight.init(5, "Maggie", "maggieWin", "maggieLose", "exit", 556);
                if (thisEnergy < 50) {
                    chat(8, 556)
                }
                else if (levels.get("strength").l < 5) {
                    chat(10, 556);
                }
            }
            break;
        case "maggieWin":
            nav.bg("556_spar/bg3.jpg");
            if (sc.getMissionTask("g", "spar", 1).complete) {
                chat(12, 556);
            }
            else {
                sc.completeMissionTask("g", "spar", 1, true);
                sc.startMission("g", "secret");
                chat(13, 556);
            }
            break;
        case "maggieLose":
            chat(11, 556);
            break;
        case "fightg":
            nav.killbutton("fightm");
            nav.killbutton("fightg");
            nav.killbutton("exit");
            var thisEnergyg = gv.get("energy");
            if (thisEnergyg < 10) {
                chat(9, 50);
            }
            else {
                nav.bg("556_spar/bg1.jpg");
                quickFight.init(50, sc.n("g"), "gwin", "glose", "exit", 556);
                if (thisEnergyg < 50) {
                    chat(8, 556)
                }
                else if (levels.get("strength").l < 50) {
                    chat(14, 556);
                }
            }
            break;
        case "gwin":
            if (sc.getMission("g", "spar").inProgress) {
                sc.completeMission("g", "spar", true);
                sc.completeMissionTask("g", "spar", 2, true);
                if (sc.getMission("g", "secret").notStarted)
                    sc.startMission("g", "secret");

            }
            nav.bg("556_spar/loss0.jpg");
            chat(16, 556);
            break;
        case "glose":
            nav.killall();
            nav.bg("556_spar/punch.jpg");
            chat(15, 556);
            break;
        case "lossNext":
            if (g.internal < 7) {
                var appendString = gender.isGirl() ? "_g" : "_b";
                nav.bg("556_spar/loss" + g.internal + appendString + ".jpg");
                if (g.internal === 6) {
                    levels.anal(3, true, "f");
                    levels.mod("fame", 30, 999);
                }
            }
            else {
                nav.killbutton("lossNext");
                chat(20, 556);
                nav.bg("556_spar/loss7.jpg");
            }
            g.internal++;
            break;
        default:

            break;
    }
};

room556.chatcatch = function (callback) {
    var i;

    switch (callback) {
        case "lesson1":
        case "lesson2":
        case "lesson3":
        case "lesson4":
        case "lesson5":
        case "loss1":
            nav.killall();
            nav.bg("556_spar/" + callback + ".jpg");
            break;
        case "loss2":
        case "loss3":
            var appendString = gender.isGirl() ? "_g" : "_b";
            nav.bg("556_spar/" + callback + appendString + ".jpg");
            break;
        case "loss4":
            var appendString4 = gender.isGirl() ? "_g" : "_b";
            nav.bg("556_spar/" + callback + appendString4 + ".jpg");
            g.internal = 5;
            nav.next("lossNext");
            break;
        case "drawEvent":
            nav.bg("556_spar/bg2.jpg");
            sc.select("fightm", "556_spar/spar1.png", 0);
            sc.select("fightg", "556_spar/spar2.png", 1);
            sc.selectCancel("exit", 2);
            break;
        case "leave":
            char.room(551);
            break;
        default:
            break;
    }
};

room556.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "g",
            text: "Strength is meaningless unless you know how to fight. Are you ready for your " +
                "first lesson? ",
            button: [
                { chatID: 1, text: "Ready", callback: "lesson1" },
                { chatID: -1, text: "No. Skip it. ", callback: "drawEvent" }
            ]
        },
        {
            chatID: 1,
            speaker: "g",
            text: "So when you fight you'll be presented with some stats and choices. ",
            button: [
                { chatID: 2, text: "[Next]", callback: "lesson2" }
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "The top section is you. Becuase you're a little wimp you'll find you're get " +
                "you ass kicked a lot. Continue to get stronger and you'll win more fights. Also if " +
                "you're low on energy you won't fight as well. ",
            button: [
                { chatID: 3, text: "[Next]", callback: "lesson3" }
            ]
        },
        {
            chatID: 3,
            speaker: "g",
            text: "The bottom section is who you're fighting. In this case it's me. You see I'm way " +
                "stronger than your puny ass. You don't stand a chance with me. ",
            button: [
                { chatID: 4, text: "[Next]", callback: "lesson4" }
            ]
        },
        {
            chatID: 4,
            speaker: "g",
            text: "Finally at the very bottom is your chance to win. You winning this fight is quite " +
                "impossible. But we'll fight anyway. ",
            button: [
                { chatID: 5, text: "[Next]", callback: "lesson5" }
            ]
        },
        {
            chatID: 5,
            speaker: "g",
            text: "So You rolled a 17 plus your stregth of 1. I rolled a 20 plus my strength of 50. " +
                "So my 70 beats your 18. By a lot. ",
            button: [
                { chatID: 6, text: "[Next]", callback: "bg1" }
            ]
        },
        {
            chatID: 6,
            speaker: "g",
            text: "Remember. The key to winning is strength and full energy. There are some dirty " +
                "tricks to fighting, but I don't train that here. You do gain strength every time you " +
                "fight, you just gain more if you win. ",
            button: [
                { chatID: 7, text: "ok. ", callback: "bg2" }
            ]
        },
        {
            chatID: 7,
            speaker: "g",
            text: "And that's all I have to train you on. You can spar with Maggie here. If you can prove " +
                "you're not a little bitch and beat her I'll let you so some... special strength training. ",
            button: [
                { chatID: -1, text: "Sweet!", callback: "drawEvent" },
            ]
        },
        {
            chatID: 8,
            speaker: "g",
            text: "Your energy is pretty low. You'll fight much better if your energy is higher. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "g",
            text: "Your energy is too low. Go get some rest before you try sparring. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 10,
            speaker: "g",
            text: "Maggie is still stronger than you, but you may just get lucky. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "g",
            text: "You may have lost, but you've gotten stronger. Keep working on it and don't " +
                "be a bitch. ",
            button: [
                { chatID: -1, text: "...", callback: "drawEvent" },
            ]
        },
        {
            chatID: 12,
            speaker: "g",
            text: "Now that you've turned Maggie into your punching bag, you should try something " +
                "more challenging, like me. ",
            button: [
                { chatID: -1, text: "...", callback: "drawEvent" },
            ]
        },
        {
            chatID: 13,
            speaker: "g",
            text: "Way to go! I guess you've proven you're not a little bitch. Come see me in the " +
                "gym. I'll show you some real strength training at our secret training facility. ",
            button: [
                { chatID: -1, text: "Sweet! [Visit her in the gym tomorrow]", callback: "leave" },
            ]
        },
        {
            chatID: 14,
            speaker: "g",
            text: "I'm so much stronger than you. You should have trained more before trying " +
                "to fight me. I'm going to beat your ass!",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "g",
            text: "I told you I was going to kick your ass. Now go hit the showers bitch. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 16,
            speaker: "g",
            text: "AAAAArg!!!!! Fuck! I lost to a wimp like you! Fuck!",
            button: [
                { chatID: 17, text: "...", callback: "loss1" },
            ]
        },
        {
            chatID: 17,
            speaker: "g",
            text: "I'll show you who the wimp here is! Get over here! ",
            button: [
                { chatID: 18, text: "huh?", callback: "loss2" },
            ]
        },
        {
            chatID: 18,
            speaker: "g",
            text: "Maggie! Fetch my strapon! I'm going to show everyone here who the bitch is! ",
            button: [
                { chatID: 19, text: "What? I thought I won", callback: "loss3" },
            ]
        },
        {
            chatID: 19,
            speaker: "g",
            text: "Get ready, I'm going to destroy your tender little ass! ",
            button: [
                { chatID: -1, text: "oh no!", callback: "loss4" },
            ]
        },
        {
            chatID: 20,
            speaker: "g",
            text: "You will always be my little bitch. Now go hit the showers. " +
                "Maggie, clean that cum stain off the mat. ",
            button: [
                { chatID: -1, text: "Mmmmmm", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
