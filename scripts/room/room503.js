//bathroom
var room503 = {};
room503.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "shower",
            "left": 524,
            "top": 0,
            "width": 594,
            "height": 799,
            "title":"Take a shower",
            "image": "503_bathroom/shower.png"
        },
        {
            "type": "btn",
            "name": "mirror",
            "left": 1257,
            "top": 23,
            "width": 661,
            "height": 526,
            "title": "Look in the mirror",
            "image": "503_bathroom/mirror.png"
        }
    ];
    
    $.each(btnList, function (i, v) {
        nav.button(v, 503);
    });
    var navList = [501, 502];
    nav.buildnav(navList);
};

room503.btnclick = function (name) {
    switch (name) {
        case "mirror":
            nav.killall();
            nav.bg("503_bathroom/mirror.jpg");
            zcl.displayMirror();
            chat(0, 503);
            break;
        case "shower":
            if (g.diffDatesByDays(g.dt, g.get("shower")) === 0)
                chat(2, 503);
            else {
                nav.killall();
                cl.c.cumface = false;
                cl.nude();
                zcl.displayMain(0, 400, .22, "shower", false);
                nav.bg("503_bathroom/shower.jpg");
                if (inv.get("razor").count > 0)
                    chat(3, 503);
                else
                    chat(4, 503);

            }
            break;
        default:
            break;
    }
};

room503.chatcatch = function (callback) {
    switch (callback) {
        case "reloadRoom":
            char.room(503);
            break;
        case "finishShowering":
            cl.undo();
            g.mod("energy", 30);
            char.addtime(30);
            g.set("shower", new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 0, 0, 0, 0));
            char.room(503);
            break;
        case "shaveBody":
            g.set("bodyhair", 0);
            zcl.displayMain(0, 400, .22, "shower", false);
            inv.use("razor");
            char.addtime(15);
            cl.display();
            break;
        case "cleanFace":
            cl.c.cumface = false;
            zcl.displayMirror();
            cl.display();
            break;
        default:
            break;
    }
};

room503.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Check me out.",
            button: [
                { chatID: 1, text: "Apply Makeup", callback: "" },
                { chatID: 1, text: "Apply Lipstick", callback: "" },
                { chatID: 6, text: "Clean Your Face", callback: "cleanFace" },
                { chatID: -1, text: "Finish", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I don't have that.",
            button: [
                { chatID: -1, text: "Finish", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I've already showered today.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: 5, text: "Shave your body", callback: "shaveBody" },
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Rubber ducky, you're the one.. You make bath time lots of fun",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "You shaved your body",
            button: [
                { chatID: -1, text: "Finish showering", callback: "finishShowering" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "My face is so clean.",
            button: [
                { chatID: -1, text: "...", callback: "reloadRoom" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};