//Room name
var room226 = {};
room226.main = function () {
    $("#room-inv").show();
    $("#room-menu").show(); 
    if (g.map === null) {
        $("#room_left_map").attr("src", "./images/general/map_266.jpg");
        g.map = {
            id: 0,
            slime: false,
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
                    e: "g",
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
                    e: "g",
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
                    e: "g",
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
                    e: "g",
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
                    e: "g",
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
                    e: "g",
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
                    e: "g",
                    v: false
                }
            ]
        };
        g.map.slime = !g.get("slimeMonsters");
        var sewerend = g.get("sewerEnd");
        var thisSewerID = g.get("sewerID");
        var bmap = g.get("sewerMap").split(' ');

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

        g.map.l[sewerend].t = "s";
        g.map.l[g.map.l[sewerend].b].e = "c";
        g.map.id = thisSewerID;
        
        for (i = 0; i < bmap.length; i++) {
            var tempThis = parseInt(bmap[i]);
            if (!isNaN(tempThis)) {
                g.map.l[tempThis].v = true;
            }
        }

    }
    else {
        if (g.pass === "runaway") {
            g.internal = "nofight";
            var backRoom = g.map.l[g.map.id].b;
            if (backRoom === null)
                backRoom = 0;
            backRoom = g.map.l[backRoom].b;
            if (backRoom === null)
                backRoom = 0;
            g.map.id = backRoom;
        }
        else if (g.pass === "win") {
            g.internal = "nofight";
        }
    }

    char.changeMenu("map", false, true);
    
    if (g.get("energy") < 3) {
        chat(2, 226);
    }
    else
        setTimeout(function () { $("#room_footer").hide(); }, 200);

    room226.btnclick("drawMap");
    room226.btnclick("midSave");
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
                    "image": "225_sewer/p_y.png"
                },
                {
                    "name": "sl",
                    "width": 109,
                    "height": 148,
                    "image": "225_sewer/p_sl.png"
                },
                {
                    "name": "sr",
                    "width": 109,
                    "height": 148,
                    "image": "225_sewer/p_sr.png"
                },
                {
                    "name": "e",
                    "width": 34,
                    "height": 60,
                    "image": "225_sewer/p_e.png"
                },
                {
                    "name": "s",
                    "width": 34,
                    "height": 60,
                    "image": "225_sewer/p_s.png"
                },
                {
                    "name": "l",
                    "width": 30,
                    "height": 59,
                    "image": "225_sewer/p_l.png"
                }
            ];
            var th, tw;
            th = 0; 
            tw = 0;
            $(".rlm-icon").remove();
            $(".killmap").remove();
            for (i = 0; i < g.map.l.length; i++) {
                for (j = 0; j < iconList.length; j++) {
                    if ((iconList[j].name === g.map.l[i].t) && g.map.l[i].v) {
                        $("#room_left_map").append('<img src="./images/room/' + iconList[j].image + '" class="rlm-icon resize" style="' + g.makeCss(iconList[j].height, iconList[j].width, g.map.l[i].top, g.map.l[i].left) + '; position: absolute;"/>');
                        if (i === g.map.id) {
                            th = iconList[j].height;
                            tw = iconList[j].width;
                        }
                    }
                }
            }

            var icont = g.map.l[g.map.id].top + (th / 2) - 20;
            var iconl = g.map.l[g.map.id].left + (tw / 2) - 20;
            $('.room_l_i').remove();
            $("#room_left_map").append('<img src="./images/room/225_sewer/icon.png" class="rlm-icon resize" style="' + g.makeCss(40, 40, icont, iconl) + '; position: absolute;"/>');

            if (g.map.l[g.map.id].t === "s") {
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

                if (g.map.l[g.map.id].l === null && g.map.l[g.map.id].r === null) {
                    nav.bg("225_sewer/s0.jpg");

                }
                else if (g.map.l[g.map.id].r === null) {
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

                if (g.map.l[g.map.id].e !== null) {
                    if (g.internal === "nofight")
                        g.internal = null;
                    else {
                        var thisEnemy;
                        if (g.map.l[g.map.id].e === "c")
                            thisEnemy = "sc";
                        else if (g.map.l[g.map.id].e === "g" && g.get("fantasyCreatures"))
                            thisEnemy = "goo";
                        else
                            thisEnemy = Math.floor(Math.random() * 2) === 0 ? "fr" : "fy";
                        //{ enemy0: "futaRed", enemy1: "futaYellow", enemy2: null, bg: "sewer", roomID: 0 };
                        g.pass = { enemy0: thisEnemy, enemy1: null, enemy2: null, bg: "sewer", roomID: 226 };
                        char.room(227);
                    }
                }
                else if (g.map.l[g.map.id].t === "e" && !g.map.slime) {
                    if (Math.floor(Math.random() * 3) === 0) {
                        nav.killbutton("back");
                        g.map.slime = true;
                        nav.bg("225_sewer/slime1.jpg");
                        if (cl.c.chastity === null)
                            chat(3, 226);
                        else
                            chat(14, 226);
                    }
                }
            }
            break;
        case "left":
            g.map.id = g.map.l[g.map.id].l;
            g.map.l[g.map.id].v = true;
            room226.btnclick("drawMap");
            room226.btnclick("midSave");
            break;
        case "right":
            g.map.id = g.map.l[g.map.id].r;
            g.map.l[g.map.id].v = true;
            room226.btnclick("drawMap");
            room226.btnclick("midSave");
            break;
        case "back":
            if (g.map.id === 0) {
                char.map();
                char.room(228);
            }
            else {
                g.map.id = g.map.l[g.map.id].b;
                room226.btnclick("drawMap");
                room226.btnclick("midSave");
            }
            break;
        case "backRoom":
            nav.killbutton("redbox");
            nav.killbutton("backRoom");
            g.map.id = 0;
            room226.btnclick("drawMap");
            room226.btnclick("midSave");
            break;
        case "midSave":
            var mi;
            var sewerMapString = "";
            for (mi = 0; mi < g.map.l.length; mi++) {
                if (g.map.l[mi].v)
                    sewerMapString += mi.toString() + " ";
            }
            g.set("sewerMap", sewerMapString);
            g.set("sewerID", g.map.id);

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
        case "leaveSewer":
            g.map = g.fight = null;
            char.room(228);
            break;
        case "slime1":
        case "slime2":
        case "slime3":
        case "slime6":
        case "slime7":
        case "slime8":
        case "slime9":
        case "slime10":
            nav.bg("225_sewer/" + callback + ".jpg");
            break;
        case "slime4":
            nav.bg("225_sewer/slime4.jpg");
            zcl.displayMain(0, 300, .30, "armsup", false);
            nav.button({
                "type": "img",
                "name": "slime",
                "left": 336,
                "top": 132,
                "width": 1161,
                "height": 948,
                "image": "225_sewer/slime4.png"
            }, 226);
            break;
        case "slime5":
            zcl.kill();
            nav.killbutton("slime");
            nav.bg("225_sewer/slime5.jpg");
            break;
        case "slimereset":
            room226.btnclick("drawMap");
            g.mod("fuckPussy", 1);
            cl.doCum(false);
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
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't have enough energy to continue... ",
            button: [
                { chatID: -1, text: "Give up.", callback: "leaveSewer" }
            ]
        },
        {
            chatID: 3,
            speaker: "slime",
            text: "What is it doing in my sewer?",
            button: [
                { chatID: 4, text: "Oh gross, is the slime talking?", callback: "slime2" }
            ]
        },
        {
            chatID: 4,
            speaker: "slime",
            text: "Gross? It thinks I'm gross? ",
            button: [
                { chatID: 5, text: "No, I'm going to get going.", callback: "slime3" }
            ]
        },
        {
            chatID: 5,
            speaker: "slime",
            text: "It's not going anywhere. Come here my toy.",
            button: [
                { chatID: 6, text: "AAkkkk", callback: "slime4" }
            ]
        },
        {
            chatID: 6,
            speaker: "slime",
            text: "hmmm.. I wonder what it tastes like? ",
            button: [
                { chatID: 7, text: "Wha... no, don't eat me!", callback: "slime5" }
            ]
        },
        {
            chatID: 7,
            speaker: "slime",
            text: "Eat you? No, I'm going to take your slime ",
            button: [
                { chatID: 8, text: "My what?", callback: "slime6" }
            ]
        },
        {
            chatID: 8,
            speaker: "slime",
            text: "Oh yes Gimmie your slime!",
            button: [
                { chatID: 9, text: "Oh shit that's tight", callback: "slime7" }
            ]
        },
        {
            chatID: 9,
            speaker: "slime",
            text: "Aaaaaa",
            button: [
                { chatID: 10, text: "...", callback: "slime8" }
            ]
        },
        {
            chatID: 10,
            speaker: "slime",
            text: "mmmm Gimmie the slime!",
            button: [
                { chatID: 11, text: "...", callback: "slime9" }
            ]
        },
        {
            chatID: 11,
            speaker: "slime",
            text: "Oh yes, it's filling me",
            button: [
                { chatID: 12, text: "...", callback: "slime10" }
            ]
        },
        {
            chatID: 12,
            speaker: "slime",
            text: "Yummy, I like it's slime in my belly.",
            button: [
                { chatID: 13, text: "...", callback: "slimereset" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "What, where did the slime creature go? How odd.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "slime",
            text: "What is it doing in my sewer?",
            button: [
                { chatID: 15, text: "Oh gross, is the slime talking?", callback: "slime2" }
            ]
        },
        {
            chatID: 15,
            speaker: "slime",
            text: "Gross? It thinks I'm gross? ",
            button: [
                { chatID: 16, text: "No, I'm going to get going.", callback: "slime3" }
            ]
        },
        {
            chatID: 16,
            speaker: "slime",
            text: "It's not going anywhere. Come here my toy.",
            button: [
                { chatID: 17, text: "AAkkkk", callback: "slime4" }
            ]
        },
        {
            chatID: 17,
            speaker: "slime",
            text: "Oh no, it's slime hose is locked. It's no fun.",
            button: [
                { chatID: 18, text: "Hmmmm", callback: "slime5" }
            ]
        },
        {
            chatID: 18,
            speaker: "slime",
            text: "I'm going to play with the clowns, they are more fun. ",
            button: [
                { chatID: 19, text: "...", callback: "slimereset" }
            ]
        },
        {
            chatID: 19,
            speaker: "slime",
            text: "That was weird, oh well.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};