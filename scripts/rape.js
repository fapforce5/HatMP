var fame = {};
fame.rapechar;
fame.rapereset = false;

fame.event = function () {
    var rapeDay = [303, 451, 525, 750];
    var rapeNight = [225, 303, 451, 525, 750, 900];
    var isRape;
    if (g.isNight()) 
        isRape = rapeNight.includes(g.roomID);
    else
        isRape = rapeDay.includes(g.roomID);

    var thisFame = gv.get("fame");
    var appearance = cl.appearance() * 16;
    if (Math.random() < ((thisFame + appearance) / 400)) {
        if (!isRape) {
            var char = fame.charList();
            var chatAr = fame.getChat(char.nice);
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": char.left,
                "top": char.top,
                "width": char.width,
                "height": char.height,
                "title": char.title,
                "image": char.image
            }, 1);

            privateChat.makeChat({
                chatID: 13,
                speaker: "random",
                text: chatAr.t,
                button: [
                    { chatID: -1, text: chatAr.r, callback: "killFame" },
                ]
            }, 999, 1);
        }
        else {
            if (!fame.rapereset) {
                fame.rapereset = true;
                fame.rapechar = fame.getRapeChar();
                fame.position0(fame.rapechar);
            }
            else {
                fame.rapereset = false;
            }
        }
    }
    return null;
};

fame.charList = function () {
    var rapeList = [
        {
            left: 857,
            top: 69,
            width: 524,
            height: 1011,
            image: "1001_rand/girl1.png",
            title: "A nice young lady",
            nice: true,
        },
        {
            left: 800,
            top: 193,
            width: 445,
            height: 887,
            image: "1001_rand/femboy1.png",
            title: "A nice young femboy",
            nice: true
        },
        {
            left: 815,
            top: 61,
            width: 508,
            height: 1019,
            image: "1001_rand/man1.png",
            title: "A cocky man",
            nice: false
        },
        {
            left: 908,
            top: 191,
            width: 339,
            height: 889,
            image: "1001_rand/girl2.png",
            title: "Bitchy Teen",
            nice: false
        },
        {
            left: 855,
            top: 173,
            width: 371,
            height: 907,
            image: "1001_rand/man2.png",
            title: "Is it a CIS man or FTM man? We'll never know.",
            nice: true
        },
        {
            left: 920,
            top: 148,
            width: 465,
            height: 932,
            image: "1001_rand/girl3.png",
            title: "Drunk Bitch",
            nice: false
        },
        {
            left: 900,
            top: 127,
            width: 342,
            height: 953,
            image: "1001_rand/man3.png",
            title: "Transistioning man",
            nice: true
        },
        {
            left: 703,
            top: 73,
            width: 812,
            height: 1007,
            image: "1001_rand/man4.png",
            title: "Transistioning man",
            nice: true
        },


    ];
    return rapeList[Math.floor(Math.random() * rapeList.length)];
};

fame.getChat = function (isNice) {
    var thisAppearance = cl.appearance();
    var smallcock = cl.c.cock > 2;
    var bigcock = cl.c.cock < 2;
    var sexy = thisAppearance > 2;
    var manly = thisAppearance < 1;
    var chatlist;
    if (isNice) {
        chatlist = [
            {
                t: "You are so very hot and sexy! ",
                r: "You are sexy too!"
            },
            {
                t: "I've been watching you for some time. I hope it's not spooky, but you always make me happy " +
                    "when I catch your gaze. ",
                r: "Not spooky at all. You make me happy too! "
            },
        ];
        if (smallcock) {
            chatlist.push({
                t: "You have the cutest little pp! ",
                r: "Oh. It's not that small is it? "
            });
        }
        else if (bigcock) {
            chatlist.push({
                t: "You're the one with the huge cock? I'm so jelly! ",
                r: "Thanks. I use it well! "
            });
        }
        if (bigcock && manly) {
            chatlist.push({
                t: "Dude! I've heard about your cock! You must slay lots of pooty-tang with that with that giant thang! ",
                r: "Totally! "
            });
            chatlist.push({
                t: "A sexy body and huge penis! You are the man, man!",
                r: "I am the man! "
            });
        }
        if (sexy) {
            chatlist.push({
                t: "You are one hot chick! I want to take you home and keep you in my basement forever! ",
                r: "oh. no."
            });
            chatlist.push({
                t: "Your tits are so soft and squishy! I want to squeeze them and suck 'em. ",
                r: "Drink up baby! "
            });
        }
        
    }
    else {
        chatlist = [
            {
                t: "I've heard about you. You're that nasty easy slut. ",
                r: "Oh. I hate all the rumors being passed about me. "
            },
            {
                t: "Hey slut! I bet you want to fuck. I just don't fuck sissies. Too easy. ",
                r: "Well I don't want to fuck you either! "
            },
        ];
        if (smallcock) {
            chatlist.push({
                t: "Hahaha! You're the one with the tiny dick? You look like someone that's not packing! ",
                r: "Hey!"
            });
            chatlist.push({
                t: "I heard your dick was smaller than a clit! You should be a chick with dick that small! ",
                r: "I really should..."
            });
            chatlist.push({
                t: "TINY DICK, TINY DICK! You have a tiny dick. 🤏🤏🤏 ",
                r: "Not so loud! Shhhh."
            });
        }
        else if (manly) {
            chatlist.push({
                t: "You might look like a dude, but I heard you act like a bitch! ",
                r: "What was that about!"
            });
        }
        else if (sexy) {
            chatlist.push({
                t: "You dress like you want to get raped in the asshole. ",
                r: "I do. I really do."
            });
            chatlist.push({
                t: "You dress like some kind of gutter slut. Trash like you should be left in the dumpster. ",
                r: "That was harsh. "
            });
        }
        else if (cl.c.cumface) {
            chatlist.push({
                t: "Oh gross. Is that cum on your face. Go wash up! ",
                r: "Well this is embarrassing. "
            });
            chatlist.push({
                t: "Sorry, there appears to be something on your face... Is that cum? What kind of sick pervert " +
                    "walks around with cum on their face? You need to go clean up. ",
                r: "Oh no. I forgot to wash up. "
            });
        }
    }
    return chatlist[Math.floor(Math.random() * chatlist.length)];
};

