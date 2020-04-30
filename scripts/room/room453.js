//cood stall

var room453 = {};

room453.main = function () {
    var btnList = new Array();
    var navList = new Array();
    if (nav_roomPass.room === null) {
        nav_roomPass = { room: 'girl', name: 'stall1' };
        g.error("ROOM453", "nav_roomPass is null");
    }
    if (nav_roomPass.room === "girl") {
        navList.push(452);
        switch (nav_roomPass.name) {
            case "stall1":
                btnList.push({
                    "type": "img",
                    "name": "g",
                    "left": 286,
                    "top": 95,
                    "width": 379,
                    "height": 641,
                    "image": "453_stall/453_girl_stall1_graff.png"
                });
                break;
            case "stall3":
                btnList.push({
                    "type": "img",
                    "name": "g",
                    "left": 1559,
                    "top": 118,
                    "width": 337,
                    "height": 558,
                    "image": "453_stall/453_girl_stall3_graff.png"
                });
                btnList.push({
                    "type": "btn",
                    "name": "womanhole",
                    "left": 421,
                    "top": 410,
                    "width": 115,
                    "height": 215,
                    "image": "453_stall/453_hole.png"
                });
                break;
            case "stall5":
                btnList.push({
                    "type": "img",
                    "name": "g",
                    "left": 1634,
                    "top": 86,
                    "width": 277,
                    "height": 667,
                    "image": "453_stall/453_girl_stall5_graff.png"
                });
                break;
        }
    }
    else { //men's room
        navList.push(451);
        switch (nav_roomPass.name) {
            case "stall1":
                btnList.push({
                    "type": "img",
                    "name": "g",
                    "left": 1634,
                    "top": 29,
                    "width": 286,
                    "height": 708,
                    "image": "453_stall/453_man_stall1_graff.png"
                });
                break;
            case "stall2":
                btnList.push({
                    "type": "img",
                    "name": "g",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "453_stall/453_man_stall2_graff.png"
                });
                break;
            case "stall3":
                btnList.push({
                    "type": "img",
                    "name": "g",
                    "left": 189,
                    "top": 17,
                    "width": 384,
                    "height": 345,
                    "image": "453_stall/453_man_stall3_graff.png"
                });
                btnList.push({
                    "type": "img",
                    "name": "g",
                    "left": 1713,
                    "top": 383,
                    "width": 104,
                    "height": 301,
                    "image": "453_stall/453_man_stall31_graff.png"
                });
                btnList.push({
                    "type": "btn",
                    "name": "manhole",
                    "left": 421,
                    "top": 410,
                    "width": 115,
                    "height": 215,
                    "image": "453_stall/453_hole.png"
                });
                break;
        }
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 453);
    });

    nav.buildnav(navList);
};

room453.btnclick = function (name) {
    switch (name) {
        case "womanhole":
            //nav_roomPass = "woman";
            //char.room(454);
            chat(0, 453);
            break;
        case "manhole":
            chat(0, 453);
            //nav_roomPass = "man";
            //char.room(454);
            break;
        default:
            break;
    }
};

room453.chatcatch = function(callback){
    switch (callback) {
        case "":
            break;
        default:
            break;
    }
}

room453.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Nothing there yet.",
            button: []
        }
    ];

    return cArray[chatID];
}