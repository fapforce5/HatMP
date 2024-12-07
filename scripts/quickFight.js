var quickFight = {};
var room1002 = {};

//add dominate option - DOM - SUB = total player dom - each fighter will have a DOM level
//if DOM achieved then same action as winning the fight

//add hot click areas (easter eggs) - if player clicks the MC's penis he grabs his crotch
//if nipple them MC covers nipples
//find other places to put hot spots

//need molestation before sex
//fingering
//spreading
//if girl and penis then stroking
//maybe some hitting / ass slapping

//lose - go in a box - kidnapped
//lose - abducted by mr jones

//surprise rape -  they decide

//also need inside character's head / I'm in so much pain / I'm so horny / please don't based on user input

quickFight.getStats = function (enemyFightLevel, enemyEnergy = 100) {
    if (enemyEnergy < 1)
        enemyFightLevel = 0;
    else
        enemyFightLevel = Math.round(enemyFightLevel * (enemyEnergy / 100));
    var punchPower = levels.get("strength").l;
    var energyMult = parseFloat(gv.get("energy") / 100).toFixed(2);
    var total = Math.round((punchPower) * energyMult);

    return { punchPower: punchPower, energyMult: energyMult, total: total, enemyFightLevel: enemyFightLevel, winProb: quickFight.getProb(enemyFightLevel, total).txt };
}


quickFight.getProb = function (enemy, me) {
    var total = Math.abs(enemy - me)
    if (total < 2)
        return { txt: "Even match", num: 0 };
    if (total < 6 && enemy > me)
        return { txt: "Little hard", num: -1 };
    if (total < 6 && me > enemy)
        return { txt: "Little easy", num: 1 };
    if (total < 12 && enemy > me)
        return { txt: "Hard", num: -2 };
    if (total < 12 && me > enemy)
        return { txt: "Easy", num: 2 };
    if (enemy > me)
        return { txt: "Extremely Hard", num: -3 };
    return { txt: "Extremely Easy", num: 3 };
};

