//Room name
var room487 = {};
room487.main = function () {
    if (sc.getMissionTask("p", "*missy", 5).inProgress) {
        chat(8, 487);
    }
    else
        chat(0, 487);
};

room487.btnclick = function (name) {
    switch (name) {
        case "missywin":
            nav.kill();
            nav.bg("487_castle/missy2.webp");
            chat(11, 487);
            break;
        case "missywinlola":
            nav.kill();
            nav.bg("487_castle/missy6_lola12_win.webp");
            chat(58, 487);
            break;
        case "missylostlola":
            nav.kill();
            nav.bg("487_castle/missy6_lola12_lose.webp");
            zcl.backOfHead(700, 200, .4, "", false);
            chat(56, 487);
            break;
        case "missyrunlola":
            nav.kill();
            nav.bg("487_castle/missy6_lola12_lose.webp");
            zcl.backOfHead(700, 200, .4, "", false);
            chat(57, 487);
            break;
        case "missy11win":
            nav.bg("487_castle/missy11win.webp");
            chat(76, 487);
            break;
        case "missy11lost":
            zcl.bellydown(870, 800, .2, "back", false);
            chat(77, 487);
            break;
        case "missy11run":
            zcl.bellydown(870, 800, .2, "back", false);
            chat(78, 487);
            break;
        case "missylost":
            nav.bg("487_castle/missy3.webp");
            zcl.backOfHead(650, 150, .4, "", false);
            chat(12, 487);
            break;
        case "missyrun":
            nav.bg("487_castle/missy3.webp");
            zcl.backOfHead(650, 150, .4, "", false);
            chat(13, 487);
            break;
        case "icon_strip":
            cl.nude();
            nav.killbutton("icon_strip");
            zcl.displayMain(300, 1550, .065, "clothes", false);
            sc.select("icon_crawl", "487_castle/icon_crawl.webp", 0);
            break;
        case "icon_crawl":
            nav.kill();
            zcl.double(700, 800, .18, "smile", false);
            if (cl.c.cock === 5)
                chat(68, 487);
            else
                chat(69, 487);
            break;
        case "icon_walk":
            if (cl.c.dress === "robe")
                chat(71, 487);
            else
                chat(70, 487);
            break;
        case "missy11charwin":
            chat(72, 487);
            break;
        case "missy11charlose":
            chat(74, 487);
            break;
        default:
            break;
    }
};

room487.chatcatch = function (callback) {
    switch (callback) {
        case "bush2":
        case "bush3":
        case "bush4":
        case "missy1":
        case "missy17":
        case "missy18":
        case "missy19":
        case "missy20":
        case "missy21":
        case "missy22":
        case "missy23":
        case "missy24":
        case "missy25":
            nav.kill();
            nav.bg("487_castle/" + callback + ".webp");
            break;
        case "missy6_eli1":
        case "missy6_eli2":
        case "missy6_dog0":
        case "missy6_lola0":
        case "missy6_eva0":
        case "missy6_zoey0":
        case "missy6_sporty0":
        case "missy6_bitch0":
        case "missy6_sporty1":
        case "missy6_sporty2":
        case "missy6_sporty3":
        case "missy6_eva1":
        case "missy6_eva2":
        case "missy6_lola1":
        case "missy6_lola2":
        case "missy6_lola3":
        case "missy6_lola4":
        case "missy6_lola5":
        case "missy6_lola6":
        case "missy6_lola7":
        case "missy6_lola8":
        case "missy6_lola9":
        case "missy6_lola10":
        case "missy6_lola13_win":
        case "missy7":
        case "missy8":
            nav.kill();
            nav.bg("487_castle/" + callback + ".webp");
            zcl.displayMain(0, 800, .4, "clothes", true);
            break;
        case "missy6_eli0":
            nav.kill();
            nav.bg("487_castle/" + callback + ".webp");
            zcl.displayMain(0, 800, .4, "clothes", true);
            break;
        case "leave":
            char.room(475);
            break;
        case "missy0":
            nav.kill();
            nav.bg("487_castle/" + callback + ".webp");
            zcl.backOfHead(550, 450, .3, "", false);
            if (gv.get("cultpartner") === "self") {
                chat(9, 487);
            }
            else {
                chat(14, 487);
            }
            break;
        case "closer":
            nav.bg("487_castle/bush.webp", "487_castle/bush_n.webp"); 
            zcl.displayMain(300, 800, .3, "clothes", true);
            break;
        case "closer1":
            nav.bg("487_castle/bush1.webp", "487_castle/bush1_n.webp"); 
            break;
        case "end":
            g.pass = "sneak";
            char.room(949);
            break;
        case "missyfight":
            quickFight.init(24, "Cult", "missywin", "missylost", "missyrun", 487);
            break;
        case "missy4":
            nav.kill();
            nav.bg("487_castle/missy4_" + gv.get("cultpartner") + ".webp");
            zcl.backOfHead(550, 450, .3, "", false);
            break;
        case "missy5":
            nav.bg("487_castle/missy5_" + gv.get("cultpartner") + ".webp");
            break;
        case "missy6_lola11":
            nav.bg("487_castle/missy6_lola11.webp");
            quickFight.init(24, "Cult", "missywinlola", "missylostlola", "missyrunlola", 487);
            break;
        case "missy9":
            if (sc.getMission("security", "cult").startedOrComplete) {
                nav.bg("487_castle/missy9.webp");
                chat(64, 487);
            }
            else {
                nav.bg("487_castle/missy9a.webp");
                chat(63, 487);
            }
            break;
        case "missy10":
            nav.kill();
            nav.bg("487_castle/missy10.webp");
            zcl.displayMain(300, 1550, .065, "clothes", false);
            break;
        case "missy11":
            if (cl.wearing().nude) 
                sc.select("icon_crawl", "487_castle/icon_crawl.webp", 0);
            else
                sc.select("icon_strip", "487_castle/icon_strip.webp", 0);
            sc.select("icon_walk", "487_castle/icon_walk.webp", 1);
            break;
        case "lost":
            g.pass = "lost487";
            char.room(975);
            break;
        case "missy11char":
            nav.kill();
            nav.bg("487_castle/missy11.webp");
            charisma.init(24, "missy11charwin", "missy11charlose", 487);
            break;
        case "missy11fight":
            nav.kill();
            nav.bg("487_castle/missy11.webp");
            quickFight.init(24, "Cult", "missy11win", "missy11lost", "missy11run", 487);
            break;
        case "missy12":
            nav.kill();
            nav.bg("487_castle/missy12.webp");
            chat(79, 487);
            break;
        case "missy13":
            nav.bg("487_castle/missy13.webp");
            zcl.bj(100, 1200, 1, "open", false);
            nav.button({
                "type": "img",
                "name": "missy13",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "487_castle/missy13_" + (cl.c.cock === 5 ? "f" : "m") + ".webp",
            }, 211);
            break;
        case "missy14":
            nav.kill();
            nav.bg("487_castle/missy14_" + (cl.c.cock === 5 ? "f" : "m") + ".webp");
            break;
        case "missy15":
            nav.bg("487_castle/missy15.webp");
            zcl.bellydown(220, 0, 1.3, "back", true);
            nav.button({
                "type": "img",
                "name": "missy15",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "487_castle/missy15_" + (cl.c.cock === 5 ? "f" : "m") + ".webp",
            }, 211);
            levels.anal(4, false, "m", true, "!bwc");
            if (cl.c.cock === 5)
                levels.fuckedinpussy(true, "m", true, "!bbc");
            else
                levels.anal(4, true, "m", true, "!bwc");
            levels.piss(false, false, true, "f", "!milkmaid");
            break;
        case "missy16":
            nav.bg("487_castle/missy16.webp");
            zcl.bellydown(800, 800, .2, "", false);
            break;
        case "goodend":
            g.pass = "goodend";
            char.room(975);
            break;
        default:
            break;
    }
};

