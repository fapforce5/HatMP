﻿//Room name
var room726 = {};
room726.main = function () {
    nav.button({
        "type": "btn",
        "name": "girl1",
        "left": 1039,
        "top": 528,
        "width": 255,
        "height": 491,
        "image": "726_dance/dgirl1.png"
    }, 726);
    if (!g.get("cindy")) {
        nav.button({
            "type": "btn",
            "name": "lifeguardGirl",
            "left": 184,
            "top": 451,
            "width": 433,
            "height": 629,
            "image": "726_dance/lifeguardGirl1.png"
        }, 726);
    }
    if (!g.get("tim")) {
        nav.button({
            "type": "btn",
            "name": "lifeguardGuy",
            "left": 1384,
            "top": 508,
            "width": 321,
            "height": 509,
            "image": "726_dance/lifeguarGuy1.png"
        }, 726);
    }
    var navList = [0, 725];
    nav.buildnav(navList);
};

room726.btnclick = function (name) {
    switch (name) {
        case "girl1":
            var thisApp = cl.appearanceBody();
            var thisAppp = cl.appearance();
            nav.killbutton("girl1");
            nav.button({
                "type": "btn",
                "name": "girl1",
                "left": 865,
                "top": 97,
                "width": 727,
                "height": 983,
                "image": "726_dance/dgirl1a.png"
            }, 726);

            if (thisApp === -1)
                chat(0, 726);
            else if (thisApp === 0)
                chat(1, 726);
            else if (thisAppp < 2)
                chat(2, 726);
            else
                chat(3, 726);
            break;
        case "lifeguardGirl":
            var cindyStep = sc.getstep("cindy");
            var mybody = cl.appearance();
            nav.killbutton("lifeguardGirl");
            nav.button({
                "type": "img",
                "name": "lifeguardGirl",
                "left": 673,
                "top": 0,
                "width": 791,
                "height": 1080,
                "image": "726_dance/lifeguardGirl2.png"
            }, 726);

            if (mybody === -1) {
                chat(4, 726);
            }
            else if (mybody > 0) {
                chat(5, 726);
            }
            else if (cindyStep < 2) {
                chat(6, 726);
            }
            else if (cindyStep === 2) {
                chat(10, 726);
            }
            else {
                chat(23, 726);
            }
            break;
        case "lifeguardGuy":
            var timstep = sc.getstep("tim");
            var mybodyt = cl.appearanceBody();
            nav.killbutton("lifeguardGuy");
            nav.button({
                "type": "img",
                "name": "lifeguardGuy1",
                "left": 685,
                "top": 0,
                "width": 613,
                "height": 1080,
                "image": "726_dance/lifeguarGuy2.png"
            }, 726);
            if (mybodyt < 1)
                chat(7, 726);
            else if (mybodyt < 3)
                chat(8, 726);
            else {
                if (timstep === 0)
                    chat(15, 726);
                else if (timstep === 1)
                    chat(20, 726);
                else if (timstep === 2)
                    chat(22, 726);
            }
            break;
        default:
            break;
    }
};

