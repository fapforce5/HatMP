//Room name

//sissies get walked around like dogs on leashes
//electricity - service - shocks - molest - Dr delivery boy 
var room950 = {};
room950.main = function () {
    $('#room-menu').show();
    $('#room_footer').hide();

    if (g.pass === "endSleepyTime") {
        g.pass = null;
        gv.set("cultDayCounter", 0);
        let cultRank = gv.get("cultRank");
        if (cultRank === "Cum Supplier") {
            nav.bg("950_cell/work0.jpg");
            chat(47, 950);
            return;
        }
        else if (cultRank === "Sissy?") {
            nav.bg("950_cell/work0.jpg");
            chat(91, 950);
            return;
        }
        if (future.get("ralphPole") > -1) {
            daily.set("celldoor_ralph");
        }
        else if (g.rand(0, 4) === 0) {
            daily.set("celldoor_blonde");
        }

        let cultLastClean = gv.get("cultLastClean");
        if (cultLastClean === null) {
            cultLastClean = g.dt;
            gv.set("cultLastClean", g.dt);
        }
        let cultLastCleanNumDays = g.diffDatesByDays(cultLastClean, g.dt);
        if (cultLastCleanNumDays > 3) {
            room950.btnclick("drawBG");
            nav.button({
                "type": "img",
                "name": "eatit",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "950_cell/eatit0.webp",
            }, 950);
            chat(10, 950);
            return;
        }
        if (cultRank === "Sissy") {
            room950.btnclick("drawBG");
            nav.killbutton("clean"); 
            nav.button({
                "type": "img",
                "name": "eatit",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "950_cell/eatit0.webp",
            }, 950);
            chat(92, 950);
            return;
        }
    }

    g.pass = null;

    let cultDayCounter = gv.get("cultDayCounter");
    switch (cultDayCounter) {
        case 0: char.settime(9, g.rand(3, 51)); break;
        case 1: char.settime(11, g.rand(3, 51)); break;
        case 2: char.settime(13, g.rand(3, 51)); break;
        case 3: char.settime(16, g.rand(3, 51)); break;
        case 4: char.settime(19, g.rand(3, 51)); break;
        default: char.settime(23, g.rand(3, 51)); break;
    }
    room950.btnclick("drawBG");
    
    room950.btnclick("bars");
    
    if (cl.stinky()) {
        nav.kill();
        nav.bg("950_cell/ubel2.webp");
        chat(14, 950);
        return;
    }

    if (cultDayCounter === 4) { //sperm
        if (g.dt.getDay() === 5) {
            //set the background person
            if (daily.get("celldoor_blonde")) {
                nav.bg("950_cell/door_bg0.webp");
            }
            else if (daily.get("celldoor_ralph")) {
                nav.bg("950_cell/door_bg1.webp");
            }
            else {
                nav.bg("950_cell/door_bg.webp");
            }
            nav.button({
                "type": "img",
                "name": "celldoor",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "950_cell/door_cult.webp",
            }, 950);
            chat(46, 950);
            return;
        }
        char.room(955);
        return;
    }
    if (cultDayCounter > 4) { //night
        room950.btnclick("drawBG"); 
        nav.button({
            "type": "btn",
            "name": "nap",
            "title": "Sleep",
            "left": 994,
            "top": 685,
            "width": 684,
            "height": 103,
            "image": "950_cell/bed.png",
            "night": "950_cell/bed_night.png"
        }, 950);
        return;
    }
    
    nav.button({
        "type": "btn",
        "name": "nap",
        "title": "Sleep",
        "left": 994,
        "top": 685,
        "width": 684,
        "height": 103,
        "image": "950_cell/bed.png",
            "night": "950_cell/bed_night.png"
    }, 950);

    if (!daily.get("food")) {
        nav.button({
            "type": "btn",
            "name": "food",
            "title": "Eat some food",
            "left": 1300,
            "top": 920,
            "width": 307,
            "height": 93,
            "image": "950_cell/food.png"
        }, 950);
    }

    nav.button({
        "type": "btn",
        "name": "window",
        "title": "Stare out the window",
        "left": 119,
        "top": 0,
        "width": 234,
        "height": 308,
        "image": "950_cell/window.png"
    }, 950);


    if (inv.has("chisel")) {
        $("#room-inv").show();
        nav.button({
            "type": "btn",
            "name": "brick",
            "title": "Loose Stone",
            "left": 832,
            "top": 511,
            "width": 132,
            "height": 79,
            "image": "950_cell/brick.png"
        }, 950);
    }
    else {
        $("#room-inv").hide();
    }

    sc.select("icon_activity", "950_cell/icon_activity.webp", 0);
    sc.select("icon_call", "950_cell/icon_call.webp", 1);
};

