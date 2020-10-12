//Room name
var room726 = {};
room726.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "girl1",
            "left": 1039,
            "top": 528,
            "width": 255,
            "height": 491,
            "image": "726_dance/dgirl1.png"
        }
    ];
    var navList = [0, 725];
    $.each(btnList, function (i, v) {
        nav.button(v, 726);
    });
    nav.buildnav(navList);
};

room726.btnclick = function (name) {
    switch (name) {
        case "girl1":
            var thisApp = cl.appearanceBody();
            var thisAppp = cl.appearance();
            nav.killbutton("girl1");
            nav.button({
                "type": "btn",
                "name": "girl1",
                "left": 865,
                "top": 97,
                "width": 727,
                "height": 983,
                "image": "726_dance/dgirl1a.png"
            }, 726);

            if (thisApp === -1)
                chat(0, 726);
            else if (thisApp === 0)
                chat(1, 726);
            else if (thisAppp < 2)
                chat(2, 726);
            else
                chat(3, 726);
            break;
        default:
            break;
    }
};

room726.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(726); 
            break;
        default:
            break;
    }
};

room726.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Ugh... Go away. You're disgusting.",
            button: [
                { chatID: -1, text: "No you", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "You're kinda cute. If I didn't have a boyfriend I would be totally grinding you!",
            button: [
                { chatID: -1, text: "Why let that stop you", callback: "reset" }
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "You have an intersting look, but I'm not interested.",
            button: [
                { chatID: -1, text: "Neither am I", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "Hay girl! You're almost cute enough to to make me want to invite you to a threesome!",
            button: [
                { chatID: -1, text: "Hay keep that invite open!", callback: "reset" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};