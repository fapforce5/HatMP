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
            nav.killall();
            nav.bg("651_wackHallway/661_interior.jpg");
            nav.button({
                "type": "btn",
                "name": "pay",
                "left": 961,
                "top": 164,
                "width": 642,
                "height": 630,
                "image": "651_wackHallway/hole.png"
            }, 651);

            //chat(0, 651);
            break;
        case "pay":
            chat(8, 651);
            break;
        default:
            break;
    }
};

room651.chatcatch = function (callback) {
    switch (callback) {
        case "onDuty":
            //sc.setstep("tiffany", 2);
            g.pass = "new";
            char.room(661);
            break;
        case "changePic":
            nav.bg("651_wackHallway/651_boothCandyBack1.png");
            //651_boothCandyBack1.png
            break;
        case "reset":
            char.room(651);
            break;
        case "pay50":
            if (gv.get("money") < 50)
                chat(9, 651);
            else {
                gv.mod("money", -50);
                nav.killbutton("pay");
                nav.bg("651_wackHallway/jo1.jpg");
                chat(10, 651);
            }
            break;
        case "jo2":
            nav.bg("651_wackHallway/jo2.jpg");
            //if (sc.getstep("missy") > 5)
            //    chat(11, 651);
            //else
                chat(12, 651);
            break;
        case "checkjo2":
            if (cl.c.chastity === null)
                chat(14, 651);
            else
                chat(13, 651);
            break;
        case "jo2chastity":
            gv.mod("arousal", 50);
            char.room(651);
            break;
        case "jo3":
            nav.bg("651_wackHallway/jo3.jpg");
            cl.doCum(false);
            break;
        case "jo3end":
            char.room(651);
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
        {
            chatID: 8,
            speaker: "thinking",
            text: "Am I really going to sit in the public booth and jack off?",
            button: [
                { chatID: -1, text: "Pay $50 to see the nudie booth show?", callback: "pay50" },
                { chatID: -1, text: "Save my money", callback: "reset" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Damn, I don't have $50.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "Oh Fuck yeah! I'm so going to jack off!",
            button: [
                { chatID: -1, text: "...", callback: "jo2" }
            ]
        },
        {
            chatID: 11,
            speaker: "tiffany",
            text: "Oh hi " + sc.n("me") + ". Did you come in to jack off to my pussy?",
            button: [
                { chatID: -1, text: "Oh yeah!", callback: "checkjo2" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "Oh hi sexy. Did you like it when I play with my pussy?",
            button: [
                { chatID: -1, text: "Oh yeah!", callback: "checkjo2" }
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "Oh. I'm wearing a chastity cage. Well this was pointless...",
            button: [
                { chatID: -1, text: "...", callback: "jo2chastity" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "Oh fuck I'm going to cum!",
            button: [
                { chatID: 15, text: "...", callback: "jo3" }
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "Cumming on the glass is like applause for my pussy! ",
            button: [
                { chatID: -1, text: "Thanks", callback: "jo3end" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};