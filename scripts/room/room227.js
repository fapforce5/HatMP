//Room name
var room227 = {};
room227.main = function () {
    $("#room-inv").hide();
    char.changeMenu("hide");
    setTimeout(function () { $("#room-inv").hide(); }, 250);
    g.internal = tEnemy.init("clownQueen", "sewer", 227);
};

room227.btnclick = function (name) {
    switch (name) {
        case "fight":
        case "fuck":
        case "cancel":
        case "block":
        case "undress":
        case "submit":
        case "tease":
            tEnemy.drawButtons(name, 227, g.internal.enemy);
            break;
        case "punch":
        case "kick":
            tEnemy.drawButtons("clear", 227, g.internal.enemy);
            var nextMove = tEnemy.blindNextMove(g.internal.enemy, g.internal.me);
            
            if (nextMove === "bp" && name === "punch" || nextMove === "bk" && name === "kick") {
                tEnemy.drawAction("block");
                tEnemy.drawEnemy(g.internal.enemy, "block");
                tEnemy.drawMe(name);
                g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, Math.round((name === "punch" ? g.internal.me.pPower : g.internal.me.kPower) * .2));
                if (g.internal.enemy.energy < 1)
                    g.roomTimeout = setTimeout(function () { room227.btnclick("enemyLose"); }, 1500);
                else if (Math.floor(Math.random() * 3) === 0)
                    g.roomTimeout = setTimeout(function () { room227.btnclick(nextMove === "p" ? "reactionPunch" : "reactionKick"); }, 1500);
                else
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 1500);
            }
            else {
                if (nextMove === "bp" || nextMove === "bk") {
                    tEnemy.drawAction("pow");
                    tEnemy.drawEnemy(g.internal.enemy, "block");
                }
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawAction("pow");
                    tEnemy.drawEnemy(g.internal.enemy, "recoil");
                    tEnemy.drawMe(name);
                    g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, g.internal.me.pPower);
                    if (g.internal.enemy.energy < 1)
                        g.roomTimeout = setTimeout(function () { room227.btnclick("enemyLose"); }, 1500);
                    else
                        g.roomTimeout = setTimeout(function () { room227.btnclick(nextMove === "p" ? "reactionPunch" : "reactionKick"); }, 1500);
                });
            }
            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = name;
            break;
        case "blockPunch":
        case "blockKick":
            tEnemy.drawButtons("clear", 227, g.internal.enemy);

            var nextMovex = tEnemy.blindNextMove(g.internal.enemy, g.internal.me);
            
            if (nextMovex === "p" && name === "blockPunch" || nextMovex === "k" && name === "blockKick") {
                console.log("block");
                tEnemy.drawEnemy(g.internal.enemy, nextMovex === "p" ? "punch" : "kick");
                tEnemy.drawAction("block");
                tEnemy.drawMe(name);
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, nextMovex === "p" ? Math.round(g.internal.enemy.pPower * .2) : Math.round(g.internal.enemy.kPower * .2));
                if (Math.floor(Math.random() * 3) === 0) {
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawAction("epow");
                        tEnemy.drawEnemy(g.internal.enemy, "recoil");
                        tEnemy.drawMe("punch");
                        g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, g.internal.me.pPower);
                        if (g.internal.enemy.energy < 1)
                            g.roomTimeout = setTimeout(function () { room227.btnclick("enemyLose"); }, 1500);
                        else
                            g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 1500);
                    }, 1500);
                }
                else {
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 1500);
                }
            }
            else if (nextMovex === "p" || nextMovex === "k") {
                console.log("strike");
                tEnemy.drawAction("epow");
                tEnemy.drawEnemy(g.internal.enemy, nextMovex === "p" ? "punch" : "kick");
                tEnemy.drawMe("blockmiss");
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, nextMovex === "p" ? g.internal.enemy.pPower : g.internal.enemy.kPower);
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 1500);
            }
            else {
                console.log("both block");
                tEnemy.drawEnemy(g.internal.enemy, "block");
                tEnemy.myEnergy(g.internal.me, 0);
                tEnemy.enemyEnergy(g.internal.enemy, 0);
                tEnemy.drawMe("blockmiss");
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 1500);
            }
            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = name[0];
            break;
        case "inventory":
            tEnemy.drawButtons("inventoryKill", 227, g.internal.enemy);
            inv.createElements();
            break;
        case "inventoryKill":
            inv.close();
            tEnemy.drawButtons("init", 227, g.internal.enemy);
            break;
        case "pantiesRemove":
        case "shirtRemove":
        case "skirtRemove":
        case "teaseDance":
        case "teaseAss":
        case "teaseCock":
            var counterAction = tEnemy.sexyNextMove(g.internal.enemy, g.internal.me);
            var hornyAdd = 10;
            if (name === "pantiesRemove") {
                cl.c.panties = null;
                cl.c.bra = null;
                cl.display();
            }
            else if (name === "shirtRemove") {
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.c.pj = null;
                cl.c.shirt = null;
                cl.display();
            }
            else if (name === "skirtRemove") {
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.c.pj = null;
                cl.c.pants = null;
                cl.display();
            }
            else {
                hornyAdd = 20;
            }
            console.log("counterAction");

            g.internal.enemy.horny = tEnemy.enemyHorny(g.internal.enemy, hornyAdd);

            if (counterAction === "punch" || counterAction === "kick" || counterAction === "punch")
                tEnemy.drawEnemy(g.internal.enemy, "pose");
            else if (counterAction === "blockPunch" || counterAction === "blockKick")
                tEnemy.drawEnemy(g.internal.enemy, counterAction);
            tEnemy.chibi(name);
            if(counterAction === "punch")
                g.roomTimeout = setTimeout(function () { room227.btnclick("reactionPunch"); }, 1500);
            else if (counterAction === "kick")
                g.roomTimeout = setTimeout(function () { room227.btnclick("reactionKick"); }, 1500);
            else
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 1500);

            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = name;

            break;
        case "reactionPunch":
        case "reactionKick":
            if (g.internal.enemy.energy < 1) {
                g.roomTimeout = setTimeout(function () { room227.btnclick("enemyLose"); }, 1500);
            }
            else {
                tEnemy.drawAction("epow");
                tEnemy.drawEnemy(g.internal.enemy, name === "reactionPunch" ? "punch" : "kick");
                tEnemy.drawMe("clear");
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, name === "reactionPunch" ? g.internal.enemy.pPower : g.internal.enemy.kPower);
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 1500);
            }
            break;
        case "enemyLose":
            tEnemy.drawEnemy(g.internal.enemy, "defeat");
            tEnemy.drawMe("clear");

            if (g.internal.me.punchCount > g.internal.me.kickCount)
                g.mod("body", 10);
            else if (g.internal.me.punchCount < g.internal.me.kickCount)
                g.mod("leg", 10);
            else
                g.mod("fitness", 10);

            chat(0, 227);
            break;
        case "stripReaction":
            g.internal.enemy.horny += 5;
            if (g.internal.enemy.horny < 50)
                room227.btnclick("reaction");
            else
                room227.btnclick("reset");
            break;
        case "reset":
            tEnemy.drawButtons("init", 227, g.internal.enemy);
            tEnemy.drawAction("clear");
            tEnemy.drawEnemy(g.internal.enemy, "pose");
            tEnemy.drawMe("clear");
            break;
    };
};

room227.chatcatch = function (callback) {
    switch (callback) {
        case "money":
            g.mod("money", g.internal.enemy.money);
            char.room(0);
            break;
        default:
            break;
    }
};

room227.chat = function (chatID) {
    if (chatID === 0) { //loss 
        return {
            chatID: 0,
            speaker: g.internal.enemy.name,
            text: g.internal.enemy.loss,
            button: [
                { chatID: -1, text: "Your Money", callback: "money" },
                { chatID: -1, text: "Your Service", callback: "service" }
            ]
        };
    }
    
        return [];
};