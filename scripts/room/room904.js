//Room name
var room904 = {};
room904.main = function () {
    char.settime(10, 7);
    g.internal = { s: 1, tillHorny: g.rand(3, 6), totalOrgasms: 0, wrong: 0, drawVib: false };
    chat(0, 904);
};

room904.btnclick = function (name) {
    switch (name) {
        case "wait":
            g.internal.s++;
            if (g.internal.drawVib) {
                g.internal.drawVib = false;
                nav.button({
                    "type": "btn",
                    "name": "vib",
                    "left": 1407,
                    "top": 891,
                    "width": 92,
                    "height": 161,
                    "image": "904_test/vib.png",
                    "title": "Give her an orgasm"
                }, 904);
            }
            if (g.internal.s > 3)
                g.internal.s = 1;
            g.internal.tillHorny--;
            if (g.internal.tillHorny === 0) {
                if (g.internal.totalOrgasms > 3) {
                    nav.bg("904_test/c1.jpg");
                    nav.killall();
                    chat(4, 904);
                }
                else {
                    nav.bg("904_test/h1.jpg");
                }
            }
            else if (g.internal.tillHorny === -1) {
                nav.bg("904_test/h2.jpg");
            }
            else if (g.internal.tillHorny === -2) {
                nav.bg("904_test/h3.jpg");
                nav.killall();
                chat(1, 904);
            }

            if(g.internal.tillHorny > 0) {
                nav.bg("904_test/t" + g.internal.s + ".jpg");
            }
            break;
        case "vib":
            if (g.internal.tillHorny > 0) {
                g.internal.wrong++;
            }

            if (g.internal.wrong > 2) {
                nav.bg("904_test/w1.jpg");
                nav.killall();
                chat(2, 904);
            }
            else {
                g.internal.totalOrgasms++;
                g.internal.tillHorny = g.rand(3, 6);
                nav.bg("904_test/o1.jpg");
                g.internal.drawVib = true;
                nav.killbutton("vib");
            }
            break;
        default:
            break;
    }
};

room904.chatcatch = function (callback) {
    switch (callback) {
        case "w2":
            nav.bg("904_test/" + callback + ".jpg");
            break;
        case "start":
            nav.wait("wait");
            nav.button({
                "type": "btn",
                "name": "vib",
                "left": 1407,
                "top": 891,
                "width": 92,
                "height": 161,
                "image": "904_test/vib.png",
                "title": "Give her an orgasm"
            }, 904);
            break;
        case "endNoButton":
            sc.completeMission("envy", "gf", false);
            sc.startMission("envy", "breakup");
            sc.completeMissionTask("envy", "breakup", 1);
            char.addtime(37);
            char.room(900);
            break;
        case "endTooMany":
            sc.completeMission("envy", "gf", false);
            sc.startMission("envy", "breakup");
            sc.completeMissionTask("envy", "breakup", 2);
            char.addtime(37);
            char.room(900);
            break;
        case "endGood":
            sc.completeMissionTask("envy", "gf", 6);
            char.addtime(67);
            char.room(900);
            break;
        default:
            break;
    }
};

room904.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Ok. I need to help her with her test. If she looks like she's too horny to " +
                "concentrate I need to push this button to give her a quick orgasm. But if I " +
                "press it too much she'll never finish her test from too many orgasms. If she's " +
                "working on her test or in the middle of an orgasm, I should just wait. ",
            button: [
                { chatID: -1, text: "...", callback: "start" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Awww fuck! I didn't press the button quick enough.  ",
            button: [
                { chatID: -1, text: "...", callback: "endNoButton" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Oh no. Does he know she's having an orgasm in the middle of class? ",
            button: [
                { chatID: 3, text: "...", callback: "w2" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Crap! He's walking her out of class! I must have pressed it too many times! ",
            button: [
                { chatID: -1, text: "...", callback: "endTooMany" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Oh good! It looks like she's done with her test. Man she's fast! She must " +
                "be super smart. I guess I'll meet her at her place. ",
            button: [
                { chatID: -1, text: "...", callback: "endGood" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};