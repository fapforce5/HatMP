//Room name
var room200 = {};
room200.main = function () {
    if (g.dt.getDay() === 1) {
        $.each(missy.jobs, function (i, v) {
            missy.st[v.thisWeek].c = 0;
        });
    }
    nav.button({
        "type": "btn",
        "name": "missy",
        "left": 667,
        "top": 469,
        "width": 622,
        "height": 520,
        "image": "200_frontOffice/200_missy.png"
    }, 200);
        
    g.internal = { caseList: missy.getcases(), activeCase: null };
};

room200.btnclick = function (name) {
    switch (name) {
        case "missy":
            var activeCase = missy.get("activeCase");
            var activeCaseComplete = missy.get("activeCaseComplete");
            var missyUniform = missy.get("uniform");
            
            if (missy.get("totalDaysWorked") < 1)
                chat(0, 200);
            else if (missy.get("totalDaysWorked") === 5 && missy.get("missyEventTracker") === 0) {
                missy.set("missyEventTracker", 1);
                chat(9, 200);
            }
            else if (missy.get("uniformNew") === 2) {
                missy.set("uniformNew", 3);
                chat(51, 200);
            }
            else if (activeCase > 3 && activeCaseComplete !== 0) {
                switch (activeCase) {
                    case 4:
                        chat(32, 200);
                        break;
                    case 5:
                        if (activeCaseComplete === 1)
                            chat(12, 200);
                        else
                            chat(13, 200);
                        break;
                    case 6:
                        if (activeCaseComplete === 1) {
                            if (missy.get("reusableCaseCounter") === 999) //tried to fuck her
                                chat(20, 200);
                            else
                                chat(18, 200);
                        }
                        else
                            chat(19, 200);
                        break;
                    case 7:
                        if (activeCaseComplete === 1) {
                            chat(124, 200);
                        }
                        else {
                            chat(126, 200);
                        }
                        break;
                    case 8:
                        if (activeCaseComplete === 1) {
                            inv.use("locket");
                            chat(44, 200);
                        }
                        else
                            chat(45, 200);
                        break;
                    case 9:
                        chat(50, 200);
                        break;
                    case 12:
                        chat(63, 200);
                        break;
                    case 13:
                        if (activeCaseComplete === 1)
                            chat(71, 200);
                        else
                            chat(73, 200);
                        break;
                    case 14:
                        chat(90, 200);
                        break;
                    case 15:
                        if (activeCaseComplete === 1)
                            chat(78, 200);
                        else
                            chat(77, 200);
                        break;
                    case 16:
                        if (activeCaseComplete === 1)
                            chat(116, 200);
                        else
                            chat(117, 200);
                        break;
                    case 18:
                        future.add("carnivalBlowNextCase", 3);
                        chat(120, 200);
                        break;
                    case 19:
                        chat(133, 200);
                        break;
                }
            }
            else if (missyUniform === 0 && cl.pantiesTxt() === "panties") {
                char.room(223);
            }
            else if (missyUniform > 0 && missy.get("uniformNew") === 0) {
                missy.set("uniformNew", 1);
                if (missy.get("uniform") === 1) {
                    chat(21, 200);
                }
            }
            else if (missy.get("chastity") > 0 && cl.c.chastity === null && gv.get("chastityOverride") !== "never") {
                chat(23, 200);
            }
            else if (missyUniform === 2 && sissy.get("fem103").ach) {
                char.room(223);
            }
            else if (missy.st[32].c === 0 && sissy.st[19].ach) {
                missy.st[32].c = 1;
                chat(57, 200);
            }
            else if (missy.st[31].c === 0 && sissy.st[7].ach) {
                missy.st[31].c = 1;
                chat(55, 200);
            }
            else if (cl.getmakeup().name === "n") {
                chat(79, 200);
            }
            else if (inv.has("lockpick") && sissy.st[17].ach && g.rand(0, 6) === 0) {
                g.pass = "morning";
                char.room(197);
            }
            else
                room200.chatcatch("selectJob");
        break;
        case "job_0":
        case "job_1":
        case "job_2":
        case "job_3":
        case "job_4":
        case "job_5":
        case "job_6":
        case "job_7":
            g.pass = (parseInt(name.replace("job_", "")));
            char.room(218);
            break;
        case "case_0":
        case "case_1":
        case "case_2":
        case "case_3":
            g.internal.activeCase = g.internal.caseList[parseInt(name.replace("case_", ""))];
            if (!g.internal.activeCase.active) {
                chat(999, 200);
            }
            else {
                nav.bg("200_frontOffice/bg.jpg");
                nav.killall();
                room200.chatcatch(g.internal.activeCase.callback);
            }
            break;
        case "case_beaver_end_good":
            
            if (g.pass > 4) {
                nav.killbutton("case_beaver_end_good");
                chat(95, 200);
            }
            else {
                nav.bg("200_frontOffice/case_beaver_l" + g.pass + ".jpg");
            }
            g.pass++;
            break;
        default:
            break;
    }
};

