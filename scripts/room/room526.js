//Room name
var room526 = {};
room526.main = function () {
    var btnList = [{
        "type": "btn",
        "name": "zoey",
        "left": 1581,
        "top": 359,
        "width": 146,
        "height": 294,
        "image": "526_bar/zoey.jpg"
    }];

    if (g.rand(0, 4) === 0) {
        if (sc.getMissionTask("holly", "bar", 0).notStarted) {
            btnList.push({
                "type": "btn",
                "name": "h1",
                "left": 0,
                "top": 191,
                "width": 627,
                "height": 889,
                "image": "526_bar/h1.png"
            });
        }
    }
    else {
        if (!daily.get("orchid")) {
            btnList.push({
                "type": "btn",
                "name": "g1",
                "left": 0,
                "top": 259,
                "width": 509,
                "height": 821,
                "image": "526_bar/g1.png"
            });
        }
    }

    var mid = g.rand(0, 4);
    if (mid > 1 || !daily.get("keaton")) {
        btnList.push({
            "type": "btn",
            "name": "m" + mid,
            "left": 735,
            "top": 316,
            "width": 585,
            "height": 764,
            "image": "526_bar/m" + mid + ".png"
        });
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 526);
    });

    nav.buildnav([527, 0]);
};

room526.btnclick = function (name) {
    switch (name) {
        case "g1":
            nav.killall();
            nav.bg("526_bar/g2.jpg");
            if (sc.getMission("orchid", "slut").notStarted) {
                sc.startMission("orchid", "slut");
                sc.completeMissionTask("orchid", "slut", 0);
                sc.show("orchid");
                chat(0, 526);
            }
            else
                chat(-1, 526);
            break;
        case "h1":
            nav.killall();
            nav.bg("526_bar/h2.jpg");
            chat(8, 526);
            break;
        case "m0":
            nav.killall();
            nav.bg("526_bar/m0_1.jpg");
            daily.set("keaton");
            chat(13, 526);
            break;
        case "m1":

            break;
        case "m2":

            break;
        case "m3":

            break;
        //case "group2":
        //    nav.killbutton("group2");
        //    nav.bg("526_bar/group3.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "group3",
        //        "left": 1120,
        //        "top": 407,
        //        "width": 266,
        //        "height": 266,
        //        "image": "526_bar/group3.png"
        //    }, 526);
        //    break;
        //case "group3":
        //    nav.killbutton("group3");
        //    nav.bg("526_bar/group4.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "group4",
        //        "left": 1120,
        //        "top": 407,
        //        "width": 266,
        //        "height": 266,
        //        "image": "526_bar/group4.png"
        //    }, 526);
        //    break;
        //case "group4":
        //    nav.killbutton("group4");
        //    nav.bg("526_bar/group5.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "group5",
        //        "left": 1120,
        //        "top": 407,
        //        "width": 266,
        //        "height": 266,
        //        "image": "526_bar/group5.png"
        //    }, 526);
        //    chat(8, 526);
        //    break;
        //case "zoey":
        //    nav.killall();
        //    nav.bg("526_bar/bgclose.jpg");
        //    if (!daily.get("keaton")) {
        //        nav.button({
        //            "type": "btn",
        //            "name": "keaton0",
        //            "left": 731,
        //            "top": 408,
        //            "width": 184,
        //            "height": 672,
        //            "image": "526_bar/keaton0.png"
        //        }, 526);
        //    }
        //    nav.button({
        //        "type": "btn",
        //        "name": "close",
        //        "left": 1222,
        //        "top": 374,
        //        "width": 194,
        //        "height": 290,
        //        "image": "526_bar/close.png"
        //    }, 526);
        //    nav.buildnav([526, 0]);
        //    break;
        //case "close":
        //    var zoeyStep = sc.getstep("zoey");
        //    if (!sc.getEvent("zoey", -3)) {
        //        sc.setstep("zoey", -3);
        //        chat(16, 526);
        //    }
        //    else if (zoeyStep < 300) {
        //        chat(36, 526);
        //    }
        //    else {
        //        chat(35, 526);
        //    }
        //    break;
        //case "g1":
        //        chat(19, 526);
        //    break;
        //case "g1_big2":
        //    if (g.internal < 6) {
        //        nav.bg("526_bar/g1_big" + g.internal + ".jpg");
        //        g.internal++;
        //    }
        //    else {
        //        nav.killbutton("g1_big2");
        //        gv.mod("giveOralMale", 1);
        //        zcl.displayMain(-200, 1000, .25, "clothes", true);
        //        nav.bg("526_bar/g1_big6.jpg");
        //        chat(25, 526);
        //    }
        //    break;
        //case "g1_smol2":
        //    nav.bg("526_bar/g1_smol" + g.internal + ".jpg");
        //    if (g.internal < 5) {
        //        g.internal++;
        //    }
        //    else {
        //        nav.killbutton("g1_smol2");
        //        gv.mod("receiveAnalMale", 1);
        //        chat(30, 526);
        //    }
        //    break;
        //case "z13":
        //    nav.killall();
        //    nav.bg("526_bar/z13_2.jpg");
        //    nav.button({
        //        "type": "tongue",
        //        "name": "z131",
        //        "left": 874,
        //        "top": 461,
        //        "width": 114,
        //        "height": 295,
        //        "image": "526_bar/z13_2click.png"
        //    }, 526);
        //    break;
        //case "z131":
        //    nav.killall();
        //    nav.bg("526_bar/z13_3.jpg");
        //    chat(47, 526);
        //    break;
        //case "keaton0":
        //    nav.killbutton("keaton0");
        //    nav.button({
        //        "type": "btn",
        //        "name": "keaton1",
        //        "left": 623,
        //        "top": 107,
        //        "width": 428,
        //        "height": 973,
        //        "image": "526_bar/keaton1.png"
        //    }, 526);
        //    if (sc.getstep("keaton") === 0) {
        //        sc.setstep("keaton", 1);
        //        chat(54, 526);
        //    }
        //    else {
        //        chat(64, 526);
        //    }
        //    break;
        //case "k03":
        //    if (g.internal < 6)
        //        nav.bg("526_bar/k0" + g.internal + ".jpg");
        //    else if (g.internal > 10) {
        //        nav.bg("526_bar/k03.jpg");
        //        nav.killall();
        //        chat(62, 526);
        //    }
        //    else
        //        nav.bg("526_bar/k0" + ((g.internal % 2) + 6) + ".jpg");
        //    g.internal++;
        //    break;
        default:
            break;
    }
};

