//trash
var room173 = {};
room173.main = function () {
    if (missy.get("trashSearchCounter") === 0) {
        nav.bg("173_trash/bg0.jpg");
        chat(0, 173);
    }
    else {
        nav.button({
            "type": "btn",
            "name": "build",
            "left": 1114,
            "top": 233,
            "width": 806,
            "height": 727,
            "image": "173_trash/trash.png"
        }, 173);
    }
    missy.mod("trashSearchCounter", 1);
};

room173.btnclick = function (name) {
    switch (name) {
        case "build":
            nav.killall();
            nav.bg("173_trash/bag.jpg")
            var notes = 10;
            var condoms = 3;
            var trash = 10;
            var weapons = 4;
            var pics = 7;
            g.internal = { i: 0, a: new Array() };
            for (i = 0; i < 7; i++) {
                switch (g.rand(0, 8)) {
                    case 0:
                        g.internal.a.push({ p: "n" + g.rand(0, notes).toString(), t: "n", s: true });
                        break;
                    case 1:
                        g.internal.a.push({ p: "c" + g.rand(0, condoms).toString(), t: "c", s: false });
                        break;
                    case 2:
                        g.internal.a.push({ p: "t" + g.rand(0, trash).toString(), t: "t", s: false });
                        break;
                    case 3:
                        g.internal.a.push({ p: "w" + g.rand(0, weapons).toString(), t: "w", s: true });
                        break;
                    case 4:
                        g.internal.a.push({ p: "p" + g.rand(0, pics).toString(), t: "p", s: true });
                        break;
                    default:
                        g.internal.a.push({ p: "t" + g.rand(0, trash).toString(), t: "t", s: false });
                        break;
                }
            }
            room173.btnclick("next");
            break;
        case "next":
            if (g.internal.i === g.internal.a.length) {
                chat(5, 173);
            }
            else {
                nav.killall();
                var thisEntry = g.internal.a[g.internal.i];
                nav.button({
                    "type": "img",
                    "name": "trash",
                    "left": 1350,
                    "top": 200,
                    "width": 500,
                    "height": 600,
                    "image": "173_trash/" + thisEntry.p + ".png"
                }, 173);
                sc.select("save", "173_trash/icon_save.png", 10);
                sc.select("trash", "173_trash/icon_trash.png", 11);
                if (thisEntry.t === "c")
                    sc.select("eat", "173_trash/icon_eat.png", 12);
            }
            break;
        case "save":
            var thisEntrySave = g.internal.a[g.internal.i];
            if (thisEntrySave.s)
                levels.mod("pi", 4, 999);
            g.internal.i++;
            room173.btnclick("next");
            break;
        case "trash":
            var thisEntryTrash = g.internal.a[g.internal.i];
            if (!thisEntryTrash.s)
                levels.mod("pi", 4, 999);
            g.internal.i++;
            room173.btnclick("next");
            break;
        case "eat":
            if (levels.get("cum").l < 4)
                chat(3, 173);
            else {
                nav.killall();
                nav.bg("173_trash/swallaw.jpg");
                levels.mod("cum", 20, 999);
                levels.mod("pi", 4, 999);
                gv.mod("energy", 100);
                chat(4, 173);
            }

            break;
        default:
            break;
    }
};

room173.chatcatch = function (callback) {
    switch (callback) {
        case "start":
            nav.bg("173_trash/bg.jpg");
            nav.button({
                "type": "btn",
                "name": "build",
                "left": 1114,
                "top": 233,
                "width": 806,
                "height": 727,
                "image": "173_trash/trash.png"
            }, 173);
            break;
        case "next":
            nav.bg("173_trash/bag.jpg");
            g.internal.i++;
            room173.btnclick("next");
            break;
        case "lunch":
            missy.didJob(7, 1, null);
            char.room(224);
            break;
        default:
            break;
    }
};

room173.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "So this is my backlog. All these trashbags are from cases I'm working on, " +
                "and some are from closed cases. As you can see my filing, admittedly, a bit " +
                "lacking. This is what happens when you put " + sc.n("cecilia") + " in charge " +
                "of something. ",
            button: [
                { chatID: 1, text: "It stinks back here ma'am.", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Yes. The smell is a bit overpowering. That's why I'm not going to search " +
                "the trash. You are. Since you're an idiot I'm going to make it simple for you. " +
                "Pull out and set aside bills, notes, pictures, and anything that is obviously a " +
                "weapon; knives and guns. Everthing else just put back in the trash bag, and put " +
                "that bag in the dumpster. ",
            button: [
                { chatID: 2, text: "oh gross... ma'am", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "Yes. It's gross. Welcome to starting a new career field. You do all the shit " +
                "jobs I don't want to do. Now get to work garbage " + gender.pronoun("boy") + ". ",
            button: [
                { chatID: -1, text: "*sigh* yes ma'am", callback: "start" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Gross! What am I thinking. I'm not going to eat cum out of a used condom in " +
                "the trash! ",
            button: [
                { chatID: -1, text: "[Need cum level 4]", callback: "next" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Ooooo it's so slimy and cold. But I do love eating cum soooo much! Such " +
                "a great little snack.",
            button: [
                { chatID: -1, text: "Swallow the cum slut", callback: "next" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "So gross! This bag is done. I'm going to wash up and take lunch. ",
            button: [
                { chatID: -1, text: "[Lunch time]", callback: "lunch" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};