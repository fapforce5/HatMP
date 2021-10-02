//Fight Room
var room227 = {};
room227.main = function () {
    g.pass = { enemy0: "sc", enemy1: null, bg: "sewer", roomID: 226 };
    char.changeMenu("hide", false);
    tEnemy.init(g.pass.enemy0, g.pass.enemy1, g.pass.bg, g.pass.roomID);
    tEnemy.drawButtons("init");
    tEnemy.drawButtonList(["lb_headerBegin", "lb_begin"]);
};

room227.btnclick = function (name) {
    switch (name) {
        case "lb_begin":
            nav.killbutton("e0");
            nav.killbutton("e1");
            nav.bg("227_fight/" + g.pass.bg + ".jpg");
            tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
            tEnemy.drawStage();
            break;
        case "lb_flee":
            tEnemy.drawEnemyActionSubClear();
            tEnemy.drawButtonList(["lb_headerFlee", "lb_fleeconfirm", "lb_cancel"]);
            break;
        case "lb_fleeconfirm":
            g.popUpNotice("You ran away");
            g.internal = -999;
            room227.chatcatch("returnRoom");
            break;
        case "lb_fight":
            tEnemy.drawButtonList(["lb_headerFight", "lb_punch", "lb_kick", "lb_grapple", "lb_weapon", "lb_cancel"]);
            break;
        case "lb_weapon":
            tEnemy.drawButtonList(["lb_cancel"]);
            break;
        case "lb_cancel":
            g.fight.me.action = g.fight.me.counterAction = null;
            tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
            break;
        case "lb_punch":
        case "lb_kick":
            tEnemy.drawButtonList([]);
            tEnemy.drawBox();
            var thisAction = name.substring(3);
            g.fight.me.action = thisAction;
            break;
        case "lb_grapple":
            if (g.fight.e[0].clothingLevel > 0) {
                tEnemy.drawButtonList(["lb_headerGrapple", "lb_steal", "lb_cancel"]);
            }
            else
                tEnemy.drawButtonList(["lb_headerGrapple", "lb_cancel"]);
            break;
        case "lb_steal":
            tEnemy.drawButtonList([]);
            tEnemy.drawChar("punch");
            g.fight.e[0].p = "steal";
            tEnemy.drawEnemy();
            g.fight.e[0].clothingLevel--;
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_blockgrapple", "lb_takeit", "lb_cancel"]);
                tEnemy.updateMePrevAction();
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
            }, g.fight.fighttimer);
            break;
        case "lb_inventory":
            var invArray = new Array();
            if (inv.has("acia"))
                invArray.push("lb_acia");
            if (inv.has("soda"))
                invArray.push("lb_soda");
            if (inv.has("cumjar"))
                invArray.push("lb_cumjar");
            invArray.push("lb_cancel");
            tEnemy.drawButtonList(invArray);
            break;
        case "lb_acia":
        case "lb_soda":
        case "lb_cumjar":
            tEnemy.drawButtonList([]);
            g.fight.me.action = name.substring(3);
            tEnemy.drawChar(g.fight.me.action);
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_blockgrapple", "lb_takeit", "lb_cancel"]);
                tEnemy.updateMePrevAction();
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
            }, g.fight.fighttimer);
            break;
        case "lb_blockkick":
        case "lb_blockpunch":
        case "lb_blockgrapple":
        case "lb_takeit":
            g.fight.me.counterAction = name.substring(3);
            tEnemy.drawButtonList([]);
            var ea = tEnemy.getEnemyAction();
            console.log(name, ea);
            if ((name === "lb_blockkick" && ea.a === "kick")
                || (name === "lb_blockpunch" && ea.a === "punch")
                || (name === "lb_blockgrapple" && ea.a === "grapple" || name === "lb_blockgrapple" && ea.a === "strip")) {
                nav.modbutton("pow", "227_fight/b_block.png", null, null);
                tEnemy.drawChar("block");
                var blockDmg = ea.p * .1 > 1 ? 1 : ea.p * .1;
                tEnemy.changeEnergy(blockDmg * (-1), null, 0);
                g.popUpNoticeBottom("Blocked " + ea.a + " for " + blockDmg + " damage. ");
            }
            else if (ea.a === "punch" || ea.a === "kick") {
                //tEnemy.playerhit(false, 0, g.fight.e[0].p);
                nav.modbutton("pow", "227_fight/b_ePow.png", null, null);
                tEnemy.drawChar("recoil");
                tEnemy.changeEnergy(ea.p * (-1), null, ea.c);
                g.popUpNoticeBottom(ea.a.charAt(0).toUpperCase() + ea.a.slice(1) + " for " + ea.p + " damage. ");

            }
            else if (ea.a === "strip") {
                nav.modbutton("pow", "227_fight/b_strip.png", null, null);
                tEnemy.drawChar("striprip");
                tEnemy.changeEnergy(ea.p * (-1), null, ea.c);
                g.fight.e[0].p = "punch";
                g.popUpNoticeBottom("Oh no! You've been stripped!");
            }
            else if (ea.a === "grapple") {
                if (g.fight.e[0].clothingLevel > 0) {
                    g.fight.e[0].clothingLevel = 0;
                    nav.modbutton("pow", "227_fight/b_strip.png", null, null);
                    tEnemy.drawChar("pose");
                    g.fight.e[0].p = "strip";
                }
                else {
                    nav.modbutton("pow", "227_fight/b_groan.png", null, null);
                    g.fight.e[0].p = "grapple";
                    tEnemy.changeEnergy(ea.p * (-1), null, ea.c);
                    tEnemy.drawChar("bent");
                    g.popUpNoticeBottom(g.fight.e[0].submit);
                }
            }
            tEnemy.drawEnemy();
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
                nav.modbutton("pow", "227_fight/blank.png", null, null);
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
            }, g.fight.fighttimer);
            break;
        case "lb_slut":
            if (g.fight.me.clothes !== null) {
                tEnemy.drawButtonList(["lb_headerSlut", "lb_stripshirt", "lb_cancel"]);
            }
            else if (g.fight.me.panties) {
                tEnemy.drawButtonList(["lb_headerSlut", "lb_strippanties", "lb_cancel"]);
            }
            else {
                tEnemy.drawButtonList(["lb_headerSlut", "lb_submitass", "lb_submitbj", "lb_humiliation", "lb_cancel" ]);
            }
            break;
        case "lb_humiliation":
            tEnemy.drawButtonList(["lb_headerhumiliation", "lb_cancel"]);
            break;
        case "lb_submitbj":
            tEnemy.drawButtonList([]);
            tEnemy.drawChar("bjpose");

            if (g.fight.e[0].clothingLevel > 0) {
                if (g.fight.e[0].clothingLevel !== 0) {
                    g.fight.e[0].clothingLevel = 0;
                }
                g.fight.e[0].p = "strip";
                tEnemy.drawEnemy();
                g.roomTimeout = setTimeout(function () {
                    g.fight.e[0].p = "bjpose";
                    tEnemy.drawEnemy();
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
                        g.fight.e[0].p = "pose";
                        tEnemy.drawEnemy();
                    }, g.fight.fighttimer);
                }, g.fight.fighttimer);
            }
            else {
                g.fight.e[0].p = "bjpose";
                tEnemy.drawEnemy();
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
                    g.fight.e[0].p = "pose";
                    tEnemy.drawEnemy();
                }, g.fight.fighttimer);
            }
            //f_sc_strip_0.png

            break;
        case "lb_submitass":
            tEnemy.drawButtonList([]);
            tEnemy.drawChar("asspose");

            if (g.fight.e[0].clothingLevel > 0) {
                if (g.fight.e[0].clothingLevel !== 0) {
                    g.fight.e[0].clothingLevel = 0;
                }
                g.fight.e[0].p = "strip";
                tEnemy.drawEnemy();
                g.roomTimeout = setTimeout(function () {
                    g.fight.e[0].p = "bjpose";
                    tEnemy.drawEnemy();
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
                        g.fight.e[0].p = "pose";
                        tEnemy.drawEnemy();
                    }, g.fight.fighttimer);
                }, g.fight.fighttimer);
            }
            else {
                g.fight.e[0].p = "bjpose";
                tEnemy.drawEnemy();
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
                    g.fight.e[0].p = "pose";
                    tEnemy.drawEnemy();
                }, g.fight.fighttimer);
            }
            break;
        case "lb_stripshirt":
        case "lb_strippanties":
            tEnemy.drawButtonList([]);
            tEnemy.drawChar("stripclothes");
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
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
            var preDamage = g.fight.me.action === "punch" ? g.fight.me.pPower : g.fight.me.kPower;
            var totalDamage = Math.floor(preDamage * damageMult);
            if (totalDamage < 1)
                totalDamage = 1;

            g.roomTimeout = setTimeout(function () {
                nav.killbutton("box");
                tEnemy.drawChar(g.fight.me.action);
                tEnemy.changeEnergy(totalDamage, null, 0);
                if (damageMult === .1) {
                    nav.modbutton("pow", "227_fight/b_block.png", null, null);
                    g.fight.e[0].p = "block";
                    g.popUpNoticeBottom("Blocked for " + totalDamage + " damage. ");
                    tEnemy.changeEnergy(null, totalDamage * -1, null);
                }
                else {
                    nav.modbutton("pow", "227_fight/b_pow.png", null, null);
                    g.fight.e[0].p = "recoil";
                    g.popUpNoticeBottom(g.fight.me.action.charAt(0).toUpperCase() + g.fight.me.action.slice(1) + " for " + totalDamage + " damage. ");
                }
                tEnemy.drawEnemy();
                g.roomTimeout2 = setTimeout(function () {
                    tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_blockgrapple", "lb_takeit", "lb_cancel"]);
                    nav.modbutton("pow", "227_fight/blank.png", null, null);
                    //tEnemy.updateMePrevAction();
                    g.fight.e[0].p = "pose";
                    tEnemy.drawEnemy();
                    tEnemy.drawChar("pose");
                    tEnemy.changeEnergy(null, totalDamage * -1, -20);
                }, g.fight.fighttimer);
            }, g.fight.fighttimer);


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
    }
};

