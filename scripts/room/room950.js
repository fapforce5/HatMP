//Room name
var room950 = {};
room950.main = function () {
    $('#room-menu').show();
    if (sc.getstep("daria") < 2) {
        $('#room-menu').hide();
    }
    if (g.internal.interval > 3) {
        if (g.internal.constDayDirty > 3) {
            nav.bg("950_cell/cell3.jpg");
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
            chat(44, 950);
        }
        else {


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
                "left": 1680,
                "top": 150,
                "width": 200,
                "height": 150,
                "image": "950_cell/cock.png"
            });
            btnList.push({
                "type": "btn",
                "name": "brick",
                "title": "Loose Stone",
                "left": 832,
                "top": 511,
                "width": 132,
                "height": 79,
                "image": "950_cell/brick.png"
            });
        }
        if (g.internal.constDayDirty > 0) {
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
                "left": 1480,
                "top": 150,
                "width": 200,
                "height": 150,
                "image": "950_cell/squat.png"
            });
            btnList.push({
                "type": "btn",
                "name": "pushup",
                "title": "Do Pushups",
                "left": 1280,
                "top": 150,
                "width": 200,
                "height": 150,
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
            nav.killall();
            nav.bg("950_cell/pubg.jpg");
            nav.button({
                "type": "img",
                "name": "pu",
                "left": 160,
                "top": 0,
                "width": 1200,
                "height": 1080,
                "image": "950_cell/squat.gif"
            }, 950);
            chat(0, 950);
            break;
        case "pushup":
            nav.killall();
            nav.bg("950_cell/pubg.jpg");
            nav.button({
                "type": "img",
                "name": "pu",
                "left": 197,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "950_cell/pu.gif"
            }, 950);
            chat(1, 950);
            break;
        case "window":
            if (g.internal.day < 1 || g.get("cindy")) {
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
                else if (dariaStep === 2) {
                    if (g.internal.brick > 0) {
                        nav.killall();
                        nav.bg("950_cell/viewd.jpg");
                        chat(50, 950);
                    }
                    else {
                        nav.killall();
                        nav.bg("950_cell/view.jpg");
                        chat(27, 950);
                    }
                }
                else if (dariaStep === 3) {
                    nav.killall();
                    nav.bg("950_cell/viewd.jpg");
                    chat(52, 950);
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
            g.internal.constDayDirty = 0;
            nav.killall();
            nav.bg("950_cell/clean.jpg");
            if (g.internal.jo) {
                nav.killall();
                nav.bg("950_cell/celljo.jpg");
                chat(43, 950);
            }
            else {
                g.setTimeout = setTimeout(function () {
                    room950.btnclick("increment");
                }, 1000);
            }
            break;
        case "cock":
            nav.killall();
            nav.bg("950_cell/jobg.jpg");
            nav.button({
                "type": "btn",
                "name": "jo",
                "left": 823,
                "top": 590,
                "width": 631,
                "height": 490,
                "image": "950_cell/jo.png"
            }, 950);
            break;
        case "jo":
            nav.killall();
            nav.bg("950_cell/jobg1.jpg");
            cl.doCum();
            g.internal.jo = true;
            chat(42, 950);
            break;
        case "eatit":
            nav.bg("950_cell/eatit2.jpg");
            zcl.displayMain(400, 150, .4, "", true);
            chat(46, 950);
            break;
        case "brick":
            if (g.internal.brick < 4) {
                if (inv.has("chisel")) {
                    if (g.get("bodyLevel") < 3) {
                        chat(49, 950);
                    }
                    else {
                        g.internal.brick++;
                        nav.killall();
                        nav.bg("950_cell/chisel.jpg");
                        chat(53, 950);
                    }
                }

                else {
                    g.internal.brick = 1;
                    chat(48, 950);
                }
            }
            else {
                var bodhiStep = sc.getstep("bodhi");
                nav.killall();
                switch (bodhiStep) {
                    case 0:
                        g.internal.brick++;
                        nav.bg("950_cell/chisel.jpg");
                        chat(54, 950);
                        break;
                    case 1:
                        zcl.displayMain(-200, -1000, .8, "", true);
                        nav.bg("950_cell/b3.jpg");
                        chat(61, 950);
                        break;
                    case 2:
                        nav.bg("950_cell/bb0.jpg");
                        chat(68, 950);
                        break;
                    default:
                        break;
                }
            }
            break;
        case "bb0":
            nav.killall();
            nav.bg("950_cell/bb1.jpg");
            chat(69, 950);
            break;
        case "bb2":
            nav.modbutton("bb2", null, "bb3", null);
            chat(71, 950);
            break;
        case "bb3":
            nav.killall();
            nav.bg("950_cell/b2.jpg");
            scc.love("bodhi", 10);
            chat(72, 950);
            break;
        default:
            break;
    }
};

room950.chatcatch = function (callback) {
    switch (callback) {
        case "finishSquats":
            g.mod("leg", 34);
            g.mod("fitness", 20);
            g.mod("energy", -50);
            room950.btnclick("increment");
            break;
        case "finsihPushups":
            g.mod("body", 34);
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
            scc.love("cult", 5, 50);
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
            g.internal.constDayDirty = 0;
            g.internal.day++;
            g.internal.constDayDirty = 0;
            g.internal.jo = false;
            char.changeMenu("hide", false);
            scc.love("cult", -10, 100);
            g.roomTimeout = setTimeout(function () {
                nav.bg("951_box/box.jpg");
                chat(24, 950);
            }, 1000);
            break;
        case "box":
            g.internal.interval++;
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
        case "daria3":
            sc.setstep("daria", 3);
            room950.btnclick("increment");
            break;
        case "daria4":
            sc.setstep("daria", 4);
            inv.add("chisel");
            room950.btnclick("increment");
            break;
        case "reset":
            room950.btnclick("increment");
            break;
        case "clean1":
            nav.killall();
            nav.button({
                "type": "tongue",
                "name": "eatit",
                "left": 888,
                "top": 623,
                "width": 204,
                "height": 203,
                "image": "950_cell/eatit1.png",
                "title": "Eat the pussy"
            }, 950);
            nav.bg("950_cell/eatit1.jpg");
            scc.love("cult", -5, 100);
            break;
        case "clean3":
            nav.killall();
            nav.bg("950_cell/eatit3.jpg");
            g.mod('giveOralFemale', 1);
            break;
        case "clean4":
            room950.btnclick("clean");
            break;
        case "brick1":
            zcl.displayMain(-200, -1000, .8, "", true);
            nav.bg("950_cell/b1.jpg");
            break;
        case "b2":
            nav.bg("950_cell/b2.jpg");
            break;
        case "b1":
            sc.setstep("bodhi", 1);
            room950.btnclick("increment");
            break;
        case "b4":
            nav.bg("950_cell/b4.jpg");
            break;
        case "bodhi2":
            sc.setstep("bodhi", 2);
            room950.btnclick("increment");
            break;
        case "bb0":
            nav.button({
                "type": "btn",
                "name": "bb0",
                "left": 998,
                "top": 302,
                "width": 652,
                "height": 561,
                "image": "950_cell/bb0.png",
                "title": "poke his butt"
            }, 950);
            break;
        case "bb2":
            nav.killall();
            nav.bg("950_cell/bb2.jpg");
            nav.button({
                "type": "tongue",
                "name": "bb2",
                "left": 1205,
                "top": 539,
                "width": 186,
                "height": 186,
                "image": "950_cell/bb2.png",
                "title": "Eat it sissy"
            }, 950);
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
                { chatID: -1, text: "...", callback: "daria1" }
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
        {
            chatID: 42,
            speaker: "thinking",
            text: "Well that was better than just sitting around. Now what.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 43,
            speaker: "thinking",
            text: "Oh crap, that cum isn't coming out! Gross.",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 44,
            speaker: "cult",
            text: "This cell is a mess. Only cleanliness is the holy grail for Azrael. You must pay the price for your transgression. ",
            button: [
                { chatID: 45, text: "*GULP*", callback: "clean1" }
            ]
        },
        {
            chatID: 45,
            speaker: "cult",
            text: "You must cleanse yourself of your sins by cleaning my pussy. Now eat it!",
            button: [
                { chatID: -1, text: "MMmmm", callback: "" }
            ]
        },
        {
            chatID: 46,
            speaker: "cult",
            text: "Oh fuck! You are awesome! I'm going to cum all over your face! ",
            button: [
                { chatID: 47, text: "*lick* *lick* *lick*", callback: "clean3" }
            ]
        },
        {
            chatID: 47,
            speaker: "cult",
            text: "Now clean up this mess bitch!",
            button: [
                { chatID: -1, text: "Right away!", callback: "clean4" }
            ]
        },
        {
            chatID: 48,
            speaker: "thinking",
            text: "This stone is loose. If only I had a something to help pry it loose. Where am I going to get something to pry it? " +
                "It also looks heavy. I hope I'm strong enough to move it. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 49,
            speaker: "thinking",
            text: "I've chiseled it loose, but I'm not strong enough to move it. I should do some pushups. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 50,
            speaker: "daria",
            text: "Hello. Sorry you're trapped in here. I wish there was something I could do, but there's so much security all over. ",
            button: [
                { chatID: 51, text: "There is something. Can you get my stuff. Also a pick axe or something to break away this stone maybe?", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "daria",
            text: "I'll see what I can do.",
            button: [
                { chatID: -1, text: "Thanks!", callback: "daria3" }
            ]
        },
        {
            chatID: 52,
            speaker: "daria",
            text: "I got your bag. I also slipped a little gift in there for you; a chisel I found laying around. Maybe you can use it to " +
                "break out. I've got to run, I don't want them to see me helping you. Also you didn't get that from me if you get caught! ",
            button: [
                { chatID: -1, text: "I will not talk; Bye.", callback: "daria4" }
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "This is pretty loose. It shouldn't take me too long. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 54,
            speaker: "thinking",
            text: "Almost got it... Yes I broke through! It's too tight to squeeze through. I wonder what's on the other side. ",
            button: [
                { chatID: 55, text: "...", callback: "brick1" }
            ]
        },
        {
            chatID: 55,
            speaker: "me",
            text: "Hello?",
            button: [
                { chatID: 56, text: "...", callback: "b2" }
            ]
        },
        {
            chatID: 56,
            speaker: "bodhi",
            text: "Oh hay dude! WAZZZ UP! Are you stuck in here too?",
            button: [
                { chatID: 57, text: "Oh hi and yes I am", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "bodhi",
            text: "Totally awesome! Am I right? I get a blow-y every day and they gime me a bed and free grub! Best time " +
                "ever!",
            button: [
                { chatID: 58, text: "But aren't you trapped in there?", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "bodhi",
            text: "Trapped? No, way José. Why would they trap us? This is the best thing ever! ",
            button: [
                { chatID: 59, text: "Oh. I'm trapped. How do I get out?", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "bodhi",
            text: "Oh totally lame. Have you tried being awesome and not being a douche? Just enjoy the stay",
            button: [
                { chatID: 60, text: "Groan. I need to get out. ", callback: "" }
            ]
        },
        {
            chatID: 60,
            speaker: "bodhi",
            text: "No can do! I'm going to catch some Z's. Take is sleazy! ",
            button: [
                { chatID: -1, text: "Oh, yeah. Totally bro, sure. ", callback: "b1" }
            ]
        },
        {
            chatID: 61,
            speaker: "me",
            text: "*whisper* Hay " + sc.n("bodhi") + ". Over here.",
            button: [
                { chatID: 62, text: "...", callback: "b4" }
            ]
        },
        {
            chatID: 62,
            speaker: "bodhi",
            text: "Huh? Oh, you again. What's up?",
            button: [
                { chatID: 63, text: "Do you still want to stay here forever?", callback: "b2" }
            ]
        },
        {
            chatID: 63,
            speaker: "bodhi",
            text: "Oh no way dude. Forever is so long. It's cool for now. ",
            button: [
                { chatID: 64, text: "But you're trapped in here and you have no choice. ", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "bodhi",
            text: "I'm trapped in the best place. You should try being good so they let you out. I'll show you around. ",
            button: [
                { chatID: 65, text: "Grrr. ok. How do I get out. ", callback: "" }
            ]
        },
        {
            chatID: 65,
            speaker: "bodhi",
            text: "It's so easy dude. Just clean your cell and give them your cum. How do you not do that?",
            button: [
                { chatID: 66, text: "Fine! I'll give that a try. ", callback: "" }
            ]
        },
        {
            chatID: 66,
            speaker: "bodhi",
            text: "Cool. Just learn to enjoy it here.  ",
            button: [
                { chatID: 67, text: "Enjoy it? I'm trapped!", callback: "bodhi2" }
            ]
        },
        {
            chatID: 67,
            speaker: "bodhi",
            text: "Hay Bodhisattva the path to enlightenment is through inner peace. You have to accept there is no fight, just " +
                "mellow and allow the pleasure. To earn their trust, you must be trustworthy. ",
            button: [
                { chatID: -1, text: "Fine", callback: "reset" }
            ]
        },
        {
            chatID: 68,
            speaker: "thinking",
            text: "He doens't know I can see him. His butt is right there. Should I call out, or maybe I can suprise him..",
            button: [
                { chatID: -1, text: "Suprise him", callback: "bb0" },
                { chatID: 73, text: "Call out", callback: "b2" }
            ]
        },
        {
            chatID: 69,
            speaker: "bodhi",
            text: "<span class='hl-pink'>MOAN</span>",
            button: [
                { chatID: 70, text: "?", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "bodhi",
            text: "That's so nice. Lick it.",
            button: [
                { chatID: -1, text: "", callback: "bb2" }
            ]
        },
        {
            chatID: 71,
            speaker: "bodhi",
            text: "<span class='hl-pink'>Hahah Again!</span>",
            button: [
                { chatID: -1, text: "", callback: "" }
            ]
        },
        {
            chatID: 72,
            speaker: "bodhi",
            text: "I liked that. I've never had someone lick my ass before. It's totally sweet. I think we just became friends!",
            button: [
                { chatID: 73, text: "Sweet", callback: "" }
            ]
        },
        {
            chatID: 73,
            speaker: "bodhi",
            text: "So I was talking to my owner and she said she'll put in for a job outside the cell. If you do well, they " +
                "might let you do other jobs. ",
            button: [
                { chatID: 73, text: "Sweet", callback: "" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};