//closet
//c - 24 (money)
//b - 11 (lube)
var room17 = {};

room17.main = function(){

    var btnList = [
        { x: 352, y: 574, w: 104, h: 49, i: 1 },
        { x: 603, y: 43, w: 121, h: 92, i: 2 },
        { x: 753, y: 91, w: 118, h: 44, i: 3 },
        { x: 933, y: 82, w: 135, h: 80, i: 4 },
        { x: 1066, y: 91, w: 151, h: 70, i: 5 },
        { x: 1263, y: 30, w: 152, h: 135, i: 6 },
        { x: 1647, y: 73, w: 140, h: 101, i: 7 },
        { x: 1491, y: 76, w: 153, h: 97, i: 8 },
        { x: 1269, y: 261, w: 149, h: 80, i: 9 },
        { x: 915, y: 691, w: 306, h: 63, i: 10 },
        { x: 916, y: 750, w: 305, h: 58, i: 11 },
        { x: 916, y: 804, w: 305, h: 60, i: 12 },
        { x: 917, y: 859, w: 304, h: 77, i: 13 },
        { x: 1265, y: 546, w: 154, h: 56, i: 14 },
        { x: 1266, y: 412, w: 188, h: 60, i: 15 },
        { x: 234, y: 573, w: 97, h: 49, i: 16 },
        { x: 244, y: 61, w: 143, h: 114, i: 17 },
        { x: 410, y: 103, w: 53, h: 71, i: 18 }
    ];
    var clothList = [
        { x: 959, y: 220, w: 226, h: 327, i: "a" },
        { x: 550, y: 540, w: 65, h: 439, i: "b" },
        { x: 605, y: 545, w: 70, h: 379, i: "c" },
        { x: 674, y: 580, w: 80, h: 424, i: "d" },
        { x: 748, y: 583, w: 71, h: 419, i: "e" },
        { x: 807, y: 547, w: 69, h: 410, i: "f" },
        { x: 1269, y: 660, w: 33, h: 348, i: "g" },
        { x: 1305, y: 668, w: 42, h: 358, i: "h" },
        { x: 1329, y: 693, w: 50, h: 341, i: "i" },
        { x: 1372, y: 671, w: 51, h: 398, i: "j" },
        { x: 1416, y: 656, w: 43, h: 347, i: "k" },
        { x: 1503, y: 717, w: 53, h: 273, i: "l" },
        { x: 1550, y: 703, w: 65, h: 303, i: "m" },
        { x: 1612, y: 686, w: 61, h: 320, i: "n" },
        { x: 1669, y: 685, w: 45, h: 345, i: "o" },
        { x: 1690, y: 687, w: 59, h: 336, i: "p" },
        { x: 831, y: 174, w: 41, h: 372, i: "q" },
        { x: 755, y: 177, w: 88, h: 354, i: "r" },
        { x: 686, y: 174, w: 67, h: 374, i: "s" },
        { x: 616, y: 180, w: 81, h: 364, i: "t" },
        { x: 542, y: 174, w: 98, h: 329, i: "u" },
    ];

    $.each(clothList, function (i, v) {
        nav.button({
            "type": "btn",
            "name": "c_" + v.i,
            "left": v.x,
            "top": v.y,
            "width": v.w,
            "height": v.h,
            "image": "17_motherCloset/" + v.i + ".png"
        }, 17);
    });
    $.each(btnList, function (i, v) {
        nav.button({
            "type": "btn",
            "name": "b_" + v.i,
            "left": v.x,
            "top": v.y,
            "width": v.w,
            "height": v.h,
            "image": "17_motherCloset/" + v.i + ".png"
        }, 17);
    });

    nav.button({
        "type": "btn",
        "name": "pic",
        "left": 927,
        "top": 577,
        "width": 100,
        "height": 97,
        "image": "17_motherCloset/i_pic.png"
    }, 17);

    nav.button({
        "type": "btn",
        "name": "dildo",
        "left": 1153,
        "top": 528,
        "width": 74,
        "height": 148,
        "image": "17_motherCloset/i_dildo.png"
    }, 17);
    g.internal = {
        c1: "c_" + clothList[g.rand(0, 9)].i,
        c2: "c_" + clothList[g.rand(9, clothList.length)].i,
        b1: "b_" + btnList[g.rand(0, 10)].i,
        b2: "b_" + btnList[g.rand(10, btnList.length)].i,
        panties: cl.hasClothing("panties", "c") ? "" : "c_" + clothList[g.rand(0, 18)].i
    };
    daily.set("momRaidCloset");
    var navList = [14];
    g.roomTimeout = setTimeout(function () { g.pass = "closet"; char.room(21); }, 9915000);

    nav.buildnav(navList);
}

room17.btnclick = function (name) {
    if (name.startsWith("c_")) {
        console.log(name + " " + g.internal.c2);
        if (name === g.internal.panties) {
            nav.button({
                "type": "img",
                "name": "panties",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "17_motherCloset/panties.png"
            }, 17);
            chat(8, 17);
        }
        else if (name === g.internal.c1 || name === g.internal.c2) {
            gv.mod("money", Math.floor(g.randn_bm() * 50));
        }
        nav.killbutton(name);
    }
    else if (name.startsWith("b_")) {
        console.log(name + " " + g.internal.b1);
        if (name === g.internal.b1 || name === g.internal.b2) {
            inv.addMulti("lube", Math.floor(g.randn_bm() * 5) + 1);
        }
        nav.killbutton(name);
    }
    else if (name === "pic") {
        chat(7, 17);
    }
    else if (name === "dildo") {
        chat(4, 17);
    }
    //    case "shoes":
    //        chat(5, 17);
    //        break;
};

room17.chatcatch = function (callback) {
    switch (callback) {
        case "killMoney":
            nav.killbutton("money");
            break;
        case "killLube":
            nav.killbutton("lube");
            break;
        case "pantiesKill":
            nav.killbutton("panties");
            break;
        case "pantiesTake":
            nav.killbutton("panties");
            cl.add("panties", "c");
            levels.mod("xdress", 33);
            break;
        default:
            break;
    }
};

room17.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Nothing here..",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Nothing here..",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Sweet, found some money!",
            button: [{ chatID: -1, text: "Close", callback: "killMoney" }]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "huh.... I guess I'll take some of my " + sc.n("landlord") + "'s lube. It may come in handy. I'm suppose I'm pretty weird. I'll put it in my nightstand. ",
            button: [{ chatID: -1, text: "Close", callback: "killLube" }]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "eeewwwww..... It's bad enough I'm face to face with my " + sc.n("landlord") + "'s dildo, but there's no way I'm touching that thing. " +
                "She'll blame it on " + sc.n("eva") + ". Find out it isn't her, then come after me. ",
            button: []
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Those are my " + sc.n("landlord") + "'s shoes... Not sure what I would do with them... ",
            button: []
        },
        {
            chatID: 6,
            speaker: "me",
            text: "I would look soooo sexy in those, but my " + sc.n("landlord") + "'s feet are too small and I'm not cutting off my toes to be fabulous. ",
            button: []
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "That's an old picture. ",
            button: []
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "You found your " + sc.n("landlord") + "'s panties. ",
            button: [
                { chatID: -1, text: "Stuff them in your pocket.", callback: "pantiesTake" },
                { chatID: -1, text: "Put them back.", callback: "pantiesKill" }
            ]
        }
    ];
    return cArray[chatID];
};