var tEnemy = {};
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------

//bimbo moves: a = shake ass, c = shake cock, d = dance 
tEnemy.init = function (e0, e1, e2, bg, returnRoomID, thisRoomID) {
    var e0x, e1x, e2x, eax;
    e0x = tEnemy.initEnemy(e0);
    e1x = tEnemy.initEnemy(e1);
    e2x = tEnemy.initEnemy(e2);
    eax = new Array();

    if (e0x !== null)
        eax.push(e0x);
    if (e1x !== null)
        eax.push(e1x);
    if (e2x !== null)
        eax.push(e2x);

    g.fight = {
        enemayCount: eax.length,
        e: eax,
        me: {
            energy: g.get("energy"),
            maxEnergy: g.get("maxenergy"),
            horny: g.get("arousal"),
            damage: 0,
            shield: g.get("dLevel"),
            evasion: Math.round(g.get("fitness")),
            pPower: 7 + Math.round(g.get("bodyLevel") / 2),
            kPower: 7 + Math.round(g.get("legLevel") / 2),
            punchCount: 0,
            kickCount: 0,
            goodBlockCount: 0,
            sissyAction: 0,
            clothing: 3,
            nextMove: "",
            nextMoveEnemy: null,
            bimboMoves: g.get('bimboMoves')
        },
        chat: {
            text: "",
            btn1: "",
            btn2: ""
        },
        bg: bg,
        returnRoomID: returnRoomID,
        thisRoomID: thisRoomID,
        lock: false,
        enemyRotation: 0,
        fighttimer: g.get("fighttimer")
    };

    g.fight.e[0].active = true;
};

tEnemy.initEnemy = function (enemyName) {

    var charVar;
    switch (enemyName) {
        case "g":
            charVar = {
                name: "g",
                displayName: sc.n("g"),
                energy: 200,
                maxEnergy: 200,
                horny: 5,
                arousalGrowth: 5,
                sheild: 0,
                pPower: 10,
                kPower: 12,
                defense: .5,
                bp: 7,
                bk: 2,
                bb: 1,
                clothingLevel: 1,
                money: 20 + Math.floor(Math.random() * 20),
                cock: false,
                nextMove: "",
                undress: 0,
                eventStep: 9999,
                eventType: "",
                active: false,
                p: "pose",
                myaction: null,
                prev1: null,
                prev2: null,
                pose: { i0: "227_fight/g_pose.png", i1: null, i2: null, w: 716, h: 1080 },
                punch: { i0: "227_fight/g_punch.png", i1: null, i2: null, w: 894, h: 1080 },
                kick: { i0: "227_fight/g_kick.png", i1: null, i2: null, w: 1172, h: 1080 },
                block: { i0: "227_fight/g_block.png", i1: null, i2: null, w: 680, h: 1080 },
                recoil: { i0: "227_fight/g_recoil.png", i1: null, i2: null, w: 1212, h: 1080 },
                defeat: { i0: "227_fight/g_recoil.png", i1: null, i2: null, w: 864, h: 1080 },
                avatar: "227_fight/g_avatar.png",
                loss: "Damn I've been bested!"
            }
            break;
        case "futaRed":
            charVar = {
                name: "futaRed",
                displayName: "Clown Clan",
                energy: 30,
                maxEnergy: 30,
                horny: 25,
                arousalGrowth: 10,
                sheild: 0,
                pPower: 5,
                kPower: 20,
                defense: 0,
                bp: 2,
                bk: 7,
                bb: 1,
                clothingLevel: 0,
                money: 5 + Math.floor(Math.random() * 5),
                cock: true,
                nextMove: "",
                undress: 0,
                eventStep: 9999,
                eventType: "",
                active: false,
                p: "pose",
                myaction: null,
                prev1: null,
                prev2: null,
                pose: { i0: "227_fight/r_pose.png", i1: null, i2: null, w: 736, h: 1080 },
                punch: { i0: "227_fight/r_punch.png", i1: null, i2: null, w: 970, h: 1046 },
                kick: { i0: "227_fight/r_kick.png", i1: null, i2: null, w: 1331, h: 1080 },
                block: { i0: "227_fight/r_block.png", i1: null, i2: null, w: 1200, h: 1080 },
                recoil: { i0: "227_fight/r_recoil.png", i1: null, i2: null, w: 1375, h: 1080 },
                defeat: { i0: "227_fight/r_defeat.png", i1: null, i2: null, w: 864, h: 1080 },
                avatar: "227_fight/r_avatar.png",
                loss: "Damn I've been bested!"
            };
            break;
        case "futaYellow":
            charVar = {
                name: "futaYellow",
                displayName: "Clown Clan",
                energy: 50,
                maxEnergy: 50,
                horny: 45,
                arousalGrowth: 10,
                sheild: 0,
                pPower: 12,
                kPower: 8,
                defense: 0,
                bp: 2,
                bk: 7,
                bb: 1,
                clothingLevel: 0,
                money: 7 + Math.floor(Math.random() * 7),
                cock: true,
                nextMove: "",
                undress: 0,
                eventStep: 9999,
                eventType: "",
                active: false,
                p: "pose",
                myaction: null,
                prev1: null,
                prev2: null,
                pose: { i0: "227_fight/y_pose.png", i1: null, i2: null, w: 736, h: 1080 },
                punch: { i0: "227_fight/y_punch.png", i1: null, i2: null, w: 970, h: 1046 },
                kick: { i0: "227_fight/y_kick.png", i1: null, i2: null, w: 1331, h: 1080 },
                block: { i0: "227_fight/y_block.png", i1: null, i2: null, w: 1200, h: 1080 },
                recoil: { i0: "227_fight/y_recoil.png", i1: null, i2: null, w: 1375, h: 1080 },
                defeat: { i0: "227_fight/y_defeat.png", i1: null, i2: null, w: 864, h: 1080 },
                avatar: "227_fight/y_avatar.png",
                loss: "I am your whore"
            };
            break;
        case "clownQueen":
            charVar = {
                name: "clownQueen",
                displayName: "Clown Clan Leader",
                energy: 100,
                maxEnergy: 100,
                horny: 20,
                arousalGrowth: 8,
                sheild: 0,
                pPower: 10,
                kPower: 10,
                defense: 0,
                bp: 4,
                bk: 4,
                bb: 2,
                clothingLevel: 1,
                money: 50 + Math.floor(Math.random() * 50),
                cock: false,
                nextMove: "",
                undress: 1,
                eventStep: 9999,
                eventType: "",
                active: false,
                p: "pose",
                myaction: null,
                prev1: null,
                prev2: null,
                pose: { i0: "227_fight/c_pose.png", i1: "227_fight/c_pose1.png", w: 1159, h: 1080 },
                punch: { i0: "227_fight/c_punch.png", i1: "227_fight/c_punch1.png", w: 1050, h: 1046 },
                kick: { i0: "227_fight/c_punch.png", i1: "227_fight/c_punch1.png", w: 1050, h: 1080 },
                block: { i0: "227_fight/c_block.png", i1: "227_fight/c_block1.png", w: 1080, h: 1080 },
                recoil: { i0: "227_fight/c_recoil.png", i1: "227_fight/c_recoil1.png", w: 1397, h: 1080 },
                defeat: { i0: "227_fight/c_defeat.png", i1: "227_fight/c_defeat1.png", w: 492, h: 1080 },
                avatar: "227_fight/c_avatar.png",
                loss: "HONK.. damn...."
            };
            break;
        default:
            charVar = null;
            break;
    };
    return charVar;
}

