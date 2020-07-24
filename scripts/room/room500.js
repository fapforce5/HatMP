
// ADD GOTH CHICK
var room500 = {};
room500.main = function () {
    g.pass = g.internal = "";
    var btnList = [
        {
            "type": "btn",
            "name": "frontDoor",
            "left": 910,
            "top": 641,
            "width": 108,
            "height": 264,
            "image": "500_jada/doorNightDay.png",
            "night": "500_jada/doorNightDark.png"
        }
    ];
    var navList = [0];
    if (sc.checkevent("zoey", -1))
        navList.push(501);
    $.each(btnList, function (i, v) {
        nav.button(v, 500);
    });
    nav.buildnav(navList);
};

room500.btnclick = function (name) {
    switch (name) {
        case "frontDoor":
            if (sc.getstep("zoey") > 22) {
                if (g.checkflag("zoeyDay")) {
                    chat(3, 500);
                }
                else {
                    chat(1, 500);
                }
            }
            else if (sc.checkevent("zoey", -1)) {
                char.room(501);
            }
            else if (sc.checkevent("me", 3) && !sc.checkevent("zoey", -1)) {
                nav.killall();
                nav.bg("500_jada/500_doorOpen2.jpg");
                chat(5, 500);
            }
            
            else if (sc.checkevent("zoey", -1)) {
                char.room(501);
            }
            else if (g.checkflag("zoeyDay")) {
                nav.killall();
                nav.bg("500_jada/500_doorClose.jpg");
                chat(4, 500);
            }
            else {
                nav.killall();
                var zoeyRoom = sc.zoey().roomID;
                if (zoeyRoom === 502) {
                    nav.bg("500_jada/500_doorOpen2.jpg");
                    chat(0, 500);
                }
                else if (zoeyRoom === 501 || zoeyRoom === 502) {
                    nav.bg("500_jada/500_doorOpen1.jpg");
                    chat(1, 500);
                }
                else {
                    nav.bg("500_jada/500_doorClose.jpg");
                    chat(3, 500);
                }
            }
            break;
        case "zoey":
            chat(2, 500);
            break;
        default:
            break;
    }
};

room500.chatcatch = function (callback) {
    switch (callback) {
        case "leave0":
            char.addtime(20);
            char.room(0);
            break;
        case "leave":
            g.setflag("zoeyDay");
            char.room(0);
            break;
        case "inside":
            char.room(501);
            break;
        case "sleep":
            char.room(502);
            break;
        case "leaveNoZoey":
            char.room(0);
            break;
        default:
            break;
    }
};

room500.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "zoey",
            text: "Hay " + sc.n("me") + "... I am totally toooo tired to play. Can you come back later, maybe afternoon?",
            button: [
                { chatID: -1, text: "Of course. ", callback: "leave0" }
            ]
        },
        {
            chatID: 1,
            speaker: "zoey",
            text: "Hay " + sc.n("me") + "! It is so nice to see you! You want to come in and play some video games?",
            button: [
                { chatID: -1, text: "Only if it's a retro game!", callback: "inside" },
                { chatID: 2, text: "No, I have no idea why I knocked on your door. Bye", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "zoey",
            text: "Oh, that was unnecessarily rude. Au revoir. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "She must be working at the Freak Bar",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leaveNoZoey" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I've already hung out with her today. I don't want her to think I'm crazy.",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leaveNoZoey" }
            ]
        },
        {
            chatID: 5,
            speaker: "zoey",
            text: "Hay " + sc.n("me") + "... I am totally toooo tired to play. Can you come back later, maybe afternoon?",
            button: [
                { chatID: 6, text: "I was just kicked out of my house, I have no place to go ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "zoey",
            text: "That is terrible, come in so we can talk.",
            button: [
                { chatID: -1, text: "Thank you soooo much " + sc.n("zoey") + "!", callback: "sleep" }
            ]
        },
    ];
    
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};