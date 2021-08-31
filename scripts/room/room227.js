//Fight Room
var room227 = {};
room227.main = function () {
    g.pass = { enemy0: "sc", enemy1: null, bg: "sewer", roomID: 226 };
    char.changeMenu("hide", false);
    tEnemy.init(g.pass.enemy0, g.pass.enemy1, g.pass.bg, g.pass.roomID);
    tEnemy.drawButtons("init");
    tEnemy.drawButtonList(["lb_begin", "lb_flee"]);
};

room227.btnclick = function (name) {
    switch (name) {
        case "lb_begin":
            nav.killbutton("e0");
            nav.killbutton("e1");
            nav.bg("227_fight/" + g.pass.bg + ".jpg");
            tEnemy.drawButtonList(["lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
            tEnemy.drawStage();
            break;
        case "lb_flee":
            tEnemy.drawEnemyActionSubClear();
            tEnemy.drawButtonList(["lb_begin", "lb_fleeconfirm"]);
            break;
        case "lb_fleeconfirm":
            g.popUpNotice("You ran away");
            g.internal = -999;
            room227.chatcatch("returnRoom");
            break;
        case "lb_fight":
            tEnemy.drawButtonList(["lb_punch", "lb_kick", "lb_grapple", "lb_cancel"]);
            break;
        case "lb_cancel":
            g.fight.me.action = g.fight.me.counterAction = null;
            tEnemy.drawButtonList(["lb_fight", "lb_slut", "lb_inventory", "lb_flee"]);
            break;
        case "lb_punch":
        case "lb_kick":
            g.fight.me.action = name.substring(3);
            tEnemy.drawButtonList(["lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
            break;
        case "lb_grapple":
            tEnemy.drawButtonList(["lb_cancel"]);
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
            g.fight.me.action = name.substring(3);
            tEnemy.drawButtonList(["lb_blockpunch", "lb_blockkick", "lb_takeit", "lb_cancel"]);
            break;
        case "lb_blockkick":
        case "lb_blockpunch":
        case "lb_takeit":
            g.fight.me.counterAction = name.substring(3);
            tEnemy.drawButtonList([]);
            tEnemy.getEnemyAction();
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

