var tEnemy = {};
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
tEnemy.init = function (enemyName, bg, thisRoomID, returnRoomID) {
    var retVar;
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
                pose: { i0: "227_fight/g_pose.png", i1: null, w: 716, h: 1080 },
                punch: { i0: "227_fight/g_punch.png", i1: null, w: 894, h: 1080 },
                kick: { i0: "227_fight/g_kick.png", i1: null, w: 1172, h: 1080 },
                block: { i0: "227_fight/g_block.png", i1: null, w: 680, h: 1080 },
                recoil: { i0: "227_fight/g_recoil.png", i1: null, w: 1212, h: 1080 },
                defeat: { i0: "227_fight/g_recoil.png", i1: null, w: 864, h: 1080 },
                avatar: "227_fight/g_avatar.png"
            }
            break;
        case "futaRed":
            charVar = {
                name: "futaRed",
                displayName: "Burlesque Clan",
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
                pose: { i0: "227_fight/r_pose.png", i1: null, w: 736, h: 1080 },
                punch: { i0: "227_fight/r_punch.png", i1: null, w: 970, h: 1046 },
                kick: { i0: "227_fight/r_kick.png", i1: null, w: 1331, h: 1080 },
                block: { i0: "227_fight/r_block.png", i1: null, w: 1200, h: 1080 },
                recoil: { i0: "227_fight/r_recoil.png", i1: null, w: 1375, h: 1080 },
                defeat: { i0: "227_fight/r_defeat.png", i1: null, w: 864, h: 1080 },
                avatar: "227_fight/r_avatar.png",
                loss: "Damn I've been bested!"
            };
            break;
        case "futaYellow":
            charVar = {
                name: "futaYellow",
                displayName: "Burlesque Clan",
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
                pose: { i0: "227_fight/y_pose.png", i1: null, w: 736, h: 1080 },
                punch: { i0: "227_fight/y_punch.png", i1: null, w: 970, h: 1046 },
                kick: { i0: "227_fight/y_kick.png", i1: null, w: 1331, h: 1080 },
                block: { i0: "227_fight/y_block.png", i1: null, w: 1200, h: 1080 },
                recoil: { i0: "227_fight/y_recoil.png", i1: null, w: 1375, h: 1080 },
                defeat: { i0: "227_fight/y_defeat.png", i1: null, w: 864, h: 1080 },
                avatar: "227_fight/y_avatar.png",
                loss: "I am your whore"
            };
            break;
        case "clownQueen":
            charVar = {
                name: "clownQueen",
                displayName: "Burlesque Clan Leader",
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
                cock: true,
                nextMove: "",
                undress: 1,
                eventStep: 9999,
                eventType: "",
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
            console.log("unkown char: " + enemyName + " in enemy.js");
            break;
    };
    retVar = {
        enemy: charVar,
        me: {
            energy: g.get("energy"),
            maxEnergy: g.get("maxenergy"),
            horny: g.get("arousal"),
            damage: 0,
            shield: 0 + Math.round(g.get("dLevel") / 2),
            evasion: Math.round(g.get("fitness")),
            pPower: 10 + Math.round(g.get("bodyLevel") / 2),
            kPower: 10 + Math.round(g.get("legLevel") / 2),
            punchCount: 0,
            kickCount: 0,
            goodBlockCount: 0,
            sissyAction: 0,
            prev1: null,
            prev2: null,
            nextMove: "",
        },
        chat: {
            text: "",
            btn1: "",
            btn2: ""
        },
        bg: bg,
        returnRoomID: returnRoomID,
        thisRoomID: thisRoomID
    };
   

    tEnemy.drawBackground(bg);
    tEnemy.drawRoom(retVar.enemy, retVar.me, thisRoomID);

    return retVar;
};

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
}

