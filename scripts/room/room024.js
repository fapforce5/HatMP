//Spin the bottle
var room24 = {};

room24.main = function () {
    g.internal = {
        evaWine: 3,
        lolaWine: 3,
        meWine: 3,
        lolaNude: 0,
        evaNude: 0,
        meNude: 0,
        meNextChat: 0,
        prevWho: "me",
        whoTurn: "me",
        totalTurn: 0
    };
    room24.chatcatch("evaTalk lolaSit");
    inv.use("wine");
    daily.set("lola");
    daily.set("eva");
    if (sc.getMissionTask("eva", "games", 1).notStarted) {
        sc.completeMissionTask("eva", "games", 1);
        sc.completeMissionTask("lola", "games", 1);
        chat(0, 24);
    }
    else {
        chat(23, 24);
    }
    
};

room24.btnclick = function (name) {
    switch (name) {
        case "spin":
            nav.kill();
            room24.chatcatch("topbg evaTop lolaTop");
            if (g.internal.whoTurn === "eva") {
                //nav.button({
                //    "type": "img",
                //    "name": "hlkill",
                //    "left": 44,
                //    "top": 209,
                //    "width": 1121,
                //    "height": 863,
                //    "image": "24_spinTheBottle/eva_hl.png"
                //}, 13);
                nav.button({
                    "type": "img",
                    "name": "eva",
                    "left": 310,
                    "top": 6,
                    "width": 591,
                    "height": 806,
                    "image": "24_spinTheBottle/evaTop_spin.png"
                }, 13);

            }
            else if (g.internal.whoTurn === "lola") {
                //nav.button({
                //    "type": "img",
                //    "name": "hlkill",
                //    "left": 1047,
                //    "top": 225,
                //    "width": 873,
                //    "height": 855,
                //    "image": "24_spinTheBottle/lola_hl.png"
                //}, 13);
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1251,
                    "top": 1,
                    "width": 605,
                    "height": 872,
                    "image": "24_spinTheBottle/lolaTop_spin.png"
                }, 13);
            }
            //else {
            //    nav.button({
            //        "type": "img",
            //        "name": "hlkill",
            //        "left": 507,
            //        "top": 654,
            //        "width": 1152,
            //        "height": 426,
            //        "image": "24_spinTheBottle/me_hl.png"
            //    }, 13);
            //}
            if (g.internal.whoTurn !== "me" && g.internal.lolaWine > 0 && g.internal.evaWine > 0 && g.rand(0, 2) === 0) {
                $('.room-img[data-name="bottle"]').addClass(g.internal.whoTurn + 'Spin');
                g.internal.prevWho = g.internal.whoTurn;
            }
            else {
                g.internal.prevWho = g.internal.whoTurn;
                switch (g.rand(0, 3)) {
                    case 0:
                        $('.room-img[data-name="bottle"]').addClass('evaSpin');
                        g.internal.whoTurn = "eva";
                        break;
                    case 1:
                        $('.room-img[data-name="bottle"]').addClass('lolaSpin');
                        g.internal.whoTurn = "lola";
                        break;
                    case 2:
                        $('.room-img[data-name="bottle"]').addClass('meSpin');
                        g.internal.whoTurn = "me";
                        break;
                }
            }
            setTimeout(function () {
                room24.btnclick("spinStop1");
                //$('.room-chatBox').show(); window.getSelection().removeAllRanges();
            }, 3000);
            break;
        case "spinStop1":
            if (g.internal.prevWho === g.internal.whoTurn) {
                switch (g.internal.whoTurn) {
                    case "lola": chat(30, 24); break;
                    case "eva": chat(31, 24); break;
                    case "me": chat(32, 24); break;
                }
            }
            else 
                room24.btnclick("spinStop");
            break;
        case "spinStop":
            nav.killbutton("hlkill");
            switch (g.internal.prevWho) {
                case "lola":
                    if (g.internal.lolaWine < 2 && g.internal.lolaNude === 0 && g.rand(0, 2) !== 0) {
                        room24.chatcatch("bg evaSit lolaTalk");
                        g.internal.lolaNude = 1;
                        if (g.internal.evaNude === 1)
                            chat(5, 24);
                        else
                            chat(4, 24);
                    }
                    else {
                        if (g.internal.lolaWine > 0) {
                            if (g.internal.whoTurn === "lola") {
                                g.internal.lolaWine--; 
                                room24.chatcatch("bg evaSit lolaDrink");
                                chat(10, 24); //drink wine
                            }
                            else if (g.internal.whoTurn === "eva") {
                                room24.chatcatch("bg bothKiss");
                                chat(11, 24);//kiss eva
                            }
                            else {
                                room24.chatcatch("bg evaSit lolaKiss");
                                chat(12, 24);//kiss mc
                            }
                        }
                        else {
                            room24.chatcatch("bg evaSit lolaTalk");
                            chat(21, 24);
                        }
                    }
                    break;
                case "eva":
                    if (g.internal.evaWine < 3 && g.internal.evaNude === 0 && g.rand(0, 4) !== 0) {
                        g.internal.evaNude = 1;
                        room24.chatcatch("bg lolaSit evaTalk");
                        if (g.internal.lolaNude === 1)
                            chat(13, 24);
                        else
                            chat(15, 24);
                    }
                    else {
                        if (g.internal.evaWine > 0) {
                            if (g.internal.whoTurn === "eva") {
                                g.internal.evaWine--;
                                room24.chatcatch("bg lolaSit evaDrink");
                                chat(16, 24); //drink wine
                            }
                            else if (g.internal.whoTurn === "lola") {
                                room24.chatcatch("bg bothKiss");
                                chat(17, 24);//kiss eva
                            }
                            else {
                                room24.chatcatch("bg lolaSit evaKiss");
                                chat(18, 24);//kiss mc
                            }
                        }
                        else {
                            room24.chatcatch("bg evaTalk lolaSit");
                            chat(22, 24);
                        }
                    }
                    break;
                case "me":
                    if (g.internal.whoTurn === "me") {
                        sc.select("drink", "24_spinTheBottle/icon_drink.png", 8);
                        if (cl.c.shirt !== null)
                            sc.select("undress", "24_spinTheBottle/icon_undress.png", 9)
                    }
                    else {
                        sc.select("kiss", "24_spinTheBottle/icon_kiss.png", 8);
                        if (cl.c.shirt !== null)
                            sc.select("undress", "24_spinTheBottle/icon_undress.png", 9)
                    }
                    sc.select("quit", "24_spinTheBottle/icon_quit.png", 10);
                    break;
            }
            g.internal.totalTurn++;
            break;
        case "quit":
            nav.killbutton("kiss");
            nav.killbutton("undress");
            nav.killbutton("quit");
            nav.killbutton("drink");
            chat(24, 24);
            break;
        case "undress":
            nav.killbutton("kiss");
            nav.killbutton("undress");
            nav.killbutton("quit");
            nav.killbutton("drink");
            cl.c.shirt = null;
            cl.display();
            if (cl.c.bra === null) {
                room24.chatcatch("bg evaSit lolaTalk");
                sc.modLevel("lola", 25, 3);
                chat(25, 24);
            }
            else {
                sc.modSecret("eva", 65);
                sc.modSecret("lola", 65);
                room24.chatcatch("bg evaSit lolaTalk");
                chat(27, 24);
            }
            break;
        case "kiss":
            nav.killbutton("kiss");
            nav.killbutton("undress");
            nav.killbutton("quit");
            if (g.internal.whoTurn === "lola") {
                sc.modLevel("lola", 10, 7);
                room24.chatcatch("bg evaSit lolaKiss");
                chat(19, 24);
            }
            else {
                sc.modLevel("eva", 10, 7);
                room24.chatcatch("bg lolaSit evaKiss");
                chat(20, 24);
            }
            break;
        case "drink":
            nav.killall();
            room24.chatcatch("bg lolaSit evaSit");
            g.internal.meWine--;
            nav.button({
                "type": "img",
                "name": "medrink",
                "left": 364,
                "top": 40,
                "width": 1297,
                "height": 1040,
                "image": "24_spinTheBottle/meDrink.png"
            }, 13);
            sc.select("spin", "24_spinTheBottle/spin.png", 8);
            break;
        case "lolaWine":
            nav.killbutton("lolaWine");
            nav.button({
                "type": "img",
                "name": "lolaWine",
                "left": 1796,
                "top": 871,
                "width": 75,
                "height": 200,
                "image": "24_spinTheBottle/wine_" + g.internal.lolaWine + ".png"
            }, 13);
            break;
        case "evaWine":
            nav.killbutton("evaWine");
            nav.button({
                "type": "img",
                "name": "evaWine",
                "left": 1074,
                "top": 871,
                "width": 90,
                "height": 191,
                "image": "24_spinTheBottle/wine_" + g.internal.evaWine + ".png"
            }, 13);
            break;
        case "lolaPic":
            pic.add("lolaTopless");
            room24.chatcatch("lolaSit evaTalk");
            chat(9, 24);
            break;
    }
};

