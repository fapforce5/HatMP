//Candy room
var room53 = {};
room53.main = function () {
    //if (!inv.has("reddoor") && !sc.candy().thisRoom && !g.get("reddoor")) {
    //    var btnList = [
    //        {
    //            "type": "btn",
    //            "name": "1",
    //            "left": 1636,
    //            "top": 690,
    //            "width": 157,
    //            "height": 223,
    //            "image": "53_candy/1.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "2",
    //            "left": 678,
    //            "top": 278,
    //            "width": 88,
    //            "height": 80,
    //            "image": "53_candy/2.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "3",
    //            "left": 549,
    //            "top": 303,
    //            "width": 60,
    //            "height": 56,
    //            "image": "53_candy/3.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "4",
    //            "left": 706,
    //            "top": 520,
    //            "width": 128,
    //            "height": 171,
    //            "image": "53_candy/4.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "5",
    //            "left": 893,
    //            "top": 407,
    //            "width": 197,
    //            "height": 228,
    //            "image": "53_candy/5.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "6",
    //            "left": 153,
    //            "top": 596,
    //            "width": 362,
    //            "height": 379,
    //            "image": "53_candy/6.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "7",
    //            "left": 1000,
    //            "top": 327,
    //            "width": 86,
    //            "height": 78,
    //            "image": "53_candy/7.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "8",
    //            "left": 904,
    //            "top": 345,
    //            "width": 101,
    //            "height": 60,
    //            "image": "53_candy/8.png"
    //        }
    //    ];
    //    $.each(btnList, function (i, v) {
    //        nav.button(v, 53);
    //    });
    if (sc.candy().thisRoom) {
        if (g.hourBetween(7, 22)) {
            nav.button({
                "type": "btn",
                "name": "candy",
                "left": 906,
                "top": 16,
                "width": 648,
                "height": 1064,
                "image": "53_candy/c.png"
            }, 53);
        }
        else
            nav.bg("53_candy/53_candyRoom_night_sleep.jpg")
    }
    var navList = [51, 55];
    nav.buildnav(navList);
};

room53.btnclick = function (name) {
    name = name.toString();
    switch (name) {
        case "candy":
            if (cl.hasoutfit("nude") === null) {
                var candyStep = sc.getstep("candy");
                if (g.get("candyDayEvent")) {
                    chat(18, 53);
                }
                else {
                    if (candyStep === 1)
                        chat(6, 53);
                    else if (candyStep === 2)
                        chat(19, 53);
                    else
                        chat(5, 53);
                }
            }
            else {
                nav.killbutton("candy");
                nav.button({
                    "type": "btn",
                    "name": "candy",
                    "left": 906,
                    "top": 16,
                    "width": 648,
                    "height": 1064,
                    "image": "53_candy/c1.png"
                }, 53);
                chat(4, 53);
            }
            break;
        case "cumlick":
            g.internal++;
            nav.killbutton("cumlick");
            if (g.internal < 5)
                nav.button({
                    "type": "tongue",
                    "name": "cumlick",
                    "left": 963,
                    "top": 496,
                    "width": 440,
                    "height": 374,
                    "image": "53_candy/bj7_" + g.internal + ".png"
                }, 53);
            else
                chat(17, 53);
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
            if (!g.get("reddoor")) {
                char.addtime(60);
                if (g.get("reddoorloc") === parseInt(name)) {
                    inv.add("reddoor");
                    nav.button({
                        "type": "img",
                        "name": "reddoor",
                        "left": 655,
                        "top": 218,
                        "width": 635,
                        "height": 479,
                        "image": "53_candy/reddoor.png"
                    }, 53);
                    chat(3, 53);
                }
                else {
                    chat(Math.floor(Math.random() * 2), 53);
                }
                g.setflag("reddoorloc");
            }
            else {
                chat(2, 53);
            }
            break;
        case "bc2":
            nav.killbutton("bc2");
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "top": 0,
                "width": 1305,
                "height": 1080,
                "image": "53_candy/bc2.png"
            }, 53);
            chat(27, 53);
            break;
        case "bc4":
            if (g.internal < 5) {
                nav.modbutton("bc4", "53_candy/bc4_" + g.internal + ".png", null, null);
                g.internal++;
            }
            else {
                nav.killbutton("bc4");
                nav.modbutton("candy", "53_candy/bc5.png", null, null);
                chat(29, 53);
            }
            break;
        default:
            break;
    }
};

