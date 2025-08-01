//Room name
var room252 = {};

room252.main = function () {
    g.pass = null;
    if (gender.canUseCock()) {
        if (missy.activecase().caseId === 14)
            missy.mod("reusableCaseCounter", 1);
        nav.bg("252_waitress/wait1.jpg");
        zcl.displayMain(50, 950, .17, "panties shirt pants socks shoes bra", false);
        chat(0, 252);
    }
    else {
        if (missy.activecase().caseId === 14)
            missy.mod("reusableCaseCounter", 1);
        g.internal = {
            custList: new Array(),
            isMission: (missy.activecase().caseId === 14),
            taskstep: 0,
            pointer: 0,
            girl: "",
            eventpointer: 0,
            gift: ""
        };
        let custList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13];
        if (sissy.st[0].ach) {
            custList.push(16);
        }
        else {
            custList.push(15);
        }

        if (sissy.st[10].ach) {
            custList.push(11);
        }
        else {
            custList.push(10);
        }

        for (let i = 0; i < 3; i++) {
            let j = g.rand(0, custList.length);
            g.internal.custList.push(custList[j]);
            custList.splice(j, 1);
        }
        room252.btnclick("customer");
    }
};

room252.getspeaker = function () {
    if (g.internal.custList !== undefined) {
        switch (g.internal.custList[g.internal.pointer]) {
            case 1: return "!custbitch";
            case 2: return "jones";
            case 3: return "wyatt";
            case 4: return "spanky";
            case 5: return "!boy";
            case 6: return "!missx";
            case 7: return "!girl";
            case 8: return "!boy";
            case 9: return "!boy";
            case 10: return "!kareem";
            case 11: return "!kareem";
            case 12: return "!boy";
            case 13: return "cecilia";
            case 14: return "!boy";
            case 15: return "!missyguardnight";
            case 16: return "!missyguardnight";
        }
    }
    return "random";
};

room252.btnclick = function (name) {
    switch (name) {
        case "customer":
            char.addtime(90);
            zcl.displayMain(50, 950, .17, "clothes", false);
            nav.bg("252_waitress/wait" + g.internal.custList[g.internal.pointer] + ".jpg");
            chat(999, 252);
            break;
        case "chat":
            char.addtime(30);
            g.internal.pointer++;
            if (g.internal.pointer > 2) {
                gv.mod("energy", -75);
                g.pass = "finishWork";
                char.room(251);
                return;
            }
            nav.killall();
            nav.bg("252_waitress/250_barSide.jpg");
            if (g.internal.isMission) {
                var lev = new Array();
                lev.push({ n: "holly", l: sc.getLevel("holly") });
                lev.push({ n: "dolly", l: sc.getLevel("dolly") });
                lev.push({ n: "molly", l: sc.getLevel("molly") });
                for (let i = lev.length - 1; i >= 0; i--) {
                    if (lev[i].l > 2)
                        lev.splice(i, 1);
                }
                if (lev.length === 0) {
                    levels.mod("pi", 100);
                    nav.bg("252_waitress/allthree.jpg");
                    chat(60, 252);
                }
                else {
                    lev.sort((a, b) => a.l - b.l);
                    room252.btnclick(lev[0].n);
                    return;
                }
            }
            else {
                nav.kill();
                var hollyMadSub = sc.getMission("holly", "happy").fail ? "mad" : "";
                var hollyMadWho;
                switch (g.rand(0, 3)) {
                    case 0: hollyMadWho = "holly"; break;
                    case 1: hollyMadWho = "dolly"; break;
                    case 2: hollyMadWho = "molly"; break;
                }
                nav.bg("252_waitress/" + hollyMadWho + hollyMadSub + ".jpg");
                switch (hollyMadWho) {
                    case "holly":
                        if (hollyMadSub === "mad")
                            chat(501, 252);
                        else
                            chat(500, 252);
                        break;
                    case "dolly":
                        if (hollyMadSub === "mad")
                            chat(511, 252);
                        else
                            chat(510, 252);
                        break;
                    case "molly":
                        if (hollyMadSub === "mad")
                            chat(521, 252);
                        else
                            chat(520, 252);
                        break;
                }
            }
            break;
        case "holly":
            nav.killall();
            nav.bg("252_waitress/holly.jpg");
            g.internal.girl = "holly";
            if (g.internal.isMission) {
                sc.select("hollychat", "252_waitress/icon_chat.png", 10);
                sc.select("gift", "252_waitress/icon_gift.png", 11);
            }
            else {
                room252.btnclick("talk1");
            }
            break;
        case "dolly":
            nav.killall();
            nav.bg("252_waitress/dolly.jpg");
            g.internal.girl = "dolly";
            if (g.internal.isMission) {
                sc.select("dollychat", "252_waitress/icon_chat.png", 10);
                sc.select("gift", "252_waitress/icon_gift.png", 11);
            }
            else {
                room252.btnclick("talk1");
            }
            break;
        case "molly":
            nav.killall();
            nav.bg("252_waitress/molly.jpg");
            g.internal.girl = "molly";
            if (g.internal.isMission) {
                sc.select("mollychat", "252_waitress/icon_chat.png", 10);
                sc.select("gift", "252_waitress/icon_gift.png", 11);
            }
            else {
                room252.btnclick("talk1");
            }
            break;
        case "gift":
            nav.killall();
            var tl = inv.gettype("a");
            var jl = 0;
            for (let i = 0; i < tl.length; i++) {
                if (tl[i].count > 0) {
                    switch (tl[i].name) {
                        case "bouquet": sc.select("gift_bouquet", "252_waitress/icon_bouquet.png", jl); jl++; break;
                        case "roses": sc.select("gift_roses", "252_waitress/icon_roses.png", jl); jl++; break;
                        case "seal": sc.select("gift_seal", "252_waitress/icon_seal.png", jl); jl++; break;
                        case "mug": sc.select("gift_mug", "252_waitress/icon_mug.png", jl); jl++; break;
                        case "whoopee": sc.select("gift_whoopee", "252_waitress/icon_whoopee.png", jl); jl++; break;
                    }
                }
            }
            sc.selectCancel(g.internal.girl, jl);
            break;
        case "hollychat":
            nav.killall();
            switch (sc.taskGetStep("holly", "case")) {
                case -1:
                case 0:
                    sc.modSecret("holly", 100);
                    chat(10, 252);
                    g.internal.taskstep = 0;
                    break;
                case 1:
                    chat(12, 252);
                    g.internal.taskstep = 1;
                    break;
                case 2:
                    chat(16, 252);
                    g.internal.taskstep = 2;
                    break;
            }
            break;
        case "dollychat":
            nav.killall();
            switch (sc.taskGetStep("dolly", "case")) {
                case -1:
                case 0:
                    sc.modSecret("dolly", 100);
                    chat(20, 252);
                    g.internal.taskstep = 0;
                    break;
                case 1:
                    chat(22, 252);
                    g.internal.taskstep = 1;
                    break;
                case 2:
                    chat(50, 252);
                    g.internal.taskstep = 2;
                    break;
            }
            break;
        case "mollychat":
            nav.killall();
            switch (sc.taskGetStep("molly", "case")) {
                case -1:
                case 0:
                    sc.modSecret("molly", 100);
                    chat(29, 252);
                    g.internal.taskstep = 0;
                    break;
                case 1:
                    chat(35, 252);
                    g.internal.taskstep = 1;
                    break;
                case 2:
                    chat(54, 252);
                    g.internal.taskstep = 2;
                    break;
            }
            break;
        case "gift_bouquet":
            nav.killall();
            inv.use("bouquet");
            if (g.internal.girl === "dolly") {
                if (sc.getMissionTask("dolly", "case", 3).complete) {
                    chat(801, 252);
                }
                else {
                    sc.completeMissionTask("dolly", "case", 3);
                    chat(57, 252);
                }
            }
            else {
                g.internal.gift = "bouquet";
                chat(800, 252);
            }
            break;
        case "gift_roses":
            nav.killall();
            inv.use("roses");
            g.internal.gift = "roses";
            chat(800, 252);
            break;
        case "gift_seal":
            nav.killall();
            inv.use("seal");
            if (g.internal.girl === "holly") {
                if (sc.getMissionTask("holly", "case", 3).complete) {
                    chat(801, 252);
                }
                else {
                    sc.completeMissionTask("holly", "case", 3);
                    chat(58, 252);
                }
            }
            else {
                g.internal.gift = "seal";
                chat(800, 252);
            }
            break;
        case "gift_mug":
            nav.killall();
            inv.use("mug");
            g.internal.gift = "mug";
            chat(800, 252);
            break;
        case "gift_whoopee":
            nav.killall();
            inv.use("whoopee");
            if (g.internal.girl === "molly") {
                if (sc.getMissionTask("molly", "case", 3).complete) {
                    chat(801, 252);
                }
                else {
                    sc.completeMissionTask("molly", "case", 3);
                    chat(59, 252);
                }
            }
            else {
                g.internal.gift = "whoopee";
                chat(800, 252);
            }
            break;
        case "jones":
                nav.bg("252_waitress/wait2_" + g.internal.eventpointer + ".jpg");
            if (g.internal.eventpointer === 4) {
                nav.killbutton("jones");
                zcl.displayMain(50, 950, .17, "clothes", false);
                levels.anal(2);
                chat(46, 252);
            }
            g.internal.eventpointer++;
            break;
        case "guard0":
            if (g.internal.eventpointer < 3) {
                nav.bg("252_waitress/wait16_" + g.internal.eventpointer + ".jpg");
            }
            else {
                gv.mod("money", 100);
                levels.anal(4, false, "m", true, "!missyguardnight");
                room252.btnclick("chat");
            }
            g.internal.eventpointer++;
            break;
        case "wait8":
            if (g.internal.eventpointer < 3) {
                nav.bg("252_waitress/wait8_" + g.internal.eventpointer + ".jpg");
            }
            else {
                gv.mod("money", 100);
                levels.oral(3, "m", "!man", true);
                room252.btnclick("chat");
            }
            g.internal.eventpointer++;
            break;
        default:
            break;
    }
};

