//finger asshole
var room19 = {};

room19.main = function () {
    room19.chatcatch("toybox");
    nav.button({
        "type": "img",
        "name": "bghide",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1001_rand/black_25.png"
    }, 19);
    if (inv.has("pump")) {
        sc.select("pump", "19_layInBed/icon_pump.png", 3);
    }
    if (inv.has("lube")) {
        sc.select("bjBegin", "19_layInBed/icon_bj.png", 0);
        sc.select("fingerBegin", "19_layInBed/icon_finger.png", 1);
        sc.select("toyBegin", "19_layInBed/icon_dildo.png", 2);
        sc.selectCancel("leave", 4)
    }
    else {
        sc.select("bjBegin", "19_layInBed/icon_bj.png", 0);
        sc.selectCancel("leave", 1);
        chat(0, 19);
    }
    //g.cockDisplay = "a";
    //cl.cockDisplay();
    //g.internal = "";
    //var lubeLevel = inv.get("lube").count;
    //var thisImg = "0";

    //if (lubeLevel === 0)
    //    thisImg = "19_layInBed/l0.png";
    //else if (lubeLevel < 3)
    //    thisImg = "19_layInBed/l1.png";
    //else if (lubeLevel < 6)
    //    thisImg = "19_layInBed/l2.png";
    //else if (lubeLevel < 12)
    //    thisImg = "19_layInBed/l3.png";
    //else
    //    thisImg = "19_layInBed/l4.png";

    //nav.button({
    //    "type": "img",
    //    "name": "lube",
    //    "left": 488,
    //    "top": 107,
    //    "width": 1217,
    //    "height": 789,
    //    "image": thisImg
    //}, 19);


    //if (daily.get("buttholeplay"))
    //    chat(7, 19);
    //else if (lubeLevel === 0)
    //    chat(0, 19);
    //else
    //    chat(1, 19);
};

room19.btnclick = function (name) {
    switch (name) {
        case "toyBegin":
            if (daily.get("buttholePlay")) {
                nav.killbutton("toyBegin");
                chat(7, 19);
            }
            else if (!g.internal) {
                chat(2, 19);
            }
            else {
                g.internal = "anal";
                nav.killbutton("toyBegin");
                nav.killbutton("fingerBegin");
                nav.killbutton("bjBegin");
                nav.killbutton("leave");
                nav.killbutton("bghide");
            }
            break;
        case "bjBegin":
            if (daily.get("dildoSuckPlay")) {
                nav.killbutton("bjBegin");
                chat(13, 19);
            }
            else if (!g.internal) {
                chat(2, 19);
            }
            else {
                g.internal = "oral";
                nav.killbutton("toyBegin");
                nav.killbutton("fingerBegin");
                nav.killbutton("bjBegin");
                nav.killbutton("leave");
                nav.killbutton("bghide");
            }
            break;
        case "fingerBegin":
            inv.use("lube");
            //gv.mod("fingeranal", 1);
            stats.mod("masturbate", "finger", 1);
            nav.killall();
            nav.bg("19_layInBed/bg52.jpg");
            var startingFingers = 1;
            for (var fi = 4; fi > 0; fi--) {
                if (levels.analTake(inv.anal(fi + "finger")).c < 3) {
                    startingFingers = fi;
                    break;
                }
            }

            g.internal = { f: startingFingers - 1, i: 0, size: startingFingers - 1, more: false };

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
                    "image": "19_layInBed/" + g.internal.f + "_52.gif"
                }, 19);
                g.roomTimeout = setTimeout(function () {
                    if (g.internal.f > 2)
                        chat(5, 19);
                    else if (!g.internal.more)
                        chat(3, 19);
                    else 
                        chat(4, 19);
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
        case "leave":
            char.room(g.pass);
            break;
        case "cancel":
            char.room(19);
            break;
        case "screwdriver":
        case "purpleDildo":
        case "pinkDildo":
        case "whiteDildo":
        case "blackDildo":
        case "blackBallsDildo":
        case "towerDildo":
        case "pinkFatDildo":
        case "horseDildo":
            if (g.internal === "anal") {
                var analEase = levels.analTake(inv.anal(name));
                if (analEase.c > 2) {
                    chat(10, 19);
                }
                else {
                    //gv.mod("dildoanal", 1);
                    stats.mod("masturbate", "dildo", 1);
                    nav.bg("19_layInBed/bg52.jpg");
                    nav.killall();
                    inv.use("lube");
                    g.internal = { name: name, size: inv.anal(name) };

                    nav.button({
                        "type": "btn",
                        "name": "stuffAss2",
                        "left": 298,
                        "top": 0,
                        "width": 1447,
                        "height": 1080,
                        "image": "19_layInBed/" + g.internal.name + "x.png"
                    }, 19);
                    chat(8, 19);
                }
            }
            else {
                var oralEase = levels.oralTake(inv.anal(name));
                if (oralEase.c > 2) {
                    chat(11, 19);
                }
                else {
                    gv.mod("dildooral", 1);
                    stats.mod("masturbate", "oral", 1);
                    nav.killall();
                    g.internal = { name: name, size: inv.anal(name) };

                    if (name === "screwdriver" || name === "purpleDildo" || name === "pinkDildo") {
                        nav.bg("19_layInBed/bj_" + name + "_" + gender.pronoun("boy") + ".jpg");
                    }
                    else {
                        nav.bg("19_layInBed/bg52.jpg");
                        nav.button({
                            "type": "img",
                            "name": "bj",
                            "left": 500,
                            "top": 0,
                            "width": 1200,
                            "height": 1080,
                            "image": "19_layInBed/bj_" + name + "_" + gender.pronoun("boy") + ".gif"
                        }, 19);
                    }
                    g.roomTimeout = setTimeout(function () {
                        chat(12, 19);
                    });
                    //chat(8, 19);
                }
            }
            break;
        case "stuffAss2":
            nav.killbutton(name);
            nav.button({
                "type": "img",
                "name": "dildo",
                "left": 298,
                "top": 0,
                "width": 1447,
                "height": 1080,
                "image": "19_layInBed/" + g.internal.name + "y.gif"
            }, 19);
            g.roomTimeout = setTimeout(function () {
                chat(9, 19);
            }, 2500);
            break;
        case "pump":
            nav.killall();
            nav.bg("19_layInBed/pump.jpg");
            if (gv.get("milk") < .4) {
                chat(14, 19);
            }
            else {
                chat(15, 19);
            }
            break;
        default:
            break;
    }
};

