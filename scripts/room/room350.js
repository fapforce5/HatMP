//sperm bank

var room350 = {};
room350.main = function () {
    if (sc.getTimeline("landlord").thisRoom) {
        if (cl.isLewd()) {
            nav.button({
                "type": "btn",
                "name": "nurse",
                "left": 1078,
                "top": 481,
                "width": 170,
                "height": 200,
                "image": "350_spermBank/landlord.png"
            }, 350);
            chat(18, 350);
        }
        else if (sc.getMissionTask("landlord", "spermbank", 2).complete
            && sc.getMission("raven", "bitch").notStarted
            && g.dt.getDay() === 6) {
            nav.bg("350_spermBank/raven_0_1.jpg");
            chat(30, 350);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "nurse",
                "left": 1078,
                "top": 481,
                "width": 170,
                "height": 200,
                "image": "350_spermBank/landlord.png"
            }, 350);
        }
        //if (g.pass === "350_nursePay") {
        //    g.pass = null;
        //    chat(8, 350);
        //}
        
    }
    else {
        var thisDay = g.dt.getDay();
        if (thisDay === 0)
            chat(15, 350);
        else if (g.gethourdecimal() > 9)
            chat(16, 350);
        else
            chat(17, 350);
    }
    var navList = [0];
   
    nav.buildnav(navList);
    
};

room350.btnclick = function (name) {
    switch (name) {
        case "nurse":
            if (sc.getMission("landlord", "spermbank").inProgress) {
                if (g.dt.getDay() === 6) {
                    if (sc.getMissionTask("landlord", "spermbank", 2).notStarted)
                        sc.completeMissionTask("landlord", "spermbank", 2);
                    chat(6, 350);
                }
                else {
                    chat(5, 350);
                }
            }
            else {
                chat(0, 350);
            }
            //else if (sc.getEvent("landlord", 1)) {
            //    if (g.dt.getDay() === 6) {
            //        chat(20, 350);
            //    }
            //    else {
            //        chat(3, 350);
            //    }
            //}
            

            //var mascotNum = gv.get("mascot");
            //var llStep = sc.getstep("landlord");
            //var access16 = g.hasAccess(16).access;
            //if (sc.getEvent("landlord", -5) && !sc.getEvent("landlord", -6) && !access16)
            //    chat(47, 350);
            //else if (!access16) {
            //    if (mascotNum === 0)
            //        chat(43, 350);
            //    else
            //        chat(61, 350);
            //}
            //else if (llStep > 200) {
            //    if (g.hourBetween(6, 10)) {
            //        if (cl.getBodyHair() !== null)
            //            chat(30, 350);
            //        else if (cl.c.hairLength < 2)
            //            chat(31, 350);
            //        else if (!sc.getEvent("landlord", -7)) {
            //            sc.setstep("landlord", -7);
            //            chat(16, 350);
            //        }
            //        else if (!sc.getEvent("landlord", -8)) {

            //            chat(51, 350);
            //        }
            //        else
            //            chat(41, 350);
            //    }
            //    else
            //        chat(29, 350);
            //}
            //else if (sc.getEvent("landlord", -3)) {
            //    if (cl.getCum() < .75)
            //        chat(3, 350);
            //    else
            //        chat(6, 350);
            //}
            //else if (llStep === 6) {
            //    if (cl.appearance() > 0) {
            //        sc.setstep("landlord", 7);
            //        chat(11, 350);
            //    }
            //    else
            //        chat(0, 350);
            //}

            //else if (sc.getEvent("landlord", -1)) {
            //    if (mascotNum > 3)
            //        chat(62, 350);
            //    else
            //        chat(9, 350);
            //}
            //else
            //    chat(0, 350);
            break;
        default:
            break;
    }
};

