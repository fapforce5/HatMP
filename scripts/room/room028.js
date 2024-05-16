//Modification
//hormone level: 75!!
//sissy transform: 95!!

//add false transformations - like got an inch shorter / feet shrunk / skin smoother / hair more radiant, hair is finer
var room28 = {};
room28.main = function () {
    var pjRoom = [7, 10]
    if (pjRoom.includes(g.pass)) {
        cl.wearSavedOutfit(5);
    }
    missy.daily();
    var i;
    var hormoneLevel, thisTinyPP;
    if (g.pass === 502)
        nav.bg("502_bedroom/sleepZoey.jpg");
    else if (g.pass === 13)
        nav.bg("28_transformation/twin.jpg");
    else if (g.pass === 301)
        nav.bg("301_living/envy159.jpg");
    else if (g.pass === 701)
        nav.bg("701_hospitalroom/sleep.jpg");
    else if (g.pass === 181)
        nav.bg("181_black/bondage101_12.jpg");

    menu.save("HatMP_9", true);
    if (g.dt.getHours() > 6)
        g.dt.setDate(g.dt.getDate() + 1);
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 7, 0, 0, 0);
    nav.buildclock();

    
    cl.hairgrowth();
    var maxE = gv.get("maxenergy");
    var thisautohormone, hix, tix, xdressPoints;
    tix = daily.get("tookHormonePill");
    //var sissyTrans = gv.get("oncase");
    var arousal, energyIndex;
    var message;
    var buttholePlay;
    var milkLevel;
    
    for (i = 0; i < gv.st.length; i++) {
        switch (gv.st[i].n) {
            //case "leg":
            //    if (gv.st[i].t > 97) {
            //        gv.st[i].t = 0;
            //        gv.mod("legLevel", 1);
            //        g.popUpNotice("Your kick is stronger");
            //    }
            //    break;
            //case "body":
            //    if (gv.st[i].t > 97) {
            //        gv.st[i].t = 0;
            //        gv.mod("bodyLevel", 1);
            //        g.popUpNotice("Your punch is stronger");
            //    }
            //    break;
            //case "d":
            //    if (gv.st[i].t > 97) {
            //        gv.st[i].t = 0;
            //        gv.mod("dLevel", 1);
            //        g.popUpNotice("Your defense has increased");
            //    }
            //    break;
            //case "jobConstWorkToday":
            //    gv.st[i].t = 0;
            //    break;
            case "energy":
                energyIndex = i;
                //gv.st[i].t = Math.floor(maxE * .75);
                break;
            case "arousal":
                arousal = gv.st[i].t;
                break;
            case "hormone":
                hix = i;
                hormoneLevel = gv.st[i].t;
                if (gv.st[i].t > 15)
                    gv.st[i].t -= 2;
                break;
            case "shinkCock":
                if (cl.c.cock < 4) {
                    thisTinyPP = gv.st[i].t;
                    gv.st[i].t = false;
                }
                break;
            case "autohormone":
                thisautohormone = gv.st[i].t;
                break;
            case "pill":
                if (gv.st[i].t !== null) {
                    gv.st[i].t = null;
                }
                break;
            case "buttholePlay":
                buttholePlay = gv.st[i].t;
                break;
            case "milk":
                milkLevel = gv.st[i].t;
                break;
            case "xdressPoints":
                xdressPoints = gv.st[i].t;
                break;
        }
    }
    
    cl.c.butthole -= .05;
    if (cl.c.butthole < 0)
        cl.c.butthole = 0;
    //energy as propotion to horny
    if (arousal > 97) {
        gv.st[energyIndex].t = maxE * .5;
        message = "You're so horny you didn't recover much energy. ";
    }
    else if (arousal > 50) {
        gv.st[energyIndex].t = maxE * .75;
        message = "You're starting to get horny and are a little restless.";
    }
    else {
        gv.st[energyIndex].t = maxE;
        message = "You got a good night's sleep. ";
    }
    g.popUpNotice(message);

    //growhair
    var initHairGrowth = 4;
    if (hormoneLevel > 50)
        Math.floor(hormoneLevel / 12) - 2;
    if (initHairGrowth < 5)
        initHairGrowth = 5;

    if (isNaN(cl.c.lastHairCut))
        cl.c.lastHairCut = 0;
    cl.c.lastHairCut += initHairGrowth;

    if (cl.c.lastHairCut > 99) {
        if (cl.c.hairLength === null)
            cl.c.hairLength = 0;
        else if (cl.c.hairLength < 4)
            cl.c.hairLength++;
        cl.c.lastHairCut = 0;
    }

    if (milkLevel > -1) {
        milkLevel += (hormoneLevel / 100) / 3;
        if (milkLevel > 1)
            milkLevel = 1;
        else if (milkLevel < 0)
            milkLevel = 0;

        gv.set("milk", milkLevel);
        cl.display();
    }

    daily.newday();

    if (thisautohormone) {
        var hx = inv.getIndex("hormone");
        if (inv.master[hx].count > 0) {
            inv.master[hx].count--;
            if (inv.master[hx].count < 1) {
                inv.master[hx].entry = false;
                inv.master[hx].count = 0;
            }
            gv.st[hix].t += 30;
            if (gv.st[hix].t > 100)
                gv.st[hix].t = 100;
            daily.set("tookHormonePill");
            g.popUpNotice("Took your hormone pill" + (inv.master[hx].entry ? "" : " - Out of pills"));
        }
    }

    
    //check Transformation
    if (cl.c.chest === 0 && levels.st[12].l > 0) {
        chat(0, 28);
    }
    else if (levels.get("xdress").l > 0 && cl.c.chest > 0) {
        nav.button({
            "type": "img",
            "name": "xd",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "title": "xdress",
            "image": "28_transformation/q_background.png"
        }, 28);
        for (i = 0; i < qdress.st.length; i++) {
            var qdressIcon = qdress.st[i].ach ? qdress.st[i].icon : qdress.st[i].icon + "_x";
            nav.button({
                "type": "btn",
                "name": "qxdress_" + qdress.st[i].id,
                "left": qdress.st[i].x,
                "top": qdress.st[i].y,
                "width": i === 3 ? 200 : 100,
                "height": i === 3 ? 200 : 100,
                "title": "xdress",
                "image": "28_transformation/" + qdressIcon + ".png"
            }, 28);
        }
        nav.button({
            "type": "btn",
            "name": "qquit",
            "left": 1434,
            "top": 64,
            "width": 100,
            "height": 100,
            "image": "28_transformation/q_quit.png"
        }, 28);

        nav.button({
            "type": "clickthrough",
            "name": "xd",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "title": "xdress",
            "image": "28_transformation/q_forground.png"
        }, 28);
    }
    //else if (sissyTrans === "bigboobs" || sissyTrans === "bigass" || sissyTrans === "dslLips" || sissyTrans === "smolpp") {
    //    var thisImg = "";
    //    gv.set("oncase", null);
    //    switch (sissyTrans) {
    //        case "bigboobs":
    //            cl.c.chest++;
    //            thisImg = "chest_" + cl.c.chest + ".gif";
    //            g.sissy[cl.c.chest + 33].ach = true;
    //            break;
    //        case "bigass":
    //            cl.c.leg++;
    //            thisImg = "leg_" + cl.c.leg + ".gif";
    //            g.sissy[cl.c.leg + 39].ach = true;
    //            break;
    //        case "dslLips":
    //            cl.c.lips++;
    //            thisImg = "lip_" + cl.c.lips + ".gif";
    //            g.sissy[cl.c.lips + 44].ach = true;
    //            break;
    //        case "smolpp":
    //            cl.c.cock++;
    //            thisImg = "cock_" + cl.c.cock + ".gif";
    //            g.sissy[cl.c.cock + 6].ach = true;
    //            break;
    //        //case "lip":
    //        //cl.c.lip++;
    //        //thisImg = "lip_" + cl.c.lip + ".gif";
    //        //break;
    //    }
    //    nav.bg("28_transformation/" + thisImg);
    //    cl.display();
    //    g.roomTimeout = setTimeout(function () {
    //        returnRoomID = g.pass;
    //        g.pass = "endSleepyTime";
    //        char.room(returnRoomID);
    //    }, 6000);

    //}
    else {
        g.roomTimeout = setTimeout(function () {
            var returnRoomID = g.pass;
            g.pass = "endSleepyTime";
            char.room(returnRoomID);
        }, 1000);
    }

    for (i = 0; i < future.st.length; i++) {
        future.st[i].daysleft--;
        if (future.st[i].daysleft === 0) {
            switch (future.st[i].name) {
                case "janicevacation":
                    sc.completeMission("dog", "vacation", true);
                    sc.startMission("janice", "bitch");
                    break;
                case "envytest":
                    if (sc.getMissionTask("envy", "gf", 6).notStarted) {
                        sc.completeMission("envy", "gf", false);
                        sc.completeMissionTask("envy", "gf", 6, false);
                        sc.startMission("envy", "breakup");
                        sc.completeMissionTask("envy", "breakup", 0, true);
                    }
                    break;
            }
            future.st.splice(i, 1);
        }
    }
};

