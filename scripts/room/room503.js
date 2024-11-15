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
        },
        {
            "type": "btn",
            "name": "toilet",
            "left": 542,
            "top": 734,
            "width": 227,
            "height": 234,
            "title": "Use the toilet",
            "image": "503_bathroom/toilet.png"
        }
    ];

    if (!inv.has("blackl")) {
        btnList.push({
            "type": "btn",
            "name": "lipstick",
            "left": 1566,
            "top": 661,
            "width": 82,
            "height": 56,
            "title": "Steal her lipstick",
            "image": "503_bathroom/lipstick.png"
        })
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 503);
    });
    var navList = [501, 502];
    nav.buildnav(navList);
};

room503.btnclick = function (name) {
    switch (name) {
        case "mirror":
            g.pass = 503;
            char.room(27);
            break;
        case "shower":
            nav.killall();
            cl.c.cumface = false;
            cl.nude();
            zcl.displayMain(0, 400, .22, "shower", false);
            nav.bg("503_bathroom/shower.jpg");
            if (inv.get("razor").count > 0)
                chat(3, 503);
            else
                chat(4, 503);
            break;
        case "toilet":
            g.pass = 503;
            char.room(22);
            break;
        case "lipstick":
            chat(7, 503);
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
            char.addtime(30);
            if (!daily.get("shower")) {
                gv.mod("energy", 10000);
                daily.set("shower");
                char.room(503);
            }
            else
                char.room(503);
            break;
        case "shaveBody":
            if (cl.c.bodyhair > 0)
                cl.c.bodyhair = 0;
            inv.use("razor");
            zcl.displayMain(0, 400, .22, "shower", false);
            cl.display();
            break;
        case "cleanFace":
            cl.c.cumface = false;
            zcl.displayMirror();
            cl.display();
            break;
        case "steal":
            inv.add("blackl");
            nav.killbutton("lipstick");
            g.popUpNotice("You stole her lipstick");
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
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "It's " + sc.n("zoey") + "'s black lipstick. Should I steal it from her?",
            button: [
                { chatID: -1, text: "Steal her lipstick", callback: "steal" },
                { chatID: -1, text: "Leave it there. ", callback: "" },
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};