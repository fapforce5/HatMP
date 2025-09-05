//Mirror
var room27 = {};
room27.main = function () {
    g.internal = new Array();
    var nextChat = (g.pass === 57 || g.pass === 151) ? 19 : 20;
    if (inv.has("redl") || g.pass === 57 || g.pass === 151)
        g.internal.push({ chatID: nextChat, text: "Red lipstick", callback: "red" });
    if (inv.has("pinkl") || g.pass === 57 || g.pass === 151)
        g.internal.push({ chatID: nextChat, text: "Pink lipstick", callback: "pink" });
    if (inv.has("purplel") || g.pass === 57 || g.pass === 151)
        g.internal.push({ chatID: nextChat, text: "Purple lipstick", callback: "purple" });
    if (inv.has("blackl") || g.pass === 57 || g.pass === 151)
        g.internal.push({ chatID: nextChat, text: "Black lipstick", callback: "black" });
    if (g.internal.length === 0)
        g.internal.push({ chatID: g.pass === 57 ? 12 : 0, text: "I don't have any lipstick", callback: "" });

    switch (g.pass) {
        case 12:
        case 201:
        case 184:
            nav.bg("12_bathroom/012_brushTeeth.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 56:
            nav.bg("56_bathroom/mirror.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 57:
            nav.bg("57_pussyPalace/makeup.jpg");
            zcl.displayMirror();
            chat(12, 27);
            break;
        case 151:
            nav.bg("151_jones/mirror.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 170:
            nav.bg("27_mirror/170.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 527:
            nav.bg("27_mirror/527.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 451:
        case 452:
            nav.bg("451_parkMensRoom/mirror.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 503:
            nav.bg("503_bathroom/mirror.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 602:
            nav.bg("27_mirror/602.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case 727:
            nav.bg("27_mirror/727.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
        case -1:
            case -2:
            nav.bg("57_pussyPalace/makeup.jpg");
            zcl.displayMirror();
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 0,
                "top": 0,
                "width": 1547,
                "height": 1080,
                "image": "27_mirror/tif.png"
            }, 12);
            if (g.pass === -1)
                chat(4, 27);
            else
                chat(22, 27);
            break;
        default:
            g.pass = 451;
            nav.bg("451_parkMensRoom/mirror.jpg");
            zcl.displayMirror();
            chat(0, 27);
            break;
    }
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 27);
    //});
    //nav.buildnav(navList);
};

room27.btnclick = function (name) {
    let makeuplevel = levels.get("makeup").l;
    switch (name) {
        case "buildChar":
            zcl.displayMirror();
            break;
        case "closeView":
            char.room(27);
            break;
        case "menu":
            room27.chatcatch("checkmakeup");
            break;
        case "reset":
            char.room(27);
            break;
        case "wash":
            cl.clean("face");
            room27.chatcatch("checkmakeup");
            break;
        case "makeup":
            room27.btnclick("clear");
            if (inv.has("makeup") || g.pass === 57) {
                sc.select("makeup_natural", "27_mirror/icon_natural.png", 5);
                if (makeuplevel > 0)
                    sc.select("makeup_blush", "27_mirror/icon_blush.png", 6);
                if (makeuplevel > 1)
                    sc.select("makeup_blushheavy", "27_mirror/icon_blushheavy.png", 7);
                if (makeuplevel > 2)
                    sc.select("makeup_clown", "27_mirror/icon_clown.png", 8);
                if (makeuplevel > 3)
                    sc.select("makeup_brown", "27_mirror/icon_brown.png", 9);
                if (makeuplevel > 4)
                    sc.select("makeup_orange", "27_mirror/icon_orange.png", 10);
                if (makeuplevel > 5)
                    sc.select("makeup_white", "27_mirror/icon_white.png", 11);
                sc.selectCancel("menu", 13);
            }
            else
                chat(1, 27);
            break;
        case "lipstick":
            room27.btnclick("clear");
            if (inv.has("redl"))
                sc.select("lipstick_red", "27_mirror/icon_lipstick_red.png", 7);
            if (inv.has("pinkl"))
                sc.select("lipstick_pink", "27_mirror/icon_lipstick_pink.png", 8);
            if (inv.has("purplel"))
                sc.select("lipstick_purple", "27_mirror/icon_lipstick_purple.png", 9);
            if (inv.has("bluel"))
                sc.select("lipstick_blue", "27_mirror/icon_lipstick_blue.png", 10);
            if (inv.has("blackl"))
                sc.select("lipstick_black", "27_mirror/icon_lipstick_black.png", 11);
            sc.selectCancel("menu", 13);
            break;
        case "eyeshadow":
            room27.btnclick("clear");
            if (makeuplevel > 2 || g.pass === 170) {
                if (inv.get("eyeshadow").count < 1) {
                    chat(28, 27);
                }
                else {
                    sc.select("eyeliner_light", "27_mirror/icon_eye_light.png", 5);
                    sc.select("eyeliner_black", "27_mirror/icon_eye_black.png", 6);
                    sc.select("eyeliner_purple", "27_mirror/icon_eye_purple.png", 7);
                    sc.select("eyeliner_pink", "27_mirror/icon_eye_pink.png", 8);
                    sc.select("eyeliner_green", "27_mirror/icon_eye_green.png", 9);
                    sc.select("eyeliner_blue", "27_mirror/icon_eye_blue.png", 10);
                    sc.select("eyeliner_rainbow", "27_mirror/icon_eye_rainbow.png", 11);
                    sc.selectCancel("menu", 13);
                }
            }
            else {
                chat(29, 27);
            }
            break;
        case "makeup_natural":
        case "makeup_blush":
        case "makeup_blushheavy":
        case "makeup_clown":
        case "makeup_brown":
        case "makeup_orange":
        case "makeup_white":
            if (daily.get("makeup"))
                levels.mod("makeup", 2);
            else {
                levels.mod("makeup", 20);
                daily.set("makeup");
            }

            cl.c.makeup = name.replace("makeup_", "");
            inv.use("makeup");
            cl.display();
            room27.chatcatch("checkmakeup");
            break;
        case "eyeliner_light":
        case "eyeliner_black":
        case "eyeliner_purple":
        case "eyeliner_pink":
        case "eyeliner_green":
        case "eyeliner_blue":
        case "eyeliner_rainbow":
            if (daily.get("eyeshadow"))
                levels.mod("makeup", 2);
            else {
                levels.mod("makeup", 20);
                daily.set("eyeshadow");
            }
            cl.c.pissface = name.replace("eyeliner_", "");
            inv.use("eyeshadow");
            cl.display();
            room27.chatcatch("checkmakeup");
            break;
        case "lipstick_red":
        case "lipstick_pink":
        case "lipstick_purple":
        case "lipstick_blue":
        case "lipstick_black":
            if (daily.get("lipstick"))
                levels.mod("makeup", 2);
            else {
                levels.mod("makeup", 20);
                daily.set("lipstick");
            }
            var lipstickcolor = name.replace("lipstick_", "")
            cl.c.lipstick = lipstickcolor;
            inv.use(lipstickcolor + "l");
            cl.display();
            room27.chatcatch("checkmakeup");
            break;
        case "save":
            gv.set("lipstick", cl.c.lipstick);
            gv.set("eyeliner", cl.c.pissface);
            gv.set("makeupx", cl.c.makeup);
            g.popUpNotice("Current makeup saved");
            break;
        case "load":
            var qqlipstick = gv.get("lipstick");
            var qqeyeliner = gv.get("eyeliner");
            var qqmakeup = gv.get("makeupx");
            if (qqmakeup !== "n") {
                if (inv.has("makeup")) {
                    if (daily.get("makeup"))
                        levels.mod("makeup", 2);
                    else {
                        levels.mod("makeup", 20);
                        daily.set("makeup");
                    }
                    cl.c.makeup = qqmakeup;
                    inv.use("makeup");
                }
                else {
                    g.popUpNotice("You're out of makeup. ");
                }
            }
            else
                cl.c.makeup = "n";

            if (qqeyeliner !== null) {
                if (inv.has("eyeshadow")) {
                    if (daily.get("eyeshadow"))
                        levels.mod("makeup", 2);
                    else {
                        levels.mod("makeup", 20);
                        daily.set("eyeshadow");
                    }
                    cl.c.pissface = qqeyeliner;
                    inv.use("eyeshadow");
                }
                else {
                    g.popUpNotice("You're out of eye shadow. ");
                }
            }
            else {
                cl.c.pissface = null;
            }

            if (qqlipstick !== null) {
                if (inv.has(qqlipstick + "l")) {
                    if (daily.get("lipstick"))
                        levels.mod("makeup", 2);
                    else {
                        levels.mod("makeup", 20);
                        daily.set("lipstick");
                    }
                    cl.c.lipstick = qqlipstick;
                    inv.use(qqlipstick + "l");
                }
                else {
                    g.popUpNotice("You're out of " + qqlipstick + " lipstick. ");
                }
            }
            else {
                cl.c.lipstick = null;
            }
            g.popUpNotice("You put on your makeup");
            char.room(27);
            break;
        case "clear":
            nav.killall();
            zcl.displayMirror();
            break;
        default:
            break;
    }
};

room27.chatcatch = function (callback) {
    let makeuplevel = levels.get("makeup").l;
    makeuplevel = 10;
    switch (callback) {
        case "return":
            if (g.pass > -1)
                char.room(g.pass);
            else
                char.room(24);
            break;
        case "makeup":
            if (inv.has("makeup") || g.pass === 57) {
                sc.select("makeup_natural", "27_mirror/icon_natural.png", 5);
                if (makeuplevel > 0 || g.pass === 170)
                    sc.select("makeup_blush", "27_mirror/icon_blush.png", 6);
                if (makeuplevel > 1)
                    sc.select("makeup_blushheavy", "27_mirror/icon_blushheavy.png", 7);
                if (makeuplevel > 2)
                    sc.select("makeup_clown", "27_mirror/icon_clown.png", 8);
                if (makeuplevel > 3)
                    sc.select("makeup_brown", "27_mirror/icon_brown.png", 9);
                if (makeuplevel > 4)
                    sc.select("makeup_orange", "27_mirror/icon_orange.png", 10);
                if (makeuplevel > 5)
                    sc.select("makeup_white", "27_mirror/icon_white.png", 11);
                sc.selectCancel("menu", 13);
            }
            else
                chat(1, 27);
            break;
        case "eyeliner":
            if (makeuplevel > 2) {
                if (inv.get("eyeshadow").count < 1) {
                    chat(28, 27);
                }
                else {
                    sc.select("eyeliner_light", "27_mirror/icon_eye_light.png", 5);
                    sc.select("eyeliner_black", "27_mirror/icon_eye_black.png", 6);
                    sc.select("eyeliner_purple", "27_mirror/icon_eye_purple.png", 7);
                    sc.select("eyeliner_pink", "27_mirror/icon_eye_pink.png", 8);
                    sc.select("eyeliner_green", "27_mirror/icon_eye_green.png", 9);
                    sc.select("eyeliner_blue", "27_mirror/icon_eye_blue.png", 10);
                    sc.select("eyeliner_rainbow", "27_mirror/icon_eye_rainbow.png", 11);
                    sc.selectCancel("menu", 13);
                }
            }
            else {
                chat(29, 27);
            }

            break;
        case "lipstick":
            if (inv.has("redl"))
                sc.select("lipstick_red", "27_mirror/icon_lipstick_red.png", 7);
            if (inv.has("pinkl"))
                sc.select("lipstick_pink", "27_mirror/icon_lipstick_pink.png", 8);
            if (inv.has("purplel"))
                sc.select("lipstick_purple", "27_mirror/icon_lipstick_purple.png", 9);
            if (inv.has("bluel"))
                sc.select("lipstick_blue", "27_mirror/icon_lipstick_blue.png", 10);
            if (inv.has("blackl"))
                sc.select("lipstick_black", "27_mirror/icon_lipstick_black.png", 11);
            sc.selectCancel("menu", 13);
            break;
        case "wash":
            cl.clean("face");
            zcl.displayMirror();
            break;
        case "light":
            cl.c.makeup = "lb";
            inv.use("makeup");
            zcl.displayMirror();
            nav.killbutton("tif");
            nav.button({
                "type": "img",
                "name": "tif",
                "left": 0,
                "top": 0,
                "width": 1547,
                "height": 1080,
                "image": "27_mirror/tif.png"
            }, 12);
            break;
        case "red":
        case "purple":
        case "pink":
        case "black":
            cl.c.lipstick = callback;
            cl.display();
            zcl.displayMirror();
            inv.use(callback + "l");
            if (g.pass === -1) {
                nav.killbutton("tif");
                nav.button({
                    "type": "img",
                    "name": "tif",
                    "left": 0,
                    "top": 0,
                    "width": 1547,
                    "height": 1080,
                    "image": "27_mirror/tif.png"
                }, 12);
            }
            break;
        case "tifKey":
            inv.add("reddoor");
            nav.button({
                "type": "img",
                "name": "reddoor",
                "left": 655,
                "top": 218,
                "width": 635,
                "height": 479,
                "image": "53_candy/reddoor.png"
            }, 53);
            break;
        case "killkey":
            nav.killbutton("reddoor");
            break;
        case "incTif":
            sc.setstep("tiffany", 19);
            sc.setstep("me", -5);
            sc.setstep("me", -12);
            daily.set("tif");
            break;
        case "killtif":
            char.addtime(90);
            char.room(57);
            break;
        case "lb":
        case "mb":
        case "hb":
        case "lp":
        case "mp":
        case "hp":
            inv.use("makeup");
            cl.c.makeup = callback;
            cl.display();
            zcl.displayMirror();
            if (g.pass === -2) {
                nav.killbutton("tif");
                nav.button({
                    "type": "img",
                    "name": "tif",
                    "left": 0,
                    "top": 0,
                    "width": 1547,
                    "height": 1080,
                    "image": "27_mirror/tif.png"
                }, 27);
                chat(24, 27);
            }
            else if (g.pass === 57)
                chat(19, 27);
            else
                chat(20, 27);
            break;
        case "nextLesson":
            gv.mod("makeup", 1);
            var mk = gv.get("makeup");
            if (mk < 2)
                chat(23, 27);
            else if (mk < 4)
                chat(25, 27);
            else
                chat(26, 27);
            break;
        case "checkem":
            nav.bg("27_mirror/charDisplay.jpg");
            char.changeMenu("hide", false, true);
            var c = cl.appearanceClothes();
            var b = cl.appearanceBody();
            var bcTotal = c.totalPoints + b.totalPoints;
            var bcEarned = c.earnedPoints + b.earnedPoints;
            var tw = cl.appearance();

            zcl.displayMain(100, 1380, .1, "", false);
            
            var top = 100;
            for (i = 0; i < c.ps.length; i++) {
                nav.button({
                    "type": "img",
                    "name": "x",
                    "left": 100,
                    "top": top,
                    "width": 80,
                    "height": 80,
                    "image": "8_wardrobe/icons/" + c.ps[i].image
                }, 27);
                nav.t({
                    type: "img",
                    name: "x",
                    left: 200,
                    top: top + 10,
                    font: 20,
                    hex: "#ffffff",
                    text: c.ps[i].n.capitalize() + ": " + c.ps[i].an + " [" + c.ps[i].earned + "/" + c.ps[i].total + "]"
                }, 27);
                $('#room-buttons').append('<div style="background:#ccc; ' + g.makeCss(20, 200, top + 50, 200) + ' position:absolute; border-radius:50px;"></div>');
                $('#room-buttons').append('<div style="background:#b51db0; ' + g.makeCss(20, 200 * (c.ps[i].earned / c.ps[i].total), top + 50, 200) + ' position:absolute; border-radius:50px;"></div>');
                top += 100;
            }
            top = 100;
            for (i = 0; i < b.ps.length; i++) {
                nav.t({
                    type: "img",
                    name: "x",
                    left: 660,
                    top: top + 10,
                    font: 20,
                    hex: "#ffffff",
                    text: b.ps[i].n.capitalize() + " [" + b.ps[i].earned + "/" + b.ps[i].total + "]"
                }, 27);
                
                $('#room-buttons').append('<div style="background:#ccc; ' + g.makeCss(20, 200, top + 50, 660) + ' position:absolute; border-radius:50px;"></div>');
                $('#room-buttons').append('<div style="background:#b51db0; ' + g.makeCss(20, 200 * (b.ps[i].earned / b.ps[i].total), top + 50, 660) + ' position:absolute; border-radius:50px;"></div>');
                top += 100;
            }
            
            nav.button({
                "type": "btn",
                "name": "closeView",
                "left": 1600,
                "top": 900,
                "width": 200,
                "height": 50,
                "image": "27_mirror/close.png"
            }, 27);
            var bottomUp = 900 * (bcEarned / bcTotal);
            //$('#room-buttons').append('<div style="background:#ccc; ' + g.makeCss(900, 20, 100, 1000) + ' position:absolute; border-radius:50px;"></div>');
            //$('#room-buttons').append('<div style="background:#b51db0; ' + g.makeCss(bottomUp, 20, 100 + 900 - bottomUp, 1000) + ' position:absolute; border-radius:50px;"></div>');
            nav.t({
                type: "img",
                name: "x",
                left: 600,
                top: 850,
                font: 40,
                hex: "#ffffff",
                text: "Your Points: " + bcEarned 
            }, 27);
            if (cl.isLewd()) {
                nav.t({
                    type: "img",
                    name: "x",
                    left: 620,
                    top: 900,
                    font: 40,
                    hex: "#faa7f7",
                    text: "Lewd Bonus!!"
                }, 27);
            }
            for (i = 0; i < cl.set.length; i++) {
                top = 850 - (i * 120);
                var tempPointText = cl.set[i].p === -1 ? 0 : (cl.set[i].p > 1300 ? "Lewd" : cl.set[i].p);
                nav.t({
                    type: "img",
                    name: "x",
                    left: 1100,
                    top: top + (cl.set[i].entry === tw ? 10 : 30),
                    font: cl.set[i].entry === tw ? 40 : 20,
                    hex: cl.set[i].entry === tw ? "#ffffff" : "#666666",
                    text: cl.set[i].name + "<br/>[" + tempPointText + "]"
                }, 27);
                nav.button({
                    "type": "img",
                    "name": "x",
                    "left": 980,
                    "top": top,
                    "width": 110,
                    "height": 110,
                    "image": "../stat/" + cl.set[i].entry + (cl.set[i].entry === tw ? "_75.png" : "_0.png")
                }, 27);
            }
            break;
        case "killReset":
            nav.killall();
            nav.bg("27_mirror/727.jpg");
            zcl.displayMirror();
            break;
        case "checkmakeup":
            if (qdress.st[5].ach || g.pass === 170) {
                nav.killall();
                zcl.displayMirror();
                sc.select("makeup", "27_mirror/icon_makeup.png", 6);
                sc.select("lipstick", "27_mirror/icon_lipstick.png", 7);
                sc.select("eyeshadow", "27_mirror/icon_eyeshadow.png", 8);
                sc.select("wash", "27_mirror/icon_wash.png", 9);
                sc.select("save", "27_mirror/icon_save.png", 10);
                sc.select("load", "27_mirror/icon_load.png", 11);
                sc.selectCancel("reset", 13)
            }
            else
                chat(31, 27);
            break;
       
        default:
            break;
    }
};

room27.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Hey good looking",
            button: [
                { chatID: -1, text: "Makeup", callback: "checkmakeup" },
                { chatID: 0, text: "Wash face", callback: "wash" },
                { chatID: -1, text: "Check Self", callback: "checkem" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I don't have any makeup.",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't have any lipstick.",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "My Face is all clean.",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 4,
            speaker: "tiffany",
            text: "So I'm going to teach you how to put on makeup! Since this is your first time I'm going to teach you how to put " +
            "on light makeup. Ready?",
            button: [
                { chatID: 5, text: "Ready", callback: "light" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "OOoooo there, aren't you a pretty girl!",
            button: [
                { chatID: 6, text: "I really am.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "tiffany",
            text: "Next is your lipstick. I'm going to make your lips so so so pretty. All the girls will be jealous of your pretty mouth. " +
            "What color do you want to make your lips?",
            button: [
                { chatID: 7, text: "Red", callback: "red" },
                { chatID: 7, text: "Purple", callback: "purple" },
                { chatID: 7, text: "Pink", callback: "pink" },
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "That's such a pretty color on you. All the girls want your pretty lips!",
            button: [
                { chatID: 8, text: "I'm so pretty", callback: "tifKey" }
            ]
        },
        {
            chatID: 8,
            speaker: "tiffany",
            text: "I'm going to give you the key to the Pussy Palace. Feel free to use it anytime you want. Careful the webcam is always " +
                "on, so everything you do in here is broadcasted to thousands of horny perverts. Haha, they can even watch you put on " +
            "you pretty makeup! Say hi to everyone out there!",
            button: [
                { chatID: 9, text: "What... I'm on camera?", callback: "killkey" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Don't be such a prude! " + sc.n("candy") + " and I use it to make some extra money, and thousands of perverted men " +
            "jack off to us. They absolutely love watching us fuck each other. ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "tiffany",
            text: "Oh hey! If you need some extra money you can play on our stream. Any money you earn you get to keep! If you ever " +
            "want to join our stream we do a show at 5PM most days. Our fans would love to watch you fuck us!",
            button: [
                { chatID: 11, text: "oh sweet!", callback: "incTif" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "I'm going to go back to playing with my pussy. It relaxes me and helps me sleep. If you ever want more makeup lessons " +
            "stop by my room sexy girl.",
            button: [
                { chatID: -1, text: "Thanks!", callback: "killtif" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "Oh nice, I have all of " + sc.n("tiffany") + "'s and " + sc.n("candy") + "'s makeup.",
            button: [
                { chatID: -1, text: "Apply Makeup", callback: "makeup" },
                { chatID: 21, text: "Apply Lipstick", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "I need to get with " + sc.n("tiffany") + " and learn how improve my makeup skills.",
            button: [
                { chatID: 16, text: "Apply Light Makeup", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "I need to get with " + sc.n("tiffany") + " some more and learn more tips!",
            button: [
                { chatID: 16, text: "Apply Light Makeup", callback: "" },
                { chatID: 17, text: "Apply Normal Makeup", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "How shall I paint my pretty face?",
            button: [
                { chatID: 16, text: "Apply Light Makeup", callback: "" },
                { chatID: 17, text: "Apply Normal Makeup", callback: "" },
                { chatID: 18, text: "Apply Bimbo Makeup", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "What color of light makeup should I choose?",
            button: [
                { chatID: -1, text: "Black", callback: "lb" },
                { chatID: -1, text: "Purple", callback: "lp" }
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "What color of makeup should I choose?",
            button: [
                { chatID: -1, text: "Black", callback: "mb" },
                { chatID: -1, text: "Purple", callback: "mp" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "What color of bimbo makeup should I choose?",
            button: [
                { chatID: -1, text: "Black", callback: "hb" },
                { chatID: -1, text: "Purple", callback: "hp" }
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "Such a pretty girl.",
            button: [
                { chatID: 12, text: "Do something else.", callback: "" },
                { chatID: -1, text: "Leave", callback: "return" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "Such a pretty girl.",
            button: [
                { chatID: 0, text: "Do something else.", callback: "" },
                { chatID: -1, text: "Leave", callback: "return" }
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "Make your lips pretty.",
            button: g.internal
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "Ready to continue our lessons?",
            button: [
                { chatID: -1, text: "Yes make me a pretty girl", callback: "nextLesson" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "You're still not ready for a regular makeup, we're still going to go over light makeup. Ready? ",
            button: [
                { chatID: -1, text: "Yes, please put makeup on my face.", callback: "lb" }
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "You really are a pretty girl. ",
            button: [
                { chatID: -1, text: "Thank you " + sc.n("tiffany") + ".", callback: "killtif" }
            ]
        },
        {
            chatID: 25,
            speaker: "tiffany",
            text: "You're really coming along in your makeup training. Some more lessons and I'll show you how to put on Bimbo makeup!",
            button: [
                { chatID: -1, text: "Oh nice.", callback: "mb" }
            ]
        },
        {
            chatID: 26,
            speaker: "tiffany",
            text: "Now you're a true bimbo! You've learned all I have to teach.",
            button: [
                { chatID: -1, text: "I am a stupid bimbo!", callback: "hb" }
            ]
        },
        {
            chatID: 27,
            speaker: "me",
            text: " ",
            button: [
                { chatID: 0, text: "Do something else", callback: "killReset" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "I need to buy a new eye shadow kit. ",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "I'm not ready to put on eye shadow. [Need Makeup level 3]",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },
                { chatID: -1, text: "Finish", callback: "return" }
            ]
        },
        {
            chatID: 30,
            speaker: "thinking",
            text: "Which should I do?",
            button: [
                { chatID: -1, text: "Makeup", callback: "makeup" },
                { chatID: -1, text: "Lipstick", callback: "lipstick" },
                { chatID: -1, text: "Eyeliner", callback: "eyeliner" },
                { chatID: 30, text: "Set current makeup as default", callback: "default" },
                { chatID: 0, text: "Do something else", callback: "" },

            ]
        },
        {
            chatID: 30,
            speaker: "thinking",
            text: "I don't feel comfortanble putting on makeup. [Need to unlock make]",
            button: [
                { chatID: 0, text: "Do something else", callback: "" },

            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
