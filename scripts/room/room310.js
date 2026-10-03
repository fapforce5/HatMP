//Room name
//stumpy, snail, pinata, Ilean
var room310 = {};
room310.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "door",
            "left": 581,
            "top": 518,
            "width": 160,
            "height": 307,
            "image": "310_secondfloor/door.png"
        },
        {
            "type": "btn",
            "name": "stairs",
            "left": 1176,
            "top": 371,
            "width": 107,
            "height": 573,
            "image": "314_thirdFloor/stairs.png"
        },
    ];
    var navList = [300, 314, 303, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 310);
    });
    nav.buildnav(navList);
};

room310.btnclick = function (name) {
    switch (name) {
        case "stairs":
            char.room(314);
            break;
        case "door":
            nav.kill();
            sc.select("icon_knock", "310_secondfloor/icon_knock.webp", 0);
            sc.select("icon_pick", "310_secondfloor/icon_pick.webp", 1);
            break;
        case "icon_knock":
            nav.button({
                "type": "img",
                "name": "dollmaker",
                "left": 725,
                "top": 470,
                "width": 329,
                "height": 610,
                "image": "310_secondfloor/dollmaker.png"
            }, 310)
            if (missy.getenvelope("dollmaker").active) {
                chat(2, 310);
            }
            else if (g.isNight())
                chat(0, 310);
            else
                chat(1, 310);
            break;
        case "icon_pick":
            nav.kill();
            lockpick.init(2, "pickwin", "picklose", 60, 310);
            break;
        case "pickwin":
            nav.bg("310_secondfloor/room0.webp");
            g.map = {
                counter: 0,
                chatId: 0
            };
            chat(4, 310);
            break;
        case "picklose":
            char.room(310);
            break;
        default:
            break;
    }
};

room310.chatcatch = function (callback) {
    switch (callback) {
        case "room0":
        case "room1":
        case "room4":
            nav.kill();
            nav.bg("310_secondfloor/" + callback + ".webp");
            break;
        case "room2":
        case "room3":
        case "room6":
        case "roomaway":
            zcl.displayMain(-200, 700, .4, "clothes", true);
            nav.bg("310_secondfloor/" + callback + ".webp");
            break;
        case "roombang":
            nav.kill();
            gv.mod("energy", -50);
            nav.bg("310_secondfloor/" + callback + ".webp");
            break;
        case "chat12":
            g.map.chatId = 12;
            chat(900, 310);
            break;
        case "chat16":
            g.map.chatId = 16;
            chat(900, 310);
            break;
        case "roomreturn":
            nav.bg("310_secondfloor/room6.webp");
            zcl.displayMain(-300, 700, .42, "clothes", true);
            switch (g.map.chatId) {
                case 12:
                    chat(14, 310);
                    break;
                case 16:
                    chat(16, 310);
                    break;
            }
            break;
        case "roomClothes":
            cl.nude();
            room310.chatcatch("drawbg");
            break;
        case "roomdress":

            break;
        case "drawbg":
            nav.kill();
            if (g.map.counter === 0) {
                nav.bg("310_secondfloor/room5.webp");
                zcl.displayMain(-200, 700, .4, "clothes", true);
            }
            else {
                nav.bg("310_secondfloor/room6.webp");
                zcl.displayMain(-300, 700, .42, "clothes", true);
            }
            break;
        case "reset":
            char.room(310);
            break;
        case "kill":
            nav.kill();
            break;
        default:
            break;
    }
};