tEnemy.drawRoom = function (eArray, mArray, thisRoomID) {


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
            "name": "mystatus",
            "left": 1295,
            "top": 743,
            "width": 610,
            "height": 322,
            "image": "227_fight/enemy_status.png"
        },
        {
            "type": "zimg",
            "name": "charAvatar",
            "left": 1594,
            "top": 739,
            "width": 300,
            "height": 300,
            "image": eArray.avatar
        }
    ];
    $.each(btnListx, function (i, v) {
        nav.button(v, 227);
    });

    nav.text({
        type: "zimg",
        name: "charName",
        left: 1330,
        top: 963,
        font: 20,
        hex: "#ffffff",
        text: eArray.displayName
    });
    nav.text({
        type: "zimg",
        name: "name",
        left: 323,
        top: 963,
        font: 20,
        hex: "#ffffff",
        text: sc.n("me")
    });

    var thisEnergy = (eArray.energy / eArray.maxEnergy) * 280 * g.ratio;
    var thisHorney = (eArray.horny / 100) * 280 * g.ratio;
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 990, 1330) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 990, 1330) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 990, 1330) + '  background: #33ff33; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-horny" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1008, 1330) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-horny" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisHorney, 1008, 1330) + '  background: #edb7eb; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize enemy-horny" data-t="horny" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisHorney, 1008, 1330) + '  background: #E976E5; border-radius:10px;" ></div>');

    var myEnergy = (g.get("energy") / g.get("maxenergy")) * 280;
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 990, 310) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, myEnergy, 990, 310) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, myEnergy, 990, 310) + '  background: #33ff33; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize my-horny" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1008, 310) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-horny" data-t="horny" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 200, 1008, 310) + '  background: #edb7eb; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-horny" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 180, 1008, 310) + '  background: #E976E5; border-radius:10px;" ></div>');

    tEnemy.drawButtons("init", thisRoomID);
    tEnemy.drawEnemy(eArray, "pose");
    tEnemy.myClothesDraw();
};

tEnemy.drawButtons = function (btn, thisRoomID, eArray) {
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
    
    var btnListBtn = new Array();

    switch (btn) {
        case "init":
        case "cancel":
            btnListBtn = [
                { "name": "fight", "image": "227_fight/fight.png" },
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
                if (eArray.horny < 98) {
                    btnListBtn = [
                        { "name": "invalidBtn", "image": "227_fight/submitDisable.png" },
                        { "name": "tease", "image": "227_fight/tease.png" },
                        { "name": "invalidBtn", "image": "227_fight/undressDisable.png" },
                        { "name": "cancel", "image": "227_fight/cancel.png" }
                    ];
                }
                else {
                    btnListBtn = [
                        { "name": "submit", "image": "227_fight/submit.png" },
                        { "name": "tease", "image": "227_fight/tease.png" },
                        { "name": "invalidBtn", "image": "227_fight/undressDisable.png" },
                        { "name": "cancel", "image": "227_fight/cancel.png" }
                    ];
                }
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
        nav.button(v, thisRoomID);
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

tEnemy.drawEnemy = function (eArray, pose) {
    nav.killbutton("char");
    switch (pose) {
        case "pose":
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (eArray.pose.w / 2),
                "top": 1080 - eArray.pose.h,
                "width": eArray.pose.w,
                "height": eArray.pose.h,
                "image": eArray.undress === 0 ? eArray.pose.i0 : eArray.pose.i1
            }, 999);
            break;
        case "blockPunch":
        case "blockKick":
        case "block":
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (eArray.block.w / 2),
                "top": 1080 - eArray.block.h,
                "width": eArray.block.w,
                "height": eArray.block.h,
                "image": eArray.undress === 0 ? eArray.block.i0 : eArray.block.i1
            }, 9999);
            break;
        case "punch":
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (eArray.punch.w / 2),
                "top": 1080 - eArray.punch.h,
                "width": eArray.punch.w,
                "height": eArray.punch.h,
                "image": eArray.undress === 0 ? eArray.punch.i0 : eArray.punch.i1
            }, 9999);
            break;
        case "kick":
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (eArray.kick.w / 2),
                "top": 1080 - eArray.kick.h,
                "width": eArray.kick.w,
                "height": eArray.kick.h,
                "image": eArray.undress === 0 ? eArray.kick.i0 : eArray.kick.i1
            }, 9999);
            break;
        case "recoil":
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (eArray.recoil.w / 2),
                "top": 1080 - eArray.recoil.h,
                "width": eArray.recoil.w,
                "height": eArray.recoil.h,
                "image": eArray.undress === 0 ? eArray.recoil.i0 : eArray.recoil.i1
            }, 9999);
            break;
        case "defeat":
            nav.button({
                "type": "img",
                "name": "char",
                "left": 960 - (eArray.defeat.w / 2),
                "top": 1080 - eArray.defeat.h,
                "width": eArray.defeat.w,
                "height": eArray.defeat.h,
                "image": eArray.undress === 0 ? eArray.defeat.i0 : eArray.defeat.i1
            }, 9999);
            break;
        default:
            console.log("unable to find: " + pose + " pose");
            break;
    }

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

