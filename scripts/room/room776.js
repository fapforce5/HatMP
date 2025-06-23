//Room name

var room776 = {};
room776.main = function () {
    if (!g.isNight()) {
        if (sc.getMissionTask("priest", "confession", 13).complete) {
            nav.button({
                "type": "btn",
                "name": "fatnun",
                "left": 1131,
                "top": 64,
                "width": 502,
                "height": 1016,
                "image": "776_church/fatnun.webp"
            }, 776);
            
        }
        else {
            if (!daily.get("nun")) {
                if (!sc.getSecret("nun").secretOut) {
                    if (cl.appearance() > 1) {
                        sc.modSecret("nun", 100);
                    }
                }
                nav.button({
                    "type": "btn",
                    "name": "nun",
                    "left": 913,
                    "top": 27,
                    "width": 940,
                    "height": 1053,
                    "image": "776_church/nun.webp"
                }, 776);
                if (cl.c.chastity === null) {
                    nav.button({
                        "type": "grab",
                        "name": "nuntits",
                        "left": 1324,
                        "top": 417,
                        "width": 204,
                        "height": 104,
                        "image": "776_church/nuntits.webp"
                    }, 776);
                }
            }
        }
    }
    sc.select("pray", "776_church/pray.webp", 0);
    nav.buildnav([0]);
};

room776.btnclick = function (name) {
    switch (name) {
        case "pray":
            nav.kill();
            chat(0, 776);
            break;
        case "fatnun":
            if (cl.stinky())
                chat(32, 776);
            else
                chat(31, 776);
            break;
        case "nun":
            chat(11, 776);
            break;
        case "nuntits":
            daily.set("nun");

            if (cl.stinky()) {
                chat(29, 776);
                return;
            }
            if (sc.getSecret("nun").secretOut) {
                chat(30, 776);
                return;
            }
            switch (sc.taskGetStep("nun", "sin")) {
                case -1:
                case 0:
                    sc.show("nun");
                    sc.startMission("nun", "sin");
                    sc.completeMissionTask("nun", "sin", 0);
                    nav.modbutton("nun", "776_church/nun1.webp", null, null);
                    nav.killbutton("nuntits");
                    chat(12, 776);
                    break;
                case 1:
                    nav.modbutton("nun", "776_church/nun1.webp", null, null);
                    nav.killbutton("nuntits");
                    chat(13, 776);
                    break;
                default:
                    nav.modbutton("nun", "776_church/nun1.webp", null, null);
                    nav.killbutton("nuntits");
                    chat(24, 776);
                    break;
            }
            break;
        default:
            break;
    }
};

room776.chatcatch = function (callback) {
    switch (callback) {
        case "nun_0":
        case "nun_1":
        case "nun_2":
        case "nun_3":
        case "nun_4":
        case "nun_5":
            nav.killall();
            nav.bg("776_church/" + callback + ".webp");
            break;
        case "confess-1":
            nav.bg("776_church/confess.webp");
            sc.completeMissionTask("nun", "sin", 1);
            sc.startMissionTask("priest", "confession", 13);
            levels.fuckpussy("nun");
            break;
        case "reset":
            char.room(776);
            break;
        case "popular":
            if (daily.get("pray_popular"))
                chat(2, 776);
            else {
                daily.set("pray_popular");
                levels.mod("fame", 15);
                chat(3, 776);
            }
            break;
        case "charaisma":
            if (daily.get("pray_charaisma"))
                chat(2, 776);
            else {
                daily.set("pray_charaisma");
                levels.mod("charisma", 15);
                chat(3, 776);
            }
            break;
        case "pi":
            if (levels.get("pi").l < 1) {
                chat(7, 776);
            }
            if (!inv.has("lockpick")) {
                chat(6, 776);
            }
            else if (daily.get("pray_pi"))
                chat(2, 776);
            else {
                daily.set("pray_pi");
                levels.modLevel("pi", -1);
                chat(3, 776);
            }
            break;
        case "strength":
            if (levels.get("strength").l < 1) {
                chat(9, 776);
            }
            if (sc.getMission("g", "secret").notStarted) {
                chat(10, 776);
            }
            else if (daily.get("pray_strength"))
                chat(2, 776);
            else {
                daily.set("pray_strength");
                levels.modLevel("strength", -1);
                chat(3, 776);
            }
            break;
        case "nunComplete":
            if (sc.getMission("nun", "sin").inProgress) {
                sc.completeMissionTask("nun", "sin", 2);
                sc.completeMission("nun", "sin");
            }
            levels.fuckpussy("nun");
            char.room(776);
            break;
        case "killnun":
            nav.killbutton("nun");
            break;
        default:
            break;
    }
};

