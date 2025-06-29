//Room name
var room626 = {};
room626.main = function () {
    
    var btnList = [
        {
            "type": "btn",
            "name": "futa",
            "left": 1194,
            "top": 18,
            "width": 635,
            "height": 1062,
            "image": "626_ferris/futa2.png"
        }
    ];
    var navList = [625];
    $.each(btnList, function (i, v) {
        nav.button(v, 626);
    });
    nav.buildnav(navList);
};

room626.btnclick = function (name) {
    switch (name) {
        case "futa":
            if (gv.get("money") < 15)
                chat(6, 626);
            else {
                chat(7, 626);
            }
            break;
        case "lola_5":
            nav.killbutton("lola_5");
            nav.bg("626_ferris/" + name + ".jpg");
            nav.next("lola_6");
            break;
        case "lola_6":
            nav.killbutton("lola_6");
            nav.bg("626_ferris/" + name + ".jpg");
            chat(5, 626);
            break;
        default:
            break;
    }
};

room626.chatcatch = function (callback) {
    switch (callback) {
        case "who":
            nav.killall();
            gv.mod("money", -15);
            if (g.pass.who === "lola") {
                chat(0, 626);
                nav.bg("626_ferris/lola_0.jpg");
            }
            else {
                nav.bg("626_ferris/sit_" + gender.pronoun("m") + ".jpg");
                chat(10, 626);
            }
            break;
        case "lola_1":
            if (sc.getLevel("lola") < 2) {
                g.internal = 2;
                chat(999, 626);
                sc.modLevel("lola", 15, 7);
            }
            else {
                nav.bg("626_ferris/" + callback + ".jpg");
                sc.modLevel("lola", 15, 7);
                chat(1, 626);
            }
            break;
        case "lola_2":
            if (sc.getLevel("lola") < 3) {
                g.internal = 3;
                chat(999, 626);
                sc.modLevel("lola", 15, 7);
            }
            else {
                nav.bg("626_ferris/" + callback + ".jpg");
                sc.modLevel("lola", 15, 7);
                chat(2, 626);
            }
            break;
        case "lola_3":
            if (sc.getLevel("lola") < 4) {
                g.internal = 4;
                chat(999, 626);
                sc.modLevel("lola", 15, 7);
            }
            else {
                nav.bg("626_ferris/" + callback + ".jpg");
                sc.modLevel("lola", 15, 7);
                chat(3, 626);
            }
            break;
        case "lola_4":
            if (sc.getLevel("lola") < 5) {
                nav.bg("626_ferris/lola_2.jpg");
                sc.modLevel("lola", 15, 7);
                chat(9, 626);
            }
            else {
                sc.modLevel("lola", 15, 7);
                chat(4, 626);
            }
            break;
        case "lola_4a":
            nav.bg("626_ferris/lola_4.jpg");
            nav.next("lola_5");
            break;
        case "lola_6":
            levels.gotbj("f", "lola");
            char.room(625);
            break;
        case "leave":
            char.room(625);
            break;
        default:
            break;
    }
};

room626.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 1,
            speaker: "lola",
            text: "You're moving a little fast for a practice date. ",
            button: [
                { chatID: -1, text: "Let's just enjoy the ride. [Need level " + g.internal + "]", callback: "leave" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "lola",
                text: "I so love the ferris wheel. Looking over all the people is so eye opening. ",
                button: [
                    { chatID: -1, text: "Yeah it is. [Put your arm over her shoulder. ]", callback: "lola_1" },
                    { chatID: 8, text: "Totally. [Just let her enjoy the ride. ]", callback: "" },
                ]
            },
            {
                chatID: 1,
                speaker: "lola",
                text: "The people are like ants. They're so tiny. ",
                button: [
                    { chatID: -1, text: "So tiny. [Pull her in closer. ]", callback: "lola_2" },
                    { chatID: 8, text: "Totally. [Just let her enjoy the ride. ]", callback: "" },
                ]
            },
            {
                chatID: 2,
                speaker: "lola",
                text: "Just walking around in their tiny little lives. ",
                button: [
                    { chatID: -1, text: "Little lives. [Slip your hand under her skirt. ]", callback: "lola_3" },
                    { chatID: 8, text: "Totally. [Just let her enjoy the ride. ]", callback: "" },
                ]
            },
            {
                chatID: 3,
                speaker: "lola",
                text: "Oh my... That's feels so good. What if someone sees us?",
                button: [
                    { chatID: -1, text: "No one can see us. It's just you, me, and this view. ", callback: "lola_4" },
                ]
            },
            {
                chatID: 4,
                speaker: "lola",
                text: "Well if they can't see us, then they can't see this!",
                button: [
                    { chatID: -1, text: "huh? ", callback: "lola_4a" },
                ]
            },
            {
                chatID: 5,
                speaker: "lola",
                text: "So how was that for a practice date? ",
                button: [
                    { chatID: -1, text: "Best practice blow job every!", callback: "lola_6" },
                ]
            },
            {
                chatID: 6,
                speaker: "futa2",
                text: "Step right up. Only $15 to ride the ferris wheel. ",
                button: [
                    { chatID: -1, text: "Drat! I don't have enough money.", callback: "" },
                ]
            },
            {
                chatID: 7,
                speaker: "futa2",
                text: "Step right up. Only $15 to ride the ferris wheel. ",
                button: [
                    { chatID: -1, text: "One ride please", callback: "who" },
                    { chatID: -1, text: "Too much money. blech", callback: "" },
                ]
            },
            {
                chatID: 8,
                speaker: "lola",
                text: "That was fun. Thanks so much!",
                button: [
                    { chatID: -1, text: "I did too", callback: "leave" },
                ]
            },
            {
                chatID: 9,
                speaker: "lola",
                text: "Oh wow! That was so naughty! This is the best practice date I've could be on.",
                button: [
                    { chatID: -1, text: "I had fun too [Need level 5 to go further]", callback: "leave" },
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "Neat view, but it would be much better with someone else. ",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};