room24.chatcatch = function (callback) {
    var cArray = callback.split(" ");
    for (i = 0; i < cArray.length; i++) {
        if (cArray[i] !== "") {
            switch (cArray[i]) {
                case "bg":
                    nav.bg("24_spinTheBottle/013_spinBG.jpg");
                    nav.killbutton("bottle");
                    break;
                case "topbg":
                    nav.killbutton("lolaWine");
                    nav.killbutton("evaWine");
                    nav.bg("24_spinTheBottle/013_spinBottle_floor.jpg");
                    nav.button({
                        "type": "img",
                        "name": "bottle",
                        "left": 960,
                        "top": 812,
                        "width": 222,
                        "height": 223,
                        "image": "24_spinTheBottle/bottleStop.png"
                    }, 13);
                    break;
                case "black":
                    nav.killall();
                    nav.bg("24_spinTheBottle/black.jpg");
                    break;
                case "lolaSit":
                    nav.killbutton("lola");
                    nav.button({
                        "type": "img",
                        "name": "lola",
                        "left": 1192,
                        "top": 0,
                        "width": 728,
                        "height": 1071,
                        "image": "24_spinTheBottle/sit_lola_" + g.internal.lolaNude + "_nt.png"
                    }, 13);
                    room24.btnclick("lolaWine");
                    break;
                case "lolaHeart":
                    nav.killbutton("lola");
                    nav.button({
                        "type": "img",
                        "name": "lola",
                        "left": 1192,
                        "top": 0,
                        "width": 728,
                        "height": 1071,
                        "image": "24_spinTheBottle/sit_lola_heart.png"
                    }, 13);
                    room24.btnclick("lolaWine");
                    sc.select("lolaPic", "icon_pic.png", 8);
                    break;
                case "evaSit":
                    nav.killbutton("eva");
                    nav.button({
                        "type": "img",
                        "name": "eva",
                        "left": 448,
                        "top": 44,
                        "width": 711,
                        "height": 1036,
                        "image": "24_spinTheBottle/sit_eva_" + g.internal.evaNude + "_nt.png"
                    }, 13);
                    room24.btnclick("evaWine");
                    break;
                case "lolaDrink":
                    nav.killbutton("lola");
                    nav.button({
                        "type": "img",
                        "name": "lola",
                        "left": 1192,
                        "top": 0,
                        "width": 728,
                        "height": 1071,
                        "image": "24_spinTheBottle/sit_lola_" + g.internal.lolaNude + "_drink.png"
                    }, 13);
                    nav.killbutton("lola_glass");
                    break;
                case "evaDrink":
                    nav.killbutton("eva");
                    nav.button({
                        "type": "img",
                        "name": "eva",
                        "left": 448,
                        "top": 44,
                        "width": 711,
                        "height": 1036,
                        "image": "24_spinTheBottle/sit_eva_" + g.internal.evaNude + "_drink.png"
                    }, 13);
                    nav.killbutton("eva_glass");
                    break;
                case "lolaTalk":
                    nav.killbutton("lola");
                    nav.button({
                        "type": "img",
                        "name": "lola",
                        "left": 1192,
                        "top": 0,
                        "width": 728,
                        "height": 1071,
                        "image": "24_spinTheBottle/sit_lola_" + g.internal.evaNude + "_t.png"
                    }, 13);
                    room24.btnclick("lolaWine");
                    break;
                case "evaTalk":
                    nav.killbutton("eva");
                    nav.button({
                        "type": "img",
                        "name": "eva",
                        "left": 448,
                        "top": 44,
                        "width": 711,
                        "height": 1036,
                        "image": "24_spinTheBottle/sit_eva_" + g.internal.evaNude + "_t.png"
                    }, 13);
                    room24.btnclick("evaWine");
                    break;
                case "lolaKiss":
                    nav.killbutton("lola");
                    room24.btnclick("lolaWine");
                    nav.button({
                        "type": "img",
                        "name": "lola",
                        "left": 1159,
                        "top": 0,
                        "width": 716,
                        "height": 1073,
                        "image": "24_spinTheBottle/sit_lola_" + g.internal.lolaNude + "_kiss.png"
                    }, 13);
                    //gv.mod("arousal", 30);
                    break;
                case "evaKiss":
                    nav.killbutton("eva");
                    room24.btnclick("evaWine");
                    nav.button({
                        "type": "img",
                        "name": "eva",
                        "left": 448,
                        "top": 44,
                        "width": 711,
                        "height": 1036,
                        "image": "24_spinTheBottle/sit_eva_" + g.internal.evaNude + "_kiss.png"
                    }, 13);
                    //gv.mod("arousal", 30);
                    break;
                case "bothKiss":
                    nav.killbutton("eva");
                    nav.killbutton("lola");
                    nav.button({
                        "type": "img",
                        "name": "eva",
                        "left": 346,
                        "top": 0,
                        "width": 1378,
                        "height": 1080,
                        "image": "24_spinTheBottle/both_kiss_eva" + g.internal.evaNude + "_lola" + g.internal.lolaNude + ".png"
                    }, 13);
                    room24.btnclick("evaWine");
                    room24.btnclick("lolaWine");
                    //gv.mod("arousal", 60);
                    break;
                case "lolaTop":
                    nav.killbutton("lola");
                    nav.button({
                        "type": "img",
                        "name": "lola",
                        "left": 1251,
                        "top": 1,
                        "width": 605,
                        "height": 872,
                        "image": "24_spinTheBottle/lolaTop_" + g.internal.lolaNude + ".png"
                    }, 13);
                    break;
                case "evaTop":
                    nav.killbutton("eva");
                    nav.button({
                        "type": "img",
                        "name": "eva",
                        "left": 310,
                        "top": 6,
                        "width": 591,
                        "height": 806,
                        "image": "24_spinTheBottle/evaTop_" + g.internal.evaNude + ".png"
                    }, 13);
                    break;
                case "lolaTopless":
                    g.internal.lolaNude ++;
                    break;
                case "evaTopless":
                    g.internal.evaNude ++;
                    break;
                case "meFirst":
                    g.internal.meNextChat = 53;
                    break;
                case "meSecond":
                    g.internal.meNextChat = 64;
                    break;
                case "meThird":
                    g.internal.meNextChat = 77;
                    break;
                case "meEnd":
                    room24.chatcatch("topbg evaTop lolaTop");
                    chat(g.internal.meNextChat, 24);
                    break;
                case "meSecret":
                    if (g.internal.meSecret === 0) {
                        room24.chatcatch("bg evaSit lolaSit");
                        g.internal.meSecret = 1;
                        chat(18, 24);
                    }
                    else if (g.internal.meSecret === 1) {
                        room24.chatcatch("bg evaSit lolaTalk");
                        g.internal.meSecret = 1;
                        chat(38, 24);
                    }
                    break;
                case "lolaPic":
                    pic.add("lolaTopless");
                    break;
                case "meKissLola":
                    room24.chatcatch("bg evaSit lolaKiss");
                    chat(27, 24);
                    break;
                case "meKissEva":
                    room24.chatcatch("bg lolaSit evaKiss");
                    chat(29, 24);
                    break;
                case "killWine":
                    nav.killbutton("lolaWine");
                    nav.killbutton("evaWine");
                    break;
                case "evaSpin":
                    room24.btnclick("spin");
                    //$('.room-img[data-name="bottle"]').addClass('evaSpin');
                    //$('.room-chatBox').hide();
                    //setTimeout(function () { $('.room-chatBox').show(); window.getSelection().removeAllRanges(); }, 3000);
                    break;
                case "lolaSpin":
                    room24.btnclick("spin");
                    //$('.room-img[data-name="bottle"]').addClass('lolaSpin');
                    //$('.room-chatBox').hide();
                    //setTimeout(function () { $('.room-chatBox').show(); window.getSelection().removeAllRanges(); }, 3000);
                    break;
                case "meSpin":
                    sc.select("spin", "24_spinTheBottle/spin.png", 8);
                    break;
                case "spinStop":
                    room24.btnclick("spinStop");
                    break;
                case "spinEnd":
                    char.settime(22, 37);
                    sc.setstep("eva", 4);
                    sc.setstep("lola", 5);
                    inv.use("wine");
                    char.room(11);
                    break;
                case "suprise1":
                    nav.killbutton("suprise");
                    nav.button({
                        "type": "img",
                        "name": "suprise1",
                        "left": 1513,
                        "top": 0,
                        "width": 407,
                        "height": 943,
                        "image": "24_spinTheBottle/suprise1.png"
                    }, 24);
                    break;
                case "suprise2":
                    chat(8, 16);
                    break;
                case "suprise3":
                    chat(12, 16);
                    break;
                case "picture":
                    if (pic.has("lolaTopless")) {
                        chat(7, 24);
                        room24.chatcatch("evaTalk");
                        room24.chatcatch("lolaSit");
                    }
                    else {
                        sc.modLevel("lola", 10, 7);
                        room24.btnclick("spin");
                    }
                    break;
                case "evaLevel":
                    sc.modLevel("eva", 10, 7);
                    break;
                case "gameOver":
                    if (g.internal.lolaWine < 2)
                        daily.set("loladrunk");
                    if (g.internal.evaWine < 2)
                        daily.set("evadrunk");
                    char.settime(22, 7);
                    char.room(11);
                    //chat(24, 24);
                    break;
                default:
                    console.log(callback + " - miss");
                    break;
            }
        }
    }
};

