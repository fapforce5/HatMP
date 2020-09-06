//Room name
var room556 = {};
room556.main = function () {
    $("#room-inv").hide();
    char.changeMenu("hide");
    setTimeout(function () { $("#room-inv").hide(); }, 250);
    g.internal = tEnemy.init("g", "gym", 556, 551);
    g.pass = 0;
    chat(0, 556);
};

room556.btnclick = function (name) {
    switch (name) {
        case "fight":
        case "fuck":
        case "cancel":
        case "block":
        case "undress":
        case "submit":
        case "tease":
            tEnemy.drawButtons(name, 556, g.internal.enemy);
            break;
        case "punch":
        case "kick":
            if (g.pass === 0) {
                if (name === "punch") {
                    g.pass = 1;
                    tEnemy.drawAction("block");
                    tEnemy.drawEnemy(g.internal.enemy, "block");
                    tEnemy.drawMe(name);
                    g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, Math.round(g.internal.me.pPower * .2));
                    tEnemy.drawButtons("clear", 556, g.internal.enemy);
                    g.roomTimeout = setTimeout(function () { chat(2, 556); }, 1500);
                }
                else
                    chat(1, 556);

            }
            else if (g.pass === 1) {
                if (name === "punch") {
                    g.pass = 2;
                    tEnemy.drawAction("pow");
                    tEnemy.drawEnemy(g.internal.enemy, "recoil");
                    tEnemy.drawMe(name);
                    g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, g.internal.me.pPower);
                    tEnemy.drawButtons("clear", 556, g.internal.enemy);
                    g.roomTimeout = setTimeout(function () { room556.btnclick("reset"); chat(4, 556); }, 1500);
                }
                else
                    chat(1, 556);
            }
            else if (g.pass === 2) {
                tEnemy.drawAction("block");
                tEnemy.drawEnemy(g.internal.enemy, "block");
                tEnemy.drawMe(name);
                tEnemy.drawButtons("clear", 556, g.internal.enemy);
                g.roomTimeout = setTimeout(function () { room556.btnclick("reset"); chat(10, 556); }, 1500);
            }
            else {
                chat(1, 556);
            }
            /*
            tEnemy.drawButtons("clear", 556, g.internal.enemy);
            var nextMove = tEnemy.blindNextMove(g.internal.enemy, g.internal.me);

            if (nextMove === "bp" && name === "punch" || nextMove === "bk" && name === "kick") {
                tEnemy.drawAction("block");
                tEnemy.drawEnemy(g.internal.enemy, "block");
                tEnemy.drawMe(name);
                g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, Math.round((name === "punch" ? g.internal.me.pPower : g.internal.me.kPower) * .2));
                if (g.internal.enemy.energy < 1)
                    g.roomTimeout = setTimeout(function () { room556.btnclick("enemyLose"); }, 1500);
                else if (Math.floor(Math.random() * 3) === 0)
                    g.roomTimeout = setTimeout(function () { room556.btnclick(nextMove === "p" ? "reactionPunch" : "reactionKick"); }, 1500);
                else
                    g.roomTimeout = setTimeout(function () { room556.btnclick("reset"); }, 1500);
            }
            else {
                if (nextMove === "bp" || nextMove === "bk") {
                    tEnemy.drawAction("pow");
                    tEnemy.drawEnemy(g.internal.enemy, "block");
                }
                g.roomTimeout = setTimeout(function () {
                    tEnemy.drawAction("pow");
                    tEnemy.drawEnemy(g.internal.enemy, "recoil");
                    tEnemy.drawMe(name);
                    g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, g.internal.me.pPower);
                    if (g.internal.enemy.energy < 1)
                        g.roomTimeout = setTimeout(function () { room556.btnclick("enemyLose"); }, 1500);
                    else
                        g.roomTimeout = setTimeout(function () { room556.btnclick(nextMove === "p" ? "reactionPunch" : "reactionKick"); }, 1500);
                });
            }
            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = name;
            */
            break;
        case "blockPunch":
        case "blockKick":
            if (g.pass === 2) {
                if (name === "blockKick")
                    chat(9, 556);
                else {
                    tEnemy.drawAction("block");
                    tEnemy.drawEnemy(g.internal.enemy, "punch");
                    tEnemy.drawMe(name);
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawAction("pow");
                        tEnemy.drawEnemy(g.internal.enemy, "recoil");
                        tEnemy.drawMe("punch");
                        g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, g.internal.me.pPower);
                        g.roomTimeout = setTimeout(function () { room556.btnclick("reset"); chat(11, 556); }, 1500);
                    }, 1500);
                }
            }
            else {
                chat(1, 556);
            }
            /*
            tEnemy.drawButtons("clear", 556, g.internal.enemy);

            var nextMovex = tEnemy.blindNextMove(g.internal.enemy, g.internal.me);

            if (nextMovex === "p" && name === "blockPunch" || nextMovex === "k" && name === "blockKick") {
                console.log("block");
                tEnemy.drawEnemy(g.internal.enemy, nextMovex === "p" ? "punch" : "kick");
                tEnemy.drawAction("block");
                tEnemy.drawMe(name);
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, nextMovex === "p" ? Math.round(g.internal.enemy.pPower * .2) : Math.round(g.internal.enemy.kPower * .2));
                if (Math.floor(Math.random() * 3) === 0) {
                    g.roomTimeout = setTimeout(function () {
                        tEnemy.drawAction("epow");
                        tEnemy.drawEnemy(g.internal.enemy, "recoil");
                        tEnemy.drawMe("punch");
                        g.internal.enemy.energy = tEnemy.enemyEnergy(g.internal.enemy, g.internal.me.pPower);
                        if (g.internal.enemy.energy < 1)
                            g.roomTimeout = setTimeout(function () { room556.btnclick("enemyLose"); }, 1500);
                        else
                            g.roomTimeout = setTimeout(function () { room556.btnclick("reset") }, 1500);
                    }, 1500);
                }
                else {
                    g.roomTimeout = setTimeout(function () { room556.btnclick("reset") }, 1500);
                }
            }
            else if (nextMovex === "p" || nextMovex === "k") {
                console.log("strike");
                tEnemy.drawAction("epow");
                tEnemy.drawEnemy(g.internal.enemy, nextMovex === "p" ? "punch" : "kick");
                tEnemy.drawMe("blockmiss");
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, nextMovex === "p" ? g.internal.enemy.pPower : g.internal.enemy.kPower);
                g.roomTimeout = setTimeout(function () { room556.btnclick("reset") }, 1500);
            }
            else {
                console.log("both block");
                tEnemy.drawEnemy(g.internal.enemy, "block");
                tEnemy.myEnergy(g.internal.me, 0);
                tEnemy.enemyEnergy(g.internal.enemy, 0);
                tEnemy.drawMe("blockmiss");
                g.roomTimeout = setTimeout(function () { room556.btnclick("reset") }, 1500);
            }
            g.internal.me.prev2 = g.internal.me.prev1;
            g.internal.me.prev1 = name[0];
            */
            break;
        case "inventory":
            chat(1, 556);
            break;
        case "inventoryKill":
            inv.close();
            tEnemy.drawButtons("init", 556, g.internal.enemy);
            break;
        case "pantiesRemove":
        case "shirtRemove":
        case "skirtRemove":
        case "teaseDance":
        case "teaseAss":
        case "teaseCock":
            console.log("h")
            chat(17, 556);
            break;
        case "submitBJ":
        case "submitAss":
            chat(17, 56);
            break;
        case "flee":
            chat(16, 556);
            break;
        case "reactionPunch":
        case "reactionKick":
            if (g.internal.enemy.energy < 1) {
                g.roomTimeout = setTimeout(function () { room556.btnclick("enemyLose"); }, 1500);
            }
            else {
                tEnemy.drawAction("epow");
                tEnemy.drawEnemy(g.internal.enemy, name === "reactionPunch" ? "punch" : "kick");
                tEnemy.drawMe("clear");
                g.internal.me.energy = tEnemy.myEnergy(g.internal.me, name === "reactionPunch" ? g.internal.enemy.pPower : g.internal.enemy.kPower);
                g.roomTimeout = setTimeout(function () { room556.btnclick("reset"); }, 1500);
            }
            break;
        case "enemyLose":
            tEnemy.drawEnemy(g.internal.enemy, "defeat");
            tEnemy.drawMe("clear");

            if (g.internal.me.punchCount > g.internal.me.kickCount)
                g.mod("body", 10);
            else if (g.internal.me.punchCount < g.internal.me.kickCount)
                g.mod("leg", 10);
            else
                g.mod("fitness", 10);
            if (g.internal.enemy.undress === 0)
                chat(0, 556);
            else
                chat(3, 556);
            break;
        case "stripReaction":
            g.internal.enemy.horny += 5;
            if (g.internal.enemy.horny < 50)
                room556.btnclick("reaction");
            else
                room556.btnclick("reset");
            break;
        case "reset":
            tEnemy.drawButtons("init", 556, g.internal.enemy);
            tEnemy.drawAction("clear");
            tEnemy.drawEnemy(g.internal.enemy, "pose");
            tEnemy.drawMe("clear");
            break;
    };
};

