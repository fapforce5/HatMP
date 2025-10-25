//Room name
var room801 = {};
room801.main = function () {
    if (sc.getMission("ralphsdad", "main").notStarted) {
        sc.show("ralphsdad");
        sc.startMission("ralphsdad", "main");
        sc.completeMissionTask("ralphsdad", "main", 0);
        nav.bg("801_ralphlivingroom/dad.webp");
        nav.button({
            "type": "btn",
            "name": "dad",
            "left": 926,
            "top": 86,
            "width": 437,
            "height": 994,
            "image": "801_ralphlivingroom/d.webp"
        }, 801);
        future.add("ralphsdadworktripback", 7);
        chat(0, 801);
    }
    else if (future.get("ralphsdadworktripback") > 0) {
        if (cl.appearance() > 1 && !daily.get("ralphdadassmolest")) {
            daily.set("ralphdadassmolest");
            if (sc.getLevel("ralphsdad") < 3) {
                nav.bg("801_ralphlivingroom/assgrab_bg.webp");
                zcl.displayMain(-1400, 0, .5, "clothes", true);
                nav.button({
                    "type": "img",
                    "name": "dad",
                    "left": 260,
                    "top": 0,
                    "width": 754,
                    "height": 826,
                    "image": "801_ralphlivingroom/assgrab_fg.webp"
                }, 801);
                chat(2, 801);
            }
            else if (sc.getLevel("ralphsdad") < 6) {
                if (g.rand(0, 2) === 0) {
                    nav.button({
                        "type": "btn",
                        "name": "dad",
                        "left": 926,
                        "top": 86,
                        "width": 437,
                        "height": 994,
                        "image": "801_ralphlivingroom/d_f.webp"
                    }, 801);
                    chat(4, 801);
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "daddick",
                        "left": 926,
                        "top": 86,
                        "width": 437,
                        "height": 994,
                        "image": "801_ralphlivingroom/d_d.webp"
                    }, 801);
                }
            }
        }
        else {
            nav.bg("801_ralphlivingroom/dad.webp");
            nav.button({
                "type": "btn",
                "name": "dad",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d.webp"
            }, 801);
        }
    }
    if (daily.get("noRoom803"))
        nav.buildnav([802, 0]);
    else
        nav.buildnav([802, 803, 0]);
};

room801.btnclick = function (name) {
    switch (name) {
        case "dad":
            chat(1, 801);
            break;
        case "daddick":
            chat(7, 801);
            break;
        default:
            break;
    }
};

room801.chatcatch = function (callback) {
    switch (callback) {
        case "ralphRoom":
            char.room(802);
            break;
        case "assgrab":
            sc.modLevel("ralphsdad", 51, 3);
            break;
        case "takeFlowers":
            sc.modLevel("ralphsdad", 34, 6);
            inv.add("bouquet");
            break;
        case "likeDick":
            sc.modLevel("ralphsdad", 34, 6);
            levels.mod("xdress", 15);
            break;
        case "reset":
            char.room(801);
            break;
        default:
            break;
    }
};

room801.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "ralphsdad",
            text: "Hey champ! Just watching the big game. I guess you came over to see my boy " +
                sc.n("ralph") + "! You'll find him upstairs playing in his room. You know you " +
                "boys should go outside and play a bit. A little kick ball is good for ya. ",
            button: [
                { chatID: -1, text: "Sure Ralph's dad. Maybe we will. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ralphsdad",
            text: sc.n("ralph") + "'s room is just around the corner. I'm sure he's been waiting " +
                "for you. ",
            button: [
                { chatID: -1, text: "Thanks. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "ralphsdad",
            text: "You're looking really firm. I love it when you come by.",
            button: [
                { chatID: 3, text: "[Linger a bit]", callback: "assgrab" },
                { chatID: -1, text: "Thanks! Just came by to see " + sc.n("ralph") + "!", callback: "ralphRoom" },
            ]
        },
        {
            chatID: 3,
            speaker: "ralphsdad",
            text: "I love watching you grow into the woman you are. ",
            button: [
                { chatID: -1, text: "You're sweet " + sc.n("ralphsdad") + ".", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "ralphsdad",
            text: "I got you some flowers that are almost as pretty as you are dear. ",
            button: [
                { chatID: 6, text: "Awww thanks", callback: "takeFlowers" },
                { chatID: 5, text: "No thanks. What would your wife say", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "ralphsdad",
            text: "Just trying to be friendly. *sheesh* ",
            button: [
                { chatID: -1, text: "sure", callback: "reset" },
            ]
        },
        {
            chatID: 6,
            speaker: "ralphsdad",
            text: "I knew you would love them. A girl as pretty as you needs pretty things. ",
            button: [
                { chatID: -1, text: "Awwww", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "ralphsdad",
            text: "Oh! hahaha. It appears my dick is out! Let me put that back. ",
            button: [
                { chatID: 8, text: "It is a nice thick juicy dick.", callback: "likeDick" },
                { chatID: -1, text: "Oh my! I have to run", callback: "ralphRoom" },
            ]
        },
        {
            chatID: 8,
            speaker: "ralphsdad",
            text: "It is. You should see it hard. Hehehe. ",
            button: [
                { chatID: -1, text: "Oh " + sc.n("ralphsdad") + "!", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};