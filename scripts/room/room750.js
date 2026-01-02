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
        default:
            break;
    }
};

room750.chatcatch = function (callback) {
    switch (callback) {
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
            levels.mod("charisma", 40, 999);
            break;
        case "int":
            levels.mod("pi", 40, 999);
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
        default:
            break;
    }
};

room750.chat = function (chatID) {
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
            text: "Hay, were you serious when you said you were a doctor? ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "doc",
            text: "*HIC* yeah, why? ",
            button: [
                { chatID: 12, text: "I need you to go to the sperm store and give my " + sc.n("landlord") + " your sperm!" , callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "doc",
            text: "Gimmie some wine and I'll do it. ",
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
                { chatID: 20, text: "Yea... ", callback: "" },
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
            text: "Well no. Never beat one up, but I could. Everyone wants to fight fair. Life is not a boxing rink, life " +
                "is the deep sea. There's no rules. because rules were made to be broken, so why have them. That's why I live " +
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
            text: "Lucky for you I have some. Don't have a lot. I have to travel to the top of the moutain in " +
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
            text: "Smart. You can never have too much pocketsand. Unless your pocket is full of sand. Then " +
                "if you try to more more in you can have too much. So I guess you can have too much pocket sand.",
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
                "you need to double back down and try a differnt path. ",
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};