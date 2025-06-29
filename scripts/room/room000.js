//map
var room0 = {};
room0.chatInput;
room0.main = function () {
    g.pass = g.internal = "";
    $('#room_footer').hide();
    var tempMap = gv.get("map");
    if (tempMap === 0)
        room0.btnclick("map_0");
    else if (tempMap === 2)
        room0.btnclick("map_2");
    else if (tempMap === 3)
        room0.btnclick("map_3");
    else
        room0.btnclick("map_1");
    if (!gv.get("panties") && cl.getEntry("panties", cl.c.panties).sex === "f") {
        gv.set("panties", true);
        dreams.add("firstTimeInPanties");
    }
    setTimeout(function () { $('#room_footer').hide(); }, 200);
    
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
        room0.btnclick("redrawIcons");
    }
    else if (name === "map_1") {
        nav.bg("map/map1.jpg", "map/map1_night.jpg");
        gv.set("map", 1);
        char.map();
        room0.btnclick("redrawIcons");
    }
    else if (name === "map_2") {
        nav.bg("map/map2.jpg", "map/map2_night.jpg");
        gv.set("map", 2);
        char.map();
        room0.btnclick("redrawIcons");
    }
    else if (name === "map_3") {
        nav.bg("map/map3.jpg", "map/map3_night.jpg");
        gv.set("map", 3);
        char.map();
        room0.btnclick("redrawIcons");
    }
    else if (name === "redrawIcons") {
        nav.killall();
        
        var btnList = new Array();
        var tempMap = gv.get("map");
        g.internal = tempMap;
        room0.chatcatch("walk");
        $.each(g.roomMap, function (i, v) {
            if (tempMap === v.map) {
                if (g.isNight() && v.darkAccess) {
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
            setTimeout(function () {
                char.room(roomnum);
            }, 4000);
        }
        else {
            setTimeout(function () {
                char.room(roomnum);
            }, 800);
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
            text: "Can't mess around, I need to go to the University and take my final. ",
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
        }
    ];
    return cArray[chatID];
};