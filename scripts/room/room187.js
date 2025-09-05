//Room name
var room187 = {};
room187.main = function () {
    switch (g.pass) {
        case "white":
            nav.bg("187_school/white_day.webp", "187_school/white_dark.webp");
            if (g.isNight()) {
                chat(0, 187);
            }
            else if (daily.get("marthpills")) {
                chat(7, 187);
            }
            else {
                chat(1, 187);
            }
            break;
        case "red":
            nav.bg("177_chastity/bg.jpg");
            chat(8, 187);
            nav.buildnav([211, 207, 0]);
            break;
        case "pink":
            nav.bg("187_school/pinkbg.webp");
            nav.button({
                "type": "grab",
                "name": "dildo",
                "left": 915,
                "top": 212,
                "width": 98,
                "height": 414,
                "image": "187_school/pink_dildo.webp"
            }, 187);
            nav.buildnav([211, 207, 0]);
            break;
    }
};

room187.btnclick = function (name) {
    switch (name) {
        case "final6":
            nav.modbutton("final6", "176_oral/final6_1.webp", null, null);
            chat(4, 187);
            break;
        case "dildo":
            chat(9, 187);
            break;
        case "pink":
            var anallev = levels.get("anal").l;
            if (g.internal === 1 && anallev > 3) {
                nav.bg("187_school/pink_2_m.webp")
            }
            else if (g.internal === 2 && anallev > 4) {
                nav.bg("187_school/pink_3_m.webp")
            }
            else if (g.internal === 3 && anallev > 6) {
                nav.bg("187_school/pink_4_m.webp")
            }
            else if (g.internal === 4 && anallev > 7) {
                nav.bg("187_school/pink_5_m.webp");
            }
            else if (g.internal === 5) {
                if (!daily.get("max187dildo")) {
                    daily.set("max187dildo");
                    levels.mod("anal", 50);
                }
                nav.bg("187_school/pink_6_m.webp");
                nav.killbutton("pink");
                chat(11, 187);
            }
            else {
                if (!daily.get("max187dildo")) {
                    daily.set("max187dildo");
                    levels.mod("anal", 50);
                }
                nav.killbutton("pink");
                chat(10, 187);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room187.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(211);
            break;
        case "kiss":
            nav.kill(); 
            nav.bg("187_school/white_kiss.webp");
            nav.button({
                "type": "kiss",
                "name": "final6",
                "left": 744,
                "top": 392,
                "width": 470,
                "height": 290,
                "image": "176_oral/final6.webp"
            }, 187);
            break;
        case "pills":
            nav.bg("187_school/white_floor.webp");
            cl.nude();
            zcl.bent(0, 300, .8, "", false);
            nav.button({
                "type": "img",
                "name": "pill",
                "left": 1042,
                "top": 374,
                "width": 68,
                "height": 51,
                "image": "211_meeting/pills1.png",
            }, 211);
            gv.mod("hormone", 35);
            daily.set("marthpills");
            break;
        case "pillsreset":
            nav.kill();
            cl.undo();
            nav.bg("187_school/white_day0.webp");
            break;
        case "pink1":
            nav.kill();
            g.internal = 1;
            nav.bg("187_school/pink_1_m.webp");
            nav.next("pink");
            break;
        default:
            break;
    }
};

room187.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I guess she's gone home for the night. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "martha",
            text: "Ah, a visitor. I do so enjoy company. I presume you've come for your daily dose of feminization pills?",
            button: [
                { chatID: 3, text: "I uhh. yeah", callback: "" },
                { chatID: 2, text: "Nope. Just stopped by to admire your cock. ", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "martha",
            text: "My apologies, but my schedule is quite full at the moment. Perhaps you might be able to return at a later date?",
            button: [
                { chatID: -1, text: "Oh. Ok.", callback: "leave" },
            ]
        },
        {
            chatID: 3,
            speaker: "martha",
            text: "Splendid. Before I bestow upon you your daily dose of feminization pills, you must first pay tribute to my penis with a kiss.",
            button: [
                { chatID: -1, text: "Yes ma'am!", callback: "kiss" },
            ]
        },
        {
            chatID: 4,
            speaker: "martha",
            text: "That is my good girl. Now, prepare to receive your daily dose of femininity, a truly transformative and necessary ritual for a girl such as yourself.",
            button: [
                { chatID: 5, text: "Yes ma'am!", callback: "pills" },
            ]
        },
        {
            chatID: 5,
            speaker: "martha",
            text: "Ah, you are a vision of beauty. This very pose truly illuminates the essence of your being and the very purpose for which you were created. I do so enjoy helping young ladies like you on your journey.",
            button: [
                { chatID: 6, text: "Thank you ma'am!", callback: "pillsreset" },
            ]
        },
        {
            chatID: 6,
            speaker: "martha",
            text: "While I do so enjoy seeing you receive your suppositories, I must confess that I have a great many other matters to which I must attend. I trust you will understand if I must dismiss you now.",
            button: [
                { chatID: -1, text: "Thank you ma'am!", callback: "leave" },
            ]
        },
        {
            chatID: 7,
            speaker: "martha",
            text: "While I do so enjoy our visits, I find myself with a great many other matters that require my immediate attention. And do remember, my dear, that you are permitted but one dose of your feminization pills per day.",
            button: [
                { chatID: -1, text: "Oh yea. Duh! I'm such a bimbo head!", callback: "leave" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Such memories. I do wish to be back in school following the orders of Missy's whims. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Hmmmm. It's been some time since the mid-term. I wonder how much of that I can " +
                "take?",
            button: [
                { chatID: -1, text: "Sit on the giant dildo", callback: "pink1" },
                { chatID: -1, text: "Another time. ", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "owie owie owie!!! That's all I can take!!!! Damn that hurts my tight hole!",
            button: [
                { chatID: -1, text: "relax", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "My bussy is a black hole, able to suck up any planet size cock or dildo that " +
                "get too close to it!!!",
            button: [
                { chatID: -1, text: "relax", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};