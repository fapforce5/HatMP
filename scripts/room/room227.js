//Room name
var room227 = {};
room227.main = function () {
    $("#room-inv").hide();
    char.changeMenu("hide");
    setTimeout(function () { $("#room-inv").hide(); }, 250);
    //g.internal = { enemy: thisEnemy, bg: "sewer", roomID: 227 };
    if (!(typeof g.internal === 'string' || g.internal instanceof String)) {
        if ("roomID" in g.internal) {
            var enemy, bg, roomID;
            enemy = g.internal.enemy;
            bg = g.internal.bg;
            roomID = g.internal.roomID;
            g.internal = tEnemy.init(enemy, bg, 227, roomID);
        }
        else {
            tEnemy.drawBackground(g.internal.bg);
            tEnemy.drawRoom(g.internal.enemy, g.internal.me, 227);
        }
    }
    else {
        tEnemy.drawBackground(g.internal.bg);
        tEnemy.drawRoom(g.internal.enemy, g.internal.me, 227);
    }
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
                    g.roomTimeout = setTimeout(function () { room227.btnclick("enemyLose"); }, 2000);
                else if (Math.floor(Math.random() * 3) === 0)
                    g.roomTimeout = setTimeout(function () { room227.btnclick(nextMove === "punch" ? "reactionPunch" : "reactionKick"); }, 2000);
                else
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 2000);
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
                        g.roomTimeout = setTimeout(function () { room227.btnclick("enemyLose"); }, 2000);
                    else
                        g.roomTimeout = setTimeout(function () { room227.btnclick(nextMove === "punch" ? "reactionPunch" : "reactionKick"); }, 2000);
                });
            }
            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = name;
            break;
        case "blockPunch":
        case "blockKick":
            tEnemy.drawButtons("clear", 227, g.internal.enemy);

            var nextMovex = tEnemy.blindNextMove(g.internal.enemy, g.internal.me);
            
            if (nextMovex === "punch" && name === "blockPunch" || nextMovex === "kick" && name === "blockKick") {
                tEnemy.drawEnemy(g.internal.enemy, nextMovex);
                tEnemy.drawAction("block");
                tEnemy.drawMe(name);
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, nextMovex === "punch" ? Math.round(g.internal.enemy.pPower * .2) : Math.round(g.internal.enemy.kPower * .2));
                if (g.internal.me.energy < 1) {
                    room227.btnclick("lost");
                }
                else {
                    if (Math.floor(Math.random() * 3) === 0) {
                        g.roomTimeout = setTimeout(function () {
                            tEnemy.drawAction("epow");
                            tEnemy.drawEnemy(g.internal.enemy, "recoil");
                            tEnemy.drawMe("punch");
                            g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, g.internal.me.pPower);
                            if (g.internal.enemy.energy < 1)
                                g.roomTimeout = setTimeout(function () { room227.btnclick("enemyLose"); }, 2000);
                            else
                                g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 2000);
                        }, 2000);
                    }
                    else {
                        g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 2000);
                    }
                }
            }
            else if (nextMovex === "punch" || nextMovex === "kick") {
                tEnemy.drawAction("epow");
                tEnemy.drawEnemy(g.internal.enemy, nextMovex);
                tEnemy.drawMe("blockmiss");
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, nextMovex === "punch" ? g.internal.enemy.pPower : g.internal.enemy.kPower);
                if (g.internal.me.energy < 1) {
                    room227.btnclick("lost");
                }
                else {
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 2000);
                }
            }
            else {
                tEnemy.drawEnemy(g.internal.enemy, "block");
                tEnemy.myEnergy(g.internal.me, 0);
                tEnemy.enemyEnergy(g.internal.enemy, 0);
                tEnemy.drawMe("blockmiss");
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 2000);
            }
            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = name[0];
            break;
        case "inventory":
            tEnemy.drawButtons("inventoryKill", 227, g.internal.enemy);
            tEnemy.makeInventory(227);
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
            g.internal.me.energy = tEnemy.myEnergy(g.internal.me, 5);

            tEnemy.drawButtons("clear", 227, g.internal.enemy);
            var counterAction = tEnemy.sexyNextMove(g.internal.enemy, g.internal.me);
            var hornyAdd;
            if (name === "pantiesRemove") {
                hornyAdd = g.internal.enemy.arousalGrowth;
                cl.c.panties = null;
                cl.c.bra = null;
                cl.display();
            }
            else if (name === "shirtRemove") {
                hornyAdd = g.internal.enemy.arousalGrowth;
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.c.pj = null;
                cl.c.shirt = null;
                cl.display();
            }
            else if (name === "skirtRemove") {
                hornyAdd = g.internal.enemy.arousalGrowth;
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.c.pj = null;
                cl.c.pants = null;
                cl.display();
            }
            else {
                hornyAdd = g.internal.enemy.arousalGrowth * 2;
            }

            if (g.internal.me.energy < 1) {
                room227.btnclick("lost");
            }
            else {
                g.internal.enemy.horny = tEnemy.enemyHorny(g.internal.enemy, hornyAdd);

                if (counterAction === "punch" || counterAction === "kick" || counterAction === "punch")
                    tEnemy.drawEnemy(g.internal.enemy, "pose");
                else if (counterAction === "blockPunch" || counterAction === "blockKick")
                    tEnemy.drawEnemy(g.internal.enemy, counterAction);
                tEnemy.chibi(name);
                if (counterAction === "punch")
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reactionPunch"); }, 2000);
                else if (counterAction === "kick")
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reactionKick"); }, 2000);
                else
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 2000);

                g.internal.me.prev2 = g.internal.me.prev1;
                g.internal.me.prev1 = name;
            }
            break;
        case "submitBJ":
        case "submitAss":
            g.internal.me.energy = tEnemy.myEnergy(g.internal.me, 20);
            g.internal.enemy.eventType = name;
            nav.killall();
            var thisEntry = enemyEnd.end(g.internal.enemy);
            g.internal.enemy.eventStep = thisEntry.eventStep;
            g.internal.chat.text = thisEntry.chat;
            g.internal.chat.btn1 = thisEntry.r;
            g.internal.chat.btn2 = null;
            if (thisEntry.type === "c") {
                chat(1, 227);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, 2000);
            };
            break;
        case "flee":
            chat(5, 227);
            break;
        case "energyUsed15":
        case "energyUsed50":
            tEnemy.drawButtons("clear", 227, g.internal.enemy);
            inv.close();
            g.internal.me.energy = tEnemy.myEnergy(g.internal.me, name === "energyUsed15" ? -15 : -50);
            var nextMovee = tEnemy.blindNextMove(g.internal.enemy, g.internal.me);
            if (nextMovee === "punch")
                g.roomTimeout = setTimeout(function () { room227.btnclick("reactionPunch"); }, 2000);
            else if (nextMovee === "kick")
                g.roomTimeout = setTimeout(function () { room227.btnclick("reactionKick"); }, 2000);
            else
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 2000);

            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = "i";
            break;
        case "reactionPunch":
        case "reactionKick":
            if (g.internal.enemy.energy < 1) {
                g.roomTimeout = setTimeout(function () { roomf227.btnclick("enemyLose"); }, 2000);
            }
            else {
                tEnemy.drawAction("epow");
                tEnemy.drawEnemy(g.internal.enemy, name === "reactionPunch" ? "punch" : "kick");
                tEnemy.drawMe("clear");
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, name === "reactionPunch" ? g.internal.enemy.pPower : g.internal.enemy.kPower);
                if (g.internal.me.energy < 1) {
                    room227.btnclick("lost");
                }
                else {
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 2000);
                }
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
            if (g.internal.enemy.undress === 0)
                chat(0, 227);
            else
                chat(3, 227);
            break;
        case "stripReaction":
            g.internal.enemy.horny += 5;
            if (g.internal.enemy.horny < 50)
                room227.btnclick("reaction");
            else
                room227.btnclick("reset");
            break;
        case "lost":
            chat(4, 227);
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
            var retRoom = g.internal.returnRoomID;
            tEnemy.updatePlayerStats(g.internal.me, g.internal.enemy.money, true);
            g.internal = "win";
            $("#room-inv").show();
            char.room(retRoom);
            break;
        case "service":
            g.internal.enemy.eventType = "win";
            nav.killall();
            var thisEntry = enemyEnd.end(g.internal.enemy);
            g.internal.enemy.eventStep = thisEntry.eventStep;
            g.internal.chat.text = thisEntry.chat;
            g.internal.chat.btn1 = thisEntry.r;
            g.internal.chat.btn2 = null;
            if (thisEntry.type === "c") {
                chat(1, 227);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, 2000);
            };
            break;
        case "enemyEnd":
            if (g.internal.enemy.eventStep === 0) {
                chat(2, 227);
            }
            else {
                var thisEntrye = enemyEnd.end(g.internal.enemy);
                g.internal.enemy.eventStep = thisEntrye.eventStep;
                g.internal.chat.text = thisEntrye.chat;
                g.internal.chat.btn1 = thisEntrye.r;
                g.internal.chat.btn2 = null;
                if (thisEntrye.type === "c") {
                    chat(1, 227);
                }
                else if (thisEntrye.type === "cp") {
                    g.roomTimeout = setTimeout(function () { chat(1, 227); }, 2000);
                };
            }
            break;
        case "strip":
            g.internal.enemy.energy = Math.floor(g.internal.enemy.maxEnergy / 3);
            g.internal.enemy.undress--;
            tEnemy.drawRoom(g.internal.enemy, g.internal.me, 227);
            break;
        case "goodEnd":
            var retRoomx = g.internal.returnRoomID;
            tEnemy.updatePlayerStats(g.internal.me, 0, "win");
            g.internal = "win";
            $("#room-inv").show();
            char.room(retRoomx);
            break;
        case "leaveSewer":
            var retRooml = g.internal.returnRoomID;
            tEnemy.updatePlayerStats(g.internal.me, 0, "loss");
            g.internal = "fightLoser";
            $("#room-inv").show();
            char.room(retRooml);
            break;
        case "runaway":
            var retRoomr = g.internal.returnRoomID;
            tEnemy.updatePlayerStats(g.internal.me, 0, "loss");
            g.internal = "runaway";
            $("#room-inv").show();
            char.room(retRoomr);
            break;
        default:
            break;
    }
};