tEnemy.drawBackground = function (bg) {
    switch (bg) {
        case "gym":
            nav.bg("555_backgym/gym.jpg");
            break;
        case "sewer":
            nav.bg("227_fight/sewer.jpg");
            break;
        default:
            console.log("Unkown BG: " + bg + " in enemy");
            break;
    };
};

tEnemy.drawRoom = function () {
    var thisEnergy, thisHorney, topx, iconx;

    var btnListx = [
        {
            "type": "zimg",
            "name": "mystatus",
            "left": 15,
            "top": 693,
            "width": 616,
            "height": 372,
            "image": "227_fight/my_status.png"
        },
        {
            "type": "zimg",
            "name": "charAvatar",
            "left": 1700,
            "top": 860,
            "width": 170,
            "height": 170,
            "image": "227_fight/c_avatar.png"
        },
        {
            "type": "zimg",
            "name": "myactive",
            "left": 25,
            "top": 625,
            "width": 100,
            "height": 100,
            "image": "227_fight/unk.png"
        },
    ];

    topx = 860;
    iconx = "enemy_status.png";
    $.each(g.fight.e, function (i, v) {

        btnListx.push({
            "type": "zimg",
            "name": "mystatus" + i,
            "left": 1344,
            "top": topx - 27,
            "width": 551,
            "height": 222,
            "image": "227_fight/" + iconx
        });

        btnListx.push({
            "type": "zimg",
            "name": "charAvatar",
            "left": 1700,
            "top": topx,
            "width": 170,
            "height": 170,
            "image": v.avatar
        });

        btnListx.push({
            "type": "zbtn",
            "name": "eaction" + i,
            "left": 1652,
            "top": topx - 9,
            "width": 100,
            "height": 100,
            "image": "227_fight/invalid.png"
        });
        topx -= 260;
        iconx = "enemy_inactive.png";
    });

    $.each(btnListx, function (i, v) {
        nav.button(v, 227);
    });

    
    nav.t({
        type: "zimg",
        name: "name",
        left: 323,
        top: 963,
        font: 20,
        hex: "#ffffff",
        text: sc.n("me")
    });

    thisEnergy = (g.fight.me.energy / g.fight.me.maxEnergy) * 280 * g.ratio;
    thisHorney = (g.fight.me.horny / 100) * 280 * g.ratio;

    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 990, 310) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 990, 310) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 990, 310) + '  background: #33ff33; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize my-horny" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1008, 310) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-horny" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisHorney, 1008, 310) + '  background: #edb7eb; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-horny" data-t="horny" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisHorney, 1008, 310) + '  background: #E976E5; border-radius:10px;" ></div>');

    topx = 980;
    for (i = 0; i < g.fight.e.length; i++) {
        thisEnergy = (g.fight.e[i].energy / g.fight.e[i].maxEnergy) * 280;
        thisHorney = (g.fight.e[i].horny / 100) * 280 * g.ratio;
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life' + i + '" data-name="myenergybase' + i + '" data-room="9999" style=" ' + g.makeCss(10, 280, topx, 1380) + '  background: #333; border-radius:10px;" ></div>');
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life' + i + '" data-t="damage" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, topx, 1380) + '  background: #ff3333; border-radius:10px;" ></div>');
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life' + i + '" data-t="energy" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, topx, 1380) + '  background: #33ff33; border-radius:10px;" ></div>');

        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-horny' + i + '" data-name="myhorneybase' + i + '" data-room="9999" style=" ' + g.makeCss(10, 280, (topx + 18), 1380) + '  background: #333; border-radius:10px;" ></div>');
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-horny' + i + '" data-t="horny" data-room="9999" style=" ' + g.makeCss(10, thisHorney, (topx + 18), 1380) + '  background: #edb7eb; border-radius:10px;" ></div>');
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-horny' + i + '" data-t="damage" data-room="9999" style=" ' + g.makeCss(10, thisHorney, (topx + 18), 1380) + '  background: #E976E5; border-radius:10px;" ></div>');

        nav.t({
            type: "zimg",
            name: "charName",
            left: 1380,
            top: topx - 27,
            font: 20,
            hex: "#ffffff",
            text: g.fight.e[i].displayName
        });

        topx -= 260;
    }
    //tEnemy.drawButtons("init", thisRoomID);
    tEnemy.myClothesDraw();
};

tEnemy.drawEnemyActionActive = function (activeNum) {
    for (var i = 0; i < g.fight.e.length; i++) {
        if (activeNum === i) {
            nav.modbutton("mystatus" + i.toString(), "227_fight/enemy_status.png", null, null);
            g.fight.e[i].active = true;
        }
        else {
            nav.modbutton("mystatus" + i.toString(), "227_fight/enemy_inactive.png", null, null);
            g.fight.e[i].active = false;
        }
    }
    tEnemy.drawEnemy(["pose", "pose", "pose"]);

    tEnemy.drawEnemyAction("init");
};