quickFight.init = function (enemyFightLevel, enemyName, btnPressWin, btnPressLost, btnPressRun, roomID) {
    inv.hide();
    var i = 0;
    var stats = quickFight.getStats(enemyFightLevel);
    nav.killbuttonStartsWith("quickfight");
    nav.button({
        "type": "img",
        "name": "quickfight",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1002_quickfight/bg.png"
    }, 1002);
    //nav.button({
    //    "type": "img",
    //    "name": "quickfight",
    //    "left": 1597,
    //    "top": 147,
    //    "width": 306,
    //    "height": 712,
    //    "image": "227_fight/menu.png"
    //}, 1002);
    nav.button({
        "type": "btn",
        "name": "quickfightFight",
        "left": 760,
        "top": 300,
        "width": 400,
        "height": 100,
        "image": "1002_quickfight/fight.png"
    }, 1002);

    nav.button({
        "type": "btn",
        "name": "quickfightInventory",
        "left": 760,
        "top": 450,
        "width": 400,
        "height": 100,
        "image": "1002_quickfight/inventory.png"
    }, 1002);

    nav.button({
        "type": "btn",
        "name": "quickfightRun",
        "left": 760,
        "top": 600,
        "width": 400,
        "height": 100,
        "image": "1002_quickfight/run.png"
    }, 1002);

    nav.t({
        type: "zimg",
        name: "quickfight",
        left: 1650,
        top: 170,
        font: 30,
        hex: "#ffffff",
        text: "Me"
    }, 1002);
    nav.t({
        type: "zimg",
        name: "quickfight",
        left: 1650,
        top: 690,
        font: 30,
        hex: "#ffffff",
        text: enemyName
    }, 1002);


    
    nav.t({
        type: "img",
        name: "quickfight_strength",
        left: 1660,
        top: 240 + (0 * 45) + 12,
        font: 20,
        hex: "#ffffff",
        text: "Strength: " + stats.punchPower
    }, 1002);
    nav.t({
        type: "img",
        name: "quickfight_energymult",
        left: 1660,
        top: 240 + (1 * 45) + 12,
        font: 20,
        hex: "#ffffff",
        text: "Energy Multiplier: " + stats.energyMult
    }, 1002);
    nav.t({
        type: "img",
        name: "quickfight_mymod",
        left: 1660,
        top: 240 + (2 * 45) + 12,
        font: 20,
        hex: "#ffffff",
        text: ""
    }, 1002);
    nav.t({
        type: "img",
        name: "quickfight_total",
        left: 1660,
        top: 240 + (3 * 45) + 12,
        font: 20,
        hex: "#ffffff",
        text: "Total: " + stats.total
    }, 1002);
   
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 520 + (0 * 45),
        font: 20,
        hex: "#ffffff",
        text: "Strength: " + enemyFightLevel
    }, 1002);
    nav.t({
        type: "img",
        name: "quickfight_enemymod",
        left: 1660,
        top: 520 + (1 * 45),
        font: 20,
        hex: "#ffffff",
        text: ""
    }, 1002);
    nav.t({
        type: "img",
        name: "quickfight_enemytotal",
        left: 1660,
        top: 520 + (2 * 45),
        font: 20,
        hex: "#ffffff",
        text: "Total: " + enemyFightLevel
    }, 1002);
    //nav.t({
    //    type: "img",
    //    name: "quickfight",
    //    left: 1660,
    //    top: 240 + (9 * 45) + 12,
    //    font: 20,
    //    hex: "#ffffff",
    //    text: "Win Chance:"
    //}, 1002);
    nav.t({
        type: "img",
        name: "quickfight_chance",
        left: 1640,
        top: 798,
        font: 30,
        hex: "#ffffff",
        text: stats.winProb
    }, 1002);

    g.fight = {
        fightLevel: enemyFightLevel,
        enemyInitFightLevel: enemyFightLevel,
        myFight: stats.total,
        name: enemyName,
        aftermath: null,
        btnPressWin: btnPressWin,
        btnPressLost: btnPressLost,
        btnPressRun: btnPressRun,
        prob: stats.winProb,
        pocketSand: false,
        smellingSalts: false,
        roomID: roomID
    };
    quickFight.setStats();
};

quickFight.setStats = function () {
    var strength = levels.get("strength").l;
    var energy = gv.get("energy");
    var energyMult;
    if (energy < 50)
        energyMult = .5;
    else if (energy < 100)
        energyMult = 1;
    else
        energyMult = parseFloat(energy / 100) ;
    
    nav.tmod("quickfight_strength", "Strength: " + strength);
    if (g.fight.smellingSalts)
        nav.tmod("quickfight_mymod", "+10 Strength");
    nav.tmod("quickfight_energymult", "Energy Multiplier: " + energyMult);
    var total = Math.round(strength * energyMult) + (g.fight.smellingSalts ? 10 : 0);

    nav.tmod("quickfight_total", "Fight Level: " + total);
    g.fight.myFight = total;

    if (g.fight.pocketSand)
        nav.tmod("quickfight_enemymod", "-30 Strength");
    g.fight.fightLevel = g.fight.enemyInitFightLevel + (g.fight.pocketSand ? -30 : 0);
    nav.tmod("quickfight_enemytotal", "Enemy Total: " + g.fight.fightLevel);
    nav.tmod("quickfight_chance", quickFight.getProb(g.fight.fightLevel, g.fight.myFight).txt);
};

