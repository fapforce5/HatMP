//Room name

var room602 = {};
room602.main = function () {
    if (g.dt.getDay() === 5 && gv.get("sissySchoolClass") === "finalx") {
        if (gv.get("sissySchoolClassDays") < 2) {
            gv.set("sissySchoolClassDays", 2);
            nav.bg("602_backroom/sissy1.webp");
            chat(5, 602);
            return;
        }
        else if (gv.get("sissySchoolClassDays") === 2) {
            gv.set("sissySchoolClassDays", 3);
            nav.bg("602_backroom/sissy3.webp");
        }
    }
    else if (sc.getMissionTask("tony", "strip", 1).notStarted && gv.get("sissySchoolClass") !== "finalx") {
        sc.completeMissionTask("tony", "strip", 1);
        if (sissy.st[10].ach) {
            nav.bg("602_backroom/t1.jpg");
        }
        else {
            nav.bg("602_backroom/t1.jpg");
        }
        chat(0, 602);
        return;
    }
    
    nav.button({
        "type": "btn",
        "name": "makeup",
        "left": 1314,
        "top": 0,
        "width": 412,
        "height": 589,
        "image": "602_backroom/mirror.png"
    }, 602);

    let navList = new Array();
    let outFit = cl.hasoutfit("public");
    let outer = cl.hasoutfit("braAndPantiesIgnored");
    g.internal = "";
    if ((g.gethourdecimal() > 3 && g.gethourdecimal() < 17) || daily.get("stripper")) {
        if (outFit !== null) {
            g.internal = "I'm missing my " + outFit + " if I want to leave. "
            chat(900, 602);
        }
        else
            nav.buildnav([0]);
    }
    else {
        if (outer === null) {
            if (cl.c.panties === null || cl.c.bra === null) {
                g.internal = "I have to wear only my bra and a pair of panties if I'm going to dance. ";
            }
            else
                navList.push(601);
        }
        else {
            g.internal = "I need to take my clothes off if I want to dance and wear only my bra and panties. ";
        }

        if (outFit === null)
            navList.push(0);
        else {
            g.internal += "I'm missing my " + outFit + " if I want to leave. "
        }
        if (g.internal !== "")
            chat(900, 602);

        nav.buildnav(navList);
    }
};

room602.btnclick = function (name) {
    switch (name) {
        case "makeup":
            g.pass = 602;
            char.room(27);
            break;
        default:
            break;
    }
};

room602.chatcatch = function (callback) {
    switch (callback) {
        case "reload":
            char.room(602);
            break;
        case "sissy2":
        case "sissy3":
            nav.bg("602_backroom/" + callback + ".webp");
            break;
        case "sissy4":
            char.room(602);
            break;
        default:
            break;
    }
};

room602.chat = function (chatID) {
    if (chatID === 900) {
        return {
            chatID: 0,
            speaker: "thinking",
            text: g.internal,
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "!timothy",
            text: "Hey you! Funny seeing you outside of class! I'm so happy you're here! ",
            button: [
                { chatID: 1, text: "Oh wow! Hi " + sc.n("!timothy") + "! How long have you been working here? ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!timothy",
            text: "Not too long. I think the Sissy School gave me the motivation to do what " +
                "I really want to do, and be who I really am! Check out these tits! I know they're " +
                "not huge yet, but they're really starting to come in! ",
            button: [
                { chatID: 2, text: "Those are great looking tits! ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!timothy",
            text: "Just between you and me, I've been on hormones for a while, but since " +
                "this class started, they've really started to come in. I'm totally going to " +
                "get a boob job since they're taking so long to get big, but the wait list " +
                "is forever unless you're rich! ",
            button: [
                { chatID: 3, text: "You should. You'd look great with huge tits! ", callback: "" },
                { chatID: 4, text: "Naw. Your tits are perfect. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!timothy",
            text: "You're so right! I'm going to get the perfect bimbo body! Maybe be " +
                "a model or trophy wife. I dunno. But I do need bigger tits! Oh! I hear " +
                "my song. I'll catch you later, or maybe in the private dance booth!",
            button: [
                { chatID: -1, text: "Totally, later", callback: "reload" }
            ]
        },
        {
            chatID: 4,
            speaker: "!timothy",
            text: "Thanks, but I know what I need. I'm going to get the perfect bimbo body! Maybe be " +
                "a model or trophy wife. I dunno. But I do need bigger tits! Oh! I hear " +
                "my song. I'll catch you later, or maybe in the private dance booth!",
            button: [
                { chatID: -1, text: "Totally, later", callback: "reload" }
            ]
        },
        {
            chatID: 5,
            speaker: "!sporty",
            text: "I'm so excited that you're all here! We're going to have so much " +
                "fun dancing all over those hard cocks out there! I can't believe everyone " +
                "came! ",
            button: [
                { chatID: 6, text: "Speaking of everyoone where's " + sc.n("!philbert") + "?", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!chris",
            text: "That boy's still in the closet. There's no way he'll show his face in public. " +
                "He still thinks he's some kind of alpha male that wears panties and fingers his " +
                "prostate. But... I won't complain. He is sexy, has a good dick, and really knows " +
                "how to fuck. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "!kareem",
            text: "Hahah! Fo' real. He's made it all the way through the Sissy School, but " +
                "he thinks he's some kinda dom! Remember " + sc.n("!jeremy") + "? He knew this wasn't " +
                "for him. ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "!timothy",
            text: "Yeah. What happened to him? He always talked about growing up on " +
                "a farm. I bet he's going to go back, get a wife, and raise a dozen kids. " +
                "I hope he's at least happy. ",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "!martin",
            text: "Oh fuckkkkk " + sc.n("!thomas") + "! Deeper! I'm almost there!!!",
            button: [
                { chatID: 10, text: "?", callback: "sissy2" }
            ]
        },
        {
            chatID: 10,
            speaker: "!martin",
            text: "YES!!! Fuck I needed that!",
            button: [
                { chatID: 11, text: "...", callback: "sissy3" }
            ]
        },
        {
            chatID: 11,
            speaker: "!chris",
            text: "You go ahead and get ready. I'm going to make sure " + sc.n("!thomas") +
                " licks up all of " + sc.n("!martin") + "'s cummies. We'll see you out there " +
                "honey. ",
            button: [
                { chatID: -1, text: "Ok.", callback: "sissy4" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};