//Room name
var room661 = {};
room661.main = function () {
    if (g.pass === "new") {
        var btnList = [
            {
                "type": "img",
                "name": "tiffany",
                "left": 891,
                "top": 87,
                "width": 565,
                "height": 993,
                "image": "661_peephole/661_tiffany.png"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 661);
        });
        chat(0, 661);
    }
    else {
        nav.bg("661_peephole/661_peephole.png");
        chat(2, 661);
    }
    g.internal = 0;
    
};

room661.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room661.chatcatch = function (callback) {
    switch (callback) {
        case "takePlace":
            nav.killall();
            nav.bg("661_peephole/661_peephole.png");
            chat(2, 661);
            break;
        case "makePerson":
            if (Math.floor(Math.random() * 2) === 0) {
                nav.button({
                    "type": "img",
                    "name": "person",
                    "left": 613,
                    "top": 395,
                    "width": 122,
                    "height": 483,
                    "image": "661_peephole/661_person0.png"
                }, 661);
            }
            else {
                nav.button({
                    "type": "img",
                    "name": "person",
                    "left": 712,
                    "top": 418,
                    "width": 102,
                    "height": 343,
                    "image": "661_peephole/661_person1.png"
                }, 661);
            }
            break;
        case "check":
            nav.killbutton("person");
            nav.bg("661_peephole/661_interior.png");
            break;
        case "recycle":
            char.addtime(60);
            g.internal++;
            if (g.internal > 0 && sc.getstep("tiffany") > 3) {
                
                chat(17, 661);
            }
            else if (g.internal < 5) {
                nav.bg("661_peephole/661_peephole.png");
                chat(2, 661);
            }
            else {
                nav.bg("651_wackHallway/651_hallway.png");
                nav.button({
                    "type": "img",
                    "name": "tiffany",
                    "left": 592,
                    "top": 227,
                    "width": 504,
                    "height": 853,
                    "image": "661_peephole/651_tiffany.png"
                }, 661);
                chat(9, 661);
            }
            break;
        case "end":
            g.setflag("tiffanyDayEvent");
            if (sc.getstep("tiffany") < 10)
                sc.incstep("tiffany", 1);
            char.room(651);
            break;
        case "peek":
            g.mod("sissy", -20);
            nav.bg("661_peephole/661_peekBG.png");
            chat(10, 661);
            break;
        case "changeView":
            nav.bg("661_peephole/661_peek2BG.png");
            nav.button({
                "type": "img",
                "name": "tiffany1",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "661_peephole/661_masterbate.gif"
            }, 661);
            break;
        case "changeView1":
            nav.killbutton("tiffany1");
            nav.button({
                "type": "img",
                "name": "tiffany1a",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "661_peephole/peek1a.png"
            }, 661);
            break;
        case "changeView2":
            nav.killbutton("tiffany1a");
            nav.button({
                "type": "img",
                "name": "tiffany2",
                "left": 785,
                "top": 24,
                "width": 690,
                "height": 1058,
                "image": "661_peephole/peek2.png"
            }, 661);
            break;
        case "changeView3":
            nav.killbutton("tiffany2");
            nav.button({
                "type": "img",
                "name": "tiffany2",
                "left": 657,
                "top": 65,
                "width": 598,
                "height": 1015,
                "image": "661_peephole/peek3.png"
            }, 661);
            break;
        case "kickedout":
            if (g.dt.getHours() < 11)
                g.dt.setHours(12);
            else
                char.addtime(60);
            sc.setstep("tiffany", -5);
            sc.setstep("tiffany", 8);
            sc.setstep("tiffany", 10);
            sc.setstep("missy", 8);
            g.roomMapAccess(650, false, false);
            char.room(0);
            break;
        case "nap":
            nav.bg("661_peephole/661_black.jpg");
            break;
        case "wakeUp":
            nav.bg("661_peephole/661_backroom.png");
            nav.button({
                    "type": "img",
                    "name": "tifAngry",
                    "left": 891,
                    "top": 87,
                    "width": 565,
                    "height": 993,
                    "image": "661_peephole/661_tiffanyangry.png"
                }, 661);
            break;
        case "changeEx":
            nav.killbutton("tifAngry");
            nav.button({
                "type": "img",
                "name": "tifAngry1",
                "left": 891,
                "top": 87,
                "width": 565,
                "height": 993,
                "image": "661_peephole/661_tiffany.png"
            }, 661);
            break;
        case "angryAgain":
            nav.button({
                "type": "img",
                "name": "tifAngry",
                "left": 891,
                "top": 87,
                "width": 565,
                "height": 993,
                "image": "661_peephole/661_tiffanyangry.png"
            }, 661);
            break;
        case "kickOutPussy":
            if (g.dt.getHours() < 11)
                g.dt.setHours(12);
            else
                char.addtime(60);
            sc.setstep("tiffany", -4);
            sc.setstep("tiffany", 9);
            sc.setstep("tiffany", 10);
            sc.setstep("missy", 8);
            g.roomMapAccess(650, false, false);
            char.room(0);
            break;
        default:
            break;
    }
};

