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
            if (g.getDaily("candy")) {
                chat(6, 650);
            }
            else {
                var candyStep = sc.getstep("candy");
                if (candyStep === 0) {
                    chat(20, 650);
                }
                else if (candyStep === 50) {
                    chat(30, 650);
                }
                else if (candyStep === 51) {
                    chat(41, 650);
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
            if (q3.activeSearch("charlie"))
                chat(47, 650);
            else
                chat(19, 650);
            break;
        case "c4":
            nav.bg("650_toyStore/" + callback + ".jpg");
            g.mod("giveOralMale", 1);
            g.mod("loadSpit", 1);
            cl.c.cumface = true;
            cl.display();
            g.mod("arousal", 30);
            if (q3.activeSearch("charlie")) 
                chat(47, 650);
            else
                chat(19, 650);
            break;
        case "c5":
            nav.killall();
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
        case "c6":
        case "c7":
        case "c8":
        case "c9":
        case "c10":
        case "c11":
        case "c12":
        case "c13":
        case "c14":
            nav.bg("650_toyStore/" + callback + ".jpg");
            break;
        
        case "cx":
            if (q3.isItMe("charlie"))
                chat(64, 650);
            else
                chat(62, 650);
            break;
        case "cend":
            g.mod("receiveAnalMale", 1);
            g.mod("creamPied", 1);
            nav.killall();
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
        case "candy51_1":
            nav.killall();
            nav.bg("650_toyStore/candy51_1.jpg");
            zcl.displayMain(330, 700, .085, "clothes", true);
            break;
        case "candy51_2":
            nav.bg("650_toyStore/candy51_2.jpg");
            break;
        case "candy51_3":
            g.internal = { p: cl.c.pants, u: cl.c.panties };
            cl.c.pants = null;
            cl.c.panties = null;
            zcl.displayMain(330, 700, .085, "clothes", true);
            if (cl.c.chastity !== null)
                chat(34, 650);
            else
                chat(36, 650);
            break;
        case "candy51_4end":
            g.setDaily("candy");
            char.addtime(60);
            cl.c.panties = g.internal.u;
            cl.c.pants = g.internal.p;
            char.room(450);
            break;
        case "candy51_4":
            nav.killall();
            g.mod("arousal", 100);
            nav.bg("650_toyStore/candy51_4.jpg");
            break;
        case "candy51_5":
            nav.bg("650_toyStore/candy51_5.jpg");
            zcl.displayMain(330, 700, .085, "clothes", true);
            break;
        case "candy51_6":
            nav.bg("650_toyStore/candy51_6.jpg");
            break;
        case "candy51_7":
            g.setDaily("candy");
            char.addtime(60);
            cl.c.panties = g.internal.u;
            cl.c.pants = g.internal.p;
            sc.setstep("candy", 51);
            char.room(450);
            break;
        case "candy52_end":
            sc.setstep("candy", 52);
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
            text: "Hey cutie, can I help you?",
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
            text: "Hey cutie, here for some dirty porn?",
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
            text: "Hey kid, you lookin' to jam somethin' up yo ass?",
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
            text: "Hey cutie! You look so cute I want to dress you up.",
            button: [
                { chatID: -1, text: "You too!", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "Hey cutie! " + sc.n("missy") + " asked me to take you out on a shopping trip! I'm so excited to take that cute " +
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
                { chatID: -1, text: "[Swollow]", callback: "c3" },
                { chatID: -1, text: "[Have him cum on your face]", callback: "c4" }
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
        {
            chatID: 30,
            speaker: "candy",
            text: "You're back! What can I do for you? ",
            button: [
                { chatID: 31, text: "Do you want to go on another date?", callback: "" },
                { chatID: -1, text: "Buy some toys!", callback: "toys" }
            ]
        },
        {
            chatID: 31,
            speaker: "candy",
            text: "I really would! Let's go for a walk in the woods. ",
            button: [
                { chatID: 32, text: "Let's go!", callback: "candy51_1" }
            ]
        },
        {
            chatID: 32,
            speaker: "candy",
            text: "I just love the breeze on blowing on my bare ass and my pussy slit. It's so freeing. We should bare our asses " +
                "and enjoy it. ",
            button: [
                { chatID: 33, text: "Huh?", callback: "candy51_2" }
            ]
        },
        {
            chatID: 33,
            speaker: "candy",
            text: "That feels amazing. You need to bare your ass too, prude. ",
            button: [
                { chatID: 34, text: "Oh sure", callback: "candy51_3" }
            ]
        },
        {
            chatID: 34,
            speaker: "candy",
            text: "See. The wind is so freeing. Oh... I see you're locked up. I guess we'll do some more of this date " +
                "once you're free. Let's head back",
            button: [
                { chatID: 35, text: "...", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "I'm such an idiot! Fuck! Why would I wear a chastity cage on a date with a beautiful girl? UGH, I'm " +
                "so stupid. ",
            button: [
                { chatID: -1, text: "Yes, let's go back. ", callback: "candy51_4end" }
            ]
        },
        {
            chatID: 36,
            speaker: "candy",
            text: "See. The wind is so freeing, it get's me all excited. I see I'm not the only one excited. ",
            button: [
                { chatID: 37, text: "Huh? ", callback: "candy51_4" }
            ]
        },
        {
            chatID: 37,
            speaker: "candy",
            text: "Hi big fella. You look like you want to play. Do you want to play with my tight little pussy. I'm " +
                "really bouncy and soft, you'll love it. ",
            button: [
                { chatID: 38, text: "I do want to play with your pussy ", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "candy",
            text: "Well that's too bad. We're on a date, and I'm a proper girl. Even if I do work at an adult toy store. ",
            button: [
                { chatID: 39, text: "Oh, uhh, of course ", callback: "candy51_5" }
            ]
        },
        {
            chatID: 39,
            speaker: "candy",
            text: "That was fun. I love just going for a walk. You're such a nice guy to go with me. I think you'll " +
                "make a great friend. I've got to get back to work. Bye!",
            button: [
                { chatID: 40, text: "...", callback: "candy51_6" }
            ]
        },
        {
            chatID: 40,
            speaker: "thinking",
            text: "A FRIEND? This chick is nuts. Why did she take me out here and bare her pussy just to leave me with blue " +
                "balls and call me her friend. What ever. I'll fuck her next time we go out!",
            button: [
                { chatID: -1, text: "Grrrr.", callback: "candy51_7" }
            ]
        },
        {
            chatID: 41,
            speaker: "candy",
            text: "Hay. How's my new friend doing! ",
            button: [
                { chatID: 42, text: "I want to take you out one more time. On a date.", callback: "" },
                { chatID: -1, text: "Buy some toys!", callback: "toys" }
            ]
        },
        {
            chatID: 42,
            speaker: "candy",
            text: "We can hang out, but as friends. I just don't think you're right for me baby. ",
            button: [
                { chatID: 43, text: "But we had such a great time last date. ", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "candy",
            text: "You didn't try to fuck me last time we went out. ",
            button: [
                { chatID: 44, text: "You said not to. ", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "candy",
            text: "I didn't want you to be a simp. I wanted you to push me down and force your cock in me. " +
                "Why do you think I took you to a secluded spot in the woods and walked around with my bare ass pussy. So you " +
                "could rape me easier. I want an agressive man, not you.",
            button: [
                { chatID: -1, text: "Oh. ok then.", callback: "candy52_end" },
                { chatID: 45, text: "I can be aggressive, I'll rape you right here!", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "tiffany",
            text: "You're not raping anyone in the middle of my store. I think you need to go and cool off for a bit. ",
            button: [
                { chatID: 46, text: "But....", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "candy",
            text: "You're just too nice. It's ok to be a nice guy, but I'm not interested in nice guys. Sorry. ",
            button: [
                { chatID: -1, text: "Sorry", callback: "candy52_end" }
            ]
        },
        {
            chatID: 47,
            speaker: "charlie",
            text: "You're a great whore! I really need my balls drained. So what can I get you? ",
            button: [
                { chatID: -1, text: "Just here for cum baby!", callback: "c5" },
                { chatID: 48, text: "You can tell me how to get into the C.U.M. compound. ", callback: "" },
                { chatID: 50, text: "You can tell me how to get more of that cum baby. ", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "charlie",
            text: "Huh? Never heard of it. ",
            button: [
                { chatID: 49, text: "Oh. Me either. ", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "thinking",
            text: "Well that was shitty detective work. Who just asks someone what they're looking for. Idiot! ",
            button: [
                { chatID: -1, text: ".... ", callback: "c5" },
            ]
        },
        {
            chatID: 50,
            speaker: "charlie",
            text: "You want more cum? That's the kind of slut I love! Let's go to the back room. I'm going to fill that ass up! ",
            button: [
                { chatID: 51, text: ".... ", callback: "c6" },
            ]
        },
        {
            chatID: 51,
            speaker: "charlie",
            text: "Bend your ass over slut! I'm going to fill it or break it trying! I do love a hot bussy.",
            button: [
                { chatID: 52, text: "But there's someone watching", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "charlie",
            text: "Even better! We're going to give him a show he won't forget. Be sure to smile if you want some good " +
                "tips! Now hop up on that bed my little cum slut. ",
            button: [
                { chatID: 53, text: "...", callback: "c7" },
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "I hope " + sc.n("missy") + " appreciates what I have to do to free her. " + sc.n("charlie") + " is such " +
                "a creep and he smells bad. Oh well, here I go being a whore again. I'll try to convince him I would make " +
                "the perfect Milk Maiden so he'll tell me how to get in the compound. ",
            button: [
                { chatID: 54, text: "...", callback: "c8" },
            ]
        },
        {
            chatID: 54,
            speaker: "me",
            text: "You know, I just love cum so much! I wish I could just be surrounded in cum all time, ya know! I'm such " +
                "a little cum whore!",
            button: [
                { chatID: 55, text: "...", callback: "c9" },
            ]
        },
        {
            chatID: 55,
            speaker: "charlie",
            text: " Call me daddy, sugar tits. I love a slutty ass cum whore! My cock has never fucked harder! ",
            button: [
                { chatID: 56, text: "You do fuck hard dady. So hard on my tight sissy pussy.", callback: "c10" },
            ]
        },
        {
            chatID: 56,
            speaker: "charlie",
            text: "Oh yes, baby girl. I'm going to fill that ass up with cum. Turn around show them " +
                "your cum filled ass. ",
            button: [
                { chatID: 57, text: "Oh yes daddy! Give me your cum! ", callback: "c11" },
            ]
        },
        {
            chatID: 57,
            speaker: "me",
            text: "Like that daddy? Do you like the way it drips out of my bussy? I wish there was more cum. I just love it so " +
                "much! ",
            button: [
                { chatID: 58, text: "...", callback: "c12" },
            ]
        },
        {
            chatID: 58,
            speaker: "charlie",
            text: "You know, I know a place that you could get all the cum you could ever want. Great place for whores like you. ",
            button: [
                { chatID: 59, text: "Really? Where's that? I love cum so much. ", callback: "" },
            ]
        },
        {
            chatID: 59,
            speaker: "charlie",
            text: "There's a group of people in the woods. Great people. You'll love them. They'll love you. You'll get so " +
                "much cum there. Just cum everywhere. You ever heard of the C.U.M. cult? ",
            button: [
                { chatID: 60, text: "Those guys in robes. I don't know much about them. ", callback: "" },
            ]
        },
        {
            chatID: 60,
            speaker: "charlie",
            text: "Oh yeah. That's them. Like I said great guys. You want to meet them. They'll give more cum than you " +
                "know what to do with. ",
            button: [
                { chatID: 61, text: "That sounds great! How do I get there? ", callback: "" },
            ]
        },
        {
            chatID: 61,
            speaker: "charlie",
            text: "I just call them up! If you want I can get them here in a couple minutes and take you up there. ",
            button: [
                { chatID: -1, text: "I'm scared. Is there anyway I could just go up there and look around? ", callback: "cx" },
            ]
        },
        {
            chatID: 62,
            speaker: "charlie",
            text: "Oh, no. I don't even know where it is. They only way to get up there is if they take you up.  ",
            button: [
                { chatID: 63, text: "Are you sure? I really just want to see. I'm sure I could come back and drain your balls daddy. ", callback: "" },
            ]
        },
        {
            chatID: 63,
            speaker: "charlie",
            text: "You can drain my balls anytime, but I've never been there. I don't even know how to get there. ",
            button: [
                { chatID: -1, text: "ok. Well I gotta run. Bye bye daddy.", callback: "cend" },
            ]
        },
        {
            chatID: 64,
            speaker: "charlie",
            text: "Hmmm. I don't know. Maybe. It's easier if I just call them and they'll take you up. ",
            button: [
                { chatID: 65, text: "Are you sure? I really just want to see. I'm sure I could come back and drain your balls daddy. ", callback: "c13" },
            ]
        },
        {
            chatID: 65,
            speaker: "charlie",
            text: "MMMmmmmmmmm yeah. Oh fuck.... I dunno....  ",
            button: [
                { chatID: 66, text: "I just want to take a quick peek. Promise daddy. ", callback: "c14" },
            ]
        },
        {
            chatID: 66,
            speaker: "charlie",
            text: "FUCK!!! Ok. There's a door to get in. The code to the door is 1-2-3-4-5! Fuck you're good. I don't know " +
                "how to get there. I always got a ride. But if you do get there just enter the code for the door. ",
            button: [
                { chatID: -1, text: "Awww thanks! You cummy is yummy daddy. See ya! ", callback: "cendx" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