room28.btnclick = function (name) {
    if (name === "qquit") {
        var returnRoomID = g.pass;
        g.pass = "endSleepyTime";
        char.room(returnRoomID);
    }
    if (name.startsWith("qxdress_")) {
        var id = parseInt(name.replace("qxdress_", ""));
        var points = levels.get("xdress").l
        var parentAch = null;
        var tText = "";
        xtop = 600 * g.ratio;
        xleft = 1634 * g.ratio;
        xwidth = 271 * g.ratio;
        if (qdress.st[id].pId !== null) {
            parentAch = qdress.st[qdress.st[id].pId].ach ? null : qdress.st[qdress.st[id].pId].name;
        }
        nav.killbutton("bigDisplay");

        nav.button({
            "type": "img",
            "name": "bigDisplay",
            "left": 1645,
            "top": 153,
            "width": 250,
            "height": 400,
            "image": "28_transformation/" + qdress.st[id].icon + "_d.png"
        }, 28);

        tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">' + qdress.st[id].name + '</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">' + qdress.st[id].desc + '</div>';
        tText += '<div class="char-20" style="color:#fedeff; font-size: ' + 20 * g.ratio + 'px;">' + qdress.st[id].p + (qdress.st[id].p === 1 ? " Point" : " Points") + '</div>';
        if (qdress.st[id].ach) {
            tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Completed</div>';
        }
        else if (parentAch !== null) {
            tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need to complete: ' + parentAch + '</div>';
            //tText += '<img src="./images/room/210_classSelection/gotoclass.png" class="room-btn rom-event" data-name="classselect_' + id + '" data-room="210" style="width:' + (271 * g.ratio) + 'px; height:' + (72 * g.ratio) + 'px; position:relative; margin-top:' + (20 * g.ratio) + 'px;" />';
        }
        else if (qdress.st[id].h && gv.get("hormone") < 75) {
            tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need to raise hormone</div>';
        }
        else if (points < qdress.st[id].p) {
            tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ratio + 'px; margin-top:' + (20 * g.ratio) + 'px;">Need ' + qdress.st[id].p + ' more ' + (qdress.st[id].p - points === 1 ? " Point" : " Points") + '</div>';
        }
        else {
            tText += '<img src="./images/room/28_transformation/q_grow.png" class="room-btn rom-event" data-name="qgrow_' + id + '" data-room="28" style="width:' + (271 * g.ratio) + 'px; height:' + (72 * g.ratio) + 'px; position:relative; margin-top:' + (20 * g.ratio) + 'px;" />';
        }
        xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';
        $('#room-buttons').append(xline);
    }
    else if (name.startsWith("qgrow_")){
        var gid = parseInt(name.replace("qgrow_", ""));
        levels.st[1].l = levels.st[1].l - qdress.st[gid].p;
        qdress.st[gid].ach = true;
        switch (qdress.st[gid].icon) {
            case "qpanties":
                nav.killall();
                nav.bg("28_transformation/d_panties.jpg");
                chat(3, 28);
                break;
            case "qbra":
                nav.killall();
                nav.bg("28_transformation/d_bra.jpg");
                chat(4, 28);
                break;
            case "qdildo":
                nav.killall();
                nav.bg("28_transformation/d_dildo.jpg");
                chat(5, 28);
                break;
            case "qxdress":
                nav.killall();
                nav.bg("28_transformation/d_xdress.jpg");
                chat(6, 28);
                break;
            case "qearring":
                nav.killall();
                nav.bg("28_transformation/d_earring.jpg");
                chat(7, 28);
                break;
            case "qmakup":
                nav.killall();
                nav.bg("28_transformation/d_makeup.jpg");
                chat(8, 28);
                break;
            case "qtattoo":
                nav.killall();
                nav.bg("28_transformation/d_tattoo.jpg");
                chat(9, 28);
                break;
            case "qxdress1":
                nav.killall();
                nav.bg("28_transformation/d_xdress1.jpg");
                chat(11, 28);
                break;
            case "qxdress2":
                nav.killall();
                nav.bg("28_transformation/d_xdress2.jpg");
                chat(12, 28);
                break;
            case "qxdress3":
                nav.killall();
                nav.bg("28_transformation/d_xdress3.jpg");
                chat(13, 28);
                break;
            case "qxdress4":
                nav.killall();
                nav.bg("28_transformation/d_xdress4.jpg");
                chat(14, 28);
                break;
            case "qc2":
            case "qc3":
            case "qc4":
            case "qc5":
            case "qc6":
                nav.killall();
                cl.c.chest = parseInt(qdress.st[gid].icon.replace("qc", ""));
                nav.bg("28_transformation/chest_" + cl.c.chest + ".gif");
                cl.display();
                g.roomTimeout = setTimeout(function () {
                    returnRoomID = g.pass;
                    g.pass = "endSleepyTime";
                    char.room(returnRoomID);
                }, 6000);
                break;
            case "ql1":
            case "ql2":
            case "ql3":
            case "ql4":
            case "ql5":
                nav.killall();
                cl.c.leg = parseInt(qdress.st[gid].icon.replace("ql", ""));
                nav.bg("28_transformation/leg_" + cl.c.leg + ".gif");
                cl.display();
                g.roomTimeout = setTimeout(function () {
                    returnRoomID = g.pass;
                    g.pass = "endSleepyTime";
                    char.room(returnRoomID);
                }, 6000);
                break;
            case "qlip1":
            case "qlip2":
                nav.killall();
                cl.c.lips = parseInt(qdress.st[gid].icon.replace("qlip", ""));
                nav.bg("28_transformation/lip_" + cl.c.lips + ".gif");
                cl.display();
                g.roomTimeout = setTimeout(function () {
                    returnRoomID = g.pass;
                    g.pass = "endSleepyTime";
                    char.room(returnRoomID);
                }, 6000);
                
                break;
            case "qwhore":
                nav.killall();
                nav.bg("28_transformation/d_whore.jpg");
                chat(10, 28);
                
                break;
        }
    };
    //var id, xtop, xleft, xwidth, pid, tText, xline, i, returnRoomID;
    //switch (name) {
    //    case "init":
    //        for (i = 0; i < g.sissy.length; i++) {
    //            switch (g.sissy[i].icon) {
    //                case "chest1":
    //                case "chest2":
    //                case "chest3":
    //                case "chest4":
    //                case "chest5":
    //                case "chest6":
    //                    g.sissy[i].ach = parseInt(g.sissy[i].icon.substring(5)) <= cl.c.chest;
    //                    break;
    //                case "leg1":
    //                case "leg2":
    //                case "leg3":
    //                case "leg4":
    //                case "leg5":
    //                    g.sissy[i].ach = parseInt(g.sissy[i].icon.substring(3)) <= cl.c.leg;
    //                    break;
    //                case "cock1":
    //                case "cock2":
    //                case "cock3":
    //                case "cock4":
    //                case "cock5":
    //                    g.sissy[i].ach = parseInt(g.sissy[i].icon.substring(4)) <= cl.c.cock;
    //                    break;
    //            }
    //        }
    //        room28.btnclick("drawBoard");
    //        break;
    //    case "drawBoard":
    //        nav.button({
    //            "type": "img",
    //            "name": "bgbar",
    //            "left": 1620,
    //            "top": 0,
    //            "width": 300,
    //            "height": 1080,
    //            "image": "28_transformation/rightSide.png"
    //        }, 28);
    //        nav.button({
    //            "type": "btn",
    //            "name": "cancel",
    //            "left": 1486,
    //            "top": 251,
    //            "width": 100,
    //            "height": 100,
    //            "title": "Cancel",
    //            "image": "28_transformation/cancel.png"
    //        }, 28);
    //        nav.button({
    //            "type": "btn",
    //            "name": "money",
    //            "left": 392,
    //            "top": 251,
    //            "width": 100,
    //            "height": 100,
    //            "title": "Money",
    //            "image": "28_transformation/money.png"
    //        }, 28);
    //        $.each(g.sissy, function (i, v) {
    //            if (v.active) {
    //                nav.button({
    //                    "type": "btn",
    //                    "name": v.icon,
    //                    "left": v.x,
    //                    "top": v.y,
    //                    "width": 100,
    //                    "height": 100,
    //                    "title": v.name,
    //                    "image": "28_transformation/" + v.icon + (v.ach ? "" : "_u") + ".png"
    //                }, 28);
    //            }
    //        });
    //        break;
    //    case "chest1":
    //    case "chest2":
    //    case "chest3":
    //    case "chest4":
    //    case "chest5":
    //    case "chest6":
    //    case "leg1":
    //    case "leg2":
    //    case "leg3":
    //    case "leg4":
    //    case "leg5":
    //    case "cock1":
    //    case "cock2":
    //    case "cock3":
    //    case "cock4":
    //    case "cock5":
    //    case "makeup0":
    //    case "makeup1":
    //    case "makeup2":
    //    case "lip1":
    //    case "lip2":
    //    case "fight0":
    //    case "fight1":
    //    case "fight2":
    //    case "fight3":
    //    case "gloryhole0":
    //    case "gloryhole1":
    //    case "gloryhole2":
    //    case "date0":
    //    case "date1":
    //    case "date2":
    //    case "clothes0":
    //    case "clothes1":
    //    case "clothes2":
    //    case "clothes3":
    //        $.each(g.sissy, function (i, v) {
    //            if (v.icon === name) {
    //                id = v.id;
    //                return;
    //            }
    //        });
    //        pid = g.sissy[id].pID;
    //        g.internal = id;
    //        nav.killbutton("bigDisplay");
    //        nav.killbutton("unlock");
    //        nav.button({
    //            "type": "img",
    //            "name": "bigDisplay",
    //            "left": 1645,
    //            "top": 153,
    //            "width": 250,
    //            "height": 400,
    //            "image": "28_transformation/" + name + "_d.png"
    //        }, 28);

    //        xtop = 600 * g.ratio;
    //        xleft = 1634 * g.ratio;
    //        xwidth = 271 * g.ratio;
    //        tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">' + g.sissy[id].name + '</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">' + g.sissy[id].description + '</div>';
    //        if (name === "clothes0")
    //            tText += '<div style="color: #ffcccc; "><div style="font-weight:700; margin-top:' + (20 * g.ratio) + 'px; font-size:' + (20 * g.ratio) + 'px;">PREREQUISITE</div>Attend ' + sc.n('p') + '\'s crossdressing class</div>';
    //        else if (name === "fight0")
    //            tText += '<div style="color: #ffcccc; "><div style="font-weight:700; margin-top:' + (20 * g.ratio) + 'px; font-size:' + (20 * g.ratio) + 'px;">PREREQUISITE</div>Prove yourself worthy of the Red Room</div>';
    //        else if (g.sissy[id].ach)
    //            tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ration + 'px;">Unlocked</div>';
    //        else if (pid !== null) {
    //            if (!g.sissy[pid].ach) {
    //                tText += '<div style="color: #ffcccc; "><div style="font-weight:700; margin-top:' + (20 * g.ratio) + 'px; font-size:' + (20 * g.ratio) + 'px;">PREREQUISITE</div>' + g.sissy[g.sissy[id].pID].name + '</div>';
    //            }
    //        }

    //        xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';

    //        $('#room-buttons').append(xline);
    //        break;
    //    case "cancel":
    //        g.internal = null;
    //        nav.killbutton("bigDisplay");
    //        nav.killbutton("unlock");
    //        nav.button({
    //            "type": "img",
    //            "name": "bigDisplay",
    //            "left": 1645,
    //            "top": 153,
    //            "width": 250,
    //            "height": 400,
    //            "image": "28_transformation/cancel_d.png"
    //        }, 28);

    //        xtop = 600 * g.ratio;
    //        xleft = 1634 * g.ratio;
    //        xwidth = 271 * g.ratio;
    //        tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">Cancel</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">Cancel and return to class</div>';

    //        xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';

    //        $('#room-buttons').append(xline);

    //        nav.button({
    //            "type": "btn",
    //            "name": "cancelcancel",
    //            "left": 1634,
    //            "top": 850,
    //            "width": 271,
    //            "height": 72,
    //            "title": "Unlock",
    //            "image": "28_transformation/cancel_b.png"
    //        }, 28);

    //        break;
    //    case "money":
    //        g.internal = null;
    //        nav.killbutton("bigDisplay");
    //        nav.killbutton("unlock");
    //        nav.button({
    //            "type": "img",
    //            "name": "bigDisplay",
    //            "left": 1645,
    //            "top": 153,
    //            "width": 250,
    //            "height": 400,
    //            "image": "28_transformation/money_d.png"
    //        }, 28);

    //        xtop = 600 * g.ratio;
    //        xleft = 1634 * g.ratio;
    //        xwidth = 271 * g.ratio;
    //        tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">Money</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">Trade 100 Sissy Points for $100</div>';
    //        if (gv.get("sissy") > 100) {
    //            alert('killme');
    //        }
    //        else
    //            tText += '<div style="color: #ffffff; "><div style="font-weight:700; margin-top:' + (20 * g.ratio) + 'px; font-size:' + (20 * g.ratio) + 'px;">Not enough points</div>You only have ' + gv.get('sissy') + ' sissy points</div>';
    //        xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';
    //        $('#room-buttons').append(xline);
    //        break;
    //    case "cancelcancel":
    //        char.room(209);
    //        break;
    //    case "unlock":
    //        if (g.internal === null) {
    //            returnRoomID = g.pass;
    //            g.pass = "endSleepyTime";
    //            char.room(returnRoomID);
    //        }
    //        else {
    //            g.sissy[g.internal].ach = true;
    //            if (g.internal < 6) {
    //                id = g.internal + 1;
    //                nav.killall();
    //                gv.set("pill", "boob");
    //                nav.bg("28_transformation/pill.jpg");
    //                chat(1000, 28);
    //            }
    //            else if (g.internal < 11) {
    //                id = g.internal - 5;
    //                nav.killall();
    //                gv.set("pill", "leg");
    //                nav.bg("28_transformation/pill.jpg");
    //                chat(1001, 28);
    //            }
    //            else if (g.internal < 16) {
    //                id = g.internal - 10;
    //                nav.killall();
    //                gv.set("pill", "cock");
    //                nav.bg("28_transformation/pill.jpg");
    //                chat(1002, 28);
    //            }
    //            else if (g.internal === 19 || g.internal === 20) {
    //                id = g.internal - 18;
    //                nav.killall();
    //                gv.set("pill", "lip");
    //                nav.bg("28_transformation/pill.jpg");
    //                chat(1003, 28);
    //            }
    //            else {
    //                //nav.modbutton(g.sissy[g.internal].icon, "28_transformation/" + g.sissy[g.internal].icon + ".png");
    //                //chat(999, 28);
    //            }
    //        }
    //        break;
    //    default:
    //        break;
    //}
};

