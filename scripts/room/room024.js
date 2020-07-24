//Spin the bottle
var room24 = {};

room24.main = function () {
    g.internal = { eva: "glass_full.png", lola: "glass_full.png", lolaNude: "", evaNude: "", meSecret: 0, meNaked: 0, meNextChat: 0 };
    g.pass = new Array();
    room24.chatcatch("evaTalk lolaSit");
    chat(0, 24);
};

room24.btnclick = function (name) {
    switch (name) {
        case "lolaWine":
            nav.killbutton("lolaWine");
            nav.button({
                "type": "img",
                "name": "lolaWine",
                "left": 1796,
                "top": 871,
                "width": 90,
                "height": 191,
                "image": "24_spinTheBottle/" + g.internal.lola
            }, 13);
            break;
        case "evaWine":
            nav.killbutton("evaWine");
            nav.button({
                "type": "img",
                "name": "evaWine",
                "left": 1074,
                "top": 871,
                "width": 90,
                "height": 191,
                "image": "24_spinTheBottle/" + g.internal.eva
            }, 13);
            break;
    }
};

room24.chatcatch = function (callback) {
    var cArray = callback.split(" ");
    for (i = 0; i < cArray.length; i++) {
        switch (cArray[i]) {
            case "bg":
                nav.bg("24_spinTheBottle/013_spinBG.jpg");
                nav.killbutton("bottle");
                break;
            case "topbg":
                nav.killbutton("lolaWine");
                nav.killbutton("evaWine");
                nav.bg("24_spinTheBottle/013_spinBottle_floor.jpg");
                nav.button({
                    "type": "img",
                    "name": "bottle",
                    "left": 960,
                    "top": 812,
                    "width": 222,
                    "height": 223,
                    "image": "24_spinTheBottle/bottleStop.png"
                }, 13);
                break;
            case "black":
                nav.killall();
                nav.bg("24_spinTheBottle/black.jpg");
                break;
            case "lolaSit":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1192,
                    "top": 0,
                    "width": 728,
                    "height": 1071,
                    "image": "24_spinTheBottle/013_spinLolaSit" + g.internal.lolaNude + ".png"
                }, 13);
                room24.btnclick("lolaWine");
                break;
            case "evaSit":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/013_spinEvaSitNoTalk" + g.internal.evaNude + ".png"
                }, 13);
                room24.btnclick("evaWine");
                break;
            case "lolaDrink":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1192,
                    "top": 0,
                    "width": 728,
                    "height": 1071,
                    "image": "24_spinTheBottle/013_spinLolaDrink" + g.internal.lolaNude + ".png"
                }, 13);
                nav.killbutton("lola_glass");
                break;
            case "evaDrink":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/013_spinEvaDrink" + g.internal.evaNude + ".png"
                }, 13);
                nav.killbutton("eva_glass");
                break;
            case "lolaTalk":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1192,
                    "top": 0,
                    "width": 728,
                    "height": 1071,
                    "image": "24_spinTheBottle/013_spinLolaTalk" + g.internal.lolaNude + ".png"
                }, 13);
                room24.btnclick("lolaWine");
                break;
            case "evaTalk":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/013_spinEvaSit" + g.internal.evaNude + ".png"
                }, 13);
                room24.btnclick("evaWine");
                break;
            case "lolaKiss":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1159,
                    "top": 0,
                    "width": 716,
                    "height": 1073,
                    "image": "24_spinTheBottle/013_spinLolaKiss" + g.internal.lolaNude + ".png"
                }, 13);
                cl.horny(30);
                break;
            case "evaKiss":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 448,
                    "top": 44,
                    "width": 711,
                    "height": 1036,
                    "image": "24_spinTheBottle/013_spinEvaKiss" + g.internal.evaNude + ".png"
                }, 13);
                cl.horny(30);
                break;
            case "bothKiss":
                nav.killbutton("eva");
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 432,
                    "top": 24,
                    "width": 1355,
                    "height": 1056,
                    "image": "24_spinTheBottle/013_spinLolaEvaKiss.png"
                }, 13);
                cl.horny(60);
                break;
            case "lolaTop":
                nav.killbutton("lola");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1251,
                    "top": 1,
                    "width": 605,
                    "height": 872,
                    "image": "24_spinTheBottle/lolaTop" + g.internal.lolaNude + ".png"
                }, 13);
                break;
            case "evaTop":
                nav.killbutton("eva");
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 310,
                    "top": 6,
                    "width": 591,
                    "height": 806,
                    "image": "24_spinTheBottle/evaTop" + g.internal.evaNude + ".png"
                }, 13);
                break;
            case "lolaTopless":
                g.internal.lolaNude = "Nude";
                break;
            case "evaTopless":
                g.internal.evaNude = "Nude";
                break;
            case "meFirst":
                g.internal.meNextChat = 53;
                break;
            case "meSecond":
                g.internal.meNextChat = 64;
                break;
            case "meThird":
                g.internal.meNextChat = 77;
                break;
            case "meEnd":
                room24.chatcatch("topbg evaTop lolaTop");
                chat(g.internal.meNextChat, 24);
                break;
            case "meSecret":
                if (g.internal.meSecret === 0) {
                    room24.chatcatch("bg evaSit lolaSit");
                    g.internal.meSecret = 1;
                    chat(18, 24);
                }
                else if (g.internal.meSecret === 1) {
                    room24.chatcatch("bg evaSit lolaTalk");
                    g.internal.meSecret = 1;
                    chat(38, 24);
                }
                break;
            case "lolaPic":
                pic.add("lolaTopless");
                break;
            case "meKissLola":
                room24.chatcatch("bg evaSit lolaKiss");
                chat(27, 24);
                break;
            case "meKissEva":
                room24.chatcatch("bg lolaSit evaKiss");
                chat(29, 24);
                break;
            case "meNaked":
                if (g.internal.meNaked === 0) {
                    g.pass.push(cl.c.shirt);
                    cl.c.shirt = null;
                    cl.display();
                    g.internal.meNaked = 1;
                    room24.chatcatch("bg evaSit lolaTalk");
                    chat(31, 24);
                }
                else if (g.internal.meNaked === 1) {
                    g.pass.push(cl.c.pants);
                    cl.c.pants = null;
                    cl.display();
                    g.internal.meNaked = 2;
                    room24.chatcatch("bg evaTalk lolaSit");
                    chat(33, 24);
                }
                else if (g.internal.meNaked === 2) {
                    g.pass.push(cl.c.shoes);
                    g.pass.push(cl.c.socks);
                    cl.c.shoes = null;
                    cl.c.socks = null;
                    cl.display();
                    g.internal.meNaked = 3;
                    room24.chatcatch("bg lolaTalk evaSit");
                    chat(35, 24);
                }
                
                break;
            case "killWine":
                nav.killbutton("lolaWine");
                nav.killbutton("evaWine");
                break;
            case "lolaHalf":
                g.internal.lola = "glass_half.png";
                break;
            case "evaHalf":
                g.internal.eva = "glass_half.png";
                break;
            case "lolaEmpty":
                g.internal.lola = "glass_empty.png";
                break;
            case "evaEmpty":
                g.internal.eva = "glass_empty.png";
                break;
            case "spinBottleEva":
                $('.room-img[data-name="bottle"]').addClass('evaSpin');
                $('.room-chatBox').hide();
                setTimeout(function () { $('.room-chatBox').show(); }, 3000);
                break;
            case "spinBottleLola":
                $('.room-img[data-name="bottle"]').addClass('lolaSpin');
                $('.room-chatBox').hide();
                setTimeout(function () { $('.room-chatBox').show(); }, 3000);
                break;
            case "spinBottleMe":
                $('.room-img[data-name="bottle"]').addClass('meSpin');
                $('.room-chatBox').hide();
                setTimeout(function () { $('.room-chatBox').show(); }, 3000);
                break;
            case "spinEnd":
                char.settime(22, 37);
                sc.setstep("eva", 4);
                sc.setstep("lola", 5);
                inv.use("wine");
                char.room(11);
                break;
            default:
                console.log(callback + " - miss");
                break;
        }
    }
};

