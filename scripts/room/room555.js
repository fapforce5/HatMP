//Room name
var room555 = {};
room555.main = function () {
    if (sc.getMission("g", "secret").notStarted) {
        sc.startMission("g", "secret");
        sc.completeMissionTask("g", "secret", 0, true);
        chat(32, 555);
    }
    else if (cl.isLewd()) {
        room555.chatcatch("drawIcons");
    }
    else {
        chat(0, 555);
    }
};

room555.btnclick = function (name) {
    switch (name) {
        case "row1":
            nav.killall();
            nav.bg("555_backgym/pull2.jpg");
            nav.button({
                "type": "btn",
                "name": "row2",
                "left": 380,
                "top": 0,
                "width": 236,
                "height": 1080,
                "image": "555_backgym/rope2l.png"
            }, 555);
            nav.button({
                "type": "btn",
                "name": "row2",
                "left": 1306,
                "top": 0,
                "width": 236,
                "height": 1066,
                "image": "555_backgym/rope2r.png"
            }, 555);
            if (g.pass === 5)
                chat(13, 555);
            break;
        case "row2":
            g.pass++;
            nav.killall();
            nav.bg("555_backgym/pull1.jpg");
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 0,
                "top": 0,
                "width": 364,
                "height": 1080,
                "image": "555_backgym/rope1l.png"
            }, 555);
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 1674,
                "top": 0,
                "width": 246,
                "height": 1066,
                "image": "555_backgym/rope1r.png"
            }, 555);
            break;
        case "thrust":
            g.pass++;
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "thrust1",
                "left": 231,
                "top": 0,
                "width": 1599,
                "height": 1080,
                "image": "555_backgym/thrust2.png"
            }, 555);
            break;
        case "thrust1":
            if (g.pass > 5) {
                nav.killall();
                nav.button({
                    "type": "img",
                    "name": "thrust1",
                    "left": 231,
                    "top": 0,
                    "width": 1559,
                    "height": 1080,
                    "image": "555_backgym/thrust3.png"
                }, 555);
                chat(25, 555);
            }
            else {
                nav.killall();
                nav.button({
                    "type": "btn",
                    "name": "thrust",
                    "left": 231,
                    "top": 0,
                    "width": 1559,
                    "height": 1080,
                    "image": "555_backgym/thrust1.png"
                }, 555);
            }
            break;
        case "icon_exit":
            cl.undo();
            char.room(551);
            break;
        case "icon_g":
            nav.killall();
            sc.select("icon_curls", "555_backgym/icon_curls.png", 0);
            sc.select("icon_yoga", "555_backgym/icon_yoga.png", 1);
            sc.select("icon_hipthruster", "555_backgym/icon_hipthruster.png", 2);
            sc.selectCancel("icon_back", 3);
            break;
        case "icon_back":
            room555.chatcatch("drawIcons");
            break;
        case "icon_curls":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else {
                nav.killall();
                if (sc.getMissionTask("g", "secret", 1).notStarted) {
                    sc.startMissionTask("g", "secret", 1);
                    chat(10, 555);
                }
                else
                    chat(12, 555);
            }
            break;
        case "icon_hipthruster":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else {
                if (sc.getMissionTask("g", "secret", 2).notStarted) {
                    nav.killall();
                    sc.startMissionTask("g", "secret", 2);
                    chat(36, 555);
                }
                else {
                    nav.killall();
                    if(cl.c.chastity === null)
                        nav.bg("555_backgym/thrust-1.jpg");
                    else
                        nav.bg("555_backgym/thrust-1_c.jpg");
                    chat(38, 555);
                }
            }
            break;
        case "icon_yoga":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else if (cl.c.chastity !== null) {
                chat(35, 555);
            }
            else {
                if (sc.getMissionTask("g", "secret", 3).notStarted) {
                    sc.startMissionTask("g", "secret", 3);
                    chat(44, 555);
                }
                else {
                    nav.killall();
                    nav.bg("555_backgym/yoga0.jpg");
                    chat(45, 555);
                }
            }
            break;
        case "g_thrust":
            if (g.internal < 9) {
                var image = ["555_backgym/thrustX.png", "555_backgym/thrust.png"];
                var bg;
                if (cl.c.chastity === null)
                    bg = ["555_backgym/thrust1.jpg", "555_backgym/thrust2.jpg"];
                else
                    bg = ["555_backgym/thrust1_c.jpg", "555_backgym/thrust2_c.jpg"];
                nav.modbutton("g_thrust", image[g.internal % 2], null, null);
                nav.bg(bg[g.internal % 2]);
                g.internal++;
            }
            else {
                nav.killall();
                if (cl.c.chastity === null) {
                    nav.bg("555_backgym/thrust3.jpg");
                    chat(40, 555);
                }
                else {
                    chat(52, 555);
                }
            }
            break;
        case "chad_situp":
            if (g.internal < 9) {
                var gendersitup = gender.pronoun("f");
                var imagesitup = ["555_backgym/up.png", "555_backgym/down.png"];
                var bgsitup = ["555_backgym/situp0_" + gendersitup + ".jpg", "555_backgym/situp1_" + gendersitup + ".jpg"];
                nav.modbutton("chad_situp", imagesitup[g.internal % 2], null, null);
                nav.bg(bgsitup[g.internal % 2]);
                g.internal++;
            }
            else {
                nav.killall();
                chat(55, 555);
            }
            break;
        case "chad_squats":
            if (g.internal < 9) {
                var gendersquat = gender.pronoun("f");
                var imagesquat = ["555_backgym/down.png", "555_backgym/up.png"];
                var bgsquat = ["555_backgym/squat0_" + gendersquat + ".jpg", "555_backgym/squat1_" + gendersquat + ".jpg"];
                nav.modbutton("chad_squats", imagesquat[g.internal % 2], null, null);
                nav.bg(bgsquat[g.internal % 2]);
            }
            else if (g.internal === 9) {
                nav.killall();
                nav.next("chad_squats");
                nav.bg("555_backgym/squat2_" + gender.pronoun("f") + ".jpg");
            }
            else {
                nav.killall();
                nav.bg("555_backgym/squat3_" + gender.pronoun("f") + ".jpg");
                chat(58, 555);
            }

            g.internal++;
            break;
        case "g_yoga":
            if (g.internal > 13) {
                nav.killall();
                nav.bg("555_backgym/yoga3.jpg");
                chat(46, 555);
            }
            else if (g.internal % 5 === 0) {
                nav.bg("555_backgym/yoga1.jpg");
                nav.modbutton("g_yoga", "555_backgym/yogahold1.png", null, null);
            }
            else if (g.internal % 5 === 1) {
                nav.modbutton("g_yoga", "555_backgym/yogahold2.png", null, null);
            }
            else if (g.internal % 5 === 2) {
                nav.modbutton("g_yoga", "555_backgym/yogahold3.png", null, null);
            }
            else if (g.internal % 5 === 3) {
                nav.modbutton("g_yoga", "555_backgym/yogarelax.png", null, null);
            }
            else if (g.internal % 5 === 4) {
                nav.bg("555_backgym/yoga2.jpg");
                nav.modbutton("g_yoga", "555_backgym/yogastretch.png", null, null);
            }
            g.internal++;
            break;
        case "icon_cardio":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else if (levels.analTake(3).c > 2) {
                chat(48, 555);
            }
            else {
                nav.killall();
                nav.bg("555_backgym/bike1_" + gender.pronoun("f") + ".gif");
                chat(47, 555);
            }
            break;
        case "icon_quad":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else if (levels.analTake(3).canTake) {
                chat(48, 555);
            }
            else {
                nav.killall();
                if(cl.c.chastity !== null)
                    nav.bg("555_backgym/m_c.jpg");
                else
                    nav.bg("555_backgym/m.jpg");
                chat(49, 555);
            }
            break;
        case "icon_splits":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else if (levels.analTake(4).canTake) {
                chat(48, 555);
            }
            else {
                nav.killall();
                if (cl.c.chastity !== null)
                    nav.bg("555_backgym/splits0_c.jpg");
                else
                    nav.bg("555_backgym/splits0.jpg");
                chat(50, 555);
            }

            break;
        case "icon_chad":
            nav.killall();
            sc.select("icon_cockkiss", "555_backgym/icon_cockkiss.png", 0);
            sc.select("icon_squat", "555_backgym/icon_cocksquat.png", 1);
            sc.selectCancel("icon_back", 2);
            //chat(51, 555);
            break;
        case "icon_cockkiss":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else {
                nav.killall();
                nav.bg("555_backgym/situp0_" + gender.pronoun("m") + ".jpg");
                chat(53, 555);
            }
            break;
        case "icon_squat":
            if (gv.get("energy") < 75) {
                chat(34, 555);
            }
            else {
                nav.killall();
                nav.bg("555_backgym/squat0_" + gender.pronoun("m") + ".jpg");
                chat(56, 555);
            }
            break;
        default:
            break;
    }
};

