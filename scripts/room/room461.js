//Room name
var room461 = {};
room461.main = function () {

    if (!g.isNight()) {
        if (Math.floor(Math.random() * 2) === 1) {
            var whichOne = Math.floor(Math.random() * 4);

            if (whichOne === 0 && daily.get("ppgirl")) {
                whichOne = Math.floor(Math.random() * 3) + 1;
            }

            if (whichOne === 0) {
                if (sc.getLevel("ppgirl") > 1) {
                    nav.bg("461_run/pee6.jpg");
                    chat(32, 461);
                }
                else {
                    sc.select("pprun", "461_run/ppgirl_run.png", 0);
                    sc.select("ppchat", "461_run/ppgirl_chat.png", 1);
                    sc.select("ppdick", "461_run/ppgirl_dick.png", 2);
                    daily.set("ppgirl");
                    nav.button({
                        "type": "img",
                        "name": "girl",
                        "left": 1187,
                        "top": 629,
                        "width": 308,
                        "height": 399,
                        "image": "461_run/pee.png"
                    }, 461);
                }
            }
            else {
                if (whichOne === 1) {
                    nav.button({
                        "type": "img",
                        "name": "girl",
                        "left": 652,
                        "top": 476,
                        "width": 173,
                        "height": 475,
                        "image": "461_run/missy.png"
                    }, 461);
                }
                else if (whichOne === 2) {
                    nav.button({
                        "type": "img",
                        "name": "girl",
                        "left": 221,
                        "top": 282,
                        "width": 479,
                        "height": 798,
                        "image": "461_run/girlrun.png"
                    }, 461);
                }
                else if (whichOne === 3) {
                    nav.button({
                        "type": "img",
                        "name": "girl",
                        "left": 883,
                        "top": 561,
                        "width": 91,
                        "height": 281,
                        "image": "461_run/boyrun.png"
                    }, 461);
                }

                gv.mod("energy", -30);
                levels.mod("fitness", 30, 999);
                char.addtime(60);

                if (cl.c.chest < 1)
                    chat(1, 461);
                else
                    chat(2, 461);
            }
        }
        else {
            gv.mod("energy", -30);
            levels.mod("fitness", 30, 999);
            char.addtime(60);

            if (cl.c.chest < 1)
                chat(1, 461);
            else
                chat(2, 461);
        }
    }
    else {
        var clutNum = sc.getstep("cultboy");
        if (!daily.get("cultrun") && (clutNum < 2 || Math.floor(Math.random() * 3) === 0)) {
            nav.button({
                "type": "btn",
                "name": "cult",
                "left": 640,
                "top": 163,
                "width": 455,
                "height": 917,
                "image": "461_run/cult1.png"
            }, 461);
        }
        else {
            gv.mod("energy", -30);
            gv.mod("fitness", 30, 999);
            char.addtime(60);

            if (cl.c.chest < 1)
                chat(1, 461);
            else
                chat(2, 461);

        }
    }
};

