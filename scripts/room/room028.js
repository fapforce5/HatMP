//Modification
//hormone level: 75!!
//sissy transform: 95!!
var room28 = {};
room28.main = function () {
    var i;
    var hormoneLevel, thisTinyPP, fitnesslevel;

    menu.save("HatMP_9", null, 9);

    if (g.dt.getHours() > 6)
        g.dt.setDate(g.dt.getDate() + 1);
    g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 7, 0, 0, 0);
    nav.buildclock();

    g.newday();
    cl.hairgrowth();

    //growhair
    if (g.diffDatesByDays(g.dt, cl.c.lastHairCut) > 21) {
        if (cl.c.hairLength === null)
            cl.c.hairLength = 0;
        else if (cl.c.hairLength < 4)
            cl.c.hairLength++;
        cl.c.lastHairCut = g.dt;
    }

    var maxE = g.get("maxenergy");
    for (i = 0; i < g.st.length; i++) {
        switch (g.st[i].n) {
            case "fitness":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("fitnessLevel", 1);
                    g.mod("maxenergy", 3);
                    g.popUpNotice("Your fitness level increased");
                }
                break;
            case "fitnessLevel":
                fitnesslevel = g.st[i].t;
                break;
            case "leg":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("legLevel", 1);
                    g.popUpNotice("Your kick is stronger");
                }
                break;
            case "body":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("bodyLevel", 1);
                    g.popUpNotice("Your punch is stronger");
                }
                break;
            case "d":
                if (g.st[i].t > 97) {
                    g.st[i].t = 0;
                    g.mod("dLevel", 1);
                    g.popUpNotice("Your defense has increased");
                }
                break;
            case "jobConstWorkToday":
                g.st[i].t = 0;
                break;
            case "energy":
                g.st[i].t = Math.floor(maxE * .75);
                break;
            case "hormone":
                hormoneLevel = g.st[i].t;
                if (g.st[i].t > 15)
                    g.st[i].t -= 2;
                break;
            case "shinkCock":
                if (cl.c.cock < 4) {
                    thisTinyPP = g.st[i].t;
                    g.st[i].t = false;
                }
                break;
        }
    }

    //check Transformation

    var btnList = null;
    if (thisTinyPP) {
        console.log("tinyPP")
        btnList = [{
            "type": "btn",
            "name": "cock",
            "left": 1418,
            "top": 457,
            "width": 256,
            "height": 256,
            "title": "Cancel",
            "image": "28_transformation/cock.png"
        }];
        chat(1, 28);
    }
    else if (cl.c.chest === 0 && fitnesslevel > 0) {
        console.log("fit")
        room28.btnclick("init");
        chat(0, 28);
    }
    else if (hormoneLevel > 65 && g.get("sissy") > 95) {
        g.set("sissy", 0);
        g.mod("sissyLevel", 1);
        room28.btnclick("init");
        chat(2, 28);
    }
    else {
        g.roomTimeout = setTimeout(function () {
            var returnRoomID = g.pass;
            g.pass = "endSleepyTime";
            char.room(returnRoomID);
        }, 1000);
    }

    if (btnList !== null) {
        $.each(btnList, function (i, v) {
            nav.button(v, 28);
        });
    }
};

