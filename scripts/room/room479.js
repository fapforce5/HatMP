//Room name
var room479 = {};
room479.main = function () {
    if (g.pass === "endSleepyTime") {
        nav.bg("28_transformation/479.webp");
        chat(68, 479);
        return;
    }
    let l479 = 0;
    let loop0479 = future.get("loop0479") > -1;
    let loop0479a = future.get("loop0479a") > -1;
    if (g.isNight()) {
        nav.button({
            "type": "btn",
            "name": "ledge",
            "left": 631,
            "top": 293,
            "width": 85,
            "height": 247,
            "image": "479_hall/high.png",
        }, 479);
    }
    else {
        if (!loop0479 && !loop0479a) {
            future.add("loop0479", 3);
        }
        else if (loop0479) {
            future.kill("loop0479");
            future.add("loop0479a", 3);
            l479 = 1;
        }
        else {
            future.kill("loop0479a");
            l479 = 2;
        }
        nav.button({
            "type": "btn",
            "name": "left",
            "left": 53,
            "top": 118,
            "width": 166,
            "height": 533,
            "image": "479_hall/left.png"
        }, 479);
        nav.button({
            "type": "btn",
            "name": "right",
            "left": 1660,
            "top": 80,
            "width": 260,
            "height": 594,
            "image": "479_hall/right.png"
        }, 479);
        nav.button({
            "type": "btn",
            "name": "up",
            "left": 1160,
            "top": 224,
            "width": 261,
            "height": 178,
            "image": "479_hall/up.png"
        }, 479);
        if (!g.isNight()) {
            nav.button({
                "type": "img",
                "name": "bggirls",
                "left": 699,
                "top": 462,
                "width": 357,
                "height": 235,
                "image": "479_hall/bggirls.png",
            }, 479);
        }
        switch (l479) {
            case 0:
                nav.button({
                    "type": "btn",
                    "name": "ledge",
                    "left": 631,
                    "top": 293,
                    "width": 85,
                    "height": 247,
                    "image": "479_hall/high.png",
                }, 479);

                nav.button({
                    "type": "btn",
                    "name": "amputee",
                    "left": 441,
                    "top": 485,
                    "width": 378,
                    "height": 406,
                    "image": "479_hall/amputee.png",
                }, 479);
                nav.button({
                    "type": "btn",
                    "name": "bj",
                    "left": 741,
                    "top": 516,
                    "width": 616,
                    "height": 627,
                    "image": "479_hall/bj.png",
                }, 479);
                break;
            case 1:
                nav.button({
                    "type": "btn",
                    "name": "dance",
                    "left": 710,
                    "top": 48,
                    "width": 429,
                    "height": 674,
                    "image": "479_hall/dance.png",
                }, 479);
                break;
            default:
                nav.button({
                    "type": "btn",
                    "name": "ledge",
                    "left": 631,
                    "top": 293,
                    "width": 85,
                    "height": 247,
                    "image": "479_hall/high.png",
                }, 479);
                break;
        }
    }
    nav.buildnav([480, 478, 479, 481, 482]);
};

