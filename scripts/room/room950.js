//Room name
var room950 = {};
room950.main = function () {
    if (g.internal.interval > 3) {
        if (g.internal.constDayDirty > 3) {
            zcl.kneel(400, 900, .4, "");
            nav.button({
                "type": "img",
                "name": "cult",
                "left": 501,
                "top": 0,
                "width": 378,
                "height": 1080,
                "image": "950_cell/cult_side.png"
            }, 950);
        }


        nav.bg("950_cell/cell_dark.jpg");
        nav.button({
            "type": "btn",
            "name": "sleep",
            "title": "Sleep",
            "left": 994,
            "top": 685,
            "width": 684,
            "height": 103,
            "image": "950_cell/bed_night.png"
        }, 950);
    }
    else if (g.internal.interval === 3) {
        g.internal.interval = 4;
        if (g.internal.jo) {
            nav.bg("950_cell/milk0.jpg");
            chat(21, 950);
        }
        else {
            if (g.internal.day === 0) {
                nav.bg("950_cell/milk0.jpg");
                chat(2, 950);
            }
            else {
                nav.bg("950_cell/milk0.jpg");
                chat(17, 950);
            }
        }
    }
    else {
        if (g.internal.jo) {
            nav.bg("950_cell/celljo.jpg");
        }
        else if (g.internal.constDayDirty > 3) {
            nav.bg("950_cell/cell3.jpg");
        }
        else if (g.internal.constDayDirty > 2) {
            nav.bg("950_cell/cell2.jpg");
        }
        else if (g.internal.constDayDirty > 1) {
            nav.bg("950_cell/cell1.jpg");
        }
        //char.changeMenu("hide", false);
        var btnList = [
            {
                "type": "btn",
                "name": "nap",
                "title": "Sleep",
                "left": 994,
                "top": 685,
                "width": 684,
                "height": 103,
                "image": "950_cell/bed.png"
            },
            {
                "type": "btn",
                "name": "window",
                "title": "Stare out the window",
                "left": 119,
                "top": 0,
                "width": 234,
                "height": 308,
                "image": "950_cell/window.png"
            }
        ];
        if (g.internal.day > 0) {
            btnList.push({
                "type": "btn",
                "name": "cock",
                "title": "Play with your pp",
                "left": 1508,
                "top": 142,
                "width": 134,
                "height": 243,
                "image": "950_cell/cock.png"
            });
        }
        if (!g.internal.cleaned) {
            btnList.push({
                "type": "btn",
                "name": "clean",
                "title": "Clean your cell",
                "left": 374,
                "top": 392,
                "width": 398,
                "height": 484,
                "image": "950_cell/clean.png"
            });
        }
        if (g.get("energy") > 49) {
            btnList.push({
                "type": "btn",
                "name": "squat",
                "title": "Do Squats",
                "left": 1160,
                "top": 130,
                "width": 153,
                "height": 256,
                "image": "950_cell/squat.png"
            });
            btnList.push({
                "type": "btn",
                "name": "pushup",
                "title": "Do Pushups",
                "left": 699,
                "top": 193,
                "width": 256,
                "height": 130,
                "image": "950_cell/pushup.png"
            });
        }
        $.each(btnList, function (i, v) {
            nav.button(v, 950);
        });
    }
};
// g.pass = { day: 0, interval: 0, cleaned: false };
room950.btnclick = function (name) {
    switch (name) {
        case "sleep":
            nav.killall();
            g.internal.interval = 0;
            g.internal.constDayDirty++;
            g.internal.day++;
            g.internal.cleaned = false;
            g.internal.jo = false;
            g.pass = 950;
            char.room(28);
            break;
        case "nap":
            nav.killall();
            nav.bg("28_transformation/sleep.jpg");
            g.mod("energy", 50);
            g.roomTimeout = setTimeout(function () {
                room950.btnclick("increment");
            }, 1000);
            break;
        case "squat":
            chat(0, 950);
            break;
        case "pushup":
            chat(1, 950);
            break;
        case "window":
            if (g.internal.day > 1 || g.get("cindy")) {
                nav.killall();
                nav.bg("950_cell/view.jpg");
                chat(27, 950);
            }
            else {
                g.set("cindy", false);
                var dariaStep = sc.getstep("daria");
                if (dariaStep === 0) {
                    nav.killall();
                    nav.bg("950_cell/viewd.jpg");
                    chat(28, 950);
                }
                else if (dariaStep === 1) {
                    nav.killall();
                    nav.bg("950_cell/viewd.jpg");
                    chat(36, 950);
                }
                else {
                    nav.killall();
                    nav.bg("950_cell/view.jpg");
                    chat(27, 950);
                }
            }
            break;
        case "increment":
            g.internal.interval++;
            char.room(950);
            break;
        case "clean":
            g.internal.cleaned = true;
            g.internal.constDayDirty = 0;
            nav.killall();
            nav.bg("950_cell/clean.jpg");
            g.setTimeout = setTimeout(function () {
                room950.btnclick("increment");
            }, 1000);
            break;
        case "cock":
            nav.killall();
            nav.bg("950_cell/jobg.jpg");
            btnList.push({
                "type": "btn",
                "name": "jo",
                "left": 823,
                "top": 590,
                "width": 631,
                "height": 490,
                "image": "950_cell/jo.png"
            });
            break;
        case "jo":
            nav.killall();
            nav.bg("950_cell/jobg1.jpg");
            cl.doCum();
            g.internal.jo = true;
            break;
        default:
            break;
    }
};

