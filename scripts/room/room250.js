//Room name
var room250 = {};
room250.main = function () {
    if (g.pass === "working") {
        g.pass = "";
        if (sc.getstep("jeffery") === 3) {
            nav.bg("250_beaver/wait1.jpg");
            zcl.displayMain(50, 950, .17, "panties shirt pants socks shoes bra", false);
            chat(12, 250);
        }
        else {
            var tempVar;
            g.pass = [1, 2, 3, 4];
            g.pass.splice(Math.floor(Math.random() * g.pass.length), 1);
            g.pass.splice(Math.floor(Math.random() * g.pass.length), 1);
            if (Math.floor(Math.random() * 2) === 0) {
                tempVar = g.pass[0];
                g.pass[0] = g.pass[1];
                g.pass[1] = tempVar;
            }

            room250.btnclick(g.pass[0].toString());
        }
    }
    else if (g.isNight()) {
        var jefferyStep = sc.getstep("jeffery");
        if (jefferyStep === 9 || jefferyStep === 10) {
            nav.bg("250_beaver/outside.jpg");
            nav.buildnav([0]);
            chat(107, 250);
        }
        else {
            nav.bg("250_beaver/outside.jpg");
            nav.buildnav([0]);
            chat(106, 250);
        }
    }
    else if (cl.isLewd()) {
        if (!sc.checkevent("holly", -1) && sc.getstep("dolly") >= 3) {
            if (sc.getstep("dolly") < 4) {
                nav.button({
                    "type": "img",
                    "name": "s1",
                    "left": 930,
                    "top": 99,
                    "width": 753,
                    "height": 981,
                    "image": "250_beaver/s1.png"
                }, 250);
                chat(100, 250);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "s1",
                    "left": 939,
                    "top": 0,
                    "width": 557,
                    "height": 1080,
                    "image": "250_beaver/s4.png"
                }, 250);
                chat(105, 250);
            }
        }
        else {
            nav.button({
                "type": "img",
                "name": "hollyStand",
                "left": 1094,
                "top": 77,
                "width": 540,
                "height": 1003,
                "image": "250_beaver/holly_stand_mad.png"
            }, 250);
            chat(99, 250);
        }
    }
    else {
        var btnList = sc.checkevent("holly", -1) ?
            [{
                "type": "btn",
                "name": "hollyStand",
                "left": 1094,
                "top": 77,
                "width": 540,
                "height": 1003,
                "image": "250_beaver/holly_stand_mad.png"
            }]
            :
            [{
                "type": "btn",
                "name": "hollyStand",
                "left": 1104,
                "top": 81,
                "width": 432,
                "height": 999,
                "image": "250_beaver/holly_stand.png"
            }];

        var navList = [0];
        $.each(btnList, function (i, v) {
            nav.button(v, 250);
        });
        nav.buildnav(navList);
    }
};

