//Room name
var room321 = {};
room321.main = function () {
    var btnList = [
        {
            "type": "zimg",
            "name": "fb",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "58_camwhore/fg.png"
        }
    ];
    var navList = [316];
    $.each(btnList, function (i, v) {
        nav.button(v, 321);
    });
    nav.buildnav(navList);
    if (sc.getMission("janice", "webcam").notStarted) {
        sc.startMission("janice", "webcam");
        sc.completeMissionTask("janice", "webcam", 0);
        nav.bg("321_whorechat/s0.jpg");
        zcl.displayMain(-200, 700, .4, "clothes", false);
    }
};

room321.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room321.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room321.chat = function (chatID) {
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