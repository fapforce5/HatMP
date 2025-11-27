var rape = {};
var room1004 = {};
rape.char;
rape.roomId;
rape.callback;
rape.kickCounter;
rape.clothingLost;
rape.rapeType;
rape.phaseChange = "";
rape.phase = 0;
rape.modifier = "";
rape.charMessage;
rape.phases = [
    { i: 0, n: "Suprise", c: 0 },
    { i: 1, n: "fully clothed only", c: 0 },
    { i: 2, n: "bra or panties only", c: 0 },
    { i: 3, n: "intro - choice", c: 0 },
    { i: 4, n: "your choice", c: 0 },
    { i: 5, n: "fuck", c: 0 },
    { i: 6, n: "cum", c: 0 },
    { i: 7, n: "post rape", c: 0 },
    { i: 8, n: "exit", c: 0 },
];


rape.init = function (charNum = null, location = "street", roomId = g.roomID, callback = "") {
    nav.killall();
    inv.hide();
    rape.phase = 0;
    rape.kickCounter = 1;
    rape.clothingLost = null;
    rape.rapeType = null;
    rape.callback = callback;
    rape.roomId = roomId;
    rape.modifier = "";
    rape.charMessage = null;

    rape.char = getRapeChar(location, charNum);
    rape.char.displayName = sc.n(rape.char.name);
    
    rape.phases[0].c = 0;
    rape.phases[1].c = 0;
    rape.phases[2].c = 0;
    rape.phases[3].c = 0;
    rape.phases[4].c = 0;
    rape.phases[5].c = 0;
    rape.phases[6].c = 0;
    rape.phases[7].c = 0;

    if (rape.char === undefined) {
        alert("bad rape char");
        return;
    }
    
    //Save clothes 
    cl.changeClothingSave();

    //set
    nav.button({
        "type": "zimg",
        "name": "r1004",
        "left": 0,
        "top": 902,
        "width": 1920,
        "height": 178,
        "image": "1004_rape/charbar.png"
    }, 1004);
    nav.button({
        "type": "zimg",
        "name": "r1004",
        "left": 1758,
        "top": 918,
        "width": 150,
        "height": 150,
        "image": "1004_rape/" + rape.char.img
    }, 1004);
    nav.t({
        type: "zimg",
        name: "charName",
        left: 1450,
        top: 985,
        font: 20,
        hex: "#ffffff",
        text: rape.char.displayName
    });

    nav.t({
        type: "zimg",
        name: "charName",
        left: 200,
        top: 985,
        font: 20,
        hex: "#ffffff",
        text: sc.n("me")
    });

    nav.button({
        "type": "zimg",
        "name": "m1004-dx",
        "left": 1600,
        "top": 150,
        "width": 300,
        "height": 318,
        "image": "1004_rape/icon_bg.png"
    }, 1002);
    //var stats = quickFight.getStats(rape.char.fight);
    
    

    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-name="myenergybase" data-room="1004" style=" ' + g.makeCss(10, 280, 1020, 1450) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="damage" data-room="1004" style=" ' + g.makeCss(10, 100, 1020, 1450) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="energy" data-room="1004" style=" ' + g.makeCss(10, 100, 1020, 1450) + '  background: #33ff33; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1020, 200) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1020, 200) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1020, 200) + '  background: #33ff33; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-arousal" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1050, 1450) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-arousal" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1050, 1450) + '  background: #d9b568; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-arousal" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1050, 1450) + '  background: #fff7e6; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize my-arousal" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1050, 200) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-arousal" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1050, 200) + '  background: #d9b568; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-arousal" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1050, 200) + '  background: #fff7e6; border-radius:10px;" ></div>');

    
    rape.updateEnergy(null, null, null, null);
    rape.callphase();
};

rape.callphase = function (increment = false) {
    rape.charMessage = null;
    if (increment) {
        rape.phase++;
    }
    if (rape.phase > 8)
        rape.phase = 8;
    if (rape.phase === 1) {
        let wearing = cl.wearing();
        if (wearing.outerwear)
            rape.phase = 1;
        else if (wearing.underwear)
            rape.phase = 2;
        else
            rape.phase = 3;
    }
    switch (rape.phase) {
        case 0: 
            rape.phase0();
            break;
        case 1: //innerwear
            rape.phase1();
            break;
        case 2:
            cl.c.dress = cl.c.swimsuit = cl.c.shirt = cl.c.pants = cl.c.pj = cl.c.socks = cl.c.shoes = null;
            cl.display();
            if (cl.c.panties === null && cl.c.bra === null) {
                rape.callphase(true);
                return;
            }
            rape.phase2();
            break;
        case 3:
            cl.c.dress = cl.c.swimsuit = cl.c.shirt = cl.c.pants = cl.c.pj = cl.c.socks = cl.c.shoes = cl.c.panties = cl.c.bra = null;
            cl.display();
            rape.phase3(); break;
        case 4: rape.phase4(); break;
        case 5: rape.phase5(); break;
        case 6: rape.phase6(); break;
        case 7: rape.phase7(); break;
        case 8: rape.phase8(false); break;
    }
};

rape.phase0 = function () {
    nav.killbutton("r1004bg");
    let opening = new Array();
    let isComplete = rape.char.phase0();
    let wearing = cl.wearing();
    if (!isComplete.default && isComplete.complete) {
        rape.callphase(true);
        return;
    }
    else if (isComplete.default) {
        if (wearing.outerwear) {
            if (cl.wearing().crossdressing) {
                rape.updateEnergy(null, null, 8);
                opening.push("o_1_girl.png");
                if (cl.c.chest > 2) {
                    opening.push("o_2_c_g.png");
                }
                else {
                    opening.push("o_2_c_b.png");
                }
            }
            else {
                rape.updateEnergy(null, null, 5);
                opening.push("o_1_boy.png");
                if (cl.c.chest > 2) {
                    opening.push("o_2_n_g.png");
                }
                else {
                    opening.push("o_2_n_b.png");
                }
            }
        }
        else if (wearing.underwear) {
            if (cl.pantiesTxt() !== "panties")
                opening.push("o_b_0.png");
            else {
                if (cl.c.chest > 2)
                    opening.push("o_b_2.png");
                else
                    opening.push("o_b_1.png");
            }
        }
        else {
            if (cl.c.chest > 2) {
                opening.push("o_2_g.png");
                rape.updateEnergy(null, null, 7);
            }
            else {
                opening.push("o_2_b.png");
                rape.updateEnergy(null, null, 5);
            }
        }

        nav.button({
            "type": "img",
            "name": "r1004bg",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "1004_rape/" + opening[g.rand(0, opening.length)]
        }, 1004);
    }
    rape.displayMenu("init");
    rape.message(rape.char.openingLine);
    rape.phases[0].c++;
};

rape.phase1 = function () {
    nav.killbutton("r1004bg");
    let opening = new Array();
    let wearing = cl.wearing();
    let isComplete = rape.char.phase1();
    rape.updateEnergy(null, null, 10);

    if (!isComplete.default) {
        if (isComplete.complete) {
            rape.callphase(true);
            return;
        }
        else {
            if (rape.phases[1].c === 0)
                rape.displayMenu("init");
            else
                rape.displayMenu("scream");
            rape.phases[1].c++;
            return;
        }
    }
    else {
        if (rape.phaseChange === "submit") {
            if (gender.pronoun("m") === "m") {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 767,
                    "top": 37,
                    "width": 531,
                    "height": 1043,
                    "image": "1004_rape/submit_phase0_m.png"
                }, 1004);
            }
            else if (cl.c.chest < 3) {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 767,
                    "top": 36,
                    "width": 415,
                    "height": 1044,
                    "image": "1004_rape/submit_phase0_fc.png"
                }, 1004);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 744,
                    "top": 18,
                    "width": 447,
                    "height": 1062,
                    "image": "1004_rape/submit_phase0_f.png"
                }, 1004);
            }
            rape.displayMenu("init");
            rape.message("Do you want to fuck me? I would fuck me so hard.", "me");
            rape.phases[1].c++;
            return;
        }
        else if (rape.char.slap && g.rand(0, 3) === 0 && rape.phaseChange === "struggle") { //slap
            rape.updateEnergy(-5, null, 7, 3);
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 449,
                "top": 21,
                "width": 1022,
                "height": 1059,
                "image": "1004_rape/struggle_0_" + gender.pronoun("f") + "_" + (rape.char.color === "c" ? "w" : rape.char.color) + ".png"
            }, 1004);
            rape.updateEnergy(null, -15);
            rape.displayMenu("scream");
            rape.phases[1].c++;
            if (rape.char.name === "!wolf")
                rape.message("Grrrrr ", rape.char.name);
            else if (rape.char.name === "!plant") 
                rape.message("...", rape.char.name);
            else if (rape.char.gender === "m")
                rape.message("I'm going to beat you till you cry. Tears make my cock so hard! ", rape.char.name);
            else if (rape.char.gender === "f")
                rape.message("Your struggling only makes my pussy wetter!", rape.char.name);
            else
                rape.message("I'm going to beat you till you cry. Tears make my cock so hard! ", rape.char.name);
            return;
        }
        else {
            if (wearing.crossdressing) {
                if (cl.c.chest > 2) {
                    opening.push("o_3_b_4.png");
                }
                else {
                    opening.push("o_3_b_3.png");
                }
            }
            else {
                if (cl.pantiesTxt() === "panties" || cl.c.bra !== null) {
                    opening.push("o_3_b_0.png");
                }
                else {
                    opening.push("o_3_b_1.png");
                }
            }
        }

        nav.button({
            "type": "img",
            "name": "r1004bg",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "1004_rape/" + opening[g.rand(0, opening.length)]
        }, 1004);
    }
    rape.displayMenu("init");
    let stripMsg;
    if (rape.char.name === "!wolf") {
        stripMsg = ["GGGGrrrrr"];
    }
    else if (rape.char.name === "!plant") {
        stripMsg = ["..."];
    }
    if (rape.char.gender === "m") {
        stripMsg = [
            "Slut don't deserve clothing",
            "I am going to fuck you till you bleed!",
            "Give me your clothes, bitch!",
            "Knock knock, here comes the cock!"
        ];
        if (gender.get("f") === "f") {
            stripMsg.push("If you want to be a girl, I'm going to fuck you like one!");
            stripMsg.push("You dress like you need dick!");
            stripMsg.push("You're asking for this.");
            stripMsg.push("You dress like you need a cock in you");
        }
        else {
            stripMsg.push("Faggots don't need clothes to get fucked");
            stripMsg.push("You might look like a boy, but I'm going to fuck you like a girl.");
            stripMsg.push("Get ready for my dick beta boy!");
        }
    }
    else if (rape.char.gender === "f") {
        stripMsg = [
            "Slut don't deserve clothing",
            "Give me your clothes, bitch!",
        ];
        if (gender.get("f") === "f") {
            stripMsg.push("I'm going to dyke out so hard on that hot body!");
            stripMsg.push("You dress like you eat pussy!");
            stripMsg.push("You're asking for this.");
            stripMsg.push("No one dresses prettier than me!");
        }
        else {
            stripMsg.push("I need dick! Now!");
            stripMsg.push("You're so sexy, I need your cock!");
            stripMsg.push("Fuck I need a man like you! ");
        }
    }
    else {
        stripMsg = [
            "Slut don't deserve clothing",
            "Give me your clothes, bitch!",
        ];
    }
    rape.message(stripMsg[g.rand(0, stripMsg.length)], rape.char.name);
    rape.phases[1].c++;
    return;
};

