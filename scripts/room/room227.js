//Fight Room
var room227 = {};
room227.main = function () {
    //g.pass = { enemy0: "futaRed", enemy1: "futaYellow", enemy2: null, bg: "sewer", roomID: 0 };
    $("#room-inv").hide();
    char.changeMenu("hide");
    setTimeout(function () { $("#room-inv").hide(); }, 250);

    tEnemy.init(g.pass.enemy0, g.pass.enemy1, g.pass.enemy2, g.pass.bg, g.pass.roomID, 227);
    tEnemy.drawBackground(g.pass.bg);
    tEnemy.drawRoom();
    tEnemy.drawEnemy(["pose", "pose", "pose"]);
    tEnemy.drawButtons("init");

    g.roomTimeout = setTimeout(function () { tEnemy.drawEnemyAction("init"); }, 1000);
    
};

room227.btnclick = function (name) {
    var i, xi, mymove, enemymove;

    switch (name) {
        case "e_begin":
        case "e_inventory":
        case "e_flee":
        case "e_startover":
        case "e_energy":
        case "e_dominate":
        case "e_sub":
        case "e_back":
            tEnemy.drawEnemyAction(name);
            break;
        case "e_punch": 
        case "e_kick": 
        case "e_blockpunch": 
        case "e_blockkick": 
        case "e_steal":
        case "e_flirtass":
        case "e_flirtcock":
        case "e_flirtdance":
        case "e_bottoms":
        case "e_panties":
        case "e_shirt":
        case "e_noop":
            tEnemy.setEnemyAction(name);
            g.fight.enemyRotation++;
            if (g.fight.enemyRotation >= g.fight.e.length) {
                g.fight.enemyRotation = 0;
                tEnemy.drawEnemyAction("e_endturn");
            }
            else {
                tEnemy.drawEnemyAction("e_back");
            }
            break;
        case "e_endturnconfirm":
        case "e_quickstart":
            g.fight.enemyRotation = 0;
            tEnemy.drawEnemyAction("clear");
            for (i = 0; i < g.fight.e.length; i++)
                g.fight.e[i].nextMove = null;
            room227.btnclick("mymove");
            break;
        case "e_fleeconfirm":
            chat(5, 227);
            break;
        case "checkwin":
            tEnemy.drawAction("clear");
            tEnemy.drawMe("clear");
            var hornyCounter, zeroEnergyCounter, totalEnemy;
            hornyCounter = zeroEnergyCounter = 0;
            totalEnemy = g.fight.e.length;
            xi = g.fight.enemyRotation;

            for (i = 0; i < totalEnemy; i++) {
                if (g.fight.e[i].energy < 1)
                    zeroEnergyCounter++;
                if (g.fight.e[i].horny > 99)
                    hornyCounter++;
            }

            if ($('#room_chatOverlay').is(":visible")) {
                $('.room-chatBtnClick').click();
            }

            if (g.fight.me.energy < 1) {
                chat(4, 227);
            }
            else if (g.fight.me.horny > 99) {
                g.fight.enemyRotation = 0;
                tEnemy.drawSingleEnemy(0, "pose");
                chat(9, 227);
            }
            else if (totalEnemy === zeroEnergyCounter) {
                tEnemy.drawSingleEnemy(null, "defeat");
                chat(0, 227);
            }
            else if (totalEnemy === hornyCounter) {
                g.fight.enemyRotation = 0;
                tEnemy.drawSingleEnemy(0, "pose");
                chat(10, 227);
            }
            else {
                if (g.fight.e[xi].nextMove !== null)
                    room227.btnclick("enemymove");
                else {
                    g.fight.enemyRotation++;
                    if (g.fight.enemyRotation >= g.fight.e.length) {
                        g.fight.enemyRotation = 0;
                        tEnemy.drawEnemyAction("e_startover");
                    }
                    else
                        room227.btnclick("mymove");
                }
            }
            break;
        case "mymove":
            switch (g.fight.e[g.fight.enemyRotation].myaction) {
                case "punch":
                case "kick":
                    tEnemy.blindNextMove(true);
                    room227.btnclick(g.fight.e[g.fight.enemyRotation].myaction);
                    break
                case "blockpunch":
                case "blockkick":
                    tEnemy.blindNextMove(false);
                    room227.btnclick("enemymove");
                    break;
                case "teaseass":
                case "teasecock":
                case "teasedance":
                case "stripskirt":
                case "strippanties":
                case "stripshirt":
                    tEnemy.blindNextMove(false);
                    room227.btnclick(g.fight.e[g.fight.enemyRotation].myaction);
                    break;
                case "noop":
                    tEnemy.blindNextMove(false);
                    room227.btnclick("checkwin");
                    break;
                case "steal":
                    tEnemy.blindNextMove(false);
                    room227.btnclick("steal");
                    break;
                default:
                    room227.btnclick("enemymove");
                    break;
            }
            break;
        
        case "enemymove":
            xi = g.fight.enemyRotation;
            if (g.fight.e[xi].energy < 1) {
                tEnemy.drawSingleEnemy(xi, "defeat");
                g.fight.e[xi].nextMove = null;
                g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer / 2);
            }
            else {
                switch (g.fight.e[xi].nextMove) {
                    case "punch":
                    case "kick":
                        var tempPower = -1 * (g.fight.e[xi].nextMove === "punch" ? g.fight.e[xi].pPower : g.fight.e[xi].kPower);
                        if ((g.fight.e[xi].myaction === "blockpunch" && g.fight.e[xi].nextMove === "punch") || (g.fight.e[xi].myaction === "blockkick" && g.fight.e[xi].nextMove === "kick")) {
                            tEnemy.drawAction("block");
                            tEnemy.drawSingleEnemy(xi, g.fight.e[xi].nextMove);
                            tEnemy.drawMe("blockPunch");
                            tEnemy.myEnergy(Math.floor(tempPower * .2), null);
                            if (Math.floor(Math.random() * 3 > 0)) {
                                g.roomTimeout = setTimeout(function () {
                                    var recactRando = Math.floor(Math.random() * 2) === 0 ? "punch" : "kick";
                                    tEnemy.drawAction("counter");
                                    tEnemy.drawSingleEnemy(xi, "recoil");
                                    tEnemy.drawMe(recactRando);
                                    tEnemy.enemyEnergy(-1 * (recactRando === "punch" ? g.fight.me.pPower : g.fight.me.kPower), null, xi);
                                    g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
                                }, g.fight.fighttimer);
                            }
                        }
                        else if (g.fight.e[xi].myaction === "blockpunch" || g.fight.e[xi].myaction === "blockkick") {
                            tEnemy.drawAction("epow");
                            tEnemy.drawSingleEnemy(xi, g.fight.e[xi].nextMove);
                            tEnemy.drawMe("blockmiss");
                            tEnemy.myEnergy(tempPower, null);
                            g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
                        }
                        else {
                            tEnemy.drawAction("epow");
                            tEnemy.drawSingleEnemy(xi, g.fight.e[xi].nextMove);
                            tEnemy.drawMe("clear");
                            tEnemy.myEnergy(tempPower, null);
                            g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
                        }
                        break;
                    case "blockpunch":
                    case "blockkick":
                        tEnemy.drawAction("clear");
                        tEnemy.drawSingleEnemy(xi, "block");
                        tEnemy.drawMe("clear");
                        g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
                        break;
                    case "sexy":
                        var thisClothing = cl.wearing();
                        if (thisClothing.top || thisClothing.bottom) {
                            tEnemy.drawSingleEnemy(xi, "pose");
                            cl.c.shirt = cl.c.pants = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
                            if (thisClothing.underwear)
                                tEnemy.chibi("strip1");
                            else
                                tEnemy.chibi("strip0");
                            tEnemy.clothingDisplay();
                            tEnemy.enemyEnergyAll(null, 10, xi);
                            tEnemy.enemyEnergy(null, 20, xi);
                            tEnemy.myEnergy(0, 10);
                        }
                        else if (thisClothing.underwear) {
                            cl.c.panties = cl.c.bra = null;
                            tEnemy.drawSingleEnemy(xi, "pose");
                            tEnemy.chibi("strip0");
                            tEnemy.clothingDisplay();
                            tEnemy.enemyEnergyAll(null, 15, xi);
                            tEnemy.enemyEnergy(null, 30, xi);
                            tEnemy.myEnergy(0, 15);
                        }
                        else {
                            tEnemy.drawSingleEnemy(xi, "pose");
                            tEnemy.chibi("hum");
                            tEnemy.enemyEnergyAll(null, 20, xi);
                            tEnemy.enemyEnergy(null, 40, xi);
                            tEnemy.myEnergy(0, 20);
                        }

                        g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
                        break;
                    case "defeat":
                        tEnemy.drawSingleEnemy(xi, "defeat");
                        g.fight.e[xi].nextMove = null;
                        g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer / 2);
                        break;
                    default:
                        console.log("invalid 'checkwin' enemyMove i:" + i);
                        break;
                }
                g.fight.e[xi].nextMove = null;
            }

            break;
        case "punch":
        case "kick":
            xi = g.fight.enemyRotation;
            mymove = g.fight.e[xi].myaction;
            enemymove = g.fight.e[xi].nextMove;

            if (mymove === "punch")
                g.fight.me.punchCount++;
            else
                g.fight.me.kickCount++;
            if (enemymove === "blockpunch" || enemymove === "blockkick")
                g.fight.e[xi].nextMove = null;

            if (enemymove === "blockpunch" && mymove === "punch" || enemymove === "blockkick" && mymove === "kick") {
                tEnemy.drawAction("block");
                tEnemy.drawSingleEnemy(g.fight.me.nextMoveEnemy, "block");
                tEnemy.drawMe(name);
                tEnemy.enemyEnergy(-5, null, xi);
                g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
            }
            else {
                tEnemy.drawAction("pow");
                tEnemy.drawSingleEnemy(xi, "recoil");
                tEnemy.drawMe(name);
                tEnemy.enemyEnergy(-1 * (name === "punch" ? g.fight.me.pPower : g.fight.me.kPower), null, xi);
                g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
            }

            break;
        case "steal":
            xi = g.fight.enemyRotation;
            tEnemy.drawAction("nick");
            tEnemy.drawSingleEnemy(xi, "steal");
            tEnemy.drawMe("clear");
            tEnemy.myEnergy(null, 5);
            tEnemy.enemyEnergy(0, 15, xi);
            g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
            break;
        case "teaseass":
        case "teasecock":
        case "teasedance":
        case "stripskirt":
        case "strippanties":
        case "stripshirt":
        case "noop":
            xi = g.fight.enemyRotation;
            var tc = cl.wearing();
            if (name === "stripshirt") {
                if (!tc.top) {
                    name = "stripskirt";
                }
                else {
                    cl.c.shirt = cl.c.dress = cl.c.swimsuit = cl.c.pj = null;
                    tEnemy.drawButtons();
                    tEnemy.enemyEnergyAll(null, 10, xi);
                    tEnemy.enemyEnergy(null, 20, xi);
                    tEnemy.myEnergy(0, 10);
                }
            }
            if (name === "stripskirt") {
                if (!tc.bottom) {
                    if (tc.top) {
                        cl.c.shirt = cl.c.dress = cl.c.swimsuit = cl.c.pj = null;
                        tEnemy.drawButtons();
                        tEnemy.enemyEnergyAll(null, 10, xi);
                        tEnemy.enemyEnergy(null, 20, xi);
                        tEnemy.myEnergy(0, 10);
                    }
                    else
                        name = "strippanties";
                }
                else {
                    cl.c.pants = cl.c.dress = cl.c.swimsuit = cl.c.pj = null;
                    tEnemy.drawButtons();
                    tEnemy.enemyEnergyAll(null, 10, xi);
                    tEnemy.enemyEnergy(null, 20, xi);
                    tEnemy.myEnergy(0, 10);
                }
            }
           
            if (name === "strippanties") {
                if (!tc.underwear) {
                    name = "noop";
                }
                else {
                    cl.c.panties = cl.c.bra = null;
                    tEnemy.drawButtons();
                    tEnemy.enemyEnergyAll(null, 15, xi);
                    tEnemy.enemyEnergy(null, 30, xi);
                    tEnemy.myEnergy(0, 15);
                }
            }
            else if(name !== "noop"){
                tEnemy.enemyEnergyAll(null, 20, xi);
                tEnemy.enemyEnergy(null, 40, xi);
                tEnemy.myEnergy(0, 20);
            }
            if (name !== "noop") {
                tEnemy.drawSingleEnemy(xi, "pose");
                tEnemy.chibi(name);
            }
            g.roomTimeout = setTimeout(function () { room227.btnclick("checkwin"); }, g.fight.fighttimer);
            break;
        
        case "e_acia":
        case "e_soda":
        case "e_cumjar":
            switch (name) {
                case "e_acia":
                    tEnemy.myEnergy(15, null);
                    g.internal = "Gained 15 energy";
                    chat(8, 227);
                    break;
                case "e_soda":
                    tEnemy.myEnergy(50, null);
                    g.internal = "Gained 50 energy";
                    chat(8, 227);
                    break;
                case "e_cumjar":
                    tEnemy.myEnergy(100, null);
                    g.internal = "Gained 100 energy";
                    chat(8, 227);
                    break;
            }
            tEnemy.drawEnemyAction("e_startover");
            break;

        case "e_submitbj":
        case "e_submitass":
            tEnemy.drawEnemyAction("clear");
            //g.fight.me.energy = tEnemy.myEnergy(g.fight.me, 20);
            g.fight.e[0].eventType = (name === "e_submitbj" ? "submitBJ" : "submitAss");

            nav.killall();
            var thisEntry = enemyEnd.end(g.fight.e[0]);
            g.fight.e[0].eventStep = thisEntry.eventStep;
            g.fight.chat.text = thisEntry.chat;
            g.fight.chat.btn1 = thisEntry.r;
            g.fight.chat.btn2 = null;
            if (thisEntry.type === "c") {
                chat(1, 227);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, g.fight.fighttimer);
            };
            break;
        //case "enemyLose":
        //    tEnemy.drawEnemy(g.fight.enemy, "defeat");
        //    tEnemy.drawMe("clear");

        //    if (g.fight.me.punchCount > g.fight.me.kickCount)
        //        g.mod("body", 10);
        //    else if (g.fight.me.punchCount < g.fight.me.kickCount)
        //        g.mod("leg", 10);
        //    else
        //        g.mod("fitness", 10);
        //    if (g.fight.enemy.undress === 0)
        //        chat(0, 227);
        //    else
        //        chat(3, 227);
        //    break;
        //case "stripReaction":
        //    g.fight.enemy.horny += 5;
        //    if (g.fight.enemy.horny < 50)
        //        room227.btnclick("reaction");
        //    else
        //        room227.btnclick("reset");
        //    break;
        case "lost":
            chat(4, 227);
            break;
        //case "reset":
        //    tEnemy.drawButtons("init", 227, g.fight.enemy);
        //    tEnemy.drawAction("clear");
        //    tEnemy.drawEnemy(g.fight.enemy, "pose");
        //    tEnemy.drawMe("clear");
        //    break;
    };
};

