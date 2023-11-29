//motherRoom
var room14 = {};

room14.main = function () {
    if (g.hourBetween(20, 21)) 
        nav.bg("14_motherRoom/14_motherRoomNightLight.jpg");

    var btnList = new Array();
    g.internal = { pussy: 0, asshole: 0 };
    if (!g.hourBetween(6, 21)) {
        if (g.dt.getDay() === 0 || g.dt.getDay() === 5 || g.dt.getDay() === 5 || g.dt.getDay() === 6) {
            btnList = [{
                "type": "btn",
                "name": "dickSleep",
                "left": 986,
                "top": 696,
                "width": 713,
                "height": 193,
                "image": "14_motherRoom/14_motherAsleepDick.png"
            }];
        }
        else {
            btnList = [{
                "type": "btn",
                "name": "motherSleep",
                "left": 1031,
                "top": 779,
                "width": 591,
                "height": 114,
                "image": "14_motherRoom/14_motherAsleep.png"
            }];
        }
    }
    else if (sc.getTimeline("landlord").thisRoom) {
        if (g.dt.getDay() === 0 || g.dt.getDay() === 5 || g.dt.getDay() === 6) {
            btnList = [{
                "type": "btn",
                "name": "couple",
                "left": 737,
                "top": 0,
                "width": 714,
                "height": 1080,
                "image": "14_motherRoom/couple.png"
            }];

        }
        else {
            btnList = [{
                "type": "btn",
                "name": "motherRobe",
                "left": 1193,
                "top": 42,
                "width": 466,
                "height": 1038,
                "image": "14_motherRoom/14_motherRobe.png"
            }];
        }
    }
    else {
        btnList = [
            {
                "type": "btn",
                "name": "closet",
                "left": 414,
                "top": 375,
                "width": 461,
                "height": 538,
                "image": "14_motherRoom/14_closet.png"
            },
            {
                "type": "btn",
                "name": "dresser",
                "left": 1569,
                "top": 781,
                "width": 317,
                "height": 299,
                "image": "14_motherRoom/dresserDay.png"
            }];
        if (daily.get("momChoreBed")) {
            btnList.push({
                "type": "img",
                "name": "bedmade",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bedmade.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "bedMessy",
                "title": "Make Bed?",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bed.png"
            });
        }
    }

    navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 14);
    });

    nav.buildnav(navList);
};

room14.btnclick = function (name) {
    switch (name) {
        case "closet":
            if (!daily.get("momRaidCloset"))
                char.room(17);
            else
                chat(1, 14);
            break;
        case "dresser":
            nav.killall();
            nav.bg("14_motherRoom/014_dresserDrawer.jpg");
            if (!cl.hasClothing("buttplug", "s")) {
                nav.button({
                    "type": "btn",
                    "name": "buttplug",
                    "left": 391,
                    "top": 378,
                    "width": 338,
                    "height": 394,
                    "image": "14_motherRoom/d_plug.png"
                }, 14);
            }
            nav.button({
                "type": "btn",
                "name": "pic",
                "left": 858,
                "top": 168,
                "width": 765,
                "height": 655,
                "image": "14_motherRoom/d_pic.png"
            }, 14);
            nav.back("reset");
            break;
        case "bedMessy":
            nav.killbutton("bedMessy");
            nav.button({
                "type": "img",
                "name": "bedmade",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bedmade.png"
            }, 14);
            daily.set("momChoreBed");
            gv.mod("rentKnockOff", 5);
            chat(9, 14);
            break;
        case "pic":
            nav.killall();
            nav.bg("14_motherRoom/014_dresserDrawer1.jpg");
            chat(5, 14);
            break;
        case "buttplug":
            nav.killall();
            nav.bg("14_motherRoom/014_dresserDrawer2.jpg");
            chat(6, 14);
            break;
        case "reset":
            char.room(14);
            break;

        default:
            break;
    }
};

room14.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(14);
            break;
        case "resetDresser":
            room14.btnclick("dresser");
            break;
        case "stealplug":
            cl.add("buttplug", "s");
            levels.mod("xdress", 40, 2);
            room14.btnclick("dresser");
            break;
        default:
            break;
    }
};

room14.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Nothing here..",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I've already raided " + sc.n("landlord") + "'s closet today. I better wait till tomorrow. ",
            button: []
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "You need to log into your computer in your room, look for job, then go work. I'm not supporting your any longer.",
            button: []
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Hello honey, I'm so proud that you're working now. you keep it up and you just may make something of yourself.",
            button: []
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Mustn't wake " + sc.n("landlord") + "...",
            button: []
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "oh wow. I can't remember " + sc.n("landlord") + " with long hair. I always thought she just kept it short. " +
                "I wonder who that guy is. They do look happy. ",
            button: [
                { chatID: -1, text: "[Put the picture back.]", callback: "resetDresser" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Gross!! Is this what I think it is? ",
            button: [
                { chatID: -1, text: "[Put it back]", callback: "resetDresser" },
                { chatID: 7, text: "[Sniff it]", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "OOo it smells like butt. This has to be " + sc.n("landlord") + "'s butt plug. I didn't take her for someoene " +
                "that was into butt stuff. This is so disgusting. I really should put it back. ",
            button: [
                { chatID: -1, text: "[Put it back]", callback: "resetDresser" },
                { chatID: 8, text: "[Steal her butt plug]", callback: "stealplug" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "I'm such a dirty dirty dirty bitch! This has been up my " + sc.n("landlord") + "'s ass and I'm going to insert " +
                "up my ass. Like some kind of weird ass to ass porn. ",
            button: []
        },

        {
            chatID: 9,
            speaker: "thinking",
            text: "$5 dollars knocked off the rent this week.",
            button: []
        },
    ];

    return cArray[chatID];
};