room461.btnclick = function (name) {
    switch (name) {
        case "cult":
            nav.killbutton("cult");
            nav.bg("461_run/cult2.jpg");
            chat(6, 461);
            break;
        case "cult8":
            nav.bg("461_run/cult8.jpg");
            nav.killbutton("cult8");
            nav.button({
                "type": "btn",
                "name": "cult9",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "461_run/advance.png"
            }, 461);
            break;
        case "cult9":
            nav.bg("461_run/cult9.jpg");
            nav.killbutton("cult9");
            nav.button({
                "type": "btn",
                "name": "cult10",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "461_run/advance.png"
            }, 461);
            break;
        case "cult10":
            nav.killbutton("cult10");
            nav.bg("461_run/cult10.jpg");
            chat(16, 461);
            break;
        case "pprun":
            nav.killall();
            nav.bg("461_run/path2.jpg");
            gv.mod("energy", -30);
            levels.mod("fitness", 30, 999);
            char.addtime(60);

            if (cl.c.chest < 1)
                chat(1, 461);
            else
                chat(2, 461);
            break;
        case "ppdick":
            nav.killall();
            sc.modLevel("ppgirl", -100, 0);
            nav.bg("461_run/pee2.jpg");
            chat(24, 461);
            break;
        case "ppdick2":
            nav.killall();
            sc.modLevel("ppgirl", -100, 0);
            nav.bg("461_run/pee5.jpg");
            chat(24, 461);
            break;
        case "ppchat":
            var ppgirlLevel = sc.getLevel("ppgirl");
            if (ppgirlLevel < 1) {
                sc.modLevel("ppgirl", 34, 2);
                levels.mod("piss", 25, 1);
                nav.killall();
                nav.bg("461_run/pee1.jpg");
                chat(22, 461);
            }
            else {
                if (!sc.getEvent("ppgirl", 1)) {
                    levels.mod("piss", 25, 1);
                    nav.killall();
                    nav.bg("461_run/pee3.jpg");
                    sc.setEvent("ppgirl", 1);
                    chat(25, 461);
                }
                else if (!sc.getEvent("ppgirl", 2)) {
                    levels.mod("piss", 25, 1);
                    nav.killall();
                    nav.bg("461_run/pee3.jpg");
                    sc.setEvent("ppgirl", 2);
                    chat(30, 461);
                }
                else {
                    nav.killbutton("");
                    nav.killbutton("");
                    nav.killbutton("");
                    nav.killbutton("");
                    levels.mod("piss", 25, 1);
                    sc.modLevel("ppgirl", 50, 2);
                    chat(44, 461);
                }
            }
            break;
        case "pppee":
            nav.killall();
            if (levels.get("piss") < 2) {
                levels.mod("piss", 25, 1);
                chat(37, 461);
            }
            else
                chat(33, 461);
            break;
        default:
            break;
    }
};

room461.chatcatch = function (callback) {
    switch (callback) {
        case "Complete":
            char.room(450);
            break;
        case "dark":
            char.room(475);
            break;
        case "redo":
            chat(0, 461);
            break;
        case "killgirl":
            nav.killbutton("girlr");
            break;
        case "run":
            nav.bg("456_bench/456_run.jpg");
            break;
        case "morning":
            if (g.dt.getHours() > 21)
                char.addtime(1440);

            char.newdayfake();
            nav.bg("461_run/black.jpg", "461_run/black.jpg");
            break;
        case "morning1":
            char.room(450);
            break;
        case "cult2":
            daily.set("cultrun");
            nav.killbutton("cult");
            nav.bg("461_run/cult2.jpg")
            break;
        case "cult3":
            if (sc.getstep("cultboy") === 0) {
                sc.setstep("cultboy", 1);
                sc.setstep("wyatt", 1);
                nav.bg("461_run/cult3a.jpg");
                chat(8, 461);
            }
            else {
                chat(12, 461);
            }
            break;
        case "cult3b":
            nav.bg("461_run/cult3b.jpg");
            break;
        case "cult3c":
            nav.bg("461_run/cult3c.jpg");
            break;
        case "cult3d":
            char.addtime(120);
            char.room(450);
            break;
        case "cult6":
            nav.bg("461_run/cult6.jpg");
            break;
        case "cult7":
            cl.nude();
            cl.display();
            nav.bg("461_run/cult7.jpg");
            nav.button({
                "type": "btn",
                "name": "cult8",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "461_run/advance.png"
            }, 461);
            break;
        case "cult11":
            nav.bg("461_run/cult11.jpg");
            break;
        case "cult12":
            nav.bg("461_run/cult12.jpg");
            nav.button({
                "type": "img",
                "name": "cult12",
                "left": 550,
                "top": 0,
                "width": 1200,
                "height": 1080,
                "image": "461_run/cult12.gif"
            }, 461);
            g.roomTimeout = setTimeout(function () { chat(19, 461); }, 3000);
            break;
        case "cult13":
            nav.killbutton("cult12");
            nav.bg("461_run/cult13.jpg");
            break;
        case "cult14":
            nav.bg("461_run/cult14.jpg");
            break;
        case "cult15":
            char.addtime(120);
            if (sc.getstep("cultboy") === 1)
                sc.setstep("cultboy", 2);
            if (cl.c.butthole < 2)
                cl.c.butthole += .2;
            gv.mod("creamPied", 1);
            gv.mod("receiveAnalMale", 1);
            daily.set("cultrun");
            cl.undo();
            char.room(450);
            break;
        case "ppgirlrun":
            nav.bg("461_run/pee2.jpg");
            break;
        case "completeRun":
            nav.bg("461_run/path2.jpg");
            gv.mod("energy", -30);
            levels.mod("fitness", 30, 999);
            char.addtime(60);

            if (cl.c.chest < 1)
                chat(1, 461);
            else
                chat(2, 461);
            break;
        case "ppbad":
            nav.killall();
            sc.modLevel("ppgirl", -100, 0);
            nav.bg("461_run/pee2.jpg");
            chat(24, 461);
            break;
        case "pee2":
        case "pee3":
        case "pee4":
        case "pee5":
        case "pee6":
        case "pee8":
            nav.bg("461_run/" + callback + ".jpg");
            break;
        case "pee7":
            levels.mod("piss", 25, 2);
            nav.bg("461_run/pee7.jpg");
            break;
        
        case "displayppgirl":
            sc.select("pprun", "461_run/ppgirl_run.png", 0);
            sc.select("ppchat", "461_run/ppgirl_chat.png", 1);
            sc.select("pppee", "461_run/ppgirl_pee.png", 2);
            sc.select("ppdick2", "461_run/ppgirl_dick.png", 3);
            break;
        case "ppsub":
            levels.mod("sub", 15, 999);
            break;
        case "pporal":
            levels.mod("oral", 15, 999);
            break;
        case "ppcharisma":
            levels.mod("charisma", 15, 999);
            break;
        case "canPeeOnMe":
            sc.modLevel("ppgirl", 400, 2);
            nav.bg("461_run/path2.jpg");
            gv.mod("energy", -30);
            levels.mod("fitness", 30, 999);
            char.addtime(60);

            if (cl.c.chest < 1)
                chat(1, 461);
            else
                chat(2, 461);
            break;
        default:
            break;
    }
};