room555.chatcatch = function (callback) {
    switch (callback) {
        case "thrust4":
        case "thrust6":
        case "yoga0":
            nav.killall();
            nav.bg("555_backgym/" + callback + ".jpg");
            break;
        case "thrust-1":
        case "thrust0":
            if (cl.c.chastity === null)
                nav.bg("555_backgym/" + callback + ".jpg");
            else
                nav.bg("555_backgym/" + callback + "_c.jpg");
            break;
        case "strip":
            cl.nude();
            cl.display();
            if (cl.c.chest > 3)
                chat(1, 555);
            else if (cl.c.chest > 2)
                chat(2, 555);
            else if (cl.c.chest === 2)
                chat(3, 555);
            else if (cl.c.chastity !== null)
                chat(4, 555);
            else if (cl.c.cock < 2)
                chat(5, 555);
            else
                chat(6, 555);
            break;
        case "drawIcons":
            nav.killall();
            sc.select("icon_chad", "555_backgym/icon_chad.png", 0);
            sc.select("icon_g", "555_backgym/icon_g.png", 1);
            sc.select("icon_cardio", "555_backgym/icon_cardio.png", 2);
            sc.select("icon_splits", "555_backgym/icon_splits.png", 3);
            sc.select("icon_quad", "555_backgym/icon_quad.png", 4);
            sc.selectCancel("icon_exit", 5);
            break;
        case "rows":
            if (!sc.getEvent("g", -2)) {
                sc.setstep("g", -2);
                chat(10, 555);
            }
            else {

                chat(12, 555);
            }
            break;
        case "rows1":
            g.pass = 0;
            nav.killall();
            nav.bg("555_backgym/pull1.jpg");
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 0,
                "top": 0,
                "width": 364,
                "height": 1080,
                "image": "555_backgym/rope1l.png"
            }, 555);
            nav.button({
                "type": "btn",
                "name": "row1",
                "left": 1674,
                "top": 0,
                "width": 246,
                "height": 1066,
                "image": "555_backgym/rope1r.png"
            }, 555);
            break;
        case "toetouch":
            nav.killbutton("g");
            nav.button({
                "type": "img",
                "name": "toe",
                "left": 633,
                "top": 0,
                "width": 952,
                "height": 1080,
                "image": "555_backgym/bend.gif"
            }, 555);
            setTimeout(function () { chat(15, 555); }, 5000);
            break;
        case "exitUpper":
            levels.mod("strength", 55, 999);
            levels.mod("fitness", 15, 999);
            gv.mod("energy", -75);
            char.addtime(60);
            char.room(555);
            break;
        case "exitCardio":
            levels.mod("fitness", 85, 999);
            gv.mod("energy", -75);
            levels.anal(3);
            char.addtime(60);
            char.room(555);
            break;
        case "exitMachine":
            levels.mod("fitness", 50, 999);
            levels.mod("strength", 25, 999);
            gv.mod("energy", -75);
            levels.anal(3);
            char.addtime(60);
            char.room(555);
            break;
        case "exitLowercum":
            cl.doCum();
            room555.chatcatch("exitUpper");
            break;
        case "exitOral":
            levels.mod("strength", 55, 999);
            levels.mod("fitness", 15, 999);
            gv.mod("energy", -75);
            levels.oral(3);
            char.addtime(60);
            char.room(555);
            break;
        case "hips":
            if (sc.getEvent("g", -3)) {
                chat(16, 555);
            }
            else {
                chat(16, 555);
                sc.setstep("g", -3);
            }
            break;
        case "hip1":
            nav.killbutton("g");
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 385,
                "top": 529,
                "width": 1221,
                "height": 551,
                "image": "555_backgym/thrust0b.png"
            }, 555);
            break;
        case "hip2":
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 385,
                "top": 529,
                "width": 1221,
                "height": 551,
                "image": "555_backgym/thrust0a.png"
            }, 555);
            break;
        case "hip3":
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 389,
                "top": 0,
                "width": 1234,
                "height": 1080,
                "image": "555_backgym/thrust0c.png"
            }, 555);
            break;
        case "hip4":
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 385,
                "top": 0,
                "width": 1221,
                "height": 1080,
                "image": "555_backgym/thrust0d.png"
            }, 555);
            break;
        case "hip5":
            gv.mod("arousal", 100);
            nav.killbutton("hip");
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 231,
                "top": 0,
                "width": 1599,
                "height": 1080,
                "image": "555_backgym/thrust1.png"
            }, 555);
            break;
        case "hip5Click":
            g.pass = 0;
            nav.killbutton("hip");
            nav.button({
                "type": "btn",
                "name": "thrust",
                "left": 231,
                "top": 0,
                "width": 1599,
                "height": 1080,
                "image": "555_backgym/thrust1.png"
            }, 555);
            break;
        case "hip6":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "hip",
                "left": 231,
                "top": 0,
                "width": 1559,
                "height": 1080,
                "image": "555_backgym/thrust2.png"
            }, 555);
            break;
        case "hip7":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "thrust",
                "left": 231,
                "top": 0,
                "width": 1559,
                "height": 1080,
                "image": "555_backgym/thrust4.png"
            }, 555);
            break;
        case "hip8":
            nav.killall();
            nav.button({
                "type": "btn",
                "name": "g",
                "left": 1321,
                "top": 86,
                "width": 549,
                "height": 994,
                "image": "555_backgym/gcum.png"
            }, 555);
            break;
        case "resetLeave":
            cl.undo();
            char.room(551);
            break;
        case "spar":
            if (inv.has("sewer"))
                chat(30, 555);
            else
                chat(29, 555);
            break;
        case "training":
            char.room(556);
            break;
        case "fight":
            g.internal = { name: "g", bg: "gym", returnRoom: 556 };
            char.room(227);
            break;
        case "thrust1":
            g.internal = 0;
            nav.drawButton("555_backgym/thrust.png", "g_thrust");
            break;
        case "thrustPreg":
            cl.doCum(false);

            if (sc.getMission("g", "mom").notStarted) {
                sc.startMission("g", "mom");
                sc.completeMissionTask("g", "mom", 0);
                nav.bg("555_backgym/thrust5.jpg");
                chat(42, 555);
            }
            else {
                room555.chatcatch("exitUpper");
            }
            break;
        case "yoga1":
            g.internal = 0;
            nav.drawButton("555_backgym/yogastretch.png", "g_yoga");
            break;
        case "situp":
            nav.bg("555_backgym/situp1_" + gender.pronoun("f") + ".jpg");
            g.internal = 0;
            nav.drawButton("555_backgym/down.png", "chad_situp");
            break;
        case "squatDown":
            nav.bg("555_backgym/squat1_" + gender.pronoun("m") + ".jpg");
            break;
        case "squatGo":
            nav.bg("555_backgym/squat0_" + gender.pronoun("f") + ".jpg");
            g.internal = 1;
            nav.drawButton("555_backgym/down.png", "chad_squats");
            break;
        case "squatEnd":
            levels.mod("fitness", 50, 999);
            levels.mod("strength", 25, 999);
            gv.mod("energy", -75);
            levels.anal(4, false, "m", true);
            char.addtime(60);
            char.room(555);
            break;
        default:
            break;
    }
};