room227.chatcatch = function (callback) {
    var i;
    
    switch (callback) {
        case "money":
            var thisMoney = 0;
            for (i = 0; i < g.fight.e.length; i++)
                thisMoney += g.fight.e[i].money;
            g.internal = thisMoney;
            room227.chatcatch("returnRoom");
            break;
        case "service":
            g.fight.e[0].eventType = "win";
            nav.killall();
            var thisEntry = enemyEnd.end(g.fight.e[0]);
            g.fight.e[0].eventStep = thisEntry.eventStep;
            g.fight.chat.text = thisEntry.chat;
            g.fight.chat.btn1 = thisEntry.r;
            g.fight.chat.btn2 = null;
            if (thisEntry.type === "c") {
                chat(1, 227);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 227); }, g.fight.fighttimer);
            };
            break;
        case "enemyEnd":
            if (g.fight.e[0].eventStep === 0) {
                chat(2, 227);
            }
            else {
                var thisEntrye = enemyEnd.end(g.fight.e[0]);
                g.fight.e[0].eventStep = thisEntrye.eventStep;
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
        case "showSubmit":
            tEnemy.drawEnemyAction("e_submit");
            break;
        //case "strip":
        //    g.fight.enemy.energy = Math.floor(g.fight.enemy.maxEnergy / 3);
        //    g.fight.enemy.undress--;
        //    tEnemy.drawRoom(g.fight.enemy, g.fight.me, 227);
        //    break;
        case "goodEnd":
            g.internal = 0;
            room227.chatcatch("returnRoom");
            break;
        case "leaveSewer":
            g.internal = 0;
            room227.chatcatch("returnRoom");
            break;
        case "runaway":
            g.internal = -999;
            room227.chatcatch("returnRoom");
            break;
        case "returnRoom":
            var returnRoom = g.fight.returnRoomID;
            var money = g.internal;
            if (money === -999) {
                tEnemy.updatePlayerStats(0);
                tEnemy.myEnergy(-15, null);
                g.popUpNotice("You lost 15 energy");
                g.pass = "runaway";
            }
            else {
                tEnemy.updatePlayerStats(money);
                g.pass = "win";
            }
            $("#room-inv").show();
            g.internal = 0;
            g.fight = null;
            char.room(returnRoom);
            break;
        default:
            break;
    }
};

