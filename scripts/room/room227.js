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
                g.fight.e[0].p = "recoil";
                tEnemy.drawEnemy();
            }
            else {
                g.fight.e[0].p = "block";
                tEnemy.drawEnemy();
            }
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
                tEnemy.updateMePrevAction();
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
            }, 1500);
            //tEnemy.drawButtonList(["lb_headerCounterAction", "lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
            break;
        case "lb_grapple":
            if (g.fight.e[0].undress > 0) {
                tEnemy.drawButtonList(["lb_headerGrapple", "lb_steal", "lb_cancel"]);
            }
            tEnemy.drawButtonList(["lb_headerGrapple", "lb_cancel"]);
            break;
        case "lb_steal":
            tEnemy.drawChar("punch");
            g.fight.e[0].pose = "steal";
            tEnemy.drawEnemy();
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
            }, 1500);
            break;
        case "lb_blockkick":
        case "lb_blockpunch":
        case "lb_takeit":
            g.fight.me.counterAction = name.substring(3);
            tEnemy.drawButtonList([]);
            var enemyAction = tEnemy.getEnemyAction();
            console.log(name, enemyAction);
            if ((name === "lb_blockkick" && enemyAction === "kick") || (name === "lb_blockpunch" && enemyAction === "punch")) {
                tEnemy.drawChar("block");
            }
            else {
                tEnemy.drawChar("recoil");
            }
            tEnemy.drawEnemy();
            g.roomTimeout = setTimeout(function () {
                tEnemy.drawButtonList(["lb_headerAction", "lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
                g.fight.e[0].p = "pose";
                tEnemy.drawEnemy();
                tEnemy.drawChar("pose");
            }, 1500);
            break;
        case "lb_slut":
            if (g.fight.me.clothes !== null) {
                tEnemy.drawButtonList(["lb_headerSlut", "lb_stripshirt", "lb_cancel"]);
            }
            else if (g.fight.me.panties) {
                tEnemy.drawButtonList(["lb_headerSlut", "lb_strippanties", "lb_cancel"]);
            }
            else {
                tEnemy.drawButtonList(["lb_headerSlut", "lb_cancel" ]);
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
            }, 1500);
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

