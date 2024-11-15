//Room name
var room625 = {};
room625.main = function () {
    if (g.pass.who === "lola" || g.pass.who === "ll") {
        //g.pass = { who: "lola", ferrisWheel: false, bong: false, wheel: false };
        if (!g.pass.ferrisWheel)
            sc.select("ferris", "625_fair/icon_wheel.png", 0);
        if (!g.pass.bong)
            sc.select("bong", "625_fair/icon_bong.png", 1);
        if (!g.pass.ball)
            sc.select("ball", "625_fair/icon_ball.png", 2);

        sc.select("endDate", "625_fair/icon_enddate.png", 3);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "name",
                "left": 1741,
                "top": 618,
                "width": 130,
                "height": 252,
                "image": "625_folder/hole.png"
            }
        ];
        var navList = [0];
        $.each(btnList, function (i, v) {
            nav.button(v, 625);
        });
        nav.buildnav(navList);
    }
};

room625.btnclick = function (name) {
    switch (name) {
        case "ferris":
            g.pass.ferrisWheel = true;
            char.room(626);
            break;
        case "bong":
            g.pass.bong = true;
            char.room(627);
            break;
        case "ball":
            g.pass.ball = true;
            char.room(628);
            break;
        case "endDate":
            char.room(0);
            break;
        default:
            break;
    }
};

room625.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room625.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};