//Room name
var room489 = {};
room489.main = function () {
    if (g.map?.row !== undefined) {
        if (g.map.row === 49) {
            if (gv.get("forestFastravel2")) {
                nav.bg("489_fasttravel/c1.webp");
                nav.button({
                    "type": "btn",
                    "name": "fast24",
                    "left": 1147,
                    "top": 156,
                    "width": 351,
                    "height": 528,
                    "image": "489_fasttravel/cr.webp"
                }, 489);
            }
            else {
                nav.bg("489_fasttravel/c0.webp");
            }
            nav.button({
                "type": "btn",
                "name": "fast0",
                "left": 666,
                "top": 167,
                "width": 352,
                "height": 521,
                "image": "489_fasttravel/cl.webp"
            }, 489);
            if (!gv.get("forestFastravel1"))
                chat(0, 489);
            nav.buildnav([475]);
            return;
        }
        else if (g.map.row === 24){
            nav.bg("483_cave/bg_empty.jpg", "483_cave/bg_x_night.jpg");
            nav.button({
                "type": "btn",
                "name": "fast49",
                "left": 766,
                "top": 489,
                "width": 487,
                "height": 379,
                "image": "489_fasttravel/c2d.webp",
                "night": "489_fasttravel/c2d_n.webp"
            }, 489);
            if (!gv.get("forestFastravel2"))
                chat(1, 489);
            nav.buildnav([475]);
            return;
        }
    }

    nav.bg("489_fasttravel/cave.webp");
    g.roomTimeout = setTimeout(function () {
        g.map = {
            col: 0,
            row: 49,
            ev: new Array(),
            eventCounter: g.rand(3, 7)
        };
        if (gv.get("difficulty") === 2) {
            gv.set("forestMapUpdate", null);
            gv.set("forestVisit", null);
            m.fmap = null;
        }
        char.room(475);
    }, 1200);
    nav.buildnav([475]);
};

room489.btnclick = function (name) {
    switch (name) {
        case "fast0":
            if (!gv.get("forestFastravel1")) {
                gv.set("forestFastravel1", true);
                g.roomMapAccess(489, true, true);
                chat(2, 489);
            }
            g.map = null;
            nav.kill();
            nav.bg("489_fasttravel/cave.webp");
            gv.set("map", 0);
            g.roomTimeout = setTimeout(function () {
                char.room(0);
            }, 1200);
            break;
        case "fast49":
            g.map.row = 49;
            if (!gv.get("forestFastravel2")) {
                gv.set("forestFastravel2", true);
            }
            nav.kill();
            nav.bg("489_fasttravel/cave.webp");
            g.roomTimeout = setTimeout(function () {
                char.room(475);
            }, 1200);
            break;
        case "fast24":
            g.map.row = 24;
            nav.kill();
            nav.bg("489_fasttravel/cave.webp");
            g.roomTimeout = setTimeout(function () {
                char.room(475);
            }, 1200);
            break;
        default:
            break;
    }
};

room489.chatcatch = function (callback) {
    switch (callback) {
        case "traveldown":
            if(g.map.row)
                
            break;
        default:
            break;
    }
};

room489.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "What a weird looking cave. It goes down somewhere...",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Oooo. A spooky cave. I wonder where it goes. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Sweet! I found a new cave that leads back to the cave system. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};