rape.phase2 = function () {
    nav.killbutton("r1004bg");
    zcl.kill();
    let isComplete = rape.char.phase2();
    
    if (!isComplete.default) {
        if (isComplete.complete) {
            rape.callphase(true);
            return;
        }
        else {
            rape.displayMenu("init");
            rape.phases[2].c++;
            return;
        }
    }
    else {
        if (rape.phaseChange === "submit") {
            if (cl.pantiesTxt() === "underwear") {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 661,
                    "top": 141,
                    "width": 637,
                    "height": 939,
                    "image": "1004_rape/struggle_2_mu.png"
                }, 1004);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 661,
                    "top": 141,
                    "width": 637,
                    "height": 939,
                    "image": "1004_rape/struggle_2_" + (cl.c.hairLength > 2 ? "f" : "m") + ".png"
                }, 1004);
            }
            cl.display();
            rape.updateEnergy(null, null, 15, 3);
            rape.displayMenu("moan");
            if (rape.name === "!wolf")
                rape.message(["Grrrrrr "]);
            else
                rape.message(["That's right, bitch. ", "Show me what you got!"]);
            return;
        }
        else if (rape.phaseChange === "struggle" && rape.char.slap && g.rand(0, 3) === 0 && (cl.c.panties !== null)) { //panty rip
            let img = "";
            let rapecharcolor = rape.char.color === "c" ? "w" : rape.char.color;
            if (gender.pronoun("f") === "f") {
                img = "struggle_1_f_" + rapecharcolor + ".png";
            }
            else {
                let cli = cl.list[cl.i("panties", cl.cTemp.panties)].sex === "f" ? "p" : "u";
                img = "struggle_1_m_" + cli + "_" + rapecharcolor + ".png";
            }
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 650,
                "top": 0,
                "width": 696,
                "height": 1080,
                "image": "1004_rape/" + img
            }, 1004);
            cl.cTemp.panties = null;
            cl.cTemp.bra = null;
            cl.display();
            rape.updateEnergy(null, -10, 5, 3);
            rape.displayMenu("scream_next");
            rape.message(["You don't need these!"]);
            return;
        }
        else {
            if (cl.c.chest > 2) {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/phase2_f.png"
                }, 1004);
            }
            else if (cl.pantiesTxt() === "panties") {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/phase2_m_p.png"
                }, 1004);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/phase2_m_u.png"
                }, 1004);
            }

        }
    }
    let stripMsg;
    if (rape.char.name === "!wolf") {
        stripMsg = ["GGGGrrrrr"];
    }
    else if (rape.char.name === "!plant") {
        stripMsg = ["..."];
    }
    if (rape.char.gender === "m") {
        stripMsg = [
            "Give me those panties! ",
            "Your panties are mine now!"
        ];
        if (gender.get("f") === "f") {
            stripMsg.push("Let me see them titties girl.");
            stripMsg.push("Nice panty bulge. I want to see what's underneath");
            stripMsg.push("You know you want my dick.");
        }
        else {
            stripMsg.push("I'm going to enjoy raping that ass boy!");
            stripMsg.push("Hahaha! Your mouth says no, but your body says it need my dick! ");
        }
    }
    else if (rape.char.gender === "f") {
        stripMsg = [
            "Give me those panties! ",
            "Your panties are mine now!"
        ];
        if (gender.get("f") === "f") {
            stripMsg.push("Love a girl in cute panties. Love it better when their panties are on the ground");
            stripMsg.push("I'm going to love rubbing my clit all over your face.");
            stripMsg.push("Those are fuck me underwear!");
        }
        else {
            stripMsg.push("One last barrier between your dick and my pussy");
            stripMsg.push("Stop fighting me and give me your dick!");
            stripMsg.push("I need to see that penis!");
        }
    }
    else {
        stripMsg = [
            "Give me those panties! ",
            "Your panties are mine now!"
        ];
    }
    rape.message(stripMsg[g.rand(0, stripMsg.length)], rape.char.name);
    rape.phases[2].c++;
};

rape.phase3 = function () {
    nav.killbutton("r1004bg");
    let phase3Complete = rape.char.phase3();
    rape.message(phase3Complete.message, phase3Complete.s);
    if (phase3Complete.complete)
        rape.displayMenu("choice");
    else
        rape.displayMenu("whimper");
    rape.phases[3].c++;
}

rape.phase4 = function () {
    nav.killbutton("r1004bg");
    zcl.kill();
    if (rape.rapeType === null) {
        let rapeCharOptions = new Array();
        if (rape.char.options.includes("cock") && !gender.canUseCock()) {
            for (let i = 0; i < rape.char.options.length; i++) {
                if (rape.char.options[i] !== "cock")
                    rapeCharOptions.push(rape.char.options[i]);
            }
            rape.char.options = rapeCharOptions;
        }
        rape.rapeType = rape.char.options[g.rand(0, rape.char.options.length)];
    }
    let charPhase4 = rape.char.phase4();

    if (!charPhase4.default) {
        if (charPhase4.complete) {
            rape.callphase(true);
            return;
        }
        else {
            if (rape.phases[4].c === 0)
                rape.displayMenu(rape.rapeType);
            else
                rape.displayMenu("scream");
            rape.phases[4].c++;
            return;
        }
    }
    else {
        if (rape.rapeType === "anal") {
            if (rape.phases[4].c === 0) {
                img = "hover_cock_astart_" + rape.char.color + ".png";
                if (rape.char.color === "w" && rape.char.cocksize < 4)
                    img = "hover_cock_astart_w3.png";
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/" + img
                }, 1004);
                rape.message("Please don't put that dirty dick in me", "me");
                rape.displayMenu(rape.rapeType);
                rape.phases[4].c++;
                return;
            }
            if (rape.phaseChange === "phase3cover") {
                img = "hover_cock_block_" + rape.char.color + ".png";
                if (rape.char.color === "w" && rape.char.cocksize < 4)
                    img = "hover_cock_block_w3.png";
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/" + img
                }, 1004);
                rape.displayMenu("phase2");
                rape.message("Aaakk no! I don't want it", "me");
                return;
            }
            else if (rape.phaseChange === "phase3sub") {
                img = "hover_cock_enter_" + rape.char.color + ".png";
                if (rape.char.color === "w" && rape.char.cocksize < 4)
                    img = "hover_cock_enter_w3.png";

                rape.updateEnergy(null, null, 15);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/" + img
                }, 1004);
                rape.message("I am such a dirty anal whore", "me");
            }
            else if (rape.phaseChange === "limp" || rape.phaseChange === "struggle") {
                img = "hover_cock_owie_" + rape.char.color + ".png";
                if (rape.char.color === "w" && rape.char.cocksize < 4)
                    img = "hover_cock_enter_w3.png";

                rape.updateEnergy(null, null, 15);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/" + img
                }, 1004);
                rape.message("Fuck that cock hurts", "me");
            }
            else if (rape.phaseChange === "next") {
                rape.callphase(true);
                return;
            }
        }
        else if (rape.rapeType === "oral") {
            if (rape.phases[4].c === 0) {
                zcl.face(0, 300, 1, "up", rape.char.color, false);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 749,
                    "height": 518,
                    "image": "1004_rape/dick_" + rape.char.color + ".png"
                }, 1004);
                rape.message("I can smell the sweat from his balls", "me");
                rape.displayMenu(rape.rapeType);
                rape.phases[4].c++;
                return;
            }
            else if (rape.phaseChange === "phase3cover") {
                zcl.face(0, 300, 1, "grit", rape.char.color, false);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/oral_slap_" + rape.char.color + ".png"
                }, 1004);
                rape.displayMenu("phase2");
                rape.message("MMmmmMM NO!", "me");
                return;
            }
            else if (rape.phaseChange === "limp" ||rape.phaseChange === "phase3sub" || rape.phaseChange === "struggle") {
                zcl.face(0, 300, 1, "insert", rape.char.color, false);
                rape.message("GAK!", "me");
            }
            else if (rape.phaseChange === "next") {
                rape.callphase(true);
                return;
            }
        }
        else if (rape.rapeType === "cunnilugus") {
            if (rape.phases[4].c === 0) {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/pussy_0_" + rape.char.color + ".png"
                }, 1004);
                zcl.bj(50, -100, 1.4, "", true);
                rape.message("I can smell her sweet sweet pussy", "me");
                rape.displayMenu(rape.rapeType);
                rape.phases[4].c++;
                return;
            }
            else if (rape.phaseChange === "phase3cover") {
                zcl.face(0, 300, 1, "grit", rape.char.color, false);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/oral_slap_" + rape.char.color + ".png"
                }, 1004);
                rape.displayMenu("phase2");
                rape.message("MMmmmMM NO!", "me");
                return;
            }
            else if (rape.phaseChange === "limp" || rape.phaseChange === "phase3sub" || rape.phaseChange === "struggle") {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/pussy_0_" + rape.char.color + ".png"
                }, 1004);
                zcl.bj(-170, 20, 1.4, "open", true);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 1068,
                    "top": 544,
                    "width": 190,
                    "height": 203,
                    "image": "1004_rape/pussy_1.png"
                }, 1004);

                rape.message("GAK!", "me");
            }
            else if (rape.phaseChange === "next") {
                rape.callphase(true);
                return;
            }
        }
        else if (rape.rapeType === "cock") {
            let cocksize = cl.c.cock < 2 ? "b" : "s";
            if (rape.phases[4].c === 0) {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/pussy_phase4_0_" + cocksize + ".png"
                }, 1004);
                rape.message("She's so wet she's dripping down my cock!", "me");
                rape.displayMenu("phase2");
                rape.phases[4].c++;
                return;
            }
            else if (rape.phaseChange === "phase3cover") {
                zcl.face(0, 300, 1, "grit", rape.char.color, false);
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/oral_slap_" + rape.char.color + ".png"
                }, 1004);
                rape.displayMenu("phase2");
                rape.message("MMmmmMM NO!", "me");
                return;
            }
            else if (rape.phaseChange === "limp" || rape.phaseChange === "phase3sub" || rape.phaseChange === "struggle") {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "1004_rape/pussy_phase4_1_" + cocksize + ".png"
                }, 1004);
                rape.message("GAK!", "me");
            }
            else if (rape.phaseChange === "next") {
                rape.callphase(true);
                return;
            }
        }
    }

    rape.displayMenu("next");
    rape.phases[4].c++;
};

