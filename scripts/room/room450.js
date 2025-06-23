//Girl bathroom park
var room450 = {};

//tiffany tricks main into drag by saying it's an all girls apartment
//candy knows who he is and asks him why he's dressed as a chick
//tiffany laughs that she tricked him

room450.main = function () {
    if (g.pass === "endSleepyTime") {
        g.pass = "";
        nav.bg("172_punishblack/black.jpg");
        gv.mod("energy", -9999);
        chat(84, 450);
    }
    else if (g.pass === "lolaPark" || g.pass === "lolaPark2") {
        room450.btnclick(g.pass);
        g.pass = null;
    }
    else {
        var navList = new Array();
        var btnList = new Array();
        var doEvent = false;

        if (g.isNight()) {
            var copstep = sc.taskGetStep("cop", "bitch");
            if (daily.get("cop")) {
                nav.bg("450_park/peek.jpg");
                chat(72, 450);
            }
            else if (copstep < 0) {
                btnList.push({
                    "type": "img",
                    "name": "cop",
                    "left": 666,
                    "top": 0,
                    "width": 1000,
                    "height": 1080,
                    "image": "450_park/cop1.png"
                });
                sc.show("cop");
                sc.startMission("cop", "bitch");
                sc.completeMissionTask("cop", "bitch", 0);
                daily.set("cop");
                chat(2, 450);
            }
            else if (copstep === 1) {
                btnList.push({
                    "type": "img",
                    "name": "cop",
                    "left": 666,
                    "top": 0,
                    "width": 1000,
                    "height": 1080,
                    "image": "450_park/cop3.png"
                });
                sc.completeMissionTask("cop", "bitch", 1);
                daily.set("cop");
                chat(59, 450);
            }
            else if (copstep === 2) {
                sc.completeMissionTask("cop", "bitch", 2);
                btnList.push({
                    "type": "img",
                    "name": "cop",
                    "left": 666,
                    "top": 0,
                    "width": 1000,
                    "height": 1080,
                    "image": "450_park/cop2.png"
                });
                daily.set("cop");
                chat(60, 450);
            }
            else {
                if (daily.get("parkNight")) {
                    room450.chatcatch("enterPark");
                }
                else {
                    daily.set("parkNight");
                    nav.bg("450_park/peek.jpg");
                    chat(74, 450);
                }
            }
        }
        else {

            btnList.push({
                "type": "btn",
                "name": "gbroom",
                "left": 1288,
                "top": 271,
                "width": 63,
                "height": 125,
                "image": "450_park/450_girlBroom.png"
            });
            btnList.push({
                "type": "btn",
                "name": "bbroom",
                "left": 1594,
                "top": 273,
                "width": 65,
                "height": 126,
                "image": "450_park/450_boyBroom.png"
            });
            btnList.push({
                "type": "btn",
                "name": "further",
                "left": 603,
                "top": 0,
                "width": 314,
                "height": 401,
                "image": "450_park/450_further.png",
                "night": "450_park/450_further_night.png"
            });
            if (missy.activecase().name === "case_lostgirl" && missy.get("activeCaseComplete") === 0) {
                btnList.push({
                    "type": "btn",
                    "name": "smokey",
                    "left": 910,
                    "top": 119,
                    "width": 816,
                    "height": 961,
                    "image": "450_park/smokey.png",
                });

            }
            navList = [460, 452, 451, 0];
            doEvent = true;
        }


        if (g.hourBetween(12, 13) || g.hourBetween(18, 19)) {
            btnList.push({
                "type": "btn",
                "name": "cult",
                "left": 1481,
                "top": 456,
                "width": 264,
                "height": 205,
                "image": "450_park/cultEating.png"
            });
        }


        $.each(btnList, function (i, v) {
            nav.button(v, 450);
        });

        nav.buildnav(navList);
    }
};

