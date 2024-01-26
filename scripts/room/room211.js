//Room name
var room211 = {};
room211.main = function () {
    var allClassesPassed = true;
    for (var i = 0; i < 11; i++) {
        if (!sissy.st[i].ach)
            allClassesPassed = false;
    }
    if (!sissy.st[0].ach) { //firstday
        gv.set("sissySchoolClass", "firstday");
        char.room(209);
    }
    else if (allClassesPassed) {
        chat(1, 211);
    }
    else {
        nav.bg("211_meeting/filled.jpg");
        nav.button({
            "type": "btn",
            "name": "chatinprogress",
            "left": 1267,
            "top": 450,
            "width": 128,
            "height": 404,
            "image": "211_meeting/ralph.png",
            "title": "Chat"
        }, 211);
        nav.button({
            "type": "btn",
            "name": "chatinprogress",
            "left": 333,
            "top": 369,
            "width": 348,
            "height": 542,
            "image": "211_meeting/philbert.png",
            "title": "Chat"
        }, 211);

        nav.button({
            "type": "btn",
            "name": "chatinprogress",
            "left": 1501,
            "top": 533,
            "width": 419,
            "height": 547,
            "image": "211_meeting/sporty.png",
            "title": "Chat"
        }, 211);
        nav.button({
            "type": "btn",
            "name": "chatinprogress",
            "left": 40,
            "top": 477,
            "width": 468,
            "height": 603,
            "image": "211_meeting/jeremy.png",
            "title": "Chat"
        }, 211);


        nav.button({
            "type": "btn",
            "name": "classSelect",
            "left": 716,
            "top": 359,
            "width": 464,
            "height": 208,
            "image": "211_meeting/class.png",
            "title": "Class selection screen"
        }, 211);
        nav.button({
            "type": "btn",
            "name": "elevator",
            "left": 1486,
            "top": 345,
            "width": 130,
            "height": 395,
            "image": "211_meeting/elevator.png",
            "title": "Elevator"
        }, 211);
    }
};

room211.btnclick = function (name) {
    switch (name) {
        case "classSelect":
            char.room(210);
            break;
        case "elevator":
            var sissySchoolClass = gv.get("sissySchoolClass");
            nav.killall();
            nav.bg("211_meeting/elevator.jpg");
            $.each(["button_penthouse", "button_white", "button_red", "button_pink", "button_lobby", "button_black"], function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": v,
                    "left": 835,
                    "top": 201 + (i * 101),
                    "width": 410,
                    "height": 80,
                    "image": "211_meeting/" + v + ".png"
                }, 211);
            });
            if (sissySchoolClass === null) {
                chat(0, 211);
            }
            else {
                g.internal = sissy.get(sissySchoolClass).name;
                chat(999, 211);
            }
            break;
        case "chatinprogress":
            chat(2, 211);
            break;
        default:
            break;
    }
};

room211.chatcatch = function (callback) {
    switch (callback) {
        case "gotoclass":
            char.room(sissy.get(gv.get("sissySchoolClass")).room);
            break;
        case "reset":
            char.room(211);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room211.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "thinking",
            text: "I should go to my class. ",
            button: [
                { chatID: -1, text: "Go to " + g.internal + ". ", callback: "gotoclass" },
                //{ chatID: -1, text: "I'm just going to check out the different floors. ", callback: "" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "I haven't signed up for any classes. I should return to the Lobby and select my class. ",
                button: [
                    { chatID: -1, text: "Return to Lobby", callback: "reset" },
                    //{ chatID: -1, text: "I'm just going to check out the different floors. ", callback: "" },
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "You have reached the end of this release. There's no more left to discover. ",
                button: [
                    { chatID: -1, text: "Return to Lobby", callback: "leave" },
                    //{ chatID: -1, text: "I'm just going to check out the different floors. ", callback: "" },
                ]
            },
            {
                chatID: 2,
                speaker: "!blank",
                text: "Work in progress. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            }
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};