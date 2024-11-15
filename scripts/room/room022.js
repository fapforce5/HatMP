//Pee - not used right now
var room22 = {};
room22.main = function () {
    char.changeMenu("body", false, true);
    $('.char-modBtn[data-t="p"]').click();
    switch (g.pass) {
        case 12:
            nav.bg("22_toilet/a_12.jpg");
            break;
        case 201:
            nav.bg("22_toilet/a_201.jpg");
            break;
        case 451:
        case 452:
            nav.bg("22_toilet/a_451.jpg");
            break;
        case 503:
            nav.bg("22_toilet/a_503.jpg");
            break;
        case 527:
            nav.bg("22_toilet/a_527.jpg");
            break;
        case 727:
            nav.bg("22_toilet/a_727.jpg");
            break;
        default:
            g.pass = 451;
            nav.bg("22_toilet/a_451.jpg");
            break;
    }
    var btnList = [
        {
            "type": "img",
            "name": "toilet",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "22_toilet/toilet.png"
        }
    ];
    
    var navList = [g.pass];
    $.each(btnList, function (i, v) {
        nav.button(v, 22);
    });
    room22.btnclick("drawIconsMaster");  
    nav.buildnav(navList);
};

room22.btnclick = function (name) {
    switch (name) {
        case "drawIconsMaster":
            room22.btnclick("clearRoom");
            if (gv.get("bladder") > 0) {
                sc.select("pee", "22_toilet/icon_pee.png", 0);
            }
            else {
                sc.select("peex", "22_toilet/icon_peex.png", 0);
            }
            if (gv.getButtCum().total > 0) {
                sc.select("cum", "22_toilet/icon_expel.png", 1);
            }
            else {
                sc.select("cumx", "22_toilet/icon_expelx.png", 1);
            }
            sc.selectCancel("leave", 2);
            break;
        case "peex":
            room22.btnclick("clearRoom");
            chat(0, 22);
            break;
        case "cumx":
            room22.btnclick("clearRoom");
            chat(1, 22);
            break;
        case "pee":
            room22.btnclick("clearRoom");
            if (cl.c.chastity !== null) {
                sc.select("peemanx", "22_toilet/icon_peeMan.png", 0);
                sc.select("peebitch", "22_toilet/icon_peeBitch.png", 1);
                sc.selectCancel("drawIconsMaster", 2);
            }
            else {
                sc.select("peeman", "22_toilet/icon_peeMan.png", 0);
                if (sissy.st[6].ach) {
                    sc.select("peebitch", "22_toilet/icon_peeBitch.png", 1);
                    sc.selectCancel("drawIconsMaster", 2);
                }
                else
                    sc.selectCancel("drawIconsMaster", 1);
            }
            break;
        case "peemanx":
            room22.btnclick("clearRoom");
            chat(2, 22);
            break;
        case "peeman":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "toilet",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "22_toilet/a_man.png"
            }, 22);
            if (sissy.st[6].ach) {
                chat(3, 22);
            }
            else {
                chat(4, 22);
            }
            break;
        case "peebitch":
            nav.killall();
            if (cl.c.chastity === "null") {
                nav.button({
                    "type": "img",
                    "name": "toilet",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "22_toilet/a_chastityNo.png"
                }, 22);
                chat(7, 22);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "toilet",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "22_toilet/a_chastity.png"
                }, 22);
                if (sissy.st[6].ach) {
                    chat(5, 22);
                }
                else {
                    chat(6, 22);
                }
            }
            break;
        case "cum":
            if (inv.has("emptyjar")) {
                sc.select("cumtoilet", "22_toilet/icon_expelToilet.png", 0);
                if(levels.get("cum").l > 2)
                    sc.select("expelJar", "22_toilet/icon_expelJar.png", 1);
                else
                    sc.select("expelJary", "22_toilet/icon_expelJarx.png", 1);
                sc.selectCancel("drawIconsMaster", 2);
            }
            else {
                sc.select("cumtoilet", "22_toilet/icon_expelToilet.png", 0);
                sc.select("expelJarx", "22_toilet/icon_expelJarx.png", 1);
                sc.selectCancel("drawIconsMaster", 2);
            }
            break;
        case "expelJarx":
            chat(8, 22);
            break;
        case "expelJary":
            chat(9, 22);
            break;
        case "expelJar":
            nav.killall();
            switch (g.pass) {
                case 12:
                    nav.bg("22_toilet/s_12.jpg");
                    break;
                case 201:
                    nav.bg("22_toilet/s_201.jpg");
                    break;
                case 451:
                case 452:
                    nav.bg("22_toilet/s_451.jpg");
                    break;
                case 503:
                    nav.bg("22_toilet/s_503.jpg");
                    break;
                case 527:
                    nav.bg("22_toilet/s_527.jpg");
                    break;
                case 727:
                    nav.bg("22_toilet/s_727.jpg");
                    break;
                default:
                    nav.bg("22_toilet/s_451.jpg");
                    break;
            }
            nav.button({
                "type": "img",
                "name": "expelJar1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "22_toilet/blurp0.png"
            }, 22);
            nav.next("expelJar1");
            break;
        case "cumtoilet":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "expelJar1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "22_toilet/a_cumfart.png"
            }, 22);
            chat(11, 22);
            break;
        case "expelJar1":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "expelJar2",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "22_toilet/blurp1.png"
            }, 22);
            nav.next("expelJar2");
            break;
        case "expelJar2":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "expelJar1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "22_toilet/blurp2.png"
            }, 22);
            chat(10, 22);
            break;
        case "clearRoom":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "toilet",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "22_toilet/toilet.png"
            }, 22);
            break;
        case "leave":
            char.room(g.pass);
            break;
        default:
            break;
    }
};

