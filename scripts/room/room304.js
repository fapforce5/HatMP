//Room name
var room304 = {};
room304.main = function () {
    if (g.internal === "202hallway") {
        room304.btnclick("drawHallway");
    }
    else {
        var btnList = [{
            "type": "btn",
            "name": "livingroomdoor",
            "left": 1055,
            "top": 69,
            "width": 335,
            "height": 772,
            "image": "304_room202/livingroomdoor.png"
        },
        {
            "type": "btn",
            "name": "rent",
            "left": 759,
            "top": 854,
            "width": 182,
            "height": 114,
            "image": "304_room202/rent.png"
        }];
        var navList = [303, 0];
        $.each(btnList, function (i, v) {
            nav.button(v, 304);
        });
        nav.buildnav(navList);
    }
};

room304.btnclick = function (name) {
    switch (name) {
        case "rent":
            if (gv.get("waitressSteal")) {
                chat(4, 304);
            }
            else {
                chat(5, 304);
            }
            break;
        case "livingroomdoor":
            room304.btnclick("drawHallway");
            break;
        case "drawHallway":
            g.internal = null;
            nav.killall();
            nav.buildnav([304, 0]);
            nav.bg("304_room202/hallway.jpg");
            nav.button({
                "type": "btn",
                "name": "drawDollyroom",
                "left": 431,
                "top": 62,
                "width": 138,
                "height": 949,
                "title": "Dolly's Room",
                "image": "304_room202/dollyroom.png"
            }, 304);
            nav.button({
                "type": "btn",
                "name": "drawHollyroom",
                "left": 792,
                "top": 146,
                "width": 382,
                "height": 757,
                "title": "Holly's Room",
                "image": "304_room202/hollyroom.png"
            }, 304);
            nav.button({
                "type": "btn",
                "name": "drawMollyroom",
                "left": 1455,
                "top": 15,
                "width": 133,
                "height": 1052,
                "title": "Molly's Room",
                "image": "304_room202/mollyroom.png"
            }, 304);
            break;
        case "drawDollyroom":
            g.internal = "202hallway";
            nav.kill();
            nav.bg("304_room202/dollyroom.jpg");
            if (!cl.hasClothing("panties", "dolly")) {
                nav.button({
                    "type": "btn",
                    "name": "dollylaundry",
                    "left": 680,
                    "top": 720,
                    "width": 210,
                    "height": 213,
                    "title": "Dolly's Laundry Basket",
                    "image": "304_room202/dollyLaundryx.png"
                }, 304);
            }
            else {
                nav.button({
                    "type": "btn",
                    "name": "dollylaundry",
                    "left": 680,
                    "top": 720,
                    "width": 210,
                    "height": 213,
                    "title": "Dolly's Laundry Basket",
                    "image": "304_room202/dollyLaundry.png"
                }, 304);
            }
            nav.button({
                "type": "btn",
                "name": "dollydrawer",
                "left": 1306,
                "top": 606,
                "width": 144,
                "height": 60,
                "title": "Dolly's Nightstand Drawer",
                "image": "304_room202/dollyDrawer.png"
            }, 304);
            nav.button({
                "type": "btn",
                "name": "dollysuitcase",
                "left": 446,
                "top": 825,
                "width": 262,
                "height": 112,
                "title": "Dolly's Nightstand Drawer",
                "image": "304_room202/dollySuitcase.png"
            }, 304);
            nav.button({
                "type": "btn",
                "name": "drawHallway",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            break;
        case "drawHollyroom":
            g.internal = "202hallway";
            nav.kill();
            nav.bg("304_room202/hollyroom.jpg");
            nav.button({
                "type": "btn",
                "name": "hollylaundry",
                "left": 1373,
                "top": 779,
                "width": 254,
                "height": 274,
                "title": "Holly's Laundry Basket",
                "image": "304_room202/hollyLaundry.png"
            }, 304);
            nav.button({
                "type": "btn",
                "name": "drawHallway",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            break;
        case "dollylaundry":
            nav.kill();
            nav.bg("304_room202/dollylaundry.jpg");
            if (!cl.hasClothing("panties", "dolly")) {
                nav.button({
                    "type": "btn",
                    "name": "dollypanties",
                    "left": 826,
                    "top": 488,
                    "width": 369,
                    "height": 405,
                    "title": "Dolly's dirty panties",
                    "image": "304_room202/dollypanties.png"
                }, 304);
            }
            nav.button({
                "type": "btn",
                "name": "drawDollyroom",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            break;
        case "dollypanties":
            nav.killbutton("dollypanties");
            nav.bg("304_room202/dollypanties.jpg");
            cl.add("panties", "dolly");
            cl.add("bra", "dolly");
            chat(3, 304);
            break;
        case "dollysuitcase":
            nav.kill();
            nav.bg("304_room202/dollysuitcase.jpg");
            nav.button({
                "type": "btn",
                "name": "drawDollyroom",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            break;
        case "dollydrawer":
            nav.kill();
            nav.bg("304_room202/dollydrawer.jpg");
            nav.button({
                "type": "btn",
                "name": "drawDollyroom",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            break;
        case "hollylaundry":
            nav.kill();
            nav.bg("304_room202/hollylaundry.jpg");
            nav.button({
                "type": "btn",
                "name": "drawHollyroom",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            if (!cl.hasClothing("panties", "holly")) {
                nav.button({
                    "type": "btn",
                    "name": "hollypanties",
                    "left": 1010,
                    "top": 390,
                    "width": 648,
                    "height": 322,
                    "title": "Holly's dirty panties",
                    "image": "304_room202/hollypanties.png"
                }, 304);
            }
            break;
        case "hollypanties":
            nav.killbutton("hollypanties");
            nav.bg("304_room202/hollypanties.jpg");
            cl.add("panties", "holly");
            chat(2, 304);
            break;
        case "drawMollyroom":
            g.internal = "202hallway";
            nav.kill();
            nav.bg("304_room202/mollyroom.jpg");
            nav.button({
                "type": "btn",
                "name": "mollybed",
                "left": 811,
                "top": 936,
                "width": 478,
                "height": 39,
                "title": "Under her bed",
                "image": "304_room202/mollybed.png"
            }, 304);
            nav.button({
                "type": "btn",
                "name": "mollycloset",
                "left": 162,
                "top": 179,
                "width": 360,
                "height": 625,
                "title": "Look in her closet",
                "image": "304_room202/mollycloset.png"
            }, 304);
            nav.button({
                "type": "btn",
                "name": "drawHallway",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            break;
        case "mollycloset":
            nav.kill();
            nav.bg("304_room202/mollycloset.jpg");
            if (!cl.hasClothing("buttplug", "p")) {
                nav.button({
                    "type": "btn",
                    "name": "pigplug",
                    "left": 771,
                    "top": 599,
                    "width": 194,
                    "height": 69,
                    "title": "Pig butt plug",
                    "image": "304_room202/pigplug.png"
                }, 304);
                nav.button({
                    "type": "btn",
                    "name": "drawMollyroom",
                    "left": 1700,
                    "top": 800,
                    "width": 160,
                    "height": 160,
                    "image": "6_computer/back.png"
                }, 304);
            }
            break;
        case "mollybed":
            nav.kill();
            nav.bg("304_room202/mollybed.jpg");
            if (!cl.hasClothing("panties", "molly")) {
                nav.button({
                    "type": "btn",
                    "name": "mollypanties",
                    "left": 372,
                    "top": 849,
                    "width": 775,
                    "height": 231,
                    "title": "Molly's dirty panties",
                    "image": "304_room202/mollypanties.png"
                }, 304);
            }
            nav.button({
                "type": "btn",
                "name": "drawMollyroom",
                "left": 1700,
                "top": 800,
                "width": 160,
                "height": 160,
                "image": "6_computer/back.png"
            }, 304);
            break;
        case "mollypanties":
            nav.killbutton("mollypanties");
            nav.bg("304_room202/mollypanties.jpg");
            cl.add("panties", "molly");
            cl.add("bra", "molly");
            chat(1, 304);
            break;
        case "pigplug":
            nav.killbutton("pigplug");
            cl.add("buttplug", "p");
            chat(0, 304);
            break;
        default:
            break;
    }
};

room304.chatcatch = function (callback) {
    switch (callback) {
        case "mollypanties":
            nav.bg("304_room202/mollybed.jpg");
            break;
        case "hollypanties":
            nav.bg("304_room202/hollylaundry.jpg");
            break;
        case "dollypanties":
            nav.bg("304_room202/dollylaundry.jpg");
            break;
        case "steal":
            gv.mod("money", 1489);
            gv.set("waitressSteal", true);
            break;
        default:
            break;
    }
};

room304.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Oink oink. Guess who's going to go in my butthole? Why you my little piggy plug. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Molly's panties added to inventory. ",
            button: [
                { chatID: -1, text: "...", callback: "mollypanties" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Holly's panties added to inventory. ",
            button: [
                { chatID: -1, text: "...", callback: "hollypanties" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Dolly's panties added to inventory. ",
            button: [
                { chatID: -1, text: "...", callback: "dollypanties" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "Looks like the box is empty. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "It looks like they've saved up some rent money. I really should leave it alone. ",
            button: [
                { chatID: -1, text: "[Leave the box alone]", callback: "" },
                { chatID: 6, text: "[Steal all their rent money]", callback: "steal" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "I feel terrible stealing from them. I guess I just may be a terrible bastard. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};