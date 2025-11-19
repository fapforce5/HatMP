//Room name
var room125 = {};
room125.main = function () {
    if (daily.get("cardgame")) {
        chat(62, 125);
        nav.buildnav([0]);
    }
    else if (sc.getMission("ralph", "cult").inProgress) {
        nav.bg("125_poker/enter.jpg");
        chat(99, 125);
    }
    else {
        daily.set("cardgame");
        if (sc.getMission("kei", "cards").notStarted) {
            daily.set("cardgame", false);
            sc.startMission("kei", "cards");
            sc.completeMissionTask("kei", "cards", 0);
            sc.show("kei");
            sc.show("jimmy");
            sc.show("ralph");
            if (cl.c.chest < 3) {
                nav.bg("125_poker/enter.jpg");
                chat(55, 125);

            }
            else {
                nav.bg("125_poker/enter.jpg");
                chat(75, 125);
            }
        }
        else if (cl.c.chest > 2) {
            g.internal = null;
            if (sc.getMissionTask("kei", "cards", 2).notStarted) {
                nav.killall();
                nav.bg("125_poker/t1.jpg");
                chat(32, 125);
            }
            else if (sc.getMissionTask("kei", "cards", 3).notStarted) {
                sc.completeMissionTask("kei", "cards", 3);
                sc.completeMissionTask("ralph", "cards", 1);
                nav.killall();
                nav.bg("125_poker/r0.jpg");
                chat(63, 125);
            }
            else if (sc.getMissionTask("ralph", "cards", 2).notStarted) {
                nav.bg("125_poker/n0.jpg");
                if (sc.getMissionTask("philbert", "bully", 1).complete)
                    chat(77, 125);
                else
                    chat(78, 125);
            }
            else {
                if (g.rand(0, 3) === 0) {
                    g.internal = "jada";
                    nav.bg("125_poker/s10.jpg");
                    if (sc.getMissionTask("ralph", "cards", 3).complete)
                        chat(95, 125);
                    else {
                        sc.completeMissionTask("ralph", "cards", 3);
                        chat(91, 125);
                    }
                }
                else {
                    nav.bg("125_poker/s0.jpg");
                    chat(90, 125);
                }
            }
        }
        else if (cl.isLewd()) {
            if (cl.c.chest > 2) {
                nav.bg("125_poker/t1.jpg");
                chat(53, 125);
            }
            else {
                nav.bg("125_poker/getout.jpg");
                chat(52, 125);
            }
        }
        else {
            g.internal = new Array();
            var btnList = [
                {
                    "type": "btn",
                    "name": "ralph",
                    "left": 199,
                    "top": 206,
                    "width": 491,
                    "height": 644,
                    "image": "125_poker/ralph1.png"
                },
                {
                    "type": "btn",
                    "name": "kei",
                    "left": 713,
                    "top": 52,
                    "width": 648,
                    "height": 696,
                    "image": "125_poker/kei1.png"
                },
                {
                    "type": "btn",
                    "name": "jimmy",
                    "left": 1425,
                    "top": 123,
                    "width": 415,
                    "height": 801,
                    "image": "125_poker/jimmy1.png"
                },
            ];

            var navList = [0];
            $.each(btnList, function (i, v) {
                nav.button(v, 125);
            });

            g.pass = { gameCount: 0, deck: new Array(), pot: 0, jada: g.rand(0, 4) === 0 };
            for (i = 2; i < 15; i++) {
                g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "C.png" });
                g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "D.png" });
                g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "H.png" });
                g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "S.png" });
            }
            g.pass.deck = g.shuffleArray(g.pass.deck);
            nav.buildnav(navList);
            sc.select("rules", "125_poker/icon_rules.png", 11);
            sc.select("join", "125_poker/icon_join.png", 10);
        }
    }
};

