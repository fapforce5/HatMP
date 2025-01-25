var trap = {};
var room1005 = {};

trap.char;
trap.phase = 0;
trap.type = "";
trap.roomId;
trap.callbackWin;
trap.name;

trap.init = function (location = "street", roomId = g.roomID, callbackWin = "", trapType = null, trapNum = null) {
    trap.phase = 0;
    trap.roomId = roomId;
    trap.callbackWin = callbackWin;
    trap.name = "random";
    if (trapType === null) {
        trap.type = "hole";
    }
    nav.killall();
    nav.bg("1005_trap/trap_" + (g.isNight() ? "n" : "d") + ".jpg");
    
    nav.button({
        "type": "zimg",
        "name": "m1004-dx",
        "left": 1600,
        "top": 150,
        "width": 300,
        "height": 318,
        "image": "1005_trap/trap_message.png"
    }, 1002);
    trap.displayMenu("init");
    
};

trap.roll = function () {
    nav.killbutton("m1004-dx");
    nav.button({
        "type": "zimg",
        "name": "m1004-dx",
        "left": 1600,
        "top": 150,
        "width": 300,
        "height": 318,
        "image": "1004_rape/icon_bg.png"
    }, 1002);

    var diceArray = new Array();
    var i;
    var rollToBeat = 21 + g.rand(0, 16);
    var totalRoll = 0;
    for (i = 0; i < 6; i++) {
        let thisRoll = g.rand(1, 7);
        diceArray.push(thisRoll);
        totalRoll += thisRoll;
    }

    if (totalRoll === rollToBeat)
        rollToBeat--;

    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1675,
        top: 170,
        font: 20,
        hex: "#ffffff",
        text: "Roll " + rollToBeat + " to escape!"
    });
    var c = 0;
    for (i = 0; i < 2; i++) {
        for (j = 0; j < 3; j++) {
            nav.button({
                "type": "zimg",
                "name": "m1004-d",
                "left": 1630 + (j * 95),
                "top": 210 + (i * 75),
                "width": 60,
                "height": 60,
                "image": "1001_rand/dice" + diceArray[c] + ".png"
            }, 1002);
            c++;
        }
    }

    var intL = levels.get("pi").l
    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1630,
        top: 370,
        font: 20,
        hex: "#ffffff",
        text: "Total: " + (totalRoll + intL) 
    });
    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1630,
        top: 400,
        font: 20,
        hex: "#ffffff",
        text: "(R: " + totalRoll + " + INT: " + intL + ")"
    });

    if (totalRoll + intL < rollToBeat) {
        nav.t({
            type: "zimg",
            name: "m1004-d",
            left: 1630,
            top: 430,
            font: 20,
            hex: "#ffffff",
            text: "You fell in the trap!"
        });
        trap.displayMenu("fail");
    }
    else {
        nav.t({
            type: "zimg",
            name: "m1004-d",
            left: 1630,
            top: 430,
            font: 20,
            hex: "#ffffff",
            text: "You avoided the trap"
        });
        trap.displayMenu("success");
    }
};

trap.displayMenu = function (menu) {
    let btnList = new Array();
    let i;
    nav.killbuttonStartsWith("b1004");
    switch (menu) {
        case "init":
            btnList.push({ n: "roll", i: "icon_roll.png" });
            break;
        case "fail":
            btnList.push({ n: "fail", i: "icon_fail.png" });
            break;
        case "success":
            btnList.push({ n: "success", i: "icon_avoid.png" });
            break;
        case "next":
            btnList.push({ n: "next", i: "icon_next.png" });
            break;
        case "wait":
            btnList.push({ n: "wait", i: "icon_wait.png" });
            break;
        case "pee":
            btnList.push({ n: "ppwatch", i: "icon_watch.png" });
            btnList.push({ n: "pplookaway", i: "icon_lookaway.png" });
            break;
    }

    for (i = 0; i < btnList.length; i++) {
        nav.button({
            "type": "zbtn",
            "name": "b1004-" + btnList[i].n,
            "left": 1600,
            "top": 480 + (i * 75),
            "width": 300,
            "height": 72,
            "image": "1005_trap/" + btnList[i].i
        }, 1005);
    }
};

trap.message = function (message) {
    nav.killbutton("m1004-d");
    if (typeof message === "string") {
        let temp = message;
        message = new Array();
        message.push(temp);
    }

    for (let i = 0; i < message.length; i++) {
        nav.t({
            type: "zimg",
            name: "m1004-d",
            left: 1630,
            top: 180 + (i * 30),
            font: 20,
            hex: "#ffffff",
            text: message[i]
        });
    }
};

