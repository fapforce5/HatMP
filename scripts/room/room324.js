//Room name
var room324 = {};
room324.main = function () {
    if (sc.getMissionTask("janice", "*doggy", 0).notStarted) {
        sc.completeMissionTask("janice", "*doggy", 0);
        nav.bg("324_janice/back0.webp");
        chat(0, 324);
        gv.set("janiceRand", 0);
        gv.set("janiceAfternoon", 0);
        gv.set("janiceAnnoyance", 0);
        gv.set("janiceWalk", 0);
        let janiceRandDaily = g.shuffleArray(["n", "b", "n"]);
        gv.set("janiceRandDaily", janiceRandDaily.join(""));
    }
    else if (g.gethourdecimal() > 20) {
        nav.bg("324_janice/startc_" + gender.pronoun("f") + ".webp");
        chat(100, 324);
    }
    else if (g.pass === "endSleepyTime") {
        let janiceRandDaily = g.shuffleArray(["n", "b", "n"]);
        gv.set("janiceRandDaily", janiceRandDaily.join(""));
    }
    else {
        let janiceRandDaily = gv.get("janiceRandDaily");
        if (janiceRandDaily.length === 0)
            janiceRandDaily = "n";
        else
            gv.set("janiceRandDaily", janiceRandDaily.slice(1));
        char.addtime(60);
        if (cl.c.dress !== "bitchsuit") {
            cl.nude();
            cl.c.dress = "bitchsuit";
            cl.c.buttplug = "tail";
            cl.display();
        }
        switch (janiceRandDaily[0]) {
            case "n":
                nav.bg("324_janice/startc_" + gender.pronoun("f") + ".webp");
                sc.select("dogbed", "322_dog/icon_dogbed.webp", 0);
                sc.select("backyard", "322_dog/icon_backyard.webp", 1);
                sc.select("kitchen", "322_dog/icon_kitchen.webp", 2);
                sc.select("feet", "322_dog/icon_feet.webp", 3);
                sc.select("nuzzle", "324_janice/icon_beg.webp", 4);
                sc.select("couch", "322_dog/icon_couch.webp", 5);
                break;
            case "b":
                nav.bg("324_janice/beer0_" + gender.pronoun("f") + ".webp");
                chat(92, 324);
                break;
            default:
                console.log("missing: " + janiceRandDaily);
                break;
        }
    }
};

