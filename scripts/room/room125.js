﻿//Room name
var room125 = {};
room125.main = function () {
    if (cl.isLewd()) {
        if (cl.c.chest > 2) {
            sc.setstep("kei", -1);
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
        //g.internal.push({ n: "Me", v1: g.pass[6].n, c1: g.pass[6].s, v2: g.pass[7].n, c2: g.pass[7].s, b: 5, t: 862, l: 844 });
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
                "top": 100,
                "width": 648,
                "height": 648,
                "image": "125_poker/kei1.png"
            },
            {
                "type": "btn",
                "name": "jimmy",
                "left": 1425,
                "top": 182,
                "width": 385,
                "height": 711,
                "image": "125_poker/jimmy1.png"
            },
        ];

        var navList = [0];
        $.each(btnList, function (i, v) {
            nav.button(v, 125);
        });

        g.pass = { gameCount: 0, deck: new Array() };
        for (i = 2; i < 15; i++) {
            g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "C.png" });
            g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "D.png" });
            g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "H.png" });
            g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "S.png" });
        }
        for (k = 0; k < 5; k++) {
            for (i = 0; i < g.pass.deck.length; i++) {
                j = Math.floor(Math.random() * (g.pass.deck.length));
                temp = g.pass.deck[i];
                g.pass.deck[i] = g.pass.deck[j];
                g.pass.deck[j] = temp;
            }
        }
        nav.buildnav(navList);
        if (cl.c.chest > 2 && !sc.getEvent("kei", -1)) {
            char.changeMenu("hide", false, true);
            nav.killall();
            nav.bg("125_poker/t1.jpg");
            sc.setstep("kei", -1);
            chat(32, 125);
        }
    }
};

room125.btnclick = function (name) {
    switch (name) {
        case "ralph":
            if (sc.getstep("kei") === 3) {
                room125.btnclick("jada");
            }
            else
                chat(0, 125);
            break;
        case "jimmy":
            if (sc.getstep("kei") === 3) {
                room125.btnclick("jada");
            }
            else
                chat(1, 125);
            break;
        case "kei":
            if (sc.getstep("kei") === 3) {
                room125.btnclick("jada");
            }
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
            g.internal = new Array();
            g.pass.gameCount++;
            if (g.pass.gameCount < 12 && !daily.get("cardgame")) {
                char.addtime(15);
                if (g.pass.deck.length < 14) {
                    g.pass.deck = new Array();
                    for (i = 2; i < 15; i++) {
                        g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "C.png" });
                        g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "D.png" });
                        g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "H.png" });
                        g.pass.deck.push({ n: i === 14 ? 11 : (i > 10 ? 10 : i), s: i.toString() + "S.png" });
                    }
                    for (k = 0; k < 5; k++) {
                        for (i = 0; i < g.pass.deck.length; i++) {
                            j = Math.floor(Math.random() * (g.pass.deck.length));
                            temp = g.pass.deck[i];
                            g.pass.deck[i] = g.pass.deck[j];
                            g.pass.deck[j] = temp;
                        }
                    }
                }
                g.internal.push({ n: "Ralph", v1: g.pass.deck[0].n, c1: g.pass.deck[0].s, v2: g.pass.deck[1].n, c2: g.pass.deck[1].s, b: 1, l: 311, t: 617 });
                g.internal.push({ n: "Kei", v1: g.pass.deck[2].n, c1: g.pass.deck[2].s, v2: g.pass.deck[3].n, c2: g.pass.deck[3].s, b: 1, l: 867, t: 510 });
                g.internal.push({ n: "Jimmy", v1: g.pass.deck[4].n, c1: g.pass.deck[4].s, v2: g.pass.deck[5].n, c2: g.pass.deck[5].s, b: 1, l: 1429, t: 600 });
                g.internal.push({ n: "Me", v1: g.pass.deck[6].n, c1: g.pass.deck[6].s, v2: g.pass.deck[7].n, c2: g.pass.deck[7].s, b: 1, t: 862, l: 844 });
                g.pass.deck.splice(0, 8);

                nav.killall();
                var btnList = [
                    {
                        "type": "img",
                        "name": "ralph",
                        "left": 199,
                        "top": 206,
                        "width": 512,
                        "height": 644,
                        "image": "125_poker/" + (g.internal[0].v1 + g.internal[0].v2 > 7 ? "ralphHappy.png" : "ralphBad.png")
                    },
                    {
                        "type": "img",
                        "name": "jimmy",
                        "left": 1359,
                        "top": 184,
                        "width": 447,
                        "height": 707,
                        "image": "125_poker/" + (g.internal[2].v1 + g.internal[2].v2 > 14 ? "jimmyHappy.png" : "jimmyBad.png")
                    },
                    {
                        "type": "img",
                        "name": "kei",
                        "left": 713,
                        "top": 100,
                        "width": 648,
                        "height": 654,
                        "image": "125_poker/" + (g.internal[1].v1 + g.internal[1].v2 > 17 ? "keiHappy.png" : "keiBad.png")
                    },

                    {
                        "type": "img",
                        "name": "ralphback",
                        "left": 346,
                        "top": 550,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/back.png"
                    },
                    {
                        "type": "img",
                        "name": "keiback",
                        "left": 920,
                        "top": 443,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/back.png"
                    },
                    {
                        "type": "img",
                        "name": "jimmyback",
                        "left": 1466,
                        "top": 533,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/back.png"
                    },

                    {
                        "type": "img",
                        "name": "ralphcard",
                        "left": 295,
                        "top": 514,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/" + g.internal[0].c2
                    },
                    {
                        "type": "img",
                        "name": "keicard",
                        "left": 869,
                        "top": 407,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/" + g.internal[1].c2
                    },
                    {
                        "type": "img",
                        "name": "jimmycard",
                        "left": 1415,
                        "top": 497,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/" + g.internal[2].c2
                    },

                    {
                        "type": "img",
                        "name": "mycard",
                        "left": 800,
                        "top": 739,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/" + g.internal[3].c1
                    },
                    {
                        "type": "img",
                        "name": "mycard",
                        "left": 1051,
                        "top": 739,
                        "width": 165,
                        "height": 255,
                        "image": "125_poker/" + g.internal[3].c2
                    }
                ];
                $.each(btnList, function (i, v) {
                    nav.button(v, 125);
                });



                room125.chatcatch("ralphPlay");
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
            daily.set("cardgame");
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
            daily.set("cardgame");
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
            daily.set("cardgame");
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
            daily.set("cardgame");
            gv.mod("giveOralMale", 3);
            char.room(0);
            break;
        default:
            break;
    }
};

