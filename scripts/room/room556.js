//Fight Room
var room556 = {};
room556.main = function () {
    g.pass = { enemy0: "g", enemy1: null, enemy2: null, bg: "gym", roomID: 551 };
    $("#room-inv").hide();
    char.changeMenu("hide", false);
    setTimeout(function () { $("#room-inv").hide(); }, 250);

    tEnemy.init(g.pass.enemy0, g.pass.enemy1, g.pass.enemy2, g.pass.bg, g.pass.roomID, 556);
    tEnemy.drawBackground(g.pass.bg);
    tEnemy.drawRoom();
    tEnemy.drawEnemy(["pose", "pose", "pose"]);
    tEnemy.drawButtons("init");

    //g.roomTimeout = setTimeout(function () { tEnemy.drawEnemyAction("init"); }, 1000);
    chat(500, 556);
};

room556.btnclick = function (name) {
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
            if (g.internal === 0 || g.internal === 1) {
                if (name === "e_begin" || name === "e_dominate")
                    tEnemy.drawEnemyAction(name);
                else
                    chat(550, 556);
            }
            
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
            if ((g.internal === 0 && name === "e_punch") || (g.internal === 1 && name === "e_blockpunch")) {
                tEnemy.setEnemyAction(name);
                g.fight.enemyRotation++;
                if (g.fight.enemyRotation >= g.fight.e.length) {
                    g.fight.enemyRotation = 0;
                    tEnemy.drawEnemyAction("e_endturn");
                }
                else {
                    tEnemy.drawEnemyAction("e_back");
                }
            }
            else
                chat(550, 556);

            break;
        case "e_endturnconfirm":
        case "e_quickstart":
            if (name === "e_endturnconfirm") {
                g.fight.enemyRotation = 0;
                tEnemy.drawEnemyAction("clear");
                for (i = 0; i < g.fight.e.length; i++)
                    g.fight.e[i].nextMove = null;
                room556.btnclick("mymove");
            }
            else
                chat(550, 556);
            break;
        case "e_fleeconfirm":
            chat(5, 556);
            break;
        case "checkwin":
            if (g.internal === 0) {
                tEnemy.drawSingleEnemy(0, "pose");
                tEnemy.drawEnemyAction("init");
                tEnemy.drawMe("clear");
                chat(520, 556);
                g.internal = 1;
            }
            else {
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
                    chat(4, 556);
                }
                else if (g.fight.me.horny > 99) {
                    g.fight.enemyRotation = 0;
                    tEnemy.drawSingleEnemy(0, "pose");
                    chat(9, 556);
                }
                else if (totalEnemy === zeroEnergyCounter) {
                    tEnemy.drawSingleEnemy(null, "defeat");
                    chat(0, 556);
                }
                else if (totalEnemy === hornyCounter) {
                    g.fight.enemyRotation = 0;
                    tEnemy.drawSingleEnemy(0, "pose");
                    chat(10, 556);
                }
                else {
                    if (g.fight.e[xi].nextMove !== null)
                        room556.btnclick("enemymove");
                    else {
                        g.fight.enemyRotation++;
                        if (g.fight.enemyRotation >= g.fight.e.length) {
                            g.fight.enemyRotation = 0;
                            tEnemy.drawEnemyAction("e_startover");
                        }
                        else
                            room556.btnclick("mymove");
                    }
                }
            }
            break;
        case "mymove":
            switch (g.fight.e[g.fight.enemyRotation].myaction) {
                case "punch":
                case "kick":
                    tEnemy.blindNextMove(true);
                    room556.btnclick(g.fight.e[g.fight.enemyRotation].myaction);
                    break
                case "blockpunch":
                case "blockkick":
                    tEnemy.blindNextMove(false);
                    room556.btnclick("enemymove");
                    break;
                case "teaseass":
                case "teasecock":
                case "teasedance":
                case "stripskirt":
                case "strippanties":
                case "stripshirt":
                    tEnemy.blindNextMove(false);
                    room556.btnclick(g.fight.e[g.fight.enemyRotation].myaction);
                    break;
                case "noop":
                    tEnemy.blindNextMove(false);
                    room556.btnclick("checkwin");
                    break;
                case "steal":
                    tEnemy.blindNextMove(false);
                    room556.btnclick("steal");
                    break;
                default:
                    room556.btnclick("enemymove");
                    break;
            }
            break;

        case "enemymove":
            if (g.internal === 1) {
                xi = g.fight.enemyRotation;
                g.fight.e[xi].nextMove = "punch";

                tEnemy.drawAction("block");
                tEnemy.drawSingleEnemy(0, "punch");
                tEnemy.drawMe("blockPunch");
                tEnemy.myEnergy(-5, null);
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawAction("pow");
                    tEnemy.drawSingleEnemy(0, "recoil");
                    tEnemy.drawMe("punch");
                    tEnemy.enemyEnergy(-1 * g.fight.me.pPower, null, 0);
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawAction("clear");
                        tEnemy.drawSingleEnemy(0, "pose");
                        tEnemy.drawMe("clear");
                        chat(530, 556);
                    }, g.fight.fighttimer);
                }, g.fight.fighttimer);
            }
            //if (2 === 3) {
            //    xi = g.fight.enemyRotation;
            //    if (g.fight.e[xi].energy < 1) {
            //        tEnemy.drawSingleEnemy(xi, "defeat");
            //        g.fight.e[xi].nextMove = null;
            //        g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer / 2);
            //    }
            //    else {
            //        switch (g.fight.e[xi].nextMove) {
            //            case "punch":
            //            case "kick":
            //                var tempPower = -1 * (g.fight.e[xi].nextMove === "punch" ? g.fight.e[xi].pPower : g.fight.e[xi].kPower);
            //                if ((g.fight.e[xi].myaction === "blockpunch" && g.fight.e[xi].nextMove === "punch") || (g.fight.e[xi].myaction === "blockkick" && g.fight.e[xi].nextMove === "kick")) {
            //                    tEnemy.drawAction("punch");
            //                    tEnemy.drawSingleEnemy(xi, g.fight.e[xi].nextMove);
            //                    tEnemy.drawMe("blockPunch");
            //                    tEnemy.myEnergy(Math.floor(tempPower * .2), null);
            //                    if (Math.floor(Math.random() * 3 > 0)) {
            //                        g.roomTimeout = setTimeout(function () {
            //                            var recactRando = Math.floor(Math.random() * 2) === 0 ? "punch" : "kick";
            //                            tEnemy.drawAction("counter");
            //                            tEnemy.drawSingleEnemy(xi, "recoil");
            //                            tEnemy.drawMe(recactRando);
            //                            tEnemy.enemyEnergy(-1 * (recactRando === "punch" ? g.fight.me.pPower : g.fight.me.kPower), null, xi);
            //                            g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            //                        }, g.fight.fighttimer);
            //                    }
            //                }
            //                else if (g.fight.e[xi].myaction === "blockpunch" || g.fight.e[xi].myaction === "blockkick") {
            //                    tEnemy.drawAction("epow");
            //                    tEnemy.drawSingleEnemy(xi, g.fight.e[xi].nextMove);
            //                    tEnemy.drawMe("blockmiss");
            //                    tEnemy.myEnergy(tempPower, null);
            //                    g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            //                }
            //                else {
            //                    tEnemy.drawAction("epow");
            //                    tEnemy.drawSingleEnemy(xi, g.fight.e[xi].nextMove);
            //                    tEnemy.drawMe("clear");
            //                    tEnemy.myEnergy(tempPower, null);
            //                    g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            //                }
            //                break;
            //            case "blockpunch":
            //            case "blockkick":
            //                tEnemy.drawAction("clear");
            //                tEnemy.drawSingleEnemy(xi, "block");
            //                tEnemy.drawMe("clear");
            //                g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            //                break;
            //            case "sexy":
            //                var thisClothing = cl.wearing();
            //                if (thisClothing.top || thisClothing.bottom) {
            //                    tEnemy.drawSingleEnemy(xi, "pose");
            //                    cl.c.shirt = cl.c.pants = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
            //                    if (thisClothing.underwear)
            //                        tEnemy.chibi("strip1");
            //                    else
            //                        tEnemy.chibi("strip0");
            //                    tEnemy.clothingDisplay();
            //                    tEnemy.enemyEnergyAll(null, 10, xi);
            //                    tEnemy.enemyEnergy(null, 20, xi);
            //                    tEnemy.myEnergy(0, 10);
            //                }
            //                else if (thisClothing.underwear) {
            //                    cl.c.panties = cl.c.bra = null;
            //                    tEnemy.drawSingleEnemy(xi, "pose");
            //                    tEnemy.chibi("strip0");
            //                    tEnemy.clothingDisplay();
            //                    tEnemy.enemyEnergyAll(null, 15, xi);
            //                    tEnemy.enemyEnergy(null, 30, xi);
            //                    tEnemy.myEnergy(0, 15);
            //                }
            //                else {
            //                    tEnemy.drawSingleEnemy(xi, "pose");
            //                    tEnemy.chibi("hum");
            //                    tEnemy.enemyEnergyAll(null, 20, xi);
            //                    tEnemy.enemyEnergy(null, 40, xi);
            //                    tEnemy.myEnergy(0, 20);
            //                }

            //                g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            //                break;
            //            case "defeat":
            //                tEnemy.drawSingleEnemy(xi, "defeat");
            //                g.fight.e[xi].nextMove = null;
            //                g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer / 2);
            //                break;
            //            default:
            //                console.log("invalid 'checkwin' enemyMove i:" + i);
            //                break;
            //        }
            //        g.fight.e[xi].nextMove = null;
            //    }
            //}
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
                g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            }
            else {
                tEnemy.drawAction("pow");
                tEnemy.drawSingleEnemy(xi, "recoil");
                tEnemy.drawMe(name);
                tEnemy.enemyEnergy(-1 * (name === "punch" ? g.fight.me.pPower : g.fight.me.kPower), null, xi);
                g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            }

            break;
        case "steal":
            xi = g.fight.enemyRotation;
            tEnemy.drawAction("nick");
            tEnemy.drawSingleEnemy(xi, "steal");
            tEnemy.drawMe("clear");
            tEnemy.myEnergy(null, 5);
            tEnemy.enemyEnergy(0, 15, xi);
            g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
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
            else if (name !== "noop") {
                tEnemy.enemyEnergyAll(null, 20, xi);
                tEnemy.enemyEnergy(null, 40, xi);
                tEnemy.myEnergy(0, 20);
            }
            if (name !== "noop") {
                tEnemy.drawSingleEnemy(xi, "pose");
                tEnemy.chibi(name);
            }
            g.roomTimeout = setTimeout(function () { room556.btnclick("checkwin"); }, g.fight.fighttimer);
            break;

        case "e_acia":
        case "e_soda":
        case "e_cumjar":
            switch (name) {
                case "e_acia":
                    tEnemy.myEnergy(15, null);
                    g.internal = "Gained 15 energy";
                    chat(8, 556);
                    break;
                case "e_soda":
                    tEnemy.myEnergy(50, null);
                    g.internal = "Gained 50 energy";
                    chat(8, 556);
                    break;
                case "e_cumjar":
                    tEnemy.myEnergy(100, null);
                    g.internal = "Gained 100 energy";
                    chat(8, 556);
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
                chat(1, 556);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 556); }, g.fight.fighttimer);
            };
            break;
        case "lost":
            chat(4, 556);
            break;
    };
};

