//Room name
var room329 = {};
room329.main = function () {
    if (daily.get("328fight_lose")) {
        daily.set("328fight_lose", false);
        nav.bg("329_barn/hole3.webp");
        chat(90, 329);
        return;
    }
    if (g.gethourdecimal() > 12 && !g.map.milked && !g.map.barnTooLong) {
        chat(10, 329);
    }
    else if (g.gethourdecimal() > 17 && !g.map.barnTooLong) {
        chat(11, 329);
    }
    else if (sc.getMission("security", "ranch").complete && sc.getMission("philbert", "barn").notStarted) {
        nav.bg("329_barn/ph1.webp");
        chat(0, 329);
    }
    else {
        room329.chatcatch("menu");
    }
};

room329.btnclick = function (name) {
    switch (name) {
        case "icon_look":
            nav.killbuttonStartsWith("icon_");
            nav.killbutton("guard");
            switch (g.rand(0, 3)) {
                case 0:
                    if (!g.map.ppgirl) {
                        char.addtime(45);
                        nav.bg("329_barn/ppgirl0.webp");
                        chat(29, 329);
                    }
                    else if (g.map.hole === -1) {
                        g.map.hole = 0;
                        chat(75, 329);
                    }
                    else if (g.map.av === 0) {
                        g.map.av = 1;
                        nav.kill();
                        nav.bg("329_barn/av0.webp");
                        chat(13, 329);
                    }
                    else if (g.map.hole === 0) {
                        g.map.hole = 1;
                        nav.kill();
                        nav.bg("329_barn/hole0.webp");
                        chat(73, 329);
                    }
                    else {
                        char.addtime(20);
                        chat(9, 329);
                    }
                    break;
                case 1:
                    char.addtime(20);
                    nav.button({
                        "type": "tongue",
                        "name": "ph3",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "329_barn/jar.webp"
                    }, 329);
                    g.map.jars[0].t++;
                    chat(12, 329);
                    break;
                default:
                    char.addtime(20);
                    chat(9, 329);
                    break;
            }
            break;
        case "ph2":
            nav.bg("329_barn/ph2.webp");
            nav.kill();
            g.internal = 0;
            nav.button({
                "type": "tongue",
                "name": "ph3",
                "left": 1030,
                "top": 618,
                "width": 80,
                "height": 100,
                "image": "329_barn/ph3.webp"
            }, 329);
            chat(6, 329);
            break;
        case "ph2no":
            nav.kill();
            nav.bg("329_barn/ph1.webp");
            chat(7, 329);
            break;
        case "ph3":
            if (g.internal === 0) {
                nav.button({
                    "type": "img",
                    "name": "ph3x",
                    "left": 429,
                    "top": 121,
                    "width": 450,
                    "height": 30,
                    "image": "329_barn/ph_lick0.webp"
                }, 329);
            }
            else if (g.internal < 8) {
                nav.modbutton("ph3x", "329_barn/ph_lick" + g.internal + ".webp", null, null);
            }
            else {
                levels.oralass("m", "philbert");
                nav.kill();
                chat(8, 329);
            }
            g.internal++;
            break;
        case "icon_barn":
            char.room(329);
            break;
        case "icon_stall":
            room329.btnclick("stall_backDraw");
            sc.select("icon_barn", "328_farm/icon_barn.webp", 0);
            sc.select("icon_expel", "329_barn/icon_cumfill.webp", 1);
            sc.select("icon_cumdrink", "329_barn/icon_cumdrink.webp", 2);
            break;
        case "icon_cumdrink":
            g.map.temp = 1;
            nav.killbuttonStartsWith("icon_");
            var icon_cumdrinkCounter = 0;
            if (g.map.jars[1].t > 0) {
                sc.select("icon_pissjarboy", "329_barn/icon_pissjarboy.webp", icon_cumdrinkCounter, 329);
                icon_cumdrinkCounter++;
            }
            if (g.map.jars[2].t > 0) {
                sc.select("icon_pissjargirl", "329_barn/icon_pissjargirl.webp", icon_cumdrinkCounter, 329);
                icon_cumdrinkCounter++;
            }
            if (g.map.jars[3].t > 0) {
                sc.select("icon_cumjar", "329_barn/icon_cumjar.webp", icon_cumdrinkCounter, 329);
                icon_cumdrinkCounter++;
            }
            if (g.map.jars[4].t > 0) {
                sc.select("icon_dogcumjar", "329_barn/icon_dogcumjar.webp", icon_cumdrinkCounter, 329);
                icon_cumdrinkCounter++;
            }
            if (g.map.jars[5].t > 0) {
                sc.select("icon_horsecumjar", "329_barn/icon_horsecumjar.webp", icon_cumdrinkCounter, 329);
                icon_cumdrinkCounter++;
            }
            if (g.map.jars[6].t > 0) {
                sc.select("icon_pigcumjar", "329_barn/icon_pigcumjar.webp", icon_cumdrinkCounter, 329);
                icon_cumdrinkCounter++;
            }
            if (g.roomID === 328) {
                sc.selectCancel("icon_bedturn", icon_cumdrinkCounter);
            }
            else {
                sc.selectCancel("icon_stall", icon_cumdrinkCounter);
            }
            break;
        case "icon_pissjarboy":
            g.map.jars[1].t--;
            g.popUpNotice("You drank some piss");
            levels.piss(true, false, false, "m");
            room329.btnclick("icon_stall");
            break;
        case "icon_pissjargirl":
            g.map.jars[2].t--;
            g.popUpNotice("You drank girl's piss");
            levels.piss(true, false, false, "f");
            room329.btnclick("icon_stall");
            break;
        case "icon_cumjar":
            g.map.jars[3].t--;
            g.popUpNotice("You drank cum");
            gv.mod("energy", 100);
            levels.mod("xdress", 10, 999);
            levels.mod("cum", 25);
            room329.btnclick("icon_stall");
            break;
        case "icon_dogcumjar":
            g.map.jars[4].t--;
            g.popUpNotice("You drank doggy cum");
            gv.mod("energy", 150);
            levels.mod("xdress", 10, 999);
            levels.mod("cum", 25);
            room329.btnclick("icon_stall");
            break;
        case "icon_horsecumjar":
            g.map.jars[5].t--;
            g.popUpNotice("You drank horsey cum");
            gv.mod("energy", 200);
            levels.mod("xdress", 10, 999);
            levels.mod("cum", 25);
            room329.btnclick("icon_stall");
            break;
        case "icon_pigcumjar":
            g.map.jars[6].t--;
            g.popUpNotice("You drank piggy cum");
            gv.mod("energy", 300);
            levels.mod("xdress", 10, 999);
            levels.mod("cum", 25);
            room329.btnclick("icon_stall");
            break;
        case "icon_expel":
            if (gv.getButtCum().total === 0) {
                chat(51, 329);
            }
            else if (g.map.jars[0].t === 0) {
                chat(52, 329);
            }
            else {
                g.map.temp = 1;
                nav.kill();
                nav.bg("329_barn/cumjar.webp");
                nav.button({
                    "type": "img",
                    "name": "cumexpel",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "22_toilet/blurp0.png"
                }, 329);
                nav.next("icon_expel0", 329);
            }
            break;
        case "icon_expel0":
            nav.modbutton("cumexpel", "22_toilet/blurp1.png", null, null);
            nav.killbutton("icon_expel0");
            nav.next("icon_expel1", 329);
            break;
        case "icon_expel1":
            nav.modbutton("cumexpel", "22_toilet/blurp2.png", null, null);
            nav.killbutton("icon_expel1");
            nav.next("icon_expel2", 329);
            break;
        case "icon_expel2":
            var getCum329 = gv.getButtCum();
            if (getCum329.total > 0) {

                for (let i = 0; i < g.map.jars.length; i++) {
                    if (g.map.jars[i].n === getCum329.cumType) {
                        g.map.jars[0].t -= 1;
                        g.map.jars[i].t += 1;
                        break;
                    }
                }
            }
            gv.clearButtCum();
            levels.mod("xdress", 15, 999);
            if (g.roomID === 328)
                room328.btnclick("icon_bedturn");
            else
                room329.btnclick("icon_stall");
            break;
        case "stall_backDraw":
            nav.kill();
            nav.bg("328_farm/sleep1.webp");
            var s329c = 0;
            var img329 = 0;
            if (g.map.hole > -1) {
                nav.button({
                    "type": "img",
                    "name": "mat",
                    "left": 1168,
                    "top": 841,
                    "width": 349,
                    "height": 109,
                    "image": "328_farm/sleep_mat.webp"
                }, 329);
                room328.btnclick("hole_progress");
            }
            for (let i = 0; i < g.map.jars.length; i++) {
                img329 = inv.get(g.map.jars[i].n).image;
                for (let j = 0; j < g.map.jars[i].t; j++) {
                    nav.button({
                        "type": "img",
                        "name": "jar",
                        "left": 300 + ((s329c % 25) * 45) + (Math.floor(s329c / 25) % 2 === 0 ? 0 : 20),
                        "top": 940 + (Math.floor(s329c / 25) * 40),
                        "width": 80,
                        "height": 80,
                        "image": "../inv/" + img329
                    }, 329);
                    s329c++;
                }
            }
            break;
        case "icon_brush":
            char.room(326);
            break;
        case "icon_av":
            nav.kill();
            char.addtime(7);
            nav.bg("329_barn/av0.webp");
            sc.select("icon_av0", "329_barn/icon_av0.webp", 0);
            sc.selectCancel("reset", 1);
            break;
        case "icon_av0":
            if (g.map.av === 1) {
                nav.kill();
                char.addtime(7);
                nav.bg("329_barn/av1.webp");
                zcl.displayMain(200, 850, .25, "clothes", true);
                chat(14, 329);
            }
            else {
                nav.kill();
                g.map.av++;
                nav.bg("329_barn/av1.webp");
                zcl.displayMain(200, 850, .25, "clothes", true);
                chat(16, 329);
            }
            break;
        case "icon_ppgirl":
            nav.kill();
            nav.bg("329_barn/ppgirl3.webp");
            chat(40, 329);
            break;
        case "icon_meadow":
            g.map.ppgirldistract = false;
            char.room(328);
            break;
        case "icon_hole":
            if (g.map.ppgirldistract) {
                nav.kill();
                g.map.ppgirldistract = false;
                nav.bg("329_barn/hole0.webp");
                g.roomTimeout = setTimeout(function () {
                    nav.bg("329_barn/hole1.webp");
                    chat(76, 329);
                }, 1200);
            }
            else {
                nav.kill();
                nav.bg("329_barn/hole0.webp");
                chat(979, 329);
            }
            break;
        case "maze":
            nav.kill();
            var g329mapBg = [];
            var g329mapButton = [];
            g.internal.steps++;
            if (g.internal.map[g.internal.x][g.internal.y] === 2)
                g.internal.badStep++;
            if (g.internal.steps > 25 || g.internal.badStep > 2) {
                nav.bg("329_barn/hole2.webp");
                g.internal = null;
                chat(78, 329);
                return;
            }
            if (g.internal.map[g.internal.y][g.internal.x + 1] > 0) {
                g329mapBg.push({
                    "type": "img",
                    "name": "jar",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "329_barn/maze_r.webp"
                });
                g329mapButton.push({
                    "type": "btn",
                    "name": "east",
                    "title": "East",
                    "left": 1600,
                    "top": 460,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/de.png"
                });
            }
            if (g.internal.map[g.internal.y][g.internal.x - 1] > 0) {
                g329mapBg.push({
                    "type": "img",
                    "name": "jar",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "329_barn/maze_l.webp"
                });
                g329mapButton.push({
                    "type": "btn",
                    "name": "west",
                    "title": "West",
                    "left": 300,
                    "top": 460,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/dw.png"
                });
            }
            if (g.internal.y < 12) {
                if (g.internal.map[g.internal.y + 1][g.internal.x] > 0) {
                    g329mapBg.push({
                        "type": "img",
                        "name": "jar",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "329_barn/maze_c.webp"
                    });
                    g329mapButton.push({
                        "type": "btn",
                        "name": "north",
                        "title": "North",
                        "left": 840,
                        "top": 200,
                        "width": 225,
                        "height": 75,
                        "image": "475_fight/dn.png"
                    });
                }
            }
            else {
                g329mapBg.push({
                    "type": "img",
                    "name": "jar",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "329_barn/maze_escape.webp"
                });
                g329mapButton.push({
                    "type": "btn",
                    "name": "escape",
                    "title": "North",
                    "left": 840,
                    "top": 200,
                    "width": 225,
                    "height": 75,
                    "image": "329_barn/icon_escape.webp"
                });
            }
            if (g.internal.y > 0) {
                if (g.internal.map[g.internal.y - 1][g.internal.x] > 0) {
                    g329mapButton.push({
                        "type": "btn",
                        "name": "south",
                        "title": "South",
                        "left": 840,
                        "top": 880,
                        "width": 225,
                        "height": 75,
                        "image": "475_fight/ds.png"
                    });
                }
            }
            else {
                g329mapButton.push({
                    "type": "btn",
                    "name": "exitBarn",
                    "title": "South",
                    "left": 840,
                    "top": 880,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/ds.png"
                });
            }
            $.each(g329mapBg, function (i, v) {
                nav.button(v, 329);
            });
            $.each(g329mapButton, function (i, v) {
                nav.button(v, 329);
            });

            console.log(g.internal.y + " " + g.internal.x + " " + g.internal.steps + " " + g.internal.badStep);
            break;
        case "north":
            g.internal.y++;
            room329.btnclick("maze");
            break;
        case "south":
            g.internal.y--;
            room329.btnclick("maze");
            break;
        case "east":
            g.internal.x++;
            room329.btnclick("maze");
            break;
        case "west":
            g.internal.x--;
            room329.btnclick("maze");
            break;
        case "exitBarn":
            nav.kill();
            nav.bg("329_barn/hole1.webp");
            chat(77, 329);
            break;
        case "escape":
            nav.kill();
            nav.bg("329_barn/hole10.webp");
            chat(84, 329);
            break;
        case "reset":
            char.room(329);
            break;
        default:
            break;
    }
};

