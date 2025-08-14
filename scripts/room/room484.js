//Room name
var room484 = {};
room484.main = function () {

    if (!(cl.isLewd() || cl.c.swimsuit === "w")) {
        nav.killall();
        nav.bg("483_cave/enter_bad.jpg");
        chat(0, 484);
        return;
    }
    if (!cl.hasClothing("swimsuit", "w"))
    var btnList = [
        {
            "type": "btn",
            "name": "treasure",
            "left": 350,
            "top": 634,
            "width": 259,
            "height": 190,
            "image": "484_cave/treasure.webp"
        }
    ];
    var navList = [475];
    $.each(btnList, function (i, v) {
        nav.button(v, 484);
    });
    nav.buildnav(navList);
};

room484.btnclick = function (name) {
    switch (name) {
        case "wardrobe":
            g.pass = 484;
            char.room(8);
            break;
        case "leave":
            char.room(475);
            break;
        case "treasure":
            nav.killbutton("treasure");
            cl.add("swimsuit", "w");
            gv.mod("money", 150);
            nav.button({
                "type": "img",
                "name": "furkini",
                "left": 847,
                "top": 194,
                "width": 405,
                "height": 579,
                "image": "484_cave/furkini.webp"
            }, 484);
            chat(1, 484);
            break;
        default:
            break;
    }
};

room484.chatcatch = function (callback) {
    switch (callback) {
        case "openingbad":
            sc.select("wardrobe", "316_livingroom/icon_wardrobe.png", 2);
            sc.select("leave", "316_livingroom/icon_leave.png", 3);
            break;
        case "reset":
            char.room(484);
            break;
        default:
            break;
    }
};

room484.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "uh oh. They're pretty angry at me. Maybe I should change my clothes to something " +
                "more natural. ",
            button: [
                { chatID: -1, text: "", callback: "openingbad" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Sweet! Someone must have left this here. I found $150, and a furkini made " +
                "from wolf hair. That's weird. ",
            button: [
                { chatID: -1, text: "Take it all", callback: "reset" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};