﻿//Room name
var room211 = {};
room211.main = function () {
    var classesPassed = sissy.getNumPassed(); 
    var philbert = sc.taskGetStep("philbert", "bully");
    if (!sissy.st[0].ach) { //firstday
        gv.set("sissySchoolClass", "firstday");
        char.room(209);
    }
    else if (classesPassed === 13) { //fix this
        chat(1, 211);
    }
    else if (classesPassed > 4 && philbert < 0) {
        sc.startMission("philbert", "bully");
        sc.completeMissionTask("philbert", "bully", 0, true);
        nav.bg("211_meeting/event0.jpg");
        chat(15, 211);
    }
    else if (philbert === 2) {
        sc.completeMissionTask("philbert", "bully", 2, true);
        nav.bg("211_meeting/event1_0.jpg");
        chat(22, 211);
    }
    else if (classesPassed > 4) {
        if (cl.c.shirt !== "ss") {
            sc.select("icon_dress", "211_meeting/icon_dress.png", 0);
            nav.bg("211_meeting/change.jpg");
        }
        else
            room211.btnclick("drawGroups");
    }
    else {
        nav.bg("211_meeting/filled.jpg");
        nav.button({
            "type": "btn",
            "name": "ralph",
            "left": 1267,
            "top": 450,
            "width": 128,
            "height": 404,
            "image": "211_meeting/ralph.png",
            "title": "Chat"
        }, 211);
        nav.button({
            "type": "btn",
            "name": "philbert",
            "left": 333,
            "top": 369,
            "width": 348,
            "height": 542,
            "image": "211_meeting/philbert.png",
            "title": "Chat"
        }, 211);

        nav.button({
            "type": "btn",
            "name": "sporty",
            "left": 1501,
            "top": 533,
            "width": 419,
            "height": 547,
            "image": "211_meeting/sporty.png",
            "title": "Chat"
        }, 211);
        nav.button({
            "type": "btn",
            "name": "jeremy",
            "left": 40,
            "top": 477,
            "width": 468,
            "height": 603,
            "image": "211_meeting/jeremy.png",
            "title": "Chat"
        }, 211);


        nav.button({
            "type": "btn",
            "name": "classSelect",
            "left": 716,
            "top": 359,
            "width": 464,
            "height": 208,
            "image": "211_meeting/class.png",
            "title": "Class selection screen"
        }, 211);
        nav.button({
            "type": "btn",
            "name": "elevator",
            "left": 1486,
            "top": 345,
            "width": 130,
            "height": 395,
            "image": "211_meeting/elevator.png",
            "title": "Elevator"
        }, 211);
    }
};

room211.btnclick = function (name) {
    var classespassed = sissy.getNumPassed();
    switch (name) {
        case "classSelect":
            char.room(210);
            break;
        case "elevator":
            var sissySchoolClass = gv.get("sissySchoolClass");
            nav.killall();
            nav.bg("211_meeting/elevator.jpg");
            $.each(["button_penthouse", "button_white", "button_red", "button_pink", "button_lobby", "button_black"], function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": v,
                    "left": 835,
                    "top": 201 + (i * 101),
                    "width": 410,
                    "height": 80,
                    "image": "211_meeting/" + v + ".png"
                }, 211);
            });
            if (sissySchoolClass === null) {
                chat(0, 211);
            }
            else {
                g.internal = sissy.get(sissySchoolClass).name;
                chat(999, 211);
            }
            break;
        case "icon_dress":
            levels.mod("xdress", 20, 7);
            cl.c.bra = "p";
            cl.c.pants = "ss";
            cl.c.shirt = "ss";
            cl.c.shoes = "ss";
            cl.c.socks = "ss";
            cl.display();
            nav.killbutton("icon_dress");
            nav.killbutton("icon_dressbg");
            char.room(211);
            break;
        case "initviewtrainee":
            cl.c.bra = "p";
            cl.c.pants = "ss";
            cl.c.shirt = "ss";
            cl.c.shoes = "ss";
            cl.c.socks = "ss";
            cl.display();
            break;
        case "ralph":
            switch (classespassed) {
                case 2: chat(3, 211); break;
                case 3: chat(4, 211); break;
                case 4: chat(5, 211); break;
                default: chat(2, 211); break;
            }
            break;
        case "jeremy":
            switch (classespassed) {
                case 2: chat(6, 211); break;
                case 3: chat(7, 211); break;
                case 4: chat(8, 211); break;
                default: chat(2, 211); break;
            }
            break;
        case "sporty":
            switch (classespassed) {
                case 2: chat(9, 211); break;
                case 3: chat(10, 211); break;
                case 4: chat(11, 211); break;
                default: chat(2, 211); break;
            }
            break;
        case "philbert":
            switch (classespassed) {
                case 2: chat(12, 211); break;
                case 3: chat(13, 211); break;
                case 4: chat(14, 211); break;
                default: chat(2, 211); break;
            }
            break;
        case "drawGroups":
            nav.bg("211_meeting/bg_traineeGroup.jpg");
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "group1",
                "left": 380,
                "top": 379,
                "width": 289,
                "height": 531,
                "image": "211_meeting/group1.png"
            }, 211);
            nav.button({
                "type": "btn",
                "name": "group2",
                "left": 1516,
                "top": 473,
                "width": 391,
                "height": 607,
                "image": "211_meeting/group2.png"
            }, 211);
            nav.button({
                "type": "btn",
                "name": "group3",
                "left": 746,
                "top": 671,
                "width": 405,
                "height": 98,
                "image": "211_meeting/group3.png"
            }, 211);
            nav.button({
                "type": "btn",
                "name": "group4",
                "left": 119,
                "top": 463,
                "width": 409,
                "height": 617,
                "image": "211_meeting/group4.png"
            }, 211);
            nav.button({
                "type": "btn",
                "name": "group5",
                "left": 1239,
                "top": 417,
                "width": 151,
                "height": 518,
                "image": "211_meeting/group5.png"
            }, 211);
            nav.button({
                "type": "btn",
                "name": "classSelect",
                "left": 716,
                "top": 359,
                "width": 464,
                "height": 208,
                "image": "211_meeting/class.png",
                "title": "Class selection screen"
            }, 211);
            nav.button({
                "type": "btn",
                "name": "elevator",
                "left": 1486,
                "top": 345,
                "width": 130,
                "height": 395,
                "image": "211_meeting/elevator.png",
                "title": "Elevator"
            }, 211);
            break;
        case "group1":
            chat(501, 211);
            break;
        case "group2":
            chat(502, 211);
            break;
        case "group3":
            chat(503, 211);
            break;
        case "group4":
            chat(504, 211);
            break;
        case "group5":
            chat(505, 211);
            break;
        default:
            break;
    }
};

