//Room name
var room627 = {};
room627.main = function () {
    
    nav.button({
        "type": "btn",
        "name": "clown",
        "left": 513,
        "top": 277,
        "width": 453,
        "height": 722,
        "image": "627_bong/clown.png"
    }, 627)
    nav.buildnav([625]);
};

room627.btnclick = function (name) {
    switch (name) {
        case "clown":
            chat(0, 627);
            break;
        default:
            break;
    }
};

room627.chatcatch = function (callback) {
    switch (callback) {
        case "bang":
        case "kiss":
        case "bg":
            nav.kill();
            nav.bg("627_bong/" + callback + ".jpg");
            break;
        case "play":
            if (gv.get("money") < 5)
                chat(1, 627);
            else {
                gv.mod("money", -5);
                chat(2, 627);
            }
            break;
        case "reset":
            char.room(627);
            break;
        default:
            break;
    }
};

room627.chat = function (chatID) {
    if (chatID === 999) {
        var st = levels.get("strength").l;
        var stDisplay = st;
        
        if (st < 2)
            st = 2;
        if (st > 9) {
            nav.bg("627_bong/bgwin.jpg");
            nav.button({
                "type": "img",
                "name": "bong",
                "left": 925,
                "top": 0,
                "width": 315,
                "height": 302,
                "image": "627_bong/d10.png"
            }, 450);
            if (g.pass.who === "lola") {
                if (sc.getMissionTask("lola", "date", 3).complete) {
                    inv.add("teddybear");
                    return {
                        chatID: 4,
                        speaker: "me",
                        text: "I won another teddy bear! ",
                        button: [
                            { chatID: 5, text: "...", callback: "" },
                        ]
                    };
                }
                else {
                    sc.completeMissionTask("lola", "date", 3, true);
                    sc.modLevel("lola", 75, 7);
                    return {
                        chatID: 6,
                        speaker: "me",
                        text: "I won you this teddy bear. It's cute, like you. ",
                        button: [
                            { chatID: 7, text: "...", callback: "kiss" },
                        ]
                    };
                }
            }
            else {
                inv.add("teddybear");
                return {
                    chatID: 999,
                    speaker: "clownqueen",
                    text: "You've won a teddy! ",
                    button: [
                        { chatID: -1, text: "Yes!", callback: "reset" },
                    ]
                };
            }
        }
        else {
            nav.bg("627_bong/bg.jpg");
            var top = 645 - ((st - 2) * 50)
            nav.button({
                "type": "img",
                "name": "bong",
                "left": 987,
                "top": top,
                "width": 191,
                "height": 71,
                "image": "627_bong/d" + st + ".png"
            }, 450);
            return {
                chatID: 999,
                speaker: "clownqueen",
                text: "Awww only " + st + "0 points. Better luck next time! ",
                button: [
                    { chatID: -1, text: "[Strength: " + stDisplay + " Need level 10 to win]", callback: "reset" },
                ]
            };
        }
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "clownqueen",
                text: "Step right up! Test your strength win a prize. Only $5 dollars per stroke! ",
                button: [
                    { chatID: -1, text: "Try to win a prize", callback: "play" },
                    { chatID: -1, text: "Nah. I'm good", callback: "" },
                ]
            },
            {
                chatID: 1,
                speaker: "clownqueen",
                text: "You can't play me for a fool! You need $5 ",
                button: [
                    { chatID: -1, text: "Oh yeah. I need more money. ", callback: "" },
                ]
            },
            {
                chatID: 2,
                speaker: "clownqueen",
                text: "Very good " + gender.pronoun("man") + " now take your swing! ",
                button: [
                    { chatID: 3, text: "Swing away! ", callback: "bang" },
                ]
            },
            {
                chatID: 3,
                speaker: "me",
                text: "HHhhhhhIIIIyyyyaaaa!!!!!!",
                button: [
                    { chatID: 999, text: "...", callback: "" },
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: "I won another teddy bear! ",
                button: [
                    { chatID: 5, text: "...", callback: "" },
                ]
            },
            {
                chatID: 5,
                speaker: "lola",
                text: "I already have my favorite teddy bear. You should keep it. ",
                button: [
                    { chatID: -1, text: "Totally. I'm the best. ", callback: "reset" },
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "I won you this teddy bear. It's cute, like you. ",
                button: [
                    { chatID: 7, text: "...", callback: "kiss" },
                ]
            },
            {
                chatID: 7,
                speaker: "lola",
                text: "*mwah* I love it!",
                button: [
                    { chatID: -1, text: "*mwah*", callback: "reset" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};