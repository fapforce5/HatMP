//Girl GloryHole Broom

var room454 = {};

room454.main = function () {
    var btnList = new Array();

    var navList = new Array();

    if (nav_roomPass === null)
        nav_roomPass = "man";

    if (nav_roomPass === "woman") {
        navList.push(453);
        nav_roomPass = { name: "stall3", room: "girl" };
        if (g.hourBetween(19, 24) && g.get("arousal") > 30 && Math.floor(Math.random() * 3) < 2) {
            btnList.push({
                "type": "btn",
                "name": "womanMouth",
                "left": 600,
                "top": 292,
                "width": 447,
                "height": 625,
                "image": "454_gHole/454_hole_girlMouth.png"
            });
        }
        else {
            btnList.push({
                "type": "btn",
                "name": "womanHole",
                "left": 600,
                "top": 292,
                "width": 447,
                "height": 625,
                "image": "454_gHole/454_hole.png"
            });
        }
    }
    else {
        navList.push(453);
        nav_roomPass = { name: "stall3", room: "men" };
        switch (Math.floor(Math.random() * 10)) {
            case 0:
                btnList.push({
                    "type": "btn",
                    "name": "manDick1",
                    "left": 600,
                    "top": 238,
                    "width": 405,
                    "height": 675,
                    "image": "454_gHole/454_hole_manDick1.png"
                });
                break;
            case 1:
                btnList.push({
                    "type": "btn",
                    "name": "manDick2",
                    "left": 600,
                    "top": 93,
                    "width": 1141,
                    "height": 961,
                    "image": "454_gHole/454_hole_manDick2.png"
                });
                break;
            case 2:
            case 3:
                btnList.push({
                    "type": "btn",
                    "name": "manDick3",
                    "left": 591,
                    "top": 292,
                    "width": 1289,
                    "height": 627,
                    "image": "454_gHole/454_hole_manDick3.png"
                });
                break;
            default:
                btnList.push({
                    "type": "btn",
                    "name": "manHole",
                    "left": 600,
                    "top": 292,
                    "width": 447,
                    "height": 625,
                    "image": "454_gHole/454_hole.png"
                });
                break;
        }

    }


    $.each(btnList, function (i, v) {
        nav.button(v, 454);
    });

    nav.buildnav(navList);
};

room454.btnclick = function (name) {
    switch (name) {
        case "womanHole":
            switch (Math.floor(Math.random() * 10)) {
                case 0:
                    nav.button({
                        "type": "video",
                        "name": "noop",
                        "left": 0,
                        "top": 0,
                        "width": 274,
                        "height": 274,
                        "image": "454_gHole/girlPee1.mp4"
                    }, 454);
                    chat(2, 454);
                    break;
                case 1:
                    nav.button({
                        "type": "video",
                        "name": "noop",
                        "left": 0,
                        "top": 0,
                        "width": 284,
                        "height": 262,
                        "image": "454_gHole/girlPee2.mp4"
                    }, 454);
                    chat(2, 454);
                    break;
                case 2:
                    nav.button({
                        "type": "video",
                        "name": "noop",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "454_gHole/girlPee3.mp4"
                    }, 454);
                    chat(2, 454);
                    break;
                case 3:
                    nav.button({
                        "type": "video",
                        "name": "noop",
                        "left": 0,
                        "top": 0,
                        "width": 1280,
                        "height": 720,
                        "image": "454_gHole/girlPee4.webm"
                    }, 454);
                    chat(2, 454);
                    break;
                default:
                    chat(1, 454);
            }
            break;
        case "womanMouth":
            if (Math.floor(Math.random() * 2) === 0) {
                nav.button({
                    "type": "video",
                    "name": "noop",
                    "left": 0,
                    "top": 0,
                    "width": 800,
                    "height": 600,
                    "image": "454_gHole/girlGlory1.webm"
                }, 454);
                chat(3, 454);
            }
            else {
                nav.button({
                    "type": "video",
                    "name": "noop",
                    "left": 0,
                    "top": 0,
                    "width": 320,
                    "height": 240,
                    "image": "454_gHole/girlGlory2.webm"
                }, 454);
                chat(3, 454);
            }
            break;
        case "manHole":
            switch (Math.floor(Math.random() * 6)) {
                case 0:
                    nav.button({
                        "type": "video",
                        "name": "noop",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "454_gHole/manPee1.webm"
                    }, 454);
                    chat(2, 454);
                    break;
                case 1:
                    nav.button({
                        "type": "video",
                        "name": "noop",
                        "left": 0,
                        "top": 0,
                        "width": 480,
                        "height": 480,
                        "image": "454_gHole/manPee2.webm"
                    }, 454);
                    chat(2, 454);
                    break;
                case 2:
                    nav.button({
                        "type": "video",
                        "name": "noop",
                        "left": 0,
                        "top": 0,
                        "width": 480,
                        "height": 480,
                        "image": "454_gHole/manPee3.webm"
                    }, 454);
                    chat(2, 454);
                    break;
                default:
                    chat(1, 454);
            }
            break;
        case "manDick1":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 550,
                "height": 366,
                "image": "454_gHole/manGlory1.mp4"
            }, 454);
            chat(5, 454);
            break;
        case "manDick2":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 526,
                "height": 280,
                "image": "454_gHole/manGlory2.mp4"
            }, 454);
            chat(5, 454);
            break;
        case "manDick3":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 500,
                "height": 290,
                "image": "454_gHole/manGlory3.mp4"
            }, 454);
            chat(6, 454);
            break;
        default:
            break;
    }
};

