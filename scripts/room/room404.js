//Room name
var room404 = {};
room404.main = function () {
    if (cl.isLewd()) {
        chat(3, 404);
    }
    var btnList = [
        {
            "type": "btn",
            "name": "spanky",
            "left": 962,
            "top": 80,
            "width": 568,
            "height": 909,
            "image": "404_spankys/spanky.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 404);
    });
    nav.buildnav(navList);
    if (sc.getstep("envy") === 100) {
        chat(4, 404);
    }
};

room404.btnclick = function (name) {
    switch (name) {
        case "spanky":
            if (sc.getstep("spanky") === 0)
                chat(0, 404);
            else {
                g.pass = "general";
                char.room(401);
            }
            break;
        default:
            break;
    }
};

room404.chatcatch = function (callback) {
    switch (callback) {
        case "purchase":
            sc.setstep("spanky", 1);
            g.pass = "general";
            char.room(401);
            break;
        case "envy100":
            sc.setstep("envy", 101);
            g.set("spankyprices", true);
            char.addtime(60);
            char.room(0);
            break;
        default:
            break;
    }
};

room404.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "spanky",
            text: "**cough** **cough** What the fuck you want. ",
            button: [
                { chatID: 1, text: "Buy some shit dumbass", callback: "" },
                { chatID: 2, text: "I would like to purchase some of your wares", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "spanky",
            text: "Oh yea",
            button: [
                { chatID: -1, text: "[Buy some shit]", callback: "purchase" }
            ]
        },
        {
            chatID: 2,
            speaker: "spanky",
            text: "huh. we ain't got wares dumb fuck. Piss off",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "spanky",
            text: "That's what I'm talking about! You make a sexy slut!",
            button: [
                { chatID: -1, text: "Thank you!", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Hey man, you've really got to help me out! I'm in a total bind! I told " + sc.n("envy") + " about " +
                "those tapes of yours and she's complaining she can't stop masturbating. How do I undo it? She's totally " +
                "pissed. ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "spanky",
            text: "Holy crap. You told her! You are the dumbest dude ever! I can't believe you would go and do something " +
                "so dumb and ruin my chances! It was all perfect, I, like, had you showing that slut the videos so she " +
                "would turn all slut and stuff, then I could stop by and fuck her however I wanted. Then you told her! " +
                "You ruined my life dude! I was going to spend the rest of my life with her, all fucking her when and " +
                "how I wanted. ",
            button: [
                { chatID: 6, text: "...dude, not cool. ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "spanky",
            text: "Don't tell me that's not cool. You showed her the tape so you could fuck her. Shit we could " +
                "both fuck her, but it's ruined. These tapes are hypno dude. It's not like a pill that only lasts " +
                "for a day. That's the beauty of hypno, it's forever. I could be fucking her till we're both old " +
                "and gross, but not anymore! ",
            button: [
                { chatID: 7, text: "So there isn't a way to reverse it? ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "spanky",
            text: "Fuck no idiot. How many tapes did you show her? ",
            button: [
                { chatID: 8, text: "Just the first one. ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "spanky",
            text: "Just the 'batin' one? Fuck. Well she's just always going to want flick her bean. That's who she " +
                "is now. You could try to get her one of those remote controlled vibrators so she can cum when she's " +
                "all horned up and shit I guess. Maybe I'll stop by and ask if she wants me to eat her pussy... You " +
                "didn't tell her where you got it from did you. ",
            button: [
                { chatID: 9, text: "...oh well maybe I told her it was from you...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "spanky",
            text: "Great! Just great! Now I'll never be able to fuck that light pussy slut! I'm never going to " +
                "work with you again! Also all my prices are triple from now on for you! No more deals for rats! " +
                "now get out of my store! ",
            button: [
                { chatID: -1, text: "Oh crap", callback: "envy100" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};