var tEnemy = {};
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------

//bimbo moves: a = shake ass, c = shake cock, d = dance 
tEnemy.init = function (e0, e1, bg, returnRoomID) {
    eax = new Array();

    e0x = tEnemy.initEnemy(e0);
    e1x = tEnemy.initEnemy(e1);

    if (e0x !== null)
        eax.push(e0x);
    if (e1x !== null)
        eax.push(e1x);

    g.fight = {
        enemayCount: eax.length,
        e: eax,
        box: ["b", "b", "b", "h", "1", "1", "1", "1", "2", "2"],
        cPower: 0,
        me: {
            energy: g.get("energy"),
            maxEnergy: g.get("maxenergy"),
            damage: 0,
            shield: g.get("dLevel"),
            evasion: Math.round(g.get("fitness")),
            pPower: 7 + Math.round(g.get("bodyLevel") / 2),
            kPower: 7 + Math.round(g.get("legLevel") / 2),
            punchCount: 0,
            kickCount: 0,
            goodBlockCount: 0,
            sissyAction: 0,
            pose: "pose",
            action: null,
            counterAction: null,
            p0: null,
            p1: null,
            p2: null,
            nextMove: "",
            nextMoveEnemy: null,
            clothes: tEnemy.clothes(),
            panties: cl.c.panties !== null
        },
        chat: {
            text: "",
            btn1: "",
            btn2: ""
        },
        bg: bg,
        returnRoomID: returnRoomID,
        lock: false,
        enemyRotation: 0,
        fighttimer: 1250// g.get("fighttimer")
    };

    nav.t({
        type: "zimg",
        name: "name",
        left: 323,
        top: 963,
        font: 20,
        hex: "#ffffff",
        text: sc.n("me")
    });

    tEnemy.drawRoom();
};

tEnemy.clothes = function () {
    if (cl.c.dress === null && cl.c.pants === null && cl.c.shirt === null && cl.c.pj === null && cl.c.swimsuit === null)
        return null;
    return cl.isCrossdressing() ? "f" : "m";
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
                sheild: 0,
                pPower: 10,
                kPower: 12,
                defense: .5,
                offense: ["p", "k"],
                clothingLevel: 1,
                money: 20 + Math.floor(Math.random() * 20),
                cock: false,
                nextMove: "",
                undress: 2,
                eventStep: 9999,
                eventType: "",
                p: "pose",
                myaction: "noop",
                prev1: null,
                prev2: null,
                base: "sc",
                loss: "Damn I've been bested!",
                win: "You need to work out more and stop being such a loser.",
                submit: "You pathitic bitch. I'm tired of fighting you, I'm just going to fuck you."
            };
            break;
        case "futaRed":
            charVar = {
                name: "futaRed",
                displayName: "Clown Clan",
                energy: 30,
                maxEnergy: 30,
                sheild: 0,
                pPower: 5,
                kPower: 20,
                defense: 0,
                offense: ["p", "p", "k", "g"],
                clothingLevel: 0,
                money: 5 + Math.floor(Math.random() * 5),
                cock: true,
                nextMove: "",
                eventStep: 9999,
                eventType: "",
                p: "pose",
                myaction: "noop",
                prev1: null,
                prev2: null,
                base: "sc",
                loss: "Damn I've been bested!",
                win: "This time I kicked your ass, next time I may fuck your ass.",
                submit: "You know what they say about red heads... They love to fuck sissy sluts!"
            };
            break;
        case "futaYellow":
            charVar = {
                name: "futaYellow",
                displayName: "Clown Clan",
                energy: 50,
                maxEnergy: 50,
                sheild: 0,
                pPower: 12,
                kPower: 8,
                defense: 0,
                offense: ["p", "k", "g", "g"],
                clothingLevel: 0,
                money: 7 + Math.floor(Math.random() * 7),
                cock: true,
                nextMove: "",
                eventStep: 9999,
                eventType: "",
                p: "pose",
                myaction: "noop",
                prev1: null,
                prev2: null,
                base: "sc",
                loss: "I am defeated. Use me however you want...",
                win: "Only a fool thinks they can win against me.",
                submit: "Have you ever tasted girl cock slut? I'm going to fuck you so good you'll only want girl cock in you!"
            };
            break;
        case "sc":
            charVar = {
                name: "clownQueen",
                displayName: "Clown Clan Leader",
                energy: 100,
                maxEnergy: 100,
                sheild: 0,
                pPower: 10,
                kPower: 10,
                defense: 0,
                offense: ["g"],//["p", "k", "k", "k", "g"],
                clothingLevel: 2,
                money: 50 + Math.floor(Math.random() * 50),
                cock: false,
                nextMove: "",
                eventStep: 9999,
                eventType: "",
                p: "pose",
                myaction: "noop",
                prev1: null,
                prev2: null,
                base: "f_sc",
                loss: "HONK.. damn....",
                win: "HAHAHAHAHAHAHAHAHA It's funny how you lose HONK",
                submit: "HONK HONK SLUT HONK"
            };
            break;
        default:
            charVar = null;
            break;
    }
    nav.button({
        "type": "img",
        "name": "e0",
        "left": 420,
        "top": 0,
        "width": 1080,
        "height": 1080,
        "image": "227_fight/f_sc_frontpose.png"
    }, 227);
    return charVar;
};

