//Room name
var room953 = {};
room953.main = function () {
    switch (gv.get("cultchapelCounter")) {
        case 0:
            nav.bg("953_chaple/e2.jpg");
            gv.mod("cultchapelCounter", 1); 
            chat(0, 953);
            break;
        case 1:
            nav.bg("953_chaple/e2.jpg");
            gv.mod("cultchapelCounter", 1);
            chat(34, 953);
            break;
        default:
            nav.bg("953_chaple/e2.jpg");
            chat(53, 953);
            break;

    }
    //if (g.internal.chaple === 0)
    //    chat(0, 953);
    //else if (g.internal.chaple === 2) {
    //    nav.bg("953_chaple/breakout1.jpg");
    //    chat(37, 953);
    //}
    //else
    //    chat(30, 953);
};

room953.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room953.chatcatch = function (callback) {
    switch (callback) {
        case "e1":
        case "e2":
        case "e3":
        case "e4":
        case "e5":
        case "e6":
        case "e7":
        case "e8":
        case "e9":
        case "e10":
        case "e11":
        case "e12":
        case "e12x":
        case "e13":
            nav.bg("953_chaple/" + callback + ".jpg");
            break;
        case "x2":
        case "x3":
        case "x4":
        case "x5":
        case "x6":
            nav.bg("953_chaple/" + callback + ".webp");
            break;
        case "x7":
            levels.fuckpussy("stormy");
            nav.bg("953_chaple/" + callback + ".webp");
            break;
        case "e13x":
            g.internal.interval++;
            char.room(950);
            break;
        case "breakout0":
            if (sc.getEvent("daria", -2)) {
                nav.killall();
                nav.bg("953_chaple/breakout0.jpg");
                g.internal.chaple = 2;
                chat(35, 953);
            }
            else
                chat(32, 953);
            break;
        case "breakout1":
            nav.bg("953_chaple/breakout1.jpg");
            break;
        case "breakout2":
            g.pass = 953;
            char.room(8);
            break;
        case "breakout3":
            nav.bg("953_chaple/breakout3.jpg");
            break;
        case "breakout4":
            nav.bg("953_chaple/breakout4.jpg");
            break;
        case "breakout5":
            nav.bg("953_chaple/breakout5.jpg");
            break;
        case "breakout6":
            nav.bg("953_chaple/breakout6.jpg");
            break;
        case "breakout7":
            char.room(954);
            break;
        case "e14":
            nav.bg("953_chaple/wall.webp");
            zcl.displayMain(350, 730, .14, "clothes", false);
            nav.button({
                "type": "img",
                "name": "cell",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "953_chaple/wall_fg0.webp"
            }, 953);
            break;
        case "e15":
            nav.modbutton("cell", "953_chaple/wall_fg1.webp", null, null); 
            break;
        case "e16":
            nav.modbutton("cell", "953_chaple/wall_fg2.webp", null, null);
            break;
        case "e17":
            gv.set("cultRank", "Sissy?");
            gv.set("cultRank", "Sissy?");
            sc.modLevel("cult", 25, 10);
            nav.modbutton("cell", "953_chaple/wall_fg3.webp", null, null);
            break;
        case "e18":
            if (gender.pronoun("f") === "f") {
                chat(16, 953);
            }
            else {
                gv.set("cultRank", "Cum Supplier");
                nav.modbutton("cell", "953_chaple/wall_fg3.webp", null, null);
            }
            break;
        case "esissy":
            sc.modLevel("cult", 25, 10);
            gv.set("cultRank", "Sissy?");
            break;
        case "eman":
            gv.set("cultRank", "Cum Supplier");
            break;
        case "e19":
            nav.modbutton("cell", "953_chaple/wall_fg4.webp", null, null);
            break;
        case "e20":
            if (gv.get("cultRank") === "Sissy?") {
                chat(19, 953);
            }
            else {
                nav.kill();
                nav.bg("953_chaple/x0.webp");
                chat(22, 953);
            }
            break;
        case "x1":
            nav.bg("953_chaple/x1.webp");
            if (sc.getMissionTask("stormy", "property", 0).complete) 
                chat(23, 953);
            else
                chat(24, 953);
            break;
        case "room950":
            gv.set("cultDayCounter", 5);
            char.room(950);
            break;
        default:
            break;
    }
};

