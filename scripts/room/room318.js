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
                "left": 613,
                "top": 0,
                "width": 214,
                "height": 676,
                "image": "318_janiceBedroom/closet.png"
            }, 318);
            nav.button({
                "type": "btn",
                "name": "bed",
                "left": 1129,
                "top": 132,
                "width": 791,
                "height": 739,
                "image": "318_janiceBedroom/bed.png"
            }, 318);
            nav.button({
                "type": "btn",
                "name": "dresser",
                "left": 135,
                "top": 412,
                "width": 400,
                "height": 107,
                "image": "318_janiceBedroom/dresser.png"
            }, 318);
            nav.button({
                "type": "btn",
                "name": "nightstand",
                "left": 987,
                "top": 400,
                "width": 172,
                "height": 74,
                "image": "318_janiceBedroom/nightstand.png"
            }, 318);
        }

    }
    else if (sc.taskGetStep("janice", "femdom") === 6) {
        cl.nude();
        sc.completeMissionTask("janice", "femdom", 6);
        nav.bg("318_janiceBedroom/b2_0.jpg");
        g.internal = { gender: gender.pronoun("f"), step: 7 };
        chat(13, 318);
    }
    else if (gv.get("janiceDatr") !== null) {
        if (sc.getMission("janice", "datr").notStarted) {
            sc.startMission("janice", "datr");
            nav.bg("318_janiceBedroom/datr_0.jpg");
            chat(24, 318);
        }
        else {
            room318.chatcatch("datr_start");
        }

        return;
    }
    
    else if (g.pass === "endSleepyTime") {
        g.pass = null;
        chat("sleepy", 318);
        nav.buildnav([316, 0]);
        return
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
        case "b2":
            if (g.internal.step === 10) {
                nav.killbutton("b2");
                levels.anal(1, true, "f", false, "janice");
                chat(21, 318);
            }
            else {
                nav.bg("318_janiceBedroom/b2_" + g.internal.step + "_" + g.internal.gender + ".jpg");
                g.internal.step++;
            }
            break;
        case "brad1":
            nav.bg("318_janiceBedroom/datr_brad_" + g.internal + ".jpg");
            if (g.internal === 3) {
                zcl.kill();
            }
            else if (g.internal === 4) {
                zcl.displayMain(130, 900, .32, "clothes", false);
                nav.button({
                    "type": "img",
                    "name": "brad",
                    "left": 400,
                    "top": 0,
                    "width": 1036,
                    "height": 1080,
                    "image": "318_janiceBedroom/datr_brad_4.png"
                }, 318);
            }
            else if (g.internal === 5) {
                zcl.kill();
                nav.killbutton("brad");
            }
            else if (g.internal === 6) {
                nav.killall();
                if (sc.getMissionTask("janice", "webcam", 2).complete)
                    chat(29, 318);
                else
                    chat(30, 318);
            }
            g.internal++;
            break;
        case "jabari":
            if (g.internal.gamestep === 11) {
                nav.killbutton("jabari_dog");
            }

            if (g.internal.gamestep > 11) {
                nav.killall();
                nav.bg("318_janiceBedroom/datr_brad_7.jpg");
                chat(38, 318);
                return;
            }
            else {
                nav.bg("318_janiceBedroom/jabari" + g.internal.gamestep + ".jpg");
            }

            nav.killbutton("jabari_strip");
            nav.killbutton("jabari_sub");
            nav.killbutton("jabari_pet");

            if ((g.internal.dogstep === 100 || g.internal.dogstep === 2) && g.internal.revert) {
                nav.killbutton("jabari_dog");
                nav.button({
                    "type": "img",
                    "name": "jabari_dog",
                    "left": 1554,
                    "top": 563,
                    "width": 231,
                    "height": 286,
                    "image": "318_janiceBedroom/jabari_dog0.png"
                }, 318);
                g.internal.dogstep = 0;
            }
            else if (g.internal.dogstep === 10) {
                nav.killbutton("jabari_dog");
                nav.button({
                    "type": "img",
                    "name": "jabari_dog",
                    "left": 552,
                    "top": 309,
                    "width": 1000,
                    "height": 668,
                    "image": "316_livingroom/df.png"
                }, 316);
                g.internal.dogstep = 11;
            }
            else if (g.internal.dogstep === 11) {
                nav.modbutton("jabari_dog", "316_livingroom/df1.png");
                g.internal.dogstep = 12;
            }
            else if (g.internal.dogstep === 12) {
                nav.modbutton("jabari_dog", "316_livingroom/df2.png");
                g.internal.dogstep = 13;
            }
            else if (g.internal.dogstep === 13) {
                nav.killbutton("jabari_dog");
                levels.anal(3, false, "m", true, "dog", "dog");
                zcl.kill();
                nav.button({
                    "type": "img",
                    "name": "jabari_dog",
                    "left": 1554,
                    "top": 563,
                    "width": 231,
                    "height": 286,
                    "image": "318_janiceBedroom/jabari_dog0.png"
                }, 318);
                nav.button({
                    "type": "img",
                    "name": "jabari_dogkill",
                    "left": 418,
                    "top": 601,
                    "width": 1172,
                    "height": 433,
                    "image": "318_janiceBedroom/jabari_dog13_" + gender.pronoun("f") + ".png"
                }, 318);
                g.internal.dogstep = 14;
            }
            else if (g.internal.dogstep === 14) {
                nav.killbutton("jabari_dogkill");
                g.internal.dogstep = 15;
            }

            g.internal.revert = true;
            g.internal.gamestep++;
            break;
        case "jabari_dog":
            room318.btnclick("jabari");
            nav.killbutton("jabari_strip");
            nav.killbutton("jabari_sub");
            nav.killbutton("jabari_pet");
            switch (g.internal.dogstep) {
                case 0:
                    if (g.internal.gamestep > 4) {
                        nav.modbutton("jabari_dog", "318_janiceBedroom/jabari_dog100.png", null, null);
                        g.internal.dogstep = 100;
                        g.internal.revert = false;
                    }
                    else if (cl.isLewd()) {
                        nav.killbutton("jabari_dog");
                        nav.button({
                            "type": "grab",
                            "name": "jabari_dog",
                            "left": 542,
                            "top": 512,
                            "width": 706,
                            "height": 466,
                            "image": "318_janiceBedroom/jabari_dog.png"
                        }, 318);
                        g.internal.dogstep = 1;
                    }
                    else {
                        nav.modbutton("jabari_dog", "318_janiceBedroom/jabari_dog100.png", null, null);
                        g.internal.dogstep = 100;
                        g.internal.revert = false;
                    }
                    break;
                case 1:
                    if (g.internal.gamestep > 6) {
                        nav.killbutton("jabari_dog");
                        nav.button({
                            "type": "grab",
                            "name": "jabari_dog",
                            "left": 1554,
                            "top": 563,
                            "width": 231,
                            "height": 286,
                            "image": "318_janiceBedroom/jabari_dog0.png"
                        }, 318);
                        g.internal.dogstep = 0;
                        g.internal.revert = false;
                    }
                    else if (levels.get("beast").l > 4) {
                        if (cl.isLewd()) {
                            sc.select("jabari_sub", "316_livingroom/icon_sub.png", 1);
                        }
                        else {
                            sc.select("jabari_strip", "318_janiceBedroom/icon_strip.png", 1);
                        }
                    }
                    else {
                        levels.mod("beast", 20, 5);
                        nav.killbutton("jabari_dog");
                        nav.button({
                            "type": "img",
                            "name": "jabari_dog",
                            "left": 812,
                            "top": 0,
                            "width": 1050,
                            "height": 1080,
                            "image": "318_janiceBedroom/jabari_dog2.png"
                        }, 318);
                        g.internal.dogstep = 2;
                        g.internal.revert = true;
                    }
                    break;
                case 100:
                    if (g.internal.gamestep > 5) {
                        nav.modbutton("jabari_dog", "318_janiceBedroom/jabari_dog0.png", null, null);
                        g.internal.dogstep = 0;
                        g.internal.revert = false;
                    }
                    else {
                        nav.killbutton("jabari_dog");
                        nav.button({
                            "type": "grab",
                            "name": "jabari_dog",
                            "left": 542,
                            "top": 512,
                            "width": 706,
                            "height": 466,
                            "image": "318_janiceBedroom/jabari_dog.png"
                        }, 318);
                        g.internal.dogstep = 1;
                    }
                    break;
            }
            
            break;
        case "jabari_strip":
            cl.nude();
            room318.btnclick("jabari_dog");
            break;
        case "jabari_sub":
            nav.killbutton("jabari_sub");
            nav.killbutton("jabari_dog");
            zcl.assup(550, 400, .8, "");
            nav.button({
                "type": "img",
                "name": "jabari_dog",
                "left": 1081,
                "top": 404,
                "width": 571,
                "height": 676,
                "image": "318_janiceBedroom/jabari_dog3.png"
            }, 318);
            g.internal.dogstep = 10;
            break;
        case "datr_jarome":
            nav.bg("318_janiceBedroom/datr_jarome_" + g.internal + ".jpg");
            if (g.internal === 6) {
                nav.killbutton("datr_jarome");
                chat(55, 318);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room318.chatcatch = function (callback) {
    switch (callback) {
        case "datr_2":
        case "bg":
        case "datr_brad_1":
        case "datr_brad_7":
        case "datr_mike_1":
        case "datr_mike_4":
            nav.bg("318_janiceBedroom/" + callback + ".jpg");
            break;
        case "datr_mike_3":
        case "datr_brad_8":
            nav.kill();
            switch (gv.get("janiceDatr")) {
                case "brad": levels.swallowCum("m", "chad"); break;
                case "jabari": levels.swallowCum("m", "!jabari"); break;
                case "mike": levels.swallowCum("m", "!boxes"); break;
                case "jarome": levels.swallowCum("m", "!jarome"); break;
            }
            nav.bg("318_janiceBedroom/" + callback + ".jpg");
            break;
        case "datr_jarome_1":
            nav.bg("318_janiceBedroom/" + callback + "_" + gender.pronoun("f") + ".jpg");
            g.internal = 2;
            nav.next("datr_jarome");
            break;
        case "b2_1":
        case "b2_2":
        case "b2_3":
        case "b2_4": 
        case "b2_5":
        case "b2_10":
            nav.bg("318_janiceBedroom/" + callback + "_" + g.internal.gender + ".jpg");
            break;
        case "b2_6":
            nav.killall();
            nav.bg("318_janiceBedroom/" + callback + "_" + g.internal.gender + ".jpg");
            nav.next("b2");
            break;
        case "b2_end":
            cl.undo();
            sc.modLevel("janice", 100, 10);
            char.addtime(120);
            char.room(0);
            break;
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
            gv.mod("masturbate_vibrator", 1);
            nav.bg("318_janiceBedroom/" + (cl.c.chastity !== null ? "vib_chast2.jpg" : "vib_dick2.jpg"));
            break;
        case "breakup":
            sc.completeMission("janice", "datr", false);
            sc.startMission("janice", "breakup");
            daily.set("janice");
            cl.undo();
            char.room(0);
            break;
        case "good":
            sc.modLevel("janice", 20, 10);
            nav.bg("318_janiceBedroom/datr_1.jpg");
            break;
        case "bad":
            nav.bg("318_janiceBedroom/datr_1.jpg");
            break;
        case "datr_start":
            switch (gv.get("janiceDatr")) {
                case "brad":
                    if (sc.getMissionTask("janice", "datr", 4).notStarted) {
                        sc.completeMissionTask("janice", "datr", 4);
                    }
                    else {
                        sc.completeMissionTask("janice", "datr", 5);
                    }
                    nav.bg("318_janiceBedroom/datr_brad_0.jpg");
                    chat("brad0", 318);
                    break;
                case "jabari":
                    nav.bg("318_janiceBedroom/jabari0.jpg");
                    if (sc.getMissionTask("janice", "datr", 6).notStarted) {
                        sc.completeMissionTask("janice", "datr", 6);
                        chat(34, 318);
                    }
                    else {
                        sc.completeMissionTask("janice", "datr", 7);
                        chat(39, 318);
                    }
                    break;
                case "mike":
                    nav.bg("318_janiceBedroom/datr_mike_0.jpg");
                    if (sc.getMissionTask("janice", "datr", 0).notStarted) {
                        sc.completeMissionTask("janice", "datr", 0);
                        chat(40, 318);
                    }
                    else {
                        sc.completeMissionTask("janice", "datr", 1);
                        chat(56, 318);
                    }
                    
                    break;
                case "jarome":
                    nav.bg("318_janiceBedroom/datr_jarome_0.jpg");
                    if (sc.getMissionTask("janice", "datr", 2).notStarted) {
                        sc.completeMissionTask("janice", "datr", 2);
                        chat(50, 318);
                    }
                    else {
                        sc.completeMissionTask("janice", "datr", 3);
                        chat(50, 318);
                    }
                    break;
            }
            break;
        case "brad1":
            nav.bg("318_janiceBedroom/datr_brad_2.jpg");
            zcl.displayMain(400, -1100, .65, "clothes", true);
            g.internal = 3;
            nav.next("brad1");
            break;
        case "jabari1":
            nav.bg("318_janiceBedroom/jabari1.jpg");
            nav.button({
                "type": "grab",
                "name": "jabari_dog",
                "left": 1554,
                "top": 563,
                "width": 231,
                "height": 286,
                "image": "318_janiceBedroom/jabari_dog0.png"
            }, 318);
            g.internal = { gamestep: 2, dogstep: 0, revert: false };
            nav.next("jabari");
            break;
        case "datr_mike_2":
            nav.bg("318_janiceBedroom/datr_mike_2.jpg");
            zcl.bj(0, 600, 1, "open", true);
            nav.button({
                "type": "img",
                "name": "mike",
                "left": 1279,
                "top": 0,
                "width": 641,
                "height": 1080,
                "image": "318_janiceBedroom/datr_mike_2_o.png"
            }, 318);
            break;
        case "sleep":
            gv.set("janiceDatr", null);
            g.pass = 318;
            char.room(28);
            break;
        case "o0":
        case "o1":
        case "o2":
        case "o3":
        case "o4":
            cl.wearSavedOutfit(callback[1]);
            char.room(318);
            break;
        case "o5":
            char.room(318);
            break;
        default:
            break;
    }
};

room318.chat = function (chatID) {
    if (chatID === "brad0") {
        if (cl.isLewd()) {
            if (gender.canUseCock()) {
                return {
                    chatID: 0,
                    speaker: "chad",
                    text: "Hahahahaha! You come to see what a real man's cock looks like? " +
                        "What's the matter, you couldn't please your girlfriend with your " +
                        "tiny shimp dick? Hahahahaha",
                    button: [
                        { chatID: 28, text: "...", callback: "datr_brad_1" }
                    ]
                };
            }
            return {
                chatID: 0,
                speaker: "chad",
                text: "Hahahahaha! Just sitting here naked like a bitch. Come to take " +
                    "lessons on how a real man fucks your girl! Hahahahaha",
                button: [
                    { chatID: 28, text: "...", callback: "datr_brad_1" }
                ]
            };
        }
        return {
            chatID: 0,
            speaker: "chad",
            text: "Hahahahaha! All dressed up to watch me fuck your girl friend? " +
                "Take notes on how a real man fucks your girl! Hahahahaha",
            button: [
                { chatID: 28, text: "...", callback: "datr_brad_1" }
            ]
        };
    }
    else if (chatID === "sleepy") {
        return {
            chatID: 9,
            speaker: "thinking",
            text: "What to wear.",
            button: [
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[0].name, callback: "o0" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[1].name, callback: "o1" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[2].name, callback: "o2" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[3].name, callback: "o3" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[4].name, callback: "o4" },
                { chatID: -1, text: "Get Up", callback: "o5" }
            ]
        };
    }
    else {
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
            {
                chatID: 13,
                speaker: "janice",
                text: "I'm so excited! After our talk I called a friend of mine that's so " +
                    "hot and has been trying to get in my panties all month. I knew I had " +
                    "to try it and see if this could work for me so I made this video for " +
                    "you yesterday and I'm just dying to show you. Just lay down on my bed! ",
                button: [
                    { chatID: 14, text: "Sure!", callback: "b2_1" },

                ]
            },
            {
                chatID: 14,
                speaker: "janice",
                text: "Do you like it when I rub my fingers over your balls? Tickles " +
                    "doesn't it? He let me set up my phone so I could record it for you. " +
                    "It made me feel like you're in the room watching me. I love being watched. ",
                button: [
                    { chatID: 15, text: "MMmmmmm", callback: "b2_2" },

                ]
            },
            {
                chatID: 15,
                speaker: "janice",
                text: "This video is just for you. I really hope you like it. I " +
                    "do love a nice butt like yours. Do you like it when a girl plays with " +
                    "your butt? ",
                button: [
                    { chatID: 16, text: "Yeah", callback: "b2_3" },
                    { chatID: 16, text: "Oh. no", callback: "b2_3" },

                ]
            },
            {
                chatID: 16,
                speaker: "janice",
                text: "I like playing with your butt. Now just relax. I'm going to try something. ",
                button: [
                    { chatID: 17, text: "yeaaaa", callback: "b2_4" },

                ]
            },
            {
                chatID: 17,
                speaker: "janice",
                text: "Most guys don't let me finger their ass. They say it's gay. I " +
                    "don't get it. I'm a girl, how could it be gay if it's my fingers " +
                    "in their ass. I guess it's gay if I put my fingers in a girl's ass, " +
                    "but I don't care. " +
                    "Worrying about what is or isn't gay is dumb. Sex is fun. ",
                button: [
                    { chatID: 18, text: "oooohhh ", callback: "b2_5" },
                ]
            },
            {
                chatID: 18,
                speaker: "me",
                text: "WAIT! Is that the guy? He's huge!",
                button: [
                    { chatID: 19, text: "...", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "janice",
                text: "Hahaha. Yeah silly. He was more than happy to help me create my video for you. " +
                    "Can you see how powerful his arms are? He was so sexy and manly! As " +
                    "soon as I saw him I knew we would be back at his place. Now " +
                    "stop talking and just watch while I make you feel good. ",
                button: [
                    { chatID: -1, text: "...ok", callback: "b2_6" },
                    { chatID: 20, text: "WHAT! No I'm not going to watch him fuck you. Are you crazy!", callback: "" },
                ]
            },
            {
                chatID: 20,
                speaker: "janice",
                text: "Oh. I thought you would be into this after you ate the waiter's cum " +
                    "out of me. Now stop yelling at me and enjoy my movie that I made for you! ",
                button: [
                    { chatID: -1, text: "GROSS! No I'm not watching this! We're done! I never want to see you again! [Breakup]", callback: "breakup" },
                    { chatID: -1, text: "...ok", callback: "b2_6" },
                ]
            },
            {
                chatID: 21,
                speaker: "janice",
                text: "Oh look. You had a little orgasm. Was it from me playing with your " +
                    "butt, or the look on my face when as I was filled with some stranger's " +
                    "cum? I bet it was me getting filled with cum.",
                button: [
                    { chatID: 22, text: "OOooooo  yeah....", callback: "b2_10" },
                ]
            },
            {
                chatID: 22,
                speaker: "janice",
                text: "I'm going to invite the waiter over again. The entire time we " +
                    "were making love I imagined you were watching us. Now I don't have " +
                    "to imagine, 'cause you'll be there. I'm so excited. ",
                button: [
                    { chatID: 23, text: "...but", callback: "" },
                ]
            },
            {
                chatID: 23,
                speaker: "janice",
                text: "Shhhh. Don't say anything. " + gender.pronoun("boy") + "'s don't " +
                    "think straight after an orgasm. Now I have to take " + sc.n("dog") +
                    " for his walk. Can't wait to see you again. I think I'm totally falling " +
                    "for you.",
                button: [
                    { chatID: -1, text: "ok. Bye?", callback: "b2_end" },
                ]
            },
            {
                chatID: 24,
                speaker: "janice",
                text: "So.. uh, how do I look? Is it too much? I'm so nervous. Why am I " +
                    "so nervous? I've selp with guys before. Usually I just let them take " +
                    "me to their place after we've met at a bar. I've never done this with " +
                    "someone I haven't met before. What if he just turns around and leaves. Ugh!",
                button: [
                    { chatID: 25, text: "You look amazing. He's lucky to have you. ", callback: "good" },
                    { chatID: 25, text: "Eh. I'm sure he'll do you. ", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "janice",
                text: "Oh! There he is! Uhhh. Just sit in the chair. Crap we should have " +
                    "talked about rules! Damn. Too late now. Don't touch my butt and you " +
                    "can masturbate if you want. Oh. Don't ruin it by talking about dumb stuff " +
                    "or being weird. ",
                button: [
                    { chatID: 26, text: "Weird?", callback: "datr_2" },
                ]
            },
            {
                chatID: 26,
                speaker: "janice",
                text: "Don't ask dumb question right before I let him in! Go sit in the chair " +
                    "and don't say anything! ",
                button: [
                    { chatID: 27, text: "ok", callback: "bg" },
                ]
            },
            {
                chatID: 27,
                speaker: "thinking",
                text: "Oh my. I don't know if I'm ready for this. Do I just sit here and " +
                    "and play with myself? Do I join in? Should I eat her out, suck his " +
                    "dick? I guess I'm nervous too. ",
                button: [
                    { chatID: -1, text: "[Wait for them to come in]", callback: "datr_start" },
                ]
            },
            {
                chatID: 28,
                speaker: "chad",
                text: "Sit back and watch a real man work. I'm going to have her screaming " +
                    "for my dick in ways you've never heard. ",
                button: [
                    { chatID: -1, text: "[Watch " + sc.n("chad") + " fuck your girlfriend]", callback: "brad1" },
                ]
            },
            {
                chatID: 29,
                speaker: "janice",
                text: "Oh wow! He fucks so much better than you! I'm so glad we decided " +
                    "to get a real man to fuck me! I don't know if I could live without " +
                    "orgasms like that! ",
                button: [
                    { chatID: 31, text: "He is way better than me. ", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "janice",
                text: "Now that's how a real man fucks! I'm so glad we decided " +
                    "to open our relationship! I don't know if I could live without " +
                    "orgasms like that! ",
                button: [
                    { chatID: 31, text: "He is way better than me. ", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "chad",
                text: "I've got to run to baseball practice. I'll let you two bitches " +
                    "finish up. Call me if you need a real dick! ",
                button: [
                    { chatID: 32, text: "ok. Bye " + sc.n("chad"), callback: "datr_brad_7" },
                ]
            },
            {
                chatID: 32,
                speaker: "janice",
                text: "He is so dreamy! It's too bad you're such a sissy, cuase I " +
                    "could use more dick. Oh well. I guess you can clean my pussy. " +
                    "Maybe if you eat enough cum you'll turn into a real man. *sigh* ",
                button: [
                    { chatID: 33, text: "Sweet!", callback: "datr_brad_8" },
                ]
            },
            {
                chatID: 33,
                speaker: "janice",
                text: "I do admit. It is nice having a pussy cleaner after sex. I hate " +
                    "doing to squat run to the bathroom while cum drips out of me. Cuddle " +
                    "with me while I sleep? ",
                button: [
                    { chatID: -1, text: "Yeah.", callback: "sleep" },
                ]
            },
            {
                chatID: 34,
                speaker: "!jabari",
                text: "What's you doin' here? This some kinda setup?",
                button: [
                    { chatID: 35, text: "*nervous laughter* no. I'm just here to watch. ", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "!jabari",
                text: "Whaaa? No. That's weird man. You's gots to go, or I've gots to go. ",
                button: [
                    { chatID: 36, text: "?", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "janice",
                text: "Awwww! I was looking forward to this. " + sc.n("me") + ", can you " +
                    "just wait in the living room? You can still here us. ",
                button: [
                    { chatID: 37, text: "...but", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "!jabari",
                text: "You heard her man. Get the fuck out so we can get our fuck on. ",
                button: [
                    { chatID: -1, text: "ok. ", callback: "jabari1" },
                ]
            },
            {
                chatID: 38,
                speaker: "janice",
                text: "Thank you so much for waiting for me! Wow! My mind and pussy are " +
                    "blown! He was amazing. He was totally worth kicking you out. But " +
                    "now time for your reward. You can eat a real man's cum. Lucky girl! ",
                button: [
                    { chatID: 33, text: "sweet! ", callback: "datr_brad_8" },
                ]
            },
            {
                chatID: 39,
                speaker: "!jabari",
                text: "Hey freak. Get the fuck out so I can fuck yo' girl! ",
                button: [
                    { chatID: -1, text: "ok...", callback: "jabari1" },
                ]
            },
            {
                chatID: 40,
                speaker: "!boxes",
                text: "Oh hi. I didn't know there were going to be 2 girls here. hehehe.  ",
                button: [
                    { chatID: 41, text: "*blush*", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "janice",
                text: "Let me introduce my fem-boyfriend " + sc.n("me") + "; " + gender.pronoun("he") +
                    " likes to watch me have sex since " + gender.pronoun("he") + "'s not " +
                    "manly enough to do it " + gender.pronoun("him") + "self. ",
                button: [
                    { chatID: 42, text: "*blush more*", callback: "" },
                ]
            },
            {
                chatID: 42,
                speaker: "!boxes",
                text: "That's so hot! Why don't we show your femboy what " + gender.pronoun("he") +
                    "'s missing. ",
                button: [
                    { chatID: 43, text: "oh yeah! ", callback: "datr_mike_1" },
                ]
            },
            {
                chatID: 43,
                speaker: "!boxes",
                text: "I hate to see you sitting there just watching. I can see you staring at my dick. " +
                    "Why don't you play the fluffer. Get me nice and hard so I can slide my dick " +
                    "into your girlfriend. I know that's what you really want. ",
                button: [
                    { chatID: 44, text: "oh please! ", callback: "datr_mike_2" },
                    { chatID: 44, text: "No thanks. I just like to watch. ", callback: "datr_mike_3" },
                ]
            },
            {
                chatID: 44,
                speaker: "!boxes",
                text: "You're such a good fem-boyfriend slobbering all over my dick and " +
                    "getting it lubed up for your cute little girlfriend. Do you like " +
                    "how it tastes? ",
                button: [
                    { chatID: 45, text: "MMmhmmmm ", callback: "" },
                    { chatID: 45, text: "gluck gluck", callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "!boxes",
                text: "I know you do! Now have a seat femboy and watch me give your " +
                    "girlfriend orgasms like she's never had! ",
                button: [
                    { chatID: 46, text: "MMmmmmmmmMMmm", callback: "datr_mike_3" },
                ]
            },
            {
                chatID: 46,
                speaker: "thinking",
                text: "He's been fucking her hard for like 20 minutes! How does he last " +
                    "that long? He must work out to have that kind of stamina. " +
                    "I haven't heard " + sc.n("janice") + " scream like that ever! I so wish " +
                    "I could orgasm like that for a solid 20 minutes. It's like waves, one " +
                    "orgasm after another. I wish he'd fuck me like that... ",
                button: [
                    { chatID: 47, text: "...", callback: "datr_mike_4" },
                ]
            },
            {
                chatID: 47,
                speaker: "!boxes",
                text: "So how's about it. Want to clean me off fem-boyfriend? You can taste us " +
                    "both at the same time. ",
                button: [
                    { chatID: 48, text: "I sure do!", callback: "datr_mike_2" },
                    { chatID: 33, text: "I'll pass. Thanks!", callback: "datr_brad_8" },
                ]
            },
            {
                chatID: 48,
                speaker: "!boxes",
                text: "I can't tell if you really love the taste of your girlfriend, " +
                    "or you just love sucking cock, but you are really good at it! ",
                button: [
                    { chatID: 33, text: "MMmmmMMmmm", callback: "datr_brad_8" },
                ]
            },
            {
                chatID: 49,
                speaker: "!boxes",
                text: "You two must really love my dick to keep calling me back! ",
                button: [
                    { chatID: 43, text: "Oh yeah!", callback: "datr_mike_1" },
                ]
            },
            {
                chatID: 50,
                speaker: "!jarome",
                text: "Hey sweetheart. Just got done with practice, thought I'd swing by, " +
                    "see what's up",
                button: [
                    { chatID: 51, text: "...", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "janice",
                text: "Oh my! my my my! You are so big! Unlike my fem-boyfriend you could " +
                    "scoop my up and carry me anywhere with those big strong arms of yours! ",
                button: [
                    { chatID: 52, text: "...", callback: "" },
                ]
            },
            {
                chatID: 52,
                speaker: "!jarome",
                text: "Yeah baby. I could even carry to that bed over there. So why don't " +
                    "you tell your little friend to take off so I can take them close off cha",
                button: [
                    { chatID: 53, text: "...", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "janice",
                text: "Do you mind if " + gender.pronoun("he") + " stays. " + gender.pronoun("he") +
                    " likes to watch. ",
                button: [
                    { chatID: 54, text: "...", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "!jarome",
                text: "Oh shit! It's like that. Ok. ya " + gender.pronoun("he") + " can watch a " +
                    "real man pound this little girl here out. Come here femboy, we're going to give " +
                    "you a front row seat! ",
                button: [
                    { chatID: -1, text: "...", callback: "datr_jarome_1" },
                ]
            },
            {
                chatID: 55,
                speaker: "!jarome",
                text: "Have fun lickin' up that nut boy. ",
                button: [
                    { chatID: 33, text: "MMmmm", callback: "datr_brad_8" },
                ]
            },
            {
                chatID: 56,
                speaker: "!jarome",
                text: "Can't get enough of this dick huh? Go ahead and take your place " +
                    "under a real woman and real man fem boy. ",
                button: [
                    { chatID: -1, text: "[Take your place]", callback: "datr_jarome_1" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};