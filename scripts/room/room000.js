//map
var room0 = {};
room0.chatInput;
room0.main = function () {
    if (sc.getMissionTask("ralph", "cult", 1).inProgress) {
        sc.completeMissionTask("ralph", "cult", 1);
        nav.bg("203_entrance/rmom0.webp")
        chat(29, 203);
        return;
    }
    g.pass = g.internal = "";
    $('#room_footer').hide();
    var tempMap = gv.get("map");
    if (tempMap === 0)
        invoker.invokeCurrent("btnclick", "map_0");
    else if (tempMap === 2)
        invoker.invokeCurrent("btnclick", "map_2");
    else if (tempMap === 3)
        invoker.invokeCurrent("btnclick", "map_3");
    else
        invoker.invokeCurrent("btnclick", "map_1");
    if (!gv.get("panties") && cl.getEntry("panties", cl.c.panties).sex === "f") {
        gv.set("panties", true);
        dreams.add("firstTimeInPanties");
    }
    g.roomTimeout2 = setTimeout(function () {
        g.roomTimeout2 = null;
        $('#room_footer').hide();
    }, 200);
    
};

room0.btnclick = function (name) {
    if (name === "money") {
        nav.killbutton("money");
        daily.set("foundmoney");
        g.popUpNotice("You found money! ");
        gv.mod("money", g.rand(10, 50));
    }
    else if (name === "moveChar") {
        char.room(g.nextRoomId);
    }
    else if (name === "map_0") {
        nav.bg("map/map0.jpg", "map/map0_night.jpg");
        gv.set("map", 0);
        char.map();
        invoker.invokeCurrent("btnclick", "redrawIcons");
    }
    else if (name === "map_1") {
        nav.bg("map/map1.jpg", "map/map1_night.jpg");
        gv.set("map", 1);
        char.map();
        invoker.invokeCurrent("btnclick", "redrawIcons");
    }
    else if (name === "map_2") {
        nav.bg("map/map2.jpg", "map/map2_night.jpg");
        gv.set("map", 2);
        char.map();
        invoker.invokeCurrent("btnclick", "redrawIcons");
    }
    else if (name === "map_3") {
        nav.bg("map/map3.jpg", "map/map3_night.jpg");
        gv.set("map", 3);
        char.map();
        invoker.invokeCurrent("btnclick", "redrawIcons");
    }
    else if (name === "redrawIcons") {
        nav.killall();

        var btnList = new Array();
        var tempMap = gv.get("map");
        g.internal = tempMap;
        invoker.invokeCurrent("chatcatch", "walk");
        let carnival = gv.get("carnival");
        $.each(g.roomMap, function (i, v) {
            if (tempMap === v.map) {
                if (v.roomID === 625 && !carnival) {
                    btnList.push({
                        "type": "img",
                        "name": v.roomID,
                        "left": v.left,
                        "top": v.top,
                        "width": v.width,
                        "height": v.height,
                        "image": "map/625_a.png",
                        "title": v.display
                    });
                }
                else if (g.isNight() && v.darkAccess) {
                    btnList.push({
                        "type": "btn",
                        "name": v.roomID,
                        "left": v.left,
                        "top": v.top,
                        "width": v.width,
                        "height": v.height,
                        "image": v.night,
                        "title": v.display
                    });
                }
                else if (!g.isNight() && v.access) {
                    btnList.push({
                        "type": "btn",
                        "name": v.roomID,
                        "left": v.left,
                        "top": v.top,
                        "width": v.width,
                        "height": v.height,
                        "image": v.img
                    });
                }
            }
        });
        if (tempMap === 0) {
            btnList.push({
                "type": "btn",
                "name": "map_1",
                "left": 418,
                "top": 900,
                "width": 90,
                "height": 101,
                "image": "map/arrowDown.png"
            });
        }
        else if (tempMap === 1) {
            btnList.push({
                "type": "btn",
                "name": "map_2",
                "left": 418,
                "top": 900,
                "width": 90,
                "height": 101,
                "image": "map/arrowDown.png"
            });
            btnList.push({
                "type": "btn",
                "name": "map_0",
                "left": 418,
                "top": 50,
                "width": 90,
                "height": 101,
                "image": "map/arrowUp.png"
            });
        }
        else if (tempMap === 2) {
            btnList.push({
                "type": "btn",
                "name": "map_1",
                "left": 418,
                "top": 50,
                "width": 90,
                "height": 101,
                "image": "map/arrowUp.png"
            });
        }
        $.each(btnList, function (i, v) {
            nav.button(v, 0);
        });
    }
    else {
        var roomnum = parseInt(name);
        if (roomnum === 48)
            roomnum = 49;
        if (roomnum === 49) {
            char.room(49);
            return;
        }
        $('.room-left').show();
        char.addtime(20);
        $('#room_footer').show();
        nav.killall();
        nav.bg("map/" + roomnum + "_close" + (g.isNight() ? "night" : "") + ".jpg");
        g.nextRoomId = roomnum;
        if (!fame.event(0, "moveChar")) {
            if (g.rand(0, 20) === 0 && !daily.get("foundmoney")) {
                nav.button({
                    "type": "btn",
                    "name": "money",
                    "left": 1532,
                    "top": 707,
                    "width": 327,
                    "height": 327,
                    "image": "map/money.png"
                }, 0);
                g.roomTimeout = setTimeout(function () {
                    g.roomTimeout = null;
                    char.room(roomnum);
                }, 4000);
            }
            else {
                if (g.rand(0, 6) === 0) {
                    if (levels.get("anal").l < 6 || levels.get("oral").l > 6) {
                        if (g.rand(0, 2) === 0) {
                            nav.button({
                                "type": "img",
                                "name": "screen",
                                "left": 0,
                                "top": 0,
                                "width": 1920,
                                "height": 1080,
                                "image": "1001_rand/map_pop" + g.rand(0, 3) + ".webp"
                            }, 0);
                        }
                        else {
                            nav.button({
                                "type": "img",
                                "name": "screen",
                                "left": 0,
                                "top": 0,
                                "width": 1920,
                                "height": 1080,
                                "image": "1001_rand/map_gpop" + g.rand(0, 4) + ".webp"
                            }, 0);
                        }
                    }
                    else if(gv.get("arousal") > 65)  {
                        nav.button({
                            "type": "img",
                            "name": "screen",
                            "left": 0,
                            "top": 0,
                            "width": 1920,
                            "height": 1080,
                            "image": "1001_rand/map_apop" + g.rand(0, 4) + ".webp"
                        }, 0);
                    }
                }
                
                g.roomTimeout = setTimeout(function () {
                    g.roomTimeout = null;
                    char.room(roomnum);
                }, 800);
            }
        }
    }
    if (cl.isLewd()) {
        nav.button({
            "type": "img",
            "name": "lewd",
            "left": 1720,
            "top": 980,
            "width": 200,
            "height": 100,
            "image": "map/lewd.png"
        }, 0);
    }
};

