//Room name
var room316 = {};
room316.main = function () {
    if (sc.getMission("dog", "vacation").inProgress) {
        var dogLevel = sc.getLevel("dog");
        var displayMenus = true;
        var dsex = daily.get("dsex");

        if (!dsex) {
            if (dogLevel > 5 && !daily.get("dcrawl")) {
                if (!daily.get("dcrawl")) {
                    sc.modLevel("dog", 10, 5);
                    displayMenus = false;
                    daily.set("dcrawl");
                    nav.button({
                        "type": "img",
                        "name": "janice",
                        "left": 453,
                        "top": 42,
                        "width": 957,
                        "height": 1038,
                        "image": "316_livingroom/knockdown.png"
                    }, 316);
                    chat(93, 316);
                }
            }
            else if (dogLevel > 6 && !cl.isLewd()) {
                sc.modLevel("dog", 10, 6);
                displayMenus = false;
                cl.nude();
                nav.button({
                    "type": "img",
                    "name": "janice",
                    "left": 439,
                    "top": 132,
                    "width": 1481,
                    "height": 948,
                    "image": "316_livingroom/strip.png"
                }, 316);
                chat(94, 316);
            }
            else if (dogLevel > 6 && g.rand(0, 5) === 0) {
                displayMenus = false;
                room316.btnclick("dsex0");
            }
        }

        if (displayMenus) {
            sc.select("iconWardrobe", "316_livingroom/icon_wardrobe.png", 0);

            if (!daily.get("dlock")) {
                if (daily.get("dcrawl"))
                    sc.select("iconStand", "316_livingroom/icon_alpha.png", 1);
                else
                    sc.select("iconCrawl", "316_livingroom/icon_crawl.png", 1);

                if (!daily.get("dpet") && !daily.get("dcrawl"))
                    sc.select("iconPet", "316_livingroom/icon_pet.png", 2);

                if (!daily.get("dpb"))
                    sc.select("dpeanutbutter", "316_livingroom/icon_peanutbutter.png", 3);

                if (!daily.get("dwalk"))
                    sc.select("dwalk", "316_livingroom/icon_walk.png", 4);

                sc.select("tryToLeave", "316_livingroom/icon_leave.png", 5);
            }

            if (daily.get("dlock")) {
                nav.bg("316_livingroom/bg.jpg");
            }
            else if (!daily.get("dcrawl")) {
                nav.bg("316_livingroom/dog_standing.jpg");
            }
            else {
                if (cl.isLewd()) {
                    gv.mod("arousal", 10);
                    if (!daily.get("dsniff")) {
                        daily.set("dsniff");
                        sc.modLevel("dog", 20, 5);
                        levels.mod("sub", 15, 999);
                        levels.mod("beast", 10, 0);
                    }

                    zcl.assup(650, 500, .55, "");
                    nav.bg("316_livingroom/dog_snif.jpg");
                }
                else if (cl.c.dress !== null) {
                    gv.mod("arousal", 10);
                    levels.mod("beast", 10, 0);
                    zcl.assup(650, 500, .55, "reddress");
                    nav.bg("316_livingroom/dog_snif.jpg");
                }
                else {
                    nav.bg("316_livingroom/dog_crawlClothes.jpg");
                }
            }
        }

        nav.buildnav([317, 318, 319]);
    }
    else if (g.pass === "picked_316") {
        if (sc.getLevel("dog") < 8) {
            nav.bg("316_livingroom/lockpick_bad.jpg");
            chat(109, 316);
        }
        else {
            if (daily.get("dsex")) {
                nav.bg("316_livingroom/lockpick_bad.jpg");
                chat(114, 316);
            }
            else if (cl.hasoutfit("nude") === null) {
                room316.chatcatch("picklock1");
                return;
            }
            else {
                nav.bg("316_livingroom/lockpick0.jpg");
                chat(110, 316);
                return;
            }
        }
    }
    else if (sc.getMission("janice", "date").inProgress) {
        if (cl.isCrossdressing() || cl.c.chest > 2) {
            chat(130, 316);
            return
        }


        daily.set("janice");
        g.pass = { money: false, dog: false, pb: false, talk: false, dick: false, tv: false };
        var janiceTask = sc.taskGetStep("janice", "date");
        if (janiceTask === 0) {
            nav.bg("316_livingroom/task0_1.jpg");
            chat(74, 316);
        }
        else if (janiceTask === 1) {
            nav.bg("316_livingroom/task2_0.jpg");
            chat(78, 316);
        }
        else if (janiceTask === 2) {
            sc.completeMissionTask("janice", "date", 2, true);
            nav.bg("316_livingroom/talk.jpg");
            chat(15, 316);
        }
        else if (janiceTask === 3) {
            nav.bg("316_livingroom/task3_1.jpg");
            g.internal = 0;
            nav.next("task3");
        }
        else if (janiceTask === 4) {
            nav.bg("316_livingroom/task4_1.jpg");
            chat(60, 316);
        }
        else {
            var btnList = [
                {
                    "type": "img",
                    "name": "janice",
                    "left": 908,
                    "top": 0,
                    "width": 444,
                    "height": 1080,
                    "image": "316_livingroom/janice.png"
                }
            ];
            var navList = [0];
            $.each(btnList, function (i, v) {
                nav.button(v, 316);
            });
            nav.buildnav(navList);
            room316.btnclick("buildMenu");
        }
    }
    else {
        if (!sc.getSecret("janice").secretOut) {
            if (cl.isCrossdressing() || cl.c.chest > 2)
                sc.modSecret("janice", 100);
        }
        if (sc.getMission("janice", "femdom").notStarted) {
            nav.kill();
            var howManyFed = 0;
            for (i = 0; i < 6; i++) {
                if (sc.getMissionTask("dog", "vacation", i).complete)
                    howManyFed++;
            }

            if (howManyFed > 2) {
                nav.bg("316_livingroom/talk.jpg");
                sc.startMission("janice", "femdom");
                sc.completeMissionTask("janice", "femdom", 0);
                chat(103, 316);
            }
            else {
                nav.bg("316_livingroom/breakup.jpg");
                chat(102, 316);
            }
            return;
        }
        else if (sc.taskGetStep("janice", "femdom") === 6) {
            nav.killall();
            daily.set("janice");
            nav.bg("316_livingroom/kiss.jpg");
            chat(140, 316);
            return;
        }
        else if (gv.get("janiceDatr") !== null) {
            nav.bg("316_livingroom/talk.jpg");
            chat(145, 316);
            return;
        }
        let webcam = false;
        if (sc.getSecret("janice").secretOut && sc.getMissionTask("janice", "femdom", 2).notStarted)
            webcam = true;
        if (daily.get("janiceWebcam"))
            webcam = true;

        let dt = sc.getMission("janice", "datr");
        let dtCount = 0;
        if (!sc.getMission("janice", "dog-x").fail) {
            for (let i = 0; i < sc.charMission[dt.i].mission[dt.j].task.length; i++) {
                if (sc.charMission[dt.i].mission[dt.j].task[i].mStatus > 0)
                    dtCount++;
            }
        }
        
        g.pass = {
            money: false,
            dog: (dtCount < 2),
            pb: false,
            talk: false,
            dick: false,
            datr: !sc.getMissionTask("janice", "femdom", 6).complete,
            tv: false,
            webcam: webcam
        };
        room316.btnclick("buildMenuCuck");
    }
        //else if (sc.getMission("janice", "cuck").inProgress) {
    //    if (sc.taskGetStep("janice", "dog") === 2) {
    //        nav.bg("316_livingroom/bitch_0_0.jpg");
    //        chat(153, 316);
    //        return;
    //    }
    //    switch (sc.taskGetStep("janice", "cuck")) {
    //        case 0:
    //        case 1:
    //            nav.bg("316_livingroom/bitch_0_0.jpg");
    //            chat(125, 316);
    //            break;
    //        case 2:
    //            nav.bg("316_livingroom/bitch_0_0.jpg");
    //            chat(131, 316);
    //            break;
    //        case 3:
    //        case 4:
    //            daily.set("janice");
    //            if (gv.get("janiceDatr") !== null) {
    //                nav.bg("316_livingroom/talk.jpg");
    //                chat(152, 316);
    //            }
    //            else {
    //                g.pass = { money: false, dog: false, pb: false, talk: false, dick: false, datr: false };
    //                room316.btnclick("buildMenuCuck");
    //            }
    //            break;
    //    }
    //}
    //else {
    //    if (cl.isCrossdressing())
    //        sc.modSecret("janice", 100);

    //    g.pass = { money: false, dog: false, pb: false, talk: false, dick: false };
    //    if (sc.taskGetStep("janice", "bitch") < 3) {
    //        nav.kill();
    //        var howManyFed = 0;
    //        for (i = 0; i < 6; i++) {
    //            if (sc.getMissionTask("dog", "vacation", i).complete)
    //                howManyFed++;
    //        }
    //        if (howManyFed > 2) {
    //            nav.bg("316_livingroom/talk.jpg");
    //            sc.startMission("janice", "bitch");
    //            sc.completeMissionTask("janice", "bitch", 0);
    //            chat(103, 316);
    //        }
    //        else {
    //            nav.bg("316_livingroom/breakup.jpg");
    //            chat(102, 316);
    //        }
    //    }
    //    else {
    //        g.pass = { money: false, dog: false, pb: false, talk: false, dick: false, datr: false, webcam: daily.get("janiceWebcam") };
    //        room316.btnclick("buildMenuCuck");
    //        return;
    //    } 
    //}
};

