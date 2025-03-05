//Room name
var room477 = {};
room477.main = function () {
    if (g.isNight()) {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 809,
            "top": 529,
            "width": 116,
            "height": 268,
            "title": "Sneak into the cottage",
            "image": "477_cottage/door.png"
        }, 477);
    }
    else {
        nav.button({
            "type": "btn",
            "name": "queen",
            "left": 1042,
            "top": 70,
            "width": 590,
            "height": 1010,
            "image": "477_cottage/queen.png"
        }, 477);
    }
    nav.buildnav([475]);
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "window",
    //        "left": 1322,
    //        "top": 379,
    //        "width": 128,
    //        "height": 238,
    //        "title": "Sneak into the cottage",
    //        "image": "477_cottage/window.png"
    //    }
    //];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 477);
    //});
};

room477.btnclick = function (name) {
    switch (name) {
        case "door":
            if (inv.has("lockpick")) {
                lockpick.init(2, "doorpickSuccess", "doorpickFail", 60, 477);
            }
            else {
                chat(22, 477);
            }
            break;
        case "doorpickSuccess":
            nav.killall();
            nav.bg("477_cottage/night.jpg");
            chat(21, 477);
            break;
        case "doorpickFail":
            chat(22, 477);
            break;
        case "queen":
            if (sc.getMission("queen", "meet").notStarted) {
                sc.startMission("queen", "meet");
                sc.completeMissionTask("queen", "meet", 0);
                sc.show("queen");
                chat(17, 477);
            }
            else
                room477.btnclick("drawSelect");
            break;
        case "drawSelect":
            sc.select("wardrobe", "316_livingroom/icon_wardrobe.png", 0);
            sc.select("return", "477_cottage/icon_return.png", 1);
            sc.select("snack", "477_cottage/icon_snack.png", 2);
            sc.select("forest", "477_cottage/icon_forest.png", 3);
            break;
        case "forest":
            char.room(475);
            break;
        case "snack":
            nav.killbutton("wardrobe");
            nav.killbutton("return");
            nav.killbutton("snack");
            nav.killbutton("forest");
            gv.mod("energy", 9999);
            chat(19, 477);
            break;
        case "return":
            nav.kill();
            nav.bg("477_cottage/duo.jpg");
            chat(20, 477);
            break;
        case "wardrobe":
            g.pass = 477;
            char.room(8);
            break;
        //case "window":
        //    chat(0, 477);
        //    break;
        //case "l1":
        //case "l2":
        //case "l3":
        //case "l4":
        //case "l5":
        //case "l6":
        //    nav.killall();
        //    g.internal = g.removeItemByValue(g.internal, name);
        //    nav.bg("477_cottage/" + name + ".jpg");
        //    switch (name) {
        //        case "l5":
        //            chat(22, 477);
        //            break;
        //        case "l6":
        //            chat(23, 477);
        //            break;
        //        case "l1":
        //            chat(24, 477);
        //            break;
        //        default:
        //            chat(3, 477);
        //            break;
        //    }
        //    break;
        //case "cave1":
        //    chat(15, 477);
        //    break;
        default:
            break;
    }
};

