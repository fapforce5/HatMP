//Room name
var room224 = {};
room224.main = function () {
    var icons = new Array();
    if (g.pass === "punish") {
        icons.push({ n: "punish", img: "punish.png" });
    }
    else {
        icons.push({ n: "mom", img: "lunch0.png" });
        icons.push({ n: "skip", img: "lunchno.png" });
    }
    //char.room(199);
    $.each(icons, function (i, v) {
        nav.button({
            "type": "btn",
            "name": v.n,
            "left": 400 + (Math.floor(i / 4) * 700),
            "top": 150 + ((i % 4) * 180),
            "width": 600,
            "height": 150,
            "image": "224_lunch/" + v.img
        }, 224);
    });
};

room224.btnclick = function (name) {
    switch (name) {
        case "skip":
            nav.killall();
            chat(0, 224);
            break;
        case "punish":
            nav.killall();
            nav.bg("200_frontOffice/bg.jpg");
            chat(1, 224);
            break;
        case "mom":
            nav.killall();
            nav.bg("224_lunch/mom.jpg");
            chat(3, 224);
            break;
        default:
            break;
    }
};

room224.chatcatch = function (callback) {
    switch (callback) {
        case "endlunch":
            char.room(199);
            break;
        case "endlunchEnergy":
            gv.mod("energy", 30);
            char.room(199);
            break;
        case "endlunchPunish":
            gv.mod("energy", -20);
            char.room(199);
            break;
        case "standInCorner":
            nav.bg("224_lunch/punish0.jpg");
            break;
        default:
            break;
    }
};

room224.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I'm going to skip lunch. ",
            button: [
                { chatID: -1, text: "...", callback: "endlunchEnergy" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Since you can't seem to follow simple instructions you can stand in the corner and think about " +
                "ways to correct your behavior while I go out. You better be standing there when I get back. ",
            button: [
                { chatID: 2, text: "Yes ma'am", callback: "standInCorner" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Why is she treating me like a child. Standing in the corner is so humiliating and dumb. ",
            button: [
                { chatID: -1, text: "[End lunch]", callback: "endlunchPunish" }
            ]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "More to come later....",
            button: [
                { chatID: -1, text: "[End lunch]", callback: "endlunch" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};