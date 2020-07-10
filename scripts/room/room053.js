//Candy name
var room53 = {};
room53.main = function () {
    if (!inv.has("reddoor") && !sc.candy().thisRoom && !g.get("reddoor")) {
        var btnList = [
            {
                "type": "btn",
                "name": "1",
                "left": 1636,
                "top": 690,
                "width": 157,
                "height": 223,
                "image": "53_candy/1.png"
            },
            {
                "type": "btn",
                "name": "2",
                "left": 678,
                "top": 278,
                "width": 88,
                "height": 80,
                "image": "53_candy/2.png"
            },
            {
                "type": "btn",
                "name": "3",
                "left": 549,
                "top": 303,
                "width": 60,
                "height": 56,
                "image": "53_candy/3.png"
            },
            {
                "type": "btn",
                "name": "4",
                "left": 706,
                "top": 520,
                "width": 128,
                "height": 171,
                "image": "53_candy/4.png"
            },
            {
                "type": "btn",
                "name": "5",
                "left": 893,
                "top": 407,
                "width": 197,
                "height": 228,
                "image": "53_candy/5.png"
            },
            {
                "type": "btn",
                "name": "6",
                "left": 153,
                "top": 596,
                "width": 362,
                "height": 379,
                "image": "53_candy/6.png"
            },
            {
                "type": "btn",
                "name": "7",
                "left": 1000,
                "top": 327,
                "width": 86,
                "height": 78,
                "image": "53_candy/7.png"
            },
            {
                "type": "btn",
                "name": "8",
                "left": 904,
                "top": 345,
                "width": 101,
                "height": 60,
                "image": "53_candy/8.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 53);
        });
    } else if (sc.tiffany().thisRoom) {
        nav.button({
            "type": "btn",
            "name": "8",
            "left": 904,
            "top": 345,
            "width": 101,
            "height": 60,
            "image": "53_candy/8.png"
        }, 53);
    }

   
    if (sc.candy().thisRoom) {
        nav.bg("53_candy/53_candyRoom_night_sleep.jpg")
    }
    var navList = [51, 55];
    nav.buildnav(navList);
};

room53.btnclick = function (name) {
    name = name.toString();
    switch (name) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
            if (!g.get("reddoor")) {
                char.addtime(60);
                if (g.get("reddoorloc") === parseInt(name)) {
                    inv.add("reddoor");
                    nav.button({
                        "type": "img",
                        "name": "reddoor",
                        "left": 655,
                        "top": 218,
                        "width": 635,
                        "height": 479,
                        "image": "53_candy/reddoor.png"
                    }, 53);
                    chat(3, 53);
                }
                else {
                    chat(Math.floor(Math.random() * 2), 53);
                }
                g.setflag("reddoorloc");
            }
            else {
                chat(2, 53);
            }
            break;
        default:
            break;
    }
};

room53.chatcatch = function (callback) {
    switch (callback) {
        case "killkey":
            nav.killbutton("reddoor");
            char.room(53);
            break;
        default:
            break;
    }
};

room53.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Hmmmmm nothing here.. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Nothing here... you would think this would be overflowing with dildos.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't want to get caught... I'm not going to risk it again.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Oh nice, another key.. Hopefully this is the last time we do this cliché.",
            button: [
                { chatID: -1, text: "...", callback: "killkey" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};