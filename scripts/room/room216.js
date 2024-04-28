//Glory Hole
var room216 = {};
room216.main = function () {
    if (missy.get("cumMaidCounter") === 1) {
        nav.bg("207_door/bg.jpg");
        chat(0, 216);
    }
    else {
        room216.chatcatch("cumRoom");
    }
    missy.mod("cumMaidCounter", 1);
};

room216.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            if (g.rand(0, 2) === 0) {
                nav.bg("216_pink/pull0_" + gender.pronoun("f") + ".jpg");
                sc.select("plug0", "216_pink/icon_pull.png", 0);
                sc.select("plugclean", "216_pink/icon_clean.png", 1);
            }
            else {
                nav.bg("216_pink/dirty_" + gender.pronoun("f") + ".jpg");
                sc.select("cum0", "216_pink/icon_lick.png", 0);
                sc.select("lickclean", "216_pink/icon_clean.png", 1);
            }
            break;
        case "plug0":
            nav.killall();
            nav.bg("216_pink/pull1_" + gender.pronoun("f") + ".jpg");
            nav.next("plug1");
            break;
        case "plug1":
            nav.killall();
            nav.bg("216_pink/pull2_" + gender.pronoun("f") + ".jpg");
            nav.next("plug2");
            break;
        case "plug2":
            nav.killall();
            nav.bg("216_pink/pull3_" + gender.pronoun("f") + ".jpg");
            cl.c.cumface = true;
            levels.mod("cum", 20, 999);
            chat(5, 216);
            break;
        case "plugclean":
            nav.killall();
            chat(6, 216);
            break;
        case "lickclean":
            nav.killall();
            nav.bg("216_pink/clean_" + gender.pronoun("f") + ".jpg");
            chat(6, 216);
            break;
        case "cum0":
            if (levels.get("cum").l < 2) {
                chat(8, 216);
            }
            else {
                nav.killall();
                nav.bg("216_pink/ass.jpg");
                nav.button({
                    "type": "tongue",
                    "name": "cum1",
                    "left": 950,
                    "top": 354,
                    "width": 151,
                    "height": 717,
                    "image": "216_pink/cum0.png",
                    "title": "Lick up slut"
                }, 216);
            }
            break;
        case "cum1":
            nav.killbutton("cum1");
            nav.button({
                "type": "tongue",
                "name": "cum2",
                "left": 950,
                "top": 354,
                "width": 151,
                "height": 496,
                "image": "216_pink/cum1.png",
                "title": "Lick up slut"
            }, 216);
            break;
        case "cum2":
            nav.killbutton("cum2");
            nav.button({
                "type": "tongue",
                "name": "cum3",
                "left": 1003,
                "top": 354,
                "width": 98,
                "height": 232,
                "image": "216_pink/cum2.png",
                "title": "Lick up slut"
            }, 216);
            break;
        case "cum3":
            nav.killall();
            nav.bg("216_pink/clean_" + gender.pronoun("f") + ".jpg");
            gv.mod("energy", 100);
            levels.mod("cum", 25, 999);
            chat(7, 216);
            break;
    }
}

room216.chatcatch = function (callback) {
    switch (callback) {
        case "pink0":
            nav.bg("216_pink/intro.jpg");
            break;
        case "cumRoom":
            nav.killall();
            nav.bg("216_pink/bg.jpg");
            var holes = g.shuffleArray([0, 1, 2, 3, 4, 5, 6]);
            for (i = 0; i < 5; i++) {
                nav.button({
                    "type": "img",
                    "name": "ho_" + i,
                    "left": 300 + (i * 335),
                    "top": 73,
                    "width": 335,
                    "height": 324,
                    "image": "216_pink/" + holes[i] + "_s.png",
                    "title": "Free Use Slut"
                }, 216);
                nav.button({
                    "type": "img",
                    "name": "ho_" + i,
                    "left": 300 + (i * 335),
                    "top": 400,
                    "width": 335,
                    "height": 570,
                    "image": "216_pink/" + holes[i] + "_d.png",
                    "title": "Free Use Slut"
                }, 216);
            }
            nav.button({
                "type": "btn",
                "name": "clean",
                "left": 1250,
                "top": 850,
                "width": 231,
                "height": 206,
                "image": "216_pink/clean.png",
                "title": "Clean Up"
            }, 216);
            break;
        case "complete":
            missy.didJob(5, 1, null);
            char.room(224);
            break;
        case "clean":
            nav.bg("216_pink/clean_" + gender.pronoun("f") + ".jpg");
            break;
        default:
            break;
    }

}