room125.btnclick = function (name) {
    switch (name) {
        case "ralph":
            if (cl.appearance() > 1)
                chat(59, 125);
            else
                chat(0, 125);
            break;
        case "jimmy":
            if (cl.appearance() > 1)
                chat(58, 125);
            else
                chat(1, 125);
            break;
        case "kei":
            if (cl.appearance() > 1)
                chat(57, 125);
            else
                chat(2, 125);
            break;
        case "jada":
            nav.button({
                "type": "img",
                "name": "jada",
                "left": 166,
                "top": 349,
                "width": 116,
                "height": 188,
                "image": "125_poker/jimmy4.png"
            }, 125);
            chat(16, 125);
            break;
        case "tx3":
            nav.bg("125_poker/t" + g.internal + ".jpg");
            nav.killbutton("tx3");
            if (g.internal === 11)
                chat(54, 125);
            else {
                nav.button({
                    "type": "btn",
                    "name": "tx3",
                    "left": 1687,
                    "top": 615,
                    "width": 233,
                    "height": 150,
                    "image": "526_bar/arrowRight.png"
                }, 125);
            }
            g.internal++;
            break;
        case "theirTurn":
            nav.killbutton("theirTurn");
            var alwaysIn = g.rand(0, 3);
            //ralph
            if (g.internal[0].t > 17 || alwaysIn === 0 || g.rand(0, 4) === 0) {
                g.pass.pot += 5;
                g.internal[0].playing = true;
            }
            else {
                g.internal[0].playing = false;
                nav.killbutton("ralphcard");
                nav.killbutton("ralph");
                nav.button({
                    "type": "img",
                    "name": "ralph",
                    "left": 199,
                    "top": 206,
                    "width": 491,
                    "height": 644,
                    "image": "125_poker/ralph1.png"
                }, 125);
            }

            if (g.internal[1].t > 27 || alwaysIn === 1 || g.rand(0, 4) === 0) {
                g.pass.pot += 5;
                g.internal[1].playing = true;
            }
            else {
                g.internal[1].playing = false;
                nav.killbutton("keicard");
                nav.killbutton("kei");
                nav.button({
                    "type": "img",
                    "name": "kei",
                    "left": 713,
                    "top": 52,
                    "width": 648,
                    "height": 696,
                    "image": "125_poker/kei1.png"
                }, 125);
            }
            if (g.internal[2].t > 24 || alwaysIn === 2 || g.rand(0, 4) === 0) {
                g.pass.pot += 5;
                g.internal[2].playing = true;
            }
            else {
                g.internal[2].playing = false;
                nav.killbutton("jimmycard");
                nav.killbutton("jimmy");
                nav.button({
                    "type": "img",
                    "name": "jimmy",
                    "left": 1425,
                    "top": 123,
                    "width": 415,
                    "height": 801,
                    "image": "125_poker/jimmy1.png"
                }, 125);
            }

            nav.killbutton("pot");
            nav.t({
                type: "img",
                name: "pot",
                left: 620,
                top: 100,
                font: 50,
                hex: "#ffffff",
                text: "Pot $" + g.pass.pot
            }, 125);
            chat(999, 125);
            break;
        case "join":
            if (g.pass.jada) {
                if (sc.getMissionTask("kei", "cards", 1).notStarted) {
                    sc.completeMissionTask("kei", "cards", 1);
                    g.pass.jada = false;
                    nav.killall();
                    nav.bg("125_poker/j0.jpg");
                    chat(15, 125);
                }
                else {
                    g.pass.jada = false;
                    nav.killall();
                    nav.bg("125_poker/j0r.jpg");
                    chat(60, 125);
                }
            }
            else if (gv.get("money") < 5) {
                chat(98, 125);
            }
            else {
                room125.chatcatch("deal");
            }
            break;
        case "fold":
            g.internal[3].playing = false;
            room125.btnclick("winner");
            break;
        case "play":
            g.internal[3].playing = true;
            g.pass.pot += 5;
            gv.mod("money", -5);
            nav.killbutton("pot");
            nav.t({
                type: "img",
                name: "pot",
                left: 620,
                top: 100,
                font: 50,
                hex: "#ffffff",
                text: "Pot $" + g.pass.pot
            }, 125);
            room125.btnclick("winner");
            break;
        case "winner":
            nav.killbutton("fold");
            nav.killbutton("play");
            nav.killbutton("jimmycard");
            nav.killbutton("ralphcard");
            nav.killbutton("keicard");
            var ca = [
                { cl: 320, ct: 500 },
                { cl: 860, ct: 340 },
                { cl: 1480, ct: 480 },
                { cl: 930, ct: 750 },
            ];
            var wa = new Array();
            var winningTotal = 0;
            for (let i = 0; i < 3; i++) {
                if (g.internal[i].playing) {
                    for (let j = 0; j < 3; j++) {
                        nav.button({
                            "type": "img",
                            "name": g.internal[i].n + "card",
                            "left": ca[i].cl + (j * 60),
                            "top": ca[i].ct,
                            "width": 165,
                            "height": 255,
                            "image": "125_poker/" + g.internal[i].c[j]
                        }, 125);
                    }
                    nav.t({
                        type: "img",
                        name: "pot",
                        left: ca[i].cl + 40,
                        top: ca[i].ct - 50,
                        font: 50,
                        hex: i === 0 ? "#ffffff" : "#000000",
                        text: "Total: " + g.internal[i].t
                    }, 125);
                    if (g.internal[i].t > winningTotal)
                        winningTotal = g.internal[i].t;
                }
            }

            if (g.internal[3].playing) {
                if (g.internal[3].t > winningTotal)
                    winningTotal = g.internal[3].t;
            }
            else {
                nav.killbutton("mycard");
            }
            var iwon = false;
            for (let i = 0; i < 4; i++) {
                if (g.internal[i].t === winningTotal && g.internal[i].playing) {
                    wa.push(i);
                    if (i === 3)
                        iwon = true;
                }
            }

            if (iwon) {
                if (wa.length > 0)
                    gv.mod("money", Math.floor(g.pass.pot / wa.length));
            }

            for (let i = 0; i < wa.length; i++) {
                nav.button({
                    "type": "img",
                    "name": "winner",
                    "left": ca[wa[i]].cl - 20,
                    "top": ca[wa[i]].ct + 100,
                    "width": 324,
                    "height": 152,
                    "image": "125_poker/winner.gif"
                }, 125);
            }
            nav.next("reset");
            //nav.button({
            //    "type": "img",
            //    "name": "winner",
            //    "left": g.internal[i].l,
            //    "top": g.internal[i].t,
            //    "width": 324,
            //    "height": 152,
            //    "image": "125_poker/winner.gif"
            //}, 125);
            break;
        case "reset":
            nav.killall();
            nav.bg("125_poker/basement.jpg", "125_poker/basement_night.jpg");
            var btnList = [
                {
                    "type": "btn",
                    "name": "ralph",
                    "left": 199,
                    "top": 206,
                    "width": 491,
                    "height": 644,
                    "image": "125_poker/ralph1.png"
                },
                {
                    "type": "btn",
                    "name": "kei",
                    "left": 713,
                    "top": 52,
                    "width": 648,
                    "height": 696,
                    "image": "125_poker/kei1.png"
                },
                {
                    "type": "btn",
                    "name": "jimmy",
                    "left": 1425,
                    "top": 123,
                    "width": 415,
                    "height": 801,
                    "image": "125_poker/jimmy1.png"
                },
            ];
            $('#room_footer').show();
            $.each(btnList, function (i, v) {
                nav.button(v, 125);
            });
            nav.buildnav([0]);
            sc.select("rules", "125_poker/icon_rules.png", 11);
            sc.select("join", "125_poker/icon_join.png", 10);
            break;
        case "rules":
            nav.killbutton("rules");
            nav.killbutton("join");
            nav.killall();
            nav.bg("125_poker/howto1.jpg");
            chat(27, 125);
            break;
        case "leave":
            char.addtime(30);
            char.room(0);
            break;
        case "bjbitch":
            nav.killall();
            cl.nude();
            sc.modLevel("ralph", 30, 10);
            var isJadahere = g.internal === "jada";
            g.internal = {
                philbertStep: 1,
                keiStep: 1,
                isJadaHere: isJadahere,
                icons: [
                    { n: "kei", i: "t_1.png", x: 784, y: 481, t: "grab", step: 1 },
                    { n: "jimmy", i: "t_1.png", x: 1534, y: 518, t: "grab", step: null },
                    { n: "philbert", i: "t_1_suck.png", x: 1172, y: 818, t: "kiss", step: 1 }
                ]
            };
            if (sc.getMissionTask("ralph", "cards", 2).complete) {
                g.internal.icons.splice(1, 1);
                room125.chatcatch("suck0");
            }
            else {
                sc.completeMissionTask("ralph", "cards", 2);
                nav.bg("125_poker/s0.jpg");
                chat(81, 125);
            }
            break;
        case "suck_jimmy":
            nav.killbutton("suck_jimmy");
            nav.killbutton("suck_kei");
            nav.killbutton("suck_philbert");
            for (let i = 0; i < g.internal.icons.length; i++) {
                if (g.internal.icons[i].n === "jimmy") {
                    g.internal.icons.splice(i, 1);
                    break;
                }
            }
            chat(85, 125);
            break;
        case "suck_kei":
            nav.killbutton("suck_jimmy");
            nav.killbutton("suck_kei");
            nav.killbutton("suck_philbert");
            nav.modbutton("kei", "125_poker/dick_kei_2.png", null, null);
            for (let i = 0; i < g.internal.icons.length; i++) {
                if (g.internal.icons[i].n === "kei") {
                    g.internal.icons.splice(i, 1);
                    break;
                }
            }
            nav.button({
                "type": "kiss",
                "name": "suck_kei_0",
                "left": 800,
                "top": 429,
                "width": 250,
                "height": 250,
                "image": "125_poker/dick_kei_box.png"
            }, 125);
            
            break;
        case "suck_kei_0":
            nav.killbutton("suck_kei_0");
            nav.modbutton("kei", "125_poker/dick_kei_3.png", null, null);
            sc.select("suck_kei_1", "451_parkMensRoom/icon_swallow.png", 0);
            break;
        case "suck_kei_1":
            nav.killbutton("suck_kei_1");
            g.internal.keiStep = 4;
            nav.modbutton("kei", "125_poker/dick_kei_4.png", null, null);
            levels.oral(3, "m", "kei", true);
            chat(86, 125);
            break;
        case "suck_philbert":
            nav.killbutton("suck_jimmy");
            nav.killbutton("suck_kei");
            nav.killbutton("suck_philbert");
            nav.killbutton("philbert");
            g.internal.philbertStep = 6;
            for (let i = 0; i < g.internal.icons.length; i++) {
                if (g.internal.icons[i].n === "philbert") {
                    g.internal.icons.splice(i, 1);
                    break;
                }
            }
            nav.button({
                "type": "img",
                "name": "philbert",
                "left": 798,
                "top": 702,
                "width": 1069,
                "height": 378,
                "image": "125_poker/dick_philbert_2.png"
            }, 125);
            nav.next("suck_philbert3");
            break;
        case "suck_philbert3":
            nav.killbutton("suck_philbert3");
            nav.modbutton("philbert", "125_poker/dick_philbert_3.png", null, null);
            nav.next("suck_philbert4");
            break;
        case "suck_philbert4":
            nav.killbutton("suck_philbert4");
            nav.modbutton("philbert", "125_poker/dick_philbert_4.png", null, null);
            nav.next("suck_philbert5");
            break;
        case "suck_philbert5":
            nav.killbutton("suck_philbert5");
            nav.killbutton("philbert");
            nav.button({
                "type": "img",
                "name": "philbert",
                "left": 798,
                "top": 630,
                "width": 1069,
                "height": 450,
                "image": "125_poker/dick_philbert_5.png"
            }, 125);
            nav.next("suck_philbert6");
            break;
        case "suck_philbert6":
            levels.oral(3, "m", "philbert", true);
            nav.killbutton("suck_philbert6");
            chat(87, 125);
            break;
        default:
            break;
    }
};