room477.chatcatch = function (callback) {
    switch (callback) {
        case "drawSelect":
            room477.btnclick("drawSelect");
            break;
        case "goToPark":
            char.room(450);
            break;
        case "reset":
            char.room(477);
            break;
        case "leave":
            char.room(475);
            break;
        //case "s0":
        //    nav.killall();
        //    nav.bg('477_cottage/interior.jpg');
        //    break;
        //case "s1":
        //    nav.bg('477_cottage/bedroom.jpg');
        //    break;
        //case "s2":
        //    nav.killall();
        //    g.internal = ["l1", "l2", "l3", "l4", "l5", "l6"];
        //    room477.chatcatch("drawBoxes");
        //    break;
        //case "drawBoxes":
        //    nav.bg('477_cottage/interior.jpg');
        //    for (i = 0; i < g.internal.length; i++) {
        //        switch (g.internal[i]) {
        //            case "l1":
        //                nav.button({
        //                    "type": "btn",
        //                    "name": "l1",
        //                    "left": 1031,
        //                    "top": 576,
        //                    "width": 550,
        //                    "height": 322,
        //                    "image": "477_cottage/l1.png"
        //                }, 477);
        //                break;
        //            case "l2":
        //                nav.button({
        //                    "type": "btn",
        //                    "name": "l2",
        //                    "left": 346,
        //                    "top": 453,
        //                    "width": 111,
        //                    "height": 126,
        //                    "image": "477_cottage/l2.png"
        //                }, 477);
        //                break;
        //            case "l3":
        //                nav.button({
        //                    "type": "btn",
        //                    "name": "l3",
        //                    "left": 611,
        //                    "top": 492,
        //                    "width": 297,
        //                    "height": 77,
        //                    "image": "477_cottage/l3.png"
        //                }, 477);
        //                break;
        //            case "l4":
        //                nav.button({
        //                    "type": "btn",
        //                    "name": "l4",
        //                    "left": 75,
        //                    "top": 799,
        //                    "width": 297,
        //                    "height": 247,
        //                    "image": "477_cottage/l4.png"
        //                }, 477);
        //                break;
        //            case "l5":
        //                nav.button({
        //                    "type": "btn",
        //                    "name": "l5",
        //                    "left": 405,
        //                    "top": 366,
        //                    "width": 101,
        //                    "height": 76,
        //                    "image": "477_cottage/l5.png"
        //                }, 477);
        //                break;
        //            case "l6":
        //                nav.button({
        //                    "type": "btn",
        //                    "name": "l6",
        //                    "left": 556,
        //                    "top": 400,
        //                    "width": 84,
        //                    "height": 51,
        //                    "image": "477_cottage/l6.png"
        //                }, 477);
        //                break;
        //        }
        //    }
        //    break;
        //case "resetsearch":
        //    if (g.internal.length > 2) {
        //        room477.chatcatch("drawBoxes");
        //    }
        //    else {
        //        nav.bg("477_cottage/c0.jpg");
        //        chat(4, 477);
        //    }
        //    break;
        //case "c1":
        //    nav.bg("477_cottage/c1.jpg");
        //    break;
        //case "c2":
        //    nav.bg("477_cottage/c2.jpg");
        //    break;
        //case "c3":
        //    nav.bg("477_cottage/c3.jpg");
        //    break;
        //case "c4":
        //    char.addtime(720);
        //    nav.bg("477_cottage/c4.jpg");
        //    break;
        //case "c5":
        //    char.addtime(720);
        //    nav.bg("477_cottage/c5.jpg");
        //    break;
        //case "c6":
        //    char.addtime(720);
        //    nav.bg("477_cottage/c6.jpg");
        //    break;
        //case "c7":
        //    char.addtime(720);
        //    nav.bg("477_cottage/c7.jpg");
        //    break;
        //case "c8":
        //    char.addtime(720);
        //    nav.bg("477_cottage/c8.jpg");
        //    break;
        //case "c9":
        //    inv.add("envelope");
        //    char.addtime(120);
        //    gv.set("oncase", null);
        //    char.room(460);
        //    break;
        //case "cave0":
        //    nav.bg("212_black/black.jpg");
        //    break;
        //case "cave1":
        //    nav.bg("477_cottage/cave1.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "cave1",
        //        "left": 762,
        //        "top": 161,
        //        "width": 487,
        //        "height": 747,
        //        "image": "477_cottage/cave1.png"
        //    }, 477);
        //    break;
        default:
            break;
    }
};

