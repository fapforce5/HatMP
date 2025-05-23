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
        else if (sc.getMission("raven", "bitch").notStarted && g.dt.getDay() === 6 && sc.getMissionTask("landlord", "talk", 1).complete) {
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
            if (sc.getMission("landlord", "sissy").inProgress) {
               
                if (cl.getBodyHair() !== null)
                    chat(33, 350);
                else if (cl.appearance() < 2)
                    chat(34, 350);
                else {
                    if (sc.getMissionTask("landlord", "spermbank", 2).notStarted) {
                        chat(35, 350);
                    }
                    else
                        chat(55, 350);
                }
            }
            else if (sc.getMissionTask("landlord", "talk", 1).complete) {
                if (g.dt.getDay() === 6) {
                    if (sc.getMission("landlord", "spermbank").notStarted) {
                        sc.startMission("landlord", "spermbank");
                        sc.completeMissionTask("landlord", "spermbank", 0);
                        sc.completeMissionTask("landlord", "talk", 2);
                    }
                    chat(6, 350);
                }
                else {
                    chat(5, 350);
                }
            }
            else {
                chat(0, 350);
            }
            break;
        default:
            break;
    }
};

room350.chatcatch = function (callback) {
    switch (callback) {
        case "boxes":
        case "boxes0":
            case "room1":
            nav.killall();
            nav.bg("350_spermBank/" + callback + ".jpg");
            break;
        case "leave":
            char.room(0);
            break;
        case "leavemad":
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
            levels.mod("pi", 30, 999);
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
        case "e0":
            nav.killall();
            nav.bg("354_raven/e0.jpg");
            break;
        case "e1":
            cl.nude();
            cl.c.panties = cl.cTemp.panties;
            cl.c.bra = cl.cTemp.bra;
            cl.c.dress = "nu";
            cl.c.socks = "s";
            cl.c.shoes = "nu";
            cl.display();
            zcl.displayMain(150, 900, .18, "clothes", true);

            break;
        case "room352":
            char.room(352);
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
            text: "Disgusting. Honestly I'm not even surprised. Get out of here and put some clothes on. ",
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
                "your License. This can't keep happening. ",
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
        {
            chatID: 33,
            speaker: "landlord",
            text: "You need to go home and shave. No one wants a hairy gorilla assisting " +
                "them with their donation. ",
            button: [
                { chatID: -1, text: "Ok, I'll go shave. ", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "You look too manly for a nurse. You need to do something with your " +
                "appearance. A nurse should be cute and inviting, not broodish. ",
            button: [
                { chatID: -1, text: "[Need minimum 'Cute' appearance]", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "Well look at my cute little girl. Did you come in to help me with " +
                "donations?",
            button: [
                { chatID: 36, text: "Yes I did! ", callback: "" },
                { chatID: -1, text: "No, Sorry just came by to say hi.", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "landlord",
            text: "You know, I've watched you be a puddle of dissapointment for most " +
                "of your life. After you graduated high school you've just been a lazy " +
                "lazy waste of space. But now, but now look at you.",
            button: [
                { chatID: 37, text: "...yes...", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "landlord",
            text: "You've really put a lot of work into making yourself into a pretty " +
                "little girl. I don't think I've seen you work harder on anything in " +
                "your life. Maybe it was my fault for hoping you'll become a proper " +
                "and successful young man when all the time you've just been a slutty " +
                "whorish girl.",
            button: [
                { chatID: 38, text: "I'm not that slutty.", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "I suppose this is my fault. You've been around girls the entire time. " +
                "You've never been properly shown how to be a boy. From the looks of it, " +
                "it seems too late to go down that path, this is the path you're on. " +
                "As your " + sc.n("landlord") + " I suppose it's my resonsiblility to " +
                "continue to help you on your path.",
            button: [
                { chatID: 39, text: "Help me?", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "landlord",
            text: "Yes. I'm going to help you honey. After all I've been a girl for " +
                "far longer than you, so I know a thing or two. I'm going to make " +
                "you my new project. What kind of girl are trying to be?",
            button: [
                { chatID: 40, text: "A nice sweet innocent girl", callback: "" },
                { chatID: 41, text: "A cum slut", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "landlord",
            text: "Oh hahaha. I don't believe you. I know you too well. Deep down I " +
                "know you're the kind of girl that gives it up on the first date. " +
                sc.n("lola") + " is the sweet innocent type. You're more like " +
                sc.n("eva") + ", but dialed up to 11. ",
            button: [
                { chatID: 42, text: "oh.", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "landlord",
            text: "That was just a test. I knew what a dirty dirty girl you are. " +
                "I just wasn't sure if you knew yourself.",
            button: [
                { chatID: 42, text: "oh.", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "landlord",
            text: "I need a girl like you to help me out around here doing all the things " +
                "I hate doing. Organizaing samples, greeting customers, and most importantly " +
                "assisting with the donors. ",
            button: [
                { chatID: 43, text: "Assisting the donors?", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "landlord",
            text: "Some men come in and have a hard time creating a donation, so it will be your responsibility to assit them. Some " +
                "just need a peek at your boobs, some need to check out your butt, and others need a helping hand.",
            button: [
                { chatID: 44, text: "Helping hand, do you mean...", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "landlord",
            text: "Yes, I mean you'll have to jack off their cocks. Now I know how much you love cum, but you can only use your hands. " +
                "Anything else will ruin the sample. ",
            button: [
                { chatID: 46, text: "I will be the best sperm collecter you've seen!", callback: "" },
                { chatID: 45, text: "I don't know if I can jack off stange men", callback: "" }
            ]
        },
        {
            chatID: 45,
            speaker: "landlord",
            text: "I didn't ask you to tell me what a selfish little girl you are. This is your chance to actually do some work and " +
                "help your " + sc.n("landlord") + ". ",
            button: [
                { chatID: 47, text: ".... ok", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "landlord",
            text: "I know. I suppose deep down I've always known. I suppose it's good " +
                "to know that when I die, I'll have someone to hand the buisiness down " +
                "to. ",
            button: [
                { chatID: 47, text: ".... ok", callback: "" }
            ]
        },
        {
            chatID: 47,
            speaker: "landlord",
            text: "Now let's get started on your first day of work. " +
                "I'll help you get ready, Follow me to the break room. ",
            button: [
                { chatID: 48, text: "[Follow her]", callback: "e0" }
            ]
        },
        {
            chatID: 48,
            speaker: "landlord",
            text: "You can change into your nurses outfit here. If " + sc.n("raven") +
                " is in here, just ask him to leave. I've already spoken to him " +
                "muliple times about trying to peek at my nurses. Now get changed. ",
            button: [
                { chatID: 49, text: "Oh my. [Change into nurse's outfit]", callback: "e1" }
            ]
        },
        {
            chatID: 49,
            speaker: "landlord",
            text: "You look really pretty.The guys will love you. Now I've got to " +
                "move the new shipment of empty jars to the back.",
            button: [
                { chatID: 50, text: "[Follow her]", callback: "boxes" }
            ]
        },
        {
            chatID: 50,
            speaker: "me",
            text: "Let me give you hand moving those boxes.",
            button: [
                { chatID: 51, text: "[Help her]", callback: "boxes0" }
            ]
        },
        {
            chatID: 51,
            speaker: "me",
            text: "Oh hahahaha. Don't be silly, I need a man to move these boxes. " +
                "There's no way you're strong enough. Mike here is going to move them " +
                "for us. ",
            button: [
                { chatID: 52, text: "oh", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "!boxes",
            text: "Don't worry little girl, I've got this. Wouldn't want you to strain " +
                "them tiny arms of yours. Let a real man do the work.",
            button: [
                { chatID: 53, text: "oh my", callback: "" }
            ]
        },
        {
            chatID: 53,
            speaker: "landlord",
            text: "Yes honey, I wouldn't want you to hurt yourself lifting these big " +
                "heavy boxes. Come to the back, I have some work better suited for " +
                "those weak girly arms of yours. Follow me. ",
            button: [
                { chatID: 54, text: "*sigh*", callback: "room1" }
            ]
        },
        {
            chatID: 54,
            speaker: "landlord",
            text: "This is the donation room. When I have a customer that needs a " +
                "bit of extra help I'll call you in to help. You can wait in the " +
                "the break room until I need you. ",
            button: [
                { chatID: -1, text: "ok", callback: "room352" }
            ]
        },
        {
            chatID: 55,
            speaker: "landlord",
            text: "Did you come in to help me out?",
            button: [
                { chatID: -1, text: "Yes I am!", callback: "room352" },
                { chatID: -1, text: "Nope, just saying hi. ", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