tEnemy.drawBackground = function (bg) {
    switch (bg) {
        case "gym":
            nav.bg("555_backgym/ring.jpg");
            break;
        case "sewer":
            nav.bg("227_fight/sewer.jpg");
            break;
        default:
            console.log("Unkown BG: " + bg + " in enemy");
            break;
    }
};

tEnemy.drawButtonList = function (btn) {
    $('.room-btn').each(function () {
        if ($(this).data('name').includes("lb_")) {
            $(this).remove();
        }
    });
    $('.room-zindex').each(function () {
        if ($(this).attr("data-name") !== undefined) {
            if ($(this).data('name').includes("lb_")) {
                $(this).remove();
            }
        }
    });
    var i;
    for (i = 0; i < btn.length; i++) {
        if (btn[i].startsWith("lb_header")) {
            nav.button({
                "type": "zimg",
                "name": btn[i],
                "left": 1500,
                "top": 120 + (i * 110),
                "width": 400,
                "height": 100,
                "image": "227_fight/" + btn[i] + ".png"
            }, 227);
        }
        else {
            nav.button({
                "type": "zbtn",
                "name": btn[i],
                "left": 1500,
                "top": 120 + (i * 110),
                "width": 400,
                "height": 100,
                "image": "227_fight/" + btn[i] + ".png"
            }, 227);
        }
    }
};

tEnemy.drawEnemyActionSubClear = function(){
    $('.room-btn').each(function () {
        if ($(this).data('name').includes("lb_"))
            $(this).remove();
    });
};

tEnemy.drawButtons = function (btn) {

    var btnListBtn = new Array();
    var thisClothing = cl.wearing();

    if (thisClothing.top)
        btnListBtn.push({ "name": "myshirt", "image": "227_fight/shirt.png" });
    else
        btnListBtn.push({ "name": "myshirt", "image": "227_fight/shirtDisable.png" });

    if (thisClothing.bottom)
        btnListBtn.push({ "name": "myskirt", "image": "227_fight/skirt.png" });
    else
        btnListBtn.push({ "name": "myskirt", "image": "227_fight/skirtDisable.png" });

    if (thisClothing.underwear)
        btnListBtn.push({ "name": "mypanties", "image": "227_fight/panties.png" });
    else
        btnListBtn.push({ "name": "mypanties", "image": "227_fight/pantiesDisable.png" });

    if (cl.c.chastity !== null || cl.c.cock > 2)
        btnListBtn.push({ "name": "mycock", "image": "227_fight/cockDisable.png" });
    else
        btnListBtn.push({ "name": "mycock", "image": "227_fight/cock.png" });

    btnListBtnDraw = [
        {
            "type": "zimg",
            "name": "myshirt",
            "left": 190,
            "top": 1025,
            "width": 50,
            "height": 50,
            "image": btnListBtn[0].image
        },
        {
            "type": "zimg",
            "name": "myskirt",
            "left": 190 + 60,
            "top": 1025,
            "width": 50,
            "height": 50,
            "image": btnListBtn[1].image
        },
        {
            "type": "zimg",
            "name": "mypanties",
            "left": 190 + 120,
            "top": 1025,
            "width": 50,
            "height": 50,
            "image": btnListBtn[2].image
        },
        {
            "type": "zimg",
            "name": "mycock",
            "left": 190 + 180,
            "top": 1025,
            "width": 50,
            "height": 50,
            "image": btnListBtn[3].image
        }
    ];

    $.each(btnListBtnDraw, function (i, v) {
        nav.button(v, g.fight.thisRoomID);
    });
};

