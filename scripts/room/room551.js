//Room name
var room551 = {};
room551.main = function () {
    //if (g.pass === "runaway" || g.pass === "win" && cl.wearing().lewd) {
    //    g.pass = "";
    //    char.room(552);
    //}
    //else {
    //    if (g.pass === "runaway" || g.pass === "win") {
    //        g.pass = "";
    //    }
    
    var btnList = [
        {
            "type": "btn",
            "name": "bathroom",
            "left": 1705,
            "top": 112,
            "width": 215,
            "height": 392,
            "image": "551_gymInside/bathroom.png"
        },
        {
            "type": "btn",
            "name": "treadmill",
            "left": 1157,
            "top": 240,
            "width": 405,
            "height": 188,
            "image": "551_gymInside/treadmil.png"
        },
        {
            "type": "btn",
            "name": "exit",
            "left": 1080,
            "top": 160,
            "width": 98,
            "height": 120,
            "image": "551_gymInside/exit.png"
        },
        {
            "type": "btn",
            "name": "emp",
            "left": 563,
            "top": 154,
            "width": 65,
            "height": 160,
            "image": "551_gymInside/empDoor.png"
        }
    ];
    if (!daily.get("g")) {
        if (Math.floor(Math.random() * 2) === 0) {
            btnList.push({
                "type": "btn",
                "name": "squat",
                "left": 549,
                "top": 332,
                "width": 809,
                "height": 746,
                "image": "551_gymInside/551_squat.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "squat",
                "left": 550,
                "top": 27,
                "width": 811,
                "height": 1053,
                "image": "551_gymInside/551_squat1.png"
            });
        }
    }
    var navList = [0, 552, 553];
    if (sc.getMission("g", "secret").inProgress && !daily.get("g"))
        navList.push(555);
    $.each(btnList, function (i, v) {
        nav.button(v, 551);
    });
    nav.buildnav(navList);
};

room551.btnclick = function (name) {
    switch (name) {
        case "treadmill":
            if (gv.get("energy") > 29) {
                nav.killall();
                nav.bg("551_gymInside/running.jpg");
                chat(49, 551);
            }
            else
                chat(0, 551);
            break;
        case "exit":
            char.room(0);
            break;
        case "bathroom":
            nav.killall();
            nav.bg("551_gymInside/bathroomFull.jpg");
            var btnList = [
                {
                    "type": "btn",
                    "name": "girl",
                    "left": 1226,
                    "top": 63,
                    "width": 672,
                    "height": 1017,
                    "image": "551_gymInside/bathroomGirl.jpg"
                },
                {
                    "type": "btn",
                    "name": "boy",
                    "left": 420,
                    "top": 63,
                    "width": 672,
                    "height": 1017,
                    "image": "551_gymInside/bathroomBoy.jpg"
                }];
            $.each(btnList, function (i, v) {
                nav.button(v, 551);
            });
            break;
        case "boy":
            char.room(552);
            break;
        case "girl":
            char.room(553);
            break;
        case "squat":
            nav.killbutton("squat");
            nav.button({
                "type": "img",
                "name": "squat",
                "left": 670,
                "top": 0,
                "width": 638,
                "height": 1080,
                "image": "551_gymInside/551_squat2.png"
            }, 551);
            var missionWorkout = sc.getMission("g", "workout");
            var secretRoom = sc.getMission("g", "secret");
            var spar = sc.getMission("g", "spar");
            var strengthLevel = levels.get("strength").l;

            if (missionWorkout.notStarted) {
                chat(1, 551);
            }
            else if (strengthLevel > 0 && spar.notStarted) {
                sc.completeMissionTask("g", "workout", 1);
                chat(46, 551);
            }
            else if (strengthLevel > 4 && secretRoom.notStarted) {
                chat(37, 551);
            }
            else {
                if (secretRoom.inProgress || spar.inProgress) {
                    sc.select("icon_workout", "551_gymInside/icon_workout.png", 0);
                    if (spar.startedOrComplete)
                        sc.select("icon_spar", "551_gymInside/icon_spar.png", 1);
                    if (secretRoom.inProgress)
                        sc.select("icon_secret", "551_gymInside/icon_secret.png", 2);
                    sc.selectCancel("icon_cancel", 3);
                }
                else {
                    var outfit = cl.hasoutfit("workout");
                    if (outfit !== null) {
                        g.internal = outfit;
                        chat(31, 551);
                    }
                    else if (gv.get("energy") < 50)
                        chat(32, 551);
                    else if (sc.taskGetStep("g", "workout") === -1)
                        chat(14, 551);
                    else
                        chat(33, 551);
                }
            }
            
            break;
        case "icon_workout":
            chat(33, 551);
            break;
        case "icon_spar":
            char.room(556);
            break;
        case "icon_secret":
            char.room(555);
            break;
        case "icon_cancel":
            char.room(551);
            break;
        case "emp":
            if (sc.getMission("g", "secret").inProgress) {
                if (daily.get("g")) {
                    nav.button({
                        "type": "btn",
                        "name": "empDoorOnly",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "551_gymInside/bathroomemp.jpg"
                    }, 551);
                    chat(41, 551);
                }
                else
                    char.room(555);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "empDoorOnly",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "551_gymInside/bathroomemp.jpg"
                }, 551);
                chat(38, 551);
            }
            break;
        default:
            break;
    }
};

