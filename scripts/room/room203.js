//Cecillia close up
var room203 = {};
room203.main = function () {
    var outfit = cl.hasoutfit("public");
    var navList = new Array();
    var btnList = new Array();
    let missyI = sc.i("missy");
    if (!sc.char[missyI].show)
        sc.char[missyI].show = true;

    if (sc.getTimeline("cecilia").thisRoom) {
        //g.pass = "203Elevator";
        btnList = [{
            "type": "btn",
            "name": "recep",
            "left": 1145,
            "top": 352,
            "width": 162,
            "height": 197,
            "image": "203_entrance/203_enterRecep.png"
        }];
        if (missy.get("uniform") > 2 && cl.c.shirt !== "r" && cl.hasClothing("shirt", "r")) {
            sc.select("icon_dress", "203_entrance/icon_dress.png", 9);
        }
    }
    else {
        nav.bg("206_questions/sideEmpty.jpg");
    }
    if (outfit === null) {
        navList = [201, 207, 0];
    }
    else {
        navList = [201];
        g.popUpNotice("I'm missying my " + outfit + ". Better change in the bathroom.");
    }
    $.each(btnList, function (i, v) {
        nav.button(v, 203);
    });
    nav.buildnav(navList);
    if (g.dt.getDay() === 6 && gv.get("sissySchoolClass") === "finalx") {
        sc.select("icon_fashion", "203_entrance/icon_fashion.webp", 0)
    }
};

room203.btnclick = function (name) {
    
    switch (name) {
        case "recep":
            nav.kill("recep");
            nav.bg("203_entrance/203_frontDeskCloseup.jpg");
            if (gv.get("jobapplyconst") < 100) {
                chat(28, 203);
            }
            else if (g.gethourdecimal() > 10) {
                chat(6, 203);
            }
            else if (missy.activecase().name === "apply") {
                chat(1, 203);
            }
            else if (missy.get("totalDaysWorked") === 0) {
                missy.set("activeCase", -1);
                sc.startMissionTask("priest", "confession", 3);
                chat(11, 203);
            }
            else if (missy.get("activeCase") > 3 && missy.get("activeCaseComplete") === 0) {
                chat(998, 203);
            }
            else
                chat(999, 203);
            break;
        case "icon_dress":
            cl.c.dress = null
            cl.c.pj = null;
            cl.c.swimsuit = null;
            cl.c.shoes = "fb";
            cl.c.pants = "k";
            cl.c.shirt = "r";
            cl.c.bra = "p";
            cl.c.socks = null;
            if (cl.c.panties === null) {
                if (cl.hasClothing("panties", "w"))
                    cl.c.panties = "w";
                else if (cl.hasClothing("panties", "missy"))
                    cl.c.panties = "missy";
                else if (cl.hasClothing("panties", "c"))
                    cl.c.panties = "c";
            }
            cl.display();
            char.room(203);
            break;
        case "icon_fashion":
            char.room(207);
            break;
        default:
            break;
    }
};

