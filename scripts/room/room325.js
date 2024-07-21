//Room name
var room325 = {};
room325.main = function () {
    if (g.isNight()) {
        chat(4, 325);
    }
    else if (daily.get("rachel")) {
        chat(20, 325);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "rachel",
                "left": 1066,
                "top": 74,
                "width": 675,
                "height": 1006,
                "image": "325_farm/rachel.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 325);
        });
    }
    var navList = [0];
    nav.buildnav(navList);
};

room325.btnclick = function (name) {
    switch (name) {
        case "rachel":
            var notStartedMilk = sc.getMission("rachel", "milk").notStarted;
            if (sc.getMission("rachel", "horse").notStarted) {
                daily.set("rachel");
                chat(0, 325);
            }
            else if (notStartedMilk && cl.c.chest > 2) {
                chat(11, 325);
            }
            else if (!notStartedMilk) {
                if (gv.get("milk") < .7) {
                    chat(22, 325);
                }
                else {
                    if (sc.getMissionTask("rachel", "milk", 0).notStarted)
                        chat(23, 325);
                    else
                        chat(36, 325);
                }
            }
            else {
                chat(21, 325);
            }
            //var rachelStep = sc.getstep("rachel");
            //switch (rachelStep) {
            //    case 0:
            //        chat(0, 325);
            //        break;
            //    case 1:
            //        var milkmilk = gv.get("milk");
            //        if (milkmilk > -1) {
            //            if (milkmilk < .6)
            //                chat(22, 325);
            //            else
            //                chat(23, 325);
            //        }
            //        else if (milkmilk === -1 && cl.c.chest > 3) {
            //            chat(11, 325);
            //        }
            //        else {
            //            chat(21, 325);
            //        }
            //        break;
            //    case 2:
            //        if (sc.getstep("envy") === 14) {
            //            chat(37, 325);
            //            sc.setstep("envy", 15);
            //        }
            //        else if (gv.get("milk") < .6)
            //            chat(22, 325);
            //        else
            //            chat(36, 325);
            //        break;
            //}
            break;
        case "pill":
            daily.set("rachel");
            nav.killall();
            gv.set("milk", 0);
            sc.startMission("rachel", "milk");
            nav.bg("325_farm/bg.jpg", "325_farm/bg_night.jpg");
            nav.button({
                "type": "img",
                "name": "rachel",
                "left": 1066,
                "top": 74,
                "width": 675,
                "height": 1006,
                "image": "325_farm/rachel.png"
            }, 325);
            chat(16, 325);
            break;
        default:
            break;
    }
};

room325.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "barn0":
            nav.bg("326_stable/bg.jpg");
            break;
        case "horse1":
            nav.killall();
            nav.bg("326_stable/horse1.jpg");
            break;
        case "horse1a":
            nav.bg("326_stable/horse1a.jpg");
            break;
        case "horse2":
            nav.bg("326_stable/bg.jpg");
            nav.button({
                "type": "brush",
                "name": "horse",
                "left": 391,
                "top": 18,
                "width": 1378,
                "height": 1062,
                "image": "326_stable/horse.png"
            }, 325);
            break;
        case "rachel1end":
            sc.startMission("rachel", "horse");
            sc.completeMissionTask("rachel", "horse", 0);
            sc.show("rachel");
            sc.show("horse");
            char.addtime(120);
            if (cl.c.chest > 2)
                chat(12, 325);
            else
                char.room(0);
            break;
        case "pill":
            nav.killall();
            sc.select("pill", "325_farm/icon_pill.png", 1);
            nav.bg("325_farm/pill.jpg");
            nav.button({
                "type": "img",
                "name": "pill",
                "left": 909,
                "top": 427,
                "width": 197,
                "height": 126,
                "image": "325_farm/pill.png"
            }, 325);
            break;
        case "stable":
            char.room(326);
            break;
        case "milk0":
            nav.killall();
            nav.bg("327_milking/processing.jpg");
            break;
        case "milk1":
            nav.bg("327_milking/milkparlor.jpg");
            break;
        case "milk2":
            nav.bg("327_milking/visiting.jpg");
            break;
        case "milk3":
            nav.bg("327_milking/milk3.jpg");
            break;
        case "milk4":
            cl.nude();
            nav.bg("327_milking/milk4.jpg");
            break;
        case "milk5":
            nav.bg("327_milking/milk5.jpg");
            break;
        case "milk6":
            nav.bg("327_milking/milk6.jpg");
            break;
        case "milk7":
            gv.set("milk", 0);
            cl.display();
            nav.bg("327_milking/milk7.jpg");
            break;
        case "milk8":
            cl.undo();
            daily.set("rachel");
            gv.mod("money", 50);
            sc.show("kinsey");
            sc.completeMissionTask("rachel", "milk", 0);
            char.room(0);
            break;
        case "milkme":
            char.room(327);
            break;
        case "outside":
            nav.bg("325_farm/bg.jpg");
            nav.button({
                "type": "btn",
                "name": "rachel",
                "left": 1066,
                "top": 74,
                "width": 675,
                "height": 1006,
                "image": "325_farm/rachel.png"
            }, 325);
            break;
        default:
            break;
    }
};

