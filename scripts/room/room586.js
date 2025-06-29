//Room name
var room586 = {};
room586.main = function () {
    let roomEvents = room585.getRoomsNow(false);
    nav.button({
        "type": "btn",
        "name": "keg",
        "left": 1474,
        "top": 126,
        "width": 175,
        "height": 433,
        "title": "Have a beer",
        "image": "586_kitchen/keg.png"
    }, 586);

    switch (Math.floor(g.gethourdecimal())) {
        case 20:
        case 21:
            nav.button({
                "type": "btn",
                "name": "stacy",
                "left": 106,
                "top": 18,
                "width": 755,
                "height": 1062,
                "image": "586_kitchen/stacy.png"
            }, 586);
            nav.bg("586_kitchen/bg.jpg");
            break;
        case 22:
            if (roomEvents.r9 === "stacy") {
                nav.button({
                    "type": "btn",
                    "name": "chuck",
                    "left": 158,
                    "top": 32,
                    "width": 540,
                    "height": 1048,
                    "image": "586_kitchen/chuck.png"
                }, 586);
            }
            nav.bg("586_kitchen/bg_22.jpg");
            break;
        case 23:
            nav.bg("586_kitchen/bg_23.jpg");
            break;
        case 0:
            nav.bg("586_kitchen/bg_0.jpg");
            break;
        default:
            nav.bg("586_kitchen/bg_1.jpg");
            break;
    }
    nav.buildnav([585, 587, 588, 589]);
};

