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
        mingleCounter: 0,
        bar: -1,
        private: 0,
        privateDances: 0,
        privateExcitement: 0,
        privateMoney: 0,
        sissySchool: (g.dt.getDay() === 5 && gv.get("sissySchoolClass") === "finalx"),
        sissySchoolEventCounter: 0,
        rapeCounter: 0,
        rapechar: g.shuffleArray([0, 2, 9, 12, 13]),
    };
    room601.btnclick("getCustCount");
    room601.btnclick("btnDefault");
    room601.btnclick("showExcitement");
};

room601.btnclick = function (name) {
    switch (name) {
        case "showExcitement":
            if (g.internal.excitement > 100)
                g.internal.excitement = 100;

            nav.progressBar({
                "type": "img",
                "name": "excitement",
                "left": 400,
                "top": 50,
                "width": 1400,
                "height": 10,
                "color": "red",
                "maxVal": 100,
                "val": g.internal.excitement,
                "title": "Club Lust. Tip amount: $" + g.internal.money 
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
                case 2: g.internal.cust = 5; break;
                case 3: g.internal.cust = 4; break;
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
            if (g.internal.excitement > 55) {
                var baseLevel = [g.rand(0, 2), g.rand(0, 2), g.rand(0, 2)];
                if (g.internal.excitement > 85)
                    baseLevel = [4, 4, 4];
                else if (g.internal.excitement > 70)
                    baseLevel = [2 + g.rand(0, 2), 2 + g.rand(0, 2), 2 + g.rand(0, 2)];

                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": 326,
                    "top": 243,
                    "width": 582,
                    "height": 802,
                    "image": "601_dance/c_l_" + baseLevel[0] + ".webp"
                }, 601);
                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": 918,
                    "top": 270,
                    "width": 542,
                    "height": 687,
                    "image": "601_dance/c_r_" + baseLevel[1] + ".webp"
                }, 601);
                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": 812,
                    "top": 292,
                    "width": 316,
                    "height": 247,
                    "image": "601_dance/c_b_" + baseLevel[2] + ".webp"
                }, 601);

                var stxt = [
                    "Dat ASS!",
                    "I want to<br/>squeeze dem!",
                    "Cum here!<br/>Gimmie sum of dat!",
                    "I'm gunna make<br/>you my future x-girlfriend",
                    "I wanna see<br/>where you pee from!",
                    "Say hello<br/>to my cock!",
                    "Girl! You hurtin'<br/>for a squirtin'",
                    "Mama!",
                    "Shake dem<br/>titties girl!",
                    "Nice ass",
                    "I'm gunna take<br/>you home to mom!",
                    "Shake dat<br/>ass ho!",
                    "I'm gunna fill<br/>dat ass up!"
                ];
                
                for (let i = 0; i < (baseLevel[0] + 1) * 2; i++) {
                    let sindex = g.rand(0, stxt.length);
                    nav.t({
                        type: "img",
                        name: "name",
                        left: g.rand(300, 1500),
                        top: g.rand(200, 600),
                        font: (i > 10 ? 40 : 24 + (i * 2)),
                        hex: "#ffffff",
                        stroke: "black",
                        text: stxt[sindex]
                    }, 601);
                    stxt.splice(sindex, 1);
                }
            }
            break;
        case "randDance":
            var thisDance;
            if (!g.internal.sissySchool) {
                thisDance = g.rand(0, 6);
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
            }
            else {
                thisDance = g.rand(0, 3);
                while (thisDance === g.internal.prevDance) {
                    thisDance = g.rand(0, 3);
                }
                g.internal.prevDance = thisDance;
                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": 620,
                    "top": 241,
                    "width": 534,
                    "height": 535,
                    "image": "601_dance/t" + thisDance + ".png"
                }, 601);
            }
            break;
        case "rapeEnd":
            if (g.internal.rapeCounter < 2)
                rape.init(g.internal.rapechar[0], null, 601, "rapeEnd");
            else {
                nav.kill();
                nav.bg("601_dance/bg.jpg");
                nav.button({
                    "type": "img",
                    "name": "name",
                    "left": 1018,
                    "top": 64,
                    "width": 586,
                    "height": 1016,
                    "image": "601_dance/fatfrank.png"
                }, 601);
                chat(30, 601);
            }
            g.internal.rapeCounter++;
            break;
        case "dance":
            if (g.internal.excitement > 95 && g.internal.sissySchool) {
                nav.kill();
                nav.bg("601_dance/sissyEvent0.webp");
                chat(34, 601);
                return;
            }
            if (cl.c.panties === null && g.internal.excitement > 95) {
                    nav.kill();
                    nav.bg("601_dance/rape_3.webp");
                    chat(31, 601);
                return;
            }
            if (g.internal.excitement > 70 && g.rand(0, 2) === 0 && g.internal.danceCounter % 2 === 1) {
                nav.kill();
                if (cl.c.panties === null) {
                    nav.bg("601_dance/rape_2.webp");
                    chat(32, 601);
                    return;
                }
                nav.bg("601_dance/rape_" + g.rand(0, 2) + ".webp");
                g.internal.danceCounter++;
                chat(33, 601);
                return;
            }
            gv.mod("arousal", 10);
            levels.mod("stripper", 10);
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
            var danceMoney = Math.floor((g.internal.cust + (levels.get("stripper").l * 3) + (g.internal.excitement / 12)) * (g.rand(1, 7) / 1.5));
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

            var thisExcite = levels.get("stripper").l;

            if (cl.c.panties === null)
                g.internal.excitement += 12 + thisExcite;
            else if (cl.c.bra === null && g.internal.excitement < 80)
                g.internal.excitement += 3 + thisExcite;
            else if (g.internal.excitement < 40)
                g.internal.excitement += thisExcite;

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
            if (g.gethourdecimal() > 3 && g.gethourdecimal() < 17) {
                room601.btnclick("fatfrank");
                chat(901, 601);
            }
            else if (g.internal.mingleCounter > 4) {
                room601.btnclick("fatfrank");
                chat(12, 601);
            }
            else {
                nav.kill();
                nav.bg("601_dance/bg.jpg");
                room601.btnclick("getCustCount");
                room601.btnclick("randDance");
                zcl.displayMain(100, 500, .15, "clothes", true);
                room601.btnclick("showExcitement");
                room601.btnclick("mingleBtn");
            }
            if (g.internal.sissySchool)
                g.internal.excitement += 4;
            break;
        case "btnDefault":
            sc.select("dance", "601_dance/icon_stage.png", -2);
            sc.select("mingle", "601_dance/icon_mingle.png", -1);
            sc.select("finish", "601_dance/icon_finish.png", 11);
            break;
        case "mingleBtn":
            sc.select("private", "601_dance/icon_private.png", 10);
            sc.select("bar", "601_dance/icon_bar.png", 11);
            if (g.internal.mingleCounter > 2)
                sc.select("dance1", "601_dance/icon_stage.png", 12);
            sc.select("finish", "601_dance/icon_finish.png", 13);
            break;
        case "fatfrank":
            nav.killall();
            nav.bg("601_dance/bg.jpg");
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
        case "bar":
            nav.kill();
            var barppl = [0, 1, 2, 3, 4, 5];
            if (g.internal.sissySchool) {
                if (g.gethourdecimal() < 3)
                    g.internal.excitement += 8;
                else
                    g.internal.excitement += 4;
            }
            nav.bg("601_dance/bar.jpg");

            if (sc.getMission("zoey", "cheating").complete && g.dt.getDay() < 5)
                barppl.push(6);
            
            g.internal.bar = barppl[g.rand(0, barppl.length)];

            if (g.internal.bar === -1 && g.internal.sissySchool)
                g.internal.bar = 7;

            nav.button({
                "type": "img",
                "name": "bar",
                "left": 750,
                "top": 0,
                "width": 761,
                "height": 1080,
                "image": "601_dance/b" + g.internal.bar + ".webp"
            }, 601);
            chat(900, 601);
            break;
        case "private":
            var foundSomeone = false;
            if (g.rand(100 - g.internal.excitement, 0) < 30)
                foundSomeone = true;
            else if (g.rand(0, 8 - levels.get("stripper").l) === 0) {
                foundSomeone = true;
            }
            
            if (foundSomeone) {
                g.internal.private = g.rand(0, 4);
                room601.btnclick("fatfrank");
                chat(14, 601);
            }
            else {
                nav.killbutton("private");
                nav.killbutton("dance1");
                nav.killbutton("bar");
                nav.killbutton("finish");
                zcl.displayMain(305, 610, .04, "clothes", true);
                chat(13, 601);
            }
            break;
        case "dance1":
            g.internal.danceCounter = 0;
            room601.btnclick("dance");
            break;
        case "privateBtn":
            nav.killbutton("private_lap");
            nav.killbutton("private_bra");
            nav.killbutton("private_panties");
            nav.killbutton("private_getDressed");
            sc.select("private_lap", "601_dance/icon_lap.png", -1);
            if (cl.c.bra !== null)
                sc.select("private_bra", "601_dance/icon_topless.png", -2);
            else if (cl.c.panties !== null)
                sc.select("private_panties", "601_dance/icon_panties.png", -2);
            else 
                sc.select("private_getDressed", "601_dance/icon_getdressed.png", -2);

            sc.select("private_rub", "601_dance/icon_rub.png", 1);
            
            break;
        case "private_bra":
            nav.bg("601_dance/d" + g.internal.private + ".jpg");
            g.internal.privateExcitement += (cl.c.chest * 2) + g.rand(5, 15);
            cl.c.bra = null;
            cl.display();
            zcl.displayMain(-100, 400, .2, "clothes", true);
            room601.btnclick("privateBtn");
            break;
        case "private_panties":
            g.internal.privateExcitement += g.rand(10, 20);
            nav.bg("601_dance/d" + g.internal.private + ".jpg");
            cl.c.panties = null;
            cl.display();
            zcl.displayMain(-100, 400, .2, "clothes", true);
            room601.btnclick("privateBtn");
            break;
        case "private_rub":
            gv.mod("arousal", 10);
            char.addtime(7);
            nav.kill();
            if (cl.c.panties !== null) {
                nav.bg("601_dance/drub_p.webp");
                g.internal.privateExcitement += g.rand(15, 30);
            }
            else if (cl.c.chastity !== null) {
                nav.bg("601_dance/drub_c.webp");
                g.internal.privateExcitement += g.rand(25, 35);
            }
            else {
                nav.bg("601_dance/drub_d.webp");
                g.internal.privateExcitement += g.rand(20, 30);
            }

            var privateExcitement = Math.floor(g.internal.privateExcitement / 25);
            if (privateExcitement > 4)
                privateExcitement = 4;
            nav.button({
                "type": "img",
                "name": "bar",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "601_dance/drub_throb" + privateExcitement + ".webp"
            }, 601);
            room601.btnclick("private_tipHigh");
            if (privateExcitement === 4)
                nav.next("pivate_cumpants");
            else
                room601.btnclick("privateBtn");
            break;
        case "pivate_cumpants":
            nav.killbutton("pivate_cumpants");
            chat(15, 601);
            break;
        case "private_getDressed":
            nav.bg("601_dance/d" + g.internal.private + ".jpg");
            cl.c.bra = g.internal.bra;
            cl.c.panties = g.internal.panties;
            cl.display();
            zcl.displayMain(-100, 400, .2, "clothes", true);
            room601.btnclick("privateBtn");
            break;
        case "private_lap":
            if (g.internal.sissySchool) {
                if (g.gethourdecimal() < 3)
                    g.internal.excitement += 8;
                else
                    g.internal.excitement += 4;
            }
            gv.mod("arousal", 5);
            levels.mod("stripper", 5);
            char.addtime(7);
            nav.bg("601_dance/d" + g.internal.private + ".jpg");
            var newPose1 = g.rand(0, 5);
            var poseClothing1 = 0;
            if (cl.c.bra === null && cl.c.panties === null)
                poseClothing1 = 2;
            else if (cl.c.bra === null && cl.c.panties !== null)
                poseClothing1 = 1;
            else
                poseClothing1 = 0;

            while (newPose1 === g.internal.pose) {
                newPose1 = g.rand(0, 5);
            }
            g.internal.pose = newPose1;

            switch (g.internal.pose) {
                case 0: zcl.amazon(500, 715, .5, "", false); break;
                case 1: zcl.pucker(475, 959, .25, "", false); break;
                case 2: zcl.poseExpose(350, 750, .35, "", false); break;
                case 3: zcl.pucker(475, 959, .25, "", false);
                    //set this as twerk - future
                    break;
                default:
                    nav.killbutton("zzz-clothing-kill");
                    nav.button({
                        "type": "img",
                        "name": "zzz-clothing-kill",
                        "left": 650,
                        "top": 100,
                        "width": 655,
                        "height": 894,
                        "image": "601_dance/a_" + poseClothing1 + ".png"
                    }, 601);
                    break;
            }
            room601.btnclick("private_tipLow");
            room601.btnclick("privateBtn");
            g.internal.danceCounter++;
            if (g.internal.danceCounter > g.internal.privateDances) {
                chat(16, 601);
            }
            break;
        case "private_tipHigh":
            var th = Math.floor(g.internal.excitement / 10) + cl.appearance();
            th += Math.round((g.internal.private + 1) * 1.5);
            th *= 2;
            g.internal.privateMoney += g.rand(Math.floor(th / 2), th * 2);
            break;
        case "private_tipLow":
            var tl = Math.floor(g.internal.excitement / 10) + cl.appearance();
            tl += (g.internal.private + 1) * 2;
            g.internal.privateMoney += g.rand(Math.floor(tl / 2), tl * 2);
            break;
        case "chrisPrivate":
            gv.mod("arousal", 20);
            nav.bg("601_dance/chrisPrivate" + g.internal.danceCounter + ".webp");
            if (g.internal.danceCounter === 8) {
                nav.killbutton("chrisPrivate");
                chat(24, 601);
            }
            g.internal.danceCounter++;
            break;
        case "finish":
            room601.btnclick("fatfrank");
            if (g.internal.sissySchool)
                daily.set("stripper");
            chat(901, 601);
            break;
        case "sissyEvent":
            if (g.internal.sissySchoolEventCounter > 7) {
                nav.killbutton("sissyEvent");
                chat(43, 601);
            }
            else {
                nav.bg("601_dance/sissyEvent" + g.internal.sissySchoolEventCounter + ".webp");
            }
            g.internal.sissySchoolEventCounter ++;
            break;
        default:
            break;
    }
};

