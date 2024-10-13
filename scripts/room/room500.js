
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
    //if (sc.getEvent("zoey", -1))
    //    navList.push(501);
    $.each(btnList, function (i, v) {
        nav.button(v, 500);
    });
    nav.buildnav(navList);
};

room500.btnclick = function (name) {
    switch (name) {
        case "frontDoor":
            if (sc.getMission("zoey", "cheating").success) {
                char.room(501);
            }
            else {
                var zoeyLocation = sc.getTimeline("zoey");
                if (daily.get("zoey")) {
                    chat(4, 500);
                }
                else if (zoeyLocation.roomID > 499 && zoeyLocation.roomID < 525) {
                    if (zoeyLocation.roomID === 502) { //sleeping
                        nav.killall();
                        nav.bg("500_jada/500_doorOpen2.jpg");
                        chat(0, 500);
                    }
                    else {
                        nav.killall();
                        nav.bg("500_jada/500_doorOpen1.jpg");
                        chat(1, 500);
                    }
                }
                else {
                    chat(3, 500);
                }
            }
            //if (sc.getstep("zoey") > 300) {
            //    chat(15, 500);
            //}
            //else if (sc.getEvent("zoey", -2)) {
            //    char.room(501);
            //}
            //else if (!g.hasAccess(16).access) {
            //    nav.killall();
            //    nav.bg("500_jada/500_doorOpen2.jpg");
            //    chat(5, 500);
            //}
            //else if (daily.get("zoey")) {
            //    nav.killall();
            //    nav.bg("500_jada/500_doorClose.jpg");
            //    chat(4, 500);
            //}
            //else {
            //    nav.killall();
            //    var zoeyRoom = sc.zoey().roomID;
            //    if (zoeyRoom === 502) {
            //        nav.bg("500_jada/500_doorOpen2.jpg");
            //        chat(0, 500);
            //    }
            //    else if (zoeyRoom === 501 || zoeyRoom === 502) {
            //        nav.bg("500_jada/500_doorOpen1.jpg");
            //        chat(1, 500);
            //    }
            //    else {
            //        nav.bg("500_jada/500_doorClose.jpg");
            //        chat(3, 500);
            //    }
            //}
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
            daily.set("zoey");
            char.room(0);
            break;
        case "inside":
            char.room(501);
            break;
        case "sleep":
            nav.killall();
            nav.bg("502_bedroom/homeless.jpg");
            break;
        case "leaveNoZoey":
            char.room(0);
            break;
        case "zoeyLike":
            scc.love("zoey", 5, 100);
            break;
        case "zoeyBed":
            sc.setstep("zoey", -2);
            g.pass = 502;
            char.room(28);
            break;
        case "reset":
            char.room(500);
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
            text: "Hey " + sc.n("me") + "... I am totally toooo tired to play. Can you come back later, maybe afternoon?",
            button: [
                { chatID: -1, text: "Of course. ", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "zoey",
            text: "Hey " + sc.n("me") + "! It is so nice to see you! You want to come in and play some video games?",
            button: [
                { chatID: -1, text: "Only if it's a retro game!", callback: "inside" },
                { chatID: 2, text: "No, I have no idea why I knocked on your door. Bye", callback: "reset" }
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
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "She's busy today. Maybe later. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "zoey",
            text: "Hey " + sc.n("me") + "... I am totally toooo tired to play. Can you come back later, maybe afternoon?",
            button: [
                { chatID: 6, text: "I was just kicked out of my house, I have no place to go ", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "zoey",
            text: "That is terrible, come in so we can talk.",
            button: [
                { chatID: 7, text: "Thank you soooo much " + sc.n("zoey") + "!", callback: "sleep" }
            ]
        },
        {
            chatID: 7,
            speaker: "zoey",
            text: "So what happened?",
            button: [
                { chatID: 8, text: "Tell the truth", callback: "" },
                { chatID: 10, text: "Lie", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "So.. I was playing truth or dare with " + sc.n("eva") + " and " + sc.n("lola") +
                " and my " + sc.n("landlord") + " walked in on us right when we we're all naked... she " +
                "go mad at me and kicked me out!",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "zoey",
            text: "You are such a pervert messing around with your " + sc.n("el") + "! I like it you " +
                "little weird-o.",
            button: [
                { chatID: 13, text: "really?", callback: "zoeyLike" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "My " + sc.n("landlord") + " had me paying rent and I just couldn't cover it so she kicked me out. ",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "zoey",
            text: "She kicked you out at this time of night?",
            button: [
                { chatID: 12, text: "She was mad I didn't pay her.", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "zoey",
            text: "Awwww you poor thing.",
            button: [
                { chatID: 13, text: "Yes, poor me..", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "zoey",
            text: "You can stay here, I will give you a key to my apartment so you can come and go when you please. " +
                "I sleep in late so do not wake me up before you go go.",
            button: [
                { chatID: 14, text: "You're the best!", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "zoey",
            text: "Awww you look like you have had a rough time, come to bed we can snuggle the bad day away.",
            button: [
                { chatID: -1, text: "That would be nice. ", callback: "zoeyBed" }
            ]
        },
        {
            chatID: 15,
            speaker: "zoey",
            text: sc.n("zoey") + " said never to come back. She's still really mad. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
    ];
    
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};