room950.btnclick = function (name) {
    switch (name) {
        case "bars":
            var cult950 = sc.get("cult");
            var cultbrick = gv.get("cultbrick");
            cult950 = cult950.l * 100 + cult950.c;
            nav.progressBar({
                "type": "zimg",
                "name": "progress_trust",
                "left": 400,
                "top": 30,
                "width": 1000,
                "height": 10,
                "color": (cult950 < 300 ? "red" : "green"),
                "maxVal": 1000,
                "val": cult950,
                "title": "Rank: " + gv.get("cultRank") + ". Days till Chaple: " + ((5 - g.dt.getDay() + 7) % 7)
            }, 322);

            if (cultbrick > 0 && cultbrick < 100) {
                nav.progressBar({
                    "type": "zimg",
                    "name": "progress_brick",
                    "left": 400,
                    "top": 60,
                    "width": 1000,
                    "height": 10,
                    "color": "brown",
                    "maxVal": 100,
                    "val": cultbrick,
                    "title": "Brick"
                }, 322);
            }
            break;
        case "increment":
            gv.mod("cultDayCounter", 1);
            char.room(950);
            break;
        case "drawBG":
            var cultLastClean = gv.get("cultLastClean");
            if (cultLastClean === null) {
                cultLastClean = g.dt;
                gv.set("cultLastClean", g.dt);
            }
            var cultLastCleanNumDays = g.diffDatesByDays(cultLastClean, g.dt);
            if (g.isNight()) {
                nav.bg("950_cell/cell_dark.jpg");
                if (daily.get("cumwall950")) {
                    nav.button({
                        "type": "img",
                        "name": "cell",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "950_cell/cell_cum.webp"
                    }, 950);
                }
            }
            else {
                nav.bg("950_cell/cell" + (cultLastCleanNumDays > 3 ? 3 : cultLastCleanNumDays) + ".jpg");
                if (daily.get("cumwall950")) {
                    nav.button({
                        "type": "img",
                        "name": "cell",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "950_cell/cell_cum.webp"
                    }, 950);
                }
                if (cultLastCleanNumDays > 0) {
                    nav.button({
                        "type": "btn",
                        "name": "clean",
                        "title": "Clean your cell",
                        "left": 374,
                        "top": 392,
                        "width": 398,
                        "height": 484,
                        "image": "950_cell/clean.png"
                    }, 950);
                }
            }
            break;
        case "clean":
            if (gv.get("energy") < 20) {
                chat(6, 950); 
            }
            else {
                gv.mod("energy", -20);
                nav.kill();
                daily.set("cumwall950", false);
                gv.set("cultLastClean", g.dt);
                room950.btnclick("drawBG");
                chat(9, 950);
            }
            break;
        case "icon_activity":
            nav.killbuttonStartsWith("icon_"); 
            sc.select("icon_pushup", "950_cell/icon_pushup.webp", 0);
            sc.select("icon_squats", "950_cell/icon_squats.webp", 1);
            sc.select("icon_jackoff", "950_cell/icon_jackoff.webp", 2);
            sc.select("icon_door", "950_cell/icon_door.webp", 3);
            sc.select("icon_cancel", "950_cell/icon_cancel.webp", 4);
            break;
        case "icon_cancel":
            nav.killbuttonStartsWith("icon_"); 
            sc.select("icon_activity", "950_cell/icon_activity.webp", 0);
            sc.select("icon_call", "950_cell/icon_call.webp", 1);
            break;
        case "icon_jackoff":
            nav.kill();
            nav.bg("950_cell/jack0_" + gender.pronoun("f") + ".webp"); 
            nav.next("icon_jackoff1");
            break;
        case "icon_jackoff1":
            nav.kill();
            nav.bg("950_cell/jack1_" + gender.pronoun("f") + ".webp");
            cl.doCum();
            daily.set("cumwall950");
            chat(8, 950);
            break;
        case "icon_pushup":
            if (gv.get("energy") < 50) {
                chat(6, 950);
            }
            else {
                nav.killall();
                levels.mod("strength", 35);
                levels.mod("fitness", 15);
                gv.mod("energy", -50);
                nav.bg("950_cell/pubg.jpg");
                nav.button({
                    "type": "img",
                    "name": "pu",
                    "left": 197,
                    "top": 0,
                    "width": 1000,
                    "height": 1080,
                    "image": "950_cell/pu.gif"
                }, 950);
                chat(7, 950);
            }
            break;
        case "icon_squats":
            if (gv.get("energy") < 50) {
                chat(6, 950);
            }
            else {
                nav.killall();
                levels.mod("strength", 15);
                levels.mod("fitness", 35);
                gv.mod("energy", -50);
                nav.bg("950_cell/pubg.jpg");
                nav.button({
                    "type": "img",
                    "name": "pu",
                    "left": 160,
                    "top": 0,
                    "width": 1200,
                    "height": 1080,
                    "image": "950_cell/squat.gif"
                }, 950);
                chat(7, 950);
            }
            break;
        case "icon_jackoff":

            break;
        case "food":
            chat(0, 950);
            break;
        case "nap":
            nav.killall();
            if (gv.get("cultDayCounter") < 5) {
                g.pass = null;
                gv.mod("cultDayCounter", 1);
                nav.bg("950_cell/nap.webp");
                gv.mod("energy", 50);
                g.roomTimeout = setTimeout(function () {
                    char.room(950);
                }, 1000);
            }
            else {
                g.pass = 950;
                char.room(28);
            }
            break;
        case "foodCarrot":
        case "foodBanana":
        case "foodCucumber":
        case "foodApple":
            daily.set("food");
            if (levels.analSize(inv.anal(name)).canTake) {
                nav.killall();
                gv.mod('dildoanal', 1);
                levels.anal(inv.anal(name));
                nav.bg("950_cell/" + name + "_stuff.jpg");
                chat(3, 950);
            }
            else {
                chat(2, 950);
            }
            break;
        case "window":
            if (daily.get("daria")) {
                nav.killall();
                nav.bg("950_cell/view.jpg");
                chat(5, 950);
            }
            else {
                switch (sc.taskGetStep("daria", "cult")) {
                    case -1:
                    case 0:
                        nav.killall();
                        sc.show("daria");
                        daily.set("daria");
                        sc.startMission("daria", "cult");
                        sc.completeMissionTask("daria", "cult", 0);
                        nav.bg("950_cell/viewd.jpg");
                        if (sc.getMission("daria", "cabin").notStarted)
                            chat(66, 950);
                        else
                            chat(68, 950);
                        break;
                    case 1:
                        nav.killall();
                        daily.set("daria");
                        nav.bg("950_cell/viewd.jpg");
                        sc.completeMissionTask("daria", "cult", 1);
                        chat(75, 950);
                        break;
                    case 2:
                        nav.killall();
                        daily.set("daria");
                        nav.bg("950_cell/viewd.jpg");
                        if (gv.get("cultRank") === "Sissy") {
                            sc.completeMissionTask("daria", "cult", 2);
                            gv.set("cultCumJob", 1);
                            chat(83, 950);
                        }
                        else {
                            chat(82, 950);
                        }
                        break;
                    case 3:
                        nav.killall();
                        daily.set("daria");
                        inv.add("chisel");
                        gv.set("cultbrick", 1);
                        nav.bg("950_cell/viewd.jpg");
                        sc.completeMissionTask("daria", "cult", 3);
                        chat(88, 950);
                        break;
                    default:
                        nav.killall();
                        nav.bg("950_cell/view.jpg");
                        chat(5, 950);
                        break;
                }
            }
            break;
        case "brick":
            if (sc.getMission("bodhi", "cult").notStarted) {
                if (gv.get("energy") < 60) {
                    chat(89, 950);
                    return;
                }
                nav.kill();
                var brickStrength = (levels.get("strength").l * 3) + 3;
                if (brickStrength > 23) {
                    brickStrength = 23;
                }
                gv.mod("cultbrick", brickStrength);
                gv.mod("energy", -60);
                room950.btnclick("bars");

                if (gv.get("cultbrick") < 100) {
                    nav.bg("950_cell/chisel.jpg");
                    chat(21, 950);
                }
                else {
                    sc.startMission("bodhi", "cult");
                    sc.show("bodhi");
                    sc.completeMissionTask("bodhi", "cult", 0);
                    nav.bg("950_cell/b1.jpg");
                    chat(23, 950);
                }
            }
            else {
                //switch (sc.taskGetStep("bodhi", "cult")) {
                //    case 1:
                //        sc.completeMissionTask("bodhi", "cult", 1);
                //        nav.bg("950_cell/b3.jpg");
                //        chat(29, 950);
                //        break;
                //    case 2:
                //        sc.completeMissionTask("bodhi", "cult", 2);
                //        gv.set("cultCumJob", 1);
                //        nav.bg("950_cell/b3.jpg");
                //        chat(36, 950);
                //        break;
                //    case 3:
                //        sc.completeMissionTask("bodhi", "cult", 3);
                //        nav.bg("950_cell/bb30.jpg");
                //        chat(42, 950);
                //        break;
                //}
            }
            break;
        case "bb0":
            nav.killall();
            nav.bg("950_cell/bb1.jpg");
            chat(37, 950);
            break;
        case "bb2":
            nav.killbutton("bb2");
            nav.button({
                "type": "tongue",
                "name": "bb3",
                "left": 1205,
                "top": 539,
                "width": 186,
                "height": 186,
                "image": "950_cell/bb2.png",
                "title": "Eat it sissy"
            }, 950);
            chat(39, 950);
            break;
        case "bb3":
            nav.killall();
            nav.bg("950_cell/b2.jpg");
            sc.modLevel("bodhi", 100, 10); 
            chat(40, 950);
            break;
        case "icon_call":
            nav.kill();
            if (gv.get("cultCumJob") > 1) {
                nav.bg("950_cell/ubel2.webp"); 
                sc.select("icon_cultclean", "950_cell/icon_cultclean.webp", 0);
                sc.select("icon_cultsweep", "950_cell/icon_cultsweep.webp", 1);
                sc.select("icon_kissingbooth", "950_cell/icon_kissingbooth.webp", 2);
                sc.select("icon_toilet", "950_cell/icon_culttoilet.webp", 3);
                sc.select("icon_delivery", "950_cell/icon_deliveries.webp", 4);
                sc.select("icon_dooropen", "950_cell/icon_dooropen.webp", 5);
                sc.selectCancel("reset", 6);
            }
            else if (gv.get("cultCumJob") === 1) {
                nav.bg("950_cell/ubel2.webp");
                chat(90, 950);
            }
            else {
                nav.bg("950_cell/ubel2.webp"); 
                chat(17, 950);
            }
            break;
        case "icon_cultclean":
            g.pass = "clean";
            char.room(957);
            break;
        case "icon_cultsweep":
            g.pass = "sweep";
            char.room(957);
            break;
        case "icon_kissingbooth":
            nav.kill();
            if (sc.getLevel("cult").l < 3)
                chat(99999, 950);
            else {
                g.pass = "kissingbooth";
                char.room(957);
            }
            break;
        case "icon_delivery":
            nav.kill();
            if (sc.getLevel("cult").l < 6)
                chat(94, 950);
            else {
                g.pass = {
                    e: "panties",
                    compete: false,
                    q: null
                };
                cl.c.panties = "missy";
                cl.display();
                g.map = null;
                nav.bg("950_cell/panties.webp");
                chat(95, 950);
            }
            break;
        case "icon_toilet":
            nav.kill();
            if (sc.getLevel("cult").l < 5)
                chat(24, 950);
            else {
                g.pass = "toilet";
                char.room(957);
            }
            break;
        case "icon_door":
            nav.kill();
            room950.btnclick("bars");
            if (daily.get("celldoor_blonde")) {
                nav.bg("950_cell/door_bg0.webp");
            }
            else if (daily.get("celldoor_ralph")) {
                nav.bg("950_cell/door_bg1.webp");
            }
            else {
                nav.bg("950_cell/door_bg.webp");
            }

            if (sc.getMission("ralph", "cult").startedOrComplete && sc.getMissionTask("ralph", "cult", 0).notStarted) {
                nav.button({
                    "type": "img",
                    "name": "celldoor",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "950_cell/door_ralph.webp",
                }, 950);
                chat(26, 950);
            }
            else {
                switch (g.rand(0, 4)) {
                    case 0:
                        nav.button({
                            "type": "img",
                            "name": "celldoor",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "950_cell/door_empty.webp",
                        }, 950);
                        chat(31, 950);
                        break;
                    case 1:
                        if (sc.getMission("ralph", "cult").notStarted) {
                            nav.button({
                                "type": "img",
                                "name": "celldoor",
                                "left": 0,
                                "top": 0,
                                "width": 1920,
                                "height": 1080,
                                "image": "950_cell/door_empty.webp",
                            }, 950);
                            chat(31, 950);
                        }
                        else {
                            nav.bg("950_cell/door_ralph.webp");
                            nav.button({
                                "type": "img",
                                "name": "celldoor",
                                "left": 0,
                                "top": 0,
                                "width": 1920,
                                "height": 1080,
                                "image": "950_cell/door_ralph.webp",
                            }, 950);
                            chat(32, 950);
                        }
                    case 2:
                        nav.button({
                            "type": "img",
                            "name": "celldoor",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "950_cell/door_bj.webp",
                        }, 950);
                        chat(33, 950);
                        break;
                    case 3:
                        if (daily.get("cultMilkMaidChat")) {
                            nav.button({
                                "type": "img",
                                "name": "celldoor",
                                "left": 0,
                                "top": 0,
                                "width": 1920,
                                "height": 1080,
                                "image": "950_cell/door_empty.webp",
                            }, 950);
                            chat(31, 950);
                        }
                        else {
                            daily.set("cultMilkMaidChat");
                            sc.modLevel("cult", 15, 5);
                            switch (gv.get("cultMilkMaidChat")) {
                                case 0:
                                    nav.button({
                                        "type": "img",
                                        "name": "celldoor",
                                        "left": 0,
                                        "top": 0,
                                        "width": 1920,
                                        "height": 1080,
                                        "image": "950_cell/door_girl.webp",
                                    }, 950);
                                    gv.mod("cultMilkMaidChat", 1);
                                    chat(36, 950);
                                    break;
                                case 1:
                                    nav.button({
                                        "type": "img",
                                        "name": "celldoor",
                                        "left": 0,
                                        "top": 0,
                                        "width": 1920,
                                        "height": 1080,
                                        "image": "950_cell/door_girl.webp",
                                    }, 950);
                                    gv.mod("cultMilkMaidChat", 1);
                                    chat(40, 950);
                                    break;
                                default:
                                    nav.button({
                                        "type": "img",
                                        "name": "celldoor",
                                        "left": 0,
                                        "top": 0,
                                        "width": 1920,
                                        "height": 1080,
                                        "image": "950_cell/door_girlcan.webp",
                                    }, 950);
                                    chat(45, 950);
                                    break;
                            }
                            break;
                        }
                    break;
                }
            }
            break;
        case "icon_dooropen":
            if (sc.getLevel("cult").l < 7)
                chat(25, 950);
            break;
        case "door_bj":
            nav.modbutton("celldoor", "950_cell/door_bj" + g.internal + ".webp", null, null);
            if (g.internal > 1) {
                nav.killbutton("door_bj");
                levels.oral(4, "m", "cult", true);
                sc.modLevel("cult", 20, 10);
                room950.btnclick("bars");
                chat(35, 950);
            }
            g.internal++;
            break;
        case "reset":
            char.room(950);
            break;
        case "whip":
            nav.kill();
            if (g.internal === 0) {
                nav.bg("950_cell/s6.webp");
                g.roomTimeout = setTimeout(function () {
                    nav.bg("950_cell/s7.webp");
                    chat(61, 950);
                }, 1500);
            }
            else {
                nav.bg("950_cell/s8.webp");
                g.roomTimeout = setTimeout(function () {
                    nav.bg("950_cell/s9.webp");
                    chat(62, 950);
                }, 1500);
            }
            break;
        case "eatit":
            nav.bg("950_cell/eatit2.jpg");
            zcl.displayMain(400, 150, .4, "", true);
            chat(12, 950);
            break;
        default:
            break;
    }
};

