//Room name
var room54 = {};
room54.main = function () {
    if (sc.getTimeline("tiffany").thisRoom) {
        if (g.hourBetween(7, 22)) {
            if (sc.taskGetStep("tiffany", "friend") === 6) {
                nav.button({
                    "type": "btn",
                    "name": "couple",
                    "left": 165,
                    "top": 94,
                    "width": 1755,
                    "height": 986,
                    "image": "54_tif/e6_0.png"
                }, 54);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "couple",
                    "left": 597,
                    "top": 20,
                    "width": 1057,
                    "height": 1060,
                    "image": "54_tif/couple.png"
                }, 54);
            }
        }
        else
            nav.bg("54_tif/tifNight_sleep.jpg")
    }
    var navList = [51, 55];
    nav.buildnav(navList);
};

room54.btnclick = function (name) {
    switch (name) {
        case "couple":
            if (!daily.get("tif")) {
                daily.set("tif");
                if (sc.getMissionTask("tiffany", "friend", 4).notStarted)
                    chat(1, 54);
                else if (sc.getMissionTask("tiffany", "friend", 5).notStarted)
                    chat(12, 54);
                else {
                    nav.killbutton("couple");
                    nav.button({
                        "type": "btn",
                        "name": "couple",
                        "left": 597,
                        "top": 20,
                        "width": 1057,
                        "height": 1060,
                        "image": "54_tif/e6_1.png"
                    }, 54);
                    chat(27, 54);
                }
            }
            else {
                chat(0, 54);
            }
            //chat(33, 54);
            //if (cl.hasoutfit("nude") === null) {
            //    var tifstep = sc.getstep("tiffany");
            //    if (daily.get("tif")) {
            //        chat(0, 54);
            //    }
            //    else {
            //        if (tifstep === 16)
            //            chat(3, 54);
            //        else if (tifstep === 17)
            //            chat(13, 54);
            //        else if (tifstep === 18)
            //            chat(26, 54);
            //        else if (tifstep > 18)
            //            chat(32, 54);
            //        else
            //            chat(2, 54);
            //    }
            //}
            //else {
            //    chat(1, 54);
            //}
            break;
        case "e4":
            if (g.internal === 4) {
                nav.killall();
                nav.bg("54_tif/e4_4.jpg");
                chat(5, 54);
                
            }
            else {
                var chastity = cl.c.chastity === null ? "" : "_c";
                nav.bg("54_tif/e4_" + g.internal + chastity + ".jpg");
            }
            g.internal++;
            break;
        case "e4_5":
            if (g.internal === 6) {
                nav.bg("54_tif/e4_6.gif");
            }
            else if (g.internal === 7) {
                var chastity45 = cl.c.chastity === null ? "" : "_c";
                nav.bg("54_tif/e4_7" + chastity45 + ".jpg");
            }
            else {
                levels.anal(3, true, "f", false, "tiffany");
                nav.killall();
                nav.bg("54_tif/e4_4.jpg");
                chat(7, 54);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room54.chatcatch = function (callback) {
    switch (callback) {
        case "e5_0":
            nav.killall();
            nav.bg("54_tif/" + callback + ".jpg");
            break;
        case "e5_1":
        case "e5_2":
            nav.bg("54_tif/" + callback + ".jpg");
            break;
        case "leave":
            char.room(55);
            break;
        case "e4_0":
            nav.killall();
            var chastity = cl.c.chastity === null ? "" : "_c";
            nav.bg("54_tif/" + callback + chastity + ".jpg");
            break;
        case "e4_1":
            g.internal = 1;
            nav.next("e4")
            break;
        case "e4_5":
            nav.bg("54_tif/e4_5.gif");
            nav.next("e4_5")
            g.internal = 6;
            break;
        case "e4_end":
            char.addtime(120);
            inv.add("pinkDildo");
            sc.completeMissionTask("tiffany", "friend", 4);
            char.room(55);
            break;
        case "e5_3":
            nav.killall();
            nav.bg("57_pussyPalace/makeup.jpg");
            zcl.displayMirror();
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 0,
                "top": 0,
                "width": 1547,
                "height": 1080,
                "image": "27_mirror/tif.png"
            }, 12);
            break;
        case "e5_4":
            cl.c.makeup = "lb";
            nav.killbutton("tif");
            zcl.displayMirror();
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 0,
                "top": 0,
                "width": 1547,
                "height": 1080,
                "image": "27_mirror/tif.png"
            }, 12);
            break;
        case "red":
        case "purple":
        case "pink":
            cl.c.lipstick = callback;
            nav.killbutton("tif");
            zcl.displayMirror();
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 0,
                "top": 0,
                "width": 1547,
                "height": 1080,
                "image": "27_mirror/tif.png"
            }, 12);
            break;
        case "e5_end":
            sc.completeMissionTask("tiffany", "friend", 5);
            levels.mod("xdress", 15);
            char.addtime(97);
            char.room(57);
            break;
        case "e6_end":
            sc.startMission("candy", "cheer");
            sc.completeMissionTask("tiffany", "friend", 6);
            char.addtime(97);
            break;
        //case "a1":
        //    nav.killbutton("tif");
        //    nav.bg("54_tif/a1.jpg");
        //    break;
        //case "a2":
        //case "a3":
        //case "a4":
        //case "a5":
        //case "a6":
        //case "a7":
        //    nav.bg("54_tif/" + callback + ".jpg");
        //    break;
        //case "a8":
        //    char.addtime(60);
        //    daily.set("tif");
        //    sc.setstep("tiffany", 17);
        //    gv.mod("arousal", 75);
        //    nav.bg("54_tif/tif.jpg", "54_tif/tifNight.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "tif",
        //        "left": 711,
        //        "top": 0,
        //        "width": 638,
        //        "height": 1080,
        //        "image": "54_tif/tif2.png"
        //    }, 54);
        //    break;
        //case "b1":
        //    nav.killbutton("tif");
        //    nav.bg("54_tif/b1.jpg");
        //    zcl.displayMain(0, 400, .30, "", false);
        //    break;
        //case "b2":
        //    nav.killall();
        //    nav.bg("54_tif/b2.jpg");
        //    break;
        //case "b3":
        //    nav.bg("54_tif/b3.jpg");
        //    break;
        //case "b4":
        //    gv.mod("arousal", 100);
        //    nav.bg("54_tif/b4.jpg");
        //    break;
        //case "b5":
        //    nav.bg("54_tif/b5.jpg");
        //    break;
        //case "b6":
        //    nav.bg("54_tif/b6.jpg");
        //    break;
        //case "b7":
        //    nav.bg("54_tif/b7.gif");
        //    g.roomTimeout = setTimeout(function () { chat(22, 54) }, 3000);
        //    break;
        //case "b8":
        //    nav.bg("54_tif/b8.gif");
        //    g.roomTimeout = setTimeout(function () { chat(23, 54) }, 4000);
        //    break;
        //case "b9":
        //    nav.bg("54_tif/b9.jpg");
        //    break;
        //case "b10":
        //    nav.bg("54_tif/b10.jpg");
        //    break;
        //case "b11":
        //    gv.mod("receiveAnalFemale", 1);
        //    cl.c.butthole += .2;
        //    char.addtime(60);
        //    sc.setstep("tiffany", 18);
        //    daily.set("tif");
        //    sc.setstep("me", -8);
        //    inv.add("pinkDildo");
        //    char.room(54);
        //    break;
        //case "p1":
        //    nav.kill();
        //    nav.bg("51_livingRoom/livingroom.jpg");
        //    nav.button({
        //        "type": "img",
        //        "name": "tif",
        //        "left": 711,
        //        "top": 0,
        //        "width": 638,
        //        "height": 1080,
        //        "image": "54_tif/tif2.png"
        //    }, 54);
        //    break;
        //case "p2":
        //    nav.bg("57_pussyPalace/bg.jpg");
        //    break;
        //case "p3":
        //    nav.killbutton("tif");
        //    nav.button({
        //        "type": "img",
        //        "name": "tif",
        //        "left": 711,
        //        "top": 28,
        //        "width": 690,
        //        "height": 1052,
        //        "image": "54_tif/tif3.png"
        //    }, 54);
        //    break;
        //case "p4":
        //    nav.killbutton("tif");
        //    nav.bg("57_pussyPalace/p4.jpg");
        //    g.sissy[26].ach = true;
        //    g.roomMapAccess(407, true, false);
        //    break;
        //case "p5":
        //    g.pass = -1;
        //    char.room(27);
        //    break;
        //case "iMakeup":
        //    g.sissy[26].ach = true;
        //    g.roomMapAccess(407, true, false);
        //    g.pass = -2;
        //    char.room(27);
        //    break;
        default:
            console.log("invalid callback: " + callback);
            break;
    }
};

