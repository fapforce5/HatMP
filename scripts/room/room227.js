//Fight Room
var room227 = {};
room227.main = function () {
    g.pass = { enemy0: "sc", enemy1: null, bg: "sewer", roomID: 226 };
    char.changeMenu("hide", false);
    tEnemy.init(g.pass.enemy0, g.pass.enemy1, g.pass.bg, g.pass.roomID);
    tEnemy.drawButtons("init");
    tEnemy.drawButtonList("begin");
    $("#room-inv").hide();
    $("#room-menu").hide();
};

room227.btnclick = function (name) {
    switch (name) {
        case "lb_begin":
            nav.killbutton("e0");
            nav.killbutton("e1");
            nav.bg("227_fight/" + g.pass.bg + ".jpg");
            tEnemy.drawButtonList("main");
            tEnemy.drawStage();
            break;
        case "lb_flee":
            tEnemy.drawEnemyActionSubClear();
            tEnemy.drawButtonList("flee");
            break;
        case "lb_fleeconfirm":
            g.popUpNotice("You ran away");
            g.internal = -999;
            room227.chatcatch("returnRoom");
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
            tEnemy.drawBox();
            var thisAction = name.substring(3);
            g.fight.me.action = thisAction;
            break;
        case "lb_grapple":
            tEnemy.drawButtonList("grapple");
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
                nav.modbutton("pow", "227_fight/b_block.png", null, null);
                tEnemy.drawChar("block");
                var blockDmg = ea.p * .1 > 1 ? 1 : ea.p * .1;
                tEnemy.changeEnergy(blockDmg * (-1), null, { t: "block", me: false });
                g.popUpNoticeBottom("Blocked " + ea.a + " for " + blockDmg + " damage. ");
                g.fight.e[0].p = "punch";
            }
            else if (ea.a === "punch" || ea.a === "kick") {
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
                    tEnemy.drawChar("bent");
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
            tEnemy.drawButtonList("close");
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
                    tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                    g.roomTimeout = setTimeout(function () {
                        room227.chatcatch("main-tain");
                    }, g.fight.fighttimer);
                }, g.fight.fighttimer);
            }
            else {
                g.fight.e[0].p = "bjpose";
                tEnemy.drawEnemy();
                tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                g.roomTimeout = setTimeout(function () {
                    room227.chatcatch("main-tain");
                }, g.fight.fighttimer);
            }
            break;
        case "lb_submitass":
            tEnemy.drawButtonList("close");
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
                    tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                    g.roomTimeout = setTimeout(function () {
                        room227.chatcatch("main-tain");
                    }, g.fight.fighttimer);
                }, g.fight.fighttimer);
            }
            else {
                g.fight.e[0].p = "bjpose";
                tEnemy.drawEnemy();
                tEnemy.changeEnergy(null, -10, { t: "grapple", me: false });
                g.roomTimeout = setTimeout(function () {
                    room227.chatcatch("main-tain");
                }, g.fight.fighttimer);
            }
            break;
        case "lb_stripshirt":
        case "lb_strippanties":
            tEnemy.drawButtonList("close");
            tEnemy.drawChar("stripclothes");
            g.roomTimeout = setTimeout(function () {
                room227.chatcatch("main");
            }, g.fight.fighttimer);
            break;
        case "lb_teabag":
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
                tEnemy.drawButtonList("close");
                nav.killbutton("boxtarget");
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
            nav.killbutton("domPowerbottom1");
            chat(998, 227);
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
                //return defeat
            }
            else if (g.fight.e[0].energy < 1) {
                g.fight.e[0].p = "defeat";
                tEnemy.drawChar("victory");
                tEnemy.drawEnemy();
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
        case "dominationComplete":

            break;
    }
};

room227.chat = function (chatID) {
    if (chatID === 998) {
        return {
            chatID: 998,
            speaker: "random",
            text: g.fight.e[0].submit,
            button: [{ chatID: -1, text: "...", callback: "dominationComplete" }]
        };
    }
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "random",
            text: g.fight.e[0].loss,
            button: [{ chatID: -1, text: "...", callback: "dominationComplete" }]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "random",
                text: "AAAAAAAAAaaaaaaaaaaaaaaaaa WHAT ARE YOU DOING IN HERE! GET OUT!!!!",
                button: [{ chatID: -1, text: "Oh crap! I'm not a dirty pervert! Sorry", callback: "leave" }]
            },
            {
                chatID: 1,
                speaker: "me",
                text: "Oh nice, it's " + sc.n("lola") + "'s locker. Hmmm I wonder what the combination is...[In development]",
                button: [{ chatID: -1, text: "...", callback: "" }]
            },
            {
                chatID: 2,
                speaker: "me",
                text: "Oh, Cindy left her student ID here. Maybe I'll just hold onto this for now. ",
                button: [{ chatID: -1, text: "...", callback: "resest" }]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};