room252.chatcatch = function (callback) {
    switch (callback) {
        case "cock2":
        case "cock3":
        case "250_beaver":
        case "hollymad":
        case "dollymad":
        case "mollymad":
            nav.bg("252_waitress/" + callback + ".jpg");
            break;
        case "cock0":
            cl.c.panties = null;
            cl.display();
            zcl.displayMain(50, 1000, .17, "panties shirt pants socks shoes bra", false);
            break;
         case "cock1":
            nav.killall();
            nav.bg("252_waitress/" + callback + ".jpg");
            break;
        case "cock4":
            nav.bg("252_waitress/" + callback + ".jpg");
            if (missy.get("chastity") === 0)
                chat(7, 252);
            else {
                chat(8, 252);
            }
            break;
        case "cock5_chastity205":
            cl.c.shirt = "s";
            cl.c.pants = "s";
            cl.c.socks = "b";
            cl.c.shoes = "d";
            cl.c.wig = null;
            cl.display();
            char.room(205);
            break;
        case "cock5_chastity":
            nav.bg("252_waitress/gen3.jpg");
            cl.c.chastity = gv.get("castitycage");
            cl.display();
            char.room(252);
            break;
        case "notip":
            room252.btnclick("chat");
            break;
        case "badtip":
            var badtip = (2 * cl.appearance()) + 3;
            gv.mod("money", g.rand(1, badtip));
            room252.btnclick("chat");
            break;
        case "goodtip":
            var goodtip = (3 * cl.appearance()) + 12;
            gv.mod("money", g.rand(12, goodtip));
            room252.btnclick("chat");
            break;
        case "success":
            sc.modLevel(g.internal.girl, 100, 3);
            sc.completeMissionTask(g.internal.girl, "case", g.internal.taskstep);
            room252.btnclick("customer");
            break;
        case "fail":
            room252.btnclick("customer");
            break;
        case "jones0":
            nav.killall();
            nav.bg("252_waitress/wait2_0.jpg");
            g.internal.eventpointer = 1;
            nav.next("jones");
            break;
        case "toldJonesNo":
            if (sc.getMission("jones", "invite").notStarted) {
                sc.completeMission("jones", "invite", false);
                sc.completeMission("jones", "fail");
                sc.show("jones");
            }
            break;
        case "allSuccess":
            sc.completeMission("holly", "case");
            sc.completeMission("dolly", "case");
            sc.completeMission("molly", "case");
            g.pass = "finishWork";
            char.room(251);
            break;
        case "boy0":
            nav.bg("252_waitress/wait14_0.jpg");
            nav.button({
                "type": "img",
                "name": "boy0",
                "left": 548,
                "top": 0,
                "width": 1231,
                "height": 1080,
                "image": "252_waitress/wait14_0.png"
            }, 200);
            break;
        case "boy1":
            nav.killall();
            gv.mod("energy", -10);
            zcl.displayMain(50, 950, .17, "clothes", false);
            nav.bg("252_waitress/wait14_1.jpg");
            break;
        case "guard0":
            nav.killall();
            g.internal.eventpointer = 1;
            nav.bg("252_waitress/wait16_0.jpg");
            nav.next("guard0");
            break;
        case "wait8":
            nav.killall();
            g.internal.eventpointer = 1;
            nav.bg("252_waitress/wait8_0.jpg");
            nav.next("wait8");
            break;
        case "customer":
            room252.btnclick("customer");
            break;
        default:
            break;
    }
};

