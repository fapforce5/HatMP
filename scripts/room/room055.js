//Room name
var room55 = {};
room55.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "myroom",
            "left": 771,
            "top": 279,
            "width": 271,
            "height": 472,
            "image": "55_hallway/bedroom.png",
            "night": "55_hallway/bedroomNight.png"
        }
    ];
    if (sc.tiffany().roomID === 54) {
        btnList.push({
            "type": "btn",
            "name": "tif",
            "left": 430,
            "top": 130,
            "width": 166,
            "height": 868,
            "image": "55_hallway/tifOpen.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "tif",
            "left": 430,
            "top": 130,
            "width": 166,
            "height": 868,
            "image": "55_hallway/tif.png"
        });
    }
    if (sc.candy().roomID === 53) {
        btnList.push({
            "type": "btn",
            "name": "candy",
            "left": 1199,
            "top": 141,
            "width": 136,
            "height": 825,
            "image": "55_hallway/candyOpen.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "candy",
            "left": 1199,
            "top": 141,
            "width": 136,
            "height": 825,
            "image": "55_hallway/candy.png"
        });
    }
    if (sc.tiffany().roomID === 56 || sc.candy().roomID === 56) {
        btnList.push({
            "type": "btn",
            "name": "bathroom",
            "left": 1432,
            "top": 0,
            "width": 461,
            "height": 1080,
            "image": "55_hallway/bathroom.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "bathroom",
            "left": 1432,
            "top": 0,
            "width": 461,
            "height": 1080,
            "image": "55_hallway/bathroomOpen.png"
        });
    }
    var navList = [51, 52, 53, 54, 56];
    $.each(btnList, function (i, v) {
        nav.button(v, 55);
    });
    nav.buildnav(navList);
};

room55.btnclick = function (name) {
    switch (name) {
        case "myroom":
            char.room(52);
            break;
        case "candy":
            char.room(53);
            break;
        case "tif":
            char.room(54);
            break;
        case "bathroom":
            char.room(56);
            break;
        default:
            break;
    }
};

room55.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room55.chat = function (chatID) {
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