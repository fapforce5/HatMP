//Room name
var room628 = {};
room628.main = function () {
    g.internal = { t1: null, t2: null, t3: null };
    var btnList = [
        {
            "type": "btn",
            "name": "futa1",
            "left": 458,
            "top": 271,
            "width": 287,
            "height": 489,
            "image": "628_throw/futa1.png"
        }
    ];
    var navList = [625];
    $.each(btnList, function (i, v) {
        nav.button(v, 628);
    });
    nav.buildnav(navList);
};

room628.btnclick = function (name) {
    switch (name) {
        case "futa1":
            chat(0, 628);
            break;
        default:
            break;
    }
};

room628.chatcatch = function (callback) {
    switch (callback) {
        case "check10":
            if (gv.get("money") < 10)
                chat(1, 628);
            else {
                chat(2, 628);
            }
            break;
        case "reset":
            char.room(628);
            break;
        default:
            break;
    }
};

room628.chat = function (chatID) {
    if (chatID === 999) {
        nav.kill();
        var goodToss = g.rand(0, 2) === 0;
        if (g.internal.c > 5)
            goodToss = true;

        var gb = goodToss ? "g" : "b";
        var img;
        var btntxt = "[Throw the next]";
        if (g.internal.t1 === null) {
            img = "t1" + gb;
            g.internal.t1 = goodToss;
        }
        else if (g.internal.t2 === null) {
            img = "t2" + gb;
            g.internal.t2 = goodToss;
        }
        else if (g.internal.t3 === null) {
            img = "t3" + gb;
            g.internal.t3 = goodToss;
            btntxt = "...";
        }
        else {
            if (g.internal.t1 && g.internal.t2 && g.internal.t3) {
                nav.bg("628_throw/win.jpg");
                if (g.pass.who === "lola") {
                    return {
                        chatID: 0,
                        speaker: "futa1",
                        text: "You won a copy of my dick! ",
                        button: [
                            { chatID: 3, text: "huh?", callback: "" },
                        ]
                    };
                }
                else {
                    inv.add("pinkFatDildo");
                    return {
                        chatID: 0,
                        speaker: "futa1",
                        text: "You won a copy of my dick! ",
                        button: [
                            { chatID: -1, text: "Oh. Sweet!! It's so big!", callback: "reset" },
                        ]
                    };
                }
            }
            else {
                nav.bg("628_throw/empty.jpg");
                return {
                    chatID: 0,
                    speaker: "futa1",
                    text: "Not a winner! Try again. ",
                    button: [
                        { chatID: -1, text: "Crap", callback: "reset" },
                    ]
                };
            }
        }
        nav.bg("628_throw/" + img + ".jpg");
        if (goodToss)
            return {
                chatID: 0,
                speaker: "futa1",
                text: "Nice throw! ",
                button: [
                    { chatID: 999, text: btntxt, callback: "" }
                ]
            };
        else
            return {
                chatID: 0,
                speaker: "futa1",
                text: "Miss! ",
                button: [
                    { chatID: 999, text: btntxt, callback: "" }
                ]
            };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "futa1",
                text: "Step right up. Three throws for only $10. Try your luck! ",
                button: [
                    { chatID: -1, text: "I'll give it a try. ", callback: "check10" },
                    { chatID: -1, text: "$10 is a bit much. ", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "futa1",
                text: "You trying to stiff me? I do the stiffing around here buddy! ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "futa1",
                text: "Arright! Toss that ball! ",
                button: [
                    { chatID: 999, text: "Toss the ball", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "lola",
                text: "You are not taking that! First, gross. Second, there's no way I can use " +
                    "that! Not in a million years will that ever fit in me! ",
                button: [
                    { chatID: -1, text: "Yeah. There's no way I would ever get that! ", callback: "reset" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};