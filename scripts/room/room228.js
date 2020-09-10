//Room name
var room228 = {};
room228.main = function () {
    var navList = [0];
    $("#room_left_map").html('<img src="./images/general/map_ov.png" class="width-l" id="rl_map" style="width:100%" />');
    char.changeMenu("body");
    g.pass = "";
    zcl.displayMain(550, 1250, .03, "clothes", true);

    nav.button({
        "type": "img",
        "name": "swamp",
        "left": 1182,
        "top": 754,
        "width": 252,
        "height": 80,
        "image": "225_sewer/swamp.png",
    }, 228);
    nav.button({
        "type": "btn",
        "name": "up",
        "left": 1525,
        "top": 430,
        "width": 94,
        "height": 228,
        "image": "225_sewer/up.png",
    }, 228);
    nav.button({
        "type": "btn",
        "name": "in",
        "left": 794,
        "top": 311,
        "width": 361,
        "height": 453,
        "image": "225_sewer/in.png",
    }, 228);
    nav.buildnav(navList);
};

room228.btnclick = function (name) {
    switch (name) {
        case "up":
            char.room(225);
            break;
        case "in":
            if (g.get("energy") < 10) {
                chat(1, 228);
            }
            else {
                g.pass = "foo";
                char.room(226);
            }
            break;
        default:
            break;
    }
};

room228.chatcatch = function (callback) {
    switch (callback) {
        case "tojail":
            break;
        default:
            break;
    }
};

room228.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cop2",
            text: "Alright. If you're going to prostitute yourself for sex be less obvious about it and wear some clothes. ",
            button: [
                { chatID: -1, text: "but officer, I wasn't....", callback: "tojail" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I need more energy to wander around the sewers.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};