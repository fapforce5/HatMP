//Girl GloryHole Broom

var room600 = {};

room600.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "fat",
            "left": 300,
            "top": 100,
            "width": 100,
            "height": 100,
            "image": "600_body/fat.png"
        },
        {
            "type": "btn",
            "name": "man",
            "left": 500,
            "top": 100,
            "width": 100,
            "height": 100,
            "image": "600_body/MAN.png"
        },
        {
            "type": "btn",
            "name": "a",
            "left": 700,
            "top": 100,
            "width": 100,
            "height": 100,
            "image": "600_body/ACUP.png"
        },
        {
            "type": "btn",
            "name": "b",
            "left": 900,
            "top": 100,
            "width": 100,
            "height": 100,
            "image": "600_body/BCUP.png"
        },
        {
            "type": "btn",
            "name": "c",
            "left": 1100,
            "top": 100,
            "width": 100,
            "height": 100,
            "image": "600_body/DDCUP.png"
        },
        {
            "type": "btn",
            "name": "d",
            "left": 1300,
            "top": 100,
            "width": 100,
            "height": 100,
            "image": "600_body/DDCUP.png"
        },
        {
            "type": "btn",
            "name": "m",
            "left": 300,
            "top": 300,
            "width": 100,
            "height": 100,
            "image": "600_body/MANLEG.png"
        },
        {
            "type": "btn",
            "name": "f",
            "left": 500,
            "top": 300,
            "width": 100,
            "height": 100,
            "image": "600_body/WOMANLEG.png"
        },
        {
            "type": "btn",
            "name": "hairy",
            "left": 300,
            "top": 500,
            "width": 100,
            "height": 100,
            "image": "600_body/hairy.png"
        },
        {
            "type": "btn",
            "name": "nohair",
            "left": 500,
            "top": 500,
            "width": 100,
            "height": 100,
            "image": "600_body/noHair.png"
        },
        {
            "type": "btn",
            "name": "cl",
            "left": 300,
            "top": 700,
            "width": 100,
            "height": 100,
            "image": "600_body/cock.png"
        },
        {
            "type": "btn",
            "name": "cm",
            "left": 500,
            "top": 700,
            "width": 100,
            "height": 100,
            "image": "600_body/cock.png"
        },
        {
            "type": "btn",
            "name": "cs",
            "left": 700,
            "top": 700,
            "width": 100,
            "height": 100,
            "image": "600_body/cock.png"
        },
        {
            "type": "btn",
            "name": "cs",
            "left": 900,
            "top": 700,
            "width": 100,
            "height": 100,
            "image": "600_body/cock.png"
        },
        {
            "type": "btn",
            "name": "ct",
            "left": 900,
            "top": 700,
            "width": 100,
            "height": 100,
            "image": "600_body/cock.png"
        },
        {
            "type": "btn",
            "name": "cv",
            "left": 1100,
            "top": 700,
            "width": 100,
            "height": 100,
            "image": "600_body/cock.png"
        },
        {
            "type": "btn",
            "name": "cc",
            "left": 1300,
            "top": 700,
            "width": 100,
            "height": 100,
            "image": "600_body/cock.png"
        }

    ];

    var navList = [0, 8];


    $.each(btnList, function (i, v) {
        nav.button(v, 600);
    });

    nav.buildnav(navList);
};


room600.btnclick = function (name) {
    if (name === "fat" || name === "man" || name === "a" || name === "b" || name === "c" || name === "d")
        cl.c.chest = name;
    if (name === "m" || name === "f")
        cl.c.leg = name;
    if (name === "hairy")
        cl.c.bodyhair = "hairy";
    if (name === "nohair")
        cl.c.bodyhair = null;
    if (name === "cl" || name === "cm" || name === "cs" || name === "cv" || name === "cc" || name === "ct")
        cl.c.cock = name;
    cl.display();
};

room600.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room600.chat = function(chatID){
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
    return cArray[chatID];
};