﻿//Living Room
var room26 = {};
room26.main = function () {

    //if (g.prevRoom === 8 && g.pass === 26) {
    //    nav.button({
    //        "type": "btn",
    //        "name": "landlord",
    //        "left": 977,
    //        "top": 69,
    //        "width": 634,
    //        "height": 942,
    //        "image": "26_livingRoom/ll.png"
    //    }, 26);
    //    if (cl.c.panties === "c" && cl.c.shirt === null && cl.c.pants === null && cl.c.socks === null && cl.c.shoes === null && cl.c.dress === null) {
    //        zcl.displayMain(-250, 200, .25, "panties", true);
    //        chat(52, 26);
    //    }
    //    else
    //        chat(51, 26);
    //}
    //else {
    var btnList = new Array();
    if (sc.getTimeline("landlord").thisRoom) {
        if (sc.getTimeline("lola").thisRoom) {
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            btnList.push({
                "type": "btn",
                "name": "all3",
                "left": 416,
                "top": 63,
                "width": 1295,
                "height": 1017,
                "image": "26_livingRoom/all3.png"
            });
        }
        else {
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg");
            btnList.push({
                "type": "btn",
                "name": "landlord",
                "left": 977,
                "top": 69,
                "width": 634,
                "height": 942,
                "image": "26_livingRoom/ll.png"
            });
            if (sc.getstep("bigguy") === 6) {
                btnList.push({
                    "type": "btn",
                    "name": "bigguy",
                    "left": 430,
                    "top": 80,
                    "width": 303,
                    "height": 303,
                    "image": "26_livingRoom/bigguy.png"
                });
            }
        }
    }

    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 26);
    });
    nav.buildnav(navList);
    //}
};

room26.btnclick = function (name) {
    switch (name) {
        case "landlord":
            if (daily.get("landlord")) {
                chat(2, 26);
            }
            else {
                var ll = sc.getLevel("landlord");
                nav.button({
                    "type": "img",
                    "name": "chatbg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1001_rand/black_25.png"
                }, g.roomID);
                sc.select("chat_landlord", "26_livingRoom/chat_landlord.png", 0);
                sc.selectCancel("chat_cancel", 1);
            }
            
            break;
        case "chat_cancel":
            nav.killbutton("chatbg");
            nav.killbutton("chat_cancel");
            nav.killbutton("chat_landlord");
            break;
        case "chat_landlord":
            room26.btnclick("chat_cancel");
            var jobapplyconst = gv.get("jobapplyconst");
            var lllevel = sc.getLevel("landlord");
            var chatEvent = sc.taskGetStep("landlord", "talk");
            if (jobapplyconst < 2)
                chat(0, 26);
            else if (chatEvent === 0)
                chat(1, 26);
            else if (sc.getMission("landlord", "spermbank").notStarted)
                chat(3, 26);
            else if (sc.getMission("landlord", "spermbank").inProgress)
                chat(6, 26);
            else if (chatEvent === 1) 
                chat(7, 26);

            else if (!llevents.includes(4)) {
                sc.setEvent("landlord", 4);
                chat()
            }
            break;
        default:
            break;
    }
};

room26.chatcatch = function (callback) {
    $.each(callback.split(" "), function (i, v) {
        switch (v.trim()) {
            case "passtime":
                char.addtime(30);
                break;
            case "level1":
                sc.modLevel("landlord", 100, 0);
                break;
            case "daily":
                daily.set("landlord");
                break;
            case "missionSpermBank":
                sc.startMission("landlord", "spermbank");
                break;
            case "pantycheck":
                if (gv.get("lockdrawer"))
                    chat(9, 26);
                else
                    chat(8, 26);
                break;
            case "talk_0_complete":
                sc.completeMissionTask("landlord", "talk", 0);
                levels.mod("landlord", 100, 0);
                daily.set("landlord");
                break;
            case "talk_1_complete":
                sc.completeMissionTask("landlord", "talk", 1);
                sc.startMissionTask("landlord", "chores", 1);
                inv.add("landlordKey");
                levels.mod("landlord", 10, 999);
                daily.set("landlord");
                break;
            default:
                console.log("unknown callback: " + v)
                break;
        }
    });
};

room26.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Stop staring at my tits and go get a job!",
            button: [
                { chatID: -1, text: "...", callback: "passtime" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "I'm so glad you have such a manly job! You're really growing up. A few weeks working out there and you'll get " +
                "some big sexy man muscles! Some lucky girls going to just love running her hands all over your hard veiny construction " +
                "muscles... Anyway, I'm so happy you aren't a lazy fuck up anymore. Now let me watch my shows. ",
            button: [
                { chatID: -1, text: "Thanks? ", callback: "passtime talk_0_complete" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: sc.n("landlord") + "'s watching her shows.. run along.",
            button: [
                { chatID: -1, text: "[Run along]", callback: "passtime" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "You would not believe the day I had at the Sperm Bank today! First I got a huge order to ship out to our local buyer, way " +
                "to big for us to fill, but I couldn't say no. So now I have to find a way to double the donations I get in a month somehow. " +
                "I just don't know how I'll do it, but god finds a way I guess. ",
            button: [
                { chatID: 4, text: "That sounds like a lot of sperm! ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "I know I don't usually allow you to come to the Sperm Bank, but now that you're a working man, you could help. I have " +
                "a couple ideas. You can come by on Saturday morning if you want to help me out. I don't want to interfere " +
                "with your job, my working man. ",
            button: [
                { chatID: 5, text: "Sounds cool.", callback: "passtime daily " }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "Great! I'll be at the Sperm Bank Saturday Morning. I have a couple ideas on how you can help, but I'll " +
                "let you choose when you get there! ",
            button: [
                { chatID: -1, text: "Ok. See you Saturday!", callback: "missionSpermBank" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "I'm so happy we'll get to work together. Can't wait to see you Saturday morning! ",
            button: [
                { chatID: -1, text: "Ok. See you Saturday!", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "I can't thank you enough for helping me out. You really are growing into a man. Since you like helping " +
                "so much you can help me in the morning. Here's my bedroom key. If you make my bed in the morning I'll give " +
                "you $5 in allowance in addition to cleaning the dishes. ",
            button: [
                { chatID: -1, text: "Oh. cool", callback: "pantycheck" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "And no funny business. Your " + sc.n("el") + " like to go into my closet and steal things. I know there " +
                "isn't anything for you in there, but I just have to say. ",
            button: [
                { chatID: 10, text: "Oh. cool", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "And don't be rooting around my panty drawer like you did with your " + sc.n("el") + ". I know that horny young " +
                "men love the smell of pussy, but I don't need your fluids on my clean panties. ",
            button: [
                { chatID: 10, text: "Oh. ok.", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "I know you'll be a good boy and help me out. Here's the key, and behave yourself. ",
            button: [
                { chatID: -1, text: "Sweet. I will", callback: "talk_1_complete" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
