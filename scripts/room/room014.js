//motherRoom
var room14 = {};

room14.main = function () {
    if (sc.getTimeline("landlord").thisRoom) {
        if (g.hourBetween(7, 22)) {
            nav.bg("14_motherRoom/14_motherRoomNightLight.jpg");
        }
    }
    

    var btnList = new Array();
    g.internal = { pussy: 0, asshole: 0 };
    if (!g.hourBetween(6, 22)) {
        if (sc.getTimeline("bigguy").thisRoom) {
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
        if (sc.getTimeline("bigguy").thisRoom) {
            if (daily.get("bigguy")) {
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
                daily.set("bigguy");
                nav.bg("14_motherRoom/bg_1.jpg");
                chat(33, 14);
            }
        }
        else {
            btnList = [{
                "type": "btn",
                "name": "motherRobe",
                "left": 844,
                "top": 195,
                "width": 499,
                "height": 885,
                "image": "14_motherRoom/14_motherRobe.png"
            }];
        }
    }
    else {
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
            nav.button({
                "type": "btn",
                "name": "dresser",
                "left": 1569,
                "top": 781,
                "width": 317,
                "height": 299,
                "image": "14_motherRoom/dresserDay.png"
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
        case "motherRobe":
            var llstep = sc.taskGetStep("landlord", "man");
            if (!daily.get("landlord")){
                if (gv.get("jobapplyconst") < 2)
                    chat(10, 14);
                else if (llstep === -1) {
                    chat(15, 14);
                }
                else if (llstep === 0) {
                    daily.set("landlord");
                    chat(11, 14);
                }
                else if (llstep === 1) {
                    chat(17, 14);
                }
                else if (llstep === 2)
                    chat(26, 14);
                else if (llstep === 3)
                    chat(45, 14);
            }
            else
                chat(14, 14);
            break;
        case "level4win":
            nav.bg("14_motherRoom/task1_2.jpg");
            g.internal = 0;
            nav.next("task1_2");
            sc.modLevel("landlord", 999, 4);
            break;
        case "level4lose":
            nav.killall();
            nav.bg("14_motherRoom/task1_1_lose.jpg");
            sc.modLevel("landlord", 15, 4);
            chat(20, 14);
            break;
        case "task1_2":
            if (g.internal === 0) {
                g.internal = 1;
                nav.bg("14_motherRoom/task1_3.jpg");
            }
            else {
                nav.killbutton("task1_2");
                nav.bg("14_motherRoom/task1_4.jpg");
                chat(22, 14);
            }
            break;
        case "motherSleep":
            nav.kill();
            nav.bg("14_motherRoom/sleep_bed.jpg");
            if (!pic.has("landlordSleep")) {
                nav.button({
                    "type": "btn",
                    "name": "takePic",
                    "left": 502,
                    "top": 381,
                    "width": 259,
                    "height": 124,
                    "image": "14_motherRoom/camera.png"
                }, 14);
            }
            
            nav.button({
                "type": "btn",
                "name": "sleepmolest",
                "left": 959,
                "top": 481,
                "width": 297,
                "height": 409,
                "image": "14_motherRoom/sleepmolest.png"
            }, 14);
            break;
        case "takePic":
            nav.killall();
            nav.bg("14_motherRoom/white.jpg");
            pic.add("landlordSleep");
            daily.set("landlordmolest");
            g.roomTimeout = setTimeout(function () {
                nav.bg("14_motherRoom/sleep_angry.jpg");
                chat(31, 14);
            }, 500);
            break;
        case "sleepmolest":
            if (daily.get("landlordmolest")) {
                chat(27, 14);
                nav.killbutton("sleepmolest");
            }
            else {
                sc.select("icon_finger", "14_motherRoom/icon_finger.png", 0);
                sc.select("icon_ass", "14_motherRoom/icon_ass.png", 1);
                sc.select("icon_lickass", "14_motherRoom/icon_lickass.png", 2);
                sc.select("icon_fuck", "14_motherRoom/icon_fuck.png", 3);
                sc.selectCancel("motherSleep", 4);
                nav.killbutton("sleepmolest");
                nav.killbutton("takePic");
            }
            break;
        case "icon_finger":
            nav.killall();
            sex.mod("hand", true, "f", 1);
            nav.bg("14_motherRoom/Sleeping_FingerPussy3.gif");
            nav.next("icon_finish");
            break;
        case "icon_ass":
            nav.killall();
            sex.mod("hand", true, "f", 1);
            nav.bg("14_motherRoom/Sleeping_FingerAhole.gif");
            nav.next("icon_finish");
            break;
        case "icon_lickass":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "sleep",
                "left": 673,
                "top": 367,
                "width": 800,
                "height": 600,
                "image": "14_motherRoom/sleep_blick.gif"
            }, 14);
            nav.next("icon_finish");
            break;
        case "icon_fuck":
            nav.killall();
            nav.bg("14_motherRoom/sleep_dick.jpg");
            nav.next("icon_fuck1");
            break;
        case "icon_fuck1":
            nav.killbutton("icon_fuck1");
            nav.bg("14_motherRoom/sleep_angry.jpg");
            chat(29, 14);
            break;
        case "icon_finish":
            nav.killall();
            nav.bg("14_motherRoom/sleep_happy.jpg");
            daily.set("landlordmolest");
            sc.modLevel("landlord", 26, 4);
            chat(28, 14);
            break;
        case "couple":
            var bgstep = sc.taskGetStep("bigguy", "straight");
            if (bgstep === 0) {
                chat(34, 14);
            }
            else
                chat(36, 14);
            break;
        case "dickSleep":
            chat(37, 14);
            break;
        case "task_3_3":
            nav.kill();
            if (levels.get("oral").l > 4) {
                nav.bg("task_3_3.jpg");
                chat(50, 14);
            }
            else {
                nav.bg("task_3_3a.jpg");
                chat(51, 14);
            }
            break;
        default:
            break;
    }
};

room14.chatcatch = function (callback) {
    switch (callback) {
        case "task1_1":
        case "task1_4":
            nav.killall();
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "task1_3":
            nav.bg("14_motherRoom/" + callback + ".jpg");
            sc.modLevel("landlord", 30, 5);
            levels.mod("dom", 53, 999);
            break;
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
        case "domlaugh":
            levels.mod("dom", 38, 999);
            sc.modLevel("landlord", 20, 999);
            nav.modbutton("motherRobe", "14_motherRoom/14_motherRobeLaugh.png", null, null);
            break;
        case "ll_man_1":
            sc.completeMissionTask("landlord", "man", 0, true);
            sc.modLevel("landlord", 53, 4);
            char.addtime(47);
            char.room(16);
            break;
        case "task1_2":
            if (sc.getLevel("landlord") > 1) {
                nav.bg("14_motherRoom/task1_2.jpg");
                g.internal = 0;
                nav.next("task1_2");
            }
            else {
                chat(21, 14);
            }
            break;
        case "level4Roll":
            charisma.init(8 - sc.getLevel("landlord"), "level4win", "level4lose", 14);
            break;
        case "task1_leave":
            sc.completeMissionTask("landlord", "man", 1, true);
            sc.modLevel("landlord", 53, 5);
            char.settime(22, 14);
            char.room(16);
            break;
        case "levelLeave":
            sc.modLevel("landlord", 22, 4);
            char.addtime(47);
            daily.set("landlord");
            char.room(16);
            break;
        case "spanking":
            daily.set("landlordmolest");
            g.pass = "sleepSpank";
            char.room(21);
            break;
        case "leave":
            daily.set("landlord");
            char.room(16);
            break;
        case "bg_s_0_end":
            sc.char[sc.i("bigguy")].display = true;
            sc.completeMissionTask("bigguy", "straight", 0, true);
            char.addtime(37);
            daily.set("bigguy");
            char.room(16);
            break;
        case "task2_1":
            nav.killall();
            levels.mod("dom", 20, 999);
            nav.bg("14_motherRoom/task1_2.jpg");
            break;
        case "task_2_2":
        case "task_2_3":
        case "task_2_4":
        case "task_2_5":
        case "task_3_2":
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "task_3_1":
            nav.kill();
            levels.mod("dom", 20, 999);
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "task_3_3":
            nav.button({
                "type": "tongue",
                "name": "task_3_3",
                "left": 1197,
                "top": 692,
                "width": 107,
                "height": 145,
                "image": "14_motherRoom/task_3_3.png"
            }, 14);
            break;
        case "task_2_end":
            sc.modLevel("landlord", 999, 3);
            sc.completeMissionTask("landlord", "man", 2, true);
            char.addtime(30);
            daily.set("landlord");
            char.room(16);
            break;
        case "manFail":
            sc.completeMission("landlord", "man", false);
            daily.set("landlord");
            char.room(16);
            break;
        default:
            break;
    }
};

room14.chat = function (chatID) {
    if (chatID === 999) {
        //placeholder
    }
    else {
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
            {
                chatID: 10,
                speaker: "landlord",
                text: "Stop sniffing around my tits and get a job. ",
                button: []
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "You know a man with a job is the sexiest thing there is. With your good looks you'll have to beat those young " +
                    "girls away with a stick. If I was younger I would be all over you. Now you get that cute butt out of here so I " +
                    "can dream. ",
                button: [
                    { chatID: 12, text: "My cute butt wants to stare at your cute butt a bit longer.", callback: "domlaugh" },
                    { chatID: -1, text: "Ok. Good night.", callback: "leave" },
                ]
            },
            {
                chatID: 12,
                speaker: "landlord",
                text: "Oh stop! This old butt is not sexy to young men. ",
                button: [
                    { chatID: 13, text: "As a young man I can assure you, your ass is sexy. ", callback: "" },
                    { chatID: -1, text: "Yeah. You're right. ", callback: "leave" },
                ]
            },
            {
                chatID: 13,
                speaker: "landlord",
                text: "Oh my. You make this old lady feel good. Now run along so I can get ready for bed. ",
                button: [
                    { chatID: -1, text: "Ok. Good night.", callback: "ll_man_1" },
                ]
            },
            {
                chatID: 14,
                speaker: "landlord",
                text: "You've bugged me enough today. Run along. ",
                button: [
                    { chatID: -1, text: "Ok. ", callback: "leave" },
                ]
            },
            {
                chatID: 15,
                speaker: "landlord",
                text: "Did you come in here to try to catch me naked, or do you have something for me. ",
                button: [
                    { chatID: 16, text: "You have such a great body, I was hoping to catch you naked. ", callback: "domlaugh" },
                    { chatID: -1, text: "No. Sorry. I should go. ", callback: "leave" },
                ]
            },
            {
                chatID: 16,
                speaker: "landlord",
                text: "Ok, ok. Smart ass. Run along. I'm getting ready for bed.  ",
                button: [
                    { chatID: -1, text: "Good night. ", callback: "levelLeave" },
                ]
            },
            {
                chatID: 17,
                speaker: "landlord",
                text: "I suppose you came to compliment my butt again? ",
                button: [
                    { chatID: 18, text: "Not just your butt, but your boobs too! ", callback: "domlaugh" },
                    { chatID: -1, text: "Oh no. g'night ", callback: "leave" },
                ]
            },
            {
                chatID: 18,
                speaker: "landlord",
                text: "Oh you.  ",
                button: [
                    { chatID: 19, text: "[Put your hand on her shoulder.] ", callback: "task1_1" },
                ]
            },
            {
                chatID: 19,
                speaker: "landlord",
                text: "What are you doing? ",
                button: [
                    { chatID: -1, text: "[Go in for the kiss] ", callback: "task1_2" },
                ]
            },
            {
                chatID: 20,
                speaker: "landlord",
                text: "I don't think so mister! You march your butt out of here so I can get to bed! ",
                button: [
                    { chatID: -1, text: "ok. Good night. ", callback: "leave" },
                ]
            },
            {
                chatID: 21,
                speaker: "!blank",
                text: "Level check failed to kiss. Improve your relationship with her. ",
                button: [
                    { chatID: -1, text: "Roll for charisma: " + charisma.getStats(6 - sc.getLevel("landlord")).txt, callback: "level4Roll" }
                ]
            },
            {
                chatID: 22,
                speaker: "landlord",
                text: "We can't do this. It's so very very wrong. What would " + sc.n("bigguy") + " say? ",
                button: [
                    { chatID: 23, text: "I don't care what he says. I just know that I only to feel your lips on mine. ", callback: "" }
                ]
            },
            {
                chatID: 23,
                speaker: "landlord",
                text: "I... There's so much... We just can't... You need to go. I need to process this. ",
                button: [
                    { chatID: -1, text: "ok.", callback: "task1_leave" },
                    { chatID: 24, text: "[Kiss her one more time]", callback: "task1_3" },
                ]
            },
            {
                chatID: 24,
                speaker: "landlord",
                text: "*moan*",
                button: [
                    { chatID: 25, text: "...", callback: "task1_4" },
                ]
            },
            {
                chatID: 25,
                speaker: "landlord",
                text: "No. You need to go. NOW!",
                button: [
                    { chatID: -1, text: "ok. ", callback: "task1_leave" },
                ]
            },
            {
                chatID: 26,
                speaker: "landlord",
                text: "Oh good. I wanted to talk about that kiss. You're a wonderful boy, and if I was a " +
                    "bit younger and not your " + sc.n("landlord") + " I would be flattered, but this just " +
                    "isn't right.You caught me at a moment of weakness. It's sick and disgusting. ",
                button: [
                    { chatID: 39, text: "[Kiss her] [Continue this path]", callback: "task2_1" },
                    { chatID: 38, text: "Stay silent. [Stop this path]", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "thinking",
                text: "I already played with her tonight. Best not to risk it. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "I think she liked that! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 29,
                speaker: "landlord",
                text: "What the hell are you doing? ",
                button: [
                    { chatID: 30, text: "I uhhhhh... huh?", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "landlord",
                text: "I can't believe you thought you could get away with sticking your dirty penis inside me while I'm " +
                    "sleeping, what gets in your head.",
                button: [
                    { chatID: -1, text: "Oooohhhh no.", callback: "spanking" },
                ]
            },
            {
                chatID: 31,
                speaker: "landlord",
                text: "What the hell are you doing? ",
                button: [
                    { chatID: 32, text: "I couldn't sleep?", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "landlord",
                text: "Well then go lay your head on your pillow and try harder. Now go! ",
                button: [
                    { chatID: -1, text: "ok. Good night. ", callback: "leave" },
                ]
            },
            {
                chatID: 33,
                speaker: "landlord",
                text: "AAAAkkk, Get out! ",
                button: [
                    { chatID: -1, text: "crap.", callback: "leave" },
                ]
            },
            {
                chatID: 34,
                speaker: "landlord",
                text: "Oh. You're in here late. I guess you shoud meet " + sc.n("bigguy") + ". ",
                button: [
                    { chatID: 35, text: "hi", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "bigguy",
                text: "Yeah little boy. It's late. Why don't you go to bed now. The adults are doing stuff. Get going now. ",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "bg_s_0_end" },
                ]
            },
            {
                chatID: 36,
                speaker: "bigguy",
                text: "You need to get out of here before I put you out of here!",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "leave" },
                ]
            },
            {
                chatID: 37,
                speaker: "thinking",
                text: "I'm not messing with him when he's sleeping. He can totally crush me! ",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "leave" },
                ]
            },
            {
                chatID: 38,
                speaker: "landlord",
                text: "So from now on you and I will never kiss like that again. Good night. ",
                button: [
                    { chatID: -1, text: "Ok. Sorry. Good night. ", callback: "manFail" },
                ]
            },
            {
                chatID: 39,
                speaker: "landlord",
                text: "*mwah* ...stop. We can't do this. ",
                button: [
                    { chatID: 40, text: "[Grab her butt]", callback: "task_2_2" },
                ]
            },
            {
                chatID: 40,
                speaker: "landlord",
                text: "Ooooooo",
                button: [
                    { chatID: 41, text: "[Move your hand to her pussy]", callback: "task_2_3" },
                ]
            },
            {
                chatID: 41,
                speaker: "landlord",
                text: "*moan*",
                button: [
                    { chatID: 42, text: "[Move your finger between her pussy lips]", callback: "task_2_4" },
                ]
            },
            {
                chatID: 42,
                speaker: "landlord",
                text: "This is so wrong. You shouldn't rub my pussy like like. I don't like it. ",
                button: [
                    { chatID: 43, text: "Then why are you so wet?", callback: "task_2_5" },
                ]
            },
            {
                chatID: 43,
                speaker: "landlord",
                text: "*moan* You should go. I can't do this. It's so wrong. Please.  ",
                button: [
                    { chatID: 44, text: "Do you really want me to go? It feels so right. ", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "landlord",
                text: "Yes. Go. Please. ",
                button: [
                    { chatID: -1, text: "Ok. Sweet dreams " + sc.n("landlord") + ". ", callback: "task_2_end" },
                ]
            },
            {
                chatID: 45,
                speaker: "landlord",
                text: "Don't. I know what you came for. We can't do this. ",
                button: [
                    { chatID: 47, text: "[Push her onto the bed and kiss her] ", callback: "task_3_1" },
                    { chatID: 46, text: "What? No. I just came to say hi.", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "landlord",
                text: "Well, hello and good night. We can't do this. ",
                button: [
                    { chatID: -1, text: "Good night. ", callback: "leave" },
                ]
            }, 
            {
                chatID: 47,
                speaker: "landlord",
                text: "Oh! Oh my! I didn't know you were so aggressive. Now that you have your " +
                    sc.n("landlord") + " on her back in her bed, what are you going to do? ",
                button: [
                    { chatID: 48, text: "Just relax and I'll show you.", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "thinking",
                text: "Oh fuck! I didn't think I would get this far. " +
                    "Oh crap oh crap. I'm so glad " +
                    "that worked, but now what. Should I just stick my dick in her pussy? Maybe her mouth. " +
                    "Fuck. I don't want to ruin this. " +
                    "She's so hot with her green eyes staring into me. " +
                    "I so want to fuck her! Maybe I'll make her horny. Yeah. " +
                    "Maybe lick her pussy? Yeah. I'll start by eating her out. ",
                button: [
                    { chatID: 49, text: "[Slide her clothes off]", callback: "task_3_2" },
                ]
            },
            {
                chatID: 49,
                speaker: "landlord",
                text: "Ooooo. Are you going to do oral on me? I'm so excited! " + sc.n("bigguy") + " never " +
                    "does oral. He says pussies are just made for cock and nothing else. I do really miss " +
                    "oral. Your father used to do oral on me all the time. He was really good at it. Oh. " +
                    "I should stop talking about other men I've been with. You can start. ",
                button: [
                    { chatID: -1, text: "Shesh. Thanks " + sc.n("landlord") + ". [Lick her pussy]", callback: "task_3_3" },
                ]
            },
            {
                chatID: 50,
                speaker: "landlord",
                text: "Oh honey. You're going to have to work on how to eat a girl out. You can't just jab " +
                    "your tongue into my pussy. Just a mintue. Let me get something to help. ",
                button: [
                    { chatID: 52, text: "*mlah* *mlah*", callback: "task_3_4" },
                ]
            },
            {
                chatID: 51,
                speaker: "landlord",
                text: "Oh wow. You really now what you're doing, but I'm going to need a little something " +
                    "extra to help me get off. ",
                button: [
                    { chatID: 52, text: "*mlah* *mlah*", callback: "task_3_4" },
                ]
            },
        ];

        return cArray[chatID];
    }
};
