//Room name
var room7 = {};
room7.main = function () {
    
    g.pass = null; //clear end sleepy time
    if (g.dt.toDateString() === g.startDate.toDateString()) {
        nav.bg("7_mainCharRoomAlt/wake_landlord_angry.jpg");
        chat(0, 7);
    }
    else if (sc.getSecret("lola").secretOut && sc.getMissionTask("lola", "sissy", 0).notStarted) {
        nav.bg("7_mainCharRoomAlt/secretout.jpg");
        chat(7, 16);
    }
    else if (sc.taskGetStep("eva", "fuck") === 1) {
        char.settime(6, 30);
        nav.killall();
        nav.bg("7_mainCharRoomAlt/e0.jpg");
        chat(27, 7);
    }
    else if (g.dt.getDay() === 0) { //sunday
        nav.bg("7_mainCharRoomAlt/wake_landlord_angry.jpg");
        chat(7, 7);
    }
    else if (g.dt.getDay() === 1 && gv.get("workMonday")) {
        nav.bg("7_mainCharRoomAlt/bigguy_monday.jpg");
        if (!sc.getSecret("bigguy").secretOut) {
            if (cl.isCrossdressing()) {
                sc.modSecret("landlord", 15);
                sc.modSecret("bigguy", 15);
                chat(51, 7);
            }
            else if (cl.pantiesTxt() === "panties") {
                sc.modSecret("landlord", 5);
                sc.modSecret("bigguy", 5);
                chat(52, 7);
            }
            else
                chat(53, 7);
        }
        else {
            chat(53, 7);
        }
    }
    else if (g.dt.getDay() !== 6) {
        nav.bg("7_mainCharRoomAlt/wake_landlord_nightgown.jpg");
        gv.mod("arousal", 30);
        if (cl.c.pj === null && cl.c.panties === null) {
            if (cl.c.chastity === null) {
                if (gv.get("arousal") > 80 && sc.getLevel("landlord") > 6) {
                    chat(13, 7);
                }
                else
                    chat(17, 7);
            }
            else {
                if (!gender.getChange("landlord", "chastity")) {
                    gender.setChanges("landlord", "chastity");
                    sc.modSecret("landlord", 15);
                    chat(19, 7);
                }
                else {
                    sc.modSecret("landlord", 3);
                    chat(18, 7);
                }
            }

        }
        else if (cl.pantiesTxt() === "panties") {
            if (cl.c.panties === "c") { //ll panties
                nav.bg("7_mainCharRoomAlt/wake_landlord_nightgown_angry.jpg")
                sc.modSecret("landlord", 25);
                sc.modLevel("landlord", -100, 999);
                gender.setChanges("landlord", "panties");
                chat(24, 7);
            }
            else if (!gender.getChange("landlord", "panties")) {
                sc.modSecret("landlord", 25);
                gender.setChanges("landlord", "panties");
                chat(21, 7);
            }
            else {
                sc.modSecret("landlord", 2);
                chat(23, 7);
            }
        }
        else if (g.dt.getDay() === 5) {
            chat(26, 7);
        }
        else if (gv.get("jobapplyconst") < 2)
            chat(8, 7);
        else if (missy.activecase().name === "apply")
            chat(10, 7);
        else {
            chat(11, 7);
        }
    }
    else {
        if (sc.getMission("bigguy", "ex").notStarted) {
            switch (sc.taskGetStep("bigguy", "rent")) {
                case -1:
                case 0:
                    nav.bg("7_mainCharRoomAlt/both.jpg");
                    sc.startMission("bigguy", "rent");
                    sc.completeMissionTask("bigguy", "rent", 0);
                    chat(40, 7);
                    break;
                case 1:
                case 2:
                    nav.bg("7_mainCharRoomAlt/bigguy_zz.jpg");
                    if (cl.isCrossdressing() || cl.pantiesTxt() === "panties") {
                        sc.modSecret("landlord", 10);
                        sc.modSecret("bigguy", 10);
                        chat(54, 7);
                    }
                    else
                        chat(999, 7);
                    break;
                case 3:
                    nav.bg("7_mainCharRoomAlt/bigguy1.jpg");
                    chat(57, 7);
                    break;
                default:

                    break;
            }
        }
        else {
            chat(9, 7);
        }
    }
    //else if (sc.taskGetStep("bigguy", "sissy") > 3 && sc.getMission("bigguy", "sissy").inProgress) {
    //    if (sc.getMissionTask("bigguy", "sissy", 4).notStarted)
    //        sc.completeMissionTask("bigguy", "sissy", 4);
    //    nav.bg("7_mainCharRoomAlt/bigguy0.jpg");
    //    g.internal = 0;
    //    nav.next("bigguy0");
    //}
    //else {
    //    chat(12, 7);
    //}
    
};