tEnemy.enemyEnergy = function (eArray, thisDamage) {


    var damageSustain = (eArray.energy / eArray.maxEnergy) * 280;
    var newEnergy = eArray.energy - thisDamage;

    if (newEnergy < 0)
        newEnergy = 0;
    if (newEnergy > eArray.maxEnergy)
        newEnergy = eArray.maxEnergy;

    newEnergyDisplay = (newEnergy / eArray.maxEnergy) * 280;

    $(".enemy-life[data-t='damage'").css({
        width: damageSustain * g.ratio + "px"
    });
    $(".enemy-life[data-t='energy'").css({
        width: newEnergyDisplay * g.ratio + "px"
    });
    return newEnergy;
};

tEnemy.myEnergy = function (mArray, thisDamage) {
    var damageSustain = (mArray.energy / mArray.maxEnergy) * 280;
    var newEnergy = mArray.energy - thisDamage;

    if (newEnergy < 0)
        newEnergy = 0;
    if (newEnergy > mArray.maxEnergy)
        newEnergy = mArray.maxEnergy;

    newEnergyDisplay = (newEnergy / mArray.maxEnergy) * 280;

    $(".my-life[data-t='damage'").css({
        width: damageSustain * g.ratio + "px"
    });
    $(".my-life[data-t='energy'").css({
        width: newEnergyDisplay * g.ratio + "px"
    });
    return newEnergy;
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
    var damageSustain = (mArray.energy / mArray.maxEnergy) * 280;
    var newEnergy = mArray.energy - thisDamage;

    if (newEnergy < 0)
        newEnergy = 0;
    if (newEnergy > mArray.maxEnergy)
        newEnergy = mArray.maxEnergy;

    newEnergyDisplay = (newEnergy / mArray.maxEnergy) * 280;

    $(".my-life[data-t='damage'").css({
        width: damageSustain * g.ratio + "px"
    });
    $(".my-life[data-t='energy'").css({
        width: newEnergyDisplay * g.ratio + "px"
    });
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

tEnemy.blindNextMove = function (eArray, mArray) {
    var moveChance = new Array();
    var returnMove = null;


    for (var i = 0; i < 10; i++) {
        if (i < eArray.bp)
            moveChance.push("punch");
        else if (i < eArray.bp + eArray.bk)
            moveChance.push("kick");
        else
            moveChance.push("b");
    }
    if (mArray.prev1 !== null && mArray.prev2 !== null) {
        if (Math.random() * 10 < 7) {
            if ((mArray.prev1 === "punch" && mArray.prev2 === "punch") || (mArray.prev1 === "kick" && mArray.prev2 === "punch"))
                returnMove = "blockPunch";
            else if ((mArray.prev2 === "kick" && mArray.prev2) || (mArray.prev1 === "punch" && mArray.prev2 === "kick"))
                returnMove = "blockKick";
            if (mArray.prev1 === "blockPunch" && mArray.prev2 === "blockPunch")
                returnMove = "kick";
            if (mArray.prev1 === "blockKick" && mArray.prev2 === "blockKick")
                returnMove = "punch";
        }
    }
    
    if (returnMove === null) {
        returnMove = moveChance[Math.floor(Math.random() * 10)];
    }
    if (returnMove === "b")
        returnMove = Math.floor(Math.random() * 2) === 0 ? "blockPunch" : "blockKick";
    return returnMove;
};

tEnemy.makeInventory = function () {
    var thisInv = new Array();
    var i, counter;
    counter = 0;
    inv.createElements();
    for (i = 0; i < inv.master.length; i++) {
        if ((inv.master[i].type === "e" || inv.master[i].type === "d") && inv.master[i].entry) {
            $('#menu-bg_' + counter).html('<img src="./images/inv/' + inv.master[i].image + '" class="menu-select fight-inventory" data-inv="' + inv.master[i].name + '" title="' + inv.master[i].display + '">');
            counter++;
        }
    }
    $(".fight-inventory").click(function () {
        tEnemy.displayInventory($(this).data("inv"));
    });
};

tEnemy.displayInventory = function (thisName) {
    var thisItem = inv.get(thisName);

    $('#menu_displayIcon').html('<img src="./images/inv/' + thisItem.image + '"/>');

    $("#menu_displayCost").html("");
    $("#menu_displayName").html(thisItem.display + ": " + thisItem.count);
    $('#menu_displayType').html(inv.gett(thisItem.type));
    $("#menu_displayDesc").html(thisItem.desc + (thisItem.type === "e" ? "" : "<br/> Item not in use yet."));
    //$("#menu_displayInfo").html("info");

    //$("#menu_displayUp").attr("data-price", thisItem.cost);
    //$("#menu_displayDown").attr("data-price", thisItem.cost);
    if (thisItem.type === "e") {
        $("#menu_displayAction").html("Use Item");
        $("#menu_displayAction").attr("data-itype", "tEnemy");
        $("#menu_displayAction").attr("data-name", thisName);
        $("#menu_displayAction").attr("data-type", thisItem.type);
        $("#menu_displayAction").show();
    }
    else {
        $("#menu_displayAction").hide();
    }
};

tEnemy.invClickCatch = function (thisName) {
    var i = inv.getIndex(thisName);
    if (inv.master[i].type === "e") {
        if (inv.master[i].count < 1) {
            g.popUpNotice("No " + inv.master[i].displayName + " in inventory.");
        }
        else {
            inv.master[i].count--;
            switch (thisName) {
                case "acia":
                    g.popUpNotice("You gained 15 energy");
                    room227.btnclick("energyUsed15");
                    break;
                case "soda":
                    g.internal.me.energy += 50;
                    g.popUpNotice("You gained 50 energy");
                    room227.btnclick("energyUsed50");
                    break;
                default:
                    g.popUpNotice("No " + inv.master[i].displayName + " in inventory.");
                    break;
            }
        }
    }
};

tEnemy.updatePlayerStats = function (mArray, money, win) {
    var i;
    var popUpText = "";
    console.log(mArray, money, win);
    for (i = 0; i < g.st.length; i++) {
        if (g.st[i].n === "energy") {
            if (mArray.energy < 0)
                mArray.energy = 0;
            else if (mArray.energy > mArray.maxEnergy)
                mArray.energy = mArray.maxEnergy;
            g.st[i].t = mArray.energy;
        }
        else if (g.st[i].n === "fitness") {
            g.st[i].t += (mArray.punchCount + mArray.kickCount);
            if (g.st[i].t > 100)
                g.st[i] = 100;
            if ((mArray.punchCount + mArray.kickCount) > 0)
                popUpText += "Fitness increased: " + (mArray.punchCount + mArray.kickCount) + "<br/>";
        }
        else if (g.st[i].n === "leg") {
            g.st[i].t += (mArray.kickCount * 2);
            if (g.st[i].t > 100)
                g.st[i].t = 100;
            if (mArray.kickCount > 0)
                popUpText += "Your legs are stonger <br/>";
        }
        else if (g.st[i].n === "body") {
            g.st[i].t += (mArray.punchCount * 2);
            if (g.st[i].t > 100)
                g.st[i].t = 100;
            if (mArray.punchCount > 0)
                popUpText += "Your arms are stonger <br/>";
        }
        else if (g.st[i].n === "sissy") {
            g.st[i].t += mArray.sissyAction;
            if (g.st[i].t > 100)
                g.st[i].t = 100;
            if (mArray.sissyAction > 0)
                popUpText += "You are sluttier <br/>";
        }
        else if (g.st[i].n === "d") {
            g.st[i].t += mArray.goodBlockCount;
            if (g.st[i].t > 100)
                g.st[i].t = 100;
            if (mArray.goodBlockCount > 0)
                popUpText += "Your defense increased <br/>";
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