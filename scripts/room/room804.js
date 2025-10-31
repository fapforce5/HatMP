//Room name
var room804 = {};
room804.main = function () {
    if (sc.getTimeline("ralphsmom").thisRoom) {
        nav.button({
            "type": "btn",
            "name": "mom",
            "left": 1135,
            "top": 461,
            "width": 247,
            "height": 567,
            "image": "804_kitchen/mom.webp"
        }, 804);
        if (!daily.get("804moms_ass")) {
            nav.button({
                "type": "hand",
                "name": "ass",
                "left": 1251,
                "top": 470,
                "width": 123,
                "height": 123,
                "image": "804_kitchen/ass.webp"
            }, 804);
        }
    }
    else {
        nav.button({
            "type": "btn",
            "name": "oven",
            "left": 1059,
            "top": 620,
            "width": 431,
            "height": 254,
            "image": "804_kitchen/oven.webp"
        }, 804);
    }
    nav.buildnav([801, 802, 0]);
};

room804.btnclick = function (name) {
    switch (name) {
        case "mom":
            nav.kill();
            nav.bg("804_kitchen/cookies.webp");
            if (daily.get("ralphsmomcookies")) {
                chat(0, 804);
            }
            else {
                daily.set("ralphsmomcookies");
                chat(1, 804);
            }
            break;
        case "ass":
            nav.killbutton("ass");
            sc.select("assspank", "804_kitchen/icon_spank.webp", 0);
            sc.select("asspull", "804_kitchen/icon_pull.webp", 1);
            sc.selectCancel("asscancel");
            break;
        case "asscancel":
            char.addtime(-2);
            char.room(804);
            break;
        case "assspank":
            nav.kill();
            daily.set("804moms_ass");
            nav.bg("804_kitchen/smack0.webp");
            chat(14, 804);
            break;
        case "asspull":
            nav.kill();
            daily.set("804moms_ass");
            nav.bg("804_kitchen/cookiesass0.webp");
            chat(16, 804);
            break;
        case "oven":
            nav.kill();
            if (cl.appearance() < 2) {
                nav.bg("804_kitchen/me_jeans.webp");
            }
            else if (cl.c.panties === null) {
                nav.bg("804_kitchen/me_nopanties.webp");
            }
            else {
                nav.bg("804_kitchen/me_panties.webp");
            }
            if (sc.getTimeline("ralphsdad").roomID === 801 && !daily.get("804ass")) {
                daily.set("804ass");
                chat(5, 804);
            }
            else {
                chat(4, 804)
            }
            break;
        default:
            break;
    }
};

room804.chatcatch = function (callback) {
    switch (callback) {
        case "me_spank1":
        case "me_panties0":
        case "me_panties1":
        case "cookiesass_0":
        case "muffdive3":
            nav.kill();
            nav.bg("804_kitchen/" + callback + ".webp");
            break;
        case "muffdive0":
        case "muffdive1":
        case "muffdive2":
            nav.kill();
            nav.bg("804_kitchen/" + callback + "_" + gender.pronoun("m") + ".webp");
            break;
        case "cookiesass":
            nav.kill();
            nav.bg("804_kitchen/cookiesass.webp");
            if (sc.getLevel("ralphsmom") < 3) {
                chat(3, 804);
            }
            else {
                chat(17, 804);
            }
            break;
        case "cookie":
            gv.mod("energy", 200);
            break;
        case "bend":
            if (cl.appearance() < 2) {
                nav.bg("804_kitchen/me_jeans0.webp");
                chat(6, 804);
            }
            else {
                if (!sc.getMissionTask("ralphsdad", "main", 2).complete) {
                    sc.completeMissionTask("ralphsdad", "random", 0);
                    sc.modLevel("ralphsdad", 51, 4);
                    nav.button({
                        "type": "img",
                        "name": "smack",
                        "left": 1036,
                        "top": 108,
                        "width": 569,
                        "height": 953,
                        "image": "804_kitchen/me_spank.webp"
                    }, 804);
                    chat(7, 804);
                }
                else {
                    sc.completeMissionTask("ralphsdad", "random", 0);
                    if (cl.c.panties === null) {
                        nav.bg("804_kitchen/me_panties0.webp");
                        chat(11, 804);
                    }
                    else {
                        nav.bg("804_kitchen/me_pantiesdown.webp");
                        chat(9, 804);
                    }
                }
            }
            break;
        case "me_pantiesEnd":
            sc.completeMissionTask("ralphsdad", "random", 1);
            sc.modLevel("ralphsdad", 51, 10);
            levels.mod("xdress", 25);
            char.addtime(30);
            char.room(804);
            break;
        case "smack1":
            nav.kill();
            nav.bg("804_kitchen/" + callback + ".webp");
            sc.modLevel("ralphsmom", 51, 3);
            break;
        case "mom":
            room804.btnclick("mom");
            break;
        case "muffdiveEnd":
            levels.oral(3, "f", "ralphsmom");
            gv.mod("energy", 200);
            char.addtime(25);
            break;
        case "leave":
            char.room(801);
            break;
        default:
            break;
    }
};

