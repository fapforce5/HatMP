//living room
var room16 = {};

room16.main = function () {
    var btnList = new Array();
    var thisSisterRoomID = sc.getTimeline("lola");
    var thisMomRoomID = sc.getTimeline("landlord");
    var thisBigguyId = sc.getTimeline("bigguy");
    //var llst = sc.getstep("landlord");
    if (false) {// (cl.isCrossdressing() || cl.c.chest > 2) && sc.getstep('landlord') < 200) {
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
    //else if (cl.isLewd()) {
    //    if (llst < 200) {
    //        nav.button({
    //            "type": "img",
    //            "name": "lewd1",
    //            "left": 703,
    //            "top": 0,
    //            "width": 769,
    //            "height": 1080,
    //            "image": "16_livingRoom/l1.png"
    //        }, 16);
    //        chat(21, 16);
    //    }
    //    else {
    //        nav.button({
    //            "type": "img",
    //            "name": "lewd1",
    //            "left": 703,
    //            "top": 0,
    //            "width": 769,
    //            "height": 1080,
    //            "image": "16_livingRoom/l1.png"
    //        }, 16);
    //        if (!sc.getEvent("landlord", -9))
    //            chat(22, 16);
    //        else
    //            chat(33, 16);
    //    }
    //}
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
        else if (thisBigguyId.roomID === 25) {
            btnList.push({
                "type": "btn",
                "name": "dining",
                "left": 1113,
                "top": 416,
                "width": 807,
                "height": 664,
                "image": "16_livingRoom/diningRoomDick.png"
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
        if (thisMomRoomID.roomID === 26 && thisSisterRoomID.roomID === 26) {
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
        else if (thisMomRoomID.roomID === 26 && thisBigguyId.roomID === 26) {
            btnList.push({
                "type": "btn",
                "name": "living",
                "left": 1189,
                "top": 347,
                "width": 212,
                "height": 227,
                "image": "16_livingRoom/bigguy.png",
            });
        }
        else if (thisMomRoomID.roomID === 26) {
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
        case "s6":
            nav.bg("16_livingRoom/s" + g.internal + ".jpg");
            if (g.internal === 10)
                chat(27, 16);
            else if (g.internal === 12) {
                nav.killbutton("s6");
                chat(29, 16);
            }
            g.internal++;
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
            }, 16);
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
            cl.add("pj", "b");
            gv.set("rentOwed", 0);
            char.room(10);
            break;
        case "l2":
            char.room(10);
            break;
        case "s2":
            nav.killall();
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            nav.button({
                "type": "btn",
                "name": "s2",
                "left": 764,
                "top": 58,
                "width": 701,
                "height": 930,
                "image": "26_livingRoom/ll.png"
            }, 16);
            zcl.displayMain(-600, -200, .4, "clothes", true);
            break;
        case "s3":
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "s2",
                "left": 518,
                "top": 58,
                "width": 947,
                "height": 1022,
                "image": "16_livingRoom/s3.png"
            }, 16);
            break;
        case "s3x":
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "s2",
                "left": 518,
                "top": 58,
                "width": 947,
                "height": 1022,
                "image": "16_livingRoom/s3.png"
            }, 16);
            break;
        case "s4":
            nav.killall();
            nav.bg("16_livingRoom/s4.jpg");
            break;
        case "s5":
            nav.bg("16_livingRoom/s5.jpg");
            break;
        case "s6":
            nav.bg("16_livingRoom/s6.jpg");
            g.internal = 7;
            nav.button({
                "type": "btn",
                "name": "s6",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 16);
            break;
        case "s9":
            nav.killall();
            nav.bg("16_livingRoom/s9.jpg");
            break;
        case "s12":
            nav.bg("16_livingRoom/s12.jpg");
            break;
        case "s13":
            nav.bg("16_livingRoom/s13.jpg");
            break;
        case "s14":
            nav.bg("16_livingRoom/s14.jpg");
            break;
        case "s15":
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            nav.button({
                "type": "img",
                "name": "s6",
                "left": 613,
                "top": 58,
                "width": 852,
                "height": 1022,
                "image": "16_livingRoom/s15.png"
            }, 26);
            break;
        case "s16":
            gv.mod("receiveAnalFemale", 1);
            gv.mod("sissygasm", 1);
            gv.mod("loadSwollowed", 1);
            sc.setstep("landlord", -9);
            char.room(10);
            cl.stretchButt(null, 6);
            break;
        case "s16x":
            gv.mod("receiveAnalFemale", 1);
            gv.mod("sissygasm", 1);
            gv.mod("loadSwollowed", 1);
            char.room(10);
            cl.stretchButt(null, 6);
            break;
        case "myRoom":
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
            text: "Hey butthead, this part of the games hasn't been built yet.",
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
            text: "Enough you too. " + sc.n("me") + " I'm sorry, you are going through a lot right now. We all support you, don't we " +
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
            text: "Squeal!! I'm so excited to have another girl in the house! We're going to play dress up! I'm going to put on my night " +
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
        {
            chatID: 21,
            speaker: "landlord",
            text: "Have you lost your mind! Walking into MY HOUSE displaying yourself like that! Go to your room and put " +
                "some clothes on!",
            button: [
                { chatID: -1, text: "oooff", callback: "l2" }
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "So you want to walk around like a low class slut? As they say, act like a slut, get treated like a slut. " +
                "Come over here. ",
            button: [
                { chatID: 23, text: "huh?", callback: "s2" }
            ]
        },
        {
            chatID: 23,
            speaker: "landlord",
            text: "It's time to see how slutty you are girl. Bend over and point your pussy at me. Now.",
            button: [
                { chatID: 24, text: "Oh yes.", callback: "s3" }
            ]
        },
        {
            chatID: 24,
            speaker: "landlord",
            text: "You are an eager little whore. Let's see how eager you are when I get done with you. I have a " +
                "toy that I only use during special occasions. ",
            button: [
                { chatID: 25, text: "...", callback: "s4" }
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "I call it The Beast. I know you're afraid it won't be able to fit it in your tight little pussy. " +
                "Don't worry, I'll make it fit, even if I have to break your slutty hole. Nod when you're ready. ",
            button: [
                { chatID: 26, text: "*whimper*", callback: "s5" }
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "I know it's better to stretch and work up to such a large toy, but a proper slut is always ready " +
                "and has learned to accept that pain is part of their duty. Just try to relax and enjoy this. ",
            button: [
                { chatID: -1, text: "...", callback: "s6" }
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "That's my good girl. Just breathe for a bit while I you adjust. " +
                "You should be proud of yourself for taking such " +
                "a big cock. You're more of a slut than you know. ",
            button: [
                { chatID: 28, text: "*continue to cry*", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "landlord",
            text: "Believe me, I know it hurts You'll get used to it, " +
                "I've felt the pain myself. Just learn to enjoy it. " +
                "Now get ready to take it deep my sweet little girl. ",
            button: [
                { chatID: -1, text: "*Sobs softly*", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "landlord",
            text: "I bet you didn't know you could take it this deep. Now for the fun part where I fuck you with it. Ready? ",
            button: [
                { chatID: 30, text: "*Whimper*", callback: "s13" }
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "You seem to be enjoying yourself once you learned to relax and take this cock my little girl. I bet it " +
                "feel amazing! ",
            button: [
                { chatID: 31, text: "*Gasp* I think I'm going to cum!", callback: "s14" }
            ]
        },
        {
            chatID: 31,
            speaker: "landlord",
            text: "Awww how cute. Now lick it up like a good girl. ",
            button: [
                { chatID: 32, text: "Yes " + sc.n("landlord") , callback: "s15" }
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "I'm so proud of you. Now run upstairs and put some clothes on. This isn't a whore house. ",
            button: [
                { chatID: -1, text: "Ok", callback: "s16" }
            ]
        },
        {
            chatID: 33,
            speaker: "landlord",
            text: "What did I tell you about walking around here naked. Do you want the giant dildo again. ",
            button: [
                { chatID: 34, text: "Yes I do!", callback: "s3x" },
                { chatID: -1, text: "No. I'll go put on some clothes", callback: "myRoom" }
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "Here it comes my little slut. ",
            button: [
                { chatID: 35, text: "Yes!", callback: "s9" }
            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "I love the way you squeal.",
            button: [
                { chatID: 36, text: "Yes!", callback: "s12" }
            ]
        },
        {
            chatID: 36,
            speaker: "landlord",
            text: "I can feel your heart beat through the dildo",
            button: [
                { chatID: 37, text: "*groan*", callback: "s13" }
            ]
        },
        {
            chatID: 37,
            speaker: "landlord",
            text: "Now cum for " + sc.n("landlord") + " like a good little girl. ",
            button: [
                { chatID: 38, text: "*groan*", callback: "s14" }
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "And what do good girls do when there's cum on the floor?",
            button: [
                { chatID: 39, text: "Lick it up and swallow every drop!", callback: "s15" }
            ]
        },
        {
            chatID: 39,
            speaker: "landlord",
            text: "Good girl. Now scram and let me watch my shows. ",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "s16x" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};