//Fight Room
var room227 = {};
room227.main = function () {
    g.pass = { enemy0: "futaRed", enemy1: "futaYellow", enemy2: "clownQueen", bg: "sewer", roomID: 0 };
    $("#room-inv").hide();
    char.changeMenu("hide");
    setTimeout(function () { $("#room-inv").hide(); }, 250);

    tEnemy.init(g.pass.enemy0, g.pass.enemy1, g.pass.enemy2, g.pass.bg, g.pass.roomID, 227);
    tEnemy.drawBackground(g.pass.bg);
    tEnemy.drawRoom();
    tEnemy.drawEnemy(["pose", "pose", "pose"]);
    tEnemy.drawButtons("init");
};

room227.btnclick = function (name) {
    var thisChar, i;

    switch (name) {
        case "fight":
        case "cancel":
        case "block":
        case "undress":
        case "submit":
        case "tease":
            if (!g.fight.lock)
                tEnemy.drawButtons(name, 227, g.fight.enemy);
            break;
        case "eaction0":
        case "eaction1":
        case "eaction2":
            if (!g.fight.lock) {
                thisChar = parseInt(name.substring(7));
                tEnemy.drawEnemyActionActive(thisChar);
            }
            break;
        case "e_active":
        case "e_passive":
        case "e_cancel":
        case "e_back":
        case "e_punch":
        case "e_kick":
        case "e_steal":
        case "e_blockkick":
        case "e_blockpunch":
        case "e_endturn":
        case "fuck":
        case "e_flirtass":
        case "e_flirtcock":
        case "e_flirtdance":
        case "e_bottoms":
        case "e_underwear":
        case "e_shirt":
        case "inventory":
        case "e_energy":
        case "e_acia":
        case "e_soda":
        case "e_cumjar":
            if (!g.fight.lock)
                tEnemy.drawEnemyAction(name);
            break;
        case "endturn":
            if (!g.fight.lock)
                tEnemy.drawEnemyAction("e_endturn");
            break;
        case "flee":
            if (!g.fight.lock)
                tEnemy.drawEnemyAction("flee");
            break;
        case "e_flee":
            if (!g.fight.lock) {
                g.fight.lock = true;
               
                chat(5, 227);
            }
            break;
        case "e_earnmoves":
            chat(6, 227);
            break;
        case "e_endturnconfirm":
            g.fight.lock = true;
            tEnemy.drawEnemyAction("clear");
            g.fight.enemyRotation = 0;
            for (i = 0; i < g.fight.e.length; i++)
                g.fight.e[i].nextMove = null;
            room227.btnclick("mymove");
            break;
        case "mymove":
            if (g.fight.me.nextMove === null) {
                room227.btnclick("enemymove");
            }
            else {
                switch (g.fight.me.nextMove) {
                    case "punch":
                    case "kick":
                        room227.btnclick(g.fight.me.nextMove);
                        break;
                    default:
                        console.log("invalidNextmove: " + g.fight.me.nextMove);
                        room227.btnclick("enemymove");
                        break;
                }
            }
            break;
        case "enemymove":
            var thisNextEnemy = null;
            for (i = 0; i < g.fight.e.length; i++) {
                if (g.fight.e[i].nextMove === null) {
                    tEnemy.blindNextMove(i, null);
                }
            }
            for (i = 0; i < g.fight.e.length; i++) {
                thisNextEnemy = i;
                i = 999;
            }
            if (thisNextEnemy !== null) {
                //next enemy move
            }
            else {
                //end fight
            }

            break;
        case "punch":
        case "kick":
            tEnemy.blindNextMove(g.fight.me.nextMoveEnemy, name);
            var nextMove = g.fight.e[g.fight.me.nextMoveEnemy].nextMove;
            tEnemy.drawEnemyActionActive(g.fight.me.nextMoveEnemy);
            if (name === "punch")
                g.fight.me.punchCount++;
            else
                g.fight.me.kickCount++;

            if (nextMove === "blockpunch" || nextMove === "blockpunch")
                g.fight.e[g.fight.me.nextMoveEnemy].myaction = "noop";

            if (nextMove === "blockpunch" && name === "punch" || nextMove === "blockkick" && name === "kick") {
                tEnemy.drawAction("block");
                tEnemy.drawEnemy("block");
                tEnemy.drawMe(name);
                tEnemy.enemyEnergy(-5, null, g.fight.me.nextMoveEnemy);
                g.roomTimeout = setTimeout(function () { room227.btnclick("enemymove"); }, g.fight.fighttimer);
            }
            else {
                    tEnemy.drawAction("pow");
                    tEnemy.drawEnemy("block");
                    tEnemy.drawMe(name);
                    tEnemy.enemyEnergy(name === "punch" ? g.fight.me.pPower : g.fight.me.kPower, null, g.fight.me.nextMoveEnemy);
                    g.roomTimeout = setTimeout(function () { room227.btnclick("enemymove"); }, g.fight.fighttimer);
            }

            break;
        case "blockPunch":
        case "blockKick":
            tEnemy.drawButtons("clear", 227, g.fight.enemy);

            var nextMovex = tEnemy.blindNextMove(g.fight.enemy, g.fight.me);
            
            if (nextMovex === "punch" && name === "blockPunch" || nextMovex === "kick" && name === "blockKick") {
                tEnemy.drawEnemy(g.fight.enemy, nextMovex);
                tEnemy.drawAction("block");
                tEnemy.drawMe(name);
                g.fight.me.energy = tEnemy.myEnergy(g.fight.me, nextMovex === "punch" ? Math.round(g.fight.enemy.pPower * .2) : Math.round(g.fight.enemy.kPower * .2));
                if (g.fight.me.energy < 1) {
                    room227.btnclick("lost");
                }
                else {
                    if (Math.floor(Math.random() * 3) === 0) {
                        g.roomTimeout = setTimeout(function () {
                            tEnemy.drawAction("epow");
                            tEnemy.drawEnemy(g.fight.enemy, "recoil");
                            tEnemy.drawMe("punch");
                            g.fight.enemy.energy = tEnemy.enemyEnergy(g.fight.enemy, g.fight.me.pPower);
                            if (g.fight.enemy.energy < 1)
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
                tEnemy.drawEnemy(g.fight.enemy, nextMovex);
                tEnemy.drawMe("blockmiss");
                g.fight.me.energy = tEnemy.myEnergy(g.fight.me, nextMovex === "punch" ? g.fight.enemy.pPower : g.fight.enemy.kPower);
                if (g.fight.me.energy < 1) {
                    room227.btnclick("lost");
                }
                else {
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 2000);
                }
            }
            else {
                tEnemy.drawEnemy(g.fight.enemy, "block");
                tEnemy.myEnergy(g.fight.me, 0);
                tEnemy.enemyEnergy(g.fight.enemy, 0);
                tEnemy.drawMe("blockmiss");
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset") }, 2000);
            }
            g.fight.me.prev2 = g.fight.me.prev1;
            g.fight.me.prev1 = name[0];
            break;
        //case "inventory":
        //    tEnemy.drawButtons("inventoryKill", 227, g.fight.enemy);
        //    tEnemy.makeInventory(227);
        //    break;
        case "inventoryKill":
            inv.close();
            tEnemy.drawButtons("init", 227, g.fight.enemy);
            break;
        case "pantiesRemove":
        case "shirtRemove":
        case "skirtRemove":
        case "teaseDance":
        case "teaseAss":
        case "teaseCock":
            g.fight.me.energy = tEnemy.myEnergy(g.fight.me, 5);

            tEnemy.drawButtons("clear", 227, g.fight.enemy);
            var counterAction = tEnemy.sexyNextMove(g.fight.enemy, g.fight.me);
            var hornyAdd;
            if (name === "pantiesRemove") {
                hornyAdd = g.fight.enemy.arousalGrowth;
                cl.c.panties = null;
                cl.c.bra = null;
                cl.display();
            }
            else if (name === "shirtRemove") {
                hornyAdd = g.fight.enemy.arousalGrowth;
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.c.pj = null;
                cl.c.shirt = null;
                cl.display();
            }
            else if (name === "skirtRemove") {
                hornyAdd = g.fight.enemy.arousalGrowth;
                cl.c.dress = null;
                cl.c.swimsuit = null;
                cl.c.pj = null;
                cl.c.pants = null;
                cl.display();
            }
            else {
                hornyAdd = g.fight.enemy.arousalGrowth * 2;
            }

            if (g.fight.me.energy < 1) {
                room227.btnclick("lost");
            }
            else {
                g.fight.enemy.horny = tEnemy.enemyHorny(g.fight.enemy, hornyAdd);

                if (counterAction === "punch" || counterAction === "kick" || counterAction === "punch")
                    tEnemy.drawEnemy(g.fight.enemy, "pose");
                else if (counterAction === "blockPunch" || counterAction === "blockKick")
                    tEnemy.drawEnemy(g.fight.enemy, counterAction);
                tEnemy.chibi(name);
                if (counterAction === "punch")
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reactionPunch"); }, 2000);
                else if (counterAction === "kick")
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reactionKick"); }, 2000);
                else
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 2000);

                g.fight.me.prev2 = g.fight.me.prev1;
                g.fight.me.prev1 = name;
            }
            break;
        case "submitBJ":
        case "submitAss":
            g.fight.me.energy = tEnemy.myEnergy(g.fight.me, 20);
            g.fight.enemy.eventType = name;
            nav.killall();
            var thisEntry = enemyEnd.end(g.fight.enemy);
            g.fight.enemy.eventStep = thisEntry.eventStep;
            g.fight.chat.text = thisEntry.chat;
            g.fight.chat.btn1 = thisEntry.r;
            g.fight.chat.btn2 = null;
            if (thisEntry.type === "c") {
                chat(1, 227);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, 2000);
            };
            break;
        case "energyUsed15":
        case "energyUsed50":
            tEnemy.drawButtons("clear", 227, g.fight.enemy);
            inv.close();
            g.fight.me.energy = tEnemy.myEnergy(g.fight.me, name === "energyUsed15" ? -15 : -50);
            var nextMovee = tEnemy.blindNextMove(g.fight.enemy, g.fight.me);
            if (nextMovee === "punch")
                g.roomTimeout = setTimeout(function () { room227.btnclick("reactionPunch"); }, 2000);
            else if (nextMovee === "kick")
                g.roomTimeout = setTimeout(function () { room227.btnclick("reactionKick"); }, 2000);
            else
                g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 2000);

            g.fight.me.prev2 = g.fight.me.prev1;
            g.fight.me.prev1 = "i";
            break;
        case "reactionPunch":
        case "reactionKick":
            if (g.fight.enemy.energy < 1) {
                g.roomTimeout = setTimeout(function () { roomf227.btnclick("enemyLose"); }, 2000);
            }
            else {
                tEnemy.drawAction("epow");
                tEnemy.drawEnemy(g.fight.enemy, name === "reactionPunch" ? "punch" : "kick");
                tEnemy.drawMe("clear");
                g.fight.me.energy = tEnemy.myEnergy(g.fight.me, name === "reactionPunch" ? g.fight.enemy.pPower : g.fight.enemy.kPower);
                if (g.fight.me.energy < 1) {
                    room227.btnclick("lost");
                }
                else {
                    g.roomTimeout = setTimeout(function () { room227.btnclick("reset"); }, 2000);
                }
            }
            break;
        case "enemyLose":
            tEnemy.drawEnemy(g.fight.enemy, "defeat");
            tEnemy.drawMe("clear");

            if (g.fight.me.punchCount > g.fight.me.kickCount)
                g.mod("body", 10);
            else if (g.fight.me.punchCount < g.fight.me.kickCount)
                g.mod("leg", 10);
            else
                g.mod("fitness", 10);
            if (g.fight.enemy.undress === 0)
                chat(0, 227);
            else
                chat(3, 227);
            break;
        case "stripReaction":
            g.fight.enemy.horny += 5;
            if (g.fight.enemy.horny < 50)
                room227.btnclick("reaction");
            else
                room227.btnclick("reset");
            break;
        case "lost":
            chat(4, 227);
            break;
        case "reset":
            tEnemy.drawButtons("init", 227, g.fight.enemy);
            tEnemy.drawAction("clear");
            tEnemy.drawEnemy(g.fight.enemy, "pose");
            tEnemy.drawMe("clear");
            break;
    };
};

