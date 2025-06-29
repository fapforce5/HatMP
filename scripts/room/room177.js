//Room name
var room177 = {};
room177.main = function () {
    g.internal = null;
    switch (gv.get("sissySchoolClass")) {
        case "chastity101":
            nav.bg("177_chastity/chastity0.jpg");
            chat(0, 177);
            break;
        case "chastity201":
            nav.bg("177_chastity/c201_0.jpg");
            chat(28, 177);
            break;
        case "chastity442":
            nav.bg("177_chastity/c442.jpg");
            chat(33, 177);
            break;
    }
};

room177.btnclick = function (name) {
    switch (name) {
        case "c201_penis":
            nav.killall();
            nav.bg("177_chastity/c201_1.jpg");
            chat(30, 177);
            break;
        case "c201_clit":
            nav.killall();
            chat(31, 177);
            break;
        case "442no":
            nav.kill();
            gv.set("castitycage", null);
            gv.set("chastityOverride", "never");
            cl.c.chastity = null;
            cl.display();
            chat(999, 177);
            break;
        case "442week":
            nav.kill();
            sc.select("442_cage", "177_chastity/icon_ch_cage.png", 0);
            sc.select("442_pink", "177_chastity/icon_ch_pink.png", 2);
            sc.select("442_flat", "177_chastity/icon_ch_flat.png", 4);
            break;
        case "442all":
            nav.kill();
            gv.set("chastityOverride", "forever");
            sc.select("442_cage", "177_chastity/icon_ch_cage.png", 0);
            sc.select("442_pink", "177_chastity/icon_ch_pink.png", 2);
            sc.select("442_flat", "177_chastity/icon_ch_flat.png", 4);
            break;
        case "442_cage":
            nav.kill();
            gv.set("castitycage", "cage");
            cl.c.chastity = "cage";
            cl.display();
            chat(999, 177);
            break;
        case "442_pink":
            nav.kill();
            gv.set("castitycage", "pink");
            cl.c.chastity = "pink";
            cl.display();
            chat(999, 177);
            break;
        case "442_flat":
            nav.kill();
            gv.set("castitycage", "flat");
            cl.c.chastity = "flat";
            cl.display();
            chat(999, 177);
            break;
        default:
            break;
    }
};

room177.chatcatch = function (callback) {
    switch (callback) {
        case "chastity1":
        case "chastity2":
        case "chastity3":
        case "chastity5":
        case "chastity6":
        case "chastity7":
            nav.bg("177_chastity/" + callback + ".jpg");
            break;
        case "chastity4":
            gv.mod("arousal", 50);
            nav.bg("177_chastity/" + callback + ".jpg");
            break;
        case "chastity8":
            nav.bg("177_chastity/" + callback + ".gif");
            g.roomTimeout = setTimeout(function () {
                chat(21, 177);
            }
            , 3000)
            break;
        case "chastity9":
            nav.killall();
            nav.bg("177_chastity/" + callback + ".jpg");
            break;
        case "chastity10":
            cl.c.chastity = g.internal;
            nav.bg("177_chastity/" + callback + ".jpg");
            break;
        case "chastity11":
            if (g.internal === "pink")
                chat(24, 177);
            else
                chat(25, 177);
            break;
        case "pink":
            gv.set("castitycage", "pink");
            g.internal = "pink";
            break;
        case "pinkx2":
            gv.set("castitycage", "pinkx2");
            g.internal = "pinkx2";
            break;
        case "chastity101end":
            sissy.passclass(true);
            break;
        case "c201_choice":
            nav.button({
                "type": "btn",
                "name": "c201_penis",
                "left": 345,
                "top": 285,
                "width": 511,
                "height": 511,
                "image": "177_chastity/c201_0p.png"
            }, 177);
            nav.button({
                "type": "btn",
                "name": "c201_clit",
                "left": 1064,
                "top": 285,
                "width": 511,
                "height": 511,
                "image": "177_chastity/c201_0c.png"
            }, 177);
            break;
        case "c201_2":
            gv.set("castitycage", "flat");
            cl.c.chastity = "flat";
            zcl.displayMain(-1000, 200, .4, "", false);
            cl.display();
            break;
        case "chastity442choice":
            sc.select("442no", "177_chastity/icon_442no.png", 0);
            sc.select("442week", "177_chastity/icon_442week.png", 2);
            sc.select("442all", "177_chastity/icon_442forever.png", 4);
            break;
        case "chastity442redo":
            nav.kill();
            nav.bg("177_chastity/c442.jpg");
            sc.select("442no", "177_chastity/icon_442no.png", 0);
            sc.select("442week", "177_chastity/icon_442week.png", 2);
            sc.select("442all", "177_chastity/icon_442forever.png", 4);
            break;
        default:
            break;
    }
};