room216.chat = function (chatID) {
    if (chatID === 1000) {
        //
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Excuse me! I'm going to the Pink Room!",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!missyguardday",
            text: "I thought I told you, you aren't allowed in here!",
            button: [
                { chatID: 2, text: "Missy said I could", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!missyguardday",
            text: "Oh. Oh yeah. I guess you've graduated from being a nobody to a dirty whore. " +
                "step right in. ",
            button: [
                { chatID: 3, text: "...", callback: "pink0" }
            ]
        },
        {
            chatID: 3,
            speaker: "p",
            text: "Welcome to the Pink Pleasure Club for Outstanding Ladies and Gentlement, " +
                "or as most people simply call it, the Pink Room. I would give you the tour, but " +
                "I'm far too busy. I just need you to come in and do a quick job for me. ",
            button: [
                { chatID: 4, text: "Awesome! What is it?", callback: "clean1" }
            ]
        },
        {
            chatID: 4,
            speaker: "p",
            text: "This is the free use room. I need you to fill in as our cum dump maid. Our usual maid is on materinity leave. " +
                "I think she was scooping the cum into her pussy. The job's pretty easy, clean up " +
                "cum up and don't mess with the fuck holes. Also whores don't get to wear clothes " +
                "here, but I'll have you wear an apron so the VIPs know you're only a maid. Now clean " +
                "those dirty pussies and assholes. ",
            button: [
                { chatID: -1, text: "Will do. ", callback: "cumRoom" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Of course there's 30 loads of cum in her ass that's now covering my face. " +
                "I'm such an airhead sometimes. ",
            button: [
                { chatID: -1, text: "*gasp*", callback: "complete" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I've cleaned all these cum covered sluts so well, people will think they're " +
                "all virgins! Good job me! ",
            button: [
                { chatID: -1, text: "*smile*", callback: "complete" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Yummy! I love how thick and creamy it feels sliding over my tongue and in my " +
                "mouth. I'm such a dirty cum whore! ",
            button: [
                { chatID: -1, text: "*smile*", callback: "complete" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Ewwww. Gross. I'm not going to lick that!  ",
            button: [
                { chatID: 6, text: "*gag*", callback: "clean" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
//room216.chat = function (chatID) {
//    if (chatID === 100) {
//        var chat100 = [
//            "Take this cock slut!",
//            "I like a sloppy hole. ",
//            "Like it when my balls slap against your ass?",
//            "You're my favorite fuck hole.",
//            "I'm going to fill you ass so full you'll feel me drip out for the rest of the day.",
//            "UUUgggghhhhh",
//            "What a stupid sloppy slut! ",
//            "You're only good for your hole whore. ",
//            "Squeeze my cock you loose whore",
//            "This is so good I'm going to come back for more. ",
//            "You fucking piece of fuck meat! You're only good to take cock.",
//            "You smell like sweat and cum"
//        ];
//        return {
//            chatID: 0,
//            speaker: "random",
//            text: chat100[Math.floor(Math.random() * chat100.length)],
//            button: [
//                { chatID: -1, text: "Ooooo", callback: "fuck0" }
//            ]
//        };
//    }
//    var cArray = [
//        {
//            chatID: 0,
//            speaker: "thinking",
//            text: "They really are just absolutly covered in cum. Oh well, need to get to work.",
//            button: [
//                { chatID: 1, text: "...", callback: "clean1" }
//            ]
//        },
//        {
//            chatID: 1,
//            speaker: "thinking",
//            text: "These girls must be busy! It seems like such a waste to just put it in the cum bucket. I wonder if " +
//                "she'll mind if I have a little taste? Maybe I should ask first?",
//            button: [
//                { chatID: 2, text: "Can I eat the cum out of your pussy?", callback: "clean2" },
//                { chatID: 4, text: "[Just finish cleaning]", callback: "clean4a" }
//            ]
//        },
//        {
//            chatID: 2,
//            speaker: "random",
//            text: "Lick away. My pussy needs a tongue after all that cock!",
//            button: [
//                { chatID: -1, text: "MMmmmmm", callback: "" }
//            ]
//        },
//        {
//            chatID: 3,
//            speaker: "thinking",
//            text: "I'm so full! There's just so much cum!",
//            button: [
//                { chatID: 4, text: "*Gulp*", callback: "clean4" }
//            ]
//        },
//        {
//            chatID: 4,
//            speaker: "thinking",
//            text: "Everyone's all clean! ",
//            button: [
//                { chatID: -1, text: "I'm a good girl!", callback: "resetClean" }
//            ]
//        },
//        {
//            chatID: 5,
//            speaker: "thinking",
//            text: "So do I put my legs up, or legs down?",
//            button: [
//                { chatID: 6, text: "Legs Up", callback: "legup" },
//                { chatID: 6, text: "Legs Down", callback: "legdown" }
//            ]
//        },
//        {
//            chatID: 6,
//            speaker: "thinking",
//            text: "Should I stay for more cock, or have I had enough",
//            button: [
//                { chatID: -1, text: "Wait for the next cock", callback: "wait" },
//                { chatID: -1, text: "Leave", callback: "reset" }
//            ]
//        },
//        {
//            chatID: 7,
//            speaker: "thinking",
//            text: "Should I stay for more cock, or have I had enough",
//            button: [
//                { chatID: -1, text: "Wait for the next cock", callback: "wait" },
//                { chatID: 7, text: "Flip over", callback: "flip" },
//                { chatID: -1, text: "Leave", callback: "endfuck" }
//            ]
//        },
//        {
//            chatID: 8,
//            speaker: "thinking",
//            text: "I don't have enough energy to take more cocks!",
//            button: [
//                { chatID: -1, text: "Leave", callback: "endfuck" }
//            ]
//        }
//    ];
//    if (cArray.length > chatID && chatID > -1)
//        return cArray[chatID];
//    else
//        return [];
//};


//room216.btnclick = function (name) {
//    switch (name) {
//        case "clean":
//            nav.killall();
//            nav.bg("213_pink/clean0.jpg");
//            chat(0, 216);
//            break;
//        case "cleancum":
//            if (g.internal === 3) {
//                nav.killbutton("cleancum");
//                nav.bg("213_pink/clean3.jpg");
//                chat(3, 216);
//            }
//            else {
//                nav.modbutton("cleancum", "213_pink/cum" + g.internal + ".png", null, null);
//                g.internal++;
//            }
//            break;
//        case "gloryho":
//            chat(5, 216);
//            break;
//        case "right":
//            if (g.internal.s === 0) {
//                g.internal.s = 1;
//                nav.bg("216_pink/m_" + g.internal.l + "_0.jpg");
//            }
//            else {
//                nav.killall();
//                nav.bg("216_pink/holebg.jpg");
//                if (g.internal.l === "d") {
//                    nav.button({
//                        "type": "img",
//                        "name": "leg",
//                        "left": 660,
//                        "top": 298,
//                        "width": 645,
//                        "height": 782,
//                        "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
//                    }, 216);
//                }
//                else {
//                    nav.button({
//                        "type": "img",
//                        "name": "leg",
//                        "left": 670,
//                        "top": 0,
//                        "width": 582,
//                        "height": 1080,
//                        "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
//                    }, 216);
//                }
//                chat(7, 216);
//            }

//            break;
//        default:
//            break;
//    }
//};

//room216.chatcatch = function (callback) {
//    switch (callback) {
//        case "clean0":
//            nav.killall();
//            nav.bg("213_pink/clean0.jpg");
//            break;
//        case "clean1":
//            nav.bg("213_pink/clean1.jpg");
//            break;
//        case "clean2":
//            g.internal = 1;
//            nav.bg("213_pink/clean2.jpg");
//            nav.button({
//                "type": "tongue",
//                "name": "cleancum",
//                "left": 814,
//                "top": 579,
//                "width": 166,
//                "height": 497,
//                "image": "213_pink/cum0.png",
//                "title": "Lick it up slut"
//            }, 216);
//            break;
//        case "clean4":
//            gv.mod("energy", 100);
//            gv.mod("giveOralFemale", 1);
//            gv.mod("loadSwollowed", 1);
//            gv.mod("money", 50);
//            char.addtime(120);
//            nav.bg("216_pink/clean4.jpg");
//            break;
//        case "clean4a":
//            gv.mod("money", 50);
//            char.addtime(120);
//            nav.bg("216_pink/clean4.jpg");
//            break;
//        case "resetClean":
//            nav.button(
//            {
//                "type": "btn",
//                "name": "gloryho",
//                "left": 1008,
//                "top": 463,
//                "width": 296,
//                "height": 240,
//                "image": "216_pink/gloryho.png",
//                "title": "Free Use Slut"
//            }, 216);
//            nav.bg("216_pink/cleansluts.jpg");
//            nav.buildnav([213, 214, 215, 0]);
//            break;
//        case "reset":
//            char.room(216);
//            break;
//        case "legup":
//            nav.killall();
//            g.internal = { l: "u", n: 0, s: 0, c: 0 };
//            nav.button(
//            {
//                "type": "img",
//                "name": "leg",
//                "left": 670,
//                "top": 0,
//                "width": 582,
//                "height": 1080,
//                "image": "216_pink/l_u_0.png"
//            }, 216);
//            nav.bg("216_pink/holebg.jpg");
//            break;
//        case "legdown":
//            nav.killall();
//            nav.bg("216_pink/holebg.jpg");
//            nav.button(
//                {
//                    "type": "img",
//                    "name": "leg",
//                    "left": 660,
//                    "top": 298,
//                    "width": 645,
//                    "height": 782,
//                    "image": "216_pink/l_d_0.png"
//                }, 216);
//            g.internal = { l: "d", n: 0, s: 0, c: 0 };
//            break;
//        case "wait":
//            if (gv.get("energy") < 15) {
//                chat(8, 216);
//            }
//            else {
//                g.internal.c++;
//                gv.mod("energy", -15);
//                var randcust = Math.floor(Math.random() * 8);
//                nav.button(
//                    {
//                        "type": "img",
//                        "name": "cust",
//                        "left": 481,
//                        "top": 0,
//                        "width": 880,
//                        "height": 1080,
//                        "image": "216_pink/l_f_" + randcust + ".png"
//                    }, 216);
//                chat(100, 216);
//            }
//            break;
//        case "fuck0":
//            g.internal.n++;
//            if (g.internal.n > 8)
//                g.internal.n = 8;
//            g.internal.s = 0;
//            nav.killall();
//            nav.bg("216_pink/m_" + g.internal.l + "_1.jpg");
//            nav.button({
//                "type": "btn",
//                "name": "right",
//                "left": 1687,
//                "top": 615,
//                "width": 233,
//                "height": 150,
//                "image": "526_bar/arrowRight.png"
//            }, 216);
//            break;
//        case "flip":
//            nav.killbutton("leg");
//            if (g.internal.l === "u") {
//                g.internal.l = "d";
//                nav.button({
//                    "type": "img",
//                    "name": "leg",
//                    "left": 660,
//                    "top": 298,
//                    "width": 645,
//                    "height": 782,
//                    "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
//                }, 216);
//            }
//            else {
//                g.internal.l = "u";
//                nav.button({
//                    "type": "img",
//                    "name": "leg",
//                    "left": 670,
//                    "top": 0,
//                    "width": 582,
//                    "height": 1080,
//                    "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
//                }, 216);
//            }
//            break;
//        case "endfuck":
//            g.popUpNotice("You took " + g.internal.c + " cock! Good girl.");
//            gv.mod("receiveAnalMale", g.internal.c);
//            gv.mod("creamPied", g.internal.c);
//            gv.mod("money", 10 * g.internal.c);
//            char.room(216);
//            break;
//        default:
//            break;
//    }
//};
