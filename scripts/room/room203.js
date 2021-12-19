//Cecillia close up
var room203 = {};
room203.main = function () {
    var missyStep = sc.getstep("missy");
    if (missyStep === 100) {
        nav.bg("203_entrance/m100.jpg");
        chat(41, 203);
    }
    else if (missyStep > 100) {
        nav.button({
            "type": "btn",
            "name": "door100",
            "left": 390,
            "top": 189,
            "width": 414,
            "height": 509,
            "image": "203_entrance/door.png"
        }, 203);
        nav.buildnav([201, 207, 0]);
    }
    else if (g.sissy[16].ach) {
        if (g.hourBetween(7, 12)) {
            nav.button({
                "type": "btn",
                "name": "door",
                "left": 390,
                "top": 189,
                "width": 414,
                "height": 509,
                "image": "203_entrance/door.png"
            }, 203);
        }
        nav.buildnav([201, 207, 0]);
    }
    else {
        var navList = [0];
        var btnList = new Array();
        if (g.pass === "takeItBitch") {
            nav.bg("203_entrance/203_frontDeskCloseup.jpg");
            btnList = [{
                "type": "btn",
                "name": "fooIgnore",
                "left": 685,
                "top": 302,
                "width": 452,
                "height": 593,
                "image": "203_entrance/203_enterRecepClose.png"
            }];
            chat(5, 203);
            g.pass = "";
            $.each(btnList, function (i, v) {
                nav.button(v, 203);
            });
        }
        else if (g.pass === "leave11") {
            g.pass = "";
            navList = [201, 0];
            btnList = [{
                "type": "btn",
                "name": "recep",
                "left": 1145,
                "top": 352,
                "width": 162,
                "height": 197,
                "image": "203_entrance/203_enterRecep.png"
            }];
            $.each(btnList, function (i, v) {
                nav.button(v, 203);
            });
            chat(19, 203);
        }
        else if (sc.cecilia().thisRoom) {
            g.pass = "203Elevator";
            navList = [201, 207, 0];
            if (g.sissy[54].ach)
                navList = [201, 207, 209, 0];
            btnList = [{
                "type": "btn",
                "name": "recep",
                "left": 1145,
                "top": 352,
                "width": 162,
                "height": 197,
                "image": "203_entrance/203_enterRecep.png"
            }];
            $.each(btnList, function (i, v) {
                nav.button(v, 203);
            });
        }
        else
            chat(0, 203);

        nav.buildnav(navList);
    }
};

room203.btnclick = function (name) {
    var misssyStep = sc.getstep("missy");
    switch (name) {
        case "recep":
            nav.killall();
            nav.bg("203_entrance/203_frontDeskCloseup.jpg");
            nav.button({
                "type": "btn",
                "name": "recepClose",
                "left": 781,
                "top": 172,
                "width": 603,
                "height": 759,
                "image": "203_entrance/203_enterRecepClose.png"
            }, 203);
            nav.buildnav([201, 0]);
            break;
        case "recepClose":
            if (g.internal === "teatime") {
                chat(29, 203);
            }
            else if (misssyStep === 1) {
                chat(1, 203);
            }
            else if (misssyStep === 7) {
                chat(13, 203);
            }
            else if (misssyStep > 9) {
                var oncase = g.get("oncase");
                if (oncase === null)
                    chat(28, 203);
                else if (oncase === "diner")
                    chat(34, 203);
                else if (oncase === "dinerfail" || oncase === "dinersuccess")
                    chat(35, 203);
                else if (oncase === "gloryholebj")
                    chat(38, 203);
                else {
                    alert("forgot one");
                    char.room(0);
                }
            }
            else if (misssyStep < 1000) {
                if (g.dt.getHours() > 6 && g.dt.getHours() < 10) {
                    if (misssyStep === 2)
                        chat(7, 203);
                    else {
                        chat(11, 203);
                    }
                }
                else {
                    chat(6, 203);
                }
            }
            //else if (misssyStep > 24) {
            //    if (sc.checkevent("missy", -1) && !sc.checkevent("missy", -2)) {
            //        if (g.hourBetween(7, 10))
            //            chat(10, 203);
            //        else
            //            chat(6, 203);
            //    }
            //    else
            //        chat(27, 203);
            //}
            
            break;
        case "door":
            if (inv.has("redbox"))
                char.room(200);
            else {
                var oncasex = g.get("oncase");
                if (oncasex === null)
                    chat(39, 203);
                else if (oncasex === "diner")
                    chat(40, 203);
                else if (oncasex === "dinerfail" || oncasex === "dinersuccess")
                    char.room(200);
                else if (oncasex === "gloryholebj")
                    chat(40, 203);
                else {
                    chat(37, 203);
                }
                
            }
            break;
        case "door100":
            chat(47, 203);
            break;
        
        default:
            break;
    }
};

