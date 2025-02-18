var room475 = {};
room475.main = function () {
    if (m.fmap == "undefined")
        m.fmap = null;
    if (m.fmap === null) {
        m.createFmap();
    }
    $('#room_footer').hide();
    $("#room-inv").show();
    $("#room-menu").show();

    var thisUsed = m.fmap[g.map.row][g.map.col].used;
    var mainLoop = true;

    if (gv.get("energy") === 0) {
        g.map = "";
        char.room(450);
        mainLoop = false;
    }
    else if (g.map.row === 79 && g.map.col === 10) {
        g.map = "";
        char.room(450);
        mainLoop = false;
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

        //if (((Math.floor(Math.random() * 8) === 0) && (g.map.lastFight > 4)) || (g.map.lastFight > 12)) {
        //    if (gv.get("cat") === -1 && (Math.floor(Math.random() * 4) === 0)) {
        //        nav.killall();
        //        nav.bg("475_fight/cat.jpg");
        //        g.map.lastFight = 0;
        //        chat(3, 475);
        //    }
        //    else {
        //        var te = Math.floor(Math.random() * 3);
        //        if (gv.get("fantasyCreatures")) {
        //            if (g.isNight())
        //                te = Math.floor(Math.random() * 9); //overload the warewolf at night
        //            else
        //                te = Math.floor(Math.random() * 4);
        //        }
        //        var thisEnemy = null;
        //        switch (te) {
        //            case 0:
        //                thisEnemy = "ag";
        //                break;
        //            case 1:
        //                thisEnemy = "al";
        //                break;
        //            case 2:
        //                thisEnemy = "af";
        //                break;
        //            case 3:
        //                thisEnemy = "m";
        //                break;
        //            default:
        //                thisEnemy = "aw";
        //                break;
        //        }
        //        char.changeMenu("hide", true, true);
        //        g.pass = { enemy0: thisEnemy, enemy1: null, enemy2: null, bg: "forest", roomID: 475 };
        //        g.map.lastFight = 0;
        //        char.room(227);
        //    }
        //}
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
        case "visit":
            if (m.fmap[g.map.row][g.map.col].used === "i") { //forest queen
                char.room(477);
            }
            else if (m.fmap[g.map.row][g.map.col].used === "h") { //forest queen
                char.room(476);
            }
            else if (m.fmap[g.map.row][g.map.col].used === "g") { //forest queen
                trap.init("treasureAzrael", "forest", 475, "reload");
            }
            else if (m.fmap[g.map.row][g.map.col].used === "c") {
                char.room(483);
            }
            break;
        case "reload":
            char.room(475);
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
        case "catx":
            gv.set("cat", 0);
            nav.bg("475_fight/catx.jpg", "475_fight/catxnight.jpg");
            break;
        case "petcat":
            gv.set("cat", 1);
            nav.bg("475_fight/catpet.jpg", "475_fight/catpetnight.jpg");
            break;
        default:
            break;
    }
};

room475.chat = function (chatID) {
    if (chatID === 900) {
        var gold = Math.floor((Math.random() * 50)) + 50;
        var cumJar = 0;
        gv.mod("money", gold);

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
                text: "Everyone seems to be asleep. ",
                button: [
                    { chatID: -1, text: "...", callback: "resetcot" }
                ]
            },
            {
                chatID: 2,
                speaker: "queen",
                text: "This is my private cottage. You need to leave immediately before I bring my wrath upon you! ",
                button: [
                    { chatID: -1, text: "Oh, sure. ", callback: "resetcot" }
                ]
            },
            {
                chatID: 3,
                speaker: "me",
                text: "Oh. A cat. Hey little fella, what are you doing out here? ",
                button: [
                    { chatID: 5, text: "Pet the cat. ", callback: "petcat" },
                    { chatID: 4, text: "Shoo it away", callback: "catx" },
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: "The forest is not place for a cat! Shoooo ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 5,
                speaker: "me",
                text: "Hey little buddy, who's a nice kitty. Be safe out there in the forest. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
