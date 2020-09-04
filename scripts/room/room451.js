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
            if ((g.dt.getDay() === 0 || g.dt.getDay() === 6) && g.hourBetween(8, 17) && sc.getstep("cecilia") === 0) {
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
            if ((g.dt.getDay() === 0 || g.dt.getDay() === 6) && g.hourBetween(8, 17) && sc.getstep("cecilia") === 0) {
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
            g.pass = 451;
            char.room(27);
            //nav.killall();
            //nav.bg("451_parkMensRoom/mirror.jpg", "451_parkMensRoom/mirror.jpg");
            //zcl.displayMirror();
            //chat(3, 451);
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
        case "bj4":
            nav.killbutton("bj4");
            nav.button({
                "type": "img",
                "name": "bjx",
                "left": 725,
                "top": 103,
                "width": 890,
                "height": 874,
                "image": "451_parkMensRoom/bj3.png"
            }, 451);
            nav.button({
                "type": "btn",
                "name": "bj5",
                "left": 975,
                "top": 840,
                "width": 405,
                "height": 905,
                "image": "451_parkMensRoom/cock.png"
            }, 451);
            break;
        case "bj5":
            nav.killbutton("bj5");
            nav.button({
                "type": "btn",
                "name": "bj6",
                "left": 975,
                "top": 770,
                "width": 405,
                "height": 905,
                "image": "451_parkMensRoom/cock.png"
            }, 451);
            break;
        case "bj6":
            nav.killbutton("bj6");
            nav.button({
                "type": "btn",
                "name": "bj7",
                "left": 975,
                "top": 680,
                "width": 405,
                "height": 905,
                "image": "451_parkMensRoom/cock.png"
            }, 451);
            break;
        case "bj7":
            nav.killbutton("bj7");
            nav.killbutton("bjx");
            nav.bg("451_parkMensRoom/bj0.jpg");
            nav.button({
                "type": "img",
                "name": "bj8",
                "left": 665,
                "top": 0,
                "width": 1017,
                "height": 1080,
                "image": "451_parkMensRoom/bj8.gif"
            }, 451);
            g.roomTimeout = setTimeout(function () { chat(10, 451); }, 3000);
            
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
            zcl.displayMirror();
            cl.display();
            break;
        case "bj2":
            nav.bg("451_parkMensRoom/bj2.jpg");
            break;
        case "bj3":
            if (cl.c.chastity === null) {
                nav.button({
                    "type": "btn",
                    "name": "bj4",
                    "left": 725,
                    "top": 103,
                    "width": 890,
                    "height": 874,
                    "image": "451_parkMensRoom/bj3.png"
                }, 451);
            }
            else {
                nav.bg("451_parkMensRoom/bj2a.jpg");
                chat(9, 451);
            }
            break;
        case "bj8":
            nav.killbutton("bj8");
            nav.bg("451_parkMensRoom/bj8.jpg");
            break;
        case "bj9":
            nav.button({
                "type": "img",
                "name": "bj9",
                "left": 665,
                "top": 0,
                "width": 1017,
                "height": 1080,
                "image": "451_parkMensRoom/bj9.gif"
            }, 451);
            g.roomTimeout = setTimeout(function () { chat(12, 451); }, 2400);
            break;
        case "bj10":
            nav.killbutton("bj9");
            nav.bg("451_parkMensRoom/bj10.jpg");
            break;
        case "bj11":
            char.addtime(60);
            g.mod("receiveOralMale", 1);
            cl.doCum(false);
            char.room(451);
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
                { chatID: 8, text: "huh?", callback: "bj2" }
            ]
        },
        {
            chatID: 7,
            speaker: "cecilia",
            text: "Oh " + sc.n("me") + ", I'm so happy you're here. Want to shove you cock down my throat?",
            button: [
                { chatID: 8, text: "Hmmmm", callback: "bj2" }
            ]
        },
        {
            chatID: 8,
            speaker: "cecilia",
            text: "Shove it in, and don't be nice.",
            button: [
                { chatID: -1, text: "Here it comes", callback: "bj3" },
                { chatID: -1, text: "Oh, I'd rather not.", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 9,
            speaker: "cecilia",
            text: "Awww you're all locked up. Maybe later cutie!",
            button: [
                { chatID: -1, text: "I guess no blowjob for me.", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 10,
            speaker: "cecilia",
            text: "GLUK GLUK GLUK",
            button: [
                { chatID: 11, text: "Cum down her throat", callback: "bj8" }
            ]
        },
        {
            chatID: 11,
            speaker: "cecilia",
            text: "!!!",
            button: [
                { chatID: -1, text: "....", callback: "bj9" }
            ]
        },
        {
            chatID: 12,
            speaker: "cecilia",
            text: "GULP",
            button: [
                { chatID: 13, text: "....", callback: "bj10" }
            ]
        },
        {
            chatID: 13,
            speaker: "cecilia",
            text: "I love you cum! Thank you sexy!",
            button: [
                { chatID: -1, text: "[Finish up]", callback: "bj11" }
            ]
        },
    ];

    return cArray[chatID];
}