room203.chatcatch = function (callback) {
    var missyStep = sc.getstep("missy");
    var hasSuit = cl.c.shoes === "d" && cl.c.pants === "s" && cl.c.shirt === "s" && cl.c.socks === "b";
    var hasGirlSuit = cl.c.shoes === "fb" && cl.c.pants === "k" && cl.c.shirt === "r" && cl.c.socks === null;
    switch (callback) {
        case "enter":
            char.room(200);
            break;
        case "leave":
            char.room(0);
            break;
        case "checkLic":
            if (inv.has("pi_lic"))
                chat(4, 203);
            else
                chat(2, 203);
            break;
        case "displaySelf":
            if (missyStep < 11) {
                if (!hasSuit) {
                    chat(9, 203);
                }
                else {
                    nav.killall();
                    nav.bg("203_entrance/203_enter.jpg");
                    nav.killbutton("zzz-clothing-kill");
                    zcl.displayClothed();
                    nav.button({
                        "type": "img",
                        "name": "recepLook",
                        "left": 1060,
                        "top": 562,
                        "width": 731,
                        "height": 518,
                        "image": "203_entrance/kneel.png"
                    }, 203);
                    if (missyStep > 8)
                        chat(15, 203);
                    else if (g.get("arousal") > 90)
                        chat(22, 203);
                    else
                        chat(10, 203);
                }
            }
            else {
                if (!hasGirlSuit) {
                    chat(21, 203);
                }
                else if (missyStep === 6) {
                    if (cl.c.accessories.indexOf("piggy") === -1) {
                        chat(12, 203);
                    }
                    else {
                        nav.killall();
                        nav.bg("203_entrance/203_enter.jpg");
                        zcl.displayClothed();
                        nav.button({
                            "type": "img",
                            "name": "recepLook",
                            "left": 1060,
                            "top": 562,
                            "width": 731,
                            "height": 518,
                            "image": "203_entrance/kneel.png"
                        }, 203);
                        chat(10, 203);
                    }
                }
                else {
                    nav.killall();
                    nav.bg("203_entrance/203_enter.jpg");
                    nav.killbutton("zzz-clothing-kill");
                    zcl.displayClothed();
                    nav.button({
                        "type": "img",
                        "name": "recepLook",
                        "left": 1060,
                        "top": 562,
                        "width": 731,
                        "height": 518,
                        "image": "203_entrance/kneel.png"
                    }, 203);
                    chat(15, 203);
                }
            }
            break;
        case "displaySelfPanties":
            var sex = null;
            $.each(cl.list, function (i, v) {
                if (v.type === "panties" && v.name === cl.c.panties)
                    sex = v.sex;
            });

            nav.killall();
            zcl.displayMissy();
            nav.button({
                "type": "img",
                "name": "recepLook",
                "left": 1060,
                "top": 562,
                "width": 731,
                "height": 518,
                "image": "203_entrance/kneel.png"
            }, 203);

            if (cl.getBodyHair() !== null) {
                chat(20, 203);
            }
            else if ((sex === null ? "X" : sex) !== "f") {
                chat(16, 203);
            }
            else if (cl.c.chastity === null && g.get("arousal") > 90) {
                chat(22, 203);
            }
            else {
                nav.buildnav([201, 0]);
                chat(17, 203);
            }
            break;
        case "app":
            char.room(206);
            break;
        case "putOnClothes":
            cl.c.shoes = "d";
            cl.c.socks = "b";
            cl.c.pants = "s";
            cl.c.shirt = "s";
            cl.display();
            break;
        case "handjob":
            nav.killall();
            nav.bg("203_entrance/203_enter.jpg");
            nav.button({
                "type": "img",
                "name": "handjob",
                "left": 520,
                "top": 0,
                "width": 1234,
                "height": 1080,
                "image": "203_entrance/203_jerkoff.gif"
            }, 203);

            break;
        case "handjobcum":
            nav.killbutton("handjob");
            nav.bg("203_entrance/hjCum.jpg");
            g.mod("receiveHandjobMale", 1);
            cl.doCum(false);
            break;
        case "reload":
            char.room(203);
            break;
        case "tea0":
            nav.killall();
            g.roomTimeout = setTimeout(function () { char.addtime(10); chat(31, 203); }, 2000);
            break;
        case "tea1":
            g.roomTimeout = setTimeout(function () {
                char.addtime(5);
                nav.button({
                    "type": "img",
                    "name": "fooIgnore",
                    "left": 685,
                    "top": 302,
                    "width": 452,
                    "height": 593,
                    "image": "203_entrance/203_enterRecepClose.png"
                }, 203);
                nav.button({
                    "type": "img",
                    "name": "fooIgnore",
                    "left": 600,
                    "top": 755,
                    "width": 522,
                    "height": 325,
                    "image": "209_classroom/tea.png"
                }, 203);
                chat(32, 203);
            }, 1000);
            break;
        case "sugar0":
        case "sugar1":
        case "sugar2":
            g.internal = callback;
            break;
        case "m100":
            sc.setstep("missy", 101);
            char.room(203);
            break;
        default:
            break;
    }
};

