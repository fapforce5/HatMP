//Room name
var room461 = {};
room461.main = function () {

    if (!g.isNight()) {
        if (Math.floor(Math.random() * 3) === 1) {
            nav.button({
                "type": "img",
                "name": "girl",
                "left": 1754,
                "top": 397,
                "width": 166,
                "height": 418,
                "image": "461_run/pee.png"
            }, 461);
        }

        g.mod("energy", -30);
        g.mod("fitness", 15);
        g.mod("leg", 10);
        char.addtime(60);

        if (cl.c.chest < 1)
            chat(1, 461);
        else
            chat(2, 461);
    }
    else {
        var clutNum = sc.getstep("cultboy");
        if (!g.get("cultrun") && (clutNum < 2 || Math.floor(Math.random() * 3) === 0)) {
            nav.button({
                "type": "btn",
                "name": "cult",
                "left": 640,
                "top": 163,
                "width": 455,
                "height": 917,
                "image": "461_run/cult1.png"
            }, 461);
        }
        else {
            g.mod("energy", -30);
            g.mod("fitness", 15);
            g.mod("leg", 10);
            char.addtime(60);

            if (cl.c.chest < 1)
                chat(1, 461);
            else
                chat(2, 461);

        }
    }
};

room461.btnclick = function (name) {
    switch (name) {
        case "cult":
            nav.killbutton("cult");
            nav.bg("461_run/cult2.jpg");
            chat(6, 461);
            break;
        case "cult8":
            nav.bg("461_run/cult8.jpg");
            nav.killbutton("cult8");
            nav.button({
                "type": "btn",
                "name": "cult9",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "461_run/advance.png"
            }, 461);
            break;
        case "cult9":
            nav.bg("461_run/cult9.jpg");
            nav.killbutton("cult9");
            nav.button({
                "type": "btn",
                "name": "cult10",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "461_run/advance.png"
            }, 461);
            break;
        case "cult10":
            nav.killbutton("cult10");
            nav.bg("461_run/cult10.jpg");
            chat(16, 461);
            break;
        default:
            break;
    }
};

room461.chatcatch = function (callback) {
    switch (callback) {
        case "Complete":
            char.room(450);
            break;
        case "dark":
            char.room(475);
            break;
        case "redo":
            chat(0, 461);
            break;
        case "killgirl":
            nav.killbutton("girlr");
            break;
        case "run":
            nav.bg("456_bench/456_run.jpg");
            break;
        case "morning":
            if (g.dt.getHours() > 21)
                char.addtime(1440);

            char.newdayfake();
            nav.bg("461_run/black.jpg", "461_run/black.jpg");
            break;
        case "morning1":
            char.room(450);
            break;
        case "cult2":
            g.setflag("cultrun");
            nav.killbutton("cult");
            nav.bg("461_run/cult2.jpg")
            break;
        case "cult3":
            if (sc.getstep("cultboy") === 0) {
                sc.setstep("cultboy", 1);
                sc.setstep("wyatt", 1);
                nav.bg("461_run/cult3a.jpg");
                chat(8, 461);
            }
            else {
                chat(12, 461);
            }
            break;
        case "cult3b":
            nav.bg("461_run/cult3b.jpg");
            break;
        case "cult3c":
            nav.bg("461_run/cult3c.jpg");
            break;
        case "cult3d":
            char.addtime(120);
            char.room(450);
            break;
        case "cult6":
            nav.bg("461_run/cult6.jpg");
            break;
        case "cult7":
            cl.nude();
            cl.display();
            nav.bg("461_run/cult7.jpg");
            nav.button({
                "type": "btn",
                "name": "cult8",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "461_run/advance.png"
            }, 461);
            break;
        case "cult11":
            nav.bg("461_run/cult11.jpg");
            break;
        case "cult12":
            nav.bg("461_run/cult12.jpg");
            nav.button({
                "type": "img",
                "name": "cult12",
                "left": 550,
                "top": 0,
                "width": 1200,
                "height": 1080,
                "image": "461_run/cult12.gif"
            }, 461);
            g.roomTimeout = setTimeout(function () { chat(19, 461); }, 3000);
            break;
        case "cult13":
            nav.killbutton("cult12");
            nav.bg("461_run/cult13.jpg");
            break;
        case "cult14":
            nav.bg("461_run/cult14.jpg");
            break;
        case "cult15":
            char.addtime(120);
            if (sc.getstep("cultboy") === 1)
                sc.setstep("cultboy", 2);
            if (cl.c.butthole < 2)
                cl.c.butthole += .2;
            g.mod("sissy", 15);
            g.mod("creamPied", 1);
            g.mod("receiveAnalMale", 1);
            g.setflag("cultrun");
            cl.undo();
            char.room(450);
            break;
        default:
            break;
    }
};

