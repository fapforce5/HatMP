//Kitchen
var room15 = {};
room15.main = function () {
    var btnList = [];
    var hour = g.gethourdecimal();


    if (sc.mother().roomID === 15) {
        nav.bg("15_kitchen/zoom.jpg");
        btnList.push({
            "type": "btn",
            "name": "landlord",
            "left": 680,
            "top": 0,
            "width": 488,
            "height": 1080,
            "image": "15_kitchen/landlord.png"
        });
    }
    else {
        if (sc.mother().roomID === 14 && hour.between(7, 22)) {
            btnList.push({
                "type": "btn",
                "name": "door",
                "left": 591,
                "top": 128,
                "width": 263,
                "height": 354,
                "image": "15_kitchen/doorOpen.png",
                "night": "15_kitchen/doorOpenN.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "door",
                "left": 591,
                "top": 128,
                "width": 263,
                "height": 354,
                "image": "15_kitchen/doorClosed.png",
                "night": "15_kitchen/doorClosedN.png",
            });
        }

        if (!g.checkflag("choreDishes")) {
            btnList.push({
                "type": "btn",
                "name": "dishes",
                "left": 651,
                "top": 352,
                "width": 498,
                "height": 221,
                "image": "15_kitchen/dishes.png",
                "night": "15_kitchen/dishesNight.png"
            });
        }
    }

    var navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 15);
    });
    nav.buildnav(navList);
};

room15.btnclick = function (name) {
    switch (name) {
        case "dishes":
            char.room(20);
            break;
        case "landlord":
            nav.killbutton("landlord");
            nav.button({
                "type": "img",
                "name": "landlord",
                "left": 748,
                "top": 0,
                "width": 424,
                "height": 1080,
                "image": "15_kitchen/landlord1.png"
            }, 15);
            chat(0, 15);
            break;
        case "door":
            var hour = g.gethourdecimal();
            if (inv.has("landlordKey"))
                char.room(14);
            else if (hour.between(22, 24) || hour.between(0, 6))
                chat(1, 15);
            else if (sc.mother().roomID === 14)
                char.room(14);
            else
                chat(2, 15);
            break;
        default:
            break;
    }
};

room15.chatcatch = function (callback) {
    switch (callback) {
        case "passtime1":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 1);
            break;
        case "passtime2":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 2);
            break;
        case "passtime3":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 3);
            break;
        case "passtime4":
            char.settime(9, 0);
            nav.killbutton("ll");
            sc.setstep("landlord", 4);
            break;
        case "passtime5":
            char.settime(9, 0);
            nav.killbutton("ll");
            break;
        case "takekey":
            inv.update("landlordKey", true, null);
            break;
        default:
            break;
    }
};

room15.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Hay honey, why don't you run along.. " + sc.n("landlord") + " is making her special drinks.",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: sc.n("landlord") + "'s probably asleep, shouldn't wake her.",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: sc.n("landlord") + " locked the door.. Must figure out a way to get the key!",
            button: []
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};