rape.phase5 = function () {
    let rapeMsg = new Array();
    let orgasmMult = 0;
    if (rape.rapeType === "anal") {
        orgasmMult = levels.get("anal").l;
    }
    else if (rape.rapeType === "oral" || rape.rapeType === "cunnilugus") {
        orgasmMult = levels.get("oral").l;
    }
    else if (rape.rapeType === "penis") {
        orgasmMult = levels.get("dom").l;
    }
    else {
        orgasmMult = 5;
    }
    if (orgasmMult > 10)
        orgasmMult = 10;
    orgasmMult = Math.round(orgasmMult / 2);
    if (orgasmMult < 1)
        orgasmMult = 1;


    if (rape.phases[5].c === 0) {
        nav.killbutton("r1004bg");
        zcl.kill();
    }
    let pleasure;
    let enemyPleasure = 2 + orgasmMult;
    if (rape.phaseChange === "phase4Sub") {
        enemyPleasure += 4;
    }
    else if (rape.phaseChange === "phase4Struggle") {
        enemyPleasure += 8;
    }

    let charPhase5 = rape.char.phase5();
    if (rape.rapeType === "anal") {
        if (rape.phaseChange === "phase4Sub") {
            if (rape.char.t === "duo") {
                rapeMsg = [
                    { n: "me", m: "GAK GAK Mmmmm slurp GAK GAK" },
                    { n: rape.char.name, m: "You a cock taking champ!" },
                    { n: rape.char.name, m: "Fuck, so tight and warm. " },
                    { n: rape.char.name, m: "This bitch is really into it!" },
                    { n: rape.char.name, m: "I knew you wanted our dicks" },
                    { n: rape.char.name, m: "Take our cocks in your tight little holes!" },
                ];
            }
            else if (rape.char.t === "duowolf") {
                rapeMsg = [
                    { n: "me", m: "GAK GAK Mmmmm slurp GAK GAK" },
                    { n: rape.char.name, m: "arf" },
                ];
            }
            else if (rape.char.t === "wolf") {
                rapeMsg = [
                    { n: "me", m: "uh uh uh *moan*" },
                    { n: "me", m: "That dire wolf knot is so thick in my bussy!" },
                    { n: "me", m: "So full!" },
                    { n: "me", m: "I'm locked into that cock!" },
                    { n: rape.char.name, m: "arf" },
                    { n: rape.char.name, m: "grrrr" },
                    { n: rape.char.name, m: "*panting*" },
                ];
            }
            else if (rape.char.t === "plant") {
                rapeMsg = [
                    { n: "thinking", m: "Fuck me harder! I need it so bad!" },
                    { n: "thinking", m: "I'm so full in all my holes! I love it" },
                    { n: "thinking", m: "It's so slimy, but thick! " },
                    { n: "thinking", m: "Fuck it feels so good!" }
                ];
            }
            else {
                rapeMsg = [
                    { n: "me", m: "Fuck me harder! I need it so bad!" },
                    { n: "me", m: "That feels so good. I love your cock in my ass! " },
                    { n: "me", m: "I'm such an anal whore! I'm such an anal whore! I'm such an anal whore!" },
                    { n: rape.char.name, m: "GRUNT!" },
                    { n: rape.char.name, m: "MMMmmm yeah!" },
                ];
                if (rape.char.t === "male") {
                    rapeMsg.push({ n: "me", m: "Fuck me harder daddy! I need it so bad!" });
                    rapeMsg.push({ n: "me", m: "I love your cock up my ass! I love your cock up my ass! I love your cock up my ass!" });
                    rapeMsg.push({ n: rape.char.name, m: "Love a bitch that pushed back into my dick" });
                    rapeMsg.push({ n: rape.char.name, m: "I knew you wanted to get fucked!" });
                    rapeMsg.push({ n: rape.char.name, m: "Keep pushing into my cock baby!" });
                    if (gender.pronoun("f") === "f") {
                        rapeMsg.push({ n: rape.char.name, m: "Love your bussy hole!" });
                        rapeMsg.push({ n: rape.char.name, m: "You fuck like you look! Smooth and hot!" });
                        rapeMsg.push({ n: rape.char.name, m: "Damn girl. I want to make you into my house wife!" });
                    }
                    else {
                        rapeMsg.push({ n: rape.char.name, m: "Love turning straight boys into faggots" });
                        rapeMsg.push({ n: rape.char.name, m: "I knew your fag ass needed cock!" });
                    }
                }
                else if (rape.char.t === "femdom") {
                    rapeMsg.push({ n: rape.char.name, m: "You love my giant strap-on don't you bitch? " });
                    rapeMsg.push({ n: rape.char.name, m: "You're a bigger pussy than me! " });
                    rapeMsg.push({ n: rape.char.name, m: "Love that bounce on my strap" });
                    rapeMsg.push({ n: rape.char.name, m: "Bounce harder. I can feel it on my clit!" });
                }

            }
        }
        else if (rape.phaseChange === "phase4Limp") {
            rapeMsg = [
                { n: "thinking", m: "When will it end." },
                { n: "thinking", m: "..." },
            ];
            if (rape.char.t === "duo") {
                rapeMsg.push({ n: rape.char.name, m: "You suck as a flesh light. Do something. " });
            }
            else if (rape.char.t === "duowolf" || rape.char.t === "wolf") {
                rapeMsg.push({ n: rape.char.name, m: "grrrrr" });
                rapeMsg.push({ n: rape.char.name, m: "arf" });
                rapeMsg.push({ n: rape.char.name, m: "*panting*" });
            }
            else if (rape.char.t === "plant") {
                rapeMsg.push({ n: "me", m: "So gross and slimy" });

            }
            else {
                rapeMsg.push({ n: rape.char.name, m: "You make a shity flesh light" });
                rapeMsg.push({ n: rape.char.name, m: "Be a good victim and move a bit. " });
                rapeMsg.push({ n: rape.char.name, m: "If you don't move, you're just going to make this rape take longer. " });
            }
        }
        else if (rape.phaseChange === "phase4Struggle") {
            if (rape.char.t === "duo") {
                rapeMsg = [
                    { n: "me", m: "GAK GAK stahp GLUG GAK GAK" },
                    { n: "me", m: "MMmdmmd mmhhhrrrr fffff" },
                    { n: rape.char.name, m: "If I feel teeth I'm going to punch your face!" },
                    { n: rape.char.name, m: "Love it when a bitch struggles. " },
                    { n: rape.char.name, m: "Stop playing. We know you want this" },
                    { n: rape.char.name, m: "If you didn't want our dicks, you wouldn't be acting like a whore!" },
                    { n: rape.char.name, m: "Take our cocks in your tight little holes!" },
                ];
            }
            else if (rape.char.t === "duowolf") {
                rapeMsg = [
                    { n: "me", m: "GAK GAK Mmmmm stahp GAK GAK" },
                    { n: "me", m: "MMmdmmd mmhhhrrrr fffff" },
                    { n: rape.char.name, m: "grrrrrr" },
                ];
            }
            else if (rape.char.t === "wolf") {
                rapeMsg = [
                    { n: "me", m: "Good doggy... Please stop raping my ass" },
                    { n: "me", m: "That dire wolf knot hurts so much! Please stop. Shoo!" },
                    { n: "me", m: "Owie owie owie!" },
                    { n: "me", m: "HELP ME! I'm getting raped by a dire wolf!" },
                    { n: rape.char.name, m: "arf" },
                    { n: rape.char.name, m: "grrrr" },
                    { n: rape.char.name, m: "*panting*" },
                ];
            }
            else if (rape.char.t === "plant") {
                rapeMsg = [
                    { n: "thinking", m: "So gross! How do I get free?" },
                    { n: "thinking", m: "Owie owie owie!" },
                    { n: "thinking", m: "I hope it's over quick!" },
                    { n: "thinking", m: "My mouth is so full of plant cock I can't call for help!" }
                ];
            }
            else {
                rapeMsg = [
                    { n: "me", m: "STOP!! Please stop raping me!" },
                    { n: "me", m: "HELP! HELP ME!" },
                    { n: "me", m: "I'm being raped! Please someone help me!" },
                    { n: "me", m: "GRUNT!" },
                    { n: "me", m: "owie owie owie! Please stop raping my ass!" },
                    { n: "me", m: "You're ripping my ass open! " },
                    { n: "me", m: "*Crying*" },
                    { n: "me", m: "*sob* *sob* *sob*" },
                    { n: rape.char.name, m: "You're pretty when you cry" },
                    { n: rape.char.name, m: "The more you squirm then hard I fuck!" },

                ];
                if (rape.char.t === "male" || rape.char.t === "futa") {
                    rapeMsg.push({ n: "me", m: "Your dick hurts so bad! Please stop!" });
                    rapeMsg.push({ n: "me", m: "Please take your dick out of my ass mister!" });
                    rapeMsg.push({ n: rape.char.name, m: "Your tears only make my dick harder!" });
                    rapeMsg.push({ n: rape.char.name, m: "I don't know why you're crying. You know you want this dick" });
                    rapeMsg.push({ n: rape.char.name, m: "Your mouth says no, but my dick says YES!" });

                    if (gender.pronoun("f") === "f") {
                        rapeMsg.push({ n: rape.char.name, m: "If you didn't want my dick, you should look like a bitch" });
                        rapeMsg.push({ n: rape.char.name, m: "Girls don't get to say no to me!" });

                    }
                    else {
                        rapeMsg.push({ n: rape.char.name, m: "Relax faggot. You need this." });
                    }
                }
                else if (rape.char.t === "femdom") {
                    rapeMsg.push({ n: "me", m: "Your giant strap-on hurts so bad! Please stop!" });
                    rapeMsg.push({ n: "me", m: "Please take your strap-on out of my ass mister!" });
                    rapeMsg.push({ n: rape.char.name, m: "Your tears only my pussy wetter!" });
                    rapeMsg.push({ n: rape.char.name, m: "I don't know why you're crying. You know you want this strap-on" });
                    rapeMsg.push({ n: rape.char.name, m: "Your mouth says no, but my strap-on says YES!" });
                }
            }
        }

        pleasure = levels.analSize(rape.char.cocksize);
    }
    else if (rape.rapeType === "oral") {
        if (rape.phaseChange === "phase4Sub") {
            if (rape.char.t === "wolf") {
                rapeMsg = [
                    { n: "me", m: "GLUCK GLUCK GLUCK mmmMmm GLUCK GLUCK" },
                    { n: "thinking", m: "That dire wolf knot is so thick in my mouth!" },
                    { n: "thinking", m: "I love doggy dick!" },
                    { n: "thinking", m: "So yummy" },
                    { n: rape.char.name, m: "arf" },
                    { n: rape.char.name, m: "grrrr" },
                    { n: rape.char.name, m: "*panting*" },
                ];
            }
            else {
                rapeMsg = [
                    { n: "me", m: "GLUCK GLUCK GLUCK mmmMmm GLUCK GLUCK" },
                    { n: "me", m: "Mmmm *lick* *slurp* *suck* mmmMMmmmm " },
                    { n: rape.char.name, m: "GRUNT!" },
                    { n: rape.char.name, m: "MMMmmm yeah!" },
                ];
                rapeMsg.push({ n: "thinking", m: "Cock is so yummy!" });
                rapeMsg.push({ n: "thinking", m: "MMmmmm I love cock so much!" });
                rapeMsg.push({ n: "thinking", m: "So deep down my throat!" });
                rapeMsg.push({ n: rape.char.name, m: "Love the cocks lust in your eyes" });
                rapeMsg.push({ n: rape.char.name, m: "Fuck yeah. Keep sucking baby." });
                rapeMsg.push({ n: rape.char.name, m: "You were born for this" });
                rapeMsg.push({ n: rape.char.name, m: "That's right girl. Worship this dick" });
                if (gender.pronoun("f") === "f") {
                    rapeMsg.push({ n: rape.char.name, m: "Your thick lips feel so soft" });
                    rapeMsg.push({ n: rape.char.name, m: " " });
                    rapeMsg.push({ n: rape.char.name, m: "Damn girl. I want to make you into my house wife!" });
                }
                else {
                    rapeMsg.push({ n: rape.char.name, m: "Love turning straight boys into faggots" });
                    rapeMsg.push({ n: rape.char.name, m: "I knew your fag face needed cock!" });
                }
            }
        }
        else if (rape.phaseChange === "phase4Limp") {
            rapeMsg = [
                { n: "thinking", m: "When will it end." },
                { n: "thinking", m: "..." },
            ];
            if (rape.char.t === "wolf") {
                rapeMsg.push({ n: rape.char.name, m: "GGRRrrrrrr" });
            }
            else {
                rapeMsg.push({ n: rape.char.name, m: "You make a shity flesh light" });
                rapeMsg.push({ n: rape.char.name, m: "Be a good victim and suck on it." });
                rapeMsg.push({ n: rape.char.name, m: "If you don't suck harder, you're just going to make this rape take longer. " });
            }
        }
        else if (rape.phaseChange === "phase4Struggle") {
            
            if (rape.char.t === "wolf") {
                rapeMsg = [
                    { n: "me", m: "GLUCK GLUCK hhhrrruuummm GLUCK" },
                    { n: "thinking", m: "That dire wolf knot is so full in my mouth!" },
                    { n: "me", m: "HRRUUMMMppp GLUCK GLUCK" },
                    { n: "me", m: "HRUCK *gag* GLUCK" },
                    { n: rape.char.name, m: "arf" },
                    { n: rape.char.name, m: "grrrr" },
                    { n: rape.char.name, m: "*panting*" },
                ];
            }
            else {
                rapeMsg = [
                    { n: "me", m: "GLUCK GLUCK hhhrrruuummm GLUCK" },
                    { n: "thinking", m: "That cock is so full in my mouth!" },
                    { n: "me", m: "HRRUUMMMppp GLUCK GLUCK" },
                    { n: "me", m: "HRUCK *gag* GLUCK" },
                    { n: "me", m: "*Crying*" },
                    { n: "me", m: "*sob* *sob* *sob*" },
                    { n: rape.char.name, m: "You're pretty when you cry" },
                    { n: rape.char.name, m: "The more you squirm then hard I fuck!" },
                    { n: rape.char.name, m: "If I feel teeth I'm going to punch you in the face!" },

                ];
                rapeMsg.push({ n: rape.char.name, m: "Your tears only make my dick harder!" });
                rapeMsg.push({ n: rape.char.name, m: "I don't know why you're crying. You know you want this dick" });
                rapeMsg.push({ n: rape.char.name, m: "Your mouth says no, but my dick says YES!" });

                if (gender.pronoun("f") === "f") {
                    rapeMsg.push({ n: rape.char.name, m: "If you didn't want my dick, you should look like a bitch" });
                    rapeMsg.push({ n: rape.char.name, m: "Girls don't get to say no to me!" });

                }
                else {
                    rapeMsg.push({ n: rape.char.name, m: "Relax faggot. You need this." });
                }
            }
        }
        pleasure = levels.oralTake(rape.char.cocksize);
    }
    else if (rape.rapeType === "cunnilugus") {
        if (rape.phaseChange === "phase4Sub") {
            rapeMsg = [
                { n: "me", m: "*lick* *sssllluurrppp* YUM" },
                { n: "me", m: "nom nom nom" },
                { n: "me", m: "Tastes so yummy!" },
                { n: "me", m: "munch munch" },
                { n: "me", m: "MMmmmm lick" },
                { n: "thinking", m: "Love the taste of wet pussy!" },
                { n: "thinking", m: "MMMMmmmm yummy pussy in my mouth" },
                { n: rape.char.name, m: "Oh yeah baby. Lick that clit!" },
                { n: rape.char.name, m: "Fuck that feels good!" },
                { n: rape.char.name, m: "Lick my honey pot. My pussy loves it a lot!" },
                { n: rape.char.name, m: "Fuuuccckkk lick faster... I'm getting there!" },
            ];
        }
        else if (rape.phaseChange === "phase4Limp") {
            rapeMsg = [
                { n: "thinking", m: "...." },
                { n: "thinking", m: "Is she done yet?" },
                { n: rape.char.name, m: "If you don't start licking I'm just going to grind my clit in your face!" },
                { n: rape.char.name, m: "Put some effort into it! " },
                { n: rape.char.name, m: "You suck at eating twat" },
                { n: rape.char.name, m: "Do it better!" },
            ];
        }
        else if (rape.phaseChange === "phase4Struggle") {
            rapeMsg = [
                { n: "me", m: "MMmrrrffff hhhelll" },
                { n: "thinking", m: "She's really grinding her clit in my face!" },
                { n: "me", m: "HRRUUMMMppp hhhh!!!!" },
                { n: "me", m: "lick *gag* Akkk" },
                { n: "me", m: "*Crying*" },
                { n: "me", m: "*sob* *sob* *sob*" },
                { n: rape.char.name, m: "You're pretty when you cry" },
                { n: rape.char.name, m: "The more you squirm then hard I grind in your face!" },
                { n: rape.char.name, m: "If I feel teeth I'm going to punch you in the face!" },

            ];
            rapeMsg.push({ n: rape.char.name, m: "Your tears only make my pussy wetter!" });
            rapeMsg.push({ n: rape.char.name, m: "I don't know why you're crying. You know you want this cunt" });
            rapeMsg.push({ n: rape.char.name, m: "Your mouth says no, but my pussy says YES!" });
        }
        pleasure = levels.oralTake(rape.char.cocksize);
    }
    else if (rape.rapeType === "penis") {
        if (rape.phaseChange === "phase4Sub") {
            rapeMsg = [
                { n: "me", m: "Oh fuck! Fuck me fuck me! " },
                { n: "me", m: "Your pussy is so wet!" },
                { n: "me", m: "I love fucking you!" },
                { n: "me", m: "Yes yes yes!" },
                { n: "me", m: "Ffffuck yes!" },
                { n: rape.char.name, m: "Oh yeah baby. Fuck this pussy!" },
                { n: rape.char.name, m: "Love your cock baby!!" },
                { n: rape.char.name, m: "*moan*" },
                { n: rape.char.name, m: "yes yes yes! I love your cock!" },
            ];
        }
        else if (rape.phaseChange === "phase4Limp") {
            rapeMsg = [
                { n: "thinking", m: "...." },
                { n: "thinking", m: "Is she done yet?" },
                { n: rape.char.name, m: "You suck at fucking!" },
                { n: rape.char.name, m: "You fuck like a virgin " },
                { n: rape.char.name, m: "You suck at fucking twat" },
                { n: rape.char.name, m: "Do it better!" },
            ];
        }
        else if (rape.phaseChange === "phase4Struggle") {
            rapeMsg = [
                { n: "me", m: "HHHEEELLPPPP!!! I'm being raped! " },
                { n: "me", m: "Someone get this crazy bitch off me!" },
                { n: "me", m: "Get off my dick!" },
                { n: "me", m: "*Crying*" },
                { n: "me", m: "*sob* *sob* *sob*" },
                { n: rape.char.name, m: "You're pretty when you cry" },
                { n: rape.char.name, m: "The more you squirm then hard I'm going to ride your dick." },

            ];
            rapeMsg.push({ n: rape.char.name, m: "Your tears only make my pussy wetter!" });
            rapeMsg.push({ n: rape.char.name, m: "I don't know why you're crying. You know you want this cunt" });
            rapeMsg.push({ n: rape.char.name, m: "Your mouth says no, but my pussy says YES!" });
        }
        pleasure = { canTake: false, pleasure: 10 };
    }
    else {
        pleasure = { canTake: false, pleasure: 3 };
    }

    if (gv.get("arousal") > 95 && pleasure.canTake && rape.rapeType === "anal" && rape.phases[5].c > 1) {
        nav.button({
            "type": "zimg",
            "name": "r1004fg",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "1004_rape/sissygasm1.jpg"
        }, 1004);
        nav.button({
            "type": "zimg",
            "name": "r1004fg",
            "left": 661,
            "top": 382,
            "width": 598,
            "height": 316,
            "image": "1004_rape/sissygasm1.gif"
        }, 1004);
        chat(499, 1004);
        return;
    }
    else if (rape.char.arousal > 95) {
        rape.callphase(true);
        return;
    }
    if (rapeMsg.length === 0) {
        rape.message("", "rapeMessage");
    }
    else {
        let selectedMessage = rapeMsg[g.rand(0, rapeMsg.length)];
        rape.message(selectedMessage.m, selectedMessage.n);
    }
    rape.updateEnergy(null, -3, enemyPleasure, pleasure.pleasure);
    rape.displayMenu("rape");
    rape.phases[5].c++;
};

