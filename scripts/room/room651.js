//Room name
var room651 = {};
room651.main = function () {
    if (g.pass === "651_follow") {
        nav.bg("651_wackHallway/651_boothCandyBack.png");
        chat(1, 651);
    }
    else {
        var btnList = [
            //{
            //    "type": "btn",
            //    "name": "employee",
            //    "left": 548,
            //    "top": 447,
            //    "width": 161,
            //    "height": 293,
            //    "image": "651_folder/employee.png"
            //},
            {
                "type": "btn",
                "name": "door1",
                "left": 676,
                "top": 353,
                "width": 121,
                "height": 487,
                "image": "651_wackHallway/door1.png"
            },
            {
                "type": "btn",
                "name": "door2",
                "left": 914,
                "top": 163,
                "width": 261,
                "height": 903,
                "image": "651_wackHallway/door2.png"
            },
            {
                "type": "btn",
                "name": "door3",
                "left": 1397,
                "top": 0,
                "width": 523,
                "height": 1080,
                "image": "651_wackHallway/door3.png"
            }
        ];
        var navList = [650];
        $.each(btnList, function (i, v) {
            nav.button(v, 651);
        });
        nav.buildnav(navList);
    }
};

room651.btnclick = function (name) {
    switch (name) {
        case "door1":
        case "door2":
        case "door3":
            chat(0, 651);
            break;
        default:
            break;
    }
};

room651.chatcatch = function (callback) {
    switch (callback) {
        case "onDuty":
            sc.setstep("tiffany", 2);
            g.pass = "new";
            char.room(661);
            break;
        case "changePic":
            nav.bg("651_wackHallway/651_boothCandyBack1.png");
            //651_boothCandyBack1.png
            break;
        default:
            break;
    }
};

room651.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Only losers and perverts go in there.",
            button: []
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: sc.n("candy") + " are you licking the cum‽",
            button: [
                { chatID: 2, text: "....", callback: "changePic" }
            ]
        },
        {
            chatID: 2,
            speaker: "candy",
            text: "Yes, hehe. I was seeing if it was someone I know.",
            button: [
                { chatID: 3, text: "....", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "So... anyone you know?",
            button: [
                { chatID: 4, text: "....", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "candy",
            text: "No.... I thought it may be Bryce's. It tastes the same, but it's a bit too thick for him.",
            button: [
                { chatID: 5, text: "....", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "I remember it was always so weirdly thin and runny, and every time he came he always " +
                "made shooter pistols with his fingers... Bryce was a weird dude.",
            button: [
                { chatID: 6, text: "....", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "candy",
            text: "But he knew how to work it, it's the only reason I would sleep with him. That and his big pecs. So " +
                "is this the guy that's going to watch for the booths for us?",
            button: [
                { chatID: 7, text: "....", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "tiffany",
            text: "Yeah, " + sc.n("missy") + " sent him over. I'm going to take him to the back so he can watch the booths. ",
            button: [
                { chatID: -1, text: "[Follow " + sc.n("tiffany") + " behind the Employee's Only' Door]", callback: "onDuty" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};