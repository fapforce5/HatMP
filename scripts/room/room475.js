var room475 = {};
room475.main = function () {
    $('#room_footer').hide();
   

    if (g.pass === "combat") {
        g.internal.count += 1;
        g.internal.lastFight += 1;
    }
    else {
        g.pass = "combat";
        g.internal = { count: 0, char: "fightman", pose: "pose", level: 0, hitPoints: 100, lastFight: 0, row: 1, col: 9 };
    }
    if (false) //(((Math.floor(Math.random() * 4) == 0) && (g.internal.lastFight > 4)) || (g.internal.lastFight > 12))
        char.room(476);
    else {
        m.fmap[g.internal.row][g.internal.col].visited = m.fmap[g.internal.row][g.internal.col].used;
        room475.buildIcons("nav");
    }
};

room475.btnclick = function (name) {
    switch (name) {
        case "north":
            g.internal.row += 1;
            char.room(475);
            break;
        case "south":
            g.internal.row -= 1;
            char.room(475);
            break;
        case "east":
            g.internal.col += 1;
            char.room(475);
            break;
        case "west":
            g.internal.col -= 1;
            char.room(475);
            break;
        case "exit":
            g.pass = null;
            char.room(450);
            break;
        default:
            break;
    }
};

room475.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room475.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "fightman",
            text: "Run away girly man!!!",
            button: [
                { chatID: -1, text: "Run Away", callback: "runaway" }
            ]
        },
        {
            chatID: 1,
            speaker: "fightgirl",
            text: "You may run, but I'll find you!",
            button: [
                { chatID: -1, text: "Run Away", callback: "runaway" }
            ]
        },
        {
            chatID: 2,
            speaker: "fighttrans",
            text: "Come back, my massive cock yearns for you...",
            button: [
                { chatID: -1, text: "Run Away", callback: "runaway" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

room475.buildIcons = function (btype) {
    var btnList = new Array();

    if (btype === "nav") {
        var north, south, east, west;
        north = south = east = west = true;

        if ((m.fmap.length - 1) === g.internal.row)
            north = false;
        else if (m.fmap[g.internal.row + 1][g.internal.col].used === 'x') {
            north = false;
            m.fmap[g.internal.row + 1][g.internal.col].visited = 'x';
        }

        if ((m.fmap[g.internal.row].length - 1) === g.internal.col)
            east = false;
        else if (m.fmap[g.internal.row][g.internal.col + 1].used === 'x') {
            east = false;
            m.fmap[g.internal.row][g.internal.col + 1].visited = 'x';
        }


        if (g.internal.row < 1)
            south = false
        else if (m.fmap[g.internal.row - 1][g.internal.col].used === 'x') {
            south = false;
            m.fmap[g.internal.row - 1][g.internal.col].visited = 'x';
        }

        if (g.internal.col < 1)
            west = false;
        else if (m.fmap[g.internal.row][g.internal.col - 1].used === 'x') {
            west = false;
            m.fmap[g.internal.row][g.internal.col - 1].visited = 'x';
        }

        if (north)
            btnList.push(m.getDir(0, 'n'));
        if (south)
            btnList.push(m.getDir(0, 's'));
        if (east)
            btnList.push(m.getDir(0, 'e'));
        if (west)
            btnList.push(m.getDir(0, 'w'));
        btnList.push({
            "type": "btn",
            "name": "exit",
            "title": "Exit",
            "left": 400,
            "top": 42,
            "width": 218,
            "height": 88,
            "image": "475_fight/exit.png"
        });
        $.each(btnList, function (i, v) {
            nav.button(v, 475);
        });
    }
}