room7.btnclick = function (name) {
    switch (name) {
        case "bigguy0":
            if (g.internal === 0)
                nav.bg("7_mainCharRoomAlt/bigguy1.jpg");
            else {
                nav.killall();
                chat(35, 7);
            }
            g.internal++;
            break;
        case "bigguy_x":
            var chastx = [7, 8, 10, 12, 13];
            var cx = "";
            if (chastx.includes(g.internal) && cl.c.chastity !== null)
                c = "_c";
            nav.bg("7_mainCharRoomAlt/bigguy" + g.internal + cx + ".jpg");
            
            if (g.internal === 14) {
                nav.killbutton("bigguy_x");
                chat(38, 7);
            }
            g.internal++;
            break;
        case "eva10b2":
            zcl.displayMain(220, -150, .47, "", true);
            chat(42, 7);
            break;
        case "eva10b3a":
            if (g.internal === 0)
                nav.bg("7_mainCharRoomAlt/eva10b3a.jpg");
            else if (g.internal === 1)
                nav.bg("7_mainCharRoomAlt/eva10b3b.jpg");
            else if (g.internal === 2) {
                nav.bg("7_mainCharRoomAlt/eva10b3c.jpg");
                nav.killbutton("eva10b3a");
                chat(43, 7);
            }
            g.internal++;
            break;
        case "eva10b3f":
            nav.killbutton("eva10b3f");
            nav.button({
                "type": "img",
                "name": "eva10b5",
                "left": 164,
                "top": 69,
                "width": 1700,
                "height": 994,
                "image": "7_mainCharRoomAlt/eva10b4.gif"
            }, 7);
            g.roomTimeout = setTimeout(function () { chat(49, 7); }, 2000);
            break;
        case "eva11c":
            nav.killbutton("eva11c");
            nav.bg("7_mainCharRoomAlt/eva11d.jpg");
            nav.button({
                "type": "img",
                "name": "eva11d",
                "left": 1220,
                "top": 0,
                "width": 700,
                "height": 1080,
                "image": "7_mainCharRoomAlt/eva11d.gif"
            }, 7);
            chat(78, 7);
            break;
        case "e":
            if (g.internal > 10) {
                nav.killbutton("e");
                chat(34, 7);
            }
            else {
                nav.bg("7_mainCharRoomAlt/e" + g.internal + ".jpg");
                g.internal++;
            }
            break;
        case "rent4_0":
            var chastx1 = [7, 8, 10, 12, 13];
            var cx1 = "";
            if (chastx1.includes(g.internal) && cl.c.chastity !== null)
                c = "_c";
            nav.bg("7_mainCharRoomAlt/bigguy" + g.internal + cx1 + ".jpg");

            if (g.internal === 14) {
                nav.killbutton("rent4_0");
                chat(58, 7);
            }
            g.internal++;
            g.internal;
            break;
        default:
            break;
    }
};

