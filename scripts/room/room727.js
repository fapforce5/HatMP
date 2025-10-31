//Room name
var room727 = {};
room727.main = function () {
    if (g.pass === "727tim") {
        g.pass = "";
        nav.bg("727_bathroom/toilettall.jpg");
        nav.button({
            "type": "img",
            "name": "tim",
            "left": 814,
            "top": 0,
            "width": 454,
            "height": 1080,
            "image": "727_bathroom/tim1.png"
        }, 728);
        nav.button({
            "type": "btn",
            "name": "pants",
            "left": 893,
            "top": 609,
            "width": 363,
            "height": 471,
            "image": "727_bathroom/tim1pants.png"
        }, 727);
        var timStep = sc.taskGetStep("tim", "fuck");
        if (timStep < 2) {
            chat(0, 727);
        }
    }
    else if (g.pass === "supriseSex") {
        nav.button({
            "type": "btn",
            "name": "supriseSex",
            "left": 599,
            "top": 64,
            "width": 135,
            "height": 1016,
            "image": "727_bathroom/stall.png"
        }, 727);
        daily.set("cindy");
        chat(9, 727);
        nav.buildnav([725, 726, 0]);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "mirror",
                "left": 815,
                "top": 251,
                "width": 801,
                "height": 357,
                "image": "727_bathroom/mirror.png"
            },
            {
                "type": "btn",
                "name": "stall",
                "left": 599,
                "top": 64,
                "width": 135,
                "height": 1016,
                "image": "727_bathroom/stall.png"
            },
        ];
        if (!daily.get("tina") && sc.getMission("tina", "cat").startedOrComplete) {
            daily.set("tina");
            if (cl.isCrossdressing())
                sc.modSecret("tina", 100);
            btnList.push({
                "type": "btn",
                "name": "tina",
                "left": 1390,
                "top": 28,
                "width": 370,
                "height": 1052,
                "image": "727_bathroom/tina.webp"
            });
        }
        var navList = [725, 726, 0];
        $.each(btnList, function (i, v) {
            nav.button(v, 727);
        });
        let cllist = cl.hasoutfit("public");
        if (cllist === null) {
            nav.buildnav(navList);
        }
        else {
            g.internal = cllist;
            chat(999, 727);
        }
    }
};

room727.btnclick = function (name) {
    switch (name) {
        case "mirror":
            g.pass = 727;
            char.room(27);
            break;
        case "stall":
            nav.killbutton("stall");
            nav.killbutton("mirror");
            nav.killbutton("tina");
            if (g.pass === "slutfuck") {
                //fuck slut
            }
            else {
                nav.bg("727_bathroom/toilet.jpg");
            }
            break;
        case "pants":
            nav.killbutton("pants");
            nav.modbutton("tim", "727_bathroom/tim2.png", null, null);
            nav.button({
                "type": "kiss",
                "name": "tim2cock",
                "left": 971,
                "top": 700,
                "width": 124,
                "height": 169,
                "image": "727_bathroom/tim2cock.png"
            }, 727);
            chat(1, 727);
            break;
        case "tim2cock":
            nav.killbutton("tim2cock");
            nav.modbutton("tim", "727_bathroom/tim2a.png", null, null);
            chat(2, 727);
            break;
        case "supriseSex":
            nav.killall();
            nav.bg("727_bathroom/girl1.jpg");
            gv.mod("arousal", 100);
            g.roomTimeout = setTimeout(function () { chat(10, 727); }, 2000);
            break;
        case "tina":
            if (sc.getMissionTask("tina", "cat", 2).fail) {
                chat(42, 727);
            }
            else if (sc.getSecret("tina").secretOut) {
                chat(22, 727);
            }
            else if (sc.getLevel("tina") < 7) {
                sc.modLevel("tina", 25, 7);
                if (sc.getMissionTask("tina", "cat", 1).notStarted) {
                    sc.completeMissionTask("tina", "cat", 1);
                    chat(23, 727);
                }
                else
                    chat(25, 727);
            }
            else {
                if (cl.c.chastity === null)
                    chat(26, 727);
                else
                    chat(39, 727);
            }
            break;
        default:
            break;
    }
};

