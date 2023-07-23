//Room name
var room221 = {};
room221.main = function () {
    g.pass = 10;
    if (missy.tracker[7].c === 0) {
        chat(0, 221);
    }
    else {
        chat(5, 221);
    }
};

room221.btnclick = function (name) {
    switch (name) {
        case "drawScreen":
            nav.killall();
            var left = 880;
            var top = 170;
            $.each(g.internal, function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": v.n,
                    "left": left + ((i % 5) * 187),
                    "top": top + (i > 4 ? 182 : 0),
                    "width": 157,
                    "height": 162,
                    "image": "221_recip/" + v.i
                }, 221);
            });
            nav.button({
                "type": "btn",
                "name": "passtime",
                "left": 451,
                "top": 311,
                "width": 164,
                "height": 233,
                "image": "221_recip/passtime.png"
            }, 221);
            break;
        case "drawBG":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "pic",
                "left": 865,
                "top": 154,
                "width": 1026,
                "height": 559,
                "image": "221_recip/" + g.internal.i
            }, 221);

            nav.button({
                "type": "btn",
                "name": g.internal.b,
                "left": 1780,
                "top": 170,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 221);
            nav.button({
                "type": "btn",
                "name": "passtime",
                "left": 451,
                "top": 311,
                "width": 164,
                "height": 233,
                "image": "221_recip/passtime.png"
            }, 221);
            break;
        case "main":
            g.internal = [
                { n: "notes", i: "notes.png" },
                { n: "pics", i: "pics.png" }
            ];
            room221.btnclick("drawScreen");
            break;
        case "notes":
            nav.killall();
            g.internal = {
                b: "main",
                i: "notes.jpg"
            };
            room221.btnclick("drawBG");
            break;
        case "pics":
            g.internal = [
                { n: "main", i: "up.png" },
                { n: "pic1", i: "img1.png" },
                { n: "pic2", i: "img2.png" },
                { n: "pic3", i: "img3.png" },
                { n: "pic4", i: "img4.png" },
                { n: "pic5", i: "img5.png" },
                { n: "pic6", i: "img6.png" },
                { n: "pic7", i: "img7.png" },
                { n: "pic8", i: "img8.png" },
                { n: "pic9", i: "img9.png" },
            ];
            room221.btnclick("drawScreen");
            break;
        case "pic1":
        case "pic2":
        case "pic3":
        case "pic4":
        case "pic5":
        case "pic6":
        case "pic7":
        case "pic8":
        case "pic9":
            g.internal = {
                b: "pics",
                i: name + ".jpg"
            };
            room221.btnclick("drawBG");
            break;
        case "passtime":
            if (g.pass > 11) {
                chat(4, 221);
            }
            else {
                //sissy.mod("intel", -2);
                g.popUpNotice("dumber - add this");
                char.settime(g.pass, 17);
                g.pass += 1;
                chat(999, 221);
            }
            break;
        default:
            break;
    }
};

room221.chatcatch = function (callback) {
    switch (callback) {
        case "e1":
        case "e2":
        case "e3":
            nav.bg("221_recip/" + callback + ".jpg");
            break;
        case "start":
            nav.bg("221_recip/work0.jpg");
            nav.button({
                "type": "btn",
                "name": "passtime",
                "left": 451,
                "top": 311,
                "width": 164,
                "height": 233,
                "image": "221_recip/passtime.png"
            }, 221);
            room221.btnclick("main");
            break;
        case "lunch":
            missy.tracker[7].c++;
            char.room(224);
            break;
        default:
            break;
    }
};

room221.chat = function (chatID) {
    if (chatID === 999) {
        var cecilia = sc.n("cecilia");
        var chatLine = [
            "OMG I'm so bored! ",
            "I can't just sit here all day! ",
            "How does " + cecilia + " do this everyday?",
            "I'm going to poke my eyes out, just so something happens. ",
            "I'm getting dumber just sitting here. ",
            "Please! Let something happen! ",
            "Why does this position even exists?",
            "So tired. I wonder if Missy will notice if I just leave? ",
            "I could get so fat just sitting here",
            "Cramp, cramp, cramp! My foot has a terrible cramp! ",
            "I farted and it smells so bad. I hope no one comes in right now. ",
            cecilia + " is such a champ! I couldn't do this everyday! ",
            "I wonder what " + cecilia + " does in her spare time? ",
            cecilia + " must have a wild personal life. ",
            "FUUUUCKKKKKK I'm so bored!"
        ]
        return {
            chatID: 0,
            speaker: "thinking",
            text: chatLine[Math.floor(Math.random() * chatLine.length)],
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "I'm going to take reception this morning. ",
                button: [
                    { chatID: 1, text: "...", callback: "e1" }
                ]
            },
            {
                chatID: 1,
                speaker: "cecilia",
                text: "I'm so excited! Thank you so much! I'm going to the Pink Room! ",
                button: [
                    { chatID: 2, text: "Wait, wait, wait. What do I need to do? ", callback: "e2" }
                ]
            },
            {
                chatID: 2,
                speaker: "cecilia",
                text: "You'll figure it out! Just don't make Missy mad! ",
                button: [
                    { chatID: 3, text: "but....", callback: "e3" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "Damn " + sc.n("cecilia") + "! I can't believe she just ran off without telling me " +
                    "what I need to do! And what the hell in the pink room? It sounds like she's having " +
                    "fun while I'm just sitting here. Let me see if there's any notes on her computer to help ",
                button: [
                    { chatID: -1, text: "...", callback: "start" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "YES! Time for lunch! ",
                button: [
                    { chatID: -1, text: "...", callback: "lunch" }
                ]
            },
            {
                chatID: 5,
                speaker: "cecilia",
                text: "PINK ROOM TIME!",
                button: [
                    { chatID: -1, text: "...bye", callback: "start" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};