room200.chatcatch = function (callback) {
    switch (callback) {
        case "bg":
        case "case_beaver_bad1":
        case "case_beaver0":
            nav.bg("200_frontOffice/" + callback + ".jpg");
            break;
        case "case_ranch1":
        case "case_ranch2":
        case "case_ranch3":
        case "case_ranch4":
        case "case_ranch5":
        case "case_ranch6":
            nav.bg("200_frontOffice/" + callback + ".webp");
            break;
        case "case_ranch0":
            nav.kill();
            nav.bg("200_frontOffice/" + callback + ".webp");
            break;
        case "minorInfraction":
            missy.mod("weeklyPay", -10);
            break;
        case "pinkRoom0":
            g.pass = 5;
            char.room(216);
            break;
        case "selectJob":
            var jobCounter = 0;
            var showJob;
            nav.killall();
            nav.bg("200_frontOffice/work.jpg");
            
            var activeCounter = 0;
            $.each(g.internal.caseList, function (i, v) {
                if (i < 4) {
                    nav.button({
                        "type": "btn",
                        "name": "case_" + i,
                        "left": 400 + (Math.floor(i / 2) * 700),
                        "top": 100 + ((i % 2) * 120),
                        "width": 600,
                        "height": 100,
                        "image": "200_frontOffice/" + v.icon
                    }, 200);
                    if (g.internal.caseList.active)
                        activeCounter++;
                }
            });

            if (gv.get("sissySchoolClass") === "finalx")
                activeCounter = 0;
                
            if (activeCounter < 4) {
                $.each(missy.jobs, function (i, v) {
                    showJob = true;
                    if (i === 6 && missy.st[31].c < 1)
                        showJob = false;
                    if (i === 5 && missy.st[32].c < 1)
                        showJob = false;

                    if (missy.st[v.thisWeek].c === 0 && showJob) {
                        nav.button({
                            "type": "btn",
                            "name": "job_" + i,
                            "left": 400 + (Math.floor(i / 4) * 700),
                            "top": 450 + ((i % 4) * 120),
                            "width": 600,
                            "height": 100,
                            "image": "200_frontOffice/" + v.img
                        }, 200);
                        jobCounter++;
                    }
                });
            }

            //friday reset fix if jobs are empty
            if (jobCounter === 0) {
                $.each(missy.jobs, function (i, v) {
                    showJob = true;
                    if (i === 6 && missy.st[31].c < 1)
                        showJob = false;
                    if (i === 5 && missy.st[32].c < 1)
                        showJob = false;

                    if (showJob) {
                        missy.st[v.thisWeek].c === 0;
                        nav.button({
                            "type": "btn",
                            "name": "job_" + i,
                            "left": 400 + (Math.floor(i / 4) * 700),
                            "top": 450 + ((i % 4) * 120),
                            "width": 600,
                            "height": 100,
                            "image": "200_frontOffice/" + v.img
                        }, 200);
                        jobCounter++;
                    }
                });
            }

            
            break;
        case "case_booth":
            chat(4, 200);
            break;
        case "explain0":
        case "case_booth1":
        case "case_booth2":
        case "case_lostgirl1":
        case "case_usb0":
        case "case_usb1":
        case "case_usb2":
        case "case_trash1":
            nav.killall();
            nav.bg("200_frontOffice/" + callback + ".jpg");
            break;
        case "case_dam1":
        case "case_dam2":
            nav.killall();
            nav.bg("200_frontOffice/" + callback + ".webp");
            break;
        case "case_booth3":
            missy.set("activeCase", 4);
            break;
        case "case_booth_complete":
            gv.mod("money", 300);
            missy.mod("mood", 20);
            levels.mod("pi", 100);
            missy.caseComplete(5);
            room200.chatcatch("case_complete_end");
            break;
        case "case_booth_complete_bad":
            missy.caseComplete(5);
            char.room(205);
            break;
        case "case_lostgirl":
            nav.killall();
            nav.bg("200_frontOffice/case_lostgirl0.jpg");
            chat(14, 200);
            break;
        case "case_lostgirl2":
            pic.add("case_lostgirl");
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_lostgirl_goodend":
            gv.mod("money", 250);
            missy.mod("mood", 20);
            levels.mod("pi", 100);
            missy.caseComplete(6);
            room200.chatcatch("case_complete_end");
            break;
        case "case_lostgirl_badend":
            missy.caseComplete(6);
            char.room(217);
            break;
        case "case_lostgirl_chastity":
            missy.caseComplete(6);
            g.pass = "chastity";
            if (missy.get("chastity") === 0)
                char.room(205);
            else
                char.room(217);
            break;
        case "case_usb_end":
            gv.mod("money", 150);
            missy.mod("mood", 20);
            levels.mod("pi", 100);
            inv.use("missyusb");
            missy.caseComplete(4);
            room200.chatcatch("case_complete_end");
            break;
        case "case_trash":
            nav.killall();
            nav.bg("200_frontOffice/case_trash0.jpg");
            chat(36, 200);
            break;
        case "case_elijah":
            nav.bg("200_frontOffice/case_elijah.jpg");
            chat(67, 200);
            break;
        case "case_elijah_origin":
            nav.bg("200_frontOffice/case_elijah_origin.jpg");
            chat(74, 200);
            break;
        case "case_elijah_origin_start":
            missy.set("activeCase", g.internal.activeCase.caseId);
            missy.set("activeCaseComplete", 0);
            missy.set("reusableCaseCounter", 0);
            g.pass = "case_elijah_origin";
            char.room(174);
            break;
        case "case_elijah_start":
            pic.add("case_elijah");
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_elijah_origin_endBad":
            missy.mod("mood", -40);
            missy.caseComplete(15);
            char.room(217);
            break;
        case "case_elijah_origin_goodBad":
            gv.mod("money", 100);
            missy.mod("mood", 20);
            missy.caseComplete(15);
            room200.chatcatch("case_complete_end");
            break;
        case "case_elijah_complete":
            gv.mod("money", 150);
            missy.mod("mood", 20);
            missy.caseComplete(13);
            room200.chatcatch("case_complete_end");
            break;
        case "case_elijah_completeBad":
            missy.mod("mood", -40);
            missy.caseComplete(13);
            char.room(217);
            break;
        case "case_beaver":
            nav.bg("200_frontOffice/case_beaver0.jpg");
            chat(80, 200);
            break;
        case "case_trashcheck":
            if (missy.get("chastity") === 0) {
                chat(38, 200);
            }
            else {
                room200.chatcatch("case_afterExplaniation");
            }
            break;
        case "case_trash_lockedup":
            missy.set("activeCase", g.internal.activeCase.caseId);
            missy.set("activeCaseComplete", 0);
            missy.set("reusableCaseCounter", 0);
            g.pass = "chastity";
            char.room(205);
            break;
        case "case_trash_goodend":
            gv.mod("money", 200);
            missy.mod("mood", 20);
            missy.caseComplete(8);
            room200.chatcatch("case_complete_end");
            break;
        case "case_trash_badend":
            missy.mod("mood", -50);
            missy.caseComplete(8);
            char.room(217);
            break;
        case "case_afterExplaniation":
            missy.set("activeCase", g.internal.activeCase.caseId);
            missy.set("activeCaseComplete", 0);
            missy.set("reusableCaseCounter", 0);
            if (g.dt.getDay() === 5 && missy.get("weeklyPay") !== 0)
                char.room(196);
            else
                char.room(201);
            break;
        case "case_goth":
            nav.killall();
            missy.set("activeCase", g.internal.activeCase.caseId);
            nav.bg("200_frontOffice/case_goth_0.jpg");
            chat(46, 200);
            break;
        case "case_goth_0":
            char.room(174);
            break;
        case "case_goth_complete":
            gv.mod("money", 75);
            missy.mod("mood", 20);
            missy.caseComplete(9);
            room200.chatcatch("case_complete_end");
            break;
        case "case_shopping":
            chat(58, 200);
            break;
        case "case_bimbopanties":
            nav.killall();
            nav.bg("200_frontOffice/bimbospanties0.jpg");
            chat(60, 200);
            break;
        case "case_bimbopantiesExplain":
            missy.set("activeCase", g.internal.activeCase.caseId);
            missy.set("activeCaseComplete", 0);
            missy.set("reusableCaseCounter", 0);
            if (g.dt.getDay() === 5 && missy.get("weeklyPay") !== 0)
                char.room(196);
            else
                char.room(201);
            break;
        case "bimboPantiesPunish":
            cl.c.panties = null;
            cl.remove("panties", "bi");
            missy.caseComplete(12);
            char.room(217);
            break;
        case "bimboPantiesGoodEnd":
            gv.mod("money", 250);
            missy.mod("mood", 20);
            missy.caseComplete(12);
            room200.chatcatch("case_complete_end");
            break;
        case "case_complete_end":
            if (g.gethourdecimal() < 10) {
                g.internal = { caseList: missy.getcases(), activeCase: null };
                room200.chatcatch("selectJob");
            }
            else if (g.dt.getDay === 5)
                char.room(196);
            else
                char.room(0);
            break;
        case "case_clothing0":
            char.room(0);
            break;
        case "hate":
            missy.mod("mood", -20);
            break;
        case "uniform1_0":
            cl.c.pants = null;
            zcl.displayMain(-200, 550, .3, "clothes", true);
            cl.c.pants = "s";
            break;
        case "chastity0":
            nav.killall();
            if (gv.get("arousal") > 50) {
                if (missy.get("uniform") > 2)
                    nav.bg("205_chastity/chast0_1_r.jpg");
                else
                    nav.bg("205_chastity/chast0_1.jpg");
                chat(25, 200);
            }
            else {
                if (missy.get("uniform") > 2)
                    nav.bg("205_chastity/soft_r.jpg");
                else
                    nav.bg("205_chastity/soft.jpg");
                chat(43, 200);
            }
            break;
        case "chastity1":
            if (missy.get("uniform") > 2)
                nav.bg("205_chastity/punch_r.jpg");
            else
                nav.bg("205_chastity/punch.jpg");
            break;
        case "chastity2":
            if (missy.get("uniform") > 2)
                nav.bg("205_chastity/soft_r.jpg");
            else
                nav.bg("205_chastity/soft.jpg");
            break;
        case "chastity3":
            cl.c.chastity = gv.get("castitycage");
            
            if (missy.get("uniform") > 2)
                nav.bg("205_chastity/pink_r.jpg");
            else {
                if (cl.c.chastity === "cage")
                    nav.bg("205_chastity/chast0_6.jpg");
                else
                    nav.bg("205_chastity/pink.jpg");
            }
            break;
        case "reset":
            char.room(200);
            break;
        case "case_usb":
            chat(26, 200);
            break;
        case "missyBtnClick":
            room200.btnclick("missy");
            break;
        case "bimbopantiesWearing":
            if (cl.c.panties === "bi")
                chat(64, 200);
            else
                chat(66, 200);
            break;
        case "case_beaver1":
            cl.c.shirt = null;
            zcl.displayMain(0, 400, .22, "clothes", true);
            cl.display();
            break;
        case "case_beaver2":
            cl.c.pants = null;
            zcl.displayMain(0, 400, .22, "clothes", true);
            cl.display();
            break;
        case "case_beaver_start":
            sc.modSecret("jeffery", 100);
            sc.show("jeffery");
            sc.show("holly");
            sc.show("dolly");
            sc.show("molly");
            sc.startMission("holly", "case");
            sc.startMission("molly", "case");
            sc.startMission("dolly", "case");
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_beaver_end0":
            nav.bg("200_frontOffice/case_beaver0.jpg");
            if (missy.get("activeCaseComplete") === 1) {
                chat(91, 200);
            }
            else {
                chat(96, 200);
            }
            break;
        case "case_beaver_end_good":
            nav.killall();
            nav.bg("200_frontOffice/case_beaver_l0.jpg");
            g.pass = 1;
            nav.button({
                "type": "tongue",
                "name": "case_beaver_end_good",
                "left": 987,
                "top": 369,
                "width": 93,
                "height": 93,
                "image": "200_frontOffice/case_beaver_l.png"
            }, 200);
            break;
        case "case_beaver_closeCase":
            missy.mod("mood", 40);
            missy.caseComplete(14);
            gv.mod("money", 500);

            sc.completeMission("holly", "happy", false);
            sc.completeMissionTask("holly", "mad", 0);
            sc.startMission("holly", "mad");

            sc.completeMission("dolly", "happy", false);
            sc.completeMissionTask("dolly", "mad", 0);
            sc.startMission("dolly", "mad");

            sc.completeMission("molly", "happy", false);
            sc.completeMissionTask("molly", "mad", 0);
            sc.startMission("molly", "mad");
            
            sc.show("jeffery");
            sc.startMission("jeffery", "work");
            sc.modSecret("jeffery", 100);

            room200.chatcatch("case_complete_end");
            break;
        case "case_beaver_end_bad":
            missy.mod("mood", -40);
            missy.caseComplete(14);

            sc.startMission("holly", "happy");
            sc.completeMissionTask("holly", "happy", 0);
            sc.completeMission("holly", "mad", false);

            sc.startMission("dolly", "happy");
            sc.completeMissionTask("dolly", "happy", 0);
            sc.completeMission("dolly", "mad", false);

            sc.startMission("molly", "happy");
            sc.completeMissionTask("molly", "happy", 0);
            sc.completeMission("molly", "mad", false);

            sc.show("jeffery");
            sc.startMission("jeffery", "work");
            sc.modSecret("jeffery", 100);

            char.room(217);
            break;
        case "case_beaver_bad0":
            cl.remove("panties", cl.c.panties);
            cl.nude();
            zcl.displayMain(-1000, -700, .5, "clothes", true);
            break;
        case "case_damselle":
            nav.kill();
            nav.bg("200_frontOffice/case_dam0.webp");
            chat(110, 200);
            break;
        case "case_carnival":
            nav.kill();
            nav.bg("200_frontOffice/case_carnival0.jpg");
            chat(118, 200);
            break;
        case "case_farm":
            nav.kill();
            nav.bg("200_frontOffice/case_farm0.jpg");
            chat(128, 200);
            break;
        case "case_farm_start":
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_farm_badend":
            missy.set("activeCaseComplete", 0);
            missy.caseComplete(19);
            room200.chatcatch("case_complete_end");
            break;
        case "case_sewer":
            nav.kill();
            nav.bg("200_frontOffice/case_sewer.webp");
            chat(160, 200);
            break;
        case "case_sewer_start":
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_saveralph":
            nav.bg("200_frontOffice/case_saveralph.jpg");
            chat(122, 200);
            break;
        case "case_saveralph_start":
            future.add("case_saveralph", 1);
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_saveralph_goodend":
            gv.mod("money", 50);
            missy.mod("mood", 100);
            missy.caseComplete(7);
            room200.chatcatch("case_complete_end");
            break;
        case "case_saveralph_badend":
            missy.mod("mood", -50);
            missy.caseComplete(7);
            room200.chatcatch("case_complete_end");
            break;
        case "case_canival_end":
            gv.mod("money", 500);
            missy.mod("mood", 100);
            missy.caseComplete(18);
            room200.chatcatch("case_complete_end");
            break;
        case "case_dam_start":
            inv.addMulti("soda", 3);
            future.add("case_dam", 6 - g.dt.getDay() - 1);
            gv.set("mapopen", true);
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_dam_end":
            future.kill("case_dam");
            gv.mod("money", 100);
            missy.mod("mood", 100);
            missy.caseComplete(16);
            room200.chatcatch("case_complete_end");
            break;
        case "case_dam_end_bad":
            future.kill("case_dam");
            missy.mod("mood", -100);
            missy.caseComplete(16);
            char.room(172);
            break;
        case "punish":
            char.room(217);
            break;
        case "case_ranch7":
            nav.bg("200_frontOffice/case_ranch7.webp");
            zcl.displayMain(100, 1000, .18, "clothes", true);
            break;
        case "case_ranch_endcheck":
            if (future.st.findIndex(item => item.name.includes("emptyjar")) !== -1) {
                chat(157, 200);
            }
            else {
                room200.chatcatch("case_ranchEnd");
            }
            break;
        case "case_ranchEnd":
            gv.mod("money", 1000);
            missy.mod("mood", 50);
            levels.mod("pi", 100);
            missy.caseComplete(19);
            char.addtime(360);
            gv.set("map", 0);
            char.room(0);
            break;
        case "case_ranch_cumjars":
            g.map = {
                jars: null,
                hole: -1
            } 
            g.map.jars = JSON.parse(future.st[future.st.findIndex(item => item.name.includes("emptyjar"))].name);
            g.map.hole = parseInt(future.st.find(i => i.name.includes("room329hole_"))?.name.replace("room329hole_", "") ?? "-1");
            room329.btnclick("stall_backDraw");
            $.each(g.map.jars, function (i, v) {
                if (v.t > 0)
                    inv.addMulti(v.n, v.t);
            });
            g.map = null;
            break;
    };
};