tEnemy.drawRoom = function () {
    var thisEnergy;

    var btnListx = [
        {
            "type": "zimg",
            "name": "bottom",
            "left": 0,
            "top": 902,
            "width": 1920,
            "height": 178,
            "image": "227_fight/bottom.png"
        },
        {
            "type": "img",
            "name": "pow",
            "left": 840,
            "top": 0,
            "width": 1080,
            "height": 1080,
            "image": "227_fight/blank.png"
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

    if (g.fight.e[0].clothingLevel > 1) {
        btnListx.push({
            "type": "zimg",
            "name": "enemyClothes",
            "left": 1680 - 120,
            "top": 1025,
            "width": 50,
            "height": 50,
            "image": "227_fight/shirt.png"
        });
        btnListx.push({
            "type": "zimg",
            "name": "enemyClothes",
            "left": 1680 - 60,
            "top": 1025,
            "width": 50,
            "height": 50,
            "image": "227_fight/skirt.png"
        });
    }
    if (g.fight.e[0].clothingLevel > 0) {
        btnListx.push({
            "type": "zimg",
            "name": "enemyClothes",
            "left": 1680,
            "top": 1025,
            "width": 50,
            "height": 50,
            "image": "227_fight/panties.png"
        });
    }

    $.each(btnListx, function (i, v) {
        nav.button(v, 227);
    });


    nav.t({
        type: "zimg",
        name: "name",
        left: 190,
        top: 985,
        font: 20,
        hex: "#ffffff",
        text: sc.n("me")
    });

    thisEnergy = (g.fight.me.energy / g.fight.me.maxEnergy) * 280 * g.ratio;
    //thisHorney = (g.fight.me.horny / 100) * 280 * g.ratio;

    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1010, 190) + '  background: #333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="damage" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 1010, 190) + '  background: #ff3333; border-radius:10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-life" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 1010, 190) + '  background: #33ff33; border-radius:10px;" ></div>');

    $('#room-buttons').append('<div class="room-img room-zindex resize my-hornyx" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1060, 680) + '  background: #333; border-radius:10px 0 0 10px;" ></div>');
    $('#room-buttons').append('<div class="room-img room-zindex resize my-horny" data-t="horny" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 0, 1060, 680) + '  background: #E976E5; border-radius:10px 0 0 10px;" ></div>');

    for (i = (g.fight.e.length - 1); i >= 0; i--) {
        thisEnergy = (g.fight.e[i].energy / g.fight.e[i].maxEnergy) * 280;
        //thisHorney = (g.fight.e[i].horny / 100) * 280 * g.ratio;
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life' + i + '" data-name="myenergybase' + i + '" data-room="9999" style=" ' + g.makeCss(10, 280, 1010, 1450) + '  background: #333; border-radius:10px;" ></div>');
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life' + i + '" data-t="damage" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 1010, 1450) + '  background: #ff3333; border-radius:10px;" ></div>');
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-life' + i + '" data-t="energy" data-room="9999" style=" ' + g.makeCss(10, thisEnergy, 1010, 1450) + '  background: #33ff33; border-radius:10px;" ></div>');

        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-hornyx' + i + '" data-name="myhorneybase' + i + '" data-room="9999" style=" ' + g.makeCss(10, 280, 1060, 960) + '  background: #333; border-radius:0 10px 10px 0;" ></div>');
        $('#room-buttons').append('<div class="room-img room-zindex resize enemy-horny' + i + '" data-t="horny" data-room="9999" style=" ' + g.makeCss(10, 0, 1060, 960) + '  background: #edb7eb; border-radius:0 10px 10px 0;" ></div>');

        nav.t({
            type: "zimg",
            name: "charName",
            left: 1450,
            top: 985,
            font: 20,
            hex: "#ffffff",
            text: g.fight.e[i].displayName
        });
    }
    //tEnemy.drawButtons("init", thisRoomID);
    //tEnemy.myClothesDraw();
};

tEnemy.drawBox = function () {
    var i, j;
    j = g.fight.box.length;
    for (i = 0; i < j; i++) {
        var k = Math.floor(Math.random() * j);
        var l = g.fight.box[i];
        g.fight.box[i] = g.fight.box[k];
        g.fight.box[k] = l;
    }
    for (i = 0; i < j; i++) {
        nav.button({
            "type": "btn",
            "name": "box" + i,
            "left": 400 + (i * 120),
            "top": 400,
            "width": 100,
            "height": 100,
            "image": "227_fight/box.png"
        }, 227);
    }
};

tEnemy.selectBox = function (box) {
    var i, retvalue;
    var boxentry = parseInt(box.substring(3));
    var img = "";
    for (i = 0; i < g.fight.box.length; i++) {
        nav.killbutton("box" + i);
    }

    switch (g.fight.box[boxentry]) {
        case "b":
            img = "box_block";
            retvalue = .1;
            break;
        case "h":
            img = "box_half";
            retvalue = .5;
            break;
        case "1":
            img = "box_one";
            retvalue = 1;
            break;
        case "2":
            img = "box_two";
            retvalue = 2;
            break;
    }

    nav.button({
        "type": "img",
        "name": "box",
        "left": 400 + (boxentry * 120),
        "top": 400,
        "width": 100,
        "height": 100,
        "image": "227_fight/" + img + ".png"
    }, 227);
    return retvalue;
};

tEnemy.drawStage = function () {
    var thisHair;
    //nav.bg("")

    var i;
    for (i = 0; i < 5; i++) {
        nav.button({
            "type": "img",
            "name": "me" + i,
            "left": 420,
            "top": 0,
            "width": 1080,
            "height": 1080,
            "image": "227_fight/blank.png"
        }, 227);
    }

    for (i = 0; i < g.fight.e.length; i++) {
        nav.button({
            "type": "img",
            "name": "enemy",
            "left": 0 + (i * 840),
            "top": 0,
            "width": 1080,
            "height": 1080,
            "image": "227_fight/" + g.fight.e[i].base + "_" + g.fight.e[i].p + "_" + g.fight.e[i].clothingLevel + ".png"
        }, 227);
    }
    tEnemy.drawEnemy();
    tEnemy.drawChar("pose");
};

tEnemy.drawEnemy = function (pose) {
    nav.killbutton("enemy");
    //if (g.fight.e[0].p === "strip")
    //    g.fight.e[0].p = "punch";
    for (i = 0; i < g.fight.e.length; i++) {
        nav.button({
            "type": "img",
            "name": "enemy",
            "left": 0 + (i * 840),
            "top": 0,
            "width": 1080,
            "height": 1080,
            "image": "227_fight/" + g.fight.e[i].base + "_" + g.fight.e[i].p + "_" + g.fight.e[i].clothingLevel + ".png"
        }, 227);
    }
};

tEnemy.drawChar = function (pose) {
    nav.killbutton("me");
    var thischar = { body: "blank", hair: "blank", clothes: "blank", panties: "blank", dick: "blank", displayc: false, fif: null };
    switch (pose) {
        case "pose":
            thischar.body = cl.c.chest > 2 ? "g_pose_f" : "g_pose_m";
            thischar.dick = "g_block";
            thischar.hair = "0";
            thischar.displayc = true;
            thischar.fif = null;
            break;
        case "block":
            thischar.body = cl.c.chest > 2 ? "g_block_f" : "g_block_m";
            thischar.dick = "g_block";
            thischar.displayc = true;
            thischar.hair = "4";
            thischar.fif = null;
            break;
        case "acia":
        case "soda":
        case "cumjar":
            thischar.body = cl.c.chest > 2 ? "g_block_f" : "g_block_m";
            thischar.dick = "g_block";
            thischar.displayc = true;
            thischar.hair = "4";
            thischar.fif = "g_" + pose;
            break;
        case "punch":
            thischar.body = cl.c.chest > 2 ? "g_punch_f" : "g_punch_m";
            thischar.dick = "g_punch";
            thischar.displayc = true;
            thischar.hair = "1";
            thischar.fif = null;
            break;
        case "kick":
            thischar.body = cl.c.chest > 2 ? "g_kick_f" : "g_kick_m";
            thischar.dick = "g_kick";
            thischar.displayc = true;
            thischar.hair = "2";
            thischar.fif = null;
            break;
        case "recoil":
            thischar.body = cl.c.chest > 2 ? "g_recoil_f" : "g_recoil_m";
            thischar.dick = "g_recoil";
            thischar.displayc = true;
            thischar.hair = "3";
            thischar.fif = null;
            break;
        case "bjpose":
            thischar.body = cl.c.chest > 2 ? "g_bjpose_f" : "g_bjpose_m";
            thischar.dick = "g_bjpose";
            thischar.displayc = true;
            thischar.hair = "6";
            thischar.fif = null;
            break;
        case "asspose":
            thischar.body = cl.c.chest > 2 ? "g_asspose" : "g_asspose";
            thischar.dick = "g_asspose";
            thischar.displayc = true;
            thischar.hair = "7";
            thischar.fif = null;
            break;
        case "stripclothes":
            if (g.fight.me.clothes !== null) {
                g.fight.me.clothes = null;
                cl.c.pants = cl.c.shirt = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
                thischar.body = cl.c.chest > 2 ? "g_stripclothes_f" : "g_stripclothes_m";
                thischar.dick = null;
                thischar.displayc = true;
                thischar.hair = null;
            }
            else {
                g.fight.me.panties = false;
                cl.c.panties = cl.c.bra = null;
                thischar.body = "g_strippanties";
                thischar.dick = null;
                thischar.displayc = true;
                thischar.hair = "5";
            }
            thischar.fif = null;
            cl.display();
            break;
        case "striprip":
            if (g.fight.me.clothes !== null) {
                g.fight.me.clothes = null;
                cl.c.pants = cl.c.shirt = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
                thischar.body = cl.c.chest > 2 ? "g_stripripclothes_f" : "g_stripripclothes_m";
                thischar.dick = "g_stripripclothes";
                thischar.displayc = true;
                thischar.hair = "8";
            }
            else {
                g.fight.me.panties = false;
                thischar.body = cl.c.chest > 2 ? "g_striprippanties_f" : "g_striprippanties_m";
                thischar.hair = "8";
                thischar.dick = null;
                thischar.displayc = false;
            }
            break;
        case "bent":
            thischar.body = cl.c.chest > 2 ? "g_bent_f" : "g_bent_m";
            thischar.displayc = false;
            thischar.hair = "9";
            break;
    }
    if (thischar.displayc) {
        if (g.fight.me.clothes === "m" || g.fight.me.clothes === "f")
            thischar.clothes = thischar.body + (g.fight.me.clothes === "f" ? "_d" : "_t");
        else if (g.fight.me.panties)
            thischar.clothes = thischar.body + "_p";
        else if (thischar.dick !== null) {
            if (cl.c.chastity !== null)
                thischar.clothes = thischar.dick + "_d_c";
            else if (cl.c.cock < 3)
                thischar.clothes = thischar.dick + "_d_b";
            else
                thischar.clothes = thischar.dick + "_d_s";
        }
    }
    
    var hl = cl.c.hairLength > 2 ? "_long" : "_short";
    //back of hair

    if (thischar.hair !== null) {
        if (cl.c.hairLength > 2)
            nav.modbutton("me0", "227_fight/h_" + thischar.hair + "_long_back.png", null, null);
        else
            nav.modbutton("me0", "227_fight/blank.png", null, null);
    }
    else
        nav.modbutton("me0", "227_fight/blank.png", null, null);
    //body
    nav.modbutton("me1", "227_fight/" + thischar.body + ".png", null, null);

    //clothing
    nav.modbutton("me2", "227_fight/" + thischar.clothes + ".png", null, null);

    //hair
    if (thischar.hair !== null) {
        nav.modbutton("me3", "227_fight/h_" + thischar.hair + hl + ".png", null, null);
    }
    else
        nav.modbutton("me3", "227_fight/blank.png", null, null);

    //extra
    if (thischar.fif === null) {
        nav.modbutton("me4", "227_fight/blank.png", null, null);
    }
    else {
        nav.modbutton("me4", "227_fight/" + thischar.fif +".png", null, null);
    }
};

tEnemy.successfulBlock = function () {
    var blockChance = 10;
    if (g.fight.me.action === "punch" || g.fight.me.action === "kick") {
        if (g.fight.me.p0 === g.fight.me.action)
            blockChance += 40;
        if (g.fight.me.p1 === g.fight.me.action)
            blockChance += 25;
        if (g.fight.me.p2 === g.fight.me.action)
            blockChance += 15;
    }
    return Math.random() * 100 > blockChance;
};

tEnemy.getControl = function (action) {
    switch (action) {
        case "punch":
        case "kick":
            return 10;
        case "grapple":
            return 50;
        case "strip":
            return 25;
        default:
            return 0;
    }
};

tEnemy.getEnemyAction = function () {
    var p, c;
    var entry = g.fight.e[0].offense[Math.floor(Math.random() * g.fight.e[0].offense.length)];
    switch (entry) {
        case "p":
            g.fight.e[0].p = "punch";
            p = g.fight.e[0].pPower;
            c = tEnemy.getControl("punch");
            break;
        case "k":
            g.fight.e[0].p = "kick";
            p = g.fight.e[0].kPower;
            c = tEnemy.getControl("kick");
            break;
        case "g":
            p = Math.round((g.fight.e[0].kPower + g.fight.e[0].pPower) / 4);
            if (g.fight.me.clothes === null && !g.fight.me.panties) {
                c = tEnemy.getControl("grapple");
                g.fight.e[0].p = "grapple";
            }
            else {
                c = tEnemy.getControl("strip");
                g.fight.e[0].p = "strip";
            }
            break;
        default:
            alert("error in get enemy action");
            break;
    }

    return {a: g.fight.e[0].p, p: p, c: c };
};

tEnemy.changeEnergy = function (myEnergy, enemyEnergy, controlChange) {
    var prevEnergy, newEnergy;
    if (myEnergy !== null) {
        prevEnergy = g.fight.me.energy;
        g.fight.me.energy += myEnergy;
        if (g.fight.me.energy < 0)
            g.fight.me.energy = 0;
        else if (g.fight.me.energy > g.fight.me.maxEnergy)
            g.fight.me.energy = g.fight.me.maxEnergy;

        prevEnergy = (prevEnergy / g.fight.me.maxEnergy) * 280;
        newEnergy = (g.fight.me.energy / g.fight.me.maxEnergy) * 280;
        $(".my-life[data-t='damage']").css({
            width: prevEnergy * g.ratio + "px"
        });
        $(".my-life[data-t='energy']").css({
            width: newEnergy * g.ratio + "px"
        });
    }
    if (enemyEnergy !== null) {
        prevEnergy = g.fight.e[0].energy;
        g.fight.e[0].energy += enemyEnergy;
        if (g.fight.e[0].energy < 0)
            g.fight.e[0].energy = 0;
        else if (g.fight.e[0].energy > g.fight.e[0].maxEnergy)
            g.fight.e[0].energy = g.fight.e[0].maxEnergy;

        prevEnergy = (prevEnergy / g.fight.e[0].maxEnergy) * 280;
        newEnergy = (g.fight.e[0].energy / g.fight.e[0].maxEnergy) * 280;
        $(".enemy-life0[data-t='damage']").css({
            width: prevEnergy * g.ratio + "px"
        });
        $(".enemy-life0[data-t='energy']").css({
            width: newEnergy * g.ratio + "px"
        });
    }
    if (controlChange !== null) {
        prevEnergy = g.fight.cPower;
        g.fight.cPower += controlChange;

        if (g.fight.cPower > 100)
            g.fight.cPower = 100;
        else if (g.fight.cPower < -100)
            g.fight.cPower = -100;

        if (g.fight.cPower > 0) {
            $(".enemy-horny0").css({
                width: (g.fight.cPower / 100) * g.ratio * 280 + "px"
            });
            $(".my-horny").css({
                width: "0px"
            });
        }
        else if (g.fight.cPower < 0) {
            var cpowWidth = (g.fight.cPower / 100) * g.ratio * (-280);
            $(".my-horny").css({
                width: cpowWidth + "px",
                left: (960 * g.ratio) - cpowWidth + "px"
            });
            $(".enemy-horny0").css({
                width: "0px"
            });
        }
    }
};

tEnemy.updatePlayerStats = function (money) {

    /*
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
    */
};