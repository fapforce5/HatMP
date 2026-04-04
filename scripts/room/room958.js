//Room name
var room958 = {};
room958.main = function () {
    if (g.map === null) {
        g.map = {
            x: 0,
            y: 6,
            counter: 0,
            lastRape: 0,
            map: [
                [{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                [{ x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }],
                [{ x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                [{ x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "t" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }],
                [{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "p" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                [{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                [{ x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "e" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                [{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                [{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }],
                [{ x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }],
                [{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }],
                [{ x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }, { x: "u", y: "_" }, { x: "x", y: "_" }, { x: "x", y: "_" }]
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
    switch (name) {
        case "displayBackground":
            var grid = g.map.map;
            var curY = g.map.y;
            var curX = g.map.x;
            nav.bg("958_wander/bg.webp"); 
            // Base background (always displayed)

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

                    st += '<div class="map-box resize ' + tileClass + '" title="' + i + ', ' + j + '" ' + style + '></div>';
                }

                st += "</div>";
                $('#room_left_map').append(st);
            }
            break;
        default:
            break;
    }
};

room958.chatcatch = function (callback) {
    switch (callback) {
        case "givepanties":
            cl.c.panties = null;
            g.pass.compete = true;
            cl.display();
            nav.bg("958_wander/panties_complete.webp");
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};