room450.btnclick = function (name) {
    switch (name) {
        case "gbroom":
            char.room(452);
            break;
        case "bbroom":
            char.room(451);
            break;
        case "bench":
            chat(1, 450);
            break;
        case "further":
            char.room(460);
            break;
        case "sleep":
            if (sc.getEvent("me", 7))
                char.room(456);
            else
                chat(14, 450);
            break;
        case "":
            char.room(456);
            break;
        case "cult":
            nav.killbutton("cult");
            nav.button({
                "type": "img",
                "name": "cult1",
                "left": 750,
                "top": 0,
                "width": 933,
                "height": 1080,
                "image": "450_park/cultTalk.png"
            }, 450);
            chat(8, 450);
            break;
        case "lolaPark":
            nav.killall();
            nav.bg("450_park/lola0.jpg");
            chat(15, 450);
            break;
        case "lolaPark2":
            nav.killall();
            nav.bg("450_park/lola0.jpg");
            chat(38, 450);
            break;
        case "lola2":
            chat(21, 450);
            break;
        case "lola4":
            chat(23, 450);
            break;
        case "lola5":
            chat(24, 450);
            break;
        case "cop":
            if (g.hasAccess(16).darkAccess) {
                if (q3.activeSearch("cop"))
                    chat(50, 450);
                else
                    chat(2, 450);
            }
            else
                chat(3, 450);
            break;
        case "cop3":
            nav.killbutton("cop3");
            nav.bg("450_park/cop4.jpg");
            chat(62, 450);
            break;
        case "smokey":
            chat(75, 450);
            break;
        case "lola10kiss":
            nav.killbutton("lola10kiss");
            levels.oral(3, false, false, "f", null, "lola");
            if (levels.get("oral").l < 3) {
                nav.bg("450_park/lola11akiss.jpg");
                chat(81, 450);
            }
            else {
                nav.bg("450_park/lola10kiss.jpg");
                nav.next("lola11kiss");
            }
            break;
        case "lola11kiss":
            nav.killbutton("lola11kiss");
            nav.bg("450_park/lola11kiss.jpg");
            chat(79, 450);
            break;
       
        default:
            break;
    }
};

