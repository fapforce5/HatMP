//Room name
var room328 = {};
room328.main = function () {
    if (sc.getMission("rachel", "ranch").notStarted) {
        g.map = {
            trust: 20,
            event: "meadow",
            day: 1,
            step: 0,
            eat: 0,
            temp: 0,
            firsteat: true,
            milked: false,
        }
        sc.completeMission("kinsey", "milk", sc.getMissionTask("kinsey", "milk", 4).complete);
        sc.show("kinsey");
        sc.show("rachel");
        sc.completeMission("rachel", "horse", sc.getMission("rachel", "horse").startedOrComplete);
        cl.c.buttplug = null;
        cl.c.chastity = null;
        cl.c.accessories = null;
        cl.c.necklace = null;
        cl.c.earring = null;
        cl.c.nosering = null;
        cl.c.bellyring = null;
        cl.c.nipplering = null;
        cl.nude();
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
        room328.btnclick("progressbar");
        g.map.event = "eat";
        nav.bg("328_farm/feed.webp");
        sc.select("icon_eat", "328_farm/icon_eat.webp", -2);
        sc.select("icon_eatno", "328_farm/icon_eatno.webp", -1);
    }
     
    if (g.map.event === "milk") {
        g.map.milked = true;
        g.map.event = "meadow";
        room328.btnclick("meadow");
        nav.button({
            "type": "img",
            "name": "rachel",
            "left": 972,
            "top": 134,
            "width": 554,
            "height": 946,
            "image": "328_farm/rachel_back.webp"
        }, 328);
        chat(6, 328);
    }

    if (g.map.event === "bed") {
        g.map.temp = 0;
        room328.btnclick("icon_bedturn");
    }
    if (g.map.event === "sleep") {
        let sleepenergy = 0;
        sleepenergy += g.map.eat * 20;
        gv.set("energy", sleepenergy);

        g.pass = null;
        g.map.event = "meadow";
        g.map.milked = false;
        g.map.day++;
        g.map.eat = 0;
        nav.bg("328_farm/sleep_wake.webp");
        chat(11, 328);
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
                "title": "Day:" + g.map.day + " Trust"
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
            if (sc.getMission("envy", "hucow").startedOrComplete) {
                nav.button({
                    "type": "btn",
                    "name": "envy",
                    "left": 682,
                    "top": 552,
                    "width": 181,
                    "height": 142,
                    "image": "328_farm/envy.webp"
                }, 328);
            }
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
            nav.kill();
            nav.bg("999_phone/black.jpg");
            gv.mod("energy", 10);
            g.roomTimeout = setTimeout(function () {
                char.addtime(120);
                char.room(328);
            }, 1200);
            break;
        case "icon_nap4":
            
            nav.kill();
            nav.bg("999_phone/black.jpg");
            gv.mod("energy", 20);
            g.roomTimeout = setTimeout(function () {
                char.addtime(240);
                char.room(328);
            }, 1200);
            break;
        case "icon_napa":
            gv.mod("energy", 20);
            nav.kill();
            nav.bg("999_phone/black.jpg");
            g.roomTimeout = setTimeout(function () {
                char.settime(17, 2);
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
            nav.killbutton("icon_eat");
            nav.killbutton("icon_eatno");
            g.map.eat += 1;
            gv.mod("hormone", 20);
            gv.mod("energy", 25);
            nav.bg("328_farm/feed0.webp");
            g.map.trust += 2;
            room328.btnclick("progressbar");
            if (g.map.firsteat) {
                g.map.firsteat = false;
                chat(3, 328);
            }
            else
                chat(5, 328);
            break;
        case "icon_eatno":
            nav.killbutton("icon_eat");
            nav.killbutton("icon_eatno");
            g.map.trust -= 5;
            nav.bg("328_farm/feed0.webp");
            chat(10, 328);
            break;
        case "icon_bedturn":
            nav.kill();
            if (g.map.temp === 0) {
                g.map.temp = 1;
                nav.bg("328_farm/sleep0.webp");
                sc.select("icon_bedturn", "328_farm/icon_turn.webp", -2);

            }
            else {
                g.map.temp = 0;
                nav.bg("328_farm/sleep1.webp");
                sc.select("icon_bedturn", "328_farm/icon_turn.webp", -2);
                sc.select("icon_sleep", "328_farm/icon_sleep.webp", -1);
            }
            break;
        case "icon_sleep":
            g.pass = 328;
            g.map.event = "sleep";
            char.room(28);
            break;
        case "kinsey":
            nav.killbuttonStartsWith("icon");
            nav.killbutton("kinsey");
            daily.set("kinsey");
            if (sc.getMission("kinsey", "ranch").notStarted) {
                char.addtime(30);
                sc.startMission("kinsey", "ranch");
                sc.completeMissionTask("kinsey", "ranch", 0);
                if (sc.getMission("kinsey", "milk").success) {
                    nav.button({
                        "type": "img",
                        "name": "kinsey",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "328_farm/kinseyc_happy.webp"
                    }, 328);
                    chat(12, 328);
                }
                else {
                    nav.button({
                        "type": "btn",
                        "name": "envy",
                        "left": 682,
                        "top": 552,
                        "width": 181,
                        "height": 142,
                        "image": "328_farm/envy.webp"
                    }, 328);
                    chat(16, 328);
                }
            }

            break;
        default:
            break;
    }
};

room328.chatcatch = function (callback) {
    switch (callback) {
        case "feed1":
        case "feed0":
        case "milk5":
        case "milk6":
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
            if (g.gethourdecimal() > 12) 
                g.map.event = "bed";
            else
                g.map = "meadow";
            char.room(328);
            break;
        case "milk0":
            if (gv.get("milk") === -1) {
                nav.kill();
                nav.bg("327_milking/milk3.jpg");
                chat(7, 328);
            }
            else {
                char.room(327);
            }
            break;
        case "kinseymad":
            nav.modbutton("kinsey", "328_farm/kinseyc_mad.webp", null, null);
            break;
        case "kinseynormal":
            nav.modbutton("kinsey", "328_farm/kinseyc_normal.webp", null, null);
            break;
        case "reset":
            char.room(328);
            break;
        default:
            break;
    }
};

room328.chat = function (chatID) {
    if (chatID === 1000) {
        gv.set("milk", .1);
        char.addtime(30);
        nav.bg("327_milking/milk4.jpg");
        if (cl.c.chest < 3) {
            return {
                chatID: 1000,
                speaker: "me",
                text: "Take a look at these breasts. These here are milking breasts. Grade A milk! The best in " +
                    "the country. Now look at your tiny pathetic udders. There's no way those things will " +
                    "create enough milk worth drinking. Don't worry our food pellets are stuffed with enough " +
                    "hormones to turn a bull into a heifer. You just keep eating your feed and I'll turn " +
                    "you into a first class hucow. Now bend over the table, show me your ass. ",
                button: [
                    { chatID: 8, text: "*whimper*", callback: "milk5" }
                ]
            }
        }
        return {
            chatID: 1000,
            speaker: "me",
            text: "Take a look at these breasts. These here are milking breasts. Grade A milk! The best in " +
                "the country. Now you have some great udders. Really hucow material. That's why I kept you. " +
                "But you need to start producing milk for me. Now bend over the table, show me your ass. ",
            button: [
                { chatID: 8, text: "*whimper*", callback: "milk5" }
            ]
        }
    }
    else {
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
            {
                chatID: 6,
                speaker: "rachel",
                text: "Ok cows! Time for your milking!!!",
                button: [
                    { chatID: -1, text: "[Get milked]", callback: "milk0" }
                ]
            },
            {
                chatID: 7,
                speaker: "rachel",
                text: "Welcome back to my examination room. Don't try anything or I'll lock you in the pig pen " +
                    "and all you'll have to eat is slop and pig cum. Moo for me if you understand that being " +
                    "a hucow is much better than being a piggy. ",
                button: [
                    { chatID: 1000, text: "mooo", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "rachel",
                text: "Now, normally I give these in pill form, but I don't trust ya to swallow so you get " +
                    "the needle in the rump, just like my cows. Hahahaha. This will really get that milk flowing! ",
                button: [
                    { chatID: 9, text: "OUCHHHHH!!! Damn!!!", callback: "milk6" }
                ]
            },
            {
                chatID: 9,
                speaker: "rachel",
                text: "Now I'm going to put you back out to the pasture, but tomorrow get ready for a milkin' " +
                    "darlin'. Now get. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "Gross. I'm not eating that garbage! ",
                button: [
                    { chatID: -1, text: "...", callback: "finisheating" }
                ]
            },
            {
                chatID: 11,
                speaker: "!rancher1",
                text: "Get up hucows need to be in the field now. ",
                button: [
                    { chatID: -1, text: "ugh", callback: "reset" }
                ]
            },
            {
                chatID: 12,
                speaker: "kinsey",
                text: "Oh my god! I thought that was you!!! What the hell are you doing here? ",
                button: [
                    { chatID: 13, text: "[Tell her what happened]", callback: "kinseymad" }
                ]
            },
            {
                chatID: 13,
                speaker: "kinsey",
                text: "Oh shit! You came here to try and save us, and now you're with us! Those fuckers! " +
                    "Shit we got to get a way out. The cops stopped by once and they put us all in the barn. " +
                    "I tried screaming for help, but they just tased and gagged me. I heard them say it was " +
                    "just a screaming goat. These cops are so worthless. ",
                button: [
                    { chatID: 14, text: "They really are", callback: "kinseynormal" }
                ]
            },
            {
                chatID: 14,
                speaker: "kinsey",
                text: "What ever you do don't make them mad. Just do what they say, no matter how terrible. " +
                    "I came in as a virgin and my pussy hole doesn't close up anymore. It's just permanently " +
                    "gaped open with all the terrible things they've stuffed in me. I tried to resist, but " +
                    "it's just much easier to to moo, eat, and get milked. Since you hooked me up, " +
                    "I'll try to repay the favor. I just don't know how. ",
                button: [
                    { chatID: 15, text: "Don't worry about it. ", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "kinsey",
                text: "It was huge. I just with it was cold. That energy drink was so warm when I pushed it " +
                    "out of my ass. But oh so good! Best day I had since I've been here. You're the best. ",
                button: [
                    { chatID: -1, text: "Aww you are. ", callback: "reset" }
                ]
            },
            {
                chatID: 16,
                speaker: "kinsey",
                text: "Hey new " + gender.pronoun("girl") + ". Got caught didn't you?",
                button: [
                    { chatID: 17, text: "Totally caught. [Tell her what happened]", callback: "kinseymad" }
                ]
            },
            {
                chatID: 17,
                speaker: "kinsey",
                text: "Oh shit! You came here to try and save us, and now you're with us! Those fuckers! " +
                    "Shit we got to get a way out. The cops stopped by once and they put us all in the barn. " +
                    "I tried screaming for help, but they just tased and gagged me. I heard them say it was " +
                    "just a screaming goat. These cops are so worthless. ",
                button: [
                    { chatID: 18 , text: "They really are", callback: "kinseynormal" }
                ]
            },
            {
                chatID: 18,
                speaker: "kinsey",
                text: "What ever you do don't make them mad. Just do what they say, no matter how terrible. " +
                    "I came in as a virgin and my pussy hole doesn't close up anymore. It's just permanently " +
                    "gaped open with all the terrible things they've stuffed in me. I tried to resist, but " +
                    "it's just much easier to to moo, eat, and get milked. Just keep you head down and " +
                    "and breasts full. ",
                button: [
                    { chatID: -1, text: "I will", callback: "reset" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};