room953.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "It looks like this thing is about to start. " +
                "I can't believe how may there are. There must be at least a hundred in here. It looks like " +
                "this thing is about to begin. I'm going to try and get a better view.",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ubel",
            text: "... and the light of the fire shall awaken, Azrael, the demon within! He will strike down all nonbelievers " +
                "and wipe them from the earth. Leaving only you, the pure souls that brought his coming...",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "ubel",
            text: "... We shall bathe the chosen one in the semen of people and she will birth the demon from within her womb formed " +
                "by the spirit of our beleif and power! But only if all of you truly believe. This is why all those that have lost " +
                "their faith must be found and seperated by blood from our numbers...",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "ubel",
            text: "...Bring forth the chosen one and bathe her in the semen of the people! ",
            button: [
                { chatID: 4, text: "[Sneak a closer look]", callback: "e3" }
            ]
        },
        {
            chatID: 4,
            speaker: "ubel",
            text: "We will now add the semen of the people to mix with the chosen one and birth Azrael!",
            button: [
                { chatID: 5, text: "?", callback: "e4" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Oh wow, that's where all our cum goes...",
            button: [
                { chatID: 6, text: "...", callback: "e5" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Hmmm I wonder what it's like to bathe in a bowl full of cum. I can totally smell it from here too. ",
            button: [
                { chatID: 7, text: "...", callback: "e6" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "That cum must get everywhere! I wonder if the little spermies can get into her pores? ",
            button: [
                { chatID: 8, text: "...", callback: "e13" }
            ]
        },
        {
            chatID: 8,
            speaker: "ubel",
            text: "Now, chosen people of Azrael, it is time to welcome our new slaves into the order and " +
                "see who is worthy to wear the robe. Put them up against the wall!",
            button: [
                { chatID: 9, text: "...", callback: "e14" }
            ]
        },
        {
            chatID: 9,
            speaker: "ubel",
            text: "You. Are you a Cum Supplier or Sissy?",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "!man",
            text: "Man! Totaly Cum Supplier! I ain't to bitch! ",
            button: [
                { chatID: 11, text: "...", callback: "e15" }
            ]
        },
        {
            chatID: 11,
            speaker: "ubel",
            text: "Are you a Cum Supplier or Sissy?",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "!jeremy",
            text: "oh yeah, me? Cum Supplier. Total Cum Supplier. ",
            button: [
                { chatID: 13, text: "*pssst*", callback: "e16" }
            ]
        },
        {
            chatID: 13,
            speaker: "ubel",
            text: "Are you a Cum Supplier or Sissy?",
            button: [
                { chatID: 14, text: "Sissy", callback: "e17" },
                { chatID: -1, text: "Cum Supplier", callback: "e18" }
            ]
        },
        {
            chatID: 14,
            speaker: "ubel",
            text: "Are you a Cum Supplier or Sissy?",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "!man",
            text: "Giver! I'm a Cum Supplier! ",
            button: [
                { chatID: 17, text: "...", callback: "e19" }
            ]
        },
        {
            chatID: 16,
            speaker: "ubel",
            text: "HAHAHAHA!!! Did she just say Cum Supplier! You look like the kind of bitch that that " +
                "is addicted to cum. Are you sure you're really a Cum Supplier, or are you cum receiving sissy? ",
            button: [
                { chatID: 20, text: "You're right. I'm a cum receiving sissy.", callback: "esissy" },
                { chatID: 21, text: "No. I'm really a Cum Supplier! ", callback: "eman" }
            ]
        },
        {
            chatID: 17,
            speaker: "ubel",
            text: "Selections are over. I welcome all of our new Cum Suppliers! We will now begin the welcoming " +
                "ceremonies. The Milk Maids have provided a most excellent celebration for all. After we " +
                "will give you each your robes and medallions and welcome you to the church. ",
            button: [
                { chatID: 18, text: "...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "ubel",
            text: "Castellan! Remove the Sissies from our sight and put them back in their cells. ",
            button: [
                { chatID: -1, text: "...", callback: "e20" }
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "What? Damn it! Why the hell do I have to sit in a cell and they get to fuck those girls " +
                "and party! This is such bullshit!",
            button: [
                { chatID: -1, text: "...", callback: "room950" }
            ]
        },
        {
            chatID: 20,
            speaker: "ubel",
            text: "I know. We all know. It's ok, bimbo. Thinking is hard. Don't worry, you won't have " + 
                "to use that brain of yours anymore",
            button: [
                { chatID: -1, text: "...", callback: "e17" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "Hmmm... Well, who am I to judge. Fine. ",
            button: [
                { chatID: 14, text: "...", callback: "e17" }
            ]
        }, 
        {
            chatID: 22,
            speaker: "thinking",
            text: "Holy shit! These chicks are just here to get fucked! Who am I going to stick my " +
                "dick into first? ",
            button: [
                { chatID: 23, text: "...", callback: "x1" }
            ]
        },
        {
            chatID: 23,
            speaker: "stormy",
            text: "Hey. Sorry, I didn't know you were cool or I wouldn't have peed on you. " +
                "Soooo, are you really a Cum Supplier. You know " +
                "us Milk Maids have to do anything you say. ",
            button: [
                { chatID: 27, text: "Really? Well I am a Cum Supplier and my penis has something to say.", callback: "x2" },
                { chatID: 25, text: "Oh. I'm just hanging out. ", callback: "x2" },
            ]
        },
        {
            chatID: 24,
            speaker: "stormy",
            text: "Hey sexy. You know " +
                "us Milk Maids have to do anything the Cum Supplier says. ",
            button: [
                { chatID: 27, text: "Really? Well I am a Cum Supplier and my penis has something to say.", callback: "x2" },
                { chatID: 25, text: "Oh. I'm just hanging out. ", callback: "x2" },
            ]
        },
        {
            chatID: 25,
            speaker: "stormy",
            text: "Oh. Well that's too bad. In time you'll learn your power. I'm going to find someone " +
                "who has already found their true power. Say bye bye to this fine ass baby. It's going to " +
                "get fucked by a real man. ",
            button: [
                { chatID: 26, text: "awww. bye bye baby. ", callback: "xend" },
            ]
        },
        {
            chatID: 26,
            speaker: "ubel",
            text: "Unlike the others, you are not free to go. I don't trust your intentions. Tomorrow we " +
                "shall do a test to see if you are who you claim to be. If you are, it will be quite the " +
                "experience. For you. Take him back to his cell! ",
            button: [
                { chatID: -1, text: "*sigh*", callback: "room950" },
            ]
        },
        {
            chatID: 27,
            speaker: "stormy",
            text: "Give me your gift of cum, right here! ",
            button: [
                { chatID: 28, text: "Fuck yeah!", callback: "x3" },
            ]
        },
        {
            chatID: 28,
            speaker: "stormy",
            text: "I'm so horny! Put your cock in my cunt! I need it so bad! ",
            button: [
                { chatID: 29, text: "[Stick your dick inside her cunt]", callback: "x4" },
            ]
        },
        {
            chatID: 29,
            speaker: "stormy",
            text: "Aaak! That's my asshole! You need to warn me first! Shove it in my pussy! I need " +
                "to welcome you to the cult! ",
            button: [
                { chatID: 30, text: "[Move your dick to her pussy hole]", callback: "x5" },
            ]
        },
        {
            chatID: 30,
            speaker: "stormy",
            text: "Oh yeah! Everyone's looking at us! Give them the show, cum inside me! Make me your " +
                "cum receptacle",
            button: [
                { chatID: 31, text: "[Fill her uterus with your cum]", callback: "x6" },
            ]
        },
        {
            chatID: 31,
            speaker: "stormy",
            text: "OOoooooo *gasp* I'm cumming so hard! Love it when they stare at me! ",
            button: [
                { chatID: 32, text: "*grunt*", callback: "x7" },
            ]
        },
        {
            chatID: 32,
            speaker: "ubel",
            text: "You did good today. Unlike the other true believers you still have one more step before " +
                "you can receive your robe. Until then you'll wait in your cell while we continue with our rituals." +
                "Now go, so I can enjoy " + sc.n("stormy") + " next. She is one of my favorites. ",
            button: [
                { chatID: -1, text: "*sigh* ok", callback: "room950" },
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "",
            button: [
                { chatID: 34, text: "...", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "thinking",
            text: "It looks like this thing is about to start.  ",
            button: [
                { chatID: 35, text: "...", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "We've been standing here for a while. Is something supposed to happen? I'm going to try and sneak up front for a " +
                "better view.",
            button: [
                { chatID: 36, text: "...", callback: "e7" }
            ]
        },
        {
            chatID: 36,
            speaker: "ubel",
            text: "We have a liar in our ranks! Azrael will only appear when all who worship have the full faith! Who is the nonbeliever " +
                "among us!!!",
            button: [
                { chatID: 37, text: "...", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "thinking",
            text: "Oh shit! I hope he's not talking about me. I better sneak back to the back of the chapel. I hope he doesn't think " +
                "it's me. He seems really mad. ",
            button: [
                { chatID: 38, text: "...", callback: "e2" }
            ]
        },
        {
            chatID: 38,
            speaker: "ubel",
            text: "I know the nonbeliever among us! He pretends to follow the instuctions Azreal, but his actions are a lie! He " +
                "deceives us all in his treachery!",
            button: [
                { chatID: 39, text: "GULP!", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "ubel",
            text: "We must root out the nonbeliever from our ranks! Part the crowd and show yourself so you may be punished! ",
            button: [
                { chatID: 40, text: "Double gulp!", callback: "e8" }
            ]
        },
        {
            chatID: 40,
            speaker: "ubel",
            text: "You have been identified. Strip him of his robes and suspend him for all to see the virus within our body. ",
            button: [
                { chatID: 41, text: "Oh good. It's not me", callback: "e9" }
            ]
        },
        {
            chatID: 41,
            speaker: "ubel",
            text: "Confess! ",
            button: [
                { chatID: 42, text: "...", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "cult",
            text: "It's not me! I have full faith in the union and Azreal! ",
            button: [
                { chatID: 43, text: "...", callback: "e10" }
            ]
        },
        {
            chatID: 43,
            speaker: "ubel",
            text: "Confess and I will show you mercy! ",
            button: [
                { chatID: 44, text: "...", callback: "e9" }
            ]
        },
        {
            chatID: 44,
            speaker: "thinking",
            text: "Holy crap! That looks brutal! ",
            button: [
                { chatID: 45, text: "...", callback: "e10" }
            ]
        },
        {
            chatID: 45,
            speaker: "ubel",
            text: "Confess to your brothers and sisters! ",
            button: [
                { chatID: 46, text: "...", callback: "e9" }
            ]
        },
        {
            chatID: 46,
            speaker: "thinking",
            text: "He just keeps going! I wouldn't want to make " + sc.n("ubel") + " angry. ",
            button: [
                { chatID: 47, text: "...", callback: "e10" }
            ]
        },
        {
            chatID: 47,
            speaker: "ubel",
            text: "Confess and you shall live! ",
            button: [
                { chatID: 48, text: "...", callback: "e11" }
            ]
        },
        {
            chatID: 48,
            speaker: "cult",
            text: "*Sobbing* I confess. I am guilty of all things. I have lied to all of you. Please. ",
            button: [
                { chatID: 49, text: "...", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "ubel",
            text: "Your brother has failed all of us. He shall be stripped of his robes and " +
                "cast out of our ranks. He will never know peace again.",
            button: [
                { chatID: 50, text: "...", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "ubel",
            text: "This lesson was not for him, but for you all. Castellan, take him to the swamps so that " +
                "he can not infect any more of my followers with his sanctimonious lies. May Azrael be in us " +
                "all. ",
            button: [
                { chatID: 51, text: "...", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "cult",
            text: "[All in unison] And in me is Azrael.",
            button: [
                { chatID: 52, text: "...", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "ubel",
            text: "There are no selections tonight. May you all enjoy the Milkmaids. Sissies, back to your cells. ",
            button: [
                { chatID: -1, text: "...", callback: "room950" }
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "*sigh* Another sermon.",
            button: [
                { chatID: 54, text: "...", callback: "e7" }
            ]
        },
        {
            chatID: 54,
            speaker: "ubel",
            text: "...We will cleanse this world of the filth with the power of Azreal! Together we will rise up and rule over all...",
            button: [
                { chatID: 55, text: "...", callback: "" }
            ]
        },
        {
            chatID: 55,
            speaker: "ubel",
            text: "...The blood of the nonbelievers shall flow like rivers thorugh our cities... May Azrael be in us all. ",
            button: [
                { chatID: 56, text: "...", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "cult",
            text: "[All in unison] And in me is Azrael.",
            button: [
                { chatID: 57, text: "...", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "ubel",
            text: "Send the sissies and put our new selections up against the wall!",
            button: [
                { chatID: -1, text: "...", callback: "room950" }
            ]
        },
        //{
        //    chatID: 32,
        //    speaker: "ubel",
        //    text: "...my followers will command contries as the world leaders burn under the flame of our power... ",
        //    button: [
        //        { chatID: 33, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 33,
        //    speaker: "thinking",
        //    text: "That guy can really talk for a long time. I have no idea why they just stand here listening to this crap.",
        //    button: [
        //        { chatID: 34, text: "...", callback: "e12x" }
        //    ]
        //},
        //{
        //    chatID: 34,
        //    speaker: "thinking",
        //    text: "Clean up then I'll escort you back to your cell. ",
        //    button: [
        //        { chatID: -1, text: "ok", callback: "e13x" }
        //    ]
        //},
        //{
        //    chatID: 35,
        //    speaker: "daria",
        //    text: "Sshhhhhh. Don't talk and follow me ",
        //    button: [
        //        { chatID: 36, text: "...", callback: "breakout1" }
        //    ]
        //},
        //{
        //    chatID: 36,
        //    speaker: "daria",
        //    text: "You're still naked. You can't break out of here naked. Quick, put some clothes on. ",
        //    button: [
        //        { chatID: -1, text: "...", callback: "breakout2" }
        //    ]
        //},
        //{
        //    chatID: 37,
        //    speaker: "daria",
        //    text: "Really? We're breaking out of an evil cult that may kill us if we get caught and that's what you " +
        //        "chose to wear?",
        //    button: [
        //        { chatID: 38, text: "Oh, uh...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 38,
        //    speaker: "bodhi",
        //    text: "A sissy's got to be a sissy. I think it's a totally excellent choice!",
        //    button: [
        //        { chatID: 39, text: "Thank you", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 39,
        //    speaker: "daria",
        //    text: "Ok you two, I've shut off the camera. We should be able to sneak out of here without getting caught. " +
        //        "Follow me and keep quiet. ",
        //    button: [
        //        { chatID: 40, text: "...", callback: "breakout3" }
        //    ]
        //},
        //{
        //    chatID: 40,
        //    speaker: "daria",
        //    text: "We're almost out of here. I'm going to open that door with the key you shoved up your ass " +
        //        "and we're all going to run like we've never run before. " +
        //        "Are you ready?",
        //    button: [
        //        { chatID: 41, text: "I'm ready. Let's go!", callback: "breakout4" }
        //    ]
        //},
        //{
        //    chatID: 41,
        //    speaker: "daria",
        //    text: "Ok go!",
        //    button: [
        //        { chatID: 42, text: "Run for freedom!", callback: "breakout5" }
        //    ]
        //},
        //{
        //    chatID: 42,
        //    speaker: "ubel",
        //    text: "Hello my misguided halfwits. Did you really think you could just walk out of here and no one would know? I know " +
        //        "everything that happens here, I just wasn't sure if you all were stupid enough to actually go through with it. ",
        //    button: [
        //        { chatID: 43, text: "*Yelp*", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 43,
        //    speaker: "ubel",
        //    text: sc.n("daria") + " and " + sc.n("bodhi") + " have we been fully accommodating with the both of you? I'm really " +
        //        "dissapointed that you would choose to cross me and betray the teachings of Azreal. I expected this from you, " +
        //        sc.n("me") + " though. But all is fine. I have spoken with Azreal on what to do with your lives.",
        //    button: [
        //        { chatID: 44, text: "Are you going to kill us?", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 44,
        //    speaker: "ubel",
        //    text: sc.n("bodhi") + " you shall live. You are too simple a creature for the path, but you must be punished. " +
        //        "I will have you watch everthing that happens to " + sc.n("daria") + " as she finds herself over the coming months. ",
        //    button: [
        //        { chatID: 45, text: "...", callback: "breakout6" }
        //    ]
        //},
        //{
        //    chatID: 45,
        //    speaker: "ubel",
        //    text: "Now your lives are on your own. You have strayed from the path of Azreal and only those on the path can remain. " +
        //        "I will give you the choice. Choice one is to remain here and go though my personal intensive training. It will be " +
        //        "filled with pain and suffering like you've never experainced. You will lose your very definition of self as you " +
        //        "are tortured and used by all who live here. ",
        //    button: [
        //        { chatID: 46, text: "What's choice two?", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 46,
        //    speaker: "ubel",
        //    text: "Hahaha. Choice two is death. No one betrays Azreal on these grounds.  ",
        //    button: [
        //        { chatID: 47, text: "*Gulp*", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 47,
        //    speaker: "thinking",
        //    text: "Oh wow, we really fucked up. I should have just waited in my cell. I'm sure " + sc.n("missy") + " or " +
        //        sc.n("landlord") + " would have tried to save us by now. If the cell was them being nice, I'm afriad of what " +
        //        "the intensive training is.",
        //    button: [
        //        { chatID: 48, text: "...", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 48,
        //    speaker: "daria",
        //    text: "I'm so sorry! Please don't kill us, I'll do anything to be able to see " + sc.n("bodhi") + " again. We " +
        //        "won't try to break out ever again. I promise! ",
        //    button: [
        //        { chatID: 49, text: "Please, we want to live. ", callback: "" }
        //    ]
        //},
        //{
        //    chatID: 49,
        //    speaker: "ubel",
        //    text: "Through pain you shall find salvation. Follow me. ",
        //    button: [
        //        { chatID: -1, text: "Follow.", callback: "breakout7" }
        //    ]
        //},
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};