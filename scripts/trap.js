var trap = {};
var room1005 = {};

trap.char;
trap.phase = 0;
trap.counter = 0;
trap.type = "";
trap.roomId;
trap.callbackWin;
trap.name;
trap.internal;

//hole, treasure, treasureAzrael, encounter, rope
trap.init = function (trapType = "rope", location = "forest", roomId = g.roomID, callbackWin = "", trapNum = null) {
    trap.phase = 0;
    trap.roomId = roomId;
    trap.callbackWin = callbackWin;
    trap.counter = 0;
    trap.internal;
    trap.name = "random";
    trap.type = trapType;
    nav.killall();

    if (trap.type === null) {
        let tt = ["treasure", "encounter", "encounter", "hole", "fight"];
        trap.type = tt[g.rand(0, tt.length)];
    }

    if (trap.type === "treasure" || trap.type === "treasureAzrael") {

        nav.button({
            "type": "zimg",
            "name": "m1004-dx",
            "left": 1600,
            "top": 150,
            "width": 300,
            "height": 318,
            "image": "1005_trap/trap_message_treasure.png"
        }, 1005);
        trap.treasure(trapNum);
        return;
    }
    else if (trap.type === "encounter") {
        trap.encounter(trapNum);
        return;
    }

    nav.bg("1005_trap/trap_" + (g.isNight() ? "n" : "d") + ".jpg");
    
    nav.button({
        "type": "zimg",
        "name": "m1004-dx",
        "left": 1600,
        "top": 150,
        "width": 300,
        "height": 318,
        "image": "1005_trap/trap_message.png"
    }, 1005);
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
    }, 1005);

    var diceArray = new Array();
    var i;
    var rollToBeat = 24 + g.rand(0, 13);
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
            }, 1005);
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
            btnList.push({ n: "kill", i: "icon_avoid.png" });
            break;
        case "next":
            btnList.push({ n: "next", i: "icon_next.png" });
            break;
        case "nextPhase10":
            btnList.push({ n: "nextPhase10", i: "icon_next.png" });
            break;
        case "wait":
            btnList.push({ n: "wait", i: "icon_wait.png" });
            break;
        case "pee":
            btnList.push({ n: "pplookaway", i: "icon_lookaway.png" });
            btnList.push({ n: "ppwatch", i: "icon_watch.png" });
            btnList.push({ n: "ppdrink", i: "icon_drink.png" });
            btnList.push({ n: "ppjar", i: "icon_jar.png" });
            break;
        case "climb":
            btnList.push({ n: "holeclimb", i: "icon_holeClimbout.png" });
            btnList.push({ n: "holestay", i: "icon_holeStay.png" });
            break;
        case "climbout":
            btnList.push({ n: "holeclimb", i: "icon_holeClimbout.png" });
            break;
        case "close":
            btnList.push({ n: "close", i: "icon_close.png" });
            break;
        case "treasure":
            btnList.push({ n: "next", i: "icon_open.png" });
            if (trap.type === "treasureAzrael")
                btnList.push({ n: "sign", i: "icon_sign.png" });
            btnList.push({ n: "kill", i: "icon_leave.png" });
            break;
        case "leave":
            btnList.push({ n: "kill", i: "icon_leave.png" });
            break;
        case "encounter":
            btnList.push({ n: "fight", i: "icon_fight.png" });
            btnList.push({ n: "charisma", i: "icon_talk.png" });
            btnList.push({ n: "flee", i: "icon_flee.png" });
            break;
        case "rope":
            btnList.push({ n: "freerope", i: "icon_freeself.png" });
            btnList.push({ n: "waitrope", i: "icon_waitforhelp.png" });
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

trap.rope = function () {
    let ropeChar = new Array();
    let flowers = ["fr", "fd", "fp"];
    let sb, sa;
    switch (trap.phase) {
        case 0:
            var rwearing = cl.wearing();
            if (cl.c.sock !== null || cl.c.shoes !== null) {
                nav.bg("1005_trap/rope/mud.jpg");
                chat(51, 1005);
            }
            else if (rwearing.outerwear) {
                cl.c.dress = cl.c.pj = cl.c.swimsuit = cl.c.shirt = cl.c.pants = null;
                nav.bg("475_fight/clearing.jpg", "475_fight/clearingNight.jpg");
                zcl.displayMain(100, 600, .13, "clothes", true)
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1005_trap/rope/hook_" + (rwearing.crossdressing ? "pink" : "blue") + ".png"
                }, 1005);
                chat(52, 1005);
            }
            else {
                ropeChar = new Array();
                if (cl.hasoutfit("nude") !== null) {
                    ropeChar.push({ id: 0, n: "!girl", ev: "clothes" });
                    trap.phase = 1;
                }
                else {
                    if (!flowers.includes(cl.c.buttplug)) {
                        ropeChar.push({ id: 1, n: "!girl3", ev: "flower" });
                    }

                    if (future.get("drd") === -1 && sissy.st[10].ach) {
                        ropeChar.push({ id: 2, n: "drd", ev: "drd" });
                    }

                    ropeChar.push({ id: 3, n: "!girl3", ev: "makeup" });
                    ropeChar.push({ n: "!jenna", ev: "free" });
                }

                

                trap.char = new Array();
                g.shuffleArray(ropeChar);

                trap.char.push(ropeChar[g.rand(0, ropeChar.length)]);
                trap.name = trap.char[0].n;
                nav.killbutton("r1004bg");
                nav.bg("475_fight/clearing.jpg", "475_fight/clearingNight.jpg");
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1005_trap/rope/phase0.png"
                }, 1005);
                trap.displayMenu("next");
            }
            break;
        case 1:
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1421,
                "height": 390,
                "image": "1005_trap/rope/branch.png"
            }, 1005);
            zcl.rope(0, 500, 1, "", false);
            trap.phase = 2;
            trap.displayMenu("wait");
            break;
        case 2:
            char.addtime(30);
            switch (trap.char[0].ev) {
                case "clothes":
                    zcl.rope(0, 500, 1, "", false);
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 597,
                        "top": 223,
                        "width": 769,
                        "height": 690,
                        "image": "1005_trap/rope/clothes0.png"
                    }, 1005);
                    trap.displayMenu("");
                    chat(19, 1005);
                    break;
                case "flower":
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 493,
                        "top": 115,
                        "width": 880,
                        "height": 898,
                        "image": "1005_trap/rope/girl3.png"
                    }, 1005);
                    zcl.rope(0, 500, 1, "", false);
                    trap.displayMenu("");
                    chat(16, 1005);
                    break;
                case "makeup":
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 493,
                        "top": 115,
                        "width": 880,
                        "height": 898,
                        "image": "1005_trap/rope/girl3.png"
                    }, 1005);
                    zcl.rope(0, 500, 1, "", false);
                    trap.displayMenu("");
                    chat(43, 1005);
                    break;
                case "free":
                    if (trap.char[0].n === "!jenna") {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 522,
                            "top": 87,
                            "width": 336,
                            "height": 948,
                            "image": "1005_trap/rope/jenna.png"
                        }, 1005);
                        zcl.rope(0, 500, 1, "", false);
                    }
                    trap.displayMenu("");
                    chat(30, 1005);
                    break;
                case "drd":
                    trap.displayMenu("");
                    if (sc.getMission("dr", "meet").notStarted) {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 873,
                            "top": 166,
                            "width": 503,
                            "height": 685,
                            "image": "1005_trap/rope/dr0.png"
                        }, 1005);
                        zcl.rope(0, 500, 1, "", false);
                        chat(31, 1005);
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 873,
                            "top": 166,
                            "width": 503,
                            "height": 685,
                            "image": "1005_trap/rope/dr0.png"
                        }, 1005);
                        zcl.rope(0, 500, 1, "", false);
                        chat(41, 1005);
                    }
                    break;
            }
            break;
        case 3:
            nav.killbutton("r1004bg");
            zcl.rope(0, 500, 1, "", false);
            if (gv.get("energy") < 1) {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1001_rand/black_25.png"
                }, 1005);
                chat(22, 1005);
                trap.displayMenu("rope");
            }
            else {

            }
            break;
    }
};

