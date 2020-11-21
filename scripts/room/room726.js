//Room name
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
    nav.button({
        "type": "btn",
        "name": "lifeguardGirl",
        "left": 184,
        "top": 451,
        "width": 433,
        "height": 629,
        "image": "726_dance/lifeguardGirl1.png"
    }, 726);
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
            var mybody = cl.appearanceBody();
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
            else if (cindyStep === 0) {
                chat(6, 726);
            }
            else if (cindyStep === 1) {
                chat(10, 726);
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
                    chat(20, 901);
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
            nav.modbutton("lifeguardGirl", "lifeguardGirl3a.png", null, null);
            break;
        case "cindy3":
            nav.modbutton("lifeguardGirl", "lifeguardGirl3.png", null, null);
            break;
        case "killcindy":
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
            nav.modbutton("lifeguardGuy1", "726_dance/tim2a.png", null, null);
            break;
        case "timeBathroom":
            if (g.sissy[28].ach) {
                g.pass = "727tim";
                char.room(727);
            }
            else {
                g.setflag("tim");
                g.mod("sissy", 5);
                chat(21, 726);
            }
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
                { chatID: -1, text: "Yeah, I'll see you when you get back", callback: "killcindy" },
                { chatID: 14, text: "Maybe. [That girl wants my cock bad!]", callback: "killcindy" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: sc.n("cindy") + " totally wants my cock now! I should sneak into the girls bathroom and suprise her in the stall.",
            button: [
                { chatID: -1, text: "Yeah, that's what I'll do. She wants suprise sex!", callback: "supriseSex" },
                { chatID: -1, text: "What am I thinking! That's crazy. I'm not going to sneak into the girls bathroom.", callback: "killcindy" }
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
                { chatID: 18, text: "You are such a good dancer", callback: "tim2a" },
            ]
        },
        {
            chatID: 18,
            speaker: "tim",
            text: "How about this little change up. Sexy right?",
            button: [
                { chatID: 19, text: "You're so sexy my pussy is dripping wet", callback: "tim2" },
            ]
        },
        {
            chatID: 19,
            speaker: "tim",
            text: "I do that to all the girls. Since you're so sexy I'll let you take me to the bathroom and suck my dick. " +
            "I don't do this with all the girls, it's just 'casue you're so sexy.",
            button: [
                { chatID: -1, text: "I would love to!", callback: "timeBathroom" },
                { chatID: -1, text: "Nah, I've already had a snack", callback: "reset" },
            ]
        },
        {
            chatID: 20,
            speaker: "tim",
            text: "Hay slut, I remember you. You liked what you saw didn't you. Since you're such a sexy chick I'll let you suck " +
            "my dick in the bathroom. You're welcome",
            button: [
                { chatID: -1, text: "I would love to!", callback: "timeBathroom" },
                { chatID: -1, text: "Nah, I've already had a snack", callback: "reset" },
            ]
        },
        {
            chatID: 21,
            speaker: "tim",
            text: "I know. I'm going to fuck your face which my awesome cock. ",
            button: [
                { chatID: -1, text: "Oh! I just remembered I have to do that other thing.. I'm not ready to meet strange men in the bathroom. [Need to unlock dating blowjob]", callback: "reset" },
            ]
        },
        {
            chatID: 22,
            speaker: "tim",
            text: "The 'Trap' is in development.",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};