room250.btnclick = function (name) {
    switch (name) {
        case "1":
            nav.bg("250_beaver/wait1.jpg");
            zcl.displayMain(50, 950, .17, "panties shirt pants socks shoes bra", false);
            g.pass.shift();
            chat(19, 250);
            break;
        case "2":
            nav.bg("250_beaver/wait2.jpg");
            zcl.displayMain(50, 950, .17, "panties shirt pants socks shoes bra", false);
            g.pass.shift();
            chat(21, 250);
            break;
        case "3":
            nav.bg("250_beaver/wait3.jpg");
            zcl.displayMain(50, 950, .17, "panties shirt pants socks shoes bra", false);
            g.pass.shift();
            chat(26, 250);
            break;
        case "4":
            nav.bg("250_beaver/wait4.jpg");
            zcl.displayMain(50, 950, .17, "panties shirt pants socks shoes bra", false);
            g.pass.shift();
            if (sc.getstep("spanky") < 3) {
                chat(27, 250);
            }
            else
                chat(35, 250);
            break;
        case "hollyStand":
            var jefferyStep = sc.getstep("jeffery");
            if (g.get("jobapplybeaver") === 1) {
                chat(5, 250);
            }
            else if (jefferyStep === 0 || jefferyStep === 2) {
                chat(0, 250);
            }
            else if (jefferyStep === 3) {
                if (g.hourBetween(7, 10)) {
                    chat(10, 250);
                }
                else {
                    chat(8, 250);
                }
            }
            else if (jefferyStep === 4) {
                chat(17, 250);
            }
            else if (jefferyStep === 5) {
                if (g.hourBetween(6, 11))
                    chat(18, 250);
                else
                    chat(0, 250);
            }
            else if (jefferyStep > 7) {
                if (g.hourBetween(6, 11)) {
                    if (sc.checkevent("holly", -1)) {
                        chat(74, 250);
                    }
                    else {
                        chat(73, 250);
                    }
                }
                else {
                    if (sc.checkevent("holly", -1)) {
                        chat(77, 250);
                    }
                    else {
                        chat(76, 250);
                    }
                }
            }
            break;
        case "kshelf":
            nav.killall();
            nav.bg("250_beaver/k_shelves.jpg")
            nav.button({
                "type": "btn",
                "name": "k1",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 250);
            chat(110, 250);
            break;
        case "kdesk":
            nav.killall();
            nav.bg("250_beaver/k_desk.jpg")
            nav.button({
                "type": "btn",
                "name": "k1",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 250);
            chat(111, 250);
            break;
        case "kdrawer1":
            nav.killall();
            nav.bg("250_beaver/k_drawer1.jpg");
            nav.button({
                "type": "btn",
                "name": "k1",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 250);
            if (!cl.hasClothing("panties", "w")) {
                nav.button({
                    "type": "btn",
                    "name": "kpanties",
                    "left": 464,
                    "top": 365,
                    "width": 942,
                    "height": 461,
                    "image": "250_beaver/k_panties.png"
                }, 250);
                chat(112, 250);
            }
            else {
                chat(113, 250);
            }
            if (!inv.has("kkey")) {
                nav.button({
                    "type": "btn",
                    "name": "kkey",
                    "left": 489,
                    "top": 807,
                    "width": 156,
                    "height": 118,
                    "image": "250_beaver/kkey.png"
                }, 250);
            }
            break;
        case "kdrawer2":
            if (inv.has("kkey")) {
                nav.killall();
                nav.bg("250_beaver/k_drawer2.jpg");
                nav.button({
                    "type": "btn",
                    "name": "kbookcum",
                    "left": 989,
                    "top": 201,
                    "width": 526,
                    "height": 693,
                    "image": "250_beaver/k_drawercum.png"
                }, 250);
                nav.button({
                    "type": "btn",
                    "name": "kemployee",
                    "left": 473,
                    "top": 201,
                    "width": 602,
                    "height": 698,
                    "image": "250_beaver/k_draweremployee.png"
                }, 250);
                nav.button({
                    "type": "btn",
                    "name": "k1",
                    "left": 1700,
                    "top": 800,
                    "width": 160,
                    "height": 160,
                    "image": "6_computer/back.png"
                }, 250);
            }
            else {
                chat(115, 250);
            }
            break;
        case "kbookcum":
            nav.killbutton("kbookcum");
            g.internal = 0;
            nav.button({
                "type": "img",
                "name": "cumbook",
                "left": 34,
                "top": 15,
                "width": 1852,
                "height": 1051,
                "image": "250_beaver/cum_0.png"
            }, 250);
            nav.button({
                "type": "btn",
                "name": "cumnext",
                "left": 1621,
                "top": 854,
                "width": 195,
                "height": 154,
                "image": "250_beaver/cum_next.png"
            }, 250);
            nav.button({
                "type": "btn",
                "name": "kdrawer2",
                "left": 880,
                "top": 15,
                "width": 160,
                "height": 160,
                "image": "250_beaver/cum_close.png"
            }, 250);
            break;
        case "cumnext":
            g.internal++;
            room250.btnclick("cumdraw");
            break;
        case "cumprev":
            g.internal--;
            room250.btnclick("cumdraw");
            break;
        case "cumdraw":
            if (g.internal < 0)
                g.internal = 0;
            else if (g.internal > 6)
                g.internal = 6;

            if (g.internal === 0) {
                nav.killbutton("cumprev");
            }
            else if (g.internal === 1) {
                nav.killbutton("cumprev");
                nav.button({
                    "type": "btn",
                    "name": "cumprev",
                    "left": 108,
                    "top": 860,
                    "width": 188,
                    "height": 153,
                    "image": "250_beaver/cum_prev.png"
                }, 250);
            }
            else if (g.internal === 5) {
                nav.killbutton("cumnext");
                nav.button({
                    "type": "btn",
                    "name": "cumnext",
                    "left": 1621,
                    "top": 854,
                    "width": 195,
                    "height": 154,
                    "image": "250_beaver/cum_next.png"
                }, 250);
            }
            else if (g.internal === 6) {
                nav.killbutton("cumnext");
            }
            nav.modbutton("cumbook", "250_beaver/cum_" + g.internal + ".png", null, null);
            break;
        case "kemployee":
            nav.killall();
            nav.bg("250_beaver/k_drawer2_e0.jpg");
            nav.button({
                "type": "btn",
                "name": "kdrawer2",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 250);
            sc.setstep("jeffery", 10);
            chat(116, 250);
            break;
        case "kpanties":
            nav.killbutton("kpanties");
            cl.add("panties", "w");
            g.popUpNotice("You've stolen your dirty panties back. ");
            break;
        case "kkey":
            chat(114, 250);
            nav.killbutton("kkey");
            inv.add("kkey");
            break;
        case "k1":
            nav.killall();
            room250.chatcatch("k1");
            break;
        case "kexit":
            char.room(0);
            break;
        default:
            break;
    }
};

room250.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        case "pizza":
            if (g.get("money") < 18) {
                chat(3, 250);
            }
            else {
                nav.killall();
                nav.bg("250_beaver/pizza.jpg");
                g.internal = "pizza";
                sc.checkevent("holly", -1) ? chat(78, 250) : chat(2, 250);
            }
            break;
        case "burger":
            if (g.get("money") < 15) {
                chat(3, 250);
            }
            else {
                nav.killall();
                nav.bg("250_beaver/burger.jpg");
                g.internal = "burger";
                sc.checkevent("holly", -1) ? chat(78, 250) : chat(2, 250);
            }
            break;
        case "tea":
            if (g.get("money") < 8) {
                chat(3, 250);
            }
            else {
                nav.killall();
                nav.bg("250_beaver/tea.jpg");
                g.internal = "tea";
                sc.checkevent("holly", -1) ? chat(78, 250) : chat(2, 250);
            }
            break;
        case "eat":
            switch (g.internal) {
                case "pizza":
                    g.mod("energy", 200);
                    g.mod("money", -18);
                    break;
                case "burger":
                    g.mod("energy", 100);
                    g.mod("money", -15);
                    break;
                case "tea":
                    g.mod("energy", 50);
                    g.mod("money", -8);
                    break;
            }
            break;
        case "leave":
            char.room(0);
            break;
        case "jeffery2":
            g.set("jobapplybeaver", 2);
            break;
        case "backOffice":
            g.pass = "firstmeet";
            char.room(251);
            break;
        case "backOffice1":
            g.pass = "work";
            char.room(251);
            break;
        case "cockfall":
            cl.c.panties = null;
            if (cl.c.cock < 2) {
                cl.display();
                zcl.displayMain(50, 1000, .17, "panties shirt pants socks shoes bra", false);
                chat(15, 250);
            }
            else {
                chat(97, 250);
            }
            break;
        case "cockLeave":
            nav.killbutton("zzz-clothing-kill");
            nav.bg("250_beaver/cock.jpg");
            break;
        case "stageRight":
            g.pass = "initcock";
            char.room(251);
            break;
        case "stageRightx":
            g.pass = "initcockx";
            char.room(251);
            break;
        case "getbent":
            nav.kill("zzz-clothing-kill");
            nav.button({
                "type": "img",
                "name": "getbent",
                "left": 913,
                "top": 507,
                "width": 586,
                "height": 573,
                "image": "250_beaver/bent.png"
            }, 250);
            if (sc.getstep("jones") === 0) {
                sc.setstep("jones", 1);
                g.roomMapAccess(150, true, true);
                chat(85, 250);
            }
            else
                chat(93, 250);
            break;
        case "wait2a":
            nav.killbutton("getbent");
            nav.bg("250_beaver/wait2a.jpg");
            break;
        case "wait2b":
            scc.love("jones", 5, 100);
            nav.bg("250_beaver/wait2b.jpg");
            break;
        case "wait2c":
            nav.bg("250_beaver/wait2c.jpg");
            if (sc.getstep("jones") === 0)
                chat(88, 250);
            break;
        case "unbent":
            nav.kill("getbent");
            zcl.displayMain(50, 950, .17, "panties shirt pants socks shoes bra", false);
            break;
        case "break10":
            if (sc.checkevent("holly", -1))
                g.mod("money", 2);
            else
                g.mod("money", 10);
            room250.chatcatch("checkHalftime");
            break;
        case "break20":
            if (sc.checkevent("holly", -1))
                g.mod("money", 4);
            else
                g.mod("money", 20);
            room250.chatcatch("checkHalftime");
            break;
        case "break40":
            if (sc.checkevent("holly", -1))
                g.mod("money", 5);
            else
                g.mod("money", 40);
            room250.chatcatch("checkHalftime");
            break;
        case "breakSpanky":
            sc.setstep("spanky", 3);
            g.mod("money", 20);
            room250.chatcatch("checkHalftime");
            break;
        case "checkHalftime":
            if (g.pass.length === 1) {
                sc.checkevent("holly", 3) ? room250.chatcatch("halftimeShowContinue") : room250.chatcatch("halftimeShow");
            }
            else {
                g.pass = "FinishLoop";
                char.room(251);
            }
            break;
        case "halftimeShowContinue":
            char.addtime(240);
            nav.killall();
            nav.bg("250_beaver/250_barSide.jpg");
            var randPick = Math.floor(Math.random() * 3);
            switch (randPick) {
                case 0:
                    if (sc.checkevent("holly", -1)) {
                        nav.button({
                            "type": "img",
                            "name": "kill_olly",
                            "left": 753,
                            "top": 41,
                            "width": 558,
                            "height": 1039,
                            "image": "250_beaver/holly_side_angry.png"
                        }, 250);
                        chat(79, 250);
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "kill_olly",
                            "left": 964,
                            "top": 28,
                            "width": 483,
                            "height": 1052,
                            "image": "250_beaver/side_holly.png"
                        }, 250);
                        chat(80, 250);
                    }
                    break;
                case 1:
                    if (sc.checkevent("holly", -1)) {
                        nav.button({
                            "type": "img",
                            "name": "kill_olly",
                            "left": 753,
                            "top": 41,
                            "width": 558,
                            "height": 1039,
                            "image": "250_beaver/dolly_side_angry.png"
                        }, 250);
                        chat(81, 250);
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "kill_olly",
                            "left": 886,
                            "top": 0,
                            "width": 812,
                            "height": 1080,
                            "image": "250_beaver/side_dolly.png"
                        }, 250);
                        chat(82, 250);
                    }
                    break;
                case 2:
                    if (sc.checkevent("holly", -1)) {
                        nav.button({
                            "type": "img",
                            "name": "kill_olly",
                            "left": 753,
                            "top": 41,
                            "width": 558,
                            "height": 1039,
                            "image": "250_beaver/molly_side_angry.png"
                        }, 250);
                        chat(83, 250);
                    }
                    else {
                        nav.button({
                            "type": "img",
                            "name": "kill_olly",
                            "left": 886,
                            "top": 0,
                            "width": 812,
                            "height": 1080,
                            "image": "250_beaver/side_molly.png"
                        }, 250);
                        chat(84, 250);
                    }
                    break;
                default:
                    console.log("miss char");
                    break;
            }
            break;
        case "halftimeShow":
            char.addtime(240);
            nav.killall();
            nav.bg("250_beaver/250_barSide.jpg");
            var hol = sc.getstep("holly");
            var dol = sc.getstep("dolly");
            var mol = sc.getstep("molly");

            console.log(hol, dol, mol);
            if (hol === 2 || mol === 2 || dol === 2) {
                nav.button({
                    "type": "img",
                    "name": "kill_olly",
                    "left": 520,
                    "top": 36,
                    "width": 1381,
                    "height": 1044,
                    "image": "250_beaver/all3.png"
                }, 250);
                chat(64, 250);
            }
            else if (hol < 3 && dol < 3 && mol < 3) {
                var pushentry = new Array();
                if (hol === 0 || dol === 0 || mol === 0) {
                    if (hol === 0)
                        pushentry.push("holly");
                    if (dol === 0)
                        pushentry.push("dolly");
                    if (mol === 0)
                        pushentry.push("molly");
                }
                else {
                    if (hol === 1)
                        pushentry.push("holly");
                    if (dol === 1)
                        pushentry.push("dolly");
                    if (mol === 1)
                        pushentry.push("molly");
                }
                console.log(pushentry);

                while (pushentry.length > 1) {
                    pushentry.splice(Math.floor(Math.random() * pushentry.length), 1);
                }
                console.log(pushentry);
                switch (pushentry[0]) {
                    case "holly":
                        room250.chatcatch("side_holly");
                        var hollyStep = sc.getstep("holly");
                        if (hollyStep === 0)
                            chat(36, 250);
                        else if (hollyStep === 1)
                            chat(42, 250);
                        break;
                    case "dolly":
                        room250.chatcatch("side_dolly");
                        var dollyStep = sc.getstep("dolly");
                        if (dollyStep === 0)
                            chat(46, 250);
                        else if (dollyStep === 1)
                            chat(51, 250);
                        break;
                    case "molly":
                        room250.chatcatch("side_molly");
                        var mollyStep = sc.getstep("molly");
                        if (mollyStep === 0)
                            chat(55, 250);
                        else if (mollyStep === 1)
                            chat(61, 250);
                        break;
                }
            }


            break;
        case "side_holly":
            nav.button({
                "type": "img",
                "name": "kill_olly",
                "left": 964,
                "top": 28,
                "width": 483,
                "height": 1052,
                "image": "250_beaver/side_holly.png"
            }, 250);
            break;
        case "hollymad":
            nav.kill("holly");
            nav.button({
                "type": "img",
                "name": "kill_olly",
                "left": 753,
                "top": 41,
                "width": 558,
                "height": 1039,
                "image": "250_beaver/holly_side_angry.png"
            }, 250);
            break;
        case "side_dolly":
            nav.button({
                "type": "img",
                "name": "kill_olly",
                "left": 886,
                "top": 0,
                "width": 812,
                "height": 1080,
                "image": "250_beaver/side_dolly.png"
            }, 250);
            break;
        case "dollymad":
            nav.kill("dolly");
            nav.button({
                "type": "img",
                "name": "kill_olly",
                "left": 753,
                "top": 41,
                "width": 558,
                "height": 1039,
                "image": "250_beaver/dolly_side_angry.png"
            }, 250);
            break;
        case "side_molly":
            nav.button({
                "type": "img",
                "name": "kill_olly",
                "left": 886,
                "top": 0,
                "width": 812,
                "height": 1080,
                "image": "250_beaver/side_molly.png"
            }, 250);
            break;
        case "fail":
            room250.chatcatch("resetServing");
            break;
        case "hollysuccess":
            if (sc.getstep("holly") < 2)
                sc.incstep("holly", 1);
            room250.chatcatch("resetServing");
            break;
        case "dollysuccess":
            if (sc.getstep("dolly") < 2)
                sc.incstep("dolly", 1);
            room250.chatcatch("resetServing");
            break;
        case "mollysuccess":
            if (sc.getstep("molly") < 2)
                sc.incstep("molly", 1);
            room250.chatcatch("resetServing");
            break;
        case "mollymad":
            nav.killbutton("molly");
            nav.killbutton("kill_olly");
            nav.button({
                "type": "img",
                "name": "molly",
                "left": 753,
                "top": 41,
                "width": 558,
                "height": 1039,
                "image": "250_beaver/molly_side_angry.png"
            }, 250);
            break;
        case "allSuccess":
            sc.setstep("dolly", 3);
            sc.setstep("holly", 3);
            sc.setstep("molly", 3);
            sc.setstep("jeffery", 6);
            room250.chatcatch("resetServing");
            break;
        case "resetServing":
            nav.kill("kill_olly");
            room250.btnclick(g.pass[0].toString());
            break;
        case "dollytip":
            g.mod("money", 25);
            room250.chatcatch("resetServing");
            break;
        case "s2":
            nav.modbutton("s1", "250_beaver/s2.png", null, null);
            break;
        case "s3":
            nav.killbutton("s1");
            break;
        case "s4":
            nav.button({
                "type": "img",
                "name": "s1",
                "left": 939,
                "top": 0,
                "width": 557,
                "height": 1080,
                "image": "250_beaver/s4.png"
            }, 250);
            break;
        case "s5":
            nav.killbutton("s1");
            nav.button({
                "type": "img",
                "name": "s1",
                "left": 886,
                "top": 0,
                "width": 812,
                "height": 1080,
                "image": "250_beaver/side_dolly.png"
            }, 250);
            g.mod("energy", 1000);
            g.mod("loadSwollowed", 1);
            break;
        case "s6":
            sc.setstep("dolly", 4);
            char.addtime(60);
            char.room(0);
            break;
        case "s7":
            g.mod("energy", 1000);
            g.mod("loadSwollowed", 1);
            char.addtime(60);
            char.room(0);
            break;
        case "k0":
            nav.killall();
            nav.bg("250_beaver/bathroomNight.jpg");
            break;
        case "k1":
            nav.killall();
            nav.bg("250_beaver/officeNight.jpg");
            nav.button({
                "type": "btn",
                "name": "kdrawer1",
                "left": 706,
                "top": 277,
                "width": 196,
                "height": 173,
                "image": "250_beaver/k_drawer.png"
            }, 250);
            nav.button({
                "type": "btn",
                "name": "kdrawer2",
                "left": 226,
                "top": 663,
                "width": 196,
                "height": 173,
                "image": "250_beaver/k_drawer.png"
            }, 250);
            nav.button({
                "type": "btn",
                "name": "kshelf",
                "left": 1045,
                "top": 0,
                "width": 214,
                "height": 241,
                "image": "250_beaver/k_shelves.png"
            }, 250);
            nav.button({
                "type": "btn",
                "name": "kdesk",
                "left": 777,
                "top": 477,
                "width": 405,
                "height": 339,
                "image": "250_beaver/k_desk.png"
            }, 250);
            nav.button({
                "type": "btn",
                "name": "kexit",
                "left": 1700,
                "top": 920,
                "width": 218,
                "height": 88,
                "image": "475_fight/exit.png"
            }, 250);
            break;
        case "kdrawer2map":
            nav.bg("250_beaver/k_drawer2_e1.jpg");
            break;
        default:
            break;
    }
};