room125.chatcatch = function (callback) {
    var i, j, k, temp, willplay;

    switch (callback) {
        case "keiInc":
            if (sc.getstep("kei") < 3)
                sc.incstep("kei", 1);
            room125.chatcatch("deal");
            break;
        case "deal":
            $('#room_footer').hide();
            g.pass.gameCount++;
            
            if (g.pass.gameCount < 12) {
                char.addtime(15);
                gv.mod("money", -1);
                g.pass.pot = 4;
                g.pass.deck = g.shuffleArray(g.pass.deck);

                g.internal = [{
                    n: "ralph",
                    c: [g.pass.deck[0].s, g.pass.deck[1].s, g.pass.deck[2].s],
                    t: g.pass.deck[0].n + g.pass.deck[1].n + g.pass.deck[2].n,
                    playing: true
                },
                {
                    n: "kei",
                    c: [g.pass.deck[3].s, g.pass.deck[4].s, g.pass.deck[5].s],
                    t: g.pass.deck[3].n + g.pass.deck[4].n + g.pass.deck[5].n,
                    playing: true
                },
                {
                    n: "jimmy",
                    c: [g.pass.deck[6].s, g.pass.deck[7].s, g.pass.deck[8].s],
                    t: g.pass.deck[6].n + g.pass.deck[7].n + g.pass.deck[8].n,
                    playing: true
                },
                {
                    n: "me",
                    c: [g.pass.deck[9].s, g.pass.deck[10].s, g.pass.deck[11].s],
                    t: g.pass.deck[9].n + g.pass.deck[10].n + g.pass.deck[11].n,
                    playing: true
                }];

                nav.killall();
                
                nav.t({
                    type: "img",
                    name: "pot",
                    left: 620,
                    top: 100,
                    font: 50,
                    hex: "#ffffff",
                    text: "Pot $4"
                }, 125);
                
                nav.button({
                    "type": "img",
                    "name": "ralph",
                    "left": 199,
                    "top": 206,
                    "width": 512,
                    "height": 644,
                    "image": "125_poker/" + (g.internal[0].t > 17 ? "ralphHappy.png" : "ralphBad.png")
                }, 125);
                nav.button({
                    "type": "img",
                    "name": "jimmy",
                    "left": 1348,
                    "top": 123,
                    "width": 492,
                    "height": 801,
                    "image": "125_poker/" + (g.internal[2].t > 21 ? "jimmyHappy.png" : "jimmyBad.png")
                }, 125);
                nav.button({
                    "type": "img",
                    "name": "kei",
                    "left": 648,
                    "top": 52,
                    "width": 648,
                    "height": 696,
                    "image": "125_poker/" + (g.internal[1].t > 25 ? "keiHappy.png" : "keiBad.png")
                }, 125);
                for (let i = 0; i < 3; i++) {
                    let ct, cl;
                    switch (i) {
                        case 0: cl = 440; ct = 560; break;
                        case 1: cl = 980; ct = 400; break;
                        case 2: cl = 1600; ct = 520; break;
                    }
                    for (let j = 0; j < 3; j++) {
                        nav.button({
                            "type": "img",
                            "name": g.internal[i].n + "card",
                            "left": cl - (j * 40),
                            "top": ct - (j * 40),
                            "width": 165,
                            "height": 255,
                            "image": "125_poker/" + (j === 2 ? g.internal[i].c[0] : "back.png")
                        }, 125);
                    }
                }

                for (let i = 0; i < 3; i++) {
                    nav.button({
                        "type": "img",
                        "name": "mycard",
                        "left": 800 + (i * 200),
                        "top": 750,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/" + g.internal[3].c[i]
                    }, 125);
                }
                nav.t({
                    type: "img",
                    name: "mycard1",
                    left: 980,
                    top: 1020,
                    font: 50,
                    hex: "#ffffff",
                    text: "Total: " + g.internal[3].t
                }, 125);
                nav.next("theirTurn");
            }
            else
                chat(14, 125);
            break;
        
        case "ralphPlay":
            if (g.internal[0].v2 >= g.internal[1].v2
                && g.internal[0].v2 >= g.internal[2].v2
                && g.internal[0].v2 >= g.internal[3].v2) {
                willplay = true;
            }
            else if (g.internal[0].v1 + g.internal[0].v2 < 9)
                willplay = false;
            else
                willplay = true;

            if (willplay) {
                g.internal[0].b = 6;
                room125.chatcatch("keiPlay");
            }
            else {
                chat(4, 125);
            }
            break;
        case "keiPlay":
            if (g.internal[1].v2 >= g.internal[0].v2
                && g.internal[1].v2 >= g.internal[2].v2
                && g.internal[1].v2 >= g.internal[3].v2) {
                willplay = true;
            }
            else if (g.internal[1].v1 + g.internal[1].v2 < 18)
                willplay = false;
            else
                willplay = true;

            if (willplay) {
                g.internal[1].b = 6;
                room125.chatcatch("jimmyPlay");
            }
            else {
                g.internal[1].v1 = 0;
                g.internal[1].v2 = 0;
                chat(6, 125);
            }
            break;
        case "jimmyPlay":
            if (g.internal[2].v2 >= g.internal[0].v2
                && g.internal[2].v2 >= g.internal[1].v2
                && g.internal[2].v2 >= g.internal[3].v2) {
                willplay = true;
            }
            else if (g.internal[2].v1 + g.internal[2].v2 < 14)
                willplay = false;
            else
                willplay = true;

            if (willplay) {
                g.internal[2].b = 6;
                room125.chatcatch("mePlay");
            }
            else {
                chat(5, 125);
            }

            break;

        case "ralphfold":
            nav.killbutton("ralphback");
            nav.killbutton("ralphcard");
            g.internal[0].v1 = 0;
            g.internal[0].v2 = 0;
            room125.chatcatch("keiPlay");
            break;
        case "keifold":
            nav.killbutton("keiback");
            nav.killbutton("keicard");
            g.internal[1].v1 = 0;
            g.internal[1].v2 = 0;
            room125.chatcatch("jimmyPlay");
            break;
        case "jimmyfold":
            nav.killbutton("jimmyback");
            nav.killbutton("jimmycard");
            g.internal[2].v1 = 0;
            g.internal[2].v2 = 0;
            room125.chatcatch("mePlay");
            break;
        case "fold":
            gv.mod("money", -1);
            nav.killbutton("mycard");
            g.internal[3].v1 = 0;
            g.internal[3].v2 = 0;
            room125.chatcatch("call");
            break;
        case "mePlay":
            if (g.internal[0].b + g.internal[1].b + g.internal[2].b === 18)
                chat(7, 125);
            else if (g.internal[0].b + g.internal[1].b + g.internal[2].b === 3) {
                gv.mod("money", 3);
                chat(9, 125);
            }
            else
                chat(8, 125);
            break;
        case "call":
            g.internal[3].b = 6;

            nav.killbutton("ralphback");
            nav.killbutton("jimmyback");
            nav.killbutton("keiback");
            var winner = new Array();
            var totalCash = 0;
            if (g.internal[0].b === 6) {
                nav.button({
                    "type": "img",
                    "name": "card",
                    "left": 480,
                    "top": 514,
                    "width": 165,
                    "height": 255,
                    "image": "125_poker/" + g.internal[0].c1
                }, 125);
            }
            if (g.internal[1].b === 6) {
                nav.button({
                    "type": "img",
                    "name": "card",
                    "left": 1054,
                    "top": 407,
                    "width": 165,
                    "height": 255,
                    "image": "125_poker/" + g.internal[1].c1
                }, 125);
            }
            if (g.internal[2].b === 6) {
                nav.button({
                    "type": "img",
                    "name": "card",
                    "left": 1600,
                    "top": 497,
                    "width": 165,
                    "height": 255,
                    "image": "125_poker/" + g.internal[2].c1
                }, 125);
            }
            winner.n = "r";

            var top = -1;
            for (i = 0; i < 4; i++) {
                totalCash += g.internal[i].b;
                if (g.internal[i].v1 + g.internal[i].v2 > top)
                    top = g.internal[i].v1 + g.internal[i].v2;
            }

            for (i = 0; i < 4; i++) {
                if (g.internal[i].v1 + g.internal[i].v2 === top) {
                    winner.push(g.internal[i].n);
                    nav.button({
                        "type": "img",
                        "name": "winner",
                        "left": g.internal[i].l,
                        "top": g.internal[i].t,
                        "width": 324,
                        "height": 152,
                        "image": "125_poker/winner.gif"
                    }, 125);
                }
            }
            if (g.internal[3].v1 > 0) {
                if (g.internal[3].v1 + g.internal[3].v2 === top) {
                    gv.mod("money", Math.round(totalCash / (winner.length === 0 ? 1 : winner.length)));
                    chat(11, 125);
                }
                else {
                    gv.mod("money", -6);
                    chat(12, 125);
                }
            }
            else
                chat(13, 125);

            break;
        case "exit":
            nav.room(0);
            break;
        case "jada1":
            nav.killbutton("jada");
            nav.killbutton("jimmy");
            nav.button({
                "type": "img",
                "name": "jada",
                "left": 1253,
                "top": 0,
                "width": 557,
                "height": 893,
                "image": "125_poker/jimmy3.png"
            }, 125);
            break;
        case "jada2":
            nav.killbutton("jada");
            nav.button({
                "type": "img",
                "name": "jada",
                "left": 1253,
                "top": 0,
                "width": 557,
                "height": 893,
                "image": "125_poker/jimmy2a.png"
            }, 125);
            break;
        case "jada3":
            nav.killbutton("jada");
            nav.button({
                "type": "img",
                "name": "jada",
                "left": 1338,
                "top": 183,
                "width": 516,
                "height": 731,
                "image": "125_poker/jimmy2.png"
            }, 125);
            break;
        case "jada4":
            sc.setstep("jada", 1);
            sc.setstep("kei", 5);
            nav.killbutton("jada");
            nav.button({
                "type": "btn",
                "name": "jimmy",
                "left": 1425,
                "top": 182,
                "width": 385,
                "height": 711,
                "image": "125_poker/jimmy1.png"
            }, 125);
            break;
        case "howto1":
            nav.button({
                "type": "img",
                "name": "howto",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "125_poker/howto1.jpg"
            }, 125);
            break;
        case "howto2":
            nav.killbutton("howto");
            nav.button({
                "type": "img",
                "name": "howto",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "125_poker/howto2.jpg"
            }, 125);
            break;
        case "howto3":
            nav.killbutton("howto");
            break;
        case "trun":
            char.room(0);
            break;
        case "t1":
            char.changeMenu("hide", false, true);
            break;
        case "t2":
            nav.bg("125_poker/t2.jpg");
            break;
        case "t3":
            nav.bg("125_poker/t3.jpg");
            break;
        case "t4":
            sc.completeMissionTask("kei", "cards", 2);
            sc.startMission("ralph", "cards");
            sc.startMission("jimmy", "cards");
            sc.startMission("ralph", "cards");
            sc.completeMissionTask("ralph", "cards", 0);
            sc.completeMissionTask("jimmy", "cards", 0);
            sc.completeMissionTask("ralph", "cards", 0);
            sc.modSecret("kei", 100);
            sc.modSecret("ralph", 100);
            sc.modSecret("jimmy", 100);
            nav.bg("125_poker/t4.jpg");
            break;
        case "t5":
            nav.bg("125_poker/t5.jpg");
            break;
        case "t6":
            nav.bg("125_poker/t6.jpg");
            break;
        case "t7":
            nav.bg("125_poker/t7.jpg");
            break;
        case "t8":
            nav.bg("125_poker/t8.jpg");
            break;
        case "t9":
            nav.bg("125_poker/t9.jpg");
            break;
        case "t10":
            nav.bg("125_poker/t10.jpg");
            break;
        case "t11":
            nav.bg("125_poker/t11.jpg");
            break;
        case "t12":
            gv.mod("giveOralMale", 3);
            sc.setstep("kei", -2);
            char.room(0);
            break;
        case "tx3":
            g.internal = 4;
            nav.bg("125_poker/t3.jpg");
            nav.button({
                "type": "btn",
                "name": "tx3",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 125);
            break;
        case "tx11":
            char.addtime(120);
            gv.mod("giveOralMale", 3);
            char.room(0);
            break;
        case "reload":
            daily.set("cardgame", false);
            char.room(125);
            break;
        case "drawbet":
            $('#room_footer').hide();
            sc.select("play", "125_poker/icon_play.png", 12);
            sc.select("fold", "125_poker/icon_fold.png", 13);
            break;
        case "j1":
            nav.bg("125_poker/j1.jpg");
            break;
        case "reset":
            room125.btnclick("reset");
            break;
        case "Rachel":
        case "Ralphina":
        case "Brenda":
        case "Pam":
        case "Jenna":
            sc.modLevel("ralph", 100, 10);
            sc.char[sc.i("ralph")].display = callback;
            sc.char[sc.i("ralphsmom")].display = callback + "'s Mom";
            sc.char[sc.i("ralphsdad")].display = callback + "'s Dad";
            chat(64, 125);
            break;
        case "r1":
            nav.bg("125_poker/r1.jpg");
            zcl.displayMain(50, 780, .2, "clothes", true);
            break;
        case "leave":
            char.addtime(60);
            char.room(0);
            break;
        case "choice":
            nav.killall();
            sc.select("bjbitch", "125_poker/icon_bj.png", 0);
            sc.select("leave", "125_poker/icon_leave.png", 1);
            break;
        case "bjbitch":
            room125.btnclick("bjbitch");
            break;
        case "suck0":
            nav.killall();
            if (g.internal.icons.length === 0) {
                if (g.internal.isJadaHere) {
                    nav.bg("125_poker/s12.jpg");
                    chat(96, 125);
                }
                else {
                    nav.bg("125_poker/s2.jpg");
                    chat(88, 125);
                }
            }
            else {
                if (g.internal.isJadaHere === true) {
                    nav.bg("125_poker/s11.jpg");
                }
                else {
                    nav.bg("125_poker/s1.jpg");
                }

                nav.button({
                    "type": "img",
                    "name": "kei",
                    "left": 432,
                    "top": 379,
                    "width": 939,
                    "height": 701,
                    "image": "125_poker/dick_kei_" + g.internal.keiStep + ".png"
                }, 125);
                nav.button({
                    "type": "img",
                    "name": "philbert",
                    "left": 798,
                    "top": 906,
                    "width": 1069,
                    "height": 174,
                    "image": "125_poker/dick_philbert_" + g.internal.philbertStep + ".png"
                }, 125);
                for (let i = 0; i < g.internal.icons.length; i++) {
                    nav.button({
                        "type": g.internal.icons[i].t,
                        "name": "suck_" + g.internal.icons[i].n,
                        "left": g.internal.icons[i].x,
                        "top": g.internal.icons[i].y,
                        "width": 233,
                        "height": 150,
                        "image": "125_poker/" + g.internal.icons[i].i
                    }, 125);
                }
            }
            break;
        case "s3":
            nav.bg("125_poker/s3.jpg");
            break;
        case "s13":
            levels.mod("cum", 15);
            nav.bg("125_poker/s13.jpg");
            break;
        case "undoLeave":
            cl.undo();
            char.room(0);
            break;
        default:
            break;
    }
};

room125.chat = function (chatID) {
    if (chatID === 999) {
        if (g.pass.pot === 19)
            return {
                chatID: 999,
                speaker: "kei",
                text: "We're all in this one. Bet cha' wanna fold? ",
                button: [
                    { chatID: -1, text: "...", callback: "drawbet" }
                ]
            };
        if (g.pass.pot === 9) {
            for (let i = 0; i < 3; i++) {
                if (g.internal[i].playing) {
                    return {
                        chatID: 999,
                        speaker: g.internal[i].n,
                        text: "Just you and me. ",
                        button: [
                            { chatID: -1, text: "...", callback: "drawbet" }
                        ]
                    };
                }
            }
        }
        var thisSpeaker = new Array()
        var thischat = [
            "Let's go!",
            "Let's go, I've got good cards!",
            "You should just fold. You ain't gunna win. ",
            "I'm going to eat your ass for lunch.. uh with my cards. ",
            "Hurry up. We know you're going to fold. ",
            "Hehehehe. My cards are so good. ",
            "Crap! I meant to fold!",
            "It's your turn idiot! ",
            "Please fold, please fold, please fold",
            "Have you been working out? You're looking good bro. ",
            "You play like this this chick I know fucks. Slow and sloppy. ",
        ];
        
        for (let i = 0; i < g.internal.length; i++) {
            if (g.internal[i].playing && g.internal[i].n !== "me") {
                thisSpeaker.push(g.internal[i].n);
            }
        }
        
        return {
            chatID: 999,
            speaker: thisSpeaker[g.rand(0, thisSpeaker.length)],
            text: thischat[g.rand(0, thischat.length)],
            button: [
                { chatID: -1, text: "...", callback: "drawbet" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "ralph",
                text: "Take it easy on me, I'm not very good. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "jimmy",
                text: "Oh man if I lose too much money " + sc.n("jada") + " will be so mad at me!",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "kei",
                text: "So you ready to lose all your money champ!",
                button: [
                    { chatID: -1, text: "You're a chump!", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "kei",
                text: "So you in?",
                button: [
                    { chatID: -1, text: "Yes, let's play", callback: "deal" },
                    { chatID: 27, text: "Tell me how to play.", callback: "howto1" },
                    { chatID: -1, text: "No, I'm going to go", callback: "exit" }
                ]
            },
            {
                chatID: 4,
                speaker: "ralph",
                text: "I fold, this is worse that bootlegged anime on a cell phone camera.",
                button: [
                    { chatID: -1, text: "...", callback: "ralphfold" }
                ]
            },
            {
                chatID: 5,
                speaker: "jimmy",
                text: sc.n("jada") + "'s not going to like it if I lose all my money.",
                button: [
                    { chatID: -1, text: "...", callback: "jimmyfold" }
                ]
            },
            {
                chatID: 6,
                speaker: "kei",
                text: "This is such crap! There's no way I can play these cards!",
                button: [
                    { chatID: -1, text: "...", callback: "keifold" }
                ]
            },
            {
                chatID: 7,
                speaker: "kei",
                text: "We're all in, you sure you're ready for this?",
                button: [
                    { chatID: -1, text: "I'm in, here's $5", callback: "call" },
                    { chatID: -1, text: "I'm out. ", callback: "fold" }
                ]
            },
            {
                chatID: 8,
                speaker: "kei",
                text: "You in or out?",
                button: [
                    { chatID: -1, text: "I'm in, here's $5", callback: "call" },
                    { chatID: -1, text: "I'm out. ", callback: "fold" }
                ]
            },
            {
                chatID: 9,
                speaker: "kei",
                text: "We're all out, I guess you win this one.",
                button: [
                    { chatID: -1, text: "Let's play another round.", callback: "deal" },
                    { chatID: -1, text: "Tell me how to play.", callback: "" },
                    { chatID: -1, text: "I'm out.", callback: "exit" }
                ]
            },
            {
                chatID: 10,
                speaker: "kei",
                text: "Play again.",
                button: [
                    { chatID: -1, text: "Sweet", callback: "win" }
                ]
            },
            {
                chatID: 11,
                speaker: "kei",
                text: "So lucky you won! Here's your money.",
                button: [
                    { chatID: -1, text: "Let's play another round.", callback: "deal" },
                    { chatID: 27, text: "Tell me how to play.", callback: "howto1" },
                    { chatID: -1, text: "I'm out.", callback: "exit" }
                ]
            },
            {
                chatID: 12,
                speaker: "kei",
                text: "Hahaha, loser, again?",
                button: [
                    { chatID: -1, text: "Yeah, Let's play another round.", callback: "deal" },
                    { chatID: 27, text: "Tell me how to play.", callback: "howto1" },
                    { chatID: -1, text: "I'm out.", callback: "exit" }
                ]
            },
            {
                chatID: 13,
                speaker: "kei",
                text: "Only a wimp folds.",
                button: [
                    { chatID: -1, text: "Yeah, Let's play another round.", callback: "deal" },
                    { chatID: 27, text: "Tell me how to play.", callback: "howto1" },
                    { chatID: -1, text: "I'm out.", callback: "exit" }
                ]
            },
            {
                chatID: 14,
                speaker: "kei",
                text: "I think we've played enough, we're out bro.",
                button: [
                    { chatID: -1, text: "I'm out.", callback: "exit" }
                ]
            },
            {
                chatID: 15,
                speaker: "jada",
                text: "Ow!!! Fuck my head! ",
                button: [
                    { chatID: 16, text: "...", callback: "j1" }
                ]
            },
            {
                chatID: 16,
                speaker: "jada",
                text: "You know you smell terrible " + sc.n("kei") + ". You could " +
                    "use a shower. ",
                button: [
                    { chatID: 17, text: "Huh? I though girls weren't allowed. ", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "jimmy",
                text: "Girls aren't allowed to play. No one said girls couldn't come. ",
                button: [
                    { chatID: 18, text: "oh", callback: "" }
                ]
            },
            {
                chatID: 18,
                speaker: "kei",
                text: "Yeah. I forgot to tell you that rule. Girls can come, but they " +
                    "have to stay under the poker table and service us. " + sc.n("jada") +
                    "here is the only one allowed to only serve " + sc.n("jimmy") + ". " +
                    "It was an original rule, but ALL new girls have to service everyone. ",
                button: [
                    { chatID: 19, text: "oh", callback: "" }
                ]
            },
            {
                chatID: 19,
                speaker: "jada",
                text: "And that rule stays. My mouth is only for my " + sc.n("jimmy") + ". ",
                button: [
                    { chatID: 20, text: "...", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "jimmy",
                text: "That's right. I'll see you at home babe. Now I have to take " +
                    "these guy's money! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 21,
                speaker: "jada",
                text: "Oh, you foolish boy, you should know you're terrible at hiding stuff from me. You're also a terrible liar. Why hello " + sc.n("me") +
                    "I don't see you around here often. You're looking cute today, but not cuter than my " + sc.n("jimmy") + ". *wink*",
                button: [
                    { chatID: 22, text: "Oh hahaha", callback: "" }
                ]
            },
            {
                chatID: 22,
                speaker: "jada",
                text: sc.n("jimmy") + " don't forget to be home on time tonight. You promised to give me bubbly bath and wash my dirty body!",
                button: [
                    { chatID: 23, text: "...", callback: "" }
                ]
            },
            {
                chatID: 23,
                speaker: "ralph",
                text: "We get it, you have sex! let us get back to our game already " + sc.n("jada") + ". ",
                button: [
                    { chatID: 24, text: "...", callback: "" }
                ]
            },
            {
                chatID: 24,
                speaker: "kei",
                text: "Yeah " + sc.n("jada") + ". This is a man's game, no girlfriends. ",
                button: [
                    { chatID: 25, text: "...", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "jada",
                text: "Ok, I'll let you boys get back to playing with yourselves. See you tonight " + sc.n("jimmy") + ".",
                button: [
                    { chatID: 26, text: "...", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "jimmy",
                text: "See you tonight babe!",
                button: [
                    { chatID: -1, text: "...", callback: "jada4" }
                ]
            },
            {
                chatID: 27,
                speaker: "kei",
                text: "This here is a simple enough game. Highest total of 3 cards wins. To play you toss $1 into the pot. " +
                    "Each player is dealt 3 cards, the first one is dealt face up, the " +
                    "rest are delt face down. You try to guess if your 3 cards total up to the highest amount. ",
                button: [
                    { chatID: 28, text: "...", callback: "" }
                ]
            },
            {
                chatID: 28,
                speaker: "ralph",
                text: "Don't forget to tell him the value is what's on the card. Face cards are worth 10 and aces are worth 11.",
                button: [
                    { chatID: 29, text: "...", callback: "" }
                ]
            },
            {
                chatID: 29,
                speaker: "kei",
                text: "He knows that " + sc.n("ralph") + ", everyone know that. Now stop interrupting. In this case I'm showing the Ace and " +
                    "you're showing only the 5, so I'm showing the best card. You can fold, in which case you'll only lose $1, or call and bet $5 to see " +
                    "if you win. ",
                button: [
                    { chatID: 30, text: "...", callback: "howto2" }
                ]
            },
            {
                chatID: 30,
                speaker: "jimmy",
                text: "If you call we'll all flip our cards over. If your cards are the " +
                    "highest you get to keep it all. If you tie you split the pot with the who ever else ties with you. ",
                button: [
                    { chatID: 31, text: "...", callback: "" }
                ]
            },
            {
                chatID: 31,
                speaker: "kei",
                text: "So " + sc.n("ralph") + " has 16, I have 23, " + sc.n("jimmy") + " has 19, and you have 26, so you win. You would take all the money.",
                button: [
                    { chatID: -1, text: "ok", callback: "reload" }
                ]
            },
            {
                chatID: 32,
                speaker: "kei",
                text: "WAIT WAIT WAIT! Are those boobs!",
                button: [
                    { chatID: 33, text: "maybe...", callback: "t1" }
                ]
            },
            {
                chatID: 33,
                speaker: "ralph",
                text: "Those boobs are the most amazing boobs I've ever seen!",
                button: [
                    { chatID: 34, text: "...", callback: "t2" }
                ]
            },
            {
                chatID: 34,
                speaker: "kei",
                text: "We need to see them!",
                button: [
                    { chatID: 35, text: "Hay!", callback: "t3" }
                ]
            },
            {
                chatID: 35,
                speaker: "jimmy",
                text: "No fair! Stop covering them up!",
                button: [
                    { chatID: 36, text: "...", callback: "" }
                ]
            },
            {
                chatID: 36,
                speaker: "ralph",
                text: "Yeah. Friends share their toys!",
                button: [
                    { chatID: 37, text: "What?", callback: "" }
                ]
            },
            {
                chatID: 37,
                speaker: "kei",
                text: "Your new tits look amazing! Let us see them.",
                button: [
                    { chatID: 38, text: "Fine! Then will you leave me alone!", callback: "t4" },
                    { chatID: -1, text: "No way! [Run away]", callback: "trun" }
                ]
            },
            {
                chatID: 38,
                speaker: "me",
                text: "See. They're just tits! Wait... are you all getting boners from looking at my tits?",
                button: [
                    { chatID: 39, text: "...", callback: "t5" }
                ]
            },
            {
                chatID: 39,
                speaker: "me",
                text: "Wait! You just said you only wanted to look at my tits!",
                button: [
                    { chatID: 40, text: "...", callback: "" }
                ]
            },
            {
                chatID: 40,
                speaker: "ralph",
                text: "I can't help it. You make me so horny!",
                button: [
                    { chatID: 41, text: "...", callback: "" }
                ]
            },
            {
                chatID: 41,
                speaker: "jimmy",
                text: "You're so hot! Just don't tell " + sc.n("jada") + ".",
                button: [
                    { chatID: 42, text: "...", callback: "" }
                ]
            },
            {
                chatID: 42,
                speaker: "kei",
                text: "Oh please! If I was a hot chick I would blow you!",
                button: [
                    { chatID: 43, text: "oh well. Here goes...", callback: "t6" }
                ]
            },
            {
                chatID: 43,
                speaker: "me",
                text: "MMmmmMMMmmm",
                button: [
                    { chatID: 44, text: "...", callback: "t7" }
                ]
            },
            {
                chatID: 44,
                speaker: "me",
                text: "Slurp! Gobble",
                button: [
                    { chatID: 45, text: "...", callback: "t8" }
                ]
            },
            {
                chatID: 45,
                speaker: "me",
                text: "Slurp! Gobble",
                button: [
                    { chatID: 46, text: "...", callback: "t9" }
                ]
            },
            {
                chatID: 46,
                speaker: "me",
                text: "AAAAAaaaaa",
                button: [
                    { chatID: 47, text: "...", callback: "t10" }
                ]
            },
            {
                chatID: 47,
                speaker: "thinking",
                text: "Holy shit! I just blew all my friends. What the hell am I becomming. And they are spraying my face with their cum, " +
                    "and I LOVE it. I am such a sissy slut!",
                button: [
                    { chatID: 48, text: "...", callback: "t11" }
                ]
            },
            {
                chatID: 48,
                speaker: "kei",
                text: "I know we've known you since grade school, but I had no idea how amazing at giving head you are! ",
                button: [
                    { chatID: 49, text: "...", callback: "" }
                ]
            },
            {
                chatID: 49,
                speaker: "ralph",
                text: "Yeah. You're our friend and all, but I just want you to blow me all the time now. ",
                button: [
                    { chatID: 50, text: "...", callback: "" }
                ]
            },
            {
                chatID: 50,
                speaker: "jimmy",
                text: "Yeah buddy. Just don't tell " + sc.n("jada") + " about this. ",
                button: [
                    { chatID: 51, text: "...", callback: "" }
                ]
            },
            {
                chatID: 51,
                speaker: "me",
                text: "I won't, but blowing all three of you is so much work. Maybe next time we'll do something else. ",
                button: [
                    { chatID: -1, text: "Later guys!", callback: "t12" }
                ]
            },
            {
                chatID: 52,
                speaker: "kei",
                text: "Dude, gross. Get out of here!",
                button: [
                    { chatID: -1, text: "Later guys!", callback: "trun" }
                ]
            },
            {
                chatID: 53,
                speaker: "kei",
                text: "Hey slut! You giving out blowjobs?",
                button: [
                    { chatID: -1, text: "Yes I am", callback: "tx3" },
                    { chatID: -1, text: "Oh no! [Run away]", callback: "trun" }
                ]
            },
            {
                chatID: 54,
                speaker: "kei",
                text: "You're give the best blowjobs! You can blow us anytime! ",
                button: [
                    { chatID: -1, text: "I like cock!", callback: "tx11" }
                ]
            },
            {
                chatID: 55,
                speaker: "kei",
                text: "Haven't seen you since high school. Come by to play poker with " +
                    "the boys? ",
                button: [
                    { chatID: 56, text: "I sure am!", callback: "" }
                ]
            },
            {
                chatID: 56,
                speaker: "kei",
                text: "Cool. We've been needing another chump since Philbert's been too " +
                    "busy to play. Each pot is $1 per round, and bets are $5. Come down to " +
                    "my basement and we'll play. Also I hate answering the door, so just " +
                    "c'mon on down. Also, if you have a girlfriend, she can't play. This " +
                    "game is just for the boys. Got it. ",
                button: [
                    { chatID: -1, text: "Cool, I'm in. ", callback: "reload" }
                ]
            },
            {
                chatID: 57,
                speaker: "kei",
                text: "If you start spouting tits you'll have to be the game's blowjob " +
                    "bitch. ",
                button: [
                    { chatID: -1, text: "Just deal me in. ", callback: "" }
                ]
            },
            {
                chatID: 58,
                speaker: "jimmy",
                text: "You know, don't tell Jada, but you're looking really cute these days. ",
                button: [
                    { chatID: -1, text: "Hehehe thanks! I won't tell Jada.", callback: "" }
                ]
            },
            {
                chatID: 59,
                speaker: "ralph",
                text: "I love your outfit! I wonder if they have it in my size? ",
                button: [
                    { chatID: -1, text: "I'm sure they do. ", callback: "" }
                ]
            },
            {
                chatID: 60,
                speaker: "kei",
                text: "You really should service the rest of us if we have to listen " +
                    "to you sucking his dick all the time. ",
                button: [
                    { chatID: 61, text: "...", callback: "j1" }
                ]
            },
            {
                chatID: 61,
                speaker: "jada",
                text: "Not a chance. Just keeping my man happy! I'll see you at home babe. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 62,
                speaker: "thinking",
                text: "I guess they're done playing for today. Probably out somewhere. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 63,
                speaker: "ralph",
                text: "I'm just changing before we go down to the basement. Watching you " +
                    "suck all our dicks like you did showed me it's time to show everyone " +
                    "who I really am. If you can blow all three of us with a smile, then I " +
                    "can do that too! From now on my name is Ralphina! *ugh* no that's terrible. " +
                    "I need a girls name! ",
                button: [
                    { chatID: -1, text: "How about Rachel? ", callback: "Rachel" },
                    { chatID: -1, text: "Stick with Ralphina, it works", callback: "Ralphina" },
                    { chatID: -1, text: "Brenda?", callback: "Brenda" },
                    { chatID: -1, text: "Pam?", callback: "Pam" },
                    { chatID: -1, text: "Jenna?", callback: "Jenna" },
                ]
            },
            {
                chatID: 64,
                speaker: "ralph",
                text: "Huh? I like it. I'm now " + sc.n("ralph") + "! I'm so happy! " +
                    "Let's to tell the guys! ",
                button: [
                    { chatID: 65, text: "...", callback: "r1" }
                ]
            },
            {
                chatID: 65,
                speaker: "ralph",
                text: "So this is the real me guys. I'm a girl now. I know the rule is " +
                    "no girls allowed, but for us, you need to let us play. It's a " +
                    "stupid sexist rule, and needs to go away to we can keep playing! " +
                    "Also my name is now " + sc.n("ralph") + ". That's how much of a " +
                    "girl I now am. ",
                button: [
                    { chatID: 66, text: "...", callback: "r1" }
                ]
            },
            {
                chatID: 66,
                speaker: "jimmy",
                text: "I don't know. I love Jada, but it's nice to get away. If we allow " +
                    "girls she'll want to play too. ",
                button: [
                    { chatID: 67, text: "How about a legacy rule? ", callback: "" }
                ]
            },
            {
                chatID: 67,
                speaker: "kei",
                text: "Dammit! No. I'm not playing poker with a bunch of chicks! Chicks are " +
                    "only good at two things. Cleaning my house and sucking my dick. And " +
                    "when they're done sucking my dick they can just go home! I'm fine " +
                    "with you two being cock suckers, the world needs more cock suckers, but " +
                    "you don't get to play poker with the boys!",
                button: [
                    { chatID: 68, text: "...", callback: "" }
                ]
            },
            {
                chatID: 68,
                speaker: "ralpha",
                text: "But you need us. Playing poker with just two guys is boring. Just " +
                    "let us play. ",
                button: [
                    { chatID: 69, text: "Yeah", callback: "" }
                ]
            },
            {
                chatID: 69,
                speaker: "jimmy",
                text: "We could invite Philbert back. I'm sure he won't cheat again. I know " +
                    "this Keaton dude that could come. ",
                button: [
                    { chatID: 70, text: "what?", callback: "" }
                ]
            },
            {
                chatID: 70,
                speaker: "kei",
                text: "I'll let Philbert back in. I've met Keaton, and the no chick rules applies " +
                    "to them too. I know. Spanky's always asking to come. I'm sure he'll stay a " +
                    "dude. You go talk to Philbert since he's your friend, I'll ask Spanky. ",
                button: [
                    { chatID: 71, text: "...but", callback: "" }
                ]
            },
            {
                chatID: 71,
                speaker: "jimmy",
                text: "Sorry dude. We told you two about the no chicks allowed rule. ",
                button: [
                    { chatID: 72, text: "But what if we dress likes dudes, like before. ", callback: "" }
                ]
            },
            {
                chatID: 72,
                speaker: "jimmy",
                text: "Too late for that. My dick's been in your mouth, so you'll always " +
                    "be a chick to me. I'm going to get Philbert. I'll catch you for tomorrows game. ",
                button: [
                    { chatID: 73, text: "...", callback: "" }
                ]
            },
            {
                chatID: 73,
                speaker: "ralph",
                text: "So just like that we're out?",
                button: [
                    { chatID: 74, text: "...", callback: "" }
                ]
            },
            {
                chatID: 74,
                speaker: "kei",
                text: "You knew the rules. Now everyone out. I've got to talk to Spanky. ",
                button: [
                    { chatID: -1, text: "You two are a couple of dicks! ", callback: "leave" }
                ]
            },
            {
                chatID: 75,
                speaker: "kei",
                text: "Yeah? ",
                button: [
                    { chatID: 76, text: "I came to play some poker. ", callback: "" }
                ]
            },
            {
                chatID: 76,
                speaker: "kei",
                text: "Sorry, but no chicks at the poker table. You'll have to find your  " +
                    "own game somewhere else. ",
                button: [
                    { chatID: -1, text: "Oh. ok.", callback: "leave" }
                ]
            },
            {
                chatID: 77,
                speaker: "philbert",
                text: "Why hello. I knew I would run into you here. After you sucked " +
                    "my dick in class, you just can't get enough of it can you? " +
                    "That's what I like about you. You love the taste of my dick, and I love " +
                    "having my dick sucked! If you're lucky I may even bend you over " +
                    "and breed that little hole of yours. Hahahahahaha",
                button: [
                    { chatID: 79, text: "Philbert!", callback: "" }
                ]
            },
            {
                chatID: 78,
                speaker: "philbert",
                text: "What do we have here? Looks like the cock sucker's arrived! ",
                button: [
                    { chatID: 79, text: "!", callback: "" }
                ]
            },
            {
                chatID: 79,
                speaker: "me",
                text: "I wanted to think you guys were joking. " + sc.n("ralph") + " and I are out. Just " +
                    "like that. And you replace us with these two? ",
                button: [
                    { chatID: 80, text: "...", callback: "" }
                ]
            },
            {
                chatID: 80,
                speaker: "kei",
                text: "Without rules life is chaos. Now you can get out of my house, or " +
                    "you can crawl under the table and be the blow job bitch. You don't get Jada's rule, " +
                    "you have to blow us all. But once you're done you have to get out. Weirds " +
                    "me out when someone stands behind me and watches us play. ",
                button: [
                    { chatID: -1, text: "...", callback: "choice" }
                ]
            },
            {
                chatID: 81,
                speaker: "ralph",
                text: "You know, even though I didn't know you were coming. I kinda " +
                    "knew I would see you here. ",
                button: [
                    { chatID: 82, text: "I'm kind of suprised to see you here too. ", callback: "" }
                ]
            },
            {
                chatID: 82,
                speaker: "ralph",
                text: "Hhahaha yeah. I guess I just had to try it. After doing all that " +
                    "stuff in class, I had to try the real thing. Like not in class. Ya know. ",
                button: [
                    { chatID: 83, text: "heh. Yeah I totally know. ", callback: "" }
                ]
            },
            {
                chatID: 83,
                speaker: "ralph",
                text: "I don't suppose you mind if I get " + sc.n("spanky") + " while " +
                    "you do the rest do you? You're way better at this than I am, and " +
                    "well.. I've known him for a long time, so I would feel more comfortable " +
                    "just doing him. ",
                button: [
                    { chatID: 84, text: "Yeah. I get it. You can have " + sc.n("spanky") + " and I'll get the rest. ", callback: "" }
                ]
            },
            {
                chatID: 84,
                speaker: "ralph",
                text: "Thank you! You know you really are my best friend. ",
                button: [
                    { chatID: -1, text: "I know", callback: "suck0" },
                    { chatID: -1, text: "You're my best friend too", callback: "suck0" },
                ]
            },
            {
                chatID: 85,
                speaker: "jimmy",
                text: "Oh! Uhhh. I got in trouble when I told Jada you sucked my dick. " +
                    "I promised I wouldn't do that again. Try the other dicks. ",
                button: [
                    { chatID: -1, text: "...awwww ok", callback: "suck0" },
                ]
            },
            {
                chatID: 86,
                speaker: "kei",
                text: "Good girl. ",
                button: [
                    { chatID: -1, text: "*gulp*", callback: "suck0" },
                ]
            },
            {
                chatID: 87,
                speaker: "philbert",
                text: "I do love sissies! They just suck your cock and don't want anything " +
                    "in return. Bitches always want a date, money, or time. Sissies just want " +
                    "the cock!",
                button: [
                    { chatID: -1, text: "*gulp*", callback: "suck0" },
                ]
            },
            {
                chatID: 88,
                speaker: "ralph",
                text: "That was so amazing! I'm on cloud 9. I've got to go home and " +
                    "journal about this! Really amazing. Thanks for being here. I feel " +
                    "so amazing! Catch you later!",
                button: [
                    { chatID: 89, text: "Yeah. See you later.", callback: "s3" },
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "That was fun, but I do wish they would let me play. Stupid sexists " +
                    "boys think that girls are only good to fuck. I need to find some boys " +
                    "that will let me hang out and fuck. I guess I'll just crawl out of here " +
                    "on my hands and knees. So awkward. ",
                button: [
                    { chatID: -1, text: "...", callback: "undoLeave" },
                ]
            },
            {
                chatID: 90,
                speaker: "ralph",
                text: "Back for more! I get " + sc.n("spanky") + "! ",
                button: [
                    { chatID: -1, text: "Ok. ", callback: "bjbitch" },
                ]
            },
            {
                chatID: 91,
                speaker: "jada",
                text: "Hahaha. Looks like I have some company today. Wait, why are you two " +
                    "naked? ",
                button: [
                    { chatID: 92, text: "Oh, uhh. ", callback: "" },
                ]
            },
            {
                chatID: 92,
                speaker: "ralph",
                text: "Oh. I made a bet with Spanky the other day and totally lost. If I won " +
                    "I got $1000, but if I lost I had to come to the game naked everytime. I " +
                    "have no idea why " + sc.n("me") + " is naked. ",
                button: [
                    { chatID: 93, text: "What? I saw you were naked, so I got naked. I didn't want you to feel weird. ", callback: "" },
                ]
            },
            {
                chatID: 93,
                speaker: "jada",
                text: "Haha. You girls are something else! So have you and Spanky been " +
                    "seeing a lot of each other? You two would make a cute couple. ",
                button: [
                    { chatID: 94, text: "...", callback: "" },
                ]
            },
            {
                chatID: 94,
                speaker: "ralph",
                text: "A couple? pfffft. No. I just prefer it over here. Plus he gives " +
                    "me stuff, which is nice. Let's just stop talking and start sucking! ",
                button: [
                    { chatID: -1, text: "ok", callback: "bjbitch" },
                ]
            },
            {
                chatID: 95,
                speaker: "jada",
                text: "Hahaha! Love my cute little naked blow job bitches! Shall we get " +
                    "sucking? ",
                button: [
                    { chatID: -1, text: "oh yeah!", callback: "bjbitch" },
                ]
            },
            {
                chatID: 96,
                speaker: "jada",
                text: "You do look sexy! Give me a kiss, I have a present for you. ",
                button: [
                    { chatID: 97, text: "[Kiss the girl]", callback: "s13" },
                ]
            },
            {
                chatID: 97,
                speaker: "jada",
                text: "Yummy! I'll catch you girls later ",
                button: [
                    { chatID: -1, text: "*mwah*", callback: "undoLeave" },
                ]
            },
            {
                chatID: 98,
                speaker: "me",
                text: "Boys, it looks like I'm low on money. I'll have to catch you all later. ",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
            {
                chatID: 99,
                speaker: "jimmy",
                text: "Poker games been cancelled on account of " + sc.n("ralph") + " being missing. " +
                    "wouldn't feel right us having fun while he's lost out there, ya know. We're really " +
                    "sorry we can't help find him. ",
                button: [
                    { chatID: -1, text: "Yeah. totally.", callback: "leave" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