room950.chatcatch = function (callback) {
    switch (callback) {
        case "finishSquats":
            g.mod("leg", 17);
            g.mod("fitness", 20);
            g.mod("energy", -50);
            room950.btnclick("increment");
            break;
        case "finsihPushups":
            g.mod("body", 17);
            g.mod("fitness", 20);
            g.mod("energy", -50);
            room950.btnclick("increment");
            break;
        case "milk1":
            nav.bg("950_cell/milk1.jpg");
            break;
        case "milk2":
            nav.bg("950_cell/milk2.jpg");
            break;
        case "milk3":
            nav.bg("950_cell/milk3.jpg");
            break;
        case "milk4":
            nav.bg("950_cell/milk4.jpg");
            break;
        case "milk5":
            nav.bg("950_cell/milk5.jpg");
            break;
        case "milk6":
            nav.bg("950_cell/milk6.jpg");
            break;
        case "milk7":
            cl.doCum(true);
            nav.bg("950_cell/milk7.jpg");
            break;
        case "milk8":
            nav.bg("950_cell/milk8.jpg");
            break;
        case "milk9":
            nav.bg("950_cell/milk9.jpg");
            break;
        case "milk10":
            room950.btnclick("increment");
            break;
        case "jo0":
            nav.killall();
            nav.bg("950_cell/jobg1.jpg");
            break;
        case "jo1":
            nav.bg("950_cell/cellgas.jpg");
            break;
        case "jo2":
            nav.bg("205_computerWork/blackBg.jpg");
            g.internal.interval = 0;
            g.internal.constDayDirty = 0;
            g.internal.day++;
            g.internal.cleaned = true;
            g.internal.jo = false;
            char.changeMenu("hide", false);
            g.roomTimeout = setTimeout(function () {
                nav.bg("950_cell/box.jpg");
                chat(24, 950);
            }, 1000);
            break;
        case "box":
            g.internal.box = 0;
            char.room(951);
            break;
        case "resetWindow":
            nav.bg("950_cell/view.jpg");
            break;
        case "daria1":
            sc.setstep("daria", 1);
            room950.btnclick("increment");
            break;
        case "daria2":
            sc.setstep("daria", 2);
            g.displaymenu = true;
            g.set("displayMenu", true);
            $('#room-menu').show();
            room950.btnclick("increment");
            break;
        case "reset":
            room950.btnclick("increment");
            break;
        default:
            break;
    }
};

