var q3 = {};
q3.nonPlayer = "0";
q3.player = "1";
q3.cleared = "2";
q3.list = function () {
    var active = new Array();
    for (i = 0; i < sc.char.length; i++) {
        if (sc.char[i].q3 !== null)
            active.push({ n: sc.char[i].name, f: sc.char[i].p, x: q3 !== null });
    }
    return {
        level: 0,
        current: "",
        active: active,
        inactive: [
            { n: "missy", x: true },
            { n: "black", x: true },
            { n: "p", x: true },
            { n: "cecilia", x: true },
            { n: "construction", x: true },
            { n: "nell", display: "Nell", x: false, img: "6_computer/nell.png" },
            { n: "dad", display: "Alexander", x: false, img: "6_computer/dad.png" },
            { n: "jeremy", display: "Jeremy", x: false, img: "6_computer/jeremy.png" },
        ]
    };
};

q3.get = function (character) {
    var charList = questThree.list().active;
    for (var i = 0; i < charList.length; i++) {
        if (charList.n === character)
            return charList.n;
    }
    console.log("invalid character: " + character);
    return null;
};

q3.isItMe = function (character) {
    return gv.get("quest3") === character;
};

q3.activeSearch = function (character) {
    return gv.get("quest3") !== null;
};

q3.eventComplete = function (character) {
    var qchar = gv.get("quest3");
    if (qchar === character) {
        g.sissy[49].ach = true;
        gv.set("quest3", null);
        char.q3 = true;
        g.popUpNotice("You solved the quest 3");
        g.popUpNotice("Yeah! some more stuff");
    }
    else {
        char.q3 = false;
        g.popUpNotice("This end is a dead end.");
    }
};