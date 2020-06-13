//Room name
var room554 = {};
room554.main = function () {
    var navList = [0, 552];
    if (g.pass === "girl") {
        nav.bg("554_shower/showerGirl.jpg");
        navList = [0, 553];
    }
    
    if (g.diffDatesByDays(g.dt, g.get("shower")) === 0)
        chat(0, 554);
    else {
        nav.killall();
        cl.c.cumface = false;
        cl.nude();
        cl.displayMain(120, 1200, .15, "shower");
        chat(1, 554);
    }
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 554);
    //});
    nav.buildnav(navList);
};

room554.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room554.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            if (g.pass === "girl")
                char.room(553);
            else
                char.room(552);
            break;
        case "leaveShower":
            cl.undo();
            g.mod("energy", 30);
            char.addtime(30);
            g.set("shower", new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 0, 0, 0, 0));
            if (g.pass === "boy")
                char.room(552);
            else
                char.room(553);
            break;
        default:
            break;
    }
};

room554.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I already showered today.",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Finished Showering",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leaveShower" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};