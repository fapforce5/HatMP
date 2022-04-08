//Room name
var room725 = {};
room725.main = function () {
    if (cl.isLewd()) {
        nav.bg("725_club/no.jpg");
        chat(17, 725);
    }
    else {
        if (sc.getstep("chloe") < 3 && !g.get("chloe")) {
            g.pass = "";
            nav.button({
                "type": "btn",
                "name": "chloe",
                "left": 1131,
                "top": 154,
                "width": 402,
                "height": 926,
                "image": "725_club/chloe.png"
            }, 725);
        }
        var navList = [0, 726, 727];

        nav.buildnav(navList);
    }
};

room725.btnclick = function (name) {
    switch (name) {
        case "chloe":
            if (sc.getstep("chloe") === 0) {
                if (sc.getstep("zoey") < 3)
                    chat(0, 725);
                else
                    chat(3, 725);
            }
            else
                chat(3, 725);
                
            break;
        case "chloe4":
            nav.killall();
            nav.bg("727_bathroom/toilet.jpg");
            nav.button({
                "type": "img",
                "name": "chloe",
                "left": 431,
                "top": 0,
                "width": 1200,
                "height": 1080,
                "image": "725_club/chloe5.gif"
            }, 725);
            g.roomTimeout = setTimeout(function () {
                chat(12, 725);
            }, 1000);
            break;
        default:
            break;
    }
};

room725.chatcatch = function (callback) {
    switch (callback) {
        case "chloeGone":
            g.setflag("chloe");
            nav.killbutton("chloe");
            break;
        case "chloe1":
            nav.killbutton("chloe");
            nav.bg("727_bathroom/toilet.jpg");
            nav.button({
                "type": "btn",
                "name": "chloe",
                "left": 639,
                "top": 0,
                "width": 719,
                "height": 1080,
                "image": "725_club/chloe1.png"
            }, 725);
            break;
        case "chloe2":
            if (cl.c.chastity !== null) {
                nav.modbutton("chloe", "725_club/chloe2.png", null, null);
                chat(7, 725);
            }
            else if (cl.c.cock > 2) {
                nav.modbutton("chloe", "725_club/chloe2.png", null, null);
                chat(8, 725);
            }
            else {
                nav.killall();
                nav.bg("725_club/chloe3.jpg");
                chat(10, 725);
            }
            break;
        case "chloe2bad":
            sc.setstep("chloe", 1);
            g.setflag("chloe");
            char.room(725);
            break;
        case "chloe4":
            nav.killall();
            nav.bg("725_club/chloe4.jpg");
            nav.button({
                "type": "btn",
                "name": "chloe4",
                "left": 945,
                "top": 512,
                "width": 174,
                "height": 174,
                "image": "725_club/chloe4.png"
            }, 725);
            break;
        case "chloe6":
            nav.killall();
            nav.bg("725_club/chloe6.jpg");
            break;
        case "chloe7":
            nav.bg("727_bathroom/toilet.jpg");
            nav.button({
                "type": "btn",
                "name": "chloe",
                "left": 639,
                "top": 0,
                "width": 719,
                "height": 1080,
                "image": "725_club/chloe2.png"
            }, 725);
            break;
        case "zoey8":
            sc.setstep("chloe", 2);
            char.addtime(60);
            g.setflag("chloe");
            char.room(725);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room725.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "chloe",
            text: "Hello?",
            button: [
                { chatID: 1, text: "Hi I'm " + sc.n("me") + " and I just wanted to meet you!" , callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "chloe",
            text: sc.n("me") + "? Do you know " + sc.n("zoey") + "?",
            button: [
                { chatID: 2, text: "I do! She's my best friend!", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "chloe",
            text: "Small world. I'm actually dating her right now!",
            button: [
                { chatID: 3, text: "Oh wow!", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "chloe",
            text: "So what's up " + sc.n("me") + "?",
            button: [
                { chatID: 5, text: "Me, and by me, I mean my penis is up, 'cause it's hard, 'cause I want to have the sex with you...", callback: "" },
                { chatID: 4, text: "Oh not much. Just checking out the bar. ", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "chloe",
            text: "Cool. Well I'm going to say hi to a friend of mine. I'll catch you later. ",
            button: [
                { chatID: -1, text: "Cool, later.", callback: "chloeGone" }
            ]
        },
        {
            chatID: 5,
            speaker: "chloe",
            text: "Well you're as awkward as " + sc.n("zoey") + " said, but lucky for you I could use some dick right now. " +
                "Follow me to the bathrooms",
            button: [
                { chatID: 6, text: "Nice", callback: "chloe1" }
            ]
        },
        {
            chatID: 6,
            speaker: "chloe",
            text: "OK big boy, let's see that cock of yours!",
            button: [
                { chatID: -1, text: "Pull out your dick", callback: "chloe2" }
            ]
        },
        {
            chatID: 7,
            speaker: "chloe",
            text: "How am I supposed to fuck that? It's in a cage you loser. I'm going to find a real man to fuck me!",
            button: [
                { chatID: 9, text: "Sad sissy noises", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "chloe",
            text: "Hahaha, I'm not going to fuck you, you small dick loser. When you grow a real cock call me. ",
            button: [
                { chatID: 9, text: "Sad sissy noises", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "chloe",
            text: "That's why you and " + sc.n("zoey") + " are only friends. You'll never get a girl with that pathetic dicklette. " +
                "Fuck out of here. ",
            button: [
                { chatID: -1, text: "...", callback: "chloe2bad" }
            ]
        },
        {
            chatID: 10,
            speaker: "chloe",
            text: "I love your cock! It tastes like sex! I need that in me now!",
            button: [
                { chatID: 11, text: "...", callback: "chloe4" }
            ]
        },
        {
            chatID: 11,
            speaker: "chloe",
            text: "Shove it in me and don't be nice!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "chloe",
            text: "Oh fuck! Make me drip your cum!",
            button: [
                { chatID: 13, text: "...", callback: "chloe6" }
            ]
        },
        {
            chatID: 13,
            speaker: "chloe",
            text: "I am soooo full! You're one great fuck!",
            button: [
                { chatID: 14, text: "I know", callback: "chloe7" }
            ]
        },
        {
            chatID: 14,
            speaker: "chloe",
            text: "So we can NEVER tell " + sc.n("zoey") + " what happened! This is our little secrect we must keep till we die or " +
                "it will just kill " + sc.n("zoey") + "!",
            button: [
                { chatID: 15, text: "I won't tell her, I promise!", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "chloe",
            text: "I won't either. She knows I'm a player, but there's no way she would ever forgive either of us.",
            button: [
                { chatID: 16, text: "I know. It would just kill her.", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "chloe",
            text: "I'm going to go find " + sc.n("zoey") + ". She's going to eat me dirty pussy. Just thinking about it makes me " +
                "horny again! Catch you later!",
            button: [
                { chatID: -1, text: "Oh damn... bye", callback: "zoey8" }
            ]
        },
        {
            chatID: 17,
            speaker: "random",
            text: "I can't decide if I'm going to fuck you or kick you out. But my boss would fire me if I let you in, so " +
                "you need to go. ",
            button: [
                { chatID: -1, text: "Oh damn... bye", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};