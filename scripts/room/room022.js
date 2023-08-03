//Pee - not used right now
var room22 = {};
room22.main = function () {
    char.changeMenu("body", false, true);
    $('.char-modBtn[data-t="p"]').click();
    switch (g.pass) {
        case 12:
            nav.bg("22_toilet/12.jpg");
            break;
        case 201:
            nav.bg("22_toilet/201.jpg");
            break;
        case 451:
        case 452:
            nav.bg("22_toilet/451.jpg");
            break;
        case 727:
            nav.bg("22_toilet/727.jpg");
            break;
        default:
            g.pass = 451;
            nav.bg("22_toilet/451.jpg");
            break;
    }
    var btnList = [
        {
            "type": "btn",
            "name": "toilet",
            "left": 801,
            "top": 54,
            "width": 507,
            "height": 1026,
            "image": "22_toilet/toilet.png"
        }
    ];
    var navList = [g.pass];
    $.each(btnList, function (i, v) {
        nav.button(v, 22);
    });
    nav.buildnav(navList);
};

room22.btnclick = function (name) {
    switch (name) {
        case "toilet":
            var peecock;
            if (gv.get("bladder") < .02)
                chat(0, 22);
            else {
                nav.killall();
                if (g.sissy[22].ach) {
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
                        case 727:
                            nav.bg("22_toilet/s_727.jpg");
                            break;
                        default:
                            g.pass = 451;
                            nav.bg("22_toilet/s_451.jpg");
                            break;
                    }

                    if (cl.c.chastity === null)
                        peecock = "s_hairy.png";
                    else {
                        if (cl.c.chastity === "metal")
                            peecock = "s_metal.png";
                        else if (cl.c.chastity === "cage")
                            peecock = "s_cage.png";
                        else
                            peecock = "s_pink.png";
                    }
                    nav.button({
                        "type": "img",
                        "name": "cock",
                        "left": 722,
                        "top": 0,
                        "width": 698,
                        "height": 1080,
                        "image": "22_toilet/" + peecock
                    }, 22);
                }
                else {
                    if (cl.c.chastity === null) {
                        if (cl.getBodyHair() !== null)
                            peecock = "hairy.png";
                        else
                            peecock = "shaved.png";
                    }
                    else {
                        if (cl.c.chastity === "metal")
                            peecock = "metal.png";
                        else if (cl.c.chastity === "cage")
                            peecock = "cage.png";
                        else
                            peecock = "pink.png";
                    }
                    nav.button({
                        "type": "img",
                        "name": "cock",
                        "left": 755,
                        "top": 480,
                        "width": 600,
                        "height": 600,
                        "image": "22_toilet/" + peecock
                    }, 22);
                }
            }
            g.roomTimeout = setTimeout(function () { chat(1, 22); }, 1000);
            break;
        default:
            break;
    }
};

room22.chatcatch = function (callback) {
    switch (callback) {
        case "finishPeepee":
            gv.set("bladder", 0);
            cl.display();
            char.room(g.pass);
            break;
        default:
            break;
    }
};

room22.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I don't have to pee at all. Maybe if I drank something I would pee.",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Yep, that's my pee pee",
            button: [
                { chatID: -1, text: "Zip up", callback: "finishPeepee" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};