//motherRoom
var room14 = {};

room14.main = function () {
    if (g.hourBetween(20, 21)) 
        nav.bg("14_motherRoom/14_motherRoomNightLight.jpg");

    var btnList = new Array();
    g.internal = { pussy: 0, asshole: 0 };
    if (!g.hourBetween(6, 21)) {
        if (g.dt.getDay() === 0 || g.dt.getDay() === 5 || g.dt.getDay() === 5 || g.dt.getDay() === 6) {
            btnList = [{
                "type": "btn",
                "name": "dickSleep",
                "left": 986,
                "top": 696,
                "width": 713,
                "height": 193,
                "image": "14_motherRoom/14_motherAsleepDick.png"
            }];
        }
        else {
            btnList = [{
                "type": "btn",
                "name": "motherSleep",
                "left": 1031,
                "top": 779,
                "width": 591,
                "height": 114,
                "image": "14_motherRoom/14_motherAsleep.png"
            }];
        }
    }
    else if (sc.getTimeline("landlord").thisRoom) {
        if (g.dt.getDay() === 0 || g.dt.getDay() === 5 || g.dt.getDay() === 6) {
            switch (sc.getstep("bigguy")) {
                case 0:
                case 1:
                    btnList = [{
                        "type": "btn",
                        "name": "couple",
                        "left": 737,
                        "top": 0,
                        "width": 714,
                        "height": 1080,
                        "image": "14_motherRoom/couple.png"
                    }];
                    break;
                case 2:
                    btnList = [{
                        "type": "btn",
                        "name": "couple",
                        "left": 737,
                        "top": 0,
                        "width": 714,
                        "height": 1080,
                        "image": "14_motherRoom/couple1.png"
                    }];
                    break;
                case 3:
                    if (g.getDaily("bigguy")) {
                        btnList = [{
                            "type": "btn",
                            "name": "couple",
                            "left": 737,
                            "top": 0,
                            "width": 714,
                            "height": 1080,
                            "image": "14_motherRoom/couple.png"
                        }];
                    }
                    else {
                        nav.bg("14_motherRoom/couple3.jpg");
                        chat(27, 14);
                    }
                    break;
                default:
                    btnList = [{
                        "type": "btn",
                        "name": "couple",
                        "left": 737,
                        "top": 0,
                        "width": 714,
                        "height": 1080,
                        "image": "14_motherRoom/couple.png"
                    }];
                    break;
            }
        }
        else {
            btnList = [{
                "type": "btn",
                "name": "motherRobe",
                "left": 1193,
                "top": 42,
                "width": 466,
                "height": 1038,
                "image": "14_motherRoom/14_motherRobe.png"
            }];
        }
    }
    else {
        btnList = [
            {
                "type": "btn",
                "name": "closet",
                "left": 414,
                "top": 375,
                "width": 461,
                "height": 538,
                "image": "14_motherRoom/14_closet.png"
            },
            {
                "type": "btn",
                "name": "dresser",
                "left": 1569,
                "top": 781,
                "width": 317,
                "height": 299,
                "image": "14_motherRoom/dresserDay.png"
            }];
        if (g.getDaily("momChoreBed")) {
            btnList.push({
                "type": "img",
                "name": "bedmade",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bedmade.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "bedMessy",
                "title": "Make Bed?",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bed.png"
            });
        }
    }

    navList = [16];
    $.each(btnList, function (i, v) {
        nav.button(v, 14);
    });

    nav.buildnav(navList);
};

