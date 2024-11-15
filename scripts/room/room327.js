//Room name
var room327 = {};
room327.main = function () {
    var kinseyStep = sc.taskGetStep("kinsey", "milk");
    if (kinseyStep === 4) {
        g.internal = false;
        nav.button({
            "type": "btn",
            "name": "getmilked",
            "left": 400,
            "top": 232,
            "width": 470,
            "height": 605,
            "image": "327_milking/getmilked.png"
        }, 327);
        nav.button({
            "type": "btn",
            "name": "energy",
            "left": 1100,
            "top": 285,
            "width": 511,
            "height": 511,
            "image": "327_milking/energy.png"
        }, 327);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "getmilked",
                "left": 726,
                "top": 232,
                "width": 470,
                "height": 605,
                "image": "327_milking/getmilked.png"
            }
        ];

        $.each(btnList, function (i, v) {
            nav.button(v, 327);
        });
    }
    var navList = [0];
    nav.buildnav(navList);
};

room327.btnclick = function (name) {
    switch (name) {
        case "getmilked":
            if (false) {//sc.getstep("envy") > 15) {
                nav.killall();
                nav.bg("327_milking/trio_bg.jpg");
                nav.button({
                    "type": "btn",
                    "name": "envy",
                    "left": 0,
                    "top": 0,
                    "width": 792,
                    "height": 1080,
                    "image": "327_milking/trio_envy.png"
                }, 327);
                nav.button({
                    "type": "img",
                    "name": "itsame",
                    "left": 466,
                    "top": 78,
                    "width": 1332,
                    "height": 1002,
                    "image": "327_milking/trio_me.png"
                }, 327);
                nav.button({
                    "type": "btn",
                    "name": "chat",
                    "left": 1291,
                    "top": 193,
                    "width": 629,
                    "height": 887,
                    "image": "327_milking/trio_kinsey.png"
                }, 327);
            }
            else {
                nav.killall();
                nav.bg("327_milking/m1.jpg");
                nav.button({
                    "type": "btn",
                    "name": "chat",
                    "left": 1254,
                    "top": 110,
                    "width": 666,
                    "height": 970,
                    "image": "327_milking/chat.png"
                }, 327);
                nav.button({
                    "type": "btn",
                    "name": "milk",
                    "left": 907,
                    "top": 109,
                    "width": 156,
                    "height": 487,
                    "image": "327_milking/milk.png"
                }, 327);
            }
            break;
        case "milk":
            nav.killbutton("milk");
            
            chat(999, 327);
            break;
        case "chat":
            nav.killbutton("milk");
            switch (sc.taskGetStep("kinsey", "milk")) {
                case -1:
                    sc.startMission("kinsey", "milk");
                    sc.completeMissionTask("kinsey", "milk", 0);
                    chat(1, 327);
                    break;
                case 1:
                    sc.completeMissionTask("kinsey", "milk", 1);
                    chat(3, 327);
                    break;
                case 2:
                    sc.completeMissionTask("kinsey", "milk", 2);
                    chat(6, 327);
                    break;
                case 3:
                    sc.completeMissionTask("kinsey", "milk", 3);
                    chat(8, 327);
                    break;
                case 4:
                    chat(14, 327);
                    break;
                case 5:
                    chat(26, 327);
                    break;
            };
            break;
        case "envy":
            switch (sc.getstep("envy")) {
                case 16:
                    sc.setstep("envy", 17);
                    chat(27, 327);
                    break;
                case 17:
                    sc.setstep("envy", 18);
                    chat(30, 327);
                    break;
                case 18:
                    chat(34, 327);
                    break;
            }
            break;
        case "energy":
            if (inv.has("soda")) {
                if (levels.get("anal").l < 6) {
                    //nav.killbutton("energy");
                    chat(16, 327);
                }
                else {
                    nav.killall();
                    g.internal = true;
                    nav.bg("327_milking/energy.jpg");
                    sc.completeMissionTask("kinsey", "milk", 4);
                    inv.use("soda");
                    chat(17, 327);
                }
            }
            else
                chat(15, 327);
            break;
        default:
            break;
    }
};

