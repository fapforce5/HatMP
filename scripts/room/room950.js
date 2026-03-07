//Room name

//sissies get walked around like dogs on leashes
var room950 = {};
room950.main = function () {
    $('#room-menu').show();
    $('#room_footer').hide();

    if (g.pass === "endSleepyTime") {
        g.pass = null;
        gv.set("cultDayCounter", 0);
    }

    room950.btnclick("drawBG");
    let cultDayCounter = gv.get("cultDayCounter");
    switch (cultDayCounter) {
        case 0: char.settime(9, g.rand(3, 51)); break;
        case 1: char.settime(11, g.rand(3, 51)); break;
        case 2: char.settime(13, g.rand(3, 51)); break;
        case 3: char.settime(16, g.rand(3, 51)); break;
        case 4: char.settime(19, g.rand(3, 51)); break;
        case 5: char.settime(23, g.rand(3, 51)); break;
    }
    room950.btnclick("bars");

    if (cultDayCounter === 4) {
        nav.bg("950_cell/milk0.jpg"); 
        if (gv.get("cultMilkCounter") > 0) {

        }
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
        "image": "950_cell/bed.png"
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

    //if (sc.getstep("daria") < 2) {
    //    $('#room-menu').hide();
    //}
    //if (g.internal.interval > 3) {
    //    if (!g.internal.nightEvent) {
    //        if (g.dt.getDay() === 5) {// && scc.get("cult").love > 90) {
    //            g.internal.nightEvent = true;
    //            nav.bg("950_cell/work0.jpg");
    //            chat(104, 950);
    //        }
    //        else if (g.dt.getDay() === 2) {
    //            g.internal.nightEvent = true;
    //            nav.bg("950_cell/work0.jpg");
    //            chat(123, 950);
    //        }
    //        else if (g.internal.constDayDirty > 3) {
    //            g.internal.nightEvent = true;
    //            nav.bg("950_cell/cell3.jpg");
    //            zcl.kneel(400, 900, .4, "");
    //            nav.button({
    //                "type": "img",
    //                "name": "cult",
    //                "left": 501,
    //                "top": 0,
    //                "width": 378,
    //                "height": 1080,
    //                "image": "950_cell/cult_side.png"
    //            }, 950);
    //            chat(44, 950);
    //        }
    //        else if (cl.getBodyHair() !== null) {
    //            g.internal.nightEvent = true;
    //            nav.killall();
    //            nav.bg("950_cell/work0.jpg");
    //            chat(102, 950);
    //        }
    //        else {
    //            g.internal.nightEvent = true;
    //            var cultLove = null;// scc.get("cult").love;
    //            if (cultLove > 30 && g.internal.job === 1) {
    //                nav.bg("950_cell/work0.jpg");
    //                g.internal.job = 2;
    //                chat(121, 950);
    //            }
    //            else if (cultLove > 50 && g.internal.job === 2) {
    //                nav.bg("950_cell/work0.jpg");
    //                g.internal.job = 3;
    //                chat(122, 950);
    //            }
    //            //else if (!g.internal.wander && scc.get("cult").love > 85 && g.internal.chaple > 0) {
    //            //    g.internal.wander = true;
    //            //    nav.killall();
    //            //    nav.bg("950_cell/work0.jpg");
    //            //    chat(106, 950);
    //            //}
    //            else {
    //                nav.bg("950_cell/cell_dark.jpg");
    //                nav.button({
    //                    "type": "btn",
    //                    "name": "sleep",
    //                    "title": "Sleep",
    //                    "left": 994,
    //                    "top": 685,
    //                    "width": 684,
    //                    "height": 103,
    //                    "image": "950_cell/bed_night.png"
    //                }, 950);
    //            }
    //        }
    //    }
    //    else {
    //        nav.bg("950_cell/cell_dark.jpg");
    //        nav.button({
    //            "type": "btn",
    //            "name": "sleep",
    //            "title": "Sleep",
    //            "left": 994,
    //            "top": 685,
    //            "width": 684,
    //            "height": 103,
    //            "image": "950_cell/bed_night.png"
    //        }, 950);
    //    }
    //}
    //else if (g.internal.interval === 3) {
    //    g.internal.interval = 4;
    //    if (g.internal.jo) {
    //        nav.bg("950_cell/milk0.jpg");
    //        chat(21, 950);
    //    }
    //    else {
    //        if (g.internal.day === 0) {
    //            nav.bg("950_cell/milk0.jpg");
    //            chat(2, 950);
    //        }
    //        else {
    //            nav.bg("950_cell/milk0.jpg");
    //            chat(17, 950);
    //        }
    //    }
    //}
    //else {
    //    if (g.internal.jo) {
    //        nav.bg("950_cell/celljo.jpg");
    //    }
    //    else if (g.internal.constDayDirty > 3) {
    //        nav.bg("950_cell/cell3.jpg");
    //    }
    //    else if (g.internal.constDayDirty > 2) {
    //        nav.bg("950_cell/cell2.jpg");
    //    }
    //    else if (g.internal.constDayDirty > 1) {
    //        nav.bg("950_cell/cell1.jpg");
    //    }
    //    var btnList = [
    //        {
    //            "type": "btn",
    //            "name": "nap",
    //            "title": "Sleep",
    //            "left": 994,
    //            "top": 685,
    //            "width": 684,
    //            "height": 103,
    //            "image": "950_cell/bed.png"
    //        },
    //        {
    //            "type": "btn",
    //            "name": "window",
    //            "title": "Stare out the window",
    //            "left": 119,
    //            "top": 0,
    //            "width": 234,
    //            "height": 308,
    //            "image": "950_cell/window.png"
    //        }
    //    ];
    //    if (g.internal.day > 0) {
    //        btnList.push({
    //            "type": "btn",
    //            "name": "cock",
    //            "title": "Play with your pp",
    //            "left": 1680,
    //            "top": 150,
    //            "width": 200,
    //            "height": 150,
    //            "image": "950_cell/cock.png"
    //        });
    //        btnList.push({
    //            "type": "btn",
    //            "name": "brick",
    //            "title": "Loose Stone",
    //            "left": 832,
    //            "top": 511,
    //            "width": 132,
    //            "height": 79,
    //            "image": "950_cell/brick.png"
    //        });
    //    }
    //    if (g.internal.constDayDirty > 0) {
    //        btnList.push({
    //            "type": "btn",
    //            "name": "clean",
    //            "title": "Clean your cell",
    //            "left": 374,
    //            "top": 392,
    //            "width": 398,
    //            "height": 484,
    //            "image": "950_cell/clean.png"
    //        });
    //    }
    //    if (gv.get("energy") > 49) {
    //        btnList.push({
    //            "type": "btn",
    //            "name": "squat",
    //            "title": "Do Squats",
    //            "left": 1480,
    //            "top": 150,
    //            "width": 200,
    //            "height": 150,
    //            "image": "950_cell/squat.png"
    //        });
    //        btnList.push({
    //            "type": "btn",
    //            "name": "pushup",
    //            "title": "Do Pushups",
    //            "left": 1280,
    //            "top": 150,
    //            "width": 200,
    //            "height": 150,
    //            "image": "950_cell/pushup.png"
    //        });
    //    }
    //    if (g.internal.job > 0) {
    //        btnList.push({
    //            "type": "btn",
    //            "name": "work",
    //            "title": "Work Outside",
    //            "left": 1080,
    //            "top": 150,
    //            "width": 200,
    //            "height": 150,
    //            "image": "950_cell/work.png"
    //        });
    //    }
    //    if (!g.internal.food) {
    //        btnList.push({
    //            "type": "btn",
    //            "name": "food",
    //            "title": "Eat some food",
    //            "left": 1509,
    //            "top": 987,
    //            "width": 307,
    //            "height": 93,
    //            "image": "950_cell/food.png"
    //        });
    //    }
    //    if (g.internal.wander) {
    //        btnList.push({
    //            "type": "btn",
    //            "name": "exit",
    //            "title": "Work Outside",
    //            "left": 880,
    //            "top": 150,
    //            "width": 200,
    //            "height": 150,
    //            "image": "950_cell/exit.png"
    //        });
    //    }

    //    $.each(btnList, function (i, v) {
    //        nav.button(v, 950);
    //    });

    //}
};
// g.pass = { day: 0, interval: 0, cleaned: false };
room950.btnclick = function (name) {
    switch (name) {
        case "bars":
            var cult950 = sc.get("cult");
            var cultbrick = gv.get("cultbrick");
            cult950 = cult950.l * 100 + cult950.c;
            nav.progressBar({
                "type": "img",
                "name": "trust",
                "left": 400,
                "top": 30,
                "width": 1000,
                "height": 10,
                "color": (cult950 < 300 ? "red" : "green"),
                "maxVal": 1000,
                "val": cult950,
                "title": "Cult's Trust"
            }, 322);
            if (cultbrick > 0 && cultbrick < 100) {
                nav.progressBar({
                    "type": "img",
                    "name": "trust",
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
            if (gv.get("cultLastClean") === null) {
                cultLastClean = g.dt;
                gv.set("cultLastClean", g.dt);
            }
            var cultLastCleanNumDays = g.diffDatesByDays(cultLastClean, g.dt);
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
            break;
        case "clean":
            if (gv.get("energy") < 20) {
                chat(49, 950); 
            }
            else {
                gv.mod("energy", -20);
                nav.kill();
                daily.set("cumwall950", false);
                gv.set("cultLastClean", g.dt);
                room950.btnclick("drawBG");
                chat(52, 950);
            }
            break;
        case "icon_activity":
            nav.killbuttonStartsWith("icon_"); 
            sc.select("icon_pushup", "950_cell/icon_pushup.webp", 0);
            sc.select("icon_squats", "950_cell/icon_squats.webp", 1);
            sc.select("icon_jackoff", "950_cell/icon_jackoff.webp", 2);
            sc.select("icon_cancel", "950_cell/icon_cancel.webp", 3);
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
            chat(51, 950);
            break;
        case "icon_pushup":
            if (gv.get("energy") < 50) {
                chat(49, 950);
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
                chat(50, 950);
            }
            break;
        case "icon_squats":
            if (gv.get("energy") < 50) {
                chat(49, 950);
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
                chat(50, 950);
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
                gv.mod('dildobutt', 1);
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
                            chat(6, 950);
                        else
                            chat(7, 950);
                        break;
                    case 1:
                        nav.killall();
                        daily.set("daria");
                        nav.bg("950_cell/viewd.jpg");
                        sc.completeMissionTask("daria", "cult", 1);
                        chat(13, 950);
                        break;
                    case 2:
                        nav.killall();
                        daily.set("daria");
                        inv.add("chisel");
                        gv.set("cultbrick", 1);
                        nav.bg("950_cell/viewd.jpg");
                        sc.completeMissionTask("daria", "cult", 2);
                        chat(20, 950);
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
                    chat(22, 950);
                }
                var brickStrength = (levels.get("strength").l * 3) + 10;
                if (brickStrength > 50) {
                    brickStrength = 51;
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
                switch (sc.taskGetStep("bodhi", "cult")) {
                    case 1:
                        sc.completeMissionTask("bodhi", "cult", 1);
                        nav.bg("950_cell/b3.jpg");
                        chat(29, 950);
                        break;
                    case 2:
                        sc.completeMissionTask("bodhi", "cult", 2);
                        nav.bg("950_cell/b3.jpg");
                        chat(36, 950);
                        break;
                    case 3:
                        sc.completeMissionTask("bodhi", "cult", 3);
                        nav.bg("950_cell/bb30.jpg");
                        chat(42, 950);
                        break;
                }
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
        //case "sleep":
        //    nav.killall();
        //    g.internal.nightEvent = false;
        //    g.internal.interval = 0;
        //    g.internal.constDayDirty++;
        //    g.internal.day++;
        //    g.internal.jo = false;
        //    g.pass = 950;
        //    g.internal.food = false;
        //    char.room(28);
        //    break;
       
        
        //case "squat":
        //    nav.killall();
        //    nav.bg("950_cell/pubg.jpg");
        //    nav.button({
        //        "type": "img",
        //        "name": "pu",
        //        "left": 160,
        //        "top": 0,
        //        "width": 1200,
        //        "height": 1080,
        //        "image": "950_cell/squat.gif"
        //    }, 950);
        //    chat(0, 950);
        //    break;
        //case "pushup":
        //    nav.killall();
        //    nav.bg("950_cell/pubg.jpg");
        //    nav.button({
        //        "type": "img",
        //        "name": "pu",
        //        "left": 197,
        //        "top": 0,
        //        "width": 1000,
        //        "height": 1080,
        //        "image": "950_cell/pu.gif"
        //    }, 950);
        //    chat(1, 950);
        //    break;
        
       
        //case "clean":
        //    g.internal.constDayDirty = 0;
        //    nav.killall();
        //    nav.bg("950_cell/clean.jpg");
        //    if (g.internal.jo) {
        //        nav.killall();
        //        nav.bg("950_cell/celljo.jpg");
        //        chat(43, 950);
        //    }
        //    else {
        //        g.setTimeout = setTimeout(function () {
        //            room950.btnclick("increment");
        //        }, 1000);
        //    }
        //    break;
        //case "cock":
        //    nav.killall();
        //    nav.bg("950_cell/jobg.jpg");
        //    nav.button({
        //        "type": "btn",
        //        "name": "jo",
        //        "left": 823,
        //        "top": 590,
        //        "width": 631,
        //        "height": 490,
        //        "image": "950_cell/jo.png"
        //    }, 950);
        //    break;
        //case "jo":
        //    nav.killall();
        //    nav.bg("950_cell/jobg1.jpg");
        //    cl.doCum();
        //    g.internal.jo = true;
        //    chat(42, 950);
        //    break;
        //case "eatit":
        //    nav.bg("950_cell/eatit2.jpg");
        //    zcl.displayMain(400, 150, .4, "", true);
        //    chat(46, 950);
        //    break;
        //case "work":
        //    nav.killall();
        //    nav.bg("950_cell/work0.jpg");
        //    chat(900, 950);
        //    break;
        //case "exit":
        //    nav.killall();
        //    char.room(952);
        //    break;
        //case "brick":
        //    if (g.internal.brick < 4) {
        //        if (inv.has("chisel")) {
        //            if (gv.get("bodyLevel") < 2) {
        //                chat(49, 950);
        //            }
        //            else {
        //                g.internal.brick++;
        //                nav.killall();
        //                nav.bg("950_cell/chisel.jpg");
        //                chat(53, 950);
        //            }
        //        }

        //        else {
        //            g.internal.brick = 1;
        //            chat(48, 950);
        //        }
        //    }
        //    else {
        //        var bodhiStep = sc.getstep("bodhi");
        //        nav.killall();
        //        switch (bodhiStep) {
        //            case 0:
        //                g.internal.brick++;
        //                nav.bg("950_cell/chisel.jpg");
        //                chat(54, 950);
        //                break;
        //            case 1:
        //                zcl.displayMain(-200, -1000, .8, "", true);
        //                nav.bg("950_cell/b3.jpg");
        //                chat(61, 950);
        //                break;
        //            case 2:
        //                nav.bg("950_cell/bb0.jpg");
        //                chat(68, 950);
        //                break;
        //            case 3:
        //                zcl.displayMain(-200, -1200, .8, "", true);
        //                nav.bg("950_cell/bb30.jpg");
        //                chat(90, 950);
        //                break;
        //            case 4:
        //                zcl.displayMain(-200, -1000, .8, "", true);
        //                nav.bg("950_cell/b2.jpg");
        //                chat(105, 950);
        //                break;
        //            default:
        //                break;
        //        }
        //    }
        //    break;
       
        
        
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
        case "milk1":
        case "milk2":
        case "milk3":
        case "milk4":
        case "milk5":
        case "milk6":
        case "milk7":
        case "milk8":
        case "milk9":
            nav.bg("950_cell/" + callback + ".jpg");
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
        //case "finishSquats":
        //    gv.mod("leg", 34);
        //    gv.mod("fitness", 20);
        //    gv.mod("energy", -50);
        //    room950.btnclick("increment");
        //    break;
        
    //    case "finsihPushups":
    //        gv.mod("body", 34);
    //        gv.mod("fitness", 20);
    //        gv.mod("energy", -50);
    //        room950.btnclick("increment");
    //        break;
    //    case "milk1":
    //        nav.bg("950_cell/milk1.jpg");
    //        break;
    //    case "milk2":
    //        nav.bg("950_cell/milk2.jpg");
    //        break;
    //    case "milk3":
    //        nav.bg("950_cell/milk3.jpg");
    //        break;
    //    case "milk4":
    //        nav.bg("950_cell/milk4.jpg");
    //        break;
    //    case "milk5":
    //        nav.bg("950_cell/milk5.jpg");
    //        break;
    //    case "milk6":
    //        nav.bg("950_cell/milk6.jpg");
    //        break;
    //    case "milk7":
    //        cl.doCum(true);
    //        nav.bg("950_cell/milk7.jpg");
    //        break;
    //    case "milk8":
    //        nav.bg("950_cell/milk8.jpg");
    //        break;
    //    case "milk9":
    //        nav.bg("950_cell/milk9.jpg");
    //        break;
    //    case "milk10":
    //        //scc.love("cult", 2, 50);
    //        room950.btnclick("increment");
    //        break;
    //    case "jo0":
    //        nav.killall();
    //        nav.bg("950_cell/jobg1.jpg");
    //        break;
    //    case "jo1":
    //        nav.bg("950_cell/cellgas.jpg");
    //        break;
    //    case "jo2":
    //        nav.bg("205_computerWork/blackBg.jpg");
    //        g.internal.constDayDirty = 0;
    //        g.internal.day++;
    //        g.internal.constDayDirty = 0;
    //        g.internal.jo = false;
    //        char.changeMenu("hide", false, true);
    //        //scc.love("cult", -20, 100);
    //        g.roomTimeout = setTimeout(function () {
    //            nav.bg("951_box/box.jpg");
    //            chat(24, 950);
    //        }, 1000);
    //        break;
    //    case "box":
    //        g.internal.interval++;
    //        char.room(951);
    //        break;
   
    //    case "daria1":
    //        sc.setstep("daria", 1);
    //        room950.btnclick("increment");
    //        break;
    //    case "daria2":
    //        sc.setstep("daria", 2);
    //        g.displaymenu = true;
    //        gv.set("displayMenu", true);
    //        $('#room-menu').show();
    //        room950.btnclick("increment");
    //        break;
    //    case "daria3":
    //        sc.setstep("daria", 3);
    //        room950.btnclick("increment");
    //        break;
    //    case "daria4":
    //        sc.setstep("daria", 4);
    //        inv.add("chisel");
    //        room950.btnclick("increment");
    //        break;
    //    case "reset":
    //        char.room(950);
    //        break;
    //    case "clean1":
    //        nav.killall();
    //        nav.button({
    //            "type": "tongue",
    //            "name": "eatit",
    //            "left": 888,
    //            "top": 623,
    //            "width": 204,
    //            "height": 203,
    //            "image": "950_cell/eatit1.png",
    //            "title": "Eat the pussy"
    //        }, 950);
    //        nav.bg("950_cell/eatit1.jpg");
    //        //scc.love("cult", -20, 100);
    //        break;
    //    case "clean3":
    //        nav.killall();
    //        nav.bg("950_cell/eatit3.jpg");
    //        gv.mod('giveOralFemale', 1);
    //        break;
    //    case "clean4":
    //        room950.btnclick("clean");
    //        break;
    //    case "brick1":
    //        zcl.displayMain(-200, -1000, .8, "", true);
    //        nav.bg("950_cell/b1.jpg");
    //        break;
    //    case "b2":
    //        nav.bg("950_cell/b2.jpg");
    //        break;
    //    case "b1":
    //        sc.setstep("bodhi", 1);
    //        room950.btnclick("increment");
    //        break;
    //    case "b4":
    //        nav.bg("950_cell/b4.jpg");
    //        break;
    //    case "bodhi2":
    //        sc.setstep("bodhi", 2);
    //        room950.btnclick("increment");
    //        break;
    //    
   
    //    case "bb4":
            
    //        sc.setstep("bodhi", 3);
    //        room950.btnclick("increment");
    //        break;
   
   
    //    case "food1":
    //        gv.mod("dildobutt", 1);
    //        break;
    //    case "mp1":
    //    case "mp2":
    //    case "mp3":
    //    case "mp4":
    //    case "mp5":
    //    case "mp6":
    //    case "mp7":
    //    case "mp8":
    //    case "mp9":
    //        nav.bg("950_cell/" + callback + ".jpg");
    //        break;
    //    case "mp10":
    //        nav.bg("950_cell/mp10.jpg");
    //        g.internal.constDayDirty = 4;
    //        zcl.assup(700, 400, .6, "");
    //        break;
    //    case "mp11":
    //        //scc.love('cult', 15, 100);
    //        gv.mod("pissedonMale", 3);
    //        room950.btnclick("increment");
    //        break;
    //    case "shower1":
    //        nav.killall();
    //        nav.bg("950_cell/shower1.jpg");
    //        break;
    //    case "shower2":
    //        nav.bg("950_cell/shower2.jpg");
    //        break;
    //    case "shower3":
    //        nav.bg("950_cell/shower3.jpg");
    //        break;
    //    case "shower4":
    //        nav.bg("950_cell/shower4.jpg");
    //        break;
    //    case "shower5":
    //        nav.bg("950_cell/shower5.jpg");
    //        break;
    //    case "shower6":
    //        //scc.love('cult', 10, 100);
    //        room950.btnclick("increment");
    //        break;
    //    case "cancelJob":
    //        //scc.love("cult", -10, 100);
    //        break;
    //    case "bb31":
    //        zcl.kill();
    //        nav.bg("950_cell/bb31.jpg");
    //        break;
    //    case "bb32":
    //        sc.setstep("bodhi", 4);
    //        g.internal.job = 1;
    //        room950.btnclick("increment");
    //        break;
    //    case "shave1":
    //        cl.c.cumface = false;
    //        cl.nude();
    //        zcl.displayMain(0, 400, .22, "shower", false);
    //        cl.display();
    //        nav.bg("950_cell/shave.jpg");
    //        break;
    //    case "shave2":
    //        cl.shave();
    //        cl.display();
    //        room950.btnclick("increment");
    //        break;
    //    case "ceremony":
    //        char.room(953);
    //        break;
    //    case "sweepHallway1":
    //        nav.killall();
    //        nav.bg("950_cell/sweepHallway1.jpg");
    //        break;
    //    case "sweepHallway1end":
    //        //scc.love("cult", 5, 100);
    //        room950.btnclick("increment");
    //        break;
    //    case "sweepHallway2":
    //        nav.bg("950_cell/sweepHallway2.jpg");
    //        break;
    //    case "sweepHallway3":
    //        nav.bg("950_cell/sweepHallway3.jpg");
    //        break;
    //    case "sweepHallway4":
    //        nav.bg("950_cell/sweepHallway4.jpg");
    //        break;
    //    case "sweepHallway5":
    //        if (sc.getEvent("daria", -1) && !sc.getEvent("daria", -2)) {
    //            if (cl.c.butthole < 3) {
    //                chat(114, 950);
    //                nav.bg("950_cell/sweepHallway5.jpg");
    //            }
    //            else {
    //                chat(115, 950);
    //                nav.bg("950_cell/sweepHallway5x.jpg");
    //            }
    //        }
    //        else {
    //            nav.bg("950_cell/sweepHallway5.jpg");
    //            chat(112, 950);
    //        }
    //        break;
    //    case "sweepHallway6":
    //        nav.bg("950_cell/sweepHallway6.jpg");
    //        break;
    //    case "sweepHallway6x":
    //        nav.bg("950_cell/sweepHallway6x.jpg");
    //        break;
    //    case "sweepHallway6end":
    //        gv.mod("giveOralMale", 1);
    //        gv.mod("loadSwollowed", 1);
    //        //scc.love("cult", 12, 100);
    //        room950.btnclick("increment");
    //        break;
    //    case "sweepHallway7":
    //        nav.bg("950_cell/sweepHallway7.jpg");
    //        break;
    //    case "sweepHallway8":
    //        nav.bg("950_cell/sweepHallway8.jpg");
    //        break;
    //    case "sweepHallway9":
    //        sc.setstep("daria", -2);
    //        room950.btnclick("increment");
    //        break;
    //    case "sleepforNight":
    //        room950.btnclick("increment");
    //        break;
    //    case "t0":
    //        nav.killall();
    //        nav.bg("950_cell/t0.jpg");
    //        break;
    //    case "t1":
    //        nav.bg("950_cell/t1.jpg");
    //        break;
    //    case "t2":
    //        nav.bg("950_cell/t2.jpg");
    //        break;
    //    case "t3":
    //        nav.bg("950_cell/t3.jpg");
    //        break;
    //    case "t4":
    //        nav.bg("950_cell/t4.jpg");
    //        break;
    //    case "t4x":
    //        nav.bg("950_cell/t4x.jpg");
    //        break;
    //    case "t5":
    //        nav.bg("950_cell/t5.jpg");
    //        break;
    //    case "t6":
    //        g.internal.nightEvent = false;
    //        cl.c.butthole += .35;
    //        char.addDays(1);
    //        char.settime(8, 0);
    //        gv.set("energy", 0);
    //        g.internal.nightEvent = false;
    //        g.internal.interval = 1;
    //        g.internal.constDayDirty++;
    //        g.internal.day++;
    //        g.internal.jo = false;
    //        g.pass = 950;
    //        g.internal.food = false;
    //        char.room(950);
    //        break;
        default:
            break;
    }
};

room950.chat = function (chatID) {
    if (chatID === 900) {
        var tbtnlist = new Array();
        var speach = "You want to work outside your cell? You can  ";
        
        speach += "clean the members, ";
        tbtnlist.push({ chatID: 97, text: "Clean the cultists", callback: "shower1" });

        if (g.internal.job > 1) {
            speach += "sweep the hallways, ";
            tbtnlist.push({ chatID: 108, text: "Sweep Hallways", callback: "sweepHallway1" });
        }
        if (g.internal.job > 2) {
            speach += "be toilet in the boy's room, ";
            tbtnlist.push({ chatID: 80, text: "I'm a toilet. ", callback: "mp1" });
        }
        speach = speach.substring(0, speach.length - 2) + ".";
        tbtnlist.push({ chatID: 79, text: "Never mind. I don't want to work", callback: "cancelJob" });
        
        return {
            chatID: 900,
            speaker: "cult",
            text: speach,
            button: tbtnlist
        };
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
                speaker: "me",
                text: "Oh! Hi.",
                button: [
                    { chatID: 8, text: "...", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "daria",
                text: "Hey dumbass. I thought I told you not to come here. You got what you deserve. Bye! ",
                button: [
                    { chatID: 8, text: "Wait. Don't take off. I've been taken prisoner and I need help. ", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "daria",
                text: "I heard. What did you do to get imprisoned anyway? Are you the one that pooped on the cafeteria floor? ",
                button: [
                    { chatID: 9, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "Can I talk to her. If she's out here she's obviously in the cult, but she's wearing normal clothes. I don't really " +
                    "have a choice. I guess I can trust her, but not too much. Also who would poop on a cafeteria floor?",
                button: [
                    { chatID: 10, text: "...", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "me",
                text: "Oh gross, no. I would never poop in public. I just need to get out! ",
                button: [
                    { chatID: 11, text: "...", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "daria",
                text: "*Scoff* You must think I'm pretty dumb. Have fun in the cell. Bye",
                button: [
                    { chatID: 12, text: "Wait. Come back, I didn't get your name. ", callback: "resetWindow" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "That was weird. I wonder what she's doing out there. ",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 13,
                speaker: "daria",
                text: "You again. If you wern't locked in a cell I would assume you're a stalker. ",
                button: [
                    { chatID: 14, text: "Oh hahaha. Hi. So what are you doing out here? ", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "daria",
                text: "I need fresh air and a sense of normalcy. The cult is entertaining at times, but can get a bit tedious. ",
                button: [
                    { chatID: 15, text: "Yeah it can. Want to trade places? ", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "daria",
                text: "Oh hahaha. You almost got me. I almost totally let you out. Almost. So I was asking around about you. Are you " +
                    sc.n("me") + "?",
                button: [
                    { chatID: 16, text: "Yes, that's me. ", callback: "" }
                ]
            },
            {
                chatID: 16,
                speaker: "daria",
                text: "I know your " + sc.n("landlord") + "!",
                button: [
                    { chatID: 17, text: "Really?", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "daria",
                text: "Yes, I'm " + sc.n("daria") + ". I worked at the Sperm Bank a few years ago with her. " +
                    "You've really put yourself into a mess you know. ",
                button: [
                    { chatID: 18, text: "Oh, I do", callback: "" }
                ]
            },
            {
                chatID: 18,
                speaker: "daria",
                text: "I wish there was something I could do, but there's so much security all over. ",
                button: [
                    { chatID: 19, text: "There is something. Can you get my stuff. Also a pick axe or something to break away this stone maybe?", callback: "" }
                ]
            },
            {
                chatID: 19,
                speaker: "daria",
                text: "I'll see what I can do.",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "increment" }
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
                chatID: 22,
                speaker: "thinking",
                text: "I'm too tired to chip away at that brick now. ",
                button: [
                    { chatID: -1, text: "[Need 60 Energy]", callback: "" }
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
                text: "Oh hay my dude! What is up! Are you in the here too?",
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
                chatID: 49,
                speaker: "thinking",
                text: "Too tired to do that. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 50,
                speaker: "thinking",
                text: "Gotta get in shape to get out of here!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 51,
                speaker: "thinking",
                text: "*whew* I needed that!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 52,
                speaker: "thinking",
                text: "All clean!",
                button: [
                    { chatID: -1, text: "...", callback: "increment" }
                ]
            },
            {
                chatID: 53,
                speaker: "cult",
                text: "Are you ready to give your offering?",
                button: [
                    { chatID: 54, text: "My offering?", callback: "" }
                ]
            },
            {
                chatID: 54,
                speaker: "cult",
                text: "Yes. We all must do our part to bring the coming of Azreal, and you must do your part. Now come. ",
                button: [
                    { chatID: 55, text: "[Follow her]", callback: "milk1" }
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: "What is this? Please don't put me up there! *whimper*",
                button: [
                    { chatID: 5, text: "...", callback: "milk2" }
                ]
            },
            {
                chatID: 5,
                speaker: "cult",
                text: "All must give to Azreal, now up on the chains you before you also give the gift of pain. ",
                button: [
                    { chatID: 6, text: "...", callback: "milk3" }
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "Now what? What are you going to do to us? Let me down.",
                button: [
                    { chatID: 7, text: "...", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "random",
                text: "Hay! New person. Relax. This is the best part. ",
                button: [
                    { chatID: 8, text: "What do you mean? Are they going to torture us?", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "random",
                text: "Just relax and enjoy it. Also you're giving me a giant headache whining and whimpering, so just be quiet. ",
                button: [
                    { chatID: 9, text: "[Hang your head in defeat]", callback: "milk4" }
                ]
            },
            {
                chatID: 9,
                speaker: "jen",
                text: "This is what happens when you think you can fight against CUM; idiot. Well now you're going to work for us. Are " +
                    "you ready for what's to come?",
                button: [
                    { chatID: 10, text: "What's coming?", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "jen",
                text: "Hahaha. You'll see. Bring them out!",
                button: [
                    { chatID: 11, text: "...", callback: "milk5" }
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "Oh no, what is this?",
                button: [
                    { chatID: 12, text: "...", callback: "milk6" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "Is she sucking my dick? ",
                button: [
                    { chatID: 13, text: "?", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "She's sucking my dick!",
                button: [
                    { chatID: 14, text: "!", callback: "milk7" }
                ]
            },
            {
                chatID: 14,
                speaker: "me",
                text: "UNGH!",
                button: [
                    { chatID: 15, text: "...", callback: "milk8" }
                ]
            },
            {
                chatID: 15,
                speaker: "random",
                text: "First! ",
                button: [
                    { chatID: 16, text: "What are you doing with my cum?", callback: "milk9" }
                ]
            },
            {
                chatID: 16,
                speaker: "cult",
                text: "Back to your cell slave. ",
                button: [
                    { chatID: -1, text: "...", callback: "milk10" }
                ]
            },

























































            {
                chatID: 0,
                speaker: "thinking",
                text: "Finish my squats. ",
                button: [
                    { chatID: -1, text: "...", callback: "finishSquats" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "Finish my pushups. ",
                button: [
                    { chatID: -1, text: "...", callback: "finsihPushups" }
                ]
            },
           
            {
                chatID: 17,
                speaker: "cult",
                text: "It's time for your offering. ",
                button: [
                    { chatID: 18, text: "...", callback: "milk6" }
                ]
            },
            {
                chatID: 18,
                speaker: "thinking",
                text: "Well, here it comes. ",
                button: [
                    { chatID: 19, text: "...", callback: "milk7" }
                ]
            },
            {
                chatID: 19,
                speaker: "random",
                text: "UNGH! ",
                button: [
                    { chatID: 20, text: "...", callback: "milk8" }
                ]
            },
            {
                chatID: 20,
                speaker: "thinking",
                text: "First again! He comes so easily!",
                button: [
                    { chatID: -1, text: "...", callback: "milk10" }
                ]
            },
            {
                chatID: 21,
                speaker: "cult",
                text: "I've come to collect you to give your offering... What is that on the wall?",
                button: [
                    { chatID: 22, text: "ummm", callback: "jo0" }
                ]
            },
            {
                chatID: 22,
                speaker: "cult",
                text: "You jacked off didn't you! You wasted our seed on the wall! For that you must be punished! Release the gas!",
                button: [
                    { chatID: 23, text: "*GULP*", callback: "jo1" }
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "Oh crap.",
                button: [
                    { chatID: -1, text: "...", callback: "jo2" }
                ]
            },
            {
                chatID: 24,
                speaker: "thinking",
                text: "What is that light. Am I dead?",
                button: [
                    { chatID: 25, text: "...", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "thinking",
                text: "I can't seem to move. What the hell. What are they doing?",
                button: [
                    { chatID: 26, text: "...", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "me",
                text: "AAAAAA!! Aaaaaa",
                button: [
                    { chatID: -1, text: "...", callback: "box" }
                ]
            },
           
           
            
            {
                chatID: 42,
                speaker: "thinking",
                text: "Well that was better than just sitting around. Now what.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 43,
                speaker: "thinking",
                text: "Oh crap, that cum isn't coming out! Gross.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 44,
                speaker: "cult",
                text: "This cell is a mess. Only cleanliness is the holy grail for Azrael. You must pay the price for your transgression. ",
                button: [
                    { chatID: 45, text: "*GULP*", callback: "clean1" }
                ]
            },
            {
                chatID: 45,
                speaker: "cult",
                text: "You must cleanse yourself of your sins by cleaning my pussy. Now eat it!",
                button: [
                    { chatID: -1, text: "MMmmm", callback: "" }
                ]
            },
            {
                chatID: 46,
                speaker: "cult",
                text: "Oh fuck! You are awesome! I'm going to cum all over your face! ",
                button: [
                    { chatID: 47, text: "*lick* *lick* *lick*", callback: "clean3" }
                ]
            },
            {
                chatID: 47,
                speaker: "cult",
                text: "Now clean up this mess bitch!",
                button: [
                    { chatID: -1, text: "Right away!", callback: "clean4" }
                ]
            },
            {
                chatID: 48,
                speaker: "thinking",
                text: "This stone is loose. If only I had a something to help pry it loose. Where am I going to get something to pry it? " +
                    "It also looks heavy. I hope I'm strong enough to move it. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 49,
                speaker: "thinking",
                text: "I've chiseled it loose, but I'm not strong enough to move it. I should do some pushups. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            
            
            
            {
                chatID: 54,
                speaker: "thinking",
                text: "Almost got it... Yes I broke through! It's too tight to squeeze through. I wonder what's on the other side. ",
                button: [
                    { chatID: 55, text: "...", callback: "brick1" }
                ]
            },
            
            
            {
                chatID: 68,
                speaker: "thinking",
                text: "He doens't know I can see him. His butt is right there. Should I call out, or maybe I can surprise him..",
                button: [
                    { chatID: -1, text: "Surprise him", callback: "bb0" },
                    { chatID: 73, text: "Call out", callback: "b2" }
                ]
            },
            {
                chatID: 69,
                speaker: "bodhi",
                text: "<span class='hl-pink'>MOAN</span>",
                button: [
                    { chatID: 70, text: "?", callback: "" }
                ]
            },
            {
                chatID: 70,
                speaker: "bodhi",
                text: "OOooo yeah. Lick it.",
                button: [
                    { chatID: -1, text: "...", callback: "bb2" }
                ]
            },
            {
                chatID: 71,
                speaker: "bodhi",
                text: "<span class='hl-pink'>Hahah Again!</span>",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 72,
                speaker: "bodhi",
                text: "I love a good sissy pussy licking! It's totally sweet. I think we just became friends!",
                button: [
                    { chatID: 73, text: "Sweet", callback: "" }
                ]
            },
            {
                chatID: 73,
                speaker: "bodhi",
                text: "So I was talking to my owner. She says she may be able to help you, but you have to get on the cults good " +
                    "side. Just lay low and do what they say. ",
                button: [
                    { chatID: -1, text: "Yeah, got it. Cool", callback: "bb4" }
                ]
            },
            
            {
                chatID: 79,
                speaker: "cult",
                text: "Then stop wasting my time. ",
                button: [
                    { chatID: -1, text: "Finish", callback: "reset" },
                ]
            },
            {
                chatID: 80,
                speaker: "thinking",
                text: "Damn. I'm locked pretty tight. ",
                button: [
                    { chatID: 81, text: "...", callback: "mp2" }
                ]
            },
            {
                chatID: 81,
                speaker: "thinking",
                text: "Oh no! What have I gotten myself into again. ",
                button: [
                    { chatID: 82, text: "...", callback: "mp3" }
                ]
            },
            {
                chatID: 82,
                speaker: "cult",
                text: "After I finish pissing in your mouth I'm going to piss into that sweet ass of yours. ",
                button: [
                    { chatID: 83, text: "GLUB GLUB", callback: "mp4" }
                ]
            },
            {
                chatID: 83,
                speaker: "cult",
                text: "Oh yes. That ass is hungry for my piss. ",
                button: [
                    { chatID: 84, text: "...", callback: "mp5" }
                ]
            },
            {
                chatID: 84,
                speaker: "thinking",
                text: "I'm so full of piss! It's leaking all over my body. I don't think I can fit any more. ",
                button: [
                    { chatID: 85, text: "...", callback: "mp6" }
                ]
            },
            {
                chatID: 85,
                speaker: "cult",
                text: "My favorite pee pee girl! I love pissing in this slut! ",
                button: [
                    { chatID: 86, text: "...", callback: "mp7" }
                ]
            },
            {
                chatID: 86,
                speaker: "thinking",
                text: "I feel so dirty, used and ashamed. ",
                button: [
                    { chatID: 87, text: "Gulp", callback: "mp8" }
                ]
            },
            {
                chatID: 87,
                speaker: "cult",
                text: "GROSS!! You're so disgusting! Back to your cell pee pee whore. ",
                button: [
                    { chatID: 88, text: "[Return to cell]", callback: "mp9" }
                ]
            },
            {
                chatID: 88,
                speaker: "thinking",
                text: "Oh no! I have so much pee in me it's cramping sooooo bad. I need to expel it!",
                button: [
                    { chatID: 89, text: "...", callback: "mp10" }
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "Oh god! That feels so good!",
                button: [
                    { chatID: -1, text: "Groan", callback: "mp11" }
                ]
            },
            
            {
                chatID: 97,
                speaker: "cult",
                text: "I'm glad you know your place is to serve. You will crawl to the showers, now down slave.",
                button: [
                    { chatID: 98, text: "...", callback: "shower2" }
                ]
            },
            {
                chatID: 98,
                speaker: "cult",
                text: "Keep your eyes on the floor while I pick someone for you. ",
                button: [
                    { chatID: 99, text: "...", callback: "shower3" }
                ]
            },
            {
                chatID: 99,
                speaker: "cult",
                text: "She'll do nicely. Now clean her good slave. ",
                button: [
                    { chatID: 100, text: "...", callback: "shower4" }
                ]
            },
            {
                chatID: 100,
                speaker: "cult",
                text: "Now that her front is clean, you need to clean the back. ",
                button: [
                    { chatID: 101, text: "...", callback: "shower5" }
                ]
            },
            {
                chatID: 101,
                speaker: "cult",
                text: "Good slave. Back to your cell. ",
                button: [
                    { chatID: -1, text: "...", callback: "shower6" }
                ]
            },
            {
                chatID: 102,
                speaker: "cult",
                text: "Too much body hair is unhygienic. We don't want you to get lice or crabs. Now go shave. ",
                button: [
                    { chatID: 103, text: "ok.", callback: "shave1" }
                ]
            },
            {
                chatID: 103,
                speaker: "thinking",
                text: "I should shave like she told me to. ",
                button: [
                    { chatID: -1, text: "...", callback: "shave2" }
                ]
            },
            {
                chatID: 104,
                speaker: "cult",
                text: "You've been such a good slut " + sc.n("ubel") + " has asked for you to join the ceremony. " ,
                button: [
                    { chatID: -1, text: "...", callback: "ceremony" }
                ]
            },
            {
                chatID: 105,
                speaker: "bodhi",
                text: "Just be cool and they'll let you out. Then you can come over and visit! ",
                button: [
                    { chatID: -1, text: "Ok ", callback: "reset" }
                ]
            },
            {
                chatID: 106,
                speaker: "cult",
                text: "I can see you're on the path to enlightenment. If you stay the path you may find yourself within the " +
                    "Carnal Union of Motals. You still have much to learn, and much suffering to give before we will look at you, " +
                    "but for now I shall let you stretch your legs and wander the hallway. ",
                button: [
                    { chatID: 107, text: "Nice! ", callback: "" }
                ]
            },
            {
                chatID: 107,
                speaker: "cult",
                text: "While you may visit your fellow cell prisoners, but you may not proceed beyond the hallway without an escort. " +
                    "May Azreal be with you. ",
                button: [
                    { chatID: -1, text: "ok", callback: "reset" }
                ]
            },
            {
                chatID: 108,
                speaker: "thinking",
                text: "cleaning this hallway isn't so bad. I wish it was warmer though. ",
                button: [
                    { chatID: 109, text: "Chat with the cult member at the end of the hall", callback: "sweepHallway2" },
                    { chatID: -1, text: "Finish cleaning", callback: "sweepHallway1end" }
                ]
            },
            {
                chatID: 109,
                speaker: "cult",
                text: "You're looking at me like you want to suck my cock. ",
                button: [
                    { chatID: 110, text: "Oh. I do", callback: "sweepHallway3" },
                    { chatID: -1, text: "Nothing. I've got to finish cleaning. Sorry. ", callback: "sweepHallway1end" }
                ]
            },
            {
                chatID: 110,
                speaker: "cult",
                text: "I thought so slut. Now get to it. ",
                button: [
                    { chatID: 111, text: "Yes sir.", callback: "sweepHallway4" }
                ]
            },
            {
                chatID: 111,
                speaker: "cult",
                text: "That's a good cock sucker. You must have sucked a lot of dicks. ",
                button: [
                    { chatID: -1, text: "SLURP SLURP SLURP", callback: "sweepHallway5" }
                ]
            },
            {
                chatID: 112,
                speaker: "cult",
                text: "Oh fuck! Swallow my cum slut! ",
                button: [
                    { chatID: 113, text: "GURGLE, Slurp, swollow", callback: "sweepHallway6" }
                ]
            },
            {
                chatID: 113,
                speaker: "cult",
                text: "Now thank me for allowing your to swollow my cum slut and get out of here.  ",
                button: [
                    { chatID: -1, text: "Thank you for letting me swollow your cum. ", callback: "sweepHallway6end" }
                ]
            },
            {
                chatID: 114,
                speaker: "thinking",
                text: "Those keys are so BIG! I need to stretch my ass out more if I want to fit them in! Maybe I'll use " +
                    "those vegetables to stretch me out more. ",
                button: [
                    { chatID: 113, text: "GURGLE, Slurp, swollow", callback: "sweepHallway6" }
                ]
            },
            {
                chatID: 115,
                speaker: "thinking",
                text: "I'll just grab these keys really quick while he's got his eyes closed and shove them in my ass. ",
                button: [
                    { chatID: 116, text: "GURGLE, Slurp, swollow", callback: "sweepHallway6x" }
                ]
            },
            {
                chatID: 116,
                speaker: "thinking",
                text: "Oh wow. They are so cold! Now to sneak these keys back to my cell and get it to " + sc.n("daria") + ". ",
                button: [
                    { chatID: 117, text: "...", callback: "sweepHallway7" }
                ]
            },
            {
                chatID: 117,
                speaker: "daria",
                text: "I saw you blowing that guy. Did you get the keys?",
                button: [
                    { chatID: 118, text: "I did. They're in hidden in my butt. ", callback: "" }
                ]
            },
            {
                chatID: 118,
                speaker: "daria",
                text: "Good. Turn around really quick, I'll grab them.",
                button: [
                    { chatID: 119, text: "Wha...", callback: "sweepHallway8" }
                ]
            },
            {
                chatID: 119,
                speaker: "daria",
                text: "I think I feel them. Your asshole is so stretched out. One second... Got them.",
                button: [
                    { chatID: 120, text: "OOooooo", callback: "sweepHallway7" }
                ]
            },
            {
                chatID: 120,
                speaker: "daria",
                text: "Everything's set. The next time they do the ceremony we'll break out of here! I can't stay long. Keep a " +
                    "low profile. ",
                button: [
                    { chatID: -1, text: "Sweet", callback: "sweepHallway9" }
                ]
            },
            {
                chatID: 121,
                speaker: "cult",
                text: "You're doing well at cleaning. So well I'll let you clean the floors. ",
                button: [
                    { chatID: -1, text: "oh, uh thanks. ", callback: "sleepforNight" }
                ]
            },
            {
                chatID: 122,
                speaker: "cult",
                text: "I can tell you're a dirty dirty slut. Cleaning floors is really a waste of your talents. I'm going to let you " +
                    "be a toilet. It's more fitting for a trashy slut like you. ",
                button: [
                    { chatID: -1, text: "Thanks?", callback: "sleepforNight" }
                ]
            },
            {
                chatID: 123,
                speaker: "cult",
                text: "Step aside, we must prepare you. ",
                button: [
                    { chatID: 124, text: "Huh?", callback: "t0" }
                ]
            },
            {
                chatID: 124,
                speaker: "cult",
                text: "You are blessed to have the opportunity with " + sc.n("ubel") + ". He doesn't usually spend time with " +
                    "the milking stock, but he sees something special in you. May Azreal be with you this night. ",
                button: [
                    { chatID: 125, text: "Uhh, you too?", callback: "t1" }
                ]
            },
            {
                chatID: 125,
                speaker: "ubel",
                text: "Azreal truly has blessed us both with our meeting. It was fate that brought you to me. ",
                button: [
                    { chatID: 126, text: "What?", callback: "" }
                ]
            },
            {
                chatID: 126,
                speaker: "ubel",
                text: "Don't speak. You are an empty vessel, both in mind and spirit with no true meaning for your life. But Azreal " +
                    "has seen your potential. That is why you were brought to me. To fill you with meaning till it overflows from " +
                    "your stoma and bowels. ",
                button: [
                    { chatID: 127, text: "?", callback: "" }
                ]
            },
            {
                chatID: 127,
                speaker: "ubel",
                text: "But no realizings one's potential takes time and effort on both our ends for your ascension into greatness. " +
                    "Are you ready small one to begin of your journey?",
                button: [
                    { chatID: 128, text: "Journey?", callback: "t2" }
                ]
            },
            {
                chatID: 128,
                speaker: "ubel",
                text: "Yes. I will shape and mold you into who you were truly meant to be. Now ready yourself, for the first step " +
                    "is to break you with pain. ",
                button: [
                    { chatID: 129, text: "Pain?", callback: "t3" }
                ]
            },
            {
                chatID: 129,
                speaker: "ubel",
                text: "PAIN WILL MOLD YOU!",
                button: [
                    { chatID: 130, text: "AAAAAAAaaaaaaaaaaaaaaaaaa", callback: "t2" }
                ]
            },
            {
                chatID: 130,
                speaker: "ubel",
                text: "Pain will..",
                button: [
                    { chatID: 131, text: "*Sob*", callback: "t3" }
                ]
            },
            {
                chatID: 131,
                speaker: "ubel",
                text: "FREE YOUR BODY!!",
                button: [
                    { chatID: 132, text: "AAAAaaaaa", callback: "t2" }
                ]
            },
            {
                chatID: 132,
                speaker: "ubel",
                text: "Pain will...",
                button: [
                    { chatID: 133, text: "*Whimper*", callback: "t3" }
                ]
            },
            {
                chatID: 133,
                speaker: "ubel",
                text: "FREE YOUR MIND!!",
                button: [
                    { chatID: 134, text: "!!!!!!!", callback: "t2" }
                ]
            },
            {
                chatID: 134,
                speaker: "ubel",
                text: "Pain will...",
                button: [
                    { chatID: 135, text: "*Sob uncontrollably*", callback: "t3" }
                ]
            },
            {
                chatID: 135,
                speaker: "ubel",
                text: "MAKE YOU MINE!!!!",
                button: [
                    { chatID: 136, text: "AAAAAAAAAAAAAaaaaaa", callback: "t4x" }
                ]
            },
            {
                chatID: 136,
                speaker: "ubel",
                text: "Leave her to enjoy her pain through the night. It must be relished. ",
                button: [
                    { chatID: 137, text: "*whimper*", callback: "t5" }
                ]
            },
            {
                chatID: 137,
                speaker: "thinking",
                text: "I'm in too much pain to even think. My legs sting, my calves are cramping, and my buttole feels like it's going " +
                    "to rip open. I will do anything not to have that happen again...",
                button: [
                    { chatID: 138, text: "...", callback: "t4" }
                ]
            },
            {
                chatID: 138,
                speaker: "cult",
                text: "You are blessed to have such an experience. I shall let you down, but don't forget the lesson you have learned. ",
                button: [
                    { chatID: -1, text: "*Grumble*", callback: "t6" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};