room726.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.addtime(15);
            char.room(726);
            break;
        case "cindy2":
            nav.killbutton("lifeguardGirl");
            nav.button({
                "type": "img",
                "name": "lifeguardGirl",
                "left": 487,
                "top": 0,
                "width": 1138,
                "height": 1080,
                "image": "726_dance/lifeguardGirl3.png"
            }, 726);
            break;
        case "cindy3a":
            nav.modbutton("lifeguardGirl", "726_dance/lifeguardGirl3a.png", null, null);
            break;
        case "cindy3":
            nav.modbutton("lifeguardGirl", "726_dance/lifeguardGirl3.png", null, null);
            break;
        case "killcindy":
            g.setflag("cindy");
            nav.killbutton("lifeguardGirl");
            break;
        case "tim2":
            nav.killbutton("lifeguardGuy1");
            nav.button({
                "type": "img",
                "name": "lifeguardGuy1",
                "left": 405,
                "top": 0,
                "width": 1070,
                "height": 1080,
                "image": "726_dance/tim2.png"
            }, 726);
            break;
        case "tim2a":
            nav.killbutton("lifeguardGuy1");
            nav.button({
                "type": "img",
                "name": "lifeguardGuy1",
                "left": 405,
                "top": 0,
                "width": 1070,
                "height": 1080,
                "image": "726_dance/tim2.png"
            }, 726);
            break;
        case "timeBathroom":
            g.pass = "727tim";
            char.room(727);
            break;
        case "supriseSex":
            g.pass = "supriseSex";
            char.room(727);
            break;
        case "tim3_1":
            nav.killall();
            nav.bg("726_dance/tim3_1.jpg");
            break;
        case "tim3_2":
            nav.bg("726_dance/tim3_2.jpg");
            zcl.displayMain(400, 500, .35, "clothes", true);
            break;
        case "tim3_3":
            nav.bg("726_dance/tim3_3.jpg");
            zcl.displayMain(100, 900, .19, "clothes", true);
            break;
        case "tim3_4":
            nav.bg("726_dance/tim3_4.jpg");
            zcl.displayMain(-1900, -200, .6, "clothes", true);
            nav.button({
                "type": "img",
                "name": "lifeguardGuy1",
                "left": 1156,
                "top": 0,
                "width": 565,
                "height": 682,
                "image": "726_dance/tim3_4.png"
            }, 726);
            break;
        case "tim3_5":
            g.mod("arousal", 10);
            nav.killall();
            nav.bg("726_dance/tim3_5.jpg");
            break;
        case "tim3_6":
            g.mod("arousal", 20);
            nav.killall();
            nav.bg("726_dance/tim3_6.jpg");
            break;
        case "tim3_7":
            nav.killall();
            nav.bg("726_dance/tim3_7.jpg");
            break;
        case "tim3_8":
            nav.killall();
            nav.bg("726_dance/tim3_8.jpg");
            zcl.displayMain(500, 0, .6, "clothes", true);
            break;
        case "tim3_9":
            nav.killall();
            nav.bg("726_dance/tim3_9.jpg");
            zcl.displayMain(700, 0, .6, "clothes", true);
            break;
        case "tim3_10":
            nav.killall();
            nav.bg("726_dance/tim3_10.jpg");
            break;
        case "tim3_11":
            nav.bg("726_dance/tim3_11.jpg");
            break;
        case "tim3_12":
            g.mod("arousal", 100);
            nav.bg("726_dance/tim3_12.jpg");
            break;
        case "tim3_13":
            nav.bg("726_dance/tim3_13.jpg");
            break;
        case "tim3_14":
            nav.bg("726_dance/tim3_14.jpg");
            break;
        case "tim3_15":
            nav.bg("726_dance/tim3_15.jpg");
            break;
        case "tim3_16":
            g.mod("giveOralMale", 1);
            g.mod("giveAnalMale", 1);
            g.mod("creamPied", 1);
            g.setflag("tim");
            sc.setstep("tim", 3);
            char.addtime(72);
            char.room(726);
            break;
        default:
            break;
    }
};