room28.chatcatch = function (callback) {
    switch (callback) {
        case "boobs":
            var tempChest = cl.c.chest + 1;
            if (tempChest < 7) {
                cl.c.chest = tempChest;
                nav.killall();
                nav.bg("28_transformation/chest_" + cl.c.chest + ".gif");
                g.roomTimeout = setTimeout(function () {
                    returnRoomID = g.pass;
                    g.pass = "endSleepyTime";
                    char.room(returnRoomID);
                }, 6000);
            }

            break;
        case "returnToRoom":
            char.room(g.pass);
            break;
        case "tinypp":
            nav.killall();
            cl.c.cock++;
            nav.bg("28_transformation/cock_" + cl.c.cock + ".gif");
            cl.display();
            g.roomTimeout = setTimeout(function () {
                returnRoomID = g.pass;
                g.pass = "endSleepyTime";
                char.room(returnRoomID);
            }, 6000);
            break;
        case "chest0":
            cl.c.chest = 1;
            nav.bg("28_transformation/chest_1.gif");
            cl.display();
            g.roomTimeout = setTimeout(function () {
                returnRoomID = g.pass;
                g.pass = "endSleepyTime";
                char.room(returnRoomID);
            }, 6000);
            break;
        case "endPills":
            gv.mod("energy", -100);
            scc.love("missy", 5);
            char.addtime(220);
            char.room(203);
            break;
        case "endDream":
            room28.btnclick("qquit");
            break;
        default:
            break;
    }
    
};

