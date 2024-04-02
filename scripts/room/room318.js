//Room name
var room318 = {};
room318.main = function () {
    if (sc.getMission("dog", "vacation").inProgress) {
        if (g.pass === "endSleepyTime") {
            g.pass = null;
            chat(2, 318);
        }
        else if (!daily.get("dlock")) {
            nav.button({
                "type": "img",
                "name": "dog",
                "left": 638,
                "top": 516,
                "width": 514,
                "height": 564,
                "image": "318_janiceBedroom/dogAngry.png"
            }, 318);
            chat(0, 318);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "closet",
                "left": 607,
                "top": 11,
                "width": 233,
                "height": 670,
                "image": "318_janiceBedroom/closet.png"
            }, 318);
            nav.button({
                "type": "btn",
                "name": "bed",
                "left": 1178,
                "top": 263,
                "width": 742,
                "height": 610,
                "image": "318_janiceBedroom/bed.png"
            }, 318);
            nav.button({
                "type": "btn",
                "name": "dresser",
                "left": 138,
                "top": 401,
                "width": 399,
                "height": 115,
                "image": "318_janiceBedroom/dresser.png"
            }, 318);
            nav.button({
                "type": "btn",
                "name": "nightstand",
                "left": 982,
                "top": 403,
                "width": 190,
                "height": 89,
                "image": "318_janiceBedroom/nightstand.png"
            }, 318);
        }
        
    }

    nav.buildnav([316, 317, 319]);
};

room318.btnclick = function (name) {
    switch (name) {
        case "bed":
            chat(1, 318);
            break;
        case "dresser":
            nav.kill();
            nav.bg("318_janiceBedroom/panties.jpg");
            levels.mod("xdress", 50, 0);
            if (levels.get("xdress").l > 0) {
                if (cl.hasClothing("panties", "j"))
                    chat(4, 318);
                else
                    chat(3, 318);
            }
            else
                chat(5, 318);
            break;
        case "closet":
            if (cl.hasClothing("dress", "j")) {
                chat(8, 318);
            }
            else {
                nav.kill();
                nav.bg("318_janiceBedroom/reddress.jpg");
                levels.mod("xdress", 50, 0);
                if (levels.get("xdress").l > 0) {
                    chat(7, 318);
                }
                else {
                    chat(6, 318);
                }
            }
            break;
        case "nightstand":
            nav.killall();
            gv.mod("arousal", 5);
            nav.bg("318_janiceBedroom/vibrator.jpg");
            chat(9, 318);
            break;
        case "vib2":
            nav.killbutton("vib2");
            if (gv.get("arousal") < 70) {
                gv.mod("arousal", 10);
                chat(10, 318);
            }
            else {
                chat(11, 318);
            }
            break;
        default:
            break;
    }
};

room318.chatcatch = function (callback) {
    switch (callback) {
        case "nap_sleep":
            g.pass = 318;
            char.room(28);
            break;
        case "letInDog":
            char.room(319);
            break;
        case "reset":
            char.room(318);
            break;
        case "steal":
            g.popUpNotice("You stole her panties. Pervert");
            levels.mod("xdress", 25, 4);
            cl.add("panties", "j");
            cl.add("bra", "j");
            g.pass = 318;
            char.room(8);
            break;
        case "stealDress":
            cl.add("dress", "j");
            levels.mod("xdress", 25, 4);
            g.pass = 318;
            char.room(8);
            break;
        case "vib1":
            nav.bg("318_janiceBedroom/" + (cl.c.chastity !== null ? "vib_chast1.jpg" : "vib_dick1.jpg")); 
            nav.next("vib2");
            break;
        case "vib2":
            cl.doCum(false);
            stats.mod("masturbate", "vibrator", 1);
            nav.bg("318_janiceBedroom/" + (cl.c.chastity !== null ? "vib_chast2.jpg" : "vib_dick2.jpg")); 
            break;
        default:
            break;
    }
};

room318.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Uh oh. Looks like " + sc.n("dog") + " doesn't want me in here. I better back " +
                "out before he attacks me. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "How Long do you want to sleep?",
            button: [
                { chatID: -1, text: "Sleep till morning", callback: "nap_sleep" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Shit! I forgot to let " + sc.n("dog") + " back in! I better go get him! ",
            button: [
                { chatID: -1, text: "Let him in.", callback: "letInDog" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: sc.n("janice") + "'s clean crips panties and bras. So fresh, so pink. She has " +
                "so many I'm sure she won't missy one pair missin. ",
            button: [
                { chatID: -1, text: "[Steal her panties and bra]", callback: "steal" },
                { chatID: -1, text: "[Put them back]", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I'm so obsessed with her panties. I just want to rub my dirty little face " +
                "in all of them! ",
            button: [
                { chatID: -1, text: "MMmmm panties", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: sc.n("janice") + "'s clean crips panties. She looks so hot in them! ",
            button: [
                { chatID: -1, text: "[Put them back]", callback: "reset" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: sc.n("janice") + "'s red dress. She was so hot in it. ",
            button: [
                { chatID: -1, text: "[Put them back] [Sissy level too low]", callback: "reset" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: sc.n("janice") + "'s red dress. She was so hot in it. I bet I would look sexy " +
                "in that dress.... ",
            button: [
                { chatID: -1, text: "[Steal her dress]", callback: "stealDress" },
                { chatID: -1, text: "[Put them back]", callback: "reset" }

            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "I already stole her dress. If I keep raiding her closet I may never leave " +
                "the closet. ",
            button: [
                { chatID: -1, text: "...", callback: "" }

            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "My girlfriend's vibrator! She's totally rubbed her pussy all over it. I can " +
                "smell her juices on it. I wonder what it feels like on my dick? ",
            button: [
                { chatID: -1, text: "Use the vibrator on your dick", callback: "vib1" },
                { chatID: -1, text: "Put it back you pervert. ", callback: "reset" },

            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "It feels funny, but I'm not getting anything. Maybe I'm just not horny enough. ",
            button: [
                { chatID: -1, text: "Put it back, pervert. ", callback: "reset" },

            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Oh fuck! It feels so funny on my dick. I don't think I can hold it in any longer...",
            button: [
                { chatID: 12, text: "[Cum!!!]", callback: "vib2" },

            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "Oh no. I came all over her pillow. It's so gooey and gross. I'm sure she won't " +
                "notice it once it dries up though. ",
            button: [
                { chatID: -1, text: "[Put the vibrator away]", callback: "reset" },

            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};