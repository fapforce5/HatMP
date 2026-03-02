//Room name
var room949 = {};
room949.main = function () {
    char.addtime(257);
    chat(0, 949);
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "949_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 949);
    //});
    //nav.buildnav(navList);
};

room949.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room949.chatcatch = function (callback) {
    switch (callback) {
        case "c1":
            nav.bg("950_cell/cell_dark.jpg");
            break;
        case "c2":
            nav.bg("950_cell/cell3.jpg");
            break;
        default:
            break;
    }
};

room949.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!blank",
            text: "You have reached the end of this release. Next release will have the cult and the " +
                "choice. Until then you are stuck here. ",
            button: [
                { chatID: 0, text: "Repeat message (Becuase I didn't read it)", callback: "" },
                { chatID: -1, text: "Close so I can save", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "*ugh* My head. They didn't have to be so rough. ",
            button: [
                { chatID: 2, text: "[Open your eyes]", callback: "c1" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Where the hell am I?",
            button: [
                { chatID: 3, text: "[Look around]", callback: "c2" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I'm in some kind of prison cell. *ugh* It stinks of mold and dust. I wonder how I get out of here. ",
            button: [
                { chatID: 4, text: "...", callback: "c2" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};