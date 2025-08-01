//Room name
var room251 = {};
room251.main = function () {
    if (g.pass === "startWork") {
        nav.button({
            "type": "btn",
            "name": "jeff",
            "left": 882,
            "top": 96,
            "width": 676,
            "height": 984,
            "image": "251_office/jeff1.png"
        }, 251);
    }
    else {
        nav.button({
            "type": "btn",
            "name": "jeff",
            "left": 882,
            "top": 96,
            "width": 676,
            "height": 984,
            "image":"251_office/jeff.png"
        }, 251);
    }
};

room251.btnclick = function (name) {
    switch (name) {
        case "jeff":
            if (g.pass === "startWork") {
                if (missy.activecase().caseId === 14) {
                    if (missy.get("activeCaseComplete") === 0) {
                        if (g.pass === "FinishLoop") {
                            chat(29, 251);
                        }
                        else {
                            if (missy.get("reusableCaseCounter") === 0) {
                                chat(0, 251);
                            }
                            else {
                                chat(21, 251);
                            }
                        }
                    }
                    else {
                        chat(20, 251);
                    }
                }
                else {
                    chat(21, 251);
                }
            }
            else if (g.pass === "finishWork") {
                if ((missy.activecase().caseId === 14)) {
                    if (sc.getMission("holly", "case").complete) {
                        chat(29, 251);
                    }
                    else {
                        chat(26, 251);
                    }
                }
                else {
                    if (!sc.getMission("holly", "happy").fail) {
                        chat(27, 251);
                    }
                    else {
                        chat(28, 251);
                    }
                }
            }
            break;
            //var thisJeff = sc.getstep("jeffery");
            //if (g.pass === "firstmeet") {
            //    chat(0, 251);
            //}
            //else if (g.pass === "initcock") {
            //    chat(20, 251);
            //}
            //else if (g.pass === "initcockx") {
            //    chat(39, 251);
            //}
            //else if (g.pass === "work") {
            //    chat(22, 251);
            //}
            //else if (g.pass === "FinishLoop") {
            //    if (thisJeff === 8) {
            //        if (q3.activeSearch("jeffery"))
            //            chat(40, 251);
            //        else if (sc.getEvent("dolly", -1))
            //            chat(35, 251);
            //        else
            //            chat(34, 251);
            //    }
            //    else if (thisJeff === 9) {
            //        //add in panties question here
            //        if (sc.getEvent("dolly", -1))
            //            chat(35, 251);
            //        else
            //            chat(34, 251);
            //    }
            //    else if (thisJeff === 10) {
            //        chat(72, 251);
            //    }
            //    else if (thisJeff === 6)
            //        chat(29, 251);
            //    else
            //        chat(28, 251);
            //}
        //    break;
        //case "j11":
        //    nav.killall();
        //    nav.bg("251_office/j12.jpg");
        //    chat(71, 251);
        //    break;
        default:
            break;
    }
};

