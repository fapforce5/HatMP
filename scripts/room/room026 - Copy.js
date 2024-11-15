//Living Room
var room26 = {};
room26.main = function () {

    if (g.prevRoom === 8 && g.pass === 26) {
        nav.button({
            "type": "btn",
            "name": "landlord",
            "left": 977,
            "top": 69,
            "width": 634,
            "height": 942,
            "image": "26_livingRoom/ll.png"
        }, 26);
        if (cl.c.panties === "c" && cl.c.shirt === null && cl.c.pants === null && cl.c.socks === null && cl.c.shoes === null && cl.c.dress === null) {
            zcl.displayMain(-250, 200, .25, "panties", true);
            chat(52, 26);
        }
        else
            chat(51, 26);
    }
    else {
        var btnList = new Array();
        if (sc.getTimeline("landlord").thisRoom) {
            if (sc.getTimeline("lola").thisRoom) {
                nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg"); 
                btnList.push({
                    "type": "btn",
                    "name": "all3",
                    "left": 416,
                    "top": 63,
                    "width": 1295,
                    "height": 1017,
                    "image": "26_livingRoom/all3.png"
                });
            }
            else {
                nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg"); 
                btnList.push({
                    "type": "btn",
                    "name": "landlord",
                    "left": 977,
                    "top": 69,
                    "width": 634,
                    "height": 942,
                    "image": "26_livingRoom/ll.png"
                });
                if (sc.getstep("bigguy") === 6) {
                    btnList.push({
                        "type": "btn",
                        "name": "bigguy",
                        "left": 430,
                        "top": 80,
                        "width": 303,
                        "height": 303,
                        "image": "26_livingRoom/bigguy.png"
                    });
                }
            }
        }

        var navList = [16];
        $.each(btnList, function (i, v) {
            nav.button(v, 26);
        });
        nav.buildnav(navList);
    }
};

room26.btnclick = function (name) {
    switch (name) {
        case "landlord":
            var ll = sc.getLevel("landlord");
            sc.select("chat_landlord", "26_livingRoom/chat_landlord.png", 0);
            sc.selectCancel("chat_cancel", 1);
            //if (ll < 6) {
            //    room25.btnclick("mom");
            //}
            //else {
            //    if (daily.get("landlord"))
            //        chat(2, 26);
            //    else {
            //        if (cl.hasClothing("panties", "c") && !sc.getEvent("landlord", -2))
            //            chat(48, 26);
            //        else if (ll === 5)
            //            chat(9, 26);
            //        else if (ll === 6)
            //            chat(11, 26);
            //        else if (ll === 7)
            //            chat(30, 26);
            //        else if (ll > 7 && ll < 200)
            //            chat(43, 26);
            //        else if (ll === 200) {
            //            var thisDay200 = g.dt.getDay();
            //            if (thisDay200 === 0 || thisDay200 === 6) {
            //                if (cl.c.dress === "pd")
            //                    chat(65, 26);
            //                else
            //                    chat(63, 26);
            //            }
            //            else
            //                chat(61, 26);

            //        }
            //        else if (ll === 201) {
            //            chat(83, 26);
            //        }
            //        else
            //            chat(2, 26);
            //    }
            //}
            break;
        case "chat_cancel":
            nav.killbutton("chat_cancel");
            nav.killbutton("chat_landlord");
            break;
        case "chat_landlord":
            room26.btnclick("chat_cancel");
            var jobapplyconst = gv.get("jobapplyconst");
            if (jobapplyconst < 2)
                chat(0, 26);
            else if (jobapplyconst < 100)
                chat(1, 26);

            break;

        case "butthole":
            g.pass++;
            if (g.pass === 1)
                chat(20, 26);
            if (g.pass === 2)
                chat(21, 26);
            if (g.pass === 3)
                chat(22, 26);
            if (g.pass === 4) {
                nav.killbutton("butthole");
                nav.bg("26_livingRoom/passtime6g.jpg");
                chat(23, 26);
            }
            break;
        case "panties2":
            nav.killbutton("panties2");
            nav.bg("26_livingRoom/passtime6g.jpg");
            chat(54, 26);
            break;
        case "all3":
            var evaStep = sc.getstep("eva");
            var lolaStep = sc.getstep("lola");
            var llStep = sc.getstep("landlord");
            if (llStep > 199)
                chat(93, 26);
            else if (llStep === 12) 
                chat(106, 26);
            else if (lolaStep > 9 && evaStep > 8 && llStep > 7) 
                chat(96, 26);
            else 
                chat(93, 26);
            
            break;
        case "fx":
            nav.bg("26_livingRoom/f" + g.internal + ".jpg");
            if (g.internal === 9) {
                nav.killbutton("fx");
                chat(112, 26);
            }
            g.internal++;
            break;
        case "bigguy":
            chat(113, 26);
            break;
        default:
            break;
    }
};

