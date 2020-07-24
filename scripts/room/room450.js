//Girl bathroom park
var room450 = {};

//tiffany tricks main into drag by saying it's an all girls apartment
//candy knows who he is and asks him why he's dressed as a chick
//tiffany laughs that she tricked him

room450.main = function () {
    var navList = new Array();
    var btnList = new Array();
    
    if (g.isNight()) {

        if (sc.getstep("me") < 3) {
            btnList.push({
                "type": "img",
                "name": "cop",
                "left": 666,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "450_park/cop1.png"
            });
            chat(2, 450);
            navList = [0];
        }
        else {
            if (!sc.checkevent("cop", 1)) {
                btnList.push({
                    "type": "img",
                    "name": "cop",
                    "left": 666,
                    "top": 0,
                    "width": 1000,
                    "height": 1080,
                    "image": "450_park/cop1.png"
                });
                btnList.push({
                    "type": "btn",
                    "name": "sleep",
                    "left": 306,
                    "top": 406,
                    "width": 148,
                    "height": 122,
                    "image": "450_park/sleep.png"
                });
                chat(3, 450);
            }
            else {
                btnList.push({
                    "type": "btn",
                    "name": "further",
                    "left": 603,
                    "top": 0,
                    "width": 314,
                    "height": 401,
                    "image": "450_park/450_further.png",
                    "night": "450_park/450_further_night.png"
                });
                btnList.push({
                    "type": "btn",
                    "name": "sleep",
                    "left": 306,
                    "top": 406,
                    "width": 148,
                    "height": 122,
                    "image": "450_park/sleep.png"
                });
                btnList.push({
                    "type": "btn",
                    "name": "gbroom",
                    "left": 1288,
                    "top": 271,
                    "width": 63,
                    "height": 125,
                    "image": "450_park/450_girlBroom.png"
                });
                btnList.push({
                    "type": "btn",
                    "name": "bbroom",
                    "left": 1594,
                    "top": 273,
                    "width": 65,
                    "height": 126,
                    "image": "450_park/450_boyBroom.png"
                });
                navList = [451, 452, 0];
            }
        }
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "gbroom",
            "left": 1288,
            "top": 271,
            "width": 63,
            "height": 125,
            "image": "450_park/450_girlBroom.png"
        });
        btnList.push({
            "type": "btn",
            "name": "bbroom",
            "left": 1594,
            "top": 273,
            "width": 65,
            "height": 126,
            "image": "450_park/450_boyBroom.png"
        });
        btnList.push({
            "type": "btn",
            "name": "further",
            "left": 603,
            "top": 0,
            "width": 314,
            "height": 401,
            "image": "450_park/450_further.png",
            "night": "450_park/450_further_night.png"
        });
        navList = [460, 452, 451, 0];
    }
    

    if (g.hourBetween(12, 13) || g.hourBetween(18, 19)) {
        btnList.push({
            "type": "btn",
            "name": "cult",
            "left": 1481,
            "top": 456,
            "width": 264,
            "height": 205,
            "image": "450_park/cultEating.png"
        });
    }


    $.each(btnList, function (i, v) {
        nav.button(v, 450);
    });

    nav.buildnav(navList);
};

room450.btnclick = function (name) {
    switch (name) {
        case "gbroom":
            char.room(452);
            break;
        case "bbroom":
            char.room(451);
            break;
        case "bench":
            chat(1, 450);
            break;
        case "further":
            char.room(460);
            break;
        case "sleep":
            if (sc.checkevent("me", 7))
                char.room(456);
            else
                chat(14, 450);
            break;
        case "":
            char.room(456);
            break;
        case "cult":
            nav.killbutton("cult");
            nav.button({
                "type": "img",
                "name": "cult1",
                "left": 750,
                "top": 0,
                "width": 933,
                "height": 1080,
                "image": "450_park/cultTalk.png"
            }, 450);
            if (sc.getstep("cultjgirl") < 1)
                chat(8, 450);
            else
                chat(13, 450);
            break;
        default:
            break;
    }
};

