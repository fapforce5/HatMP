//room
var room101 = {};

room101.main = function () {
    g.internal = { s: "Can you tell me how my cum tastes?", r: "I bet it tastes delicious", p: "" };
    if (!sc.char[sc.i("tina")].show)
        sc.show("tina");

    if (cl.isCrossdressing()) {
        sc.modSecret("tina", 100);
    }

    if (daily.get("tinamad")) {
        nav.bg("101_constFrontOffice/b8.webp");
        chat(46, 101);
        nav.buildnav([100, 0]);
        return;
    }
    if (sc.getMission("tina", "*leave").complete) {
        nav.bg("101_constFrontOffice/kareem.webp");
        nav.button({
            "type": "btn",
            "name": "kareem",
            "left": 937,
            "top": 275,
            "width": 343,
            "height": 659,
            "image": "101_constFrontOffice/k.webp"
        }, 101);
        nav.buildnav([100, 0]);
        return;
    }
    if (cl.isLewd()) {
        nav.button({
            "type": "btn",
            "name": "tina",
            "left": 810,
            "top": 268,
            "width": 491,
            "height": 715,
            "image": "101_constFrontOffice/sit1.png"
        }, 101);
        chat(22, 101);
    }
    else {
        if (daily.get("construction") && !daily.get("constructionPay")) {
            daily.set("constructionPay");
            if (sc.getLevel("tina") > 6) {
                nav.button({
                    "type": "btn",
                    "name": "tina",
                    "left": 810,
                    "top": 268,
                    "width": 491,
                    "height": 715,
                    "image": "101_constFrontOffice/sit3.png"
                }, 101);
            }
            else if (sc.getLevel("tina") > 4) {
                nav.button({
                    "type": "btn",
                    "name": "tina",
                    "left": 810,
                    "top": 268,
                    "width": 491,
                    "height": 715,
                    "image": "101_constFrontOffice/sit2.png"
                }, 101);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "tina",
                    "left": 810,
                    "top": 268,
                    "width": 491,
                    "height": 715,
                    "image": "101_constFrontOffice/sit1.png"
                }, 101);
            }
            chat(5, 101);
        }
        else {
            var btnList = [
                {
                    "type": "btn",
                    "name": "tina",
                    "left": 810,
                    "top": 268,
                    "width": 491,
                    "height": 715,
                    "image": "101_constFrontOffice/sit1.png"
                }
            ];

            $.each(btnList, function (i, v) {
                nav.button(v, 101);
            });
        }
        nav.buildnav([100,0]);
    }
};

