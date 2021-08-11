//Room name
var room209 = {};
room209.main = function () {
    var mstep = sc.getstep("missy");
    var oncase = g.get("oncase");
    if (mstep < 10) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        chat(0, 209);
    }
    else if (g.dt.getDay() === 6 || g.dt.getDay() === 0 || g.dt.getHours() > 9) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        if (g.dt.getHours() > 9)
            chat(2, 209);
        else
            chat(1, 209);
    }
    else if (oncase !== null) {
        room209.btnclick("bb1");
        room209.btnclick("poster0");
        room209.btnclick("displayChairsit");
        room209.btnclick("displayMissybtn");
        chat(60, 209);
    }
    else if (!g.sissy[54].ach) {
        room209.btnclick("bb0");
        room209.btnclick("poster0");
        room209.btnclick("displayMissy");
        room209.btnclick("displayChairsit");
        chat(3, 209);
    }
    else {
        if (sc.checkevent("missy", -1)) {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayMissybtn");
            if (g.internal === "sugar0" || g.internal === "sugar3")
                chat(23, 209);
            else if (g.internal === "sugar1") {
                chat(24, 209);
                nav.button({
                    "type": "img",
                    "name": "teatime",
                    "left": 710,
                    "top": 755,
                    "width": 522,
                    "height": 325,
                    "image": "209_classroom/tea.png"
                }, 209);
            }
            else
                chat(26, 209);
        }
        else if (g.sissy[1].ach) {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            room209.btnclick("displaypbtn");
        }
        else {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
        }
    }
};
 
room209.btnclick = function (name) {
    switch (name) {
        case "exit":
            char.room(0);
            break;
        case "reset":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("displayMissy");
            break;
        case "displayMissy":
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            break;
        case "displayMissybtn":
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            break;
        case "displaypbtn":
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1500,
                "top": 200,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            break;
        case "displayChairsit":
            zcl.displayMain(400, 100, .25, "clothes", true);
            nav.button({
                "type": "img",
                "name": "chair",
                "left": 336,
                "top": 898,
                "width": 564,
                "height": 182,
                "image": "209_classroom/chariback.png"
            }, 209);
            break;
        case "bb0":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "bb1":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/bbPanties.jpg"
            }, 209);
            break;
        case "poster0":
            nav.button({
                "type": "img",
                "name": "poster",
                "left": 277,
                "top": 251,
                "width": 269,
                "height": 321,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "missy0accept":
            chat(10, 209);
            break;
        case "appearnceStart":
            var hasSuit = cl.c.shoes === "d" && cl.c.pants === "s" && cl.c.shirt === "s" && cl.c.socks === "b";
            var hasGirlSuit = cl.c.shoes === "fb" && cl.c.pants === "k" && cl.c.shirt === "r" && cl.c.socks === null;
            var hasPanties = cl.c.panties === null ? true : (cl.getEntry("panties", cl.c.panties).sex === "f");
            if (g.sissy[24].ach) {
                if (hasGirlSuit && hasPanties)
                    room209.btnclick("pointsStart");
                else {
                    if (cl.hasClothing("pants", "k") && hasPanties) {
                        chat(135, 209);
                    }
                    else
                        chat(18, 209);
                }
            }
            else {
                if (hasSuit && hasPanties)
                    room209.btnclick("pointsStart");
                else if (!hasPanties)
                    chat(19, 209);
                else
                    chat(20, 209);
            }
            break;
        case "pointsStart":
            if (scc.get("missy").love > 98) {
                chat(21, 209);
            }
            else {
                room209.btnclick("appearanceStart");
            }
            break;
        case "appearanceStart":
            scc.changesDiffernt("missy", true);
            if (scc.changeText === "")
                room209.btnclick("selectStart");
            else {
                scc.love("missy", 10);
                chat(999, 209);
            }
            break;
        case "selectStart":
            nav.killall();
            $("#room_footer").hide();
            char.changeMenu("hide");
            nav.bg("28_transformation\grid.jpg");
            room210.main();
            break;
        case "h_0":
            room209.btnclick("reset");
            chat(22, 209);
            break;
        case "h_1":
            room209.btnclick("reset");
            chat(27, 209);
            break;
        case "h_2":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(68, 209);
            break;
        case "h_3":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(69, 209);
            break;
        case "h_6":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(73, 209);
            break;
        case "h_7":
        case "h_8":
        case "h_9":
        case "h_10":
            g.set("oncase", "smolpp");
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(140, 209);
            break;
        case "h_12":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(84, 209);
            break;
        case "h_13":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(114, 209);
            break;
        case "h_15":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(85, 209);
            break;
        case "h_16":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            room209.btnclick("displaypbtn");
            chat(90, 209);
            break;
        case "h_19":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(113, 209);
            break;
        case "h_20":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            room209.btnclick("displaypbtn");
            chat(39, 209);
            break;
        case "h_21":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displaypbtn");
            chat(47, 209);
            break;
        case "h_22":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displaypbtn");
            chat(48, 209);
            break;
        case "h_24":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displaypbtn");
            chat(49, 209);
            break;
        case "h_26":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(144, 209);
            break;
        case "h_25":
            //heels
            break;
        case "h_28":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(59, 209);
            break;
        case "h_29":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(61, 209);
            break;
        case "h_31":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(126, 209);
            break;
        case "h_35":
        case "h_36":
        case "h_37":
        case "h_38":
        case "h_39":
            g.set("oncase", "bigboobs");
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(63, 209);
            break;
        case "h_40":
        case "h_41":
        case "h_42":
        case "h_43":
        case "h_44":
            g.set("oncase", "bigass");
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(63, 209);
            break;
        case "h_45":
        case "h_46":
            g.set("oncase", "dslLips");
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(63, 209);
            break;
        case "h_51":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displaypbtn");
            chat(132, 209);
            break;
        case "h_55":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            nav.button({
                "type": "img",
                "name": "h55_1",
                "left": 450,
                "top": 108,
                "width": 745,
                "height": 972,
                "image": "209_classroom/h55_1.png"
            }, 209);
            room209.btnclick("displayChairsit");
            chat(145, 209);
            break;
        case "h55_15":
            chat(174, 209);
            break;
        case "h55_17":
            nav.killall();
            nav.bg("205_computerWork/blackBg.jpg");
            g.set("oncase", "cult0");
            
            g.internal = { day: 0, interval: 0, cleaned: false, constDayDirty: 0 };
            g.pass = 950;
            char.room(28); 
            
            break;
        case "h_56":
            char.addtime(20);
            char.room(201);
            break;
        case "h_58":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(127, 209);
            break;
        case "h_59":
            nav.bg("209_classroom/h_59_1.jpg");
            nav.killall();
            chat(136, 209);
            break;
        default:
            break;
    }
};