room479.btnclick = function (name) {
    if (name.startsWith("ledged_")) {
        switch (g.internal.r) {
            case 2:
                nav.kill();
                nav.bg("479_hall/ledge_pow.webp");
                chat(57, 479);
                return;
            case 4:
                nav.kill();
                nav.bg("479_hall/ledge_pow0.webp");
                chat(58, 479);
                return;
            case 7:
                nav.kill();
                nav.bg("479_hall/ledge_pow.webp");
                chat(59, 479);
                return;
        }
        let i479 = parseInt(name.slice(7));
        switch (i479) {
            case 0: zcl.squat(250, 420, .4, "forward", true); fame.moanAnimate("center"); break;
            case 1: zcl.squat(230, 1420, .4, "forward", true); fame.moanAnimate("right"); break;
            case 2: zcl.squat(230, 410, .4, "forward", false); fame.moanAnimate("center"); break;
            case 3: zcl.squat(230, 120, .4, "forward", false); fame.moanAnimate("left"); break;
            case 4: zcl.squat(200, 1170, .4, "forward", true); fame.moanAnimate("right"); break;
            case 5: zcl.squat(150, 720, .4, "forward", true); fame.moanAnimate("center"); break;
            case 6: zcl.squat(190, -100, .4, "forward", false); fame.moanAnimate("left"); break;
            case 7: zcl.squat(190, 970, .4, "forward", true); fame.moanAnimate("right"); break;
        }
        nav.button({
            "type": "btn",
            "name": "ledgeq_fullscreen",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
            "image": "1001_rand/transparent_fullscreen.webp",
        }, 479);
        nav.next("ledgee_" + i479);
        return;
    }
    if (name.startsWith("ledgee_")) {
        let j479 = parseInt(name.slice(7));
        g.internal.d[j479].d = true;
        fame.moanAnimateStop();
        nav.kill();
        room479.btnclick("ledgedicks");
        g.internal.r++;
        return;
    }
    switch (name) {
        case "left":
            char.room(478);
            break;
        case "right":
            char.room(481);
            break;
        case "up":
            char.room(480);
            break;
        case "bj":
            nav.killall();
            nav.bg("479_hall/bj0.jpg");
            if (sc.getMissionTask("a", "info", 8).notStarted) {
                if (sc.getMissionTask("a", "info", 8).notStarted)
                    sc.completeMissionTask("a", "info", 8);
                if (cl.c.chastity !== null)
                    chat(42, 479);
                else if (cl.c.cock === 5)
                    chat(37, 479);
                else
                    chat(0, 479);
            }
            else {
                if (cl.c.chastity !== null)
                    chat(45, 479);
                else if (cl.c.cock === 5)
                    chat(44, 479);
                else
                    chat(11, 479);
            }
            break;
        case "bj2":
            var bj2vag = cl.c.cock === 5 ? "_v" : "";
            if (g.internal === 5) {
                nav.bg("479_hall/bj0" + bj2vag + ".jpg");
                nav.killbutton("bj2");
                chat(12, 479);
            }
            else
                nav.bg("479_hall/bj" + g.internal + bj2vag + ".jpg");
            g.internal++;
            break;
        case "amputee":
            nav.killall();
            nav.bg("479_hall/amputee.jpg");
            if (sc.getMission("amputee", "chat").notStarted) {
                sc.startMission("amputee", "chat");
                sc.completeMissionTask("amputee", "chat", 0);
                chat(14, 479);
            }
            else if (sc.taskGetStep("amputee", "chat") === 1)
                chat(19, 479);
            else if (sc.taskGetStep("amputee", "chat") === 2)
                chat(20, 479);
            else if (sc.taskGetStep("amputee", "chat") === 3)
                chat(21, 479);
            else 
                chat(13, 479);
            break;
        case "ledge":
            nav.killall();
            nav.bg("479_hall/ledge.jpg");
            if (sc.getMissionTask("a", "secret", 0).notStarted) {
                if (sc.getMission("a", "secret").notStarted)
                    sc.startMission("a", "secret");
                chat(26, 479);
            }
            else {
                if (g.isNight())
                    chat(46, 479);
                else
                    chat(32, 479);
            }
            break;
        case "ledgedicks":
            nav.kill();
            nav.bg("479_hall/ledge5.webp");
            for (let i = 0; i < g.internal.d.length; i++) {
                nav.button({
                    "type": g.internal.d[i].d ? "img" : "kiss",
                    "name": "ledged_" + i,
                    "left": g.internal.d[i].x,
                    "top": g.internal.d[i].y,
                    "width": g.internal.d[i].w,
                    "height": g.internal.d[i].h,
                    "image": "479_hall/l" + i + "_" + (g.internal.d[i].d ? "hard" : "soft") + ".webp",
                }, 479);
            }
            break;
        case "dance":
            chat(33, 479);
            break;
        default:
            break;
    }
};