room950.chatcatch = function (callback) {
    switch (callback) {
        case "b1":
        case "b2":
        case "b3":
        case "b4":
        case "b5":
        case "bb31":
        case "shower2":
        case "shower3":
        case "shower4":
        case "shower5":
            nav.bg("950_cell/" + callback + ".jpg");
            break;
        case "s0":
        case "s1":
        case "s2":
        case "s3":
        case "s10":
        case "s11":
        case "s12":
            nav.bg("950_cell/" + callback + ".webp");
            break;
        case "s4":
            nav.bg("950_cell/s2.webp");
            if (sissy.st[17].ach)
                chat(58, 950);
            else
                chat(60, 950);
            break;
        case "shower0":
            nav.bg("950_cell/shower0.webp");
            zcl.displayMain(400, 1150, .065, "", true);
            nav.button({
                "type": "img",
                "name": "shower",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "950_cell/shower0_fg.webp"
            }, 950);
            cl.clean();
            cl.shave();
            break;
        case "shower1":
            nav.kill();
            nav.bg("950_cell/shower1.webp");
            zcl.bent(650, 1050, .2, "", false);
            nav.button({
                "type": "img",
                "name": "shower",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "950_cell/shower1_fg.webp"
            }, 950);
            gv.clearButtCum();
            break;
        case "increment":
            room950.btnclick("increment");
            break;
            case "eat0":
                daily.set("food");
                gv.mod("energy", 100);
            break;
            case "food0":
                nav.killall();
                char.changeMenu("hide", false, true);
                if(cl.c.butthole < 3)
                    nav.bg("950_cell/food0.jpg");
                else
                    nav.bg("950_cell/food1.jpg");
                nav.button({
                    "type": "btn",
                    "name": "foodCarrot",
                    "left": 50,
                    "top": 907,
                    "width": 687,
                    "height": 173 ,
                    "image": "950_cell/foodCarrot.png",
                    "title": "Put a carrot in your butt"
                }, 950);
                nav.button({
                    "type": "btn",
                    "name": "foodBanana",
                    "left": 50,
                    "top": 601,
                    "width": 471,
                    "height": 295,
                    "image": "950_cell/foodBanana.png",
                    "title": "Feed your hungy hole a banana"
                }, 950);
                nav.button({
                    "type": "btn",
                    "name": "foodCucumber",
                    "left": 50,
                    "top": 400,
                    "width": 770,
                    "height": 207,
                    "image": "950_cell/foodCucumber.png",
                    "title": "Shove a cucumber in sissy pussy"
                }, 950);
                nav.button({
                    "type": "btn",
                    "name": "foodApple",
                    "left": 50,
                    "top": 0,
                    "width": 371,
                    "height": 403,
                    "image": "950_cell/foodApple.png",
                    "title": "What are you doing? Slut!"
                }, 950);
            break;
        case "bb0":
                nav.button({
                    "type": "btn",
                    "name": "bb0",
                    "left": 998,
                    "top": 302,
                    "width": 652,
                    "height": 561,
                    "image": "950_cell/bb0.png",
                    "title": "poke his butt"
                }, 950);
            break;
            case "bb2":
                nav.killall();
                nav.bg("950_cell/bb2.jpg");
                nav.button({
                    "type": "tongue",
                    "name": "bb2",
                    "left": 1205,
                    "top": 539,
                    "width": 186,
                    "height": 186,
                    "image": "950_cell/bb2.png",
                    "title": "Eat it sissy"
                }, 950);
                break;
            case "resetWindow":
                nav.bg("950_cell/view.jpg");
            break;
        case "door_bj0":
            nav.modbutton("celldoor", "950_cell/door_bj0.webp", null, null);
            g.internal = 1;
            nav.next("door_bj");
            break;
        case "door_girlcan":
            nav.modbutton("celldoor", "950_cell/door_girlcan.webp", null, null);
            break;
        case "surmon":
            gv.mod("cultDayCounter", 1);
            char.room(953);
            break;
        case "s5":
            g.internal = 0;
            nav.bg("950_cell/s5.webp");
            nav.custom("whip", "whip");
            break;
        case "s8":
            g.internal = 1;
            nav.custom("whip", "whip");
            break;
        case "room951x":
            gv.set("cultRank", "Sissy");
            gv.mod("cultDayCounter", 1);
            char.room(951);
            break;
        case "room955":
            char.addtime(120);
            char.room(955);
            break;
        case "eatit1":
            nav.killall();
            nav.button({
                "type": "tongue",
                "name": "eatit",
                "left": 888,
                "top": 623,
                "width": 204,
                "height": 203,
                "image": "950_cell/eatit1.png",
                "title": "Eat the pussy"
            }, 950);
            nav.bg("950_cell/eatit1.jpg");
            g.internal = 1;
            break;
        case "eatit3":
            nav.bg("950_cell/eatit3.jpg"); 
            break;
        case "eatit4":
            daily.set("eatit950");
            levels.oral(3, "f", "cult");
            char.room(950);
            break;
        case "hormone0":
            nav.kill();
            nav.bg("950_cell/hormone0.webp");
            zcl.bent(0, 300, .8, "", false);
            nav.button({
                "type": "img",
                "name": "pill",
                "left": 1042,
                "top": 374,
                "width": 68,
                "height": 51,
                "image": "211_meeting/pills1.png",
            }, 250);
            gv.mod("hormone", 35);
            break;
        case "serve":
            gv.set("cultCumJob", 2); 
            room950.btnclick("icon_call");
            break;
        case "room956":
            char.room(956);
            break;
        case "room952":
            char.room(952);
            break;
        case "reset":
            char.room(950);
            break;
        default:
            break;
    }
};