room28.btnclick = function (name) {
    var id, xtop, xleft, xwidth, pid, tText, xline, i, returnRoomID;
    switch (name) {
        case "init":
            for (i = 0; i < g.sissy.length; i++) {
                switch (g.sissy[i].icon) {
                    case "chest1":
                    case "chest2":
                    case "chest3":
                    case "chest4":
                    case "chest5":
                    case "chest6":
                        g.sissy[i].ach = parseInt(g.sissy[i].icon.substring(5)) <= cl.c.chest;
                        break;
                    case "leg1":
                    case "leg2":
                    case "leg3":
                    case "leg4":
                        g.sissy[i].ach = parseInt(g.sissy[i].icon.substring(3)) <= cl.c.leg;
                        break;
                    case "cock1":
                    case "cock2":
                    case "cock3":
                    case "cock4":
                    case "cock5":
                        g.sissy[i].ach = parseInt(g.sissy[i].icon.substring(4)) <= cl.c.cock;
                        break;
                }
            }
            room28.btnclick("drawBoard");
            break;
        case "drawBoard":
            nav.button({
                "type": "img",
                "name": "bgbar",
                "left": 1620,
                "top": 0,
                "width": 300,
                "height": 1080,
                "image": "28_transformation/rightSide.png"
            }, 28);
            nav.button({
                "type": "btn",
                "name": "cancel",
                "left": 1486,
                "top": 251,
                "width": 100,
                "height": 100,
                "title": "Cancel",
                "image": "28_transformation/cancel.png"
            }, 28);
            $.each(g.sissy, function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": v.icon,
                    "left": v.x,
                    "top": v.y,
                    "width": 100,
                    "height": 100,
                    "title": v.name,
                    "image": "28_transformation/" + v.icon + (v.ach ? "" : "_u") + ".png"
                }, 28);
            });
            break;
        case "chest1":
        case "chest2":
        case "chest3":
        case "chest4":
        case "chest5":
        case "chest6":
        case "leg1":
        case "leg2":
        case "leg3":
        case "leg4":
        case "cock1":
        case "cock2":
        case "cock3":
        case "cock4":
        case "cock5":
        case "makeup0":
        case "makeup1":
        case "makeup2":
        case "lip1":
        case "lip2":
        case "fight0":
        case "fight1":
        case "fight2":
        case "fight3":
        case "gloryhole0":
        case "gloryhole1":
        case "gloryhole2":
        case "date0":
        case "date1":
        case "date2":
        case "clothes0":
        case "clothes1":
        case "clothes2":
        case "clothes3":
            
            $.each(g.sissy, function (i, v) {
                if (v.icon === name) {
                    id = v.id;
                    return;
                }
            });
            pid = g.sissy[id].pID;
            g.internal = id;
            nav.killbutton("bigDisplay");
            nav.killbutton("unlock");
            nav.button({
                "type": "img",
                "name": "bigDisplay",
                "left": 1645,
                "top": 153,
                "width": 250,
                "height": 400,
                "image": "28_transformation/" + name + "_d.png"
            }, 28);

            xtop = 600 * g.ratio;
            xleft = 1634 * g.ratio;
            xwidth = 271 * g.ratio;
            tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">' + g.sissy[id].name + '</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">' + g.sissy[id].description + '</div>';
            if (g.sissy[id].ach)
                tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ration + 'px;">Unlocked</div>';
            else if (pid !== null) {
                if (!g.sissy[pid].ach)
                    tText += '<div style="color:#fedeff; font-size: ' + 25 * g.ration + 'px;">Unlock Preceding </div>';
            }

            xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';
            
            $('#room-buttons').append(xline);

            if (!g.sissy[id].ach) {
                if (pid !== null) {
                    if (g.sissy[pid].ach) {
                        nav.button({
                            "type": "btn",
                            "name": "unlock",
                            "left": 1634,
                            "top": 850,
                            "width": 271,
                            "height": 72,
                            "title": "Unlock",
                            "image": "28_transformation/unlock.png"
                        }, 28);
                    }
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "unlock",
                        "left": 1634,
                        "top": 850,
                        "width": 271,
                        "height": 72,
                        "title": "Unlock",
                        "image": "28_transformation/unlock.png"
                    }, 28);
                }
            }

            break;
        case "cancel":
            g.internal = null;
            nav.killbutton("bigDisplay");
            nav.killbutton("unlock");
            nav.button({
                "type": "img",
                "name": "bigDisplay",
                "left": 1645,
                "top": 153,
                "width": 250,
                "height": 400,
                "image": "28_transformation/cancel_d.png"
            }, 28);

            xtop = 600 * g.ratio;
            xleft = 1634 * g.ratio;
            xwidth = 271 * g.ratio;
            tText = '<div class="char-40" style="font-size: ' + 30 * g.ratio + 'px; margin-bottom:5px;">Cancel</div><div class="char-20" style="font-size: ' + 20 * g.ratio + 'px;">Cancel transformation and lose progress?</div>';

            xline = '<div class="room-img" data-name="bigDisplay" data-room="28" style="top:' + xtop + 'px; left:' + xleft + 'px; width:' + xwidth + 'px; color: #ffffff; text-align:center;" >' + tText + '</div>';

            $('#room-buttons').append(xline);

            nav.button({
                "type": "btn",
                "name": "unlock",
                "left": 1634,
                "top": 850,
                "width": 271,
                "height": 72,
                "title": "Unlock",
                "image": "28_transformation/cancel_b.png"
            }, 28);

            break;
        case "unlock":
            if (g.internal === null) {
                returnRoomID = g.pass;
                g.pass = "endSleepyTime";
                char.room(returnRoomID);
            }
            else {
                g.sissy[g.internal].ach = true;
                if (g.internal < 6) {
                    id = g.internal + 1;
                    nav.killall();
                    cl.c.chest = id;
                    nav.bg("28_transformation/chest_" + id + ".gif");
                    cl.display();
                    g.roomTimeout = setTimeout(function () { char.room(g.pass) }, 6000);
                }
                else if (g.internal < 11) {
                    id = g.internal - 5;
                    nav.killall();
                    cl.c.leg = id;
                    nav.bg("28_transformation/leg_" + id + ".gif");
                    cl.display();
                    g.roomTimeout = setTimeout(function () { char.room(g.pass) }, 6000);
                }
                else if (g.internal < 16) {
                    id = g.internal - 10;
                    nav.killall();
                    cl.c.cock = id;
                    nav.bg("28_transformation/cock_" + id + ".gif");
                    cl.display();
                    g.roomTimeout = setTimeout(function () { char.room(g.pass) }, 6000);
                }
                else if (g.internal === 19 || g.transform === 20) {
                    id = g.internal + 11;
                    nav.killall();
                    tText = cl.lipColor();
                    cl.c.lips = g.internal === 19 ? "big" : "sb";
                    cl.applyLipstick(tText);
                    nav.bg("28_transformation/" + (g.internal === 19 ? "lip_big" : "lip_sb") + ".gif");
                    cl.display();
                    g.roomTimeout = setTimeout(function () { char.room(g.pass) }, 6000);
                }
                else {
                    nav.modbutton(g.sissy[g.internal].icon, "28_transformation/" + g.sissy[g.internal].icon + ".png")
                    chat(999, 28);
                }
            }
            break;
        default:
            break;
    }
};

room28.chatcatch = function (callback) {
    switch (callback) {
        case "boobs":
            var tempChest = cl.c.chest + 1;
            if (tempChest < 7) {
                cl.c.chest = tempChest;
                nav.killall();
                nav.bg("28_transformation/chest_" + cl.c.chest + ".gif");
                g.roomTimeout = setTimeout(function () { char.room(g.pass) }, 4000);
            }

            break;
        case "returnToRoom":
            char.room(g.pass);
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
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "All that working out has given me a sexier body! " + sc.n("missy") + " is going to be so happy to see the new me!",
                button: [
                    { chatID: -1, text: "[Click the chest]", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "me",
                text: "Oh no! I can feel that pee pee shrinking cream working! My penis is getting smaller!",
                button: [
                    { chatID: -1, text: "[Shrink my pee pee]", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "me",
                text: "I must be dreaming.... I can feel as though my body wants to change.......",
                button: [
                    { chatID: -1, text: ".....", callback: "" }
                ]
            }
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};