//room
var room101 = {};

room101.main = function () {
    g.internal = { s: "Can you tell me how my cum tastes?", r: "I bet it tastes delicious", p: "" };
    var tinaRel = sc.getstep("tina");
    var name = "tina";
    if (g.get("jobConstWorkToday") === 1) {
        nav.button({
            "type": "btn",
            "name": "tina",
            "left": 810,
            "top": 299,
            "width": 439,
            "height": 711,
            "image": "101_constFrontOffice/sit1.png"
        }, 101);
            navList = [100];
        chat(5, 101);
    }
    else {
        var image = "sit1.png";
        if (tinaRel < 5)
            image = "sit1.png";
        else if (tinaRel < 10)
            image = "sit2.png";
        else if (Math.floor(Math.random() * 5) === 0) {
            image = "101_jackit.png";
            name = "jackit";
        }
        else {
            if (Math.floor(Math.random() * 3) === 0)
                image = "sit3.png";
            else
                image = "sit2.png";
        }
        var btnList = [
            {
                "type": "btn",
                "name": name,
                "left": 810,
                "top": 299,
                "width": 439,
                "height": 711,
                "image": "101_constFrontOffice/" + image
            }
        ];

        var navList = [100];
        if (sc.getstep("construction") > 1 && g.dt.getHours() < 18)
            navList = [102, 100];

        $.each(btnList, function (i, v) {
            nav.button(v, 101);
        });
    }
    nav.buildnav(navList);
};

room101.btnclick = function (name) {
    switch (name) {
        case "tina":
            if (sc.getstep("construction") === 0)
                chat(1, 101);
            else if (sc.getstep("construction") === 1)
                chat(3, 101);
            else if (g.get("jobConstWorkToday") === 1) 
                chat(5, 101);
            else if (g.get("jobConstWorkToday") === 2) {
                chat(8, 101);

            }
            else if (g.hourBetween(6, 9))
                chat(9, 101);
            else
                chat(10, 101);
            break;
        case "jackit":
            nav.killbutton("jackit");
            nav.button({
                "type": "btn",
                "name": "tina",
                "left": 810,
                "top": 299,
                "width": 439,
                "height": 711,
                "image": "101_constFrontOffice/jackit1.png"
            }, 101);
            chat(11, 101);
            break;
        default:
            break;
    }
};

room101.chatcatch = function (callback) {
    var tinaRel = sc.getstep("tina");
    switch (callback) {
        case "leave":
            char.room(100);
            break;
        case "angry":
            sc.setstep("tina", -1);
            break;
        case "createDoor":
            char.room(102);
            break;
        case "payTheMan":
            g.mod("money", g.get("jobConstructionPay"));
            g.set("jobConstWorkToday", 2);
            break;
        case "hitOnTinaFunny":
            var image = "laugh1.png";
            if (tinaRel < 5)
                image = "laugh1.png";
            else if (tinaRel < 10)
                image = "laugh2.png";
            else
                image = "laugh3.png";

            if (tinaRel < 16)
                sc.incstep("tina", 1);
            nav.killbutton("tina");
            nav.button({
                "type": "btn",
                "name": "tina",
                "left": 810,
                "top": 299,
                "width": 439,
                "height": 711,
                "image": "101_constFrontOffice/" + image
            }, 101);
            break;
        case "nicePickupLine":
            if (tinaRel < 8) {
                sc.incstep("tina", 1);
                chat(15, 101);
            }
            else
                chat(16, 101);
            break;
        case "dirtyPickup":
            if (tinaRel < 10) {
                chat(17, 101);
                sc.incstep("tina", -1);
            }
            else {
                if (tinaRel < 16)
                    sc.incstep("tina", 1);
                chat(18, 101);
                if (g.internal.p === "tits") {

                    nav.killbutton("tina");
                    nav.button({
                        "type": "btn",
                        "name": "tina",
                        "left": 810,
                        "top": 299,
                        "width": 439,
                        "height": 711,
                        "image": "101_constFrontOffice/tits.png"
                    }, 101);
                }
            }
            break;
        case "postShow":
            nav.killbutton("tina");
            nav.button({
                "type": "btn",
                "name": "tina",
                "left": 810,
                "top": 299,
                "width": 439,
                "height": 711,
                "image": "101_constFrontOffice/jackit2.png"
            }, 101);
            room101.btnclick("tina");
            break;
        default:
            break;
    }
};

