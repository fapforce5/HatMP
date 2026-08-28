//Room name
var room752 = {};
room752.main = function () {
    if (g.pass === "room752whoreloop" || g.pass === "endSleepyTime") {
        g.pass = null;
        nav.bg("752_whore/sit_" + gender.pronoun("f") + ".webp");
        g.map.list.shift();
        char.addtime(60);
        sc.select("whoreEvent", "193_afternoon/icon_wait.webp", -2);
        g.map.spcounter = 0;
        g.map.counter++;
        return;
    }
    if (!missy.cases[8].complete && !inv.has("locket")) {
        nav.bg("752_whore/bg_locket.jpg");
    }
    var btnList = [
        {
            "type": "btn",
            "name": "whore",
            "left": 676,
            "top": 277,
            "width": 644,
            "height": 729,
            "image": "752_whore/whore.png"
        }
    ];
    var navList = [750, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 752);
    });
    nav.buildnav(navList);
};

room752.btnclick = function (name) {
    switch (name) {
        case "whore":
            var activeCase = missy.activecase();
            if (!activeCase.isComplete && activeCase.caseId === 8) {
                sc.select("whore_dick", "752_whore/whore_dick.png", 0);
                sc.select("whore_chat", "752_whore/whore_chat.png", 1);
                sc.select("whore_locket", "752_whore/whore_locket.png", 2);
                sc.selectCancel("whore_cancel", 3);
            }
            else if (missy.getenvelope("whore").active) {
                chat(31, 752);
            }
            else {
                if (cl.c.cock === 5)
                    sc.select("whore_pussyout", "752_whore/icon_pussy.webp", 0);
                else
                    sc.select("whore_dick", "752_whore/whore_dick.png", 0);
                sc.select("whore_chat", "752_whore/whore_chat.png", 1);
                if (sc.getMission("whore", "*assistant").startedOrComplete) {
                    sc.select("whore_assistant", "752_whore/whore_assistant.webp", 2);
                    sc.selectCancel("whore_cancel", 3);
                }
                else {
                    sc.selectCancel("whore_cancel", 2);
                }
            }
            break;
        case "whore_chat":
            invoker.invokeCurrent("btnclick", "whore_cancel");
            chat(0, 752);
            break;
        case "whore_assistant":
            invoker.invokeCurrent("btnclick", "whore_cancel");
            chat(84, 752);
            break;
        case "whore_cancel":
            nav.killbutton("whore_locket");
            nav.killbutton("whore_dick");
            nav.killbutton("whore_chat");
            nav.killbutton("whore_cancel");
            nav.killbutton("whore_assistant");
            break;
        case "whore_pussyout":
            invoker.invokeCurrent("btnclick", "whore_cancel");
            chat(85, 752);
            break;
        case "whore_dick":
            invoker.invokeCurrent("btnclick", "whore_cancel");
            if (cl.c.chastity !== null)
                chat(1, 752);
            else if (gv.get("money") < 75)
                chat(3, 752);
            else if (gender.isCockTooSmallForSex())
                chat(2, 752);
            else
                chat(4, 752);
            break;
        case "fuck1":
            nav.killbutton("fuck1");
            nav.killbutton("whore");
            nav.bg("752_whore/fuck1.jpg");
            nav.next("fuck2");
            break;
        case "fuck2":
            nav.killbutton("fuck2");
            levels.fuckpussy("whore");
            if (!missy.cases[8].complete)
                nav.bg("752_whore/bg_locket.jpg");
            else
                nav.bg("752_whore/bg.jpg");
            nav.button({
                "type": "btn",
                "name": "whore",
                "left": 676,
                "top": 277,
                "width": 644,
                "height": 729,
                "image": "752_whore/whore1.png"
            }, 752);
            chat(6, 752);
            break;
        case "whore_locket":
            invoker.invokeCurrent("btnclick", "whore_cancel");
            if (missy.get("reusableCaseCounter") === 0)
                chat(7, 752);
            else
                chat(16, 752);
            break;
        case "charisma_win":
            levels.mod("charisma", 25);
            chat(12, 752);
            break;
        case "charisma_lose":
            levels.mod("charisma", 15);
            missy.set("reusableCaseCounter", 1);
            chat(15, 752);
            break;
        case "whoreEvent":
            nav.killall();
            if (g.map.list.length === 0 || g.diffDateByMinutes(g.dt, g.map.startTime) > 1440) {
                nav.kill();
                nav.bg("752_whore/whore_wait.webp");
                zcl.bellydown(500, 400, .5, "back", true);
                if (missy.getenvelope("whore").active) {
                    if (missy.getenvelope("whore").hasKey) {
                        chat(80, 752);
                    }
                    else {
                        gv.mod("money", 500);
                        chat(81, 752);
                    }
                    sc.show("whore");
                    sc.startMission("whore", "*assistant");
                    sc.completeMissionTask("whore", "*assistant", 0);
                    missy.setenvelope("whore");
                }
                else {
                    gv.mod("money", 500);
                    chat(83, 752);
                }
            }
            else if (g.hourBetween(7, 22)) {
                if (g.map.list[0].event === "wait") {
                    nav.kill();
                    nav.bg("752_whore/whore_wait.webp");
                    zcl.bellydown(500, 400, .5, "back", true);
                    chat(600, 752);
                }
                else if (g.map.list[0].event === "pee") {
                    nav.bg("752_whore/sit_" + gender.pronoun("f") + ".webp");
                    chat(48, 752);
                }
                else if (g.map.list[0].event === "oral") {
                    nav.kill();
                    nav.bg("752_whore/sit_" + gender.pronoun("f") + ".webp");
                    nav.button({
                        "type": "img",
                        "name": "john",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "752_whore/whore_p_fat.webp"
                    }, 752);
                    chat(71, 752);
                }
                else {
                    nav.bg("752_whore/sit_" + gender.pronoun("f") + ".webp");
                    nav.button({
                        "type": "img",
                        "name": "john",
                        "left": 0,
                        "top": 0,
                        "width": 1920,
                        "height": 1080,
                        "image": "752_whore/whore_p_" + g.map.list[0].n.replaceAll("!", "") + ".webp"
                    }, 752);
                    chat(999, 752);
                }
            }
            else {
                nav.kill();
                nav.bg("752_whore/whore_wait.webp");
                zcl.bellydown(500, 400, .5, "back", true);
                chat(79, 752);
            }
            break;
        case "fluf_stroke":
            if (g.map.spcounter === 0) {
                nav.bg("752_whore/whore_handbg_shock.webp");
                nav.button({
                    "type": "img",
                    "name": "fluf_text",
                    "left": 425,
                    "top": 10,
                    "width": 354,
                    "height": 175,
                    "image": "752_whore/whore_hand_text.webp"
                }, 752);
            }
            else if (g.map.spcounter === 1) {
                nav.kill();
                nav.bg("752_whore/whore_handbg_mad.webp");
                zcl.handjob(0, 400, .72, "cum", false, g.map.list[0].c);
                cl.c.cumface = true;
                cl.display();
                nav.next("fluf_stroke");
            }
            else {
                nav.kill();
                nav.bg("752_whore/whore_angry.webp");
                chat(52, 752);
            }
            g.map.spcounter++;
            break;
        case "fluf_stop":
            nav.killbutton("fluf_stop");
            nav.killbutton("fluf_stroke");
            nav.killbutton("fluf_text");
            if (g.map.list[0].event.includes("vag")) {
                chat(38, 752);
            }
            else if (g.map.list[0].event.includes("anal")) {
                chat(69, 752);
            }
            break;
        case "whore_charwin":
            chat(43, 752);
            break;
        case "whore_charlose":
            chat(32, 752);
            break;
        case "whore_pee":
            switch (g.map.spcounter) {
                case 0:
                    nav.bg("752_whore/whore_pee1.webp");
                    nav.killbutton("whore_pee");
                    nav.custom("whore_pee", "swallow");
                    break;
                case 1:
                    nav.bg("752_whore/whore_pee2.webp");
                    nav.killbutton("whore_pee")
                    chat(51, 752);
                    break;
            }
            g.map.spcounter++;
            break;
        default:
            break;
    }
};

