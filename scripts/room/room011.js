//hallway
var room11 = {};
room11.main = function () {

    var hasKey = false;
    if (inv.has("flatmateKey"))
        hasKey = true;
    var motherLocation = sc.mother().roomID;
    var sisterLocation = sc.sister().roomID;
    var openDoor = g.hourBetween(7, 21);
    var btnList = new Array();
    var navList = [16, 10];
    //Bathroom
    btnList.push({
        "type": "btn",
        "name": "mainChar",
        "title": "My Room",
        "left": 628,
        "top": 350,
        "width": 99,
        "height": 486,
        "image": "11_hallway/11_mainCharDoor.png",
        "night": "11_hallway/11_mainCharDoorNight.png"
    });

    //Bathroom
    if (motherLocation === 12 || sisterLocation === 12) {
        btnList.push({
            "type": "btn",
            "name": "bathroomClose",
            "title": "Bathroom",
            "left": 1499,
            "top": 118,
            "width": 294,
            "height": 962,
            "image": "11_hallway/11_bathroomClosed.png",
            "night": "11_hallway/11_bathroomClosedNight.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "bathroomOpen",
            "title": "Bathroom",
            "left": 1499,
            "top": 118,
            "width": 294,
            "height": 962,
            "image": "11_hallway/11_bathroomOpen.png",
            "night": "11_hallway/11_bathroomOpenNight.png"
        });
        navList.push(12);
    }

    //EL room
    if (sisterLocation === 13 && openDoor) {
        btnList.push({
            "type": "btn",
            "name": "sisterOpen",
            "title": sc.n("el") + "'s Room",
            "left": 1276,
            "top": 388,
            "width": 53,
            "height": 409,
            "image": "11_hallway/11_sisterOpen.png",
            "night": "11_hallway/11_sisterOpenNight.png"
        });
        navList.push(13);
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "sisterClose",
            "title": sc.n("el") + "'s Locked Room",
            "left": 1276,
            "top": 388,
            "width": 53,
            "height": 409,
            "image": "11_hallway/11_sisterClosed.png",
            "night": "11_hallway/11_sisterClosedNight.png"
        });
    }

    btnList.push({
        "type": "btn",
        "name": "downStairs",
        "title": "Down Stairs",
        "left": 345,
        "top": 88,
        "width": 255,
        "height": 945,
        "image": "11_hallway/downStairs.png",
        "night": "11_hallway/downStairsNight.png"
    });

    ////Landlord's room
    //if (motherLocation === 14 && openDoor) {
    //    btnList.push({
    //        "type": "btn",
    //        "name": "motherOpen",
    //        "title": sc.n("landlord") + "'s Room",
    //        "left": 608,
    //        "top": 451,
    //        "width": 277,
    //        "height": 241,
    //        "image": "11_hallway/11_motherOpen.png"
    //    });
    //    navList.push(14);
    //}
    //else {
    //    btnList.push({
    //        "type": "btn",
    //        "name": "motherClose",
    //        "title": sc.n("landlord") + "'s Locked Room",
    //        "left": 608,
    //        "top": 451,
    //        "width": 277,
    //        "height": 241,
    //        "image": "11_hallway/11_motherClosed.png"
    //    });
    //}
  
    $.each(btnList, function (i, v) {
        nav.button(v, 11);
    });
    nav.buildnav(navList);
};

room11.btnclick = function (name) {
    switch (name) {
        case "mainChar":
            char.room(10);
            break;
        case "bathroomOpen":
            char.room(12);
            break;
        case "bathroomClose":
            if (!g.checkflag("showerPeek")) {
                if (sc.mother().roomID === 12)
                    char.room(12);
                else
                    char.room(12);//chat(0, 11);
            }
            else
                chat(0, 11);
            break;
        case "sisterOpen":
            char.room(13);
            break;
        case "sisterClose":
            if (inv.has("flatmateKey"))
                chat(3, 11);
            else
                chat(2, 11);
            break;
        case "motherOpen":
            char.room(14);
            break;
        case "motherClose":
            if (inv.has("landlordKey"))
                chat(4, 11);
            else
                chat(1, 11);
            break;
        case "downStairs":
            char.room(16);
            break;
        default:
            break;
    }
};

room11.chatcatch = function (chatcatch) {
    switch (chatcatch) {
        case "enterLLRoom":
            char.room(14);
            break;
        case "enterELRoom":
            char.room(13);
            break;
    }
};

room11.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I'll let them finish their shower",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: sc.n("landlord") + " has locked the door",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "It appears my " + sc.n("el") + " have locked their door",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Unlock " + sc.n("el") + "'s door?",
            button: [
                { chatID: -1, text: "Yes", callback: "enterELRoom" },
                { chatID: -1, text: "No", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Unlock " + sc.n("landlord") + "'s door?",
            button: [
                { chatID: -1, text: "Yes", callback: "enterLLRoom" },
                { chatID: -1, text: "No", callback: "" }
            ]
        }
    ];
    return cArray[chatID];
};