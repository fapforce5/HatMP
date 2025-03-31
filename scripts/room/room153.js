//Room name
var room153 = {};
room153.main = function () {
    if (!daily.get("jonesCleanRoom2"))
        sc.select("clean", "152_sittingRoom/clean.png", 0);
    nav.buildnav([150, 152, 154]);
};

room153.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            char.addtime(60);
            nav.bg("153_bathroom/clean.jpg");
            daily.set("jonesCleanRoom2");
            nav.next("finishClean");
            break;
        case "finishClean":
            char.room(153);
            break;
        default:
            break;
    }
};

room153.chatcatch = function (callback) {
    switch (callback) {
        case "inspect":
          
            break;
       
        default:
            break;
    }
};

room153.chat = function (chatID) {
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