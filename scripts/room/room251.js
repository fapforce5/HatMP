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
        default:
            break;
    }
};

room251.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "jeffery",
            text: "Oh hello, " + sc.n("me") + ", I-I-I-I'm glad you could make it. Let me go over the details with you.",
            button: [
                { chatID: 1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "jeffery",
            text: "I have 3 waitresses that work the day shift, " + sc.n("holly") + ", " + sc.n("molly") + ", and " + sc.n("dolly") +
            ". One of them has been STEALING FROM THE REGISTER and I just don't know which one. I've tried everything to catch " +
            "the culprit, but she's just too dog gone smart. I want you to pose as a waitress <span class='hl-red'>and catch her!</span>",
            button: [
                { chatID: 2, text: "I can do that. Do you want me to watch the security camera at the register?", callback: "" }
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
            "you're on the inside. I need to find the one stealing before they steal more money. Are you ready to start now?",
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
            text: "Yes, I just want to make sure you don't steal anything from my office. " +
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
            text: "Hmmm, your cock's hanging out... You can't walk around like that...",
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
            text: "Ok, now go out there and start taking some orders. Don't forget to make friends with " + sc.n("holly") +
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
            text: "W-w-w-what the hell! I said no cock! Go home and get rid of that thing!",
            button: [
                { chatID: -1, text: "Drat!", callback: "undoAndLeave" }
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
            "let her know what a fine detective you are! Also here's an extra $500 for your great work!",
            button: [
                { chatID: -1, text: "Thank you so much! I'll see you at " + sc.n("missy") + "'s", callback: "undoAndLeaveSuccess" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(251, room251);