room24.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "eva",
            text: "Since there's only three of us, I think we should add some stuff to make the game more interesting.",
            button: [
                { chatID: 1, text: "...", callback: "lolaTalk evaSit" }
            ]
        }, {
            chatID: 1,
            speaker: "lola",
            text: "How about if you don't want to kiss you have to take a drink a tell a secret. ",
            button: [
                { chatID: 2, text: "...", callback: "lolaSit" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "That sounds good " + sc.n('lola') + ". Also if you want to take off an item of clothing you can do that.",
            button: [
                { chatID: 3, text: "...", callback: "evaTalk" }
            ]
        },
        {
            chatID: 3,
            speaker: "eva",
            text: "Always trying to be the pervert... but I'm in. So if the bottle lands on you, you can drink a tell a secret, " +
                "kiss the spinner or take off some clothing. You in " + sc.n("lola") + "?",
            button: [
                { chatID: 4, text: "...", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 4,
            speaker: "lola",
            text: "Hehe.. ok, this is so exciting! I've never played dirty drinking games before.",
            button: [
                { chatID: 5, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 5,
            speaker: "eva",
            text: "Ok, I get first spin.. here goes...",
            button: [
                { chatID: 6, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 6,
            speaker: "lola",
            text: "Spinning....",
            button: [
                { chatID: 7, text: "...", callback: "spinBottleLola" }
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "HAHA you go first " + sc.n("lola") + "!",
            button: [
                { chatID: 8, text: "...", callback: "bg evaSit lolaDrink lolaHalf" }
            ]
        },
        {
            chatID: 8,
            speaker: "lola",
            text: "Gulp...",
            button: [
                { chatID: 9, text: "...", callback: "lolaTalk" }
            ]
        },
        {
            chatID: 9,
            speaker: "lola",
            text: "Ok, my secret is that last week I didn't have any clean panties, so I went to school without wearing any! ",
            button: [
                { chatID: 10, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 10,
            speaker: "lola",
            text: sc.n('eva') + ", it better land on you this time! ",
            button: [
                { chatID: 11, text: "[Lola spins bottle]", callback: "spinBottleLola" }
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "Awww crap it landed on me again! Does that mean I get to kiss myself?",
            button: [
                { chatID: 12, text: "...", callback: "bg evaTalk lolaSit" }
            ]
        },
        {
            chatID: 12,
            speaker: "eva",
            text: "No you big cheater. Either tell a secret or strip.",
            button: [
                { chatID: 13, text: "...", callback: "lolaDrink evaSit lolaEmpty" }
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "Ok, my secret is that I'm a virgin.",
            button: [
                { chatID: 14, text: "...", callback: "lolaSit evaTalk" }
            ]
        },
        {
            chatID: 14,
            speaker: "eva",
            text: "That's not a secret! Everyone knows that! ",
            button: [
                { chatID: 15, text: "...", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "Shut up " + sc.n("eva") + "! No one knows that! I really hope it land on you THIS time!",
            button: [
                { chatID: 16, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 16,
            speaker: "lola",
            text: "Here goes....",
            button: [
                { chatID: 17, text: "...", callback: "spinBottleMe" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "Oh damn it landed on " + sc.n("me") + "!",
            button: [
                { chatID: -1, text: "Tell a secret", callback: "meFirst meSecret" },
                { chatID: -1, text: "Kiss " + sc.n('lola'), callback: "meFirst meKissLola" },
                { chatID: -1, text: "Remove an item of clothing", callback: "meFirst meNaked" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: sc.getstep('chad') === 0 ? "I've never had a girl show me her boobs" :
                sc.n("chad") + " asked me to get a topless picture of you, " + sc.n("lola") + ", so I could get a gym pass.",
            button: [
                {
                    chatID: sc.getstep('chad') === 0 ? 25 : 19,
                    text: "...",
                    callback: sc.getstep('chad') === 0 ? "bg evaTalk lolaSit" : "bg evaSit lolaTalk"
                }
            ]
        },
        {
            chatID: 19,
            speaker: "lola",
            text: "Oh my that terrible. So he won't let you use the gym unless you give him a picture of me topless? ",
            button: [
                { chatID: 20, text: "Yea. " + sc.n("chad") + "'s such a bully", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: sc.n("chad") + "'s such a creep, but he's so sexy. c'mon " + sc.n('lola') + " help out the the weakling. He needs " +
                "to spend some time in the gym. ",
            button: [
                { chatID: 21, text: "...", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "I don't know. I don't want my boobs all over the internet with lewd perverts touching themselves to me. ",
                button: [
                    { chatID: 22, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 22,
            speaker: "eva",
            text: sc.n('chad') + " isn't smart enough to use the internet and " + sc.n("me") + " would never do that to you. " +
                " Would you " + sc.n("me") + "?",
            button: [
                { chatID: 23, text: "No, I would never do that", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 23,
            speaker: "lola",
            text: "Hmmmm...... ok, " + sc.n("me") + ", I'll help you out. Give me your phone and close your eyes. ",
            button: [
                { chatID: 24, text: "[Give " + sc.n('lola') + " your phone and close your eyes]", callback: "black" }
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "Hehehe " + sc.n("eva") + " stop touching me there.. let me get this picture..... Ok " + sc.n("me") +
                " you can open your eyes now and spin that bottle!",
            button: [
                { chatID: -1, text: "Thanks " + sc.n('lola') + ", you're the best!", callback: "lolaPic meEnd" }
            ]
        },
        {
            chatID: 25,
            speaker: "eva",
            text: "That's why you're such a pervert, you can't get the real thing. " + sc.n('lola') + " show him your tits! ",
            button: [
                { chatID: 26, text: "...", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 26,
            speaker: "lola",
            text: "Hmmmm... maybe. I feel so bad for you. Boobs are so pretty and fun. If you promise not to share it with anyone " +
                "I'll take a topless selfie for you.",
            button: [
                { chatID: 23, text: "I promise not to share it with anyone!", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "lola",
            text: "Awwww, that's so nice you want to kiss me.",
            button: [
                { chatID: 28, text: "I really do.", callback: "lolaKiss" }
            ]
        },
        {
            chatID: 28,
            speaker: "lola",
            text: "MMmmmmmmmm, so yummy!",
            button: [
                { chatID: -1, text: "MMmmmmmm", callback: "meEnd" }
            ]
        },
        {
            chatID: 29,
            speaker: "eva",
            text: "Of course you want a kiss, well pucker up pervert and no tongue!",
            button: [
                { chatID: 30, text: "Oh yea", callback: "evaKiss" }
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "MMmmmmmmmm, that's kinda hot",
            button: [
                { chatID: -1, text: "MMmmmmmm", callback: "meEnd" }
            ]
        },
        {
            chatID: 31,
            speaker: "lola",
            text: "Oooooo take it off, that's so sexy " + sc.n("me") + ".",
            button: [
                { chatID: 32, text: "...", callback: "lolaSit evaTalk" }
            ]
        },
        {
            chatID: 32,
            speaker: "eva",
            text: "Of course the pervert's going to take his clothes off.",
            button: [
                { chatID: -1, text: "...", callback: "meEnd" }
            ]
        },
        {
            chatID: 33,
            speaker: "eva",
            text: "You were planning on taking off your pants the entire time sick-o.",
            button: [
                { chatID: 34, text: "...", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 34,
            speaker: "lola",
            text: "I don't know " + sc.n("eva") + ", I think it's kind of hot. I like seeing a man in his underwear. ",
            button: [
                { chatID: -1, text: "...", callback: "meEnd" }
            ]
        },
        {
            chatID: 35,
            speaker: "lola",
            text: "Awwww, you took off your shoes and socks. I thought you were going to take off your underwear.",
            button: [
                { chatID: 36, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 36,
            speaker: "eva",
            text: "Yeah, you big chicken. I was hoping to see what you're packing down there. ",
            button: [
                { chatID: 37, text: "...", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 37,
            speaker: "lola",
            text: "Oh well, maybe we can see it sometime in the future.",
            button: [
                { chatID: -1, text: "Any time you want to see it " + sc.n("lola") + ". ", callback: "meEnd" }
            ]
        },
        {
            chatID: 38,
            speaker: "lola",
            text: "So what's your secret?",
            button: [
                { chatID: 39, text: "I have a foot fetish", callback: "" },
                { chatID: 41, text: "I like wearing woment's panties", callback: "evaTalk lolaSit" },
                { chatID: 42, text: "I'm into domination ", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "lola",
            text: "Hahaha, we know. " + sc.n("eva") + " has something planned for that. ",
            button: [
                { chatID: 40, text: "You know?", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 40,
            speaker: "eva",
            text: "I do you big pervert, and I know you'll love it, but not tonight.",
            button: [
                { chatID: -1, text: "That sounds awesome!", callback: "meEnd" }
            ]
        },
        {
            chatID: 41,
            speaker: "eva",
            text: "We know. We've caught you too many times snooping around our panty drawer weird-o.",
            button: [
                { chatID: -1, text: "Oh yea", callback: "meEnd" }
            ]
        },
        {
            chatID: 42,
            speaker: "lola",
            text: "That's really sexy. I love it when a man takes charge and makes me do dirty things!",
            button: [
                { chatID: 43, text: "...", callback: "lolaSit evaTalk" }
            ]
        },
        {
            chatID: 43,
            speaker: "eva",
            text: "I really don't see you taking charge of anything, but if you say so...",
            button: [
                { chatID: -1, text: "What ever " + sc.n("eva") + ". I would totally dominate you. ", callback: "meEnd" }
            ]
        },
        {
            chatID: 44,
            speaker: "eva",
            text: "I'm more than you can handle pig boy!",
            button: [
                { chatID: -1, text: "...", callback: "meEnd" }
            ]
        },
        {
            chatID: 45,
            speaker: "lola",
            text: "So what's your secret?",
            button: [
                { chatID: 46, text: "I like to be peed on", callback: "lolaTalk evaSit" },
                { chatID: 48, text: "I masturbate, like everyday", callback: "evaTalk lolaSit" },
                { chatID: 52, text: "There's nothing sexier than bending a girl over my knee ", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "lola",
            text: "Like a toilet?",
            button: [
                { chatID: 47, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 47,
            speaker: "eva",
            text: "Beign peed on is not that bad. Sometimes it can be pretty hot.",
            button: [
                { chatID: -1, text: "...", callback: "meEnd" }
            ]
        },
        {
            chatID: 48,
            speaker: "eva",
            text: "Hahaha, that's only because you can't get the real thing!",
            button: [
                { chatID: 49, text: "...", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 49,
            speaker: "lola",
            text: "What are you talking about " + sc.n('eva') + " we masturbate almost every day too. ",
            button: [
                { chatID: 50, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 50,
            speaker: "eva",
            text: "Shut up " + sc.n('lola') + " the perver doesn't need to know that. He's probably going to " +
                "peek on us more.",
            button: [
                { chatID: 51, text: "I never peek!", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 51,
            speaker: "lola",
            text: "That's ok we know you watch us. I find it hot when I know you're secretly watching us and playing " +
                "with yourself. ",
            button: [
                { chatID: 51, text: "...", callback: "meEnd" }
            ]
        },
        {
            chatID: 52,
            speaker: "lola",
            text: "Oooo I like that, but not too hard. It's sexy when a man takes charge, but doen't hurt me.",
            button: [
                { chatID: 51, text: "...", callback: "meEnd" }
            ]
        },
        {
            chatID: 53,
            speaker: "me",
            text: "Ok, time to spint that bottle",
            button: [
                { chatID: 54, text: "[Spin the bottle]", callback: "spinBottleEva" }
            ]
        },
        {
            chatID: 54,
            speaker: "eva",
            text: "Damn, I guess it's finally my turn!",
            button: [
                { chatID: 55, text: "...", callback: "bg evaHalf evaDrink lolaSit" }
            ]
        },
        {
            chatID: 55,
            speaker: "eva",
            text: "I was peed on once by my ex-boyfriend. I was sitting on the toilet, and he tried to pee between my legs. " +
                "He totally missed and got it all over my legs!!",
            button: [
                { chatID: 56, text: "...", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 56,
            speaker: "lola",
            text: "gross " + sc.n('eva') + "...",
            button: [
                { chatID: 57, text: "...", callback: "lolaSit evaTalk" }
            ]
        },
        {
            chatID: 57,
            speaker: "eva",
            text: "I know!! I took a shower right after.",
            button: [
                { chatID: 58, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 58,
            speaker: "eva",
            text: "Here goes...",
            button: [
                { chatID: 59, text: "...", callback: "spinBottleLola" }
            ]
        },
        {
            chatID: 59,
            speaker: "lola",
            text: "Well I guess we should make this game more interesting... ",
            button: [
                { chatID: 60, text: "...", callback: "bg lolaTopless evaTalk lolaSit" }
            ]
        },
        {
            chatID: 60,
            speaker: "eva",
            text: sc.n("lola") + "! Look at you getting crazy you dirty slut! ",
            button: [
                { chatID: 61, text: "...", callback: "bg lolaTalk evaSit" }
            ]
        },
        {
            chatID: 61,
            speaker: "lola",
            text: "Haha yeah, this game needed some excitement.",
            button: [
                { chatID: 62, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 62,
            speaker: "eva",
            text: "Spin that bottle!",
            button: [
                { chatID: 63, text: "...", callback: "spinBottleMe" }
            ]
        },
        {
            chatID: 63,
            speaker: "lola",
            text: "Oh damn it landed on " + sc.n("me") + "!",
            button: [
                { chatID: -1, text: "Tell a secret", callback: "meSecond meSecret" },
                { chatID: -1, text: "Kiss " + sc.n('lola'), callback: "meSecond meKissLola" },
                { chatID: -1, text: "Remove an item of clothing", callback: "meSecond meNaked" }
            ]
        },
        {
            chatID: 64,
            speaker: "eva",
            text: "Spin that bottle!",
            button: [
                { chatID: 65, text: "...", callback: "spinBottleLola" }
            ]
        },
        {
            chatID: 65,
            speaker: "lola",
            text: "My secret fantasy is to be felt up while I sleep. He'll gently slide my clothes off " +
                "baring my body for him. Then he'll run his hands over my body, starting with my breasts before he glides his" +
                "powerful hands down my stomach to my... ",
            button: [
                { chatID: 66, text: "...", callback: "bg lolaSit evaTalk" }
            ]
        },
        {
            chatID: 66,
            speaker: "eva",
            text: "OK " + sc.n("lola") + "! We get it! You're secretly a slut, just spin the bottle!",
            button: [
                { chatID: 67, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 67,
            speaker: "lola",
            text: "Here's goes!",
            button: [
                { chatID: 68, text: "...", callback: "spinBottleEva" }
            ]
        },
        {
            chatID: 68,
            speaker: "eva",
            text: "Nice, I needed a drink.",
            button: [
                { chatID: 69, text: "...", callback: "bg evaDrink lolaSit" }
            ]
        },
        {
            chatID: 69,
            speaker: "eva",
            text: "OK, I'll admit it, I have the same fantasy, too. Waking up to my clit being licked while he slides a finger " +
                "into butthole... I'm starting to get wet just thinking about it! ",
            button: [
                { chatID: 70, text: "...", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 70,
            speaker: "lola",
            text: "I know! Sometimes I'll wake up soaking, because I dreamed someone was playing with me while I slept!",
            button: [
                { chatID: 71, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 71,
            speaker: "eva",
            text: "So that's what your dreaming about when you rub yourself against my thigh. My turn to spin!",
            button: [
                { chatID: 72, text: "...", callback: "spinBottleEva" }
            ]
        },
        {
            chatID: 72,
            speaker: "eva",
            text: "OOoooo me again! I gues " + sc.n("lola") + " can't be the only topless girl here!",
            button: [
                { chatID: 73, text: "...", callback: "bg evaTopless lolaTalk evaSit" }
            ]
        },
        {
            chatID: 73,
            speaker: "lola",
            text: "Thank you " + sc.n('eva') + ", I was starting to feel self conscious over here. ",
            button: [
                { chatID: 74, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 74,
            speaker: "lola",
            text: "I'm just suprised you kept your top on so long, usually you're the first one naked! ",
            button: [
                { chatID: 75, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 75,
            speaker: "eva",
            text: "Spinning ",
            button: [
                { chatID: 76, text: "...", callback: "spinBottleMe" }
            ]
        },
        {
            chatID: 76,
            speaker: "lola",
            text: "Oh damn it landed on " + sc.n("me") + "!",
            button: [
                { chatID: -1, text: "Tell a secret", callback: "meThird meSecret" },
                { chatID: -1, text: "Kiss " + sc.n('lola'), callback: "meThird meKissEva" },
                { chatID: -1, text: "Remove an item of clothing", callback: "meThird meNaked" }
            ]
        },
        {
            chatID: 77,
            speaker: "eva",
            text: "Spin that bottle!",
            button: [
                { chatID: 78, text: "...", callback: "spinBottleLola" }
            ]
        },
        {
            chatID: 78,
            speaker: "lola",
            text: "Oh my. Well, I've always wondered what kind of kisser your are, " + sc.n("me") + ". ",
            button: [
                { chatID: 79, text: "...", callback: "bg evaSit lolaKiss" }
            ]
        },
        {
            chatID: 79,
            speaker: "lola",
            text: "Mmmmmmm... ",
            button: [
                { chatID: 80, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 80,
            speaker: "eva",
            text: "So how was he?",
            button: [
                { chatID: 81, text: "...", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 81,
            speaker: "lola",
            text: "He's pretty good. I may kiss him again some time.",
            button: [
                { chatID: 82, text: "I look forward to that " + sc.n('lola'), callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 82,
            speaker: "lola",
            text: "Here goes....",
            button: [
                { chatID: 83, text: "...", callback: "spinBottleEva" }
            ]
        },
        {
            chatID: 83,
            speaker: "eva",
            text: "Oh good I needed a drink.",
            button: [
                { chatID: 84, text: "...", callback: "bg evaEmpty evaDrink lolaSit" }
            ]
        },
        {
            chatID: 84,
            speaker: "eva",
            text: "So my secret is that I love it when someone licks my butthole from behind. It sends little electric feelings " +
                "up my spine!",
            button: [
                { chatID: 85, text: "...", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 85,
            speaker: "lola",
            text: "Yes you do! I mean... uh whaaa, the bottle's empty",
            button: [
                { chatID: 86, text: "Oh no, we can still play", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 86,
            speaker: "eva",
            text: "Not going to happen pervert! You'll have to work harder to get me and " + sc.n('lola') + 
                " naked and making out with you. I'll spin the bottle one last time.",
            button: [
                { chatID: 87, text: "...", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 87,
            speaker: "lola",
            text: "Yeah, I'm starting to get tired too. One last spin.",
            button: [
                { chatID: 88, text: "...", callback: "topbg evaTop lolaTop" }
            ]
        },
        {
            chatID: 88,
            speaker: "eva",
            text: "Spinning....",
            button: [
                { chatID: 89, text: "...", callback: "spinBottleEva" }
            ]
        },
        {
            chatID: 89,
            speaker: "lola",
            text: "Hmmmmm, kiss " + sc.n('eva') + " or strip....",
            button: [
                { chatID: 90, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 90,
            speaker: "eva",
            text: "I don't think " + sc.n("me") + " has earned the right to see your panties yet. ",
            button: [
                { chatID: 91, text: "...", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 91,
            speaker: "lola",
            text: "You're right " + sc.n('eva') + " pucker up!",
            button: [
                { chatID: 92, text: "...", callback: "bothKiss" }
            ]
        },
        {
            chatID: 92,
            speaker: "eva",
            text: "MMmmmmmm so yummy!",
            button: [
                { chatID: 93, text: "...", callback: "" }
            ]
        },
        {
            chatID: 93,
            speaker: "lola",
            text: "You taste like strawberries.....",
            button: [
                { chatID: 94, text: "...", callback: "evaSit lolaTalk" }
            ]
        },
        {
            chatID: 94,
            speaker: "lola",
            text: "That was fun. We'll have to do it agian some time. ",
            button: [
                { chatID: 95, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 95,
            speaker: "eva",
            text: "Yeah pervert. It's time for us to get ready for bed. ",
            button: [
                { chatID: -1, text: "I had fun too, good night", callback: "spinEnd" }
            ]
        }
    ];

    return cArray[chatID];
}