//black room
var room181 = {};
room181.main = function () {
    
    switch (gv.get("sissySchoolClass")) {
        case "bondage101":
            if (g.pass === "endSleepyTime") {
                nav.bg("181_black/bondage101_13.jpg");
                gv.mod("energy", -999);
                chat(27, 181);
            }
            else {
                nav.bg("181_black/bondage101_0.jpg");
                chat(0, 181);
            }
            break;
        case "bondage203":
            nav.bg("181_black/bg_black.jpg");
            chat(28, 181);
            break;
        case "bondage310":
            nav.bg("181_black/b303_0.jpg");
            zcl.displayMain(100, 1000, .23, "clothes", true);
            chat(73, 181);
            break;
        case "bondage107":
            nav.bg("181_black/b107.jpg");
            zcl.displayMain(150, 800, .22, "clothes", true);
            chat(94, 181);
            break;
        case "ex215":
            nav.bg("181_black/ez215_0.jpg");
            zcl.displayMain(120, 1100, .20, "clothes", true);
            chat(98, 181);
            break;
    }
};

room181.btnclick = function (name) {
    switch (name) {
        case "bondage101_11":
            nav.killbutton("bondage101_11");
            nav.bg("181_black/bondage101_10.jpg");
            char.settime(22, 49);
            chat(26, 181);
            break;
        case "b203_17":
            nav.killall();
            nav.bg("181_black/b203_18_" + gender.pronoun("f") + ".jpg");
            chat(62, 181);
            break;
        default:
            break;
    }
};