tEnemy.drawEnemyAction = function (btn) {
    nav.killbutton("e_active");
    nav.killbutton("e_passive");
    nav.killbutton("e_cancel");
    nav.killbutton("e_punch");
    nav.killbutton("e_kick");
    nav.killbutton("e_steal");
    nav.killbutton("e_back");
    nav.killbutton("e_blockpunch");
    nav.killbutton("e_blockkick");
    nav.killbutton("e_endturn");
    nav.killbutton("e_endturnconfirm");
    nav.killbutton("e_flee");
    nav.killbutton("e_bottoms");
    nav.killbutton("e_underwear");
    nav.killbutton("e_shirt");
    nav.killbutton("e_flirtass");
    nav.killbutton("e_flirtcock");
    nav.killbutton("e_flirtdance");
    nav.killbutton("e_earnmoves");
    nav.killbutton("e_energy");
    nav.killbutton("e_acia");
    nav.killbutton("e_soda");
    nav.killbutton("e_cumjar");

    var ae = tEnemy.getActiveEnemy();
    var i;
    var totalButtons = 0;

    switch (btn) {
        case "init":
        case "e_back":
            tEnemy.drawEnemyActionSub("e_active", 0);
            tEnemy.drawEnemyActionSub("e_passive", 1);
            tEnemy.drawEnemyActionSub("e_cancel", 2);
            tEnemy.drawEnemyActionSub("e_endturn", 3);
            break;
        case "e_active":
            tEnemy.drawEnemyActionSub("e_punch", 0);
            tEnemy.drawEnemyActionSub("e_kick", 1);
            if (g.fight.e[ae].undress > 0) {
                tEnemy.drawEnemyActionSub("e_steal", 2);
                tEnemy.drawEnemyActionSub("e_back", 3);
            }
            else
                tEnemy.drawEnemyActionSub("e_back", 2);
            break;
        case "e_passive":
            tEnemy.drawEnemyActionSub("e_blockpunch", 0);
            tEnemy.drawEnemyActionSub("e_blockkick", 1);
            tEnemy.drawEnemyActionSub("e_back", 2);
            break;
        case "e_endturn":
            tEnemy.drawEnemyActionSub("e_endturnconfirm", 0);
            tEnemy.drawEnemyActionSub("e_cancel", 1);
            break;
        case "e_punch":
        case "e_kick":
        case "e_steal":
            tEnemy.setNextMove(btn, ae);
            break;
        case "e_blockpunch":
        case "e_blockkick":
            tEnemy.setEnemyAction(ae, btn);
            break;
        case "flee":
            tEnemy.drawEnemyActionSub("e_flee", 0);
            tEnemy.drawEnemyActionSub("e_cancel", 1);
            break;
        case "fuck":
            var whatWear = cl.wearing();

            if (g.fight.me.bimboMoves.includes("s")) {
                if (whatWear.bottom) {
                    tEnemy.drawEnemyActionSub("e_bottoms", totalButtons);
                    totalButtons++;
                }
                else if (whatWear.underwear) {
                    tEnemy.drawEnemyActionSub("e_underwear", totalButtons);
                    totalButtons++;
                }
                if (whatWear.top) {
                    tEnemy.drawEnemyActionSub("e_shirt", totalButtons);
                    totalButtons++;
                }


                if (cl.wearing().superlewd) {
                    if (g.fight.me.bimboMoves.includes("a")) {
                        tEnemy.drawEnemyActionSub("e_flirtass", totalButtons);
                        totalButtons++;
                    }
                    if (g.fight.me.bimboMoves.includes("c")) {
                        tEnemy.drawEnemyActionSub("e_flirtcock", totalButtons);
                        totalButtons++;
                    }
                    if (g.fight.me.bimboMoves.includes("d")) {
                        tEnemy.drawEnemyActionSub("e_flirtdance", totalButtons);
                        totalButtons++;
                    }
                }
            }
            else {
                tEnemy.drawEnemyActionSub("e_earnmoves", totalButtons);
                totalButtons++;
            }
            tEnemy.drawEnemyActionSub("e_cancel", totalButtons);
            break;
        case "e_flirtass":
        case "e_flirtcock":
        case "e_flirtdance":
        case "e_bottoms":
        case "e_underwear":
        case "e_shirt":
        case "e_acia":
        case "e_soda":
        case "e_cumjar":
            tEnemy.setNextMove(btn, null);
            break;
        case "inventory":
            tEnemy.drawEnemyActionSub("e_energy", 0);
            tEnemy.drawEnemyActionSub("e_cancel", 1);
            break;
        case "e_energy":
            if (inv.has("acia")) {
                tEnemy.drawEnemyActionSub("e_acia", totalButtons);
                totalButtons++;
            }
            if (inv.has("soda")) {
                tEnemy.drawEnemyActionSub("e_soda", totalButtons);
                totalButtons++;
            }
            if (inv.has("cumjar")) {
                tEnemy.drawEnemyActionSub("e_cumjar", totalButtons);
                totalButtons++;
            }
            tEnemy.drawEnemyActionSub("e_cancel", totalButtons);
            break;
        case "clear":
            break;
    };
};

tEnemy.setNextMove = function (move, num) {
    var img;
    //case "e_punch":
    //case "e_kick":
    //case "e_steal":
    //case "e_flirtass":
    //case "e_flirtcock":
    //case "e_flirtdance":
    //case "e_bottoms":
    //case "e_underwear":
    //case "e_shirt":
    //case "e_acia":
    //case "e_soda":
    //case "e_cumjar":

    if (num !== null) {
        tEnemy.setEnemyAction(num, move);
    }
    for (i = 0; i < g.fight.e.length; i++) {
        if (!g.fight.e[i].active || num === null) {
            switch (g.fight.e[i].myaction) {
                case "e_punch":
                case "e_kick":
                case "e_steal":
                    tEnemy.setEnemyAction(i, "e_unk");
                    break;
            }
        }
    }
    switch (move) {
        case "e_punch": img = "punch.png"; break;
        case "e_kick": img = "kick.png"; break;
        case "e_steal": img = "steal.png"; break;
        case "e_flirtass": img = "butthole.png"; break;
        case "e_flirtcock": img = "cock.png"; break;
        case "e_flirtdance": img = "dance.png"; break;
        case "e_bottoms": img = "skirt.png"; break;
        case "e_underwear": img = "panties.png"; break;
        case "e_shirt": img = "shirt.png"; break;
        case "e_acia": img = "acia.png"; break;
        case "e_soda": img = "soda.png"; break;
        case "e_cumjar": img = "cumjar.png"; break;
    }
    nav.modbutton("myactive", "227_fight/" + img, null, null);

    if (move === "e_punch")
        move = "punch";
    else if (move === "e_kick")
        move = "kick";

    g.fight.me.nextMove = move;
    g.fight.me.nextMoveEnemy = num;
};