room310.chat = function (chatID) {
    if (chatID === 900) {
        switch (g.map.counter) {
            case 0:
                counter++;
                return {
                    chatID: 900,
                    speaker: "dollmaker",
                    text: "Dollies don't say no!",
                    button: [
                        { chatID: -1, text: "*gulp*", callback: "roomaway" }
                    ]
                };
            default:
                return {
                    chatID: 900,
                    speaker: "dollmaker",
                    text: "You're making me angry!",
                    button: [
                        { chatID: 15, text: "*gulp*", callback: "roombang" }
                    ]
                };
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "dollmaker",
                text: "Go away. It's late",
                button: [
                    { chatID: -1, text: "oh. sorry", callback: "reset" }
                ]
            },
            {
                chatID: 1,
                speaker: "dollmaker",
                text: "I don't know you. Go away and let me play with my dolls.",
                button: [
                    { chatID: -1, text: "oh. sorry", callback: "reset" }
                ]
            },
            {
                chatID: 2,
                speaker: "dollmaker",
                text: "I don't know you. Go away and let me play with my dolls.",
                button: [
                    { chatID: 3, text: "I actually have a question about the C.U.M. cult. ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "dollmaker",
                text: "Oh! We don't talk about them. Good bye sir! ",
                button: [
                    { chatID: 5, text: "I uhhh. ", callback: "kill" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "Not expecting a steel cage... What is she up to? ",
                button: [
                    { chatID: -1, text: "Leave", callback: "reset" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "She's up to something. Let me pick her lock and see if I can find anything.. ",
                button: [
                    { chatID: 6, text: "[Pick her lock and see]", callback: "room0" },
                    { chatID: -1, text: "Some other time", callback: "reset" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "Hmmm. Let me see if I can lift or move this cage. ",
                button: [
                    { chatID: 7, text: "[Push really hard on the cage]", callback: "room1" },
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "Fuck that was loud! I wonder if she heard that. ",
                button: [
                    { chatID: 8, text: "...", callback: "room2" },
                ]
            },
            {
                chatID: 8,
                speaker: "dollmaker",
                text: "Hey! I never said you could come in! Why do you want to make me angry! ",
                button: [
                    { chatID: 9, text: "I uh.. Sorry, I'll leave", callback: "room3" },
                ]
            },
            {
                chatID: 9,
                speaker: "dollmaker",
                text: "You aren't going anywhere " + gender.pronoun("mister") + "! ",
                button: [
                    { chatID: 10, text: "[Turn around and try to leave]", callback: "room4" },
                ]
            },
            {
                chatID: 10,
                speaker: "dollmaker",
                text: "Dollies do what I say or I get very very angry! Now turn around dolly! ",
                button: [
                    { chatID: 11, text: "[Turn back around]", callback: "room3" },
                ]
            },
            {
                chatID: 11,
                speaker: "dollmaker",
                text: "Dollies clothes are gross. Dolly take off all your clothes and push them to me!  ",
                button: [
                    { chatID: 12, text: "[Take all your clothes off and slide them through the bars]", callback: "roomClothes" },
                    { chatID: -1, text: "No. I'm not doing that!", callback: "chat12" },
                ]
            },
            {
                chatID: 12,
                speaker: "dollmaker",
                text: "That's a good dolly. Now put on your party dress so you're all pretty ",
                button: [
                    { chatID: 12, text: "[Put on the pretty party dress]", callback: "roomdress" },
                    { chatID: -1, text: "No. I'm not doing that!", callback: "chat16" },
                ]
            },
            {
                chatID: 13,
                speaker: "!dolly0",
                text: "*pssst* *whipsering* If you get a chance escape. Don't stay here, you're in danger.",
                button: [
                    { chatID: -1, text: "No. I'm not doing that!", callback: "roomreturn" },
                ]
            },
            {
                chatID: 14,
                speaker: "dollmaker",
                text: "Clothes off. Now!",
                button: [
                    { chatID: 15, text: "No! What are you going to do, shoot me?", callback: "roombang" },
                    { chatID: 12, text: "[Take all your clothes off and slide them through the bars]", callback: "roomClothes" },
                ]
            },
            {
                chatID: 15,
                speaker: "me",
                text: "Ow! ow owie owie owie! That pellet hurt!!!",
                button: [
                    { chatID: -1, text: "...", callback: "roomreturn" },
                ]
            },
            {
                chatID: 16,
                speaker: "dollmaker",
                text: "Good dolly. Now put these cuffs on your ankels.",
                button: [
                    { chatID: 15, text: "I'm not doing that", callback: "roombang" },
                    { chatID: 17, text: "[Cuff your ankels together]", callback: "roomCuff" },
                ]
            },
            {
                chatID: 17,
                speaker: "dollmaker",
                text: "Good dolly. Now cuff your hands behind your back. ",
                button: [
                    { chatID: 15, text: "I'm not doing that", callback: "roombang" },
                    { chatID: 17, text: "[Cuff your hands behind your back]", callback: "roomCuff" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};

invoker.registerRoom(310, room310);