room125.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "ralph",
            text: "I'm so excited to play with you guys! ",
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
                { chatID: -1, text: "Yes, let's play", callback: "keiInc" },
                { chatID: 27, text: "Tell me how to play.", callback: "howto1" },
                { chatID: -1, text: "No, I'm going to go", callback: "exit" }
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
            speaker: "ralph",
            text: "Oh man Jimmy, you're going to get in so much trouble from " + sc.n("jada") + " when she finds out how much you lost this week!" ,
            button: [
                { chatID: 18, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "kei",
            text: "Oh man Jimmy, you're going to get in so much trouble from " + sc.n("jada") + " when she finds out how much you lost this week!",
            button: [
                { chatID: 18, text: "...", callback: "jada1" }
            ]
        },
        {
            chatID: 17,
            speaker: "jimmy",
            text: "Oh man I'm going to get in so much trouble from " + sc.n("jada") + " when she finds out how much I lost this week!",
            button: [
                { chatID: 18, text: "...", callback: "jada1" }
            ]
        },
        {
            chatID: 18,
            speaker: "jimmy",
            text: "It's a good thing I hide how much I lost from her. She'll never know.",
            button: [
                { chatID: 19, text: "...", callback: "jada2" }
            ]
        },
        {
            chatID: 19,
            speaker: "jada",
            text: "What do you mean you're hiding money!",
            button: [
                { chatID: 20, text: "...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "jimmy",
            text: "Oh uh well..... ummmmm",
            button: [
                { chatID: 21, text: "...", callback: "jada3" }
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
            text: "We get it, you have sex! let us get back to our game already " + sc.n("jada") +". ",
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
            text: "This here is a simple enough game. Highest pair wins. To play you toss $1 into the pot. " +
                "Each player is dealt 2 cards, the first one is dealt face down, the " +
                "second one is dealt face up. You try to guess if your two cards total up to the highest amount. ",
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
            text: "He knows that " + sc.n("ralph") + ", everyone know that. Now stop interrupting. In this case I have the Ace and " +
                "you're showing only the 7, so I'm showing the best card. You can fold, in which case you'll only lose $1, or call and bet $5 to see " +
            "if you win. ",
            button: [
                { chatID: 30, text: "...", callback: "howto2" }
            ]
        },
        {
            chatID: 30,
            speaker: "jimmy",
            text: "If you call we'll all flip our cards over. If your pair is the " +
            "highest you get to keep it all. If you tie you split the pot with the who ever else ties with you. ",
            button: [
                { chatID: 31, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "kei",
            text: "So " + sc.n("ralph") + " has 14, I have 15, " + sc.n("jimmy") + " has 16, and you have 18, so you win. You would take all the money.",
            button: [
                { chatID: 3, text: "ok", callback: "howto3" }
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
            text: "Holy shit! I just blew all my frinds. What the hell am I becomming. And they are spraying my face with their cum, " +
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
