//Room name
var room154 = {};
room154.main = function () {
    if (g.pass === "sushi_154") {
        g.pass = null;
        nav.bg("154_diningRoom/c0.webp");
        chat(1, 154);
    }
    else {
        if (!daily.get("jonesCleanRoom3")) {
            nav.bg("154_diningRoom/dirty.jpg");
            sc.select("clean", "152_sittingRoom/clean.png", 0);
        }
        nav.buildnav([150, 152, 153]);
    }
};

room154.btnclick = function (name) {
    switch (name) {
        case "clean":
            nav.killall();
            char.addtime(60);
            daily.set("jonesCleanRoom3");
            nav.bg("154_diningRoom/clean.jpg");
            if (gv.get("jonesroom") === g.roomID) {
                g.internal = 0;
                nav.next("f");
            }
            else {
                nav.bg("154_diningRoom/clean.jpg");
                nav.next("finishClean");
            }
            break;
        case "finishClean":
            char.room(154);
            break;
        case "f":
            if (g.internal < 6)
                nav.bg("154_diningRoom/f" + g.internal + ".jpg");
            else {
                nav.kill();
                if (sc.getMissionTask("jones", "invite", 2).notStarted) {
                    sc.completeMissionTask("jones", "invite", 2);
                }
                chat(0, 154);
            }
            if (g.internal === 4)
                levels.anal(4, false, "m", true, "jones"); 
            g.internal++;
            break;
        case "c":
            if (g.internal < 9) {
                nav.bg("154_diningRoom/c" + g.internal + "_" + gender.pronoun("m") + ".webp");
            }
            else if (g.internal === 9) {
                nav.bg("154_diningRoom/c9.webp");
                zcl.legsup(-200, 600, .6, "", false);
            }
            else if (g.internal === 10) {
                zcl.legsup(-200, 600, .6, "c1eyes", false);
            }
            else if (g.internal === 11) {
                zcl.legsup(-200, 600, .6, "c2", false);
            }
            else if (g.internal === 12) {
                zcl.legsup(-200, 600, .6, "openc3", false);
            }
            else if (g.internal > 12) {
                nav.killbutton("ctext");
                nav.killbutton("c");
                chat(3, 154);
            }
            nav.modbutton("ctext", "154_diningRoom/c" + g.internal + "_text.webp", null, null);
            g.internal++;
            break;
        case "c20":
            if (g.internal === 21) {
                levels.anal(3, false, "m", true, "!man");
                levels.anal(4, false, "m", true, "!man");
                levels.oral(3, "m", "!man", true);
                levels.oral(4, "m", "!man", true);
                levels.anal(2, false, "m", true, "!man");
            }
            else if (g.internal === 22) {
                levels.oral(3, "m", "!man", true);
                levels.gotbj("n", "bitch");
            }
            if (g.internal < 23) {
                nav.bg("154_diningRoom/c" + g.internal + "_" + gender.pronoun("m") + ".webp");
            }
            else {
                nav.kill();
                chat(12, 154);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room154.chatcatch = function (callback) {
    switch (callback) {
        case "c1":
        case "c14":
        case "c15":
        case "c16":
            nav.bg("154_diningRoom/" + callback + "_" + gender.pronoun("m") + ".webp"); 
            break;
        case "c13":
            nav.kill();
            nav.bg("154_diningRoom/" + callback + "_" + gender.pronoun("m") + ".webp"); 
            break;
        case "c17":
        case "c24":
        case "c25": 
            nav.bg("154_diningRoom/" + callback + ".webp"); 
            break;
        case "reset":
            char.room(154);
            break;
        case "c1":
            nav.kill();
            nav.bg("154_diningRoom/c1_" + gender.pronoun("f") + ".webp");
            break;
        case "c1x":
            g.internal = 2;
            nav.button({
                "type": "btn",
                "name": "ctext",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "154_diningRoom/c1_text.webp"
            }, 752);
            nav.next("c");
            break;
        case "c18":
            nav.bg("154_diningRoom/c18.webp");
            if (gender.pronoun("f") === "f")
                zcl.pucker(300, -100, 1.2, "back", false);
            else
                zcl.pucker(150, -30, 1.2, "back", false);
            break;
        case "c19":
            nav.bg("154_diningRoom/c19.webp");
            g.internal = 21;
            nav.next("c20");
            break;
        case "c20":
            nav.kill();
            nav.bg("154_diningRoom/c20.webp");
            levels.oralass("n", "bitch");
            g.internal = 21;
            nav.next("c20");
            break;
        case "c23":
            levels.oral(3, "m", "!man", true);
            nav.bg("154_diningRoom/" + callback + "_" + gender.pronoun("m") + ".webp"); 
            break;
        case "jonesFinish":
            char.settime(23, 0);
            char.addtime(157);
            cl.undo();
            char.room(0);
            break;
        default:
            break;
    }
};

room154.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "That was rude. Not even a hello, or a how do you do, before filling my butt with his cum. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "bitch",
            text: "Gentlmen, your main course. Just give us 5 minutes to place " + gender.pronoun("her") + 
                ". " + sc.n("me") + ", lay down on the table. ",
            button: [
                { chatID: 2, text: "Yes ma'am", callback: "c1" }
            ]
        },
        {
            chatID: 2,
            speaker: "jones",
            text: "Doesn't " + gender.pronoun("she") + " look delicious. Eat up boys, enjoy the spread. ",
            button: [
                { chatID: -1, text: "...", callback: "c1x" }
            ]
        },
        {
            chatID: 3,
            speaker: "jones",
            text: sc.n("bitch") + "! Bring the new maid to the sitting room. We're going to enjoy her.",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "bitch",
            text: "Yes sir! Right away sir!",
            button: [
                { chatID: 5, text: "...", callback: "c13" }
            ]
        },
        {
            chatID: 5,
            speaker: "bitch",
            text: "I shall fetch the servents to bring more lube and wine for everyone so that you may all " +
                "enjoy our new maid. ",
            button: [
                { chatID: 6, text: "...", callback: "c14" }
            ]
        },
        {
            chatID: 6,
            speaker: "jones",
            text: "Hold it right there. You will join in too. You're starting to think you're in charge around " +
                "here and need to be reminded of you place in this house. Take off your clothing. " +
                "You're going to offer up your body to whatever whims these gentlemen desire. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "bitch",
            text: "...yes sir... ",
            button: [
                { chatID: 8, text: "...", callback: "c15" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Wait. Is " + sc.n("bitch") + " transgender? Holy crap I didn't even know! Why " +
                "has she been so mean to me then! Also whoever this guy is really knows how to finger a " +
                "a hole. I do wish he used a little lube or spit before shoving his finger up my ass. ",
            button: [
                { chatID: 9, text: "...", callback: "c16" }
            ]
        },
        {
            chatID: 9,
            speaker: "!man",
            text: "Put her up against the wall! Have the maid prep her ass with her tongue! " ,
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "!man",
            text: "Fuck that! I want to fuck that maid's face now! ",
            button: [
                { chatID: 11, text: "...", callback: "c17" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Holy crap there's so many horny old men! We're really going to get fucked. I can tell her " +
                "ass is dry. I should lube it up with some spit so her fist dick doesn't hurt too much, but " +
                "I do really want that cock and she is such a bitch. What should I do?",
            button: [
                { chatID: 17, text: "[Eat her asshole]", callback: "c18" },
                { chatID: -1, text: "[Suck the old man's penis]", callback: "c19" },
            ]
        },
        {
            chatID: 12,
            speaker: "jones",
            text: "You did well " + sc.n("bitch") + ". Once you finish taking that cock, clean yourself " +
                "up. You can sleep on the floor at the foot of my bed tonight. ",
            button: [
                { chatID: 13, text: "...", callback: "c23" },
            ]
        },
        {
            chatID: 13,
            speaker: "bitch",
            text: "Wha? REALLY!",
            button: [
                { chatID: 14, text: "...", callback: "c24" },
            ]
        },
        {
            chatID: 14,
            speaker: "bitch",
            text: "Did you hear that? He's going to let me sleep in his room! I've got to clean " +
                "all this cum out of my butt. Don't want to drip on his floor. " + sc.n("jones") + " gets so " +
                "mad if this place is dirty! Oh I'm so excited!!!",
            button: [
                { chatID: 15, text: "...", callback: "c25" },
            ]
        },
        {
            chatID: 15,
            speaker: "!butler",
            text: "I've been in the service of " + sc.n("jones") + " since he's been rich enough to afford " +
                "a butler and this is the first time he's allowed anyone in his room while he sleeps. I do " +
                "hope they can find love. They really are the best for each other. ",
            button: [
                { chatID: 16, text: "I kinda hope so too", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!butler",
            text: "I wasn't talking to you. Hurry up and finish cleaning up this cum so I can get to bed. ",
            button: [
                { chatID: -1, text: "*sigh* [Clean up all the cum]", callback: "jonesFinish" },
            ]
        },
        {
            chatID: 17,
            speaker: "!man",
            text: "I can't decide who's ass to fill first! ",
            button: [
                { chatID: -1, text: "*nom* *nom* *nom*", callback: "c20" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(154, room154);
