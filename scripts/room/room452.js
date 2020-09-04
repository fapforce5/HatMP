//woman's stall

var room452 = {};

room452.main = function () {

    //if (true) {
    if (g.isNight()) {
        var navList = [450];
        nav.buildnav(navList);
    }
    else if (sc.getstep("bimbo") === 0) {
        nav.button({
            "type": "img",
            "name": "bimbo",
            "left": 924,
            "top": 22,
            "width": 670,
            "height": 1058,
            "image": "452_parkWomansRoom/bimbo1.png"
        }, 452);
        chat(2, 452);
    }
    else {
        var thisApp = cl.appearance();
        if (Math.floor(Math.random() * 4) === 0 && thisApp < 2) {
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 870,
                "top": 39,
                "width": 784,
                "height": 1041,
                "image": "452_parkWomansRoom/cop.png"
            }, 452);
            chat(5, 452);
        }
        else if (Math.floor(Math.random() * 3) === 0 && thisApp < 2) {
            nav.button({
                "type": "img",
                "name": "woman",
                "left": 1273,
                "top": 48,
                "width": 410,
                "height": 1057,
                "image": "452_parkWomansRoom/woman.png"
            }, 452);
            chat(1, 452);
        }
        else {
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

                var navList1 = [450];

                $.each(btnList, function (i, v) {
                    nav.button(v, 452);
                });

                nav.buildnav(navList1);
            }
            else {
                g.internal = canGoOut;
                chat(0, 452);
            }
        }
    }
};

room452.btnclick = function (name) {
    switch (name) {
        case "stall1":
        case "stall2":
        case "stall3":
        case "stall4":
        case "stall5":
            nav.killall();
            nav.buildnav([452]);
            nav.bg("451_parkMensRoom/stall.jpg");
            break;
        case "mirror":
            nav.killall();
            nav.bg("451_parkMensRoom/mirror.jpg", "451_parkMensRoom/mirror.jpg");
            zcl.displayMirror();
            chat(9, 452);
            break;
        default:
            break;
    }
};

room452.chatcatch = function(callback){
    switch (callback) {
        case "leave":
            nav.room(450);
            break;
        case "bimbo1":
            nav.killbutton("bimbo");
            nav.button({
                "type": "img",
                "name": "bimbo",
                "left": 924,
                "top": 22,
                "width": 670,
                "height": 1058,
                "image": "452_parkWomansRoom/bimbo2.png"
            }, 452);
            break;
        case "bimboLeave":
            nav.killbutton("bimbo");
            g.roomMapAccess(75, true, true);
            sc.setstep("bimbo", 1);
            nav.buildnav([450]);
            break;
        case "tojail":
            g.pass = "jail";
            char.room(425);
            break;
        case "woman1":
            nav.killbutton("woman")
            nav.button({
                "type": "img",
                "name": "woman",
                "left": 1273,
                "top": 48,
                "width": 410,
                "height": 1057,
                "image": "452_parkWomansRoom/woman1.png"
            }, 452);
            break;
        case "reloadRoom":
            char.room(452);
            break;
        case "cleanface":
            cl.c.cumface = false;
            cl.c.lips = "thin";
            cl.c.makeup = "n";
            zcl.displayMirror();
            cl.display();
            break;
        default:
            break;
    }
}

room452.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I can't go out like this. I need my " + g.internal + ". ",
            button: []
        },
        {
            chatID: 1,
            speaker: "random",
            text: "AAAAAAAAAaaaaaaaaaaaaaaaaa WHAT ARE YOU DOING IN HERE! ",
            button: [{ chatID: 7, text: "Oh....", callback: "woman1" }]
        },
        {
            chatID: 2,
            speaker: "bimbo",
            text: "AAAAAAAAAaaaaaaaaaaaaaaaaa ... ",
            button: [{ chatID: 3, text: "AAAaaaaa....", callback: "bimbo1" }]
        },
        {
            chatID: 3,
            speaker: "bimbo",
            text: "Oh, I'm sorry. I just didn't expect to have someone walk in on me. ",
            button: [{ chatID: 4, text: "Sorry, sorry, oh my, wrong bathroom", callback: "" }]
        },
        {
            chatID: 4,
            speaker: "bimbo",
            text: "Oh, I think you're in the right bathroom. I've got to run, but you should come by my house anytime honey. It's the big pink one. Bye",
            button: [{ chatID: -1, text: "Oh ok, sure, bye", callback: "bimboLeave" }]
        },
        {
            chatID: 5,
            speaker: "cop2",
            text: "Stop right there pervert. We've had reports of someone sneaking into the ladies room and it looks like we gotcha! You're coming with me to jail.",
            button: [{ chatID: 6, text: "What, no no no", callback: "" }]
        },
        {
            chatID: 6,
            speaker: "cop2",
            text: "And you know what they do to pretty boys like you in jail, right... hehehehe",
            button: [{ chatID: -1, text: "Ewwwww", callback: "tojail" }]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "GET OUT GET OUT GET OUT!!!",
            button: [{ chatID: -1, text: "Oh....", callback: "leave" }]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "Work in progress",
            button: [{ chatID: -1, text: "...", callback: "" }]
        },
        {
            chatID: 9,
            speaker: "me",
            text: "Looking good",
            button: [
                { chatID: 10, text: "Clean your face", callback: "cleanface" },
                { chatID: -1, text: "...", callback: "reloadRoom" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Looking good",
            button: [
                { chatID: -1, text: "...", callback: "reloadRoom" }
            ]
        }
    ];
    return cArray[chatID];
};