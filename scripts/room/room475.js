var room475 = {};
room475.main = function () {
    if (m.fmap === null) {
        m.createFmap();
    }
    $('#room_footer').hide();
    $("#room-inv").show();
    $("#room-menu").show();

    var thisUsed = m.fmap[g.map.row][g.map.col].used;
    var mainLoop = true;

    if (g.get("energy") === 0) {
        g.map = "";
        char.room(450);
        mainLoop = false;
    }
    else if (g.map.row === 79 && g.map.col === 10) {
        g.map = "";
        char.room(450);
        mainLoop = false;
    }
    else if (thisUsed === "g") {
        if (!g.get("gold0")) {
            mainLoop = false;
            g.setflag("gold0");
            nav.bg("475_fight/clearing.jpg", "475_fight/clearingNight.jpg");
            nav.button({
                "type": "btn",
                "name": "treasure",
                "left": 657,
                "top": 566,
                "width": 501,
                "height": 437,
                "title": "Check for Treasure",
                "image": "475_fight/treasure0.png"
            }, 475);
        }
    }
    else if (thisUsed === "i") {
        mainLoop = false;
        nav.bg("475_fight/cottage_day.jpg", "475_fight/cottage_night.jpg");
        nav.button({
            "type": "btn",
            "name": "cottage",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "title": "Cottage",
            "image": "475_fight/cottage_day.png",
            "night": "475_fight/cottage_night.png"
        }, 475);
        chat(1, 475);
    }
    if (mainLoop) {

        m.drawBackground(g.map.row, g.map.col);
        m.drawMap(g.map.row, g.map.col);

        m.fmap[g.map.row][g.map.col].visited = true;
        if (g.map.row < 79)
            m.fmap[g.map.row + 1][g.map.col].visited = true;
        if (g.map.row > 0)
            m.fmap[g.map.row - 1][g.map.col].visited = true;
        if (g.map.col < 19)
            m.fmap[g.map.row][g.map.col + 1].visited = true;
        if (g.map.col > 0)
            m.fmap[g.map.row][g.map.col - 1].visited = true;
        g.map.lastFight++;

        if (g.map.lastFight > 3) { //(((Math.floor(Math.random() * 4) == 0) && (g.map.lastFight > 4)) || (g.map.lastFight > 12))
            if ((Math.floor(Math.random() * 4) === 0) || g.map.lastFight > 10) {
                var te = Math.floor(Math.random() * 3);
                if (g.get("fantasyCreatures")) {
                    if (g.isNight())
                        te = Math.floor(Math.random() * 5);
                    else
                        te = Math.floor(Math.random() * 4);
                }
                var thisEnemy = null;
                switch (te) {
                    case 0:
                        thisEnemy = "ag";
                        break;
                    case 1:
                        thisEnemy = "al";
                        break;
                    case 2:
                        thisEnemy = "af";
                        break;
                    case 3:
                        thisEnemy = "m";
                        break;
                    default:
                        thisEnemy = "aw";
                        break;
                }
                char.changeMenu("hide", true, true);
                g.pass = { enemy0: thisEnemy, enemy1: null, enemy2: null, bg: "forest", roomID: 475 };
                g.map.lastFight = 0;
                char.room(227);
            }
        }
    }
};

room475.btnclick = function (name) {
    switch (name) {
        case "north":
            g.map.row -= 1;
            m.updateVisit();
            char.room(475);
            break;
        case "south":
            g.map.row += 1;
            m.updateVisit();
            char.room(475);
            break;
        case "east":
            g.map.col += 1;
            m.updateVisit();
            char.room(475);
            break;
        case "west":
            g.map.col -= 1;
            m.updateVisit();
            char.room(475);
            break;
        case "cottage":

            break;
        case "treasure":
            var tsuc = false;
            if (m.fmap[g.map.row][g.map.col].used === "g") {
                tsuc = true;
            }

            if (tsuc) {
                nav.killbutton("treasure");
                nav.button({
                    "type": "btn",
                    "name": "treasure",
                    "left": 657,
                    "top": 566,
                    "width": 501,
                    "height": 437,
                    "title": "Weee!",
                    "image": "475_fight/treasure2.png"
                }, 475);
                chat(900, 475);
            }
            break;
        case "exit":
            g.pass = null;
            m.updateVisit();
            char.map();
            char.room(450);
            break;
        default:
            break;
    }
    m.drawMap(g.map.row, g.map.col);
};

room475.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            m.updateVisit();
            char.room(475);
            break;
        case "resetcot":
            g.map.row -= 1;
            m.updateVisit();
            char.room(475);
            break;
        default:
            break;
    }
};

room475.chat = function (chatID) {
    if (chatID === 900) {
        var gold = Math.floor((Math.random() * 50)) + 50;
        var cumJar = 0;
        g.mod("money", gold);

        if (m.fmap[g.map.row][g.map.col].used === 'g') {
            cumJar = Math.floor(Math.random() * 3) + 1;
            inv.addMulti("cumjar", cumJar);
        }

        return {
            chatID: 0,
            speaker: "thinking",
            text: "Sweet I received $" + gold.toString() + (cumJar > 0 ? " and " + cumJar + " jar " + (cumJar > 1 ? "s" : "") + " of cum!" : "!"),
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "Damn! I need to find a way into this door. [Work in progress]",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: " [Work in progress]",
                button: [
                    { chatID: -1, text: "...", callback: "resetcot" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
