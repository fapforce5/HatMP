//Room name
var room225 = {};
room225.main = function () {
    var navList = [0];
    $("#room_left_map").html('<img src="./images/general/map_ov.png" class="width-l" id="rl_map" style="width:100%" />');
    if (g.pass === "insideTheSewer") {
        char.changeMenu("body");
        g.pass = "";
        nav.bg("225_sewer/sewer.jpg");
        nav.button({
            "type": "btn",
            "name": "up",
            "left": 1525,
            "top": 430,
            "width": 94,
            "height": 228,
            "image": "225_sewer/up.png",
        }, 225);
        nav.button({
            "type": "btn",
            "name": "in",
            "left": 794,
            "top": 311,
            "width": 361,
            "height": 453,
            "image": "225_sewer/in.png",
        }, 225);
    }
    else {
        if (inv.has("sewer")) {
            if (cl.c.dress === null && cl.c.swimsuit === null && cl.c.pj === null && (cl.c.shirt === null || cl.c.pants === null)) {
                nav.button({
                    "type": "img",
                    "name": "copx",
                    "left": 456,
                    "top": 35,
                    "width": 585,
                    "height": 1045,
                    "image": "225_sewer/cop.png"
                }, 225);
                zcl.displayClothed();
                nav.button({
                    "type": "img",
                    "name": "copx1",
                    "left": 395,
                    "top": 341,
                    "width": 1525,
                    "height": 739,
                    "image": "225_sewer/crowd.png"
                }, 225);
                chat(0, 225);
            }
            else {
                var btnList = [
                    {
                        "type": "btn",
                        "name": "lid",
                        "left": 280,
                        "top": 831,
                        "width": 356,
                        "height": 143,
                        "image": "225_sewer/lid.png",
                        "NIGHT": "225_sewer/lid_night.png"
                    }
                ];
                $.each(btnList, function (i, v) {
                    nav.button(v, 225);
                });
            }
        }
        nav.buildnav(navList);
    }
};

room225.btnclick = function (name) {
    switch (name) {
        case "lid":
            nav.killbutton("lid");
            nav.bg("225_sewer/sewer.jpg");
            nav.button({
                "type": "btn",
                "name": "up",
                "left": 1525,
                "top": 430,
                "width": 94,
                "height": 228,
                "image": "225_sewer/up.png",
            }, 225);
            nav.button({
                "type": "btn",
                "name": "in",
                "left": 794,
                "top": 311,
                "width": 361,
                "height": 453,
                "image": "225_sewer/in.png",
            }, 225);
            break;
        case "up":
            char.room(225);
            break;
        case "in":
            if (g.get("energy") < 5) {
                chat(1, 225);
            }
            else {
                g.pass = "foo";
                char.room(226);
            }
            break;
        default:
            break;
    }
};

room225.chatcatch = function (callback) {
    switch (callback) {
        case "tojail":
            g.pass = "jail";
            char.room(425);
            break;
        default:
            break;
    }
};

room225.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cop2",
            text: "Alright. If you're going to prostitute yourself for sex be less obvious about it and wear some clothes. ",
            button: [
                { chatID: -1, text: "but officer, I wasn't....", callback: "tojail" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I need more energy to wander around the sewers.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};