//College

var room900 = {};

room900.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "collegeOfMath",
            "left": 1238,
            "top": 30,
            "width": 682,
            "height": 704,
            "image": "900_college/900_collegeOfMath.png"
        },
        {
            "type": "btn",
            "name": "studentCenter",
            "left": 92,
            "top": 0,
            "width": 1119,
            "height": 596,
            "image": "900_college/900_studentCenter.png"
        }
    ];

    var navList = [901, 0];

    if (sc.getstep("me") === 1)
        navList.unshift(902);

    $.each(btnList, function (i, v) {
        nav.button(v, 900);
    });

    nav.buildnav(navList);
};

room900.btnclick = function (name) {
    switch (name) {
        case "collegeOfMath":
            if(sc.getstep("me") === 1)
                char.room(901);
            else
                chat(0, 900);
            break;
        case "studentCenter":
            if (sc.getstep("me") === 1)
                chat(0, 900);
            else
                chat(2, 900);
            break;
        default:
            break;
    }
};

room900.chatcatch = function(callback){
    switch (callback) {
        case "":
            break;
        default:
            break;
    }
}

room900.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "I don't have time to go to the Student Center. I need to finish my math final",
            button: []
        },
        {
            chatID: 1,
            speaker: "me",
            text: "I've already finished my final. I don't have any classes there",
            button: []
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't need to sign up for classes right now.",
            button: []
        }
    ];

    return cArray[chatID];
}