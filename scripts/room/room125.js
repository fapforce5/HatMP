//Room name
var room125 = {};
room125.main = function () {
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
            "name": "jimmy",
            "left": 1425,
            "top": 182,
            "width": 385,
            "height": 711,
            "image": "125_poker/jimmy1.png"
        },
        {
            "type": "btn",
            "name": "kei",
            "left": 713,
            "top": 100,
            "width": 648,
            "height": 648,
            "image": "125_poker/kei1.png"
        }
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
};

room125.btnclick = function (name) {
    switch (name) {
        case "ralph":
            chat(0, 125);
            break;
        case "jimmy":
            chat(1, 125);
            break;
        case "kei":
            chat(2, 125);
            break;
        default:
            break;
    }
};

room125.chatcatch = function (callback) {
    var i, j, k, temp, willplay;

    switch (callback) {
        case "deal":
            $('#room_footer').hide();
            g.internal = new Array();
            g.pass.gameCount++;
            if (g.pass.gameCount < 12 && !g.get("cardgame")) {
                char.addtime(15);
                if (g.pass.deck.length < 14) {
                    console.log("shiff")
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
                g.internal.push({ n: "Ralph", v1: g.pass.deck[0].n, c1: g.pass.deck[0].s, v2: g.pass.deck[1].n, c2: g.pass.deck[1].s, b: 5, l: 311, t: 617 });
                g.internal.push({ n: "Kei", v1: g.pass.deck[2].n, c1: g.pass.deck[2].s, v2: g.pass.deck[3].n, c2: g.pass.deck[3].s, b: 5, l: 867, t: 510 });
                g.internal.push({ n: "Jimmy", v1: g.pass.deck[4].n, c1: g.pass.deck[4].s, v2: g.pass.deck[5].n, c2: g.pass.deck[5].s, b: 5, l: 1429, t: 600 });
                g.internal.push({ n: "Me", v1: g.pass.deck[6].n, c1: g.pass.deck[6].s, v2: g.pass.deck[7].n, c2: g.pass.deck[7].s, b: 5, t: 862, l: 844 });
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

                chatnum = -1;

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
                g.internal[0].b = 25;
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
                g.internal[1].b = 25;
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
                g.internal[2].b = 25;
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
            g.mod("money", -5);
            nav.killbutton("mycard");
            g.internal[3].v1 = 0;
            g.internal[3].v2 = 0;
            room125.chatcatch("call");
            break;
        case "mePlay":
            if (g.internal[0].b + g.internal[1].b + g.internal[2].b === 75)
                chat(7, 125);
            else if (g.internal[0].b + g.internal[1].b + g.internal[2].b === 15) {
                g.mod("money", 15);
                chat(9, 125);
            }
            else
                chat(8, 125);
            break;
        case "call":
            g.internal[3].b = 25;

            nav.killbutton("ralphback");
            nav.killbutton("jimmyback");
            nav.killbutton("keiback");
            var winner = new Array();
            var totalCash = 0;
            if (g.internal[0].b === 25) {
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
            if (g.internal[1].b === 25) {
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
            if (g.internal[2].b === 25) {
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
                    g.mod("money", Math.round(totalCash / (winner.length === 0 ? 1 : winner.length)));
                    chat(11, 125);
                }
                else {
                    g.mod("money", -25);
                    chat(12, 125);
                }
            }
            else
                chat(13, 125);

            break;
        case "exit":
            g.setflag("cardgame");
            nav.room(0);
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
                { chatID: -1, text: "Yes, let's play", callback: "deal" },
                { chatID: -1, text: "Tell me how to play.", callback: "" },
                { chatID: -1, text: "Not ready yet!", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "kei",
            text: "So you in?",
            button: [
                { chatID: -1, text: "Yes, let's play", callback: "deal" },
                { chatID: -1, text: "Tell me how to play.", callback: "" },
                { chatID: -1, text: "Not ready yet!", callback: "" }
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
                { chatID: -1, text: "I'm in, here's $20", callback: "call" },
                { chatID: -1, text: "I'm out. ", callback: "fold" }
            ]
        },
        {
            chatID: 8,
            speaker: "kei",
            text: "You in or out?",
            button: [
                { chatID: -1, text: "I'm in, here's $20", callback: "call" },
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
                { chatID: -1, text: "Tell me how to play.", callback: "" },
                { chatID: -1, text: "I'm out.", callback: "exit" }
            ]
        },
        {
            chatID: 12,
            speaker: "kei",
            text: "Hahaha, loser, again?",
            button: [
                { chatID: -1, text: "Yeah, Let's play another round.", callback: "deal" },
                { chatID: -1, text: "Tell me how to play.", callback: "" },
                { chatID: -1, text: "I'm out.", callback: "exit" }
            ]
        },
        {
            chatID: 13,
            speaker: "kei",
            text: "Only a wimp folds.",
            button: [
                { chatID: -1, text: "Yeah, Let's play another round.", callback: "deal" },
                { chatID: -1, text: "Tell me how to play.", callback: "" },
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};