room203.chatcatch = function (callback) {
    switch (callback) {
        case "enter":
            char.room(200);
            break;
        case "leave":
            char.room(0);
            break;
        case "checkLic":
            if (inv.has("pi_lic")) {
                missy.set("activeCase", -1);
                chat(4, 203);
            }
            else {
                if (gv.get("money") < 100)
                    chat(16, 203);
                else
                    chat(2, 203);
            }
            break;
        case "displaySelf":
            nav.bg("203_entrance/inspect.jpg");
            zcl.displayMain(180, 800, .09, "clothes", false);
            var myUniform = missy.get("uniform");
            if (myUniform === 0) { //suit
                if (cl.hasoutfit("suit") === null) {
                    if (cl.pantiesTxt() === "panties") {
                        chat(18, 203);
                    }
                    else {
                        chat(8, 203);
                    }
                }
                else {
                    if (missy.get("totalDaysWorked") === 0) {
                        if ((cl.hasClothing("shirt", "s") && cl.hasClothing("pants", "s") &&
                            cl.hasClothing("socks", "b") && cl.hasClothing("shoes", "d")) ||
                            gv.get("money") > 245) {
                            levels.mod("pi", -10, 999);
                            chat(9, 203);
                        }
                        else {
                            chat(13, 203);
                        }
                    }
                    else {
                        levels.mod("pi", -10, 999);
                        chat(9, 203);
                    }
                }
            }
            else if (myUniform === 1) {
                if (cl.hasoutfit("suitwithpanties") === null) {
                    if (missy.get("uniformNew") === 0) {
                        chat(22, 203);
                    }
                    else {
                        levels.mod("xdress", 5, 3);
                        cl.c.pants = null;
                        cl.c.pants = "s";
                        chat(23, 203);
                    }
                }
                else {
                    levels.mod("pi", -10, 999);
                    chat(24, 203);
                }
            }
            else if (myUniform === 2) {
                if (cl.hasoutfit("suitwithpanties") === null) {
                    if (cl.getBodyHair() === null) {
                        levels.mod("xdress", 5, 5);
                        cl.c.pants = null;
                        cl.c.pants = "s";
                        chat(23, 203);
                    }
                    else {
                        var tempshirt = cl.c.shirt;
                        cl.c.shirt = null;
                        cl.c.shirt = tempshirt;
                        chat(25, 203);
                    }
                }
                else {
                    levels.mod("pi", -10, 999);
                    chat(24, 203);
                }
            }
            else if (myUniform === 3) {
                g.internal = cl.hasoutfit("officegirl");
                if (g.internal === null) {
                    levels.mod("xdress", 5, 5);
                    if (missy.get("uniformNew") === 2) {
                        chat(27, 203);
                    }
                    else {
                        chat(26, 203);
                    }
                }
                else {
                    chat(600, 203);
                }
            }
            break;
        case "notDressed0":
            nav.killall();
            zcl.displayMain(-200, 0, .5, "clothes", true);
            nav.bg("203_entrance/203_enter.jpg");
            break;
        case "notDressed1":
            nav.killall();
            nav.bg("203_entrance/notDressed1.jpg");
            break;
        case "notDressed2":
            cl.add("shirt", "s");
            cl.add("pants", "s");
            cl.add("shoes", "d");
            cl.add("socks", "b");
            missy.mod("mood", -80);
            missy.mod("weeklyPay", -200);
            g.pass = "follow";
            char.room(217);
            break;
        case "mad":
            nav.killall();
            nav.bg("203_entrance/mad.jpg");
            break;
        case "forgotLic":
            inv.add("pi_lic");
            missy.mod("mood", -80);
            missy.mod("weeklyPay", -100);
            char.room(217);
            break;
         case "app":
            char.room(206);
            break;
        case "payday":
            char.room(196);
            break;
        case "panties0":
            nav.bg("203_entrance/203_enter.jpg");
            break;
        case "panties1":
            nav.bg("203_entrance/peek.jpg");
            zcl.displayMain(280, 800, .08, "clothes", true);
            var missyWeekly = gv.get("missyWeekly");
            gv.set("missyWeekly", missyWeekly.substring(0, g.dt.getDay()) + 'q' + missyWeekly.substring(g.dt.getDay() + 1));
            break;
        case "uniform1_0":
            cl.c.pants = null;
            levels.mod("xdress", 5, 3);
            zcl.displayMain(180, 800, .09, "clothes", false);
            cl.c.pants = "s";
            break;
        case "bathroom":
            char.room(201);
            break;
    }
};