quickFight.drawFight = function () {
    nav.killbutton("quickfightFight");
    nav.killbutton("quickfightRun");
    var mydice, enemydice, myTotal, enemyTotal;
    myTotal = enemyTotal = 0;
    mydice = new Array();
    enemydice = new Array();
    var winText = ["You're a winner!", "Beat down!", "You destroyed them!", "Way to go!", "You're excellent", "Awesome!", "You're amazing!"];
    var loseText = ["You fucked up", "Loser!", "Ah shit!", "You fight like a girl", "That was stupid", "Whoops", "Oh shit", "Lost", "You lost. Sad."];
    nav.t({
        type: "img",
        name: "quickfight",
        left: 350,
        top: 150,
        font: 40,
        hex: "#ffffff",
        text: "My Roll"
    }, 1002);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1350,
        top: 150,
        font: 40,
        hex: "#ffffff",
        text: "Enemy Roll"
    }, 1002);
    nav.button({
        "type": "img",
        "name": "quickfight",
        "left": 575,
        "top": 340,
        "width": 700,
        "height": 400,
        "image": "1002_quickfight/titleBox.png"
    }, 1002);
    for (var i = 0; i < 5; i++) {
        var myTemp = Math.floor(Math.random() * 6) + 1;
        var enemyTemp = Math.floor(Math.random() * 6) + 1;
        myTotal += myTemp;
        enemyTotal += enemyTemp;
        nav.button({
            "type": "img",
            "name": "quickfight",
            "left": 350,
            "top": 200 + (i * 160),
            "width": 150,
            "height": 150,
            "image": "1001_rand/dice" + myTemp + ".png"
        }, 1002);

        nav.button({
            "type": "img",
            "name": "quickfight",
            "left": 1350,
            "top": 200 + (i * 160),
            "width": 150,
            "height": 150,
            "image": "1001_rand/dice" + enemyTemp + ".png"
        }, 1002);
    }
    var meAbsTotal = g.fight.myFight + myTotal;
    var enemyAbsTotal = g.fight.fightLevel + enemyTotal;
    nav.t({
        type: "img",
        name: "quickfight",
        left: 640,
        top: 380,
        font: 30,
        hex: "#ffffff",
        text: "Me<br/>Roll: " + myTotal + "<br/>+ Level: " + g.fight.myFight + "<br/>= Total: " + meAbsTotal
    }, 1002);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1050,
        top: 380,
        font: 30,
        hex: "#ffffff",
        text: "Enemy</br>Roll: " + enemyTotal + "<br/>+ Level: " + g.fight.fightLevel + "<br/>= Total: " + enemyAbsTotal
    }, 1002);

    if (meAbsTotal === enemyAbsTotal)
        quickFight.drawFight();
    else {
        if (meAbsTotal > enemyAbsTotal) {
            g.fight.aftermath = "win";
            gv.mod("energy", -5);
            levels.mod("strength", 15, 999);
            levels.mod("dom", 20, 999);
            nav.t({
                type: "img",
                name: "quickfight",
                left: 800,
                top: 600,
                font: 30,
                hex: "#ffffff",
                text: winText[Math.floor(Math.random() * winText.length)]
            }, 1);
            nav.button({
                "type": "btn",
                "name": "quickfightcomplete",
                "left": 725,
                "top": 800,
                "width": 400,
                "height": 100,
                "image": "1002_quickfight/won.png"
            }, 1002);
        }
        else {
            g.fight.aftermath = "lose";
            gv.mod("energy", -39);
            gv.mod("strength", 15);
            nav.t({
                type: "img",
                name: "quickfight",
                left: 800,
                top: 600,
                font: 30,
                hex: "#ffffff",
                text: loseText[Math.floor(Math.random() * loseText.length)]
            }, 1002);
            nav.button({
                "type": "btn",
                "name": "quickfightcomplete",
                "left": 725,
                "top": 800,
                "width": 400,
                "height": 100,
                "image": "1002_quickfight/lost.png"
            }, 1002);
        }
    }
};

