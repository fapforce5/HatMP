//mistress side of desk
var room202 = {};
room202.main = function () {
    g.internal = "";
    var missyStep = sc.getstep("missy");
    var btnList = [
        {
            "type": "btn",
            "name": "missyCross",
            "left": 646,
            "top": 208,
            "width": 771,
            "height": 872,
            "image": "202_sideDesk/202_cross1.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 202);
    });
    if (g.pass === "repeatdildomouth") {
        nav.kill("missyCross");
        nav.bg("202_sideDesk/openmouth1.jpg");
        chat(52, 202);
    }
    else if (g.pass === "repeatstool") {
        nav.kill("missyCross");
        nav.bg("202_sideDesk/202_sideDesk4s.jpg");
        chat(61, 202);
    }
    else if (g.pass === "20eatass") {
        nav.killall();
        g.internal = 1;
        nav.bg("202_sideDesk/202_sideDeskZoom.jpg");
        nav.button({
            "type": "tongue",
            "name": "missyLick",
            "left": 263,
            "top": 104,
            "width": 1667,
            "height": 976,
            "image": "202_sideDesk/bent.png"
        }, 202);
    }
    else if (missyStep === 3) {
        g.pass = "1";
        chat(0, 202);
    }
    else if (g.pass === "normalFlow") {
        g.pass = "1";
        cl.c.pants = "s";
        cl.c.shirt = "s";
        cl.c.socks = "b";
        cl.c.shoes = "d";
        cl.display();
        g.dt.setHours(18);
        chat(6, 202);
    }
    else if (missyStep === 12) {
        nav.kill("missyCross");
        nav.bg("202_sideDesk/openmouth1.jpg");
        chat(36, 202);
    }
    else if (missyStep === 13) {
        g.tview = "p";
        cl.display();
        chat(11, 202);
    }
    else if (missyStep === 14) {
        nav.killall();
        nav.bg("202_sideDesk/pose1.jpg");
        chat(46, 202);
    }
    else if (missyStep === 14) {
        chat(32, 202);
    }

    if (missyStep === 9)
        sc.setstep("missy", 10);

};

