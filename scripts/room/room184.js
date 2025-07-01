//Bathroom
var room184 = {};
room184.main = function () {
    nav.button({
        "type": "btn",
        "name": "shower",
        "left": 722,
        "top": 284,
        "width": 351,
        "height": 602,
        "image": "201_bathroom/shower.png"
    }, 184);
    nav.button({
        "type": "btn",
        "name": "toilet",
        "left": 1168,
        "top": 714,
        "width": 135,
        "height": 164,
        "image": "201_bathroom/toilet.png"
    }, 184);
    nav.button({
        "type": "btn",
        "name": "sink",
        "left": 1326,
        "top": 611,
        "width": 388,
        "height": 469,
        "image": "201_bathroom/sink.png"
    }, 184);
    nav.buildnav([185]);
};

room184.btnclick = function (name) {
    switch (name) {
        case "toilet":
            g.pass = 184;
            char.room(22);
            break;
        case "sink":
            g.pass = 184;
            char.room(27);
            break;
        case "shower":
            nav.killall();
            cl.c.cumface = false;
            cl.nude();
            zcl.displayMain(0, 400, .22, "shower", false);
            nav.bg("201_bathroom/shower.jpg");
            if (cl.c.bodyhair < -999)
                chat(1, 184);
            else if (inv.get("razor").count > 0)
                chat(0, 184);
            else
                chat(1, 184);
            break;
        default:
            break;
    }
};

room184.chatcatch = function (callback) {
    switch (callback) {
        case "shaveBody":
            cl.shave();
            inv.use("razor");
            zcl.displayMain(0, 400, .22, "shower", false);
            cl.display();
            daily.set("shower");
            break;
        case "finishShowering":
            cl.undo();
            daily.set("shower");
            char.room(184);
            break;
        default:
            break;
    }
};

room184.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: 2, text: "Shave your body", callback: "shaveBody" },
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "You shaved your body",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};