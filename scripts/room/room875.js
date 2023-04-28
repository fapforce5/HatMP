//Room name
var room875 = {};
room875.main = function () {
    if (g.isNight()) {
        chat(3, 875);
        nav.buildnav([0]);
    }
    else {
        var candyStep = sc.getstep("candy");
        var cheerlevel = g.get("cheerlevel");
        if (g.dt.getDay() === 0) {
            nav.bg("875_entrance/gameday.jpg");
            chat(8, 875);
            if (cheerlevel === 7) {
                chat(11, 875);
            }
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
            var cheerLevel = g.get("cheerlevel");
            if (cheerLevel < 3) {
                g.internal = cl.hasoutfit("workout");
                if (g.internal === null)
                    char.room(876);
                else {
                    chat(999, 875);
                    nav.buildnav([0]);
                }
            }
            else if (cheerLevel > 6) {
                g.internal = cl.hasoutfit("cheerleader");
                if (g.internal === null)
                    char.room(876);
                else {
                    cl.nude();
                    cl.c.shirt = "cl";
                    cl.c.pants = "cl";
                    cl.c.panties = "cl";
                    cl.c.socks = "cl";
                    cl.c.shoes = "cl";
                    cl.display();
                    char.room(876);
                }

            }
            else {
                g.internal = cl.hasoutfit("cheerleader");
                if (g.internal === null) {
                    if (g.get("cheerleader") < 95) {
                        chat(9, 875);
                    }
                    else {
                        char.room(876);
                    }
                }
                else {
                    chat(1000, 875);
                    nav.buildnav([0]);
                }
            }
            break;
        case "cheer1_0":
            cl.nude();
            cl.c.shirt = "cl";
            cl.c.pants = "cl";
            cl.c.panties = "cl";
            cl.c.socks = "cl";
            cl.c.shoes = "cl";
            cl.display();
            zcl.displayMain(0, 650, .2, "clothes", true);
            nav.bg("875_entrance/cheer1_0.jpg");
            break;
        case "cheer1_1":
            cl.c.pants = null;
            cl.display();
            zcl.displayMain(0, 650, .2, "clothes", true);
            break;
        case "cheer1_2x":
            cl.c.pants = "cl";
            cl.c.panties = null;
            cl.display();
            nav.killall();
            nav.bg("875_entrance/cheer1_2.jpg");
            break;
        case "cheer1_3":
        case "cheer1_2":
        case "cheer1_4":
        case "cheer1_5":
        case "cheer1_6":
        case "cheer1_7":
        case "cheer1_8":
        case "cheer1_9":
        case "cheer1_10":
        case "cheer1_11":
        case "cheer1_12":
            nav.bg("875_entrance/" + callback + ".jpg");
            break;
        case "cheer1_13":
            g.mod("fame", 30);
            g.set("cheerlevel", 8);
            g.set("cheerleader", 100);
            char.settime(17, 12);
            char.room(51);
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
    else if (chatID === 1000) {
        return {
            chatID: 1000,
            speaker: "candy",
            text: "Oh. You need to wear your cheer leader outfit. You're missing your " + g.internal + ". ",
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
                    { chatID: -1, text: "Leave", callback: "leave" },
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
            {
                chatID: 8,
                speaker: "thinking",
                text: "Big game today. Better take off. ",
                button: [
                    { chatID: -1, text: "Leave", callback: "leave" },
                ]
            },
            {
                chatID: 9,
                speaker: "candy",
                text: "Did you do all your practices this week? ",
                button: [
                    { chatID: 10, text: "Well, umm. No, not a lot", callback: "" },
                ]
            },
            {
                chatID: 10,
                speaker: "candy",
                text: "You should go practice some more or " + sc.n("stacy") + " will be pissed. I'll just tell her you're " +
                    "sick. ",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "leave" },
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "My first game! I'm so excited! I can't wait to cheer in front of everyone! ",
                button: [
                    { chatID: 12, text: "Get ready and meet the girls. ", callback: "cheer1_0" },
                    { chatID: -1, text: "Screw it. I'm not cheering today", callback: "leave" },
                ]
            },
            {
                chatID: 12,
                speaker: "stacy",
                text: "Gotta do a pre-game spakies check. Strip off your skirt. ",
                button: [
                    { chatID: 13, text: "I'm wearing my spakies. What's going on? ", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "candy",
                text: "Oh yes. We all had to do the pre-game spakies check for our first game. ",
                button: [
                    { chatID: 14, text: "of course there's a check. ", callback: "cheer1_1" },
                ]
            },
            {
                chatID: 14,
                speaker: "stacy",
                text: "It's a good thing I checked. Why are you wearing your spankies to your first game! It's such " +
                    "bad luck. Ever cheerleader that isn't an idiot knows not to wear spankies to their first game! Take " +
                    "those off. Hurry up, we gotta get out there. ",
                button: [
                    { chatID: 15, text: "Oh. I didn't know that. Ok.", callback: "cheer1_2x" },
                ]
            },
            {
                chatID: 15,
                speaker: "random",
                text: "We're the Stars, we like to fight. Let's go team and win tonight<br/>" +
                    "Our boys are big and strong. Think you'll win, then you are wrong<br/>" +
                    "Your boys are small and sick. We'll slap you with our giant dick",
                button: [
                    { chatID: 16, text: "...", callback: "cheer1_2" },
                ]
            },
            {
                chatID: 16,
                speaker: "random",
                text: "Push them back, push them back, wwwaaayyyy back!",
                button: [
                    { chatID: 17, text: "...", callback: "cheer1_3" },
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "Crap! Did I just flash my penis to everyone? Why would wearing spankies be back luck? Cheering " +
                    "can be so dumb sometimes. ",
                button: [
                    { chatID: 18, text: "...", callback: "cheer1_4" },
                ]
            },
            {
                chatID: 18,
                speaker: "random",
                text: "We're the stars, we like to fight. We're the stars go win tonight!",
                button: [
                    { chatID: 19, text: "...", callback: "cheer1_5" },
                ]
            },
            {
                chatID: 19,
                speaker: "me",
                text: "Go Stars!!!! .... huh?",
                button: [
                    { chatID: 20, text: "...", callback: "cheer1_6" },
                ]
            },
            {
                chatID: 20,
                speaker: "random",
                text: "*GASP*",
                button: [
                    { chatID: 21, text: "...", callback: "cheer1_7" },
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "OOOoooooohhh fuck",
                button: [
                    { chatID: 22, text: "...", callback: "cheer1_8" },
                ]
            },
            {
                chatID: 22,
                speaker: "random",
                text: "Tiny dick... What a freak... Is that a giant clit... Move over, I want to see... ",
                button: [
                    { chatID: 23, text: "...", callback: "cheer1_9" },
                ]
            },
            {
                chatID: 23,
                speaker: "candy",
                text: "That was really mean you two. ",
                button: [
                    { chatID: 24, text: "...", callback: "cheer1_10" },
                ]
            },
            {
                chatID: 24,
                speaker: "me",
                text: "*SOB* I can't *SOB* Why are they so mean *SOB* ",
                button: [
                    { chatID: 25, text: "...", callback: "cheer1_11" },
                ]
            },
            {
                chatID: 25,
                speaker: "candy",
                text: "Awwww, that was so mean of them. I didn't know they were going to do that. I'm so sorry that " +
                    "happened to you. ",
                button: [
                    { chatID: 26, text: "*sob*", callback: "cheer1_12" },
                ]
            },
            {
                chatID: 26,
                speaker: "candy",
                text: "That went too far. We should get back at them. Get them really good. ",
                button: [
                    { chatID: 27, text: "really, *sniffle*", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "candy",
                text: "Really. I don't know how right now, but we'll think of a way. In the mean time why don't we " +
                    "go home to get some ice cream and girl talk. Sound good? ",
                button: [
                    { chatID: -1, text: "ok", callback: "cheer1_13" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};