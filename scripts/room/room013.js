 //Sister's Room
var room13 = {};

room13.main = function () {
    g.internal = "";
    var btnList = new Array();
    var lockdrawer = gv.get("lockdrawer");
    if (lockdrawer) 
        nav.bg("13_sisterRoom/rooml.jpg", "13_sisterRoom/roomNightl.jpg");

    //if (g.pass === "endSleepyTime") {
    //    g.pass = "";
    //    nav.bg("28_transformation/twin.jpg");
    //    chat(176, 13);
    //}
    //else
    if (g.hourBetween(22, 25) || g.hourBetween(0, 6)) {
        nav.bg("13_sisterRoom/roomSleep.jpg", "13_sisterRoom/roomSleep.jpg");
        btnList = [{
            "type": "btn",
            "name": "bed",
            "left": 1039,
            "top": 527,
            "width": 543,
            "height": 288,
            "image": "13_sisterRoom/13_bedFar.png"
        }];
    }
    else {
        if (sc.getTimeline("lola").thisRoom) {
            if (cl.isLewd()) {
                btnList = new Array();
                nav.bg("13_sisterRoom/013_angryCaught.jpg");
                chat(249, 13);
            }
            else {
                btnList = [{
                    "type": "btn",
                    "name": "lola",
                    "left": 1449,
                    "top": 260,
                    "width": 215,
                    "height": 820,
                    "image": "13_sisterRoom/13_lola_reading.png"
                },
                {
                    "type": "btn",
                    "name": "eva",
                    "left": 760,
                    "top": 295,
                    "width": 291,
                    "height": 785,
                    "image": "13_sisterRoom/13_eva_sitting.png"
                }];
                g.internal = { lola: scc.getSet("lola"), eva: scc.getSet("eva") };
                //if (g.internal.lola.anyanyChanges || g.internal.eva.anyanyChanges) {
                    //put logic for changes / secret here
                //}
                if (cl.c.cumface) {
                    //secret increases
                }
            }
        }
        else {
            btnList = [
                {
                    "type": "btn",
                    "name": "puter",
                    "left": 295,
                    "top": 551,
                    "width": 295,
                    "height": 260,
                    "image": "13_sisterRoom/puter.png",
                    "night": "13_sisterRoom/puterNight.png"
                },
                {
                    "type": "btn",
                    "name": "nightstand",
                    "left": 1577,
                    "top": 562,
                    "width": 318,
                    "height": 236,
                    "image": "13_sisterRoom/nightstand.png",
                    "night": "13_sisterRoom/nightstandNight.png"
                },
            ];
            if (lockdrawer) {
                btnList.push({
                    "type": "btn",
                    "name": "dresser",
                    "left": 907,
                    "top": 288,
                    "width": 226,
                    "height": 315,
                    "image": "13_sisterRoom/13_dresserl.png",
                    "night": "13_sisterRoom/13_dresserNightl.png"
                });
            }
            else {
                btnList.push({
                    "type": "btn",
                    "name": "dresser",
                    "left": 907,
                    "top": 288,
                    "width": 226,
                    "height": 315,
                    "image": "13_sisterRoom/13_dresser.png",
                    "night": "13_sisterRoom/13_dresserNight.png"
                });
            }
            if (!cl.hasClothing("panties", "w")){
                btnList.push({
                    "type": "btn",
                    "name": "laundry",
                    "left": 1642,
                    "top": 769,
                    "width": 205,
                    "height": 98,
                    "image": "13_sisterRoom/13_laundry.png",
                    "night": "13_sisterRoom/13_laundryNight.png"
                });
            }
        }
    }

    navList = [11];

    $.each(btnList, function (i, v) {
        nav.button(v, 13);
    });

    nav.buildnav(navList);
};

