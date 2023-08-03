//Glory Hole
var room216 = {};
room216.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "gloryho",
            "left": 1008,
            "top": 463,
            "width": 296,
            "height": 240,
            "image": "216_pink/gloryho.png",
            "title": "Free Use Slut"
        },
        {
            "type": "btn",
            "name": "clean",
            "left": 455,
            "top": 839,
            "width": 231,
            "height": 206,
            "image": "216_pink/clean.png",
            "title": "Clean the Sluts"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 216);
    });
    nav.buildnav([213, 214, 215, 0]);
};

room216.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            nav.bg("213_pink/clean0.jpg");
            chat(0, 216);
            break;
        case "cleancum":
            if (g.internal === 3) {
                nav.killbutton("cleancum");
                nav.bg("213_pink/clean3.jpg");
                chat(3, 216);
            }
            else {
                nav.modbutton("cleancum", "213_pink/cum" + g.internal + ".png", null, null);
                g.internal++;
            }
            break;
        case "gloryho":
            chat(5, 216);
            break;
        case "right":
            if (g.internal.s === 0) {
                g.internal.s = 1;
                nav.bg("216_pink/m_" + g.internal.l + "_0.jpg");
            }
            else {
                nav.killall();
                nav.bg("216_pink/holebg.jpg");
                if (g.internal.l === "d") {
                    nav.button({
                        "type": "img",
                        "name": "leg",
                        "left": 660,
                        "top": 298,
                        "width": 645,
                        "height": 782,
                        "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
                    }, 216);
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "leg",
                        "left": 670,
                        "top": 0,
                        "width": 582,
                        "height": 1080,
                        "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
                    }, 216);
                }
                chat(7, 216);
            }
                
            break;
        default:
            break;
    }
};