room14.btnclick = function (name) {
    switch (name) {
        case "closet":
            if (!g.getDaily("momRaidCloset"))
                char.room(17);
            else
                chat(1, 14);
            break;
        case "motherRobe":
            var llstep = sc.getstep("landlord");
            if (llstep > 199) {
                chat(69, 14);
            }
            else if (llstep < 1)
                chat(2, 14);
            else if (llstep === 9 && sc.getstep("lola") > 8)
                chat(86, 14);
            else if (llstep === 10)
                chat(97, 14);
            else if (llstep === 11)
                chat(107, 14);
            else 
                chat(3, 14);
            break;
        case "motherSleep":
            nav.killall();
            nav.bg("14_motherRoom/bedSleep.jpg");
            nav.buildnav([14]);
            nav.button({
                "type": "img",
                "name": "msleep",
                "left": 0,
                "top": 115,
                "width": 1920,
                "height": 965,
                "image": "14_motherRoom/14_motherSleepPresent.png"
            }, 14);
            nav.button({
                "type": "btn",
                "name": "sleepPussy",
                "left": 988,
                "top": 730,
                "width": 214,
                "height": 205,
                "image": "14_motherRoom/sleepPussy.png"
            }, 14);
            nav.button({
                "type": "btn",
                "name": "sleepAsshole",
                "left": 1000,
                "top": 532,
                "width": 190,
                "height": 190,
                "image": "14_motherRoom/sleepAsshole.png"
            }, 14);
            if (!pic.has("landlordSleep")) {
                nav.button({
                    "type": "btn",
                    "name": "takePic",
                    "left": 771,
                    "top": 660,
                    "width": 98,
                    "height": 98,
                    "image": "14_motherRoom/camera.png"
                }, 14);
            }
            break;
        case "dickSleep":
            chat(42, 14);
            break;
        case "sleepPussy":
            nav.killbutton("sleepPussy");
            nav.killbutton("sleepAsshole");
            chat(9, 14);
            break;
        case "sleepAsshole":
            nav.killbutton("sleepPussy");
            nav.killbutton("sleepAsshole");
            chat(13, 14);
            break;
        case "dresser":
            if (!cl.hasClothing("panties", "c")) {
                nav.bg("14_motherRoom/014_dresserDrawer.jpg");
                nav.killall();
                chat(5, 14);
            }
            else
                chat(66, 14);
            break;
        case "bedMessy":
            nav.killbutton("bedMessy");
            nav.button({
                "type": "img",
                "name": "bedmade",
                "left": 939,
                "top": 755,
                "width": 776,
                "height": 325,
                "image": "14_motherRoom/14_bedmade.png"
            }, 14);
            g.setDaily("momChoreBed");
            g.mod("rentKnockOff", 5);
            chat(8, 14);
            break;
        case "takePic":
            nav.killbutton("takePic");
            pic.add("landlordSleep");
            chat(15, 14);
            break;
        case "couple":
            if (g.getDaily("bigguy"))
                chat(16, 14);
            else if (sc.getstep("landlord") < 200)
                chat(68, 14);
            else {
                switch (sc.getstep("bigguy")) {
                    case 0:
                        chat(18, 14);
                        break;
                    case 1:
                        chat(23, 14);
                        break;
                    case 2:
                        chat(25, 14);
                        break;
                    case 4:
                        chat(43, 14);
                        break;
                    default:
                        chat(16, 14);
                        break;
                }
            }
            break;
        case "4man":
            nav.killall();
            nav.bg("14_motherRoom/bg4_11.jpg");
            nav.button({
                "type": "tongue",
                "name": "4cum1",
                "left": 787,
                "top": 24,
                "width": 292,
                "height": 869,
                "image": "14_motherRoom/4cum1.png"
            }, 14);
            break;
        case "4cum1":
            nav.killbutton("4cum1");
            nav.button({
                "type": "tongue",
                "name": "4cum2",
                "left": 787,
                "top": 24,
                "width": 292,
                "height": 869,
                "image": "14_motherRoom/4cum2.png"
            }, 14);
            break;
        case "4cum2":
            nav.killbutton("4cum2");
            nav.button({
                "type": "tongue",
                "name": "4cum3",
                "left": 787,
                "top": 24,
                "width": 292,
                "height": 869,
                "image": "14_motherRoom/4cum3.png"
            }, 14);
            break;
        case "4cum3":
            nav.killbutton("4cum3");
            nav.button({
                "type": "tongue",
                "name": "4cum4",
                "left": 787,
                "top": 24,
                "width": 292,
                "height": 869,
                "image": "14_motherRoom/4cum4.png"
            }, 14);
            break;
        case "4cum4":
            nav.killbutton("4cum4");
            nav.button({
                "type": "tongue",
                "name": "4cum5",
                "left": 787,
                "top": 24,
                "width": 292,
                "height": 869,
                "image": "14_motherRoom/4cum5.png"
            }, 14);
            break;
        case "4cum5":
            g.internal.m = true;
            nav.killbutton("4cum5");
            if (!g.internal.f)
                chat(58, 14);
            else {
                nav.killall();
                nav.bg("14_motherRoom/bg4_12.jpg");
                chat(60, 14);
            }
            break;
        case "4girl":
            nav.killall();
            nav.bg("14_motherRoom/bg4_11w.jpg");
            nav.button({
                "type": "tongue",
                "name": "4cum1w",
                "left": 997,
                "top": 586,
                "width": 342,
                "height": 492,
                "image": "14_motherRoom/4cum1w.png"
            }, 14);
            break;
        case "4cum1w":
            nav.killbutton("4cum1w");
            nav.button({
                "type": "tongue",
                "name": "4cum2w",
                "left": 997,
                "top": 586,
                "width": 342,
                "height": 492,
                "image": "14_motherRoom/4cum2w.png"
            }, 14);
            break;
        case "4cum2w":
            nav.killbutton("4cum2w");
            nav.button({
                "type": "tongue",
                "name": "4cum3w",
                "left": 997,
                "top": 586,
                "width": 342,
                "height": 492,
                "image": "14_motherRoom/4cum3w.png"
            }, 14);
            break;
        case "4cum3w":
            nav.killbutton("4cum3w");
            nav.button({
                "type": "tongue",
                "name": "4cum4w",
                "left": 997,
                "top": 586,
                "width": 342,
                "height": 492,
                "image": "14_motherRoom/4cum4w.png"
            }, 14);
            break;
        case "4cum4w":
            nav.killbutton("4cum4w");
            nav.button({
                "type": "tongue",
                "name": "4cum5w",
                "left": 997,
                "top": 586,
                "width": 342,
                "height": 492,
                "image": "14_motherRoom/4cum5w.png"
            }, 14);
            break;
        case "4cum5w":
            g.internal.f = true;
            nav.killbutton("4cum5w");
            if (!g.internal.m)
                chat(59, 14);
            else {
                nav.killall();
                nav.bg("14_motherRoom/bg4_12.jpg");
                chat(60, 14);
            }
            break;
        case "screwdriver":
        case "purpleDildo":
        case "pinkDildo":
        case "whiteDildo":
        case "blackDildo":
        case "blackBallsDildo":
        case "towerDildo":
        case "pinkFatDildo":
        case "horseDildo":
            if (cl.minButt(name, null).fit) {
                if (name !== "screwdriver")
                    nav.killbutton("screwdriver");
                if (name !== "purpleDildo")
                    nav.killbutton("purpleDildo");
                if (name !== "pinkDildo")
                    nav.killbutton("pinkDildo");
                if (name !== "whiteDildo")
                    nav.killbutton("whiteDildo");
                if (name !== "blackDildo")
                    nav.killbutton("blackDildo");
                if (name !== "blackBallsDildo")
                    nav.killbutton("blackBallsDildo");
                if (name !== "towerDildo")
                    nav.killbutton("towerDildo");
                if (name !== "pinkFatDildo")
                    nav.killbutton("pinkFatDildo");
                if (name !== "horseDildo")
                    nav.killbutton("horseDildo");
                g.internal = name;
                nav.killall();
                nav.bg("14_motherRoom/butt1.jpg");
                if (name === "horseDildo" || name === "pinkFatDildo" || name === "towerDildo")
                    chat(81, 14);
                else
                    chat(80, 14);
            }
            else
                chat(82, 14);
            break;
        case "cancelDildo":
            char.room(14);
            break;
        default:
            break;
    }
};

