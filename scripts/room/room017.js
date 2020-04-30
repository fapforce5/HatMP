//mom closet
//c - 24 (money)
//b - 11 (lube)
var room17 = {};

room17.main = function(){

    var btnList = [
        {
            "type": "btn",
            "name": "c-1",
            "left": 355,
            "top": 161,
            "width": 79,
            "height": 318,
            "image": "17_motherCloset/1_2_shirt5.png"
        },
        {
            "type": "btn",
            "name": "c-2",
            "left": 385,
            "top": 161,
            "width": 79,
            "height": 318,
            "image": "17_motherCloset/1_2_shirt4.png"
        },
        {
            "type": "btn",
            "name": "c-3",
            "left": 415,
            "top": 161,
            "width": 79,
            "height": 318,
            "image": "17_motherCloset/1_2_shirt3.png"
        },
        {
            "type": "btn",
            "name": "c-4",
            "left": 445,
            "top": 161,
            "width": 79,
            "height": 318,
            "image": "17_motherCloset/1_2_shirt2.png"
        },
        {
            "type": "btn",
            "name": "c-5",
            "left": 475,
            "top": 161,
            "width": 79,
            "height": 318,
            "image": "17_motherCloset/1_2_shirt1.png"
        },

        {
            "type": "btn",
            "name": "c-6",
            "left": 326,
            "top": 623,
            "width": 87,
            "height": 332,
            "image": "17_motherCloset/1_3_pants4.png"
        },
        {
            "type": "btn",
            "name": "c-7",
            "left": 376,
            "top": 623,
            "width": 87,
            "height": 332,
            "image": "17_motherCloset/1_3_pants3.png"
        },
        {
            "type": "btn",
            "name": "c-8",
            "left": 406,
            "top": 623,
            "width": 87,
            "height": 332,
            "image": "17_motherCloset/1_3_pants2.png"
        },
        {
            "type": "btn",
            "name": "c-9",
            "left": 436,
            "top": 623,
            "width": 87,
            "height": 332,
            "image": "17_motherCloset/1_3_pants2.png"
        },
        {
            "type": "btn",
            "name": "c-10",
            "left": 466,
            "top": 623,
            "width": 87,
            "height": 332,
            "image": "17_motherCloset/1_3_pants1.png"
        },
        {
            "type": "btn",
            "name": "c-11",
            "left": 585,
            "top": 438,
            "width": 116,
            "height": 619,
            "image": "17_motherCloset/2_4_dress1.png"
        },
        {
            "type": "btn",
            "name": "c-12",
            "left": 645,
            "top": 438,
            "width": 116,
            "height": 619,
            "image": "17_motherCloset/2_4_dress2.png"
        },
        {
            "type": "btn",
            "name": "c-13",
            "left": 735,
            "top": 438,
            "width": 76,
            "height": 631,
            "image": "17_motherCloset/2_4_dress3.png"
        },
        {
            "type": "btn",
            "name": "c-14",
            "left": 790,
            "top": 438,
            "width": 76,
            "height": 631,
            "image": "17_motherCloset/2_4_dress4.png"
        },
        {
            "type": "btn",
            "name": "c-15",
            "left": 865,
            "top": 438,
            "width": 76,
            "height": 631,
            "image": "17_motherCloset/2_4_dress5.png"
        },
        {
            "type": "btn",
            "name": "c-16",
            "left": 1753,
            "top": 619,
            "width": 131,
            "height": 460,
            "image": "17_motherCloset/5_2_dress9.png"
        },
        {
            "type": "btn",
            "name": "c-17",
            "left": 1703,
            "top": 619,
            "width": 131,
            "height": 460,
            "image": "17_motherCloset/5_2_dress8.png"
        },
        {
            "type": "btn",
            "name": "c-18",
            "left": 1653,
            "top": 619,
            "width": 131,
            "height": 460,
            "image": "17_motherCloset/5_2_dress7.png"
        },
        {
            "type": "btn",
            "name": "c-19",
            "left": 1603,
            "top": 619,
            "width": 131,
            "height": 460,
            "image": "17_motherCloset/5_2_dress6.png"
        },
        {
            "type": "btn",
            "name": "c-20",
            "left": 1550,
            "top": 619,
            "width": 131,
            "height": 460,
            "image": "17_motherCloset/5_2_dress5.png"
        },
        {
            "type": "btn",
            "name": "c-21",
            "left": 1493,
            "top": 619,
            "width": 136,
            "height": 461,
            "image": "17_motherCloset/5_2_dress4.png"
        },
        {
            "type": "btn",
            "name": "c-22",
            "left": 1423,
            "top": 619,
            "width": 136,
            "height": 461,
            "image": "17_motherCloset/5_2_dress3.png"
        },
        {
            "type": "btn",
            "name": "c-23",
            "left": 1373,
            "top": 619,
            "width": 136,
            "height": 461,
            "image": "17_motherCloset/5_2_dress2.png"
        },
        {
            "type": "btn",
            "name": "c-24",
            "left": 1303,
            "top": 619,
            "width": 136,
            "height": 461,
            "image": "17_motherCloset/5_2_dress1.png"
        },
        {
            "type": "btn",
            "name": "box-1",
            "left": 754,
            "top": 59,
            "width": 180,
            "height": 88,
            "image": "17_motherCloset/2_1_box1.png"
        },
        {
            "type": "btn",
            "name": "box-2",
            "left": 566,
            "top": 59,
            "width": 188,
            "height": 88,
            "image": "17_motherCloset/2_1_box2.png"
        },
        {
            "type": "btn",
            "name": "box-3",
            "left": 754,
            "top": 184,
            "width": 180,
            "height": 88,
            "image": "17_motherCloset/2_2_box1.png"
        },
        {
            "type": "btn",
            "name": "box-4",
            "left": 566,
            "top": 184,
            "width": 188,
            "height": 88,
            "image": "17_motherCloset/2_2_box2.png"
        },
        {
            "type": "btn",
            "name": "box-5",
            "left": 754,
            "top": 305,
            "width": 180,
            "height": 88,
            "image": "17_motherCloset/2_3_box1.png"
        },
        {
            "type": "btn",
            "name": "box-6",
            "left": 566,
            "top": 305,
            "width": 188,
            "height": 88,
            "image": "17_motherCloset/2_3_box2.png"
        },
        {
            "type": "btn",
            "name": "box-7",
            "left": 1132,
            "top": 31,
            "width": 125,
            "height": 134,
            "image": "17_motherCloset/3_1_purse1.png"
        },
        {
            "type": "img",
            "name": "box-999",
            "left": 946,
            "top": 956,
            "width": 345,
            "height": 124,
            "image": "17_motherCloset/3_3_box1.png"
        },
        {
            "type": "btn",
            "name": "box-8",
            "left": 946,
            "top": 830,
            "width": 345,
            "height": 124,
            "image": "17_motherCloset/3_3_box1.png"
        },
        {
            "type": "btn",
            "name": "box-9",
            "left": 946,
            "top": 704,
            "width": 345,
            "height": 124,
            "image": "17_motherCloset/3_3_box1.png"
        },
        {
            "type": "btn",
            "name": "box-9",
            "left": 946,
            "top": 578,
            "width": 345,
            "height": 124,
            "image": "17_motherCloset/3_3_box1.png"
        },
        {
            "type": "btn",
            "name": "box-10",
            "left": 1302,
            "top": 50,
            "width": 194,
            "height": 181,
            "image": "17_motherCloset/4_1_box1.png"
        },
        {
            "type": "btn",
            "name": "box-11",
            "left": 1302,
            "top": 296,
            "width": 194,
            "height": 131,
            "image": "17_motherCloset/4_2_box1.png"
        },

        {
            "type": "btn",
            "name": "shoes",
            "left": 1515,
            "top": 63,
            "width": 355,
            "height": 521,
            "image": "17_motherCloset/5_1_shoes.png"
        },
        {
            "type": "btn",
            "name": "cock",
            "left": 1173,
            "top": 408,
            "width": 103,
            "height": 170,
            "image": "17_motherCloset/5_3_cock.png"
        }
    ];

    g.setflag("momRaidCloset");
    var navList = [14];
    g.roomTimeout = setTimeout(function () { g.pass = "closet"; char.room(21); }, 15000);

    $.each(btnList, function (i, v) {
        nav.button(v, 17);
    });

    nav.buildnav(navList);
}

