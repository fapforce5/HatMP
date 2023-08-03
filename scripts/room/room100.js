//room
var room100 = {};

room100.main = function () {
    var btnList = new Array();
    var navList = new Array();
    
    if (g.hourBetween(6, 12) && sc.getstep("construction") > 0 && g.dt.getDay() !== 0) {
        if(gv.get("energy") < 60)
            navList = [101, 0];
        else
            navList = [103, 101, 0];
        btnList.push({
            "type": "btn",
            "name": "job",
            "left": 363,
            "top": 61,
            "width": 293,
            "height": 193,
            "image": "100_construction/100_building.png"
        });
        btnList.push({
            "type": "btn",
            "name": "trailer",
            "left": 1130,
            "top": 98,
            "width": 790,
            "height": 449,
            "image": "100_construction/100_trailer.png"
        });
    }
    else if (g.hourBetween(6, 17) && g.dt.getDay() !== 0) {
        navList = [101, 0];
        btnList.push({
            "type": "btn",
            "name": "trailer",
            "left": 1130,
            "top": 98,
            "width": 790,
            "height": 449,
            "image": "100_construction/100_trailer.png"
        });
    }
    else {
        if (!g.isNight()) {
            btnList.push({
                "type": "btn",
                "name": "security",
                "left": 651,
                "top": 35,
                "width": 795,
                "height": 1045,
                "image": "100_construction/security.png"
            });
        }
        nav.bg("100_construction/100_siteClosed.jpg", "100_construction/100_siteClosedNight.jpg");
        navList = [0];
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 100);
    });

    nav.buildnav(navList);
};

room100.btnclick = function (name) {
    switch (name) {
        case "trailer":
            char.room(101);
            break;
        case "job":
            if (gv.get("jobConstructionPay") === 0)
                chat(0, 100);
            else if (gv.get("energy") < 60)
                chat(1, 100);
            else if (!(cl.c.pants === "j" && (cl.c.shirt === "g" || cl.c.shirt === "c" || cl.c.shirt === "p" || cl.c.shirt === "w"))) {
                chat(2, 100);
            }
            else
                char.room(103);
            break;
        case "security":
            chat(3, 100);
            break;
        default:
            break;
    }
};

room100.chatcatch = function (callback) {
    switch (callback) {
        case "nap_1hour":
            break;
        default:
            break;
    }
};

room100.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I can't just walk onto a construction site.",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I'm to tired to work today.",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I have to wear jeans and a t-shirt to work. ",
            button: []
        },
        {
            chatID: 3,
            speaker: "!burlysecurity",
            text: "Site's closed on Sunday. Move along cutie pie. ",
            button: []
        }
    ];
    return cArray[chatID];
}