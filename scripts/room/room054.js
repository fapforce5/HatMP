//Room name
var room54 = {};
room54.main = function () {

    if (sc.tiffany().thisRoom) {
        nav.bg("54_tif/tifNight_sleep.jpg")
    }
    var navList = [51, 55];
    nav.buildnav(navList);
};

room54.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room54.chatcatch = function (callback) {
    for (i = 0; i < cArray.length; i++) {
        switch (cArray[i]) {
            default:
                break;
        }
    }
};

room54.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "candy",
            text: "Hay " + sc.n("tiffany") + ". Is this the guy that didn't catch the cum dude? Why is he in a dress? ",
            button: [
                { chatID: -1, text: "Hay..", callback: "candysmile tifsmile" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};