room203.chat = function (chatID) {
    if (chatID === 998) {
        if (g.dt.getDay() === 5) {
            return {
                chatID: 999,
                speaker: "cecilia",
                text: "It's payday! I know you're on a case, but did you want to see Missy to get your check?",
                button: [
                    { chatID: -1, text: "I do!", callback: "payday" },
                    { chatID: -1, text: "Nope. Just wandering. ", callback: "" },
                ]
            };
        }
        else {
            var activeCase = missy.activecase();
            return {
                chatID: 999,
                speaker: "cecilia",
                text: "Missy said your job was to complete your case. " + activeCase.txt,
                button: [
                    { chatID: -1, text: "Oh yeah. Thanks! ", callback: "" },
                ]
            };
        }
    }
    else if (chatID === 999) {
        var greeting = [
            "Good morning beautiful!",
            "ooops. I think I just farted some cum. hehe. ",
            "You look amazing, simply amazing. ",
            "Did you do something with your hair? It looks good. ",
            "You would look better naked, *wink*",
            "You look so yummy I could eat your ass. *wink*",
            "Nice shoes, wanna fuck? ",
            "I'm so happy I get to see your face everyday. ",
            "What do you do to look so good everyday!"
        ];
        return {
            chatID: 999,
            speaker: "cecilia",
            text: greeting[Math.floor(Math.random() * greeting.length)],
            button: [
                { chatID: -1, text: "[Get into position]", callback: "displaySelf" },
                { chatID: -1, text: "I'm not sure why I'm here. ", callback: "leave" },
            ]
        };
    }
    else if (chatID === 600) {
        return {
            chatID: 998,
            speaker: "cecilia",
            text: "I can't let you go in. You're missing your " + g.internal + ". ",
            button: [{ chatID: -1, text: "Go change in the bathroom", callback: "bathroom" }]
        };
    }
    else {
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
                    { chatID: -1, text: "Missy told me to come by for a job.", callback: "checkLic" },
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
                    { chatID: 10, text: "Yes I do.", callback: "" }
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
                    { chatID: -1, text: "My mistake " + sc.n("cecilia") + ".", callback: "late0" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "Are you late! Why the hell! Get in here! ",
                button: [
                    { chatID: -1, text: "My mistake " + sc.n("cecilia") + ".", callback: "late0" }
                ]
            },
            {
                chatID: 8,
                speaker: "cecilia",
                text: "Oh yeah you look yummy. you may enter",
                button: [
                    { chatID: -1, text: "[Enter " + sc.n("missy") + "'s office]", callback: "enter" }
                ]
            },
            {
                chatID: 9,
                speaker: "cecilia",
                text: "I like your clothes, but I can't let you in unless you're wearing suit pants, dress shirt, tie, black shoes, black socks, and " +
                    "some kind of underwear. Sorry " + sc.n("me") + ", but you can change in the bathroom if you have the clothes with you. ",
                button: [
                    { chatID: -1, text: "Oh yea. I'm such an airhead I forgot.", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "cecilia",
                text: "Oh good. Once you fill out this application Missy will meet you " +
                    "for your interview. Now some of the questions are rather personal, but Missy " +
                    " needs to know if you can handle undercover work. Just try to be honest and you'll do fine.",
                button: [
                    { chatID: -1, text: "[Fill out application]", callback: "app" }
                ]
            },
            {
                chatID: 11,
                speaker: "cecilia",
                text: "Welcome back " + sc.n("me") + "! I'm so excited you got the job! ",
                button: [
                    { chatID: 12, text: "Thank you " + sc.n("cecilia") + ". I'm excited to work with you too!", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "cecilia",
                text: "So " + sc.n("missy") + " asked me to inspect your attire each day before you report in. To make it easier on both of us can you stand in " +
                    "front of my desk and model that big sexy body of yours! I need to check you out from your head to " +
                    "your shoes! ",
                button: [
                    { chatID: -1, text: "Sure! ", callback: "displaySelf" }
                ]
            },
            {
                chatID: 13,
                speaker: "cecilia",
                text: "So you're not properly dressed for your first day. Let me tell Missy. ",
                button: [
                    { chatID: 14, text: "uh oh! ", callback: "notDressed0" }
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "Oh, I really screwed up on my first day! I hope Missy isn't too mad, I just didn't have enough " +
                    "money to buy everything. Surely she'll understand. ",
                button: [
                    { chatID: 15, text: "...", callback: "notDressed1" }
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "What the fuck do you mean you showed up to work on your first fucking day and can't even get " +
                    "dressed properly! " + sc.n("cecilia") + " take some petty cash and go buy him his suit! " +
                    "It will be in your wardrobe. Make sure you wear it next time you come in. I can't trusted " +
                    "you to use the money I gave you to purchase proper attire and you screwed that up! Well you're " +
                    " going to pay for your idiocracy! Follow me! ",
                button: [
                    { chatID: -1, text: "GULP", callback: "notDressed2" }
                ]
            },
            {
                chatID: 16,
                speaker: "ceclia",
                text: "You must be " + sc.n("me") + ". Do you have a Private Investigator's License?",
                button: [
                    { chatID: 17, text: "I don't have one.", callback: "mad" }
                ]
            },
            {
                chatID: 17,
                speaker: "missy",
                text: "What do you mean you don't have one? Let me guess, you blew your money on stupid crap and " +
                    "not on a license? Is this how you want to start here, as a dumbass? " + sc.n("cecilia") + " go " +
                    "buy him a license since he can't do it himself! You, idiot, come with me. Apperently you have to " +
                    "receive some training before you even start. Come now! ",
                button: [
                    { chatID: -1, text: "ok", callback: "forgotLic" }
                ]
            },
            {
                chatID: 18,
                speaker: "ceclia",
                text: "Oh! I forgot something... Uhhh. One second I have to talk to Missy... to uhh, wait right here. ",
                button: [
                    { chatID: 19, text: "ok", callback: "panties0" }
                ]
            },
            {
                chatID: 19,
                speaker: "thinking",
                text: "Hmm. That was weird. I wonder what's up? I wonder if she saw my panties. There's no way. These pants " +
                    "are pretty thin. I guess you might see a panty line. I hope she didn't see. I would just die from " +
                    "embarrassment if everyone in the office knew I'm wearing panties.  ",
                button: [
                    { chatID: 20, text: "ok", callback: "panties1" }
                ]
            },
            {
                chatID: 20,
                speaker: "ceclia",
                text: "Missy will see you now. ",
                button: [
                    { chatID: -1, text: "..thanks...", callback: "enter" }
                ]
            },
            {
                chatID: 21,
                speaker: "cecilia",
                text: "Where's your panties? Missy said 'no panties, no enter.' ",
                button: [
                    { chatID: -1, text: "I guess I'll get a pair.", callback: "leave" }
                ]
            },
            {
                chatID: 22,
                speaker: "cecilia",
                text: "I have to see your pretty panties! Pull those pants down and show them to me. ",
                button: [
                    { chatID: 23, text: "*Goran* Really?", callback: "uniform1_0" }
                ]
            },
            {
                chatID: 23,
                speaker: "cecilia",
                text: "Cute panties! You can go in now.  ",
                button: [
                    { chatID: -1, text: "ok", callback: "enter" }
                ]
            },
            {
                chatID: 24,
                speaker: "cecilia",
                text: "I like your clothes, but I can't let you in unless you're wearing suit pants, dress shirt, tie, black shoes, black socks, " +
                    "and pretty panties. Sorry " + sc.n("me") + ", but you can change in the bathroom if you have the clothes with you. ",
                button: [
                    { chatID: -1, text: "Oh yea. I'm such an airhead I forgot.", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "cecilia",
                text: "Getting a bit hairy. You need to go home and shave. Talk to " + sc.n("spanky") + ". He's a bit weird, but " +
                    "he does know how to fuck a face. ",
                button: [
                    { chatID: -1, text: "Oh... oh! ok. ", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "cecilia",
                text: "Looking cute! You can go in. ",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "enter" }
                ]
            },
            {
                chatID: 27,
                speaker: "cecilia",
                text: "Oh my god! You are so cute! And so professional! " +
                    "Welcome to the sisterhood I am sooo happy for you. it takes a lot to " +
                    "find oneself's true calling",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "enter" }
                ]
            },
            {
                chatID: 28,
                speaker: "cecilia",
                text: "Missy's PI, can I help you. ",
                button: [
                    { chatID: -1, text: "Oh, no. I should be going. ", callback: "leave" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
