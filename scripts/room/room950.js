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
        if (g.internal.day === 0) {
            nav.bg("950_cell/milk0.jpg");
            chat(2, 950);
        }
        else {
            nav.bg("950_cell/milk0.jpg");
            chat(17, 950);
        }
    }
    else {
        if (g.internal.constDayDirty > 3) {
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
                "name": "cock",
                "title": "Play with your pp",
                "left": 1508,
                "top": 142,
                "width": 134,
                "height": 243,
                "image": "950_cell/cock.png"
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
            if (g.internal.day > 1) {
                nav.killall();
                nav.bg("950_cell/view.jpg");
                g.roomTimeout = setTimeout(function () {
                    room950.btnclick("increment");
                }, 1000);
            }
            else {
                nav.killall();
                nav.bg("950_cell/view.jpg");
                g.roomTimeout = setTimeout(function () {
                    room950.btnclick("increment");
                }, 1000);
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};