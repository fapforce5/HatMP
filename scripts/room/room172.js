//Room name
var room172 = {};
room172.main = function () {
    g.pass = cl.c.chastity;
    var btnList = [
        {
            "type": "btn",
            "name": "black",
            "left": 785,
            "top": 57,
            "width": 602,
            "height": 1023,
            "image": "172_punishblack/black.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 172);
    });
};

room172.btnclick = function (name) {
    switch (name) {
        case "black":
            if (sc.getMission("black", "punish").notStarted) {
                sc.startMission("black", "punish");
                sc.completeMissionTask("black", "punish", 0);
                sc.show("black");
                chat(0, 172);
            }
            else {
                chat(57, 172);
            }
            break;
        case "itesticle":
            nav.killall();
            chat(5, 172);
            break;
        case "ithroat":
            nav.killall();
            chat(10, 172);
            break;
        case "iass":
            nav.killall();
            chat(15, 172);
            break;
        case "ibondage":
            g.internal = { anallevel: levels.get("anal").l };
            nav.killall();
            chat(33, 172);
            break;
        case "ihorse":
            nav.killall();
            chat(58, 172);
            break;
        default:
            break;
    }
};

room172.chatcatch = function (callback) {
    switch (callback) {
        case "goAgain":
            cl.c.chastity = null;
            cl.nude();
            room172.chatcatch("selection");
            return;
        case "selection":
            nav.killall();
            nav.bg("172_punishblack/b4.jpg");
            sc.select("itesticle", "172_punishblack/icon_testicle.png", 0);
            sc.select("ithroat", "172_punishblack/icon_throat.png", 1);
            sc.select("iass", "172_punishblack/icon_ass.png", 2);
            sc.select("ibondage", "172_punishblack/icon_bondage.png", 3);
            sc.select("ihorse", "172_punishblack/icon_horse.png", 4);
            break;
        case "b1":
        case "b2":
        case "b3":
        case "b4":
        case "ball0":
        case "ball1":
        case "ball2":
        case "black":
        case "mouth0":
        case "mouth1":
        case "mouth2":
        case "sit0":
        case "sit1":
        case "sit2":
        case "sit3":
        case "sit10":
        case "sit11":
        case "sit12":
        case "sit13":
        case "sit14":
        case "sit20":
        case "sit21":
        case "sit22":
        case "sit23":
        case "sit24":
        case "sit31":
        case "sit32":
        case "sit33":
        case "sit34":
        case "tie0":
        case "tie1":
        case "tie2":
        case "tie3":
        case "tie4":
        case "tie4max":
        case "tie4red":
        case "tie4smack":
        case "tie5":
        case "tie5max":
        case "tie5red":
        case "tie5reg":
        case "tie5smack": 
        case "tie6":
        case "tie6red":
        case "tie6smack":
        case "hor1":
        case "hor2":
        case "hor3":
        case "hor4":
        case "hor4a":
        case "hor5":
            nav.bg("172_punishblack/" + callback + ".jpg");
            break;
        case "b0":
            cl.c.chastity = null;
            cl.nude();
            nav.killall();
            nav.bg("172_punishblack/b0.jpg");
            break;
        case "ballsEnd":
            nav.bg("172_punishblack/black.jpg");
            gv.mod("energy", -9999);
            break;
        case "mouthEnd":
            nav.bg("172_punishblack/mouth3.jpg");
            levels.oral(7);
            gv.mod("energy", -9999);
            break;
        case "sitEnd":
            nav.bg("172_punishblack/sit14.jpg");
            gv.mod("energy", -9999);
            break;
        case "xtie4":
            if (g.internal.anallevel < 2) {
                chat(38, 172);
            }
            else {
                if (g.internal.anallevel < 4)
                    nav.bg("172_punishblack/tie4max.jpg");
                else
                    nav.bg("172_punishblack/tie4.jpg");
                chat(39, 172);
            }
            break;
        case "xtie5":
            if (g.internal.anallevel < 4) {
                chat(40, 172);
            }
            else {
                if (g.internal.anallevel < 7)
                    nav.bg("172_punishblack/tie5max.jpg");
                else
                    nav.bg("172_punishblack/tie5.jpg");
                chat(43, 172);
            }
            break;
        case "xtie6":
            if (cl.c.butthole < 7) {
                nav.bg("172_punishblack/tie5reg.jpg");
                chat(44, 172);
            }
            else {
                nav.bg("172_punishblack/tie6.jpg");
                chat(49, 172);
            }
            break;
        case "xtieEnd0":
            levels.anal(1);
            gv.mod("energy", -9999);
            room172.chatcatch("snuggle");
            return;
        case "xtieEnd1":
            levels.anal(3);
            gv.mod("energy", -9999);
            room172.chatcatch("snuggle");
            return;
        case "xtieEnd2":
            levels.anal(5);
            gv.mod("energy", -9999);
            room172.chatcatch("snuggle");
            return;
        case "xtieEnd3":
            levels.anal(6);
            gv.mod("energy", -9999);
            room172.chatcatch("snuggle");
            return;
        case "xhorend":
            gv.mod("energy", -9999);
            room172.chatcatch("snuggle");
            return;
        case "snuggle":
            nav.bg("172_punishblack/snuggle0.jpg");
            chat(71, 172);
            break;
        case "cuddles1":
            nav.bg("172_punishblack/cuddle.jpg");
            gv.mod("energy", 50);
            break;
        case "cock":
            nav.bg("172_punishblack/cock.jpg");
            levels.anal(4, true, "m", true);
            break;
        case "complete":
            levels.mod("xdress", 30, 999);
            levels.mod("sub", 45, 999);
            cl.c.chastity = g.pass;
            cl.display();
            char.addtime(238);
            char.room(201);
            break;
        default:
            break;
    }
};

