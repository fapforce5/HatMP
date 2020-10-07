//Pool

var room901 = {};

room901.main = function () {
    var cindyStep = sc.getstep("cindy");
    if (cl.hasoutfit("swim") === null) {
        if (cindyStep === 2 && g.dt.getDay() === 3 && g.gethourdecimal().between(15, 17)) {
            nav.button({
                "type": "img",
                "name": "girlchallenge",
                "left": 651,
                "top": 0,
                "width": 816,
                "height": 1080,
                "image": "901_pool/girl2.png"
            }, 901);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "swimming",
                "left": 0,
                "top": 409,
                "width": 1575,
                "height": 575,
                "image": "901_pool/swim.png"
            }, 901);
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
            if (sc.sister().thisRoom) {
                nav.button({
                    "type": "btn",
                    "name": "lola",
                    "left": 573,
                    "top": 65,
                    "width": 288,
                    "height": 1015,
                    "image": "901_pool/lola.png"
                }, 901);
            }
        }
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
        nav.t({
            type: "img",
            name: "warning",
            left: 400,
            top: 100,
            font: 20,
            hex: "#ffffff",
            text: "I've got to wear a swimsuit to go swimming."
        });
    }
    nav.buildnav([0, 902, 903]);
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
            nav.killbutton("lola");
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
        case "lola":
            nav.killbutton("boy");
            var lolaStep = sc.getstep("lola");
            if (lolaStep < 8)
                chat(9, 901);
            else if (lolaStep === 8) {
                if (sc.checkevent("lola", -2))
                    chat(12, 901);
                else
                    chat(16, 901);
            }
            else
                chat(17, 901);
            break;
        case "girlchallenge":
            if (cl.c.chest === 1 && cl.c.leg === 0 && cl.lipsize() === "thin")
                chat(17, 901);
            else
                chat(2, 901);
            break;
        case "changeroom":
            nav.killbutton("boy");
            nav.killbutton("girl");
            nav.killbutton("swimming");
            nav.killbutton("lola");
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
        case "swimming":

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
        case "lola-2":
            sc.setstep("lola", -2);
            char.addtime(120);
            char.room(901);
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
        {
            chatID: 9,
            speaker: "lola",
            text: "Hay " + sc.n("me") + "! Getting some laps in?",
            button: [
                { chatID: 10, text: "Oh yeah!", callback: "" },
                { chatID: 11, text: "Nope, just here to check you out in a swimsuit", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "lola",
            text: "Good for you. I'm here during the week from 3:00 pm till 5:00 pm to keep fit too",
            button: [
                { chatID: -1, text: "And you look great!", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "lola",
            text: "Oh " + sc.n("me") + "! You're too much. I'll see you at home *wink",
            button: [
                { chatID: -1, text: "Ok see you", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "lola",
            text: "Oh my god " + sc.n("me") + "! I'm sooooo sorry you got kicked out! " + sc.n("eva") + " and I have just been " +
                "the saddest ever. It's so terrible you're not here. I just want to smuggle you and take you in!",
            button: [
                { chatID: 13, text: "I know I miss you two too", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "lola",
            text: "I just want to tackle you and squeeze you, but that lifeguard is a real butthead. Where did you go after? ",
            button: [
                { chatID: 14, text: sc.n("zoey") + " was nice enough to take me in. [Tell " + sc.n("lola") + " your story. ", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "lola",
            text: "Oh I'm so happy " + sc.n("lola") + " was able to take you in. She's such a great friend. " +
                + sc.n("eva") + " and I will keep working on " + sc.n("landlord") + " to get you back in.We really miss " +
                "you. Also ever since you left " + sc.n("bigguy") + " has been acting really creepy. He's been staring at us, and I " +
                "swear he was licking his lips. We told " + sc.n("landlord") + ", but she just said we were being weird. ",
            button: [
                { chatID: 15, text: "That's horrible. I'll try to find a way to get back in and look out for you two.", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "I hope so. You know " + sc.n("landlord") + ". She'll get mad, but give her some time and she'll get over it. " +
            "I'm going to get my laps in, it's good seeing you. Love you!",
            button: [
                { chatID: -1, text: "You too I'm going to get some laps too", callback: "lola-2" }
            ]
        },
        {
            chatID: 16,
            speaker: "lola",
            text: "Hay " + sc.n("me") + "! I'm so happy every time I see you. We're still working on " + sc.n("landlord") + ". " +
            "She said maybe, you'll have to earn her trust. Just keep working on her. I know you'll get back in. ",
            button: [
                { chatID: -1, text: "I will. Thanks " + sc.n("lola") + ".", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "If you keep swimming like this you're going to turn into a fish!",
            button: [
                { chatID: -1, text: "You're a fish!", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "cindy",
            text: "Oh so you decided to show your face? You know I'm going to destroy you. No one can swim like me!",
            button: [
                { chatID: 18, text: "You're on! And if I win you're going on that date!", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "cindy",
            text: "Slow down turbo! You have to beat me first.",
            button: [
                { chatID: -1, text: "Lets go!", callback: "swimfan" }
            ]
        },
    ];

    return cArray[chatID];
}