room28.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "me",
            text: "You've unlocked <span class='hl-pink'>" + g.sissy[g.internal].name + "</span>.",
            button: [
                { chatID: -1, text: "Sweet", callback: "returnToRoom" }
            ]
        };
    }
    else if (chatID > 999) {
        var thisChat = "";
        if (chatID === 1000)
            thisChat = "Take one of these experimental pills and you'll see some growth in your chest my little sissy in training.";
        else if (chatID === 1001)
            thisChat = "Take one of these experimental pills and you'll wake up with a more feminine butt my little sissy in training.";
        else if (chatID === 1002)
            thisChat = "So my little sissy in training wants to shrink their little clitty so they'll be forced to only use her " +
                "sissy pussy. Take this pill tonight my slut.";
        else
            thisChat = "You'll look so pretty with dick sucking lips! I'm so glad you know what a slut you are. ";
        return {
            chatID: 998,
            speaker: "missy",
            text: thisChat,
            button: [
                { chatID: 3, text: "Sweet", callback: "" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "All that working out has given me a sexier body! " + sc.n("missy") + " is going to be so happy to see the new me!",
                button: [
                    { chatID: -1, text: "You feel more in shape", callback: "chest0" }
                ]
            },
            {
                chatID: 1,
                speaker: "me",
                text: "Oh no! I can feel that pee pee shrinking cream working! My penis is getting smaller!",
                button: [
                    { chatID: -1, text: "[Shrink my pee pee]", callback: "tinypp" }
                ]
            },
            {
                chatID: 2,
                speaker: "me",
                text: "I must be dreaming.... I can feel as though my body wants to change.......",
                button: [
                    { chatID: -1, text: ".....", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "I wonder what it feels like to wear panties. They're so soft and feminine. I wonder " +
                    "what I would look like if I was more girly. I bet I would make a hot chick. I would so love " +
                    "to have a dominate girlfriend. Maybe she dresses me up as her girlfriend. Maybe she'll make me " +
                    "wear her panties. I should try on some panties. Just to see what they feel like. I wonder where " +
                    "I can get some panties...",
                button: [
                    { chatID: -1, text: "[You can now wear panties]", callback: "endDream" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "I don't really feel like I belong in my own body. I really feel like I'm far too " +
                    "feminine for who I am, but I'm afraid to change. Maybe I should start wearing a bra. Just to " +
                    "see what it's like to be a secret girl. That's what I'll do. I'll make it a point to always wear " +
                    "a bra. ",
                button: [
                    { chatID: -1, text: "[If you have a bra you have to wear it]", callback: "endDream" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "I wonder what having a pussy feels like? It's so not fair that girls can have so " +
                    "many orgasms, but I only get one. I wonder if my butt can orgasm like a girl. They're " +
                    "both holes. I'll have to try it. Maybe I'll get a dildo. Something small and fun. Nothing " +
                    "crazy. I'm not a whore. ",
                button: [
                    { chatID: -1, text: "[You can buy dildos and plugs]", callback: "endDream" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "You know what! I'm tired of living a lie. I'm going to wear girly clothes. In " +
                    "public. Maybe I'll even buy clothes. But nothing too crazy. Pretty girly clothes. " +
                    "Are you ready world! Here I come. Maybe. ",
                button: [
                    { chatID: -1, text: "[You can buy and wear girly clothing]", callback: "endDream" }
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "I would really like some earrings. Maybe a cute little belly ring. I don't know. " +
                    "It would be so cute on me!",
                button: [
                    { chatID: -1, text: "[You can get piercings]", callback: "endDream" }
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "I REALLY need to look pretty! I should get some makeup! ",
                button: [
                    { chatID: -1, text: "[You can get makeup]", callback: "endDream" }
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "Tattoos are so hot. Words here ",
                button: [
                    { chatID: -1, text: "[You can get tattoos]", callback: "endDream" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "I need to get some cash. Perhaps I could do a little whoring on the street " +
                    "corner. 'cause I'm like a giant whore. and a slut. ",
                button: [
                    { chatID: -1, text: "[You can be a whore on the street corner]", callback: "endDream" }
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "Words here",
                button: [
                    { chatID: -1, text: "[You can wear sexy clothing]", callback: "endDream" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "Words here ",
                button: [
                    { chatID: -1, text: "[You can wear bimbo clothing]", callback: "endDream" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "Words here. bimbo whore slut bla bla  ",
                button: [
                    { chatID: -1, text: "[Bra and panties are optional]", callback: "endDream" }
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "Words here. bimbo whore slut bla bla  ",
                button: [
                    { chatID: -1, text: "[You can wear anything, or nothing]", callback: "endDream" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};