room181.chatcatch = function (callback) {
    switch (callback) {
        case "bondage101_1":
        case "bondage101_2":
        case "bondage101_4":
        case "bondage101_5":
        case "bondage101_6":
        case "bondage101_7":
        case "bondage101_8":
        case "bondage101_10":
        case "b203_0":
        case "b203_3":
        case "b203_9":
        case "b203_13":
        case "b203_14":
        case "b203_15":
        case "b203_20":
        case "b203_21":
        case "b203_22":
        case "b303_1":
        case "b303_2":
        case "b303_3":
        case "b303_4":
        case "b303_5":
        case "b303_6":
        case "b303_7":
        case "b303_8":
        case "b303_9":
        case "b303_10":
        case "b303_11":
        case "b303_12":
        case "ez215_2":
        case "ez215_3":
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "b203_2":
            nav.killall();
            cl.nude();
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "b203_4":
        case "b203_5":
        case "b203_6":
        case "b203_7":
        case "b203_8":
        case "b203_10":
        case "b203_12":
            nav.bg("181_black/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "b203_11":
            levels.anal(3, false, "m", true, "!man");
            nav.bg("181_black/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "b203_1":
            nav.bg("181_black/" + callback + ".jpg");
            zcl.displayMain(300, 600, .068, "clothes", false);
            break;
        case "b203_17":
            sc.select("b203_17", "181_black/icon_ready.png", 0);
            break;
        case "b203_19":
            if (gv.get("energy") > 134) {
                gv.mod("energy", -135);
                nav.bg("181_black/b203_19_w_" + gender.pronoun("f") + ".jpg");
                chat(64, 181);
            }
            else {
                gv.mod("energy", -135);
                nav.bg("181_black/b203_19_l_" + gender.pronoun("f") + ".jpg");
                chat(66, 181);
            }
            break;
        case "b203_23":
            levels.anal(7);
            sissy.passclass(true);
            break;
        case "b203_7Nolike":
            missy.mod("mood", -100);
            break;
        case "gloryhole":
            sc.show("cecilia");
            sc.startMission("cecilia", "gloryhole");
            break;
        case "bondage101_9":
            levels.oral(1, "n", "cecilia", true);
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "bondage101_3":
            cl.nude();
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "bondage101_11":
            nav.next("bondage101_11");
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "bondage101_12":
            gv.mod("arousal", 100);
            g.pass = 181;
            char.room(28);
            break;
        case "bondage101_end":
            cl.undo();
            sissy.passclass(false);
            char.room(201);
            break;
        case "black":
            nav.killall();
            cl.c.accessories = "ballgag";
            cl.nude();
            nav.bg("999_phone/black.jpg");
            break;
        case "b303_char":
            levels.mod("charisma", 20);
            break;
        case "b303_sub":
            levels.mod("sub", 20);
            break;
        case "b303_13":
            levels.anal(3, true, "m", true, "!man");
            levels.mod("xdress", 100);
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "b303_14":
            levels.mod("strength", 100);
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "b303_15":
            cl.c.accessories = null;
            nav.bg("181_black/b303_15.jpg");
            zcl.displayMain(100, 600, .23, "clothes", true);
            break;
        case "ez215_1":
            nav.kill();
            nav.bg("181_black/" + callback + ".jpg");
            break;
        case "completeClass":
            sissy.passclass(true);
            break;
        case "ez215_sissy0":
        case "ez215_sissy1":
        case "ez215_sissy2":
        case "ez215_sissy3":
            levels.mod("fame", 20);
            var sissyHolder = callback.replace("ez215_", "");
            inv.add(sissyHolder);
            pic.add(sissyHolder);
            nav.bg("181_black/" + callback + ".jpg");
            break;
        default:
            break;
    }
};

room181.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "black",
            text: "My my my. What a bunch of eager little pupils we have. I look forward to torturing each and everyone one " +
                "of you. But I have a special request so all of you get out. Get, go, leave. ",
            button: [
                { chatID: 1, text: "Awwww....", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!jeremy",
            text: "Can we come back later. ",
            button: [
                { chatID: 2, text: "....", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "black",
            text: "Yes, later is fine.... but wait. You there " + sc.n("me") + ". You will wait. The rest can go. Now leave. ",
            button: [
                { chatID: 3, text: "*GULP*", callback: "bondage101_1" }
            ]
        },
        {
            chatID: 3,
            speaker: "black",
            text: "Yes. You'll do perfect. I know " + sc.n("cecilia") + " and yourself work together. It's always so much more fun " +
                "to torture people who know each other. " + sc.n("cecilia") + " pop up and say hi. ",
            button: [
                { chatID: 4, text: "huh", callback: "bondage101_2" }
            ]
        },
        {
            chatID: 4,
            speaker: "cecilia",
            text: "Hi! ",
            button: [
                { chatID: 5, text: "Hi?", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "black",
            text: "Pop out of the bag. We're going to do a bit of modified bondage 101. Let me just get you two together... ",
            button: [
                { chatID: 6, text: "..", callback: "bondage101_3" }
            ]
        },
        {
            chatID: 6,
            speaker: "black",
            text: "All done! I hope you you're comfortable enough. You're going to be like this for a while. ",
            button: [
                { chatID: 7, text: "What do you mean?", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "black",
            text: "You two are cute hanging there. Well. I'll see you tomorrow. Don't worry about the lights, they're on a timer.  ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "cecilia",
            text: "Wait! I'm sorry. Tell Missy I won't do it again. Don't leave us up here all night! I know I've been told, but " +
                "this time I promise I won't do it again!",
            button: [
                { chatID: 9, text: "Please don't leave us here all night! ", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "black",
            text: "Oh " + sc.n("cecilia") + " how I do love to hear your wimpers. I'll be watching the camera at home. Please " +
                "moan and whine all night. It really is the best porn. Night you two. ",
            button: [
                { chatID: 10, text: "...", callback: "bondage101_4" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Can you move your dick. It's laying in my face, and your balls are poking my eyes. ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "ceclia",
            text: "My dick? You're the one with the chasity cage! Everytime I try to put my head down it digs right into my nose! ",
            button: [
                { chatID: 12, text: "Like I had a choice! ", callback: "bondage101_5" }
            ]
        },
        {
            chatID: 12,
            speaker: "cecilia",
            text: "The only way I can put my head down is if I stuff my mouth into your butthole. Mmmmmm. It does look yummy!  ",
            button: [
                { chatID: 13, text: "Hey! If you lick my ass I'm going to suck your clitty! ", callback: "bondage101_6" },
                { chatID: 21, text: "Hey! Leave my butt alone! ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "cecilia",
            text: "Did we just become best friends? Because I'm totally going to eat that bussy! It's just so pink and and right " +
                "there! I'm sorry I can't help myself! ",
            button: [
                { chatID: 14, text: "huh?", callback: "bondage101_7" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "OOooo... That's different.... Mmmmmm... oh... wait, don't stick... oh. never mind, keep sticking your tounge there.. " +
                "mmMMmm yeah",
            button: [
                { chatID: 15, text: "[Gobble that cock]", callback: "bondage101_8" }
            ]
        },
        {
            chatID: 15,
            speaker: "cecilia",
            text: "So yummy! Mmmmm *slurp* hehehe. You're good. ",
            button: [
                { chatID: 16, text: "MmmMMmmmm *glug* *glug* *lick* ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "cecilia",
            text: "OOooooo. I feel it! It's cumming! ",
            button: [
                { chatID: 17, text: "*lick* *glug* *lick* ", callback: "bondage101_9" }
            ]
        },
        {
            chatID: 17,
            speaker: "cecilia",
            text: "Ohhhhh ",
            button: [
                { chatID: 18, text: "*lick* *glug* *lick* ", callback: "bondage101_10" }
            ]
        },
        {
            chatID: 18,
            speaker: "cecilia",
            text: "You were amazing! Hey I know a place where we can suck more cocks! Have you been to the bathroom at the park? ",
            button: [
                { chatID: 19, text: "I've been a few times...", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cecilia",
            text: "I like to go there on the weekends in the last stall and suck all kinds of dick. You should join me. It gets " +
                "lonly there all by myself sometimes and it would be aweseome to have another cocksucker there with me to help " +
                "pass the time. ",
            button: [
                { chatID: 20, text: "Really? That sounds awesome! ", callback: "gloryhole" },
                { chatID: 21, text: "Fuck no. I'm not sucking some stranger's dick!", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "cecilia",
            text: "Sweet! Meet me at the park bathroom, last stall on the weekends! I'll show you how to suck cock like a " +
                "real porn star! ",
            button: [
                { chatID: 22, text: "I'll see you there! ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "cecilia",
            text: "Oh. I guess I was wrong about you. ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "So why are you here? I didn't know you were in the sissy school. ",
            button: [
                { chatID: 23, text: "...", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "cecilia",
            text: "Oh, I was taking a load from this guy.",
            button: [
                { chatID: 24, text: "Really? Why does Missy care? I thought she would be supportive. ", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "cecilia",
            text: "Oh. She is. Usually. I was caught bending over her desk taking a load from one of her appointments that " +
                "came in early. Too bad he didn't cum in me early! ",
            button: [
                { chatID: 25, text: "oh wow!", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "cecilia",
            text: "She was so mad! I would've taken his dick at my desk, but that security guard stares at me all day. Gives me " +
                "the creeps. I tried to blow him, but he slapped me and said I wasn't worthy. So I snuck him in her office.. and " +
                "now we're here. ",
            button: [
                { chatID: -1, text: "Yep. Now we're here.", callback: "bondage101_11" },
            ]
        },
        {
            chatID: 26,
            speaker: "cecilia",
            text: "I'm getting sleepy. It does take it out of you haning here. ",
            button: [
                { chatID: -1, text: "Oh yeah. Me too. night night. ", callback: "bondage101_12" },
            ]
        },
        {
            chatID: 27,
            speaker: "black",
            text: "Time to wake up and go home. Get dressed and go.  ",
            button: [
                { chatID: -1, text: "*Yawn* I'm so tired.. argh. ok", callback: "bondage101_end" },
            ]
        },
        {
            chatID: 28,
            speaker: "black",
            text: "I have quite the treat for you today. We're going to have an outing " +
                "at the race track today. Quite the treat for each of you. Let's head that " +
                "way and join our friends. ",
            button: [
                { chatID: 29, text: "Sweet! [Head to the race track]", callback: "b203_0" },
            ]
        },
        {
            chatID: 29,
            speaker: "black",
            text: "Here at Dickhill Downs there's special races on Tuesdays and Thursdays " +
                "that are closed to the public, only a select few are allowed to " +
                "enter this building on those days. And you, sissies, are not those select " +
                "few. You will be going straight to the stable. Follow me.",
            button: [
                { chatID: 30, text: "[Follow her]", callback: "b203_1" },
            ]
        },
        {
            chatID: 30,
            speaker: "black",
            text: "Now strip down girls. I'll go fetch everyone so they can inspect you " +
                "and decide who to bet on. ",
            button: [
                { chatID: 31, text: "...", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "!sporty",
            text: "... mistress. What's going on?",
            button: [
                { chatID: 32, text: "...", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "black",
            text: "You four are going to take part in the first pony girl sissy race. " +
                "Usually they use real girls, but Mr. Jones thought sissies would be " +
                "fun, so here you are. I'm going to get the gamblers so they can inspect " +
                "each of you. They want to be informed when they place their bets since " +
                "none of you have raced before. Also most of them are just old perverts. " +
                "Now strip down and be compliant or I'll cut each of your tits off. ",
            button: [
                { chatID: 33, text: "*gulp* [Strip down and wait]", callback: "b203_2" },
            ]
        },
        {
            chatID: 33,
            speaker: "!martin",
            text: "Oh wow, " + sc.n("!chris") + " your tits are really coming in! ",
            button: [
                { chatID: 34, text: "...", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "!chris",
            text: "Thanks! It's so weird now that I'm passing. The other day I couldn't " +
                "reach a box of cereal on the top shelf, and some nice guy totally ran up " +
                "to me to help me. He even gave me his number. People are just so much nicer " +
                "to me now that I'm a girl. ",
            button: [
                { chatID: 35, text: "...", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "!martin",
            text: "Yeah. The other day I was just walking down the street and 3 different guys " +
                "shouted at me on how hot I am. One even slapped my butt! It toally hurt, but " +
                "it did make me feel so hot. ",
            button: [
                { chatID: 36, text: "...", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "!sporty",
            text: "What is the deal with the butt slap? I get slapped so much that I " +
                "feel like I'm back on the track team and my creepy coach is following " +
                "me around. Speaking of track, what do you think we're doing here? ",
            button: [
                { chatID: 37, text: "...", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "!martin",
            text: "I don't know. It's a little weird that we're in the stable right? " +
                "Do you think they just want to look at us? Maybe they haven't seen " +
                "a real sissy before. That's a bit hot thinking about all those people " +
                "that just want to stare at my body. ",
            button: [
                { chatID: 38, text: "...", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "!sporty",
            text: "That's hot, but why " + sc.n("black") + " take us here. I got in " +
                "trouble last week and whipped and fisted me till I was crying real " +
                "tears. It can't be any good if she's here... Oh look Missy's coming. ",
            button: [
                { chatID: 39, text: "...", callback: "b203_3" },
            ]
        },
        {
            chatID: 39,
            speaker: "missy",
            text: "I see you ladies are really coming along. I'm going to steal " +
                sc.n("me") + " for the pony girl display. Each of you will have " +
                "a mistress come and grab you to be their pony girl. " +
                "Now scatter, can't have all the sissies conglomerating around " +
                "me when I'm showing off my pony. Let's meet some high rollers " +
                sc.n("me") + ". ",
            button: [
                { chatID: 40, text: "...", callback: "b203_4" },
            ]
        },
        {
            chatID: 40,
            speaker: "!girl",
            text: "I do say Reginald this sissy seems more of a breeding stock than " +
                "a racing pony, wouldn't you say?",
            button: [
                { chatID: 41, text: "...", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "!boy",
            text: "Quite. I'm not sure this sissy will even lift the chariot, hehehe. " +
                "Come, let us see the other ponies. ",
            button: [
                { chatID: 42, text: "...", callback: "b203_5" },
            ]
        },
        {
            chatID: 42,
            speaker: "!boy",
            text: "Quite. I'm not sure this sissy will even lift the chariot, hehehe. " +
                "Come, let us peruse the other ponies. ",
            button: [
                { chatID: 43, text: "...", callback: "b203_5" },
            ]
        },
        {
            chatID: 43,
            speaker: "missy",
            text: sc.n("!missx") + ", Oh thank god. Did I ever tell you how much I " +
                "hate these things. These people are so uptight you wouldn't be able " +
                "to fit that giant road cone you call a strap on up any of their asses. ",
            button: [
                { chatID: 44, text: "...", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "!missx",
            text: "I know! I just want to take a bath while my slave Dorei here " +
                "services me. What we do for our weathly benefactors. Some days " +
                "I feel like a bigger whore than our sissies. ",
            button: [
                { chatID: 45, text: "...", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "missy",
            text: "Some days I think the only thing that seperates us from them is " +
                "the miles of cocks that go in their sissy pussies. ",
            button: [
                { chatID: 46, text: "...", callback: "b203_6" },
            ]
        },
        {
            chatID: 46,
            speaker: "!missx",
            text: "They are such sluts! I locked Dorei here in the closet all day. No way " +
                "to escape, yet somehow when I returned home he somehow farted out " +
                "ten loads of cum when I punched him in his belly. I didn't even ask " +
                "how he got all that cum in him while locked. I hate to hear her lie. " +
                "Oh look. It's Friedrich. I've got to schmooze him up. Gotta pay that rent. ",
            button: [
                { chatID: 47, text: "...", callback: "b203_7" },
            ]
        },
        {
            chatID: 47,
            speaker: "!girl",
            text: "Why hello Missy. I see you left " + sc.n("cecilia") + " at the office " +
                "today. I do love seeing her. Such a spunky girl. ",
            button: [
                { chatID: 48, text: "...", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "missy",
            text: "Yes, she really is full of spunk. " + sc.n("me") + " is my newest sissy. " +
                "I found her in the forest. The poor thing was about to be used by the cult.  ",
            button: [
                { chatID: 49, text: "...", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "!boy",
            text: "Well she sure is lucky you found her. Such a dreadful place. Do you mind " +
                "if I inspect your sissy's breeding hole? She does look like a wonderful breeder. ",
            button: [
                { chatID: 50, text: "...", callback: "" },
            ]
        },
        {
            chatID: 50,
            speaker: "missy",
            text: "Of course. " + sc.n("me") + " bend over and spread your cheeks. Show him " +
                "what a pretty hole you have. ",
            button: [
                { chatID: 52, text: "With pleasure ma'am. ", callback: "b203_8" },
                { chatID: 51, text: "What? ", callback: "b203_7Nolike" },
            ]
        },
        {
            chatID: 51,
            speaker: "missy",
            text: "Hahaha. As you can see, sissies can be so hard to train sometimes. " +
                sc.n("me") + ", that wasn't a request. Bend over now and show him your " +
                "pussy or I'll throw you back to the cult. ",
            button: [
                { chatID: 52, text: "Yes ma'am", callback: "b203_8" },
            ]
        },
        {
            chatID: 52,
            speaker: "!boy",
            text: "Oh that does look nice. Matha, dear, do you mind if I unload into this " +
                "sissy? I do have a clearer head for betting when I unload. ",
            button: [
                { chatID: 53, text: "...", callback: "" },
            ]
        },
        {
            chatID: 53,
            speaker: "!girl",
            text: "Of course. Better you unload into that sissy then try your gastly moves " +
                "on me, hehehe. ",
            button: [
                { chatID: 54, text: "...", callback: "b203_9" },
            ]
        },
        {
            chatID: 54,
            speaker: "!boy",
            text: "I know dear. She does have the most delectable hole. So soft. I " +
                "really will enjoy this. ",
            button: [
                { chatID: 55, text: "...", callback: "b203_10" },
            ]
        },
        {
            chatID: 55,
            speaker: "!girl",
            text: "What a proper thrust you have dear. Now drop your load, I see Friedrich " +
                "is almost done with his sissy and I did want to ask him about his investments " +
                "in Singapore. ",
            button: [
                { chatID: 56, text: "...", callback: "b203_11" },
            ]
        },
        {
            chatID: 56,
            speaker: "!boy",
            text: "eerrrrghh. Aaaa. That should do it. Yes, let's go have a chat " +
                "with Friedrich. Missy, that's a fine sissy you have here. ",
            button: [
                { chatID: 57, text: "eerrrgh", callback: "b203_12" },
            ]
        },
        {
            chatID: 57,
            speaker: "missy",
            text: "That is a lot of cum. Must have been a while. Now let's go " +
                "out to the track. I need to get you ready for the race. ",
            button: [
                { chatID: 58, text: "race?", callback: "b203_13" },
            ]
        },
        {
            chatID: 58,
            speaker: "missy",
            text: "Here it is. My chariot. You're going race against the other sissies " +
                "while pulling me in my chariot. I've seen the competition and I think " +
                "we have a real chance. Plus since it's the first race people will be " +
                "talking about it for years. Now I need to attach you to the chariot " +
                "so we can race. ",
            button: [
                { chatID: 59, text: "attach?", callback: "b203_14" },
            ]
        },
        {
            chatID: 59,
            speaker: "missy",
            text: "Hahaha. Yes. Attach. The pear of anguish goes inside your bussy and " +
                "I'll expand it enough that it doesn't slide out, but not so big that " +
                "you can't run, then I'll attach your harness so I can stear. It'll be " +
                "fun. Just don't don't lose this race! ",
            button: [
                { chatID: 60, text: "*gulp*", callback: "b203_15" },
            ]
        },
        {
            chatID: 60,
            speaker: "thinking",
            text: "Oh fuck fuck fuck! That is so tight! There's no way I can run with " +
                "this huge plug in me! She just keeps making it bigger. I can feel it " +
                "stretching me out from the inside. If this was anyone else I would " +
                "just run away. Hopefully the other sissies are in as much pain as me! ",
            button: [
                { chatID: 61, text: "*whimper*", callback: "b203_16" },
            ]
        },
        {
            chatID: 61,
            speaker: "missy",
            text: "You better get ready to run like you've never run before! You're " +
                "twice the sissy as any of these other girls! You better have the energy " +
                "to make it to first place! ",
            button: [
                { chatID: -1, text: "[Take a moment to collect yourself]", callback: "b203_17" },
            ]
        },
        {
            chatID: 62,
            speaker: "missy",
            text: "You better pick it up! " + sc.n("sporty") + " is beating you! Go " +
                "faster you slow ass sissy lump of goo! ",
            button: [
                { chatID: 63, text: "hhrrruuummmmm!", callback: "" },
            ]
        },
        {
            chatID: 63,
            speaker: "thinking",
            text: "Holy shit! I've never run this hard in my life! My quads are killing " +
                "me from pulling all this weight, my asshole is screaming to be released " +
                "from this pear of anguish, and my lungs are going to explode! I'm " +
                "not even half way done and I think I'm going to die right here on this race track! " +
                "The faster I run the sooner it's over... must go faster....",
            button: [
                { chatID: -1, text: "...", callback: "b203_19" },
            ]
        },
        {
            chatID: 64,
            speaker: "missy",
            text: "Yes! Yes! Holy fucking shit balls! Yes! I won!!! ",
            button: [
                { chatID: 65, text: "*huf*", callback: "b203_20" },
            ]
        },
        {
            chatID: 65,
            speaker: "!sporty",
            text: "Wow. good run. I guess I've been slacking off to let you win. hehehe. ",
            button: [
                { chatID: 68, text: "Yeah, or I've been working out baby!", callback: "" },
            ]
        },
        {
            chatID: 66,
            speaker: "missy",
            text: "Fuck fuck fuck! I lost! Damn it! ",
            button: [
                { chatID: 67, text: "*huf*", callback: "b203_20" },
            ]
        },
        {
            chatID: 67,
            speaker: "!sporty",
            text: "Wow. good run. I really ran my ass off out there. ",
            button: [
                { chatID: 68, text: "Yeah. Good race. You totally out ran all of us. ", callback: "" },
            ]
        },
        {
            chatID: 68,
            speaker: "!chris",
            text: "It's so rude. We did all the work and they're out there celebrating. " +
                "It like we're really ponies. All the work and non of the reward. They could " +
                "at least have said good girl, or maybe some cake. I don't know. ",
            button: [
                { chatID: 69, text: "...", callback: "b203_21" },
            ]
        },
        {
            chatID: 69,
            speaker: "!jenna",
            text: "Hi girls. So are your asses and destroyed as mine? I thought I was " +
                "going to be split open out there. For the first time in my life I have " +
                "no desire to get fucked up my ass. ",
            button: [
                { chatID: 70, text: "...", callback: "" },
            ]
        },
        {
            chatID: 70,
            speaker: "!martin",
            text: "Hi new girl. So what are you doing here? Are you starting the Sissy " +
                "School too?",
            button: [
                { chatID: 71, text: "...", callback: "" },
            ]
        },
        {
            chatID: 71,
            speaker: "!jenna",
            text: "I don't know what the Sissy School is. I was in the cave of lost girls, " +
                "until my Mistress came and freed me. We live in the next town over, but " +
                "she likes the races and wouldn't pass up on the first sissy race. I guess " +
                "when we get home she's going to have me doing a lot more running... as soon " +
                "as my ass heals.",
            button: [
                { chatID: 72, text: "What's the cave of lost girls? ", callback: "b203_22" },
            ]
        },
        {
            chatID: 72,
            speaker: "black",
            text: "Ok girls. I'm going to take you back. You all stink of body odor and " +
                "and ass. You girls did good. They liked the sissy race so much they're going " +
                "to do it every Tuesday and Thursday if you want to come back. Just do me a favor " +
                "and don't tell " + sc.n("ralph") + ". ",
            button: [
                { chatID: -1, text: "[Return home - also future pony races in development]", callback: "b203_23" },
            ]
        },
        {
            chatID: 73,
            speaker: "black",
            text: "Girls, today is an exploration into your feelings and connecting " +
                "those feeling to you mind, body, and soul. With all noise of the " +
                "outside world telling you how to dress, who to be, what you should " +
                "do, you'll focus on who you want to be, and who you are. " +
                "My sensory deprovation device will allow you to focus on yourself " +
                "and explore your thoughts.",
            button: [
                { chatID: 74, text: "...", callback: "" },
            ]
        },
        {
            chatID: 74,
            speaker: "black",
            text: "But most important, it will allow you to focus on your feelings " +
                "so you can be the you, you really are. Now each of you will need " +
                "to strip down and we're going to put on a hood with noise cancelling " +
                "headphones, a soft ball and gag mask so you will not see, hear, taste, or make " +
                "noise. Malik and I will then take you to a new suprise location " +
                "where you'll be able to connect yourself to your body. ",
            button: [
                { chatID: 75, text: "Yes ma'am [Strip down and put on the hood and headphones]", callback: "black" },
            ]
        },
        {
            chatID: 75,
            speaker: "thinking",
            text: "Oh wow I really can't see or hear anything. I can feel some senses " +
                "from the floor. I wonder if it's the other girls. Or maybe other " +
                "people are coming in. I don't know. I wouldn't put anything past " +
                sc.n("black") + ".",
            button: [
                { chatID: 76, text: "...", callback: "b303_1" },
            ]
        },
        {
            chatID: 76,
            speaker: "thinking",
            text: "Someone grabbed my hand and is leading me up the elevator. Such a " +
                "big meaty hand. Must be Malik. He's such a big guy.... Oh we're getting " +
                "in ...a van. Must be a van. I wonder where we're going. This can't be good. " +
                "Or maybe it will be great. I don't know. I'm a little scared. ",
            button: [
                { chatID: 77, text: "...", callback: "b303_2" },
            ]
        },
        {
            chatID: 77,
            speaker: "thinking",
            text: "Ok now they're taking us out. I wonder if there's other people " +
                "around. Can they see 4 sissies walking around with hoods on in the nude? " +
                "That would be a sight. We can't be anywhere public. No way. Oh we've stopped " +
                "walking. Where are we?",
            button: [
                { chatID: 78, text: "...", callback: "b303_3" },
            ]
        },
        {
            chatID: 78,
            speaker: "thinking",
            text: "I'm getting bent over something. Hard and cool. I think it's metal. " +
                "It doesn't feel soft like wood or plastic. Has to be metal. " +
                "And now we're being tied up. Of course we're being tied up. " +
                "Damn it's tight. I can't move my hands or legs. " + sc.n("black") + 
                " must have done the ties. Feels like her work. ",
            button: [
                { chatID: 79, text: "...", callback: "b303_4" },
            ]
        },
        {
            chatID: 79,
            speaker: "thinking",
            text: "ouch. My wrists and jaw are starting to get sore from this tie. I wonder " +
                "how long I've been out here. Feels like an hour. Are they still there? " +
                "Did they tie us up and leave us. I can feel the wind on my bare ass and " +
                "the metal on my body. ",
            button: [
                { chatID: 80, text: "I find the feeling of the unknown exciting", callback: "b303_char" },
                { chatID: 80, text: "I'm quite scared of what may come next. ", callback: "b303_sub" },
            ]
        },
        {
            chatID: 80,
            speaker: "thinking",
            text: "This is getting ridiculous. FFFFFfffff.. damn. I can't move my hands " +
                "or legs at all. When I try to yell it's just super muffled. Is she going " +
                "to leave us here overnight. Oh no. What if it's longer. What if she leaves " +
                "us out here for a week! We have to eat and drink. She can't leave us out " +
                "here for a week can she? ",
            button: [
                { chatID: 81, text: "...", callback: "b303_5" },
            ]
        },
        {
            chatID: 81,
            speaker: "thinking",
            text: "Something just poked me... Was it a finger. It felt soft like a finger. " +
                "Why would they poke me? Is " + sc.n("black") + " checking if I'm still alive? " +
                "Is it someone else? Maybe " + sc.n("black") + " left us out here and it's up " +
                "to use to free ourselves. I should try to ask for help. ",
            button: [
                { chatID: 82, text: "*muffled noises*", callback: "b303_6" },
            ]
        },
        {
            chatID: 82,
            speaker: "thinking",
            text: "Ouchie ouchie ouchie! They pinched me! Hard! Damn that hurt. Stop " +
                "it you! Who ever you are stop it!",
            button: [
                { chatID: 83, text: "*muffled noises*", callback: "b303_7" },
            ]
        },
        {
            chatID: 83,
            speaker: "thinking",
            text: "OOOofff! fuck. That was a hard slap. Why would you slap me? " +
                "That really hurt! What the hell! ",
            button: [
                { chatID: 84, text: "*muffled noises*", callback: "b303_8" },
            ]
        },
        {
            chatID: 84,
            speaker: "thinking",
            text: "That's either the smallest penis in the world or they're poking " +
                "my ass with their finger. Who slaps someone then sticks their " +
                "finger up their butt? ",
            button: [
                { chatID: 85, text: "*muffled noises*", callback: "b303_9" },
            ]
        },
        {
            chatID: 85,
            speaker: "thinking",
            text: "Now what are they doing? Damn I wish I could see around. All I " +
                "can feel is the wind on my naked ass. Did they leave? Are they " +
                "going to do something else? What's going on out there? ",
            button: [
                { chatID: 86, text: "I really wish they would just fuck me!", callback: "b303_10" },
                { chatID: 90, text: "I really hope they're just gone", callback: "b303_7" },
            ]
        },
        {
            chatID: 86,
            speaker: "thinking",
            text: "Oh wow. I just thought it and it happened! Oh my it feels really good " +
                "They have the perfect size dick that just hits my sissy spot just right. " +
                "Oh please don't stop! Please fuck me harder! ",
            button: [
                { chatID: 87, text: "*muffled moaning*", callback: "b303_11" },
            ]
        },
        {
            chatID: 87,
            speaker: "thinking",
            text: "I can feel my body shaking and sweating. That dick is so amazing! I love " +
                "it! I so love it! My bussy is getting really sensative in a way I've never " +
                "felt before! Fuck me fuck me fuck me fuck me fuck me fuck me!!!!!!",
            button: [
                { chatID: 88, text: "*muffled moaning*", callback: "b303_12" },
            ]
        },
        {
            chatID: 88,
            speaker: "thinking",
            text: "Yes! This is who I am! I'm a cum loving sissy! My clitty is worthless, " +
                "I just need cocks fucking me all the time. It's who I really am! I'm " +
                "a cock loving sissy for life! ",
            button: [
                { chatID: 89, text: "*muffled moaning*", callback: "b303_13" },
            ]
        },
        {
            chatID: 89,
            speaker: "thinking",
            text: "I hope there's another cock coming. Wow! I do love this class. ",
            button: [
                { chatID: 92, text: "*panting*", callback: "b303_2" },
            ]
        },
        {
            chatID: 90,
            speaker: "thinking",
            text: "OUCHIE! Really! Another slap? Am I just a punching bag for someone? ",
            button: [
                { chatID: 91, text: "*grrrrr*", callback: "b303_14" },
            ]
        },
        {
            chatID: 91,
            speaker: "thinking",
            text: "I can't wait to get out of this! I'm going to find that person and " +
                "slap them around! This is so dumb! I'm not a sissy punching bag! I'm " +
                "going to find them and make them pay! ",
            button: [
                { chatID: 92, text: "*grrrrr*", callback: "b303_2" },
            ]
        },
        {
            chatID: 92,
            speaker: "thinking",
            text: "Oh. Someone untying my hands. Finally. I guess we're getting back in " +
                "the van. I guess we're going home? Maybe we're going to another place. " +
                "Maybe something bigger. Then why would we go here first. We have to be " +
                "going home. Maybe....",
            button: [
                { chatID: 93, text: "...", callback: "b303_15" },
            ]
        },
        {
            chatID: 93,
            speaker: "black",
            text: "I hope you've found who you really are " +
                "on this little outing. I do know the crowd enjoyed the show. " + 
                sc.n("!timothy") + " you performed wonderfully as always. I admit " +
                "I've never witnessed anyone take as much as you did. I had to convince " +
                "some of the men to go visit you other girls. This concludes our class. ",
            button: [
                { chatID: -1, text: "...", callback: "completeClass" },
            ]
        },
        {
            chatID: 94,
            speaker: "black",
            text: "Welcome to the Black Room. I used to teach basic knot tying, but a few of my students when home " +
                "and really got themselves in some trouble when they couldn't free themselves. " +
                "So now it's just a basic introduction so you idiots don't hurt yourselves. ",
            button: [
                { chatID: 95, text: "...", callback: "" },
            ]
        },
        {
            chatID: 95,
            speaker: "black",
            text: "Bondage and discipline is different for everyone. Some use it as an escape from " +
                "their mundane lives. Some enjoy or may even be aroused by the pain " +
                "inflicted by another. Some use it to relive trauma from their past. You " +
                "will need to find your own reason, but bondage and discipline will be inflicted " +
                "on you. Your true sissy strength comes from your ability to enjoy the pain. Just " +
                "ask Sanaria here. She has found her inner strength. Isn't that right Sanaria?",
            button: [
                { chatID: 96, text: "...", callback: "" },
            ]
        },
        {
            chatID: 96,
            speaker: "!sanaria",
            text: "HmmmmmM mmMmmmm hHHmmmmmmffff",
            button: [
                { chatID: 97, text: "...", callback: "" },
            ]
        },
        {
            chatID: 97,
            speaker: "black",
            text: "That's enough for today. I've got to get back to Sanaria. She's been " +
                "a naughty girl and needs to learn her own lessons. ",
            button: [
                { chatID: -1, text: "...", callback: "completeClass" },
            ]
        },
        {
            chatID: 98,
            speaker: "black",
            text: "No thrill is as delicious as exposing your slutty side to strangers " +
                "you've never met. There is no greater rush than reading the lewd comments " +  
                "these stange men will make about how they'll fuck you, tie you up. punish you, " +
                "and gather all their friends to rape your tight little holes. ",
            button: [
                { chatID: 99, text: "...", callback: "" },
            ]
        },
        {
            chatID: 99,
            speaker: "black",
            text: "Now don't worry, my new little hatchlings. I know most of you haven't " +
                "told a soul that you enjoy dressing up like a girl and long to get sexually " +
                "molested and used. You're outing needs to be personal, so all pictures " +
                "we take and post will use cleaver angles to hide your identity. ",
            button: [
                { chatID: 100, text: "...", callback: "" },
            ]
        },
        {
            chatID: 100,
            speaker: "!chris",
            text: "Post? Post like on the internet? Post where? ",
            button: [
                { chatID: 101, text: "...", callback: "" },
            ]
        },
        {
            chatID: 101,
            speaker: "black",
            text: "Of course on the internet. I'm going to take a picture of each of you " +
                "to post on my favorite sissy exposure website. I'll add in some basic info " +
                "about your sissy self so the dirty old men know more about your secret desires. " +
                "Then I'll give you the link so you can see it at home and each of you will get " +
                "an offical Sissy ID card! Isn't this so exciting!",
            button: [
                { chatID: 102, text: "...", callback: "" },
            ]
        },
        {
            chatID: 102,
            speaker: "!thomas",
            text: "I don't know. It's one thing wearing a skirt in here, but showing " +
                "the world makes me scared. What if someone knows me looks at it? Can " +
                "I delete it after? ",
            button: [
                { chatID: 103, text: "...", callback: "" },
            ]
        },
        {
            chatID: 103,
            speaker: "black",
            text: "No. You won't be able to delete it. It will be up there forever. " +
                "If someone you knows is able to figure out that it's you, then you'll " +
                "just have to have that uncomfortable talk with them. Who knows, you may " +
                "find yourself a new sexual partner that is into sissies like each of you. " +
                "Doing something for the first time is always a little scary, but once you " +
                "get used to the idea you'll find yourself posting more revealing pictures " +
                "of your slutty selves. Be careful it is addicting. ",
            button: [
                { chatID: 104, text: "...", callback: "" },
            ]
        },
        {
            chatID: 104,
            speaker: "!timothy",
            text: "Will we be naked in our pictures? ",
            button: [
                { chatID: 105, text: "...", callback: "" },
            ]
        },
        {
            chatID: 105,
            speaker: "black",
            text: "Hahaha, no. It's a sissy exposure site, not a naked boy site. You'll " +
                "each wear your sissy uniforms, but you'll pick your pose for the website " +
                "and your Sissy ID card. The pose is important, as it shows what kind of " +
                "of sissy you are. Some like to flash their ass, some their clitty cage, their feet, " +
                "or try to stuff their shirts so they appear to have breasts. You pose will say " +
                "a lot about you, and what you're interested in. But don't overthink it too much. " +
                "This will be your first picture of your sissy self online, but it won't be your last. ",
            button: [
                { chatID: 106, text: "...", callback: "" },
            ]
        },
        {
            chatID: 106,
            speaker: "black",
            text: sc.n("!timothy") + ", you're the sluttist girl here, we'll start with you " +
                "so you can show the other girls good poses. ",
            button: [
                { chatID: 107, text: "...", callback: "ez215_1" },
            ]
        },
        {
            chatID: 107,
            speaker: "black",
            text: "Now girls, look at " + sc.n("!timothy") + "'s pose. It shows her confidence " +
                "in who she is, with just a subtle display of her little chastity cage to " +
                "show the viewer her tiny clitty is off limits. Simply sex. Such a bratty sissy " +
                "I'm looking forward to breaking. ",
            button: [
                { chatID: 108, text: "...", callback: "ez215_2" },
            ]
        },
        {
            chatID: 108,
            speaker: "black",
            text: sc.n("!thomas") + " is on her knees. This is becuase she wants everyone " +
                "to know that she's a submissive cock sucker. Isn't that right " + sc.n("!thomas") +
                "?",
            button: [
                { chatID: 109, text: "...", callback: "" },
            ]
        },
        {
            chatID: 109,
            speaker: "!thomas",
            text: "Oh yes ma'am! I just love the idea of men gathering around me and " +
                "making me suck on their penises. So hot!",
            button: [
                { chatID: 110, text: "...", callback: "ez215_3" },
            ]
        },
        {
            chatID: 110,
            speaker: "black",
            text: sc.n("!chris") + " here has turned her back to the camera. This shows " +
                "she's still very afraid of showing her face, but does love to show off " +
                "her tight little butt. " + sc.n("!chris") + " still needs a lot of work " +
                "in finding her confidance, hopefully the comments in this post will help " +
                "her. ",
            button: [
                { chatID: 111, text: "...", callback: "" },
            ]
        },
        {
            chatID: 111,
            speaker: "black",
            text: "Now finally what pose would you like to do? ",
            button: [
                { chatID: 112, text: "Front", callback: "ez215_sissy3" },
                { chatID: 112, text: "Back", callback: "ez215_sissy1" },
                { chatID: 112, text: "Upskirt", callback: "ez215_sissy2" },
                { chatID: 112, text: "Clitty cage flash", callback: "ez215_sissy0" },
            ]
        },
        {
            chatID: 112,
            speaker: "black",
            text: "Cute! Really shows off your tight little body. I've sent the " +
                "image to your phone. You can see your page on the sissy exposure " +
                "site when you get home. For those that have never shown off before " +
                "I'm sure you'll be excited to see all the great comments. These pictures  " +
                "will be on the internet forever. Completely out of your control. Now go " +
                "home and read the nasty things the dirty old men are saying about you. ",
            button: [
                { chatID: -1, text: "Weeee!", callback: "completeClass" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};