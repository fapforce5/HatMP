//Room name
//stumpy, snail, pinata, Ilean
var room310 = {};
room310.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "door",
            "left": 581,
            "top": 518,
            "width": 160,
            "height": 307,
            "image": "310_secondfloor/door.png"
        },
        {
            "type": "btn",
            "name": "stairs",
            "left": 1176,
            "top": 371,
            "width": 107,
            "height": 573,
            "image": "314_thirdFloor/stairs.png"
        },
    ];
    var navList = [300, 314, 303, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 310);
    });
    nav.buildnav(navList);
};

room310.btnclick = function (name) {
    switch (name) {
        case "stairs":
            char.room(314);
            break;
        case "door":
            nav.kill();
            if (sc.getMissionTask("dollmaker", "*dolls", 1).startedOrComplete) {
                sc.select("icon_knock1", "310_secondfloor/icon_knock.webp", 0);
            }
            else {
                sc.select("icon_knock", "310_secondfloor/icon_knock.webp", 0);
                if (inv.has("lockpick"))
                    sc.select("icon_pick", "310_secondfloor/icon_pick.webp", 1);
            }
            break;
        case "icon_knock1":
            nav.button({
                "type": "img",
                "name": "dollmaker",
                "left": 725,
                "top": 470,
                "width": 329,
                "height": 610,
                "image": "310_secondfloor/dollmaker.png"
            }, 310);
            if (sc.getMission("dollmaker", "*dolls").success) {
                chat(33, 310);
            }
            else {
                chat(18, 310);
            }
            break;
        case "icon_knock":
            nav.button({
                "type": "img",
                "name": "dollmaker",
                "left": 725,
                "top": 470,
                "width": 329,
                "height": 610,
                "image": "310_secondfloor/dollmaker.png"
            }, 310);
            if (missy.getenvelope("dollmaker").active) {
                chat(2, 310);
            }
            else if (g.isNight())
                chat(0, 310);
            else
                chat(1, 310);
            break;
        case "icon_pick":
            nav.kill();
            lockpick.init(2, "pickwin", "picklose", 60, 310);
            break;
        case "pickwin":
            if (missy.getenvelope("dollmaker").active) {
                nav.kill();
                nav.bg("310_secondfloor/room0.webp");
                chat(6, 310);
            }
            else {
                nav.bg("310_secondfloor/room0.webp");
                chat(4, 310);
            }
            break;
        case "picklose":
            char.room(310);
            break;
        default:
            break;
    }
};

room310.chatcatch = function (callback) {
    switch (callback) {
        case "room0":
        case "room1":
        case "room4":
        case "room7":
        case "room6":
        case "room8":
        case "room9":
            nav.kill();
            nav.bg("310_secondfloor/" + callback + ".webp");
            break;
        case "room2":
        case "room3":
        case "room5":
        case "roomaway":
            zcl.displayMain(-200, 700, .4, "clothes", true);
            nav.bg("310_secondfloor/" + callback + ".webp");
            break;
        case "room2a":
            cl.c.pants = cl.c.shirt = cl.c.pj = cl.c.swimsuit = null;
            cl.c.dress = "ap";
            cl.add("dress", "ap");
            cl.display();
            zcl.displayMain(-200, 700, .4, "clothes", true);
            nav.bg("310_secondfloor/room2.webp");
            break;
        case "roombang":
            nav.kill();
            gv.mod("energy", -25);
            nav.bg("310_secondfloor/" + callback + ".webp");
            break;
        case "startmission":
            sc.show("dollmaker");
            sc.startMission("dollmaker", "*dolls");
            sc.completeMissionTask("dollmaker", "*dolls", 0);
            sc.startMissionTask("dollmaker", "*dolls", 1);
            char.addtime(30);
            char.room(310);
            break;
        case "bang":
            nav.killbutton("dollmaker");
            nav.button({
                "type": "img",
                "name": "dollmaker",
                "left": 480,
                "top": 137,
                "width": 864,
                "height": 943,
                "image": "310_secondfloor/bang.webp"
            }, 310);
            gv.mod("energy", -25);
            break;
        case "checkdoll":
            if (inv.has("dollmakerTeddy")) {
                inv.use("dollmakerTeddy");
                nav.button({
                    "type": "img",
                    "name": "dollmaker",
                    "left": 552,
                    "top": 137,
                    "width": 591,
                    "height": 943,
                    "image": "310_secondfloor/teddy.webp"
                }, 310);
                
                if (cl.c.dress === "ap") {
                    chat(25, 310);
                }
                else {
                    if (missy.getenvelope("dollmaker").active)
                        chat(22, 310);
                    else
                        chat(21, 310);
                }
            }
            else {
                nav.killbutton("dollmaker");
                nav.button({
                    "type": "img",
                    "name": "dollmaker",
                    "left": 480,
                    "top": 137,
                    "width": 864,
                    "height": 943,
                    "image": "310_secondfloor/bang.webp"
                }, 310);
                gv.mod("energy", -25);
                chat(20, 310);
            }
            break;
        case "hallwaycult":
            if (missy.getenvelope("dollmaker").hasKey) {
                chat(23, 310);
            }
            else {
                chat(24, 310);
            }
            sc.completeMissionTask("dollmaker", "*dolls", 1);
            sc.completeMission("dollmaker", "*dolls");
            missy.setenvelope("dollmaker");
            break;
        case "codetea":
            char.addtime(60);
            if (missy.getenvelope("dollmaker").hasKey) {
                chat(31, 310);
            }
            else {
                inv.addMulti("soda", 10);
                inv.addMulti("hornyGoatWeed", 10);
                chat(30, 310);
            }
            sc.completeMissionTask("dollmaker", "*dolls", 1);
            sc.completeMission("dollmaker", "*dolls");
            missy.setenvelope("dollmaker");
            break;
        case "leave":
        case "reset":
            char.room(310);
            break;
        case "kill":
            nav.kill();
            break;
        default:
            break;
    }
};

