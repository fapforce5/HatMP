//Room name
var room750 = {};
room750.main = function () {
    if (g.isNight()) {
        nav.button({
            "type": "btn",
            "name": "doc",
            "left": 1176,
            "top": 295,
            "width": 303,
            "height": 710,
            "image": "750_homeless/doctor.png"
        }, 750);
    }
    if (sc.getMissionTask("elijah", "elijah", 2).complete) {
        nav.button({
            "type": "btn",
            "name": "elitent",
            "left": 841,
            "top": 453,
            "width": 112,
            "height": 76,
            "image": "750_homeless/eli_day.webp",
            "night": "750_homeless/eli_night.webp"
        }, 750);
    }
    nav.button({
        "type": "btn",
        "name": "daletent",
        "left": 1490,
        "top": 459,
        "width": 306,
        "height": 425,
        "image": "750_homeless/dale.png",
        "night": "750_homeless/daleNight.png"
    }, 750);
    nav.button({
        "type": "btn",
        "name": "whoretent",
        "left": 969,
        "top": 443,
        "width": 234,
        "height": 139,
        "image": "750_homeless/whore.png",
        "night": "750_homeless/whoreNight.png"
    }, 750);
    nav.button({
        "type": "btn",
        "name": "crystal",
        "left": 431,
        "top": 409,
        "width": 326,
        "height": 250,
        "image": "750_homeless/crystal.png",
        "night": "750_homeless/crystalnight.png"
    }, 750);
    var navList = [751, 752, 0];
    nav.buildnav(navList);
    //if (g.isNight()) {
    //    fame.event();
    //}
};

