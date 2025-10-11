//Room name
var room322 = {};
room322.main = function () {
    if (g.pass === "endSleepyTime") {
        let janicedetails = sc.getLevelDetails("janice");
        g.pass = null;
        gv.set("energy", 20);
        if (sc.getMissionTask("janice", "dog-x", 4).notStarted) {
            sc.completeMissionTask("janice", "dog-x", 4);
        }
        if (gv.get("bladder") > 0) {
            nav.bg("322_dog/pp0.webp");
            chat(84, 322);
        }
        else if (janicedetails.c > 95 || janicedetails.l > 9) {
            nav.bg("322_dog/wake0.webp");
            gv.set("janiceAnnoyance", 0);
            chat(94, 322);
        }
        else {
            nav.bg("322_dog/wake0.webp");
            gv.set("janiceAnnoyance", 0);
            chat(66, 322);
        }
    }
    else {
        room322.btnclick("livingroom");
    }
};

room322.btnclick = function (name) {
    switch (name) {
        case "progressbar":
            nav.killbutton("trust");
            nav.killbutton("annoyance");
            nav.progressBar({
                "type": "img",
                "name": "trust",
                "left": 400,
                "top": 50,
                "width": 1200,
                "height": 10,
                "color": "pink",
                "maxVal": 100,
                "val": sc.getLevelDetails("janice").c,
                "title": sc.n("janice") + "'s trust"
            }, 322);

            nav.progressBar({
                "type": "img",
                "name": "annoyance",
                "left": 400,
                "top": 100,
                "width": 1200,
                "height": 10,
                "color": "red",
                "maxVal": 100,
                "val": gv.get("janiceAnnoyance"),
                "title": sc.n("janice") + "'s Annoyance"
            }, 322);
            break;
        case "livingroom":
            nav.kill();
            room322.btnclick("progressbar");
            if (g.gethourdecimal() > 19) {
                var janiceRand = gv.get("janiceRand");
                if (janiceRand === 0) {
                    janiceRand = g.rand(0, 3);
                    gv.set("janiceRand", janiceRand);
                }
                nav.bg("322_dog/e" + (janiceRand % 3) + ".webp");
                switch (janiceRand % 3) {
                    case 0: chat(61, 322); break;
                    case 1: chat(62, 322); break;
                    case 2: chat(63, 322); break;
                }
                gv.mod("janiceRand", 1);
            }
            else if (g.gethourdecimal() > g.rand(12) && sc.getMissionTask("janice", "dog-x", 4).complete && !daily.get("janiceAfternoonEvent")) {
                //she leaves her phone out and you can select who to text to put
                //in motion these events
                daily.set("janiceAfternoonEvent");
                var janicedetailsx = sc.getLevelDetails("janice");
                if (gv.get("janiceAnnoyance") > 70) {
                    room322.btnclick("livingroom");
                }
                else if (janicedetailsx.c > 95 || janicedetailsx.l > 9) {
                    nav.button({
                        "type": "img",
                        "name": "waiter0",
                        "left": 172,
                        "top": 264,
                        "width": 863,
                        "height": 763,
                        "image": "322_dog/waiter0.webp"
                    }, 322);
                    chat(76, 322);
                }
                else {
                    switch (gv.get("janiceAfternoon") % 3) {
                        case 0:
                            daily.set("janice322Webcam");
                            nav.bg("315_girlfriend/bitch_2.jpg");
                            chat(24, 322);
                            break;
                        case 1:
                            room322.btnclick("waiter0")
                            break;
                        case 2:
                            room322.btnclick("pl0")
                            break;
                    }
                    gv.mod("janiceAfternoon", 1);
                }
            }
            else {
                nav.bg("322_dog/livingroom.webp");
                sc.select("dogbed", "322_dog/icon_dogbed.webp", 0);
                sc.select("backyard", "322_dog/icon_backyard.webp", 1);
                sc.select("kitchen", "322_dog/icon_kitchen.webp", 2);
                sc.select("feet", "322_dog/icon_feet.webp", 3);
                sc.select("nuzzle", "322_dog/icon_nuzzle.webp", 4);
            }
            break;
        case "waiter0":
            nav.kill();
            nav.bg("322_dog/livingroom.webp");
            nav.button({
                "type": "img",
                "name": "waiter0",
                "left": 172,
                "top": 264,
                "width": 863,
                "height": 763,
                "image": "322_dog/waiter0.webp"
            }, 322);
            chat(25, 322);
            break;
        case "pl0":
            nav.kill();
            nav.bg("322_dog/livingroom.webp");
            nav.button({
                "type": "img",
                "name": "waiter0",
                "left": 172,
                "top": 264,
                "width": 863,
                "height": 763,
                "image": "322_dog/waiter0.webp"
            }, 322);
            chat(41, 322);
            break;
        case "dogbed":
            nav.kill();
            room322.btnclick("progressbar");
            var dogbedchast = cl.c.chastity === null ? "_n" : "_c";
            nav.bg("322_dog/dogbed" + dogbedchast + ".webp");
            sc.select("nap2", "322_dog/icon_nap2.webp", 0);
            sc.select("nap4", "322_dog/icon_nap4.webp", 1);
            sc.select("napAll", "322_dog/icon_napAll.webp", 2);
            sc.select("livingroom", "1001_rand/icon_cancel.png", 3);
            break;
        case "nap2":
            nav.kill();
            if (!daily.get("doggybeds")) {
                daily.set("doggybeds");
                sc.modLevel("dog", 50, 10);
            }
            room322.btnclick("progressbar");
            char.addtime(120);
            g.roomTimeout = setTimeout(function () {
                room322.btnclick("livingroom");
            }, 2000);
            break;
        case "nap4":
            nav.kill();
            if (!daily.get("doggybeds")) {
                daily.set("doggybeds");
                sc.modLevel("dog", 50, 10);
            }
            room322.btnclick("progressbar");
            char.addtime(240);
            g.roomTimeout = setTimeout(function () {
                room322.btnclick("livingroom");
            }, 2000);
            break;
        case "napAll":
            nav.kill();
            if (!daily.get("doggybeds")) {
                daily.set("doggybeds");
                sc.modLevel("dog", 50, 10);
            }
            room322.btnclick("progressbar");
            char.settime(20, 0);
            g.roomTimeout = setTimeout(function () {
                room322.btnclick("livingroom");
            }, 2000);
            break;
        case "backyard":
            nav.kill();
            room322.btnclick("progressbar");
            nav.bg("319_backyard/bg.jpg");
            sc.select("yardrun", "322_dog/icon_yardRun.webp", 0);
            sc.select("yardlay", "322_dog/icon_yardLay.webp", 1);
            sc.select("yardpee", "322_dog/icon_yardPee.webp", 2);
            sc.select("livingroom", "322_dog/icon_living.webp", 3);
            break;
        case "yardpee":
            nav.kill();
            room322.btnclick("progressbar");
            if (gv.get("bladder") > 0) {
                gv.mod("bladder", -1)
                let ypchastity = cl.c.chastity === null ? "_n" : "_c";
                if (g.rand(0, 2) === 0) {
                    nav.bg("322_dog/yardpee" + ypchastity + ".webp");
                    sc.select("backyard", "322_dog/icon_backyard.webp", 1);
                }
                else {
                    nav.bg("322_dog/yardpeelaugh" + ypchastity + ".webp");
                    chat(8, 322);
                }
            }
            else {
                chat(7, 322);
            }
            break;
        case "yardlay":
            nav.kill();
            room322.btnclick("progressbar");
            gv.mod("energy", 30);
            nav.bg("322_dog/yard_layinsun.webp");
            char.addtime(180);
            g.roomTimeout = setTimeout(function () {
                room322.btnclick("backyard");
            }, 2000);
            break;
        case "yardrun":
            nav.kill();
            room322.btnclick("progressbar");
            if (sc.getLevel("dog") > 6 && g.rand(0, 2) === 0 && !daily.get("dogYardFuck")) {
                daily.set("dogYardFuck");
                nav.bg("322_dog/yardPlay0.webp");
                g.roomTimeout = setTimeout(function () {
                    nav.bg("322_dog/yardPlay2.webp");
                    chat(10, 322);
                }, 2000);
            }
            else if (gv.get("energy") > 19) {
                gv.mod("energy", -20);
                levels.mod("fitness", 34);
                if (g.rand(0, 2) === 0) 
                    nav.bg("322_dog/yardPlay1.webp");
                else
                    nav.bg("322_dog/yardPlay0.webp");
                g.roomTimeout = setTimeout(function () {
                    room322.btnclick("backyard");
                }, 2000);
            }
            else {
                chat(9, 322);
            }
            break;
        case "kitchen":
            char.addtime(30);
            nav.kill();
            room322.btnclick("progressbar");
            nav.bg("317_janiceKitchen/kitchen.jpg");
            sc.select("livingroom", "322_dog/icon_living.webp", 0);
            sc.select("backyard", "322_dog/icon_backyard.webp", 1);
            nav.button({
                "type": "btn",
                "name": "feed",
                "left": 679,
                "top": 609,
                "width": 451,
                "height": 295,
                "image": "317_janiceKitchen/feed.png"
            }, 322);
            break;
        case "feet":
            nav.kill();
            room322.btnclick("progressbar");
            sc.select("couch", "322_dog/icon_couch.webp", 0);
            sc.select("nap2x", "322_dog/icon_nap2.webp", 1);
            sc.select("nap4x", "322_dog/icon_nap4.webp", 2);
            sc.select("napAllx", "322_dog/icon_napAll.webp", 3);
            sc.select("livingroom", "1001_rand/icon_cancel.png", 4);
            //sleepfeet
            break;
        case "couch":
            nav.kill();
            room322.btnclick("progressbar");
            gv.mod("energy", -20);
            sc.modLevel("janice", -5);
            room322.btnclick("progressbar");
            char.addtime(15);
            nav.bg("322_dog/couch.webp");
            chat(6, 322);
            break;
        case "nap2x":
            nav.kill();
            char.addtime(120);
            nav.bg("322_dog/sleepfeet.webp");
            if (!daily.get("naplay")) {
                daily.set("naplay");
                sc.modLevel("janice", 5, 10);
            }
            room322.btnclick("progressbar");
            g.roomTimeout = setTimeout(function () {
                room322.btnclick("livingroom");
            }, 2000);
            break;
        case "nap4x":
            nav.kill();
            char.addtime(240);
            nav.bg("322_dog/sleepfeet.webp");
            if (!daily.get("naplay")) {
                daily.set("naplay");
                sc.modLevel("janice", 5, 10);
            }
            room322.btnclick("progressbar");
            g.roomTimeout = setTimeout(function () {
                room322.btnclick("livingroom");
            }, 2000);
            break;
        case "napAllx":
            nav.kill();
            char.settime(19, 10);
            nav.bg("322_dog/sleepfeet.webp");
            if (!daily.get("naplay")) {
                daily.set("naplay");
                sc.modLevel("janice", 5, 10);
            }
            room322.btnclick("progressbar");
            g.roomTimeout = setTimeout(function () {
                room322.btnclick("livingroom");
            }, 2000);
            break;
        case "nuzzle":
            nav.kill();
            room322.btnclick("progressbar");
            if (gv.get("janiceAnnoyance") > 60) {
                gv.mod("janiceAnnoyance", 10);
                room322.btnclick("progressbar");
                nav.bg("322_dog/shoo.webp");
                char.addtime(30);
                chat(67, 322);
            }
            else if (!daily.get("322walk")) {
                daily.set("322walk");
                chat(12, 322);
            }
            else {
                switch (2) {//g.rand(0, 3)) {
                    case 0:
                        gv.mod("janiceAnnoyance", 7);
                        room322.btnclick("progressbar");
                        nav.bg("322_dog/shoo.webp");
                        char.addtime(30);
                        chat(67, 322);
                        break;
                    case 1:
                        room322.btnclick("progressbar");
                        nav.bg("322_dog/shoo.webp");
                        char.addtime(30);
                        chat(68, 322);
                        break;
                    case 2:
                        room322.btnclick("progressbar");
                        nav.bg("322_dog/t0.webp");
                        char.addtime(30);
                        chat(76, 322);
                        break;
                }
            }
            break;
        case "feed":
            if (daily.get("room322Eat")) {
                chat(0, 322);
            }
            else if (daily.get("room322EatBad")) {
                chat(3, 322);
            }
            else {
                nav.kill();
                room322.btnclick("progressbar");
                nav.bg("322_dog/kitchen.webp");
                chat(1, 322);
            }
            break;
        case "feed2":
            daily.set("room322Eat");
            nav.killbutton("feed2");
            sc.modLevel("janice", 3, 10);
            room322.btnclick("progressbar");
            gv.mod("energy", 75);
            gv.mod("bladder", .8);
            chat(4, 322);
            break;
        case "yardfuck":
            if (g.internal > 7) {
                room322.btnclick("backyard");
                return;
            }
            else
                nav.bg("322_dog/yardfuck" + g.internal + ".webp");

            if (g.internal === 5) {
                levels.anal(5, false, "m", true, "dog", "dog");
                sc.modLevel("dog", 50, 10);
            }
            g.internal++;
            break;
        case "waiterSleep":
            nav.kill();
            nav.bg("322_dog/dogbed" + (cl.c.chastity === null ? "_n" : "_c") + ".webp");
            char.addtime(120);
            chat(35, 322);
            break;
        case "waiterWatch":
            nav.kill();
            nav.bg("322_dog/waiter7.webp");
            chat(36, 322);
            break;
        case "waiter9cum":
            nav.kill();
            nav.bg("322_dog/waiter10.webp");
            chat(39, 322);
            break;
        case "ff":
            nav.bg("322_dog/f" + g.internal + ".webp");
            if (g.internal === 10) {
                nav.kill();
                sc.modLevel("janice", 100, 10);
                levels.swallowCum("m", "bbc");
                room322.chatcatch("bed");
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room322.chatcatch = function (callback) {
    switch (callback) {
        case "backyard":
            room322.btnclick(callback);
            break;
        case "livingroom":
            char.room(322);
            break;
        case "kitchengood":
        case "walk2":
        case "park1_1":
        case "park1_2":
        case "waiter2":
        case "waiter3":
        case "waiter6":
        case "waiter8":
        case "waiter11":
        case "pl2":
        case "pl3":
        case "pl4":
        case "pl5":
        case "pl6":
        case "pl7":
        case "pl8":
        case "pl9":
        case "pl10":
        case "pl11":
        case "pl12":
        case "pl13":
        case "e11":
        case "ds0":
        case "ds1":
        case "ds2":
        case "ds3":
        case "ds4":
        case "t1":
        case "t2":
        case "t3":
        case "t4":
        case "f1":
            nav.bg("322_dog/" + callback + ".webp");
            break;
        case "pl1":
        case "f0":
            nav.kill();
            room322.btnclick("progressbar");
            nav.bg("322_dog/" + callback + ".webp");
            break;
        case "waiter4":
        case "waiter5":
            var wccc = cl.c.chastity === null ? "n" : "c";
            nav.bg("322_dog/" + callback + wccc + ".webp");
            break;
        case "waiter9":
            nav.bg("322_dog/waiter9.webp");
            nav.button({
                "type": "tongue",
                "name": "waiter9cum",
                "left": 954,
                "top": 871,
                "width": 50,
                "height": 193,
                "image": "322_dog/waiter9cum.webp"
            }, 322);
            break;
        case "doggywait":
            nav.bg("322_dog/wait.webp");
            sc.select("waiterWatch", "322_dog/icon_bedroom.webp", 0);
            sc.select("waiterSleep", "322_dog/icon_dogbed.webp", 1);
            break;
        case "park1_3":
        case "park1_4":
            nav.bg("322_dog/" + callback + ".webp");
            levels.anal(4, false, "m", true, "!dog", "dog");
            break;
        case "yardPlay3":
            nav.bg("322_dog/" + callback + ".webp");
            g.internal = 0;
            nav.next("yardfuck");
            break;
        case "kitchenbad":
            nav.bg("322_dog/" + callback + ".webp");
            sc.modLevel("janice", -15, 10);
            daily.set("room322EatBad")
            break;
        case "kitchen":
            room322.btnclick(callback);
            break;
        case "kitchenEat":
            nav.bg("322_dog/kitchen_bowl.webp");
            nav.button({
                "type": "tongue",
                "name": "feed2",
                "left": 379,
                "top": 652,
                "width": 1107,
                "height": 318,
                "image": "322_dog/kitchen_bowlicon.webp"
            }, 322);
            break;
        case "walk":
            gv.mod("janiceWalk", 1);
            gv.mod("energy", -20);
            levels.mod("fitness", 20);
            char.addtime(90);
            switch (gv.get("janiceWalk") % 3) {
                case 0:
                    nav.bg("322_dog/walk0.webp");
                    sc.modLevel("janice", 3, 10);
                    room322.btnclick("progressbar");
                    sc.modLevel("janice", 4, 10);
                    chat(13, 322);
                    break;
                case 1:
                    if (sc.getMissionTask("eva", "random", 1).notStarted) {
                        sc.completeMissionTask("eva", "random", 1);
                        nav.bg("322_dog/walk1.webp");
                        sc.modSecret("eva", 100);
                        sc.modLevel("janice", 4, 10);
                        chat(14, 322);
                    }
                    else {
                        nav.bg("322_dog/walk2.webp");
                        sc.modLevel("janice", 4, 10);
                        chat(18, 322);
                    }
                    break;
                case 2:
                    nav.kill();
                    sc.modLevel("janice", 5, 10);
                    room322.btnclick("progressbar");
                    if (sc.getMissionTask("janice", "random", 0).notStarted) {
                        sc.completeMissionTask("janice", "random", 0);
                        nav.bg("322_dog/park1_0.webp");
                        chat(19, 322);
                    }
                    else {
                        nav.bg("322_dog/park1_0.webp");
                        chat(89, 322);
                    }
                    break;
            }
            break;
        case "room321":
            g.pass = "pass322";
            char.room(321);
            break;
        case "waiter1":
            nav.kill();
            nav.bg("316_livingroom/bg.jpg");
            break;
        case "evening":
            char.settime(19, 30);
            char.room(322);
            break;
        case "bed":
            nav.kill();
            room322.btnclick("progressbar");
            nav.bg("322_dog/e10.webp");
            if (sc.getLevelDetails("janice").c > 65) {
                if (gv.get("janiceAnnoyance") > 70) {
                    chat(87, 322);
                }
                else {
                    chat(88, 322);
                }
            }
            chat(64, 322);
            break;
        case "sleep":
            if (sc.getLevelDetails("janice").c > 60) {
                sc.modLevel("janice", 2);
                g.pass = 321;
            }
            else
                g.pass = 322;
            char.room(28);
            break;
        case "ds5":
            nav.bg("322_dog/ds5.webp");
            sc.modLevel("dog", 50, 10);
            levels.oral(4, "m", "dog", true, "dog");
            sc.modLevel("janice", 7, 10);
            char.addtime(90);
            room322.btnclick("progressbar");
            break;
        case "ds5a":
            nav.bg("322_dog/ds5a.webp");
            sc.modLevel("dog", 50, 10);
            levels.oral(4, "m", "dog", false, "dog");
            sc.modLevel("janice", 2, 10);
            gv.mod("janiceAnnoyance", 30);
            char.addtime(90);
            room322.btnclick("progressbar");
            break;
        case "backyardannoy":
            gv.mod("janiceAnnoyance", 15);
            room322.btnclick("progressbar");
            room322.btnclick("backyard");
            break;
        case "livingroomannoy":
            gv.mod("janiceAnnoyance", 15);
            room322.btnclick("livingroom");
            break;
        case "tEnd":
            sc.modLevel("janice", 5, 10);
            gv.mod("energy", 25);
            room322.btnclick("livingroom");
            break;
        case "tEndbad":
            gv.mod("janiceAnnoyance", 100);
            room322.btnclick("livingroom");
            break;
        case "ppend":
            levels.mod("piss", 20);
            gv.mod("janiceAnnoyance", 65);
            room322.btnclick("livingroom");
            break;
        case "f3":
            g.internal = 4;
            nav.next("ff")
            break;
        case "reset":
            char.room(322);
            break;
        case "leave":
            cl.c.buttplug = null;
            cl.nude();
            char.room(320);
            break;
        default:
            break;
    }
};

room322.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "I'm pretty full. I already ate dog food today. blech!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "janice",
            text: "Awww, is my poor doggy trying to eat. Let me get that gag out of your mouth. " +
                "But one word and it's going back in, and no meal!",
            button: [
                { chatID: -1, text: "[Just eat the dog food]", callback: "kitchenEat" },
                { chatID: 2, text: "Ooooo, that makes my jaw so sore, can I just...", callback: "kitchenbad" },
            ]
        },
        {
            chatID: 2,
            speaker: "janice",
            text: "Bad doggy! I guess no meal for you! Let me put this gag back in your mouth!!!",
            button: [
                { chatID: -1, text: "*whine*", callback: "kitchen" },
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "This gag sucks so hard! My jaw hurts and I can drink or eat anything!",
            button: [
                { chatID: -1, text: "*whine*", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "So crunchy and gross! She could at leaste feed me people food!",
            button: [
                { chatID: 5, text: "...", callback: "kitchengood" },
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "That's a good doggy. You must love this doggy food, you ate it all up!",
            button: [
                { chatID: -1, text: "*whine*", callback: "kitchen" },
            ]
        },
        {
            chatID: 6,
            speaker: "janice",
            text: "Bad doggy! Bad! You aren't allowed on the couch!",
            button: [
                { chatID: -1, text: "*whimper*", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "I don't have to pee right now.",
            button: [
                { chatID: -1, text: "...", callback: "backyard" },
            ]
        },
        {
            chatID: 8,
            speaker: "janice",
            text: "Hahahaha! Good doggy! So glad I don't have to house break you! ",
            button: [
                { chatID: -1, text: "...", callback: "backyard" },
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "I'm too tired to play in the yard. ",
            button: [
                { chatID: -1, text: "...", callback: "backyard" },
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "AAAAAKKKKK!! Don't pull my tail, it's attached in me! This isn't tug-of-war!",
            button: [
                { chatID: -1, text: "*muffled screams*", callback: "yardPlay3" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "noop",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "janice",
            text: "Hey girl. You want to go for a walk? ",
            button: [
                { chatID: -1, text: "Happy muffles", callback: "walk" },
                { chatID: -1, text: "Sad muffles", callback: "livingroomannoy" },
            ]
        },
        {
            chatID: 13,
            speaker: "janice",
            text: "Those are my good girls. ",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 14,
            speaker: "eva",
            text: "Huh? Is that my.....",
            button: [
                { chatID: 15, text: "...", callback: "walk2" },
            ]
        },
        {
            chatID: 15,
            speaker: "eva",
            text: "Oh my god it is you! What are you doing being walked around like a dog!",
            button: [
                { chatID: 16, text: "*muffled grunts*", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "janice",
            text: "Oh hi " + sc.n("eva") + ". Your " + g.makeSingular(sc.n("el")) + "'s my doggy " +
                "now. She's been a bad girl, but she does deserve her walks. ",
            button: [
                { chatID: 17, text: "ugh", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "eva",
            text: "I knew you were a pervert, but this is so much. You know everyone can see your " +
                "balls as you go down the sidewalk! Just jiggling back and forth! You really are " +
                "the weirdest girl I know! ",
            button: [
                { chatID: -1, text: "sigh", callback: "livingroom" },
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: "Hahahaha! I saw your butthole a mile away! You're such a weird pervert! I am " +
                "both amazing and disgusted. ",
            button: [
                { chatID: -1, text: "sigh", callback: "livingroom" },
            ]
        },
        {
            chatID: 19,
            speaker: "girl",
            text: "Oh cute! Is that a new doggy, wait isn't that your old boyfriend?",
            button: [
                { chatID: 20, text: "...", callback: "park1_1" },
            ]
        },
        {
            chatID: 20,
            speaker: "janice",
            text: "Hehehe! Yeah. I can't believe I dated that loser. She's much better as my little " +
                "doggy now hehehe. I caught her getting fucked by " + sc.n("dog") + ", so I did the only " +
                "thing I could. Make her my bitch. ",
            button: [
                { chatID: 21, text: "...", callback: "park1_2" },
            ]
        },
        {
            chatID: 21,
            speaker: "girl",
            text: "I'm so jealous! I want a bitch too! And look, the other doggies really love " +
                "her too! Is she house broken?",
            button: [
                { chatID: 22, text: "...", callback: "park1_3" },
            ]
        },
        {
            chatID: 22,
            speaker: "janice",
            text: "Yes! Thank god. I mean mostly. She did pee in her cage. I should make her sit " +
                "in her pee next time she does that. She is such a bad dog. I'm going to have to " +
                "punish her again. ",
            button: [
                { chatID: 23, text: "...", callback: "park1_4" },
            ]
        },
        {
            chatID: 23,
            speaker: "girl",
            text: "What a bad dog! When my little doggy pees on the floor I ususally rub her face " +
                "in it. Only had to do it twice. I love my doggy, but I hate training her. Well, " +
                "I gotta get going. See you later. ",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 24,
            speaker: "janice",
            text: "Well, time to make some money! ",
            button: [
                { chatID: -1, text: "...", callback: "room321" },
            ]
        },
        {
            chatID: 25,
            speaker: "janice",
            text: "Ooooo. Who's at the door?",
            button: [
                { chatID: 26, text: "...", callback: "waiter1" },
            ]
        },
        {
            chatID: 26,
            speaker: "!waiter",
            text: "Is that loser boyfriend of yours around or do you have time to indulge in " +
                "this chocolate cake I brought?",
            button: [
                { chatID: 27, text: "...", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "janice",
            text: "Cocolate cake! OOoo you can come in! And, no, I don't have a boyfriend anymore. ",
            button: [
                { chatID: 28, text: "*whimper*", callback: "waiter2" },
            ]
        },
        {
            chatID: 28,
            speaker: "!waiter",
            text: "Oh ho ho ho. I always knew you were a cuck, but I didn't know you were a freak " +
                "too. Come, let's eat this cake baby. ",
            button: [
                { chatID: 29, text: "*sigh*", callback: "waiter3" },
            ]
        },
        {
            chatID: 29,
            speaker: "janice",
            text: "mMMmmMMmm I do love your yummy cake. Sooooo good. ",
            button: [
                { chatID: 30, text: "...", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "!waiter",
            text: "You're yummy! We should really share our cake with your dogs. Here " +
                "doggy, catch the cake.",
            button: [
                { chatID: 31, text: "...", callback: "waiter4" },
            ]
        },
        {
            chatID: 31,
            speaker: "!waiter",
            text: "Hahaha!! You're doggy is so bad at catching! She's got chocolate cake all over " +
                "her face!",
            button: [
                { chatID: 32, text: "...", callback: "waiter5" },
            ]
        },
        {
            chatID: 32,
            speaker: "janice",
            text: "hehe. Dumb dog",
            button: [
                { chatID: 33, text: "...", callback: "waiter6" },
            ]
        },
        {
            chatID: 33,
            speaker: "!waiter",
            text: "While those two lick each out, let's take this into the bedroom so I may " +
                "lick you. ",
            button: [
                { chatID: 34, text: "...", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "janice",
            text: "MMMmmmm. I like the way you lick.",
            button: [
                { chatID: -1, text: "...", callback: "doggywait" },
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "I don't need to watch my girlfriend get fucked by that asshole waiter. I'll just " +
                "try to nap while listening to her moans of pleasure. ",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 36,
            speaker: "!waiter",
            text: "Oh look, the little doggy wants to see his girlfriend get fucked! Hehe! " +
                "Watch as I make my best dish, cream filled cunt! Hahaha",
            button: [
                { chatID: 37, text: "...", callback: "waiter8" },
            ]
        },
        {
            chatID: 37,
            speaker: "janice",
            text: "His cock is so much better than yours. My god I love getting fucked!",
            button: [
                { chatID: 38, text: "...", callback: "waiter9" },
            ]
        },
        {
            chatID: 38,
            speaker: "!waiter",
            text: "Let me take that gag out so you can clean her pussy while she cleans my cock! " +
                "Cute little doggies. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "thinking",
            text: "Uh oh. " + sc.n("dog") + " looks mad. I wonder what I did wrong?",
            button: [
                { chatID: 40, text: "...", callback: "waiter11" },
            ]
        },
        {
            chatID: 40,
            speaker: "!waiter",
            text: "You're such a bitch. You both know " + sc.n("dog") + " is the real one. You're " +
                "just his bitch! Hahahahah! ",
            button: [
                { chatID: -1, text: "*sigh*", callback: "evening" },
            ]
        },
        {
            chatID: 41,
            speaker: "janice",
            text: "Ooooo. Who's at the door?",
            button: [
                { chatID: 42, text: "...", callback: "pl1" },
            ]
        },
        {
            chatID: 42,
            speaker: "!plumber",
            text: "I came to check your pipes... but... is that your boyfriend? ",
            button: [
                { chatID: 43, text: "...", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "janice",
            text: "Hahaha, what boyfriend. Those are just my doggies. Come, join me on the couch? ",
            button: [
                { chatID: 44, text: "...", callback: "pl2" },
            ]
        },
        {
            chatID: 44,
            speaker: "!plumber",
            text: "Oh wow! So what's with your dogs? That's so crazy! ",
            button: [
                { chatID: 45, text: "...", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "janice",
            text: "They're just my doggies. What do you mean? ",
            button: [
                { chatID: 46, text: "...", callback: "" },
            ]
        },
        {
            chatID: 46,
            speaker: "!plumber",
            text: "Is the boy dog neutered?  ",
            button: [
                { chatID: 47, text: "...", callback: "" },
            ]
        },
        {
            chatID: 47,
            speaker: "janice",
            text: "Oh my, no! I would never do that to " + sc.n("dog") + ". ",
            button: [
                { chatID: 48, text: "...", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "!plumber",
            text: "So... uh... do your dogs fuck. I mean if I was a dog with my balls I would fuck. " +
                "You know how I love fucking. I mean fuck. I would be fuckin' everyday. ",
            button: [
                { chatID: 49, text: "*whmper*", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "janice",
            text: "Oh. I don't know. I would say ask them, but they can't talk! HAhahaha. You " +
                "stay right here. I'm going to change into something a bit more comfortable and do " +
                "a touch up. ",
            button: [
                { chatID: 50, text: "...", callback: "pl3" },
            ]
        },
        {
            chatID: 50,
            speaker: "!plumber",
            text: "While she's busy... I'm going to go check something...don't go anywhere you two.",
            button: [
                { chatID: 51, text: "...", callback: "pl4" },
            ]
        },
        {
            chatID: 51,
            speaker: "thinking",
            text: "What's he up to? And what did he mean by, don't go anywhere.... Is he stealing " +
                "from her?",
            button: [
                { chatID: 52, text: "...", callback: "pl5" },
            ]
        },
        {
            chatID: 52,
            speaker: "!plumber",
            text: "I've always wanted to see a bitch get fucked by a dog! Come 'er bitch.",
            button: [
                { chatID: 53, text: "Hhhhrmmmmm mmmRRHhhhh", callback: "pl6" },
            ]
        },
        {
            chatID: 53,
            speaker: "!plumber",
            text: "That is a cute butthole",
            button: [
                { chatID: 54, text: "NNhhmmmnnn", callback: "pl7" },
            ]
        },
        {
            chatID: 54,
            speaker: "!plumber",
            text: "Let me just get it ready for the dog...",
            button: [
                { chatID: 55, text: "aaammnnhhhrrr", callback: "pl8" },
            ]
        },
        {
            chatID: 55,
            speaker: "!plumber",
            text: "Oh yeah! He knows that ass is his! Go on boy! Get it wet and take the bitch!",
            button: [
                { chatID: 56, text: "HHrrhhhrrrruuuummm", callback: "pl9" },
            ]
        },
        {
            chatID: 56,
            speaker: "janice",
            text: "I'm gone for 2 seconds to change and I come back to you two like this! Are you " +
                "trying to make my friend uncomfortable? ",
            button: [
                { chatID: 57, text: "UUugghhhh", callback: "pl10" },
            ]
        },
        {
            chatID: 57,
            speaker: "!plumber",
            text: "I need you now!  ",
            button: [
                { chatID: 58, text: "*huff* *huff*", callback: "pl11" },
            ]
        },
        {
            chatID: 58,
            speaker: "!plumber",
            text: "Oh shit! I don't know how long I can last! Oh fuck you bitches are hot! ",
            button: [
                { chatID: 59, text: "oof ooof ooof", callback: "pl12" },
            ]
        },
        {
            chatID: 59,
            speaker: "janice",
            text: "Oh yes! I can feel your cum filling my wet pussy! It's so hot inside me! ",
            button: [
                { chatID: 60, text: "reee wwhhhooooo", callback: "pl13" },
            ]
        },
        {
            chatID: 60,
            speaker: "!plumber",
            text: "Now those are some properly fucked bitches! Good job " + sc.n("dog") + ". Love " +
                "leave a couple properly fucked holes dripping. ",
            button: [
                { chatID: -1, text: "*hard breathing*", callback: "evening" },
            ]
        },
        {
            chatID: 61,
            speaker: "janice",
            text: "It's starting to get late, let's head to bed. ",
            button: [
                { chatID: -1, text: "...", callback: "bed" },
            ]
        },
        {
            chatID: 62,
            speaker: "janice",
            text: "Whooops... Hehehe. Ooof that's bad. Let's go to bed. ",
            button: [
                { chatID: -1, text: "...", callback: "bed" },
            ]
        },
        {
            chatID: 63,
            speaker: "janice",
            text: "Oh yeah! One last orgasm before bed! ",
            button: [
                { chatID: -1, text: "...", callback: "bed" },
            ]
        },
        {
            chatID: 64,
            speaker: "janice",
            text: "Let me get you two ready for bed. In the doggy crate with you. You haven't " +
                "earned your place in bed yet. ",
            button: [
                { chatID: 65, text: "...", callback: "e11" },
            ]
        },
        {
            chatID: 65,
            speaker: "thinking",
            text: "My arms and legs are so stiff! It hurts so much! And my butthole hasn't closed " +
                "all day! I'm going to get the worst night sleep ever! ",
            button: [
                { chatID: -1, text: "...", callback: "sleep" },
            ]
        },
        {
            chatID: 66,
            speaker: "janice",
            text: "Good girl. Time to let you out of your crate. ",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 67,
            speaker: "janice",
            text: "Shoo. Let me relax. ",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 68,
            speaker: "janice",
            text: "ugh. This show is boring and dumb. Hey, you know what would be funny? If you " +
                "sucked " + sc.n("dog") + "'s dick! Hehehe. Roll over, let me see you suck his dick. ",
            button: [
                { chatID: 69, text: "[roll over]", callback: "ds0" },
                { chatID: -1, text: "*yelp* [Run to the back yard]", callback: "backyardannoy" },
            ]
        },
        {
            chatID: 69,
            speaker: "janice",
            text: "Hahaha! You are such a loser! You just rolled over! Hehehe, Let me get " +
                sc.n("dog") + " hard so you can suck his dick! hehehe",
            button: [
                { chatID: 70, text: "....", callback: "ds1" },
            ]
        },
        {
            chatID: 70,
            speaker: "janice",
            text: "The funny thing is, all boys are the same...",
            button: [
                { chatID: 71, text: "....", callback: "ds2" },
            ]
        },
        {
            chatID: 71,
            speaker: "janice",
            text: "...you just play with their penis for a little bit and they instantly get " +
                "hard. But the thing about a hard penis is now it's in control of they boy. It " +
                "seeks a warm wet hole to ejeaculate in and nothing else matters. Open you mouth " +
                "so " + sc.n("dog") + " can put his penis in your warm wet hole. ",
            button: [
                { chatID: 72, text: "awwww", callback: "ds3" },
            ]
        },
        {
            chatID: 72,
            speaker: "janice",
            text: "That's so so hot! His red rocked just hovering above your face and your eager " +
                "mouth open ready to suck it. ",
            button: [
                { chatID: 73, text: "... ", callback: "ds4" },
            ]
        },
        {
            chatID: 73,
            speaker: "janice",
            text: "Hahah. That's so gross. You just put your mouth on a dog's penis! Keep sucking " +
                "it. I want to see you swallow his cum!",
            button: [
                { chatID: 74, text: "Swallow ", callback: "ds5" },
                { chatID: 75, text: "Spit ", callback: "ds5a" },
            ]
        },
        {
            chatID: 74,
            speaker: "janice",
            text: "Oh gross! You did swallow his doggy cum didn't you? You really will do whatever " +
                "I tell you to, won't you. ",
            button: [
                { chatID: -1, text: "arf! ", callback: "livingroom" },
            ]
        },
        {
            chatID: 75,
            speaker: "janice",
            text: "Awww! I really wanted to see you swallow it!",
            button: [
                { chatID: -1, text: "*sad arf* ", callback: "livingroom" },
            ]
        },
        {
            chatID: 76,
            speaker: "janice",
            text: "awww, do you want to play huh doggy! Let's see you do some tricks! ",
            button: [
                { chatID: 77, text: "...", callback: "" },
            ]
        },
        {
            chatID: 77,
            speaker: "janice",
            text: "Sit doggy!",
            button: [
                { chatID: 78, text: "[Sit]", callback: "t1" },
                { chatID: 83, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 78,
            speaker: "janice",
            text: "Hahah, good girl. Now roll over!",
            button: [
                { chatID: 79, text: "[Roll over]", callback: "t2" },
                { chatID: 83, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 79,
            speaker: "janice",
            text: "Haha. You're so awkward! Now play dead.",
            button: [
                { chatID: 80, text: "[Play dead]", callback: "t3" },
                { chatID: 83, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 80,
            speaker: "janice",
            text: "OOOooooh, is my poor little doggy dead? Now sit! ",
            button: [
                { chatID: 81, text: "[Sit]", callback: "t4" },
                { chatID: 83, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 81,
            speaker: "janice",
            text: "You're such a good girl! You can have a doggy biscuit! ",
            button: [
                { chatID: 82, text: "[Eat the buscuit]", callback: "" },
                { chatID: 83, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 82,
            speaker: "thinking",
            text: "Ucky! I have no idea why this is a reward! How to dogs even eat this, it's so " +
                "dry and gross!",
            button: [
                { chatID: -1, text: "...", callback: "tEnd" },
            ]
        },
        {
            chatID: 83,
            speaker: "janice",
            text: "What? You can't hear me. You're a bad doggy! Bad! Go away doggy!",
            button: [
                { chatID: -1, text: "...", callback: "tEndbad" },
            ]
        },
        {
            chatID: 84,
            speaker: "thinking",
            text: "Oh no! I drank water and didn't pee yesterday! I must have peed my crate while " +
                "I was sleeping. I'm so embarrased right now. ",
            button: [
                { chatID: 85, text: "...", callback: "pp1" },
            ]
        },
        {
            chatID: 85,
            speaker: "janice",
            text: "Well good morning my.... Did you go pee pee in your crate?  ",
            button: [
                { chatID: 86, text: "...", callback: "pp2" },
            ]
        },
        {
            chatID: 86,
            speaker: "janice",
            text: "Bad doggy! I'll just use your hair to clean up your pee pee. Now you'll have to " +
                "smell your own pee all day. Maybe you'll remember to go outside next time!",
            button: [
                { chatID: -1, text: "...", callback: "ppend" },
            ]
        },
        {
            chatID: 87,
            speaker: "janice",
            text: "You were a bad doggy today! You have to sleep in the doggy crate until you learn " +
                "to be a good doggy!",
            button: [
                { chatID: 65, text: "*sigh*", callback: "e11" },
            ]
        },
        {
            chatID: 88,
            speaker: "janice",
            text: "Time for bed my little doggies",
            button: [
                { chatID: -1, text: "...", callback: "sleep" },
            ]
        },
        {
            chatID: 89,
            speaker: "girl",
            text: "Hey girlfriend! Taking your doggies to the park again?",
            button: [
                { chatID: 90, text: "...", callback: "park1_1" },
            ]
        },
        {
            chatID: 90,
            speaker: "janice",
            text: "Oh yeah. " + sc.n("dog") + " just loves to run around and " + sc.n("me") + 
                " loves to get fucked by doggies. What are you going to do?",
            button: [
                { chatID: 91, text: "...", callback: "park1_2" },
            ]
        },
        {
            chatID: 91,
            speaker: "girl",
            text: "I knew you two wern't going to last when I heard you were dating. You need a " +
                "real man that can provide for you, not some loser wimp. ",
            button: [
                { chatID: 92, text: "...", callback: "park1_3" },
            ]
        },
        {
            chatID: 92,
            speaker: "janice",
            text: "Yeah, provide in more ways than one, am I right! ",
            button: [
                { chatID: 93, text: "...", callback: "park1_4" },
            ]
        },
        {
            chatID: 93,
            speaker: "girl",
            text: "Oh yeah! Well I have to get little Muffy home. My vag needs to get licked. ",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 74,
            speaker: "janice",
            text: "Wakey wakey. You want to be my doggy some more, or do you want to leave? ",
            button: [
                { chatID: -1, text: "*arf*", callback: "livingroom" },
                { chatID: 75, text: "*pleading eyes*", callback: "" },
            ]
        },
        {
            chatID: 75,
            speaker: "janice",
            text: "ok. I'll take my bitch suit. You can get dressed in the bathroom.  ",
            button: [
                { chatID: -1, text: "*arf*, I mean, thank you", callback: "leave" },
            ]
        },
        {
            chatID: 76,
            speaker: "janice",
            text: "oh yeah! They're here!",
            button: [
                { chatID: 77, text: "?", callback: "f0" },
            ]
        },
        {
            chatID: 77,
            speaker: "bbc",
            text: "Hey girl, what's up with the freak back there?",
            button: [
                { chatID: 78, text: "?", callback: "" },
            ]
        },
        {
            chatID: 78,
            speaker: "janice",
            text: "Oh those are my doggies! They're so great!",
            button: [
                { chatID: 79, text: "...", callback: "" },
            ]
        },
        {
            chatID: 79,
            speaker: "bbc",
            text: "Hehehe.. doggies.. I see one doggy and one bitch. Maybe they want to watch " +
                "what you're going to do to you. ",
            button: [
                { chatID: 80, text: "...", callback: "f1" },
            ]
        },
        {
            chatID: 80,
            speaker: "janice",
            text: "Oh yeah, they would love to watch. Let's take this to my bedroom.",
            button: [
                { chatID: 81, text: "...", callback: "f2" },
            ]
        },
        {
            chatID: 81,
            speaker: "janice",
            text: "So boys, who wants to go first? Don't be afraid to use my bitch you need to " +
                "get hard. She's more cock hungry than me. ",
            button: [
                { chatID: 82, text: "...", callback: "" },
            ]
        },
        {
            chatID: 82,
            speaker: "bbc",
            text: "I don't need that bitch to get hard enough to fuck you baby. Jerry may need 'er " +
                "though hehehe. ",
            button: [
                { chatID: 83, text: "...", callback: "f3" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};