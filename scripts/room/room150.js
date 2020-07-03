//Room name
var room150 = {};
room150.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "door",
            "left": 950,
            "top": 339,
            "width": 360,
            "height": 574,
            "image": "150_jones/door.png",
            "night": "150_jones/doorNight.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 150);
    });
    nav.buildnav(navList);
};

room150.btnclick = function (name) {
    switch (name) {
        case "door":
            nav.button({
                "type": "img",
                "name": "jones",
                "left": 974,
                "top": 107,
                "width": 515,
                "height": 973,
                "image": "150_jones/jones.png",
            }, 150);
            chat(0, 150);
            break;
        default:
            break;
    }
};

room150.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room150.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "jones",
            text: "Did you come to serve me?",
            button: [
                { chatID: 1, text: "Yes sir", callback: "" },
                { chatID: -1, text: "oh no", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "jones",
            text: "If you serve me know I will not give a fuck about you your boundries, or your dignity. I will slap your ass when you walk by and laugh " +
                "when you tell me to stop. Put you in whatever clothes I want. I'll jerk off into your food as you eat it. I'll pull your sissy clit out when you try talk. Casually spit in your " +
                "face everytime we go out. Piss on you while you sleep and take you whenever I want. You aren't my equal, I will never respect you. I will treat " +
                "you like my inferior play thing to use and discard as I see fit. Are you ready my toy?",
            button: [
                { chatID: 2, text: "Yes sir", callback: "" },
                { chatID: -1, text: "oh wow... uhhh no way", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "jones",
            text: "**Note from the developer: You degenerate slut! I love you! If you want to see this story line vote for it.",
            button: [
                { chatID: -1, text: "You got me, I'm such a dirty dirty slut!", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};