room752.chatcatch = function (callback) {
    switch (callback) {
        case "hand2":
        case "hand3":
        case "whore_pussydrip1":
            nav.bg("752_whore/" + callback + ".webp");
            break;
        case "whore_pussydrip":
        case "whore_analdrip":
            nav.kill();
            nav.bg("752_whore/" + callback + ".webp");
            break;
        case "whore_pussydrip2":
            nav.kill();
            levels.swallowCum("m", g.map.list[0].n);
            levels.oral(3, "f", "whore");
            nav.bg("752_whore/" + callback + ".webp");
            break;
        case "whore_analdrip2":
            nav.kill();
            levels.oralass("f", "whore");
            levels.swallowCum("m", g.map.list[0].n);
            nav.bg("752_whore/" + callback + ".webp");
            break;
        case "whore_analdrip1":
            nav.bg("752_whore/" + callback + ".webp");
            zcl.bj(0, 600, 1.2, "bj", false);
            nav.button({
                "type": "img",
                "name": "whoreanal",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_analdrip1fg.webp"
            }, 752);
            break;
        case "reset":
            char.room(752);
            break;
        case "fuck":
            gv.mod("money", -75);
            break;
        case "hj":
            gv.mod("money", -75);
            nav.kill();
            nav.bg("752_whore/hand1.webp");
            break;
        case "fuck0":
            nav.killall();
            nav.bg("752_whore/whore1.gif");
            nav.next("fuck1");
            break;
        case "makeNav":
            setTimeout(function () {
                nav.buildnav([750, 0])
            }, 100);
            break;
        case "pay":
            if (gv.get("money") < 300) {
                missy.set("reusableCaseCounter", 1);
                chat(9, 752);
            }
            else {
                chat(10, 752);
            }
            break;
        case "getlocket":
            levels.mod("pi", 100);
            inv.add("locket");
            missy.set("activeCaseComplete", 1);
            nav.bg("752_whore/bg.jpg");
            break;
        case "getlocketPanties":
            levels.mod("pi", 100);
            inv.add("locket");
            missy.set("activeCaseComplete", 1);
            nav.killall();
            nav.bg("750_homeless/bg.jpg", "750_homeless/bgnight.jpg");
            if (g.internal === "w")
                chat(24, 752);
            else if (g.internal === "missy") {
                if (cl.hasClothing("panties", "w"))
                    chat(25, 752);
                else
                    chat(26, 752);
            }
            else
                chat(27, 752);
            break;
        case "charisma":
            charisma.init(8, "charisma_win", "charisma_lose", 752);
            break;
        case "underwearcheck":
            if (cl.c.panties === null)
                chat(19, 752);
            else
                chat(18, 752);
            break;
        case "fail":
            missy.set("activeCaseComplete", 2);
            nav.killall();
            nav.bg("750_homeless/bg.jpg", "750_homeless/bgnight.jpg");
            break;
        case "leave":
            g.map = null;
            char.room(750);
            break;
        case "leaveundo":
            g.map = null;
            cl.undo();
            char.room(750);
            break;
        case "givePanties":
            g.internal = cl.c.panties;
            var panties = cl.where("panties", cl.c.panties);
            cl.list[panties].inv = false;
            nav.button({
                "type": "img",
                "name": "panties",
                "left": 830,
                "top": 800,
                "width": 220,
                "height": 180,
                "image": "8_wardrobe/icons/" + cl.list[panties].img
            }, 752);
            cl.c.panties = null;
            break;
        case "handEnd":
            levels.gothandjob("f", "whore", false, true);
            char.addtime(15);
            char.room(752);
            break;
        case "setupWhoreCleanup":
            nav.killall();
            cl.nude();
            g.map = {
                startTime: g.dt,
                counter: 0,
                spcounter: 0,
                color: "w",
                name: "",
                list:
                    [
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "wait", n: "", c: "" },
                        { complete: false, event: "fluff anal", n: "!man", c: "sw" },
                        { complete: false, event: "fluff anal", n: "!bbc", c: "b" },
                        { complete: false, event: "fluff anal", n: "!man", c: "sw" },
                        { complete: false, event: "fluff anal", n: "!bbc", c: "b" },
                        { complete: false, event: "oral", n: "fat", c: "w" },
                        { complete: false, event: "fluff vag", n: "!bbc", c: "b" },
                        { complete: false, event: "fluff vag", n: "!bwc", c: "w" },
                        { complete: false, event: "vag", n: "!bbc", c: "" },
                        { complete: false, event: "vag", n: "!bwc", c: "" },
                        { complete: false, event: "vag", n: "!bbc", c: "" },
                        { complete: false, event: "vag", n: "!bwc", c: "" },
                        { complete: false, event: "vag", n: "!bbc", c: "" },
                        { complete: false, event: "vag", n: "!bwc", c: "" },
                        { complete: false, event: "anal", n: "!bwc", c: "w" },
                        { complete: false, event: "anal", n: "!bbc", c: "b" },
                        { complete: false, event: "anal", n: "!bwc", c: "w" },
                        { complete: false, event: "anal", n: "!bbc", c: "b" },
                    ]
            };
            if (sissy.st[10].ach) {
                g.map.list.push({ complete: false, event: "pissass", n: "philbert", c: "w" });
            }

            if (levels.get("piss").l > 3) {
                g.map.list.push({ complete: false, event: "pee", n: "", c: "" });
                g.map.list.push({ complete: false, event: "pee", n: "", c: "" });
                g.map.list.push({ complete: false, event: "pee", n: "", c: "" });
            }
            else {
                g.map.list.push({ complete: false, event: "wait", n: "", c: "" });
                g.map.list.push({ complete: false, event: "wait", n: "", c: "" });
                g.map.list.push({ complete: false, event: "wait", n: "", c: "" });
            }
            
            g.shuffleArray(g.map.list);
            g.shuffleArray(g.map.list);
            g.shuffleArray(g.map.list);
            g.map.list.unshift({ complete: false, event: "wait", n: "", c: "" });
            g.map.list.unshift({ complete: false, event: "wait", n: "", c: "" });
            g.pass = "room752whoreloop";
            char.room(752);
            break;
        case "home":
            g.pass = 10;
            char.room(8);
            break;
        case "fluffer":
            nav.kill();
            nav.bg("752_whore/whore_handbg.webp");
            g.map.spcounter = 0;
            zcl.handjob(0, 400, .72, "stroke", false, g.map.list[0].c);
            levels.gavehandjob("m", g.map.list[0].n);
            sc.select("fluf_stroke", "752_whore/icon_stroke.webp", 0);
            sc.select("fluf_stop", "752_whore/icon_guide.webp", 1);
            break;
        case "whore_sex":
            nav.kill();
            nav.bg("752_whore/whore_sex_bg_" + gender.pronoun("f") + ".webp");
            nav.button({
                "type": "img",
                "name": "whoresex",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_sex_fg_" + (g.map.list[0].c === "b" ?  "b" : "w") + ".webp"
            }, 752);
            g.map.list[0].spcounter = 0;
            chat(700, 752);
            break;
        case "whore_char":
            charisma.init(18, "whore_charwin", "whore_charlose", 752)
            break;
        case "missy_whore0":
            if (missy.getenvelope("whore").hasKey) {
                chat(46, 752);
            }
            else {
                chat(47, 752);
            }
            missy.setenvelope("whore");
            break;
        case "whore_pee":
            nav.kill();
            nav.bg("752_whore/whore_pee0.webp");
            g.map.spcounter = 0;
            nav.next("whore_pee");
            break;
        case "whore_anal":
            nav.kill();
            nav.bg("752_whore/whore_anal2_" + gender.pronoun("f") + ".webp");
            nav.button({
                "type": "img",
                "name": "whoresex",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_anal2_" + (g.map.list[0].c === "b" ? "b" : "w") + ".webp"
            }, 752);
            break;
        case "resetwhore":
            g.pass = "room752whoreloop";
            char.room(752);
            break;
        case "paythewhore":
            if (gv.get("money") > 399) {
                gv.mod("money", -400);
                chat(53, 752);
            }
            else
                chat(54, 752);
            break;
        case "philbert0":
            nav.kill();
            nav.bg("752_whore/bg.jpg");
            zcl.bent(500, 500, .4, "", false);
            nav.button({
                "type": "img",
                "name": "philbertpiss",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_philbert0.webp"
            }, 752);
            break;
        case "philbert1":
            levels.piss(false, true, false, "m", "philbert");
            nav.modbutton("philbertpiss", "752_whore/whore_philbert1.webp", null, null);
            break;
        case "philbert1.5":
            if (cl.c.cock === 5) {
                chat(65, 752);
            }
            else {
                chat(62, 752);
            }
            break;
        case "philbert2":
            nav.kill();
            nav.bg("752_whore/whore_philbert2.webp");
            zcl.amazon(100, 400, .8, "open", false);
            nav.button({
                "type": "img",
                "name": "philbertpiss",
                "left": 695,
                "top": 517,
                "width": 674,
                "height": 563,
                "image": "752_whore/whore_philbert2_fg.webp"
            }, 752);
            break;
        case "philbert3":
            nav.bg("752_whore/whore_philbert3.webp");
            break;
        case "philbert4":
            nav.kill();
            nav.bg("752_whore/whore_philbert4.webp");
            zcl.sissygasm(0, 200, .8, "pussy", false);
            if (cl.c.cock === 5)
                levels.fuckedinpussy(true, "m", true, "philbert");
            else
                levels.anal(3, true, "m", true, "philbert");
            break;
        case "philbert5":
            nav.kill();
            nav.bg("752_whore/whore_philbert5_bg.webp");
            zcl.double(100, 800, .8, "open", false)
            nav.button({
                "type": "img",
                "name": "philbertpiss",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_philbert5_fg.webp"
            }, 752);
            break;
        case "whore_oral0":
            nav.kill();
            nav.bg("752_whore/whore_wait.webp");
            zcl.bj(400, 500, .5, "open", true);
            nav.button({
                "type": "img",
                "name": "oral",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_oral0.webp"
            }, 752);
            break;
        case "whore_oral1":
            nav.kill();
            zcl.bj(400, 600, .5, "bj", true);
            nav.button({
                "type": "img",
                "name": "oral",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_oral1.webp"
            }, 752);
            break;
        case "whore_oral2":
            nav.kill();
            zcl.bj(400, 600, .5, "w", true);
            nav.button({
                "type": "img",
                "name": "oral",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "752_whore/whore_oral1.webp"
            }, 752);
            levels.oral(2, "m", "!man", true);
            break;
        case "sleep":
            g.pass = 752;
            char.room(28);
            break;
        default:
            break;
    }
};