room804.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "ralphpsmom",
            text: "Just finishing up these cookies dear. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ralphpsmom",
            text: "I just pulled these out! There's nothing better than warm ooey gooey " +
                "cookies. Do you want to munch on my cookie?",
            button: [
                { chatID: 2, text: "I sure do!", callback: "cookie" },
                { chatID: -1, text: "I'll pass", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "ralphpsmom",
            text: "Now go play. I don't want you to spoil your appitite for dinner. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "ralphpsmom",
            text: "GET OUT!!",
            button: [
                { chatID: -1, text: "oh. yeah ok.", callback: "leave" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Those cookies sure do smell yummy. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Those cookies sure do smell yummy. ",
            button: [
                { chatID: -1, text: "...", callback: "bend" },
            ]
        },
        {
            chatID: 6,
            speaker: "ralphsdad",
            text: "Those sure are some yummy cookies huh? I sure do love eating cookies...",
            button: [
                { chatID: -1, text: "Yeah. Me too. ", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "OUCH!! THAT HURTS!!!",
            button: [
                { chatID: 8, text: "...", callback: "me_spank1" },
            ]
        },
        {
            chatID: 8,
            speaker: "ralphsdad",
            text: "*shrug* You shouldn't have stuck it out if you didn't want to get " +
                "it spanked. Little girls like you should know better than to stick your " +
                "tight little butts in the air. ",
            button: [
                { chatID: -1, text: "..wha?", callback: "reset" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Did my panties just get pulled down? Is my bare ass just hanging " +
                "out? ",
            button: [
                { chatID: 11, text: "[Wiggle your butt a little]", callback: "me_panties0" },
                { chatID: 10, text: "Did you just pull down my panties!!", callback: "me_spank1" },
            ]
        },
        {
            chatID: 10,
            speaker: "ralphsdad",
            text: "*shrug* You shouldn't have stuck it out if you didn't want to get " +
                "exposed. Little girls like you should know better than to stick your " +
                "tight little butts in the air. ",
            button: [
                { chatID: -1, text: "..wha?", callback: "reset" },
            ]
        },
        {
            chatID: 11,
            speaker: "ralphsdad",
            text: "Do you like it when I sqeeze your bare ass like this. I think you " +
                "do, otherwise you wouldn't be displaying it in my kitchen. But I don't " +
                "think sqeezing your ass is enough for a girl like you. You want more " +
                "don't you. ",
            button: [
                { chatID: 12, text: "[You're frozen in fear and excitement]", callback: "me_panties1" },
                { chatID: 10, text: "No! [Pull away]", callback: "me_spank1" },
            ]
        },
        {
            chatID: 12,
            speaker: "ralphsdad",
            text: "You like having every hole in your tight little body filled, don't " +
                "you. Don't worry little girl, I'll fill you with my big daddy dick. ",
            button: [
                { chatID: 13, text: "...ok", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "ralphsdad",
            text: "But not now. My wife's here. We'll just have to wait until I know I " +
                "can have you all to myself. Now go play with your little friend. ",
            button: [
                { chatID: -1, text: "...ok", callback: "me_pantiesEnd" },
            ]
        },
        {
            chatID: 14,
            speaker: "ralphsmom",
            text: "OUCH!!!! ",
            button: [
                { chatID: 15, text: "hehehe", callback: "smack1" },
            ]
        },
        {
            chatID: 15,
            speaker: "ralphsmom",
            text: "Oh you! I though you were my husband. " + gender.pronoun("boy") +
                "s. *sigh* ",
            button: [
                { chatID: -1, text: "Totally got you", callback: "mom" },
            ]
        },
        {
            chatID: 16,
            speaker: "ralphsmom",
            text: "WHAAA!!!",
            button: [
                { chatID: -1, text: "hehehe", callback: "cookiesass" },
            ]
        },
        {
            chatID: 17,
            speaker: "ralphsmom",
            text: "WHAAA!!! ",
            button: [
                { chatID: 18, text: "hehehe", callback: "cookiesass_0" },
            ]
        },
        {
            chatID: 18,
            speaker: "ralphsmom",
            text: "Oh, it's you. Can't control yourself huh? Well neither can I. Let me " +
                "put this down so you can eat my cookie. ",
            button: [
                { chatID: 19, text: "Yum!", callback: "muffdive0" },
            ]
        },
        {
            chatID: 19,
            speaker: "ralphsmom",
            text: "I hope you like hairy muff pie. Fewer calories than my cookies, but " +
                "twice the flavor. ",
            button: [
                { chatID: 20, text: "*moisten your lips*", callback: "muffdive1" },
            ]
        },
        {
            chatID: 20,
            speaker: "ralphsmom",
            text: "Oh fudge! I miss the feeling of a tongue on my clit. You are one amazing " +
                "little " + gender.pronoun("boy") + ". Keep going, I need to cum!",
            button: [
                { chatID: 21, text: "*ignore that hair on your tongue and furiously attack that clit with your tongue technique*", callback: "muffdive2" },
            ]
        },
        {
            chatID: 21,
            speaker: "ralphsmom",
            text: "I'm fading... hhhrrrruuufffff. oh oh buscits I'm going to....yes",
            button: [
                { chatID: 22, text: "*drown yourself in her excessive pussy juice*", callback: "muffdive3" },
            ]
        },
        {
            chatID: 22,
            speaker: "ralphsmom",
            text: "I haven't cum like that in ages! Such a great performance deserves " +
                "a cookie! Also you might want to wash your face in the sink, I can smell " +
                "my honey pot on you",
            button: [
                { chatID: -1, text: "Thanks! You're the best", callback: "muffdiveEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};