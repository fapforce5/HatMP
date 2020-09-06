﻿//Room name
var room227 = {};
room227.main = function () {
    $("#room-inv").hide();
    char.changeMenu("hide");
    setTimeout(function () { $("#room-inv").hide(); }, 250);
    //g.internal = { enemy: thisEnemy, bg: "sewer", roomID: 227 };
    var enemy, bg, roomID;
    enemy = g.internal.enemy;
    bg = g.internal.bg;
    roomID = g.internal.roomID;

    g.internal = tEnemy.init(enemy, bg, 227, roomID);
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
        case "submitBJ":
        case "submitAss":
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
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, 1500);
            };
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
            var retRoom = g.internal.returnRoomID;
            g.internal = "retx";
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
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, 1500);
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
                    g.roomTimeout = setTimeout(function () { chat(1, 227); }, 1500);
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
            g.internal = "retx";
            char.room(retRoomx);
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
    return {
        chatID: 0,
        speaker: "me",
        text: "INVALID CHAT NUMBER: " + chatID,
        button: [
            { chatID: -1, text: "INVALID", callback: "invalid" },
        ]
    };
};