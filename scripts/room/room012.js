//bathroom
var room12 = {};

room12.main = function () {

    var canGoOut = cl.hasoutfit("public");

    if (canGoOut === null) {
        btnList = [
            {
                "type": "btn",
                "name": "shower",
                "left": 407,
                "top": 0,
                "width": 662,
                "height": 970,
                "image": "12_bathroom/12_shower.png"
            },
            {
                "type": "btn",
                "name": "mirror",
                "left": 1533,
                "top": 0,
                "width": 387,
                "height": 675,
                "image": "12_bathroom/12_mirror.png"
            }
            //{
            //    "type": "btn",
            //    "name": "toilet",
            //    "left": 297,
            //    "top": 729,
            //    "width": 491,
            //    "height": 351,
            //    "image": "12_bathroom/12_toilet.png"
            //}
        ];

        var hit = false;
        if (!g.checkflag("showerPeek")) {
            if (sc.sister().thisRoom) {
                nav.button(room12.showerScene("sister1", 12));
                chat(0, 12);
                hit = true;
            }
            else if (sc.mother().thisRoom) {
                nav.bg("12_bathroom/12_bathroom_peek.jpg");
                nav.button({
                    "type": "img",
                    "name": "mom1",
                    "left": 872,
                    "top": 76,
                    "width": 787,
                    "height": 1004,
                    "image": "12_bathroom/12_mother1.png"
                }, 12);
                chat(3, 12);
                hit = true;
            }
        }
        if (!hit) {
            navList = [11];
            nav.buildnav(navList);
            $.each(btnList, function (i, v) {
                nav.button(v, 12);
            });
        }
    }
    else {
        g.internal = canGoOut;
        chat(18, 12);
    }
};

room12.showerScene = function (scene) {
    switch (scene) {
        case "sister1":
            return {
                "type": "img",
                "name": "sister1",
                "left": 639,
                "top": 137,
                "width": 439,
                "height": 787,
                "image": "12_bathroom/12_sister1.png"
            };
        case "sister2":
            return {
                "type": "img",
                "name": "sister2",
                "left": 589,
                "top": 134,
                "width": 487,
                "height": 843,
                "image": "12_bathroom/12_sister2.png"
            };
        case "sister3":
            return {
                "type": "img",
                "name": "sister3",
                "left": 681,
                "top": 112,
                "width": 371,
                "height": 837,
                "image": "12_bathroom/12_sister3.png"
            };
        case "sister4":
            return {
                "type": "img",
                "name": "sister4",
                "left": 569,
                "top": 199,
                "width": 432,
                "height": 769,
                "image": "12_bathroom/12_sister4.png"
            };
        case "sister5":
            return {
                "type": "img",
                "name": "sister4",
                "left": 804,
                "top": 124,
                "width": 263,
                "height": 783,
                "image": "12_bathroom/12_sister5.png"
            };
        case "joinSisters":
            return {
                "type": "img",
                "name": "sister6",
                "left": 560,
                "top": 160,
                "width": 497,
                "height": 759,
                "image": "12_bathroom/12_sister6.png"
            };
        case "sisterButt":
            return {
                "type": "img",
                "name": "sister6",
                "left": 413,
                "top": 0,
                "width": 1507,
                "height": 1080,
                "image": "12_bathroom/12_sister7.png"
            };
            //Mother
        case "mom1":
            return {
                "type": "img",
                "name": "mom1",
                "left": 872,
                "top": 76,
                "width": 787,
                "height": 1004,
                "image": "12_bathroom/12_mother1.png"
            };
        case "mom2":
            return {
                "type": "img",
                "name": "mom2",
                "left": 904,
                "top": 296,
                "width": 723,
                "height": 784,
                "image": "12_bathroom/12_mother2.png"
            };
        case "mom3":
            return {
                "type": "img",
                "name": "mom3",
                "left": 773,
                "top": 39,
                "width": 452,
                "height": 1041,
                "image": "12_bathroom/12_mother3.png"
            };
        case "mom4":
            return {
                "type": "img",
                "name": "mom4",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "12_bathroom/12_mother4.png"
            };
        case "mom5":
            return {
                "type": "img",
                "name": "mom5",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "12_bathroom/12_mother5.png"
            };
    }
    return [];
};

