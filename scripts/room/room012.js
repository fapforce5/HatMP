//bathroom
var room12 = {};

room12.main = function () {

    var canGoOut = cl.hasoutfit("public");

    if (canGoOut === null && g.pass === "lolapee") {
        g.pass = "";
        weekly.set("lolapee");
        nav.bg("12_bathroom/lolapee.jpg");
        chat(43, 12);
    }
    else if (canGoOut === null) {
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
            },
            {
                "type": "btn",
                "name": "toilet",
                "left": 297,
                "top": 729,
                "width": 491,
                "height": 351,
                "image": "12_bathroom/12_toilet.png"
            }
        ];

        var hit = false;
        if (!daily.get("homeShowerPeek")) {
            if (sc.getTimeline("lola").thisRoom) {
                nav.button(room12.showerScene("sister1", 12));
                chat(0, 12);
                hit = true;
            }
            else if (sc.getTimeline("landlord").thisRoom) {
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

        nav.button({
            "type": "btn",
            "name": "mirror",
            "left": 1533,
            "top": 0,
            "width": 387,
            "height": 675,
            "image": "12_bathroom/12_mirror.png"
        }, 12);
        g.internal = canGoOut;
        chat(18, 12);
    }
};

room12.showerScene = function (scene) {
    switch (scene) {
        case "sister1":
            return {
                "type": "img",
                "name": "sister",
                "left": 639,
                "top": 137,
                "width": 439,
                "height": 787,
                "image": "12_bathroom/12_sister1.png"
            };
        case "sister2":
            return {
                "type": "img",
                "name": "sister",
                "left": 589,
                "top": 134,
                "width": 487,
                "height": 843,
                "image": "12_bathroom/12_sister2.png"
            };
        case "sister3":
            return {
                "type": "img",
                "name": "sister",
                "left": 681,
                "top": 112,
                "width": 371,
                "height": 837,
                "image": "12_bathroom/12_sister3.png"
            };
        case "sister4":
            return {
                "type": "img",
                "name": "sister",
                "left": 569,
                "top": 199,
                "width": 432,
                "height": 769,
                "image": "12_bathroom/12_sister4.png"
            };
        case "sister5":
            return {
                "type": "img",
                "name": "sister",
                "left": 804,
                "top": 124,
                "width": 263,
                "height": 783,
                "image": "12_bathroom/12_sister5.png"
            };
        case "sister8":
            return {
                "type": "img",
                "name": "sister",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "12_bathroom/12_sister8.jpg"
            };
        case "joinSisters":
            return {
                "type": "img",
                "name": "sister",
                "left": 560,
                "top": 160,
                "width": 497,
                "height": 759,
                "image": "12_bathroom/12_sister6.png"
            };
        case "sisterButt":
            return {
                "type": "img",
                "name": "sister",
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
                "left": 817,
                "top": 38,
                "width": 453,
                "height": 1042,
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
            g.pass = 12;
            char.room(22);
            break;
        case "shower":
            nav.killall();
            cl.nude();
            zcl.displayMain(0, 400, .22, "shower", false);
            nav.bg("12_bathroom/shower.jpg", "12_bathroom/shower.jpg");
            if (cl.c.bodyhair < -999)
                chat(11, 12);
            else if (inv.get("razor").count > 0)
                chat(15, 12);
            else
                chat(11, 12);
            
            break;
        case "mirror":
            g.pass = 12;
            char.room(27);
            break;
        case "sisterPeek":
            if (g.internal > 5) {
                nav.killbutton("sisterPeek");
                chat(1, 12);
            }
            else {
                nav.killbutton("sister");
                nav.button(room12.showerScene("sister" + g.internal, 12));
            }
            g.internal++;
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
        case "runRoom":
            char.addtime(60);
            char.room(10);
            break;
        case "stopPeekClothes":
            cl.undo();
            char.room(11);
            break;
        case "sister2":
            nav.next("sisterPeek");
            sc.startMission("priest", "confession", 2);
            g.internal = 2;
            daily.set("homeShowerPeek");
            break;
        case "sister3":
            nav.killbutton("sister2");
            nav.button(room12.showerScene("sister3", 12));
            if (sc.getEvent("lola", 5))
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
        case "sisterStrip":
            cl.nude();
            zcl.displayMain(0, 800, .199, "", true); 
            break;
        case "sisterStrip1":
            if (sc.getLevel("eva") > 6) {
                nav.killall();
                nav.bg("12_bathroom/sisterStrip1.jpg");
                chat(46, 12);
            }
            else {
                nav.killbutton("sister");
                nav.button(room12.showerScene("joinSisters", 12));
                zcl.displayMain(0, 800, .199, "", true); 
                chat(45, 12);
            }
            break;
        case "sisterStrip2":
            nav.bg("12_bathroom/sisterStrip2.jpg");
            nav.button({
                "type": "img",
                "name": "gif",
                "left": 1300,
                "top": 200,
                "width": 501,
                "height": 502,
                "image": "501_jadaGame/lose.gif"
            }, 501);
            break;
        case "sisterStrip3":
            nav.killall();
            nav.bg("12_bathroom/sisterStrip3.jpg");
            break;
        case "sisterStrip4":
            nav.bg("12_bathroom/sisterStrip4.jpg");
            break;
        case "sisterStripEnd":
            char.addtime(75);
            levels.oral(3, "f", "eva");
            levels.piss(false, false, true, "f", "eva");
            char.room(12);
            break;
        case "joinSisters":
            if (sc.getstep("lola") < 200) {
                nav.killbutton("sister4");
                nav.killbutton("sister3");
                nav.killbutton("sister5");
                nav.button(room12.showerScene("joinSisters", 12));
                chat(21, 12);
            }
            else {
                if (scc.get("lola").love < 50 || scc.get("eva").love < 50) {
                    nav.killbutton("sister4");
                    nav.killbutton("sister3");
                    nav.killbutton("sister5");
                    nav.button(room12.showerScene("joinSisters", 12));
                    chat(25, 12);
                }
                else {
                    nav.killall();
                    nav.button(room12.showerScene("sister8", 12));
                    chat(27, 12);
                }
            }
            break;
        case "sisterGetNaked":
            cl.nude();
            nav.button(room12.showerScene("sisterButt", 12));
            break;
        case "sisterCheckFuckThem":
            // add minimum love here
            scc.love("lola", -10, 100);
            scc.love("eva", -10, 100);
            chat(23, 12);
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
            daily.set("homeShowerPeek");
            break;
        case "mom3":
            nav.killbutton("mom2");
            nav.bg("12_bathroom/12_bathroom.png");
            nav.button({
                "type": "img",
                "name": "mom3",
                "left": 817,
                "top": 38,
                "width": 453,
                "height": 1042,
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
            cl.shave();
            inv.use("razor");
            zcl.displayMain(0, 400, .22, "shower", false);
            cl.display();
            break;
        case "finishShowering":
            cl.undo();
            char.addtime(30);
            if (!daily.get("shower")) {
                daily.set("shower");
                if (sc.getTimeline("landlord").roomID < 50) {
                    nav.killall();
                    nav.bg("12_bathroom/lotion1.jpg");
                    chat(39, 12);
                    return;
                }
            }
            daily.set("shower");
            char.room(12);
            break;
        case "lotion2":
            levels.mod("xdress", 10, 3);
            if (cl.c.chest < 3) 
                nav.bg("12_bathroom/lotion2_man.jpg");
            else 
                nav.bg("12_bathroom/lotion2_woman.jpg");
            break;
        case "200_1":
            if (cl.c.bodyhair > 50) {
                nav.killall();
                zcl.displayMain(0, 500, .199, "", false);
                cl.shave();
                cl.nude();
                nav.bg("12_bathroom/200_1.jpg");
                
                nav.button({
                    "type": "img",
                    "name": "200_1",
                    "left": 406,
                    "top": 372,
                    "width": 688,
                    "height": 708,
                    "image": "12_bathroom/200_1.png"
                }, 12);
                chat(29, 12);
            }
            else {
                cl.nude();
                room12.chatcatch("200_2");
            }
            break;
        case "200_2":
            nav.killall();
            nav.bg("12_bathroom/200.jpg");
            zcl.displayMain(0, 500, .199, "", true);
            nav.button({
                "type": "img",
                "name": "200_1",
                "left": 425,
                "top": 168,
                "width": 1111,
                "height": 912,
                "image": "12_bathroom/200_2.png"
            }, 12);
            chat(30, 12);
            break;
        case "200_3":
            nav.killall();
            nav.bg("12_bathroom/200_3.jpg");
            zcl.displayMain(-50, 1200, .25, "", true)
            break;
        case "200_4":
            nav.bg("12_bathroom/200_4.jpg");
            break;
        case "200_5":
            nav.killall();
            nav.bg("12_bathroom/200_5.jpg");
            break;
        case "200_6":
            nav.bg("12_bathroom/200_6.jpg");
            zcl.displayMain(-1400, 0, .45, "", false);
            nav.button({
                "type": "img",
                "name": "200_1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "12_bathroom/200_6.png"
            }, 12);
            if (cl.c.chastity !== null)
                chat(34, 12);
            else
                chat(36, 12);
            break;
        case "200_finish0":
            scc.love("lola", 5, 100);
            scc.love("eva", 5, 100);
            room12.chatcatch("200_finish1");
            break;
        case "200_finish1":
            char.addtime(120);
            gv.set("shower", new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 0, 0, 0, 0));
            cl.c.cumface = false;
            cl.undo();
            char.room(12);
            break;
        case "reset":
            char.room(12);
            break;
        case "leave":
            char.room(11);
            break;
        case "badleave":
            sc.modLevel("lola", 15, 7);
            char.room(11);
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
                { chatID: -1, text: "Hell yes!", callback: "sister2" },
                { chatID: -1, text: "I really shouldn't peek. I'm going to get out of here. ", callback: "stopPeek" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Those dirty dirty girls with their little shower secret. I " +
                "wonder if they'll get mad if I strip off all my clothes and ask " +
                "them if they need a hand washing each other's backs? ",
            button: [
                { chatID: 2, text: "[Strip down and show them your dick]", callback: "sisterStrip" },
                { chatID: -1, text: "Naw. That's stupid. I'm going to get out of here. ", callback: "stopPeek" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "So... Do you like what you see? ",
            button: [{ chatID: -1, text: "... ", callback: "sisterStrip1" }]
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
                { chatID: 6, text: "Hey babe!", callback: "mom3" }
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
            text: "Don't 'Hey babe' me! Take your clothes off right now mister.",
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
                { chatID: -1, text: "Finish", callback: "reset" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "I don't have that.",
            button: [
                { chatID: -1, text: "Finish", callback: "reset" }
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
                { chatID: -1, text: "Join them", callback: "joinSisters" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "",
            button: [
                { chatID: 2, text: "Continue watching your " + sc.n("el"), callback: "sister5" },
                { chatID: -1, text: "Join them", callback: "joinSisters" }
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
                { chatID: -1, text: "You like?", callback: "sisterCheckFuckThem" }
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
            chatID: 24,
            speaker: "eva",
            text: "Don't think, get out!",
            button: [
                { chatID: -1, text: "[Retreat to your bedroom]", callback: "sisterRetreat" }
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "If you've been nicer to us we may have let your shower with us. ",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "Yeah butthead get out!",
            button: [
                { chatID: -1, text: "[Leave]", callback: "sisterRetreat" }
            ]
        },
        {
            chatID: 27,
            speaker: "lola",
            text: "Oh hey " + sc.n("me") + ". Since we're all girls I guess you can join us in the shower. What do you say " + sc.n("eva") +
                "?",
            button: [
                { chatID: 28, text: "...?", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "eva",
            text: "Sure come on in! Girl showers are the best!",
            button: [
                { chatID: -1, text: "Sweet!", callback: "200_1" }
            ]
        },
        {
            chatID: 29,
            speaker: "eva",
            text: "First we have to do is shave your hairy body! ",
            button: [
                { chatID: -1, text: "Sweet!", callback: "200_2" }
            ]
        },
        {
            chatID: 30,
            speaker: "eva",
            text: "You're going to love this soap. It makes you smell like candy. All the boys turn turn their head to " +
                "look at me when I walk by 'cause I smell so yummy!",
            button: [
                { chatID: 31, text: "Sweet!", callback: "200_3" }
            ]
        },
        {
            chatID: 31,
            speaker: "lola",
            text: "It so is! It just does something to me where I can't help myself.",
            button: [
                { chatID: 32, text: "...", callback: "200_4" }
            ]
        },
        {
            chatID: 32,
            speaker: "lola",
            text: "Oh yeah, taste us, we're so yummy!",
            button: [
                { chatID: 33, text: "oh yeah!", callback: "200_5" }
            ]
        },
        {
            chatID: 33,
            speaker: "el",
            text: "MmmMMMmmmm Yeahhhhh You're so good!",
            button: [
                { chatID: -1, text: "oh yeah!", callback: "200_6" }
            ]
        },
        {
            chatID: 34,
            speaker: "lola",
            text: "I'm so glad your penis isn't hanging out. This is so much more fun when we're all girls. ",
            button: [
                { chatID: 35, text: "...", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "eva",
            text: "Yeah, and we know you won't perv on us. See you next shower!",
            button: [
                { chatID: -1, text: "Oh Yeah", callback: "200_finish0" }
            ]
        },
        {
            chatID: 36,
            speaker: "me",
            text: "So do you girls want a taste of me?",
            button: [
                { chatID: 37, text: "...", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "lola",
            text: "No. Shower time is girl time. ",
            button: [
                { chatID: 38, text: "...", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "eva",
            text: "Yeah pervert. Don't point that cock at us. Way to ruin it. We're done. ",
            button: [
                { chatID: -1, text: "Awww", callback: "200_finish1" }
            ]
        },
        {
            chatID: 39,
            speaker: "landlord",
            text: "Did somebody just finish their shower? ",
            button: [
                { chatID: 41, text: "Yes?", callback: "lotionEnd" },
                { chatID: 40, text: "[Cover yourself up] Not now " + sc.n("landlord") + "!", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "landlord",
            text: "Well then. Don't forget to take care of your skin. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 41,
            speaker: "landlord",
            text: "Let's take care of your skin. Don't want you to get a rash. ",
            button: [
                { chatID: 42, text: "Yes " + sc.n("landlord") + ". ", callback: "lotion2" },
            ]
        },
        {
            chatID: 42,
            speaker: "landlord",
            text: "You always did have the smoothest skin. I guess this lotion is doing what it needs to do. ",
            button: [
                { chatID: -1, text: "Thank you. ", callback: "reset" },
            ]
        },
        {
            chatID: 43,
            speaker: "lola",
            text: "WHAT THE HELL! I'm peeing! The door was closed! Get out! ",
            button: [
                { chatID: -1, text: "Oh sorry. ", callback: "leave" },
                { chatID: 44, text: "So uh... Can I watch you pee? ", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "lola",
            text: "NO! " + sc.n("eva") + " was right. You are a pervert! Leave so I can pee! ",
            button: [
                { chatID: -1, text: "Oh sorry. ", callback: "badleave" },
            ]
        },
        {
            chatID: 45,
            speaker: "eva",
            text: "GET THE FUCK OUT PERVERT! We're just trying to shower and you come in " +
                "with your dick out? Get out! Get out! Get out!",
            button: [
                { chatID: -1, text: "YELP! Run away! ", callback: "runRoom" },
            ]
        },
        {
            chatID: 46,
            speaker: "lola",
            text: "Oh wow. Not expecting to be inturrupted. Nice penis, but I have " + 
                "to get ready for school. ",
            button: [
                { chatID: 47, text: "... ", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "eva",
            text: "Get over here dweeb and eat me out. Love a good orgasm before " +
                "school. ",
            button: [
                { chatID: 48, text: "...sure", callback: "sisterStrip2" },
            ]
        },
        {
            chatID: 48,
            speaker: "thinking",
            text: "She tastes so good! Nothing sweeter than post shower pussy eating. " +
                "It's so so yummy!",
            button: [
                { chatID: 49, text: "...", callback: "sisterStrip3" },
            ]
        },
        {
            chatID: 49,
            speaker: "eva",
            text: "Oh fuck! I'm cumming all over your face! ",
            button: [
                { chatID: 50, text: "AAAkkkk! That's not cum, that's piss!", callback: "sisterStrip4" },
            ]
        },
        {
            chatID: 50,
            speaker: "eva",
            text: "That's not piss! It's cum stupid! You don't know anything about girls! ",
            button: [
                { chatID: 51, text: "It is piss! You're pissing right now", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "eva",
            text: "Girls can have multiple orgams, in a row idiot. You should just be happy " +
                "I came on you. Now I'm going to school so I don't have to waste more time talking " +
                "to a big dummy like you! ",
            button: [
                { chatID: -1, text: "Well ok", callback: "sisterStripEnd" },
            ]
        },
    ];

    return cArray[chatID];
}