room556.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            room556.btnclick("reset");
            break;
        case "reset2":
            room556.btnclick("reset");
            tEnemy.drawButtons("clear", 556, g.internal.enemy);
            setTimeout(function () { if (g.internal.me.energy > 60) chat(5, 556); else chat(6, 556); }, 2000);
            break;
        case "reset2a":
            room556.btnclick("reset");
            break;
        case "sewer":
            inv.add("sewer");
            nav.button({
                "type": "img",
                "name": "me",
                "left": 751,
                "top": 263,
                "width": 531,
                "height": 473,
                "image": "227_fight/sewer.png"
            }, 556);
            break;
        case "leave":
            g.internal.me.punchCount = 10;
            g.internal.me.kickCount = 0;
            g.internal.me.sissyAction = 0;
            g.internal.me.goodBlockCount = 5;
            g.internal.me.energy -= 15;
            tEnemy.updatePlayerStats(g.internal.me, 0, true);
            g.setflag("gworkout");
            cl.undo();
            $("#room-inv").show();
            char.room(551);
            break;
        case "sewerNext":
            if (inv.has("sewer")) {
                chat(18, 556);
            }
            else {
                chat(13, 556);
            }
            break;
        default:
            break;
    }
};

room556.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "g",
            text: "ok shrimp, I'm going to teach you how to fight. We'll start easy. Punch me. To punch me click the 'spar' button, then the " +
                "punch button on the bottom left. ",
            button: [
                { chatID: -1, text: "Ok, click the spar button then the punch button. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "g",
            text: "No, dumbass. I said punch me.",
            button: [
                { chatID: -1, text: "Ohhhh, punch", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "Good. You can follow instructions. Notice how I blocked your punch. If I sucessfully block your punch there's a " +
                "chance I could get a counter attack so make sure you don't just do one move or your opponant will be able to predict " +
                "your moves. ",
            button: [
                { chatID: 3, text: "ok, don't do the same move", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "g",
            text: "Now I'm going to have you punch me again, but this time I'm going to take it, but I'm going to punch you back. Pay " +
                "attention to the energy bars at the bottom. ",
            button: [
                { chatID: -1, text: "Crap.. ok", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "g",
            text: "Now take a look at the life bars, both yours and mine.. go ahead I'll wait... They are at the bottom.",
            button: [
                { chatID: -1, text: "ok", callback: "reset2" }
            ]
        },
        {
            chatID: 5,
            speaker: "g",
            text: "So you came to the fight with a good amount of energy. We're learning to fight, not to kill. You can fight until " +
                "either you or your opponent runs out of energy. ",
            button: [
                { chatID: 7, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "g",
            text: "Notice how low your energy is? When you go out for a fight you want to make sure you start the fight with as much energy " +
                "as you can. We're learning to fight, not to kill. You can fight until either you or your opponent runs out of energy.",
            button: [
                { chatID: 7, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "g",
            text: "If you are low on energy you can go into your inventory and eat an energy snack. If you need some more snacks you can " +
                "buy them it from Spanky. Next I'm going to teach you how to block. You can either block my punch, or block  " +
                "my kick. ",
            button: [
                { chatID: 8, text: "oh, so I can block high to block a punch and block low to block a kick.", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "g",
            text: "You're learning. If you guess right you'll block most of the damage to your energy and have a chance to counter attack. " +
                "If you guess wrong you'll get either punched in the face or kicked in the balls. So only use the block if you notice a pattern " +
                "in your opponent's attack. I'm going to punch you, so block my punch.",
            button: [
                { chatID: -1, text: "Ok, I'm going to block your punch.", callback: "reset2a" }
            ]
        },
        {
            chatID: 9,
            speaker: "g",
            text: "Almost. You're setup to block my kick, not my punch. Try again.",
            button: [
                { chatID: -1, text: "Ok, Block your punch", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "g",
            text: "You make a better bimbo than a fighter. You need to think when you fight. Try again, but block my punch this time. ",
            button: [
                { chatID: -1, text: "Ok, Block your punch", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "g",
            text: "Nice punch. If you can block an opponets punch or kick there's a chance you get to do a counter attack. " +
                "You have the basics for fighting now. Don't worry if you lose a few fights, in time you'll get better. ",
            button: [
                { chatID: 12, text: "How do I get better?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "g",
            text: "The best way is to keep training. If you want to punch better do upper body workouts like pushups. To kick better work " +
                "on that ass with exercises like squats. With enough workouts you'll slowly get better and punch or kick harder. ",
            button: [
                { chatID: -1, text: "What if I can't win a fight?", callback: "sewerNext" }
            ]
        },
        {
            chatID: 13,
            speaker: "g",
            text: "Welllll I guess you could fuck the energy out of them. You could strip down and shake that ass of yours. It's not " +
                "very honorable, volunteering to be someone's bitch.",
            button: [
                { chatID: 14, text: "So I could just fuck my way through my problems?", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "g",
            text: "You could just be a slut and fuck you way out of your problems, but you'll find that taking cock and eating pussy takes " +
                "a lot more energy and should only be used when you have to. ",
            button: [
                { chatID: 15, text: "Will you show me how to fuck my way out of a fight?", callback: "sewer" }
            ]
        },
        {
            chatID: 15,
            speaker: "g",
            text: "Sigh... no. I only teach you how to win! I'm not going to teach you how to be a fuck toy. I'm sure you'll figure that " +
                "out on your own. You're welcome to come back and spar. Oh also " + sc.n("missy") + " told me to give you " +
                "this. It's a crowbar so you can open the manhold cover in the alley near the dance club. Make yourself proud " +
            "and fight your way through.",
            button: [
                { chatID: -1, text: "ok, thanks!", callback: "leave" }
            ]
        },
        {
            chatID: 16,
            speaker: "g",
            text: "You can't run away from your training. Now do as I tell you shrimp.",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "g",
            text: "You need to focus on your training. You won't be able to suck cock out of every situation. Now do as I tell you slut.",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "g",
            text: "By now you've figured you can eat a pussy or take a cock. If you need energy you can always purchase some energy snacks to " +
            "raise your energy. ",
            button: [
                { chatID: -1, text: "ok", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};