room177.chat = function (chatID) {
    if (chatID === 999) {
        let chas = gv.get("castitycage");
        let howlong = gv.get("chastityOverride");
        let txt = "";
        nav.bg("177_chastity/bg.jpg");
        zcl.displayMain(-1000, 200, .4, "", false);
        if (howlong === "never") {
            txt = "To never wear a chastity cage again? ";
        }
        else {
            txt = "To wear a " + cl.getEntry("chastity", chas).display +
                (howlong === null ? " only during the week? " : " forever?");
        }

        return {
            chatID: 999,
            speaker: "missy",
            text: txt,
            button: [
                { chatID: 34, text: "Yes it is", callback: "" },
                { chatID: -1, text: "No. Let me redo that pick. ", callback: "chastity442redo" },
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Yeah, this should be easy. I'm already locked in chastity. Been so for a bit. It's really hard at first, " +
                "but you start to get used to it. Still there's no better feeling than getting free of the cage. ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ralph",
            text: "I don't know. I really like dressing up all feminine, but I really like my dick. You know. I know no " +
                "one has seen it, but I hope some day to find my waifu who likes to dress me up and do naughty things. It " +
                "would be hard if I'm all locked up. ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Well this is sissy school. Missy always says a sissy should be locked up. I guess you're going to have to " +
                "get used to it. Hopefully your waifu is ok with that. Maybe you could get really good at eating pussy. With " +
                "being locked up and all, you're going to have a lot of practice if you find her. ",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "That sounds fun, but I really want to have sex for the first time. I want to please her. Girls do like " +
                "dicks. I just don't know. ",
            button: [
                { chatID: 4, text: "...", callback: "chastity1" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "Oh good, there's only two of your for this class. I know " + sc.n("me") + " knows chastity all too well, " +
                "but " + sc.n("ralph") + " do you know why I lock up our sissies? ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "ralph",
            text: "Well ma'am. I know a sissy is used for pleasure. And I heard that if we use our penises for pleasure we " +
                "can't give pleasure or something like that. I mean we can still give pleasure, but we don't have pleasure. Ma'am",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "Oh " + sc.n("ralph") + " my dear sweet bumbling idiot. It has nothing to do with pleasure. It's about control. " +
                "If I lock your cock up and hold the key, then I alone control your cock. I decide when and how you use it. " +
                "Sissies are my play things. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "ralph",
            text: "I wanted to ask you about that. I am totally under your control, but I like having a penis. C-c-c-could I maybe " +
                "not do chastity? I promise not to have sex with anyone unless I ask first. And you let me. It's just I really " +
                "like having a penis. I like the other stuff too. Mostly I like dressing up, and " + sc.n("p") + "'s classes are " +
                "fun. But I was wondering if I can keep my penis. Please. I er mean please ma'am. ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "My dear sweet stupid puppy. Show me see this cock you so desperately want to keep.  ",
            button: [
                { chatID: 9, text: "...", callback: "chastity2" }
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "Oh. I don't kow what I expected, but it wasn't this. What a surprisingly fine cock you have. Not huge, not " +
                "tiny, just a fine cock. I have a meeting I need to get ready for so I don't have enough time to properly " +
                "train you. I guess your face is chastity enough. Don't masturbate, and if you do you have to report to me immediatly. Deal?",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "ralph",
            text: "Oh yes ma'am! Deal deal deal. I promise not to jack off! Thank you, thank you, thank you!",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "And if I catch you lying to me, or not telling me, I'll bind your balls till they fall off. Got it!",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "ralph",
            text: "*GULP* Yes ma'am",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "Good. Now get out. I have actual chastity training to do with " + sc.n("me") + ". He's really going to love " +
                "what I have in mind. ",
            button: [
                { chatID: 27, text: "...", callback: "chastity3" }
            ]
        },
        
        {
            chatID: 14,
            speaker: "missy",
            text: "Hahaha. Nice try. Unfortunately for you I actually care about you. I'll tell you what, I'll let you out " +
                "of your cage. Bring that enormous clit over to the bed. ",
            button: [
                { chatID: 15, text: "Really ma'am!", callback: "chastity4" }
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "So lets get this terrible cage off of you. Your clitty is begging for release isn't it? ",
            button: [
                { chatID: 16, text: "Oh yes ma'am", callback: "chastity5" }
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "It really is a large cock for such a small sissy. A bit too large don't you think?  ",
            button: [
                { chatID: 18, text: "Yes ma'am. It really is too big. ", callback: "pinkx2" },
                { chatID: 17, text: "Too large? No ma'am. It's a great size. ", callback: "pink" }
                
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "Nope. It's too big. Cocks are for real men. Lucky for you I know a way to turn that man's cock into " +
                "a pretty feminine clitty. This is the beginner device. It will only shrink it down a little. ",
            button: [
                { chatID: 19, text: "Oh no. ", callback: "chastity6" }
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "I'm glad you know your worth. I have a special chastity cage that will help shink your cock into a clitty. " +
                "You just need to wear it, and over time we'll shrink that cock down. ",
            button: [
                { chatID: 19, text: "Thank you ma'am!", callback: "chastity6" }
            ]
        },
        {
            chatID: 19,
            speaker: "missy",
            text: "There's no way I'll be able to put the chastity cage on with that raging hardon. Come here so I can bind your " +
                "legs together then bend your bare ass over my knees. ",
            button: [
                { chatID: 20, text: "Yes ma'am!", callback: "chastity7" }
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "Ok. This is going to hurt. A lot. But it must be done to get that cock down. Take a deep breath while I " +
                "soften your clitty. ",
            button: [
                { chatID: -1, text: "*breathe in*", callback: "chastity8" }
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Ow ow ow ow. My cock is soft! my cock is soft. my cock is soft. is soft ",
            button: [
                { chatID: 22, text: "...", callback: "chastity9" }
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "But this is so much fun. Fine. Let's cage you up. ",
            button: [
                { chatID: 23, text: "...", callback: "chastity10" }
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "There you go. This new cage will be a little tight at first. But in time your clitty will will adjust to " +
                "the new size. This new cage will only shrink it a little, but if you continue with your chastity training the " +
                "smaller cages will finish shrinking it it till it's just a cute little clitty. Plus pink is such a cute color " +
                "for you. Really brings out your cute pink pussy hole. ",
            button: [
                { chatID: -1, text: "Wait? Do you mean that my cock will shrink? ", callback: "chastity11" }
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "Yes. The longer you wear it, the more it will shrink. But don't worry, it will only shrink a little tiny bit. " +
                "You'll still have a large cock, just not this horrible monster you swing around. Continue with your training " +
                "and it will shrink to its proper size. ",
            button: [
                { chatID: 26, text: "yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "Yes. The longer you wear it, the more it will shrink. It will shrink it to a normal penis, not quite a " +  
                "clitty. But keep going with your chastity training and we'll shrink that stupid cock down till it's just " +
                "a useless nub between your legs. ",
            button: [
                { chatID: 26, text: "Thank you ma'am!", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "If you want to speed up the shrinking we'll have to keep you locked up during the weekends too. " +
                "I've got to run. Enjoy your new cage. ",
            button: [
                { chatID: -1, text: "Thank you ma'am!", callback: "chastity101end" }
            ]
        },
        {
            chatID: 27,
            speaker: "me",
            text: "So, uhhh. I don't suppose I can request to be let out too. I promise not to masturbate ma'am. ",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "Hello girls. Today's class is a choice. You will decide if you're " +
                "a true cum hole sissy who only exists to take phalic object into your " +
                "holes, or are a fem boy that may want to use your penis someday. ",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "No doubt by now you have noticed that the smaller your cage is, the " +
                "smaller your penis gets. So I will give you the choice. Do you still " +
                "want your penis, or will you commit to a sissy clit. Choose, but choose " +
                "wisely, because if you choose the clit, it will forever be a clit. ",
            button: [
                { chatID: -1, text: "*Gulp*", callback: "c201_choice" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "Oh. I guess I'm a bit dissapointed. But I guess it's your choice. " +
                "Class is dismissed. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "chastity101end" }
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "When I first saved your ass, I knew I had a true sissy. Let's " +
                "change you cage so you can 'shrink' to the girl you were always " +
                "meant to be. ",
            button: [
                { chatID: 32, text: "Yes! ", callback: "c201_2" }
            ]
        },
        {
            chatID: 32,
            speaker: "missy",
            text: "So cute. You're almost a girl now! That peasky penis will be gone " +
                "before you know it! I'm so proud of you my little sissy!",
            button: [
                { chatID: -1, text: "Yes ma'am! ", callback: "chastity101end" }
            ]
        },
        {
            chatID: 33,
            speaker: "missy",
            text: "I'm fairly proud of you. It's always sad to see a class graduate " +
                "and move on with their lives, but move on we all must. You're a big " +
                "girl now, and it's time you grow up and start making your own choices. " +
                "So I'm going to let you choose. You can remove your chastity device " +
                "for all time, we can keep doing what we're doing where you can free " +
                "youself on the weekends, or you can truly devote yourself to the sissy " +
                "lifestyle and wear it all the time. No weekends, no penis, only holes. ",
            button: [
                { chatID: -1, text: "OOooooo", callback: "chastity442choice" }
            ]
        },
        {
            chatID: 34,
            speaker: "missy",
            text: "Ok. Let's hope you don't regret this decision. ",
            button: [
                { chatID: -1, text: "Yes!", callback: "chastity101end" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};