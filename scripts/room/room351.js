//Room name
var room351 = {};
room351.main = function () {

    if (g.pass === "landlord") {
        cl.horny(200);
        nav.button({
            "type": "img",
            "name": "nurse",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "351_spermJackoff/nurse2.jpg"
        }, 351);
        chat(0, 351);
    }
};

room351.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room351.chatcatch = function (callback) {
    switch (callback) {
        case "n1":
            nav.killbutton("nurse");
            nav.button({
                "type": "img",
                "name": "nurse",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "351_spermJackoff/nurse1.jpg"
            }, 351);
            break;
        case "n2":
            nav.killbutton("nurse");
            nav.button({
                "type": "img",
                "name": "nurse",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "351_spermJackoff/nurse3.jpg"
            }, 351);
            break;
        case "n3":
            nav.killbutton("nurse");
            nav.button({
                "type": "img",
                "name": "nurse",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "351_spermJackoff/nurse4.jpg"
            }, 351);
            break;
        case "n4":
            nav.killbutton("nurse");
            nav.button({
                "type": "img",
                "name": "nurse",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "351_spermJackoff/351_prostateM.gif"
            }, 351);
            break;
        case "n5":
            nav.killbutton("nurse");
            nav.button({
                "type": "img",
                "name": "nurse",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "351_spermJackoff/nurse5.jpg"
            }, 351);
            break;
        case "n6":
            nav.killbutton("nurse");
            nav.button({
                "type": "img",
                "name": "nurse",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "351_spermJackoff/nurse6.jpg"
            }, 351);
            cl.doCum(true);
            cl.horny(-200);
            break;
        case "n7":
            g.pass = "350_nursePay";
            char.room(350);
            break;
        default: break;
    }
};

room351.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Well, I see you already have an erection. Good think, because I wasn't going to do it for you. " +
                "You've probably been dreaming of me rubbing your little pee pee. ",
            button: [
                { chatID: 1, text: "wha.... no", callback: "n1" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "I'm not going to touch that filthy litte thing. We're going to do an alternate way of sperm donation. " +
                "Get up and place you're hands agains the wall. ",
            button: [
                { chatID: 2, text: "Yes " + sc.n("landlord"), callback: "n2" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "Ok, you're going to feel some pressure on your rectum as I insert my fingers into your anus. Just " +
                "try to relax and let what happens, happen. Ready?",
            button: [
                { chatID: 3, text: "Ready? ", callback: "n3" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "OOOOOfffff!",
            button: [
                { chatID: 4, text: "...", callback: "n4" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "oh wow.... ",
            button: [
                { chatID: 5, text: "I'm going to cum!!!", callback: "n5" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "ooooOOOOO YEA! ",
            button: [
                { chatID: 6, text: "...", callback: "n6" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Good boy. I'm going to put this away. Get dressed and meet me at the font desk for you payment. ",
            button: [
                { chatID: 6, text: "...", callback: "n7" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};