rape.phase6 = function () {
    rape.updateEnergy(null, null, -100, null);
    nav.killbutton("r1004bg");
    isComplete = rape.char.phase6();
    if (isComplete.c) {
        rape.callphase(true);
        return;
    }
    rape.displayMenu("next");
    rape.message(isComplete.m, isComplete.s);
    rape.phases[6].c++;
};

rape.phase7 = function () {
    zcl.kill();
    nav.killbutton("r1004bg");
    isDefault = rape.char.phase7();
    if (isDefault) {
        if (rape.rapeType === "anal") {
            if (g.rand(0, 3) === 0) {
                if (rape.char.gender === "m")
                    zcl.asshole(261, 200, 1.4, "cum", false);
                else
                    zcl.asshole(261, 200, 1.4, "", false);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "r1004bg",
                    "left": 743,
                    "top": 725,
                    "width": 619,
                    "height": 427,
                    "image": "1004_rape/rapeman0/rape5.png"
                }, 1004);
            }
        }
        else if (rape.rapeType === "oral") {
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 456,
                "top": 0,
                "width": 1084,
                "height": 1080,
                "image": "1004_rape/phase6_oral_" + gender.pronoun("f") + ".png"
            }, 1004);
        }
        else if (rape.rapeType === "cunnilugus") {
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 456,
                "top": 0,
                "width": 1084,
                "height": 1080,
                "image": "1004_rape/phase6_cun_" + gender.pronoun("f") + ".png"
            }, 1004);
        }
    }

    if (cl.checkTemp().nude)
        rape.displayMenu("complete");
    else
        rape.displayMenu("getdressed");
    rape.phases[7].c++;

    //random can lose clothes - cl.undo();
};