room13.btnclick = function (name) {
    switch (name) {
        case "laundry":
            if (!cl.hasClothing("panties", "w"))
                nav.button({
                    "type": "btnNoHover",
                    "name": "panties",
                    "left": 611,
                    "top": 162,
                    "width": 1004,
                    "height": 757,
                    "image": "13_sisterRoom/panties.png"
                }, 13);
            else
                chat(4, 13);
            break;
        case "nightstand":
            nav.killall();
            nav.bg("13_sisterRoom/drawer.jpg");
            if (!inv.has("flatmateKey"))
                nav.button({
                    "type": "btn",
                    "name": "flatmateKey",
                    "left": 1205,
                    "top": 267,
                    "width": 378,
                    "height": 509,
                    "image": "13_sisterRoom/key.png"
                }, 13);
            nav.button({
                "type": "btn",
                "name": "closenightstand",
                "left": 915,
                "top": 850,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 13);
            break;
        case "flatmateKey":
            inv.add("flatmateKey");
            nav.killbutton("flatmateKey");
            chat(25, 13);
            break;
        case "closenightstand":
            char.room(13);
            break;
        case "panties":
            if (!gv.get("lolaPanties")) {
                gv.set("lolaPanties", true);
                levels.mod("xdress", 33, 1);
            }

            if (levels.get("xdress").l < 1) 
                chat(5, 13);
            else 
                chat(6, 13);
            break;
        case "dresser":
            if (gv.get("lockdrawer"))
                chat(7, 13);
            else {
                nav.killall();
                nav.bg("13_sisterRoom/013_pantyDrawer.jpg");
                chat(0, 13);
            }
            break;
        case "puter":
            char.room(31);
            break;
        case "lola":
            nav.button({
                "type": "img",
                "name": "chatbg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1001_rand/black_25.png"
            }, g.roomID);
            sc.select("lolachat", "13_sisterRoom/icon_chatLola.png", 0);
            if (!sc.getMission("lola", "massage").notStarted)
                sc.select("lolamassage", "13_sisterRoom/icon_massage.png", 1);
            if (!sc.getMission("lola", "spin").notStarted)
                sc.select("spin", "13_sisterRoom/icon_spinthebottle.png", 2);
            if (!sc.getMission("lola", "tord").notStarted)
                sc.select("tord", "13_sisterRoom/icon_truthordare.png", 3);
            //sc.select("dick", "13_sisterRoom/icon_dick.png", 4);
            sc.select("clearChat", "13_sisterRoom/icon_cancel.png", 5);
            break;
        case "eva":
            nav.button({
                "type": "img",
                "name": "chatbg",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "1001_rand/black_25.png"
            }, g.roomID);
            sc.select("evachat", "13_sisterRoom/icon_chatEva.png", 0);
            if (!sc.getMission("eva", "massage").notStarted)
                sc.select("evamassage", "13_sisterRoom/icon_feet.png", 1);
            if (!sc.getMission("lola", "spin").notStarted)
                sc.select("spin", "13_sisterRoom/icon_spinthebottle.png", 2);
            if (sc.getMission("lola", "tord").inProgress)
                sc.select("tord", "13_sisterRoom/icon_truthordare.png", 3);
            //sc.select("dick", "13_sisterRoom/icon_dick.png", 4);
            sc.select("clearChat", "13_sisterRoom/icon_cancel.png", 5);
            break;
        case "clearChat":
            nav.killbutton("chatbg");
            nav.killbutton("lolachat");
            nav.killbutton("evachat");
            nav.killbutton("lolamassage");
            nav.killbutton("evamassage");
            nav.killbutton("spin");
            nav.killbutton("tord");
            nav.killbutton("dick");
            nav.killbutton("clearChat");
            break
        case "lolachat":
            room13.btnclick("clearChat");
            var massageStep = sc.taskGetStep("lola", "massage");
            switch (sc.taskGetStep("lola", "talk")) {
                case 0: chat(10, 13); break;
                case 1: chat(14, 13); break;
                case 2: if (massageStep > 0) chat(17, 13); else chat(14, 13); break;
            }
            break;
        case "evachat":
            room13.btnclick("clearChat");
            switch (sc.taskGetStep("eva", "talk")) {
                case 0: chat(26, 13); break;
                case 1: chat(33, 13);
            }
            break;
        case "lolamassage":
            char.room(4);
            break;
        case "evamassage":
            char.room(5);
            break;
        case "spin":
            room13.btnclick("clearChat");
            chat(40, 13);
            break;
        case "tord":
            room13.btnclick("clearChat");
            chat(40, 13);
            //char.room(23);
            break;
        case "dick":

            break;
        
        case "reset":
            char.room(13);
            break;
        default:
            break;
    }
};

room13.chatcatch = function (callback) {

    $.each(callback.split(" "), function (i, v) {
        switch (v) {
            case "lolaDayEvent":
                daily.set("lola");
                char.room(13);
                break;
            case "lolaLevelDown":
                sc.modLevel("lola", -48, 999);
                break;
            case "evaLevelDown":
                sc.modLevel("eva", -48, 999);
                break;
            case "lolaLevelQuater":
                sc.modLevel("lola", 26, 999);
                break;
            case "lolaLevelHalf":
                sc.modLevel("lola", 53, 999);
                break;
            case "lolaLevelfull":
                sc.modLevel("lola", 101, 999);
                break;
            case "evaLevelQuater":
                sc.modLevel("eva", 26, 999);
                break;
            case "evaLevelHalf":
                sc.modLevel("eva", 53, 999);
                break;
            case "evaLevelfull":
                sc.modLevel("eva", 101, 999);
                break;
            case "secret5":
                sc.modSecret("lola", 5);
                sc.modSecret("eva", 5);
                break;
            case "dom":
                levels.mod("dom", 20, 999);
                break;
            case "sub":
                levels.mod("sub", 20, 999);
                break;
            case "beast":
                levels.mod("beast", 20, 999);
                break;
            case "charisma":
                levels.mod("charisma", 25, 999);
                break;
            case "xdress1":
                levels.mod("xdress", 33, 1);
                break;
            case "reset":
                char.room(13);
                break;
            case "leave":
                char.room(11);
                break;
            case "dresserLocked":
                gv.set("lockdrawer", true);
                break;
            case "arousal":
                gv.mod("arousal", 75);
                break;
            case "sniff1":
            case "sniff2":
                nav.bg("13_sisterRoom/" + v + ".jpg");
                break;
            case 'takePanties':
                cl.add("panties", "w");
                levels.mod("xdress", 33, 2);
                nav.killbutton("panties");
                break;
            case "killPantyIcon":
                nav.killbutton("panties");
                break;
            case "evaMassageEnd":
                char.addtime(45);
                daily.set("eva");
                sc.modLevel("eva", 75, g.internal.level);
                char.room(13);
                break;
            case "evatalk0":
                char.addtime(20);
                daily.set("evatalk");
                sc.completeMissionTask("eva", "talk", 0, true);
                sc.modLevel("eva", 27, 0);
                char.room(13);
                break;
            case "evatalk1":
                char.addtime(20);
                daily.set("evatalk");
                sc.completeMissionTask("eva", "talk", 0, true);
                sc.startMission("eva", "massage");
                sc.modLevel("eva", 27, 1);
                char.room(13);
                break;
            case "talkLola0":
                char.addtime(20);
                daily.set("lolatalk");
                sc.completeMissionTask("lola", "talk", 0, true);
                sc.modLevel("lola", 27, 4);
                char.room(13);
                break;
            case "talkLola1":
                char.addtime(20);
                daily.set("lolatalk");
                sc.startMission("lola", "massage");
                sc.completeMissionTask("lola", "talk", 1, true);
                sc.modLevel("lola", 27, 4);
                char.room(13);
                break;
            case "rollChrisma2":
                charisma.init(g.internal.charisma, "massage2chanceWin", "massage2chanceLose", g.roomID);
                break;
        };
    });
};

room13.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 0,
            speaker: "me",
            text: "error",
            button: []
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "So many panties...",
                button: [
                    { chatID: 23, text: "Sniff " + sc.n("eva") + "'s and " + sc.n("lola") + "'s panties", callback: "sniff1 arousal xdress1" },
                    { chatID: -1, text: "Close the drawer.", callback: "reset" }
                ]
            },
            {
                chatID: 1,
                speaker: "lola",
                text: sc.n("me") + "!!!! what are you doing. Are you going through our panties!!!",
                button: [
                    { chatID: 2, text: "....", callback: "secret5" }
                ]
            },
            {
                chatID: 2,
                speaker: "eva",
                text: sc.n("lola") + ", are you surprised. You always knew " + sc.n("me") + " was a dirty perv.",
                button: [
                    { chatID: 3, text: "I was just looking for my...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "lola",
                text: "Get out!! Get out get out get out!!!",
                button: [
                    { chatID: -1, text: "[Leave]", callback: "lolaLevelDown evaLevelDown dresserLocked leave" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "Nothing in here but dirty clothes...",
                button: [
                    { chatID: -1, text: "Close", callback: "killPantyIcon" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: sc.n("lola") + "'s dirty panties! So simple and modest. And so dirty. The smell is so musky and sweet. " +
                    "She must have worn these all day and peed a bit in them. So dirty, but so sexy!  ",
                button: [
                    { chatID: -1, text: "...", callback: "killPantyIcon" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "Should I take " + sc.n("lola") + "'s dirty panties?",
                button: [
                    { chatID: -1, text: "Gross... no", callback: "killPantyIcon" },
                    { chatID: -1, text: "yea... ", callback: "takePanties" }
                ]
            },
             {
                chatID: 7,
                speaker: "me",
                text: "Dammit! They locked their panty drawer. Try to jack off into their panties once and you're locked out forever.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 8,
                speaker: "eva",
                text: "Hey panty sniffer, can't handle a burger job? ",
                button: [
                    { chatID: 9, text: "Eat my boogers " + sc.n("eva"), callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "lola",
                text: "I'm good. Thanks. ",
                button: [
                    { chatID: -1, text: "Ok. cool", callback: "lolaDayEvent" }
                ]
            },
            {
                chatID: 10,
                speaker: "lola",
                text: "Hey big guy! It's ok that you didn't do well in school. We're still rooting for you. " +
                    " I just wanted to say that I'm really proud of you. You've been working so hard lately, and it's showing. " +
                    "I can see how much you've accomplished, and it's amazing. I'm so lucky to have you as my big brother. You're " +
                    "my best friend, and I love you very much. ",
                button: [
                    { chatID: 11, text: "Thanks. I love you too.", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "lola",
                text: "I know. Our love will never be broken. Also our love for you too " + sc.n("eva") + " even " +
                    "if you are a bit of a pain in the ass sometimes. ",
                button: [
                    { chatID: 12, text: "Haha totally", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "eva",
                text: "Ok love birds. You're going to make me barf.  ",
                button: [
                    { chatID: 13, text: "Then barf butthead. ", callback: "evaLevel1half" },
                    { chatID: 13, text: "Oh sorry. ", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "lola",
                text: "Awww she just wants some love too. I love you too " + sc.n("eva") + " with all my " +
                    "heart. No boy will come between us. ",
                button: [
                    { chatID: -1, text: "Oh sorry. ", callback: "talkLola0" },
                ]
            },
            {
                chatID: 14,
                speaker: "lola",
                text: "My back is so sore! I really pushed myself swimming. " + sc.n("eva") + ", wanna " +
                    "rub it for me? ",
                button: [
                    { chatID: 15, text: "...", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "eva",
                text: "Stop hitting on me ho-bag! I ain't your bitch! ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "lola",
                text: "Welp, best buddy, ol' pal, I guess I'll have to beg your for a massage. My shoulders can " +
                    "really use it. ",
                button: [
                    { chatID: -1, text: "Anytime!", callback: "talkLola1" },
                ]
            },
            {
                chatID: 17,
                speaker: "lola",
                text: "You have such great hands! So manly and strong. I bet you would make a really sexy  " +
                    "firefighter. Rushing into burning buildings and saving people. Wearing all that big " +
                    "manly gear. ",
                button: [
                    { chatID: 18, text: "I am so manly", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "eva",
                text: "Hrumph. He couldn't save himself from a burning candle. We all know you get moist watching " +
                    "that firefighter show. ",
                button: [
                    { chatID: -1, text: "Hey", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "lola",
                text: "I'm sure " + sc.n("me") + " could be a firefighter. Besides I can't help loving them, they're " +
                    "all so big and brave. ",
                button: [
                    { chatID: 20, text: "I could be! I would totally rescue you!", callback: "lolaLevelQuater dom" },
                    { chatID: 21, text: "I don't know. Firefighter seems a dangerous.", callback: "evaLevelQuater sub" },
                ]
            },
            {
                chatID: 20,
                speaker: "lola",
                text: "You would be the best firefighter ever! You can save me anytime! ",
                button: [
                    { chatID: -1, text: "And I would too!", callback: "lolaLevelHalf lolaDayEvent" },
                ]
            },
            {
                chatID: 21,
                speaker: "eva",
                text: "Even he knows he's too much of a wimp to do it. He better at licking my feet like a dog " +
                    "than saving people. ",
                button: [
                    { chatID: 22, text: "...", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "lola",
                text: "You're so rude! He's not a dog, he's a boy!",
                button: [
                    { chatID: -1, text: "I am a boy!", callback: "lolaDayEvent" },
                    { chatID: -1, text: "Nope. I would totally lick " + sc.n("eva") + "'s feet like a dog", callback: "lolaLevelDown evaLevelQuater sub beast lolaDayEvent" },
                ]
            },
             {
                chatID: 23,
                speaker: "thinking",
                 text: "So fresh and so clean. Delicate and tiny just like " + sc.n('eva') + ". I bet they wouldn't notice if " +
                    "I steal just one pair. ",
                button: [
                    { chatID: 2, text: "...", callback: "sniff2" }
                ]
            },
            {
                chatID: 24,
                speaker: "lola",
                text: "This is a work in progress. You'll see much much more in the next release.!",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "thinking",
                text: "Nice, this must be the key to their room!",
                button: [
                    { chatID: -1, text: "Key added to inventory", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "eva",
                text: "Hey panty sniffer, can't handle a burger job? ",
                button: [
                    { chatID: 27, text: "Eat my boogers ", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "eva",
                text: "I would, but you've already picked and ate them. That's why your breath smells so bad!",
                button: [
                    { chatID: 30, text: "Well at least my breath doesn't smell like dick! ", callback: "lolaLevelDown evaLevelHalf" },
                    { chatID: 28, text: "That's hurtful ", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "eva",
                text: "Oooo is the baby going to cry? ",
                button: [
                    { chatID: 29, text: "...no ", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "eva",
                text: "You should play with " + sc.n("lola") + ". She's much nicer. ",
                button: [
                    { chatID: -1, text: "She is nicer. ", callback: "reset" },
                ]
            },
            {
                chatID: 30,
                speaker: "lola",
                text: "Just becuase she's a little... promiscuous, you shouldn't call her that. ",
                button: [
                    { chatID: 31, text: "Awwww, sorry, I didn't mean it. I was just trying to be funny. ", callback: "lolaLevelQuater" },
                ]
            },
            {
                chatID: 31,
                speaker: "eva",
                text: "I'm promiscuous? You say that like I've slept with half the football team. I'll have you know I've only " +
                    "had sex with one of them. And I was very drunk, so it doesn't count. ",
                button: [
                    { chatID: 32, text: "Well if being drunk doesn't count, then you're still a virgin ", callback: "evaLevelHalf" },
                    { chatID: -1, text: "You're right. It doesn't count. ", callback: "evatalk0" },
                ]
            },
            {
                chatID: 32,
                speaker: "lola",
                text: "You two are the worst! ",
                button: [
                    { chatID: -1, text: "We are", callback: "evatalk0" },
                ]
            },
            {
                chatID: 33,
                speaker: "me",
                text: "So how is the football team? ",
                button: [
                    { chatID: 34, text: "...", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "eva",
                text: "I wouldn't know. I broke up with Amari months ago. I would ask you how the cheerleaders are, but I know they " +
                    "would never touch you!",
                button: [
                    { chatID: 35, text: "Pshhhttt I could date a cheerleader if I wanted! ", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "eva",
                text: "Maybe if they were blind and deaf and no one told them what a loser you were. Even " + sc.n("chuck") + " the " +
                    "weird guy is able to bag a cheerleader. ",
                button: [
                    { chatID: 36, text: "Didn't YOU go out with him?", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "eva",
                text: "Yeah, in the 5th grade! He was even weird then. He kept trying to lick my feet. Didn't even want to kiss me. Just " +
                    "my feet. What is it with you guys and feet anyways? ",
                button: [
                    { chatID: 38, text: "I really don't know. ", callback: "" },
                    { chatID: 37, text: "It's becuase they're just so soft and delicate. Love a freshly peticured foot", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "eva",
                text: "I always thought you were one of the weird feet guys! I bet you'd love to worship my feet like some kind of pervert.",
                button: [
                    { chatID: 39, text: "Yes I would", callback: "" },
                ]
            },
            {
                chatID: 38,
                speaker: "eva",
                text: "Whatever. You're so one of those weird guys.  I bet you'd love to worship my feet like some kind of pervert.",
                button: [
                    { chatID: 39, text: "meh", callback: "" },
                ]
            },
            {
                chatID: 39,
                speaker: "eva",
                text: "Well ok. I'll admit I do love a foot massage. If you want to perv on my feet let me know. ",
                button: [
                    { chatID: -1, text: "Oh yea! ", callback: "evaLevelQuater evatalk1" },
                    { chatID: -1, text: "eh..", callback: "evatalk1" },
                ]
            },
            {
                chatID: 40,
                speaker: "!blank",
                text: "In progress...  ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },


            
        ];
        return cArray[chatID];
    }
};
