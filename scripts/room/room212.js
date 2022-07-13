//Room name
var room212 = {};
room212.main = function () {
    var bstep = sc.getstep('black');
    if (bstep === 0)
        chat(0, 212);
    else if (bstep === 1)
        chat(19, 212);
    else
        chat(20, 212);
};

room212.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room212.chatcatch = function (callback) {
    switch (callback) {
        case "kneespose":
            nav.killall();
            nav.bg("212_black/kneel.jpg");
            break;
        case "chastityCheck":
            cl.nude();
            nav.bg("212_black/g0.jpg");
            if (cl.c.chastity === null)
                chat(6, 212);
            else
                chat(5, 212);
            break;
        case "chastityCheck0":
            cl.c.chastity = null;
            cl.display();
            break;
        case "mouth0":
        case "mouth1":
        case "mouth2":
        case "mouth3":
        case "mouth4":
        case "ball0":
        case "ball1":
        case "ball2":
            nav.bg("212_black/" + callback + ".jpg");
            break;
        case "ball3":
            nav.bg("212_black/black.jpg");
            break;
        case "ball3x":
            nav.bg("212_black/g.jpg");
            break;
        case "ball4":
            nav.bg("212_black/g.jpg");
            break;
        case "end0":
            cl.undo();
            sc.setstep("black", 1);
            g.mod("energy", -200);
            g.mod("d", 100);
            char.settime(17, 48);
            char.room(0);
            break;
        case "end":
            cl.undo();
            sc.incstep("black", 1);
            g.mod("energy", -200);
            g.mod("d", 100);
            char.settime(17, 48);
            char.room(0);
            break;
        case "endbad":
            cl.undo();
            sc.incstep("black", 1);
            g.mod("energy", -200);
            char.settime(17, 48);
            char.room(0);
            break;
        case "stripandkneel":
            cl.c.chastity = null;
            cl.nude();
            nav.killall();
            nav.bg("212_black/kneel.jpg");
            break;
        case "xtie4":
            if (cl.c.butthole < 1) {
                chat(45, 212);
            }
            else {
                if (cl.c.butthole < 3)
                    nav.bg("212_black/tie4max.jpg");
                else
                    nav.bg("212_black/tie4.jpg");
                chat(46, 212);
            }
            break;
        case "xtie5":
            if (cl.c.butthole < 3) {
                chat(47, 212);
            }
            else {
                if (cl.c.butthole < 6)
                    nav.bg("212_black/tie5max.jpg");
                else
                    nav.bg("212_black/tie5.jpg");
                chat(50, 212);
            }
            break;
        case "xtie6":
            if (cl.c.butthole < 6) {
                nav.bg("212_black/tie5reg.jpg");
                chat(51, 212);
            } 
            else {
                nav.bg("212_black/tie6.jpg");
                chat(56, 212);
            }
            break;
        case "xtieEnd":
            cl.undo();
            sc.incstep("black", 1);
            g.mod("energy", -200);
            g.mod("d", 100);
            cl.c.butthole += .34;
            if (cl.c.butthole > 9)
                cl.c.butthole = 9;
            char.settime(17, 48);
            g.popUpNotice("Your butthole stretched a lot. ");
            cl.cockDisplay();
            char.room(0);
            break;
        case "xhorend":
            cl.undo();
            sc.incstep("black", 1);
            g.mod("energy", -200);
            g.mod("d", 100);
            char.settime(17, 48);
            char.room(0);
            break;
        default:
            if (callback.length > 3) {
                if (callback.substring(0, 3) === "sit")
                    nav.bg("212_black/" + callback + ".jpg");
                else if (callback.substring(0, 3) === "tie")
                    nav.bg("212_black/" + callback + ".jpg");
                else if (callback.substring(0, 3) === "hor")
                    nav.bg("212_black/" + callback + ".jpg");
                else if (callback.substring(0, 3) === "fin")
                    nav.bg("212_black/" + callback + ".jpg");
            }
            break;
    }
};