fame.getRapeChar = function () {
    var charList = ["man1", "dom1", "man2", "man3"];
    return charList[Math.floor(Math.random() * charList.length)];
}

fame.position0 = function (char) {
    nav.killall();
    var txt = "";
    switch (char) {
        case "man1":
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 750,
                "top": 28,
                "width": 379,
                "height": 1052,
                "title": "Take it slut!",
                "image": "1001_rand/rap_man0.png"
            }, 1);
            txt = "What's a slut like you doing all alone in a place like this? ";
            break;
        case "dom1":
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 829,
                "top": 27,
                "width": 455,
                "height": 1053,
                "title": "Take it slut!",
                "image": "1001_rand/rap_dom0.png"
            }, 1);
            txt = "What's a slut like you doing all alone in a place like this? ";
            break;
        case "man2":
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 750,
                "top": 19,
                "width": 634,
                "height": 1061,
                "title": "Fat man with a stick",
                "image": "1001_rand/rap_man_10.png"
            }, 1);
            txt = "What's a slut like you doing all alone in a place like this? ";
            break;
        case "man3":
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 952,
                "top": 64,
                "width": 417,
                "height": 1016,
                "title": "Psycho business man",
                "image": "1001_rand/rap_man_20.png"
            }, 1);
            txt = "I want to stab you to death and play around with your blood... maybe fucking your face will do. ";
            break;
    };
    privateChat.makeChat({
        chatID: 13,
        speaker: "random",
        text: txt,
        button: [
            { chatID: -1, text: "Fight back (dice) (upper + lower strength)", callback: "fight1" },
            { chatID: -1, text: "Talk your way out (dice) (charisma)", callback: "run1" },
            { chatID: -1, text: "Bend over you slut (check for anal / rape)", callback: "rape1" },
        ]
    }, 999, 1);
};

fame.position1 = function (char) {
    switch (char) {
        case "man1":
            zcl.assup(650, 500, .7, "");
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 482,
                "top": 104,
                "width": 1280,
                "height": 976,
                "title": "Take it slut!",
                "image": "1001_rand/rap_man1.png"
            }, 1);
            txt = "Ow ow ow.. It hurts so much! Why are you raping my ass mister?";
            break;
        case "dom1":
            zcl.assup(650, 500, .7, "");
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 246,
                "top": 75,
                "width": 1483,
                "height": 988,
                "title": "Dominatrix",
                "image": "1001_rand/rap_dom1.png"
            }, 1);
            txt = "It's so thick! You're tearing my ass open. Please stop, it hurts!";
            break;
        case "man2":
            zcl.assup(650, 500, .7, "");
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 346,
                "top": 0,
                "width": 1160,
                "height": 1080,
                "title": "Fat man with a stick",
                "image": "1001_rand/rap_man_11.png"
            }, 1);
            txt = "Please don't hurt me! I'll do what ever you want.";
            break;
        case "man3":
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 505,
                "top": 0,
                "width": 709,
                "height": 1080,
                "title": "Mouth full of his cock.",
                "image": "1001_rand/rap_man_21.png"
            }, 1);
            zcl.kneelRedux(370, 600, .35, "", true);
            txt = "Gggghhm mmmMMggggg gag.";
            break;
    };
    privateChat.makeChat({
        chatID: 13,
        speaker: "me",
        text: txt,
        button: [
            { chatID: -1, text: "...", callback: "rape2" },
        ]
    }, 999, 1);
};

fame.position2 = function (char) {
    switch (char) {
        case "man1":
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 705,
                "top": 714,
                "width": 672,
                "height": 366,
                "title": "",
                "image": "1001_rand/rap_man12.png"
            }, 1);
            txt = "There's so much cum leaking out of me. Ugh.";
            break;
        case "dom1":
            zcl.bent(400, 600, .7, "open");
            txt = "My bussy is so sore!";
            break;
        case "man2":
            zcl.bent(400, 600, .7, "cum");
            txt = "I'm so glad he didn't hurt me. ";
            break;
        case "man3":
            zcl.kneelRedux(370, 600, .35, "", true);
            nav.button({
                "type": "img",
                "name": "fameRandomEvent",
                "left": 891,
                "top": 0,
                "width": 670,
                "height": 1080,
                "image": "1001_rand/rap_man_22.png"
            }, 1);
            txt = "GLURB.";
            break;
    };
    privateChat.makeChat({
        chatID: 13,
        speaker: "me",
        text: txt,
        button: [
            { chatID: -1, text: "...", callback: "rape3" },
        ]
    }, 999, 1);
};