room551.chatcatch = function (callback) {
    switch (callback) {
        case "squat3":
            nav.killbutton("squat");
            nav.button({
                "type": "img",
                "name": "squat",
                "left": 670,
                "top": 0,
                "width": 638,
                "height": 1080,
                "image": "551_gymInside/551_squat3.png"
            }, 551);
            break;
        case "squat4":
            nav.killbutton("squat");
            nav.button({
                "type": "img",
                "name": "squat",
                "left": 670,
                "top": 0,
                "width": 1068,
                "height": 1080,
                "image": "551_gymInside/551_squat4.png"
            }, 551);
            if (sc.getMissionTask("chad", "membership", 1).success)
                chat(4, 551);
            else
                chat(5, 551);
            break;
        case "squat5":
            nav.killbutton("squat");
            sc.show("g");
            sc.startMission("g", "workout");
            sc.completeMissionTask("g", "workout", 0, true);
            daily.set("g");
            char.addtime(60);
            break;
        case "situp1":
            nav.killall();
            nav.bg("551_gymInside/sit1.jpg");
            break;
        case "situp2":
            nav.killall();
            nav.bg("551_gymInside/sit2.jpg");
            break;
        case "situp3":
            nav.bg("551_gymInside/sit1.jpg");
            break;
        case "situp4":
            nav.bg("551_gymInside/551_gym.jpg");
            nav.button({
                "type": "img",
                "name": "squat",
                "left": 670,
                "top": 0,
                "width": 638,
                "height": 1080,
                "image": "551_gymInside/551_squat3.png"
            }, 551);
            break;
        case "workedout":
            gv.mod("energy", -50);
            levels.mod("fitness", 15, 999);
            levels.mod("strength", 34, 999);
            sc.completeMissionTask("g", "workout", 1, true);
            daily.set("g");
            nav.killall();
            nav.bg("551_gymInside/551_gym.jpg");
            var btnList = [
                {
                    "type": "btn",
                    "name": "bathroom",
                    "left": 1705,
                    "top": 112,
                    "width": 215,
                    "height": 392,
                    "image": "551_gymInside/bathroom.png"
                },
                {
                    "type": "btn",
                    "name": "exit",
                    "left": 1080,
                    "top": 160,
                    "width": 98,
                    "height": 120,
                    "image": "551_gymInside/exit.png"
                },
                {
                    "type": "btn",
                    "name": "emp",
                    "left": 563,
                    "top": 154,
                    "width": 65,
                    "height": 160,
                    "image": "551_gymInside/empDoor.png"
                }];
            $.each(btnList, function (i, v) {
                nav.button(v, 551);
            });
            nav.buildnav(552, 0);
            break;
        case "eSit":
            nav.killall();
            nav.bg("551_gymInside/sit2.jpg");
            g.pass = "sit";
            g.internal = 1;
            break;
        case "ePush":
            nav.killall();
            nav.bg("551_gymInside/pu1.jpg");
            g.pass = "push";
            g.internal = 1;
            break;
        case "eSquat":
            nav.killall();
            nav.bg("551_gymInside/s1.jpg");
            g.pass = "squat";
            g.internal = 1;
            break;
        case "down":
            switch (g.pass) {
                case "sit":
                    nav.bg("551_gymInside/sit1.jpg");
                    break;
                case "push":
                    nav.bg("551_gymInside/pu2.jpg");
                    break;
                case "squat":
                    nav.bg("551_gymInside/s2.jpg");
                    break;
            }
            break;
        case "up":
            g.internal++;
            switch (g.pass) {
                case "sit":
                    nav.bg("551_gymInside/sit2.jpg");
                    break;
                case "push":
                    nav.bg("551_gymInside/pu1.jpg");
                    break;
                case "squat":
                    nav.bg("551_gymInside/s1.jpg");
                    break;
            }
            if (g.internal < 6)
                chat(34, 551);
            else
                chat(36, 551);
            break;
        case "secret":
            char.room(555);
            break;
        case "endDay":
            gv.mod("energy", -50);
            levels.mod("fitness", 15, 999);
            levels.mod("strength", 30, 999);
            daily.set("g");
            nav.killall();
            nav.bg("551_gymInside/551_gym.jpg");
            var btnList1 = [
                {
                    "type": "btn",
                    "name": "bathroom",
                    "left": 1705,
                    "top": 112,
                    "width": 215,
                    "height": 392,
                    "image": "551_gymInside/bathroom.png"
                },
                {
                    "type": "btn",
                    "name": "exit",
                    "left": 1080,
                    "top": 160,
                    "width": 98,
                    "height": 120,
                    "image": "551_gymInside/exit.png"
                },
                {
                    "type": "btn",
                    "name": "emp",
                    "left": 563,
                    "top": 154,
                    "width": 65,
                    "height": 160,
                    "image": "551_gymInside/empDoor.png"
                }];
            $.each(btnList1, function (i, v) {
                nav.button(v, 551);
            });
            nav.buildnav(552, 0);
            break;
        case "killDoor":
            nav.killbutton("empDoorOnly");
            break;
        case "setBackGym":
            sc.startMission("g", "secret");
            break;
        case "checkSpar":
            if (inv.has("sewer"))
                chat(44, 551);
            else
                chat(43, 551); 
            break;
        case "sparTrain":
            char.room(556);
            break;
        case "spar":
            g.pass = { enemy0: "g", enemy1: null, enemy2: null, bg: "gym", roomID: 551 };
            char.room(227);
            break;
        case "sparExplain":
            //sc.setstep("g", 2);
            //sc.setstep("g", -4);
            char.room(556);
            break;
        case "crowbar":
            inv.add("sewer");
            nav.button({
                "type": "zimg",
                "name": "spar",
                "left": 695,
                "top": 305,
                "width": 531,
                "height": 473,
                "image": "556_spar/sewer.png"
            }, 556);
            break;
        case "reset":
            char.room(551);
            break;
        case "completeRun":
            gv.mod("energy", -30);
            levels.mod("fitness", 51, 999);
            char.addtime(47);
            char.room(551);
            break;
        default:
            break;
    }
};