room209.chatcatch = function (callback) {
    switch (callback) {
        case "contract":
            room210.chatcatch("contract");
            break;
        case "missy0_end":
            g.sissy[54].ach = true;
            g.mod("sissy", 10);
            g.mod("money", 30);
            room209.chatcatch("end");
            break;
        case "missy0_1":
            nav.killall();
            nav.bg("209_classroom/missy0_1.jpg");
            break;
        case "missy0_2":
            nav.bg("209_classroom/missy0_2.jpg");
            break;
        case "missy0Display":
            char.changeMenu("hide");
            room210.main();
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 197,
                "top": 0,
                "width": 853,
                "height": 1080,
                "image": "209_classroom/missy0_point.png"
            }, 209);
            break;
        case "missy0_tea":
            sc.setstep("missy", -1);
            char.settime(9, 0);
            g.internal = "teatime";
            char.room(207);
            break;
        case "missy0endbad":
            g.sissy[0].ach = true;
            sc.revokeStep("missy", -1);
            scc.love("missy", -50, 100);
            room209.chatcatch("end");
            break;
        case "missy0end":
            g.sissy[0].ach = true;
            sc.revokeStep("missy", -1);
            scc.love("missy", 20, 100);
            g.mod("money", 40);
            room209.chatcatch("end");
            break;
        case "m2_0":
            nav.killall();
            nav.bg("209_classroom/p3_0.jpg");
            break;
        case "m2_1":
            nav.bg("209_classroom/p3_1.jpg");
            break;
        case "h_2":
            g.pass = "g2_furniture";
            char.room(200);
            break;
        case "h_3_vr":
            nav.killall();
            nav.bg("209_classroom/vr.jpg");
            break;
        case "h_3_vr1":
            nav.bg("205_computerWork/blackBg.jpg");
            nav.button({
                "type": "img",
                "name": "hypno",
                "left": 500,
                "top": 40,
                "width": 1000,
                "height": 1000,
                "image": "205_computerWork/200_trance1.gif"
            }, 209);
            g.roomTimeout = setTimeout(function () { chat(71, 209); }, 15000);
            break;
        case "h_3_vr1e":
            room209.btnclick("reset");
            break;
        case "h_3_vr2":
            g.sissy[3].ach = true;
            g.mod("sissy", 100);
            room209.chatcatch("end");
            break;
        case "m2_2":
            nav.bg("209_classroom/p3_2.jpg");
            break;
        case "m2_3":
            char.addtime(30);
            nav.bg("209_classroom/p3_3.jpg");
            break;
        case "m3_4x":
            nav.bg("209_classroom/p3_4.jpg");
            break;
        case "m2_4":
            char.addtime(60);
            g.roomTimeout = setTimeout(function () { chat(32, 209); }, 2000);
            break;
        case "m2_5":
            char.addtime(120);
            g.roomTimeout = setTimeout(function () { chat(33, 209); }, 2000);
            break;
        case "m2_6":
            nav.bg("209_classroom/p3_6.jpg");
            break;
        case "m2_x":
            nav.bg("209_classroom/p3_x.jpg");
            break;
        case "m2_end":
            g.mod("sissy", 60);
            g.mod("money", 40);
            scc.love("missy", 10);
            g.sissy[1].ach = true;
            room209.chatcatch("end");
            break;
        case "m2_endbad":
            scc.love("missy", -10);
            g.sissy[1].ach = true;
            break;
        case "h6_1":
            cl.nude();
            g.mod("arousal", 20);
            nav.killbutton("chair");
            zcl.displayMain(-100, 600, .25, "clothes", true);
            break;
        case "h6_2":
            g.mod("arousal", 50);
            nav.killall();
            nav.bg("209_classroom/h6_2.jpg");
            break;
        case "h6_3":
            nav.killall();
            nav.bg("209_classroom/h6_3.jpg");
            break;
        case "h6_4":
            nav.bg("209_classroom/h6_4.jpg");
            break;
        case "h6_5":
            nav.bg("209_classroom/h6_5.jpg");
            break;
        case "h6_6":
            nav.bg("209_classroom/bg.jpg");
            cl.c.chastity = "cage";
            g.mod("chastityLock", true);
            zcl.displayMain(0, 800, .18, "clothes", false);
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 524,
                "top": 0,
                "width": 672,
                "height": 1080,
                "image": "209_classroom/h6_6.png"
            }, 209);
            break;
        case "h6_end":
            g.mod("money", 50);
            g.mod("sissy", 40);
            cl.undo();
            g.sissy[6].ach = true;
            room209.chatcatch("end");
            break;
        case "h_8_1":
            nav.killall();
            nav.bg("209_classroom/h_8_1.jpg");
            break;
        case "h_8_2":
            nav.bg("209_classroom/bgBack.jpg");
            zcl.displayMain(100, 600, .18, "shirt", false)
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 621,
                "top": 393,
                "width": 727,
                "height": 687,
                "image": "209_classroom/h_8.png"
            }, 209);
            if (cl.c.chastity !== null)
                chat(142, 209);
            else
                chat(143, 209);
            break;
        case "h12_1":
            g.pass = "h12_cock";
            char.room(202);
            break;
        case "h_15_badend":
            scc.love("missy", -10);
            room209.chatcatch("end");
            break;
        case "h12_1_end":
            g.set("oncase", "redroom");
            char.addtime(30);
            char.room(203);
            break;
        case "h_13":
            g.set("oncase", "gloryholebj");
            room209.chatcatch("end");
            break;
        case "h16_1":
            nav.killbutton("chair");
            zcl.displayMain(100, 600, .16, "clothes", true);
            break;
        case "h16_2":
            g.internal = cl.c.panties;
            cl.nude();
            cl.c.panties = g.internal;
            zcl.displayMain(100, 600, .16, "clothes", true);
            break;
        case "h16_3":
            nav.killbutton("appearnceStart");
            zcl.displayMain(-300, 600, .25, "clothes", true);
            nav.button({
                "type": "img",
                "name": "p",
                "left": 0,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "209_classroom/h25_3.png"
            }, 209);
            break;
        case "h16_4":
            nav.killbutton("p");
            cl.c.panties = null
            zcl.displayMain(-300, 600, .25, "clothes", true);
            nav.button({
                "type": "img",
                "name": "p",
                "left": 0,
                "top": 0,
                "width": 1100,
                "height": 1080,
                "image": "209_classroom/h25_3.png"
            }, 209);
            break;
        case "h16_5":
            nav.killall();
            nav.bg("209_classroom/h16_5.jpg");
            break;
        case "h16_6":
            nav.killall();
            if (cl.c.chastity === null)
                nav.bg("209_classroom/h16_6.jpg");
            else
                nav.bg("209_classroom/h16_6c.jpg");
            nav.button({
                "type": "img",
                "name": "p",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "209_classroom/h16_6.png"
            }, 209);
            break;
        case "h16_7":
            nav.killall();
            nav.bg("209_classroom/h16_7.jpg");
            break;
        case "h16_8":
            if (cl.c.chastity === null)
                nav.bg("209_classroom/h16_6.jpg");
            else
                nav.bg("209_classroom/h16_6c.jpg");
            nav.button({
                "type": "img",
                "name": "spit",
                "left": 824,
                "top": 284,
                "width": 311,
                "height": 329,
                "image": "209_classroom/h16_8.png"
            }, 209);
            break;
        case "h16_9":
            nav.killall();
            nav.bg("209_classroom/h16_9.jpg");
            break;
        case "h16_10":
            nav.bg("209_classroom/h16_10.jpg");
            break;
        case "h16_11":
            nav.bg("209_classroom/h16_11.jpg");
            break;
        case "h16_12":
            nav.bg("209_classroom/bg.jpg");
            zcl.assup(600, 300, .7, "");
            nav.button({
                "type": "img",
                "name": "h16_12",
                "left": 1482,
                "top": 0,
                "width": 266,
                "height": 1080,
                "image": "209_classroom/h16_12.png"
            }, 209);
            break;
        case "h16_13":
            nav.killbutton("h16_12");
            nav.button({
                "type": "img",
                "name": "h16_13",
                "left": 1236,
                "top": 0,
                "width": 338,
                "height": 407,
                "image": "209_classroom/h16_13.png"
            }, 209);
            nav.button({
                "type": "img",
                "name": "h16_13m",
                "left": 0,
                "top": 404,
                "width": 540,
                "height": 405,
                "image": "209_classroom/h16_13m.png"
            }, 209);
            zcl.assup(300, -200, 1.5, "");
            break;
        case "h16_14":
            nav.killbutton("h16_13");
            nav.killbutton("h16_13m");
            nav.button({
                "type": "img",
                "name": "h16_14",
                "left": 1108,
                "top": 0,
                "width": 338,
                "height": 507,
                "image": "209_classroom/h16_14.png"
            }, 209);
            zcl.assup(300, -200, 1.5, "");
            nav.button({
                "type": "img",
                "name": "h16_14m",
                "left": 0,
                "top": 404,
                "width": 540,
                "height": 405,
                "image": "209_classroom/h16_14m.png"
            }, 209);
            break;
        case "h16_15":
            nav.killbutton("h16_14");
            nav.killbutton("h16_14m");
            nav.button({
                "type": "img",
                "name": "h16_15",
                "left": 999,
                "top": 0,
                "width": 749,
                "height": 507,
                "image": "209_classroom/h16_15.png"
            }, 209);
            zcl.assup(300, -200, 1.5, "");
            nav.button({
                "type": "img",
                "name": "h16_15f",
                "left": 36,
                "top": 235,
                "width": 776,
                "height": 776,
                "image": "209_classroom/h16_15f.png"
            }, 209);
            break;
        case "h16_16":
            nav.killall();
            zcl.assup(600, 350, .7, "");
            nav.button({
                "type": "img",
                "name": "p",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "209_classroom/h16_6.png"
            }, 209);
            break;
        case "h16_end":
            g.mod("sissy", 40);
            scc.love("missy", 10, 100);
            g.mod("money", 40);
            g.sissy[16].ach = true;
            cl.undo();
            room209.chatcatch("end");
            break;
        case "h_19":
            g.pass = "h_19_sewer";
            char.room(200);
            break;
        case "p20_0":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "p",
                "left": 855,
                "top": 0,
                "width": 1031,
                "height": 1080,
                "image": "209_classroom/p1.png"
            }, 209);
            break;
        case "p20_1":
            nav.killall();
            zcl.displayMain(-1100, 200, .45, "panties", true);
            break;
        case "p20_2":
            zcl.displayMain(-1100, 200, .45, "panties", false);
            break;
        case "p20_3":
            nav.bg("209_classroom/p20_3.jpg");
            zcl.displayMain(-100, 0, .48, "panties", false);
            nav.button({
                "type": "img",
                "name": "face",
                "left": 685,
                "top": 44,
                "width": 475,
                "height": 513,
                "image": "209_classroom/p20_3.png"
            }, 209);
            break;
        case "p20_4":
            nav.killall();
            nav.bg("209_classroom/p20_4.jpg");
            break;
        case "p20_5":
            nav.bg("209_classroom/bg.jpg");
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1200,
                "top": 200,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            zcl.displayMain(-700, 300, .35, "panties", true);
            break;
        case "p20_end":
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.sissy[20].ach = true;
            room209.chatcatch("end");
            break;
        case "h_21_1":
            nav.killall();
            nav.bg("209_classroom/h21_1.jpg");
            break;
        case "h_21_2":
            nav.bg("209_classroom/h21_2.jpg");
            break;
        case "h_21_end":
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.sissy[21].ach = true;
            room209.chatcatch("end");
            break;
        case "h_22_1":
            nav.killall();
            nav.bg("209_classroom/h22_1.jpg");
            break;
        case "h_22_2":
            nav.bg("209_classroom/h22_2.jpg");
            break;
        case "h_22_3":
            nav.bg("209_classroom/h22_3.jpg");
            break;
        case "h_22_4":
            nav.bg("22_toilet/s_201.jpg");
            if (cl.c.chastity === null)
                peecock = "s_hairy.png";
            else {
                if (cl.c.chastity === "metal")
                    peecock = "s_metal.png";
                else if (cl.c.chastity === "cage")
                    peecock = "s_cage.png";
                else
                    peecock = "s_pink.png";
            }
            nav.button({
                "type": "img",
                "name": "cock",
                "left": 722,
                "top": 0,
                "width": 698,
                "height": 1080,
                "image": "22_toilet/" + peecock
            }, 22);
            g.roomTimeout = setTimeout(function () { chat(124, 209); }, 1500);
            break;
        case "h_22_5":
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.sissy[22].ach = true;
            room209.chatcatch("end");
            break;
        case "h24_0":
            nav.killbutton("chair");
            zcl.displayMain(-100, 600, .25, "clothes", true);
            break;
        case "h24_1":
            nav.killall();
            zcl.displayMain(-100, 600, .25, "clothes", true);
            nav.bg("209_classroom/h24_1.jpg");
            break;
        case "h24_2":
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.socks = null;
            cl.c.dress = "a";
            nav.killall();
            nav.bg("209_classroom/h24_2.jpg");
            break;
        case "h24_3":
            nav.bg("209_classroom/h24_3.jpg");
            break;
        case "h24_4":
            nav.bg("209_classroom/bg.jpg");
            zcl.displayMain(150, 900, .18, "clothes", true);
            nav.button({
                "type": "img",
                "name": "p",
                "left": 810,
                "top": 105,
                "width": 449,
                "height": 975,
                "image": "209_classroom/h24_4.png"
            }, 209);
            break;
        case "h24_5":
            nav.killall();
            room209.btnclick("displayMissybtn");
            zcl.displayMain(150, 600, .18, "clothes", true);
            break;
        case "h24_6":
            g.sissy[24].ach = true;
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.roomMapAccess(650, true, true);
            sc.setstep("tiffany", -8);
            cl.c.dress = null;
            cl.c.shoes = "d";
            cl.c.pants = "s";
            cl.c.shirt = "s";
            cl.c.socks === "b";
            cl.display();
            room209.chatcatch("end");
            break;
        


        case "h28_x":
            g.pass = "h28_x";
            char.room(200);
            break;
        case "h_29":
            g.set("oncase", "shopping");
            char.addtime(60);
            g.internal = "201 change";
            char.room(201);
            break;
        case "h_31_end":
            g.sissy[31].ach = true;
            room209.chatcatch("end");
            break;
        case "h_40":
            nav.killall();
            nav.bg("209_classroom/h40.jpg");
            break;
        case "h_40_1":
            var oncase40 = g.get("oncase");
            if (oncase40 === "bigboobs")
                nav.button({
                    "type": "img",
                    "name": "boobies",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "209_classroom/boobHypno.gif"
                }, 209);
            else if (oncase40 === "bigass")
                nav.button({
                    "type": "img",
                    "name": "boobies",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "209_classroom/assHypno.gif"
                }, 209);
            else if (oncase40 === "dslLips")
                nav.button({
                    "type": "img",
                    "name": "boobies",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "209_classroom/dslHypno.gif"
                }, 209);
            g.roomTimeout = setTimeout(function () {
                room209.chatcatch("h_40_2");
            }, 3000);
            break;
        case "h_40_2":
            var oncase401 = g.get("oncase");
            nav.bg("209_classroom/bg.jpg");
            nav.killbutton("boobies");
            room209.btnclick("bb0");
            room209.btnclick("poster0");
            room209.btnclick("displayMissy");
            room209.btnclick("displayChairsit");
            if (oncase401 === "bigboobs")
                chat(65, 209);
            else if (oncase401 === "bigass")
                chat(66, 209);
            else if (oncase401 === "dslLips")
                chat(67, 209);
            break;
        case "h_40_3":
            g.mod("money", 20);
            room209.chatcatch("end");
            break;
        case "h_51":
            g.sissy[51].ach = true;
            sc.setstep("spanky", 3);
            inv.addMulti("hormone", 10);
            room209.chatcatch("end");
            break;
        case "h55_2":
            nav.killbutton("h55_1");
            nav.killbutton("chair");
            nav.button({
                "type": "img",
                "name": "h55_2",
                "left": 800,
                "top": 108,
                "width": 470,
                "height": 1023,
                "image": "209_classroom/h55_2.png"
            }, 209);
            room209.btnclick("displayChairsit");
            break;
        case "h55_3":
            nav.killall();
            cl.c.shirt = cl.c.pants = cl.c.shoes = cl.c.socks = cl.c.pj = cl.c.swimsuit = null;
            cl.c.dress = "robe";
            zcl.displayMain(-50, 750, .2, "clothes", false);
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 524,
                "top": 0,
                "width": 672,
                "height": 1080,
                "image": "209_classroom/h6_6.png"
            }, 209);
            break;
        case "h55_4":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/bb55_0.jpg"
            }, 209);
            
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            room209.btnclick("displayChairsit");
            break;
        case "55_5":
            nav.modbutton("bb", "209_classroom/bb55_1.jpg", null, null);
            break;
        case "55_6":
            nav.modbutton("bb", "209_classroom/bb55_2.jpg", null, null);
            break;
        case "55_7":
            nav.killall();
            nav.bg("451_parkMensRoom/stall.jpg");
            char.addtime(30);
            break;
        case "55_8":
            char.addtime(45);
            break;
        case "h55_9":
            nav.killall();
            nav.bg("452_parkWomansRoom/bathroom.jpg");
            scc.love("missy", -10, 100);
            nav.button({
                "type": "btn",
                "name": "h55_9",
                "left": 1082,
                "top": 24,
                "width": 465,
                "height": 1056,
                "image": "209_classroom/h55_9.png"
            }, 209);
            break;
        case "55_10":
            nav.killall();
            nav.bg("451_parkMensRoom/stall.jpg");
            char.settime(22, 3);
            g.popUpNotice("Time has passed");
            break;
        case "h55_11":
            nav.bg("209_classroom/h55_11.jpg");
            break;
        case "h55_12":
            nav.bg("450_park/450_bg_night.jpg");
            zcl.displayMain(300, 1000, .08, "clothes", false);
            nav.button({
                "type": "btn",
                "name": "h55_12",
                "left": 633,
                "top": 291,
                "width": 1185,
                "height": 789,
                "image": "209_classroom/h55_12.png"
            }, 209);
            break;
        case "h55_13":
            nav.killall();
            nav.bg("209_classroom/h55_13.jpg");
            break;
        case "h55_14":
            $("#room-menu").hide();
            $("#room-inv").hide();
            $("#room-change").hide();
            cl.c.chastity = cl.c.buttplug = null;
            cl.nude();
            nav.bg("24_spinTheBottle/black.jpg");
            break;
        case "h55_15":
            nav.bg("209_classroom/h55_15.jpg");
            break; 
        case "h55_16":
            nav.button({
                "type": "btn",
                "name": "h55_15",
                "left": 414,
                "top": 0,
                "width": 1105,
                "height": 1067,
                "image": "209_classroom/h55_15.png"
            }, 209);
            nav.bg("209_classroom/h55_16.jpg");
            break; 
        case "h55_17":
            nav.killall();
            
            nav.bg("950_cell/cell.jpg");
            nav.button({
                "type": "btn",
                "name": "h55_17",
                "left": 994,
                "top": 685,
                "width": 684,
                "height": 103,
                "image": "950_cell/bed.png"
            }, 209);
            break;
        case "h_58_1":
            nav.killall();
            nav.bg("209_classroom/h58_1.jpg");
            break;
        case "h_58_2":
            nav.bg("209_classroom/h58_2.jpg");
            break;
        case "h_58_3":
            nav.bg("209_classroom/h58_3.jpg");
            break;
        case "h_58_4":
            nav.bg("209_classroom/h58_4.jpg");
            break;
        case "h_58_5":
            inv.addMulti("lube", 10);
            g.sissy[58].ach = true;
            room209.chatcatch("end");
            break;
        case "h_59":
            nav.bg("209_classroom/h_59_2.jpg");
            break;
        case "h_59_1":
            inv.add("pinkDildo");
            g.sissy[59].ach = true;
            room209.chatcatch("end");
            break;
        case "selectStart":
            room209.btnclick("selectStart");
            break;
        case "missyMidPoints":
            g.mod("sissy", 100);
            scc.setlove("missy", 0);
            room209.btnclick("appearanceStart");
            break;
        case "missyBadEnd":
            scc.love("missy", -10);
            char.settime(10, 27);
            char.room(0);
            break;
        case "end":
            char.settime(17, 0);
            char.room(0);
            break;
        case "endOnCase":
            char.addtime(30);
            g.internal = "201 change";
            char.room(201);
            break;
        case "love":
            scc.love("missy", 10);
            break;
        case "hate":
            scc.love("missy", -10);
            break;
        case "outfitChange":
            cl.c.shoes = "fb";
            cl.c.pants = "k";
            cl.c.shirt = "r";
            cl.c.socks = null;
            cl.display();
            room209.btnclick("displayChairsit");
            room209.btnclick("pointsStart");
            break;
        case "reset":
            char.room(209);
            break;
        default:
            break;
    }
};

