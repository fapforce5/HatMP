//Room name
var room217 = {};
room217.main = function () {
    if (g.pass === "late") {
        missy.st[1].c++;
        chat(0, 217);
    }
    else if (g.pass === "follow") {
        chat(13, 217);
    }
    else {
        chat(13, 217);
    }
};

room217.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room217.chatcatch = function (callback) {
    switch (callback) {
        case "squeeze":
            nav.bg("217_punish/squeeze.jpg");
            levels.mod("dom", 20, 999);
            missy.mod(0, -10);
            break;
        case "disrobeVoluntary":
            levels.mod("sub", 20, 999);
            room217.chatcatch("disrobe");
            break;
        case "disrobe":
            nav.bg("217_punish/punishStart.jpg");
            cl.nude();
            zcl.displayMain(0, 400, .35, "", true);
            break;
        case "getPunishment":
            nav.killall();
            var subLevel = levels.get("sub").l;
            if (subLevel < 2) {
                nav.bg("217_punish/rice0.jpg");
                chat(14, 217);
            }
            else {
                nav.bg("217_punish/punish1.jpg");
                chat(1, 217);
            }
            break;
        case "punish0":
            nav.killall();
            g.internal = 0;
            nav.bg("217_punish/punish0.jpg");
            zcl.displayMain(445, 1380, .05, "armsup", false);
            nav.button({
                "type": "img",
                "name": "tiedown",
                "left": 1372,
                "top": 440,
                "width": 221,
                "height": 80,
                "image": "200_frontOffice/tieddownsmall.png"
            }, 200);
            break;
        case "punishRand":
            var img = Math.floor(Math.random() * 11);
            nav.bg("217_punish/punish" + img + ".jpg");
            gv.mod("energy", -40);
            break;
        case "punishNext":
            nav.bg("217_punish/punish0.jpg");
            break;
        case "punishNext1":
            nav.killall();
            nav.bg("217_punish/punishNext1.jpg");
            break;
        case "punishmentEndDress":
            cl.undo();
            room217.chatcatch("punishmentEnd");
            break;
        case "punishmentEndCheckEvent":
            if (g.pass === "lic") {
                nav.killall();
                nav.bg("217_punish/z_pi_lic.jpg");
                chat(21, 217);
            }
            else if (g.pass === "clothes") {
                nav.killall();
                nav.bg("217_punish/z_clothes.jpg");
                chat(22, 217);
            }
            else {
                nav.killall();
                nav.bg("217_punish/punish6.jpg");
                chat(20, 217);
            }
            break;
        case "punishmentEnd":
            levels.mod("sub", 50, 999);
            gv.set("energy", 0);
            char.settime(17, 35);
            missy.st[26].c++;
            char.room(0);
            break;
        case "rice1":
        case "rice2":
        case "rice3":
        case "rice4":
        case "rice5":
            nav.bg("217_punish/" + callback + ".jpg");
            break;
        default:
            break;
    }
};

room217.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "Lateness is something I don't tolerate. I can sit here and complain to you about it, " +
                "or we will try and change your behavior with my behavement adjustment treatment. I'm not " +
                "one to complain, so we well adjust your behavior. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "getPunishment" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Strip off your clothing and stand before me nude. I will then " +
                "tie you up to his cross where you will be on display for anyone and everyone that comes in so they " +
                "can see your shame. Now strip. ",
            button: [
                { chatID: 4, text: "Yes ma'am", callback: "disrobeVoluntary" },
                { chatID: 3, text: "What? No! ", callback: "squeeze" },
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "not used.... ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "You know I have enough power in my legs to pop your head clean off. But then I would have " +
                "to get " + sc.n("cecilia") + " to clean up, and she doesn't deserve that. Now you were saying " +
                "how you were going to strip down. ",
            button: [
                { chatID: 4, text: "*GASP* yes ma'am", callback: "disrobe" },
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "You won't be going anywhere for a while. It will give you plenty of time to think about what " +
                "you've done.",
            button: [
                { chatID: 5, text: "HHhmMmmHMhmHMhmHMHmmm", callback: "punish0" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "It's a little uncomfortable, but I can probably do this all day. ",
            button: [
                { chatID: 6, text: "...", callback: "punishRand" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "My wrists are starting to burn...",
            button: [
                { chatID: 7, text: "...", callback: "punishRand" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "I'm so exhausted and my shoulders are killing me. What the hell! I'll never be late again! " +  
                "fuck this is terrible.",
            button: [
                { chatID: 8, text: "HHmmmmHMmmMhmhMHhm", callback: "punishRand" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Fuck! I need to get down! Now! I hurt so bad! ",
            button: [
                { chatID: 9, text: "HmmMEMmemmemm", callback: "punishRand" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "I'm just going to die here in her office. She doesn't care. ",
            button: [
                { chatID: 10, text: "...", callback: "punishNext" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "I think you've been up there enough to have learned your lesson. I'll take you down now " +
                "before you die of asphyxiation. ",
            button: [
                { chatID: 11, text: "...", callback: "punishNext1" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Oh thank you, thank you, thank you! I thought I was going to die! I'm so sorry. I will never " +
                "cross you again. Please never put me up there again. ",
            button: [
                { chatID: 12, text: "...", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "I don't decide if you go up there, you behavior does. Make sure you correct yourself. Now " +
                "get out of my office. Your sweat is getting in my carpet and making my office stink. ",
            button: [
                { chatID: -1, text: "Groan", callback: "punishmentEndDress" },
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "You just don't listen do you. Now you're going to see what happens when you can't " +
                "follow simple directions. ",
            button: [
                { chatID: -1, text: "...", callback: "getPunishment" },
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "I have laid out two bowls. One bowl is full of dried rice, the other is empty. You're going " +
                "to move all the grains of dry rice with these chopsticks to the empty bowl. You may only move the " +
                "rice with the chopsticks. No other method is allowed. Questions? ",
            button: [
                { chatID: 16, text: "No ma'am [Get to work]", callback: "rice1" },
                { chatID: 15, text: "What? No! This is stupid! ", callback: "squeeze" },
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "You know I have enough power in my legs to pop your head clean off. But then I would have " +
                "to get " + sc.n("cecilia") + " to clean up, and she doesn't deserve that. Now are you ready " +
                "to move this rice? ",
            button: [
                { chatID: 16, text: "Yes ma'am", callback: "rice1" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "This isn't too bad. I should complete this in no time..",
            button: [
                { chatID: 17, text: "...", callback: "rice2" },
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "Oh wow. I've been doing this forever.",
            button: [
                { chatID: 18, text: "...", callback: "rice3" },
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "My wrists hurt so bad! Fuck I'm losing my mind",
            button: [
                { chatID: 19, text: "...", callback: "rice4" },
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "Holy shit! I'm almost done. If I wasn't this close I would just run away and never come back! ",
            button: [
                { chatID: 20, text: "...", callback: "rice5" },
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "learned your lesson ",
            button: [
                { chatID: -1, text: "...", callback: "punishmentEnd" },
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "Here's your license that you haven't earned. Stop screwing up. ",
            button: [
                { chatID: -1, text: "...", callback: "punishmentEnd" },
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "Here's your clothing. Make sure to wear it ",
            button: [
                { chatID: -1, text: "...", callback: "punishmentEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};