room252.chat = function (chatID) {
    let txt, btn, food;
    if (chatID === 999) {
        switch (g.internal.custList[g.internal.pointer]) {
            case 1:
                txt = "About time! If there were more restaurants in town I would go there. Just get me some bacon and eggs!"
                btn = [{ chatID: 998, text: "I uh...", callback: "" }];
                break;
            case 2:
                txt = "I dropped my napkin. Pick it up now. "
                btn = [{ chatID: -1, text: "Sure!", callback: "jones0" },
                { chatID: 998, text: "Get it yourself..", callback: "toldJonesNo" }];
                break;
            case 3:
                txt = "I would like toast. Dry. Also a glass of orange juice, or as they say in places like this; o.j. please and thank you. "
                btn = [{ chatID: 998, text: "Sure!", callback: "" }];
                break;
            case 4:
                if (sc.getMissionTask("envy", "gf", 0).complete) {
                    txt = "*Ugh* you. Wasted perfectly good hypno on you. I'm no longer hungry. Next time send one of the hot girls over.  "
                    btn = [{ chatID: 9, text: "Sure " + sc.n("spanky") + ". ", callback: "250_beaver" }];
                }
                else if (sc.getMissionTask("spanky", "shop", 1).notStarted && sissy.st[21].ach) {
                    sc.completeMissionTask("spanky", "shop", 1);
                    txt = "Oh hey dude, I didn't know you liked to dress like a chick.";
                    btn = [{ chatID: 38, text: "Oh, I had to", callback: "" }];
                }
                else {
                    txt = "It's my favorite dude-ette. get me some of dat pizza bro ";
                    btn = [{ chatID: 998, text: "Sure", callback: "" }];
                }
                break;
            case 5:
                txt = "You're cute! You should do something different with your hair. It " +
                    "doesn't really suit you. Also 1 salad please. ";
                btn = [{ chatID: 998, text: "Sure!", callback: "" }];
                break;
            case 6:
                txt = "Oh wow! Look at you! You would look sexy impaled by my strap-on. " +
                    "I'm too hungry now, but if I see you walking around town I'm going to rip you " +
                    "open sweetie! Now get me a pizza slut. ";
                btn = [{ chatID: 998, text: "Oh ok.", callback: "" }];
                break;
            case 7:
                txt = "Tea please. ";
                btn = [{ chatID: 998, text: "Sure", callback: "" }];
                break;
            case 8:
                if (cl.appearance() > 2) {
                    txt = "Oh wow. Dinner and a show. You're making daddy's cock so hard I don't think I can eat. Tell you what baby girl, why don't you crawl down there and help me out. ";
                    btn = [{ chatID: -1, text: "Oh yeah!", callback: "wait8" },
                    { chatID: 998, text: "No way!", callback: "" }];
                }
                else {
                    txt = "Tea.  ";
                    btn = [{ chatID: 998, text: "Sure", callback: "" }];
                }
                break;
            case 9:
                txt = "Some cheesecake please";
                btn = [{ chatID: 998, text: "You're naked! And we don't have cheesecake! ", callback: "" }];
                break;
            case 10:
                if (sissy.st[0].ach) {
                    txt = "Yo, check it. It's hella trippy seein' folks outside the classroom vibes. I wish I had the swag to rock your fit anywhere, ya know? I'm tryna shed a few pounds, so it's all greens for this dude. ";
                    btn = [{ chatID: 998, text: "Thanks, but I'm kinda being forced to wear this. But you'll get here! ", callback: "" }];
                }
                else {
                    txt = "Just a salad, dawg. Tryna stay lean ";
                    btn = [{ chatID: 998, text: "Sure!", callback: "" }];
                }
                break;
            case 11:
                txt = "Yo, wassup! Didn't expect to see you outside the classroom, lookin' all fly! You clean, for real. We gotta chill sometime, fam. Grab me a big ass pizza. This diet stuff is wack.";
                btn = [{ chatID: 998, text: "Sure! You're looking hot too! Love the purple on you! ", callback: "" }];
                break;
            case 12:
                txt = "Oh hello. Sorry, couldn't stop staring into my lovly wife's eyes. We would both like the hamburger and fries meal. You know we had " +
                    "our first date here back when this was just a simple greasy spoon. Been together for 40 years and " +
                    "loved every minute of it. ";
                btn = [{ chatID: 998, text: "Will do ", callback: "" }];
                break;
            case 13:
                if (sissy.st[0].ach) {
                    txt = "You are one sexy slut! ";
                    btn = [{ chatID: 69, text: "Me? You're the sexy one! ", callback: "" }];
                }
                else {
                    txt = "Wooooo! Love seeing you out and about! ";
                    btn = [{ chatID: 998, text: "Good to see you too!", callback: "cecilia0" }];
                }
                break;
            case 14:
                if (cl.appearance() > 2) {
                    txt = "Oh shit! You're hot! ";
                    btn = [{ chatID: 72, text: "Thanks what will it be?", callback: "boy0" }];
                }
                else {
                    txt = "Pizza";
                    btn = [{ chatID: 998, text: "Sure. ", callback: "" }];
                }
                break;
            case 15:
                txt = "Pizza";
                btn = [{ chatID: 998, text: "Sure. ", callback: "" }];
                break;
            case 16:
                txt = "My cock loves to see you sissies out and about. ";
                btn = [{ chatID: -1, text: "huh? ", callback: "guard0" }];
                break;
        }
        return {
            chatID: 999,
            speaker: room252.getspeaker(),
            text: txt,
            button: btn
        };
    }
    else if (chatID === 998) {
        let salad = { i: "salad.png", x: 50, y: 766, w: 555, h: 176 };
        let tea = { i: "tea.png", x: 181, y: 783, w: 252, h: 106 };
        let burgers = { i: "burgers.png", x: 43, y: 756, w: 588, h: 150 };
        let pizza = { i: "pizza.png", x: 70, y: 811, w: 429, h: 121 };
        let eggs = { i: "eggs.png", x: 219, y: 785, w: 295, h: 153 };
        let toast = { i: "toast.png", x: 21, y: 743, w: 596, h: 233 };


        let txt, btn;
        switch (g.internal.custList[g.internal.pointer]) {
            case 1:
                food = eggs;
                txt = "Ugh! I didn't expect much and I'm still dissapointed. "
                btn = [{ chatID: -1, text: "You're welcome!", callback: "badtip" }];
                break;
            case 2:
                food = tea;
                txt = "Fridged bitch "
                btn = [{ chatID: -1, text: "You're welcome!", callback: "badtip" }];
                break;
            case 3:
                food = toast;
                txt = "Ohhh yummy! Thank you. "
                btn = [{ chatID: -1, text: "You're welcome", callback: "goodtip" }];
                break;
            case 4:
                food = pizza;
                txt = "Fuck yeah! I do love pizza! "
                btn = [{ chatID: -1, text: "You're welcome", callback: "notip" }];
                break;
            case 5:
                food = salad;
                txt = "MMMmmmm leafy greens! ";
                btn = [{ chatID: -1, text: "enjoy", callback: "goodtip" }];
                break;
            case 6:
                food = pizza;
                txt = "Great service. I'm going to make you service my strap! Now go. ";
                btn = [{ chatID: -1, text: "*gasp*", callback: "goodtip" }];
                break;
            case 7:
                food = tea;
                txt = "MMmmm thanks. ";
                btn = [{ chatID: -1, text: "You're welcome", callback: "badtip" }];
                break;
            case 8:
                food = tea;
                if (cl.appearance() > 2) {
                    txt = "I'll drink this tea, but I won't enjoy it. You need to learn your place, baby girl. ";
                    btn = [{ chatID: -1, text: "...", callback: "notip" }];
                }
                else {
                    txt = "...";
                    btn = [{ chatID: -1, text: "...", callback: "badtip" }];
                }
                break;
            case 9:
                food = null;
                txt = "Well I'm not going to eat here! Also those seats are dirty. I can feel the crumbs on my butt!";
                btn = [{ chatID: -1, text: "...ok", callback: "notip" }];
                break;
            case 10:
                food = salad;
                txt = "Thanks bro ";
                btn = [{ chatID: -1, text: "Sure!", callback: "goodtip" }];
                break;
            case 11:
                food = "pizza";
                txt = "Thanks fam! Love eating! ";
                btn = [{ chatID: -1, text: "You're welcome", callback: "goodtip" }];
                break;
            case 12:
                food = burgers;
                txt = "Lovely burgers, but no where near as lovely as my wife. ";
                btn = [{ chatID: -1, text: "She is lovely. ", callback: "goodtip" }];
                break;
            case 13:
                food = burgers;
                txt = "So nice to eat something not in liquid form! Hahaha Thanks";
                btn = [{ chatID: -1, text: "Sure", callback: "goodtip" }];
                break;
            case 14:
                food = pizza;
                txt = "...";
                btn = [{ chatID: -1, text: "....", callback: "badtip" }];
                break;
            case 15:
                food = pizza;
                txt = "Thanks";
                btn = [{ chatID: -1, text: "You're welcome. ", callback: "badtip" }];
                break;
            case 16:
                console.log("bad 16");
                break;
        }
        if (food !== null) {
            nav.button({
                "type": "img",
                "name": "food",
                "left": food.x,
                "top": food.y,
                "width": food.w,
                "height": food.h,
                "image": "252_waitress/" + food.i
            }, 252);
        }

        return {
            chatID: 998,
            speaker: room252.getspeaker(),
            text: txt,
            button: btn
        };
    }
    else if (chatID === 800) {
        let gtxt = "";
        switch (g.internal.gift) {
            case "bouquet": gtxt = "Why are you giving me flowers? I don't want these. "; break;
            case "roses": gtxt = "We're not dating. Why would you give me this? "; break;
            case "seal": gtxt = "Thanks, I guess. I'll just give it to Holly. She likes these things. "; break;
            case "mug": gtxt = "Who wants a coffee cup? "; break;
            case "whoopee": gtxt = "What am I supposed to do with this? "; break;
        }
        return {
            chatID: 800,
            speaker: g.internal.girl,
            text: gtxt,
            button: [
                { chatID: -1, text: "Oh hahaha. Yeah. Whoops", callback: "fail" }
            ]
        };
    }
    else if (chatID === 801) {
        return {
            chatID: 801,
            speaker: g.internal.girl,
            text: "I already have one of these. You don't have to give me another one. ",
            button: [
                { chatID: -1, text: "Oh hahaha. Yeah. forgot. ", callback: "fail" }
            ]
        };
    }
    else if (chatID === 500) {
        if (g.rand(0, 5) === 0) {
            gv.mod("money", 15);
            return {
                chatID: 0,
                speaker: "holly",
                text: "I snagged an extra $15 for you. Girls gotta pay rent, am I right!",
                button: [
                    { chatID: 1, text: "Thanks! You're so right!", callback: "customer" }
                ]
            };
        }
        let htxt1 = [
            "I just love working with you!",
            "You're cute, you know that!  ",
            "I just love your hair!",
        ];
        return {
            chatID: 0,
            speaker: "holly",
            text: htxt1[g.rand(0, htxt1.length)],
            button: [
                { chatID: 1, text: "*sigh*", callback: "customer" }
            ]
        };
    }
    else if (chatID === 501) {
        //holly mad
        let htxt = [
            "Fucking narc!",
            "We had a talk and decided that everyone hates you. ",
            "You aren't a friend, you're a bitch",
            "Why are you even here?"
        ];
        return {
            chatID: 0,
            speaker: "holly",
            text: htxt[g.rand(0, htxt.length)],
            button: [
                { chatID: 1, text: "*sigh*", callback: "customer" }
            ]
        };
    }
    else if (chatID === 510) {
        if (g.rand(0, 5) === 0) {
            gv.mod("money", 10);
            return {
                chatID: 0,
                speaker: "dolly",
                text: "I snagged an extra $10 for you. Girls gotta pay rent, am I right!",
                button: [
                    { chatID: 1, text: "Thanks! You're so right!", callback: "customer" }
                ]
            };
        }
        let htxt1 = [
            "You know you're cuter than a pen full of kittens!",
            "We have a word for you back on the farm. Cutie pie!",
            "You're so cute you'ld get first prize at the county fair!",
        ];
        return {
            chatID: 0,
            speaker: "dolly",
            text: htxt1[g.rand(0, htxt1.length)],
            button: [
                { chatID: 1, text: "Awwww", callback: "customer" }
            ]
        };
    }
    else if (chatID === 511) {
        let htxt = [
            "You're as sour as an unripe crab apple",
            "I wouldn't pee on you if you was on fire darlin' ",
            "You smell like a cattle pen. ",
            "My momma had a name for people like you, but I won't say it. "
        ];
        return {
            chatID: 0,
            speaker: "dolly",
            text: htxt[g.rand(0, htxt.length)],
            button: [
                { chatID: 1, text: "*sigh*", callback: "customer" }
            ]
        };
    }
    else if (chatID === 520) {
        if (g.rand(0, 5) === 0) {
            gv.mod("money", 40);
            return {
                chatID: 0,
                speaker: "dolly",
                text: "I snagged an extra $40 for you. Girls gotta pay rent, am I right!",
                button: [
                    { chatID: 1, text: "Thanks! You're so right!", callback: "customer" }
                ]
            };
        }
        let htxt2 = [
            "Why is it whenever I tell a boy he can stick it where ever he wants he just shoves it up my ass?",
            "Watch out for slippery spots on the floor. I got fucked back in the dumpster and I'm farting cum everywhere.",
            "*ugh* my throat is so sore! I do love huge cocks, but it does hurt when you get violently face fucked! ",
            "Take my advice girl, always gobble those balls! "
        ];
        return {
            chatID: 0,
            speaker: "molly",
            text: htxt2[g.rand(0, htxt2.length)],
            button: [
                { chatID: 1, text: "Hahaha ok!", callback: "customer" }
            ]
        };
    }
    else if (chatID === 521) {
        let htxt = [
            "You're a fucking bitch! ",
            "I thought you were different than Jeffery, but you're a sick fucker like him too. ",
            "I hope you die and get ass raped by red hot pokers in hell. ",
            "You really fucked us, you know. Poor Dolly had to give him a blow job just to afford her part of the rent. "
        ];
        return {
            chatID: 0,
            speaker: "molly",
            text: htxt[g.rand(0, htxt.length)],
            button: [
                { chatID: 1, text: "*sigh*", callback: "customer" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "Hi welcome to the Naked Beaver, can I take your order?",
                button: [
                    { chatID: 1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "random",
                text: "I hope so! I've been waiting here for over 10 minutes for you to take my order! This place always has the " +
                    "worse service in town!",
                button: [
                    { chatID: 2, text: "I uh...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "random",
                text: "And another thing, you are the weirdest looking waitress I have ever seen!",
                button: [
                    { chatID: 3, text: "What?", callback: "cock0" }
                ]
            },
            {
                chatID: 3,
                speaker: "random",
                text: "OMG is that your cock hanging out! You're sooooo disgusting! I'm never coming here again!",
                button: [
                    { chatID: 4, text: "Oh crap!", callback: "cock1" }
                ]
            },
            {
                chatID: 4,
                speaker: "jeffery",
                text: sc.n("me") + " what are you doing! Report to my office. ",
                button: [
                    { chatID: 5, text: "Comming", callback: "cock2" }
                ]
            },
            {
                chatID: 5,
                speaker: "jeffery",
                text: "W-w-w-what the hell! Why are you flashing everyone your penis? I've " +
                    "already called Missy. She'll be here soon. Just stand there and wait " +
                    "for her! ",
                button: [
                    { chatID: 6, text: "[Wait for Missy to come]", callback: "cock3" },
                ]
            },
            {
                chatID: 6,
                speaker: "jeffery",
                text: "Missy! I can't have your employee flashing their penis at everyone! " +
                    "I just need to catch the theif, but I'll lose all my customers if " +
                    "they have to stare at cock all day! I need to to take care of this! ",
                button: [
                    { chatID: -1, text: "...", callback: "cock4" },
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "Why would you think it's ok to show off your penis to everyone? " +
                    "I have just the thing for you! Change back to your work clothes and follow me back to the office. Now! ",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "cock5_chastity205" },
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "There. Your chastity cage is back on. Don't let me catch you without it again. " +
                    "Now get back out there and get to work! ",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "cock5_chastity" },
                ]
            },
            {
                chatID: 9,
                speaker: "thinking",
                text: "Such a baby. Excuse me if I didn't want " + sc.n("envy") + " to " +
                    "be a mindless zombie! ",
                button: [
                    { chatID: -1, text: "...", callback: "notip" },
                ]
            },
            {
                chatID: 10,
                speaker: "holly",
                text: "Hey new girl, what's your name?",
                button: [
                    { chatID: 47, text: sc.n("me") + "-y ... shit that's not my name, I'm " + sc.n("me") + ", and I'm really a boy.", callback: "" },
                    { chatID: 47, text: "I'm " + sc.n("me") + ".", callback: "" },
                    { chatID: 11, text: "My name is waitress-fucker. Want me to show you how I got my name?", callback: "hollymad" },
                    { chatID: 11, text: "I'm not a chick, and my cock is huge, we should go somewhere private", callback: "hollymad" }
                ]
            },
            {
                chatID: 11,
                speaker: "holly",
                text: "I don't think so!",
                button: [
                    { chatID: -1, text: "oh....", callback: "fail" }
                ]
            },
            {
                chatID: 12,
                speaker: "holly",
                text: "You've been here long enough. What do you think of " + sc.n("jeffery") + "?",
                button: [
                    { chatID: 11, text: "He's such a great guy! You're lucky to have him as a boss. ", callback: "hollymad" },
                    { chatID: 11, text: "I think he only hires whores.", callback: "hollymad" },
                    { chatID: 13, text: "I kinda got the pervert vibe from him", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "holly",
                text: "I know, he keeps insisting we change in front of him! I thought" + sc.n("dolly") + " was going to punch him! " +
                    "Of course none of us ever change with him in the room, you would have to be a total spineless slut to do that!",
                button: [
                    { chatID: 14, text: "He made me change in front of him.", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "holly",
                text: "Oh you poor thing. He's such a pig. He tries everything to " +
                    "see us naked! He even offered me $50 for a pair of my panties. You have to be a real weirdo to get a pair of used " +
                    "panties. UGH it makes me shiver it's so disgusting. ",
                button: [
                    { chatID: 15, text: "$50! That's quite a bit for panties. ", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "holly",
                text: "Funny thing is, I don't even wear panties to work, but I can't " +
                    "imagine him sitting back there sniffing my dirty panties while I'm " +
                    "out here working. So creepy! Well Got another customer. ",
                button: [
                    { chatID: -1, text: "Good talking to you!", callback: "success" }
                ]
            },
            {
                chatID: 16,
                speaker: "holly",
                text: "Hey honey! You still working here? " + sc.n("jeffery") + " still hasn't scared you away?",
                button: [
                    { chatID: 17, text: "He's the worst, such a pervert", callback: "" },
                ]
            },
            {
                chatID: 17,
                speaker: "holly",
                text: "So yesterday I caught him smelling a pair of panties then stuffing them in his pocket! I even " +
                    "think I saw him licking them!",
                button: [
                    { chatID: 18, text: "Oh gross, he's so disgusting.", callback: "" },
                    { chatID: 11, text: "Oh, you sold him a pair of your panties for $50?", callback: "hollymad" }
                ]
            },
            {
                chatID: 18,
                speaker: "holly",
                text: "Another reason not to wear panties. Do you want to know why I don't wear panties? It's because my biggest fantasy " +
                    "is some big strong man coming up behind me and just molesting me with his big thick fingers, getting me all " +
                    "horny then shoving his cock straight in, all without saying a word.",
                button: [
                    { chatID: 11, text: "You're such a filthy slut! Gross!", callback: "hollymad" },
                    { chatID: 19, text: "That's my fantasy too.", callback: "" },
                    { chatID: 11, text: "I'll fuck you. Right here right now! ", callback: "hollymad" }
                ]
            },
            {
                chatID: 19,
                speaker: "holly",
                text: "I can tell girlfriend! Any guy willing to work here has some dirty fantasies! I was kinda worried at first about you, " +
                    "but after talking to " + sc.n("molly") + " and " + sc.n("dolly") + " you feel like one of us! ",
                button: [
                    { chatID: -1, text: "Awww thank you! I like working with you too!", callback: "success" }
                ]
            },
            {
                chatID: 20,
                speaker: "dolly",
                text: "Well butter my biscuits, it looks like we got ourselves a new waitress! How you doin' sugar? ",
                button: [
                    { chatID: 21, text: "Well hornswoggle my chimichangas! You are a simple one. ", callback: "dollymad" },
                    { chatID: 22, text: "Good. I'm well. Thanks.", callback: "" },
                    { chatID: 21, text: "Oh wow, you're a total redneck aren't you? ", callback: "dollymad" }
                ]
            },
            {
                chatID: 21,
                speaker: "dolly",
                text: "I don't want to talk to a big mean-y!",
                button: [
                    { chatID: -1, text: "I'm such a fool! ", callback: "fail" }
                ]
            },
            {
                chatID: 22,
                speaker: "dolly",
                text: "I was just chattin' with " + sc.n("holly") + " and she was sayin' you was " +
                    "the boy that changed in front of " + sc.n("jeffery") + " here the other day. " +
                    "Bless my heart I wouldn't have the gumption to show my face to the world if " +
                    "that happened to me!",
                button: [
                    { chatID: 23, text: "Well I really need the money for rent ", callback: "" },
                    { chatID: 21, text: "You don't have to show your face when I fuck you from behind.", callback: "dollymad" },
                    { chatID: 21, text: "I have the gumption to show you my cock!", callback: "dollymad" }
                ]
            },
            {
                chatID: 23,
                speaker: "dolly",
                text: "Oh honey.. I know it's hard to pay your rent, but you're cute, I'm sure you'll be taking in all the tips from " +
                    "all the pretty girls that come in here. Just keep working hard!",
                button: [
                    { chatID: 24, text: "You think I'm cute?", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "dolly",
                text: "You're as sweet as candy. Well I've got a table of 7 I've got to get, and they are a hungry bunch! You " +
                    "keep a smile on that pretty face of yours!",
                button: [
                    { chatID: -1, text: "Thanks, you too!", callback: "success" }
                ]
            },
            {
                chatID: 25,
                speaker: "dolly",
                text: "I'm glad to see you're still toughing it out sugar! They just don't pay enough here to cover rent! " +
                    "That " + sc.n("jeffery") + " only cares about perving on pretty little things. He doesn't seem to care at all about " +
                    "us getting enough to get by.",
                button: [
                    { chatID: 21, text: "Did you want to make a few extra bucks, I'll buy your panties?", callback: "dollymad" },
                    { chatID: 26, text: "I know, if only there was some way to get some extra money", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "dolly",
                text: "Oh honey, I just give them an extra big smile when I bring out the food and the tips just start rolling in. " +
                    "Most people here are really nice to me! I have a few that come in just to see me because they care so much for me. " +
                    "They always ask me about my life and what I like. One guy even brought me flowers on my birthday, he's such a great " +
                    "friend, and I do love a nice bouquet.",
                button: [
                    { chatID: 21, text: "You know that guy just wants to fuck you right?", callback: "dollymad" },
                    { chatID: 27, text: "I should try smiling too!", callback: "" },
                    { chatID: 21, text: "It's not your smile, it's your huge tits they like", callback: "dollymad" }
                ]
            },
            {
                chatID: 27,
                speaker: "dolly",
                text: "That's the spirit! My momma always said, \"There's no medicine so sour that a bit of sugar couldn't help\". You know, with " +
                    "a little bit of makeup, we could really bring out the big pretty eyes of yours. They're so cute! ",
                button: [
                    { chatID: 28, text: "Only if you make my eyes as pretty as yours", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "dolly",
                text: "Awww shucks! You are such a cutie and you don't even know it! oh well back to serving the tables!",
                button: [
                    { chatID: -1, text: "Yeah, back to work.", callback: "success" }
                ]
            },
            {
                chatID: 29,
                speaker: "molly",
                text: "Aw shit, you're that new chick with a dick!",
                button: [
                    { chatID: 31, text: "Yeah, you want to play with it?", callback: "" },
                    { chatID: 30, text: "That's really hurtful. Why would you say that?", callback: "mollymad" },
                ]
            },
            {
                chatID: 30,
                speaker: "molly",
                text: "You can go fuck yourself cock boy",
                button: [
                    { chatID: -1, text: "Is that a pickup line?", callback: "fail" }
                ]
            },
            {
                chatID: 31,
                speaker: "molly",
                text: "Oh hahaha, I would, but it looks like it's either tiny or all locked up. So you some kind of cross dresser?",
                button: [
                    { chatID: 30, text: "Fuck you.", callback: "mollymad" },
                    { chatID: 32, text: "I'm only here to scam pervs and weirdos from their money", callback: "" }
                ]
            },
            {
                chatID: 32,
                speaker: "molly",
                text: "Totally, I like a slut that knows who she is. I have one old perv that comes in all the time, he tips me $100 " +
                    "to touch my asshole when I take his order. He was my first customer and 'dropped his napkin' and like an idiot I bent over " +
                    "to pick it up and showed him my entire asshole, next thing I know he's knuckle deep in there. " +
                    "If he wasn't so hot I would be mad. ",
                button: [
                    { chatID: 30, text: "That's pretty gross. You shouldn't show some stranger your asshole.", callback: "mollymad" },
                    { chatID: 33, text: "For a tip like that I would show my bare ass too!", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "molly",
                text: "Ohhh I bet he would love that. If you feel him stick his finger in your butt-hole just let him. He's safe and his tips " +
                    "are awesome! Not like " + sc.n("jeffery") + " at all! He offered me $10 for my panties! I told him my panties cost like " +
                    "$30 new, he was going to have to cough up like $50 for them. So I sold them to him, caught him sniffing them in his office. ",
                button: [
                    { chatID: 34, text: "That's awesome! I bet your panties smell like sex!", callback: "" },
                    { chatID: 30, text: "Ewwww, gross. Why do you degrade yourself like that? ", callback: "mollymad" },
                ]
            },
            {
                chatID: 34,
                speaker: "molly",
                text: "Sex and semen! I had sex with my boyfriend earlier and some of him dripped into my panties on my way to work. " +
                    "I bet he even licked them! What an idiot. I got to get back to my tables before my regular loses his boner. You " +
                    "stay slutty!",
                button: [
                    { chatID: -1, text: "Thanks, you too!", callback: "success" }
                ]
            },
            {
                chatID: 35,
                speaker: "molly",
                text: "Hey slut! How's your butt hole, did he stick his fingers in yet!",
                button: [
                    { chatID: 36, text: "I want more than his fingers!", callback: "" },
                    { chatID: 30, text: "Ewww gross. I'm not some desperate slut. ", callback: "mollymad" }
                ]
            },
            {
                chatID: 36,
                speaker: "molly",
                text: "Hehehe. He is cute, but not my type. Too demanding. We totally would butt " +
                    "heads all the time if we tried to date. I think he's looking for some kinda " +
                    "slave. Not my scene at all. So how's the tips coming? ",
                button: [
                    { chatID: 30, text: "I have great tips 'cuase I'm not a dirty dirty whore like you", callback: "mollymad" },
                    { chatID: 37, text: "Bad. So how do you make extra money around here?", callback: "" }
                ]
            },
            {
                chatID: 37,
                speaker: "molly",
                text: "Oh, hmmmmm.... Maybe after you've been working here a while me and " + sc.n("holly") + " and " + sc.n("dolly") +
                    " will show you some tricks. Until then I got to get back and 'accidently flash' one of my regulars",
                button: [
                    { chatID: -1, text: "Ok, you keep it slutty!", callback: "success" }
                ]
            },
            {
                chatID: 38,
                speaker: "spanky",
                text: "It's cool bro... I mean bro-ette, some of my best customers dress like chicks, too. Some of them have " +
                    "truly excellent boobs, and what's better is that they like showing them off. I love big titties! All chicks " +
                    "should show them boobies, know what I mean?",
                button: [
                    { chatID: 39, text: "Yeah, totally", callback: "" }
                ]
            },
            {
                chatID: 39,
                speaker: "spanky",
                text: "Soooooo, are you cool, man?",
                button: [
                    { chatID: 40, text: "uh.. yeah, sure", callback: "" }
                ]
            },
            {
                chatID: 40,
                speaker: "spanky",
                text: "Ha ha ha, any dude that dresses like a chick is cool.. I know a guy in town " +
                    "that sells these pills. They call him the chemist. Dunno why. But he's always in " +
                    "his apartment making these things. Sells like hotcakes ya know. He just makes pills " +
                    "for I don't know who. But he's making bank, yo. ",
                button: [
                    { chatID: 41, text: "Tell me more about these pills", callback: "" },
                    { chatID: 45, text: "Cool", callback: "" }
                ]
            },
            {
                chatID: 41,
                speaker: "spanky",
                text: "Dude, my guy told me they are like whore moans or something. Like dudes take them when they don't want to be dudes anymore. " +
                    "My buddy says you can take more, but it doesn't do anything, so he says just take one a day. His drug man says it still " +
                    "not totally ready, and work in a weird way, but all my customers says they're great and keep taking them. " +
                    "I know they work 'cause those dudes have some great titties, ya know. The kind you want to juggle around.",
                button: [
                    { chatID: 42, text: "oh, ok", callback: "" }
                ]
            },
            {
                chatID: 42,
                speaker: "spanky",
                text: "Yeah one of the dudes says his dick shrunk up to the size of a penny, but his titties are huge! This one time " +
                    "this big titty dude comes in and just flashes me to show how awesome his titties are, just bare ass chest in my face. " +
                    "I don't care, 'cause titties, so I just start sucking them expecting that at any minute he's going to slap me, but get this; " +
                    "he just lets me suck on them titties and shit, just letting me go to town, so I think what the hell and I slide my hand into " +
                    "into his pants and this bitch has no panties, so guess what",
                button: [
                    { chatID: 43, text: "what?", callback: "" }
                ]
            },
            {
                chatID: 43,
                speaker: "spanky",
                text: "He starts moaning like a bitch in heat, so I'm like, what the hell and press my finger into his butt hole and he's all " +
                    "like twerking on my finger, so I go what the hell and whip out my dick. This crazy bitch drops down and starts sucking my " +
                    "dick then turns around and shoves it right in his ass hole, no lube or nothin', just shoves it in and start fucking me like " +
                    "I'm the last dick on earth. That bitch was the best fuck I ever had. ",
                button: [
                    { chatID: 44, text: "Tell me about the fucking pills, man! ", callback: "" }
                ]
            },
            {
                chatID: 44,
                speaker: "spanky",
                text: "Yaah. The chemist has them. He only sells to certain people. So " +
                    "you gotta find those people. Asshole won't let me sell them. ",
                button: [
                    { chatID: 45, text: "Fuck. So what do you want? ", callback: "" }
                ]
            },
            {
                chatID: 45,
                speaker: "spanky",
                text: "Just get me some chicken wings. ",
                button: [
                    { chatID: -1, text: "I'll go get that. ", callback: "badtip" }
                ]
            },
            {
                chatID: 46,
                speaker: "jones",
                text: "I'm looking forward to tearing your ass open. ",
                button: [
                    { chatID: -1, text: "Hehehehe", callback: "goodtip" }
                ]
            },
            {
                chatID: 47,
                speaker: "holly",
                text: "Cute name. I'm Holly. The other girls here are Dolly and Molly. " +
                    "Dolly is so sweet we call her sweet tea sometimes because of her " +
                    "southern charm. Molly though. ",
                button: [
                    { chatID: 48, text: "...", callback: "" }
                ]
            },
            {
                chatID: 48,
                speaker: "holly",
                text: "Molly's really awesome, but she can be a bit vulgar. Just the other " +
                    "day we were at Caravaggio as she put a whoopee cushion on my chair! " +
                    "This cute guy I was talking to ended up ditching me. I think he though " +
                    "I had too many burritos and was about to poop myself. She's great, but " +
                    "yeah...",
                button: [
                    { chatID: 11, text: "Molly sounds like a mega bitch. ", callback: "hollymad" },
                    { chatID: 49, text: "haha. I'll look after myself", callback: "" }
                ]
            },
            {
                chatID: 49,
                speaker: "holly",
                text: "You do that. I've got to get a customer. See you around. ",
                button: [
                    { chatID: -1, text: "Ok", callback: "success" }
                ]
            },
            {
                chatID: 50,
                speaker: "dolly",
                text: "You'll never guessed what happened to me!",
                button: [
                    { chatID: 51, text: "Huh?", callback: "" }
                ]
            },
            {
                chatID: 51,
                speaker: "dolly",
                text: "Lawsy me, child! We was at Caravaggio, you know, that laidback bar in town, and I had to use the little girls' room. Well, I was just mindin' my own business when all of a sudden, this big ol' bouncer fella comes bustin' in! Can you imagine? He tried to pee right on me! The nerve of some people! I had to give him a piece of my mind, I tell ya",
                button: [
                    { chatID: 21, text: "Probably 'cause you look like a toilet.", callback: "dollymad" },
                    { chatID: 52, text: "Oh my! That's terrible", callback: "" },
                    { chatID: 21, text: "I bet you really let him piss on you! ", callback: "dollymad" }
                ]
            },
            {
                chatID: 52,
                speaker: "dolly",
                text: "Bless his heart, the nerve of some men! He offered me Fifty dollars, and goodness knows, rent ain't cheap these days. But a lady's got her pride, darlin'. I wouldn't let no man disrespect me like that.",
                button: [
                    { chatID: 53, text: "I feel you. I could totally use rent money too. ", callback: "" }
                ]
            },
            {
                chatID: 53,
                speaker: "dolly",
                text: "Now, darlin', don't you worry your pretty little head. Good things come to those who wait, that's what they say. And I reckon we might be able to help you out a bit. Let me just have a little chat with the girls, see what we can come up with. ",
                button: [
                    { chatID: -1, text: "Awesome. Any help would be great. I've got to get back to my table.  ", callback: "success" }
                ]
            },
            {
                chatID: 54,
                speaker: "molly",
                text: "Hey slut! I've got to warn you. I was just out back throwing away " +
                    "the garbage and I was totally attacked! ",
                button: [
                    { chatID: 55, text: "Oh no, what happend?", callback: "" }
                ]
            },
            {
                chatID: 55,
                speaker: "molly",
                text: "I was bending over the trash, throwing it away when someone came " +
                    "out of nowhere and tried to rape me! I don't even know where they came " +
                    "from! Luckily I just kicked my heel up into his balls and got away, but " +    
                    "be careful out there girl! This town is crazy!  ",
                button: [
                    { chatID: 56, text: "Oh I will!", callback: "" },
                    { chatID: 30, text: "I don't have to worry about that 'cause I'm not a huge slut. ", callback: "mollymad" },
                ]
            },
            {
                chatID: 56,
                speaker: "molly",
                text: "Well, back to my tables! You stay sexy and don't get raped!  ",
                button: [
                    { chatID: -1, text: "Totally", callback: "success" },
                ]
            },
            {
                chatID: 57,
                speaker: "dolly",
                text: "Oh my, these flowers are just breathtaking! Such a lovely surprise. Why, you shouldn't have! Thank you so very much, you're a dear.",
                button: [
                    { chatID: -1, text: "You're welcome", callback: "success" },
                ]
            },
            {
                chatID: 58,
                speaker: "holly",
                text: "Oh wow! How did you know I loved seals! Oooo he's so precious and cute! Thanks so much! ",
                button: [
                    { chatID: -1, text: "You're welcome", callback: "success" },
                ]
            },
            {
                chatID: 59,
                speaker: "molly",
                text: "Hahaha thanks! I've been looking for one of these ever since Holly ruined my last one. I'm totally going to get her again!",
                button: [
                    { chatID: -1, text: "Totally", callback: "success" },
                ]
            },
            {
                chatID: 60,
                speaker: "molly",
                text: "Hey slut, we have a proposition for you...",
                button: [
                    { chatID: 61, text: "Yes...", callback: "" }
                ]
            },
            {
                chatID: 61,
                speaker: "dolly",
                text: "We know you're having a hard time with rent and we want to help.",
                button: [
                    { chatID: 62, text: "ok...", callback: "" }
                ]
            },
            {
                chatID: 62,
                speaker: "holly",
                text: "So.. here's the deal, you think you can keep a secret?",
                button: [
                    { chatID: 63, text: "I will keep your secret", callback: "" }
                ]
            },
            {
                chatID: 63,
                speaker: "dolly",
                text: "You see, sugar, the cash register has a secret function; a friend of ours installed it.",
                button: [
                    { chatID: 64, text: "...", callback: "" }
                ]
            },
            {
                chatID: 64,
                speaker: "molly",
                text: "So when you fucking push the secret key, it drops the money in the fifth slot below the register. ",
                button: [
                    { chatID: 65, text: "...", callback: "" }
                ]
            },
            {
                chatID: 65,
                speaker: "dolly",
                text: "So any money you drop you get to keep!",
                button: [
                    { chatID: 66, text: "...", callback: "" }
                ]
            },
            {
                chatID: 66,
                speaker: "holly",
                text: "It's our reward for putting up with " + sc.n("jeffery") + " the pervert. ",
                button: [
                    { chatID: 67, text: "...", callback: "" }
                ]
            },
            {
                chatID: 67,
                speaker: "dolly",
                text: "We know how hard making rent is working here, we hope this helps!",
                button: [
                    { chatID: 68, text: "Well thank you!", callback: "" }
                ]
            },
            {
                chatID: 68,
                speaker: "molly",
                text: "And get your self something sexy to show off that fine ass of yours!",
                button: [
                    { chatID: -1, text: "I will, thank you all so much!", callback: "allSuccess" }
                ]
            },
            {
                chatID: 69,
                speaker: "p",
                text: "You two really do make a great sissies! You two should team up " +
                    "more. As my clients say, the only thing better than a bussy, is " +
                    "two bussies! If I only had a dick I would fuck you both right now! ",
                button: [
                    { chatID: 70, text: "As shucks! ", callback: "" }
                ]
            },
            {
                chatID: 70,
                speaker: "cecilia",
                text: "You don't need a dick to fuck me! I'll take anything up my bussy. " +
                    "Fists, strapons, feet, uhhhh, toys... what are we talking about? ",
                button: [
                    { chatID: 71, text: "Oh " + sc.n("cecilia") + ". ", callback: "" }
                ]
            },
            {
                chatID: 71,
                speaker: "p",
                text: "Girl, it's a good thing you head is connected to your neck, or " +
                    "you would forget it at home. Can you get us some burgers. ",
                button: [
                    { chatID: -1, text: "Get that right up. ", callback: "goodtip" }
                ]
            },
            {
                chatID: 72,
                speaker: "boy",
                text: "I'll take a rump roast with some of the shake! ",
                button: [
                    { chatID: 73, text: "AAAAkkkk! ouchie ouchie ouchie", callback: "boy1" }
                ]
            },
            {
                chatID: 73,
                speaker: "boy",
                text: "Hahahaha. Just kidding. Get me a pizza toots! ",
                button: [
                    { chatID: -1, text: "*grrrr*", callback: "badtip" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