room26.chatcatch = function (callback) {
    switch (callback) {
        case "passtime":
            char.addtime(30);
            break;
        case "passtimeStop":
            char.addtime(30);
            daily.set("landlord");
            char.room(26);
            break;
        case "passtime2":
            sc.setstep("landlord", 2);
            char.addtime(30);
            daily.set("landlord");
            char.room(26);
            break;
        case "passtime3":
            sc.setstep("landlord", 3);
            char.addtime(30);
            daily.set("landlord");
            char.room(26);
            break;
        case "takekey":
            inv.update("landlordKey", true, null);
            break;
        case "passtime4":
            sc.setstep("landlord", 4);
            char.addtime(30);
            daily.set("landlord");
            char.room(26);
            break;
        case "passtime5":
            sc.setstep("landlord", 6);
            char.addtime(30);
            daily.set("landlord");
            char.room(26);
            break;
        case "passtime6":
            char.addtime(30);
            daily.set("landlord");
            char.room(26);
            break;
        case "passtime6a":
            nav.killall();
            nav.bg("26_livingRoom/passtime6a.jpg");
            break;
        case "passtime6b":
            nav.bg("26_livingRoom/passtime6b.jpg");
            break;
        case "passtime6c":
            nav.killbutton("landlord");
            nav.bg("26_livingRoom/passtime6c.jpg");
            cl.nude();
            break;
        case "passtime6c1":
            nav.bg("26_livingRoom/passtime6c.jpg");
            break;
        case "passtime6d":
            nav.bg("26_livingRoom/passtime6d.jpg");
            g.pass = 0;
            nav.button({
                "type": "tongue",
                "name": "butthole",
                "left": 1214,
                "top": 588,
                "width": 174,
                "height": 174,
                "image": "26_livingRoom/butthole.png"
            }, 26);
            break;
        case "passtime6e":
            nav.bg("26_livingRoom/passtime6e.jpg");
            break;
        case "passtime6f":
            nav.bg("26_livingRoom/passtime6f.jpg");
            break;
        case "passtime6g":
            nav.bg("26_livingRoom/passtime6g.jpg");
            break;
        case "passtime6h":
            nav.bg("26_livingRoom/passtime6h.jpg");
            break;
        case "passtime6i":
            gv.mod("arousal", 100);
            nav.bg("26_livingRoom/passtime6i.jpg");
            break;
        case "passtime6j":
            char.addtime(69);
            cl.undo();
            gv.mod("giveOralFemale", 1);
            sc.setstep("landlord", 7);
            daily.set("landlord");
            scc.love("landlord", 20, 100);
            char.room(16);
            break;
        case "passtime7":
            nav.bg("26_livingRoom/passtime7.jpg");
            break;
        case "passtime7a":
            nav.bg("26_livingRoom/passtime7a.jpg");
            break;
        case "passtime7b":
            nav.bg("26_livingRoom/passtime7b.jpg");
            break;
        case "passtime7c":
            nav.bg("26_livingRoom/passtime7c.jpg");
            break;
        case "passtime7d":
            char.addtime(69);
            cl.undo();
            sc.setstep("landlord", 8);
            daily.set("landlord");
            char.room(16);
            break;
        case "passtime8":
            if (sc.getstep("landlord") === 8)
                sc.setstep("landlord", 9);
            nav.killbutton("landlord");
            nav.bg("26_livingRoom/passtime8.jpg");
            break;
        case "passtime8a":
            nav.bg("26_livingRoom/passtime8a.jpg");
            break;
        case "passtime8b":
            nav.bg("26_livingRoom/day.jpg", "26_livingRoom/night.jpg")
            nav.button({
                "type": "btn",
                "name": "landlord",
                "left": 977,
                "top": 69,
                "width": 634,
                "height": 942,
                "image": "26_livingRoom/ll.png"
            }, 26);
            break;
        case "closet":
            g.pass = 26;
            char.room(8);
            break;
        case "panties1":
            cl.c.panties = null;
            nav.killbutton("landlord");
            nav.bg("26_livingRoom/panties1.jpg")
            zcl.displayMain(-1550, -900, .5, "panties", true);
            break;
        case "panties2":
            nav.killall();
            nav.bg("26_livingRoom/panties2.jpg");
            nav.button({
                "type": "tongue",
                "name": "panties2",
                "left": 807,
                "top": 307,
                "width": 361,
                "height": 625,
                "image": "26_livingRoom/panties2.png"
            }, 26);
            break;
        case "panties3":
            nav.bg("26_livingRoom/passtime6h.jpg");
            break;
        case "panties4":
            nav.bg("26_livingRoom/panties4.jpg");
            break;
        case "panties5":
            nav.bg("26_livingRoom/panties5.jpg");
            break;
        case "panties6":
            nav.bg("26_livingRoom/panties6.jpg");
            break;
        case "panties7":
            cl.c.panties = "c";
            nav.bg("26_livingRoom/passtime6a.jpg");
            zcl.displayMain(-1550, -900, .5, "panties", true);
            break;
        case "panties8":
            g.pass = 10;
            sc.setstep("landlord", -2);
            daily.set("landlord");
            char.addtime(60);
            char.room(8);
            break;
        case "ll200":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "ll200",
                "left": 800,
                "top": 0,
                "width": 700,
                "height": 1080,
                "image": "26_livingRoom/ll200.png"
            }, 26);
            
            break;
        case "ll200_1":
            nav.killall();
            nav.bg("26_livingRoom/ll200_1.jpg");
            break;
        case "ll200_2":
            sc.setstep("landlord", 201);
            char.settime(18, 12);
            char.room(450);
            break;
        case "201_1":
            char.addtime(15);
            nav.killall();
            nav.bg("14_motherRoom/14_motherRoom.jpg", "14_motherRoom/14_motherRoomNightLight.jpg");
            nav.button({
                "type": "img",
                "name": "201_1",
                "left": 650,
                "top": 72,
                "width": 946,
                "height": 1008,
                "image": "26_livingRoom/201.png"
            }, 26);
            break;
        case "201_2":
            nav.killbutton("201_1");
            nav.button({
                "type": "img",
                "name": "201_1",
                "left": 650,
                "top": 72,
                "width": 1155,
                "height": 1008,
                "image": "26_livingRoom/201_2.png"
            }, 26);
            break;
        case "201_3":
            nav.killbutton("201_1");
            nav.button({
                "type": "img",
                "name": "201_1",
                "left": 650,
                "top": 72,
                "width": 946,
                "height": 1008,
                "image": "26_livingRoom/201.png"
            }, 26);
            break;
        case "201_4":
            sc.setstep("landlord", 202);
            char.addtime(60);
            daily.set("landlord");
            char.room(16);
            break;
        case "tv":
            nav.killall();
            nav.bg("26_livingRoom/tv.jpg");
            break;
        case "tv1":
            char.settime(22, 3);
            char.room(26);
            break;
        case "sl0":
            nav.killall();
            nav.bg("26_livingRoom/sl0.jpg");
            break;
        case "sl1":
        case "sl2":
            nav.killall();
            gv.mod("arousal", 100);
            nav.bg("26_livingRoom/" + callback + ".jpg");
            break;
        case "sl3":
            if (sc.getstep("landlord") < 9)
                chat(101, 26);
            else
                chat(102, 26);
            break;
        case "sl3badEnd":
            gv.mod("arousal", -50);
            char.settime(22, 3);
            char.room(10);
            break;
        case "sl4":
            nav.bg("26_livingRoom/sl4.jpg");
            zcl.displayMain(-800, 200, .4, "", false);
            nav.button({
                "type": "img",
                "name": "sl4",
                "left": 719,
                "top": 412,
                "width": 704,
                "height": 668,
                "image": "26_livingRoom/sl4.png"
            }, 26);
            break;
        case "sl5":
            nav.killall();
            cl.doCum(false);
            gv.mod("receiveOralFemale", 1);
            nav.bg("26_livingRoom/sl5.jpg");
            break;
        case "sl6":
            char.settime(22, 3);
            char.room(10);
            break;
        case "f1":
        case "f2":
            case "f3":
            nav.bg("26_livingRoom/" + callback + ".jpg");
            break;
        case "f4":
            g.internal = 5;
            nav.bg("26_livingRoom/f4.jpg");
            nav.button({
                "type": "btn",
                "name": "fx",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 26);
            break;
        case "f10":
            cl.doCum(false);
            gv.mod("receiveOralFemale", 3);
            gv.mod("fuckPussy", 3);
            char.settime(22, 3);
            char.room(10);
            break;
        default:
            break;
    }
};