room12.btnclick = function (name) {
    switch (name) {
        case "toilet":
            char.room(22);
            break;
        case "shower":
            if (g.diffDatesByDays(g.dt, g.get("shower")) === 0)
                chat(12, 12);
            else {
                nav.killall();
                cl.c.cumface = false;
                cl.nude();
                zcl.displayMain(0, 400, .22, "shower");
                nav.bg("12_bathroom/shower.jpg", "12_bathroom/shower.jpg");
                if (inv.get("razor").count > 0)
                    chat(15, 12);
                else
                    chat(11, 12);
            }
            break;
        case "mirror":
            g.pass = 12;
            char.room(27);
            //nav.killall();
            //nav.bg("12_bathroom/012_brushTeeth.jpg", "12_bathroom/012_brushTeeth.jpg");
            //zcl.displayMirror();
            //chat(13, 12);
            break;
        default:
            break;
    }

};

room12.chatcatch = function (callback) {
    switch (callback) {
        case "stopPeek":
            char.addtime(20);
            char.room(11);
            break;
        case "stopPeekClothes":
            cl.undo();
            char.room(11);
            break;
        case "sister2":
            nav.killbutton("sister1");
            nav.button(room12.showerScene("sister2", 12));
            g.setflag("showerPeek");
            break;
        case "sister3":
            nav.killbutton("sister2");
            nav.button(room12.showerScene("sister3", 12));
            if (sc.checkevent("lola", 5))
                chat(19, 12);
            else
                chat(10, 12);
            break;
        case "sister4":
            nav.killbutton("sister3");
            nav.button(room12.showerScene("sister4", 12));
            break;
        case "sister5":
            nav.killbutton("sister4");
            nav.button(room12.showerScene("sister5", 12));
            break;
        case "joinSisters":
            nav.killbutton("sister4");
            nav.killbutton("sister3");
            nav.killbutton("sister5");
            nav.button(room12.showerScene("joinSisters", 12));
            break;
        case "sisterGetNaked":
            cl.nude();
            nav.button(room12.showerScene("sisterButt", 12));
            break;
        case "sisterRetreat":
            char.addtime(20);
            sc.setstep("eva", -1);
            nav.room(10);
            break;
        case "mom2":
            nav.killbutton("mom1");
            nav.button({
                "type": "img",
                "name": "mom2",
                "left": 904,
                "top": 296,
                "width": 723,
                "height": 784,
                "image": "12_bathroom/12_mother2.png"
            }, 12);
            g.setflag("showerPeek");
            break;
        case "mom3":
            nav.killbutton("mom2");
            nav.bg("12_bathroom/12_bathroom.png");
            nav.button({
                "type": "img",
                "name": "mom3",
                "left": 824,
                "top": 26,
                "width": 502,
                "height": 1065,
                "image": "12_bathroom/12_mother3.png"
            }, 12);
            break;
        case "mom4":
            cl.nude();
            nav.killbutton("mom3");
            nav.bg("12_bathroom/12_bathroom_squeeze.jpg");
            nav.button({
                "type": "img",
                "name": "mom4",
                "left": 644,
                "top": 0,
                "width": 1154,
                "height": 1068,
                "image": "12_bathroom/12_msqueeze.png"
            }, 12);
            break;
        case "mom5":
            nav.killbutton("mom4");
            nav.button({
                "type": "img",
                "name": "mom5",
                "left": 644,
                "top": 0,
                "width": 1154,
                "height": 1068,
                "image": "12_bathroom/12_msqueeze1.png"
            }, 12);
            break;
        case "mom6":
            nav.killbutton("mom5");
            nav.button({
                "type": "img",
                "name": "mom6",
                "left": 644,
                "top": 0,
                "width": 1154,
                "height": 1068,
                "image": "12_bathroom/12_msqueeze2.png"
            }, 12);
            break;
        case "shaveBody":
            g.set("bodyhair", 0);
            inv.use("razor");
            cl.display();
            break;
        case "finishShowering":
            cl.undo();
            g.mod("energy", 30);
            char.addtime(30);
            g.set("shower", new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 0, 0, 0, 0));
            char.room(12);
            break;
        case "reloadRoom":
            char.room(12);
            break;
        default:
            break;
    }
};

