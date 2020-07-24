 //Sister's Room
var room13 = {};

room13.main = function () {
    var btnList = new Array();

    if (g.hourBetween(22, 25) || g.hourBetween(0, 5)) {
        nav.bg("13_sisterRoom/13_sisterRomSleep.png", "13_sisterRoom/13_sisterRomSleep.png");
        btnList = [{
            "type": "btn",
            "name": "bed",
            "left": 1039,
            "top": 527,
            "width": 543,
            "height": 288,
            "image": "13_sisterRoom/13_bedFar.png"
        }];
    }
    else {
        if (sc.sister().thisRoom) {
            btnList = [{
                "type": "btn",
                "name": "lola",
                "left": 1449,
                "top": 260,
                "width": 215,
                "height": 820,
                "image": "13_sisterRoom/13_lola_reading.png"
            },
            {
                "type": "btn",
                "name": "eva",
                "left": 760,
                "top": 295,
                "width": 291,
                "height": 785,
                "image": "13_sisterRoom/13_eva_sitting.png"
            }];
        }
        else {
            btnList = [
                {
                    "type": "btn",
                    "name": "dresser",
                    "left": 907,
                    "top": 288,
                    "width": 226,
                    "height": 315,
                    "image": "13_sisterRoom/13_dresser.png",
                    "night": "13_sisterRoom/13_dresserNight.png"
                }];
            if (!cl.hasClothing("panties", "w")){
                btnList.push({
                    "type": "btn",
                    "name": "laundry",
                    "left": 1642,
                    "top": 769,
                    "width": 205,
                    "height": 98,
                    "image": "13_sisterRoom/13_laundry.png",
                    "night": "13_sisterRoom/13_laundryNight.png"
                });
            }
        }
    }

    navList = [11];

    $.each(btnList, function (i, v) {
        nav.button(v, 13);
    });

    nav.buildnav(navList);
};

room13.btnclick = function (name) {
    switch (name) {
        case "laundry":
            if (!cl.hasClothing("panties", "w"))
                nav.button({
                    "type": "btn",
                    "name": "panties",
                    "left": 611,
                    "top": 162,
                    "width": 1004,
                    "height": 757,
                    "image": "13_sisterRoom/panties.png"
                }, 13);
            else
                chat(4, 13);
            break;
        case "panties":
            if (sc.checkevent("me", -2))
                chat(6, 13);
            else
                chat(5, 13);
            break;
        case "dresser":
            nav.killall();
            nav.bg("13_sisterRoom/013_pantyDrawer.png");
            chat(0, 13);
            break;
        case "lola":
            var lolaSetp = sc.getstep("lola");
            if (g.checkflag("lolaDayEvent")) {
                chat(17, 13);
            }
            else {
                switch (lolaSetp) {
                    case 0:
                        chat(11, 13);
                        break;
                    case 1:
                        chat(12, 13);
                        break;
                    case 2:
                        chat(20, 13);
                        break;
                    case 3:
                        chat(28, 13);
                        break;
                    case 4:
                        var hour = g.dt.getHours() + (g.dt.getMinutes() / 60);
                        if (sc.step("eva") < 3)
                            chat(30, 13);
                        else if (!inv.has("wine"))
                            chat(32, 13);
                        else if (hour.between(17, 22))
                            chat(36, 13);
                        else
                            chat(34, 13);
                        break;
                    case 5:
                        chat(40, 13);
                        break;
                    case 6:
                        chat(49, 13);
                        break;
                    case 7:
                        if (cl.hasClothing("panties", "w")) {
                            if (g.hourBetween(17, 23))
                                chat(75, 13);
                            else
                                chat(74, 13);
                        }
                        else {
                            chat(70, 13);
                        }

                        break;
                }
            }
            break;
        case "eva":
            var evaStep = sc.getstep("eva");
            if (g.checkflag("evaDayEvent")) {
                chat(19, 13);
            }
            else {
                switch (evaStep) {
                    case 0:
                        chat(8, 13);
                        break;
                    case 1:
                        chat(18, 13);
                        break;
                    case 2:
                        chat(23, 13);
                        break;
                    case 3:
                        var hour3 = g.dt.getHours() + (g.dt.getMinutes() / 60);
                        if (sc.step("lola") < 4)
                            chat(31, 13);
                        else if (!inv.has("wine"))
                            chat(32, 13);
                        else if (hour3.between(17, 22))
                            chat(36, 13);
                        else
                            chat(34, 13);
                        break;
                    case 4:
                        chat(42, 13);
                        break;
                    case 5:
                        chat(54, 13);
                        break;
                    case 6:
                        if (cl.hasClothing("panties", "w")) {
                            if (g.hourBetween(17, 23))
                                chat(75, 13);
                            else
                                chat(73, 13);
                        }
                        else {
                            chat(64, 13);
                        }
                        break;
                    default:
                        break;
                }
            }
            break;
        case "bed":
            nav.killbutton("bed");
            nav.bg("13_sisterRoom/13_bedBG.png", "13_sisterRoom/13_bedBG.png");
            nav.button({
                "type": "img",
                "name": "pjs",
                "left": 985,
                "top": 93,
                "width": 485,
                "height": 883,
                "image": "13_sisterRoom/13_pjs.png"
            }, 13);
            nav.button({
                "type": "btn",
                "name": "sheet1",
                "left": 904,
                "top": 259,
                "width": 716,
                "height": 801,
                "image": "13_sisterRoom/13_sheet1.png"
            }, 13);
            break;
        case "sheet1":
            nav.killbutton("sheet1");
            nav.button({
                "type": "btn",
                "name": "sheet2",
                "left": 904,
                "top": 386,
                "width": 716,
                "height": 674,
                "image": "13_sisterRoom/13_sheet2.png"
            }, 13);
            break;
        case "sheet2":
            nav.killbutton("sheet2");
            nav.button({
                "type": "btn",
                "name": "sheet3",
                "left": 904,
                "top": 582,
                "width": 716,
                "height": 478,
                "image": "13_sisterRoom/13_sheet3.png"
            }, 13);
            break;
        case "sheet3":
            nav.killbutton("sheet3");
            nav.killbutton("pjs");
            nav.button({
                "type": "btn",
                "name": "pjs",
                "left": 985,
                "top": 93,
                "width": 485,
                "height": 883,
                "image": "13_sisterRoom/13_pjs.png"
            }, 13);
            break;
        case "pjs":
            nav.killbutton("pjs");
            nav.bg("13_sisterRoom/trouble_pj1.jpg");
            chat(63, 13);
            break;
        case "br5Panties1":
            nav.killbutton("br5Panties1");
            nav.button({
                "type": "btn",
                "name": "br5Panties2",
                "left": 753,
                "top": 558,
                "width": 994,
                "height": 294,
                "image": "13_sisterRoom/br5Panties2.png "
            }, 13);
            break;
        case "br5Panties2":
            nav.killbutton("br5Panties2");
            nav.bg("13_sisterRoom/013_bedBr5pullUp.jpg");
            chat(85, 13);
            break;
        case "br5Panties3":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_004.gif"
            }, 13);
            g.setflag("lolaDayEvent");
            if (sc.getstep('lola') > 6)
                chat(72, 13);
            else {
                sc.setstep("lola", 7);
                chat(53, 13);
            }
            break;
        default:
            break;
    }
};