room53.chatcatch = function (callback) {
    switch (callback) {
        case "killkey":
            nav.killbutton("reddoor");
            char.room(53);
            break;
        case "reset":
            char.room(53);
            break;
        case "chastity7":
            if (cl.c.chastity === null)
                chat(8, 53);
            else
                chat(7, 53);
            break;
        case "bj1":
            g.mod("receiveOralFemale", 1);
            g.setflag("candyDayEvent");
            nav.killbutton("candy");
            nav.button({
                "type": "btn",
                "name": "candy",
                "left": 906,
                "top": 500,
                "width": 648,
                "height": 1064,
                "image": "53_candy/c1.png"
            }, 53);
            break;
        case "bj2":
            nav.killall();
            nav.bg(cl.c.cock < 2 ? "53_candy/bj2.gif" : "53_candy/bj2t.gif");
            g.roomTimeout = setTimeout(function () { chat(10, 53) }, 3000);
            break;
        case "bj3":
            cl.doCum(false);
            nav.bg(cl.c.cock < 2 ? "53_candy/bj3.jpg" : "53_candy/bj3t.jpg");
            break;
        case "bj4":
            nav.bg(cl.c.cock < 2 ? "53_candy/bj4.jpg" : "53_candy/bj4t.jpg");
            break;
        case "bj5":
            nav.bg("53_candy/bj5.jpg");
            break;
        case "bj6":
            nav.bg("53_candy/bj6.jpg");
            break;
        case "bj6a":
            char.addtime(60);
            nav.killall();
            nav.bg("53_candy/53_candyRoom.jpg", "53_candy/53_candyRoom_night.jpg");
            nav.button({
                "type": "btn",
                "name": "candy",
                "left": 906,
                "top": 16,
                "width": 648,
                "height": 1064,
                "image": "53_candy/bj6a.png"
            }, 53);
            var navList = [51, 55];
            nav.buildnav(navList);
            break;
        case "bj7":
            char.addtime(60);
            g.mod("loadSwollowed", 1);
            g.internal = 0;
            nav.killall();
            sc.setstep("candy", 2);
            g.mod("sissy", 20);
            nav.bg("53_candy/bj7.jpg");
            nav.button({
                "type": "tongue",
                "name": "cumlick",
                "left": 963,
                "top": 496,
                "width": 440,
                "height": 374,
                "image": "53_candy/bj7.png"
            }, 53);
            break;
        case "bc0":
            char.addtime(60);
            g.setflag("candyDayEvent");
            break;
        case "bc1":
            g.setflag("candyDayEvent");
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "top": 0,
                "width": 1305,
                "height": 1080,
                "image": "53_candy/bc1.png"
            }, 53);
            nav.button({
                "type": "btn",
                "name": "bc2",
                "left": 1250,
                "top": 284,
                "width": 29,
                "height": 200,
                "image": "53_candy/bc1a.png"
            }, 53);
            break;
        case "bc3":
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "width": 1305,
                "height": 1080,
                "top": 0,
                "image": "53_candy/bc3.png"
            }, 53);
            break;
        case "bc4":
            nav.killbutton("candy");
            g.internal = 0;
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "top": 0,
                "width": 1305,
                "height": 1080,
                "image": "53_candy/bc1.png"
            }, 53);
            nav.button({
                "type": "tongue",
                "name": "bc4",
                "left": 1213,
                "top": 306,
                "width": 132,
                "height": 425,
                "image": "53_candy/bc4.png"
            }, 53);
            break;
        case "bc6":
            g.mod("loadSwollowed", 1);
            g.mod("sissy", 40);
            sc.setstep("candy", 3);
            char.addtime(60);
            cl.horny(100);
            char.room(53);
            break;
        default:
            break;
    }
};

