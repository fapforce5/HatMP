//Room name
var room32 = {};
room32.main = function () {
    let sisRoomList = [13, 32];
    let lolaInRoom = sisRoomList.includes(sc.getTimeline("lola").roomID);
    let evaInRoom = sisRoomList.includes(sc.getTimeline("eva").roomID);
    if (sc.getMission("lola", "*wife").inProgress) {
        //nav.button({
        //    "type": "btn",
        //    "name": "lola",
        //    "left": 1449,
        //    "top": 260,
        //    "width": 215,
        //    "height": 820,
        //    "image": "32_bedroom/lola_preggers.webp"
        //}, 32);
        nav.button({
            "type": "btn",
            "name": "lola",
            "left": 760,
            "top": 295,
            "width": 291,
            "height": 785,
            "image": "32_bedroom/eva.webp"
        }, 32);
    }
    else if (sc.getMission("lola", "*tom2").inProgress) {

    }
    else {
        if (lolaInRoom || evaInRoom) {
            if (g.hourBetween(22, 25) || g.hourBetween(0, 6)) {

            }
            else {
                switch (gv.get("lolaSlutCounter") % 3) {
                    case 0:
                        nav.button({
                            "type": "btn",
                            "name": "lola_slut",
                            "left": 1493,
                            "top": 134,
                            "width": 278,
                            "height": 946,
                            "image": "32_bedroom/lola_slut.webp"
                        }, 32);
                        nav.button({
                            "type": "btn",
                            "name": "eva_slut",
                            "left": 970,
                            "top": 151,
                            "width": 278,
                            "height": 929,
                            "image": "32_bedroom/eva_slut.webp"
                        }, 32);

                        nav.button({
                            "type": "grab",
                            "name": "lola_tits",
                            "left": 1503,
                            "top": 469,
                            "width": 192,
                            "height": 104,
                            "image": "32_bedroom/lola_tits.webp"
                        }, 32);
                        nav.button({
                            "type": "grab",
                            "name": "lola_twat",
                            "left": 1541,
                            "top": 711,
                            "width": 101,
                            "height": 102,
                            "image": "32_bedroom/lola_twat.webp"
                        }, 32);

                        nav.button({
                            "type": "grab",
                            "name": "eva_tits",
                            "left": 1022,
                            "top": 474,
                            "width": 216,
                            "height": 106,
                            "image": "32_bedroom/eva_tits.webp"
                        }, 32);
                        nav.button({
                            "type": "grab",
                            "name": "eva_twat",
                            "left": 1079,
                            "top": 728,
                            "width": 102,
                            "height": 102,
                            "image": "32_bedroom/eva_twat.webp"
                        }, 32);
                        break;
                    case 1:
                        break;
                    case 2:
                        nav.button({
                            "type": "img",
                            "name": "puter",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "13_sisterRoom/slut0.webp"
                        }, 13);
                        chat(4, 32);
                        break;
                }
                gv.mod("lolaSlutCounter", 1);
            }
        }
        else {
            if (g.rand(0, 3) === 0 && !daily.get("jef13")) {
                daily.set("jef13");
                nav.button({
                    "type": "img",
                    "name": "puter",
                    "left": 990,
                    "top": 515,
                    "width": 314,
                    "height": 426,
                    "image": "13_sisterRoom/jeffery.webp"
                }, 13);
                chat(2, 32);
                return;
            }
        }
    }
    nav.buildnav([11]);
};

