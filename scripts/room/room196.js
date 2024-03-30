//Room name
var room196 = {};
room196.main = function () {
    chat(0, 196);
};

room196.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room196.chatcatch = function (callback) {
    switch (callback) {
        case "worked":
            g.internal = "";
            var counter = 0;
            var weeklyPay = missy.get("weeklyPay");
            for (var i = 0; i < missy.jobs.length; i++) {
                if (missy.st[missy.jobs[i].thisWeek].c > 0) {
                    counter++;
                    g.internal += missy.jobs[i].n + ", ";
                    missy.st[missy.jobs[i].thisWeek].c = 0;
                }
            }
            if (g.internal.length > 3) {
                g.internal = "You worked " + g.internal.substring(0, g.internal.length - 2) +
                    " for a total weekly pay of $" + weeklyPay + ". ";

                chat(999, 196);
            }
            else {
                room196.chatcatch("checkBeforeComplete");
            }
            break;
        case "truepay":
            var mood = missy.get("mood");
            var wp = missy.get("weeklyPay");
            var newWp = 0;
            if (wp < 1) {
                newWp = 0;
            }
            else if (mood > 70) {
                newWp = wp * 2;

                g.internal = "You've been doing very well. I'm doubling your pay from $" + wp + " to $" + newWp + ". ";
            }
            else if (mood > 30) {
                newWp = wp * 1.5;
                g.internal = "You've been doing fine. I'm incrasing your pay from $" + wp + " to $" + newWp + ". ";
            }
            else if (mood > 0) {
                newWp = wp;
                g.internal = "Your pay this week is $" + newWp + ". ";
            }
            else if (mood > -30) {
                newWp = Math.floor(wp * .7);
                g.internal = "You need to adjust your attitude. I'm decreasing your pay from $" + wp + " to $" + newWp + ". ";
            }
            else {
                newWp = Math.floor(wp * .5);
                g.internal = "You don't deserve to be paid. I'm only giving you half until you have " +
                    "proven yourslef. Your weekly pay has decreased from $" + wp + " to $" + newWp + ". ";
            }

            gv.mod("money", newWp);
            chat(998, 196);
            break;
        case "checkBeforeComplete":
            if (cl.c.chastity !== null && cl.getEntry("panties", cl.c.panties).sex === "f" && !sissy.st[17].ach) {
                sissy.st[17].ach = true;
                chat(5, 196);
            }
            else if (cl.c.chastity !== null && missy.get("chastity") === 1)
                chat(2, 196);
            else
                chat(1, 196);
            break;
        case "complete":
            var newMood = Math.floor(missy.get("mood") / 2);
            missy.st[0].c = newMood;
            missy.set("weeklyPay", 0);
            char.addtime(60);
            char.room(201);
            break;
        case "chastity0":
            nav.bg("196_payday/sidedesk.jpg");
            var temp = cl.c.panties;
            cl.c.panties = null;
            cl.c.pants = null;
            zcl.displayMain(-500, 400, .35, "clothes", true);
            cl.c.panties = temp;
            if (cl.c.shirt === "r")
                cl.c.pants = "k";
            else
                cl.c.pants = "s";
            break;
        case "chastity1":
            gv.mod("arousal", 100);
            cl.c.chastity = null;
            cl.display();
            nav.killall();
            if (missy.get("uniform") > 2)
                nav.bg("205_chastity/chast0_1_r.jpg");
            else
                nav.bg("205_chastity/chast0_1.jpg");
            break;
        case "xdress":
            levels.mod("xdress", 20, 2);
            break;
        default:
            break;
    }
};

room196.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: g.internal,
            button: [
                { chatID: -1, text: "...", callback: "truepay" }
            ]
        };
    }
    else if (chatID === 998) {
        return {
            chatID: 998,
            speaker: "missy",
            text: g.internal,
            button: [
                { chatID: -1, text: "...", callback: "checkBeforeComplete" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Today's payday, let's take a look at what you've done this week. ",
                button: [
                    { chatID: -1, text: "...", callback: "worked" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "That is all. You may go. ",
                button: [
                    { chatID: -1, text: "...", callback: "complete" }
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "One thing before you go. Bring that cock over here so I can let you loose this weekend. ",
                button: [
                    { chatID: 3, text: "Yes ma'am! ", callback: "chastity0" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "That should do it. ",
                button: [
                    { chatID: 4, text: "Yes ma'am ", callback: "chastity1" }
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "It's already hard. Poor little guy wants to nut so bad. Enjoy it, Monday morning, first thing " +
                    "it's going to get locked back up. Now get. ",
                button: [
                    { chatID: -1, text: "Yes ma'am ", callback: "complete" }
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "Have you ever thought that you're just floating alongin life without your true purpose? ",
                button: [
                    { chatID: 6, text: "Oh wow. Yes!", callback: "xdress" },
                    { chatID: 12, text: "No. I'm good. ", callback: "" },
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "On the day I saved you I could tell that you were living a life that wasn't yours. The C.U.M. cult " +
                    "could too. That's why they tried to kidnap you, and that's why I took you in. You are destined for " +
                    "something much greater than what you are now. The problem is can't seem to unlock that youself. That's " +
                    "why I'm going to help you. ",
                button: [
                    { chatID: 7, text: "Help me ma'am? ", callback: "" },
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "I have a special school starting next week. There's none like it anywhere in the world. It will unlock " +
                    "that which is burried deep within yourself to help you achieve your true potential. It really will be an " +
                    "exiting time for you. ",
                button: [
                    { chatID: 8, text: "What is this school ma'am? ", callback: "" },
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "It is a school for sissies. This school will unlock what is already there and accentuate the true you. ",
                button: [
                    { chatID: 9, text: "What? I'm not a sissy! ", callback: "" },
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "Hahaha. Of course you are. What kind of underwear are you wearing? ",
                button: [
                    { chatID: 10, text: "...panties...", callback: "" },
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "And is your clitty locked in chastity? ",
                button: [
                    { chatID: 11, text: "Well, yes, but", callback: "" },
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "But I forced you? I didn't force you. You stood there willingly. You came here in panties, willingly. " +
                    "You are the one that deep down wants to be a sissy by your own actions. I'm just here to help and guide you " +
                    "on your journey. Don't worry about it too much. You'll do fine. Class is on Tuesdays and Thursday afternoons. " +
                    "(Dev note - for now. Still working on the flow) Now on to other things. ",
                button: [
                    { chatID: -1, text: "...", callback: "checkBeforeComplete" },
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: "I don't know if you're clueless, or are lying to both yourself, and me.  ",
                button: [
                    { chatID: 6, text: "...", callback: "" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};