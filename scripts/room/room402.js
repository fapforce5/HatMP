//Fashionable Male
var room402 = {};
room402.main = function () {
    if (g.internal === "purchased") {
        nav.bg("402_mens/jada1.jpg");
        if (sc.getstep("jada") < 2) {
            chat(3, 402);
        }
        else {
            chat(2, 402);
        }
    }
    else {
        g.internal = "";
        if (sc.getstep("me") < 7) {
            chat(0, 402);
        }
        else if (sc.getstep("me") > 7) {
            nav.button({
                "type": "btn",
                "name": "change",
                "left": 1222,
                "top": 110,
                "width": 653,
                "height": 675,
                "image": "402_mens/change.png"
            }, 402);
            nav.button({
                "type": "btn",
                "name": "jada",
                "left": 498,
                "top": 87,
                "width": 584,
                "height": 993,
                "image": "402_mens/jada.png"
            }, 402);
        }
        var navList = [400];
        //$.each(btnList, function (i, v) {
        //    nav.button(v, 402);
        //});
        nav.buildnav(navList);
    }
};

room402.btnclick = function (name) {
    switch (name) {
        case "change":
            g.pass = "bra";
            char.room(401);
            break;
        case "jada":
            chat(1, 402);
            break;
        case "plug":
            nav.bg("402_mens/jada3.jpg");
            nav.killbutton("plug");
            chat(9, 402);
            break;
        case "butthole":
            nav.killbutton("butthole");
            nav.button({
                "type": "tongue",
                "name": "butthole1",
                "left": 927,
                "top": 476,
                "width": 119,
                "height": 119,
                "image": "402_mens/bhole1.png"
            }, 402);
            break;
        case "butthole1":
            nav.killbutton("butthole1");
            nav.button({
                "type": "tongue",
                "name": "butthole2",
                "left": 927,
                "top": 476,
                "width": 119,
                "height": 119,
                "image": "402_mens/bhole2.png"
            }, 402);
            break;
        case "butthole2":
            nav.killbutton("butthole2");
            nav.button({
                "type": "tongue",
                "name": "butthole3",
                "left": 927,
                "top": 476,
                "width": 119,
                "height": 119,
                "image": "402_mens/bhole3.png"
            }, 402);
            break;
        case "butthole3":
            nav.killbutton("butthole3");
            nav.button({
                "type": "img",
                "name": "butthole4",
                "left": 927,
                "top": 476,
                "width": 119,
                "height": 119,
                "image": "402_mens/bhole4.png"
            }, 402);
            chat(11, 402);
            break;
        default:
            break;
    }
};

room402.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(400);
            break;
        case "jada1":
            nav.bg("402_mens/jada1.jpg");
            break;
        case "jada2":
            g.mod("arousal", 50);
            nav.bg("402_mens/jada2.jpg");
            nav.button({
                "type": "btn",
                "name": "plug",
                "left": 966,
                "top": 476,
                "width": 39,
                "height": 76,
                "image": "402_mens/plug.png"
            }, 402);
            break;
        case "jada3":
            nav.killbutton("butthole4");
            nav.bg("402_mens/jada1.jpg");
            break;
        case "points":
            g.mod("sissy", 40);
            nav.button({
                "type": "tongue",
                "name": "butthole",
                "left": 927,
                "top": 476,
                "width": 119,
                "height": 119,
                "image": "402_mens/bhole.png"
            }, 402);
            break;
        case "plug":
            cl.add("buttplug", "s");
            char.room(400);
            break;
        default:
            break;
    }
};

room402.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "There's no way I'm going into this store!",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" }
            ]
        },
        {
            chatID: 1, 
            speaker: "jada",
            text: "Just here to look around right?",
            button: [
                { chatID: -1, text: "Oh yea... right", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "jada",
            text: "You're such a panty slut! I love it!",
            button: [
                { chatID: -1, text: "Sigh... I totally am", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "jada",
            text: "Oh My God! You're buying panties on your own! You know " + sc.n("jimmy") + " always said you were a bit girly...",
            button: [
                { chatID: 4, text: "Shhhhh! You don't have to be so loud!", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "jada",
            text: "What? Like everyone here doesn't already know. You're such a freak, I love it! So are you gay?",
            button: [
                { chatID: 5, text: "Whaaaa.... no no way.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "jada",
            text: "Hahaha. It's ok your secret is safe with me! I don't blame you, I love a big cock too. You know you're kinda cute, I bet all " +
            "the men try and fuck you.",
            button: [
                { chatID: 6, text: "No, I've never done that!", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "jada",
            text: "Really.... wait are you an anal virgin? You are aren't you.",
            button: [
                { chatID: 7, text: "I uhhh yes.", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "jada",
            text: "Anal is sooooo much fun! I love it when " + sc.n("jimmy") + " throws me over his bed, spits on my asshole and just uses me till " +
            "he fills me up! I just slide my panties back on and let it drip out all day! I love the feeling of being filled.",
            button: [
                { chatID: 8, text: "I didn't want to know that", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "jada",
            text: "Actually my ass is filled with his cum from this morning! I pluged it up so it doens't drip down my legs while I'm at work. " +
            "Want to see? It's ok, we're both girls!",
            button: [
                { chatID: -1, text: "...", callback: "jada2" }
            ]
        },
        {
            chatID: 9,
            speaker: "jada",
            text: "Oooops hahaha I shold've known his cum would leak out, it's been in there all morning. You can lick it if you want. " +
            "You look like the kind of girl that loves to lick cum straight from the ass!",
            button: [
                { chatID: 10, text: "Oh.. gross no way", callback: "jada1" },
                { chatID: -1, text: "Maybe just a taste", callback: "points" },
            ]
        },
        {
            chatID: 10,
            speaker: "jada",
            text: "That's ok, I know you'll learn to love cum! That plug is all yours now! When you wear it think of me! I've got to get back to work.",
            button: [
                { chatID: -1, text: "Oh thanks! See you later " + sc.n("jada") + ".", callback: "plug" },
            ]
        },
        {
            chatID: 11,
            speaker: "jada",
            text: "All done back there?",
            button: [
                { chatID: 12, text: "Oh yeah. I can still taste your ass and " + sc.n("jimmy") + "'s cum on my tongue!", callback: "jada3" },
            ]
        },
        {
            chatID: 12,
            speaker: "jada",
            text: "You're so fucking cute, I love it! That plug is all yours my fucking cum queen! I've got to get back to work. ",
            button: [
                { chatID: -1, text: "Thank you for lunch!", callback: "plug" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};