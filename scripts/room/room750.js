//Room name
var room750 = {};
room750.main = function () {
    if (g.isNight()) {
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
        //if (sc.getstep("doc") < 3) {
        //    nav.button({
        //        "type": "btn",
        //        "name": "doc",
        //        "left": 1176,
        //        "top": 295,
        //        "width": 303,
        //        "height": 710,
        //        "image": "750_homeless/doctor.png"
        //    }, 750);
        //}
    }
    //else {
    //    nav.button({
    //        "type": "btn",
    //        "name": "daletent",
    //        "left": 969,
    //        "top": 443,
    //        "width": 234,
    //        "height": 139,
    //        "image": "750_homeless/dale.png"
    //    }, 750);
    //}
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
                var doc = sc.getstep("doc");
                if (doc === 0)
                    chat(0, 750);
                else if (sc.getEvent("landlord", -4)) 
                    chat(10, 750);
                else if (doc === 1)
                    chat(6, 750);
            }
            else
                chat(5, 750);
            break;
        case "crystal":
            char.room(751);
            break;
        case "daletent":
            nav.killall();
            nav.bg("750_homeless/dale.jpg");
            if (sc.getstep("dale") === 0) {
                chat(17, 750);
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
                nav.modbutton("doc", "750_homeless/doc1d.png");
                sc.setstep("doc", 2);
                chat(8, 750);
            }
            else
                chat(7, 750);
            break;
        case "doc1a":
            nav.modbutton("doc", "750_homeless/doc1.png");
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
            levels.mod("int", 40, 999);
            break;
        case "buy":
            g.pass = "dale";
            char.room(401);
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
                { chatID: -1, text: "...", callback: "" }
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
                "is the deep sea. There's no rules. Becuase rules were made to be broken, so why have them. That's why I live " +
                "without rules. You know the secret to beating an alien? ",
            button: [
                { chatID: 22, text: "What? ", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "dale",
            text: "Pocket sand and smelling salts. You take a little pocket sand and throw it in their face, Boom! They can't " +
                "fight anymore! Unless they have no eyes. Then you can't fight. But you can use smelling salts to get back up! " +
                "Do you carry pocket sand or smelling salts? You'll need them. ",
            button: [
                { chatID: 23, text: "I don't. ", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "dale",
            text: "Lucky for you I sell both! Come view my stuff man! ",
            button: [
                { chatID: -1, text: "See what he has. ", callback: "buy" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};