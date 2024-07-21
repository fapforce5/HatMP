//Room name
var room316 = {};
room316.main = function () {
    if (sc.getMission("dog", "vacation").inProgress) {
        var dogLevel = sc.getLevel("dog");
        var displayMenus = true;
        var dsex = daily.get("dsex");

        if (!dsex) {
            if (dogLevel > 5 && !daily.get("dcrawl")) {
                if (!daily.get("dcrawl")) {
                    sc.modLevel("dog", 10, 5);
                    displayMenus = false;
                    daily.set("dcrawl");
                    nav.button({
                        "type": "img",
                        "name": "janice",
                        "left": 453,
                        "top": 42,
                        "width": 957,
                        "height": 1038,
                        "image": "316_livingroom/knockdown.png"
                    }, 316);
                    chat(93, 316);
                }
            }
            else if (dogLevel > 6 && !cl.isLewd()) {
                sc.modLevel("dog", 10, 6);
                displayMenus = false;
                cl.nude();
                nav.button({
                    "type": "img",
                    "name": "janice",
                    "left": 439,
                    "top": 132,
                    "width": 1481,
                    "height": 948,
                    "image": "316_livingroom/strip.png"
                }, 316);
                chat(94, 316);
            }
            else if (dogLevel > 6 && g.rand(0, 5) === 0) {
                displayMenus = false;
                room316.btnclick("dsex0");
            }
        }

        if (displayMenus) {
            sc.select("iconWardrobe", "316_livingroom/icon_wardrobe.png", 0);

            if (!daily.get("dlock")) {
                if (daily.get("dcrawl"))
                    sc.select("iconStand", "316_livingroom/icon_alpha.png", 1);
                else
                    sc.select("iconCrawl", "316_livingroom/icon_crawl.png", 1);

                if (!daily.get("dpet") && !daily.get("dcrawl"))
                    sc.select("iconPet", "316_livingroom/icon_pet.png", 2);

                if (!daily.get("dpb"))
                    sc.select("dpeanutbutter", "316_livingroom/icon_peanutbutter.png", 3);

                if (!daily.get("dwalk"))
                    sc.select("dwalk", "316_livingroom/icon_walk.png", 4);

                sc.select("tryToLeave", "316_livingroom/icon_leave.png", 5);
            }

            if (daily.get("dlock")) {
                nav.bg("316_livingroom/bg.jpg");
            }
            else if (!daily.get("dcrawl")) {
                nav.bg("316_livingroom/dog_standing.jpg");
            }
            else {
                if (cl.isLewd()) {
                    gv.mod("arousal", 10);
                    if (!daily.get("dsniff")) {
                        daily.set("dsniff");
                        sc.modLevel("dog", 20, 5);
                        levels.mod("sub", 15, 999);
                        levels.mod("beast", 10, 0);
                    }

                    zcl.assup(650, 500, .55, "");
                    nav.bg("316_livingroom/dog_snif.jpg");
                }
                else if (cl.c.dress !== null) {
                    gv.mod("arousal", 10);
                    levels.mod("beast", 10, 0);
                    zcl.assup(650, 500, .55, "reddress");
                    nav.bg("316_livingroom/dog_snif.jpg");
                }
                else {
                    nav.bg("316_livingroom/dog_crawlClothes.jpg");
                }
            }
        }

        nav.buildnav([317, 318, 319]);

    }
    else if (sc.getMission("janice", "date").inProgress) {
        daily.set("janice");
        g.pass = { money: false, dog: false, pb: false, talk: false, dick: false };
        var janiceTask = sc.taskGetStep("janice", "date");
        if (janiceTask === 0) {
            nav.bg("316_livingroom/task0_1.jpg");
            chat(74, 316);
        }
        else if (janiceTask === 1) {
            nav.bg("316_livingroom/task2_0.jpg");
            chat(78, 316);
        }
        else if (janiceTask === 2) {
            sc.completeMissionTask("janice", "date", 2, true);
            nav.bg("316_livingroom/talk.jpg");
            chat(15, 316);
        }
        else if (janiceTask === 3) {
            nav.bg("316_livingroom/task3_1.jpg");
            g.internal = 0;
            nav.next("task3");
        }
        else if (janiceTask === 4) {
            nav.bg("316_livingroom/task4_1.jpg");
            chat(60, 316);
        }
        else {
            var btnList = [
                {
                    "type": "img",
                    "name": "janice",
                    "left": 908,
                    "top": 0,
                    "width": 444,
                    "height": 1080,
                    "image": "316_livingroom/janice.png"
                }
            ];
            var navList = [0];
            $.each(btnList, function (i, v) {
                nav.button(v, 316);
            });
            nav.buildnav(navList);
            room316.btnclick("buildMenu");
        }
    }
    else {
        switch (sc.taskGetStep("janice", "bitch")) {
            case -1:
            case 0:
                nav.kill();
                var howManyFed = 0;
                for (i = 0; i < 6; i++) {
                    if (sc.getMissionTask("dog", "vacation", i).complete)
                        howManyFed++;
                }
                if (howManyFed > 1) {
                    nav.bg("316_livingroom/talk.jpg");
                    chat(103, 316);
                }
                else {
                    nav.bg("316_livingroom/breakup.jpg");
                    chat(102, 316);
                }
                
        }
    }
};

