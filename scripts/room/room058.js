//Room name
var room58 = {};
room58.main = function () {
    g.internal = {
        chat: new Array(),
        button: "main",
        viewers: 0,
        ticks: 0,
        excitement: 0,
        money: 0,
        currentpose: 0,
        maxviews: 0,
        fame: levels.get("fame").l
    };

    var btnList = [
        {
            "type": "img",
            "name": "name",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "58_camwhore/fg.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 58);
    });
    char.changeMenu("hide", false, true);

    if (!cl.naked())
        chat(0, 58);
    else
        room58.btnclick("sit");

    room58.btnclick("buttons");
    g.roomTimeout = setTimeout(function () { room58.gameloop(); }, 800);
};

room58.btnclick = function (name) {
    switch (name) {
        case "viewers":
            

            break;
        case "sit":
            g.internal.currentpose = 0;
            if (cl.c.chest < 2)
                nav.bg("58_camwhore/sit_1.jpg");
            else if (cl.c.chest < 4)
                nav.bg("58_camwhore/sit_2.jpg");
            else
                nav.bg("58_camwhore/sit_3.jpg");
            break;
        case "butthole":
            g.internal.currentpose = 2;
            nav.bg("58_camwhore/butthole.jpg");
            break;
        case "dildo":
            g.internal.currentpose = 3;
            var dchast = cl.c.chastity === null ? "" : "_c";
            if (cl.c.chest < 2)
                nav.bg("58_camwhore/dildo_0" + dchast + ".jpg");
            else
                nav.bg("58_camwhore/dildo_1" + dchast + ".jpg");
            break;
        case "dildocum":
            g.internal.currentpose = 4;
            var dchast1 = cl.c.chastity === null ? "" : "_c";
            if (cl.c.chest < 2)
                nav.bg("58_camwhore/dildocum_0" + dchast1 + ".jpg");
            else
                nav.bg("58_camwhore/dildocum_1" + dchast1 + ".jpg");
            break;
        case "strokecock":
            g.internal.currentpose = 1;
            if (cl.c.chastity === null) {
                if (cl.c.chest < 2)
                    nav.bg("58_camwhore/strokecock_0.jpg");
                else
                    nav.bg("58_camwhore/strokecock_1.jpg");
            }
            else {
                if (cl.c.chest < 2)
                    nav.bg("58_camwhore/vibratecock_0.jpg");
                else
                    nav.bg("58_camwhore/vibratecock_1.jpg");
            }
            break;
        case "strokecum":
            g.internal.currentpose = 4;
            if (cl.c.chastity === null) {
                if (cl.c.chest < 2)
                    nav.bg("58_camwhore/strokecum_0.jpg");
                else
                    nav.bg("58_camwhore/strokecum_1.jpg");
            }
            else {
                if (cl.c.chest < 2)
                    nav.bg("58_camwhore/vibratecum_0.jpg");
                else
                    nav.bg("58_camwhore/vibratecum_1.jpg");
            }
            break;
        case "suck":
            g.internal.currentpose = 2;
            if (cl.c.chest === 2)
                nav.bg("58_camwhore/bj_2.jpg");
            else if (cl.c.chest < 2)
                nav.bg("58_camwhore/bj_0.jpg");
            else
                nav.bg("58_camwhore/bj_1.jpg");
            break;
        case "buttons":
            var butList = new Array();
            nav.killbuttonStartsWith("icon_");
            if (g.internal.button === "main")
                butList = [
                    { img: "button_show.png", txt: "icon_show" },
                    { img: "button_chat.png", txt: "icon_chat" },
                    { img: "button_wait.png", txt: "icon_wait" },
                    { img: "button_quit.png", txt: "icon_quit" },
                ];
            else if (g.internal.button === "chat") {
                butList = [
                    { img: "button_chat_tips.png", txt: "icon_chattips" },
                    { img: "button_chat_flirt.png", txt: "icon_chatflirt" },
                    { img: "button_chat_insult.png", txt: "icon_chatInsult" },
                    { img: "button_back.png", txt: "icon_main" },
                ];
            }
            else if (g.internal.button === "show") {
                butList = [
                    { img: "button_show_butthole.png", txt: "icon_showbutthole" },
                    { img: (cl.c.chastity === null ? "button_show_strokecock.png" : "button_show_vibratecock.png"), txt: "icon_strokecock" },
                    { img: "button_show_suck.png", txt: "icon_showsuck" },
                    { img: "button_showdildo0.png", txt: "icon_showdildo" },
                    { img: "button_back.png", txt: "icon_main" }
                ];
            }
            else if (g.internal.button === "keepdildo") {
                butList = [
                    { img: "button_showdildo1.png", txt: "icon_showdildo" },
                    { img: "button_show_cum.png", txt: "icon_shoedildocum" },
                    { img: "button_back.png", txt: "icon_main" }
                ];
            }
            else if (g.internal.button === "keepdildocum") {
                butList = [
                    { img: "button_show_cum.png", txt: "icon_shoedildocum" },
                ];
            }
            else if (g.internal.button === "keepstroking") {
                butList = [
                    { img: (cl.c.chastity === null ? "button_show_strokecock_2.png" : "button_show_vibratecock_2.png"), txt: "icon_strokecock" },
                    { img: "button_show_cum.png", txt: "icon_strokecum" },
                    { img: "button_back.png", txt: "icon_main" }
                ];
            }
            else if (g.internal.button === "strokecum") {
                butList = [
                    { img: "button_show_cum.png", txt: "icon_strokecum" },
                ];
            }
            else if (g.internal.button === "quit") {
                butList = [
                    { img: "button_quit.png", txt: "icon_quit" },
                ];
            }

            for (let i = 0; i < butList.length; i++) {
                nav.button({
                    "type": "btn",
                    "name": butList[i].txt,
                    "left": 580 + ((i % 4) * 320),
                    "top": 820 + (Math.floor(i / 4) * 86),
                    "width": 300,
                    "height": 72,
                    "image": "58_camwhore/" + butList[i].img
                }, 58);
            }
            break;
        case "icon_quit":
            clearTimeout(g.roomTimeout);
            gv.mod("money", g.internal.money);
            gv.mod("xdress", 15);
            var maxfame = Math.ceil(g.internal.maxviews / 20);
            if (maxfame > 40)
                maxfame = 40;
            levels.mod("fame", maxfame);
            char.room(57);
            break;
        case "icon_wait":
            room58.btnclick("sit");
            g.internal.excitement -= 1;
            gv.mod("energy", -2);
            g.internal.prev = "wait";
            break;
        case "icon_chat":
            g.internal.button = "chat";
            room58.btnclick("buttons");
            break;
        case "icon_chattips":
            g.internal.ticks = 0;
            room58.btnclick("sit");
            room58.sidechat("tips");
            g.internal.button = "main";
            room58.btnclick("buttons");
            break;
        case "icon_chatflirt":
            g.internal.ticks = 0;
            room58.btnclick("sit");
            room58.sidechat("flirt");
            g.internal.button = "main";
            room58.btnclick("buttons");
            break;
        case "icon_chatInsult":
            g.internal.ticks = 0;
            room58.btnclick("sit");
            room58.sidechat("insult");
            g.internal.button = "main";
            room58.btnclick("buttons");
            break;
        case "icon_main":
            g.internal.button = "main";
            room58.btnclick("buttons");
            break;
        case "icon_show":
            g.internal.button = "show";
            room58.btnclick("buttons");
            break;
        case "icon_showdildo":
            g.internal.ticks = 0;
            gv.mod("arousal", 20);
            room58.btnclick("dildo");
            g.internal.excitement += 1;
            gv.mod("energy", -10);
            if (gv.get("arousal") > 95) {
                g.internal.button = "keepdildocum";
            }
            else {
                g.internal.button = "keepdildo";
            }
            room58.btnclick("buttons");
            break;
        case "icon_shoedildocum":
            g.internal.ticks = 0;
            room58.btnclick("dildocum");
            g.internal.excitement += 4;
            gv.mod("energy", -15);
            levels.anal(3, true);
            g.internal.button = "quit";
            room58.btnclick("buttons");
            break;
        case "icon_showsuck":
            g.internal.ticks = 0;
            gv.mod("arousal", 5);
            room58.btnclick("suck");
            g.internal.excitement += 1;
            gv.mod("energy", -4);
            g.internal.button = "main";
            room58.btnclick("buttons");
            break;
        case "icon_showbutthole":
            g.internal.ticks = 0;
            gv.mod("arousal", 5);
            room58.btnclick("butthole");
            g.internal.excitement += 1;
            gv.mod("energy", -4);
            g.internal.button = "main";
            room58.btnclick("buttons");
            break;
        case "icon_strokecock":
            g.internal.ticks = 0;
            gv.mod("arousal", 25);
            room58.btnclick("strokecock");
            g.internal.excitement += 2;
            gv.mod("energy", -10);
            if (gv.get("arousal") > 95) {
                g.internal.button = "strokecum";
            }
            else {
                g.internal.button = "keepstroking";
            }
            room58.btnclick("buttons");
            break;
        case "icon_strokecum":
            g.internal.ticks = 0;
            gv.mod("arousal", 25);
            room58.btnclick("strokecum");
            g.internal.excitement += 4;
            gv.mod("energy", -15);
            cl.doCum(false);
            stats.mod("masturbate", "dick", 1);
            g.internal.button = "quit";
            room58.btnclick("buttons");
            break;
        default:
            break;
    }
};

