//living room
var room16 = {};

room16.main = function () {
    var btnList = new Array();
    var thisSisterRoomID = sc.sister();
    var thisMomRoomID = sc.mother();

    //if (sc.getstep("lola") === 9) {
    //    nav.button({
    //        "type": "img",
    //        "name": "x",
    //        "left": 853,
    //        "top": 260,
    //        "width": 215,
    //        "height": 820,
    //        "image": "13_sisterRoom/13_lola_reading.png"
    //    }, 16);
    //    chat(5, 16);
    //}
    if ((cl.isCrossdressing() || cl.c.chest > 2) && sc.getstep('landlord') < 200) {
        nav.button({
            "type": "btn",
            "name": "caught",
            "left": 513,
            "top": 0,
            "width": 1065,
            "height": 1080,
            "image": "16_livingRoom/allthree.png"
        }, 16);
    }
    else {
        if (thisSisterRoomID.roomID === 25 && thisMomRoomID.roomID === 25) {
            btnList.push({
                "type": "btn",
                "name": "dining",
                "left": 1212,
                "top": 398,
                "width": 708,
                "height": 682,
                "image": "16_livingRoom/lolaAndEvaAndMKitchen.jpg"
            });
        }
        else if (thisSisterRoomID.roomID === 25) {
            btnList.push({
                "type": "btn",
                "name": "dining",
                "left": 1113,
                "top": 434,
                "width": 807,
                "height": 646,
                "image": "16_livingRoom/diningRoomEandL.png"
            });
        }
        else if (thisMomRoomID.roomID === 25) {
            btnList.push({
                "type": "btn",
                "name": "dining",
                "left": 1113,
                "top": 462,
                "width": 807,
                "height": 618,
                "image": "16_livingRoom/diningRoomLL.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "dining",
                "left": 1113,
                "top": 645,
                "width": 807,
                "height": 435,
                "image": "16_livingRoom/diningRoomNone.png"
            });
        }

        if (thisMomRoomID.roomID === 15) {
            btnList.push({
                "type": "btn",
                "name": "kitchen",
                "left": 0,
                "top": 0,
                "width": 1102,
                "height": 829,
                "image": "16_livingRoom/kitchenM.png",
                "night": "16_livingRoom/kitchenMN.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "kitchen",
                "left": 0,
                "top": 0,
                "width": 1102,
                "height": 829,
                "image": "16_livingRoom/kitchen.png",
                "night": "16_livingRoom/kitchenN.png"
            });
        }

        if (thisMomRoomID.roomID === 26) {
            btnList.push({
                "type": "btn",
                "name": "living",
                "left": 1059,
                "top": 200,
                "width": 351,
                "height": 385,
                "image": "16_livingRoom/livingM.png",
                "night": "16_livingRoom/livingMN.png"
            });
        }
        else if (thisSisterRoomID.roomID === 26) {
            btnList.push({
                "type": "btn",
                "name": "living",
                "left": 1059,
                "top": 200,
                "width": 351,
                "height": 385,
                "image": "16_livingRoom/livingT.png",
                "night": "16_livingRoom/livingTN.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "living",
                "left": 1059,
                "top": 200,
                "width": 351,
                "height": 385,
                "image": "16_livingRoom/living.png",
                "night": "16_livingRoom/livingN.png"
            });
        }

        var hour = g.gethourdecimal();
        var navList = [15, 26, 25, 11];
        if (inv.has("landlordKey"))
            navList.push(14);
        else if (hour.between(7, 22) && thisMomRoomID === 14)
            navList.push(14);

        if (g.hourBetween(6, 21))
            navList.push(0);
        $.each(btnList, function (i, v) {
            nav.button(v, 16);
        });

        nav.buildnav(navList);
    }
};

room16.btnclick = function (name) {
    switch (name) {
        case "dining":
            char.room(25);
            break;
        case "living":
            char.room(26);
            break;
        case "kitchen":
            char.room(15);
            break;
        case "caught":
            nav.modbutton("caught", "16_livingRoom/allthree1.png", null, null);
            chat(6, 16);
            break;
        default:
            break;
    }
};

