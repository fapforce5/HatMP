var tEnemy = {};
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------

//bimbo moves: a = shake ass, c = shake cock, d = dance 
tEnemy.init = function (e0, e1, bg, returnRoomID) {
    var enemyName = "sc";

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
            clothing: 2,
            pose: "pose",
            action: null,
            counterAction: null,
            p0: null,
            p1: null,
            p2: null,
            nextMove: "",
            nextMoveEnemy: null,
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
        fighttimer: g.get("fighttimer")
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
                bp: 5,
                bk: 4,
                bb: 1,
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
                undress: 2,
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
                horny: 45,
                arousalGrowth: 10,
                sheild: 0,
                pPower: 12,
                kPower: 8,
                defense: 0,
                bp: 2,
                bk: 2,
                bb: 6,
                clothingLevel: 0,
                money: 7 + Math.floor(Math.random() * 7),
                cock: true,
                nextMove: "",
                undress: 2,
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
                horny: 20,
                arousalGrowth: 8,
                sheild: 0,
                pPower: 10,
                kPower: 10,
                defense: 0,
                bp: 4,
                bk: 3,
                bb: 4,
                clothingLevel: 2,
                money: 50 + Math.floor(Math.random() * 50),
                cock: false,
                nextMove: "",
                undress: 1,
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
    var i;
    for (i = 0; i < btn.length; i++) {
        nav.button({
            "type": "zbtn",
            "name": btn[i],
            "left": 1500,
            "top": 200 + (i * 110),
            "width": 400,
            "height": 100,
            "image": "227_fight/" + btn[i] + ".png"
        }, 227);
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
            "name": btnListBtn[0].name,
            "left": 282,
            "top": 854,
            "width": 100,
            "height": 100,
            "image": btnListBtn[0].image
        },
        {
            "type": "zimg",
            "name": btnListBtn[1].name,
            "left": 239,
            "top": 749,
            "width": 100,
            "height": 100,
            "image": btnListBtn[1].image
        },
        {
            "type": "zimg",
            "name": btnListBtn[2].name,
            "left": 132,
            "top": 704,
            "width": 100,
            "height": 100,
            "image": btnListBtn[2].image
        },
        {
            "type": "zimg",
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

    topx = 860 - ((g.fight.e.length - 1) * 260);
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
            "image": "227_fight/" + v.base + "_avatar.png"
        });

        btnListx.push({
            "type": "zbtn",
            "name": "eaction" + i,
            "left": 1652,
            "top": topx - 9,
            "width": 100,
            "height": 100,
            "image": "227_fight/noop.png"
        });
        topx += 260;
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
    for (i = (g.fight.e.length - 1); i >= 0; i--) {
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
    //tEnemy.myClothesDraw();
};

tEnemy.drawStage = function () {
    var thisHair;
    //nav.bg("")
    

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
    switch (pose) {
        case "pose":
            thisHair = "0";
            break;
        case "punch":
            thisHair = "1";
            break;
        case "kick":
            thisHair = "2";
            break;
        case "recoil":
            thisHair = "3";
            break;
    }
    if (cl.c.hairLength > 2) {
        nav.button({
            "type": "img",
            "name": "me",
            "left": 420,
            "top": 0,
            "width": 1080,
            "height": 1080,
            "image": "227_fight/h_" + thisHair + "_long_back.png"
        }, 227);
    }
    nav.button({
        "type": "img",
        "name": "me",
        "left": 420,
        "top": 0,
        "width": 1080,
        "height": 1080,
        "image": "227_fight/g_" + pose + "_" + (cl.c.chest < 3 ? "m" : "f") + ".png"
    }, 227);

    nav.button({
        "type": "img",
        "name": "me",
        "left": 420,
        "top": 0,
        "width": 1080,
        "height": 1080,
        "image": "227_fight/h_" + thisHair + "_" + (cl.c.hairLength < 3 ? "short" : "long") + ".png"
    }, 227);
};

tEnemy.getEnemyAction = function () {
    var t = tEnemy.getEnemyActionSub();
    var enemyAction = null;
    var enemyCounteraction = null;
    if (g.fight.me.action === "punch") {
        if (Math.random() * 8 < t.punch) {
            enemyCounteraction = "block";
        }
    }
    else if (g.fight.me.action === "kick") {
        if (Math.random() * 8 < t.kick) {
            enemyCounteraction = "block";
        }
    }
    
};


tEnemy.getEnemyActionSub = function () {
    var taction = { punch: 0, kick: 0, blockpunch: 0, blockkick: 0, horny: 0 };

    if (g.fight.me.p0 !== null) {
        switch (g.fight.me.p0) {
            case "punch":
                taction.punch += 3;
                break;
            case "kick":
                taction.kick += 3;
                break;
            case "blockpunch":
                taction.blockpunch += 3;
                break;
            case "blockkick":
                taction.blockkick += 3;
                break;
            default:
                taction.horny += 3;
                break;
        }
    }

    if (g.fight.me.p1 !== null) {
        switch (g.fight.me.p1) {
            case "punch":
                taction.punch += 2;
                break;
            case "kick":
                taction.kick += 2;
                break;
            case "blockpunch":
                taction.blockpunch += 2;
                break;
            case "blockkick":
                taction.blockkick += 2;
                break;
            default:
                taction.horny += 2;
                break;
        }
    }

    if (g.fight.me.p2 !== null) {
        switch (g.fight.me.p2) {
            case "punch":
                taction.punch += 1;
                break;
            case "kick":
                taction.kick += 1;
                break;
            case "blockpunch":
                taction.blockpunch += 1;
                break;
            case "blockkick":
                taction.blockkick += 1;
                break;
            default:
                taction.horny += 1;
                break;
        }
    }

    return taction;
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