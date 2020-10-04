//test room

var room901 = {};

room901.main = function () {
    nav.button({
        "type": "btn",
        "name": "changeroom",
        "left": 385,
        "top": 273,
        "width": 665,
        "height": 151,
        "title": "Change Room",
        "image": "901_pool/changeroom.png"
    }, 901);
    if (sc.swimgirl().thisRoom) {
        nav.button({
            "type": "btn",
            "name": "girl",
            "left": 87,
            "top": 453,
            "width": 626,
            "height": 627,
            "title": "Dat Booty!!!",
            "image": "901_pool/girl1.png"
        }, 901);
    }
    else {
        nav.button({
            "type": "btn",
            "name": "boy",
            "left": 1570,
            "top": 334,
            "width": 127,
            "height": 342,
            "title": "Soooo tan",
            "image": "901_pool/boy1.png"
        }, 901);
    }
    nav.buildnav([0]);
   
};

room901.btnclick = function (name) {
    switch (name) {
        case "girl":
            nav.killbutton("girl");
            nav.button({
                "type": "img",
                "name": "girl",
                "left": 651,
                "top": 0,
                "width": 816,
                "height": 1080,
                "image": "901_pool/girl2.png"
            }, 901);
            break;
        case "boy":
            nav.killbutton("boy");
            nav.button({
                "type": "img",
                "name": "boy",
                "left": 864,
                "top": 0,
                "width": 552,
                "height": 1080,
                "image": "901_pool/boy2a.png"
            }, 901);
            break;
        case "changeroom":
            nav.killbutton("boy");
            nav.killbutton("girl");
            nav.killbutton("changeroom");
            nav.bg("901_pool/bathroom.jpg");
            nav.button({
                "type": "btn",
                "name": "bboy",
                "left": 1339,
                "top": 534,
                "width": 358,
                "height": 546,
                "image": "901_pool/bboy.png"
            }, 901);
            nav.button({
                "type": "btn",
                "name": "bgirl",
                "left": 301,
                "top": 534,
                "width": 358,
                "height": 546,
                "image": "901_pool/bgirl.png"
            }, 901);
            nav.buildnav([901]);
            break;
        case "bboy":

            break;
        case "bgirl":

            break;
        default:
            break;
    }
};

room901.chatcatch = function (callback) {
    
};


room901.chat = function(chatID){
    
    return null;
}