room13.chatcatch = function (callback) {
    switch (callback) {
        case "footrub":
            g.setflag("evaDayEvent");
            nav.bg("13_sisterRoom/013_footrubLarge.gif");
            nav.killall();
            cl.horny(30);
            sc.setstep("eva", 3);
            break;
        case "footrub1":
            g.setflag("evaDayEvent");
            nav.bg("13_sisterRoom/013_footrubLarge.gif");
            nav.killall();
            cl.horny(30);
            sc.setstep("eva", 4);
            break;
        case "sucktoes":
            nav.killbutton("footrub");
            nav.bg("13_sisterRoom/013_toeSuck.gif");
            g.internal = cl.c.shirt;
            cl.c.shirt = null;
            cl.display();
            cl.horny(30);
            break;
        case "finishSuckToes":
            cl.c.shirt = g.internal;
            cl.display();
            sc.setstep('eva', 5);
            char.room(13);
            break;
        case "footjob1":
            cl.nude();
            nav.killall();
            nav.bg("13_sisterRoom/013_footjob1.jpg");
            break;
        case "footjob2":
            nav.bg("13_sisterRoom/013_footjob2.jpg");
            break;
        case "footjob3":
            nav.bg("13_sisterRoom/footjob3.gif");
            break;
        case "footjob4":
            cl.doCum(true);
            g.mod("receiveFootjobFemale", 1);
            nav.bg("13_sisterRoom/013_footjob4.jpg");
            break;
        case "footjob5":
            sc.setstep("eva", 6);
            cl.undo();
            char.room(13);
            g.setflag("evaDayEvent");
            char.addtime(30);
            break;
        case "footjob5.5":
            cl.undo();
            char.room(13);
            g.setflag("evaDayEvent");
            char.addtime(30);
            break;
        case 'takePanties':
            cl.list[cl.where("panties", "w")].inv = true;
            break;
        case "killPantyIcon":
            nav.killbutton("panties");
            break;
        case "checkPanties":
            nav.bg("13_sisterRoom/013_angryCaught.png");
            break;
        case "kickOutRoom":
            g.set("enterSister", true);
            char.room(11);
            break;
        case "pullDown":
            nav.killbutton("bed1");
            nav.killbutton("handReach");
            nav.button({
                "type": "img",
                "name": "sleepNaked",
                "left": 894,
                "top": 89,
                "width": 604,
                "height": 951,
                "image": "13_sisterRoom/13_sleeping.png"
            }, 13);
            break;
        case "LeaveKickOut":
            char.addtime(30);
            char.room(11);
            break;
        case "reset":
            char.room(13);
            break;
        case "tord":
            char.room(23);
            break;
        case "lolaDisgust":
            nav.button({
                "type": "btn",
                "name": "lola_laying1",
                "left": 1449,
                "top": 260,
                "width": 215,
                "height": 820,
                "image": "13_sisterRoom/13_lola_reading1.png"
            }, 13);
            break;
        case "lolaOrig":
            nav.killbutton("lola_laying1");
            break;
        case "getBook":
            sc.setstep("eva", 1);
            sc.setstep("lola", 1);
            break;
        case "br1":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 880,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_001.gif "
            }, 13);
            g.setflag("lolaDayEvent");
            sc.setstep("lola", 2);
            cl.horny(15);
            break;
        case "br2":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr.jpg");
            nav.button({
                "type": "btn",
                "name": "br2Shirt",
                "left": 880,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_001_5.gif"
            }, 13);
            g.setflag("lolaDayEvent");
            cl.horny(30);
            sc.setstep("lola", 3);
            break;
        case "br3":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 880,
                "top": 0,
                "width": 772,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_002.gif"
            }, 13);
            g.setflag("lolaDayEvent");
            cl.horny(45);
            sc.setstep("lola", 4);
            break;
        case "br4":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_003.gif"
            }, 13);
            g.setflag("lolaDayEvent");
            sc.setstep("lola", 6);
            break;
        case "br4.5":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_003.gif"
            }, 13);
            g.setflag("lolaDayEvent");
            break;
        case "br5":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedBr5.jpg");
            nav.button({
                "type": "btn",
                "name": "br5Panties1",
                "left": 805,
                "top": 335,
                "width": 881,
                "height": 320,
                "image": "13_sisterRoom/bedBr5Panties1.png "
            }, 13);
            break;
        case "spinTheBottle":
            char.room(24);
            break;
        case "buttRubPantiesOn":
            nav.killall();
            nav.bg("13_sisterRoom/013_bedZoom.jpg");
            nav.button({
                "type": "img",
                "name": "lola_laying1",
                "left": 725,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "13_sisterRoom/013_backrub_004.gif"
            }, 13);
            g.setflag("lolaDayEvent");
            if (sc.getstep('lola') > 6)
                chat(72, 13);
            else {
                sc.setstep("lola", 7);
                chat(53, 13);
            }
            break;
        case "hide":
            nav.killall();
            nav.bg("13_sisterRoom/floor.jpg");
            break;
        case "hide1":
            nav.bg("13_sisterRoom/floor1.jpg");
            break;
        case "hide2":
            nav.bg("13_sisterRoom/floor2.jpg");
            break;
        case "hide3":
            nav.bg("13_sisterRoom/floor3.jpg");
            break;
        case "hide4":
            g.mod("arousal", 40);
            nav.bg("13_sisterRoom/floor4.jpg");
            break;
        case "hide5":
            nav.bg("13_sisterRoom/13_sisterRoom.png");
            break;
        case "hide6":
            char.addtime(360);
            char.room(10);
            break;
        case "peek1":
            nav.bg("13_sisterRoom/peek1.jpg");
            break;
        case "peek2":
            nav.bg("13_sisterRoom/peek2.jpg");
            break;
        case "peek3":
            nav.bg("13_sisterRoom/peek3.jpg");
            break;
        case "peek4":
            cl.add("panties", "w");
            g.internal = "room10pass";
            char.addtime(30);
            char.room(10);
            break;
        default:
            console.log(callback + " - miss");
            break;
    }
};

