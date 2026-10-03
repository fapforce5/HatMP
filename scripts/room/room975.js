//Room name
var room975 = {};
room975.main = function () {
    let overlay = "";
    switch (g.pass) {
        case "776kidnapped":
            chat(49, 975);
            //bad fight with priest - taken back by river
            break;
        case "lost487":
            chat(49, 975);
            //lost fight trying to save missy as the compound
            break;
        case "azrael956":
            trophy.add(33);
            nav.bg("975_ending/azrael1_" + gender.pronoun("m") + ".webp");
            overlay = "overlay_azrael";
            chat(1, 975);
            break;
        case "riverpunch":
            chat(49, 975);
            //tried to get password from River, failed and kidnapped back to compound
            break;
        case "goodend":
            nav.bg("975_ending/end0.webp");
            g.internal = {
                selected: null,
                list: [
                    { n: "kei", x: 599, y: 180, w: 416, h: 900, active: true },
                    { n: "jones", x: 1050, y: 170, w: 376, h: 910, active: true },
                    { n: "river", x: 218, y: 170, w: 425, h: 910, active: true },
                    { n: "envy", x: 399, y: 325, w: 236, h: 755, active: true },
                    { n: "elijah", x: 1498, y: 180, w: 288, h: 900, active: true },
                    { n: "sporty", x: 562, y: 276, w: 270, h: 804, active: true },
                    { n: "g", x: 971, y: 263, w: 326, h: 817, active: true },
                    { n: "kinsey", x: 725, y: 341, w: 220, h: 739, active: true },
                    { n: "lola", x: 1163, y: 341, w: 184, h: 739, active: true },
                    { n: "janice", x: 1301, y: 354, w: 342, h: 726, active: true },
                    { n: "missy", x: 1543, y: 309, w: 377, h: 771, active: true },
                    { n: "zoey", x: 909, y: 344, w: 236, h: 736, active: true },
                ],
                extra: ["cult", "daria", "river", "nun", "ralph", "sporty", "jones", "zoey", "landlord", "eva", "lola", ]
            };

            if (sc.getMission("lola", "*tom2").inProgress) {
                g.internal.list.find(e => e.n === "lola").active = false;
            }
            if (!sc.getMission("kinsey", "*post").inProgress) {
                g.internal.list.find(e => e.n === "kinsey").active = false;
            }
            if (!sissy.st[10].ach) {
                g.internal.list.find(e => e.n === "sporty").active = false;
            }
            if (sc.getMission("river", "*gf").notStarted) {
                g.internal.list.find(e => e.n === "river").active = false;
            }
            if (!sc.getMission("janice", "*boyfriend").inProgress) {
                g.internal.list.find(e => e.n === "janice").active = false;
            }
            if (sc.getMissionTask("kei", "cards", 2).notStarted) {
                g.internal.list.find(e => e.n === "kei").active = false;
            }
            if (!sc.getMission("zoey", "*wife").inProgress) {
                g.internal.list.find(e => e.n === "zoey").active = false;
            }
            if (sc.getMissionTask("jones", "invite", 3).notStarted) {
                g.internal.list.find(e => e.n === "jones").active = false;
            }
            if (sc.getMissionTask("elijah", "elijah", 8).notStarted) {
                g.internal.list.find(e => e.n === "elijah").active = false;
            }
            if (sc.getMissionTask("g", "mom", 2).notStarted) {
                g.internal.list.find(e => e.n === "g").active = false;
            }
            if (sc.getMission("envy", "gf").notStarted) {
                g.internal.list.find(e => e.n === "envy").active = false;
            }

            //remove this, just for testing
            //for (let i = 0; i < g.internal.list.length; i++) {
            //    g.internal.list[i].active = true;
            //}

            for (let i = 0; i < g.internal.list.length; i++) {
                nav.button({
                    "type": "img",
                    "name": "sel_" + g.internal.list[i].n,
                    "left": g.internal.list[i].x,
                    "top": g.internal.list[i].y,
                    "width": g.internal.list[i].w,
                    "height": g.internal.list[i].h,
                    "image": "975_ending/end_" + g.internal.list[i].n + (g.internal.list[i].active ? "" : "_no") + ".webp"
                }, 975);
                nav.t({
                    type: "zbtn",
                    name: "end_" + g.internal.list[i].n,
                    left: g.internal.list[i].x + (g.internal.list[i].w / 2) - 50,
                    top: g.internal.list[i].y,
                    font: 30,
                    hex: "#000000",
                    stroke: "white",
                    text: sc.n(g.internal.list[i].n)
                }, 975);
            }
            chat(4, 975);
            break;

    }
    nav.button({
            "type": "img",
            "name": "ol",
            "left": 0,
            "top": 0,
            "width": 1920,
            "height": 1080,
        "image": "975_ending/" + overlay + ".webp"
    }, 975);
};

