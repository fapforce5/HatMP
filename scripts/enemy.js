var tEnemy = {};
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------
//add difficulty -------------------------------------------------------------

//bimbo moves: a = shake ass, c = shake cock, d = dance 
tEnemy.getPunch = function () { return Math.round((7 + (gv.get("bodyLevel") / 2)) * tEnemy.getPKDiff()); };
tEnemy.getKick = function () { return Math.round((7 + Math.round(gv.get("legLevel") / 2)) * tEnemy.getPKDiff()); };
tEnemy.getDefense = function () { return Math.round((gv.get("dLevel") / 3) * tEnemy.getPKDiff()); };
tEnemy.getPKDiff = function () {
    var pk = gv.get("difficulty");
    if (pk === 0)
        return 2;
    else if (pk === 1)
        return 1;
    else
        return .75;
};

tEnemy.init = function (e0, e1, bg, returnRoomID, callingRoomID) {
    eax = new Array();

    e0x = tEnemy.initEnemy(e0);
    e1x = tEnemy.initEnemy(e1);

    if (e0x !== null)
        eax.push(e0x);
    if (e1x !== null)
        eax.push(e1x);

    var subdomMult = gv.get("subdom") - 50;
    subdomMult = (subdomMult / 50);
    if (subdomMult < 0)
        subdomMult -= 1;
    else
        subdomMult += 1;

    g.fight = {
        enemayCount: eax.length,
        e: eax,
        box: ["b", "b", "b", "h", "1", "1", "1", "1", "2", "2"],
        grappleBox: [true, true, false],
        cPower: 0,
        prevMenu: "",
        subdom: subdomMult,
        me: {
            energy: gv.get("energy"),
            maxEnergy: gv.get("maxenergy"),
            damage: 0,
            shield: gv.get("dLevel"),
            evasion: Math.round(gv.get("fitness")),
            pPower: tEnemy.getPunch(),
            kPower: tEnemy.getKick(),
            def: tEnemy.getDefense(),
            punchCount: 0,
            kickCount: 0,
            grappleCount: 0,
            superPunch: gv.get("superPunch"),
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
            panties: cl.c.panties !== null,
        },
        chat: {
            text: "",
            btn1: "",
            btn2: ""
        },
        bg: bg,
        returnRoomID: returnRoomID,
        callingRoomID: callingRoomID,
        lock: false,
        enemyRotation: 0,
        fighttimer: gv.get("fightspeed"),
        fightsex: gv.get("fightsex")
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
    tEnemy.drawBackground(bg);
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
        case "m":
            charVar = {
                name: "m",
                displayName: "Mimic",
                energy: 20,
                maxEnergy: 20,
                pPower: 40,
                kPower: 40,
                offense: ["p", "k"],
                clothingLevel: 0,
                money: 300 + Math.floor(Math.random() * 500),
                p: "pose",
                weakspot: [3],
                base: "am",
                grapple: "",
                domination: { pose: "kneel", pose1: "kneel", gif: "gif_pussylick.gif", gif1: "png_pussylick.png", stats: ["giveOralFemale"] },
                domEnemy: [ ],
                intro: "Roar Mnknknk ",
                loss: "Blech",
                win: "MekjkieME mEMMEME OF",
                submit: ""
            };
            break;
        case "g":
            charVar = {
                name: "g",
                displayName: "Gertrude",
                energy: 500,
                maxEnergy: 500,
                pPower: 30,
                kPower: 50,
                offense: ["p", "p", "p", "k", "k", "k", "g"],
                clothingLevel: 1,
                money: 300 + Math.floor(Math.random() * 500),
                p: "pose",
                weakspot: [8],
                base: "f_g",
                grapple: "hair_18",
                domination: { pose: "kneel", pose1: "kneel", gif: "gif_pussylick.gif", gif1: "png_pussylick.png", stats: ["giveOralFemale"] },
                domEnemy: [
                    { lbl: "lb_domfacefuck", p: "facefuck", p1: "facefuck1", pose: "upsidedowng", pose1: "upsidedowng", gif: "gif_bj.gif", gif1: "png_bj.png", stats: ["giveOralFemale", "receiveOralFemale"] },
                    { lbl: "lb_domfist", p: "fist", p1: "fist1", pose: "assout", pose1: "assout", gif: "gif_fist.gif", gif1: "png_sissygasm.png", stats: ["sissygasm", "receiveFistFemale"] }
                ],
                intro: "A puny wimp like you has no chance!",
                loss: "I am such your slut!",
                win: "Only a fool thinks they can win against me.",
                submit: "You are a fucking  wimpy slut."
            };
            break;
        case "fr":
            charVar = {
                name: "futaRed",
                displayName: "Clown Clan",
                energy: 75,
                maxEnergy: 75,
                pPower: 5,
                kPower: 15,
                offense: ["k", "k", "k", "p", "g", "g", "g"],
                clothingLevel: 1,
                money: 7 + Math.floor(Math.random() * 7),
                p: "pose",
                weakspot: [7],
                base: "f_fr",
                grapple: "defeat",
                domination: { pose: "lick", pose1: "lick", gif: "gif_bootlicker.gif", gif1: "png_cummouth.png", stats: ["loadSwollowed", "footLicker"] },
                domEnemy: [
                    { lbl: "lb_domPowerbottom", p: "powerbottom", p1: "powerbottom1", pose: "rcowgirl", pose1: "rcowgirl1", gif: "gif_rcowgirl.gif", gif1: "png_rcowgirl.png", status: [""] },
                    { lbl: "lb_domFoot", p: "foot", p1: "foot1", pose: "blank", pose1: "blank", gif: "gif_heel.gif", gif1: "png_heel.png", status: [""] }
                ],
                intro: "Look at my cock and fear me!",
                loss: "I really wanted to taste your feet...",
                win: "Only a fool thinks they can win against me.",
                submit: "I love a powerful slut!"
            };
            break;
        case "fy":
            charVar = {
                name: "futaYellow",
                displayName: "Clown Clan",
                energy: 75,
                maxEnergy: 75,
                pPower: 15,
                kPower: 5,
                offense: ["k", "p", "p", "p", "g", "g", "g"],
                clothingLevel: 2,
                money: 7 + Math.floor(Math.random() * 7),
                p: "pose",
                weakspot: [8],
                base: "f_fy",
                grapple: "fysubmit",
                domination: { pose: "takeit", pose1: "takeit1", gif: "gif_anal.gif", gif1: "png_anal.png", stats: ["receiveAnalMale", "creamPied"] },
                domEnemy: [
                    { lbl: "lb_domFuckem", p: "fuck", p1: "fuck1", pose: "fuck", pose1: "fuck1", gif: "gif_anal.gif", gif1: "png_anal.png", stats: ["giveAnalMale"] },
                    { lbl: "lb_domPowerbottom", p: "powerbottom", p1: "powerbottom1", pose: "takeit", pose1: "takeit1", gif: "gif_anal.gif", gif1: "png_anal.png", stats: ["receiveAnalMale", "creamPied"] }
                ],
                intro: "Look at my cock and fear me!",
                loss: "I am such your slut!",
                win: "Only a fool thinks they can win against me.",
                submit: "Have you ever tasted girl cock slut? I'm going to fuck you so good you'll only want girl cock in you!"
            };
            break;
        case "sc":
            charVar = {
                name: "clownQueen",
                displayName: "Clown Clan Leader",
                energy: 120,
                maxEnergy: 120,
                pPower: 15,
                kPower: 15,
                offense: ["p", "p", "k", "k", "g", "g", "g" ],
                clothingLevel: 2,
                money: 50 + Math.floor(Math.random() * 50),
                cock: false,
                p: "pose",
                weakspot: [0],
                base: "f_sc",
                grapple: "bent",
                domination: { pose: "kneel", pose1: "kneel", gif: "gif_buttholelick.gif", gif1: "png_buttholelick.png", stats: ["giveOralFemale"] },
                domEnemy: [
                    { lbl: "lb_domFuckem", p: "fuck", p1: "fuck1", pose: "fuck", pose1: "fuck1", gif: "gif_fuck.gif", gif1: "png_fuck1.png", stats: ["fuckPussy"] },
                    { lbl: "lb_domPowerbottom", p: "powerbottom", p1: "powerbottom1", pose: "takeit", pose1: "takeit1", gif: "gif_stickbutt.gif", gif1: "png_stickbutt.png", status: [""] }
                ],
                loss: "HONK.. damn....",
                intro: "I will HONK you in the HONK with my HONK!!",
                win: "HAHAHAHAHAHAHAHAHA It's funny how you lose HONK",
                submit: "Eat ass slut HONK"
            };
            break;
        case "goo":
            charVar = {
                name: "goo",
                displayName: "Goo Girl",
                energy: 250,
                maxEnergy: 250,
                pPower: 20,
                kPower: 20,
                offense: ["p", "k", "g", "g", "g", "g"],
                clothingLevel: 0,
                money: 200 + Math.floor(Math.random() * 200),
                cock: false,
                p: "pose",
                weakspot: [0],
                base: "f_goo",
                grapple: "kneelgoo",
                domination: { pose: "upsidedown", pose1: "upsidedown", gif: "gif_goo.gif", gif1: "png_goo.png", stats: ["receiveOralFemale", "creamPied", "receiveOralFemale"] },
                domEnemy: [
                    { lbl: "lb_domFuckem", p: "fuck", p1: "fuck1", pose: "sit", pose1: "sit", gif: "gif_goofuck.gif", gif1: "png_goofuck.png", stats: ["fuckPussy"] },
                    { lbl: "lb_domPowerbottom", p: "domination", p1: "domination1", pose: "upsidedown", pose1: "upsidedown", gif: "gif_goo.gif", gif1: "png_goo.png", status: ["receiveOralFemale", "creamPied", "receiveOralFemale"] }
                ],
                loss: "How did I lose to a human! ",
                intro: "MMmmmMMm Human fleshlight. Yummy",
                win: "I love coating my humans in slime",
                submit: "I love it when our goo mixes together."
            };
            break;
        case "ag":
            charVar = {
                name: "ag",
                displayName: "Forest Sluts",
                energy: 100,
                maxEnergy: 100,
                pPower: 12,
                kPower: 20,
                offense: ["p", "k", "g", "g"],
                clothingLevel: 1,
                money: 200 + Math.floor(Math.random() * 200),
                cock: false,
                p: "pose",
                weakspot: [0],
                base: "ag",
                grapple: "bent",
                domination: { pose: "agdom", pose1: "agdom", gif: "gif_fist.gif", gif1: "png_sissygasm.png", stats: ["receiveHandjobFemale", "receiveFistFemale"] },
                domEnemy: [
                    { lbl: "lb_domEatPussy", p: "fuck", p1: "fuck1", pose: "agfuck", pose1: "agfuck1", gif: "gif_pussylick.gif", gif1: "png_pussylick.png", stats: ["giveOralFemale"] },
                    { lbl: "lb_domFuckem", p: "agfff", p1: null, pose: "agfff", pose1: "agfff1", gif: "gif_fourholes.gif", gif1: "png_fourholes.png", status: ["giveOralFemale"] }
                ],
                loss: "Fine, Fuck our pussies.",
                intro: "Don't hurt the trees!",
                win: "We have saved the trees!",
                submit: "Orgasms are nature's gift to our pussies."
            };
            break;
        case "al":
            charVar = {
                name: "al",
                displayName: "Lumberjack",
                energy: 100,
                maxEnergy: 100,
                pPower: 20,
                kPower: 12,
                offense: ["p", "k", "g"],
                clothingLevel: 2,
                money: 200 + Math.floor(Math.random() * 200),
                cock: true,
                p: "pose",
                weakspot: [0],
                base: "al",
                grapple: "bent",
                domination: { pose: "alsubmit", pose1: "leaking", gif: "gif_anal.gif", gif1: "png_anal.png", stats: ["receiveAnalMale", "creamPied"] },
                domEnemy: [
                    { lbl: "lb_domFuckem", p: "fuck", p1: "fuck1", pose: "fuck", pose1: "fuck1", gif: "gif_anal.gif", gif1: "png_anal.png", stats: ["giveAnalMale"] },
                    { lbl: "lb_domPowerbottom", p: "powerbottom", p1: "powerbottom1", pose: "alsubmit", pose1: "leaking", gif: "gif_anal.gif", gif1: "png_anal.png", stats: ["receiveAnalMale", "creamPied"] }
                ],
                loss: "Oh fuck! I can't believe I'm your bitch.",
                intro: "I'm going to split you in half like a log!",
                win: "Don't mess with real men. Go back to the city you sissy bitch. ",
                submit: "Enjoy that cum. It's the only part of a real man in you."
            };
            break;
        case "af":
            charVar = {
                name: "af",
                displayName: "Ms. Jenny",
                energy: 120,
                maxEnergy: 120,
                pPower: 20,
                kPower: 12,
                offense: ["p", "k", "g", "g", "g"],
                clothingLevel: 1,
                money: 200 + Math.floor(Math.random() * 200),
                cock: true,
                p: "pose",
                weakspot: [7],
                base: "af",
                grapple: "lick", 
                domination: { pose: "assout", pose1: "assout", gif: "gif_spank.gif", gif1: "png_cry.png", stats: ["phum"] },
                domEnemy: [
                    { lbl: "lb_handjob", p: "fuck", p1: "fuck1", pose: "hang", pose1: "hang", gif: "gif_handjob.gif", gif1: "png_cum.png", stats: ["receiveHandjobFemale"] },
                    { lbl: "lb_domPowerbottom", p: "powerbottom", p1: "powerbottom1", pose: "afsubmit", pose1: "afsubmit1", gif: "gif_sizeview.gif", gif1: "png_sissygasm.png", stats: ["receiveAnalFemale", "sissygasm"] }
                ],
                loss: "I can't believe you've bested your queen. You will pay for this.",
                intro: "I am your queen. Serve me well.",
                win: "You are my slave. ",
                submit: "Everyone serves their true queen."
            };
            break;
        case "aw":
            charVar = {
                name: "aw",
                displayName: "Werewolf",
                energy: 250,
                maxEnergy: 250,
                pPower: 30,
                kPower: 40,
                offense: ["p", "p", "p", "k", "k", "k", "g", "g"],
                clothingLevel: 0,
                money: 1000 + Math.floor(Math.random() * 200),
                cock: true,
                p: "pose",
                weakspot: [7,8,9],
                base: "aw",
                grapple: "lick",
                domination: { pose: "werewolf", pose1: "werewolf", gif: "gif_knot.gif", gif1: "png_knot.png", stats: ["creamPied", "receiveAnalMale"] },
                domEnemy: [
                    { lbl: "lb_domPowerbottom", p: "domination", p1: "domination", pose: "werewolf", pose1: "werewolf", gif: "gif_knot.gif", gif1: "png_knot.png", stats: ["creamPied", "receiveAnalMale"] }
                ],
                loss: "Puny human. Why me lose",
                intro: "I will eat you flesh and your ass!",
                win: "How do you like my knot in your asshole? ",
                submit: "I'm always the alpha of the pack!"
            };
            break;
        default:
            charVar = null;
            break;
    }
    
    return charVar;
};

