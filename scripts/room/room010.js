//bedroom
var room10 = {};
room10.main = function () {
    if (inv.has("tifgift")) {
        chat(36, 10);
    }
    else if (cl.c.cock === 5 && !gv.get("playWithPussy")) {
        gv.set("playWithPussy", true);
        invoker.invokeCurrent("btnclick", "drawRoom");
        chat(47, 10);
        return;
    }
    else {
        $('.room-topper').show();
        invoker.invokeCurrent("btnclick", "drawRoom");
        var navList = [];
        var missingClothing = cl.hasoutfit("public");

        if (missingClothing === null) {
            navList.push(11);
            navList.push(16);
            var hour = g.dt.getHours();
            var cat = gv.get("cat");
            if (hour.between(6, 21))
                navList.push(0);
            if (cat === 1 || cat === 2) {
                nav.button({
                    "type": "btn",
                    "name": "cat",
                    "left": 1334,
                    "top": 775,
                    "width": 136,
                    "height": 233,
                    "image": "10_mainchar/cat.png"
                }, 10);
            }
            let weekday = [1, 2, 3, 4, 5];
            if (missy.get("totalDaysWorked") > 1 && g.hourBetween(7, 10) && weekday.includes(g.dt.getDay()))
                navList.push(203);
        }
        else {
            g.internal = missingClothing;
            chat(999, 10);
        }

        nav.buildnav(navList);
    }
};

