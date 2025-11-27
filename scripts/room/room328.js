//Room name
var room328 = {};
room328.main = function () {
    if (g.map === null) {
        g.map = {
            trust: 20,
            event: "meadow",
            day: 0,
            step: 0,
            eat: 0,
            firsteat: true,
            milked: false
        }
    }
    if (sc.getMission("rachel", "ranch").notStarted) {
        sc.startMission("rachel", "ranch");
        room328.btnclick("meadow");
        nav.button({
            "type": "img",
            "name": "bg",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "999_phone/clear.webp"
        }, 328);
        
        sc.select("icon_stand", "328_farm/icon_stand.webp", -2);
        return;
    }
    else if (g.map.event === "meadow") {
        if (g.gethourdecimal() > 12 && !g.map.milked) {
            char.settime(12, 24);
            g.map.event = "milk";
        }
        else if (g.gethourdecimal() > 17) {
            if (g.gethourdecimal() > 18)
                char.settime(17, 45);
            g.map.event = "eat";
        }
        else {
            room328.btnclick("meadow");
            sc.select("icon_stand", "328_farm/icon_stand.webp", -2);
            sc.select("icon_frolic", "328_farm/icon_frolic.webp", -1);
            sc.select("icon_nap", "328_farm/icon_nap.webp", 0);
            sc.select("icon_moo", "328_farm/icon_moo.webp", 1);
        }
    }

    if (g.map.event === "eat") {
        g.map.event = "eat";
        nav.bg("328_farm/feed.webp");
        sc.select("icon_eat", "328_farm/icon_eat.webp", -2);
        sc.select("icon_eatno", "328_farm/icon_eatno.webp", -2);
    }
     
    if (g.map.event === "milk") {

    }

    inv.hide();
};

room328.btnclick = function (name) {
    switch (name) {
        case "progressbar":
            nav.killbutton("trust");
            if (g.map.trust < 0)
                g.map.trust = 0;
            else if (g.map.trust > 100)
                g.map.trust = 100;

            nav.progressBar({
                "type": "img",
                "name": "trust",
                "left": 400,
                "top": 50,
                "width": 1200,
                "height": 10,
                "color": (g.map.trust < 50 ? "red" : "green"),
                "maxVal": 100,
                "val": g.map.trust,
                "title": "Trust"
            }, 322);
            break;
        case "meadow":
            nav.kill();
            room328.btnclick("progressbar");
            nav.bg("328_farm/meadowbg.webp");
            nav.button({
                "type": "btn",
                "name": "lead",
                "left": 1212,
                "top": 567,
                "width": 402,
                "height": 298,
                "image": "328_farm/lead.webp"
            }, 328);
            nav.button({
                "type": "btn",
                "name": "kinsey",
                "left": 235,
                "top": 567,
                "width": 191,
                "height": 162,
                "image": "328_farm/kinsey.webp"
            }, 328);
            nav.button({
                "type": "btn",
                "name": "envy",
                "left": 682,
                "top": 552,
                "width": 181,
                "height": 142,
                "image": "328_farm/envy.webp"
            }, 328);
            zcl.pucker(600, 800, .25, "back", false);
            break;
        case "icon_stand":
            room328.btnclick("killbuttonsMeadow");
            zcl.embarrass(200, 800, .65, "back", false);
            chat(0, 328);
            break;
        case "icon_nap":
            sc.select("icon_nap2", "322_dog/icon_nap2.webp", -2);
            sc.select("icon_nap4", "322_dog/icon_nap4.webp", -1);
            sc.select("icon_napa", "322_dog/icon_napAll.webp", 0);
            sc.selectCancel("icon_cancel", 1)
            break;
        case "icon_nap2":
            char.addtime(120);
            nav.kill();
            nav.bg("999_phone/black.jpg");
            gv.mod("energy", 10);
            g.roomTimeout = setTimeout(function () {
                char.room(328);
            }, 1200);
            break;
        case "icon_nap4":
            char.addtime(240);
            nav.kill();
            nav.bg("999_phone/black.jpg");
            gv.mod("energy", 20);
            g.roomTimeout = setTimeout(function () {
                char.room(328);
            }, 1200);
            break;
        case "icon_napa":
            char.settime(17, 2);
            gv.mod("energy", 20);
            nav.kill();
            nav.bg("999_phone/black.jpg");
            g.roomTimeout = setTimeout(function () {
                char.room(328);
            }, 1200);
            break;
        case "icon_cancel":
            nav.killbuttonStartsWith("icon_");
            sc.select("icon_stand", "328_farm/icon_stand.webp", -2);
            sc.select("icon_frolic", "328_farm/icon_frolic.webp", -1);
            sc.select("icon_nap", "328_farm/icon_nap.webp", 0);
            sc.select("icon_moo", "328_farm/icon_moo.webp", 1);
            break;
        case "killbuttonsMeadow":
            nav.killbuttonStartsWith("icon_");
            break;
        case "icon_eat":
            g.map.eat += 1;
            nav.bg("328_farm/feed0.webp");
            if (g.map.firsteat)
                chat(3, 328);
            else
                chat(5, 328);
            break;
        case "icon_eatno":

            break;
        default:
            break;
    }
};

room328.chatcatch = function (callback) {
    switch (callback) {
        case "feed1":
        case "feed0":
            nav.bg("328_farm/" + callback + ".webp");
            break;
        case "shock":
            zcl.kill();
            gv.mod("energy", -50);
            g.map.trust -= 5;
            room328.btnclick("progressbar");
            nav.button({
                "type": "img",
                "name": "shock",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "328_farm/elec.webp"
            }, 328);
            break;
        case "shock1":
            char.addtime(10);
            nav.killbutton("shock");
            nav.button({
                "type": "img",
                "name": "shock",
                "left": 714,
                "top": 127,
                "width": 386,
                "height": 953,
                "image": "328_farm/elec_m.webp"
            }, 328);
            break;
        case "finisheating":
            gv.mod("hormone", 20);
            gv.mod("energy", 25);
            if (g.gethourdecimal() > 12) 
                g.map.event = "bed";
            else
                g.map = "meadow";
            break;
        case "reset":
            char.room(328);
            break;
        default:
            break;
    }
};

room328.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Ugh. My knees are so sore.",
            button: [
                { chatID: 1, text: "...", callback: "shock" }
            ]
        },
        {
            chatID: 1,
            speaker: "!rancher",
            text: "HEY!!!  ",
            button: [
                { chatID: 2, text: "EEe e e e eeeee ee eeee", callback: "shock1" }
            ]
        },
        {
            chatID: 2,
            speaker: "!rancher",
            text: "Livestock don't walk on 2 feet! Dumb ass cow. ",
            button: [
                { chatID: -1, text: "*groan*", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "*blech* What the hell is this! It looks like cardboard and smells stale! Do they really " +
                "expect me to eat this crap!",
            button: [
                { chatID: 4, text: "...", callback: "feed1" }
            ]
        },
        {
            chatID: 4,
            speaker: "!rancher1",
            text: "You better eat up. There's all the nutrients a hucow needs for their milking. ",
            button: [
                { chatID: 5, text: "[Eat up]", callback: "feed0" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "YUCK!! It tastes as bad as it smells. I think I'm going to barf. ",
            button: [
                { chatID: -1, text: "[Finish eating]", callback: "finisheating" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};