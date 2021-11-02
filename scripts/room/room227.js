//Fight Room
var room227 = {};
room227.main = function () {
    //g.pass = { enemy0: "g", enemy1: null, bg: "sewer", roomID: 226 };
    char.changeMenu("hide", false);
    tEnemy.init(g.pass.enemy0, g.pass.enemy1, g.pass.bg, g.pass.roomID, 227);
    tEnemy.drawButtons("init");
    tEnemy.drawButtonList("begin");
    $("#room-inv").hide();
    $("#room-menu").hide();
};

room227.btnclick = function (name) {
    var i, j;
    switch (name) {
        case "lb_begin":
            nav.killbutton("e0");
            nav.killbutton("e1");
            tEnemy.drawButtonList("main");
            tEnemy.drawStage();
            break;
        case "lb_flee":
            tEnemy.drawEnemyActionSubClear();
            tEnemy.drawButtonList("flee");
            break;
        case "lb_fleeconfirm":
            tEnemy.changeEnergy(-50, null, null);
            chat(2, 227);
            break;
        case "lb_fight":
            tEnemy.drawButtonList("fight");
            break;
        case "lb_weapon":
            tEnemy.drawButtonList("weapon");
            break;
        case "lb_cancel":
            g.fight.me.action = g.fight.me.counterAction = null;
            tEnemy.drawButtonList("cancel");
            break;
        case "lb_punch":
        case "lb_kick":
        case "lb_superpunch":
            tEnemy.drawButtonList("box");
            g.fight.me.action = name.substring(3);
            tEnemy.drawBox();
            if (name === "lb_kick")
                g.fight.me.kickCount++;
            else
                g.fight.me.punchCount++;
            break;
        case "lb_grapple":
            tEnemy.drawButtonList("grappleAttempt");
                for (i = 0; i < 3; i++) {
                    g.fight.grappleBox[i] = Math.floor(Math.random() * 3) !== 0;
                }
            break;
        
        case "lb_inventory":
            tEnemy.drawButtonList("inventory");
            break;
        case "lb_acia":
        case "lb_soda":
        case "lb_cumjar":
            tEnemy.drawButtonList("close");
            g.fight.me.action = name.substring(3);
            tEnemy.drawChar(g.fight.me.action);
            var energyGains = 0;
            switch (name) {
                case "lb_acia": energyGains = 15; inv.use("acia"); break;
                case "lb_soda": energyGains = 50; inv.use("soda"); break;
                case "lb_cumjar": energyGains = 100; inv.use("cumjar"); break;
            }
            tEnemy.changeEnergy(energyGains, null, null);
            g.popUpNoticeBottom("You gained " + energyGains + " energy. ");
            g.roomTimeout = setTimeout(function () {
                room227.chatcatch("counterAction");
            }, g.fight.fighttimer);
            break;
        case "lb_blockkick":
        case "lb_blockpunch":
        case "lb_blockgrapple":
        case "lb_takeit":
            g.fight.me.counterAction = name.substring(3);
            tEnemy.drawButtonList("close");
            var ea = tEnemy.getEnemyAction();
            console.log(name, ea);
            if ((name === "lb_blockkick" && ea.a === "kick")
                || (name === "lb_blockpunch" && ea.a === "punch")
                || (name === "lb_blockgrapple" && ea.a === "grapple" || name === "lb_blockgrapple" && ea.a === "strip")) {
                g.fight.me.goodBlockCount++;
                nav.modbutton("pow", "227_fight/b_block.png", null, null);
                tEnemy.drawChar("block");
                var blockDmg = ea.p * .1 > 1 ? 1 : ea.p * .1;
                tEnemy.changeEnergy(blockDmg * (-1), null, { t: "block", me: false });
                g.popUpNoticeBottom("Blocked " + ea.a + " for " + blockDmg + " damage. ");
                g.fight.e[0].p = ea.a === "grapple" ? "punch" : ea.a;
            }
            else if (ea.a === "punch" || ea.a === "kick") {
                g.fight.e[0].p = ea.a;
                nav.modbutton("pow", "227_fight/b_ePow.png", null, null);
                tEnemy.drawChar("recoil");
                tEnemy.changeEnergy(ea.p * (-1), null, { t: "hit", me: false });
                g.popUpNoticeBottom(ea.a.charAt(0).toUpperCase() + ea.a.slice(1) + " for " + ea.p + " damage. ");

            }
            else if (ea.a === "strip") {
                nav.modbutton("pow", "227_fight/b_strip.png", null, null);
                tEnemy.drawChar("striprip");
                tEnemy.changeEnergy(ea.p * (-1), null, { t: "steal", me: false });
                g.fight.e[0].p = "punch";
                g.popUpNoticeBottom("Oh no! You've been stripped!");
            }
            else if (ea.a === "grapple") {
                //if enemy returns grapple, but is wearing clothes, remove those clothes
                if (g.fight.e[0].clothingLevel > 0) {
                    g.fight.e[0].clothingLevel = 0;
                    nav.modbutton("pow", "227_fight/b_strip.png", null, null);
                    tEnemy.drawChar("pose");
                    g.fight.e[0].p = "strip";
                }
                else {
                    nav.modbutton("pow", "227_fight/b_groan.png", null, null);
                    g.fight.e[0].p = "grapple";
                    tEnemy.changeEnergy(ea.p * (-1), null, { t: "grapple", me: false });
                    tEnemy.drawChar(g.fight.e[0].grapple);
                    g.popUpNoticeBottom(g.fight.e[0].submit);
                }
            }
            tEnemy.drawEnemy();
            g.roomTimeout = setTimeout(function () {
                room227.chatcatch("main");
            }, g.fight.fighttimer);
            break;
        case "lb_slut":
            tEnemy.drawButtonList("slut");
            break;
        case "lb_humiliation":
            tEnemy.drawButtonList("humiliation");
            break;
        case "lb_submitbj":
            g.fight.me.sissyAction++;
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("bjpose");

            if (g.fight.e[0].clothingLevel > 0) {
                if (g.fight.e[0].clothingLevel !== 0) {
                    g.fight.e[0].clothingLevel = 0;
                }
                g.fight.e[0].p = "strip";
                tEnemy.drawEnemy();
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawChar("bjpose1");
                    g.fight.e[0].p = "bjpose";
                    tEnemy.drawEnemy();
                    tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawChar("bjpose");
                        room227.chatcatch("main-tain");
                    }, g.fight.fighttimer);
                }, g.fight.fighttimer);
            }
            else {
                g.fight.e[0].p = "bjpose";
                tEnemy.drawChar("bjpose1");
                tEnemy.drawEnemy();
                tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawChar("bjpose");
                    room227.chatcatch("main-tain");
                }, g.fight.fighttimer);
            }
            break;
        case "lb_submitass":
            g.fight.me.sissyAction++;
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("asspose");

            if (g.fight.e[0].clothingLevel > 0) {
                if (g.fight.e[0].clothingLevel !== 0) {
                    g.fight.e[0].clothingLevel = 0;
                }
                g.fight.e[0].p = "strip";
                tEnemy.drawEnemy();
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawChar("takeit1");
                    g.fight.e[0].p = "asspose";
                    tEnemy.drawEnemy();
                    tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawChar("asspose");
                        room227.chatcatch("main-tain");
                    }, g.fight.fighttimer);
                }, g.fight.fighttimer);
            }
            else {
                tEnemy.drawChar("takeit1");
                g.fight.e[0].p = "asspose";
                tEnemy.drawEnemy();
                tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawChar("asspose");
                    room227.chatcatch("main-tain");
                }, g.fight.fighttimer);
            }
            break;
        case "lb_stripshirt":
        case "lb_strippanties":
            g.fight.me.sissyAction++;
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("stripclothes");
            g.roomTimeout = setTimeout(function () {
                room227.chatcatch("main");
            }, g.fight.fighttimer);
            break;
        case "lb_teabag":
            g.fight.me.sissyAction--;
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("teabag");
            g.fight.e[0].p = "teabag";
            tEnemy.drawEnemy();
            tEnemy.changeEnergy(null, -10, { t: "grapple", me: true });
            g.roomTimeout = setTimeout(function () {
                room227.chatcatch("counterAction");
            }, g.fight.fighttimer);
                        break;
        case "lb_steal":
            g.fight.me.sissyAction--;
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("punch");
            g.fight.e[0].p = "steal";
            tEnemy.drawEnemy();
            g.fight.e[0].clothingLevel--;
            tEnemy.changeEnergy(null, null, { t: "steal", me: true });
            g.roomTimeout = setTimeout(function () {
                room227.chatcatch("counterAction");
            }, g.fight.fighttimer);
            break;
        case "box0":
        case "box1":
        case "box2":
        case "box3":
        case "box4":
        case "box5":
        case "box6":
        case "box7":
        case "box8":
        case "box9":
            var damageMult = tEnemy.selectBox(name);
            var preDamage = g.fight.me.action === "superpunch" ? g.fight.me.pPower * g.fight.me.superPunch :
                (g.fight.me.action === "punch" ? g.fight.me.pPower : g.fight.me.kPower);
            var totalDamage = Math.floor(preDamage * damageMult);
            if (totalDamage < 1)
                totalDamage = 1;

            if (g.fight.me.action === "punch")
                g.fight.me.punchCount++;
            else if(g.fight.me.action === "kick")
                g.fight.me.kickCount ++;


            g.roomTimeout = setTimeout(function () {
                nav.killbutton("box");
                nav.killbutton("boxtarget");
                tEnemy.drawButtonList("close");
                tEnemy.drawChar(g.fight.me.action);

                if (damageMult === .1) {
                    nav.modbutton("pow", "227_fight/b_block.png", null, null);
                    g.fight.e[0].p = "block";
                    g.popUpNoticeBottom("Blocked for " + totalDamage + " damage. ");
                    tEnemy.changeEnergy(null, totalDamage * -1, { t: "block", me: true });
                }
                else {
                    nav.modbutton("pow", "227_fight/b_pow.png", null, null);
                    g.fight.e[0].p = "recoil";
                    g.popUpNoticeBottom(g.fight.me.action.charAt(0).toUpperCase() + g.fight.me.action.slice(1) + " for " + totalDamage + " damage. ");
                    tEnemy.changeEnergy(null, totalDamage * -1, { t: "hit", me: true });
                }
                tEnemy.drawEnemy();
                g.roomTimeout2 = setTimeout(function () {
                    room227.chatcatch("counterAction");
                }, g.fight.fighttimer);
            }, g.fight.fighttimer);
            break;
        case "lb_domFuckem":
            g.fight.me.sissyAction--;
            g.fight.e[0].clothingLevel = 0;
            tEnemy.drawChar(g.fight.e[0].domFuckem.pose);
            g.fight.e[0].p = "fuck";
            tEnemy.drawEnemy();
            tEnemy.drawGif(g.fight.e[0].domFuckem.gif);
            nav.button({
                "type": "btn",
                "name": "lb_domFuckem1",
                "left": 1550,
                "top": 550,
                "width": 350,
                "height": 103,
                "image": "227_fight/cum.png",
                "title": "Make them cum, slut"
            }, 227);
            break;
        case "lb_domFuckem1":
            nav.killbutton("lb_domFuckem1");
            tEnemy.drawChar(g.fight.e[0].domFuckem.pose1);
            g.fight.e[0].p = "fuck1";
            tEnemy.drawEnemy();
            tEnemy.drawGif(g.fight.e[0].domFuckem.gif1);
            chat(999, 227);
            break;
        case "domination1":
            g.fight.e[0].p = "domination1";
            tEnemy.drawChar(g.fight.e[0].domination.pose1);
            tEnemy.drawGif(g.fight.e[0].domination.gif1);
            tEnemy.drawEnemy();
            nav.killbutton("domination1");
            chat(998, 227);
            break;
        case "lb_domPowerbottom":
            g.fight.e[0].clothingLevel = 0;
            tEnemy.drawChar(g.fight.e[0].domPowerbottom.pose);
            g.fight.e[0].p = "powerbottom";
            tEnemy.drawEnemy();
            tEnemy.drawGif(g.fight.e[0].domPowerbottom.gif);
            nav.button({
                "type": "btn",
                "name": "domPowerbottom1",
                "left": 1550,
                "top": 550,
                "width": 350,
                "height": 103,
                "image": "227_fight/cum.png",
                "title": "Make them cum, slut"
            }, 227);
            break;
        case "domPowerbottom1":
            nav.killbutton("domPowerbottom1");
            g.fight.e[0].p = "powerbottom1";
            tEnemy.drawChar(g.fight.e[0].domPowerbottom.pose1);
            tEnemy.drawGif(g.fight.e[0].domPowerbottom.gif1);
            tEnemy.drawEnemy();
            chat(998, 227);
            break;
        case "lb_domfacefuck":
            g.fight.e[0].clothingLevel = 0;
            tEnemy.drawChar(g.fight.e[0].domfacefuck.pose);
            g.fight.e[0].p = "facefuck";
            tEnemy.drawEnemy();
            tEnemy.drawGif(g.fight.e[0].domfacefuck.gif);
            nav.button({
                "type": "btn",
                "name": "domfacefuck1",
                "left": 1550,
                "top": 550,
                "width": 350,
                "height": 103,
                "image": "227_fight/cum.png",
                "title": "Cum in their mouth"
            }, 227);
            break;
        case "domfacefuck1":
            nav.killbutton("domPowerbottom1");
            g.fight.e[0].p = "facefuck1";
            tEnemy.drawChar(g.fight.e[0].domfacefuck.pose1);
            tEnemy.drawGif(g.fight.e[0].domfacefuck.gif1);
            tEnemy.drawEnemy();
            chat(998, 227);
            break;
        case "lb_domfoot":
            g.fight.e[0].clothingLevel = 0;
            tEnemy.drawChar(g.fight.e[0].domFoot.pose);
            g.fight.e[0].p = "foot";
            tEnemy.drawEnemy();
            tEnemy.drawGif(g.fight.e[0].domFoot.gif);
            nav.button({
                "type": "btn",
                "name": "domfoot1",
                "left": 1550,
                "top": 550,
                "width": 350,
                "height": 103,
                "image": "227_fight/cum.png",
                "title": "Make them cum, slut"
            }, 227);
            break;
        case "domfoot1":
            nav.killbutton("domfoot1");
            g.fight.e[0].p = "foot1";
            tEnemy.drawChar(g.fight.e[0].domFoot.pose1);
            tEnemy.drawGif(g.fight.e[0].domFoot.gif1);
            tEnemy.drawEnemy();
            chat(998, 227);
            break;
        case "lb_domFist":
            g.fight.e[0].clothingLevel = 0;
            tEnemy.drawChar(g.fight.e[0].domFist.pose);
            g.fight.e[0].p = "fist";
            tEnemy.drawEnemy();
            tEnemy.drawGif(g.fight.e[0].domFist.gif);
            nav.button({
                "type": "btn",
                "name": "domFist1",
                "left": 1550,
                "top": 550,
                "width": 350,
                "height": 103,
                "image": "227_fight/cum.png",
                "title": "Make them cum, slut"
            }, 227);
            break;
        case "domFist1":
            nav.killbutton("domFist1");
            g.fight.e[0].p = "fist1";
            tEnemy.drawChar(g.fight.e[0].domFist.pose1);
            tEnemy.drawGif(g.fight.e[0].domFist.gif1);
            tEnemy.drawEnemy();
            chat(998, 227);
            break;
        case "lb_grappleSingleleg":
        case "lb_grappleLapeldrag":
        case "lb_grappleLegsweep":
            var grappleSuccess = true;
            switch (name) {
                case "lb_grappleSingleleg": grappleSuccess = g.fight.grappleBox[0]; break;
                case "lb_grappleLapeldrag": grappleSuccess = g.fight.grappleBox[1]; break;
                case "lb_grappleLegsweep": grappleSuccess = g.fight.grappleBox[2]; break;
            }
            if (grappleSuccess) {
                tEnemy.drawButtonList("grapple");
                g.fight.e[0].p = null;
                tEnemy.drawChar("cloud");
                tEnemy.drawEnemy();
            }
            else {
                nav.modbutton("pow", "227_fight/b_block.png", null, null);
                tEnemy.drawChar("pose");
                g.popUpNoticeBottom("You've been blocked! ");
                g.fight.e[0].p = "block";
                tEnemy.drawEnemy();
                g.roomTimeout2 = setTimeout(function () {
                    room227.chatcatch("counterAction");
                }, g.fight.fighttimer);
            }
            break;
        default:
            alert("bad entry");
            break;
    }
};

