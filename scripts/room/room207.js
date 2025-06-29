//Room name
var room207 = {};
room207.main = function () {
    nav.button({
            "type": "btn",
            "name": "door_pink",
            "left": 33,
            "top": 216,
            "width": 157,
            "height": 751,
            "title": "Pink Pleasure Club",
            "image": "207_door/door_pink.png"
    }, 207);
    nav.button({
        "type": "btn",
        "name": "door_school",
        "left": 1650,
        "top": 288,
        "width": 91,
        "height": 633,
        "title": "Missy's Fishing School for Sissies",
        "image": "207_door/door_school.png"
    }, 207);
    
    nav.button({
        "type": "btn",
        "name": "door_outside",
        "left": 740,
        "top": 439,
        "width": 342,
        "height": 311,
        "title": "Exterior Doors",
        "image": "207_door/door_outside.png",
        "night": "207_door/door_outside_night.png"
    }, 207);
    nav.button({
        "type": "btn",
        "name": "pageant",
        "left": 1437,
        "top": 401,
        "width": 79,
        "height": 136,
        "title": "Pageant Winners",
        "image": gv.get("sissyfinal_pageant") === null ? "207_door/pageant.webp" : "207_door/pageant_x.webp",
    }, 207);
    nav.buildnav([203, 0]);
    if (g.dt.getDay() === 6 && gv.get("sissySchoolClass") === "finalx") {
        sc.select("door_pink", "207_door/icon_fashion.webp", 0)
    }
};

room207.btnclick = function (name) {
    switch (name) {
        case "pageant":
            nav.kill();
            var pag = gv.get("sissyfinal_pageant");
            if (pag === null)
                nav.bg("207_door/pageantbg.webp");
            else if (pag)
                nav.bg("207_door/pageantbg_me.webp");
            else
                nav.bg("207_door/pageantbg_not.webp");
            nav.back("reload");
            break;
        case "door_pink":
            if (g.dt.getDay() === 6 && future.get("sissyfinal") > -1) {
                if (g.gethourdecimal() > 18)
                    chat(3, 207);
                else if (g.gethourdecimal() > 16)
                    chat(4, 207);
                else
                    chat(5, 207);
                return;
            }
            else if (sissy.st[21].ach) {
                char.room(213);
                return;
            }
            chat(1, 207);
            break;
        case "door_school":
            chat(2, 207);
            break;
        case "door_outside":
            char.room(0);
            break;
        case "reload":
            char.room(207);
            break;
        default:
            break;
    }
};

room207.chatcatch = function (callback) {
    switch (callback) {
        case "enterRed":
            break;
        case "fashionShow":
            g.map = {
                event: 0,
                ralph: missy.cases[7].complete && !missy.cases[7].success ? "_n" : "",
                score0: 0,
                score1: 0,
                score2: 0,
                score3: 0,
                gavebj: false,
                card0: 0,
                card1: 0,
                card2: 0,
                card3: 0,
                card4: 0,
                talent: "",
                j1: 0,
                j2: 0,
                j3: 0,
                j4: 0,
                j5: 0
            };
            char.room(170);
            break;
        default:
            break;
    }
};

room207.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Welcome to the Pink Level of Pleasure. To enter you you must be your most beautiful self. [In progress]",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: !g.isNight() ? "!missyguardday" : "!missyguardnight",
            text: "Only the finest people and dirtiest whores are allowed in here; you are neither.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: !g.isNight() ? "!missyguardday" : "!missyguardnight",
            text: sissy.st[17].ach ? "Schools only open on Tuesdays and Thursdays after you've worked for Missy." : "You have to be a student to enter the class. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: !g.isNight() ? "!missyguardday" : "!missyguardnight",
            text: "You're late. The show's almost over. Better luck being on time " +
                "next time. ",
            button: [
                { chatID: -1, text: "Drat!!!", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: !g.isNight() ? "!missyguardday" : "!missyguardnight",
            text: "Just in time for the fashion show. Head on in and get ready. ",
            button: [
                { chatID: -1, text: "Ok!", callback: "fashionShow" }
            ]
        },
        {
            chatID: 5,
            speaker: !g.isNight() ? "!missyguardday" : "!missyguardnight",
            text: "You're a bit early. Show starts at " + char.friendlyTime(18) +
                " Did you want to go in and wait, or come back?",
            button: [
                { chatID: -1, text: "I'll go in early. ", callback: "fashionShow" },
                { chatID: -1, text: "I'll come back ", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};