room251.chatcatch = function (callback) {
    switch (callback) {
        case "ws0":
            nav.killall();
            nav.bg("251_office/" + callback + ".jpg");
            break;
        case "ws1":
            nav.killall();
            nav.bg("251_office/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "ws2":
            if (gender.canUseCock())
                nav.bg("251_office/ws2.jpg");
            else
                nav.bg("251_office/ws2_c.jpg");
            break;
        case "ws3":
            nav.bg("251_office/jeff.jpg");
            cl.nude();
            cl.c.shoes = cl.c.shirt = cl.c.pants = 'v';
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            if (gender.canUseCock()) {
                chat(13, 251);
            }
            else
                chat(16, 251);
            break;
        case "ws3x":
            nav.bg("251_office/jeff.jpg");
            cl.nude();
            cl.c.shoes = cl.c.shirt = cl.c.pants = 'v';
            cl.c.wig = "d";
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            if (gender.canUseCock()) {
                chat(13, 251);
            }
            else
                chat(25, 251);
            break;
        case "ws4":
            cl.c.panties = "inv";
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            break;
        case "ws5":
            cl.c.wig = "d";
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            break;
        case "startWork":
            char.room(252);
            break;
        case "leave":
            char.addtime(15);
            char.room(0);
            break;
        case "undoAndLeave":
            cl.c.wig = null;
            cl.undo();
            char.addtime(30);
            char.room(250);
            break;
        case "undoAndLeaveFail":
            missy.set("activeCaseComplete", 2);
            cl.c.wig = null;
            cl.undo();
            char.addtime(30);
            char.room(250);
            break;
        case "undoAndLeaveSuccess":
            missy.set("activeCaseComplete", 1);
            cl.c.wig = null;
            cl.undo();
            char.addtime(30);
            char.room(250);
            break;
        //case "jeff2":
        //    nav.killbutton("jeff");
        //    nav.bg("251_office/jeff2.jpg");
        //    break;
        //case "jeff3":
        //    nav.bg("251_office/jeff3.jpg");
        //    break;
        //case "jeff3a":
        //    nav.bg("251_office/jeff3a.jpg");
        //    break;
        //case "jeff4":
        //    nav.killall();
        //    nav.bg("251_office/office.jpg");
        //    nav.button({
        //        "type": "img",
        //        "name": "jeff",
        //        "left": 1282,
        //        "top": 96,
        //        "width": 676,
        //        "height": 984,
        //        "image": "251_office/jeff.png"
        //    }, 251);
        //    cl.nude();
        //    cl.c.shoes = cl.c.shirt = cl.c.pants = 'v';
        //    cl.display();
        //    zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
        //    if (!gender.canUseCock()) {
        //        chat(16, 251);
        //    }
        //    else
        //        chat(13, 251);
        //    break;
        //case "jeff5":
        //    cl.c.panties = "inv";
        //    nav.killbutton("zzz-clothing-kill");
        //    cl.display();
        //    zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
        //    break;
        //case "jeff6":
        //    cl.c.wig = "d";
        //    cl.display();
        //    zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
        //    break;
        
        //case "getDressed":
        //    sc.setstep("jeffery", 5);
        //    char.addtime(257);
        //    cl.c.socks = g.internal.socks;
        //    cl.c.pants = g.internal.pants;
        //    cl.c.panties = g.internal.panties;
        //    cl.c.bra = g.internal.bra;
        //    cl.c.shirt = g.internal.shirt;
        //    cl.c.dress = g.internal.dress;
        //    cl.c.swimsuit = g.internal.swimsuit;
        //    cl.c.shoes = g.internal.shoes;
        //    cl.c.wig = null;
        //    cl.display();
        //    char.room(0);
        //    break;
        //case "jeff4a":
        //    nav.killall();
        //    nav.bg("251_office/office.jpg");
        //    nav.button({
        //        "type": "img",
        //        "name": "jeff",
        //        "left": 1282,
        //        "top": 96,
        //        "width": 676,
        //        "height": 984,
        //        "image": "251_office/jeff.png"
        //    }, 251);
        //    g.internal = { shoes: cl.c.shoes, socks: cl.c.socks, pants: cl.c.pants, panties: cl.c.panties, bra: cl.c.bra, shirt: cl.c.shirt, dress: cl.c.dress, swimsuit: cl.c.swimsuit };
        //    cl.c.shoes = cl.c.socks = cl.c.pants = cl.c.bra = cl.c.shirt = cl.c.dress = cl.c.swimsuit = cl.c.pj = null;
        //    cl.c.shoes = cl.c.shirt = cl.c.pants = 'v';
        //    cl.c.wig = "d";
        //    cl.display();
        //    zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
        //    if (cl.c.cock < 2 && cl.c.chastity === null)
        //        chat(13, 251);

        //    else if (sc.getstep("jeffery") > 4)
        //        chat(27, 251);
        //    else
        //        chat(16, 251);
        //    break;
        //case "leave":
        //    char.room(0);
        //    break;
        //case "leaveLoop":
        //    char.addtime(240);
        //    cl.c.socks = g.internal.socks;
        //    cl.c.pants = g.internal.pants;
        //    cl.c.panties = g.internal.panties;
        //    cl.c.bra = g.internal.bra;
        //    cl.c.shirt = g.internal.shirt;
        //    cl.c.dress = g.internal.dress;
        //    cl.c.swimsuit = g.internal.swimsuit;
        //    cl.c.shoes = g.internal.shoes;
        //    cl.c.wig = null;
        //    cl.display();
        //    char.room(0);
        //    break;
        //case "jeffFail":
        //    gv.set("oncase", "dinerfail");
        //    sc.setstep("holly", 3);
        //    sc.setstep("dolly", 4);
        //    sc.setstep("molly", 4);
        //    sc.setstep("jeffery", 7);
        //    sc.setstep("jeffery", -2);
        //    g.roomMapAccess(250, false, false);
        //    cl.c.socks = g.internal.socks;
        //    cl.c.pants = g.internal.pants;
        //    cl.c.panties = g.internal.panties;
        //    cl.c.bra = g.internal.bra;
        //    cl.c.shirt = g.internal.shirt;
        //    cl.c.dress = g.internal.dress;
        //    cl.c.swimsuit = g.internal.swimsuit;
        //    cl.c.shoes = g.internal.shoes;
        //    cl.c.wig = null;
        //    cl.display();
        //    char.room(0);
        //    break;
        //case "jeffsuccess":
        //    gv.set("oncase", "dinersuccess");
        //    sc.setstep("holly", -1);
        //    sc.setstep("jeffery", 7);
        //    sc.setstep("jeffery", -1);
        //    gv.mod("money", 500);
        //    g.roomMapAccess(250, false, false);
        //    cl.c.socks = g.internal.socks;
        //    cl.c.pants = g.internal.pants;
        //    cl.c.panties = g.internal.panties;
        //    cl.c.bra = g.internal.bra;
        //    cl.c.shirt = g.internal.shirt;
        //    cl.c.dress = g.internal.dress;
        //    cl.c.swimsuit = g.internal.swimsuit;
        //    cl.c.shoes = g.internal.shoes;
        //    cl.c.wig = null;
        //    cl.display();
        //    char.room(0);
        //    break;
        //case "jeffEnd":
        //    char.addtime(400);
        //    cl.c.socks = g.internal.socks;
        //    cl.c.pants = g.internal.pants;
        //    cl.c.panties = g.internal.panties;
        //    cl.c.bra = g.internal.bra;
        //    cl.c.shirt = g.internal.shirt;
        //    cl.c.dress = g.internal.dress;
        //    cl.c.swimsuit = g.internal.swimsuit;
        //    cl.c.shoes = g.internal.shoes;
        //    cl.c.wig = null;
        //    cl.display();
        //    char.room(0);
        //    break;
        //case "storycheck":
        //    if (sc.getEvent("holly", -1))
        //        chat(43, 251);
        //    else
        //        chat(44, 251);
        //    break;
        //case "j0":
        //case "j8":
        //    nav.killall();
        //    nav.bg("251_office/" + callback + ".jpg");
        //    break;
        //case "j1":
        //case "j2":
        //case "j3":
        //case "j4":
        //    nav.bg("251_office/" + callback + ".jpg");
        //    break;
        //case "j5":
        //    gv.mod("giveOralMale", 1);
        //    cl.c.socks = g.internal.socks;
        //    cl.c.pants = g.internal.pants;
        //    cl.c.panties = g.internal.panties;
        //    cl.c.bra = g.internal.bra;
        //    cl.c.shirt = g.internal.shirt;
        //    cl.c.dress = g.internal.dress;
        //    cl.c.swimsuit = g.internal.swimsuit;
        //    cl.c.shoes = g.internal.shoes;
        //    cl.c.wig = null;
        //    cl.display();
        //    nav.bg("251_office/j5.jpg");
        //    break;
        //case "j6":
        //    nav.bg("250_beaver/250_barSide.jpg");
        //    break;
        //case "j7":
        //    if (sc.getEvent("holly", -1)) {
        //        nav.bg("251_office/j7.jpg");
        //        chat(61, 251);
        //    }
        //    else {
        //        nav.bg("250_beaver/250_barSide.jpg");
        //        nav.button({
        //            "type": "img",
        //            "name": "j8",
        //            "left": 520,
        //            "top": 36,
        //            "width": 1381,
        //            "height": 1044,
        //            "image": "250_beaver/all3.png"
        //        }, 250);
        //        chat(65 , 251);
        //    }
        //    break;
        //case "j9":
        //    nav.bg("251_office/j7.jpg");
        //    break;
        //case "j10":
        //    nav.killall();
        //    nav.bg("250_beaver/250_barSide.jpg");
        //    break;
        //case "j11":
        //    nav.bg("251_office/j11.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "j11",
        //        "left": 1799,
        //        "top": 227,
        //        "width": 59,
        //        "height": 99,
        //        "image": "251_office/j11.png"
        //    }, 251);
        //    break;
        //case "j12":
        //    sc.setstep("jeffery", 9);
        //    char.addtime(120);
        //    char.room(0);
        //    break;
        //case "s10_0":
        //    var panty = { h: false, d: false, m: false, self: false };
        //    panty.h = cl.hasClothing("panties", "holly");
        //    panty.d = cl.hasClothing("panties", "dolly");
        //    panty.m = cl.hasClothing("panties", "molly");
        //    panty.self = g.internal.panties !== null;
        //    if (panty.h && panty.d && panty.m && panty.self) {
        //        nav.kill();
        //        nav.bg("251_office/s10_0.jpg");
        //        chat(75, 251);
        //    }
        //    else {
        //        if (panty.h && panty.d && panty.m) {
        //            chat(74, 251);
        //        }
        //        else {
        //            chat(73, 251);
        //        }
        //    }
        //    break;
        //case "s10_1":
        //    nav.bg("251_office/s10_1.jpg");
        //    break;
        //case "s10_2":
        //    nav.bg("251_office/s10_2.jpg");
        //    break;
        //case "s10_3":
        //    if (q3.isItMe("jeffery")) {
        //        chat(78, 251);
        //    }
        //    else {
        //        chat(79, 251);
        //    }
        //    break;
        //case "s10_4":
        //    cl.remove("panties", "holly");
        //    cl.remove("panties", "molly");
        //    cl.remove("panties", "dolly");
        //    cl.remove("panties", g.internal.panties);
        //    cl.c.socks = g.internal.socks;
        //    cl.c.pants = g.internal.pants;
        //    cl.c.bra = g.internal.bra;
        //    cl.c.shirt = g.internal.shirt;
        //    cl.c.dress = g.internal.dress;
        //    cl.c.swimsuit = g.internal.swimsuit;
        //    cl.c.shoes = g.internal.shoes;
        //    cl.c.wig = null;
        //    cl.display();
        //    q3.eventComplete("jeffery");
        //    char.room(0);
        //    break;
        //case "s10_5":
        //    gv.mod("money", 500);
        //    room251.chatcatch("s10_4");
        //    break;
        default:
            break;
    }
};

room251.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "jeffery",
            text: "Oh hello " + sc.n("me") + " I-I-I-I'm glad you could make it. Let me go over the details with you.",
            button: [
                { chatID: 1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "jeffery",
            text: "I have 3 waitresses that work the day shift, " + sc.n("holly") + ", " + sc.n("molly") + ", and " + sc.n("dolly") +
            ". One of them have been STEALING FROM THE REGISTER and I just don't know which one. I've tried everything to catch " +
            "the culprit, but she's just too dog gone smart. I want to pose as a waitress <span class='hl-red'>and catch her!</span> ",
            button: [
                { chatID: 2, text: "I can do that, Do you want me to watch the security camera at the register?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "jeffery",
            text: "No, I tried viewing the security footage, but she's just too good, I've even moved the camera, but she knew! I need " +
            "you to work as a waitress along side them, get to know them, be their friend, then catch them in the act and bring them " +
            "to me! I'm going to <span class='hl-red'>make her suffer!!!</span>",
            button: [
                { chatID: 3, text: "Do you have any points on how I can get their friendship?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "jeffery",
            text: "You're going to work with all 3 of them as a waitress. I've been watching them closely for a while now and they " +
            "share everything with their co-workers, doesn't matter who it is; it's like a clique, once you're a waitress " +
            "you're on the inside. I need to the one stealing before they steal more money are you ready to start now?",
            button: [
                { chatID: 4, text: "Yes I can", callback: "ws0" }
            ]
        },
        {
            chatID: 4,
            speaker: "jeffery",
            text: "Ok, put these on.",
            button: [
                { chatID: 5, text: "What, that's a waitress uniform, don't you have a waiter uniform?", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "jeffery",
            text: "N-n-n-n-no this is called the Naked Beaver, not the Naked Cock. This uniform should fit you, that's why " +
            sc.n("missy") + " had me inspect you before we started. Now please get dressed.",
            button: [
                { chatID: 14, text: "This is absolute crap!", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "jeffery",
            text: "We don't have one, you'll have to change in here, and since I don't trust you I'm not going to leave you in " +
            "my office by yourself. ",
            button: [
                { chatID: 7, text: "I'm not doing that!", callback: "" },
                { chatID: 10, text: "That's kinda weird, but ok", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "jeffery",
            text: "Oh well I guess I'll have to tell " + sc.n("missy") + " you refused to work.",
            button: [
                { chatID: 8, text: "That's not fair. She'd kill me", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "jeffery",
            text: "Think of it like changing in the gym locker. Y-y-y-you just finished gym class and I'm the coach " +
            "making sure you boys stay out of trouble.",
            button: [
                { chatID: 9, text: "Promise not to do any weird shit?", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "jeffery",
            text: "Yes, I just want to make sure you don't steal anything from my office." +
                "N-n-n-now get dressed and find my thief!",
            button: [
                { chatID: 10, text: "*sigh* ok", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "jeffery",
            text: "Good. Put this uniform on. ",
            button: [
                { chatID: 11, text: "*sigh* [Remove your shirt]", callback: "ws1" }
            ]
        },
        {
            chatID: 11,
            speaker: "jeffery",
            text: "...",
            button: [
                { chatID: 12, text: "[Remove your pants and underwear]", callback: "ws2" }
            ]
        },
        {
            chatID: 12,
            speaker: "jeffery",
            text: "mmm",
            button: [
                { chatID: 13, text: "[Check your uniform out]", callback: "ws3" }
            ]
        },
        {
            chatID: 13,
            speaker: "jeffery",
            text: "Hmmm, your cocks hanging out... You can't walk around like that...",
            button: [
                { chatID: 15, text: "I told you it was stupid", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "jeffery",
            text: "W-w-w-we had an understanding at " + sc.n("missy") + "'s you were going to be a waitress, now are you going to " +
            "do your job or do I have to get someone else!",
            button: [
                { chatID: 6, text: "Fine I'll wear the stupid uniform", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "jeffery",
            text: "I'll get some tape, that will hide it.",
            button: [
                { chatID: 16, text: "What.. no!", callback: "ws4" }
            ]
        },
        {
            chatID: 16,
            speaker: "jeffery",
            text: "Yes, that worked quite well, now we have to hide that hair of yours.",
            button: [
                { chatID: 17, text: "What's wrong with my hair?", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "jeffery",
            text: "It's dumb, put on this wig.",
            button: [
                { chatID: 18, text: "Fine I'll put on your stupid wig! [Put on the wig]", callback: "ws5" }
            ]
        },
        {
            chatID: 18,
            speaker: "jeffery",
            text: "You know, I think you'll be able to pull this off, you make a cute chick.",
            button: [
                { chatID: 19, text: "😡", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "jeffery",
            text: "Ok, now go out there and start taking some orders. Dont forget to make friends with " + sc.n("holly") +
            ", " + sc.n("molly") + ", and " + sc.n("dolly") + "!",
            button: [
                { chatID: -1, text: "Ok boss [Get to work]", callback: "startWork" }
            ]
        },
        {
            chatID: 20,
            speaker: "jeffery",
            text: "You need to talk to missy before working here again. ",
            button: [
                { chatID: -1, text: "I'm such an airhead! Of course! ", callback: "leave" }
            ]
        },
        {
            chatID: 21,
            speaker: "jeffery",
            text: "Ready to work?",
            button: [
                { chatID: 22, text: "Yep. [Remove your shirt]", callback: "ws1" }
            ]
        },
        {
            chatID: 22,
            speaker: "jeffery",
            text: "[Heavy breathing]",
            button: [
                { chatID: 23, text: "[Pull down your bottoms]", callback: "ws2" }
            ]
        },
        {
            chatID: 23,
            speaker: "jeffery",
            text: "[Heavier breathing]",
            button: [
                { chatID: -1, text: "[Check yourself out]", callback: "ws3x" }
            ]
        },
        {
            chatID: 24,
            speaker: "jeffery",
            text: "W-w-w-what the hell! I said no cock! Go home and get rid of that thing! ",
            button: [
                { chatID: -1, text: "drat!", callback: "undoAndLeave" }
            ]
        },
        {
            chatID: 25,
            speaker: "jeffery",
            text: "Looks good. Now get to work! ",
            button: [
                { chatID: -1, text: "[Go work]", callback: "startWork" }
            ]
        },
        {
            chatID: 26,
            speaker: "jeffery",
            text: "D-d-d-did you catch them yet?",
            button: [
                { chatID: -1, text: "Not yet. [Get dressed and leave]", callback: "undoAndLeave" }
            ]
        },
        {
            chatID: 27,
            speaker: "jeffery",
            text: "You may be a terrible detective, but your panties smell so good. I sniffed them today, I l-l-l-love you scent.",
            button: [
                { chatID: -1, text: "Oh, thanks?", callback: "undoAndLeave" }
            ]
        },
        {
            chatID: 28,
            speaker: "jeffery",
            text: "You're a great little detective, and cute little waitress! ",
            button: [
                { chatID: -1, text: "Thank you so much!", callback: "undoAndLeave" }
            ]
        },
        {
            chatID: 29,
            speaker: "jeffery",
            text: "I-I-I-I'm tired of waiting for you to get them! Tell me you got something!",
            button: [
                { chatID: 32, text: "I got them!", callback: "" },
                { chatID: 30, text: "Nope, still working it. [Lie]", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "jeffery",
            text: "Well I'm tired of waiting! I think you're just out there goofing off! " +
                "I'm going to ask " + sc.n("missy") + " for a new detective! ",
            button: [
                { chatID: 32, text: "Don't do that, I solved the case!", callback: "" },
                { chatID: 31, text: "I'm sorry, I don't think they're stealing from you", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "jeffery",
            text: "Th-th-th-they are stealing from me! You're fired, pack your stuff and get out! ",
            button: [
                { chatID: -1, text: "Yes sir", callback: "undoAndLeaveFail" }
            ]
        },
        {
            chatID: 32,
            speaker: "jeffery",
            text: "Really, tell me all about it!",
            button: [
                { chatID: 33, text: "[Explain how they're using a secret function in the cash machine to steal money]", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "jeffery",
            text: "That's rather brilliant! I'm going to get that fixed and fix them! I'll meet you at " + sc.n("missy") + "'s to " +
            "let her know what a fine detective your are! Also here's an extra $500 for your great work!",
            button: [
                { chatID: -1, text: "Thank you so much! I'll see you at " + sc.n("missy") + "'s", callback: "undoAndLeaveSuccess" }
            ]
        },
        //{
        //    chatID: 34,
        //    speaker: "jeffery",
        //    text: "You're a great little detective, and cute little waitress! ",
        //    button: [
        //        { chatID: -1, text: "Thank you so much!", callback: "jeffEnd" }
        //    ]
        //},
        //{
        //    chatID: 35,
        //    speaker: "jeffery",
        //    text: "You may be a terrible detective, but your panties smell so good. I sniffed them today, I l-l-l-love you scent.",
        //    button: [
        //        { chatID: -1, text: "Oh, thanks?", callback: "jeffEnd" }
        //    ]
        //},
        //{
        //    chatID: 36,
        //    speaker: "jeffery",
        //    text: "P-P-P-p-p-panties! No one wears panties here! This isn't a mom an pop eatery, this is the Naked Beaver! " +
        //        "I don't care what you do, but you need to hide and lock that thing up!",
        //    button: [
        //        { chatID: 37, text: "But how?", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 37,
        //    speaker: "jeffery",
        //    text: "I don't care! Get out until you figure it out!",
        //    button: [
        //        { chatID: 38, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 38,
        //    speaker: "thinking",
        //    text: sc.n("jeffery") + " is such a weird asshole. How am I going to hide my giant cock! " + sc.n("missy") + " won't " +
        //        "let me back in until I finish this case, maybe " + sc.n("tiffany") + " or " + sc.n("candy") + " can help...",
        //    button: [
        //        { chatID: -1, text: "[Leave]", callback: "getDressed" }
        //    ]
        //},
        //{
        //    chatID: 39,
        //    speaker: "jeffery",
        //    text: "This has got to be the worst first day on the job. You're lucky you're hear to find the thief or I would fire you. " +
        //        "You need to step it up out there! Get out of my office and try again tomorrow!",
        //    button: [
        //        { chatID: -1, text: "[Leave]", callback: "getDressed" }
        //    ]
        //},
        
        //{
        //    chatID: 40,
        //    speaker: "jeffery",
        //    text: "You're a cute little waitress! ",
        //    button: [
        //        { chatID: -1, text: "Thank you so much!", callback: "jeffEnd" },
        //        { chatID: 41, text: "Ask about C.U.M.", callback: "" },
        //    ]
        //},
        //{
        //    chatID: 41,
        //    speaker: "jeffery",
        //    text: "So, there's this place I've heard so much about. I think it's called C.U.M. I've always wanted to be a " +
        //        "member, but I don't even know how to start. I've heard from some of the girls that you may be a member " +
        //        "and I was wondering how you get in? ",
        //    button: [
        //        { chatID: 42, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 42,
        //    speaker: "jeffery",
        //    text: "Oh. Y-Y-Y-Yeah. I'm not just a member, I've obtained the rank of Brotherhood. It's really high up in " +
        //        "C.U.M. I'm really an important person there. So would you want to join? ",
        //    button: [
        //        { chatID: 43, text: "I've believe in what I've heard about the church, and I've always just wanted to belong somewhere.", callback: "storycheck" }
        //    ]
        //},
        //{
        //    chatID: 43,
        //    speaker: "jeffery",
        //    text: "Well, you're a good kid and you helped me out with the stealing. I can bring you up next time I go up " +
        //        "there. You'll fit right in. ",
        //    button: [
        //        { chatID: 46, text: "I was hoping to check it out before I go there with everyone. Maybe just have a quick look around. ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 44,
        //    speaker: "jeffery",
        //    text: "Why would I bring you up there? You didn't help me out at all at finding out who took the money. Now even more " +
        //        "money's gone missing. You're lucky I still let you work here. Why would I help you? ",
        //    button: [
        //        { chatID: 45, text: "I did give you my favorite pair of panties. I know you've sniffed them a few times. ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 45,
        //    speaker: "jeffery",
        //    text: "I do love panties. Tell you what. Give me your panties and I'll take you up there the next time I go up. Make sure " +
        //        "you work out first, I want a strong musky smell to them. You know you do have a great smell. I came so hard " +
        //        "when I sniffed your panties. Oh, and a blow job. I want a blow job while I sniff your panties too. Then I'll " +
        //        "take you up there as my personal guest. ",
        //    button: [
        //        { chatID: 46, text: "I was hoping to check it out before I go there with everyone. Maybe just have a quick look around. ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 46,
        //    speaker: "jeffery",
        //    text: "Y-Y-Y-You can't just wander around. It's a church, not a f-f-f-frat party. Absolutely not! I'm not going " +
        //        "to tell you how to get in and give you free range to do whatever you want. Maybe if you were important like " +
        //        "me and not some dumb waitress. No. No. No. ",
        //    button: [
        //        { chatID: 47, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 47,
        //    speaker: "thinking",
        //    text: "If he's as important as he says he is then he may just be the one to get me the code. I bet he knows it, " +
        //        "I just have to get it out of him some way. He's not going to just tell me. I have to do something drastic. " +
        //        "I could threaten him, but he would just go to the cops, and you know they'll take " +
        //        "his side and lock me up. Hmmmm. I guess a girl's gotta do what a girl's gotta do. " +
        //        " If this wasn't for " + sc.n("missy") + " there's no way I would do what I have to do next. ",
        //    button: [
        //        { chatID: 48, text: "...", callback: "j0" }
        //    ]
        //},
        //{
        //    chatID: 48,
        //    speaker: "jeffery",
        //    text: "W-W-W-What are you doing? ",
        //    button: [
        //        { chatID: 49, text: "...", callback: "j1" }
        //    ]
        //},
        //{
        //    chatID: 49,
        //    speaker: "me",
        //    text: "There's no way you could help me out. An important man like you has to know ways to get in so I can " +
        //        "just have a quick peek. You're so smart and sexy if you help me out I'll help you out again and again. ",
        //    button: [
        //        { chatID: 50, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 50,
        //    speaker: "jeffery",
        //    text: "I am really important, but I really shouldn't..... ",
        //    button: [
        //        { chatID: 51, text: "GULP!", callback: "j2" }
        //    ]
        //},
        //{
        //    chatID: 51,
        //    speaker: "jeffery",
        //    text: "Oh!!! S-S-S-Sorry. I'm a I'm a I'm a... ",
        //    button: [
        //        { chatID: 52, text: "GLUCK GLUCK", callback: "j3" }
        //    ]
        //},
        //{
        //    chatID: 52,
        //    speaker: "jeffery",
        //    text: "Ohhhhhh no",
        //    button: [
        //        { chatID: 53, text: "GULP! ", callback: "j4" }
        //    ]
        //},
        //{
        //    chatID: 53,
        //    speaker: "me",
        //    text: "That was just a taste of what you could do to me if we were both members of C.U.M. I'm just a dumb " +
        //        "waitress. What problems could I cause? ",
        //    button: [
        //        { chatID: 54, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 54,
        //    speaker: "jeffery",
        //    text: "Sorry for c-c-cumming so quick. Of course I know how to get in, B-B-B-But only if you do something for me. ",
        //    button: [
        //        { chatID: 55, text: "What is it?  ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 55,
        //    speaker: "jeffery",
        //    text: "P-P-P-Panties. I want panties.  ",
        //    button: [
        //        { chatID: 56, text: "Oh. I can give you my panties. ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 56,
        //    speaker: "jeffery",
        //    text: "Not just your panties. Get me Holly, Dolly, and Molly's panties. And your panties. I want all the panties. " +
        //        "Then I'll help you. ",
        //    button: [
        //        { chatID: 57, text: "How am I going to do that? ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 57,
        //    speaker: "jeffery",
        //    text: "I d-don't care. Just get me the panties. You work with them. You c-can get them. I want them used. No clean " +
        //        "panties. Used. Diry. Smelly. Then maybe I'll help. ",
        //    button: [
        //        { chatID: 58, text: "*Groan* Fine. I'll get you the panties. But you better come through! ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 58,
        //    speaker: "jeffery",
        //    text: "Maybe I will. You'll have to get me the panties to find out. ",
        //    button: [
        //        { chatID: 59, text: "Ok. I'll get the panties you weird-o ", callback: "j5" }
        //    ]
        //},
        //{
        //    chatID: 59,
        //    speaker: "me",
        //    text: "Hey Molly, could you grab Holly and Dolly. I have a huge favor to ask. ",
        //    button: [
        //        { chatID: 60, text: "...", callback: "j6" }
        //    ]
        //},
        //{
        //    chatID: 60,
        //    speaker: "thinking",
        //    text: "Maybe I'll just ask them for their panties. We've been working together for a while. I'm sure they'll " +
        //        "want to help after I explain everything. ",
        //    button: [
        //        { chatID: -1, text: "...", callback: "j7" }
        //    ]
        //},
        //{
        //    chatID: 61,
        //    speaker: "holly",
        //    text: "What do you want you snitch! ",
        //    button: [
        //        { chatID: 62, text: "Oh. Wow, are you still mad. I just wanted a favor. Just need your panties...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 62,
        //    speaker: "dolly",
        //    text: "Well now sugar, seeing as you went and told on us, now you want our panties. You gotta be dumber than a " +
        //        "bag of hammers if you think we're gunna give you our panties. And just what are you going to do with them? ",
        //    button: [
        //        { chatID: 63, text: "So I need them to get my friend free. She was captured by the cult and I was going to give them to Jeffery to have him help me.", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 63,
        //    speaker: "molly",
        //    text: "You're going to give that pervert our panties! You know he took out 2 weeks of pay from all of us. My " +
        //        "credit cards are still maxed out and Dolly had to sell her car so she could make rent. I can't tell you " +
        //        "enough how much we hate you. We trusted you once, never again. ",
        //    button: [
        //        { chatID: 64, text: "But I had...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 64,
        //    speaker: "holly",
        //    text: "You're a lying backstabber. We will never help you. You can go fuck yourself. C'mon girls. Let's get back " +
        //        "to work. ",
        //    button: [
        //        { chatID: 69, text: "Awww", callback: "j10" }
        //    ]
        //},
        //{
        //    chatID: 65,
        //    speaker: "me",
        //    text: "Good. You're all here. I have a giant request for all of you. Now this is going to sound strange, but I need " +
        //        "a pair of each of your used dirty panties. You see I'm on a mission to save a very dear friend of mine who...",
        //    button: [
        //        { chatID: 66, text: "...", callback: "j8" }
        //    ]
        //},
        //{
        //    chatID: 66,
        //    speaker: "molly",
        //    text: "Of course. Anything for a friend. It's kinda hot that you're going to take our panties to masturbate with. " +
        //        "Snap and picture and send it to me. I love tributes. ",
        //    button: [
        //        { chatID: 67, text: "Oh. It's for Jeffery. I have to give them to him so he can help me find...", callback: "j9" }
        //    ]
        //},
        //{
        //    chatID: 67,
        //    speaker: "holly",
        //    text: "What! There's no way we're giving our panties to that creep. How dare you even ask. ",
        //    button: [
        //        { chatID: 68, text: "..but I need them to save...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 68,
        //    speaker: "dolly",
        //    text: "That man is an unholy pig of a boss! You know better. Let's go girls! ",
        //    button: [
        //        { chatID: 69, text: "..but I need them to save...", callback: "j10" }
        //    ]
        //},
        //{
        //    chatID: 69,
        //    speaker: "thinking",
        //    text: "That didn't go as planned. I got to get those panties! Maybe I could just strip them off when they work. " +
        //        "No there's no way that will work. I could try to steal them when they change... That won't work. They'll notice " +
        //        "the missing panties and Jeffery will tell on me. He's a snitch. I think I'll just have to do an old fashion " +
        //        "panty raid of their homes. I just don't know where that is. Jeffery does! He's got to have files on them. " +
        //        "I need to get into his desk. I could break in after dark. I can do it through the boy's bathroom window. I'll " +
        //        "just break the latch. The girls don't go in there and Jeffery never pays attention to what's going on. It " +
        //        "will be perfect. ",
        //    button: [
        //        { chatID: 70, text: "Now to break the latch so I can sneak in after dard. ", callback: "j11" }
        //    ]
        //},
        //{
        //    chatID: 70,
        //    speaker: "thinking",
        //    text: "I'll just disable that latch...",
        //    button: [
        //        { chatID: -1, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 71,
        //    speaker: "thinking",
        //    text: "That should do it. Now I'll just come back here at night and check their files to see where they live. ",
        //    button: [
        //        { chatID: -1, text: "...", callback: "j12" }
        //    ]
        //},
        //{
        //    chatID: 72,
        //    speaker: "jeffery",
        //    text: "S-s-so did you get the panties? All of them?",
        //    button: [
        //        { chatID: -1, text: "Yes. Here go you. [Hand over the panties, plus the one's you wore] ", callback: "s10_0" },
        //        { chatID: -1, text: "Not yet", callback: "jeffEnd" }
        //    ]
        //},
        //{
        //    chatID: 73,
        //    speaker: "jeffery",
        //    text: "This isn't a-a-all of them! There should be three sets of panties plus yours! ",
        //    button: [
        //        { chatID: -1, text: "Oh. I need to get them still. ", callback: "jeffEnd" }
        //    ]
        //},
        //{
        //    chatID: 74,
        //    speaker: "jeffery",
        //    text: "I see you have all the panties from the girls, but you aren't wearing any panties. Next time you come " +
        //        "and work wear some panties so the smells are y-y-yummy fresh. ",
        //    button: [
        //        { chatID: -1, text: "Next time I come I'll wear some panties for you. ", callback: "jeffEnd" }
        //    ]
        //},
        //{
        //    chatID: 75,
        //    speaker: "jeffery",
        //    text: "oooooooooo yessssss ",
        //    button: [
        //        { chatID: 76, text: "...", callback: "s10_1" }
        //    ]
        //},
        //{
        //    chatID: 76,
        //    speaker: "me",
        //    text: "Before you start masturbating to these, you said you would give me code to the compound? ",
        //    button: [
        //        { chatID: 77, text: "...", callback: "s10_2" }
        //    ]
        //},
        //{
        //    chatID: 77,
        //    speaker: "jeffery",
        //    text: "UGH! I don't know why you think it's a good idea. You really shouldn't go there without me. ",
        //    button: [
        //        { chatID: -1, text: "Look, we made a deal. I held up my end, now it's time for you to do yours. ", callback: "s10_3" }
        //    ]
        //},
        //{
        //    chatID: 78,
        //    speaker: "jeffery",
        //    text: "Sigh. The code is 1-2-3-4-5. Now go and let me enjoy your sweet sweet scent. ",
        //    button: [
        //        { chatID: -1, text: "Cool. Thanks ", callback: "s10_4" }
        //    ]
        //},
        //{
        //    chatID: 79,
        //    speaker: "jeffery",
        //    text: "Sigh. You don't really want that do you? I mean you shouldn't go in there. Really you should just go. ",
        //    button: [
        //        { chatID: 80, text: "Man. Don't give me the run around. I got the panties, now I need that code. ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 80,
        //    speaker: "jeffery",
        //    text: "F-f-fuck. ok. So I don't really know the code. I just go there when everyone else does and the gates are open. " +
        //        "You should just go there when everyone else goes. No one knows but importatnt people know that code anyways. ",
        //    button: [
        //        { chatID: 81, text: "But you said... ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 81,
        //    speaker: "jeffery",
        //    text: "I-I-I-I know. I lied. B-b-but I really wanted these panties. I've been trying for years. I'll give you $500 for " +
        //        "getting me these wonderfully delicious panties. They are oh so moist and succulant. Way more musky than those college " +
        //        "girl's panties I bought off the internet. ",
        //    button: [
        //        { chatID: -1, text: "Fine! I'll take your money, but you really are a sick fuck. ", callback: "s10_5" }
        //    ]
        //},
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
