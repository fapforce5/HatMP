var rape = {};
var room1004 = {};
rape.type;
rape.char;
rape.roomId;
rape.callbackWin;
rape.callbackLost;
rape.type;
rape.kickCounter;

rape.phases = [
    { i: 0, n: "fully clothed" },
    { i: 1, n: "bra or panties" },
    { i: 2, n: "pre rape" },
    { i: 3, n: "Insert" },
    { i: 4, n: "fuck" },
    { i: 5, n: "cum" },
    { i: 6, n: "post fight" },
];
rape.phase = 0;

rape.init = function (location = "street", roomId = g.roomID, callbackWin = "", callbackLost = "", charNum = null) {
    nav.killall();
    inv.hide();
    rape.step = 0;
    rape.kickCounter = 1;

    rape.callbackWin = callbackWin;
    rape.callbackLost = callbackLost;
    rape.roomId = roomId;
    
    rape.char = getRapeChar(location, charNum);
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

    //var stats = quickFight.getStats(rape.char.fight);
    
    

    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-name="myenergybase" data-room="1004" style=" ' + g.makeCss(10, 280, 1020, 1450) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="damage" data-room="1004" style=" ' + g.makeCss(10, 100, 1020, 1450) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="energy" data-room="1004" style=" ' + g.makeCss(10, 100, 1020, 1450) + '  background: #33ff33; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1020, 200) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1020, 200) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1020, 200) + '  background: #33ff33; border-radius:10px;" ></div>');

    rape.updateEnergy(null, null);
    rape.callphase();
};

rape.callphase = function (increment = false) {
    if (increment)
        rape.phase++;
    if (rape.phase > 6)
        rape.phase = 6;

    switch (rape.phase) {
        case 0: //outerwear
            if (cl.wearing().outerwear) {
                rape.callphase(true);
                return;
            }
            rape.phase0();
            break;
        case 1: //innerwear
            if (cl.wearing().underwear) {
                rape.callphase(true);
                return;
            }
            rape.phase0();
            break;
        case 2: rape.phase2(); break;
        case 3: rape.phase3(); break;
        case 4: rape.phase4(); break;
        case 5: rape.phase5(); break;
        case 6: rape.phase6(); break;
    }
};

rape.phase0 = function () {
    let opening = new Array();
    if (cl.wearing().crossdressing) {
        opening.push("o_1_girl.png");
        if (cl.c.chest > 2) {
            opening.push("o_2_c_g.png");
        }
        else {
            opening.push("o_2_c_b.png");
        }
    }
    else {
        opening.push("o_1_boy.png");
        if (cl.c.chest > 2) {
            opening.push("o_2_n_g.png");
        }
        else {
            opening.push("o_2_n_b.png");
        }
    }

    let img = opening[g.rand(0, opening.length)];

    nav.button({
        "type": "img",
        "name": "r1004bg",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1004_rape/" + img
    }, 1004);

    rape.displayMenu("init");

};
rape.phase1 = function () {
    //else {
    //    if (cl.c.chest > 2) {
    //        opening.push("o_2_g.png");
    //    }
    //    else {
    //        opening.push("o_2_b.png");
    //    }
    //}
    //rape.char.openingImg = opening[g.rand(0, opening.length)];
    //nav.button({
    //    "type": "img",
    //    "name": "r1004bg",
    //    "left": 0,
    //    "top": 0,
    //    "width": 1920,
    //    "height": 1080,
    //    "image": "1004_rape/" + rape.char.openingImg
    //}, 1004);
};


rape.phase2 = function () {

};
rape.phase3 = function () {

};
rape.phase4 = function () {

};

rape.phase5 = function () {

};

rape.phase6 = function () {

    //random can lose clothes - cl.undo();
};


rape.kill = function () {
    nav.killall();

    inv.show();

    var name;
    //if (g.fight.aftermath === "win")
        name = rape.callbackWin;
    //else
      //  name = rape.callbackLost;

    window[g.room(rape.roomId)]["btnclick"](name);
}

rape.updateEnergy = function (enemyEnergyChange = null, myEnergyChange = null) {
    var startingEnemyEnergy = rape.char.energy;
    var staringMyEnergy = gv.get("energy");
    var maxenergy = gv.get("maxenergy");
    var currentMyEnergy = staringMyEnergy;

    if (enemyEnergyChange !== null)
        rape.char.energy += enemyEnergyChange;

    if (myEnergyChange !== null) {
        gv.mod("energy", myEnergyChange);
        currentMyEnergy = gv.get("energy");
    }


    $(".enemy-life[data-t='energy']").css({ "width": ((rape.char.energy / 100) * 280 * g.ratio) + "px" });
    $(".enemy-life[data-t='damage']").css({ "width": ((startingEnemyEnergy / 100) * 280 * g.ratio) + "px" });

    $(".my-life[data-t='energy']").css({ "width": ((currentMyEnergy / maxenergy) * 280 * g.ratio) + "px" });
    $(".my-life[data-t='damage']").css({ "width": ((staringMyEnergy / maxenergy) * 280 * g.ratio) + "px" });

};