room487.chat = function (chatID) {
    if (chatID === 900) {
        switch (gv.get("cultpartner")) {
            case "lola":
                return {
                    chatID: 900,
                    speaker: "lola",
                    text: "I know you're in a tough spot and I love you more than you will ever know. That's " +
                        "why I agreed to come with that odd girl, " + sc.n("cecilia") + " to help you. I'm the " +
                        "fastest girl I know. I'll get them to chase me then I'm going to outrun them! They'll " +
                        "never have a chance of catching me! ",
                    button: [
                        { chatID: 42, text: "That's why I picked you! I know you can do it! ", callback: "missy6_lola0" },
                    ]
                }
            case "eva":
                return {
                    chatID: 900,
                    speaker: "eva",
                    text: "So you picked me you butthead! I can't believe you got me into this dumb ass plan. You're " +
                        "lucky I don't hate you or I would never agree to this, but I know you'll just end up back in " +
                        "there if I don't help. I hope those dumb ass robes slow them down so I can get away. If they " +
                        "touch me I'm going to pound you right in the " + gender.pronoun("balls") + "!",
                    button: [
                        { chatID: 31, text: "If they touch you I deserve a puch to the " + gender.pronoun("balls") + ". ", callback: "missy6_eva0" },
                    ]
                }
            case "dog":
                return {
                    chatID: 900,
                    speaker: "dog",
                    text: "arf!",
                    button: [
                        { chatID: 21, text: "That's a good boy!", callback: "missy6_dog0" },
                    ]
                }
            case "zoey":
                return {
                    chatID: 900,
                    speaker: "zoey",
                    text: "I am not going to lie, J'ai une peur bleue. I would do anything for you, even " +
                        "if it is the dumbest thing. I will open the whop ass and run like that speedy mouse! I " +
                        "have great plan to get them to chase me! ",
                    button: [
                        { chatID: 38, text: "Thanks. I know I can count on you. ", callback: "missy6_zoey0" },
                    ]
                }
            case "bitch":
                return {
                    chatID: 900,
                    speaker: "bitch",
                    text: "Well... It's a good thing I don't mind being raped in the asshole, but I do owe " +
                        "you for setting me up with the love of my life. Never speak a word of this to anyone! ",
                    button: [
                        { chatID: 22, text: "I won't say a thing!", callback: "" },
                    ]
                }
            case "sporty":
                return {
                    chatID: 900,
                    speaker: "sporty",
                    text: "I'm so glad you picked me! I get to help free Missy and get double teamed by those " +
                        "two gruff men! I'll take those dicks like no sissy has taken a dick before just for you! ",
                    button: [
                        { chatID: 1, text: "That's why I picked you! ", callback: "missy6_sporty0" },
                    ]
                }
            case "elijah":
                return {
                    chatID: 900,
                    speaker: "elijah",
                    text: "I never knew my girlfriend would be so dangerous! I love it! I'm going to smack one " +
                        "over the head with a branch then lead the other one away, maybe smack him too when he " +
                        "chases me. You got this! ",
                    button: [
                        { chatID: 18, text: "Thanks honey! I can't wait to have all your babies when this is over. ", callback: "missy6_eli0" },
                    ]
                }
        }
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "This has to be the cult's castle. I really should leave this place and never come " +
                "back. Terrible things happen to people here. ",
            button: [
                { chatID: -1, text: "Be smart. Leave. ", callback: "leave" },
                { chatID: 1, text: "Be an idiot and take a closer look. ", callback: "closer" },
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Oh wow. There's a bunch of them. I should come back later when I have a better " +
                "idea of what's going on. ",
            button: [
                { chatID: -1, text: "Be smart. Leave. ", callback: "leave" },
                { chatID: 2, text: "Be an idiot and try to sneak past them. ", callback: "closer1" },
            ]
        },
        {
            chatID: 2,
            speaker: "daria",
            text: "Hey. I see you're trying to sneak around. I pretty much know everyone here, and " +
                "you aren't someone that belongs here. Now I'm not going to stop you from doing whatever " +
                "you're doing, but I've known what happens in there and it isn't pretty. You should really " +
                "go. ",
            button: [
                { chatID: 3, text: "ok. thanks", callback: "closer" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "That chick is right. It is really dangerous and stupid to try and sneak in... but " +
                "being stupid is sometimes smart...",
            button: [
                { chatID: -1, text: "Be smart. Leave. ", callback: "leave" },
                { chatID: 4, text: "Be an idiot and try to sneak past them. ", callback: "bush2" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I'll just sneak between the bushes...",
            button: [
                { chatID: 5, text: "...", callback: "bush3" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I think I hear someone coming. I'll just stay very still...",
            button: [
                { chatID: 6, text: "...", callback: "bush4" },
            ]
        },
        {
            chatID: 6,
            speaker: "cult",
            text: "What do we have here?",
            button: [
                { chatID: 7, text: "I was uhhh... Looking for my contact lens. Have you seen it? ", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "cult",
            text: "Let's take you inside. Wouldn't want you to catch cold out here. Hehehe. ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "end" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "There it is. The C.U.M. compound. Now to go in and save Missy!!",
            button: [
                { chatID: -1, text: "Save Missy's ass! ...and pussy and mouth", callback: "missy0" },
                { chatID: -1, text: "I still have one more thing to take care of", callback: "leave" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "There's the two guards " + sc.n("p") + " said would be there. I really wish I had some " +
                "help, but I guess I'll just need to fight them myself! ",
            button: [
                { chatID: 10, text: "[Come out of the bushes and try to fight them]", callback: "missy1" },
            ]
        },
        {
            chatID: 10,
            speaker: "cult",
            text: "What the hell! Hey, look. It's the stupid " + gender.pronoun("sissy") + " that " +
                "escaped! Shit yeah. We’re gonna fuck you up like a broke-ass whore who stiffed the wrong pimp.",
            button: [
                { chatID: 10, text: "Fight them " , callback: "missyfight" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "I'm such a tough " + gender.pronoun("girl") + "! Now to enter that code",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 12,
            speaker: "cult",
            text: "Dumb ass " + gender.pronoun("whore") + ". Let's take " + gender.pronoun("her") + " back " +
                "to " + sc.n("ubel") + " and see what he wants to do with " + gender.pronoun("her") + ". ",
            button: [
                { chatID: -1, text: "ooo my head", callback: "lost" },
            ]
        },
        {
            chatID: 13,
            speaker: "cult",
            text: "Dumb ass " + gender.pronoun("whore") + ". You ain't runnin' away from us! Let's take " + gender.pronoun("her") + " back " +
                "to " + sc.n("ubel") + " and see what he wants to do with " + gender.pronoun("her") + ". ",
            button: [
                { chatID: -1, text: "ooo my head", callback: "lost" },
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "Well, there's the guards. I wonder where my help is. ",
            button: [
                { chatID: 15, text: "...", callback: "missy4" },
            ]
        },
        {
            chatID: 15,
            speaker: "cecilia",
            text: "Sorry we're a bit late. Our delivery helper needed to cum in my butt. ",
            button: [
                { chatID: 16, text: "wha...", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "cecilia",
            text: "No time to explain. I have to get back to " + sc.n("p") + " at the front gate. We're " +
                "going to distract and pull as many guards as we can over there so inside the compound is " +
                "cleared out a bit for you. I already told " + sc.n(gv.get("cultpartner")) + " that there " +
                "are needed as a distraction. Go save Missy. She's counting on you two. ",
            button: [
                { chatID: 17, text: "yeah", callback: "missy5" },
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "Now I know it's messed up asking you to help me like this but I trust you more than anyone " +
                "else in this world. I just need you to distract those two gaurds and get them away from the " +
                "door long enough for me to punch in the code and get into the compound. Once I'm in you just " +
                "run. Run as fast as you can all the way home. Don't worry about me. I want you to be safe. ",
            button: [
                { chatID: 900, text: "...", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "elijah",
            text: "Excuse me, I'm completely lost. Could you point me toward the...",
            button: [
                { chatID: 19, text: "...", callback: "missy6_eli1" },
            ]
        },
        {
            chatID: 19,
            speaker: "elijah",
            text: "...emergency room? hahah",
            button: [
                { chatID: 20, text: "oh wow", callback: "missy6_eli2" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "Wow! I never knew my boyfriend was such a bad ass! I better input that code and save Missy. ",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 21,
            speaker: "cult",
            text: "Oh crap! That dog looks angry! Get out of here!",
            button: [
                { chatID: 22, text: "...", callback: "missy6_eli2" },
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Wow! " + sc.n("dog") + " really scared them away! I'm sure glad I let him knot my ass!",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 23,
            speaker: "bitch",
            text: "Hey I heard the cult only had fat limp dick losers. ",
            button: [
                { chatID: 24, text: "...", callback: "missy6_bitch0" },
            ]
        },
        {
            chatID: 24,
            speaker: "cult",
            text: "We're not limp dicks! Wanna see? ",
            button: [
                { chatID: 25, text: "...", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "bitch",
            text: "Only if you catch me! Later limp dicks! ",
            button: [
                { chatID: 26, text: "...", callback: "missy6_eli2" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "I do love her spunk! I hope she got away. They dont' deserve to fuck a fine woman like " +
                sc.n("bitch") + ". ",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 27,
            speaker: "sporty",
            text: "Oh boys! I seem to have lost all my clothes. I don't suppose you could help me find them " +
                "over here... ",
            button: [
                { chatID: 28, text: "...", callback: "missy6_sporty1" },
            ]
        },
        {
            chatID: 28,
            speaker: "cult",
            text: "I don't know if we can leave our post to help someone. Sorry. ",
            button: [
                { chatID: 29, text: "...", callback: "missy6_sporty2" },
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "Come on you idiots. Take the bait!",
            button: [
                { chatID: 30, text: "...", callback: "missy0" },
            ]
        },
        {
            chatID: 30,
            speaker: "cult",
            text: "Eh. I'm horny. Let's go fuck that sissy! ",
            button: [
                { chatID: 31, text: "*whew*", callback: "missy6_sporty3" },
            ]
        },
        {
            chatID: 31,
            speaker: "thinking",
            text: "That's what I love about " + sc.n("sporty") + "! More than happy to take any and all dicks! " +
                "I don't think she can go a day without getting filled from both ends with sperm. ",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 32,
            speaker: "eva",
            text: "Oh hi. You boys are sure cute! I seem to have lost my little doggy can you help me " +
                "find him. I think I lost him over there somewhere. ",
            button: [
                { chatID: 33, text: "...", callback: "" },
            ]
        },
        {
            chatID: 33,
            speaker: "cult",
            text: "Sorry. We have to stay here and watch the door. ",
            button: [
                { chatID: 34, text: "...", callback: "missy6_eva1" },
            ]
        },
        {
            chatID: 34,
            speaker: "eva",
            text: "Pleaseeeeeee. I'll let you see my boobs. ",
            button: [
                { chatID: 35, text: "...", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "cult",
            text: "I'll tell you what. Show us your pussy and maybe we'll help you find your doggy. ",
            button: [
                { chatID: 36, text: "*oh no*", callback: "missy6_eva2" },
            ]
        },
        {
            chatID: 36,
            speaker: "eva",
            text: "*ugh* Fine!! Do you have a good look! You dirty perverts! Now will you help me find my " +
                "damn dog! ",
            button: [
                { chatID: 37, text: "...", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "cult",
            text: "We want more than a good look! Hehehe! We're going to get a good feel. With our penises! " +
                "Get her!",
            button: [
                { chatID: 38, text: "oh no no no!", callback: "missy6_eli2" },
            ]
        },
        {
            chatID: 38,
            speaker: "thinking",
            text: "Oh, I hope she got away! As mean as she always is to me she doesn't deserve to get raped " +
                "by those two! ",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 39,
            speaker: "zoey",
            text: "OOoggggyyy booogggyyy booooo! Je suis le monstre maléfique!! Poursuis moi! ",
            button: [
                { chatID: 40, text: "...", callback: "missy0" },
            ]
        },
        {
            chatID: 40,
            speaker: "cult",
            text: "What the hell was that! ",
            button: [
                { chatID: 41, text: "...", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "cult",
            text: "I don't know, but we better get what ever that was and take it in. Plus she had an " +
                "awesome set of tits. ",
            button: [
                { chatID: 42, text: "...", callback: "missy6_sporty3" },
            ]
        },
        {
            chatID: 42,
            speaker: "thinking",
            text: "hehe. Was not expecting that, but I guess it worked. " ,
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 43,
            speaker: "lola",
            text: "*pssst* I just realized I don't know what to say to get them to chase me. Should I say " +
                "something mean? ",
            button: [
                { chatID: 44, text: "What? I uh...", callback: "missy6_lola1" },
            ]
        },
        {
            chatID: 44,
            speaker: "cult",
            text: "Hey you! Who are you? You're not supposed to be back here! ",
            button: [
                { chatID: 45, text: "Just run!", callback: "missy6_lola2" },
            ]
        },
        {
            chatID: 45,
            speaker: "cult",
            text: "Get her!!! ",
            button: [
                { chatID: 46, text: "*oh crap she tripped*", callback: "missy6_lola3" },
            ]
        },
        {
            chatID: 46,
            speaker: "cult",
            text: "Looks like we caught ourselves a little slut that losts its way. Usually we just toss lost " +
                "sluts to the Milk Maids to get trained proper, but you're too hot to wait for a proper training. " +
                "hehehe",
            button: [
                { chatID: 47, text: "*c'mon. Get up and run*", callback: "missy6_lola4" },
            ]
        },
        {
            chatID: 47,
            speaker: "thinking",
            text: "Oh crap! What do I do? Do I try to fight them off and ruin this mission, or do I " +
                "save Missy? If I stay here and hide there's a chance I can save both, but if I try to " +
                "rescue her we can all end up taken by the cult.",
            button: [
                { chatID: 48, text: "[Stay hidden and wait for an opening to save Missy]", callback: "missy6_lola5" },
                { chatID: -1, text: "[Risk everything to try and save " + sc.n("lola") + "]", callback: "missy6_lola11" }
            ]
        },
        {
            chatID: 48,
            speaker: "thinking",
            text: "I'm sorry " + sc.n("lola") + ", but this is too important. I have to save Missy or " +
                "she'll surly die or worse. ",
            button: [
                { chatID: 49, text: "[Keep watching and wait for an opening to save Missy]", callback: "missy6_lola6" },
            ]
        },
        {
            chatID: 49,
            speaker: "cult",
            text: "Oh shit this bitch is already wet. She must really want to get fucked! That's why she came " +
                "over to us! With a pussy this tight you know that ass is tight! ",
            button: [
                { chatID: 50, text: "...", callback: "missy6_lola7" },
            ]
        },
        {
            chatID: 50,
            speaker: "cult",
            text: "Oh yeah. She sucks at giving head, good thing she doesn't need a lot of practice to take " +
                "a dick in her pussy. I've got to feel that tight ass twat of hers. ",
            button: [
                { chatID: 51, text: "...", callback: "missy6_lola8" },
            ]
        },
        {
            chatID: 51,
            speaker: "lola",
            text: "Stop! Please stop! I didn't mean it. Please don't... please... ",
            button: [
                { chatID: 52, text: "...", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "cult",
            text: "Shut up before I shove my dick up your ass. You wanted it, now you're getting it!",
            button: [
                { chatID: 53, text: "...", callback: "missy6_lola9" },
            ]
        },
        {
            chatID: 53,
            speaker: "cult",
            text: "Oh man she is tight even after she took you dick. We're going to have to save this one " +
                "I'm gunna want more of this sweet pussy. ",
            button: [
                { chatID: 54, text: "...", callback: "missy6_lola10" },
            ]
        },
        {
            chatID: 54,
            speaker: "cult",
            text: "Fuck, I gotta get dressed. Let's take this little whore inside and pass her off to the " +
                "Milk Maids. ",
            button: [
                { chatID: 55, text: "...", callback: "missy6_sporty3" },
            ]
        },
        {
            chatID: 55,
            speaker: "thinking",
            text: "That was brutal to watch. I really shouldn't have brought " + sc.n("lola") + " on a mission " +
                "like this. What was I thinking. ",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 56,
            speaker: "cult",
            text: "Dumb ass " + gender.pronoun("whore") + ". Let's take them both back " +
                "to " + sc.n("ubel") + " and see what he wants to do with these idiots. ",
            button: [
                { chatID: -1, text: "ooo my head", callback: "lost" },
            ]
        },
        {
            chatID: 57,
            speaker: "cult",
            text: "Dumb ass " + gender.pronoun("whore") + ". You ain't runnin' away from us! Let's take them both back " +
                "to " + sc.n("ubel") + " and see what he wants to do with these idiots. ",
            button: [
                { chatID: -1, text: "ooo my head", callback: "lost" },
            ]
        },
        {
            chatID: 58,
            speaker: "me",
            text: "Take that! ",
            button: [
                { chatID: 59, text: "...", callback: "missy6_lola13_win" },
            ]
        },
        {
            chatID: 59,
            speaker: "lola",
            text: "I peed myself a little I was so scared! I'm sorry this is too much for me! I'm running " +
                "home. Thank you for saving me, but sorry I have to go! ",
            button: [
                { chatID: 60, text: "oh wait...", callback: "missy6_sporty3" },
            ]
        },
        {
            chatID: 60,
            speaker: "thinking",
            text: "Yeah, that was dumb picking " + sc.n("lola") + ", but at least I saved her from something " +
                "way worse. I should get bonus points for that right? ",
            button: [
                { chatID: 61, text: "...", callback: "missy7" },
            ]
        },
        {
            chatID: 61,
            speaker: "thinking",
            text: "Now to enter the code, 1-2-3-4-5... ",
            button: [
                { chatID: 62, text: "...", callback: "missy8" },
            ]
        },
        {
            chatID: 62,
            speaker: "thinking",
            text: "*ugh* I can smell the cum eminating from the room even out here. ",
            button: [
                { chatID: -1, text: "[Keep walking]", callback: "missy9" },
            ]
        },
        {
            chatID: 63,
            speaker: "thinking",
            text: "Hello large wooden dildo bolted to the ground. I'll sure miss you. When this is all over " +
                "maybe I can take you home. ",
            button: [
                { chatID: 67, text: "[Keep walking]", callback: "missy10" },
            ]
        },
        {
            chatID: 64,
            speaker: "security",
            text: sc.n("me") + "! I thought you escaped! What are you doing back here?",
            button: [
                { chatID: 65, text: "Just coming to see an old friend. What are you doing? Do you want me to undo your handcuffs? ", callback: "" },
            ]
        },
        {
            chatID: 65,
            speaker: "security",
            text: "That's ok. I asked to be here. Do you know " + sc.n("dr") + " said I have a vagina! Me! " +
                "Next week they're going to turn me into a girl. A real girl. I'm so excited! It's going to be " +
                "the best day of my life! ",
            button: [
                { chatID: 66, text: "You know what happens when you get a vagina, right? ", callback: "" },
            ]
        },
        {
            chatID: 66,
            speaker: "security",
            text: "*pssst* I can handle that. Doesn't matter anyway. I would give anything to be who " +
                "I'm supposed to be. I used to be scared, but now. Now I just know that any danger is " +
                "worth it to finally be me. ",
            button: [
                { chatID: 67, text: "Ok. You have fun sitting on that pole. I've got to run. ", callback: "missy10" },
            ]
        },
        {
            chatID: 67,
            speaker: "thinking",
            text: "Uh oh. There's some goons coming this way. ",
            button: [
                { chatID: -1, text: "...", callback: "missy11" },
            ]
        },
        {
            chatID: 68,
            speaker: "cult",
            text: "Hey, look at the slutty Milk Maid hazing. Must be some new kind of hazing. " +
                "What you you say, should we haze her? ",
            button: [
                { chatID: -1, text: "Use charisma " + charisma.getStats(24).txt, callback: "missy11char" },
                { chatID: -1, text: "Fight all three [" + quickFight.getStats(26, 100).winProb + "]", callback: "missy11fight" },
                { chatID: -1, text: "Allow them to haze you. ", callback: "missy12" },
            ]
        },
        {
            chatID: 69,
            speaker: "cult",
            text: "Hey, it's that stupid sissy. I thought " + gender.pronoun("he") + " escaped? Must of got pulled back " +
                "in. Hehe. What you do you say, should we welcome " + gender.pronoun("her") + " back into " +
                "C.U.M.?",
            button: [
                { chatID: -1, text: "Use charisma " + charisma.getStats(24).txt, callback: "missy11char" },
                { chatID: -1, text: "Fight all three [" + quickFight.getStats(26, 100).winProb + "]", callback: "missy11fight" },
                { chatID: -1, text: "Allow them to assult you", callback: "missy12" },
            ]
        },
        {
            chatID: 70,
            speaker: "cult",
            text: "Hey, what are you doing here?",
            button: [
                { chatID: -1, text: "Use charisma " + charisma.getStats(24).txt, callback: "missy11char" },
                { chatID: -1, text: "Fight all three [" + quickFight.getStats(26, 100).winProb + "]", callback: "missy11fight" },
            ]
        },
        {
            chatID: 71,
            speaker: "cult",
            text: "May Azrael be with you. ",
            button: [
                { chatID: 85, text: "And also with you [Good thing I'm wearing a robe!]", callback: "missy17" }
            ]
        },
        {
            chatID: 72,
            speaker: "me",
            text: "You three idiots don't know the will of Azrael! I'm on a mission from " + sc.n("ubel") +
                " himself. Now step aside so I can continue with my task. ",
            button: [
                { chatID: 73, text: "...", callback: "" },
            ]
        },
        {
            chatID: 73,
            speaker: "cult",
            text: "Yes, of course. We would never interfere with the will of Azrael. ",
            button: [
                { chatID: 85, text: "[Keep pushing forward]", callback: "missy17" },
            ]
        },
        {
            chatID: 74,
            speaker: "me",
            text: "I'm just making a delivery, don't mind me. ",
            button: [
                { chatID: 75, text: "...", callback: "" },
            ]
        },
        {
            chatID: 75,
            speaker: "cult",
            text: "Delivering what? There's nothing in your hands! Grab " + gender.pronoun("her") + 
                " and bring her back to " + gender.pronoun("her") + " cell!",
            button: [
                { chatID: -1, text: "*eeep!*", callback: "lost" },
            ]
        },
        {
            chatID: 76,
            speaker: "thinking",
            text: "I ain't no bitch! *little flex*",
            button: [
                { chatID: 85, text: "[Keep pushing forward]", callback: "missy17" },
            ]
        },
        {
            chatID: 77,
            speaker: "cult",
            text: "You're bitch ass can't fight. We're going to return you to where you belong, taking " +
                "all the dicks until your dying day. ",
            button: [
                { chatID: -1, text: "*ooof!*", callback: "lost" },
            ]
        },
        {
            chatID: 78,
            speaker: "cult",
            text: "Where are you running to? There's no where to go! We're going to return you to where you belong, taking " +
                "all the dicks until your dying day. ",
            button: [
                { chatID: -1, text: "*ooof!*", callback: "lost" },
            ]
        },
        {
            chatID: 79,
            speaker: "cult",
            text: "I want to see this " + gender.pronoun("bitch") + " take both your cocks. Makes me " +
                "horny watching a bitch take cocks",
            button: [
                { chatID: 80, text: "*whimper*", callback: "missy13" },
            ]
        },
        {
            chatID: 80,
            speaker: "!bbc",
            text: "Imma double stuff this cump dump as soon as " + gender.pronoun("he") + " can get " +
                "this big ol' cock hard enough hehehe!",
            button: [
                { chatID: 81, text: "*lick*", callback: "missy14" },
            ]
        },
        {
            chatID: 81,
            speaker: "!bwc",
            text: "Fuck this slut has a hot " + gender.pronoun("cunt") + "! Love how it stretches tight " +
                "around my cock!",
            button: [
                { chatID: 82, text: "*moans*", callback: "" },
            ]
        },
        {
            chatID: 82,
            speaker: "!milkmaid",
            text: "You three are so hot! I wanna cum all over your face! ",
            button: [
                { chatID: 83, text: "*uh huh uh*", callback: "missy15" },
            ]
        },
        {
            chatID: 83,
            speaker: "!bbc",
            text: "Oh fuck! I'm filling this slut's asshole with my cum!",
            button: [
                { chatID: 84, text: "*orgasmic moans*", callback: "missy16" },
            ]
        },
        {
            chatID: 84,
            speaker: "thinking",
            text: "One last fuck in this terrible place. I guess I'm going to save Missy with my " +
                (cl.c.cock === 5 ? "holes" : "ass") + " dripping cum down my legs. ",
            button: [
                { chatID: 85, text: "[Keep pushing forward]", callback: "missy17" },
            ]
        },
        {
            chatID: 85,
            speaker: "me",
            text: "*Missy*!",
            button: [
                { chatID: 86, text: "!", callback: "missy18" },
            ]
        },
        {
            chatID: 86,
            speaker: "me",
            text: "*whispering* Hey is it safe you take you down? Do I need to wait? Oh! You can't talk " +
                "with that gag and all that cum. Let me take that off you. ",
            button: [
                { chatID: 87, text: "...", callback: "missy19" },
            ]
        },
        {
            chatID: 87,
            speaker: "missy",
            text: "What are you doing here! Did you get caught! I told you to run. That means to keep " +
                "running until you are too far away to get caught. Not come back in so we both can " +
                "get captured by this dumb ass cult! ",
            button: [
                { chatID: 88, text: "I came to rescue you? ", callback: "missy20" },
            ]
        },
        {
            chatID: 88,
            speaker: "tudor",
            text: "I'm afraid there will be no rescuing today " + gender.pronoun("mr") + " " + sc.n("me") +
                ". I couldn't let you take my new favorite new toy, Missy, from me. Besides it would be " +
                "quite troublesome if she were to leave my protection. ",
            button: [
                { chatID: 89, text: sc.n("tudor") + "! I thought she was your friend. ", callback: "" },
            ]
        },
        {
            chatID: 89,
            speaker: "tudor",
            text: "Friends, no. That is a tale as old as time. Old rich men love young women for their bodies. And young " +
                "women are drawn to old men for their money. We had a great arrangment. I was allowed to " +
                "enjoy her company and the chase to nail her down, and she enjoyed the freedoms my money provided. ",
            button: [
                { chatID: 90, text: "...", callback: "" },
            ]
        },
        {
            chatID: 90,
            speaker: "missy",
            text: "We were business partners! It's not my fault you wanted to fuck me! I never gave any " +
                "indication you ever had a chance! ",
            button: [
                { chatID: 91, text: "...", callback: "" },
            ]
        },
        {
            chatID: 91,
            speaker: "tudor",
            text: "And that, my dear Missy, is what makes the chase so much fun. The challenge. It was a fun " +
                "game until you decided to come here and get caught. Now I'm going to have to find a new way " +
                "to create more sissies for my congregation. You have no idea how important sissies are to my " +
                "operation. You, " + sc.n("me") + ", were going to be my greatest sissy until Missy had to " +
                "ruin it. I did have so much hope for you. ",
            button: [
                { chatID: 92, text: "Me?", callback: "" },
            ]
        },
        {
            chatID: 92,
            speaker: "tudor",
            text: "Yes. You see my people love that sissies exist. Most live boring, pathetic, lives so they " +
                "need someone to look down on. You sissies are the ultimate population for them to spit on and " +
                "abuse without fighting back. They need you so they can feel better about themselves. That story " +
                "of the coming of Azrael is merely convience to keep bringing your type to my church. ",
            button: [
                { chatID: 93, text: "...but why?", callback: "" },
            ]
        },
        {
            chatID: 93,
            speaker: "tudor",
            text: "Hehe. Money. You have no idea how much money this place makes me. When I found " + sc.n("ubel") +
                " he was activly looking for followers. I helped refine and focus him. It grew quickly but I could " +
                "tell people were starting to lose faith. Your father was the first of your kind. I do admire her. " +
                "In those days it was harder to be a sissy. There were no hormones or networks of support. Just " +
                "men doing the best they could. ",
            button: [
                { chatID: 94, text: "...my father?", callback: "" },
            ]
        },
        {
            chatID: 94,
            speaker: "tudor",
            text: "Yes. She loved the abuse and ridicule and the followers would come just to abuse or fuck her. " +
                "That's when I knew I had a way to keep people coming. Sissies. Unfortunatly a terrible incident " +
                "happened in the swamp where she lost her life. One of my followers held her head underwater " +
                "while have sex with her for too long and she suffocated. That was quite the ordeal. ",
            button: [
                { chatID: 95, text: "wha", callback: "" },
            ]
        },
        {
            chatID: 95,
            speaker: "tudor",
            text: "But, now, it's a well oiled machine. We keep a great flow of sissies in and out so no one " +
                "gets attached and starts seeing your kind as people. You disappear easily and the local police " +
                "don't care enought to investigate. I've even started four more churches. The hardest part of " +
                "a new church is finding a Missy to mold and create new sissies for us to use and kill off. ",
            button: [
                { chatID: 96, text: "*gasp*", callback: "" },
            ]
        },
        {
            chatID: 96,
            speaker: "missy",
            text: "You won't get away with this! We'll get out of here and tell everyone! You're going " +
                "see your pathetic empire crumble! ",
            button: [
                { chatID: 97, text: "...", callback: "missy21" },
            ]
        },
        {
            chatID: 97,
            speaker: "tudor",
            text: "heh. No one will believe you. Besides I'm going to remove both your tongues, teeth, " +
                "eyes, and appendeges. You'll serve out your lives as our glory holes, slithering around on " +
                "the floor not knowing when and how the abuse will come. You'll keep your hearing so the words " +
                "from your assailants will keep you going. " + sc.n("ubel") + " call the boys and take them away. ",
            button: [
                { chatID: 98, text: "...", callback: "missy22" },
            ]
        },
        {
            chatID: 98,
            speaker: "ubel",
            text: "You two were worthy advasaries. I'm sorry to see it end this way, but end it must. It's been " +
                "an honor. Boys take these two to the doctor! ",
            button: [
                { chatID: 99, text: "[Get ready for the fight of your life!]", callback: "missy23" },
            ]
        },
        {
            chatID: 99,
            speaker: "wyatt",
            text: "I don't think you will. Nobody move. I have agents all over this place. " +
                "Don't even try to run " + sc.n("tudor") + ", your days are over.  ",
            button: [
                { chatID: 100, text: "What the hell!", callback: "missy24" },
            ]
        },
        {
            chatID: 100,
            speaker: "me",
            text: "I thought we were done for! What was all that? ",
            button: [
                { chatID: 101, text: "...", callback: " " },
            ]
        },
        {
            chatID: 101,
            speaker: "martha",
            text: "Ah, well. I must say, it was quite the little adventure, wasn't it, darling? Though " +
                "none of it took us entirely by surprise, if I'm honest. We knew the moment you found out " +
                "where she was that you'd go back in whether we sanctioned it or not. You'd made that " +
                "abundantly clear, and really, what were we to do, lock you in a cupboard? So we did the " +
                "only sensible thing. We kept " + sc.n("wyatt") + "'s people close, near enough to hear you " +
                "breathe, and let you be the door none of us could ever have opened ourselves. As for that " +
                "dreadful man " + sc.n("tudor") + ", no, my dear, we hadn't the faintest idea he was " +
                "involved, not until you did. Honestly, we hadn't the slightest notion what you'd find in " +
                "there. We only knew you would find something, and heavens, that was rather more than we'd " +
                "managed in years of trying. ",
            button: [
                { chatID: 102, text: "Are you saying you used me as bait? For a mission you didn't know how it would come out? ", callback: " " },
            ]
        },
        {
            chatID: 102,
            speaker: "black",
            text: "Heck yeah! That was my idea. I knew you could take whatever they dished out! " +
                sc.n("martha") + " here thought it was stupid, but when I got " + sc.n("p") +
                " to agree to it she was outvoted! You did well kid. ",
            button: [
                { chatID: 103, text: "...", callback: " " },
            ]
        },
        {
            chatID: 103,
            speaker: "p",
            text: "Yeah, " + sc.n("black") + " just didn't mention in the plan until we were halfway here that " +
                sc.n("cecilia") + " and I had to draw the guards to the front door so you could get here " +
                "without too many cultist around. It's a good thing I'm on the pill or I would now be " +
                "pregnant with octuplets. So Missy, what you say we hose you off and get you back? ",
            button: [
                { chatID: 104, text: "...", callback: " " },
            ]
        },
        {
            chatID: 104,
            speaker: "missy",
            text: "*ugh* You're going to have to stick that hose up my ass to wash out all the " +
                "cum. " + sc.n("black") + " do you think you can carry me out. I've been tied up so long " +
                "I can't use my legs. ",
            button: [
                { chatID: 105, text: "...", callback: "missy25" },
            ]
        },
        {
            chatID: 105,
            speaker: "black",
            text: "I would carry you on my cock if I didn't think you would just slide right off! Yeah, " +
                "let's get out of here and go home! ",
            button: [
                { chatID: -1, text: "...", callback: "goodend" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(487, room487);