room12.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: sc.n("eva") + " and " + sc.n("lola") + " are taking a shower. Do you want to continue peeking?",
            button: [
                { chatID: 1, text: "Hell yes!", callback: "sister2" },
                { chatID: -1, text: "I really shouldn't peek. I'm going to get out of here. ", callback: "stopPeek" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Continue watching your " + sc.n("el"), callback: "sister3" },
                { chatID: -1, text: "That's enough. I'm going to get out of here. ", callback: "stopPeek" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "It looks like they're just about done. I better leave before they see me.",
            button: [{ chatID: -1, text: "Leave ", callback: "stopPeek" }]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "",
            button: [
                { chatID: 4, text: "Continue peeking on " + sc.n("landlord") + "? ", callback: "mom2" },
                { chatID: -1, text: "Be a decent guy and leave the bathroom. ", callback: "stopPeek" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: sc.n("me") + "!!",
            button: [
                { chatID: 5, text: "Say nothing.... ", callback: "mom3" },
                { chatID: 6, text: "Hay babe!", callback: "mom3" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "Well... since you have seen me naked why don't you take off your clothes so I can see you naked.. It's only fair. ",
            button: [
                { chatID: 7, text: "Yes " + sc.n("landlord") + " [Get naked]", callback: "mom4" },
                { chatID: -1, text: "Yelp like a bitch and run out of the bathroom", callback: "stopPeek" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "Don't 'Hay babe' me! Take your clothes off right now mister.",
            button: [
                { chatID: 7, text: "Alright! [Get naked]", callback: "mom4" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Look at your little pee pee. I bet you want me to touch it, don't you",
            button: [
                { chatID: 8, text: "Say nothing.... ", callback: "mom5" },
                { chatID: 8, text: "Oh yes, touch my little pee pee ", callback: "mom5" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "Awwww, it's so cute. Your balls are so soft in my hand",
            button: [
                { chatID: 9, text: "mmmmmm", callback: "mom6" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "You're just like all men. Dirty filthy and disgusting! Don't you ever, every peek at me again, you pervert! Now GET OUT!",
            button: [
                { chatID: -1, text: "AAAAaaaAAAAAAAAAaaaa my balls!!! [Whimper out of the bathroom] ", callback: "stopPeekClothes" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "",
            button: [
                { chatID: 17, text: "Continue watching your " + sc.n("el"), callback: "sister4" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "I already took a shower today... I'm not OCD",
            button: []
        },
        {
            chatID: 13,
            speaker: "me",
            text: "Gotta get clean.",
            button: [
                { chatID: 14, text: "Apply Makeup", callback: "" },
                { chatID: 14, text: "Apply Lipstick", callback: "" },
                { chatID: -1, text: "Finish", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "I don't have that.",
            button: [
                { chatID: -1, text: "Finish", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: 16, text: "Shave your body", callback: "shaveBody" },
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "You shaved your body",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "",
            button: [
                { chatID: 2, text: "Continue watching your " + sc.n("el"), callback: "sister5" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "I can't go out like this. I need my " + g.internal + ". ",
            button: []
        },
        {
            chatID: 19,
            speaker: "me",
            text: "",
            button: [
                { chatID: 20, text: "Continue watching your " + sc.n("el"), callback: "sister4" },
                { chatID: 21, text: "Join them", callback: "joinSisters" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "",
            button: [
                { chatID: 2, text: "Continue watching your " + sc.n("el"), callback: "sister5" },
                { chatID: 21, text: "Join them", callback: "joinSisters" }
            ]
        },
        {
            chatID: 21,
            speaker: "eva",
            text: "What the hell " + sc.n("me") + "!! What are you doing in here!",
            button: [
                { chatID: -1, text: "Oh, uh sorry, I thought the bathroom was empty.", callback: "stopPeek" },
                { chatID: 22, text: "[Get naked]", callback: "sisterGetNaked" }
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "Oh wow",
            button: [
                { chatID: 23, text: "You like?", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "NO! no no no no nonononono! Get out you disgusting pervert! Get out or I'll tell " + sc.n("landlord") +
                " and she'll kick you out of the house!",
            button: [
                { chatID: 24, text: "Oh, I thought.....", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "Don't think, get out!",
            button: [
                { chatID: -1, text: "[Retreat to your bedroom]", callback: "sisterRetreat" }
            ]
        }
    ];

    return cArray[chatID];
}