room0.chatcatch = function (callback) {
    switch (callback) {
        case "walk":
            if (g.walk !== null) {
                if (g.walk === "oncase") {
                    var roomList = missy.activecase().m;
                    for (i = 0; i < roomList.length; i++) {
                        for (j = 0; j < g.roomMap.length; j++) {
                            if (g.roomMap[j].roomID === roomList[i]) {
                                mp = g.roomMap[j];
                                j = 999999;
                            }
                        }
                        if (mp.map === g.internal)
                            nav.button({
                                "type": "img",
                                "name": "xxx",
                                "left": mp.left + (mp.width / 2) - 200,
                                "top": mp.top + (mp.height / 2) - 200,
                                "width": 400,
                                "height": 400,
                                "image": "map/marker.gif"
                            }, 0);
                    }
                }
                else {
                    //
                }
            }
            g.internal = null;
            break;
        case "moveChar":
            invoker.invokeCurrent("btnclick", "moveChar");
            break;
        default:
            break;
    }
};

room0.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Stay tuned for the rest. Don't forget to save! ",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Can't mess around, I need to go to the university and take my final. ",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: room0.chatInput,
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "It's pretty late, I need to get home. ",
            button: []
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I'm not allowed to go there yet. ",
            button: []
        },
        {
            chatID: 5,
            speaker: "me",
            text: "There's NO way I would go in there dressed like this!",
            button: []
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I'm naked! I have to be careful of where I go.",
            button: []
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "I need to suck cock... I'm addicted to sucking cocks...",
            button: [
                { chatID: -1, text: "[Snap out of it]", callback: "moveChar" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "I need to get fucked up my bussy... I'm addicted to getting fucked up my bussy.",
            button: [
                { chatID: -1, text: "[Snap out of it]", callback: "moveChar" }
            ]
        }
    ];
    return cArray[chatID];
};

invoker.registerRoom(0, room0);