room975.btnclick = function (name) {
    if (name.startsWith("end_")) {
        let n = name.replace("end_", "");
        switch (n) {
            case "kei":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(6, 975);
                }
                else {
                    chat(5, 975);
                }
                break;
            case "jones":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(8, 975);
                }
                else {
                    chat(7, 975);
                }
                break;
            case "river":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(10, 975);
                }
                else {
                    chat(9, 975);
                }
                break;
            case "envy":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(12, 975);
                }
                else {
                    chat(11, 975);
                }
                break;
            case "elijah":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(14, 975);
                }
                else {
                    chat(13, 975);
                }
                break;
            case "sporty":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(16, 975);
                }
                else {
                    chat(15, 975);
                }
                break;
            case "g":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(18, 975);
                }
                else {
                    chat(17, 975);
                }
                break;
            case "kinsey":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(20, 975);
                }
                else {
                    chat(19, 975);
                }
                break;
            case "lola":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(22, 975);
                }
                else {
                    chat(21, 975);
                }
                break;
            case "janice":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(24, 975);
                }
                else {
                    chat(23, 975);
                }
                break;
            case "missy":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(26, 975);
                }
                else {
                    chat(25, 975);
                }
                break;
            case "zoey":
                if (g.internal.list.find(e => e.n === n).active) {
                    chat(28, 975);
                }
                else {
                    chat(27, 975);
                }
                break;
        }
        return;
    }
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room975.chatcatch = function (callback) {
    if (callback.startsWith("sel_")) {
        g.internal.selected = callback.replace("sel_", "");
        room975.chatcatch("endings1");
        return;
    }
    switch (callback) {
        case "endings1":
            nav.kill();
            let ending975 = null;
            while (g.internal.extra.length > 0 && ending975 === null) {
                let thisEvent975 = g.internal.extra[0];
                g.internal.extra.splice(0, 1);
                switch (thisEvent975) {
                    case "cult":
                        nav.bg("975_ending/extra_cult.webp");
                        ending975 = 34;
                        break;
                    case "daria":
                        if (sc.getMission("bodhi", "cult").startedOrComplete) {
                            nav.bg("975_ending/extra_daria.webp");
                            ending975 = 35;
                        }
                        break;
                    case "river":
                        if (g.internal.selected !== "river") {
                            nav.bg("975_ending/extra_river.webp");
                            ending975 = 36;
                        }
                        break;
                    case "nun":
                        if (sc.getMission("nun", "*sin").success) {
                            nav.bg("975_ending/extra_nun.webp");
                            ending975 = 37;
                        }
                        break;
                    case "ralph":
                        if (sc.getMission("ralph", "cult").startedOrComplete) {
                            nav.bg("975_ending/extra_ralph_1.webp");
                            ending975 = 38;
                        }
                        else if (sissy.st[10].ach) {
                            nav.bg("975_ending/extra_ralph_0.webp");
                            ending975 = 39;
                        }
                        break;
                    case "sporty":
                        if (g.internal.selected !== "sporty" && g.internal.list.find(e => e.n === "sporty").active) {
                            nav.bg("975_ending/extra_sporty_0.webp");
                            ending975 = 40;
                        }
                        break;
                    case "jones":
                        if (g.internal.selected !== "jones" && g.internal.list.find(e => e.n === "jones").active) {
                            nav.bg("975_ending/extra_jones.webp");
                            ending975 = 41;
                        }
                        break;
                    case "zoey":
                        if (g.internal.selected !== "zoey") {
                            nav.bg("975_ending/extra_zoey_0.webp");
                            ending975 = 42;
                        }
                        break;
                        //landlord and eva?
                    case "lola":
                        if (g.internal.selected === "lola") {
                            // no epilogue needed, skip
                        }
                        else if (sc.getMission("lola", "*tom2").startedOrComplete) {
                            nav.bg("975_ending/extra_lola0.webp");
                            ending975 = 43;
                        }
                        else if (sc.getMission("lola", "*wife").startedOrComplete) {
                            nav.bg("975_ending/extra_lola0.webp");
                            ending975 = 44;
                        }
                        else {
                            nav.bg("975_ending/extra_lola1.webp");
                            ending975 = 45;
                        }
                        break;
                }
            }
            if (ending975 === null) {
                chat(901, 975);
            }
            else {
                chat(ending975, 975);
            }
            break;
        case "azrael2":
        case "extra_eva0":
            nav.bg("975_ending/" + callback + ".webp");
            break;
        case "me_zoey1":
        case "me_river1":
            nav.kill();
            nav.bg("975_ending/" + callback + ".webp");
            break;
        case "me_missy0":
        case "me_kinsey1":
            nav.bg("975_ending/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "theend":
            nav.kill();
            nav.bg("975_ending/endbg.webp");
            zcl.displayMain(0, 600, .2, "", false);
            nav.t({
                type: "img",
                name: "x",
                left: 310,
                top: 150,
                font: 40,
                hex: "#ffffff",
                text: "Bonus points on next playthrough ",
                stroke: "black"
            }, 1);

            let bonus975 = { money: 0, sissy: 0, dom: 0, makeup: 0, pee: 0, beast: 0, charisma: 0, pi: 0, fitness: 0, strength: 0 };
            for (let i = 0; i < trophy.st.length; i++) {
                if (trophy.st[i].ach) {
                    bonus975.money += trophy.st[i].money;
                    bonus975.sissy += trophy.st[i].sissy;
                    bonus975.dom += trophy.st[i].dom;
                    bonus975.makeup += trophy.st[i].makeup;
                    bonus975.pee += trophy.st[i].pee;
                    bonus975.beast += trophy.st[i].beast;
                    bonus975.charisma += trophy.st[i].charisma;
                    bonus975.pi += trophy.st[i].pi;
                    bonus975.fitness += trophy.st[i].fitness;
                    bonus975.strength += trophy.st[i].strength;
                }
            }

            let bonusLabels975 = [
                { label: "Sissy", val: bonus975.sissy },
                { label: "Dominance", val: bonus975.dom },
                { label: "Makeup", val: bonus975.makeup },
                { label: "Piss", val: bonus975.pee },
                { label: "Beast", val: bonus975.beast },
                { label: "Charisma", val: bonus975.charisma },
                { label: "Intelligence", val: bonus975.pi },
                { label: "Fitness", val: bonus975.fitness },
                { label: "Strength", val: bonus975.strength },
                { label: "Money", val: "$" + bonus975.money },
            ];
            for (let i = 0; i < bonusLabels975.length; i++) {
                nav.t({
                    type: "img",
                    name: "x",
                    left: 310,
                    top: 210 + (i * 50),
                    font: 40,
                    hex: "#ffffff",
                    text: bonusLabels975[i].label + ": " + bonusLabels975[i].val,
                    stroke: "black"
                }, 1);
            }
            chat(0, 975);
            break;
        case "restart":
            trophy.add(51);
            let t = new Array();
            let s = new Array();
            let r = new Array();
            let ra = ["maxenergy", "fantasyCreatures", "difficulty", "clock24", "transformation", "breastSelect", "firstTimeInWardrobe"];
            for (let i = 0; i < gv.st.length; i++) {
                if (ra.includes(gv.st[i].n))
                    r.push({ i: i, t: gv.st[i].t });
            }

            for (let i = 0; i < trophy.st.length; i++) {
                if (trophy.st[i].ach)
                    t.push(i);
            }
            for (let i = 0; i < sc.char.length; i++) {
                s.push({ j: i, d: sc.char[i].display });
            }
            let n = $.extend(true, {}, sc.char);
            g.initGame();
            cl.init();

            sc.init();
            inv.init();
            missy.init();
            
            for (let i = 0; i < s.length; i++) {
                sc.char[s[i].j].display = s[i].d;
            }

            let money975, sissy975, dom975, makeup975, pee975, beast975, charisma975, pi975, fitness975, strength975;
            money975 = sissy975 = dom975 = makeup975 = pee975 = beast975 = charisma975 = pi975 = fitness975 = strength975 = 0;
            for (let i = 0; i < t.length; i++) {
                trophy.st[t[i]].ach = true;
                if (trophy.st[t[i]].money > 0) {
                    money975 += trophy.st[t[i]].money;
                }
                if (trophy.st[t[i]].sissy > 0) {
                    sissy975 += trophy.st[t[i]].sissy;
                }
                if (trophy.st[t[i]].dom > 0) {
                    dom975 += trophy.st[t[i]].dom;
                }
                if (trophy.st[t[i]].makeup > 0) {
                    makeup975 += trophy.st[t[i]].makeup;
                }
                if (trophy.st[t[i]].pee > 0) {
                    pee975 += trophy.st[t[i]].pee;
                }
                if (trophy.st[t[i]].beast > 0) {
                    beast975 += trophy.st[t[i]].beast;
                }
                if (trophy.st[t[i]].charisma > 0) {
                    charisma975 += trophy.st[t[i]].charisma;
                }
                if (trophy.st[t[i]].pi > 0) {
                    pi975 += trophy.st[t[i]].pi;
                }
                if (trophy.st[t[i]].fitness > 0) {
                    fitness975 += trophy.st[t[i]].fitness;
                }
                if (trophy.st[t[i]].strength > 0) {
                    strength975 += trophy.st[t[i]].strength;
                }
            }
            levels.mod("xdress", sissy975);
            levels.mod("dom", dom975);
            levels.mod("makeup", makeup975);
            levels.mod("piss", pee975);
            levels.mod("beast", beast975);
            levels.mod("charisma", charisma975);
            levels.mod("pi", pi975);
            levels.mod("fitness", fitness975);
            levels.mod("strength", strength975);
            gv.mod("money", money975);
            for (let i = 0; i < r.length; i++) {
                gv.st[r[i].i].t = r[i].t;
            }
            cl.display();
            invoker.invoke(2, "chatcatch", "proceed");
            break;
        case "me_sporty1":
            nav.bg("975_ending/me_sporty1_" + gender.pronoun("f") + ".webp");
            break;
        default:
            break;
    }
};

room975.chat = function (chatID) {
    if (chatID === 901) {
        nav.kill();
        switch (g.internal.selected) {
            case "kei":
                nav.bg("975_ending/me_kei.webp");
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "As for you. You spent the rest of your days on this planet under " + sc.n("kei") +
                        "'s table sucking any and all penises that came to play. It became such a popular " +
                        "place to gamble that a lineup would often appear at his door just for the chance " +
                        "to have you drain their balls. ",
                    button: [
                        { chatID: -1, text: "The end", callback: "theend" }
                    ]
                };
            case "jones":
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "[FILLER] jones ending",
                    button: [
                        { chatID: -1, text: "[FILLER]", callback: "" }
                    ]
                };
            case "river":
                nav.kill();
                nav.bg("975_ending/me_river0_bg.webp");
                levels.anal(4, true, "m", true, "river");
                zcl.allfours(200, 800, .6, "", false);
                nav.button({
                    "type": "img",
                    "name": "river",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "975_ending/me_river0.webp"
                }, 325);
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "The wedding was fast, held with permission from " + sc.n("daria") + " at the " +
                        "old C.U.M. compound. " + sc.n("river") + " felt it was fitting since it was the " +
                        "cult that brought you together. The two of you had an amazing sex life, often " +
                        "inviting his old friends over... ",
                    button: [
                        { chatID: (cl.c.cock === 5 ? 31 : 32), text: "...", callback: "me_river1" }
                    ]
                };
            case "envy":
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "[FILLER] envy ending",
                    button: [
                        { chatID: -1, text: "[FILLER]", callback: "" }
                    ]
                };
            case "elijah":
                nav.kill();
                nav.bg("975_ending/me_elijah.webp")
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: sc.n("elijah") + " eventually landed a job and the two of you were able to afford " +
                        "a modest house not far from your " + sc.n("landlord") + ". After your second child, " +
                        "you had to quit your menial job and become a stay-at-home mom where you raise his " +
                        "eight children and cook and clean his house. ",
                    button: [
                        { chatID: -1, text: "The end", callback: "theend" }
                    ]
                };
            case "sporty":
                nav.kill();
                nav.bg("975_ending/me_sporty0.webp");
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "You end up moving to Hollywood with " + sc.n("sporty") + " where you both enjoy licking " +
                        "and fisting each other quite regularly. To pay for your rather large apartment, you've " +
                        "both become quite the famous pair of movie stars....",
                    button: [
                        { chatID: 46, text: "...", callback: "me_sporty1" }
                    ]
                };
            case "g":
                nav.kill();
                nav.bg("975_ending/me_g_" + gender.pronoun("f") + ".webp");
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "You spend your life worshipping your muscle mommy and raising her kids, cleaning her " +
                        "house, and making her high-protein meals during the day. At night, a mix of getting squeezed " +
                        "between her power thighs and getting absolutely pounded by her strapon. ",
                    button: [
                        { chatID: -1, text: "The end", callback: "theend" }
                    ]
                };
            case "kinsey":
                nav.kill();
                if (cl.c.chest > 2) {
                    nav.bg("975_ending/me_kinsey0.webp");
                    return {
                        chatID: 900,
                        speaker: "!nar",
                        text: "You spend the rest of your days frolicking in the fields of " + sc.n("kinsey") +
                            "'s farm with no responsibilities. Each day the farm hands gently move you to " +
                            "your milking stall where you provide yummy milk for all. ",
                        button: [
                            { chatID: 48, text: "...", callback: "me_kinsey1" }
                        ]
                    };
                }
                else {
                    nav.bg("975_ending/me_kinsey1_" + gender.pronoun("f") + ".webp");
                    return {
                        chatID: 900,
                        speaker: "!nar",
                        text: "You spend the rest of your days frolicking in the fields of " + sc.n("kinsey") +
                            "'s farm with no responsibilities. In the evening you and " + sc.n("kinsey") +
                            " take turns taking " + sc.n("horse") + "'s giant horse cock. ",
                        button: [
                            { chatID: -1, text: "The end", callback: "theend" }
                        ]
                    };
                }
                
            case "lola":
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "[FILLER] lola ending",
                    button: [
                        { chatID: -1, text: "[FILLER]", callback: "" }
                    ]
                };
            case "janice":
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "[FILLER] janice ending",
                    button: [
                        { chatID: -1, text: "[FILLER]", callback: "" }
                    ]
                };
            case "missy":
                nav.kill();
                nav.bg("975_ending/me_missy1.webp");
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "You take " + sc.n("cecilia") + " under your wing to help her become a better detective. " +
                        "The both of you solve many of the city's worst crimes, many times using your best assets...",
                    button: [
                        { chatID: 47, text: "...", callback: "me_missy0" }
                    ]
                };
            case "zoey":
                nav.bg("975_ending/me_zoey0.webp");
                return {
                    chatID: 900,
                    speaker: "!nar",
                    text: "You and " + sc.n("zoey") + " had a wonderful ceremony at her bar where you " +
                        "invited all your friends to join you in your ceremony. Many stories were told, " +
                        "and some new stories were made. ",
                    button: [
                        { chatID: 33, text: "...", callback: "me_zoey1" }
                    ]
                };
        }
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "!nar",
            text: "Thank you for playing! If you restart the game, all the counters reset, but you get to " +
                "keep your achievements and the points from those that you've earned. ",
            button: [
                { chatID: -1, text: "Restart the game? ", callback: "restart" }
            ]
        },
        {
            chatID: 1,
            speaker: "!nar",
            text: "After your betrayal of Missy you were taken to the sermon and bathed in the cum of the " +
                "followers leading to your virgin pregnancy. To ensure you remain a virgin until birth your arms " +
                "were bound and several cult members guarded you day and night. For nine months it was a lavish, " +
                "yet empty experience, never getting the chance to be touched on your new vagina. Missy, " +
                "the dog, was placed at your side to drain any cocks that seemed headed your way. ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!nar",
            text: "After nine months you had a virgin birth to a healthy baby boy who was immediately taken " +
                "from you never to be seen again by your own eyes. Never knowing what became of him. With the virgin birth complete, Ubel " +
                "lifted all protections from you and you were now free for the cult to use. ",
            button: [
                { chatID: 3, text: "...", callback: "azrael2" }
            ]
        },
        {
            chatID: 3,
            speaker: "!nar",
            text: "You spent the rest of your life locked in a room with Missy being abused and fucked " +
                "by anyone that needed their balls drained. The only food you two would receive " +
                "is the creampies from each other's pussy and assholes. The only liquid you would receive " +
                "was the piss from their cocks until your dying day. ",
            button: [
                { chatID: 0, text: "...", callback: "theend" }
            ]
        },
        {
            chatID: 4,
            speaker: "!nar",
            text: "Congratulations on saving Missy and freeing the Fetville from the cult. You find that " +
                "you have the rest of your life to live. Choose who will be your happily ever after. Feel " +
                "free to peruse your options; there will be a confirmation after you select someone. ",
            button: [
                { chatID: -1, text: "[Click the text of the name you wish to spend forever with]", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!nar",
            text: "You never proved that you were willing to be the blow job bitch. " + sc.n("kei") +
                " is not interested in a happily ever after with you. ",
            button: [
                { chatID: -1, text: "[Needed to complete the 'Boy\'s Game, Blowjob bitch']", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("kei") + "?",
            button: [
                { chatID: -1, text: "Yes, he's my dream life!", callback: "sel_kei" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "!nar",
            text: "You've never been close enough to " + sc.n("jones") + ". ",
            button: [
                { chatID: -1, text: "[Needed to complete 'Service, Missing bitch']", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("jones") + "?",
            button: [
                { chatID: -1, text: "Yes, he's my dream life!", callback: "sel_jones" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "!nar",
            text: "You've never proven to " + sc.n("river") + " that you would make his perfect little " +
                "housewife.",
            button: [
                { chatID: -1, text: "[Needed to start 'Girlfriend, I think I'm in love']", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("river") + "?",
            button: [
                { chatID: -1, text: "I want to be his housewife", callback: "sel_river" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "!nar",
            text: "You never proved you were " + sc.n("envy") + "'s perfect " + gender.pronoun("boyfriend") + ". ",
            button: [
                { chatID: -1, text: "[Needed to start 'Girlfriend, Emotional Connection.']", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("envy") + "?",
            button: [
                { chatID: -1, text: "Yes! She's the one for me!", callback: "sel_envy" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "!nar",
            text: "You've never proven to " + sc.n("elijah") + " that you would make his perfect little " +
                "housewife and give him lots of babies.",
            button: [
                { chatID: -1, text: "[Needed to complete 'Date, Wait for the day we can get married']", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "!nar",
            text: "Be " + sc.n("elijah") + "'s perfect little " +
                "housewife and give him lots of babies?",
            button: [
                { chatID: -1, text: "Yes! This is my happily ever after!", callback: "sel_elijah" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "!nar",
            text: sc.n("sporty") + " doesn't know you well enough. ",
            button: [
                { chatID: -1, text: "[Needed to complete the Sissy mid-term]", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("sporty") + "?",
            button: [
                { chatID: -1, text: "We'll make the cutest pair of sluts! ", callback: "sel_sporty" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "!nar",
            text: "You never knocked up " + sc.n("g") + ". ",
            button: [
                { chatID: -1, text: "[Needed to complete 'Muscle Mommy, My baby's mama.']", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("g") + "?",
            button: [
                { chatID: -1, text: "That's my muscle mommy!", callback: "sel_g" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!nar",
            text: "You never freed " + sc.n("kinsey") + " from the evil clutches of the farm. ",
            button: [
                { chatID: -1, text: "[Needed to progress 'Owner, I'm the boss around here']", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("kinsey") + "?",
            button: [
                { chatID: -1, text: "I'm going to be a farm bitch! ", callback: "sel_kinsey" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "!nar",
            text: sc.n("lola") + " has found her love in " + sc.n("tom") + ". That is her happily ever after. ",
            button: [
                { chatID: -1, text: "[Lola is living out her own 'Fairy Tale' ending elsewhere]", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("lola") + "?",
            button: [
                { chatID: -1, text: "She's my girl! ", callback: "sel_lola" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 23,
            speaker: "!nar",
            text: "You never proved you would be " + sc.n("janice") + "'s perfect little bitch. ",
            button: [
                { chatID: -1, text: "[Needed to progress 'My Boyfriend, You don't matter to me.']", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("janice") + "?",
            button: [
                { chatID: -1, text: "I'm so her bitch! ", callback: "sel_janice" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "!nar",
            text: "[FILLER] Rejection reason for " + sc.n("missy") + ". ",
            button: [
                { chatID: -1, text: "[FILLER] Needed condition reminder", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("missy") + "?",
            button: [
                { chatID: -1, text: "I crave the life of excitement!", callback: "sel_missy" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "!nar",
            text: "You need to prove your love and vagina for " + sc.n("zoey") + ". ",
            button: [
                { chatID: -1, text: "[Needed to progress 'Wives?, Our forever']", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "!nar",
            text: "Do you want to spend your happily ever after with " + sc.n("zoey") + "?",
            button: [
                { chatID: -1, text: "We will make such a cute pair of lesbians! ", callback: "sel_zoey" },
                { chatID: -1, text: "Let me look at my other options. ", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "!nar",
            text: "While it was quite the circus, eventually the leaders of C.U.M. were sent to prison " +
                "for the rest of their lives thanks to your efforts and amazing prowess. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" },
            ]
        },
        {
            chatID: 30,
            speaker: "!nar",
            text: "After college " + sc.n("bigguy") + " kicked " + sc.n("eva") + " out of the house. " +
                "After searching for life's meaning she found two bicurious boys with large penises to enjoy a long and orgasmic " +
                "polyamorous relationship with. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" },
            ]
        },
        {
            chatID: 31,
            speaker: "!nar",
            text: "...but as time passed and " + sc.n("river") + " moved up to foreman at the construction " +
                "company and you two felt it was time to start a family. You became a stay-at-home mom " +
                "to cook, clean, and raise " + sc.n("river") + "'s kids until the day you both grew old. ",
            button: [
                { chatID: -1, text: "The end", callback: "theend" }
            ]
        },
        {
            chatID: 32,
            speaker: "!nar",
            text: "...but as time passed and " + sc.n("river") + " moved up to foreman at the construction " +
                "company and you two felt it was time to adopt a child. You became a stay-at-home mom " +
                "to cook, clean, and raise " + sc.n("river") + "'s kids until the day you both grew old. ",
            button: [
                { chatID: -1, text: "The end", callback: "theend" }
            ]
        },
        {
            chatID: 33,
            speaker: "!nar",
            text: "And after the ceremony you both learned how much better a lesbian partner was. Partially " +
                "because boobs are so much better to sleep on, partially because you each knew exactly how to " +
                "please a woman, and partially because you can have all the different dildo sizes you could hope " +
                "for. ",
            button: [
                { chatID: -1, text: "The end", callback: "theend" }
            ]
        },
        {
            chatID: 34,
            speaker: "!nar",
            text: "Once word got out that the C.U.M. had to answer for their crimes, all the good " +
                "sissies under the " + sc.n("queen") + " came to the trial to make " + sc.n("tudor") +
                " and " + sc.n("ubel") + " answer for their crimes against them. ",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "!nar",
            text: "After running and hiding out for a while, " + sc.n("daria") + " and " + sc.n("bodhi") +
                " eventually settled down in " + sc.n("daria") + "'s cabin. With her father, " +
                sc.n("tudor") + ", going away she inherited the castle and turned it into a " +
                "home for all the newly freed sissies. To this day " + sc.n("bodhi") + " is " +
                "still happily serving her every need. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 36,
            speaker: "!nar",
            text: sc.n("river") + ", for his part, was sentenced to jail for a year where he " +
                "learned humility and compassion from two very horny prison mates. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 37,
            speaker: "!nar",
            text: "While you never saw " + sc.n("nun") + " again, she is happily living her " +
                "life raising your daughter in a not-too-distant town. Although she is no longer " +
                "a nun, she has found purpose in her own life. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 38,
            speaker: "!nar",
            text: sc.n("ralph") + "'s time with the cult was hard on him. After he was freed, " +
                "he wandered around the country for some time before coming back to Fetville " +
                "and found his purpose in the glory hole where he would spend many years of " +
                "his life relishing the feeling of taking cock after cock. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 39,
            speaker: "!nar",
            text: sc.n("ralph") + " did finally accept his feminine side and found a man who " +
                "also found beauty in his femininity in " + sc.n("spanky") + ". After dating for " +
                "only a couple weeks they eloped in the night to Las Vegas and were married by " +
                "Elvis. " + sc.n("ralph") + " happily helps around the store and those two " +
                "have more dirty sex together than any couple known to man. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 40,
            speaker: "!nar",
            text: sc.n("sporty") + " eventually moved to Paris where she's become one of " +
                "the biggest porn actresses of our time. She was so famous she played an " +
                "extra in a prime time show loosely based on her life. Her fetish videos " +
                "are said to be the best ever made. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 41,
            speaker: "!nar",
            text: sc.n("jones") + " and " + sc.n("bitch") + " will spend the rest of their " +
                "lives together. They still enjoy their bondage events together, but " +
                sc.n("jones") + " has softened and now allows " + sc.n("bitch") + " to share " +
                "his bed. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 42,
            speaker: "!nar",
            text: sc.n("zoey") + " and " + sc.n("stormy") + " have had a long on-again, off-" +
                "again relationship over the years. While they never did move in together, they " +
                "both enjoy each other's company and have practiced and perfected the tibbing " +
                "technique so much so that they both have light calluses on their clits. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 43,
            speaker: "!nar",
            text: "After " + sc.n("lola") + " finished college, she was able to get a well-paying " +
                "office job where she fills spreadsheets with numbers all day. She and " +
                sc.n("tom") + " are expecting their first child together where the plan is " +
                "that " + sc.n("tom") + " will be a stay-at-home dad while " + sc.n("lola") +
                " pays the bills. ",
            button: [
                { chatID: 30, text: "...", callback: "extra_eva0" }
            ]
        },
        {
            chatID: 44,
            speaker: "!nar",
            text: "After getting rejected by you, the father of her child, she found love in " +
                "the arms of another boy, " + sc.n("tom") + ". She's a stay-at-home mother and " +
                "they are expecting their second child in the next nine months. ",
            button: [
                { chatID: 30, text: "...", callback: "extra_eva0" }
            ]
        },
        {
            chatID: 45,
            speaker: "!nar",
            text: "Your " + sc.n("landlord") + ", " + sc.n("lola") + ", and " + sc.n("eva") +
                " all gave birth around the same time. Wisely they gave the three children up " +
                "for adoption so they could continue their new lifestyle of copious amounts of " +
                "sex all the time by their many many suitors. ",
            button: [
                { chatID: -1, text: "...", callback: "endings1" }
            ]
        },
        {
            chatID: 46,
            speaker: "!nar",
            text: "That is porn movie stars where you both take a large number of penises into your tight little " +
                "holes for all the world to watch and enjoy. ",
            button: [
                { chatID: -1, text: "The end", callback: "theend" }
            ]
        },
        {
            chatID: 47,
            speaker: "!nar",
            text: "When you two aren't out there busting bad guys, and sometimes girls, you're serving all of " +
                sc.n("missy") + "'s most intimate needs. ",
            button: [
                { chatID: -1, text: "The end", callback: "theend" }
            ]
        },
        {
            chatID: 48,
            speaker: "!nar",
            text: "In the evenings you and " + sc.n("kinsey") + " take turns taking " + sc.n("horse") +
                "'s giant horse cock. ",
            button: [
                { chatID: -1, text: "The end", callback: "theend" }
            ]
        },
        {
            chatID: 49,
            speaker: "!nar",
            text: "Ending not made yet - bad end",
            button: [
                { chatID: -1, text: "The end", callback: "theend" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

invoker.registerRoom(975, room975);
