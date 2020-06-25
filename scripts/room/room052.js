//My Room
var room52 = {};
room52.main = function () {

    $('.room-topper').show();
    var btnList = [
        {
            "type": "btn",
            "name": "wardrobe",
            "left": 1745,
            "top": 242,
            "width": 175,
            "height": 605,
            "title": "Wardrobe",
            "image": "52_myroom/wardrobe.png",
            "night": "52_myroom/wardrobeNight.png",
        },
        {
            "type": "btn",
            "name": "Bed",
            "left": 480,
            "top": 481,
            "width": 592,
            "height": 495,
            "title": "Sleep",
            "image": "52_myroom/bed.png",
            "night": "52_myroom/bedNight.png",
        },
        {
            "type": "btn",
            "name": "nightStand",
            "left": 309,
            "top": 609,
            "width": 153,
            "height": 214,
            "title": "Toybox",
            "image": "52_myroom/nightstand.png",
            "night": "52_myroom/nightstandNight.png"
        },
        {
            "type": "btn",
            "name": "computer",
            "left": 1183,
            "top": 481,
            "width": 131,
            "height": 110,
            "image": "52_myroom/computer.png",
            "night": "52_myroom/computerNight.png"
        }
    ];

    var painting = g.get("painting");
    if (painting !== "") {
        btnList.push({
            "type": "img",
            "name": "painting",
            "left": 280,
            "top": 220,
            "width": 457,
            "height": 253,
            "image": "52_myroom/" + painting + ".png",
        });
    }

    navList = [51, 55];

    $.each(btnList, function (i, v) {
        nav.button(v, 52);
    });

    nav.buildnav(navList);

};

room52.btnclick = function (name) {
    switch (name) {
        case "computer":
            g.pass = 52;
            char.room(9);
            break;
        case "Bed":
            chat(0, 52);
            break;
        case "wardrobe":
            g.pass = 52;
            char.room(8);
            break;
        case "nightStand":
            g.pass = 52;
            char.room(19);
            break;
        default:
            break;
    }
};

room52.chatcatch = function (callback) {
    switch (callback) {
        case "nap_sleep":
            var sleepOutfit = 4;
            cl.c.shoes = cl.saveOutfit[sleepOutfit].shoes;
            cl.c.socks = cl.saveOutfit[sleepOutfit].socks;
            cl.c.pants = cl.saveOutfit[sleepOutfit].pants;
            cl.c.panties = cl.saveOutfit[sleepOutfit].panties;
            cl.c.bra = cl.saveOutfit[sleepOutfit].bra;
            cl.c.shirt = cl.saveOutfit[sleepOutfit].shirt;
            cl.c.dress = cl.saveOutfit[sleepOutfit].dress;
            cl.c.swimsuit = cl.saveOutfit[sleepOutfit].swimsuit;
            cl.c.accessories = cl.saveOutfit[sleepOutfit].accessories;
            cl.c.pj = cl.saveOutfit[sleepOutfit].pj;
            cl.display();
            char.newday();
            nav.killall();
            var btnList = [
                {
                    "type": "btn",
                    "name": "wardrobe",
                    "left": 1745,
                    "top": 242,
                    "width": 175,
                    "height": 605,
                    "title": "Wardrobe",
                    "image": "52_myroom/wardrobe.png",
                    "night": "52_myroom/wardrobeNight.png",
                },
                {
                    "type": "btn",
                    "name": "Bed",
                    "left": 480,
                    "top": 481,
                    "width": 592,
                    "height": 495,
                    "title": "Sleep",
                    "image": "52_myroom/bed.png",
                    "night": "52_myroom/bedNight.png",
                },
                {
                    "type": "btn",
                    "name": "nightStand",
                    "left": 309,
                    "top": 609,
                    "width": 153,
                    "height": 214,
                    "title": "Toybox",
                    "image": "52_myroom/nightstand.png",
                    "night": "52_myroom/nightstandNight.png"
                },
                {
                    "type": "btn",
                    "name": "computer",
                    "left": 1183,
                    "top": 481,
                    "width": 131,
                    "height": 110,
                    "image": "52_myroom/computer.png",
                    "night": "52_myroom/computerNight.png"
                }
            ];
            nav.bg("52_myroom/52_myroom.jpg", "52_myroom/52_myroom_night.jpg");
            $.each(btnList, function (i, v) {
                nav.button(v, 52);
            });
            
            break;
        case "o0":
        case "o1":
        case "o2":
        case "o3":
            var thisEntry = parseInt(callback[1]);
            cl.c.shoes = cl.saveOutfit[thisEntry].shoes;
            cl.c.socks = cl.saveOutfit[thisEntry].socks;
            cl.c.pants = cl.saveOutfit[thisEntry].pants;
            cl.c.panties = cl.saveOutfit[thisEntry].panties;
            cl.c.bra = cl.saveOutfit[thisEntry].bra;
            cl.c.shirt = cl.saveOutfit[thisEntry].shirt;
            cl.c.dress = cl.saveOutfit[thisEntry].dress;
            cl.c.swimsuit = cl.saveOutfit[thisEntry].swimsuit;
            cl.c.accessories = cl.saveOutfit[thisEntry].accessories;
            cl.c.pj = cl.saveOutfit[thisEntry].pj;
            cl.display();
            char.room(52);
            break;
        default:
            break;
    }
};

room52.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "How Long do you want to sleep?",
            button: [
                { chatID: 1, text: "Sleep till morning", callback: "nap_sleep" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "What to wear.",
            button: [
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[0].name, callback: "o0" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[1].name, callback: "o1" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[2].name, callback: "o2" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[3].name, callback: "o3" },
                { chatID: -1, text: "Get Up", callback: "o4" }
            ]
        },
        
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};