room216.chatcatch = function (callback) {
    switch (callback) {
        case "clean0":
            nav.killall();
            nav.bg("213_pink/clean0.jpg");
            break;
        case "clean1":
            nav.bg("213_pink/clean1.jpg");
            break;
        case "clean2":
            g.internal = 1;
            nav.bg("213_pink/clean2.jpg");
            nav.button({
                "type": "tongue",
                "name": "cleancum",
                "left": 814,
                "top": 579,
                "width": 166,
                "height": 497,
                "image": "213_pink/cum0.png",
                "title": "Lick it up slut"
            }, 216);
            break;
        case "clean4":
            gv.mod("energy", 100);
            gv.mod("giveOralFemale", 1);
            gv.mod("loadSwollowed", 1);
            gv.mod("money", 50);
            char.addtime(120);
            nav.bg("216_pink/clean4.jpg");
            break;
        case "clean4a":
            gv.mod("money", 50);
            char.addtime(120);
            nav.bg("216_pink/clean4.jpg");
            break;
        case "resetClean":
            nav.button(
            {
                "type": "btn",
                "name": "gloryho",
                "left": 1008,
                "top": 463,
                "width": 296,
                "height": 240,
                "image": "216_pink/gloryho.png",
                "title": "Free Use Slut"
            }, 216);
            nav.bg("216_pink/cleansluts.jpg");
            nav.buildnav([213, 214, 215, 0]);
            break;
        case "reset":
            char.room(216);
            break;
        case "legup":
            nav.killall();
            g.internal = { l: "u", n: 0, s: 0, c: 0 };
            nav.button(
            {
                "type": "img",
                "name": "leg",
                "left": 670,
                "top": 0,
                "width": 582,
                "height": 1080,
                "image": "216_pink/l_u_0.png"
            }, 216);
            nav.bg("216_pink/holebg.jpg");
            break;
        case "legdown":
            nav.killall();
            nav.bg("216_pink/holebg.jpg");
            nav.button(
                {
                    "type": "img",
                    "name": "leg",
                    "left": 660,
                    "top": 298,
                    "width": 645,
                    "height": 782,
                    "image": "216_pink/l_d_0.png"
                }, 216);
            g.internal = { l: "d", n: 0, s: 0, c: 0 };
            break;
        case "wait":
            if (gv.get("energy") < 15) {
                chat(8, 216);
            }
            else {
                g.internal.c++;
                gv.mod("energy", -15);
                var randcust = Math.floor(Math.random() * 8);
                nav.button(
                    {
                        "type": "img",
                        "name": "cust",
                        "left": 481,
                        "top": 0,
                        "width": 880,
                        "height": 1080,
                        "image": "216_pink/l_f_" + randcust + ".png"
                    }, 216);
                chat(100, 216);
            }
            break;
        case "fuck0":
            g.internal.n++;
            if (g.internal.n > 8)
                g.internal.n = 8;
            g.internal.s = 0;
            nav.killall();
            nav.bg("216_pink/m_" + g.internal.l + "_1.jpg");
            nav.button({
                "type": "btn",
                "name": "right",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 216);
            break;
        case "flip":
            nav.killbutton("leg");
            if (g.internal.l === "u") {
                g.internal.l = "d";
                nav.button({
                    "type": "img",
                    "name": "leg",
                    "left": 660,
                    "top": 298,
                    "width": 645,
                    "height": 782,
                    "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
                }, 216);
            }
            else {
                g.internal.l = "u";
                nav.button({
                    "type": "img",
                    "name": "leg",
                    "left": 670,
                    "top": 0,
                    "width": 582,
                    "height": 1080,
                    "image": "216_pink/l_" + g.internal.l + "_" + g.internal.n + ".png"
                }, 216);
            }
            break;
        case "endfuck":
            g.popUpNotice("You took " + g.internal.c + " cock! Good girl.");
            gv.mod("receiveAnalMale", g.internal.c);
            gv.mod("creamPied", g.internal.c);
            gv.mod("money", 10 * g.internal.c);
            char.room(216);
            break;
        default:
            break;
    }
};

room216.chat = function (chatID) {
    if (chatID === 100) {
        var chat100 = [
            "Take this cock slut!",
            "I like a sloppy hole. ",
            "Like it when my balls slap against your ass?",
            "You're my favorite fuck hole.",
            "I'm going to fill you ass so full you'll feel me drip out for the rest of the day.",
            "UUUgggghhhhh",
            "What a stupid sloppy slut! ",
            "You're only good for your hole whore. ",
            "Squeeze my cock you loose whore",
            "This is so good I'm going to come back for more. ",
            "You fucking piece of fuck meat! You're only good to take cock.",
            "You smell like sweat and cum"
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat100[Math.floor(Math.random() * chat100.length)],
            button: [
                { chatID: -1, text: "Ooooo", callback: "fuck0" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "They really are just absolutly covered in cum. Oh well, need to get to work.",
            button: [
                { chatID: 1, text: "...", callback: "clean1" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "These girls must be busy! It seems like such a waste to just put it in the cum bucket. I wonder if " +
                "she'll mind if I have a little taste? Maybe I should ask first?",
            button: [
                { chatID: 2, text: "Can I eat the cum out of your pussy?", callback: "clean2" },
                { chatID: 4, text: "[Just finish cleaning]", callback: "clean4a" }
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "Lick away. My pussy needs a tongue after all that cock!",
            button: [
                { chatID: -1, text: "MMmmmmm", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I'm so full! There's just so much cum!",
            button: [
                { chatID: 4, text: "*Gulp*", callback: "clean4" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Everyone's all clean! ",
            button: [
                { chatID: -1, text: "I'm a good girl!", callback: "resetClean" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "So do I put my legs up, or legs down?",
            button: [
                { chatID: 6, text: "Legs Up", callback: "legup" },
                { chatID: 6, text: "Legs Down", callback: "legdown" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Should I stay for more cock, or have I had enough",
            button: [
                { chatID: -1, text: "Wait for the next cock", callback: "wait" },
                { chatID: -1, text: "Leave", callback: "reset" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Should I stay for more cock, or have I had enough",
            button: [
                { chatID: -1, text: "Wait for the next cock", callback: "wait" },
                { chatID: 7, text: "Flip over", callback: "flip" },
                { chatID: -1, text: "Leave", callback: "endfuck" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "I don't have enough energy to take more cocks!",
            button: [
                { chatID: -1, text: "Leave", callback: "endfuck" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};