room601.chatcatch = function (callback) {
    switch (callback) {
        case "sissyEvent1":
        case "sissyEvent2":
        case "sissyEvent3":
        case "sissyEvent8":
            nav.bg("601_dance/" + callback + ".webp");
            break;
        case "chrisPrivate0":
            nav.kill();
            nav.bg("601_dance/" + callback + ".webp");
            if (sc.getMissionTask("tony", "strip", 2).notStarted) {
                chat(19, 601);
            }
            break;
        case "chrisPrivate2":
            cl.c.panties = cl.c.bra = null;
            cl.display();
            nav.bg("601_dance/" + callback + ".webp");
            break;
        case "chrisPrivate3":
            nav.kill();
            nav.bg("601_dance/chrisPrivate0.webp");
            zcl.assup(700, 500, .8, "", true);
            nav.button({
                "type": "img",
                "name": "zzz-clothing-kill",
                "left": 1004,
                "top": 241,
                "width": 720,
                "height": 839,
                "image": "601_dance/chrisPrivate3.webp"
            }, 601);
            break;
        case "chrisPrivate4":
            nav.kill();
            nav.bg("601_dance/chrisPrivate4.webp");
            g.internal.danceCounter = 5;
            nav.next("chrisPrivate")
            break;
        case "chrisPrivate9":
            nav.kill();
            nav.bg("601_dance/chrisPrivate9.webp");
            break;
        case "chrisPrivateEnd":
            g.internal.money += 150;
            g.popUpNotice("You earned $150");
            room601.btnclick("mingle");
            break;
        case "mingle":
            //sc.select("mingle", "601_dance/icon_mingle.png", 8);
            //sc.select("mingle", "601_dance/icon_mingle.png", 10);
            //sc.select("finish", "601_dance/icon_finish.png", 11);
            nav.kill();
            room601.btnclick("mingle");
            break;
        case "mingleInc":
            char.addtime(20);
            g.internal.mingleCounter++;
            room601.btnclick("mingle");
            break;
        case "excitementInc":
            g.internal.excitement += levels.get("stripper").l + 12;
            room601.btnclick("showExcitement");
            g.popUpNoticeBottom("Everyone loved that!");
            break;
        case "dance":
            g.internal.danceCounter = 0;
            g.internal.mingleCounter = 0;
            room601.btnclick("dance");
            break;
        case "mingleStart":
            g.internal.mingleCounter = 0;
            g.internal.danceCounter = 0;
            room601.btnclick("mingle");
            break;
        case "private":
            nav.kill();
            nav.bg("601_dance/d" + g.internal.private + ".jpg");
            zcl.displayMain(-100, 400, .2, "clothes", true);
            g.internal.privateExcitement = 0;
            g.internal.privateMoney = 0;
            g.internal.danceCounter = 0;
            g.internal.privateDances = g.rand(3, 6);
            room601.btnclick("privateBtn");
            break;
        case "privateEnd":
            nav.kill();
            nav.bg("601_dance/d_empty.webp");
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
            if (cl.c.panties === null) {
                daily.set("stripper");
                chat(17, 601);
            }
            else {
                cl.c.bra = g.internal.bra;
                cl.display();
                chat(902, 601);
            }
            break;
        case "leave":
            char.room(602);
            break;
        case "kickout":
            daily.set("stripper");
            char.addtime(60);
            char.room(0);
            break;
        case "rape0":
            nav.bg("601_dance/rape_bg.webp");
            g.internal.rapeCounter++;
            rape.init(g.internal.rapechar[0], null, 601, "rapeEnd");
            g.internal.rapechar.splice(0, 1);
            break;
        case "dance1":
            nav.kill();
            nav.bg("601_dance/bg.jpg");
            room601.btnclick("dance");
            break;
        case "sissyEvent4":
            g.internal.sissySchoolEventCounter = 5;
            nav.bg("601_dance/sissyEvent4.webp");
            nav.next("sissyEvent"); 
            break;
        case "sissyEventEnd":
            if (g.gethourdecimal() > 17)
                char.addDays(1);
            char.settime(3, 0);
            levels.oralGive(3, true, false, "m");
            levels.oralGive(2, false, false, "m");
            levels.oralGive(4, false, false, "m");
            levels.anal(3, false, "m", true);
            levels.anal(2, false, "m", true);
            levels.anal(4, false, "m", true);
            gv.mod("money", 1000);
            daily.set("stripper");
            char.room(602);
            break;
        default:
            break;
    }
};