room24.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "eva",
            text: "Since there's only three of us, I think we should add some stuff to make the game more interesting.",
            button: [
                { chatID: 1, text: "...", callback: "lolaTalk evaSit" }
            ]
        }, {
            chatID: 1,
            speaker: "lola",
            text: "How about you get to choose between drinking and kissing? ",
            button: [
                { chatID: 2, text: "...", callback: "evaTalk lolaSit" }
            ]
        },
        {
            chatID: 2,
            speaker: "eva",
            text: "Hmm, or how about... kiss, take a drink, or remove one piece of clothing? ",
            button: [
                { chatID: 3, text: "I'm in. ", callback: "lolaTalk evaSit" }
            ]
        },
        {
            chatID: 3,
            speaker: "lola",
            text: "Ok. I'm in too. Let's play! Since you brought the wine, you get to start!",
            button: [
                { chatID: -1, text: "...", callback: "lolaSit evaSit meSpin" }
            ]
        },
        {
            chatID: 4,
            speaker: "lola",
            text: "Oh my. It's getting a little warm in here. I think I'll lose this shirt! ",
            button: [
                { chatID: 6, text: "...", callback: "lolaTalk" }
            ]
        },
        {
            chatID: 5,
            speaker: "lola",
            text: "I guess " + sc.n("eva") + " can't be the only topless girl here!",
            button: [
                { chatID: 6, text: "...", callback: "lolaTalk" }
            ]
        },
        {
            chatID: 6,
            speaker: "lola",
            text: "I feel so free and wild!",
            button: [
                { chatID: -1, text: "..and hot!", callback: "picture" },
                { chatID: -1, text: "...", callback: "lolaSpin" },
            ]
        },
        {
            chatID: 7,
            speaker: "eva",
            text: "Hahaha He's staring so hard at your tits! You should take a picture so it lasts " +
                "longer! ",
            button: [
                { chatID: 8, text: "Wha!!! I can't help it! They're so there!", callback: "lolaTalk EvaSit" },
            ]
        },
        {
            chatID: 8,
            speaker: "lola",
            text: "Oh my. I guess that's ok, if it's JUST for you and you don't share it. ",
            button: [
                { chatID: -1, text: "oh. Really? Oh yeah. I won't share it with anyone!", callback: "lolaHeart" },
            ]
        },
        {
            chatID: 9,
            speaker: "eva",
            text: "Hahaha! He's totally going to jackin' it to that later! Spin the bottle so he " +
                "can see your jiggle! ",
            button: [
                { chatID: -1, text: "...", callback: "lolaSpin" },
            ]
        },
        {
            chatID: 10,
            speaker: "lola",
            text: "I'm just going to get a taste of this yummy wine! ",
            button: [
                { chatID: -1, text: "...", callback: "lolaSpin" },
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "I choose you! *mwah*",
            button: [
                { chatID: -1, text: "...", callback: "lolaSpin" },
            ]
        },
        {
            chatID: 12,
            speaker: "lola",
            text: "Pucker up! I want a big kiss on my lips! ",
            button: [
                { chatID: -1, text: "...", callback: "lolaSpin" },
            ]
        },
        {
            chatID: 13,
            speaker: "eva",
            text: "I can't let " + sc.n("lola") + " be the only wild one here! ",
            button: [
                { chatID: 14, text: "...", callback: "lolaTalk" }
            ]
        },
        {
            chatID: 14,
            speaker: "eva",
            text: "I know you want to see these you pervert! ",
            button: [
                { chatID: -1, text: "I do! you have great titties! ", callback: "evaLevel evaSpin" },
                { chatID: -1, text: "...", callback: "evaSpin" },
            ]
        },
        {
            chatID: 15,
            speaker: "eva",
            text: "You're such a prude " + sc.n("lola") + "! Look at my boobs! ",
            button: [
                { chatID: -1, text: "You do have great boobs! ", callback: "evaLevel evaSpin" },
                { chatID: -1, text: "...", callback: "evaSpin" },
            ]
        },
        {
            chatID: 16,
            speaker: "eva",
            text: "I guess I'll take a drink. ",
            button: [
                { chatID: -1, text: "...", callback: "evaSpin" },
            ]
        },
        {
            chatID: 17,
            speaker: "eva",
            text: "Nice! I get to make out with my favorite person in the world! ",
            button: [
                { chatID: -1, text: "...", callback: "evaSpin" },
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: "You go so luck! Pucker up for the best kiss of your life! ",
            button: [
                { chatID: -1, text: "*mwah*", callback: "evaSpin" },
            ]
        },
        {
            chatID: 19,
            speaker: "lola",
            text: "I feel so honored! *mwah*",
            button: [
                { chatID: -1, text: "*mwah*", callback: "lolaSpin" },
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "This is the only way you'll ever kiss a real girl! *mwah*",
            button: [
                { chatID: -1, text: "*mwah*", callback: "evaSpin" },
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "I'm so drunk, I don't think I can go on. I totally have to get to bed or " +
                "I'm going to fall asleep right here. I'm going to sleep so hard tonight. ",
            button: [
                { chatID: -1, text: "ok good night.", callback: "gameOver" },
            ]
        },
        {
            chatID: 22,
            speaker: "eva",
            text: "Oh wow! I'm so drunk. I'm going to bed and try to sleep this off or I'll collapse  " +
                "right here on the floor. ",
            button: [
                { chatID: -1, text: "ok good night.", callback: "gameOver" },
            ]
        },
        {
            chatID: 23,
            speaker: "eva",
            text: "Spin that bottle perv! ",
            button: [
                { chatID: -1, text: "Here goes!", callback: "lolaSit evaSit meSpin" },
            ]
        },
        {
            chatID: 24,
            speaker: "me",
            text: "Well, I've had fun, but I'm going to call it a night. Good night girls!  ",
            button: [
                { chatID: -1, text: "...", callback: "gameOver" },
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "Oh my! You uh... yeah. ",
            button: [
                { chatID: 26, text: "...", callback: "evaTalk lolaSit" },
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "Hahaha! She likes what she sees! Spin that bottle so we can see your puny " +
                "muscles in action. ",
            button: [
                { chatID: -1, text: "...", callback: "evaSit meSpin" },
            ]
        },
        {
            chatID: 27,
            speaker: "lola",
            text: "Oh. Is that a.... bra? Why are you wearing a bra?",
            button: [
                { chatID: 28, text: "Oh, huh?", callback: "evaTalk lolaSit" },
            ]
        },
        {
            chatID: 28,
            speaker: "eva",
            text: "Hahahahahaha! You're wearing a bra! You want to be a girl! Hahahaha!  ",
            button: [
                { chatID: 29, text: "No, It's not that... ", callback: "lolaTalk evaSit" },
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "Well that was a fun game. I think I'm getting tired. Let's go to sleep. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "gameOver" },
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "Drat. Landed on myself. ",
            button: [
                { chatID: -1, text: "... ", callback: "spinStop" },
            ]
        },
        {
            chatID: 31,
            speaker: "eva",
            text: "Oh good. I love me the best. ",
            button: [
                { chatID: -1, text: "... ", callback: "spinStop" },
            ]
        },
        {
            chatID: 32,
            speaker: "me",
            text: "Damn Landed on myself! ",
            button: [
                { chatID: -1, text: "...", callback: "spinStop" },
            ]
        },
    ];
    return cArray[chatID];
};