room324.btnclick = function (name) {
    switch (name) {
        case "dogbed":
            nav.kill();
            if (g.gethourdecimal() < 14) {
                char.settime(14, 10);
            }
            else {
                char.settime(20, 10);
            }
            let cock324 = gender.cock();
            if (cock324 === "d" || cock324 === "t") {
                cock324 = "n";
            }
            nav.bg("322_dog/dogbed_" + cock324 + ".webp");
            g.roomTimeout = setTimeout(function () {
                char.room(324);
            }, 1200);
            break;
        case "feet":
            nav.kill();
            switch (gv.get("janiceAfternoon") % 3) {
                case 0:
                    g.internal = 0;
                    nav.bg("324_janice/floorbg.webp");
                    nav.button({
                        "type": "kiss",
                        "name": "feet_lf",
                        "left": 371,
                        "top": 0,
                        "width": 578,
                        "height": 1033,
                        "image": "324_janice/floor_lf0.webp"
                    }, 324);
                    nav.button({
                        "type": "kiss",
                        "name": "feet_rf",
                        "left": 1164,
                        "top": 0,
                        "width": 542,
                        "height": 1034,
                        "image": "324_janice/floor_rf0.webp"
                    }, 324);
                    chat(10, 324);
                    break;
                case 1:
                    chat(12, 324);
                    break;
                case 2:
                    nav.bg("324_janice/floor_anal0_" + (cl.c.cock === 5 ? "f" : "m") + ".webp");
                    if (sc.getMissionTask("janice", "*doggy", 1).notStarted) {
                        sc.completeMissionTask("janice", "*doggy", 1);
                        chat(14, 324);
                    }
                    else {
                        chat(20, 324);
                    }
                    break;
            }
            gv.mod("janiceAfternoon", 1);
            break;
        case "feet_lf":
            nav.modbutton("feet_lf", "324_janice/floor_lf1.webp", null, "img");
            room324.btnclick("feet1");
            break;
        case "feet_rf":
            nav.modbutton("feet_rf", "324_janice/floor_rf1.webp", null, "img");
            room324.btnclick("feet1");
            break;
        case "feet1":
            char.addtime(5);
            if (g.internal > 0) {
                chat(11, 324);
            }
            g.internal++;
            break;
        case "floor_cum1":
            nav.killbutton("floor_cum1");
            switch (g.internal) {
                case 0:
                    nav.kill();
                    nav.button({
                        "type": "tongue",
                        "name": "floor_cum1",
                        "left": 966,
                        "top": 291,
                        "width": 73,
                        "height": 270,
                        "image": "324_janice/floor_cum2.webp"
                    }, 324);
                    break;
                case 1:
                    nav.kill();
                    nav.bg("324_janice/floor_cum3.webp");
                    levels.oral(3, "f", "janice");
                    levels.swallowCum("m", "!bf1");
                    char.addtime(30);
                    chat(13, 324);
                    break;
            }
            g.internal++;
            break;
        case "livingroom":
            char.room(324);
            break;
        case "backyard":
            nav.kill();
            nav.bg("319_backyard/bg.jpg");
            sc.select("yardrun", "322_dog/icon_yardRun.webp", 0);
            sc.select("yardlay", "322_dog/icon_yardLay.webp", 1);
            sc.select("yardpee", "322_dog/icon_yardPee.webp", 2);
            sc.select("livingroom", "322_dog/icon_living.webp", 3);
            break;
        case "yardpee":
            nav.kill();
            if (gv.get("bladder") > 0) {
                gv.mod("bladder", -1)
                let ypchastity = cl.c.chastity === null ? "_n" : "_c";
                if (g.rand(0, 2) === 0) {
                    nav.bg("322_dog/yardpee" + ypchastity + ".webp");
                    sc.select("backyard", "322_dog/icon_backyard.webp", 1);
                }
                else {
                    nav.bg("322_dog/yardpeelaugh" + ypchastity + ".webp");
                    sc.modLevel("janice", 3, 9);
                    chat(23, 324);
                }
            }
            else {
                chat(22, 324);
            }
            break;
        case "yardlay":
            nav.kill();
            gv.mod("energy", 30);
            nav.bg("322_dog/yard_layinsun.webp");
            char.addtime(120);
            g.roomTimeout = setTimeout(function () {
                invoker.invokeCurrent("btnclick", "backyard");
            }, 2000);
            break;
        case "yardrun":
            nav.kill();
            if (sc.getLevel("dog") > 6 && g.rand(0, 2) === 0 && !daily.get("dogYardFuck")) {
                daily.set("dogYardFuck");
                nav.bg("322_dog/yardPlay0.webp");
                g.roomTimeout = setTimeout(function () {
                    nav.bg("322_dog/yardPlay2.webp");
                    chat(25, 324);
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
                    invoker.invokeCurrent("btnclick", "backyard");
                }, 2000);
            }
            else {
                chat(24, 324);
            }
            break;
        case "kitchen":
            char.addtime(30);
            nav.kill();
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
            }, 324);
            break;
        case "feed":
            if (daily.get("room322Eat")) {
                chat(26, 324);
            }
            else if (daily.get("room322EatBad")) {
                chat(29, 324);
            }
            else {
                nav.kill();
                if (future.get("janiceeatfood") === -1) {
                    future.add("janiceeatfood", 10);
                    nav.bg("324_janice/eat_0.webp");
                    chat(32, 324);
                }
                else {
                    future.kill("janiceeatfood");
                    nav.bg("322_dog/kitchen.webp");
                    chat(27, 324);
                }
            }
            break;
        case "feed2":
            daily.set("room322Eat");
            nav.killbutton("feed2");
            sc.modLevel("janice", 3, 9);
            gv.mod("bladder", .8);
            chat(30, 324);
            break;
        case "eat1":
            nav.kill();
            nav.bg("324_janice/eat_2_" + gender.pronoun("f") + ".webp");
            gv.mod("energy", 20);
            chat(33, 324);
            break;
        case "yardfuck":
            if (g.internal > 7) {
                invoker.invokeCurrent("btnclick", "backyard");
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
        case "nuzzle":
            nav.kill();
            switch (gv.get("janiceRand") % 5) {
                case 0:
                    chat(59, 324);
                    break;
                case 1:
                    nav.bg("322_dog/shoo.webp");
                    char.addtime(30);
                    chat(38, 324);
                    break;
                case 2:
                    nav.bg("322_dog/shoo.webp");
                    char.addtime(30);
                    chat(39, 324);
                    break;
                case 3:
                    nav.bg("322_dog/t0.webp");
                    char.addtime(30);
                    chat(47, 324);
                    break;
                case 4:
                    nav.bg("322_dog/shoo.webp");
                    char.addtime(30);
                    chat(55, 324);
                    break;
            }
            gv.mod("janiceRand", 1);
            break;
        case "park2_6":
            nav.killbutton("park2_6");
            nav.bg("322_dog/park2_6.webp");
            nav.custom("park2_7", "swallow");
            break;
        case "park2_7":
            levels.oral(3, "m", "!dog", true, "dog");
            nav.killbutton("park2_7");
            nav.bg("322_dog/park2_7.webp");
            chat(91, 324);
            break;
        default:
            break;
    }
};