room601.chat = function (chatID) {
    if (chatID === 902) {
        g.internal.money = + g.internal.privateMoney;
        return {
            chatID: 902,
            speaker: "!frank",
            text: "That guy tipped you $" + g.internal.privateMoney + " good job. Now " +
                "get back on da floor and make us some more money, toots. ",
            button: [
                { chatID: -1, text: "Ok.", callback: "mingleInc" }
            ]
        };
    }
    else if (chatID === 901) {
        let moneyMade = Math.floor(g.internal.money / 2);
        if (moneyMade > 0)
            gv.mod("money", moneyMade);
        if (g.gethourdecimal() > 3)
            return {
                chatID: 13,
                speaker: "!frank",
                text: "Hey! Clubs closed. You made $" + g.internal.money + " tonight. You " +
                    "get half, $" + moneyMade + ". Now go change. ",
                button: [
                    { chatID: -1, text: "ok!", callback: "leave" },
                ]
            };
        return {
            chatID: 13,
            speaker: "!frank",
            text: "Duckin' out early? You made $" + g.internal.money + " tonight. You " +
                "get half, $" + moneyMade + ". Now go change. ",
            button: [
                { chatID: -1, text: "ok!", callback: "leave" },
            ]
        };
    }
    else if (chatID === 900) {
        switch (g.internal.bar) {
            case 0:
                if (g.internal.sissySchool) {
                    return {
                        chatID: 900,
                        speaker: "!sporty",
                        text: "This is so awesome! Love having all our sissy friends here! " +
                            "No bitchy girls, just a bunch of horny fun loving sissies! I " +
                            "wish it could be like this all the time! Maybe they'll let us " +
                            "do Femboy Friday every week! Well, gotta make that money! Love you " +
                            "sweetie!",
                        button: [
                            { chatID: -1, text: "Love you too! ", callback: "mingleInc" }
                        ]
                    };
                }
                else {
                    if (sc.getMissionTask("sporty", "corrupt", 1).notStarted) {
                        sc.completeMissionTask("sporty", "corrupt", 1);
                        return {
                            chatID: 900,
                            speaker: "!sporty",
                            text: "Hi! I don't know if you've taken a walk in the forest, but stay away " +
                                "from the cabin! I got lost and ended up there and it was AMAZING!!!" +
                                "...err, well amazing for me. You may not like it, but I had so much fun! " +
                                "but really. Don't go there. Unless you like danger. ",
                            button: [
                                { chatID: -1, text: "Ok.", callback: "mingleInc" }
                            ]
                        };
                    }
                    return {
                        chatID: 900,
                        speaker: "!sporty",
                        text: "So much fun here, but some of these girls are total bitches! I just " +
                            "want to grind on some cock and get rent money and they act like I'm " +
                            "stealing from them. Oh well. I'm going to go twerk on some cock! Love you!",
                        button: [
                            { chatID: -1, text: "Love you! ", callback: "mingleInc" }
                        ]
                    };
                }
            case 1:
                if (g.internal.sissySchool) {
                    return {
                        chatID: 900,
                        speaker: "!chris",
                        text: "Is it just me or does something feel off to you? My regulars are " +
                            "a bit more handsy today and one even said he was going to cum so " +
                            "deep in me I'll be coughing his cum up. Usually he's really nice. ",
                        button: [
                            { chatID: -1, text: "I'm sure it's nothing. Probably " + sc.n("timothy") + " getting them all worked up.", callback: "mingleInc" }
                        ]
                    };
                }
                return {
                    chatID: 900,
                    speaker: "!chris",
                    text: "So glad I found you! I'm about to do a private dance for one " +
                        "of my regulars. Do you want to join me? He loves seeing two girls " +
                        "dyke out. ",
                    button: [
                        { chatID: -1, text: "Totally", callback: "chrisPrivate0" },
                        { chatID: -1, text: "Naw. I'm working on something", callback: "mingleInc" },
                    ]
                };
            case 2:
                if (sissy.st[28].ach)
                    return {
                        chatID: 900,
                        speaker: "!bbc",
                        text: "Hey! Didn't I see you in that Sissy School? My boy came deep " +
                            "in that ass! Hahaha. He said you wiggle them hips like a real " +
                            "hungry slut. I like to fuck fem bois like you at the Pink Room. " +
                            "Maybe I'll see you there. ",
                        button: [
                            { chatID: -1, text: "I'll be looking for you! ", callback: "mingleInc" }
                        ]
                    };
                return {
                    chatID: 900,
                    speaker: "!bbc",
                    text: "I don't do private dances. Just here with my boys. ",
                    button: [
                        { chatID: -1, text: "Oh. ok", callback: "mingleInc" },
                    ]
                };
            case 3:
                if (g.internal.sissySchool)
                    return {
                        chatID: 900,
                        speaker: "!bbc",
                        text: "I'm going to love fucking those holes of yours later!",
                        button: [
                            { chatID: -1, text: "Huh? I have to keep my panties on mister. ", callback: "mingleInc" },
                        ]
                    };
                return {
                    chatID: 900,
                    speaker: "!bbc",
                    text: "Hey. I do love a girl-boy, but I'm here to get some pussy. Maybe " +
                        "I'll catch you later. ",
                    button: [
                        { chatID: -1, text: "Oh. ok", callback: "mingleInc" },
                    ]
                };
            case 4:
                return {
                    chatID: 900,
                    speaker: "!girl",
                    text: "hickup! You are so sexy! Maybe it's the beer, but I didn't see your " +
                        "balls hanging from your panties I would totally think you're a chick! ",
                    button: [
                        { chatID: -1, text: "Oh. Thanks?", callback: "mingleInc" },
                    ]
                };
            case 5:
                return {
                    chatID: 900,
                    speaker: "!bwc",
                    text: "Ugh. Another boy pretending to be a girl. How quaint.  ",
                    button: [
                        { chatID: -1, text: "ok...", callback: "mingleInc" },
                        { chatID: 2, text: "Well I think you're quaint.", callback: "" },
                    ]
                };
            case 6:
                if (sc.getMissionTask("chloe", "random", 0).notStarted) {
                    sc.completeMissionTask("chloe", "random", 0);
                    return {
                        chatID: 900,
                        speaker: "chloe",
                        text: "Oh hi! I don't think we've talked since you told on me to " + sc.n("zoey") + ". ",
                        button: [
                            { chatID: 7, text: "Oh no...", callback: "" }
                        ]
                    };
                }
                return {
                    chatID: 900,
                    speaker: "chloe",
                    text: "So. Do you and that cute little butt of yours want to join me " +
                        "in visiting the C.U.M. church?",
                    button: [
                        { chatID: -1, text: "Not right now. Thanks...", callback: "mingleInc" }
                    ]
                };
            case 7:
                return {
                    chatID: 900,
                    speaker: "!thomas",
                    text: "This is so crazy right? I would never dream about going into " +
                        "a place like this, and here I am in my underwear just chatting with " +
                        "random guys! I hope I look ok. Everyone's so nice to me, but I can't " +
                        "tell if think think I'm cute. ",
                    button: [
                        { chatID: 26, text: "You're crazy! You're hot as hell!", callback: "" }
                    ]
                };
        }
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "!frank",
            text: "youse gotta share the stage. Go mingle with guests. Make them happy " +
                "and make some money, ok? ",
            button: [
                { chatID: -1, text: "Sure.", callback: "mingleStart" }
            ]
        },
        {
            chatID: 1,
            speaker: "!frank",
            text: "youse trying to get the heat on us? Keep your panties on, on stage. Got it! ",
            button: [
                { chatID: -1, text: "Got it.", callback: "mingleStart" }
            ]
        },
        {
            chatID: 2,
            speaker: "!bwc",
            text: "I'm not quaint. You probably don't even know what that means. ",
            button: [
                { chatID: 3, text: "I know what it means! I'm not stupid!", callback: "" },
                { chatID: 4, text: "My bimbo brain doesn't know weird words", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "!bwc",
            text: "Sure. That's why you're shaking your tits and not in school. ugh.  ",
            button: [
                { chatID: -1, text: "gggrrrr", callback: "mingleInc" },
            ]
        },
        {
            chatID: 4,
            speaker: "!bwc",
            text: "I know. You have the look of someone that eats silicon packets. I would " +
                "never fuck someone as stupid as you. I'm much too rich. ",
            button: [
                { chatID: -1, text: "gggrrrr", callback: "mingleInc" },
                { chatID: 5, text: "Are you really rich mister? Prove it! ", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "!bwc",
            text: "Pssst! I'm so rich I can buy everyone here a drink of the finest brandy and " +
                "not even think twice. I'll prove it. DRINKS FOR EVERYONE! ON ME!  ",
            button: [
                { chatID: 6, text: "Oh wow! You really are rich mister! ", callback: "excitementInc" },
            ]
        },
        {
            chatID: 6,
            speaker: "!bwc",
            text: "I know. Now I'm going to fuck a high class slut, not some gutter trash " +
                "like you. ",
            button: [
                { chatID: -1, text: "You have fun mister! ", callback: "mingleInc" },
            ]
        },
        {
            chatID: 7,
            speaker: "chloe",
            text: "Oh. Don't worry. I'm not mad. That wasn't going to last. Too much work " +
                "pretending like she's the only one I was fucking. I would have broke it off " +
                "sooner, but that pussy is just so sweet! And when she fuck, she fucks with " +
                "her entire soul. So nice. Guys just fuck me with their cocks, ya know. ",
            button: [
                { chatID: 8, text: "Oh. She really is the greatest. ", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "chloe",
            text: "Yeah. So have you ever thought about searching for a higher power, a meaning " +
                "to life? ",
            button: [
                { chatID: 9, text: "A higher power? ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "chloe",
            text: "Yes. I'm a member of the Carnal Union of Mortals and you would fit right in! " +
                "We're always looking for girls like you. It really is a great time, and you have " +
                "such a cute butt I know they'll love to have you join us. You know you should have " +
                "a plan when Azrael comes and remakes the earth in his image. ",
            button: [
                { chatID: 10, text: "Oh! well...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "chloe",
            text: "You really should have a plan becuase he's coming and all nonbelievers will " +
                "be removed from this earth. You should attend a service. We meet Friday nights, but " +
                "you'll need some help getting to our church. Can I count you in?",
            button: [
                { chatID: 11, text: "I don't know. I don't think so ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "chloe",
            text: "I can see you're scared. I'll let you think on it and ask you again. " +
                "Later sweet cheeks. ",
            button: [
                { chatID: -1, text: "Later", callback: "mingleInc" },
            ]
        },
        {
            chatID: 12,
            speaker: "!frank",
            text: "Hey! Youse need to get up on that stage and shake your butt. It's your " +
                "turn! ",
            button: [
                { chatID: -1, text: "ok!", callback: "dance" },
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Damn! I can't find anyone to dance on!",
            button: [
                { chatID: -1, text: "...", callback: "mingleInc" },
            ]
        },
        {
            chatID: 14,
            speaker: "!frank",
            text: "Hey! Someone wants a private dance. Shake your ass to room #2. " +
                "Remember, keep your panties on, and if they take their dick out let " +
                "me know and I'll rearrange their face. 'K?",
            button: [
                { chatID: -1, text: "K!", callback: "private" },
            ]
        },
        {
            chatID: 15,
            speaker: "!boy",
            text: "Oh no! I uh.... I have to go. You were great! Sorry!",
            button: [
                { chatID: -1, text: "Ok", callback: "privateEnd" },
            ]
        },
        {
            chatID: 16,
            speaker: "boy",
            text: "You were amazing, but I'm totally out of money. ",
            button: [
                { chatID: -1, text: "...", callback: "privateEnd" },
            ]
        },
        {
            chatID: 17,
            speaker: "!frank",
            text: "Hey youse! I said panties on! You trying to get us in trouble with the " +
                "law? You're done for today. Youse gotta follow my rules! Just for that I'm " +
                "keeping all your tips today. Now go! ",
            button: [
                { chatID: -1, text: "Damn it!", callback: "leave" },
            ]
        },
        {
            chatID: 18,
            speaker: "!chris",
            text: "Hi daddy. I brought my friend, " + sc.n("me") + ". She's the one I told " +
                "you about. One of the few girls dirtier than me and we're going to do " +
                "anything you want daddy.",
            button: [
                { chatID: 19, text: "Mmmm", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!boy",
            text: "That's my good little girl. You know what daddy likes. I want to see " +
                "you two kiss each other. Like really kiss each other. Love watching " +
                "dyke sluts. ",
            button: [
                { chatID: 20, text: "Mmmm", callback: "chrisPrivate2" },
            ]
        },
        {
            chatID: 20,
            speaker: "!boy",
            text: "Fuck yeah! Love horny sluts! " + sc.n("!chris") + " I want to see you " +
                "eat her ass! It gets me so hard to see a chick just get to it!",
            button: [
                { chatID: 21, text: "...but we're not supposed to take off our panties.", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "!chris",
            text: "Oh stop. Don't be a prude and let me at that ass! ",
            button: [
                { chatID: 22, text: "[Take off your panties so she can eat your ass.]", callback: "chrisPrivate3" },
                { chatID: -1, text: "No. We're supposed to leave our panties on. I'm leaving.", callback: "mingleInc" },
            ]
        },
        {
            chatID: 22,
            speaker: "!boy",
            text: "That's my good little girls, just keep eating that ass so daddy can cum. " +
                "I want to hear you two moan like the horny sluts you are. ",
            button: [
                { chatID: 23, text: "....", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "!chris",
            text: "Oh yes daddy. I love it when you stroke your penis while I play with another " +
                "little girl. It makes me so happy! ",
            button: [
                { chatID: -1, text: "....", callback: "chrisPrivate4" },
            ]
        },
        {
            chatID: 24,
            speaker: "!boy",
            text: "You both made daddy so happy my good little girls. Maybe I'll see you two " +
                "again. ",
            button: [
                { chatID: 25, text: "....", callback: "chrisPrivate9" },
            ]
        },
        {
            chatID: 25,
            speaker: "!chris",
            text: "You were wonderful! I'll tell Frank to give you half my tip. You earned it with that " +
                "sweet tasting ass baby! ",
            button: [
                { chatID: -1, text: "Thanks! You eat ass like a champ! ", callback: "chrisPrivateEnd" },
            ]
        },
        {
            chatID: 26,
            speaker: "!thomas",
            text: "pssst. You're supposed to say that. I did see a cute guy. I wonder " +
                "if he's into a girl like me? ",
            button: [
                { chatID: 27, text: "You're crazy! There's giant banner that says Femboy Friday! He's totally into girls like you!", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "!thomas",
            text: "Yeah. I hope he doesn't ask for a dance. I'm so bad at it! I practiced " +
                "strip dancing on my chair today and I'm just so awkward! I'm afraid if he " +
                "asks me for a dance he'll just get bored and walk away. ",
            button: [
                { chatID: 28, text: "...", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "me",
            text: "You're thinking too hard. Just talk to him and slowly rub your body " +
                "oh his. Don't get too desperate, just tease him a little. Casually rub " +
                "his inner thigh. Then rub your butt on his weiner. If he's hard then he's " +
                "totally into you. Just leave him wanting more. ",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "!thomas",
            text: "hmmmm I guess I can do that. Let me go find him! Thanks, I needed the pep " +
                "talk!",
            button: [
                { chatID: -1, text: "You go girl!", callback: "mingleInc" },
            ]
        },
        {
            chatID: 30,
            speaker: "!frank",
            text: "What the fuck was that? Youse trying to get us closed down! " +
                "I had to kick dem all out, and I gots ta kick you out too! Maybe " +
                "walking home naked will teach you some respect! ",
            button: [
                { chatID: -1, text: "What no! I need my clothes! ", callback: "kickout" },
            ]
        },
        {
            chatID: 31,
            speaker: "me",
            text: "Hey! Control yourself! Stop pulling me!!! ",
            button: [
                { chatID: -1, text: "...", callback: "rape0" },
            ]
        },
        {
            chatID: 32,
            speaker: "me",
            text: "OOoffff! I'm trying to dance here! Get your finger out of my butt!",
            button: [
                { chatID: -1, text: "...", callback: "dance1" },
            ]
        },
        {
            chatID: 33,
            speaker: "me",
            text: "Hey! Stop that! I'm trying to do my dance!",
            button: [
                { chatID: -1, text: "...", callback: "dance1" },
            ]
        },
        {
            chatID: 34,
            speaker: "missy",
            text: "I didn't get the money you promised me by bringing my sissies to " +
                "your club tonight. ",
            button: [
                { chatID: 35, text: "...", callback: "sissyEvent1" },
            ]
        },
        {
            chatID: 35,
            speaker: "tony",
            text: "I ain't giving you shit! You changed the deal at the last minute! " +
                "You said you'd delivery me sissies that fuck! They're just out there " +
                "dancing like all my other strippers and not fucking no one! You know how " +
                "hard it was to keep the cops away tonight! I promised my clients they'd " +
                "be fucking sissies! And ain't no one fucking out there! Either " +
                "your sissies start fucking, or you ain't getting shit! Capisce?",
            button: [
                { chatID: 36, text: "...", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "missy",
            text: "I said I would deliver sissies! I never promised you or your clients " +
                "sex with my sissies! What in that pea-brain mellon-sized head thought that I " +
                "had guaranteed sex! ",
            button: [
                { chatID: 37, text: "...", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "tony",
            text: "They're sissies! Why would I bring sissies into my club if not to get fucked! " +
                "I tell you what... I'll double my payment, but you gotta let my clients fuck " +
                "your sissies. You can't let me lose face in my own club. It's more than generous, " +
                "and I know how much you need the money. What do you say? ",
            button: [
                { chatID: 38, text: "...", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "missy",
            text: "*grrr* Fine! But I want my money tonight! ",
            button: [
                { chatID: 39, text: "...", callback: "sissyEvent2" },
            ]
        },
        {
            chatID: 39,
            speaker: "!frank",
            text: "You called me up here boss?",
            button: [
                { chatID: 40, text: "...", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "tony",
            text: "Yeah. It's on. Go down and annouce it to everyone.",
            button: [
                { chatID: 41, text: "...", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "!frank",
            text: "Sure thing boss! I'll let everyone know now! ",
            button: [
                { chatID: 42, text: "...", callback: "sissyEvent3" },
            ]
        },
        {
            chatID: 42,
            speaker: "!frank",
            text: "FREE FEMBOY FUCK IS ON! Everyone grab a femboy you want to fuck! " +
                "NO LIMITS!!!!!!!",
            button: [
                { chatID: -1, text: "...", callback: "sissyEvent4" },
            ]
        },
        {
            chatID: 43,
            speaker: "thinking",
            text: "What the hell just happened? One minute I'm stripping on stage and " +
                "then they all just attacked us on cue! They're all just so rough too! " +
                "It's like we're not even human to them, just a hole to get off in! ",
            button: [
                { chatID: 44, text: "...", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "thinking",
            text: "I wonder if the Sissy School knew this was going to happen? Did they set " +
                "us up? No! Missy would never do that. This is so.... oh! He's cumming down " +
                "my throat. I hope that big guy over there takes my ass next!!",
            button: [
                { chatID: 45, text: "...", callback: "sissyEvent8" },
            ]
        },
        {
            chatID: 45,
            speaker: "!frank",
            text: "Youse all did good! Each a you is gunna get $1,000. Now go get " +
                "dressed an get outta 'ere. I gosta get home. ",
            button: [
                { chatID: 10, text: "...", callback: "sissyEventEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};