//finger asshole
var room19 = {};

room19.main = function () {
    g.tview = "a";
    cl.display();
    g.internal = "";
    var lubeLevel = inv.get("lube").count;
    var thisImg = "0";

    if (g.pass === 52) 
        nav.bg("19_layInBed/bg52.jpg");
    else 
        nav.bg("19_layInBed/bg.jpg");

        if (lubeLevel === 0)
        thisImg = "19_layInBed/l0.png";
    else if (lubeLevel < 3)
        thisImg = "19_layInBed/l1.png";
    else if (lubeLevel < 6)
        thisImg = "19_layInBed/l2.png";
    else if (lubeLevel < 12)
        thisImg = "19_layInBed/l3.png";
    else
        thisImg = "19_layInBed/l4.png";

    nav.button({
        "type": "img",
        "name": "lube",
        "left": 488,
        "top": 107,
        "width": 1217,
        "height": 789,
        "image": thisImg
    }, 19);


    if (g.get("buttholeplay"))
        chat(7, 19);
    else if (lubeLevel === 0)
        chat(0, 19);
    else
        chat(1, 19);
};

room19.btnclick = function (name) {
    switch (name) {
        case "finger":
            g.internal.i++;
            if (g.internal.i > 4) {
                nav.button({
                    "type": "img",
                    "name": "fingergif",
                    "left": 298,
                    "top": 0,
                    "width": 1447,
                    "height": 1080,
                    "image": "19_layInBed/" + g.internal.f + "_" + g.pass + ".gif"
                }, 19);
                g.roomTimeout = setTimeout(function () {
                    if (g.internal.f > 2)
                        chat(4, 19);
                    else if (g.internal.f <= g.internal.b)
                        chat(3, 19);
                    else {
                        cl.c.butthole += .15;
                        g.mod("sissy", 3);
                        chat(4, 19);
                    }
                }, 2000);
            }
            else {
                nav.killbutton("finger");
                nav.button({
                    "type": "btnflat",
                    "name": "finger",
                    "left": 298,
                    "top": 0,
                    "width": 1447,
                    "height": 1080,
                    "image": "19_layInBed/" + g.internal.f + "_" + g.internal.i + ".png"
                }, 19);
                
            }
            break;
        case "cancel":
            char.room(19);
            break;
        case "screwdriver":
        case "purpleDildo":
        case "pinkDildo":
            var minButtholeSize = 1;

            if (name === "screwdriver" || name === "purpleDildo" || name === "pinkDildo")
                minButtholeSize = 1;

            if (minButtholeSize > cl.c.butthole)
                chat(10, 19);
            else {
                g.tview = "a";
                $('.room-left').show();
                var tempBH = Math.floor(cl.c.butthole);
                if (tempBH === minButtholeSize)
                    cl.c.butthole += .2;
                else if (tempBH === minButtholeSize + 1)
                    cl.c.butthole += .1;

                inv.use("lube");
                nav.killall();
                if (g.pass === 52)
                    nav.bg("19_layInBed/bg52.jpg");
                else
                    nav.bg("19_layInBed/bg.jpg");

                nav.button({
                    "type": "btn",
                    "name": name + "y",
                    "left": 298,
                    "top": 0,
                    "width": 1447,
                    "height": 1080,
                    "image": "19_layInBed/" + name + "x.png"
                }, 19);
                chat(8, 19);
            }
            break;
        case "screwdrivery":
        case "purpleDildoy":
        case "pinkDildoy":
            
            var tempBG = "_b";
            if (g.pass === 52)
                tempBG = "_a";
            nav.killbutton(name);
            nav.button({
                "type": "img",
                "name": name + "y",
                "left": 298,
                "top": 0,
                "width": 1447,
                "height": 1080,
                "image": "19_layInBed/" + name + tempBG + ".gif"
            }, 19);

            g.roomTimeout = setTimeout(function () { g.mod("sissy", 5); chat(9, 19); }, 2500);
            break;
        default:
            break;
    }
};

