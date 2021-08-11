var room475 = {};
room475.main = function () {
    if (m.fmap === null) {
        m.createFmap();
    }
    $('#room_footer').hide();

    var thisUsed = m.fmap[g.internal.row][g.internal.col].used;
    var mainLoop = true;

    if (g.internal.row === 79 && g.internal.col === 10) {
        g.internal = "";
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

    if (mainLoop) {

        //if (g.pass === "combat") {
        //    g.internal.count += 1;
        //    g.internal.lastFight += 1;
        //}
        //else {
        //    g.pass = "combat";

        //}
        //if (false) //(((Math.floor(Math.random() * 4) == 0) && (g.internal.lastFight > 4)) || (g.internal.lastFight > 12))
        //    char.room(476);
        //else {
        //    m.fmap[g.internal.row][g.internal.col].visited = true;
        //    //room475.buildIcons("nav");
        //}


        m.drawBackground(g.internal.row, g.internal.col);
        m.drawMap(g.internal.row, g.internal.col);

        m.fmap[g.internal.row][g.internal.col].visited = true;
        if (g.internal.row < 79)
            m.fmap[g.internal.row + 1][g.internal.col].visited = true;
        if (g.internal.row > 0)
            m.fmap[g.internal.row - 1][g.internal.col].visited = true;
        if (g.internal.col < 19)
            m.fmap[g.internal.row][g.internal.col + 1].visited = true;
        if (g.internal.col > 0)
            m.fmap[g.internal.row][g.internal.col - 1].visited = true;
    }
};

room475.btnclick = function (name) {
    switch (name) {
        case "north":
            g.internal.row -= 1;
            m.updateVisit();
            char.room(475);
            break;
        case "south":
            g.internal.row += 1;
            m.updateVisit();
            char.room(475);
            break;
        case "east":
            g.internal.col += 1;
            m.updateVisit();
            char.room(475);
            break;
        case "west":
            g.internal.col -= 1;
            m.updateVisit();
            char.room(475);
            break;
        case "treasure":
            var tsuc = false;
            if (m.fmap[g.internal.row][g.internal.col].used === "g") {
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
    m.drawMap(g.internal.row, g.internal.col);
};

room475.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
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

        if (m.fmap[g.internal.row][g.internal.col].used === 'g') {
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
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
