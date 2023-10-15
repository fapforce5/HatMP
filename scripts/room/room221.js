//Room name
var room221 = {};
room221.main = function () {
    g.pass = 10;
    g.pass = {
        t: 10,
        events:
            [
                { t: 10, e: "jeffery0", c: "That weird guy" },
                { t: 11, e: null, c: "Nothing" },
                { t: 12, e: null, c: "Nothing" }
            ]
    };
    if (missy.st[7].c === 0) {
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
                    "top": top + (Math.floor(i / 5) * 182),
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
                { n: "sch", i: "sch.png" },
                { n: "notes", i: "notes.png" },
                { n: "pics", i: "pics.png" }
            ];
            room221.btnclick("drawScreen");
            break;
        case "notes":
            g.internal = {
                b: "main",
                i: "notes.jpg"
            };
            room221.btnclick("drawBG");
            break;
        case "sch":
            g.internal = {
                b: "main",
                i: "sch.jpg"
            };
            room221.btnclick("drawBG");
            $.each(g.pass.events, function (i, v) {
                nav.t({
                    type: "img",
                    name: "name",
                    left: 1050,
                    top: 350 + (i * 50),
                    font: 30,
                    hex: "#000000",
                    text: v.t + ":00 - " + v.c
                });
            });
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
                { n: "pic10", i: "img10.png" },
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
        case "pic10":
            g.internal = {
                b: "pics",
                i: name + ".jpg"
            };
            room221.btnclick("drawBG");
            break;
        case "passtime":
            if (g.pass.t > 11) {
                chat(4, 221);
            }
            else {
                //replace this with checking g.pass.events (add random uninvited visits)
                if (Math.floor(Math.random() * 3) === 0) {
                    char.settime(g.pass.t, 17);
                    g.pass.t += 1;
                    //if jeffery - can smell your panties, offers you cash for them
                    nav.bg("221_recip/cust_jeff0.jpg");
                    chat(6, 221);
                }
                else {
                    //sissy.mod("intel", -2);
                    g.popUpNotice("dumber - add this");
                    char.settime(g.pass.t, 17);
                    g.pass.t += 1;
                    chat(999, 221);
                }
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
            missy.didJob(3, 1, null);
            char.room(224);
            break;
        case "resetbg":
            nav.bg("221_recip/work0.jpg");
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
            {
                chatID: 6,
                speaker: "jeffery",
                text: "Oh gross. I can smell male's underwear. I'm here to see Missy. ",
                button: [
                    { chatID: -1, text: "yes come in (if not on sch then trouble)", callback: "resetbg" },
                    { chatID: -1, text: "no go away (if on schedule you get in trouble)", callback: "resetbg" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};