rape.phase8 = function (firstTime) {
    rape.message([""]);
    nav.killbutton("r1004bg");
    zcl.kill();
    let endRape = true;
    if (cl.checkTemp().nude || firstTime) {
        endRape = true;
    }
    else {
        if (g.rand(0, 3) === 0 && rape.phases[7].c === 0) {
            if (cl.cTemp.shoes !== null || cl.cTemp.socks !== null) {
                if (cl.cTemp.shoes !== null && cl.cTemp.socks !== null) {
                    rape.clothingLost = "socks and shoes";
                }
                else if (cl.cTemp.shoes !== null)
                    rape.clothingLost = "shoes";
                else {
                    rape.clothingLost = "shoes";
                }

                cl.cTemp.shoes = null;
                cl.cTemp.socks = null;
            }
            else if (cl.cTemp.shirt !== null || cl.cTemp.pants !== null) {
                if (cl.cTemp.shirt !== null && cl.cTemp.pants !== null) {
                    rape.clothingLost = "clothing";
                }
                else if (cl.cTemp.shirt !== null)
                    rape.clothingLost = "top";
                else {
                    rape.clothingLost = "bottoms";
                }

                cl.cTemp.shirt = null;
                cl.cTemp.pants = null;
            }
            else if (cl.cTemp.dress !== null) {
                cl.cTemp.dress = null;
                rape.clothingLost = "dress";
            }
            else if (cl.cTemp.swimsuit !== null) {
                cl.cTemp.swimsuit = null;
                rape.clothingLost = "swimsuit";
            }
            else if (cl.cTemp.pj !== null) {
                cl.cTemp.pj = null;
                rape.clothingLost = "pjs";
            }
            else if (cl.cTemp.bra !== null || cl.cTemp.panties !== null) {
                if (cl.cTemp.bra !== null && cl.cTemp.panties !== null) {
                    rape.clothingLost = "panties and bra";
                }
                else if (cl.cTemp.bra !== null)
                    rape.clothingLost = "bra";
                else {
                    rape.clothingLost = "panties";
                }

                cl.cTemp.bra = null;
                cl.cTemp.panties = null;
            }

            if (rape.clothingLost !== null) {
                cl.undo();
                zcl.displayMain(100, 800, .12, "clothes", true);
                endRape = false;
                chat(999, 1004);
            }
            else {
                cl.undo();
                endRape = true;
            }
        }
        else {
            cl.undo();
            endRape = true;
        }
    }
    rape.phases[8].c++;
    if (endRape) {
        rape.kill();
    }
};

rape.kill = function () {
    nav.killall();
    inv.show();
    //char.room(0);
    window[g.room(rape.roomId)]["btnclick"](rape.callback);
}