room227.chat = function (chatID) {
    if (chatID === 0) { //win
        return {
            chatID: 0,
            speaker: g.fight.e[0].name,
            text: g.fight.e[0].loss,
            button: [
                { chatID: -1, text: "Your Money", callback: "money" },
                { chatID: -1, text: "You", callback: "service" }
            ]
        };
    }
    else if (chatID === 1) {
        return {
            chatID: 0,
            speaker: g.fight.e[0].name,
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
    else if (chatID === 3) { //me horny
        return {
            chatID: 0,
            speaker: g.fight.enemy.name,
            text: "I'm so horny I can't help it! My stupid sissy brain just needs to to be fucked! Please fuck me!",
            button: [
                { chatID: -1, text: "[Give into your lust]", callback: "showSubmit" }
            ]
        };
    }
    else if (chatID === 4) { //Me energy low
        return {
            chatID: 0,
            speaker: g.fight.e[0].name,
            text: g.fight.e[0].win,
            button: [
                { chatID: -1, text: "[You've lost the fight. You're energy is too low]", callback: "leaveSewer" },
            ]
        };
    }
    else if (chatID === 5) { //me flee
        return {
            chatID: 0,
            speaker: g.fight.e[0].name,
            text: "Turn tail and run, I prefer watching your butt as you flee.",
            button: [
                { chatID: -1, text: "[Run away]", callback: "runaway" },
            ]
        };
    }
    else if (chatID === 6) { //thme horny
        return {
            chatID: 0,
            speaker: "me",
            text: "I'm too embarrassed to do that in public!! I need to work on my sissy brain and get some more moves when I sleep.",
            button: [
                { chatID: -1, text: "[Get more moves at night]", callback: "" },
            ]
        };
    }
    else if (chatID === 7) { //win strip clothing 
        return {
            chatID: 0,
            speaker: g.fight.e[g.fight.enemyRotation].name,
            text: g.internal,
            button: [
                { chatID: -1, text: "[Close]", callback: "" },
            ]
        };
    }
    else if (chatID === 8) { //win strip clothing 
        return {
            chatID: 0,
            speaker: "me",
            text: g.internal,
            button: [
                { chatID: -1, text: "[Close]", callback: "" },
            ]
        };
    }
    else if (chatID === 9 || chatID === 10) { //win strip clothing 
        if (chatID === 9)
            return {
                chatID: 0,
                speaker: "me",
                text: "I'm so horny I can't help it! My stupid sissy brain just needs to to be fucked! Please fuck me!",
                button: [
                    { chatID: -1, text: "[Give into your lust]", callback: "showSubmit" }
                ]
            };
        else
            return {
                chatID: 0,
                speaker: g.fight.e[0].name,
                text: g.fight.e[0].submit,
                button: [
                    { chatID: -1, text: "[Submit to their lust]", callback: "showSubmit" }
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