room329.chatcatch = function (callback) {
    switch (callback) {
        case "av10":
        case "av11":
        case "av12":
        case "av13":
        case "av14":
        case "av15":
        case "av16":
        case "av18":
        case "av19":
        case "ppgirl2":
        case "ppgirl3":
        case "ppgirlfeed":
        case "hole4":
            nav.bg("329_barn/" + callback + ".webp");
            break;
        case "av4":
        case "hole3":
            nav.kill();
            nav.bg("329_barn/" + callback + ".webp");
            break;
        case "av17":
            levels.anal(6, true, "m", true, "!horse", "horse");
            nav.bg("329_barn/" + callback + ".webp");
            break;
        case "av3":
            nav.kill();
            nav.bg("329_barn/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "ph2":
            nav.bg("329_barn/ph2.webp");
            nav.button({
                "type": "tongue",
                "name": "ph2",
                "left": 970,
                "top": 572,
                "width": 199,
                "height": 146,
                "image": "329_barn/ph2_asshole.webp"
            }, 329);
            nav.button({
                "type": "btn",
                "name": "ph2no",
                "left": 1458,
                "top": 574,
                "width": 264,
                "height": 144,
                "image": "329_barn/ph2_assholeno.webp"
            }, 329);
            break;
        case "stay":
            g.map.staylonger++;
            if (g.rand(0, 3 - g.map.staylonger) < 1) {
                nav.bg("329_barn/trouble.webp");
                g.map.anger += 80;
                chat(74, 329);
            }
            else {
                room329.chatcatch("menu");
            }
            break;
        case "menu":
            nav.kill();
            room328.btnclick("progressbar");
            nav.bg("329_barn/bg.webp");
            if (!g.map.ppgirldistract) {
                nav.button({
                    "type": "img",
                    "name": "guard",
                    "left": 880,
                    "top": 474,
                    "width": 251,
                    "height": 318,
                    "image": "329_barn/g_" + (sc.getMission("security", "ranch").complete ? "p" : "s") + ".webp"
                }, 329);
            }
            sc.select("icon_meadow", "329_barn/icon_meadow.webp", 0);
            sc.select("icon_brush", "329_barn/icon_brush.webp", 1);
            sc.select("icon_look", "329_barn/icon_look.webp", 2);
            sc.select("icon_stall", "329_barn/icon_stall.webp", 3);
            if (g.map.ppgirl) 
                sc.select("icon_ppgirl", "329_barn/icon_ppgirl.webp", 4);
            if (g.map.av > 0) 
                sc.select("icon_av", "329_barn/icon_av.webp", 5);
            if (g.map.hole > 0)
                sc.select("icon_hole", "329_barn/icon_hole.webp", 6);

            break;
        case "icon_stall":
            room329.btnclick("icon_stall");
            break;
        case "finishavclean":
            g.map.avclean = true;
            room328.chatcatch("addtrust");
            char.addtime(30);
            char.room(329);
            break;
        case "ppgirl1":
            g.map.ppgirl = true;
            sc.startMission("ppgirl", "ranch");
            sc.completeMissionTask("ppgirl", "ranch", 0);
            sc.show("ppgirl");
            nav.bg("329_barn/ppgirl1.webp");
            if (sc.getMissionTask("ppgirl", "pp", 2).complete) {
                chat(30, 329);
            }
            else {
                chat(32, 329);
            }
            break;
        case "ppgirlBigUp":
            sc.modLevel("ppgirl", 100, 10);
            break;
        case "ppreset":
            nav.bg("329_barn/ppgirl3.webp");
            break;
        case "ppgirldrink":
            nav.kill();
            if (gv.get("bladder") > .1) {
                nav.bg("329_barn/ppgirl_tinkle.webp");
                gv.set("bladder", 0);
                if (!daily.get("ppgirldrink")) {
                    daily.set("ppgirldrink");
                    sc.modLevel("ppgirl", 34, 10);
                }
                chat(45, 329);
            }
            else
                chat(44, 329);
            break;
        case "ppgirleat":
            if (g.map.ppgirleat) {
                nav.kill();
                g.map.ppgirleat = false;
                sc.modLevel("ppgirl", 75, 10);
                if (sc.getMissionTask("ppgirl", "ranch", 2).complete) {
                    nav.bg("329_barn/ppgirlfeed.webp");
                    chat(50, 329);
                }
                else {
                    nav.bg("329_barn/ppgirl3.webp");
                    sc.completeMissionTask("ppgirl", "ranch", 2);
                    chat(46, 329);
                }
            }
            else
                chat(42, 329);
            break;
        case "ppgirlfavor":
            var ppgirllevel = sc.getLevel("ppgirl");
            if (ppgirllevel < 6)
                chat()
            break;
        case "ppgirldrinkherpee":
            if (sc.getLevel("ppgirl") < 3) {
                chat(55, 329);
            }
            else if (!daily.get("ppgirldrink")) {
                chat(53, 329);
            }
            else if (daily.get("ppgirldrinkherpee")) {
                chat(54, 329);
            }
            else {
                daily.set("ppgirldrinkherpee");
                chat(56, 329);
            }
            break;
        case "ppgirl_pee":
            nav.kill();
            nav.bg("329_barn/ppgirl_pee.webp");
            levels.piss(true, false, false, "f", "ppgirl");
            break;
        case "ppgirljarpee":
            if (sc.getLevel("ppgirl") < 5) {
                chat(58, 329);
            }
            else if (g.map.jars[0].t < 1) {
                chat(60, 329);
            }
            else if (!daily.get("ppgirldrink")) {
                chat(53, 329);
            }
            else if (daily.get("ppgirldrinkherpee")) {
                chat(54, 329);
            }
            else {
                daily.set("ppgirldrinkherpee");
                chat(59, 329);
            }
            break;
        case "ppgirldistract":
            if (sc.getLevel("ppgirl") < 6) {
                chat(62, 329);
            }
            else if (sc.getMissionTask("ppgirl", "ranch", 3).notStarted) {
                sc.completeMissionTask("ppgirl", "ranch", 3);
                chat(63, 329);
            }
            else if (daily.get("ppgirldistract")) {
                nav.kill();
                nav.bg("329_barn/ppgirl2.webp");
                chat(72, 329);
            }
            else {
                daily.set("ppgirldistract");
                g.map.ppgirldistract = true;
                chat(71, 329);
            }
            break;
        case "ppgirl_peejar":
            nav.kill();
            nav.bg("329_barn/ppgirl_peejar.webp");
            g.map.jars[0].t--;
            g.map.jars[2].t++;
            break;
        case "vent0":
            g.internal = {
                x: 1,
                y: 0,
                steps: 0,
                badStep: 0,
                map: [
                    //0,1, 2, 3, 4, 5, 6, 7, 8, 9, 0
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],//0
                    [0, 1, 1, 2, 2, 0, 2, 2, 0, 0, 0],//1
                    [0, 0, 1, 0, 0, 2, 2, 2, 2, 0, 0],//2
                    [0, 2, 1, 0, 0, 2, 0, 0, 0, 0, 0],//3
                    [0, 2, 1, 1, 1, 1, 1, 1, 2, 0, 0],//4
                    [0, 0, 2, 0, 0, 2, 0, 1, 0, 2, 0],//5
                    [0, 2, 0, 2, 0, 2, 0, 1, 2, 2, 0],//6
                    [0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 0],//7
                    [0, 2, 0, 2, 2, 2, 2, 1, 1, 2, 0],//8
                    [0, 2, 2, 2, 0, 2, 0, 0, 1, 0, 0],//9
                    [0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 0],//10
                    [0, 0, 0, 2, 1, 1, 1, 1, 1, 0, 0],//11
                    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],//12
                ]
            }; 
            nav.kill();
            nav.bg("329_barn/maze_bg.webp");
            room329.btnclick("maze");
            break;
        case "hole5":
            char.settime(18, 7);
            nav.bg("326_stable/bg.jpg");
            zcl.double(400, 300, .6, "open", true);
            nav.button({
                "type": "img",
                "name": "rape",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/moo4fb.webp"
            }, 329);
            nav.button({
                "type": "img",
                "name": "rapefg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "329_barn/hole5.webp"
            }, 329);
            break;
        case "hole6":
            nav.killbutton("rapefg");
            break;
        case "hole7":
            levels.anal(3, true, "m", true, "!rancher1");
            levels.oral(3, "m", "!rancher", true);
            nav.modbutton("rape", "328_farm/moo6fb.webp", null, null);
            break;
        case "hole8":
            gv.mod("energy", -99999);
            g.map.trust -= 10;
            g.map.anger += 80;
            g.map.milked = true;
            char.addtime(30);
            g.map.event = "bed";
            char.room(328);
            break;
        case "hole11":
            nav.bg("329_barn/hole11.webp");
            zcl.embarrass(100, 600, .8, "front", true);
            break;
        case "hole12":
            char.settime(23, 47);
            nav.bg("329_barn/" + callback + ".webp");
            break;
        case "hole13":
            nav.bg("325_farm/bg_night.jpg");
            nav.button({
                "type": "img",
                "name": "rapefg",
                "left": 1235,
                "top": 814,
                "width": 135,
                "height": 82,
                "image": "329_barn/hole13.webp"
            }, 329);
            break;
        case "escape":
            missy.set("activeCaseComplete", 1);
            char.addtime(30);
            future.add(JSON.stringify(g.map.jars), 15);
            future.add("room329hole_" + g.map.hole, 15);
            inv.show();
            g.map = null;
            char.room(0);
            break;
        case "reset":
            char.room(329);
            break;
        case "leave":
            g.map.staylonger = 0;
            g.map.event = "meadow";
            char.room(328);
            break;
        default:
            break;
    }
};