rape.updateEnergy = function (enemyEnergyChange = null, myEnergyChange = null, enemyArousal = null, myarousal = null) {
    let startingEnemyEnergy = rape.char.energy;
    let staringMyEnergy = gv.get("energy");
    let currentArousal = gv.get("arousal");
    let maxenergy = gv.get("maxenergy");
    let currentMyEnergy = staringMyEnergy;
    let enemyStartingArousal = rape.char.arousal;
    let myStartingArousal = gv.get("arousal");
    if (enemyEnergyChange !== null)
        rape.char.energy += enemyEnergyChange;

    if (myEnergyChange !== null) {
        gv.mod("energy", myEnergyChange);
        currentMyEnergy = gv.get("energy");
    }

    if (enemyArousal !== null) {
        rape.char.arousal += enemyArousal;
        if (rape.char.arousal > 100)
            rape.char.arousal = 100;
        else if (rape.char.arousal < 0)
            rape.char.arousal = 0;
        if (rape.char.arousal === 0)
            enemyStartingArousal = 0;
    }

    if (myarousal !== null) {
        gv.mod("arousal", myarousal);
        currentArousal = gv.get("arousal");
    }

    $(".enemy-life[data-t='energy']").css({ "width": ((rape.char.energy / 100) * 280 * g.ratio) + "px" });
    $(".enemy-life[data-t='damage']").css({ "width": ((startingEnemyEnergy / 100) * 280 * g.ratio) + "px" });

    $(".my-life[data-t='energy']").css({ "width": ((currentMyEnergy / maxenergy) * 280 * g.ratio) + "px" });
    $(".my-life[data-t='damage']").css({ "width": ((staringMyEnergy / maxenergy) * 280 * g.ratio) + "px" });

    $(".enemy-arousal[data-t='energy']").css({ "width": ((enemyStartingArousal / 100) * 280 * g.ratio) + "px" });
    $(".enemy-arousal[data-t='damage']").css({ "width": ((rape.char.arousal / 100) * 280 * g.ratio) + "px" });

    $(".my-arousal[data-t='energy']").css({ "width": ((myStartingArousal / 100) * 280 * g.ratio) + "px" });
    $(".my-arousal[data-t='damage']").css({ "width": ((currentArousal / 100) * 280 * g.ratio) + "px" });
};

rape.displayMenu = function (menu) {
    let btnList = new Array();
    let i;
    nav.killbuttonStartsWith("b1004");
    switch (menu) {
        case "init":
            var subLevelInit = levels.get("sub").l;
            var domLevelInit = levels.get("dom").l;
            var initWearing = cl.wearing();
            btnList.push({ n: "struggle", i: "icon_struggle.png" });

            if (rape.char.kick !== null) {
                if (domLevelInit < 3)
                    btnList.push({ n: "dom3", i: "icon_kick_x3.png" });
                else
                    btnList.push({ n: "kick", i: "icon_kick.png" });
            }

            if (initWearing.outerwear) {
                if (subLevelInit < 3)
                    btnList.push({ n: "sub3", i: "icon_submit1_x.png" });
                else
                    btnList.push({ n: "submit", i: "icon_submit1.png" });
            }
            else if (initWearing.underwear) {
                if (subLevelInit < 4)
                    btnList.push({ n: "sub4", i: "icon_submit2_x.png" });
                else
                    btnList.push({ n: "submit", i: "icon_submit2.png" });
            }
            else {
                if (subLevelInit < 4)
                    btnList.push({ n: "sub4", i: "icon_submit2_x.png" });
                else
                    btnList.push({ n: "submit", i: "icon_submit.png" });
            }
            
            btnList.push({ n: "next", i: "icon_limp.png" });
            break;
        case "choice":
            var subLevelChoice = levels.get("sub").l;
            var domLevelChoice = levels.get("dom").l;
            btnList.push({ n: "struggle", i: "icon_struggle.png" });

            if (rape.char.kick !== null) {
                if (levels.get("dom").l < 1)
                    btnList.push({ n: "dom1", i: "icon_kick_x1.png" });
                else
                    btnList.push({ n: "kick", i: "icon_kick.png" });
            }

            if (rape.char.options.includes("cock")) {
                if (domLevelChoice < 2)
                    btnList.push({ n: "dom2", i: "icon_choice_cock_x.png" });
                else
                    btnList.push({ n: "choiceCock", i: "icon_choice_cock.png" });
            }
            

            if (rape.char.options.includes("oral") || rape.char.options.includes("cunnilugus")) {
                if (subLevelChoice < 5)
                    btnList.push({ n: "sub5", i: "icon_choice_oral_x.png" });
                else
                    btnList.push({ n: "choiceOral", i: "icon_choice_oral.png" });
            }

            if (rape.char.options.includes("anal")) {
                if (subLevelChoice < 6)
                    btnList.push({ n: "sub6", i: "icon_choice_anal_x.png" });
                else
                    btnList.push({ n: "choiceAnal", i: "icon_choice_anal.png" });
            }
            
            btnList.push({ n: "next", i: "icon_limp.png" });
            break;
        case "rape":
            var rapeDomLevel = levels.get("dom").l;
            var rapeSubLevel = levels.get("sub").l;
            if (rape.rapeType === "anal") {
                if (rape.phases[4].c === 0) {
                    if (rapeDomLevel < 3)
                        btnList.push({ n: "dom3scream", i: "anal_struggle_x.png" });
                    else
                        btnList.push({ n: "phase4Struggle", i: "anal_struggle1.png" });

                    if (rapeSubLevel < 6)
                        btnList.push({ n: "sub6anal", i: "anal_thust_x.png" });
                    else
                        btnList.push({ n: "phase4Sub", i: "anal_thust1.png" });

                    btnList.push({ n: "phase4Limp", i: "anal_limp1.png" });
                }
                else {
                    if (rapeDomLevel < 3)
                        btnList.push({ n: "dom3scream", i: "anal_struggle_x.png" });
                    else
                        btnList.push({ n: "phase4Struggle", i: "anal_struggle" + g.rand(2, 6) + ".png" });

                    if (rapeSubLevel < 6)
                        btnList.push({ n: "sub6anal", i: "anal_thust_x.png" });
                    else
                        btnList.push({ n: "phase4Sub", i: "anal_thust" + g.rand(2, 6) + ".png" });

                    btnList.push({ n: "phase4Limp", i: "anal_limp" + g.rand(2, 6) + ".png" });
                }
            }
            else if (rape.rapeType === "cunnilugus") {
                if (rape.phases[4].c === 0) {
                    if (rapeDomLevel < 3)
                        btnList.push({ n: "dom3oral", i: "oral_struggle_x.png" });
                    else
                        btnList.push({ n: "phase4Struggle", i: "oral_struggle_1.png" });

                    if (rapeSubLevel < 5)
                        btnList.push({ n: "sub5", i: "oral_cun_x.png" });
                    else
                        btnList.push({ n: "phase4Sub", i: "oral_cun_1.png" });

                    btnList.push({ n: "phase4Limp", i: "oral_cun_limp_1.png" });
                }
                else {
                    if (rapeDomLevel < 3)
                        btnList.push({ n: "dom3oral", i: "oral_struggle_x.png" });
                    else
                        btnList.push({ n: "phase4Struggle", i: "oral_cun_struggle_" + g.rand(2, 6) + ".png" });

                    if (rapeSubLevel < 5)
                        btnList.push({ n: "sub5", i: "oral_cun_x.png" });
                    else
                        btnList.push({ n: "phase4Sub", i: "oral_cun_" + g.rand(2, 6) + ".png" });

                    btnList.push({ n: "phase4Limp", i: "oral_cun_limp_" + g.rand(2, 6) + ".png" });
                }
            }
            else if (rape.rapeType === "oral") {
                if (rape.phases[4].c === 0) {
                    if (rapeDomLevel < 3)
                        btnList.push({ n: "dom3oral", i: "oral_struggle_x.png" });
                    else
                        btnList.push({ n: "phase4Struggle", i: "oral_struggle_1.png" });

                    if (rapeSubLevel < 5)
                        btnList.push({ n: "sub5", i: "oral_suck_x.png" });
                    else
                        btnList.push({ n: "phase4Sub", i: "oral_suck_1.png" });

                    btnList.push({ n: "phase4Limp", i: "oral_limp_1.png" });
                }
                else {
                    if (rapeDomLevel < 3)
                        btnList.push({ n: "dom3oral", i: "oral_struggle_x.png" });
                    else
                        btnList.push({ n: "phase4Struggle", i: "oral_struggle_" + g.rand(2, 6) + ".png" });

                    if (rapeSubLevel < 5)
                        btnList.push({ n: "sub5", i: "oral_suck_x.png" });
                    else
                        btnList.push({ n: "phase4Sub", i: "oral_suck_" + g.rand(2, 6) + ".png" });

                    btnList.push({ n: "phase4Limp", i: "oral_limp_" + g.rand(2, 6) + ".png" });
                }
            }
            else {
                btnList.push({ n: "struggle", i: "icon_struggle.png" });
                btnList.push({ n: "submit", i: "icon_submit.png" });
                btnList.push({ n: "next", i: "icon_limp.png" });
            }
            break;
        case "escape":
            btnList.push({ n: "flee", i: "icon_flee.png" });
            break;
        case "phase2":
            btnList.push({ n: "struggle", i: "icon_struggle.png" });
            btnList.push({ n: "next", i: "icon_whimper.png" });
            break;
        case "scream":
            btnList.push({ n: "rerun", i: "icon_cry.png" });
            break;
        case "scream_next":
            btnList.push({ n: "next", i: "icon_cry.png" });
            break;
        case "whimper":
            btnList.push({ n: "rerun", i: "icon_whimper.png" });
            break;
        case "moan":
            btnList.push({ n: "next", i: "icon_moan.png" });
            break;
        case "next":
            btnList.push({ n: "next", i: "icon_whimper.png" });
            break;
        case "complete":
            btnList.push({ n: "complete", i: "icon_rise.png" });
            break;
        case "getdressed":
            btnList.push({ n: "getdressed", i: "icon_getdressed.png" });
            break;
        case "anal":
            if (levels.get("dom").l < 3)
                btnList.push({ n: "dom3", i: "icon_cover_x.png" });
            else
                btnList.push({ n: "phase3cover", i: "icon_cover.png" });

            if (levels.get("sub").l < 6)
                btnList.push({ n: "sub6", i: "icon_anal_sub_" + rape.char.gender + "_x.png" });
            else
                btnList.push({ n: "phase3sub", i: "icon_anal_sub_" + rape.char.gender + ".png" });

            btnList.push({ n: "limp", i: "icon_limp.png" });
            break;
        case "oral":
        case "cunnilugus":
            if (levels.get("dom").l < 3)
                btnList.push({ n: "dom3", i: "icon_oral_no_x.png" });
            else
                btnList.push({ n: "phase3cover", i: "icon_oral_no.png" });

            if (menu === "cunnilugus") {
                if (levels.get("sub").l < 5)
                    btnList.push({ n: "sub5", i: "icon_oral_cunn_x.png" });
                else
                    btnList.push({ n: "phase3sub", i: "icon_oral_cunn.png" });
            }
            else {
                if (levels.get("sub").l < 5)
                    btnList.push({ n: "sub5", i: "icon_oral_" + rape.char.gender + "_x.png" });
                else
                    btnList.push({ n: "phase3sub", i: "icon_oral_" + rape.char.gender + ".png" });
            }

            btnList.push({ n: "limp", i: "icon_limp.png" });
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
            "image": "1004_rape/" + btnList[i].i
        }, 1004);
    }
};