room13.showChatBox = function () {
    $('.room-chatBox').show();
};

room13.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "So many panties...",
            button: [
                { chatID: 1, text: "Check out " + sc.n("eva") + "'s and " + sc.n("lola") + "'s panties ", callback: "checkPanties" }
            ]
        },
        {
            chatID: 1,
            speaker: "lola",
            text: sc.n("me") + "!!!! what are your doing. Are you going through our panties!!!",
            button: [
                { chatID: 2, text: "....", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "eva",
            text: sc.n("lola") + ", are you surprised. You always knew " + sc.n("me") + " was a dirty perv.",
            button: [
                { chatID: 3, text: "I was just looking for my...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "lola",
            text: "Get out!! Get out get out get out!!!",
            button: [
                { chatID: -1, text: "[Leave]", callback: "kickOutRoom" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Nothing in here but dirty clothes...",
            button: [
                { chatID: -1, text: "Close", callback: "killPantyIcon" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Ewww gross... " + sc.n("lola") + "'s dirty panties.",
            button: [
                { chatID: -1, text: "Close", callback: "killPantyIcon" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Should I take " + sc.n("lola") + "'s dirty panties?",
            button: [
                { chatID: -1, text: "Gross... no", callback: "killPantyIcon" },
                { chatID: 7, text: "yea... ", callback: "takePanties" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "[Panties added to Inventory]",
            button: [
                { chatID: 86, text: "...", callback: "killPantyIcon" }
            ]
        },
        {
            chatID: 8,
            speaker: "eva",
            text: "Hay panty sniffer, can't handle a burger job? ",
            button: [
                { chatID: 9, text: "Eat my boogers " + sc.n("eva"), callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "eva",
            text: "So I have to get a new basic math textbook and it's soooo expensive. Can i use yours since you're not " +
                "using it?",
            button: [
                { chatID: 10, text: "Of course, stop by my room anytime and pick it up", callback: "getBook" },
                { chatID: -1, text: "Get your own book bologna brain", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "eva",
            text: "You're the best, I don't care what they say about you in the boy's locker room.",
            button: [
                { chatID: -1, text: "Better than what they say about you!!", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "I think " + sc.n("eva") + " needs to borrow your math book. ",
            button: [
                { chatID: -1, text: "Oh, she always wants something for free. ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "lola",
            text: "Hay " + sc.n("me") + ". I'm sorry you got fired from the Burger Joint. That manager always so mean. You're " +
                "better off without that stupid job!",
            button: [
                { chatID: 13, text: "Thanks " + sc.n("lola") + ". So how's the first day of college?", callback: "lolaDisgust" }
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "A little hectic and scary. I accidently went to the wrong classroom and I was midway through the lecture before I " +
                "figured it out. On my way out I tripped over some boys bag and the entire classroom started laughing at me!",
            button: [
                { chatID: 14, text: "oh no..", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "lola",
            text: "And to make it worse when I got to the right classroom the teacher scolded me for 10 minutes for being late. She " +
                "didn't even let me explain why! ",
            button: [
                { chatID: 15, text: "That's terrible! I'm sure tomorrow will be better.", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "I hope so. There's no way I'm going back to school if everyday is like this. I dont' suppose you would be " +
                "up to give me a back rub so I feel better?",
            button: [
                { chatID: 16, text: "Of course!", callback: "br1" },
                { chatID: -1, text: "Nope", callback: "lolaOrig" }
            ]
        },
        {
            chatID: 16,
            speaker: "lola",
            text: "MMMmmmmm that feels soooo good " + sc.n("me") + ". Thank you.",
            button: [
                { chatID: -1, text: "You're welcome", callback: "reset" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "Thank you sooo much for the massage " + sc.n("me") + "! Maybe you can give me another tomorrow! ",
            button: [
                { chatID: -1, text: "You're welcome " + sc.n("lola"), callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: "I'll stop by in the morning to pick up the text book",
            button: [
                { chatID: -1, text: "....", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "eva",
            text: "You're welcome you foot fetish weirdo.",
            button: [
                { chatID: -1, text: "I uh....", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "lola",
            text: sc.n("me") + " I could really go for a back rub, if you don't mind.",
            button: [
                { chatID: 21, text: "I'ld love to", callback: "br1" },
                { chatID: -1, text: "Naw.. got stuff to do", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Do you mind if I lift up your shirt and undo your bra strap? It's a much better back rub.",
            button: [
                { chatID: 22, text: "....", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "Oh..... I guess, if you promise not to do anything bad. ",
            button: [
                { chatID: 16, text: "I promise", callback: "br2" }
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "Hay loser. ",
            button: [
                { chatID: 25, text: "Hay butthead", callback: "" },
                { chatID: 24, text: "That's not nice", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "eva",
            text: "Grow a pair sissy boy and rub my feet!",
            button: [
                { chatID: -1, text: "I'm not touching those smelly things", callback: "" },
                { chatID: 26, text: "Sure!", callback: "footrub" }
            ]
        },
        {
            chatID: 25,
            speaker: "eva",
            text: "Hay why don't you make yourself useful and rub my feet. ",
            button: [
                { chatID: -1, text: "I'm not touching those smelly things", callback: "" },
                { chatID: 26, text: "Sure!", callback: "footrub" }
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "If this didn't feel so good there's no way I would let you near my feet you pervert.",
            button: [
                { chatID: 27, text: "I'm not a pervert. I'm just giving you a foot rub.", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "eva",
            text: "Ok butt sniffer. My feet feel great, you're done.. for now.",
            button: [
                { chatID: -1, text: "Haha ok. [Finish]", callback: "reset" }
            ]
        },
        {
            chatID: 28,
            speaker: "lola",
            text: "You were sooo right about a backrub being better without a shirt in the way. Is it ok if you " +
                "give me a backrub without my shirt on?",
            button: [
                { chatID: 29, text: "Of course", callback: "br3" },
                { chatID: -1, text: "No, I'm pretty busy right now", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "You really are the best " + sc.n("me") + "! That was absolutly wonderful",
            button: [
                { chatID: -1, text: "Awwww, you're wonderful", callback: "reset" }
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "I feel guilty about getting so many backrubs. You should give some attention to " + sc.n("eva"),
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "eva",
            text: "Ok you pervert, how about you pay attention to " + sc.n('lola') + " for a bit.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "lola",
            text: "You know, I'm feel like getting a little wild, " + sc.n("me") + " could you get us some wine? ",
            button: [
                { chatID: 33, text: "...", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "eva",
            text: "Oh Yea!!! You should totally get us some wine and stop by at night! It's going to be awesome!!",
            button: [
                { chatID: -1, text: "Ok", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "eva",
            text: "Awesome, you have the wine! " + sc.n('lola') + " you want to drink?",
            button: [
                { chatID: 35, text: "...", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "lola",
            text: "It's far too early to drink, I have too much to do. " + sc.n("me") + " how about you come back after " +
                "5:00 PM and we can have some fun!",
            button: [
                { chatID: -1, text: "Ok, I'll come back after 5:00 PM", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "lola",
            text: "Oh good, you brought the wine! I'm so excited. ",
            button: [
                { chatID: 37, text: "....", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "eva",
            text: "Oh yea! crack that bottle open so we can get some! ",
            button: [
                { chatID: 38, text: "....", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "lola",
            text: "Slow down " + sc.n("eva") + ". How about we play a game? How about spin the bottle? I've always wanted to play, but no one's ever " +
                "invited me to play with them.",
            button: [
                { chatID: 39, text: "Sounds like fun, are you in " + sc.n("eva") + "?", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "eva",
            text: "I'm in, but no cheating your dirty pervert!",
            button: [
                { chatID: -1, text: "Whaaa I would never cheat", callback: "spinTheBottle" }
            ]
        },
        {
            chatID: 40,
            speaker: "lola",
            text: "My legs are pretty sore from swimming. Would you mind rubbing those instead of my back? " +
                "It would mean so much to me.",
            button: [
                { chatID: 41, text: "Sure, It may be pretty hard to give a good let rub with your skirt on.", callback: "" },
                { chatID: -1, text: "Sorry, I've got stuff to do.", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "lola",
            text: "Oh. I suppose you're right. You don't mind seeing me in just my panties do you?",
            button: [
                { chatID: 16, text: "I will be fine. I'll give you a great leg massage. [Give Massage]", callback: "br4" }
            ]
        },
        {
            chatID: 42,
            speaker: "eva",
            text: "How about a foot rub, and if you do a good job I have a perverted reward for you.",
            button: [
                { chatID: 44, text: "I like perverted rewards", callback: "footrub1" },
                { chatID: -1, text: "No, I've gotta run", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "me",
            text: "no op - skip number",
            button: []
        },
        {
            chatID: 44,
            speaker: "eva",
            text: "I can tell you've been working out, if you take off your shirt and show me your bod I'll let you suck my toes.",
            button: [
                { chatID: 45, text: "uhhh what?", callback: "" }
            ]
        },
        {
            chatID: 45,
            speaker: "eva",
            text: "I've always wanted to see what it's like to get my toes sucked. If you take off your shirt I'll let " +
                "you suck them. I know a pervert like you wants to taste my toes",
            button: [
                { chatID: 46, text: "Don't you think it will be weird to suck your toes in from of " + sc.n('lola'), callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "lola",
            text: "You're fine. The thing about " + sc.n('el') + " is that they see all the weird stuff each other do. ",
            button: [
                { chatID: 48, text: "Ok " + sc.n('eva') + " I'll do it [Take off shirt]", callback: "sucktoes" }
            ]
        },
        {
            chatID: 47,
            speaker: "me",
            text: "no op",
            button: []
        },
        {
            chatID: 48,
            speaker: "eva",
            text: "Hahaha that feels weird.... Stop peeking at my panties you big freak. ",
            button: [
                { chatID: -1, text: "[Finish sucking her toes]", callback: "finishSuckToes" }
            ]
        },
        {
            chatID: 49,
            speaker: "lola",
            text: "Since you are such a gentleman, and a great masseuse, do you mind rubbing my legs again? Please... ",
            button: [
                { chatID: 50, text: "Of course", callback: "br4" },
                { chatID: -1, text: "Sorry " + sc.n('lola') + ", got stuff to do", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "lola",
            text: "MMmmmm you are just so amazing. I pulled my butt muscle the other day, but I've been too embarrassed " +
                "to ask you to massage it. Could you rub it for me?",
            button: [
                { chatID: 51, text: "Yes, but I think your panties will be in the way, can I take them off to give you a better massage?", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "lola",
            text: "I think that will be ok. " + sc.n('eva') + ", you don't mind if I take off my panties to do you?",
            button: [
                { chatID: 52, text: "...", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "eva",
            text: "Hahaha, you try and act so proper when other people are around. Just take your panties off. ",
            button: [
                { chatID: -1, text: "I'll help you with those " + sc.n('lola'), callback: "br5" }
            ]
        },
        {
            chatID: 53,
            speaker: "lola",
            text: "You really are the best, thanks for being a gentleman. ",
            button: [
                { chatID: -1, text: "[Finish the butt massage]", callback: "reset" }
            ]
        },
        {
            chatID: 54,
            speaker: "eva",
            text: "So freak, me and " + sc.n('lola') + " have been talking, and since you've been so nice to " +
                "us I'm going to give you a perverts reward. ",
            button: [
                { chatID: 55, text: "A reward?", callback: "" },
                { chatID: -1, text: "Thanks, but I have stuff to do", callback: "" }
            ]
        },
        {
            chatID: 55,
            speaker: "lola",
            text: "Yeah, you've been so nice, we thought you deserve a little something extra.",
            button: [
                { chatID: 56, text: "...", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "eva",
            text: "So here's the deal, we're not going to have sex with you, or put your penis in our mouths, but I know " +
                "how much guys like to come, so I'm willing to rub it with my feet.",
            button: [
                { chatID: 57, text: "Huh? Like a foot job?", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "eva",
            text: "Yeah dummy. So if you want one take off your clothes and sit down.",
            button: [
                { chatID: 58, text: "Oh! OK [Take off clothes]", callback: "footjob1" }
            ]
        },
        {
            chatID: 58,
            speaker: "eva",
            text: "So this is what your dick looks like. Not bad, you should be proud of yourself. I've seen " +
                "bigger, but not very many. Are you ready?",
            button: [
                { chatID: 59, text: "So very ready", callback: "footjob2" }
            ]
        },
        {
            chatID: 59,
            speaker: "eva",
            text: "Whatever you do, just don't cum on me; I've already taken a shower.",
            button: [
                { chatID: 60, text: "I promise", callback: "footjob3" }
            ]
        },
        {
            chatID: 60,
            speaker: "me",
            text: "oooOOooohh mmmMMMMmmmmmmmmmmmm",
            button: [
                { chatID: 61, text: "[Cum]", callback: "footjob4" }
            ]
        },
        {
            chatID: 61,
            speaker: "eva",
            text: "Oh gross!!! You said you wouldn't get any one me! Blech",
            button: [
                { chatID: 62, text: "Oh my bad, I can't control that thing", callback: "" }
            ]
        },
        {
            chatID: 62,
            speaker: "eva",
            text: "Just put your clothes back on while I wipe up my feet you dirty pervert",
            button: [
                { chatID: -1, text: "Oh yea.", callback: "footjob5" }
            ]
        },
        {
            chatID: 63,
            speaker: "lola",
            text: "AAAAAAAAAAAAAaaaaaaaaaaaaaaaaaaaa",
            button: [
                { chatID: 83, text: "....", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "eva",
            text: "Did you want me to rub your weiner with my feet again pervert?",
            button: [
                { chatID: 65, text: "Oh yes!", callback: "" },
                { chatID: -1, text: "No, gotta run", callback: "" }
            ]
        },
        {
            chatID: 65,
            speaker: "eva",
            text: "Ok, strip",
            button: [
                { chatID: 66, text: "[Remove all your clothes]", callback: "footjob1" }
            ]
        },
        {
            chatID: 66,
            speaker: "eva",
            text: "Squishy Squishy",
            button: [
                { chatID: 67, text: "...", callback: "footjob2" }
            ]
        },
        {
            chatID: 67,
            speaker: "eva",
            text: "You have the dumbest perverted look in your eyes.",
            button: [
                { chatID: 68, text: "...", callback: "footjob3" }
            ]
        },
        {
            chatID: 68,
            speaker: "eva",
            text: "Oh yeah cum for me you sick twisted panty sniffer!",
            button: [
                { chatID: 69, text: "...", callback: "footjob4" }
            ]
        },
        {
            chatID: 69,
            speaker: "eva",
            text: "I don't really mind having your cum cover my feet. I'm starting to get used to it. I just rub it into my skin " +
                "and it disappears. ",
            button: [
                { chatID: -1, text: "...", callback: "footjob5.5" }
            ]
        },
        {
            chatID: 70,
            speaker: "lola",
            text: "Hi " + sc.n("me") + ". I hate to ask, but could you massage my glutes again? " + sc.n("eva") + " said " +
                "she was too busy playing on her phone. ",
            button: [
                { chatID: 71, text: "Anything for you.", callback: "br4.5" },
                { chatID: -11, text: "Sorry, far too busy!", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "lola",
            text: "You can take my panties off, it feels so much better with a skin to skin massage.",
            button: [
                { chatID: -1, text: "[Remove " + sc.n('lola') + "'s panties]", callback: "br5" }
            ]
        },
        {
            chatID: 72,
            speaker: "lola",
            text: "You really know how to work a butt!",
            button: [
                { chatID: -1, text: "You bet I do", callback: "reset" }
            ]
        },
        {
            chatID: 73,
            speaker: "eva",
            text:  sc.n('lola') + " and I have a game we've always wanted to play with a boy, you should come back tonight!",
            button: [
                { chatID: -1, text: "Sounds awesome, see you tonight", callback: "" }
            ]
        },
        {
            chatID: 74,
            speaker: "lola",
            text: "We're so excited to play truth or dare with a boy! Come back tonight so we can play!",
            button: [
                { chatID: -1, text: "Sounds awesome, see you tonight", callback: "" }
            ]
        },
        {
            chatID: 75,
            speaker: "eva",
            text: "Hay panty theif, me and " + sc.n("lola") + " wanted to play truth or dare. Are you down for a game?",
            button: [
                { chatID: 76, text: "Oh course!!!", callback: "" },
                { chatID: -1, text: "I'm pretty busy, some other time maybe. ", callback: "" }
            ]
        },
        {
            chatID: 76,
            speaker: "lola",
            text: "Oh good! Let's play!",
            button: [
                { chatID: -1, text: "[Play truth or dare]", callback: "tord" }
            ]
        },
        {
            chatID: 77,
            speaker: "eva",
            text: "Hahaha you will once you see how dirty " + sc.n('lola') + "'s panties get after she works out! All those " +
                "muscle guys in the gym really make her leak!",
            button: [
                { chatID: 78, text: "...", callback: "" }
            ]
        },
        {
            chatID: 78,
            speaker: "lola",
            text: sc.n("eva") + "! I do not leak!",
            button: [
                { chatID: 79, text: "...", callback: "" }
            ]
        },
        {
            chatID: 79,
            speaker: "eva",
            text: "Hahaha, sometimes she pees a little too! ",
            button: [
                { chatID: 80, text: "...", callback: "" }
            ]
        },
        {
            chatID: 80,
            speaker: "lola",
            text: "It's perfectly normal to pee a little sometimes! Besides it's always just a tiny squirt!",
            button: [
                { chatID: 81, text: "...", callback: "" }
            ]
        },
        {
            chatID: 81,
            speaker: "eva",
            text: "We've been looking for a while, why don't we just play some truth or dare then look for them after?",
            button: [
                { chatID: 82, text: "...", callback: "" }
            ]
        },
        {
            chatID: 82,
            speaker: "lola",
            text: "Ok, let play, I'm sure they'll turn up!",
            button: [
                { chatID: -1, text: "[Play Truth or Dare]", callback: "tord" }
            ]
        },
        {
            chatID: 83,
            speaker: "eva",
            text: "What the hell you pervert!!!! ",
            button: [
                { chatID: 84, text: "I uh wha.... uh", callback: "" }
            ]
        },
        {
            chatID: 84,
            speaker: "eva",
            text: "GET OUT, GET OUT, GET OUT, GET OUT, GET OUT GET OUT!!!",
            button: [
                { chatID: -1, text: "Oh yea.... [Leave]", callback: "LeaveKickOut" }
            ]
        },
        {
            chatID: 85,
            speaker: "lola",
            text: "On second thought, maybe these should stay on. I don't want you to get the wrong idea about me. ",
            button: [
                { chatID: -1, text: "Oh sure", callback: "buttRubPantiesOn" }
            ]
        },
        {
            chatID: 86,
            speaker: "me",
            text: "Oh crap I hear them at the door!",
            button: [
                { chatID: 87, text: "HIDE UNDER THE BED!!!", callback: "hide" }
            ]
        },
        {
            chatID: 87,
            speaker: "lola",
            text: "OMG " + sc.n("eva") + " you we're awesome! I don't think I've ever cum that hard before. ",
            button: [
                { chatID: 88, text: "I can hear them talking", callback: "" }
            ]
        },
        {
            chatID: 88,
            speaker: "eva",
            text: "No one has better tongue action than me! I can still taste you in my mouth... MMMmmMMmmmmmm",
            button: [
                { chatID: 89, text: "Huh...", callback: "hide1" }
            ]
        },
        {
            chatID: 89,
            speaker: "lola",
            text: "I'm still so turned on.. You know I do owe you one..",
            button: [
                { chatID: 90, text: "...", callback: "hide2" }
            ]
        },
        {
            chatID: 90,
            speaker: "eva",
            text: "I've got something better. Use this vibrator on my clit, maybe finger my butthole?",
            button: [
                { chatID: 91, text: "Is that the sounds of a vibrator I hear?", callback: "hide3" }
            ]
        },
        {
            chatID: 91,
            speaker: "lola",
            text: "I love that. ....Oh hahah whoops, I dropped it. ",
            button: [
                { chatID: 92, text: "Crap! Don't look under the bed, don't look under the bed", callback: "hide4" }
            ]
        },
        {
            chatID: 92,
            speaker: "eva",
            text: "I got it. Now how about you use it on me!",
            button: [
                { chatID: 93, text: "....", callback: "hide" }
            ]
        },
        {
            chatID: 93,
            speaker: "lola",
            text: "How's my finger, it's so warm. I'm glad you're just so naturally clean. Hehehe I can feel it vibrate all the way throgh " +
            "you're pussy. ",
            button: [
                { chatID: 94, text: "....", callback: "" }
            ]
        },
        {
            chatID: 94,
            speaker: "eva",
            text: "OOOoooOOOooooohhh yyyyyyeeesssssssssssss",
            button: [
                { chatID: 95, text: "....", callback: "" }
            ]
        },
        {
            chatID: 95,
            speaker: "lola",
            text: "**lick** MMmmMMM **lick** mmMMMMMMMMmmmmmmmmm",
            button: [
                { chatID: 96, text: "Don't peek", callback: "" },
                { chatID: 99, text: "Take a peek", callback: "peek1" }
            ]
        },
        {
            chatID: 96,
            speaker: "eva",
            text: "ooOOooohhh OOOooooooooooooooooohhh fuck! I'm cumming, can you feel my pussy tighten around your tongue? Fuck you are good!",
            button: [
                { chatID: 97, text: "...", callback: "" }
            ]
        },
        {
            chatID: 97,
            speaker: "eva",
            text: "That was fun! Lets get dressed and get out of here.",
            button: [
                { chatID: 98, text: "Thank god", callback: "hide5" }
            ]
        },
        {
            chatID: 98,
            speaker: "me",
            text: "Oh good they're gone. I've got to get out of here!",
            button: [
                { chatID: -1, text: "...", callback: "hide6" }
            ]
        },
        {
            chatID: 99,
            speaker: "eva",
            text: "ooOOooohhh OOOooooooooooooooooohhh fuuuuuuuck! I'm cumming!",
            button: [
                { chatID: 100, text: "...", callback: "peek2" }
            ]
        },
        {
            chatID: 100,
            speaker: "lola",
            text: sc.n("me") + "!!! What the hell!",
            button: [
                { chatID: 101, text: "ahh crap...", callback: "peek3" }
            ]
        },
        {
            chatID: 101,
            speaker: "eva",
            text: sc.n("me") + "!!! Way to ruin an orgasm! ",
            button: [
                { chatID: 102, text: "...", callback: "" }
            ]
        },
        {
            chatID: 102,
            speaker: "lola",
            text: "Why are you hiding under our bed! That's so rude ",
            button: [
                { chatID: 103, text: "oh.. uh um", callback: "" }
            ]
        },
        {
            chatID: 103,
            speaker: "eva",
            text: "He was hiding there to perv on us",
            button: [
                { chatID: 104, text: "well", callback: "" }
            ]
        },
        {
            chatID: 104,
            speaker: "lola",
            text: "Oh my. That's so rude.",
            button: [
                { chatID: 105, text: "yea", callback: "" }
            ]
        },
        {
            chatID: 105,
            speaker: "eva",
            text: "Don't worry " + sc.n("lola") + " I have a plan. " + sc.n("me") + " you go wait in your room while we get dressed. " +
            "You better do it or we'll tell " + sc.n("landlord") + ".",
            button: [
                { chatID: -1, text: "sigh, ok", callback: "peek4" }
            ]
        },
    ];

    return cArray[chatID];
};