room950.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Finish my squats. ",
            button: [
                { chatID: -1, text: "...", callback: "finishSquats" }
            ]
        },
        {
            chatID: 1,
            speaker: "thinking",
            text: "Finish my pushups. ",
            button: [
                { chatID: -1, text: "...", callback: "finsihPushups" }
            ]
        },
        {
            chatID: 2,
            speaker: "cult",
            text: "Are you ready to give your offering?",
            button: [
                { chatID: 3, text: "My offering?", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "cult",
            text: "Yes. We all must do our part to bring the coming of Azreal, and you must do your part. Now come. ",
            button: [
                { chatID: 4, text: "[Follow her]", callback: "milk1" }
            ]
        },
        {
            chatID: 4,
            speaker: "me",
            text: "What is this? Please don't put me up there! *whimper*",
            button: [
                { chatID: 5, text: "...", callback: "milk2" }
            ]
        },
        {
            chatID: 5,
            speaker: "cult",
            text: "All must give to Azreal, now up on the chains you before you also give the gift of pain. ",
            button: [
                { chatID: 6, text: "...", callback: "milk3" }
            ]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Now what? What are you going to do to us? Let me down.",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "random",
            text: "Hay! New person. Relax. This is the best part. ",
            button: [
                { chatID: 8, text: "What do you mean? Are they going to torture us?", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "random",
            text: "Just relax and enjoy it. Also you're giving me a giant headache whining and whimpering, so just be quiet. ",
            button: [
                { chatID: 9, text: "[Hang your head in defeat]", callback: "milk4" }
            ]
        },
        {
            chatID: 9,
            speaker: "jen",
            text: "This is what happens when you think you can fight against CUM; idiot. Well now you're going to work for us. Are " +
                "you ready for what's to come?",
            button: [
                { chatID: 10, text: "What's coming?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "jen",
            text: "Hahaha. You'll see. Bring them out!",
            button: [
                { chatID: 11, text: "...", callback: "milk5" }
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "Oh no, what is this?",
            button: [
                { chatID: 12, text: "...", callback: "milk6" }
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "Is she sucking my dick? ",
            button: [
                { chatID: 13, text: "?", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "She's sucking my dick!",
            button: [
                { chatID: 14, text: "!", callback: "milk7" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "UNGH!",
            button: [
                { chatID: 15, text: "...", callback: "milk8" }
            ]
        },
        {
            chatID: 15,
            speaker: "random",
            text: "First! ",
            button: [
                { chatID: 16, text: "What are you doing with my cum?", callback: "milk9" }
            ]
        },
        {
            chatID: 16,
            speaker: "cult",
            text: "Back to your cell slave. ",
            button: [
                { chatID: -1, text: "...", callback: "milk10" }
            ]
        },
        {
            chatID: 17,
            speaker: "cult",
            text: "It's time for your offering. ",
            button: [
                { chatID: 18, text: "...", callback: "milk6" }
            ]
        },
        {
            chatID: 18,
            speaker: "thinking",
            text: "Well, here it comes. ",
            button: [
                { chatID: 19, text: "...", callback: "milk7" }
            ]
        },
        {
            chatID: 19,
            speaker: "random",
            text: "UNGH! ",
            button: [
                { chatID: 20, text: "...", callback: "milk8" }
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "First again! He comes so easily!",
            button: [
                { chatID: -1, text: "...", callback: "milk10" }
            ]
        },
        {
            chatID: 21,
            speaker: "cult",
            text: "I've come to collect you to give your offering... What is that on the wall?",
            button: [
                { chatID: 22, text: "ummm", callback: "jo0" }
            ]
        },
        {
            chatID: 22,
            speaker: "cult",
            text: "You jacked off didn't you! You wasted our seed on the wall! For that you must be punished! Release the gas!",
            button: [
                { chatID: 23, text: "*GULP*", callback: "jo1" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "Oh crap.",
            button: [
                { chatID: -1, text: "...", callback: "jo2" }
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "What is that light. Am I dead?",
            button: [
                { chatID: 25, text: "...", callback: "" }
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "I can't seem to move. What the hell. What are they doing?",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "me",
            text: "AAAAAA!! Aaaaaa",
            button: [
                { chatID: -1, text: "...", callback: "box" }
            ]
        },
        {
            chatID: 27,
            speaker: "thinking",
            text: "Nothing here.",
            button: [
                { chatID: -1, text: "Stop Looking", callback: "reset" }
            ]
        },
        {
            chatID: 28,
            speaker: "me",
            text: "Oh! Hi.",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "random",
            text: "I'm not supposed to talk to you. ",
            button: [
                { chatID: 30, text: "Wait. Don't take off. I've been taken prisoner and I need help. ", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "random",
            text: "I heard. What did you do to get imprisoned anyway? Are you the one that pooped on the cafeteria floor? ",
            button: [
                { chatID: 31, text: "...", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "thinking",
            text: "Can I talk to her. If she's out here she's obviously in the cult, but she's wearing normal clothes. I don't really " +
                "have a choice. I guess I can trust her, but not too much. Also who would poop on a cafeteria floor?",
            button: [
                { chatID: 32, text: "...", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "me",
            text: "Oh gross, no. I would never poop in public. I was just passing a note to Jen. ",
            button: [
                { chatID: 33, text: "...", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "random",
            text: "Ugh. She has the depth of an inflatable pool. You wern't trying to ask her out were you? She's incredibly loyal to " +
                "Ubel who treats her like a lap dog that he can fuck. ",
            button: [
                { chatID: 34, text: "No, no no. Just trying to learn more about this place. ", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "random",
            text: "*Scoff* You must think I'm pretty dumb. Have fun in the cell. Bye",
            button: [
                { chatID: 35, text: "Wait. Come back, I didn't get your name. ", callback: "resetWindow" }
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "That was weird. I wonder what she's doing out there. ",
            button: [
                { chatID: 35, text: "...", callback: "daria1" }
            ]
        },
        {
            chatID: 36,
            speaker: "random",
            text: "You again. If you wern't locked in a cell I would assume you're a stalker. ",
            button: [
                { chatID: 37, text: "Oh hahaha. Hi. So what are you doing out here? ", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "random",
            text: "I need fresh air and a sense of normalcy. The cult is entertaining at times, but can get a bit tedious. ",
            button: [
                { chatID: 38, text: "Yeah it can. Want to trade places? ", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "random",
            text: "Oh hahaha. You almost got me. I almost totally let you out. Almost. So I was asking around about you. Are you " +
                sc.n("me") + "?",
            button: [
                { chatID: 39, text: "Yes, that's me. ", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "random",
            text: "I know your " + sc.n("landlord") + "!",
            button: [
                { chatID: 40, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "daria",
            text: "Yes, I'm " + sc.n("daria") + ". I worked with her. You've really put yourself into a mess you know. ",
            button: [
                { chatID: 41, text: "Oh I do", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "daria",
            text: "Here's your phone. You won't be able to get reciption out here, no towers. I've got to go before someone " +
                "catches me. ",
            button: [
                { chatID: -1, text: "Thanks!", callback: "daria2" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};