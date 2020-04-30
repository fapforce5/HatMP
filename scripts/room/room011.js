//hallway
var room11 = {};
room11.main = function () {

    var hasKey = false;
    if (inv.has("flatmateKey"))
        hasKey = true;
    var motherLocation = sc.mother().roomID;
    var sisterLocation = sc.sister().roomID;

    var btnList = new Array();
    var navList = [16, 10];
    //Bathroom
    btnList.push({
        "type": "btn",
        "name": "mainChar",
        "title": "My Room",
        "left": 429,
        "top": 387,
        "width": 44,
        "height": 429,
        "image": "11_hallway/11_mainCharDoor.png"
    });

    //Bathroom
    if (motherLocation === 12 || sisterLocation === 12) {
        btnList.push({
            "type": "btn",
            "name": "bathroomClose",
            "title": "Bathroom",
            "left": 1374,
            "top": 179,
            "width": 333,
            "height": 901,
            "image": "11_hallway/11_bathroomClosed.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "bathroomOpen",
            "title": "Bathroom",
            "left": 1374,
            "top": 179,
            "width": 333,
            "height": 901,
            "image": "11_hallway/11_bathroomOpen.png"
        });
        navList.push(12);
    }

    //EL room
    if (sisterLocation === 13 && !g.isNight()) {
        btnList.push({
            "type": "btn",
            "name": "sisterOpen",
            "title": sc.n("el") + "'s Room",
            "left": 987,
            "top": 412,
            "width": 54,
            "height": 360,
            "image": "11_hallway/11_sisterOpen.png"
        });
        navList.push(13);
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "sisterClose",
            "title": sc.n("el") + "'s Locked Room",
            "left": 987,
            "top": 412,
            "width": 54,
            "height": 360,
            "image": "11_hallway/11_sisterClosed.png"
        });
    }

    //Landlord's room
    if (motherLocation === 14 && !g.isNight()) {
        btnList.push({
            "type": "btn",
            "name": "motherOpen",
            "title": sc.n("landlord") + "'s Room",
            "left": 608,
            "top": 451,
            "width": 277,
            "height": 241,
            "image": "11_hallway/11_motherOpen.png"
        });
        navList.push(14);
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "motherClose",
            "title": sc.n("landlord") + "'s Locked Room",
            "left": 608,
            "top": 451,
            "width": 277,
            "height": 241,
            "image": "11_hallway/11_motherClosed.png"
        });
    }
  
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