room26.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Stop staring at my tits and go get a job!",
            button: [
                { chatID: -1, text: "...", callback: "passtime" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "I'm so glad you have such a manly job! You're really growing up. A few weeks working out there and you'll get " +
                "some big sexy man muscles! Some lucky girls going to just love running her hands all over your hard veiny construction " +
                "muscles... Anyway, I'm so happy you aren't a lazy fuck up anymore. Now let me watch my shows. ",
            button: [
                { chatID: -1, text: "Thanks? ", callback: "passtime" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: sc.n("landlord") + "'s watching her shows.. run along.",
            button: [
                { chatID: -1, text: "[Run along]", callback: "passtime" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Hi sweetie. I've been so busy at the Sperm Bank. We've been going through so much sperm and " + sc.n("landlord") + "'s " +
                "tired. Run along now.",
            button: [
                { chatID: -1, text: "[Run Along]", callback: "passtime2" }
            ]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Hi honey. So the weirdest thing happened today... Someone has been stealing sperm from work! At least " +
                "50 different samples have disappeared without a trace. I mean who would steal all that sperm?! I bet it was that damned " +
                "sex cult that lives in the woods. I've heard they sit around and drink sperm in their rituals. ",
            button: [
                { chatID: 5, text: "That's weird....", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "I know! I could understand if it was a vile or two of one of our higher end samples, but they " +
                "grabbed some of the cheapest sperm we had. Some of those samples were downright vile, but " +
                "we've just been so busy we've had to lower the bar on who could donate.",
            button: [
                { chatID: 6, text: "....", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "The police are investigating it now, but just between you and me the police are completely incompetent. " +
                "It's like watching a comedy show of buffoons tripping over each other. Since we're so low, if you want to donate " +
                "some of your specimens come down, we can use some of the cheap stuff.  ",
            button: [
                { chatID: -1, text: "That's terrible. The police in this town are the worst! ", callback: "passtime3" }
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Young man I'm sure you could make some extra money. I'll tell you what, each day you make my bed I'll take " +
                "5 dollars off the rent, but only if you promise not to mess with anything in the room. ",
            button: [
                { chatID: 8, text: "I promise only to touch the bed and nothing else! [Take Key]", callback: "takekey" },
                { chatID: -1, text: "No thanks, I don't want extra chores.", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "OK, I'll take your word for it, I know you're a good boy. I'm getting back to my shows. Run along now.",
            button: [
                { chatID: -1, text: "I will " + sc.n("landlord") + "!", callback: "passtime4" }
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Hi sweetie. You should be proud of how hard you've worked so far. Maybe I'll have you help me out sometime at the " +
                "sperm store. You seem like the kind of boy that would like that.. hahahah. ",
            button: [
                { chatID: 10, text: "Oh gross", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You don't have to pretend with me honey. I know you're an odd little boy. ",
            button: [
                { chatID: -1, text: sc.n("landlord"), callback: "passtime5" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "You know staring at your " + sc.n("landlord") + "'s pussy is wrong don't you?",
            button: [
                { chatID: 12, text: sc.n("landlord") + "?", callback: "" },
                { chatID: -1, text: "Sorry " + sc.n("landlord"), callback: "passtimeStop" },
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "Don't act innocent with me. I can tell what you're staring at. I'm just trying to watch my shows and you keep coming over to stare at my " +
                "vagina. Lets get this over with, come take a closer look.",
            button: [
                { chatID: 13, text: "[Take a closer look]", callback: "passtime6a" }
            ]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "Closer...",
            button: [
                { chatID: 14, text: "...", callback: "passtime6b" }
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "Do you like my pussy? I bet you want us to take off our clothes, let you play with my pussy?",
            button: [
                { chatID: 15, text: "Yes " + sc.n("landlord") + " I want to play with your pussy!", callback: "passtime6c" },
                { chatID: -1, text: "No that's too much", callback: "passtimeStop" }
            ]
        },
        {
            chatID: 15,
            speaker: "landlord",
            text: "You do have a wonderful cock. Before I make your cock feel good you have to make me feel good. Do you want to make me feel good?",
            button: [
                { chatID: 16, text: "OH Yes!", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Before I let you eat my pussy you have to eat my ass. I love a good ass eating. Start by licking around my hole before really eating me.",
            button: [
                { chatID: 17, text: "Wait, what? Your ass?", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "landlord",
            text: "Oh yes. Good boys always do what their told, come to " + sc.n("landlord") + ".",
            button: [
                { chatID: 18, text: "Yes..", callback: "passtime6e" }
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "Look at this cute little face. It looks so hungry, now stick out your tongue.",
            button: [
                { chatID: 19, text: "Yes..", callback: "passtime6f" }
            ]
        },
        {
            chatID: 19,
            speaker: "landlord",
            text: "Oh yes good boy, nice and wet... are you ready?",
            button: [
                { chatID: -1, text: "uh huh", callback: "passtime6d" }
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "Oh yes, that's a good boy.",
            button: [
                { chatID: -1, text: "hmmmmm", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "landlord",
            text: "Oh yeah.. keep licking " + sc.n("landlord") + "'s asshole.",
            button: [
                { chatID: -1, text: "uuuhhhuh", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "Oh yeah, I need it deeper..",
            button: [
                { chatID: -1, text: "slup lick lick", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "landlord",
            text: "Oh yes, you're good for something.. Deeper!!",
            button: [
                { chatID: 29, text: "sssllluuurrrrppp", callback: "passtime6h" }
            ]
        },
        {
            chatID: 24,
            speaker: "landlord",
            text: "I'm so close!!!! Keep going!!!",
            button: [
                { chatID: 25, text: "lick probe slrup", callback: "passtime6i" }
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "AAhaahhaAHHAHAHA AAHHAHAH aHaA hH AHAHAHHA HAH A HAHahHAhAhaHA HA",
            button: [
                { chatID: 26, text: "Slurppppppp", callback: "passtime6c1" }
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Oh wow, that was good. I guess you want your reward....",
            button: [
                { chatID: 27, text: "Oh Yeah!", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "Well that's too bad. I'm busy catching up on my shows, now scamper along..",
            button: [
                { chatID: 28, text: "But....", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "landlord",
            text: "Nope, now go before I punish those fragile little balls of yours!",
            button: [
                { chatID: -1, text: "Ok...", callback: "passtime6j" }
            ]
        },
        {
            chatID: 29,
            speaker: "landlord",
            text: "Oh yes keep eating my ass!",
            button: [
                { chatID: 24, text: "MmmMMMMMMM", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "Yes?",
            button: [
                { chatID: 31, text: "I was... uh wondering.. uh", callback: "" },
                { chatID: -1, text: "Nothing", callback: "passtimeStop" },
            ]
        },
        {
            chatID: 31,
            speaker: "landlord",
            text: "You were wondering if I could play with your little wiener weren't you?",
            button: [
                { chatID: 32, text: "Umm well...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "Sigh... Let me take this off, you strip down too.",
            button: [
                { chatID: 33, text: "Grin", callback: "passtime6c" }
            ]
        },
        {
            chatID: 33,
            speaker: "landlord",
            text: "I bet you want me to put that thing in my mouth, huh. That's not going to happen... Hmmmm... Have you ever had a hand job before?",
            button: [
                { chatID: 34, text: "No", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "I'll let you eat my pussy, and if you're really good.. and I mean really good I just may give you a hand job. ",
            button: [
                { chatID: 35, text: "Oh YEA!", callback: "passtime7" }
            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "That's right honey, focus on my clit. It's where the magic happens..",
            button: [
                { chatID: 36, text: "[Bury your face in " + sc.n("landlord") + "'s pussy]", callback: "passtime7a" }
            ]
        },
        {
            chatID: 36,
            speaker: "lola",
            text: sc.n("me") + " .... " + sc.n("landlord") + " what's going on???",
            button: [
                { chatID: 37, text: "No", callback: "passtime7b" }
            ]
        },
        {
            chatID: 37,
            speaker: "landlord",
            text: "Girls... remember when I sat with you two and went over your no no parts. ",
            button: [
                { chatID: 38, text: "?", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "Well I was just going over boy and girl parts with " + sc.n("me") + " here. So he knows what the no no spots are. Now I know " +
                "you two have never seen a penis before... Take a look at " + sc.n("me") + "'s penis.",
            button: [
                { chatID: 39, text: "...", callback: "passtime7c" }
            ]
        },
        {
            chatID: 39,
            speaker: "landlord",
            text: "That's what I told you about. Penises are bad, I know you girls stay away from penises, don't you girls? ",
            button: [
                { chatID: 40, text: "...", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "eva",
            text: "Oh yes " + sc.n("landlord") + ". We don't go near those nasty things!",
            button: [
                { chatID: 41, text: "...", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "lola",
            text: "I would never touch one of those.",
            button: [
                { chatID: 42, text: "...", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "landlord",
            text: "That's good girls. Now run along all, I'm going to get back to my shows. ",
            button: [
                { chatID: -1, text: "[Run along]", callback: "passtime7d" }
            ]
        },
        {
            chatID: 43,
            speaker: "landlord",
            text: "Are you really coming back to interrupt my shows asking for a hand job again?",
            button: [
                { chatID: 44, text: "Yes I am", callback: "" },
                { chatID: -1, text: "no", callback: "passtimeStop" }
            ]
        },
        {
            chatID: 44,
            speaker: "landlord",
            text: "Sigh... Give me your penis.",
            button: [
                { chatID: 45, text: "[pull out your penis]", callback: "passtime8" }
            ]
        },
        {
            chatID: 45,
            speaker: "landlord",
            text: "Do you like it when I touch your penis?",
            button: [
                { chatID: 46, text: "Oh yes!", callback: "passtime8a" }
            ]
        },
        {
            chatID: 46,
            speaker: "landlord",
            text: "Idiot!",
            button: [
                { chatID: 47, text: "AAAAAAaaaaaaaa!!!!", callback: "passtime8b" }
            ]
        },
        {
            chatID: 47,
            speaker: "landlord",
            text: "Get that thing out of here! I'm trying to watch my shows.",
            button: [
                { chatID: -1, text: "[Whimper away]", callback: "passtimeStop" }
            ]
        },
        {
            chatID: 48,
            speaker: "landlord",
            text: "I seem to be missing my favorite pair of panties. You don't know anything about that do you?",
            button: [
                { chatID: 49, text: sc.n("eva") + " probably took them. ", callback: "" },
                { chatID: 50, text: "Oh. You caught me, I stole them.", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "landlord",
            text: "Don't lie to me girl. " + sc.n("eva") + "'s ass is way too skinny to fit into my panties. Your ass on the other hand " +
                "fits my panties perfectly. ",
            button: [
                { chatID: 50, text: "Oh, yeah, that was a stupid lie", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "landlord",
            text: "I need you to go upstairs and come back down in just my panties and nothing else. Now go!",
            button: [
                { chatID: -1, text: "Yes " + sc.n('landlord'), callback: "closet" }
            ]
        },
        {
            chatID: 51,
            speaker: "landlord",
            text: "Try again. Go up and put on just my panties then come back down. ",
            button: [
                { chatID: -1, text: "Yes " + sc.n('landlord'), callback: "closet" }
            ]
        },
        {
            chatID: 52,
            speaker: "landlord",
            text: "That's my slutty little girl. You did make one mistake though. You stole a pair of " + sc.n("landlord") + "'s " +
                " clean panties. The clean panties don't have my sweet pussy smell in them. Give me those panties so I can make them smell " +
                "yummy for you. ",
            button: [
                { chatID: 53, text: "[Give " + sc.n('landlord') + " back her panties.]", callback: "panties1" }
            ]
        },
        {
            chatID: 53,
            speaker: "landlord",
            text: "Now the first step in making a great scent for these panties is to get the pussy juices flowing. Come here and " +
                "eat my pussy little girl, make my juicy.",
            button: [
                { chatID: -1, text: "[Eat her pussy]", callback: "panties2" }
            ]
        },
        {
            chatID: 54,
            speaker: "landlord",
            text: "Don't just lick it, really get in there and eat my pussy!",
            button: [
                { chatID: 55, text: "Deeper!", callback: "panties3" }
            ]
        },
        {
            chatID: 55,
            speaker: "thinking",
            text: sc.n("landlord") + "'s pussy is so wet, I can feel her juices drip into my mouth. And the smell is so strong, I love " +
                "the smell of her pussy!",
            button: [
                { chatID: 56, text: "...", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "landlord",
            text: "Oh yeah! Good boy!",
            button: [
                { chatID: 57, text: "MMMmMMmmmmmMMMMMMMMMmmmmmmmm", callback: "panties4" }
            ]
        },
        {
            chatID: 57,
            speaker: "landlord",
            text: "See how creamy that is. That's what makes a good panty smell. Now stuff my panties in my pussy so they get a " +
                "good scent in them. Shove them in deep.",
            button: [
                { chatID: 58, text: "[Shove " + sc.n("landlord") + "'s panties in her pussy]", callback: "panties5" }
            ]
        },
        {
            chatID: 58,
            speaker: "landlord",
            text: "You lucky girl, these panties are going to smell so good. Anyone that walks by will be able to smell them and they'll " +
            "be thinking of your pussy. ",
            button: [
                { chatID: 59, text: "OOoooo", callback: "panties6" }
            ]
        },
        {
            chatID: 59,
            speaker: "thinking",
            text: "Those are so dirty with " + sc.n("landlord") + "'s pussy juice, I can smell them from here. That smell is never " +
            "coming out. When ever I wear them everyone's going to smell her scent on me.",
            button: [
                { chatID: 60, text: "...", callback: "panties7" }
            ]
        },
        {
            chatID: 60,
            speaker: "landlord",
            text: "Now run up to your room and put on some clothes. ",
            button: [
                { chatID: -1, text: "Thank you " + sc.n("landlord") , callback: "panties8" }
            ]
        },
        {
            chatID: 61,
            speaker: "landlord",
            text: "Hi honey. I'm glad you've finally found your true self. If you want to earn some extra money, now that you're a " +
                "girl you can work with me at the Sperm Bank. Make yourself pretty, because only pretty girls can work with me. ",
            button: [
                { chatID: 62, text: "Oh Cool!", callback: "" }
            ]
        },
        {
            chatID: 62,
            speaker: "landlord",
            text: "I also want to help you on your road to be a proper lady. Meet me in the living room this weekend and we'll have a " +
                "picnic. Your first lesson on being a proper lady is proper clothing. Wear a nice polka dot dress. Polka dots are " +
                "the perfect dress for a picnic outing. ",
            button: [
                { chatID: -1, text: "I will!", callback: "" }
            ]
        },
        {
            chatID: 63,
            speaker: "landlord",
            text: "Hi honey. I'm glad you've finally found your true self. If you want to earn some extra money, now that you're a " +
                "girl you can work with me at the Sperm Bank. Make yourself pretty, because only pretty girls can work with me. ",
            button: [
                { chatID: 64, text: "Oh Cool!", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "landlord",
            text: "Why don't you go change into a polka dot dress and we'll go on a picnic. Make yourself pretty.",
            button: [
                { chatID: -1, text: "Ok.", callback: "" }
            ]
        },
        {
            chatID: 65,
            speaker: "landlord",
            text: "You really do look pretty in that dress. Just a second let me change into my dress and we'll go out. ",
            button: [
                { chatID: 66, text: "Ok.", callback: "ll200" }
            ]
        },
        {
            chatID: 66,
            speaker: "landlord",
            text: "It's been too long since I've had a reason to wear this dress. Lets head to the park and have a nice picnic.",
            button: [
                { chatID: 67, text: "[Head to the park]", callback: "ll200_1" }
            ]
        },
        {
            chatID: 67,
            speaker: "landlord",
            text: "Such a beautiful day, down't you think?",
            button: [
                { chatID: 68, text: "Oh yes, it is wonderful.", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "landlord",
            text: "Such a beautiful day, down't you think?",
            button: [
                { chatID: 69, text: "Oh yes, it is wonderful.", callback: "" }
            ]
        },
        {
            chatID: 69,
            speaker: "landlord",
            text: "So many changes. I'm so excited you've found your real self. I've always preferred " +
                "girls. I suppose when Harry left me for a 18 year old bimbo I've soured to men. I think that's why I've been so hard " +
                "on you. I've been afriad that you would turn out like him. ",
            button: [
                { chatID: 70, text: "I'm nothing like Harry.", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "landlord",
            text: "Oh honey I know! Harry was a man's man. They kind of of guy that that would go hunting, clean his deer, then " +
                "spend the rest of the night drinking with the boys. You're not much of a hunter and " +
                "in your cute little dress drinking with the boys is going to be... different.",
            button: [
                { chatID: 71, text: "Hehehe yeah", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "landlord",
            text: "So I've been a woman for a while, and I know that you're new to it. Do you have any questions about your new found " +
                "femininity that I could help you with?",
            button: [
                { chatID: 73, text: "What's the best way to get rid of all this body hair!", callback: "" },
                { chatID: 74, text: "How do I measure my bra size?", callback: "" },
                { chatID: 75, text: "Is a bigger always better?", callback: "" },
                { chatID: 76, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 72,
            speaker: "landlord",
            text: "Anymore questions?",
            button: [
                { chatID: 73, text: "What's the best way to get rid of all this body hair!", callback: "" },
                { chatID: 74, text: "How do I measure my bra size?", callback: "" },
                { chatID: 75, text: "Is a bigger always better?", callback: "" },
                { chatID: 76, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 73,
            speaker: "landlord",
            text: "Oh honey. Women have been trying to figure this out since we've first had to get rid of our body hair. " +
                "Personally I just wax. It hurts the first time, but after a while it hurts less. ",
            button: [
                { chatID: 72, text: "I have more questions", callback: "" },
                { chatID: 76, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 74,
            speaker: "landlord",
            text: "You look like a " + cl.cupsize() + ". I had that nice young girl at Popular Girl measure me. She's really good. ",
            button: [
                { chatID: 72, text: "I have more questions", callback: "" },
                { chatID: 76, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 75,
            speaker: "landlord",
            text: "Oh my... Yes! But not how you think. I like a thick penis, but it needs to be 8 inches (20 cm) or " +    
                "shorter or it hits my cervix. I had a real bull of a man with the longest penis you've ever seen and he just " +
                "kept hitting me hard. Worst sex ever. I suppose since you don't have a cervix longer is fine, but you just " +
                "have to experiance many differnt penises to find what you like. ",
            button: [
                { chatID: 72, text: "I have more questions", callback: "" },
                { chatID: 76, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 76,
            speaker: "landlord",
            text: "So you may wonder why I brought you out here for a picnic. As you know I've been running the Sperm Bank, mostly " +
                "on my own. You may wonder how such a small town can have a Sperm Bank with so few people and still stay in business. ",
            button: [
                { chatID: 77, text: "I never thought of that. ", callback: "" }
            ]
        },
        {
            chatID: 77,
            speaker: "landlord",
            text: "I've been selling my excess sperm to the cult. No matter how much I get, they always want more. I have no idea " +
                "what they do with it. I probably send them a gallon a week. What someone does with a gallon of sperm I'll never know. " +
                "It's enough to impregnate every woman in this town and all the surrounding towns. ",
            button: [
                { chatID: 78, text: "Oh wow. That's a lot of sperm.", callback: "" }
            ]
        },
        {
            chatID: 78,
            speaker: "landlord",
            text: "I need a delivery girl on the weekends. I had a girl, D.M., delivering it, but she just stopped coming in one day. " +
                "She was always irresponsible, but I just don't trust that cult. I think they are responsible for her disappearance. " +
                "Now that you're such a cute girl I need to warn you to stay away from them. Bad things happen. I've made them promise " +
                "not to go near your " + sc.n("el") + ". I just don't know what to do. I think the cops in this town are working for them.",
            button: [
                { chatID: 79, text: "I could take it to " + sc.n("missy") + ". She's amazing.", callback: "" }
            ]
        },
        {
            chatID: 79,
            speaker: "landlord",
            text: "You know you're right. Maybe I can work with her to find D.M. She was odd, but a lovely girl. I would hate to " +
                "think she got mixed up with that cult. I'm just hoping she met a boy and ran off with him somewhere. ",
            button: [
                { chatID: 80, text: "...", callback: "" }
            ]
        },
        {
            chatID: 80,
            speaker: "thinking",
            text: "I bet I could find her! I hope " + sc.n("landlord") + " takes this to " + sc.n("missy") + ". ",
            button: [
                { chatID: 81, text: "...", callback: "" }
            ]
        },
        {
            chatID: 81,
            speaker: "landlord",
            text: "Well it's starting to get late. I'm going to pick up and head home. Do you need help getting home?",
            button: [
                { chatID: 82, text: "I'm good. Thanks!", callback: "" }
            ]
        },
        {
            chatID: 82,
            speaker: "landlord",
            text: "I like you better as a girl. I know you'll discover your true self. ",
            button: [
                { chatID: -1, text: "Thanks!", callback: "ll200_2" }
            ]
        },
        {
            chatID: 83,
            speaker: "landlord",
            text: "Oooo, I have a surprise for you! I've known a sissy for a while that comes into the sperm bank and thought it " +
                "would be neat for you two to meet. Let me call him over. He's very obedient. ",
            button: [
                { chatID: 84, text: "Oh, what, no. Thank's ok. I don't...", callback: "" }
            ]
        },
        {
            chatID: 84,
            speaker: "landlord",
            text: "Don't be silly. I've already texted him. He'll be here in 15 minutes. Let's go to my room for some privacy.",
            button: [
                { chatID: 85, text: "Oh, what, no. Thank's ok.", callback: "201_1" }
            ]
        },
        {
            chatID: 85,
            speaker: "landlord",
            text: "This is " + sc.n("ralph") + ". He's a sissy too. ",
            button: [
                { chatID: 86, text: sc.n("ralph") + "!!!!", callback: "" }
            ]
        },
        {
            chatID: 86,
            speaker: "ralph",
            text: "Your " + sc.n("landlord") + ". convinced me to come here. She said we have a lot in common, but she didn't say " +
                "I was going to be outed as a sissy to my friend. ",
            button: [
                { chatID: 87, text: "?", callback: "" }
            ]
        },
        {
            chatID: 87,
            speaker: "landlord",
            text: "Oh now " + sc.n("ralph") + " don't be shy. You've never been a shy one at the Sperm Bank. Show him. Show my " +
                "little girl your sissy side. It will be cathartic. ",
            button: [
                { chatID: 88, text: "?", callback: "" }
            ]
        },
        {
            chatID: 88,
            speaker: "ralph",
            text: "Promise not to laugh?",
            button: [
                { chatID: 89, text: "I promise", callback: "201_2" }
            ]
        },
        {
            chatID: 89,
            speaker: "ralph",
            text: "Here it is. The real me!",
            button: [
                { chatID: 90, text: "Oh wow!", callback: "" }
            ]
        },
        {
            chatID: 90,
            speaker: "landlord",
            text: "Such a cute little girl, not a cute as my little girl though. Now put that away. ",
            button: [
                { chatID: 91, text: "...", callback: "201_3" }
            ]
        },
        {
            chatID: 91,
            speaker: "landlord",
            text: "Now that both of your secrets are out you two can play together. I know when I was exploring my sexuality my " +
                "best friend Ruth and I would experiment with all kinds of toys and boys. We would dress each other op, trade " + 
                "clothes and makeup tips, then head out on the town. Ruth and I had so much fun back then...",
            button: [
                { chatID: 92, text: "...", callback: "" }
            ]
        },
        {
            chatID: 92,
            speaker: "landlord",
            text: "Well, anyways, you two sissies run along and play at " + sc.n("ralph") + "'s place. (Future release). ",
            button: [
                { chatID: -1, text: "Oh yes!", callback: "201_4" }
            ]
        },
        {
            chatID: 93,
            speaker: "lola",
            text: "Hay, did you want to watch tv with us?",
            button: [
                { chatID: 94, text: "Cool", callback: "tv" },
                { chatID: -1, text: "Nah", callback: "" }
            ]
        },
        {
            chatID: 94,
            speaker: "lola",
            text: "This is my favorite part.",
            button: [
                { chatID: 95, text: "Yeah", callback: "" }
            ]
        },
        {
            chatID: 95,
            speaker: "eva",
            text: "Such a beautiful movie. We're going up to our room. ",
            button: [
                { chatID: -1, text: "Ok", callback: "tv1" }
            ]
        },
        {
            chatID: 96,
            speaker: "lola",
            text: "Hey you. Wanna sit between us and watch some tv?",
            button: [
                { chatID: 97, text: "Cool", callback: "sl0" },
                { chatID: -1, text: "Nah", callback: "" }
            ]
        },
        {
            chatID: 97,
            speaker: "lola",
            text: "I've been thinking of you all day",
            button: [
                { chatID: 98, text: "Gulp", callback: "sl1" }
            ]
        },
        {
            chatID: 98,
            speaker: "eva",
            text: "Me too. I need that dick so bad. ",
            button: [
                { chatID: 99, text: "What about...", callback: "" }
            ]
        },
        {
            chatID: 99,
            speaker: "lola",
            text: "Shhh... Just relax and let this happen. ",
            button: [
                { chatID: 100, text: "!", callback: "sl2" }
            ]
        },
        {
            chatID: 100,
            speaker: "landlord",
            text: "I see what you're doing! Get out you too! " + sc.n("me") + " sit right there!",
            button: [
                { chatID: -1, text: "OOOOoooo", callback: "sl3" }
            ]
        },
        {
            chatID: 101,
            speaker: "landlord",
            text: "I'm so angry with you. Go to your room now!",
            button: [
                { chatID: -1, text: "Yes. Right away!", callback: "sl3badEnd" }
            ]
        },
        {
            chatID: 102,
            speaker: "landlord",
            text: "It looks like your penis needs a release. Let " + sc.n("landlord") + " help you with that. ",
            button: [
                { chatID: 103, text: "Huh?", callback: "sl4" }
            ]
        },
        {
            chatID: 103,
            speaker: "landlord",
            text: "Just cum in " + sc.n("landlord") + "'s mouth honey. ",
            button: [
                { chatID: 104, text: "OOoooo", callback: "" }
            ]
        },
        {
            chatID: 104,
            speaker: "me",
            text: "UGH!!!",
            button: [
                { chatID: 105, text: "...", callback: "sl5" }
            ]
        },
        {
            chatID: 105,
            speaker: "landlord",
            text: "That's a good boy. Now run along to your room. ",
            button: [
                { chatID: -1, text: "...", callback: "sl6" }
            ]
        },
        {
            chatID: 106,
            speaker: "eva",
            text: "Come sit with us. We need you! ",
            button: [
                { chatID: 107, text: "Oh Yeah!", callback: "f0" },
                { chatID: -1, text: "Nah", callback: "" }
            ]
        },
        {
            chatID: 107,
            speaker: "lola",
            text: "You look like you need some fun.",
            button: [
                { chatID: 108, text: "I do.", callback: "sl1" }
            ]
        },
        {
            chatID: 108,
            speaker: "eva",
            text: "Yeah. Just relax...",
            button: [
                { chatID: 109, text: "...", callback: "f1" }
            ]
        },
        {
            chatID: 109,
            speaker: "lola",
            text: "Oooo I love your cock.",
            button: [
                { chatID: 110, text: "...", callback: "f2" }
            ]
        },
        {
            chatID: 110,
            speaker: "landlord",
            text: "!",
            button: [
                { chatID: 111, text: "Happy noises", callback: "f3" }
            ]
        },
        {
            chatID: 111,
            speaker: "landlord",
            text: "I see what you're up to. Lets get this party started! " + sc.n("eva") + " hop on that cock!",
            button: [
                { chatID: -1, text: "Oh yeah!", callback: "f4" }
            ]
        },
        {
            chatID: 112,
            speaker: "landlord",
            text: "What a yummy treat. It's late. Off to bed girls. I've got to wash my face. ",
            button: [
                { chatID: -1, text: "...", callback: "f10" }
            ]
        },
        {
            chatID: 113,
            speaker: "thinking",
            text: "I really should let " + sc.n("landlord") + " know that " + sc.n("bigguy") + " is cheating " +
                "on her. After everything she's done for me she deserves the truth. I just wish it wasn't me " +
                "that he cheated on her with. I really hope she doesn't get mad at me. I couldn't help it. ",
            button: [
                { chatID: -1, text: "I ain't saying shit! She's just going to get mad at me. ", callback: "" },
                { chatID: 114, text: sc.n("landlord") + ", " + sc.n("bigguy") + " cheated on you. ", callback: "" },
                
            ]
        },
        {
            chatID: 114,
            speaker: "me",
            text: "So, I have to tell you something. Please don't get mad at me, but " + sc.n("bigguy") + " came " +
                "into my room and forced me to have sex with him. I didn't want to, he made me. I'm so sorry. ",
            button: [
                { chatID: 115, text: "...", callback: "" },

            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
