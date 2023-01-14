//The Toy Store Main Entrance
var room650 = {};
room650.main = function () {
    var btnList = new Array();

    if (sc.tiffany().thisRoom)
        btnList.push({
            "type": "btn",
            "name": "tiffany",
            "left": 538,
            "top": 51,
            "width": 460,
            "height": 1029,
            "image": "650_toyStore/650_tiffanyGreet.png"
        });
    if (sc.candy().thisRoom) {
        btnList.push({
            "type": "btn",
            "name": "candy",
            "left": 1303,
            "top": 51,
            "width": 447,
            "height": 1029,
            "image": "650_toyStore/candy.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "charlie",
            "left": 1357,
            "top": 229,
            "width": 456,
            "height": 851,
            "image": "650_toyStore/charlie.png"
        });
        if (cl.isLewd()) {
            chat(16, 650);
        }
    }

    var navList = [651, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 650);
    });
    nav.buildnav(navList);
};

room650.btnclick = function (name) {
    switch (name) {
        case "tiffany":
            var tstep = sc.getstep("tiffany");
            if (sc.checkevent("tiffany", -8)){
                chat(8, 650);
            }
            else if (g.get("oncase") === "shopping") {
                chat(13, 650);
            }
            else if (tstep === 0) {
                nav.killbutton("tiffany");
                nav.button({
                    "type": "btn",
                    "name": "tiffany",
                    "left": 538,
                    "top": 51,
                    "width": 460,
                    "height": 1029,
                    "image": "650_toyStore/650_tiffanyGreet1.png"
                }, 650);
                chat(4, 650);
            }
            else if (tstep === 1) {
                nav.killbutton("tiffany");
                nav.button({
                    "type": "btn",
                    "name": "tiffany",
                    "left": 538,
                    "top": 51,
                    "width": 460,
                    "height": 1029,
                    "image": "650_toyStore/650_tiffanyGreet1.png"
                }, 650);
                chat(0, 650);
            }
            else if (tstep === 3 || tstep === 4) {
                chat(2, 650);  
            }
            else if (tstep < 10) {
                chat(4, 650);
            }
            else if (tstep === 11) {
                chat(12, 650);
            }
            break;
        case "candy":
            if (!g.get("candyDayEvent")) {
                chat(6, 650);
            }
            else {
                var candyStep = sc.getstep("candy");
                if (candyStep > 0 && candyStep < 100) {
                    sc.setstep("candy", 200);
                    candyStep = 200;
                }
                if (candyStep === 0) {
                    chat(20, 650);
                }
                else
                    chat(6, 650);
            }
            break;
        case "charlie":
            chat(7, 650);
            break;
        default:
            break;
    }
};

room650.chatcatch = function (callback) {
    switch (callback) {
        case "follow":
            g.pass = "651_follow";
            char.room(651);
            break;
        case "return":
            g.pass = "return";
            char.room(661);
            break;
        case "toys":
            g.pass = "fuckMyDirtyAssholeHard";
            char.room(401);
            break;
        case "tifGift":
            nav.killbutton("tiffany");
            nav.button({
                "type": "img",
                "name": "tiffany",
                "left": 316,
                "top": 51,
                "width": 682,
                "height": 1029,
                "image": "650_toyStore/tiff_gift.png"
            }, 650);
            break;
        case "tifTitty":
            nav.killbutton("tiffany");
            nav.button({
                "type": "img",
                "name": "tiffany",
                "left": 538,
                "top": 51,
                "width": 460,
                "height": 1029,
                "image": "650_toyStore/650_tiffanyTiffy.png"
            }, 650);
            break;
        case "tifLeave":
            sc.revokeStep("tiffany", -8);
            nav.killbutton("tiffany");
            inv.add("tifgift");
            break;
        case "h_29":
            sc.setstep("tiffany", -9);
            char.room(400);

            break;
        case "c1":
            nav.killall();
            nav.bg("650_toyStore/c1.jpg");
            break;
        case "c2":
            nav.bg("650_toyStore/" + callback + ".jpg");
            break;
        case "c3":
            nav.bg("650_toyStore/" + callback + ".jpg");
            g.mod("giveOralMale", 1);
            g.mod("loadSwollowed", 1);
            g.mod("arousal", 30);
            break;
        case "c4":
            nav.bg("650_toyStore/" + callback + ".jpg");
            g.mod("giveOralMale", 1);
            g.mod("loadSpit", 1);
            cl.c.cumface = true;
            cl.display();
            g.mod("arousal", 30);
            break;
        case "c5":
            nav.bg("650_toyStore/650_front.jpg");
            nav.button({
                "type": "btn",
                "name": "charlie",
                "left": 1357,
                "top": 229,
                "width": 456,
                "height": 851,
                "image": "650_toyStore/charlie.png"
            }, 650);
            nav.buildnav([651, 0]);
            break;
        case "candy50":
            if (g.get("money") < 50)
                chat(23, 650);
            else {
                chat(24, 650);
            }
            break;
        case "candy50_1":
            nav.killall();
            nav.bg("650_toyStore/candy50_1.jpg");
            break;
        case "candy50_2":
            nav.bg("650_toyStore/candy50_2.jpg");
            break;
        case "candy50_3":
            nav.bg("650_toyStore/candy50_3.jpg");
            break;
        case "candy50_4":
            nav.bg("650_toyStore/candy50_4.jpg");
            break;
        case "candy50_5":
            nav.bg("650_toyStore/candy50_5.jpg");
            break;
        case "candy50_6":
            sc.setstep("candy", 50);
            char.addtime(120);
            char.room(0);
            break;
        default:
            break;
    }
};

