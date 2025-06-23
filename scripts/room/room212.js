//Room name
var room212 = {};
room212.main = function () {
    cl.nude();
    char.changeMenu("hide", false, true);
    var appearance = "m";
    if (cl.c.hairLength > 1 && cl.c.chest > 1)
        appearance = "f";
    g.internal = {
        d: [
            { l: 83, t: 494, w: 227, h: 246 },
            { l: 379, t: 500, w: 223, h: 162 },
            { l: 520, t: 503, w: 110, h: 122 },
            { l: 610, t: 505, w: 83, h: 95 }
        ],
        s: [
            { l: 13, t: 423, w: 412, h: 657 },
            { l: 339, t: 428, w: 303, h: 652 },
            { l: 498, t: 496, w: 336, h: 548 },
            { l: 573, t: 481, w: 276, h: 450 }
        ],
        dk: 0,
        num: 0,
        appearance: appearance,
        counter: 0
    };
    var gh = missy.get("gloryHoleCounter");
    switch (gh) {
        case 0:
        case 1:
            sc.show("sporty");
            nav.button({
                "type": "img",
                "name": "sporty",
                "left": 1206,
                "top": 457,
                "width": 386,
                "height": 587,
                "image": "212_gloryhole/sporty.png"
            }, 212);
            chat(0, 212);
            break;
        default:
            room212.btnclick("resetview");
            chat(9, 212);
            break;
    }
};

room212.btnclick = function (name) {
    switch (name) {
        case "swallow":
            nav.killall();
            nav.bg("212_gloryhole/c" + g.internal.dk + "_" + g.internal.appearance + "_s.jpg");
            levels.oral(g.internal.dk === "1" ? 4 : 3, true, false, "m", null, "unk");
            gv.mod("energy", -10);
            chat(5, 212);
            break;
        case "facial":
            nav.bg("212_gloryhole/c" + g.internal.dk + "_" + g.internal.appearance + "_f.jpg");
            levels.oral(g.internal.dk === "1" ? 4 : 3, false, false, "m", null, "unk");
            cl.c.cumface = true;
            gv.mod("energy", -10);
            chat(6, 212);
            break;
        case "dick_0":
        case "dick_1":
        case "dick_2":
        case "dick_3":
            g.internal.num = name.replace("dick_", "");
            nav.killbutton("girltalk");
            sc.select("suck", "212_gloryhole/icon_suck.png", 0);
            sc.select("sporty", "212_gloryhole/icon_sporty.png", 1);
            break;
        case "suck":
            nav.killall();
            g.internal.dk = "2";
            if (g.internal.num === "1")
                g.internal.dk = "1";

            nav.bg("212_gloryhole/bj" + g.internal.dk + "_" + g.internal.appearance + ".gif");
            g.roomTimeout = setTimeout(function () {
                sc.select("swallow", "212_gloryhole/icon_swallow.png", 0);
                sc.select("facial", "212_gloryhole/icon_facial.png", 1);
            }, 2000);
            break;
        case "sporty":
            nav.killbutton("suck");
            nav.killbutton("snacks");
            chat(1000, 212);
            break;
        case "sportyCock1":
            sc.modLevel("sporty", 20, 3);
            room212.btnclick("resetview");
            chat(1001, 212);
            break;
        case "resetview":
            nav.killall();
            nav.bg("212_gloryhole/bg.jpg");
            nav.button({
                "type": "img",
                "name": "girltalk",
                "left": 1539,
                "top": 290,
                "width": 265,
                "height": 188,
                "image": "212_gloryhole/girltalk.png"
            }, 212);
            nav.button({
                "type": "btn",
                "name": "snacks",
                "left": 711,
                "top": 222,
                "width": 349,
                "height": 612,
                "image": "212_gloryhole/snacks.png"
            }, 212);
            nav.button({
                "type": "img",
                "name": "sporty",
                "left": 1206,
                "top": 457,
                "width": 386,
                "height": 587,
                "image": "212_gloryhole/sporty.png"
            }, 212);
            nav.button({
                "type": "img",
                "name": "me",
                "left": 1302,
                "top": 494,
                "width": 435,
                "height": 586,
                "image": "212_gloryhole/me.png"
            }, 212);
            
            break;
        case "nextCock":
            if (g.internal.counter > 3) {
                chat(8, 212);
            }
            else {
                nav.killbutton("nextCock");
                nav.killbutton("snacks");
                room212.chatcatch("d" + g.rand(0, 4));
            }
            g.internal.counter++;
            break;
        case "snacks":
            sc.select("soda", "212_gloryhole/icon_soda.png", 0);
            sc.select("chips", "212_gloryhole/icon_chips.png", 1);
            sc.selectCancel("snackCancel", 2);
            break;
        case "soda":
            nav.killbutton("soda");
            nav.killbutton("chips");
            nav.killbutton("snackCancel");
            if (gv.get("money") < 5)
                chat(7, 212);
            else {
                gv.mod("money", -5);
                gv.mod("energy", 60);
                levels.mod("fitness", -25, 999);
            }
            break;
        case "chips":
            nav.killbutton("soda");
            nav.killbutton("chips");
            nav.killbutton("snackCancel");
            if (gv.get("money") < 2)
                chat(7, 212);
            else {
                gv.mod("money", -2);
                gv.mod("energy", 30);
            }
            break;
        case "snackCancel":
            nav.killbutton("soda");
            nav.killbutton("chips");
            nav.killbutton("snackCancel");
            break;
        
        default:
            break;
    }
};

