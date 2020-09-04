//Room name
var room225 = {};
room225.main = function () {
    var navList = [0];
    if (inv.has("sewer")) {
        var btnList = [
            {
                "type": "btn",
                "name": "lid",
                "left": 280,
                "top": 831,
                "width": 356,
                "height": 143,
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
            nav.button({
                "type": "btn",
                "name": "up",
                "left": 1525,
                "top": 430,
                "width": 94,
                "height": 228,
                "image": "225_sewer/up.png",
            }, 225);
            nav.button({
                "type": "btn",
                "name": "in",
                "left": 794,
                "top": 311,
                "width": 361,
                "height": 453,
                "image": "225_sewer/in.png",
            }, 225);
            break;
        case "up":
            char.room(225);
            break;
        case "in":
            g.pass = "";
            char.room(226);
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