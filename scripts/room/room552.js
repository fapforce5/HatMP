//Room name
var room552 = {};
room552.main = function () {
    if (cl.hasoutfit("public") === null) {
        g.pass = "boy";
        var btnList = [
            {
                "type": "btn",
                "name": "shower",
                "left": 874,
                "top": 279,
                "width": 187,
                "height": 393,
                "image": "552_boy/shower.jpg"
            }
        ];
        if (Math.floor(Math.random() * 2) === 1) {
            btnList.push({
                "type": "img",
                "name": "treyvon",
                "left": 1011,
                "top": 119,
                "width": 724,
                "height": 961,
                "image": "552_boy/treyvon.png"
            });
            btnList.push({
                "type": "btn",
                "name": "treyvonTowel",
                "left": 1163,
                "top": 717,
                "width": 431,
                "height": 345,
                "image": "552_boy/treyvonTowel.png"
            });
            console.log("2");
        }
        var navList = [551, 554, 0];
        $.each(btnList, function (i, v) {
            nav.button(v, 552);
        });
        nav.buildnav(navList);
    }
    else
        chat(8, 552);
};

room552.btnclick = function (name) {
    switch (name) {
        case "shower":
            char.room(554);
            break;
        case "bigguyTowel":
            nav.killbutton("bigguyTowel");
            if (sc.checkevent("me", -9)){
                chat(3, 552);
            }
            else {
                chat(0, 552);
            }
            break;
        case "treyvonTowel":
            nav.killbutton("treyvonTowel");
            if (sc.checkevent("me", -9)) {
                chat(4, 552);
            }
            else {
                chat(4, 552);
            }
            break;
        default:
            break;
    }
};

room552.chatcatch = function (callback) {
    switch (callback) {
        case "Complete":
            char.room(551);
            
            break;
        default:
            break;
    }
};

room552.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "bigguy",
            text: "Hay shrimp, you like how my cock looks?",
            button: [
                { chatID: 1, text: "I do", callback: "" },
                { chatID: 2, text: "I don't know why I did that", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "bigguy",
            text: "I know, You keep pulling my towel and I'll shove this uncut cock straight into your boy ass.",
            button: [
                { chatID: -1, text: "I know", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "bigguy",
            text: "Don't lie, you wanted to check out what a real man looks like cock slut.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "bigguy",
            text: "Suck cock",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "treyvon",
            text: "I see you're a horny cock slut, you like looking at a big juicy cock?",
            button: [
                { chatID: 5, text: "I do", callback: "" },
                { chatID: 6, text: "I don't know why I did that", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "treyvon",
            text: "Well I just filled a couple sluts full of cum before I came here, but I'll save you some.",
            button: [
                { chatID: -1, text: "I know", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "treyvon",
            text: "Don't lie, everyone loves my big meaty cock.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "treyvon",
            text: "Suck cock",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "I can't go out like this.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};