room227.chat = function (chatID) {
    if (chatID === 0) { //win 
        return {
            chatID: 0,
            speaker: g.internal.enemy.name,
            text: g.internal.enemy.loss,
            button: [
                { chatID: -1, text: "Your Money", callback: "money" },
                { chatID: -1, text: "You", callback: "service" }
            ]
        };
    }
    else if (chatID === 1) {
        return {
            chatID: 0,
            speaker: g.internal.enemy.name,
            text: g.internal.chat.text,
            button: [
                { chatID: -1, text: g.internal.chat.btn1, callback: "enemyEnd" },
            ]
        };
    }
    else if (chatID === 2) {
        return {
            chatID: 0,
            speaker: "me",
            text: "[Continue Journey]",
            button: [
                { chatID: -1, text: "...", callback: "goodEnd" },
            ]
        };
    }
    if (chatID === 3) { //win strip clothing 
        return {
            chatID: 0,
            speaker: g.internal.enemy.name,
            text: "You have bested my this round. You can have either my money or go another round. I'll even stip off some clothing if you want to go another round...",
            button: [
                { chatID: -1, text: "Your Money", callback: "money" },
                { chatID: -1, text: "Stip slut", callback: "strip" }
            ]
        };
    }
    if (chatID === 4) { //win strip clothing 
        return {
            chatID: 0,
            speaker: g.internal.enemy.name,
            text: "You have been defeated! Now leave the Clown Clan's hideout!",
            button: [
                { chatID: -1, text: "[Leave the sewer]", callback: "leaveSewer" },
            ]
        };
    }
    if (chatID === 5) { //win strip clothing 
        return {
            chatID: 0,
            speaker: g.internal.enemy.name,
            text: "Turn tail and run, I prefer watching your butt as you flee",
            button: [
                { chatID: -1, text: "[Run away]", callback: "runaway" },
            ]
        };
    }
    return {
        chatID: 0,
        speaker: "me",
        text: "INVALID CHAT NUMBER: " + chatID,
        button: [
            { chatID: -1, text: "INVALID", callback: "invalid" },
        ]
    };
};