//Room name
var room949 = {};
room949.main = function () {
    g.map = null;
    char.addtime(257);
    chat(0, 949);
    sc.show("cult");
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
        case "c3":
            nav.bg("950_cell/ubel0.webp");
            break;
        case "c4":
            nav.bg("950_cell/ubel1.webp");
            break;
        case "c5":
            nav.bg("950_cell/ubel2.webp");
            break;
        case "c6":
            nav.bg("950_cell/ubel3.webp");
            break;
        case "start":
            gv.set("cultLastClean", g.dt);
            cl.c.chastity = null;
            cl.c.buttplug = null;
            gv.set("shower", new Date(new Date(g.dt).setDate(new Date(g.dt).getDate() - 10)));
            gv.set("cultRank", "slave");
            char.room(950);
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
                { chatID: 4, text: "...", callback: "c3" },
            ]
        },
        {
            chatID: 4,
            speaker: "ubel",
            text: "So Missy's lap dog has finally decided to join us? hehe. I told her that if she " +
                "left us be, we would leave you be. That rat she wanted to bait was getting too close. " +
                "Now all deals are over. You are now ours. I suggest you fall in line and " +
                "show Missy what a true believer is or you will be delivered to her door step in " +
                "small pieces. ",
            button: [
                { chatID: 5, text: "LET ME OUT! ", callback: "c4" },
            ]
        },
        {
            chatID: 5,
            speaker: "ubel",
            text: "Treat 'em like the rest. No more special favors for this one. ",
            button: [
                { chatID: 6, text: "Hey! I said let me out!", callback: "c5" },
            ]
        },
        {
            chatID: 6,
            speaker: "cult",
            text: "We've had our eye on you for a while, hehe. Yell all you want, there's no one " +
                "to hear you whining. We'll be back tomorrow to start your day. Better get some rest while " +
                "you can. ",
            button: [
                { chatID: 7, text: "Hey! I said let me out!", callback: "c6" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "I've been in some bad places, but this one. This one scares me. I've got to find " +
                "a way out of here or I might be trapped here forever. Worse yet I may even die here. ",
            button: [
                { chatID: -1, text: "...", callback: "c7" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};