room316.btnclick = function (name) {
    switch (name) {
        //dog vacation
        case "iconWardrobe":
            g.pass = 316;
            char.room(8);
            break;
        case "iconStand":
            daily.set("dcrawl", false);
            char.room(316);
            break;
        case "iconCrawl":
            daily.set("dcrawl");
            if (!daily.get("dsniff")) {
                daily.set("dsniff");
                sc.modLevel("dog", 20, 5);
                levels.mod("sub", 15, 999);
                levels.mod("beast", 10, 0);
            }
            char.room(316);
            break;
        case "dpeanutbutter":
            if (inv.has("peanutbutter")) {
                if (daily.get("dcrawl") && cl.isLewd()) {
                    nav.killall();
                    zcl.assup(650, 500, .55, "");
                    sc.select("icon_dcrawlpbGive", "316_livingroom/icon_dcrawlpbGive.png", 0);
                    sc.select("icon_dcrawlpbButt", "316_livingroom/icon_dcrawlpbButt.png", 1);
                    sc.selectCancel("reset", 2);
                }
                else {
                    nav.killall();
                    nav.bg("316_livingroom/pbStand.jpg");
                    daily.set("dpb");
                    sc.modLevel("dog", 50, 2);
                    levels.mod("beast", 10, 0);
                    chat(88, 316);
                }
            }
            else {
                nav.killbutton("dpeanutbutter");
                chat(87, 316);
            }
            break;
        case "iconWalkCuck":
            nav.killall();
            g.pass.dog = true;
            nav.bg("316_livingroom/walk_cuck0.jpg");
            sc.modLevel("dog", 34, 10);
            if (sc.getMission("janice", "dog-x").notStarted) {
                sc.startMission("janice", "dog-x");
                nav.next("buildMenuCuck");
            }
            else if (sc.getLevel("dog") > 5) {
                sc.completeMissionTask("janice", "dog-x", 0);
                g.internal = 0;
                nav.next("dogWalkCuckFuck0");
            }
            else {
                nav.next("buildMenuCuck");
            }
            break;
        case "dogWalkCuckFuck0":
            nav.killall();
            switch (g.internal) {
                case 0:
                    nav.bg("316_livingroom/walk_cuck1_" + gender.pronoun("f") + ".jpg");
                    nav.next("dogWalkCuckFuck0");
                    break;
                case 1:
                    cl.nude();
                    nav.bg("316_livingroom/walk_cuck2.jpg");
                    zcl.assup(550, 400, .8, "");
                    nav.button({
                        "type": "img",
                        "name": "janice",
                        "left": 552,
                        "top": 309,
                        "width": 1000,
                        "height": 668,
                        "image": "316_livingroom/df.png"
                    }, 316);
                    nav.next("dogWalkCuckFuck0");
                    break;
                case 2:
                    levels.anal(3, false, "m", true, "dog", "dog");
                    if (sc.getMissionTask("janice", "dog-x", 1).complete) {
                        sc.completeMissionTask("janice", "dog-x", 2);
                        nav.bg("316_livingroom/walk_cuck3.jpg");
                        zcl.assup(550, 400, .8, "");
                        nav.button({
                            "type": "img",
                            "name": "janice",
                            "left": 552,
                            "top": 309,
                            "width": 1000,
                            "height": 668,
                            "image": "316_livingroom/df.png"
                        }, 316);
                        nav.button({
                            "type": "img",
                            "name": "janice",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "316_livingroom/walk_cuck3x.png"
                        }, 316);
                        nav.next("dogWalkCuckFuck1");

                    }
                    else {
                        sc.completeMissionTask("janice", "dog-x", 1);
                        nav.bg("316_livingroom/walk_cuck3.jpg");
                        zcl.assup(550, 400, .8, "");
                        nav.button({
                            "type": "img",
                            "name": "janice",
                            "left": 552,
                            "top": 309,
                            "width": 1000,
                            "height": 668,
                            "image": "316_livingroom/df.png"
                        }, 316);
                        nav.button({
                            "type": "img",
                            "name": "janice",
                            "left": 878,
                            "top": 571,
                            "width": 373,
                            "height": 199,
                            "image": "316_livingroom/walk_cuck3.png"
                        }, 316);
                        nav.next("dogWalkCuckFuck0");
                    }
                    break;
                case 3:
                    nav.bg("316_livingroom/walk_sex4.jpg");
                    nav.next("dogWalkCuckFuck0");
                    break;
                case 4:
                    nav.bg("316_livingroom/bitch_0_0.jpg");
                    chat(146, 316);
                    break;
            }
            g.internal++;
            break;
        case "dogWalkCuckFuck1":
            nav.killall();
            nav.bg("316_livingroom/walk_cuck4.jpg");
            zcl.displayMain(-100, 500, .2, "clothes", true);
            chat(148, 316);
            break;
        case "dwalk":
            nav.killall();
            if (cl.hasoutfit("public") === null)
                chat(95, 316);
            else
                chat(96, 316);
            break;
        case "dwalkfuck":
            if (g.internal === 0) {
                nav.bg(cl.c.chastity !== null ? "316_livingroom/walk_sex0_c.jpg" : "316_livingroom/walk_sex0_n.jpg");
            }
            else {
                nav.bg("316_livingroom/walk_sex" + g.internal + ".jpg");
            }
            if (g.internal === 5) {
                levels.anal(3, false, "m", true, "dog", "dog");
                levels.mod("fame", 25, 999);
                nav.killbutton("dwalkfuck");
                chat(101, 316);
            }
            g.internal++;
            break;
        case "tryToLeave":
            if (cl.hasoutfit("public") === null)
                char.room(0);
            else {
                if (dogLevel > 6 && !daily.get("dsex")) {
                    room316.btnclick("dsex0");
                }
                else {
                    chat(800, 316);
                }
            }
            break;
        case "dsex0":
            nav.killall();
            nav.bg("316_livingroom/dsex1.jpg");
            chat(97, 316);
            break;
        case "icon_dcrawlpbGive":
            nav.killall();
            nav.bg("316_livingroom/pbStand.jpg");
            daily.set("dpb");
            levels.mod("beast", 10, 0);
            sc.modLevel("dog", 50, 1);
            chat(88, 316);
            break;
        case "icon_dcrawlpbButt":
            if (levels.get("beast").l < 1) {
                chat(89, 316);
            }
            else {
                nav.killall();
                nav.bg("316_livingroom/pblick.jpg");
                zcl.assup(650, 500, .55, "");
                daily.set("dpb");
                nav.next("icon_dcrawlpbButt1");
            }
            break;
        case "icon_dcrawlpbButt1":
            nav.killbutton("icon_dcrawlpbButt1");
            daily.set("dpb");
            levels.mod("beast", 20, 4);
            sc.modLevel("dog", 35, 999);
            chat(90, 316);
            break;
        case "iconPet":
            if (sc.getLevel("dog") < 2) {
                nav.killall();
                nav.bg("316_livingroom/petNo.jpg");
                chat(91, 316);
            }
            else {
                daily.set("dpet");
                nav.killall();
                sc.modLevel("dog", 25, 4);
                nav.bg("316_livingroom/pet.jpg");
                chat(92, 316);
            }
            break;
        //dating
        case "buildMenu":
            nav.killall();
            nav.bg("316_livingroom/talk.jpg");
            if (!g.pass.dog)
                sc.select("iconSub", "316_livingroom/icon_sub.png", 0);

            if (!g.pass.pb)
                sc.select("iconPb", "316_livingroom/icon_peanutbutter.png", 2);

            if (!g.pass.tv)
                sc.select("icontv", "316_livingroom/icon_tv.png", 4);

            if (!g.pass.talk)
                sc.select("iconTalk", "316_livingroom/icon_talk.png", 1);

            if (!g.pass.money) {
                sc.select("icon25", "316_livingroom/icon_25.png", 3);
                sc.select("icon50", "316_livingroom/icon_50.png", 5);
                sc.select("icon100", "316_livingroom/icon_100.png", 7);
            }

            if (!g.pass.dick)
                sc.select("iconDick", "316_livingroom/icon_dick.png", 9);

            sc.select("iconLeave", "316_livingroom/icon_leave.png", 10);
            break;
        case "buildMenuCuck":
            nav.killall();
            nav.bg("316_livingroom/talk.jpg");

            if (!g.pass.pb)
                sc.select("iconPb", "316_livingroom/icon_peanutbutter.png", 0);

            if (!g.pass.talk)
                sc.select("iconTalkCuck", "316_livingroom/icon_talk.png", 1);
            if (!g.pass.webcam)
                sc.select("iconWebcam", "316_livingroom/icon_webcam.png", 2);
            if (!g.pass.money) {
                sc.select("icon25", "316_livingroom/icon_25.png", 3);
                sc.select("icon50", "316_livingroom/icon_50.png", 5);
                sc.select("icon100", "316_livingroom/icon_100.png", 7);
            }
            if (!g.pass.tv)
                sc.select("icontv", "316_livingroom/icon_tv.png", 4);
            if (!g.pass.datr)
                sc.select("iconDatr", "316_livingroom/icon_datr.png", 6);
            //if (!g.pass.dog)
            //    sc.select("iconWalkCuck", "316_livingroom/icon_walk.png", 8);

            if (!g.pass.dick)
                sc.select("iconDickx", "316_livingroom/icon_dick.png", 9);

            sc.select("iconLeave", "316_livingroom/icon_leave.png", 10);

            break;
        case "iconLeave":
            char.room(0);
            break;
        case "icontv":
            g.pass.tv = true;
            nav.kill();
            sc.modLevel("janice", 15, 5);
            nav.bg("316_livingroom/tv_" + gender.pronoun("f") + ".jpg");
            chat(139, 316);
            break;
        case "iconWebcam":
            char.room(321);
            break;
        case "iconTalk":
            g.pass.talk = true;
            nav.killall();
            nav.bg("316_livingroom/talk.jpg");
            var dating = sc.taskGetStep("janice", "date");
            switch (dating) {
                case 1:
                    sc.completeMissionTask("janice", "date", 1, true);
                    chat(9, 316);
                    break;
                case 2:
                    sc.completeMissionTask("janice", "date", 2, true);

                    chat(15, 316);
                    break;
                case 5:
                    sc.completeMissionTask("janice", "date", 5, true);
                    sc.completeMission("janice", "date", true);
                    sc.startMission("dog", "vacation");
                    sc.startMissionTask("dog", "vacation", 1);
                    future.add("janicevacation", 7);
                    inv.add("keyJanice");
                    chat(73, 316);
                    break;
            }
            break;
        case "bj":
            if (g.internal === 0) {
                nav.bg("316_livingroom/bj2.jpg");
                g.internal = 1;
            }
            else {
                levels.gotbj("f", "janice");
                nav.bg("316_livingroom/bj3.jpg");
                nav.killbutton("bj");
                chat(49, 316);
            }
            break;
        case "task3":
            if (g.internal === 0) {
                nav.bg("316_livingroom/task3_2.jpg");
                g.internal = 1;
            }
            else {
                nav.killbutton("task3");
                nav.bg("316_livingroom/task3_3.jpg");
                chat(52, 316);
            }

            break;
        case "iconSub":
            g.pass.dog = true;
            nav.killall();
            nav.bg("316_livingroom/task0_2.jpg");
            sc.modLevel("dog", 30, 4);
            levels.mod("beast", 15, 2);
            nav.next("buildMenu");
            break;
        case "iconPb":
            g.pass.pb = true;
            nav.killall();
            if (inv.has("peanutbutter")) {
                nav.bg("316_livingroom/pb.jpg");
                inv.use("peanutbutter");
                sc.modLevel("janice", 15, 5);
                sc.modLevel("dog", 20, 4);
                if (sc.getMission("janice", "femdom").notStarted)
                    nav.next("buildMenu");
                else
                    nav.next("buildMenuCuck");
            }
            else
                chat(77, 316);
            break;
        case "icon25":
        case "icon50":
        case "icon100":
            g.pass.money = true;
            nav.killall();
            var sValue = parseInt(name.replace("icon", ""));
            var myMoney = gv.get("money");
            if (myMoney < 1) {
                chat(10, 316);
            }
            else if (myMoney < sValue) {
                gv.mod("money", -myMoney);
                sc.modLevel("janice", myMoney, 999);
                g.internal = myMoney;
                chat(997, 316);
            }
            else {
                gv.mod("money", -sValue);
                sc.modLevel("janice", sValue, 999);
                nav.bg("316_livingroom/kiss.jpg");
                chat(12, 316);
            }
            break;
        case "iconDickx":
            if (cl.c.chastity === null) {
                levels.mod("dom", 25, 999);
                nav.bg("316_livingroom/dick.jpg");
                chat(116, 316);
            }
            else {
                nav.bg("316_livingroom/chastity.jpg");
                sc.modLevel("janice", 30, 999);
                sc.modSecret("janice", 100);
                gv.mod("arousal", 50);
                chat(83, 316);
            }
            break;
        case "iconDick":
            g.pass.dick = true;
            nav.killall();
            if (cl.c.chastity === null) {
                levels.mod("dom", 25, 999);
                nav.bg("316_livingroom/dick.jpg");
                chat(81, 316);
            }
            else {
                nav.bg("316_livingroom/chastity.jpg");
                sc.modLevel("janice", 30, 999);
                sc.modSecret("janice", 100);
                gv.mod("arousal", 50);
                chat(83, 316);
            }
            break;
        case "iconTalkCuck":
            nav.kill();
            if (sc.getSecret("janice").secretOut && sc.getMissionTask("janice", "femdom", 2).notStarted) {
                chat(119, 316);
                return;
            }
            else {
                switch (sc.taskGetStep("janice", "femdom")) {
                    case -1:
                    case 0:
                    case 1:
                    case 2:
                        if (sc.getMissionTask("janice", "webcam", 3).complete)
                            chat(117, 316);
                        else
                            chat(118, 316);
                        break;
                    case 3:
                    case 4:
                        if (inv.has("straponSmall"))
                            chat(128, 316);
                        else
                            chat(129, 316);
                        break;
                    case 5:
                        nav.kill();
                        nav.bg("316_livingroom/cry.jpg");
                        chat(132, 316);
                        break;
                    default:
                        chat(154, 316);
                        break;
                }
            }


            //switch (sc.taskGetStep("janice", "cuck")) {
            //    case 3:
            //        nav.killall();
            //        chat(147, 316);
            //        break;
            //}
            break;
        case "room318":
            char.room(318);
            break;
        case "iconDatr":
            nav.killall();
            nav.bg("316_livingroom/kiss.jpg");
            if (gv.get("janiceDatr") !== null || future.get("j-mike") > -1 ||
                future.get("j-jarome") > -1 || future.get("j-jabari") > -1 ||
                future.get("j-brad") > -1)
                chat(142, 316);
            else if (sc.getMission("janice", "datr").notStarted) {
                chat(143, 316);
            }
            else
                chat(144, 316);
            break;
        case "datr":
            nav.killall();
            var datr = [
                { n: "datr_mike", i: "datr_mike.jpg" },
                { n: "datr_albert", i: "datr_albert.jpg" },
                { n: "datr_chris", i: "datr_chris.jpg" },
                { n: "datr_jarome", i: "datr_jarome.jpg" },
                { n: "datr_bossman", i: "datr_bossman.jpg" },
                { n: "datr_ian", i: "datr_ian.jpg" },
                { n: "datr_jabari", i: "datr_jabari.jpg" },
                { n: "datr_cecilia", i: "datr_cecilia.jpg" },
                { n: "datr_philbert", i: "datr_philbert.jpg" },
                { n: "datr_orchid", i: "datr_orchid.jpg" },
                { n: "datr_ralph", i: "datr_ralph.jpg" },
                { n: "datr_brad", i: "datr_brad.jpg" },
            ];
            var tj = 0;
            for (let i = g.internal.s; i < datr.length && tj < 4; i++) {
                nav.button({
                    "type": "btn",
                    "name": datr[i].n,
                    "left": 743,
                    "top": 293 + (tj * 156),
                    "width": 621,
                    "height": 146,
                    "image": "316_livingroom/" + datr[i].i
                }, 316);
                tj++;
            }
            nav.button({
                "type": (g.internal.s === 0 ? "img" : "btn"),
                "name": "datr_prev",
                "left": 760,
                "top": 915,
                "width": 150,
                "height": 50,
                "image": "999_phone/" + (g.internal.s === 0 ? "prev_inactive.png" : "prev_p_active.png")
            }, 316);
            nav.button({
                "type": (g.internal.s >= (datr.length - 4) ? "img" : "btn"),
                "name": "datr_next",
                "left": 1195,
                "top": 915,
                "width": 150,
                "height": 50,
                "image": "999_phone/" + (g.internal.s >= (datr.length - 4) ? "next_inactive.png" : "next_p_active.png")
            }, 316);
            nav.button({
                "type": "btn",
                "name": "buildMenuCuck",
                "left": 1013,
                "top": 915,
                "width": 90,
                "height": 90,
                "image": "999_phone/power.png"
            }, 316);
            break;
        case "datr_next":
            g.internal.s += 4;
            room316.btnclick("datr");
            break;
        case "datr_prev":
            g.internal.s -= 4;
            room316.btnclick("datr");
            break;
        case "datr_mike":
        case "datr_albert": 
        case "datr_chris":
        case "datr_jarome": 
        case "datr_bossman":
        case "datr_ian":
        case "datr_cecilia":
        case "datr_philbert":
        case "datr_orchid":
        case "datr_ralph":
        case "datr_brad":
        case "datr_jabari":
            g.internal.d = name.replace("datr_", "");
            nav.killall();
            switch (g.internal.d) {
                case "mike":
                case "jarome":
                case "brad":
                case "jabari":
                    nav.bg("316_livingroom/datr_happy.jpg");
                    break;
                default:
                    nav.bg("316_livingroom/datr_nohappy.jpg");
                    break;
            }
            chat(700, 316);
            break;
        case "reset":
            char.room(316);
            break;
        default:
            break;
    }
};