room54.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "I've got to finish her off. Come back later? ",
            button: [
                { chatID: -1, text: "Oh yeah. Sure", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "candy",
            text: "Oh hey, a new toy! What do you say, should we play with her? ",
            button: [
                { chatID: 2, text: "Please! ", callback: "" },
                { chatID: -1, text: "I would love to, but I need to take care of stuff.", callback: "leave" },
            ]
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "Oooooo fun! Let's teach her how to masturbate like a girl. This " +
                "dildo should fill her pussy just right. ",
            button: [
                { chatID: 3, text: "*happy noises*", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "candy",
            text: "Now I've seen boys masturbate. They just squeeze and jack their cock " +
                "like it's been bad. Girls need to have a little finesse. Let's show her how. " +
                "strip down and get on the bed little girl.",
            button: [
                { chatID: 4, text: "[Strip and get on the bed]", callback: "e4_0" },
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "You look so enchanting laying like that. You're going to be our " +
                "new favorite toy. Now a girl's best friend is lube. Until you can " +
                "make your own lube, we'll just have to apply some. Now just relax " +
                "while I make your pussy nice a wet. ",
            button: [
                { chatID: -1, text: "...", callback: "e4_1" },
            ]
        },
        {
            chatID: 5,
            speaker: "candy",
            text: "You really did lube that pussy up. Sometime I wish I had a penis so " +
                "I could test her out.",
            button: [
                { chatID: 6, text: "Mmmmm", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "She really has a hungry pussy. It kept sucking my finger in, hehehe. " +
                "Move your pussy up. I want to really fuck you with my pink dildo. ",
            button: [
                { chatID: -1, text: "Yes! [Put your ass in the air]", callback: "e4_5" },
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "That was so much fun! You know what? You can keep my pink little " +
                "dildo. You need it more than I do! ",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "candy",
            text: "That's so nice of you. We've really loved using it. It's been in me " +
                "more than any other dildo we have. It really is the perfect size for " +
                "hitting that special spot!",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "You know we should really show her the Pussy Palace. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "candy",
            text: "*yawn* another day. I'm pretty sleepy, but we'll do her right! ",
            button: [
                { chatID: -1, text: "ok. Good night. ", callback: "e4_end" },
            ]
        },
        {
            chatID: 11,
            speaker: "candy",
            text: "not used",
            button: [
                { chatID: -1, text: "ok. Good night. ", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "candy",
            text: "Our toy wants to play some more. Should we make our toy look pretty? ",
            button: [
                { chatID: 13, text: "?", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "I like that. Let's show her the Pussy Palace and make her a pretty " +
                "little girl! Follow us.",
            button: [
                { chatID: 14, text: "Yes!", callback: "e5_0" },
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "This door leads to what we call the Pussy Palace. Being a porn store " +
                "owner does NOT make you rich, so we converted this room into a little " +
                "cam room where we can make some extra money. ",
            button: [
                { chatID: 15, text: "...", callback: "e5_1" },
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "We aren't scheduled for a show right now, but if you catch us when " +
                "we're doing a show feel free to join in. If you want to set up your own " +
                "account on the streaming site and use the room, feel free. ",
            button: [
                { chatID: 16, text: "Sweet!", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "candy",
            text: "Ooooo show her the makeup counter. It's my favorite part! Make her " +
                "into a pretty girl! ",
            button: [
                { chatID: 17, text: "*Squeel*", callback: "e5_2" },
            ]
        },
        {
            chatID: 17,
            speaker: "tiffany",
            text: "Come here, I'll teach you how to make yourself a pretty girl. ",
            button: [
                { chatID: 18, text: "*Squeel*", callback: "e5_3" },
            ]
        },
        {
            chatID: 18,
            speaker: "tiffany",
            text: "So I'm going to teach you how to put on makeup! Since this is your " +
                "first time I'm going to teach you how to put on light makeup. Ready?",
            button: [
                { chatID: 19, text: "Yeah", callback: "e5_4" },
            ]
        },
        {
            chatID: 19,
            speaker: "candy",
            text: "Aren't you a pretty girl! ",
            button: [
                { chatID: 20, text: "I really am", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "tiffany",
            text: "Next is your lipstick. I'm going to make your lips so so so pretty. " +
                "All the girls will be jealous of your pretty mouth. What color do you " +
                "want?",
            button: [
                { chatID: 21, text: "Red", callback: "red" },
                { chatID: 21, text: "Purple", callback: "purple" },
                { chatID: 21, text: "Pink", callback: "pink" },
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "That's such a pretty color on you. All the girls want your pretty lips!",
            button: [
                { chatID: 22, text: "I am a pretty girl!", callback: "red" },
            ]
        },
        {
            chatID: 22,
            speaker: "candy",
            text: "We're going to leave the Pussy Palace unlocked so you can use it " +
                "anytime you want. We do leave the camera on, so everyone can " +
                "see you. Right now there's almost a dozen horny men watching you " +
                "put on your makeup. Say hi to everyone stroking to you right now! ",
            button: [
                { chatID: 23, text: "What? Am I on camera?", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "candy",
            text: "Don't be such a prude! Candy and I use it to make some extra money, " +
                "and thousands of perverted men jack off to us. They absolutely love " +
                "watching us fuck each other. ",
            button: [
                { chatID: 24, text: "...", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "candy",
            text: "Oh hey! If you need some extra money you can make your own stream. " +
                "Any money you earn you get to keep! If you ever want to join our " +
                "stream when we do our show. Our fans would love to watch you fuck us!",
            button: [
                { chatID: 25, text: "Sweet!", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "Have fun. in here,and clean up after you're done. I'm going to go " +
                "fuck " + sc.n("candy") + " now. ",
            button: [
                { chatID: 26, text: "...", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "candy",
            text: "Oh please! ",
            button: [
                { chatID: -1, text: "Bye", callback: "e5_end" },
            ]
        },
        {
            chatID: 27,
            speaker: "tiffany",
            text: "You caught us! I love it when " + sc.n("candy") + " puts on her " +
                "cheerleader outfit and cheers for me! ",
            button: [
                { chatID: 28, text: "oh yeah", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "candy",
            text: "Hahaha. That's how I totally picked her up. I was a cheerleader in " +
                "highschool and I would catch her staring at me all game. It took her " +
                "a month to finally introduce herself. ",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "tiffany",
            text: "I was so in love with her! I would totally sit on the front row so " +
                "I could catch a peek at her spankies. So hot! Any girl in a cheerleader " +
                "outfit is 10 times hotter! ",
            button: [
                { chatID: 30, text: "...", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "candy",
            text: "Hahaha. I get so many dumb guys trying to hit on me in my uniform " +
                "when I have the love of my life right here. You know you would look cute " +
                "as a cheerleader! You ever cheer before? ",
            button: [
                { chatID: 31, text: "I haven't", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "candy",
            text: "You should give it a try. We meet at the football staduim Saturday morning. " +
                "Bring a gym outfit. It will be totally awesome if you make the team! We've been " +
                "looking for a new girl! ",
            button: [
                { chatID: 32, text: "*squeel* Really? Me a cheerleader?", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "candy",
            text: "Haha, yeah. Plus you'll get so flexable as a cheerleader! It'll be fun " +
                "having you there. ",
            button: [
                { chatID: -1, text: "Sweet! I'll see you Saturday Morning! ", callback: "e6_end" },
            ]
        },






        {
            chatID: 0,
            speaker: "tiffany",
            text: "I just want to fuck my pussy with this dildo, can you come back later?",
            button: [
                { chatID: -1, text: "oh, of course", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "Are those clothes? Sluts don't wear clothes.",
            button: [
                { chatID: -1, text: "Oh, how about a modest slut?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "tiffany",
            text: "That's all I have.",
            button: [
                { chatID: -1, text: "Drat!", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "Have girl! I just finished masturbating. Sometimes a girl just needs to get off really quick. Have you ever masturbated " +
            "like a girl?",
            button: [
                { chatID: 4, text: "I've masturbated", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "No silly, not like a boy, like a girl. The trick is to rub it with fitness, not jerk it like a jock! Here I'll show you. ",
            button: [
                { chatID: 5, text: "Oh yeah!", callback: "a1" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "You start at the top...",
            button: [
                { chatID: 6, text: "...", callback: "a2" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "Slowly build up...",
            button: [
                { chatID: 7, text: "...", callback: "a3" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "Find your rhythm",
            button: [
                { chatID: 8, text: "...", callback: "a4" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "Really rub it",
            button: [
                { chatID: 9, text: "...", callback: "a5" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Oh god I'm cumming",
            button: [
                { chatID: 10, text: "...", callback: "a6" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "AAaaaaAAAAaaaaaaaaaaaaaa oooOOOoooooooooooo",
            button: [
                { chatID: 11, text: "...", callback: "a7" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "And that's how you masturbate like a girl! Hehe",
            button: [
                { chatID: 12, text: "Soooo uhh Do you want to masturbate me?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "Hehe. My wrist is sore, how about your come back later and I'll give you a hands on demonstration on how to " +
            "masturbate like a girl! Kisses",
            button: [
                { chatID: -1, text: "You bet!", callback: "a8" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "Oh how sweet, you came back. I bet you want me to masturbate you. ",
            button: [
                { chatID: 14, text: "Oh yeah", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "Ok baby get on the bed. ",
            button: [
                { chatID: 15, text: "Oh yeah", callback: "b1" }
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "Oh hahahah, not sit on the bed like a boy. I'm going to teach you how to masturbate like a girl.. hahaha  ",
            button: [
                { chatID: 16, text: "ok, how do I sit?", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "tiffany",
            text: "So lay on the bed and put your legs over your head..... Here let me help....",
            button: [
                { chatID: 17, text: "Oh.. what...?", callback: "b2" }
            ]
        },
        {
            chatID: 17,
            speaker: "tiffany",
            text: "Yes, like this. You need to put that pussy on display for me. Let me have free access to it. ",
            button: [
                { chatID: 18, text: "...", callback: "b3" }
            ]
        },
        {
            chatID: 18,
            speaker: "tiffany",
            text: "So first I'm going to tease your pussy... ",
            button: [
                { chatID: 19, text: "...", callback: "b4" }
            ]
        },
        {
            chatID: 19,
            speaker: "tiffany",
            text: "Next I'll put some lube on your pussy, get it nice and slick. Everyone loves a wet pussy. ",
            button: [
                { chatID: 20, text: "...", callback: "b5" }
            ]
        },
        {
            chatID: 20,
            speaker: "tiffany",
            text: "Get the inside of your pussy nice and wet",
            button: [
                { chatID: 21, text: "...", callback: "b6" }
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "Now your pussy is nice and wet I'm going to show you how to masturbate like a girl.",
            button: [
                { chatID: -1, text: "OooooOOOoooo", callback: "b7" }
            ]
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "Are you ready to get your pussy filled little girl?",
            button: [
                { chatID: -1, text: "please....", callback: "b8" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "How does that feel? Are you starting to feel like a girl?",
            button: [
                { chatID: 24, text: "OOOoooooo", callback: "b9" }
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "Don't worry honey, if you keep using your pussy you'll learn how to cum like a girl. It just takes practice. ",
            button: [
                { chatID: 25, text: "aaawww", callback: "b10" }
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "Here. Take my dildo. You can use it to play with your pussy anytime! Also you should come down to Toy 'n us and get " +
            "some toys!",
            button: [
                { chatID: -1, text: "Sweet! thank you so much!", callback: "b11" }
            ]
        },
        {
            chatID: 26,
            speaker: "tiffany",
            text: "Oh my you must really love me, or you just want me to play with you some more.",
            button: [
                { chatID: 27, text: "Oh.. I love you, but I also want to play some more.", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "tiffany",
            text: "Hahaha, lets keep playing my favorite game: Make you into a pretty little girl. Follow me.",
            button: [
                { chatID: 28, text: "Oh, ok", callback: "p1" }
            ]
        },
        {
            chatID: 28,
            speaker: "tiffany",
            text: sc.n("candy") + " and I have our cam room and makeup room behind this door. We keep it locked because some " +
                "pervert broke into our house and masturbated all over our bed. It would have been hot if he wasn't so homeless looking. " +
            "The old gross pervert still grosses me out. Lets go in.",
            button: [
                { chatID: 29, text: "...", callback: "p2" }
            ]
        },
        {
            chatID: 29,
            speaker: "tiffany",
            text: "This is the Pussy Palace. In the middle is where we put on our cam shows and on the right is where we keep all our " +
            "makeup. You're free to use any of it to make yourself pretty. Have you ever put on your own makeup?",
            button: [
                { chatID: 30, text: "On, no, I haven't", callback: "p3" }
            ]
        },
        {
            chatID: 30,
            speaker: "tiffany",
            text: "WHAT!! How have you never put on your own makeup! Take a seat honey, we're going to teach you how to make yourself " +
            "into a pretty girl!",
            button: [
                { chatID: 31, text: "Well...", callback: "p4" }
            ]
        },
        {
            chatID: 31,
            speaker: "tiffany",
            text: "Come here, I'll teach you how to make yourself a pretty girl. ",
            button: [
                { chatID: -1, text: "....", callback: "p5" }
            ]
        },
        {
            chatID: 32,
            speaker: "tiffany",
            text: "Did you want me to show you how to improve your makeup?",
            button: [
                { chatID: -1, text: "Yes I do", callback: "iMakeup" },
                { chatID: -1, text: "Some other time", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "tiffany",
            text: "Not updated yet. Future release",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