rape.message = function (message, speaker = null) {
    nav.killbutton("m1004-d");
    if (rape.phase === 0 || speaker === "rapeMessage") {
        nav.button({
            "type": "zimg",
            "name": "m1004-d",
            "left": 1600,
            "top": 150,
            "width": 300,
            "height": 318,
            "image": "1004_rape/icon_bg_rape.png"
        }, 1004);
        return;
    }
    if (typeof message === "string") {
        let temp = message;
        message = new Array();
        message.push(temp);
    }
    if (speaker === null) {
        for (let i = 0; i < message.length; i++) {
            nav.t({
                type: "zimg",
                name: "m1004-d",
                left: 1630,
                top: 180 + (i * 30),
                font: 20,
                hex: "#ffffff",
                text: g.newLine(message[i], 24)
            });
        }
    }
    else {
        let char = privateChat.speakerInfo(speaker);
        nav.button({
            "type": "zimg",
            "name": "m1004-d",
            "left": 1630,
            "top": 180,
            "width": 40,
            "height": 40,
            "image": "../../" + char.img.replace("./", "")
        }, 1004);
        nav.t({
            type: "zimg",
            name: "m1004-d",
            left: 1680,
            top: 190,
            font: 20,
            hex: "#ffffff",
            text: char.name
        });
        for (let i = 0; i < message.length; i++) {
            nav.t({
                type: "zimg",
                name: "m1004-d",
                left: 1630,
                top: 230 + (i * 40),
                font: 26,
                hex: "#ffffff",
                text: g.newLine(message[i], 20)
            });
        }
    }
};

rape.rolldice = function (updateEnergy = false) {
    var myTotal, enemyTotal;
    var xbtnList = new Array();
    var fightStats = quickFight.getStats(rape.char.fight, rape.char.energy);
    myTotal = enemyTotal = 0;

    nav.button({
        "type": "zimg",
        "name": "m1004-d",
        "left": 1600,
        "top": 150,
        "width": 300,
        "height": 318,
        "image": "1004_rape/icon_bg.png"
    }, 1002);
    
    
    for (var i = 0; i < 4; i++) {
        var myTemp = Math.floor(Math.random() * 6) + 1;
        var enemyTemp = Math.floor(Math.random() * 6) + 1;
        myTotal += myTemp;
        enemyTotal += enemyTemp;
        
        nav.button({
            "type": "zimg",
            "name": "m1004-d",
            "left": 1630 + (i * 60), //1660,
            "top": 240, //210 + (i * 60),
            "width": 50,
            "height": 50,
            "image": "1001_rand/dice" + myTemp + ".png"
        }, 1002);

        nav.button({
            "type": "zimg",
            "name": "m1004-d",
            "left": 1630 + (i * 60), //1790,
            "top": 380, //210 + (i * 60),
            "width": 50,
            "height": 50,
            "image": "1001_rand/dice" + enemyTemp + ".png"
        }, 1002);
    }

    var myTotalWithFight = myTotal + fightStats.total;
    var enemyTotalWithFight = enemyTotal + fightStats.enemyFightLevel;

    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1630,
        top: 180,
        font: 20,
        hex: "#ffffff",
        text: "Me:" + myTotalWithFight
    });

    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1630,
        top: 210,
        font: 20,
        hex: "#ffffff",
        text:"(R: " + myTotal + " + STR: " + fightStats.total + ")"
    });

    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1630,
        top: 320,
        font: 20,
        hex: "#ffffff",
        text: rape.char.displayName + ": " + enemyTotalWithFight
    });

    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1630,
        top: 350,
        font: 20,
        hex: "#ffffff",
        text: "(R: " + enemyTotal + " + STR: " + fightStats.enemyFightLevel + ")"
    });

    if (myTotalWithFight >= enemyTotalWithFight) {
        xbtnList.push({ n: "flee", i: "icon_flee.png" });
    }
    else {
        rape.updateEnergy(null, null, 5);
        xbtnList.push({ n: "struggleLost", i: "lost" + rape.phase + ".png" });
    }

    for (i = 0; i < xbtnList.length; i++) {
        nav.button({
            "type": "zbtn",
            "name": "b1004-" + xbtnList[i].n,
            "left": 1600,
            "top": 480 + (i * 75),
            "width": 300,
            "height": 72,
            "image": "1004_rape/" + xbtnList[i].i
        }, 1004);
    }

    if (updateEnergy) {
        if (myTotalWithFight >= enemyTotalWithFight) {
            rape.char.energy = 0;
            gv.mod("energy", -5);
        }
        else {
            var fightDiff = enemyTotalWithFight - myTotalWithFight;
            if (fightDiff > 15)
                fightDiff = 15;
            var enemyEnergyChange = (20 - fightDiff) * -1;
            rape.updateEnergy(enemyEnergyChange, -15);
        }
    }
    //Object { punchPower: 9, energyMult: "0.50", total: 5, enemyFightLevel: 50, winProb: "Extremely Hard" }

};

rape.kick = function () {
    
    let diceArray = new Array();
    let i;
    let kickSuccess = true;
    nav.killbuttonStartsWith("b1004-");
    nav.killbutton("m1004-d");
    if (rape.kickCounter > 3)
        rape.kickCounter = 3;
    if (rape.kickCounter < 1)
        rape.kickCounter = 1;
    for (i = 0; i < rape.kickCounter; i++) {
        diceArray.push(g.rand(1, 7));
        if (diceArray[i] !== 6)
            kickSuccess = false;
    }

    rape.kickCounter++;
    myTotal = enemyTotal = 0;

    nav.t({
        type: "zimg",
        name: "m1004-d",
        left: 1660,
        top: 170,
        font: 20,
        hex: "#ffffff",
        text: "Kick! (Roll all 6's)"
    });

    for (i = 0; i < diceArray.length; i++) {

        nav.button({
            "type": "zimg",
            "name": "m1004-d",
            "left": 1710,
            "top": 210 + (i * 75),
            "width": 60,
            "height": 60,
            "image": "1001_rand/dice" + diceArray[i] + ".png"
        }, 1002);
    }

    if (kickSuccess) {
        nav.killbutton("r1004bg");
        nav.button({
            "type": "img",
            "name": "r1004bg",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "1004_rape/" + rape.char.kick
        }, 1004);
        nav.t({
            type: "zimg",
            name: "m1004-d",
            left: 1700,
            top: 435,
            font: 20,
            hex: "#ffffff",
            text: "Success!"
        });
        nav.button({
            "type": "zbtn",
            "name": "b1004-flee",
            "left": 1600,
            "top": 660,
            "width": 300,
            "height": 72,
            "image": "1004_rape/icon_flee.png"
        }, 1004);
    }
    else {
        nav.t({
            type: "zimg",
            name: "m1004-d",
            left: 1700,
            top: 435,
            font: 20,
            hex: "#ffffff",
            text: "Kick failed!"
        });
        let xbtnList = new Array();
        xbtnList.push({ n: "struggleLost", i: "lost" + rape.phase + ".png" });

        for (i = 0; i < xbtnList.length; i++) {
            nav.button({
                "type": "zbtn",
                "name": "b1004-" + xbtnList[i].n,
                "left": 1600,
                "top": 480,
                "width": 300,
                "height": 72,
                "image": "1004_rape/" + xbtnList[i].i
            }, 1004);
        }
    }
};