room727.chatcatch = function (callback) {
    switch (callback) {
        case "tina1":
        case "tina2":
        case "tina3":
        case "tina4":
        case "tina5":
        case "tina7":
        case "tina8":
        case "tina9":
            nav.bg("727_bathroom/" + callback + ".jpg");
            break;
        case "tina0":
            nav.kill();
            nav.bg("727_bathroom/" + callback + ".jpg");
            break;
        case "tim2b":
            nav.modbutton("tim", "727_bathroom/tim2b.png", null, null);
            break;
        case "tim2c":
            nav.killbutton("tim");
            nav.bg("727_bathroom/tim2c.jpg");
            break;
        case "tim2d":
            nav.bg("727_bathroom/toilettall.jpg");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 60,
                "top": 0,
                "width": 1170,
                "height": 1080,
                "image": "727_bathroom/time2d.png"
            }, 727);
            //zcl.kneel(-100, 200, 1.5, "open");
            zcl.kneelRedux(150, 300, 1.6, "open", false);
            break;
        case 'tim2da':
            nav.killbutton("tim2d");
            zcl.kneel(-100, 200, 1.5, "open");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 501,
                "top": 0,
                "width": 1170,
                "height": 1080,
                "image": "727_bathroom/time2d.png"
            }, 727);
            zcl.kneelRedux(110, 470, 1.6, "open", false);
            break;
        case "tim2e":
            nav.killbutton("tim2d");
            zcl.displayMain(-250, -800, .9, "mirror");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 883,
                "top": 780,
                "width": 360,
                "height": 300,
                "image": "727_bathroom/tim2e.gif"
            }, 727);
            g.roomTimeout = setTimeout(function () { chat(7, 727); }, 3000);
            break;
        case "tim2f":
            cl.c.cumface = true;
            zcl.displayMain(-200, -200, .6, "mirror");
            nav.killbutton("tim2d");
            nav.button({
                "type": "img",
                "name": "tim2d",
                "left": 1299,
                "top": 0,
                "width": 621,
                "height": 687,
                "image": "727_bathroom/tim2f.png"
            }, 727);

            break;
        case "tim2end":
            gv.mod("giveOralMale", 1);
            daily.set("tim");
            sc.completeMissionTask("tim", "fuck", 1);
            char.addtime(60);
            char.room(727);
            break;
        case "girl2":
            nav.bg("727_bathroom/girl2.jpg");
            break;
        case "girl3":
            cl.changeClothingSave();
            cl.c.panties = null;
            cl.c.pants = null;
            cl.c.swimsuit = null;
            cl.c.pj = null;
            zcl.displayMain(-800, -150, .4, "clothes", true);
            if (cl.c.chastity !== null)
                chat(12, 727);
            else if (cl.c.cock > 2)
                chat(14, 727);
            else
                chat(15, 727);
            break;
        case "girl3a":
            nav.killall();
            nav.bg("727_bathroom/girl3.jpg");
            break;
        case "girl4":
            nav.bg("727_bathroom/girl4.jpg");
            break;
        case "girl5":
            nav.bg("727_bathroom/girl5.jpg");
            break;
        case "girl6":
            nav.bg("727_bathroom/girl6.jpg");
            break;
        case "girl7":
            cl.doCum(false);
            nav.bg("727_bathroom/girl7.jpg");
            break;
        case "girl8":
            cl.changeClothing();
            cl.display();
            g.pass = g.internal = null;
            levels.fuckpussy("cindy");
            daily.set("cindy");
            char.addtime(60);
            sc.completeMissionTask("cindy", "fuck", 2);
            char.room(727);
            break;
        case "girlBad":
            cl.changeClothing();
            cl.display();
            g.pass = g.internal = null;
            daily.set("cindy");
            char.addtime(60);
            char.room(727);
            break;
        case "tina6":
            if (gender.canUseCock()) {
                nav.bg("727_bathroom/tina6.jpg");
                chat(43, 727)
            }
            else {
                nav.bg("727_bathroom/tina5b.jpg");
                chat(40, 727);
            }
            break;
        case "reset":
            char.room(727);
            break;
        case "tinabad":
            if (sc.getMissionTask("tina", "cat", 2).notStarted) {
                sc.completeMission("tina", "cat", false);
                sc.completeMissionTask("tina", "cat", 2, false);
            }
            char.room(0); 
            break;
        case "tinagood":
            if (sc.getMissionTask("tina", "cat", 2).notStarted) {
                sc.completeMission("tina", "cat");
                sc.completeMissionTask("tina", "cat", 1);
                sc.completeMissionTask("tina", "cat", 2);
            }
            levels.fuckpussy("tina", "f");
            char.addtime(180);
            char.room(0);
            break;
        default:
            break;
    }
};