room661.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "tiffany",
            text: "So, like, there's this peep hole in this door. You can use it watch for poeple going into the booths.",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "tiffany",
            text: "When you see someone go in get a good look at them, then check the booth for shit. It's so disgusting " +
                "you need to find and stop that filthy fuck! Also I'll be working around the corner, don't be mister pervert and " +
                "peek at me. K?",
            button: [
                { chatID: -1, text: "Got it. I'll get him. [Take your place at the peephole]", callback: "takePlace" }
            ]
        },
        {
             chatID: 2,
             speaker: "me",
             text: "This is the most boring job ever...",
             button: [
                 { chatID: 3, text: "[Continue Working]", callback: "" }
             ]
        },
        {
             chatID: 3,
             speaker: "me",
             text: "So boring...",
             button: [
                 { chatID: 4, text: "[Continue Working]", callback: "" }
             ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "I wonder what " + sc.n("tiffany") + " is up to...",
            button: [
                { chatID: 10, text: "[Take a quick peek]", callback: "peek" },
                { chatID: 5, text: "[Continue Working]", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "sooo boring....",
            button: [
                { chatID: 10, text: "[Take a quick peek]", callback: "peek" },
                { chatID: 6, text: "[Continue Working]", callback: "makePerson" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Oh look a customer",
            button: [
                { chatID: 7, text: "[Check if they are the cum shooter]", callback: "check" }
            ]
        },
        {
             chatID: 7,
             speaker: "me",
             text: "Damn! Only one cum shot!",
             button: [
                 { chatID: -1, text: "[go back to watching]", callback: "recycle" }
             ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "Still not the cum shooter. I guess I'll have to try to get him tomorrow. ",
            button: [
                { chatID: -1, text: "[go back to checking]", callback: "recycle" }
            ]
        },
        {
            chatID: 9,
            speaker: "tiffany",
            text: "Well it's looks like that's it for today. Feel free to come back tomorrow. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "end" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "No good, I can't see anything, I need to get a better view.",
            button: [
                { chatID: 11, text: "[Get a better view]", callback: "changeView" }
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Nice....",
            button: [
                { chatID: 12, text: "[Continue to perv on Tiffany]", callback: "changeView1" }
            ]
        },
        {
            chatID: 12,
            speaker: "tiffany",
            text: "hmmmmm.....",
            button: [
                { chatID: 13, text: "Oh shit, did she see me?", callback: "changeView2" }
            ]
        },
        {
            chatID: 13,
            speaker: "tiffany",
            text: "What the fuck!!!",
            button: [
                { chatID: 14, text: "I'm so sorry Tiffany.. I thought I heard a noise...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "tiffany",
            text: "You're totally lying, you're perving on me. ",
            button: [
                { chatID: 15, text: "...uhhhh", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "tiffany",
            text: "You need to go. I don't want to see you in this store again!",
            button: [
                { chatID: 16, text: "but... ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "tiffany",
            text: "No, I'm so mad right now.. Just go you filthy little fuck!!",
            button: [
                { chatID: -1, text: "[Leave]", callback: "kickedout" }
            ]
        },
        {
            chatID: 17,
            speaker: "me",
            text: "I'm so bored, and that guy never comes. This is so stupid.",
            button: [
                { chatID: 18, text: "...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "I'm sure no one will notice if I take a little nap, really quick.",
            button: [
                { chatID: 19, text: "[Grab a quick nap]", callback: "nap" }
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "ZZZZZzzzzzz",
            button: [
                { chatID: 20, text: "[sleep]", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "ZZZZZzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz",
            button: [
                { chatID: 21, text: "[sleep]", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "tiffany",
            text: "WHAT THE FUCK!!",
            button: [
                { chatID: 22, text: "wha....", callback: "wakeUp" }
            ]
        },
        {
            chatID: 22,
            speaker: "tiffany",
            text: "Are you sleeping! ",
            button: [
                { chatID: 23, text: "wha....  no", callback: "changeEx" }
            ]
        },
        {
            chatID: 23,
            speaker: "tiffany",
            text: "Oh it looked like you were sleeping, I'm so sorry. wait.... You totally were sleeping!",
            button: [
                { chatID: 24, text: "I know, please don't tell " + sc.n("missy"), callback: "angryAgain" }
            ]
        },
        {
            chatID: 24,
            speaker: "tiffany",
            text: "I think you should go. ",
            button: [
                { chatID: -1, text: "Ok [Leave]", callback: "kickOutPussy" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};