room310.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "dollmaker",
            text: "Go away. It's late",
            button: [
                { chatID: -1, text: "oh. sorry", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "dollmaker",
            text: "I don't know you. Go away and let me play with my dolls.",
            button: [
                { chatID: -1, text: "oh. sorry", callback: "reset" }
            ]
        },
        {
            chatID: 2,
            speaker: "dollmaker",
            text: "I don't know you. Go away and let me play with my dolls.",
            button: [
                { chatID: 3, text: "I actually have a question about the C.U.M. cult. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "dollmaker",
            text: "Oh! We don't talk about them. Goodbye, sir! ",
            button: [
                { chatID: 5, text: "I uhhh. ", callback: "kill" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Not expecting a steel cage... What is she up to? ",
            button: [
                { chatID: -1, text: "Leave", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "She's up to something. Let me pick her lock and see if I can find anything... ",
            button: [
                { chatID: 6, text: "[Pick her lock and see]", callback: "room0" },
                { chatID: -1, text: "Some other time", callback: "reset" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Hmmm. Let me see if I can lift or move this cage. ",
            button: [
                { chatID: 7, text: "[Push really hard on the cage]", callback: "room1" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Fuck that was loud! I wonder if she heard that. ",
            button: [
                { chatID: 8, text: "...", callback: "room2" },
            ]
        },
        {
            chatID: 8,
            speaker: "dollmaker",
            text: "Hey! I never said you could come in! Why do you want to make me angry! ",
            button: [
                { chatID: 9, text: "I uh... Sorry, I'll leave", callback: "room3" },
            ]
        },
        {
            chatID: 9,
            speaker: "dollmaker",
            text: "You aren't going anywhere " + gender.pronoun("mister") + "! ",
            button: [
                { chatID: 10, text: "[Turn around and try to leave]", callback: "room4" },
            ]
        },
        {
            chatID: 10,
            speaker: "dollmaker",
            text: "Dollies do what I say or I get very very angry! Now turn around dolly! ",
            button: [
                { chatID: 11, text: "[Turn back around]", callback: "room2" },
            ]
        },
        {
            chatID: 11,
            speaker: "dollmaker",
            text: "What does the dolly want? ",
            button: [
                { chatID: 12, text: "I was just trying to get my friend free from the cult and heard you might help", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "dollmaker",
            text: "Dolly wants something from me! Not in gross clothes! Only dolly clothes ",
            button: [
                { chatID: 13, text: "Dolly clothes? ", callback: "room5" },
            ]
        },
        {
            chatID: 13,
            speaker: "dollmaker",
            text: "Yes. Put on the dolly clothes. ",
            button: [
                { chatID: 14, text: "I guess I don't really have a choice ", callback: "room2a" },
            ]
        },
        {
            chatID: 14,
            speaker: "dollmaker",
            text: "Such a pretty dolly.",
            button: [
                { chatID: 15, text: "So will you help me?", callback: "room7" },
            ]
        },
        {
            chatID: 15,
            speaker: "dollmaker",
            text: "HHhhhmmmm. Ok! But you have to help me. I lost little Snuggle Ruffles and I don't know where. Go find Snuggle Ruffles and " +
                "maybe I help. Maybe I don't. ",
            button: [
                { chatID: 16, text: "Where is this Snuggle Ruffles?", callback: "room6" },
            ]
        },
        {
            chatID: 16,
            speaker: "dollmaker",
            text: "No more questions! ",
            button: [
                { chatID: 17, text: "Is that a gun?", callback: "roombang" },
            ]
        },
        {
            chatID: 17,
            speaker: "dollmaker",
            text: "I said no more questions! Go get my dolly! ",
            button: [
                { chatID: -1, text: "OUCH!!! That pellet really hurt!!! Ok ok, I'm going to find Snuggle Ruffles.", callback: "startmission" },
            ]
        },
        {
            chatID: 18,
            speaker: "dollmaker",
            text: "Did you bring me my little Snuggle Ruffles?",
            button: [
                { chatID: -1, text: "I did", callback: "checkdoll" },
                { chatID: 19, text: "Still looking", callback: "bang" },
            ]
        },
        {
            chatID: 19,
            speaker: "dollmaker",
            text: "Don't come back without Snuggle Ruffles!",
            button: [
                { chatID: -1, text: "OUCH!! Ok ok, I'm looking", callback: "reset" },
            ]
        },
        {
            chatID: 20,
            speaker: "dollmaker",
            text: "Liar! No you don't! Get me Snuggle Ruffles!",
            button: [
                { chatID: -1, text: "OUCH!! Ok ok, I'm looking", callback: "reset" },
            ]
        },
        {
            chatID: 21,
            speaker: "dollmaker",
            text: "Thanks! Too bad you're not wearing your party dress or I would have invited you in to play dollies. Bye bye.",
            button: [
                { chatID: -1, text: "oh. ", callback: "reset" },
            ]
        },
        {
            chatID: 22,
            speaker: "dollmaker",
            text: "Thanks! Too bad you're not wearing your party dress or I would have invited you in to play dollies. Bye bye.",
            button: [
                { chatID: -1, text: "Before you go you said you would help me with the cult.", callback: "hallwaycult" },
            ]
        },
        {
            chatID: 23,
            speaker: "dollmaker",
            text: "oh yeah! The code to the back gate is 1-2-3-4-5. Good luck! ",
            button: [
                { chatID: -1, text: "Thanks", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "dollmaker",
            text: "I don't know anything about that cult silly. I just wanted my dolly back. pssst so dumb.",
            button: [
                { chatID: -1, text: "Drat!", callback: "reset" },
            ]
        },
        {
            chatID: 25,
            speaker: "dollmaker",
            text: "I'm so happy! Come in and play dollies with me. ",
            button: [
                { chatID: 26, text: "Sure", callback: "room8" },
                { chatID: -1, text: "Some other time, but before you go can you help me with the cult.", callback: "hallwaycult" },
            ]
        },
        {
            chatID: 26,
            speaker: "dollmaker",
            text: "Good. You're going to love my tea party!",
            button: [
                { chatID: 27, text: "eeep!", callback: "room9" },
            ]
        },
        {
            chatID: 27,
            speaker: "!girl",
            text: "So, as I was saying, the ##dollmaker## here has been a real treat. She's helped us so much since we've escaped the cult. ",
            button: [
                { chatID: 28, text: "....", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "dollmaker",
            text: "Oh my. They are quite dreadful. When I met Lance here in the forest he had just escaped. It was quite a sight. Since then " +
                "with the help of Alfonse and Betty we've managed to help so many, but there's so many more to help. As I understand it you " +
                "need help against the cult. ",
            button: [
                { chatID: 29, text: "I do", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "dollmaker",
            text: "I wasn't sure you could be trusted, but since you brought back Snuggle Ruffles I thought you can't be all bad. So what do " +
                "you need? ",
            button: [
                { chatID: -1, text: "Do you have the code for the back gate?", callback: "codetea" },
            ]
        },
        {
            chatID: 30,
            speaker: "dollmaker",
            text: "I'm so sorry I don't, but here, take these to help you on your journey. I do wish you the best of luck to take down these evil " +
                "ne'er-do-wells. ",
            button: [
                { chatID: -1, text: "Thanks. I've got to run and save my friend. Don't worry, they're going down!", callback: "leave" },
            ]
        },
        {
            chatID: 31,
            speaker: "dollmaker",
            text: "I don't, Betty do you know? ",
            button: [
                { chatID: 32, text: "...", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "!girl",
            text: "Oh my. Yes. It's 1-2-3-4-5. Please, do take them down. They are the worst!  ",
            button: [
                { chatID: -1, text: "I will. I've got to run and save my friend, but don't worry, they're going down!", callback: "leave" },
            ]
        },
        {
            chatID: 33,
            speaker: "dollmaker",
            text: "You go get those evil cult people! I know you can do it!",
            button: [
                { chatID: -1, text: "Thanks", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(310, room310);