room555.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "g",
            text: "Clothes aren't allowed back here. Strip if off bitch.",
            button: [
                { chatID: -1, text: "[Strip]", callback: "strip" }
            ]
        },
        {
            chatID: 1,
            speaker: "chad",
            text: "Nice tits loser",
            button: [
                { chatID: -1, text: "Thanks?", callback: "drawIcons" }
            ]
        },
        {
            chatID: 2,
            speaker: "g",
            text: "Awww your tits are coming in nicely",
            button: [
                { chatID: -1, text: "Thanks", callback: "drawIcons" }
            ]
        },
        {
            chatID: 3,
            speaker: "chad",
            text: "Hahaha, look at those tiny titties! You're such a bitch your body is turning into one!",
            button: [
                { chatID: -1, text: "Thanks", callback: "drawIcons" }
            ]
        },
        {
            chatID: 4,
            speaker: "chad",
            text: "Hahaha. What kind of loser locks their cock away? I always knew you were a loser, but I didn't know you were such a little " +
            "faggot too!",
            button: [
                { chatID: -1, text: "oh", callback: "drawIcons" }
            ]
        },
        {
            chatID: 5,
            speaker: "g",
            text: "Oh wow, You're packing such a big beautiful cock! You should show that thing off more often!",
            button: [
                { chatID: -1, text: "Thank you", callback: "drawIcons" }
            ]
        },
        {
            chatID: 6,
            speaker: "chad",
            text: "Hahaha you have such a tiny cock! I get chicks laugh at you when you pull down your pants!",
            button: [
                { chatID: -1, text: "Oh, they do..", callback: "drawIcons" }
            ]
        },
        {
            chatID: 7,
            speaker: "chad",
            text: "You're looking good, but this will be a future release.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "chad",
            text: "No way loser, I'm not training you. Maybe come back when you got some tits faggot.",
            button: [
                { chatID: -1, text: "...", callback: "drawIcons" }
            ]
        },
        {
            chatID: 9,
            speaker: "g",
            text: "Ok champ, let's work on that puny little body of yours. What do you want to do? ",
            button: [
                { chatID: 14, text: "Toe Touches", callback: "" },
                { chatID: -1, text: "Standing Rows", callback: "rows" },
                { chatID: -1, text: "Hip Thrusters", callback: "hips" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
            ]
        },
        {
            chatID: 10,
            speaker: "g",
            text: "So this is the first time we're going to do Drippy Bicep Curls. The point of this exercise is to make you back more sexy and " +
                "give you an hourglass figure. I get so bored with the normal curls so I put in a bit of a twist, you're going to lift " +
            "me up. The added bonus for me is that I like being tied up.",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "g",
            text: "I'm going to tie myself into position, you grab the ropes and lift me up. Do you think you can handle that?",
            button: [
                { chatID: 12, text: "I can!", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "g",
            text: "Don't drop me with those puny little arms of yours!",
            button: [
                { chatID: -1, text: "Ok!", callback: "rows1" }
            ]
        },
        {
            chatID: 13,
            speaker: "g",
            text: "Good work out. Now hit the showers bitch.",
            button: [
                { chatID: -1, text: "Ok!", callback: "exitUpper" }
            ]
        },
        {
            chatID: 14,
            speaker: "g",
            text: "I like watching you do toe touches. Your pathetic little butt actually looks cute when you do it. Ready begin.",
            button: [
                { chatID: -1, text: "Ok!", callback: "toetouch" }
            ]
        },
        {
            chatID: 15,
            speaker: "g",
            text: "Ok slick, that's enough. Go hit the showers.",
            button: [
                { chatID: -1, text: "Ok!", callback: "exitUpper" }
            ]
        },
        {
            chatID: 16,
            speaker: "g",
            text: "Ok champ, I'm going to let you try some hip thrusters. Lay on your back with your knees up, then thrust up your hips. " +
            "focus on squeezing your butt when you do it. Ready",
            button: [
                { chatID: 17, text: "I am", callback: "hip1" }
            ]
        },
        {
            chatID: 17,
            speaker: "g",
            text: "Ok, now thrust your hips up",
            button: [
                { chatID: 18, text: "I am", callback: "hip2" }
            ]
        },
        {
            chatID: 18,
            speaker: "g",
            text: "And down",
            button: [
                { chatID: 19, text: "I am", callback: "hip1" }
            ]
        },
        {
            chatID: 19,
            speaker: "g",
            text: "This is boring...",
            button: [
                { chatID: 20, text: "hmmm", callback: "hip3" }
            ]
        },
        {
            chatID: 20,
            speaker: "g",
            text: "Now thrust up",
            button: [
                { chatID: 21, text: "hmmm", callback: "hip4" }
            ]
        },
        {
            chatID: 21,
            speaker: "g",
            text: "And down",
            button: [
                { chatID: 22, text: "hmmm", callback: "hip3" }
            ]
        },
        {
            chatID: 22,
            speaker: "g",
            text: "You know, it's such a waste of a good cock... Let's try something a bit different....",
            button: [
                { chatID: 23, text: "?", callback: "hip5" }
            ]
        },
        {
            chatID: 23,
            speaker: "g",
            text: "OOooooo thrust up! thrust up",
            button: [
                { chatID: 24, text: "[Thrust into her ass]", callback: "hip6" }
            ]
        },
        {
            chatID: 24,
            speaker: "g",
            text: "Fuck keep going",
            button: [
                { chatID: -1, text: "...", callback: "hip5Click" }
            ]
        },
        {
            chatID: 25,
            speaker: "g",
            text: "I can feel your cum filling my tight ass up!",
            button: [
                { chatID: 26, text: "...", callback: "hip7" }
            ]
        },
        {
            chatID: 26,
            speaker: "g",
            text: "It's sooo full of your cum!",
            button: [
                { chatID: 27, text: "...", callback: "hip8" }
            ]
        },
        {
            chatID: 27,
            speaker: "g",
            text: "Good workout today. I love a cum filled ass. Now hit the showers champ.",
            button: [
                { chatID: -1, text: "...", callback: "exitLowercum" }
            ]
        },
        {
            chatID: 28,
            speaker: "g",
            text: "What will it be today shrimp?",
            button: [
                { chatID: 9, text: "Workout", callback: "" },
                { chatID: -1, text: "Spar", callback: "spar" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
            ]
        },
        {
            chatID: 29,
            speaker: "g",
            text: "Ok wimp, I'm going to train you how to fight.",
            button: [
                { chatID: -1, text: "[Begin training]", callback: "training" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
            ]
        },
        {
            chatID: 30,
            speaker: "g",
            text: "What will it be today shrimp?",
            button: [
                { chatID: -1, text: "[Begin training]", callback: "training" },
                { chatID: 31, text: "[Spar]", callback: "" },
                { chatID: -1, text: "Oh, sorry I'm going to go.", callback: "resetLeave" },
            ]
        },
        {
            chatID: 31,
            speaker: "g",
            text: "Future release will include a full walkthrough and spar",
            button: [
                { chatID: 30, text: "Oh well...", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "g",
            text: "Welcome to the secret back gym. " + sc.n("chad") + " and I built this because " +
                "we needed a place for just the handsome and beautiful people can work out and not " +
                "be around the gross ugly people. I've decided you're no longer a disgusting blob of human " +
                "so you're now invited to work out with the most beautiful people of Fetville. ",
            button: [
                { chatID: 33, text: "Nice!", callback: "" },
            ]
        },
        {
            chatID: 33,
            speaker: "g",
            text: "And nothing is more beautiful than skin, so we only workout in the nude back here. " +
                "you can workout with either of us, or on your own on one of the pieces of equipment. So " +
                "strip down and choose your workout. ",
            button: [
                { chatID: -1, text: "...", callback: "strip" },
            ]
        },
        {
            chatID: 34,
            speaker: "thinking",
            text: "I don't have enough energy for that. [Need 75 points of energy]",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "g",
            text: "I'm not doing that while you're wearing chastity. It's not interesting for " +  
                "me. Take that thing off and come back. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "g",
            text: "Go lay down on the mat with your knees up.",
            button: [
                { chatID: 37, text: "ok", callback: "thrust-1" },
            ]
        },
        {
            chatID: 37,
            speaker: "g",
            text: "I'm going to work on holding my squat. You're going to work on your hip " +
                "thrusters. When I go down into my squat, thrust your hips up, then relax and " +
                "bring it down. Repeat that excersize till you can't thrust anymore. Be sure to " +
                "squeeze your glutes when you thrust to really get that deep burn. ",
            button: [
                { chatID: 38, text: "Totally!", callback: "thrust-1" },
            ]
        },
        {
            chatID: 38,
            speaker: "g",
            text: "Let me get into place before you start. ",
            button: [
                { chatID: 39, text: "...", callback: "thrust0" },
            ]
        },
        {
            chatID: 39,
            speaker: "g",
            text: "Now start thrusting. Big powerful thrusts!   ",
            button: [
                { chatID: -1, text: "OOoooo yeah!", callback: "thrust1" },
            ]
        },
        {
            chatID: 40,
            speaker: "g",
            text: "Are you cumming in me after only 9 thrusts! ",
            button: [
                { chatID: 41, text: "I can't help it. You're so damn tight!", callback: "thrust4" },
            ]
        },
        {
            chatID: 41,
            speaker: "g",
            text: "Just perfect! I'm going to be dripping your cum out of me for the rest of my " +
                "workout! ",
            button: [
                { chatID: -1, text: "...sorry", callback: "thrustPreg" },
            ]
        },
        {
            chatID: 42,
            speaker: "g",
            text: "You're lucky I'm on birth control or I would have to smash you in the face " +
                "for getting me pregnant. ",
            button: [
                { chatID: 43, text: "Oh good!", callback: "thrust6" },
            ]
        },
        {
            chatID: 43,
            speaker: "g",
            text: "Did I take my pills...",
            button: [
                { chatID: -1, text: "....", callback: "exitUpper" },
            ]
        },
        {
            chatID: 44,
            speaker: "g",
            text: "We're going to work on the Yoga Bridge pose. It will help strengthen your " +
                "lower back, glutes, and hamstrings. It will also relieve tension and fatigue " +
                "in your back. I'll have you lay down then stretch into the bridge pose and hold " +
                "before releasing and laying back down. ",
            button: [
                { chatID: 45, text: "ok. cool", callback: "yoga0" },
            ]
        },
        {
            chatID: 45,
            speaker: "g",
            text: "Ok, now stretch into the bridge position and hold it as long as you can. ",
            button: [
                { chatID: -1, text: "...", callback: "yoga1" },
            ]
        },
        {
            chatID: 46,
            speaker: "g",
            text: "That's a good boy.  ",
            button: [
                { chatID: -1, text: "...", callback: "exitLowercum" },
            ]
        },
        {
            chatID: 47,
            speaker: "thinking",
            text: "Oh ouch! My legs and asshole are so tired and sore! ",
            button: [
                { chatID: -1, text: "...", callback: "exitCardio" },
            ]
        },
        {
            chatID: 48,
            speaker: "thinking",
            text: "That dildo is too big for my tiny little butt. ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 49,
            speaker: "thinking",
            text: "Oh fuck! I can feel it really streatching my quads and slutty hole!",
            button: [
                { chatID: -1, text: "...", callback: "exitMachine" },
            ]
        },
        {
            chatID: 50,
            speaker: "thinking",
            text: "Oh fuck! I can feel it really streatching my legs and slutty hole!",
            button: [
                { chatID: -1, text: "...", callback: "exitMachine" },
            ]
        },
        {
            chatID: 51,
            speaker: "me",
            text: "Images are with the artist. I promise I'll get this added in soon.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "g",
            text: "Ok, I'm bored. You can go hump a pillow if you want to keep thrusting into " +
                "something. ", 
            button: [
                { chatID: -1, text: "ok", callback: "exitUpper" },
            ]
        },
        {
            chatID: 53,
            speaker: "chad",
            text: "Allright " + gender.pronoun("faggot") + " sit up and kiss my supior cock. It's the closest to a " +
                "real man's cock you'll ever get. ",
            button: [
                { chatID: 54, text: "[Situp]", callback: "situp" },
            ]
        },
        {
            chatID: 54,
            speaker: "chad",
            text: "Good " + gender.pronoun("fag") + ". I can tell you really love the cock. Keep giving my cock more kisses. ",
            button: [
                { chatID: -1, text: "[Situp]", callback: "situp" },
            ]
        },
        {
            chatID: 55,
            speaker: "chad",
            text: "So gay. Kissing a man's cock. ",
            button: [
                { chatID: -1, text: "...", callback: "exitOral" },
            ]
        },
        {
            chatID: 56,
            speaker: "chad",
            text: "Ready to take my cock up your " + gender.pronoun("faggot") + " " + gender.pronoun("asshole") + "?" +
                "Now squat down you cock hungry slut! ",
            button: [
                { chatID: 57, text: "[Impale your ass on his cock]", callback: "squatDown" },
            ]
        },
        {
            chatID: 57,
            speaker: "chad",
            text: "Oh fuck you do have a tight fuck hole. Now get up and fuck yourself on my " +
                "superior cock " + gender.pronoun("faggot") + ". ",
            button: [
                { chatID: -1, text: "[Fuck yourself on his magnificent cock]", callback: "squatGo" },
            ]
        },
        {
            chatID: 58,
            speaker: "chad",
            text: "You're welcome for the cum loser. Now you should make yourself useful and " +
                "suck some dick at the bus station whore. ",
            button: [
                { chatID: -1, text: "I am a dirty dirty whore", callback: "squatEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};