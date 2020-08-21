//map
var room0 = {};
room0.chatInput;
room0.main = function () {
    
    $('#room_footer').hide();
    $('.room-left').hide();
    var tempMap = g.get("map");
    if (tempMap === 0)
        room0.btnclick("map_0");
    else if (tempMap === 2)
        room0.btnclick("map_2");
    else
        room0.btnclick("map_1");
    setTimeout(function () { $('#room_footer').hide(); $('.room-left').hide();}, 200)
};

room0.btnclick = function (name) {
    if (name === "map_0") {
        nav.bg("map/map0.jpg", "map/map0_night.jpg");
        g.set("map", 0);
        room0.btnclick("redrawIcons");
    }
    else if (name === "map_1") {
        nav.bg("map/map1.jpg", "map/map1_night.jpg");
        g.set("map", 1);
        room0.btnclick("redrawIcons");
    }
    else if (name === "map_2") {
        nav.bg("map/map2.jpg", "map/map2_night.jpg");
        g.set("map", 2);
        room0.btnclick("redrawIcons");
    }
    else if (name === "redrawIcons") {
        nav.killall();
        var btnList = new Array();
        var tempMap = g.get("map");
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
                        "image": v.night
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
                "left": 997,
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
                "left": 995,
                "top": 900,
                "width": 90,
                "height": 101,
                "image": "map/arrowDown.png"
            });
            btnList.push({
                "type": "btn",
                "name": "map_0",
                "left": 995,
                "top": 2,
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
        if (cl.isCrossdressing() && !sc.checkevent("me", -11)) {
            if (roomnum === 203 || roomnum === 500 || roomnum === 250 || roomnum === 450) {
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

};

room0.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
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
        }
    ];
    return cArray[chatID];
};