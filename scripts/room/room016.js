//living room
var room16 = {};

room16.main = function () {
    let lolapostcult = gv.get("lolapostcult");
    if (lolapostcult !== null) {
        if (lolapostcult === "wife") {
            gv.set("lolapostcult", null);
            sc.completeMissionTask("lola", "*wife", 0);
            nav.button({
                "type": "img",
                "name": "wife",
                "left": 589,
                "top": 14,
                "width": 768,
                "height": 1066,
                "image": "16_livingRoom/wife0.webp"
            }, 16);
            chat(45, 16);
            return;
        }
        else if (lolapostcult === "tom") {
            gv.set("lolapostcult", null);
            nav.button({
                "type": "img",
                "name": "wife",
                "left": 589,
                "top": 14,
                "width": 768,
                "height": 1066,
                "image": "16_livingRoom/tom0.webp"
            }, 16);
            chat(52, 16);
        }
        else {
            gv.set("lolapostcult", null);
            nav.bg("16_livingRoom/cumdump0.webp");
            fame.moanAnimate("center");
            chat(62, 16);
            return;
        }
    }
    else if (sc.getMissionTask("landlord", "misc", 4).inProgress) {
        nav.button({
            "type": "img",
            "name": "caught",
            "left": 853,
            "top": 21,
            "width": 640,
            "height": 1059,
            "image": "16_livingRoom/llmad.webp"
        }, 16);
        chat(40, 16);
        return;
    }
    else if (sc.getMissionTask("landlord", "misc", 5).inProgress) {
        if ((g.prevRoom === 0 && !daily.get("momchastitycheck")) || cl.c.chastity === null) {
            daily.set("momchastitycheck");
            zcl.displayMain(200, 700, .08, "clothes", false);
            nav.button({
                "type": "img",
                "name": "inspect",
                "left": 349,
                "top": 110,
                "width": 540,
                "height": 970,
                "image": "16_livingRoom/inspect0.webp"
            }, 16);
            chat(42, 16);
            return;
        }
    }
    var btnList = new Array();
    var thisSisterRoomID = sc.getTimeline("lola");
    var thisMomRoomID = sc.getTimeline("landlord");
    var thisBigguyId = sc.getTimeline("bigguy");
    //var llst = sc.getstep("landlord");
    if (!sc.getSecret("lola").secretOut && (cl.isCrossdressing() || cl.c.chest > 2)) {
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
            if (sc.getMission("lola", "*cumdump").inProgress) {
                btnList.push({
                    "type": "btn",
                    "name": "living",
                    "left": 1059,
                    "top": 200,
                    "width": 351,
                    "height": 385,
                    "title": "Living Room",
                    "image": "16_livingRoom/livingP.png",
                    "night": "16_livingRoom/livingPN.png"
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
                    "title": "Living Room",
                    "image": "16_livingRoom/livingM.png",
                    "night": "16_livingRoom/livingMN.png"
                });
            }
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
        case "cumdump1":
        case "cumdump3":
        case "cumdump6":
        case "cumdump7":
            nav.bg("16_livingRoom/" + callback + ".webp");
            break;
        case "cumdump5":
            nav.kill();
            nav.bg("16_livingRoom/" + callback + ".webp");
            break;
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
                "type": "img",
                "name": "motherRobe",
                "left": 844,
                "top": 195,
                "width": 499,
                "height": 885,
                "image": "14_motherRoom/14_motherRobe.png"
            }, 16);
            zcl.displayMain(150, 900, .19, "clothes", true);
            break;
        case "girl2":
            cl.nude();
            nav.modbutton("dressup", "14_motherRoom/14_motherRobe.png", null, null);
            zcl.displayMain(150, 900, .19, "clothes", true);
            break;
        case "girl3":
            cl.c.pj = "b";
            cl.display();
            zcl.displayMain(150, 900, .19, "clothes", true);
            break;
        case "girl4":
            zcl.displayMain(150, 900, .19, "clothes", false);
            break;
        case "girl5":
            sc.modSecret("lola", 100);
            sc.completeMissionTask("landlord", "sissy", 0);
            sc.completeMissionTask("lola", "sissy", 0);
            sc.completeMissionTask("eva", "sissy", 0);
            cl.add("pj", "b");
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
        case "inspect":
            nav.killbutton("inspect");
            cl.showdick();
            zcl.displayMain(200, 700, .08, "clothes", false);
            nav.button({
                "type": "img",
                "name": "inspect",
                "left": 575,
                "top": 540,
                "width": 470,
                "height": 540,
                "image": "16_livingRoom/inspect.webp"
            }, 16);
            if (cl.c.chastity !== null)
                chat(43, 16);
            else
                chat(44, 16);
            break;
        case "resetundo":
            cl.undo();
            char.room(16);
            break;
        case "spank":
            cl.undo();
            g.pass = "chastity";
            char.room(21);
            break;
        case "wife1":
            nav.modbutton("wife", "16_livingRoom/wife1.webp", null, null);
            break;
        case "cumdump2":
            fame.moanAnimateStop();
            nav.bg("16_livingRoom/cumdump2.webp");
            break;
        case "cumdump4":
            nav.bg("16_livingRoom/cumdump4.webp");
            zcl.bjpov(-150, 500, .7, "closed", false);
            break;
        case "cumdump8":
            if (cl.hasoutfit("nude") === null) {
                if (cl.c.cock === 5)
                    chat(73, 16);
                else
                    chat(74, 16);
            }
            else {
                cl.nude();
                chat(72, 16);
            }
            break;
        case "cumdump9":
            if (cl.c.cock === 5)
                chat(73, 16);
            else
                chat(74, 16);
            break;
        case "leave":
            char.room(0);
            break;
        case "reset":
            char.room(16);
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
            text: "It's pretty late; I should head to bed.",
            button: []
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "I'm catching up on my soaps; why don't you go out and play?",
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
            text: sc.n("eva") + " and I are so excited you're allowed back! Quick, come upstairs to our room!",
            button: [
                { chatID: -1, text: "Follow Lola", callback: "upstairs" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "Oh my, " + sc.n("me") + ", there's something different about you.",
            button: [
                { chatID: 7, text: "oh, hahaha, what?", callback: "" }
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
            text: "I am quite shocked. You were a boy yesterday, but today it looks like you've become a girl.",
            button: [
                { chatID: 9, text: "Well, it's something I've been exploring", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "lola",
            text: "I support you! We should have known this entire time. I'm so happy now I have two " + sc.n("el") + ". I feel so bad I never knew until now. It must have been so hard having these feelings and not telling anyone.",
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
            text: sc.n("eva") + "!! Don't be mean! " + sc.n("me") + " is going through a lot right now and you're just being a butt...",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Enough, you two. " + sc.n("me") + ", I'm sorry you're going through a lot right now. We all support you, don't we, " + sc.n("eva") + "?",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "eva",
            text: "Yes " + sc.n("landlord") + ".",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "I know this is hard, but we are all going to help you with your change. I'm so happy to have a house full of girls. We're going to help you on your journey to becoming our little girl. Girls, I'm going to take " + sc.n("me") + " and help her start her journey. You girls, run along.",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "Yes " + sc.n("landlord") + ". " + sc.n("me") + ", we're really happy to have a new girl around the house and we'll help you with anything you need!",
            button: [
                { chatID: 16, text: "Thanks " + sc.n("lola") + ", I'm glad you support me.", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Okay, follow me.",
            button: [
                { chatID: 17, text: "ok", callback: "girl1" }
            ]
        },
        {
            chatID: 17,
            speaker: "landlord",
            text: "Squeal! I'm so excited to have another girl in the house! We're going to play dress up! I'm going to put on my nightgown; you strip off those nasty clothes!",
            button: [
                { chatID: 18, text: "Yes!", callback: "girl2" }
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "You know, you make a very pretty girl, and pretty girls need something sexy to sleep in! I have an extra nightgown from when I was much slimmer; you can have it. Try it on, let me see it!",
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
            text: "Have you lost your mind? Walking into MY HOUSE displaying yourself like that! Go to your room and put some clothes on!",
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
            text: "It's time to see how slutty you are, girl. Bend over and point your pussy at me. Now.",
            button: [
                { chatID: 24, text: "Oh yes.", callback: "s3" }
            ]
        },
        {
            chatID: 24,
            speaker: "landlord",
            text: "You are an eager little whore. Let's see how eager you are when I get done with you. I have a toy that I only use during special occasions.",
            button: [
                { chatID: 25, text: "...", callback: "s4" }
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "I call it The Beast. I know you're afraid it won't be able to fit in your tight little pussy. Don't worry, I'll make it fit, even if I have to break your slutty hole. Nod when you're ready.",
            button: [
                { chatID: 26, text: "*whimper*", callback: "s5" }
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "I know it's better to stretch and work up to such a large toy, but a proper slut is always ready and has learned to accept that pain is part of their duty. Just try to relax and enjoy this.",
            button: [
                { chatID: -1, text: "...", callback: "s6" }
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "That's my good girl. Just breathe for a bit while you adjust. You should be proud of yourself for taking such a big cock. You're more of a slut than you know.",
            button: [
                { chatID: 28, text: "*continue to cry*", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "landlord",
            text: "Believe me, I know it hurts. You'll get used to it; I've felt the pain myself. Just learn to enjoy it. Now get ready to take it deep, my sweet little girl.",
            button: [
                { chatID: -1, text: "*Sobs softly*", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "landlord",
            text: "I bet you didn't know you could take it this deep. Now for the fun part where I fuck you with it. Ready?",
            button: [
                { chatID: 30, text: "*Whimper*", callback: "s13" }
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "You seem to be enjoying yourself once you learned to relax and take this cock, my little girl. I bet it feels amazing!",
            button: [
                { chatID: 31, text: "*Gasp* I think I'm going to cum!", callback: "s14" }
            ]
        },
        {
            chatID: 31,
            speaker: "landlord",
            text: "Awww, how cute. Now lick it up like a good girl.",
            button: [
                { chatID: 32, text: "Yes " + sc.n("landlord"), callback: "s15" }
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "I'm so proud of you. Now run upstairs and put some clothes on. This isn't a whore house.",
            button: [
                { chatID: -1, text: "Ok", callback: "s16" }
            ]
        },
        {
            chatID: 33,
            speaker: "landlord",
            text: "What did I tell you about walking around here naked? Do you want the giant dildo again?",
            button: [
                { chatID: 34, text: "Yes I do!", callback: "s3x" },
                { chatID: -1, text: "No. I'll go put on some clothes", callback: "myRoom" }
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "Here it comes, my little slut.",
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
            text: "I can feel your heart beat through the dildo.",
            button: [
                { chatID: 37, text: "*groan*", callback: "s13" }
            ]
        },
        {
            chatID: 37,
            speaker: "landlord",
            text: "Now cum for " + sc.n("landlord") + " like a good little girl.",
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
            text: "Good girl. Now scram and let me watch my shows.",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "s16x" }
            ]
        },
        {
            chatID: 40,
            speaker: "landlord",
            text: "You've lost your mind thinking you can just waltz in here after what you pulled. I'm not ready to let you back into MY house!",
            button: [
                { chatID: 41, text: "Yes " + sc.n("landlord"), callback: "leave" }
            ]
        },
        {
            chatID: 41,
            speaker: "thinking",
            text: "Maybe if I catch her at work she'll be more open to listening to me.",
            button: [
                { chatID: -1, text: "....", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "landlord",
            text: "Let's check to make sure you're wearing your chastity cage if you're coming into my home. Show it to me.",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord") + ".", callback: "inspect" }
            ]
        },
        {
            chatID: 43,
            speaker: "landlord",
            text: "That's a good " + gender.pronoun("girl") + ".",
            button: [
                { chatID: -1, text: "🤭", callback: "resetundo" }
            ]
        },
        {
            chatID: 44,
            speaker: "landlord",
            text: "You're not wearing your chastity cage!!! Come with me!",
            button: [
                { chatID: -1, text: "ok", callback: "spank" }
            ]
        },
        {
            chatID: 45,
            speaker: "landlord",
            text: "*eeep* They let you go?",
            button: [
                { chatID: 46, text: "...", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "lola",
            text: "I was so worried! *sniffle* I thought I would never see you again! ",
            button: [
                { chatID: 47, text: "...you're pregnant", callback: "" }
            ]
        },
        {
            chatID: 47,
            speaker: "eva",
            text: "Looks like the great detective solved this case, you big dummy. You're next big mystery " +
                "is who knocked her up! ",
            button: [
                { chatID: 48, text: "who?", callback: "wife1" }
            ]
        },
        {
            chatID: 48,
            speaker: "lola",
            text: "I'm so sorry! I just didn't know what to do when I found out! I was just so afriad you " +
                "would never speak to me again once you found out. And now this. You're the only person " +
                "I've ever slept with. Please don't be mad at me!",
            button: [
                { chatID: 49, text: "I'm not mad", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "landlord",
            text: "You're damn right you're not mad. I know you're going to step up and do what's right for " +
                "my little girl! ",
            button: [
                { chatID: 50, text: "oh. yeah. of course. ", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "landlord",
            text: "It does my heart good to hear that. From now on you and " + sc.n("lola") + " are going to " +
                "share her room. " + sc.n("eva") + " will get your room. I'm sure she could use the privacy. Also " +
                "you can attend to her needs now. A pregnant woman has many needs that have to be met. ",
            button: [
                { chatID: 51, text: "...", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "landlord",
            text: "Now I know you had a terrible ordeal, but but we're just going to have to keep going in life. " +
                "Now I'm sure you two want some alone time in your new room. It's so good having you back.  ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 52,
            speaker: "landlord",
            text: "*eeep* They let you go?",
            button: [
                { chatID: 53, text: "...", callback: "" }
            ]
        },
        {
            chatID: 53,
            speaker: "lola",
            text: "I was so worried! *sniffle* I thought I would never see you again! ",
            button: [
                { chatID: 54, text: "...", callback: "" }
            ]
        },
        {
            chatID: 54,
            speaker: "eva",
            text: "For real! So glad you're back, this place was smelling too nice without your farts around.  ",
            button: [
                { chatID: 55, text: "...", callback: "" }
            ]
        },
        {
            chatID: 55,
            speaker: "tom",
            text: "Yeah. Welcome back buddy!",
            button: [
                { chatID: 56, text: "Why are you here?", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "lola",
            text: "Oh. You know " + sc.n("tom") + ". He's my fiance! We're set to be married! ",
            button: [
                { chatID: 57, text: "oh", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "landlord",
            text: "Oh honey. When we heard about what happened we thought you were gone for good. We all " +
                "cried for a week. Luckily " + sc.n("tom") + " was here for " + sc.n("lola") + " and really " +
                "he was here for all of us. And when we found out he was living on the street we invited " +
                "him into our home. Now " + sc.n("lola") + "'s my little girl, but she's not a little " +
                "girl anymore. That's why I let him sleep in " + sc.n("lola") + "'s room. ",
            button: [
                { chatID: 58, text: "Cool, so where does " + sc.n("eva") + " sleep? ", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "eva",
            text: "I got your smelly room, fart breath! By the way, your collection of dildos smell like " +
                "ass you pervert! ",
            button: [
                { chatID: 59, text: "Don't touch those you troll faced frog licker! ", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "landlord",
            text: "*sigh* So I can't just kick " + sc.n("tom") + " into the streets. And there's no way I'm " +
                "going to make either of you leave, so " + sc.n("eva") + " and " + sc.n("me") + " will just " +
                "have to share your room. It's only for now until these two can get their own place. ",
            button: [
                { chatID: 60, text: "Wha? ", callback: "" }
            ]
        },
        {
            chatID: 60,
            speaker: "eva",
            text: "Ewwww! It's bad enough I had to move out of my own room, now I have to share a room with " +
                "this pimple popper!",
            button: [
                { chatID: 61, text: "Yeah! That's my room! ", callback: "" }
            ]
        },
        {
            chatID: 61,
            speaker: "landlord",
            text: "Enough. I don't want to hear it. You two will share and that's the end of it. " + sc.n("me") +
                " we're all so glad you're back if you need anything just let us know. ",
            button: [
                { chatID: -1, text: "Thanks " + sc.n("landlord") + ". ", callback: "reset" }
            ]
        },
        {
            chatID: 62,
            speaker: "me",
            text: "What the hell?",
            button: [
                { chatID: 63, text: "...", callback: "cumdump1" }
            ]
        },
        {
            chatID: 63,
            speaker: "lola",
            text: "Oh my god! You're back! One second, just let this guy dump his load in me " +
                "so we can talk. Don't go anywhere! ",
            button: [
                { chatID: 64, text: "...", callback: "cumdump2" }
            ]
        },
        {
            chatID: 64,
            speaker: "thinking",
            text: "What the hell! Where's my " + sc.n("landlord") + "? She would kill any of us if she " +
                "caught us fucking on her couch! And " + sc.n("lola") + " just taking cock without any " +
                "embarrasement. Also who the hell is that? ",
            button: [
                { chatID: 65, text: "...", callback: "cumdump3" }
            ]
        },
        {
            chatID: 65,
            speaker: "cult",
            text: "Oh hey! It's the new slut! Clean your " + g.makeSingular(sc.n("el")) + "'s pussy off " +
                "my cock slut!",
            button: [
                { chatID: 66, text: "Hey! I'm not....", callback: "cumdump4" }
            ]
        },
        {
            chatID: 66,
            speaker: "cult",
            text: "Good slut. Clean that pussy juice off my cock",
            button: [
                { chatID: 67, text: "Gluk!", callback: "cumdump5" }
            ]
        },
        {
            chatID: 67,
            speaker: "cult",
            text: "I've got to get home. I'll see you two sluts later heheh. ",
            button: [
                { chatID: 68, text: "....", callback: "cumdump6" }
            ]
        },
        {
            chatID: 68,
            speaker: "eva",
            text: "Hey! I thought I heard your voice! Welcome home booger butt! It's going to be so great having you " +
                "here! So tired of getting fucked, like all the time! A pervert like you is totally going " +
                "to help! ",
            button: [
                { chatID: 69, text: "....", callback: "" }
            ]
        },
        {
            chatID: 69,
            speaker: "lola",
            text: "Oh my. Yes! I tried to read a book in my room, but " + sc.n("eva") + "'s so loud " +
                "when she has sex. So I came down here to read and that guy just walked in and bent me " +
                "over. I'll never finish my book! ",
            button: [
                { chatID: 70, text: "....", callback: "cumdump7" }
            ]
        },
        {
            chatID: 70,
            speaker: "landlord",
            text: "Oh thank god you're back! I was so worried! All three of my little girls are safe at home! ",
            button: [
                { chatID: 71, text: "You're ALL pregnant?!?!", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "landlord",
            text: "*sigh* Yes. Again. It's a long story, but " + sc.n("bigguy") + " said a girl's purpose is to be bred. If a girl " +
                "can't be bred she has no purpose. He then took all our birth control pills and flushed them down " +
                "the toilet and invited all his friends at at CUM over. Made me put everything in his name. It was a rough losing my Sperm " +
                "Bank, but we are better now that we are cum receptacles. Gives life a new meaning. No " +
                "need to worry about silly things like school or work. We're better as mothers. ",
            button: [
                { chatID: -1, text: "but...", callback: "cumdump8" }
            ]
        },
        {
            chatID: 72,
            speaker: "landlord",
            text: "Shhh. No thinking. You're wearing too many clothes to be in this house. " + sc.n("bigguy") +
                " also said cum sluts don't wear clothes at home. Now be a good little girl and strip off " +
                "those nasty clothes. ",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord") + " [strip slut]", callback: "cumdump9" },
                { chatID: -1, text: "No way! Run away from home! ", callback: "leave" },
            ]
        },
        {
            chatID: 73,
            speaker: "landlord",
            text: "Oh my! They really did give you a vagina! I can't wait for the boys to get you pregnant! " +
                "You're going to look so cute with a baby in you! It really does make the skin glow. I'm sure " +
                "the boys will be so excited to see who can impregnate you first. When " + sc.n("bigguy") +
                " let the boys come over the first time, poor " + sc.n("lola") + " had so many penises ejaculate " +
                "in her vagina she kept slipping on the all the cum leaking out of her. ",
            button: [
                { chatID: 75, text: "...", callback: "" },
            ]
        },
        {
            chatID: 74,
            speaker: "landlord",
            text: "Don't worry about not having a vagina. These boys that come over will be more than " +
                "happy to try and breed you. It will be so nice having another set of holes around here. " +
                "I can't tell you enough how much I hate it when they put their penis in my anus. They're " +
                "going to just love you. ",
            button: [
                { chatID: 75, text: "...", callback: "" },
            ]
        },
        {
            chatID: 75,
            speaker: "landlord",
            text: "Remember, a girl never says no to the boys. We're happiest when they're happy. Now " +
                "you three run along and play. I'm going to catch up on my shows while I have a chance. ",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord") + ". ", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};