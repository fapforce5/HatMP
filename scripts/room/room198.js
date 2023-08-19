//Room name
var room198 = {};
room198.main = function () {
    g.internal = {
        activeSlide: null,
        correct: 0,
        wrong: 0,
        slide: [
            {
                i: 0, img: "i1.jpg", q: "What color was the vollyball?", a: [
                    { t: "blue", c: "x" },
                    { t: "white", c: "x" },
                    { t: "red", c: "x" },
                    { t: "yellow", c: "correct" },
                ]
            },
            {
                i: 1, img: "i2.jpg", q: "How many planes are there in the sky?", a: [
                    { t: "0", c: "x" },
                    { t: "1", c: "x" },
                    { t: "2", c: "correct" },
                    { t: "3", c: "x" },
                ]
            },
            {
                i: 2, img: "i3.jpg", q: "The girl on the far right, What color was her public hair? ", a: [
                    { t: "purple", c: "correct" },
                    { t: "white", c: "x" },
                    { t: "red", c: "x" },
                    { t: "yellow", c: "x" },
                ]
            },
            {
                i: 3, img: "i4.jpg", q: "What color were the curtains? ", a: [
                    { t: "purple", c: "x" },
                    { t: "white", c: "x" },
                    { t: "orange", c: "correct" },
                    { t: "green", c: "x" },
                ]
            },
            {
                i: 4, img: "i5.jpg", q: "Which side of " + sc.n("cecilia") + " was the space ship? ", a: [
                    { t: "left", c: "x" },
                    { t: "right", c: "correct" },
                    { t: "there were 2 space ships", c: "x" },
                    { t: "there wern't any space ships", c: "x" },
                ]
            },
            {
                i: 5, img: "i6.jpg", q: "What shape is on the building on the red banner on the right of the image? ", a: [
                    { t: "hexagon", c: "correct" },
                    { t: "triange", c: "x" },
                    { t: "square", c: "x" },
                    { t: "circle", c: "x" },
                ]
            },
            {
                i: 6, img: "i7.jpg", q: "What are the girls on the right eating? ", a: [
                    { t: "hamburger", c: "x" },
                    { t: "hotdog", c: "x" },
                    { t: "sushi", c: "x" },
                    { t: "salad", c: "correct" },
                ]
            },
            {
                i: 7, img: "i8.jpg", q: "What kind of shoes is the girl on top wearing? ", a: [
                    { t: "running shoes", c: "x" },
                    { t: "high heels", c: "correct" },
                    { t: "bare feet", c: "x" },
                    { t: "boots", c: "x" },
                ]
            },
            {
                i: 8, img: "i9.jpg", q: "How many people are wearing hats? ", a: [
                    { t: "0", c: "x" },
                    { t: "1", c: "x" },
                    { t: "2", c: "correct" },
                    { t: "3", c: "x" },
                ]
            },
            {
                i: 9, img: "i10.jpg", q: "Where did the rapist cum? ", a: [
                    { t: "pussy", c: "x" },
                    { t: "asshole", c: "correct" },
                    { t: "mouth", c: "x" },
                    { t: "back", c: "x" },
                ]
            },
        ]
    };
    chat(0, 198);
}


room198.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room198.counter = function (timeLeft) {
    slideTime--;
    nav.kill("counter");
    if (timeLeft < 1) {
        nav.bg("198_pi/blank.jpg");
        chat(999, 198);
    }
    else {
        nav.t({
            type: "zimg",
            name: "counter",
            left: 1000,
            top: 100,
            font: 40,
            hex: "#00bf26",
            text: slideTime
        });
        g.roomTimeout = setTimeout(function () {
            room198.counter(slideTime);
        }, 1000);
    }

};

