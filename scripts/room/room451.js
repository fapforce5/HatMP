//Park Men's Room
var room451 = {};

room451.main = function () {
    var canGoOut = cl.hasoutfit("public");
    if (canGoOut === null) {
        var btnList = [
            {
                "type": "btn",
                "name": "stall1",
                "left": 1225,
                "top": 172,
                "width": 166,
                "height": 546,
                "image": "451_parkMensRoom/451_stall1.png"
            },
            {
                "type": "btn",
                "name": "stall2",
                "left": 1001,
                "top": 149,
                "width": 184,
                "height": 586,
                "image": "451_parkMensRoom/451_stall2.png"
            },
            {
                "type": "btn",
                "name": "stall3",
                "left": 750,
                "top": 118,
                "width": 207,
                "height": 632,
                "image": "451_parkMensRoom/451_stall3.png"
            },
            {
                "type": "btn",
                "name": "mirror",
                "left": 1621,
                "top": 76,
                "width": 233,
                "height": 490,
                "image": "451_parkMensRoom/sink.png"
            },
        ];

        var navList = [450];

        $.each(btnList, function (i, v) {
            nav.button(v, 451);
        });

        nav.buildnav(navList);
    }
    else {
        g.internal = canGoOut;
        chat(0, 451);
    }
};

room451.btnclick = function (name) {
    switch (name) {
        case "stall3":
            nav.killall();
            nav.bg("451_parkMensRoom/stall.jpg");
            nav.buildnav([451]);
            break;
        case "stall2":
            nav.killall();
            nav.bg("451_parkMensRoom/gloryHoleInsert.jpg");
            if (g.dt.getDay() === 0 || g.dt.getDay() === 6) {
                nav.button({
                    "type": "btn",
                    "name": "insert_1",
                    "left": 1649,
                    "top": 158,
                    "width": 124,
                    "height": 218,
                    "image": "451_parkMensRoom/insert_1.png"
                }, 451);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "insert",
                    "left": 1649,
                    "top": 158,
                    "width": 124,
                    "height": 218,
                    "image": "451_parkMensRoom/insert.png"
                }, 451);
            }
            nav.buildnav([451]);
            break;
        case "stall1":
            if (g.dt.getDay() === 0 || g.dt.getDay() === 6) {
                chat(5, 451);
            }
            else {
                nav.killall();
                nav.bg("451_parkMensRoom/gloryHole.jpg");
                nav.button({
                    "type": "btn",
                    "name": "gloryhole",
                    "left": 385,
                    "top": 158,
                    "width": 124,
                    "height": 218,
                    "image": "451_parkMensRoom/gloryhole.png"
                }, 451);
                nav.buildnav([451]);
            }
            break;
        case "mirror":
            nav.killall();
            nav.bg("451_parkMensRoom/mirror.jpg", "451_parkMensRoom/mirror.jpg");
            cl.displayMirror();
            chat(3, 451);
            break;
        case "insert":
            chat(1, 451);
            break;
        case "insert_1":
            nav.killall();
            nav.bg("451_parkMensRoom/bj1.jpg");
            if (sc.getstep("missy") < 2)
                chat(6, 451);
            else
                chat(7, 451);
            break;
        case "gloryhole":
            chat(2, 451);
            break;
        case "bj2":
            nav.bg("451_parkMensRoom/bj2.jpg");
            break;
        default:
            break;
    }
};

room451.chatcatch = function (callback) {
    switch (callback) {
        case "reloadRoom":
            char.room(451);
            break;
        case "cleanface":
            cl.c.cumface = false;
            cl.c.lips = "thin";
            cl.c.makeup = "n";
            cl.displayMirror();
            cl.display();
            break;
        default:
            break;
    }
};

room451.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I can't go out like this. I need my " + g.internal + ". ",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I'm not going to stick my dick in that...",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I'm not going put my mouth there.",
            button: []
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Looking good",
            button: [
                { chatID: 4, text: "Clean your face", callback: "cleanface" },
                { chatID: -1, text: "...", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "Looking good",
            button: [
                { chatID: -1, text: "...", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "It's locked. I guess someone is in there.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "cecilia",
            text: "Hey stanger, I love getting my mouth filled with cock. Can I suck yours?",
            button: [
                { chatID: 8, text: "Sure, why not", callback: "bj2" }
            ]
        },
        {
            chatID: 7,
            speaker: "cecilia",
            text: "Oh " + sc.n("me") + ", I'm so happy you're here. Want to shove you cock down my throat?",
            button: [
                { chatID: -1, text: "Yes I do ", callback: "reloadRoom" }
            ]
        },
    ];

    return cArray[chatID];
}