room750.btnclick = function (name) {
    switch (name) {
        case "doc":
            if (!daily.get("doc")) {
                nav.killbutton("doc");
                nav.button({
                    "type": "btn",
                    "name": "doc",
                    "left": 950,
                    "top": 86,
                    "width": 645,
                    "height": 994,
                    "image": "750_homeless/doc1.png"
                }, 750);
                switch (sc.taskGetStep("doc", "doc")) {
                    case -1:
                    case 0:
                        sc.startMission("doc", "doc");
                        sc.completeMissionTask("doc", "doc", 0);
                        chat(0, 750);
                        break;
                    case 1:
                        sc.completeMissionTask("doc", "doc", 1);
                        chat(6, 750);
                        break;
                    default:
                        chat(5, 750);
                }
                //else if (sc.getEvent("landlord", -4)) 
                //    chat(10, 750);
            }
            else
                chat(5, 750);
            break;
        case "crystal":
            char.room(751);
            break;
        case "daletent":
            nav.kill();
            nav.bg("750_homeless/dalebg.webp");
            nav.button({
                "type": "btn",
                "name": "dale",
                "left": 641,
                "top": 382,
                "width": 480,
                "height": 611,
                "image": "750_homeless/dale.webp",
            }, 750);
            nav.buildnav([750, 0], true);
            break;
        case "dale":
            if (missy.activecase().caseId === 20 && !inv.get("sewer").entry) {
                chat(31, 750);
            }
            else if (sc.getMission("dale", "dale").notStarted) {
                sc.show("dale");
                sc.startMission("dale", "dale");
                sc.completeMissionTask("dale", "dale");
                chat(17, 750);
            }
            else {
                chat(27, 750);
            }
            break;
        case "whoretent":
            char.room(752);
            break;
        case "elitent":
            nav.kill();
            var eliApp = cl.appearance();
            if (sc.getMission("elijah", "betray").startedOrComplete) {
                chat(66, 750);
            }
            else if (eliApp < 2 || eliApp === 5) {
                nav.bg("750_homeless/elibg.webp");
                nav.button({
                    "type": "btn",
                    "name": "eli",
                    "left": 1093,
                    "top": 0,
                    "width": 470,
                    "height": 1080,
                    "image": "750_homeless/eli.webp",
                }, 750);
                chat(62, 750);
            }
            else if (daily.get("elijah")) {
                nav.bg("750_homeless/elibg.webp");
                chat(40, 750);
            }
            else {
                daily.set("elijah");
                if (sc.taskGetStep("elijah", "elijah") === 2) {
                    sc.completeMissionTask("elijah", "elijah", 2);
                }
                nav.bg("750_homeless/elibg.webp");
                nav.button({
                    "type": "btn",
                    "name": "eli",
                    "left": 1093,
                    "top": 0,
                    "width": 470,
                    "height": 1080,
                    "image": "750_homeless/eli.webp",
                }, 750);
            }
            break;
        case "eli":
            switch (sc.taskGetStep("elijah", "elijah")) {
                case 3:
                    sc.completeMissionTask("elijah", "elijah", 3);
                    chat(35, 750);
                    break;
                case 4:
                    chat(43, 750);
                    break;
                case 5:
                    chat(44, 750);
                    break;
                case 6:
                    if (cl.c.necklace === "eli") {
                        chat(59, 750);
                    }
                    else {
                        chat(58, 750);
                    }
                    break;
                case 7:
                    sc.completeMissionTask("elijah", "elijah", 7);
                    chat(67, 750);
                    break;
                case 8:
                    if (cl.c.necklace === "eli") {
                        chat(59, 750);
                    }
                    else {
                        chat(58, 750);
                    } 
                    break;
            }
            break;
        case "elilay":
            room750.btnclick("killelibutton");
            char.addtime(20);
            nav.bg("750_homeless/eli2.webp"); 
            sc.select("elitv", "316_livingroom/icon_tv.png", -2);
            sc.select("elisit", "750_homeless/icon_sit.webp", 0);
            g.internal.pos = "lay";
            g.internal.step++;
            nav.modbutton("elitvfg", "750_homeless/elitv" + (g.internal.step % 4) + ".webp", null, null); 
            break;
        case "elisit":
            room750.btnclick("killelibutton");
            char.addtime(20);
            nav.bg("750_homeless/eli1.webp");
            sc.select("elitv", "316_livingroom/icon_tv.png", -2);
            sc.select("elilay", "750_homeless/icon_lay.webp", 0);
            g.internal.pos = "sit";
            g.internal.step++;
            nav.modbutton("elitvfg", "750_homeless/elitv" + (g.internal.step % 4) + ".webp", null, null); 
            break;
        case "elitv":
            char.addtime(20);
            g.internal.step++;
            if (g.internal.pos === "lay") {
                g.internal.horny += 40;
            }
            else {
                g.internal.horny -= 20;
            }
            if (g.internal.horny > 99 && !g.internal.hardonNoticed) {
                g.internal.hardonNoticed = true;
                room750.btnclick("elihardon"); 
                sc.select("eliRub", "750_homeless/icon_rub.webp", 2);
                sc.modLevel("elijah", 30, 4);
            }
            else if (g.internal.step > 8) {
                room750.btnclick("killelibutton");
                nav.killbutton("elitvfg");
                room750.btnclick("eliEnd");
            }
            if (g.internal.horny < 0) {
                g.internal.hardonNoticed = false;
                g.internal.horny = 0;
            }
            if (g.internal.horny > 119)
                g.internal.horny = 100;

            nav.modbutton("elitvfg", "750_homeless/elitv" + (g.internal.step % 4) + ".webp", null, null); 
            break;
        case "elihardon":
            nav.bg("750_homeless/eli4.webp"); 
            chat(38, 750);
            break;
        case "eliEnd":
            chat(39, 750);
            break;
        case "eliRub":
            nav.kill();
            nav.bg("750_homeless/eli6.webp");
            if (sc.getMissionTask("elijah", "elijah", 6).complete) {
                chat(70, 750);
            }
            if (sc.getMissionTask("elijah", "elijah", 4).notStarted) {
                sc.completeMissionTask("elijah", "elijah", 4);
                sc.modLevel("elijah", 500, 4);
                chat(41, 750);
            }
            else {
                if (sc.getMissionTask("elijah", "elijah", 6).notStarted) {
                    sc.completeMissionTask("elijah", "elijah", 6);
                    nav.bg("750_homeless/eli16.webp");
                    g.internal = 0;
                    nav.next("eliRub1");
                }
                else {
                    chat(41, 750);
                }
                sc.modLevel("elijah", 100, 10);
            }
            break;
        case "eliRub1":
            if (g.internal === 0) {
                char.addtime(30);
                levels.gavehandjob("m", "elijah");
                g.internal = 1;
                nav.bg("750_homeless/eli17.webp");
            }
            else {
                nav.kill();
                nav.bg("750_homeless/eli18.webp");
                chat(60, 750);
            }
            break;
        case "killelibutton":
            nav.killbutton("elitv");
            nav.killbutton("elisit");
            nav.killbutton("elilay");
            nav.killbutton("eliRub");
            break;
        default:
            break;
    }
};

