//Room name
var room625 = {};
room625.main = function () {
    if (g.pass.who === "lola" || g.pass.who === "ll") {
        //g.pass = { who: "lola", ferrisWheel: false, bong: false, wheel: false };
        if (!g.pass.ferrisWheel)
            sc.select("ferris", "625_fair/icon_wheel.png", 0);
        if (!g.pass.bong)
            sc.select("bong", "625_fair/icon_bong.png", 1);
        if (!g.pass.ball)
            sc.select("ball", "625_fair/icon_ball.png", 2);

        sc.select("endDate", "625_fair/icon_enddate.png", 3);
    }
    else if (g.gethourdecimal() > 22 || g.gethourdecimal() < 7) {
        if (missy.activecase().caseId === 18) {
            nav.bg("625_fair/closed.webp");
            chat(2, 625);
        }
        else {
            nav.bg("625_fair/closed.webp");
            chat(0, 625);
        }
    }
    else {
        sc.select("ferris", "625_fair/icon_wheel.png", 0);
        sc.select("bong", "625_fair/icon_bong.png", 1);
        sc.select("ball", "625_fair/icon_ball.png", 2);
        nav.buildnav([626, 627, 628, 0]);
        if (missy.activecase().caseId === 18) {
            if (!daily.get("625closemessage")) {
                daily.set("625closemessage");
                chat(1, 625);
            }
        }
    }
};

room625.btnclick = function (name) {
    switch (name) {
        case "ferris":
            g.pass.ferrisWheel = true;
            char.room(626);
            break;
        case "bong":
            g.pass.bong = true;
            char.room(627);
            break;
        case "ball":
            g.pass.ball = true;
            char.room(628);
            break;
        case "endDate":
            char.room(0);
            break;
        case "sneak0":
        case "sneak1":
        case "sneak2":
        case "sneak3":
            nav.kill();
            var snnum = parseInt(name.replace("sneak", ""));
            switch (snnum) {
                case 0: g.internal.s0 = true; break;
                case 1: g.internal.s1 = true; break;
                case 2: g.internal.s2 = true; break;
                case 3: g.internal.s3 = true; break;
            }
            switch (g.internal.counter) {
                case 0: nav.bg("625_fair/t0.webp"); chat(3, 625); break;
                case 1: nav.bg("625_fair/t1.webp"); chat(4, 625); break;
                case 2: nav.bg("625_fair/t2.webp"); chat(5, 625); break;
            }
            g.internal.counter++;
            break;
        default:
            break;
    }
};

room625.chatcatch = function (callback) {
    switch (callback) {
        case "leave":
            char.room(0);
            break;
        case "sneak":
            nav.killall();
            nav.bg("625_fair/sneakbg.webp");
            g.internal = {
                counter: 0,
                s0: false,
                s1: false,
                s2: false,
                s3: false
            };
            room625.chatcatch("sneak0");
            break;
        case "sneak0":
            nav.kill();
            nav.bg("625_fair/sneakbg.webp");
            if (!g.internal.s0) {
                nav.button({
                    "type": "btn",
                    "name": "sneak0",
                    "left": 188,
                    "top": 699,
                    "width": 274,
                    "height": 257,
                    "image": "625_fair/s0.webp"
                }, 625);
            }
            if (!g.internal.s1) {
                nav.button({
                    "type": "btn",
                    "name": "sneak1",
                    "left": 627,
                    "top": 682,
                    "width": 291,
                    "height": 277,
                    "image": "625_fair/s1.webp"
                }, 625);
            }
            if (!g.internal.s2) {
                nav.button({
                    "type": "btn",
                    "name": "sneak2",
                    "left": 1105,
                    "top": 713,
                    "width": 295,
                    "height": 245,
                    "image": "625_fair/s2.webp"
                }, 625);
            }
            if (!g.internal.s3) {
                nav.button({
                    "type": "btn",
                    "name": "sneak3",
                    "left": 1490,
                    "top": 690,
                    "width": 331,
                    "height": 267,
                    "image": "625_fair/s3.webp"
                }, 625);
            }
           
            break;
        case "t20":
            nav.bg("625_fair/t20.webp");
            break;
        case "t21":
            nav.bg("625_fair/t21.webp");
            break;
        case "t22":
            nav.bg("625_fair/t22.webp");
            break;
        case "carnival_end":
            gv.set("carnival", false);
            missy.set("activeCaseComplete", 1);
            sc.startMissionTask("orchid", "slut", 2);
            future.add("carnivalBlow", 2);
            char.addtime(180);
            char.room(0);
            break;
        default:
            break;
    }
};

room625.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Looks like they're closing up for the night",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "I'll have to come back after " + char.friendlyTime(22) + ", when they close. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "It sure is spooky here after dark. Let me go checks some tents to see if I can find " +
                "anything.",
            button: [
                { chatID: -1, text: "...", callback: "sneak" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "No clues about the missing girls here. Better go check another tent. ",
            button: [
                { chatID: -1, text: "...", callback: "sneak0" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "I don't know if I'm more impressed with how much those two get around, or the size of " +
                "that futa clown dick! Wow! I guess Orchid is really going to lose the dick size game here. ",
            button: [
                { chatID: -1, text: "...", callback: "sneak0" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "Oh no. Is that one of the missing girls? Has to be, she's in a cage. I wonder what's going " +
                "on? It really looks like the clown girl is selling her to them. I better call Missy. ",
            button: [
                { chatID: 6, text: "...", callback: "t20" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "Oh crap! I too easily dissmissed the cult in this! It's too dangerous to approach them " +
                "youself and I'm too far away. I'm going to get the police down there. They may not arrest " +
                "the cult, but they will get that girl free. Get out of there and hide out till they get there. Don't approach! " +
                "Got it! ",
            button: [
                { chatID: 7, text: "Yes ma'am. I'll hide out. ", callback: "t21" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Oh. That was quicker than I thought. So glad they came! ",
            button: [
                { chatID: 8, text: "...", callback: "t22" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "Holy shit.... ",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "I don't know what happened, but I'm getting out of here!!!",
            button: [
                { chatID: 10, text: "...", callback: "carnival_end" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "That was crazy!!! I don't know what happened, but I'll let Missy know and see her in the " +
                "morning!",
            button: [
                { chatID: -1, text: "[Go home]", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};