trap.hole = function () {
    let holechar
    gv.mod("energy", -2);
    switch (trap.phase) {
        case 0:
            holechar = g.shuffleArray([0, 1, 2]);
            trap.char = new Array();
            for (let i = 0; i < g.rand(1, 4); i++) {
                trap.char.push(-1);
            }
            for (let j = 0; j < g.rand(1, holechar.length); j++) {
                trap.char.push(holechar[j]);
                for (let i = 0; i < g.rand(1, 4); i++) {
                    trap.char.push(-1);
                }
            }

            nav.bg("1005_trap/hole/hole0_d.jpg", "1005_trap/hole/hole0_n.jpg");
            trap.message(["You fell into a hole!"]);
            trap.displayMenu("next");
            break;
        case 1:
            nav.bg("1005_trap/hole/hole1_d.jpg", "1005_trap/hole/hole1_n.jpg");
            trap.message(["It smells like piss in here!", "", "I hope someone comes by"]);
            trap.displayMenu("next");
            break;
        case 2:
            char.addtime(15);
            if (trap.char.length > 0) {
                if (trap.char[0] === -1) {
                    trap.message(["keep waiting"]);
                    trap.char.shift();
                    trap.displayMenu("wait");
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 504,
                        "top": 0,
                        "width": 1100,
                        "height": 1080,
                        "image": "1005_trap/hole/g" + trap.char[0] + "_0.png"
                    }, 1005);
                    trap.message("");
                    trap.displayMenu("");
                    chat(900, 1005);
                    break;
                }
            }
            else {
                trap.message(["A rope?"]);
                trap.displayMenu("");
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 504,
                    "top": 0,
                    "width": 1100,
                    "height": 1080,
                    "image": "1005_trap/hole/rope1.png"
                }, 1005);
                chat(0, 1005);
            }
            break;
        case 3:
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 504,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "1005_trap/hole/g" + trap.char[0] + "_2.png"
            }, 1005);
            trap.message(["keep waiting"]);
            trap.displayMenu("next");
            return;
        case 4:
            nav.killbutton("r1004bg");
            trap.char.shift();
            trap.phase = 2;
            trap.hole();
            return;
    }
};

trap.kill = function () {
    nav.killall();
    window[g.room(trap.roomId)]["btnclick"](trap.callbackWin);
};

room1005.btnclick = function (name) {
    name = name.replace("b1004-", "");
    nav.killbutton("m1004");
    switch (name) {
        case "roll":
            trap.roll();
            break;
        case "fail":
            switch (trap.type) {
                case "hole":
                    trap.hole();
                    break;
            }
            break;
        case "success":
            trap.kill();
            break;
        case "next":
            trap.phase++;
            switch (trap.type) {
                case "hole":
                    trap.hole();
                    break;
            }
            break;
        case "wait":
            switch (trap.type) {
                case "hole":
                    trap.hole();
                    break;
            }
            break;
        case "pplookaway":
            nav.killbutton("r1004bg");
            nav.bg("1005_trap/hole/lookaway.jpg");
            trap.message("A proper " + gender.pronoun("gentleman") + ".");
            trap.phase = 3;
            trap.displayMenu("next");
            break;
        case "ppwatch":
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 504,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "1005_trap/hole/g" + trap.char[0] + "_1.png"
            }, 1005);
            levels.mod("piss", 15);
            trap.message("Filthy pervert.");
            trap.displayMenu("next");
            break;
    }
};

room1005.chatcatch = function (callback) {
    switch (callback) {
        case "hole1":
            trap.displayMenu("pee");
            trap.message(["Should I watch her pee", "Or look away"]);
            break;
        case "holeEnd":
            gv.mod("energy", -15);
            trap.kill();
            break;
        default:
            break;
    }
};

room1005.chat = function (chatID) {
    if (chatID === 900) {
        trap.name = "!girl";
        let randchat900 = [
            "Why are you in the toilet?",
            "Gross, what are you doing in the toilet hole? ",
            "Ugh gross. Another weird-o in the toilet. ",
            "Looks like we've got a pee pee freak hiding in the toilet. ",
            "Are you hiding in the toilet to try to peek at my pussy!",
            "Hey! Are you trying to see me pee? Freak!",
            "You better look out, I'm going to pee in the toilet. I don't care that you're hiding in it. ",
            "If I didn't have to pee so bad I would just find the next toilet. ",
            "Pee pee freak! ",
            "I'm going to pee, but you better look away! Don't stare at my pussy you pervert!"
        ];
        if (trap.char[0] === 1 && sc.getMissionTask("ppgirl", "pp", 1).complete) {
            trap.name = "ppgirl";
            if (sc.getMissionTask("ppgirl", "pp", 2).complete)
                randchat900 = ["You again! You really must love getting peed on, hiding in the toilet. It would be sweet if it wasn't so weird. "];
            else
                randchat900 = ["If you wanted to watch me pee so bad, there's easier ways than hiding in the toilet. "];
        }
        return {
            chatID: 900,
            speaker: trap.name,
            text: randchat900[g.rand(0, randchat900.length)],
            button: [
                { chatID: 901, text: "I'm not! I fell in this hole. Please help me out", callback: "" }
            ]
        }
    }
    if (chatID === 901) {
        let randchat901 = [
            "No way. I'll get pee on me. ",
            "Let me pee, then I'll see if I can find someone. ",
            "Gross! I'm not helping a pervert. ",
            "Maybe. Let me see if I can get help. ",
            "What do you want me to do? Give you wings?",
            "Totally. Let me find someone or some thing to help. ",
            "You smell like old piss. I'm not helping you. I'll get it on me! ",
            "Gross. I'm not helping you out of the toilet. "
        ];
        if (trap.char[0] === 2) {
            randchat901 = [
                "You're safer down there. I've been raped 10 times and now my vagina won't close!",
                "You don't want out. The C.U.M. cult is out here and they're raping everyone!",
                "It's scary out here. I've been held down and fucked so much my pussy won't stop gaping!",
                "You don't want to leave this place. They're raping everyone out here. I've been fucked so much my cervix is going to fall out!"
            ];
        }
        return {
            chatID: 0,
            speaker: trap.name,
            text: randchat901[g.rand(0, randchat901.length)],
            button: [
                { chatID: -1, text: "*sigh*", callback: "hole1" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "Hey! Thanks for the rope! Who's out there? ",
                button: [
                    { chatID: 1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "I wonder who threw that. I hope I'm not going into another " +
                    "trap. Oh well. I can't stay down here all day. ",
                button: [
                    { chatID: -1, text: "[Climb out]", callback: "holeEnd" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};