room329.chat = function (chatID) {
    if (chatID > 900) {
        let whospeak = sc.getMission("security", "ranch").complete ? "philbert" : "security";
        if (chatID === 1000) {
            g.map.av = 2;
            return {
                chatID: 0,
                speaker: whospeak,
                text: "What are you doing over there?",
                button: [
                    { chatID: 999, text: "Oh.. what? Nothing. ", callback: "" }
                ]
            };
        }
        else if (chatID === 999) {
            nav.bg("329_barn/av2_" + (whospeak === "philbert" ? "p" : "g") + ".webp");
            return {
                chatID: 0,
                speaker: whospeak,
                text: "Awww. I see you're looking at the breeding phantom. It does need to be cleaned. Just " +
                    "open it up, pull out the silcon A.V. and wash it. Be sure to get in the case and wash the " +
                    "back of it. Just be careful. It's really expensive and " + sc.n("rachel") + " will kill you " +
                    "if you break it. ",
                button: [
                    { chatID: -1, text: "oh. ok. ", callback: "reset" }
                ]
            };
        }
        else if (chatID === 980) {
            return {
                chatID: 980,
                speaker: whospeak,
                text: "Trying to suck that horse's dick? Get out of there. NOW!  ",
                button: [
                    { chatID: -1, text: "Movin' on out here boss. ", callback: "reset" }
                ]
            };
        }
        else if (chatID === 979) {
            return {
                chatID: 979,
                speaker: whospeak,
                text: "Trying to suck that horse's dick? Get out of there. NOW!  ",
                button: [
                    { chatID: -1, text: "[I'm going to have to distract that guard somehow if I'm going to slip out]", callback: "reset" }
                ]
            };
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: sc.n("philbert") + "!!!!!!",
                button: [
                    { chatID: 1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "philbert",
                text: "HAHAHAHAHA!!!! Oh my god! Don't tell me you're one of those hucows they keep in the field? " +
                    "You know I knew i would see one of you around here, but I always thought it would be " +
                    sc.n("sporty") + ". She always did have a thing for big dicks. But you! I guess I'm not surprised. " +
                    "You were always a little more weird than the rest of them. ",
                button: [
                    { chatID: 2, text: "You got to get me out of here! They kidnapped me and are forcing me to be here! ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "philbert",
                text: "I'm not going to do that. I love it here. I only have to work a few hours a day and " + sc.n("rachel") +
                    "pays me great! What do I care if she keeps a few of you losers as milking cows. If you ended up here " +
                    "you either belong or you deserve it. ",
                button: [
                    { chatID: 3, text: "No. You gotta help me out! We were sissy school buddies! Sissies help out sissies! ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "philbert",
                text: "You know. When I started going there, I thought that I might be a sissy. But you know what " +
                    "I found out? ",
                button: [
                    { chatID: 4, text: "What? ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "philbert",
                text: "I just love fucking sissies. Don't get me wrong, I still love pussy, but there's something " +
                    "about a sissy that gets my cock rock hard. With bitches you got to spend time with the pussy, spend money " +
                    "on the pussy, be nice to the pussy to even get a wiff. But a sissy. A sissy will stick their " +
                    "tongue up your asshole if you tell them to. You don't got to do nothin'! ",
                button: [
                    { chatID: 5, text: "What? Just tell Missy I'm here.  ", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "philbert",
                text: "I'm never telling anyone you're here. You deserve to be here. You know why. You're just " +
                    "a stupid ass sissy. Go on. Eat my asshole sissy. You know all you're good for is for men " +
                    "like me to use however I want. And I want you to eat my asshole. Get licking sisssy.",
                button: [
                    { chatID: -1, text: "...", callback: "ph2" }
                ]
            },
            {
                chatID: 6,
                speaker: "philbert",
                text: "You don't care about getting out of here. You only care about getting fucked and degrading " +
                    "youself. Keep licking my asshole. I may let you help me out in here. ",
                button: [
                    { chatID: -1, text: "[Keep licking his asshole]", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "philbert",
                text: "*psssht* Don't try to play cool now. I'll let you work in my barn after you eat my " +
                    "ass. Now get out of here before I tell " + sc.n("rachel") + " you tried to run away. ",
                button: [
                    { chatID: -1, text: "asshole", callback: "leave" }
                ]
            },
            {
                chatID: 8,
                speaker: "philbert",
                text: "Just remember. You're stuck here forever because you're nothing but an ass licking whore. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "I didn't find anything this time. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "I should get back to the meadow to get milked. ",
                button: [
                    { chatID: -1, text: "Go back", callback: "leave" },
                    { chatID: -1, text: "Stay here a bit longer. ", callback: "stay" },
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "I should get back to eat. ",
                button: [
                    { chatID: -1, text: "Go back", callback: "leave" },
                    { chatID: -1, text: "Stay here a bit longer. ", callback: "stay" },
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "Sweet! I found an empty jar. ",
                button: [
                    { chatID: -1, text: "[Put it in your stable stall]", callback: "icon_stall" },
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "Huh. I wonder what that thing is. Too high to be a chair. Maybe I'll wait around and " +
                    "see if anyone uses it. ",
                button: [
                    { chatID: -1, text: "[Return to the front of the barn]", callback: "reset" },
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "Hmm... the hole seems soft. Why would a super tall chair have a hole? ",
                button: [
                    { chatID: 15, text: "Maybe I should put my arm in it", callback: "av3" },
                    { chatID: -1, text: "Forget it", callback: "reset" },
                ]
            },
            {
                chatID: 15,
                speaker: "thinking",
                text: "My arm can easity fit in here. Is it a snack hole? No. There's no snacks in here. Weird. ",
                button: [
                    { chatID: 1000, text: "...", callback: "av3" },
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "Time to clean this thing.",
                button: [
                    { chatID: 17, text: "...", callback: "av4" },
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "The silicone is all clean, now to clean the shell of this thing. I'm sure I don't have to clean " +
                    "all the way to the very back. Just the front is probably fine. It's gross back there. Smells like " +
                    "moldy sweat socks. ",
                button: [
                    { chatID: 18, text: "[Clean just the front]", callback: "av4" },
                    { chatID: 19, text: "[Get in there and clean the back]", callback: "av10" },
                ]
            },
            {
                chatID: 18,
                speaker: "thinking",
                text: "All done. Now to go do other things. ",
                button: [
                    { chatID: -1, text: "...", callback: "finishavclean" },
                ]
            },
            {
                chatID: 19,
                speaker: "thinking",
                text: "Oooff. It's hard to get in here",
                button: [
                    { chatID: 20, text: "...", callback: "av11" },
                ]
            },
            {
                chatID: 20,
                speaker: "thinking",
                text: "*ugh* It smells like old cum in here! Why does it smell like old cum!",
                button: [
                    { chatID: 21, text: "...", callback: "av12" },
                ]
            },
            {
                chatID: 21,
                speaker: "me",
                text: "Hey!! Whoa boy! What are you doing!!",
                button: [
                    { chatID: 22, text: "...", callback: "av13" },
                ]
            },
            {
                chatID: 22,
                speaker: "me",
                text: "*aaak* No! It's too big! No!!!",
                button: [
                    { chatID: 23, text: "...", callback: "av14" },
                ]
            },
            {
                chatID: 23,
                speaker: "me",
                text: "AAAAAaaaa!!!! So much pressure on my bussy!!!!!",
                button: [
                    { chatID: 24, text: "...", callback: "av15" },
                ]
            },
            {
                chatID: 24,
                speaker: "me",
                text: "!!!!",
                button: [
                    { chatID: 25, text: "...", callback: "av16" },
                ]
            },
            {
                chatID: 25,
                speaker: "me",
                text: "ow ow ow! So big! Too rough! Too rough!!!! So instense!!!",
                button: [
                    { chatID: 26, text: "...", callback: "av17" },
                ]
            },
            {
                chatID: 26,
                speaker: "thinking",
                text: "OOofff. I just came in this thing. ",
                button: [
                    { chatID: 27, text: "...", callback: "av18" },
                ]
            },
            {
                chatID: 27,
                speaker: "me",
                text: "...",
                button: [
                    { chatID: 28, text: "...", callback: "av19" },
                ]
            },
            {
                chatID: 28,
                speaker: "me",
                text: "So full",
                button: [
                    { chatID: -1, text: "...", callback: "finishavclean" },
                ]
            },
            {
                chatID: 29,
                speaker: "thinking",
                text: "That sounds like someone's crying in their room. ",
                button: [
                    { chatID: -1, text: "[Check it out]", callback: "ppgirl1" },
                    { chatID: -1, text: "[Don't do it]", callback: "reset" },
                ]
            },
            {
                chatID: 30,
                speaker: "ppgirl",
                text: "My toilet? What are you doing here! Are you one of them? ",
                button: [
                    { chatID: 31, text: "No, I'm...", callback: "ppgirl2" },
                ]
            },
            {
                chatID: 31,
                speaker: "ppgirl",
                text: "Please let me go! Do you want me to pee in your mouth? I'll pee in your mouth! " +
                    "I'll pee in your mouth every day. I'll pee in your mouth right now. When ever you " +
                    "want, please just let me go! ",
                button: [
                    { chatID: 33, text: "Oh no. I'm not one of them. [Tell her what happened to you]", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "ppgirl",
                text: "Let me go you bastard! I'll stomp your dick off if you don't let me out of this! " +
                    "I'll never put my tits in that stupid machine! ",
                button: [
                    { chatID: 33, text: "Oh no. I'm not one of them. [Tell her what happened to you]", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "ppgirl",
                text: "That's terrible! They kidnapped me too. While I was running in the forest. They " +
                    "tried to milk me and put their penises in my face. I bit one guy's dick. " +
                    "Hard. I told him not to put it in my face. So they tied me up here. Those bastards! I told " +
                    "that crazy milk lady I'll tear down this entire place if she didn't let me go so they " +
                    "chained me up here! ",
                button: [
                    { chatID: 34, text: "That's terrible. Those chains are in there really good. I don't know if I can free you. ", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "ppgirl",
                text: "I know. I've been trying to loosen them all day now and they won't wiggle the tiniest bit. " +
                    "It's in there really good. But they won't break me! I'll never do what they say, even if " +
                    "I die in this room! ",
                button: [
                    { chatID: 35, text: "...", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "me",
                text: "Hopefully you won't have to die. Just stay strong. I'm working on a plan to get out of here, " +
                    "I just need some time. When I do get out I'll make sure I come back for you. Is there anything " +
                    "I can do to help you? ",
                button: [
                    { chatID: 36, text: "...", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "ppgirl",
                text: "If you could, can you sneak me some food and water. They give me some, but not enough. My lips " +
                    "are so dry and my belly is so hungry. Please anything will help. ",
                button: [
                    { chatID: 37, text: "...", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "me",
                text: "The only food I know is the piles of it, but that's outside. " +
                    "The only water I can get is from a pond. There's no way I'll be able to sneak a cup to " +
                    "the pond and take it back here. The only liquid I can carry is in bladder. ",
                button: [
                    { chatID: 38, text: "...", callback: "" },
                ]
            },
            {
                chatID: 38,
                speaker: "ppgirl",
                text: "*ugh* I'll take what ever I can get. Let me see what I can do. I'll be back. ",
                button: [
                    { chatID: 39, text: "...", callback: "ppgirlBigUp" },
                ]
            },
            {
                chatID: 39,
                speaker: "ppgirl",
                text: "I know. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 40,
                speaker: "ppgirl",
                text: "Hi. So good to see you. ",
                button: [
                    { chatID: -1, text: "Do you need a drink? ", callback: "ppgirldrink" },
                    { chatID: -1, text: "Do you need something to eat? ", callback: "ppgirleat" },
                    { chatID: 43, text: "Can you do me a favor? ", callback: "" },
                    { chatID: -1, text: "Sorry. I'll come back later ", callback: "reset" },
                ]
            },
            {
                chatID: 41,
                speaker: "ppgirl",
                text: "no op ",
                button: [
                    { chatID: 40, text: "...", callback: "ppreset" },
                ]
            },
            {
                chatID: 42,
                speaker: "me",
                text: "Oh. I need to get some food.  ",
                button: [
                    { chatID: 40, text: "...", callback: "ppreset" },
                ]
            },
            {
                chatID: 43,
                speaker: "thinking",
                text: "Ask her to...",
                button: [
                    { chatID: -1, text: "Please pee in my mouth", callback: "ppgirldrinkherpee" },
                    { chatID: -1, text: "Can you pee in a jar for me", callback: "ppgirljarpee" },
                    { chatID: -1, text: "Call the guard over and *distract* him. ", callback: "ppgirldistract" },
                    { chatID: 40, text: "Never mind. ", callback: "ppreset" },
                ]
            },
            {
                chatID: 44,
                speaker: "thinking",
                text: "My bladder's empty. I need to drink some water. ",
                button: [
                    { chatID: 40, text: "...", callback: "ppreset" },
                ]
            },
            {
                chatID: 45,
                speaker: "ppgirl",
                text: "Oh. It's so warm! Thanks! I so needed that. ",
                button: [
                    { chatID: 40, text: "My pleasure", callback: "ppreset" },
                ]
            },
            {
                chatID: 46,
                speaker: "me",
                text: "I brought you some food! It's all I can get. There the food pellets they feed us. ",
                button: [
                    { chatID: 47, text: "...", callback: "" },
                ]
            },
            {
                chatID: 47,
                speaker: "ppgirl",
                text: "That awesome! I'm so so hungry! Where are they? ",
                button: [
                    { chatID: 48, text: "...", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "me",
                text: "oh. I had to smuggle them in my bussy, so they're kinda warm, but fresh today! Uh. " +
                    "I'll just put my bussy against your lips and squeeze them out one at a time into your mouth. " +
                    "Just let me " +
                    "know when you want me to push another out since I'll be facing the other way. ",
                button: [
                    { chatID: 49, text: "...", callback: "ppgirl2" },
                ]
            },
            {
                chatID: 49,
                speaker: "ppgirl",
                text: "Why would I want you to squeeze out food pellets directly from your bussy to my mouth. " +
                    "Just push them out into your hand, then feed me that way. Sometimes!",
                button: [
                    { chatID: 50, text: "Oh. Yes. I guess that would work too. ", callback: "ppgirlfeed" },
                ]
            },
            {
                chatID: 50,
                speaker: "ppgirl",
                text: "I know these taste terrible, but when you're this hungry everything tastes amazing! " +
                    "You're such my hero! ",
                button: [
                    { chatID: 40, text: "Just happy to help. ", callback: "ppreset" },
                ]
            },
            {
                chatID: 51,
                speaker: "thinking",
                text: "I can't fill a cum jar. My bussy is empty. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 52,
                speaker: "thinking",
                text: "I don't have an empty jar. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "ppgirl",
                text: "I can't pee right now. I'm way to thirsty! Can you get me something to drink? ",
                button: [
                    { chatID: 40, text: "oh yeah. Sure. ", callback: "ppreset" },
                ]
            },
            {
                chatID: 54,
                speaker: "ppgirl",
                text: "I've peed everything I can for today. ",
                button: [
                    { chatID: 40, text: "oh yeah. Sure. ", callback: "ppreset" },
                ]
            },
            {
                chatID: 55,
                speaker: "ppgirl",
                text: "I don't really know you well enough to pee in your mouth. ",
                button: [
                    { chatID: 40, text: "[Need " + sc.n("ppgirl") + " Level 3]", callback: "ppreset" },
                ]
            },
            {
                chatID: 56,
                speaker: "ppgirl",
                text: "Since you've been so nice to me, I'll pee in your mouth. ",
                button: [
                    { chatID: 57, text: "[Slide your head under her pussy]", callback: "ppgirl_pee" },
                ]
            },
            {
                chatID: 57,
                speaker: "ppgirl",
                text: "Hehehe. You must really like pee. Weirdly, this is the highlight of my day. Drink " +
                    "up my little toilet. ",
                button: [
                    { chatID: 40, text: "*gulp*", callback: "ppreset" },
                ]
            },
            {
                chatID: 58,
                speaker: "ppgirl",
                text: "I don't really know you well enough to give you a jar of my pee. What do you " +
                    "even do with a jar of pee?",
                button: [
                    { chatID: 40, text: "[Need " + sc.n("ppgirl") + " Level 5]", callback: "ppreset" },
                ]
            },
            {
                chatID: 59,
                speaker: "ppgirl",
                text: "Since you've been so nice to me, I'll pee in a jar for you. You'll have to slide " +
                    "the jar under me. My hands are kinda 'tied up' hehehe",
                button: [
                    { chatID: 61, text: "[Slide a jar under her pussy]", callback: "ppgirl_peejar" },
                ]
            },
            {
                chatID: 60,
                speaker: "thinking",
                text: "I don't have any jars here. Drat!",
                button: [
                    { chatID: 61, text: "...", callback: "ppreset" },
                ]
            },
            {
                chatID: 61,
                speaker: "ppgirl",
                text: "The sound of peeing in a jar is kinda funny. glug glug glug!",
                button: [
                    { chatID: 40, text: "[Take the jar of her fresh warm piss]", callback: "ppreset" },
                ]
            },
            {
                chatID: 62,
                speaker: "ppgirl",
                text: "I'm not doing you any favors like that! ",
                button: [
                    { chatID: 40, text: "[Need " + sc.n("ppgirl") + " Level 6]", callback: "ppreset" },
                ]
            },
            {
                chatID: 63,
                speaker: "me",
                text: "Can you do me a really really huge favor? I need to come up with a plan to get us all out of " +
                    "here and need some help. ",
                button: [
                    { chatID: 64, text: "...", callback: "" },
                ]
            },
            {
                chatID: 64,
                speaker: "ppgirl",
                text: "Really! Yes! I'm so in. I'll do anything to get out of this horrible place! ",
                button: [
                    { chatID: 65, text: "Anything? ", callback: "" },
                ]
            },
            {
                chatID: 65,
                speaker: "ppgirl",
                text: "Yes, anything! wait... what do you mean by anything? ",
                button: [
                    { chatID: 66, text: "...", callback: "ppgirl2" },
                ]
            },
            {
                chatID: 66,
                speaker: "me",
                text: "You may need to have sex with the guard. And pretend to like it. No, wait hear me out. " +
                    "Every time I try to move around and gather information the stupid guard gets in my way " +
                    "forcing me back into my duties in this barn. I need some time to really look around and try to " +
                    "find a way to contact the outside world to get us out of here. Now I would have sex with the guard, " +
                    "but you can't look around. So you see you'll have to be the one that distracts him so I can find a " +
                    "way out of this place. ",
                button: [
                    { chatID: 67, text: "...", callback: "" },
                ]
            },
            {
                chatID: 67,
                speaker: "ppgirl",
                text: "You son of a bitch!",
                button: [
                    { chatID: 68, text: "You don't have to have sex with him. You just have to distract him for like 20 minutes at a time. ", callback: "" },
                ]
            },
            {
                chatID: 68,
                speaker: "ppgirl",
                text: "You know he's not going to just sit and listen to me talk for 20 minutes. You know " +
                    "I'm going to have to willingly put his penis inside me! *grrrr*",
                button: [
                    { chatID: 69, text: "If there was another way I wouldn't ask. ", callback: "" },
                ]
            },
            {
                chatID: 69,
                speaker: "ppgirl",
                text: "..fuck... But you better keep visiting me if you're going to use me like this. I " +
                    "hate this place and when I get free I'm going to burn this entire barn and that castle " +
                    "to the ground! ",
                button: [
                    { chatID: 70, text: "And I'll help, but first we have to get out of here. ", callback: "" },
                ]
            },
            {
                chatID: 70,
                speaker: "ppgirl",
                text: "Fine. Just let me know when you need me to distract that fucker! ",
                button: [
                    { chatID: 40, text: "I will! ", callback: "ppreset" },
                ]
            },
            {
                chatID: 71,
                speaker: "ppgirl",
                text: "*grrr* I hate your plan, but I will.",
                button: [
                    { chatID: -1, text: "Thanks! ", callback: "reset" },
                ]
            },
            {
                chatID: 72,
                speaker: "ppgirl",
                text: "I already took his cock once today! Ask again tomorrow. Or you take his cock and free " +
                    "me from these chains! ",
                button: [
                    { chatID: -1, text: "oh. ok. ", callback: "ppreset" },
                ]
            },
            {
                chatID: 73,
                speaker: "thinking",
                text: "There's a small hole in this stable. Must have gone unnoticed since it's " +
                    "too small for a horse, but big enough I can slip in. I should see what's through there. ",
                button: [
                    { chatID: 980, text: "oh. ok. ", callback: "" },
                ]
            },
            {
                chatID: 74,
                speaker: "rachel",
                text: "You stupid ass hucow! You're goddamed late. Get your ass moving! NOW! Before I " +
                    "brand a clock on your ass!",
                button: [
                    { chatID: -1, text: "I'm going!", callback: "leave" },
                ]
            },
            {
                chatID: 75,
                speaker: "thinking",
                text: "Oh look. There's an old dirty welcome mat. I bet I could put this in my room to " +
                    "cover the hole if I make one. I'll put it in there. Plus it's so much better than dirt. ",
                button: [
                    { chatID: -1, text: "[Put that mat in your stall]", callback: "icon_stall" },
                ]
            },
            {
                chatID: 76,
                speaker: "thinking",
                text: "This must be a storage room. No way I can just go out the door. But that air vent " +
                    "may work. I'll be like those action stars that crawl through the vents! ",
                button: [
                    { chatID: -1, text: "[Crawl into the vent]", callback: "vent0" },
                    { chatID: -1, text: "[Too dangerous. Return to the barn. ]", callback: "reset" },
                ]
            },
            {
                chatID: 77,
                speaker: "thinking",
                text: "*ugh* It's a maze in there! I better get back to the barn before they notice I'm missing. ",
                button: [
                    { chatID: -1, text: "[Return to the barn. ]", callback: "reset" },
                ]
            },
            {
                chatID: 78,
                speaker: "!rancher",
                text: "Gotcha bitch! That guard said he hadn't seen you for a bit! come 'ere! I'm gunna drag " +
                    "you ass into the barn! ",
                button: [
                    { chatID: 79, text: "eeep!", callback: "hole3" },
                ]
            },
            {
                chatID: 79,
                speaker: "!rancher1",
                text: "Looks like ya got a rat in the tunnels. You know what we do to rats? ",
                button: [
                    { chatID: 80, text: "huh? ", callback: "hole4" },
                ]
            },
            {
                chatID: 80,
                speaker: "!rancher",
                text: "Smash them! HEHEHEHE!!! ",
                button: [
                    { chatID: 81, text: "*lights out*", callback: "hole5" },
                ]
            },
            {
                chatID: 81,
                speaker: "thinking",
                text: "ooof. My head hurts so much! So dizzy. ",
                button: [
                    { chatID: 82, text: "...", callback: "hole6" },
                ]
            },
            {
                chatID: 82,
                speaker: "!rancher1",
                text: "Glad to see you've finally come around. Just in time to dump our cum in you! ",
                button: [
                    { chatID: 83, text: "*ugh*", callback: "hole7" },
                ]
            },
            {
                chatID: 83,
                speaker: "!rancher",
                text: "And in time to get punished! Hehehe! ",
                button: [
                    { chatID: -1, text: "wwwwhhaaa", callback: "hole8" },
                ]
            },
            {
                chatID: 84,
                speaker: "thinking",
                text: "Shit! I'm out of the stable, but still in the barn. Should I make a run for it " +
                    "or hide until night when there's fewer people around? ",
                button: [
                    { chatID: 87, text: "Hide!", callback: "hole12" },
                    { chatID: 85, text: "RUN!", callback: "hole11" },
                ]
            },
            {
                chatID: 85,
                speaker: "!rancher",
                text: "Well well well. Looks like one of our piggies is trying to escape. com 'ere. In the barn " +
                    "piggy! ",
                button: [
                    { chatID: 86, text: "*sigh*", callback: "hole3" },
                ]
            },
            {
                chatID: 86,
                speaker: "!rancher1",
                text: "You know what we do with li'l piggies that try to escape?  ",
                button: [
                    { chatID: 80, text: "wha?", callback: "hole4" },
                ]
            },
            {
                chatID: 87,
                speaker: "thinking",
                text: "I think I heard the last car leave. Now I just need to sneak out of here. I must " +
                    "be so very careful.",
                button: [
                    { chatID: 88, text: "...", callback: "hole13" },
                ]
            },
            {
                chatID: 88,
                speaker: "thinking",
                text: "Almost out of here! Also out. Slow and steady! ",
                button: [
                    { chatID: 89, text: "...", callback: "escape" },
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "Freedom!!! I need to tell Missy, but until I do, I really need to avoid this place! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 90,
                speaker: "!rancher",
                text: "You know what we do to hucows that try to get away? ",
                button: [
                    { chatID: 80, text: "what?", callback: "hole4" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};