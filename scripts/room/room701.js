//hospital room
var room701 = {};
room701.main = function () {
    if (g.pass === "endSleepyTime") {
        char.settime(11, 53);
        cl.nude();
        chat(0, 701);
    }
    else {
        g.pass = 701;
        char.room(28);
    }
};

room701.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room701.chatcatch = function (callback) {
    switch (callback) {
        case "exit":
            cl.undo();
            char.room(0);
            break;
        case "wake1":
            levels.mod("charisma", 20, 999);
            nav.bg("701_hospitalroom/wake1.jpg");
            break;
        case "wake1CheckDick":
            if (cl.c.chastity !== null) {
                nav.bg("701_hospitalroom/wake1laugh.jpg");
                levels.mod("charisma", -20, 999);
                chat(3, 701);
            }
            else if (cl.c.cock > 1) {
                nav.bg("701_hospitalroom/wake1laugh.jpg");
                levels.mod("charisma", -10, 999);
                chat(4, 701);
            }
            else {
                nav.bg("701_hospitalroom/wake2.jpg");
                levels.mod("charisma", 30, 999);
                chat(5, 701);
            }
            break;
        case "wake3":
            nav.bg("701_hospitalroom/wake3.jpg");
            sex.mod("boob", false, "f", 1);
            cl.doCum(false);
            break;
        case "wake2":
            nav.bg("701_hospitalroom/wake2.jpg");
            break;
        default:
            break;
    }
};

room701.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bimbo",
            text: "Good morning. Poor little guy. Looks like you lost a fight. Must be really rough for you. Anything I " +
                "can do to make you feel better? ",
            button: [
                { chatID: 1, text: "No, I just need to go. ", callback: "" },
                { chatID: 2, text: "Oh, ummm, can I see your boobs? ", callback: "wake1" },
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "Of course sweetie. Looks like you're doing well enough. We don't need to check with a doctor. They're so " +
                "talky talky. Bye bye. ",
            button: [
                { chatID: -1, text: "Leave ", callback: "exit" },
            ]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "Did that make you feel better? ",
            button: [
                { chatID: 1, text: "So much better thanks. I'm going to take off now. ", callback: "" },
                { chatID: 3, text: "My eyes are better, but my penis really hurts, it could use a rub. ", callback: "wake1CheckDick" },
            ]
        },
        {
            chatID: 3,
            speaker: "bimbo",
            text: "Maybe it's because you have a weird cage on your penis. I tried taking it off, but it's locked really good. " +
                "Sorry sugar, there's nothing I can do. ",
            button: [
                { chatID: 1, text: "Oh yeah. I better get going. ", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "Hahaha! What penis. It's so small I don't think I could find it. You're silly! ",
            button: [
                { chatID: 1, text: "Well that hurts. I guess I'll just go. ", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "bimbo",
            text: "There must be something going on. Every guy asks me to massage their penis. So much work! You know this " +
                "one time I had 10 guys show up complaining about their penises. So many massages that day! ",
            button: [
                { chatID: 6, text: "Oh yeah. You're so good, I'm going to cum. ", callback: "wake3" },
            ]
        },
        {
            chatID: 6,
            speaker: "bimbo",
            text: "Thisss cum im my muth.",
            button: [
                { chatID: 1, text: "Fuck yeah! That was great! ", callback: "wake2" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};