room316.btnclick = function (name) {
    switch (name) {
        //dog vacation
        case "iconWardrobe":
            g.pass = 316;
            char.room(8);
            break;
        case "iconStand":
            daily.set("dcrawl", false);
            char.room(316);
            break;
        case "iconCrawl":
            daily.set("dcrawl");
            if (!daily.get("dsniff")) {
                daily.set("dsniff");
                sc.modLevel("dog", 20, 5);
                levels.mod("sub", 15, 999);
                levels.mod("beast", 10, 0);
            }
            char.room(316);
            break;
        case "dpeanutbutter":
            if (inv.has("peanutbutter")) {
                if (daily.get("dcrawl") && cl.isLewd()) {
                    nav.killall();
                    zcl.assup(650, 500, .55, "");
                    sc.select("icon_dcrawlpbGive", "316_livingroom/icon_dcrawlpbGive.png", 0);
                    sc.select("icon_dcrawlpbButt", "316_livingroom/icon_dcrawlpbButt.png", 1);
                    sc.selectCancel("reset", 2);
                }
                else {
                    nav.killall();
                    nav.bg("316_livingroom/pbStand.jpg");
                    daily.set("dpb");
                    levels.mod("dog", 50, 2);
                    levels.mod("beast", 10, 0);
                    chat(88, 316);
                }
            }
            else {
                nav.killbutton("dpeanutbutter");
                chat(87, 316);
            }
            break;
        case "dwalk":
            nav.killall();
            if (cl.hasoutfit("public") === null) 
                chat(95, 316);
            else
                chat(96, 316);
            break;
        case "dwalkfuck":
            if (g.internal === 0) {
                nav.bg(cl.c.chastity !== null ? "316_livingroom/walk_sex0_c.jpg" : "316_livingroom/walk_sex0_n.jpg");
            }
            else {
                nav.bg("316_livingroom/walk_sex" + g.internal + ".jpg");
            }
            if (g.internal === 5) {
                levels.anal(3, false, "m", true, "dog");
                levels.mod("fame", 25, 999);
                nav.killbutton("dwalkfuck");
                chat(101, 316);
            }
            g.internal++;
            break;
        case "tryToLeave":
            if (cl.hasoutfit("public") === null)
                char.room(0);
            else {
                if (dogLevel > 6 && !daily.get("dsex")) {
                    room316.btnclick("dsex0");
                }
                else {
                    chat(800, 316);
                }
            }
            break;
        case "dsex0":
            nav.killall();
            nav.bg("316_livingroom/dsex1.jpg");
            chat(97, 316);
            break;
        case "icon_dcrawlpbGive":
            nav.killall();
            nav.bg("316_livingroom/pbStand.jpg");
            daily.set("dpb");
            levels.mod("beast", 10, 0);
            levels.mod("dog", 50, 1);
            chat(88, 316);
            break;
        case "icon_dcrawlpbButt":
            if (levels.get("beast").l < 1) {
                chat(89, 316);
            }
            else {
                nav.killall();
                nav.bg("316_livingroom/pblick.jpg");
                zcl.assup(650, 500, .55, "");
                daily.set("dpb");
                nav.next("icon_dcrawlpbButt1");
            }
            break;
        case "icon_dcrawlpbButt1":
            nav.killbutton("icon_dcrawlpbButt1");
            daily.set("dpb");
            levels.mod("beast", 20, 4);
            sc.modLevel("dog", 35, 999);
            chat(90, 316);
            break;
        case "iconPet":
            if (sc.getLevel("dog") < 2) {
                nav.killall();
                nav.bg("316_livingroom/petNo.jpg");
                chat(91, 316);
            }
            else {
                daily.set("dpet");
                nav.killall();
                sc.modLevel("dog", 25, 4);
                nav.bg("316_livingroom/pet.jpg");
                chat(92, 316);
            }
            break;
        //dating
        case "buildMenu":
            nav.killall();
            nav.bg("316_livingroom/talk.jpg");
            if (!g.pass.dog)
                sc.select("iconSub", "316_livingroom/icon_sub.png", 0);

            if (!g.pass.pb)
                sc.select("iconPb", "316_livingroom/icon_peanutbutter.png", 2);

            if (!g.pass.talk)
                sc.select("iconTalk", "316_livingroom/icon_talk.png", 1);

            if (!g.pass.money) {
                sc.select("icon25", "316_livingroom/icon_25.png", 3);
                sc.select("icon50", "316_livingroom/icon_50.png", 5);
                sc.select("icon100", "316_livingroom/icon_100.png", 7);
            }

            if (!g.pass.dick)
                sc.select("iconDick", "316_livingroom/icon_dick.png", 9);

            sc.select("iconLeave", "316_livingroom/icon_leave.png", 10);
            
            break;
        case "iconLeave":
            char.room(0);
            break;
        case "iconTalk":
            g.pass.talk = true;
            nav.killall();
            nav.bg("316_livingroom/talk.jpg");

            var dating = sc.taskGetStep("janice", "date");
            switch (dating) {
               
                case 1:
                    sc.completeMissionTask("janice", "date", 1, true);
                    chat(9, 316);
                    break;
                case 2:
                    sc.completeMissionTask("janice", "date", 2, true);

                    chat(15, 316);
                    break;
                case 5:
                    sc.completeMissionTask("janice", "date", 5, true);
                    sc.completeMission("janice", "date", true);
                    sc.startMission("dog", "vacation");
                    sc.startMissionTask("dog", "vacation", 1);
                    future.add("janicevacation", 7);
                    inv.add("keyJanice");
                    chat(73, 316);
                    break;
            }
            break;
        case "bj":
            if (g.internal === 0) {
                nav.bg("316_livingroom/bj2.jpg");
                g.internal = 1;
            }
            else {
                sex.mod("oral", false, "f", 1);
                cl.doCum();
                nav.bg("316_livingroom/bj3.jpg");
                nav.killbutton("bj");
                chat(49, 316);
            }
            break;
        case "task3":
            if (g.internal === 0) {
                nav.bg("316_livingroom/task3_2.jpg");
                g.internal = 1;
            }
            else {
                nav.killbutton("task3");
                nav.bg("316_livingroom/task3_3.jpg");
                chat(52, 316);
            }

            break;
        case "iconSub":
            g.pass.dog = true;
            nav.killall();
            nav.bg("316_livingroom/task0_2.jpg");
            sc.modLevel("dog", 30, 4);
            levels.mod("beast", 15, 2);
            nav.next("buildMenu");
            break;
        case "iconPb":
            g.pass.pb = true;
            nav.killall();
            if (inv.has("peanutbutter")) {
                nav.bg("316_livingroom/pb.jpg");
                inv.use("peanutbutter");
                sc.modLevel("janice", 15, 5);
                sc.modLevel("dog", 20, 4);
                nav.next("buildMenu");
            }
            else
                chat(77, 316);
            break;
        case "icon25":
        case "icon50":
        case "icon100":
            g.pass.money = true;
            nav.killall();
            var sValue = parseInt(name.replace("icon", ""));
            var myMoney = gv.get("money");
            if (myMoney < 1) {
                chat(10, 316);
            }
            else if (myMoney < sValue) {
                gv.mod("money", -myMoney);
                sc.modLevel("janice", myMoney, 999);
                g.internal = myMoney;
                chat(997, 316);
            }
            else {
                gv.mod("money", -sValue);
                sc.modLevel("janice", sValue, 999);
                nav.bg("316_livingroom/kiss.jpg");
                chat(12, 316);
            }
            break;
        case "iconDick":
            g.pass.dick = true;
            nav.killall();
            if (cl.c.chastity === null) {
                levels.mod("dom", 25, 999);
                nav.bg("316_livingroom/dick.jpg");
                chat(81, 316);
            }
            else {
                nav.bg("316_livingroom/chastity.jpg");
                levels.mod("janice", 30, 999);
                gv.mod("arousal", 50);
                chat(83, 316);
            }
            break;
        case "reset":
            char.room(316);
            break;
        default:
            break;
    }
};

