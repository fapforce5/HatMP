//Game Room
var room214 = {};
room214.main = function () {
    if (gv.get("energy") < 33) {
        chat(12, 214);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "crowd",
                "left": 1062,
                "top": 574,
                "width": 858,
                "height": 506,
                "image": "214_pinkgame/crowd.png",
                "title": "Migle with the crowd"
            },
            {
                "type": "btn",
                "name": "gamer",
                "left": 332,
                "top": 521,
                "width": 623,
                "height": 416,
                "image": "214_pinkgame/gamers.png",
                "title": "Visit the gamers"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 214);
        });
        
    }
    nav.buildnav([213, 215, 171]);
};

room214.btnclick = function (name) {
    switch (name) {
        case "crowd":
            nav.kill();
            nav.bg("214_pinkgame/group0.jpg");
            chat(7, 214);
            break;
        case "gamer":
            nav.killall();
            nav.bg("214_pinkgame/gamer.jpg");
            nav.button({
                "type": "btn",
                "name": "gamegirl",
                "left": 1101,
                "top": 53,
                "width": 813,
                "height": 1027,
                "image": "214_pinkgame/missy.png",
                "title": "Girl"
            }, 214);
            nav.button({
                "type": "btn",
                "name": "gameboy",
                "left": 88,
                "top": 84,
                "width": 981,
                "height": 996,
                "image": "214_pinkgame/gamer.png",
                "title": "Boy"
            }, 214);
            sc.selectCancel("reset", .25);
            break;
        case "reset":
            char.room(214);
            break;
        case "gamegirl":
            nav.killall();
            nav.bg("214_pinkgame/gw1.jpg");
            chat(4, 214);
            break;
        case "gameboy":
            nav.killall();
            nav.bg("214_pinkgame/gm1.jpg");
            chat(0, 214);
            break;
        case "gw3":
            nav.killall();
            nav.bg("214_pinkgame/gw3.jpg");
            nav.next("gw4");
            break;
        case "gw4":
            nav.killall();
            nav.bg("214_pinkgame/gw1.jpg");
            levels.mod("sissy", 20, 999);
            gv.mod("energy", -25);
            levels.mod("fame", 20, 999);
            gv.mod("pink", 1);
            char.addtime(47);
            chat(6, 214);
            break;
        default:
            break;
    }
};

room214.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(214);
            break;
        case "gm2":
        case "gm3":
        case "gm4":
        case "group1":
        case "group2":
        case "group3":
        case "group4":
            nav.killall();
            nav.bg("214_pinkgame/" + callback + ".jpg");
            break;
        case "gmEnd":
            gv.mod("energy", -33);
            levels.mod("fame", 20, 999);
            levels.oralGive(3, true, false, "m");
            gv.mod("pink", 1);
            char.addtime(37);
            char.room(214);
            break;
        case "gw2":
            nav.bg("214_pinkgame/gw2.jpg");
            nav.button({
                "type": "hand",
                "name": "gw3",
                "left": 609,
                "top": 113,
                "width": 340,
                "height": 817,
                "image": "214_pinkgame/gw2.png",
                "title": "Massage Feet"
            }, 214);
            break;
        case "groupEnd":
            levels.mod("fame", 75, 999);
            levels.mod("sissy", 40, 999);
            gv.mod("pink", 1);
            levels.anal(3, true, "m", true);
            gv.mod("energy", -33);
            char.addtime(37);
            char.room(214);
            break;
        default:
            break;
    }
};

room214.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!gamerboy",
            text: "I'm in the middle of a game. What you want?",
            button: [
                { chatID: 1, text: "Can I suck your dick? ", callback: "gm2" },
                { chatID: -1, text: "Sorry to bother you ", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "!gamerboy",
            text: "Fuck yeah slut! Just keep your head down so I can see my game. ",
            button: [
                { chatID: 2, text: "[Suck his dick, slut.]", callback: "gm3" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I am such a slut. Here I am sucking some guy's cock that I don't even " +
                "know while he plays video games. ",
            button: [
                { chatID: 3, text: "...", callback: "gm4" }
            ]
        },
        {
            chatID: 3,
            speaker: "!gamerboy",
            text: "Fuck yeah! Beatin' bitches and getting sucked! I love this place. Now fuck " +
                "off slut. Gotta get ready for the next game. ",
            button: [
                { chatID: -1, text: "[Fuck off]", callback: "gmEnd" }
            ]
        },
        {
            chatID: 4,
            speaker: "!gamergirl",
            text: "What? Can't a mistress sit and watch a game? Why am I constantly inundated " +
                "with desperate sissies? ",
            button: [
                { chatID: 5, text: "Uhhhh", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!gamergirl",
            text: "Fine! Message my foot, or I'll shove it up your ass. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "gw2" }
            ]
        },
        {
            chatID: 6,
            speaker: "!gamergirl",
            text: "There, you've pleased a girl. Probably the first time in your life. " +
                "now stop pestering me so I can watch the game. ",
            button: [
                { chatID: -1, text: "[Get out of her sight]", callback: "reset" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "There's so many people here. How do I get anyone's attention. Maybe I " +
                "should just call out? ",
            button: [
                { chatID: 8, text: "Anyone want to fuck?", callback: "group1" },
                { chatID: -1, text: "Stay silent", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "!gameman",
            text: "Sweet! I'll fuck you. Let me grab a chair! ",
            button: [
                { chatID: 9, text: "Ok", callback: "group2" },
                { chatID: -1, text: "Oh. I was just joking. ", callback: "reset" },
            ]
        },
        {
            chatID: 9,
            speaker: "!gameman",
            text: "Hop on! ",
            button: [
                { chatID: 10, text: "[Jump on that dick!] ", callback: "group3" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "So many people watching me take this dick! I hope no one recognizes me " +
                "when I put my clothes back on. This really is totally embarrassing and " +
                "wrong, but it feels so good! His dick it totally hitting that right spot! ",
            button: [
                { chatID: 11, text: "... ", callback: "group4" },
            ]
        },
        {
            chatID: 11,
            speaker: "!gameman",
            text: "Oh wow! Totally wow! That way feels good! I so needed that, thanks! ",
            button: [
                { chatID: -1, text: "Fuck yeah! ", callback: "groupEnd" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "I'm too tired to work this room. ",
            button: [
                { chatID: -1, text: "[Need at least 33 energy]", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};