room454.chatcatch = function (callback) {
    switch (callback) {
        case "changeRoom":
            char.addtime(30);
            char.room(453);
            break;
        case "changeRoomHorney":
            char.addtime(30);
            char.room(453);
            g.mod("arousal", 5);
            break;
        case "womanMouth2":
            if (Math.floor(Math.random() * 2) === 0) {
                nav.button({
                    "type": "video",
                    "name": "noop",
                    "left": 0,
                    "top": 0,
                    "width": 720,
                    "height": 692,
                    "image": "454_gHole/girlGlory3.mp4"
                }, 454);
            }
            else {
                nav.button({
                    "type": "video",
                    "name": "noop",
                    "left": 0,
                    "top": 0,
                    "width": 906,
                    "height": 720,
                    "image": "454_gHole/girlGlory4.webm"
                }, 454);
            }
            break;
        case "womanMouth3":
            char.room(453);
            break;
        case "manMouth2White":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 250,
                "height": 320,
                "image": "454_gHole/manGlory5.mp4"
            }, 454);
            break;
        case "manMouth2Black":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 1280,
                "height": 720,
                "image": "454_gHole/manGlory4.webm"
            }, 454);
            break;
        case "manMouth3Face":
            nav.button({
                "type": "video",
                "name": "noop",
                "left": 0,
                "top": 0,
                "width": 400,
                "height": 212,
                "image": "454_gHole/manGlory6.mp4"
            }, 454);
            break;
        case "manMouth4Face":
            g.xxxx.head = "cum";
            cl.display();
            char.addtime(30);
            g.mod("arousal", 10);
            char.room(453);
            break;
        default:
            break;
    }
};

room454.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Nothing There",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Nothing There...",
            button: [
                { chatID: -1, text: "Close", callback: "changeRoom" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Stop Peeking (I'm Such a pervert....)",
            button: [
                { chatID: -1, text: "Close", callback: "changeRoomHorney" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Feels Good man...",
            button: [
                { chatID: 4, text: "Keep Thrusting", callback: "womanMouth2" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I came....",
            button: [
                { chatID: -1, text: "Put My dick back in my pants", callback: "womanMouth3" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "I soooo love having a dick in my mouth.",
            button: [
                { chatID: 7, text: "Keep Sucking that fat juicy strange cock", callback: "manMouth2White" }
            ]
        }, {
            chatID: 6,
            speaker: "me",
            text: "I soooo love having a dick in my mouth.",
            button: [
                { chatID: 7, text: "Keep Sucking that fat juicy strange cock", callback: "manMouth2Black" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "I think he's going to cum soon...",
            button: [
                { chatID: 8, text: "There's no way I'm swallowing that...", callback: "manMouth3Face" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "My face is all dirty with man cumm",
            button: [
                { chatID: -1, text: "close", callback: "manMouth4Face" }
            ]
        }
    ];

    return cArray[chatID];
}