rape.displayMenu = function (menu) {
    let btnList = new Array();
    let i;
    nav.killbuttonStartsWith("b1004");
    switch (menu) {
        case "init":
            btnList.push({ n: "struggle", i: "icon_struggle.png" });
            btnList.push({ n: "kick", i: "icon_kick.png" });
            btnList.push({ n: "submit", i: "icon_submit.png" });
            btnList.push({ n: "increment", i: "icon_limp.png" });
            break;
        case "struggleWin":
            btnList.push({ n: "flee", i: "icon_flee.png" });
            break;
        case "rape":
            btnList.push({ n: "struggle", i: "icon_struggle.png" });
            btnList.push({ n: "kick", i: "icon_kick.png" });
            btnList.push({ n: "submit", i: "icon_stickass.png" });
            btnList.push({ n: "increment", i: "icon_whimper.png" });
            break;
    }

    for (i = 0; i < btnList.length; i++) {
        nav.button({
            "type": "zbtn",
            "name": "b1004-" + btnList[i].n,
            "left": 1600,
            "top": 150 + (i * 75),
            "width": 300,
            "height": 72,
            "image": "1004_rape/" + btnList[i].i
        }, 1004);
    }
};

rape.increment = function () {
    nav.killbuttonStartsWith("b1004-");
    switch (rape.step) {
        case 0:
            rape.step = 1;
            cl.c.shirt = cl.c.pants = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
            if (cl.c.panties === null && cl.c.bra === null) {
                room1004.btnclick("increment");
                return;
            }
            if (cl.c.bra !== null || cl.pantiesTxt() === "panties") {
                if (cl.c.chest > 2)
                    stuggleOuter = "o_3_b_4.png";
                else
                    stuggleOuter = "o_3_b_0.png";
            }
            else {
                stuggleOuter = "o_3_b_1.png";
            }
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + stuggleOuter
            }, 1004);
            cl.display();
            rape.displayMenu("rape");
            break;
        case 1:
            rape.step = 2;
            nav.killbutton("r1004bg");
            if (cl.c.chest > 2) {
                stuggleUnder = "o_4_f.png";
            }
            else {
                stuggleUnder = "o_4_m.png";
            }

            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + rape.char.rape0
            }, 1004);

            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/speech0_anal.png"
            }, 1004);

            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + stuggleUnder
            }, 1004);
            nav.killbuttonStartsWith("b1004-");
            cl.c.panties = cl.c.bra = null;
            cl.display();
            rape.displayMenu("rape");
            break;
        case 2:
            rape.step = 3;
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + rape.char.rape1
            }, 1004);
            rape.displayMenu("rape");

            break;
        case 3:
            rape.step = 4;
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + rape.char.rape2
            }, 1004);
            rape.displayMenu("rape");
            break;
    }

};

