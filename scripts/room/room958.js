//Room name
var room958 = {};
room958.main = function () {
    if (g.map === null || (typeof g.map === 'object' && Object.keys(g.map).length === 0)) {
        g.map = {
            x: 0,
            y: 6,
            counter: 0,
            lastRape: 0,
            randEventList: g.shuffleArray(["b", "c", "d", "e", "f", "g", "h"]),
            map: [
                //      0                  1                    2                   3                  4                       5                  6                  7                  8                    9                    10                  11                      
                /*00*/[{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "a" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "z" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                /*01*/[{ x: "x", y: "_" }, { x: "u", y: "a" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "a" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "a" }],
                /*02*/[{ x: "u", y: "a" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "a" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                /*03*/[{ x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "t" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "a" }],
                /*04*/[{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "p" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                /*05*/[{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                /*06*/[{ x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "e" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                /*07*/[{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "a" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                /*08*/[{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "a" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                /*09*/[{ x: "x", y: "_" }, { x: "u", y: "a" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "a" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "u" }],
                /*10*/[{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "a" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "a" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                /*11*/[{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "a" }, { x: "x", y: "_" }, { x: "x", y: "_" }]
            ]
        };
        char.changeMenu("map", false, true);
    }
    console.log(g.map.x + " , " + g.map.y); 
    g.map.map[g.map.y][g.map.x].x = "c"; 
    room958.btnclick("displayBackground");
    
    switch (g.map.map[g.map.y][g.map.x].y) {
        case "e":
            if (g.map.counter > 0) {
                g.map = null;
                gv.mod("cultDayCounter", 1);
                char.room(952);
                return;
            }
            break;
        case "a":
            if (g.map.randEventList.length < 1 || g.rand(0, 4) === 0) {
                g.map.map[g.map.y][g.map.x].y = "_";
                char.addtime(-2);
                char.room(958);
                return;
            }
            nav.kill();
            nav.bg("958_wander/event_" + g.map.randEventList[0] + ".webp");
            g.map.map[g.map.y][g.map.x].y = g.map.randEventList[0];
            switch (g.map.randEventList[0]) {
                case "b":
                    chat(16, 958);
                    break;
                case "c":
                    chat(18, 958);
                    break;
                case "d":
                    room958.btnclick("displayDirection");
                    chat(22, 958);
                    return;
                    break;
                case "e":
                    chat(27, 958);
                    break;
                case "f":
                    chat(38, 958);
                    break;
                case "g":
                    chat(50, 958);
                    break;
                case "h":
                    chat(51, 958);
                    break;
            }
            g.map.randEventList.shift();
            break;
        case "b":
            nav.kill();
            nav.bg("958_wander/event_b.webp");
            chat(17, 958);
            break;
        case "c":
            if (daily.get("958_slurppiss"))
                nav.bg("958_wander/event_c3.webp");
            else
                nav.bg("958_wander/event_c3piss.webp");
            nav.kill();
            room958.btnclick("displayDirection");
            return;
        case "d":
            nav.bg("958_wander/event_empty.webp");
            break;
        case "e":
            nav.bg("958_wander/event_empty.webp");
            break;
        case "f":
            nav.bg("958_wander/event_empty.webp");
            break;
        case "g":
            nav.bg("958_wander/event_empty.webp");
            break;
        case "h":
            nav.bg("958_wander/event_empty.webp");
            break;
        case "p":
            nav.kill();
            if (g.pass.e === "panties") {
               
                if (g.pass.compete) {
                    nav.bg("958_wander/panties_complete.webp");
                    chat(2, 958);
                }
                else if (cl.c.panties !== null) {
                    nav.bg("958_wander/panties.webp");
                    zcl.displayMain(0, 300, .2, "clothes", true);
                    chat(0, 958);
                }
                else {
                    nav.bg("958_wander/panties.webp");
                    zcl.displayMain(0, 300, .2, "clothes", true);
                    chat(3, 958);
                }
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "north",
                    "title": "North",
                    "left": 840,
                    "top": 200,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/dn.png"
                }, 958);
                nav.bg("958_wander/panties_no.webp");
            }
            break;
        case "u":
            //stairs
            break;
        case "z":
            nav.bg("958_wander/octogon.webp");
            if (daily.get("cultdog")) {
                chat(9, 958);
            }
            else if (gv.get("cultdog") === 0) {
                nav.kill();
                chat(4, 958);
            }
            else {
                nav.kill();
                daily.set("cultdog");
                chat(5, 958);
            }
            gv.mod("cultdog", 1);
            break;
        case "_":
            if (g.map.lastRape > 6 && g.rand(0, 4) === 0) {
                g.map.lastRape = 0;
                nav.kill();
                nav.bg("958_wander/rape.webp");
                rape.init(null, "castle", 958, "endrape");
            }
            break;
    }
    g.map.lastRape++;
    g.map.counter++;

    //g.pass = {
    //    e: "panties",
    //    compete: false,
    //    q: null
    //};
    /*
      0 1 2 3 4 5 6 7 8 9 0 1
   0  X X X X X X X X o X X X
   1  X o X X o X X o o o o o
   2  o o X X o X o X X X o X
   3  X o o X o o o o o X o o
   4  X X o o o X o X o X o X
   5  X X o X X X X X o o o X
   6  S o o X X X o o o X X X
   7  X X o o X X o X X X X X
   8  X X o X o o o o o X X X
   9  X o o X X o X X E X o o
   10 X X o o X X X o o o o X
   11 X X o X X X X X X o X X*/
};

room958.btnclick = function (name) {
    var grid = g.map.map;
    var curY = g.map.y;
    var curX = g.map.x;
    switch (name) {
        case "displayBackground":
            
            nav.bg("958_wander/bg.webp"); 
            // Check North (Y - 1)
            if (curY > 0 && grid[curY - 1][curX].x !== "x") {
                nav.button({
                    "type": "img",
                    "name": "bg_n",
                    "left": 0, "top": 0, "width": 1920, "height": 1080,
                    "image": "958_wander/bg_north.webp",
                }, 958);
                nav.button({
                    "type": "btn",
                    "name": "north",
                    "title": "North",
                    "left": 840,
                    "top": 200,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/dn.png"
                }, 958);
            }

            // Check East (X + 1)
            if (curX < 11 && grid[curY][curX + 1].x !== "x") {
                nav.button({
                    "type": "img",
                    "name": "bg_e",
                    "left": 0, "top": 0, "width": 1920, "height": 1080,
                    "image": "958_wander/bg_east.webp",
                }, 958);
            }

            // Check West (X - 1)
            if (curX > 0 && grid[curY][curX - 1].x !== "x") {
                nav.button({
                    "type": "img",
                    "name": "bg_w",
                    "left": 0, "top": 0, "width": 1920, "height": 1080,
                    "image": "958_wander/bg_west.webp",
                }, 958);
            }
            if (curY > 0 && grid[curY - 1][curX].x !== "x") {
                nav.button({
                    "type": "img",
                    "name": "bg_n",
                    "left": 0, "top": 0, "width": 1920, "height": 1080,
                    "image": "958_wander/bg_north.webp",
                }, 958);
            }
            room958.btnclick("displayDirection");
            break;
        case "displayDirection":
            if (curY > 0 && grid[curY - 1][curX].x !== "x") {
                nav.button({
                    "type": "btn",
                    "name": "north",
                    "title": "North",
                    "left": 840,
                    "top": 200,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/dn.png"
                }, 958);
            }
            // Check East (X + 1)
            if (curX < 11 && grid[curY][curX + 1].x !== "x") {
                nav.button({
                    "type": "btn",
                    "name": "east",
                    "title": "East",
                    "left": 1600,
                    "top": 460,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/de.png"
                }, 958);
            }

            // Check West (X - 1)
            if (curX > 0 && grid[curY][curX - 1].x !== "x") {
                nav.button({
                    "type": "btn",
                    "name": "west",
                    "title": "West",
                    "left": 300,
                    "top": 460,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/dw.png"
                }, 958);
            }

            if (curY < 11 && grid[curY + 1][curX].x !== "x") {
                nav.button({
                    "type": "btn",
                    "name": "south",
                    "title": "South",
                    "left": 840,
                    "top": 880,
                    "width": 225,
                    "height": 75,
                    "image": "475_fight/ds.png"
                }, 958);
            }
            break;
        case "north":
            g.map.y -= 1;
            char.room(958);
            break;
        case "south":
            g.map.y += 1;
            char.room(958);
            break;
        case "east":
            g.map.x += 1;
            char.room(958);
            break;
        case "west":
            g.map.x -= 1;
            char.room(958);
            break;
        case "endrape":
            char.room(958);
            break;
        case "displayMap":
            if (g.map.map && Object.keys(g.map.map).length > 0) {
                var i, j;
                var st = "";
                const r958 = 20;
                const h958 = 400;


                // Clear and initialize the container
                $('#room_left_map').html('<div class="resize" style="margin-top:' + h958 * g.ratio + 'px; "></div>');

                var style = 'style="width: ' + r958 * g.ratio + 'px; height: ' + r958 * g.ratio + 'px;" ';

                for (i = 0; i < g.map.map.length; i++) {
                    st = '<div class="resize" style="margin:0; padding:0; height: ' + r958 * g.ratio + 'px; margin-left: ' + 20 * g.ratio + 'px;" >';

                    for (j = 0; j < g.map.map[i].length; j++) {
                        // Determine tile class based on current player position vs map data
                        var tileClass = (i === g.map.y && j === g.map.x)
                            ? "map-tile-q"
                            : "map-tile-" + g.map.map[i][j].x;
                        //if (g.map.map[i][j].y === "a")
                        //    tileClass = "map-tile-test";
                        st += '<div class="map-box resize ' + tileClass + '" title="' + i + ', ' + j + '" ' + style + '></div>';
                    }

                    st += "</div>";
                    $('#room_left_map').append(st);
                }
            }
            break;
        case "octogonLose":
            nav.kill();
            nav.bg("958_wander/octogon2.webp");
            zcl.bjpov(-150, 500, .7, "body", false);
            chat(10, 958);
            break;
        case "octogonWin":
            nav.kill();
            nav.bg("958_wander/octogon.webp");
            sc.modLevel("cult", 25, 999);
            chat(8, 958);
            break;
        case "event_c2":
            nav.kill();
            zcl.pucker(500, 700, .7, "back", true);
            chat(21, 958);
            break;
        case "event_d2":
            g.internal = 4;
            nav.killbutton("event_d2");
            levels.swallowCum("m", "cult");
            nav.button({
                "type": "tongue",
                "name": "event_d3",
                "title": "Lick that clit",
                "left": 1065,
                "top": 505,
                "width": 78,
                "height": 78,
                "image": "958_wander/event_d3.webp"
            }, 958);
            chat(24, 958);
            break;
        case "event_d3":
            if (g.internal > 7) {
                nav.kill();
                levels.oral(3, "f", "!milkmaid");
                nav.bg("958_wander/event_d.webp");
                chat(25, 958);
            }
            else {
                nav.bg("958_wander/event_d" + g.internal + ".webp");
                g.internal++;
            }
            break;
        case "gwin":
            nav.kill();
            nav.bg("958_wander/event_h1.webp");
            chat(52, 958);
            break;
        default:
            break;
    }
};

room958.chatcatch = function (callback) {
    switch (callback) {
        case "octogon2":
        case "event_c1":
        case "event_d1":
        case "event_e1":
        case "event_e3":
        case "event_f1":
        case "event_f4":
            nav.bg("958_wander/" + callback + ".webp");
            break;
        case "octogon6":
        case "event_h4":
            nav.kill();
            nav.bg("958_wander/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "event_h6":
            nav.bg("958_wander/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "octogon3":
            nav.kill();
            cl.nude();
            nav.bg("958_wander/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "givepanties":
            cl.c.panties = null;
            g.pass.compete = true;
            cl.display();
            nav.bg("958_wander/panties_complete.webp");
            sc.modLevel("cult", 30, 10);
            zcl.displayMain(0, 300, .2, "clothes", true);
            break;
        case "pantiesReset":
            nav.kill();
            nav.bg("958_wander/panties_complete.webp");
            nav.button({
                "type": "btn",
                "name": "north",
                "title": "North",
                "left": 840,
                "top": 200,
                "width": 225,
                "height": 75,
                "image": "475_fight/dn.png"
            }, 958);
            break;
        case "drawNorth":
            nav.kill();
            nav.button({
                "type": "btn",
                "name": "north",
                "title": "North",
                "left": 840,
                "top": 200,
                "width": 225,
                "height": 75,
                "image": "475_fight/dn.png"
            }, 958);
            break;
        case "RunAway":
            gv.mod("energy", -30);
            g.map.y = 5;
            g.map.x = 10;
            char.room(958);
            break;
        case "octogon1":
            nav.kill();
            nav.bg("958_wander/octogon1.webp");
            zcl.bellydown(0, 0, 1.2, "back", false)
            break;
        case "octogonFight":
            nav.kill();
            nav.bg("958_wander/octogonFight.webp");
            quickFight.init(15, "Killer Dogs", "octogonWin", "octogonLose", "octogonLose", 958);
            break;
        case "octogon2a":
            zcl.bjpov(-150, 500, .7, "body", false);
            break;
        case "octogon5":
            nav.bg("958_wander/octogon5.webp");
            zcl.double(300, 700, .5, "open", false);
            nav.button({
                "type": "img",
                "name": "img",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "958_wander/octogon5fg.webp"
            }, 958);
            nav.button({
                "type": "img",
                "name": "plap",
                "left": 1400,
                "top": 450,
                "width": 300,
                "height": 300,
                "image": "1001_rand/plap.gif"
            }, 958);
            nav.button({
                "type": "img",
                "name": "plap",
                "left": 350,
                "top": 300,
                "width": 300,
                "height": 300,
                "image": "1001_rand/plap.gif"
            }, 958);
            break;
        case "octogon6":
            nav.kill();
            nav.bg("958_wander/" + callback + "_" + gender.pronoun("f") + ".webp");
            levels.oral(4, "m", "!dog", true, "dog");
            levels.anal(4, true, "m", true, "!dog", "dog");
            break;
        case "octogon7":
            nav.bg("958_wander/octogon4.webp");
            zcl.bellydown(500, 700, .4, "back", true)
            break;
        case "south":
            nav.button({
                "type": "btn",
                "name": "south",
                "title": "South",
                "left": 840,
                "top": 880,
                "width": 225,
                "height": 75,
                "image": "475_fight/ds.png"
            }, 958);
            break;
        case "event_c2":
            nav.button({
                "type": "tongue",
                "name": "event_c2",
                "title": "Slurp that piss up",
                "left": 644,
                "top": 731,
                "width": 775,
                "height": 255,
                "image": "958_wander/event_c2.webp"
            }, 958);
            break;
        case "event_c3":
            daily.set("958_slurppiss");
            levels.piss(true, false, false, "f", "!milkmaid");
            nav.bg("958_wander/event_c3.webp");
            room958.btnclick("displayDirection");
            break;
        case "event_d2":
            nav.bg("958_wander/event_d2.webp");
            nav.button({
                "type": "tongue",
                "name": "event_d2",
                "title": "Eat her cream pie",
                "left": 1081,
                "top": 396,
                "width": 75,
                "height": 395,
                "image": "958_wander/event_d2cum.webp"
            }, 958);
            break;
        case "event_e2":
            nav.bg("958_wander/event_e2.webp");
            if (gender.pronoun("m") === "m")
                zcl.pucker(250, 300, .8, "back", false)
            else
                zcl.pucker(400, 250, .8, "back", false);
            break;
        case "event_e4":
            nav.kill();
            nav.bg("958_wander/event_e4.webp");
            zcl.bjpov(-180, 400, .7, "black closed", false, "b");
            break;
        case "event_e5_s":
            zcl.bjpov(-180, 400, .7, "black swallow cum", false, "b");
            levels.oral(4, "m", "cult", true);
            break;
        case "event_e5_f":
            zcl.bjpov(-180, 400, .7, "black facial cum", false, "b");
            levels.oral(4, "m", "cult", false);
            break;
        case "event_f2":
            zcl.squat(560, 670, .4, "", true);
            break;
        case "event_f3":
            zcl.assup(870, 250, .7, "", true);
            break;
        case "event_f5":
            nav.bg("958_wander/event_e4.webp");
            zcl.legsup(-180, 700, .6, "", false, "w");
            break;
        case "event_f6":
            zcl.legsup(-180, 700, .6, "fuck eyes", false, "w");
            break;
        case "event_f7":
            zcl.legsup(-180, 700, .6, "fuck open sg0", false, "w");
            break;
        case "event_f8":
            levels.anal(4, true, "m", true, "!boxes");
            zcl.legsup(-180, 700, .6, "creampie eyes sg1", false, "w");
            break;
        case "event_f9":
            zcl.face(0, 300, 1, "suck", "w", false);
            break;
        case "event_f10":
            zcl.face(0, 300, 1, "up", "w", false);
            break;
        case "event_g1":
            quickFight.init(16, sc.n("g"), "gwin", "glose", "glose", 958);
            break;
        case "event_h2":
            nav.kill();
            nav.bg("958_wander/event_h2_" + gender.pronoun("f") + ".webp");
            nav.button({
                "type": "img",
                "name": "event_h2",
                "left": 1300,
                "top": 200,
                "width": 300,
                "height": 300,
                "image": "1001_rand/plapslow.gif"
            }, 958);
            break;
        case "event_h3":
            nav.modbutton("event_h2", "1001_rand/plapfast.gif");
            if (gender.canUseCock()) {
                nav.bg("958_wander/event_h3_" + gender.pronoun("f") + ".webp");
                chat(54, 958);
            }
            else {
                chat(57, 958);
            }
            break;
        case "event_h5":
            nav.kill();
            nav.bg("958_wander/" + callback + ".webp");
            if (sc.getMission("g", "mom").notStarted) {
                sc.startMission("g", "mom");
                sc.completeMissionTask("g", "mom", 0);
            }
            break;
        case "displayDirection":
            room958.btnclick("displayDirection");
            break;
        case "reset":
            char.room(958);
            break;
        default:
            break;
    }
};

room958.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "jeffery",
            text: "Do you have panties for me!?!?!",
            button: [
                { chatID: 1, text: "I do!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "jeffery",
            text: "Gimmie gimmie gimmie! ",
            button: [
                { chatID: 2, text: "[Give the pervert your panties]", callback: "givepanties" }
            ]
        },
        {
            chatID: 2,
            speaker: "jeffery",
            text: "Oh yummy yummy yummy!!!! I can smell the musk from your balls and stink from your pink! ",
            button: [
                { chatID: -1, text: "[I think I can head back...?]", callback: "pantiesReset" }
            ]
        },
        {
            chatID: 3,
            speaker: "jeffery",
            text: "Get out you stupid sissy. I'm waiting on my panty delivery!  ",
            button: [
                { chatID: -1, text: "Sorry, wrong room", callback: "drawNorth" }
            ]
        },
        {
            chatID: 4,
            speaker: "cult",
            text: "Well, well, well. If a stray dog hasn't gotten loose. We've got another stray for you " +
                "to play with. Hehehe",
            button: [
                { chatID: -1, text: "[RUN AWAY DUMBASS!]", callback: "RunAway" }
            ]
        },
        {
            chatID: 5,
            speaker: "cult",
            text: "Hehehe, the stray has returned. We knew you'd be back. Boys it's time for a real " +
                "show! Throw " + gender.pronoun("him") + " in the ring! ",
            button: [
                { chatID: 6, text: "*gulp*", callback: "octogon1" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "OOooff!! That really knocked the wind out of me.",
            button: [
                { chatID: 7, text: "...", callback: "octogon2" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "Uh oh. I'm in danger",
            button: [
                { chatID: -1, text: "[Get on your feet and fight]", callback: "octogonFight" },
                { chatID: 10, text: "[Adopt the mating posture]", callback: "octogon2a" },
            ]
        },
        {
            chatID: 8,
            speaker: "cult",
            text: "Wow. No one has ever won against the dogs before. You have our respect. ",
            button: [
                { chatID: -1, text: "Oh thanks", callback: "reset" },
            ]
        },
        {
            chatID: 9,
            speaker: "cult",
            text: "We've had our fun with you already today. Leave us.",
            button: [
                { chatID: -1, text: "Oh ok", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "cult",
            text: "Hahaha! The slightest sign of danger and that sissy opens up " + gender.pronoun("his") +
                " asshole!!! What a fuckin' pansey! At least we get a good show! ",
            button: [
                { chatID: 11, text: "*whimper*", callback: "octogon3" },
            ]
        },
        {
            chatID: 11,
            speaker: "cult",
            text: "This is going to be good! I do love a double stuffed doggy cock slut! ",
            button: [
                { chatID: 12, text: "Oouch!!! He's biting my butt!!!", callback: "octogon5" },
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "*moaning while getting stuffed by two doggy dicks* ",
            button: [
                { chatID: 13, text: "*slurp*", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "cult",
            text: "That dirty bitch is actually enjoying it! What a filthy cunt!",
            button: [
                { chatID: 14, text: "Oh fuck! That knot is pressing so hard on my P-SPOT!! I'm cumming so hard! ", callback: "octogon6" },
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "MMmmmmMmmm. That knot really hits the spot!",
            button: [
                { chatID: 15, text: "*moan* *suck*", callback: "octogon7" },
            ]
        },
        {
            chatID: 15,
            speaker: "cult",
            text: "Best show today! That is the nastiest bitch I ever saw! ",
            button: [
                { chatID: -1, text: "*swallow your mouthful of cum*", callback: "south" },
            ]
        },
        {
            chatID: 16,
            speaker: "!missx",
            text: "*ugh* No matter where we go I can't get any privacy to fuck my slave. Go. Leave us " +
                "worm! ",
            button: [
                { chatID: -1, text: "Oh, sorry. ", callback: "displayDirection" },
            ]
        },
        {
            chatID: 17,
            speaker: "!missx",
            text: "*ugh* You again! I said leave us so I can slide my traffic cone up her ass. Now go! ",
            button: [
                { chatID: -1, text: "Oh, sorry. ", callback: "displayDirection" },
            ]
        },
        {
            chatID: 18,
            speaker: "!milkmaid",
            text: "Oh! Oh... You're just a sissy. I thought I got caught by one of those bastads! I hate this " +
                "place so fucking much! I just piss on the floor to show them how much I hate it! ",
            button: [
                { chatID: 19, text: "Oh. Hahaha! That's awesome! ", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!milkmaid",
            text: "I know right! You're awesome too, you weird little sissy! Anyway I got to go back and take " +
                "dick from these asshole men. Keep that butthole lubed! ",
            button: [
                { chatID: 20, text: "I will! ", callback: "event_c1" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "I'm glad not everyone likes it here... ",
            button: [
                { chatID: -1, text: "Continue wandering", callback: "displayDirection" },
                { chatID: -1, text: "No one's around. Should I slurp her piss off the floor?", callback: "event_c2" },
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "*ssslllluuurrrppp* It's so warm and fruity. She must have had pineapple. MMmmm " +
                "mmm mmMMmmm!!!",
            button: [
                { chatID: -1, text: "...", callback: "event_c3" },
            ]
        },
        {
            chatID: 22,
            speaker: "!milkmaid",
            text: "Oh hi! You're cute. I don't suppose you could help me out?",
            button: [
                { chatID: 23, text: "Maybe. How so?", callback: "event_d1" },
            ]
        },
        {
            chatID: 23,
            speaker: "!milkmaid",
            text: "I just got fucked by some guy with the smallest weiner and I'm still so horny! Can you " +
                "lick my clit till I cum? I hope you don't it's a little creamy. What that boy lacked in " +
                "penis he made up for in balls! ",
            button: [
                { chatID: -1, text: "I'll be your creampie pussy eater!", callback: "event_d2" },
                { chatID: -1, text: "Sorry. I already ate today. ", callback: "displayDirection" },
            ]
        },
        {
            chatID: 24,
            speaker: "!milkmaid",
            text: "Your tongue is amazing! I've never had someone eat out the inside of my twat with " +
                "that much enthusiasm! Now lick that clit. I need to cum so bad!!",
            button: [
                { chatID: -1, text: "[Lick that horny clit]", callback: "" },
                { chatID: -1, text: "[Gulp down her cunt cum and run away!]", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "!milkmaid",
            text: "Fuck yeah! I love how you sissies are just pleasure machines for us girls. Those " +
                "boys don't have any idea how to give a girl an orgasm! ",
            button: [
                { chatID: -1, text: "You're welcome! ", callback: "displayDirection" },
            ]
        },
        {
            chatID: 26,
            speaker: "me",
            text: "I just want to eat your cunt cum! Later bitch! ",
            button: [
                { chatID: -1, text: "[Run away]", callback: "RunAway" },
            ]
        },
        {
            chatID: 27,
            speaker: "!milkmaid",
            text: "Oh honey, look. It's one of those sissies! ",
            button: [
                { chatID: 28, text: "...", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "cult",
            text: "Probably just a failure like the rest. " + gender.pronoun("she") +
                "'s cute, but not as hot as you baby. I want to bend you over right here. Let the sissy watch. ",
            button: [
                { chatID: 29, text: "...", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "!milkmaid",
            text: "*ugh* I told you I'm not in the mood. Keep that dick in your robe. ",
            button: [
                { chatID: 30, text: "...", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "cult",
            text: "You're never in the mood. I bet this sissy is always in the mood. I bet I could just whip " +
                "my anaconda out and this sissy will drop to " + gender.pronoun("her") + " knees and start " +
                "suckin' it like it's the last dick on earth. ",
            button: [
                { chatID: 31, text: "...", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "!milkmaid",
            text: "That kind of talk won't get me in the mood to ever have sex with you again! I hope you like " +
                "jackin' off 'cause you're never going to get that worm near my vag tonight!",
            button: [
                { chatID: 32, text: "...", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "cult",
            text: "That's cool. Imma get this sissy here to suck dis dick. Go on sissy. Show my " +
                "girl how it's done.",
            button: [
                { chatID: 33, text: "...", callback: "event_e1" },
            ]
        },
        {
            chatID: 33,
            speaker: "!milkmaid",
            text: "Don't you fuckin' dare!",
            button: [
                { chatID: 34, text: "[Suck his dick in front of his girlfriend]", callback: "event_e2" },
                { chatID: -1, text: "You two are too much! I'm going to go. ", callback: "displayDirection" },
            ]
        },
        {
            chatID: 34,
            speaker: "cult",
            text: "Wha? I'm helping " + gender.pronoun("her") + " out! Sissies just need cock!" +
                "Like all the time. This bitch knows what's up! ",
            button: [
                { chatID: 35, text: "[Work his cock down your throat]", callback: "event_e3" },
            ]
        },
        {
            chatID: 35,
            speaker: "!milkmaid",
            text: "You can keep your sissy fuck face! I'm going home! Don't think you're getting sex " +
                "tonight! ",
            button: [
                { chatID: 36, text: "[Ram his mushroom tip into your tonsils]", callback: "event_e4" },
            ]
        },
        {
            chatID: 36,
            speaker: "cult",
            text: "*pssst* She'll get over it. Fuck you can suck a dick! Shit! I can't hold it back " +
                "any longer! ",
            button: [
                { chatID: 37, text: "[Suck his cum out like a straw]", callback: "event_e5_s" },
                { chatID: 37, text: "[Stroke his cock and give yourself a facial]", callback: "event_e5_f" },
            ]
        },
        {
            chatID: 37,
            speaker: "cult",
            text: "Fuck that was good! If you get out of here you need to open a school on how to give " +
                "head! I'll have my girl come by so she can learn from the best! ",
            button: [
                { chatID: -1, text: "MMhhhMMmm! I do love the cock! ", callback: "displayDirection" },
            ]
        },
        {
            chatID: 38,
            speaker: "!boxes",
            text: "Oh hi. I guess you're just wandering around the dungeon naked today, huh? ",
            button: [
                { chatID: 39, text: "Well, they did take all my clothes. ", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "!boxes",
            text: "Haha! Awesome! Since your naked anyways, what do you say to a having a little fun? ",
            button: [
                { chatID: 40, text: "I sure do!", callback: "event_f1" },
                { chatID: -1, text: "Some other time.", callback: "displayDirection" },
            ]
        },
        {
            chatID: 40,
            speaker: "!boxes",
            text: "Well what do you think? ",
            button: [
                { chatID: 41, text: "I think I love your dick!", callback: "event_f2" },
                { chatID: 41, text: "I think I'm about to be swept off my feet!", callback: "event_f2" },
                { chatID: 41, text: "I think I'm in love", callback: "event_f2" },
            ]
        },
        {
            chatID: 41,
            speaker: "!boxes",
            text: "You get right down to it don't you! You're really cute you know. Bend over. I want " +
                "to see that cute li'l butt of yours. Love your butt! ",
            button: [
                { chatID: 42, text: "[Point your asshole at him]", callback: "event_f3" },
            ]
        },
        {
            chatID: 42,
            speaker: "!boxes",
            text: "That's what I'm talking about! Make it wink. Wink at me with your butthole! ",
            button: [
                { chatID: 43, text: "[Wink at him with your butthole]", callback: "event_f4" },
            ]
        },
        {
            chatID: 43,
            speaker: "!boxes",
            text: "That is so hot! It's like it's asking to get penetrated. Lay on you back. I want to " +
                "look into your eyes when we make love. ",
            button: [
                { chatID: 44, text: "Awww. You're really sweet. Ok!", callback: "event_f5" },
            ]
        },
        {
            chatID: 44,
            speaker: "!boxes",
            text: "You're so cute... ",
            button: [
                { chatID: 45, text: "*swoon*", callback: "event_f6" },
            ]
        },
        {
            chatID: 45,
            speaker: "!boxes",
            text: "...And so tight. So hot. ",
            button: [
                { chatID: 46, text: "*moan*", callback: "event_f7" },
            ]
        },
        {
            chatID: 46,
            speaker: "!boxes",
            text: "Oh! You just came from your butt! Hot! ",
            button: [
                { chatID: 47, text: "*screaming orgasm*", callback: "event_f8" },
            ]
        },
        {
            chatID: 47,
            speaker: "!boxes",
            text: "Oh god! So good! ",
            button: [
                { chatID: 48, text: "[Clean his dirty cum covered cock up with your mouth]", callback: "event_f9" },
                { chatID: -1, text: "[Thank him and be on your way]", callback: "displayDirection" },
            ]
        },
        {
            chatID: 48,
            speaker: "!boxes",
            text: "Oh and you go right to cleaning me up while you're dripping. Beautiful! ",
            button: [
                { chatID: 49, text: "*mmmMmm *slurp* *suck*", callback: "event_f10" },
            ]
        },
        {
            chatID: 49,
            speaker: "!boxes",
            text: "Such a good " + gender.pronoun("girl") + ". I would marry you if you weren't stuck in " +
                "here. ",
            button: [
                { chatID: -1, text: "I think I'm in love.", callback: "displayDirection" },
            ]
        },
        {
            chatID: 50,
            speaker: "!Milkmaid",
            text: "Haha. You caught us. Just takin' my furry boyfriend for a little romp in the forest. " +
                "We like to play the big bad bear! Hehe. Can't wait to see you bring about the coming " +
                "of Azrael! So excited! ",
            button: [
                { chatID: -1, text: "Me too!", callback: "displayDirection" },
            ]
        },
        {
            chatID: 51,
            speaker: "g",
            text: "So you've finally decided to join us! Let's see if you can still kick some ass! " +
                "Tell you what. We do a quick little fight here. Winner fucks the loser. You in? ",
            button: [
                { chatID: -1, text: "Fuck yeah! ", callback: "event_g1" },
                { chatID: -1, text: "No. You're way to strong for me. I'll pass ", callback: "displayDirection" },
            ]
        },
        {
            chatID: 52,
            speaker: "g",
            text: "*arg* I lost! I knew you would compition! Well, I guess you get to fuck " +
                "me right up my pussy! I deserve it! ",
            button: [
                { chatID: 53, text: "Oh yeah! [Slide your penis inside her vagina]", callback: "event_h2" },
            ]
        },
        {
            chatID: 53,
            speaker: "g",
            text: "I'm not going to break! Fuck me into the ground!!! ",
            button: [
                { chatID: -1, text: "[Fuck her hard and fast!]", callback: "event_h3" },
            ]
        },
        {
            chatID: 54,
            speaker: "g",
            text: "That's the spot! Don't stop! Don't stop!!! Don't stop!!!",
            button: [
                { chatID: 55, text: "[keep up the pace!]", callback: "event_h4" },
            ]
        },
        {
            chatID: 55,
            speaker: "g",
            text: "Oh fuck! Oh fuck! Oh fuck! Fill me up!!!",
            button: [
                { chatID: 56, text: "AAAAaaaaa!!", callback: "event_h5" },
            ]
        },
        {
            chatID: 56,
            speaker: "g",
            text: "You know, you're the only man I let cum inside me. There's just something about you that " +
                "I find appealing. I just jack off the regular cultist. Their sperm isn't worth isn't worthy of " +
                "my uterus.  ",
            button: [
                { chatID: -1, text: "Oh. Thanks!", callback: "displayDirection" },
            ]
        },
        {
            chatID: 57,
            speaker: "g",
            text: "Oh. I forgot how tiny your manhood is. Just hurry up and finish. This is embarrasing " +
                "for the both of us. ",
            button: [
                { chatID: 58, text: "[Fuck her with everything you have!]", callback: "event_h6" },
            ]
        },
        {
            chatID: 58,
            speaker: "g",
            text: "zzzZZzzz  *snort* zzzZZZzzz ",
            button: [
                { chatID: 59, text: "AaaAAAAaa I'M CUMMING!!!!!", callback: "event_h5" },
            ]
        },
        {
            chatID: 59,
            speaker: "g",
            text: "You know, you're the only man I let cum inside me. Your power is amazing, but we're going " +
                "to have to do something about that lack of penis. Maybe a penis sleeve... " +
                "You know I just jack off the regular cultist. Their sperm isn't worth isn't worthy of " +
                "my uterus. ",
            button: [
                { chatID: -1, text: "Oh. Thanks?", callback: "displayDirection" },
            ]
        },
    ]
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};