room198.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            nav.bg("198_pi/bg.jpg");
            break;
        case "test0":
            nav.bg("198_pi/test.jpg");
            break;
        case "test1bad":
            missy.mod("mood", -10);
            break;
        case "test1":
            nav.bg("198_pi/test1.jpg");
            break;
        case "c0":
            nav.bg("198_pi/bg1.jpg");
            break;
        case "c1":
            nav.bg("198_pi/bg2.jpg");
            break;
        case "s0":
            g.internal.activeSlide = Math.floor(Math.random() * 10);
            nav.bg("198_pi/" + g.internal.slide[g.internal.activeSlide].img);
            slideTime = (5 + (gv.get("difficulty") * 3));
            
            g.roomTimeout = setTimeout(function () {
                room198.counter(slideTime);
            }, 1000);
            break;
        case "x":
            missy.mod("mood", -3);
            char.addtime(90);
            chat(998, 198);
            break;
        case "correct":
            levels.mod("pi", 40, 4);
            missy.mod("mood", 3);
            char.addtime(120);
            chat(8, 198);
            break;
        case "another":
            if (g.gethourdecimal() > 16) {
                missy.mod("mood", 20);
                chat(10, 198);
            }
            else {
                chat(11, 198);
            }
            break;
        case "endTraining":
            char.room(0);
            break;
        default:
            break;
    }
};

room198.chat = function (chatID) {
    if (chatID === 999) {
        var buttons = new Array();
        $.each(g.internal.slide[g.internal.activeSlide].a, function (i, v) {
            buttons.push({ chatID: -1, text: v.t, callback: v.c });
        });
        return {
            chatID: 999,
            speaker: "missy",
            text: g.internal.slide[g.internal.activeSlide].q,
            button: buttons
        };
    }
    else if (chatID === 998) {
        var correctAnswer = "";
        $.each(g.internal.slide[g.internal.activeSlide].a, function (i, v) {
            if (v.c === "correct") {
                correctAnswer = v.t;
                return;
            }
        });
        return {
            chatID: 999,
            speaker: "missy",
            text: "That was wrong. The correct choice was '" + correctAnswer + "'. If you want to succeed in this " +
                "profession you need to pay more attention. ",
            button: [
                { chatID: -1, text: "Can I do another ma'am. ", callback: "another" },
                { chatID: 9, text: "That's all I need today ma'am. ", callback: "complete" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Today we're going to work on your private investigation expertise. Do you need an explanation? ",
                button: [
                    { chatID: 1, text: "Yes ma'am", callback: "start" },
                    { chatID: 5, text: "No ma'am", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "I'm going to show you an image on my screen. You'll study that image and be prepared to answer " +
                    "any questions I have for that image. The purpose is to improve your detail proficiency. Let's begin. ",
                button: [
                    { chatID: 2, text: "...", callback: "test0" },
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "Now study this image. Let me know when you're ready. ",
                button: [
                    { chatID: 3, text: "I'm ready ma'am", callback: "" },
                    { chatID: 3, text: "Ready!", callback: "test1bad" },
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "I'm going to keep the image up, but when we do our training I'll hide the image to test your " +
                    "memorization. What color is the man in the foreground's backpack?",
                button: [
                    { chatID: 4, text: "It's brown ma'am", callback: "test1" }
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "Correct. The back pack is brown. Are you ready for your training? ",
                button: [
                    { chatID: 5, text: "Yes ma'am", callback: "start" },
                    { chatID: 1, text: "Can you explain it again ma'am", callback: "" },
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: sc.n("cecilia") + " come in here. ",
                button: [
                    { chatID: 6, text: "...", callback: "c0" },
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "Now take your top off. ",
                button: [
                    { chatID: 7, text: "...", callback: "c1" },
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: sc.n("cecilia") + " is going to be your distraction. While your on these cases you'll " +
                    "have a lot of distractions that you have to ignore. Ready to begin? ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "s0" },
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "Excellent! You're really coming along.  ",
                button: [
                    { chatID: -1, text: "Can I do another ma'am. ", callback: "another" },
                    { chatID: 9, text: "That's all I need today ma'am. ", callback: "complete" },
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "Very well. You are free to go.  ",
                button: [
                    { chatID: -1, text: "Thank's ma'am. ", callback: "endTraining" },
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "I love your enthusiasm, but it's getting late. Time to run along.  ",
                button: [
                    { chatID: -1, text: "Thank's ma'am. ", callback: "endTraining" },
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "Yes you can! Ready? ",
                button: [
                    { chatID: -1, text: "Yes ma'am. ", callback: "s0" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};