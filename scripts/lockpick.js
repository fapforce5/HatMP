lockpick = {};
var room1003 = {};

lockpick.clearTimer = function () {
    if (g.roomTimeout2 !== null) {
        clearTimeout(g.roomTimeout2);
        g.roomTimeout2 = null;
    }
};

lockpick.scheduleTick = function () {
    g.roomTimeout2 = setTimeout(function () {
        invoker.invoke(1003, "btnclick", "tick");
    }, 1000);
};

lockpick.showTimer = function () {
    nav.t({
        type: "img",
        name: "lockpickq_timer",
        left: 1020,
        top: 420,
        font: 30,
        hex: "#000000",
        text: "Time left: " + g.fight.timer
    }, 1003);
};

lockpick.showResult = function (name, image) {
    nav.button({
        "type": "img",
        "name": "lockpickq_kill",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1001_rand/black_25.png"
    }, 1003);

    nav.button({
        "type": "btn",
        "name": name,
        "left": 915,
        "top": 360,
        "width": 400,
        "height": 100,
        "image": image
    }, 1003);
};

lockpick.finish = function (buttonName, giveReward) {
    lockpick.clearTimer();
    if (giveReward)
        levels.mod("pi", 25);
    nav.killbuttonStartsWith("lockpickq_");
    $('#room_footer').show();
    invoker.invoke(g.fight.roomID, "btnclick", buttonName);
};

//difficulty: 1, 2, 3, 4 (number of key slots)
lockpick.init = function (difficulty, btnPressWin, btnPressLost, timer, roomID) {
    $('#room_footer').hide();
    var numberOfKeys = 12;
    var gameDifficulty = gv.get("difficulty");
    nav.killbuttonStartsWith("lockpickq_");
    var keyLocks = new Array();
    var la1 = null;
    var la2 = null;
    var la3 = null;
    var la4 = null;
    var thisKey, winningKey;

    for (i = 0; i < difficulty; i++) {
        for (j = 1; j < numberOfKeys + 1; j++) {
            keyLocks.push(j);
        }
        keyLocks = g.shuffleArray(keyLocks);
        switch (i) {
            case 0: la1 = keyLocks; break;
            case 1: la2 = keyLocks; break;
            case 2: la3 = keyLocks; break;
            case 3: la4 = keyLocks; break;
        }
        keyLocks = new Array();
    }

    winningKey = Math.floor(Math.random() * numberOfKeys);

    if (gameDifficulty > 0) {
        var noChange = Math.floor(Math.random() * difficulty) + 1;
        console.log("noch" + noChange);
        var howManyChange = gameDifficulty === 1 ? 3 : 8;
        if (noChange !== 4 && difficulty > 3) {
            for (i = 0; i < howManyChange; i++) {
                la4[Math.floor(Math.random() * 12)] = la4[winningKey];
            }
        }

        if (noChange !== 3 && difficulty > 2) {
            for (i = 0; i < howManyChange; i++) {
                la3[Math.floor(Math.random() * 12)] = la3[winningKey];
            }
        }

        if (noChange !== 2 && difficulty > 1) {
            for (i = 0; i < howManyChange; i++) {
                la2[Math.floor(Math.random() * 12)] = la2[winningKey];
            }
        }

        if (noChange !== 1) {
            for (i = 0; i < howManyChange; i++) {
                la1[Math.floor(Math.random() * 12)] = la1[winningKey];
            }
        }
    }

    nav.button({
        "type": "img",
        "name": "lockpickq_l_bg",
        "left": 0,
        "top": 0,
        "width": 1920,
        "height": 1080,
        "image": "1003_lockpick/bg.png"
    }, 1003);

    for (i = 0; i < numberOfKeys; i++) {
        nav.button({
            "type": "img",
            "name": "lockpickq_l_" + i,
            "left": 500 + ((i % 4) * 310),
            "top": 500 + (Math.floor(i / 4) * 200),
            "width": 300,
            "height": 100,
            "image": "1003_lockpick/key.png"
        }, 1003);

        for (j = 1; j < difficulty + 1; j++) {
            switch (j) {
                case 1: thisKey = la1[i]; break;
                case 2: thisKey = la2[i]; break;
                case 3: thisKey = la3[i]; break;
                case 4: thisKey = la4[i]; break;
            }
            nav.button({
                "type": "btn",
                "name": winningKey === i ? "lockpickq_winner" : "lockpickq_l_" + i,
                "left": 500 + ((i % 4) * 310),
                "top": 500 + (Math.floor(i / 4) * 200),
                "width": 300,
                "height": 100,
                "image": "1003_lockpick/" + j + "_" + thisKey + ".png"
            }, 1003);
        }
    }

    g.fight = {
        btnPressWin: btnPressWin,
        btnPressLost: btnPressLost,
        roomID: roomID,
        timer: timer
    };

    lockpick.showTimer();

    nav.button({
        "type": "img",
        "name": "lockpickq_master",
        "left": 965,
        "top": 250,
        "width": 300,
        "height": 100,
        "image": "1003_lockpick/bg.jpg"
    }, 1003);

    for (i = 0; i < difficulty; i++) {
        switch (i) {
            case 0: thisKey = la1[winningKey]; break;
            case 1: thisKey = la2[winningKey]; break;
            case 2: thisKey = la3[winningKey]; break;
            case 3: thisKey = la4[winningKey]; break;
        }
        nav.button({
            "type": "img",
            "name": "lockpickq_master",
            "left": 965,
            "top": 250,
            "width": 300,
            "height": 100,
            "image": "1003_lockpick/" + (i + 1) + "_" + thisKey + "x.png"
        }, 1003);
    }

    lockpick.scheduleTick();
};

room1003.btnclick = function (callback) {
    if (callback === "tick") {
        nav.killbutton("lockpickq_timer");
        g.fight.timer--;
        if (g.fight.timer < 1) {
            lockpick.showResult("lockpickq_fail", "1003_lockpick/time.png");
        }
        else {
            lockpick.showTimer();
            lockpick.scheduleTick();
        }
    }
    else if (callback === "lockpickq_winner") {
        lockpick.clearTimer();
        lockpick.showResult("lockpickq_success", "1003_lockpick/success.png");
    }
    else if (callback === "lockpickq_success") {
        lockpick.finish(g.fight.btnPressWin, true);
    }
    else if (callback === "lockpickq_fail") {
        lockpick.finish(g.fight.btnPressLost, false);
    }
    else {
        nav.killbutton(callback);
        g.fight.timer -= 5;
        //if (gv.get("energy") < 15) {
        //    clearTimeout(g.roomTimeout2);
        //    nav.button({
        //        "type": "img",
        //        "name": "lockpickq_kill",
        //        "left": 0,
        //        "top": 0,
        //        "width": 1920,
        //        "height": 1080,
        //        "image": "1001_rand/black_25.png"
        //    }, 1003);
        //
        //    nav.button({
        //        "type": "btn",
        //        "name": "lockpickq_fail",
        //        "left": 915,
        //        "top": 360,
        //        "width": 400,
        //        "height": 100,
        //        "image": "1003_lockpick/fail.png"
        //    }, 1003);
        //}
    }
};

invoker.registerRoom(1003, room1003);