room450.chatcatch = function(callback){
    switch (callback) {
        case "cop2":
        case "cop4":
        case "cop5":
        case "cop6":
        case "cop7":
            nav.killall();
            nav.bg("450_park/" + callback + ".jpg");
            break;
        case "cop9":
            nav.killall();
            levels.oral(4, false, false, "m", null, "cop");
            cl.c.cumface = true;
            cl.display();
            gv.mod("arousal", 40);
            nav.bg("450_park/" + callback + ".jpg");
            break;
        case "cop8":
            nav.bg("450_park/cop8.gif");
            break;
        case "cop3":
            nav.bg("450_park/456_bg_night.jpg");
            nav.button({
                "type": "kiss",
                "name": "cop3",
                "left": 639,
                "top": 0,
                "width": 959,
                "height": 1080,
                "image": "450_park/cop2dick.png"
            }, 450);
            break;
        case "cop10":
            nav.bg("map/450_closenight.jpg");
            zcl.displayMirror();
            break;
        case "sitHour":
            char.addtime(60);
            break;
        case "leavePark":
            char.room(0);
            break;
        case "leaveAddTime":
            char.addMinutes(120);
            char.room(0);
            break;
        case "cop2x":
            nav.killbutton("cop");
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 666,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "450_park/cop2.png"
            }, 450);
            break;
        case "cop3x":
            nav.killbutton("cop");
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 666,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "450_park/cop3.png"
            }, 450);
            break;
        case "killCop":
            nav.buildnav([0]);
            nav.killbutton("cop");
            break;
        case "killCopx":
            char.room(450);
            break;
        case "cultLeave1":
            char.addtime(60);
            nav.killbutton("cult1");
            break;
        case "cultLeave2":
            char.addtime(60);
            nav.killbutton("cult1");
            break;
        case "redress":
            cl.c.shirt = "g";
            cl.c.pants = "j";
            cl.c.shoes = "w";
            cl.c.socks = "w";
            cl.display();
            char.room(456);
            break;
        case "lola1":
            nav.bg("450_park/lola1.jpg");
            break;
        case "lola2":
            nav.bg("450_park/450_bg.jpg");
            nav.button({
                "type": "btn",
                "name": "lola2",
                "left": 1706,
                "top": 233,
                "width": 41,
                "height": 87,
                "image": "450_park/lola2.png"
            }, 450);
            break;
        case "lola3":
            nav.killall();
            nav.bg("450_park/lola3.jpg");
            break;
        case "lola4":
            nav.bg("450_park/lola4.jpg");
            nav.button({
                "type": "btn",
                "name": "lola4",
                "left": 1665,
                "top": 298,
                "width": 110,
                "height": 392,
                "image": "450_park/lola4.png"
            }, 450);
            break;
        case "lola5":
            nav.killall();
            nav.bg("450_park/lola5.jpg");
            nav.button({
                "type": "btn",
                "name": "lola5",
                "left": 414,
                "top": 486,
                "width": 41,
                "height": 161,
                "image": "450_park/lola5.png"
            }, 450);
            break;
        case "lola6":
            nav.killall();
            nav.bg("450_park/lola6.jpg");
            break;
        case "lola6kiss":
            sc.modLevel("lola", 15, 7);
            nav.bg("450_park/lola6kiss.jpg");
            break;
        case "lola7kiss":
            sc.modLevel("lola", 25, 7);
            if (sc.getLevel("lola") < 4) {
                nav.bg("450_park/lola6.jpg");
                chat(46, 450);
            }
            else {
                nav.bg("450_park/lola7kiss.jpg");
                chat(47, 450);
            }
            break;
        case "lola8kiss":
            sc.modLevel("lola", 25, 7);
            if (sc.getLevel("lola") < 5) {
                nav.bg("450_park/lola6.jpg");
                chat(48, 450);
            }
            else {
                nav.bg("450_park/lola8kiss.jpg");
                chat(49, 450);
            }
            break;
        case "lola9kiss":
            sc.modLevel("lola", 25, 7);
            if (sc.getLevel("lola") < 6) {
                nav.bg("450_park/lola6topless.jpg");
                chat(78, 450);
            }
            else {
                nav.bg("450_park/lola9kiss.jpg");
                nav.next("lola10kiss");
            }
            break;
        case "lola7a":
            sc.completeMissionTask("lola", "date", 2);
            daily.set("lola");
            char.addtime(120);
            char.room(450);
            break;
        case "lola7b":
            sc.completeMissionTask("lola", "date", 2);
            daily.set("lola");
            char.addtime(120);
            char.room(0);
            break;
        case "lolax1":
            gv.mod("arousal", 100);
            nav.bg("450_park/lolax1.jpg");
            cl.nude();
            break;
        case "lolax2":
        case "lolax3":
        case "lolax4":
        case "lolax5":
        case "lolax6":
        case "lolax7":
            nav.bg("450_park/" + callback + ".jpg");
            break;
        case "lolax8":
            nav.bg("450_park/lolax8.jpg");
            cl.doCum(false);
            zcl.displayMain(-700, 500, .4, "clothes", true);
            break;
        case "lolax9":
            char.addtime(120);
            gv.mod("fuckPussy", 1);
            daily.set("lola");
            cl.undo();
            scc.love("lola", 200, 100);
            char.room(450);
            break;
        case "c0":
            nav.killall();
            cl.nude();
            nav.bg("450_park/c0.jpg");
            break;
        case "killsmokey":
            nav.killbutton("smokey");
            break;
        case "lola100":
            sc.modLevel("lola", 100, 7);
            break;
        case "lola50":
            sc.modLevel("lola", 50, 7);
            break;
        case "lola25":
            sc.modLevel("lola", 50, 7);
            break;
        case "reset":
            char.addtime(120);
            char.room(450);
            break;
        case "backHome":
            char.addtime(120);
            char.room(11);
            break;
        case "lola11bkiss":
            nav.bg("450_park/lola11bkiss.jpg");
            break;
        case "lola11kiss":
            nav.bg("450_park/lola11kiss.jpg");
            break;
        case "456_tif":
            nav.bg("450_park/456_tif.jpg");
            break;
        case "enterPark":
            nav.bg("450_park/450_bg.jpg", "450_park/450_bg_night.jpg")
            nav.button({
                "type": "btn",
                "name": "gbroom",
                "left": 1288,
                "top": 271,
                "width": 63,
                "height": 125,
                "image": "450_park/450_girlBroom.png"
            }, 450);
            nav.button({
                "type": "btn",
                "name": "bbroom",
                "left": 1594,
                "top": 273,
                "width": 65,
                "height": 126,
                "image": "450_park/450_boyBroom.png"
            }, 450);
            nav.button({
                "type": "btn",
                "name": "further",
                "left": 603,
                "top": 0,
                "width": 314,
                "height": 401,
                "image": "450_park/450_further.png",
                "night": "450_park/450_further_night.png"
            }, 450);
            nav.buildnav([460, 452, 451, 0]);
            break;
        default:
            break;
    }
}