room479.chatcatch = function (callback) {
    switch (callback) {
        case "bj0":
        case "bj1":
        case "bj2":
        case "bj3":
        case "bj4":
        case "bj2_v":
        case "bj3_v":
        case "bj4_v":
        case "bj0_v":
            nav.bg("479_hall/" + callback + ".jpg");
            break;
        case "ledge2":
        case "ledge3":
            nav.bg("479_hall/" + callback + ".webp");
            break;
        case "bj5":
            levels.gotbj("n", "!girl");
            char.addtime(30);
            char.room(479);
            break;
        case "bj2x":
            if (cl.c.cock === 5)
                nav.bg("479_hall/bj2_v.jpg");
            else
                nav.bg("479_hall/bj2.jpg");
            g.internal = 3;
            nav.next("bj2");
            break;
        case "bj2x1":
            levels.gotbj("n", "!girl");
            char.addtime(30);
            char.room(479);
            break;
        case "reset":
            char.room(479);
            break;
        case "increment":
            invoker.invoke(480, "chatcatch", "incrementtod");
            char.room(479);
            break;
        case "amputee0":
            char.addtime(20);
            sc.completeMissionTask("amputee", "chat", 0);
            char.room(479);
            break;
        case "amputee1":
            char.addtime(20);
            sc.completeMissionTask("amputee", "chat", 1);
            char.room(479);
            break;
        case "amputee2":
            char.addtime(20);
            sc.completeMissionTask("amputee", "chat", 2);
            char.room(479);
            break;
        case "amputee3":
            if (sc.getMissionTask("a", "info", 5).notStarted) {
                sc.completeMissionTask("a", "info", 5);
                sc.completeMissionTask("amputee", "chat", 3);
                sc.completeMission("amputee", "chat");
            }
            char.addtime(20);
            char.room(479);
            break;
        case "ledge0":
            sc.completeMissionTask("a", "secret", 0);
            char.room(479);
            break;
        case "ledge1":
            nav.killall();
            nav.bg("479_hall/ledge1.webp");
            if (sc.getMissionTask("a", "secret", 1).complete) {
                chat(49, 479);
            }
            else {
                chat(47, 479);
            }
            break;
        case "dance1":
            nav.killall();
            cl.nude();
            nav.killbutton("dance");
            cl.c.panties = cl.cTemp.panties;
            cl.display();
            var panties479 = cl.c.panties === null ? "" : "_c";
            nav.button({
                "type": "btn",
                "name": "dance",
                "left": 710,
                "top": 48,
                "width": 429,
                "height": 674,
                "image": "479_hall/dance_" + gender.pronoun("f") + panties479 + ".webp",
            }, 479);
            break;
        case "ledge5":
            nav.killall();
            nav.bg("479_hall/ledge5.webp");
            g.internal = {
                d: [
                    { x: 742, y: 391, w: 144, h: 112, d: false },
                    { x: 1722, y: 286, w: 136, h: 213, d: false },
                    { x: 616, y: 280, w: 91, h: 249, d: false },
                    { x: 337, y: 334, w: 187, h: 246, d: false },
                    { x: 1490, y: 326, w: 135, h: 149, d: false },
                    { x: 984, y: 277, w: 195, h: 218, d: false },
                    { x: 106, y: 307, w: 92, h: 170, d: false },
                    { x: 1286, y: 300, w: 117, h: 192, d: false }
                ],
                r: 0
            };
            room479.btnclick("ledgedicks");
            zcl.squat(100, 700, .5, "forward", false);
            break;
        case "ledge6":
            zcl.kill();
            break;
        case "ledge8":
            nav.kill();
            nav.bg("479_hall/ledge8_" + (cl.c.cock === 5 ? "v" : "c") + ".webp");
            break;
        case "ledge9":
            nav.bg("479_hall/ledge9.webp");
            zcl.bjpov(-350, 400, .8, "closed", false);
            break;
        case "ledge10":
            nav.bg("479_hall/ledge10.webp");
            zcl.hanging(-100, 0, 1.4, "", false);
            break;
        case "ledge11":
            nav.kill();
            if (cl.c.cock === 5) {
                levels.fuckedinpussy(true, "m", true, "!bbc");
                levels.fuckedinpussy(true, "m", true, "!bwc");
                levels.fuckedinpussy(true, "m", true, "!bwc");
                levels.fuckedinpussy(true, "m", true, "!bwc");
                levels.fuckedinpussy(true, "n", true, "ff");
                levels.anal(4, false, "n", true, "ff");
                levels.anal(3, false, "m", true, "!bwc");
                levels.anal(4, false, "m", true, "!bbc");
                levels.oral(3, "m", "!bwc", true);
                levels.oral(4, "m", "!bbc", false);
                levels.oral(3, "m", "!bwc", true);
                levels.oral(3, "m", "!bwc", true);
                levels.oral(4, "m", "!bbc", true);
                levels.gavehandjob("m", "!bwc");
                levels.gavehandjob("m", "!bbc");
                levels.gavehandjob("m", "!bwc");
            }
            else {
                levels.anal(3, false, "m", true, "!bwc");
                levels.anal(3, false, "m", true, "!bwc");
                levels.anal(3, false, "m", true, "!bwc");
                levels.anal(4, false, "m", true, "!bbc");
                levels.anal(4, false, "n", true, "ff");
                levels.anal(3, false, "m", true, "!bwc");
                levels.anal(4, false, "m", true, "!bbc");
                levels.anal(4, false, "m", true, "!bbc");
                levels.oral(3, "m", "!bwc", true);
                levels.oral(4, "m", "!bbc", false);
                levels.oral(3, "m", "!bwc", true);
                levels.oral(3, "m", "!bwc", true);
                levels.oral(3, "m", "!bwc", true);
                levels.oral(3, "m", "!bwc", true);
                levels.oral(4, "m", "!bbc", true);
                levels.gavehandjob("m", "!bwc");
                levels.gavehandjob("m", "!bbc");
                levels.gavehandjob("m", "!bwc");
            }
            nav.bg("479_hall/ledge11_" + (cl.c.cock === 5 ? "v" : "c") + ".webp");
            break;
        case "ledge12":
            nav.bg("479_hall/ledge12.webp");
            zcl.facedown(700, 850, .14, "", false);
            break;
        case "reset_0":
            sc.completeMissionTask("a", "secret", 0);
            room479.chatcatch("reset");
            break;
        case "ledge_strike":
            gv.mod("energy", -30);
            for (let i = 0; i < g.internal.d.length; i++) {
                if (!g.internal.d[i].d) {
                    room479.btnclick("ledgedicks");
                    g.internal.r++;
                    room479.btnclick("ledged_" + i);
                    return;
                }
            }
            break;
        case "ledge_strike0":
            nav.bg("479_hall/ledge_pow0.webp");
            break;
        case "ledge_strike1":
            nav.bg("479_hall/ledge_pow.webp");
            break;
        case "ledge7":
            room479.btnclick("ledgedicks");
            zcl.assup(600, 400, .8, "", false);
            break;
        case "ledge13":
            g.pass = 479;
            char.room(28);
            break;
        case "ledge14":
            char.addtime(37);
            nav.kill();
            nav.bg("479_hall/ledge14.webp");
            break;
        case "ledge_end":
            g.pass = "endCave477";
            char.room(477);
            break;
        case "addtime":
            char.addtime(240);
            break;
        default:
            break;
    }
};