room22.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(22);
            break;
        case "finishPeeMan":
            gv.set("bladder", 0);
            levels.mod("dom", 5, 999);
            char.addtime(15);
            char.room(22);
            break;
        case "finishPeeBitch":
            gv.set("bladder", 0);
            levels.mod("sub", 5, 999);
            levels.mod("xdress", 10, 999);
            char.addtime(15);
            char.room(22);
            break;
        case "analcum":
            var getCum = gv.getButtCum();
            if (getCum.total > 0) {
                inv.use("emptyjar");
                inv.add(getCum.cumType);
            }
            gv.clearButtCum();
            levels.mod("xdress", 15, 999);
            char.addtime(20);
            char.room(22);
            break;
        case "analcumtoilet":
            gv.clearButtCum();
            char.addtime(20);
            char.room(22);
            break;
        default:
            break;
    }
};

room22.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I don't have to pee at all. Maybe if I drank something I would pee.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "There's no cum in my bum! Gross.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I can't pee like a man. I'm wearing a sissy chastity cage. I'll have to pee " +
                "like a little sissy girl. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "I'm so naughty! I'm peeing like the man I used to be. ",
            button: [
                { chatID: -1, text: "...", callback: "finishPeeMan" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "That piss felt great! ",
            button: [
                { chatID: -1, text: "...", callback: "finishPeeMan" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "With this cage on I'll never piss like a man!",
            button: [
                { chatID: -1, text: "...", callback: "finishPeeBitch" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "With this cage on I get to pee like a girl all the time!",
            button: [
                { chatID: -1, text: "...", callback: "finishPeeBitch" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "I know I'm a true sissy bitch when I sit to pee even though I could stand.",
            button: [
                { chatID: -1, text: "...", callback: "finishPeeBitch" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "If I had an empty jar I could totally fill it with my anal cream pie and " +
                "save it for later. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Gross! I'm not saving my anal cream pie for later! ",
            button: [
                { chatID: -1, text: "[Need Cum Level 3]", callback: "reset" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Hahaha! It's so slimy and warm. I wonder what I should do with a big jar " +
                "of anal cum?",
            button: [
                { chatID: -1, text: "...", callback: "analcum" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Oh wow! I feel like such a dirty bitch pushing cum out of my own ass. ",
            button: [
                { chatID: -1, text: "...", callback: "analcumtoilet" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};