room58.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(55);
            break;
        case "strip":
            room58.btnclick("sit");
            cl.nude();
            break;
        default:
            break;
    }
};

room58.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I should be naked if I want to attract people. ",
            button: [
                { chatID: -1, text: "[Strip]", callback: "strip" },
                { chatID: -1, text: "I don't feel like camming now.", callback: "leave" },
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

room58.gameloop = function () {
    let fame = levels.get("fame").l;
    g.internal.ticks++;

    if (g.internal.ticks > 36) {
        g.internal.viewers += g.rand(-4, 0);
    }
    else if (g.internal.ticks > 12) {
        if (g.internal.currentpose === 4) {
            g.internal.viewers += g.rand(-12, -1);
        }
        else if (g.internal.ticks % 4 === 0) {
            if (g.internal.currentpose === 0) {
                g.internal.viewers += g.rand(-4, 2);
            }
            else {
                g.internal.viewers += g.rand(-4, 4);
            }
            if (g.rand(0, 3) === 0)
                room58.sidechat(null);
        }
    }
    else {
        g.internal.viewers += g.rand(-1, g.internal.currentpose + fame);
        if (g.internal.ticks < 6 && g.internal.ticks % 2 === 0) {
            room58.sidechat(null);
        }
        else if (g.internal.ticks % 2 === 0 && g.rand(0, 3) === 0) {
            room58.sidechat(null);
        }

        if (g.internal.viewers > 1 && g.internal.ticks % 3 === 0) {
            g.internal.money += Math.ceil((g.internal.viewers * (fame + g.internal.excitement + g.internal.currentpose)) / g.rand(50, 200));
        }
    }

    if (g.internal.viewers < 0)
        g.internal.viewers = 0;

    if (g.internal.viewers > g.internal.maxviews)
        g.internal.maxviews = g.internal.viewers;

    nav.killbutton("viewers");
    nav.t({
        type: "zimg",
        name: "viewers",
        left: 580,
        top: 1000,
        font: 40,
        hex: "#ffffff",
        text: "Viewers: " + g.internal.viewers + ". Tips $" + g.internal.money
    }, 58);

    g.roomTimeout = setTimeout(function () { room58.gameloop(); }, 800);
};

room58.sidechat = function (metalk) {
    let thisChat;
    let flirtChat;
    let sidechat = [
        { user: "shakey998", txt: "Hey beautiful", hex: "#0a457d" },
        { user: "XXKillstreakXX", txt: "Hi pretty girl", hex: "#05193b" },
        { user: "XXKillstreakXX", txt: "You're all lossers! ", hex: "#05193b" },
        { user: "tylie", txt: "Who's a naughty girl!", hex: "#6c2287" },
        { user: "Jim", txt: "So hot damn I love stroking it <3", hex: "#0d915a" },
        { user: "Daddy", txt: "Lol, that's what naughty DADDY'S do.", hex: "#13914a" },
        { user: "Jesus", txt: "hola niña bonita ", hex: "#6476ed" },
        { user: "Daddy6969", txt: "Show me your butt hole! ", hex: "#e33419" },
        { user: "Hornydad69", txt: "Love those nipples", hex: "#d9d21a" },
        { user: "XXxGamerBxXX", txt: "Play with your pee pee", hex: "#5448a1" },
        { user: "sharky-59564", txt: "Dance for us slut! ", hex: "#302e3b" },
        { user: "LilFucker4206969", txt: "I want to be balls deep in you", hex: "#ff3300" },
        { user: "Twekle98", txt: "Shake that ass! Shake for daddy ", hex: "#34e5eb" },
        { user: "TitsMcGee", txt: "Spread your legs. Show Daddy that pussy", hex: "#e39e1e" },
        { user: "Roxy420", txt: "Daddy like", hex: "#8a8346" },
        { user: "DirtyDaddy69", txt: "I need a daughter like you", hex: "#22633e" },
        { user: "HighTower894", txt: "You look like this ho I know", hex: "#1a1701" },
        { user: "BigDick420", txt: "Hot I'm rubbin my cock", hex: "#a12336" },
        { user: "Grandpa", txt: "you like older men? I like you :)", hex: "#4a515e" },
        { user: "Grandpa", txt: "I want to put you over my lap bby girl", hex: "#4a515e" },
        { user: "Pisslover", txt: "Drink your piss! I wanna see you pee", hex: "#d3d622" },
        { user: "AssLicker", txt: "Spread your butthole! Show me that starfish", hex: "#a33329" },
        { user: "Sissy69", txt: "I love your look", hex: "#df70e0" },
        { user: "Sissy69", txt: "Play with your cock bby", hex: "#df70e0" },
        { user: "CallMeDaddy", txt: "I'm going to suck that clitty", hex: "#910d12" },
        { user: "CallMeDaddy", txt: "I want to fuck you so bad lil girl", hex: "#910d12" },
        { user: "CallMeDaddy", txt: "Put on a show for daddy", hex: "#910d12" },
        { user: "GreyHairs", txt: "Yuck! Not enough hair! ", hex: "#4a5e5d" },
        { user: "XXyoungbloodXX", txt: "I think I'm in love", hex: "#475b73" },
        { user: "XXyoungbloodXX", txt: "You dirty fucking whore", hex: "#475b73" },
        { user: "XXyoungbloodXX", txt: "I want to spit on your asshole", hex: "#475b73" },
        { user: "AssLicker", txt: "MMmmmm so lickable", hex: "#a33329" },
        { user: "Grandpa", txt: "🍆🍑💦 I want you! ", hex: "#4a515e" },
        { user: "Grandpa", txt: "🥵 ❤️❤️❤️ I'm in love! ", hex: "#4a515e" },
        { user: "Grandpa", txt: "🍌 I'm gunna stuff your face ", hex: "#4a515e" },
        { user: "BigDick420", txt: "💕 I'm going to wife you", hex: "#a12336" },
        { user: "sharky-59564", txt: "🥪 Get back to the kitchen! hehe", hex: "#302e3b" },
        { user: "Twekle98", txt: "I so want to fuck your ass!", hex: "#34e5eb" },
        { user: "Jim", txt: "I'm cumming! Fuck you're hot!", hex: "#0d915a" },
        { user: "Daddy", txt: "Show daddy your cum hole bby girl", hex: "#13914a" },
        { user: "LilFucker4206969", txt: "I'm going to fist rape you", hex: "#ff3300" },
        { user: "LilFucker4206969", txt: "I'm going to make you my rape slave", hex: "#ff3300" },
        { user: "XXyoungbloodXX", txt: "Marry me baby", hex: "#475b73" },
        { user: "CallMeDaddy", txt: "Perfect ass for spanking.", hex: "#910d12" },
        { user: "Romeo", txt: "My heart has found it's match", hex: "#1aba45" },
        { user: "Romeo", txt: "Marry me, please!!!!", hex: "#1aba45" },
        { user: "Romeo", txt: "❤️🧡💛💚💙💜", hex: "#1aba45" },
        { user: "Romeo", txt: "🥰🔥🔥🥰 My passion is you", hex: "#1aba45" },
    ];

    if (metalk === "tips") {
        g.internal.viewers -= Math.floor(Math.random() * 5);
        if (g.internal.excitement > 7 && g.internal.viewers > 10) {
            g.internal.excitement -= 2;
            g.internal.chat.push({ user: sc.n("me"), txt: "Anyone wanna give me some tips? ", hex: "#f587af" });
            g.internal.chat.push({ user: "DirtyDaddy", txt: "Anything for you bby girl!", hex: "#1900ff" });
            g.internal.money += g.rand(4, 12);
        }
        else if (g.internal.viewers > 5) {
            g.internal.excitement -= 2;
            g.internal.chat.push({ user: sc.n("me"), txt: "Anyone wanna give me some tips? ", hex: "#f587af" });
            g.internal.chat.push({ user: "XX_assFUCKER69_XX", txt: "No! Show us your butthole! ", hex: "#1900ff" });
        }
        else {
            g.internal.excitement -= 2;
            g.internal.chat.push({ user: sc.n("me"), txt: "Anyone wanna give me some tips? ", hex: "#f587af" });
            g.internal.chat.push({ user: sc.n("me"), txt: "Anyone? ", hex: "#f587af" });
        }
    }
    else if (metalk === "flirt") {
        if (g.internal.chat.length > 2) {
            thisChat = g.internal.chat[g.internal.chat.length - 1];
            if (thisChat.user !== sc.n("me")) {
                g.internal.viewers -= g.rand(0, 4);
                g.internal.excitement += .5;
                flirtChat = [
                    { user: sc.n("me"), txt: "Fuck me hard " + thisChat.user + "!", hex: "#f587af" },
                    { user: sc.n("me"), txt: "I want to sit on your dick " + thisChat.user, hex: "#f587af" },
                    { user: sc.n("me"), txt: thisChat.user + ", pound my sissy hole! ", hex: "#f587af" },
                    { user: sc.n("me"), txt: "I need your tongue in me " + thisChat.user, hex: "#f587af" },
                ]
                g.internal.chat.push(flirtChat[g.rand(0, flirtChat.length)]);
            }
            else {
                g.internal.viewers -= g.rand(0, 4);
                flirtChat = [
                    { user: sc.n("me"), txt: "I need a dick inside me!", hex: "#f587af" },
                    { user: sc.n("me"), txt: "Bend me over and spank my ass", hex: "#f587af" },
                    { user: sc.n("me"), txt: "I'm so horny", hex: "#f587af" },
                    { user: sc.n("me"), txt: "Anyone want to fuck me?", hex: "#f587af" },
                ]
                g.internal.chat.push(flirtChat[g.rand(0, flirtChat.length)]);
            }
        }
        else {
            g.internal.viewers -= g.rand(0, 4);
            flirtChat = [
                { user: sc.n("me"), txt: "I need a dick inside me!", hex: "#f587af" },
                { user: sc.n("me"), txt: "Bend me over and spank my ass", hex: "#f587af" },
                { user: sc.n("me"), txt: "I'm so horny", hex: "#f587af" },
                { user: sc.n("me"), txt: "Anyone want to fuck me?", hex: "#f587af" },
            ]
            g.internal.chat.push(flirtChat[g.rand(0, flirtChat.length)]);
        }
    }
    else if (metalk === "insult") {
        if (g.internal.chat.length > 2) {
            thisChat = g.internal.chat[g.internal.chat.length - 1];
            if (thisChat.user !== sc.n("me")) {
                g.internal.viewers -= g.rand(0, 4);
                g.internal.excitement += .5;
                flirtChat = [
                    { user: sc.n("me"), txt: "You have a tiny pp " + thisChat.user + "!", hex: "#f587af" },
                    { user: sc.n("me"), txt: "Go fuck yourself " + thisChat.user, hex: "#f587af" },
                    { user: sc.n("me"), txt: thisChat.user + ", is a little bitch ", hex: "#f587af" },
                    { user: sc.n("me"), txt: "I'm going to crush your balls " + thisChat.user, hex: "#f587af" },
                ]
                g.internal.chat.push(flirtChat[g.rand(0, flirtChat.length)]);
            }
            else {
                g.internal.viewers -= g.rand(1, 4);
                g.internal.excitement += .5;
                flirtChat = [
                    { user: sc.n("me"), txt: "You're all bitches", hex: "#f587af" },
                    { user: sc.n("me"), txt: "I hate you guys", hex: "#f587af" },
                    { user: sc.n("me"), txt: "Everyone shut up!", hex: "#f587af" },
                    { user: sc.n("me"), txt: "Go fuck yourselves", hex: "#f587af" },
                ]
                g.internal.chat.push(flirtChat[g.rand(0, flirtChat.length)]);
            }
        }
        else {
            g.internal.viewers -= g.rand(1, 4);
            g.internal.excitement += .5;
            flirtChat = [
                { user: sc.n("me"), txt: "You're all bitches", hex: "#f587af" },
                { user: sc.n("me"), txt: "I hate you guys", hex: "#f587af" },
                { user: sc.n("me"), txt: "Everyone shut up!", hex: "#f587af" },
                { user: sc.n("me"), txt: "Go fuck yourselves", hex: "#f587af" },
            ]
            g.internal.chat.push(flirtChat[g.rand(0, flirtChat.length)]);
        }
    }
    if (metalk === null && g.internal.viewers > 3) {
        g.internal.chat.push(sidechat[g.rand(0, sidechat.length)]);
    }

    if (g.internal.chat.length > 12)
        g.internal.chat.splice(0, g.internal.chat.length - 12);
    nav.killbutton("sidechat");
    for (let i = 0; i < g.internal.chat.length; i++) {
        nav.t({
            type: "zimg",
            name: "sidechat",
            left: 80,
            top: 100 + (i * 70),
            font: 24,
            hex: g.internal.chat[i].hex,
            text: g.internal.chat[i].user
        }, 58);
        nav.t({
            type: "zimg",
            name: "sidechat",
            left: 80,
            top: 134 + (i * 70),
            font: 20,
            hex: "#000000",
            text: g.internal.chat[i].txt
        }, 58);
    }
}