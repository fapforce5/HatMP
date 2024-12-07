//Room name
var room951 = {};
room951.main = function () {
    char.changeMenu("hide", false, true);
    var btnList = [
        {
            "type": "btn",
            "name": "hole",
            "left": 708,
            "top": 250,
            "width": 552,
            "height": 552,
            "image": "951_box/hole.png"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 951);
    });
};

room951.btnclick = function (name) {
    switch (name) {
        case "hole":
            if (g.internal.box % 2 === 0) {
                nav.killall();
                nav.bg("951_box/box0.jpg");
                chat(0, 951);
            }
            else {
                nav.killall();
                nav.bg("951_box/box1.jpg");
                chat(6, 951);
            }
            break;
        case "boxbj0":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "x",
                "left": 581,
                "top": 0,
                "width": 800,
                "height": 1080,
                "image": "951_box/boxm2.gif"
            }, 951);
            g.roomTimeout = setTimeout(function () {
                chat(4, 951);
            }, 1000);
            break;
        case "box1_1":
            nav.killall();
            nav.bg("951_box/box1_2.jpg");
            chat(8, 951);
            break;
        case "box1_6":
            nav.killall();
            nav.bg("951_box/box1.jpg");
            chat(17, 951);
            break;
        default:
            break;
    }
};

room951.chatcatch = function (callback) {
    switch (callback) {
        case "boxm0":
            nav.killall();
            nav.bg("951_box/box.jpg");
            nav.button({
                "type": "btn",
                "name": "hole",
                "left": 708,
                "top": 250,
                "width": 552,
                "height": 552,
                "image": "951_box/boxm0.png"
            }, 951);
            
            break;
        case "boxbj0":
            nav.killall();
            nav.button({
                "type": "tongue",
                "name": "boxbj0",
                "left": 708,
                "top": 81,
                "width": 552,
                "height": 721,
                "image": "951_box/boxm1.png"
            }, 951);
            break;
        case "boxbj1":
            nav.killall();
            nav.bg("951_box/boxbj1.jpg");
            break;
        case "box1_1":
            nav.killall();
            nav.bg("951_box/box1_1.jpg");
            nav.button({
                "type": "tongue",
                "name": "box1_1",
                "left": 299,
                "top": 416,
                "width": 961,
                "height": 664,
                "image": "951_box/box1_1.png"
            }, 951);
            break;
        case "box1_2a":
            nav.killall();
            nav.bg("951_box/box1_2a.jpg");
            break;
        case "box1_2b":
            nav.bg("951_box/box0.jpg");
            break;
        case "box1_3":
            nav.killall();
            nav.bg("951_box/box1_3.jpg");
            break;
        case "box1_4":
            nav.bg("951_box/box1_4.jpg");
            break;
        case "box1_5":
            nav.bg("951_box/box1.jpg");
            break;
        case "box1_6":
            nav.killall();
            nav.bg("951_box/box1_1.jpg");
            nav.button({
                "type": "tongue",
                "name": "box1_6",
                "left": 299,
                "top": 416,
                "width": 961,
                "height": 664,
                "image": "951_box/box1_1.png"
            }, 951);
            break;
        case "reset":
            nav.bg("951_box/box_x.jpg");
            break;
        case "fuckbox0":
            nav.killall();
            nav.bg("951_box/a1.jpg");
            break;
        case "fuckbox1":
            nav.bg("951_box/a2.jpg");
            break;
        case "fuckboxEnd":
            g.internal.box++;
            g.internal.interval++;
            char.room(950); 
            break;
        default:
            break;
    }
};