room212.chatcatch = function (callback) {
    switch (callback) {
        case "d0":
        case "d1":
        case "d2":
        case "d3":
            dval = parseInt(callback.replace("d", ""));
            nav.button({
                "type": "btn",
                "name": "dick_" + dval,
                "left": g.internal.d[dval].l,
                "top": g.internal.d[dval].t,
                "width": g.internal.d[dval].w,
                "height": g.internal.d[dval].h,
                "image": "212_gloryhole/dick" + dval + ".png"
            }, 212);
            break;
        case "s0":
        case "s1":
        case "s2":
        case "s3":
            var sval = parseInt(callback.replace("s", ""));
            nav.killbutton("dick_" + sval);
            nav.killbutton("sporty");
            nav.button({
                "type": "img",
                "name": "dick",
                "left": g.internal.s[sval].l,
                "top": g.internal.s[sval].t,
                "width": g.internal.s[sval].w,
                "height": g.internal.s[sval].h,
                "image": "212_gloryhole/dick" + sval + "_s.png"
            }, 212);
            nav.next("sportyCock1");
            break;
        
        case "sportyCock0":
            room212.chatcatch("s" + g.internal.num);
            break;
        case "nextCock":
            room212.btnclick("resetview");
            nav.wait("nextCock");
            break;
        case "start":
            g.internal.num = g.rand(0, 4);
            nav.killbutton("snacks");
            sc.select("suck", "212_gloryhole/icon_suck.png", 0);
            sc.select("sporty", "212_gloryhole/icon_sporty.png", 1);
            break;
        case "start2":
            nav.killbutton("girltalk");
            g.internal.num = "2";
            nav.killbutton("snacks");
            sc.select("suck", "212_gloryhole/icon_suck.png", 0);
            sc.select("sporty", "212_gloryhole/icon_sporty.png", 1);
            break;
        case "resetview":
            room212.btnclick("resetview");
            break;
        case "endEvent":
            cl.undo();
            missy.didJob(6, 1, null);
            missy.mod("gloryHoleCounter", 1)
            char.room(224);
            break;
        default:
            break;
    }
};

room212.chat = function (chatID) {
    if (chatID === 1000) {
        var youTakeIt = [
            "That cock's all yours!",
            "You want to take this one?",
            "That dick has your name all over it.",
            "My jaw is sore, you take this one. ",
            "You look like you need some cock.",
            "I need a break. You can swallow that cock. ",
            "You look hungry. You should take that snack.",
            "You need this dick more than me."
        ];
        return {
            chatID: 0,
            speaker: "me",
            text: youTakeIt[g.rand(0, youTakeIt.length)],
            button: [
                { chatID: -1, text: "...", callback: "sportyCock0" }
            ]
        };
    }
    else if (chatID === 1001) {
        var youTakeIt1 = [
            "That was a stinky cock!",
            "I really needed that!",
            "His dick totally smelled like perfume.",
            "He was so rough with my little throat! ",
            "I didn't gag once on that one! ",
            "I do love sucking a fat juicy cock!",
            "I love the taste of cum so much! Thanks you!",
            "Thanks! I needed cum in my belly. "
        ];
        return {
            chatID: 0,
            speaker: "!sporty",
            text: youTakeIt1[g.rand(0, youTakeIt1.length)],
            button: [
                { chatID: -1, text: "...", callback: "nextCock" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "!sporty",
                text: "Oh hi, I'm so glad you're here! Sitting in this room can be so boring sometimes " +
                    "just waiting for someone to poke their dick in that hole. Have a seat!",
                button: [
                    { chatID: 1, text: "Sure, Hi! Yeah excited to start my first day! ", callback: "resetview" }
                ]
            },
            {
                chatID: 1,
                speaker: "!sporty",
                text: "Oh cool. This is the third time I've come here. My first day your friend " + sc.n("cecilia") +
                    " was here and helped so much, but she totally kept taking all the dicks. Luckily we got three " +
                    "dicks at once and she couldn't reach the third so I got to suck it. It was so fun! ",
                button: [
                    { chatID: 2, text: "Oh. I guess I'm not surprised she can be greedy with the dicks. How was the second day? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "!sporty",
                text: "Oh that was a rough day. That's why I'm glad you're here. The entire football team " +
                    "came in. My jaw was so sore by the fourth dick I didn't think I could do anymore. Luckily " +
                    sc.n("p") + " came in to check on me. When she saw how far behind I was she helped out. " +
                    "She was amazing. No guy lasted more than 30 seconds with her blowing them. I was totally " +
                    "amazed. I want so much to be like her someday. ",
                button: [
                    { chatID: 3, text: "oh wow!", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "!sporty",
                text: "She was throating one guy deep, and a cock in each fist. She was spitting their " +
                    "cum into her hands to use as lubrication for each hand job.I don't think they guys knew " +
                    "they were getting jacked off with their teammates cum as lube. I had to pause a few times " +
                    "just to watch her go. It was really a thing of beauty. ",
                button: [
                    { chatID: 4, text: "So has it been busy today? ", callback: "d2" }
                ]
            },
            {
                chatID: 4,
                speaker: "!sporty",
                text: "Not bad... oh look, a dick. Did you want to take this one? ",
                button: [
                    { chatID: -1, text: "...", callback: "start2" },
                ]
            },
            {
                chatID: 5,
                speaker: "me",
                text: "Yummy cummies for my tummy!",
                button: [
                    { chatID: -1, text: "Sit back down", callback: "nextCock" },
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "Oh man! My face is covered in cum!",
                button: [
                    { chatID: -1, text: "Sit back down", callback: "nextCock" },
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "I don't have enough money. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 8,
                speaker: "me",
                text: "That was fun, but I've gotta get back. See you in class.",
                button: [
                    { chatID: -1, text: "...", callback: "endEvent" },
                ]
            },
            {
                chatID: 9,
                speaker: "!sporty",
                text: "Welcome back! I see you love the cock as much as me!",
                button: [
                    { chatID: -1, text: "I really do.", callback: "nextCock" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};