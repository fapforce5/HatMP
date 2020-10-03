//Hospital waiting room
var room700 = {};
room700.main = function () {
    if (sc.bimbo().thisRoom) {
        nav.button({
            "type": "btn",
            "name": "bimbo",
            "left": 993,
            "top": 343,
            "width": 257,
            "height": 319,
            "image": "700_waitingroom/bimbo.png"
        }, 700);
    }
    var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 700);
    //});
    nav.buildnav(navList);
};

room700.btnclick = function (name) {
    switch (name) {
        case "bimbo":
            if (cl.c.chest > 1 || cl.c.leg > 0)
                chat(0, 700);
            else if (cl.c.cock > 0)
                chat(1, 700);
            else
                chat(2, 700);
            break;
        default:
            break;
    }
};

room700.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room700.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bimbo",
            text: "There's nothing a bimbo hates more than a girly man, Such a waste of a good cock! Come to the back and I'll make that hot body " +
            "of yours more manly so any girl would to take you home.",
            button: [
                { chatID: -1, text: "In development", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "You have a great body, really manly, but... I feel like you could use a bigger cock. Come to the back room with me " +
                "and we'll make that cock of your big and meaty!",
            button: [
                { chatID: -1, text: "In development", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "Baby you're perfect. If you come to the back room I'll show you how to use that perfect body and cock on this " +
                "perfect little pussy.",
            button: [
                { chatID: -1, text: "In development", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};