tEnemy.drawEnemyActionSub = function (btn, num) {
    var img;
    switch (btn) {
        case "e_active": img = "lb_active"; break;
        case "e_passive": img = "lb_passive"; break;
        case "e_cancel": case "e_back": img = "lb_cancel"; break;
        case "e_steal": img = "lb_steal"; break;
        case "e_punch": img = "lb_punch"; break;
        case "e_kick": img = "lb_kick"; break;
        case "e_blockpunch": img = "lb_blockpunch"; break;
        case "e_blockkick": img = "lb_blockkick"; break;
        case "e_endturn": img = "lb_endturn"; break;
        case "e_endturnconfirm": img = "lb_endturnconfirm"; break;
        case "e_flee": img = "lb_flee"; break;
        case "e_flirtass": img = "lb_flirtass"; break;
        case "e_flirtcock": img = "lb_flirtcock"; break;
        case "e_flirtdance": img = "lb_flirtdance"; break;
        case "e_bottoms": img = "lb_stripskirt"; break;
        case "e_underwear": img = "lb_strippanties"; break;
        case "e_shirt": img = "lb_stripshirt"; break;
        case "e_earnmoves": img = "lb_earnmoves"; break;
        case "e_energy": img = "lb_energy"; break;
        case "e_acia": img = "lb_acia"; break;
        case "e_soda": img = "lb_soda"; break;
        case "e_cumjar": img = "lb_cumjar"; break;

        default: console.log("invalid drawEnemyActionSub: " + btn); break;
    }
    nav.button({
        "type": "zbtn",
        "name": btn,
        "left": 760,
        "top": 200 + (num * 150),
        "width": 400,
        "height": 100,
        "image": "227_fight/" + img + ".png"
    }, g.fight.thisRoomID);
};

tEnemy.setEnemyAction = function (num, action) {
    var img;
    switch (action) {
        case "e_punch": img = "punch.png"; break;
        case "e_kick": img = "kick.png"; break;
        case "e_steal": img = "steal.png"; break;
        case "e_unk": img = "invalid.png"; break;
        case "e_blockkick": img = "blockKick.png"; break;
        case "e_blockpunch": img = "blockPunch.png"; break;
    }
    nav.modbutton("eaction" + num.toString(), "227_fight/" + img, null, null);
    g.fight.e[num].myaction = action;
    
}

tEnemy.drawButtons = function (btn) {
    nav.killbutton("fight");
    nav.killbutton("fuck");
    nav.killbutton("inventory");
    nav.killbutton("inventoryKill");
    nav.killbutton("flee");
    nav.killbutton("punch");
    nav.killbutton("kick");
    nav.killbutton("block");
    nav.killbutton("cancel");
    nav.killbutton("undress");
    nav.killbutton("ass");
    nav.killbutton("bj");
    nav.killbutton("pantiesRemove");
    nav.killbutton("shirtRemove");
    nav.killbutton("skirtRemove");
    nav.killbutton("teaseAss");
    nav.killbutton("teaseCock");
    nav.killbutton("teaseDance");
    nav.killbutton("invalidBtn");
    nav.killbutton("endturn");
    
    var btnListBtn = new Array();

    switch (btn) {
        case "init":
        case "cancel":
            btnListBtn = [
                { "name": "endturn", "image": "227_fight/endturn.png" },
                { "name": "fuck", "image": "227_fight/fuck.png" },
                { "name": "inventory", "image": "227_fight/inventory.png" },
                { "name": "flee", "image": "227_fight/flee.png" }
            ];
            break;
        case "fight":
            btnListBtn = [
                { "name": "punch", "image": "227_fight/punch.png" },
                { "name": "kick", "image": "227_fight/kick.png" },
                { "name": "block", "image": "227_fight/block.png" },
                { "name": "cancel", "image": "227_fight/cancel.png" }
            ];
            break;
        case "fuck":
            if (cl.c.panties === null && cl.c.bra === null && cl.c.dress === null && cl.c.pj === null &&cl.c.swimsuit === null && cl.c.shirt === null && cl.c.pants === null) {
                //if (eArray.horny < 98) {
                //    btnListBtn = [
                //        { "name": "invalidBtn", "image": "227_fight/submitDisable.png" },
                //        { "name": "tease", "image": "227_fight/tease.png" },
                //        { "name": "invalidBtn", "image": "227_fight/undressDisable.png" },
                //        { "name": "cancel", "image": "227_fight/cancel.png" }
                //    ];
                //}
                //else {
                    btnListBtn = [
                        { "name": "submit", "image": "227_fight/submit.png" },
                        { "name": "tease", "image": "227_fight/tease.png" },
                        { "name": "invalidBtn", "image": "227_fight/undressDisable.png" },
                        { "name": "cancel", "image": "227_fight/cancel.png" }
                    ];
                //}
            }
            else {
                btnListBtn = [
                    { "name": "invalidBtn", "image": "227_fight/submitDisable.png" },
                    { "name": "invalidBtn", "image": "227_fight/teaseDisable.png" },
                    { "name": "undress", "image": "227_fight/undress.png" },
                    { "name": "cancel", "image": "227_fight/cancel.png" },
                ];
            }
            break;
        case "inventoryKill":
            btnListBtn = [
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
                { "name": "inventoryKill", "image": "227_fight/inventoryKill.png" },
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
            ];
            break;
        case "submit":
            btnListBtn = [
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
                { "name": "submitBJ", "image": "227_fight/bj.png" },
                { "name": "submitAss", "image": "227_fight/ass.png" },
                { "name": "cancel", "image": "227_fight/cancel.png" }
            ];
            break;
        case "tease":
            btnListBtn = [
                { "name": "teaseCock", "image": "227_fight/cock.png" },
                { "name": "teaseDance", "image": "227_fight/dance.png" },
                { "name": "teaseAss", "image": "227_fight/butthole.png" },
                { "name": "cancel", "image": "227_fight/cancel.png" }
            ];
            break;
        case "undress":
            if (cl.c.panties === null && cl.c.bra === null)
                btnListBtn.push({ "name": "invalidBtn", "image": "227_fight/pantiesDisable.png" });
            else
                btnListBtn.push({ "name": "pantiesRemove", "image": "227_fight/panties.png" });

            if (cl.c.dress !== null || cl.c.swimsuit !== null || cl.c.pj !== null) {
                btnListBtn.push({ "name": "shirtRemove", "image": "227_fight/shirt.png" });
                btnListBtn.push({ "name": "skirtRemove", "image": "227_fight/skirt.png" });
            }
            else {
                if (cl.c.shirt !== null)
                    btnListBtn.push({ "name": "shirtRemove", "image": "227_fight/shirt.png" });
                else
                    btnListBtn.push({ "name": "invalidBtn", "image": "227_fight/shirtDisable.png" });

                if (cl.c.pants !== null)
                    btnListBtn.push({ "name": "skirtRemove", "image": "227_fight/skirt.png" });
                else
                    btnListBtn.push({ "name": "invalidBtn", "image": "227_fight/skirtDisable.png" });
            }

            btnListBtn.push({ "name": "cancel", "image": "227_fight/cancel.png" });
            break;
        case "block":
            btnListBtn = [
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
                { "name": "blockPunch", "image": "227_fight/blockPunch.png" },
                { "name": "blockKick", "image": "227_fight/blockKick.png" },
                { "name": "cancel", "image": "227_fight/cancel.png" }
            ];
            break;
        case "clear":
            btnListBtn = [
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
                { "name": "invalidBtn", "image": "227_fight/invalid.png" },
                { "name": "invalidBtn", "image": "227_fight/invalid.png" }
            ];
            break;
        case "endturn":
            tEnemy.drawEnemyAction("e_endturn");
            break;
        default:
            console.log("unkown drawButtons: " + btn);
            break;
    };

    btnListBtnDraw = [
        {
            "type": "zbtn",
            "name": btnListBtn[0].name,
            "left": 282,
            "top": 854,
            "width": 100,
            "height": 100,
            "image": btnListBtn[0].image
        },
        {
            "type": "zbtn",
            "name": btnListBtn[1].name,
            "left": 239,
            "top": 749,
            "width": 100,
            "height": 100,
            "image": btnListBtn[1].image
        },
        {
            "type": "zbtn",
            "name": btnListBtn[2].name,
            "left": 132,
            "top": 704,
            "width": 100,
            "height": 100,
            "image": btnListBtn[2].image
        },
        {
            "type": "zbtn",
            "name": btnListBtn[3].name,
            "left": 26,
            "top": 748,
            "width": 100,
            "height": 100,
            "image": btnListBtn[3].image
        }
    ];

    $.each(btnListBtnDraw, function (i, v) {
        nav.button(v, g.fight.thisRoomID);
    });
};