room750.chatcatch = function (callback) {
    switch (callback) {
        case "eli5":
        case "eli7":
        case "eli12":
            nav.bg("750_homeless/" + callback + ".webp");
            break;
        case "eli0":
        case "eli13":
            nav.kill();
            nav.bg("750_homeless/" + callback + ".webp");
            break;
        case "doc0":
            sc.setstep('doc', 1);
            daily.set("doc");
            char.addtime(30);
            char.room(750);
            break;
        case "doc1":
            if (inv.has('wine')) {
                nav.killbutton("doc");
                nav.button({
                    "type": "btn",
                    "name": "doc",
                    "left": 950,
                    "top": 86,
                    "width": 645,
                    "height": 994,
                    "image": "750_homeless/doc1d.png"
                }, 750);
                sc.setstep("doc", 2);
                chat(8, 750);
            }
            else
                chat(7, 750);
            break;
        case "doc1a":
            nav.killbutton("doc");
            nav.button({
                "type": "btn",
                "name": "doc",
                "left": 950,
                "top": 86,
                "width": 645,
                "height": 994,
                "image": "750_homeless/doc1.png"
            }, 750);
            break;
        case "doc2":
            nav.killbutton("doc");
            nav.button({
                "type": "btn",
                "name": "doc",
                "left": 950,
                "top": 60,
                "width": 785,
                "height": 1020,
                "image": "750_homeless/doc2.png"
            }, 750);
            break;
        case "doc2a":
            nav.killbutton("doc");
            nav.button({
                "type": "btn",
                "name": "barf",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "750_homeless/doc2b.png"
            }, 750);
            //nav.bg("750_homeless/doc2b.jpg");
            break;
        case "doc2b":
            nav.killbutton("barf");
            nav.bg("661_peephole/661_black.jpg");
            break;
        case "doc2c":
            sc.setstep("landlord", -5);
            sc.setstep("doc", 3);
            char.settime(23, 15);
            nav.bg("750_homeless/bg.jpg", "750_homeless/bgnight.jpg");
            break;
        case "reset":
            char.addtime(7);
            char.room(750);
            break;
        case "char":
            levels.mod("charisma", 40);
            break;
        case "int":
            levels.mod("pi", 40);
            break;
        case "pocketSand":
            if (inv.get("pocketsand").count > 0) {
                chat(28, 750);
            }
            else if (future.get("dalepocketsand") > -1) {
                chat(30, 750);
            }
            else {
                room750.chatcatch("buy");
            }
            break;
        case "buy":
            //g.pass = "dale";
            //char.room(401);
            if (gv.get("money") > 49) {
                gv.mod("money", -50);
                inv.addMulti("pocketsand", 1);
                future.add("dalepocketsand", 14);
                chat(26, 750);
            }
            else {
                chat(25, 750);
            }
            break;
        case "daleSewerEnd":
            inv.add("sewer");
            break;
        case "eliWatch":
            g.internal = {
                step: 0,
                pos: "sit",
                horny: 0,
                hardonNoticed: false
            };
            nav.killall();
            nav.bg("750_homeless/eli1.webp");
            nav.button({
                "type": "img",
                "name": "elitvfg",
                "left": 1330,
                "top": 22,
                "width": 590,
                "height": 782,
                "image": "750_homeless/elitv0.webp"
            }, 750);
            sc.select("elitv", "316_livingroom/icon_tv.png", -2);
            sc.select("elilay", "750_homeless/icon_lay.webp", 0);
            break;
        case "eli10":
            nav.killall();
            nav.bg("750_homeless/eli10.webp");
            zcl.displayMain(100, 850, .15, "clothes", true);
            break;
        case "eli14":
            nav.bg("750_homeless/eli14.webp");
            cl.add("necklace", "eli");
            cl.c.necklace = "eli";
            cl.display();
            zcl.displayMain(150, 100, .32, "clothes", false);
            break;
        case "eli15":
            nav.bg("750_homeless/eli15.webp");
            zcl.displayMain(150, 400, .32, "clothes", true);
            nav.button({
                "type": "img",
                "name": "eli15a",
                "left": 654,
                "top": 573,
                "width": 850,
                "height": 507,
                "image": "750_homeless/eli15a.webp"
            }, 750);
            break;
        case "endEli":
            daily.set("elijah");
            char.room(750);
            break;
        case "eliEnd5":
            daily.set("elijah");
            sc.modLevel("elijah", 200, 10);
            sc.completeMissionTaskAll("elijah", "elijah", 5);
            char.addtime(120);
            char.room(750);
            break;
        case "elibreakup":
            sc.completeMission("elijah", "elijah", false);
            sc.completeMissionTask("elijah", "betray", 1);
            sc.completeMission("elijah", "betray", true);
            char.addtime(120);
            gv.set("map", 0);
            char.room(460);
            break;
        case "elibreakupx":
            sc.completeMission("elijah", "elijah", false);
            sc.completeMissionTask("elijah", "betray", 2);
            sc.completeMission("elijah", "betray", true);
            char.addtime(120);
            gv.set("map", 0);
            char.room(750);
            break;
        case "eliWalk":
            nav.kill();
            nav.bg("750_homeless/eli10.webp");
            zcl.displayMain(100, 850, .15, "clothes", true);
            char.addtime(97);
            sc.modLevel("elijah", 50, 10);
            chat(71, 750);
            break;
        default:
            break;
    }
};