room1002.btnclick = function (name) {
    var i;
    if (name.startsWith("quickfightinv_")) {
        var invIndex = parseInt(name.replace("quickfightinv_", ""));
        switch (inv.master[invIndex].name) {
            case "acia":
                    inv.master[invIndex].count--;
                    gv.mod("energy", 30);
                    quickFight.setStats();
                if (inv.master[invIndex].count > 0) {
                    nav.killbutton("quickfightinv_acia");
                }
                break;
            case "soda":
                inv.master[invIndex].count--;
                gv.mod("energy", 60);
                levels.mod("fitness", -25);
                quickFight.setStats();
                if (inv.master[invIndex].count > 0) {
                    nav.killbutton("quickfightinv_soda");
                }
                break;
            case "cumjar":
                inv.master[invIndex].count--;
                gv.mod("energy", 100);
                quickFight.setStats();
                if (inv.master[invIndex].count > 0) {
                    nav.killbutton("quickfightinv_cumjar");
                }
                break;
            case "smellingsalts":
                if (!g.fight.smellingSalts) {
                    inv.master[invIndex].count--;
                    g.fight.myFight += 10;
                    g.fight.smellingSalts = true;
                    quickFight.setStats();
                }
                else {
                    g.popUpNotice("You can only use smelling salts once. ");
                }
                break;
            case "pocketsand":
                if (!g.fight.pocketSand) {
                    inv.master[invIndex].count--;
                    g.fight.fightLevel -= 30;
                    g.fight.pocketSand = true;
                    quickFight.setStats();
                }
                else {
                    g.popUpNotice("You can only use pocket sand once. ");
                }
                break;
        }
    }
    else {
        switch (name) {
            case "quickfightFight":
                quickFight.drawFight();
                break;
            case "quickfightInventory":
                nav.killbutton("quickfightFight");
                nav.killbutton("quickfightInventory");
                nav.killbutton("quickfightRun");
                var btnCounter = 0;
                for (i = 0; i < inv.master.length; i++) {
                    if ((inv.master[i].type === "e" || inv.master[i].type === "i") && inv.master[i].count > 0) {
                        nav.button({
                            "type": "btn",
                            "name": "quickfightinv_" + i,
                            "left": 760,
                            "top": 100 + (btnCounter * 125),
                            "width": 400,
                            "height": 100,
                            "image": "1002_quickfight/i_" + inv.master[i].name + ".png"
                        }, 1002);
                        btnCounter++;
                    }
                }
                nav.button({
                    "type": "btn",
                    "name": "quickfightGoBack",
                    "left": 760,
                    "top": 100 + (btnCounter * 125),
                    "width": 400,
                    "height": 100,
                    "image": "1002_quickfight/goback.png"
                }, 1002);
                break;
            case "quickfightGoBack":
                nav.killbuttonStartsWith("quickfightinv_");
                nav.killbutton("quickfightGoBack");
                nav.button({
                    "type": "btn",
                    "name": "quickfightFight",
                    "left": 760,
                    "top": 300,
                    "width": 400,
                    "height": 100,
                    "image": "1002_quickfight/fight.png"
                }, 1002);

                nav.button({
                    "type": "btn",
                    "name": "quickfightInventory",
                    "left": 760,
                    "top": 450,
                    "width": 400,
                    "height": 100,
                    "image": "1002_quickfight/inventory.png"
                }, 1002);

                nav.button({
                    "type": "btn",
                    "name": "quickfightRun",
                    "left": 760,
                    "top": 600,
                    "width": 400,
                    "height": 100,
                    "image": "1002_quickfight/run.png"
                }, 1002);
                break;
            case "quickfightRun":
                quickFight.run();
                break;
            case "quickfightcomplete":
                quickFight.complete();
                break;
        }
    }
}

quickFight.run = function () {
    nav.killbutton("quickfightFight");
    nav.killbutton("quickfightRun");
    nav.killbutton("quickfightInventory");
    g.fight.aftermath = "run";
    gv.mod("energy", -30);
    nav.button({
        "type": "btn",
        "name": "quickfightcomplete",
        "left": 760,
        "top": 300,
        "width": 400,
        "height": 100,
        "image": "1002_quickfight/ranaway.png"
    }, 1002);
};

quickFight.complete = function () {
    inv.show();
    nav.killbuttonStartsWith("quickfight");
    var name;
    var roomId = g.fight.roomID;
    if (g.fight.aftermath === "run")
        name = g.fight.btnPressRun;
    else if (g.fight.aftermath === "win")
        name = g.fight.btnPressWin;
    else
        name = g.fight.btnPressLost;

    g.fight = null;
    window[g.room(roomId)]["btnclick"](name);
};