room350.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "leavemad":
            sc.modLevel("landlord", -30, 999);
            char.room(0);
            break;
        case "advertise":
            char.room(353);
            break;
        case "sperm1":
            nav.killall();
            nav.bg("350_spermBank/nurseMeet.jpg");
            break;
        case "sperm2":
            char.room(351);
            break;
        case "raven_0_2":
            nav.bg("350_spermBank/raven_0_2.jpg");
            break;
        case "raven_1_end":
            sc.startMission("raven", "bitch");
            sc.completeMissionTask("raven", "bitch", 0);
            sc.show("raven");
            levels.mod("pi", 20, 999);
            char.addtime(20);
            nav.bg("350_spermBank/350_spermbank.jpg");
            nav.button({
                "type": "btn",
                "name": "nurse",
                "left": 1078,
                "top": 481,
                "width": 170,
                "height": 200,
                "image": "350_spermBank/landlord.png"
            }, 350);
            break;
         case "wait":
            char.settime(9, 2);
            char.room(350);
            break;
        case "spermDonation":
            if (sc.getMissionTask("landlord", "spermbank", 0).complete) {
                chat(31, 350);
            }
            else {
                sc.completeMissionTask("landlord", "spermbank", 0);
                chat(7, 350);
            }
            break;
        case "advertiseStart":
            if (sc.getMissionTask("landlord", "spermbank", 1).complete) {
                chat(32, 350);
            }
            else {
                sc.completeMissionTask("landlord", "spermbank", 1);
                chat(13, 350);
            }
            break;
        default:
            break;
    }
};

