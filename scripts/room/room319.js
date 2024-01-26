//Room name
var room319 = {};
room319.main = function () {
    daily.set("dlock", false);
    dogLevel = sc.getLevel("dog");
    var displayMenu = true;
    var isLewd = cl.isLewd();
    var crawling = daily.get("dcrawl");
    var piss;
    switch (dogLevel) {
        case 0: case 1: piss = false; break;
        case 2: piss = g.rand(0, 12) === 0; break;
        case 3: piss = g.rand(0, 9) === 0; break;
        case 4: piss = g.rand(0, 6) === 0; break;
        case 5: piss = g.rand(0, 4) === 0; break;
        case 6: piss = g.rand(0, 2) === 0; break;
        default: piss = true;
    }
    if (dogLevel > 3 && !crawling) {
        sc.modLevel("dog", 20, 5);
        displayMenus = false;
        daily.set("dcrawl")
        nav.button({
            "type": "img",
            "name": "janice",
            "left": 453,
            "top": 42,
            "width": 957,
            "height": 1038,
            "image": "316_livingroom/knockdown.png"
        }, 316);
        chat(4, 319);
        displayMenu = false;
    }
    else if (dogLevel > 4 && !isLewd) {
        sc.modLevel("dog", 20, 6);
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
        chat(5, 319);
        displayMenu = false;
    }
    else if (!daily.get("dpee") && piss && isLewd && crawling) {
        displayMenu = false;
        daily.set("dpee");
        sc.modLevel("dog", 50, 999);
        levels.mod("piss", 25, 999);
        levels.mod("sub", 25, 999);
        zcl.assup(600, 790, .55, "");
        nav.button({
            "type": "img",
            "name": "pp",
            "left": 509,
            "top": 396,
            "width": 601,
            "height": 564,
            "image": "319_backyard/pp.png"
        }, 316);
        chat(6, 319);
    }
    

    if (displayMenu) {
        if (!daily.get("dcrawl")) {
            sc.select("iconCrawl", "316_livingroom/icon_crawl.png", 0);
            sc.select("ball", "319_backyard/ball.png", 1);
            sc.select("lock", "319_backyard/lock.png", 2);
            nav.button({
                "type": "img",
                "name": "dog",
                "left": 752,
                "top": 467,
                "width": 476,
                "height": 613,
                "image": "319_backyard/dog.png"
            }, 319);
        }
        else {
            sc.select("iconStand", "316_livingroom/icon_alpha.png", 0);
            if (cl.isLewd()) {
                gv.mod("arousal", 10);
                nav.button({
                    "type": "img",
                    "name": "dog",
                    "left": 1019,
                    "top": 564,
                    "width": 246,
                    "height": 332,
                    "image": "319_backyard/reddress.png"
                }, 319);
                zcl.assup(650, 500, .55, "");
                sc.select("pee", "319_backyard/pee.png", 1);
            }
            else if (cl.c.dress !== null) {
                gv.mod("arousal", 10);
                nav.button({
                    "type": "img",
                    "name": "dog",
                    "left": 1019,
                    "top": 564,
                    "width": 246,
                    "height": 332,
                    "image": "319_backyard/reddress.png"
                }, 319);
                zcl.assup(650, 500, .55, "reddress");
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "dog",
                    "left": 475,
                    "top": 596,
                    "width": 759,
                    "height": 300,
                    "image": "319_backyard/crawl.png"
                }, 319);

            }
        }
    }
    
    var navList = [316, 317, 318];
    nav.buildnav(navList);
};

room319.btnclick = function (name) {
    switch (name) {
        case "iconStand":
            daily.set("dcrawl", false);
            char.room(319);
            break;
        case "iconCrawl":
            daily.set("dcrawl");
            char.room(319);
            break;
        case "ball":
            if (sc.getLevel("dog") > 2) {
                nav.kill();
                nav.bg("319_backyard/bg.jpg", "319_backyard/bgnight.jpg");
                if (!daily.get("dball")) {
                    daily.set("dball");
                    sc.modLevel("dog", 25, 4);
                    levels.mod("beast", 15, 4);
                }
                nav.button({
                    "type": "img",
                    "name": "fetch",
                    "left": 1005,
                    "top": 439,
                    "width": 701,
                    "height": 541,
                    "image": "319_backyard/fetch.png"
                }, 319);
                nav.next("ball2");
            }
            else {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "fetch",
                    "left": 868,
                    "top": 439,
                    "width": 838,
                    "height": 541,
                    "image": "319_backyard/fetchIgnore.png"
                }, 319);
                chat(3, 319);
            }
            break;
        case "ball2":
            nav.kill();
            sc.select("iconCrawl", "316_livingroom/icon_crawl.png", 0);
            sc.select("ball", "319_backyard/ball.png", 1);
            nav.bg("319_backyard/catch.jpg", "319_backyard/catchnight.jpg");
            break;
        case "lock":
            daily.set("dlock");
            nav.kill();
            nav.bg("319_backyard/lock.jpg", "319_backyard/locknight.jpg");
            sc.select("unlock", "319_backyard/unlock.png", 0);

            chat(0, 319);
            break;
        case "unlock":
            daily.set("dlock", false);
            char.room(319);
            break;
        case "pee":
            if (gv.get("bladder") === 0) {
                chat(1, 319);
                nav.killbutton("pee");
            }
            else {
                nav.killall();
                nav.bg("319_backyard/peeday.jpg", "319_backyard/peenight.jpg");
                nav.button({
                    "type": "img",
                    "name": "pp",
                    "left": 494,
                    "top": 0,
                    "width": 1279,
                    "height": 1080,
                    "image": (cl.c.chastity === null ? "319_backyard/peedick.png" : "319_backyard/peechastity.png")
                }, 319);
                chat(2, 319);
            }
            break;
        default:
            break;
    }
};

room319.chatcatch = function (callback) {
    switch (callback) {
        case "finishPeeing":
            gv.mod("arousal", 50);
            levels.mod("piss", 25, 2);
            gv.mod("bladder", -1);
            sc.modLevel("dog", 50, 5);
            char.room(319);
            break;
        case "reset":
            char.room(319);
            break;
        default:
            break;
    }
};

room319.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Now I have the entire house to myself. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I don't have to pee. I should drink some water. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I can totally feel the dog's hot breath on my butthole. It makes me feel " +
                "so dirty doing this while my girlfriend is away, but I'm such a piss slut! ",
            button: [
                { chatID: -1, text: "...", callback: "finishPeeing" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "He's just ignoring me. Ungrateful dog! Maybe I should improve my relationship with " +
                "him. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Aaaak! What! Why are you knocking me over!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "OUCH! Hey, give me back my clothes!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "The dog's piss is so warm running down my back. I'm such a filthy toilet letting " +
                "the dog piss all over me. What a submissive piss slut I am. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};