room325.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "rachel",
            text: "Howdy stranger. What brings you to my farm? ",
            button: [
                { chatID: 1, text: "Just wandering around I guess. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "rachel",
            text: "Wanderin' huh. Well you better wander somewhere else, 'lessen you want to shovel horse shit fer me. ",
            button: [
                { chatID: 2, text: "Would I get paid? ", callback: "" },
                { chatID: -1, text: "Gross, no. I 'lessin I'll leave now. ", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "rachel",
            text: "Oh we got a worker don't we. I'll tell you what kid, I got a farm hand that does that, be he " + 
                "is shit at brushing the horses. You brush my horse and I'll pay you $20 a day. How's 'bout it?",
            button: [
                { chatID: 3, text: "That sounds awesome! ", callback: "" },
                { chatID: -1, text: "I don't need any money. ", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "rachel",
            text: "Arright. Follow me to the li'l barn and I'll show you how it's done. ",
            button: [
                { chatID: 5, text: "Follow her", callback: "barn0" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "It's really spooky here at night. I better leave. ",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 5,
            speaker: "rachel",
            text: "This here's the horse stable. I just need you to brush ol " + sc.n("horse") + " here. Jimmy say hi to the new farm hand. ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "horse",
            text: "*Snorts* ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "rachel",
            text: "Lets pull him out of the pen so you can brush him. ",
            button: [
                { chatID: 8, text: "ok", callback: "horse1" }
            ]
        },
        {
            chatID: 8,
            speaker: "rachel",
            text: "That's a good boy. I'm just going to give you a li'l brushin'. You need to be careful with his undercarriage, he can get a little randy " +
                "if you're too vigorous down there. ",
            button: [
                { chatID: 9, text: "...", callback: "horse1a" }
            ]
        },
        {
            chatID: 9,
            speaker: "rachel",
            text: "'course maybe you do want to rub a bit vigorous. *wink*",
            button: [
                { chatID: 10, text: "uhhh wha, no.", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "rachel",
            text: "Like I said, jobs yours if you want it. Just stop by during the day. Now I gotta get back to some real work. I'm sure " +
                "you'll see yourself out. ",
            button: [
                { chatID: -1, text: "See ya.", callback: "rachel1end" }
            ]
        },
        {
            chatID: 11,
            speaker: "rachel",
            text: "Oh my. I don't think we've been acquainted.  ",
            button: [
                { chatID: 13, text: "What do you mean. We've met. ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "rachel",
            text: "Wait a minute. Lets step outside. I do want to say hello to those amazing milk jugs you have in the light. ",
            button: [
                { chatID: 13, text: "You like? ", callback: "outside" }
            ]
        },
        {
            chatID: 13,
            speaker: "rachel",
            text: "I'm not talking to you. I'm talking to those beautiful pair of breasts you have. So much potential there! ",
            button: [
                { chatID: 14, text: "Oh, you like?  ", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "rachel",
            text: "I don't like them, I love them, I need them! Tell me, are you lactating? ",
            button: [
                { chatID: 15, text: "...lactating? ", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "rachel",
            text: "I'll take that as a no. Here take this pill. It's completely safe.  ",
            button: [
                { chatID: -1, text: "hmmm", callback: "pill" },
                { chatID: -1, text: "[Run away]", callback: "leave" },
            ]
        },
        {
            chatID: 16,
            speaker: "rachel",
            text: "That's a good girl. Swallow it down for mommy. That's my improved Lactaid pill. Unlike other pills that " +
                "don't work or take forver for little results this one will fill those beautiful breasts with so much milk " +
                "you'll have to come here to get empty. ",
            button: [
                { chatID: 17, text: "What! Do you mean I'm going to be leaking milk from my tits all day?", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "rachel",
            text: "Well, it's too late for that now. That pill is tricks your body into creating milk and it's quite long " +
                "lasting. My first hucow took it 3 years ago and she's still producing some of the finest quality milk. Just " +
                "don't go too long without a milking or you'll wake up squirting milk all over. ",
            button: [
                { chatID: 18, text: "But I don't to squirt milk.", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "rachel",
            text: "Don't worry just come here when you're full and I'll give you a good milking and a decent paycheck. Breast " +
                "milk from hucows are worth a pretty penny in these parts, and breasts your size will produce so much milk. ",
            button: [
                { chatID: 19, text: "I can't believe you've done this to me.", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "rachel",
            text: "I can't believe you just took a pill without knowing what it was. What's done is done. You'll make a fine " +
                "addition to my farm. Now I've got some hucows to milk. Come back when you're at least half full. The more " +
                "you pump the more milk you produce. ",
            button: [
                { chatID: -1, text: "Grrrrr", callback: "leave" }
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "I've already visited today. Maybe I'll come back tomorrow. ",
            button: [
                { chatID: -1, text: "....", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "rachel",
            text: "Here to brush the horse? I think " + sc.n("horse") + " is starting to like you. ",
            button: [
                { chatID: -1, text: "I sure am!", callback: "stable" },
                { chatID: -1, text: "No. ", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "rachel",
            text: "I can tell your milks a little low. Take some hormones and get some sleep. In the mean time " +
                "are you here to brush the horse? I think " + sc.n("horse") + " is starting to like you. ",
            button: [
                { chatID: -1, text: "I sure am!", callback: "stable" },
                { chatID: -1, text: "No. ", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "rachel",
            text: "You look ready to milk. I think " + sc.n("horse") + " is starting to like you. ",
            button: [
                { chatID: 24, text: "I'm looking for my first milking. ", callback: "" },
                { chatID: -1, text: "I want to brush the horse", callback: "stable" },
                { chatID: -1, text: "I'm not sure why I'm here. ", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "rachel",
            text: "This is a big day. For you. Follow me into the big barn.  ",
            button: [
                { chatID: 25, text: "...", callback: "milk0" },
            ]
        },
        {
            chatID: 25,
            speaker: "rachel",
            text: "This here is the processin' area. I got so much demand for milk you wouldn't believe it. To keep this place running " +
                "I have to have around 100 hucows. Most earn a good living... if they follow the rules, you know what I mean. " +
                "You seem like a good girl, I'm sure you'll be just fine. You'll get a  " +
                "healthy paycheck each time you come on by. Now follow me to the milking parlor viewing booth. ",
            button: [
                { chatID: 26, text: "[Follow her]", callback: "milk1" },
            ]
        },
        {
            chatID: 26,
            speaker: "rachel",
            text: "This here is my milking parlor. As you can see I have a large collection of hucows that I've employed. All busy " +
                "little cows makin' milk for me. I really do love this view. It's the view of money. You know how I started this farm? ",
            button: [
                { chatID: 27, text: "How? ", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "rachel",
            text: "I used to only have cows, till them big city people started their mega farms and nearly put me under. " +
                "Times were rough until I started talking to a client that only wanted breast milk. Well I figured a way to " +
                "make my own from my own tits. And that kept me afloat for a while, but I was barely making it till I got the " +
                "idea to invite some friends and give them a cut. Pretty soon I had girls lining up. I had to sell my cows and " +
                "convert the cow pen to a hucow pen. Lets go down and we'll get to milk ya. ",
            button: [
                { chatID: 28, text: "ok. ", callback: "milk2" },
            ]
        },
        {
            chatID: 28,
            speaker: "rachel",
            text: "This here is Kinsey, our li'l Irish lassy. Kinsey here was caught trying to pour cows milk into her milking tubes. " +
                "Ruined an entire batch. Now she's pinned here until she replaces all that milk plus interest. It was a rather large " +
                "batch so she's going to be here a while. Don't worry too much, we feed and water her like I did with our cows. " +
                "Kinsey, moo for " + sc.n("me") + " so this girl here can see you know you're place here. ",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "kinsey",
            text: "Mooooooo",
            button: [
                { chatID: 30, text: "Oh my", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "rachel",
            text: "I showed you Kinsey so you know there are consequences to your actions here. Get milked and get paid. " +
                "Really gosh darn simple. Since this is your first visit I need to do a quality check. Makin' sure it's " +
                "up to my standard. Follow me to the exam room. ",
            button: [
                { chatID: 31, text: "Ok!", callback: "milk3" },
            ]
        },
        {
            chatID: 31,
            speaker: "rachel",
            text: "This is the exam and quality assurance room. Quality milk is of the upmost importance to my clients. " +
                "Strip down, I need to inspect your milk to make sure it's up to my standards. " +
                "",
            button: [
                { chatID: 32, text: "[Strip]", callback: "milk4" },
            ]
        },
        {
            chatID: 32,
            speaker: "rachel",
            text: "And the best way to know my standards is to taste my standards. Come take a taste of some quality lactation darlin'. ",
            button: [
                { chatID: 33, text: "[Take a taste]", callback: "milk5" },
            ]
        },
        {
            chatID: 33,
            speaker: "rachel",
            text: "That's right. Drink up, it is yummy isn't it. Come to my examining table so we can taste each other. ",
            button: [
                { chatID: 34, text: "mMmm yeah", callback: "milk6" },
            ]
        },
        {
            chatID: 34,
            speaker: "rachel",
            text: "Yuuummmmmmm mmMmmm ",
            button: [
                { chatID: 35, text: "ooOooommmmmm", callback: "milk7" },
            ]
        },
        {
            chatID: 35,
            speaker: "rachel",
            text: "You were delicious. There's a real quality to your milk. Here's $50. Come back when you refill. ",
            button: [
                { chatID: -1, text: "Thanks!", callback: "milk8" },
            ]
        },
        {
            chatID: 36,
            speaker: "rachel",
            text: "You look ready to milk. I think " + sc.n("horse") + " is starting to like you. ",
            button: [
                { chatID: -1, text: "Milk me ", callback: "milkme" },
                { chatID: -1, text: "I want to brush the horse", callback: "stable" },
                { chatID: -1, text: "I'm not sure why I'm here. ", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "rachel",
            text: "So. I'm always recruiting new Hucows for my farm, the bigger the udders the better.  ",
            button: [
                { chatID: 38, text: "Huh?", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "rachel",
            text: "You have no idea how big the demand is for my milk, so much so I need more girls. Tell ya what, " + 
                "if you can bring in any new I'll give you a $500 finder's fee. You don't have to do anything, just bring her " +
                "on by. ",
            button: [
                { chatID: 39, text: "Let me think on that. ", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "thinking",
            text: "Hmmm...... Who do I know with high tits and willing to be milked everyday? Hmmm....." +
                "Oh! I know! " + sc.n("envy") + "!!!! She's so deep under I bet I could just tell her to to get milked. " +
                "Plus I know she was thinking of it before she became a fuck doll for the entire town. I'll visit her to see " +
                "if she'll do it. ",
            button: [
                { chatID: -1, text: "I'll go talk to " + sc.n("envy") + "!!!", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};