room203.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "They must be closed. Weird being that this is outside of normal business hours.",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "cecilia",
            text: "Can I help you....",
            button: [
                { chatID: -1, text: "Looking for a job.", callback: "checkLic" },
                { chatID: -1, text: "No, sorry...", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "cecilia",
            text: "You must be " + sc.n("me") + ". Do you have a Private Investigator's License?",
            button: [
                { chatID: 3, text: "No, do I need one?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "cecilia",
            text: "I'm sorry sir, you need the PI License to work here. Please go to the Licensing Board to purchase one. They cost $100.",
            button: [
                { chatID: -1, text: "Thank you.", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "cecilia",
            text: "You must be " + sc.n("me") + ". Do you have a Private Investigator's License?",
            button: [
                { chatID: 18, text: "Yes I do.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "cecilia",
            text: "Thank you for filling that out. " + sc.n("missy") + " is ready for you. Good luck in there " + sc.n("missy") +
                " is a slave driver, but she'll give your life purpose that you've never had.",
            button: [
                { chatID: -1, text: "Thank you. [Enter]", callback: "enter" }
            ]
        },
        {
            chatID: 6,
            speaker: "cecilia",
            text: "I'm so sorry " + sc.n("me") + ", but the workday has already started. Please come in before 10 next time.",
            button: [
                { chatID: -1, text: "My mistake " + sc.n("cecilia") + ". [Leave]", callback: "leave" }
            ]
        },
        {
            chatID: 7,
            speaker: "cecilia",
            text: "Welcome back " + sc.n("me") + "! I'm so excited you got the job! ",
            button: [
                { chatID: 8, text: "Thank you " + sc.n("cecilia") + ". I'm excited to work with you too!", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "cecilia",
            text: "So " + sc.n("missy") + " asked me to inspect your attire each day before you report in. To make it easier on both of us can you stand in " +
                "front of my desk and pull your pants legs up so I can see your shoes and socks?",
            button: [
                { chatID: -1, text: "That sounds like a good idea [Move into position]", callback: "displaySelf" }
            ]
        },
        {
            chatID: 9,
            speaker: "cecilia",
            text: "I like your clothes, but I can't let you in unless you're wearing suit pants, dress shirt, tie, black shoes, and black socks. " +
                "Sorry " + sc.n("me") + ", but you can change in the bathroom if you have the clothes with you. ",
            button: [
                { chatID: -1, text: "Oh yea. I'm such an airhead I forgot.", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "cecilia",
            text: "Oh yeah you look good. you may enter",
            button: [
                { chatID: -1, text: "[Enter " + sc.n("missy") + "'s office]", callback: "enter" }
            ]
        },
        {
            chatID: 11,
            speaker: "cecilia",
            text: "Ready for your inspection?",
            button: [
                { chatID: -1, text: "[Get into position]", callback: "displaySelf" }
            ]
        },
        {
            chatID: 12,
            speaker: "cecilia",
            text: "Sorry " + sc.n("me") + ", but " + sc.n("missy") + " told me not to let you in unless you have the piggy nose.",
            button: [
                { chatID: -1, text: "Oh yea. I'm such an airhead I forgot.", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "cecilia",
            text: "Have you solved the cum caper at Toys 'N Us yet?",
            button: [
                { chatID: 14, text: "Not yet.", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "cecilia",
            text: "Missy said she doesn't want to see you until you solve your first case.",
            button: [
                { chatID: -1, text: "Oh, thanks " + sc.n("cecilia"), callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "cecilia",
            text: "OK, Missy said I had to check your underwear also, so pull those down mister!",
            button: [
                { chatID: -1, text: "[Show off your panties]", callback: "displaySelfPanties" }
            ]
        },
        {
            chatID: 16,
            speaker: "cecilia",
            text: "Sorry, Missy said 'no panties, no enter.' ",
            button: [
                { chatID: -1, text: "I guess I'll get a pair.", callback: "leave" }
            ]
        },
        {
            chatID: 17,
            speaker: "cecilia",
            text: "Hahaha that's soooo cute " + sc.n("me") + ". You look good in panties. Go on in. ",
            button: [
                { chatID: -1, text: "Thanks. [Enter]", callback: "enter" }
            ]
        },
        {
            chatID: 18,
            speaker: "cecilia",
            text: "Oh good. Once you fill out this application " + sc.n("missy") + " will meet you " +
                "for your interview. Now some of the questions are rather personal, but " + sc.n("missy") +
                " needs to know if you can handle undercover work. Just try to be honest and you'll do fine.",
            button: [
                { chatID: -1, text: "[Fill out application]", callback: "app" }
            ]
        },
        {
            chatID: 19,
            speaker: "cecilia",
            text: "O.M.G. You look soooo sexy, but you shouldn't go out like that. You should put your clothes on before " +
                "going outside honey.",
            button: [
                { chatID: -1, text: "[Get dressed]", callback: "putOnClothes" }
            ]
        },
        {
            chatID: 20,
            speaker: "cecilia",
            text: "You're getting a little hairy " + sc.n("me") + ". " + sc.n("missy") + " isn't going to like that. You " +
                "need to go home and shave that nasty body hair all off.",
            button: [
                { chatID: -1, text: "I guess I'll go and shave.", callback: "leave" }
            ]
        },
        {
            chatID: 21,
            speaker: "cecilia",
            text: "I like your clothes, but there's been a uniform change. " +
                "I can't let you in unless you're wearing a black skirt and red blouse, black flats, and no socks. " +
                "Sorry " + sc.n("me") + ", but you can change in the bathroom if you have the clothes with you. ",
            button: [
                { chatID: -1, text: "Oh ok.", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "cecilia",
            text: "Oh my " + sc.n("me") + "! I can't let you go in there like that! " + sc.n("missy") + " does not like it " +
                "when you huge erection is sticking out of your pants. Do you want me jerk you off? I love filling my mouth with cum!",
            button: [
                { chatID: 23, text: "No, I'll take care of it", callback: "" },
                { chatID: 24, text: "Oh, yeah please jerk me off", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "cecilia",
            text: "Awwww, I was so looking forward to swallowing your cum. I can't let you in like that.",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 24,
            speaker: "cecilia",
            text: "Come here big boy give me that cock!",
            button: [
                { chatID: 25, text: "...", callback: "handjob" }
            ]
        },
        {
            chatID: 25,
            speaker: "cecilia",
            text: "Shoot it in my mouth!",
            button: [
                { chatID: 26, text: "CUM", callback: "handjobcum" }
            ]
        },
        {
            chatID: 26,
            speaker: "cecilia",
            text: "Thank you! You may go see " + sc.n("missy") + " now.",
            button: [
                { chatID: -1, text: "[Go see " + sc.n("missy") + "]", callback: "enter" }
            ]
        },
        {
            chatID: 27,
            speaker: "cecilia",
            text: "Sorry " + sc.n("me") + " no new cases. You have to earn them in the rooms. ",
            button: [
                { chatID: -1, text: "Oh, thanks.", callback: "reload" }
            ]
        },
        {
            chatID: 28,
            speaker: "cecilia",
            text: "Sorry " + sc.n("me") + " no new cases. " + sc.n("missy") + " said you'll have to go to school in the basement. " +
                "Just head to the elevators, then take it to the basement.",
            button: [
                { chatID: -1, text: "Oh, thanks.", callback: "reload" }
            ]
        },
        {
            chatID: 29,
            speaker: "cecilia",
            text: "Sorry, the day has already started. ",
            button: [
                { chatID: 30, text: "Oh, " + sc.n("missy") + " sent me up here to get some tea", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "cecilia",
            text: "OH HOW EXCITING!! Most boys quit when they read the contract. Not you! I knew you had it in you " +
                "to keep going! I know it's just started, but you're going to love the school! Let me go grab your tea.",
            button: [
                { chatID: -1, text: "Ok.", callback: "tea0" }
            ]
        },
        {
            chatID: 31,
            speaker: "thinking",
            text: "Where did she go? This is taking way too long. " + sc.n("missy") + " is gong to be mad at me for taking too long.",
            button: [
                { chatID: -1, text: "Keep waiting", callback: "tea1" }
            ]
        },
        {
            chatID: 32,
            speaker: "cecilia",
            text: "Here's the tea sexy. Sorry it took so long, I forgot to plug in the kettle. How much sugar did she ask for?",
            button: [
                { chatID: 33, text: "She didn't ask for sugar", callback: "sugar0" },
                { chatID: 33, text: "1 lump", callback: "sugar1" },
                { chatID: 33, text: "2 lumps", callback: "sugar2" }
            ]
        },
        {
            chatID: 33,
            speaker: "cecilia",
            text: "Here you go. Good luck on your tests!",
            button: [
                { chatID: -1, text: "Thanks", callback: "reload" },
            ]
        },
        {
            chatID: 34,
            speaker: "cecilia",
            text: sc.n("missy") + " said you should be at the diner working right now. The Naked Beaver Diner " +
                "<img src='./images/room/map/250.png' style='height:" + (50 * g.ratio) + "px; width:" + (70 * g.ratio) +
                "px;'/> is on the west side of town. ",
            button: [
                { chatID: -1, text: "Thanks", callback: "reload" }
            ]
        },
        {
            chatID: 35,
            speaker: "cecilia",
            text: sc.n("missy") + " said you should be at the diner working right now and not to allow you in until you finish. ",
            button: [
                { chatID: 36, text: "Oh, I finished it. I'm here to see " + sc.n('missy'), callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "cecilia",
            text: "Good for you! I'll let you in! ",
            button: [
                { chatID: -1, text: "Thanks", callback: "enter" }
            ]
        },
        {
            chatID: 37,
            speaker: "thinking",
            text: "I'm not going to just walk in there! That's crazy! ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "cecilia",
            text: "I'm so excited I get to work with you! See me in the park bathroom on the weekends and I'll show you how to suck " +
                "some cock!",
            button: [
                { chatID: -1, text: "Sweet!", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "thinking",
            text: "I can't go in there, I'm supposed to be going to sissy school.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "thinking",
            text: "I can't go in there, I'm supposed to be working my case.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "p",
            text: "I'm so glad your back and safe. We were so worried. So where's " + sc.n("missy") + "? Is she on her way?",
            button: [
                { chatID: 42, text: "...", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "me",
            text: "Tell the entire story...",
            button: [
                { chatID: 43, text: "...", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "cecilia ",
            text: "Those bastards! We have to go get her!",
            button: [        
                { chatID: 44, text: "...", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "p",
            text: "I don't trust the police at all! We have to get her out of there. We'll have to come up with a plan. " +
                "Since the tunnel you used is down we'll have to find an alternative way in. Right now everything " +
                "is brought in by helicopter since the swamps around the compound make driving there impossible. We also don't have " +
                "a good layout of the compound that includes camera locations and entrances. Finally we're going to need to know " +
                "exactly where she's being held. ",
            button: [
                { chatID: 45, text: "Yeah", callback: "" }
            ]
        },
        {
            chatID: 45,
            speaker: "p",
            text: "I'm going to start working on my contacts. You can start by going through what " + sc.n("missy") + " knows. " +
                " I know she's been working on gathering information on them for a while. Under normal circumstances I would  " +
                "never suggest going through her office, but there may be something there and we need to get her out! I'll " +
                "still let you do any training you want or need. ",
            button: [
                { chatID: 46, text: "Ok", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "p",
            text: "Don't worry too much about " + sc.n("missy") + ". She's a lot stronger than any of us. You have no idea of what " +
                "she went through before she started as a PI. She's a survivor. I'll let you know any information I get. Please " +
                "go through her office respectfully and see if you can gather any information to start. ",
            button: [
                { chatID: -1, text: "I will gather information from her office. ", callback: "m100" }
            ]
        },
        {
            chatID: 47,
            speaker: "thinking",
            text: "Thank you for playing. Breaking " + sc.n("missy") + " out will be in a future release",
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