room350.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: sc.n("me") + " what are you doing here?",
            button: [
                { chatID: 1, text: "I came to make a deposit", callback: "" },
                { chatID: 2, text: "Just wanted to say hi.", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "I don't think so. We don't take sperm from college dropouts.",
            button: [
                { chatID: -1, text: "Awww shucks", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "That's nice, now run along.",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Shouldn't you be at work right now? ",
            button: [
                { chatID: 19, text: "Well, I....", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "The sperm bank must be closed for the day. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 5,
            speaker: "landlord",
            text: "What are you doing here? You need to turn your butt around and get to work. I don't want to even hear your " +
                "excuses. Get going now. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "leavemad" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "I'm so happy you came, my little worker! We have to get so much more sperm and you can help! Since today we only " +
                "are in for half the day I'll give you the choice. You can either make a donation, or you can help advertise. I pay " +
                "$30 for a donation, but $60 if you advertise. ",
            button: [
                { chatID: -1, text: "I'll do the sperm donation for $30", callback: "spermDonation" },
                { chatID: -1, text: "I'll advertise for $60", callback: "advertiseStart" },
            ]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Oh, wonderful. You really are a good boy. I'll give you the same talk I give to all my first time clients. Here " +
                "at Helping Hands Sperm Bank we guide you through the entire process so no contaminations are introduced into the " +
                "sample. You don't have to do a thing, just sit back and relax. Nurse Madison, please come here. I have a great new " +
                "client for you. ",
            button: [
                { chatID: 8, text: "...", callback: "sperm1" },
            ]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "Nurse Madison, this is " + sc.n("me") + ". ",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "!madison",
            text: "Oh " + sc.n("me") + "! Your " + sc.n("landlord") + " has said so much about you. Don't worry, it's all good. " +
                "I'm so happy to assist you with your donation. Don't worry. He's in great hands with me. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "Nurse Madison is really our best nurse, just don't tell the other nurses that! I'll leave you to it. Nurse " +
                "Madison, when you're done, if you could inventory the cooler again. For some reason we seem to be missing some " +
                "samples. ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "!madison",
            text: "Of course. " + sc.n("me") + " follow me to the donation room. ",
            button: [
                { chatID: -1, text: "oh yeah! ", callback: "sperm2" },
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "You can't make two donatations in a day silly. ",
            button: [
                { chatID: -1, text: "oh yeah! ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "You are my little savior! It's so hard to attract people to come here. Advertising for a sperm " +
                "bank is just the hardest! I need a little mascot to lure people in. But you have to be careful. " +
                "Only advertise to men. I put one of my nurses in this costume and she just told everyone to come in! " +
                "I had so many irate women feigning outrage. One if fine, I can handle one, just don't send in a " +
                "bunch or I'll have to dock your pay. ",
            button: [
                { chatID: 14, text: "ok.", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "Also if you send in 3 or more I'll give you a nice little bonus. I'm sure you could use the money. " +
                "dating is just so expensive these days. You'll be able to take that nice girl out on a date. " +
                "I'll grab the suit and meet you outside across the street in front of the park. That where most " +
                "of my foot traffic comes from. ",
            button: [
                { chatID: -1, text: "See you there.", callback: "advertise" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "I'm so dumb. It's Sunday, no one is coming in today. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "The sperm bank must be closed for the day. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: sc.n("landlord") + " must not be in yet. ",
            button: [
                { chatID: -1, text: "Wait for her to come in.", callback: "wait" },
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "Disgusting. Honestly I'm not even suprised. Get out of here and put some clothes on. ",
            button: [
                { chatID: -1, text: "...", callback: "leavemad" }
            ]
        },
        {
            chatID: 19,
            speaker: "landlord",
            text: "Don't stammer with me. Stop fiddle fucking around and get to work. I'm not going to raise a " +
                "complete loser. ",
            button: [
                { chatID: -1, text: "oh, damn", callback: "leavemad" }
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "Hi honey! Came to help me out? ",
            button: [
                { chatID: 7, text: "I'll do the sperm donation for $30", callback: "sperm2" },
                { chatID: 13, text: "I'll advertise for $60", callback: "advertise" },
                { chatID: -1, text: "Nope. I'm going to go. Bye. ", callback: "leavemad" },
            ]
        },
        {
            chatID: 21,
            speaker: "raven",
            text: "...you better find out what's happening with those missing specimens or I'll have " +
                "to start investigating your operation more deeply. You wouldn't want to lost your " +
                "sperm bank license would you? ",
            button: [
                { chatID: 22, text: "...who's that talking to my " + sc.n("landlord") + "?", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "You wouldn't. I need that license or I lose everything. I told you I'm trying to find who " +
                "or what is taking the samples. I'm working with the police, but so far we haven't been able " +
                "to find out who is taking them. ",
            button: [
                { chatID: 23, text: "...", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "raven",
            text: "Not my problem. Losing samples is a very serious violation, not only lawfully, but the " +
                "trust between you and the clients. I'm going to continue to look into it, but expect to lose " +
                "you License. This can't keep happening. ",
            button: [
                { chatID: 24, text: "...", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "landlord",
            text: "No. You can't do that. There's got to be something I can do to keep my License. Please. ",
            button: [
                { chatID: 25, text: "...", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "raven",
            text: "Well there is one thing. How about I give you a sperm donation, and you use something other " +
                "than you hand to extract it. ",
            button: [
                { chatID: 26, text: "He didn't just say that.", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "You've been trying to fuck me for years. I'll tell your boss this is just a ploy to get in " +
                "my panties. I'll have you fired! ",
            button: [
                { chatID: 27, text: "You go girl! ", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "raven",
            text: "You know it's your word against mine. I know there's something here and once I find it you'll " +
                "be my mine. You can either start giving up your pussy now, or wait till I find something, then I'll make " +
                "you my little bondage slave. ",
            button: [
                { chatID: 28, text: "...", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "landlord",
            text: "That's quite enough. You should go right now! ",
            button: [
                { chatID: 29, text: "....", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "Who is that guy? He's such as ass trying to blackmail my " + sc.n("landlord") + "! I'll " +
                "have to help her somehow. I better get back to the lobby before they figure out I'm eavesdropping.",
            button: [
                { chatID: -1, text: "....", callback: "raven_1_end" },
            ]
        },
        {
            chatID: 30,
            speaker: "thinking",
            text: "That sounds like my " + sc.n("landlord") + ". I wonder what's going on. Let me just listen a " +
                "little bit. ",
            button: [
                { chatID: 21, text: "....", callback: "raven_0_2" },
            ]
        },
        {
            chatID: 31,
            speaker: "landlord",
            text: "Excellent. Please join Nurse Madison in room 1.",
            button: [
                { chatID: -1, text: "Ok", callback: "sperm2" },
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "Excellent. Please try to get 3 or more people to donate. Let's go.",
            button: [
                { chatID: -1, text: "Ok", callback: "advertise" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