room316.chatcatch = function (callback) {
    switch (callback) {
        case "bg":
        case "walk":
        case "kiss":
        case "time":
        case "task2_1":
        case "date2_1":
        case "date2_2":
        case "date2_3":
        case "date2_3a":
        case "date2_4":
        case "date2_5":
        case "date2_6":
        case "date2_7":
        case "date2_8":
        case "date2_9":
        case "date2_10":
        case "date2_11":
        case "date2_12":
        case "date2_13":
        case "date2_14":
        case "date2_15":
        case "talk":
        case "task3_4":
        case "task4_1":
        case "task4_2":
        case "task4_3":
        case "task4_4":
        case "task4_5":
        case "task4_6":
        case "task4_7":
        case "task4_8":
        case "task4_9":
        case "task4_10":
        case "task0_1a":
        case "bitch_0_d1":
        case "bitch_0_1":
            nav.killall();
            nav.bg("316_livingroom/" + callback + ".jpg");
            break;
        case "flash":
            nav.bg("316_livingroom/" + callback + ".jpg");
            gv.mod("arousal", 75);
            break;
        case "task0_2":
            nav.killall();
            nav.bg("316_livingroom/" + callback + ".jpg");
            sc.modLevel("dog", 50, 4);
            break;
        case "task4_11":
            sc.completeMissionTask("janice", "date", 4, true);
            break;
        case "date2_16":
            gv.mod("money", -100);
            nav.bg("316_livingroom/" + callback + ".jpg");
            break;
        case "date2_17":
            char.addtime(180);
            if (cl.c.chastity !== null) {
                sc.modSecret("janice", 50);
                nav.bg("316_livingroom/date2_17a.jpg");
                chat(46, 316);
            }
            else {
                nav.bg("316_livingroom/bj1.jpg");
                g.internal = 0;
                nav.next("bj");
            }
            break;
        case "loveup":
            sc.modLevel("janice", 50, 999);
            break;
        case "lovedown":
            sc.modLevel("janice", -50, 999);
            break;
        case "likedom":
            sc.modLevel("janice", -25, 999);
            levels.mod("dom", 30, 999);
            break;
        case "sub":
            sc.modLevel("janice", 25, 999);
            levels.mod("sub", 50, 999);
            break;
       
        case "peanutbutter":
            if (inv.has("peanutbutter")) {
                chat(55, 316);
            }
            else {
                chat(56, 316);
            }
            break;
        case "givePeanutButter":
            sc.modLevel("janice", 50, 999);
            inv.use("peanutbutter");
            break;
        case "task3end":
            sc.completeMissionTask("janice", "date", 3, true);
            char.room(0);
            break;
        case "breakup":
            nav.killall();
            nav.bg("316_livingroom/breakup.jpg");
            sc.completeMission("janice", "date", false);
            sc.startMission("janice", "breakup");
            break;
        case "breakupAlt":
            nav.killall();
            nav.bg("316_livingroom/task4_8a.jpg");
            sc.completeMission("janice", "date", false);
            sc.startMission("janice", "breakup");
            break;
        case "breakupFirst":
            sc.completeMission("janice", "date", false);
            sc.startMission("janice", "breakup");
            char.room(0);
            break;
        case "breakupDogsit":
            sc.startMission("janice", "breakup");
            char.room(0);
            break;
        case "completeTask1":
            sc.modLevel("dog", 50, 4);
            sc.modLevel("janice", 50, 999);
            sc.completeMissionTask("janice", "date", 0, true);
            char.room(0);
            break;
        case "walk_lead":
            sc.modLevel("dog", 10, 1);
            nav.bg("316_livingroom/walk_lead.jpg");
            daily.set("dwalk");
            nav.next("dwalkNext");
            nav.next("reset");
            break;
        case "walk_follow":
            sc.modLevel("dog", 20, 6);
            daily.set("dwalk");
            nav.bg("316_livingroom/walk_follow.jpg");
            if (sc.getLevel("dog") > 7 && g.rand(0, 10) !== 0) {
                g.internal = 0; 
                nav.next("dwalkfuck");
            }
            else {
                nav.next("reset");
            }
            break;
        case "leave":
            char.room(0);
            break;
        case "buildMenu":
            room316.btnclick("buildMenu");
            break;
        case "dsex2":
            if (cl.c.chastity === null)
                nav.bg("316_livingroom/dsex2_n.jpg");
            else
                nav.bg("316_livingroom/dsex2_c.jpg");
            break;
        case "dsex3":
            nav.bg("316_livingroom/bg.jpg");
            zcl.assup(550, 400, .8, "");
            nav.button({
                "type": "img",
                "name": "janice",
                "left": 552,
                "top": 309,
                "width": 1000,
                "height": 668,
                "image": "316_livingroom/df.png"
            }, 316);
            break;
        case "dsex4":
            nav.killall();
            if (cl.c.chastity === null)
                nav.bg("316_livingroom/dsex4_n.jpg");
            else
                nav.bg("316_livingroom/dsex4_c.jpg");
            break;
        case "dsex5":
            levels.anal(3, false, "m", true, "dog");
            sc.modLevel("dog", 30, 10);
            daily.set("dsex");
            char.room(316);
            break;
        case "reset":
            char.room(316);
            break;
        case "checkDog":
            if (sc.getLevel("dog") > 6) {
                cl.nude();
                nav.bg("316_livingroom/bitch_0_d0.jpg");
                chat(104, 316);
            }
            else
                room316.chatcatch("checkPanties");
            break;
        case "checkPanties":
            if (cl.hasClothing("panties", "j")) {
                chat(107, 316);
            }
            else {
                nav.bg("316_livingroom/bitch_0_1.jpg");
                chat(108, 316);
            }
            break;
        case "checkChastity":
            nav.bg("316_livingroom/bitch_0_2.jpg");
            if (cl.c.chastity !== null)
                chat(109, 316);
            else
                chat(110, 316);
            break;
        case "bitch_0_end":
            sc.startMission("janice", "bitch");
            sc.completeMissionTask("janice", "bitch", 0);
            break;
        default:
            break;
    }
};