room1004.btnclick = function (name) {
    name = name.replace("b1004-", "");
    nav.killbutton("m1004");
    switch (name) {
        case "flee":
            g.popUpNotice("You escaped!");
            rape.kill();
            break;
        case "struggle":
            nav.killbuttonStartsWith("b1004-");
            rape.rolldice(true);
            break;
        case "kick":
            rape.kick();
            break;
        case "submit":
            if (rape.phase === 0) {
                if (levels.get("sub").l < 2) {
                    chat(0, 1004); //not submissive enough
                    return;
                }
                rape.phaseChange = "submit";
                rape.callphase(true);
                return;
            }
            else if (rape.phase === 1) {
                if (levels.get("sub").l < 3) {
                    chat(1, 1004); //not submissive enough
                    return;
                }
                rape.phaseChange = "submit";
                rape.callphase(true);
                return;
            }
            else if (rape.phase === 2) {
                if (levels.get("sub").l < 4) {
                    chat(2, 1004); //not submissive enough
                    return;
                }
                rape.phaseChange = "submit";
                rape.callphase();
                return;
            }
            else
                rape.callphase();
            break;
        case "choiceAnal":
            if (levels.get("sub").l < 6) {
                chat(2, 1004); //not submissive enough
                return;
            }
            if (levels.analSize(rape.char.cocksize).c > 2) {
                chat(4, 1004);
                return;
            }
            rape.rapeType = "anal";
            rape.callphase(true);
            break;
        case "choiceOral":
            if (levels.get("sub").l < 5) {
                chat(6, 1004); //not submissive enough
                return;
            }
            if (levels.oralTake(rape.char.cocksize).c > 2) {
                chat(5, 1004);
                return;
            }
            if (rape.char.options.includes("oral"))
                rape.rapeType = "oral";
            else
                rape.rapeType = "cunnilugus";
            rape.callphase(true);
            break;
        case "choiceCock":
            if (gender.canUseCock()) {
                rape.rapeType = "cock";
                rape.callphase(true);
            }
            else if (cl.c.chastity !== null)
                chat(18, 1004);
            else
                chat(19, 1004);
            break;
        case "stugglewin":
            rape.menu = "struggleWin";
            rape.displayMenu("struggleWin");
            break;
        case "struggleLost":
            rape.phaseChange = "struggle";
            if (rape.phase < 4)
                rape.callphase(true);
            else
                rape.callphase();
            break;
        case "rerun":
            rape.phaseChange = "next";
            rape.callphase();
            break;
        case "limp":
            rape.phaseChange = "limp";
            rape.callphase();
            break;
        case "next":
            rape.phaseChange = "next";
            if (rape.phase < 4)
                rape.callphase(true);
            else
                rape.callphase();
            break;
        case "complete":
        case "getdressed":
            rape.phaseChange = "next";
            rape.callphase(true);
            break;
        case "phase3cover":
            rape.phaseChange = "phase3cover";
            rape.callphase();
            break;
        case "phase3sub":
            rape.phaseChange = "phase3sub";
            rape.callphase();
            break;
        case "phase4Sub":
            rape.phaseChange = "phase4Sub";
            rape.callphase();
            break;
        case "phase4Limp":
            rape.phaseChange = "phase4Limp";
            rape.callphase();
            break;
        case "phase4Struggle":
            rape.phaseChange = "phase4Struggle";
            rape.callphase();
            break;
        case "sub3":
            chat(7, 1004);
            break;
        case "sub4":
            chat(8, 1004);
            break;
        case "dom1":
            chat(9, 1004);
            break;
        case "dom2":
            chat(10, 1004);
            break;
        case "dom3":
            chat(11, 1004);
            break;
        case "dom3scream":
            chat(15, 1004);
            break;
        case "sub5":
            if(rape.char.gender === "m")
                chat(12, 1004);
            else
                chat(13, 1004);
            break;
        case "sub6":
            chat(14, 1004);
            break;
        case "sub6anal":
            chat(16, 1004);
            break;
        case "dom3oral":
            chat(17, 1004);
            break;
    }
};

room1004.chatcatch = function (callback) {
    switch (callback) {
        case "phase6":
            rape.phase6(true);
            break;
        case "sissygasm1":
            nav.killbutton("r1004fg");
            nav.button({
                "type": "zimg",
                "name": "r1004fg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/sissygasm2_" + gender.cock() + ".jpg"
            }, 1004);
            break;
        case "sissygasm2":
            levels.mod("xdress", 20);
            cl.doCum();
            rape.updateEnergy(null, null, 25, null);
            nav.killbutton("r1004fg");
            break;
        default:
            break;
    }
};

room1004.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 0,
            speaker: "thinking",
            text: "Crap! I lost my " + rape.clothingLost + "! That jerk must have " +
                "stole them! ",
            button: [
                { chatID: -1, text: "...", callback: "phase6" }
            ]
        }
    }
    else if (chatID === 501) { //choice oral
        let spreadTxt = [
            "That's my little cock sucker. ",
            "I hope you're a hungry slut. ",
            "I'm going to enjoy face fucking you. ",
            "Good slut. You know you're place is on your knees. ",
            "Awww! I was looking forward to forcing you to take my cock!",
            "I'm going to enjoy this",
            "I'm going to fuck the shit out of your face!",
            "I do love a greedy slut.",
            "Fuck that's hot! ",
            "Welcome to pound town, slut. "
        ];
        return {
            chatID: 499,
            speaker: rape.char.name,
            text: spreadTxt[g.rand(0, spreadTxt.length)],
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    }
    else if (chatID === 500) { //choice anal
        let spreadTxt = [
            "I'm going to love tearing that ass up!",
            "I knew you were a slut",
            "You dirty dirty whore",
            "I see you know your purpose",
            "Awww! I was looking forward to forcing you to take my cock!",
            "That is a sexy hole",
            "I'm going to enjoy this",
            "I'm going to fuck the shit out of you!",
            "I do love a greedy slut.",
            "Fuck that's hot! ",
            "Welcome to pound town, slut. ",
            "MMmmmm. Yummy hole. "
        ];
        return {
            chatID: 500,
            speaker: rape.char.name,
            text: spreadTxt[g.rand(0, spreadTxt.length)],
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    }
    else if (chatID === 499) {
        let sissygasmTxt = [
            "I have a funny feeling down there.",
            "Oh my god! That feels so good!",
            "My sissy button is twitching!",
            "I'm going to cum soon!",
            "Fuck that feels good",
        ];
        return {
            chatID: 500,
            speaker: "me",
            text: sissygasmTxt[g.rand(0, sissygasmTxt.length)],
            button: [
                { chatID: 3, text: "...", callback: "sissygasm1" }
            ]
        }
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "No way I'm taking off my clothing! ",
            button: [
                { chatID: -1, text: "[Need Submissive level 2]", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "No way I'm going to get naked here! ",
            button: [
                { chatID: -1, text: "[Need Submissive level 3]", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "No way I'm going to spread my ass open out here! ",
            button: [
                { chatID: -1, text: "[Need Submissive level 5]", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "UUUuugghhh.  ",
            button: [
                { chatID: -1, text: "...", callback: "sissygasm2" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "That cock is too big for my tight little bussy! No way I'll offer " +
                "it up. If the want it, they'll have to take it!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "That cock is too big for my mouth! No way I'll offer " +
                "it up. If the want it, they'll have to take it!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I'm not getting on my knees! They'll have to force me!",
            button: [
                { chatID: -1, text: "[Need Submissive level 4]", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "There's no way I'm going to do that! My will is too strong!",
            button: [
                { chatID: -1, text: "[Need Submissive (SUB) level 3]", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "There's no way I'm going to do that! My will is too strong!",
            button: [
                { chatID: -1, text: "[Need Submissive (SUB) level 4]", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "I'm just a weak little " + gender.pronoun("girl") + ". I'm too scared to do that!",
            button: [
                { chatID: -1, text: "[Need Dominance (DOM) level 1]", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "I'm just a weak little pussy. I'm too scared to do that!",
            button: [
                { chatID: -1, text: "[Need Dominance (DOM) level 2]", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "I'm just a weak little " + gender.pronoun("girl") + ". I'm too scared to do that!",
            button: [
                { chatID: -1, text: "[Need Dominance (DOM) level 3]", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "I'm not going to let them shove their fat cock in my mouth! They'll " +
                "have to make me!",
            button: [
                { chatID: -1, text: "[Need Submissive (SUB) level 5]", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "No way I'm going to be forced to eat her pussy! She'll have to make me!",
            button: [
                { chatID: -1, text: "[Need Submissive (SUB) level 5]", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "I'm not just going to bend over and take their cock! They'll have " +
                "to force it up my tight little bussy hole!",
            button: [
                { chatID: -1, text: "[Need Submissive (SUB) level 6]", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "You're too scared to scream out for help. You silently suffer " +
                "through the evil, brutal rape of your soft tender body. ",
            button: [
                { chatID: -1, text: "[Need Dominance (DOM) level 3]", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "I am not going to bounce against their cock! It's bad enough that " +
                "I'm being voilently raped against my will!",
            button: [
                { chatID: -1, text: "[Need Submissive (SUB) level 6]", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "Your face is too full of cock to scream out and you're too much " +
                "of a scared little " + gender.pronoun("boy") + " to pull you mouth " +
                "away from the thrusts. ",
            button: [
                { chatID: -1, text: "[Need Dominance (DOM) level 3]", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "How am I going to fuck her with my dick if it's locked away? ",
            button: [
                { chatID: -1, text: "[You're wearing chastity dumbass 😝]", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: rape.char.name,
            text: "You don't have a cock! That pathetic thing between your legs is just " +
                "a tiny clit! How are you supposed to fuck me with such a tiny tiny clit? ",
            button: [
                { chatID: -1, text: "[You're 'dick' is too small for sex 😝]", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};