room477.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Oh nice. An open window. This may be easier than I thought. ",
            button: [
                { chatID: 1, text: "Sneak in.", callback: "s0" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Should I check that she's asleep, or just start looking and hope for the best. ",
            button: [
                { chatID: 2, text: "Check if Forest Queen is asleep", callback: "s1" },
                { chatID: -1, text: "Just start looking for information. ", callback: "s2" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Oh good. She is asleep. I better stay quiet while I search for information. ",
            button: [
                { chatID: -1, text: "Start looking for information. ", callback: "s2" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Not what I'm looking for...",
            button: [
                { chatID: -1, text: "...", callback: "resetsearch" },
            ]
        },
        {
            chatID: 4,
            speaker: "queen",
            text: "Oh my. It looks like we caught an intruder. What ever shall we do with them? ",
            button: [
                { chatID: 5, text: "Oh, no. Sorry I got lost...", callback: "c1" },
            ]
        },
        {
            chatID: 5,
            speaker: "queen",
            text: "You're not very convincing. A lost person does not appear in houses.   ",
            button: [
                { chatID: 6, text: "I... uhh... I... ....", callback: "c2" },
            ]
        },
        {
            chatID: 6,
            speaker: "queen",
            text: "You're getting woozy. The sleeping potion acts fast. It's best to lay down before you fall down.  ",
            button: [
                { chatID: 7, text: "....", callback: "c3" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "...",
            button: [
                { chatID: 8, text: "....", callback: "c4" },
            ]
        },
        {
            chatID: 8,
            speaker: "queen",
            text: "Good morning. I hope you slept well. ",
            button: [
                { chatID: 9, text: "Oh my head hurts.", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "queen",
            text: "I told you to lay down before you fell down. Why does no one ever listen to me. " + sc.n("me") +
            ", I had a feeling I may be seeing you. You're more famous than you know. ",
            button: [
                { chatID: 10, text: "Really. What do you know?", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "queen",
            text: "I won't bore you with a retelling of your life's story. But I do know that you work for " + sc.n("missy") + ". " +
                "The girl that was taken by Ubel. That ordeal was really quite something. They may not have taken you back " +
                "yet, but they will, in time. In a way I'm glad you've found your way here. ",
            button: [
                { chatID: 11, text: "Why, so you could kidnap and torture me! ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "queen",
            text: "Don't you worry your pretty head over such things. I am not a torturer, but one who gives " +
                "freedom to those that the Cult of C.U.M. hunts. And you little one are being hunted by the Cult. " +
                "They will take you back, but carefully. Your life is not safe outside of my protection. ",
            button: [
                { chatID: 12, text: "What? No. I just want to get home. ", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "queen",
            text: "You don't know what you want. Go speak with " + sc.n("a") + ". She'll set your right for your own " +
                "protection. Go now. Go deep into the cave and meet with her. She'll provide you all you need. ",
            button: [
                { chatID: 13, text: "Let me out! Let me out now!  ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "queen",
            text: "No. Go now and carry out your task. ",
            button: [
                { chatID: 14, text: "Hey! ", callback: "cave0" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "What the hell! I can't believe I was caught again. I've got to find a way out of here. Let me " +
                "just let my eyes adjust and try to figure a way out of this mess I've found myself in.",
            button: [
                { chatID: -1, text: "...", callback: "cave1" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "That looks like a way. I guess I'll have to see where it leads. ",
            button: [
                { chatID: -1, text: "...", callback: "cave2" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "AAAaaaaaa ",
            button: [
                { chatID: -1, text: "...", callback: "cave3" },
            ]
        },
        {
            chatID: 17,
            speaker: "queen",
            text: "Why hello little " + gender.pronoun("boy") + ". Have you come " +
                "to free yourself? ",
            button: [
                { chatID: 18, text: "Free myself?", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "queen",
            text: "Oh silly me, I mistook you for another! You must just be wandering. " +
                "You've come such a long way in a dangerous place. Let me help you, I " +
                "offer my services free of money and reciprocation. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "drawSelect" },
            ]
        },
        {
            chatID: 19,
            speaker: "queen",
            text: "I have these energy dense Lambas bread. Really a wonderful snack " +
                "for a traveler like you. ",
            button: [
                { chatID: -1, text: "Awesome! Thanks so much!", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "queen",
            text: "Wise choice. The forest isn't safe. Freda here will escort you " +
                "back to the park quick as a flash. ",
            button: [
                { chatID: -1, text: "[Follow Freda back to the park. ]", callback: "goToPark" },
                { chatID: -1, text: "Oh. No thanks. I'm going to wander some more. ", callback: "reset" },
            ]
        },
        {
            chatID: 21,
            speaker: "!jenna",
            text: "You shouldn't be here after dark. The " + sc.n("queen") + " will be " +
                "angry. You need to go. ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "leave" },
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Damn. It's locked. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },

        //{
        //    chatID: 13,
        //    speaker: "queen",
        //    text: "That's why I was hoping for. I'm going to help you. The cult has been nothing but blight on this town for " +
        //        "too long. They ruined my life. Let untie you and give you what you need. Promise to behave yourself?",
        //    button: [
        //        { chatID: 14, text: "Really? Yes. I won't do anything! ", callback: "c5" },
        //    ]
        //},
        //{
        //    chatID: 14,
        //    speaker: "queen",
        //    text: "I hope you don't mind nudity. I never wear clothing unless I have to. Now let me grab my list to help you. ",
        //    button: [
        //        { chatID: 15, text: "I don't mind at all!", callback: "c6" },
        //    ]
        //},
        //{
        //    chatID: 15,
        //    speaker: "queen",
        //    text: "I put it over here somewhere... Oh there it is under all these scrolls. ",
        //    button: [
        //        { chatID: 16, text: "...", callback: "c7" },
        //    ]
        //},
        //{
        //    chatID: 16,
        //    speaker: "queen",
        //    text: "Here is a list of all everyone in the town that works for the cult. I'm sure you'll find it most " +
        //        "enlightening. ",
        //    button: [
        //        { chatID: 17, text: "So why are you helping me? ", callback: "c8" },
        //    ]
        //},
        //{
        //    chatID: 17,
        //    speaker: "queen",
        //    text: "I'll share my store with you since it may help you on your journey. " + 
        //        "Once apon a time I was a young lad trying to find my place in this world when I met a beautiful young girl. " +
        //        "It was love at first sight. It wasn't long before she brought me under false pretenses to the cult. Like you. " +
        //        "I was chained to the walls and forced to make offerings. ",
        //    button: [
        //        { chatID: 18, text: "I do remember that. ", callback: "" },
        //    ]
        //},
        //{
        //    chatID: 18,
        //    speaker: "queen",
        //    text: "After some time I was selected to be bathed in the cum and undergo the transformation. " +
        //        "As it turns out I was able to tranform into this beautiful body you see before you. I " +
        //        "thought my transformation alone was going to bring about Azrael, but I learned that was just the first " +
        //        "ritual with each ritual more horrible than the last. No one should go through that. I'm in a constant state " +
        //        "of fear. ",
        //    button: [
        //        { chatID: 19, text: "That's terrible.", callback: "" },
        //    ]
        //},
        //{
        //    chatID: 19,
        //    speaker: "queen",
        //    text: "As a cherry on top Ubel made me his personal servent, if you know what I mean. I was made to serve hime for two years. " +
        //        "But as the cult continued to grow and entwine with the town and as Ubel took on more personal servents I saw my " +
        //        "oppurtunity to take on a new role and be the liason between the cult and the people of this town. ",
        //    button: [
        //        { chatID: 20, text: "How many people do you work with? ", callback: "c5" },
        //    ]
        //},
        //{
        //    chatID: 20,
        //    speaker: "queen",
        //    text: "Oh my dear sweet child. Nearly everyone is part of the cult or is helping in some way. Some are happy with the money " +
        //        "we provide, and some, like the police, prefer the sexual favors we provide. Those that tried to fight us end up in " +
        //        "in the cells within the compound. ",
        //    button: [
        //        { chatID: 21, text: "So why don't you take them down? ", callback: "" },
        //    ]
        //},
        //{
        //    chatID: 21,
        //    speaker: "queen",
        //    text: "The cult has many eyes fixated on me. That's why I live out here, free from all. Now You've stayed too long; you " +
        //        "must be on your way. Keep this note safe and tell no one I gave it to you. From what I've heard you are the best " +
        //        "chance for ending this terrible nightmare of the town. Go now and keep my secret from all. ",
        //    button: [
        //        { chatID: -1, text: "Thanks! ", callback: "c9" },
        //    ]
        //},
        //{
        //    chatID: 22,
        //    speaker: "thinking",
        //    text: "He looks pissed at me... ",
        //    button: [
        //        { chatID: -1, text: "...", callback: "resetsearch" },
        //    ]
        //},
        //{
        //    chatID: 23,
        //    speaker: "thinking",
        //    text: "Oh gross! Where did she get so many severed penises and balls? ",
        //    button: [
        //        { chatID: -1, text: "...", callback: "resetsearch" },
        //    ]
        //},
        //{
        //    chatID: 24,
        //    speaker: "thinking",
        //    text: "That's a lot of food for just one person. ",
        //    button: [
        //        { chatID: -1, text: "...", callback: "resetsearch" },
        //    ]
        //},
        
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};