room101.chat = function (chatID) {
    var pickUpLine = [
        "Was your mother a beaver? 'Cause damn!",
        "Your breasts remind me of Mount Rushmore — my face should be among them.",
        "It's handy that I have my library card because I'm totally checking you out.",
        "Did you just fart? Because you blow me away!",
        "Do you work at Subway? 'Cause you just gave me a foot-long.",
        "I hear you're looking for a stud. Well, I've got the STD and all I need is you.",
        "Are those space pants? Because your ass is outta this world!",
        "Do you have a Band-Aid? 'Cause I scraped my knee falling for you.",
        "If you were a Transformer, you'd be Optimus Fine.",
        "I've lost my teddy bear! Can I sleep with you instead?",
        "Hey, baby. Want a raisin? Sorry, none left. Perhaps a date then?",
        "OK, I'm here. What do you want for your next wish?",
        "Do you like pancakes? Well how about IHOP on that ass.",
        "If you were a booger, I'd pick you.",
        "You're like a candy bar: half sweet and half nuts.",
        "Are you religious? Because you're the answer to all my prayers.",
        "You look great and all, but do you know what really looks good on you? Me.",
        "What's your favorite silverware? Because I like to spoon!",
        "Hey I'm looking for treasure, Can I look around your chest?",
        "Are you a musician vampire? Because my organ is filling up with blood.",
        "Hey baby, wanna sit on my lap and we'll talk about the first thing that pops up!?",
        "If it's true that we are what we eat, then I could be you by morning.",
        "I may not be Fred Flintstone, but I bet I can make your Bed Rock.",
        "Tonight this Han doesn’t want to fly Solo.",
        "Is your dad retarded? Because you’re special",
        "My mom thinks I`m gay, can you help me prove her wrong?",
        "You are hotter than the bottom of my laptop.",
        "Would you like Gin and platonic, or do you prefer Scotch and sofa?",
        "What’s the difference between a Ferrari and an erection? I don’t have a Ferrari.",
        "What has 36 teeth and holds back the Incredible Hulk? My zipper.",
        "If I were a dog would you help me bury my bone?",
        "I am participating in the Sexual Olympics multiple orgasm relay race my partner just died of exhaustion. Would you like to help me out?",
        "Excuse me, I’ve seem to have lost my virginity, can I have yours?",
        "Nice hair, wanna mess it up?",
        "Excuse me, I just shit in my pants. Can I get in yours?",
        "Congratulations! You’ve been voted “Most Beautiful Girl In This Room” and the grand prize is a night with me!",
        "Could I touch your belly button…from the inside?",
        "Could you do me a favor? Could you get on your knees and smile like a donut?"
    ];

    var nicePickupLine = [
        "you're looking really good today!",
        "I absolutely love your hair.",
        "I only come here to see your face each day.",
        "I love how cheerful you are each day.",
        "Your smile makes it worth coming to work.",
        "I could stare at you all day.",
        "you're absolutely perfect.",
        "you are easily the most beautiful girl I have ever seen.",
        "I love that outfit",
        "your shirt is a very lovely color"
    ];

    var dirtyArray = [
        { s: "Can you tell me how my cum tastes?", r: "I bet it tastes delicious", p: "" },
        { s: "I want to tie to you up and force feed you my cock.", r: "I love bondage, and rough sex", p: "" },
        { s: "That's a beautiful pussy, can I get a taste?", r: "hehehe " + sc.n("me") + " yes, meet me after work at the local club [Local club not build yet]", p: "" },
        { s: "Do you do anal?", r: "I love a fat cock up my ass! ", p: "" },
        { s: "Would you lick my asshole?", r: "Hmmmm OK, but you'll have to shower first", p: "" },
        { s: "So how many drinks would it take to get into your panties?", r: "hahah you don't have to get me drunk, just give me that cock", p: "" },
        { s: "So how do you take your cock?", r: "rough, with a side of dirty talk.", p: "" },
        { s: "Do you want to ditch this place and go to your place", r: "YES!, but i need the money. You can meet me at the local club and I'll let you do anything you want to me [Local club not build yet]", p: "" },
        { s: "So... are you into fisting?", r: "Oh god! I haven't tried it. maybe...", p: "" },
        { s: "You look sick, mind if I take your temperature rectally?", r: "Only if you use your cock!", p: "" },
        { s: "My erection has lasted for more than 4 hours, why don't we play doctor at your place. ", r: "I'll be your naught nurse, Meet me at the local club. [Local club not build yet]", p: "" },
        { s: "Show me them titties girl", r: "OK", p: "tits" },
        { s: "So what do you want to do later? ", r: "I want you to use every little hole in my tiny body. Meet me at the club big boy [Local club not build yet]", p: "" },
        { s: "So are you an exhibitionist, 'cause I would love to see those tits.", r: "Here you go! ", p: "tits" },
        { s: "If I told you, you had a beautiful body, would you show it to me?", r: "Gladly!", p: "tits" },
        { s: "Are you wearing a bra?", r: "Hahaha... no. See", p: "tits" }
    ];
    if (chatID === 13)
        g.internal = dirtyArray[Math.floor(Math.random() * dirtyArray.length)];

    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "hmmmm",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tina",
            text: "Hello sir, what can i do for you?",
            button: [
                { chatID: -1, text: "Nothing, it appears I'm lost.", callback: "leave" },
                { chatID: 2, text: "You can help me out of your clothes.", callback: "angry" }
            ]
        },
        {
            chatID: 2,
            speaker: "tina",
            text: "Who says that!? You need to leave before I call the police!",
            button: [
                { chatID: -1, text: ":/", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "tina",
            text: "Hello sir, what can i do for you?",
            button: [
                { chatID: 4, text: "I'm here for the job", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "tina",
            text: "Perfect, please enter the door to the boss' office",
            button: [
                { chatID: -1, text: "yes ma'am", callback: "createDoor" }
            ]
        },
        {
            chatID: 5,
            speaker: "tina",
            text: "Hay honey, here for your money?",
            button: [
                { chatID: 6, text: "yep", callback: "payTheMan" }
            ]
        },
        {
            chatID: 6,
            speaker: "tina",
            text: "Here you go",
            button: [
                { chatID: -1, text: "Thanks babe", callback: "" },
                { chatID: 13, text: "Flirt with " + sc.n("tina"), callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "tina",
            text: "hehehe, you're soo cute!",
            button: [
                { chatID: -1, text: "Thanks babe", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "tina",
            text: "Hay " + sc.n("me") + " What do you want to talk about?",
            button: [
                { chatID: 12, text: "How much do I get paid each day?", callback: "payQuestion" },
                { chatID: sc.getstep("tina") < 10 ? 19 : sc.getstep("tina") < 16 ? 20 : 21, text: "How beautiful you are.", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "tina",
            text: "Hay " + sc.n("me") + "! The workday has started, you need to get out there and start working. ",
            button: [
                { chatID: -1, text: "OK see you later babe", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "tina",
            text: "Sorry " + sc.n("me") + " The workday starts before 10 AM. Please come back first thing in the morning. ",
            button: [
                { chatID: -1, text: "OK see you later babe", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "tina",
            text: "Oh My God! I can't believe you caught me getting busy with myself. I just can't help it being around " +
                "so many sexy guys all day. ",
            button: [
                { chatID: 12, text: "Don't worry " + sc.n("tina") + ", I was enjoying the show.", callback: "postShow" }
            ]
        },
        {
            chatID: 12,
            speaker: "tina",
            text: "You get $" + g.get("jobConstructionPay") + " each day you work. ",
            button: [
                { chatID: -1, text: "Thanks " + sc.n("tina"), callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: sc.n("tina") + " ...",
            button: [
                { chatID: 14, text: pickUpLine[Math.floor(Math.random() * pickUpLine.length)], callback: "hitOnTinaFunny" },
                { chatID: -1, text: nicePickupLine[Math.floor(Math.random() * nicePickupLine.length)], callback: "nicePickupLine" },
                { chatID: -1, text: g.internal.s, callback: "dirtyPickup" }
            ]
        },
        {
            chatID: 14,
            speaker: "tina",
            text: "HAhahah " + sc.n("me") + " you're so funny!",
            button: []
        },
        {
            chatID: 15,
            speaker: "tina",
            text: "That's nice, thanks " + sc.n("me") + ".",
            button: []
        },
        {
            chatID: 16,
            speaker: "tina",
            text: "Awwwww " + sc.n("me") + " you're sweetest, but I don't like sweets; I like rough dominating cock.",
            button: []
        },
        {
            chatID: 17,
            speaker: "tina",
            text: sc.n("me") + "!!!",
            button: []
        },
        {
            chatID: 18,
            speaker: "tina",
            text: g.internal.r,
            button: []
        },
        {
            chatID: 19,
            speaker: "tina",
            text: "Awwww you're cute.",
            button: []
        },
        {
            chatID: 20,
            speaker: "tina",
            text: "OK Casanova, if you're going to butter me up, you better eat my muffin.",
            button: []
        },
        {
            chatID: 21,
            speaker: "tina",
            text: "Stop being nice, meet me a the club and get ready to pull my hair. [Club not built yet]",
            button: []
        }
    ];
    return cArray[chatID];
};