room950.chat = function (chatID) {
    if (chatID === 900) {
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "It's nice that they at least feed me. ",
                button: [
                    { chatID: 1, text: "Eat the food", callback: "eat0" },
                    { chatID: -1, text: "Play with the food", callback: "food0" },
                    { chatID: -1, text: "cancel", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "Mmmmm sure is good!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 2,
                speaker: "thinking",
                text: "That's too big for my poor tight asshole. Maybe something smaller. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "That feels good. I needed something in my hole. ",
                button: [
                    { chatID: -1, text: "Finish", callback: "increment" },
                    { chatID: 4, text: "Eat the food you just stuffed in your asshole", callback: "food1" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "I'm such a dirty dirty whore. I mean a really filthy fucking pig whore. There is no level I won't degrade myself " +
                    "to. ",
                button: [
                    { chatID: -1, text: "Finish", callback: "increment" },
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "Nothing here.",
                button: [
                    { chatID: -1, text: "Stop Looking", callback: "increment" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "Too tired to do that. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "Gotta get in shape to get out of here!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "*whew* I needed that!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "All clean!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 10,
                speaker: "cult",
                text: "It's a damn mess in here. Disgusting. There's dirt on the ground, a puddle of I " +
                    "don't even know, and foot crumbs. Do you want ants? Becuse this is how you get ants. " +
                    "Come here! Eat my pussy!",
                button: [
                    { chatID: 11, text: "wha?", callback: "eatit1" }
                ]
            },
            {
                chatID: 11,
                speaker: "cult",
                text: "You must be punished! Now get on your knees and eat my PUSSY! ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "cult",
                text: "Oh fuck! You are awesome! I'm going to cum all over your face! ",
                button: [
                    { chatID: 13, text: "*lick* *lick* *lick*", callback: "eatit3" }
                ]
            },
            {
                chatID: 13,
                speaker: "cult",
                text: "Now clean up this mess bitch! And to make sure you won't be leaving this cell unit " +
                    "it is clean! ",
                button: [
                    { chatID: -1, text: "Right away!", callback: "eatit4" }
                ]
            },
            {
                chatID: 14,
                speaker: "cult",
                text: "Time for your shower, shave, and cleaning; outside and in, hehehe. ",
                button: [
                    { chatID: 15, text: "???", callback: "shower0" }
                ]
            },
            {
                chatID: 15,
                speaker: "cult",
                text: "Now to clean your insides. ",
                button: [
                    { chatID: 16, text: "*sigh*", callback: "shower1" }
                ]
            },
            {
                chatID: 16,
                speaker: "cult",
                text: "Back to your cell, slave! ",
                button: [
                    { chatID: -1, text: "[Back to your cell]", callback: "increment" }
                ]
            },
            {
                chatID: 17,
                speaker: "cult",
                text: "Keep it down you! ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 18,
                speaker: "cult",
                text: "I'm glad you know your place is to serve. You will crawl to the showers, now down slave " +
                    "and avert your eyes. ",
                button: [
                    { chatID: 19, text: "[Crawl on your hands and knees, eyes down to the shower]", callback: "shower2" }
                ]
            },
            {
                chatID: 19,
                speaker: "cult",
                text: "Keep your eyes on the floor while I pick someone for you. ",
                button: [
                    { chatID: 20, text: "...", callback: "shower3" }
                ]
            },
            {
                chatID: 20,
                speaker: "cult",
                text: "She'll do nicely. Now clean her good slave. ",
                button: [
                    { chatID: 21, text: "...", callback: "shower4" }
                ]
            },
            {
                chatID: 21,
                speaker: "cult",
                text: "Now that her front is clean, you need to clean the back. ",
                button: [
                    { chatID: 22, text: "...", callback: "shower5" }
                ]
            },
            {
                chatID: 22,
                speaker: "cult",
                text: "Good slave. Back to your cell. ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 23,
                speaker: "cult",
                text: "You aren't worthy to sweep our floors",
                button: [
                    { chatID: -1, text: "[Need cult level 4]", callback: "" }
                ]
            },
            {
                chatID: 24,
                speaker: "cult",
                text: "You aren't worthy of our piss",
                button: [
                    { chatID: -1, text: "[Need cult level 5]", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "cult",
                text: "You haven't proved yourself worthy of leaving this cell. ",
                button: [
                    { chatID: -1, text: "[Need cult level 7]", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "ralph",
                text: "Oh man! I thought I'd never see you again! Welcome to hell! Did they kidnap you too?",
                button: [
                    { chatID: 27, text: "Totally! So glad to see you! I was afraid you were dead!", callback: "" }
                ]
            },
            {
                chatID: 27,
                speaker: "ralph",
                text: "Not dead, just stuck. Also my ass and nipples really hurts! So glad there's another sissy " +
                    "here to help take these horny men! Why is it every guy wants to twist my nipples and spank " +
                    "my ass. Hard! It's like they don't even see me as a person! ",
                button: [
                    { chatID: 28, text: "Your boobs are really coming in. ", callback: "" }
                ]
            },
            {
                chatID: 28,
                speaker: "ralph",
                text: "They really are! I will say my breasts are really coming in. I do hope they get huge. " +
                    "Mostly becuase I want my boobs to be bigger than my belly lol. But really I can't wait to get " +
                    "out of here. No videos, no figures, no magazines, no nothing! I'm getting behind on my shows! " +
                    "Also my parents are probably worried. ",
                button: [
                    { chatID: 30, text: "They are so worried! ", callback: "" }
                ]
            },
            {
                chatID: 29,
                speaker: "ne",
                text: "NOOP",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 30,
                speaker: "ralph",
                text: "*whispering* We gotta get a way out. I've heard things about sissies once they're done using " +
                    "them that scares me. You have to play their game so we can make a plan to get out of here. Just " +
                    "pretend to be their friend and they'll let you out. I've got to go sweep. Later",
                button: [
                    { chatID: -1, text: "Later", callback: "increment" }
                ]
            },
            {
                chatID: 31,
                speaker: "thinking",
                text: "No one's out right now. ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 32,
                speaker: "ralph",
                text: "Just be cool and play along. They'll let you out. Then we can try to get out of here.",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 33,
                speaker: "cult",
                text: "Hey. New " + gender.pronoun("boy") + ". Suck my dick? I know you want to.",
                button: [
                    { chatID: -1, text: "[Get on your knees suck his dick]", callback: "door_bj0" },
                    { chatID: 34, text: "No way!", callback: "" }
                ]
            },
            {
                chatID: 34,
                speaker: "cult",
                text: "Hahaha! Ok. I'll get one of these other sissies to do it. ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 35,
                speaker: "cult",
                text: "Good " + gender.pronoun("sissy") + "! You know your worth!",
                button: [
                    { chatID: -1, text: "*swallows his cum*", callback: "increment" }
                ]
            },
            {
                chatID: 36,
                speaker: "!milkmaid",
                text: "May Azrael bless you. Welcome to our cult. I do hope these boys haven't been too rough with you. ",
                button: [
                    { chatID: 37, text: "Who are you?", callback: "" }
                ]
            },
            {
                chatID: 37,
                speaker: "!milkmaid",
                text: "I'm a milk maid. Unless you're asking my name. Then I'm a milk maid. Milk maids don't " +
                    "have names or positions here. We all live to serve and follow the orders of the Studs. ",
                button: [
                    { chatID: 38, text: "The Studs?", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "!milkmaid",
                text: "Hehe! They're the boys that think they run this place. Really the only power they " +
                    "have is where they put their penises. The real power is from the Priests and the High Priest. " +
                    "They are the ones that will protect us from the coming of Azrael.",
                button: [
                    { chatID: 39, text: "...", callback: "" }
                ]
            },
            {
                chatID: 39,
                speaker: "!milkmaid",
                text: "You know, you're really cute. Some day I hope you'll join us. We can always use " +
                    "more girls. There's just so many penises to drain the cum from. ",
                button: [
                    { chatID: -1, text: "yeah. Cool. ", callback: "increment" }
                ]
            },
            {
                chatID: 40,
                speaker: "!milkmaid",
                text: "May Azrael bless you. How's your day going? ",
                button: [
                    { chatID: 42, text: "Oh. You know. So why are you here?", callback: "" }
                ]
            },
            {
                chatID: 41,
                speaker: "me",
                text: "NOOP ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 42,
                speaker: "!milkmaid",
                text: "I'm here to serve Azreal silly. When Azrael comes to this world only the true " +
                    "followers will be saved. All others will perish in hell fire. I don't want to perish " +
                    "in hell fire silly. That would really hurt. ",
                button: [
                    { chatID: 43, text: "But what if Azrael isn't real? ", callback: "" }
                ]
            },
            {
                chatID: 43,
                speaker: "!milkmaid",
                text: "Oh haha. That's funny. If Azrael isn't really real, then why would we all be here. " +
                    "He has to be real. I've seen things during Friday mass that can only be explained by " +
                    "the coming of Azrael. ",
                button: [
                    { chatID: 44, text: "...", callback: "door_girlcan" }
                ]
            },
            {
                chatID: 44,
                speaker: "!milkmaid",
                text: "Don't worry your pretty little head about things. Here, have an energy drink! Every " +
                    "time my brain starts to hurt from thinking I just drink one of these and I'm ready to " +
                    "serve again! Hehe!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 45,
                speaker: "!milkmaid",
                text: "May Azrael bless you. I brought you an energy drink! Can't wait for you to join " +
                    "us as a Milk Maid. hehe",
                button: [
                    { chatID: -1, text: "Me too. ", callback: "increment" }
                ]
            },
            {
                chatID: 46,
                speaker: "cult",
                text: "The time for Sermon has come. Follow us. ",
                button: [
                    { chatID: -1, text: "[Follow them]", callback: "surmon" }
                ]
            },
            {
                chatID: 47,
                speaker: "cult",
                text: "Wake up! Time to prove you're really one of us! ",
                button: [
                    { chatID: 48, text: "[Follow them]", callback: "s0" }
                ]
            },
            {
                chatID: 48,
                speaker: "cult",
                text: "The *scoffs* Cum Supplier is here sir.",
                button: [
                    { chatID: 49, text: "...", callback: "" }
                ]
            },
            {
                chatID: 49,
                speaker: "ubel",
                text: "Good, good. Leave us. ",
                button: [
                    { chatID: 50, text: "...", callback: "s1" }
                ]
            },
            {
                chatID: 50,
                speaker: "ubel",
                text: "So " + gender.pronoun("he") + " thinks " + gender.pronoun("he") + "'s a Cum " +
                    "Supplier and wants to be part of my Carnal Union of Mortals? We shall see if " +
                    gender.pronoun("he") + "'s really a true believer. ",
                button: [
                    { chatID: 51, text: "What are you going to do? ", callback: "" }
                ]
            },
            {
                chatID: 51,
                speaker: "ubel",
                text: "Not me; you. You see, Cum Suppliers are loyal to the High Priest of CUM. They are " +
                    "so loyal they do what's ordered of them without question, without doubt, without mercy. " +
                    "They know only I can grant them eternal life when Azrael comes around. Do you believe only " +
                    "I can grant you eternal life?",
                button: [
                    { chatID: 52, text: "I do", callback: "s2" }
                ]
            },
            {
                chatID: 52,
                speaker: "ubel",
                text: "We shall see, because I won't grant everyone eternal life, only the worthy. All " +
                    "others are just resources we use and throw away. This one here I thought was a " +
                    "resource, but it turns out they are of no use for us, so we shall throw them away. " +
                    "And when I say we, I do mean you. ",
                button: [
                    { chatID: 53, text: "*gasp*", callback: "" }
                ]
            },
            {
                chatID: 53,
                speaker: "!martin",
                text: "Please let me go, I won't say anything. *sob* I just want to go home. What did I do? ",
                button: [
                    { chatID: 54, text: "...", callback: "s3" }
                ]
            },
            {
                chatID: 54,
                speaker: "ubel",
                text: "Awww. You can't do anything, and that's why you're here. I was dissappointed " +
                    "when I found out we can't use you to bring about Azrael, but you do have another use...",
                button: [
                    { chatID: 55, text: "...", callback: "" }
                ]
            },
            {
                chatID: 55,
                speaker: "ubel",
                text: "You will be used to prove " + sc.n("me") + "'s commitment our church. You see I command " +
                    "him to whip him to your death. That is the only way we will know his true alegence. I was " +
                    "going to just throw you away, but now. Now you can continue to have purpose! ",
                button: [
                    { chatID: 56, text: "...no", callback: "s2" }
                ]
            },
            {
                chatID: 56,
                speaker: "!martin",
                text: "...please no... please. I'll do anything you want. Just tell me. I know I can't be the mother, " +
                    "but I'll do anything to be useful. Please just let me be useful! Please!!!",
                button: [
                    { chatID: 57, text: "...", callback: "" }
                ]
            },
            {
                chatID: 57,
                speaker: "ubel",
                text: "Oh, I know you'll do what ever I want. And now I want " + sc.n("me") + " to prove " +
                    "their worth and kill you. Here, " + sc.n("me") + ", take my whip. Whip this trash until " +
                    "he bleeds out and prove you are the man you claim to be! ",
                button: [
                    { chatID: -1, text: "[Take the whip]", callback: "s4" },
                    { chatID: 59, text: "NO! No, I will not whip him. This is evil, sick and twisted!", callback: "" },
                ]
            },
            {
                chatID: 58,
                speaker: "!martin",
                text: sc.n("me") + ". Please. I know you. I know you're just as scared as I am. You and I " +
                    "aren't like them. We want to make people happy, not kill them. Please put down the whip. " +
                    "You don't have to do this. You're better than this. Please, just let me go home. ",
                button: [
                    { chatID: 59, text: "You're right. [Lay down the whip]", callback: "" },
                    { chatID: -1, text: "I have no choice. I must whip you to death. ", callback: "s5" },
                ]
            },
            {
                chatID: 59,
                speaker: "ubel",
                text: "Hahaha! I knew you wern't a Cum Supplier! We all knew it. Castellan! Put this Sissy " +
                    "in the box, and when your done raping her, put " + gender.pronoun("her") + " back in " +
                    gender.pronoun("her") + " cell. ",
                button: [
                    { chatID: -1, text: "Crap. ", callback: "room951x" },
                ]
            },
            {
                chatID: 60,
                speaker: "!martin",
                text: sc.n("me") + ". Please. I don't know you, but I know you're just as scared as I am. I can tell you're " +
                    "not like them. Please put down the whip. " +
                    "You don't have to do this. You're better than this. Please, just let me go home. ",
                button: [
                    { chatID: 59, text: "You're right. [Lay down the whip]", callback: "" },
                    { chatID: -1, text: "I have not choice. I must whip you to death. ", callback: "s5" },
                ]
            },
            {
                chatID: 61,
                speaker: "!martin",
                text: "AAAaaaAAaa *heavy breathing* AAaaaa Please! Please! I don't want to die!!!",
                button: [
                    { chatID: -1, text: "...", callback: "s8" },
                ]
            },
            {
                chatID: 62,
                speaker: "!martin",
                text: "AAAaaaAAaa *heavy breathing* AAaaaa Don't kill me! I'll do anything! Anything! I'll " +
                    "be your slave forever! I'll do what ever you want!",
                button: [
                    { chatID: 63, text: "...", callback: "s10" },
                ]
            },
            {
                chatID: 63,
                speaker: "ubel",
                text: "See the blood running down her back. That's her life force draining away. All the " +
                    "non-believers will feel their life force drain into the sewers when I bring about " +
                    "Azrael upon them! Whip her again! WHIP HER UNTIL SHE NO LONGER EXISTS IN THIS WORLD!!!",
                button: [
                    { chatID: 64, text: "...", callback: "s11" },
                ]
            },
            {
                chatID: 64,
                speaker: "missy",
                text: "Sick fuck! ",
                button: [
                    { chatID: 65, text: "huh?", callback: "s12" },
                ]
            },
            {
                chatID: 65,
                speaker: "missy",
                text: "We don't have a lot of time, I had to rush my plan so your dumb ass didn't kill " +
                    "poor " + sc.n("!martin") + " here. Just follow me and don't stop running!",
                button: [
                    { chatID: -1, text: "Yeah!", callback: "room955" },
                ]
            },
            {
                chatID: 66,
                speaker: "me",
                text: "Oh! Hi.",
                button: [
                    { chatID: 67, text: "...", callback: "" }
                ]
            },
            {
                chatID: 67,
                speaker: "daria",
                text: "Hey dumbass. I thought I told you not to come here. You got what you deserve. Bye! ",
                button: [
                    { chatID: 70, text: "Wait. Don't take off. I've been taken prisoner and I need help. ", callback: "" }
                ]
            },
            {
                chatID: 68,
                speaker: "me",
                text: "Oh! Hi.",
                button: [
                    { chatID: 69, text: "...", callback: "" }
                ]
            },
            {
                chatID: 69,
                speaker: "daria",
                text: "Why are you talking to me, loser? I'm going to go. ",
                button: [
                    { chatID: 70, text: "Wait. Don't take off. I've been taken prisoner and I need help. ", callback: "" }
                ]
            },
            {
                chatID: 70,
                speaker: "daria",
                text: "I heard. What did you do to get imprisoned anyway? Are you the one that pooped on the cafeteria floor? ",
                button: [
                    { chatID: 71, text: "...", callback: "" }
                ]
            },
            {
                chatID: 71,
                speaker: "thinking",
                text: "Can I talk to her. If she's out here she's obviously in the cult, but she's wearing normal clothes. I don't really " +
                    "have a choice. I guess I can trust her, but not too much. Also who would poop on a cafeteria floor?",
                button: [
                    { chatID: 72, text: "...", callback: "" }
                ]
            },
            {
                chatID: 72,
                speaker: "me",
                text: "Oh gross, no. I would never poop in public. I just need to get out! ",
                button: [
                    { chatID: 73, text: "...", callback: "" }
                ]
            },
            {
                chatID: 73,
                speaker: "daria",
                text: "*Scoff* You must think I'm pretty dumb. Have fun in the cell. Bye",
                button: [
                    { chatID: 74, text: "Wait. Come back, I didn't get your name. ", callback: "resetWindow" }
                ]
            },
            {
                chatID: 74,
                speaker: "thinking",
                text: "That was weird. I wonder what she's doing out there. ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 75,
                speaker: "daria",
                text: "You again. If you wern't locked in a cell I would assume you're a stalker. ",
                button: [
                    { chatID: 76, text: "Oh hahaha. Hi. So what are you doing out here? ", callback: "" }
                ]
            },
            {
                chatID: 76,
                speaker: "daria",
                text: "I need fresh air and a sense of normalcy. The cult is entertaining at times, but can get a bit tedious. ",
                button: [
                    { chatID: 77, text: "Yeah it can. Want to trade places? ", callback: "" }
                ]
            },
            {
                chatID: 77,
                speaker: "daria",
                text: "Oh hahaha. You almost got me. I almost totally let you out. Almost. So I was asking around about you. Are you " +
                    sc.n("me") + "?",
                button: [
                    { chatID: 78, text: "Yes, that's me. ", callback: "" }
                ]
            },
            {
                chatID: 78,
                speaker: "daria",
                text: "I know your " + sc.n("el") + ", " + sc.n("eva") + "! ",
                button: [
                    { chatID: 79, text: "Really?", callback: "" }
                ]
            },
            {
                chatID: 79,
                speaker: "daria",
                text: "Yes, I'm " + sc.n("daria") + ". I knew her in school, back when I still went to school. " +
                    "You've really put yourself into a mess you know. ",
                button: [
                    { chatID: 80, text: "Oh, I do", callback: "" }
                ]
            },
            {
                chatID: 80,
                speaker: "daria",
                text: "I wish there was something I could do, but there's so much security all over. ",
                button: [
                    { chatID: 81, text: "There is something. Can you get my stuff. Also a pick axe or something to break away this stone maybe?", callback: "" }
                ]
            },
            {
                chatID: 81,
                speaker: "daria",
                text: "*sigh* I'll see what I can do.",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "increment" }
                ]
            },
            {
                chatID: 82,
                speaker: "daria",
                text: "You again. I was asking around and there isn't much I can do while you're a slave. " +
                    "You see, slaves don't get anything. No privileges, no nothing. You just exist to fill " +
                    "the giant cum buckets. Don't worry, once chapel happens on Friday you'll be able to " +
                    "graduate from a slave. If you're still here I can help you then. ",
                button: [
                    { chatID: -1, text: "ok ", callback: "increment" }
                ]
            },
            {
                chatID: 83,
                speaker: "daria",
                text: "Hahaha! I KNEW IT! I Fuckin' knew it! ",
                button: [
                    { chatID: 84, text: "Knew what? ", callback: "" }
                ]
            },
            {
                chatID: 84,
                speaker: "daria",
                text: "The moment I met you I knew you would end up as a Sissy here! I have a way about " +
                    "sniffing them out. So you know you have to be really careful right? ",
                button: [
                    { chatID: 85, text: "Careful? Like how? ", callback: "" }
                ]
            },
            {
                chatID: 85,
                speaker: "daria",
                text: "You need to stay good. But if you're too good they'll do the impregnation ceremony " +
                    "with you. You don't want that. ",
                button: [
                    { chatID: 86, text: "What's that? ", callback: "" }
                ]
            },
            {
                chatID: 86,
                speaker: "daria",
                text: "You saw the cum bath right? Well that's to bring about Azrael. Bad stuff happens to the " +
                    "sissies they pick for that. You don't want to know. Just be good, but not too good. You'll " +
                    "have to stay in your cell forever, but it's way better than the alternative. I did talk to " +
                    "the Castellan, and he said he'll let you work if you want. Just ask the guard. ",
                button: [
                    { chatID: 87, text: "What's the Castellan?", callback: "" }
                ]
            },
            {
                chatID: 87,
                speaker: "daria",
                text: "The Castellan is the person in charge of the castle. They have a lot of power and can make decisions about what happens to the prisoners. " +
                    "Anyways. I've got to get back to my life. Be good, but not too good. 'k?",
                button: [
                    { chatID: -1, text: "ok. I'll ask the guard about working. ", callback: "increment" }
                ]
            },
            {
                chatID: 88,
                speaker: "daria",
                text: "*psst* I got your bag. I also slipped a little gift in there for you; a chisel I found laying around. " +
                    "The bricks are really tough, but the I know the last sissy worked on one of the side bricks for a couple " +
                    "years to loosen it up. We were going to break out together, but that mortar is just too tough. I've got " +
                    "to go. You didn't get that from me. 'k?",
                button: [
                    { chatID: -1, text: "I will never tell.", callback: "increment" }
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "I'm too tired to chip away at that brick now. ",
                button: [
                    { chatID: -1, text: "[Need 60 Energy]", callback: "" }
                ]
            },
            {
                chatID: 90,
                speaker: "cult",
                text: "So the little sissy want's to serve us huh?" +
                    "The Castellan said said you can start serving us outside your cell from now on. " +
                    "Ya know, that's what I love about you " +
                    "sissies, always want to serve and obey. ",
                button: [
                    { chatID: -1, text: "...", callback: "serve" }
                ]
            },
            {
                chatID: 91,
                speaker: "cult",
                text: "Come with me. All new Sissies have to see the doctor. ",
                button: [
                    { chatID: -1, text: "...", callback: "room956" }
                ]
            },
            {
                chatID: 92,
                speaker: "cult",
                text: "Ok, bend over. Ass up and spread those cheeks. Time for you daily hormone. Doctor's orders. ",
                button: [
                    { chatID: 93, text: "[Face down ass up]", callback: "hormone0" }
                ]
            },
            {
                chatID: 93,
                speaker: "cult",
                text: "Good girl. This will increase the success of you becoming the Mother of Azrael. ",
                button: [
                    { chatID: -1, text: "oOOoo", callback: "reset" }
                ]
            },
            {
                chatID: 94,
                speaker: "cult",
                text: "You aren't worthy. ",
                button: [
                    { chatID: -1, text: "[Need cult level 6]", callback: "" }
                ]
            },
            {
                chatID: 95,
                speaker: "cult",
                text: "You must put on these panties and deliver them to the Castellan. Don't take them  " +
                    "off for any reason. ",
                button: [
                    { chatID: 96, text: "Where's the Castellan?", callback: "" }
                ]
            },
            {
                chatID: 96,
                speaker: "cult",
                text: "I don't fuckin' know. Probably in his chamber, dumb ass. Now get!",
                button: [
                    { chatID: -1, text: "[Put on the panties and deliver them]", callback: "room952" }
                ]
            },




























           
            
            {
                chatID: 20,
                speaker: "daria",
                text: "*psst* I got your bag. I also slipped a little gift in there for you; a chisel I found laying around. Maybe you can use it to " +
                    "break out. I've got to run, I don't want them to see me helping you. Also you didn't get that from me if you get caught! ",
                button: [
                    { chatID: -1, text: "I will not talk; Bye.", callback: "increment" }
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "Working it... So damn hard! ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
           
            {
                chatID: 23,
                speaker: "me",
                text: "Hello?",
                button: [
                    { chatID: 24, text: "...", callback: "b2" }
                ]
            },
            {
                chatID: 24,
                speaker: "bodhi",
                text: "Oh hey my dude! What is up! Are you in the here too?",
                button: [
                    { chatID: 25, text: "Oh hi and yes I am here too?", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "bodhi",
                text: "Totally awesome! Am I right? I get a blow-y every day and they gime me a bed and free grub! Best time " +
                    "ever!",
                button: [
                    { chatID: 26, text: "But aren't you trapped in there?", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "bodhi",
                text: "Trapped? No, way José. Why would they trap us? This is the best thing ever! ",
                button: [
                    { chatID: 27, text: "Oh. I'm trapped. How do I get out?", callback: "" }
                ]
            },
            {
                chatID: 27,
                speaker: "bodhi",
                text: "Oh totally lame. Have you tried being awesome and not being a douche? Just enjoy the stay",
                button: [
                    { chatID: 28, text: "Groan. I need to get out. ", callback: "" }
                ]
            },
            {
                chatID: 28,
                speaker: "bodhi",
                text: "No can do! I'm going to catch some Z's. Take is sleazy! ",
                button: [
                    { chatID: -1, text: "Oh, yeah. Totally bro, sure. ", callback: "increment" }
                ]
            },
            {
                chatID: 29,
                speaker: "me",
                text: "*whisper* Hey " + sc.n("bodhi") + ". Over here.",
                button: [
                    { chatID: 30, text: "...", callback: "b4" }
                ]
            },
            {
                chatID: 30,
                speaker: "bodhi",
                text: "Huh? Oh, you again. What's up?",
                button: [
                    { chatID: 31, text: "Do you still want to stay here forever?", callback: "b2" }
                ]
            },
            {
                chatID: 31,
                speaker: "bodhi",
                text: "Oh no way dude. Forever is so long. It's cool for now. ",
                button: [
                    { chatID: 32, text: "But you're trapped in here and you have no choice. ", callback: "" }
                ]
            },
            {
                chatID: 32,
                speaker: "bodhi",
                text: "I'm trapped in the best place. You should try being good so they let you out. I'll show you around. ",
                button: [
                    { chatID: 33, text: "Grrr. ok. How do I get out. ", callback: "" }
                ]
            },
            {
                chatID: 33,
                speaker: "bodhi",
                text: "It's so easy dude. Just clean your cell and give them your cum. How do you not do that?",
                button: [
                    { chatID: 34, text: "Fine! I'll give that a try. ", callback: "" }
                ]
            },
            {
                chatID: 34,
                speaker: "bodhi",
                text: "Cool. Just learn to enjoy it here.  ",
                button: [
                    { chatID: 35, text: "Enjoy it? I'm trapped!", callback: "" }
                ]
            },
            {
                chatID: 35,
                speaker: "bodhi",
                text: "Hey Bodhisattva the path to enlightenment is through inner peace. You have to accept there is no fight, just " +
                    "mellow and allow the pleasure. To earn their trust, you must be trustworthy. ",
                button: [
                    { chatID: -1, text: "Fine", callback: "increment" }
                ]
            },
            {
                chatID: 36,
                speaker: "thinking",
                text: "He doens't know I can see him. His butt is right there. Should I call out, or maybe I can surprise him..",
                button: [
                    { chatID: -1, text: "Surprise him", callback: "bb0" },
                    { chatID: 41, text: "Call out", callback: "b2" }
                ]
            },
            {
                chatID: 37,
                speaker: "bodhi",
                text: "<span class='hl-pink'>MOAN</span>",
                button: [
                    { chatID: 38, text: "?", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "bodhi",
                text: "OOooo yeah. Lick it.",
                button: [
                    { chatID: -1, text: "...", callback: "bb2" }
                ]
            },
            {
                chatID: 39,
                speaker: "bodhi",
                text: "<span class='hl-pink'>Hahah Again!</span>",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 40,
                speaker: "bodhi",
                text: "I love a good sissy ass licking! It's totally sweet. I think we just became friends!",
                button: [
                    { chatID: 41, text: "Sweet", callback: "" }
                ]
            },
            {
                chatID: 41,
                speaker: "bodhi",
                text: "So I was talking to my owner. She says she may be able to help you, but you have to get on the cults good " +
                    "side. Just lay low and do what they say. ",
                button: [
                    { chatID: -1, text: "Yeah, got it. Cool", callback: "increment" }
                ]
            },
            {
                chatID: 42,
                speaker: "thinking",
                text: "Oh! What's going on here?",
                button: [
                    { chatID: 43, text: "...", callback: "bb31" }
                ]
            },
            {
                chatID: 43,
                speaker: "daria",
                text: "Are you trying to peek at us? We like putting on a show don't we?",
                button: [
                    { chatID: 44, text: "...", callback: "" }
                ]
            },
            {
                chatID: 44,
                speaker: "bodhi",
                text: "Oh totally. I love to share our experience with others. Can " + sc.n("me") + " come over and play? " +
                    "I told him to be a good. ",
                button: [
                    { chatID: 45, text: "...", callback: "" }
                ]
            },
            {
                chatID: 45,
                speaker: "daria",
                text: "Yes my toy. We do love sharing, however you're locked in your cell. We'll have to change that. You'll " +
                    "find that if you behave and get the cult to trust you, you'll get more freedom. I'll tell my friends to " +
                    "give you a chance to work jobs outside your cell. ",
                button: [
                    { chatID: 46, text: "Oh yes!", callback: "" }
                ]
            },
            {
                chatID: 46,
                speaker: "daria",
                text: "Behave yourself keep a low profile, and I'll work on a way to get you out. It will probably take some time. " +
                    "But if your a good slut we may be able to invite you over for some fun. ",
                button: [
                    { chatID: 47, text: "Sweet!", callback: "" }
                ]
            },
            {
                chatID: 47,
                speaker: "daria",
                text: "No put that brick back before you get caught. I've got to finish off my little toy. ",
                button: [
                    { chatID: 48, text: "ok *sad face*", callback: "" }
                ]
            },
            {
                chatID: 48,
                speaker: "thinking",
                text: "If I want to work outside the cell I have to call the guard over. If I'm good I'll be able to get more freedoms. ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            
            {
                chatID: 57,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 58, text: "...", callback: "" }
                ]
            },
            {
                chatID: 58,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 59, text: "What do you mean? Are they going to torture us?", callback: "" }
                ]
            },
            {
                chatID: 59,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 60, text: "[Hang your head in defeat]", callback: "milk5" }
                ]
            },
            {
                chatID: 60,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 61, text: "...", callback: "milk6" }
                ]
            },
            {
                chatID: 61,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 62, text: "?", callback: "" }
                ]
            },
            {
                chatID: 62,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 63, text: "!", callback: "milk7" }
                ]
            },
            {
                chatID: 63,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 64, text: "...", callback: "milk8" }
                ]
            },
            {
                chatID: 64,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 65, text: "What are you doing with my cum?", callback: "milk9" }
                ]
            },
            {
                chatID: 65,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 66,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 67, text: "...", callback: "milk6" }
                ]
            },
            {
                chatID: 67,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 68, text: "...", callback: "milk7" }
                ]
            },
            {
                chatID: 68,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: 69, text: "...", callback: "milk8" }
                ]
            },
            {
                chatID: 69,
                speaker: "me",
                text: "NOOP",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 122,
                speaker: "cult",
                text: "I just got word from the Castellan that you will now be allowed to work. Just " +
                    "call the guard over when you want to earn our trust through work. ",
                button: [
                    { chatID: -1, text: "ok", callback: "reset" },
                ]
            },



        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};