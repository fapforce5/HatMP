//bedroom
var room185 = {};
room185.main = function () {
    if (g.pass === "endSleepyTime") {
        g.pass = null;
        chat(1, 185);
        return;
    }
    var btnList = [
        {
            "type": "btn",
            "name": "bed",
            "left": 472,
            "top": 379,
            "width": 1055,
            "height": 558,
            "image": "185_bedroom/bed.webp"
        },
        {
            "type": "btn",
            "name": "bathroom",
            "left": 166,
            "top": 0,
            "width": 195,
            "height": 732,
            "image": "185_bedroom/bathroom.webp"
        }
    ];
    if (!daily.get("whoreRoomWater")) {
        btnList.push({
            "type": "btn",
            "name": "water",
            "left": 1464,
            "top": 449,
            "width": 56,
            "height": 91,
            "image": "15_kitchen/water.png"
        });
    }
    var navList = [184, 215];
    $.each(btnList, function (i, v) {
        nav.button(v, 185);
    });
    nav.buildnav(navList);
};

room185.btnclick = function (name) {
    switch (name) {
        case "bathroom":
            char.room(184);
            break;
        case "bed":
            chat(0, 185);
            break;
        case "water":
            daily.set("whoreRoomWater");
            var thisBladder = gv.get("bladder");
            if (thisBladder > .98)
                chat(3, 15);
            else {
                nav.killbutton("water");
                nav.button({
                    "type": "img",
                    "name": "drink",
                    "left": 632,
                    "top": 233,
                    "width": 635,
                    "height": 614,
                    "image": "15_kitchen/drink.png"
                }, 15);
                gv.mod("bladder", .3);
                cl.display();
                if (thisBladder > .68)
                    chat(4, 15);
                else
                    chat(5, 15);
            }
            break;
        default:
            break;
    }
};

room185.chatcatch = function (callback) {
    switch (callback) {
        case "nap_sleep":
            g.pass = 185;
            char.room(28);
            break;
        case "o0":
        case "o1":
        case "o2":
        case "o3":
        case "o4":
            cl.wearSavedOutfit(callback[1]);
            char.room(185);
            break;
        default:
            break;
    }
};

room185.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Sleep until morning?",
            button: [
                { chatID: -1, text: "Sleep", callback: "nap_sleep" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "What to wear.",
            button: [
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[0].name, callback: "o0" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[1].name, callback: "o1" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[2].name, callback: "o2" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[3].name, callback: "o3" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[4].name, callback: "o4" },
                { chatID: -1, text: "Get Up", callback: "o5" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};