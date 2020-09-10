//Room name
var room251 = {};
room251.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "jeff",
            "left": 882,
            "top": 96,
            "width": 676,
            "height": 984,
            "image": g.pass === "work" ? "251_office/jeff1.png" : "251_office/jeff.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 251);
    });
    if (g.pass !== "FinishLoop") {
        var navList = [0];
        nav.buildnav(navList);
    }
};

room251.btnclick = function (name) {
    switch (name) {
        case "jeff":
            var thisJeff = sc.getstep("jeffery");
            if (g.pass === "firstmeet") {
                chat(0, 251);
            }
            else if (g.pass === "initcock") {
                chat(20, 251);
            }
            else if (g.pass === "work") {
                chat(22, 251);
            }
            else if (g.pass === "FinishLoop") {
                if (thisJeff === 8) {
                    if (sc.checkevent("dolly", -1))
                        chat(35, 251);
                    else
                        chat(34, 251);
                }
                else if (thisJeff === 6)
                    chat(29, 251);
                else
                    chat(28, 251);
            }
            break;
        default:
            break;
    }
};

room251.chatcatch = function (callback) {
    switch (callback) {
        case "jeff1":
            nav.button({
                "type": "btn",
                "name": "jeff",
                "left": 882,
                "top": 96,
                "width": 676,
                "height": 984,
                "image": "251_office/jeff1.png"
            }, 251);
            break;
        case "jeff2":
            nav.killbutton("jeff");
            nav.bg("251_office/jeff2.jpg");
            break;
        case "jeff3":
            nav.bg("251_office/jeff3.jpg");
            break;
        case "jeff3a":
            nav.bg("251_office/jeff3a.jpg");
            break;
        case "jeff4":
            nav.killall();
            nav.bg("251_office/office.jpg");
            nav.button({
                "type": "img",
                "name": "jeff",
                "left": 1282,
                "top": 96,
                "width": 676,
                "height": 984,
                "image": "251_office/jeff.png"
            }, 251);
            g.internal = { shoes: cl.c.shoes, socks: cl.c.socks, pants: cl.c.pants, panties: cl.c.panties, bra: cl.c.bra, shirt: cl.c.shirt, dress: cl.c.dress, swimsuit: cl.c.swimsuit };
            cl.c.shoes = cl.c.socks = cl.c.pants = cl.c.panties = cl.c.bra = cl.c.shirt = cl.c.dress = cl.c.swimsuit = cl.c.pj = null;
            cl.c.shoes = cl.c.shirt = cl.c.pants = 'v';
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            break;
        case "jeff5":
            nav.killbutton("zzz-clothing-kill");
            cl.c.cock = 5;
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            break;
        case "jeff6":
            cl.c.wig = "d";
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            break;
        case "startWork":
            g.pass = "working";
            char.room(250);
            break;
        case "getDressed":
            sc.setstep("jeffery", 4);
            char.addtime(257);
            cl.c.socks = g.internal.socks;
            cl.c.pants = g.internal.pants;
            cl.c.panties = g.internal.panties;
            cl.c.bra = g.internal.bra;
            cl.c.shirt = g.internal.shirt;
            cl.c.dress = g.internal.dress;
            cl.c.swimsuit = g.internal.swimsuit;
            cl.c.shoes = g.internal.shoes;
            cl.c.wig = null;
            cl.display();
            char.room(0);
            break;
        case "jeff4a":
            nav.killall();
            nav.bg("251_office/office.jpg");
            nav.button({
                "type": "img",
                "name": "jeff",
                "left": 1282,
                "top": 96,
                "width": 676,
                "height": 984,
                "image": "251_office/jeff.png"
            }, 251);
            g.internal = { shoes: cl.c.shoes, socks: cl.c.socks, pants: cl.c.pants, panties: cl.c.panties, bra: cl.c.bra, shirt: cl.c.shirt, dress: cl.c.dress, swimsuit: cl.c.swimsuit };
            cl.c.shoes = cl.c.socks = cl.c.pants = cl.c.panties = cl.c.bra = cl.c.shirt = cl.c.dress = cl.c.swimsuit = cl.c.pj = null;
            cl.c.shoes = cl.c.shirt = cl.c.pants = 'v';
            cl.c.wig = "d";
            cl.display();
            zcl.displayMain(80, 650, .15, "panties shirt pants socks shoes bra", false);
            break;
        case "leave0":
            char.room(0);
            break;
        case "leaveLoop":
            char.addtime(240);
            cl.c.socks = g.internal.socks;
            cl.c.pants = g.internal.pants;
            cl.c.panties = g.internal.panties;
            cl.c.bra = g.internal.bra;
            cl.c.shirt = g.internal.shirt;
            cl.c.dress = g.internal.dress;
            cl.c.swimsuit = g.internal.swimsuit;
            cl.c.shoes = g.internal.shoes;
            cl.c.wig = null;
            cl.display();
            char.room(0);
            break;
        case "jeffFail":
            sc.setstep("missy", 20);
            sc.setstep("holly", 3);
            sc.setstep("dolly", 4);
            sc.setstep("molly", 4);
            sc.setstep("jeffery", 7);
            sc.setstep("jeffery", -2);
            g.roomMapAccess(250, false, false);
            cl.c.socks = g.internal.socks;
            cl.c.pants = g.internal.pants;
            cl.c.panties = g.internal.panties;
            cl.c.bra = g.internal.bra;
            cl.c.shirt = g.internal.shirt;
            cl.c.dress = g.internal.dress;
            cl.c.swimsuit = g.internal.swimsuit;
            cl.c.shoes = g.internal.shoes;
            cl.c.wig = null;
            cl.display();
            char.room(0);
            break;
        case "jeffsuccess":
            sc.setstep("missy", 20);
            sc.setstep("holly", -1);
            sc.setstep("jeffery", 7);
            sc.setstep("jeffery", -1);
            g.mod("money", 500);
            g.roomMapAccess(250, false, false);
            cl.c.socks = g.internal.socks;
            cl.c.pants = g.internal.pants;
            cl.c.panties = g.internal.panties;
            cl.c.bra = g.internal.bra;
            cl.c.shirt = g.internal.shirt;
            cl.c.dress = g.internal.dress;
            cl.c.swimsuit = g.internal.swimsuit;
            cl.c.shoes = g.internal.shoes;
            cl.c.wig = null;
            cl.display();
            char.room(0);
            break;
        case "jeffEnd":
            char.addtime(400);
            cl.c.socks = g.internal.socks;
            cl.c.pants = g.internal.pants;
            cl.c.panties = g.internal.panties;
            cl.c.bra = g.internal.bra;
            cl.c.shirt = g.internal.shirt;
            cl.c.dress = g.internal.dress;
            cl.c.swimsuit = g.internal.swimsuit;
            cl.c.shoes = g.internal.shoes;
            cl.c.wig = null;
            cl.display();
            char.room(0);
            break;
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
            text: "No, I treid viewing the security footage, but she's just too good, I've even moved the camera, but she knew! I need " +
            "you to work as a waitress along side them, get to know them, be their friend, then catch them in the act and bring them " +
            "to me! I'm going to <span class='hl-red'>make her suffer!!!</span>",
            button: [
                { chatID: 3, text: "Do you have any points on how I can get their friendship?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "jeffery",
            text: "You're going to work with all 3 of them as a waitress. I've been watching them closly for a while now and they " +
            "share everything with their co-workers, doens't matter who it is; it's like a clique, once you're a waitress " +
            "you're on the inside. I need to the one stealing before they steal more money are you ready to start now?",
            button: [
                { chatID: 4, text: "Yes I can", callback: "jeff1" }
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
                { chatID: 8, text: "Aw crap, you wouldn't she's really pissed at me", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "jeffery",
            text: "Think of it like changing in the gym locker. Y-y-y-you just finished gym class and I'm the coach " +
            "making sure you boys stay out of trouble.",
            button: [
                { chatID: 9, text: "Promise not to do any weird shit?", callback: "" },
                { chatID: 13, text: "No, you can search me after I change, there's nothing in here I want to steal.", callback: "jeff4" }
            ]
        },
        {
            chatID: 9,
            speaker: "jeffery",
            text: "Yes, I just want to make sure you don't steal anything from my office.",
            button: [
                { chatID: 10, text: "Alright fine, let's get started.", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "jeffery",
            text: "...",
            button: [
                { chatID: 11, text: "[Remove your shirt]", callback: "jeff2" }
            ]
        },
        {
            chatID: 11,
            speaker: "jeffery",
            text: "...",
            button: [
                { chatID: 12, text: "[Remove your pants and underwear]", callback: "jeff3" }
            ]
        },
        {
            chatID: 12,
            speaker: "jeffery",
            text: "mmm",
            button: [
                { chatID: 13, text: "[Check your uniform out]", callback: "jeff4" }
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
                { chatID: 16, text: "What.. no!", callback: "jeff5" }
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
                { chatID: 18, text: "Fine I'll put on your stupid wig! [Put on the wig]", callback: "jeff6" }
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
            text: "W-W-W-W-W-W-W-Why the fuck is your cock out in the middle of my restaurant?",
            button: [
                { chatID: 21, text: "I told you the tape wasn't going to work!", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "jeffery",
            text: "You're fired, Get your clothes on and get out!",
            button: [
                { chatID: -1, text: "Aw crap.", callback: "getDressed" }
            ]
        },
        {
            chatID: 22,
            speaker: "jeffery",
            text: "Ready to work?",
            button: [
                { chatID: cl.c.chastity === null ? 23 : 25, text: "Yep. [Get Dressed]", callback: "jeff2" }
            ]
        },
        {
            chatID: 23,
            speaker: "jeffery",
            text: "...",
            button: [
                { chatID: 24, text: "[Change pants]", callback: "jeff3" }
            ]
        },
        {
            chatID: 24,
            speaker: "jeffery",
            text: "W-W-W-Wait, " + sc.n("missy") + " said you have to wear a chasity device if you're going to work here. Please " +
                "get it so everone doesn't see your p-p-p-penis.",
            button: [
                { chatID: -1, text: "Oh right, sorry.", callback: "leave0" }
            ]
        },
        {
            chatID: 25,
            speaker: "jeffery",
            text: "[Heavy breathing]",
            button: [
                { chatID: 26, text: "[Continue changing]", callback: "jeff3a" }
            ]
        },
        {
            chatID: 26,
            speaker: "jeffery",
            text: "[Heavier breathing]",
            button: [
                { chatID: 27, text: "[Get dressed]", callback: "jeff4a" }
            ]
        },
        {
            chatID: 27,
            speaker: "jeffery",
            text: "You look good, you can start your shift.",
            button: [
                { chatID: -1, text: "[Start shift]", callback: "startWork" }
            ]
        },
        {
            chatID: 28,
            speaker: "jeffery",
            text: "D-d-d-d-did you catch the their yet?",
            button: [
                { chatID: -1, text: "Still working it.", callback: "leaveLoop" }
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
                { chatID: -1, text: "Yes sir", callback: "jeffFail" }
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
                { chatID: -1, text: "Thank you so much! I'll see you at " + sc.n("missy") + "'s", callback: "jeffsuccess" }
            ]
        },
        {
            chatID: 34,
            speaker: "jeffery",
            text: "You're a great little detective, and cute little waitress! ",
            button: [
                { chatID: -1, text: "Thank you so much!", callback: "jeffEnd" }
            ]
        },
        {
            chatID: 35,
            speaker: "jeffery",
            text: "You may be a terrible detective, but your panties smell so good. I sniffed them today, I l-l-l-love you scent.",
            button: [
                { chatID: -1, text: "Oh, thanks?", callback: "jeffEnd" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};