trap.hole = function () {
    let holechar;
    let txt;
    if (trap.counter > 0)
        gv.mod("energy", trap.counter * -3);
    let holeEnergy = gv.get("energy");
    if (holeEnergy < 1) {
        chat(6, 1005);
    }
    switch (trap.phase) {
        case 0:
            holechar = [
                { id: 0, n: "girl", rape: null, onlyAsk: false, g: "f" },
                { id: 1, n: "ppgirl", rape: null, onlyAsk: false, g: "f" },
                { id: 2, n: "girl", rape: null, onlyAsk: false, g: "f" },
                { id: 3, n: "!rape0", rape: 0, onlyAsk: false, g: "m" },
                { id: 4, n: "!futa0", rape: 2, onlyAsk: false, g: "f" },
                { id: 5, n: "!peggy", rape: null, onlyAsk: true, g: "f" },
                { id: 6, n: "!caveslave", rape: null, onlyAsk: true, g: "f" },
                { id: 8, n: "!jenna", rape: null, onlyAsk: true, g: "f" },
                { id: 9, n: "cult", rape: null, onlyAsk: false, g: "m" },
                { id: 10, n: "!plant", rape: null, onlyAsk: false, g: "f" },
            ];

            //if (missy.cases[16].complete) {
            //    holechar.push({ id: 7, n: "!damselle", rape: false, onlyAsk: true });
            //}

            holechar = g.shuffleArray(holechar);
            trap.char = new Array();
            for (let i = 0; i < g.rand(2, 4); i++) {
                trap.char.push({ id: -1, n: "", rape: false, onlyAsk: false });
            }
            for (let j = 0; j < holechar.length; j++) {
                trap.char.push(holechar[j]);
                for (let i = 0; i < g.rand(1, 4); i++) {
                    trap.char.push({ id: -1, n: "", rape: false, onlyAsk: false });
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
            nav.bg("1005_trap/hole/ground.jpg");
            zcl.displayMain(-1200, 400, .3, "clothes", false);
            nav.button({
                "type": "zbtn",
                "name": "r1004bg",
                "left": 1110,
                "top": 781,
                "width": 735,
                "height": 299,
                "image": "1005_trap/hole/ants.png"
            }, 1005);
            trap.message(["Ants!"]);
            trap.counter = 1;
            chat(4, 1005);
            trap.displayMenu("next");
            break;
        case 3:
            nav.killbutton("r1004bg");
            zcl.kill();
            nav.bg("1005_trap/hole/hole1_d.jpg", "1005_trap/hole/hole1_n.jpg");
            char.addtime(15);
            if (trap.char.length > 0) {
                txt = new Array();
                if (trap.char[0].id === -1) {
                    if (trap.char.length > 2) {
                        if (trap.char[1].id !== -1) {
                            txt.push("You hear footsteps");
                            txt.push("approaching");
                        }
                    }
                    if ((trap.counter + 1) * -3 > holeEnergy)
                        txt.push("You feel like you're going to pass out!");
                    txt.push("Energy: " + holeEnergy);
                    txt.push("Continue waiting");
                    trap.message(txt);
                    trap.displayMenu("nextPhase10");
                }
                else if (trap.char[0].n === "!plant") {
                    nav.bg("1005_trap/hole/ground.jpg");
                    rape.init(3, "forest", 1005, "rapeReturn");
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 504,
                        "top": 0,
                        "width": 1100,
                        "height": 1080,
                        "image": "1005_trap/hole/g" + trap.char[0].id + "_0.png"
                    }, 1005);
                    trap.message("Somebody's out there!");
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
        case 4:
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 504,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "1005_trap/hole/g" + trap.char[0].id + "_2.png"
            }, 1005);
            trap.message(["keep waiting"]);
            trap.displayMenu("next");
            return;
        case 5:
            if (trap.char[0].rape !== null) {
                nav.killbutton("r1004bg");
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 504,
                    "top": 0,
                    "width": 1100,
                    "height": 1080,
                    "image": "1005_trap/hole/rope1.png"
                }, 1005);
                trap.displayMenu("climb");
            } 
            else {
                nav.killbutton("r1004bg");
                trap.char.shift();
                trap.phase = 3;
                trap.hole();
            }
            return;
        case 10:
            nav.killbutton("r1004bg");
            trap.char.shift();
            trap.phase = 3;
            trap.hole();
            break;
    }
};

trap.treasure = function () {
    if (trap.phase === 0) {
        if (trap.type === "treasureAzrael") {
            nav.bg("1005_trap/treasure/a.jpg", "1005_trap/treasure/a_night.jpg");
        }
        else {
            nav.bg("1005_trap/treasure/t.jpg", "1005_trap/treasure/t_night.jpg");
        }
        trap.displayMenu("treasure");
    }
    else {
        if (trap.type === "treasureAzrael") {
            if (daily.get("treasureAzrael")) {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 503,
                    "top": 269,
                    "width": 914,
                    "height": 811,
                    "image": "1005_trap/treasure/empty.png",
                }, 1005);
                chat(7, 1005);
            }
            else {
                daily.set("treasureAzrael");
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 503,
                    "top": 269,
                    "width": 914,
                    "height": 811,
                    "image": "1005_trap/treasure/full.png",
                }, 1005);
                chat(700, 1005);
            }
        }
        else {
            trap.displayMenu("leave");
            if (g.rand(0, 5) === 0) {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 503,
                    "top": 269,
                    "width": 914,
                    "height": 811,
                    "image": "1005_trap/treasure/empty.png",
                }, 1005);
                chat(8, 1005);
            }
            else {
                daily.set("treasureAzrael");
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 503,
                    "top": 269,
                    "width": 914,
                    "height": 811,
                    "image": "1005_trap/treasure/full.png",
                }, 1005);
                chat(701, 1005);
            }
        }
    }
};