room461.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Take the darkened side path", callback: "dark" },
                { chatID: -1, text: "Return to Carnalville Park ", callback: "Complete" },
                { chatID: -1, text: "Run on main path.", callback: "runNext" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Must keep running to lose this weight.... ",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I may be thin, but I'm getting more fit! Also I still hate running....",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "I can't run in this! I'm missing my " + g.internal + ". I can change in the men's bathroom if I saved " +
                "a set of running clothes in my wardrobe saves. ",
            button: [
                { chatID: -1, text: "......", callback: "redo" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I'm too tired to run, must sleep or eat something. ",
            button: [
                { chatID: -1, text: "......", callback: "redo" }
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "Aaaa they're in the woods!!!! Don't go that way!!",
            button: [
                { chatID: -1, text: "Who's in the woods....", callback: "killgirl" }
            ]
        },
        {
            chatID: 6,
            speaker: "cultboy",
            text: "These paths are off limits at night. All who enter may pay the toll.",
            button: [
                { chatID: 7, text: "Huh, what toll?", callback: "cult2" }
            ]
        },
        {
            chatID: 7,
            speaker: "cultboy",
            text: "The toll I'm going to collect from your ass!",
            button: [
                { chatID: -1, text: "!!!", callback: "cult3" }
            ]
        },
        {
            chatID: 8,
            speaker: "wyatt",
            text: "There will be no collection tonight from your cult. ",
            button: [
                { chatID: 9, text: "...", callback: "cult3b" }
            ]
        },
        {
            chatID: 9,
            speaker: "wyatt",
            text: "You know you should really avoid this park at night. I've notified the local police to keep people away " +
            "from the park until we've cleared out the cult.",
            button: [
                { chatID: 10, text: "Who are we?", callback: "cult3c" }
            ]
        },
        {
            chatID: 10,
            speaker: "wyatt",
            text: "I work for the government that assists local law enforcement in clearing out what we call... undesirables. You're " +
            "really lucky I was in this section of the park tonight. Generally as a rule I don't normally come this way. ",
            button: [
                { chatID: 11, text: "Ok", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "wyatt",
            text: "I'm going to get back to my office in the police station, but if you ever want to chat, please stop by. Oh, and " +
            "please stay out of the park at night until we've had a chance to rid the town of this cult.",
            button: [
                { chatID: -1, text: "Oh, thanks", callback: "cult3d" }
            ]
        },
        {
            chatID: 12,
            speaker: "cultboy",
            text: "You know the toll. Are you ready to pay up?",
            button: [
                { chatID: 13, text: "[Run away!]", callback: "run" },
                { chatID: 15, text: "[Stay and fight]", callback: "cult5" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "Oh man! I can't believe that cultist was going to attack me. I better hide our here for the night. " +
                "I can't ever run in the forest at night!",
            button: [
                { chatID: 14, text: "...", callback: "morning" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Time to wakeup.",
            button: [
                { chatID: -1, text: "...", callback: "morning1" }
            ]
        },
        {
            chatID: 15,
            speaker: "cultboy",
            text: "You will not enjoy this choice.",
            button: [
                { chatID: 18, text: "...", callback: "cult6" }
            ]
        },
        {
            chatID: 16,
            speaker: "cultboy",
            text: "OOOooooo you are sooooooooo tight!!!",
            button: [
                { chatID: 17, text: "aaaaAAAAaaaaaa", callback: "cult11" }
            ]
        },
        {
            chatID: 17,
            speaker: "cultboy",
            text: "I'm sooooooo deep in your ass",
            button: [
                { chatID: -1, text: "oooOOOOoooooooo", callback: "cult12" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "@..@...",
            button: [
                { chatID: -1, text: "...", callback: "cult7" }
            ]
        },
        {
            chatID: 19,
            speaker: "cultboy",
            text: "OOOOhhhhh fuck I'm going to fill your ass up!",
            button: [
                { chatID: 20, text: "OOOOOOOOOooooooooooooooo", callback: "cult13" }
            ]
        },
        {
            chatID: 20,
            speaker: "cultboy",
            text: "Stay out of the forest at night, or I'll fill your ass up again.",
            button: [
                { chatID: 21, text: "oooo.........", callback: "cult14" }
            ]
        },
        {
            chatID: 21,
            speaker: "cultboy",
            text: "Slut",
            button: [
                { chatID: -1, text: "Limp away", callback: "cult15" }
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "Hello",
            button: [
                { chatID: 23, text: "...", callback: "ppgirlrun" }
            ]
        },
        {
            chatID: 23,
            speaker: "ppgirl",
            text: "AAAaaaaa",
            button: [
                { chatID: -1, text: "Oh my. Oh well. ", callback: "completeRun" }
            ]
        },
        {
            chatID: 24,
            speaker: "me",
            text: "Wait. Don't you want to suck my dick?",
            button: [
                { chatID: -1, text: "Oh my. Oh well. ", callback: "completeRun" }
            ]
        },
        {
            chatID: 25,
            speaker: "ppgirl",
            text: "Why do you keep interrupting me when I'm trying to pee?",
            button: [
                { chatID: -1, text: "Since you had your pussy out, I thought you wanted to fuck. ", callback: "ppbad" },
                { chatID: 26, text: "You're peeing in the middle of the path.", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "ppgirl",
            text: "Oh. I do marathon training, so I don't have time to go to the toilet. ",
            button: [
                { chatID: 27, text: "But why the middle of the path?", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "ppgirl",
            text: "The woods are scary. ",
            button: [
                { chatID: 28, text: "They really are. ", callback: "pee4" },
            ]
        },
        {
            chatID: 28,
            speaker: "ppgirl",
            text: "Welp. Gotta run! ",
            button: [
                { chatID: 29, text: "oh", callback: "pee5" },
            ]
        },
        {
            chatID: 29,
            speaker: "me",
            text: "bye ",
            button: [
                { chatID: -1, text: "...", callback: "completeRun" },
            ]
        },
        {
            chatID: 30,
            speaker: "ppgirl",
            text: "You really keep trying to catch me peeing, don't you? Is this some kind of fetish thing, or are you obsessed with me? ",
            button: [
                { chatID: 38, text: "Oh, just weird timing", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "ppgirl",
            text: "Till next time! ",
            button: [
                { chatID: -1, text: "Ok!", callback: "canPeeOnMe" },
            ]
        },
        {
            chatID: 32,
            speaker: "ppgirl",
            text: "So... You caught me. ",
            button: [
                { chatID: -1, text: "...", callback: "displayppgirl" },
            ]
        },
        {
            chatID: 33,
            speaker: "ppgirl",
            text: "Hehe. I was hoping you would ask. Lay down, I'm going to pee all over your face! ",
            button: [
                { chatID: 34, text: "Oh yeah!", callback: "pee7" },
            ]
        },
        {
            chatID: 34,
            speaker: "ppgirl",
            text: "I feel so funny about peeing on someone! ",
            button: [
                { chatID: 35, text: "*GLUG* *GLUG*", callback: "pee8" },
            ]
        },
        {
            chatID: 35,
            speaker: "ppgirl",
            text: "Hehe thanks! I've got to get back to training. Bye bye toilet!",
            button: [
                { chatID: 36, text: "Haha yeah. ", callback: "pee5" },
            ]
        },
        {
            chatID: 36,
            speaker: "thinking",
            text: "Did I really just let a girl piss all over me in the forest? My sexual itnerests are really getting weird. " +
                "It's a good think I'm running, it's hard to tell the difference between the piss and sweat. I probably should " +
                "take a shower though. It'd be weird to sleep with her piss soaked into my body. ",
            button: [
                { chatID: -1, text: "...", callback: "completeRun" },
            ]
        },
        {
            chatID: 37,
            speaker: "thinking",
            text: "Oh gross. Did I really think of asking her to pee on me? I'm going to run. Running is better than getting " +
                "peed on!",
            button: [
                { chatID: -1, text: "Gotta run! Later!", callback: "completeRun" },
            ]
        },
        {
            chatID: 38,
            speaker: "ppgirl",
            text: "I don't believe you. Do you like watching me pee? ",
            button: [
                { chatID: 41, text: "I really do! It's so hot how the piss comes out. ", callback: "" },
                { chatID: 39, text: "I swear, it's just weird timing. ", callback: "pee4" },
            ]
        },
        {
            chatID: 39,
            speaker: "ppgirl",
            text: "Ok pervert. Gotta run! Don't sniff my piss when I'm gone. ",
            button: [
                { chatID: 40, text: "...", callback: "pee5" },
            ]
        },
        {
            chatID: 40,
            speaker: "thinking",
            text: "Such a bitch! I'm just trying to run and she's blaming me for her pissing in the path! Such bullshit! ",
            button: [
                { chatID: -1, text: "I'm going to run too!", callback: "completeRun" },
            ]
        },
        {
            chatID: 41,
            speaker: "ppgirl",
            text: "Oh! I didn't expect that. I guess I don't really think about my pee. What do you like about my pee? ",
            button: [
                { chatID: 42, text: "I love the humiliation of being pissed on. Really shows what a submissive I am. ", callback: "ppsub" },
                { chatID: 42, text: "I love how it smells and tastes. ", callback: "pporal" },
                { chatID: 42, text: "I just find the act of urinating so mesmorizing. It really is a thing of beauty.", callback: "ppcharisma" },

            ]
        },
        {
            chatID: 42,
            speaker: "ppgirl",
            text: "Oh. Hmmm. I hadn't thought about it like that. Hmmmmm",
            button: [
                { chatID: 43, text: "...", callback: "pp4" },
            ]
        },
        {
            chatID: 43,
            speaker: "ppgirl",
            text: "I have to admit I do find it interesting to pee on someone. I've never done that before. If you catch me when " +
                "I'm out running I'll pee on you if you want. But no funny stuff. I'm a virgin, and I intend to stay that way! Deal? ",
            button: [
                { chatID: 31, text: "Deal!", callback: "pp5" },
            ]
        },
        {
            chatID: 44,
            speaker: "ppgirl",
            text: "You really have an uncanny knack for catching me peeing.  ",
            button: [
                { chatID: -1, text: "I know. ", callback: "completeRun" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
