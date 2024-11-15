//Room name
var room326 = {};
room326.main = function () {
    daily.set("rachel");
    nav.button({
        "type": "brush",
        "name": "horse",
        "left": 491,
        "top": 21,
        "width": 1300,
        "height": 1062,
        "image": "326_stable/horse.png"
    }, 326);
    nav.button({
        "type": "hand",
        "name": "cock",
        "left": 857,
        "top": 633,
        "width": 80,
        "height": 184,
        "image": "326_stable/cock0.png"
    }, 326);
    g.internal = 0;
    var navList = [0];
    nav.buildnav(navList);
};

room326.btnclick = function (name) {
    switch (name) {
        case "horse":
            nav.killall();
            nav.bg("326_stable/brush1.jpg");
            chat(0, 326);
            break;
        case "cock":
            if (levels.get("beast").l < 3) {
                chat(27, 326);
            }
            else {
                var horseLove2 = sc.getLevel("horse");
                if (horseLove2 < 2) {
                    chat(2, 326);
                }
                else {
                    nav.killbutton("cock");
                    nav.button({
                        "type": "hand",
                        "name": "cock1",
                        "left": 865,
                        "top": 623,
                        "width": 250,
                        "height": 263,
                        "image": "326_stable/cock1.png"
                    }, 326);
                }
            }
            break;
        case "cock1":
            nav.killbutton("cock1");
            nav.button({
                "type": "hand",
                "name": "cock2",
                "left": 863,
                "top": 621,
                "width": 355,
                "height": 219,
                "image": "326_stable/cock2.png"
            }, 326);
            break;
        case "cock2":
            var horseLevel = sc.getLevel("horse").l;
            if (horseLevel < 3) {
                nav.killall();
                nav.bg("326_stable/horse3.jpg");
                chat(2, 326);
            }
            else if (sc.getMission("horse", "sex").notStarted) {
                chat(3, 326);
            }
            else if (horseLevel < 4) {
                nav.killall();
                nav.bg("326_stable/horse5.jpg");
                chat(9, 326);
            }
            else if (sc.getMissionTask("horse", "sex", 1).notStarted) {
                nav.killall();
                nav.bg("326_stable/horse5.jpg");
                chat(14, 326);
            }
            else {
                nav.killall();
                nav.bg("326_stable/caught0.jpg");
                chat(25, 326);
            }
            break;
        case "bj":
            nav.bg("326_stable/lick" + g.internal + ".jpg");
            if (g.internal === 11) {
                cl.c.cumface = true;
                //gv.mod("giveOralMale", 1);
                //gv.mod("loadSwollowed", 1);
                levels.oralGive(5, false, false, "m");
                nav.killbutton("bj");
                chat(22, 326);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room326.chatcatch = function (callback) {
    switch (callback) {
        case "brushEnd":
            g.internal = "brush";
            sc.modLevel("horse", 40, 4);
            levels.mod("beast", 34, 3);
            gv.mod("money", 20);
            char.addtime(60);
            char.room(0);
            break;
        case "badEnd":
            char.addtime(60);
            char.room(0);
            break;
        case "stop":
            nav.bg("326_stable/bg.jpg");
            break;
        case "horse4":
            nav.killall();
            nav.bg("326_stable/horse4.jpg");
            break;
        case "horse5":
            nav.killall();
            nav.bg("326_stable/horse5.jpg");
            break;
        case "horse6":
            nav.bg("326_stable/horse6.jpg");
            break;
        case "horse7":
            cl.c.cumface = true;
            nav.bg("326_stable/bg1.jpg");
            nav.button({
                "type": "img",
                "name": "horse",
                "left": 491,
                "top": 21,
                "width": 1300,
                "height": 1062,
                "image": "326_stable/horse.png"
            }, 326);
            nav.button({
                "type": "img",
                "name": "cock",
                "left": 857,
                "top": 633,
                "width": 80,
                "height": 184,
                "image": "326_stable/cock0.png"
            }, 326);
            zcl.displayface();
            cl.display();
            break;
        case "horseJackitEnd":
            if (sc.getMission("horse", "sex").notStarted) {
                sc.startMission("horse", "sex");
                sc.completeMissionTask("horse", "sex", 0);
            }
            g.internal = "jack";
            sc.modLevel("horse", 80, 8);
            levels.mod("beast", 50, 4);
            gv.mod("money", 20);
            sex.mod("hand", true, "m", 1);
            char.addtime(60);
            char.room(0);
            break;
        case "checkBrush":
            var checkHorse = sc.getLevel("horse");
            if (checkHorse === 0)
                chat(1, 326);
            else if (checkHorse === 1)
                chat(10, 326);
            else if (checkHorse === 2)
                chat(11, 326);
            else if (checkHorse === 3)
                chat(12, 326);
            else
                chat(13, 326);
            break;
        case "incrementHorse":
            var topLevel;
            switch (g.internal) {
                case "brush":
                    topLevel = 40;
                    break;
                case "jack":
                    topLevel = 60;
                    break;
            }
            var horseLove = sc.getstep("horse");
            if (horseLove < topLevel) {
                horseLove += 8;
                if (horseLove > topLevel)
                    horseLove = topLevel;
                sc.setstep("horse", horseLove);
            }
            break;
        case "lick0":
            nav.killall();
            nav.bg("326_stable/lick0.jpg");
            break;
        case "lick1":
            nav.bg("326_stable/lick1.jpg");
            break;
        case "lick2":
            nav.bg("326_stable/lick2.jpg");
            break;
        case "lick3":
            nav.bg("326_stable/lick3.jpg");
            break;
        case "lick4":
            nav.bg("326_stable/lick4.jpg");
            break;
        case "lick5":
            nav.bg("326_stable/lick5.jpg");
            break;
        case "lick6":
            nav.bg("326_stable/lick6.jpg");
            g.internal = 7;
            nav.next("bj");
            //nav.button({
            //    "type": "btn",
            //    "name": "bj",
            //    "left": 1687,
            //    "top": 615,
            //    "width": 233,
            //    "height": 150,
            //    "image": "526_bar/arrowRight.png"
            //}, 326);
            break;
        case "lick12":
            nav.bg("326_stable/lick12.jpg");
            break;
        case "lick13":
            sc.completeMissionTask("horse", "sex", 1);
            sc.modLevel("horse", 80, 8);
            levels.mod("beast", 50, 5);
            char.addtime(120);
            char.room(0);
            break;
        case "horsey100":
            char.room(326);
            break;
        case "caught1":
            nav.bg("326_stable/caught1.jpg");
            break;
        case "caught2":
            char.addtime(60);
            char.room(0);
            break;
        default:
            break;
    }
};

room326.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "horse",
            text: "*Whinny* *Sigh*",
            button: [
                { chatID: -1, text: "...", callback: "checkBrush" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "That's a good boy. All brushed up. If I keep brushing you I'm sure you'll trust  me.",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 2,
            speaker: "horse",
            text: "*Snort* *Groan*",
            button: [
                { chatID: -1, text: "I don't think he liked that. Probably doens't trust me enough yet. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "What the hell am I doing? I should stop this. ",
            button: [
                { chatID: 4, text: "Rub his penis", callback: "horse4" },
                { chatID: 6, text: "Stop", callback: "stop" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Really. I should stop, what a fucking degenerate I am. ",
            button: [
                { chatID: 5, text: "Stroke his penis", callback: "horse5" },
                { chatID: 6, text: "Stop, Really", callback: "stop" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "STOP YOU SICK FUCK. Stop stop stop!",
            button: [
                { chatID: 7, text: "Stroke faster! ", callback: "horse6" },
                { chatID: 6, text: "Stop or he's going to blow!", callback: "stop" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "I'll just put " + sc.n("horse") + " back and never speak of this. ",
            button: [
                { chatID: -1, text: "...", callback: "badEnd" }
            ]
        },
        {
            chatID: 7,
            speaker: "horse",
            text: "*Whinny* *Neight* *Sigh*",
            button: [
                { chatID: 8, text: "AAAAAaaahhhhh!", callback: "horse7" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "BLECH! I'm covered in horse cum! ",
            button: [
                { chatID: -1, text: "I guess I'll have to walk home and show everyone how disgusting I am.", callback: "horseJackitEnd" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Here I go, jacking of horses again. ",
            button: [
                { chatID: 7, text: "...", callback: "horse6" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "That's a good boy. He doesn't trust me yet, but it's getting closer.",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "I'm almost there. I can feel the horse trusting me more. ",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "I'm pretty sure the horse trusts me pretty good now. ",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "I'm sure the horse completely trusts me now. ",
            button: [
                { chatID: -1, text: "...", callback: "brushEnd" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Hey " + sc.n("horse") + ". Can I fit you in my mouth?",
            button: [
                { chatID: 15, text: "Lick it", callback: "lick0" },
                { chatID: 9, text: "Rub his weiner", callback: "horse5" },
                { chatID: -1, text: "Just brush it", callback: "horse" },
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "Not as bad as I thought. I wonder if I can fit it in my mouth?",
            button: [
                { chatID: 16, text: "...", callback: "lick1" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "So big! I don't think I can fit any more in! I hope I'm deep enough to make him cum.",
            button: [
                { chatID: 17, text: "...", callback: "lick2" },
            ]
        },
        {
            chatID: 17,
            speaker: "rachel",
            text: "This isn't quite what I thought you'd be doin' when you came in to brush " + sc.n("horse") + ". ",
            button: [
                { chatID: 18, text: "!!!", callback: "lick3" },
            ]
        },
        {
            chatID: 18,
            speaker: "rachel",
            text: "I didn't mean for you to stop. Keep going. I've never seen a horse get a blow job. Finish up, I want " +
                "to watch. ",
            button: [
                { chatID: 19, text: "*GULP* ok. ", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "rachel",
            text: "And don't use your hands. Mouth only. ",
            button: [
                { chatID: 20, text: "Oh", callback: "lick4" },
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "Oh shit. What did I get myself into. Luckily it's squishy, I might be able to do this. ",
            button: [
                { chatID: 21, text: "...", callback: "lick5" },
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "MMmmm I can taste some precum. I didn't know horses had precum. Not as bad as I thought. ",
            button: [
                { chatID: -1, text: "Well... here goes. ", callback: "lick6" },
            ]
        },
        {
            chatID: 22,
            speaker: "rachel",
            text: "That's a lot of cum. I guess you won't need dinner today... ",
            button: [
                { chatID: 23, text: "*gulp* ", callback: "lick12" },
            ]
        },
        {
            chatID: 23,
            speaker: "rachel",
            text: "Now I need you to stop playing with that horse's cock. That's horse is a breeder and his balls need to be " +
                "full to sell his sperm. You have almost $900 worth of semen in your mouth. My guards will be watching you " +
                "from now on. ",
            button: [
                { chatID: 24, text: "*swollow* *gasp*", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "rachel",
            text: "Get dressed and get out of my barn you strange weird little slut. Git.",
            button: [
                { chatID: -1, text: "....ok", callback: "lick13" },
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "I'm sure I can get just one little taste...",
            button: [
                { chatID: 26, text: "...", callback: "caught1" },
            ]
        },
        {
            chatID: 26,
            speaker: "random",
            text: "Stop right there scum! " + sc.n("rachel") + " sent me to make sure you weren't sucking that horse's cock. " +
                "Gross, you little weird-o. Put your clothes back on and get out of here before you take a beating. ",
            button: [
                { chatID: -1, text: "oh crap.", callback: "caught2" },
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "I'm not touching a horse cock! Gross! ",
            button: [
                { chatID: -1, text: "[Need beast level 3]", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};