room479.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Hey stranger! I'd ask for a blow job, but it's going to take me a few minutes to get it " +
                "hard again!",
            button: [
                { chatID: 1, text: "Oh, no, I was just..", callback: "bj1" }
            ]
        },
        {
            chatID: 1,
            speaker: "random",
            text: "Oh! you want a blow job. I don't do that, but my slave does! Slave suck her dick!",
            button: [
                { chatID: 2, text: "Well ok! ", callback: "bj2" },
                { chatID: 5, text: "I'm just here to ask some questions. ", callback: "bj0" },
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "You're going to love her blowjob",
            button: [
                { chatID: 3, text: "MMmmmm", callback: "bj3" },
            ]
        },
        {
            chatID: 3,
            speaker: "random",
            text: "Feel her tongue flicking right at the base of your dick? Really soft and playful. Hard to hold " +
                "back and orgasm with your dick head sliding in and out of her throat. ",
            button: [
                { chatID: 4, text: "OOooohhhh fffffff", callback: "bj4" },
            ]
        },
        {
            chatID: 4,
            speaker: "random",
            text: "She was so terrible when she got here. I had to hold her by her ears and correct years of bad " +
                "training. But as you can see with your cum running down her throat, she has nearly perfected the " +
                "blow job. ",
            button: [
                { chatID: 5, text: "Oh Yeah!", callback: "bj0" },
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "I met my slave here at this place. When I first laid eyes on her after coming here I knew she was " +
                "the one for me. I found her curled up under one of the beds. Poor thing hadn't eaten for days. " +
                "I brought her some soup and fed it to her calming this poor thing. ",
            button: [
                { chatID: 6, text: "...", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "random",
            text: "My time with the cult was not terrible. I learned to serve those and ate my hormone pills. " +
                "My slaves time was not as good. She fought and called them names all through her first days there. " +
                "When she refused to quiet down they removed her vocal cords and put her in the toilet pit for weeks. ",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "She grew terribly ill in there, nearly caught her death. They allowed her to recover only so they " +
                "could use her body for their twisted purpose. After nearly two years of beatings and torture they put " +
                "her though the transformation ritual and impregnation. She was one of the few that was able to carry " +
                "the embryo of Azrael. Fearing what she would bring into this world she induced her own " +
                "abortion. ",
            button: [
                { chatID: 8, text: "...", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "random",
            text: "When they found her with her aborted fetus they tied her to a tree in the swamps to die of exposure " +
                "or dehydration while the mosquitoes fed on her. Luckily the " + sc.n("queen") + " found her and saved her " +
                "from death. Unable to talk and tired from the years of abuse she was on the edge of ending her own life. " +
                "That's when I found her brought her some soup. ",
            button: [
                { chatID: 9, text: "...", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "random",
            text: "It has been a rocky road, but my slave here has found a reason to live as my servant. It " +
                "may not be the story of Sleeping Beauty, but it is how we have chosen to survive our trauma. ",
            button: [
                { chatID: 10, text: "oh wow", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "random",
            text: "Come back anytime to receive a blow job from her. She gets an odd joy from having a dick in her " +
                "mouth. I think it's because she gets the choice to bring pleasure to others. ",
            button: [
                { chatID: -1, text: "Well thanks. ", callback: "bj5" },
            ]
        },
        {
            chatID: 11,
            speaker: "random",
            text: "So you've come back for a blow job? ",
            button: [
                { chatID: -1, text: "Yes I have", callback: "bj2x" },
                { chatID: -1, text: "Nope. Just bored. ", callback: "reset" },
            ]
        },
        {
            chatID: 12,
            speaker: "random",
            text: "She thinks your cum is the sweetest. Feel free to feed my slave anytime.  ",
            button: [
                { chatID: -1, text: "Totally ", callback: "bj2x1" },
            ]
        },
        {
            chatID: 13,
            speaker: "random",
            text: "I can't wait till I'm healed up so I can leave this place.  ",
            button: [
                { chatID: -1, text: "...", callback: "reset" },
            ]
        },
        {
            chatID: 14,
            speaker: "amputee",
            text: "Yeah?",
            button: [
                { chatID: 15, text: "I was just going around talking to people. ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "amputee",
            text: "oh",
            button: [
                { chatID: 16, text: "So.. uh what happened to your legs?", callback: "" },
                { chatID: 17, text: "Hello. How are you?", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "amputee",
            text: "Normally people start a conversation with a 'hello, how are you', but you go straight to my legs. ",
            button: [
                { chatID: 17, text: "Oh. Hello. How are you? ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "amputee",
            text: "Fine. ",
            button: [
                { chatID: 18, text: "Sooooo. About your leg? ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "amputee",
            text: "I've got to go. Maybe I'll find someone that knows how to talk to a guy. ",
            button: [
                { chatID: -1, text: "oh. sorry. ", callback: "amputee0" },
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "Hello, How are you.  ",
            button: [
                { chatID: -1, text: "That's so lame. Try again. ", callback: "amputee1" },
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "Nice shoes. Want to fuck?  ",
            button: [
                { chatID: -1, text: "Better. But no. You're not my type. ", callback: "amputee2" },
            ]
        },
        {
            chatID: 21,
            speaker: "me",
            text: "I have no idea what to say. ",
            button: [
                { chatID: 22, text: "...", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "amputee",
            text: "You're persistent. I guess you want to know what happened to my legs. ",
            button: [
                { chatID: 23, text: "I sure do. ", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "amputee",
            text: "It's funny, before the cult crushed my legs no one would just come up to me and talk to me. " +
                "Now that my legs are all fucked up that's all everyone wants to talk about. Did you know I was " +
                "a wilderness guide and survival expert? I've trained hundreds of people who to get out of " +
                "difficult situations in the forest with nothing but a knife. ",
            button: [
                { chatID: 24, text: "I didn't know that. ", callback: "" },
            ]
        },
        {
            chatID: 24,
            speaker: "amputee",
            text: "Of course you didn't, because you were so fixated on my legs. No one wants a wilderness guide " +
                "that can't even walk. The cult may have given me a great set of tits, but they took away my " +
                "purpose. ",
            button: [
                { chatID: 25, text: "Can't you get a prosthetic? ", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "amputee",
            text: "You know what's better than a prosthetic leg? My real leg. This place is stupid. The cult is " +
                "stupid. I'm done talking. Once my other leg is healed up I plan on getting out of here and " +
                "hiding in the forest. so I don't have to have stupid conversations with people. ",
            button: [
                { chatID: -1, text: "Oh. Ouch", callback: "amputee3" },
            ]
        },
        {
            chatID: 26,
            speaker: "!ledja",
            text: "Hi you. ",
            button: [
                { chatID: 27, text: "So what are you doing way up here?", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "!ledja",
            text: "Just waiting till night time. What are you doing way up here? ",
            button: [
                { chatID: 28, text: "I came to visit you. ", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "!ledja",
            text: "Smooth. You just may be what I'm looking for. Are you an obedient sissy? ",
            button: [
                { chatID: 30, text: "I am very submissive. ", callback: "" },
                { chatID: 29, text: "Nope! I'm always the boss! ", callback: "" },
                { chatID: 31, text: "I am a true obedient sissy. ", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "!ledja",
            text: "I guess I was wrong about you. ",
            button: [
                { chatID: -1, text: "Oh... ", callback: "reset" },
            ]
        },
        {
            chatID: 30,
            speaker: "!ledja",
            text: "That's not what I asked.  ",
            button: [
                { chatID: -1, text: "Oh... ", callback: "reset" },
            ]
        },
        {
            chatID: 31,
            speaker: "!ledja",
            text: "Say I am an obedient fuck slut that will do anything anyone tells me. I only live to serve " +
                "my superiors and their pleasure is what I live for.  ",
            button: [
                { chatID: 30, text: "huh... ", callback: "" },
                { chatID: 32, text: "I am an obedient fuck slut that will do anything anyone tells me. I only live to serve " +
                "my superiors and their pleasure is what I live for.", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "!ledja",
            text: "Good! Meet me here at night, but before midnight. ",
            button: [
                { chatID: -1, text: "I'll be there! ", callback: "reset_0" },
            ]
        },
        {
            chatID: 33,
            speaker: "me",
            text: "Hi. I wanted to ask you about how you got here. ",
            button: [
                { chatID: 34, text: "...", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "!girl",
            text: "Strip down to your panties and get up here and dance bitch!",
            button: [
                { chatID: 35, text: "I don't know. I'm not that good of a dancer..", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "!girl",
            text: "No one cares. We're all terrible. Just get up here and have fun!",
            button: [
                { chatID: 36, text: "Strip down and Go Dance!", callback: "dance1" },
                { chatID: -1, text: "Maybe next time", callback: "reset" },
            ]
        },
        {
            chatID: 36,
            speaker: "!girl",
            text: "Isn't this better than walking around! Wooo! In here you can just have fun, not care " +
                "about all the stupid of out there! Woooo hooo!",
            button: [
                { chatID: -1, text: "So much fun!", callback: "reset" },
            ]
        },
        {
            chatID: 37,
            speaker: "random",
            text: "Hey stranger! I'd ask for a blow job, but it's going to take me a few minutes to get it " +
                "hard again!",
            button: [
                { chatID: 38, text: "Oh, no, I was just..", callback: "bj1" }
            ]
        },
        {
            chatID: 38,
            speaker: "random",
            text: "Oh! Do you want your pussy licked? I don't do that, but my slave does! Slave eat her pussy!",
            button: [
                { chatID: 39, text: "Well ok! ", callback: "bj2_v" },
                { chatID: 5, text: "I'm just here to ask some questions. ", callback: "bj0" },
            ]
        },
        {
            chatID: 39,
            speaker: "random",
            text: "You're going to love her tongue. ",
            button: [
                { chatID: 40, text: "MMmmmm", callback: "bj3_v" },
            ]
        },
        {
            chatID: 40,
            speaker: "random",
            text: "Feel her tongue flicking under your hood, right into your clit? Really soft and playful. Hard to hold " +
                "back with her crazy tongue flicking action. ",
            button: [
                { chatID: 41, text: "OOooohhhh fffffff", callback: "bj4_v" },
            ]
        },
        {
            chatID: 41,
            speaker: "random",
            text: "She was so terrible when she got here. I had to hold her by her ears and correct years of bad " +
                "training. But as you can see with your girl cum running down her throat, she has nearly perfected the " +
                "oral. ",
            button: [
                { chatID: 5, text: "Oh Yeah!", callback: "bj0_v" },
            ]
        },
        {
            chatID: 42,
            speaker: "random",
            text: "Hey stranger! I'd ask for a blow job, but it's going to take me a few minutes to get it " +
                "hard again! Do you want a blowie? ",
            button: [
                { chatID: 43, text: "Well ok! ", callback: "" },
                { chatID: 5, text: "I'm just here to ask some questions. ", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "random",
            text: "You're wearing a chastity cage silly! She can't blow you! ",
            button: [
                { chatID: 5, text: "Oh duh. Do you mind if I ask some questions? ", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "random",
            text: "So you've come back for a pussy lick? ",
            button: [
                { chatID: -1, text: "Yes I have", callback: "bj2x" },
                { chatID: -1, text: "Nope. Just bored. ", callback: "reset" },
            ]
        },
        {
            chatID: 45,
            speaker: "random",
            text: "I'm getting a blowie. Come back when you're not wearing that dumb cage!",
            button: [
                { chatID: -1, text: "Well ok! ", callback: "reset" }
            ]
        },
        {
            chatID: 46,
            speaker: "!ledja",
            text: "Follow me down the path obedient fuck slut that will do anything " +
                "anyone tells you to do?",
            button: [
                { chatID: -1, text: "Follow her", callback: "ledge1" }
            ]
        },
        {
            chatID: 47,
            speaker: "me",
            text: "So where does this lead? ",
            button: [
                { chatID: 48, text: "...", callback: "" }
            ]
        },
        {
            chatID: 48,
            speaker: "!ledja",
            text: "Obedient fuck sluts don't talk, they just do. ",
            button: [
                { chatID: 50, text: "oh.", callback: "ledge2" }
            ]
        },
        {
            chatID: 49,
            speaker: "!ledja",
            text: "Welcome back fuck hole! ",
            button: [
                { chatID: 999, text: "oh.", callback: "ledge2" }
            ]
        },
        {
            chatID: 50,
            speaker: "ff",
            text: "Well well well. " + sc.n("!ledja") + ", you brought someone to replace you. This " +
                "replacement will do nicely. Per our agreement you're free to go. Remember, one word to " +
                "anyone and you'll be back in the dungeons of the cult. Now scat! ",
            button: [
                { chatID: 51, text: "?", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "!ledja",
            text: "Thank you ma'am! Thank you, thank you, thank you! Not one word from me mistress. Not " +
                "a single word! You'll never hear or see me again. Thank you, thank you! ",
            button: [
                { chatID: 52, text: "W-W-what's going on?", callback: "ledge3" }
            ]
        },
        {
            chatID: 52,
            speaker: "ff",
            text: "I'm " + sc.n("ff") + " and my friends and I now own your ass. You see, for quite some " +
                "time we've known about this little hole filled with run away sissies. The only reason you " +
                "all are still here is because they haven't told " + sc.n("ubel") + " about this place. If " +
                "he knew the entire cult would come down on you and all your sissy friends. And it would be bad. " +
                "Really bad. ",
            button: [
                { chatID: 53, text: "What do you want?", callback: "" }
            ]
        },
        {
            chatID: 53,
            speaker: "ff",
            text: "Simple. We love fucking sissies. Each night you're going to crawl your ass down " +
                "that hole you came through and let us use you however we want. You're going to do it " +
                "every night. If you skip a night we're going to bring hell on earth to your sissy friends. ",
            button: [
                { chatID: 54, text: "For how long? ", callback: "" }
            ]
        },
        {
            chatID: 54,
            speaker: "ff",
            text: "Forever. Or until you trick some other sissy into taking your place. We don't really care " +
                "who we get to fuck, but some sissy ass is going to be plopped down here each night for us. Now " +
                "with that out of the way, it's time to fuck!",
            button: [
                { chatID: 55, text: "*gulp*", callback: "ledge4" }
            ]
        },
        {
            chatID: 55,
            speaker: "ff",
            text: "Get ready for the best night of our lives! Hahaha! ",
            button: [
                { chatID: 56, text: "eeep!", callback: "ledge5" } 
            ]
        },
        {
            chatID: 56,
            speaker: "ff",
            text: "Before we pump your tiny tight holes full of cum you have to get us all hard my " +
                "little fluffer. You better suck us each right or it's going to be pain, bitch! ",
            button: [
                { chatID: -1, text: "*ooof*", callback: "ledge6" } 
            ]
        },
        {
            chatID: 57,
            speaker: "!man",
            text: "Hey bitch! Suck my dick next! Tired of waitin'",
            button: [
                { chatID: -1, text: "*oooww* yeah yeah yeah", callback: "ledge_strike" } 
            ]
        },
        {
            chatID: 58,
            speaker: "!man",
            text: "Hey whore! Suck this dick!!",
            button: [
                { chatID: -1, text: "*oooww* yeah yeah yeah", callback: "ledge_strike" } 
            ]
        },
        {
            chatID: 59,
            speaker: "!man",
            text: "What the fuck! No way you're sucking my dick last! ",
            button: [
                { chatID: 60, text: "*oooww*", callback: "ledge_strike0" } 
            ]
        },
        {
            chatID: 60,
            speaker: "!bwc",
            text: "My dick's gone soft waiting for you! You suck fluffer!  ",
            button: [
                { chatID: 61, text: "*ooof*", callback: "ledge_strike1" } 
            ]
        },
        {
            chatID: 61,
            speaker: "!bbc",
            text: "I'm tired of waiting on you bitches to get your dicks up. Imma fuck this ho",
            button: [
                { chatID: 62, text: "*groan*", callback: "ledge7" } 
            ]
        },
        {
            chatID: 62,
            speaker: "!bwc",
            text: "I'm tired of waitin' too! Imma fuck this bitch's throat! ",
            button: [
                { chatID: 63, text: "*heavy breathing*", callback: "ledge8" } 
            ]
        },
        {
            chatID: 63,
            speaker: "!bbc",
            text: "This bitch stays tight! Fuck I love a white bitch! ",
            button: [
                { chatID: 64, text: "*heavy breathing*", callback: "ledge9" } 
            ]
        },
        {
            chatID: 64,
            speaker: "!bwc",
            text: "I love face fucking bitches like you. Throat is always the tightest hole! ",
            button: [
                { chatID: 65, text: "*glack* *glug*", callback: "ledge10" } 
            ]
        },
        {
            chatID: 65,
            speaker: "!bbc",
            text: "Oh fuck! 'Bout to fill this bitch up! I love fucking cum dumpsters! ",
            button: [
                { chatID: 66, text: "*moan* *glak* *moan*", callback: "ledge11" }
            ]
        },
        {
            chatID: 66,
            speaker: "ff",
            text: "You did good for your first day. We took it easy on you. Really easy. I'll be back " +
                "tomorrow night with more friends. Be sure to be here. You know the last girl, " +
                sc.n("!ledja") + ", served our cocks for over a year before she gave you up. How many " +
                "years are you going to be our little cock slave? ",
            button: [
                { chatID: 67, text: "ugh....", callback: "ledge12" }
            ]
        },
        {
            chatID: 67,
            speaker: "thinking",
            text: "My entire body hurts so much. I don't think I can crawl back to the bedroom. I'm " +
                "in so much pain... So full of cum and spit... so tired....",
            button: [
                { chatID: -1, text: "ugh....", callback: "ledge13" }
            ]
        },
        {
            chatID: 68,
            speaker: "thinking",
            text: "Last night was brutal. I don't even know if I can walk out of here. Maybe I'll just lay " +
                "in this bed all day and rest up till they get back and use me again. I guess this is my " +
                "life now. Just lay in bed and get beat and fucked. Hopefully they bring food. I don't know " +
                "if I can survive on cum alone. ",
            button: [
                { chatID: 69, text: "[Lay here for a bit and gather your strength]", callback: "addtime" }
            ]
        },
        {
            chatID: 69,
            speaker: "!jenna",
            text: "Oh my. I didn't even know there was a room here. Are you ok? ",
            button: [
                { chatID: 71, text: "[Tell her what happened]", callback: "" },
                { chatID: 70, text: "[Lie to her and just say you're resting]", callback: "" },
            ]
        },
        {
            chatID: 70,
            speaker: "!jenna",
            text: "No. There's cum all over the place. Way too much cum for a cave full of sissies. " +
                "Someone else was here. A lot of someones. I may look like a cock obsessed bimbo, but I'm not an " +
                "idiot. What really happened? ",
            button: [
                { chatID: 71, text: "*ugh* Fine! [Tell her what really happened]", callback: "" },
            ]
        },
        {
            chatID: 71,
            speaker: "!jenna",
            text: "Oh no. Stay here, I'll be right back. ",
            button: [
                { chatID: 72, text: "[Lay in a puddle of dried crunchy cum and wait]", callback: "ledge14" },
            ]
        },
        {
            chatID: 72,
            speaker: "queen",
            text: sc.n("!jenna") + " told me everything on the way down here. This is most troubling. " +
                "You really can't stay here. I don't trust them not to try something drastic that you " +
                "won't be able to handle. " + sc.n("me") + " follow me back upstairs. " + sc.n("!jenna") +
                " you'll have to take " + gender.pronoun("her") + " place. Stay strong, you'll only be " +
                "stuck here until we can take care of this problem. Just remember to lube up before they come, " +
                "an unlubed hole can be quite painful. ",
            button: [
                { chatID: -1, text: "[Follow the " + sc.n("queen") + " upstairs]", callback: "ledge_end" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(479, room479);