room726.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Ugh... Go away. You're disgusting.",
            button: [
                { chatID: -1, text: "No you", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "You're kinda cute. If I didn't have a boyfriend I would be totally grinding you!",
            button: [
                { chatID: -1, text: "Why let that stop you", callback: "reset" }
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "You have an intersting look, but I'm not interested.",
            button: [
                { chatID: -1, text: "Neither am I", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "Hay girl! You're almost cute enough to to make me want to invite you to a threesome!",
            button: [
                { chatID: -1, text: "Hay keep that invite open!", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "cindy",
            text: "Ugh, gross. Don't talk to me.",
            button: [
                { chatID: -1, text: "Ok, rude much!", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "cindy",
            text: "Gross. I'm not a dyke and I don't need new friends. Stop talking to me.",
            button: [
                { chatID: -1, text: "Bitch!", callback: "reset" }
            ]
        },
        {
            chatID: 6,
            speaker: "cindy",
            text: "You're sexy,  but I only date swimmers. Prove you can out swim me and maybe I'll dance with you.",
            button: [
                { chatID: -1, text: "Odd, but ok", callback: "reset" }
            ]
        },
        {
            chatID: 7,
            speaker: "tim",
            text: "Hay dude, can't talk now, trying to get laid bro.",
            button: [
                { chatID: -1, text: "Oh, yeah me too bro", callback: "reset" }
            ]
        },
        {
            chatID: 8,
            speaker: "tim",
            text: "Hay, you aren't sexy enough for a dude like me. I like the total package, lips, tits, and ass. ",
            button: [
                { chatID: 9, text: "Oh, you're really shallow", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "tim",
            text: "Whatever slut. I'm way too sexy for you. ",
            button: [
                { chatID: -1, text: "Grrrrr", callback: "reset" }
            ]
        },
        {
            chatID: 10,
            speaker: "cindy",
            text: "If it isn't the best swimmer in the town. Come here for a dance?",
            button: [
                { chatID: 11, text: "Oh yeah, lets dance! ", callback: "cindy2" },
                { chatID: -1, text: "oh no, I'll pass.", callback: "reset" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "This chick is really really hot. I wonder if she fucks on the first date.",
            button: [
                { chatID: 12, text: "...", callback: "cindy3a" }
            ]
        },
        {
            chatID: 12,
            speaker: "cindy",
            text: "I love this song! It's my absolut favorite! ",
            button: [
                { chatID: 13, text: "You know you're a really good dancer!", callback: "cindy3" }
            ]
        },
        {
            chatID: 13,
            speaker: "cindy",
            text: "Thank! I have to go powder my nose. I'll see you back out here.",
            button: [
                { chatID: 14, text: "Maybe I'll see you here. [That girl wants my cock bad!]", callback: "killcindy" },
                { chatID: -1, text: "Yeah, I'll see you when you get back", callback: "killcindy" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: sc.n("cindy") + " totally wants my cock now! I should sneak into the coed bathroom and suprise her in the stall.",
            button: [
                { chatID: -1, text: "Yeah, that's what I'll do. She wants suprise sex!", callback: "supriseSex" }
            ]
        },
        {
            chatID: 15,
            speaker: "tim",
            text: "You are the sexiest chick in here. Wanna dance? ",
            button: [
                { chatID: 17, text: "Only if you have the moves", callback: "tim1" },
                { chatID: -1, text: "Nah, I'm too sexy for you", callback: "reset" }
            ]
        },
        {
            chatID: 16,
            speaker: "tim",
            text: "You are the sexiest chick in here. Wanna dance? ",
            button: [
                { chatID: 17, text: "Only if you have the moves", callback: "tim2" },
                { chatID: -1, text: "Nah, I'm too sexy for you", callback: "reset" }
            ]
        },
        {
            chatID: 17,
            speaker: "tim",
            text: "You like these moves? I bet you've never danced with someone this good before. ",
            button: [
                { chatID: 18, text: "You are such a good dancer", callback: "tim2a" }
            ]
        },
        {
            chatID: 18,
            speaker: "tim",
            text: "How about this little change up. Sexy right?",
            button: [
                { chatID: 19, text: "You're so sexy my pussy is dripping wet", callback: "tim2" }
            ]
        },
        {
            chatID: 19,
            speaker: "tim",
            text: "I do that to all the girls. Since you're so sexy I'll let you take me to the bathroom and suck my dick. " +
                "I don't do this with all the girls, it's just 'casue you're so sexy.",
            button: [
                { chatID: -1, text: "I would love to!", callback: "timeBathroom" },
                { chatID: -1, text: "Nah, I've already had a snack", callback: "reset" }
            ]
        },
        {
            chatID: 20,
            speaker: "tim",
            text: "Hay slut, I remember you. You liked what you saw didn't you. Since you're such a sexy chick I'll let you suck " +
                "my dick in the bathroom. You're welcome",
            button: [
                { chatID: -1, text: "I would love to!", callback: "timeBathroom" },
                { chatID: -1, text: "Nah, I've already had a snack", callback: "reset" }
            ]
        },
        {
            chatID: 21,
            speaker: "tim",
            text: "I know. I'm going to fuck your face with my awesome cock. ",
            button: [
                { chatID: -1, text: "Oh! I just remembered I have to do that other thing.. I'm not ready to meet strange men in the bathroom. [Need to unlock dating blowjob]", callback: "reset" }
            ]
        },
        {
            chatID: 22,
            speaker: "tim",
            text: "Hay sexy, couldn't stay away from this dick huh?",
            button: [
                { chatID: 24, text: "Nope, I need it!", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "cindy",
            text: "In development.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 24,
            speaker: "tim",
            text: "How about we skit the song and dance and I just fuck you in the bathroom?",
            button: [
                { chatID: 25, text: "Oh Please!", callback: "tim3_1" },
                { chatID: -1, text: "Nah, I'm busy.", callback: "reset" }
            ]
        },
        {
            chatID: 25,
            speaker: "tim",
            text: "Let's not waste time, you know what I want slut. Get suckin'.",
            button: [
                { chatID: 26, text: "Slurp!", callback: "tim3_2" }
            ]
        },
        {
            chatID: 26,
            speaker: "tim",
            text: "Oh yeah! You've got a great mouth. I love to have my neck licked, come up and lick it. ",
            button: [
                { chatID: 27, text: "Oh yes ", callback: "tim3_3" }
            ]
        },
        {
            chatID: 27,
            speaker: "tim",
            text: "I love it, keep licking.",
            button: [
                { chatID: 28, text: "Slurp", callback: "tim3_4" }
            ]
        },
        {
            chatID: 28,
            speaker: "tim",
            text: "I love your ass baby. I need this ass",
            button: [
                { chatID: 29, text: "lick suck", callback: "tim3_5" }
            ]
        },
        {
            chatID: 29,
            speaker: "tim",
            text: "Such a hungry butthole",
            button: [
                { chatID: 30, text: "*moan*", callback: "tim3_6" }
            ]
        },
        {
            chatID: 30,
            speaker: "tim",
            text: "It's so hungry. I bet your pussy is dripping wet you slut. ",
            button: [
                { chatID: 31, text: "*Girly noises*", callback: "tim3_7" }
            ]
        },
        {
            chatID: 31,
            speaker: "tim",
            text: "hmmmmmm ",
            button: [
                { chatID: 32, text: "Gasp", callback: "tim3_7" }
            ]
        },
        {
            chatID: 32,
            speaker: "tim",
            text: "??? What's this??? ",
            button: [
                { chatID: 33, text: "...", callback: "tim3_8" }
            ]
        },
        {
            chatID: 33,
            speaker: "tim",
            text: "???",
            button: [
                { chatID: 34, text: "...", callback: "tim3_9" }
            ]
        },
        {
            chatID: 34,
            speaker: "tim",
            text: "THOSE ARE BALLS!!! YOU HAVE BALLS!!! WHY DO YOU HAVE BALLS??? OH NO, NO NO NONONONONONONONO!!!!! I DON'T FUCK BOYS!!!!",
            button: [
                { chatID: 35, text: "...", callback: "tim3_9" }
            ]
        },
        {
            chatID: 35,
            speaker: "me",
            text: "I'm not a boy though, I'm a sissy. Have you ever fucked a sissy's pussy? It's warm, soft, and you never have to " +
                "pull out. Best of all you can fuck me whenever and however you want and I'll never complain or say no.",
            button: [
                { chatID: 36, text: "...", callback: "tim3_10" }
            ]
        },
        {
            chatID: 36,
            speaker: "tim",
            text: "....",
            button: [
                { chatID: 37, text: "Do you like my pussy? It's hungry for cock.", callback: "tim3_11" }
            ]
        },
        {
            chatID: 37,
            speaker: "tim",
            text: "Hmmm, I've never fucked a sissy before, and you do have a beautiful sissy pussy. I just ...",
            button: [
                { chatID: 38, text: "You know you want it. Just shove it in already.", callback: "tim3_12" }
            ]
        },
        {
            chatID: 38,
            speaker: "tim",
            text: "*GROAN* It's so tight!",
            button: [
                { chatID: 39, text: "*Moan*", callback: "tim3_13" }
            ]
        },
        {
            chatID: 39,
            speaker: "tim",
            text: "Oh fuck I love sissy pussy! I love it soooo much!",
            button: [
                { chatID: 40, text: "Pant", callback: "tim3_14" }
            ]
        },
        {
            chatID: 40,
            speaker: "tim",
            text: "Oh my god I'm never fucking anything excepty sissy pussy again!",
            button: [
                { chatID: 41, text: "Groan", callback: "tim3_15" }
            ]
        },
        {
            chatID: 41,
            speaker: "tim",
            text: "My cum looks so good oozing out of your ass. See me again, I got to have more!",
            button: [
                { chatID: -1, text: "I will. I love a cream filling", callback: "tim3_16" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};