room316.chatcatch = function (callback) {
    switch (callback) {
        case "bg":
        case "walk":
        case "kiss":
        case "time":
        case "task2_1":
        case "date2_1":
        case "date2_2":
        case "date2_3":
        case "date2_3a":
        case "date2_4":
        case "date2_5":
        case "date2_6":
        case "date2_7":
        case "date2_8":
        case "date2_9":
        case "date2_10":
        case "date2_11":
        case "date2_12":
        case "date2_13":
        case "date2_14":
        case "date2_15":
        case "talk":
        case "task3_4":
        case "task4_1":
        case "task4_2":
        case "task4_3":
        case "task4_4":
        case "task4_5":
        case "task4_6":
        case "task4_7":
        case "task4_8":
        case "task4_9":
        case "task4_10":
        case "task0_1a":
        case "bitch_0_d1":
        case "bitch_0_1":
        case "lockpick3":
        case "bitch_1_1":
        case "bitch_0_2":
        case "bitch_0_0_x":
        case "bitch_0_0":
        case "dog0":
        case "dog2":
        case "dog3":
        case "dog4":
        case "dog5":
        case "dog6":
        case "dog7":
        case "dog8":
        case "dog9":
            nav.killall();
            nav.bg("316_livingroom/" + callback + ".jpg");
            break;
        case "dog1":
            cl.nude();
            nav.bg("316_livingroom/" + callback + ".jpg");
            break;
        case "flash":
            nav.bg("316_livingroom/" + callback + ".jpg");
            gv.mod("arousal", 75);
            break;
        case "task0_2":
            nav.killall();
            nav.bg("316_livingroom/" + callback + ".jpg");
            sc.modLevel("dog", 50, 4);
            break;
        case "task4_11":
            sc.completeMissionTask("janice", "date", 4, true);
            break;
        case "date2_16":
            gv.mod("money", -100);
            nav.bg("316_livingroom/" + callback + ".jpg");
            break;
        case "date2_17":
            char.addtime(180);
            if (cl.c.chastity !== null) {
                sc.modSecret("janice", 100);
                nav.bg("316_livingroom/date2_17a.jpg");
                chat(46, 316);
            }
            else {
                nav.bg("316_livingroom/bj1.jpg");
                g.internal = 0;
                nav.next("bj");
            }
            break;
        case "loveup":
            sc.modLevel("janice", 50, 999);
            break;
        case "lovedown":
            sc.modLevel("janice", -50, 999);
            break;
        case "likedom":
            sc.modLevel("janice", -25, 999);
            levels.mod("dom", 30, 999);
            break;
        case "sub":
            sc.modLevel("janice", 25, 999);
            levels.mod("sub", 50, 999);
            break;
       
        case "peanutbutter":
            if (inv.has("peanutbutter")) {
                chat(55, 316);
            }
            else {
                chat(56, 316);
            }
            break;
        case "givePeanutButter":
            sc.modLevel("janice", 50, 999);
            inv.use("peanutbutter");
            break;
        case "task3end":
            sc.completeMissionTask("janice", "date", 3, true);
            char.room(0);
            break;
        case "breakup":
            nav.killall();
            nav.bg("316_livingroom/breakup.jpg");
            sc.completeMission("janice", "date", false);
            sc.completeMission("janice", "webcam", false);
            sc.completeMission("janice", "datr", false);
            sc.completeMission("janice", "dog-x", false);
            sc.startMission("janice", "breakup");
            break;
        case "breakupAlt":
            nav.killall();
            nav.bg("316_livingroom/task4_8a.jpg");
            sc.completeMission("janice", "date", false);
            sc.completeMission("janice", "webcam", false);
            sc.completeMission("janice", "datr", false);
            sc.completeMission("janice", "dog-x", false);
            sc.startMission("janice", "breakup");
            break;
        case "breakupFirst":
            sc.completeMission("janice", "date", false);
            sc.completeMission("janice", "webcam", false);
            sc.completeMission("janice", "datr", false);
            sc.completeMission("janice", "dog-x", false);
            sc.startMission("janice", "breakup");
            char.room(0);
            break;
        case "breakupCuck":
            sc.completeMission("janice", "femdom", false);
            sc.startMission("janice", "breakup");
            char.addtime(60)
            char.room(0);
            break;
        case "breakupDogsit":
            sc.startMission("janice", "breakup");
            char.room(0);
            break;
        case "completeTask1":
            sc.modLevel("dog", 50, 4);
            sc.modLevel("janice", 50, 999);
            sc.completeMissionTask("janice", "date", 0, true);
            char.room(0);
            break;
        case "walk_lead":
            sc.modLevel("dog", 10, 1);
            nav.bg("316_livingroom/walk_lead.jpg");
            daily.set("dwalk");
            nav.next("dwalkNext");
            nav.next("reset");
            break;
        case "walk_follow":
            sc.modLevel("dog", 20, 6);
            daily.set("dwalk");
            nav.bg("316_livingroom/walk_follow.jpg");
            if (sc.getLevel("dog") > 7 && g.rand(0, 10) !== 0) {
                g.internal = 0; 
                nav.next("dwalkfuck");
            }
            else {
                nav.next("reset");
            }
            break;
        case "leave":
            char.room(0);
            break;
        case "buildMenu":
            if(sc.getMission("janice", "femdom").notStarted)
                room316.btnclick("buildMenu");
            else
                room316.btnclick("buildMenuCuck");
            break;
        case "dsex2":
            if (cl.c.chastity === null)
                nav.bg("316_livingroom/dsex2_n.jpg");
            else
                nav.bg("316_livingroom/dsex2_c.jpg");
            break;
        case "dsex3":
            nav.bg("316_livingroom/bg.jpg");
            zcl.assup(550, 400, .8, "");
            nav.button({
                "type": "img",
                "name": "janice",
                "left": 552,
                "top": 309,
                "width": 1000,
                "height": 668,
                "image": "316_livingroom/df.png"
            }, 316);
            break;
        case "dsex4":
            nav.killall();
            if (cl.c.chastity === null)
                nav.bg("316_livingroom/dsex4_n.jpg");
            else
                nav.bg("316_livingroom/dsex4_c.jpg");
            break;
        case "dsex5":
            levels.anal(3, false, "m", true, "dog", "dog");
            sc.modLevel("dog", 30, 10);
            daily.set("dsex");
            char.room(316);
            break;
        case "reset":
            char.room(316);
            break;
        case "checkDog":
            g.internal = null;
            if (sc.getLevel("dog") > 6) {
                cl.nude();
                nav.bg("316_livingroom/bitch_0_d0.jpg");
                if (cl.c.chastity !== null || cl.pantiesTxt === "panties")
                    sc.modSecret("janice", 50);
                chat(104, 316);
            }
            else {
                room316.chatcatch("kiss");
                chat(107, 316);
                return;
            }
            break;
        case "checkDogPanties":
            nav.bg("316_livingroom/bitch_0_d1.jpg");
            break;
        case "checkDogPantiesUndo":
            cl.undo();
            nav.bg("316_livingroom/bg.jpg");
            break;
        case "checkPanties":
            nav.bg("316_livingroom/bitch_0_0.jpg");
            
            if (cl.hasClothing("panties", "j")) {
                sc.modSecret("janice", 100);
                chat(107, 316);
            }
            else if (cl.pantiesTxt() === "panties") {
                sc.modSecret("janice", 100);
                chat(108, 316);
            }
            else if (cl.c.chastity !== null) {
                sc.modSecret("janice", 100);
                chat(109, 316);
            }
            else if (cl.c.chest > 1) {
                sc.modSecret("janice", 100);
                chat(111, 316);
            }
            else if (cl.isCrossdressing()) {
                sc.modSecret("janice", 100);
                chat(112, 316);
            }
            else if (sc.getSecret("janice").secretOut) {
                sc.modSecret("janice", 100);
                chat(113, 316);
            }
            else {
                room316.btnclick("buildMenu");
                //nav.bg("316_livingroom/task4_4.jpg");
                //daily.set("janice");
                //chat(134, 316);
            }
            break;
        case "bitch_0_3":
            daily.set("janice");
            nav.bg("316_livingroom/bitch_0_3.jpg");
            if (gv.get("money") > 99)
                chat(136, 316);
            else
                chat(137, 136);
            break;
        case "bitchMoney":
            nav.bg("316_livingroom/bitch_0_2.jpg");
            gv.mod("money", -100);
            break;
        case "picklock1":
            cl.nude();
            nav.bg("316_livingroom/bg_night.jpg");
            zcl.assup(550, 400, .8, "");
            nav.button({
                "type": "img",
                "name": "dog",
                "left": 552,
                "top": 309,
                "width": 1000,
                "height": 668,
                "image": "316_livingroom/df.png"
            }, 316);
            chat(111, 316);
            break;
        case "lockpick2":
            nav.killall();
            daily.set("dsex");
            nav.bg("316_livingroom/lockpick2.jpg");
            levels.anal(3, false, "m", true, "dog", "dog");
            break;
        //case "cuck_0_complete":
        //    sc.completeMission("janice", "bitch", sc.getMissionTask("janice", "bitch", 1).complete);
        //    sc.startMission("janice", "cuck");
        //    sc.completeMissionTask("janice", "cuck", 0);
        //    daily.set("janice");
        //    char.addtime(60);
        //    char.room(0);
        //    break;
        case "cuck_1_complete":
            levels.mod("xdress", 15, 999);
            sc.completeMissionTask("janice", "femdom", 5);
            daily.set("janice");
            char.addtime(60);
            char.room(0);
            break;
        //case "cuck_3_complete":
        //    sc.completeMissionTask("janice", "cuck", 3);
        //    char.addtime(15);
        //    g.popUpNotice("You can now choose her date. ");
        //    room316.btnclick("buildMenuCuck");
        //    break;
        case "bedroom":
            nav.killall();
            nav.bg("316_livingroom/bg.jpg");
            nav.next("room318")
            nav.buildnav([318]);
            break;
        case "bathroom":
            char.room(320);
            break;
        case "datrScroll":
            nav.killall();
            nav.bg("316_livingroom/phoneBg.jpg");
            g.internal = { s: 0, d: "" };
            room316.btnclick("datr");
            break;
        case "datrScroll1":
            nav.killall();
            nav.bg("316_livingroom/phoneBg.jpg");
            room316.btnclick("datr");
            break;
        case "failJaniceDog":
            sc.completeMission("janice", "dog-x", false);
            char.room(316);
            break;
        case "hasmoney100":
            if (gv.get("money") > 99)
                chat(156, 316);
            else
                chat(157, 316);
            break;
        case "givemoney100":
            gv.mod("money", -100);
            break;
        case "janiceDoggy2complete":
            sc.completeMissionTask("janice", "dog-x", 2);
            char.addtime(60);
            daily.set("janice");
            char.room(0);  
            break;
        case "completeBitch_2":
            daily.set("janice");
            char.addtime(30);
            char.room(0);
            break;
        case "mu_0":
            nav.killall();
            cl.nude();
            nav.bg("316_livingroom/mu_bg.jpg");
            zcl.displayMain(0, 100, .45, "mirror", false);
            if (cl.c.makeup !== null || cl.c.cumface)
                chat(121, 316);
            else
                chat(122, 316);
            break;
        case "mu_1":
            cl.clean("face");
            zcl.displayMain(0, 100, .45, "mirror", false);
            break;
        case "mu_2":
            cl.c.makeup = "blush";
            zcl.displayMain(0, 100, .45, "mirror", false);
            break;
        case "mu_3":
            cl.c.pissface = "light";
            zcl.displayMain(0, 100, .45, "mirror", false);
            break;
        case "mu_4":
            cl.c.lipstick = "pink";
            zcl.displayMain(0, 100, .45, "mirror", false);
            break;
        case "mu_5":
            sc.completeMissionTask("janice", "femdom", 2);
            char.room(321);
            break;
        case "room321":
            char.room(321);
            break;
        case "room322":
            char.room(322);
            break;
        default:
            break;
    }
};

