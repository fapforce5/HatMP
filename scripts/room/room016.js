//living room
var room16 = {};

room16.main = function () {
    var btnList = new Array();
    var thisSisterRoomID = sc.sister();
    var thisMomRoomID = sc.mother();

    if (thisSisterRoomID.roomID === 25 && thisMomRoomID.roomID === 25) {
        btnList.push({
            "type": "btn",
            "name": "dining",
            "left": 1212,
            "top": 398,
            "width": 708,
            "height": 682,
            "image": "16_livingRoom/lolaAndEvaAndMKitchen.jpg"
        });
    }
    else if (thisSisterRoomID.roomID === 25) {
        btnList.push({
            "type": "btn",
            "name": "dining",
            "left": 1113,
            "top": 434,
            "width": 807,
            "height": 646,
            "image": "16_livingRoom/diningRoomEandL.png"
        });
    }
    else if (thisMomRoomID.roomID === 25) {
        btnList.push({
            "type": "btn",
            "name": "dining",
            "left": 1113,
            "top": 462,
            "width": 807,
            "height": 618,
            "image": "16_livingRoom/diningRoomLL.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "dining",
            "left": 1113,
            "top": 645,
            "width": 807,
            "height": 435,
            "image": "16_livingRoom/diningRoomNone.png"
        });
    }

    var navList = [11, 25, 15];
    if(g.hourBetween(6, 21))
        navList.push(0);
    $.each(btnList, function (i, v) {
        nav.button(v, 16);
    });

    nav.buildnav(navList);
};

room16.btnclick = function (name) {
    switch (name) {
        case "dining":
            char.room(25);
            break;
        case "frontDoor":
            if (g.hourBetween(22, 24) || g.hourBetween(0, 6)) 
                chat(1, 16);
            else
                char.room(0);
            break;
        case "motherSit":
            chat(2, 16);
            break;
        case "tv":
            chat(3, 16);
            break;
        case "sisterSit":
            chat(4, 16);
            break;
        default:
            break;
    }
};

room16.chatcatch = function (callback) {
    switch (callback) {
        case "kungfu":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 1440,
                "height": 1080,
                "image": "16_livingRoom/016_kungfu.mp4"
            }, 454);
            break;
        default:
            break;
    }
};

room16.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I have to talk to " + sc.n("landlord") + " before heading out.",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "It's pretty late, I should head to bed.",
            button: []
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "I'm catching up on my Soaps, why don't you go out and play.",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Watch some Kung Fu for an hour?",
            button: [
                { chatID: -1, text: "Hell Yes!!", callback: "kungfu" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "eva",
            text: "Hay butthead, this part of the games hasn't been built yet.",
            button: [
                { chatID: -1, text: "You smell like an old shoe!", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};