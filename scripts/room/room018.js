//nightstand
var room18 = {};

room18.main = function () {
    var btnList = [];

    var navList = [g.pass];
    if (g.pass === 52)
        nav.bg("18_bedroomDrawer/52_drawer.jpg");
    var lube = inv.get("lube").count;

    if (lube > 75)
        btnList.push({
            "type": "btn",
            "name": "lube",
            "left": 550,
            "top": 150,
            "width": 208,
            "height": 739,
            "image": "18_bedroomDrawer/lube100.png"
        });
    else if (lube > 50)
        btnList.push({
            "type": "btn",
            "name": "lube",
            "left": 550,
            "top": 150,
            "width": 208,
            "height": 739,
            "image": "18_bedroomDrawer/lube75.png"
        });
    if (lube > 25)
        btnList.push({
            "type": "btn",
            "name": "lube",
            "left": 550,
            "top": 150,
            "width": 208,
            "height": 739,
            "image": "18_bedroomDrawer/lube50.png"
        });
    if (lube > 0)
        btnList.push({
            "type": "btn",
            "name": "lube",
            "left": 550,
            "top": 150,
            "width": 208,
            "height": 739,
            "image": "18_bedroomDrawer/lube25.png"
        });

    $.each(btnList, function (i, v) {
        nav.button(v, 18);
    });

    nav.buildnav(navList);
};

room18.btnclick = function (name) {
    switch (name) {
        case "lube":
            if (g.get("buttholeplay"))
                chat(1, 18);
            else
                chat(2, 18);
            break;
        default:
            break;
    }
};

room18.chatcatch = function (callback) {
    switch (callback) {
        case "loadRoom19":
            g.internal = "lube";
            char.room(19);
            break;
        default:
            break;
    }
};

room18.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I think I've played with my butthole enough today.",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "hmmm slut lube for my butt",
            button: [
                { chatID: -1, text: "I want to work on stretching my butthole.", callback: "loadRoom19" },
                { chatID: -1, text: "Not in the mood to play back door tag. ", callback: "" }
            ]
        }
    ];

    return cArray[chatID]
};