room316.chat = function (chatID) {
    if (chatID === 999) {
        if (g.dt.getDay() === 5) {
            return {
                chatID: 999,
                speaker: "janice",
                text: "Great! I've heard such great things about Dorcia. Come pick me up " +
                    "tomorrow before " + nav.convertTime(20, 0) + "! I'll make it worth your time and money! It's a bit pricey " +
                    "so don't forget your wallet. Hehe",
                button: [
                    { chatID: 14, text: "Oh yeah. That place is like $100 for the two of us. ", callback: "" }
                ]
            }
        }
        else {
            return {
                chatID: 999,
                speaker: "janice",
                text: "Great! I've heard such great things about Dorcia. Come pick me up " +
                    "on Friday before " + nav.convertTime(20, 0) + ". I'll make it worth your time and money! It's a bit pricey " +
                    "so don't forget your wallet. Hehe",
                button: [
                    { chatID: 14, text: "Oh yeah. That place is like $100 for the two of us. ", callback: "" }
                ]
            }
        }
    }
    else if (chatID === 998) {
        if (gv.get("money") < 100) {
            return {
                chatID: 998,
                speaker: "me",
                text: "I have a confession. I don't quite have enough for Dorcia. ",
                button: [
                    { chatID: 16, text: "...", callback: "" }
                ]
            };
        }
        else {
            sc.completeMissionTask("janice", "date", 2, false);
            return {
                chatID: 998,
                speaker: "janice",
                text: "Hi you! I'm so excited for our date! Let me change really quick. Come " +
                    "with me " + sc.n("dog") + ". ",
                button: [
                    { chatID: 17, text: "Sure.", callback: "time" }
                ]
            };
        }
    }
    else if (chatID === 997) {
        return {
            chatID: 997,
            speaker: "me",
            text: "Oh. I only have $" + g.internal + ". It's all yours to help pay you bills. ",
            button: [
                { chatID: -1, text: "...", callback: "buildMenu" }
            ]
        };
    }
    else if (chatID === 800) {
        var neededClothing = cl.hasoutfit("public");
        return {
            chatID: 800,
            speaker: "thinking",
            text: "I can't leave. I'm missing my " + neededClothing,
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        };
    }
    else if (chatID === 700) {
        let foundhim = false;
        let dtxt = "";
        switch (g.internal.d) {
            case "mike":
                dtxt = "OOoooo he is sexy. Love those big manly arms and those eyes. " +
                    "I could stare at them all day. ";
                future.add("j-mike", 1);
                foundhim = true;
                break;
            case "albert":
                dtxt = "Gross! I don't want cheeze-poof crumbs on my bed! He looks " +
                        "like he smells like sweat socks and farts. ";
                break;
            case "chris":
                dtxt = "He's too small and girly. Not my type. ";
                break;
            case "jarome":
                dtxt = "Nice. I saw him play in the game last week. He is the sexiest " +
                    "man playing. Love that choice! ";
                future.add("j-jarome", 1);
                foundhim = true;
                break;
            case "bossman":
                dtxt = "Hmmmm. I don't know if I want to do anal. What if he has a big " +
                        "penis. He'll split me wide open. Sexy, but my butt is exit only. ";
                break;
            case "ian":
                dtxt = "Ewwwww. Yuck. Too old. ";
                break;
            case "cecilia":
                dtxt = "I want to date a man, not a girl. ";
                break;
            case "philbert":
                dtxt = "Eh. I don't like red heads. Pass. Besides, he kind of looks gay. ";
                break;
            case "orchid":
                dtxt = "Cute, but I'm looking for a man. ";
                break;
            case "ralph":
                dtxt = "Hahahaha! He's going to die a virgin! What a loser. No chance " +
                    "a guy like him ever gets a date! He would problably just talk about " +
                    "what ever boring ass game he's playing. ";
                break;
            case "brad":
                dtxt = "Ooooo sexy. I do love a man that plays sports! I don't remember " +
                    "seeing him at the ball game, but there's a lot of players. Great choice! ";
                future.add("j-brad", 1);
                foundhim = true;
                break;
            case "jabari":
                dtxt = "Oh wow! Great choice. I looks like the kind of man that knows " +
                    "how to put me in my place! ";
                future.add("j-jabari", 1);
                foundhim = true;
                break;
        }
        if (foundhim) {
            g.pass.datr = true;
            return {
                chatID: 700,
                speaker: "janice",
                text: dtxt + " I'll text him tonight and see if we can make a connection. " +
                    "so excited to see your face when we make love. ",
                button: [
                    { chatID: -1, text: "Sweet!", callback: "buildMenu" }
                ]
            };
        }
        else {
            return {
                chatID: 700,
                speaker: "janice",
                text: dtxt + " Look for a better guy!",
                button: [
                    { chatID: -1, text: "ok", callback: "datrScroll1" }
                ]
            };
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "janice",
                text: "I'm so glad you came by! I was just about to take " + sc.n("dog") + " for a " +
                    "walk. Join me. ",
                button: [
                    { chatID: 1, text: "Sure", callback: "walk" }
                ]
            },
            {
                chatID: 1,
                speaker: "janice",
                text: "So how's your day baby? ",
                button: [
                    { chatID: 2, text: "Better now that I'm with you. Youself? ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "janice",
                text: "Good. It's been hard since my parents died. I'm almost out of my inheritance " +
                    "money, but at least I still have the house. I would hate to live in an apartment " +
                    "my good boy here! I totally need the yard. ",
                button: [
                    { chatID: 4, text: "Oh yeah. Yards are great. ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "janice",
                text: "Good. It's been hard since my parents died. I'm almost out of my inheritance " +
                    "money, but at least I still have the house. I would hate to live in an apartment " +
                    "my good boy here! I totally need the yard. ",
                button: [
                    { chatID: 4, text: "Oh yeah. Yards are great. ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "janice",
                text: "Yes he does! He's my best friend in the whole wide world! My little snoogy woogy! " +
                    "He goes through so much peanut butter! You should see his tail wag when I pull out " +
                    "the jar. ",
                button: [
                    { chatID: 5, text: "He is a good boy. ", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "janice",
                text: "Speaking of which. Next time you come over can you bring a jar of peanut butter! Pretty " +
                    "please. You'll make me the happiest girlfiend ever! ",
                button: [
                    { chatID: 6, text: "Oh yeah. Of course. Anything for you babe. ", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "janice",
                text: "Let's head back. My back is getting sore. My little " + sc.n("dog") + " could walk for " +
                    "miles if I let him. ",
                button: [
                    { chatID: 7, text: "Sure ", callback: "talk" }
                ]
            },
            {
                chatID: 7,
                speaker: "janice",
                text: "So happy you stopped by. Don't forget the peanut butter next time you come by! " +
                    "And if you want you can help me with my bills! It would mean so much to me!",
                button: [
                    { chatID: 8, text: "Sure. Can I get a kiss before I go? ", callback: "kiss" }
                ]
            },
            {
                chatID: 8,
                speaker: "janice",
                text: "Awww. My big strong pooky wooky wants a kiss. Mwaa",
                button: [
                    { chatID: -1, text: "*Mwaa* Bye bye. ", callback: "completeTask1" }
                ]
            },
            {
                chatID: 9,
                speaker: "me",
                text: "So, uhhhh... Do you want to do something? ",
                button: [
                    { chatID: 13, text: "...", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "I don't have any money. ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" }
                ]
            },
            {
                chatID: 11,
                speaker: "janice",
                text: "Can't wait for our big date! I'm so excited! Love you babe! ",
                button: [
                    { chatID: -1, text: "Love you too!", callback: "buildMenu" },
                ]
            },
            {
                chatID: 12,
                speaker: "janice",
                text: "You're the best boyfriend ever! ",
                button: [
                    { chatID: -1, text: "*Mwaaa*", callback: "buildMenu" }
                ]
            },
            {
                chatID: 13,
                speaker: "janice",
                text: "You know we haven't had a proper date since you've asked me out. What do you " +
                    "say to a date? I'll make it worth it for you. ",
                button: [
                    { chatID: 999, text: "Oh. A date would be great. ", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "janice",
                text: "You're the sweetest boy ever. Give me a kiss!.  ",
                button: [
                    { chatID: 11, text: "[Kiss the girl]", callback: "kiss" }
                ]
            },
            {
                chatID: 15,
                speaker: "janice",
                text: "Hi you! I'm so excited for our date! Let me change really quick. Come " +
                    "with me " + sc.n("dog") + ". ",
                button: [
                    { chatID: 17, text: "Sure.", callback: "time" }
                ]
            },
            {
                chatID: 16,
                speaker: "janice",
                text: "That's ok! We can go another time. See you then! ",
                button: [
                    { chatID: -1, text: "...ok bye...", callback: "leave" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "Oh wow. She's taking forever. ",
                button: [
                    { chatID: 18, text: "... wait more", callback: "date2_1" }
                ]
            },
            {
                chatID: 18,
                speaker: "janice",
                text: "So. What do you think? Too much for Dorcia? ",
                button: [
                    { chatID: 19, text: "It's perfect. Like you", callback: "loveup" },
                    { chatID: 20, text: "Yeah. It's a bit much. You look like a slut. ", callback: "lovedown" },
                ]
            },
            {
                chatID: 19,
                speaker: "janice",
                text: "Awww. You're the sweetest ever! Let's go my big charming boyfriend! ",
                button: [
                    { chatID: 21, text: "Yeah. Let's go", callback: "date2_2" },
                ]
            },
            {
                chatID: 20,
                speaker: "janice",
                text: "Well I like it. Let's go. ",
                button: [
                    { chatID: 21, text: "Yeah. Let's go", callback: "date2_2" },
                ]
            },
            {
                chatID: 21,
                speaker: "janice",
                text: "I'm so excited! This place is soooo fancy! I've never been to a fancy " +
                    "restaruant before! I wonder What they have here. Do you think they have " +
                    "hamburgers? But like fancy hamburgers? ",
                button: [
                    { chatID: 22, text: "I don't know. I don't think they do.", callback: "date2_3" },
                ]
            },
            {
                chatID: 22,
                speaker: "!waiter",
                text: "Hello. It looks like I get to serve the sexiest girl here today. ",
                button: [
                    { chatID: 23, text: "Hey", callback: "date2_4" },
                ]
            },
            {
                chatID: 23,
                speaker: "janice",
                text: "Hehehe. Thank you. You're too sweet. ",
                button: [
                    { chatID: 24, text: "...", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "!waiter",
                text: "So what would you and your brother like tonight. ",
                button: [
                    { chatID: 25, text: "I'm her boyfriend! ", callback: "likedom" },
                    { chatID: 25, text: "Stay silent..", callback: "sub" },
                ]
            },
            {
                chatID: 25,
                speaker: "janice",
                text: "We would want some wine. Do you know which one we should get?  ",
                button: [
                    { chatID: 26, text: "Something reasonable. ", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "!waiter",
                text: "A beautiful girl like you deserves a glass of our most expensive wine. " +
                    "How about a glass of Château Margaux from France. And a soda for the gentleman? ",
                button: [
                    { chatID: 27, text: "Thanks. I want the wine too. ", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "!waiter",
                text: "Wonderful choice. Two glasses of Château Margaux. Your taste in wine is as " +
                    "refined as your taste in women. ",
                button: [
                    { chatID: 28, text: "...", callback: "date2_2" },
                ]
            },
            {
                chatID: 28,
                speaker: "janice",
                text: "Wow. He's such a great waiter. He seems so elegant and smart.  ",
                button: [
                    { chatID: 29, text: "He's hitting on you", callback: "date2_3a" },
                    { chatID: 30, text: "He really is elegant. ", callback: "date2_5" },
                ]
            },
            {
                chatID: 29,
                speaker: "janice",
                text: "Do you think so. I think he was just being nice. Don't be silly, he's just " +
                    "doing his job. Is my snuggly wuggly boyfriend jealous? ",
                button: [
                    { chatID: 30, text: "I'm not jealous. I just think he was hitting on you. ", callback: "date2_5" }
                ]
            },
            {
                chatID: 30,
                speaker: "!waiter",
                text: "Château Margaux, a wine almost as alluring as you. I would consider myself " +
                    "the luckiest man alive to taste the wine with you.  ",
                button: [
                    { chatID: 31, text: "Hey. ", callback: "date2_6" }
                ]
            },
            {
                chatID: 31,
                speaker: "janice",
                text: "Oh hehe. You're so nice. We were trying to figure out what to order. ",
                button: [
                    { chatID: 32, text: "So are you going to bring the menus or what? ", callback: "" }
                ]
            },
            {
                chatID: 32,
                speaker: "!waiter",
                text: "You really are a simple boy. There aren't menu's at Dorcia. I could go " +
                    "to the back and see if we have crayons and chicken tenders for you. ",
                button: [
                    { chatID: 33, text: "Wha! ", callback: "date2_7" }
                ]
            },
            {
                chatID: 33,
                speaker: "janice",
                text: "Haha. You're so funny! I guess we'll wait for our food. ",
                button: [
                    { chatID: 34, text: "*hrumph*", callback: "date2_8" }
                ]
            },
            {
                chatID: 34,
                speaker: "me",
                text: "That guy is totally hitting on you. ",
                button: [
                    { chatID: 35, text: "...", callback: "date2_9" }
                ]
            },
            {
                chatID: 35,
                speaker: "janice",
                text: "Stop it. I've been looking forward to this dinner my entire life. Don't " +
                    "ruin it by being mean. Now just sit back and enjoy our fancy meal. ",
                button: [
                    { chatID: 36, text: "...ok", callback: "date2_10" }
                ]
            },
            {
                chatID: 36,
                speaker: "!waiter",
                text: "Your first course, Brown Butter Honey-Glazed Carrots. ",
                button: [
                    { chatID: 37, text: "MMMmmm", callback: "date2_11" }
                ]
            },
            {
                chatID: 37,
                speaker: "janice",
                text: "I don't think I've ever had this much. I could totally go home and take " +
                    "the longest nap. ",
                button: [
                    { chatID: 38, text: "Nap. I thought we could go back and.. you know..", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "janice",
                text: "This again. You know I'm saving myself for marraige. I'll tell you what, if " +
                    "you're a good boy maybe I'll give you...",
                button: [
                    { chatID: 39, text: "...", callback: "date2_12" }
                ]
            },
            {
                chatID: 39,
                speaker: "!waiter",
                text: "You look like you're ready for desserts. We have a white chocolate mousse " +
                    "almost as yummy and sweet like me. You'll love it. There's nothing better to " +
                    "fill your belly with than my white chocolate mousse. ",
                button: [
                    { chatID: 40, text: "...really", callback: "date2_13" }
                ]
            },
            {
                chatID: 40,
                speaker: "janice",
                text: "I'm so full I don't know if I can force myself to eat this. But I'll try! ",
                button: [
                    { chatID: 41, text: "...", callback: "" }
                ]
            },
            {
                chatID: 41,
                speaker: "!waiter",
                text: "I'm glad I could leave you with a belly full. We do have a special club here " +
                    "at Dorcia for special women like you. I would love to sign you up. All I need is " +
                    "your phone number. ",
                button: [
                    { chatID: 42, text: "You mean my phone number?", callback: "date2_14" }
                ]
            },
            {
                chatID: 42,
                speaker: "janice",
                text: "Sure. Here's my phone number. I'm so excited to be in the Dorcia club! ",
                button: [
                    { chatID: 43, text: "...", callback: "" }
                ]
            },
            {
                chatID: 43,
                speaker: "!waiter",
                text: "I shall give you the VIP treatment for being such a stunning guest. I hope " +
                    "to see you again soon. And for you, here's the bill. ",
                button: [
                    { chatID: 44, text: "...", callback: "date2_15" }
                ]
            },
            {
                chatID: 44,
                speaker: "janice",
                text: "This was such a wonderful time. Thank you so much. I loved it all! Would you like " +
                    "to escort me to my place? ",
                button: [
                    { chatID: 45, text: "I would love to.", callback: "date2_16" }
                ]
            },
            {
                chatID: 45,
                speaker: "janice",
                text: "Now take off those pants mister. It's time for your reward. ",
                button: [
                    { chatID: -1, text: "Oh yeah! ", callback: "date2_17" }
                ]
            },
            {
                chatID: 46,
                speaker: "janice",
                text: "Oh my. It looks like you're all locked up. Too bad because I was going " +
                    "to give you the best orgasm of your life. Oh well...",
                button: [
                    { chatID: 48, text: "Oh damn! I forgot I'm wearing this!", callback: "" }
                ]
            },
            {
                chatID: 47,
                speaker: "janice",
                text: "Not used ",
                button: [
                    { chatID: 48, text: "Oh yeah. Probably for the best. ", callback: "" }
                ]
            },
            {
                chatID: 48,
                speaker: "janice",
                text: "Yes. For the best. I like you locked up like that. Good night. Come to bed " + sc.n("dog") + ". ",
                button: [
                    { chatID: -1, text: "g'night. ", callback: "leave" }
                ]
            },
            {
                chatID: 49,
                speaker: "janice",
                text: "Hehe. I'm such a good girlfriend. Don't expect that every time mister. " +
                    "That was just a thank you for taking me out to my new favorite restaurant. Now " +
                    "me and " + sc.n("dog") + " need to get some sleep. Nighty night my big strong " +
                    "handsome man. Love you! ",
                button: [
                    { chatID: -1, text: "Love you too", callback: "leave" }
                ]
            },
            {
                chatID: 50,
                speaker: "thinking",
                text: "Oh I don't have any money to give her. ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" }
                ]
            },
            {
                chatID: 51,
                speaker: "janice",
                text: "You're the best boyfriend ever! Love you. ",
                button: [
                    { chatID: -1, text: "Love you too. Good night.", callback: "leave" }
                ]
            },
            {
                chatID: 52,
                speaker: "janice",
                text: "What are you doing here? ",
                button: [
                    { chatID: 53, text: "I heard a scream. I thought you were in trouble. ", callback: "" }
                ]
            },
            {
                chatID: 53,
                speaker: "janice",
                text: "Oh my god. No. I just bent over to pick up some trash and " + sc.n("dog") + 
                    " here jumped on me and knocked me over! I'm so embarrassed. He surprised me.  ",
                button: [
                    { chatID: 54, text: "Oh...", callback: "task3_4" }
                ]
            },
            {
                chatID: 54,
                speaker: "janice",
                text: "Let me put this guy in his bed..  ",
                button: [
                    { chatID: -1, text: "...", callback: "peanutbutter" }
                ]
            },
            {
                chatID: 55,
                speaker: "janice",
                text: "Do you have a jar of peanut butter I can have? ",
                button: [
                    { chatID: 57, text: "Yes I do", callback: "givePeanutButter" },
                    { chatID: 58, text: "Sorry, I don't", callback: "kiss" },
                ]
            },
            {
                chatID: 56,
                speaker: "janice",
                text: "Do you have a jar of peanut butter I can have? ",
                button: [
                    { chatID: 58, text: "Sorry, I don't", callback: "kiss" },
                ]
            },
            {
                chatID: 57,
                speaker: "janice",
                text: "Thanks! I just go though so much of it. It's so.. uhh yummy. ",
                button: [
                    { chatID: 58, text: "...", callback: "kiss" },
                ]
            },
            {
                chatID: 58,
                speaker: "janice",
                text: "So I hate to cut this short, but I have to run. Give me a kiss before you go. ",
                button: [
                    { chatID: 59, text: "*mwa*", callback: "" },
                ]
            },
            {
                chatID: 59,
                speaker: "janice",
                text: "Love you. Can't wait to see you when I have time. ",
                button: [
                    { chatID: -1, text: "Love you too", callback: "task3end" },
                ]
            },
            {
                chatID: 60,
                speaker: "me",
                text: "Why is the waiter just leaving your house! Are you cheating on me with him?",
                button: [
                    { chatID: 61, text: "...", callback: "task4_2" },
                ]
            },
            {
                chatID: 61,
                speaker: "janice",
                text: "What? The waiter? No. I wasn't cheating.",
                button: [
                    { chatID: 62, text: "Then why was he leaving you house just now?", callback: "task4_3" },
                ]
            },
            {
                chatID: 62,
                speaker: "janice",
                text: "Now listen here you big meany. He was just coming by to give me my membership " +
                    "card for Dorcia! They are an exculsive place. I would never cheat. You know I'm " +
                    "saving myself for marriage. You just come into my house with wild accusations! ",
                button: [
                    { chatID: 63, text: "Why would they come to your house to give you a card? ", callback: "task4_4" },
                ]
            },
            {
                chatID: 63,
                speaker: "janice",
                text: "They are exclusive. I know why you're angry. We've been dating for a while and " +
                    "you haven't even touched my lady bits. Is that what you want? Do you want to touch " +
                    "my special area?", 
                button: [
                    { chatID: 64, text: "No. That's not it. ", callback: "task4_5" },
                ]
            },
            {
                chatID: 64,
                speaker: "janice",
                text: "It's ok. I know guys get horny. I'm super horny too. Look how wet you make " +
                    "me. because I'm such a great girlfriend I'll let you orally pleasure my " +
                    "special little area. Plus you owe me one. Do you want to lick my special area? ",
                button: [
                    { chatID: 66, text: "Yes I do. ", callback: "task4_6" },
                    { chatID: 65, text: "No! You're cheating on me and I deserve better! ", callback: "breakup" },
                ]
            },
            {
                chatID: 65,
                speaker: "janice",
                text: "Fine. I never liked you anyway! And I have been cheating on you, you loser!",
                button: [
                    { chatID: -1, text: "I knew it! You'll never see me again. ", callback: "leave" },
                ]
            },
            {
                chatID: 66,
                speaker: "janice",
                text: "H-h-how does it look?",
                button: [
                    { chatID: 67, text: "It looks amazing ", callback: "task4_7" },
                ]
            },
            {
                chatID: 67,
                speaker: "janice",
                text: "!",
                button: [
                    { chatID: 68, text: "?", callback: "task4_8" },
                ]
            },
            {
                chatID: 68,
                speaker: "me",
                text: "...is that cum? ",
                button: [
                    { chatID: 69, text: "...", callback: "" },
                ]
            },
            {
                chatID: 69,
                speaker: "janice",
                text: "No! I'm a virgin. I already told you that. Those are my fluids. You make me " +
                    "so wet and creamy. Stop making me feel bad about my special area. You're making me " +
                    "so self-conscious and embarrased right now. Maybe we shouldn't do this. ",
                button: [
                    { chatID: 70, text: "I'm so sorry. I didn't mean that. Your special area looks amazing. ", callback: "task4_9" },
                    { chatID: 65, text: "Stop lying! That is cum! I'm not eating the waiter's creampie! ", callback: "breakupAlt" },
                ]
            },
            {
                chatID: 70,
                speaker: "janice",
                text: "That's my good boy. Lick me up and don't forget about the my little clit. hehe",
                button: [
                    { chatID: 71, text: "...", callback: "task4_10" },
                ]
            },
            {
                chatID: 71,
                speaker: "janice",
                text: "Mmmmm yes. That feels good. How do I taste? ",
                button: [
                    { chatID: 72, text: "Mmmm gofff kmmmmm *lick* *smack* ", callback: "task4_11" },
                ]
            },
            {
                chatID: 72,
                speaker: "janice",
                text: "Hehehe. That was fun. Now I owe you one. Maybe we'll do something fun, but " +
                    "not too fun! My legs are all wobbly. Can't wait to see you again! Love you! ",
                button: [
                    { chatID: -1, text: "Love you too! ", callback: "leave" }
                ]
            },
            {
                chatID: 73,
                speaker: "janice",
                text: "Oh my god. I'm so glad you stopped by! I have to run and help my aunt Bess for a " +
                    "week and I can't take " + sc.n("dog") + ". I hate to do this to you, but I don't " +
                    "have anyone I can trust. Can you be the best boyfriend ever and watch " + sc.n("dog") +
                    "? I would mean the world to me and I would owe you big time! ",
                button: [
                    { chatID: 84, text: "How big time? ", callback: "" },
                ]
            },
            {
                chatID: 74,
                speaker: "janice",
                text: "Oh my. I guess you haven't met " + sc.n("dog") + " yet. He thinks he's the " +
                    "alpha and gets angry if there's some he perceives as a threat to me. Quick get " +
                    "down on all fours and put your head to the floor to show you're not a threat. ",
                button: [
                    { chatID: 76, text: "[Be the beta]", callback: "task0_2" },
                    { chatID: 115, text: "I'm not getting on my knees! I'm the Alpha!", callback: "task0_1a" },
                ]
            },
            {
                chatID: 75,
                speaker: "janice",
                text: "Well I can't date someone who doesn't respect " + sc.n("dog") + "! We're " +
                    "over! I never want to see such a mean-y again! ",
                button: [
                    { chatID: -1, text: "Fine! Bye.", callback: "breakupFirst" },
                ]
            },
            {
                chatID: 76,
                speaker: "janice",
                text: "Awww. Those are my good boys. I think he might like you. ",
                button: [
                    { chatID: 0, text: "Oh good. ", callback: "" },
                ]
            },
            {
                chatID: 77,
                speaker: "thinking",
                text: "I don't have peanut butter. ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" },
                ]
            }, 
            {
                chatID: 78,
                speaker: "janice",
                text: "This is my plumber. He just finished fixing my pipes. ",
                button: [
                    { chatID: 79, text: "...", callback: "task2_1" },
                ]
            },
            {
                chatID: 79,
                speaker: "!plumber",
                text: "Hehe. You have a fine woman, little man. Spoil her. ",
                button: [
                    { chatID: 80, text: "ok", callback: "talk" },
                ]
            },
            {
                chatID: 80,
                speaker: "janice",
                text: "That was just the plumber. My shower drain always gets clogged! Having " +
                    "all this hair can be so annoying sometimes! So what's up? ",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" },
                ]
            },
            {
                chatID: 81,
                speaker: "janice",
                text: "Oh my, that's forward. ",
                button: [
                    { chatID: 82, text: "So, do you want to touch it? ", callback: "flash" },
                ]
            },
            {
                chatID: 82,
                speaker: "janice",
                text: "I'm not going to lose virginity like this, but I guess I can show you my tits!  ",
                button: [
                    { chatID: -1, text: "Oh yeah! ", callback: "buildMenu" },
                ]
            },
            {
                chatID: 83,
                speaker: "janice",
                text: "Hehehe. Don't worry. I have many plans for that little clitty of yours in " +
                    "the future. Now please can you put that away. ",
                button: [
                    { chatID: -1, text: "Oh, sure. ", callback: "buildMenu" },
                ]
            },
            {
                chatID: 84,
                speaker: "janice",
                text: "Super big time! So big I might even play with your penis and give you a blow-y. " +
                    "Like a lot of blow-ys. All the blow-ys! We may even have sex, but it will have to " +
                    "be in the butt. Do you want to have butt sex with me? ",
                button: [
                    { chatID: 85, text: "Fuck yes! ", callback: "" },
                ]
            },
            {
                chatID: 85,
                speaker: "janice",
                text: "I knew you would! The dog food is next to his bowl, come by once a day to feed, water " +
                    "and play with him. I'll be back in a week. " +
                    "Please take care of my precious little " + sc.n("dog") + " for me. He's my world! " +
                    "This is really important, don't give him any peanut butter, just the dog food. He goes crazy " +
                    "for peanut butter and gets hard to control.  ",
                button: [
                    { chatID: 86, text: "Feed and water him every day.", callback: "" },
                ]
            },
            {
                chatID: 86,
                speaker: "janice",
                text: "Yes. Every day. Also I know guys do weird stuff. Please be respectful " +
                    "of my house and stay out of my room. It's private. I hate to drop this on " +
                    "you all of a sudden, but I really love that I have someone I can depend on. " +
                    "I know you'll be awesome. Here's my house key. I Love you so much baby. ",
                button: [
                    { chatID: -1, text: "Love you too. [Take her house key]", callback: "buildMenu" },
                ]
            },
            {
                chatID: 87,
                speaker: "thinking",
                text: "I don't have any peanut butter. ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 88,
                speaker: "me",
                text: "Nummy nummy peanut butter!  ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "Gross. I'm not doing that. [Need to raise your beast level] ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 90,
                speaker: "thinking",
                text: "His tongue is so coarse and thick rubbing between my butt cheeks. I feel " +
                    "so naughty and dirty letting him lick me like this. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 91,
                speaker: "thinking",
                text: "He's angry. I better improve my relastionship with him before I can pet him. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 92,
                speaker: "me",
                text: "Who's a good boy! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 93,
                speaker: "me",
                text: "Aaaak! What! Why are you knocking me over! I should be the dominate one here! " +
                    "I'm the human! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 94,
                speaker: "me",
                text: "OUCH! Hey, give me back my clothes! How embarrassing that I'm " + sc.n("dog") +
                    "'s submissive.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 95,
                speaker: "thinking",
                text: "Talking him for a walk is a great idea. ",
                button: [
                    { chatID: -1, text: "I'm the alpha. I should lead. ", callback: "walk_lead" },
                    { chatID: -1, text: "He's the alpha. I'll let him lead.", callback: "walk_follow" },
                    { chatID: -1, text: "I changed my mind. ", callback: "reset" },
                ]
            },
            {
                chatID: 96,
                speaker: "thinking",
                text: "I need to put on some appropriate clothes first. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 97,
                speaker: "me",
                text: "Aaaaaaa!!! Bad " + sc.n("dog") + "! No. No. Don't put that in there! Bad! ",
                button: [
                    { chatID: 98, text: "...", callback: "dsex2" },
                ]
            },
            {
                chatID: 98,
                speaker: "thinking",
                text: "OOOo fuck. I'm getting dominated by a dog! He's making me his literal bitch, " +
                    "and it really hurts! He's so rough! Fuck, he just shoved his doggy dick inside me " +
                    "and it's tearing me open! ",
                button: [
                    { chatID: 99, text: "...", callback: "dsex3" },
                ]
            },
            {
                chatID: 99,
                speaker: "thinking",
                text: "I am such a pathetic bitch, but it feel so good to get dominated by a dog! ",
                button: [
                    { chatID: 100, text: "...", callback: "dsex4" },
                ]
            },
            {
                chatID: 100,
                speaker: "thinking",
                text: "Oh gross. My ass is filled with doggy sperm. I can feel it run down my " +
                    "balls and leg. I'm so dirty. ",
                button: [
                    { chatID: -1, text: "...", callback: "dsex5" },
                ]
            },
            {
                chatID: 101,
                speaker: "me",
                text: "Oh man. That was the most embarrasing thing ever to happen to me. Do " +
                    "you think they posted that online. I would hate for anyone I know to see it. " +
                    "And " + sc.n("cecilia") + " seeing me and not helping. And you, " + sc.n("dog") +
                    "have to stop doing that in public! *sigh* I know you won't since I'm your bitch, " +
                    "and you do what ever you want to me. But really. Please stop raping me in public. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 102,
                speaker: "janice",
                text: "You didn't feed my poor little doggy every day! The poor thing! If you " +
                    "can't respect me enough to take care of my doggy, then you don't deserve " +
                    "these big round beautiful tits! Take a long look, because this is the last " +
                    "time you'll ever see them! We're over! Bye bye loser! Now get out before I sick " +
                    sc.n("dog") + " on you! ",
                button: [
                    { chatID: -1, text: "aw crap. Ok, bye", callback: "breakupDogsit" },
                ]
            },
            {
                chatID: 103,
                speaker: "janice",
                text: "Thank you so much for watching " + sc.n("dog") + ", he is going to be " +
                    "so happy to see you too! ",
                button: [
                    { chatID: -1, text: "Awww thanks!", callback: "checkDog" },
                ]
            },
            {
                chatID: 104,
                speaker: "janice",
                text: sc.n("dog") + "!!! What are you doing!?!",
                button: [
                    { chatID: 105, text: "aaaakk!!", callback: "checkDogPanties" },
                ]
            },
            {
                chatID: 105,
                speaker: "janice",
                text: "Bad doggy! Bad! Sorry about that. He is only this way around " +
                    "girls. I guess you're so effeminate he mistook you for a girl. Hahahah. " +
                    "oh well. Let me lock him outside or he'll... well.. I'll just lock him up " +
                    "while you get back dressed. ",
                button: [
                    { chatID: 106, text: "Thanks", callback: "checkDogPantiesUndo" },
                ]
            },
            {
                chatID: 106,
                speaker: "thinking",
                text: "Oh wow, that was close. I was afraid he was going to rape my ass right in " +
                    "front of her. I can't even imagine what she would do. Probably tell everyone " +
                    "I'm a dog's bitch. I'd have to move and never show my face in this town again.",
                button: [
                    { chatID: 107, text: "...", callback: "kiss" },
                ]
            },
            {
                chatID: 107,
                speaker: "janice",
                text: "Whew! I'm so pooped from my trip. I do owe you big. Come back " +
                    "tomorrow and I'll give you a proper thank you. Today I just want to " +
                    "cuddle with " + sc.n("dog") + " and take the longest nap ever! ",
                button: [
                    { chatID: 108, text: "Ok", callback: "flash" },
                ]
            },
            {
                chatID: 108,
                speaker: "janice",
                text: "Here's a sneak peek at your reward baby! I'll see you later. Love you!",
                button: [
                    { chatID: -1, text: "Love you too", callback: "completeBitch_2" },
                ]
            },

             {
                chatID: 109,
                speaker: "me",
                text: "*Squeel like a girl!*",
                button: [
                    { chatID: -1, text: "[Run!]", callback: "leave" },
                ]
            },
            {
                chatID: 110,
                speaker: "me",
                text: "*whipsering* aak. give me my clothes back",
                button: [
                    { chatID: -1, text: "...", callback: "picklock1" },
                ]
            },
            {
                chatID: 111,
                speaker: "thinking",
                text: "Akkk! I can't believe I'm face down ass up with a dog's penis " +
                    "burried deep in my ass again! He's not even gentle. Just rams it " +
                    "it in. Knot and all! ",
                button: [
                    { chatID: 112, text: "...", callback: "lockpick2" },
                ]
            },
            {
                chatID: 112,
                speaker: "thinking",
                text: "gross. I can feel the doggy sperm dripping out of my hole and " +
                    "down my leg. Is this what I am? Nothing more than a hole for " +
                    "the dog to cum in? I'm such a bitch. ",
                button: [
                    { chatID: 113, text: "...", callback: "lockpick3" },
                ]
            },
            {
                chatID: 113,
                speaker: "thinking",
                text: "Oh no! We must have waken " + sc.n("janice") + "! I must get out " +
                    "of here! ",
                button: [
                    { chatID: -1, text: "[Run away!]", callback: "leave" },
                ]
            },
            {
                chatID: 114,
                speaker: "me",
                text: "*whipsering* Really " + sc.n("dog") + "? You're going " +
                    "to bark at me after you've raped my ass? I guess I'm just " +
                    "a hole to fuck, and once you're done you don't want me around? ",
                button: [
                    { chatID: -1, text: "[Run away!]", callback: "leave" },
                ]
            },
            {
                chatID: 115,
                speaker: "janice",
                text: "If you respect " + sc.n("dog") + " and I you will get down on all fours " +
                    "and show him you're the beta. I can't date someone who is going to cause " +
                    "problems with my little doggy!",
                button: [
                    { chatID: 76, text: "[Be the beta]", callback: "task0_2" },
                    { chatID: 75, text: "Dating you isn't worth getting on my hands and knees! ", callback: "task0_1a" },
                ]
            },
            {
                chatID: 116,
                speaker: "janice",
                text: "Save it for the webcam show big guy!",
                button: [
                    { chatID: -1, text: "...ok", callback: "buildMenu" },
                ]
            },
            {
                chatID: 117,
                speaker: "janice",
                text: "I'm so happy we're camming together! I make more money doing this " +    
                    "than I made that week I worked at a grocery store! And this is way easier. ",
                button: [
                    { chatID: -1, text: "totally", callback: "buildMenu" },
                ]
            },
            {
                chatID: 118,
                speaker: "janice",
                text: "We should go on the chat together! I have a special little suprise for " +
                    "you!",
                button: [
                    { chatID: -1, text: "totally", callback: "buildMenu" },
                ]
            },
            {
                chatID: 119,
                speaker: "janice",
                text: "I've been thinking about my web cam live stream a lot lately " +
                    "and looked into some of the other whore chat girls that make some " +  
                    "bank and they gave me an idea... but I'm going to need your help! ",
                button: [
                    { chatID: 120, text: "ok", callback: "" },
                ]
            },
            {
                chatID: 120,
                speaker: "janice",
                text: "Sweet! Strip off those clothes and follow me to the bathroom. I've got to get you ready! ",
                button: [
                    { chatID: -1, text: "...bathroom?", callback: "mu_0" },
                ]
            },
            {
                chatID: 121,
                speaker: "janice",
                text: "First let's clean up that dirty face of yours. It's all wrong. ",
                button: [
                    { chatID: 122, text: "...", callback: "mu_1" },
                ]
            },
            {
                chatID: 122,
                speaker: "janice",
                text: "So looking at the other streamers on whorechat, femboys are all " +
                    "the rage right now. Now don't tell me you're not at least into it " +
                    "a little, I've seen the signs. I'm not an idiot. ",
                button: [
                    { chatID: 123, text: "...", callback: "mu_2" },
                ]
            },
            {
                chatID: 123,
                speaker: "janice",
                text: "So I'm going to need you to be my little femboy for my stream. " +
                    "There's so many solo girls that it's hard to stand out. I'm not some " +
                    "tiny waisted bimbo, so I'll need your help to make more money. ",
                button: [
                    { chatID: 124, text: "...", callback: "mu_3" },
                ]
            },
            {
                chatID: 124,
                speaker: "janice",
                text: "You know you really do have pretty eyes when done up right. " + 
                    "So when we do the stream today, you just do what I tell you. " +
                    "I watch a few of the other streamers, and I think I can do what " +
                    "they do. Some things are kind of icky, but I can so some of the " +
                    "other things.",
                button: [
                    { chatID: 125, text: "...", callback: "mu_4" },
                ]
            },
            {
                chatID: 125,
                speaker: "janice",
                text: "Since it's my stream, and you're my femboy, just follow my lead and " +
                    "do what I tell you to do. You know you do make a sexy girl. " +
                    (cl.c.hairLength > 1 ? " I do love the length of your hair. " : "You really should grow out your hair. ") +
                    "It's so pretty. Do you feel pretty? ",
                button: [
                    { chatID: 127, text: "I feel so pretty!", callback: "" },
                    { chatID: 126, text: "I feel ridiculous.", callback: "" },
                ]
            },
            {
                chatID: 126,
                speaker: "janice",
                text: "Oh hush! You look so pretty. You only feel ridiculous becuase " +
                    "you've been an ugly boy your entire life. Now quit whining. I hate " +
                    "it. ",
                button: [
                    { chatID: 127, text: "ok", callback: "" },
                ]
            },
            {
                chatID: 127,
                speaker: "janice",
                text: "Good! You are a pretty little femboy! Now let's go do our little " +
                    "show so I can make rent! ",
                button: [
                    { chatID: -1, text: "Let's go", callback: "mu_5" },
                ]
            },
            {
                chatID: 128,
                speaker: "janice",
                text: "You got the strap-on? Awesome! I'll get so many viewers! We " +
                    "should do a show! ",
                button: [
                    { chatID: -1, text: "Let's go", callback: "room321" },
                ]
            },
            {
                chatID: 129,
                speaker: "janice",
                text: "You need to get us a strap-on. I think the sex store might sell " +
                    "them. ",
                button: [
                    { chatID: -1, text: "Oh yeah. I'll go get it. ", callback: "buildMenu" },
                ]
            },
            {
                chatID: 130,
                speaker: "janice",
                text: "Oh my. You're wearing full on women's clothes! Are you one of those " +
                    "girl-boys? ",
                button: [
                    { chatID: 131, text: "I just thought I would try it", callback: "" },
                ]
            },
            {
                chatID: 131,
                speaker: "janice",
                text: "I wanted to date a man, it turns out I'm dating a girl. I'm not a " +
                    "dyke! I'm sorry I can't do this! We can't date each other. I need a real " +
                    "man! It's over! ",
                button: [
                    { chatID: -1, text: "Damn. Ok. ", callback: "breakupDogsit" },
                ]
            },
            {
                chatID: 132,
                speaker: "janice",
                text: "I have a confession to make. When we had sex with a strap-on it " +
                    "kind of grossed me out. I know I'm the one that talked you into it, but " +
                    "looking down on you with your legs spread made me realise I don't want to " +
                    "date a femboy, I want to date a man. A real man. ",
                button: [
                    { chatID: 133, text: "...", callback: "" },
                ]
            },
            {
                chatID: 133,
                speaker: "me",
                text: "oh. So you want me to be a real man? We don't have to do the femboy thing " +
                    "anymore. I could be a real man with you. ",
                button: [
                    { chatID: 134, text: "...", callback: "" },
                ]
            },
            {
                chatID: 134,
                speaker: "janice",
                text: "I've been thinking it all over. You are a great boyfriend. You're nice, " +
                    "you buy me things, and you're amazing to hang out with, but I don't want to have sex with you. I love " +
                    "you with all my heart but I'm no longer attracted to you. I want you in my " +
                    "life, but I don't want to have sex with you. Without sex, I don't see " +
                    "how this could work. ",
                button: [
                    { chatID: 135, text: "Love is more than just sex. In time I'm sure you'll find the real me attractive. ", callback: "" },
                ]
            },
            {
                chatID: 135,
                speaker: "janice",
                text: "Love is great, but I'm still young and I get so aroused sometimes. " +
                    "When I'm around you, I lose my arousal, and I don't like that. I deserve " +
                    "to be with someone I love with my heart as well as my body. This isn't " +
                    "going to work. You should go. ",
                button: [
                    { chatID: 136, text: "What if there was another way. I love you too and our time together. Is it just sex that is seperating us?? ", callback: "" },
                    { chatID: -1, text: "You're right. I deserve someone who loves me, for me [Breakup]", callback: "breakupCuck" },
                ]
            },
            {
                chatID: 136,
                speaker: "janice",
                text: "It is. I love everything about you, I'm just not attracted to you  " +
                    "anymore. I yearn to be with other men. To feel their manly arms hold " +
                    "me down and make me feel like a little girl. I never get that feeling " +
                    "from you. But I do love how you come over and our little dates, and " +
                    "haning out with you. I need more than you can provide. ",
                button: [
                    { chatID: 137, text: "...", callback: "" },
                ]
            },
            {
                chatID: 137,
                speaker: "me",
                text: "I can't be without you even if you have to have sex with other men. " +
                    "It's not the olden days anymore. Many couples are doing it. I " +
                    "love you, and you love me. If you have to have sex with other men " +
                    "to be satisfied, then that's something I'm willing to do for you, " +
                    "because of my love for you. If you want we can open up our relationship so you " +
                    "can get what you need, and we can still be together. ",
                button: [
                    { chatID: 138, text: "...", callback: "" },
                ]
            },
            {
                chatID: 138,
                speaker: "janice",
                text: "*big exhale* Maybe. I like it the idea of it. You are such a great " +
                    "boyfriend and, I admit, there are so many men I would love to have sex " +
                    "with. You have no idea how often I get hit on. I never thought of " +
                    "doing something like this. Maybe. Let me think about it... ",
                button: [
                    { chatID: -1, text: "I'll take maybe. I'll give you time to think about it. I love you and I'll see you later. ", callback: "cuck_1_complete" },
                ]
            },
            {
                chatID: 139,
                speaker: "janice",
                text: "Thank you for watching tv with me. I get so scared watching my " +
                    "shows about women getting raped and killed. They're so scary!",
                button: [
                    { chatID: -1, text: "...", callback: "buildMenu" },
                ]
            },
            {
                chatID: 140,
                speaker: "janice",
                text: "You were so right! I love having you as my boyfriend! I've " +
                    "never been this excited in my entire life! ",
                button: [
                    { chatID: 141, text: "Really! I was afraid you would hate me? ", callback: "bitch_0_2" },
                ]
            },
            {
                chatID: 141,
                speaker: "janice",
                text: "No way! Strip off your clothes! Follow me to the bedroom! I have " +
                    "a surprise I think you'll love! Come! ",
                button: [
                    { chatID: -1, text: "Hell yeah!", callback: "bedroom" },
                ]
            },
            {
                chatID: 142,
                speaker: "janice",
                text: "You already picked a man for me silly! You'll just have to wait till " +
                    "tomorrow.",
                button: [
                    { chatID: -1, text: "oh yeah. Sweet!", callback: "buildMenu" },
                ]
            },
            {
                chatID: 143,
                speaker: "janice",
                text: "I'm so excited! I've never had someone pick out a guy for me before! " +
                    "This must be extra exciting for you to pick out the man that is going " +
                    "to fuck your girlfriend! Pick a manly one, not someone like you. I love " +
                    "a hairy man with big muscles! OOoo so excited! ",
                button: [
                    { chatID: -1, text: "[Pick the man that's going to fuck your girlfriend]", callback: "datrScroll" },
                ]
            },
            {
                chatID: 144,
                speaker: "janice",
                text: "*Squeel* Yes! Let's pick out a man! ",
                button: [
                    { chatID: -1, text: "[Pick the man that's going to fuck your girlfriend]", callback: "datrScroll" },
                ]
            },
            {
                chatID: 145,
                speaker: "janice",
                text: "Great news! My Datr replied. I'm going to go to my room and tell him " +
                    "to come over. You can change in the bathroom and join me! ",
                button: [
                    { chatID: -1, text: "Sweet! ", callback: "bathroom" },
                ]
            },
             {
                chatID: 146,
                speaker: "janice",
                text: "Why are you naked? And where is " + sc.n("dog") + "? ",
                button: [
                    { chatID: 147, text: "Oh! Uhh... I was attacked in the park. They took my clothes and I lost " + sc.n("dog") + " during that attack! ", callback: "" },
                ]
            },
            {
                chatID: 147,
                speaker: "janice",
                text: "Oh no! I'm going to look for " + sc.n("dog") +
                    ". I'm so sorry. People are so terrible! You can change back in my " +
                    "bathroom. ",
                button: [
                    { chatID: -1, text: "Ok! Thanks! ", callback: "bathroom" },
                ]
            },
            {
                chatID: 148,
                speaker: "janice",
                text: "Is this what you've been doing on your walks? When I found " +
                    sc.n("dog") + " someone told me about your little endeavors. I " +
                    "didn't believe them, but I had to see for myself, and here you are " +
                    "having inappropriate relations in the middle of the park for everyone " +
                    "to see! Every time I think it can't get any worse, you go and make it worse! " +
                    "It looks like I'm going to have to keep you on a leash too to control your " +
                    "terrible behavior! ",
                button: [
                    { chatID: 149, text: "...but he attacked me...", callback: "" },
                ]
            },
            {
                chatID: 149,
                speaker: "janice",
                text: "Don't you try to blame my sweet little " + sc.n("dog") + " for your " +
                    "nastiness! This is all your doing. You're a very very bad " + gender.pronoun("boy") +
                    " and must be punished for being bad! Come with me! ",
                button: [
                    { chatID: 150, text: "[Follow her back to her house]", callback: "bitch_0_0" },
                ]
            },
            {
                chatID: 150,
                speaker: "janice",
                text: "What you chose to do was just absolutly disgusting! Maybe you want " +
                    "to date " + sc.n("dog") + "? Is that it? That's it isn't it. ",
                button: [
                    { chatID: 151, text: "...", callback: "" },
                ]
            },
            {
                chatID: 151,
                speaker: "janice",
                text: "Don't answer. I can see that's what you want. Fine. You're no longer " +
                    "my fem-boyfriend. You're now my bad little doggy. Let's go to my " +
                    "bedroom. I'm going to get my doggy crate and start your crate training. ",
                button: [
                    { chatID: 152, text: "[Follow her]", callback: "dog0" },
                    { chatID: 65, text: "Nope! You crazy bitch! [Run away]", callback: "breakup" },
                ]
            },
            {
                chatID: 152,
                speaker: "janice",
                text: "This crate is your home now until you prove that you're house broken " +
                    "and don't pee on my rugs. Now doggies don't have clothes, strip it off and " +
                    "get in the crate my bad little doggy! ",
                button: [
                    { chatID: 153, text: "[Strip and get in the crate]", callback: "dog1" },
                ]
            },
            {
                chatID: 153,
                speaker: "janice",
                text: "That's my good doggy! Now I'm going to lock this so you don't get in " +
                    "trouble. I've got to do some shopping for my new doggy! ",
                button: [
                    { chatID: 156, text: "*whine*", callback: "dog3" },
                ]
            },
            {
                chatID: 154,
                speaker: "janice",
                text: "You are such my bitch! ",
                button: [
                    { chatID: -1, text: "I really am. ", callback: "reset" },
                ]
            },
            {
                chatID: 155,
                speaker: "thinking",
                text: "Crap! There's no way I'm breaking out of this. I'm totally trapped! I really " +
                    "screwed up again. I can't I got caught like that. How embarrasing! ",
                button: [
                    { chatID: 156, text: "...", callback: "dog3" },
                ]
            },
            {
                chatID: 156,
                speaker: "me",
                text: "Oh hey buddy! Can you help me out and get the keys? Or maybe a candy bar. She's " +
                    "been gone for quite a while and I'm so hungry. Please buddy! ",
                button: [
                    { chatID: 157, text: "...", callback: "dog4" },
                ]
            },
            {
                chatID: 157,
                speaker: "me",
                text: "Bad doggy! Bad! Don't pee on me! Oooofff it's so pungent. I get no respect, not  " +
                    "even from " + sc.n("dog") + ".",
                button: [
                    { chatID: 158, text: "...", callback: "dog2" },
                ]
            },
            {
                chatID: 158,
                speaker: "me",
                text: "Great now I just have to lay here next to dog piss and hope that " + sc.n("janice") +
                    " comes back soon! She's been gone so long!",
                button: [
                    { chatID: 159, text: "[Wait even longer]", callback: "dog1" },
                ]
            },
            {
                chatID: 159,
                speaker: "janice",
                text: "What the fuck! You pissed outside your dog cage while I was gone! You are " +
                    "a really bad doggy!!!! I'm just can't! I'm so mad right now! ",
                button: [
                    { chatID: 160, text: "It wasn't me it was " + sc.n("dog") + "! ", callback: "dog5" },
                ]
            },
            {
                chatID: 160,
                speaker: "janice",
                text: sc.n("dog") + " is house broken and NEVER pees inside!!! How dare you blame " +
                    "him! First you don't tell me you're a crossdresser, then I catch you getting " +
                    "fucked by my dog in the park, and now, the cherry on top, you piss on my floor " +
                    "and try to blame " + sc.n("dog") + "! You are a really bad boy! I'm going to really  " +
                    "punish you, but first put this on! This is who you are now! ",
                button: [
                    { chatID: 161, text: "[Grab the outfit and put it on]", callback: "dog6" },
                ]
            },
            {
                chatID: 161,
                speaker: "janice",
                text: "There we go. It's called a bitch suit, since, well, you're such my bitch. Oh whoops, " +
                    "almost forgot your tail.",
                button: [
                    { chatID: 162, text: "*mumble into you ball gag*", callback: "dog7" },
                ]
            },
            {
                chatID: 162,
                speaker: "janice",
                text: "There we go! A proper doggy. Now I'm bored. We're going to go in the back yard and " +
                    "You'll fetch my ball! Come doggy! ",
                button: [
                    { chatID: 163, text: "[follow her]", callback: "dog8" },
                ]
            },
            {
                chatID: 163,
                speaker: "janice",
                text: "Go fetch doggy! ",
                button: [
                    { chatID: 164, text: "*muffled arf*", callback: "dog9" },
                ]
            },
            {
                chatID: 164,
                speaker: "janice",
                text: "Awww poor doggy. Does that mouth gag get in the way. It stays in. Doggies " +
                    "don't talk. Let's go inside. ",
                button: [
                    { chatID: -1, text: "[Follow her]", callback: "room322" },
                ]
            },



















































            //{
            //    chatID: 107,
            //    speaker: "janice",
            //    text: "So. I seem to be missing a pair of panties and a bra that were there " +
            //        "before I left. You stole them didn't you! You stole them so you could " +
            //        "wear them! I saw a show about men like you! ",
            //    button: [
            //        { chatID: 114, text: "I uh.. what. No", callback: "task4_3" },
            //    ]
            //},
            //{
            //    chatID: 108,
            //    speaker: "janice",
            //    text: "So I can see a pair of panties peeking over your pants! You're one " +
            //        "of those men who wears women's underwear aren't you! I've saw a show " +
            //        "about men like you! ",
            //    button: [
            //        { chatID: 114, text: "I uh.. what. No", callback: "task4_3" },
            //    ]
            //},
            //{
            //    chatID: 109,
            //    speaker: "janice",
            //    text: "I love you and all that you do for me. It's time we lose our virginity " +
            //        "together. We get to be each other's first. Let me see that penis! ",
            //    button: [
            //        { chatID: 110, text: "[Take your dick out]", callback: "task4_3" },
            //    ]
            //},
            //{
            //    chatID: 110,
            //    speaker: "janice",
            //    text: "Is that a chastity cage? Why would you wear that? Is it because " +
            //        "you don't want to have a penis anymore? I saw a show about men like you! ",
            //    button: [
            //        { chatID: 114, text: "I uh...", callback: "task4_3" },
            //    ]
            //},
            //{
            //    chatID: 111,
            //    speaker: "janice",
            //    text: "I think it's time we talked about your body. Specifically the " +
            //        "fact you have tits. I've watched shows about men like you! ",
            //    button: [
            //        { chatID: 114, text: "I uh...", callback: "task4_3" },
            //    ]
            //},
            //{
            //    chatID: 112,
            //    speaker: "janice",
            //    text: "We need to talk about the fact you like to wear women's clothes. " +
            //        "It's so weird and offputting. I've watched shows about men like you! ",
            //    button: [
            //        { chatID: 114, text: "I uh...", callback: "task4_3" },
            //    ]
            //},
            //{
            //    chatID: 113,
            //    speaker: "janice",
            //    text: "So I need to talk to you about some of the weird behavior and " +
            //        "choices you made earlier. I didn't want to say anything at the time, " +
            //        "but as we grow closer, I feel icked out by them. I've watched shows " +
            //        "about men like you!",
            //    button: [
            //        { chatID: 114, text: "I uh...", callback: "task4_3" },

            //    ]
            //},
            //{
            //    chatID: 114,
            //    speaker: "janice",
            //    text: "I wanted to date a man, but it turns out I'm dating a girl. I " +
            //        "desire hard, hairy, muscular men, not a girl like you. But there " +
            //        "is someplace deep down in my heart that still has feelings for you. " +
            //        "I do love how you look out for me, and are always there to talk to. ",
            //    button: [
            //        { chatID: 115, text: "And I love you", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 115,
            //    speaker: "janice",
            //    text: "I don't know if I can be in a relationship with you. I have to " +
            //        "think about it. Please give me a day to decide if we should be together. ",
            //    button: [
            //        { chatID: 116, text: "...", callback: "" },

            //    ]
            //},
            //{
            //    chatID: 116,
            //    speaker: "me",
            //    text: "That hurts, but I understand. I will always love you, and I hope you find it " +
            //        "someplace in your heart to love me for who I am, and not who you want me to be. " +
            //        "No one is everything their partner wants, but maybe love is enough. I'll give you " +
            //        "a day to think. I hope you can love me like I love you. ",
            //    button: [
            //        { chatID: -1, text: "[Leave]", callback: "cuck_0_complete" },

            //    ]
            //},
            //{
            //    chatID: 117,
            //    speaker: "janice",
            //    text: "If you respect " + sc.n("dog") + " and I you will get down on all fours " +
            //        "and show him you're the beta. I can't date someone who is going to cause " +
            //        "problems with my little doggy!",
            //    button: [
            //        { chatID: 76, text: "[Be the beta]", callback: "task0_2" },
            //        { chatID: 75, text: "Dating you isn't worth getting on my hands and knees! ", callback: "task0_1a" },
            //    ]
            //},
            //{
            //    chatID: 118,
            //    speaker: "me",
            //    text: "*Squeel like a girl!*",
            //    button: [
            //        { chatID: -1, text: "[Run!]", callback: "leave" },
            //    ]
            //},
            //{
            //    chatID: 119,
            //    speaker: "me",
            //    text: "*whipsering* aak. give me my clothes back",
            //    button: [
            //        { chatID: -1, text: "...", callback: "picklock1" },
            //    ]
            //},
            //{
            //    chatID: 120,
            //    speaker: "thinking",
            //    text: "Akkk! I can't believe I'm face down ass up with a dog's penis " +
            //        "burried deep in my ass again! He's not even gentle. Just rams it " +
            //        "it in. Knot and all! ",
            //    button: [
            //        { chatID: 121, text: "...", callback: "lockpick2" },
            //    ]
            //},
            //{
            //    chatID: 121,
            //    speaker: "thinking",
            //    text: "gross. I can feel the doggy sperm dripping out of my hole and " +
            //        "down my leg. Is this what I am? Nothing more than a hole for " +
            //        "the dog to cum in? I'm such a bitch. ",
            //    button: [
            //        { chatID: 122, text: "...", callback: "lockpick3" },
            //    ]
            //},
            //{
            //    chatID: 122,
            //    speaker: "thinking",
            //    text: "Oh no! We must have waken " + sc.n("janice") + "! I must get out " +
            //        "of here! ",
            //    button: [
            //        { chatID: -1, text: "[Run away!]", callback: "leave" },
            //    ]
            //},
            //{
            //    chatID: 123,
            //    speaker: "me",
            //    text: "*whipsering* Really " + sc.n("dog") + "? You're going " +
            //        "to bark at me after you've raped my ass? I guess I'm just " +
            //        "a hole to fuck, and once you're done you don't want me around? ",
            //    button: [
            //        { chatID: -1, text: "[Run away!]", callback: "leave" },
            //    ]
            //},
            //{
            //    chatID: 124,
            //    speaker: "janice",
            //    text: "Bad doggy! Bad! Sorry about that. He is only this way around... " +
            //        "wait. Are you wearing panties? You are! Hahaha. let me lock him up really " +
            //        "quick. ",
            //    button: [
            //        { chatID: 106, text: "Thanks", callback: "bg" },
            //    ]
            //},
            //{
            //    chatID: 125,
            //    speaker: "me",
            //    text: "So.... ",
            //    button: [
            //        { chatID: 126, text: "...", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 126,
            //    speaker: "janice",
            //    text: "So. I've been thinking it all over. You are a great boyfriend. You're nice, " +
            //        "you buy me things, and you're amazing to hang out with, but I don't want to have sex with you. I love " +
            //        "you with my heart but I'm no longer attracted to you. I want you in my " +
            //        "life, but I don't want to have sex with you. Without sex, I don't see " +
            //        "how this could work. ",
            //    button: [
            //        { chatID: 127, text: "Love is more than just sex. In time I'm sure you'll find the real me attractive. ", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 127,
            //    speaker: "janice",
            //    text: "Love is great, but I'm still young and I get so aroused sometimes. " +
            //        "When I'm around you, I lose my arousal, and I don't like that. I deserve " +
            //        "to be with someone I love with my heart as well as my body. This isn't " +
            //        "going to work. You should go. ",
            //    button: [
            //        { chatID: 128, text: "What if there was another way. I love you too and our time together. Is it just sex that is seperating us?? ", callback: "" },
            //        { chatID: -1, text: "You're right. I deserve someone who loves me, for me [Breakup]", callback: "breakupCuck" },
            //    ]
            //},
            //{
            //    chatID: 128,
            //    speaker: "janice",
            //    text: "It is. I love everything about you, I'm just not attracted to you  " +
            //        "anymore. I yearn to be with other men. To feel their manly arms hold " +
            //        "me down and make me feel like a little girl. I never get that feeling " +
            //        "from you. But I do love how you come over and our little dates, and " +
            //        "haning out with you. I need more than you can provide. ",
            //    button: [
            //        { chatID: 129, text: "I can't be without you even if you have to have sex with other men. ", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 129,
            //    speaker: "me",
            //    text: "It's not the olden days anymore. Many couples are doing it. I " +
            //        "love you, and you love me. If you have to have sex with other men " +
            //        "to be satisfied, then that's something I'm willing to do for you, " +
            //        "because of my love for you. We can open up our relationship so you " +
            //        "can get what you need, and we can still be together. ",
            //    button: [
            //        { chatID: 130, text: "...", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 130,
            //    speaker: "janice",
            //    text: "*big exhale* Myabe. I like it the idea of it. You are such a great " +
            //        "boy friend and, I admit, there are so many men I would love to have sex " +
            //        "with. You have no idea how often I get hit on. I never thought of " +
            //        "doing something like this. Maybe. Let me think about it... ",
            //    button: [
            //        { chatID: -1, text: "I'll take maybe. I'll give you time to think about it. I love you and I'll see you later. ", callback: "cuck_1_complete" },
            //    ]
            //},
            //{
            //    chatID: 131,
            //    speaker: "janice",
            //    text: "You were so right! I love having you as my boyfriend! I've " +
            //        "never been this excited in my entire life! ",
            //    button: [
            //        { chatID: 132, text: "Really! I was afraid you would hate me? ", callback: "bitch_0_2" },
            //    ]
            //},
            //{
            //    chatID: 132,
            //    speaker: "janice",
            //    text: "No way! Strip off your clothes! Follow me to the bedroom! I have " +
            //        "a surprise I think you'll love! Come! ",
            //    button: [
            //        { chatID: -1, text: "Hell yeah!", callback: "bedroom" },
            //    ]
            //},
            //{
            //    chatID: 133,
            //    speaker: "random",
            //    text: "In development - probably next release my little cuck ",
            //    button: [
            //        { chatID: -1, text: "...", callback: "leave" },
            //    ]
            //},
            //{
            //    chatID: 134,
            //    speaker: "janice",
            //    text: "Oh. It's your dick. ",
            //    button: [
            //        { chatID: 135, text: "Do you want to have sex? ", callback: "bitch_0_2" },
            //    ]
            //},
            //{
            //    chatID: 135,
            //    speaker: "janice",
            //    text: "Sure. I do love sex. Oh one sec, my phone is beeping. ",
            //    button: [
            //        { chatID: 136, text: "ok.", callback: "bitch_0_3" },
            //    ]
            //},
            //{
            //    chatID: 136,
            //    speaker: "janice",
            //    text: "Oh it's the bank asking for money again! I need $100. Could " +
            //        "you give me the money, my favorite boyfriend? Pleeeease?",
            //    button: [
            //        { chatID: 139, text: "Sure. It's only $100", callback: "bitchMoney" },
            //        { chatID: 138, text: "That's a lot of money. I don't think I should. ", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 137,
            //    speaker: "janice",
            //    text: "Oh it's the bank asking for money again! I need $100. Could " +
            //        "you give me the money, my favorite boyfriend? Pleeeease?",
            //    button: [
            //        { chatID: 138, text: "I don't have that much money. ", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 138,
            //    speaker: "janice",
            //    text: "Awwww. I'm going to have call this date short to get some money " +
            //        "to pay the bank. I'll catch you later. ",
            //    button: [
            //        { chatID: -1, text: "Oh. ok, bye.", callback: "leave" },
            //    ]
            //},
            //{
            //    chatID: 139,
            //    speaker: "janice",
            //    text: "You're the best boyfriend ever! Now laydown on that floor. I'm " +
            //        "going to give you the best sex of your life! ",
            //    button: [
            //        { chatID: -1, text: "Oh yeah!", callback: "bitch_1_0" },
            //    ]
            //},
            //{
            //    chatID: 140,
            //    speaker: "janice",
            //    text: "Oh yeah! Love how I ride your penis! Now cum for my baby. Fill " +
            //        "my juicy pussy with your cum! ",
            //    button: [
            //        { chatID: 141, text: "FFFFFFFFFuckkkk", callback: "bitch_1_1" },
            //    ]
            //},
            //{
            //    chatID: 141,
            //    speaker: "janice",
            //    text: "Drippy pussy. I've got to give " + sc.n("dog") + " a walk. I'll " +
            //        "see you later baby. ",
            //    button: [
            //        { chatID: -1, text: "Ok. Love you. ", callback: "bitch_1_end" }, 
            //    ]
            //},
            //{
            //    chatID: 142,
            //    speaker: "janice",
            //    text: "Ugh! I hate the bank! Always complaining about not having " +
            //        "enough money! They're the worst! ",
            //    button: [
            //        { chatID: -1, text: "Totally", callback: "buildMenu" },
            //    ]
            //},
            //{
            //    chatID: 143,
            //    speaker: "janice",
            //    text: "Why are you naked? And where is " + sc.n("dog") + "? ",
            //    button: [
            //        { chatID: 144, text: "Oh! Uhh... I was attacked in the park. They took my clothes and I lost " + sc.n("dog") + " during that attack! ", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 144,
            //    speaker: "janice",
            //    text: "Oh no! I'm going to look for " + sc.n("dog") +
            //        ". I'm so sorry. People are so terrible! You can change back in my " +
            //        "bathroom. ",
            //    button: [
            //        { chatID: -1, text: "Ok! Thanks! ", callback: "bathroom" },
            //    ]
            //},
            //{
            //    chatID: 145,
            //    speaker: "janice",
            //    text: "Is this what you've been doing on your walks? When I found " +
            //        sc.n("dog") + " someone told me about your little endeavors. I " +
            //        "didn't believe them, but I had to see for myself, and here you are " +
            //        "having inappropriate relations in the middle of the park for everyone " +
            //        "to see! Every time I think it can't get any worse, you go and make it worse! " +
            //        "It looks like I'm going to have to keep you on a leash too to control your " +
            //        "terrible behavior! ",
            //    button: [
            //        { chatID: 146, text: "...but he attacked me...", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 146,
            //    speaker: "janice",
            //    text: "Don't you try to blame my sweet little " + sc.n("dog") + " for your " +
            //        "nastiness! This is all your doing. I'm going to have to think about if " +
            //        "I ever let you back into my house! You think about how big you owe me for " +
            //        "putting up with you! ",
            //    button: [
            //        { chatID: -1, text: "...ok", callback: "leave" },
            //    ]
            //},
            //{
            //    chatID: 147,
            //    speaker: "janice",
            //    text: "Showing you my sex video was such a rush! I've masturbated twice " +
            //        "last month just thinking about it! I want to do it again! ",
            //    button: [
            //        { chatID: 149, text: "That's hot! Let's do it.", callback: "" },
            //        { chatID: 148, text: "I don't like how this makes me feel. [Break up]", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 148,
            //    speaker: "janice",
            //    text: "*sigh* I don't see you as a man anymore. I don't want to date " +
            //        "a little girl, I need a real man to take care of me. If you're not " +
            //        "open to being my play partner while I search for a real man, I don't " +
            //        "want a relationship with you. I'm sorry, but we're over. ",
            //    button: [
            //        { chatID: -1, text: "That's for the best. Good bye", callback: "breakupFirst" },
            //    ]
            //},
            //{
            //    chatID: 149,
            //    speaker: "janice",
            //    text: "That's such a relief. I've felt really guilty lying to you the " +
            //        "entire time we've been dating. Every time I cheated on you, it felt " +
            //        "hollow and empty, but the last time it was such a rush knowing I could " +
            //        "share this with you. Maybe this is what I've always needed! My own little " +
            //        "friend to share my dirty deeds with. ",
            //    button: [
            //        { chatID: 150, text: "...", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 150,
            //    speaker: "janice",
            //    text: "So a friend of mine told me about this thing on your phone to meet boys. " +
            //        "I got it, and there's so many boys! Some of them are so mean. I don't like " +
            //        "those, but some are really nice and so sexy. I don't know why they're still " +
            //        "single. But oh my. I had no idea there were so many men out there. You're lucky " +
            //        "we met before I found this, or I would totally be dating them instead! Hehehe, " +
            //        "just kidding.... maybe not. Doesn't matter. I need your help picking someone. ",
            //    button: [
            //        { chatID: -1, text: "Awesome! I'm in! ", callback: "cuck_3_complete" },
            //    ]
            //},
            //{
            //    chatID: 151,
            //    speaker: "janice",
            //    text: "*Squeel* Yes! Let's pick out a man! ",
            //    button: [
            //        { chatID: -1, text: "[Pick out a man for her]", callback: "datrScroll" },
            //    ]
            //},
            //{
            //    chatID: 152,
            //    speaker: "janice",
            //    text: "Great news! He replied. I'm going to go to my room and tell him " +
            //        "to come over. You can change in the bathroom and join me! ",
            //    button: [
            //        { chatID: -1, text: "Sweet! ", callback: "bathroom" },
            //    ]
            //},
            //{
            //    chatID: 153,
            //    speaker: "janice",
            //    text: "So, just becuase I told you we wern't going to have sex anymore " +
            //        "you decided to have sex with " + sc.n("dog") + "? In a public park " +
            //        "no less! You're not a boyfriend, you're a bitch. Not a bitch like a " +
            //        "mean girl, but a bitch like a girl doggy. Is that what you are? " +
            //        "Are you a bitch? ",
            //    button: [
            //        { chatID: 155, text: "Yes. I guess I'm a bitch. ", callback: "" },
            //        { chatID: 154, text: "I'm not a bitch! " + sc.n("me") + " attacked me! [Ends 'Bad dog!' path]", callback: "bathroom" },
            //    ]
            //},
            //{
            //    chatID: 154,
            //    speaker: "janice",
            //    text: "Oh I'm so sorry! I should have warned you more. He can be a little " +
            //        "rough sometimes, you poor " + gender.pronoun("boy") + ". I should be " +
            //        "the only one taking him for walks so he doesn't misbehave like that. ",
            //    button: [
            //        { chatID: -1, text: "Thanks", callback: "failJaniceDog" },
            //    ]
            //},
            //{
            //    chatID: 154,
            //    speaker: "janice",
            //    text: "That's what I thought. Really disgusting. Do you know how embarrased I was " +
            //        "walking in on that at the park and having get my poor little " + sc.n("dog") +
            //        " in front of everyone! ",
            //    button: [
            //        { chatID: 156, text: "...well I uh...", callback: "" },
            //    ]
            //},
            //{
            //    chatID: 156,
            //    speaker: "janice",
            //    text: "This isn't the first time you've screwed up and made me angry. " +
            //        "Yet you always come back with your tail between your legs begging " +
            //        "for forgiveness. Since you can't seem to control your little urges " +
            //        "I'm going to control them for you! Now strip down. Bitches don't " +
            //        "wear human clothes. From now on you'll wear the bitch suit I got " +
            //        "yesterday for you! ",
            //    button: [
            //        { chatID: 157, text: "Bitch suit?", callback: "" },
            //    ]
            //},




        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};