room551.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I'm exhausted. Maybe tomorrow [Need 30 energy]. ",
            button: []
        },
        {
            chatID: 1,
            speaker: "g",
            text: "What do you want wimp chicken?",
            button: [
                { chatID: 2, text: "uhh I don't know...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "So your as stupid as you are wimpy?",
            button: [
                { chatID: 3, text: "Oh uh.. what?", callback: "squat3" }
            ]
        },
        {
            chatID: 3,
            speaker: "g",
            text: "This is a real gym. Bitches like you don't belong here. Who let you in? ",
            button: [
                { chatID: -1, text: "Oh uh " + sc.n("chad") + ".", callback: "squat4" }
            ]
        },
        {
            chatID: 4,
            speaker: "chad",
            text: "I did. This small dick dweeb paid me $500 to work out here!",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "chad",
            text: "I did. This small dick dweeb gave me a topless picture of " + sc.n("lola") + " to get in. What a loser.",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "g",
            text: "Hahaha, you are pathetic. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "chad",
            text: "Yeah he is! In high school he was such a loser we would give wedgies every day and he would let us! Such a pussy.",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "g",
            text: "Hahaha it's cause he couldn't fight back with those little bitch arms!",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "chad",
            text: "Hahah! He does look like a bitch. He's wasting his time coming here, he'll never be able to bench his own body weight!",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "g",
            text: "This little wimp probably couldn't even lift the bar! ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "chad",
            text: "yeah he'll hurt himself if he even tries. " + sc.n("me") + " you should probably just go. You don't belong here.",
            button: [
                { chatID: 12, text: "But I want to work out....", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "g",
            text: "You know, I like a project. " + sc.n("chad") + " I'll take this little bitch on. " + sc.n("me") + " come back later and I'll help you. ",
            button: [
                { chatID: 13, text: "Really", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "g",
            text: "Yeah. You're going to be whining like a bitch when I'm done with you. I've got to go. ",
            button: [
                { chatID: -1, text: "Sure, awesome!", callback: "squat5" }
            ]
        },
        {
            chatID: 14,
            speaker: "g",
            text: "You're back. I didn't expect you to return. ",
            button: [
                { chatID: 15, text: "Yes, I wanted to get a lesson", callback: "squat3" }
            ]
        },
        {
            chatID: 15,
            speaker: "g",
            text: "We'll see if you can do a sit up. Now get your bitch ass on the floor.",
            button: [
                { chatID: 16, text: "[Lay down]", callback: "situp1" }
            ]
        },
        {
            chatID: 16,
            speaker: "g",
            text: "Ok bitch, now sit up.",
            button: [
                { chatID: 17, text: "[Sit up]", callback: "situp2" }
            ]
        },
        {
            chatID: 17,
            speaker: "g",
            text: "And Down",
            button: [
                { chatID: 18, text: "[Down]", callback: "situp3" }
            ]
        },
        {
            chatID: 18,
            speaker: "g",
            text: "And up.",
            button: [
                { chatID: 19, text: "[Sit up]", callback: "situp2" }
            ]
        },
        {
            chatID: 19,
            speaker: "g",
            text: "And Down",
            button: [
                { chatID: 20, text: "[Down]", callback: "situp3" }
            ]
        },
        {
            chatID: 20,
            speaker: "g",
            text: "And up.",
            button: [
                { chatID: 21, text: "[Sit up]", callback: "situp2" }
            ]
        },
        {
            chatID: 21,
            speaker: "g",
            text: "And Down",
            button: [
                { chatID: 22, text: "[Sit up]", callback: "situp3" }
            ]
        },
        {
            chatID: 22,
            speaker: "g",
            text: "And up.",
            button: [
                { chatID: 23, text: "[Sit up]", callback: "situp2" }
            ]
        },
        {
            chatID: 23,
            speaker: "g",
            text: "And Down",
            button: [
                { chatID: 24, text: "[Down]", callback: "situp3" }
            ]
        },
        {
            chatID: 24,
            speaker: "g",
            text: "And up.",
            button: [
                { chatID: 25, text: "[Sit up]", callback: "situp2" }
            ]
        },
        {
            chatID: 25,
            speaker: "g",
            text: "And Down",
            button: [
                { chatID: 26, text: "[Down]", callback: "situp3" }
            ]
        },
        {
            chatID: 26,
            speaker: "g",
            text: "You've only done 5 and I can see the sweat on your forehead, you lumpy piece of crap. Give me one more.",
            button: [
                { chatID: 27, text: "[Sit up]", callback: "situp2" }
            ]
        },
        {
            chatID: 27,
            speaker: "g",
            text: "Ok down and you're done.",
            button: [
                { chatID: 28, text: "[Down]", callback: "situp3" }
            ]
        },
        {
            chatID: 28,
            speaker: "g",
            text: "Ok down and you're done.",
            button: [
                { chatID: 29, text: "[Down]", callback: "situp2" }
            ]
        },
        {
            chatID: 29,
            speaker: "g",
            text: "Ok bitch, on your feet.",
            button: [
                { chatID: 30, text: "[Stand up]", callback: "situp4" }
            ]
        },
        {
            chatID: 30,
            speaker: "g",
            text: "Hit the showers, you smell like a used sweat sock.",
            button: [
                { chatID: -1, text: "ok", callback: "workedout" }
            ]
        },
        {
            chatID: 31,
            speaker: "g",
            text: "Hey idiot. I told you to wear workout clothes. You're missing " + g.internal + ". You can change in the bathroom. ",
            button: [
                { chatID: -1, text: "......", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "g",
            text: "You ready to work out, or are you going to be a little bitch?",
            button: [
                { chatID: -1, text: "No, I need more energy.", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "g",
            text: "You want to work that sissy body of yours? What exercise do you want to do?",
            button: [
                { chatID: 34, text: "Sit-ups", callback: "eSit" },
                { chatID: 34, text: "Push-ups", callback: "ePush" },
                { chatID: 34, text: "Squats", callback: "eSquat" },
                { chatID: -1, text: "Never mind", callback: "reset" },
            ]
        },
        {
            chatID: 34,
            speaker: "g",
            text: "And down",
            button: [
                { chatID: 35, text: "...", callback: "down" }
            ]
        },
        {
            chatID: 35,
            speaker: "g",
            text: "Get up bitch",
            button: [
                { chatID: -1, text: "...", callback: "up" }
            ]
        },
        {
            chatID: 36,
            speaker: "g",
            text: "You're done, fuck off",
            button: [
                { chatID: -1, text: "...", callback: "endDay" }
            ]
        },
        {
            chatID: 37,
            speaker: "g",
            text: "Welcome back. You've done well, but you're still a little bitch. I think you're ready for more though. You gotta keep your " +
                "body confused. ",
            button: [
                { chatID: 39, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "chad",
            text: "Hey dweeb! Can't you read, it says you can't go in there!",
            button: [
                { chatID: -1, text: "...", callback: "killDoor" }
            ]
        },
        {
            chatID: 39,
            speaker: "g",
            text: "I'm going to let " + sc.n("chad") + " know you can go in the Employee only door and get some special training. " +
                "The back room is about pure training of the total body, only the trainer and trainee with nothing in between them, no equipment, " +
                "weights, bars, bands..... or clothes. It's pretty advanced for such a little bitch like you, but with my help I think you can handle it.",
            button: [
                { chatID: 40, text: "That sounds great", callback: "setBackGym" }
            ]
        },
        {
            chatID: 40,
            speaker: "g",
            text: "I'm going to take that puny body of yours and sculpt it into something beautiful. Follow me",
            button: [
                { chatID: 34, text: "*Gulp*", callback: "secret" }
            ]
        },
        {
            chatID: 41,
            speaker:"chad",
            text: "Hey shrimp, only one workout a day.",
            button: [
                { chatID: -1, text: "Oh, ok", callback: "killDoor" }
            ]
        },
        {
            chatID: 42,
            speaker: "g",
            text: "You want to work that sissy body of yours? Do you want to spar, or workout?",
            button: [
                { chatID: -1, text: "Spar", callback: "checkSpar" },
                { chatID: 34, text: "Sit-ups", callback: "eSit" },
                { chatID: 34, text: "Push-ups", callback: "ePush" },
                { chatID: 34, text: "Squats", callback: "eSquat" },
                { chatID: -1, text: "Never mind", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "g",
            text: "I'm going to make you squeel like the bitch you are.",
            button: [
                { chatID: -1, text: "Training", callback: "sparTrain" },
                { chatID: -1, text: "Never mind", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "g",
            text: "I'm going to make you squeel like the bitch you are.",
            button: [
                { chatID: -1, text: "Training", callback: "sparTrain" },
                { chatID: -1, text: "Spar", callback: "spar" },
                { chatID: -1, text: "Never mind", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "g",
            text: "Hey runt. I'm " + sc.n("g") + " I'm guessing you're here 'cause " + sc.n("missy") + " sent you to get trained. ",
            button: [
                { chatID: 48, text: "Yes", callback: "crowbar" }
            ]
        },
        {
            chatID: 46,
            speaker: "g",
            text: "So you've had some gains, now it's time to use them! ",
            button: [
                { chatID: 47, text: "Huh?", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "g",
            text: "Follow me to our sparring ring. I'm going to show you how to fight so you're not just some " +
                "sissy bitch that gets their ass kicked all the time. ",
            button: [
                { chatID: -1, text: "Ok", callback: "sparExplain" },
            ]
        },
        {
            chatID: 48,
            speaker: "g",
            text: "She told me to give you this crowbar to open the sewer grate next to the club. See me if you need any training, I'll " + 
                "teach you how not to be a little bitch in a fight. If you already feel you can go and kick some ass, good luck, and " +
                "try not to be some bad man's fuck toy",
            button: [
                { chatID: -1, text: "Thanks! Please train me", callback: "sparExplain" },
                { chatID: -1, text: "I'm good. I know what I'm doing. ", callback: "reset" },
            ]
        },
        {
            chatID: 49,
            speaker: "g",
            text: "I so much hate running on a treadmill",
            button: [
                { chatID: -1, text: "Complete Run ", callback: "completeRun" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
