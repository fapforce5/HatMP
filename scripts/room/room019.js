//finger asshole
var room19 = {};

room19.main = function () {

    var btnList = [];
    var i;
    if (cl.c.cock === 'v') {
        btnList.push({
            "type": "img",
            "name": "finger1",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "19_layInBed/19_1finger_pussy.gif"
        });
    }
    else {
        btnList.push({
            "type": "img",
            "name": "spread",
            "left": 278,
            "top": 0,
            "width": 1642,
            "height": 1080,
            "image": "19_layInBed/spread.png"
        });
    }
    char.saveclothes(true, false, true);
    $('#room_footer').hide();

    $.each(btnList, function (i, v) {
        nav.button(v, 19);
    });

    nav.buildnav(btnList);
    if (g.internal === "lube") {
        chat(0, 19);
    }

};

room19.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room19.chatcatch = function (callback) {
    switch (callback) {
        case "Stop":
            char.saveclothes(false, true, false);
            char.room(g.pass);
            break;
        case "1finger":
            nav.killbutton("finger1");
            nav.killbutton("spread");
            if (cl.c.cock === 'v') {
                nav.button({
                    "type": "img",
                    "name": "finger1",
                    "left": 250,
                    "top": 0,
                    "width": 1501,
                    "height": 1080,
                    "image": "19_layInBed/019_finger_finger1.gif"
                }, 19);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "finger1",
                    "left": 250,
                    "top": 0,
                    "width": 1501,
                    "height": 1080,
                    "image": "19_layInBed/019_finger_finger1.gif"
                }, 19);
            }
            if (g.xxxx.butthole < 1.0) {
                g.mod("butthole", .25);
                chat(1, 19);
            }
            else {
                //update in future
                chat(1, 19);
            }
            break;
        case "2finger":
            nav.killbutton("finger2");
            if (cl.c.cock === 'v') {
                nav.button({
                    "type": "img",
                    "name": "finger3",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "19_layInBed/19_3finger_pussy.gif"
                }, 19);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "finger3",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "19_layInBed/19_3finger_dick.gif"
                }, 19);
            }
            if (g.xxxx.butthole < 2.0) {
                g.mod("butthole", .25);
                g.roomTimeout = setTimeout(function () {
                    chat(4, 19);
                }, 500);
            }
            else {
                    //update future
                    chat(4, 19);
            }
            break;
        case "3finger":
            nav.killbutton("finger3");
            if (cl.c.cock === 'v') {
                nav.button({
                    "type": "img",
                    "name": "finger3",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "19_layInBed/19_4finger_pussy.gif"
                }, 19);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "finger3",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "19_layInBed/19_4finger_dick.gif"
                }, 19);
            }
            if (g.xxxx.butthole < 3.0) {
                g.mod("butthole", .25);
                g.roomTimeout = setTimeout(function () {
                    chat(6, 19);
                }, 500);
            }
            else {
                g.roomTimeout = setTimeout(function () {
                    chat(7, 19);
                }, 500);
            }
            break;
        default:
            break;
    }
};

room19.chat = function (chatID) {
    //if (g.xxxx.butthole < 1)
    //    var chatID2 =  
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "....",
            button: [
                { chatID: -1, text: "Slip a finger in my asshole", callback: "1finger" },
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "This feels pretty good. ",
            button: [
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Ooooo, my butthole feels pretty full. I better stop here.",
            button: [
                { chatID: 3, text: "Give into your lust and slip in another finger", callback: "break" },
                { chatID: -1, text: "Stop playing my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Ooooo, my butthole is so hungry, it's begging for more fingers...",
            button: [
                { chatID: 4, text: "Give into your lust and slip in another finger", callback: "2finger" },
                { chatID: -1, text: "Stop playing my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Ooooo, my butthole feels pretty full. I better stop here.",
            button: [
                { chatID: -1, text: "Stop playing my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Ooooo, my butthole is so hungry, it's begging for more fingers...",
            button: [
                { chatID: -1, text: "Give into your lust and slip in another finger", callback: "3finger" },
                { chatID: -1, text: "Stop playing my asshole", callback: "Stop" }
            ]
        }
    ];

    return cArray[chatID];
};