room209.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: scc.changeText,
            button: [
                { chatID: -1, text: "Thanks ma'am!", callback: "selectStart" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "I don't know what this room is, but it's creepy as fuck.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "I don't think there's class on the weekend.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "thinking",
                text: "It looks like class starts before 10:00 am. It appears I'm late.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Welcome to the first day of your class. That cult is really getting out of hand and needs to be stopped! " +
                    "Because of this immediate need I'm going to rush you into my personal training. ",
                button: [
                    { chatID: 4, text: "...", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "It takes many different traits to make a great detective. Physically fit, mentally sharp, thorough, accurate, " +
                    "patient, and a good gut instinct. We've acheived the first step of physically fitness, but you lack all the other " +
                    "traits. Your complete failure on " + sc.n("tiffany") + "'s case shows it will take years to get you to where you need to be.",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "Lucky for you I'm in desperate need for a junior detective and you have some <span class='hl-pink'>trait's</span> " +
                    "that I can put to use. The fact that you stole your " + sc.n("el") + "' panties and wore them here, then paraded " +
                    " yourself around my office shows me a few things. ",
                button: [
                    { chatID: 6, text: "...", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "First it shows a lack of morals. A moral young gentleman wouldn't steal panties from his " +
                    sc.n("el") + ". You obviously have not morals, which will come in handy " +
                    "when you need to go undercover. ",
                button: [
                    { chatID: 7, text: "Well... you see", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "<span class='hl-red'>Shut up!!</span> This is a classroom, not a debate stage. As I was saying... " +
                    "wearing those panties to my office and shaving your entire body shows you have the indicators of a sissy. I " +
                    "am working on several cases that a sissy could come in handy, but you, in your current state would just " +
                    "bungle those cases worse than you bungled " + sc.n("tiffany") + "'s case. ",
                button: [
                    { chatID: 8, text: "...", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "My assistant instructor, " + sc.n("p") + ", and I are going to train you to be the perfect sissy to help us take " +
                    "down the cult once and for all. For far too long the inept police in this town has allowed the cult to grow in power " +
                    "which has only made them more monstrous in their rituals. If you wish to help us put a stop to them your best role " +
                    "is as our undercover sissy detective. ",
                button: [
                    { chatID: 9, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "To prepare you I've drawn up this contract for you to read over.",
                button: [
                    { chatID: -1, text: "[Read Contact]", callback: "contract" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "So do you agree to this contract?",
                button: [
                    { chatID: 13, text: "Yes, I'm in", callback: "missy0_1" },
                    { chatID: 11, text: "This is too much, I can't do it.", callback: "hate" }
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "This is what we call a <span class='hl'>False choice.</span> This sissy school is at the root of the story line " +
                    "and you will have to do it so lets just get it over now. Also let's be honest with ourselves. Somewhere deep down " +
                    "inside you needs to be forced in to a subservient little sissy. Just agree with the contract so we can move on.",
                button: [
                    { chatID: 13, text: "You're right, I'm a sissy bitch that agrees with this stupid contract.", callback: "missy0_1" },
                    { chatID: 12, text: "NO! You can't tell me what to do. I'm still out", callback: "hate" }
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: "Listen here you little shit! You're going to be my bitch, I'm going to fuck you with my big red strapon, " +
                    "and you're going to thank me for it. Now sign the contract so we can move the story forward. ",
                button: [
                    { chatID: 13, text: "Fuck ok! I'll sign the contract. Also I'm a little bitch", callback: "missy0_1" }
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: "Good, I'm glad you so readily agreed. I'm going to install Sissy AI, the tracking software, on your phone. It really " +
                    "has the most advanced AI of its kind. It records all the audio, camera, and can even track your biometrics " +
                    "to give a complete sexual picture of the phone holder. ",
                button: [
                    { chatID: 14, text: "...", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "What the hell! There's no way a program can track everything I do, can it? I must be crazy to keep going with " +
                    "this, but I really need the job and the cult thing sounds bad. Hopefully she doens't make me do anything " +
                    "too embarrassing. I dont' think it can get much worse that having to wear <span class='hl-pink'>panties</span>.",
                button: [
                    { chatID: 15, text: "...", callback: "missy0_2" }
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "I've set up the AI to automatically give you extra credit points based on your actions. To see how many " +
                    "points you have just check the Sissy App in your phone. When you have enough you can trade in those points " +
                    "here in the Sissy School. ",
                button: [
                    { chatID: 16, text: "Yes ma'am", callback: "missy0Display" }
                ]
            },
            {
                chatID: 16,
                speaker: "missy",
                text: "Also when you come in tomorrow you'll be presented with the course list where you can choose which class " +
                    "you take. You've completed your first class, and you'll select which class you want to take next which " +
                    "happens to be Tea Time. Don't worry too much of what that is, when you get here I'll go over what you " +
                    "need to do.",
                button: [
                    { chatID: 17, text: "Yes ma'am.", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "missy",
                text: "Good. We have a lot of work ahead of us. Get a good night's sleep and well begin your " +
                    "lessons tomrrow.",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missy0_end" }
                ]
            },
            {
                chatID: 18,
                speaker: "missy",
                text: "I know you were instructed on the proper uniform and that's not it! You need to begin by wearing your " +
                    "blouse, skirt, black flats, panties, and not socks. Get out and fix yourself.",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 19,
                speaker: "missy",
                text: "You know panties are required. Come back when you can learn to follow directions!",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 20,
                speaker: "missy",
                text: "You need to wear your suit. I know you know what it is. Come back when you can learn to follow directions",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 21,
                speaker: "missy",
                text: "You've been doing very well lately. I knew you would make a proper sissy. For doing so well I'm going " +
                    "to give you 100 extra credit points. You should be proud of yourself.",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "missyMidPoints" }
                ]
            },
            {
                chatID: 22,
                speaker: "missy",
                text: "Today, your lesson will be on servitude. I know all you care about is getting your cock into something " +
                    "warm and wet, but you need to expand your horizons. Go upstairs and fetch me a tea with 1 lump. If you need " +
                    "help ask " + sc.n("cecilia") + " where to go to fix the tea.",
                button: [
                    { chatID: -1, text: "[Get the tea]", callback: "missy0_tea" }
                ]
            },
            {
                chatID: 23,
                speaker: "missy",
                text: "I see you didn't pay attention to my order. I said 1 lump of sugar. Tea should have an elegant sweatness, without " +
                    "becoming sugar water. You have failed to follow simple directions, I'm done with you for the day.",
                button: [
                    { chatID: -1, text: "Oh sorry ma'am", callback: "missy0endbad" }
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "A perfect cup of tea with an elegant sweatness, but not too sweet. Congratulations on carrying out the simplest of " +
                    "orders. You probably think you deserve a reward.",
                button: [
                    { chatID: 25, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "Well you don't. You will receive some spending cash, because I'm incredibly giving. That is all for today.",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "missy0end" }
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: "I simply asked you to get a cup of tea with 1 lump of sugar and you dilly-dallied through this simple task. " +
                    "You have failed to follow simple directions, I'm done with you for the day.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "missy0endbad" }
                ]
            },

            {
                chatID: 27,
                speaker: "missy",
                text: "Today we shall continue with out lessons on service. Lucky for you I'm feeling quite horny so " +
                    "you will get to service me. Come here and kneel.",
                button: [
                    { chatID: 28, text: "Nice!", callback: "m2_0" }
                ]
            },
            {
                chatID: 28,
                speaker: "missy",
                text: "You're going to be my vibrator cleaner and holder today.",
                button: [
                    { chatID: 29, text: "...", callback: "m2_1" }
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "Let me just pull this out.",
                button: [
                    { chatID: 30, text: "...", callback: "m2_2" }
                ]
            },
            {
                chatID: 30,
                speaker: "missy",
                text: "There. Aren't you the cutest dildo holder. Just sit there and don't move. I'm going to my office to do some work.",
                button: [
                    { chatID: 31, text: "...", callback: "m2_3" }
                ]
            },
            {
                chatID: 31,
                speaker: "thinking",
                text: "Did she just leave? This vibrator tasted yummy, but I've swallowed all the juices. It just tastes like " +
                    "hard plastic now. Should I get up and leave, this is really too much.",
                button: [
                    { chatID: -1, text: "[Wait a bit longer]", callback: "m2_4" }
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "What the fuck! I've been waiting over an hour now. This is absolute crap! What does " + sc.n("missy") + " think " +
                    "I am? It's like she doesn't respect me at all. I'm sure she got stuck or forgot about me. I should go up and check.",
                button: [
                    { chatID: -1, text: "[Wait longer]", callback: "m2_5" },
                    { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "m2_x" }
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "OK she totally forgot. I've been kneeling here almost 4 hours! This is just too much. " + sc.n("missy") + " doesn't " +
                    "care about me at all! I'm going to go up there and really tell her what I think!",
                button: [
                    { chatID: 34, text: "[Wait longer]", callback: "m2_6" },
                    { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "m2_x" }
                ]
            },
            {
                chatID: 34,
                speaker: "missy",
                text: "I see you can follow directions, that's a good boy. For successfully passing your first real assignment I'll award " +
                    "you 60 SISSY POINTS. ",
                button: [
                    { chatID: 35, text: "hank aakkk oooo", callback: "m3_4x" }
                ]
            },
            {
                chatID: 35,
                speaker: "missy",
                text: "You are free to go. Let me just take back my favorite vibrator.",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "m2_end" }
                ]
            },
            {
                chatID: 36,
                speaker: "missy",
                text: "<span class='hl-red'>Why are you standing, and why isn't my vibrator in your mouth?</span>",
                button: [
                    { chatID: 37, text: "Oh uhhhh, I thought you forgot about me.", callback: "" }
                ]
            },
            {
                chatID: 37,
                speaker: "missy",
                text: "No, I didn't forget about you! You failed this lesson. I award you no points, and may god have mercy on your soul. ",
                button: [
                    { chatID: 38, text: "What?", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "missy",
                text: "You failed. If you want to get anywhere you need to find the discipline within yourself or you'll never be a " +
                    "junior detective. I'm deducting 60 points. Now get out of my classroom.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "m2_endbad" }
                ]
            },
            {
                chatID: 39,
                speaker: "missy",
                text: "Today I have a treat for you. Meet " + sc.n("p") + ". She'll be my assistant trainer. Normally she runs the " +
                    "pink room, but she is going to help me with your training. Specifically she'll be your femininity trainer. Say " +
                    "hello to " + sc.n("p") + ".",
                button: [
                    { chatID: 40, text: "Hello " + sc.n("p") + ".", callback: "" }
                ]
            },
            {
                chatID: 40,
                speaker: "p",
                text: "Tehehehe! Hi " + sc.n("me") + ". " + sc.n("missy") + " has told me about you. I've only worked with sissies in the pink " +
                    "room of pleasure. You'll be my first to bring all the way up; I'm so excited! ",
                button: [
                    { chatID: 41, text: "...", callback: "p20_0" }
                ]
            },
            {
                chatID: 41,
                speaker: "p",
                text: "Now strip to your panties you little slut!",
                button: [
                    { chatID: 42, text: "Yelp! [Strip to your panties]", callback: "p20_1" }
                ]
            },
            {
                chatID: 42,
                speaker: "p",
                text: "Turn around",
                button: [
                    { chatID: 43, text: "...", callback: "p20_2" }
                ]
            },
            {
                chatID: 43,
                speaker: "p",
                text: "I like how your follow orders. You're more of a sissy than you think you are.",
                button: [
                    { chatID: 44, text: "...", callback: "p20_3" }
                ]
            },
            {
                chatID: 44,
                speaker: "p",
                text: "You are yummy...",
                button: [
                    { chatID: 45, text: "Gulp!", callback: "p20_4" }
                ]
            },
            {
                chatID: 45,
                speaker: "p",
                text: "...and so big.",
                button: [
                    { chatID: 46, text: "Gulp!", callback: "p20_5" }
                ]
            },
            {
                chatID: 46,
                speaker: "p",
                text: "I'm going to really enjoy training you. You're going to be a perfect little slut when I get down with you. " +
                    "I've got to get back to the pink room, but we're going to have fun.",
                button: [
                    { chatID: -1, text: "ok, bye", callback: "p20_end" }
                ]
            },
            {
                chatID: 47,
                speaker: "p",
                text: "So you want to be more feminine? Like most boys you probably think that if you put your self in a dress, " +
                    "slap some tits on your chest and you're a girl. Being a girl is not about your body, it's about your mind. " +
                    "Take a look at how you're sitting.",
                button: [
                    { chatID: 115, text: "How am I sitting?", callback: "h_21_1" }
                ]
            },
            {
                chatID: 48,
                speaker: "p",
                text: "So now that you know how to sit, you need to know when to sit. Follow me to the powder room.",
                button: [
                    { chatID: 119, text: "ok", callback: "h_22_1" }
                ]
            },
            {
                chatID: 49,
                speaker: "p",
                text: "Don't you just want to be a little girl! Well congratulations we're going to take your first big step!",
                button: [
                    { chatID: 50, text: "Huh? What step?", callback: "" }
                ]
            },
            {
                chatID: 50,
                speaker: "p",
                text: "Awww, you're so cute, acting like you don't know exactly what you asked for. Strip to your panties my little girl. ",
                button: [
                    { chatID: 51, text: "OK!", callback: "h24_1" }
                ]
            },
            {
                chatID: 51,
                speaker: "p",
                text: "Now for your pretty dress. Personally I think this Alice in Wonderland dress is perfect for a fist timer. " +
                    "Go ahead, try it on. ",
                button: [
                    { chatID: 52, text: "OK!", callback: "h24_2" }
                ]
            },
            {
                chatID: 52,
                speaker: "p",
                text: "That's a good girl, now curtsy for me in your new dress. ",
                button: [
                    { chatID: 53, text: "OK!", callback: "h24_3" }
                ]
            },
            {
                chatID: 53,
                speaker: "p",
                text: "You're a natural. You should have been born a girl. Let me take a look at you. ",
                button: [
                    { chatID: 54, text: "OK!", callback: "h24_4" }
                ]
            },
            {
                chatID: 54,
                speaker: "p",
                text: "You need more butt, but there's time. Missy has something for you. ",
                button: [
                    { chatID: 55, text: "OK!", callback: "h24_5" }
                ]
            },
            {
                chatID: 55,
                speaker: "missy",
                text: "So you want to be a girly sissy, such a pretty little sissy. Well if you like wearing dreses so much " +
                    "you can start reporting here in a nice pretty skirt to show off those pretty little legs of yours. " +
                    "Go down to the local store and get yourself a pretty little skirt.",
                button: [
                    { chatID: 56, text: "....", callback: "" }
                ]
            },
            {
                chatID: 56,
                speaker: "thinking",
                text: "There's no way I can go into a girl's store and buy girly clothes! What if someone sees me, they'll " +
                    "make fun of me and tell " + sc.n("lola") + " and " + sc.n("eva") + " and " + sc.n("landlord") + " and " +
                    "all my friends! They'll never let me live it down. There's no way I can do this!",
                button: [
                    { chatID: 57, text: "....", callback: "" }
                ]
            },
            {
                chatID: 57,
                speaker: "missy",
                text: "Well slut, do you have anything to say?",
                button: [
                    { chatID: 58, text: "I'm so sorry ma'am, I can do it!", callback: "" }
                ]
            },
            {
                chatID: 58,
                speaker: "missy",
                text: "Oh, I guess you're just a sissy for us. Well no matter. Go see " + sc.n("tiffany") + " at the Toys 'n " +
                    " Us store. Pick up the package. You'll know what to do with it. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h24_6" }
                ]
            },
            {
                chatID: 59,
                speaker: "missy",
                text: "I think you're ready for this case. The owner of the local diner, " + sc.n("jeffery") + " " +
                    "asked me to open a case for him. Come up to my office and we'll go over it. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h28_x" }
                ]
            },
            {
                chatID: 60,
                speaker: "missy",
                text: "There's no classes while you're on assignment. Once you complete your assignment then you can rejoin your classes. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "endOnCase" }
                ]
            },
            {
                chatID: 61,
                speaker: "missy",
                text: "So, you want to take your femininity public?",
                button: [
                    { chatID: 62, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 62,
                speaker: "missy",
                text: "Well the classroom is not an ideal place to do that. Go see my friend " + sc.n("tiffany") + ". " +
                    "She's got a suprise for you.",
                button: [
                    { chatID: -1, text: "Squeel in excitement", callback: "h_29" }
                ]
            },
            {
                chatID: 63,
                speaker: "missy",
                text: "Making a permenet body modification is a serious step. I'm glad you've decided to go down this path. ",
                button: [
                    { chatID: 64, text: "* Squeel in excitement *", callback: "h_40" }
                ]
            },
            {
                chatID: 64,
                speaker: "missy",
                text: "Take this pill and put these glasses on. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h_40_1" }
                ]
            },
            {
                chatID: 65,
                speaker: "missy",
                text: "That should do it. The pill will take effect sometime while you sleep. Here's $20 for taking part in the " + 
                    "experimental pills.",
                button: [
                    { chatID: -1, text: "Bigger Boobs..........", callback: "h_40_3" }
                ]
            },
            {
                chatID: 66,
                speaker: "missy",
                text: "That should do it. The pill will take effect sometime while you sleep. Here's $20 for taking part in the " +
                    "experimental pills.",
                button: [
                    { chatID: -1, text: "Bigger Butt..........", callback: "h_40_3" }
                ]
            },
            {
                chatID: 67,
                speaker: "missy",
                text: "That should do it. The pill will take effect sometime while you sleep. Here's $20 for taking part in the " +
                    "experimental pills.",
                button: [
                    { chatID: -1, text: "Dick Sucking Lips..........", callback: "h_40_3" }
                ]
            },
            {
                chatID: 68,
                speaker: "missy",
                text: "I have some important work in my office to do. Follow me.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h_2" }
                ]
            },
            {
                chatID: 69,
                speaker: "missy",
                text: "Idiots think sissyness is all about the body and clothes. True sissyness is all in the mind. Today we will " +
                    "focus on your mind. ",
                button: [
                    { chatID: 70, text: "...", callback: "h_3_vr" }
                ]
            },
            {
                chatID: 70,
                speaker: "missy",
                text: "I'm going to put these on you, and just relax and let the video play.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h_3_vr1" }
                ]
            },
            {
                chatID: 71,
                speaker: "thinking",
                text: "I'm only happy when filled...",
                button: [
                    { chatID: 72, text: "[snap out of it]", callback: "h_3_vr1e" }
                ]
            },
            {
                chatID: 72,
                speaker: "missy",
                text: "You've taken your first real step. You should be proud of yourself. Tomorrow we shall continue your training " +
                    "and find your true self. ",
                button: [
                    { chatID: -1, text: "Yes mistress", callback: "h_3_vr2" }
                ]
            },
            {
                chatID: 73,
                speaker: "missy",
                text: "So after one hypno session you think you're ready to be a true sissy? There's still a long road ahead, but " +
                    "we're going to take the first big step. ",
                button: [
                    { chatID: 74, text: "...", callback: "" }
                ]
            },
            {
                chatID: 74,
                speaker: "missy",
                text: "You see, like so many boys you think pleasure comes from the penis, but a sissy knows that there are so many " +
                    "other ways to recieve pleasure. I'm going to give you a chance to explore those other ways. ",
                button: [
                    { chatID: 75, text: "Thanks?", callback: "" }
                ]
            },
            {
                chatID: 75,
                speaker: "missy",
                text: "Yes, thank me. Strip down.",
                button: [
                    { chatID: 76, text: "Yes ma'am", callback: "h6_1" }
                ]
            },
            {
                chatID: 76,
                speaker: "missy",
                text: "Now bring that boy cock over here so I can fix you.",
                button: [
                    { chatID: 77, text: "...", callback: "h6_2" }
                ]
            },
            {
                chatID: 77,
                speaker: "missy",
                text: "Hmmmm.....",
                button: [
                    { chatID: 78, text: "?", callback: "h6_3" }
                ]
            },
            {
                chatID: 78,
                speaker: "missy",
                text: "What a large cock you have. Maybe it shouldn't locked up. I bet it tastes so yummy in my mouth.",
                button: [
                    { chatID: 79, text: "Oh yeah!", callback: "h6_4" }
                ]
            },
            {
                chatID: 79,
                speaker: "missy",
                text: "Hahaha idiot. I'm going to lock that cock up, maybe for a day, maybe forever. ",
                button: [
                    { chatID: 80, text: "Huh?", callback: "h6_5" }
                ]
            },
            {
                chatID: 80,
                speaker: "missy",
                text: "....I...JUST.....GUGH.....TIGHT.....",
                button: [
                    { chatID: 81, text: "UUUGHH", callback: "h6_6" }
                ]
            },
            {
                chatID: 81,
                speaker: "missy",
                text: "You look good like that. I'm going to keep it there until either your cock shrinks to a clit, " +
                    "or you learn how orgasm like a girl. ",
                button: [
                    { chatID: 82, text: "...", callback: "" }
                ]
            },
            {
                chatID: 82,
                speaker: "thinking",
                text: "Oh crap, I thought this was just for fun. How the hell am I going to get this thing off! There's no " +
                    "way I want to shrink my cock and I have no idea how to orgasm like a girl!",
                button: [
                    { chatID: 83, text: "...", callback: "" }
                ]
            },
            {
                chatID: 83,
                speaker: "missy",
                text: "If you're worried about how you're going to orgasm, don't. I've helped many sissy's find their sissy pussy. " +
                    "Wear it, enjoy it, and if you want to change it for a different cage, just bring it in and I'll switch it out " +
                    "for you. Enjoy your chastity slut.",
                button: [
                    { chatID: -1, text: "😢 *Sad noises*", callback: "h6_end" }
                ]
            },
            {
                chatID: 84,
                speaker: "missy",
                text: "This next lesson I want to do it in my office, follow me.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h12_1" }
                ]
            },
            {
                chatID: 85,
                speaker: "missy",
                text: "I suppose you're ready for the real training. To take part you must give into me, fully and completely. If I allow you to " +
                    "serve me and partake in the full sissy training you must do what I say, when I say it without questions. You will be my slave, my " +
                    "brain-dead, slutty slave. Do you agree to be my personal slut?",
                button: [
                    { chatID: 87, text: "Yes mistress.", callback: "" },
                    { chatID: 86, text: "I have a question.", callback: "" },
                    { chatID: 86, text: "No, I'm not ready", callback: "" },
                    { chatID: 86, text: "What's the training?", callback: "" }
                ]
            },
            {
                chatID: 86,
                speaker: "missy",
                text: "You are not ready. Leave me until you can learn to serve without question.",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "h_15_badend" }
                ]
            },
            {
                chatID: 87,
                speaker: "missy",
                text: "Good, those are the only words a slave needs. Your training will continue in " +
                    "my training room, specifically the Red Room.",
                button: [
                    { chatID: 88, text: "...", callback: "" }
                ]
            },
            {
                chatID: 88,
                speaker: "missy",
                text: "I will let my door slave know you can now enter the room. Simply go into the hallway and use the elevator. Press the button " +
                    "for the Red Room of Discipline. Since I have only have " +
                    "so much time in my day you'll have to arrive by 10:00 each day you wish to progress. Do you understand?",
                button: [
                    { chatID: 87, text: "Sorry mistress, can you repeat that", callback: "" },
                    { chatID: 89, text: "Yes mistress.", callback: "" }
                ]
            },
            {
                chatID: 89,
                speaker: "missy",
                text: "Good now go. ",
                button: [
                    { chatID: -1, text: "Yes mistress", callback: "h12_1_end" }
                ]
            },
            {
                chatID: 90,
                speaker: "missy",
                text: "So, you feel you're ready to be bent over and made a slut? Stand up.",
                button: [
                    { chatID: 91, text: "Yes mistress", callback: "h16_1" }
                ]
            },
            {
                chatID: 91,
                speaker: "p",
                text: "Oooo I want to play too! Strip to your panties!",
                button: [
                    { chatID: 92, text: "[Strip]", callback: "h16_2" }
                ]
            },
            {
                chatID: 92,
                speaker: "p",
                text: "I think a sissy in panties is so sexy! I need to see that cute butt of yours!",
                button: [
                    { chatID: 93, text: "Thank you?", callback: "h16_3" }
                ]
            },
            {
                chatID: 93,
                speaker: "p",
                text: "Such a nice butt! It really needs to be spread open! Strip down those panties mister!",
                button: [
                    { chatID: 94, text: "[Remove your panties]", callback: "h16_4" }
                ]
            },
            {
                chatID: 94,
                speaker: "p",
                text: "Oh yes! Really nice! Breaking that in is going to be amazing.",
                button: [
                    { chatID: 95, text: "....", callback: "h16_5" }
                ]
            },
            {
                chatID: 95,
                speaker: "missy",
                text: "Oh yes. Big red here has been itching for that ass.",
                button: [
                    { chatID: 96, text: "....", callback: "" }
                ]
            },
            {
                chatID: 96,
                speaker: "missy",
                text: "Oh no! There's no way that is fitting in! I've never had anything like that in me, it will hurt so " +
                    "so much! I can't believe I asked for this. Surly she can't really use that on me.",
                button: [
                    { chatID: 97, text: "....", callback: "" }
                ]
            },
            {
                chatID: 97,
                speaker: "p",
                text: "Don't worry honey, we'll be gental. Now bend over and spread those little cheeks of yours.",
                button: [
                    { chatID: 98, text: "[Bend and spread]", callback: "h16_6" }
                ]
            },
            {
                chatID: 98,
                speaker: "p",
                text: "That looks hungry for dick doesn't it?",
                button: [
                    { chatID: 99, text: "*Whimper*", callback: "" }
                ]
            },
            {
                chatID: 99,
                speaker: "missy",
                text: "So very hungry. Shall we reward him with lube, or go dry?",
                button: [
                    { chatID: 100, text: "*Whimper More*", callback: "" }
                ]
            },
            {
                chatID: 100,
                speaker: "p",
                text: "I'm going to lube this slut up!",
                button: [
                    { chatID: 101, text: "...", callback: "h16_7" }
                ]
            },
            {
                chatID: 101,
                speaker: "missy",
                text: "Oh yeah, get in there girl.",
                button: [
                    { chatID: 102, text: "*Moan*", callback: "h16_8" }
                ]
            },
            {
                chatID: 102,
                speaker: "p",
                text: "There nice and drippy!",
                button: [
                    { chatID: 103, text: "...", callback: "h16_9" }
                ]
            },
            {
                chatID: 103,
                speaker: "missy",
                text: "Let me get your sissy pussy ready.",
                button: [
                    { chatID: 104, text: "...", callback: "h16_10" }
                ]
            },
            {
                chatID: 104,
                speaker: "missy",
                text: "This pussy really grips my finger",
                button: [
                    { chatID: 105, text: "*Moan*", callback: "" }
                ]
            },
            {
                chatID: 105,
                speaker: "thinking",
                text: "Oh wow! That really feels good. Why does that feel so good? Am I really a butt slut sissy?",
                button: [
                    { chatID: 106, text: "...", callback: "h16_11" }
                ]
            },
            {
                chatID: 106,
                speaker: "missy",
                text: "Are you ready to get split open? Bend over face down, ass up slut!",
                button: [
                    { chatID: 107, text: "Oh no!", callback: "h16_12" }
                ]
            },
            {
                chatID: 107,
                speaker: "p",
                text: "Don't worry my little sissy, I'm only going to use this little dildo on you. You're aren't sissy " +
                    "enough for " + sc.n("missy") + "'s cock just yet. ",
                button: [
                    { chatID: 108, text: "Sigh in relief", callback: "h16_13" }
                ]
            },
            {
                chatID: 108,
                speaker: "p",
                text: "Don't worry my little sissy, I'm only going to use this little dildo on you. You're aren't sissy " +
                    "enough for " + sc.n("missy") + "'s cock just yet. ",
                button: [
                    { chatID: 109, text: "Sigh in relief", callback: "h16_14" }
                ]
            },
            {
                chatID: 109,
                speaker: "missy",
                text: "Take it slut",
                button: [
                    { chatID: 110, text: "Grunt", callback: "h16_15" }
                ]
            },
            {
                chatID: 110,
                speaker: "p",
                text: "Oh yes, Grip my rubber dick sissy!",
                button: [
                    { chatID: 111, text: "Grunt", callback: "h16_16" }
                ]
            },
            {
                chatID: 111,
                speaker: "p",
                text: "You'll make a great sissy hole in my pink room. Can't wait to see you there!",
                button: [
                    { chatID: 112, text: "Groan..", callback: "" }
                ]
            },
            {
                chatID: 112,
                speaker: "missy",
                text: "You've really come a long way. You'll be a full on sissy before you even realize it.",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "h16_end" }
                ]
            },
            {
                chatID: 113,
                speaker: "missy",
                text: "Let us talk about this new case in my office. Follow me my sissy butt slut.",
                button: [
                    { chatID: -1, text: "[Follow her]", callback: "h_19" }
                ]
            },
            {
                chatID: 114,
                speaker: "missy",
                text: "So you want to be a glory hole slut? Go see " + sc.n("cecilia") + " in the park bathroom on the weekends. " +
                    "She'll show you how to suck a cock like the sissy you are. She likes to hang out in the toilets. ",
                button: [
                    { chatID: -1, text: "Ok. I'll see " + sc.n("cecilia") + " in the park bathroom this weekend. ", callback: "h_13" },
                ]
            },
            {
                chatID: 115,
                speaker: "p",
                text: "You're sitting on that chair like your dickis on display " +
                    "for everyone to partake. You're hunched over almost like you're taking a shit on my chair, and your face " +
                    "is about as exciting and interesting as a box of woodchips. ",
                button: [
                    { chatID: 116, text: "ouch", callback: "" }
                ]
            },
            {
                chatID: 116,
                speaker: "p",
                text: "So here's your first lesson with me. When ever you sit, picture a pretty little pussy between your legs. " +
                    "Unlike a cock that gets shoved in everyone's face, your pussy is a treasure that you need to protect from " +  
                    "all the cocks in this world. That is why you're going to cross your legs when you sit from now on. ",
                button: [
                    { chatID: 117, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 117,
                speaker: "p",
                text: "Also no more glum boring faces. A glum boring girl never gets asked to dance. Your face needs to " +
                    "be inviting becuase your legs are not. You need a warm, inviting and happy face that looks up, not " + 
                    "scans the floor beneth your feet. Go ahead try it.",
                button: [
                    { chatID: 118, text: "ok", callback: "h_21_2" }
                ]
            },
            {
                chatID: 118,
                speaker: "p",
                text: "Oh wow! That's perfect. You see, even your your body hasn't changed, you look like a girl by just changing " +
                    "the way you sit and present yourself. I may even mistake your for a boyish lesbian when you sit like that. " +
                    "when you come back next week we will go further in how to properly sit. ",
                button: [
                    { chatID: -1, text: "Thanks!", callback: "h_21_end" }
                ]
            },
            {
                chatID: 119,
                speaker: "p",
                text: "Now you need to go up to the toilet and pee for me.",
                button: [
                    { chatID: 120, text: "What?!", callback: "" }
                ]
            },
            {
                chatID: 120,
                speaker: "p",
                text: "Don't act all proper. You know you want to pull your dick out in front of me. Now piss for me!",
                button: [
                    { chatID: 121, text: "Ok, here goes!", callback: "h_22_2" }
                ]
            },
            {
                chatID: 121,
                speaker: "p",
                text: "Now stop right there. Notice how your dicks out pointing at the toilet? ",
                button: [
                    { chatID: 122, text: "hmmm?", callback: "" }
                ]
            },
            {
                chatID: 122,
                speaker: "p",
                text: "Like all boys you just whip your dick out and spray your piss everywhere! You boys really are disgusting " +
                    "when it comes to using using a toilet. You're no longer a boy, you're a girl. You have to sit to pee now everytime.",
                button: [
                    { chatID: 123, text: "Sit to pee?", callback: "h_22_3" }
                ]
            },
            {
                chatID: 123,
                speaker: "p",
                text: "Yes you sissy girl! Sit to pee! From now on everytime you pee you'll picture yourself as a pretty little " +
                    "girl with big boobs when you sit to pee. NOW SIT AND PEE SLUT!",
                button: [
                    { chatID: -1, text: "Squeal", callback: "h_22_4" }
                ]
            },
            {
                chatID: 124,
                speaker: "p",
                text: "There aren't you a pretty little pee pee girl. From now on you will sit when you pee my pretty little pee pee " +
                    "slut. ",
                button: [
                    { chatID: 125, text: "Yes. I will sit to pee from now on. ", callback: "" }
                ]
            },
            {
                chatID: 125,
                speaker: "p",
                text: "That's a good girl! You're really progressing! Such a good girl. ",
                button: [
                    { chatID: -1, text: "Thank you. I am a good girl. ", callback: "h_22_5" }
                ]
            },
            {
                chatID: 126,
                speaker: "p",
                text: "Work in progress, but here you go!",
                button: [
                    { chatID: -1, text: "I can dress sexy", callback: "h_31_end" }
                ]
            },
            {
                chatID: 127,
                speaker: "missy",
                text: "So you want to learn how to use your little sissy pussy? Aren't we impetuous. Stip and bend over slut.",
                button: [
                    { chatID: 128, text: "I am a slut.", callback: "h_58_1" }
                ]
            },
            {
                chatID: 128,
                speaker: "missy",
                text: "So eager it's disgusting. I am going to give you a great sissy lesson on lube. ",
                button: [
                    { chatID: 129, text: "Yes!", callback: "h_58_2" }
                ]
            },
            {
                chatID: 129,
                speaker: "missy",
                text: "Now the sissy pussy has a weakness. It does not self lubricate. Now this if fine for whom ever is using it at " +
                    "the time, but constant repeated use without lube will make the sissy pussy unsable. And a sissy's pussy needs to " + 
                    "always be ready for use. ",
                button: [
                    { chatID: 130, text: "oh...", callback: "h_58_3" }
                ]
            },
            {
                chatID: 130,
                speaker: "missy",
                text: "You'll notice as I lube this up your wet warm pussy opens up to take me. Lube makes it hungry. ",
                button: [
                    { chatID: 131, text: "mmmMMMmmmm...", callback: "h_58_4" }
                ]
            },
            {
                chatID: 131,
                speaker: "missy",
                text: "I'm going to give you some lube, if you are running low you need to go purchase more. A sissy " +
                    "needs to always play with their pussy. ",
                button: [
                    { chatID: -1, text: "Yes mistress", callback: "h_58_5" }
                ]
            },
            {
                chatID: 132,
                speaker: "p",
                text: "I'm going to talk to you about hormones today. You see your body betrays your true self. You want to look, " +
                    "act, even taste like a girl. Have a smooth body, long hair, plump butt, and even some boobies. You body " +
                    "won't let you do this thing you want to much, so you need help. ",
                button: [
                    { chatID: 133, text: "Help?", callback: "" }
                ]
            },
            {
                chatID: 133,
                speaker: "p",
                text: "Yes. You need your body to stop pumping your body full of testosterone and start filling it with estrogen. " +
                    "Lucky for you " + sc.n("spanky") + " has a solution with his special little pills. Take the pills so that " +
                    "your body can match your mind. ",
                button: [
                    { chatID: 134, text: "ok!", callback: "" }
                ]
            },
            {
                chatID: 134,
                speaker: "p",
                text: "To continue to be trained by me, you must take your pills to rid yourself of that dirty testosterone and " +
                    "fill yourself with lovely estrogen. I'll give you 10 pills to start. I recommend taking them every day. It will " +
                    "take some time to raise your levels. You'll also find some great added bonuses like slowed body hair growth " +
                    "as your body accepts its sissyness. ",
                button: [
                    { chatID: -1, text: "I'll take my pills", callback: "h_51" }
                ]
            },
            {
                chatID: 135,
                speaker: "thinking",
                text: "I forgot to change into my outfit. Let me do that really quick. ",
                button: [
                    { chatID: -1, text: "Change into the correct outfit. ", callback: "outfitChange" }
                ]
            },
            {
                chatID: 136,
                speaker: "missy",
                text: "So you want to shove fake dicks in your asshole? That's a good sissy. Dildos are an excellent way to stretch " +
                    "that pussy of yours. Like most sluts I'm sure you're going to go out and buy the biggest dildo you can get your " +
                    "hands on, but your pussy is not ready for that. ",
                button: [
                    { chatID: 137, text: "...", callback: "" }
                ]
            },
            {
                chatID: 137,
                speaker: "missy",
                text: "Start small and work your way up. The girls you see in porn taking a fist up to their elbo didn't start like " +
                    "that. They got there over months or years of shoving incresingly bigger things into their asshole. Start with " +
                    "your fingers then work up to bigger dildos. Once you have a good stretch you'll need to increase your dildo size. ",
                button: [
                    { chatID: 138, text: "...", callback: "h_59" }
                ]
            },
            {
                chatID: 138,
                speaker: "missy",
                text: "Take this home. It's a good starter dildo. You'll find it in your nightstand next to your bed. If it's too " +
                    "big use your fingers for a bit. Keep working that sissy hole with increasing bigger toys. ",
                button: [
                    { chatID: 139, text: "Aren't you going to use it on me?", callback: "" }
                ]
            },
            {
                chatID: 139,
                speaker: "missy",
                text: "No. You can strech your own pussy. The journey of self discovery is sometimes best done alone. ",
                button: [
                    { chatID: -1, text: "Ok, thanks for the dildo ma'am.", callback: "h_59_1" }
                ]
            },
            {
                chatID: 140,
                speaker: "missy",
                text: "I'm so glad you know you were never a man. Only a true sissy girl would want a smaller clit. ",
                button: [
                    { chatID: 141, text: "Mmmm clitty...", callback: "h_8_1" }
                ]
            },
            {
                chatID: 141,
                speaker: "missy",
                text: "Now just hold still while I pull out your clitty. ",
                button: [
                    { chatID: -1, text: "Yes misstress", callback: "h_8_2" }
                ]
            },
            {
                chatID: 142,
                speaker: "missy",
                text: "Let me just remove this chastity cage really quick to put on your Tiny PP cream, and in the morning your " +
                    "your little PP will be smaller. ",
                button: [
                    { chatID: -1, text: "Thank you mistress. I want a clitty!", callback: "end" }
                ]
            },
            {
                chatID: 143,
                speaker: "missy",
                text: "Let me just put on your Tiny PP cream, and in the morning your " +
                    "your little PP will be smaller. ",
                button: [
                    { chatID: -1, text: "Thank you mistress. I want a clitty!", callback: "end" }
                ]
            },
            {
                chatID: 144,
                speaker: "missy",
                text: "I promised " + sc.n("tiffany") + " we would let her teach you how to wear makup. Go see her in her " +
                    "apartment and she'll give you some lessons. ",
                button: [
                    { chatID: -1, text: "Ok, I'll go see " + sc.n("tiffany") + ".", callback: "reset" }
                ]
            },
            {
                chatID: 145,
                speaker: "missy",
                text: "So you're probably wondering what's in this red box? ",
                button: [
                    { chatID: 146, text: "?", callback: "h55_2" }
                ]
            },
            {
                chatID: 146,
                speaker: "missy",
                text: "It's your next case. Put on this robe. ",
                button: [
                    { chatID: 147, text: "Yes ma'am", callback: "h55_3" }
                ]
            },
            {
                chatID: 147,
                speaker: "missy",
                text: "That will work. Have a seat while I go over your assignment. ",
                button: [
                    { chatID: 148, text: "[Sit]", callback: "h55_4" }
                ]
            },
            {
                chatID: 148,
                speaker: "missy",
                text: "I have a very important, very real case for you involving the cult. The cult has been infecting this town " +
                    "for over a decade. They started slowly with just a few members out at the old military fort, but over the years " +
                    "their numbers have grown into the hundreds. ",
                button: [
                    { chatID: 149, text: "...", callback: "55_5" }
                ]
            },
            {
                chatID: 149,
                speaker: "missy",
                text: "The cult calls themselves the Carnal Union of Mortals or CUM. for short. It's lead by a man named Ubel. " +
                    "Not a lot is known about him, he just showed up with a small collection of followers, bought the land that the " +
                    "fort is on in cash, and has been leading CUM ever since. ",
                button: [
                    { chatID: 150, text: "...", callback: "" }
                ]
            },
            {
                chatID: 150,
                speaker: "missy",
                text: "I have an informant on the inside. I can't tell you his name, but he's a low level follower and hasn't been able " + 
                    "to infiltrate the high level priests so I don't know about the inner workings of the cult. What I do know is that " +
                    "they are truly evil. There's boys chained to walls milked for their cum five times a day by milk maids. " +
                    "They collect it for the milk bath rituals where they take hermaphrodites to be bathed and bred by all " +
                    "the male worshippers. This can last for days where her only sustenance is the cum from the bath surrounding her " +
                    "and the cocks in her mouth. ",
                button: [
                    { chatID: 151, text: "What about the police?", callback: "" }
                ]
            },
            {
                chatID: 151,
                speaker: "missy",
                text: "The reason the police don't get involved is that it's all voluntary. They've been brainwashed into believing " +
                    "that if the hermaphrodite is able to conceive they will give birth to Azreal, the Angel of Death. " +
                    "They believe that once Azreal is upon the earth he will " +
                    "destroy all mankind except for the followers of CUM who will now rule over all. ",
                button: [
                    { chatID: 152, text: "...", callback: "55_6" }
                ]
            },
            {
                chatID: 152,
                speaker: "missy",
                text: "Now this is Jen. She's just a milkmaid, and one of Ubel's main girls. That was until Ubel discarded " +
                    "her for another girl. Now Jen's mad and we may be able to turn her from the cult and get information from her to " +
                    "help us in our fight against them. This is where you come in. ",
                button: [
                    { chatID: 153, text: "Am I going to infiltrate the cult?", callback: "" }
                ]
            },
            {
                chatID: 153,
                speaker: "missy",
                text: "Hahahaha, you silly sissy. You are no where near ready to deal with the cult. I need you to meet with Jen " +
                    "and deliver a note. That's all. They know who " + sc.n("cecilia") + " and I are, as well as all the police in " +
                    "this town, so we can't jeopardize a meeting with Jen. However, they don't know you. I need you to meet her in the " +
                    "park tonight with this note and pass it to her. ",
                button: [
                    { chatID: 154, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 154,
                speaker: "missy",
                text: "You are not to talk to anyone else, just hide in the last bathroom stall in the girls bathroom " +
                    "and wait. She'll come in and say 'I hate this crappy toilet paper.' You'll reply with 'I know, It's going " +
                    "to knock the hell out of my hemorrhoids.' Then pass the note under the stall. Wait for her to leave " +
                    "then leave yourself. Make sure you're not being followed then meet me back here in my office. I'll stay " +
                    "late to make sure you're ok. ",
                button: [
                    { chatID: 155, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 155,
                speaker: "missy",
                text: "So what does she say to initiate the greeting? ",
                button: [
                    { chatID: 156, text: "I hate this crappy toilet paper.", callback: "" }
                ]
            },
            {
                chatID: 156,
                speaker: "missy",
                text: "Good, and what's your reply?",
                button: [
                    {
                        chatID: 157, text: "I know, It's going to knock the hell out of my hemorrhoids.", callback: "" }
                ]
            },
            {
                chatID: 157,
                speaker: "missy",
                text: "Then come back to my office where I'll be waiting for you. You'll wear the cult robe so as not to " +
                    "arouse suspicion when you leave. That park is crawling with cult members at night. ",
                button: [
                    {
                        chatID: 158, text: "Yes ma'am", callback: ""
                    }
                ]
            },
            {
                chatID: 158,
                speaker: "missy",
                text: "Ok, now head to the last bathroom stall in the girl's bathroom and wait for tonight. Jen will be by around " +
                    "10:00 PM tonight. Don't talk to anyone, don't look at anyone, just go to the stall and wait in your robe. Take " +
                    "this note with you. ",
                button: [
                    {
                        chatID: 159, text: "[Take note and go to the park bathroom]", callback: "55_7"
                    }
                ]
            },
            {
                chatID: 159,
                speaker: "thinking",
                text: "Oh wow, it's still so early. I should have packed a lunch. I guess I'll just sit here and wait....",
                button: [
                    {
                        chatID: 160, text: "[Wait...]", callback: "55_8"
                    }
                ]
            },
            {
                chatID: 160,
                speaker: "random",
                text: "Hay, you in the stall next door. You've been in there a while. You want to have some fun while you wait? " +
                    "My oral skills are amazing. ",
                button: [
                    {
                        chatID: 161, text: "...", callback: ""
                    }
                ]
            },
            {
                chatID: 161,
                speaker: "thinking",
                text: "Oh wow, that girl in the next stall sounds hot. It's still really early. I bet I could fuck her really quick " +
                    "and continue to wait. I have so much time still. ",
                button: [
                    { chatID: 162, text: "Yeah, come over, I want to see your oral skills! ", callback: "" },
                    { chatID: 165, text: "[Stay silent]", callback: "" }
                ]
            },
            {
                chatID: 162,
                speaker: "missy",
                text: "Oh I'll show you my oral skills! Get out here RIGHT now!",
                button: [
                    { chatID: 163, text: sc.n("missy") + "...", callback: "h55_9" }
                ]
            },
            {
                chatID: 163,
                speaker: "missy",
                text: "I told you not to talk to anyone. You're going to blow this entire thing, and you've only been here for an hour! " +
                    "Now get back in there and stop goofing off. This is more important than you know you little pervert! ",
                button: [
                    { chatID: 164, text: "I'm so sorry, I just...", callback: "" }
                ]
            },
            {
                chatID: 164,
                speaker: "missy",
                text: "Don't apologize, just get in there and do your job. NOW! ",
                button: [
                    { chatID: 166, text: "Yes ma'am", callback: "55_10" }
                ]
            },
            {
                chatID: 165,
                speaker: "thinking",
                text: "There's no way I'm saying anything. I'm just going to sit here and wait. ",
                button: [
                    { chatID: 166, text: "...", callback: "55_10" }
                ]
            },
            {
                chatID: 166,
                speaker: "random",
                text: "I hate this crappy toilet paper.",
                button: [
                    { chatID: 167, text: "...", callback: "" }
                ]
            },
            {
                chatID: 167,
                speaker: "thinking",
                text: "Oh shit, that's for me! I better pass the note.. What was my line. Oh yeah, hemorrhoids. What a strange " +
                    "line. I bet she did that just to embarrass me. Oh well, here goes. ",
                button: [
                    { chatID: 168, text: "I know, It's going to knock the hell out of my hemorrhoids.", callback: "h55_11" }
                ]
            },
            {
                chatID: 168,
                speaker: "thinking",
                text: "That was easy. Now I'll wait for 10 minutes and return to the agency. ",
                button: [
                    { chatID: 169, text: "[Wait 10 minutes and go back]", callback: "h55_12" }
                ]
            },
            {
                chatID: 169,
                speaker: "me",
                text: "Oh! Hi fellow cult members. Lovely night isn't it.",
                button: [
                    { chatID: 170, text: "...", callback: "" }
                ]
            },
            {
                chatID: 170,
                speaker: "me",
                text: "Oh my look at the time. I better go get some more cum. I sure do love cum!",
                button: [
                    { chatID: 171, text: "...", callback: "h55_13" }
                ]
            },
            {
                chatID: 171,
                speaker: "me",
                text: "Oooooofffffffff",
                button: [
                    { chatID: 172, text: "...", callback: "h55_14" }
                ]
            },
            {
                chatID: 172,
                speaker: "thinking",
                text: "...",
                button: [
                    { chatID: 173, text: "...", callback: "h55_15" }
                ]
            },
            {
                chatID: 173,
                speaker: "me",
                text: "*Groan*",
                button: [
                    { chatID: -1, text: "...", callback: "h55_16" }
                ]
            },
            {
                chatID: 174,
                speaker: "Ubel",
                text: "So the drudge awakes. Did you really think my favorite pet, Jen here, would turn on me?",
                button: [
                    { chatID: 175, text: "Oh... uh...", callback: "" }
                ]
            },
            {
                chatID: 175,
                speaker: "Ubel",
                text: "Shhhhh. I was hoping I would catch a bigger fish, but you'll do. If you behave yourself you may just get " +
                    "to be one of my cum cows. If not then we slaughter you like a cow and feast on your flesh. ",
                button: [
                    { chatID: 176, text: "Let me out! This is kidnapping!", callback: "" }
                ]
            },
            {
                chatID: 176,
                speaker: "Ubel",
                text: "Yell all you want. You're in the deepest part of the fort. No one will ever hear you again. ",
                button: [
                    { chatID: 177, text: "Please...", callback: "" }
                ]
            },
            {
                chatID: 177,
                speaker: "Ubel",
                text: "I've spent enough time with you. Sleep little cow, tomorrow is going to be busy. ",
                button: [
                    { chatID: -1, text: "whimper", callback: "h55_17" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};