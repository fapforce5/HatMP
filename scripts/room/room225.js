//Room name
var room225 = {};
room225.main = function () {
    var navList = [0];
    if (g.hasAccess(225)) {
        var btnList = [
            {
                "type": "btn",
                "name": "lid",
                "left": 287,
                "top": 838,
                "width": 342,
                "height": 129,
                "image": "225_sewer/lid.png",
                "NIGHT": "225_sewer/lid_night.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 225);
        });
    }
    
    
    nav.buildnav(navList);
};

room225.btnclick = function (name) {
    switch (name) {
        case "lid":
            nav.killbutton("lid");
            nav.bg("225_sewer/sewer.jpg");
            break;
        default:
            break;
    }
};

room225.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room225.chat = function (chatID) {
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