room250.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "holly",
            text: "Hi sir, would you like a table?",
            button: [
                { chatID: 1, text: "Yes", callback: "sit" },
                { chatID: -1, text: "No, Just wandering around I guess", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "holly",
            text: "What would you like to eat? We have<br/>" +
                "$18 Pizza [+200 energy]<br/>" +
                "$15 Hamburger [+100 energy]<br/>" +
                "$8 Biscuits and Tea [+50 energy]",
            button: [
                { chatID: -1, text: "Pizza!", callback: "pizza" },
                { chatID: -1, text: "Hamburger!", callback: "burger" },
                { chatID: -1, text: "Biscuits and Tea please", callback: "tea" },
                { chatID: -1, text: "Never mind, I'm not hungry. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "holly",
            text: "Enjoy!",
            button: [
                { chatID: 4, text: "Eat up!", callback: "eat" }
            ]
        },
        {
            chatID: 3,
            speaker: "holly",
            text: "Sorry, it doesn't look like you have enough money.",
            button: [
                { chatID: -1, text: "Oh, I'm an idiot.", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Yummy!",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 5,
            speaker: "holly",
            text: "You're here for the Naked Beaver waitress position?",
            button: [
                { chatID: 6, text: "Yes, I applied online.", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "holly",
            text: "You know you're not a girl right? You can't be a waitress as a boy silly.",
            button: [
                { chatID: 7, text: "I can be a waiter", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "holly",
            text: "You have to be a girl to work at the Naked Beaver.. sorry honey.",
            button: [
                { chatID: -1, text: "Oh ", callback: "jeffery2" }
            ]
        },
        {
            chatID: 8,
            speaker: "holly",
            text: "hi honey, what can I do for you?",
            button: [
                { chatID: 9, text: "I'm the new waitress ", callback: "" },
                { chatID: 1, text: "I came to get something to eat.", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "holly",
            text: "No you're not, or you would know " + sc.n("jeffery") + " only interviews in the morning before 10AM. ",
            button: [
                { chatID: -1, text: "Oh I guess I'll come back tomorrow. " , callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "holly",
            text: "hi honey, what can I do for you?",
            button: [
                { chatID: 11, text: "I'm the new waitress ", callback: "" },
                { chatID: 1, text: "I came to get something to eat.", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "holly",
            text: "Oh, I thought you would have a beaver.. oh well " + sc.n("jeffery") + "'s in the back office",
            button: [
                { chatID: -1, text: "Thank you [Go to the back office]", callback: "backOffice" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "Hi welcome to the Naked Beaver, can I take your order?",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "random",
            text: "I hope so! I've been waiting here for over 10 minutes for you to take my order! This place always has the " +
                "worse service in town!",
            button: [
                { chatID: 14, text: "I uh...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "random",
            text: "And another thing, you are the weirdest looking waitress I have ever seen!",
            button: [
                { chatID: -1, text: "What?", callback: "cockfall" }
            ]
        },
        {
            chatID: 15,
            speaker: "random",
            text: "OMG is that your cock hanging out! You're sooooo disgusting! I'm never coming here again!",
            button: [
                { chatID: 16, text: "Oh crap!", callback: "cockLeave" }
            ]
        },
        {
            chatID: 16,
            speaker: "jeffery",
            text: sc.n("me") + " what are you doing! Report to my office. ",
            button: [
                { chatID: -1, text: "Comming", callback: "stageRight" }
            ]
        },
        {
            chatID: 17,
            speaker: "holly",
            text: sc.n("jeffery") + "'s really mad, he said you can't work here.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "holly",
            text: "Hey sugar what can I do for you?",
            button: [
                { chatID: -1, text: "I've come to work. ", callback: "backOffice1" },
                { chatID: 1, text: "I came to get something to eat.", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "random",
            text: "Ugh.... you again.. fine take my order degenerate",
            button: [
                { chatID: 20, text: "Take her order and deliver her food.", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "random",
            text: "I don't know why I eat here your service is as terrible as the food ",
            button: [
                { chatID: -1, text: "[Finish her order]", callback: "break10" }
            ]
        },
        {
            chatID: 21,
            speaker: "jones",
            text: "Oh hey pretty lady, I think I dropped my napkin, could you get it for me?",
            button: [
                { chatID: -1, text: "Sure!", callback: "getbent" },
                { chatID: 24, text: "Get it yourself..", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "jones",
            text: "You are the prettiest waitress ever and so obedient",
            button: [
                { chatID: 23, text: "...", callback: "unbent" }
            ]
        },
        {
            chatID: 23,
            speaker: "jones",
            text: "If you catch me at the bar, I'll buy you a drink!",
            button: [
                { chatID: -1, text: "Deal [Take order]", callback: "break40" }
            ]
        },
        {
            chatID: 24,
            speaker: "jones",
            text: "You're as exciting as an old grape.",
            button: [
                { chatID: -1, text: "Well... your face! [Take order]", callback: "break10" }
            ]
        },
        {
            chatID: 25,
            speaker: "random",
            text: "Hello, I'm incredibly rich and boring. My personality is like a saltine cracker",
            button: [
                { chatID: -1, text: "ok [Take order]", callback: "break20" }
            ]
        },
        {
            chatID: 26,
            speaker: "random",
            text: "Hello, I'm incredibly rich and boring. My personality is like a saltine cracker",
            button: [
                { chatID: -1, text: "ok [Take order]", callback: "break20" }
            ]
        },
        {
            chatID: 27,
            speaker: "spanky",
            text: "Oh hey dude, I didn't know you liked to dress like a chick.",
            button: [
                { chatID: 28, text: "Oh, I had to", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "spanky",
            text: "It's cool bro... I mean bro-ette, some of my best customers dress like chicks, too. Some of them have " +
            "truly excellent boobs, and what's better is that they like showing them off. I love big titties! All chicks " +
                "should show them boobies, know what I mean?",
            button: [
                { chatID: 29, text: "Yeah, totally", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "spanky",
            text: "Soooooo, are you cool, man?",
            button: [
                { chatID: 30, text: "uh.. yeah, sure", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "spanky",
            text: "Ha ha ha, any dude that dresses like a chick is cool.. I sell some pills that will get you big titties, " +
            "I'll sell some to you if you come by. My guy says to just take one a day, for you I'll give you a good deal " +
                "cool?",
            button: [
                { chatID: 34, text: "Cool", callback: "" },
                { chatID: 31, text: "Tell me more about these pills", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "spanky",
            text: "Dude, my guy told me the are like whore moans. Like dudes take them when they don't want to be dudes anymore. " +
            "My buddy says you can take more, but it doesn't do anything, so he says just take one a day. His drug man says it still " +
            "not totally ready, and work in a weird way, but all my customers says they're great and keep taking them. " +
            "I know they work 'cause those dudes have some great titties, ya know. The king you want to juggle around.",
            button: [
                { chatID: 32, text: "oh, ok", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "spanky",
            text: "Yeah one of the dudes says his dick shrunk up to the size of a penny, but his titties are huge! This one time " +
            "this big titty dude comes in and just flashes me to show how awesome his titties are, just bare ass chest in my face. " +
            "I don't care, 'cause titties, so I just start sucking them expecting that at any minute he's going to slap me, but get this " +
            "he just lets me suck on them titties and shit, just letting me go to town, so I think what the hell and I slide my hand into " +
            "into his pants and this bitch has no panties, so guess what",
            button: [
                { chatID: 33, text: "what?", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "spanky",
            text: "He starts moaning like a bitch in heat, so I'm like, what the hell and press my finger into his butt-hole and he's all " +
            "like twerking on my finger, so I go what the hell and whip out my dick. This crazy bitch drops down and starts sucking my " +
            "dick then turns around and shoves it right in his ass hole, no lube or nothin', just shoves it in and start fucking me like " +
            "I'm the last dick on earth. That bitch was the best fuck I ever had. If you want them pills I got some",
            button: [
                { chatID: 34, text: "oh..", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "spanky",
            text: "You seen where I work, just come by and get some, I'll give you a good price bro. Oh and get me some chicken wings",
            button: [
                { chatID: -1, text: "sweet! [get his chicken wings]", callback: "breakSpanky" }
            ]
        },
        {
            chatID: 35,
            speaker: "spanky",
            text: "It's my favorite dude-ette. get me some of them chicken wings bro ",
            button: [
                { chatID: -1, text: "[get his chicken wings]", callback: "break20" }
            ]
        },
        {
            chatID: 36,
            speaker: "holly",
            text: "Hey new waitress, what's your name?",
            button: [
                { chatID: 38, text: sc.n("me") + "-y ... shit that's not my name, I'm " + sc.n("me") + ", and I'm really a boy.", callback: "" },
                { chatID: 37, text: "My name is waitress-fucker. Want me to show you how I got my name?", callback: "hollymad" },
                { chatID: 37, text: "I'm not a chick, and my cock is huge, we should go somewhere private", callback: "hollymad" }
            ]
        },
        {
            chatID: 37,
            speaker: "holly",
            text: "I don't think so!",
            button: [
                { chatID: -1, text: "oh....", callback: "fail" }
            ]
        },
        {
            chatID: 38,
            speaker: "holly",
            text: "Oh sugar, we know. When you came out of " + sc.n("jeffery") + "'s office we saw your giant pecker sticking out of the " +
            "bottom of your skirt we figured it out! So what do you think of " + sc.n("jeffery") + "?",
            button: [
                { chatID: 37, text: "He's the best boss ever!", callback: "hollymad" },
                { chatID: 37, text: "I think he only hires whores.", callback: "hollymad" },
                { chatID: 39, text: "I kinda got the pervert vibe from him", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "holly",
            text: "I know, he keeps insisting we change in front of him! I thought" + sc.n("dolly") + " was going to punch him! " +
            "Of course none of us ever change with him in the room, you would have to be a total spineless slut to do that!",
            button: [
                { chatID: 40, text: "I would never change in front of him!", callback: "" },
                { chatID: 37, text: "Oh, I don't know about spineless. It's not that bad.", callback: "hollymad" }
            ]
        },
        {
            chatID: 40,
            speaker: "holly",
            text: "I know! He's so disgusting there's no way anyone would get undressed in front of him. He tries everything to " +
            "see us naked! He even offered me $50 for a pair of my panties. You have to be a real weirdo to get a pair of used " +
            "panties. UGH it makes me shiver it's so disgusting. ",
            button: [
                { chatID: 37, text: "I'll give you $50 for your used panties", callback: "hollymad" },
                { chatID: 37, text: "I wonder if he'll give me $50 for my panties", callback: "hollymad" },
                { chatID: 41, text: "You probably don't even wear panties", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "holly",
            text: "You caught me! That's why I work here! I had an unfortunate orgasm discharge in a skirt at my last job and they " +
            "fired me on the spot! I told them it's only natural, but whatever, I didn't like that job. Well I got to get back " +
            "to my tables, bye.",
            button: [
                { chatID: -1, text: "Good talking to you!", callback: "hollysuccess" }
            ]
        },
        {
            chatID: 42,
            speaker: "holly",
            text: "Hey honey! You still working here? " + sc.n("jeffery") + " still hasn't scared you away?",
            button: [
                { chatID: 43, text: "He's the worst, such a pervert", callback: "" },
                { chatID: 37, text: "Shiiiii I scare " + sc.n("jeffery"), callback: "hollymad" },
                { chatID: 37, text: "I kinda like him. He's sweet.", callback: "hollymad" }
            ]
        },
        {
            chatID: 43,
            speaker: "holly",
            text: "So yesterday I caught him smelling a pair of panties then stuffing them in his pocket! I even " +
            "think I saw him licking them!",
            button: [
                { chatID: 37, text: "Hahaha, those were mine!", callback: "hollymad" },
                { chatID: 44, text: "Oh gross, he's so disgusting. I bet if you wore panties he would try to steal those.", callback: "" },
                { chatID: 37, text: "Oh, you sold him a pair of your panties for $50?", callback: "hollymad" }
            ]
        },
        {
            chatID: 44,
            speaker: "holly",
            text: "Another reason not to wear panties. Do you want to know why I don't wear panties? It's because my biggest fantasy " +
            "is some big strong man coming up behind me and just molesting my pussy with his big thick fingers, getting me all wet " +
            "then shoving his cock straight in, all without saying a word.",
            button: [
                { chatID: 37, text: "You're such a slut!", callback: "hollymad" },
                { chatID: 45, text: "That's my fantasy too", callback: "" },
                { chatID: 37, text: "Do you want me to molest you?", callback: "hollymad" }
            ]
        },
        {
            chatID: 45,
            speaker: "holly",
            text: "I can tell girlfriend! Any guy willing to work here has some dirty fantasies! I was kinda worried at first about you, " +
            "but after talking to " + sc.n("molly") + " and " + sc.n("dolly") + " you feel like one of us! ",
            button: [
                { chatID: -1, text: "Awww thank you! I like working with you too!", callback: "hollysuccess" }
            ]
        },
        {
            chatID: 46,
            speaker: "dolly",
            text: "Well butter my biscuits, it looks like we got ourselves a new waitress! How you doin' sugar? ",
            button: [
                { chatID: 47, text: "Well hornswoggle my chimichangas! ", callback: "dollymad" },
                { chatID: 48, text: "I'm doing well", callback: "" },
                { chatID: 47, text: "Oh wow, you're a total hick aren't you? ", callback: "dollymad" }
            ]
        },
        {
            chatID: 47,
            speaker: "dolly",
            text: "I don't want to talk to a big mean-y!",
            button: [
                { chatID: 47, text: "I'm such a fool! ", callback: "fail" }
            ]
        },
        {
            chatID: 48,
            speaker: "dolly",
            text: "I was just chattin' with " + sc.n("holly") + " and she was sayin' you was the boy that had the little incident " +
            "here the other day. Bless my heart I wouldn't have the gumption to show my face to the world if that happened to me!",
            button: [
                { chatID: 49, text: "Well I really need the money for rent ", callback: "" },
                { chatID: 47, text: "You don't have to show your face when I fuck you from behind.", callback: "dollymad" },
                { chatID: 47, text: "I have the gumption to show you my cock!", callback: "dollymad" }
            ]
        },
        {
            chatID: 49,
            speaker: "dolly",
            text: "Oh honey.. I know it's hard to pay your rent, but you're cute, I'm sure you'll be taking in all the tips from " +
            "all the pretty girls that come in here. Just keep working hard!",
            button: [
                { chatID: 50, text: "You think I'm cute?", callback: "" },
                { chatID: 47, text: "I always work hard, by that I mean my penis is very hard!", callback: "dollymad" },
                { chatID: 47, text: "I'll get more tips than you, 'cause my ass is better.", callback: "dollymad" }
            ]
        },
        {
            chatID: 50,
            speaker: "dolly",
            text: "You're as sweet as candy. Well I've got a table of 7 I've got to get, and they are a hungry bunch! You " +
            "keep a smile on that pretty face of yours!",
            button: [
                { chatID: -1, text: "Thanks, you too!", callback: "dollysuccess" }
            ]
        },
        {
            chatID: 51,
            speaker: "dolly",
            text: "I'm glad to see you're still toughing it out sugar! They just don't pay enough here to cover rent! " +
                "That " + sc.n("jeffery") + " only cares about perving on pretty little things. He doesn't seem to care at all about " +
            "us getting enough to get by.",
            button: [
                { chatID: 47, text: "Did you want to make a few extra bucks, I'll buy your panties?", callback: "dollymad" },
                { chatID: 47, text: sc.n("jeffery") + "'s not a perv, he's really nice.", callback: "dollymad" },
                { chatID: 52, text: "I know, if only there was some way to get some extra money", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "dolly",
            text: "Oh honey, I just give them an extra big smile when I bring out the food and the tips just start rolling in. " +
            "Most people here are really nice to me! I have a few that come in just to see me because they care so much for me. " +
            "They always ask me about my life and what I like. One guy even brought me flowers on my birthday, he's such a great " +
            "friend.",
            button: [
                { chatID: 47, text: "You know that guy wants to fuck you right?", callback: "dollymad" },
                { chatID: 53, text: "I should try smiling too!", callback: "dollymad" },
                { chatID: 47, text: "It's not your smile, it's your huge tits they like", callback: "dollymad" }
            ]
        },
        {
            chatID: 53,
            speaker: "dolly",
            text: "That's the spirit! My momma always said, \"There's no medicine so sour that a bit of sugar couldn't help\". You know, with " +
            "a little bit of makeup, we could really bring out the big pretty eyes of yours. They're so cute! ",
            button: [
                { chatID: 54, text: "Only if you make my eyes as pretty as yours", callback: "" },
                { chatID: 47, text: "Awesome, can you come over and dress me in pretty outfits too?", callback: "dollymad" },
                { chatID: 47, text: "Is that a pickup line?", callback: "dollymad" }
            ]
        },
        {
            chatID: 54,
            speaker: "dolly",
            text: "Awww shucks! You are such a cutie and you don't even know it! oh well back to serving the tables!",
            button: [
                { chatID: -1, text: "Yeah, back to work.", callback: "dollysuccess" }
            ]
        },
        {
            chatID: 55,
            speaker: "molly",
            text: "Aw shit, you're that new chick with a dick!",
            button: [
                { chatID: 57, text: "Yeah, you want to play with it?", callback: "" },
                { chatID: 56, text: "Want to suck it, whore?", callback: "mollymad" },
                { chatID: 56, text: "I bet my dick is bigger than yours.", callback: "mollymad" }
            ]
        },
        {
            chatID: 56,
            speaker: "molly",
            text: "You can go fuck yourself cock boy",
            button: [
                { chatID: -1, text: "Is that a pickup line?", callback: "fail" }
            ]
        },
        {
            chatID: 57,
            speaker: "molly",
            text: "Oh hahaha, I would, but it looks like it's either tiny or all locked up. So you some kind of cross dresser?",
            button: [
                { chatID: 56, text: "Fuck you.", callback: "mollymad" },
                { chatID: 56, text: "Nope, didn't realize I was wearing girl's clothes", callback: "mollymad" },
                { chatID: 58, text: "I'm only here to scam pervs and weirdos from their money", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "molly",
            text: "Totally, I like a slut that knows who she is. I have one old perv that comes in all the time, he tips me $100 " +
            "to touch my asshole when I take his order. He was my first customer and 'dropped his napkin' and like an idiot I bent over " +
            "to pick it up and showed him my entire asshole. It's cool, he tipped me $50 for it. He's really into assholes. ",
            button: [
                { chatID: 56, text: "That's pretty gross. You shouldn't show some stranger your asshole.", callback: "mollymad" },
                { chatID: 59, text: "He did it to me too! He got a full shot of my ass and cock!", callback: "" },
                { chatID: 56, text: "I would never flash a customer, I have too much class", callback: "mollymad" }
            ]
        },
        {
            chatID: 59,
            speaker: "molly",
            text: "Ohhh I bet he loved that. If you feel him stick his finger in your butt-hole just let him. He's safe and his tips " +
            "are awesome! Not like " + sc.n("jeffery") + " at all! He offered me $10 for my panties! I told him my panties cost like " +
            "$30 new, he was going to have to cough up like $50 for them. So I sold them to him, caught him sniffing them in his office. ",
            button: [
                { chatID: 60, text: "That's awesome! I bet your panties smell like sex!", callback: "" },
                { chatID: 56, text: "Ewwww, gross. He was sniffing your panties, what a loser!", callback: "mollymad" },
                { chatID: 56, text: "You're better than that! You shouldn't be selling your panties.", callback: "mollymad" }
            ]
        },
        {
            chatID: 60,
            speaker: "molly",
            text: "Sex and semen! I had sex with my boyfriend earlier and some of him dripped into my panties on my way to work. " +
            "I bet he even licked them! What an idiot. I got to get back to my tables before my regular loses his boner. You " +
            "stay slutty!",
            button: [
                { chatID: -1, text: "Thanks, you too!", callback: "mollysuccess" }
            ]
        },
        {
            chatID: 61,
            speaker: "molly",
            text: "Hey slut! How's your butt-hole, did he stick his fingers in yet!",
            button: [
                { chatID: 62, text: "I want more than his fingers!", callback: "" },
                { chatID: 56, text: "There's no way I would let him do that!", callback: "mollymad" },
                { chatID: 56, text: "Ewww gross", callback: "mollymad" }
            ]
        },
        {
            chatID: 62,
            speaker: "molly",
            text: "Awww I'm sorry. Just keep showing him your asshole and he'll do it. He's probably just scared. It took him almost 2 " +
            "months before he shoved his fingers into my ass. It took another month before he ate my ass, but that's another story. ",
            button: [
                { chatID: 56, text: "Maybe I should just fart on him?", callback: "mollymad" },
                { chatID: 56, text: "I don't want his dirty fingers in my ass, gross", callback: "mollymad" },
                { chatID: 63, text: "So how do you make extra money around here?", callback: "" }
            ]
        },
        {
            chatID: 63,
            speaker: "molly",
            text: "Oh, hmmmmm.... Maybe after you've been working here a while me and " + sc.n("holly") + " and " + sc.n("dolly") +
            " will show you some tricks. Until then I got to get back and 'accidently flash' one of my regulars",
            button: [
                { chatID: -1, text: "Ok, you keep it slutty!", callback: "mollysuccess" }
            ]
        },
        {
            chatID: 64,
            speaker: "molly",
            text: "Hey slut, we have a proposition for you...",
            button: [
                { chatID: 65, text: "Yes...", callback: "" }
            ]
        },
        {
            chatID: 65,
            speaker: "dolly",
            text: "We know you're having a hard time with rent and we want to help.",
            button: [
                { chatID: 66, text: "ok...", callback: "" }
            ]
        },
        {
            chatID: 66,
            speaker: "holly",
            text: "So.. here's the deal, you think you can keep a secret?",
            button: [
                { chatID: 67, text: "I will keep your secret", callback: "" }
            ]
        },
        {
            chatID: 67,
            speaker: "dolly",
            text: "You see, sugar, the cash register has a secret function; a friend of ours installed it.",
            button: [
                { chatID: 68, text: "...", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "molly",
            text: "So when you fucking push the secret key, it drops the money in the fifth slot below the register. ",
            button: [
                { chatID: 69, text: "...", callback: "" }
            ]
        },
        {
            chatID: 69,
            speaker: "dolly",
            text: "So any money you drop you get to keep!",
            button: [
                { chatID: 70, text: "...", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "holly",
            text: "It's our reward for putting up with " + sc.n("jeffery") + " the pervert. ",
            button: [
                { chatID: 71, text: "...", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "dolly",
            text: "We know how hard making rent is working here, we hope this helps!",
            button: [
                { chatID: 72, text: "Well thank you!", callback: "" }
            ]
        },
        {
            chatID: 72,
            speaker: "molly",
            text: "And get your self something sexy to show off that fine ass of yours!",
            button: [
                { chatID: -1, text: "I will, thank you all so much!", callback: "allSuccess" }
            ]
        },
        {
            chatID: 73,
            speaker: "holly",
            text: "Hey " + sc.n("me") + " what can I do for you?",
            button: [
                { chatID: -1, text: "I've come to work. ", callback: "backOffice1" },
                { chatID: 1, text: "I came to get something to eat.", callback: "" },
                { chatID: -1, text: "I just came to say hi", callback: "" }
            ]
        },
        {
            chatID: 74,
            speaker: "holly",
            text: "Oh it's you! I hate you, we all hate you, you pig!",
            button: [
                { chatID: -1, text: "Sorry, I came to work. ", callback: "backOffice1" },
                { chatID: 1, text: "Get me something to eat.", callback: "" },
                { chatID: 75, text: "I'm sorry, I was paid as a detective to find out where the money was. I didn't mean to hurt you all.", callback: "" }
            ]
        },
        {
            chatID: 75,
            speaker: "holly",
            text: "I don't care. You're an asshole",
            button: [
                { chatID: -1, text: "😞", callback: "" }
            ]
        },
        {
            chatID: 76,
            speaker: "holly",
            text: "Hi " + sc.n("me") + ", come to get something to eat?",
            button: [
                { chatID: 1, text: "Yes", callback: "sit" },
                { chatID: -1, text: "No, Just wandering around I guess", callback: "" }
            ]
        },
        {
            chatID: 77,
            speaker: "holly",
            text: "It's you again. Do you want some food or what?",
            button: [
                { chatID: 1, text: "Yes", callback: "sit" },
                { chatID: 75, text: "I'm sorry, I was hired to let Jeffery know.", callback: "" }
            ]
        },
        {
            chatID: 78,
            speaker: "holly",
            text: "We all spit in your food. I hope you choke on it.",
            button: [
                { chatID: 4, text: "MMMmmmm spit", callback: "eat" }
            ]
        },
        {
            chatID: 79,
            speaker: "holly",
            text: "I told everyone to give you crappy tips. I don't like you",
            button: [
                { chatID: -1, text: "Ok, good times!", callback: "resetServing" }
            ]
        },
        {
            chatID: 80,
            speaker: "holly",
            text: "Hey sugar, you're looking good in that! If I was a boy I would totally be into you!",
            button: [
                { chatID: -1, text: "I'm into girls and you're looking good too.", callback: "resetServing" },
                { chatID: -1, text: "Thank you, I hope some big man takes me home and makes me his. ", callback: "resetServing" }
            ]
        },
        {
            chatID: 81,
            speaker: "dolly",
            text: "Hmph! I'm not talking to you!",
            button: [
                { chatID: -1, text: "Ok...", callback: "resetServing" }
            ]
        },
        {
            chatID: 82,
            speaker: "dolly",
            text: "I put a bit aside to help you with your rent. Thank you for keeping our secret!",
            button: [
                { chatID: -1, text: "That's so nice of you! Thank you!", callback: "dollytip" }
            ]
        },
        {
            chatID: 83,
            speaker: "molly",
            text: "I lied to you, you don't look hot. You look stupid in that dress.",
            button: [
                { chatID: -1, text: "Ok, good times!", callback: "resetServing" }
            ]
        },
        {
            chatID: 84,
            speaker: "molly",
            text: "Hey sexy! I totally had sex before my shift started and I can feel his cum leaking down my pussy lips. I " +
            "had some of it drop on the floor while I was taking an order! I don't think they saw!",
            button: [
                { chatID: -1, text: "You're such a slut! I love it!", callback: "resetServing" }
            ]
        },
        {
            chatID: 85,
            speaker: "me",
            text: "...where's that napkin?",
            button: [
                { chatID: 86, text: "....", callback: "wait2a" }
            ]
        },
        {
            chatID: 86,
            speaker: "jones",
            text: "It's down there....",
            button: [
                { chatID: 87, text: "...", callback: "wait2b" }
            ]
        },
        {
            chatID: 87,
            speaker: "jones",
            text: "Keep looking slut",
            button: [
                { chatID: 88, text: "....", callback: "wait2c" }
            ]
        },
        {
            chatID: 88,
            speaker: "jones",
            text: "I want you to come to my house. I'm going to make you my slutty house whore. ",
            button: [
                { chatID: 89, text: "mmmmmMmmmMMM", callback: "" }
            ]
        },
        {
            chatID: 89,
            speaker: "jones",
            text: "You'll bend over to clean my floors then clean my cock. I bet you'll like that slut.",
            button: [
                { chatID: 90, text: "oh yeaaa", callback: "" }
            ]
        },
        {
            chatID: 90,
            speaker: "jones",
            text: "Say it, say you're my little slut.",
            button: [
                { chatID: 91, text: "I'm your little slut", callback: "" }
            ]
        },
        {
            chatID: 91,
            speaker: "jones",
            text: "That's a good slut. Come to my house. I'm going to make you my barefoot pregnant wife, slut. Say 'Yes Daddy'",
            button: [
                { chatID: 92, text: "Yes Daddy", callback: "" }
            ]
        },
        {
            chatID: 92,
            speaker: "jones",
            text: "That's a good slut, now serve me my food.",
            button: [
                { chatID: -1, text: "Yes Daddy", callback: "break40" }
            ]
        },
        {
            chatID: 93,
            speaker: "jones",
            text: "....",
            button: [
                { chatID: 94, text: "....", callback: "wait2a" }
            ]
        },
        {
            chatID: 94,
            speaker: "jones",
            text: "You love sicking your ass out don't you...",
            button: [
                { chatID: 95, text: "Yeessss daddy", callback: "wait2b" }
            ]
        },
        {
            chatID: 95,
            speaker: "jones",
            text: "I'm going to fill your slutty ass till my cum leaks down your leg.",
            button: [
                { chatID: 96, text: "Oh yeaaaaa", callback: "wait2c" }
            ]
        },
        {
            chatID: 96,
            speaker: "jones",
            text: "That's a good slut, now serve me my food.",
            button: [
                { chatID: -1, text: "Yes Daddy", callback: "break40" }
            ]
        },
        {
            chatID: 97,
            speaker: "random",
            text: "You heard me you weird slut. You're so ugly I've lost my appetite. I know " + sc.n("jeffery") + ". " +
                "I'm going to tell him to fire you! <span style='text-transform: uppercase;'>" + sc.n("jeffery") + "!! " +
                "this waitress needs to get fired! she's the worst!</span>",
            button: [
                { chatID: 98, text: "Yes Daddy", callback: "" }
            ]
        },
        {
            chatID: 98,
            speaker: "jeffery",
            text: sc.n("me") + " what are you doing! Report to my office. ",
            button: [
                { chatID: -1, text: "Comming", callback: "stageRightx" }
            ]
        },
        {
            chatID: 99,
            speaker: "holly",
            text: "Get out of here pervert! You're so disgusting!",
            button: [
                { chatID: -1, text: "Oh, right.", callback: "leave" }
            ]
        },
        {
            chatID: 100,
            speaker: "dolly",
            text: "You're naked!",
            button: [
                { chatID: 101, text: "And you have a dick.", callback: "s2" }
            ]
        },
        {
            chatID: 101,
            speaker: "dolly",
            text: "Hehehe. I know. You excited it. I guess I have too much gooey goo in my balls. Tell you what sugar, " +
                "since I can't work like this I'm going to have to empty this really quick. Wait right here and I'll be right " +
                "back.",
            button: [
                { chatID: 102, text: "Huh?", callback: "s3" }
            ]
        },
        {
            chatID: 102,
            speaker: "thinking",
            text: "I wonder what she's up to...",
            button: [
                { chatID: 103, text: "...", callback: "s4" }
            ]
        },
        {
            chatID: 103,
            speaker: "dolly",
            text: "Some gooey goo with a spot of sugar for you honey. Drink up, it's packed with the good stuff.",
            button: [
                { chatID: 104, text: "Thanks!", callback: "s5" }
            ]
        },
        {
            chatID: 104,
            speaker: "dolly",
            text: "Good girl. Anytime you need another fill up just stop by sugar! I've got to get back to my tables now. ",
            button: [
                { chatID: -1, text: "Thanks!", callback: "s6" }
            ]
        },
        {
            chatID: 105,
            speaker: "dolly",
            text: "You sure do have a never ending belly. Here's some more gooey goo I prepared just for you",
            button: [
                { chatID: -1, text: "Thanks!", callback: "s7" },
                { chatID: -1, text: "no thanks", callback: "leave" }
            ]
        },
        {
            chatID: 106,
            speaker: "thinking",
            text: "They must close at night. Damn where am I going to get some tasty burgers now!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 107,
            speaker: "thinking",
            text: "Good it's closed. Looks like everyone is gone. I just need to crawl back in through the broken latched window " +
                "and check his files. ",
            button: [
                { chatID: 108, text: "Break into the Naked Beaver ", callback: "k0" },
                { chatID: -1, text: "Do it later. ", callback: "" },
            ]
        },
        {
            chatID: 108,
            speaker: "thinking",
            text: "I need to sneak into Jeffery's office. ",
            button: [
                { chatID: 109, text: "Sneak into Jeffery's office. ", callback: "k1" },
            ]
        },
        {
            chatID: 109,
            speaker: "thinking",
            text: "Now I just need to find some info on the girls. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 110,
            speaker: "thinking",
            text: "Just ledger books. Nothing here.  ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 111,
            speaker: "thinking",
            text: "What a pervert... ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 112,
            speaker: "thinking",
            text: "Hey! Those are my panties! ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 113,
            speaker: "thinking",
            text: "Oh wow! That is quite pungent. The smell is really burning my nostrils. I wonder if he just sits in here " +
                "all day masturbating to these dirty panties. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 114,
            speaker: "thinking",
            text: "Oh a key. I wonder where this goes. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 115,
            speaker: "thinking",
            text: "Locked. I wonder where the key is. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 116,
            speaker: "thinking",
            text: "13 Main St. I know where that is...",
            button: [
                { chatID: 117, text: "...", callback: "kdrawer2map" },
            ]
        },
        {
            chatID: 117,
            speaker: "thinking",
            text: "It's the apartment building. Apartment 201 must be on the second floor. It would appear that they all " +
                "live in the same place. I should check it out during the day when they are all at work. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
