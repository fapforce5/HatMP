//Pool

var room901 = {};

room901.main = function () {
    if (cl.hasoutfit(("swim") === null)){
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
    }
    else {
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
    }
};

room901.btnclick = function (name) {
    switch (name) {
        case "girl":
            var cindy = sc.getstep("cindy");
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
            switch (cindy) {
                case 0:
                    chat(0, 901);
                    break;
                case 1:
                    chat(8, 901);
                    break;
            }
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
            char.room(903);
            break;
        case "bgirl":
            char.room(902);
            break;
        default:
            break;
    }
};

room901.chatcatch = function (callback) {
    switch (callback) {
        case "cindy0":
            if (cl.c.chest === 1 && cl.c.leg === 0 && cl.lipsize() === "thin") {
                var cstep = sc.getstep("cindy");
                if (cstep === 0)
                    chat(1, 901);
                else if (cstep === 1)
                    chat(6, 901);
            }
            else
                chat(2, 901);
            break;
        case "reset":
            char.addtime(20);
            char.room(901);
            break;
        case "cindyInc1":
            sc.setstep("cindy", 1);
            room901.chatcatch("reset");
            break;
        case "cindyInc2":
            sc.setstep("cindy", 1);
            room901.chatcatch("reset");
            break;
    }
};


room901.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "cindy",
            text: "Hay there, what's up?",
            button: [
                { chatID: -1, text: "Hay sexy, I'm feeling short of breath, wanna give me mouth to mouth?", callback: "cindy0" },
                { chatID: -1, text: "Oh sorry, I didn't mean to poke your butt with my finger.", callback: "reset" },
            ]
        },
        {
            chatID: 1,
            speaker: "cindy",
            text: "Ugh, like I haven't heard that a million times. Wait don't you know " + sc.n("lola") + " and " + sc.n("eva") + "?",
            button: [
                { chatID: 3, text: "Oh yea they're my " + sc.n("el"), callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "cindy",
            text: "Ewwwww gross. Go away loser. You're so disgusting. Why would I, a really hot girl, want to give you mouth to mouth?",
            button: [
                { chatID: -1, text: "Oh... Well that really hurt.", callback: "reset" },
            ]
        },
        {
            chatID: 3,
            speaker: "cindy",
            text: sc.n("lola") + " really is the best. She helped me improve my breast stroke. Took 5 seconds off my time. ",
            button: [
                { chatID: 4, text: "I know, she swims all the time!", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "cindy",
            text: "She really does. I love that girl.",
            button: [
                { chatID: 6, text: "So would you like to go on a date sometime?", callback: "" },
                { chatID: 5, text: "Yea, she's cool. ", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "cindy",
            text: "Cool. I'm going to get back to my lifeguard duties. Take it easy.",
            button: [
                { chatID: -1, text: "Oh ok, bye. ", callback: "cindyInc1" },
            ]
        },
        {
            chatID: 6,
            speaker: "cindy",
            text: "Ohh... hmmm I'll tell you what, if you can beat me in a swim race I'll go out with you!",
            button: [
                { chatID: 7, text: "You're on!", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "cindy",
            text: "OK! I do my laps every Wednesday between 4:00 PM and 6:00 PM. I'll see you there cutie!",
            button: [
                { chatID: -1, text: "You're on! I'll see you there!", callback: "cindyInc2" },
            ]
        },
        {
            chatID: 8,
            speaker: "cindy",
            text: "Hay what's up?",
            button: [
                { chatID: -1, text: "I wanted to ask you out on a date.", callback: "cindy0" },
                { chatID: -1, text: "Oh sorry, I didn't mean to poke your butt with my finger.", callback: "reset" },
            ]
        },
    ];

    return cArray[chatID];
}