room17.btnclick = function(name){
    var num = 0;
    var i;
    if (name.includes('-')) {
        var ss = name.split('-')
        if (ss.length === 2) {
            name = ss[0];
            num = parseInt(ss[1]);
        }
    }
    switch (name) {
        case "c":
            if (num === g.get("momClosetMoney")) {
                g.mod("money", (Math.floor(Math.random() * 20)) + 10);
                chat(2, 17);
                //set new money clothes
                g.set("momClosetMoney", Math.floor(Math.random() * 24) + 1);
                nav.button({
                    "type": "img",
                    "name": "money",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "17_motherCloset/money.png"
                }, 17);
            }
            else
                chat(1, 17);
            break;
        case "box":
            if (num === g.get("momClosetLube")) {
                chat(3, 17);
                //set new lube box
                g.set("momClosetLube", Math.floor(Math.random() * 11) + 1);
                inv.update("lube", true, 1);
                nav.button({
                    "type": "img",
                    "name": "lube",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "17_motherCloset/lube.png"
                }, 17);
            }
            else
                chat(1, 17);
            break;
        case "cock":
            chat(4, 17);
            break;
        case "shoes":
            chat(5, 17);
            break;
        default:
            break;
    }
};

room17.chatcatch = function (callback) {
    switch (callback) {
        case "killMoney":
            nav.killbutton("money");
            break;
        case "killLube":
            nav.killbutton("lube");
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
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
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
            text: "huh.... I guess I'll take some of my mom's lube. It may come in handy. I'm suppose I'm pretty weird. I'll put it in my nightstand. ",
            button: [{ chatID: -1, text: "Close", callback: "killLube" }]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "eeewwwww..... It's bad enough I'm face to face with my mom's dildo, but there's no way I'm touching that thing, even worse using that thing. ",
            button: []
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Those are my mom's shoes... Not sure what I would do with them... ",
            button: []
        },
        {
            chatID: 6,
            speaker: "me",
            text: "I would look soooo sexy in those, but my mom's feet are too small and I'm not cutting off my toes to be fabulous. ",
            button: []
        }
    ];
    return cArray[chatID];
};