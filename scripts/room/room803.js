//Room name
var room803 = {};
room803.main = function () {
    if (future.get("ralphsdadworktripback") > 0) {
        if (sc.getTimeline("ralphsdad").thisRoom) {
            nav.bg("803_parentbedroom/lpeek0.webp");
            chat(11, 803);
        }
        else {
            if (sc.getMissionTask("ralphsdad", "main", 3).notStarted && !daily.get("803daddick")) {
                nav.bg("803_parentbedroom/no.webp");
                chat(0, 803);
            }
            else {
                daily.set("803daddick");
                nav.bg("803_parentbedroom/no.webp");
                chat(13, 803);
            }
        }
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
        case "daddick":
            chat(16, 803);
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
        case "lpeek1":
        case "suck0":
        case "suck1":
        case "suck4":
        case "suck5":
        case "suck6":
        case "suck7":
        case "suck8":
        case "suck9":
        case "suck10":
        case "suck11":
            nav.bg("803_parentbedroom/" + callback + ".webp");
            break;
        case "suck3":
            nav.kill();
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
        case "suck2":
            nav.bg("803_parentbedroom/bg.webp");
            nav.button({
                "type": "kiss",
                "name": "daddick",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d_d.webp"
            }, 803);
            break;
        case "room801bg":
            nav.bg("801_ralphlivingroom/bg.webp");
            nav.button({
                "type": "btn",
                "name": "dad",
                "left": 926,
                "top": 86,
                "width": 437,
                "height": 994,
                "image": "801_ralphlivingroom/d.webp"
            }, 801);
            daily.set("room800dad");
            break;
        case "leave":
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
        {
            chatID: 11,
            speaker: "thinking",
            text: "Oh wow! He's really giving it to her! He sure does know how to fuck! ",
            button: [
                { chatID: 12, text: "[Take a peek]", callback: "lpeek1" },
                { chatID: -1, text: "[Give them their privacy]", callback: "leave" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "oh wow. Now that's fuckin'! ",
            button: [
                { chatID: -1, text: "[Give them their privacy]", callback: "leave" },
            ]
        },
        {
            chatID: 13,
            speaker: "ralphsdad",
            text: "What are you doing in my bedroom? ",
            button: [
                { chatID: 14, text: "I uh...", callback: "suck0" },
            ]
        },
        {
            chatID: 14,
            speaker: "ralphsdad",
            text: "You came in here hoping I'd follow you, didn't you? You wanted me to " +
                "follow you, didn't you " + sc.n("me") + "? But why would you want me to " +
                "follow you into my bedroom? ",
            button: [
                { chatID: 15, text: "well", callback: "suck1" },
            ]
        },
        {
            chatID: 15,
            speaker: "ralphsdad",
            text: "We both know why. You want to wrap that pretty mouth around my cock. " +
                "We have about 15 minutes before my wife comes walking around. Just enough time " +
                "to get a taste of my dick. That is what you want isn't it? ",
            button: [
                { chatID: -1, text: "...", callback: "suck2" },
            ]
        },
        {
            chatID: 16,
            speaker: "ralphsdad",
            text: "Oh yeah, I still got it. Just lick it a little ",
            button: [
                { chatID: 17, text: "*lick*", callback: "suck3" },
            ]
        },
        {
            chatID: 17,
            speaker: "ralphsdad",
            text: "Oh that feel so good. You have such a tender tongue. Take a small taste. " +
                "I think you'll like it.",
            button: [
                { chatID: 18, text: "*nibble*", callback: "suck4" },
            ]
        },
        {
            chatID: 18,
            speaker: "ralphsdad",
            text: "*whispering* Oh crap. That's the front door. Quick in the closet!",
            button: [
                { chatID: 19, text: "*gasp*", callback: "suck5" },
            ]
        },
        {
            chatID: 19,
            speaker: "ralphsdad",
            text: "*whispering* Just stay here till I tell you the coast is clear ok. " +
                "Don't make a sound!",
            button: [
                { chatID: 20, text: "*nod your head*", callback: "suck6" },
            ]
        },
        {
            chatID: 20,
            speaker: "ralphsmom",
            text: "So what are you doing hanging out in here? Jacking your pee pee again?",
            button: [
                { chatID: 21, text: "...", callback: "suck7" },
            ]
        },
        {
            chatID: 21,
            speaker: "ralphsdad",
            text: "What? no. I was just taking a leak. ",
            button: [
                { chatID: 22, text: "...", callback: "suck8" },
            ]
        },
        {
            chatID: 22,
            speaker: "ralphsmom",
            text: "You were peeing in MY toilet? I hope you wiped off the pee sprinkles from " +
                "the lid. ",
            button: [
                { chatID: 23, text: "...", callback: "suck9" },
            ]
        },
        {
            chatID: 23,
            speaker: "ralphsdad",
            text: "So what are you up to? Taking off your pants so we can have sex?",
            button: [
                { chatID: 24, text: "...", callback: "suck10" },
            ]
        },
        {
            chatID: 24,
            speaker: "ralphsmom",
            text: "Hahaha. Not a chance. Slipped in a mud spot, now I have take a shower " +
                "and change my pants. Kindly get out so I can shower in peace and not " +
                "get molested the entire time. ",
            button: [
                { chatID: 25, text: "...", callback: "suck11" },
            ]
        },
        {
            chatID: 25,
            speaker: "ralphsdad",
            text: "Yes dear ",
            button: [
                { chatID: 26, text: "...", callback: "peek0" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "Looks like the coast's clear. Poor guy, just wants to have sex with " +
                "his wife and is totally denied right in front of me! If I was his wife " +
                "I would have let him stick his dick in me. Oh well. Gotta sneak out.",
            button: [
                { chatID: 27, text: "...", callback: "room801bg" },
            ]
        },
        {
            chatID: 27,
            speaker: "ralphsdad",
            text: "Oh wow! That was so close! She didn't see you did she? Of course she " +
                "didn't or she would be in here screaming at me. You should probably just " +
                "go upstairs and play with " + sc.n("ralph") + ". My heart's beating too hard " +
                "to get a BJ right now. ",
            button: [
                { chatID: -1, text: "Sure. I'll go play with my little  friend. ", callback: "leave" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};