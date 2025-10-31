var room475 = {};
room475.main = function () {
    if (g.map === null) {
        g.map = {
            col: 10,
            row: 78,
            ev: new Array(),
            eventCounter: g.rand(3, 7)
        };
    }
    
    if (gv.get("energy") < 1) {
        nav.killall();
        nav.bg("999_phone/black.jpg");
        chat(6, 475);
        return;
    }
    else if (g.map.row === 79 && g.map.col === 10) {
        g.map = null;
        char.room(450);
        return;
    }

    if (m.fmap === null) {
        m.createFmap();
    }

    $('#room_footer').hide();
    $("#room-inv").show();
    $("#room-menu").show();

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

    let howOften, fameLevel;
    if (g.map.ev.length === 0 || g.map.eventCounter === 0) {
        let fameOften;
        let appearanceOften;

        fameLevel = levels.get("fame").l;
        appearanceOften = 5 - cl.appearance();
        fameOften = 10 - fameLevel;
        if (fameLevel > 10)
            fameLevel = 10;

        howOften = Math.floor((appearanceOften + fameOften) / 2);
        if (g.isNight())
            howOften -= 2;
        if (howOften < 2)
            howOften = 2;
        if (howOften > 10)
            howOften = 10;
    }
    if (g.map.ev.length === 0) {
        eventArray = ["rope", "rope", "hole", "random", "random", "treasure"];
        for (let i = 0; i < fameLevel - 4; i++) {
            eventArray.push("rape");
        }
        eventArray.push("rape");

        g.map.ev = g.shuffleArray(eventArray);
        g.map.eventCounter = g.rand(howOften, howOften + 3);
    }

    let currentLocation = g.map.row < 50 ? "cave" : "forest";
    if (g.map.eventCounter === 0) {
        let thisEvent = g.map.ev[0];
        g.map.ev.shift();
        g.map.eventCounter = g.rand(howOften, howOften + 3);
        switch (thisEvent) {
            case "rape":
                rape.init(null, currentLocation, 475, "reload");
                break;
            case "rope":
                trap.init("rope", currentLocation, 475, "reload", null);
                break;
            case "hole":
                trap.init("hole", currentLocation, 475, "reload", null);
                break;
            case "random":
                trap.init("encounter", currentLocation, 475, "reload", null);
                break;
            case "treasure":
                trap.init("treasure", currentLocation, 475, "reload", null);
                break;
        }
    }
    else {
        if (cl.isLewd()) {
            nav.button({
                "type": "img",
                "name": "lewd",
                "left": 1720,
                "top": 940,
                "width": 200,
                "height": 100,
                "image": "map/lewd.png"
            }, 0);
        }
        let maxenergy = gv.get("maxenergy");
        let currentMyEnergy = gv.get("energy");
        $('#room-buttons').append('<div class="room-img resize my-life" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1040, 1630) + '  background: #333; border-radius:10px;" ></div>');
        $('#room-buttons').append('<div class="room-img resize my-life" data-t="energy" data-name="enemy0" data-room="9999" style=" ' + g.makeCss(10, 280, 1040, 1630) + '  background: #33ff33; border-radius:10px;" ></div>');
        $(".my-life[data-t='energy']").css({ "width": ((currentMyEnergy / maxenergy) * 280 * g.ratio) + "px" });
    }
};

room475.btnclick = function (name) {
    switch (name) {
        case "north":
            g.map.row -= 1;
            m.updateVisit();
            g.map.eventCounter--;
            char.room(475);
            break;
        case "south":
            g.map.row += 1;
            m.updateVisit();
            g.map.eventCounter--;
            char.room(475);
            break;
        case "east":
            g.map.col += 1;
            m.updateVisit();
            g.map.eventCounter--;
            char.room(475);
            break;
        case "west":
            g.map.col -= 1;
            m.updateVisit();
            g.map.eventCounter--;
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
            else if (m.fmap[g.map.row][g.map.col].used === "s") {
                //row 49 exit map
                char.room(485); //row 42 can buy things 
            }
            else if (m.fmap[g.map.row][g.map.col].used === "j") {
                //dozen degrading doors
                char.room(486);
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
    if (g.map !== null)
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
        case "passout":
            g.map = null;
            g.pass = 701;
            char.room(28);
            break;
        case "entercave":
            g.map.row -= 1;
            g.map.ev = new Array();
            char.room(475);
            break;
        case "leave":
            char.room(0);
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
                text: "Damn! Another door! I wonder what I need to get through this door.",
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
            {
                chatID: 6,
                speaker: "thinking",
                text: "oh my. I'm so weak and tired.... I don't think I can go on....",
                button: [
                    { chatID: -1, text: "[You pass out due to low energy]", callback: "passout" }
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "OooOoooo Spooky cave! I did find this skull key, maybe it will open the door? ",
                button: [
                    { chatID: -1, text: "[Use the key]", callback: "" },
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "I think I can make out a tiny drop and opening that may lead back to the road. " +
                    "Should I take it?",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "leave" },
                    { chatID: -1, text: "Explore some more", callback: "" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