room526.chatcatch = function (callback) {
    switch (callback) {
        case "hollyGood":
            sc.completeMissionTask("holly", "bar", 0, true);
            sc.modLevel("holly", 100, 1);
            sc.modLevel("molly", 100, 1);
            sc.modLevel("dolly", 100, 1);
            char.room(526);
            break;
        case "hollyBad":
            sc.completeMissionTask("holly", "bar", 0, true);
            char.room(526);
            break;
        case "reset":
            char.room(526);
            break;
        //case "checkCock":
        //    if (cl.c.chastity !== null)
        //        chat(5, 526);
        //    else if (cl.c.cock > 2)
        //        chat(6, 526);
        //    else {
        //        nav.killall();
        //        nav.bg("526_bar/group2.jpg");
        //        nav.button({
        //            "type": "btn",
        //            "name": "group2",
        //            "left": 1127,
        //            "top": 553,
        //            "width": 285,
        //            "height": 285,
        //            "image": "526_bar/group2.png"
        //        }, 526);
        //    }
        //    break;
        //case "group6":
        //    nav.killbutton("group5");
        //    nav.bg("526_bar/group6.jpg");
        //    break;
        //case "group7":
        //    nav.bg("526_bar/group7.jpg");
        //    cl.doCum(false);
        //    gv.mod("giveAnalMale", 1);
        //    break;
        //case "group8":
        //    nav.bg("526_bar/group8.jpg");
        //    zcl.displayMain(-100, 600, .23, "clothes", true);
        //    nav.button({
        //        "type": "img",
        //        "name": "group8",
        //        "left": 1140,
        //        "top": 0,
        //        "width": 743,
        //        "height": 1080,
        //        "image": "526_bar/group8.png"
        //    }, 526);
        //    break;
        //case "group9":
        //    nav.killbutton("group8");
        //    scc.love("zoey", -5, 80);
        //    zcl.displayMain(-100, 600, .23, "clothes", false);
        //    nav.button({
        //        "type": "img",
        //        "name": "group8",
        //        "left": 1140,
        //        "top": 0,
        //        "width": 743,
        //        "height": 1080,
        //        "image": "526_bar/group8.png"
        //    }, 526);
        //    break;
        //case "seeZoey":
        //    room526.btnclick("zoey");
        //    room526.btnclick("close");
        //    break;
        //case "killem":
        //    nav.killbutton("g1");
        //    break;
        //case "g1_1":
        //    nav.killall();
        //    char.changeMenu("hide", false, true);
        //    if (cl.c.chastity !== null) {
        //        nav.bg("526_bar/g1_chastity.jpg");
        //        chat(27, 526);
        //    }
        //    else if (cl.c.cock < 2) {
        //        nav.bg("526_bar/g1_big.jpg");
        //        chat(21, 526);
        //    }
        //    else {
        //        nav.bg("526_bar/g1_smol.jpg");
        //        chat(34, 526);
        //    }
        //    break;
        //case "g1_big1":
        //    nav.bg("526_bar/g1_big1.jpg");
        //    break;
        //case "g1_big2":
        //    g.internal = 3;
        //    nav.bg("526_bar/g1_big2.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "g1_big2",
        //        "left": 1687,
        //        "top": 615,
        //        "width": 233,
        //        "height": 150,
        //        "image": "526_bar/arrowRight.png"
        //    }, 526);
        //    break;
        //case "g1_small1":
        //    nav.killall();
        //    g.internal = 2;
        //    nav.bg("526_bar/g1_smol1.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "g1_smol2",
        //        "left": 1687,
        //        "top": 615,
        //        "width": 233,
        //        "height": 150,
        //        "image": "526_bar/arrowRight.png"
        //    }, 526);
        //    break;
        //case "g1_end":
        //    sc.setstep("poppy", 2);
        //    daily.set("zbar");
        //    char.addtime(75);
        //    char.room(526);
        //    break;
        //case "g1_small2":
        //    nav.bg("526_bar/bg.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "juniper",
        //        "left": 1055,
        //        "top": 0,
        //        "width": 460,
        //        "height": 1080,
        //        "image": "526_bar/juniper.png"
        //    }, 256);
        //    break;
        //case "wash":
        //    nav.killall();
        //    nav.bg("526_bar/wash.jpg");
        //    break;
        //case "wash1":
        //    scc.love("zoey", 10, 100);
        //    var zoeyy = sc.getstep("zoey");
        //    if (g.gethourdecimal() > 12) {
        //        g.dt.setDate(g.dt.getDate() + 1);
        //    }
        //    char.settime(2, 30);
        //    nav.killall();
        //    nav.bg("526_bar/bgclose.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "close",
        //        "left": 1222,
        //        "top": 374,
        //        "width": 194,
        //        "height": 290,
        //        "image": "526_bar/close.png"
        //    }, 526);
        //    if (scc.get("zoey").love > 80 && zoeyy === 11) {
        //        nav.killall();
        //        nav.bg("526_bar/z1.jpg");
        //        chat(40, 526);
        //    }
        //    else if (zoeyy === 13) {
        //        nav.killall();
        //        nav.bg("526_bar/z1.jpg");
        //        chat(45, 526);
        //    }
        //    else {
        //        chat(39, 526);
        //    }
        //    break;
        //case "checkHouse":
        //    var hashc = inv.has("handcuff");
        //    var hasc = cl.c.chastity !== null;
        //    if (hashc && hasc) {
        //        chat(43, 526);
        //    }
        //    else {
        //        chat(44, 526);
        //    }
        //    break;
        //case "gotohouse":
        //    sc.setstep("zoey", 12);
        //    char.room(502);
        //    break;
        //case "z13_1":
        //    nav.killall();
        //    nav.button({
        //        "type": "tongue",
        //        "name": "z13",
        //        "left": 889,
        //        "top": 707,
        //        "width": 200,
        //        "height": 200,
        //        "image": "526_bar/z13_1click.jpg"
        //    }, 526);
        //    nav.bg("526_bar/z13_1.jpg");
        //    break;
        //case "z13_4":
        //    nav.bg("526_bar/z13_4.jpg");
        //    break;
        //case "z13_5":
        //    nav.killall();
        //    sc.setstep("zoey", 14);
        //    scc.love("zoey", 100, 100);
        //    nav.bg("502_bedroom/sleepZoey.jpg");
        //    g.pass = 502;
        //    g.roomTimeout = setTimeout(function () {
        //        char.room(28);
        //    }, 500);
        //    break;
        //case "k01":
        //    nav.killall();
        //    nav.bg("526_bar/k01.jpg");
        //    break;
        //case "k02":
        //    nav.killall();
        //    if (cl.c.chastity !== null)
        //        chat(58, 526);
        //    else if (cl.c.cock > 2) {
        //        nav.bg("526_bar/k02s.jpg");
        //        chat(59, 526);
        //    }
        //    else {
        //        nav.bg("526_bar/k02.jpg");
        //        chat(60, 526);
        //    }
        //    break;
        //case "k03":
        //    nav.bg("526_bar/k03.jpg");
        //    g.internal = 4;
        //    nav.button({
        //        "type": "btn",
        //        "name": "k03",
        //        "left": 1687,
        //        "top": 615,
        //        "width": 233,
        //        "height": 150,
        //        "image": "526_bar/arrowRight.png"
        //    }, 526);
        //    break;
        //case "k08":
        //    nav.bg("526_bar/k08.jpg");
        //    break;
        //case "k09":
        //    gv.mod("giveAnalMale", 1);
        //    gv.mod("giveOralMale", 1);
        //    daily.set("keaton");
        //    cl.doCum(false);
        //    char.room(526);
        //    break;
        //case "kno":
        //    if (q3.activeSearch("keaton")) {
        //        chat(65, 526);
        //    }
        //    else {
        //        daily.set("keaton");
        //        char.room(526);
        //    }
        //    break;
        //case "kno0":
        //    nav.killall();
        //    nav.bg("526_bar/kno0.jpg");
        //    zcl.displayMain(-400, 250, .6, "clothes", true);
        //    break;
        //case "kno1":
        //    g.roomMapAccess(535, true, false);
        //    sc.setstep("keaton", 2);
        //    daily.set("keaton");
        //    char.room(526);
        //    break;
        //case "knoreset":
        //    daily.set("keaton");
        //    char.room(526);
        //    break;
        //case "leave":
        //    char.room(0);
        //    break;
        //case "reset":
        //    char.room(526);
        //    break;
        default:
            break;
    }
};