room951.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cult",
            text: "Hi",
            button: [
                { chatID: 1, text: "Hi. Where am I? Let me out!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "cult",
            text: "No one leaves the box until we're all satisfied. ",
            button: [
                { chatID: 2, text: "what?", callback: "boxm0" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "What the hell man! Is that your dick?",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Oh shit, he's going to shove that in my box! What should I do?",
            button: [
                { chatID: -1, text: "Open your mouth and accept your punishment. ", callback: "boxbj0" },
                { chatID: 12, text: "Close your mouth tight. ", callback: "boxa0" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I can feel his cock pulsating in my throat. I think he's going to cum. ",
            button: [
                { chatID: 5, text: "Get Ready", callback: "boxbj1" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "*GULP*",
            button: [
                { chatID: 18, text: "Yummy", callback: "reset" }
            ]
        },
        {
            chatID: 6,
            speaker: "cult",
            text: "Awwww did the slut find themselves stuck in the box? Do you want to see my pig sticker?",
            button: [
                { chatID: 7, text: "...", callback: "box1_1" }
            ]
        },
        {
            chatID: 7,
            speaker: "cult",
            text: "Lick my pig sticker, lube it up 'cause I'm going to shove it up your slutty ass! ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "cult",
            text: "Now, just try to relax, because I'm not going to be gentle. ",
            button: [
                { chatID: 9, text: "*whimper*", callback: "box1_3" }
            ]
        },
        {
            chatID: 9,
            speaker: "me",
            text: "AAAAAAAaaaaaaaa ",
            button: [
                { chatID: 15, text: "...", callback: "box1_4" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "MMMMmmmmmmm",
            button: [
                { chatID: 11, text: "...", callback: "box1_5" }
            ]
        },
        {
            chatID: 11,
            speaker: "cult",
            text: "New your cunt is loose enough for what about to cum, slut. ",
            button: [
                { chatID: 18, text: "Uh oh", callback: "reset" }
            ]
        },
        {
            chatID: 12,
            speaker: "cult",
            text: "You don't want to open your mouth? Well I guess I have only 1 choice... ",
            button: [
                { chatID: 13, text: "oh?", callback: "box1_2a" }
            ]
        },
        {
            chatID: 13,
            speaker: "cult",
            text: "Drink piss you little bitch!",
            button: [
                { chatID: 14, text: "AAAAaaaakkkk GLUB GLUB aaaaakkkkk spit", callback: "box1_2b" }
            ]
        },
        {
            chatID: 14,
            speaker: "cult",
            text: "Now you smell like my piss. Maybe next time you'll suck it. ",
            button: [
                { chatID: 18, text: "drool.", callback: "reset" }
            ]
        },
        {
            chatID: 15,
            speaker: "cult",
            text: "That really goes deep, you are a slut...",
            button: [
                { chatID: 16, text: "Squeal", callback: "box1_5" }
            ]
        },
        {
            chatID: 16,
            speaker: "cult",
            text: "Gross. My pig sticker is so dirty now. Clean it up. Clean it up with your piggy tongue. ",
            button: [
                { chatID: -1, text: "Groan", callback: "box1_6" }
            ]
        },
        {
            chatID: 17,
            speaker: "cult",
            text: "Good piggy. Now the fun begins. ",
            button: [
                { chatID: 18, text: "oh no.", callback: "reset" }
            ]
        },
        {
            chatID: 18,
            speaker: "cult",
            text: "Knock knock...",
            button: [
                { chatID: 19, text: "uhhhh, who's there?", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cult",
            text: "All of us, and we're going to enjoy using every hole in your tiny body. ",
            button: [
                { chatID: 20, text: "oh fuck", callback: "fuckbox0" }
            ]
        },
        {
            chatID: 20,
            speaker: "cult",
            text: "This is such a great fuck box! Got a real slut this time! ",
            button: [
                { chatID: 21, text: "UUuuu mmmMMmmmm", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "cult",
            text: "I know. These slaves think they're special, but a few days in the box and they learn their place. ",
            button: [
                { chatID: 22, text: "UUuugh", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "cult",
            text: "Oh fuck I'm going to fill this fuck box up!",
            button: [
                { chatID: 23, text: "GLUG GLUG GLUG", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "cult",
            text: "Oh shit me too! ",
            button: [
                { chatID: 24, text: "MMMMmmmmmmMMMMM", callback: "fuckbox1" }
            ]
        },
        {
            chatID: 24,
            speaker: "cult",
            text: "Hahaha! Sissy cum dumps are the best!",
            button: [
                { chatID: 25, text: "UUUuuuugh", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "cult",
            text: "Lets let everyone else have a turn now. ",
            button: [
                { chatID: -1, text: "oooOOooooo", callback: "fuckboxEnd" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};