room212.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "black",
            text: "So, you have chosen to enter the black room. Is is pain you seek, or release from their sins?",
            button: [
                { chatID: 3, text: "I seek pain. ", callback: "" },
                { chatID: 1, text: "I seek release. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "black",
            text: "Normally people who come here seeking pain do it becuase they've done something terrible in their life. " +
                "Some they wish to attone for, but don't know know how. Have you sinned in a way you wish to attone for?",
            button: [
                { chatID: 2, text: "Yes, tell her your sins. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "black",
            text: "I see. You are a naughty one. We shall find a release together. Let us start the first lesson. ",
            button: [
                { chatID: 3, text: "ok. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "black",
            text: "I do love a masochist. We will seek an altered state of consciousness together. Let us start " +
                "with the first lesson. ",
            button: [
                { chatID: 4, text: "ok. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "black",
            text: "You will be in the nude for every visit. Slaves don't deserve clothing. Now strip it all off. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "chastityCheck" }
            ]
        },
        {
            chatID: 5,
            speaker: "black",
            text: "Chastity device too. I own and control every inch of your body. My whip will be your chastity cage. ",
            button: [
                { chatID: 6, text: "[Remove your cage]", callback: "chastityCheck0" }
            ]
        },
        {
            chatID: 6,
            speaker: "black",
            text: "Your next lesson how to properly pose yourself to me. When you enter after you remove your clothing you "
                + "kneel with your hands behind your head and await me command. Now kneel slave. ",
            button: [
                { chatID: 18, text: "...", callback: "kneespose" }
            ]
        },
        {
            chatID: 7,
            speaker: "black",
            text: "I will teach you how to channel that pain and make your body stronger to defend itself from those " +
                "that seek to harm you. I also do this becuase I love to make sissies whimper. The look on your weak " +
                "sissy faces I find so delicious. Now open your mouth slut! ",
            button: [
                { chatID: 8, text: "...", callback: "mouth0" }
            ]
        },
        {
            chatID: 8,
            speaker: "black",
            text: "I know it's difficult to breath with my hand down your throat, but you need to hold it. ",
            button: [
                { chatID: 9, text: "Gugh", callback: "mouth1" }
            ]
        },
        {
            chatID: 9,
            speaker: "black",
            text: "Keep holding it slave. ",
            button: [
                { chatID: 10, text: "...", callback: "mouth2" }
            ]
        },
        {
            chatID: 10,
            speaker: "black",
            text: "Good slave. Just let yourself go. I know what your limits are. ",
            button: [
                { chatID: 11, text: "...", callback: "mouth3" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "oooOOoooo ",
            button: [
                { chatID: 12, text: "...", callback: "mouth4" }
            ]
        },
        {
            chatID: 12,
            speaker: "black",
            text: "That's a good slave. You'll learn I know exactly how far I can take you before I break you. " +
                "And I'll decide if and when I do break you. Now stand up. On your feet so I can bind your hands " +
                "and we'll move to the next lesson. ",
            button: [
                { chatID: 13, text: "...", callback: "ball0" }
            ]
        },
        {
            chatID: 13,
            speaker: "black",
            text: "Not only does you mouth belong to me, so does your balls. These are mine to play with. ",
            button: [
                { chatID: 14, text: "...", callback: "ball1" }
            ]
        },
        {
            chatID: 14,
            speaker: "black",
            text: "And I like to play rough with my toys. ",
            button: [
                { chatID: 15, text: "...", callback: "ball2" }
            ]
        },
        {
            chatID: 15,
            speaker: "black",
            text: "And sometimes I break my toys. ",
            button: [
                { chatID: 16, text: "...", callback: "ball3" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "....",
            button: [
                { chatID: 17, text: "...", callback: "ball4" }
            ]
        },
        {
            chatID: 17,
            speaker: "black",
            text: "That's it for today. Come back again to contiue your pain. ",
            button: [
                { chatID: -1, text: "...", callback: "end0" }
            ]
        },
        {
            chatID: 18,
            speaker: "black",
            text: "So you may ask youself why we offer our time to give you pain. When you go up against the cult " +
                "cult you will find that you must endure pain beyond your imagination. Pain you have never felt before. " +
                "We must train you to endure that pain and through your pain you will gain strength. You'll find their " +
                "punches and kicks don't hurt as much and take away less energy. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "black",
            text: "Now that we've made our introductions you'll be able to choose your pain. It's always more fun " +
                "to inflict on someone that has chosen their pain. ",
            button: [
                { chatID: 20, text: "So I get to choose? ", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "black",
            text: "Now slave stip and get into position. ",
            button: [
                { chatID: 21, text: "[Stip and kneel]", callback: "stripandkneel" }
            ]
        },
        {
            chatID: 21,
            speaker: "black",
            text: "So which pain will you receive today?",
            button: [
                { chatID: 78, text: "Testicle Crunch", callback: "ball0" },
                { chatID: 83, text: "Fingers in your throat", callback: "mouth0" },
                { chatID: 23, text: "Ass eating", callback: "sit0" },
                { chatID: 22, text: "More", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "black",
            text: "So which pain will you receive today?",
            button: [
                { chatID: 41, text: "Inverted tie up", callback: "tie0" },
                { chatID: 63, text: "Ride a horse", callback: "hor1" },
                { chatID: 78, text: "The greatest gift.", callback: "fin1" },
                { chatID: 19, text: "Back", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "black",
            text: "So a treat is what you want? Lay down on my bench so I can sit on your face. ",
            button: [
                { chatID: 24, text: "yes", callback: "sit2" }
            ]
        },
        {
            chatID: 24,
            speaker: "black",
            text: "Just bury you nose in there. It smells lovely doesn't it? Don't forget to lick the balls. ",
            button: [
                { chatID: 25, text: "HHhmm mmMMm hhhHmmMM", callback: "sit10" }
            ]
        },
        {
            chatID: 25,
            speaker: "black",
            text: "I can see that you're enjoying this......",
            button: [
                { chatID: 26, text: "HHHmmmmm", callback: "sit31" }
            ]
        },
        {
            chatID: 26,
            speaker: "black",
            text: ".... is PAIN!",
            button: [
                { chatID: 27, text: "AAAAAaaaAAAaaaaa", callback: "sit21" }
            ]
        },
        {
            chatID: 27,
            speaker: "black",
            text: "Awwww did your boner go away. We'll have to get that back up. ",
            button: [
                { chatID: 28, text: ".....", callback: "sit1" }
            ]
        },
        {
            chatID: 28,
            speaker: "black",
            text: "Keep licking my asshole slave. Get deep in there with your slutty mouth. ",
            button: [
                { chatID: 29, text: "MMmmmmmm", callback: "sit11" }
            ]
        },
        {
            chatID: 29,
            speaker: "black",
            text: "Why hello there. Welcome back...",
            button: [
                { chatID: 30, text: "*slurp* *lick*", callback: "sit32" }
            ]
        },
        {
            chatID: 30,
            speaker: "black",
            text: "to PAIN!",
            button: [
                { chatID: 31, text: "AAAAAAAaaaaa", callback: "sit3" }
            ]
        },
        {
            chatID: 31,
            speaker: "black",
            text: "Can you smell my excitement? Does my ass taste sweeter slut? ",
            button: [
                { chatID: 32, text: "YYYYyyymmmm", callback: "sit12" }
            ]
        },
        {
            chatID: 32,
            speaker: "black",
            text: "My my my, you do love that don't you? There's too many marks on that side of your penis. I'll " +
                "hole the whip with my other hand...",
            button: [
                { chatID: 33, text: "MMmmmmaaaaa", callback: "sit33" }
            ]
        },
        {
            chatID: 33,
            speaker: "black",
            text: "To balance the PAIN! ",
            button: [
                { chatID: 34, text: "OOOOooooooo", callback: "sit23" }
            ]
        },
        {
            chatID: 34,
            speaker: "black",
            text: "Awww it's sad again. I won't whip it anymore. You have to push through the pain. Get back to my " +
                "horny asshole slave.  ",
            button: [
                { chatID: 35, text: "MMmmmmmmm", callback: "sit1" }
            ]
        },
        {
            chatID: 35,
            speaker: "black",
            text: "Get deep in there. My sweet ass is so horny watching you twitch. Keep going I think I'm going to...",
            button: [
                { chatID: 36, text: "*lick* *lick* *slurp* ", callback: "sit34" }
            ]
        },
        {
            chatID: 36,
            speaker: "black",
            text: "give you PAIN! ",
            button: [
                { chatID: 37, text: "*lick* *lick* *slurp* ", callback: "sit24" }
            ]
        },
        {
            chatID: 37,
            speaker: "black",
            text: "awww so sad. If you want to give me an orgasm you'll have to try harder. ",
            button: [
                { chatID: 38, text: "mmMMmmmmmmmm oooooo", callback: "sit3" }
            ]
        },
        {
            chatID: 38,
            speaker: "black",
            text: "OOOOO ooooo I'm really getting close. Go faster! ",
            button: [
                { chatID: 40, text: "*lick* *lick* *slurp* ", callback: "sit14" }
            ]
        },
        {
            chatID: 39,
            speaker: "black",
            text: "noop",
            button: [
                { chatID: 39, text: "*lick* *lick* *slurp* ", callback: "sit14" }
            ]
        },
        {
            chatID: 40,
            speaker: "black",
            text: "I'm just kidding you aren't worth an orgasm. I just wanted to look at my work. Next time you " +
                "play with that you'll be reminded of me. Now take your bloody dick and go. ",
            button: [
                { chatID: -1, text: "*whimper and get dressed* ", callback: "end" }
            ]
        },
        {
            chatID: 41,
            speaker: "black",
            text: "Nice and tight. I like my slaves tied up like this. Gives me easy access to everything I need. " +
                "First I need to prep you for the fun part.",
            button: [
                { chatID: 42, text: "Prep?", callback: "tie1" }
            ]
        },
        {
            chatID: 42,
            speaker: "black",
            text: "Oh yes! Some nice Ice 'n Heat so you can feel that burn. I mixed in a bit of ghost pepper " +
                "so the burn is really real. The heat has been known to make my slave's buttholes smoke with all " +
                "the heat it puts out. ",
            button: [
                { chatID: 43, text: "OOOooo ouch. fuck, it burns", callback: "tie2" }
            ]
        },
        {
            chatID: 43,
            speaker: "black",
            text: "Meet Big Bertha. I've never had a slave take the entire thing, but many have borken themselves trying." +
                "The question is not if you're going to break, but how bad.",
            button: [
                { chatID: 44, text: "huh?", callback: "tie3" }
            ]
        },
        {
            chatID: 44,
            speaker: "black",
            text: "Now lets push this anal fat stretcher in your ass!",
            button: [
                { chatID: -1, text: "Ugh", callback: "xtie4" }
            ]
        },
        {
            chatID: 45,
            speaker: "black",
            text: "Well.... ummm.... This hasn't happened to me before. Your butthole is too tight for my toy to even " +
                "begin. It's magic happens only once I get the first part in. You have the asshole of an " +
                "emotionally unstable nun. Go work on stretching it out, I'm not your maid. Don't come back to play until " +
                "it's a bit more stretchy.",
            button: [
                { chatID: -1, text: "Oh. ok. ", callback: "endbad" }
            ]
        },
        {
            chatID: 46,
            speaker: "black",
            text: "Very good. We have a good start going. Let's see if we can go further. ",
            button: [
                { chatID: -1, text: "*groan*", callback: "xtie5" }
            ]
        },
        {
            chatID: 47,
            speaker: "black",
            text: "That's as far in as that's going to go! Can you feel the burn and stretch? ",
            button: [
                { chatID: 48, text: "uuuuUUHHH yeah!", callback: "tie4smack" }
            ]
        },
        {
            chatID: 48,
            speaker: "black",
            text: "!",
            button: [
                { chatID: 49, text: "uuuuUUHHH yeah!", callback: "tie4red" }
            ]
        },
        {
            chatID: 49,
            speaker: "black",
            text: "A little gift for you to take home with you. Now go! And stretch that slutty fuck hole. ",
            button: [
                { chatID: -1, text: "Ok.", callback: "xtieEnd" }
            ]
        },
        {
            chatID: 50,
            speaker: "black",
            text: "You've been playing with your slut hole haven't you? Lets see if we can go deeper...",
            button: [
                { chatID: -1, text: "Ooooo", callback: "xtie6" }
            ]
        },
        {
            chatID: 51,
            speaker: "black",
            text: "I guess this is as deep as it goes.. for now. I gues you deserve 2 rewards. ",
            button: [
                { chatID: 52, text: "Huh?", callback: "tie5smack" }
            ]
        },
        {
            chatID: 52,
            speaker: "black",
            text: "One",
            button: [
                { chatID: 53, text: "OOOoowwww", callback: "tie5red" }
            ]
        },
        {
            chatID: 53,
            speaker: "black",
            text: "and",
            button: [
                { chatID: 54, text: "...", callback: "tie5smack" }
            ]
        },
        {
            chatID: 54,
            speaker: "black",
            text: "Two",
            button: [
                { chatID: 55, text: "OOOoowwww", callback: "tie5red" }
            ]
        },
        {
            chatID: 55,
            speaker: "black",
            text: "You're welcome. Now go, and keep stretching that slut hole. ",
            button: [
                { chatID: -1, text: "ouch!", callback: "xtieEnd" }
            ]
        },
        {
            chatID: 56,
            speaker: "black",
            text: "My my my, you are a fucking hole aren't you. Your reward is 3 smacks you lucky hole. ",
            button: [
                { chatID: 57, text: "ouch!", callback: "tie6smack" }
            ]
        },
        {
            chatID: 57,
            speaker: "black",
            text: "One",
            button: [
                { chatID: 58, text: "ouch!", callback: "tie6red" }
            ]
        },
        {
            chatID: 58,
            speaker: "black",
            text: "and",
            button: [
                { chatID: 59, text: "mmMMm", callback: "tie6smack" }
            ]
        },
        {
            chatID: 59,
            speaker: "black",
            text: "Two",
            button: [
                { chatID: 60, text: "aaaaa", callback: "tie6red" }
            ]
        },
        {
            chatID: 60,
            speaker: "black",
            text: "and",
            button: [
                { chatID: 61, text: "....", callback: "tie6smack" }
            ]
        },
        {
            chatID: 61,
            speaker: "black",
            text: "Three",
            button: [
                { chatID: 62, text: "fuck!", callback: "tie6red" }
            ]
        },
        {
            chatID: 62,
            speaker: "black",
            text: "You're a good hole. Now get out there and defeat the cult. ",
            button: [
                { chatID: -1, text: "...", callback: "xtieEnd" }
            ]
        },
        {
            chatID: 63,
            speaker: "black",
            text: "This is my horse cowgirl. I love it's simplicity. Just a box with a roof, but the pain is something " +
                "else. It doesn't start at first, but grows with time. Hop on so I can tie you up properly. ",
            button: [
                { chatID: 64, text: "...", callback: "hor2" }
            ]
        },
        {
            chatID: 64,
            speaker: "black",
            text: "I know it's hard now, but wait. It gets so much better...",
            button: [
                { chatID: 65, text: "...", callback: "hor2" }
            ]
        },
        {
            chatID: 65,
            speaker: "black",
            text: "...",
            button: [
                { chatID: 66, text: "gggggg....gg...", callback: "hor3" }
            ]
        },
        {
            chatID: 66,
            speaker: "black",
            text: "So how are you doing slave?",
            button: [
                { chatID: 67, text: "....", callback: "" }
            ]
        },
        {
            chatID: 67,
            speaker: "black",
            text: "It's been quite some time. You're doing so well. You seem to have slipped off. Speak if you're still " +
                "with me. ",
            button: [
                { chatID: 68, text: "....", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "black",
            text: "Perfect. I have a little suprise for you. Just hold that there. ",
            button: [
                { chatID: 69, text: "....", callback: "hor4" }
            ]
        },
        {
            chatID: 69,
            speaker: "black",
            text: "One",
            button: [
                { chatID: 70, text: "AAAKKKKK", callback: "hor5" }
            ]
        },
        {
            chatID: 70,
            speaker: "black",
            text: "Welcome back",
            button: [
                { chatID: 71, text: "aammmamm", callback: "hor4a" }
            ]
        },
        {
            chatID: 71,
            speaker: "black",
            text: "Two",
            button: [
                { chatID: 72, text: "GGGGGgggg", callback: "hor5" }
            ]
        },
        {
            chatID: 72,
            speaker: "black",
            text: "the PAIN!",
            button: [
                { chatID: 73, text: "mummmm", callback: "hor4a" }
            ]
        },
        {
            chatID: 73,
            speaker: "black",
            text: "Three",
            button: [
                { chatID: 74, text: "AAOOOAOAO", callback: "hor5" }
            ]
        },
        {
            chatID: 74,
            speaker: "black",
            text: "You're welcome. My gift to you is more pain to give you strength. Now run along. ",
            button: [
                { chatID: -1, text: "....mmmmm", callback: "xhorend" }
            ]
        },
        {
            chatID: 75,
            speaker: "black",
            text: "You have visited many times and shall be rewarded with the greatest gift of pain. The " +
                "gift of shared pain. ",
            button: [
                { chatID: 76, text: "?", callback: "fin2" }
            ]
        },
        {
            chatID: 76,
            speaker: "black",
            text: sc.n("cecilia") + " here continues to be a naughty slut. Not a day goes by where she doesn't " +
                "break the rules of the house and I've been charged with the punishment. We shall have fun with this. " +
                "This won't be quick or fast. You will both relish in your pain. ",
            button: [
                { chatID: 77, text: "oh no", callback: "fin3" }
            ]
        },
        {
            chatID: 77,
            speaker: "black",
            text: "This is called a sounding rod. It's a bit bigger than a beginners rod. You will feel these delicious " +
                "ridges travel down your urethra. It's double sided so you can both feel the pain of it traveling in " +
                "and out together. ",
            button: [
                { chatID: 78, text: "!", callback: "fin4" }
            ]
        },
        {
            chatID: 78,
            speaker: "black",
            text: "Do you like the way I hold your testicles slut? Playing with them in my hand. Feels good doesn't it. ",
            button: [
                { chatID: 79, text: "OOoo yeah", callback: "ball1" }
            ]
        },
        {
            chatID: 79,
            speaker: "black",
            text: "Now as I start to squeeze them you can really feel the pressure build. The pain spreads over your balls " +
                "and into your guts.",
            button: [
                { chatID: 80, text: "UUUgh", callback: "ball2" }
            ]
        },
        {
            chatID: 80,
            speaker: "me",
            text: "AAAAAaaaaaaaa!!!!!",
            button: [
                { chatID: 81, text: "...", callback: "ball3" }
            ]
        },
        {
            chatID: 81,
            speaker: "black",
            text: "Get up bitch.. ",
            button: [
                { chatID: 82, text: "...", callback: "ball3x" }
            ]
        },
        {
            chatID: 82,
            speaker: "black",
            text: "You're welcome. Put some ice on those balls and come back when you're ready. ",
            button: [
                { chatID: -1, text: "ok", callback: "end" }
            ]
        },
        {
            chatID: 83,
            speaker: "black",
            text: "Can you taste the latex on my fingers as they tickle the back of your throat? ",
            button: [
                { chatID: 84, text: "HHhhfffFFmmmmm", callback: "mouth1" }
            ]
        },
        {
            chatID: 84,
            speaker: "black",
            text: "Hard to breathe with my hand so deep isn't it. Can you feel your body start to go limp. ",
            button: [
                { chatID: 85, text: "HHmmmmmm....", callback: "mouth2" }
            ]
        },
        {
            chatID: 85,
            speaker: "black",
            text: "You lungs start to hurt as you feel the life start to flow out of you. Your body is getting heavy as " +
                "you let go. My voice is echoing in your head...",
            button: [
                { chatID: 86, text: "....", callback: "mouth3" }
            ]
        },
        {
            chatID: 86,
            speaker: "black",
            text: "That's good. Breathe your life back into your body. ",
            button: [
                { chatID: 87, text: "....", callback: "mouth4" }
            ]
        },
        {
            chatID: 87,
            speaker: "black",
            text: "Good slut. Now stop drooling on my floor and get out. ",
            button: [
                { chatID: -1, text: "ok", callback: "end" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};