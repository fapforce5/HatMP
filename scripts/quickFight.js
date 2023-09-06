var quickFight = {};

quickFight.getStats = function (enemyFightLevel) {
    var punchPower = levels.get("punch").l;
    var kickPower = levels.get("kick").l;
    var energyMult = parseFloat(gv.get("energy") / 100).toFixed(2);
    var total = Math.round((punchPower + kickPower) * energyMult);
    var prob = 0;
    var probTemp = total - enemyFightLevel;
    console.log(probTemp);
    if (probTemp > 30)
        prob = 100;
    else if (probTemp < -30)
        prob = 0;
    else {
        probTempx = Math.abs(probTemp) * 1.6666666;
        console.log(probTempx);
        prob = probTemp > 0 ? Math.round(50 + probTempx) : Math.round(50 - probTempx);
    } 

    return { punchPower: punchPower, kickPower: kickPower, energyMult: energyMult, total: total, winProb: prob };
}

quickFight.init = function (enemyFightLevel, enemyName, btnPressWin, btnPressLost, btnPressRun, roomID) {
    
    var i = 0;
    var stats = quickFight.getStats(enemyFightLevel);
    nav.killbutton("quickfight");
    nav.killbutton("quickfightrunaway");
    nav.killbutton("quickfightFight");
    nav.killbutton("quickfightRun");
    nav.button({
        "type": "img",
        "name": "quickfight",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1002_quickfight/black20Alpha.png"
    }, 1);
    nav.button({
        "type": "img",
        "name": "quickfight",
        "left": 1597,
        "top": 147,
        "width": 306,
        "height": 712,
        "image": "227_fight/menu.png"
    }, 1);
    nav.button({
        "type": "btn",
        "name": "quickfightFight",
        "left": 760,
        "top": 300,
        "width": 400,
        "height": 100,
        "image": "1002_quickfight/fight.png"
    }, 1);

    nav.button({
        "type": "btn",
        "name": "quickfightRun",
        "left": 760,
        "top": 450,
        "width": 400,
        "height": 100,
        "image": "1002_quickfight/run.png"
    }, 1);

    nav.t({
        type: "zimg",
        name: "quickfight",
        left: 1620,
        top: 170,
        font: 20,
        hex: "#ffffff",
        text: enemyName
    }, 1);

    
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (0 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: "Your Fight Level"
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (1 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: " Punch Power: " + stats.punchPower
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (2 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: "+ Kick Power:  " + stats.kickPower
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (3 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: "* Energy Multiplier: " + stats.energyMult
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (4 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: "= Fight Level: " + stats.total
    }, 1);

    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (5 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: enemyName
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (6 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: "Fight Level: " + enemyFightLevel
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1660,
        top: 280 + (7 * 50) + 12,
        font: 20,
        hex: "#ffffff",
        text: "Win Chance: " + stats.winProb + "%"
    }, 1);

    g.fight = {
        fightLevel: enemyFightLevel,
        myFight: stats.total,
        name: enemyName,
        aftermath: null,
        btnPressWin: btnPressWin,
        btnPressLost: btnPressLost,
        btnPressRun: btnPressRun,
        prob: stats.winProb,
        roomID: roomID
    };
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
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1350,
        top: 150,
        font: 40,
        hex: "#ffffff",
        text: "Enemy Roll"
    }, 1);
    nav.button({
        "type": "img",
        "name": "quickfight",
        "left": 575,
        "top": 340,
        "width": 700,
        "height": 400,
        "image": "1002_quickfight/titleBox.png"
    }, 1);
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
        }, 1);

        nav.button({
            "type": "img",
            "name": "quickfight",
            "left": 1350,
            "top": 200 + (i * 160),
            "width": 150,
            "height": 150,
            "image": "1001_rand/dice" + enemyTemp + ".png"
        }, 1);
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
    }, 1);
    nav.t({
        type: "img",
        name: "quickfight",
        left: 1050,
        top: 380,
        font: 30,
        hex: "#ffffff",
        text: "Enemy</br>Roll: " + enemyTotal + "<br/>+ Level: " + g.fight.fightLevel + "<br/>= Total: " + enemyAbsTotal
    }, 1);

    if (meAbsTotal === enemyAbsTotal)
        quickFight.drawFight();
    else {
        if (meAbsTotal > enemyAbsTotal) {
            g.fight.aftermath = "win";
            gv.mod("energy", -20);
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
            }, 1);
        }
        else {
            g.fight.aftermath = "lose";
            gv.set("energy", 0);
            nav.t({
                type: "img",
                name: "quickfight",
                left: 800,
                top: 600,
                font: 30,
                hex: "#ffffff",
                text: loseText[Math.floor(Math.random() * loseText.length)]
            }, 1);
            nav.button({
                "type": "btn",
                "name": "quickfightcomplete",
                "left": 725,
                "top": 800,
                "width": 400,
                "height": 100,
                "image": "1002_quickfight/lost.png"
            }, 1);
        }
    }
};

quickFight.run = function () {
    nav.killbutton("quickfightFight");
    nav.killbutton("quickfightRun");
    g.fight.aftermath = "run";
    gv.mod("energy", g.fight.fightLevel + 30);
    nav.button({
        "type": "btn",
        "name": "quickfightcomplete",
        "left": 760,
        "top": 300,
        "width": 400,
        "height": 100,
        "image": "1002_quickfight/ranaway.png"
    }, 1);
};

quickFight.complete = function () {
    nav.killbutton("quickfight");
    nav.killbutton("quickfightcomplete");
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