trap.encounter = function () {
    let charList = new Array();
    let wearing = cl.wearing();
    switch (trap.counter) {
        case 0:
            nav.bg("475_fight/clearing.jpg", "475_fight/clearingNight.jpg");
            if (gv.get("cat") === -1 && g.rand(0, 4) === 0 && !g.isNight() && false) {
                charList.push({ n: "!cat", z: "cat", loc: "street", l: 857, t: 69, w: 524, h: 1011, i: "girl1.png" });
                nav.bg("475_fight/cat.jpg");
            }
            else {
                charList.push({ n: "!girl", p: "girl", z: "nice", loc: "street", l: 857, t: 69, w: 524, h: 1011, i: "girl1.png" });
                charList.push({ n: "!girl", p: "girl", z: "nice", loc: "street", l: 800, t: 193, w: 445, h: 887, i: "femboy1.png" });
                charList.push({ n: "!boy", p: "boy", z: "mean", loc: null, l: 815, t: 61, w: 508, h: 1019, i: "man1.png" });
                charList.push({ n: "!girl", p: "girl", z: "mean", loc: "street", l: 908, t: 191, w: 339, h: 889, i: "girl2.png" });
                charList.push({ n: "!boy", p: "boy", z: "nice", loc: "forest", l: 855, t: 173, w: 371, h: 907, i: "man2.png" });
                charList.push({ n: "!girl", p: "girl", z: "mean", loc: "street", l: 920, t: 148, w: 465, h: 932, i: "girl3.png" });
                charList.push({ n: "!boy", p: "boy", z: "nice", loc: "forest", l: 900, t: 127, w: 342, h: 953, i: "man3.png" });
                charList.push({ n: "!boy", p: "boy", z: "nice", loc: "forest", l: 703, t: 73, w: 812, h: 1007, i: "man4.png" });

                //not really, add forest lesbians
                charList.push({ n: "!granola", p: "girl", z: "granola1", loc: "forest", l: 426, t: 83, w: 966, h: 935, i: "granola1.png" });
                charList.push({ n: "!girl", p: "girl", z: "foot1", loc: "forest", l: 674, t: 152, w: 503, h: 928, i: "girl4.png" });
                if (wearing.outerwear) {
                    charList.push({ n: "!boxes", p: "boy", z: "tits1", loc: "forest", l: 678, t: 60, w: 516, h: 1020, i: "man5.png" });
                }

                if (wearing.outerwear || wearing.underwear) {
                    charList.push({ n: "!boy", p: "boy", z: "steal", s: g.rand(6, 12), loc: null, l: 815, t: 61, w: 508, h: 1019, i: "granola1.png" });

                }
            }

            trap.char = charList[g.rand(0, charList.length)];

            trap.name = trap.char.n;
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": trap.char.l,
                "top": trap.char.t,
                "width": trap.char.w,
                "height": trap.char.h,
                "image": "1005_trap/encounter/" + trap.char.i
            }, 1004);

            if (trap.char.z === "nice") {
                chat(802, 1005);
            }
            else if (trap.char.z === "mean") {
                chat(801, 1005);
            }
            else if (trap.char.z === "steal") {
                nav.button({
                    "type": "zimg",
                    "name": "m1004-dx",
                    "left": 1600,
                    "top": 150,
                    "width": 300,
                    "height": 318,
                    "image": "1005_trap/trap_message_theft.png"
                }, 1005);
                chat(800, 1005);
                trap.displayMenu("encounter");
            }
            else if (trap.char.z === "granola1") {
                chat(12, 1005);
            }
            else if (trap.char.z === "foot1") {
                nav.button({
                    "type": "kiss",
                    "name": "r1004bg-q",
                    "left": 674,
                    "top": 439,
                    "width": 266,
                    "height": 317,
                    "image": "1005_trap/encounter/girl4_foot.png"
                }, 1005);
                chat(13, 1005);
            }
            else if (trap.char.z === "tits1") {
                chat(15, 1005);
            }
            break;
    }
};

