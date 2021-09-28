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
            var thisAction = name.substring(3);

            g.fight.me.action = thisAction;
            tEnemy.drawChar(thisAction);
            if (tEnemy.successfulBlock()) {
                nav.modbutton("pow", "227_fight/b_pow.png", null, null);
                g.fight.e[0].p = "recoil";
                tEnemy.drawEnemy();
            }
            else {
                nav.modbutton("pow", "227_fight/b_block.png", null, null);
                g.fight.e[0].p = "block";
                tEnemy.drawEnemy();
            }
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
                nav.modbutton("pow", "227_fight/blank.png", null, null);
                tEnemy.updateMePrevAction();
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
            }, g.fight.fighttimer);
            //tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
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
                tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
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
                tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
                tEnemy.updateMePrevAction();
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
            }, g.fight.fighttimer);
            break;
        case "lb_blockkick":
        case "lb_blockpunch":
        case "lb_takeit":
            g.fight.me.counterAction = name.substring(3);
            tEnemy.drawButtonList([]);
            var enemyAction = tEnemy.getEnemyAction();
            console.log(name, enemyAction);
            if ((name === "lb_blockkick" && enemyAction === "kick") || (name === "lb_blockpunch" && enemyAction === "punch")) {
                tEnemy.playerhit(true, 0, g.fight.e[0].p);
                nav.modbutton("pow", "227_fight/b_block.png", null, null);
                tEnemy.drawChar("block");
            }
            else {
                tEnemy.playerhit(false, 0, g.fight.e[0].p);
                nav.modbutton("pow", "227_fight/b_ePow.png", null, null);
                tEnemy.drawChar("recoil");
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