room650.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "Hay cutie, can I help you?",
            button: [
                { chatID: -1, text: "No, just looking around", callback: "" },
                { chatID: 1, text: "Yes, I'm " + sc.n("me") + " with " + sc.n("missy") + "'s Detective. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "Oh good. This crazy cum animal has been filling my wack-off booths with just soooo much cum. " +
                "Like, don't get me wrong, I understand a bit of cum is going to happen, but there's just soooooooo " +
                "much! Who does that, cums a whole bunch of times without paying and just leaves. ",
            button: [
                { chatID: 5, text: "Why don't you get a camera to watch the booths?", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "Welcome back. Are you ready to work?",
            button: [
                { chatID: -1, text: "Yes [Take you place]", callback: "return" },
                { chatID: -1, text: "No", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "This has not been built yet.. sorry",
            button: []
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "Hay cutie, here for some dirty porn?",
            button: [
                { chatID: -1, text: "uhhhhhhhh", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "We totally did silly! It's totally too much money for " + sc.n("candy") + " and me! They totally wanted " +
                "$10,000 to set up the place! Besides, " + sc.n("missy") + " totally owes me a favor. " +
                "Follow me, I'll show you what he's been up to.",
            button: [
                { chatID: -1, text: "Follow " + sc.n("tiffany"), callback: "follow" },
            ]
        },
        {
            chatID: 6,
            speaker: "candy",
            text: "You're a real cutie! What can I do for you?",
            button: [
                { chatID: -1, text: "Buy some toys!", callback: "toys" },
                { chatID: -1, text: "Nothing", callb ack: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "charlie",
            text: "Hay kid, you lookin' to jam somethin' up yo ass?",
            button: [
                { chatID: -1, text: "Yes, what toys do yo have", callback: "toys" },
                { chatID: 15, text: "Where are the girls?", callback: "" },
                { chatID: -1, text: "No...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "I'm so sorry " + sc.n("me") + ", I feel so bad for yelling at you like I did, then telling " +
                sc.n("missy") + ". I was so mad at that crazy cum animal then I took it out on you. I feel so bad I got you in trouble with " +
                sc.n("missy") + " that I'll give you this package for free. I hope you forgive me.",
            button: [
                { chatID: 9, text: "Oh thanks.. what is it?", callback: "tifGift" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "I promised " + sc.n("missy") + " I wouldn't tell you, she said you can open it when you get home. Oh " +
                "and I didn't mind that you were peaking on me, I find it really sexy, I love being watched. Want to see something?",
            button: [
                { chatID: 10, text: "Sure", callback: "tifTitty" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "Hopefully that starts to make it up to you! And anytime you want to peek on me, feel free, you can even " +
                "touch yourself if you want.",
            button: [
                { chatID: 11, text: "Oh yes", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "Ok, I have to get back to work, those perverts in the nudie booth aren't going to jack off to an empty room!",
            button: [
                { chatID: -1, text: "Ok, later", callback: "tifLeave" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "Hay cutie! You look so cute I want to dress you up.",
            button: [
                { chatID: -1, text: "You too!", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "Hay cutie! " + sc.n("missy") + " asked me to take you out on a shopping trip! I'm so excited to take that cute " +
                "little butt of yours out in public!",
            button: [
                { chatID: 14, text: "Shopping trip?", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "Yeah you cute little slut! Let's go shopping! Follow me!",
            button: [
                { chatID: -1, text: "[Follow " + sc.n("tiffany") + "]", callback: "h_29" }
            ]
        },
        {
            chatID: 15,
            speaker: "charlie",
            text: "Oh, the whores? They work during the week during the day. Even whores needs a break. ",
            button: [
                { chatID: -1, text: "oh, odd. ok", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "charlie",
            text: "Why hello whore. I was just thinking I needed to get laid. So what do you say, wanna suck it?",
            button: [
                { chatID: 17, text: "I sure do! ", callback: "c1" },
                { chatID: -1, text: "Not today " + sc.n("charlie") , callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "charlie",
            text: "He ain't long, but but he is thick. Ready to take it down whore?",
            button: [
                { chatID: 18, text: "Ummmm Hmmmm", callback: "c2" }
            ]
        },
        {
            chatID: 18,
            speaker: "charlie",
            text: "You're so tight I'm gunna blow! ",
            button: [
                { chatID: 19, text: "[Swollow]", callback: "c3" },
                { chatID: 19, text: "[Have him cum on your face]", callback: "c4" }
            ]
        },
        {
            chatID: 19,
            speaker: "charlie",
            text: "You're a great whore! I really need my balls drained. So what can I get you? ",
            button: [
                { chatID: -1, text: "...", callback: "c5" }
            ]
        },
        {
            chatID: 20,
            speaker: "candy",
            text: "You're a real cutie! What can I do for you?",
            button: [
                { chatID: 21, text: "Do you really think I'm cute? I think you're really hot!", callback: "" },
                { chatID: -1, text: "Buy some toys!", callback: "toys" }
            ]
        },
        {
            chatID: 21,
            speaker: "candy",
            text: "Do you really think I'm hot? ",
            button: [
                { chatID: 22, text: "Yes I do! I would love to take you out sometime. ", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "candy",
            text: "Oh.. Sure. I would love that! I'm hungry now if you want to grab a bite at the Naked Beaver Diner?",
            button: [
                { chatID: -1, text: "Yes I do! Lets go!", callback: "candy50" },
                { chatID: -1, text: "I'm busy right now. Maybe later", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "me",
            text: "Oh.. Looks like I'm short of cash. Maybe well get together later. ",
            button: [
                { chatID: -1, text: "Sorry", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "candy",
            text: "Sweet! I'm like, so happy right now! Let's go.",
            button: [
                { chatID: 25, text: "Sweet", callback: "candy50_1" }
            ]
        },
        {
            chatID: 25,
            speaker: "candy",
            text: "This is totally my favorite place! They make the best burgers here! ",
            button: [
                { chatID: 26, text: "They totally do! So do you own the Toys 'n Us store?", callback: "candy50_2" }
            ]
        },
        {
            chatID: 26,
            speaker: "candy",
            text: "Yeah. Me and " + sc.n("tiffany") + " bought the store a year ago. We were working at Popular Girl " +
                "and hated our shifts, so we said 'fuck it, lets buy our own store.' So we talked to " + sc.n("charlie") +
                " and he agreed to sell it to us, and even agreed to work nights a weekends. He says he hates doing the " +
                "books and there's more pussy during the nights and weekends. So we got it for cheap. So awesome!",
            button: [
                { chatID: 27, text: "Don't let your dreams be dreams. So do you go on a lot of dates?", callback: "candy50_3" }
            ]
        },
        {
            chatID: 27,
            speaker: "candy",
            text: "I've been on dates. The thing I hate the most of owning the Toys 'n Us store is that all guys just " +
                "assume I'm some kind of slut, ya know. If I ask them to take me out on a date, they just take their cock " +
                "out and tell me to suck it. I'm like, hello, we just met and I'm working the store. ",
            button: [
                { chatID: 28, text: "Guys are such animals!", callback: "candy50_4" }
            ]
        },
        {
            chatID: 28,
            speaker: "candy",
            text: "Haha. Like at first I loved it. It was so easy to get cock, but after the 100th cock it gets so old. I " +
                "want to get to know the person behind the cock. I guess I might just be getting, like, more mature. So tell " +
                "me about you, the person behind your cock. ",
            button: [
                { chatID: 29, text: "Tell your story....", callback: "candy50_5" }
            ]
        },
        {
            chatID: 29,
            speaker: "candy",
            text: "Awww that's so cute! You really are a great guy. Well I got to get back and help " + sc.n("tiffany") + " out. " +
                "We should do this again. I really like dates. ",
            button: [
                { chatID: -1, text: "I really liked it too. Thanks. ", callback: "candy50_6" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
