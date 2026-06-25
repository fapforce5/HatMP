//Room name
var room481 = {};
room481.main = function () {
    if (g.pass === "endSleepyTime") {
        g.pass = null;
        chat(1, 481);
    }
    var btnList = [
        {
            "type": "btn",
            "name": "bed",
            "left": 517,
            "top": 783,
            "width": 967,
            "height": 297,
            "image": "481_bedroom/bed.webp",
            "title": "Sleep"
        }
    ];
   
    $.each(btnList, function (i, v) {
        nav.button(v, 481);
    });
    nav.buildnav([480, 478, 479, 481, 482]);
};

room481.btnclick = function (name) {
    switch (name) {
        case "bed":
            chat(0, 481);
            break;
        default:
            break;
    }
};

room481.chatcatch = function (callback) {
    switch (callback) {
        case "sleep":
            g.pass = 481;
            char.room(28);
            break;
        case "o5":
            char.room(481);
            break;
        case "o0":
        case "o1":
        case "o2":
        case "o3":
        case "o4":
            var thisEntry = parseInt(callback[1]);
            var q;
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
            char.room(481);
            break;
        default:
            break;
    }
};

room481.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Sleep until morning",
            button: [
                { chatID: -1, text: "Sleep", callback: "sleep" },
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