room211.chatcatch = function (callback) {
    switch (callback) {
        case "event0_1":
        case "event0_2":
        case "event0_3":
            nav.bg("211_meeting/" + callback + ".jpg");
            break;
        case "gotoclass":
            char.room(sissy.get(gv.get("sissySchoolClass")).room);
            break;
        case "reset":
            char.room(211);
            break;
        case "leave":
            char.room(0);
            break;
        case "initviewtrainee":
            room211.btnclick("initviewtrainee");
            room211.btnclick("drawGroups");
            break;
        default:
            break;
    }
};

room211.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "thinking",
            text: "I should go to my class. ",
            button: [
                { chatID: -1, text: "Go to " + g.internal + ". ", callback: "gotoclass" },
                //{ chatID: -1, text: "I'm just going to check out the different floors. ", callback: "" },
            ]
        };
    }
    else if (chatID === 501) {
        return {
            chatID: 501,
            speaker: "me",
            text: "Group 1",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        };
    }
    else if (chatID === 502) {
        return {
            chatID: 501,
            speaker: "me",
            text: "Group 2",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        };
    }
    else if (chatID === 503) {
        return {
            chatID: 501,
            speaker: "me",
            text: "Group 3",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        };
    }
    else if (chatID === 504) {
        return {
            chatID: 501,
            speaker: "me",
            text: "Group 4",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        };
    }
    else if (chatID === 505) {
        return {
            chatID: 501,
            speaker: "me",
            text: "Group 5",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "I haven't signed up for any classes. I should return to the Lobby and select my class. ",
                button: [
                    { chatID: -1, text: "Return to Lobby", callback: "reset" },
                    //{ chatID: -1, text: "I'm just going to check out the different floors. ", callback: "" },
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "You have reached the end of this release. There's no more left to discover. ",
                button: [
                    { chatID: -1, text: "Return to Lobby", callback: "leave" },
                    //{ chatID: -1, text: "I'm just going to check out the different floors. ", callback: "" },
                ]
            },
            {
                chatID: 2,
                speaker: "!blank",
                text: "Developer note: Working on this still",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 3,
                speaker: "ralph",
                text: "I'm so nervous! I hope we don't have to do anything weird.",
                button: [
                    { chatID: -1, text: "Me too", callback: "" },
                ]
            },
            {
                chatID: 4,
                speaker: "ralph",
                text: "I did not like being naked with everyone watching! I'm hoping we get to " +
                    "keep our clothes on for the next class. ",
                button: [
                    { chatID: -1, text: "Me too", callback: "" },
                ]
            },
            {
                chatID: 5,
                speaker: "ralph",
                text: "I tried using the lube to play with my.. you know. It felt so weird and slimy. ",
                button: [
                    { chatID: -1, text: "Hahaha yeah.", callback: "" },
                ]
            },
            {
                chatID: 6,
                speaker: "!thomas",
                text: "I quite looking forward to this. I've always felt a bit feminine, maybe " +
                    "this is the thing that pushes me to the real me. ",
                button: [
                    { chatID: -1, text: "Me too", callback: "" },
                ]
            },
            {
                chatID: 7,
                speaker: "!kareem",
                text: "Man! I've never seen so many pasty white asses before. You all need some " +
                    "sun! ",
                button: [
                    { chatID: -1, text: "Hahaha yeah. ", callback: "" },
                ]
            },
            {
                chatID: 8,
                speaker: "!thomas",
                text: "I'm so embarrased from that last class. But in a werid way it's arousing. " +
                    "Like really arousing. I don't know why I'm sharing this, but it's nice to talk " +
                    "to someone that's going though this with me. ",
                button: [
                    { chatID: -1, text: "Hahaha yeah.", callback: "" },
                ]
            },
            {
                chatID: 9,
                speaker: "!chris",
                text: "Oh hi. I'm suprised we're all still here. I almost didn't come, I'm so scared " +
                    "of what's going to happen. ",
                button: [
                    { chatID: -1, text: "I'm a little scared too, but in a good way. Like when when a skydiver jumps out of a plane.", callback: "" },
                ]
            },
            {
                chatID: 10,
                speaker: "!sporty",
                text: "I know it's wrong, and don't tell anyone, but I loved seeing all the penises! " +
                    "I hope we get to shower again. *sigh*",
                button: [
                    { chatID: -1, text: "...ok", callback: "" },
                ]
            },
            {
                chatID: 11,
                speaker: "!sporty",
                text: "That lube was fine, but I really prefer a white colored lube. I like to pretend " +
                    "it's cum leaking out of me. ",
                button: [
                    { chatID: -1, text: "That's oddly hot. ", callback: "" },
                ]
            },
            {
                chatID: 12,
                speaker: "!philbert",
                text: "...so this one time I was totally getting blown and she sticks a finger in " +
                    "my ass. And wow! I ended up blowing my load in seconds, so that's why I thought " +
                    "this may be cool. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "!philbert",
                text: "Hahaha Timothy! I saw you checking out my cock! I bet you liked what you saw! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 14,
                speaker: "!philbert",
                text: "I'm so glad we got some free lube. I ran into this older chick, and when I tried fucking " +
                    "her she said she needed some lube. totally able to get my nut! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "!chris",
                text: "Stop pulling my head down! I'm not going to suck you off in front of everyone! ",
                button: [
                    { chatID: 16, text: "huh?", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "!philbert",
                text: "Then why did you touch my dick? It's ok. We all know you want to.",
                button: [
                    { chatID: 17, text: "...", callback: "event0_1" },
                ]
            },
            {
                chatID: 17,
                speaker: "!chris",
                text: "You moved it at me when I was getting dressed! ",
                button: [
                    { chatID: 18, text: "...", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "!philbert",
                text: "Hahaha stupid fucking sissy! Admit it. You love the cock.  ",
                button: [
                    { chatID: 19, text: "...", callback: "event0_2" },
                ]
            },
            {
                chatID: 19,
                speaker: "!kareem",
                text: "Hey! Leave 'em alone. We all get bullied enough on the outside, we " +
                    "shouldn't get bullied here, on the inside. My older brother got bullied, beat " +
                    "him pretty bad, and now he won't leave the house. I wasn't there for him then, " +
                    "but I'm here now. Ain't no one getting bullied if I can help it.",
                button: [
                    { chatID: 20, text: "...", callback: "" },
                ]
            },
            {
                chatID: 20,
                speaker: "!philbert",
                text: "I was just messing around. It's all cool, I didn't mean anything by it. " +
                    "I'm just going to finish getting dressed. ",
                button: [
                    { chatID: 21, text: "...", callback: "" },
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "That Philbert is such a bully! I'm glad Kareem stood up to him. I don't " +
                    "know how far Philbert would have made Chris suck his dick in front of everyone " +
                    "Oh well, I better get dressed too. ",
                button: [
                    { chatID: -1, text: "...", callback: "initviewtrainee" },
                ]
            },
            {
                chatID: 22,
                speaker: "philbert",
                text: "Hey everyone! This loser sucked my dick in class. I think we have the " +
                    "queen sissy right here! ",
                button: [
                    { chatID: 23, text: "Hey Hey! What. No I didn't!", callback: "" },
                ]
            },
            {
                chatID: 23,
                speaker: "philbert",
                text: "You can lie all you want. Everyone knows what an sissy slut you are! ",
                button: [
                    { chatID: 24, text: "Put me down! You're going to rip my panties! ", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "philbert",
                text: "Ok slut! You need to get changed into you sissy outfit anyway. ",
                button: [
                    { chatID: -1, text: "hrumph", callback: "initviewtrainee" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};