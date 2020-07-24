//Room name
var room50 = {};
room50.main = function () {
    var btnList;
    var navList = [0];
    var treyvonStep = sc.getstep("treyvon");
    if (treyvonStep === 1) {
        btnList = [
            {
                "type": "btn",
                "name": "doorman",
                "left": 826,
                "top": 15,
                "width": 774,
                "height": 1065,
                "image": "50_lobby/tif.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 50);
        });
    }
   
    else {
        btnList = [
            {
                "type": "btn",
                "name": "doorman",
                "left": 825,
                "top": 15,
                "width": 668,
                "height": 1065,
                "image": "50_lobby/doorman.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 50);
        });
        nav.buildnav(navList);
    }
};

room50.btnclick = function (name) {
    switch (name) {
        case "doorman":
            switch (sc.getstep("treyvon")) {
                case 0:
                    chat(0, 50);
                    break;
                case 1:
                    chat(2, 50);
                    break;
                case 2:
                    if (cl.appearance() > 0)
                        chat(10, 50);
                    else
                        chat(0, 50);
                    break;
                default:
                    chat(0, 50);
                    break;
            }
            break;
        default:
            break;
    }
};

room50.chatcatch = function (callback) {
    switch (callback) {
        case "grab":
            nav.killall();
            nav.bg("50_lobby/grab.jpg");
            break;
        case "followtif":
            sc.setstep("treyvon", 2);
            sc.setstep("tiffany", 15);
            char.room(51);
            break;
        case "gohome":
            char.room(51);
            break;
        default:
            break;
    }
};

room50.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "treyvon",
            text: "Hay boy, you're not allowed here.",
            button: [
                { chatID: -1, text: "I know", callback: "" },
                { chatID: 1, text: "Can I rent an apartment", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "treyvon",
            text: "No, we don't rent to boys like you.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "treyvon",
            text: "Hay " + sc.n("tiffany") + " welcome home. Who's this cutie you have with you?",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "tiffany",
            text: "This is my new friend, She's lot of fun! She'll be staying with us a while.",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "treyvon",
            text: "Ohhh you lookin' good baby girl. With a butt like that you gotta be able to shake them hips, sexy. ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "tiffany",
            text: "Oh she can totally shake it, can't you? You should feel those hips of hers!",
            button: [
                { chatID: 6, text: "Wha?", callback: "grab" }
            ]
        },
        {
            chatID: 6,
            speaker: "treyvon",
            text: "Oh yea! That a nice ass you got there. I bet you can take a cock really good. What did you say your name was?",
            button: [
                { chatID: 7, text: "Oh my, that's your hand on my butt.. ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "treyvon",
            text: "I know. You don't sqeeze the fruit until you buy it hehe. So what's your name girl?",
            button: [
                { chatID: 8, text: "It's... ahh........ummmmm........" + g.get("girlname") + "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "treyvon",
            text: g.get("girlname") + ". That's are really pretty name, for a really pretty girl. I'm " + sc.n("treyvon") + ". " +
            "I'll get you anything you need just scream my name. **wink**",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "You two are really hitting it off. I guess I could give you two some alone time.... Oh yeah, I forgot " + sc.n("candy") + " wanted " +
                "to see you. Sorry " + sc.n("treyvon") + ", but I have to get " + g.get("girlname") + " home. ",
            button: [
                { chatID: -1, text: "[Follow " + sc.n("tiffany") + " home]", callback: "followtif" }
            ]
        },
        {
            chatID: 10,
            speaker: "treyvon",
            text: "Hay sexy. It's getting boring down here, want to show me that booty of yours?",
            button: [
                { chatID: -1, text: "No, just going home", callback: "gohome" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};