room10.btnclick = function (name) {
    switch (name) {
        case "drawRoom":
            nav.bg("10_mainchar/10_bedroom.png", "10_mainchar/10_bedroomNight.png");
            var mr_paint10 = gv.get("mr_paint");
            var mr_poster_l10 = gv.get("mr_poster_l");
            var mr_poster_r10 = gv.get("mr_poster_r");
            var mr_bed10 = gv.get("mr_bed");
            var mr_rug10 = gv.get("mr_rug");
            if (mr_bed10 === "mr_blueblanket" || mr_bed10 === null) {
                mr_bed10 = "10_bed";
            }
            if (mr_paint10 !== "mr_blue" || mr_poster_l10 !== null || mr_poster_r10 !== null) {
                nav.button({
                    "type": "img",
                    "name": "room_paint",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "10_mainchar/" + mr_paint10 + ".webp",
                    "night": "10_mainchar/" + mr_paint10 + "_night.webp"
                }, 10);
            }
            if (!(mr_rug10 === null || mr_rug10 === "mr_rugblue")) {
                nav.button({
                    "type": "img",
                    "name": "room_rug",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "10_mainchar/" + mr_rug10 + ".webp",
                    "night": "10_mainchar/" + mr_rug10 + "_night.webp"
                }, 10);
            }
            if (mr_poster_l10 !== null) {
                nav.button({
                    "type": "img",
                    "name": "room_pic_l",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "10_mainchar/" + mr_poster_l10 + "_l.webp",
                }, 10);
            }
            if (mr_poster_r10 !== null) {
                nav.button({
                    "type": "img",
                    "name": "room_pic_r",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "10_mainchar/" + mr_poster_r10 + "_r.webp",
                }, 10);
            }
            nav.button({
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "10_mainchar/10_wardrobe.png",
                "night": "10_mainchar/10_wardrobeNight.png"
            }, 10);

            nav.button({
                "type": "btn",
                "name": "Bed",
                "left": 514,
                "top": 531,
                "width": 547,
                "height": 401,
                "title": "Sleep",
                "image": "10_mainchar/" + mr_bed10 + ".png",
                "night": "10_mainchar/" + mr_bed10 + "Night.png"
            }, 10);

            if (gv.get("jobapplyconst") === 0) {
                nav.button({
                    "type": "btn",
                    "name": "computer",
                    "left": 1233,
                    "top": 469,
                    "width": 202,
                    "height": 115,
                    "title": "Use your computer",
                    "image": "10_mainchar/10_computerApply.png",
                }, 10);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "computer",
                    "left": 1233,
                    "top": 469,
                    "width": 202,
                    "height": 115,
                    "title": "Use your computer",
                    "image": "10_mainchar/10_computer.png",
                    "night": "10_mainchar/10_computerNight.png"
                }, 10);

            }
            if (sc.getTimeline("lola").thisRoom) {
                if (sc.getMissionTask("lola", "*wife", 1).complete && (g.hourBetween(22, 25) || g.hourBetween(0, 7))) {
                    nav.modbutton("Bed", "10_mainchar/10_bedNight_lola.png", "lolabed", null);
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "lola",
                        "left": 280,
                        "top": 160,
                        "width": 309,
                        "height": 920,
                        "image": "10_mainchar/lola.webp",
                    }, 10);
                }
            }
            else {
                if (gv.get("sissySchoolClass") === "anal102" || gv.get("sissySchoolClass") === "oral101") {
                    nav.button({
                        "type": "btn",
                        "name": "nightStand",
                        "left": 373,
                        "top": 604,
                        "width": 137,
                        "height": 197,
                        "title": "Toybox - play with your dildos (if you have them)",
                        "image": "10_mainchar/nightstandPracticeDay.png",
                        "night": "10_mainchar/nightstandPracticeNight.png"
                    }, 10);
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "nightStand",
                        "left": 373,
                        "top": 604,
                        "width": 137,
                        "height": 197,
                        "title": "Toybox - play with your dildos (if you have them)",
                        "image": "10_mainchar/10_nightstand.png",
                        "night": "10_mainchar/10_nightstandNight.png"
                    }, 10);
                }

                if (levels.get("cheer").l > 0) {
                    nav.button({
                        "type": "btn",
                        "name": "cheerleader",
                        "left": 1033,
                        "top": 86,
                        "width": 236,
                        "height": 251,
                        "title": "Practice Cheerleading",
                        "image": "10_mainchar/cheerleader.png",
                    }, 10);
                }
                let shoeLevels = levels.get("heels").l < 8;
                if (sissy.st[16].ach && !daily.get("practiceHeels") && shoeLevels) {
                    nav.button({
                        "type": "btn",
                        "name": "heels",
                        "left": 783,
                        "top": 86,
                        "width": 236,
                        "height": 251,
                        "title": "Practice Walking in heels",
                        "image": "10_mainchar/heels.png",
                    }, 10);
                }
            }

            break;
        case "computer":
            g.pass = 10;
            char.room(9);
            break;
        case "Bed":
            chat(0, 10);
            break;
        case "wardrobe":
            g.pass = 10;
            char.room(8);
            break;
        case "nightStand":
            g.pass = 10;
            char.room(19);
            break;
        case "lolabed":
            nav.kill();
            nav.bg("10_mainchar/lola_sleep0.webp");
            nav.button({
                "type": "grab",
                "name": "lola_sleep1",
                "left": 0,
                "top": 438,
                "width": 1650,
                "height": 642,
                "image": "10_mainchar/lola_sleep1.webp",
            }, 10);
            sc.select("sleep", "328_farm/icon_sleep.webp", 0);
            sc.selectCancel("reset", 1);
            break;
        case "sleep":
            invoker.invokeCurrent("chatcatch", "nap_sleep");
            break;
        case "lola_sleep1":
            nav.kill();
            nav.bg("10_mainchar/lola_sleep2.webp");
            nav.button({
                "type": "grab",
                "name": "lola_sleep2",
                "left": 560,
                "top": 450,
                "width": 288,
                "height": 563,
                "image": "10_mainchar/lola_sleep2Panties.webp",
            }, 10);
            break;
        case "lola_sleep2":
            nav.killbutton("lola_sleep2");
            if (cl.c.chastity !== null) {
                sc.select("sleep", "328_farm/icon_sleep.webp", 0);
                sc.selectCancel("reset", 1);
                chat(68, 10);
            }
            else if (cl.c.cock === 5) {
                if (inv.has("straponSmall")) {
                    chat(70, 10)
                }
                else {
                    sc.select("sleep", "328_farm/icon_sleep.webp", 0);
                    sc.selectCancel("reset", 1);
                    chat(69, 10);
                }
            }
            else {
                chat(71, 10);
            }
            break;
        case "lola":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 1058,
                "top": 32,
                "width": 415,
                "height": 1048,
                "image": "10_mainchar/lola1.webp",
            }, 10);
            switch (sc.taskGetStep("lola", "*wife")) {
                case 1:
                    sc.completeMissionTask("lola", "*wife", 1);
                    chat(48, 10);
                    break;
                default:
                    chat(800, 10);
                    break;
            }
            break;
        case "cat":
            if (gv.get("cat") === 1) {
                gv.set("cat", 2);
                chat(38, 10);
            }
            else {
                nav.killall();
                nav.bg("10_mainchar/petcat.jpg", "10_mainchar/petcatnight.jpg");
                if (!daily.get("petcat")) {
                    gv.mod("energy", 1000);
                    daily.set("petcat");
                }
                chat(39, 10);
            }
            break;
        case "cheerleader":
            if (gv.get("energy") < 51)
                chat(41, 10);
            else {
                switch (levels.get("cheer").l) {
                    case 1:
                        nav.button({
                            "type": "img",
                            "name": "cheerx",
                            "left": 623,
                            "top": 337,
                            "width": 711,
                            "height": 743,
                            "image": "10_mainchar/cheer1.png"
                        }, 10);
                        chat(40, 10);
                        break;
                    case 2:
                        nav.button({
                            "type": "img",
                            "name": "cheerx",
                            "left": 641,
                            "top": 272,
                            "width": 503,
                            "height": 808,
                            "image": "10_mainchar/cheer2.png"
                        }, 10);
                        chat(42, 10);
                        break;
                    case 3:
                    case 5:
                    case 6:
                        nav.button({
                            "type": "img",
                            "name": "cheerx",
                            "left": 641,
                            "top": 272,
                            "width": 503,
                            "height": 808,
                            "image": "10_mainchar/cheer3.png"
                        }, 10);
                        chat(43, 10);
                        break;
                    case 4:
                        nav.button({
                            "type": "img",
                            "name": "cheerx",
                            "left": 641,
                            "top": 272,
                            "width": 503,
                            "height": 808,
                            "image": "10_mainchar/cheer3.png"
                        }, 10);
                        chat(44, 10);
                        break;
                    default:
                        nav.button({
                            "type": "img",
                            "name": "cheerx",
                            "left": 641,
                            "top": 272,
                            "width": 503,
                            "height": 808,
                            "image": "10_mainchar/cheer3.png"
                        }, 10);
                        chat(45, 10);
                        break;
                }
            }
            break;
        case "heels":
            var shoeDaring = cl.getEntry("shoes", cl.c.shoes).daring;
            if (shoeDaring > 1) {
                nav.killall();
                daily.set("practiceHeels");
                invoker.invokeCurrent("btnclick", "drawRoom");
                $('#room-buttons .rom-event').addClass('click-thru');
                nav.button({
                    "type": "img",
                    "name": "heels",
                    "left": 614,
                    "top": 401,
                    "width": 848,
                    "height": 679,
                    "image": "10_mainchar/heels0.webp"
                }, 10);
                levels.mod("heels", shoeDaring * 10);
                nav.back("reset");
            }
            else {
                levels.mod("pi", -10);
                chat(46, 10);
            }
            break;
        case "lola_lick":
            if (g.internal > 4) {
                levels.oral(3, "f", "lola");
                nav.kill();
                nav.bg("10_mainchar/10_bedroom.png", "10_mainchar/10_bedroomNight.png");
                nav.button({
                    "type": "img",
                    "name": "lola",
                    "left": 1058,
                    "top": 32,
                    "width": 415,
                    "height": 1048,
                    "image": "10_mainchar/lola1_nude.webp",
                }, 10);
                chat(56, 10);
            }
            else {
                nav.bg("10_mainchar/lola_lick" + g.internal + ".webp");
                g.internal++;
            }
            break;
        case "lola_fuck":
            if (g.internal > 8) {
                nav.kill();
                nav.bg("10_mainchar/lola_fuck3.webp");
                levels.fuckpussy("lola", "f");
                chat(67, 10);
            }
            else {
                nav.bg("10_mainchar/lola_fuck" + ((g.internal % 2) + 1) + ".webp");
                g.internal++;
            }
            break;
        case "reset":
            char.room(10);
            break;
        default:
            break;
    }
};

