//Room name
var room588 = {};
room588.main = function () {
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "588_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 588);
    //});
    //nav.buildnav(navList);
    if (g.pass === "sporty_588") {
        zcl.displayMain(100, 500, .1, "clothes", false);
        nav.button({
            "type": "img",
            "name": "sporty",
            "left": 743,
            "top": 0,
            "width": 705,
            "height": 1080,
            "image": "589_liam/sporty.png"
        }, 586);
        chat(0, 586);
    }
    else {
        nav.buildnav([585, 586, 587, 589]);

    }
};

room588.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room588.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room588.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "sporty",
            text: "So should we strip down and put on a show for him baby?",
            button: [
                { chatID: -1, text: "Oh yeah!", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};