room752.chat = function (chatID) {
    if (chatID === 999) {
        let chatList999 = null;
        let chatId999 = null;
        if (g.map.list[0].event.includes("anal")) {
            chatList999 = [
                "Hey girl, I came down to nut in dat butt! ",
                "So, uhhh. Could you let me do anal sex with you? ",
                "I have a need to feed that butt my seed!",
                "Can I put my penis in your anus? ",
                "I love big butts, I cannot lie. So bend over and let me fuck that ass, don’t be shy. ",
                "Do you do anal?",
                "I have always wanted to have anal sex. With a woman. ",
                "Please let me bury my balls deep in that ass!"
            ];
        }
        else if (g.map.list[0].event.includes("vag")) {
            chatList999 = [
                "I came for the sex! ",
                "Can I have sex with you? ",
                "You're so hot! I just need to have sex! ",
                "I heard you let men have sex with you. ",
                "I really really want to have sex. With a woman!",
                "I desperately need to lose my virginity. ",
                "Please, baby please. Let me do the thing. "
            ];
        }
        else if (g.map.list[0].event === "pissass") {
            chatList999 = [
                "Hahaha! I always knew you would end up as a whore! "
            ];
            chatId999 = 55;
        }
        else {//oral
            chatList999 = [
                "Can I umm... Could you please do the oral sex with me. "
            ];
            chatId999 = 777;
        }

        if (g.map.list[0].event.includes("fluff"))
            chatId999 = 37;
        else if (g.map.list[0].event === "vag")
            chatId999 = 38;
        else if (g.map.list[0].event === "anal")
            chatId999 = 69;
        else if (chatID === null)
            chatId999 = 777;

        return {
            chatID: 999,
            speaker: g.map.list[0].n,
            text: chatList999[g.rand(0, chatList999.length)],
            button: [
                { chatID: chatId999, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 800) {
        let chatList800 = [
            "Oh yeah, fill mommy's ass up. ",
            "Love the feeling your spermies swim up my ass!",
            "I love feeling your penis pulse in my asshole. ",
            "OOOooo. So much cum! ",
            "Wow! I've never had a man cum so much in my ass. ",
            "Oh baby, my ass is hurtin' from that squirtin'! ",
            "I love feeling you fill my ass with your cum. "
        ];
        return {
            chatID: 800,
            speaker: "whore",
            text: chatList800[g.rand(0, chatList800.length)],
            button: [
                { chatID: 801, text: "...", callback: "whore_analdrip" }
            ]
        };
    }
    else if (chatID === 801) {
        let chatList801 = [
            "I've got a big load of cum for you to clean.",
            "Hehe! He came so much up my ass! ",
            "Such a sloppy mess in my anus. ",
            "Clean my brown eye, my little bitch ",
            "Hehe! Such a big load of cum up my butt. ",
            "Lick that asshole good. ",
        ];
        return {
            chatID: 801,
            speaker: "whore",
            text: chatList801[g.rand(0, chatList801.length)],
            button: [
                { chatID: 41, text: "...", callback: "whore_analdrip1" }
            ]
        };
    }
    else if (chatID === 700) { //pussy
        let chatList700 = [
            "Oh yeah, fill mommy's pussy up. ",
            "You're such a big cummer! ",
            "I love feeling your penis pulse in my pussy. ",
            "OOOooo. So much cum! ",
            "Wow! I've never had a man cum so much in me. ",
            "That was the best sex I've ever had. ",
            "I love feeling your fill my pussy with your cum. "
        ];
        return {
            chatID: 700,
            speaker: "whore",
            text: chatList700[g.rand(0, chatList700.length)],
            button: [
                { chatID: 701, text: "...", callback: "whore_pussydrip" }
            ]
        };
    }
    else if (chatID === 701) {
        let chatList701 = [
            "I've got a big load of cum for you to clean.",
            "Hehe! He came so much in me! ",
            "Such a sloppy mess in my pussy. ",
            "Clean my twat my little bitch ",
            "Clean up time! ",
            "Lick it good. ",
        ];
        return {
            chatID: 700,
            speaker: "whore",
            text: chatList701[g.rand(0, chatList701.length)],
            button: [
                { chatID: 39, text: "...", callback: "whore_pussydrip1" }
            ]
        };
    }
    if (chatID === 600) {
        let chatList600 = [
            "*sigh* I need a TV. ",
            "I always hated doing anal, but stretching really helps, and they always pay more! ",
            "Why is it guys always want to fuck a whore in her asshole? A hole's a hole, right! ",
            "If I only had to eat one food for the rest of my life it would be light crispy pastries. I do love a pastry. ",
            "I do like having another " + gender.pronoun("girl") + " around. Makes me feel safer. ",
            "You know " + sc.n("ubel") + "'s crazy. I was giving him a hand job and he just pisses in my face and kicks my cunt. Stay away from that bastard! ",
            "I heard " + sc.n("bigguy") + "'s fucking your " + sc.n("landlord") + ". I don't know what she sees in him. She could do so much better. ",
            "That " + sc.n("priest") + " is really a pervy guy. I'm surprised so many people visit his church. You know he licked my asshole for an hour straight and said he would never fuck a whore. Strange man, but pays well. ",
            "You know " + sc.n("river") + "'s really obsessed with you. He paid me extra for anal and called me " + sc.n("me") + " the entire time. You two would make a great couple, hehe.",
            "My favorite customer is, by far, " + sc.n("jeffery") + ". He pays so much for my dirty panties and doesn't even want sex. I wish all men were like him. ",
            "That ranch hand, " + sc.n("!rancher1") + " is such a cheater. His wife must hate him since he comes by so much. ",
            "I think " + sc.n("!rex") + ", the owner of the club, is secretly gay. He just asked me to finger his butt while he jacked off. Kinda gross, but easy money. ",
            "I met the cutest guy the other day, " + sc.n("!doofus") + ". So sweet. If I was younger I would totally date him. ",
            "I told one guy I don’t do kissing and he looked personally offended. Like, sir, this is a transaction, not a date.",
            "I swear if one more guy asks me to call him ‘daddy’ while I’m on all fours, I’m raising my rates.",
            "My back is killing me. These guys act like I’m made of rubber sometimes.",
            "You ever notice how the ones who tip the least always want the most freaky shit? Like, pick a struggle.",
            "Why do they always want to talk about their problems after they finish? I’m not a therapist, I’m a whore.",
            "That " + sc.n("kei") + " keeps coming back every Tuesday. Same routine, same weird little noises. At least he’s consistent.",
            "I don’t mind the anal as much as I used to, but the ones who try to skip the lube? Absolute psychopaths.",
            "Some nights I wonder if I should’ve just stayed a waitress. Then I remember the tips and shut up.",
            "I had a guy last night who wanted me to roleplay being his ex. He cried the whole time. Still paid full price though.",
            "My favorite part of the job? When they leave. Closely followed by counting the cash."
        ];
        return {
            chatID: 600,
            speaker: "whore",
            text: chatList600[g.rand(0, chatList600.length)],
            button: [
                { chatID: -1, text: "...", callback: "resetwhore" }
            ]
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "whore",
            text: "So are you the pizza delivery man, or did you come fill my pussy up with your cum? ",
            button: [
                { chatID: -1, text: "Oh uhh, hahaha", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "whore",
            text: "Look. I'm a whore, not a therapist. I'm not going to talk about your dick being all locked up. If you want " +
                "to fuck, take that thing off and come back. ",
            button: [
                { chatID: -1, text: "Oh uhh, hahaha", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "whore",
            text: "Look. I know I'm a big girl. There's no way that tiny little pecker is going to be able to reach inside me. " +
                "I guess I can give you a hand job if you want. It's still going to be $75 though. ",
            button: [
                { chatID: 28, text: "Fuck yeah! Here's $75", callback: "hj" },
                { chatID: -1, text: "Oh. I changed my mind. ", callback: "reset" }
            ]
        },
        {
            chatID: 3,
            speaker: "whore",
            text: "Sure. I'll fuck you. $75. ",
            button: [
                { chatID: -1, text: "Oh. I don't have enough money. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "whore",
            text: "Oh yes. I love your cock. I need it deep in my wet horny pussy. Please baby feed me your dick. It'll cost " +
                "$75 to make me scream your name. ",
            button: [
                { chatID: 5, text: "Fuck yeah! Here's $75", callback: "fuck" },
                { chatID: -1, text: "Oh. I changed my mind. ", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "whore",
            text: "Strip off those clothes baby and lay down. I'm going to make you feel really good. ",
            button: [
                { chatID: -1, text: "[Strip and lay down]", callback: "fuck0" }
            ]
        },
        {
            chatID: 6,
            speaker: "whore",
            text: "Hahaha. Look at my happy pussy. Come back anytime you need those balls drained! I love being filled with cum. ",
            button: [
                { chatID: -1, text: "For sure!", callback: "makeNav" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "Hi. That really is a nice looking locket on your table. ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "whore",
            text: "I fucking hate that thing. It's so stupid. You can have it for $300. It's what my client owes me. ",
            button: [
                { chatID: -1, text: "Pay her $300", callback: "pay" },
                { chatID: 11, text: "Talk her into getting it cheaper. " + charisma.getStats(8).txt, callback: "" },
                { chatID: 17, text: "I don't have that much money. Is there something else I could do?", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "whore",
            text: "If there's one thing a whore knows, it's money. This isn't $300. ",
            button: [
                { chatID: -1, text: "Crap. My mistake. ", callback: "reset" },
            ]
        },
        {
            chatID: 10,
            speaker: "whore",
            text: "Cool. Here's your locket. If you have any more money you can fuck my pussy. I'll make you cum so good your balls " +
                "will shrink! ",
            button: [
                { chatID: -1, text: "Oh yeah. I want tiny balls. ", callback: "getlocket" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "To be honest that locket is my dear departed grandmother's. It was taken from me by this terrible dirty " +
                "old man. When I went to get it back he punched me in my face and told me it was here. I want nothing else " +
                "than to get it back to keep her memory. ",
            button: [
                { chatID: -1, text: "[Roll for charisma]", callback: "charisma" },
            ]
        },
        {
            chatID: 12,
            speaker: "whore",
            text: "That sounds like the asshole I got it from. What a piece of shit he was! Let me tell you something, that " +
                "man came in here and asked for anal. I told him I don't do that. Hurts too much, ya know. Also since I live in " +
                "a tent I can't keep it clean and I don't want shit all over. So I just don't do it. ",
            button: [
                { chatID: 13, text: "...", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "whore",
            text: "So he says, how about for $500. I said no, but offered this locket too. I figure I could give it to a friend of " +
                "mine that was looking for something like that, so I said ok, just be gentle. So he just shoves it in! I told him " +
                "to pull it out, 'cause it hurt too much, but he laughs and says I need to stretch, so he jams his whole ass hand " +
                "up my ass. Really rips me in half, ya know. I scream and Dale comes running over. Dale's a really cool guy. He " +
                "reaches in his pocket and throws sand in his eyes and kicks him out. Told him if he catches him here again he'll " +
                "kill him. ",
            button: [
                { chatID: 14, text: "wow", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "whore",
            text: "Yeah. I told Dale I'll give him freebies anytime he wants, but he said he doesn't put his sperm anywhere " +
                "so the government can't track him or something. But yeah. You can have the locket. Just don't give it back to " +
                "him. Fuck that guy! ",
            button: [
                { chatID: -1, text: "I will and thanks so much!", callback: "getlocket" },
            ]
        },
        {
            chatID: 15,
            speaker: "whore",
            text: "No one gets lied to more than a whore. I can smell shit from a mile away. Don't fucking lie to me! ",
            button: [
                { chatID: -1, text: "Oh, sorry ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "whore",
            text: "Since you already fucking lied to me. I don't think I want to give you this locket for any amount of money. ",
            button: [
                { chatID: 17, text: "Isn't there something I could do? ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "whore",
            text: "I'll tell you what. I'll give you one chance to get this locket. Give me the underwear you have on right now " +
                "and I'll give you the locket. This is a one time deal. I know you're wearing your favorite pair and I don't want " +
                "you to go changing them on me. Underwear or nothing! ",
            button: [
                { chatID: 18, text: "My underwear? ", callback: "underwearcheck" },
            ]
        },
        {
            chatID: 18,
            speaker: "whore",
            text: "Yeah. I have a real freak of a client that comes in and buys my panties. The dirtier the better, and I'm totally " +
                "out of panties. So give me yours or no deal! ",
            button: [
                { chatID: 23, text: "Fine. Here's my underwear", callback: "givePanties" },
                { chatID: 20, text: "I'm not giving you my underwear!", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "whore",
            text: "Yeah. I have a real freak of a client that comes in and buys my panties. The dirtier the better, and I'm totally " +
                "out of panties. So gimmie yours or no deal! ",
            button: [
                { chatID: 20, text: "I'm not wearing underwear. ", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "whore",
            text: "Fine! Then you're never going to get this locket. You can fuck right off.  ",
            button: [
                { chatID: 21, text: "Awww crap. Isn't there anything I could do? ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "whore",
            text: "No! I said to fuck off. Get out of my tent loser!  ",
            button: [
                { chatID: 22, text: "Crap crap crap", callback: "fail" },
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Oh fuck. I really fucked that up! Now I have to go back and tell Missy I failed. That's going to be the " +
                "worst part. She's going to be totally pissed. I guess I get to keep my panties, but was it worth it?",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 23,
            speaker: "whore",
            text: "Sweet! The guy is a real pervert, but he pays well and is one of my regulars. Here's your locket. ",
            button: [
                { chatID: -1, text: "Thanks. See ya", callback: "getlocketPanties" },
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "Fuck! I lost " + sc.n("lola") + "'s panties! Even worse some guy is going to be sniffing them and jacking off " +
                "into her panties. I better get home and put on some new underwear. I know it's wrong, but maybe I could steal " +
                "another pair of her panties. But this time I won't give them away. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "Fuck! I lost Missy's panties! Even worse some guy is going to be sniffing them and jacking off " +
                "into her panties. I better get home and put on some new underwear. I know it's wrong, but maybe I could steal " +
                "another pair of her panties. But this time I won't give them away. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "Fuck! I lost Missy's panties! Even worse some guy is going to be sniffing them and jacking off " +
                "into her panties. Maybe I can replace them by stealing a pair of panties from " + sc.n("lola") + ". " +
                "I think I'll check her dirty laundry. I better get home and put on some new underwear. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
        {
            chatID: 27,
            speaker: "thinking",
            text: "Some dude's going to be sniffing and jacking off into my underwear. That's pretty gross.  " +
                "I better get home and put on some new underwear. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
        {
            chatID: 28,
            speaker: "whore",
            text: "Hehe. I've never seen a penis so small. I didn't think they got so tiny. Must be really " +
                "sad to be you knowing no girl would ever touch it without you paying them. ",
            button: [
                { chatID: 29, text: "mmmhmmm", callback: "hand2" },
            ]
        },
        {
            chatID: 29,
            speaker: "whore",
            text: "I can only use one finger to jack you off it's so tiny. Does it even make cum?",
            button: [
                { chatID: 30, text: "mmmMmm keep going", callback: "hand3" },
            ]
        },
        {
            chatID: 30,
            speaker: "whore",
            text: "Oh. That's all the cum it makes? I guess a tiny penis makes tiny cum. Better that way " +
                "since no one wants your cum hehe. ",
            button: [
                { chatID: -1, text: "awww so good!", callback: "handEnd" },
            ]
        },
        {
            chatID: 31,
            speaker: "whore",
            text: "So you wanna fuck or what? ",
            button: [
                { chatID: -1, text: "Sweet talk her " + charisma.getStats(18).txt, callback: "whore_char" },
                { chatID: 32, text: "Just be blunt", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "me",
            text: "I really just have a request. I need to know the code for the back door to the C.U.M. " +
                "compound, it's really important. Since I know you're a business woman I'm willing to " +
                "pay for it. ",
            button: [
                { chatID: 33, text: "...", callback: "" },
            ]
        },
        {
            chatID: 33,
            speaker: "whore",
            text: "You just think I'm some money hungry whore don't you!",
            button: [
                { chatID: 34, text: "Well, I mean, aren't you? ", callback: "" },
            ]
        },
        {
            chatID: 34,
            speaker: "whore",
            text: "You just think I'm some money hungry whore don't you! Well I am, but more than that I'm " +
                "lazy and I don't care who knows. If you want to find out if I know the code to the back " +
                "door you're going to be my personal assistant. ",
            button: [
                { chatID: 35, text: "Oh. Really. Like have sex with the guys for you? ", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "whore",
            text: "heh, no. You're going to fluff them till they're hard. Clean my holes out when they cum " +
                "in them, and if I have to pee you'll be my personal toilet. I hate wandering outside every " +
                "time I have to pee. Oh. And if my clients ask for anything gross you'll be the one doing it. " +
                "I hate when they want me to do gross things. You have to do it for 1 full day, 24 hours. Deal? ",
            button: [
                { chatID: 36, text: "awww crap. Deal", callback: "" },
                { chatID: -1, text: "Gross! No way! I'm just going to ask someone else!", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "whore",
            text: "Haha! Who's the dumb whore now! Just sit down and face the tent. Don't make a sound " +
                "or do anything unless I ask! One word and no code. ",
            button: [
                { chatID: -1, text: "Ok", callback: "setupWhoreCleanup" },
            ]
        },
        {
            chatID: 37,
            speaker: "whore",
            text: "Oh yes baby. My fluffer's going to get you hard so you can put it in me! Fluffer, " +
                "stroke his cock. ",
            button: [
                { chatID: -1, text: "Right away", callback: "fluffer" },
            ]
        },
        {
            chatID: 38,
            speaker: "whore",
            text: "Oh yeah baby. My pussy is so wet for you! You're my favorite customer. ",
            button: [
                { chatID: -1, text: "...", callback: "whore_sex" },
            ]
        },
        {
            chatID: 39,
            speaker: "whore",
            text: "What a sloppy mess of cum! ",
            button: [
                { chatID: 40, text: "*glug* *slurrrp*", callback: "whore_pussydrip2" },
            ]
        },
        {
            chatID: 40,
            speaker: "whore",
            text: "All clean! Hehe ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "resetwhore" },
            ]
        },
        {
            chatID: 41,
            speaker: "whore",
            text: "Feels so good letting that cum shoot out of my ass! You have a wonderful tongue. ",
            button: [
                { chatID: 42, text: "*glug* *slurrrp*", callback: "whore_analdrip2" },
            ]
        },
        {
            chatID: 42,
            speaker: "whore",
            text: "All clean! Hehe ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "resetwhore" },
            ]
        },
        {
            chatID: 43,
            speaker: "me",
            text: "You know you're looking really hot today, have you lost weight? ",
            button: [
                { chatID: 44, text: "...", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "whore",
            text: "Oh you! If you're lookin' for a freebie you're in for a disappointment.  ",
            button: [
                { chatID: 45, text: "...", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "me",
            text: "I would never ask you for a freebie. You're way too beautiful for that. I just came down " +
                "to ask you if you know the code to get in the back door of the C.U.M. compound. There's some asshole " +
                "that raped my ass that I need to get back at. I'm going to sneak in and teach him a lesson. ",
            button: [
                { chatID: -1, text: "...", callback: "missy_whore0" },
            ]
        },
        {
            chatID: 46,
            speaker: "me",
            text: "I hate assholes! The code is 1-2-3-4-5. You go get that bastard! ",
            button: [
                { chatID: -1, text: "I will!", callback: "leave" },
            ]
        },
        {
            chatID: 47,
            speaker: "me",
            text: "I hate those kind of bastards! Sorry I don't know the code or I would give it to you! ",
            button: [
                { chatID: -1, text: "Well, thanks anyways", callback: "leave" },
            ]
        },
        {
            chatID: 48,
            speaker: "whore",
            text: "Ooooo. It's tinkle time!  ",
            button: [
                { chatID: -1, text: "[Slide your open mouth under her pussy]", callback: "whore_pee" },
                { chatID: 49, text: "Gross. You're not peeing my my mouth!", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "whore",
            text: "You be my toilet or we're done! Now get over here!",
            button: [
                { chatID: -1, text: "[Slide your open mouth under her pussy]", callback: "whore_pee" },
                { chatID: 50, text: "Nope! Not doin' it!", callback: "" },
            ]
        },
        {
            chatID: 50,
            speaker: "whore",
            text: "Fine! Deals off! Get out of my tent!",
            button: [
                { chatID: -1, text: "Drat!", callback: "leave" },
            ]
        },
        {
            chatID: 51,
            speaker: "whore",
            text: "Hehe! Love my little toilet! ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "resetwhore" },
            ]
        },
        {
            chatID: 52,
            speaker: "whore",
            text: "You idiot! You were only supposed to fluff him, not jack him off! You just cost me " +
                "$400! Either pay me my $400 or get out! ",
            button: [
                { chatID: -1, text: "Fine [Give her $400]", callback: "paythewhore" },
                { chatID: -1, text: "No way am I paying you to jack off a guy! [Leave]", callback: "leave" },
            ]
        },
        {
            chatID: 53,
            speaker: "whore",
            text: "Easiest $400 I ever made. hehe.",
            button: [
                { chatID: -1, text: "It's 'cause I did all the work. ", callback: "resetwhore" },
            ]
        },
        {
            chatID: 54,
            speaker: "me",
            text: "Crap. I don't have $400. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" },
            ]
        },
        {
            chatID: 55,
            speaker: "me",
            text: sc.n("philbert") + "! ",
            button: [
                { chatID: 56, text: "...", callback: "" },
            ]
        },
        {
            chatID: 56,
            speaker: "whore",
            text: "Do you two know each other? ",
            button: [
                { chatID: 57, text: "...", callback: "" },
            ]
        },
        {
            chatID: 57,
            speaker: "philbert",
            text: "Hahaha! I know this bitch! I only came to get my dick sucked, but this is way better! " +
                "Tell your whore to bend over. I'm gunna piss in her dirty whore ass! ",
            button: [
                { chatID: 58, text: "Gross. no", callback: "" },
            ]
        },
        {
            chatID: 58,
            speaker: "whore",
            text: "This is my tent and you'll bend over for " + sc.n("philbert") + " and spread your hole " +
                "or you can just leave. ",
            button: [
                { chatID: 60, text: "*ugh* Fine!", callback: "philbert0" },
                { chatID: 59, text: "No way! This guy's an asshole! ", callback: "" },
            ]
        },
        {
            chatID: 59,
            speaker: "whore",
            text: "I don't care. All my customers are assholes! Get out of my tent! ",
            button: [
                { chatID: -1, text: "I will. I'm never bending over for him again!", callback: "leave" },
            ]
        },
        {
            chatID: 60,
            speaker: "philbert",
            text: "You'll always be my bitch!  ",
            button: [
                { chatID: 61, text: "*groan*", callback: "philbert1" },
            ]
        },
        {
            chatID: 61,
            speaker: "whore",
            text: "I've never seen an ass get pissed in. You're an even bigger slut than me!",
            button: [
                { chatID: 62, text: "...", callback: "philbert1.5" },
            ]
        },
        {
            chatID: 62,
            speaker: "philbert",
            text: "I need to fuck that pissy asshole! Please " + sc.n("whore") + ", let me fuck that " +
                "pissy asshole! ",
            button: [
                { chatID: 63, text: "wha?", callback: "" },
            ]
        },
        {
            chatID: 63,
            speaker: "whore",
            text: "Since you're both friends, of course. But you pay me, ok. ",
            button: [
                { chatID: 64, text: "No...", callback: "philbert2" },
            ]
        },
        {
            chatID: 64,
            speaker: "philbert",
            text: "Oh god, so good! Hey " + sc.n("whore") + ". Put a finger in my butt. Maybe two. I love " +
                "a finger in my butt when I'm fucking a slut! ",
            button: [
                { chatID: 66, text: "*moan* *pant* *moan*", callback: "philbert3" },
            ]
        },
        {
            chatID: 65,
            speaker: "philbert",
            text: "I heard you got a new pussy! I need to fuck it! I want to feel my piss slosh " +
                "in your ass while I fuck your cunt! Please " + sc.n("whore") + ", let me fuck that " +
                "slut's pussy! ",
            button: [
                { chatID: 63, text: "wha?", callback: "" },
            ]
        },
        {
            chatID: 66,
            speaker: "philbert",
            text: "Fuck yeah! I can't hold it! I'm gunna fill your hole!!! ",
            button: [
                { chatID: 67, text: "Me too!!!!", callback: "philbert4" },
            ]
        },
        {
            chatID: 67,
            speaker: "whore",
            text: "OMG!! You cum girl! Wow! That's so hot! ",
            button: [
                { chatID: 68, text: "uuuggghhh!", callback: "philbert5" },
            ]
        },
        {
            chatID: 68,
            speaker: "philbert",
            text: "I do love slutty whores! ",
            button: [
                { chatID: -1, text: "*mwah*", callback: "resetwhore" },
            ]
        },
        {
            chatID: 69,
            speaker: "whore",
            text: "*sigh* Sure, but it's extra, and use LUBE! ",
            button: [
                { chatID: 70, text: "...", callback: "whore_anal" },
            ]
        },
        {
            chatID: 70,
            speaker: "whore",
            text: "Gentle, I'm an anal virgin! ",
            button: [
                { chatID: 800, text: "...", callback: "" },
            ]
        },
        {
            chatID: 71,
            speaker: "!man",
            text: "Oh, uh, hi. I was wondering if you wouldn't mind.. uh",
            button: [
                { chatID: 72, text: "...", callback: "" },
            ]
        },
        {
            chatID: 72,
            speaker: "whore",
            text: "Oh wow! You smell ripe! Did you take a shower today?",
            button: [
                { chatID: 73, text: "...", callback: "" },
            ]
        },
        {
            chatID: 73,
            speaker: "!man",
            text: "No. Sorry. I just came by on my way back from work for a quick bj. My work doesn't have " +
                "showers. Sorry. Just wanted some quick head before I had to go back to the wife. ",
            button: [
                { chatID: 74, text: "...", callback: "" },
            ]
        },
        {
            chatID: 74,
            speaker: "whore",
            text: "*sigh* I'll tell you what. Next time you come visit you gotta shower at the gym or something, " +
                "but today since I have an assistant whore, " + gender.pronoun("she") + " can suck your dick. Deal? ",
            button: [
                { chatID: 76, text: "*gag* *ugh* Ok. Bring that dick over here so I can suck it.", callback: "whore_oral0" },
                { chatID: 75, text: "I can't. He smells too bad. I'm gagging just sitting here. ", callback: "" },
            ]
        },
        {
            chatID: 75,
            speaker: "whore",
            text: sc.n("me") + ", you suck that dick or the both of you are out of here! ",
            button: [
                { chatID: 76, text: "Fine! Give me that dick. ", callback: "whore_oral0" },
                { chatID: -1, text: "No way! I have more respect for my body than to suck that dirty dick! ", callback: "leave" },
            ]
        },
        {
            chatID: 76,
            speaker: "me",
            text: "*gag* You ready to get your dick sucked mister? *hruk*",
            button: [
                { chatID: 77, text: "[Take his hairy sweaty penis into your mouth]", callback: "whore_oral1" },
            ]
        },
        {
            chatID: 77,
            speaker: "!man",
            text: "Oh yeah. Wow! So much better than my wife! Keep going beautiful! That's the spot! ",
            button: [
                { chatID: 78, text: "[Bob your head on that dick]", callback: "whore_oral2" },
            ]
        },
        {
            chatID: 78,
            speaker: "thinking",
            text: "He totally came down my throat and didn't even warn me. I hate that. It wouldn't be so bad if my " +
                "nose wasn't buried in his musky pubes. At least it's over. ",
            button: [
                { chatID: -1, text: "[Wash his sweat off your face and sit back down]", callback: "resetwhore" },
            ]
        },
        {
            chatID: 79,
            speaker: "whore",
            text: "*yawn* I'm getting sleepy. Let's get some sleep. We'll take some dicks when we wake up. ",
            button: [
                { chatID: -1, text: "*yawn* ok", callback: "sleep" },
            ]
        },
        {
            chatID: 80,
            speaker: "whore",
            text: "Well, I suppose I've tortured you enough. Lucky for you I've overheard " + sc.n("ubel") +
                " talking to one of his Castellans the code. It's 1-2-3-4-5. Be careful. It's crazy in there. ",
            button: [
                { chatID: 82, text: "Sweet! ", callback: "" },
            ]
        },
        {
            chatID: 81,
            speaker: "whore",
            text: "Well, I suppose I've tortured you enough. Sorry I strung you along but I don't know the code. " +
                "I didn't realize what a great " + gender.pronoun("girl") + " you are. I'll tell you " +
                "what, I'll give you $500 as part of my earnings. ",
            button: [
                { chatID: 82, text: "Oh damn!", callback: "" },
            ]
        },
        {
            chatID: 82,
            speaker: "whore",
            text: "You know what. I really like having a friend around when I turn tricks. You can join " +
                "me as my assistant anytime you want! Maybe someday I'll retire and you can take my tent. Hehe!",
            button: [
                { chatID: -1, text: "Yeah. I had fun. ", callback: "leaveundo" },
            ]
        },
        {
            chatID: 83,
            speaker: "whore",
            text: "I really like having a friend around when I turn tricks. Here's your $500. " +
                "Maybe someday I'll retire and you can take my tent. Hehe!",
            button: [
                { chatID: -1, text: "Yeah. I had fun too. ", callback: "leaveundo" },
            ]
        },
        {
            chatID: 84,
            speaker: "whore",
            text: "Want to be my assistant for a day? ",
            button: [
                { chatID: -1, text: "I sure do! ", callback: "setupWhoreCleanup" },
                { chatID: -1, text: "No", callback: "reset" },
            ]
        },
        {
            chatID: 85,
            speaker: "whore",
            text: "*ugh* I don't do chicks. I hate being eaten out, and I don't like the smell of pussy. " +
                "go find someone else. ",
            button: [
                { chatID: -1, text: "oh...", callback: "reset" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(752, room752);