tEnemy.drawAction = function (action) {
    nav.killbutton("bgAction");
    switch (action) {
        case "pow":
            nav.button({
                "type": "img",
                "name": "bgAction",
                "left": 786,
                "top": 0,
                "width": 1134,
                "height": 1080,
                "image": "227_fight/b_pow.png"
            }, 9999);
            break;
        case "epow":
            nav.button({
                "type": "img",
                "name": "bgAction",
                "left": 786,
                "top": 0,
                "width": 1134,
                "height": 1080,
                "image": "227_fight/b_ePow.png"
            }, 9999);
            break;
        case "block":
            nav.button({
                "type": "img",
                "name": "bgAction",
                "left": 971,
                "top": 18,
                "width": 949,
                "height": 1030,
                "image": "227_fight/b_block.png"
            }, 9999);
            break;
        case "kill":
        case "clear":
            break;
        default:
            console.log("invalid Action: " + action);
    };
};

tEnemy.drawSingleEnemy = function (xi, pose) {
    var i;
    for (i = 0; i < g.fight.e.length; i++) {
        g.fight.e[i].active = false;
        g.fight.e[i].p = "pose";
    }
    g.fight.e[xi].active = true;
    g.fight.e[xi].p = pose;
    tEnemy.drawEnemy();
};

tEnemy.drawEnemy = function () {
    var i;
    
    var background = new Array();
    var foreground;

    for (i = 0; i < g.fight.e.length; i++) {
        if (g.fight.e[i].active)
            foreground = i;
        else
            background.push(i);
        nav.killbutton("char" + i);
    }

    for (i = 0; i < background.length; i++) 
        tEnemy.drawEnemySub(500 * ((i * 1.8) + 1), 1080, .9, background[i], "dark");
    
    tEnemy.drawEnemySub(960, 1080, 1, i, "img", foreground, "img");
    console.log("-------------------")
};

tEnemy.drawEnemySub = function (ls, ts, r, j, classes) {
    var img, width, height;
    switch (g.fight.e[j].p) {
        case "pose":
            width = g.fight.e[j].pose.w;
            height = g.fight.e[j].pose.h;
            img = g.fight.e[j].undress === 0 ? g.fight.e[j].pose.i0 : (g.fight.e[j].undress === 1 ? g.fight.e[j].pose.i1 : g.fight.e[j].pose.i2);
            break;
        case "blockPunch":
        case "blockKick":
        case "block":
            width = g.fight.e[j].block.w;
            height = g.fight.e[j].block.h;
            img = g.fight.e[j].undress === 0 ? g.fight.e[j].block.i0 : (g.fight.e[j].undress === 1 ? g.fight.e[j].block.i1 : g.fight.e[j].block.i2);
            break;
        case "punch":
            width = g.fight.e[j].punch.w;
            height = g.fight.e[j].punch.h;
            img = g.fight.e[j].undress === 0 ? g.fight.e[j].punch.i0 : (g.fight.e[j].undress === 1 ? g.fight.e[j].punch.i1 : g.fight.e[j].punch.i2);
            break;
        case "kick":
            width = g.fight.e[j].kick.w;
            height = g.fight.e[j].kick.h;
            img = g.fight.e[j].undress === 0 ? g.fight.e[j].kick.i0 : (g.fight.e[j].undress === 1 ? g.fight.e[j].kick.i1 : g.fight.e[j].kick.i2);
            break;
        case "recoil":
            width = g.fight.e[j].recoil.w;
            height = g.fight.e[j].recoil.h;
            img = g.fight.e[j].undress === 0 ? g.fight.e[j].recoil.i0 : (g.fight.e[j].undress === 1 ? g.fight.e[j].recoil.i1 : g.fight.e[j].recoil.i2);
            break;
        case "defeat":
            width = g.fight.e[j].defeat.w;
            height = g.fight.e[j].defeat.h;
            img = g.fight.e[j].undress === 0 ? g.fight.e[j].defeat.i0 : (g.fight.e[j].undress === 1 ? g.fight.e[j].defeat.i1 : g.fight.e[j].defeat.i2);
            break;
        default:
            console.log("unable to find: " + pose + " pose");
            break;
    };
    console.log(j + " --");
    nav.button({
        "type": classes,
        "name": "char" + j,
        "left": ls - ((width * r) / 2),
        "top": ts - (height * r),
        "width": width * r,
        "height": height * r,
        "image": img
    }, g.fight.thisRoomID);
};