room227.chatcatch = function (callback) {
    switch (callback) {
        case "money":
            var retRoom = g.fight.returnRoomID;
            tEnemy.updatePlayerStats(g.fight.me, g.fight.enemy.money, true);
            g.fight = "win";
            $("#room-inv").show();
            char.room(retRoom);
            break;
        case "service":
            g.fight.enemy.eventType = "win";
            nav.killall();
            var thisEntry = enemyEnd.end(g.fight.enemy);
            g.fight.enemy.eventStep = thisEntry.eventStep;
            g.fight.chat.text = thisEntry.chat;
            g.fight.chat.btn1 = thisEntry.r;
            g.fight.chat.btn2 = null;
            if (thisEntry.type === "c") {
                chat(1, 227);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, 2000);
            };
            break;
        case "enemyEnd":
            if (g.fight.enemy.eventStep === 0) {
                chat(2, 227);
            }
            else {
                var thisEntrye = enemyEnd.end(g.fight.enemy);
                g.fight.enemy.eventStep = thisEntrye.eventStep;
                g.fight.chat.text = thisEntrye.chat;
                g.fight.chat.btn1 = thisEntrye.r;
                g.fight.chat.btn2 = null;
                if (thisEntrye.type === "c") {
                    chat(1, 227);
                }
                else if (thisEntrye.type === "cp") {
                    g.roomTimeout = setTimeout(function () { chat(1, 227); }, 2000);
                };
            }
            break;
        case "strip":
            g.fight.enemy.energy = Math.floor(g.fight.enemy.maxEnergy / 3);
            g.fight.enemy.undress--;
            tEnemy.drawRoom(g.fight.enemy, g.fight.me, 227);
            break;
        case "goodEnd":
            var retRoomx = g.fight.returnRoomID;
            tEnemy.updatePlayerStats(g.fight.me, 0, "win");
            g.fight = "win";
            $("#room-inv").show();
            char.room(retRoomx);
            break;
        case "leaveSewer":
            var retRooml = g.fight.returnRoomID;
            tEnemy.updatePlayerStats(g.fight.me, 0, "loss");
            g.pass = "fightLoser";
            $("#room-inv").show();
            char.room(retRooml);
            break;
        case "runaway":
            tEnemy.updatePlayerStats(g.fight.me, 0, "loss");
            g.pass = "runaway";
            $("#room-inv").show();
            tEnemy.myEnergy(-15, null);
            tEnemy.updatePlayerStats(false);
            g.popUpNotice("You lost 15 energy");
            char.room(g.fight.returnRoomID);
            break;
        default:
            break;
    }
};