room53.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Hmmmmm nothing here.. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Nothing here... you would think this would be overflowing with dildos.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't want to get caught... I'm not going to risk it again.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Oh nice, another key.. Hopefully this is the last time we do this cliché.",
            button: [
                { chatID: -1, text: "...", callback: "killkey" }
            ]
        },
        {
            chatID: 4,
            speaker: "candy",
            text: "Oh you're wearing clothes... how boring.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "candy",
            text: "You look so cute! I don't have anything else for you!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "candy",
            text: "Hay slut! How's the cock!",
            button: [
                { chatID: -1, text: "Oh, uhh good?", callback: "chastity7" }
            ]
        },
        {
            chatID: 7,
            speaker: "candy",
            text: "Awww, it's all locked up! I would love to suck on that! Oh well. ",
            button: [
                { chatID: -1, text: "Damn!", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "candy",
            text: "It looks good. I bet you want me to wrap my lips around that cock of yours..",
            button: [
                { chatID: 9, text: "uh yea", callback: "bj1" }
            ]
        },
        {
            chatID: 9,
            speaker: "candy",
            text: "I'm going to gobble that thing up!",
            button: [
                { chatID: -1, text: "oh yea...", callback: "bj2" }
            ]
        },
        {
            chatID: 10,
            speaker: "candy",
            text: "Ummm GLUMMmmmm SLOP SLOP SLOP mmmmm",
            button: [
                { chatID: 11, text: "I'm going to cum!", callback: "bj3" }
            ]
        },
        {
            chatID: 11,
            speaker: "candy",
            text: "Ohhh yeah!!!",
            button: [
                { chatID: 12, text: "!", callback: "bj4" }
            ]
        },
        {
            chatID: 12,
            speaker: "candy",
            text: "I love a face full of cum! It's so yummy! Doesn't it look yummy? ",
            button: [
                { chatID: 13, text: "sure", callback: "bj5" }
            ]
        },
        {
            chatID: 13,
            speaker: "candy",
            text: "aahahahahha... lick lick lick ",
            button: [
                { chatID: 14, text: "...", callback: "bj6" }
            ]
        },
        {
            chatID: 14,
            speaker: "candy",
            text: "I can't reach it all with my tongue! hmmmmm.... I know! Lick it off and spit it in my mouth! That'd be soooo hot! ",
            button: [
                { chatID: 17, text: "Oh yeah!", callback: "bj7" },
                { chatID: 15, text: "What? NO, no no gross", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "candy",
            text: "Huh? A good girl loves cum. Be a good girl and clean me up.",
            button: [
                { chatID: 17, text: "ohhh ok", callback: "bj7" },
                { chatID: 16, text: "Nope, nope, not going to do that.", callback: "bj6a" }
            ]
        },
        {
            chatID: 16,
            speaker: "candy",
            text: "Oh ok. I guess I'll just have to sleep with your cum on my face. ",
            button: [
                { chatID: -1, text: "Yep", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "candy",
            text: "You slut!",
            button: [
                { chatID: -1, text: "Yep", callback: "reset" }
            ]
        },
        {
            chatID: 18,
            speaker: "candy",
            text: "Aren't you excitable! I love it! I'll have more energy to play tomorrow!",
            button: [
                { chatID: -1, text: "Yep", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "candy",
            text: "Hay my cum drunk slut! Guess what, I got you a present!",
            button: [
                { chatID: 20, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "candy",
            text: "Oh yeah, I've been saving it all day and I know you'll love it! Do you know " + sc.n("chad") + "?",
            button: [
                { chatID: 21, text: "I know him. He's kinda a dick", callback: "" },
                { chatID: 22, text: "He's so dreamy..", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "candy",
            text: "Oh hahaha, he's just having some fun! ",
            button: [
                { chatID: 23, text: "Sure", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "candy",
            text: "I know, and such a big cock too!",
            button: [
                { chatID: 23, text: "I wish it was in me.", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "candy",
            text: "So he stopped by and I fucked him in the bathroom. He totally filled my pussy up! I had to put in a tampon to keep it in. ",
            button: [
                { chatID: 24, text: "Oh, why would you do that?", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "candy",
            text: "So you could eat it silly! You seemed to love eating cum so much last time that I just had to get you someone elses for you to " +
            "eat. And you can eat it straight from my pussy! I bet that sounds yummy!",
            button: [
                { chatID: 25, text: "Oh no, no, no, no", callback: "" },
                { chatID: 26, text: "That' awesome! I really want to eat cum from your pussy!", callback: "bc1" }
            ]
        },
        {
            chatID: 25,
            speaker: "candy",
            text: "Awwww. ok. I'll just sleep with this in me.",
            button: [
                { chatID: 25, text: "ok", callback: "bc0" },
                { chatID: 26, text: "I'm kidding! I so want to eat cum from your pussy!", callback: "bc1" },
            ]
        },
        {
            chatID: 26,
            speaker: "candy",
            text: "Just pull out my tampon and so you can suck out " + sc.n("chad") + "'s cum baby.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "candy",
            text: "Oh my god.. it's dripping",
            button: [
                { chatID: 28, text: "...", callback: "bc3" }
            ]
        },
        {
            chatID: 28,
            speaker: "candy",
            text: "Squeel!! Quick lick it up before it drips onto the floor",
            button: [
                { chatID: -1, text: "...", callback: "bc4" }
            ]
        },
        {
            chatID: 29,
            speaker: "candy",
            text: "Ohhh, so clean!",
            button: [
                { chatID: -1, text: "...", callback: "bc6" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};