room526.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "orchid",
            text: "Oh... hello. We wern't expecting any new girls here! ",
            button: [
                { chatID: 1, text: "*GULP*", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!poppy",
            text: "Oh is there someone new here! Who is it! ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!juniper",
            text: "Yes, what's your name? ",
            button: [
                { chatID: 3, text: "I'm " + sc.n("me") + ". ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!poppy",
            text: "OOooo that's such a pretty name. Do you have a pretty cock? We were about to " +
                "bend Orchid over the table and fill her with our cocks. She lost the smallest " +
                "cock game again. ",
            button: [
                { chatID: 4, text: "Smallest cock game?", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!juniper",
            text: "Oh sweet summer child. We each pull out our cocks and who ever has the smallest " +
                "cock gets fucked by the bigger, superior cocks. Orchid always loses, I think she " +
                "does it on purpose.  ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "orchid",
            text: "What! I do try! I can't get it any bigger! You have no idea how hard I strain to " +
                "make my cock bigger! I love getting fucked, but just once I would love to do the " +
                "fucking! You know I'm a top! ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!poppy",
            text: "Well, you know you're just going to lose again, unless... New girl, do you want to " +
                "play the smallest cock game? Loser gets fucked, no backing out. ",
            button: [
                { chatID: 7, text: "I'm in!", callback: "" },
                { chatID: -1, text: "Maybe some other time. ", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "!juniper",
            text: "Ok new girl, let's see each other's cocks! ",
            button: [
                { chatID: -1, text: "Compare dicks with the girls", callback: "g3" },
            ]
        },
        {
            chatID: 8,
            speaker: "holly",
            text: "Oh hi there. What's up? ",
            button: [
                { chatID: 9, text: "What are you beautiful ladies doing here? ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "molly",
            text: "Ugh. We tried going to the club, but there's too many dudes trying to fuck " +
                "us, so we drink at the gay bar to get away from being hit on every five minutes. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "dolly",
            text: "Heck yeah sugar! Them guys keep pervin' on us lil ol' girls. We just want ta " +
                "hang with my girls and get a bit tipsy! YEEEHAAA! ",
            button: [
                { chatID: 11, text: "I know! I'm so tired of getting hit on all the time! ", callback: "" },
                { chatID: 12, text: "Sooo... Do you have pussies or dicks? ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "holly",
            text: "I know. It's like guys only think with their penises. I'm so tired of being " +
                "treated like my vagina is the only interesting thing about me. Anyway, the " +
                "girls and I are going to bet back to it. See you around! ",
            button: [
                { chatID: -1, text: "See ya.", callback: "hollyGood" },
            ]
        },
        {
            chatID: 12,
            speaker: "molly",
            text: "What the fuck kind of question is that? Do we look like dudes to you? Our " +
                "pussies are just fine! This guy is a jerk! C'mon girls, let's go somewhere that " +
                "doesn't have assholes! ",
            button: [
                { chatID: -1, text: "oh.", callback: "hollyBad" },
            ]
        },
        {
            chatID: 13,
            speaker: "black",
            text: "Hi, " + sc.n("me") + ". I would love to tear your ass up, but I'm taking " +
                "little Keaton home and this sissy demands all my time to properly break her. " +
                "Let's go Keaton, I'm going to fuck you till you bleed. ",
            button: [
                { chatID: -1, text: "oh my.", callback: "reset" },
            ]
        },




































        
        {
            chatID: 5,
            speaker: "me",
            text: "Oh wait.. I'm wearing a chastity cage. I guess I won't fuck " + sc.n("orchid") + ". Sad Noises.",
            button: [
                { chatID: -1, text: "Fuck Yes!", callback: "seeZoey" }
            ]
        },
        {
            chatID: 6,
            speaker: "juniper",
            text: "Oh hahaha! What a tiny little cock! You should have just told us you're a bottom! ",
            button: [
                { chatID: -1, text: "Sad noises.. I'll go see " + sc.n("zoey") + ".", callback: "seeZoey" }
            ]
        },
        {
            chatID: 7,
            speaker: "orchid",
            text: "Oh yes!!! Use " + sc.n("poppy") + "'s cum as lube! Fuck my dirty asshole!",
            button: [
                { chatID: -1, text: "[Fuck her dirty asshole]", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "orchid",
            text: "Ohhhh yes!!",
            button: [
                { chatID: 9, text: "Take it slut!", callback: "group6" }
            ]
        },
        {
            chatID: 9,
            speaker: "orchid",
            text: "Oh yes daddy! Fill my bum bum so I can leak it everywhere!",
            button: [
                { chatID: 10, text: "[I'm going to cum]", callback: "group7" }
            ]
        },
        {
            chatID: 10,
            speaker: "orchid",
            text: "Fuck I feel your cum in my bum! hehehe",
            button: [
                { chatID: 11, text: "Oh Yesssss! I love cumming in stangers! ", callback: "group8" }
            ]
        },
        {
            chatID: 11,
            speaker: "zoey",
            text: "Zut alors!!! " + sc.n("me") + " you are getting man goo all over my table!",
            button: [
                { chatID: 12, text: "Huh? ", callback: "group9" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "OH!!" + sc.n("zoey") + "!! Oh hahaha hi, I didn't mean to, he, I, ummmmm",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "OH!! " + sc.n("zoey") + "!! Oh hahaha hi, I didn't mean to, he, I, ummmmm",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "zoey",
            text: "It's ok. It's not the first time " + sc.n("orchid") + " has leaked man goo over my bar. If she wasn't " +
                "a regular I would kick her out!",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "zoey",
            text: "Come over to the bar, I'll get you a drink.",
            button: [
                { chatID: -1, text: "OK!", callback: "seeZoey" }
            ]
        },
        {
            chatID: 16,
            speaker: "zoey",
            text: "It's about time you came by my bar! What took you so long? ",
            button: [
                { chatID: 17, text: "You're crazy dress code! ", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "zoey",
            text: "Oh yeah, I'm glad there's a dress code, 'cause you look great in a dress! You ever thinking about going full " +
                "fem? You make a really pretty girl.",
            button: [
                { chatID: 18, text: "oh hahaha *blush*", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "zoey",
            text: "Tu me rends excitée. Don't be a stranger!",
            button: [
                { chatID: -1, text: "I won't", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "juniper",
            text: "Hey honey, you want to play a game?",
            button: [
                { chatID: 20, text: "I sure do!", callback: "" },
                { chatID: -1, text: "No, not right now. ", callback: "killem" }
            ]
        },
        {
            chatID: 20,
            speaker: "juniper",
            text: "Oh fun! We're going to play our favorite game; who has the smallest cock. Strip it off honey!",
            button: [
                { chatID: -1, text: "ok! ", callback: "g1_1" }
            ]
        },
        {
            chatID: 21,
            speaker: "orchid",
            text: "Oh man, am I the smallest again!",
            button: [
                { chatID: 22, text: "...", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "poppy",
            text: "Yep, you're the smallest. You know what that means...",
            button: [
                { chatID: 23, text: "...", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "orchid",
            text: "Sigh... I know...",
            button: [
                { chatID: 24, text: "...", callback: "g1_big1" }
            ]
        },
        {
            chatID: 24,
            speaker: "orchid",
            text: "...don't be gentle.",
            button: [
                { chatID: -1, text: "...", callback: "g1_big2" }
            ]
        },
        {
            chatID: 25,
            speaker: "orchid",
            text: "I'm going to be farting cum for a week. It will be glorius!",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "poppy",
            text: "Yeah. We play this game all the time. Feel free to cum back!",
            button: [
                { chatID: -1, text: "I will!", callback: "g1_end" }
            ]
        },
        {
            chatID: 27,
            speaker: "juniper",
            text: "We have a chastity slut girls! You know what that means.",
            button: [
                { chatID: 28, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "orchid",
            text: "It means I didn't lose, you do!",
            button: [
                { chatID: 29, text: "Lose?", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "poppy",
            text: "Oh yeah, get ready honey.",
            button: [
                { chatID: -1, text: "Ready?", callback: "g1_small1" }
            ]
        },
        {
            chatID: 30,
            speaker: "juniper",
            text: "FFFuuuuuu",
            button: [
                { chatID: 31, text: "UGH", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "poppy",
            text: "Ooooo Yeah",
            button: [
                { chatID: 32, text: "...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "orchid",
            text: "Such a great ass",
            button: [
                { chatID: 33, text: "UGH! I'm so full.", callback: "g1_small2" }
            ]
        },
        {
            chatID: 33,
            speaker: "juniper",
            text: "You were great! Stop by again, we play this game every night.",
            button: [
                { chatID: -1, text: "I will, it's my favorite game. ", callback: "g1_end" }
            ]
        },
        {
            chatID: 34,
            speaker: "juniper",
            text: "Awww it's so small. You know what that means...",
            button: [
                { chatID: 28, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "zoey",
            text: "What do you want?",
            button: [
                { chatID: -1, text: "Oh, nothing", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "zoey",
            text: "If it isn't my favorite person in the world! What's up?",
            button: [
                { chatID: 37, text: "Oh, nothing. Just enjoying your bar.", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "zoey",
            text: "Do you want to help me clean up?",
            button: [
                { chatID: 38, text: "Sure", callback: "wash" },
                { chatID: -1, text: "Nope. Got stuff to do.", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "me",
            text: "Wash wash washing dishes.",
            button: [
                { chatID: 39, text: "Complete", callback: "wash1" }
            ]
        },
        {
            chatID: 39,
            speaker: "zoey",
            text: "Thanks so much! It's late, I'm going to head home. Au revoir mon ami.",
            button: [
                { chatID: -1, text: "See you.", callback: "leave" }
            ]
        },
        {
            chatID: 40,
            speaker: "zoey",
            text: "So... It's just the two of us and I'm feeling a bit horny. Do you want to watch " + sc.n("stormy") + " mange ma chatte?",
            button: [
                { chatID: 41, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "zoey",
            text: "Do you want to uhhh, what's the word, dinner my pussy?",
            button: [
                { chatID: 42, text: "Oh lol. Yes I do. ", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "zoey",
            text: "Oh yeah. " + sc.n("stormy") + " et moi want to be watched while we have sex we are just a pair of exhibitionniste " +
                "with a cocue fétiche. We would love you watch, but you have to wear a appareil de chasteté and menottes... er... hand cuffs. ",
            button: [
                { chatID: -1, text: "Cool, I'm in", callback: "checkHouse" },
                { chatID: -1, text: "No, I've got to get home. ", callback: "leave" }
            ]
        },
        {
            chatID: 43,
            speaker: "zoey",
            text: "Follow me home. I'm not putting my cul nu on this cum covered floor.",
            button: [
                { chatID: -1, text: "Sweet! ", callback: "gotohouse" }
            ]
        },
        {
            chatID: 44,
            speaker: "zoey",
            text: "Oh you need wear a chastity device and have a set of handcuffs. You can also stop by my house if you want to play. ",
            button: [
                { chatID: -1, text: "Oh, ok. We'll see ya.", callback: "leave" }
            ]
        },
        {
            chatID: 45,
            speaker: "zoey",
            text: "So, we need to talk. I'm just so cornée, I need you now. ",
            button: [
                { chatID: 46, text: "Oh wow, really? I thought you were a lesbian.", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "zoey",
            text: "No questions, just eat my warm baby kitten.",
            button: [
                { chatID: -1, text: "Fuck yeah?", callback: "z13_1" }
            ]
        }, 
        {
            chatID: 47,
            speaker: "zoey",
            text: "Oh oui! Oui, oui, oui! Arrêter, I can not take anymore. Oh là là that was good.",
            button: [
                { chatID: 48, text: "...", callback: "z13_4" }
            ]
        },
        {
            chatID: 48,
            speaker: "zoey",
            text: "Oh wow. You are amazing, I can not believe we have not done this before. ",
            button: [
                { chatID: 49, text: "So why me, why now? I thought you were a lesbian.", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "zoey",
            text: "So did I, but I remembered when I began my attraction to women. When I was younger je suis tombé amoureux with " +
                "this boy. I would follow him around our park hoping he would notice me, but he never did. " +
                "One day I was following bêtement him and one of his friends m'a fait remarquer and stared se moquant de moi. Then his " +
                "other friends staring to laugh at me too. ",
            button: [
                { chatID: 50, text: "...", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "zoey",
            text: "When the boys were laughing the boy I loved turn his head to me. I feel shame and I hoped he would get " +
                "the other boys to stop my shame and " +
                "stop laughing at me. But he laughed also and said it looks like the fantôme effrayant is back following him. Then all " +
                "the boys chanted fantôme effrayant at me. I have never been more sad and terrible in my life. I was a girl broken.",
            button: [
                { chatID: 51, text: "That's terrible.", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "zoey",
            text: "I just wanted to die, hearing the boy I thoguht I loved laugh at me with his friends. That night my best friend, Amélie, " +
                "heard what had happened and came over to my room. I was so sad I just wanted to lay in bed and die. Amélie curled next to " +
                "me and snuggled with me all night. I have never felt loved like that my entire life. She was so soft and caring I " +
                "realized this is what I want. Not some garçon stupide, but a nice warm loving person. ",
            button: [
                { chatID: 52, text: "...", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "zoey",
            text: "Seeing you here, helping me and supporting me all this time made me realize I was not in love with just girls, but " +
                "I love someone who loves me back. No one has shown me as much l'amour as you. J'ai été si aveugle. I have been chasing " +
                "these girls who only want sex, but it is not what I want. I want you, mon meilleur ami.",
            button: [
                { chatID: 53, text: "Oh wow. I guess I've always felt the same about you. It's the reason I keep coming back. ", callback: "" }
            ]
        },
        {
            chatID: 53,
            speaker: "zoey",
            text: "I am so sorry for everything I have put you through. I guess I was searching for myself. But I've found you, and " +
                "you are perfect for me. So do you want to come to my house and cuddle me to sleep?",
            button: [
                { chatID: -1, text: "Yes I do. ", callback: "z13_5" }
            ]
        },
        {
            chatID: 54,
            speaker: "keaton",
            text: "Well looky here. If it isn't a new cock. I'm " + sc.n("keaton") + " and I have a couple holes you can use. ",
            button: [
                { chatID: 55, text: "Oh wow. Hello. ", callback: "k01" }
            ]
        },
        {
            chatID: 55,
            speaker: "keaton",
            text: "Soo what do you think? ",
            button: [
                { chatID: 56, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "zoey",
            text: sc.n("keaton") + "! You are the sluttiest slut I know. Just don't get any cum on my floor again! ",
            button: [
                { chatID: 57, text: "...", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "keaton",
            text: "Oh honey, you know I'll lick up anything that falls. I've got to get to this new cock! Pull it " +
                "out new girl, I'm hungry. ",
            button: [
                { chatID: -1, text: "Pull your dick out.", callback: "k02" },
                { chatID: -1, text: "Sorry. I'm more of a total bottom. ", callback: "kno" }
            ]
        },
        {
            chatID: 58,
            speaker: "keaton",
            text: "Awww you're all locked up. Too bad I would have been the best you've ever had! ",
            button: [
                { chatID: -1, text: "Oh yeah. Ok. ", callback: "reset" }
            ]
        },
        {
            chatID: 59,
            speaker: "keaton",
            text: "Baby. I'm looking to get fucked, not tickeled. You need to put that tiny dick away and never show it " +
                "to another human again. ",
            button: [
                { chatID: -1, text: "Oh yeah. Ok. ", callback: "reset" }
            ]
        },
        {
            chatID: 60,
            speaker: "keaton",
            text: "That's the kind of cock I need! ",
            button: [
                { chatID: 61, text: "Oh yeah. Ok. ", callback: "k03" }
            ]
        },
        {
            chatID: 61,
            speaker: "keaton",
            text: "Feed me papi. Fuck my face and make me choke!",
            button: [
                { chatID: -1, text: "!", callback: "k04" }
            ]
        },
        {
            chatID: 62,
            speaker: "keaton",
            text: "Shoot it all over my face! Cover me in your cum! ",
            button: [
                { chatID: 63, text: "[cum]", callback: "k08" }
            ]
        },
        {
            chatID: 63,
            speaker: "keaton",
            text: "I'm going to snack on this all night! ",
            button: [
                { chatID: -1, text: "Finish", callback: "k09" }
            ]
        },
        {
            chatID: 64,
            speaker: "keaton",
            text: "Are you here to fuck me again?",
            button: [
                { chatID: -1, text: "Pull your dick out.", callback: "k02" },
                { chatID: -1, text: "I'm a total bottom", callback: "kno" }
            ]
        },
        {
            chatID: 65,
            speaker: "thinking",
            text: "I wonder what she knows about the cult.  ",
            button: [
                { chatID: 66, text: "Ask about the cult", callback: "" },
                { chatID: 69, text: "Ask where to get a lot of dick. ", callback: "" },
                { chatID: -1, text: "I've got other stuff to do.", callback: "reset" }
            ]
        },
        {
            chatID: 66,
            speaker: "me",
            text: "So do you know anything about the cult? ",
            button: [
                { chatID: 67, text: "...", callback: "" }
            ]
        },
        {
            chatID: 67,
            speaker: "keaton",
            text: "Nope, never heard of it. No idea. Gotta run.  ",
            button: [
                { chatID: 68, text: "...", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "thinking",
            text: "Damn! I have to learn to be less obvious. ",
            button: [
                { chatID: -1, text: "...", callback: "knoreset" }
            ]
        },
        {
            chatID: 69,
            speaker: "me",
            text: "Oooo my bussy is so horny. Do you know where I can get some cock to fill it?",
            button: [
                { chatID: 70, text: "...", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "keaton",
            text: "Oh honey, if I knew that I would be there. ",
            button: [
                { chatID: 71, text: "I know. So what's the most dick you've taken in a single day? ", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "keaton",
            text: "Come closer, have I got a story for you!  ",
            button: [
                { chatID: 72, text: "[Lean in]", callback: "kno0" }
            ]
        },
        {
            chatID: 72,
            speaker: "keaton",
            text: "Normally, I wouldn't tell anyone, but I can tell you're a big ol' slut too. So there's this place I like to " +
                "sneak into that is just filled with horny men! Cocks everywhere. You've never seen so many cocks " +
                "in your lifetime and they're just waiting to fuck something, anything! So I just walk in the center of the " +
                "group, and I'm always naked and just stick my ass up and say 'Diner is served boys!' Well they " +
                "just attack my ass! I've got two in my bussy, one down my throat, and as soon as one of them cums another " +
                "cock just replaces it. ",
            button: [
                { chatID: 73, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 73,
            speaker: "keaton",
            text: "For real. After they were done I farted out an entire cup of cum! I know this 'cause some girl comes out " +
                "and has me fart my cum filled ass in a glass. One time I even overfilled the cup. And it's a big cup too, like " +
                "the one the boys use to drink a big beer from. I'm such a slut! ",
            button: [
                { chatID:74, text: "That is so hot!", callback: "" }
            ]
        },
        {
            chatID: 74,
            speaker: "keaton",
            text: "Yeah. My daddy's part of their church. He's really important. One of the most important people there. " +
                "Hey, do you want to come over? Like a sleep over! I totally forgot daddy's birthday again, and you " +
                "would make a great present! ",
            button: [
                { chatID: 75, text: "Oh. Yeah. Totally. Anything for my new best friend. ", callback: "" }
            ]
        },
        {
            chatID: 75,
            speaker: "keaton",
            text: "We're more than friends. We're sissy sisters! It will be amazing. I mean, " +
                "the only thing better than my bussy, is two bussies! My daddy will love you!  ",
            button: [
                { chatID: 76, text: "Sure. I'll be there! ", callback: "" }
            ]
        },
        {
            chatID: 76,
            speaker: "keaton",
            text: "Perfect. My daddy's house is the trailer near " + "stormy" + "'s. She's a really awesome tattoo artist and " +
                "my daddy's friend. They go to church together a lot. He works at night, so come by during the day. It will " +
                "be awesome! ",
            button: [
                { chatID: -1, text: "Sure. See you there. ", callback: "kno1" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};