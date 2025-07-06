//Room name
var room483 = {};
//mesh dress and hooker boots inside the cave
room483.main = function () {
    if (g.pass === 483 && cl.isLewd()) {
        g.pass = null;
        room483.btnclick("enter");
        return;
    }
    g.pass = null;
    switch (sc.taskGetStep("wolf", "pack")) {
        case -1:
        case 0:
            sc.show("wolf");
            sc.startMission("wolf", "pack");
            sc.completeMissionTask("wolf", "pack", 0);
            chat(0, 483);
            break;
        case 1:
            g.internal = { meat: 0, sniff: 0 };
            sc.select("meat", "483_cave/icon_meat.png", 0);
            sc.select("approach", "483_cave/icon_approach.png", 1);
            sc.select("beta", "483_cave/icon_beta.png", 2);
            sc.select("leave", "483_cave/icon_leave.png", 3);
            break;
        default:
            nav.bg("483_cave/bg_x.jpg", "483_cave/bg_x_night.jpg");
            sc.select("enter", "483_cave/icon_enter.png", 0);
            sc.select("leave", "483_cave/icon_leave.png", 1);
            sc.select("wardrobe", "483_cave/icon_leave.png", 1);
            break;
    }
    nav.buildnav([475]);
};

room483.btnclick = function (name) {
    switch (name) {
        case "meat":
            if (inv.has("rawmeat")) {
                inv.use("rawmeat");
                nav.button({
                    "type": "img",
                    "name": "rawmeat",
                    "left": 1012,
                    "top": 899 - (g.internal.meat * 15),
                    "width": 133,
                    "height": 55,
                    "image": "483_cave/meat.png"
                }, 451);
                g.internal.meat++;
                levels.mod("beast", 5);
                sc.modLevel("wolf", 90, 3);
            }
            else {
                chat(2, 483);
            }
            break;
        case "approach":
            room483.btnclick("killbtn");
            nav.button({
                "type": "img",
                "name": "grr",
                "left": 795,
                "top": 483,
                "width": 573,
                "height": 114,
                "image": "483_cave/grr.png"
            }, 451);
            chat(3, 483);
            break;
        case "beta":
            room483.btnclick("killbtn");
            if (levels.get("beast").l < 5) {
                chat(5, 483);
            }
            else {
                if (cl.isLewd()) {
                    g.internal.sniff = 0;
                    nav.bg("483_cave/bg_empty.jpg", "483_cave/bg_empty_night.jpg");
                    zcl.assup(730, 350, .6, "");
                    nav.button({
                        "type": "img",
                        "name": "grr",
                        "left": 759,
                        "top": 621,
                        "width": 750,
                        "height": 439,
                        "image": "483_cave/sniff0.png"
                    }, 451);
                    nav.next("sniff1");
                }
                else {
                    nav.button({
                        "type": "img",
                        "name": "grr",
                        "left": 795,
                        "top": 483,
                        "width": 573,
                        "height": 114,
                        "image": "483_cave/grr.png"
                    }, 451);
                    nav.button({
                        "type": "img",
                        "name": "grr",
                        "left": 474,
                        "top": 787,
                        "width": 851,
                        "height": 293,
                        "image": "483_cave/bend_" + gender.pronoun("f") + ".png"
                    }, 451);
                    chat(4, 483);
                }
            }
            break;
        case "leave":
            char.room(475);
            break;
        case "killbtn":
            nav.killbutton("meat");
            nav.killbutton("approach");
            nav.killbutton("beta");
            nav.killbutton("leave");
            break;
        case "sniff1":
            if (sc.getLevel("wolf") < 3) {
                if (g.internal.sniff === 0) {
                    nav.killbutton("grr");
                    nav.button({
                        "type": "img",
                        "name": "grr",
                        "left": 1011,
                        "top": 575,
                        "width": 654,
                        "height": 482,
                        "image": "483_cave/sniff1.png"
                    }, 451);
                    g.internal.sniff++;
                }
                else {
                    if (!daily.get("wolfsniff")) {
                        daily.set("wolfsniff");
                        levels.mod("beast", 20);
                        sc.modLevel("wolf", 25, 5);
                    }
                    nav.killbutton("sniff1");
                    chat(6, 483);
                }
            }
            else {
                if (g.internal.sniff === 0) {
                    levels.mod("beast", 20);
                    sc.modLevel("wolf", 25, 5);
                    sc.completeMissionTask("wolf", "pack", 1);
                    nav.killbutton("grr");
                    nav.button({
                        "type": "img",
                        "name": "grr",
                        "left": 1011,
                        "top": 575,
                        "width": 654,
                        "height": 482,
                        "image": "483_cave/sniff2.png"
                    }, 451);
                    g.internal.sniff++;
                }
                else if (g.internal.sniff === 1) {
                    nav.killbutton("grr");
                    nav.bg("483_cave/sniff2.jpg", "483_cave/sniff2_night.jpg");
                    g.internal.sniff++;
                }
                else {
                    nav.killbutton("sniff1");
                    nav.bg("483_cave/bg_x.jpg", "483_cave/bg_x_night.jpg");
                    chat(7, 483);
                }
            }
            break;
        case "enter":
            if (cl.isLewd()) {
                nav.bg("483_cave/cave0.jpg");
                nav.kill();
                //chat(8, 483);
            }
            else {
                nav.killall();
                nav.bg("483_cave/enter_bad.jpg");
                chat(9, 483);
            }
            break;
        default:
            break;
    }
};

room483.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(483);
            break;
        case "drawbtn":
            nav.bg("483_cave/bg.jpg", "483_cave/bg_night.jpg");
            nav.killbutton("grr");
            nav.killbutton("approach");
            nav.killbutton("beta");
            nav.killbutton("leave");
            zcl.kill();
            sc.select("meat", "483_cave/icon_meat.png", 0);
            sc.select("approach", "483_cave/icon_approach.png", 1);
            sc.select("beta", "483_cave/icon_beta.png", 2);
            sc.select("leave", "483_cave/icon_leave.png", 3);
            break;
        case "leave":
            char.room(475);
            break;
        default:
            break;
    }
};

room483.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Oh he looks angry, but so powerful. I better tread lightly or they " +
                "will all surely rip me to shreds. ",
            button: [
                { chatID: 1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Don't be angry. Who's a good boy.",
            button: [
                { chatID: -1, text: "Talking to him isn't working. ", callback: "reset" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I don't have any raw meat. I wonder where I can get some.",
            button: [
                { chatID: -1, text: "...", callback: "drawbtn" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "He's getting angry. I better not approch any closer. ",
            button: [
                { chatID: -1, text: "...", callback: "drawbtn" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "That doesn't seem to work. They must be afraid of humans. If there " +
                "was some way to make myself look less like a human, and have a more natural " +
                "attire. ",
            button: [
                { chatID: -1, text: "...", callback: "drawbtn" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "No way I'm getting on all fours for that mutt! ",
            button: [
                { chatID: -1, text: "[Need beast level 5]", callback: "drawbtn" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I haven't gained his trust yet.  ",
            button: [
                { chatID: -1, text: "[Need Relationship level 3]", callback: "drawbtn" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Weird. They all went inside. I wonder if I can go in too? I hope " +
                "this isn't some kind of trap where they all attack me and eat me alive! ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 8,
            speaker: "me",
            text: "Good doggies... Good doggies. I'm not going to hurt you. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "Crap! That isn't working. They see me as too human. Must come back " +
                "in a more natural attire.",
            button: [
                { chatID: -1, text: "[RUN!!!]", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};