room14.chatcatch = function (callback) {
    switch (callback) {
        case "takekey":
            g.popUpNotice("You have a new Key!");
            inv.update("flatmateKey", true, null);
            char.room(14);
            break;
        case "search":
            nav.bg("14_motherRoom/14_motherRoom.jpg", "14_motherRoom/14_motherRoomNight.jpg");
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "14_motherRoom/panty1.png"
            }, 14);
            if (sc.checkevent("me", -2)) {
                if (cl.c.leg < 2)
                    chat(7, 14);
                else if (cl.hasClothing("panty", "c"))
                    chat(63, 14);
                else
                    chat(64, 14);

            }
            else
                chat(6, 14);


            //if (inv.has("flatmateKey"))
            //    chat(6, 14);
            //else
            //    chat(7, 14);
            break;
        case "ret":
            char.room(14);
            break;
        case "rub":
            $('#room_footer').hide();
            g.internal.pussy = g.internal.pussy < 1 ? 1 : g.internal.pussy;
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_rubPussy.gif"
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () { chat(10, 14); }, 4000);
            break;
        case "poke":
            $('#room_footer').hide();
            g.internal.pussy = g.internal.pussy < 2 ? 2 : g.internal.pussy;
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepPoke.gif?a=" + Math.random()
            }, 14);
            g.mod("arousal", 10);
            g.mod("giveFingerFemale", 1);
            setTimeout(function () { chat(10, 14); }, 9500);
            break;
        case "slam":
            $('#room_footer').hide();
            g.internal.pussy = g.internal.pussy < 2 ? 2 : g.internal.pussy;
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepSlam.gif"
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "inTrouble",
                    "left": 230,
                    "top": 86,
                    "width": 1519,
                    "height": 994,
                    "image": "14_motherRoom/inTrouble.png"
                }, 14);
                chat(11, 14);
            }, 3000);
            break;
        case "rimjob":
            $('#room_footer').hide();
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepBholeLick.gif"
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () { chat(10, 14); }, 4000);
            break;
        case "fingerButtholeLube":
            if (inv.has("lube")) {
                $('#room_footer').hide();
                nav.button({
                    "type": "img",
                    "name": "pussyPlay",
                    "left": 665,
                    "top": 470,
                    "width": 851,
                    "height": 610,
                    "image": "14_motherRoom/014_sleepBholePokeLube.gif"
                }, 14);
                inv.use("lube");
                g.mod("arousal", 10);
                g.mod("giveFingerFemale", 1);
                setTimeout(function () { chat(10, 14); }, 4000);
            }
            else {
                chat(14, 14);
            }
            break;
        case "fingerButtholeDry":
            $('#room_footer').hide();
            nav.button({
                "type": "img",
                "name": "pussyPlay",
                "left": 665,
                "top": 470,
                "width": 851,
                "height": 610,
                "image": "14_motherRoom/014_sleepBholePokeDry.gif?a=" + Math.random()
            }, 14);
            g.mod("arousal", 10);
            setTimeout(function () {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "inTrouble",
                    "left": 230,
                    "top": 86,
                    "width": 1519,
                    "height": 994,
                    "image": "14_motherRoom/inTrouble.png"
                }, 14);
                chat(11, 14);
            }, 4000);
            break;
        case "sleepReset":
            room14.btnclick("motherSleep");
            break;
        case "reset":
            char.room(14);
            break;
        case "sleepSpank":
            g.pass = "sleepSpank";
            char.room(21);
            break;
        case "fin0":
            g.setDaily("bigguy");
            char.addtime(60);
            break;
        case "fin1":
            sc.setstep("bigguy", 1);
            g.setDaily("bigguy");
            char.addtime(60);
            break;
        case "fin2":
            sc.setstep("bigguy", 2);
            g.setDaily("bigguy");
            char.addtime(60);
            break;
        case "fin3":
            sc.setstep("bigguy", 3);
            g.setDaily("bigguy");
            char.addtime(60);
            break;
        case "fin4":
            g.mod("loadSwollowed", 1);
            sc.setstep("bigguy", 4);
            g.setDaily("bigguy");
            char.addtime(60);
            break;
        case "couple3a":
            nav.bg("14_motherRoom/couple3a.jpg");
            break;
        case "couple3b":
            nav.bg("14_motherRoom/couple3b.jpg");
            break;
        case "couple3c":
            nav.bg("14_motherRoom/couple3c.jpg");
            break;
        case "couple3d":
            nav.bg("14_motherRoom/couple3d.jpg");
            break;
        case "couple3e":
            nav.bg("14_motherRoom/couple3e.jpg");
            break;
        case "couple3f":
            nav.bg("14_motherRoom/couple3f.jpg");
            break;
        case "couple3g":
            g.mod("loadSwollowed", 1);
            nav.bg("14_motherRoom/couple3g.jpg");
            break;
        case "bg4_1":
            nav.killall();
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "bg4_2":
        case "bg4_3":
        case "bg4_4":
        case "bg4_5":
        case "bg4_6":
        case "bg4_7":
        case "bg4_8":
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "bg4_9":
            g.internal = { m: false, f: false };
            nav.bg("14_motherRoom/bedSleep.jpg");
            nav.button({
                "type": "btn",
                "name": "4man",
                "left": 0,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "14_motherRoom/bg4_9_man.png"
            }, 14);
            nav.button({
                "type": "btn",
                "name": "4girl",
                "left": 1100,
                "top": 0,
                "width": 920,
                "height": 1080,
                "image": "14_motherRoom/bg4_9_w.png"
            }, 14);
            break;
        case "bg4_9w":
            nav.killall();
            nav.bg("14_motherRoom/bedSleep.jpg");
            nav.button({
                "type": "img",
                "name": "4manx",
                "left": 0,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "14_motherRoom/bg4_9_manx.png"
            }, 14);
            nav.button({
                "type": "btn",
                "name": "4girl",
                "left": 1100,
                "top": 0,
                "width": 920,
                "height": 1080,
                "image": "14_motherRoom/bg4_9_w.png"
            }, 14);
            break;
        case "bg4_9m":
            nav.bg("14_motherRoom/bedSleep.jpg");
            nav.button({
                "type": "btn",
                "name": "4man",
                "left": 0,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "14_motherRoom/bg4_9_man.png"
            }, 14);
            nav.button({
                "type": "img",
                "name": "4girl",
                "left": 1100,
                "top": 0,
                "width": 920,
                "height": 1080,
                "image": "14_motherRoom/bg4_9_wx.png"
            }, 14);
            break;
        case "bg4_end":
            g.mod("loadSwollowed", 30);
            g.setDaily("bigguy");
            char.addtime(60);
            sc.setstep("bigguy", 5);
            char.room(14);
            break;
        case "bg4_end_loop":
            g.mod("loadSwollowed", 15);
            g.setDaily("bigguy");
            char.addtime(60);
            char.room(14);
            break;
        case "stealPanties":
            cl.add("panties", "c");
            break;
        case "jo0":
            if (cl.c.chastity !== null)
                chat(71, 14);
            else if (cl.c.cock > 3) {
                nav.modbutton("motherRobe", "14_motherRoom/14_motherRobeLaugh.png", null, null);
                chat(72, 14);
            }
            else {
                nav.killall();
                nav.bg("14_motherRoom/jo0a.jpg");
                chat(73, 14);
            }
            break;
        case "jo1":
            nav.bg("14_motherRoom/jo1.jpg");
            break;
        case "jo2":
            cl.nude();
            nav.bg("14_motherRoom/jo2.jpg");
            break;
        case "jo3":
            nav.bg("14_motherRoom/jo3.jpg");
            break;
        case "jo4":
            nav.bg("14_motherRoom/jo4.jpg");
            break;
        case "jo5":
            nav.bg("14_motherRoom/jo5.jpg");
            break;
        case "jo6":
            cl.doCum(false);
            char.addtime(60);
            cl.undo();
            g.mod("receiveHandjobFemale", 1);
            char.room(16);
            break;
        case "butt0":
            nav.killall();
            nav.bg("14_motherRoom/butt0.jpg");
            break;
        case "butt1":
            if (inv.has("screwdriver"))
                nav.button({
                    "type": "btn",
                    "name": "screwdriver",
                    "left": 371,
                    "top": 544,
                    "width": 87,
                    "height": 400,
                    "image": "19_layInBed/screwdriverDildo.png"
                }, 14);
            if (inv.has("purpleDildo"))
                nav.button({
                    "type": "btn",
                    "name": "purpleDildo",
                    "left": 475,
                    "top": 639,
                    "width": 69,
                    "height": 302,
                    "image": "19_layInBed/purpleDildo.png"
                }, 14);
            if (inv.has("pinkDildo"))
                nav.button({
                    "type": "btn",
                    "name": "pinkDildo",
                    "left": 561,
                    "top": 567,
                    "width": 70,
                    "height": 374,
                    "image": "19_layInBed/pinkDildo.png"
                }, 14);
            if (inv.has("whiteDildo"))
                nav.button({
                    "type": "btn",
                    "name": "whiteDildo",
                    "left": 648,
                    "top": 478,
                    "width": 184,
                    "height": 466,
                    "image": "19_layInBed/whiteDildo.png"
                }, 14);
            if (inv.has("blackDildo"))
                nav.button({
                    "type": "btn",
                    "name": "blackDildo",
                    "left": 849,
                    "top": 390,
                    "width": 301,
                    "height": 564,
                    "image": "19_layInBed/blackDildo.png"
                }, 14);
            if (inv.has("pinkFatDildo"))
                nav.button({
                    "type": "btn",
                    "name": "pinkFatDildo",
                    "left": 1167,
                    "top": 485,
                    "width": 200,
                    "height": 469,
                    "image": "19_layInBed/pinkFatDildo.png"
                }, 14);
            if (inv.has("blackBallsDildo"))
                nav.button({
                    "type": "btn",
                    "name": "blackBallsDildo",
                    "left": 1384,
                    "top": 478,
                    "width": 261,
                    "height": 449,
                    "image": "19_layInBed/blackBallsDildo.png"
                }, 14);
            if (inv.has("towerDildo"))
                nav.button({
                    "type": "btn",
                    "name": "towerDildo",
                    "left": 1106,
                    "top": 110,
                    "width": 631,
                    "height": 228,
                    "image": "19_layInBed/towerDildo.png"
                }, 14);
            if (inv.has("horseDildo"))
                nav.button({
                    "type": "btn",
                    "name": "horseDildo",
                    "left": 218,
                    "top": 98,
                    "width": 789,
                    "height": 311,
                    "image": "19_layInBed/horseDildo.png"
                }, 14);
            nav.button({
                "type": "btn",
                "name": "cancelDildo",
                "left": 1700,
                "top": 478,
                "width": 146,
                "height": 146,
                "image": "19_layInBed/cancel.png"
            }, 14);
            break;
        case "butt2":
            nav.killall();
            nav.bg("14_motherRoom/butt" + g.internal + ".jpg");
            g.roomTimeout = setTimeout(function () { chat(83, 14); }, 2000);
            break;
        case "butt3":
            nav.bg("14_motherRoom/butt3bg.jpg");
            zcl.displayMirror();
            nav.button({
                "type": "btn",
                "name": "buttOface",
                "left": 874,
                "top": 295,
                "width": 321,
                "height": 287,
                "image": "14_motherRoom/butt3.png"
            }, 14);
            break;
        case "butt4":
            nav.killall();
            nav.bg("14_motherRoom/butt4.jpg");
            cl.doCum(false);
            cl.stretchButt(g.internal);
            g.mod("receiveAnalFemale", 1);
            g.mod("sissygasm", 1);
            break;
        case "butt5":
            char.addtime(120);
            char.room(16);
            break;
        case "m90":
            if (cl.c.chastity === null) {
                if (cl.c.cock > 3)
                    chat(89, 14);
                else
                    chat(90, 14);
            }
            else
                chat(88, 14);
            break;
        case "m91":
        case "m92":
            nav.killall();
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "m93":
            cl.doCum(false);
            g.mod("receiveHandjobFemale", 1);
            nav.bg("14_motherRoom/m93.jpg");
            break;
        case "m94":
            nav.killall();
            char.addtime(120);
            nav.bg("14_motherRoom/14_motherRoomNightLight.jpg");
            scc.love("landlord", 20, 100);
            sc.setstep("landlord", 10);
            nav.button({
                "type": "img",
                "name": "motherRobe",
                "left": 1193,
                "top": 42,
                "width": 466,
                "height": 1038,
                "image": "14_motherRoom/14_motherRobe.png"
            }, 14);
            break;
        case "leave":
            char.room(16);
            break;
        case "f1":
            cl.nude();
            zcl.displayMain(-150, 300, .3, "nude", true);
            break;
        case "f2":
            nav.killall();
            g.mod('arousal', 100);
            nav.bg("14_motherRoom/f2.jpg");
            break;
        case "f3":
            nav.bg("14_motherRoom/f3.jpg");
            zcl.displayMain(-2500, -1400, .8, "nude", true)
            break;
        case "f4":
            nav.killall();
            nav.bg("14_motherRoom/f4.jpg");
            g.roomTimeout = setTimeout(function () {
                chat(102, 14);
            }, 2000);
            break;
        case "f5":
            nav.bg("14_motherRoom/f5.jpg");
            break;
        case "f6":
            cl.doCum(false);
            g.mod("fuckPussy", 1);
            g.mod("receiveBoobJob", 1);
            sc.setstep("landlord", 11);
            char.addtime(120);
            g.setDaily("landlord");
            char.room(10);
            break;
        case "c1":
            nav.killall();
            nav.bg("14_motherRoom/c1.jpg");
            break;
        case "c2":
            g.mod("arousal", 200);
            nav.bg("14_motherRoom/c2.jpg");
            break;
        case "c3":
        case "c4":
        case "c5":
        case "c7":
        case "c8":
        case "c9":
        case "c10":
        case "c11":
        case "c12":
        case "c13":
        case "c14":
        case "c15":
        case "c16":
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "c6":
            cl.nude();
            nav.bg("14_motherRoom/" + callback + ".jpg");
            break;
        case "c17":
            g.mod("fuckPussy", 2);
            g.mod("receiveOralFemale", 2);
            g.mod("receiveBoobJob", 1);
            sc.setstep("lola", 15);
            sc.setstep("eva");
            sc.setstep("landlord", 12);
            cl.doCum(false);
            char.addtime(180);
            char.room(10);
            break;
        default:
            break;
    }
};

