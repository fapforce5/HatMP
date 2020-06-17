//finger asshole
var room19 = {};

room19.main = function () {

    var btnList = [{
        "type": "btn",
        "name": "butt",
        "left": 298,
        "top": 0,
        "width": 1447,
        "height": 1080,
        "image": "19_layInBed/0.png"
    }];

    cl.nude();
    $('#room_footer').hide();

    $.each(btnList, function (i, v) {
        nav.button(v, 19);
    });

    nav.buildnav(btnList);
    if (g.internal === "lube") {
        chat(0, 19);
    }
    else
        chat(1, 19);
};

room19.btnclick = function (name) {
    switch (name) {
        case "finger":
            if (g.internal.s === 2) {
                if (g.internal.in)
                    g.internal.s = 3;
                else
                    g.internal.s = 1;
            }
            else if (g.internal.s === 3) {
                g.internal.in = false;
                g.internal.s = 2;
            }
            else if (g.internal.s === 1) {
                g.internal.in = true;
                g.internal.s = 2;
                g.internal.i++;
            }
            else
                g.internal.s = 1;
            nav.killbutton("finger");
            nav.button({
                "type": "btn",
                "name": "finger",
                "left": 298,
                "top": 0,
                "width": 1447,
                "height": 1080,
                "image": "19_layInBed/" + g.internal.f + "_" + g.internal.s + ".png"
            }, 19);
            //console.log(g.internal, "19_layInBed/" + g.internal.f + "_" + g.internal.s + ".png");
            if (g.internal.i > 3) {
                if (Math.ceil(cl.c.butthole) < g.internal.f) {
                    if (sc.checkevent("me", -10) && cl.c.butthole > .9 && g.internal.f > 1)
                        chat(6, 19)
                    else {
                        cl.c.butthole += .1;
                        chat(2, 19);
                    }
                }
                else {
                    if (sc.checkevent("me", -10))
                        chat(3, 19);
                    else {
                        if (cl.c.butthole > .9 && g.internal.f > 1) {
                            chat(6, 19);
                        }
                        else {
                            chat(3, 19);
                        }
                    }
                }
            }
            break;
        default:
            break;
    }
};

room19.chatcatch = function (callback) {
    
    switch (callback) {
        case "fingerStart":
            if (cl.c.butthole < 2) {
                g.internal = { f: 1, s: 0, i: 0, in: true };
                nav.killbutton("butt");
                nav.button({
                    "type": "btn",
                    "name": "finger",
                    "left": 298,
                    "top": 0,
                    "width": 1447,
                    "height": 1080,
                    "image": "19_layInBed/1_0.png"
                }, 19);
                console.log(g.internal);
            }
            else if (cl.c.butthole < 3) {
                var b;
            }
            else if (cl.c.butthole < 4) {
                var c;
            }
            else {
                var d;
            }
            break;
        case "addFinger":
            g.internal.f += 1;
            g.internal.in = true;
            g.internal.i = 0;
            g.internal.s = 0;
            nav.killbutton("finger");
            nav.button({
                "type": "btn",
                "name": "finger",
                "left": 298,
                "top": 0,
                "width": 1447,
                "height": 1080,
                "image": "19_layInBed/" + g.internal.f + "_0.png"
            }, 19);
            break;
        case "Stop":
            if (!sc.checkevent("me", -10) && cl.c.butthole > 1)
                cl.c.butthole = 1;
            var temp = cl.c.butthole;
            cl.undo();
            cl.c.butthole = temp;
            char.room(g.pass);
            g.setflag("buttholeplay");
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
                sc.c.butthole += .25;
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
                sc.c.butthole += .25;
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
                sc.c.butthole += .25;
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
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I need to warm up first",
            button: [
                { chatID: -1, text: "Slip a finger in my asshole", callback: "fingerStart" },
                { chatID: -1, text: "Use a toy", callback: "toyStart" },
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I need to get some lube",
            button: [
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "That's as much as I can do. ",
            button: [
                { chatID: -1, text: "Stop playing my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Ooooo, my butthole is so hungry, it's begging for more fingers...",
            button: [
                { chatID: -1, text: "Give into your lust and slip in another finger", callback: "addFinger" },
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
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Two fingers is as much as I feel comfortable with. I should get a toy if I want to go bigger. ",
            button: [
                { chatID: -1, text: "Stop playing my asshole", callback: "Stop" }
            ]
        },
    ];

    return cArray[chatID];
};