room586.btnclick = function (name) {
    switch (name) {
        case "stacy":
            if (sc.getMission("stacy", "cheer").startedOrComplete) {
                chat(4, 586);
            }
            else {
                chat(3, 586);
            }
            break;
        case "keg":
            nav.button({
                "type": "img",
                "name": "beer",
                "left": 623,
                "top": 540,
                "width": 802,
                "height": 540,
                "image": "586_kitchen/beer.png"
            }, 586);
            var thisBeer = levels.beer(1);
            if (thisBeer.passout) {
                chat(0, 586);
            }
            else if (thisBeer.nextOneDrunk)
                chat(1, 586);
            else
                chat(2, 586);
            break;
        case "chuck":
            if (sc.getMission("chuck", "fuck").inProgress) {
                switch (sc.taskGetStep("chuck", "fuck")) {
                    case 0: chat(7, 586); break;
                    case 1: chat(12, 586); break;
                    case 2: chat(22, 586); break;
                    case 3: chat(28, 586); break;
                }
                
            }
            else {
                chat(5, 586);
            }
            break;
        case "suckchuck":
            if (g.internal < 8) {
                nav.bg("586_kitchen/chuck_" + g.internal + ".jpg");
            }
            else {
                nav.bg("588_doofus/bg.jpg");
                nav.killbutton("suckchuck");
                chat(21, 586);
            }
            g.internal++;
            break;
        case "chuck2":
            if (g.internal === 9)
                nav.bg("586_kitchen/chuck2_9.gif");
            else if (g.internal > 15) {
                nav.killbutton("chuck2");
                nav.bg("586_kitchen/chuck2_16.jpg");
                chat(27, 586);
            }
            else if (g.internal === 10) {
                levels.anal(2, true, "m", true, "chuck");
                nav.bg("586_kitchen/chuck2_10.jpg");
            }
            else {
                nav.bg("586_kitchen/chuck2_" + g.internal + ".jpg");
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room586.chatcatch = function (callback) {
    switch (callback) {
        case "chuck_0":
        case "chuck_2":
        case "chuck_3":
        case "chuck2_0":
            nav.killall();
            nav.bg("586_kitchen/" + callback + ".jpg");
            break;
        
        case "chuck_4":
            nav.bg("586_kitchen/" + callback + ".jpg");
            g.internal = 5;
            nav.next("suckchuck");
            break;
        case "chuck_0_end":
            sc.completeMissionTask("chuck", "fuck", 0);
            char.settime(23, 2);
            char.room(585);
            break;
        case "room450":
            g.pass = 450;
            char.room(28);
            break;
        case "reset30":
            char.addtime(30);
            char.room(586);
            break;
        case "reset60":
            char.addtime(60);
            char.room(586);
            break;
        case "reset":
            char.room(586);
            break;
        case "chuck_7_end":
            sc.completeMissionTask("chuck", "fuck", 1);
            levels.oral(2, "m", "chuck", true);
            char.settime(23, 2);
            char.room(585);
            break;
        case "chuck2_2":
            nav.bg("586_kitchen/" + callback + ".jpg");
            g.internal = 3;
            nav.next("chuck2")
            break;
        case "chuck2_1":
            cl.nude();
            nav.bg("586_kitchen/" + callback + ".jpg");
            break;
        case "chuck2_end":
            cl.undo();
            sc.completeMissionTask("chuck", "fuck", 2);
            char.addtime(60);
            char.room(585);
            break;
        default:
            break;
    }
};

room586.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I think I've had too many.....",
            button: [
                { chatID: -1, text: "[Pass out]", callback: "room450" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Oh wow. I'm really feeling it. I better not drink anymore.",
            button: [
                { chatID: -1, text: "...", callback: "reset30" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Icky. I wish that had a fruitier yummy drink. ",
            button: [
                { chatID: -1, text: "...", callback: "reset30" }
            ]
        },
        {
            chatID: 3,
            speaker: "stacy",
            text: "*ugh* gross. Why are you talking to me loser? You trying to fuck " +
                "my friend? Well you can fuck right off slut. ",
            button: [
                { chatID: -1, text: "I.. uhhh.. no", callback: "reset30" }
            ]
        },
        {
            chatID: 4,
            speaker: "stacy",
            text: "Hey new girl! You shouldn't be drinking. Wouldn't want you hung over " +
                "at practice tomorrow, or we'll kick your balls in! ",
            button: [
                { chatID: -1, text: "*sigh* Yes Stacy", callback: "reset30" }
            ]
        },
        {
            chatID: 5,
            speaker: "chuck",
            text: "Heck of a party! There's so many people here I lost Stacy again. " +
                "You haven't seen her have you?",
            button: [
                { chatID: 6, text: "Nope", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "chuck",
            text: "That's cool. She's probably outside having a vape. I'm going to go look for her. ",
            button: [
                { chatID: -1, text: "Yeah. Probably best to look outside. ", callback: "reset60" }
            ]
        },
        {
            chatID: 7,
            speaker: "chuck",
            text: "Heck of a party! There's so many people here I lost Stacy again. " +
                "You haven't seen her have you?",
            button: [
                { chatID: 8, text: "I have. Can you keep a secret?", callback: "" },
                { chatID: 6, text: "Nope", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "chuck",
            text: "Why would I need to keep a secret?",
            button: [
                { chatID: 9, text: "You'll see. If you can keep it a secret I showed you. ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "chuck",
            text: "Ok. Sure. What's up? ",
            button: [
                { chatID: 10, text: "Follow me. ", callback: "chuck_0" },
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "*whispering* There's Stacy. Getting railed out by Utah. Happens all " +
                "the time. ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "chuck",
            text: "*whispering* Fuck. She said she was saving herself. She's been lying " +
                "to me all this time.... *tear* I have to go. I'm sorry. I can't be here " +
                "right now. ",
            button: [
                { chatID: -1, text: "I know. ", callback: "chuck_0_end" },
            ]
        },
        {
            chatID: 12,
            speaker: "chuck",
            text: "It's you again. You haven't seen Stacy...",
            button: [
                { chatID: 13, text: "*sigh* Yeah", callback: "" },
                { chatID: 6, text: "Nope. ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "chuck",
            text: "She's not... She's not in there again? Please tell me last time " +
                "was a one time thing.",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Look Chuck. I like you, but you have to stand up for yourself. " +
                "Stacy doesn't love you, she's just using you for a ride so she can " +
                "ride Utah's dick. It happens at cheer practice, it happens at parties, " +
                "it even happens after the game. You have to get over her and find someone " +
                "that likes you for you. ",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "chuck",
            text: "You're right! She is such a bitch! Always Chuck do this, or Chuck do that. " +
                "It's never about what Chuck wants! Fuck! How could I be so stupid? She's in there " +
                "getting fucked by that asshole Utah and I'm just standing out here ready to give " +
                "her a ride home. I'm so stupid! ",
            button: [
                { chatID: 16, text: "Hey, do you want to get back at her? ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "chuck",
            text: "Yes I do! Maybe I'll make her walk to the next cheer practice! ",
            button: [
                { chatID: 17, text: "No. I mean really get back at her? ", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "chuck",
            text: "Yeah! But how?",
            button: [
                { chatID: 18, text: "Follow me...", callback: "chuck_2" }
            ]
        },
        {
            chatID: 18,
            speaker: "chuck",
            text: "What are we doing in Doofus's room. Stacy told me the rooms are " +
                "off limits. ",
            button: [
                { chatID: 19, text: "They aren't. You're really uptight. Let me help you relax.", callback: "chuck_3" }
            ]
        },
        {
            chatID: 19,
            speaker: "chuck",
            text: "Hey! Don't unzip my pants. Someone might see. ",
            button: [
                { chatID: -1, text: "[Slide his cock into your mouth]", callback: "chuck_4" }
            ]
        },
        {
            chatID: 20,
            speaker: "chuck",
            text: "OOoooo wow.... That feels so much better than masturbating. ",
            button: [
                { chatID: -1, text: "*suck*", callback: "chuck_4" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "Dammit! He came too quickly! Next time I'll get him to fuck me " +
                "and yell out his name really loud so Stacy can hear. Then I'll have my " +
                "revenge! Hahahahahahah",
            button: [
                { chatID: -1, text: "...", callback: "chuck_7_end" }
            ]
        },
        {
            chatID: 22,
            speaker: "chuck",
            text: "I'm so sorry. I didn't mean to run away last time, it just took me " +
                "by such a suprise. I really like you, but I understand if you never " +
                "want to talk to me again. ",
            button: [
                { chatID: 23, text: "It's ok. It happens to all men. ", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "chuck",
            text: "Really? You don't think we can try again? I really want to lose my " +
                "virginity, and I think you're the perfect girl to lose it to. Just don't " +
                "tell Stacy. I don't want the drama, you know. ",
            button: [
                { chatID: 24, text: "Yeah, sure. Our secret. Follow me. ", callback: "chuck_2" }
            ]
        },
        {
            chatID: 24,
            speaker: "chuck",
            text: "So how do we do this? Do I take off my clothes, do I take off your clothes? " +
                "I'm so nervous. I've never been with a girl except for maybe that last time " +
                "we were together. ",
            button: [
                { chatID: 25, text: "[Take off his clothes]", callback: "chuck2_0" }
            ]
        },
        {
            chatID: 25,
            speaker: "chuck",
            text: "Hehe. Do I look ok? I've never been naked infront of a girl before. " +
                "Can I take off your clothes now? ",
            button: [
                { chatID: 26, text: "Sure. You can take off my clothes ", callback: "chuck2_1" }
            ]
        },
        {
            chatID: 26,
            speaker: "chuck",
            text: "Wait! Is that a penis? You have a penis? How do you have a penis, " +
                "you're a girl!",
            button: [
                { chatID: -1, text: "[Kiss his neck]", callback: "chuck2_2" }
            ]
        },
        {
            chatID: 27,
            speaker: "chuck",
            text: "I better give her a ride home. I had fun. I think I love you. er.." +
                "I mean I loved this.. crap. Gotta run. Bye.",
            button: [
                { chatID: -1, text: "Bye", callback: "chuck2_end" }
            ]
        },
        {
            chatID: 28,
            speaker: "chuck",
            text: "Future release. ",
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