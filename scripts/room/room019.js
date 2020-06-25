//finger asshole
var room19 = {};

room19.main = function () {
    g.tview = "a";
    cl.display();
    if (g.get("buttholeplay"))
        chat(7, 19);
    else {
        if (inv.get("lube").count > 0) {
            nav.bg("19_layInBed/lubefull.jpg");
            chat(1, 19)
        }
        else {
            nav.bg("19_layInBed/lubeempty.jpg");
            chat(0, 19);
        }
    }
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
                        cl.c.butthole += .1;
                        g.mod("sissy", 5);
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
        default:
            break;
    }
};

room19.chatcatch = function (callback) {

    switch (callback) {
        case "toybox":
            var dildos = inv.gettype("d");
            //if (dildos.length === 0)
            chat(2, 19);
            //else
            //build dildo board
            break;
        case "fingerStart":
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
            char.room(g.pass);
            g.setflag("buttholeplay");
            break;
        case "quit":
            char.room(g.pass);
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
        {
            chatID: 7,
            speaker: "me",
            text: "I've played enough with my butthole for a day. Gotta let it rest. ",
            button: [
                { chatID: -1, text: "...", callback: "quit" }
            ]
        },
    ];

    return cArray[chatID];
};