room7.chatcatch = function (callback) {
    switch (callback) {
        case "e1":
        case "e2":
        case "e3":
        case "e4":
        case "e5":
        case "e6":
        case "bigguy2":
        case "bigguy00":
        case "bigguy01":
        case "bigguy02":
        case "bigguy1":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            break;
        case "bigguy15":
            gv.set("pastRent", 0);
            gv.set("rentChores", 0);
            if (sc.getMissionTask("bigguy", "rent", 2).notStarted)
                sc.completeMissionTask("bigguy", "rent", 2);
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            break;
        case "bigguy15_4":
            gv.set("pastRent", 0);
            gv.set("rentChores", 0);
            nav.bg("7_mainCharRoomAlt/bigguy15.jpg");
            break;
        case "e7":
            g.internal = 7;
            nav.next("e");
            break;
        case "money":
            gv.mod("money", 250);
            break;
        case "leave":
            nav.killbutton("mother");
            break;
        case "goToChurch":
            char.room(775);
            break;
        case "clearRoom":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            
            break;
        case "lastWord":
            if (g.dt.getDay() === 5) {
                chat(26, 7);
            }
            else {
                nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
                chat(9, 7);
            }
            
            break;
        //case "payYouMom":
        //    gv.mod("money", -1 * gv.get("rent"));
        //    gv.set("rent",  200);
        //    gv.set("rentKnockOff", 0);
        //    gv.set("rentOwed", 0);
        //    break;
        case "finsihPayMom":
            //sc.setchar("landlord", -1);
            nav.killbutton("mother");
            break;
        case "momAngry":
            //sc.setchar("landlord", -1);
            break;
        case "incrementPay":
            gv.set("rentOwed", gv.get("rent"));
            gv.set("rent", 200);
            gv.set("rentOwed", gv.get("rentOwed") - gv.get("money"));
            gv.set("money", 0);
            break;
        case "backOwe":
            if (g.gt("rentOwed", "money")) {
                gv.mod("rentOwed", -1 * gv.get("money"));
                gv.set("money", 0);
                chat(14, 7);
            }
            else {
                gv.mod("money", -1 * gv.get("rentOwed"));
                gv.set("rentOwed", 0);
                chat(13, 7);
            }
            break;
        case "leaveRoom":
            nav.killbutton("mother");
            break;
        case "o0":
        case "o1":
        case "o2":
        case "o3":
        case "o4":
            cl.wearSavedOutfit(callback[1]);
            char.room(10);
            break;
        case "o5":
            char.room(10);
            break;
        case "shave":
            nav.killbutton("eva");
            sc.setstep("eva", 2);
            sc.setstep("me", -1);
            scc.love("eva", 5, null);
            break;
        case "eva1":
            nav.modbutton("eva", "7_mainCharRoomAlt/eva1.png", null, null);
            break;
        case "eva2":
            nav.modbutton("eva", "7_mainCharRoomAlt/eva2.png", null, null);
            break;
        case "eva3":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva3.jpg");
            break;
        case "eva4":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva4.jpg");
            break;
        case "eva4a":
            nav.bg("7_mainCharRoomAlt/eva4a.jpg");
            break;
        case "eva5":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva5.jpg");
            break;
        case "eva6":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva6.jpg");
            break;
        case "eva7":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            daily.set("eva");
            sc.setstep("eva", 10);
            char.addtime(30);
            break;
        case "lola1":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            sc.setstep("lola", 11);
            char.addtime(30);
            break;
        case "eva30":
            nav.killbutton("eva");
            char.addtime(30);
            break;
        case "eva10a":
            nav.modbutton("eva", "7_mainCharRoomAlt/eva2.png", null, null);
            break;
        case "eva10b":

            if (cl.c.chastity !== null) {
                chat(38, 7);
            }
            else if (cl.c.cock < 3) {
                nav.killall();
                nav.bg("7_mainCharRoomAlt/eva10b.jpg");
                chat(41, 7);
            }
            else {
                nav.killall();
                nav.bg("7_mainCharRoomAlt/eva10c.jpg");
                g.roomTimeout = setTimeout(function () { chat(34, 7); }, 4000);
                
            }
            break;
        case "eva10d":
            nav.bg("7_mainCharRoomAlt/eva10d.jpg");
            g.roomTimeout = setTimeout(function () { chat(36, 7); }, 4000);
            break;
        case "eva10b1":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            nav.button({
                "type": "btn",
                "name": "eva10b2",
                "left": 622,
                "top": 0,
                "width": 1289,
                "height": 1080,
                "image": "7_mainCharRoomAlt/eva10b1.png"
            }, 7);
            break;
        case "evaaaaa":
            zcl.displayMain(370, 70, .4, "", true);
            break;
        case "eva10b3":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10b3.jpg");
            nav.button({
                "type": "tongue",
                "name": "eva10b3a",
                "left": 956,
                "top": 758,
                "width": 135,
                "height": 135,
                "image": "7_mainCharRoomAlt/eva10b3.png"
            }, 7);
            g.internal = 0;
            break;
        case "eva10b3d":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10b3d.jpg");
            break;
        case "eva10b3e":
            pic.add("evapussy");
            nav.bg("7_mainCharRoomAlt/eva10b3e.jpg");
            break;
        case "eva10b3f":
            nav.bg("7_mainCharRoomAlt/eva10b4.jpg");
            nav.button({
                "type": "btn",
                "name": "eva10b3f",
                "left": 164,
                "top": 69,
                "width": 1700,
                "height": 994,
                "image": "7_mainCharRoomAlt/eva10b3f.png"
            }, 7);
            break;
        case "eva10b3g":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10b3g.jpg");
            break;
        case "eva10b3h":
            sc.setstep("eva", 11);
            cl.doCum(true);
            gv.mod("giveOralFemale", 1);
            gv.mod("fuckPussy", 1);
            daily.set("eva");
            char.addtime(60);
            char.room(10);
            break;
        case "eva10b3ht":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            nav.button({
                "type": "img",
                "name": "eva10b3ht",
                "left": 0,
                "top": 280,
                "width": 1920,
                "height": 800,
                "image": "7_mainCharRoomAlt/eva10b3ht.gif"
            }, 7);
            g.roomTimeout = setTimeout(function () { room7.chatcatch("eva10it"); }, 4000);
            break;
        case "eva10it":
            nav.killbutton("eva10b3ht");
            nav.bg("7_mainCharRoomAlt/eva10it.jpg");
            chat(53, 7);
            break;
        case "eva10jt":
            nav.bg("7_mainCharRoomAlt/eva10jt.jpg");
            break;
        case "eva10kt":
            sc.setstep("eva", 11);
            cl.doCum(true);
            daily.set("eva");
            char.addtime(60);
            gv.mod("receiveHandjobFemale", 1);
            g.pass = "";
            char.room(10);
            break;
        case "eva10e":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10e.jpg");
            break;
        case "eva10f":
            nav.bg("7_mainCharRoomAlt/eva10f.jpg");
            break;
        case "eva11a":
            cl.nude();
            zcl.displayMain(-300, 700, .3, "", true);
            break;
        case "eva11b":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva11b.jpg");
            break;
        case "eva11c":
            nav.bg("7_mainCharRoomAlt/eva11c.jpg");
            nav.button({
                "type": "tongue",
                "name": "eva11c",
                "left": 1216,
                "top": 68,
                "width": 612,
                "height": 892,
                "image": "7_mainCharRoomAlt/eva11c.png"
            }, 7);
            break;
        case "eva11e":
            nav.bg("7_mainCharRoomAlt/eva11e.jpg");
            break;
        case "eva11f":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva11f.jpg");
            break;
        case "eva11g":
            nav.bg("7_mainCharRoomAlt/eva11f.jpg");
            break;
        case "eva11h":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva11h.jpg");
            break;
        case "eva11i":
            nav.bg("7_mainCharRoomAlt/eva11i.jpg");
            break;
        case "eva11j":
            nav.bg("7_mainCharRoomAlt/eva11j.jpg");
            break;
        case "eva11k":
            nav.bg("7_mainCharRoomAlt/eva11k.jpg");
            break;
        case "eva11l":
            nav.bg("7_mainCharRoomAlt/eva6.jpg");
            break;
        case "eva11m":
            scc.love("eva", 200, 100);
            sc.setstep("eva", 12);
            char.addtime(60);
            gv.mod("fuckPussy", 1);
            char.room(10);
            break;
        case "bigguy5a":
            nav.killall();
            cl.nude();
            char.changeMenu("hide", false, true);
            nav.bg("7_mainCharRoomAlt/bigguy5a.jpg");
            break;
        case "bigguy5b":
            nav.bg("7_mainCharRoomAlt/bigguy5b.jpg");
            break;
        case "bigguy5c":
            nav.bg("7_mainCharRoomAlt/bigguy5c.jpg");
            break;
        case "bigguy5d":
            nav.bg("7_mainCharRoomAlt/bigguy5d.jpg");
            break;
        case "bigguy5e":
            nav.bg("7_mainCharRoomAlt/bigguy5e.jpg");
            break;
        case "bigguy5f":
            nav.bg("7_mainCharRoomAlt/bigguy5f.jpg");
            break;
        case "bigguy5g":
            nav.bg("7_mainCharRoomAlt/black.jpg");
            break;
        case "bigguy5h":
            nav.killall();
            if(cl.c.chest < 3)
                nav.bg("7_mainCharRoomAlt/bigguy5_b.jpg");
            else
                nav.bg("7_mainCharRoomAlt/bigguy5_g.jpg");

            nav.button({
                "type": "img",
                "name": "bigguy5h",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "7_mainCharRoomAlt/bigguy5h.png"
            }, 7);
            break;
        case "bigguy5i":
            nav.modbutton("bigguy5h", "7_mainCharRoomAlt/bigguy5i.png", null, null);
            break;
        case "bigguy5j":
            nav.killbutton("bigguy5h");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 43,
                "top": 377,
                "width": 1808,
                "height": 280,
                "image": "7_mainCharRoomAlt/bigguy5j.png"
            }, 7);
            break;
        case "bigguy5k":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "7_mainCharRoomAlt/bigguy5k.png"
            }, 7);
            break;
        case "bigguy5l":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 119,
                "top": 288,
                "width": 1741,
                "height": 562,
                "image": "7_mainCharRoomAlt/bigguy5l.png"
            }, 7);
            break;
        case "bigguy5m":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 119,
                "top": 317,
                "width": 1801,
                "height": 533,
                "image": "7_mainCharRoomAlt/bigguy5m.png"
            }, 7);
            break;
        case "bigguy5n":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 119,
                "top": 317,
                "width": 1801,
                "height": 533,
                "image": "7_mainCharRoomAlt/bigguy5n.png"
            }, 7);
            break;
        case "bigguy5o":
            sc.setstep("bigguy", 6);
            gv.mod("receiveOralMale", 1);
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            char.addtime(68);
            char.room(10);
            break;
        case "b3":
            char.changeMenu("hide", false, false);
            g.internal = { l: false, e: false };
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            break;
        case "b2":
        case "b4e":
        case "b4f":
        case "b4l":
        case "b5l2":
        case "b5l3":
        case "b5l4":
        case "b5l5":
        case "b5e2":
        case "b5e3":
        case "b5e4":
        case "b5e5":
        case "bigguy6a0":
        case "bigguy6a":
        case "bigguy6b":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            break;
        case "bigguy6c":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            char.room(10);
            break;
        case "b5e1":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            g.internal.e = true;
            break;
        case "b5l1":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            g.internal.l = true;
            break;
        case "b6":
            if (!g.internal.l) {
                nav.bg("7_mainCharRoomAlt/b5l1.jpg");
                chat(98, 7);
                g.internal.l = true;
            }
            else if (!g.internal.e) {
                nav.bg("7_mainCharRoomAlt/b5e1.jpg");
                chat(103, 7);
                g.internal.e = true;
            }
            else {
                nav.bg("7_mainCharRoomAlt/b6.jpg");
                chat(108, 7);
            }
            break;
        case "b7":
            scc.love("eva", 200, 100);
            scc.love("lola", 200, 100);
            sc.setstep("eva", 13);
            sc.setstep("lola", 14);
            gv.mod("fuckPussy", 2);
            gv.mod("giveAnalFemale", 1);
            daily.set("lola");
            daily.set("eva");
            char.addtime(120);
            char.room(10);
            break;
        case "reset":
            char.room(10);
            break;
        case "jack0":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/jack0.gif");
            break;
        case "jack1":
            cl.doCum();
            sex.mod("hand", false, "f", 1);
            sc.modLevel("landlord", 15, 999);
            nav.bg("7_mainCharRoomAlt/jack1.jpg");
            break;
        case "removeLlPanties":
            cl.remove("panties", "c");
            break;
        case "eEnd":
            sc.completeMissionTask("eva", "fuck", 1);
            levels.fuckpussy("eva");
            levels.fuckass("eva", "f");
            char.addtime(30);
            char.room(7);
            break;
        case "bigguy3":
            nav.bg("7_mainCharRoomAlt/bigguy3.jpg");
            g.internal = 4;
            nav.next("bigguy_x");
            break;
        case "payrent":
            var payrent = gv.get("pastRent") - gv.get("rentChores");
            var payRentMoney = gv.get("money");
            
            if (payrent > payRentMoney) {
                if ((payRentMoney - payrent) < 7) {
                    gv.set("money", 0);
                    gv.set("pastRent", 0);
                    gv.set("rentChores", 0);
                    gv.set("workMonday", false);
                    chat(45, 7);
                }
                else {
                    gv.set("money", 0);
                    gv.mod("pastRent", (-1 * payRentMoney));
                    gv.set("rentChores", 0);
                    gv.set("workMonday", true);
                    chat(47, 7);
                }
            }
            else {
                gv.mod("money", (-1 * payrent));
                gv.set("pastRent", 0);
                gv.set("rentChores", 0);
                gv.set("workMonday", false);
                chat(46, 7);
            }
            break;
        case "checksexy":
            if (cl.c.chest < 2)
                chat(48, 7);
            else {
                chat(49, 7);
            }
            break;
        case "workmonday":
            gv.set("workMonday", true);
            room7.chatcatch("clearRoom");
            break;
        case "mondaywork":
            g.pass = 40;
            char.room(8);
            break;
        case "rent4_0":
            nav.bg("7_mainCharRoomAlt/bigguy3.jpg");
            g.internal = 4;
            nav.next("rent4_0");
            break;
        default:
            break;
    }
};