room450.chatcatch = function(callback){
    switch (callback) {
        case "sitHour":
            char.addtime(60);
            break;
        case "leavePark":
            char.room(0);
            break;
        case "cop2":
            nav.killbutton("cop");
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 666,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "450_park/cop2.png"
            }, 450);
            break;
        case "cop3":
            nav.killbutton("cop");
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 666,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "450_park/cop3.png"
            }, 450);
            break;
        case "killCop":
            nav.buildnav([0]);
            nav.killbutton("cop");
            break;
        case "cultLeave1":
            char.addtime(60);
            nav.killbutton("cult1");
            sc.setstep("cultjgirl", 1);
            break;
        case "cultLeave2":
            char.addtime(60);
            nav.killbutton("cult1");
            break;
        case "redress":
            cl.c.shirt = "g";
            cl.c.pants = "j";
            cl.c.shoes = "w";
            cl.c.socks = "w";
            cl.display();
            char.room(456);
            break;
        default:
            break;
    }
}

room450.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Sit on the bench for an hour?", callback: "sitHour" },
                { chatID: -1, text: "Never mind", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "cop",
            text: "Hay buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: -1, text: "Yes sir, I'll take off", callback: "leavePark" }
            ]
        },
        {
            chatID: 3,
            speaker: "cop",
            text: "Hay buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: 4, text: "Sorry sir, I've been kicked out of my home and I've got nowhere to go. Please let me crash here tonight!", callback: "cop3" }
            ]
        },
        {
            chatID: 4,
            speaker: "cop",
            text: "Ohhhh, I'll tell you what boy, I'll let you sleep in the park if you wrap your lips around my " +
                "big fat cock and suck it till I cum down your throat.",
            button: [
                { chatID: 5, text: "Wha.... I'm not going to do that.", callback: "cop2" }
            ]
        },
        {
            chatID: 5,
            speaker: "cop",
            text: "Hahah maybe not today, but if I catch you in my park after dark you will. Go ahead and sleep on the bench. This is " +
                "your freebie.",
            button: [
                { chatID: -1, text: "Thanks?....", callback: "killCop" }
            ]
        },
        {
            chatID: 6,
            speaker: "cop",
            text: "Oh, you come here for my cock?",
            button: [
                { chatID: 7, text: "No, I'm still homeless, please just let me sleep here without sucking your dick.", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "cop",
            text: "The bench is all yours",
            button: [
                { chatID: -1, text: "Thanks.", callback: "killCop" }
            ]
        },
        {
            chatID: 8,
            speaker: "cultjgirl",
            text: "Yes my friend, what can we do for your?",
            button: [
                { chatID: 9, text: "Who are you?", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "cultjgirl",
            text: "We are everything, we are everywhere, we are love. Have you been loved?",
            button: [
                { chatID: 10, text: "Have I what?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "cultjgirl",
            text: "Silly boy, have you been loved? Our group has so much love, we would like to love you. ",
            button: [
                { chatID: 11, text: "Oh yea?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "cultjgirl",
            text: "Yes, you can join us for free love, just follow the forest, it will guide you to us. When you get near " +
                "our home disrobe your earthly clothes for they serve no purpose when you have love in your heart.",
            button: [
                { chatID: 12, text: "What the fuck?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "cultjgirl",
            text: "The time draws near for us to share out love in the forest, be well new friend. ",
            button: [
                { chatID: -1, text: "Be well?", callback: "cultLeave1" }
            ]
        },
        {
            chatID: 13,
            speaker: "cultjgirl",
            text: "Hello again friend. Meet us naked, in the forest so we can share our love. Only the nude body can " +
                "can receive the gifts of our creator. ",
            button: [
                { chatID: -1, text: "Sure", callback: "cultLeave2" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Better wear my normal clothes, it's cold out here..",
            button: [
                { chatID: -1, text: "...", callback: "redress" }
            ]
        },
    ];
    return cArray[chatID];
}