trap.kill = function (roomId = null) {
    trap.char = null;
    trap.internal = null;
    trap.phase = 0;
    trap.counter = 0;
    if (roomId === null) {
        nav.killall();
        window[g.room(trap.roomId)]["btnclick"](trap.callbackWin);
    }
    else if(roomId === 701) {
        g.pass = 701;
        char.room(28);
    }
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
                case "rope":
                    trap.rope();
                    break;
            }
            break;
        case "kill":
            trap.kill(null);
            break;
        case "next":
            trap.phase++;
            switch (trap.type) {
                case "hole":
                    trap.hole();
                    break;
                case "treasure":
                case "treasureAzrael":
                    trap.treasure();
                    break;
                case "rope":
                    trap.rope();
                    break;
            }
            break;
        case "wait":
            switch (trap.type) {
                case "hole":
                    trap.hole();
                    break;
                case "rope":
                    trap.rope();
                    break;
            }
            break;
        case "nextPhase10":
            trap.phase = 10;
            trap.hole();
            break;
        case "rapeReturn":
            nav.button({
                "type": "zimg",
                "name": "m1004-dx",
                "left": 1600,
                "top": 150,
                "width": 300,
                "height": 318,
                "image": "1004_rape/icon_bg.png"
            }, 1005);
            trap.phase = 10;
            trap.hole();
            break;
        case "pplookaway":
            nav.killbutton("r1004bg");
            nav.bg("1005_trap/hole/lookaway.jpg");
            trap.message("A proper " + gender.pronoun("gentleman") + ".");
            trap.phase = 4;
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
                "image": "1005_trap/hole/g" + trap.char[0].id + "_1.png"
            }, 1005);
            trap.message("Filthy pervert.");
            trap.displayMenu("next");
            break;
        case "ppdrink":
            if (levels.get("piss").l < 4) {
                chat(49, 1005);
            }
            else {
                nav.killbutton("r1004bg");
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 504,
                    "top": 0,
                    "width": 1100,
                    "height": 1080,
                    "image": "1005_trap/hole/g" + trap.char[0].id + "_1.png"
                }, 1005);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 847,
                    "top": 745,
                    "width": 754,
                    "height": 335,
                    "image": "1005_trap/hole/drink.png"
                }, 1005);
                sex.piss(true, false, false, trap.char[0].g);
                trap.message("Filthy pervert.");
                trap.displayMenu("next");
            }
            break;
        case "ppjar":
            if (inv.has("emptyjar")) {
                inv.use("emptyjar");
                if (trap.char[0].g === "m")
                    inv.add("pissjarboy");
                else
                    inv.add("pissjargirl");

                nav.killbutton("r1004bg");
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 504,
                    "top": 0,
                    "width": 1100,
                    "height": 1080,
                    "image": "1005_trap/hole/g" + trap.char[0].id + "_1.png"
                }, 1005);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 790,
                    "top": 693,
                    "width": 446,
                    "height": 387,
                    "image": "1005_trap/hole/jar.png"
                }, 1005);
                sex.piss(false, false, false, "f");
                trap.message("You filled a jar of piss. Gross.");
                trap.displayMenu("next");
            }
            else {
                chat(50, 1005);
            }
            break;
        case "holestay":
            chat(2, 1005);
            break;
        case "holeclimb":
            chat(3, 1005);
            break;
        case "close":
            if (trap.type === "treasureAzrael") {
                nav.killbutton("r1004bg");
                trap.displayMenu("treasure");
            }
            break;
        case "sign":
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 503,
                "top": 269,
                "width": 914,
                "height": 811,
                "image": "1005_trap/treasure/a_signClose.png",
            }, 1005);
            trap.displayMenu("close");
            break;
        case "flee":
            if (gv.get("energy") < 50)
                chat(9, 1005);
            else {
                gv.mod("energy", -50);
                chat(10, 1005);
            }
            break;
        case "fight":
            nav.killbutton("m1004-dx");
            nav.killbuttonStartsWith("b1004-");
            quickFight.init(trap.char.s, sc.n(trap.name), "encounterWin", "encounterLose", "encounterRun", 1005);
            break;
        case "charisma":
            nav.killbutton("m1004-dx");
            nav.killbuttonStartsWith("b1004-");
            charisma.init(g.rand(3, 8), "encounterWin", "encounterLose", 1005);
            break;
        case "encounterWin":
            chat(11, 1005);
            break;
        case "encounterLose":
            var lwearing = cl.wearing();
            if (lwearing.outerwear) {
                cl.c.shirt = null; cl.c.pants = null; cl.c.dress = null; cl.c.pj = null; cl.c.swimsuit = null; cl.c.socks = null; cl.c.shoes = null;
                g.popUpNoticeBottom("Your clothes were stolen!");
            }
            else {
                cl.c.panties = null; cl.c.bra = null;
                g.popUpNoticeBottom("Your panties were stolen!");
            }
            cl.display();
            nav.killbutton("r1004bg");
            nav.button({
                "type": "zimg",
                "name": "m1004-dx",
                "left": 1600,
                "top": 150,
                "width": 300,
                "height": 318,
                "image": "1005_trap/trap_message_theft.png"
            }, 1005);
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 722,
                "top": 176,
                "width": 534,
                "height": 517,
                "image": "1005_trap/encounter/runaway.png"
            }, 1004);

            trap.displayMenu("leave");
            break;
        case "encounterRun":
            gv.mod("energy", -50);
            g.popUpNotice("You ran away");
            trap.kill(null);
            break;
        case "r1004bg-q":
            nav.killbutton("r1004bg-q");
            nav.killbutton("r1004bg");
            inv.add("rawmeat");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 674,
                "top": 152,
                "width": 503,
                "height": 928,
                "image": "1005_trap/encounter/girl4_1.png"
            }, 1005);
            chat(14, 1005);
            break;
        case "freerope":
            if (levels.get("strength").l < 5) {
                chat(23, 1005);
            }
            else {
                char.addtime(30);
                gv.mod("energy", -25);
                trap.kill();
            }
            break;
        case "waitrope":
            char.addtime(30);
            if (g.rand(0, 3) === 0) {
                if (sc.getMission("jones", "fail").notStarted) {
                    sc.show("jones");
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 947,
                        "top": 222,
                        "width": 308,
                        "height": 601,
                        "image": "1005_trap/rope/jones0.png",
                    }, 1005);
                    chat(24, 1005);
                }
                else {
                    
                }
            }
            else {
                gv.mod("energy", -10);
                trap.phase = 3;
                trap.rope();
            }
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
            trap.kill(null);
            break;
        case "hole_rape0":
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 504,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "1005_trap/hole/rope1.png"
            }, 1005);
            trap.displayMenu("climb");
            break;
        case "hole_giveItem":
            switch (trap.internal) {
                case "shoes and socks": cl.remove("shoes", cl.c.shoes); cl.remove("socks", cl.c.socks); break;
                case "shoes": cl.remove("shoes", cl.c.shoes); break;
                case "socks": cl.remove("socks", cl.c.socks); break;
                case "shirt and pants": cl.remove("shirt", cl.c.shirt); cl.remove("pants", cl.c.pants); break;
                case "shirt": cl.remove("shirt", cl.c.shirt); break;
                case "pants": cl.remove("pants", cl.c.pants); break;
                case "dress": cl.remove("dress", cl.c.dress); break;
                case "pajamas": cl.remove("pj", cl.c.pj); break;
                case "swimsuit": cl.remove("swimsuit", cl.c.swimsuit); break;
                case "bra and panties": cl.remove("bra", cl.c.bra); cl.remove("panties", cl.c.panties); break;
                case "bra": cl.remove("bra", cl.c.bra); break;
                case "panties": cl.remove("panties", cl.c.panties); break;
                case "buttplug": cl.remove("buttplug", cl.c.buttplug); break;
                case "earrings": cl.remove("ear", cl.c.earring); break;
                case "necklace": cl.remove("necklace", cl.c.necklace); break;
                case "belly ring": cl.remove("belly", cl.c.bellyring); break;
                case "nipple rings": cl.remove("nipple", cl.c.nipplering); break;
                case "nose ring": cl.remove("nose", cl.c.nosering); break;
                default: console.log("missing: " + trap.internal); break;
            }
            g.popUpNotice("You gave away your " + trap.internal + ".");
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 504,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "1005_trap/hole/rope1.png"
            }, 1005);
            trap.displayMenu("climbout");
            break;
        case "nextHole":
            trap.phase = 10;
            trap.hole();
            break;
        case "holeRape":
            if (trap.char[0].rape !== null) {
                nav.bg("475_fight/clearing.jpg", "475_fight/clearingNight.jpg");
                rape.init(trap.char[0].rape, "forest", 1005, "kill");
            }
            else {
                trap.kill(null);
            }
            break;
        case "rope_rose":
        case "rope_daisy":
        case "rope_pink":
        case "rope_pick":
            var rsp_s = callback;
            if (callback === "rope_pick") {
                var rsp = ["rope_rose", "rope_daisy", "rope_pink"];
                rsp_s = rsp[g.rand(0, rsp.length)];
            }
            switch (rsp_s) {
                case "rope_rose": cl.c.buttplug = "fr"; break;
                case "rope_daisy": cl.c.buttplug = "fd"; break;
                case "rope_pink": cl.c.buttplug = "fp"; break;
            }
            cl.display();
            zcl.rope(0, 500, 1, "", false);
            break;
        case "rope_clothes":
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 698,
                "top": 155,
                "width": 969,
                "height": 784,
                "image": "1005_trap/rope/clothes1.png"
            }, 1005);
            zcl.rope(0, 500, 1, "", false);
            cl.nude();
            break;
        case "rope_wait":
            trap.phase = 3;
            trap.rope();
            break;
        case "rope_fwump":
            zcl.kill();
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1005_trap/rope/fall.png",
            }, 1005);
            trap.displayMenu("leave");
            break;
        case "jonesFail":
            sc.completeMission("jones", "invite", false);
            sc.completeMission("jones", "fail");
            sc.show("jones");
            trap.phase = 3;
            trap.rope();
            break;
        case "jonesCock0":
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 592,
                "top": 17,
                "width": 337,
                "height": 1012,
                "image": "1005_trap/hole/jones1.png"
            }, 1005);
            break;
        case "jonesCock1":
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 592,
                "top": 17,
                "width": 337,
                "height": 1012,
                "image": "1005_trap/hole/jones2.png"
            }, 1005);
            break;
        case "jonesCock2":
            g.roomMapAccess(150, true, true);
            sc.startMission("jones", "invite");
            sc.completeMissionTask("jones", "invite", 0);
            sc.show("jones");
            break;
        case "passout":
            trap.kill(701);
            break;
        case "kill_r1004bg":
            nav.killbutton("r1004bg");
            break;
        case "kill":
            trap.kill(null);
            break;
        case "dr1":
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 359,
                "top": 0,
                "width": 587,
                "height": 1080,
                "image": "1005_trap/rope/dr1.png"
            }, 1005);
            break;
        case "dr2":
            future.add("drd", 3);
            var dr2b = cl.c.chest < gv.get("breastSelect");
            var dr2a = cl.c.leg < gv.get("assSelect");
            var drSelect;
            if (sc.getMission("dr", "meet").notStarted) {
                if (dr2b)
                    drSelect = "boobs";
                else if (dr2a)
                    drSelect = "ass";
                else if (cl.c.cock < 4)
                    drSelect = "cock";
                else
                    drSelect = "dumb";
                sc.startMission("dr", "meet");
                sc.completeMissionTask("dr", "meet", 0);
                sc.show("dr");
            }
            else {
                sc.completeMissionTask("dr", "meet", 1);
                if (dr2b && dr2a)
                    drSelect = ((g.rand(0, 2)) === 0 ? "ass" : "boobs");
                else if (dr2b)
                    drSelect = "boobs";
                else if (dr2a)
                    drSelect = "ass";
                else if (cl.c.cock < 4)
                    drSelect = "cock";
                else
                    drSelect = "dumb";
            }
            console.log(dr2b + " - " + dr2a + " - " + drSelect);
            switch (drSelect) {
                case "boobs":
                    nav.killbutton("r1004bg");
                    zcl.kill();
                    cl.c.chest++;
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "28_transformation/chest_" + cl.c.chest + ".gif"
                    }, 1005);
                    cl.display();
                    g.roomTimeout = setTimeout(function () {
                        nav.killbutton("r1004bg");
                        zcl.rope(0, 500, 1, "", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 359,
                            "top": 0,
                            "width": 587,
                            "height": 1080,
                            "image": "1005_trap/rope/dr1.png"
                        }, 1005);
                        chat(37, 1005);
                    }, 6000);
                    break;
                case "ass":
                    nav.killbutton("r1004bg");
                    zcl.kill();
                    cl.c.leg++;
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "28_transformation/leg_" + cl.c.leg + ".gif"
                    }, 1005);
                    cl.display();
                    g.roomTimeout = setTimeout(function () {
                        nav.killbutton("r1004bg");
                        zcl.rope(0, 500, 1, "", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 359,
                            "top": 0,
                            "width": 587,
                            "height": 1080,
                            "image": "1005_trap/rope/dr1.png"
                        }, 1005);
                        chat(38, 1005);
                    }, 6000);
                    break;
                case "cock":
                    nav.killbutton("r1004bg");
                    zcl.kill();
                    cl.c.cock++;
                    nav.button({
                        "type": "img",
                        "name": "r1004bg",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "28_transformation/cock_" + cl.c.cock + ".gif"
                    }, 1005);
                    cl.display();
                    g.roomTimeout = setTimeout(function () {
                        nav.killbutton("r1004bg");
                        zcl.rope(0, 500, 1, "", false);
                        nav.button({
                            "type": "img",
                            "name": "r1004bg",
                            "left": 359,
                            "top": 0,
                            "width": 587,
                            "height": 1080,
                            "image": "1005_trap/rope/dr1.png"
                        }, 1005);
                        chat(39, 1005);
                    }, 6000);
                    break;
                default:
                    var pil
                    if (g.rand(0, 2) === 0) {
                        pil = levels.get("pi");
                        if (pil.l < 1)
                            pil.l = 1;
                        levels.set("pi", 0, pil.l - 1);
                        g.popUpNotice("You have become dumber");
                    }
                    else {
                        pil = levels.get("strength");
                        if (pil.l < 1)
                            pil.l = 1;
                        levels.set("strength", 0, pil.l - 1);
                        g.popUpNotice("You have become weaker");
                    }
                    chat(40, 1005);
                    break;
            }
            break;
        case "makeup":
            nav.killbutton("r1004bg");
            switch (g.rand(0, 6)) {
                case 0: cl.c.makeup = "clown"; cl.c.lipstick = "red"; cl.c.pissface = "rainbow"; break;
                case 1: cl.c.makeup = "white"; cl.c.lipstick = "black"; cl.c.pissface = "black"; break;
                case 2: cl.c.makeup = "blush"; cl.c.lipstick = "pink"; cl.c.pissface = "pink"; break;
                case 3: cl.c.makeup = "blushheavy"; cl.c.lipstick = "purple"; cl.c.pissface = "purple"; break;
                case 4: cl.c.makeup = "blush"; cl.c.lipstick = "blue"; cl.c.pissface = "blue"; break;
                case 5: cl.c.makeup = "blushheavy"; cl.c.lipstick = "red"; cl.c.pissface = "black"; break;
            }
            zcl.displayMirror();
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1005_trap/rope/mirror_day.png",
                "night": "1005_trap/rope/mirror_night.png"
            }, 1005);
            chat(47, 1005);

            break;
        case "sockShoesRemove":
            cl.c.socks = cl.c.shoes = null;
            cl.display();
            trap.kill(null);
            break;
        default:
            break;
    }
};

