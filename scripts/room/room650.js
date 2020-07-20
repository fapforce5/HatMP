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
            if (tstep === 0) {
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
            else if (tstep < 10) {
                chat(2, 650);
            }
            else if (tstep === 10) {
                chat(8, 650);
            }
            else if (tstep === 11) {
                chat(12, 650);
            }
            break;
        case "candy":
            chat(6, 650);
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
            sc.setstep("tiffany", 11);
            nav.killbutton("tiffany");
            inv.add("tifgift");
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
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "charlie",
            text: "Hay kid, you lookin' to jam somethin up yo ass?",
            button: [
                { chatID: -1, text: "Yes, what toys do yo have", callback: "toys" },
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};