room16.chatcatch = function (callback) {
    switch (callback) {
        case "kungfu":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 1440,
                "height": 1080,
                "image": "16_livingRoom/016_kungfu.mp4"
            }, 454);
            break;
        case "upstairs":
            char.room(13);
            break;
        case "girl1":
            nav.killall();
            nav.bg("14_motherRoom/14_motherRoom.jpg", "14_motherRoom/14_motherRoomNightLight.jpg");
            nav.button({
                "type": "btn",
                "name": "dressup",
                "left": 1193,
                "top": 42,
                "width": 466,
                "height": 1038,
                "image": "14_motherRoom/14_mother.png"
            }, 16);
            zcl.displayMain(150, 300, .19, "clothes", true);
            break;
        case "girl2":
            cl.nude();
            nav.modbutton("dressup", "14_motherRoom/14_motherRobe.png", null, null);
            zcl.displayMain(150, 300, .19, "clothes", true);
            break;
        case "girl3":
            cl.c.pj = "b";
            cl.display();
            zcl.displayMain(150, 300, .19, "clothes", true);
            break;
        case "girl4":
            zcl.displayMain(150, 300, .19, "clothes", false);
            break;
        case "girl5":
            sc.setstep("lola", 200);
            sc.setstep("eva", 200);
            sc.setstep("landlord", 200);
            g.roomMapAccess(16, true, true);
            g.mod("sissy", 100);
            cl.add("pj", "b");
            g.set("rentOwed", 0);
            char.room(10);
            break;
        default:
            break;
    }
};

room16.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I have to talk to " + sc.n("landlord") + " before heading out.",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "It's pretty late, I should head to bed.",
            button: []
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "I'm catching up on my Soaps, why don't you go out and play.",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Watch some Kung Fu for an hour?",
            button: [
                { chatID: -1, text: "Hell Yes!!", callback: "kungfu" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "eva",
            text: "Hay butthead, this part of the games hasn't been built yet.",
            button: [
                { chatID: -1, text: "You smell like an old shoe!", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "lola",
            text: sc.n("eva") + " and I are so excited you're allowed back! Quick come upstairs to our room!",
            button: [
                { chatID: -1, text: "Follow Lola", callback: "upstairs" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "Oh my. " + sc.n("me") + " there's something different about you. ",
            button: [
                { chatID: 7, text: "oh, hahaha, what? ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "You're a girl! Why are you a girl? When did you become a girl?",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "I am quite shocked. You were a boy yesterday, but today it looks like you've become a girl. ",
            button: [
                { chatID: 9, text: "Well, it's something I've been exploring", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "lola",
            text: "I support you! We should have known this entire time. I'm so happy now I have two " + sc.n("el") + 
                ". I feel so bad I never knew until now. It must have been so hard having these feeling and not telling anyone. ",
            button: [
                { chatID: 10, text: "Oh well, thank you " + sc.n("lola") + ".", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "eva",
            text: "I don't believe it! You're too perverted to be a girl. This must be some kind of trick!",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: sc.n("eva") + "!! Don't be mean! " + sc.n("me") + " is going through a lot right now and you're just being a " +
                "butt...",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Enough you too. " + sc.n("me") + "I'm sorry, you are going through a lot right now. We all support you, don't we " +
                sc.n("eva") + "?",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "eva",
            text: "yes " + sc.n("landlord") + ".",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "I know this is hard, but we all are going to help you with your change. I'm so happy to have a house full of girls. " +
                "We're going to help you on your journey on becoming our little girl. Girls, I'm going to take " + sc.n("me") +
                " and help her start her journey. You girls run along. ",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "Yes " + sc.n("landlord") + ". " + sc.n("me") + " we're really happy to have a new girl around the house and we'll help " +
                "you with anything you need!",
            button: [
                { chatID: 16, text: "Thanks " + sc.n("lola") + " I'm glad you support me. ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Ok, follow me. ",
            button: [
                { chatID: 17, text: "ok", callback: "girl1" }
            ]
        },
        {
            chatID: 17,
            speaker: "landlord",
            text: "Squeel!! I'm so excited to have another girl in the house! We're going to play dress up! I'm going to put on my night " +
                "gown, you strip off those nasty clothes!",
            button: [
                { chatID: 18, text: "Yes!", callback: "girl2" }
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "You know, you make a very pretty girl, and pretty girls need something sexy to sleep in! I have an extra night gown " +
                "from when I was much slimmer you can have. Try it on, let me see it!",
            button: [
                { chatID: 19, text: "Yes!", callback: "girl3" }
            ]
        },
        {
            chatID: 19,
            speaker: "landlord",
            text: "You are a pretty girl, turn around!",
            button: [
                { chatID: 20, text: "Yes!", callback: "girl4" }
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "We're going to have so much fun! I can't wait to help you on your journey.",
            button: [
                { chatID: -1, text: "I'm looking forward to it too!", callback: "girl5" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};