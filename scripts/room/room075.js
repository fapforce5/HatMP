//Room name
var room75 = {};
room75.main = function () {
    g.pass = "";
    var btnList = [
        {
            "type": "btn",
            "name": "door",
            "left": 1156,
            "top": 686,
            "width": 101,
            "height": 209,
            "image": "75_bimbo/door.png",
            "night": "75_bimbo/doorNight.png"
        }
    ];
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 75);
    });
    nav.buildnav(navList);
};

room75.btnclick = function (name) {
    switch (name) {
        case "door":
            if (!g.isNight() && sc.getstep("bimbo") === 1) {
                nav.killbutton("door");
                nav.bg("75_bimbo/housecu.jpg");
                chat(1, 75);
            }
            else
                chat(0, 75);
            break;
        default:
            break;
    }
};

room75.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "enterBoob":
            g.pass = "boobjob";
            char.room(76);
            break;
        case "enter":
            char.room(77);
            break;
        default:
            break;
    }
};

room75.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Oh, no one is home",
            button: [
                { chatID: -1, text: "Enter " + sc.n("bimbo") + "'s house", callback: "enter" },
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "bimbo",
            text: "Oh, I'm so glad you came! Come in if you want to make me cum!",
            button: [
                { chatID: -1, text: "Oh yes!", callback: "enterBoob" },
                { chatID: -1, text: "No, I've got other things to do", callback: "leave" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};