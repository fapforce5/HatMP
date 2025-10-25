//Room name
var room802 = {};
room802.main = function () {
    if (g.rand(0, 5) === 0 && !daily.get("ralphRandEvent")) {
        daily.set("ralphRandEvent");
        switch (g.rand(0, 2)) {
            case 0: nav.bg("802_ralphbedroom/rand0.webp"); chat(6, 802); break;
            case 1: nav.bg("802_ralphbedroom/rand1.webp"); chat(8, 802); break;
        }
        return;
    }
    var btnList = [
        {
            "type": "img",
            "name": "ralph",
            "left": 979,
            "top": 86,
            "width": 401,
            "height": 994,
            "image": "802_ralphbedroom/ralph0.webp"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 802);
    });
    nav.buildnav([801, 0]);
    sc.select("game", "802_ralphbedroom/icon_game.webp", 0);
    sc.select("chat", "752_whore/whore_chat.png", 1);
};

room802.btnclick = function (name) {
    switch (name) {
        case "game":
            room802.btnclick("killbtns");
            if (g.gethourdecimal() > 19) {
                chat(3, 802);
            }
            else if (daily.get("ralphSettlers")) {
                chat(4, 802);
            }
            else {
                chat(0, 802);
            }
            break;
        case "chat":
            room802.btnclick("killbtns");
            if (daily.get("ralphChat")) {
                chat(5, 802);
            }
            else {
                chat(900, 802);
            }
            break;
        case "killbtns":
            nav.killbutton("chat");
            nav.killbutton("game");
            break;
        default:
            break;
    }
};

room802.chatcatch = function (callback) {
    switch (callback) {
        case "rand1_0":
            nav.bg("802_ralphbedroom/" + callback + ".webp");
            break;
        case "settlers":
            nav.killall();
            nav.bg("802_ralphbedroom/settlers.webp");
            char.addtime(180);
            daily.set("ralphSettlers");
            if (g.rand(0, 2) === 0) {
                levels.mod("charisma", 10);
                levels.mod("pi", 10);
                chat(1, 802);
            }
            else {
                levels.mod("charisma", 30);
                levels.mod("pi", 30);
                chat(2, 802);
            }
            break;
        case "reset":
            char.room(802);
            break;
        case "good":
            sc.modLevel("ralph", 34, 7);
            char.room(802);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room802.chat = function (chatID) {
    daily.set("ralphChat");
    if (chatID === 900) {
        let rchat = [
            { t: "Did you ever think bug bunny was sexy when he dressed up like a girl bunny?", r1: "Fuck yeah she's hot!", r2: "Hahaha. No" }, 
            { t: "Oh man, I just ordered the new Kekko Kamen doll doing a muff attack. So excited for it to come! ", r1: "Fuck yeah!", r2: "You need to grow up" },
            { t: "Who do you think would win an arm wrestling contest, Hulk or Super Man?", r1: "Super Man", r2: "Hulk" },
            { t: "I would do anything to be enslaved by Snu Snus!  ", r1: "We all do", r2: "They're way too big" },
            { t: "My dad got so mad at me last night when he caught me playing with my resin figures. I got the worst spanking of my life! ", r1: "That sucks. So glad I don't have a dad that spanks me", r2: "Hahah what? " },
            { t: "Do you really think Bruce Wayne would be able to date the president's wife if he really wanted to?", r1: "Bruce Wayne can do anything", r2: "No way! He'd never get past the secret service!" },
            { t: "Do girls fart cum after they have anal sex, or does it just come out like a poo?", r1: "I like to think they just randomly do cum farts", r2: "I'm sure they just push it out into the toilet" },
            { t: "Is it weird if your dad sleeps in the same bed as you? ", r1: "Not at all", r2: "Yeah. He should sleep with the mom" },
            { t: "My mom is so crazy! I tried to watch the big TV and she kicked me out to watch musicals! Who even watches musicals anymore?", r1: "I do. I love a good musical", r2: "Psh. Musicals are for losers." },
            { t: "If we were able to create a girl, like Frankenstein, but sexy, do you think she would have sex with us?", r1: "With us! Totally!", r2: "She would just tear us apart!" },
            { t: "I love chocolate soooo much! ", r1: "mmmm Chocolate", r2: "Hahah. Only girls eat chocolate" },
            { t: "Do you think if Nana were here she would have sex with us? I think she might. ", r1: "She's so dreamy", r2: "She would never have sex with guys like us" },
            { t: "Meiko Shiraki is so much my waifu!!!", r1: "I would so be her prisoner", r2: "She's a little mean don't you think" }
        ];
        let tc = rchat[g.rand(0, rchat.length)];
        return {
            chatID: 900,
            speaker: "ralph",
            text: tc.t,
            button: [
                { chatID: -1, text: tc.r1, callback: "good" },
                { chatID: -1, text: tc.r2, callback: "reset" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "ralph",
                text: "You know I'm going to wipe the floor with you!",
                button: [
                    { chatID: -1, text: "No way! ", callback: "settlers" },
                ]
            },
            {
                chatID: 1,
                speaker: "ralph",
                text: "Yes! You are such my bitch! Maybe next time you'll learn how to trade!",
                button: [
                    { chatID: -1, text: "*groan* Yeah, I'm your bitch", callback: "reset" },
                ]
            },
            {
                chatID: 2,
                speaker: "me",
                text: "Hahaha! Did the great game player lose! Maybe next time you'll learn how to " +
                    "properly use the robber! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 3,
                speaker: "ralph",
                text: "It's starting to get pretty late. My dad will spank me if I'm up all night " +
                    "playing games. ",
                button: [
                    { chatID: -1, text: "oh, ok", callback: "reset" },
                ]
            },
            {
                chatID: 4,
                speaker: "ralph",
                text: "We already played silly!",
                button: [
                    { chatID: -1, text: "oh, ok", callback: "reset" },
                ]
            },
            {
                chatID: 5,
                speaker: "ralph",
                text: "I wish my resin figures would come to life. ",
                button: [
                    { chatID: -1, text: "oh, ok", callback: "reset" },
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "Why are you naked! Are you jackin' off!",
                button: [
                    { chatID: 7, text: "...", callback: "" },
                ]
            },
            {
                chatID: 7,
                speaker: "ralph",
                text: "No! No way! None of your business! Get out!! GET OUT!!",
                button: [
                    { chatID: -1, text: "ok, ok. I'm going", callback: "leave" },
                ]
            },
            {
                chatID: 8,
                speaker: "me",
                text: sc.n("ralph") + "!",
                button: [
                    { chatID: 9, text: "...", callback: "rand1_0" },
                ]
            },
            {
                chatID: 9,
                speaker: "ralph",
                text: "Get out! get out get out get out get out get out get out!!!",
                button: [
                    { chatID: -1, text: "ok. I'm going", callback: "leave" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};