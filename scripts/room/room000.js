//map
var room0 = {};
room0.chatInput;
room0.main = function () {
    g.pass = g.internal = "";
    $('#room_footer').hide();
    if (!$('#room_left_map').is(":visible"))
        char.changeMenu("hide", false, true);
    var tempMap = g.get("map");
    if (tempMap === 0)
        room0.btnclick("map_0");
    else if (tempMap === 2)
        room0.btnclick("map_2");
    else
        room0.btnclick("map_1");
    setTimeout(function () { $('#room_footer').hide(); }, 200);
    
};

room0.btnclick = function (name) {
    if (name === "map_0") {
        nav.bg("map/map0.jpg", "map/map0_night.jpg");
        g.set("map", 0);
        char.map();
        room0.btnclick("redrawIcons");
    }
    else if (name === "map_1") {
        nav.bg("map/map1.jpg", "map/map1_night.jpg");
        g.set("map", 1);
        char.map();
        room0.btnclick("redrawIcons");
    }
    else if (name === "map_2") {
        nav.bg("map/map2.jpg", "map/map2_night.jpg");
        g.set("map", 2);
        char.map();
        room0.btnclick("redrawIcons");
    }
    else if (name === "redrawIcons") {
        nav.killall();
        
        var btnList = new Array();
        var tempMap = g.get("map");
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
        if (cl.isCrossdressing() && !g.sissy[28].ach) {
            if (roomnum === 203 || roomnum === 500 || roomnum === 250 || roomnum === 450 || roomnum === 650) {
                $('.room-left').show();
                char.addtime(20);
                $('#room_footer').show();
                char.room(roomnum);
            }
            else {
                chat(5, 0);
            }
        }
        else {
            $('.room-left').show();
            char.addtime(20);
            $('#room_footer').show();
            char.room(roomnum);
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
                    var roomList = new Array();
                    switch (g.get("oncase")) {
                        case "smolpp":
                        case "bigboobs":
                        case "bigass":
                        case "dslLips":
                            roomList = [16];
                            break;
                        case "cult0":
                            roomList = [450];
                            break;
                        case "redroom":
                            roomList = [203];
                            break;
                        case "gloryholebj":
                            roomList = [450];
                            break;
                        case "gloryholeanal":
                            roomList = [450];
                            break;
                        case "shopping":
                            roomList = [650];
                            break;
                        case "clothes0":
                        case "clothes1":
                        case "clothes2":
                        case "clothes3":
                            roomList = [150];
                            break;
                        case "dinerfail":
                        case "dinersuccess":
                            roomList = [203];
                            break;
                        case "diner":
                            roomList = [250];
                            break;
                        case "sewer":
                            roomList = [225, 550];
                            break;
                        default:
                            break;
                    }
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
                    var pstep = sc.get(g.walk);
                    var i;
                    var pointer, mp;
                    for (i = 0; i < sc.events.length; i++) {
                        if (sc.events[i].name === g.walk && sc.events[i].step <= pstep.step) {
                            pointer = i;
                        }
                    }
                    var s = sc.events[pointer].m;
                    for (i = 0; i < s.length; i++) {
                        for (j = 0; j < g.roomMap.length; j++) {
                            if (g.roomMap[j].roomID === s[i]) {
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