//Room name
var room602 = {};
room602.main = function () {
    if (sc.getMissionTask("tony", "strip", 1).notStarted) {
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};