room227.chatcatch = function (callback) {
    switch (callback) {
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
        case "main":
        case "main-tain":
        case "counterAction":
            if (g.fight.me.energy < 1) {
                g.fight.e[0].p = "win";
                tEnemy.drawChar("defeat");
                tEnemy.drawEnemy();
                chat(0, 227);
                //return defeat
            }
            else if (g.fight.e[0].energy < 1) {
                g.fight.e[0].p = "defeat";
                tEnemy.drawChar("victory");
                tEnemy.drawEnemy();
                chat(1, 227);
                //get money and stats
            }
            else if (g.fight.cPower > 99) {
                tEnemy.changeEnergy(-50, null, null);
                g.fight.e[0].clothingLevel = 0;
                g.fight.e[0].p = "domination";
                tEnemy.drawChar(g.fight.e[0].domination.pose);
                tEnemy.drawGif(g.fight.e[0].domination.gif);
                tEnemy.drawEnemy();
                nav.button({
                    "type": "btn",
                    "name": "domination1",
                    "left": 1550,
                    "top": 550,
                    "width": 350,
                    "height": 103,
                    "image": "227_fight/cum.png",
                    "title": "Make them cum, slut"
                }, 227);
                g.popUpNoticeBottom("You've been dominated!");
                //they control
            }
            else if (g.fight.cPower < -99) {
                tEnemy.drawButtonList("domination");
            }
            else {
                if (callback === "main-tain") {
                    callback = "main";
                }
                else {
                    tEnemy.drawChar("pose");
                }
                nav.modbutton("pow", "227_fight/blank.png", null, null);
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                

                tEnemy.drawButtonList(callback);
            }

            break;
        case "moneyend":
        case "badend":
            tEnemy.updatePlayerStats(name === "moneyend" ? g.fight.e[0].money : 0);
            g.internal = "nofight";
            char.room(g.fight.returnRoomID);
            break;
    }
};

room227.chat = function (chatID) {
    if (chatID === 998) {
        return {
            chatID: 998,
            speaker: "random",
            text: g.fight.e[0].submit,
            button: [{ chatID: -1, text: "...", callback: "moneyend" }]
        };
    }
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "random",
            text: g.fight.e[0].loss,
            button: [{ chatID: -1, text: "...", callback: "badend" }]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "random",
                text: g.fight.e[0].win,
                button: [{ chatID: -1, text: "You stupid slut! You've lost! Pathetic. ", callback: "badend" }]
            },
            {
                chatID: 1,
                speaker: "me",
                text: g.fight.e[0].loss,
                button: [{ chatID: -1, text: "You've won!! Dollar dollar bills ya'll!", callback: "moneyend" }]
            },
            {
                chatID: 2,
                speaker: "me",
                text: "Slut. ",
                button: [{ chatID: -1, text: "You've run away like a little bitch", callback: "badend" }]
            }
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};