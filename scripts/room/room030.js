//Room name
var room30 = {};
room30.main = function () {
    if (!g.isNight()) {
        if (sc.getTimeline("lola").roomID === 13) {
            if (sc.getstep("lola") === 8) {
                nav.bg("30_peek/lola9.jpg");
                chat(7, 30);
            }
            else {
                var overhear = Math.floor(Math.random() * 5) === 0;
                if (!gv.get("puter"))
                    overhear = !(Math.floor(Math.random() * 3) === 0);
                if (overhear) {
                    nav.bg("30_peek/password.jpg");
                    chat(2, 30);
                }
                else
                    nav.bg("30_peek/pillow.jpg");
            }
        }
    }
    var btnList = [
        {
            "type": "btn",
            "name": "window",
            "left": 240,
            "top": 0,
            "width": 1449,
            "height": 1080,
            "image": "30_peek/window.png"
        }
    ];
    var navList = [0, 29];
    $.each(btnList, function (i, v) {
        nav.button(v, 30);
    });
    nav.buildnav(navList);
};

room30.btnclick = function (name) {
    switch (name) {
        case "window":
            if (g.hourBetween(22, 25) || g.hourBetween(0, 6))
                char.room(13);
            else if (sc.getTimeline("lola").roomID === 13)
                chat(1, 30);
            else
                char.room(13);
            break;
        default:
            break;
    }
};

room30.chatcatch = function (callback) {
    switch (callback) {
        case "dumbass":
            nav.killall();
            nav.bg("13_sisterRoom/013_angryCaught.jpg");
            chat(6, 30);
            break;
        case "angryout":
            sc.modLevel("eva", -20, 100);
            sc.modLevel("lola", -10, 100);
            char.room(29);
            break;
        case "enter":
            char.room(13);
            break;
        default:
            break;
    }
};

room30.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: ".... in dev",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "THEY'RE RIGHT THERE DUMBASS. I can't sneak in now.",
            button: [
                { chatID: -1, text: "Oh yeah, I shouldn't go in there.", callback: "" },
                { chatID: -1, text: "Fuck it. I'm going in anyway!", callback: "dumbass" }
            ]
        },
        {
            chatID: 2,
            speaker: "lola",
            text: ".... always forget",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "eva",
            text: "I have to get my report done. Please just tell me again.",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "lola",
            text: "The password is unicorn. You know it's my favorite animal.",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "eva",
            text: "Thanks butthead! Was that sooooo hard?",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "eva",
            text: "What the FUCK. Get out your pervert!",
            button: [
                { chatID: -1, text: "oh.. hahaha ... ok", callback: "angryout" }
            ]
        },
        {
            chatID: 7,
            speaker: "lola",
            text: sc.n("me") + "! ",
            button: [
                { chatID: 8, text: ".....hi", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "lola",
            text: "OMG Come in!",
            button: [
                { chatID: -1, text: "Sweet!", callback: "enter" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};