room750.chat = function (chatID) {
    if (chatID === 900) {
        let daleChat = [
            "You ever wonder why There's so many sissies in this town? It's 'cause the cult has hired someone to make them to make sure they have enough 'girls' for their weird rituals man. ",
            "Those 'eco friendly' reusable bags aren't meant to save the planet. They are woven with a microscopic metallic thread that creates a unique magnetic signature for every household. The waste management department uses sensors on their trucks to monitor exactly how much 'unauthorized' junk mail you’re throwing away.",
            "Modern dental fillings are no longer made of simple composites, but are actually sophisticated subdermal receivers for low frequency radio waves. Whenever you have a 'random' craving for a specific brand of soda, it’s actually a localized broadcast vibrating directly through your jawbone.",
            "The scent of a new car is a specialized pheromone cocktail designed to make the human brain more suggestible to high interest financing and long term debt. It’s a chemical sedative that suppresses the 'logic center' of the frontal lobe for exactly the duration of a standard test drive.",
            "Public restroom faucets that use infrared sensors are actually taking high resolution digital scans of your palm prints while you wait for the water to start. They’ve convinced us it’s 'touchless hygiene,' but it’s actually the world’s largest biometric database disguised as a quest for clean hands.",
            "LED smart bulbs don't just emit light; they act as high speed optical sensors that track movement by measuring the microscopic fluctuations in photon bounce back. Your 'energy efficient' lighting is actually a 360 motion capture studio that sells your walking gait to footwear marketing firms.",
            "Every grocery store intentionally maintains a fleet of carts with one wobbly wheel to subtly influence your walking path toward high margin end cap displays. ",
            "The word around is that " + sc.n("ubel") + " is the leader of the CUM cult. But he's not. There's another rich powerful man above him pulling the strings in this town.",
            "That plastic 'private investigator' card isn't just ID; it’s a high-frequency RFID beacon that broadcasts your location to the local zoning board. They want to make sure you're not investigating the cult and their crimes in this town.",
            "The coffee served at the diner contains transgender cum that raises your female hormone levels and make you more susceptible into transforming into a real girl. ",
            "The 'mystery' is a psychological smokescreen designed to keep the most inquisitive minds occupied with 'clues' while the real architectural overhaul of reality happens right under our noses. There is no solution because the investigation itself is the prison, intended to loop your logic centers until the transition to the new world order is finalized."
        ];
        return {
            chatID: 900,
            speaker: "dale",
            text: daleChat[g.rand(0, daleChat.length)],
            button: [
                { chatID: -1, text: "Sure, " + sc.n("dale") + ", sure.", callback: "" }
            ]
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "doc",
                text: "*hic* whaa ya want? *hic*",
                button: [
                    { chatID: 1, text: "Oh, uhhhh, I just like to talk to random people and see what happens", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "doc",
                text: "*hic* oh, that makes sense. I was curious once too, used to be a doctor. Then one day BAM, I'm not " +
                    "a doctor no more. ",
                button: [
                    { chatID: 2, text: "I want to hear more about your story.", callback: "" },
                    { chatID: -1, text: "ok... [back away slowly]", callback: "doc0" }
                ]
            },
            {
                chatID: 2,
                speaker: "doc",
                text: "In Japan, heart surgeon. Number one. Steady hand. *hic* One day, Yakuza boss need new heart. I do operation. " +
                    "But, mistake! Yakuza boss die! Yakuza very mad. I hide in fishing boat, come to America. No english, no food, " +
                    "no money. *hic* give me job. Now I have house, American car, and new woman. Darryl save life. My big secret: I " +
                    "kill yakuza boss on purpose. I good surgeon. The best!",
                button: [
                    { chatID: 3, text: "I'm pretty sure that's from a tv show and not you.", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "doc",
                text: "Oh... *hic* Yeah I got fired for fucking one the patients. ",
                button: [
                    { chatID: 4, text: "Oh, I didn't know you couldn't date patients", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "doc",
                text: "She wasn't *hic* conscious at the time",
                button: [
                    { chatID: -1, text: "ok... [back away slowly]", callback: "doc0" }
                ]
            },
            {
                chatID: 5,
                speaker: "doc",
                text: "Go away, come back when you're a beer!",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 6,
                speaker: "doc",
                text: "Hey kid, if you get me some wine I'll tell you a secret. ",
                button: [
                    { chatID: -1, text: "Give him some wine", callback: "doc1" },
                    { chatID: -1, text: "Ignore him", callback: "reset" }
                ]
            },
            {
                chatID: 7,
                speaker: "doc",
                text: "You don't have any wine!",
                button: [
                    { chatID: -1, text: "I know", callback: "reset" }
                ]
            },
            {
                chatID: 8,
                speaker: "doc",
                text: "*hic* Glug glug glug",
                button: [
                    { chatID: 9, text: "...", callback: "doc1a" }
                ]
            },
            {
                chatID: 9,
                speaker: "doc",
                text: "Here's your secret...  I'm a doctor and I like wine! hehehe, I didn't say it was a good secret!",
                button: [
                    { chatID: -1, text: "Groan", callback: "reset" }
                ]
            },
            {
                chatID: 10,
                speaker: "me",
                text: "Hey, were you serious when you said you were a doctor? ",
                button: [
                    { chatID: 11, text: "...", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "doc",
                text: "*HIC* yeah, why? ",
                button: [
                    { chatID: 12, text: "I need you to go to the sperm store and give my " + sc.n("landlord") + " your sperm!", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "doc",
                text: "Gimme some wine and I'll do it. ",
                button: [
                    { chatID: 13, text: "My " + sc.n("landlord") + " is going to give you money, and you can buy your own wine!", callback: "doc2" }
                ]
            },
            {
                chatID: 13,
                speaker: "doc",
                text: "Oh, ok. I like money. Have a drink of my wine to celebrate!",
                button: [
                    { chatID: 14, text: "Sweet! Thank you!", callback: "doc2a" }
                ]
            },
            {
                chatID: 14,
                speaker: "me",
                text: "BLECH IT BURNS OMG IT BURNS SO BAD!!!",
                button: [
                    { chatID: 15, text: "...", callback: "doc2b" }
                ]
            },
            {
                chatID: 15,
                speaker: "thinking",
                text: "...",
                button: [
                    { chatID: 16, text: "...", callback: "doc2c" }
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "Oh wow, that was brutal! Don't ever drink Doc's wine again! I bet he donated his sperm, I can talk to " + sc.n("landlord") +
                    " at the sperm bank and get back into the house!",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "dale",
                text: "Hey man. Are you a cop? You know you have to tell me if you are. ",
                button: [
                    { chatID: 19, text: "No. I'm not a cop. ", callback: "char" },
                    { chatID: 18, text: "You know that's dumb right? Cops don't have to say they're cops. ", callback: "int" },
                ]
            },
            {
                chatID: 18,
                speaker: "dale",
                text: "You're a cop aren't you? You have to go cop! ",
                button: [
                    { chatID: 19, text: "No. I'm not a cop. ", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "dale",
                text: "Ok. good. You know the only power cops have is other people. If you get a bunch of people then you can be the " +
                    "the cops. But then you would be a cop and who wants that. ",
                button: [
                    { chatID: 20, text: "Yeah... ", callback: "" },
                ]
            },
            {
                chatID: 20,
                speaker: "dale",
                text: "So did you come here for the aliens? I sold all those. Made quite a bit on money. I can sell you some info " +
                    "on how to get your own aliens. The thing about aliens is that they're all over and no one even knows. They're " +
                    "tough too! Really tough, but no match for me! ",
                button: [
                    { chatID: 21, text: "Have you beat up an alien?", callback: "" },
                ]
            },
            {
                chatID: 21,
                speaker: "dale",
                text: "Well no. Never beat one up, but I could. Everyone wants to fight fair. Life is not a boxing ring, life " +
                    "is the deep sea. There's no rules, because rules were made to be broken, so why have them. That's why I live " +
                    "without rules. You know the secret to beating an alien? ",
                button: [
                    { chatID: 22, text: "What? ", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "dale",
                text: "Pocket sand. You take a little pocket sand and throw it in their face, Boom! They can't " +
                    "fight anymore! Unless they have no eyes. Do you carry around pocket sand? ",
                button: [
                    { chatID: 23, text: "I don't. ", callback: "" },
                ]
            },
            {
                chatID: 23,
                speaker: "dale",
                text: "Lucky for you I have some. Don't have a lot. I have to travel to the top of the mountain in " +
                    "the forest. It's a long trip. I go every 2 weeks. If you go too much they know what you're up " +
                    "to. But too little and you run out of pocket sand! Can I interest you in some pocket sand? " +
                    "Only $50 for one pocket full! ",
                button: [
                    { chatID: -1, text: "Sure! ", callback: "buy" },
                    { chatID: 24, text: "I'll pass. ", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "dale",
                text: "Ok. Suit yourself! ",
                button: [
                    { chatID: 23, text: "I don't. ", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "dale",
                text: "Hey! You don't have $50. You trying to swindle me!",
                button: [
                    { chatID: -1, text: "oh, no. Sorry", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "dale",
                text: "Smart. You can never have too much pocket sand. Unless your pocket is full of sand. Then " +
                    "if you try to add more in you can have too much. So I guess you can have too much pocket sand.",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "dale",
                text: "What can I do you for stranger? ",
                button: [
                    { chatID: -1, text: "I want some pocket sand. I have the $50. ", callback: "pocketSand" },
                    { chatID: 900, text: "Came to talk to you. ", callback: "" },
                    { chatID: -1, text: "Nothing. ", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "dale",
                text: "Sure... wait, do you have pocket sand in your pocket right now? ",
                button: [
                    { chatID: 29, text: "Yes? ", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "dale",
                text: "How are you going to put more sand in your pocket if it's already full of sand! " +
                    "You think you can just put this sand anywhere! It's pocket sand, not purse sand! No, " +
                    "you can't have more pocket sand!",
                button: [
                    { chatID: -1, text: "oh ", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "dale",
                text: "I haven't been able to get back up the mountain to get more. I go every two weeks. ",
                button: [
                    { chatID: -1, text: "oh ", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "dale",
                text: "Missy said you would be coming by. You know she's one cool chick. We used to have sex all " +
                    "the time. Until I got tired of her. ",
                button: [
                    { chatID: 32, text: "really?", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "dale",
                text: "No. Not really. But it would be a whole lot cooler if we did. I did ask her for sex once, and " +
                    "she said she had enough crazy in her and didn't want more crazy in her. I get it. But she does " +
                    "let me spy for her. These cops in this town are so bad. My bike was stolen and you know what they did? ",
                button: [
                    { chatID: 33, text: "what?", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "dale",
                text: "Nothin'! That's why I spy for Missy, to take them all down. So I'll help you. You'll need " +
                    "this crowbar to get in. Once you're in the sewer is a maze of tunnels. When you hit a grate " +
                    "you need to double back down and try a different path. ",
                button: [
                    { chatID: 34, text: "...", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "dale",
                text: "Just keep going deep until you find what you're looking for. Just be careful of those damned " +
                    "clowns. The best way is to drop in, in the alley next to the dance club. And if you see any " +
                    "of those damned aliens just run for your life! Got it?",
                button: [
                    { chatID: -1, text: "Yeah. thanks", callback: "daleSewerEnd" },
                ]
            },
            {
                chatID: 35,
                speaker: "elijah",
                text: "I'm so glad you found me! " + sc.n("stormy") + " was really getting on my case about " +
                    "staying at her place. Luckily one of her clients was moving out of this tent, since he " +
                    "got a job, and just gave it to me. Dude's so awesome. Now I have a place to sleep till " +
                    "I get back on my feet! ",
                button: [
                    { chatID: 36, text: "Looks really nice in here! ", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "elijah",
                text: "I know! The best part is that the last guy hooked up an extension cord to that purple " +
                    "building so I get power! I was just about to watch my favorite show if you wanted to " +
                    "hang out for a bit. ",
                button: [
                    { chatID: 37, text: "I would love to! ", callback: "eli0" },
                    { chatID: -1, text: "Some other time.  ", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "elijah",
                text: "I love this show. It's so goofy and funny! ",
                button: [
                    { chatID: -1, text: "[Watch the show]", callback: "eliWatch" },
                ]
            },
            {
                chatID: 38,
                speaker: "thinking",
                text: "oh! I can feel his penis twitching against the back of my head. ",
                button: [
                    { chatID: -1, text: "[Watch the show]", callback: "eli5" },
                ]
            },
            {
                chatID: 39,
                speaker: "elijah",
                text: "I do love spending time with you, but I've got to go look for a job so I can get " +
                    "us a nice apartment. Come by tomorrow? ",
                button: [
                    { chatID: -1, text: "I'll see you tomorrow.", callback: "endEli" },
                ]
            },
            {
                chatID: 40,
                speaker: "thinking",
                text: "Looks like he's out. ",
                button: [
                    { chatID: -1, text: "I should leave.", callback: "reset" },
                ]
            },
            {
                chatID: 41,
                speaker: "elijah",
                text: "Oh. I'm so sorry. Sorry. I just... I mean I didn't. oh no. I've got to " +
                    "go. Need to find a job. ",
                button: [
                    { chatID: 42, text: "*ooof*", callback: "eli7" },
                ]
            },
            {
                chatID: 42,
                speaker: "me",
                text: "Jeeze! You didn't have to go and throw me to the floor. *ugh* I guess I'll " +
                    "come back later. ",
                button: [
                    { chatID: -1, text: "[leave]", callback: "endEli" },
                ]
            },
            {
                chatID: 43,
                speaker: "elijah",
                text: "Would you like to watch a show with me? ",
                button: [
                    { chatID: 37, text: "I would love to! ", callback: "eli0" },
                    { chatID: -1, text: "Some other time.  ", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "elijah",
                text: "Let's go for a walk in the park. ",
                button: [
                    { chatID: 45, text: "I would love to! ", callback: "eli10" },
                    { chatID: -1, text: "Some other time.  ", callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "elijah",
                text: "Such a nice day. This is my favorite place to go when everything seems to " +
                    "let me down. It just picks me back up. ",
                button: [
                    { chatID: 46, text: "Tell me about yourself. ", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "elijah",
                text: "It's been hard since we got kicked out of our house. Our dad didn't want us there " +
                    "anymore when he got a new girlfriend, so I had to raise my sister for a bit, but she's " +
                    "doing better. She's even making more money than me now, which is funny. She keeps offering " +
                    "me some, but I'm doing alright. ",
                button: [
                    { chatID: 47, text: "That's nice of her.", callback: "" },
                ]
            },
            {
                chatID: 47,
                speaker: "elijah",
                text: "Yeah, but I don't want her to support me. I want to be the one that supports my family. " +
                    "When I do, I'm going to give my kids the best life I can and let them know they're loved " +
                    "and cared for. I've already decided that I'm going to have six kids. I get to name " +
                    "the boys and my wife and name the girls. ",
                button: [
                    { chatID: 48, text: "Six kids? ", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "elijah",
                text: "I'm willing to go down to four. I just need to get a job and find the right " +
                    "woman who's willing to let me support and love her everyday. I want my love to " +
                    "be pure which is why I'm saving my virginity for my future wife. She should also " +
                    "be saving herself for me. ",
                button: [
                    { chatID: 49, text: "Oh? ", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "elijah",
                text: "Yes. It's kind of a deal breaker for me. I guess I should ask if you're a virgin. " +
                    "I would hate to find out later that you're not and have this all for nothing. ",
                button: [
                    { chatID: 52, text: "Oh silly. Of course I'm a virgin.", callback: "" },
                    { chatID: 50, text: "I've not and I don't think it's that important. ", callback: "eli12" },
                ]
            },
            {
                chatID: 50,
                speaker: "elijah",
                text: "*ugh* I should have known. I'm sorry, but I can't date you. I need a loving housewife " +
                    "not a girl who's going to sleep around. You're a great girl, but you're not the right " +
                    "girl for me. I'm sorry, but I have to break up with you. ",
                button: [
                    { chatID: 51, text: "Dick!", callback: "" },
                    { chatID: 51, text: "Asshole!", callback: "" },
                    { chatID: 51, text: "No, I'm breaking up with you.", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "elijah",
                text: "I'm sure you can find your way back. I do wish you the best and hope you find the " +
                    "right man to be your husband some day.",
                button: [
                    { chatID: -1, text: "*sigh* Bye I guess", callback: "elibreakup" },
                ]
            },
            {
                chatID: 52,
                speaker: "elijah",
                text: "I'm so relieved. I've been wanting to ask you for so long now, but it's such an " +
                    "awkward question. I have something for you.",
                button: [
                    { chatID: 53, text: "Yes? ", callback: "eli13" },
                ]
            },
            {
                chatID: 53,
                speaker: "elijah",
                text: "I know it's too early for me to ask you to marry me, but I want to give you my " +
                    "necklace. It's a sign of my commitment to you and you to me. This necklace has been " +
                    "with me for a long time, and I hope it's with you for an even longer time. A reminder of " +
                    "my love for you. ",
                button: [
                    { chatID: 55, text: "It's beautiful. I'll wear it always. ", callback: "eli14" },
                    { chatID: 54, text: "I can't take it. You need to be with a girl that loves you. ", callback: "eli12" },
                ]
            },
            {
                chatID: 54,
                speaker: "elijah",
                text: "Oh. I'm such an idiot. Oh man. I'm so dumb, I thought you loved me like I loved you. ",
                button: [
                    { chatID: 51, text: "...", callback: "" },
                ]
            },
            {
                chatID: 55,
                speaker: "elijah",
                text: "We do make a great couple. I want to spend the rest of my life making babies " +
                    "with you. ",
                button: [
                    { chatID: 56, text: "I would love that. ", callback: "" },
                ]
            },
            {
                chatID: 56,
                speaker: "elijah",
                text: "Let's head back home. Well, head back to the tent. I'm going to have to get " +
                    "something bigger for all our kids, haha. ",
                button: [
                    { chatID: 57, text: "Yes. ", callback: "eli15" },
                ]
            },
            {
                chatID: 57,
                speaker: "elijah",
                text: "I love you so much. This is the best day of my life.  ",
                button: [
                    { chatID: -1, text: "I love you too. ", callback: "eliEnd5" },
                    { chatID: -1, text: "Ditto ", callback: "eliEnd5" },
                ]
            },
            {
                chatID: 58,
                speaker: "elijah",
                text: "Why aren't you wearing my necklace? That's a symbol of our love. ",
                button: [
                    { chatID: -1, text: "I forgot it, sorry. Let me go get it. ", callback: "reset" },
                ]
            },
            {
                chatID: 59,
                speaker: "elijah",
                text: "*mwah* So glad to see you. Do you want to watch some tv or go for a walk in the " +
                    "forest? ",
                button: [
                    { chatID: -1, text: "Watch tv", callback: "eliWatch" },
                    { chatID: -1, text: "Go for a walk. ", callback: "eliWalk" },
                ]
            },
            {
                chatID: 60,
                speaker: "elijah",
                text: "Oh no! Sorry! I don't know what came over me... I guess cum came over me. So " +
                    "sorry. I need to clean this up. I'm so embarrassed right now.",
                button: [
                    { chatID: 61, text: "It's ok. It's only cum.", callback: "" },
                ]
            },
            {
                chatID: 61,
                speaker: "elijah",
                text: "Oh yes. I just didn't expect to cum in front of you like this till we were married. " +
                    "I need to clean up. Thank you, but I feel so dirty. ",
                button: [
                    { chatID: -1, text: "Ok. See you tomorrow", callback: "reset" },
                ]
            },
            {
                chatID: 62,
                speaker: "elijah",
                text: "...Wait... Are you a boy?",
                button: [
                    { chatID: 64, text: "Yes", callback: "" },
                    { chatID: 63, text: "No, I'm a girl. ", callback: "" },
                ]
            },
            {
                chatID: 63,
                speaker: "elijah",
                text: "You have a penis don't you? ",
                button: [
                    { chatID: 64, text: "Yes, but it's more than a penis to make a boy, a boy.", callback: "" }
                ]
            },
            {
                chatID: 64,
                speaker: "elijah",
                text: "I'm sorry. I can't date you. You're an absolutly wonderful person, but my future " +
                    "plans are for a woman, with a uterus to bear my children. I know you'll find the " +
                    "right boy for you someday, but you're not the right girl for me. I'm sorry, but we " +
                    "have to break up. ",
                button: [
                    { chatID: 65, text: "...but", callback: "" }
                ]
            },
            {
                chatID: 65,
                speaker: "elijah",
                text: "No buts. You are great, but this is over. ",
                button: [
                    { chatID: -1, text: "*tear* ok. ", callback: "elibreakupx" }
                ]
            },
            {
                chatID: 66,
                speaker: "thinking",
                text: "I broke up with " + sc.n("elijah") + ". There's no reason to bug him again. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 67,
                speaker: "elijah",
                text: "I'm a little embarrassed to bring this up, but I'm hoping to save myself for marriage. " +
                    "I love hanging out with you, but no more sex stuff. ok? ",
                button: [
                    { chatID: 68, text: "Yeah. Sure", callback: "" }
                ]
            },
            {
                chatID: 68,
                speaker: "elijah",
                text: "That's such a relief. Once I get a job, we'll be together forever and have our big " +
                    "family with you as my wife. Just give me time. Maybe a lot of time. Jobs are hard.  ",
                button: [
                    { chatID: 69, text: "Sure. I'll just watch tv with you until the day comes that you can get a job. ", callback: "" }
                ]
            },
            {
                chatID: 69,
                speaker: "elijah",
                text: "So, do you want to watch some tv or go for a walk in the " +
                    "forest? ",
                button: [
                    { chatID: -1, text: "Watch tv", callback: "eliWatch" },
                    { chatID: -1, text: "Go for a walk. ", callback: "eliWalk" },
                ]
            },
            {
                chatID: 70,
                speaker: "thinking",
                text: "*sigh* I guess I'll wait until he's ready. When ever that is. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 71,
                speaker: "elijah",
                text: "*Talks about our wonder future together in the distant future.* ",
                button: [
                    { chatID: 72, text: "I would like that", callback: "" },
                ]
            },
            {
                chatID: 72,
                speaker: "elijah",
                text: "So glad we can just spend time together without worring about sex. I really do love " +
                    "you. ",
                button: [
                    { chatID: -1, text: "And I you. ", callback: "reset" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};