room327.chatcatch = function (callback) {
    switch (callback) {
        case "m2":
            nav.killall();
            nav.bg("327_milking/m2.jpg");
            break;
        case "milkend":
            gv.mod("money", 50);
            gv.set("milk", 0);
            char.addtime(120);
            char.room(0);
            break;
        case "kend":
            chat(999, 327);
            break;
        //case "killbtns":
        //    nav.killbutton("buttdisplay");
        //    break;
        case "kinsey40":
            nav.bg("327_milking/energy0.jpg");
            break;
        case "kinsey41":
            nav.bg("327_milking/m1.jpg");
            nav.button({
                "type": "btn",
                "name": "chat",
                "left": 1254,
                "top": 110,
                "width": 666,
                "height": 970,
                "image": "327_milking/chat.png"
            }, 327);
            break;
        case "kinsey42":
            nav.killall();
            nav.bg("327_milking/energy1.jpg");
            break;
        default:
            break;
    }
};

room327.chat = function (chatID) {
    if (chatID === 999) {
        var chararr = [
            "Oh wow, this really hurts my nipples!",
            "La da da da, milking my boobs",
            "Moooo. I'm a cow now.",
            "FUCK! My nips are sore",
            "I wonder who put the bomp in the bomp-de-bomp?",
            "I hope my boobs don't turn into pancakes if I get milked too much",
            "OOoooooo why does it have to pull to hard to get the milk out?",
            "If I ate nothing but chocolate would I make chocolate milk?",
            "Is a lady bug a lady in other languages?",
            "I wonder if I would be happy just living in a cow pasture getting milked? Would I have to get fucked by a bull?",
            "If I end up in heaven or hell, would my boobs still make milk?",
            "If I did half milk and half cum, would it taste like milk or cum?",
            "If a horse came in me enough times would I be able to make a centaur?",
            "I wonder which is bigger, the smallest penis in the world, or the biggest clit in the world?",
            "I wonder if sissy milk tastes sweeter than regular milk?",
            "Being a cow wouldn't be all bad. I would still need to get fucked sometimes. ",
            "I heard donkey cum is sweet. I wonder if I could live off just donkey cum and vitamins. ",
            "I wonder who had the most cum in their butt in all of history, and is that on video?",
            "If someone pees in your ass, do you absorb that and they pee in now floating around your body?"
        ];
        return {
            chatID: 999,
            speaker: "thinking",
            text: chararr[Math.floor(Math.random() * chararr.length)],
            button: [
                { chatID: 0, text: "...", callback: "m2" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "rachel",
            text: "A great milking for me, and $50 for you. Good job li'l girl. ",
            button: [
                { chatID: -1, text: "thanks", callback: "milkend" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "So. How long you have you been here?",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "kinsey",
            text: "Mooooooo",
            button: [
                { chatID: -1, text: "Ok....", callback: "kend" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "So are you down to talk today? ",
            button: [
                { chatID: 4, text: "....", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "kinsey",
            text: "Moooooo, is that what you want to hear? ",
            button: [
                { chatID: 5, text: "Just trying to make small talk.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "kinsey",
            text: "Fucking Mooooo bitch",
            button: [
                { chatID: -1, text: "ok.", callback: "kend" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "I'm not talking to you.",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "kinsey",
            text: "Well I'm not talking to Moooo either",
            button: [
                { chatID: -1, text: "...", callback: "kend" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "...",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "kinsey",
            text: "...",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "kinsey",
            text: "Ok. What do you want from me?",
            button: [
                { chatID: 11, text: "Just trying to be nice. Get to know you.", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "kinsey",
            text: "Well if you want to know me, know I've been stuck here for over 5 months now. I don't even " +
                "know if my feet work anymore since I have stood on them since then! I was just trying to make " +
                "some money when I stopped lactating. It was just a little cow milk! This is such shit! ",
            button: [
                { chatID: 12, text: "Do you want me to talk to the police?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "kinsey",
            text: "HAHAHAHAHA. The police are the ones that grabbed me up and put me here! They are worse than " +
                "Rachel. If you really want to help you'll bring me an energy drink next time you come in. ",
            button: [
                { chatID: 13, text: "I can get an energy drink. How am I supposed to get it in here? ", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "kinsey",
            text: "I don't know, shove it up your ass? Fuck off. ",
            button: [
                { chatID: -1, text: "I'll do that!", callback: "kend" }
            ]
        },
        {
            chatID: 14,
            speaker: "kinsey",
            text: "If you really give a shit, get me an energy drink. ",
            button: [
                { chatID: -1, text: "I'll do that!", callback: "kend" }
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "Oh yeah. I need to get soda from Spanky. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "There's no way this giant can is fitting in my asshole. I need to stretch it more! ",
            button: [
                { chatID: -1, text: "[Need anal level 6]", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "I'll just shove this can of soda up my sissy ass... Hnnnnghhhh ",
            button: [
                { chatID: 18, text: "...", callback: "kinsey40" }
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Oooooo my. Got it in. Now to head down to my milking and give it Kinsey. ",
            button: [
                { chatID: 19, text: "...", callback: "kinsey41" }
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "Hey Kinsey. Psst. I got a treat for you. ",
            button: [
                { chatID: 20, text: "...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "kinsey",
            text: "Will you just leave me alone. I have enough problems without you blabbering in my ear all the time. ",
            button: [
                { chatID: 21, text: "but, I brought you an energy drink. ", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "kinsey",
            text: "What? Really? Are you for real? Where's it at? ",
            button: [
                { chatID: 22, text: "I hid it in my butt. Do you want me to get it for you?  ", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "kinsey",
            text: "I'll get in trouble if I drink it out here. You'll have to hide it in my ass so I can drink it when I go back to " +
                "the stables tonight. Shove it in quick before they come back.  ",
            button: [
                { chatID: 23, text: "Shove the can of energy drink in Kinsey's ass ", callback: "kinsey42" }
            ]
        },
        {
            chatID: 23,
            speaker: "kinsey",
            text: "OOooooohhhhhh yeah Shove it in!",
            button: [
                { chatID: 24, text: "... ", callback: "kinsey41" }
            ]
        },
        {
            chatID: 24,
            speaker: "kinsey",
            text: "My ass is so full! My pussy is going to be a drippy mess keeping that can in me all day till I can pull it " +
                "out tonight. That's the nicest thing anyone has done for me. I don't know what to say. I thought you were " +
                "just one of them. ",
            button: [
                { chatID: 25, text: "I'm not one of them. Just wanted to be nice. ", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "kinsey",
            text: "You are one of the nice ones. I'm sorry I was so mean to you. ",
            button: [
                { chatID: 0, text: "I get it. I'm almost done with my milking. Rachel will be by any moment. ", callback: "m2" }
            ]
        },
        {
            chatID: 26,
            speaker: "kinsey",
            text: "That's it for this release. More in the future",
            button: [
                { chatID: 999, text: "...", callback: "m2" }
            ]
        },
        {
            chatID: 27,
            speaker: "envy",
            text: "I'm sooooo glad you brought me here! Not only do I get to be a Hucow at night they take me to the barn " +
                "and the farm hands and security guards fuck all my holes! Drake said I'm way better than " + sc.n("kinsey") +
                " at taking cock and not complaining! ",
            button: [
                { chatID: 28, text: "...", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "kinsey",
            text: "I'm glad you're here too. I get so tired of being used by everyone in the barn, it's nice having another " +
                "hucow around, and your pussy tastes sweet, even after taking all those cocks. ",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "envy",
            text: "I love your pussy too! I've never had a girlfriend before, but you're the best!  ",
            button: [
                { chatID: 999, text: "...", callback: "m2" }
            ]
        },
        {
            chatID: 30,
            speaker: "envy",
            text: "You'll never believe what we did last night! " + sc.n("kinsey") + " was talking back to Drake saying " +
                "he was too rough, so I said to Drake just fuck my ass tonight. So he said I'm too easy, he likes a challenge, " +
                "so " + sc.n("kinsey") + " said Drake's biggest challenge was to get laid with that ugly face. So he got so mad! " +
                "He said he was going to punish both of us! ",
            button: [
                { chatID: 31, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "envy",
            text: "So he tied us up together facing each other with a dildo in both of us and covered us in iching powder. He said " +
                "he would only scratch our ichies if " + sc.n("kinsey") + " begged for all their cocks in her ass. I was so itchy " +
                "I begged them all to fuck me, but Drake said " + sc.n("kinsey") + " had to beg. I told her she didn't have to, " +
                "but my entire body was crawling. I didn't think she was going to do it. She said they could all fuck themselves " +
                "but after an hour we were rubbing each other to get some relief, but it was no use. ",
            button: [
                { chatID: 32, text: "...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "envy",
            text: "She begged, but they said it wasn't good enough, so she had to scream for each cock to fuck her ass. They even " +
                "shoved two at a time in her. She's such a champ! After they were all done they even let me eat the cum out of her " +
                "ass and a couple of them fucked me so I wasn't left out. I hope they let us sleep tonight. I'm so tired. ",
            button: [
                { chatID: 33, text: "Oh wow. Are you ok " + sc.n("kinsey") + "?", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "kinsey",
            text: "I fucking hate Drake. ",
            button: [
                { chatID: 999, text: "Oh. Me too. ", callback: "m2" }
            ]
        },
        {
            chatID: 34,
            speaker: "envy",
            text: "More to cum in a future release ",
            button: [
                { chatID: 999, text: "...", callback: "m2" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};