room14.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Nothing here..",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I've already raided " + sc.n("landlord") + "'s closet today. I better wait till tomorrow. ",
            button: []
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "You need to log into your computer in your room, look for job, then go work. I'm not supporting your any longer.",
            button: []
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Hello honey, I'm so proud that you're working now. you keep it up and you just may make something of yourself.",
            button: []
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Mustn't wake " + sc.n("landlord") + "...",
            button: []
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Wow " + sc.n("landlord") + " has a lot of big panties....",
            button: [
                { chatID: -1, text: "Look through panties", callback: "search" },
                { chatID: -1, text: "I shouldn't be looking in here.", callback: "ret" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: sc.n("landlord") + "'s panties! I feel so dirty for even touching them.",
            button: [
                { chatID: -1, text: "[Put the panties back]", callback: "ret" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "There's no way I'll fit into " + sc.n("landlord") + "'s panties! My ass is way too small.",
            button: [
                { chatID: -1, text: "[Put the panties back]", callback: "ret" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "$5 dollars knocked off the rent this week.",
            button: []
        },
        {
            chatID: 9,
            speaker: "me",
            text: "How do you want to play with that pussy?",
            button: [
                { chatID: -1, text: "Rub the pussy", callback: "rub" },
                { chatID: -1, text: "Gently finger your " + sc.n("landlord"), callback: "poke" },
                { chatID: -1, text: "Finger fuck that pussy", callback: "slam" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Try something else", callback: "sleepReset" }
            ]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "What the hell do you think you're doing‽ ",
            button: [
                { chatID: 12, text: "I uhhhhh... huh?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "I can't believe you thought you could get away with sticking your dirty fingers inside me while I'm " +
                "sleeping, what gets in your head.",
            button: [
                { chatID: -1, text: "ohhh uhhhh, I don't know", callback: "sleepSpank" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "What do you want to do to that butt-hole?",
            button: [
                { chatID: -1, text: "Give " + sc.n("landlord") + " a rimjob. ", callback: "rimjob" },
                { chatID: -1, text: "Lube up your finger and slide in in her bum", callback: "fingerButtholeLube" },
                { chatID: -1, text: "Stick it in dry", callback: "fingerButtholeDry" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "I don't have any lube...",
            button: [
                { chatID: -1, text: "Try Something else", callback: "sleepReset" }
            ]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "Picture added to camera.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Hey honey... Why don't you go play, so me and " + sc.n("bigguy") + " can play adult games?",
            button: [
                { chatID: 17, text: "...", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "bigguy",
            text: "Hehehe... You're a cute kid.. maybe we'll let you play some time...",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "Hey honey, I don't think you've met my new boyfriend " + sc.n("bigguy") + ". He's just visiting for the weekend. ",
            button: [
                { chatID: 19, text: "Hi " + sc.n("bigguy") + "..", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "bigguy",
            text: "Hi little man. " + sc.n("landlord") + " has told me so much about you. You remind me of me when I was younger, " +
                "I used to have tiny girly body, then I decided to stop being a little girly man. You have a tiny body! You should lift weights. " +
                "Do you like girls? Girls like big guys. I know your " + sc.n("landlord") + " likes big guys. Hahahaha",
            button: [
                { chatID: 20, text: "... oh ok...", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "Ugh, I have two perverts in this house, at least " + sc.n("lola") + " and " + sc.n("eva") + " are nice sweet girls that never " +
                "do anything perverted like you two. ",
            button: [
                { chatID: 21, text: "...", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "bigguy",
            text: "Boys are perverts, it's in our blood, isn't that right young one? That's why your " + sc.n("landlord") +
                " has me over. She loves my giant perverted friend here!",
            button: [
                { chatID: 22, text: "oh gross...", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "Oh stop. " + sc.n("me") + " doesn't need to hear the things you do to me. Run along  " +
                "now, we have some ... stuff ... to do.",
            button: [
                { chatID: -1, text: "Oh, double gross!", callback: "fin1" }
            ]
        },
        {
            chatID: 23,
            speaker: "landlord",
            text: "You are a naughty boy, it looks like you caught us again. Why don't you run along so we can get some alone time..",
            button: [
                { chatID: 24, text: "oh.", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "bigguy",
            text: "Yeah, I gotta giant problem that needs to be solved and only your " + sc.n("landlord") + " can suck it. ",
            button: [
                { chatID: -1, text: "oh damn it.. gross again", callback: "fin2" }
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "Oh my! " + sc.n("me") + " Just because I don't lock my door doesn't mean you can just walk right in! ",
            button: [
                { chatID: 26, text: "But it was slightly ajar!", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Don't even! Just run along now... ",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "fin3" }
            ]
        },
        {
            chatID: 27,
            speaker: "landlord",
            text: "glug.. glug...glug...glug...glug",
            button: [
                { chatID: 28, text: sc.n("landlord") + "?", callback: "couple3a" }
            ]
        },
        {
            chatID: 28,
            speaker: "bigguy",
            text: "Oh fuck, I'm going to fill your throat full",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "bigguy",
            text: "Oh yeah, take my load while " + sc.n("me") + " watches. He's likes to watch you take my giant cock.",
            button: [
                { chatID: 30, text: "...", callback: "couple3b" }
            ]
        },
        {
            chatID: 30,
            speaker: "landlord",
            text: "Blub...",
            button: [
                { chatID: 31, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "bigguy",
            text: "Haha it's hard to talk with your mouth full of my cum. hehehe",
            button: [
                { chatID: 32, text: "...", callback: "couple3c" }
            ]
        },
        {
            chatID: 32,
            speaker: "landlord",
            text: "Hahaha OMG, I said don't shoot it down my throat, I know how you like to put on a show. And you " + sc.n("me") + ". " +
                "Why do you insist on walking in on us? ",
            button: [
                { chatID: 33, text: "...", callback: "couple3c" }
            ]
        },
        {
            chatID: 33,
            speaker: "bigguy",
            text: "I think he wanted to take your place hehehe, he wanted to eat my cum! HAHAHAhahahah",
            button: [
                { chatID: 34, text: "...", callback: "couple3d" }
            ]
        },
        {
            chatID: 34,
            speaker: "landlord",
            text: "Is that what you wanted? Did you want a taste? You're a dirty boy, did you want to clean up your " + sc.n("landlord") + " ? ",
            button: [
                { chatID: 35, text: "I do", callback: "couple3e" },
                { chatID: 41, text: "Oh my god NO", callback: "" }

            ]
        },
        {
            chatID: 35,
            speaker: "landlord",
            text: "I know what a bad boy you are, clean my hand you naughty boy. I'm a cum expert and this is some really quality stuff, it's so " +
                "thick and creamy.",
            button: [
                { chatID: 36, text: "[Suck her fingers clean]", callback: "couple3f" }
            ]
        },
        {
            chatID: 36,
            speaker: "landlord",
            text: "That's right suck my fingers clean you bad boy.",
            button: [
                { chatID: 37, text: "[Keep sucking her cum covered fingers]", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "bigguy",
            text: "Hahahaha How's my cum taste little man? Now swollow it up for " + sc.n("landlord") + ".",
            button: [
                { chatID: 38, text: "[swollow it down]", callback: "couple3g" }
            ]
        },
        {
            chatID: 38,
            speaker: "landlord",
            text: "It really is a waste going into your belly. I could sell if for a nice profit. That's a real man's cum you've just swallowed.",
            button: [
                { chatID: 39, text: "MMmmmmmm", callback: "couple3c" }
            ]
        },
        {
            chatID: 39,
            speaker: "bigguy",
            text: "You need to run along now boy, or I'm going to fill that ass up with cum too ",
            button: [
                { chatID: 40, text: "What", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "landlord",
            text: sc.n("bigguy") + "! I'm not done with you yet. Now run along " + sc.n("me") + ".",
            button: [
                { chatID: -1, text: "[Run along]", callback: "fin4" }
            ]
        },
        {
            chatID: 41,
            speaker: "landlord",
            text: "Ok you naughty boy, run along so I can finish up. Now go!",
            button: [
                { chatID: -1, text: "[Run along]", callback: "fin0" }
            ]
        },
        {
            chatID: 42,
            speaker: "me",
            text: "I'm not fucking with " + sc.n("bigguy") + "!",
            button: [
                { chatID: -1, text: "[Run along]", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "bigguy",
            text: "Hahahaha. You just keep coming back don't you. ",
            button: [
                { chatID: 44, text: "Oh yeah...", callback: "" }
            ]
        },
        {
            chatID: 44,
            speaker: "landlord",
            text: "Now " + sc.n("bigguy") + " I told you she is going through a lot. A lot of questions running through her head.",
            button: [
                { chatID: 45, text: "Huh", callback: "" }
            ]
        },
        {
            chatID: 45,
            speaker: "bigguy",
            text: "There's something I want to run through her head... and by head I mean mouth. ",
            button: [
                { chatID: 46, text: "Oooooo", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "landlord",
            text: "You know, since your really connecting with your femanine side you need to know how to act like a lady in " +
                "the bedroom. Just stand back and " + sc.n("landlord") + " is going to show you how to embrace your femanine side. ",
            button: [
                { chatID: 47, text: "huh?", callback: "bg4_1" }
            ]
        },
        {
            chatID: 47,
            speaker: "landlord",
            text: "The first thing is to let your man lay back and get comfortable.",
            button: [
                { chatID: 48, text: "...", callback: "bg4_2" }
            ]
        },
        {
            chatID: 48,
            speaker: "landlord",
            text: "Before you slide in, rub your breasts in his face.",
            button: [
                { chatID: 49, text: "...", callback: "bg4_3" }
            ]
        },
        {
            chatID: 49,
            speaker: "landlord",
            text: "Give him a flash of your pussy and ass as you slide down on his cock",
            button: [
                { chatID: 50, text: "...", callback: "bg4_4" }
            ]
        },
        {
            chatID: 50,
            speaker: "landlord",
            text: "OOoooooo fuck it feels so good.",
            button: [
                { chatID: 51, text: "[Thinking: This is kinda weird right?]", callback: "bg4_5" }
            ]
        },
        {
            chatID: 51,
            speaker: "landlord",
            text: "Oh fuck",
            button: [
                { chatID: 52, text: "[I'm sitting here watching my " + sc.n("landlord") + " getting absolutely filled by her boyfried.]", callback: "bg4_4" }
            ]
        },
        {
            chatID: 52,
            speaker: "landlord",
            text: "You're so fucking huge Ooooo fuck fuck fuck",
            button: [
                { chatID: 53, text: "[Somehow I just can't stop watching. I guess I may be a bit jealous]", callback: "bg4_5" }
            ]
        },
        {
            chatID: 53,
            speaker: "landlord",
            text: "fuck fuck fuck fuck fuck fuck fuck fuck",
            button: [
                { chatID: 54, text: "[I'm just not sure which one I'm jealous of]", callback: "bg4_6" }
            ]
        },
        {
            chatID: 54,
            speaker: "landlord",
            text: "Oh fuck... I'm cumming fuck fuck fuck",
            button: [
                { chatID: 55, text: "[I wish I could cum like that. It looks amazing.]", callback: "bg4_7" }
            ]
        },
        {
            chatID: 55,
            speaker: "landlord",
            text: "Now it's your turn big guy.",
            button: [
                { chatID: 56, text: "[It's amazing how she just hops back on that thing. She really is a cowgirl]", callback: "bg4_8" }
            ]
        },
        {
            chatID: 56,
            speaker: "landlord",
            text: "Oh fuck. I love how it drips out of me. Do you love how the cum drips from me?",
            button: [
                { chatID: 57, text: "I uhhhhh", callback: "bg4_9" }
            ]
        },
        {
            chatID: 57,
            speaker: "landlord",
            text: "Look at you. You're drooling all over yourself. I can tell you're hungry, it's the slutty girl in you. All this time " +
                "I thought I was raising a dead beat boy, but it turns out I raised a cum hungry slut. So are you going to keep staring at " +
                "it or are you going to eat it?",
            button: [
                { chatID: -1, text: "uh huh", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "bigguy",
            text: "You're such a good cock cleaner. Now clean up your " + sc.n("landlord") + ".",
            button: [
                { chatID: -1, text: "MMmmmm", callback: "bg4_9w" }
            ]
        },
        {
            chatID: 59,
            speaker: "landlord",
            text: "You did such a good job sweety. Now clean up " + sc.n("bigguy") + ".",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "bg4_9m" },
                { chatID: 67, text: sc.n("landlord") + " I don't want to do that. It's icky", callback: "bg4_9m" }
            ]
        },
        {
            chatID: 60,
            speaker: "landlord",
            text: "You did such a good job eating all that cum. You know if you eat enough cum it will really make your skin glow. ",
            button: [
                { chatID: 61, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 61,
            speaker: "bigguy",
            text: "Hahaha I'll make you skin glow every morning little girl. ",
            button: [
                { chatID: 62, text: "Oh " + sc.n("bigguy") + ".", callback: "" }
            ]
        },
        {
            chatID: 62,
            speaker: "landlord",
            text: "Well we're going to bed. Run along.",
            button: [
                { chatID: -1, text: "Ok, bye", callback: "bg4_end" }
            ]
        },
        {
            chatID: 63,
            speaker: "me",
            text: "My " + sc.n("landlord") + " has such great taste in panties.",
            button: [
                { chatID: -1, text: "[Put them back]", callback: "ret" }
            ]
        },
        {
            chatID: 64,
            speaker: "me",
            text: "These are kinda sexy, in an older lady kinda way.",
            button: [
                { chatID: 65, text: "Steal " + sc.n("landlord") + "'s panties", callback: "stealPanties" },
                { chatID: -1, text: "Put them back", callback: "ret" }
            ]
        },
        {
            chatID: 65,
            speaker: "me",
            text: sc.n("landlord") + "'s panties added to inventory.",
            button: [
                { chatID: -1, text: "...", callback: "ret" }
            ]
        },
        {
            chatID: 66,
            speaker: "thinking",
            text: "I already stole a pair of her panties. Can't risk stealing more.",
            button: [
                { chatID: -1, text: "...", callback: "ret" }
            ]
        },
        {
            chatID: 67,
            speaker: "landlord",
            text: "Well I thought differently of you, but a girl is free to choose what is right for them. You can go now.",
            button: [
                { chatID: -1, text: "Thank you " + sc.n("landlord"), callback: "bg4_end_loop" },
                { chatID: -1, text: "I changed my mind, I want to clean that cock with my mouth.", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "landlord",
            text: "There's my perverted boy. " + sc.n("bigguy") + " and I are going to have some adult time. Why don't you run along. ",
            button: [
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "leave" }
            ]
        },
        {
            chatID: 69,
            speaker: "landlord",
            text: "If it isn't my sweet little girl. What are you doing in " + sc.n("landlord") + "'s room so late at night?",
            button: [
                { chatID: 79, text: "I'm so horny " + sc.n("landlord") + ".", callback: "butt0" },
                { chatID: -1, text: "Yes " + sc.n("landlord"), callback: "leave" }
            ]
        },
        {
            chatID: 70,
            speaker: "landlord",
            text: "Hi honey. You're not doing anything naught with the girls are you? ",
            button: [
                { chatID: -1, text: "Nope, but could you take care of my cock?", callback: "jo0" },
                { chatID: -1, text: "Nope. Just came by to say hi.", callback: "" },
            ]
        },
        {
            chatID: 71,
            speaker: "landlord",
            text: "Since you seem to have fixed that problem yourself with your chastity cage, I would say my work is done. " +
                "I am proud that you have taken your perversions into your own hand. ",
            button: [
                { chatID: -1, text: "Oh yeah. I have a chastity cage on. ", callback: "" }
            ]
        },
        {
            chatID: 72,
            speaker: "landlord",
            text: "Hahahaha, No one is going to try and have sex with you! I can't believe what a tiny tiny dick you have! " +
                "You can go, I'm not worried about you doing anything naughty with that tiny thing!",
            button: [
                { chatID: -1, text: "Oh. Sad.", callback: "" }
            ]
        },
        {
            chatID: 73,
            speaker: "landlord",
            text: "So you want " + sc.n("landlord") + " to get you off? Strip down. ",
            button: [
                { chatID: 74, text: "Sweet!", callback: "jo1" }
            ]
        },
        {
            chatID: 74,
            speaker: "landlord",
            text: "Do you like how the pussy lips on this pocket pussy looks? ",
            button: [
                { chatID: 75, text: "oh uhhhhh!", callback: "jo2" }
            ]
        },
        {
            chatID: 75,
            speaker: "landlord",
            text: "Let me lube this up so you don't hurt your penis. Do you like?",
            button: [
                { chatID: 76, text: "Oh Yeah!", callback: "jo3" }
            ]
        },
        {
            chatID: 76,
            speaker: "landlord",
            text: "Now bring that cock of yours over here so I can jack your penis honey. ",
            button: [
                { chatID: 77, text: "Oh yeah!", callback: "jo4" }
            ]
        },
        {
            chatID: 77,
            speaker: "landlord",
            text: "Relax while " + sc.n("landlord") + " strokes you honey. It's ok, just cum for " + sc.n("landlord") + ". " +
                "Fill my pussy with your cum.",
            button: [
                { chatID: 78, text: "UNGH. That's so tight I'm going to cum!", callback: "jo5" }
            ]
        },
        {
            chatID: 78,
            speaker: "landlord",
            text: "That's a good boy. My pocket pussy is full of your cum. ",
            button: [
                { chatID: -1, text: "Thanks " + sc.n("landlord") + ". You're the best. ", callback: "jo6" }
            ]
        },
        {
            chatID: 79,
            speaker: "landlord",
            text: "Awww. " + sc.n("landlord") + " can help you with that. Show me all your girly dildos and I'll help you orgasm " +
                "like a real girl. ",
            button: [
                { chatID: -1, text: "[Show your dildos] ", callback: "butt1" }
            ]
        },
        {
            chatID: 80,
            speaker: "landlord",
            text: "Such a cute dildo. Ready for " + sc.n("landlord") + " to fill your little butt?",
            button: [
                { chatID: -1, text: "Oh yes! ", callback: "butt2" }
            ]
        },
        {
            chatID: 81,
            speaker: "landlord",
            text: "Oh wow, such a little slut. Your girly pussy is so big and gaping from taking so many big cocks. ",
            button: [
                { chatID: -1, text: "I am such a butt slut!", callback: "butt2" }
            ]
        },
        {
            chatID: 82,
            speaker: "landlord",
            text: "You silly girl. This is way to big for your tight little pussy. You should get something smaller. ",
            button: [
                { chatID: -1, text: "I know. I'm so tight!", callback: "reset" }
            ]
        },
        {
            chatID: 83,
            speaker: "landlord",
            text: "You really like dicks in your pussy don't you? You're twitching like you're going to orgasm from your " +
                "girly pussy. ",
            button: [
                { chatID: 84, text: "UNGH", callback: "butt3" }
            ]
        },
        {
            chatID: 84,
            speaker: "me",
            text: "OOooooOOoo UNGH FUCK",
            button: [
                { chatID: 85, text: "Cum like a sissy", callback: "butt4" }
            ]
        },
        {
            chatID: 85,
            speaker: "landlord",
            text: "Awww, you had a girl orgasm. How cute. Now run along " + sc.n("landlord") + " needs some sleep. ",
            button: [
                { chatID: -1, text: "ok.", callback: "butt5" }
            ]
        },
        {
            chatID: 86,
            speaker: "landlord",
            text: "Sooo. A night time visit in my bedroom. Is there something on your mind? ",
            button: [
                { chatID: 87, text: "You are on my mind.", callback: "" },
                { chatID: -1, text: "Oh nothing.", callback: "" }
            ]
        },
        {
            chatID: 87,
            speaker: "landlord",
            text: "Fine. Pull it out. Lets see your perverted little penis.",
            button: [
                { chatID: -1, text: "Oh Yes!", callback: "m90" }
            ]
        },
        {
            chatID: 88,
            speaker: "landlord",
            text: "It's all locked up! I guess no fun time for you.",
            button: [
                { chatID: -1, text: "Awwww", callback: "leave" }
            ]
        },
        {
            chatID: 89,
            speaker: "landlord",
            text: "Awww. It's so tiny. I guess I can work with this. ",
            button: [
                { chatID: 91, text: "Awwww", callback: "m91" }
            ]
        },
        {
            chatID: 90,
            speaker: "landlord",
            text: "Now that's my kind of cock! err..  ahem",
            button: [
                { chatID: 91, text: "Awwww", callback: "m92" }
            ]
        },
        {
            chatID: 91,
            speaker: "landlord",
            text: "Now I know you've been sniffing around my pussy for way too long, and I'm not going to lie, " +
                "I find it very arousing. So much so my pussy is soaked everytime you walk in the room. ",
            button: [
                { chatID: 92, text: "...", callback: "m91" }
            ]
        },
        {
            chatID: 92,
            speaker: "landlord",
            text: "I also know boys your age have sexual urges and I've been trying to contain those urges. ",
            button: [
                { chatID: 93, text: "...", callback: "m92" }
            ]
        },
        {
            chatID: 93,
            speaker: "landlord",
            text: "You should be free to explore your sexuality and to make up for all that time I've been repressing " +
                "you I'll help you explore that side of youself. Now just relax and let " + sc.n("landlord") + " help " +
                "get that cum out of you. ",
            button: [
                { chatID: 94, text: "...", callback: "m91" }
            ]
        },
        {
            chatID: 94,
            speaker: "me",
            text: "OOooo I'm cumming!",
            button: [
                { chatID: 95, text: "...", callback: "m93" }
            ]
        },
        {
            chatID: 95,
            speaker: "landlord",
            text: "Oh yes honey. Just let it flow. That's a good boy. ",
            button: [
                { chatID: 96, text: "...", callback: "m94" }
            ]
        },
        {
            chatID: 96,
            speaker: "landlord",
            text: "Don't think you can bug me when I'm watching my shows and taking a shower. That's rude. Now " +
                "go to bed honey. ",
            button: [
                { chatID: -1, text: "Ok", callback: "leave" }
            ]
        },
        {
            chatID: 97,
            speaker: "landlord",
            text: "You just don't give up do you. Everywhere I go you're sniffing around my pussy. Do you want to fuck it?",
            button: [
                { chatID: 98, text: "I ummmm", callback: "" }
            ]
        },
        {
            chatID: 98,
            speaker: "landlord",
            text: "Sigh. Fine strip off your clothes. We're only doing this once so you can get it out of your system. " +
                "After this we'll never have sex again and you'll stop trying. Promise?",
            button: [
                { chatID: 99, text: "Promise", callback: "f1" }
            ]
        },
        {
            chatID: 99,
            speaker: "landlord",
            text: "And no comming in me! If you even spill a drop of cum in me I'm going to remove your balls. Got it!",
            button: [
                { chatID: 100, text: "Got it!", callback: "f2" }
            ]
        },
        {
            chatID: 100,
            speaker: "landlord",
            text: "When you get older, it takes a bit to get the juices flowing. Let me just get started with a couple orgasms " +
                "so I can enjoy this. ",
            button: [
                { chatID: 101, text: "That's hot", callback: "f3" }
            ]
        },
        {
            chatID: 101,
            speaker: "landlord",
            text: "That should be wet enough. Now bring your dick to " + sc.n("landlord") + " so I can guide it in me. ",
            button: [
                { chatID: -1, text: "ok", callback: "f4" }
            ]
        },
        {
            chatID: 102,
            speaker: "landlord",
            text: "Oh shit! I didn't know you could fuck! Oh fuck fuck fuck. Fuck me fuck me fuck me!",
            button: [
                { chatID: 103, text: "....", callback: "" }
            ]
        },
        {
            chatID: 103,
            speaker: "landlord",
            text: "Shit! I'm cuming again. Fuck! I love your cock! ",
            button: [
                { chatID: 104, text: "....", callback: "" }
            ]
        },
        {
            chatID: 104,
            speaker: "landlord",
            text: "Oh fuck! Don't stop! I'm cumming again! ",
            button: [
                { chatID: 105, text: "I'm about to cum", callback: "f5" }
            ]
        },
        {
            chatID: 105,
            speaker: "landlord",
            text: "There you go. Just cum on " + sc.n("landlord") + "'s breasts. That's a good boy. ",
            button: [
                { chatID: 106, text: "Aaaaaaa", callback: "" }
            ]
        },
        {
            chatID: 106,
            speaker: "landlord",
            text: "Maybe I was wrong about you. Everyone should take a cock like that. It really is amazing. I'm going to " +
                "need more of that. Now run along, I've got to go  clean this off. ",
            button: [
                { chatID: -1, text: "ok", callback: "f6" }
            ]
        },
        {
            chatID: 107,
            speaker: "landlord",
            text: "So I found out an interesting bit of news from the girls. ",
            button: [
                { chatID: 108, text: "yes?", callback: "" }
            ]
        },
        {
            chatID: 108,
            speaker: "landlord",
            text: "It appears that you've been fucking them even though I forbade it. Girls get in here. ",
            button: [
                { chatID: 109, text: "!!!", callback: "c1" }
            ]
        },
        {
            chatID: 109,
            speaker: "landlord",
            text: "So it appears you three can't keep your hands off each other. I overheard you girls talking about it. " +
                "Since kicking you out didn't work we're going to try something different. " + sc.n("lola") + " take off " +
                "your shirt. ",
            button: [
                { chatID: 110, text: "?", callback: "" }
            ]
        },
        {
            chatID: 110,
            speaker: "lola",
            text: "My shirt?",
            button: [
                { chatID: 111, text: "...", callback: "" }
            ]
        },
        {
            chatID: 111,
            speaker: "landlord",
            text: "Don't argue. Take it off. I want you to see how shameful your actions are. ",
            button: [
                { chatID: 112, text: "...", callback: "c2" }
            ]
        },
        {
            chatID: 112,
            speaker: "landlord",
            text: sc.n("eva") + "You think this is funny. Take your shirt off too. ",
            button: [
                { chatID: 113, text: "...", callback: "c3" }
            ]
        },
        {
            chatID: 113,
            speaker: "eva",
            text: "Yes " + sc.n("landlord") + ".",
            button: [
                { chatID: 114, text: "...", callback: "c4" }
            ]
        },
        {
            chatID: 114,
            speaker: "landlord",
            text: "Now do you see how shameful this is? " + sc.n("me") + " can't control himself when you two are showing " +
                "your naughty bits. Show them how you can't control yourself. Take your pants off and show them your penis. ",
            button: [
                { chatID: 115, text: "[Show them your penis]", callback: "c5" }
            ]
        },
        {
            chatID: 115,
            speaker: "landlord",
            text: "Now for the past few years I've been teaching the girls about sex. A good open honest discussion " +
                "is what every girl needs. I haven't done a very good job becuase we haven't had a chance to go over " +
                "the penis yet. That's where you come in. I'm going to use you as my teaching model for my girls. ",
            button: [
                { chatID: 116, text: "?", callback: "c6" }
            ]
        },
        {
            chatID: 116,
            speaker: "landlord",
            text: "I've been avoiding using you because I didn't think you were ready for sex, but after the way you've " +
                "fucked me I know you're ready to help me teach these girls. " + sc.n("lola") +
                " strip down and get ready to put his cock in your mouth. ",
            button: [
                { chatID: 117, text: "...", callback: "" }
            ]
        },
        {
            chatID: 117,
            speaker: "lola",
            text: "huh?",
            button: [
                { chatID: 118, text: "...", callback: "" }
            ]
        },
        {
            chatID: 118,
            speaker: "landlord",
            text: "Don't play innocent with me. I already heard what happened so I know it won't be the first time. " +
                "I'm just going to make sure you're doing it right. It's ok, just open your mouth for his cock. ",
            button: [
                { chatID: 119, text: "...", callback: "c7" }
            ]
        },
        {
            chatID: 119,
            speaker: "landlord",
            text: "Good girl. " + sc.n("eva") + " you can get in there too. ",
            button: [
                { chatID: 120, text: "...", callback: "c8" }
            ]
        },
        {
            chatID: 120,
            speaker: "landlord",
            text: "You two really know what you're doing. I didn't not expect that. Well maybe " + sc.n("eva") + 
            " but no you my little " + sc.n("lola") + ".",
            button: [
                { chatID: 121, text: "...", callback: "c9" }
            ]
        },
        {
            chatID: 121,
            speaker: "landlord",
            text: "Slow down you two or he'll cum. " + sc.n("eva") + " turn around and present yourself to him. A good " +
                "girlfriend always shows shows her appreciation towards her man. ",
            button: [
                { chatID: 122, text: "...", callback: "c10" }
            ]
        },
        {
            chatID: 122,
            speaker: "landlord",
            text: "Somehow I knew you would be good at that. Now let me show you girls how to mount a cock and ride it. ",
            button: [
                { chatID: 123, text: "...", callback: "c11" }
            ]
        },
        {
            chatID: 123,
            speaker: "landlord",
            text: "So the first thing to do is make sure you're nice and wet. A dry pussy is a sad pussy. Now what I like " +
                "to do before inserting the penis is to...",
            button: [
                { chatID: 124, text: "...", callback: "c12" }
            ]
        },
        {
            chatID: 124,
            speaker: "landlord",
            text: "Well I can clearly see you're wet enough. I didn't teach you that so you could ignore my lessons. " +
                "Now pay attention we're going over inserting the penis. I'm going to sit on his cock and I need you two " +
                "to play with his balls. ",
            button: [
                { chatID: 125, text: "...", callback: "c13" }
            ]
        },
        {
            chatID: 125,
            speaker: "landlord",
            text: "Notice how my juices flow down his shaft. You two should lick that. Men always want a girl that " +
                "is comfortable licking antoher girl's juices. Becuase all men are pigs. " + sc.n("eva") + " it's your " +
                "turn. Hop on this dick. ",
            button: [
                { chatID: 126, text: "...", callback: "c14" }
            ]
        },
        {
            chatID: 126,
            speaker: "landlord",
            text: "That's great. Men love it when you moan. " + sc.n("lola") + " it's your turn. Hop on before he comes " +
                "and loses his boner. ",
            button: [
                { chatID: 127, text: "...", callback: "c15" }
            ]
        },
        {
            chatID: 127,
            speaker: "landlord",
            text: "That's great. Men love it when you moan. " + sc.n("lola") + " it's your turn. Hop on before he comes " +
                "and loses his boner. ",
            button: [
                { chatID: 128, text: "...", callback: "c15" }
            ]
        },
        {
            chatID: 128,
            speaker: "landlord",
            text: "Good " + sc.n("lola") + ". Rock your hips back into him more. Really let him know you love his cock. " +
                "Now I'm going to finish him off in my tits. Squeeze in girls so you can get some of the cum. ",
            button: [
                { chatID: 129, text: "...", callback: "c16" }
            ]
        },
        {
            chatID: 129,
            speaker: "landlord",
            text: "Good girls. Once you finsh licking each other off head to bed. ",
            button: [
                { chatID: -1, text: "...", callback: "c17" }
            ]
        },
    ];

    return cArray[chatID];
};
