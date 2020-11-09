//Room name
var room31 = {};
room31.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "login",
            "left": 738,
            "top": 799,
            "width": 683,
            "height": 99,
            "image": "31_puter/login.png"
        }
    ];
    var navList = [13];
    $.each(btnList, function (i, v) {
        nav.button(v, 31);
    });
    nav.buildnav(navList);
};

room31.btnclick = function (name) {
    var i;
    switch (name.toString()) {
        case "login":
            var r0 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
            var r1 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
            var r2 = ["z", "x", "c", "v", "b", "n", "m"];
            for (i = 0; i < r0.length; i++) {
                nav.button({
                    "type": "btn",
                    "name": r0[i],
                    "left": 500 + (i * 110),
                    "top": 200,
                    "width": 100,
                    "height": 80,
                    "image": "31_puter/" + r0[i] + ".png"
                }, 31);
            }
            for (i = 0; i < r1.length; i++) {
                nav.button({
                    "type": "btn",
                    "name": r1[i],
                    "left": 550 + (i * 110),
                    "top": 290,
                    "width": 100,
                    "height": 80,
                    "image": "31_puter/" + r1[i] + ".png"
                }, 31);
            }
            for (i = 0; i < r2.length; i++) {
                nav.button({
                    "type": "btn",
                    "name": r2[i],
                    "left": 650 + (i * 110),
                    "top": 380,
                    "width": 100,
                    "height": 80,
                    "image": "31_puter/" + r2[i] + ".png"
                }, 31);
            }
            nav.button({
                "type": "btn",
                "name": "del",
                "left": 882,
                "top": 470,
                "width": 300,
                "height": 80,
                "image": "31_puter/del.png"
            }, 31);
            g.internal = "";
            break;
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "h":
        case "i":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "o":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "u":
        case "v":
        case "w":
        case "x":
        case "y":
        case "z":
            if (g.internal.length < 16)
                g.internal += name;
            room31.btnclick("drawString");
            break;
        case "del":
            if (g.internal.length > 0)
                g.internal = g.internal.slice(0, -1);
            room31.btnclick("drawString");
            break;
        case "drawString":
            nav.killbutton("password");

            if (g.internal === "unicorn") {
                nav.killall();
                nav.t({
                    type: "img",
                    name: "password",
                    left: 750,
                    top: 810,
                    font: 60,
                    hex: "#000000",
                    text: g.internal
                }, 31);
                nav.button({
                    "type": "btn",
                    "name": "enter",
                    "left": 882,
                    "top": 470,
                    "width": 300,
                    "height": 80,
                    "image": "31_puter/enter.png"
                }, 31);
            }
            else {
                nav.t({
                    type: "img",
                    name: "password",
                    left: 750,
                    top: 810,
                    font: 60,
                    hex: "#000000",
                    text: g.internal
                }, 31);
            }
            break;
        case "enter":
            nav.killall();
            nav.bg("31_puter/bg1.jpg");
            var initList = [
                {
                    "type": "btn",
                    "name": "powerOff",
                    "left": 1530,
                    "top": 800,
                    "width": 160,
                    "height": 209,
                    "image": "9_computer/09_powerOff.png"
                },
                {
                    "type": "btn",
                    "name": "files",
                    "left": 477,
                    "top": 250,
                    "width": 157,
                    "height": 162,
                    "image": "9_computer/09_files.png"
                }];
            $.each(initList, function (i, v) {
                nav.button(v, 31);
            });
            break;
        case "1":
        case "2":
        case "3":
        case "4":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "bgimg",
                "left": 388,
                "top": 185,
                "width": 1383,
                "height": 859,
                "image": "31_puter/" + name + ".jpg"
            }, 31);

            nav.button({
                "type": "btn",
                "name": "files",
                "left": 1647,
                "top": 208,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 31);
            break;
        case "5":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "bgimg",
                "left": 388,
                "top": 185,
                "width": 1383,
                "height": 859,
                "image": "31_puter/" + name + ".jpg"
            }, 31);

            nav.button({
                "type": "btn",
                "name": "private",
                "left": 1647,
                "top": 208,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 31);
            break;
        case "powerOff":
            char.room(13);
            break;
        case "files":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "school",
                "left": 654,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/school.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "enter",
                "left": 477,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/up.png"
            }, 31);
            for (i = 1; i < 5; i++) {
                nav.button({
                    "type": "btn",
                    "name": i,
                    "left": 654 + (i * 177),
                    "top": 250,
                    "width": 157,
                    "height": 162,
                    "image": "31_puter/" + i + ".png"
                }, 31);
            }
            break;
        case "school":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "files",
                "left": 477,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/up.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "falseFolder",
                "left": 654,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/english.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "falseFolder",
                "left": 831,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/history.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "math",
                "left": 1008,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/math.png"
            }, 31);
            break;
        case "falseFolder":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "school",
                "left": 477,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/up.png"
            }, 31);

            break;
        case "math":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "private",
                "left": 654,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/private.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "school",
                "left": 477,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/up.png"
            }, 31);

            break;
        case "private":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "math",
                "left": 477,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/up.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "5",
                "left": 654,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/5.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "combo",
                "left": 831,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/combo.png"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "mylove",
                "left": 1008,
                "top": 250,
                "width": 157,
                "height": 162,
                "image": "31_puter/mylove.png"
            }, 31);
            break;
        case "combo":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "bg2",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "31_puter/bg2.jpg"
            });
            nav.t({
                type: "img",
                name: "c",
                left: 400,
                top: 250,
                font: 60,
                hex: "#000000",
                text: "Note to self: Locker room combo is 1, 8, 6"
            }, 31);
            nav.button({
                "type": "btn",
                "name": "private",
                "left": 1647,
                "top": 208,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 31);
            break;
        case "mylove":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "bg2",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "31_puter/bg2.jpg"
            });
            nav.t({
                type: "img",
                name: "c",
                left: 400,
                top: 250,
                font: 20,
                hex: "#000000",
                text: "To my secret love, <br/>" +
                    "I can't stop thinking about you. I know it's wrong, <br/>" +
                    "and you'll never return my feelings, but I have to get this out into the universe. </br> " +
                    "You're always on my mind, what do I do. I can't tell " + sc.n("eva") + " she'll <br/>" +
                    "just laugh at me and make fun of me. I should just give up and never tell you. <br/>" +
                    "Maybe one day we'll be together. "
            }, 31);
            nav.button({
                "type": "btn",
                "name": "private",
                "left": 1647,
                "top": 208,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 31);
            break;
        default:
            break;
    }
};

room31.chatcatch = function (callback) {
    switch (callback) {
        case "a":
            break;
        default:
            break;
    }
};

room31.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};