tEnemy.drawMe = function (pose) {
    nav.killbutton("me");
    switch (pose) {
        case "punch":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 485,
                "top": 80,
                "width": 1435,
                "height": 818,
                "image": "227_fight/mPunch.png"
            }, 9999);
            break;
        case "kick":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 532,
                "top": 0,
                "width": 1303,
                "height": 1080,
                "image": "227_fight/mKick.png"
            }, 9999);
            break;
        case "blockPunch":
        case "blockKick":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 359,
                "top": 291,
                "width": 1310,
                "height": 789,
                "image": "227_fight/mBlock.png"
            }, 9999);
            break;
        case "blockmiss":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 700,
                "top": 653,
                "width": 552,
                "height": 427,
                "image": "227_fight/mBlock_miss.png"
            }, 9999);
            
            break;
        case "clear":
            break;
        default:
            console.log("drawMe pose not found: " + pose);
            break;
    };
};

tEnemy.enemyEnergy = function (thisDamage, thisArousal, xi) {
    var newEnergyDisplay, preEnergyDisplay, preDamage;

    if (thisDamage !== null) {
        preDamage = g.fight.e[xi].energy;
        g.fight.e[xi].energy += thisDamage;

        if (g.fight.e[xi].energy < 0)
            g.fight.e[xi].energy = 0;
        if (g.fight.e[xi].energy > g.fight.e[xi].maxEnergy)
            g.fight.e[xi].energy = g.fight.e[xi].maxEnergy;

        newEnergyDisplay = (g.fight.e[xi].energy / g.fight.e[xi].maxEnergy) * 280;
        preEnergyDisplay = (preDamage / g.fight.e[xi].maxEnergy) * 280;

        $(".enemy-life" + xi + "[data-t='damage'").css({
            width: preEnergyDisplay * g.ratio + "px"
        });
        $(".enemy-life" + xi + "[data-t='energy'").css({
            width: newEnergyDisplay * g.ratio + "px"
        });
    }
    if (thisArousal !== null) {
        preDamage = g.fight.e[xi].horny;

        g.fight.e[xi].horny += thisDamage;

        if (g.fight.e[xi].horny < 0)
            g.fight.e[xi].horny = 0;
        if (g.fight.e[xi].horny > 100)
            g.fight.e[xi].horny = 100;

        newEnergyDisplay = (g.fight.e[xi].horny / 100) * 280;
        preEnergyDisplay = (preDamage / 100) * 280;

        $(".my-horny[data-t='damage'").css({
            width: preEnergyDisplay * g.ratio + "px"
        });
        $(".my-horny[data-t='horney'").css({
            width: newEnergyDisplay * g.ratio + "px"
        });
    }
};

tEnemy.myEnergy = function (thisDamage, thisArousal) {
    var newEnergyDisplay, preEnergyDisplay, preDamage;

    if (thisDamage !== null) {
        preDamage = g.fight.me.energy;
        g.fight.me.energy += thisDamage;

        if (g.fight.me.energy < 0)
            g.fight.me.energy = 0;
        if (g.fight.me.energy > g.fight.me.maxEnergy)
            g.fight.me.energy = g.fight.me.maxEnergy;

        newEnergyDisplay = (g.fight.me.energy / g.fight.me.maxEnergy) * 280;
        preEnergyDisplay = (preDamage / g.fight.me.maxEnergy) * 280;

        $(".my-life[data-t='damage'").css({
            width: preEnergyDisplay * g.ratio + "px"
        });
        $(".my-life[data-t='energy'").css({
            width: newEnergyDisplay * g.ratio + "px"
        });
    }
    if (thisArousal !== null) {
        preDamage = g.fight.me.horny;

        g.fight.me.horny += thisDamage;

        if (g.fight.me.horny < 0)
            g.fight.me.horny = 0;
        if (g.fight.me.horny > 100)
            g.fight.me.horny = 100;

        newEnergyDisplay = (g.fight.me.horny / 100) * 280;
        preEnergyDisplay = (preDamage / 100) * 280;

        $(".my-horny[data-t='damage'").css({
            width: preEnergyDisplay * g.ratio + "px"
        });
        $(".my-horny[data-t='horney'").css({
            width: newEnergyDisplay * g.ratio + "px"
        });
    }
};

tEnemy.enemyHorny = function (eArray, hornyChange) {


    var oldHorny = eArray.horny;
    var newHorny = eArray.horny + hornyChange;

    if (newHorny < 0)
        newHorny = 0;
    if (newHorny > 100)
        newHorny = 100;

    $(".enemy-horny[data-t='damage'").css({
        width: ((newHorny / 100) * g.ratio * 280) + "px"
    });
    $(".enemy-horny[data-t='horny'").css({
        width: ((oldHorny / 100) * g.ratio * 280) + "px"
    });
    return newHorny;
};

tEnemy.myHorny = function (mArray, thisDamage) {
    
    return newEnergy;
};