room7.chat = function (chatID) {
    if (chatID === 999) {
        let pastRent = gv.get("pastRent");
        let tempMoney = gv.get("money");
        let rentChores = gv.get("rentChores");
        let totalRent = pastRent - rentChores;

        if (pastRent <= rentChores) {
            gv.set("pastRent", 0);
            gv.set("rentChores", 0);
            return {
                chatID: 999,
                speaker: "bigguy",
                text: "You worked off all your rent. You're lucky your " + sc.n("landlord") +
                    "is so generous.",
                button: [
                    { chatID: 9, text: "Sweet! [Wakeup]", callback: "clearRoom" }
                ]
            };
        }

        let tempButton = new Array();
        if(tempMoney > 0) {
            if (totalRent > tempMoney)
                tempButton.push({ chatID: -1, text: "I only have $" + tempMoney, callback: "payrent" });
            else
                tempButton.push({ chatID: -1, text: "Here's your $" + totalRent, callback: "payrent" });
        }
        tempButton.push({ chatID: 998, text: "I don't have enough money. Is there something else I can do.", callback: "" });

        return {
            chatID: 999,
            speaker: "bigguy",
            text: "Wake up shit bag. Time to pay your rent! You owe me $" + pastRent + ". ",
            button: tempButton
        };
    }
    else if (chatID === 998) {
        if (qdress.st[24].ach) {
            return {
                chatID: 999,
                speaker: "bigguy",
                text: "Fucking loser. You can work off the rest of your debt working in my garage. " +
                    "I'll pick you up Monday. ",
                button: [
                    { chatID: 9, text: "Ok", callback: "workmonday" },
                    { chatID: -1, text: "Isn't there any other way I can repay you? ", callback: "checksexy" },
                ]
            };
        }
        return {
            chatID: 999,
            speaker: "bigguy",
            text: "Fucking loser. You can work off the rest of your debt working in my garage. " +
                "I'll pick you up Monday. ",
            button: [{ chatID: 9, text: "Ok [Unlock Seduction in the sissy menu for more choices]", callback: "workmonday" }]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "landlord",
                text: "Wake up " + sc.n("me") + "! I can't believe I allow you to live here, you lazy lay loafer! " +
                    "First you failed out of college, then you get fired from The Burger Joint, and now you just lay around doing nothing! " +
                    " .... NOTHING!",
                button: [{ chatID: 1, text: "but ....", callback: "" }]
            },
            {
                chatID: 1,
                speaker: "landlord",
                text: "Don't 'but...' me. It's time you start growing up. There's no more free rides for your lazy ass. " +
                    "If you think I've been hard on you " +
                    "up till now, you're going to see hard it can be. " + sc.n("lola") + " and " + sc.n("eva") + ", your " + sc.n('el') +
                    ", just started college and you've been a terrible role model for them.",
                button: [{ chatID: 2, text: "....", callback: "" }]
            },
            {
                chatID: 2,
                speaker: "landlord",
                text: "Here's the deal " + sc.n("me") + ", you act like a lazy child, so I'm going to treat you like a lazy child! " +
                    "Expect me to be up your ass everyday to make you into the man you were meant to be. You lack the motivation to " +
                    "be a real man, so I'm going to show you how to be an adult. You're going to get a new job so you don't " +
                    "find yourself out on the streets!  ",
                button: [{ chatID: 3, text: "Yes " + sc.n('landlord'), callback: "payYouMom" }]
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "Good.  You can start helping around the house <span class='hl'> If you want " +
                    "to get a weekly allowance I'll give you $5 if you do the dishes in the sink</span>. I can give you " +
                    "an allowance because I've been working at the Sperm Bank for years now. You should be able " +
                    "to keep a job for a few weeks at least.",
                button: [{ chatID: 4, text: "OK", callback: "" }]
            },
            {
                chatID: 4,
                speaker: "landlord",
                text: "Also you're going to start going to church again. We're leaving as soon as you're dressed. ",
                button: [{ chatID: 5, text: "Oh man.. ", callback: "clearRoom" }]
            },
            {
                chatID: 5,
                speaker: "me",
                text: "Oh wow, that was intense! " + sc.n("landlord") + "'s been so brutal. She's been on the warpath since " +
                    "she started dating " + sc.n("bigguy") + " , but since I've been fired she's really turned it up. " +
                    "I better get out of bed, get ready for church, then start applying for jobs. Hopefully there is " +
                    "something for a college drop-out.",
                button: [{ chatID: 6, text: "...", callback: "" }]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "I did promise " + sc.n("zoey") + " I would stop by and play video games. " +
                    sc.n("janice") + " also really wanted me to take her on a date. Better get going!",
                button: [{ chatID: -1, text: "Get out of bed and get ready for church. ", callback: "goToChurch" }]
            },
            {
                chatID: 7,
                speaker: "landlord",
                text: "Wake up sleepy head. Time for church. ",
                button: [{ chatID: -1, text: "Ok, ok... ", callback: "goToChurch" }]
            },
            {
                chatID: 8,
                speaker: "landlord",
                text: "You need to wake up and get your ass a job. c'mon. Stop being a waste of a human being. ",
                button: [{ chatID: -1, text: "Ok, ok... ", callback: "lastWord" }]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "What to wear.",
                button: [
                    { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[0].name, callback: "o0" },
                    { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[1].name, callback: "o1" },
                    { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[2].name, callback: "o2" },
                    { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[3].name, callback: "o3" },
                    { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[4].name, callback: "o4" },
                    { chatID: -1, text: "Get Up", callback: "o5" }
                ]
            },
            {
                chatID: 10,
                speaker: "landlord",
                text: "You need to get the PI license and start working for that nice Missy lady. ",
                button: [{ chatID: -1, text: "I am. ", callback: "lastWord" }]
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "Wakey wakey. Get your ass to work! ",
                button: [{ chatID: -1, text: "I am. ", callback: "lastWord" }]
            },
            {
                chatID: 12,
                speaker: "landlord",
                text: "So " + sc.n("bigguy") + " and I were talking, and we decided that now you're an adult " +
                    "you need to do adult things like help with rent. ",
                button: [
                    { chatID: 40, text: "What? Do my " + sc.n("el") + " have to pay too? ", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "landlord",
                text: "Looks like someone is up extra hard this morning. Do you want me to help get rid of that so you can focus? ",
                button: [
                    { chatID: 14, text: "Huh? What? ", callback: "jack0" },
                    { chatID: 16, text: "Oh, no. I'm saving that for someone. ", callback: "" },
                ]
            },
            {
                chatID: 14,
                speaker: "landlord",
                text: "Doon't you worry, let " + sc.n("landlord") + " take care of it for you. ",
                button: [
                    { chatID: 15, text: "oooooOOooooo", callback: "jack1" },
                ]
            },
            {
                chatID: 15,
                speaker: "landlord",
                text: "That's a good boy. I'm going to wash my hands. You get ready for work. ",
                button: [
                    { chatID: -1, text: "... oh yeah", callback: "lastWord" },
                ]
            },
            {
                chatID: 16,
                speaker: "landlord",
                text: "Well, she must be a special lady. Time to get ready for work honey. ",
                button: [
                    { chatID: -1, text: "ok", callback: "lastWord" },
                ]
            },
            {
                chatID: 17,
                speaker: "landlord",
                text: "You need to put some clothing between yourself and your sheets. I don't want to wash brown streaks from " +
                    "your bed. ",
                button: [
                    { chatID: -1, text: "...gross", callback: "lastWord" },
                ]
            },
            {
                chatID: 18,
                speaker: "landlord",
                text: "I don't know why you keep wearing that dick cage. If you keep it up, you'll break your penis and no girl will want you. ",
                button: [
                    { chatID: -1, text: "I know.", callback: "lastWord" },
                ]
            },
            {
                chatID: 19,
                speaker: "landlord",
                text: "What the hell is that on your penis? ",
                button: [
                    { chatID: 20, text: "huh? ", callback: "" },
                ]
            },
            {
                chatID: 20,
                speaker: "landlord",
                text: "There's some kind of weird dick cage around your penis! You know if you're going to take your weird sex stuff " +
                    "to bed, you better put on some pajamas. I don't want to see that. No one wants to see that. If you pull that " +
                    "out in front of a girl you'll scare her away. Now you should go take that thing off. Boys are supposed to have " +
                    "fully erect penises. Not that thing. ",
                button: [
                    { chatID: -1, text: "I know.", callback: "lastWord" },
                ]
            },
            {
                chatID: 21,
                speaker: "landlord",
                text: "Are you wearing panties! Why are you wearing panties? Why are you wearing panties? ",
                button: [
                    { chatID: 22, text: "I... uh... was a dare. ", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "landlord",
                text: "I don't believe you. This is some of that weird sex stuff you kids do these days. Go put on some boy's underwear " +
                    "before you go out. You don't want anyone to think you're some kind of panty pervert. Back in my youth you would " +
                    "get a beating for doing something like this. I'm going to let it slide, but really! Stop. ",
                button: [
                    { chatID: -1, text: "Oh, sure. ", callback: "lastWord" },
                ]
            },
            {
                chatID: 23,
                speaker: "landlord",
                text: "I see you're still wearing panties. I hope you find someone that is open enough to tolerate that.  ",
                button: [
                    { chatID: -1, text: "I will.", callback: "lastWord" },
                ]
            },
            {
                chatID: 24,
                speaker: "landlord",
                text: "Those are MY panties! What kind fucked up shit are you doing in my panties! Give those back right now! I don't " +
                    "want your butt sweat and cum in them! I've never! ",
                button: [
                    { chatID: 25, text: "Oh crap [Give her back her panties]", callback: "removeLlPanties" },
                ]
            },
            {
                chatID: 25,
                speaker: "landlord",
                text: "Now I have to go wash your nastyness off them. Get up and get going!  ",
                button: [
                    { chatID: -1, text: "ok", callback: "lastWord" },
                ]
            },
            {
                chatID: 26,
                speaker: "landlord",
                text: "Don't forget, it's Friday. Those awful people from the Carnal Union will " +
                    "be in town, so get back before it gets dark. They are an awful bunch. ",
                button: [
                    { chatID: 9, text: "ok", callback: "clearRoom" },
                ]
            },
            {
                chatID: 27,
                speaker: "eva",
                text: "I've been creaming all night thinking about your dick. Pull it out " +
                    "let me see it again. ",
                button: [
                    { chatID: 28, text: "...wha?", callback: "e1" },
                ]
            },
            {
                chatID: 28,
                speaker: "eva",
                text: "You know what I said. I have to have your dick you big pervert. ",
                button: [
                    { chatID: 29, text: "OOoooo", callback: "e2" },
                ]
            },
            {
                chatID: 29,
                speaker: "eva",
                text: "Uh oh. Shhhh I'm not here.",
                button: [
                    { chatID: 30, text: "?", callback: "e3" },
                ]
            },
            {
                chatID: 30,
                speaker: "lola",
                text: "I just had to come and tell you what an amazing night I had last night. " +
                    "I've been dreaming about losing my virginity to you forever, and it finally " +
                    "happened! I'm so excited I just want to jump on you right now! But I've got " +
                    "to get ready, so another time. OOOooo I love you so so much! ",
                button: [
                    { chatID: 31, text: "Love you too. ", callback: "e4" },
                ]
            },
            {
                chatID: 31,
                speaker: "eva",
                text: "She gone? Don't tell her I'm here. She'll get soooo mad I snuck " +
                    "in here to have sex with you. ",
                button: [
                    { chatID: 32, text: "ok", callback: "e5" },
                ]
            },
            {
                chatID: 32,
                speaker: "eva",
                text: "Put it in my butt. We went off birth control months ago 'cause " +
                    "it killed our sex drive. " + sc.n("landlord") + " would kill us if " +
                    "she knew, so don't say anything. ",
                button: [
                    { chatID: 33, text: "Oh yeah! [Put your dick in her butthole]", callback: "e6" },
                ]
            },
            {
                chatID: 33,
                speaker: "eva",
                text: "Oh fuck! Flip me over. I need it in my pussy! I'm so close to cumming! Promise you'll " +
                    "pull out before you cum in me!",
                button: [
                    { chatID: -1, text: "Promise! ", callback: "e7" },
                ]
            },
            {
                chatID: 34,
                speaker: "eva",
                text: "You promised to pull out! Oh well. I don't think I can get pregnant. " +
                    "You're not the first man to have weak pullout game and I haven't gotten " +
                    "knocked up yet. Later loser. ",
                button: [
                    { chatID: -1, text: "later?", callback: "eEnd" },
                ]
            },
            {
                chatID: 35,
                speaker: "bigguy",
                text: "Hey little girl! Sleep well?",
                button: [
                    { chatID: 36, text: "Huh?", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "bigguy",
                text: "I guess I do need to stick my dick in something, and you're something.",
                button: [
                    { chatID: 37, text: "Be gentle...", callback: "bigguy2" },
                ]
            },
            {
                chatID: 37,
                speaker: "bigguy",
                text: "Shut up. Holes don't talk, they just gag! ahahahhahaha ",
                button: [
                    { chatID: -1, text: "*GAAAAK*", callback: "bigguy3" },
                ]
            },
            {
                chatID: 38,
                speaker: "bigguy",
                text: "Not one word to anyone or I'll break you in half! ",
                button: [
                    { chatID: 39, text: "*sob*", callback: "bigguy15" },
                ]
            },
            {
                chatID: 39,
                speaker: "thinking",
                text: "What was that! I might have thown myself at him, but he " +
                    "didn't need to be so rough! Didn't care about me at all! Worst " +
                    "of all I made him cheat on my " + sc.n("landlord") + "! I don't know if I " +
                    "should tell her. Maybe I should just keep it a secret. I don't want her to " +
                    "hate me forever. ",
                button: [
                    { chatID: -1, text: "*sob*", callback: "lastWord" },
                ]
            },
            {
                chatID: 40,
                speaker: "landlord",
                text: "Wake up honey. We have to talk about you growing up and being an adult. It's time you start " +
                    "paying rent. " + sc.n("bigguy") + " is going to start coming by each Saturday to collect your " +
                    "share of our mortgage. ",
                button: [
                    { chatID: 41, text: "Why? Are my " + sc.n("el") + " going to pay too? ", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "bigguy",
                text: "What? Fuck no. They're girls, plus they're in college. Also they aren't fucking idiots like " +
                    "you. ",
                button: [
                    { chatID: 42, text: "...", callback: "" },
                ]
            },
            {
                chatID: 42,
                speaker: "landlord",
                text: sc.n("bigguy") + "!",
                button: [
                    { chatID: 43, text: "...", callback: "" },
                ]
            },
            {
                chatID: 43,
                speaker: "bigguy",
                text: "...but...*ugh* Since I pay the majority of the mortgage I'll just come up here in the " +
                    "morning to collect $75 a week a week from you. You better pay up, or you'll be working for " +
                    "me at my repair shop. Don't think you'll be slacking off either. You'll do all the shit " +
                    "work no one wants to do, like cleaning the rat traps. I'll start collecting next week.  ",
                button: [
                    { chatID: 44, text: "Really? So not fair", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "landlord",
                text: "We talked about, and I think it's best. You can do some chores around the house and I'll pay " +
                    "part of your debt. You can start with the dishes. We should just be really thankful for " +
                    sc.n("bigguy") + " for helping us put a roof over our head for as long as he has. Now we'll " +
                    "let you get dressed. ",
                button: [
                    { chatID: 9, text: "*sigh* ok", callback: "clearRoom" }
                ]
            },
            {
                chatID: 45,
                speaker: "bigguy",
                text: "Close enough. Have the entire payment next week. ",
                button: [
                    { chatID: 9, text: "ok", callback: "clearRoom" }
                ]
            },
            {
                chatID: 46,
                speaker: "bigguy",
                text: "A real " + gender.pronoun("man") + " pays their debts. I'm " +
                    "proud of what I've done with you. ",
                button: [
                    { chatID: 9, text: "ok", callback: "clearRoom" }
                ]
            },
            {
                chatID: 47,
                speaker: "bigguy",
                text: "I'll take what you got, but I'll pick you up Monday to work " +
                    "off the rest. ",
                button: [
                    { chatID: 9, text: "ok", callback: "clearRoom" }
                ]
            },
            {
                chatID: 48,
                speaker: "bigguy",
                text: "Hahahahahahahaha! No. See you Monday. ",
                button: [
                    { chatID: 9, text: "ok [Need tits]", callback: "clearRoom" }
                ]
            },
            {
                chatID: 49,
                speaker: "bigguy",
                text: "Hahahahahahahaha! No. See you Monday. ",
                button: [
                    { chatID: 55, text: "[Stroke his cock over his pants]", callback: "bigguy00" },
                    { chatID: 9, text: "ok", callback: "workmonday" }
                ]
            },
            {
                chatID: 50,
                speaker: "bigguy",
                text: "Ok whore. Let's do this!",
                button: [
                    { chatID: 36, text: "*gulp*", callback: "bigguy1" },
                ]
            },
            {
                chatID: 51,
                speaker: "bigguy",
                text: "What the fuck are you wearing? Guys don't wear that, bitches do. " +
                    "put on some real clothes and let's get to work. *Fucking weird-o*",
                button: [
                    { chatID: -1, text: "[Get Dressed]", callback: "mondaywork" },
                ]
            },
            {
                chatID: 52,
                speaker: "bigguy",
                text: "Are you wearing panties? Men don't wear panties. I'm going to " +
                    "talk to your " + sc.n("landlord") + " about you wearing real underwear. " +
                    "boxers are fine, but briefs hold it all together.  " +
                    "Put on some real clothes and let's get to work.",
                button: [
                    { chatID: -1, text: "[Get Dressed]", callback: "mondaywork" },
                ]
            },
            {
                chatID: 53,
                speaker: "bigguy",
                text: "Wake up, time to man up and work off your debt. ",
                button: [
                    { chatID: -1, text: "[Get Dressed]", callback: "mondaywork" },
                ]
            },
            {
                chatID: 54,
                speaker: "bigguy",
                text: "I've got to tell your " + sc.n("landlord") + " the weird shit " +
                    "you wear to bed. A man should sleep either in the nude, or in a " +
                    "pair of briefs. That's sick what you're doing. ",
                button: [
                    { chatID: 999, text: "*ugh*", callback: "" },
                ]
            },
            {
                chatID: 55,
                speaker: "bigguy",
                text: "I know what you're trying to do and your " + sc.n("landlord") +
                    " would be very pissed at the both of us if she found out. ",
                button: [
                    { chatID: 56, text: "[Pull his dick out]", callback: "bigguy01" },
                    { chatID: 9, text: "You're right. I'll see you Monday", callback: "workmonday" }
                ]
            },
            {
                chatID: 56,
                speaker: "bigguy",
                text: "You better knock this off right now! For real",
                button: [
                    { chatID: 50, text: "[Lick the head of his cock]", callback: "bigguy02" },
                    { chatID: 9, text: "You're right. I'll see you Monday", callback: "workmonday" }
                ]
            },
            {
                chatID: 57,
                speaker: "bigguy",
                text: "Wake up, Time to take my dick little girl.",
                button: [
                    { chatID: -1, text: "huh?", callback: "rent4_0" }
                ]
            },
            {
                chatID: 58,
                speaker: "bigguy",
                text: "I prefer taking your rent from your ass. So much sweeter. ",
                button: [
                    { chatID: 59, text: "*sob*", callback: "bigguy15_4" },
                ]
            },
            {
                chatID: 59,
                speaker: "thinking",
                text: "I still feel guilty about this, but damn that dick is good!",
                button: [
                    { chatID: -1, text: "...", callback: "lastWord" },
                ]
            },
        ];

        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
