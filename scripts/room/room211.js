//Room name
var room211 = {};
room211.main = function () {
    if (sissy.st[21].ach) {
        nav.bg("211_meeting/bg_empty.jpg");
        nav.button({
            "type": "btn",
            "name": "elevator-x",
            "left": 1486,
            "top": 345,
            "width": 130,
            "height": 395,
            "image": "211_meeting/elevator.png",
            "title": "Elevator"
        }, 211);
        nav.buildnav([207, 0]);
        if (sissy.st[21].ach) {
            if (sc.getMissionTask("martha", "sissy", 1).notStarted) {
                sc.completeMissionTask("martha", "sissy", 1);
                chat(38, 211);
            }
        }
        return;
    }
    if (gv.get("sissySchoolClass") === "finalx" && future.get("sissyfinal") > -1) {
        nav.bg("200_frontOffice/bg.jpg");
        chat(37, 211);
        return;
    }
    //var classesPassed = sissy.getNumPassed();
    
    var philbert = sc.taskGetStep("philbert", "bully");
    var hasFinalSissyOutfit = cl.hasClothing("shirt", "sq");

    //Fix for past miss - remove at future date
    if (!sc.char[sc.i("p")].show) {
        sc.show("p");
        sc.modSecret("p", 100);
        sc.show("martha");
        sc.modSecret("martha", 100);
        sc.show("black");
        sc.modSecret("black", 100);
    }

    if (!sissy.st[0].ach) { //firstday
        gv.set("sissySchoolClass", "firstday");
        sc.show("philbert");
        sc.modSecret("philbert", 100);
        sc.show("ralph");
        sc.modSecret("ralph", 100);
        sc.show("sporty");
        sc.modSecret("sporty", 100);
        sc.show("p");
        sc.modSecret("p", 100);
        sc.show("martha");
        sc.modSecret("martha", 100);
        sc.show("black");
        sc.modSecret("black", 100);
        sc.startMissionTask("priest", "confession", 8);
        char.room(209);
    }
    else if (sissy.st[10].ach && !hasFinalSissyOutfit) {
        nav.bg("211_meeting/postTest.jpg");
        chat(25, 211);
    }
    else if (sissy.st[15].ach && !daily.get("pills")) {
        daily.set("pills");
        nav.bg("211_meeting/pills.jpg");
        if (missy.get("sissySuppositories") === 0) {
            missy.mod("sissySuppositories", 1);
            chat(30, 211);
            return;
        }
        else {
            missy.mod("sissySuppositories", 1);
            chat(35, 211);
            return;
        }
    }
    else if (sissy.st[19].ach && philbert < 0) {
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
    else if (sissy.st[19].ach && !sissy.st[10].ach) {
        if (cl.c.shirt !== "ss") {
            sc.select("icon_dress", "211_meeting/icon_dress.png", 0);
            nav.bg("211_meeting/change.jpg");
        }
        else
            room211.btnclick("drawGroups");
    }
    else if (sissy.st[10].ach) {
        if (cl.c.shirt !== "sq") {
            if (cl.c.chest < 2)
                nav.bg("211_meeting/dressing0.jpg");
            else if (cl.c.chest < 4)
                nav.bg("211_meeting/dressing1.jpg");
            else
                nav.bg("211_meeting/dressing2.jpg");
            sc.select("icon_dress1", "211_meeting/icon_dress1.png", 0);
            return;
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
        case "elevator-x":
            nav.bg("211_meeting/elevator.jpg");
            $.each(["button_penthouse", "button_white", "button_red", "button_pink", "button_lobby", "button_black"], function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": v + "_x",
                    "left": 835,
                    "top": 201 + (i * 101),
                    "width": 410,
                    "height": 80,
                    "image": "211_meeting/" + v + ".png"
                }, 211);
            });
            break;
        case "button_white_x":
            g.pass = "white";
            char.room(187);
            break;
        case "button_red_x":
            g.pass = "red";
            char.room(187);
            break;
        case "button_pink_x":
            g.pass = "pink";
            char.room(187);
            break;
        case "button_lobby_x":
            char.room(211);
            break;
        case "button_black_x":
            if (!daily.get("button_black_x")) {
                daily.set("button_black_x")
                char.room(172);
            }
            else {
                chat(39, 211);
            }
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
            levels.mod("xdress", 10, 7);
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
        case "icon_dress1":
            levels.mod("xdress", 20, 7);
            cl.nude();
            cl.c.pants = "sq";
            cl.c.shirt = "sq";
            cl.c.shoes = "sq";
            cl.c.socks = "sq";
            cl.display();
            nav.killbutton("icon_dress1");
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
            if (sissy.st[10].ach) {
                nav.button({
                    "type": "btn",
                    "name": "xgroup1",
                    "left": 0,
                    "top": 457,
                    "width": 432,
                    "height": 623,
                    "image": "211_meeting/xgroup1.png"
                }, 211);
                nav.button({
                    "type": "btn",
                    "name": "xgroup2",
                    "left": 374,
                    "top": 398,
                    "width": 389,
                    "height": 682,
                    "image": "211_meeting/xgroup2.png"
                }, 211);
                nav.button({
                    "type": "btn",
                    "name": "xgroup3",
                    "left": 951,
                    "top": 612,
                    "width": 368,
                    "height": 468,
                    "image": "211_meeting/xgroup3.png"
                }, 211);
                nav.button({
                    "type": "btn",
                    "name": "xgroup4",
                    "left": 1476,
                    "top": 540,
                    "width": 444,
                    "height": 540,
                    "image": "211_meeting/xgroup4.png"
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
            else {
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
            }
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
        case "xgroup1":
            chat(26, 211);
            break;
        case "xgroup2":
            chat(27, 211);
            break;
        case "xgroup3":
            chat(28, 211);
            break;
        case "xgroup4":
            chat(29, 211);
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
        case "room203":
            char.room(203);
            break;
        case "initviewtrainee":
            room211.btnclick("initviewtrainee");
            room211.btnclick("drawGroups");
            break;
        case "moveit":
            g.pass = "moveitMoveIt";
            char.room(174);
            break;
        case "pill0":
            nav.bg("211_meeting/pills0.jpg");
            break;
        case "pill1":
            nav.bg("211_meeting/pills1.jpg");
            cl.nude();
            zcl.bent(0, 300, .8, "", false);
            nav.button({
                "type": "img",
                "name": "pill",
                "left": 1042,
                "top": 374,
                "width": 68,
                "height": 51,
                "image": "211_meeting/pills1.png",
            }, 211);
            gv.mod("hormone", 35);
            break;
        case "pill2":
            nav.kill();
            nav.bg("211_meeting/pills.jpg");
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
            speaker: "philbert",
            text: "In that tight little shirt and skirt, you look like a chick! I would totally " +
                "bang you. ",
            button: [
                { chatID: -1, text: "Thanks? ", callback: "" },
            ]
        };
    }
    else if (chatID === 502) {
        return {
            chatID: 501,
            speaker: "!chris",
            text: "OOoooo! I'm so excited! I've always known deep down I was the wrong gender, " +
                "but I've been too afraid to make the leap. This is just what I need to get " +
                "over my fear and finally be the girl I was born to be. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        };
    }
    else if (chatID === 503) {
        return {
            chatID: 501,
            speaker: "!timothy",
            text: "zzZZzzzz Just give me 10 more minutes. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        };
    }
    else if (chatID === 504) {
        return {
            chatID: 501,
            speaker: "!kareem",
            text: "I'm so, like, nervous, ya know. This is so right, but I can't help but feel " +
                "so wrong. ",
            button: [
                { chatID: -1, text: "Ya. Me too", callback: "" },
            ]
        };
    }
    else if (chatID === 505) {
        return {
            chatID: 501,
            speaker: "!jeremy",
            text: "This is so dumb. I don't know why I've even here. ",
            button: [
                { chatID: -1, text: "oh", callback: "" },
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
                text: "I'm so embarrased from that last class. But in a weird way it's arousing. " +
                    "Like really arousing. I don't know why I'm sharing this, but it's nice to talk " +
                    "to someone that's going though this with me. ",
                button: [
                    { chatID: -1, text: "Hahaha yeah.", callback: "" },
                ]
            },
            {
                chatID: 9,
                speaker: "!chris",
                text: "Oh hi. I'm surprise we're all still here. I almost didn't come, I'm so scared " +
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
            {
                chatID: 25,
                speaker: "p",
                text: "Ok sluts everyone upstairs to the White Room! Move that soft little tushies! Move it! Move it! ",
                button: [
                    { chatID: -1, text: "aaak", callback: "moveit" },
                ]
            },
            {
                chatID: 26,
                speaker: "!kareem",
                text: "Hey baby girl! You lookin' fine today!  ",
                button: [
                    { chatID: -1, text: "Thanks", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "!timothy",
                text: "I just love how " + sc.n("!sporty") + " sucks that cock. She's so " +
                    "enthusiastic!",
                button: [
                    { chatID: -1, text: "She sure is", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "!thomas",
                text: "I'm going to have the biggest bussy in the world! Just need more training. ",
                button: [
                    { chatID: -1, text: "Yes you will. ", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "!chris",
                text: "I'm going to look so hot with a pair of giant boobs! Can't wait for them " +
                    "to grow in. ",
                button: [
                    { chatID: -1, text: "Me too.", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "martha",
                text: "After conferring with my esteemed colleagues, it has become apparent that a touch more... guidance is warranted to expedite your transformative journeys. Therefore, if you would be so kind as to remove your clothing and assume a forward-leaning posture, I shall personally administer a rather unique pharmaceutical suppository. It will, I assure you, be most beneficial.",
                button: [
                    { chatID: 31, text: "What is this pharmaceutical suppository?", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "martha",
                text: "Ah, a most astute inquiry, my dear. While this particular pharmaceutical preparation boasts a variety of nomenclatures, it is most commonly referred to simply as Sissy Bimbo Suppository. Its purpose, you see, is to gently, yet decisively, elevate one's inherent femininity to a most agreeable degree. These are, I must emphasize, quite potent concoctions, and thus, their administration is reserved exclusively for myself, within the confines of our instructional sessions. Now, if you would be so kind as to assume the aforementioned posture, we shall commence our day's endeavors.",
                button: [
                    { chatID: 32, text: "[Strip down and bend over]", callback: "pill0" },
                ]
            },
            {
                chatID: 32,
                speaker: "martha",
                text: "I do love the sight of so many eager sissies, with their holes open and waiting!",
                button: [
                    { chatID: 33, text: "...", callback: "pill1" },
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "I wonder how these suppository work? I do feel a rush of warm spreading " +
                    "over my body. My bussy hole feels especially warm. I can't deny I'm really " +
                    "excited! I can't wait to see what happens to my body! ",
                button: [
                    { chatID: 34, text: "...", callback: "pill2" },
                ]
            },
            {
                chatID: 34,
                speaker: "martha",
                text: "And there we have it, your inaugural dose of the Sissy Bimbo Suppository administered. The effects, while not instantaneous, will gradually manifest over time. During your slumber, you may experience subtle, yet persistent, physiological transformations. You shall awaken, I daresay, feeling as though you are blossoming into the very woman you were destined to be.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 35,
                speaker: "martha",
                text: "Kindly strip and bend over for daily administration of your Sissy Bimbo Suppository.",
                button: [
                    { chatID: 36, text: "...", callback: "pill1" },
                ]
            },
            {
                chatID: 36,
                speaker: "thinking",
                text: "This may be my favorite part of the day! I wonder where I can get more....",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 37,
                speaker: "missy",
                text: "I'm going to give you the afteroon off so you can focus on " +
                    "your sissy final. ",
                button: [
                    { chatID: -1, text: "Thanks ma'am!", callback: "room203" },
                ]
            },
            {
                chatID: 38,
                speaker: "thinking",
                text: "So empty in here. If I want to visit Martha I should go into the elevator " +
                    "on the right and go to the white floor. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 39,
                speaker: "thinking",
                text: "I think that kind of punishment once a day is more than enough!!!",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};