room101.btnclick = function (name) {
    switch (name) {
        case "tina":
            if (gv.get("jobapplyconst") === 0)
                chat(1, 101);
            else if (gv.get("jobapplyconst") === 1)
                chat(3, 101);
            else if (daily.get("construction") && !daily.get("constructionPay")) {
                daily.set("constructionPay");
                chat(5, 101);
            }
            else if (missy.getenvelope("construction").active) {
                chat(23, 101);
            }
            else if (g.hourBetween(6, 9))
                chat(9, 101);
            else {
                chat(8, 101);
            }
            break;
        case "kareem":
            if (!gv.get("constkareem")) {
                gv.set("constkareem", true);
                if (sissy.st[0].ach)
                    chat(47, 101);
                else
                    chat(51, 101);
            }
            else if (daily.get("construction") && !daily.get("constructionPay")) {
                daily.set("constructionPay");
                chat(53, 101);
            }
            else {
                chat(55, 101);
            }
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
    switch (callback) {
        case "leave":
            char.room(100);
            break;
        case "b1":
        case "b3":
        case "b4":
        case "b5":
        case "b6":
        case "b8":
            nav.bg("101_constFrontOffice/" + callback + ".webp");
            break;
        case "angry":
            sc.setstep("tina", -1);
            break;
        case "createDoor":
            char.room(102);
            break;
        case "payTheMan":
            gv.mod("money", gv.get("jobConstructionPay"));
            break;
        case "hitOnTinaFunny":
            nav.killbutton("tina");
            nav.button({
                "type": "btn",
                "name": "tina",
                "left": 810,
                "top": 268,
                "width": 491,
                "height": 715,
                "image": "101_constFrontOffice/laugh1.png"
            }, 101);
            levels.mod("charisma", 15);
            sc.modLevel("tina", 55, 5);

            break;
        case "nicePickupLine":
            levels.mod("charisma", 12);
            if (sc.getLevel("tina") < 2) {
                sc.modLevel("tina", 55);
                chat(15, 101);
            }
            else
                chat(16, 101);
            break;
        case "dirtyPickup":
            if (sc.getLevel("tina") < 5) {
                chat(17, 101);
            }
            else {
                sc.modLevel("tina", 51, 10);
                levels.mod("charisma", 20);
                chat(901, 101);
            }
            break;
        case "tits":
            if (sc.getLevel("tina") < 5) {
                chat(17, 101);
            }
            else {
                sc.modLevel("tina", 51, 10);
                levels.mod("charisma", 20);
                nav.killbutton("tina");
                nav.button({
                    "type": "btn",
                    "name": "tina",
                    "left": 810,
                    "top": 268,
                    "width": 491,
                    "height": 715,
                    "image": "101_constFrontOffice/tits.png"
                }, 101);
                chat(901, 101);
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
            invoker.invokeCurrent("btnclick", "tina");
            break;
        case "endday":
            char.settime(18, 15);
            char.room(0);
            break;
        case "b0":
            nav.kill();
            nav.bg("102_constBoss/102_boss.jpg");
            break;
        case "b2":
            if (sc.getLevel("tina") > 4)
                chat(34, 101);
            else
                chat(33, 101);
            break;
        case "b7":
            nav.bg("101_constFrontOffice/b7.webp");
            if (missy.getenvelope("construction").hasKey) {
                chat(42, 101);
            }
            else {
                chat(41, 101);
            }
            missy.setenvelope("construction");
            break;
        case "b9":
            char.addtime(60);
            daily.set("tinamad");
            sc.completeMissionTopLevelOnly("tina", "cat");
            sc.completeMissionTask("tina", "*leave", 0);
            sc.completeMission("tina", "*leave");
            char.room(100);
            break;
        default:
            break;
    }
};

invoker.registerRoom(101, room101);

room101.chat = function (chatID) {
    if (chatID === 900) {
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
            "Hey. I'm looking for treasure, Can I look around your chest?",
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
            "Excuse me, I seem to have lost my virginity, can I have yours?",
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
            { s: "Can you tell me how my cum tastes?", r: "I bet it tastes delicious", p: "dirtyPickup" },
            { s: "I want to tie to you up and force feed you my cock.", r: "I love bondage, and rough sex", p: "dirtyPickup" },
            { s: "That's a beautiful pussy, can I get a taste?", r: "hehehe " + sc.n("me") + ", you're too much!", p: "dirtyPickup" },
            { s: "Do you do anal?", r: "I love a fat cock up my ass! ", p: "dirtyPickup" },
            { s: "Would you lick my asshole?", r: "Hmmmm OK, but you'll have to shower first", p: "dirtyPickup" },
            { s: "So how many drinks would it take to get into your panties?", r: "hahah you don't have to get me drunk, just give me that cock", p: "" },
            { s: "So how do you take your cock?", r: "rough, with a side of dirty talk.", p: "dirtyPickup" },
            { s: "Do you want to ditch this place and go to your place", r: "YES!, but I need the money.", p: "dirtyPickup" },
            { s: "So... are you into fisting?", r: "Oh god! I haven't tried it. maybe...", p: "dirtyPickup" },
            { s: "You look sick, mind if I take your temperature rectally?", r: "Only if you use your cock!", p: "dirtyPickup" },
            { s: "My erection has lasted for more than 4 hours, why don't we play doctor at your place. ", r: "I'll be your naughty nurse.", p: "" },
            { s: "Show me them titties girl", r: "OK", p: "tits" },
            { s: "That's a tight body, want to show it to me?", r: "Sure", p: "tits" },
            { s: "What color are your nipples?", r: "Pink, see!", p: "tits" },
            { s: "So what do you want to do later? ", r: "I want you to use every little hole in my tiny body.", p: "dirtyPickup" },
            { s: "So are you an exhibitionist, 'cause I would love to see those tits.", r: "Here you go! ", p: "tits" },
            { s: "If I told you, you had a beautiful body, would you show it to me?", r: "Gladly!", p: "tits" },
            { s: "Are you wearing a bra?", r: "Hahaha... no. See", p: "tits" }
        ];
        let dirtyChoice = dirtyArray[g.rand(0, dirtyArray.length)];
        g.internal = dirtyChoice.r;
        return {
            chatID: 900,
            speaker: "me",
            text: sc.n("tina") + " ...",
            button: [
                { chatID: 15, text: nicePickupLine[g.rand(0, nicePickupLine.length)], callback: "nicePickupLine" },
                { chatID: 14, text: pickUpLine[g.rand(0, pickUpLine.length)], callback: "hitOnTinaFunny" },
                { chatID: 17, text: dirtyChoice.s, callback: dirtyChoice.p }
            ]
        };
    }
    else if (chatID === 901) {
        return {
            chatID: 18,
            speaker: "tina",
            text: g.internal,
            button: [
                { chatID: -1, text: "...", callback: "endday" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "Hmmm.",
                button: [
                    { chatID: 1, text: "", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "tina",
                text: "Hello, sir. What can I do for you?",
                button: [
                    { chatID: -1, text: "Nothing, it appears I'm lost.", callback: "leave" },
                    { chatID: 2, text: "You can help me out of your clothes.", callback: "angry" }
                ]
            },
            {
                chatID: 2,
                speaker: "tina",
                text: "Who says that?! You need to leave before I call the police!",
                button: [
                    { chatID: -1, text: ":/", callback: "leave" }
                ]
            },
            {
                chatID: 3,
                speaker: "tina",
                text: "Hello sir. What can I do for you?",
                button: [
                    { chatID: 4, text: "I'm here for the job", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "tina",
                text: "Perfect. Please enter the door to the boss's office.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "createDoor" }
                ]
            },
            {
                chatID: 5,
                speaker: "tina",
                text: "Hey honey, here for your money?",
                button: [
                    { chatID: 6, text: "yep", callback: "payTheMan" }
                ]
            },
            {
                chatID: 6,
                speaker: "tina",
                text: "Here you go.",
                button: [
                    { chatID: 900, text: "Flirt with " + sc.n("tina"), callback: "" },
                    { chatID: -1, text: "Thanks babe", callback: "endday" },
                ]
            },
            {
                chatID: 7,
                speaker: "tina",
                text: "Hehe, you're so cute!",
                button: [
                 { chatID: -1, text: "Thanks babe", callback: "" }
                   ]
            },
            {
                chatID: 8,
                speaker: "tina",
                text: "Hey " + sc.n("me") + ", what do you want to talk about?",
                button: [
                    { chatID: 12, text: "How much do I get paid each day?", callback: "payQuestion" },
                    { chatID: -1, text: "Nothing", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "tina",
                text: "Hey " + sc.n("me") + "! The workday has started, you need to get out there and start working.",
                button: [
                    { chatID: -1, text: "OK, see you later, babe", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "tina",
                text: "Sorry " + sc.n("me") + ". The workday starts before 10 AM. Please come back first thing in the morning.",
                button: [
                    { chatID: -1, text: "OK, see you later, babe", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "tina",
                text: "Oh my God! I can't believe you caught me getting busy with myself. I just can't help it being around so many sexy guys all day.",
                button: [
                    { chatID: 12, text: "Don't worry " + sc.n("tina") + ", I was enjoying the show.", callback: "postShow" }
                ]
            },
            {
                chatID: 12,
                speaker: "tina",
                text: "You get $" + gv.get("jobConstructionPay") + " each day you work. ",
                button: [
                    { chatID: -1, text: "Thanks " + sc.n("tina"), callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "me",
                text: "noop",
                button: []
            },
            {
                chatID: 14,
                speaker: "tina",
                text: "HAhahah " + sc.n("me") + " you're so funny!",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 15,
                speaker: "tina",
                text: "That's nice, thanks " + sc.n("me") + ".",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 16,
                speaker: "tina",
                text: "Awwww " + sc.n("me") + ", you're the sweetest, but I don't like sweets; I like rough, dominating cock.",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 17,
                speaker: "tina",
                text: sc.n("me") + "!!!",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 18,
                speaker: "tina",
                text: "noop",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 19,
                speaker: "tina",
                text: "Aww, you're cute.",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 20,
                speaker: "tina",
                text: "OK Casanova, if you're going to butter me up, you better eat my muffin.",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 21,
                speaker: "tina",
                text: "Stop being nice, meet me at the club and get ready to pull my hair. [Club not built yet]",
                button: [
                    { chatID: -1, text: "...", callback: "endday" }
                ]
            },
            {
                chatID: 22,
                speaker: "tina",
                text: "Oh my God. Get out now!",
                button: [{ chatID: -1, text: "Of course", callback: "leave" }]
            },
            {
                chatID: 23,
                speaker: "tina",
                text: "Hey cutie! What's up? ",
                button: [
                    { chatID: 24, text: "Came to talk to " + sc.n("construction"), callback: "" },
                    { chatID: -1, text: "Nothin' Just wandering around I guess. ", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "tina",
                text: "Of course. Head on in!",
                button: [
                    { chatID: 25, text: "Thanks!", callback: "b0" },
                ]
            },
            {
                chatID: 25,
                speaker: "construction",
                text: "Hey, bitch tits! What brings you in!",
                button: [
                    { chatID: 27, text: "I need to get into the back door of the C.U.M. compound", callback: "" },
                    { chatID: 26, text: "Not much, just seeing how you're doing. ", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "construction",
                text: "I'm not your fuckin' friend! Get the fuck out!",
                button: [
                    { chatID: -1, text: "eep! ", callback: "leave" },
                ]
            },
            {
                chatID: 27,
                speaker: "construction",
                text: "I love the back door! Hey " + sc.n("tina") + "! Get in here! ",
                button: [
                    { chatID: 28, text: "I uhh..", callback: "b1" },
                ]
            },
            {
                chatID: 28,
                speaker: "tina",
                text: "Yes sir?",
                button: [
                    { chatID: 29, text: "...", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "construction",
                text: sc.n("me") + " wants to see some back door action! Bend over my desk so I can show " +
                    gender.pronoun("him") + "!",
                button: [
                    { chatID: 30, text: "...well", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "tina",
                text: "I don't know if I can do that. I only have sex with boys I really really like. No " +
                    "offense sir, but I don't really really like you. I've only let 2 boys ever have sex " +
                    "with me. ",
                button: [
                    { chatID: 31, text: "...", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "construction",
                text: "Well it looks like you'll just have to convince her to bend over this desk. I " +
                    "only hired her to be balls deep in that, ya know! ",
                button: [
                    { chatID: 32, text: "[Try to convince her]", callback: "" },
                    { chatID: -1, text: "Naw. " + sc.n("tina") + " you're too good for that. ", callback: "leave" },
                ]
            },
            {
                chatID: 32,
                speaker: "me",
                text: sc.n("tina") + " We've known each other for a while now...[Go into a long story about " +
                    "how badly you need her to do this for you as her long time friend.]",
                button: [
                    { chatID: -1, text: "[Wait for her answer. ]", callback: "b2" },
                ]
            },
            {
                chatID: 33,
                speaker: "tina",
                text: "Not a chance! We aren't close enough for me to whore myself out for you! *hiss*",
                button: [
                    { chatID: -1, text: "awww. ok. [Need to be level 5 with " + sc.n("tina") + "]", callback: "leave" },
                ]
            },
            {
                chatID: 34,
                speaker: "tina",
                text: "Awwww. *sigh* I really don't want to, but I don't know if I can say no to that " +
                    "face. If you really really want me to, I'll do it. But only if you really really " +
                    "need it. *prrrrr* ",
                button: [
                    { chatID: 35, text: "I know you don't want to, but it's the only way. ", callback: "b3" },
                    { chatID: -1, text: "I can't exploit you. No. I'll find another way. ", callback: "leave" },
                ]
            },
            {
                chatID: 35,
                speaker: "tina",
                text: "*sigh* ok, but don't touch my tail mister! And pull out! I don't want your kittens!  ",
                button: [
                    { chatID: 36, text: "[Watch your friend get fucked for you]", callback: "b4" },
                ]
            },
            {
                chatID: 36,
                speaker: "tina",
                text: "*OW* ouchie. Not so deep! Ouch! That's my uterus you're trying to enter! " + sc.n("me") +
                    " please, please tell him to be gentle! ",
                button: [
                    { chatID: 37, text: sc.n("construction") + " can you take it easy on her please? Just don't be so rough. ", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "construction",
                text: "Nobody *plap* tells me *plap* what to do *smack* in my *plap* office! ",
                button: [
                    { chatID: 38, text: "...", callback: "b5" },
                ]
            },
            {
                chatID: 38,
                speaker: "tina",
                text: "AAAaaa NO! I feel you cumming inside me! I'm not on birth control! ",
                button: [
                    { chatID: 39, text: "oh no", callback: "b6" },
                ]
            },
            {
                chatID: 39,
                speaker: "construction",
                text: "Fuck yeah. You one good fuck! Damn! Now get. And don't go dripping any of that cum on your way " +
                    "out on my floor. ",
                button: [
                    { chatID: 40, text: "...", callback: "b7" },
                ]
            },
            {
                chatID: 40,
                speaker: "construction",
                text: "Fuck yeah. You one good fuck! Damn! Now get. And don't go dripping any of that cum on your way " +
                    "out on my floor. ",
                button: [
                    { chatID: -1, text: "...", callback: "b7" },
                ]
            },
            {
                chatID: 41,
                speaker: "construction",
                text: "So what were we talking about... oh yeah. You wanted to go in the back door of the " +
                    "compound? I don't think there is one. Just a front door. At least that's all I know. " +
                    "Maybe ask the guard at the front if there's a back door. I don't know. ",
                button: [
                    { chatID: 43, text: "Gee, thanks I guess. Let me go check on " + sc.n("tina") + ".", callback: "b8" },
                ]
            },
            {
                chatID: 42,
                speaker: "construction",
                text: "So what were we talking about... oh yeah. You wanted to go in the back door of the " +
                    "compound? They don't like us handing out the code, but I guess I owe you for talking " +
                    sc.n("tina") + " into letting me fuck her. I've been trying to get up in there for months! " +
                    "Anyway, the code is 1-2-3-4-5. ",
                button: [
                    { chatID: 43, text: "Ok, thanks. Let me go check on " + sc.n("tina") + ".", callback: "b8" },
                ]
            },
            {
                chatID: 43,
                speaker: "me",
                text: "Are you alright?",
                button: [
                    { chatID: 44, text: "...", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "tina",
                text: "No, I'm very much not alright. I knew I shouldn't have done that. I knew he would " +
                    "cum inside me. I know everyday I come in he's going to try and have sex with me even " +
                    "more. And I'm pretty sure I might have just gotten pregnant! So no I'm not alright! And " +
                    "it's all your fault for talking me into it!",
                button: [
                    { chatID: 45, text: "I'm so sorry. Can I help with anything?", callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "tina",
                text: "There is nothing you can do to help me! I'm going back home. I hate my home, but at least " +
                    "it's better than being here with you two! If you really want to help, you can help by leaving! " +
                    "Let me get dressed in peace, pack up my things in peace, and leave in peace! ",
                button: [
                    { chatID: -1, text: "Awww. Ok. [leave]", callback: "b9" },
                ]
            },
            {
                chatID: 46,
                speaker: "tina",
                text: "I said get out and let me leave in peace! ",
                button: [
                    { chatID: -1, text: "Awww. Ok. [leave]", callback: "leave" },
                ]
            },
            {
                chatID: 47,
                speaker: "me",
                text: sc.n("!kareem") + "! What are you doing here? Where's " + sc.n("tina") + "?",
                button: [
                    { chatID: 48, text: "...", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "!kareem",
                text: "I don't know any " + sc.n("tina") + " but I was just hired here! Couldn't pass " +
                    "it up! I've been looking for a secretary job and with so many big men around " +
                    "I knew it was my dream job! You know I've been hit on like 30 times this morning " +
                    "you wouldn't believe it! ",
                button: [
                    { chatID: 49, text: "So the girl that was working here...", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "!kareem",
                text: "Oh. I guess the girl that was working here quit. " + sc.n("construction") + 
                    " mentioned that she had a break down and took her to some compound to get help " +
                    "or something. I dunno. I just know that I got the job of my dreams! ",
                button: [
                    { chatID: 50, text: "...", callback: "" },
                ]
            },
            {
                chatID: 50,
                speaker: "thinking",
                text: "Aww fuck. He probably took her to the C.U.M. compound and it's all my fault! " +
                    "I've got to rescue Missy so we can get her out of there!",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "me",
                text: "Who are you? ",
                button: [
                    { chatID: 52, text: "...", callback: "" },
                ]
            },
            {
                chatID: 52,
                speaker: "!kareem",
                text: "Hey sexy, I'm the new girl, " + sc.n("!kareem") + ". Think of cream, but a little " +
                    "extra r-r-r-r. ",
                button: [
                    { chatID: 48, text: "What happened to the girl that was here before? ", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "!kareem",
                text: "Hey honey, here for your money?",
                button: [
                    { chatID: 54, text: "yep", callback: "payTheMan" }
                ]
            },
            {
                chatID: 54,
                speaker: "!kareem",
                text: "Here you go cutie.",
                button: [
                    { chatID: -1, text: "Thanks babe", callback: "endday" },
                ]
            },
            {
                chatID: 55,
                speaker: "!kareem",
                text: "I love this job so much!",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
        ];
        return cArray[chatID];
    }
};