room32.btnclick = function (name) {
    switch (name) {
        case "lola":
            switch (sc.taskGetStep("lola", "*wife")) {
                case -1:
                case 0:
                    
                    chat(0, 32);
                    
                    break;
            }
            break;
        case "lola_slut":
            if (!daily.get("lola_slut")) {
                switch (sc.taskGetStep("lola", "*cumdump")) {
                    case 0:
                    case 1:
                        sc.completeMissionTask("lola", "*cumdump", 0);
                        sc.completeMissionTask("lola", "*cumdump", 1);
                        chat(15, 32);
                        break;
                    case 2:
                        sc.completeMissionTask("lola", "*cumdump", 2);
                        chat(19, 32);
                        break;
                    default:
                        sc.completeMissionTask("lola", "*cumdump", 3);
                        chat(25, 32);
                        break;
                }
            }
            else {
                if (cl.c.cock === 5)
                    chat(13, 32);
                else
                    chat(14, 32);
            }
            daily.set("lola_slut");
            break;
        case "eva_slut":
            if (!daily.get("eva_slut")) {
                switch (sc.taskGetStep("eva", "*cumdump")){
                    case 0:
                    case 1:
                        sc.completeMissionTask("eva", "*cumdump", 0);
                        sc.completeMissionTask("eva", "*cumdump", 1);
                        chat(8, 32);
                        break;
                    case 2:
                        sc.completeMissionTask("lola", "*cumdump", 2);
                        chat(22, 32);
                        break;
                }
            }
            else {
                chat(7, 32);
            }
            daily.set("eva_slut");
            break;
        case "lola_tits":
            nav.modbutton("lola_slut", "32_bedroom/lola_slut0.webp", null, null);
            nav.killbutton("lola_tits");
            nav.killbutton("lola_twat");
            chat(5, 32);
            break;
        case "eva_tits":
            nav.modbutton("eva_slut", "32_bedroom/eva_slut0.webp", null, null);
            nav.killbutton("eva_tits");
            nav.killbutton("eva_twat");
            chat(6, 32);
            break;
        case "lola_twat":
            nav.kill();
            nav.bg("32_bedroom/twatgrab_lola0.webp");
            nav.next("lola_twat1");
            break;
        case "eva_twat":
            nav.kill();
            nav.bg("32_bedroom/twatgrab_eva0.webp");
            nav.next("eva_twat1");
            break;
        case "lola_twat1":
            nav.kill();
            nav.bg("32_bedroom/twatgrab_lola1.webp");
            nav.next("grab_reset");
            levels.gavehandjob("f", "lola");
            char.addtime(20);
            break;
        case "eva_twat1":
            nav.kill();
            nav.bg("32_bedroom/twatgrab_eva1.webp");
            nav.next("grab_reset");
            levels.gavehandjob("f", "eva");
            char.addtime(20);
            break;
        case "grab_reset":
            gv.mod("lolaSlutCounter", -1);
            char.room(32);
            break;
        default:
            break;
    }
};

room32.chatcatch = function (callback) {
    switch (callback) {
        case "wife0":
            nav.kill();
            nav.button({
                "type": "btn",
                "name": "lola",
                "left": 717,
                "top": 0,
                "width": 892,
                "height": 1080,
                "image": "32_bedroom/wife0.webp"
            }, 32);
            break;
        case "reset":
            gv.mod("lolaSlutCounter", -1);
            char.room(32);
            break;
        case "leave":
            char.room(11);
            break;
        default:
            break;
    }
};