tEnemy.drawBackground = function (bg) {
    switch (bg) {
        case "gym":
            nav.bg("227_fight/bg_ring.jpg");
            break;
        case "sewer":
            nav.bg("227_fight/sewer.jpg");
            break;
        case "forest":
            nav.bg("475_fight/clearing.jpg");
            break;
        default:
            console.log("Unknown BG: " + bg + " in enemy");
            break;
    }
};

tEnemy.drawGif = function (gif) {
    this.drawButtonList("close");
    nav.killbutton("gif");
    nav.button({
        "type": "img",
        "name": "gif",
        "left": 1550,
        "top": 200,
        "width": 350,
        "height": 350,
        "image": "227_fight/" + gif
    }, 227);
};

tEnemy.getDomEnemy = function (labelName) {
    var retVal = null;
    $.each(g.fight.e[0].domEnemy, function (i, v) {
        if (v.lbl === labelName)
            retvalue = v;
    });
    return retvalue;
};

tEnemy.drawButtonList = function (displayMenu) {
    var i, btnList, tHeader, tFooter;
    tHeader = tFooter = "";
    btnList = new Array();
    $('.room-btn').each(function () {
        if ($(this).data('name').includes("lb_")) {
            $(this).remove();
        }
    });
    $('.room-img').each(function () {
        if ($(this).attr("data-name") !== undefined) {
            if ($(this).data('name').includes("lb_")) {
                $(this).remove();
            }
        }
    });
    $('.fight-hover-element').remove();

    nav.killbutton("menuItem");
    if (displayMenu === "cancel") {
        switch (g.fight.prevMenu) {
            case "fight": displayMenu = "main"; break;
            case "grapple": displayMenu = "fight"; break;
            case "slut": displayMenu = "main"; break;
            case "flee": displayMenu = "main"; break;
            case "weapon": displayMenu = "fight"; break;
            case "inventory": displayMenu = "main"; break;
            case "humiliation": displayMenu = "slut"; break;
            case "grappleAttempt": displayMenu = "fight"; break;
            default: alert("baddisplay"); break;
        }
    }
    switch (displayMenu) {
        case "begin":
            tHeader = g.fight.e[0].displayName;
            tFooter = g.fight.e[0].intro;
            btnList.push(
                { t: "Begin", l: "lb_begin", title: "Begin your adventure. " },
            );
            
            break;
        case "main":
            if (g.fight.e[0].name === "m") {
                btnList.push(
                    { t: "Fight", l: "lb_fight", title: "Dominate your enemy. " },
                    { t: "Inventory", l: "lb_inventory", title: "Use your inventory to gain life or modify the battle. " },
                    { t: "Run Away", l: "lb_flee", title: "Run away like a little bitch. " },
                );
            }
            else {
                btnList.push(
                    { t: "Fight", l: "lb_fight", title: "Dominate your enemy. " },
                    { t: "Slut", l: "lb_slut", title: "Be a submissive slut. " },
                    { t: "Inventory", l: "lb_inventory", title: "Use your inventory to gain life or modify the battle. " },
                    { t: "Run Away", l: "lb_flee", title: "Run away like a little bitch. " },
                );
            }
            tHeader = "Main Menu";
            tFooter = "Select your action. ";
            break;
        case "fight":
            if (g.fight.e[0].name === "m") {
                btnList.push(
                    { t: "Punch", l: "lb_punch", title: "Punch your enemy. " },
                    { t: "Kick", l: "lb_kick", title: "Kick your enemy. " },
                    { t: "Weapon", l: "lb_weapon", title: "Use a weapon from your inventory. " },
                );
            }
            else {
                btnList.push(
                    { t: "Punch", l: "lb_punch", title: "Punch your enemy. " },
                    { t: "Kick", l: "lb_kick", title: "Kick your enemy. " },
                    { t: "Grapple", l: "lb_grapple", title: "Dominate your enemy. " },
                    { t: "Weapon", l: "lb_weapon", title: "Use a weapon from your inventory. " },
                );
            }
            if (g.fight.me.superPunch > 3)
                btnList.push({ t: "Super Punch x" + g.fight.me.superPunch, l: "lb_superpunch", title: "Do a super punch. You can only use this once ever few battles. " });
            btnList.push({ t: "Back", l: "lb_cancel", title: "Return to main menu. " });
            tHeader = "Fight!";
            tFooter = "Fight your opponent. ";
            break;
        case "grappleAttempt":
            btnList.push(
                { t: "Leg Take Down", l: "lb_grappleSingleleg", title: "Single leg take down, " },
                { t: "Lapel Grab", l: "lb_grappleLapeldrag", title: "Grab their lapel and take down, " },
                { t: "Leg Sweep", l: "lb_grappleLegsweep", title: "Sweep their leg out from them." },
                { t: "Go Back", l: "lb_cancel", title: "Return to the Fight menu." }
            );
            tHeader = "Grapple!";
            tFooter = "Attempt to take down your opponent to dominate them. ";
            break;
        case "grapple":
            if (g.fight.e[0].clothingLevel > 0) {
                btnList.push(
                    { t: "Steal Clothing", l: "lb_steal", title: "Strip off your enemy's clothing. " },
                );
            }
            else {
                btnList.push(
                    { t: "Tea bag", l: "lb_teabag", title: "I'm going to dip my balls in it!" },
                );
            }
            tHeader = "Successfult Take Down";
            tFooter = "Success! Dominate your opponent.";
            break;
        case "slut":
            if (g.fight.me.clothes !== null) {
                btnList.push(
                    { t: "Strip Clothing", l: "lb_stripshirt", title: "Take your clothes off. " },
                    { t: "Go Back", l: "lb_cancel", title: "Return to the main menu. " }
                );
            }
            else if (g.fight.me.panties) {
                btnList.push(
                    { t: "Strip Panties", l: "lb_strippanties", title: "Remove your panties. " },
                    { t: "Go Back", l: "lb_cancel", title: "Return to the main menu. " }
                );
            }
            else {
                btnList.push(
                    { t: "On your knees", l: "lb_submitbj", title: "Present your mouth. " },
                    { t: "Face Down Ass Up", l: "lb_submitass", title: "Face down, ass up, that's the way you like to get fucked. " },
                    { t: "Humiliate Yourself", l: "lb_humiliation", title: "Humiliate yourself" },
                    { t: "Go Back", l: "lb_cancel", title: "Return to the main menu. " }
                );
            }
            tHeader = "Slut";
            tFooter = "Show the enemy what a submissive little slut you are.";
            break;
        case "flee":
            btnList.push(
                { t: "Are you sure?", l: "lb_fleeconfirm", title: "Run away!" },
                { t: "Go Back", l: "lb_cancel", title: "Return to the main menu. " }
            );
            tHeader = "Run Away";
            tFooter = "Be a little bitch?";
            break;
        case "inventory":
            if (inv.has("acia"))
                btnList.push({ t: "Acia +15", l: "lb_acia", title: "Gain some energy. " });
            if (inv.has("soda"))
                btnList.push({ t: "Soda +50", l: "lb_soda", title: "Gain some energy. " });
            if (inv.has("cumjar"))
                btnList.push({ t: "Jar of Cum + 100", l: "lb_cumjar", title: "Drink a thick jar of cum to gain some energy. " });
            btnList.push({ t: "Cancel", l: "lb_cancel", title: "Return to the main menu. " });
            tHeader = "Inventory";
            tFooter = "Use inventory item?";
            break;
        case "counterAction":
            btnList.push(
                { t: "Block Punch", l: "lb_blockpunch", title: "Block their punch. " },
                { t: "Block Kick", l: "lb_blockkick", title: "Block their kick. " },
                { t: "Block Grapple", l: "lb_blockgrapple", title: "Block an attempt to dominate you. " },
                { t: "Take It", l: "lb_takeit", title: "Allow yourself to be hit or dominated. " }
            );
            tHeader = "Counter";
            tFooter = "Brace yourself for the enemy. ";
            break;
        case "weapon":
            btnList.push(
                { t: "Go Back", l: "lb_cancel", title: "Return to the main menu. " }
            );
            tHeader = "Weapon";
            tFooter = "Future Release";
            break;
        case "humiliation":
            btnList.push(
                { t: "Go Back", l: "lb_cancel", title: "Return to the main menu. " }
            );
            tHeader = "Humiliation";
            tFooter = "Humiliate yourself like a pathetic slut";
            break;
        case "box":
            tHeader = g.fight.prevMenu;
            tFooter = "Select where you're going to hit.";
            break;
        case "domination":
            $.each(g.fight.e[0].domEnemy, function (i, v) {
                switch (v.lbl) {
                    case "lb_domUseMouth":
                        if (cl.c.chastity !== null)
                            btnList.push({ t: "Fuck Their Face", l: "lb_domUseMouth", title: "Receive Oral" });
                        break;
                    case "lb_domFuckem":
                        if (cl.c.chastity === null)
                            btnList.push({ t: "Fuck 'em", l: "lb_domFuckem", title: "Fuck them in their sloppy hole." });
                        break;
                    case "lb_handjob":
                        if (cl.c.chastity === null)
                            btnList.push({ t: "Hand Job", l: "lb_handjob", title: "Stroke your pp." });
                        break;
                    case "lb_domPowerbottom":
                        btnList.push({ t: "Power Bottom", l: "lb_domPowerbottom", title: "Have them fuck you." });
                        break;
                    case "lb_domFoot":
                        btnList.push({ t: "Foot Fetish", l: "lb_domFoot", title: "Fuck their feet *pervert* " });
                        break;
                    case "lb_domfacefuck":
                        btnList.push({ t: "Blow Job", l: "lb_domfacefuck", title: "Fuck their face. " });
                        break;
                    case "lb_domfist":
                        btnList.push({ t: "Fisting", l: "lb_domfist", title: "Get fisted in the Sissy Pussy" });
                        break;
                    case "lb_domEatPussy":
                        btnList.push({ t: "Eat Pussy", l: "lb_domEatPussy", title: "Eat their yummy pussy" });
                        break;
                }
            });
            btnList.push({ t: "Skip Domination", l: "lb_domSkip", title: "Skip it." });
            tHeader = "Domination!";
            tFooter = "Dominate your enemy!";
            break;
    }
    if (displayMenu === "close") {
        $('.room-img[data-name="menu"]').slideUp("fast");
    }
    else {
        nav.killbutton("menuItem");
        $('.room-img[data-name="menu"]').slideDown("fast", function () {
            nav.t({
                type: "zimg",
                name: "menuItem",
                left: 1620,
                top: 170,
                font: 20,
                hex: "#ffffff",
                text: tHeader
            }, g.fight.callingRoomID);
            nav.t({
                type: "zimg",
                name: "menuItem",
                left: 1620,
                top: 760,
                font: 20,
                hex: "#ffffff",
                text: g.newLine(tFooter, 26)// tFooter.replace(/(.{20})/g, "$1<br>")
            }, g.fight.callingRoomID);
            for (i = 0; i < btnList.length; i++) {
                nav.t({
                    type: "btnhover",
                    name: btnList[i].l,
                    left: 1660,
                    top: 280 + (i * 50) + 12,
                    font: 20,
                    hex: "#ffffff",
                    text: btnList[i].t
                }, g.fight.callingRoomID);
                nav.button({
                    "type": "btnhover",
                    "name": btnList[i].l,
                    "left": 1653,
                    "top": 280 + (i * 50),
                    "width": 242,
                    "height": 46,
                    "image": "227_fight/" + btnList[i].l + ".png",
                    "title": btnList[i].title
                }, g.fight.callingRoomID);
                

                nav.button({
                    "type": "imghover",
                    "name": btnList[i].l,
                    "left": 1600,
                    "top": 280 + (i * 50),
                    "width": 40,
                    "height": 38,
                    "image": "227_fight/arrow.png"
                }, g.fight.callingRoomID);
            }
            $('.fight-hover-element').hide();
        });
    }

    $('.fight-hover-element').hide();
    setTimeout(function () {
        $('.fight-hover-element').hide();
        $('.fight-hover').hover(function () {
            $('.fight-hover-element').hide();
            $('.fight-hover-element[data-name="' + $(this).data('name') + '"]').show();
        }, function () {
            $('.fight-hover-element').hide();
        });
    }, 300);
    
    g.fight.prevMenu = displayMenu;
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
        },
        {
            "type": "img",
            "name": "e0",
            "left": 420,
            "top": 0,
            "width": 1080,
            "height": 1080,
            "image": "227_fight/" + g.fight.e[0].base + "_frontpose.png"
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
            "name": "enemyAvatar",
            "left": 1763,
            "top": 923,
            "width": 140,
            "height": 140,
            "image": "227_fight/" + g.fight.e[0].base + "_avatar.png"
        },
        {
            "type": "img",
            "name": "menu",
            "left": 1597,
            "top": 147,
            "width": 306,
            "height": 712,
            "image": "227_fight/menu.png"
        }
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
        nav.button(v, g.fight.callingRoomID);
    });

    $('.room-img[data-name="menu"]').hide();
    nav.t({
        type: "zimg",
        name: "name",
        left: 190,
        top: 985,
        font: 20,
        hex: "#ffffff",
        text: sc.n("me")
    });

    thisEnergy = (g.fight.me.energy / g.fight.me.maxEnergy) * 280;
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

    nav.button({
        "type": "img",
        "name": "boxtarget",
        "left": 1662,
        "top": 271,
        "width": 226,
        "height": 447,
        "image": "227_fight/boxtarget.png"
    }, g.fight.callingRoomID);


    nav.button({
        "type": "btn",
        "name": "box0",
        "left": 1750,
        "top": 287,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box1",
        "left": 1706,
        "top": 396,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box2",
        "left": 1794,
        "top": 396,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box3",
        "left": 1721,
        "top": 513,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box4",
        "left": 1779,
        "top": 513,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box5",
        "left": 1671,
        "top": 563,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box6",
        "left": 1829,
        "top": 563,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box7",
        "left": 1750,
        "top": 588,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box8",
        "left": 1713,
        "top": 645,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    nav.button({
        "type": "btn",
        "name": "box9",
        "left": 1788,
        "top": 645,
        "width": 50,
        "height": 50,
        "image": "227_fight/box.png"
    }, g.fight.callingRoomID);
    g.fight.box = ["b", "b", "b", "h", "1", "1", "1", "1", "2", "2"];
    if (g.fight.me.action === "superpunch")
        g.fight.box = ["2", "1", "2", "2", "1", "1", "1", "1", "2", "2"];
    for (j = 0; j < 2; j++) {
        for (i = 0; i < 10; i++) {
            var k = Math.floor(Math.random() * 10);
            var l = g.fight.box[i];
            g.fight.box[i] = g.fight.box[k];
            g.fight.box[k] = l;
        }
    }
    var thisMult = ["3", "3", "4", "4", "10"];
    for (i = 0; i < g.fight.e[0].weakspot.length; i++) {
        if (Math.random() < .5) {
            g.fight.box[i] = thisMult[Math.floor(Math.random() * 5)];
        }
    }

};

tEnemy.selectBox = function (box) {
    var i, retvalue;
    var boxentry = parseInt(box.substring(3));
    var img = "";
    var x, y;

    x = Math.round($('.room-btn[data-name="' + box + '"]').css("left").replace("px", "") / g.ratio);
    y = Math.round($('.room-btn[data-name="' + box + '"]').css("top").replace("px", "") / g.ratio);
    
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
        case "3":
            img = "box_three";
            retvalue = 3;
            break;
        case "4":
            img = "box_four";
            retvalue = 4;
            break;
        case "10":
            img = "box_ten";
            retvalue = 10;
            break;
    }
    
    nav.button({
        "type": "img",
        "name": "box",
        "left": x,
        "top": y,
        "width": 50,
        "height": 50,
        "image": "227_fight/" + img + ".png"
    }, g.fight.callingRoomID);
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
        }, g.fight.callingRoomID);
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
        }, g.fight.callingRoomID);
    }
    tEnemy.drawEnemy();
    tEnemy.drawChar("pose");
};