room324.chatcatch = function (callback) {
    switch (callback) {
        case "back1":
        case "floor_anal1":
        case "eat_3":
        case "beer1":
        case "beer3":
            nav.bg("324_janice/" + callback + ".webp");
            break;
        case "beer2":
        case "beer3":
        case "beer4":
        case "beer5":
        case "beer6":
            nav.bg("324_janice/" + callback + "_" + (cl.c.cock === 5 ? "f" : "m") + ".webp");
            break;
        case "name":
            sc.setcharname("me", "Worthless Cunt Mutt");
            break;
        case "fail":
            sc.completeMissionTask("janice", "*doggy", 0, false);
            char.addtime(30);
            char.room(10);
            break;
        case "foot_cum1":
            g.internal = 0;
            nav.bg("324_janice/floor_cum0.webp");
            nav.button({
                "type": "tongue",
                "name": "floor_cum1",
                "left": 959,
                "top": 291,
                "width": 80,
                "height": 454,
                "image": "324_janice/floor_cum1.webp"
            }, 324);
            break;
        case "floor_anal2":
            nav.bg("324_janice/" + callback + ".webp");
            if (cl.c.cock === 5)
                levels.fuckedinpussy(true, "m", true, "!football");
            else
                levels.anal(4, true, "m", true, "!football");
            break;
        case "backyard":
            invoker.invokeCurrent("btnclick", callback);
            break;
        case "yardPlay3":
            nav.bg("322_dog/" + callback + ".webp");
            g.internal = 0;
            nav.next("yardfuck");
            break;
        case "kitchen":
            invoker.invokeCurrent("btnclick", callback);
            break;
        case "kitchengood":
            nav.bg("322_dog/" + callback + ".webp");
            break;
        case "kitchenbad":
            nav.bg("322_dog/" + callback + ".webp");
            daily.set("janiceBaddog");
            daily.set("room322EatBad")
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
            }, 324);
            break;
        case "eat1":
            nav.kill();
            nav.bg("324_janice/eat_1bg.webp");
            nav.button({
                "type": "kiss",
                "name": "eat1",
                "left": 880,
                "top": 570,
                "width": 257,
                "height": 123,
                "image": "324_janice/eat_1.webp"
            }, 324);
            break;
        case "eat_4":
            nav.kill();
            nav.bg("324_janice/eat_4.webp");
            zcl.bjpov(-270, 300, .75, "black", true);
            break;
        case "eat_5":
            zcl.bjpov(-270, 300, .75, "black cum swallow", true);
            levels.oral(4, "m", "!bf1", true);
            daily.set("room322Eat");
            break;
        case "livingroom":
            char.room(324);
            break;
        case "ds0":
        case "ds1":
        case "ds2":
        case "ds3":
        case "ds4":
        case "t1":
        case "t2":
        case "t3":
        case "t4":
        case "k0":
        case "k1":
        case "k2":
        case "walk2":
        case "park1_1":
        case "park1_2":
        case "park2_1":
        case "park2_2":
        case "park2_3":
        case "park2_4":
        case "park2_7":
            nav.bg("322_dog/" + callback + ".webp");
            break;
        case "walk":
            gv.mod("janiceWalk", 1);
            gv.mod("energy", -20);
            levels.mod("fitness", 20);
            char.addtime(60);
            switch (gv.get("janiceWalk") % 3) {
                case 0:
                    nav.bg("322_dog/walk0.webp");
                    sc.modLevel("janice", 3, 9);
                    sc.modLevel("janice", 4, 9);
                    chat(60, 324);
                    break;
                case 1:
                    if (sc.getMissionTask("eva", "random", 1).notStarted) {
                        sc.completeMissionTask("eva", "random", 1);
                        nav.bg("322_dog/walk1.webp");
                        sc.modSecret("eva", 100);
                        sc.modLevel("janice", 4, 9);
                        chat(61, 324);
                    }
                    else {
                        nav.bg("322_dog/walk2.webp");
                        sc.modLevel("janice", 4, 9);
                        chat(65, 324);
                    }
                    break;
                case 2:
                    nav.kill();
                    sc.modLevel("janice", 5, 9);
                    if (sc.getMissionTask("janice", "random", 0).notStarted) {
                        sc.completeMissionTask("janice", "random", 0);
                        nav.bg("322_dog/park1_0.webp");
                        chat(66, 324);
                    }
                    else if (sc.getMissionTask("janice", "random", 1).notStarted) {
                        sc.completeMissionTask("janice", "random", 1);
                        nav.bg("322_dog/park2_0.webp");
                        chat(76, 324);
                    }
                    else { //if (sc.getMissionTask("janice", "random", 2).notStarted) {
                        nav.bg("322_dog/park1_0.webp");
                        chat(71, 324);
                    }
                    break;
            }
            break;
        case "park1_3":
        case "park1_4":
            nav.bg("322_dog/" + callback + ".webp");
            levels.anal(4, false, "m", true, "!dog", "dog");
            break;
        case "park2_5":
            nav.kill();
            nav.bg("322_dog/park2_5.webp");
            nav.suck("park2_6");
            break;
        case "ds5":
            nav.bg("322_dog/ds5.webp");
            sc.modLevel("dog", 50, 10);
            levels.oral(4, "m", "dog", true, "dog");
            sc.modLevel("janice", 7, 9);
            char.addtime(30);
            break;
        case "ds5a":
            nav.bg("322_dog/ds5a.webp");
            sc.modLevel("dog", 50, 10);
            levels.oral(4, "m", "dog", false, "dog");
            sc.modLevel("janice", 2, 9);
            char.addtime(30);
            break;
        case "tEnd":
            sc.modLevel("janice", 5, 9);
            gv.mod("energy", 25);
            char.room(324);
            break;
        case "k_end":
            gv.mod("energy", -30);
            sc.modLevel("janice", 2, 9);
            char.room(324);
            break;
        case "kitchenimg":
            nav.bg("317_janiceKitchen/kitchen.jpg");
            char.addtime(120);
            break;
        case "reset":
            char.room(324);
            break;
        default:
            break;
    }
};