room202.btnclick = function (name) {
    switch (name) {
        case "missyCross1":
            if (g.pass === "1")
                chat(2, 202);
            else if (g.pass === "2")
                chat(3, 202);
            else if (g.pass === "3") {
                nav.killbutton("missyCross1");
                nav.button({
                    "type": "btn",
                    "name": "missyCross2",
                    "left": 646,
                    "top": 208,
                    "width": 771,
                    "height": 872,
                    "image": "202_sideDesk/202_cross1.png"
                }, 202);
                chat(4, 202);
            }
            else if (g.pass === "game") {
                chat(9, 202);
            }
            break;
        case "missyCrossNormalFlow":
            if (g.pass === "1")
                chat(7, 202);
            if (g.pass === "2")
                chat(3, 202);
            if (g.pass === "3") {
                nav.killbutton("missyCross1");
                nav.button({
                    "type": "btn",
                    "name": "missyCross2",
                    "left": 646,
                    "top": 208,
                    "width": 771,
                    "height": 872,
                    "image": "202_sideDesk/202_cross1.png"
                }, 202);
                chat(4, 202);
            }
            break;
        case 'tongue1':
            nav.killbutton("tongue1");
            nav.button({
                "type": "btn",
                "name": "missyCrossX",
                "left": 646,
                "top": 208,
                "width": 771,
                "height": 872,
                "image": "202_sideDesk/202_cross1.png"
            }, 202);
            chat(8, 202);
            break;
        case "missyCross":
            chat(9, 202);
            break;
        case "missyCrossReward":
            nav.killbutton("missyCrossReward");
            nav.button({
                "type": "btn",
                "name": "missyCrossRewardEnd",
                "left": 646,
                "top": 208,
                "width": 771,
                "height": 872,
                "image": "202_sideDesk/202_cross1.png"
            }, 202);
            chat(10, 202);
            break;
        case "missyLick":
            if (g.internal < 5) {
                nav.killbutton("butthole");
                nav.button({
                    "type": "img",
                    "name": "butthole",
                    "left": 1370,
                    "top": 550,
                    "width": 456,
                    "height": 456,
                    "image": "202_sideDesk/bh" + g.internal + ".png"
                }, 202);
            }
            else {
                nav.killbutton("butthole");
                nav.killbutton("missyLick");
                nav.button({
                    "type": "img",
                    "name": "missyLick",
                    "left": 263,
                    "top": 104,
                    "width": 1667,
                    "height": 976,
                    "image": "202_sideDesk/bent1.png"
                }, 202);
                chat(35, 202);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room202.chatcatch = function (callback) {
    switch (callback) {
        case "kiss":
            nav.killbutton("missyCross");
            nav.button({
                "type": "kiss",
                "name": "missyCross1",
                "left": 646,
                "top": 208,
                "width": 771,
                "height": 872,
                "image": "202_sideDesk/202_foot1.png"
            }, 202);
            break;
        case "kiss1":
            g.pass = "2";
            char.addtime(10);
            break;
        case "kiss2":
            g.pass = "3"
            char.addtime(10);
            break;
        case "leave":
            char.addtime(10);
            sc.setstep("missy", 4);
            char.room(0);
            break;
        case "kissNormalFlow":
            nav.killbutton("missyCross");
            nav.button({
                "type": "kiss",
                "name": "missyCrossNormalFlow",
                "left": 646,
                "top": 208,
                "width": 771,
                "height": 872,
                "image": "202_sideDesk/202_foot1.png"
            }, 202);
            break;
        case "lick1":
            nav.killbutton("missyCrossNormalFlow");
            nav.button({
                "type": "tongue",
                "name": "tongue1",
                "left": 646,
                "top": 208,
                "width": 771,
                "height": 872,
                "image": "202_sideDesk/202_foot1.png"
            }, 202);
            break;
        case "reward":
            nav.killbutton("missyCross");
            nav.button({
                "type": "kiss",
                "name": "missyCrossReward",
                "left": 646,
                "top": 208,
                "width": 771,
                "height": 872,
                "image": "202_sideDesk/202_foot1.png"
            }, 202);
            break;
        case "leaveReward":
            g.mod("money", 45);
            char.addtime(10);
            char.room(0);
            break;
        case "drink":
            nav.button({
                "type": "img",
                "name": "drink",
                "left": 888,
                "top": 369,
                "width": 452,
                "height": 711,
                "image": "202_sideDesk/glass.png"
            }, 202);
            break;
        case "drinkKill":
            nav.killbutton("drink");
            nav.killbutton("missyCross");
            nav.button({
                "type": "img",
                "name": "missyCross",
                "left": 646,
                "top": 208,
                "width": 771,
                "height": 872,
                "image": "202_sideDesk/202_crossBall.png"
            }, 202);
            g.set("bladder", 1);
            g.altview = true;
            g.back = false;
            cl.display();
            break;
        case "footstool":
            nav.killall();
            nav.bg("202_sideDesk/202_sideDesk4s.jpg");
            break;
        case "peeSelf0":
            nav.bg("202_sideDesk/202_sideDesk4s0.jpg");
            break;
        case "peeSelf1":
            g.set("bladder", 0);
            cl.display();
            nav.bg("202_sideDesk/202_sideDesk4s1.jpg");
            break;
        case "peeSelf2":
            nav.bg("202_sideDesk/202_sideDesk4s2.jpg");
            break;
        case "endpeepee":
            cl.undo();
            g.pass = "13end";
            char.room(200);
            break;
        case "passtime":
            char.addtime(45);
            g.mod("arousal", 10);
            nav.bg("202_sideDesk/202_sideDesk4s.jpg");
            break;
        case "passtime1":
            char.addtime(45);
            g.mod("arousal", 10);
            nav.bg("202_sideDesk/sd1.jpg");
            break;
        case "passtime2":
            char.addtime(45);
            g.mod("arousal", 10);
            nav.bg("202_sideDesk/sd4.jpg");
            break;
        case "passtime3":
            char.addtime(45);
            g.mod("arousal", 10);
            nav.bg("202_sideDesk/sd3.jpg");
            break;
        case "passtime4":
            char.addtime(45);
            g.mod("arousal", 10);
            nav.bg("202_sideDesk/sd2.jpg");
            break;
        case "bent":
            nav.killall();
            g.internal = 1;
            nav.button({
                "type": "tongue",
                "name": "missyLick",
                "left": 740,
                "top": 524,
                "width": 698,
                "height": 588,
                "image": "202_sideDesk/bent.png"
            }, 202);
            break;
        case "horneyplus":
            g.mod("arousal", 50);
            break;
        case "endbent":

            char.addtime(360);
            sc.setstep("missy", 21);
            sc.setstep("jeffery", 8);
            g.roomMapAccess(250, true, true);
            char.room(0);
            break;
        case "openmouth2":
            nav.bg("202_sideDesk/openmouth2.jpg");
            break;
        case "openmouth3":
            nav.bg("202_sideDesk/openmouth3.jpg");
            break;
        case "openmouth4":
            nav.bg("202_sideDesk/openmouth4.jpg");
            break;
        case "openmouth5":
            nav.bg("202_sideDesk/openmouth5.jpg");
            break;
        case "openmouth6":
            nav.bg("202_sideDesk/openmouth6.jpg");
            break;
        case "openmouth7":
            nav.bg("202_sideDesk/openmouth7.jpg");
            break;
        case "openmouth8":
            char.addtime(90);
            g.mod("arousal", 10);
            nav.bg("202_sideDesk/openmouth8.jpg");
            break;
        case "openmouthfinish":
            char.addtime(120);
            g.pass = "openmouthfinish";
            char.room(200);
            break;
        case "repeatdildomouthfinish":
            char.addtime(120);
            g.pass = "repeatdildomouthfinish";
            char.room(200);
            break;
        case "pose2":
            nav.bg("202_sideDesk/pose2.jpg");
            break;
        case "pose3":
            nav.bg("202_sideDesk/pose3.jpg");
            break;
        case "pose4":
            nav.bg("202_sideDesk/pose4.jpg");
            break;
        case "pose5":
            nav.bg("202_sideDesk/pose5.jpg");
            break;
        case "pose6":
            nav.bg("202_sideDesk/pose6.jpg");
            break;
        case "pose7":
            nav.bg("202_sideDesk/pose7.jpg");
            break;
        case "pose8":
            nav.bg("202_sideDesk/pose8.jpg");
            break;
        case "pose9":
            nav.bg("202_sideDesk/pose9.jpg");
            break;
        case "pose10":
            nav.bg("202_sideDesk/pose10.jpg");
            break;
        case "pose11":
            cl.c.shirt = "r";
            cl.c.panties = "w";
            cl.c.pants = "k";
            cl.c.shoes = "fb";
            cl.display();
            sc.setstep("missy", 16);
            sc.setstep("me", -9);
            char.addtime(360);
            char.room(0);
            break;
        case "repeatstoolend":
            g.pass = "repeatstoolendend";
            char.room(200);
            break;
        default:
            break;
    }
};

room202.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "It looks like cleaning a bathroom is too advanced for you. I really should fire you on the spot. " +
                "Private Investigation requires some attention to detail that you obviously don't have. ",
            button: [
                { chatID: 1, text: "Please, please, please. I'm sorry ma'am I will try harder. I have to have this job. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "I do find desperation attractive. If you really want to keep this job you have to kiss the bottom of my foot. ",
            button: [
                { chatID: -1, text: "[To kiss her foot click on her foot]", callback: "kiss" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "Good, Again ",
            button: [
                { chatID: -1, text: "OK", callback: "kiss1" }
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "You are such my bitch. Again ",
            button: [
                { chatID: -1, text: "OK", callback: "kiss2" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "Like I said I do find desperation attractive. You really are pathetic aren't you?",
            button: [
                { chatID: 5, text: "What?", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "That's \"Yes ma'am!\" That's 2 mistakes in 1 day. I see you want to be punished. I'll Have to " +
                "come up with something fitting tomorrow. Until then get out. ",
            button: [
                { chatID: -1, text: "Leave her office", callback: "leave" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "You should be proud, you're getting better at cleaning bathrooms. Congratulations on achieving mediocrity." +
                "You may now kiss my foot.",
            button: [
                { chatID: -1, text: "[Kiss her foot]", callback: "kissNormalFlow" }
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "You know my foot is getting dirty and needs to be cleaned. Clean my foot with your tongue.",
            button: [
                { chatID: -1, text: "[Lick her foot clean]", callback: "lick1" }
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "Good Airhead. You're working out very well.",
            button: [
                { chatID: -1, text: "[Leave for the day]", callback: "leaveReward" }
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "Good Airhead. You're learning. Ready for you're reward?",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "reward" }
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "You're welcome, now get out.",
            button: [
                { chatID: -1, text: "Yes ma'am [Leave Office]", callback: "leaveReward" }
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "This lesson is about knowing your place in the world. You seem to believe that your life has some " +
                "significance, that you are meaningful in some way, but that would be incorrect. You exist simply for " +   
                "service. You're lucky because you get to serve me. You'll learn to serve me in many differnt ways, but today " +
                "you will serve as my foot stool for the remainder of the day. ",
            button: [
                { chatID: 12, text: "How do I do that?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "Easy, get on your hands and knees under my desk. Even you should be able to accomplish such a task. " +
                "Since I'm so nice I'm sure you'll get thirsty, have a glass of water to quench yourself. ",
            button: [
                { chatID: 13, text: "Thank you.", callback: "drink" }
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "...",
            button: [
                { chatID: 14, text: "[Drink water]", callback: "drinkKill" }
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "Good. Now I'm going to shove this mouth gag into your mouth so none leaks out. I hate leaky furniture. " +
                "Then take your place under my desk, footstool. ",
            button: [
                { chatID:15, text: "[Get on all 4s]", callback: "footstool" }
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 16, text: "...", callback: "passtime1" }
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 17, text: "....", callback: "passtime2" }
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 18, text: "....", callback: "passtime3" }
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 19, text: "You bladder is feeling painful.", callback: "passtime4" }
            ]
        },
        {
            chatID: 19,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 20, text: "You bladder is feeling is really hurting.", callback: "passtime1" }
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 21, text: "You are bladder is sreaming in pain. You're going to have to pee!", callback: "passtime" }
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 28, text: "[Pee yourself without saying a word]", callback: "peeSelf0" },
                { chatID: 22, text: sc.n("missy") + " I really have to pee!", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 23, text: sc.n("missy") + " please... I really have to pee now!", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "Quiet furniture doens't speak, and it certainly doesn't move.",
            button: [
                { chatID: 28, text: "[Just let it flow...]", callback: "peeSelf0" },
                { chatID: 24, text: "[Try to fight it...]", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 25, text: "[Fight it!!]", callback: "passtime3" }
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 26, text: "[Fight it!!!!]", callback: "passtime" }
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 27, text: "[Fight it!!!!!!]", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 28, text: "[Oh no, you're going to pee yourself!]", callback: "peeSelf0" }
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 29, text: "[I can't stop peeing!!!]", callback: "peeSelf1" }
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "Did you just pee youself!",
            button: [
                { chatID: 30, text: "...yes, I couldn't help it", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "Well, clean it up pee pee girl!!",
            button: [
                { chatID: 31, text: "...yes ma'am", callback: "peeSelf2" }
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "That'll do, get dressed.",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "endpeepee" }
            ]
        },
        {
            chatID: 32,
            speaker: "missy",
            text: "I admit I love a good ass licking. There's just something so electric about it. I generally only  " +
                "allow those serving me this honor as when they've done well, but I'll make an exception this one time. ",
            button: [
                { chatID: -1, text: "Thank you so much ma'am!", callback: "bent" }
            ]
        },
        {
            chatID: 33,
            speaker: "missy",
            text: "Lick it slut.",
            button: [
                { chatID: -1, text: "[Lick her asshole]", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "missy",
            text: "Don't stop, keep licking!!",
            button: [
                { chatID: -1, text: "[Continue licking her asshole]", callback: "horneyplus" }
            ]
        },
        {
            chatID: 35,
            speaker: "missy",
            text: "You did well my personal slut. Maybe I'll reward you again someday. Now go. ",
            button: [
                { chatID: -1, text: "[Leave with your mouth tasting like ass]", callback: "endbent" }
            ]
        },
        {
            chatID: 36,
            speaker: "missy",
            text: "Yes, I suppose you do have a sissy mouth. It still has a long ways to go. You need to do something with " +
                "that hair, some makeup, eyeshadow, and lipstick, but it's a start. Keep your mouth open I'm going to give you " +
                "your first taste on being my sissy slave. ",
            button: [
                { chatID: 37, text: "aaAAAaaa", callback: "openmouth2" }
            ]
        },
        {
            chatID: 37,
            speaker: "missy",
            text: "I've had this in all morning, getting it nice and wet for you. I want to to taste me for the rest of the morning. ",
            button: [
                { chatID: 38, text: "...", callback: "openmouth3" }
            ]
        },
        {
            chatID: 38,
            speaker: "missy",
            text: "You're such a lucky sissy, this dildo is just dripping with my pussy juice.",
            button: [
                { chatID: 39, text: "aaaamMMMmaAAA", callback: "openmouth4" }
            ]
        },
        {
            chatID: 39,
            speaker: "missy",
            text: "There, now you're starting to look like a proper sissy. Now just stay like that while I work on some cases.",
            button: [
                { chatID: 40, text: "aaaamMMMmaAAA", callback: "openmouth5" }
            ]
        },
        {
            chatID: 40,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 41, text: "...", callback: "openmouth6" }
            ]
        },
        {
            chatID: 41,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 42, text: "...", callback: "openmouth7" }
            ]
        },
        {
            chatID: 42,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 43, text: "...", callback: "openmouth8" }
            ]
        },
        {
            chatID: 43,
            speaker: "missy",
            text: "Look at you, you're just a big ol' pathetic drooly mess. Are you ready to quit? ",
            button: [
                { chatID: 44, text: "aaaaAAAA uuuUUhhhhh", callback: "" },
                { chatID: g.isNight() ? 45 : 40, text: "uhhhh hhhhuuuhhhhh", callback: g.isNight() ? "" : "openmouth5" }
            ]
        },
        {
            chatID: 44,
            speaker: "missy",
            text: "Ok you big wimp. I'll take it out now. ",
            button: [
                { chatID: -1, text: "aaaAAAAAAAAAAAaaahhhhh", callback: "openmouthfinish" }
            ]
        },
        {
            chatID: 45,
            speaker: "missy",
            text: "What a sissy! I could tell you're not a normal cock hungry whore, you're going to be special. It's a good thing " +
            "you found me, I'm going to turn you into the greatest sissy cock whore ever! I have to go home now, we'll continue this later. ",
            button: [
                { chatID: -1, text: "...", callback: "openmouthfinish" }
            ]
        },
        {
            chatID: 46,
            speaker: "missy",
            text: "So you may think your best asset is your large cock, but as my sissy your cock only exists as decoration. What " +
            "I'm more interested in is that ass. Now bend over and spread your cheeks, show me your sissy ass. ",
            button: [
                { chatID: 47, text: "yes ma'am", callback: "pose2" }
            ]
        },
        {
            chatID: 47,
            speaker: "me",
            text: "I feel weird spreading my butt cheeks like this.",
            button: [
                { chatID: 48, text: "...", callback: "" }
            ]
        },
        {
            chatID: 48,
            speaker: "missy",
            text: "It's ok. the first time is always weird. That's why we're doing this. In time this will not only feel normal, " +
                "but something you desire. It's your natural position. I'm going to have a lot of fun playing with that sissy pussy " +
            "of yours. ",
            button: [
                { chatID: 49, text: "wha..", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "missy",
            text: "Now that you've had a chance to display yourself, you're going to learn how to do a proper bent over position. " +
                "Get on all 4s then place your face on the floor, but keep that sissy ass up. This is how a sissy lets others know " +
            "she is ready to be used. Now get to it.",
            button: [
                { chatID: 50, text: "Yes ma'am", callback: "pose3" }
            ]
        },
        {
            chatID: 50,
            speaker: "missy",
            text: "Yes, you're a natural at this. Usually it takes a few times for a sissy to get the proper arc, but you " +
            "just get it.",
            button: [
                { chatID: 51, text: "Thank you ma'am", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "missy",
            text: "You display yourself well, but looking like a sissy whore isn't all you do. It's time for you to start acting like one. " +
            "Get on your knees again and open your mouth. I'll be right back...",
            button: [
                { chatID: 66, text: "Yes ma'am", callback: "pose4" }
            ]
        },
        {
            chatID: 52,
            speaker: "missy",
            text: "You are such a lucky sissy to taste my pussy again. ",
            button: [
                { chatID: 53, text: "aaAAAAaa hhhHHHuuuuHHH", callback: "openmouth2" }
            ]
        },
        {
            chatID: 53,
            speaker: "missy",
            text: "I knew you would be coming in, so I've been playing with pussy to get it nice and wet for you",
            button: [
                { chatID: 54, text: "aaaaaAAAa", callback: "openmouth4" }
            ]
        },
        {
            chatID: 54,
            speaker: "missy",
            text: "There, now you just hold that in your mouth while I do some work.",
            button: [
                { chatID: 55, text: "aaaMMMmmm mmmMM", callback: "openmouth5" }
            ]
        },
        {
            chatID: 55,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 56, text: "aaaMMMmmm mmmMM", callback: "openmouth6" }
            ]
        },
        {
            chatID: 56,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 57, text: "aaaMMMmmm mmmMM", callback: "openmouth7" }
            ]
        },
        {
            chatID: 57,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 58, text: "aaaMMMmmm mmmMM", callback: "openmouth8" }
            ]
        },
        {
            chatID: 58,
            speaker: "missy",
            text: "Look at you, you're just a big ol' pathetic drooly mess. Are you ready to quit? ",
            button: [
                { chatID: 59, text: "aaaaAAAA uuuUUhhhhh", callback: "" },
                { chatID: g.isNight() ? 60 : 55, text: "uhhhh hhhhuuuhhhhh", callback: g.isNight() ? "" : "openmouth5" }
            ]
        },
        {
            chatID: 59,
            speaker: "missy",
            text: "Ok you big wimp. I'll take it out now. ",
            button: [
                { chatID: -1, text: "aaaAAAAAAAAAAAaaahhhhh", callback: "repeatdildomouthfinish" }
            ]
        },
        {
            chatID: 60,
            speaker: "missy",
            text: "You really love having a pussy flavored cock in your mouth don't you! You're such a cuck sissy!",
            button: [
                { chatID: -1, text: "aaaAAAAAAAAAAAaaahhhhh", callback: "repeatdildomouthfinish" }
            ]
        },
        {
            chatID: 61,
            speaker: "missy",
            text: "No water for you this time piss boy",
            button: [
                { chatID: 62, text: "...", callback: "passtime1" }
            ]
        },
        {
            chatID: 62,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 63, text: "...", callback: "passtime2" }
            ]
        },
        {
            chatID: 63,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 64, text: "...", callback: "passtime3" }
            ]
        },
        {
            chatID: 64,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 65, text: "...", callback: "passtime4" }
            ]
        },
        {
            chatID: 65,
            speaker: "missy",
            text: "That will do pig, that will do",
            button: [
                { chatID: -1, text: "...", callback: "repeatstoolend" }
            ]
        },
        {
            chatID: 66,
            speaker: "me",
            text: "I wonder what she's up to this time....",
            button: [
                { chatID: 67, text: "Yes ma'am", callback: "pose5" }
            ]
        },
        {
            chatID: 67,
            speaker: "missy",
            text: "I have a treat for you my little sissy. I bet you like whip cream, don't you. I like my little sissys full of cream.",
            button: [
                { chatID: 68, text: "huh...", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "missy",
            text: "I'm going to give you a taste of cream on my giant cock my little sissy. You're going to suck up all the cream on my cock. " +
            "Since this is your first time I won't make you clean it all the way to my pussy, aren't I nice? Now open your mouth clean my cock up.",
            button: [
                { chatID: 69, text: "[Open your mouth]", callback: "pose6" }
            ]
        },
        {
            chatID: 69,
            speaker: "missy",
            text: "Get ready to swollow my yummy cream sissy.",
            button: [
                { chatID: 70, text: "aaAAAAAAA", callback: "pose7" }
            ]
        },
        {
            chatID: 70,
            speaker: "missy",
            text: "Oh yes sissy open your throat, take it deeper. You're not even halfway there.",
            button: [
                { chatID: 71, text: "Ughh gackkkkk ", callback: "pose8" }
            ]
        },
        {
            chatID: 71,
            speaker: "missy",
            text: "You're almost there slut, take it deeper!",
            button: [
                { chatID: 72, text: "Ughh gackkkkk ", callback: "pose9" }
            ]
        },
        {
            chatID: 72,
            speaker: "missy",
            text: "Is that all you have? What a failure, I'm so disappointed, but I guess it's a start. No more cream for you. ",
            button: [
                { chatID: 73, text: "Ughh gackkkkk ", callback: "pose10" }
            ]
        },
        {
            chatID: 73,
            speaker: "missy",
            text: "Clean yourself up and get out of my sight. I have a special assignment for you next time you come in. Now thank me and get out.",
            button: [
                { chatID: -1, text: "Thank you mistress ", callback: "pose11" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};