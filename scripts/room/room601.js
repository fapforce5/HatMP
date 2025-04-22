//Room name
var room601 = {};
room601.main = function () {
    g.internal = {
        bra: cl.c.bra,
        panties: cl.c.panties,
        cust: 0,
        excitement: 0,
        money: 0,
        pose: 0,
        prevDance: -1,
        danceCounter: 0,
        mingleCounter: 0
    };
    room601.btnclick("getCustCount");
    room601.btnclick("btnDefault");
    room601.btnclick("showExcitement");
};

room601.btnclick = function (name) {
    switch (name) {
        case "showExcitement":
            nav.progressBar({
                "type": "img",
                "name": "excitement",
                "left": 400,
                "top": 1040,
                "width": 1400,
                "height": 20,
                "color": "red",
                "maxVal": 100,
                "val": g.internal.excitement,
                "title": "Club Lust"
            }, 601);
            break;
        case "getCustCount":
            nav.killbutton("name");
            switch (Math.floor(g.gethourdecimal())) {
                case 20: g.internal.cust = 3; break;
                case 21: g.internal.cust = 5; break;
                case 22: g.internal.cust = 6; break;
                case 23: g.internal.cust = 8; break;
                case 0: g.internal.cust = 7; break;
                case 1: g.internal.cust = 6; break;
                case 2: g.internal.cust = 4; break;
                default: g.internal.cust = 1;
            }
            
            var patrons = [
                { n: 0, x: 894, y: 414, h: 47, w: 97 },
                { n: 1, x: 1062, y: 386, h: 86, w: 148 },
                { n: 2, x: 603, y: 371, h: 181, w: 213 },
                { n: 3, x: 1163, y: 350, h: 181, w: 247 },
                { n: 4, x: 428, y: 397, h: 223, w: 305 },
                { n: 5, x: 1224, y: 367, h: 261, w: 320 },
                { n: 6, x: 1330, y: 402, h: 527, w: 595 },
                { n: 7, x: 6, y: 380, h: 327, w: 518 },
            ];

            while (patrons.length > g.internal.cust) {
                patrons.splice(g.rand(0, patrons.length), 1);
            }

            for (let i = 0; i < patrons.length; i++) {
                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": patrons[i].x,
                    "top": patrons[i].y,
                    "width": patrons[i].h,
                    "height": patrons[i].w,
                    "image": "601_dance/c" + patrons[i].n + ".png"
                }, 601);
            }
            break;
        case "randDance":
            var thisDance = g.rand(0, 6);
            while (thisDance === g.internal.prevDance) {
                thisDance = g.rand(0, 6);
            }
            g.internal.prevDance = thisDance;
            nav.button({
                "type": "img",
                "name": "name",
                "left": 620,
                "top": 241,
                "width": 534,
                "height": 535,
                "image": "601_dance/s" + thisDance + ".png"
            }, 601);
            break;
        case "dance":
            if (cl.c.panties === null && g.internal.danceCounter > -1) {
                g.internal.danceCounter = g.internal.mingleCounter = 0;
                if (cl.c.bra === null)
                    cl.c.bra = g.internal.bra;
                if (cl.c.panties === null)
                    cl.c.panties = g.internal.panties;

                room601.btnclick("fatfrank");
                chat(1, 601);
                return;
            }
            if (g.internal.danceCounter > 3) {
                g.internal.danceCounter = g.internal.mingleCounter = 0;
                if (cl.c.bra === null)
                    cl.c.bra = g.internal.bra;
                if (cl.c.panties === null)
                    cl.c.panties = g.internal.panties;

                room601.btnclick("fatfrank");
                chat(0, 601);
                return;
            }
            nav.kill();
            room601.btnclick("getCustCount");

            char.addtime(12);
            var danceMoney = Math.floor((g.internal.cust + cl.appearance() + cl.c.excitement) * (g.rand(1, 7) / 1.5));
            if (danceMoney > 0) {
                g.internal.money += danceMoney;
                g.popUpNotice("You recieved $" + danceMoney + " in tips");
            }
            zcl.kill();
            var newPose = g.rand(0, 5);
            var poseClothing = 0;
            if (cl.c.bra === null && cl.c.panties === null)
                poseClothing = 2;
            else if (cl.c.bra === null && cl.c.panties !== null)
                poseClothing = 1;
            else
                poseClothing = 0;

            while (newPose === g.internal.pose) {
                newPose = g.rand(0, 5);
            }
            g.internal.pose = newPose;

            switch (g.internal.pose) {
                case 0: zcl.amazon(450, 675, .25, "", false); break;
                case 1: zcl.bent(450, 650, .2, "", false); break;
                case 2: zcl.poseExpose(350, 675, .22, "", false); break;
                case 3:
                    nav.button({
                        "type": "img",
                        "name": "zzz-clothing-kill",
                        "left": 782,
                        "top": 162,
                        "width": 165,
                        "height": 510,
                        "image": "601_dance/b_" + poseClothing + ".png"
                    }, 601);
                    break;
                default:
                    nav.button({
                        "type": "img",
                        "name": "zzz-clothing-kill",
                        "left": 601,
                        "top": 137,
                        "width": 364,
                        "height": 497,
                        "image": "601_dance/a_" + poseClothing + ".png"
                    }, 601);
                    break;
            }

            sc.select("dance", "601_dance/icon_stage.png", -2);
            sc.select("dance", "601_dance/icon_stage.png", -2);

            if (cl.c.bra !== null) {
                sc.select("topless", "601_dance/icon_topless.png", -1);
            }
            else if (cl.c.panties !== null) {
                sc.select("panties", "601_dance/icon_panties.png", -1);
            }

            sc.select("mingle", "601_dance/icon_mingle.png", 11);

            if (cl.c.panties === null)
                g.internal.excitement += 20;
            else if (cl.c.bra === null && g.internal.excitement < 80)
                g.internal.excitement += 7;
            else if (g.internal.excitement < 40)
                g.internal.excitement += 2;

            g.internal.mingleCounter = 0;
            g.internal.danceCounter++;
            room601.btnclick("showExcitement");
            break;
        case "topless":
            g.internal.danceCounter -= 1;
            cl.c.bra = null;
            room601.btnclick("dance");
            break;
        case "panties":
            g.internal.danceCounter = -1;
            cl.c.panties = null;
            room601.btnclick("dance");
            break;
        case "mingle":
            nav.kill();
            room601.btnclick("getCustCount");
            nav.button({
                "type": "img",
                "name": "name",
                "left": 620,
                "top": 241,
                "width": 534,
                "height": 535,
                "image": "601_dance/s" + g.rand(0, 6) + ".png"
            }, 601);
            zcl.displayMain(100, 500, .15, "clothes", true);
            break;
        case "btnDefault":
            sc.select("dance", "601_dance/icon_stage.png", -2);
            sc.select("mingle", "601_dance/icon_mingle.png", -1);
            sc.select("finish", "601_dance/icon_finish.png", 11);
            break;
        case "mingleBtn":
            sc.select("private", "601_dance/icon_private.png", 10);
            sc.select("bar", "601_dance/icon_bar.png", 11);
            sc.select("finish", "601_dance/icon_finish.png", 13);
            
            break;
        case "fatfrank":
            nav.killall();
            room601.btnclick("getCustCount");
            room601.btnclick("randDance");
            nav.button({
                "type": "img",
                "name": "name",
                "left": 1018,
                "top": 64,
                "width": 586,
                "height": 1016,
                "image": "601_dance/fatfrank.png"
            }, 601);
            zcl.displayMain(250, 900, .14, "clothes", true);
            room601.btnclick("showExcitement");
            break;
        default:
            break;
    }
};

room601.chatcatch = function (callback) {
    switch (callback) {
        case "mingle":
            sc.select("mingle", "601_dance/icon_mingle.png", 10);
            sc.select("finish", "601_dance/icon_finish.png", 11);
            break;
        default:
            break;
    }
};

room601.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!frank",
            text: "youse gotta share the stage. Go mingle with guests. Make them happy " +
                "and make some money, ok? ",
            button: [
                { chatID: -1, text: "Sure.", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!frank",
            text: "youse trying to get the heat on us? Keep your panties on, on stage. Got it! ",
            button: [
                { chatID: -1, text: "Got it.", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};