room316.chat = function (chatID) {
    if (chatID === 999) {
        if (g.dt.getDay() === 5) {
            return {
                chatID: 999,
                speaker: "janice",
                text: "Great! I've heard such great things about Dorcia. Come pick me up " +
                    "tomorrow before " + nav.convertTime(20, 0) + "! I'll make it worth your time and money! It's a bit pricey " +
                    "so don't forget your wallet. Hehe",
                button: [
                    { chatID: 14, text: "Oh yeah. That place is like $100 for the two of us. ", callback: "" }
                ]
            }
        }
        else {
            return {
                chatID: 999,
                speaker: "janice",
                text: "Great! I've heard such great things about Dorcia. Come pick me up " +
                    "on Friday before " + nav.convertTime(20, 0) + ". I'll make it worth your time and money! It's a bit pricey " +
                    "so don't forget your wallet. Hehe",
                button: [
                    { chatID: 14, text: "Oh yeah. That place is like $100 for the two of us. ", callback: "" }
                ]
            }
        }
    }
    else if (chatID === 998) {
        if (gv.get("money") < 100) {
            return {
                chatID: 998,
                speaker: "me",
                text: "I have a confession. I don't quite have enough for Dorcia. ",
                button: [
                    { chatID: 16, text: "...", callback: "" }
                ]
            };
        }
        else {
            sc.completeMissionTask("janice", "date", 2, false);
            return {
                chatID: 998,
                speaker: "janice",
                text: "Hi you! I'm so excited for our date! Let me change really quick. Come " +
                    "with me " + sc.n("dog") + ". ",
                button: [
                    { chatID: 17, text: "Sure.", callback: "time" }
                ]
            };
        }
    }
    else if (chatID === 997) {
        return {
            chatID: 997,
            speaker: "me",
            text: "Oh. I only have $" + g.internal + ". It's all yours to help pay you bills. ",
            button: [
                { chatID: -1, text: "...", callback: "buildMenu" }
            ]
        };
    }
    else if (chatID === 800) {
        var neededClothing = cl.hasoutfit("public");
        return {
            chatID: 800,
            speaker: "thinking",
            text: "I can't leave. I'm missing my " + neededClothing,
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "janice",
                text: "I'm so glad you came by! I was just about to take " + sc.n("dog") + " for a " +
                    "walk. Join me. ",
                button: [
                    { chatID: 1, text: "Sure", callback: "walk" }
                ]
            },
            {
                chatID: 1,
                speaker: "janice",
                text: "So how's your day baby? ",
                button: [
                    { chatID: 2, text: "Better now that I'm with you. Youself? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "janice",
                text: "Good. It's been hard since my parents died. I'm almost out of my inheritance " +
                    "money, but at least I still have the house. I would hate to live in an apartment " +
                    "my good boy here! I totally need the yard. ",
                button: [
                    { chatID: 4, text: "Oh yeah. Yards are great. ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "janice",
                text: "Good. It's been hard since my parents died. I'm almost out of my inheritance " +
                    "money, but at least I still have the house. I would hate to live in an apartment " +
                    "my good boy here! I totally need the yard. ",
                button: [
                    { chatID: 4, text: "Oh yeah. Yards are great. ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "janice",
                text: "Yes he does! He's my best friend in the whole wide world! My little snoogy woogy! " +
                    "He goes through so much peanut butter! You should see his tail wag when I pull out " +
                    "the jar. ",
                button: [
                    { chatID: 5, text: "He is a good boy. ", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "janice",
                text: "Speaking of which. Next time you come over can you bring a jar of peanut butter! Pretty " +
                    "please. You'll make me the happiest girlfiend ever! ",
                button: [
                    { chatID: 6, text: "Oh yeah. Of course. Anything for you babe. ", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "janice",
                text: "Let's head back. My back is getting sore. My little " + sc.n("dog") + " could walk for " +
                    "miles if I let him. ",
                button: [
                    { chatID: 7, text: "Sure ", callback: "talk" }
                ]
            },
            {
                chatID: 7,
                speaker: "janice",
                text: "So happy you stopped by. Don't forget the peanut butter next time you come by! " +
                    "And if you want you can help me with my bills! It would mean so much to me!",
                button: [
                    { chatID: 8, text: "Sure. Can I get a kiss before I go? ", callback: "kiss" }
                ]
            },
            {
                chatID: 8,
                speaker: "janice",
                text: "Awww. My big strong pooky wooky wants a kiss. Mwaa",
                button: [
                    { chatID: -1, text: "*Mwaa* Bye bye. ", callback: "completeTask1" }
                ]
            },
            {
                chatID: 9,
                speaker: "me",
                text: "So, uhhhh... Do you want to do something? ",
                button: [
                    { chatID: 13, text: "...", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "I don't have any money. ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" }
                ]
            },
            {
                chatID: 11,
                speaker: "janice",
                text: "Can't wait for our big date! I'm so excited! Love you babe! ",
                button: [
                    { chatID: -1, text: "Love you too!", callback: "buildMenu" },
                ]
            },
            {
                chatID: 12,
                speaker: "janice",
                text: "You're the best boyfriend ever! ",
                button: [
                    { chatID: -1, text: "*Mwaaa*", callback: "buildMenu" }
                ]
            },
            {
                chatID: 13,
                speaker: "janice",
                text: "You know we haven't had a proper date since you've asked me out. What do you " +
                    "say to a date? I'll make it worth it for you. ",
                button: [
                    { chatID: 999, text: "Oh. A date would be great. ", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "janice",
                text: "You're the sweetest boy ever. Give me a kiss!.  ",
                button: [
                    { chatID: 11, text: "[Kiss the girl]", callback: "kiss" }
                ]
            },
            {
                chatID: 15,
                speaker: "janice",
                text: "Hi you! I'm so excited for our date! Let me change really quick. Come " +
                    "with me " + sc.n("dog") + ". ",
                button: [
                    { chatID: 17, text: "Sure.", callback: "time" }
                ]
            },
            {
                chatID: 16,
                speaker: "janice",
                text: "That's ok! We can go another time. See you then! ",
                button: [
                    { chatID: -1, text: "...ok bye...", callback: "leave" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "Oh wow. She's taking forever. ",
                button: [
                    { chatID: 18, text: "... wait more", callback: "date2_1" }
                ]
            },
            {
                chatID: 18,
                speaker: "janice",
                text: "So. What do you think? Too much for Dorcia? ",
                button: [
                    { chatID: 19, text: "It's perfect. Like you", callback: "loveup" },
                    { chatID: 20, text: "Yeah. It's a bit much. You look like a slut. ", callback: "lovedown" },
                ]
            },
            {
                chatID: 19,
                speaker: "janice",
                text: "Awww. You're the sweetest ever! Let's go my big charming boyfriend! ",
                button: [
                    { chatID: 21, text: "Yeah. Let's go", callback: "date2_2" },
                ]
            },
            {
                chatID: 20,
                speaker: "janice",
                text: "Well I like it. Let's go. ",
                button: [
                    { chatID: 21, text: "Yeah. Let's go", callback: "date2_2" },
                ]
            },
            {
                chatID: 21,
                speaker: "janice",
                text: "I'm so excited! This place is soooo fancy! I've never been to a fancy " +
                    "restaruant before! I wonder What they have here. Do you think they have " +
                    "hamburgers? But like fancy hamburgers? ",
                button: [
                    { chatID: 22, text: "I don't know. I don't think they do.", callback: "date2_3" },
                ]
            },
            {
                chatID: 22,
                speaker: "!waiter",
                text: "Hello. It looks like I get to serve the sexiest girl here today. ",
                button: [
                    { chatID: 23, text: "Hey", callback: "date2_4" },
                ]
            },
            {
                chatID: 23,
                speaker: "janice",
                text: "Hehehe. Thank you. You're too sweet. ",
                button: [
                    { chatID: 24, text: "...", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "!waiter",
                text: "So what would you and your brother like tonight. ",
                button: [
                    { chatID: 25, text: "I'm her boyfriend! ", callback: "likedom" },
                    { chatID: 25, text: "Stay silent..", callback: "sub" },
                ]
            },
            {
                chatID: 25,
                speaker: "janice",
                text: "We would want some wine. Do you know which one we should get?  ",
                button: [
                    { chatID: 26, text: "Something reasonable. ", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "!waiter",
                text: "A beautiful girl like you deserves a glass of our most expensive wine. " +
                    "How about a glass of Château Margaux from France. And a soda for the gentleman? ",
                button: [
                    { chatID: 27, text: "Thanks. I want the wine too. ", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "!waiter",
                text: "Wonderful choice. Two glasses of Château Margaux. Your taste in wine is as " +
                    "refined as your taste in women. ",
                button: [
                    { chatID: 28, text: "...", callback: "date2_2" },
                ]
            },
            {
                chatID: 28,
                speaker: "janice",
                text: "Wow. He's such a great waiter. He seems so elegant and smart.  ",
                button: [
                    { chatID: 29, text: "He's hitting on you", callback: "date2_3a" },
                    { chatID: 30, text: "He really is elegant. ", callback: "date2_5" },
                ]
            },
            {
                chatID: 29,
                speaker: "janice",
                text: "Do you think so. I think he was just being nice. Don't be silly, he's just " +
                    "doing his job. Is my snuggly wuggly boyfriend jealous? ",
                button: [
                    { chatID: 30, text: "I'm not jealous. I just think he was hitting on you. ", callback: "date2_5" }
                ]
            },
            {
                chatID: 30,
                speaker: "!waiter",
                text: "Château Margaux, a wine almost as alluring as you. I would consider myself " +
                    "the luckiest man alive to taste the wine with you.  ",
                button: [
                    { chatID: 31, text: "Hey. ", callback: "date2_6" }
                ]
            },
            {
                chatID: 31,
                speaker: "janice",
                text: "Oh hehe. You're so nice. We were trying to figure out what to order. ",
                button: [
                    { chatID: 32, text: "So are you going to bring the menus or what? ", callback: "" }
                ]
            },
            {
                chatID: 32,
                speaker: "!waiter",
                text: "You really are a simple boy. There aren't menu's at Dorcia. I could go " +
                    "to the back and see if we have crayons and chicken tenders for you. ",
                button: [
                    { chatID: 33, text: "Wha! ", callback: "date2_7" }
                ]
            },
            {
                chatID: 33,
                speaker: "janice",
                text: "Haha. You're so funny! I guess we'll wait for our food. ",
                button: [
                    { chatID: 34, text: "*hrumph*", callback: "date2_8" }
                ]
            },
            {
                chatID: 34,
                speaker: "me",
                text: "That guy is totally hitting on you. ",
                button: [
                    { chatID: 35, text: "...", callback: "date2_9" }
                ]
            },
            {
                chatID: 35,
                speaker: "janice",
                text: "Stop it. I've been looking forward to this dinner my entire life. Don't " +
                    "ruin it by being mean. Now just sit back and enjoy our fancy meal. ",
                button: [
                    { chatID: 36, text: "...ok", callback: "date2_10" }
                ]
            },
            {
                chatID: 36,
                speaker: "!waiter",
                text: "Your first course, Brown Butter Honey-Glazed Carrots. ",
                button: [
                    { chatID: 37, text: "MMMmmm", callback: "date2_11" }
                ]
            },
            {
                chatID: 37,
                speaker: "janice",
                text: "I don't think I've ever had this much. I could totally go home and take " +
                    "the longest nap. ",
                button: [
                    { chatID: 38, text: "Nap. I thought we could go back and.. you know..", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "janice",
                text: "This again. You know I'm saving myself for marraige. I'll tell you what, if " +
                    "you're a good boy maybe I'll give you...",
                button: [
                    { chatID: 39, text: "...", callback: "date2_12" }
                ]
            },
            {
                chatID: 39,
                speaker: "!waiter",
                text: "You look like you're ready for desserts. We have a white chocolate mousse " +
                    "almost as yummy and sweet like me. You'll love it. There's nothing better to " +
                    "fill your belly with than my white chocolate mousse. ",
                button: [
                    { chatID: 40, text: "...really", callback: "date2_13" }
                ]
            },
            {
                chatID: 40,
                speaker: "janice",
                text: "I'm so full I don't know if I can force myself to eat this. But I'll try! ",
                button: [
                    { chatID: 41, text: "...", callback: "" }
                ]
            },
            {
                chatID: 41,
                speaker: "!waiter",
                text: "I'm glad I could leave you with a belly full. We do have a special club here " +
                    "at Dorcia for special women like you. I would love to sign you up. All I need is " +
                    "your phone number. ",
                button: [
                    { chatID: 42, text: "You mean my phone number?", callback: "date2_14" }
                ]
            },
            {
                chatID: 42,
                speaker: "janice",
                text: "Sure. Here's my phone number. I'm so excited to be in the Dorcia club! ",
                button: [
                    { chatID: 43, text: "...", callback: "" }
                ]
            },
            {
                chatID: 43,
                speaker: "!waiter",
                text: "I shall give you the VIP treatment for being such a stunning guest. I hope " +
                    "to see you again soon. And for you, here's the bill. ",
                button: [
                    { chatID: 44, text: "...", callback: "date2_15" }
                ]
            },
            {
                chatID: 44,
                speaker: "janice",
                text: "This was such a wonderful time. Thank you so much. I loved it all! Would you like " +
                    "to escort me to my place? ",
                button: [
                    { chatID: 45, text: "I would love to.", callback: "date2_16" }
                ]
            },
            {
                chatID: 45,
                speaker: "janice",
                text: "Now take off those pants mister. It's time for your reward. ",
                button: [
                    { chatID: -1, text: "Oh yeah! ", callback: "date2_17" }
                ]
            },
            {
                chatID: 46,
                speaker: "janice",
                text: "Oh my. It looks like you're all locked up. Too bad because I was going " +
                    "to give you the best orgasm of your life. Oh well...",
                button: [
                    { chatID: 48, text: "Oh damn! I forgot I'm wearing this!", callback: "" }
                ]
            },
            {
                chatID: 47,
                speaker: "janice",
                text: "Not used ",
                button: [
                    { chatID: 48, text: "Oh yeah. Probably for the best. ", callback: "" }
                ]
            },
            {
                chatID: 48,
                speaker: "janice",
                text: "Yes. For the best. I like you locked up like that. Good night. Come to bed " + sc.n("dog") + ". ",
                button: [
                    { chatID: -1, text: "g'night. ", callback: "leave" }
                ]
            },
            {
                chatID: 49,
                speaker: "janice",
                text: "Hehe. I'm such a good girlfriend. Don't expect that every time mister. " +
                    "That was just a thank you for taking me out to my new favorite restaurant. Now " +
                    "me and " + sc.n("dog") + " need to get some sleep. Nighty night my big strong " +
                    "handsome man. Love you! ",
                button: [
                    { chatID: -1, text: "Love you too", callback: "leave" }
                ]
            },
            {
                chatID: 50,
                speaker: "thinking",
                text: "Oh I don't have any money to give her. ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" }
                ]
            },
            {
                chatID: 51,
                speaker: "janice",
                text: "You're the best boyfriend ever! Love you. ",
                button: [
                    { chatID: -1, text: "Love you too. Good night.", callback: "leave" }
                ]
            },
            {
                chatID: 52,
                speaker: "janice",
                text: "What are you doing here? ",
                button: [
                    { chatID: 53, text: "I heard a scream. I thought you were in trouble. ", callback: "" }
                ]
            },
            {
                chatID: 53,
                speaker: "janice",
                text: "Oh my god. No. I just bent over to pick up some trash and " + sc.n("dog") + 
                    "here jumped on me and knocked me over! I'm so embarrassed. He suprised me.  ",
                button: [
                    { chatID: 54, text: "Oh...", callback: "task3_4" }
                ]
            },
            {
                chatID: 54,
                speaker: "janice",
                text: "Let me put this guy in his bed..  ",
                button: [
                    { chatID: -1, text: "...", callback: "peanutbutter" }
                ]
            },
            {
                chatID: 55,
                speaker: "janice",
                text: "Do you have a jar of peanut butter I can have? ",
                button: [
                    { chatID: 57, text: "Yes I do", callback: "givePeanutButter" },
                    { chatID: 58, text: "Sorry, I don't", callback: "kiss" },
                ]
            },
            {
                chatID: 56,
                speaker: "janice",
                text: "Do you have a jar of peanut butter I can have? ",
                button: [
                    { chatID: 58, text: "Sorry, I don't", callback: "kiss" },
                ]
            },
            {
                chatID: 57,
                speaker: "janice",
                text: "Thanks! I just go though so much of it. It's so.. uhh yummy. ",
                button: [
                    { chatID: 58, text: "...", callback: "kiss" },
                ]
            },
            {
                chatID: 58,
                speaker: "janice",
                text: "So I hate to cut this short, but I have to run. Give me a kiss before you go. ",
                button: [
                    { chatID: 59, text: "*mwa*", callback: "" },
                ]
            },
            {
                chatID: 59,
                speaker: "janice",
                text: "Love you. Can't wait to see you when I have time. ",
                button: [
                    { chatID: -1, text: "Love you too", callback: "task3end" },
                ]
            },
            {
                chatID: 60,
                speaker: "me",
                text: "Why is the waiter just leaving your house! Are you cheating on me with him?",
                button: [
                    { chatID: 61, text: "...", callback: "task4_2" },
                ]
            },
            {
                chatID: 61,
                speaker: "janice",
                text: "What? The waiter? No. I wasn't cheating.",
                button: [
                    { chatID: 62, text: "Then why was he leaving you house just now?", callback: "task4_3" },
                ]
            },
            {
                chatID: 62,
                speaker: "janice",
                text: "Now listen here you big meany. He was just coming by to give me my membership " +
                    "card for Dorcia! They are an exculsive place. I would never cheat. You know I'm " +
                    "saving myself for marriage. You just come into my house with wild accusations! ",
                button: [
                    { chatID: 63, text: "Why would they come to your house to give you a card? ", callback: "task4_4" },
                ]
            },
            {
                chatID: 63,
                speaker: "janice",
                text: "They are exclusive. I know why you're angry. We've been dating for a while and " +
                    "you haven't even touched my lady bits. Is that what you want? Do you want to touch " +
                    "my special area?", 
                button: [
                    { chatID: 64, text: "No. That's not it. ", callback: "task4_5" },
                ]
            },
            {
                chatID: 64,
                speaker: "janice",
                text: "It's ok. I know guys get horny. I'm super horny too. Look how wet you make " +
                    "me. because I'm such a great girlfriend I'll let you orally pleasure my " +
                    "special little area. Plus you own me one. Do you want to lick my special area? ",
                button: [
                    { chatID: 66, text: "Yes I do. ", callback: "task4_6" },
                    { chatID: 65, text: "No! You're cheating on me and I deserve better! ", callback: "breakup" },
                ]
            },
            {
                chatID: 65,
                speaker: "janice",
                text: "Fine. I never liked you anyway! And I have been cheating on you, you loser!",
                button: [
                    { chatID: -1, text: "I knew it! You'll never see me again. ", callback: "leave" },
                ]
            },
            {
                chatID: 66,
                speaker: "janice",
                text: "H-h-how does it look?",
                button: [
                    { chatID: 67, text: "It looks amazing ", callback: "task4_7" },
                ]
            },
            {
                chatID: 67,
                speaker: "janice",
                text: "!",
                button: [
                    { chatID: 68, text: "?", callback: "task4_8" },
                ]
            },
            {
                chatID: 68,
                speaker: "me",
                text: "...is that cum? ",
                button: [
                    { chatID: 69, text: "...", callback: "" },
                ]
            },
            {
                chatID: 69,
                speaker: "janice",
                text: "No! I'm a virgin. I already told you that. Those are my fluids. You make me " +
                    "so wet and creamy. Stop making me feel bad about my special area. You're making me " +
                    "so self-conscious and embarrased right now. Maybe we shouldn't do this. ",
                button: [
                    { chatID: 70, text: "I'm so sorry. I didn't mean that. Your special area looks amazing. ", callback: "task4_9" },
                    { chatID: 65, text: "Stop lying! That is cum! I'm not eating the wiater's creampie! ", callback: "breakupAlt" },
                ]
            },
            {
                chatID: 70,
                speaker: "janice",
                text: "That's my good boy. Lick me up and don't forget about the my little clit. hehe",
                button: [
                    { chatID: 71, text: "...", callback: "task4_10" },
                ]
            },
            {
                chatID: 71,
                speaker: "janice",
                text: "Mmmmm yes. That feels good. How do I taste? ",
                button: [
                    { chatID: 72, text: "Mmmm gofff kmmmmm *lick* *smack* ", callback: "task4_11" },
                ]
            },
            {
                chatID: 72,
                speaker: "janice",
                text: "Hehehe. That was fun. Now I owe you one. Maybe we'll do something fun, but " +
                    "not too fun! My legs are all wobbly. Can't wait to see you again! Love you! ",
                button: [
                    { chatID: -1, text: "Love you too! ", callback: "leave" }
                ]
            },
            {
                chatID: 73,
                speaker: "janice",
                text: "Oh my god. I'm so glad you stopped by! I have to run and help my aunt Bess for a " +
                    "week and I can't take " + sc.n("dog") + ". I hate to do this to you, but I don't " +
                    "have anyone I can trust. Can you be the best boyfriend ever and watch " + sc.n("dog") +
                    "? I would mean the world to me and I would owe you big time! ",
                button: [
                    { chatID: 84, text: "How big time? ", callback: "" },
                ]
            },
            {
                chatID: 74,
                speaker: "janice",
                text: "Oh my. I guess you haven't met " + sc.n("dog") + " yet. He thinks he's the " +
                    "alpha and gets angry if there's some he perceives as a threat to me. Quick get " +
                    "down on all fours and put your head to the floor to show you're not a threat. ",
                button: [
                    { chatID: 76, text: "[Be the beta]", callback: "task0_2" },
                    { chatID: 117, text: "I'm not getting on my knees! I'm the Alpha!", callback: "task0_1a" },
                ]
            },
            {
                chatID: 75,
                speaker: "janice",
                text: "Well I can't date someone who doesn't respect " + sc.n("dog") + "! We're " +
                    "over! I never want to see such a mean-y again! ",
                button: [
                    { chatID: -1, text: "Fine! Bye.", callback: "breakupFirst" },
                ]
            },
            {
                chatID: 76,
                speaker: "janice",
                text: "Awww. Those are my good boys. I think he might like you. ",
                button: [
                    { chatID: 0, text: "Oh good. ", callback: "" },
                ]
            },
            {
                chatID: 77,
                speaker: "thinking",
                text: "I don't have peanut butter. ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" },
                ]
            }, 
            {
                chatID: 78,
                speaker: "janice",
                text: "Thanks for fixing my pipes, I really needed that! My boyfriend that I was " +
                    "telling out about is here now. ",
                button: [
                    { chatID: 79, text: "...", callback: "task2_1" },
                ]
            },
            {
                chatID: 79,
                speaker: "!plumber",
                text: "Hehe. You have a fine woman, little man. Spoil her. ",
                button: [
                    { chatID: 80, text: "ok", callback: "talk" },
                ]
            },
            {
                chatID: 80,
                speaker: "janice",
                text: "That was just the plumber. My shower drain always gets clogged! Haivng " +
                    "all this hair can be so annoying sometimes! So what's up? ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" },
                ]
            },
            {
                chatID: 81,
                speaker: "janice",
                text: "Oh my, that's forward. ",
                button: [
                    { chatID: 82, text: "So, do you want to touch it? ", callback: "flash" },
                ]
            },
            {
                chatID: 82,
                speaker: "janice",
                text: "I'm not going to lose virginity like this, but I guess I can show you my tits!  ",
                button: [
                    { chatID: -1, text: "Oh yeah! ", callback: "buildMenu" },
                ]
            },
            {
                chatID: 83,
                speaker: "janice",
                text: "Hehehe. Don't worry. I have many plans for that little clitty of yours in " +
                    "the future. Now please can you put that away. ",
                button: [
                    { chatID: -1, text: "Oh, sure. ", callback: "buildMenu" },
                ]
            },
            {
                chatID: 84,
                speaker: "janice",
                text: "Super big time! So big I might even play with your penis and give you a blow-y. " +
                    "Like a lot of blow-ys. All the blow-ys! We may even have sex, but it will have to " +
                    "be in the butt. Do you want to have butt sex with me? ",
                button: [
                    { chatID: 85, text: "Fuck yes! ", callback: "" },
                ]
            },
            {
                chatID: 85,
                speaker: "janice",
                text: "I knew you would! The dog food is next to his bowl, come by once a day to feed, water " +
                    "and play with him. I'll be back in a week. " +
                    "Please take care of my precious little " + sc.n("dog") + " for me. He's my world! " +
                    "This is really important, don't give him any peanut butter, just the dog food. He goes crazy " +
                    "for peanut butter and gets hard to control.  ",
                button: [
                    { chatID: 86, text: "Feed and water him every day.", callback: "" },
                ]
            },
            {
                chatID: 86,
                speaker: "janice",
                text: "Yes. Every day. Also I know guys do weird stuff. Please be respectful " +
                    "of my house and stay out of my room. It's private. I hate to drop this on " +
                    "you all of a sudden, but I really love that I have someone I can depend on. " +
                    "I know you'll be awesome. Here's my house key. I Love you so much baby. ",
                button: [
                    { chatID: -1, text: "Love you too. [Take her house key]", callback: "buildMenu" },
                ]
            },
            {
                chatID: 87,
                speaker: "thinking",
                text: "I don't have any peanut butter. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 88,
                speaker: "me",
                text: "Nummy nummy peanut butter!  ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "Gross. I'm not doing that. [Need to raise your beast level] ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 90,
                speaker: "thinking",
                text: "His tongue is so coarse and thick rubbing between my butt cheeks. I feel " +
                    "so naughty and dirty letting him lick me like this. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 91,
                speaker: "thinking",
                text: "He's angry. I better improve my relastionship with him before I can pet him. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 92,
                speaker: "me",
                text: "Who's a good boy! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 93,
                speaker: "me",
                text: "Aaaak! What! Why are you knocking me over! I should be the dominate one here! " +
                    "I'm the human! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 94,
                speaker: "me",
                text: "OUCH! Hey, give me back my clothes! How embarrassing that I'm " + sc.n("dog") +
                    "'s submissive.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 95,
                speaker: "thinking",
                text: "Talking him for a walk is a great idea. ",
                button: [
                    { chatID: -1, text: "I'm the alpha. I should lead. ", callback: "walk_lead" },
                    { chatID: -1, text: "He's the alpha. I'll let him lead.", callback: "walk_follow" },
                    { chatID: -1, text: "I changed my mind. ", callback: "reset" },
                ]
            },
            {
                chatID: 96,
                speaker: "thinking",
                text: "I need to put on some appropriate clothes first. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 97,
                speaker: "me",
                text: "Aaaaaaa!!! Bad " + sc.n("dog") + "! No. No. Don't put that in there! Bad! ",
                button: [
                    { chatID: 98, text: "...", callback: "dsex2" },
                ]
            },
            {
                chatID: 98,
                speaker: "thinking",
                text: "OOOo fuck. I'm getting dominated by a dog! He's making me his literal bitch, " +
                    "and it really hurts! He's so rough! Fuck, he just shoved his doggy dick inside me " +
                    "and it's tearing me open! ",
                button: [
                    { chatID: 99, text: "...", callback: "dsex3" },
                ]
            },
            {
                chatID: 99,
                speaker: "thinking",
                text: "I am such a pathetic bitch, but it feel so good to get dominated by a dog! ",
                button: [
                    { chatID: 100, text: "...", callback: "dsex4" },
                ]
            },
            {
                chatID: 100,
                speaker: "thinking",
                text: "Oh gross. My ass is filled with doggy sperm. I can feel it run down my " +
                    "balls and leg. I'm so dirty. ",
                button: [
                    { chatID: -1, text: "...", callback: "dsex5" },
                ]
            },
            {
                chatID: 101,
                speaker: "me",
                text: "Oh man. That was the most embarrasing thing ever to happen to me. Do " +
                    "you think they posted that online. I would hate for anyone I know to see it. " +
                    "And " + sc.n("cecilia") + " seeing me and not helping. And you, " + sc.n("dog") +
                    "have to stop doing that in public! *sigh* I know you won't since I'm your bitch, " +
                    "and you do what ever you want to me. But really. Please stop raping me in public. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 102,
                speaker: "janice",
                text: "You didn't feed my poor little doggy every day! The poor thing! If you " +
                    "can't respect me enough to take care of my doggy, then you don't deserve " +
                    "these big round beautiful tits! Take a long look, becuase this is the last " +
                    "time you'll ever see them! We're over! Bye bye loser! Now get out before I sick " +
                    sc.n("dog") + " on you! ",
                button: [
                    { chatID: 103, text: "aw crap. Ok, bye", callback: "breakupDogsit" },
                ]
            },
            {
                chatID: 103,
                speaker: "janice",
                text: "You're the greatest boyfriend ever! " + sc.n("dog") + " is going to be " +
                    "so happy to see you too! ",
                button: [
                    { chatID: -1, text: "Awww thanks!", callback: "checkDog" },
                ]
            },
            {
                chatID: 104,
                speaker: "janice",
                text: sc.n("dog") + "!!! What are you doing!?!",
                button: [
                    { chatID: 105, text: "aaaakk!!", callback: "bitch_0_d1" },
                ]
            },
            {
                chatID: 105,
                speaker: "janice",
                text: "Bad doggy! Bad! Sorry about that. I don't know what got into him. He's " +
                    "usually so lovable and cuddly. You can put your clothes back on, I'm going " +
                    "to lock him in my room. ",
                button: [
                    { chatID: 106, text: "Thanks", callback: "bg" },
                ]
            },
            {
                chatID: 106,
                speaker: "thinking",
                text: "Oh wow, that was close. I was afraid he was going to rape my ass right in " +
                    "front of her. I can't even imagine what she would do. Probably tell everyone " +
                    "I'm a dog's bitch. I'd have to move and never show my face in this town again.",
                button: [
                    { chatID: 107, text: "...", callback: "checkPanties" },
                ]
            },
            {
                chatID: 107,
                speaker: "janice",
                text: "So. I seem to be missing a pair of panties and a bra that were there " +
                    "before I left. You wouldn't know anything about that would you? ",
                button: [
                    { chatID: 108, text: "I uh.. what. No", callback: "" },
                ]
            },
            {
                chatID: 108,
                speaker: "janice",
                text: "So, anyways. I do owe you for watching my cuddly cute doggy! Give me that dick " +
                    "I'm going to lose my virginity to you now! Please I need to be filled with your cum! ",
                button: [
                    { chatID: -1, text: "Oooh yeah", callback: "checkChastity" },
                ]
            },
            {
                chatID: 109,
                speaker: "janice",
                text: "Oh. Is that a chastity cage? Why are you wearing that? I thought you liked me. Do you " +
                    "not want to have sex with me? ",
                button: [
                    { chatID: 110, text: "I do. I forgot I had it on. ", callback: "" },
                ]
            },
            {
                chatID: 110,
                speaker: "janice",
                text: //change this to sex
                    "So does it get hard? Why is it so floppy. Do you not think I'm sexy? " +
                    "Maybe you don't want to have sex with me? ",
                button: [
                    { chatID: 111, text: "It gets hard! I don't know why it's not. I do like you, and I totally want to have sex with you!", callback: "" },
                ]
            },
            {
                chatID: 111,
                speaker: "janice",
                text: "Here I am throwing myself at you, completely naked, ready to lose my virginity " +
                    "to you and you do this? Do you not know how much time I spent thinking of this " +
                    "moment all week? I was going to show you how much I love you with my body. " +
                    "You don't love me do you? You're just using me!",
                button: [
                    { chatID: 112, text: "No. I do love you. I'm sorry we can't have sex right now. I'll make it up to you! ", callback: "" },
                ]
            },
            {
                chatID: 112,
                speaker: "janice",
                text: "Hrumph! Maybe I should just date that nice waiter from the restaurant. I'll " +
                    "bet he would fuck me! He's not some pathetic dicked loser who can't fuck his girlfriend! ",
                button: [
                    { chatID: 113, text: "That guy's an asshole! You want to come? I'll bend you over this couch and eat your pussy right now! ", callback: "" },
                    { chatID: 116  , text: "I am a pathetic dicked loser. You're right. ", callback: "" },

                ]
            },
            {
                chatID: 113,
                speaker: "janice",
                text: "I'm not horny anymore. Why don't you just go. I don't know if we should be " +
                    "together anymore. ",
                button: [
                    { chatID: 114, text: "Because of this! You just want to fuck the waiter! ", callback: "" },

                ]
            },
            {
                chatID: 114,
                speaker: "janice",
                text: "It has nothing to do with the waiter. Just go. Let me think if you're worth " +
                    "my time. ",
                button: [
                    { chatID: 115, text: "Baby...", callback: "" },

                ]
            },
            {
                chatID: 115,
                speaker: "janice",
                text: "No! Go. I need to think. ",
                button: [
                    { chatID: -1, text: "ok...", callback: "bitch_0_end" },

                ]
            },
            {
                chatID: 116,
                speaker: "janice",
                text: "I know. I don't know if I have room in my life for a loser like you. " +
                    "You should go while I think about my future and if you're going to be a part of it.",
                button: [
                    { chatID: -1, text: "ok...", callback: "bitch_0_end" },

                ]
            },
            {
                chatID: 117,
                speaker: "janice",
                text: "If you respect " + sc.n("dog") + " and I you will get down on all fours " +
                    "and show him you're the beta. I can't date someone who is going to cause " +
                    "problems with my little doggy!",
                button: [
                    { chatID: 76, text: "[Be the beta]", callback: "task0_2" },
                    { chatID: 75, text: "Dating you isn't worth getting on my hands and knees! ", callback: "task0_1a" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};