room19.chatcatch = function (callback) {

    switch (callback) {
        case "toybox":
            var lubeLevel = inv.get("lube").count;
            var thisImg = "0";
            nav.killall();
            nav.bg("19_layInBed/drawer.jpg")
            $('.room-left').hide();
            nav.button({
                "type": "btn",
                "name": "cancel",
                "left": 213,
                "top": 208,
                "width": 146,
                "height": 146,
                "image": "19_layInBed/cancel.png"
            }, 19);
            if (lubeLevel === 0)
                thisImg = "19_layInBed/ls0.png";
            else if (lubeLevel < 3)
                thisImg = "19_layInBed/ls1.png";
            else if (lubeLevel < 6)
                thisImg = "19_layInBed/ls2.png";
            else if (lubeLevel < 12)
                thisImg = "19_layInBed/ls3.png";
            else
                thisImg = "19_layInBed/ls4.png";

            nav.button({
                "type": "img",
                "name": "lube",
                "left": 218,
                "top": 466,
                "width": 136,
                "height": 479,
                "image": thisImg
            }, 19);
            if (inv.has("screwdriver"))
                nav.button({
                    "type": "btn",
                    "name": "screwdriver",
                    "left": 454,
                    "top": 544,
                    "width": 87,
                    "height": 400,
                    "image": "19_layInBed/screwdriverDildo.png"
                }, 19);
            if (inv.has("purpleDildo"))
                nav.button({
                    "type": "btn",
                    "name": "purpleDildo",
                    "left": 641,
                    "top": 639,
                    "width": 69,
                    "height": 302,
                    "image": "19_layInBed/purpleDildo.png"
                }, 19);
            if (inv.has("pinkDildo"))
                nav.button({
                    "type": "btn",
                    "name": "pinkDildo",
                    "left": 810,
                    "top": 567,
                    "width": 70,
                    "height": 374,
                    "image": "19_layInBed/pinkDildo.png"
                }, 19);

            break;
        case "fingerStart":
            inv.use("lube");
            nav.killall();
            if (g.pass === 10)
                nav.bg("19_layInBed/bg.jpg");
            else
                nav.bg("19_layInBed/bg52.jpg");

            var buttholesize = Math.floor(cl.c.butthole);
            if (buttholesize > 3)
                buttholesize = 3;
            g.internal = { f: buttholesize, b: Math.floor(cl.c.butthole), i: 0 };
            nav.killbutton("butt");
            nav.button({
                "type": "btnflat",
                "name": "finger",
                "left": 298,
                "top": 0,
                "width": 1447,
                "height": 1080,
                "image": "19_layInBed/" + g.internal.f + "_0.png"
            }, 19);
            break;
        case "addFinger":
            g.internal.f += 1;
            g.internal.i = 0;
            nav.killbutton("fingergif");
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
            g.tview = "a";
            cl.display();
            g.setflag("buttholeplay");
            $('.room-left').show();
            char.room(g.pass);
            break;
        case "quit":
            $('.room-left').show();
            char.room(g.pass);
            break;
        case "finishAssFuck":

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
            text: "I've run out of lube, I need to get some more if I want to play with my butthole.",
            button: [
                { chatID: -1, text: "Return to my room.", callback: "quit" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I'm such a weird-o... what shall I shove in my asshole?",
            button: [
                { chatID: -1, text: "My fingers", callback: "fingerStart" },
                { chatID: -1, text: "A toy", callback: "toybox" },
                { chatID: -1, text: "Nothing, return to my room.", callback: "quit" },
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't have any toys, maybe there's some at Toys 'N Us.",
            button: [
                { chatID: -1, text: "Use my fingers", callback: "fingerStart" },
                { chatID: -1, text: "Nothing, return to my room.", callback: "quit" },
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Ooooo, my butthole is so hungry, it's begging for more fingers...",
            button: [
                { chatID: -1, text: "Give into your lust and slip in another finger", callback: "addFinger" },
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Oooooh, my butthole feels pretty full. I better stop here.",
            button: [
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Ooooo, my butthole is so hungry, it's begging for more fingers...",
            button: [
                { chatID: -1, text: "Give into your lust and slip in another finger", callback: "3finger" },
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Two fingers is as much as I feel comfortable with. I should get a toy if I want to go bigger. ",
            button: [
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "I've played enough with my butthole for a day. Gotta let it rest. ",
            button: [
                { chatID: -1, text: "...", callback: "quit" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "I'm such a dirty dirty slut...",
            button: [
                { chatID: -1, text: "Fuck my own ass", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "me",
            text: "Oh yeah... that was good",
            button: [
                { chatID: -1, text: "Finish fucking my own ass (You dirty dirty slut)", callback: "Stop" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "That's too big for my tiny little anus.",
            button: [
                { chatID: -1, text: "Pick a different toy", callback: "" }
            ]
        },
    ];

    return cArray[chatID];
};