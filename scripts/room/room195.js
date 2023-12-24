//Room name
var room195 = {};
room195.main = function () {
    //teach lockpicking
    //if (levels.get("pi") > 2 && levels.get("lockpicking").l === 0) {
    g.internal = { key: 1, iteration: 0 };
        nav.bg("200_frontOffice/bg.jpg");
        chat(0, 195);
    //}
    //else {
    //    char.room(198);
    //}
};

room195.btnclick = function (name) {
    if (name.startsWith("key_")) {
        if (name === "key_" + g.internal.key) {
            if (g.internal.iteration === 0)
                chat(7, 195);
            else if (g.internal.iteration === 1)
                chat(8, 195);
            for (i = 1; i < 13; i++) {
                if (i !== g.internal.key)
                    nav.killbutton("key_" + i);
            }
        }
        else {
            nav.killbutton(name);
            chat(6, 195);
        }
    }
    else {
        switch (name) {
            case "it2_win":
                chat(9, 195);
                break;
            case "it2_lost":
                console.log("lost");
                break;
            default:
                break;
        }
    }
};

room195.chatcatch = function (callback) {
    switch (callback) {
        case "punish":
            char.room(217);
            break;
        case "lock0":
            nav.killall();
            nav.bg("195_skills/lockpick.jpg");
            nav.button({
                "type": "img",
                "name": "lockpickq_l_bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1003_lockpick/bg.png"
            }, 195);

            nav.button({
                "type": "img",
                "name": "lockpickq_master",
                "left": 965,
                "top": 250,
                "width": 300,
                "height": 100,
                "image": "1003_lockpick/bg.jpg"
            }, 195);

            nav.button({
                "type": "img",
                "name": "lockpickq_master",
                "left": 965,
                "top": 250,
                "width": 300,
                "height": 100,
                "image": "1003_lockpick/1_" + g.internal.key + "x.png"
            }, 195);
            for (i = 0; i < 12; i++) {
                nav.button({
                    "type": "img",
                    "name": "key_" + (i + 1),
                    "left": 500 + ((i % 4) * 310),
                    "top": 500 + (Math.floor(i / 4) * 200),
                    "width": 300,
                    "height": 100,
                    "image": "1003_lockpick/key.png"
                }, 195);
                nav.button({
                    "type": "btn",
                    "name": "key_" + (i + 1),
                    "left": 500 + ((i % 4) * 310),
                    "top": 500 + (Math.floor(i / 4) * 200),
                    "width": 300,
                    "height": 100,
                    "image": "1003_lockpick/1_" + (i + 1) + ".png"
                }, 195);
            }
            break;
        case "iteration1":
            g.internal.iteration = 1;
            g.internal.key = 7;
            room195.chatcatch("lock0");
            break;
        case "iteration2":
            nav.killall();
            gv.mod("energy", 120);
            lockpick.init(1, "it2_win", "it2_lost", 60, 195);
            break;
        case "iteration3":
            nav.killall();
            gv.mod("energy", 120);
            lockpick.init(3, "it2_win", "it2_lost", 60, 195);
            break;
        case "iteration4":
            nav.killall();
            gv.mod("energy", 120);
            lockpick.init(4, "it2_win", "it2_lost", 60, 195);
            break;
        case "setbg":
            nav.bg("200_frontOffice/bg.jpg");
            break;
        case "lockpickEnd":
            char.settime(17, 10);
            inv.add("lockpick");
            char.room(0); 
            break;
        default:
            break;
    }
};

room195.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "Well you've earned your first real lesson. Today I'm going to teach you a basic investigative skill. Lock picking. ",
            button: [
                { chatID: 1, text: "sweet, er I mean sweet ma'am!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Yes. Quite sweet. This is only to be used to help you investigate, and not to be used for your own personal pleasure. " +
                "promise me you'll only use this when you're doing a case for me. ",
            button: [
                { chatID: 3, text: "I promise ma'am", callback: "" },
                { chatID: 2, text: "I can't promise that ma'am", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "Well then, I guess today we shall learn discipline. ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "punish" },
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "Very good. Let's start. I'll pull out the lock picking kit and the beginner lock. ",
            button: [
                { chatID: 4, text: "...", callback: "lock0" },
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "Your lock picking kit has an imaging hardware that shows what the lock looks like from " +
                "the inside. Your only job here is to match that design with the key. ",
            button: [
                { chatID: 5, text: "..", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "So in the case before you try to find the key that matches this lock. ",
            button: [
                { chatID: -1, text: "ok", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "That's not the key. Look at the key impression and select the key that matches that " +
                "impression. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "Very good. That's the key that matches the impression. See how there's a line on top and " +
                "hole in the center. Let's do another. Try selecting the wrong key a few times. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "iteration1" },
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "Excellent. Now trying the wrong key takes energy. You can't keey guessing incorrectly. " +
                "Also you can't just sit there all day picking a lock. Someone is bound to get suspicious. " +
                "You have to get in and get done quickly. Now you'll try one for real. Pay attention to " +
                "the timer. Ready? ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "iteration2" },
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "That's my good " + gender.pronoun("boy") + ". Do you want to try again, or do you " +
                "feel you're ready? ",
            button: [
                { chatID: -1, text: "Yes, I want to try again. ", callback: "iteration2" },
                { chatID: -1, text: "Yes, I want to try again with a harder lock. ", callback: "iteration3" },
                { chatID: -1, text: "Yes, I want to try again with the hardest lock. ", callback: "iteration4" },
                { chatID: 10, text: "No, I feel I'm ready ma'am. ", callback: "setbg" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "As you improve your investigation expertise " +
                "you'll find it will be easier to pick the locks. Be careful when picking locks. If you're " +
                "caught some places will install more difficult locks or locks that are impossible to pick. ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "I'm going to give you your first lock picking set. Remember, it's for work, not for " +
                "you to fuck around with and prank your loser friends. ",
            button: [
                { chatID: -1, text: "Thanks ma'am", callback: "lockpickEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};