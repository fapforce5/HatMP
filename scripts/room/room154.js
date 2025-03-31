//Room name
var room154 = {};
room154.main = function () {
    if (!daily.get("jonesCleanRoom3")) {
        nav.bg("154_diningRoom/dirty.jpg");
        sc.select("clean", "152_sittingRoom/clean.png", 0);
    }
    nav.buildnav([150, 152, 153]);
};

room154.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            char.addtime(60);
            nav.bg("154_diningRoom/clean.jpg");
            daily.set("jonesCleanRoom3");
            nav.next("finishClean");
            break;
        case "finishClean":
            char.room(154);
            break;
        default:
            break;
    }
};

room154.chatcatch = function (callback) {
    switch (callback) {
        case "inspect":
          
            break;
       
        default:
            break;
    }
};

room154.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "butler",
            text: "So you're the whore that wore the master's piss at the fashion show. You must be quite desperate " +
                "for attention to do such a dreadful act. A common trollop. ",
            button: [
                { chatID: 1, text: "Oh. That's me. ", callback: "" }
            ]
        },
       
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};