room324.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "janice",
            text: "So glad you're back safe! I was so worried I had to get a part time job for a bit to pay my bills for a bit until my webcam " +
                "channel blew up! Luckily you're back now. So happy you're back! ",
            button: [
                { chatID: 1, text: "...", callback: "back1" }
            ]
        },
        {
            chatID: 1,
            speaker: "janice",
            text: "I was so lonely I decided to just date these two men. Meet ##!bf1## and ##!bf2##. They really helped me " +
                "through the pain of losing you, but you're back now! That's so amazing! You have no idea how much I miss you watching me " +
                "getting fucked. It really is a turn on I never knew I needed. ",
            button: [
                { chatID: 2, text: "Hot", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "janice",
            text: "I've already told them what a free use bitch you are and how you're my second favorite doggy. I would love to keep you as my " +
                "pet, but for real, that is if it's ok with you two boys? ",
            button: [
                { chatID: 3, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!bf1",
            text: "I can't speak for ##!bf2##, but it's cool with me. I love dogs! ",
            button: [
                { chatID: 4, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!bf2",
            text: "fo sho. Cool cool. My baby girl can have as many pets as she wants. ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "janice",
            text: "So what do you say? Do you want to be our pet for ever? As my pet I get to name you. Everyone will call you Worthless Cunt Mutt " +
                "from now on 'cause that's all you ever will be. What do you say, are you going to be Worthless Cunt Mutt?",
            button: [
                { chatID: 7, text: "Arf!", callback: "name" },
                { chatID: 6, text: "No. I have important things to do. ", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "janice",
            text: "oh. Well you're no longer my second favorite doggy! Get out! ",
            button: [
                { chatID: -1, text: "It is for the best. Bye. ", callback: "fail" },
            ]
        },
        {
            chatID: 7,
            speaker: "janice",
            text: "You're going to be the best Worthless Cunt Mutt won't you?",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "Arf!",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "janice",
            text: "Oh joy! Let me get your bitch suit!!! ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 10,
            speaker: "!bf2",
            text: "This bitch lookin' at my feet. Listen bitch, kiss my feet. I know you want to, dirty mutt. ",
            button: [
                { chatID: -1, text: "*arf*", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "!bf2",
            text: "Haha! I told 'dis dumb bitch to kiss my feet and " + gender.pronoun("she") + " did it! Now fuck off. ",
            button: [
                { chatID: -1, text: "*arf*", callback: "reset" },
            ]
        },
        {
            chatID: 12,
            speaker: "janice",
            text: "Ooop! I think that creampie you gave me earlier ##!bf1## is starting to slide out of me! ##me##" + 
                " come here can clean me up. ",
            button: [
                { chatID: -1, text: "*arf*", callback: "foot_cum1" },
            ]
        },
        {
            chatID: 13,
            speaker: "janice",
            text: "I'm such a great pet owner giving my doggie treats! ",
            button: [
                { chatID: -1, text: "*arf*", callback: "reset" },
            ]
        },
        {
            chatID: 14,
            speaker: "!football",
            text: "Hey bros, wanna hit the gym.... What the fuck? ",
            button: [
                { chatID: 15, text: "*arf*", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "!bf1",
            text: "Oh 'sup bro. You wanna fuck our dog?  ",
            button: [
                { chatID: 16, text: "*cute whimper*", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!football",
            text: "That ok with " + gender.pronoun("her") + "?",
            button: [
                { chatID: 17, text: "*drooling into your ball gag*", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "!bf1",
            text: "*pffft* Doesn't matter. Just put your dick in " + gender.pronoun("her") + ". What " + gender.pronoun("she") + " gunna do? " +
                " Say no with that gag in, hahahah!",
            button: [
                { chatID: 18, text: "*more drooling into your ball gag*", callback: "floor_anal1" },
            ]
        },
        {
            chatID: 18,
            speaker: "!football",
            text: "Oh fuck, this bitch's " + gender.pronoun("pussy") + " is tight! ",
            button: [
                { chatID: 19, text: "*orgasmic moaning into your gag*", callback: "floor_anal2" },
            ]
        },
        {
            chatID: 19,
            speaker: "!football",
            text: "Oh fuck. Hey ##!bf1## don't go telling everyone at practice that I fucked your dog. Don't want the nick name " +
                "dog fucker, 'k? ",
            button: [
                { chatID: -1, text: "*whimpering in shame as you feel his cum leak out of your " + gender.pronoun("pussyhole") + "*", callback: "reset" },
            ]
        },
        {
            chatID: 20,
            speaker: "!football",
            text: "Hey ##!bf1## mind if I fuck yo dog again? ",
            button: [
                { chatID: 21, text: "....", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "!bf1",
            text: "I don't give a shit what you do to it. ",
            button: [
                { chatID: 18, text: "*anticipating moans*", callback: "floor_anal1" },
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "I don't have to pee right now.",
            button: [
                { chatID: -1, text: "...", callback: "backyard" },
            ]
        },
        {
            chatID: 23,
            speaker: "janice",
            text: "Hahahaha! Good doggy! So glad I don't have to house break you!",
            button: [
                { chatID: -1, text: "...", callback: "backyard" },
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "I'm too tired to play in the yard.",
            button: [
                { chatID: -1, text: "...", callback: "backyard" },
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "AAAAAKKKKK!! Don't pull my tail, it's attached to me! This isn't tug-of-war!",
            button: [
                { chatID: -1, text: "*muffled screams*", callback: "yardPlay3" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "I'm pretty full. I already ate dog food today. blech!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "janice",
            text: "Awww, is my poor doggy trying to eat? Let me get that gag out of your mouth. " +
                "But one word and it's going back in, and no meal!",
            button: [
                { chatID: -1, text: "[Just eat the dog food]", callback: "kitchenEat" },
                { chatID: 28, text: "Ooooo, that makes my jaw so sore, can I just...", callback: "kitchenbad" },
            ]
        },
        {
            chatID: 28,
            speaker: "janice",
            text: "Bad doggy! I guess no meal for you! Let me put this gag back in your mouth!!!",
            button: [
                { chatID: -1, text: "*whine*", callback: "kitchen" },
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "This gag sucks so hard! My jaw hurts and I can't drink or eat anything!",
            button: [
                { chatID: -1, text: "*whine*", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "thinking",
            text: "So crunchy and gross! She could at least feed me people food!",
            button: [
                { chatID: 31, text: "...", callback: "kitchengood" },
            ]
        },
        {
            chatID: 31,
            speaker: "janice",
            text: "That's a good doggy. You must love this doggy food, you ate it all up!",
            button: [
                { chatID: -1, text: "*whine*", callback: "kitchen" },
            ]
        },
        {
            chatID: 32,
            speaker: "!bf1",
            text: "fuckin' dogs, always beggin'. You want some food you dumb dog? ",
            button: [
                { chatID: 37, text: "*whine*", callback: "eat1" },
            ]
        },
        {
            chatID: 33,
            speaker: "!bf1",
            text: "I knew you would like that bitch. Eat up. ",
            button: [
                { chatID: 34, text: "*crunch gobble*", callback: "eat_3" },
            ]
        },
        {
            chatID: 34,
            speaker: "!bf1",
            text: "I bet your mouth is dry from all that crunchy kibble. Go ahead, you know what to do. ",
            button: [
                { chatID: 35, text: "[Take his large, thick, erect penis into your mouth]", callback: "eat_4" },
            ]
        },
        {
            chatID: 35,
            speaker: "!bf1",
            text: "Don't tell ##janice##, but you suck so much better than her tired ass. Get in there suck it. ",
            button: [
                { chatID: 36, text: "[Rapidly move your head up and down so he'll cum in your mouth]", callback: "eat_5" },
            ]
        },
        {
            chatID: 36,
            speaker: "!bf1",
            text: "dat's a good bitch. So we got a bitch like you around the house.",
            button: [
                { chatID: -1, text: "*coo*", callback: "kitchen" },
            ]
        },
        {
            chatID: 37,
            speaker: "!bf1",
            text: "You wanna eat. Eat off my dick ",
            button: [
                { chatID: -1, text: "[Eat the food surrounding his penis]", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "janice",
            text: "Shoo. Let me relax.",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 39,
            speaker: "janice",
            text: "ugh. This show is boring and dumb. Hey, you know what would be funny? If you " +
                "sucked ##dog##'s dick! Hehehe. Roll over, let me see you suck his dick. ",
            button: [
                { chatID: 40, text: "[roll over]", callback: "ds0" },
                { chatID: -1, text: "*yelp* [Run to the back yard]", callback: "backyard" },
            ]
        },
        {
            chatID: 40,
            speaker: "janice",
            text: "Hahaha! You are such a loser! You just rolled over! Hehehe, Let me get " +
                "##dog## hard so you can suck his dick! hehehe",
            button: [
                { chatID: 41, text: "....", callback: "ds1" },
            ]
        },
        {
            chatID: 41,
            speaker: "janice",
            text: "The funny thing is, all boys are the same...",
            button: [
                { chatID: 42, text: "....", callback: "ds2" },
            ]
        },
        {
            chatID: 42,
            speaker: "janice",
            text: "...you just play with their penis for a little bit and they instantly get " +
                "hard. But the thing about a hard penis is now it's in control of the boy. It " +
                "seeks a warm wet hole to ejaculate in and nothing else matters. Open your mouth " +
                "so ##dog## can put his penis in your warm wet hole.",
            button: [
                { chatID: 43, text: "Awwww", callback: "ds3" },
            ]
        },
        {
            chatID: 43,
            speaker: "janice",
            text: "That's so so hot! His red rocket just hovering above your face and your eager " +
                "mouth open ready to suck it.",
            button: [
                { chatID: 44, text: "...", callback: "ds4" },
            ]
        },
        {
            chatID: 44,
            speaker: "janice",
            text: "Hahaha. That's so gross. You just put your mouth on a dog's penis! Keep sucking " +
                "it. I want to see you swallow his cum!",
            button: [
                { chatID: 45, text: "Swallow", callback: "ds5" },
                { chatID: 46, text: "Spit", callback: "ds5a" },
            ]
        },
        {
            chatID: 45,
            speaker: "janice",
            text: "Oh gross! You did swallow his doggy cum didn't you? You really will do whatever " +
                "I tell you to, won't you.",
            button: [
                { chatID: -1, text: "Arf!", callback: "livingroom" },
            ]
        },
        {
            chatID: 46,
            speaker: "janice",
            text: "Awww! I really wanted to see you swallow it!",
            button: [
                { chatID: -1, text: "*sad arf* ", callback: "livingroom" },
            ]
        },
        {
            chatID: 47,
            speaker: "janice",
            text: "Awww, do you want to play huh doggy! Let's see you do some tricks!",
            button: [
                { chatID: 48, text: "...", callback: "" },
            ]
        },
        {
            chatID: 48,
            speaker: "janice",
            text: "Sit doggy!",
            button: [
                { chatID: 49, text: "[Sit]", callback: "t1" },
                { chatID: 54, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "janice",
            text: "Hahah, good girl. Now roll over!",
            button: [
                { chatID: 50, text: "[Roll over]", callback: "t2" },
                { chatID: 54, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 50,
            speaker: "janice",
            text: "Haha. You're so awkward! Now play dead.",
            button: [
                { chatID: 51, text: "[Play dead]", callback: "t3" },
                { chatID: 54, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "janice",
            text: "OOOooooh, is my poor little doggy dead? Now sit! ",
            button: [
                { chatID: 52, text: "[Sit]", callback: "t4" },
                { chatID: 54, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "janice",
            text: "You're such a good girl! You can have a doggy biscuit! ",
            button: [
                { chatID: 53, text: "[Eat the biscuit]", callback: "" },
                { chatID: 54, text: "[Don't move]", callback: "" },
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "Ucky! I have no idea why this is a reward! How do dogs even eat this? It's so " +
                "dry and gross!",
            button: [
                { chatID: -1, text: "...", callback: "tEnd" },
            ]
        },
        {
            chatID: 54,
            speaker: "janice",
            text: "What? You can't hear me. You're a bad doggy! Bad! Go away doggy!",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 55,
            speaker: "janice",
            text: "Ugh, you want to play? Fine. Turn around.",
            button: [
                { chatID: 56, text: "[Turn around]", callback: "k0" },
            ]
        },
        {
            chatID: 56,
            speaker: "janice",
            text: "You know for a girl dog it is weird that your balls hang so low.",
            button: [
                { chatID: 57, text: "?", callback: "k1" },
            ]
        },
        {
            chatID: 57,
            speaker: "janice",
            text: "Let me kick them inside of you! hehehe",
            button: [
                { chatID: 58, text: "?", callback: "k2" },
            ]
        },
        {
            chatID: 58,
            speaker: "thinking",
            text: "Oh no, oh no, oh no! My poor poor balls! Aaaaa! Why? WHY! Damn I can't even " +
                "cradle my balls in this bitch suit! Fuck my life...",
            button: [
                { chatID: -1, text: "...", callback: "k_end" },
            ]
        },
        {
            chatID: 59,
            speaker: "janice",
            text: "Hey girl. You want to go for a walk?",
            button: [
                { chatID: -1, text: "Happy muffles", callback: "walk" },
                { chatID: -1, text: "Sad muffles", callback: "livingroom" },
            ]
        },
        {
            chatID: 60,
            speaker: "janice",
            text: "Those are my good girls.",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 61,
            speaker: "eva",
            text: "Huh? Is that my.....",
            button: [
                { chatID: 62, text: "...", callback: "walk2" },
            ]
        },
        {
            chatID: 62,
            speaker: "eva",
            text: "Oh my god it is you! What are you doing being walked around like a dog!",
            button: [
                { chatID: 63, text: "*muffled grunts*", callback: "" },
            ]
        },
        {
            chatID: 63,
            speaker: "janice",
            text: "Oh hi ##eva##. Your " + g.makeSingular(sc.n("el")) + "'s my doggy " +
                "now. She's been a bad girl, but she does deserve her walks. ",
            button: [
                { chatID: 64, text: "ugh", callback: "" },
            ]
        },
        {
            chatID: 64,
            speaker: "eva",
            text: "I knew you were a pervert, but this is so much. You know everyone can see your " +
                "balls as you go down the sidewalk! Just jiggling back and forth! You really are " +
                "the weirdest girl I know!",
            button: [
                { chatID: -1, text: "Sigh", callback: "livingroom" },
            ]
        },
        {
            chatID: 65,
            speaker: "eva",
            text: "Hahahaha! I saw your butthole a mile away! You're such a weird pervert! I am " +
                "both amazed and disgusted.",
            button: [
                { chatID: -1, text: "Sigh", callback: "livingroom" },
            ]
        },
        {
            chatID: 66,
            speaker: "girl",
            text: "Oh cute! Is that a new doggy, wait isn't that your old boyfriend?",
            button: [
                { chatID: 67, text: "...", callback: "park1_1" },
            ]
        },
        {
            chatID: 67,
            speaker: "janice",
            text: "Hehehe! Yeah. I can't believe I dated that loser. She's much better as my little " +
                "doggy now hehehe. I caught her getting fucked by ##dog##, so I did the only " +
                "thing I could. Make her my bitch. ",
            button: [
                { chatID: 68, text: "...", callback: "park1_2" },
            ]
        },
        {
            chatID: 68,
            speaker: "girl",
            text: "I'm so jealous! I want a bitch too! And look, the other doggies really love " +
                "her too! Is she house broken?",
            button: [
                { chatID: 69, text: "...", callback: "park1_3" },
            ]
        },
        {
            chatID: 69,
            speaker: "janice",
            text: "Yes! Thank god. I mean mostly. She did pee in her cage. I should make her sit " +
                "in her pee next time she does that. She is such a bad dog. I'm going to have to " +
                "punish her again. ",
            button: [
                { chatID: 70, text: "...", callback: "park1_4" },
            ]
        },
        {
            chatID: 70,
            speaker: "girl",
            text: "What a bad dog! When my little doggy pees on the floor I usually rub her face " +
                "in it. Only had to do it twice. I love my doggy, but I hate training her. Well, " +
                "I gotta get going. See you later.",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 71,
            speaker: "girl",
            text: "Hey girlfriend! Taking your doggies to the park again?",
            button: [
                { chatID: 72, text: "...", callback: "park1_1" },
            ]
        },
        {
            chatID: 72,
            speaker: "janice",
            text: "Oh yeah. ##dog## just loves to run around and ##me##" +
                " loves to get fucked by doggies. What are you going to do?",
            button: [
                { chatID: 73, text: "...", callback: "park1_2" },
            ]
        },
        {
            chatID: 73,
            speaker: "girl",
            text: "I knew you two weren't going to last when I heard you were dating. You need a " +
                "real man that can provide for you, not some loser wimp.",
            button: [
                { chatID: 74, text: "...", callback: "park1_3" },
            ]
        },
        {
            chatID: 74,
            speaker: "janice",
            text: "Yeah, provide in more ways than one, am I right!",
            button: [
                { chatID: 75, text: "...", callback: "park1_4" },
            ]
        },
        {
            chatID: 75,
            speaker: "girl",
            text: "Oh yeah! Well I have to get little Muffy home. My vag needs to get licked.",
            button: [
                { chatID: -1, text: "...", callback: "livingroom" },
            ]
        },
        {
            chatID: 76,
            speaker: "!girl",
            text: "You two bitches!!!",
            button: [
                { chatID: 77, text: "...", callback: "" },
            ]
        },
        {
            chatID: 77,
            speaker: "janice",
            text: "What did you call me!",
            button: [
                { chatID: 78, text: "...", callback: "" },
            ]
        },
        {
            chatID: 78,
            speaker: "!girl",
            text: "I called you both bitches! Your bitch let herself get mounted and bred by my little doggy last time you " +
                "were here! He smashed his poor testicles against your doggy and now he can't get hard! " +
                "I can't use him at the breeding farm if he can't get a boner! " +
                "The vet said I have to rub his balls to get him to relax, but there's no way I'm doing that! ",
            button: [
                { chatID: 79, text: "...", callback: "" },
            ]
        },
        {
            chatID: 79,
            speaker: "janice",
            text: "Don't you ever call me a bitch again! But yes, my bitch is a bad " + gender.pronoun("girl") + "! Bad bad " +
                gender.pronoun("girl") + "! What can we do to make this right? ",
            button: [
                { chatID: 80, text: "...", callback: "" },
            ]
        },
        {
            chatID: 80,
            speaker: "!girl",
            text: "I make $50 a session, so you can start by paying me that! ",
            button: [
                { chatID: 81, text: "...", callback: "" },
            ]
        },
        {
            chatID: 81,
            speaker: "janice",
            text: "*scoff* I'm not paying you that much money. I don't even have that much ",
            button: [
                { chatID: 82, text: "...", callback: "" },
            ]
        },
        {
            chatID: 82,
            speaker: "!girl",
            text: "If you're not going to pay me then you can rub my doggy's balls! At least that way I can get " +
                "him to mate again! ",
            button: [
                { chatID: 83, text: "...", callback: "" },
            ]
        },
        {
            chatID: 83,
            speaker: "janice",
            text: "I'm not rubbing your dog's balls. But... hmmmm... I can have my bitch do it. " + gender.pronoun("he").capitalize() +
                "'s the reason for this mess. ",
            button: [
                { chatID: 84, text: "...", callback: "" },
            ]
        },
        {
            chatID: 84,
            speaker: "!girl",
            text: "How is " + gender.pronoun("she") + " going to do that? " + gender.pronoun("his").capitalize() + " hands are bound. ",
            button: [
                { chatID: 85, text: "...", callback: "" },
            ]
        },
        {
            chatID: 85,
            speaker: "janice",
            text: gender.pronoun("she").capitalize() + " won't be using " + gender.pronoun("his") + " hands. I've got a little jar of peanut butter we can rub on his balls. We'll " +
                "let the bitch lick it off. Even better than rubbing. ",
            button: [
                { chatID: 86, text: "...", callback: "" },
            ]
        },
        {
            chatID: 86,
            speaker: "!girl",
            text: "hmmmmm.... ok. But tell your bitch to be gentle! ",
            button: [
                { chatID: 87, text: "...", callback: "park2_1" },
            ]
        },
        {
            chatID: 87,
            speaker: "janice",
            text: "Let me put that peanut butter on nice and thick. I know how much you doggies can't resist licking " +
                "up all the peanut butter.  ",
            button: [
                { chatID: 88, text: "...", callback: "park2_2" },
            ]
        },
        {
            chatID: 88,
            speaker: "janice",
            text: "Almost forgot to remove your doggy ball gag. Look how drooly you are! You doggies sure do love " +
                "your peanut butter! Hehe! Now be a good " + gender.pronoun("girl") + " and get in there and lick it up. ",
            button: [
                { chatID: 89, text: "[Lick up all the peanut butter]", callback: "park2_3" },
            ]
        },
        {
            chatID: 89,
            speaker: "!girl",
            text: "Wow. " + gender.pronoun("she").capitalize() + " really licks up that peanut " +
                "butter better than my doggy. You're a lucky girl. ",
            button: [
                { chatID: 90, text: "*lick* *slurp*", callback: "park2_4" },
            ]
        },
        {
            chatID: 90,
            speaker: "janice",
            text: "Oh! Look! Your doggy is getting a boner! My bitch really knows how to lick some balls! ",
            button: [
                { chatID: 91, text: "[Finish up]", callback: "park2_7" },
                { chatID: -1, text: "[Move around and take the doggy penis in your mouth]", callback: "park2_5" },
            ]
        },
        {
            chatID: 91,
            speaker: "janice",
            text: "Who's a good " + gender.pronoun("girl") + "? You're a good " + gender.pronoun("girl") + "! Like I " +
                "said, all doggies will lick anything covered in peanut butter! Let's go home. ",
            button: [
                { chatID: -1, text: "[Go home]", callback: "livingroom" },
            ]
        },
        {
            chatID: 92,
            speaker: "!bf2",
            text: "Looks like it's just the two of us. Back that ass up over here, arch it good.",
            button: [
                { chatID: 93, text: "[Back your ass up to him]", callback: "beer1" },
            ]
        },
        {
            chatID: 93,
            speaker: "!bf2",
            text: "Yeah, that'll work, here...",
            button: [
                { chatID: 94, text: "....", callback: "beer2" },
            ]
        },
        {
            chatID: 94,
            speaker: "!bf2",
            text: "Hold my beer while I watch the game. ",
            button: [
                { chatID: 95, text: "*eeep*", callback: "beer3" },
            ]
        },
        {
            chatID: 95,
            speaker: "!bf2",
            text: "Shhhiiit. That was a nasty dunk! You see that play, fuckin' dirty!  ",
            button: [
                { chatID: 96, text: "...", callback: "beer4" },
            ]
        },
        {
            chatID: 96,
            speaker: "!bf2",
            text: "Damn. c'mon I got money on dis game!",
            button: [
                { chatID: 97, text: "...", callback: "beer5" },
            ]
        },
        {
            chatID: 97,
            speaker: "!bf2",
            text: "OOoooo yeah!",
            button: [
                { chatID: 98, text: "...", callback: "beer6" },
            ]
        },
        {
            chatID: 98,
            speaker: "!bf2",
            text: "Fuck, what a great game! Hey, bitch, go waddle your ass in the kitchen and toss that bottle. ",
            button: [
                { chatID: 99, text: "*mumble into ball gag*", callback: "kitchenimg" },
            ]
        },
        {
            chatID: 99,
            speaker: "thinking",
            text: "No respect. My ass is more than just a beer holder. ",
            button: [
                { chatID: -1, text: "...", callback: "kitchen" },
            ]
        },
        {
            chatID: 10,
            speaker: "!bf1",
            text: "Ma dick's needin' a release, let's head to the bedroom. ",
            button: [
                { chatID: -1, text: "[Follow them]", callback: "kitchen" },
                { chatID: -1, text: "[Stay in the livingroom]", callback: "kitchen" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};