room227.chat = function (chatID) {
    if (chatID === 0) { //win 
        return {
            chatID: 0,
            speaker: g.fight.enemy.name,
            text: g.fight.enemy.loss,
            button: [
                { chatID: -1, text: "Your Money", callback: "money" },
                { chatID: -1, text: "You", callback: "service" }
            ]
        };
    }
    else if (chatID === 1) {
        return {
            chatID: 0,
            speaker: g.fight.enemy.name,
            text: g.fight.chat.text,
            button: [
                { chatID: -1, text: g.fight.chat.btn1, callback: "enemyEnd" },
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
            speaker: g.fight.enemy.name,
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
            speaker: g.fight.enemy.name,
            text: "You have been defeated! Now leave the Clown Clan's hideout!",
            button: [
                { chatID: -1, text: "[Leave the sewer]", callback: "leaveSewer" },
            ]
        };
    }
    if (chatID === 5) { //win strip clothing 
        return {
            chatID: 0,
            speaker: g.fight.e[0].name,
            text: "Turn tail and run, I prefer watching your butt as you flee",
            button: [
                { chatID: -1, text: "[Run away]", callback: "runaway" },
            ]
        };
    }
    if (chatID === 6) { //win strip clothing 
        return {
            chatID: 0,
            speaker: "me",
            text: "I'm too embarrased to do that in public!! I need to work on my sissy brain and get some more moves when I sleep.",
            button: [
                { chatID: -1, text: "[Get more moves at night]", callback: "" },
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