room556.chatcatch = function (callback) {
    var i;

    switch (callback) {
        case "money":
            var thisMoney = 0;
            for (i = 0; i < g.fight.e.length; i++)
                thisMoney += g.fight.e[i].money;
            g.internal = thisMoney;
            room556.chatcatch("returnRoom");
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
                chat(1, 556);
            }
            else if (thisEntry.type === "cp") {
                g.roomTimeout = setTimeout(function () { chat(1, 556); }, g.fight.fighttimer);
            };
            break;
        case "enemyEnd":
            if (g.fight.e[0].eventStep === 0) {
                chat(2, 556);
            }
            else {
                var thisEntrye = enemyEnd.end(g.fight.e[0]);
                g.fight.e[0].eventStep = thisEntrye.eventStep;
                g.fight.chat.text = thisEntrye.chat;
                g.fight.chat.btn1 = thisEntrye.r;
                g.fight.chat.btn2 = null;
                if (thisEntrye.type === "c") {
                    chat(1, 556);
                }
                else if (thisEntrye.type === "cp") {
                    g.roomTimeout = setTimeout(function () { chat(1, 556); }, 2000);
                };
            }
            break;
        case "showSubmit":
            tEnemy.drawEnemyAction("e_submit");
            break;
        //case "strip":
        //    g.fight.enemy.energy = Math.floor(g.fight.enemy.maxEnergy / 3);
        //    g.fight.enemy.undress--;
        //    tEnemy.drawRoom(g.fight.enemy, g.fight.me, 556);
        //    break;
        case "goodEnd":
            g.internal = 0;
            room556.chatcatch("returnRoom");
            break;
        case "leaveSewer":
            g.internal = 0;
            room556.chatcatch("returnRoom");
            break;
        case "runaway":
            g.internal = -999;
            room556.chatcatch("returnRoom");
            break;
        case "sparEnd":
            var returnRoomse = g.fight.returnRoomID;
            g.pass = "win";
            $("#room-inv").show();
            g.internal = 0;
            g.fight = null;
            char.room(returnRoomse);
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
        case "spar1":
        case "spar2":
        case "spar3":
        case "spar4":
        case "spar5":
        case "spar6":
        case "spar7":
            nav.killbutton('spar');
            nav.button({
                "type": "zimg",
                "name": "spar",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "556_spar/" + callback + ".jpg"
            }, 556);
            break;
        case "sparx":
            nav.killbutton('spar');
            tEnemy.drawEnemyAction("init");
            g.internal = 0;
            break;
        case "checkcrowbar":
            if (inv.has("sewer")) {
                chat(532, 556);
            }
            else {
                inv.add("sewer");
                nav.button({
                    "type": "zimg",
                    "name": "spar",
                    "left": 695,
                    "top": 305,
                    "width": 531,
                    "height": 473,
                    "image": "556_spar/sewer.png"
                }, 556);
                chat(533, 556);
            }

            break;
        default:
            break;
    }
};

