//Whore Room
var room215 = {};
room215.main = function () {
    
    var btnList = [
        {
            "type": "btn",
            "name": "whore",
            "left": 779,
            "top": 544,
            "width": 327,
            "height": 486,
            "image": "215_pink/work.png",
            "title": "Sell your sissy ass"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 215);
    });
    nav.buildnav([213, 214, 216, 0]);
};

room215.btnclick = function (name) {
    switch (name) {
        case "whore":
            if (g.get("energy") < 25)
                char.room(213);
            else {
                g.internal = { assout: true, customer: 0, s: 0, t: 0 };
                nav.killbutton("whore");
                chat(0, 215);
            }
            break;
        case "cock":
            nav.killbutton("cock");
            nav.bg("215_pink/pr_" + g.internal.customer + "_1.jpg");
            chat(101, 215);
            break;
        case "cock1":
            nav.killbutton("cock1");
            nav.bg("215_pink/pr_" + g.internal.customer + "_2.jpg");
            g.roomTimeout = setTimeout(function () {
                chat(102, 215);
            }, 1000);
            break;
        default:
            break;
    }
};

room215.chatcatch = function (callback) {
    switch (callback) {
        case "private1":
            nav.killall();
            nav.bg("215_pink/private1.jpg");
            break;
        case "private2b":
            if (g.get("energy") < 25) {
                chat(5, 215);
            }
            else {
                nav.killall();
                nav.bg("215_pink/private2b.jpg");
                g.internal.assout = false;
            }
            break;
        case "private2a":
            if (g.get("energy") < 25) {
                chat(5, 215);
            }
            else {
                nav.killall();
                nav.bg("215_pink/private2a.jpg");
                g.internal.assout = true;
            }
            break;
        case "private3":
            var customer = true;
            if (g.internal.assout) {
                customer = true;
            }
            else {
                customer = Math.floor(Math.random() * 3) === 0;
            }
            if (customer) {
                g.internal.customer = Math.floor(Math.random() * 3);
                if (g.internal.customer === 0) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 317,
                        "top": 222,
                        "width": 409,
                        "height": 858,
                        "image": "215_pink/pri0.png"
                    }, 215);
                }
                else if (g.internal.customer === 1) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 300,
                        "top": 163,
                        "width": 856,
                        "height": 917,
                        "image": "215_pink/pri1.png"
                    }, 215);
                }
                else if (g.internal.customer === 2) {
                    nav.button({
                        "type": "img",
                        "name": "f",
                        "left": 327,
                        "top": 213,
                        "width": 442,
                        "height": 867,
                        "image": "215_pink/pri2.png"
                    }, 215);
                }
                chat(100, 215);
            }
            else {
                chat(3, 215);
            }
            break;
        case "privateReset":
            nav.killbutton("f");
            char.addtime(30);
            break;
        case "fuck0":
            nav.killall();
            g.internal.s = 1;
            g.internal.t++;
            nav.bg("215_pink/pr_" + g.internal.customer + "_0.jpg");
            nav.button({
                "type": "btn",
                "name": "cock",
                "left": 1450,
                "top": 30,
                "width": 429,
                "height": 343,
                "image": "215_pink/cock.png"
            }, 215);
            break;
        case "fuck1":
            nav.button({
                "type": "btn",
                "name": "cock1",
                "left": 1450,
                "top": 30,
                "width": 429,
                "height": 343,
                "image": "215_pink/cock1.png"
            }, 215);
            break;
        case "fuck2":
            g.mod("energy", -25);
            switch (g.internal.customer) {
                case 0:
                    g.mod("receiveAnalMale", 1);
                    g.mod("creamPied", 1);
                    break;
                case 1:
                    g.mod("receiveAnalMale", 3);
                    g.mod("giveHandjobMale", 3);
                    g.mod("creamPied", 1);
                    break;
                case 2:
                    g.mod("receiveAnalFemale", 1);
                    break;
            }
            nav.bg("215_pink/pr_" + g.internal.customer + "_3.jpg");
            break;
        case "reset":
            char.room(215);
            break;
        case "reset0":
            g.mod("money", g.internal.t * 50);
            char.room(215);
            break;
        case "resetWhore":
            nav.killbutton("f");
            break;
        default:
            break;
    }
};

room215.chat = function (chatID) {
    if (chatID === 100) {
        var chat100 = [
            "I want to take you to pound town! ",
            "Hay whore! ",
            "I love an easy lay ",
            "You should meet my cock. I'm sure you'll get along great! ",
            "I want to fuck you like a whorthless whore",
            "Fuck me if I'm wrong, but you look easy. ",
            "I'm going to fuck you like I hate you",
            "My favorite whore is out today, I guess you'll do",
            "You piece of shit! I fucking hate whores like you. You only live to take cock. ",
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat100[Math.floor(Math.random() * chat100.length)],
            button: [
                { chatID: -1, text: "Come on in.", callback: "fuck0" },
                { chatID: 0, text: "I'm going to pass", callback: "resetWhore" }
            ]
        };
    }
    if (chatID === 101) {
        var chat101 = [
            "You are such a tight little slut! My BBC loves little white sissy whores",
            "We're going to fill you with out cum whore! We've never met someone so hungry for all our cocks!",
            "My purple cock loves your tight little hole! I'm going to bend you over and really fuck your hole!"
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat101[g.internal.customer],
            button: [
                { chatID: -1, text: "OoooooOOoooOOo", callback: "fuck1" }
            ]
        };
    }
    if (chatID === 102) {
        var chat102 = [
            "You'll be farting out my cum all day. ",
            "Such a cock hungry tasty cum whore! We'll be back to fill you up again. ",
            "Oh fuck! I've never fucked a slut like you! You're really the best! "
        ];
        return {
            chatID: 0,
            speaker: "random",
            text: chat102[g.internal.customer],
            button: [
                { chatID: 4, text: "UUuugghhhhhh", callback: "fuck2" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I can't believe I'm going to whore myself out. ",
            button: [
                { chatID: 1, text: "[Stand at the door]", callback: "private2b" },
                { chatID: 2, text: "[Stick your ass out the door]", callback: "private2a" },
                { chatID: -1, text: "[Leave]", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I hope I meet someone nice ",
            button: [
                { chatID: -1, text: "[Wait for a customer]", callback: "private3" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I feel so exposed with my asshole haning open for anyone that comes by. ",
            button: [
                { chatID: -1, text: "[Wait for a customer]", callback: "private3" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Damn, got passed by for one of those other sluts! ",
            button: [
                { chatID: 0, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "My ass is so sore! Better get back out there. So many cocks to empty. ",
            button: [
                { chatID: 1, text: "[Stand at the door]", callback: "private2b" },
                { chatID: 2, text: "[Stick your ass out the door]", callback: "private2a" },
                { chatID: -1, text: "[Leave]", callback: "reset0" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "I need more energy to work. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "reset0" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};