room1005.chat = function (chatID) {
    let txt, wearing;
    if (chatID === 900) {
        trap.name = trap.char[0].n;
        trap.internal = null;
        if (trap.char[0].onlyAsk) {
            if (cl.c.shoes !== null || cl.c.socks !== null) {
                if (cl.c.shoes !== null && cl.c.socks !== null)
                    trap.internal = "shoes and socks";
                else if (cl.c.shoes !== null)
                    trap.internal = "shoes";
                else
                    trap.internal = "socks"; 
            }
            else if (cl.c.shirt !== null || cl.c.pants !== null || cl.c.pj !== null || cl.c.swimsuit !== null || cl.c.dress !== null) {
                if (cl.c.shirt !== null && cl.c.pants !== null)
                    trap.internal = "shirt and pants";
                else if (cl.c.shirt !== null)
                    trap.internal = "shirt";
                else if (cl.c.pants !== null)
                    trap.internal = "pants";
                else if (cl.c.dress !== null)
                    trap.internal = "dress";
                else if (cl.c.pj !== null)
                    trap.internal = "pajamas";
                else
                    trap.internal = "swimsuit";
            }
            else if (cl.c.panties !== null || cl.c.bra !== null) {
                if (cl.c.panties !== null && cl.c.bra !== null)
                    trap.internal = "bra and panties";
                else if (cl.c.bra !== null0)
                    trap.internal = "bra";
                else
                    trap.internal = "panties";
            }
            else if (cl.c.buttplug !== null) {
                trap.internal = "buttplug";
            }
            else if (cl.c.earring !== null || cl.c.necklace !== null || cl.c.bellyring !== null || cl.c.nipplering !== null || cl.c.nosering !== null) {
                if (cl.c.earring !== null)
                    trap.internal = "earrings";
                else if (cl.c.necklace !== null)
                    trap.internal = "necklace";
                else if (cl.c.bellyring !== null)
                    trap.internal = "belly ring";
                else if (cl.c.nipplering !== null)
                    trap.internal = "nipple rings";
                else
                    trap.internal = "nose ring";
            }
            if (trap.internal === null) {
                return {
                    chatID: 900,
                    speaker: trap.name,
                    text: "You look like you're stuck in a toilet. Just a sec let me " +
                        "throw a rope down to get you up. ",
                    button: [
                        { chatID: -1, text: "You're my hero!", callback: "hole_rape0" }
                    ]
                }
            }
            else {
                return {
                    chatID: 900,
                    speaker: trap.name,
                    text: "You look like you're stuck in a toilet. You know your " +
                        trap.internal + " are really pretty. If you give it to me to " +
                        "keep forever I'll let you out. No backsies!",
                    button: [
                        { chatID: -1, text: "*sigh* Fine here's my " + trap.internal + ".", callback: "hole_giveItem" },
                        { chatID: 5, text: "No way! It's mine!", callback: "" },
                    ]
                }
            }
        }
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
        if (trap.char[0].id === 1 && sc.getMissionTask("ppgirl", "pp", 1).complete) {
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
    else if (chatID === 901) {
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
        if (trap.char[0].id === 2) {
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
    else if (chatID === 802) { //nice
        wearing = cl.wearing();
        txt = [
            "Looking good cutie pie! ",
        ];
        if (wearing.outerwear) {
            if (wearing.crossdressing) {
                txt.push("So cute! Love that look babe! ");
                txt.push("Love how you're so bold that you're wearing sexy outfit!");
            }
            else {
                txt.push("You have such a sexy body. You should try wearing a dress. ");
            }
        }
        else if (wearing.underwear) {
            txt.push("Cute panties! I wish I was as confident as you to just wear that in public. ");
        }
        else {
            txt.push("Oh wow. You're body is so sexy!");

            if (!gender.canUseCock()) {
                if (cl.c.chastity !== null) {
                    txt.push("A locked clitty is so sexy babe! ");
                }
                else {
                    txt.push("Such a cute little clitty! ");
                }
            }
            else {
                txt.push("Oh wow! You have a great dick! ");
                txt.push("I bet all the bitches love that giant cock of yours!");
            }
            if (cl.c.chest < 3) {
                txt.push("You're hot, but would look so much hotter with bigger breasts! ");
            }
            else {
                txt.push("Love your tits! I want to bury my face in them!");
            }
        }
        console.log(txt)
        return {
            chatID: 802,
            speaker: trap.name,
            text: txt[g.rand(0, txt.length)],
            button: [
                { chatID: -1, text: "That was nice", callback: "kill" }
            ]
        };
    }
    else if (chatID === 801) { //mean
        wearing = cl.wearing();
        txt = [
            "I've heard about you. You're that nasty easy slut. ",
        ];
        if (wearing.outerwear) {
            if (wearing.crossdressing) {
                txt.push("You look like a fucking whore. I bet you blow any man you see. ");
                txt.push("Pretty face, ugly clothes. You should just stip it off and show everyone what a slut you are. ");
                txt.push("Hey slut! I bet you want to fuck. I just don't fuck sissies. Too easy. ");
                txt.push("You dress like you want to get raped in the asshole. ");
                txt.push("You dress like some kind of gutter slut. Trash like you should be left in the dumpster. ");
            }
            else {
                txt.push("You might look like a dude, but I heard you act like a bitch! ");
                txt.push("You look like a bitch. You should dress like one too. ");
            }
        }
        else if (wearing.underwear) {
            txt.push("Why are you only wearing panties? You looking to get raped? ");
            txt.push("You trying to show off that tiny cock in those panties, slut? ");
            txt.push("Fucking tease. Just take off those panties. ");
        }
        else {
            txt.push("Nasty slut!");
            txt.push("You look like rape bait. ");

            if (!gender.canUseCock()) {
                if (cl.c.chastity !== null) {
                    txt.push("Good thing you have that locked up. No one wants to see your sissy clitty.");
                    txt.push("HAHAHAHA you're wandering around showing everyone your locked cock? You must really be desperate to take it up that ass!");
                }
                else {
                    txt.push("HAHAHAHA!!! Look at that tiny little pecker! No girl will ever love you!");
                    txt.push("Shrip dick! Shrip dick! Shrip dick!");
                    txt.push("TINY DICK, TINY DICK! You have a tiny dick. 🤏🤏🤏 ");
                    txt.push("Hahaha! You're the one with the tiny dick? You do look like a bitch! ");
                }
            }
            if (cl.c.chest < 3) {
                txt.push("You look like a chick without the tits! ");
                txt.push("You're a carpenters dream. Flat as a board and easy to nail! ");
            }
            else {
                txt.push("Nice tits slut! ");
                txt.push("Those tits make up for your lack of personality?");
            }
        }
        return {
            chatID: 0,
            speaker: trap.name,
            text: txt[g.rand(0, txt.length)],
            button: [
                { chatID: -1, text: "That was mean", callback: "kill" }
            ]
        };
    }
    else if (chatID === 800) { //steal clothing
        txt = new Array();
        let wearing = cl.wearing();
        
        if (wearing.outerwear) {
            if (trap.char.p === "boy") {
                if (wearing.crossdressing) {
                    txt = [
                        "Sluts like you don't deserve clothes! ",
                        "You're clothes would look better on the ground. "
                    ];
                }
                else {
                    txt = [
                        "I like your clothes so much I'm going to take them!",
                        "Gimmie your clothes!"
                    ];
                }
            }
            else {
                if (wearing.crossdressing) {
                    txt = [
                        "Pretty clothes. I need them!",
                        "Give me your pretty dress! "
                    ];
                }
                else {
                    txt = [
                        "Ewww. You shouldn't wear that! Give it to me.",
                        "Darling, you look better without those gross boy clothes. Give them to me!"
                    ];
                }
            }
        }
        else if (wearing.underwear) {
            if (trap.char.p === "boy") {
                if (cl.pantiesTxt() === "panties" || cl.c.bra !== null) {
                    txt = [
                        "Why are you running around in your panties? You should be naked, slut! ",
                        "Sluts like you should be naked to show how hungry for cock you are! "
                    ];
                }
                else {
                    txt = [
                        "Nice underwear. I'm going to take them!"
                    ];
                }
            }
            else {
                if (cl.pantiesTxt() === "panties" || cl.c.bra !== null) {
                    txt = [
                        "OOooo I want your panties! So sexy. Give them to me!",
                        "Your panties are mine! "
                    ];
                }
                else {
                    txt = [
                        "That underwear is so gross on you! ",
                        "Your panties are mine! "
                    ];
                }
            }
        }
        return {
            chatID: 800,
            speaker: trap.name,
            text: txt[g.rand(0, txt.length)],
            button: [
                { chatID: -1, text: "!", callback: "" }
            ]
        };
    }
    else if (chatID === 700) {
        let coins = g.rand(100, 200);
        let jars = g.rand(2, 5);
        let lube = g.rand(20, 50);
        gv.mod("money", coins);
        inv.addMulti("emptyjar", jars);
        inv.addMulti("lube", lube);
        if (g.rand(0, 2) === 1)
            inv.add("rawmeat");

        return {
            chatID: 1,
            speaker: "thinking",
            text: "Jackpot! I got $" + coins + ", " + jars + " empty jars, and " + lube + 
                " applications of lube! Love this place! ",
            button: [
                { chatID: -1, text: "[Take everything!]", callback: "kill_r1004bg" }
            ]
        };
    }
    else if (chatID === 701) {
        let coins701 = g.rand(20, 50);
        let jars701 = g.rand(0, 4) === 0;
        gv.mod("money", coins701);
        if (jars701)
            inv.addMulti("emptyjar", 1);

        return {
            chatID: 1,
            speaker: "thinking",
            text: "Sweet! I got $" + coins701 + (jars701 ? "and an empty jar" : "") +
                "! ",
            button: [
                { chatID: -1, text: "[Take everything!]", callback: "kill_r1004bg" }
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
            {
                chatID: 2,
                speaker: "me",
                text: "That's ok. I'm just going to stay down here. In the toilet. " +
                    "I like getting pissed on. ",
                button: [
                    { chatID: -1, text: "[Stay in the hole]", callback: "nextHole" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "I'm so glad someone was able to " +
                    "help me out this hole!",
                button: [
                    { chatID: -1, text: "[Climb out]", callback: "holeRape" }
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: "Ouch! There's ants in here! Those bites are sapping my energy!",
                button: [
                    { chatID: -1, text: "!", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: trap.name,
                text: "Ok! Good luck getting out! ",
                button: [
                    { chatID: -1, text: "*Grrrrr*", callback: "nextHole" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "The constant ants biting me have sapped my energy. I'm so " +
                    "weak. I'm afraid I might pass out.. The room is getting black. ",
                button: [
                    { chatID: -1, text: "[passout]", callback: "passout" }
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "Just as I thought. Empty. I've already pillaged this chest today. ",
                button: [
                    { chatID: -1, text: "[Close chest]", callback: "kill_r1004bg" }
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "Well this is crap! There's nothing in here! ",
                button: [
                    { chatID: -1, text: "[Close chest]", callback: "kill_r1004bg" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "I don't have the energy to run away",
                button: [
                    { chatID: -1, text: "[Need 50 energy]", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "me",
                text: "Yelp! Run run as fast as you can. You'll never catch me 'cause " +
                    "I'm the ginger bread man!",
                button: [
                    { chatID: -1, text: "[used 50 energy]", callback: "kill" }
                ]
            },
            {
                chatID: 11,
                speaker: trap.name,
                text: "Fine slut! Keep you clothes. I'm going to find someone easier. ",
                button: [
                    { chatID: -1, text: "...", callback: "kill" }
                ]
            },
            {
                chatID: 12,
                speaker: trap.name,
                text: "What the fuck! Can't you see I'm trying to plant my seed into " +
                    "my succulent? Go before you ruin her bond with our nature! ",
                button: [
                    { chatID: -1, text: "oh. Sorry. ", callback: "kill" }
                ]
            },
            {
                chatID: 13,
                speaker: trap.name,
                text: "I hurt my foot. Be a dear and give it a kiss to make it feel " +
                    "better. ",
                button: [
                    { chatID: -1, text: "Sure", callback: "" },
                    { chatID: -1, text: "No way! [Be on your way]", callback: "kill" },
                ]
            },
            {
                chatID: 14,
                speaker: trap.name,
                text: "Thank you so much! You can have this raw meat I've been carring " +
                    "around. ",
                button: [
                    { chatID: -1, text: "Thanks?", callback: "kill" },
                ]
            },
            {
                chatID: 15,
                speaker: trap.name,
                text: "You look like a slut. Show me your tits! ",
                button: [
                    { chatID: -1, text: "Sure!", callback: "kill" },
                    { chatID: -1, text: "No way!", callback: "kill" },
                ]
            },
            {
                chatID: 16,
                speaker: "!girl3a",
                text: "Caught another one wandering in OUR forest! What should we do " +
                    "with " +gender.pronoun("her") + "? ",
                button: [
                    { chatID: 17, text: "uhhh, let me go?", callback: "" },
                ]
            },
            {
                chatID: 17,
                speaker: "!girl3",
                text: "Yeah. We should let " + gender.pronoun("her") + "go. But first " +
                    "we need to cover that ugly butthole. What flower do you think we " +
                    "should give you? ",
                button: [
                    { chatID: 18, text: "Rose", callback: "rope_rose" },
                    { chatID: 18, text: "Daisy", callback: "rope_daisy" },
                    { chatID: 18, text: "A pink one", callback: "rope_pink" },
                    { chatID: 18, text: "You pick", callback: "rope_pick" },
                ]
            },
            {
                chatID: 18,
                speaker: "!girl3a",
                text: "Hehehe! So pretty! Now we can let you go. ",
                button: [
                    { chatID: -1, text: "...thanks", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 19,
                speaker: "me",
                text: "AAAk! What are you doing! ",
                button: [
                    { chatID: 20, text: "...", callback: "rope_clothes" },
                ]
            },
            {
                chatID: 20,
                speaker: "girl",
                text: "So sorry! The cult stole my clothes and I can't run around here " +
                    "naked! I'm not some gutter whore. Good luck!",
                button: [
                    { chatID: 21, text: "But those are my clothes! ", callback: "rope_clothes" },
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "Crap now how am I going to get down? ",
                button: [
                    { chatID: -1, text: "*groan*", callback: "rope_wait" },
                ]
            },
            {
                chatID: 22,
                speaker: "thinking",
                text: "I'm so tired. I don't know if I can go on.... ",
                button: [
                    { chatID: -1, text: "pass out...", callback: "passout" },
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "I'm too weak to pull myself up.",
                button: [
                    { chatID: -1, text: "[Need strength level 5]", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "jones",
                text: "Well, well, what do we have here? Looks like a slut on a string. " +
                    "I bet you want to get down don't you slut? Of course you don't want to get down. " +
                    "You're where you want to me, tied up and naked. I must say I'm getting quite the " +
                    "erection staring at your helpless ass. ",
                button: [
                    { chatID: 25, text: "Please just let me down..", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "jones",
                text: "Not quite yet. Keep your mouth shut so I can take care of this erection " +
                    "and continue my hike. After all you made me horny on my hike and your voice " +
                    "is quite annoying. Just relax so I can enjoy myself. ",
                button: [
                    { chatID: 28, text: "[Keep your mouth shut and let him do what he wants]", callback: "jonesCock0" },
                    { chatID: 26, text: "[Yell for help!!!]", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "me",
                text: "HHHEEEELLLPPPP!!! There's a freak here! I need help!!!",
                button: [
                    { chatID: 27, text: "...", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "jones",
                text: "Very well. You shall stay up there. I don't take in brats. ",
                button: [
                    { chatID: -1, text: "...", callback: "jonesFail" },
                ]
            },
            {
                chatID: 28,
                speaker: "jones",
                text: "Good slut. I just need to cum. ",
                button: [
                    { chatID: 29, text: "...", callback: "jonesCock1" },
                ]
            },
            {
                chatID: 29,
                speaker: "jones",
                text: "I needed that. I like a set of holes that knows when to be open " +
                    "and when to be closed. Come by my mansion as I could " +
                    "always use a new toy. It's in the North East section of the residential " +
                    "part of the city. I'll see you there, since I never take no for an answer. ",
                button: [
                    { chatID: -1, text: "...", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 30,
                speaker: trap.name,
                text: "Oh my! That looks terrible. Let's get you down. ",
                button: [
                    { chatID: -1, text: "Thanks", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 31,
                speaker: "dr",
                text: "Well, well, well. What do we have here! You will make a fine " +
                    "test subject! ",
                button: [
                    { chatID: 32, text: "Test subject?", callback: "dr1" },
                ]
            },
            {
                chatID: 32,
                speaker: "dr",
                text: "Why yes my dear " + gender.pronoun("boy") + ". You see I have " +
                    "such a hard time getting subjects to volunteer for my test that " +
                    "I have to catch them in the wild so we may progress science! As the " +
                    "greatest living mind of our time I must verify my hypothesis of my " +
                    "newest compound to see if it does indeed work! That is where you come in. " +
                    "You shall assist me with my test, in that you will be the test subject. ",
                button: [
                    { chatID: 33, text: "I don't want to be a test subject.", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "dr",
                text: "Well, that's the brillance of this little rope trap. You don't get " +
                    "to deny the progress of science! You see, I used to have a lab in the " +
                    "city until my lab assistant, who calls himself the Chemist, caused a " +
                    "ruckus that drove me from the city and stole my formula. I do miss that " +
                    "lab. But no bother, I have developed a new formula than that drivel he " +
                    "peddles. A new faster transformation serum to turn the world into big " +
                    "titty bimbos!!!!",
                button: [
                    { chatID: 34, text: "huh?", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "dr",
                text: "I shall turn all the people into giant titty, giant badonkadonk, wet " +
                    "pussy bimbos! You see, even though I'm a brillant man, women seem to be " +
                    "attracted more to men of small brains, big muscles, and large penises. " +
                    "However, If I turn all the people on this earth into bimbos I shall be the only man remaining " +
                    "and be able to have sex with a different bimbo for each hour of the day! " +
                    "Now we shall see if the newest serum can in fact turn you instantly into my " +
                    "dream bimbo! ",
                button: [
                    { chatID: 35, text: "Sweet!", callback: "" },
                    { chatID: 36, text: "AAAKK NO! Keep that needle away from me!!!!", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "dr",
                text: "Yes, quite sweet. Now let's see if it works. ",
                button: [
                    { chatID: -1, text: "yes!", callback: "dr2" },
                ]
            },
            {
                chatID: 36,
                speaker: "dr",
                text: "Did I not explain to you how this rope trap works? I could have sworn I " +
                    "did. You don't get to say no. Now, think of this like prison rape. It's going " +
                    "to happen whether you want it or not, so just try to relax and enjoy it. ",
                button: [
                    { chatID: -1, text: "You bastard!", callback: "dr2" },
                ]
            },
            {
                chatID: 37,
                speaker: "dr",
                text: "Drat! It's faster and has nice growth of the titties, but not a " +
                    "full bimbo transformation! I must get back to my lab!",
                button: [
                    { chatID: -1, text: "Wait! Did you just make my breasts bigger? Let me down! ", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 38,
                speaker: "dr",
                text: "Drat! It's faster and has nice growth of the badonkadonk, but not a " +
                    "full bimbo transformation! I must get back to my lab!",
                button: [
                    { chatID: -1, text: "Wait! Did you just make my ass bigger? Let me down! ", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 39,
                speaker: "dr",
                text: "Drat! It's faster and has shunk you penis, but not quite turned " +
                    "it into a dripping wet pussy. I must get back to my lab!",
                button: [
                    { chatID: -1, text: "Wait! Did you just shrink my dick! Let me down! ", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 40,
                speaker: "dr",
                text: "Hmmmm. No noticeable effect. I must get back to my lab!",
                button: [
                    { chatID: -1, text: "Wait! Let me down! ", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 41,
                speaker: "dr",
                text: "Why hello again my dear " + gender.pronoun("boy") + ". Come to " +
                    "assist me some more? ",
                button: [
                    { chatID: 42, text: "You again?", callback: "dr1" },
                ]
            },
            {
                chatID: 42,
                speaker: "dr",
                text: "Yes. I must say I haven't quite perfected it, but let us see " +
                    "what what happens this time? ",
                button: [
                    { chatID: -1, text: "*groan*", callback: "dr2" },
                ]
            },
            {
                chatID: 43,
                speaker: "girl3a",
                text: "Looks like we caught another one. You know " + gender.pronoun("she") +
                    " we should make her into a pretty little girl!",
                button: [
                    { chatID: 44, text: "huh?", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "girl3",
                text: "Totally! Let's do " + gender.pronoun("her") + " makeup! I always " +
                    "love doing someone else's makeup. It's so much fun! ",
                button: [
                    { chatID: 45, text: "Sweet! Make me into a pretty little girl!", callback: "" },
                    { chatID: 46, text: "What? NO!", callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "girl3a",
                text: "Yay! So much fun. Hmmm. How should we do her makeup? ",
                button: [
                    { chatID: 47, text: "...", callback: "makeup" },
                ]
            },
            {
                chatID: 46,
                speaker: "girl3a",
                text: "Shut up! You're our prisoner and we'll do you makeup however we want! ",
                button: [
                    { chatID: 47, text: "drat!", callback: "makeup" },
                ]
            },
            {
                chatID: 47,
                speaker: "girl3",
                text: "Aren't you a pretty girl! I love it!  ",
                button: [
                    { chatID: 48, text: "...", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "girl3a",
                text: "Best work yet! Now let's go and harass the cult! ",
                button: [
                    { chatID: -1, text: "...", callback: "rope_fwump" },
                ]
            },
            {
                chatID: 49,
                speaker: "thinking",
                text: "That's disgusting! I'm not going to drink their piss! ",
                button: [
                    { chatID: -1, text: "[Need Piss Level 4]", callback: "" },
                ]
            },
            {
                chatID: 50,
                speaker: "thinking",
                text: "Drat! I don't have any empty jars! ",
                button: [
                    { chatID: -1, text: "[Need empty jar]", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "me",
                text: "Oh dammit! My shoes are stuck in the mud! Gross ",
                button: [
                    { chatID: -1, text: "[Remove your socks and shoes to free yourself]", callback: "sockShoesRemove" },
                ]
            },
            {
                chatID: 52,
                speaker: "me",
                text: "Holy crap! That was close! That hook almost killed me! I guess I'm " +
                    "lucky it only shredded my clothes. ",
                button: [
                    { chatID: -1, text: "...", callback: "kill" },
                ]
            },
        ];
        
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};