room172.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "black",
            text: "Welcome to my private lessons in the Black room. Strip off those clothes. " +
                "A slave is not permitted dignity in the Black room. I'm going to take off " +
                "your chasity device, because you're " +
                "whole body is mine and only mine during the time you are here. ",
            button: [
                { chatID: 1, text: "Yes ma'am", callback: "b0" }
            ]
        },
        {
            chatID: 1,
            speaker: "black",
            text: "So.... Just a sec...",
            button: [
                { chatID: 56, text: "...", callback: "b1" }
            ]
        },
        {
            chatID: 2,
            speaker: "black",
            text: "You're my good little maggot. I'll let you play in the dirt " +
                "to use the potty and play once I'm done here. " + 
                "Just relax and enjoy the show. ",
            button: [
                { chatID: 3, text: "...", callback: "b3" }
            ]
        },
        {
            chatID: 3,
            speaker: "black",
            text: "Now slave, the first step is to get in the ready position. That is on " +
                "you knees with your hands behind your back facing me. This is to show " +
                "you know and accept you are beneath me and are here to serve. Now kneel " +
                "my little slave. ",
            button: [
                { chatID: 4, text: "[kneel]", callback: "b4" }
            ]
        },
        {
            chatID: 4,
            speaker: "black",
            text: "Now many mistresses just punish their prey. I don't like that. It makes " +
                "the slave just a passive passenger on their journey of pain. I'm going to " +
                "give you some choices on how to be punished, and let you choose among them, " +
                "so when your feeling that pain, you know you're the one who chose it. Now " +
                "what pain would you like to feel today? ",
            button: [
                { chatID: -1, text: "...", callback: "selection" }
            ]
        },
        {
            chatID: 5,
            speaker: "black",
            text: "Oh yummy. I do love playing with the sensative testicles of a sissy. " +
                "stand up so I can tie your hands behind your back so you can't deny me " +
                "the pleasure of your pain. ",
            button: [
                { chatID: 6, text: "...", callback: "ball0" }
            ]
        },
        {
            chatID: 6,
            speaker: "black",
            text: "Do you like the way I hold your testicles slut? Playing with them in my hand. Feels good doesn't it. ",
            button: [
                { chatID: 7, text: "Oooo yeah", callback: "ball1" }
            ]
        },
        {
            chatID: 7,
            speaker: "black",
            text: "Now as I start to squeeze them you can really feel the pressure build. The pain spreads over your balls and into your guts.",
            button: [
                { chatID: 8, text: "UUuuugghhhh", callback: "ball2" }
            ]
        },
        {
            chatID: 8,
            speaker: "black",
            text: "Let it out! Scream out the pain of your balls breaking in my hand! ",
            button: [
                { chatID: 9, text: "AAAAAaaaaaaaa!!!!!", callback: "ballsEnd" }
            ]
        },
        {
            chatID: 9,
            speaker: "black",
            text: "Get up bitch.",
            button: [
                { chatID: -1, text: "...", callback: "snuggle" }
            ]
        },
        {
            chatID: 10,
            speaker: "black",
            text: "When I'm done you'll be able to swollow a watermelon. Open up bitch. ",
            button: [
                { chatID: 11, text: "Aaaaa", callback: "mouth0" }
            ]
        },
        {
            chatID: 11,
            speaker: "black",
            text: "Can you taste the latex on my fingers as they tickle the back of your throat?",
            button: [
                { chatID: 12, text: "HHhhfffFFmmmmm", callback: "mouth1" }
            ]
        },
        {
            chatID: 12,
            speaker: "black",
            text: "Hard to breathe with my hand so deep isn't it. Can you feel your body start to go limp. ",
            button: [
                { chatID: 13, text: "HHmmmmmm....", callback: "mouth2" }
            ]
        },
        {
            chatID: 13,
            speaker: "black",
            text: "You lungs start to hurt as you feel the life start to flow out of you. Your body is getting heavy as you let go. My voice is echoing in your head...",
            button: [
                { chatID: 14, text: "...", callback: "mouthEnd" }
            ]
        },
        {
            chatID: 14,
            speaker: "black",
            text: "That's good. Breathe your life back into your body and Now stop drooling on my floor.",
            button: [
                { chatID: -1, text: "...", callback: "snuggle" }
            ]
        },
        {
            chatID: 15,
            speaker: "black",
            text: "So does my poor naive think they deserve a treat? ",
            button: [
                { chatID: 16, text: "uh huh!", callback: "sit0" }
            ]
        },
        {
            chatID: 16,
            speaker: "black",
            text: "So a treat is what you want? Lay down on my bench so I can sit on your face. ",
            button: [
                { chatID: 17, text: "yes", callback: "sit2" }
            ]
        },
        {
            chatID: 17,
            speaker: "black",
            text: "Just bury you nose in there. It smells lovely doesn't it? Don't forget to lick the balls. ",
            button: [
                { chatID: 18, text: "HHhmm mmMMm hhhHmmMM", callback: "sit10" }
            ]
        },
        {
            chatID: 18,
            speaker: "black",
            text: "I can see that you're enjoying this......",
            button: [
                { chatID: 19, text: "HHHmmmmm", callback: "sit31" }
            ]
        },
        {
            chatID: 19,
            speaker: "black",
            text: ".... PAIN!",
            button: [
                { chatID: 20, text: "AAAAAaaaAAAaaaaa", callback: "sit21" }
            ]
        },
        {
            chatID: 20,
            speaker: "black",
            text: "Awwww did your boner go away. We'll have to get that back up. ",
            button: [
                { chatID: 21, text: ".....", callback: "sit1" }
            ]
        },
        {
            chatID: 21,
            speaker: "black",
            text: "Keep licking my asshole slave. Get deep in there with your slutty mouth. ",
            button: [
                { chatID: 22, text: "MMmmmmmm", callback: "sit11" }
            ]
        },
        {
            chatID: 22,
            speaker: "black",
            text: "Why hello there. Welcome back...",
            button: [
                { chatID: 23, text: "*slurp* *lick*", callback: "sit32" }
            ]
        },
        {
            chatID: 23,
            speaker: "black",
            text: "to PAIN!",
            button: [
                { chatID: 24, text: "AAAAAAAaaaaa", callback: "sit3" }
            ]
        },
        {
            chatID: 24,
            speaker: "black",
            text: "Can you smell my excitement? Does my ass taste sweeter slut? ",
            button: [
                { chatID: 25, text: "*whimper* YYYYyyymmmm", callback: "sit12" }
            ]
        },
        {
            chatID: 25,
            speaker: "black",
            text: "My my my, you do love that don't you? There's too many marks on that side of your penis. I'll " +
                "hole the whip with my other hand...",
            button: [
                { chatID: 26, text: "MMmmmmaaaaa", callback: "sit33" }
            ]
        },
        {
            chatID: 26,
            speaker: "black",
            text: "To balance the PAIN! ",
            button: [
                { chatID: 27, text: "OOOOooooooo", callback: "sit23" }
            ]
        },
        {
            chatID: 27,
            speaker: "black",
            text: "Awww it's sad again. I won't whip it anymore. You have to push through the pain. Get back to my " +
                "horny asshole slave.  ",
            button: [
                { chatID: 28, text: "MMmmmmmmm *sniffle* *cry* ", callback: "sit1" }
            ]
        },
        {
            chatID: 28,
            speaker: "black",
            text: "Get deep in there. My sweet ass is so horny watching you twitch. Keep going I think I'm going to...",
            button: [
                { chatID: 29, text: "*lick* *cry* *lick* *sob* ", callback: "sit34" }
            ]
        },
        {
            chatID: 29,
            speaker: "black",
            text: "give you PAIN! ",
            button: [
                { chatID: 30, text: "AAAKAKKKAKAKAKAKAKA *bawl* ", callback: "sit24" }
            ]
        },
        {
            chatID: 30,
            speaker: "black",
            text: "awww so sad. If you want to give me an orgasm you'll have to try harder. ",
            button: [
                { chatID: 31, text: "*cry* *whimper* *lick*", callback: "sit3" }
            ]
        },
        {
            chatID: 31,
            speaker: "black",
            text: "OOOOO ooooo I'm really getting close. Go faster! ",
            button: [
                { chatID: 32, text: "*lick* *whimper* *lick* *slurp* *sob*", callback: "sitEnd" }
            ]
        },
        {
            chatID: 32,
            speaker: "black",
            text: "Hahaha. I'm not going to orgasm. You're not worth the effort.  " +
                "My my my, we really did punish that terrible clitty of yours. ",
            button: [
                { chatID: -1, text: "*softly crying*", callback: "snuggle" }
            ]
        },
        {
            chatID: 33,
            speaker: "black",
            text: "I do like a bound up sissy. So much fun to play with. ",
            button: [
                { chatID: 34, text: "...", callback: "tie0" }
            ]
        },
        {
            chatID: 34,
            speaker: "black",
            text: "Nice and tight. I like my slaves tied up like this. Gives me easy access to everything I need. " +
                "First I need to prep you for the fun part.",
            button: [
                { chatID: 35, text: "Prep?", callback: "tie1" }
            ]
        },
        {
            chatID: 35,
            speaker: "black",
            text: "Oh yes! Some nice Ice 'n Heat so you can feel that burn. I mixed in a bit of ghost pepper " +
                "so the burn is really real. The heat has been known to make my slave's buttholes smoke with all " +
                "the heat it puts out. ",
            button: [
                { chatID: 36, text: "OOOooo ouch. fuck, it burns", callback: "tie2" }
            ]
        },
        {
            chatID: 36,
            speaker: "black",
            text: "Meet Big Bertha. I've never had a slave take the entire thing, but many have borken themselves trying." +
                "The question is not if you're going to break, but how bad.",
            button: [
                { chatID: 37, text: "huh?", callback: "tie3" }
            ]
        },
        {
            chatID: 37,
            speaker: "black",
            text: "Now lets push this anal fat stretcher in your ass!",
            button: [
                { chatID: -1, text: "Ugh", callback: "xtie4" }
            ]
        },
        {
            chatID: 38,
            speaker: "black",
            text: "Well.... ummm.... This hasn't happened to me before. Your butthole is too tight for my toy to even " +
                "begin. It's magic happens only once I get the first part in. You have the asshole of an " +
                "emotionally unstable nun. Go work on stretching it out, I'm not your maid. Don't come back to play until " +
                "it's a bit more stretchy.",
            button: [
                { chatID: -1, text: "Oh. ok. ", callback: "xtieEnd0" }
            ]
        },
        {
            chatID: 39,
            speaker: "black",
            text: "Very good. We have a good start going. Let's see if we can go further. ",
            button: [
                { chatID: -1, text: "*groan*", callback: "xtie5" }
            ]
        },
        {
            chatID: 40,
            speaker: "black",
            text: "That's as far in as that's going to go! Can you feel the burn and stretch? ",
            button: [
                { chatID: 41, text: "uuuuUUHHH yeah!", callback: "tie4smack" }
            ]
        },
        {
            chatID: 41,
            speaker: "black",
            text: "!",
            button: [
                { chatID: 42, text: "uuuuUUHHH yeah!", callback: "tie4red" }
            ]
        },
        {
            chatID: 42,
            speaker: "black",
            text: "A little gift for you to take home with you. Now go! And stretch that slutty fuck hole. ",
            button: [
                { chatID: -1, text: "Ok.", callback: "xtieEnd1" }
            ]
        },
        {
            chatID: 43,
            speaker: "black",
            text: "You've been playing with your slut hole haven't you? Lets see if we can go deeper...",
            button: [
                { chatID: -1, text: "Ooooo", callback: "xtie6" }
            ]
        },
        {
            chatID: 44,
            speaker: "black",
            text: "I guess this is as deep as it goes.. for now. I gues you deserve 2 rewards. ",
            button: [
                { chatID: 45, text: "Huh?", callback: "tie5smack" }
            ]
        },
        {
            chatID: 45,
            speaker: "black",
            text: "One",
            button: [
                { chatID: 46, text: "OOOoowwww", callback: "tie5red" }
            ]
        },
        {
            chatID: 46,
            speaker: "black",
            text: "and",
            button: [
                { chatID: 47, text: "...", callback: "tie5smack" }
            ]
        },
        {
            chatID: 47,
            speaker: "black",
            text: "Two",
            button: [
                { chatID: 48, text: "OOOoowwww", callback: "tie5red" }
            ]
        },
        {
            chatID: 48,
            speaker: "black",
            text: "You're welcome. Now go, and keep stretching that slut hole. ",
            button: [
                { chatID: -1, text: "ouch!", callback: "xtieEnd2" }
            ]
        },
        {
            chatID: 49,
            speaker: "black",
            text: "My my my, you are a fucking hole aren't you. Your reward is 3 smacks you lucky hole. ",
            button: [
                { chatID: 50, text: "ouch!", callback: "tie6smack" }
            ]
        },
        {
            chatID: 50,
            speaker: "black",
            text: "One",
            button: [
                { chatID: 51, text: "ouch!", callback: "tie6red" }
            ]
        },
        {
            chatID: 51,
            speaker: "black",
            text: "and",
            button: [
                { chatID: 52, text: "mmMMm", callback: "tie6smack" }
            ]
        },
        {
            chatID: 52,
            speaker: "black",
            text: "Two",
            button: [
                { chatID: 53, text: "aaaaa", callback: "tie6red" }
            ]
        },
        {
            chatID: 53,
            speaker: "black",
            text: "and",
            button: [
                { chatID: 54, text: "....", callback: "tie6smack" }
            ]
        },
        {
            chatID: 54,
            speaker: "black",
            text: "Three",
            button: [
                { chatID: 55, text: "fuck!", callback: "tie6red" }
            ]
        },
        {
            chatID: 55,
            speaker: "black",
            text: "You're a good hole. Now get out there and defeat the cult. ",
            button: [
                { chatID: -1, text: "...", callback: "xtieEnd3" }
            ]
        },
        {
            chatID: 56,
            speaker: "black",
            text: "Good maggots are quiet when guests are over. One more word from you and " +
                "you'll be wearing the spike suit in your cage for a week. You wouldn't " +
                "want that would you? Now whimper so I know you understand. ",
            button: [
                { chatID: 2, text: "...", callback: "b2" }
            ]
        },
        {
            chatID: 57,
            speaker: "black",
            text: "Strip it all and assume the position of servitude. ",
            button: [
                { chatID: -1, text: "...", callback: "goAgain" }
            ]
        },
        {
            chatID: 58,
            speaker: "black",
            text: "My favorite. Let me pull your ride out. ",
            button: [
                { chatID: 59, text: "...", callback: "hor1" }
            ]
        },
        {
            chatID: 59,
            speaker: "black",
            text: "This is my horse cowgirl. I love it's simplicity. Just a box with a roof, but the pain is something " +
                "else. It doesn't start at first, but grows with time. Hop on so I can tie you up properly. ",
            button: [
                { chatID: 60, text: "...", callback: "hor2" }
            ]
        },
        {
            chatID: 60,
            speaker: "black",
            text: "I know it's hard now, but wait. It gets so much better...",
            button: [
                { chatID: 61, text: "...", callback: "" }
            ]
        },
        {
            chatID: 61,
            speaker: "black",
            text: "...",
            button: [
                { chatID: 62, text: "gggggg....gg...", callback: "hor3" }
            ]
        },
        {
            chatID: 62,
            speaker: "black",
            text: "So how are you doing slave?",
            button: [
                { chatID: 63, text: "....", callback: "" }
            ]
        },
        {
            chatID: 63,
            speaker: "black",
            text: "It's been quite some time. You're doing so well. You seem to have slipped off. Speak if you're still " +
                "with me. ",
            button: [
                { chatID: 64, text: "....", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "black",
            text: "Perfect. I have a little surprise for you. Just hold that there. ",
            button: [
                { chatID: 65, text: "....", callback: "hor4" }
            ]
        },
        {
            chatID: 65,
            speaker: "black",
            text: "One",
            button: [
                { chatID: 66, text: "AAAKKKKK", callback: "hor5" }
            ]
        },
        {
            chatID: 66,
            speaker: "black",
            text: "Welcome back",
            button: [
                { chatID: 67, text: "aammmamm", callback: "hor4a" }
            ]
        },
        {
            chatID: 67,
            speaker: "black",
            text: "Two",
            button: [
                { chatID: 68, text: "GGGGGgggg", callback: "hor5" }
            ]
        },
        {
            chatID: 68,
            speaker: "black",
            text: "the PAIN!",
            button: [
                { chatID: 69, text: "mummmm", callback: "hor4a" }
            ]
        },
        {
            chatID: 69,
            speaker: "black",
            text: "Three",
            button: [
                { chatID: 70, text: "AAOOOAOAO", callback: "hor5" }
            ]
        },
        {
            chatID: 70,
            speaker: "black",
            text: "You're welcome. My gift to you is more pain to give you strength. Now run along. ",
            button: [
                { chatID: -1, text: "....mmmmm", callback: "xhorend" }
            ]
        },
        {
            chatID: 71,
            speaker: "black",
            text: "You've done well in your servitude. As a reward you can choose between " +
                "cuddles or cock. ",
            button: [
                { chatID: 72, text: "Cuddles", callback: "cuddles1" },
                { chatID: 73, text: "Cock", callback: "cock" },
            ]
        },
        {
            chatID: 72,
            speaker: "black",
            text: "You've done well my little one. ",
            button: [
                { chatID: -1, text: "awwww", callback: "complete" },
            ]
        },
        {
            chatID: 73,
            speaker: "black",
            text: "Take my cock you fuck hole and cum like the little girl you are! ",
            button: [
                { chatID: -1, text: "Ugh", callback: "complete" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};