room200.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: g.internal.activeCase.notReadyTxt,
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Welcome to your first day. I'm glad to see you can follow simple instructions like dressing yourself. " +
                    "As my employee you'll find I'm very strict. I expect your utmost loyalty and obediance in " +
                    "everything you do for me. If you do well, you'll be rewarded, if you do poorly you will be " +
                    "disciplined. ",
                button: [
                    { chatID: 1, text: "cool", callback: "" },
                    { chatID: 2, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "Thank you for the chance to demonstrate how you will be disciplined. Not calling me by my " +
                    "proper title is a minor infraction. $10 will be deducted from your paycheck on the end of " +
                    "week. ",
                button: [
                    { chatID: 2, text: "Yes ma'am", callback: "minorInfraction" },
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "I've been without proper help for far too long, so there are many things to do. Each morning " +
                    "I will allow you to pick which job you will do for me. Each one has a different compensation " +
                    "depending on it's need and difficulty. I will allow you to take lunch, then the afternoon I " +
                    "will administer any training I have for you. You have a lot to learn, and my time is valuable.  ",
                button: [
                    { chatID: 3, text: "Yes ma'am", callback: "" },
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Payday is on Friday. Don't missy work on Friday or you will not be paid. Now choose which " +
                    "job you want to do on your first day. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "selectJob" },
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "I have a surprise for you. Just a moment while I set up. ",
                button: [
                    { chatID: 5, text: "...", callback: "case_booth1" },
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "Ok Airhead listen up. I guess it's time for your first real case. A friend of mine at " +
                    "Toys 'n Us has an ongoing  " +
                    "series of run-ins with some crazy cum beast. It seems that some one goes into their wack-off booths " +
                    "and just covers it in their cum. It wouldn't be a problem if they paid for a show, but then just enter and " +
                    "in a matter of minutes they just cover the entire booth in cum and run. It would be quite impressive if " +
                    sc.n("tiffany") + " and " + sc.n("candy") + " didn't have to spend so much time cleaning it up. " +
                    "I need you to go there, watch the booths, and catch that animal. Do you have all this so far?",
                button: [
                    { chatID: 6, text: "Yes ma'am", callback: "case_booth2" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "OK, I need you to go to the Toys 'n Us and meet with " + sc.n("tiffany") + ", she'll explain what to do. This is your " +
                    "first big break, don't fuck it up. Now repeat back to me what you're doing.",
                button: [
                    { chatID: 7, text: "Go to the mall and buy new shoes", callback: "hate" },
                    { chatID: 7, text: "Go home and masturbate to Hentai", callback: "hate" },
                    { chatID: 8, text: "Going straight to Toys 'n Us and follow " + sc.n("tiffany") + "'s orders", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "No you moron. Go to Toys 'n Us and do what " + sc.n("tiffany") + " says. Now get out " + 
                    "before your stupidity spreads to me. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_afterExplaniation" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "You got it Airhead, Head over to the toy store and take care of it. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_afterExplaniation" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "Now that you've complete a week's worth of work I'm going to give you a chance to " +
                    "do some investigations. Some will be for me, and some for our clients. All are to be " +
                    "treated with the utmost care and dedication. Successfully completing a case will bring " +
                    "great rewards, and failures will bring great retribution. ",
                button: [
                    { chatID: 10, text: "Yes ma'am", callback: "explain0" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "As I continue to mold you, and you improve yourself, more cases will be " +
                    "available. Those cases that you are almost ready for will show themselves with the " +
                    "red mark. You can check them to see what you need to improve to do that case. Those " +
                    "that you are ready for will show how much that case is worth successfully completed. ",
                button: [
                    { chatID: 11, text: "...", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "If you are on a case, that is your job. You will focus only on the case, and you " +
                    "won't need to come back here. Once you're complete with your case report to " + sc.n("cecilia") +
                    " and she'll inform me. Now ready to start your day? ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "selectJob" }
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: sc.n("tiffany") + " informed me on what happened. Great work, that cult is always up to something. I'm " +
                    "sure this little event will cause them to do their extraction process elsewhere. As promised here's $300 " +
                    "for your fine work on your first case. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "case_booth_complete" }
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: sc.n("tiffany") + " informed me on what happened. All you had to do was sit there and look out of a peep " +
                    "hole and you couldn't get that right! I guess your cock is in control of your brain. ",
                button: [
                    { chatID: -1, text: "ma'am", callback: "case_booth_complete_bad" }
                ]
            },
            {
                chatID: 14,
                speaker: "missy",
                text: "At this facility we have a School for extraordinary girls. One of our Professors, Martha, who is " +
                    "the Mistress of Etiquette at the school has a daughter that has run away. ",
                button: [
                    { chatID: 15, text: "What's the school for extraordinary girls? ", callback: "" },
                    { chatID: 16, text: "Yes ma'am ", callback: "case_lostgirl1" },
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "The school started as a side project of mine with a friend of mine, Princess Pink. It started as a way for us " +
                    "to give back to the community and help lost little girls find themselves. But over the years it has really " +
                    "grown to a fully funcitonal school. Princess Pink has really done some tremendous work making it what it is. " +
                    "Don't worry, I'm sure you'll see more of the school in your future. ",
                button: [
                    { chatID: 16, text: "...", callback: "case_lostgirl1" }
                ]
            },
            {
                chatID: 16,
                speaker: "missy",
                text: "This is Sanaria, Martha's daughter. Martha's fairly sure she's somewhere in town. I need you to search " +   
                    "all the buildings you can looking for her. She's probably moving around so you'll need to look around both " +
                    "day and night. She's in her party phase, so also check where there's a lot of people. I'm going to send a " +
                    "picture of her to your phone so you can verify her identity. Once you find her call me immediately. ",
                button: [
                    { chatID: 17, text: "Got it!", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "missy",
                text: "Good. Don't fuck around. Just call me when you find her. " +
                    "Don't try to do anything stupid and don't try to get in her " +
                    "panties. Got it? ",
                button: [
                    { chatID: -1, text: "Yes ma'am!", callback: "case_lostgirl2" }
                ]
            },
            {
                chatID: 18,
                speaker: "missy",
                text: "Excellent work in tracking down Sanaria. " + sc.n("martha") + " is thrilled to get her daughter back. " +
                    "as promised, your $250 reward for a job well done. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "case_lostgirl_goodend" }
                ]
            },
            {
                chatID: 19,
                speaker: "missy",
                text: "Your little fuckup cost me over $1000. I had to hire another investigator to track her down since I " +
                    "don't have time to do it myself. Not only do I waste money, but I look like an idiot hiring another PI " +
                    "to do a job this agency should be doing. For your stupidity a punishment is in order. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_lostgirl_badend" }
                ]
            },
            {
                chatID: 20,
                speaker: "missy",
                text: "You tried to fuck " + sc.n("martha") + "'s daughter in a night club bathroom? I don't even know where to " +
                    "begin. ",
                button: [
                    { chatID: -1, text: "...", callback: "case_lostgirl_chastity" }
                ]
            },
            {
                chatID: 21,
                speaker: "missy",
                text: "Good morning my little sissy? How do those panties feel? So much softer than nasty boy's panties. " +
                    "Take your pants off. Show me your pretty panties again. ",
                button: [
                    { chatID: 22, text: "Yes ma'am", callback: "uniform1_0" }
                ]
            },
            {
                chatID: 22,
                speaker: "missy",
                text: "That's a good sissy. That panty buldge is so cute on you. Now on to work. ",
                button: [
                    { chatID: -1, text: "...", callback: "selectJob" }
                ]
            },
            {
                chatID: 23,
                speaker: "missy",
                text: "Good morning. Bring that cock over here so I can lock it back up. ",
                button: [
                    { chatID: 24, text: "Again. Could we just skip it ma'am? ", callback: "hate" },
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "I'm glad you asked. Fuck No! You're wearing this cage because you can't seem to control your cock. " +
                    "My work here is too important for you to go sticking your dick in everything, so that's why you're " +
                    "getting locked back up. Now bring that cock over here before I rip it off and you become a dickless loser! ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "chastity0" },
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "You knew you were going back into chastity and you present me this hard cock? You couldn't jack it at " +
                    "home before you came? I'm not jacking you again. Get ready, I'm going to make you soft. ",
                button: [
                    { chatID: 39, text: "oh no....", callback: "chastity1" },
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: "Your first case. It's not a real case. You're still too stupid. Really I just need you to go and " +
                    "retrieve a usb drive. I'll set up my projector and go through the details.  ",
                button: [
                    { chatID: 27, text: "....", callback: "case_usb0" },
                ]
            },
            {
                chatID: 27,
                speaker: "missy",
                text: "I'm going to walk you step by step so your tiny mind can absorbe what you need to do. That way you don't " +
                    "fuck it up. First you need to go to the park. ",
                button: [
                    { chatID: 28, text: "yes ma'am", callback: "case_usb1" },
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "Walk into the men's bathroom. Not the woman's. You can't go in there since you don't have tits. ",
                button: [
                    { chatID: 30, text: "...", callback: "case_usb2" },
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "Go into the last stall. Don't go in the other stalls. I know what " + sc.n("cecilia") + " does in there. " +
                    "Get the USB Drive taped to the back of that toilet and bring it here. That's it. That's the entire case. " +
                    "Go get a USB drive and bring it back. Do you think you can handle that? ",
                button: [
                    { chatID: 30, text: "...", callback: "hate" },
                    { chatID: 31, text: "Yes ma'am.", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "missy",
                text: "Hey. Space cadet. Did you hear me?",
                button: [
                    { chatID: 31, text: "Yes ma'am.", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "missy",
                text: "Good now go get my USB drive from the last toilet in the park. ",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "case_afterExplaniation" },
                ]
            },
            {
                chatID: 32,
                speaker: "missy",
                text: "Oh good. You've brought me my USB. I trust you didn't open it.  ",
                button: [
                    { chatID: 33, text: "I did open it ma'am", callback: "hate" },
                    { chatID: 35, text: "Of course not ma'am", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "missy",
                text: "Normally disobaying me leads to a punishment fitting the action, but I guess lying is worse. You're probably " +
                    "curious as to who those young men are. You see the C.U.M. cult takes tracks the young men in this town through " +
                    "their internet activity. They've worked a deal the the local internet company for their records. Based on " +
                    "the sites they visit and basic demographic information the cult selects it's list of targets to kidnap for " +
                    "their ceremony. ",
                button: [
                    { chatID: 34, text: "...", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "missy",
                text: "Now this isn't the only way they find their candidates, but this list is what we call the internet activity " +
                    "list, put together by an old friend of mine. Being that we need to track these young men I've put together " +
                    "a class that we invite them to. This class aligns with their certain needs and desires to ensure we can " +
                    "continue to track them. " +
                    "I admit we have our own reasons for the class, but it does align with the bigger picture. While I " +
                    "don't want to give everything away, I will say you'll know about this class too in due time.",
                button: [
                    { chatID: 35, text: "...", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "missy",
                text: "For a job well done here's your $150 for completing the case. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "case_usb_end" },
                ]
            },
            {
                chatID: 36,
                speaker: "missy",
                text: "One of my idiot clients seems to have traded a locket for sex. I need you to go retrieve it. " +
                    "I'm sure you've noticed the dreadful homeless camp beside my building. There's a prostitute there " +
                    "that is holding on to that locket. Normally I wouldn't take up a case like this since it will cost " +
                    "him more to buy it back than what he would pay for my services, but in this case he was pretty rough " +
                    "with her and now she's refusing to give it back to him. ",
                button: [
                    { chatID: 37, text: "...", callback: "case_trash1" },
                ]
            },
            {
                chatID: 37,
                speaker: "missy",
                text: "She's totally blameless in all this, and part of his payment has been a severe punishment by Ms. Black. " +
                    "Sadly I wasn't able to find out her name, but just look for the prostitute at the camp. I trust it shouldn't " +
                    "be too hard getting it back for you. Got it?",
                button: [
                    { chatID: -1, text: "Yes ma'am. Get the locket from the prostitute at the homeless camp. ", callback: "case_trashcheck" },
                ]
            },
            {
                chatID: 38,
                speaker: "missy",
                text: "Good. Also I don't need your dick getting in the way of this case, so I'm going to have to lock it up. " +
                    "Her pussy has caused enough problems, I don't need yours to add to that. That's why you're getting locked up. ",
                button: [
                    { chatID: -1, text: "What did I do wrong?", callback: "case_trash_lockedup" },
                ]
            },
            {
                chatID: 39,
                speaker: "me",
                text: "OOOoooooffff. I can't breathe! Ooooooo  ",
                button: [
                    { chatID: 40, text: "...", callback: "chastity2" },
                ]
            },
            {
                chatID: 40,
                speaker: "missy",
                text: "Quit whining. I told you it has to be soft to get the cage on. Thank me for making your cock soft. ",
                button: [
                    { chatID: 41, text: "uuughh. Thank you...", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "missy",
                text: "Thank you what?",
                button: [
                    { chatID: 42, text: "Thank you for making my cock soft ma'am. ", callback: "chastity3" },
                ]
            },
            {
                chatID: 42,
                speaker: "missy",
                text: "All locked up. Now lets get to work. ",
                button: [
                    { chatID: -1, text: "Yes ma'am. ", callback: "reset" },
                ]
            },
            {
                chatID: 43,
                speaker: "missy",
                text: "Only a sissy has a soft cock in the presence of a lady. ",
                button: [
                    { chatID: 42, text: "Yes ma'am. ", callback: "chastity3" },
                ]
            },
            {
                chatID: 44,
                speaker: "missy",
                text: "Very well done. My client is going to be very excited. $200 for your great work!",
                button: [
                    { chatID: -1, text: "Thanks ma'am. ", callback: "case_trash_goodend" },
                ]
            },
            {
                chatID: 45,
                speaker: "missy",
                text: "How do you fuck up getting a locket from a prostitute? I even had you locked in chastity. Not only " +
                    "do you not get paid, but a punishment is in order. And I have to fix your fuck up. ",
                button: [
                    { chatID: -1, text: "Yes ma'am. ", callback: "case_trash_badend" },
                ]
            },
            {
                chatID: 46,
                speaker: "missy",
                text: "Meet Bill. Bill is an idiot. ",
                button: [
                    { chatID: 47, text: "...", callback: "" },
                ]
            },
            {
                chatID: 47,
                speaker: "!bill",
                text: "Hey! ",
                button: [
                    { chatID: 48, text: "...", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "missy",
                text: "Shut up Bill. Bill needs an escort to the train station this afternoon " +
                    "since she can't seem to get there on her own. Don't take her to the forest, " +
                    "and don't go anywhere stupid. Just watch her dumb ass, and an hour before the " +
                    "train escort her to the train station. Got it! ",
                button: [
                    { chatID: 49, text: "Yeah. I've got it. Babysitter duty ma'am. ", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "missy",
                text: "Yes, babysitter duty. Bill do what " + sc.n("me") + " tells you. Now " +
                    "both of you get. I've got work to do. ",
                button: [
                    { chatID: -1, text: "Yes ma'am. ", callback: "case_goth_0" },
                ]
            },
            {
                chatID: 50,
                speaker: "missy",
                text: "I'm glad to see you can conduct simple babysitting. I suppose you earned " +
                    "your $75. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am. ", callback: "case_goth_complete" },
                ]
            },
            {
                chatID: 51,
                speaker: "missy",
                text: "I'll have to compliment " + sc.n("tiffany") + " next time I see her. That " +
                    "is such a great look for you. Now that your outsides are starting to match " +
                    "your insides expect a great deal of change. Change in how people look " +
                    "at you, how they treat you, and how they can't keep their secret desires " +
                    "secret. ",
                button: [
                    { chatID: 52, text: "ma'am? ", callback: "" },
                ]
            },
            {
                chatID: 52,
                speaker: "missy",
                text: "Your entire life up to this point has been stifled by your drab boring image " +
                    "that you have presented to this world. As you find yourself and present your true " +
                    "self you're going to find out what it's really like being a woman in this world. ",
                button: [
                    { chatID: 53, text: "...", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "missy",
                text: "Where once you could walk down the street and be ignored by everyone around, now " +
                    "you're going to be inundated with cat calls, compliments, and threats. Before " +
                    "you didn't have to worry about anything, now you'll need to wonder if that man " +
                    "walking behind you is going to rob, rape, or kill you. ",
                button: [
                    { chatID: 54, text: "oh", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "missy",
                text: "Yes. I can't always be there to protect you, so you need to work on protecting " +
                    "yourself. And don't let people get you down. Some may be downright rude and cruel. " +
                    "Ignore those people and listen to those that truly love the real you. Now let's get to work. ",
                button: [
                    { chatID: -1, text: "Yes ma'am!", callback: "missyBtnClick" },
                ]
            },
            {
                chatID: 55,
                speaker: "missy",
                text: "So, you're quite the cocksucker now. We do need some help in the mornings with the glory hole " +
                    "in the pink room. Workers in the glory hole don't get to wear clothing, so I'm sure you'll be " +
                    "happy to hear that you need to work in the nude. ",
                button: [
                    { chatID: 56, text: "yes ma'am!", callback: "" },
                ]
            },
            {
                chatID: 56,
                speaker: "missy",
                text: "Since we're short staffed, and you have proven a compentent cock sucker you " +
                    "can now suck cocks in place of working in my office. The booths are oral only. No stupid shit ok?",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "missyBtnClick" },
                ]
            },
            {
                chatID: 57,
                speaker: "missy",
                text: "I was talking with " + sc.n("p") + " about how cute you look in your new " +
                    "sissy uniform and she let me know that she could really use your help at " +
                    "the pink room today. I'll let her explain what she needs. Now run along and " +
                    "help her out. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "pinkRoom0" },
                ]
            },
            {
                chatID: 58,
                speaker: "missy",
                text: "Inside of you is a slutty little girl; it's time to let the world know. " +
                    "It's time for a shopping trip! I've given " + sc.n("tiffany") + " some money " +
                    "to take you out and get you some girly clothing. ",
                button: [
                    { chatID: 59, text: "*Squeal*", callback: "" },
                ]
            },
            {
                chatID: 59,
                speaker: "missy",
                text: "Yes. Squeal. Now go meet " + sc.n("tiffany") + " at the Toys 'n Us and get your new " +
                    "set of clothing. ",
                button: [
                    { chatID: -1, text: "Yes ma'am!", callback: "case_afterExplaniation" },
                ]
            },
            {
                chatID: 60,
                speaker: "missy",
                text: "I have a client that is a little odd, but has more money than he knows what " +
                    "to do with. His tastes are very ummm.... well... he likes dirty panties, " +
                    "and he's willing to pay a lot of money for them. The thing is, he prefers the " +
                    "girl doesn't know he has their panties, so he pays me to get him those panties. ",
                button: [
                    { chatID: 61, text: "hmmmm", callback: "" },
                ]
            },
            {
                chatID: 61,
                speaker: "missy",
                text: "Now normally I would just deny him my services, but he helped me out when I " +
                    "was trying to set up this business, so I help with these perversions of " +
                    "his. Recently he was at the hospital and ran across a nurse there. I don't know " + 
                    "her name, but I do know she's a such an idiot, most people just call her the Bimbo " +
                    "nurse. I need you to sneak into her house and steal her panties. ",
                button: [
                    { chatID: 62, text: "Steal her panties ma'am? ", callback: "" },
                ]
            },
            {
                chatID: 62,
                speaker: "missy",
                text: "Yes. Now that you can pick locks I recommend you sneak in when she's either asleep " +
                    "or at work and find some of her dirty panties. Don't bring clean ones from her dresser, " +
                    "you must find her dirty panties. The dirtier they are, the more I get paid. She lives in " +
                    "the pink house in the residential part of the city. Don't get caught and only steal dirty " +
                    "panties. Got it? ",
                button: [
                    { chatID: -1, text: "Got it ma'am! ", callback: "case_bimbopantiesExplain" },
                ]
            },
            {
                chatID: 63,
                speaker: "missy",
                text: "So you've brought me some poor girl's dirty panties? ",
                button: [
                    { chatID: 64, text: "Yes ma'am! ", callback: "bimbopantiesWearing" },
                ]
            },
            {
                chatID: 64,
                speaker: "missy",
                text: "Oh good. Just hand them over and I'll get you paid.  ",
                button: [
                    { chatID: 65, text: "Oh. Well ma'am I'm wearing the panties. ", callback: "" },
                ]
            },
            {
                chatID: 65,
                speaker: "missy",
                text: "Sometimes I don't know what goes on in that stupid brain of yours. Why would " +
                    "you wear the panties here when you know it's for a client. *groan*. Strip them " +
                    "off and get ready to receive your punishment. ",
                button: [
                    { chatID: -1, text: "Yes ma'am. ", callback: "bimboPantiesPunish" },
                ]
            },
            {
                chatID: 66,
                speaker: "missy",
                text: "Oh good. Just hand them over and I'll get you paid.  ",
                button: [
                    { chatID: -1, text: "Thanks ma'am! ", callback: "bimboPantiesGoodEnd" },
                ]
            },
            {
                chatID: 67,
                speaker: "missy",
                text: "This is Elijah. The owner of the local Dance Club is certain he's the one " +
                    "pooping in the middle of the dance floor in the middle of the day. A janitor " +
                    "saw a flash of green hair, but not much else. The problem is we don't know  " +
                    "if it's him, or how he would get in there. ",
                button: [
                    { chatID: 68, text: "...", callback: "" },
                ]
            },
            {
                chatID: 68,
                speaker: "missy",
                text: "I need you to find him and have a casual chat with him. Find out some information " +
                    "on him, like where he works, what kind of free time he has during the day, and " + 
                    "any possible motiviation he would have for pooping in the club. ",
                button: [
                    { chatID: 69, text: "Do I break into his house and find the information?", callback: "" },
                ]
            },
            {
                chatID: 69,
                speaker: "missy",
                text: "*sigh* no. Elijah is a total loser. From what I've gathered he has no friends, no " +
                    "girl friend, and consistently posts to online dating websites how horny he is, and " +
                    "how he'd do anything for some pussy. To get any information out of him you may want " +
                    "to use your feminine charms. ",
                button: [
                    { chatID: 70, text: "My feminine charm?", callback: "" },
                ]
            },
            {
                chatID: 70,
                speaker: "missy",
                text: "Yes. Your feminine charm. Find it within yourself, this loser is desperate for sex. " +
                    "Chances you won't find him at the club. I do know he likes to jack off in the park, and " +
                    "eat fast food. You can start your search at those places. Make yourself pretty and get " +
                    "the information I need to help solve this case. I sent you a picture to your phone " +
                    "so you can see what he looks like. ",
                button: [
                    { chatID: -1, text: "ok", callback: "case_elijah_start" },
                ]
            },
            {
                chatID: 71,
                speaker: "me",
                text: "... so then I found out he works as a lock smith, and is angry at the " +
                    "club owner. Something to do with his sister. I wasn't able to get more " +
                    "information on that.",
                button: [
                    { chatID: 72, text: "...", callback: "" },
                ]
            },
            {
                chatID: 72,
                speaker: "missy",
                text: "Oh. That's good. I'm glad you were able to get some information. This " +
                    "will be very helpful. I'll look more into that. In the mean time here's your " +
                    "$150 reward for a job well done. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "case_elijah_complete" },
                ]
            },
            {
                chatID: 73,
                speaker: "missy",
                text: "so you failed to get all the information I was looking for. At this point " +
                    "I expected more of you. You know I'm going to have to punish you now, right? ",
                button: [
                    { chatID: -1, text: "*sigh* yes ma'am", callback: "case_elijah_completeBad" },
                ]
            },
            {
                chatID: 74,
                speaker: "missy",
                text: "This is Mr. Rex. Mr. Rex owns the local night club and has been having some " +
                    "problems with his club. Apparently some kind of 'Mad Pooper' has been terrorizing " +
                    "his club and deficating in the middle of the dance floor sometime after the club closes. ",
                button: [
                    { chatID: 75, text: "Oh. Gross", callback: "" },
                ]
            },
            {
                chatID: 75,
                speaker: "missy",
                text: "Yes. Very gross. You're going to go to his club tonight after they close and be on the " +
                    "lookout for him. You're not to engage with him, just observe and report. Try to get " +
                    "a picture of him. Better if you catch him in the act, but a picture will work. ",
                button: [
                    { chatID: 76, text: "Ok. Just a picture. ", callback: "" },
                ]
            },
            {
                chatID: 76,
                speaker: "missy",
                text: "Go take a nap so you're fresh to work tonight then report to Mr. Rex " +
                    "at his club after 2 in the morning. He'll show you around. ",
                button: [
                    { chatID: -1, text: "Ok. I'll go take a nap. ", callback: "case_elijah_origin_start" },
                ]
            },
            {
                chatID: 77,
                speaker: "missy",
                text: "You just had to take a picture of the mad pooper. Nothing else. Instead you're face deep " +
                    "in some poor waitress. You know you fucked up, and the punishment for fucking " +
                    "up has to be done. I had really thought better of you. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_elijah_origin_endBad" },
                ]
            },
            {
                chatID: 78,
                speaker: "missy",
                text: "I guess a partial picture of the mad pooper is better than nothing. " +
                    "I have some contacts that I'll send around to see if I can get a better " +
                    "idea of who this is. There's not that many men in this town with green hair, " +
                    "and that parital necklace is unique. There may be enough to get him, I'll " +
                    "have to see. But since you only got a partial image you'll only get a parital " +
                    "payment. $100 will do. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "case_elijah_origin_goodBad" },
                ]
            },
            {
                chatID: 79,
                speaker: "missy",
                text: "You know what's the most important thing about being a detective? " +
                    "Blending in. You can't blend in if you stink like a homeless man " +
                    "eating shit out of a public outhouse, and you stink. So I don't have " +
                    "to keep reminding you to shower you must be punished. Don't come back " + 
                    "without regularly showing. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "punish" },
                ]
            },
            {
                chatID: 80,
                speaker: "missy",
                text: "Hello " + sc.n("me") + " this is " + sc.n("jeffery") + ". " + sc.n("jeffery") + " has a problem that I think " +
                    "you can help him with. ",
                button: [
                    { chatID: 81, text: "Hi " + sc.n("jeffery"), callback: "" }
                ]
            },
            {
                chatID: 81,
                speaker: "jeffery",
                text: "H-H-H-H-H-Hello " + sc.n("me") + " I'm hoping you can h-h-help me with catch the waitress that has been stealing " +
                    "from me. You'll need to pose as a waitress in my restaurant to gain their trust to try and catch the thief. " +
                    "Do you think you can do that?",
                button: [
                    { chatID: 82, text: "Of course I can! ", callback: "" }
                ]
            },
            {
                chatID: 82,
                speaker: "missy",
                text: "As you can see my sissy is well qualified and will fit that part nicely. I have full trust that " +
                    "he will do well, because if he doesn't he'll find out what a St. Andrew's Cross is used for. ",
                button: [
                    { chatID: 83, text: "I can do it ", callback: "" }
                ]
            },
            {
                chatID: 83,
                speaker: "jeffery",
                text: "I-I-I-I don't know. She doesn't seem sexy enough to work at my store.",
                button: [
                    { chatID: 84, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 84,
                speaker: "missy",
                text: "Her sexiest trait is her obedience. Watch this. Sissy strip off your shirt. ",
                button: [
                    { chatID: 85, text: "Yes ma'am", callback: "case_beaver1" }
                ]
            },
            {
                chatID: 85,
                speaker: "jeffery",
                text: "Oh my! C-c-c-can she strip off her bottoms too?",
                button: [
                    { chatID: 86, text: "*groan*", callback: "" }
                ]
            },
            {
                chatID: 86,
                speaker: "missy",
                text: "Yes she can. Sissy strip off your bottoms.",
                button: [
                    { chatID: 87, text: "Yes ma'am", callback: "case_beaver2" }
                ]
            },
            {
                chatID: 87,
                speaker: "jeffery",
                text: "I love it! Tell her to strip of her panties!",
                button: [
                    { chatID: 88, text: "*GROAN* again", callback: "" }
                ]
            },
            {
                chatID: 88,
                speaker: "missy",
                text: "I'm paying him as an investigator, not a prostitute. If he fails you, you can have his panties. ",
                button: [
                    { chatID: 89, text: "...", callback: "" }
                ]
            },
            {
                chatID: 89,
                speaker: "missy",
                text: "Sissy. Get dressed. Tomorrow report to the Naked Beaver Diner and start invistigating the staff to see who and " +
                    "how they are stealing form " + sc.n("jeffery") + " here. When you're done report back to me.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_beaver_start" }
                ]
            },
            {
                chatID: 90,
                speaker: "missy",
                text: "Oh good Sissy, you're here. Let me call " + sc.n("jeffery") + " here. ",
                button: [
                    { chatID: -1, text: "Yes mistress", callback: "case_beaver_end0" }
                ]
            },
            {
                chatID: 91,
                speaker: "missy",
                text: "So " + sc.n("jeffery") + " how did my little detective do?",
                button: [
                    { chatID: 92, text: "...", callback: "" }
                ]
            },
            {
                chatID: 92,
                speaker: "jeffery",
                text: "He did great! Not only did he figure out how they've been stealing from me, but he's a great little " +
                    "waitress! If you ever need to pick up some extra money you're welcome to work some shifts at the Naked Beaver!",
                button: [
                    { chatID: 93, text: "Thanks mister!", callback: "" }
                ]
            },
            {
                chatID: 93,
                speaker: "missy",
                text: "I am surprised! I guess you're ready for more responsibility around here. I think a bonus is in order for " +
                    "all your hard work! I'll grant your $500 for not screwing up. I also have a little reward for you. " +
                    sc.n("jeffery") + " I'm done with you, you may go now.",
                button: [
                    { chatID: 94, text: "Yes mistress! Thank you mistress. ", callback: "bg" }
                ]
            },
            {
                chatID: 94,
                speaker: "missy",
                text: "Sissies need to be rewarded as well and punished. Today sissy you've earned a reward for your work. I will " +
                    "allow you to eat my ass. I don't often allow a sissy to eat my ass, but I'm so surprised with you, you " +
                    "deserve it.",
                button: [
                    { chatID: -1, text: "Yes mistress !!!!", callback: "case_beaver_end_good" }
                ]
            },
            {
                chatID: 95,
                speaker: "missy",
                text: "You did well my personal slut. Maybe I'll reward you again someday. Now " +
                    "I need to fix my skirt and get ready for the day. ",
                button: [
                    { chatID: -1, text: "[You take your place at the front of the desk aware that your mouth tastes like Missy's ass.]", callback: "case_beaver_closeCase" }
                ]
            },
            {
                chatID: 96,
                speaker: "missy",
                text: "So " + sc.n("jeffery") + " how did my little detective do?",
                button: [
                    { chatID: 97, text: "...", callback: "" }
                ]
            },
            {
                chatID: 97,
                speaker: "jeffery",
                text: "He was t-t-t-terrible! Absolutely the worst detective I know. Good waitress though. He's welcome to come back and keep " +
                    "working anytime he wants... as a waitress, but a terrible detective.",
                button: [
                    { chatID: 98, text: "...", callback: "" }
                ]
            },
            {
                chatID: 98,
                speaker: "missy",
                text: "Well " + sc.n("jeffery") + " we don't tolerate failure here. Since he failed you how do you want to see " +
                    "him punished?",
                button: [
                    { chatID: 99, text: "...", callback: "" }
                ]
            },
            {
                chatID: 99,
                speaker: "jeffery",
                text: "I w-w-w-want " + gender.pronoun("his") + " panties. I know " + gender.pronoun("he") + " wears panties. Give me the panties! ",
                button: [
                    { chatID: 100, text: "What?", callback: "" }
                ]
            },
            {
                chatID: 100,
                speaker: "missy",
                text: "Stop. Sissies don't get to say no. Strip all the way down. " +
                    "Failures don't deserve clothes. ",
                button: [
                    { chatID: 102, text: "Yes mistress [disrobe]", callback: "case_beaver_bad0" },
                    { chatID: 101, text: "You can't make me do that!", callback: "hate" }
                ]
            },
            {
                chatID: 101,
                speaker: "missy",
                text: "I did not hire you so you could act like a spoiled child and throw a temper tantrum. Now take off your " +
                    "clothes or you're fired!",
                button: [
                    { chatID: 102, text: "Yes mistress", callback: "case_beaver_bad0" }
                ]
            },
            {
                chatID: 102,
                speaker: "jeffery",
                text: "Now give me his p-p-p-p-panties.  ",
                button: [
                    { chatID: 103, text: "*sigh*", callback: "" }
                ]
            },
            {
                chatID: 103,
                speaker: "missy",
                text: "I did promise him your panties. Sissy give " + sc.n("jeffery") + " your panties. NOW!",
                button: [
                    { chatID: 104, text: "[Give " + sc.n("jeffery") + " your panties]", callback: "case_beaver_bad1" }
                ]
            },
            {
                chatID: 104,
                speaker: "jeffery",
                text: "ooooOOooooOOhhh yesssss, that's so fresh! I love your scent! Can I keep these.. I'm going to keep these.",
                button: [
                    { chatID: 105, text: "...", callback: "" }
                ]
            },
            {
                chatID: 105,
                speaker: "missy",
                text: "Yes " + sc.n("jeffery") + " you can keep them. Now kindly put those in your pocket as we continue.",
                button: [
                    { chatID: 106, text: "...", callback: "case_beaver0" }
                ]
            },
            {
                chatID: 106,
                speaker: "jeffery",
                text: "Now make " + gender.pronoun("him") + " kiss my butt and apologise! N-n-n-no. Make " + gender.pronoun("him") +
                    " my slave for a day, no wait a week! My slave for a week! ",
                button: [
                    { chatID: 107, text: "Wha!", callback: "" }
                ]
            },
            {
                chatID: 107,
                speaker: "missy",
                text: "Stop. This isn't a brothal. You always take things too far. " +
                    gender.pronoun("she") + " will be punished, and you will be refunded " +
                    "for our failure to solve such a simple case. ",
                button: [
                    { chatID: 108, text: "...", callback: "" }
                ]
            },
            {
                chatID: 108,
                speaker: "jeffery",
                text: "I deserve something! Maybe a blow job! Yes. I'm going make " +
                    gender.pronoun("him") + " give me a blowjob! ",
                button: [
                    { chatID: 109, text: "!", callback: "" }
                ]
            },
            {
                chatID: 109,
                speaker: "missy",
                text: "UGH, " + sc.n("jeffery") + " if you pull that thing out I'm " +
                    "going to cut it off. Now get out, I have work to do. And you. " +
                    "put your clothes back on while I think of a proper punishment " +
                    "for your failure. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_beaver_end_bad" }
                ]
            },
            {
                chatID: 110,
                speaker: "missy",
                text: "This case is going to be quite dangerous, but very important. There's a girl " +
                    "that needs rescued in cabin in the woods. For her sake speed is essential. To " +
                    "find her you'll need to head to the park.",
                button: [
                    { chatID: 111, text: "Why don't you call the police? ", callback: "case_dam1" }
                ]
            },
            {
                chatID: 111,
                speaker: "missy",
                text: "Stop interrupting. We've gone over this before. Once you've entered the park, go into the forest..",
                button: [
                    { chatID: 112, text: "...", callback: "case_dam2" }
                ]
            },
            {
                chatID: 112,
                speaker: "missy",
                text: "Then there's a path to the left. Take that path. The forest is very dense and " +
                    "extremely dangerous. I can't stress that enough. You'll only go into the forest " +
                    "during the day, never at night. Tell me you understand you'll only go into the " +
                    "forest during the day.",
                button: [
                    { chatID: 113, text: "I'll only go into the forest during the day ma'am", callback: "" }
                ]
            },
            {
                chatID: 113,
                speaker: "missy",
                text: "Good. In the forest there's a cabin. You'll only enter during the day. If it's " +
                    "dark you'll need to leave. In that cabin there should be a girl. I need you to find " +
                    "her and free her before Friday night. The cabin may be hard to find, but it's not too " +
                    "deep in the forest. If you walk all the way to the mountains then you've gone way too far. ",
                button: [
                    { chatID: 114, text: "What happens on Firday night ma'am?", callback: "" }
                ]
            },
            {
                chatID: 114,
                speaker: "missy",
                text: "Hmm...I suppose I should tell you. The cabin is occupied by the Carnal Union of Mortals or " +
                    "the C.U.M. Cult. The women they kidnap to work as Milk Maids are held at the cabin unitl Friday " +
                    "night, where they are then taken to their ceremony and begin their indoctrination into the cult. " +
                    "If you don't find and free her before Friday she'll be lost to the cult forever. As to " +
                    "your previous question as to why I don't call the police is that they are members of the cult. " +
                    "It's like getting eaten by a lion and complaining to another lion. Now you're being eaten by " +
                    "two lions. ",
                button: [
                    { chatID: 115, text: "Oh wow. Ok. I'll free her ma'am!", callback: "" }
                ]
            },
            {
                chatID: 115,
                speaker: "missy",
                text: "Be careful, the forest has many dangers. Careful not to overexert yourself and pass out. " +
                    "I'm going to give you 3 energy drinks to help you on your journey. Take a shower, eat some " +
                    "food, get your energy up before you go and drink an energy drink if you are running low " +
                    "on energy. Remember if you don't save her, she'll be lost to the cult forever. Now go " +
                    "save that poor girl.",
                button: [
                    { chatID: -1, text: "Yes ma'am!", callback: "case_dam_start" }
                ]
            },
            {
                chatID: 116,
                speaker: "missy",
                text: "I recieved word from a friend of mine that you rescued that poor girl. " +
                    "Becuase of your bravery she will not be used as a sex slave at the C.U.M. " +
                    "cult where they would not only ruin her body, but her mind. I am proud " +
                    "of the detective you're becoming, and you should be proud of yourself. ",
                button: [
                    { chatID: -1, text: "Thanks ma'am!", callback: "case_dam_end" }
                ]
            },
            {
                chatID: 117,
                speaker: "missy",
                text: "All I needed you to do was walk to a cabin and free a poor girl. Now the " +
                    "C.U.M. cult has taken her back to their compound. They are currently " +
                    "raping her, beating her, and probably eventually kill her. But that's ok. " +
                    "You couldn't be bothered to walk into the forest and untie her, so I guess " +
                    "she's dead now. I don't even want to look at you anymore. Go see " + sc.n("black") +
                    ".",
                button: [
                    { chatID: -1, text: "Sorry ma'am!", callback: "case_dam_end_bad" }
                ]
            },
            {
                chatID: 118,
                speaker: "missy",
                text: "I've been hearing around town that several girls have gone missing. Now this is far " +
                    "too bold, and not the MO of the C.U.M. cult, so it has to be the work of someone else. " +
                    "I have a few thoughts on who could do it that I'm going to follow up on. Most of them " +
                    "were last seen going to the carnival. The police have already interviewed most of the " +
                    "workers and have nothing to go on. But I can't help thinking there's something there. ",
                button: [
                    { chatID: 119, text: "...", callback: "" }
                ]
            },
            {
                chatID: 119,
                speaker: "missy",
                text: "You won't find anything going during the day, I need to you to sneak in after they close " +
                    "after " + char.friendlyTime(22) + " and look around. Maybe poke around the tents to see " +
                    "if there's anything that can help us confirm they were there. If you find anything worth " +
                    "looking into give me a call. Don't be a hero, just call me. Ok. ",
                button: [
                    { chatID: -1, text: "Yes ma'am. Look around the carnival after they close and call if I find anything! ", callback: "case_afterExplaniation" }
                ]
            },
            {
                chatID: 120,
                speaker: "missy",
                text: "I'm so glad you're safe. Let this be a lesson for you that it's good you do what I tell " + 
                    "becuase I'm always right. I'm still gathering information, but it appears there is group called " +
                    "the Clown Clan that was part of the carnival workers. They would kidnap young girls and sell them " +
                    "to the highest bidder. I think you saw the CUM cult there becuase they heard they could buy these girls, " +
                    "but the CUM cult weren't the only buyers. I'm looking into others, but that will take time. The " +
                    "good news is that we shut them down. The Clown Clan has escaped. I think they maybe either hiding " +
                    "in the forest, or possibly the sewers, but I'll need more time. Really great job! ",
                button: [
                    { chatID: 121, text: "Thank you ma'am", callback: "" }
                ]
            },
            {
                chatID: 121,
                speaker: "missy",
                text: "As far as the explosions, I'm still not sure. My guess is they had rigged those " +
                    "expostions to clear out any evidance, but at this time, it's only speculation. " +
                    "Since you did such a great thing, I'm going to give you a little bonus, $500 for " +
                    "this case. You should be proud of yourself. Now we must get back to work. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_canival_end" }
                ]
            },
            {
                chatID: 122,
                speaker: "missy",
                text: "I've received word from my informant in the forest that the cult is going " +
                    "to profile one of my pupils. This must not happen. " + sc.n("ralph") + " has somehow come under " +
                    "the eye of the CUM cult. I need you to hang out at his house tonight and look for " +
                    "the cult and report back to me if there's anything. ", 
                button: [
                    { chatID: 123, text: sc.n("ralph") + "?", callback: "" }
                ]
            },
            {
                chatID: 123,
                speaker: "missy",
                text: "Yes. It's very important that you don't tell him. From what I've gathered he doesn't " +
                    "have the constitution to handle such a significant event and will do something... rather " +
                    "stupid and draw more attention to himself. I'm not even quite sure why they've chosen him " +
                    "since there are much better choices in the class, but chosen them they have. ",
                button: [
                    { chatID: -1, text: "Ok. I'll check " + sc.n("ralph") + "'s house tonight for the cult. ", callback: "case_saveralph_start" }
                ]
            },
            {
                chatID: 124,
                speaker: "me",
                text: "Telling Missy everything that happened",
                button: [
                    { chatID: 125, text: "...", callback: "" }
                ]
            },
            {
                chatID: 125,
                speaker: "missy",
                text: "Oh wow! This is troubling. The cult is getting bolder. Probably ramping for another " +
                    "big ritual. I'm glad you were able to stop them. Looks like I've chosen the right " +
                    "sissy to help me fight against the cult. Good job! ",
                button: [
                    { chatID: -1, text: "Thanks ma'am", callback: "case_saveralph_goodend" }
                ]
            },
            {
                chatID: 126,
                speaker: "me",
                text: "Telling Missy everything that happened",
                button: [
                    { chatID: 127, text: "...", callback: "" }
                ]
            },
            {
                chatID: 127,
                speaker: "missy",
                text: "Oh wow! This is troubling. The cult is getting bolder. Probably ramping for another " +
                    "big ritual. It's too bad you couldn't stop them, but I'm sure " + sc.n("ralph") + 
                    " is safe... for now. Let me devise a plan to resuce him. It will be hard. Really " +
                    "hard. Until then, you keep your head down. I don't want to lose any more sissies. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_saveralph_badend" }
                ]
            },
            {
                chatID: 128,
                speaker: "missy",
                text: "After that amazing work taking down Clown Clan at the carnival I've uncovered that " +
                    "Rachel, from Rachel's farm may have tried to purchase some of the more busty girls. Thanksfully " +
                    "it appears that it didn't happen, but it may be worth looking into. I don't have a lot of " +
                    "details, but the few I do have give me pause to send you on this case. ",
                button: [
                    { chatID: 129, text: "ma'am?", callback: "" }
                ]
            },
            {
                chatID: 129,
                speaker: "missy",
                text: "So a few things about Rachel. She doesn't work for the CUM Cult, but they do purchase a lot " +
                    "of their milk from her. It makes some sense since she is the largest supplier of human breast milk " +
                    "this side of the country. I do know that she has many girls that work for her to supply the milk. " +
                    "While most are there voluntarily, it's possible some are there against their will. ",
                button: [
                    { chatID: 130, text: "...", callback: "" }
                ]
            },
            {
                chatID: 130,
                speaker: "missy",
                text: "Now I don't have any proof she has girls there against their will, and her security is " +
                    "incredibly tight, so I haven't had a chance to properly look into her. This is where you come " +
                    "in. I just need you to poke around, see if there's anything there and get me some details of " +
                    "the inner workings. Given the danger and the lack of evidence, this case is optional for you. " +
                    "Totally up to you if you want to look into her farm. So I'll leave it up to you. Do you want " +
                    "to see if there's anything going on at Rachel's farm, or would it be better to look into other " +
                    "cases? ",
                button: [
                    { chatID: 132, text: "We need to know what's going on. I'll do it!  ", callback: "" },
                    { chatID: 131, text: "I'm going to skip this one. ", callback: "" }
                ]
            },
            {
                chatID: 131,
                speaker: "missy",
                text: "Perhaps you're right. We already have so much going on it's better to focus on other cases. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "case_farm_badend" }
                ]
            },
            {
                chatID: 132,
                speaker: "missy",
                text: "That's great to hear. Go to Rachel's farm, but only go at night, there's too many " +
                    "people roaming around during the day. If it starts to trun bad, just leave and report " +
                    "bad to me. ",
                button: [
                    { chatID: -1, text: "I will ma'am", callback: "case_farm_start" }
                ]
            },
            {
                chatID: 133,
                speaker: "me",
                text: "So how did the ranch go? Did you find anything?",
                button: [
                    { chatID: 134, text: "[Tell Missy everything about the ranch]", callback: "" }
                ]
            },
            {
                chatID: 134,
                speaker: "missy",
                text: "I knew it! I fucking knew it!! Those lazy ass cops never do their job!! Come with me " +
                    "to the police station. We're going to put a stop to this once and for all!!!",
                button: [
                    { chatID: 135, text: "[Follow her]", callback: "case_ranch0" }
                ]
            },
            {
                chatID: 135,
                speaker: "cop2",
                text: "Hi Missy. I didn't know you delivered blowjobs. I could sure use one now!",
                button: [
                    { chatID: 136, text: "...", callback: "" }
                ]
            },
            {
                chatID: 136,
                speaker: "missy",
                text: "Tell him. Tell him everything you told me. ",
                button: [
                    { chatID: 137, text: "[Tell the cop about the ranch]", callback: "" }
                ]
            },
            {
                chatID: 137,
                speaker: "cop2",
                text: "Now we've been over this. There's nothing going on over there. I talked to " + sc.n("rachel") +
                    " myself last week. She assured me everything was good. I even talked to one of her hucows, the " +
                    "blue haired one. She said everyone was there of their own free will. Making up stories isn't going " +
                    "to change that. ",
                button: [
                    { chatID: 138, text: "...", callback: "" }
                ]
            },
            {
                chatID: 138,
                speaker: "missy",
                text: "You idiot! You can't just ask someone if they're commiting a crime, you have to actually " +
                    "investigate it!! Now come with me so we can look into it or I'm going to call " + sc.n("wyatt") +
                    " to let him know you're not doing your job! ",
                button: [
                    { chatID: 139, text: "...", callback: "" }
                ]
            },
            {
                chatID: 139,
                speaker: "cop2",
                text: "pssst. Fine we'll go check it out if that makes you feel better. But after this don't ever " +
                    "come to me about the ranch again. Let's go. ",
                button: [
                    { chatID: 140, text: "[Follow them]", callback: "case_ranch1" }
                ]
            },
            {
                chatID: 140,
                speaker: "rachel",
                text: "Well hello officer. You caught me sunbathing. I hope you don't mind. I didn't have time " +
                    "to get dressed when I saw you come over. I see you brought that crazy " + gender.pronoun("boy") +
                    " that's been terrorizing my hucows! You need to get " + gender.pronoun("her") + " out of here. " +
                    "Just the other day " + gender.pronoun("she") + " was running around my ranch trying to fight everyone! ",
                button: [
                    { chatID: 141, text: "Don't lie! You're keeping hucows here against their will!", callback: "" }
                ]
            },
            {
                chatID: 141,
                speaker: "rachel",
                text: "See I told you. " + gender.pronoun("she") + "'s crazy. I demand you remove her from my " +
                    "property and lock " + gender.pronoun("her") + " up if " + gender.pronoun("she") + " tries " +
                    "to come back! You know who's the biggest contributor to the policeman's ball in this town, " +
                    "don't you! ",
                button: [
                    { chatID: 142, text: "I know where they're at! I can show you! ", callback: "" }
                ]
            },
            {
                chatID: 142,
                speaker: "missy",
                text: "Just have " + sc.n("me") + " show you where the girls are being held against their will. " +
                    "won't take more than 15 minutes. If " + gender.pronoun("she") + "'s wrong I assure you " + 
                    gender.pronoun("she") + "'ll never come back here. Let's go look officer. ",
                button: [
                    { chatID: 143, text: "Yeah lets! ", callback: "" }
                ]
            },
            {
                chatID: 143,
                speaker: "rachel",
                text: "Fine you can look. But 15 minutes! After that I never want to see you two again! ",
                button: [
                    { chatID: 144, text: "Let's go! " + sc.n("kinsey") + "'s probably in the pasture now!", callback: "case_ranch2" }
                ]
            },
            {
                chatID: 144,
                speaker: "!rancher1",
                text: "Hey Ms. " + sc.n("rachel") + ". Come to check our hucows? Who's this?",
                button: [
                    { chatID: 145, text: "Wait! Where'd all the girls go! There were more here!", callback: "" }
                ]
            },
            {
                chatID: 145,
                speaker: "cop2",
                text: "Like I've said, " +
                    "I've already talked to both these girls in the field. They are both here of their " +
                    "own free will. ",
                button: [
                    { chatID: 146, text: "Wait! We should check out the stable!", callback: "" }
                ]
            },
            {
                chatID: 146,
                speaker: "rachel",
                text: "Eight minutes are up. We'll look at the stable, but after that I'm done. I've got real " +
                    "work to do. Unlike you that runs around terrorizing poor farmers. Let's go! ",
                button: [
                    { chatID: 147, text: "*hrumph*", callback: "case_ranch3" }
                ]
            },
            {
                chatID: 147,
                speaker: "rachel",
                text: "Keep that pervert away from my award winning horses. Last time " + gender.pronoun("f") +
                    " was here " + gender.pronoun("she") + " tried to molest poor " + sc.n("horse") + "'s " +
                    "penis. A real pervet she is. ",
                button: [
                    { chatID: 148, text: "You're lying. The girls are here, you're just hiding them! ", callback: "" }
                ]
            },
            {
                chatID: 148,
                speaker: "cop2",
                text: "Now now. I don't see anything I didn't see last time I was here. Our time is up. " +
                    "Let's go. Next time I even hear you're poking around this poor woman's ranch I'll " +
                    "have you locked up 'till you're old and grey. Now let's get going! ",
                button: [
                    { chatID: 149, text: "...", callback: "" }
                ]
            },
            {
                chatID: 149,
                speaker: "thinking",
                text: "She had to have hidden the girls when she saw us pull up the road! That must be how she " +
                    "his the hucows last time this cop came looking. Damn! I have no idea where she would have " +
                    "hidden them! WAIT! " + sc.n("ppgirl") + "!! She's bolted down and would be hard to move. I " +
                    "bet she's still in her stall!!! It's my last chance!!!",
                button: [
                    { chatID: 150, text: "[Run past them to her stall]", callback: "case_ranch4" }
                ]
            },
            {
                chatID: 150,
                speaker: "me",
                text: "She's here!!! She's here!!!! Come look!!!",
                button: [
                    { chatID: 151, text: "...", callback: "case_ranch5" }
                ]
            },
            {
                chatID: 151,
                speaker: "cop2",
                text: "Veronica?!?!?!?!?!?",
                button: [
                    { chatID: 152, text: "Veronica?", callback: "case_ranch6" }
                ]
            },
            {
                chatID: 152,
                speaker: "ppgirl",
                text: "Daddy!!! Oh my god!! They kidnapped me and had me tied up all this time! Please get " +
                    "me out of here daddy! I don't want to me here any longer!!! Please let me go!!",
                button: [
                    { chatID: 153, text: "ohh...", callback: "" }
                ]
            },
            {
                chatID: 153,
                speaker: "cop2",
                text: "*into his radio* I need all units at " + sc.n("rachel") + "'s ranch. We have a 207, 261 " +
                    "and I don't know how many other crimes. Get me all units down here now!!!",
                button: [
                    { chatID: 154, text: "oh yeah!", callback: "case_ranch7" }
                ]
            },
            {
                chatID: 154,
                speaker: "missy",
                text: "Great work in there! So it turns out the girl you call " + sc.n("ppgirl") + "'s real " +
                    "name is Veronica, that fat cop's daughter. I'm hoping this is what the department needs " +
                    "to start taking the cult more seriously, but I'm not going to hold my breath. ",
                button: [
                    { chatID: 155, text: "What about the girls ma'am?", callback: "" }
                ]
            },
            {
                chatID: 155,
                speaker: "missy",
                text: "They herded them into the forest when we started up the road. All the girls execpt " +
                    "one has been accounted for. Some girl named " + sc.n("kinsey") + " make a run for it " +
                    "and was able to get away. The rest will be at the hospital for a bit for evaluations and " +
                    "treatment. ",
                button: [
                    { chatID: 156, text: "So what happens to the ranch now ma'am? ", callback: "" }
                ]
            },
            {
                chatID: 156,
                speaker: "missy",
                text: "Hard to say, but it's out of our hands now. Unfortunately I wasn't able to find a direct " +
                    "link to the cult. Simply having members working here isn't enough. You did good here kid, really " +
                    "good. But what is going on at this ranch is nothing compared to the cult. I know it was rough, " +
                    "so I'm going to give $1,000, mostly from my own pocket as a thank you. Now let's get ready to take " +
                    "down the cult! ",
                button: [
                    { chatID: -1, text: "Yes ma'am!!!", callback: "case_ranch_endcheck" }
                ]
            },
            {
                chatID: 157,
                speaker: "me",
                text: "Ma'am, just one thing. I've got to go in and grab some of my stuff I left back in my " +
                    "stall. Is that ok? ",
                button: [
                    { chatID: 158, text: "[I've got to get my jars!]", callback: "" }
                ]
            },
            {
                chatID: 158,
                speaker: "missy",
                text: "I'm sure the police are too disorganized to notice you walking around an active crime " +
                    "scene. Go ahead. ",
                button: [
                    { chatID: 159, text: "...", callback: "case_ranch_cumjars" }
                ]
            },
            {
                chatID: 159,
                speaker: "me",
                text: "Hello my beautiful collection of cum jars. You thought I left you, didn't you. Don't " +
                    "worry " + gender.pronoun("mommy") + " has come back for you. Now to get out of this place!  ",
                button: [
                    { chatID: -1, text: "...", callback: "case_ranchEnd" }
                ]
            },
            {
                chatID: 160,
                speaker: "missy",
                text: "Now that the carnival has been destroyed the clown clan has been spotted in the sewers. " +
                    "To be honest, I could not care less if they stay down there until they're old and rotten, but " +
                    "they're holding something that may be important to taking down the C.U.M. Cult! ",
                button: [
                    { chatID: 161, text: "Yes ma'am?", callback: "" }
                ]
            },
            {
                chatID: 161,
                speaker: "missy",
                text: "One of my informants told me that the cult sent the clan a box. A red box with a ribbon. " +
                    "I don't know what's in the box, which is why I need you to go get it. It seems the box is " +
                    "important for their next step. Since I don't know what's in it, I need you to go get it. ",
                button: [
                    { chatID: 162, text: "Where in the sewer is it ma'am?", callback: "" }
                ]
            },
            {
                chatID: 162,
                speaker: "missy",
                text: "I don't know. You'll need to search the sewer until you find it. Now the Clown Clan is down " +
                    "there so you need to be ready for anything. They may fight you, or they may fuck you. You're " +
                    "training has lead you to this moment. I know you can take their cocks, but you also need to " +
                    "be ready to take their fists, and fist them back! Got it? ",
                button: [
                    { chatID: 163, text: "Yes ma'am!", callback: "" }
                ]
            },
            {
                chatID: 163,
                speaker: "missy",
                text: "Now to get to the sewers you'll need to talk to Dale. Dale's tent is in the homeless camp next " +
                    "door. He's a great informant, but a little crazy. He'll give you anything you need to get into " +
                    "the sewer. I do know the best place to drop in is in the alley next to the club. Dale will help " +
                    "get you in. Any questions? ",
                button: [
                    { chatID: -1, text: "No ma'am. Talk to Dale, go into the sewer and find the box. ", callback: "case_sewer_start" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