rape.rolldice = function (updateEnergy = false) {
    var myTotal, enemyTotal;
    var xbtnList = new Array();
    var fightStats = quickFight.getStats(rape.char.fight, rape.char.energy);
    myTotal = enemyTotal = 0;

    nav.button({
        "type": "zimg",
        "name": "b1004-d",
        "left": 1600,
        "top": 150,
        "width": 300,
        "height": 500,
        "image": "1004_rape/icon_bg.png"
    }, 1002);
    nav.t({
        type: "zimg",
        name: "b1004-d",
        left: 1660,
        top: 170,
        font: 20,
        hex: "#ffffff",
        text: "Me"
    });
    nav.t({
        type: "zimg",
        name: "b1004-d",
        left: 1750,
        top: 170,
        font: 20,
        hex: "#ffffff",
        text: rape.char.displayName
    });
    for (var i = 0; i < 5; i++) {
        var myTemp = Math.floor(Math.random() * 6) + 1;
        var enemyTemp = Math.floor(Math.random() * 6) + 1;
        myTotal += myTemp;
        enemyTotal += enemyTemp;
        
        nav.button({
            "type": "zimg",
            "name": "b1004-d",
            "left": 1660,
            "top": 210 + (i * 60),
            "width": 50,
            "height": 50,
            "image": "1001_rand/dice" + myTemp + ".png"
        }, 1002);

        nav.button({
            "type": "zimg",
            "name": "b1004-d",
            "left": 1790,
            "top": 210 + (i * 60),
            "width": 50,
            "height": 50,
            "image": "1001_rand/dice" + enemyTemp + ".png"
        }, 1002);
    }

    var myTotalWithFight = myTotal + fightStats.total;
    var enemyTotalWithFight = enemyTotal + fightStats.enemyFightLevel;

    nav.t({
        type: "zimg",
        name: "b1004-d",
        left: 1620,
        top: 510,
        font: 20,
        hex: "#ffffff",
        text: "Me:"
    });

    nav.t({
        type: "zimg",
        name: "b1004-d",
        left: 1620,
        top: 540,
        font: 20,
        hex: "#ffffff",
        text: myTotalWithFight + " &nbsp;&nbsp;(Roll: " + myTotal + " + STR: " + fightStats.total + ")"
    });

    nav.t({
        type: "zimg",
        name: "b1004-d",
        left: 1620,
        top: 580,
        font: 20,
        hex: "#ffffff",
        text: rape.char.displayName + ":"
    });

    nav.t({
        type: "zimg",
        name: "b1004-d",
        left: 1620,
        top: 610,
        font: 20,
        hex: "#ffffff",
        text: enemyTotalWithFight + " &nbsp;&nbsp;(Roll: " + enemyTotal + " + STR: " + fightStats.enemyFightLevel + ")"
    });

    if (myTotalWithFight >= enemyTotalWithFight) {
        xbtnList.push({ n: "stugglewin", i: "icon_next_brokefree.png" });

        //icon_next_brokefree
    }
    else {
        var xcl = cl.wearing();
        if(xcl.outerwear)
            xbtnList.push({ n: "stuggleOuter", i: "icon_next_outer.png" });
        else if (xcl.underwear)
            xbtnList.push({ n: "stuggleUnder", i: "icon_next_under.png" });
        else
            xbtnList.push({ n: "struggleRape0", i: "icon_next_fuck.png" });
    }

    for (i = 0; i < xbtnList.length; i++) {
        nav.button({
            "type": "zbtn",
            "name": "b1004-" + xbtnList[i].n,
            "left": 1600,
            "top": 660 + (i * 75),
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
    var myTotal, enemyTotal;

    var xbtnList = new Array();
    var fightStats = quickFight.getStats(rape.char.fight, rape.char.energy);
    myTotal = enemyTotal = 0;

    nav.button({
        "type": "zimg",
        "name": "b1004-d",
        "left": 1600,
        "top": 150,
        "width": 300,
        "height": 500,
        "image": "1004_rape/icon_bg.png"
    }, 1002);
    nav.t({
        type: "zimg",
        name: "b1004-d",
        left: 1660,
        top: 170,
        font: 20,
        hex: "#ffffff",
        text: "Kick! (Roll all 6's)"
    });

    for (i = 0; i < diceArray.length; i++) {

        nav.button({
            "type": "zimg",
            "name": "b1004-d",
            "left": 1700,
            "top": 210 + (i * 100),
            "width": 80,
            "height": 80,
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
            name: "b1004-d",
            left: 1650,
            top: 575,
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
            "image": "1004_rape/icon_next_brokefree.png"
        }, 1004);
    }
    else {
        nav.t({
            type: "zimg",
            name: "b1004-d",
            left: 1650,
            top: 575,
            font: 20,
            hex: "#ffffff",
            text: "Kick failed!"
        });
        let xbtnList = new Array();
        let xcl = cl.wearing();
        if (xcl.outerwear)
            xbtnList.push({ n: "increment", i: "icon_next_outer.png" });
        else if (xcl.underwear)
            xbtnList.push({ n: "increment", i: "icon_next_under.png" });
        else
            xbtnList.push({ n: "increment", i: "icon_next_fuck.png" });

        for (i = 0; i < xbtnList.length; i++) {
            nav.button({
                "type": "zbtn",
                "name": "b1004-" + xbtnList[i].n,
                "left": 1600,
                "top": 660,
                "width": 300,
                "height": 72,
                "image": "1004_rape/" + xbtnList[i].i
            }, 1004);
        }
    }
};

room1004.btnclick = function (name) {
    name = name.replace("b1004-", "");
    switch (name) {
        case "flee":
            rape.kill();
            break;
        case "struggle":
            nav.killbuttonStartsWith("b1004-");
            rape.rolldice(true);
            break;
        case "kick":
            rape.kick();
            break;
        case "struggleRape0":
            nav.killbuttonStartsWith("b1004");
            nav.killbutton("r1004bg");
            
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + rape.char.rape1
            }, 1004);
            rape.displayMenu("rape");
            break;
        case "rape2":
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + rape.char.rape2
            }, 1004);
            rape.displayMenu("rape"); 
            break;
        case "submit":
            if (levels.get("sub").l < 4) {
                chat(0, 1004); //not submissive enough
                return;
            }
            //draw submissive menu
            break;
        case "stugglewin":
            rape.menu = "struggleWin";
            rape.displayMenu("struggleWin");
            break;
        case "increment":
            rape.increment();

            break;
        case "stuggleOuter":
            var stuggleOuter = "";
            nav.killbuttonStartsWith("b1004-");
            cl.c.shirt = cl.c.pants = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
            if (cl.c.panties === null && cl.c.bra === null) {
                room1004.btnclick("stuggleUnder");
                return;
            }
            if (cl.c.bra !== null || cl.pantiesTxt() === "panties") {
                if (cl.c.chest > 2) 
                    stuggleOuter = "o_3_b_4.png";
                else 
                    stuggleOuter = "o_3_b_0.png";
            }
            else {
                stuggleOuter = "o_3_b_1.png";
            }
            nav.killbutton("r1004bg");
            nav.button({
                "type": "img",
                "name": "r1004bg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1004_rape/" + stuggleOuter
            }, 1004);
            cl.display();
            rape.displayMenu();
            break;
        case "stuggleUnder":
            
            break;
    }
};