tEnemy.chibi = function (thischibi) {
    nav.killbutton("me");

    switch (thischibi) {
        case "pantiesRemove":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 564,
                "top": 282,
                "width": 411,
                "height": 798,
                "image": "227_fight/chibi_panties.png"
            }, 9999);
            break;
        case "shirtRemove":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 631,
                "top": 166,
                "width": 283,
                "height": 914,
                "image": "227_fight/chibi_shirt.png"
            }, 9999);
            break;
        case "skirtRemove":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 564,
                "top": 282,
                "width": 411,
                "height": 798,
                "image": "227_fight/chibi_pants.png"
            }, 9999);
            break;
        case "teaseDance":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 577,
                "top": 80,
                "width": 487,
                "height": 1000,
                "image": "227_fight/chibi_dance.png"
            }, 9999);
            break;
        case "teaseCock":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 666,
                "top": 387,
                "width": 525,
                "height": 693,
                "image": "227_fight/chibi_cock.png"
            }, 9999);
            break;
        case "teaseAss":
            nav.button({
                "type": "img",
                "name": "me",
                "left": 549,
                "top": 599,
                "width": 659,
                "height": 481,
                "image": "227_fight/chibi_ass.png"
            }, 9999);
            break;
        case "kill":
        case "clear":
            break;
        default:
            console.log("invalid chibi: " + thischibi);
            break;
    }
};

tEnemy.myClothesDraw = function () {
    nav.killbutton("myPantyDisplay");
    nav.killbutton("myShirtDisplay");
    nav.killbutton("mySkirtDisplay");

    if (cl.c.panties === null && cl.c.bra === null)
        nav.button({
            "type": "zimg",
            "name": "myPantyDisplay",
            "left": 285,
            "top": 1027,
            "width": 28,
            "height": 27,
            "image": "227_fight/dPantiesGone.png"
        }, 9999);
    else
        nav.button({
            "type": "zimg",
            "name": "myPantyDisplay",
            "left": 285,
            "top": 1027,
            "width": 28,
            "height": 27,
            "image": "227_fight/dPanties.png"
        }, 9999);
    if (cl.c.dress !== null || cl.c.swimsuit !== null || cl.c.pj !== null) {
        nav.button({
            "type": "zimg",
            "name": "myShirtDisplay",
            "left": 331,
            "top": 1027,
            "width": 28,
            "height": 27,
            "image": "227_fight/dShirt.png"
        }, 9999);
        nav.button({
            "type": "zimg",
            "name": "mySkirtDisplay",
            "left": 377,
            "top": 1027,
            "width": 28,
            "height": 27,
            "image": "227_fight/dSkirt.png"
        }, 9999);
    }
    else {
        if (cl.c.shirt !== null)
            nav.button({
                "type": "zimg",
                "name": "myShirtDisplay",
                "left": 331,
                "top": 1027,
                "width": 28,
                "height": 27,
                "image": "227_fight/dShirt.png"
            }, 9999);
        else
            nav.button({
                "type": "zimg",
                "name": "myShirtDisplay",
                "left": 331,
                "top": 1027,
                "width": 28,
                "height": 27,
                "image": "227_fight/dShirtGone.png"
            }, 9999);
        if (cl.c.pants !== null)
            nav.button({
                "type": "zimg",
                "name": "mySkirtDisplay",
                "left": 377,
                "top": 1027,
                "width": 28,
                "height": 27,
                "image": "227_fight/dSkirt.png"
            }, 9999);
        else
            nav.button({
                "type": "zimg",
                "name": "mySkirtDisplay",
                "left": 377,
                "top": 1027,
                "width": 28,
                "height": 27,
                "image": "227_fight/dSkirtGone.png"
            }, 9999);
    }
};

tEnemy.sexyNextMove = function (eArray, mArray) {
    var returnMove = null;
    var hostile1, hostile2;
    hostile1 = hostile2 = false;
    if (mArray.prev1 === "punch" || mArray.prev1 === "kick" || mArray.prev1 === "blockPunch" || mArray.prev1 === "blockKick")
        hostile1 = true;
    if (mArray.prev2 === "punch" || mArray.prev2 === "kick" || mArray.prev2 === "blockPunch" || mArray.prev2 === "blockKick")
        hostile2 = true;

    if (eArray.horny > 75) {
        if (mArray.energy < eArray.pPower || mArray.energy < eArray.kPower) {
            if (Math.floor(Math.round() * 2 === 0))
                returnMove = tEnemy.blindNextMove(eArray, mArray);
            else
                return "pose";
        }
        else
            returnMove = "pose";
    }
    else if (eArray.horny > 50) {
        if (hostile1)
            returnMove = tEnemy.blindNextMove(eArray, mArray);
        else if (hostile2) {
            if (Math.floor(Math.round() * 2) === 0)
                returnMove = tEnemy.blindNextMove(eArray, mArray);
            else
                returnMove = "pose";
        }
        else
            returnMove = "pose";
    }
    else if (eArray.horny > 25) {
        if (hostile1 || hostile2)
            returnMove = tEnemy.blindNextMove(eArray, mArray);
        else if (Math.floor(Math.round() * 3) === 0)
            returnMove = tEnemy.blindNextMove(eArray, mArray);
        else
            returnMove = "pose";
    }
    else {
        if (hostile1 || hostile2)
            returnMove = tEnemy.blindNextMove(eArray, mArray);
        else if (Math.floor(Math.round() * 2) === 0)
            returnMove = tEnemy.blindNextMove(eArray, mArray);
        else
            returnMove = "pose";
    }

    return returnMove;
};

tEnemy.blindNextMove = function (xi, myaction) {
    var moveChance = new Array();
    if (xi === null) {
        xi = 0;
        console.log("NULL - tEnemy.blindNextMove");
    }
    g.fight.e[xi].nextMove = null;

    for (var i = 0; i < 10; i++) {
        if (i < g.fight.e[xi].bp)
            moveChance.push("punch");
        else if (i < g.fight.e[xi].bp + g.fight.e[xi].bk)
            moveChance.push("kick");
        else
            moveChance.push("b");
    }

    if (g.fight.e[xi].prev1 !== null && g.fight.e[xi].prev2 !== null) {
        if (Math.random() * 10 < 7) {
            if ((mArray.prev1 === "punch" && mArray.prev2 === "punch") || (mArray.prev1 === "kick" && mArray.prev2 === "punch"))
                g.fight.e[xi].nextMove = "blockPunch";
            else if ((mArray.prev2 === "kick" && mArray.prev2) || (mArray.prev1 === "punch" && mArray.prev2 === "kick"))
                g.fight.e[xi].nextMove = "blockKick";
            if (mArray.prev1 === "blockPunch" && mArray.prev2 === "blockPunch")
                g.fight.e[xi].nextMove = "kick";
            if (mArray.prev1 === "blockKick" && mArray.prev2 === "blockKick")
                g.fight.e[xi].nextMove = "punch";
        }
    }
    
    if (g.fight.e[xi].nextMove === null) {
        g.fight.e[xi].nextMove = moveChance[Math.floor(Math.random() * 10)];
    }
    if (g.fight.e[xi].nextMove === "b")
        g.fight.e[xi].nextMove = Math.floor(Math.random() * 2) === 0 ? "blockPunch" : "blockKick";
    g.fight.e[xi].prev2 = g.fight.e[xi].prev1;
    g.fight.e[xi].prev1 = myaction;
};

