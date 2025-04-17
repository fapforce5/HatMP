////Room name
//var room407 = {};
//room407.main = function () {
//    g.pass = "makeup";
//    char.room(401);
//};


//Tattoo name
var room407 = {};
room407.main = function () {
    nav.button({
        "type": "btn",
        "name": "airwrecka",
        "left": 858,
        "top": 34,
        "width": 438,
        "height": 1046,
        "image": "407_makeup/worker.png"
    }, 407);
    var navList = [400];
    nav.buildnav(navList);
};

room407.btnclick = function (name) {
    switch (name) {
        case "airwrecka":
            if (!qdress.st[5].ach) {
                chat(4, 407);
            }
            else {
                if (cl.c.makeup === null)
                    chat(0, 407);
                else
                    chat(1, 407);
            }
            break;
        case "makeup":
            nav.killall();
            sc.select("makeup_natural", "27_mirror/icon_natural.png", 0);
            sc.select("makeup_blush", "27_mirror/icon_blush.png", 1);
            sc.select("makeup_blushheavy", "27_mirror/icon_blushheavy.png", 2);
            sc.select("makeup_clown", "27_mirror/icon_clown.png", 3);
            sc.select("makeup_brown", "27_mirror/icon_brown.png", 4);
            sc.select("makeup_orange", "27_mirror/icon_orange.png", 5);
            sc.select("makeup_white", "27_mirror/icon_white.png", 6);
            sc.selectCancel("reset", 7);
            break;
        case "makeup_natural":
        case "makeup_blush":
        case "makeup_blushheavy":
        case "makeup_clown":
        case "makeup_brown":
        case "makeup_orange":
        case "makeup_white":
            g.internal.m = name.replace("makeup_", "");
            room407.btnclick("eyeshadow");
            break;
        case "eyeshadow":
            nav.killall();
            sc.select("eyeliner_light", "27_mirror/icon_eye_light.png", 0);
            sc.select("eyeliner_black", "27_mirror/icon_eye_black.png", 1);
            sc.select("eyeliner_purple", "27_mirror/icon_eye_purple.png", 2);
            sc.select("eyeliner_pink", "27_mirror/icon_eye_pink.png", 3);
            sc.select("eyeliner_green", "27_mirror/icon_eye_green.png", 4);
            sc.select("eyeliner_blue", "27_mirror/icon_eye_blue.png", 5);
            sc.select("eyeliner_rainbow", "27_mirror/icon_eye_rainbow.png", 6);
            sc.selectCancel("makeup", 6);
            break;
        case "eyeliner_light":
        case "eyeliner_black":
        case "eyeliner_purple":
        case "eyeliner_pink":
        case "eyeliner_green":
        case "eyeliner_blue":
        case "eyeliner_rainbow":
            g.internal.e = name.replace("eyeliner_", "");
            room407.btnclick("lipstick")
            break;
        case "lipstick":
            nav.killall();
            sc.select("lipstick_red", "27_mirror/icon_lipstick_red.png", 0);
            sc.select("lipstick_pink", "27_mirror/icon_lipstick_pink.png", 1);
            sc.select("lipstick_purple", "27_mirror/icon_lipstick_purple.png", 2);
            sc.select("lipstick_blue", "27_mirror/icon_lipstick_blue.png", 3);
            sc.select("lipstick_black", "27_mirror/icon_lipstick_black.png", 4);
            sc.selectCancel("eyeshadow", 5);
            break;
        case "lipstick_red":
        case "lipstick_pink":
        case "lipstick_purple":
        case "lipstick_blue":
        case "lipstick_black":
            levels.mod("makeup", 60);
            g.internal.l = name.replace("lipstick_", "");
            cl.c.makeup = g.internal.m;
            cl.c.lipstick = g.internal.l;
            cl.c.pissface = g.internal.e;
            cl.display();
            nav.killall();
            gv.mod("money", -60);
            nav.bg("407_makeup/mirror.jpg");
            zcl.displayMirror();
            chat(3, 407);
            break;
        case "reset":
            char.room(407);
            break;
        default:
            break;
    }
};

room407.chatcatch = function (callback) {
    var i;
    switch (callback) {
        case "leave":
            char.room(400);
            break;
        case "buy":
            g.pass = "makeup";
            char.room(401);
            break;
        case "puton":
            if (gv.get("money") < 60) {
                chat(2, 407);
            }
            else {
                nav.killall();
                nav.bg("407_makeup/bg2.jpg");
                g.internal = { l: null, e: null, m: "n" };
                
                room407.btnclick("makeup");
            }
            break;
        default:
            break;
    }
};

room407.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!airwrecka",
            text: "*blech* You look hideous darling. Simply disgusting.",
            button: [
                { chatID: -1, text: "Can I buy some make up?", callback: "buy" },
                { chatID: -1, text: "Can you put on my makeup? [$60]", callback: "puton" },
            ]
        },
        {
            chatID: 1,
            speaker: "!airwrecka",
            text: "*ugh* What do you want?",
            button: [
                { chatID: -1, text: "Can I buy some make up?", callback: "buy" },
                { chatID: -1, text: "Can you put on my makeup? [$60]", callback: "puton" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I don't have $60.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "!airwrecka",
            text: "You look so vapid! Love it!",
            button: [
                { chatID: -1, text: "Can I buy some make up?", callback: "buy" },
                { chatID: -1, text: "Can you put on my makeup? [$60]", callback: "puton" },
                { chatID: -1, text: "[Return to the mall]", callback: "leave" },
            ]
        },
        {
            chatID: 4,
            speaker: "!airwrecka",
            text: "*blech* You look hideous darling. Simply disgusting.",
            button: [
                { chatID: -1, text: "Can I buy some make up?", callback: "buy" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
