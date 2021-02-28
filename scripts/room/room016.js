//living room
var room16 = {};

room16.main = function () {
    var btnList = new Array();
    var thisSisterRoomID = sc.sister();
    var thisMomRoomID = sc.mother();

    //if (sc.getstep("lola") === 9) {
    //    nav.button({
    //        "type": "img",
    //        "name": "x",
    //        "left": 853,
    //        "top": 260,
    //        "width": 215,
    //        "height": 820,
    //        "image": "13_sisterRoom/13_lola_reading.png"
    //    }, 16);
    //    chat(5, 16);
    //}
    //if (!sc.checkevent("lola", -5) && (cl.isCrossdressing() || cl.c.chest > 2)) {
    //    //busted
    //}
    //else {
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

        if (thisMomRoomID.roomID === 15) {
            btnList.push({
                "type": "btn",
                "name": "kitchen",
                "left": 0,
                "top": 0,
                "width": 1102,
                "height": 829,
                "image": "16_livingRoom/kitchenM.png",
                "night": "16_livingRoom/kitchenMN.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "kitchen",
                "left": 0,
                "top": 0,
                "width": 1102,
                "height": 829,
                "image": "16_livingRoom/kitchen.png",
                "night": "16_livingRoom/kitchenN.png"
            });
        }

        if (thisMomRoomID.roomID === 26) {
            btnList.push({
                "type": "btn",
                "name": "living",
                "left": 1059,
                "top": 200,
                "width": 351,
                "height": 385,
                "image": "16_livingRoom/livingM.png",
                "night": "16_livingRoom/livingMN.png"
            });
        }
        else if (thisSisterRoomID.roomID === 26) {
            btnList.push({
                "type": "btn",
                "name": "living",
                "left": 1059,
                "top": 200,
                "width": 351,
                "height": 385,
                "image": "16_livingRoom/livingT.png",
                "night": "16_livingRoom/livingTN.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "living",
                "left": 1059,
                "top": 200,
                "width": 351,
                "height": 385,
                "image": "16_livingRoom/living.png",
                "night": "16_livingRoom/livingN.png"
            });
        }

        var hour = g.gethourdecimal();
        var navList = [15, 26, 25, 11];
        if (inv.has("landlordKey"))
            navList.push(14);
        else if (hour.between(7, 22) && thisMomRoomID === 14)
            navList.push(14);

        if (g.hourBetween(6, 21))
            navList.push(0);
        $.each(btnList, function (i, v) {
            nav.button(v, 16);
        });

        nav.buildnav(navList);
    //}
};

room16.btnclick = function (name) {
    switch (name) {
        case "dining":
            char.room(25);
            break;
        case "living":
            char.room(26);
            break;
        case "kitchen":
            char.room(15);
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
        case "upstairs":
            char.room(13);
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
            chatID: 4,
            speaker: "eva",
            text: "Hay butthead, this part of the games hasn't been built yet.",
            button: [
                { chatID: -1, text: "You smell like an old shoe!", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "lola",
            text: sc.n("eva") + " and I are so excited you're allowed back! Quick come upstairs to our room!",
            button: [
                { chatID: -1, text: "Follow Lola", callback: "upstairs" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};