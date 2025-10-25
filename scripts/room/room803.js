//Room name
var room803 = {};
room803.main = function () {
    if (future.get("ralphsdadworktripback") > 0) {
        nav.bg("803_parentbedroom/no.webp");
        chat(0, 803);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "closet",
                "left": 1317,
                "top": 3,
                "width": 574,
                "height": 999,
                "image": "803_parentbedroom/closet.webp"
            }
        ];
        $.each(btnList, function (i, v) {
            nav.button(v, 803);
        });
    }
    nav.buildnav([801]);
};

room803.btnclick = function (name) {
    switch (name) {
        case "closet":
            chat(1, 803);
            break;
        case "reset":
            char.room(803);
            break;
        case "search":
            var sbbbc = inv.has("blackDildo");
            var ssr = cl.hasClothing("panties", "cr");
            if (sbbbc && ssr) {
                chat(3, 803);
            }
            else if (daily.get("ralphpartentssearch")) {
                chat(4, 803);
            }
            else {
                nav.kill();
                daily.set("ralphpartentssearch")
                charisma.itelInit(10, "searchwin", "searchlose", 803);
            }
            break;
        case "searchwin":
            if (!cl.hasClothing("panties", "cr")) {
                nav.kill();
                nav.bg("803_parentbedroom/cr.webp");
                cl.add("panties", "cr");
                cl.add("bra", "cr");
                chat(10, 803);
            }
            else {
                nav.kill();
                nav.button({
                    "type": "img",
                    "name": "bbc",
                    "left": 809,
                    "top": 258,
                    "width": 301,
                    "height": 564,
                    "image": "19_layInBed/blackDildo.png"
                }, 803);
                inv.add("blackDildo");
                chat(6, 803);
            }
            break;
        case "searchlose":
            chat(5, 803);
            break;
        case "hide":
            if (g.isNight()) {
                chat(2, 803);
            }
            else {
                nav.kill();
                nav.bg("803_parentbedroom/peek0.webp");
                sc.select("keephiding", "803_parentbedroom/icon_hide0.webp", 0);
                sc.select("cancelHide", "13_sisterRoom/icon_cancel.png", 1);
            }
            break;
        case "cancelHide":
            room803.chatcatch("closet");
            break;
        case "keephiding":
            if (g.isNight()) {
                chat(2, 803);
            }
            else {
                char.addtime(45);
                if (g.rand(0, 4) === 0) {
                    nav.kill();
                    nav.bg("803_parentbedroom/peek1.webp");
                    chat(7, 803);
                }
                else {
                    g.popUpNotice("45 minutes passed...");
                }
            }
            break;
        default:
            break;
    }
};

room803.chatcatch = function (callback) {
    switch (callback) {
        case "peek0":
        case "peek1":
        case "peek2":
            nav.bg("803_parentbedroom/" + callback + ".webp");
            break;
        case "closet":
            nav.kill();
            nav.bg("803_parentbedroom/insidecloset.webp");
            sc.select("search", "803_parentbedroom/icon_search.webp", 0);
            sc.select("hide", "803_parentbedroom/icon_hide.webp", 1);
            sc.select("reset", "301_living/icon_leave.png", 2);
            break;
        case "peekLeave":
            daily.set("noRoom803");
            char.room(801);
            break;
        default:
            break;
    }
};

room803.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "ralphsdad",
            text: "Hey champ, I think you're a bit lost. " + sc.n("ralph") + "'s room is the other " +
                "way. ",
            button: [
                { chatID: -1, text: "oh whoops. Ok.", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Should I go through their closet? ",
            button: [
                { chatID: -1, text: "Totally!", callback: "closet" },
                { chatID: -1, text: "Gross. That's an invastion of privacy!", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "It's getting pretty late. I better leave before " + sc.n("ralphsmom") + 
                "gets back. She doens't like us playing after dark. ",
            button: [
                { chatID: -1, text: "...", callback: "closet" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "There's nothing else in here. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I've already searched their closet today. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Damn! Didn't find anything",
            button: [
                { chatID: -1, text: "...", callback: "closet" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Damn " + sc.n("ralphsmom") + "! What a dirty girl you are! I wonder if your " +
                "husband knows you have such a big fake cock. Well, not anymore. Hopefully " +
                sc.n("ralph") + " doesn't get blamed for me taking this. ",
            button: [
                { chatID: -1, text: "[BBC dildo added to inventory]", callback: "closet" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "That's " + sc.n("ralphsmom") + "! I know that butt anywhere! She me dem titties " +
                "girl! Take them out and shake 'em!",
            button: [
                { chatID: 8, text: "...", callback: "peek2" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Oh nice! I so much want to touch that butt! Bend over for me baby. Just bend " +
                "over and spread those holes!",
            button: [
                { chatID: 9, text: "...", callback: "peek0" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Oh. I hear the shower running. Now's my chance to get out of here before I " +
                "get caught. ",
            button: [
                { chatID: -1, text: "...", callback: "peekLeave" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "You dirty girl, " + sc.n("ralphsmom") + "! Crotchless panties and see through bra. " +
                "I'll bet you wore this for " + sc.n("ralphsdad") + " a few times to seduce him. " +
                "I'm so going to dress up in my closet and check my slutty self out later when I put " +
                "these on! ",
            button: [
                { chatID: -1, text: "[Slutty Bra and panties added to inventory]", callback: "closet" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};