room10.chatcatch = function (callback) {
    switch (callback) {
        case "pussy0":
        case "pussy1":
        case "pussy2":
        case "pussy3":
        case "pussy4":
        case "pussy5":
            nav.kill();
            nav.bg("10_mainchar/" + callback + ".webp");
            break;
        case "nap_1hour":
            char.addtime(60);
            char.room(10);
            break;
        case "nap_3hour":
            char.addtime(180);
            char.room(10);
            break;
        case "nap_5hour":
            char.addtime(300);
            char.room(10);
            break;
        case "nap_5pm":
            char.settime(17, 0);
            char.room(10);
            break;
        case "nap_10pm":
            char.settime(22, 0);
            char.room(10);
            break;
        case "nap_sleep":
            g.pass = 7;
            char.room(28);
            break;
        case "kickOut1":
            g.pass = 10;
            g.internal = "kickOutTorD";
            char.room(8);
            break;
        case "kickOut2":
            g.roomMapAccess(16, false, false);
            char.room(0);
            break;
        case "newday":
            char.room(7);
            break;
        case "evaYell":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/evaYell.png"
            }, 10);
            break;
        case "lolaYell":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/lolaYell.png"
            }, 10);
            break;
        case "bothSmile":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/bothSmile.png"
            }, 10);
            break;
        case "holdPanties":
            nav.killbutton("yell");
            nav.button({
                "type": "img",
                "name": "yell",
                "left": 408,
                "top": 0,
                "width": 1468,
                "height": 1080,
                "image": "10_mainchar/panties.png"
            }, 10);
            break;
        case "getPanties":
            nav.killall();
            nav.bg("10_mainchar/bedroomStand.jpg");
            g.internal = "room10Underwear";
            nav.button({
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "10_mainchar/10_wardrobe.png"
            }, 10);
            break;
        case "shirtTakeOff":
            nav.killall();
            cl.c.shoes = cl.c.socks = cl.c.bra = cl.c.shirt = cl.c.dress = cl.c.swimsuit = cl.c.pj = cl.c.pants = null;
            cl.c.panties = "w";
            cl.display();
            nav.bg("10_mainchar/writing.jpg");
            break;
        case "shirtTakeOff1":
            nav.bg("10_mainchar/writing1.jpg");
            break;
        case "showerOff":
            cl.remove("panties", "u");
            cl.remove("panties", "n");
            pic.add("pantyThief");
            sc.setstep("lola", -1);
            char.addtime(60);
            g.internal = "";
            g.pass = "";
            $.each(cl.saveOutfit, function (i, v) {
                if (i !== 4)
                    cl.saveOutfit[i].panties = "w";
            });
            nav.room(10);
            break;
        case "openbag":
            nav.button({
                "type": "img",
                "name": "newClothing",
                "left": 905,
                "top": 183,
                "width": 423,
                "height": 646,
                "image": "502_bedroom/newClothing.png"
            }, 10);
            break;
        case "endbag":
            cl.add("shirt", "r");
            cl.add("pants", "k");
            cl.add("shoes", "fb");
            inv.update("tifgift", false, null);
            gv.mod("arousal", 20);
            missy.set("uniformNew", 2);
            char.room(10);
            break;
        case "petcat":
            nav.killall();
            nav.bg("10_mainchar/petcat.jpg", "10_mainchar/petcatnight.jpg");
            gv.mod("energy", 1000);
            break;
        case "reset":
            char.room(10);
            break;
        case "cheerReset":
            gv.mod("energy", -51);
            levels.mod("cheer", 32);
            nav.killbutton("cheerx");
            char.addtime(60);
            break;
        case "lola1":
            cl.nude();
            zcl.displayMain(-500, -100, .4, "", true);
            if (cl.c.chastity !== null) {
                nav.modbutton("lola", "10_mainchar/lola1_sad.webp", null, null);
                chat(50, 10);
            }
            else if (cl.c.cock === 5) {
                nav.modbutton("lola", "10_mainchar/lola1_sad.webp", null, null);
                chat(51, 10);
            }
            else {
                chat(65, 10);
            }
            break;
        case "lola2":
            nav.modbutton("lola", "10_mainchar/lola1_nude.webp", null, null);
            break;
        case "lola_lick":
            nav.kill();
            nav.bg("10_mainchar/lola_lick.webp");
            g.internal = 1;
            nav.button({
                "type": "tongue",
                "name": "lola_lick",
                "left": 888,
                "top": 424,
                "width": 152,
                "height": 152,
                "image": "10_mainchar/lola_lick_hole.webp"
            }, 10);
            break;
        case "lola_fuck":
            nav.kill();
            nav.bg("10_mainchar/lola_fuck0.webp");
            break;
        case "lola_fuck1":
            g.internal = 2;
            nav.next("lola_fuck");
            break;
        case "displaypair":
            nav.kill();
            zcl.displayMain(0, 400, .25, "clothes", false);
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 1058,
                "top": 32,
                "width": 415,
                "height": 1048,
                "image": "10_mainchar/lola1_nude.webp",
            }, 10);
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 688,
                "top": 0,
                "width": 820,
                "height": 1080,
                "image": "10_mainchar/lola_ll.webp",
            }, 10);
            break;
        case "lola_lick5":
            nav.kill();
            nav.bg("10_mainchar/lola_lick5_bg.webp");
            zcl.legsup(-1040, 80, 1, "", true);
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "10_mainchar/lola_lick5.webp",
            }, 10);
            break;
        case "lola_lick6":
        case "lola_lick7":
        case "lola_lick8":
        case "lola_lick9":
        case "lola_lick10":
            nav.modbutton("lola", "10_mainchar/" + callback + ".webp", null, null);
            break;
        case "lola_lick11":
            levels.gotbj("f", "lola");
            char.addtime(90);
            char.room(10);
            break;
        case "lola_sleep3":
            nav.kill();
            nav.bg("10_mainchar/lola_sleep3_" + (cl.c.cock === 5 ? "f" : "m") + ".webp");
            break;
        case "lola_sleep4":
            nav.bg("10_mainchar/lola_sleep4_" + (cl.c.cock === 5 ? "f" : "m") + ".webp");
            break;
        case "lola_sleep5":
            levels.fuckpussy("lola", "f");
            nav.bg("10_mainchar/lola_sleep5_" + (cl.c.cock === 5 ? "f" : "m") + ".webp");
            break;
        case "lola_sleep_end":
            g.pass = -7;
            char.room(28);
            break;
        case "pussy6":
            nav.bg("10_mainchar/10_bedroom.png", "10_mainchar/10_bedroomNight.png");
            zcl.legsup(450, 650, .14, "", true);
            nav.button({
                "type": "img",
                "name": "lola",
                "left": 933,
                "top": 0,
                "width": 524,
                "height": 1080,
                "image": "10_mainchar/pussy_m.webp",
            }, 10);
            gv.mod("masturbate_pussy", 1);
            break;
        default:
            break;
    }
};

