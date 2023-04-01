//Room name
var room875 = {};
room875.main = function () {
    if (g.isNight()) {
        chat(3, 875);
        nav.buildnav([0]);
    }
    else {
        var candyStep = sc.getstep("candy");

        if (g.dt.getDay() === 0) {
            chat(3, 875);
        }
        else if (g.dt.getDay() === 6) {
            if (candyStep < 102) {
                nav.bg("875_entrance/security.jpg");
                nav.buildnav([0]);
                chat(1, 875);
            }
            else if (g.hourBetween(5, 11)) {
                nav.bg("875_entrance/candy.jpg");
                chat(7, 875);
            }
            else {
                nav.bg("875_entrance/security.jpg");
                nav.buildnav([0]);
                chat(2, 875);
            }
        }
        else {
            nav.bg("875_entrance/security.jpg");
            nav.buildnav([0]);
            chat(0, 875);
        }
    }
};

room875.btnclick = function (name) {
    switch (name) {
        case "strip":
            cl.nude();
            g.mod("arousal", 50);
            zcl.displayMain(200, 800, .10, "clothes", false);
            nav.killbutton("strip");
            chat(4, 875);
            break;
        case "assup":
            nav.killbutton("assup");
            nav.killbutton("oddexit");
            g.mod("arousal", 50);
            zcl.assup(550, 600, .7);
            chat(5, 875);
            break;
        case "jack":
            nav.killbutton("jack");
            nav.killbutton("oddexit");
            zcl.kill();
            nav.bg("875_entrance/odd3.jpg");
            cl.doCum(false);
            chat(6, 875);
            break;
        case "oddexit":
            cl.undo();
            char.room(0);
            break;
        default:
            break;
    }
};

room875.chatcatch = function (callback) {
    switch (callback) {
        case "odd0":
            nav.bg("875_entrance/oddbg.jpg");
            zcl.displayMain(200, 800, .10, "clothes", false);
            nav.button({
                "type": "btn",
                "name": "strip",
                "left": 1477,
                "top": 183,
                "width": 212,
                "height": 419,
                "title": "Strip naked",
                "image": "875_entrance/odd0.png"
            }, 875);
            break;
        case "odd1":
            nav.button({
                "type": "btn",
                "name": "assup",
                "left": 1363,
                "top": 267,
                "width": 361,
                "height": 334,
                "title": "Stick your ass up.",
                "image": "875_entrance/odd1.png"
            }, 875);
            nav.button({
                "type": "btn",
                "name": "oddexit",
                "left": 158,
                "top": 229,
                "width": 396,
                "height": 372,
                "title": "Get dressed and leave",
                "image": "875_entrance/oddexit.png"
            }, 875);
            break;
        case "odd2":
            if (cl.c.chastity === null) {
                nav.button({
                    "type": "btn",
                    "name": "jack",
                    "left": 1455,
                    "top": 206,
                    "width": 280,
                    "height": 395,
                    "title": "Jack your pp",
                    "image": "875_entrance/odd2.png"
                }, 875);
            }
            nav.button({
                "type": "btn",
                "name": "oddexit",
                "left": 158,
                "top": 229,
                "width": 396,
                "height": 372,
                "title": "Get dressed and leave",
                "image": "875_entrance/oddexit.png"
            }, 875);
            break;
        case "odd3":
            nav.killall();
            nav.bg("875_entrance/oddbg.jpg"); 
            zcl.assup(550, 600, .7);
            nav.buildnav([0]);
            break;
        case "endjack":
            cl.undo();
            char.room(0);
            break;
        case "leave":
            char.room(0);
            break;
        case "practice":
            g.internal = cl.hasoutfit("workout");
            if (g.internal === null)
                char.room(876);
            else {
                chat(999, 875);
                nav.buildnav([0]);
            }
            break;
        default:
            break;
    }
};

room875.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "candy",
            text: "Oh. You need to wear some workout clothes. You're missing your " + g.internal + ". ",
            button: [
                { chatID: -1, text: "I'll go change", callback: "" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "random",
                text: "Campus security! You can't be here when there's no game person of unkown gender! Skidaddle.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "random",
                text: "Are you trying to spy on the cheerleaders! So uncouth. Scoot scoot.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "random",
                text: "Cheerleader practice already started. They told me to tell you to scram and don't be late.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "There's nobody here. So eerie to come here at night. I could do anything. ",
                button: [
                    { chatID: -1, text: "Stand in the middle of the football field", callback: "odd0" },
                    { chatID: -1, text: "Do nothing", callback: "" },
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "Ooo that breeze is refreshing and arousing. ",
                button: [
                    { chatID: -1, text: "...", callback: "odd1" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "I'm such a slut sticking my bare ass up in the middle of the football field for anyone to see. ",
                button: [
                    { chatID: -1, text: "...", callback: "odd2" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "FFFUUUU!!!! I'm such a weirdo. I totally came all over the football field. I hope nobody get tackeled " +
                    "face first here. ",
                button: [
                    { chatID: -1, text: "Lay around in your cum for a bit and enjoy it. Freak.", callback: "odd3" },
                    { chatID: -1, text: "Get dressed and leave like a normal pervert.", callback: "endjack" },
                ]
            },
            {
                chatID: 7,
                speaker: "candy",
                text: "Hey cutie! Let's get to practice!",
                button: [
                    { chatID: -1, text: "Go to cheerleading practice", callback: "practice" },
                    { chatID: -1, text: "I can't make it. Sorry", callback: "leave" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};