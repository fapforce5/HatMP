//Room name
var room825 = {};
room825.main = function () {
    let dollmakerDolls = sc.getMissionTask("dollmaker", "*dolls", 1);
    if ((dollmakerDolls.notStarted || dollmakerDolls.inProgress) && !inv.has("dollmakerTeddy")) {
        nav.button({
            "type": "btn",
            "name": "dollmaker",
            "left": 1556,
            "top": 440,
            "width": 122,
            "height": 136,
            "image": "825_lot/teddy_day.webp",
            "night": "825_lot/teddy_night.webp"
        }, 825);
    }

    if (g.isNight() && g.gethourdecimal() > 19) {
        var btnList = [
            {
                "type": "btn",
                "name": "gang",
                "left": 263,
                "top": 34,
                "width": 1065,
                "height": 1065,
                "image": "825_lot/gang.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 825);
        });
        
    }
    
    var navList = [0];
    nav.buildnav(navList);
};

room825.btnclick = function (name) {
    switch (name) {
        case "gang":
            chat(0, 825);
            break;
        case "dollmaker":
            if (sc.getMissionTask("dollmaker", "*dolls", 1).inProgress) {
                nav.killbutton("dollmaker");
                inv.add("dollmakerTeddy");
                chat(2, 825);
            }
            else {
                chat(1, 825);
            }
            break;
        default:
            break;
    }
};

room825.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room825.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "This is our lot. You better get or we're going to sic chopper on you! ",
            button: [
                { chatID: -1, text: "Squeal and run", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Someone left their doll here. I'll just leave it in case they come back. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Nice! I found the ##dollmaker##'s Teddy! I should return it to her. ",
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

invoker.registerRoom(825, room825);
