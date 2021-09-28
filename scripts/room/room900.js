//College

var room900 = {};

room900.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "building",
            "left": 525,
            "top": 403,
            "width": 864,
            "height": 582,
            "image": "900_college/college.png",
            "night": "900_college/collegeNight.png"
        }
    ];

    var navList = [0];

    if (sc.getstep("me") === 1)
        navList.unshift(902);

    $.each(btnList, function (i, v) {
        nav.button(v, 900);
    });

    nav.buildnav(navList);
};

room900.btnclick = function (name) {
    switch (name) {
        case "building":
            nav.killall();
            nav.bg("900_college/frontDesk.jpg");
            nav.button({
                "type": "btn",
                "name": "lib",
                "left": 978,
                "top": 326,
                "width": 185,
                "height": 324,
                "image": "900_college/lib.png"
            }, 900);
            nav.buildnav([0]);
            break;
        case "lib":
            if (inv.has("studentid")) {
                chat(2, 900);
            }
            else {
                chat(1, 900);
            }
            break;
        default:
            break;
    }
};

room900.chatcatch = function(callback){
    switch (callback) {
        case "showid":
            if (cl.c.hairColor === "blond") {
                alert("fix this - add event");

            }
            else
                chat(3, 900);
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
            speaker: "random",
            text: "Only students can enter the school library. You need to have a student ID. ",
            button: [
                { chatID: -1, text: "Drat!", callback: "resest" }
                ]
        },

        {
            chatID: 2,
            speaker: "random",
            text: "Only students can enter the school library. You need to have a student ID. ",
            button: [
                { chatID: -1, text: "Yes I do. [Show her your school ID]", callback: "showid" },
                { chatID: -1, text: "ok. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "You fucking liar. This person has blonde hair you have " + cl.c.hairColor + " hair. Fuck out of here. ",
            button: [
                { chatID: -1, text: "ok. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "random",
            text: "Work in progress.  ",
            button: [
                { chatID: -1, text: "ok. ", callback: "" }
            ]
        },
    ];

    return cArray[chatID];
}