room776.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Let's see if this praying thing really works",
            button: [
                { chatID: 5, text: "Be a dumb bimbo", callback: "" },
                { chatID: 8, text: "Be a weak bimbo", callback: "" },
                { chatID: 4, text: "Be a charismatic bimbo", callback: "" },
                { chatID: 1, text: "Be a popular bimbo", callback: "" },
                { chatID: -1, text: "Stop praying", callback: "reset" },
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Please please please make every one know a cock hungry slut " +
                "I am! I want to be the most famous slut in the city!",
            button: [
                { chatID: -1, text: "...", callback: "popular" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Drat! I don't think that worked. Maybe I'm praying too much. ",
            button: [
                { chatID: 0, text: "...", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I don't know why, but I feel it worked!",
            button: [
                { chatID: 0, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Please please please make me be a more charismatic and less " +
                "awkard around people so I can get more dates!",
            button: [
                { chatID: -1, text: "...", callback: "charaisma" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Please please please make me a dumb bimbo! I don't want to be " +
                "smart, I just want to turn my brain off and be a mindless fuck doll! ",
            button: [
                { chatID: -1, text: "...", callback: "pi" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Drat! I don't think that worked. ",
            button: [
                { chatID: 0, text: "[Need to unlock lock pick event with Missy first]", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Hehehe! I'm already a brain dead bimbo! I can't get any dumber! ",
            button: [
                { chatID: 0, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Please please please make me a weak bimbo slut! If anyone wants to " +
                "force their dick into me, I don't want to be able to fight back no matter " +
                "how much I don't want to get fucked!",
            button: [
                { chatID: -1, text: "...", callback: "strength" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "I'm already a weak bimbo slut! I couldn't fight off a fly if it " +
                "wanted to bend me over and fuck my ass!",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Drat! I don't think that worked. ",
            button: [
                { chatID: 0, text: "[Need to unlock back gym first]", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "nun",
            text: "Welcome. Why don't you find a to pray and find holiness. ",
            button: [
                { chatID: -1, text: "I will", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "nun",
            text: "Oh my! Ohhhh. oh my. oh. Uhhh. wow. I've never been touched there " +
                "before. I uh... I don't know. You shouldn't. You are cute.. I mean " +
                "ummm. oh my. I need to pray.",
            button: [
                { chatID: -1, text: "hehehe", callback: "killnun" },
            ]
        },
        {
            chatID: 13,
            speaker: "nun",
            text: "Oh! I'm so dirty! dirty dirty dirty. I must go pray!",
            button: [
                { chatID: 14, text: "hehe", callback: "killnun" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "That was really rude. I should go apologize for grabbing her " +
                "tits twice now. I can really be a horny ass sometimes. I'm pretty " +
                "sure she went in the confessional.",
            button: [
                { chatID: 15, text: "I should go apologize. ", callback: "nun_0" },
                { chatID: -1, text: "I molested her enough for one day ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "I'm sorry, I just wanted to say....",
            button: [
                { chatID: 16, text: "....", callback: "nun_1" },
            ]
        },
        {
            chatID: 16,
            speaker: "nun",
            text: "...",
            button: [
                { chatID: 17, text: "....", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "...",
            button: [
                { chatID: 18, text: "....", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "nun",
            text: "...",
            button: [
                { chatID: 19, text: "[Take your dick out]", callback: "nun_2" },
                { chatID: -1, text: "[Respectfully leave]", callback: "reset" },
            ]
        },
        {
            chatID: 19,
            speaker: "nun",
            text: "*squeel* I shouldn't... I-I-I took a vow of celibacy... oooOOoooo. " +
                "Of fiddle sticks! I need it so bad! You have no idea! Please keep it " +
                "quiet and don't tell ANYONE. I can't get found out",
            button: [
                { chatID: 20, text: "[Fuck that virgin pussy]", callback: "nun_3" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "She's so enthusiastic for a virgin. Just amazing! A little awkward, " +
                "but damn it's wet and tight. Think of something so I don't cum... My " +
                "grandma naked.. gross.. why am I thinking of my naked grandma.. fuck it.. I'm just going to " +
                "cum!",
            button: [
                { chatID: 21, text: "[Fill her virgin pussy with cum]", callback: "nun_4" },
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "I can feel your penis filling my womb! This is so much better than " +
                "using my fingers! I love your penis so much!",
            button: [
                { chatID: 22, text: "...", callback: "nun_5" },
            ]
        },
        {
            chatID: 22,
            speaker: "nun",
            text: "I really really have to go. I'm going to be in so much trouble if anyone " +
                "knew. I had a really lovely time, please don't be mad that I used you, just " +
                "don't tell anyone. Sorry. Bye",
            button: [
                { chatID: 23, text: "bye", callback: "confess-1" },
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "THAT WAS SO HOT! I just took a nun's virginity in a confession " +
                "booth! I'm going to go to hell, but at least the devil will give me " +
                "a high five! ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "nun",
            text: "We can't keep doing this. You need to go. ",
            button: [
                { chatID: -1, text: "You're right. Sorry for bothering you", callback: "" },
                { chatID: 25, text: "If you don't let me fuck you, I'm going to tell your secret", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "nun",
            text: "You wouldn't.",
            button: [
                { chatID: 26, text: "I would. Now get in the confession booth and ride my dick.", callback: "nun_3" },
            ]
        },
        {
            chatID: 26,
            speaker: "nun",
            text: "Please forgive me for my sins, please forgive me for my sins",
            button: [
                { chatID: 27, text: "...", callback: "nun_4" },
            ]
        },
        {
            chatID: 27,
            speaker: "nun",
            text: "Please forgive me, but it feels soooo good. ",
            button: [
                { chatID: 28, text: "...", callback: "nun_5" },
            ]
        },
        {
            chatID: 28,
            speaker: "nun",
            text: "Oh no! I did it again. I'm such a sinful nun! ",
            button: [
                { chatID: -1, text: "...", callback: "nunComplete" },
            ]
        },
        {
            chatID: 29,
            speaker: "nun",
            text: "Oh my. You're really stinky. I think I just threw up in my mouth a " +
                "little. I've got to go rinse out. ",
            button: [
                { chatID: -1, text: "Oh. I probably should shower. ", callback: "reset" },
            ]
        },
        {
            chatID: 30,
            speaker: "nun",
            text: "Hehehe. I guess since we're both girls that's ok. But you really " +
                "shouldn't grab someone's breasts. I'm going to pray for your soul. ",
            button: [
                { chatID: -1, text: "Oh sorry. ", callback: "reset" },
            ]
        },
        {
            chatID: 31,
            speaker: "!fatnun",
            text: "Like all God's creatures you're free to sit and pray. You, however, " +
                "should pray extra hard since your sins are greater than most. ",
            button: [
                { chatID: -1, text: "Thanks?", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "!fatnun",
            text: "You stink, just like your sinful actions. ",
            button: [
                { chatID: -1, text: "rude much?", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};