room727.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "thinking",
            text: "Before I leave I need to get dressed. <span class='hl'>I'm missing my " + g.internal + ".</span>",
            button: []
        }; 
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "tim",
                text: "It's ok my sexy girl. My dick don't bite. Pull it out.",
                button: [
                    { chatID: -1, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "tim",
                text: "That's a sexy cock isn't it? Why don't you kiss it.",
                button: [
                    { chatID: -1, text: "Like this?", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "tim",
                text: "That's a beautiful cock isn't it? I bet your pussy is dripping looking at it. Let me strip all this off " +
                    "so you can see my awesome abs while you suck it.",
                button: [
                    { chatID: 3, text: "Oh yeah baby, make my pussy wet.", callback: "tim2b" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "I can't believe he still thinks I'm a girl. I wonder what he would do if he found out.",
                button: [
                    { chatID: 4, text: "...", callback: "tim2c" }
                ]
            },
            {
                chatID: 4,
                speaker: "tim",
                text: "Oh yeah slut, like what you see?",
                button: [
                    { chatID: 5, text: "Uh huh.", callback: "tim2d" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "I can't wait for him to start fucking my face!",
                button: [
                    { chatID: 6, text: "...", callback: "tim2da" }
                ]
            },
            {
                chatID: 6,
                speaker: "tim",
                text: "I'm going to throat fuck you.",
                button: [
                    { chatID: -1, text: "GACKKKK", callback: "tim2e" }
                ]
            },
            {
                chatID: 7,
                speaker: "tim",
                text: "I'm going to cum all over your face so everyone knows that you sucked the best dick in this club!",
                button: [
                    { chatID: 8, text: "Huh?", callback: "tim2f" }
                ]
            },
            {
                chatID: 8,
                speaker: "tim",
                text: "I'm going to take off. You do look beautiful wearing my cum. You should totally wear that home! ",
                button: [
                    { chatID: -1, text: "You're right, I'm beautiful in my cum.", callback: "tim2end" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "She's probably in the stall. I'll just walk right in, or I can chicken out.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "cindy",
                text: "...",
                button: [
                    { chatID: 11, text: "Oh... hi... I thought you...", callback: "girl2" }
                ]
            },
            {
                chatID: 11,
                speaker: "cindy",
                text: "I was hoping to see you again, just didn't think it would be here... So what do ya got, let's see it.",
                button: [
                    { chatID: -1, text: "[Pull out your cock]", callback: "girl3" }
                ]
            },
            {
                chatID: 12,
                speaker: "cindy",
                text: "Awww. Did you break your penis, it looks like it's got a cast. Poor little penis. ",
                button: [
                    { chatID: 13, text: "Oh yeah... It's got a cast.", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "cindy",
                text: "That's ok. We can do this later when your penis is better. ",
                button: [
                    { chatID: -1, text: "*Sad noises* ok, bye.", callback: "girlBad" }
                ]
            },
            {
                chatID: 14,
                speaker: "cindy",
                text: "You're kidding right? I like to enjoy getting fucked, and that little thing isn't going to please anyone. " +
                    "You should look into growing your penis little man, then maybe we can do this. ",
                button: [
                    { chatID: 13, text: "*Sad noises* ok, bye.", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "cindy",
                text: "That is a beautiful penis, I love it! Do you know how to use it? ",
                button: [
                    { chatID: 16, text: "Let me show you!", callback: "girl3a" }
                ]
            },
            {
                chatID: 16,
                speaker: "cindy",
                text: "Oh my my ",
                button: [
                    { chatID: 17, text: "Grunt", callback: "girl4" }
                ]
            },
            {
                chatID: 17,
                speaker: "cindy",
                text: "Yes! Yes! YES! YES! ",
                button: [
                    { chatID: 18, text: "Groan", callback: "girl5" }
                ]
            },
            {
                chatID: 18,
                speaker: "cindy",
                text: "I'm so close! Don't you dare cum yet!",
                button: [
                    { chatID: 19, text: "MMmmmMMMMm", callback: "girl6" }
                ]
            },
            {
                chatID: 19,
                speaker: "cindy",
                text: "Fuck you're good! You can cum now!",
                button: [
                    { chatID: 20, text: "Groan", callback: "girl7" }
                ]
            },
            {
                chatID: 20,
                speaker: "cindy",
                text: "Thanks! You're a good fuck!",
                button: [
                    { chatID: 21, text: "You're welcome", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "cindy",
                text: "Come back and fuck me anytime!",
                button: [
                    { chatID: -1, text: "Sweet!", callback: "girl8" }
                ]
            },
            {
                chatID: 22,
                speaker: "tina",
                text: "Hey girlfriend! Just taking a tinkle in a real toilet before I head home. " +
                    "Good luck out there!",
                button: [
                    { chatID: -1, text: "You too!", callback: "reset" }
                ]
            },
            {
                chatID: 23,
                speaker: "tina",
                text: "Oh! I'm so embarrased! I guess you caught me going tinkle. Hehe. I just come " +
                    "here sometimes to use the bathroom. My place doesn't have one. ",
                button: [
                    { chatID: 24, text: "You don't have a bathroom?", callback: "" }
                ]
            },
            {
                chatID: 24,
                speaker: "tina",
                text: "No. " + sc.n("construction") + " let's me sleep in the office, but those outhouses " +
                    "are so gross I can't stand to go in them. So I come here. Anyway. It's pretty late. I " +
                    "should get home. ",
                button: [
                    { chatID: -1, text: "Ok. See you at work! [Need level 7 to progress]", callback: "reset" }
                ]
            },
            {
                chatID: 25,
                speaker: "tina",
                text: "Hahah! You caught me again. Anyway. I'll see you at work sexy. ",
                button: [
                    { chatID: -1, text: "Ok. See you at work! [Need level 7 to progress]", callback: "reset" }
                ]
            },
            {
                chatID: 26,
                speaker: "tina",
                text: "Hehehe. Hi sexy. ",
                button: [
                    { chatID: 28, text: "Hey kitty, you want to show me where you pee from? ", callback: "" },
                    { chatID: 27, text: "*arf* *bark* *grrrr*", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "tina",
                text: "Oh no! I don't like doggies. They scare me. Bye",
                button: [
                    { chatID: -1, text: "oh ok.", callback: "reset" },
                ]
            },
            {
                chatID: 28,
                speaker: "tina",
                text: "Hehehehe. oh you. Sure follow me home.",
                button: [
                    { chatID: 29, text: "[Follow her]", callback: "tina0" },
                ]
            },
            {
                chatID: 29,
                speaker: "!burlysecurity",
                text: "Hey darlin' What toy are you bringing home tonight? Wait... Is that...",
                button: [{ chatID: 30, text: "...", callback: "" }]
            },
            {
                chatID: 30,
                speaker: "tina",
                text: "It is. What can I say, I do love to take in strays. Stay safe out here. ",
                button: [{ chatID: 31 , text: "...", callback: "tina1" }]
            },
            {
                chatID: 31,
                speaker: "tina",
                text: "So this is my place. You have no idea how hard it is to lug my bed in here " +
                    "every night. oh. I left a mouse in my bed. Don't run! It's just a fake toy " +
                    "I like to play with. ",
                button: [{ chatID: 32, text: "What's in the box behind you. ", callback: "" }]
            },
            {
                chatID: 32,
                speaker: "tina",
                text: "Oh! Hehehe. It's my litter box. There's no toilet in here and I can't always " +
                    "run to the club to tinkle! Don't worry, I clean it twice a day. Totally clean!",
                button: [{ chatID: 33, text: "hehehe ", callback: "" }]
            },
            {
                chatID: 33,
                speaker: "tina",
                text: "Before we start, there's a little thing I like to do first. I know there's not " +
                    "much room in here, but I need you to wait in " + sc.n("construction") + "'s " +
                    " office 'k?",
                button: [{ chatID: 34, text: "sure.  ", callback: "tina3" }]
            },
            {
                chatID: 34,
                speaker: "thinking",
                text: "I wonder what's she up to in there. Can't be much since there isn't much in there. ",
                button: [{ chatID: 35, text: "...", callback: "" }]
            },
            {
                chatID: 35,
                speaker: "tina",
                text: "Ok, I'm ready. Come in!",
                button: [{ chatID: 36, text: "Cummin'", callback: "tina4" }]
            },
            {
                chatID: 36,
                speaker: "tina",
                text: "meow",
                button: [{ chatID: 37, text: "oh yeah! Meow!", callback: "" }]
            },
            {
                chatID: 37,
                speaker: "tina",
                text: "Did you know a cat's penis has barbs. It's so the girl cat can't during the breeding. " +
                    "Does your penis have barbs? ",
                button: [{ chatID: 38, text: "uhhh. I don't think so", callback: "tina5" }]
            },
            {
                chatID: 38,
                speaker: "tina",
                text: "I'm in heat, so let's find out my feral alley cat! ",
                button: [{ chatID: -1, text: "Oh yeah!", callback: "tina6" }]
            },
            {
                chatID: 39,
                speaker: "tina",
                text: "Hehehe. Hi sexy. ",
                button: [
                    { chatID: -1, text: "[She so wants my dick, too bad I'm wearing a chastity cage]", callback: "reset" },
                ]
            },
            {
                chatID: 40,
                speaker: "tina",
                text: "OMG! Is that your penis!!! It's so tiny!! No wonder " + sc.n("river") +
                    " is always picking on you! Tiny dick, tiny dick! Hahahahahha",
                button: [
                    { chatID: 41, text: "I uhhhh", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "tina",
                text: "Bwhahahah. I'm laughig too hard!! We can't do this. I won't even " +
                    "feel it! Just go! Hahahha. it's ok. Just go. ",
                button: [
                    { chatID: -1, text: "Crap. ok", callback: "tinabad" },
                ]
            },
            {
                chatID: 42,
                speaker: "tina",
                text: "Hahaha! I'm sorry, I can't stop thinking about how tiny your " +
                    "dick is! Hahahahhahaha",
                button: [
                    { chatID: -1, text: "awww", callback: "reset" },
                ]
            },
            {
                chatID: 43,
                speaker: "thinking",
                text: "Is it weird I'm fucking a cat? Naww. It's a girl. A really sexy " +
                    "girl. I'm not fucking a cat. I'm fucking a girl",
                button: [
                    { chatID: 44, text: "...", callback: "tina7" },
                ]
            },
            {
                chatID: 44,
                speaker: "tina",
                text: "*meow*  *huff* Put your babies inside me! Make me carry your litter " +
                    "of kittens! *meow*",
                button: [
                    { chatID: 45, text: "*grunt* I'm gunna.. I'm gunna...", callback: "tina8" },
                ]
            },
            {
                chatID: 45,
                speaker: "tina",
                text: "*meeeeowwwww* My womb feels so hot and yummy!!! I can feel your little " +
                    "spermies simming around inside me! hehehe! ",
                button: [
                    { chatID: 46, text: "..Cum so hard inside you! *grunt* *huff* *huff*", callback: "tina9" },
                ]
            },
            {
                chatID: 46,
                speaker: "tina",
                text: "You just made me a happy pussy. hehehe. Like cat. *meow* There really " +
                    "isn't room in my kitty bed for two, but I'll see you around my stray " +
                    "alley cat. *meow*",
                button: [
                    { chatID: -1, text: "Meow to you too. Night!", callback: "tinagood" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};