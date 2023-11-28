//sperm bank

var room350 = {};
room350.main = function () {
    if (sc.getTimeline("landlord").thisRoom) {

        var btnList = [
            {
                "type": "btn",
                "name": "nurse",
                "left": 1078,
                "top": 481,
                "width": 170,
                "height": 200,
                "image": "350_spermBank/landlord.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 350);
        });
        //if (g.pass === "350_nursePay") {
        //    g.pass = null;
        //    chat(8, 350);
        //}
        if (cl.isLewd()) {
            chat(18, 350);
        }
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
                    sc.completeMission("landlord", "spermbank", true);
                    sc.setEvent("landlord", 1);
                    chat(6, 350);
                }
                else {
                    chat(5, 350);
                }
            }
            else if (sc.getEvent("landlord", 1)) {
                if (g.dt.getDay() === 6) {
                    chat(20, 350);
                }
                else {
                    chat(3, 350);
                }
            }
            else {
                chat(0, 350);
            }

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
         case "wait":
            char.settime(9, 2);
            char.room(350);
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
                { chatID: 7, text: "I'll do the sperm donation for $30", callback: "" },
                { chatID: 13, text: "I'll advertise for $60", callback: "" },
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