room32.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Soooo... You're pregnant? ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "lola",
            text: "You, you were gone for so long. I was afraid that you would never come back. ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "jeffery",
            text: "Oh yummy yummy! " + sc.n("lola") + " your panties are the best! So fragrent! So dirty! So " +
                "crusty! MMmmmMm ",
            button: [
                { chatID: 3, text: sc.n("jeffery") + "!!", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "jeffery",
            text: "I'm almost done. I just need to cum on these dirty panties! Need it! I promise to put them in " +
                "the drawer when I'm done! Go away! ",
            button: [
                { chatID: -1, text: "gross.  ", callback: "leave" },
            ]
        },
        {
            chatID: 4,
            speaker: "eva",
            text: "Hey slut! We found bigger perverts than you! You want to take a dick or 4 for us? ",
            button: [
                { chatID: -1, text: "Hell yeah! Let's get fucked!", callback: "slut1" },
                { chatID: -1, text: "Nope, just watching. ", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "lola",
            text: "Ouch! You made me squirt sperm out of my vagina! Just because I let anyone have sex with me " +
                "does't mean you get to just pinch my nipples!",
            button: [
                { chatID: -1, text: "oops. Sorry. hehe", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "eva",
            text: "Hey!!! That hurts! DON'T sqeeze my nipples pervert!",
            button: [
                { chatID: -1, text: "oops. Sorry. hehe", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "Don't think you get a freebie pervert! You can fuck " + sc.n("lola") + " if you need to dump your " +
                "cum somewhere. ",
            button: [
                { chatID: -1, text: "*sigh*", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "eva",
            text: "Hey butt brain. " + sc.n("lola") + " has taken almost as many cocks as you have! ",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "lola",
            text: "Hey now. I might have had a lot of sex, but there's no way I'm even close to " + sc.n("me") +
                ". I mean, no offense, but we've heard the rumors. Not that there's anything wrong with that. ",
            button: [
                { chatID: 10, text: "Thanks " + sc.n("lola") + ". ", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "eva",
            text: "You know, I don't mind getting fucked in the pussy all the time, but why, why does every boy " +
                "want their dick sucked first. It's so much work. And even worse is then I suck their dick and they " +
                "just shove it up my ass! Like, how do I get pleasure? My g-spot isn't up my ass, it's in my pussy! ",
            button: [
                { chatID: 11, text: "...", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "I don't mind the anal sex, I just wish they would stop trying to put their penis in my mouth after. " +
                "I mean really. That was just in my butt, why do you think I would now want it in my mouth. I tell them " +
                "they need to wash it really good if they want to do that and they usually stop trying to make me suck on " +
                "their penis. It's like they don't see me as a person, just three holes to to put their penis in. ",
            button: [
                { chatID: 12, text: "Well....", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "eva",
            text: "I had a guy who took it out of our " + sc.n("landlord") + "'s ass and just shoved it in my mouth! I mean, " +
                "it was clean, but he didn't know. Really how rude can you be. I will say, all this talk about taking " +
                "it up the ass is starting to make more horny. ",
            button: [
                { chatID: -1, text: "Hehe. Me too", callback: "reset" },
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "So, would you like me to lick on your vagina? ",
            button: [
                { chatID: -1, text: "Sure!", callback: "suckpenis" },
                { chatID: -1, text: "Some other time", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "lola",
            text: "So, would you like me to suck on your penis? ",
            button: [
                { chatID: -1, text: "Sure!", callback: "suckpenis" },
                { chatID: -1, text: "Some other time", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "We're so glad you're back. You have no idea how much we were worried about you. Even " + sc.n("eva") +
                " let a guy piss in her mouth if he promised to be nice to you in there. ",
            button: [
                { chatID: 16, text: "Really? You let a guy pee in your mouth for me? ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "eva",
            text: "*shrug* He was going to do it anyway. I just thought maybe I could help. ",
            button: [
                { chatID: 17, text: "...", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "Well, it helped me. I didn't have to drink it. *shudder* gross. I know having all these boys " +
                "in and out of the house is a lot. I just hide in the bathroom when I need a break. It's the only " +
                "safe room in the entire house. The first couple days I hid under your bed, but " + sc.n("chad") +
                " found out and told everyone. Boy did they get me, I tell you. ",
            button: [
                { chatID: 18, text: "...", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: "Yeah, just easier to spread your legs. They're really nice, most of the time, if you just let them " +
                "do what they want. It's pretty fun most of the time. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "reset" },
            ]
        },
        {
            chatID: 19,
            speaker: "lola",
            text: "*ugh* My feet are killing me today! I can't wait to give birth and finally get to meet my little " +
                "baby! I think it's " + sc.n("chad") + "'s or " + sc.n("bigguy") + "'s, but I don't know. Maybe " +
                sc.n("treyvon") + ". He's a really good lover. I kinda hope it's him. He's so big. I really hope " +
                "it's not " + sc.n("kei") + "'s baby. I even told him to pull out, but he said it felt better comming " +
                "inside me. ",
            button: [
                { chatID: 20, text: "...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "I'll tell you what " + sc.n("lola") + ". If you babysit my baby I'll handle the dicks. But you have to " +
                "change them too. I don't change diapers. Maybe " + sc.n("landlord") + " will do it. ewww. ",
            button: [
                { chatID: 21, text: "...", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "I know you're joking, but I would love to take care of your baby too. I would be such a better " +
                "mother. I'll teach them all kinds of things, you'll just teach the babies how to say naughty words. " +
                "We even have " + sc.n("me") + " here now to help. ",
            button: [
                { chatID: -1, text: "Yeah", callback: "reset" },
            ]
        },
        {
            chatID: 22,
            speaker: "eva",
            text: "You know the other day I had a drop of milk come out of my nipple. So weird. I bet you want to " +
                "drink it you weirdo! ",
            button: [
                { chatID: 23, text: "I so would!", callback: "" },
                { chatID: 24, text: "Ewww, no.", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "HA! I knew you were a weird-o! You're not a baby! You can't drink my milk! ",
            button: [
                { chatID: -1, text: "Awww shucks!", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "eva",
            text: "Ewww? I bet if cum leaked from my nipples you'd suck it! ",
            button: [
                { chatID: -1, text: "wha?", callback: "reset" },
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "Ewww? I bet if cum leaked from my nipples you'd suck it! ",
            button: [
                { chatID: -1, text: "wha?", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(32, room32);