//tEnemy.makeInventory = function () {
//    var thisInv = new Array();
//    var i, counter;
//    counter = 0;
//    inv.createElements();
//    for (i = 0; i < inv.master.length; i++) {
//        if ((inv.master[i].type === "e" || inv.master[i].type === "d") && inv.master[i].entry) {
//            $('#menu-bg_' + counter).html('<img src="./images/inv/' + inv.master[i].image + '" class="menu-select fight-inventory" data-inv="' + inv.master[i].name + '" title="' + inv.master[i].display + '">');
//            counter++;
//        }
//    }
//    $(".fight-inventory").click(function () {
//        tEnemy.displayInventory($(this).data("inv"));
//    });
//};

//tEnemy.displayInventory = function (thisName) {
//    var thisItem = inv.get(thisName);

//    $('#menu_displayIcon').html('<img src="./images/inv/' + thisItem.image + '"/>');

//    $("#menu_displayCost").html("");
//    $("#menu_displayName").html(thisItem.display + ": " + thisItem.count);
//    $('#menu_displayType').html(inv.gett(thisItem.type));
//    $("#menu_displayDesc").html(thisItem.desc + (thisItem.type === "e" ? "" : "<br/> Item not in use yet."));
//    //$("#menu_displayInfo").html("info");

//    //$("#menu_displayUp").attr("data-price", thisItem.cost);
//    //$("#menu_displayDown").attr("data-price", thisItem.cost);
//    if (thisItem.type === "e") {
//        $("#menu_displayAction").html("Use Item");
//        $("#menu_displayAction").attr("data-itype", "tEnemy");
//        $("#menu_displayAction").attr("data-name", thisName);
//        $("#menu_displayAction").attr("data-type", thisItem.type);
//        $("#menu_displayAction").show();
//    }
//    else {
//        $("#menu_displayAction").hide();
//    }
//};

//tEnemy.invClickCatch = function (thisName) {
//    var i = inv.getIndex(thisName);
//    if (inv.master[i].type === "e") {
//        if (inv.master[i].count < 1) {
//            g.popUpNotice("No " + inv.master[i].displayName + " in inventory.");
//        }
//        else {
//            inv.master[i].count--;
//            switch (thisName) {
//                case "acia":
//                    g.popUpNotice("You gained 15 energy");
//                    room227.btnclick("energyUsed15");
//                    break;
//                case "soda":
//                    g.fight.me.energy += 50;
//                    g.popUpNotice("You gained 50 energy");
//                    room227.btnclick("energyUsed50");
//                    break;
//                default:
//                    g.popUpNotice("No " + inv.master[i].displayName + " in inventory.");
//                    break;
//            }
//        }
//    }
//};

tEnemy.updatePlayerStats = function (money, win) {
    var i;
    var popUpText = "";
    for (i = 0; i < g.st.length; i++) {
        if (g.st[i].n === "energy") {
            if (g.fight.me.energy < 0)
                g.fight.me.energy = 0;
            else if (g.fight.me.energy > g.fight.me.maxEnergy)
                g.fight.me.energy = g.fight.me.maxEnergy;
            g.st[i].t = g.fight.me.energy;
        }
        else if (g.st[i].n === "fitness") {
            if ((g.fight.me.punchCount + g.fight.me.kickCount) > 0) {
                g.st[i].t += (g.fight.me.punchCount + g.fight.me.kickCount);
                if (g.st[i].t > 100)
                    g.st[i] = 100;
                popUpText += "Fitness increased: " + (g.fight.me.punchCount + g.fight.me.kickCount) + "<br/>";
            }
        }
        else if (g.st[i].n === "leg") {
            if (g.fight.me.kickCount > 0) {
                g.st[i].t += (g.fight.me.kickCount * 2);
                if (g.st[i].t > 100)
                    g.st[i].t = 100;
                popUpText += "Your legs are stonger <br/>";
            }
        }
        else if (g.st[i].n === "body") {
            if (g.fight.me.punchCount > 0) {
                g.st[i].t += (g.fight.me.punchCount * 2);
                if (g.st[i].t > 100)
                    g.st[i].t = 100;
                popUpText += "Your arms are stonger <br/>";
            }
        }
        else if (g.st[i].n === "sissy") {
            if (g.fight.me.sissyAction > 0) {
                g.st[i].t += g.fight.me.sissyAction;
                if (g.st[i].t > 100)
                    g.st[i].t = 100;
                popUpText += "You are sluttier <br/>";
            }
        }
        else if (g.st[i].n === "d") {
            if (g.fight.me.goodBlockCount > 0) {
                g.st[i].t += g.fight.me.goodBlockCount;
                if (g.st[i].t > 100)
                    g.st[i].t = 100;
                popUpText += "Your defense increased <br/>";
            }
        }
        else if (g.st[i].n === "money") {
            if (money > 0) {
                g.st[i].t += money;
                if (g.st[i].t < 0)
                    g.st[i].t = 0;
                popUpText += "You earned $" + money + " <br/>";
                $('#char_money').text('$' + g.st[i].t);
            }
        }
    }

    if (popUpText.length > 0)
        g.popUpNotice(popUpText);
    char.makeGraph();
};

tEnemy.getActiveEnemy = function () {
    var i;
    for (i = 0; i < g.fight.e.length; i++) {
        if (g.fight.e[i].active) {
            return i;
        }
    }
    return 0;
}