room10.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "thinking",
            text: "Before I leave I need to get dressed. <span class='hl'>I'm missing my " + g.internal + ".</span>",
            button: []
        };
    }
    else if (chatID === 998) {
        return {
            chatID: 998,
            speaker: "thinking",
            text: "I can't go out like this! <span class='hl'>I'm missing my " + g.pass + ".</span>",
            button: [{ chatID: -1, text: "Get Dressed.. again", callback: "kickOut1" }]
        };
    }
    else if (chatID === 800) {
        char.addtime(15);
        let lolatalk = [
            "I can't wait until we get married. It will be so amazing!",
            "You and I will be together forever. ",
            "I wonder if it's a little boy or girl. I told them we want to be surprised. ",
            "If it's a girl I'm going to name her Delilah after our great grandma. If it's a boy you can name him. Hehe",
            "ooof! My feet hurt, like all the time now. You have no idea. ",
            "So excited for our first. I think I want to have three kids. Maybe more. I don't know. Hmmm. Maybe four.",
            "You're going to make such a great daddy. I can't wait to see you play with our new little one at the playground!",
            "So tired all the time. ugh. "
        ];
        return {
            chatID: 998,
            speaker: "lola",
            text: lolatalk[g.rand(0, lolatalk.length)],
            button: [{ chatID: -1, text: "[Chat for a bit about your futures]", callback: "reset" }]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "Sleep until morning?",
                button: [
                    { chatID: -1, text: "Sleep", callback: "nap_sleep" },
                    { chatID: -1, text: "Cancel", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "me",
                text: "Finished Napping for 1 Hour",
                button: []
            },
            {
                chatID: 2,
                speaker: "me",
                text: "Finished Napping for 3 Hours",
                button: []
            },
            {
                chatID: 3,
                speaker: "me",
                text: "How Long do you want to sleep?",
                button: [
                    { chatID: 1, text: "Nap for 1 hour.", callback: "nap_1hour" },
                    { chatID: -1, text: "Sleep till morning", callback: "nap_sleep" },
                    { chatID: -1, text: "Don't Sleep", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: "A new day!",
                button: []
            },
            {
                chatID: 5,
                speaker: "me",
                text: "Sleep for the night?",
                button: [
                    { chatID: -1, text: "Sleep till morning", callback: "nap_sleep" },
                    { chatID: -1, text: "Don't Sleep", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "",
                button: []
            },
            {
                chatID: 7,
                speaker: "me",
                text: "N/A",
                button: []
            },
            {
                chatID: 8,
                speaker: "me",
                text: "Aaaahh man. I've never seen her that angry before. I'm totally done. Crap, crap, crap.",
                button: [{ chatID: -1, text: "[Get Dressed]", callback: "kickOut1" }]
            },
            {
                chatID: 9,
                speaker: "me",
                text: "I better get all my things. I don't know if she'll let me back in after this.",
                button: [{ chatID: 10, text: "[Pack things]", callback: "" }]
            },
            {
                chatID: 10,
                speaker: "me",
                text: "Where can I stay? I may be able to stay with " + sc.n("zoey") + ", or I'll have to crash at the park tonight. It'll be rough, but just for one night.",
                button: [{ chatID: -1, text: "[Leave]", callback: "kickOut2" }]
            },
            {
                chatID: 11,
                speaker: "me",
                text: "How long to Nap?",
                button: [
                    { chatID: 1, text: "1 Hour", callback: "nap_1hour" },
                    { chatID: 2, text: "3 Hours", callback: "nap_3hour" },
                    { chatID: 2, text: "5 Hours", callback: "nap_5hour" },
                    { chatID: -1, text: "Till 5:00PM", callback: "nap_5pm" },
                    { chatID: -1, text: "Till 10:00PM", callback: "nap_10pm" }
                ]
            },
            {
                chatID: 12,
                speaker: "me",
                text: "Sleep until morning?",
                button: [
                    { chatID: -1, text: "Sleep", callback: "nap_sleep" },
                    { chatID: -1, text: "Mess with " + sc.n("lola"), callback: "lolamolest" },
                    { chatID: -1, text: "Cancel", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "me",
                text: "Oh wow, all that working out has really paid off! I feel so much sexier with this new body!",
                button: [
                    { chatID: -1, text: "....", callback: "newday" }
                ]
            },
            {
                chatID: 14,
                speaker: "me",
                text: "Are those itty bitty tits? I think these pills are changing my body.",
                button: [
                    { chatID: -1, text: "....", callback: "newday" }
                ]
            },
            {
                chatID: 15,
                speaker: "me",
                text: "Oh no... is my penis shrinking?!",
                button: [
                    { chatID: -1, text: "....", callback: "newday" }
                ]
            },
            {
                chatID: 16,
                speaker: "me",
                text: "Hahah nice, bigger titties!",
                button: [
                    { chatID: -1, text: "....", callback: "newday" }
                ]
            },
            {
                chatID: 17,
                speaker: "me",
                text: "Check that ass out! So much to grab.",
                button: [
                    { chatID: -1, text: "....", callback: "newday" }
                ]
            },
            {
                chatID: 18,
                speaker: "lola",
                text: "Hey, I know you have them!",
                button: [
                    { chatID: 19, text: "What?, have what?", callback: "evaYell" }
                ]
            },
            {
                chatID: 19,
                speaker: "eva",
                text: "Don't do that you panty thief! You probably took them to masturbate on you disgusting pervert! ",
                button: [
                    { chatID: 20, text: "No, nonono. " + sc.n("missy") + "'s making me wear panties to work.", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "eva",
                text: "What? why would she do that? ",
                button: [
                    {
                        chatID: 21, text: "I got in trouble on my last job, got caught peeking at a girl so " + sc.n("missy") +
                            "'s making me wear girls panties to work.", callback: "lolaYell"
                    }
                ]
            },
            {
                chatID: 21,
                speaker: "lola",
                text: "Really " + sc.n("me") + "? That's weird. I can't wait to tell me friend Molly about this. ",
                button: [
                    { chatID: 22, text: "OOoohhhh wait. Please, you can't tell anyone!", callback: "evaYell" }
                ]
            },
            {
                chatID: 22,
                speaker: "eva",
                text: "Yes we can. What are you going to do, steal more panties? ",
                button: [
                    { chatID: 23, text: "I promise not to steal any more panties! I'll do what ever you want if your don't tell anyone.", callback: "lolaYell" }
                ]
            },
            {
                chatID: 23,
                speaker: "lola",
                text: "Anything? ",
                button: [
                    { chatID: 24, text: "Anything.", callback: "bothSmile" }
                ]
            },
            {
                chatID: 24,
                speaker: "eva",
                text: "Well, since you like to steal " + sc.n("lola") + "'s panties, we're going to <span style='color:#55ffff'>take your panties, all your boy " +
                    "panties</span> to teach you a lesson!",
                button: [
                    { chatID: 25, text: "Wha...", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "lola",
                text: "YES!!! And we'll write 'panty thief' on your belly! Ooooo and take a picture!!",
                button: [
                    { chatID: 26, text: "No, you're not doing any of that.", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "eva",
                text: "Yes we are! You know if we tell " + sc.n("landlord") + ", she'll kick you out on the spot. You won't even " +
                    "have time to pack your stuff. Now get all your boy panties! ",
                button: [
                    { chatID: 27, text: "ooohh fuck.. ok", callback: "getPanties" }
                ]
            },
            {
                chatID: 27,
                speaker: "eva",
                text: "Now go into that closet and get us all your boy panties. ",
                button: [
                    { chatID: -1, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 28,
                speaker: "eva",
                text: "Nope, that's not all of them, go into the closet put on " + sc.n("lola") +
                    "'s panties and bring us all your boy panties!",
                button: [
                    { chatID: -1, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 29,
                speaker: "eva",
                text: "Hahahah, are you wearing the panties right now? I bet you are, you weirdo. Well, panties for panties, I guess we're even now.",
                button: [
                    { chatID: 30, text: "Yep, totally even", callback: "lolaYell" }
                ]
            },
            {
                chatID: 30,
                speaker: "lola",
                text: "No, you stole my panties! You need to be punished, mister! Now take off your shirt!",
                button: [
                    { chatID: 31, text: "Oh ok.", callback: "shirtTakeOff" }
                ]
            },
            {
                chatID: 31,
                speaker: "lola",
                text: "Haha! I hope this teaches you a lesson never to steal my panties again! ",
                button: [
                    { chatID: 32, text: "It does, I promise neve to steal your panties again. ", callback: "shirtTakeOff1" }
                ]
            },
            {
                chatID: 32,
                speaker: "eva",
                text: "Now for the picture! Smile pretty so we can see what kind of panty thief you are.",
                button: [
                    { chatID: 33, text: "Awww man", callback: "shirtTakeOff" }
                ]
            },
            {
                chatID: 33,
                speaker: "lola",
                text: "Ok, we've got to run. You can go wash up now. Don't take any more of my panties!",
                button: [
                    { chatID: -1, text: "ok", callback: "showerOff" }
                ]
            },
            {
                chatID: 34,
                speaker: "eva",
                text: "UGH! You pervert! We asked for your underwear, not your penis!",
                button: [
                    { chatID: 35, text: "[Smile]", callback: "" }
                ]
            },
            {
                chatID: 35,
                speaker: "lola",
                text: "Oh my, there's subtler ways to get us to see you naked.",
                button: [
                    { chatID: -1, text: "Yes, but this is funny", callback: "" }
                ]
            },
            {
                chatID: 36,
                speaker: "thinking",
                text: "OK! Let's see what " + sc.n("tiffany") + " got for me!",
                button: [
                    { chatID: 37, text: "Open bag!", callback: "openbag" }
                ]
            },
            {
                chatID: 37,
                speaker: "thinking",
                text: "Somehow I knew what I was getting, but I'm still scared to wear it in public. " +
                    "Luckily I can change in the bathroom at Missy's. I'm going to have to hide this " +
                    "in my closet so no one knows what dirty secrets I have.",
                button: [
                    { chatID: -1, text: "Hide the girly clothes in your closet", callback: "endbag" }
                ]
            },
            {
                chatID: 38,
                speaker: "me",
                text: "Oh did the kitty follow me home from the forest? Who's a nice kitty. I bet you want some pets. ",
                button: [
                    { chatID: 39, text: "[Pet the kitty]", callback: "petcat" }
                ]
            },
            {
                chatID: 39,
                speaker: "me",
                text: "Who's a kitty? You're a kitty!",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 40,
                speaker: "me",
                text: "I'm getting better! ",
                button: [
                    { chatID: -1, text: "...", callback: "cheerReset" }
                ]
            },
            {
                chatID: 41,
                speaker: "me",
                text: "I don't have enough energy to practice now. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 42,
                speaker: "me",
                text: "We're the Stars; we like to fight. Let's go team and win tonight. [clap clap]<br/> " +
                    "Our boys are big and strong. Think you'll win, then you are wrong. [clap clap]<br/>" +
                    "Your boys are small and sick. We'll slap you with our giant dick",
                button: [
                    { chatID: -1, text: "...", callback: "cheerReset" }
                ]
            },
            {
                chatID: 43,
                speaker: "me",
                text: "Push ‘Em Back, Push ‘Em Back, [clap clap] <br/>" +
                    "Hit ‘em hard! [clap clap] <br/>" +
                    "Make ‘em fight for every yard!",
                button: [
                    { chatID: -1, text: "...", callback: "cheerReset" }
                ]
            },
            {
                chatID: 44,
                speaker: "me",
                text: "Fetville Stars, Fetville Stars. Don't be shy, stand up and give your battle cry. V-I-C-T-O-R-Y<br/> " +
                    "We'll smash you like a fucking flea. We're the best around I guarantee. D-E-F-E-N-S-E<br/>" +
                    "Your quarterback is running dry. We'll fuck you in your P-U-S-S-Y.",
                button: [
                    { chatID: -1, text: "...", callback: "cheerReset" }
                ]
            },
            {
                chatID: 45,
                speaker: "me",
                text: "I get to cheer in a game now. I don't have to practice if I don't want to. ",
                button: [
                    { chatID: -1, text: "...", callback: "cheerReset" }
                ]
            },
            {
                chatID: 46,
                speaker: "me",
                text: "I'm such a bimbo brain! I'm not wearing heels",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 47,
                speaker: "thinking",
                text: "Finally! Home alone. Now I have time to explore my new vagina! ",
                button: [
                    { chatID: 75, text: "Explore your new vagina", callback: "pussy0" },
                    { chatID: -1, text: "Naw. I don't need to do that. ", callback: "reset" },
                ]
            },
            {
                chatID: 48,
                speaker: "lola",
                text: "I'm so glad you're back! I've been thinking about you every day since you've been gone! ",
                button: [
                    { chatID: 49, text: "I've only been thinking about you everyday I was locked up", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "lola",
                text: "I have so many questions, so much to say, but my hormones are going crazy since I've " +
                    "gotten pregnant! I just need sex right now to calm my mind so I can get out my questions! " +
                    "Quick! Take your pants off! ",
                button: [
                    { chatID: -1, text: "Oh my! [strip!]", callback: "lola1" },
                ]
            },
            {
                chatID: 50,
                speaker: "lola",
                text: "Oh what! Why is that on your penis! If you ever want to have sex again you'll get " +
                    "that stupid thing off your penis! Hrrrrmp!! You have no idea how mad I am! ",
                button: [
                    { chatID: -1, text: "Oh yeah. Ok", callback: "reset" },
                ]
            },
            {
                chatID: 51,
                speaker: "lola",
                text: "Huh? ... I mean... Wait. You had a penis. I know it was there or I wouldn't be pregnant. " +
                    "You the only boy I've ever been with. That is a vagina right? Is the penis there... I... uhhh...",
                button: [
                    { chatID: 52, text: "...", callback: "" },
                ]
            },
            {
                chatID: 52,
                speaker: "me",
                text: "Oh... Well when I was kidnapped A lot of bad things happened. [Tell her most of the things " +
                    "that happened, except the parts she wouldn't want to hear. ]",
                button: [
                    { chatID: 53, text: "...", callback: "lola2" },
                ]
            },
            {
                chatID: 53,
                speaker: "lola",
                text: "That's terrible what they did! But you know what. I have a vagina too! I guess our " +
                    "kids going to have two loving moms. Too bad I don't have a penis or I would make you pregnant " +
                    "next hehe. Look. I love you. All of you. I don't care if you have a penis or not. We're going " +
                    "to be together forever! ",
                button: [
                    { chatID: 54, text: "So you don't care that I don't have a penis anymore? ", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "lola",
                text: "I mean... No. I don't care. We're going to get a great collection of toys and vibrators that " +
                    "we can use on each other. Hehe. I'm just thinking of all the wonderful penises we'll use on each " +
                    "other! But for now I'm still really horny! Like so horny! You just need to be better than " + sc.n("eva") +
                    " at licking my vagina! Now get in there and give me my orgasm that I so much need! ",
                button: [
                    { chatID: 55, text: "Oh yeah!", callback: "lola_lick" },
                ]
            },
            {
                chatID: 55,
                speaker: "lola",
                text: "I hope you don't mind my ass in your face. It's too uncomfortable to lay on " +
                    "my back. Now get in there and make me moan! ",
                button: [
                    { chatID: -1, text: "[Lick her vagina]", callback: "" },
                ]
            },
            {
                chatID: 56,
                speaker: "lola",
                text: "Way better than " + sc.n("eva") + "! Wow I so needed that! She always complains her " +
                    "tongue is tired and I have to finish up myself. But you! I got all the way there! ",
                button: [
                    { chatID: 57, text: "Oh you!", callback: "" },
                ]
            },
            {
                chatID: 57,
                speaker: "lola",
                text: "I love you. I'm so looking forward to spending forever with you! ",
                button: [
                    { chatID: 58, text: "I love you too", callback: "displaypair" },
                ]
            },
            {
                chatID: 58,
                speaker: "lola",
                text: "Oh my. She's right you know. I do need to show you how to use that thing! Lay " +
                    "back! Let me make you feel good too! ",
                button: [
                    { chatID: 59, text: "oh yeah!", callback: "lola_lick5" },
                ]
            },
            {
                chatID: 59,
                speaker: "lola",
                text: "So this that I'm fingering is your outer lips. I do love it when " + sc.n("eva") +
                    " runs her finger nails over it. A light tease that starts me up so good. ",
                button: [
                    { chatID: 60, text: "mmMmmmm", callback: "lola_lick6" },
                ]
            },
            {
                chatID: 60,
                speaker: "lola",
                text: "Now these are your inner lips. Do you like how I rub my fingers between them.  ",
                button: [
                    { chatID: 61, text: "Hehe. Oh yeah. Feels so good. ", callback: "lola_lick7" },
                ]
            },
            {
                chatID: 61,
                speaker: "lola",
                text: "Most boys think that we get all our pleasure our vaginal hole. It does feel so good, but " +
                    "this...",
                button: [
                    { chatID: 62, text: "oh yeah. It does feel good. ", callback: "lola_lick8" },
                ]
            },
            {
                chatID: 62,
                speaker: "lola",
                text: "This is the real pleasure button! Hehe. You're so wet, I can see it dripping out. Now let " +
                    "me show your the ultimate. Fingers and tongue. ",
                button: [
                    { chatID: 63, text: "eeep!", callback: "lola_lick9" },
                ]
            },
            {
                chatID: 63,
                speaker: "me",
                text: "Oh my. oh my. oh my!!! Oh! oh ohohohohohohohohohooooooooo ",
                button: [
                    { chatID: 64, text: "...", callback: "lola_lick10" },
                ]
            },
            {
                chatID: 64,
                speaker: "lola",
                text: "And that's how you give a vaginal orgasm! ",
                button: [
                    { chatID: -1, text: "oh my!", callback: "lola_lick11" },
                ]
            },
            {
                chatID: 65,
                speaker: "lola",
                text: "Oh wow I miss that penis. I hope it's ok if we skip the foreplay and jump right to " +
                    "it! I just need to have sex with your right now! ",
                button: [
                    { chatID: 66, text: "Oh yeah!", callback: "lola_fuck" },
                ]
            },
            {
                chatID: 66,
                speaker: "lola",
                text: "Go easy. I haven't had a penis in me since last time we had sex. ",
                button: [
                    { chatID: -1, text: "[Ease your penis in her vagina]", callback: "lola_fuck1" },
                ]
            },
            {
                chatID: 67,
                speaker: "lola",
                text: "Hehe. Happy pussy! I look forward to many days and nights make our fun places happy! ",
                button: [
                    { chatID: -1, text: "Oh yeah!", callback: "reset" },
                ]
            },
            {
                chatID: 68,
                speaker: "thinking",
                text: "Oh yeah. I'm wearing a chastity cage. Duh! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 69,
                speaker: "thinking",
                text: "Such a hot naked body. I wish I had a penis to fuck her right now. Maybe I should " +
                    "buy a strapon at the Toy 'n' Us!",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 70,
                speaker: "thinking",
                text: "Should I put my strapon on and fuck her pussy?",
                button: [
                    { chatID: 72, text: "Yes! ", callback: "lola_sleep3" },
                    { chatID: -1, text: "No", callback: "reset" },
                ]
            },
            {
                chatID: 71,
                speaker: "thinking",
                text: "Should I slide my penis between her legs?",
                button: [
                    { chatID: 72, text: "Yes! ", callback: "lola_sleep3" },
                    { chatID: -1, text: "No", callback: "reset" },
                ]
            },
            {
                chatID: 72,
                speaker: "thinking",
                text: "She's still sleeping. So hot. Should I slide inside her pussy?",
                button: [
                    { chatID: 73, text: "Yes! ", callback: "lola_sleep4" },
                    { chatID: -1, text: "No", callback: "reset" },
                ]
            },
            {
                chatID: 73,
                speaker: "thinking",
                text: "She's so wet. I can feel her pussy juice splash on my legs. My " + g.makeSingular(sc.n("el")) +
                    " is so hot and ready for dick. ",
                button: [
                    { chatID: 74, text: "Finish off", callback: "lola_sleep5" },
                ]
            },
            {
                chatID: 74,
                speaker: "thinking",
                text: "Hehe. I heard her moan. She so needed that. Fall asleep while still inside her. ",
                button: [
                    { chatID: -1, text: "[Sleep]", callback: "lola_sleep_end" },
                ]
            },
            {
                chatID: 75,
                speaker: "thinking",
                text: "*hmmm* Kinda hard to see your own pussy standing up...",
                button: [
                    { chatID: 76, text: "[Get a different angle]", callback: "pussy1" },
                ]
            },
            {
                chatID: 76,
                speaker: "thinking",
                text: "I've got to hand it to that doctor, it is a hot pussy. I know if I had a dick I " +
                    "would fuck it! I wonder how it feels...",
                button: [
                    { chatID: 77, text: "[Touch your pussy]", callback: "pussy2" },
                ]
            },
            {
                chatID: 77,
                speaker: "thinking",
                text: "Oh. It's so moist. hehe. Oooo that feels good. MMmmmm. I wonder what inside the hole " +
                    "feels...",
                button: [
                    { chatID: 78, text: "[Slide your fingers inside your pussy]", callback: "pussy3" },
                ]
            },
            {
                chatID: 78,
                speaker: "thinking",
                text: "Wow! That feels amazing too! Like electricity coming out of me. I need more! Oh more! ",
                button: [
                    { chatID: 79, text: "[Shove your fingers up your ass and rub your clitty]", callback: "pussy4" },
                ]
            },
            {
                chatID: 79,
                speaker: "thinking",
                text: "Oh fuck! Fuck that's amazing!!! I need to cum. I need it!",
                button: [
                    { chatID: 80, text: "[Rub your clitty and fuck your asshole with your fingers]", callback: "pussy5" },
                ]
            },
            {
                chatID: 80,
                speaker: "me",
                text: "*screaming out* AAaAAAAAaaaaAAaaaaa SO GOOOOOD!!!!!!!!",
                button: [
                    { chatID: 81, text: "[Enjoy your amazing orgasm!]", callback: "pussy6" },
                ]
            },
            {
                chatID: 81,
                speaker: "landlord",
                text: "Are you ok! I heard screaming... Oh. I see you've found your vagina. hehe. " +
                    "I'll leave you to it. A girl's alone time is the best time. Go ahead and keep " +
                    "masturbating, just try to keep it down a bit. ",
                button: [
                    { chatID: -1, text: "Yes " + sc.n("landlord") + ". ", callback: "reset" },
                ]
            },
        ];

        return cArray[chatID];
    }
}

invoker.registerRoom(10, room10);
