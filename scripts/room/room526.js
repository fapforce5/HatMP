//Room name
var room526 = {};
room526.main = function () {
    var btnList = [{
        "type": "btn",
        "name": "zoey",
        "left": 923,
        "top": 175,
        "width": 318,
        "height": 140,
        "image": "526_bar/barmaid.jpg"
    }];
    if (sc.getstep("poppy") === 0) {
        btnList.push({
            "type": "btn",
            "name": "group",
            "left": 500,
            "top": 0,
            "width": 1229,
            "height": 1080,
            "image": "526_bar/group1.png"
        });
        chat(0, 526);
    }
    $.each(btnList, function (i, v) {
        nav.button(v, 526);
    });

    nav.buildnav([0]);
};

room526.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room526.chatcatch = function (callback) {
    switch (callback) {
        case "checkCock":
            break;
        default:
            break;
    }
};

room526.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "poppy",
            text: "Oh... hello. We wern't expecting any new girls here! ",
            button: [
                { chatID: 1, text: "GULP", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "orchid",
            text: "Oh is there someone new here! Who is it! ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "juniper",
            text: "Yes, what's your name? ",
            button: [
                { chatID: 3, text: "I'm " + sc.n("me") + ". What is this place?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "poppy",
            text: "Zoey's bar you silly sissy. The best damn bar in this town! So did you want to take a turn with " + 
                sc.n("orchid") + "? I get you fuck like a freight train.",
            button: [
                { chatID: -1, text: "Fuck Yes!", callback: "checkCock" },
                { chatID: 4, text: "Oh no.... I'm a scared little bitch", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "orchid",
            text: "Awwww, I was hoping for more cum in my bum!",
            button: [
                { chatID: 5, text: "I'm going to chat with Zoey. You girls have fun.", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};