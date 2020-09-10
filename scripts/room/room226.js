//Room name
var room226 = {};
var tree = new Array();
room226.main = function () {
    $("#rl_map").attr("src", "./images/general/map_266.jpg");
    char.changeMenu("map");
    setTimeout(function () { $("#room_footer").hide(); }, 200);
    if (g.internal === "fightLoser") {
        g.internal = "";
        g.pass = "";
        char.room(228);
    }
    else if (g.internal === "runaway") {
        g.internal = "nofight";
        var backRoom = g.pass.l[g.pass.id].b;
        if (backRoom === null)
            backRoom = 0;
        backRoom = g.pass.l[backRoom].b;
        g.pass.id = backRoom;
        char.room(226);
    }
    else if (g.internal === "win") {
        g.internal = "nofight";
        char.room(226);
    }
    else {
        if (g.pass === "foo") {
            var i;
            g.pass = {
                id: 0,
                l: [
                    {
                        id: 0,
                        left: 60,
                        top: 924,
                        t: "y",
                        b: null,
                        l: 1,
                        r: 2,
                        e: null,
                        v: true
                    },
                    {
                        id: 1,
                        left: 133,
                        top: 776,
                        t: "sl",
                        b: 0,
                        l: 5,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 2,
                        left: 24,
                        top: 836,
                        t: "y",
                        b: 0,
                        l: 3,
                        r: 4,
                        e: null,
                        v: false
                    },
                    {
                        id: 3,
                        left: 97,
                        top: 777,
                        t: "l",
                        b: 2,
                        l: 6,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 4,
                        left: 24,
                        top: 777,
                        t: "l",
                        b: 2,
                        l: 7,
                        r: null,
                        e: "f",
                        v: false
                    },
                    {
                        id: 5,
                        left: 175,
                        top: 688,
                        t: "y",
                        b: 1,
                        l: 8,
                        r: 9,
                        e: "f",
                        v: false
                    },
                    {
                        id: 6,
                        left: 60,
                        top: 688,
                        t: "y",
                        b: 3,
                        l: 10,
                        r: 11,
                        e: "f",
                        v: false
                    },
                    {
                        id: 7,
                        left: 22,
                        top: 717,
                        t: "e",
                        b: 4,
                        l: null,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 8,
                        left: 168,
                        top: 540,
                        t: "sr",
                        b: 5,
                        l: 14,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 9,
                        left: 173,
                        top: 628,
                        t: "e",
                        b: 5,
                        l: null,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 10,
                        left: 133,
                        top: 628,
                        t: "l",
                        b: 6,
                        l: 12,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 11,
                        left: 60,
                        top: 628,
                        t: "l",
                        b: 6,
                        l: 13,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 12,
                        left: 131,
                        top: 569,
                        t: "e",
                        b: 10,
                        l: null,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 13,
                        left: 23,
                        top: 541,
                        t: "y",
                        b: 11,
                        l: 15,
                        r: 16,
                        e: null,
                        v: false
                    },
                    {
                        id: 14,
                        left: 131,
                        top: 453,
                        t: "y",
                        b: 8,
                        l: 19,
                        r: 20,
                        e: null,
                        v: false
                    },
                    {
                        id: 15,
                        left: 96,
                        top: 482,
                        t: "l",
                        b: 13,
                        l: 17,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 16,
                        left: 23,
                        top: 482,
                        t: "l",
                        b: 13,
                        l: 18,
                        r: null,
                        e: "f",
                        v: false
                    },
                    {
                        id: 17,
                        left: 94,
                        top: 423,
                        t: "e",
                        b: 15,
                        l: null,
                        r: null,
                        e: "f",
                        v: false
                    },
                    {
                        id: 18,
                        left: 24,
                        top: 334,
                        t: "sl",
                        b: 16,
                        l: 22,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 19,
                        left: 204,
                        top: 394,
                        t: "l",
                        b: 14,
                        l: 21,
                        r: null,
                        e: "f",
                        v: false
                    },
                    {
                        id: 20,
                        left: 129,
                        top: 393,
                        t: "e",
                        b: 14,
                        l: null,
                        r: null,
                        e: "f",
                        v: false
                    },
                    {
                        id: 21,
                        left: 167,
                        top: 306,
                        t: "y",
                        b: 19,
                        l: 23,
                        r: 24,
                        e: null,
                        v: false
                    },
                    {
                        id: 22,
                        left: 66,
                        top: 246,
                        t: "y",
                        b: 18,
                        l: 27,
                        r: 28,
                        e: null,
                        v: false
                    },
                    {
                        id: 23,
                        left: 240,
                        top: 246,
                        t: "l",
                        b: 21,
                        l: 25,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 24,
                        left: 167,
                        top: 246,
                        t: "l",
                        b: 21,
                        l: 26,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 25,
                        left: 240,
                        top: 187,
                        t: "l",
                        b: 23,
                        l: 29,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 26,
                        left: 165,
                        top: 186,
                        t: "e",
                        b: 24,
                        l: null,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 27,
                        left: 138,
                        top: 187,
                        t: "l",
                        b: 22,
                        l: 30,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 28,
                        left: 66,
                        top: 187,
                        t: "l",
                        b: 22,
                        l: 31,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 29,
                        left: 238,
                        top: 127,
                        t: "e",
                        b: 25,
                        l: null,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 30,
                        left: 136,
                        top: 127,
                        t: "e",
                        b: 27,
                        l: null,
                        r: null,
                        e: null,
                        v: false
                    },
                    {
                        id: 31,
                        left: 64,
                        top: 127,
                        t: "e",
                        b: 28,
                        l: null,
                        r: null,
                        e: null,
                        v: false
                    },
                ]
            };

            var bmap = g.get("sewerMap").split(' ');
            for (i = 0; i < bmap.length; i++) {
                var tempThis = parseInt(bmap[i]);
                if (!isNaN(tempThis)) {
                    g.pass.l[tempThis].v = true;
                }
            }

            var sewerend = g.get("sewerEnd");

            if (sewerend === 0) {
                var thisOne = Math.floor(Math.random() * 4);
                if (thisOne === 0)
                    sewerend = 26;
                else if (thisOne === 1)
                    sewerend = 31;
                else if (thisOne === 2)
                    sewerend = 30;
                else
                    sewerend = 29;
                g.set("sewerEnd", sewerend);
            }

            g.pass.l[sewerend].t = "s";
            g.set("sewerID", g.pass.id);
            g.pass.l[g.pass.l[sewerend].b].e = "c";
            room226.btnclick("drawMap");
        }
        else {
            room226.btnclick("drawMap");
        }
        room226.btnclick("midSave");
    }
}; 

