﻿//Room name
var room199 = {};
room199.main = function () {
    
    if (cl.c.chest === 0) {
        g.internal = cl.hasoutfit("workout");
        if (g.internal === null) {
            nav.bg("199_workout/workout0.jpg");
            zcl.displayMain(0, 800, .25, "clothes", true);
            g.internal = 0;
            if (missy.tracker[17].c === 0)
                chat(2, 199);
            else
                chat(999999, 199);
            
        }
        else if (cl.hasClothing("pants", "b") && cl.hasClothing("shoes", "br") && cl.hasClothing("socks", "w"))
            chat(999, 199);
        else {
            cl.add("shirt", "w");
            cl.add("pants", "b");
            cl.add("shoes", "br");
            cl.add("socks", "w");
            chat(0, 199);
        }
    }
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "199_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 199);
    //});
    //nav.buildnav(navList);
};

room199.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room199.chatcatch = function (callback) {
    switch (callback) {
        case "change":
            g.pass = 199;
            char.room(8);
            break;
        case "firsttime":
           
            break;
        case "dislike":
            missy.mod(0, -5);
            break;
        case "first":
            if (g.get("energy") < 15) {
                nav.bg("199_workout/tired.jpg");
                chat(8, 199);
            }
            else {
                g.internal++;
                chat(4, 199);
            }
            break;
        case "jump":
            nav.killall();
            g.mod("energy", -15);
            g.mod("fitness", 3);
            if (g.get("energy") < 15) {
                nav.bg("199_workout/tired.jpg");
                chat(8, 199);
            }
            else {
                nav.bg("199_workout/jump.jpg");
                g.internal++;
                chat(6, 199);
            }
            break;
        case "toes":
            nav.killall();
            g.mod("energy", -15);
            g.mod("fitness", 3);
            if (g.get("energy") < 15) {
                nav.bg("199_workout/tired.jpg");
                chat(8, 199);
            }
            else {
                nav.bg("199_workout/toes.jpg");
                g.internal++;
                chat(7, 199);
            }
            break;
        case "checkReps":
            if (g.internal > 4) {
                missy.mod(0, 5);
                chat(9, 199);
            }
            break;
        case "end":
            char.settime(17, 17);
            char.room(0);
            break;
        default:
            break;
    }
};

room199.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: "You need to get dressed to work out. You're missing your " + g.internal + ". ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "change" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "You're still fat. Training will not start until you're in shape. I'm going to give you some " +
                    "work out clothes. Go change and come back. ",
                button: [
                    { chatID: 1, text: "Do I change in front of you? ", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "No! Go into the bathroom to change. Get going. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "change" }
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "That will work. ",
                button: [
                    { chatID: 3, text: "So are we going for a run? ", callback: "dislike" },
                    { chatID: 3, text: "So are we going for a run ma'am? ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "I will be when we're though, but you'll be working out under my direct supervision. " +
                    "Since you clearly don't have the willpower to work out on your own, I'll make sure it gets done. " +
                    "I can't train you if you aren't in tip top shape. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "first" },
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "We will do some jumping jacks, and by we, I mean you. My tits smack me in the head when I " +
                    "try to do it. ",
                button: [
                    { chatID: -1, text: "...", callback: "jump" },
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "We will do some jumping jacks, and by we, I mean you. My tits smack me in the head when I " +
                    "try to do it. ",
                button: [
                    { chatID: -1, text: "...", callback: "jump" },
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "Good, now touch your toes! ",
                button: [
                    { chatID: -1, text: "...", callback: "toes" },
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "Now jumping jacks! ",
                button: [
                    { chatID: -1, text: "...", callback: "jump" },
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "I'm so tired. I think I just died. ",
                button: [
                    { chatID: -1, text: "...", callback: "checkReps" },
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "That's a good boy. Tomorrow we will start it all again. Now get out so I can focus on me. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "end" },
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "You didn't do that many reps. You need to get in better shape. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "end" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};