room450.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Sit on the bench for an hour?", callback: "sitHour" },
                { chatID: -1, text: "Never mind", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "cop",
            text: "Hey buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: -1, text: "Yes sir, I'll take off", callback: "leavePark" }
            ]
        },
        {
            chatID: 3,
            speaker: "cop",
            text: "Hey buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: 4, text: "Sorry sir, I've been kicked out of my home and I've got nowhere to go. Please let me crash here tonight!", callback: "cop3x" }
            ]
        },
        {
            chatID: 4,
            speaker: "cop",
            text: "Ohhhh, I'll tell you what boy, I'll let you sleep in the park if you wrap your lips around my " +
                "big fat cock and suck it till I cum down your throat.",
            button: [
                { chatID: 5, text: "Wha.... I'm not going to do that.", callback: "cop2x" }
            ]
        },
        {
            chatID: 5,
            speaker: "cop",
            text: "Hahah maybe not today, but if I catch you in my park after dark you will. Go ahead and sleep on the bench. This is " +
                "your freebie.",
            button: [
                { chatID: -1, text: "Thanks?....", callback: "killCopx" }
            ]
        },
        {
            chatID: 6,
            speaker: "cop",
            text: "Oh, you come here for my cock?",
            button: [
                { chatID: 7, text: "No, I'm still homeless, please just let me sleep here without sucking your dick.", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "cop",
            text: "The bench is all yours",
            button: [
                { chatID: -1, text: "Thanks.", callback: "killCop" }
            ]
        },
        {
            chatID: 8,
            speaker: "cult",
            text: "Yes my friend, what can we do for your?",
            button: [
                { chatID: 9, text: "Who are you?", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "cult",
            text: "We are everything, we are everywhere, we are love. Have you been loved?",
            button: [
                { chatID: 10, text: "Have I what?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "cult",
            text: "Silly boy, have you been loved? Our group has so much love, we would like to love you. ",
            button: [
                { chatID: 11, text: "Oh yea?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "cult",
            text: "Yes, you can join us for free love, just follow the forest, it will guide you to us. When you get near " +
                "our home disrobe your earthly clothes for they serve no purpose when you have love in your heart.",
            button: [
                { chatID: 12, text: "What the fuck?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "cult",
            text: "The time draws near for us to share out love in the forest, be well new friend. ",
            button: [
                { chatID: -1, text: "Be well?", callback: "cultLeave1" }
            ]
        },
        {
            chatID: 13,
            speaker: "cult",
            text: "Hello again friend. Meet us naked, in the forest so we can share our love. Only the nude body can " +
                "can receive the gifts of our creator. ",
            button: [
                { chatID: -1, text: "Sure", callback: "cultLeave2" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Better wear my normal clothes, it's cold out here..",
            button: [
                { chatID: -1, text: "...", callback: "redress" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "I'm so glad " + sc.n("landlord") + " had us go on a practice date! " +
                "I really needed to get out.  ",
            button: [
                { chatID: 16, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "This is so crazy! Should I even be doing this? This is wrong, but it feels so right. I don't care what anyone " +
                "says, I'm going to go on a date with " + sc.n("lola") + " and I'm going to enjoy it.",
            button: [
                { chatID: 17, text: "...", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "I can tell you're thinking about something. I've known you way too long and I've seen that look before. Is " +
                "it good thoughts?",
            button: [
                { chatID: 18, text: "Oh yea, the best of thoughts, I'm glad we're on this date.", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "lola",
            text: "I'm so relieved! I was afraid I was packing this picnic basket for nothing. I have a secrect place in the " +
                "forest I want to go and have our picnic.",
            button: [
                { chatID: 19, text: "Oh sweet, where is it?", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "lola",
            text: "I can't tell you silly, 'cause then it wouldn't be a secret. I'll tell you what, I'll run and hide, and you have " +
                "to find me.",
            button: [
                { chatID: 20, text: "Huh?", callback: "lola1" }
            ]
        },
        {
            chatID: 20,
            speaker: "lola",
            text: "FIND ME!",
            button: [
                { chatID: -1, text: "Whaaaa...", callback: "lola2" }
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "You found me!",
            button: [
                { chatID: 22, text: "ok", callback: "lola3" }
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "Find me again!",
            button: [
                { chatID: -1, text: "ok", callback: "lola4" }
            ]
        },
        {
            chatID: 23,
            speaker: "lola",
            text: "Hahahaha you found me again! One more time!",
            button: [
                { chatID: -1, text: "ok", callback: "lola5" }
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "Got me again! I guess you deserve a reward...",
            button: [
                { chatID: 25, text: "I like rewards...", callback: "lola6" }
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "A picnic!!!! I made this all for you!",
            button: [
                { chatID: 26, text: "Oh, not what I was expecting, but still nice.", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "lola",
            text: "So uhhh. What do people talk about on a date? ",
            button: [
                { chatID: 27, text: "I don't know. Life I guess. ", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "lola",
            text: "I uh.. My stomach is fluttering with butterflies. I'm " +
                "just so nervous being on a date with you, even if it's fake. I don't know. " +
                "This is a fake date right. It's not a real date is it? " +
                "I know it's fake, but it feels kind of real to me. Is it real to you? " +
                "So.... do you think about me? Like in a date way? ",
            button: [
                { chatID: 28, text: "...", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "Oh man. " + sc.n("lola") + " is really serious about this. I've never seen her " +
                "show any interest in any boy. For the longest time I just thought she was a " +
                "lesbian. I know that she's going to want someone who is true to her, and " +
                "there's no way I can be true to just her. On the other hand if I didn't " +
                "return her feelings it would just break her. How do I keep her happy, " +
                "but not mislead her?",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "You've been pretty quiet over there. I'm afraid of what that means.",
            button: [
                { chatID: 30, text: "I want to tell you that I also have deep real feelings for you.", callback: "lola100" },
                { chatID: 34, text: "I care about you very much, but I'm not really at a stage that I can remain monogamous ", callback: "lola50" }
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "Oh thank god! I was afraid you would think this was weird or gross. I've been sweating since you asked me out wondering what you " +
            "were thinking of me. I'm so relieved. Kiss me you fool!",
            button: [
                { chatID: 31, text: "[Kiss her]", callback: "lola6kiss" }
            ]
        },
        {
            chatID: 31,
            speaker: "lola",
            text: "**KISS**",
            button: [
                { chatID: 32, text: "...", callback: "lola6" }
            ]
        },
        {
            chatID: 32,
            speaker: "lola",
            text: "[Proceed to make small talk for a while and enjoy a delicious lunch] ",
            button: [
                { chatID: 33, text: "...", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "lola",
            text: "I've got to get going. I had a great time. We should do this again. Call me when next time you find yourself in the park. ",
            button: [
                { chatID: -1, text: "I will, This was great.", callback: "lola7a" }
            ]
        },
        {
            chatID: 34,
            speaker: "lola",
            text: "Oh hahaha. We don't have to get married right now. Maybe we take thing casually for a little while, see where  " +
            "it goes. ",
            button: [
                { chatID: 35, text: "Yeah, I can do that", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "lola",
            text: "Ok, in the mean time lets enjoy this picnic I packed all the way out here. ",
            button: [
                { chatID: 36, text: "Yea, I'm so hungry", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "lola",
            text: "[Proceed to make small talk for a while and enjoy a delicious lunch] ",
            button: [
                { chatID: 37, text: "...", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "lola",
            text: "I'm going to go. If you want to meet up again just text me when you're in the park. ",
            button: [
                { chatID: -1, text: "ok. Later", callback: "lola7b" }
            ]
        },
        {
            chatID: 38,
            speaker: "lola",
            text: "Another picnic? ",
            button: [
                { chatID: 39, text: "Sure!", callback: "lola6" }
            ]
        },
        {
            chatID: 39,
            speaker: "lola",
            text: "I really love getting out and enjoying nature. The view is so beautiful. ",
            button: [
                { chatID: 40, text: "I love the view from here too.", callback: "lola25" },
                { chatID: 41, text: "It really is.", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "lola",
            text: "Oh, you big flirt! You give me butterflies in my belly.  ",
            button: [
                { chatID: 41, text: "...", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "lola",
            text: "So if this wasn't a practice date, and was a real date, what would be your " +
                "next move? ",
            button: [
                { chatID: 43, text: "Probably start by giving you a kiss. You know. To practice kissing. ", callback: "" },
                { chatID: 42, text: "I would kick back and enjoy this great picnic you packed. ", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "lola",
            text: "Oh. yeah. Thanks. I did try to make a nice picnic basket. Lets just enjoy the " +
                "food and nature. ",
            button: [
                { chatID: -1, text: "Yum! [Make small talk and finish the date]", callback: "leaveAddTime" }
            ]
        },
        {
            chatID: 43,
            speaker: "lola",
            text: "Oh.. hehehe. I guess a kiss would be ok. You know, to practice. ",
            button: [
                { chatID: 44, text: "Lean in to kiss her. ", callback: "lola6kiss" }
            ]
        },
        {
            chatID: 44,
            speaker: "lola",
            text: "*Mwah*",
            button: [
                { chatID: -1, text: "[Push her on her back and make out with her]", callback: "lola7kiss" },
                { chatID: 42, text: "Back to the picnic. [Finsih kissing her]", callback: "lola6" },
            ]
        },
        {
            chatID: 45,
            speaker: "me",
            text: "That was fun, now lets just enjoy the food and nature. ",
            button: [
                { chatID: -1, text: "Yum! [Make small talk and finish the date]", callback: "leaveAddTime" }
            ]
        },
        {
            chatID: 46,
            speaker: "lola",
            text: "We shouldn't do this. Lets just enjoy the food and nature.  ",
            button: [
                { chatID: -1, text: "Yum! [Neel level 4. Make small talk and finish the date]", callback: "leaveAddTime" }
            ]
        },
        {
            chatID: 47,
            speaker: "lola",
            text: "This is so wrong, but you're such a good kisser. ",
            button: [
                { chatID: -1, text: "Hahaha Yea [take off her shirt up and kiss on her belly]", callback: "lola8kiss" },
                { chatID: 42, text: "Back to the picnic. [Finsih kissing her]", callback: "lola6" },
            ]
        },
        {
            chatID: 48,
            speaker: "lola",
            text: "We shouldn't do this. Lets just enjoy the food and nature.  ",
            button: [
                { chatID: -1, text: "Yum! [Neel level 5. Make small talk and finish the date]", callback: "leaveAddTime" }
            ]
        },
        {
            chatID: 49,
            speaker: "lola",
            text: "Oh wow. oh... it kinda tickles, but feels so good.  ",
            button: [
                { chatID: -1, text: "[Pull down her skirt and lick her pussy]", callback: "lola9kiss" },
                { chatID: 42, text: "Back to the picnic. [Finsih kissing her]", callback: "lola6" },
            ]
        },
        {
            chatID: 50,
            speaker: "cop",
            text: "Hey buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: -1, text: "Yes sir, I'll take off", callback: "leavePark" },
                { chatID: 51, text: "What's a sexy cop like you doing way out here", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "cop",
            text: "What's that supposed to mean? ",
            button: [
                { chatID: 52, text: "Well, I just mean that you're hot. ", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "cop",
            text: "I'm just fine. You need to get or I'm going to put a beating to you! ",
            button: [
                { chatID: 53, text: "...", callback: "" },
                { chatID: -1, text: "Yelp and run away", callback: "leavePark" },
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "This isn't working. I'm going to have to do something to get his attention. I know he likes fucking. Maybe " +
                "I need to show him I need to be used like a filthy slut....",
            button: [
                { chatID: -1, text: "[Bend over and show him your bussy]", callback: "c0" },
            ]
        },
        {
            chatID: 54,
            speaker: "thinking",
            text: "He really quiet. I wonder what he's thinking. I hope he doesn't bash me or arrest me. I feel like " +
                "such a ho with my bare ass sticking up. This is getting uncomfortable. ",
            button: [
                { chatID: 55, text: "...", callback: "c1" },
            ]
        },
        {
            chatID: 55,
            speaker: "cop",
            text: "So we got ourselves a little slut in the park don't we. You know I'm going to have to teach you a hard " + 
                "lesson on what we do with people who think indecent exposure is ok. ",
            button: [
                { chatID: 56, text: "sh-sh-should I put my clothes back on?", callback: "" },
            ]
        },
        {
            chatID: 56,
            speaker: "cop",
            text: "Don't you fucking move or I'm going to through your ass in jail. Just stay right there and don't reach " +
                "for anything or I'll crack your head open like a melon. ",
            button: [
                { chatID: 57, text: "GULP", callback: "c2" },
            ]
        },
        {
            chatID: 57,
            speaker: "cop",
            text: "Loose ass pussy. All you white sissy boys try to fetishise this big black cock. But I don't mind. " +
                "You know why I don't mind? ",
            button: [
                { chatID: 58, text: "why?", callback: "c3" },
            ]
        },
        {
            chatID: 58,
            speaker: "cop",
            text: "'Cause I do love fuckin'. Don't care if it's a pussy, mouth, asshole. As long as I get my nut. And I'm " +
                "going to get my nut out of you sissy boy. ",
            button: [
                { chatID: 58, text: "why?", callback: "c4" },
            ]
        },
        {
            chatID: 59,
            speaker: "cop",
            text: "HEY! I fucking told you to stay out of the park at night! Stupid fucking kids " +
                "never listen. If I catch you here after dark again you're going to really regret it." +
                "Now get the fuck out  of here. NOW!",
            button: [
                { chatID: -1, text: "Yes sir, I'll take off", callback: "leavePark" }
            ]
        },
        {
            chatID: 60,
            speaker: "cop",
            text: "Last time you were here I told you, you were going to regret coming back. But " +
                "here you are, back at the park after dark. It seems to me that you're looking " +
                "for trouble. ",
            button: [
                { chatID: 61, text: "Oh no sir, it was just a mistake. I'll leave right away!", callback: "cop2" }
            ]
        },
        {
            chatID: 61,
            speaker: "cop",
            text: "I don't think it was a mistake. I think you wanted to take a look at this fine " +
                "specimen of big black cock. You better open that pretty little mouth of yours, " +
                "or they ain't gunna find your body. ",
            button: [
                { chatID: -1, text: "*Gulp!*", callback: "cop3" }
            ]
        },
        {
            chatID: 62,
            speaker: "cop",
            text: "That's right boy, open that mouth so I can fill it.",
            button: [
                { chatID: 63, text: "[Take the head of his cock into your mouth]", callback: "cop4" }
            ]
        },
        {
            chatID: 63,
            speaker: "cop",
            text: "Stop playing with it, suck it bitch!",
            button: [
                { chatID: 64, text: "mMMmmm uhhHHhmm Mmm M It's too MMmMM big for my mouth mmMMmmhhHHHhh", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "cop",
            text: "Relax your jaw.. ",
            button: [
                { chatID: 65, text: "UUUUgggggHHHHHhhhh ooOOOooooo", callback: "cop5" }
            ]
        },
        {
            chatID: 65,
            speaker: "cop",
            text: "I'm just going to have to force it it. ",
            button: [
                { chatID: 66, text: "uuuugh", callback: "cop6" }
            ]
        },
        {
            chatID: 66,
            speaker: "cop",
            text: "Just a bit further... ",
            button: [
                { chatID: 67, text: "*GLUCK*", callback: "cop7" }
            ]
        },
        {
            chatID: 67,
            speaker: "cop",
            text: "Fucking take this big dick ",
            button: [
                { chatID: 68, text: "oooOOOOOO", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "cop",
            text: "I can feel the back of your throat... oh yea.. oh fuck I'm going to cum...  ",
            button: [
                { chatID: 69, text: "uuHHHmmmmm", callback: "cop8" }
            ]
        },
        {
            chatID: 69,
            speaker: "cop",
            text: "Get ready for my cum bitch!",
            button: [
                { chatID: 70, text: "...", callback: "cop9" }
            ]
        },
        {
            chatID: 70,
            speaker: "cop",
            text: "Now clean your face up slut, you're covered in cum.",
            button: [
                { chatID: 71, text: "Yes sir", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "cop",
            text: "Remember if you tell anyone I'll just deny it then lock you up " +
                "for lying about the police! Now get the fuck out of here! ",
            button: [
                { chatID: 73, text: "Yes sir", callback: "cop10" }
            ]
        },
        {
            chatID: 72,
            speaker: "thinking",
            text: "I already ran into him once today. There's no way I'm going there again! ",
            button: [
                { chatID: -1, text: "...", callback: "leavePark" }
            ]
        },
        {
            chatID: 73,
            speaker: "thinking",
            text: "What kind of cop rapes someone's face? And fuck that dick was huge! My jaw " +
                "is aching. That wasn't fun at all! It was just demeaning and painful. But why " +
                "did I get so hard when he was raping my face? Do I enjoy getting raped? Fuck. " +
                "I've got to clean this cum off my face before " + sc.n("landlord") + " sees it and " +
                "asks what happened. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leavePark" }
            ]
        },
        {
            chatID: 74,
            speaker: "thinking",
            text: "Let me hide here and wait for the face raping cop to move on. ",
            button: [
                { chatID: -1, text: "[wait...]", callback: "enterPark" }
            ]
        },
        {
            chatID: 75,
            speaker: "smokey",
            text: "Hey " + gender.pronoun("man") + " the parks such a free place isn't it. ",
            button: [
                { chatID: 76, text: "Totally. I'm looking for someone, her name's Sanaria. You haven't seen her have you?", callback: "" }
            ]
        },
        {
            chatID: 76,
            speaker: "smokey",
            text: "Oh shit. Yeah I know her. I sell to her all the time. I ain't seen her here. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "killsmokey" },
                { chatID: 77, text: "Do you know where she likes to hang out?", callback: "" },
            ]
        },
        {
            chatID: 77,
            speaker: "smokey",
            text: "Oh.... uhhh I don't know her really good, ya know. I know she loves to vape " + 
                "and loves to dance. ",
            button: [
                { chatID: -1, text: "...loves to dance. Ok, thanks. ", callback: "killsmokey" },
            ]
        },
        {
            chatID: 78,
            speaker: "lola",
            text: "Oooo, smooth, but a bit fast for me. How about we finish our picnic, but I'll " +
                "let you look at my boobs while we eat. ",
            button: [
                { chatID: -1, text: "Yum! [Make small talk and finish the date]", callback: "reset" }
            ]
        },
        {
            chatID: 79,
            speaker: "lola",
            text: "Oohhhh wow. wow wow wow. oh my. You're going to have to give me a minute. " +
                "I'm still getting after shocks. ",
            button: [
                { chatID: 80, text: "sure. ", callback: "" }
            ]
        },
        {
            chatID: 80,
            speaker: "lola",
            text: "My legs are so shaky. You're going to have to dress and walk me home. " +
                "You are amazing! ",
            button: [
                { chatID: -1, text: "Sure. Let's go", callback: "backHome" }
            ]
        },
        {
            chatID: 81,
            speaker: "lola",
            text: "That was good, but I'm so close and horny. I'm just going to get myself off " +
                "really quick. You can watch. ",
            button: [
                { chatID: 82, text: "Sure. Let's go", callback: "lola11bkiss" }
            ]
        },
        {
            chatID: 82,
            speaker: "lola",
            text: "Fuck!!! aaaaaaaaaa. ",
            button: [
                { chatID: 83, text: "...", callback: "lola11kiss" }
            ]
        },
        {
            chatID: 83,
            speaker: "lola",
            text: "My legs are so shaky. You're going to have to dress and walk me home. " +
                "That was amazing! ",
            button: [
                { chatID: -1, text: "Sure. Let's go", callback: "backHome" }
            ]
        },
        {
            chatID: 84,
            speaker: "thinking",
            text: "Ow, my head! Why did I drink so much? ",
            button: [
                { chatID: 85, text: "[Try to open your eyes]", callback: "456_tif" }
            ]
        },
        {
            chatID: 85,
            speaker: "tiffany",
            text: "Wake up sleep head. I don't know what happened last night, but you " +
                "need a better bed than this bench. ",
            button: [
                { chatID: -1, text: "heh, yeah", callback: "reset" }
            ]
        },
    ];
    return cArray[chatID];
}