room19.chatcatch = function (callback) {

    switch (callback) {
        case "toybox":
            g.internal = false;
            var lubeLevel = inv.get("lube").count;
            var thisImg = "0";
            nav.killall();
            nav.bg("19_layInBed/drawer.jpg");
            nav.button({
                "type": "btn",
                "name": "cancel",
                "left": 10,
                "top": 200,
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
            if (inv.has("screwdriver")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "screwdriver",
                    "left": 371,
                    "top": 544,
                    "width": 87,
                    "height": 400,
                    "image": "19_layInBed/screwdriverDildo.png"
                }, 19);
            }
            if (inv.has("purpleDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "purpleDildo",
                    "left": 475,
                    "top": 639,
                    "width": 69,
                    "height": 302,
                    "image": "19_layInBed/purpleDildo.png"
                }, 19);
            }
            if (inv.has("pinkDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "pinkDildo",
                    "left": 561,
                    "top": 567,
                    "width": 70,
                    "height": 374,
                    "image": "19_layInBed/pinkDildo.png"
                }, 19);
            }
            if (inv.has("whiteDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "whiteDildo",
                    "left": 648,
                    "top": 478,
                    "width": 184,
                    "height": 466,
                    "image": "19_layInBed/whiteDildo.png"
                }, 19);
            }
            if (inv.has("blackDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "blackDildo",
                    "left": 849,
                    "top": 390,
                    "width": 301,
                    "height": 564,
                    "image": "19_layInBed/blackDildo.png"
                }, 19);
            }
            if (inv.has("pinkFatDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "pinkFatDildo",
                    "left": 1167,
                    "top": 485,
                    "width": 200,
                    "height": 469,
                    "image": "19_layInBed/pinkFatDildo.png"
                }, 19);
            }
            if (inv.has("blackBallsDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "blackBallsDildo",
                    "left": 1384,
                    "top": 478,
                    "width": 261,
                    "height": 449,
                    "image": "19_layInBed/blackBallsDildo.png"
                }, 19);
            }
            if (inv.has("towerDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "towerDildo",
                    "left": 1106,
                    "top": 110,
                    "width": 631,
                    "height": 228,
                    "image": "19_layInBed/towerDildo.png"
                }, 19);
            }
            if (inv.has("horseDildo")) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "horseDildo",
                    "left": 218,
                    "top": 98,
                    "width": 789,
                    "height": 311,
                    "image": "19_layInBed/horseDildo.png"
                }, 19);
            }
            if (inv.has("pump")) {
                g.internal = true;
                nav.button({
                    "type": "img",
                    "name": "pump",
                    "left": 1676,
                    "top": 506,
                    "width": 244,
                    "height": 410,
                    "image": "19_layInBed/pump.png"
                }, 19);
            }
            break;
        case "bj":
            g.internal = "bj";
            room19.chatcatch("toybox");
            break;
        case "analtoy":
            g.internal = "anal";
            room19.chatcatch("toybox");
            break;
        case "fingerStart":
            //inv.use("lube");
            //nav.killall();
            //nav.bg("19_layInBed/bg52.jpg");
            //var startingFingers = 1;
            //for (var fi = 4; fi > 0; fi--) {
            //    if (levels.analTake(inv.anal(fi + "finger")).c < 3) {
            //        startingFingers = fi;
            //        break;
            //    }
            //}

            //g.internal = { f: startingFingers - 1, i: 0, size: startingFingers - 1, more: false };

            //nav.killbutton("butt");
            //nav.button({
            //    "type": "btnflat",
            //    "name": "finger",
            //    "left": 298,
            //    "top": 0,
            //    "width": 1447,
            //    "height": 1080,
            //    "image": "19_layInBed/" + g.internal.f + "_0.png"
            //}, 19);
            break;
        case "addFinger":
            g.internal.f += 1;
            g.internal.size += 1;
            g.internal.i = 0;
            g.internal.more = true;
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
            cl.display();
            levels.anal(g.internal.size, false, null, false, null);
            daily.set("buttholeplay");
            char.room(g.pass);
            break;
        case "quit":
            $('.room-left').show();
            char.room(g.pass);
            break;
        case "stopSuck":
            levels.oral(g.internal.size);
            daily.set("dildoSuckPlay");
            char.room(g.pass);
            break;
        case "reset":
            char.room(19);
            break;
        case "emptyMilk":
            gv.set("milk", .0);
            cl.display();
            levels.mod("milk", 25, 999);
            char.room(19);
            break;
        case "pumpDrink":
            gv.set("milk", .0);
            cl.display();
            levels.mod("milk", 25, 999);
            gv.mod("energy", 100);
            nav.bg("19_layInBed/pumpDrink.jpg");
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
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I'm such a weird-o... what shall I shove in my asshole?",
            button: [
                { chatID: -1, text: "Shove my fingers in my butt.", callback: "fingerStart" },
                { chatID: -1, text: "Impale my poor anus on a toy. ", callback: "analtoy" },
                { chatID: -1, text: "Practice giving blowjobs", callback: "bj" },
                { chatID: -1, text: "Nothing, return to my room.", callback: "quit" },
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't have any toys, maybe there's some at Toys 'N Us.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Ooooo, my butt-hole is so hungry, it's begging for more fingers...",
            button: [
                { chatID: -1, text: "Give into your lust and slip in another finger", callback: "addFinger" },
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Oooooh, my butt-hole feels pretty full. I better stop here.",
            button: [
                { chatID: -1, text: "Stop playing with my asshole", callback: "Stop" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "It seems I've run out of fingers to shove into my hungry hole! ",
            button: [
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
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
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
        {
            chatID: 11,
            speaker: "me",
            text: "There's no way I'm fitting that in my mouth! ",
            button: [
                { chatID: -1, text: "Pick a different toy", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "How do I know when to stop without cum down my throat? ",
            button: [
                { chatID: -1, text: "Finish sucking ", callback: "stopSuck" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "My jaw is tired from sucking cock. Maybe tomorrow. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "Totally empty. I'll have to wait for my milk ducts to fill back up. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "Oh my! It feels so good to empty these breasts, they were getting full!",
            button: [
                { chatID: 16, text: "Drink your own breast milk. ", callback: "pumpDrink" },
                { chatID: -1, text: "Put it away", callback: "emptyMilk" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "*gulp* MMmmmMMmmmm yummy!",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
    ];

    return cArray[chatID];
};
