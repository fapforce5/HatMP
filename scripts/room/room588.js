//Room name
var room588 = {};
room588.main = function () {
    if (g.pass === "sporty_588") {
        g.pass = null;
        zcl.displayMain(100, 500, .1, "clothes", false);
        nav.button({
            "type": "img",
            "name": "sporty",
            "left": 743,
            "top": 0,
            "width": 705,
            "height": 1080,
            "image": "588_doofus/sporty.png"
        }, 586);
        chat(0, 588);
        return;
    }
    if (sc.getMissionTask("eva", "sissy", 8).complete && !daily.get("eva588") && g.rand(0, 3) === 0) {
        daily.set("eva588");
        nav.bg("588_doofus/eva.webp");
        chat(5, 588);
    }


    nav.buildnav([585, 586, 587, 589]);
};

room588.btnclick = function (name) {
    switch (name) {
        case "sporty":
            switch (g.internal.step) {
                case 1: nav.bg("588_doofus/sporty1.jpg"); break;
                case 2: nav.bg("588_doofus/sporty2.jpg"); break;
                case 3: nav.bg("588_doofus/sporty3.jpg");
                    nav.killbutton("sporty");
                    sc.select("sporty_balls", "588_doofus/icon_balls.png", 0);
                    sc.select("sporty_dick", "588_doofus/icon_dick.png", 1);
                    break;
                case 4: nav.bg("588_doofus/sporty4_" + g.internal.p + ".jpg"); break;
                case 5: nav.bg("588_doofus/sporty5_" + g.internal.p + ".jpg"); break;
                case 6:
                    if (g.internal.p === "me") {
                        levels.oral(4, "m", "!doofus", false, null, true);
                    }
                    nav.bg("588_doofus/sporty6.jpg");
                    nav.killbutton("sporty");
                    nav.button({
                        "type": "tongue",
                        "name": "sporty",
                        "left": 1314,
                        "top": 653,
                        "width": 203,
                        "height": 203,
                        "image": "588_doofus/sporty_butthole.png"
                    }, 588);
                    break;
                case 7: nav.bg("588_doofus/sporty7.jpg"); break;
                case 8:
                    levels.oralass("n", "!sporty");
                    nav.killbutton("sporty");
                    nav.bg("588_doofus/sporty8.jpg");
                    nav.next("sporty");
                    break;
                case 9:
                    nav.bg("588_doofus/sporty9_" + gender.pronoun("f") + ".jpg");
                    nav.killbutton("sporty");
                    chat(1, 588);
                    break;
                case 11:
                    nav.killbutton("sporty");
                    nav.bg("588_doofus/sporty11.jpg");
                    chat(2, 588);
                    break;
            }

            g.internal.step++;
            break;
        case "sporty_balls":
            nav.killall();
            g.internal.p = "sporty";
            nav.bg("588_doofus/sporty4_happy.jpg");
            nav.next("sporty");
            break;
        case "sporty_dick":
            nav.killall();
            g.internal.p = "me";
            nav.bg("588_doofus/sporty4_sad.jpg");
            nav.next("sporty");
            break;
        default:
            break;
    }
};

room588.chatcatch = function (callback) {
    switch (callback) {
        case "sporty0":
            g.internal = { step: 1, p: "" };
            nav.killall();
            nav.bg("588_doofus/sporty0.jpg");
            nav.next("sporty");
            break;
        case "sporty10":
            nav.bg("588_doofus/sporty10.jpg");
            nav.next("sporty");
            g.internal = { step: 11, p: "" };
            break;
        case "sporty12":
            nav.bg("588_doofus/sporty12_" + gender.pronoun("f") + ".jpg");
            levels.oral(2, "n", "sporty", true);
            levels.swallowCum("m", "!doofus");
            break;
        case "sporty13":
            nav.bg("588_doofus/sporty13.jpg");
            break;
        case "sportyEnd":
            daily.set("sportyAndDoofus");
            char.addtime(65);
            char.room(585);
            break;
        case "leave":
            char.addtime(25);
            char.room(585);
            break;
        default:
            break;
    }
};

room588.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "sporty",
            text: "So should we strip down and put on a show for him baby?",
            button: [
                { chatID: -1, text: "Oh yeah!", callback: "sporty0" }
            ]
        },
        {
            chatID: 1,
            speaker: "!doofus",
            text: "My favorite view, two sluts ready for my cock!",
            button: [
                { chatID: -1, text: "Mmmm *lick* so ready", callback: "sporty10" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I can tell he's getting close to cumming, and so is Sporty. I can feel her " +
                "little clit twitching in my mouth. Should I get up so I don't have to eat their " +
                "cum, or just keep laying back and let it drip into my mouth?",
            button: [
                { chatID: 3, text: "[Lay back and eat their cum]", callback: "sporty12" },
                { chatID: 4, text: "[Get out of the way]", callback: "sporty13" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Who are we trying to fool? We all knew I was going to guzzle down that yummy " +
                "cum! I'm a sissy slut!!!",
            button: [
                { chatID: 4, text: "...", callback: "sporty13" },
            ]
        },
        {
            chatID: 4,
            speaker: "!sporty",
            text: "That was amazing! I love, and I mean LOVE having my clitty licked while I take " +
                "it up my bussy hole! I'm so glad I went to the sissy school so I could meet " +
                "my best friend ever! Love you!",
            button: [
                { chatID: -1, text: "Love you too!", callback: "sportyEnd" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Holy shit, who's that fucking my " + g.makeSingular(sc.n("el")) + "? He's so " +
                "dreamy. That's a real man! I mean, my " + g.makeSingular(sc.n("el")) + " needs " +
                "to make better choices with men. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};