room556.chat = function (chatID) {
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
    else if (chatID === 500) {
        return {
            chatID: 0,
            speaker: "g",
            text: "Ok. I'm going to teach you how to fight. ",
            button: [
                { chatID: 501, text: "Ok", callback: "" },
                { chatID: 530, text: "Skip it, I already know how to fight", callback: "" }
            ]
        };
    }
    else if (chatID === 501) {
        return {
            chatID: 0,
            speaker: "g",
            text: "There's three outcomes to every fight. The first way is that you defeat your enemy, or enemies in striaght combat. " +
            "that means you either use an inventory item, kick, or punch them into submission and drop their energy to zero.",
            button: [
                { chatID: 502, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 502) {
        return {
            chatID: 0,
            speaker: "g",
            text: "The second way is they beat you into submission when your energy drops to zero. When you do get beat down you are of " +
            "no use to anyone. Your tiny little defeated body will be tossed aside.",
            button: [
                { chatID: 503, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 503) {
        return {
            chatID: 0,
            speaker: "g",
            text: "The last outcome... let's just say that you are a pretty little bitch and I can tell you just loved to get used. " + 
                "If you get too horny your body just takes over and presents itself to the superior fighter. If your little bitch body " +
                "turns on your opponent they'll make you their bitch, so if you don't want to get used keep your clothes on. ",
            button: [
                { chatID: 504, text: "I do like to get used... ", callback: "" }
            ]
        };
    }
    else if (chatID === 504) {
        return {
            chatID: 0,
            speaker: "g",
            text: "The final way is when everyone is just to horny to fight. . When you encounter someone and they get so horny during the fight, they'll forget " +
                "all about the fight and toss you down and use your poor little sissy holes. Also if you get too aroused during a fight You'll give " +
                "up those holes of yours. ",
            button: [
                { chatID: 505, text: "Ok show me how to fight. ", callback: "spar1" }
            ]
        };
    }
    else if (chatID === 505) {
        return {
            chatID: 0,
            speaker: "g",
            text: "On the bottom you'll see your energy, your enemies energy, and how horny both of you are. The green line is the " +
            "energy line, the pink is the horny line. You'll want to pay attention to this line. ",
            button: [
                { chatID: 506, text: "OK ", callback: "spar2" }
            ]
        };
    }
    else if (chatID === 506) {
        return {
            chatID: 0,
            speaker: "g",
            text: "Next is your clothing display. If you are naked your enemy may have other plans for your body.  ",
            button: [
                { chatID: 507, text: "OK ", callback: "spar3" }
            ]
        };
    }
    else if (chatID === 507) {
        return {
            chatID: 0,
            speaker: "g",
            text: "You can do a quick start. If you do a quick start you'll do what ever action is tied to that fighter. Think of " +
            "it as a repeat action. ",
            button: [
                { chatID: 508, text: "OK ", callback: "spar4" }
            ]
        };
    }
    else if (chatID === 508) {
        return {
            chatID: 0,
            speaker: "g",
            text: "Since we don't want to just stand there looking sexy, we're going to begin the fight. ",
            button: [
                { chatID: 509, text: "OK ", callback: "spar5" }
            ]
        };
    }
    else if (chatID === 509) {
        return {
            chatID: 0,
            speaker: "g",
            text: "You'll have to pick between a dominate or submissive action. I'm going to pretend you're not a little bitch " +
            "and you'll choose to be dominate. ",
            button: [
                { chatID: 510, text: "OK ", callback: "spar6" }
            ]
        };
    }
    else if (chatID === 510) {
        return {
            chatID: 0,
            speaker: "g",
            text: "You're going to try and punch me. You can also choose to block. If you block my punch or kick there's a chance you'll " +
            "get a counter attack in.",
            button: [
                { chatID: 511, text: "OK ", callback: "spar7" }
            ]
        };
    }
    else if (chatID === 511) {
        return {
            chatID: 0,
            speaker: "g",
            text: "Once you choose your action it will appear next to my name. ",
            button: [
                { chatID: 512, text: "OK ", callback: "sparx" }
            ]
        };
    }
    else if (chatID === 512) {
        return {
            chatID: 0,
            speaker: "g",
            text: "OK. now try to punch me.",
            button: [
                { chatID: -1, text: "Ok, I'll punch you. ", callback: "" }
            ]
        };
    }
    else if (chatID === 520) {
        return {
            chatID: 0,
            speaker: "g",
            text: "That's a good punch. You'll notice my energy has gone down a bit. Each person you come accross will have different " +
            "energy levels. Next I'm going to punch you. You'll block my punch. ",
            button: [
                { chatID: -1, text: "Oh, I'm going to block your punch", callback: "" }
            ]
        };
    }
    else if (chatID === 530) {
        return {
            chatID: 0,
            speaker: "g",
            text: "When ever you successfully block a punch you have a chance to do a counter attack. Some people will mix up their " +
            "attacks, but others will mostly do the same attack, either a kick or a punch. ",
            button: [
                { chatID: 531, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 531) {
        return {
            chatID: 0,
            speaker: "g",
            text: "If you get low on energy don't be afraid to use items from your inventory. If you want to do more submissive actions " +
            "you'll have to work on your sissy mind. ",
            button: [
                { chatID: -1, text: "...", callback: "checkcrowbar" }
            ]
        };
    }
    else if (chatID === 532) {
        return {
            chatID: 0,
            speaker: "g",
            text: "Feel free to challenge me if you want to fight. I'm going to beat your ass like a red-headed step child.",
            button: [
                { chatID: -1, text: "ok, you're on!", callback: "sparEnd" }
            ]
        };
    }
    else if (chatID === 533) {
        return {
            chatID: 0,
            speaker: "g",
            text: "Oh, " + sc.n("missy") + " told me to give you this. You can use it to get into the sewer next to the club" ,
            button: [
                { chatID: -1, text: "Oh, ok", callback: "sparEnd" }
            ]
        };
    }
    else if (chatID === 550) {
        return {
            chatID: 0,
            speaker: "g",
            text: "That's not what I said to do",
            button: [
                { chatID: -1, text: "Oh, I'm such an airhead", callback: "" }
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
