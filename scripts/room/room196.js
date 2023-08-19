//Room name
var room196 = {};
room196.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "196_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 196);
    //});
    //nav.buildnav(navList);
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
                chat(1, 196);
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
        case "complete":
            var newMood = Math.floor(missy.get("mood"));
            missy.st[0].c = newMood;
            char.addtime(60);
            char.room(0);
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
                { chatID: 1, text: "...", callback: "" }
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
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};