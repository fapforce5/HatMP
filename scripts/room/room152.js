//Room name
var room152 = {};
room152.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "butler",
            "left": 1051,
            "top": 228,
            "width": 321,
            "height": 852,
            "image": "152_slave/butler.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 152);
    });
    nav.buildnav(navList);
};

room152.btnclick = function (name) {
    switch (name) {
        case "butler":
            if (daily.get("jones")) {
                chat(18, 152);
            }
            else {
                switch (sc.getstep("jones")) {
                    case 0:
                    case 1:
                        chat(0, 152);
                        break;
                    case 2:
                        chat(17, 152);
                        break;
                }
            }
            break;
        default:
            break;
    }
};

room152.chatcatch = function (callback) {
    switch (callback) {
        case "inspect":
            cl.nude();
            if (cl.getBodyHair() !== null)
                chat(2, 152);
            else if (cl.c.chastity === null)
                chat(3, 152);
            else
                chat(999, 152);
            break;
        case "kicked":
            char.room(0);
            break;
        case "clean0":
            nav.killall();
            nav.bg("152_slave/clean0.jpg");
            break;
        case "clean1":
        case "clean2":
        case "clean3":
        case "clean4":
        case "clean5":
        case "clean6":
        case "clean8":
            nav.bg("152_slave/" + callback + ".jpg");
            break;
        case "clean7":
            gv.mod("giveOralMale", 1);
            gv.mod("loadSwollowed", 1);
            nav.bg("152_slave/" + callback + ".jpg");
            break;
        case "clean9":
            sc.setstep("jones", 2);
            daily.set("jones");
            char.addtime(180);
            nav.bg("150_jones/frontdoor.jpg", "150_jones/frontdoorNight.jpg");
            nav.button({
                "type": "img",
                "name": "butler",
                "left": 1083,
                "top": 452,
                "width": 211,
                "height": 260,
                "image": "152_slave/kickedout.png"
            }, 152);
            break;
        default:
            break;
    }
};

room152.chat = function (chatID) {
    if (chatID === 999) {
        var boobs = cl.c.chest < 4 ? "Your breasts are too small. " : "Your breasts are too big like some kind of bimbo. ";
        var butt = cl.c.butt < 3 ? "Your butt is tiny. You need to work on that. " : "You have the butt on a porn star, It's vile. ";
        return {
            chatID: 999,
            speaker: "butler",
            text: "Hmmmm, lets see here. " + boobs + butt + " Your face is quite ordinary, your feet are too big. I still have " +
                "no idea what the master sees in you. Grab the cleaning materials and clean the main room. Don't interact with " +
                "the master unless requested by him. ",
            button: [
                { chatID: 4, text: "He wants me to clean? ", callback: "" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "butler",
            text: "So you're the whore that wore the master's piss at the fashion show. You must be quite desperate " +
                "for attention to do such a dreadful act. A common trollop. ",
            button: [
                { chatID: 1, text: "Oh. That's me. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "butler",
            text: "I don't know why the master even bothers with you. There are attractive women of good blood lined " +
                "up for miles for the chance to date him. Why he wastes his time on someone like you is beyond me. But " +
                "the master is the master. Now strip down so I can inspect you. ",
            button: [
                { chatID: -1, text: "Proudly! ", callback: "inspect" }
            ]
        },
        {
            chatID: 2,
            speaker: "butler",
            text: "Master would not approve of such a hairy beast. It's disgusting. Shame upon you. Collect your self " +
                "and leave these premises. Go now. ",
            button: [
                { chatID: -1, text: "But I.... ", callback: "kicked" }
            ]
        },
        {
            chatID: 3,
            speaker: "butler",
            text: "That penis is ghastly. The master will dislike such a dreadful thing swinging around. Go put on " +
                "something to cover that like a chastity device. Blech.",
            button: [
                { chatID: -1, text: "But I.... ", callback: "kicked" }
            ]
        },
        {
            chatID: 4,
            speaker: "butler",
            text: "Of course. There is no better way to begin serving like doing the work of a house servent. Now " +
                "fetch the pail and feather duster and get to work. Remember no talking unless called by him. Now get" +
                "to work before I through you back into the streets from which you came. ",
            button: [
                { chatID: 5, text: "Well, ok", callback: "clean0" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I feel so awkward and weird. I'm just going to clean this room naked while he watches me. Who enjoys " +
                "watching someone clean. And why the hell am I cleaning his house naked. What is going on with me?",
            button: [
                { chatID: 6, text: "...", callback: "clean1" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I suppose I should get started. I'll start from the top with some dusting. I wonder if he's enjoying the " +
                "view of my butt. ",
            button: [
                { chatID: 7, text: "...", callback: "clean2" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Did he pull his dick out? Is he going to start jacking off now? Why isn't he hard. Maybe I should clean the " +  
                "floor with my sissy pussy pointed to him. I'll bet that gets him hard. ",
            button: [
                { chatID: 8, text: "...", callback: "clean3" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "It's rising! I knew my ass would turn him on. Everyone loves looking at my sissy pussy hole. Is he going to jack " +
                "off now or is he going to grab me and use my holes...",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "jones",
            text: "Come here and suck my dick. ",
            button: [
                { chatID: 10, text: "...", callback: "clean4" }
            ]
        },
        {
            chatID: 10,
            speaker: "jones",
            text: "I didn't say jack my dick. I said suck it. Now wrap your lips around my cock and suck it. ",
            button: [
                { chatID: 11, text: "ok", callback: "clean5" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "AAAKKkkkk It's hitting the back of my throat. I hope I don't gag. I wonder how long it will take before " +
                "he comes in my mouth? Oh no, I think I'm going to gag!",
            button: [
                { chatID: 12, text: "AAkkkkk *GAG*", callback: "clean6" }
            ]
        },
        {
            chatID: 12,
            speaker: "jones",
            text: "*Spits* Shut up bitch. Keep sucking before I punch you in the belly. ",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Is he really going to punch me in my belly? I better face fuck him harder so he cums. I don't want " +
                "to make him mad. ",
            button: [
                { chatID: 14, text: "...", callback: "clean7" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "MMMmmmm there it is. I feel it sliding down the back of my throat. Better swallow it all up so I " +
                "don't make him mad. I wonder if he liked it? ",
            button: [
                { chatID: 15, text: "...", callback: "clean8" }
            ]
        },
        {
            chatID: 15,
            speaker: "jones",
            text: "I have things I need to do. Butler, throw her out. ",
            button: [
                { chatID: 16, text: "Huh? ", callback: "clean9" }
            ]
        },
        {
            chatID: 16,
            speaker: "butler",
            text: "Shoo shoo, back to the streets for you. ",
            button: [
                { chatID: -1, text: "...", callback: "kicked" }
            ]
        },
        {
            chatID: 17,
            speaker: "butler",
            text: "Working on the next event.  ",
            button: [
                { chatID: -1, text: "...", callback: "kicked" }
            ]
        },
        {
            chatID: 18,
            speaker: "butler",
            text: "I thought I threw you out, now shoo you wretched street urchin. ",
            button: [
                { chatID: -1, text: "...", callback: "kicked" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};