tEnemy.drawEnemy = function () {
    nav.killbutton("enemy");
    for (i = 0; i < g.fight.e.length; i++) {
        if (g.fight.e[i].p === "bjpose" || g.fight.e[i].p === "asspose") {
            nav.button({
                "type": "img",
                "name": "enemy",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "227_fight/" + g.fight.e[i].base + "_" + g.fight.e[i].p + "_" + g.fight.e[i].clothingLevel + ".png"
            }, g.fight.callingRoomID);
        }
        else if (g.fight.e[i].p !== null) {
            nav.button({
                "type": "img",
                "name": "enemy",
                "left": 0 + (i * 840),
                "top": 0,
                "width": 1080,
                "height": 1080,
                "image": "227_fight/" + g.fight.e[i].base + "_" + g.fight.e[i].p + "_" + g.fight.e[i].clothingLevel + ".png"
            }, g.fight.callingRoomID);
        }

    }
};

tEnemy.drawChar = function (pose) {
    nav.killbutton("me");
    var thischar = { body: "blank", hair: null, clothes: null, dick: null, displayc: false, fif: null };
    switch (pose) {
        case "pose":
            thischar.body = cl.c.chest > 2 ? "g_pose_f" : "g_pose_m";
            thischar.dick = "g_block";
            thischar.hair = "0";
            thischar.displayc = true;
            break;
        case "block":
            thischar.body = cl.c.chest > 2 ? "g_block_f" : "g_block_m";
            thischar.dick = "g_block";
            thischar.displayc = true;
            thischar.hair = "4";
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
            break;
        case "superpunch":
            g.fight.me.superPunch = 0;
            gv.set("superPunch", 0);
            thischar.body = cl.c.chest > 2 ? "g_punch_f" : "g_punch_m";
            thischar.dick = "g_punch";
            thischar.displayc = true;
            thischar.hair = "1";
            thischar.fif = "g_superpunch";
            break;
        case "kick":
            thischar.body = cl.c.chest > 2 ? "g_kick_f" : "g_kick_m";
            thischar.dick = "g_kick";
            thischar.displayc = true;
            thischar.hair = "2";
            break;
        case "recoil":
            thischar.body = cl.c.chest > 2 ? "g_recoil_f" : "g_recoil_m";
            thischar.dick = "g_recoil";
            thischar.displayc = true;
            thischar.hair = "3";
            break;
        case "bjpose":
            thischar.body = cl.c.chest > 2 ? "g_bjpose_f" : "g_bjpose_m";
            thischar.dick = "g_bjpose";
            thischar.displayc = true;
            thischar.hair = "6";
            break;
        case "bjpose1":
            thischar.body = cl.c.chest > 2 ? "g_bjpose1_f" : "g_bjpose1_m";
            thischar.dick = "g_bjpose1";
            thischar.displayc = true;
            thischar.hair = "16";
            break;
        case "asspose":
            thischar.body = cl.c.chest > 2 ? "g_asspose" : "g_asspose";
            thischar.dick = "g_asspose";
            thischar.displayc = true;
            thischar.hair = "7";
            break;
        case "stripclothes":
            if (g.fight.me.clothes !== null) {
                g.fight.me.clothes = null;
                cl.c.pants = cl.c.shirt = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
                thischar.body = cl.c.chest > 2 ? "g_stripclothes_f" : "g_stripclothes_m";
                thischar.displayc = true;
                thischar.hair = null;
            }
            else {
                g.fight.me.panties = false;
                cl.c.panties = cl.c.bra = null;
                cl.display();
                thischar.body = "g_strippanties";
                thischar.displayc = true;
                thischar.hair = "5";
            }
            cl.display();
            break;
        case "striprip":
            if (g.fight.me.clothes !== null) {
                g.fight.me.clothes = null;
                cl.c.pants = cl.c.shirt = cl.c.dress = cl.c.pj = cl.c.swimsuit = null;
                cl.display();
                thischar.body = cl.c.chest > 2 ? "g_stripripclothes_f" : "g_stripripclothes_m";
                thischar.dick = "g_stripripclothes";
                thischar.displayc = true;
                thischar.hair = "8";
            }
            else {
                g.fight.me.panties = false;
                cl.c.panties = cl.c.bra = null;
                cl.display();
                thischar.body = cl.c.chest > 2 ? "g_striprippanties_f" : "g_striprippanties_m";
                thischar.hair = "8";
                thischar.displayc = false;
            }
            break;
        case "bent":
            thischar.body = cl.c.chest > 2 ? "g_bent_f" : "g_bent_m";
            thischar.displayc = false;
            thischar.hair = "9";
            break;
        case "teabag":
            thischar.body = cl.c.chest > 2 ? "g_teabag_f" : "g_teabag_m";
            thischar.hair = "10";
            thischar.displayc = false;
            break;
        case "lick":
            thischar.body = "g_lick";
            thischar.hair = "11";
            thischar.displayc = false;
            break;
        case "defeat":
            thischar.body = cl.c.chest > 2 ? "g_defeat_f" : "g_defeat_m";
            thischar.dick = "g_defeat";
            thischar.hair = null;
            thischar.displayc = true;
            break;
        case "victory":
            thischar.body = cl.c.chest > 2 ? "g_victory_f" : "g_victory_m";
            thischar.dick = "g_victory";
            thischar.hair = "8";
            thischar.displayc = true;
            break;
        case "fuck":
            thischar.body = cl.c.chest > 2 ? "g_fuck_f" : "g_fuck_m";
            thischar.hair = "13";
            break;
        case "fuck1":
            thischar.body = cl.c.chest > 2 ? "g_fuck1_f" : "g_fuck1_m";
            thischar.hair = "13";
            break;
        case "kneel":
            thischar.body = cl.c.chest > 2 ? "g_kneel_f" : "g_kneel_m";
            thischar.hair = "12";
            thischar.displayc = false;
            break;
        case "kneelgoo":
            thischar.body = cl.c.chest > 2 ? "g_kneelgoo_f" : "g_kneelgoo_m";
            thischar.hair = "29";
            thischar.displayc = false;
            break;
        case "kneelaway":
            thischar.body = "g_kneelaway";
            thischar.hair = "21";
            thischar.displayc = false;
            break;
        case "takeit":
            thischar.body = "g_takeit";
            thischar.dick = "g_takeit";
            thischar.hair = "14";
            break;
        case "takeit1":
            thischar.body = "g_takeit1";
            thischar.dick = "g_takeit1";
            thischar.hair = "14";
            break;
        case "cloud":
            thischar.body = "g_cloud";
            break;
        case "rcowgirl":
            thischar.body = cl.c.chest > 2 ? "g_rcowgirl_m" : "g_rcowgirl_f";
            thischar.dick = "g_rcowgirl";
            thischar.hair = "15";
            break;
        case "rcowgirl1":
            thischar.body = cl.c.chest > 2 ? "g_rcowgirl1_m" : "g_rcowgirl1_f";
            thischar.dick = "g_rcowgirl1";
            thischar.hair = "15";
            break;
        case "fysubmit":
            thischar.body = "g_fysubmit";
            thischar.hair = "17";
            break;
        case "alsubmit":
            thischar.body = "g_alsubmit";
            thischar.hair = "22";
            break;
        case "alsubmit1":
            thischar.body = "g_alsubmit1";
            break;
        case "hair_18":
            thischar.body = null;
            thischar.hair = "18";
            break;
        case "upsidedown":
            thischar.body = cl.c.chest > 2 ? "g_upside_f" : "g_upside_m";
            thischar.hair = "27";
            thischar.dick = "g_upside";
            break;
        case "upsidedowng":
            thischar.body = cl.c.chest > 2 ? "g_upsidedowng_f" : "g_upsidedowng_m";
            thischar.hair = "19";
            break;
        case "assout":
            thischar.body = cl.c.chest > 2 ? "g_assout_f" : "g_assout_m";
            thischar.hair = "20";
            break;
        case "leaking":
            thischar.body = "g_leaking";
            break;
        case "afsubmit":
            thischar.body = cl.c.chest > 2 ? "g_afsubmit_f" : "g_afsubmit_m";
            thischar.hair = "24";
            break;
        case "afsubmit1":
            thischar.body = cl.c.chest > 2 ? "g_afsubmit1_f" : "g_afsubmit1_m";
            thischar.hair = "24";
            break;
        case "hang":
            thischar.body = cl.c.chest > 2 ? "g_hang_m" : "g_hang_f";
            thischar.dick = "g_hang";
            thischar.hair = "23";
            break;
        case "agfuck":
            thischar.body = "g_agfuck";
            thischar.hair = "25";
            break;
        case "agfuck1":
            thischar.body = "g_agfuck1";
            thischar.hair = "25";
            break;
        case "agdom":
            thischar.body = null;
            thischar.hair = "26";
            break;
        case "agfff":
            thischar.body = "g_agfff";
            break;
        case "agfff1":
            thischar.body = "g_agfff1";
            break;
        case "sit":
            thischar.body = cl.c.chest > 2 ? "g_sit_f" : "g_sit_m";
            thischar.hair = "28";
            thischar.dick = "g_sit";
            break;
        case "werewolf":
            thischar.body = cl.c.chest > 2 ? "g_werewolf_f" : "g_werewolf_m";
            thischar.hair = "30";
            break;
    }
    if (thischar.displayc) {
        if (g.fight.me.clothes === "m" || g.fight.me.clothes === "f")
            thischar.clothes = thischar.body + (g.fight.me.clothes === "f" ? "_d" : "_t");
        else if (g.fight.me.panties)
            thischar.clothes = thischar.body + "_p";
    }

    if (thischar.clothes === null && thischar.dick !== null) {
        if (cl.c.chastity !== null)
            thischar.clothes = thischar.dick + "_d_c";
        else if (cl.c.cock < 3)
            thischar.clothes = thischar.dick + "_d_b";
        else
            thischar.clothes = thischar.dick + "_d_s";
    }
    
    
    //back of hair

    if (thischar.hair !== null && cl.c.hairLength !== null) {
        var noback = ["9", "10", "17", "18", "19", "22", "25", "26", "27", "30" ];
        if (cl.c.hairLength > 1 && !noback.includes(thischar.hair))
            nav.modbutton("me0", "227_fight/h_" + thischar.hair + "_long_back.png", null, null);
        else
            nav.modbutton("me0", "227_fight/blank.png", null, null);
    }
    else
        nav.modbutton("me0", "227_fight/blank.png", null, null);
    //body
    if (thischar.body !== null)
        nav.modbutton("me1", "227_fight/" + thischar.body + ".png", null, null);
    else
        nav.modbutton("me1", "227_fight/blank.png", null, null);

    //clothing
    nav.modbutton("me2", "227_fight/" + (thischar.clothes === null ? "blank" : thischar.clothes) + ".png", null, null);

    //hair
    
    if (thischar.hair !== null && cl.c.hairLength !== null) {
        var hl = cl.c.hairLength > 1 ? "_long" : "_short";
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

tEnemy.getEnemyAction = function () {
    var p;
    var entry = "p";
    var weakestHit = g.fight.e[0].pPower < g.fight.e[0].kPower ? g.fight.e[0].pPower : g.fight.e[0].kPower;

    if (g.fight.me.energy <= weakestHit) 
        entry = Math.random() < .5 ? "p" : "k";
    else if ((g.fight.cPower < 90 && g.fight.cPower > 50) || g.fight.cPower < -50) 
        entry = Math.random() < .75 ? "g" : g.fight.e[0].offense[Math.floor(Math.random() * g.fight.e[0].offense.length)];
    else
        entry = g.fight.e[0].offense[Math.floor(Math.random() * g.fight.e[0].offense.length)];

    switch (entry) {
        case "p":
            g.fight.e[0].p = "punch";
            p = g.fight.e[0].pPower;
            break;
        case "k":
            g.fight.e[0].p = "kick";
            p = g.fight.e[0].kPower;
            break;
        case "g":
            p = Math.round((g.fight.e[0].kPower + g.fight.e[0].pPower) / 4);
            if (g.fight.me.clothes === null && !g.fight.me.panties) {
                g.fight.e[0].p = "grapple";
            }
            else {
                g.fight.e[0].p = "strip";
            }
            break;
        default:
            alert("error in get enemy action");
            break;
    }

    return {a: g.fight.e[0].p, p: p };
};

tEnemy.changeEnergy = function (myEnergy, enemyEnergy, controlChange) {
    var prevEnergy, newEnergy;
    if (myEnergy !== null) {
        myEnergy = Math.floor(myEnergy);
        if (myEnergy < 0) {
            myEnergy = myEnergy + g.fight.me.def;
            if (myEnergy > 0)
                myEnergy = 0;
        }

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
        if (myEnergy < 0)
            g.fight.me.damage -= myEnergy;
    }
    if (enemyEnergy !== null) {
        enemyEnergy = Math.floor(enemyEnergy);
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
        var conPow = 0;
        switch (controlChange.t) {
            case "hit": conPow = 10; break;
            case "grapple": conPow = 50; break;
            case "block": conPow = 2; break;
            case "steal": conPow = 25; break;
            default: alert(controlChange.t + " missing");
        }
        if (controlChange.me) {
            if (g.fight.subdom < 0)
                conPow = conPow / Math.abs(g.fight.subdom);
            else
                conPow = conPow * Math.abs(g.fight.subdom);

            if (g.fight.e[0].energy > (g.fight.e[0].maxEnergy * .8))
                conPow *= .5;
            else if (g.fight.e[0].energy < (g.fight.e[0].maxEnergy * .3))
                conPow *= 2;
            conPow *= -1;
        }
        else {
            if (g.fight.subdom < 0)
                conPow = conPow * Math.abs(g.fight.subdom);
            else
                conPow = conPow / Math.abs(g.fight.subdom);

            if (g.fight.me.energy > 100)
                conPow *= .5;
            else if (g.fight.me.energy < 30)
                conPow *= 2;
        }

        prevEnergy = g.fight.cPower;
        g.fight.cPower += conPow;

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
        else {
            $(".my-horny").css({
                width: "0px"
            });
            $(".enemy-horny0").css({
                width: "0px"
            });
        }
    }
};

tEnemy.updatePlayerStats = function (money) {

    var i;
    var popUpText = "";
    var doDefense = false;
    for (i = 0; i < g.st.length; i++) {
        if (gv.st[i].n === "energy") {
            if (g.fight.me.energy < 1)
                gv.st[i].t = 0;
            else if (g.fight.me.energy > g.fight.me.maxEnergy)
                gv.st[i].t = g.fight.me.maxEnergy;
            else
                gv.st[i].t = g.fight.me.energy;
        }
        else if (gv.st[i].n === "fitness") {
            if ((g.fight.me.punchCount + g.fight.me.kickCount) > 0) {
                gv.st[i].t += (g.fight.me.punchCount + g.fight.me.kickCount);
                if (gv.st[i].t > 100)
                    gv.st[i] = 100;
                popUpText += "Fitness increased: " + (g.fight.me.punchCount + g.fight.me.kickCount) + "<br/>";
            }
        }
        else if (gv.st[i].n === "leg") {
            if (g.fight.me.kickCount > 0) {
                gv.st[i].t += (g.fight.me.kickCount * 2);
                if (gv.st[i].t > 100)
                    gv.st[i].t = 100;
                popUpText += "Your legs are stronger <br/>";
            }
        }
        else if (gv.st[i].n === "body") {
            if (g.fight.me.punchCount > 0) {
                gv.st[i].t += (g.fight.me.punchCount * 2);
                if (gv.st[i].t > 100)
                    gv.st[i].t = 100;
                popUpText += "Your arms are stronger <br/>";
            }
        }
        else if (gv.st[i].n === "subdom") {
            gv.st[i].t -= g.fight.me.sissyAction;
            if (gv.st[i].t < 0)
                gv.st[i].t = 0;
            else if (gv.st[i].t > 100)
                gv.st[i].t = 100;
            if (g.fight.me.sissyAction > 0) {
                popUpText += "You are more submissive. <br/>";
            }
            else if (g.fight.me.sissyAction < 0) {
                popUpText += "You are more dominate. <br/>";
            }
        }
        else if (gv.st[i].n === "dLevel") {
            doDefense = gv.st[i].t > 0;
        }
        else if (gv.st[i].n === "d") {
            if (gv.st[i].t > 0)
                doDefense = true;
            if (doDefense) {
                var thisDef = Math.floor(g.fight.me.damage);
                gv.st[i].t += thisDef;
                if (gv.st[i].t > 100)
                    gv.st[i].t = 100;
                popUpText += "Your defense increased by: " + thisDef + " + points. <br/>";
            }
        }
        else if (gv.st[i].n === "money") {
            if (money > 0) {
                gv.st[i].t += money;
                if (gv.st[i].t < 0)
                    gv.st[i].t = 0;
                popUpText += "You earned $" + money + " <br/>";
                //$('#char_money').text('$' + gv.st[i].t);
            }
        }
    }

    if (popUpText.length > 0)
        g.popUpNotice(popUpText);
    char.makeGraph();
};