room461.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Take the darkened side path", callback: "dark" },
                { chatID: -1, text: "Return to Carnalville Park ", callback: "Complete" },
                { chatID: -1, text: "Run on main path.", callback: "runNext" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Must keep running to lose this weight.... ",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I may be thin, but I'm getting more fit! Also I still hate running....",
            button: [
                { chatID: -1, text: "Complete My Run", callback: "Complete" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "I can't run in this! I'm missing my " + g.internal + ". I can change in the men's bathroom if I saved " +
                "a set of running clothes in my wardrobe saves. ",
            button: [
                { chatID: -1, text: "......", callback: "redo" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I'm too tired to run, must sleep or eat something. ",
            button: [
                { chatID: -1, text: "......", callback: "redo" }
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "Aaaa they're in the woods!!!! Don't go that way!!",
            button: [
                { chatID: -1, text: "Who's in the woods....", callback: "killgirl" }
            ]
        },
        {
            chatID: 6,
            speaker: "cultboy",
            text: "These paths are off limits at night. All who enter may pay the toll.",
            button: [
                { chatID: 7, text: "Huh, what toll?", callback: "cult2" }
            ]
        },
        {
            chatID: 7,
            speaker: "cultboy",
            text: "The toll I'm going to collect from your ass!",
            button: [
                { chatID: -1, text: "!!!", callback: "cult3" }
            ]
        },
        {
            chatID: 8,
            speaker: "wyatt",
            text: "There will be no collection tonight from your cult. ",
            button: [
                { chatID: 9, text: "...", callback: "cult3b" }
            ]
        },
        {
            chatID: 9,
            speaker: "wyatt",
            text: "You know you should really avoid this park at night. I've notified the local police to keep people away " +
            "from the park until we've cleared out the cult.",
            button: [
                { chatID: 10, text: "Who are we?", callback: "cult3c" }
            ]
        },
        {
            chatID: 10,
            speaker: "wyatt",
            text: "I work for the government that assists local law enforcement in clearing out what we call... undesirables. You're " +
            "really lucky I was in this section of the park tonight. Generally as a rule I don't normally come this way. ",
            button: [
                { chatID: 11, text: "Ok", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "wyatt",
            text: "I'm going to get back to my office in the police station, but if you ever want to chat, please stop by. Oh, and " +
            "please stay out of the park at night until we've had a chance to rid the town of this cult.",
            button: [
                { chatID: -1, text: "Oh, thanks", callback: "cult3d" }
            ]
        },
        {
            chatID: 12,
            speaker: "cultboy",
            text: "You know the toll. Are you ready to pay up?",
            button: [
                { chatID: 13, text: "[Run away!]", callback: "run" },
                { chatID: 15, text: "[Stay and fight]", callback: "cult5" }
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "Oh man! I can't beleive that cultist was going to attack me. I better hide our here for the night. " +
                "I can't ever run in the forest at night!",
            button: [
                { chatID: 14, text: "...", callback: "morning" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Time to wakeup.",
            button: [
                { chatID: -1, text: "...", callback: "morning1" }
            ]
        },
        {
            chatID: 15,
            speaker: "cultboy",
            text: "You will not enjoy this choice.",
            button: [
                { chatID: 18, text: "...", callback: "cult6" }
            ]
        },
        {
            chatID: 16,
            speaker: "cultboy",
            text: "OOOooooo you are sooooooooo tight!!!",
            button: [
                { chatID: 17, text: "aaaaAAAAaaaaaa", callback: "cult11" }
            ]
        },
        {
            chatID: 17,
            speaker: "cultboy",
            text: "I'm sooooooo deep in your ass",
            button: [
                { chatID: -1, text: "oooOOOOoooooooo", callback: "cult12" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "@..@...",
            button: [
                { chatID: -1, text: "...", callback: "cult7" }
            ]
        },
        {
            chatID: 19,
            speaker: "cultboy",
            text: "OOOOhhhhh fuck I'm going to fill your ass up!",
            button: [
                { chatID: 20, text: "OOOOOOOOOooooooooooooooo", callback: "cult13" }
            ]
        },
        {
            chatID: 20,
            speaker: "cultboy",
            text: "Stay out of the forest at night, or I'll fill your ass up again.",
            button: [
                { chatID: 21, text: "oooo.........", callback: "cult14" }
            ]
        },
        {
            chatID: 21,
            speaker: "cultboy",
            text: "Slut",
            button: [
                { chatID: -1, text: "Limp away", callback: "cult15" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};