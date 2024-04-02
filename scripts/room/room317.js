//Room name
var room317 = {};
room317.main = function () {
    var btnList = new Array();
    if (!daily.get("dfeed")) {
        btnList.push({
            "type": "btn",
            "name": "feed",
            "left": 679,
            "top": 609,
            "width": 451,
            "height": 295,
            "image": "317_janiceKitchen/feed.png"
        });
        chat(0, 317);
    }
    else {
        nav.bg("317_janiceKitchen/fed.jpg");
    }

    if (!daily.get("water")) {
        btnList.push({
            "type": "btn",
            "name": "drink",
            "left": 1445,
            "top": 518,
            "width": 75,
            "height": 123,
            "image": "15_kitchen/water.png"
        });
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 317);
    });
    

    
    var navList = [316, 318, 319];
    nav.buildnav(navList);
};

room317.btnclick = function (name) {
    switch (name) {
        case "feed":
            daily.set("dfeed");
            var jv = future.get("janicevacation");
            sc.modMissionTask("dog", "vacation", (7 - jv), 100);
            char.room(317);
            break;
        case "drink":
            daily.set("water");
            nav.killbutton("drink");
            nav.button({
                "type": "img",
                "name": "drink",
                "left": 632,
                "top": 233,
                "width": 635,
                "height": 614,
                "image": "15_kitchen/drink.png"
            }, 317);
            gv.mod("bladder", .3);

            if (gv.get("bladder") > .9)
                chat(1, 317);
            else
                chat(2, 317);
            break;
        default:
            break;
    }
};

room317.chatcatch = function (callback) {
    switch (callback) {
        case "drinkDown":
            nav.killbutton("drink");
            break;
        default:
            break;
    }
};

room317.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I need to feed the dog first. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Oh no! I better go pee before wet my pants!",
            button: [
                { chatID: -1, text: ".... ", callback: "drinkDown" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Refreshing!",
            button: [
                { chatID: -1, text: ".... ", callback: "drinkDown" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};