room226.btnclick = function (name) {
    switch (name) {
        case "drawMap":
            
            nav.killbutton("left");
            nav.killbutton("right");
            var iconList = [
                { 
                    "name": "y",
                    "width": 103,
                    "height": 98,
                    "image": "225_sewer/p_y.png",
                },
                {
                    "name": "sl",
                    "width": 109,
                    "height": 148,
                    "image": "225_sewer/p_sl.png",
                },
                {
                    "name": "sr",
                    "width": 109,
                    "height": 148,
                    "image": "225_sewer/p_sr.png",
                },
                {
                    "name": "e",
                    "width": 34,
                    "height": 60,
                    "image": "225_sewer/p_e.png",
                },
                {
                    "name": "s",
                    "width": 34,
                    "height": 60,
                    "image": "225_sewer/p_s.png",
                },
                {
                    "name": "l",
                    "width": 30,
                    "height": 59,
                    "image": "225_sewer/p_l.png",
                },
            ];
            var th, tw;
            th = 0; 
            tw = 0;
            $(".rlm-icon").remove();
            for (i = 0; i < g.pass.l.length; i++) {
                for (j = 0; j < iconList.length; j++) {
                    if ((iconList[j].name === g.pass.l[i].t) && g.pass.l[i].v) {
                        $("#room_left_map").append('<img src="./images/room/' + iconList[j].image + '" class="rlm-icon resize" style="' + g.makeCss(iconList[j].height, iconList[j].width, g.pass.l[i].top, g.pass.l[i].left) + '; position: absolute;"/>');
                        if (i === g.pass.id) {
                            th = iconList[j].height;
                            tw = iconList[j].width;
                        }
                    }
                }
            }

            var icont = g.pass.l[g.pass.id].top + (th / 2) - 20;
            var iconl = g.pass.l[g.pass.id].left + (tw / 2) - 20;
            $('.room_l_i').remove();
            $("#room_left_map").append('<img src="./images/room/225_sewer/icon.png" class="rlm-icon resize" style="' + g.makeCss(40, 40, icont, iconl) + '; position: absolute;"/>');

            if (g.pass.l[g.pass.id].t === "s") {
                nav.killbutton("left");
                nav.killbutton("right");
                nav.killbutton("back");
                nav.bg("225_sewer/room.jpg");
                nav.button({
                    "type": "btn",
                    "name": "backRoom",
                    "left": 221,
                    "top": 210,
                    "width": 242,
                    "height": 337,
                    "image": "225_sewer/exit.png",
                    "title": "exit"
                }, 226);
                if (!inv.has("redbox")) {
                    nav.button({
                        "type": "btn",
                        "name": "redbox",
                        "left": 1251,
                        "top": 743,
                        "width": 229,
                        "height": 80,
                        "image": "225_sewer/redbox.png",
                        "title": "Red Box"
                    }, 226);
                    chat(0, 226);
                }
            }
            else {

                if (g.pass.l[g.pass.id].l === null && g.pass.l[g.pass.id].r === null) {
                    nav.bg("225_sewer/s0.jpg");

                }
                else if (g.pass.l[g.pass.id].r === null) {
                    nav.bg("225_sewer/s1.jpg");
                    nav.button({
                        "type": "btn",
                        "name": "left",
                        "left": 536,
                        "top": 56,
                        "width": 773,
                        "height": 638,
                        "image": "225_sewer/center.png",
                        "title": "straight"
                    }, 226);
                }
                else {
                    nav.bg("225_sewer/s2.jpg");
                    nav.button({
                        "type": "btn",
                        "name": "left",
                        "left": 1078,
                        "top": 79,
                        "width": 582,
                        "height": 716,
                        "image": "225_sewer/right.png",
                        "title": "right"
                    }, 226);
                    nav.button({
                        "type": "btn",
                        "name": "right",
                        "left": 282,
                        "top": 79,
                        "width": 582,
                        "height": 716,
                        "image": "225_sewer/left.png",
                        "title": "left"
                    }, 226);
                }
                nav.button({
                    "type": "btn",
                    "name": "back",
                    "left": 405,
                    "top": 920,
                    "width": 1411,
                    "height": 100,
                    "image": "225_sewer/back.png",
                    "title": "back"
                }, 226);

                if (g.pass.l[g.pass.id].e !== null) {
                    if (g.internal === "nofight")
                        g.internal = null;
                    else {
                        var thisEnemy;
                        if (g.pass.l[g.pass.id].e === "c")
                            thisEnemy = "clownQueen";
                        else
                            thisEnemy = Math.floor(Math.random() * 2) === 0 ? "futaRed" : "futaYellow";
                        g.internal = { enemy: thisEnemy, bg: "sewer", roomID: 226 };
                        char.room(227);
                    }
                }
                //else if (g.internal !== "nofight") {
                //    g.internal = "";
                //    if (Math.floor(Math.random() * 4) === 0)
                //        g.internal = { enemy: (Math.floor(Math.random() * 2) === 0 ? "futaRed" : "futaYellow"), bg: "sewer", roomID: 226 };
                //    char.room(227);
                //}
            }
            break;
        case "left":
            g.pass.id = g.pass.l[g.pass.id].l;
            g.pass.l[g.pass.id].v = true;
            room226.btnclick("drawMap");
            room226.btnclick("midSave");
            break;
        case "right":
            g.pass.id = g.pass.l[g.pass.id].r;
            g.pass.l[g.pass.id].v = true;
            room226.btnclick("drawMap");
            room226.btnclick("midSave");
            break;
        case "back":
            if (g.pass.id === 0) {
                $("#room_left_map").html('<img src="./images/general/map_ov.png" class="width-l" id="rl_map" style="width:100%" />');
                char.room(228);
            }
            else {
                g.pass.id = g.pass.l[g.pass.id].b;
                room226.btnclick("drawMap");
                room226.btnclick("midSave");
            }
            break;
        case "backRoom":
            nav.killbutton("redbox");
            nav.killbutton("backRoom");
            g.pass.id = 0;
            room226.btnclick("drawMap");
            room226.btnclick("midSave");
            break;
        case "midSave":
            var mi;
            var sewerMapString = "";
            for (mi = 0; mi < g.pass.l.length; mi++) {
                if (g.pass.l[mi].v)
                    sewerMapString += mi.toString() + " ";
            }
            g.set("sewerMap", sewerMapString);
            g.set("sewerID", g.pass.id);
            menu.makeSaves();
            break;
        case "redbox":
            nav.killbutton("redbox");
            inv.add("redbox");
            chat(1, 226);
            break;
        default:
            break;
    }
};

room226.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room226.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Made it, now to get " + sc.n("missy") + "'s red box.",
            button: [
                { chatID: -1, text: "..look for the red box", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Awesome! Now to return it to " + sc.n("missy") + ".",
            button: [
                { chatID: -1, text: "Return box to " + sc.n("missy") + ".", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};