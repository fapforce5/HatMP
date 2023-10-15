//Envy Living Room
var room301 = {};
room301.main = function () {
    if (g.pass === "endSleepyTime") {
        chat(108, 301);
        nav.bg("301_living/envy160.jpg");
    }
    else {
        var navList = [0];
        nav.buildnav(navList);
        switch (sc.getstep("envy")) {
            case 2:
                room301.chatcatch("drawbg");
                chat(0, 301);
                break;
            case 3:
                room301.chatcatch("drawbg");
                chat(10, 301);
                break;
            case 4:
                room301.chatcatch("drawbg");
                chat(21, 301);
                break;
            case 5:
                room301.chatcatch("drawbg");
                chat(32, 301);
                break;
            case 6:
                room301.chatcatch("drawbg");
                room301.chatcatch("drawEnvySitting");
                chat(46, 301);
                break;
            case 7:
                room301.chatcatch("drawbg");
                room301.chatcatch("drawEnvySitting");
                chat(50, 301);
                break;
            case 8:
                room301.chatcatch("drawbg");
                room301.chatcatch("drawEnvySitting");
                chat(52, 301);
                break;
            case 9:
                room301.chatcatch("drawbg");
                room301.chatcatch("drawEnvySitting");
                chat(54, 301);
                break;
            case 10:
                room301.chatcatch("drawbg");
                room301.chatcatch("drawEnvySitting");
                chat(57, 301);
                break;
            case 11:
                room301.chatcatch("drawbg");
                room301.chatcatch("drawEnvySitting");
                chat(67, 301);
                break;
            case 12:
                room301.chatcatch("drawbg");
                room301.chatcatch("drawEnvySitting");
                chat(74, 301);
                break;
            case 13:
                nav.bg("301_living/step13_0.jpg");
                chat(76, 301);
                break;
            case 14:
                nav.bg("301_living/step14.jpg");
                chat(86, 301);
                break;
            case 15:
                nav.bg("301_living/step14.jpg");
                chat(89, 301);
                break;
        }
    }
};

room301.btnclick = function (name) {
    switch (name) {
        case "boardgame":
            var envyStepTouchbg = sc.getstep("envy");
            if (envyStepTouchbg < 10) {
                nav.killall();
                room301.chatcatch("drawbggame");
                room301.chatcatch("drawEnvySitting");
                chat(33, 301);
            }
            else {
                chat(63, 301);
            }
            break;
        case "touch":
            var envyStepTouch = sc.getstep("envy");
            if (envyStepTouch === 8) {
                nav.killbutton("touch");
                nav.button({
                    "type": "btn",
                    "name": "touch8",
                    "left": 1115,
                    "top": 277,
                    "width": 805,
                    "height": 677,
                    "title": "Touch her butt",
                    "image": "301_living/touch8a.png"
                }, 301);
            }
            else if (envyStepTouch === 9) {
                g.internal = true;
                nav.button({
                    "type": "btn",
                    "name": "touch9",
                    "left": 1115,
                    "top": 277,
                    "width": 805,
                    "height": 677,
                    "title": "Touch her butt",
                    "image": "301_living/touch9a.png"
                }, 301);
            }
            else if (envyStepTouch === 10) {
                nav.killbutton("boardgame");
                g.internal = 0;
                nav.button({
                    "type": "btn",
                    "name": "touch10",
                    "left": 1115,
                    "top": 277,
                    "width": 805,
                    "height": 677,
                    "title": "Touch her butt",
                    "image": "301_living/touch9a.png"
                }, 301);
            }
            else {
                nav.killbutton("boardgame");
                chat(1001, 301);
            }
            break;
        case "touch8":
            nav.killbutton("boardgame");
            chat(1001, 301);
            break;
        case "touch9":
            if (g.internal === 0) {
                nav.modbutton("touch9", "301_living/touch9a.png", null, null);
                g.internal = 1;
            }
            else {
                nav.modbutton("touch9", "301_living/touch9b.png", null, null);
                chat(1001, 301);
            }
            break;
        case "touch10":
            if (g.internal === 0) {
                nav.modbutton("touch10", "301_living/touch9a.png", null, null);
                g.internal = 1;
            }
            else if (g.internal === 1) {
                nav.modbutton("touch10", "301_living/touch9b.png", null, null);
                g.internal = 2;
            }
            else {
                nav.killall();
                nav.bg("301_living/step10.jpg")
                chat(60, 301);
            }
            break;
        case "step11e":
            if (g.internal < 8) {
                nav.bg("301_living/step11e" + g.internal + ".jpg");
            }
            else {
                nav.killbutton("step11e");
                nav.bg("301_living/bg11.jpg");
                nav.button({
                    "type": "img",
                    "name": "envy",
                    "left": 0,
                    "top": 204,
                    "width": 884,
                    "height": 513,
                    "image": "301_living/sit11f.png"
                }, 301);
                chat(73, 301);
            }
            g.internal++;
            break;
        case "step12":
            if (g.internal < 4) {
                nav.bg("301_living/step11e" + g.internal + ".jpg");
            }
            else {
                nav.killbutton("step12");
                nav.bg("301_living/bg11.jpg");
                nav.button({
                    "type": "img",
                    "name": "envy",
                    "left": 0,
                    "top": 204,
                    "width": 884,
                    "height": 513,
                    "image": "301_living/sit11f.png"
                }, 301);
                chat(75, 301);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room301.chatcatch = function (callback) {
    switch (callback) {
        case "startwars":
            nav.bg("301_living/startwars.jpg");
            break;
        case "startwars1":
            room301.chatcatch("drawEnvySitting");
            nav.bg("301_living/startwars1.jpg");
            break;
        case "envy2":
            sc.setstep("envy", 3);
            daily.set("envy");
            char.addtime(180);
            char.room(300);
            break;
        case "pizza0":
            nav.bg("301_living/pizza0.jpg");
            break;
        case "movie1":
            char.changeMenu("hide", false, true);
            g.internal = { m: 1, t: 0 };
            nav.bg("301_living/hypnobg.jpg");
            nav.button({
                "type": "btn",
                "name": "movie",
                "left": 1456,
                "top": 0,
                "width": 464,
                "height": 1080,
                "image": "301_living/m1.png"
            }, 301);
            nav.button({
                "type": "btn",
                "name": "girleye",
                "left": 469,
                "top": 341,
                "width": 262,
                "height": 166,
                "image": "301_living/geye1.png"
            }, 301);
            nav.button({
                "type": "btn",
                "name": "maleeye",
                "left": 133,
                "top": 356,
                "width": 282,
                "height": 92,
                "image": "301_living/heye1.png"
            }, 301);
            break;
        case "t0":
            g.internal.t = 0;
            room301.chatcatch("incrementMovie");
            break;
        case "t1":
            g.internal.t++;
            room301.chatcatch("incrementMovie");
            break;
        case "incrementMovie":
            g.internal.m++;
            if (g.internal.t > 4) {
                room301.chatcatch("movie2");
            }
            if (g.internal.m > 10) {
                room301.chatcatch("movie2");
            }
            else {
                switch (g.internal.t) {
                    case 0:
                        nav.modbutton("girleye", "301_living/geye1.png");
                        nav.modbutton("maleeye", "301_living/heye1.png");
                        chat(13, 301);
                        break;
                    case 1:
                        nav.modbutton("girleye", "301_living/geye1.png");
                        nav.modbutton("maleeye", "301_living/heye3.png");
                        chat(14, 301);
                        break;
                    case 2:
                        nav.modbutton("girleye", "301_living/geye2.png");
                        nav.modbutton("maleeye", "301_living/heye2.png");
                        chat(15, 301);
                        break;
                    case 3:
                        nav.modbutton("girleye", "301_living/geye3.png");
                        nav.modbutton("maleeye", "301_living/heye3.png");
                        chat(16, 301);
                        break;
                    case 4:
                        nav.modbutton("girleye", "301_living/geye4.png");
                        nav.modbutton("maleeye", "301_living/heye3.png");
                        chat(17, 301);
                        break;
                }
                nav.modbutton("movie", "301_living/m" + g.internal.m + ".png");
            }
            break;
        case "movie2":
            nav.killall();
            if (g.internal.t > 3) {
                nav.bg("301_living/pizzaGood1.jpg");
                chat(19, 301);
            }
            else {
                nav.bg("301_living/pizzaBad.jpg");
                chat(18, 301);
            }
            break;
        case "movieBadEnd":
            daily.set("envy");
            char.addtime(180);
            char.room(300);
            break;
        case "movieGoodEnd":
            daily.set("envy");
            char.addtime(180);
            sc.setstep("envy", 4);
            char.room(300);
            break;
        case "spanky3":
            nav.killall();
            nav.bg("301_living/spanky1.jpg");
            break;
        case "envy3end":
            sc.setstep("envy", 5);
            sc.setstep("spanky", -1);
            daily.set("envy");
            char.addtime(180);
            char.room(300);
            break;
        case "boardgame":
            var buttImg = "touch.png";
            nav.killall();
            if (sc.getstep("envy") < 7)
                nav.bg("301_living/boardgamebg.jpg");
            nav.button({
                "type": "btn",
                "name": "boardgame",
                "left": 254,
                "top": 268,
                "width": 450,
                "height": 344,
                "image": "301_living/dice.png"
            }, 301);
            switch (sc.getstep("envy")) {
                case 8: buttImg = "touch8.png";
                    break;
                case 9: buttImg = "touch9.png";
                    break;
                case 10: buttImg = "touch9.png";
                    break;
                case 12: buttImg = "touch12.png";
                    break;
            }
            nav.button({
                "type": "btn",
                "name": "touch",
                "left": 1115,
                "top": 277,
                "width": 805,
                "height": 677,
                "title": "Touch her butt",
                "image": "301_living/" + buttImg
            }, 301);
            break;
        case "boardgameset":
            nav.killall();
            room301.chatcatch("drawEnvySitting");
            room301.chatcatch("drawbggame");
            break;
        case "boardgameend":
            daily.set("envy");
            char.room(0);
            break;
        case "hypno0":
            if (inv.has("hypno1")) {
                nav.bg("301_living/moviebg.jpg");
                nav.button({
                    "type": "btn",
                    "name": "movie",
                    "left": 1456,
                    "top": 0,
                    "width": 464,
                    "height": 1080,
                    "image": "301_living/grey.png"
                }, 301);
                nav.button({
                    "type": "btn",
                    "name": "girleye",
                    "left": 469,
                    "top": 341,
                    "width": 262,
                    "height": 166,
                    "image": "301_living/geye1.png"
                }, 301);
                nav.button({
                    "type": "btn",
                    "name": "maleeye",
                    "left": 133,
                    "top": 356,
                    "width": 282,
                    "height": 92,
                    "image": "301_living/heye3.png"
                }, 301);
                chat(35, 301);
            }
            else {
                chat(112, 301);
            }
            break;
        case "hypno1":
            nav.modbutton("movie", "301_living/h1-1.png", null, null);
            nav.modbutton("girleye", "301_living/geye5.png", null, null);
            nav.modbutton("maleeye", "301_living/heye1.png", null, null);
            nav.bg("301_living/hypnobg.jpg");
            break;
        case "hypno2":
            nav.modbutton("movie", "301_living/h1-2.png", null, null);
            break;
        case "hypno3":
            nav.modbutton("maleeye", "301_living/heye3.png");
            nav.modbutton("movie", "301_living/h1-3.png", null, null);
            break;
        case "hypno4":
            nav.modbutton("maleeye", "301_living/heye1.png");
            nav.modbutton("movie", "301_living/h1-4.png", null, null);
            break;
        case "hypno5":
            nav.killbutton("movie");
            nav.bg("301_living/movieoff.jpg");
            nav.modbutton("girleye", "301_living/geye6.png");
            nav.modbutton("maleeye", "301_living/heye3.png");
            break;
        case "hypno6":
            nav.killall();
            nav.bg("301_living/bg.jpg");
            break;
        case "hypno7":
            nav.bg("301_living/hypno1-bg1.jpg");
            break;
        case "hypno8":
            nav.bg("301_living/hypno1-bg2.jpg");
            break;
        case "hypnoEnd":
            sc.setstep("envy", 6);
            char.addtime(120);
            char.room(0);
            break;
        case "hypnoLoop0":
            var hasTape = false;
            var tape = "";
            
            switch (sc.getstep("envy")) {
                case 6:
                    hasTape = inv.has("hypno2");
                    tape = "h2.gif";
                    break;
                case 7:
                    hasTape = inv.has("hypno3");
                    tape = "h3.gif";
                    break;
                case 8:
                    hasTape = inv.has("hypno4");
                    tape = "h4.gif";
                    break;
                case 9:
                    hasTape = inv.has("hypno5");
                    tape = "h5.gif";
                    break;
                case 10:
                    hasTape = inv.has("hypno6");
                    tape = "h6.gif";
                    break;
                case 12:
                    hasTape = inv.has("hypno7");
                    tape = "h7.gif";
                    break;
            }

            if (hasTape) {
                nav.killall();
                nav.bg("301_living/hypnoloop.jpg");
                nav.button({
                    "type": "img",
                    "name": "hypnoLoop",
                    "left": 1456,
                    "top": 0,
                    "width": 464,
                    "height": 1080,
                    "image": "301_living/" + tape
                }, 301);
                chat(1000, 301);
            }
            else {
                chat(34, 301);
            }
            break;
        case "hypnoLoop1":
            nav.killall();
            room301.chatcatch("drawbg");
            room301.chatcatch("drawEnvySitting");
            break;
        case "drawEnvySitting":
            var envyImg;
            switch (sc.getstep("envy")) {
                case 1: case 2: case 3: case 4: case 5: case 6: envyImg = "sit0.png"; break;
                case 7: envyImg = "sit7.png"; break;
                case 8: envyImg = "sit8.png"; break;
                case 9: envyImg = "sit9.png"; break;
                case 10: envyImg = "sit9.png"; break;
                case 11: envyImg = "sit11.png"; break;
                case 12: envyImg = "sit11.png"; break;
            }
            nav.button({
                "type": "img",
                "name": "envy",
                "left": 0,
                "top": 204,
                "width": 884,
                "height": 513,
                "image": "301_living/" + envyImg
            }, 301);
            break;
        case "hypnoLoopEnd":
            switch (sc.getstep("envy")) {
                case 6:
                    sc.setstep("envy", 7);
                    break;
                case 7:
                    sc.setstep("envy", 8);
                    break;
                case 8:
                    sc.setstep("envy", 9);
                    break;
                case 9:
                    sc.setstep("envy", 10);
                    break;
                case 10:
                    sc.setstep("envy", 11);
                    break;
                case 12:
                    sc.setstep("envy", 13);
                    break;
            };
            char.addtime(120);
            daily.set("envy");
            char.room(0);
            break;
        case "leave":
            char.room(0);
            break;
        case "sit9a":
            nav.modbutton("envy", "301_living/sit9a.png", null, null);
            break;
        case "drawbg":
            var drawbgEnvyStep = sc.getstep("envy");
            if (drawbgEnvyStep < 7)
                nav.bg("301_living/bg1.jpg");
            else if (drawbgEnvyStep === 7)
                nav.bg("301_living/bg7.jpg");
            else if (drawbgEnvyStep === 8)
                nav.bg("301_living/bg8.jpg");
            else if(drawbgEnvyStep === 9)
                nav.bg("301_living/bg9.jpg");
            else if (drawbgEnvyStep === 10)
                nav.bg("301_living/bg10.jpg");
            else if (drawbgEnvyStep === 11)
                nav.bg("301_living/bg11.jpg");
            else if (drawbgEnvyStep === 12)
                nav.bg("301_living/bg11.jpg");
            else if (drawbgEnvyStep > 12)
                nav.bg("301_living/bg12.jpg");
            break;
        case "drawbggame":
            var drawbggameEnvyStep = sc.getstep("envy");
            if (drawbggameEnvyStep < 7)
                nav.bg("301_living/startwars1.jpg");
            else if (drawbggameEnvyStep === 7)
                nav.bg("301_living/boardgamebg7.jpg");
            else if (drawbggameEnvyStep === 8)
                nav.bg("301_living/boardgamebg8.jpg");
            else if (drawbggameEnvyStep === 9)
                nav.bg("301_living/boardgamebg9.jpg");
            break;
        case "step10a":
            nav.killall();
            nav.bg("301_living/step10a.jpg");
            break;
        case "step10b":
            nav.bg("301_living/step10b.jpg");
            break;
        case "step10c":
            nav.bg("301_living/step10c.jpg");
            break;
        case "step10d":
            nav.killall();
            nav.bg("301_living/step10d.jpg");
            break;
        case "step10e":
            nav.bg("301_living/step10e.jpg");
            break;
        case "step11":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "envy",
                "left": 779,
                "top": 0,
                "width": 599,
                "height": 1080,
                "image": "301_living/step11NV.png"
            }, 301);
            break;
        case "sit11a":
            nav.modbutton("envy", "301_living/sit11a.png", null, null);
            break;
        case "step11b":
            nav.killbutton("envy");
            nav.button({
                "type": "btn",
                "name": "envy",
                "left": 1115,
                "top": 277,
                "width": 805,
                "height": 677,
                "title": "Touch her butt",
                "image": "301_living/touch11.png"
            }, 301);
            break;
        case "step11c":
            nav.killall();
            nav.bg("301_living/step11c.jpg");
            break;
        case "step11d":
            nav.bg("301_living/step11d.jpg");
            break;
        case "step11e":
            g.internal = 0;
            nav.button({
                "type": "btn",
                "name": "step11e",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 301);
            break;
        case "step11end":
            sc.setstep("envy", 12);
            gv.mod("fuckPussy", 1);
            cl.doCum(false);
            char.addtime(120);
            daily.set("envy");
            char.room(0);
            break;
        case "step12":
            nav.killall();
            nav.bg("301_living/step11d.jpg");
            g.internal = 0;
            nav.button({
                "type": "btn",
                "name": "step12",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 301);
            break;
        case "step12end":
            gv.mod("fuckPussy", 1);
            cl.doCum(false);
            char.addtime(120);
            daily.set("envy");
            char.room(0);
            break;
        case "step13_0":
            nav.bg("301_living/step13_0.jpg");
            break;
        case "step13_1":
            nav.bg("301_living/step13_1.jpg");
            break;
        case "step13_2":
            nav.bg("301_living/step13_2.jpg");
            break;
        case "step13_3":
            if (cl.c.chastity !== null)
                chat(82, 301);
            else {
                zcl.displayMain(-550, 250, .3, "", true);
                chat(83, 301);
            }
            break;
        case "step13_4":
            nav.killall();
            nav.bg("301_living/step13_4.jpg");
            break;
        case "step13_5":
            nav.bg("301_living/step13_5.jpg");
            break;
        case "step13badend":
            sc.setstep("envy", 14);
            char.room(0);
            break;
        case "step13end":
            sc.setstep("envy", 14);
            gv.mod("receiveOralFemale", 1);
            cl.doCum(false);
            char.room(0);
            break;
        case "envy150":
            nav.bg("301_living/envy150.jpg");
            break;
        case "envy151":
            char.settime(21, 47);
            nav.bg("301_living/envy151.jpg");
            break;
        case "envy152":
            nav.bg("301_living/envy152.jpg");
            break;
        case "envy153":
            nav.bg("301_living/envy153.jpg");
            break;
        case "envy154":
            nav.bg("301_living/envy154.jpg");
            break;
        case "envy155":
            nav.bg("301_living/envy155.jpg");
            break;
        case "envy156":
            nav.bg("301_living/envy156.jpg");
            break;
        case "envy157":
            if (cl.c.chastity !== null || cl.c.cock > 2) 
                chat(102, 301);
            else 
                chat(100, 301);
            break;
        case "envy158":
            nav.bg("301_living/envy158.jpg");
            break;
        case "envy159":
            g.sleep();
            break;
        case "envy":
            sc.setstep("envy", 16);
            char.addtime(60);
            gv.mod("money", 500);
            daily.set("rachel");
            gv.set("map", 0);
            char.room(325);
            break;
        case "envy100":
            sc.setstep("envy", 100);
            char.room(0);
            break;
        default:
            break;
    }
};

room301.chat = function (chatID) {
    if (chatID === 1000) {
        var c = 0;
        var evneyStep = sc.getstep("envy");
        switch (sc.getstep("envy")) {
            case 7: c = 0; break;
            case 8: c = 1; break;
            case 9: c = 2; break;
            case 10: c = 3; break;
            case 12: c = 4; break;
            default: console.log("invalid Envy Step"); break;
        }
        var replay = [
            "Must wear makeup. Must be a pretty girl....",
            "Must be more fun... Blondes have more fun....",
            "Thinking is stupid... I want to be sexy...",
            "I need bigger tits... Must be a sexy bimbo...",
            "I am a free use whore...My only purpose is to be a cum dump for all men...",
        ];
        return {
            chatID: 1000,
            speaker: "envy",
            text: replay[c],
            button: [
                { chatID: 49, text: "...", callback: "hypnoLoop1" }
            ]
        };
    }
    else if (chatID === 1001) {
        var d = 0;
        switch (sc.getstep("envy")) {
            case 7: d = 1; break;
            case 8: d = 2; break;
            case 9: d = 3; break;
            default: console.log("invalid Envy Step"); break;
        }
        var replay1001 = [
            "Hey! No touching! Let's play the game. ",
            "MMmmm keep going... no I mean keep your hands off buddy. What's going on in my head? ",
            "Don't you think my panties are cute? I wore them for you. Now let's play that game. ",
            "MMmmm. No stop. maybe... no. We're playing a game. Let's play. ",
        ];
        var button1001 = [
            { chatID: 33, text: "Sorry. Yes let's play the game. ", callback: "boardgameset" },
            { chatID: 33, text: "Sorry. Yes let's play the game. ", callback: "boardgameset" },
            { chatID: 33, text: "So cute. Let's play", callback: "boardgameset" },
            { chatID: 33, text: "Cute pussy. Yes let's play", callback: "boardgameset" }
        ];
        return {
            chatID: 1000,
            speaker: "envy",
            text: replay1001[d],
            button: [ button1001[d] ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "envy",
                text: "So what's up?",
                button: [
                    { chatID: 1, text: "Oh, I just stopped by to say hi, bestie!", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "envy",
                text: "Don't lie. How many boys do you just randomly stop by at to say hi when you barely know them? ",
                button: [
                    { chatID: 2, text: "None. That would be weird. ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "envy",
                text: "See. Like I said you just think about sex. ",
                button: [
                    { chatID: 3, text: "That's a cool looking telescope. ", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "envy",
                text: "Oh. Yeah. I just got it for Coeus comet that is supposed to fly by next week. I've been trying to get " +
                    "the exact time and location in the sky when it flies by here. ",
                button: [
                    { chatID: 4, text: "It's a good thing your window points that way. ", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "envy",
                text: "It's the only good thing about this building. I wanted to live in the grey apartments up north, but " +
                    "the rent was just so much. I'm just a poor college student trying to live and it's been hard since my " +
                    "roomate left and moved in with her boyfriend. ",
                button: [
                    { chatID: 5, text: "That bitch!", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "envy",
                text: "I know. She said I had too much of my junk laying around the house. It's not my fault all she wanted " +
                    "to do was watch tv. She almost messed up my chess game I've been playing with Bohdana from Belarus. We " +
                    "mail each other our moves. This game has been going on for two months now!",
                button: [
                    { chatID: 6, text: "That's awesome....", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "envy",
                text: "So do you want to play a game?",
                button: [
                    { chatID: 7, text: "Like truth or dare?", callback: "startwars" }
                ]
            },
            {
                chatID: 7,
                speaker: "envy",
                text: "That's a kid's game. How about Star Wars Monopoly! I get to be the x-wing!",
                button: [
                    { chatID: 8, text: "Oh... sure", callback: "startwars1" }
                ]
            },
            {
                chatID: 8,
                speaker: "envy",
                text: "I'm totally kicking your ass. You have to be strategic on what and where you buy. ",
                button: [
                    { chatID: 9, text: "I think we'll just declare you the winner here. ", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "envy",
                text: "That was totally fun! Next time you come by bring some pizza. We'll watch a movie. ",
                button: [
                    { chatID: -1, text: "You're on. See you later", callback: "envy2" }
                ]
            },
            {
                chatID: 10,
                speaker: "envy",
                text: "You brought pizza! I'll throw it in the oven. I have a great documentry I wanted to watch if you want " +
                    "to watch with me. ",
                button: [
                    { chatID: 11, text: "That sounds like fun. ", callback: "pizza0" }
                ]
            },
            {
                chatID: 11,
                speaker: "envy",
                text: "This side of the couch has the best angle for the tv, so you can sit beside me. But no touching. " +
                    "I'm just trying to enjoy the documentry. I think you'll like it. It's a love story set in " +
                    "the Anglo-French Hundred Years' War. ",
                button: [
                    { chatID: 13, text: "Ooohhh ok ", callback: "movie1" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: 12, text: "Continue watching the movie", callback: "t0" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Continue watching the movie", callback: "t0" },
                    { chatID: -1, text: "Touch her leg", callback: "t1" }
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Pull your hand away", callback: "t0" },
                    { chatID: -1, text: "Keep your hand on her leg.", callback: "t1" }
                ]
            },
            {
                chatID: 15,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Pull your hand away", callback: "t0" },
                    { chatID: -1, text: "Move your hand between her legs. ", callback: "t1" }
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Pull your hand away", callback: "t0" },
                    { chatID: -1, text: "Rub her pussy over her clothes", callback: "t1" }
                ]
            },
            {
                chatID: 17,
                speaker: "thinking",
                text: "*Movie Plays*",
                button: [
                    { chatID: -1, text: "Finger bang her pussy", callback: "t1" }
                ]
            },
            {
                chatID: 18,
                speaker: "envy",
                text: "Thanks for watching the movie with me buddy! My mind wandered off a few time and I need to watch " +
                    "it again. You should come over to watch it with me. Bring pizza!",
                button: [
                    { chatID: -1, text: "You're welcome friend", callback: "movieBadEnd" }
                ]
            },
            {
                chatID: 19,
                speaker: "envy",
                text: "Oh wow! Ummmmm. Well. That was a movie. I think. I missed it. Oh well. Ummm. I think you should " +
                    "go. I have to take care of a thing. Come back. Please. But go now. I need to do a thing. ummm " +
                    "Yeah go, but come back later. ",
                button: [
                    { chatID: 20, text: "You sure you don't want me to stick around for a bit. ", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "envy",
                text: "Welllll, uuuhhhhh. It's better you go now. You should leave, but in a good way. I want to see " +
                    "you again, just not right now. ",
                button: [
                    { chatID: -1, text: "Ok. See you tomorrow. ", callback: "movieGoodEnd" }
                ]
            },
            {
                chatID: 21,
                speaker: "envy",
                text: "So we need to talk. I really like hanging out with you, but more like a friend. The board " +
                    "game we played was really fun and I would like to do that some more or even watch some movies. " +
                    "I'll even let you choose the movie. But as friends. No more trying to put your fingers in my " +
                    "pussy, ok?",
                button: [
                    { chatID: 22, text: "Oh.", callback: "" }
                ]
            },
            {
                chatID: 22,
                speaker: "envy",
                text: "I know. I like you, but I don't think you can control yourself. What's worse is I don't think " +
                    "I can control myself around you when you get horny. So for now we should just be friends. No " +
                    "touching privileges. ",
                button: [
                    { chatID: 23, text: "That's fine. Let's play some games! ", callback: "startwars1" }
                ]
            },
            {
                chatID: 23,
                speaker: "envy",
                text: "That was fun. I'm glad we can be friends. I really enjoy hanging out with you. ",
                button: [
                    { chatID: 24, text: "I had fun too. See ya buddy. ", callback: "spanky3" }
                ]
            },
            {
                chatID: 24,
                speaker: "spanky",
                text: "Hay, I saw you coming out of " + sc.n("envy") + "'s place. Are you fucking her? ",
                button: [
                    { chatID: 25, text: "Oh no, we're just friends ", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "spanky",
                text: "So she gave you the 'Just friends' speach too? So one day I was tired of being her friend and " +
                    "just wanted to fuck. Had the worst case of blue balls, ya know. So I think, fuck it, I'm either " +
                    "going to fuck this chick or she'll never talk to me again. Guess what I did. ",
                button: [
                    { chatID: 26, text: "Oh, ummmm, finger her?", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "spanky",
                text: "I wish I got that close. No. So she goes to the bathroom and I just strip off all my clothes. " +
                    "My cock was the hardest it's ever been, just sitting out there in all it's glory. I got a big " +
                    "cock, ya know. I thought she would take one look at it and just start slobbin the knob. ",
                button: [
                    { chatID: 27, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 27,
                speaker: "spanky",
                text: "But no. She just screams at tme to put my clothes back on a to get out of her apartment. Fuckin' " +
                    "bitch, ya know. So I make a plan. I'm gunna get that pussy. I know a guy that makes these hypno " +
                    "vidoes. Really good ones too. Each hypno is tailored to the person you want to hypno. It took " +
                    "me months getting all the information the dude needed to make the videos. ",
                button: [
                    { chatID: 28, text: "right", callback: "" }
                ]
            },
            {
                chatID: 28,
                speaker: "spanky",
                text: "Cost a lot too. Almost had to sell my store so I could afford them. So I get the videos and " +
                    "go to her place so I could show them to her, and you know what that bitch did? ",
                button: [
                    { chatID: 29, text: "what", callback: "" }
                ]
            },
            {
                chatID: 29,
                speaker: "spanky",
                text: "She told me to leave. Wouldn't even watch my videos. Bitch. So now I have a bunch of " +
                    "hypno videos to turn that bitch into a slut and I can't get her to watch them. So I see " +
                    "you comin out of her place and I think to myself that you are her new friend. She mad at " +
                    "you bro, or are you still buds?",
                button: [
                    { chatID: 30, text: "We're still buds", callback: "" }
                ]
            },
            {
                chatID: 30,
                speaker: "spanky",
                text: "I'll tell you what. I'm such an awesome guy I'll sell you the hypno videos. Stop by my " +
                    "store. If I sell them to you, you gotta play them though. Don't be a little bitch boy and " +
                    "hold on to them. Also they only work on " + ("envy") + " so don't go fuckin' around with 'em. ",
                button: [
                    { chatID: 31, text: "I won't", callback: "" }
                ]
            },
            {
                chatID: 31,
                speaker: "spanky",
                text: "Cool. I'll give you a good price. Just play them for her. And don't be a bitch. ",
                button: [
                    { chatID: -1, text: "ok", callback: "envy3end" }
                ]
            },
            {
                chatID: 32,
                speaker: "envy",
                text: "I'm glad you came back! So what do you want to do?",
                button: [
                    { chatID: -1, text: "Play a board game", callback: "boardgame" },
                    { chatID: -1, text: "Watch a movie ", callback: "hypno0" }
                ]
            },
            {
                chatID: 33,
                speaker: "envy",
                text: "You're so bad at this, I don't know why you keep challenging me! Can't wait to play you again. ",
                button: [
                    { chatID: -1, text: "That was fun. I'll see you later", callback: "boardgameend" }
                ]
            },
            {
                chatID: 34,
                speaker: "me",
                text: "Oh. I forgot to get a movie. I'll have to bring one next time. ",
                button: [
                    { chatID: 33, text: "...", callback: "boardgameset" }
                ]
            },
            {
                chatID: 35,
                speaker: "me",
                text: "I'll just put this movie in...",
                button: [
                    { chatID: 36, text: "...", callback: "hypno1" }
                ]
            },
            {
                chatID: 36,
                speaker: "envy",
                text: "I am horny.....I need to masturbate....",
                button: [
                    { chatID: 37, text: "...", callback: "hypno2" }
                ]
            },
            {
                chatID: 37,
                speaker: "envy",
                text: "Finger..... wet......",
                button: [
                    { chatID: 38, text: "...", callback: "hypno3" }
                ]
            },
            {
                chatID: 38,
                speaker: "envy",
                text: "I will rub my pussy.....",
                button: [
                    { chatID: 39, text: "...", callback: "hypno4" }
                ]
            },
            {
                chatID: 39,
                speaker: "envy",
                text: "....play with my clit...",
                button: [
                    { chatID: 40, text: "...", callback: "hypno5" }
                ]
            },
            {
                chatID: 40,
                speaker: "envy",
                text: "I have to go to sleep now. You should go. See yourself out...",
                button: [
                    { chatID: 41, text: "ok...", callback: "hypno6" }
                ]
            },
            {
                chatID: 41,
                speaker: "thinking",
                text: "She left really quickly. I wonder if it worked... I sure sounds like she's playing with " +
                    "her pussy. It sounds so wet...",
                button: [
                    { chatID: -1, text: "I should respect her privacy and leave", callback: "hypnoEnd" },
                    { chatID: 42, text: "She didn't close her door all the way. A quick peek wouldn't hurt. For science", callback: "hypno7" }
                ]
            },
            {
                chatID: 42,
                speaker: "thinking",
                text: "She seems pretty into it. I can probably open it a bit more. ",
                button: [
                    { chatID: -1, text: "I should respect her privacy and leave", callback: "hypnoEnd" },
                    { chatID: 43, text: "Open the door a bit wider", callback: "hypno8" }
                ]
            },
            {
                chatID: 43,
                speaker: "thinking",
                text: "She's really fucking herself. I guess that video really worked! Hmmmm....",
                button: [
                    { chatID: -1, text: "I should leave before I get caught and ruin this. ", callback: "hypnoEnd" },
                ]
            },
            {
                chatID: 44,
                speaker: "thinking",
                text: "End of this release",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
            {
                chatID: 45,
                speaker: "evny",
                text: "Hey! No touching! Let's play the game. ",
                button: [
                    { chatID: 33, text: "Sorry. Yes let's play the game. ", callback: "boardgameset" },
                ]
            },
            {
                chatID: 46,
                speaker: "evny",
                text: "That was the weirdest movie. I can't even remember what it was, but it really made my blood flow. What " +
                    "was the name of it again?",
                button: [
                    { chatID: 47, text: "Uhhhh.... Learning to love thyself. A documentary on the change within. ", callback: "" },
                ]
            },
            {
                chatID: 47,
                speaker: "evny",
                text: "I've never heard of that one. I do love documenteries. They really make you feel the moment within. " +
                    "Do you know if any of the streaming services have it, or do they have it at the library? ",
                button: [
                    { chatID: 48, text: "Oh, I'm not sure. I borrowed it from a friend who has a bunch of documentries. ", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "evny",
                text: "So what do you want to do? ",
                button: [
                    { chatID: -1, text: "Play a board game", callback: "boardgame" },
                    { chatID: -1, text: "Watch a movie. Let's see how far this goes. ", callback: "hypnoLoop0" },
                    { chatID: 113, text: "Confess Spanky's plan. ", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "evny",
                text: "Sorry, I have the biggest headache. I think I'm going to lay down. I'll catch you later. ",
                button: [
                    { chatID: -1, text: "Ok. See ya ", callback: "hypnoLoopEnd" }
                ]
            },
            {
                chatID: 50,
                speaker: "evny",
                text: "Soooo, notice anything different? ",
                button: [
                    { chatID: 51, text: "Like how a clown put on your makeup? Just kidding. You look great.", callback: "" }
                ]
            },
            {
                chatID: 51,
                speaker: "evny",
                text: "You're such a butt. This is why I don't date much.  ",
                button: [
                    { chatID: 48, text: "...", callback: "" }
                ]
            },
            {
                chatID: 52,
                speaker: "me",
                text: "So... You're wearing a dress now. ",
                button: [
                    { chatID: 53, text: "...", callback: "" }
                ]
            },
            {
                chatID: 53,
                speaker: "envy",
                text: "Oh hahaha. you know. Just wanted something different. I don't know, but I've just had this weird " +
                    "feeling lately. Every time you come over I get this weird feeling after you leave. A feeling I've never " +
                    "felt before. I can't concentrate on anything but my looks and desires. I would say it's love, but it feels " +
                    "more like narcissism since it's so center on me. I don't know. I have to think on it more. ",
                button: [
                    { chatID: -1, text: "Play a board game", callback: "boardgame" },
                    { chatID: -1, text: "Watch a movie ", callback: "hypnoLoop0" }
                ]
            },
            {
                chatID: 54,
                speaker: "envy",
                text: "Soooo. What do you think? Too differnt? Silly? More fun? I don't know. I haven't ever changed my hair before, " +
                    "but I don't know what's going on in my head. I'm like so obsessed! I don't want to study, I just want to " +
                    "be pretty!",
                button: [
                    { chatID: 55, text: "Well sometimes when a girl starts having changes...", callback: "" }
                ]
            },
            {
                chatID: 55,
                speaker: "envy",
                text: "That's not what I mean. I've just been so obsessed with my looks and I'm so horny all the time. " +
                    "I've masturbated 3 times a day since we've been hanging out! I'm starting to get lower grades in my " +
                    "classes. I don't know. Maybe it's just a phase that I need to get through. What do you think is going on " +
                    "with me?",
                button: [
                    { chatID: 56, text: "I think I need to see your boobs. ", callback: "sit9a" },
                    { chatID: -1, text: "Play a board game", callback: "boardgame" },
                    { chatID: -1, text: "Watch a movie ", callback: "hypnoLoop0" }
                ]
            },
            {
                chatID: 56,
                speaker: "envy",
                text: "Ok. Stop staring you goof! I'm going to put these away. What do you want to do?",
                button: [
                    { chatID: -1, text: "Play a board game", callback: "boardgame" },
                    { chatID: -1, text: "Watch a movie ", callback: "hypnoLoop0" }
                ]
            },
            {
                chatID: 57,
                speaker: "me",
                text: "There's a lot of toys laying around.",
                button: [
                    { chatID: 58, text: "...", callback: "" }
                ]
            },
            {
                chatID: 58,
                speaker: "envy",
                text: "Oh! hahaha! I've been so absent minded lately, totally forgot to put them away. ",
                button: [
                    { chatID: 59, text: "So do you want to fuck? ", callback: "" },
                    { chatID: -1, text: "Play a board game", callback: "boardgame" },
                    { chatID: -1, text: "Watch a movie ", callback: "hypnoLoop0" }
                ]
            },
            {
                chatID: 59,
                speaker: "envy",
                text: "oh.... Hmmmm. Oh yeah. I only fuck after marriage. I think. Maybe a boyfriend. We should play a game. ",
                button: [
                    { chatID: -1, text: "ok", callback: "boardgame" }
                ]
            },
            {
                chatID: 60,
                speaker: "envy",
                text: "Oooo shit. Fuck my pussy with your fingers! I need to cum! ",
                button: [
                    { chatID: 61, text: "fuck yeah!", callback: "step10a" }
                ]
            },
            {
                chatID: 61,
                speaker: "envy",
                text: "Don't stop. Don't stop. Don't stop.",
                button: [
                    { chatID: 62, text: "...", callback: "step10b" }
                ]
            },
            {
                chatID: 62,
                speaker: "envy",
                text: "FFFFFFFFFFFFFuuuuuuuuuuuuuuucccccckkkkkkkkkkk YES",
                button: [
                    { chatID:63, text: "...", callback: "step10c" }
                ]
            },
            {
                chatID: 63,
                speaker: "envy",
                text: "I forgot what I was doing.... Oh well. It doesn't matter. You should watch me masturbate. My pussy needs " +
                    "more orgasms. ",
                button: [
                    { chatID: 64, text: "Sure. ", callback: "step10d" }
                ]
            },
            {
                chatID: 64,
                speaker: "envy",
                text: "Let me get this pussy wet before I shove this dildo in my tight pussy.",
                button: [
                    { chatID: 65, text: "...", callback: "step10e" }
                ]
            },
            {
                chatID: 65,
                speaker: "envy",
                text: "Oh fuck I love being watched when I fuck myself. I've never orgasmed so hard! It's so frothy with my cum. ",
                button: [
                    { chatID: 66, text: "Fuck yeah. I want to fuck you so bad. ", callback: "" }
                ]
            },
            {
                chatID: 66,
                speaker: "envy",
                text: "Hehehe. Maybe next time. I'm so tired I just need a nap.",
                button: [
                    { chatID: -1, text: "Ok. Next time I'm going to do the sex with your vagina! So hard ", callback: "boardgameend" }
                ]
            },
            {
                chatID: 67,
                speaker: "envy",
                text: "I've been holding on to something far too long, and I need to get rid of it. ",
                button: [
                    { chatID: 68, text: "Oh. What's that?", callback: "sit11a" }
                ]
            },
            {
                chatID: 68,
                speaker: "envy",
                text: "My virginity. I don't know what it is about you, but I desperately need to make love with you. Even since " +
                    "you came to my door my brain has been obsessing over you. Just filled with dirty thoughts all the time. " +
                    "so much that I can't think of anything else. I've failed out of school becuase I can't stop thinking " +
                    "about sex with you. I need you. ",
                button: [
                    { chatID: 69, text: "I need you too. ", callback: "step11" }
                ]
            },
            {
                chatID: 69,
                speaker: "envy",
                text: "So what do you think about my new boobs. I got them for you. I also shaved my bush just for you. Want to see? ",
                button: [
                    { chatID: 70, text: "Yes I do", callback: "step11b" }
                ]
            },
            {
                chatID: 70,
                speaker: "envy",
                text: "I just got that jewelry today. I feel so naughty wearing it. Pull it out and take my virginity daddy.  ",
                button: [
                    { chatID: 71, text: "Fuck Yeah", callback: "step11c" }
                ]
            },
            {
                chatID: 71,
                speaker: "envy",
                text: "AAAAAaaaaaaaaaa You're ripping my hymen! ouchie ouchie ouchie... It hurts....  ",
                button: [
                    { chatID: 72, text: "Oh. Why don't you get on top so you control the depth and speed. ", callback: "step11d" }
                ]
            },
            {
                chatID: 72,
                speaker: "envy",
                text: "Oh. That's better. It doesn't hurt as much. Just relax and I'll make you cum. Hehehe",
                button: [
                    { chatID: -1, text: "Mmmmmm ", callback: "step11e" }
                ]
            },
            {
                chatID: 73,
                speaker: "envy",
                text: "Oh wow! That was the best thing I've ever had! I don't know why I waited so long. We should do this " +
                    "all the time. ",
                button: [
                    { chatID: -1, text: "Oh yes. Fuck ya later. ", callback: "step11end" }
                ]
            },
            {
                chatID: 74,
                speaker: "envy",
                text: "Soooo. Are we going to make love?",
                button: [
                    { chatID: -1, text: "I want to fuck you! ", callback: "step12" },
                    { chatID: -1, text: "Watch a movie ", callback: "hypnoLoop0" }
                ]
            },
            {
                chatID: 75,
                speaker: "envy",
                text: "I so needed that baby. Please cum back!",
                button: [
                    { chatID: -1, text: "Oh yeah!", callback: "step12end" }
                ]
            },
            {
                chatID: 76,
                speaker: "me",
                text: sc.n("spanky") + "!!!",
                button: [
                    { chatID: 77, text: "...", callback: "step13_1" }
                ]
            },
            {
                chatID: 77,
                speaker: "spanky",
                text: "Oh hi. Didn't know you were still using her. When I heard you gave her all the tapes I thought I could " +
                    "finally fuck this bitch. Like what you did to her. Them big ol' titties are perfect. That hypno worked really " +
                    "good huh? ",
                button: [
                    { chatID: 78, text: "What are you saying? What hypno. I would never use hypno. ", callback: "step13_0" }
                ]
            },
            {
                chatID: 78,
                speaker: "spanky",
                text: "The hypno I sold you. I know you showed it to her. ",
                button: [
                    { chatID: 79, text: "Dude, she's right there!", callback: "" }
                ]
            },
            {
                chatID: 79,
                speaker: "spanky",
                text: "Oh hahahaha. With that last tape she's too far gone. This bitch is a mindless fuck slut now! She'll do anything " +
                    "you tell her. I've already cum in her ass twice and made her lick it up. She even ate my asshole. Check it out. " +
                    sc.n("envy") + " we tricked you into watching hypno tapes to make you a fuck hole. You really should be mad " + 
                    "and kick us out. ",
                button: [
                    { chatID: 80, text: "Huh...", callback: "step13_2" }
                ]
            },
            {
                chatID: 80,
                speaker: "envy",
                text: "I don't care. Just fucking your cum into me daddy! Fuck me more! ",
                button: [
                    { chatID: 81, text: "oh...", callback: "step13_0" }
                ]
            },
            {
                chatID: 81,
                speaker: "spanky",
                text: "Get in there. Just shove your cock in her mouth. You don't even have to ask. Fuck this bitch's face bro. " +
                    "for a new slut she sucks so good. Go on bro, fuck her face. ",
                button: [
                    { chatID: -1, text: "Gobble up " + sc.n("envy") + " here comes my cock. ", callback: "step13_3" },
                    { chatID: -1, text: "Oh. That's ok. I'm going to go. ", callback: "step13badend" },
                ]
            },
            {
                chatID: 82,
                speaker: "me",
                text: "I'm wearing my chasity cage. Maybe later. ",
                button: [
                    { chatID: -1, text: "...", callback: "step13badend" }
                ]
            },
            {
                chatID: 83,
                speaker: "me",
                text: "Oh yeah. She does have a great mouth! ",
                button: [
                    { chatID: 84, text: "...", callback: "step13_4" }
                ]
            },
            {
                chatID: 84,
                speaker: "spanky",
                text: "Fuck yeah. Here comes my fourth load today. Fill that bitches mouth with your cum bro! ",
                button: [
                    { chatID: 85, text: "MMmmmm", callback: "step13_5" }
                ]
            },
            {
                chatID: 85,
                speaker: "spanky",
                text: "What trashy whore. Keep that ass nice and tight. I'm going to fill that ass so full " +
                    "you'll be farting my cum for a week. ",
                button: [
                    { chatID: -1, text: "Yeah. See you later. ", callback: "step13end" }
                ]
            },
            {
                chatID: 86,
                speaker: "envy",
                text: "Hi " + sc.n("me") + ". Did you want a turn too? ",
                button: [
                    { chatID: 87, text: "Uhhh, sure ", callback: "" },
                    { chatID: -1, text: "Nope. Too many dicks around here", callback: "leave" },
                ]
            },
            {
                chatID: 87,
                speaker: "random",
                text: "Hay, we've been waiting for almost six hours! Get to the back of the line!",
                button: [
                    { chatID: 88, text: "?", callback: "" }
                ]
            },
            {
                chatID: 88,
                speaker: "random",
                text: "I'm going to fucking kick your ass if you try to cut in front of me! ",
                button: [
                    { chatID: -1, text: "Oh. I guess I'll leave *whimper*", callback: "leave" }
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "Damn. There's still so many people here trying to fuck her. No way I'll be " +
                    "able to talk her into being a hucow. How do I get some time with her alone to talk her into it? ",
                button: [
                    { chatID: 90, text: "Check her room to see if there's a place to hide. ", callback: "envy150" },
                    { chatID: -1, text: "Not worth it. Leave ", callback: "leave" },
                ]
            },
            {
                chatID: 90,
                speaker: "thinking",
                text: "Huh. I guess I'll have to hide under her bed. I hope there's no high jinks afoot. ",
                button: [
                    { chatID: 91, text: "Hide under the bed and wait till nightfall.  ", callback: "envy151" },
                ]
            },
            {
                chatID: 91,
                speaker: "thinking",
                text: "I've been waiting here for hours! Finally " + sc.n("envy") + " is going to bed! ",
                button: [
                    { chatID: 92, text: "...", callback: "envy152" },
                ]
            },
            {
                chatID: 92,
                speaker: "thinking",
                text: "Did she just fart?",
                button: [
                    { chatID: 93, text: "...", callback: "envy153" },
                ]
            },
            {
                chatID: 93,
                speaker: "thinking",
                text: "Oh. That is the most cum fart I've seen! ",
                button: [
                    { chatID: 94, text: "I suppose I should pop out from under this bed. ", callback: "envy154" },
                ]
            },
            {
                chatID: 94,
                speaker: "envy",
                text: "Why hello there. It's been a while " + sc.n("me") + ". I miss that cock of yours. ",
                button: [
                    { chatID: 95, text: "Hi. " + sc.n("spanky") + ", you're here too? ", callback: "" },
                ]
            },
            {
                chatID: 95,
                speaker: "spanky",
                text: "What's up? I was just about to add to this bitch's cum collection. There's nothing better than " +
                    "shoving your cock in to a pre-lubed cum hole, ha know, and this bitch has the best cum holes in town. " +
                    "Just last night I was fucking her all missionary and stuff and she coughed a big ol' cum blob right into " +
                    "my face! ",
                button: [
                    { chatID: 111, text: "...", callback: "" },
                ]
            },
            {
                chatID: 96,
                speaker: "thinking",
                text: "That dude really can talk! " +
                    "I need to get " + sc.n("envy") + " alone for a second so I can talk her into becoming a hucow. I'll ask " +
                    "him to run to his store for us! ",
                button: [
                    { chatID: 97, text: sc.n("spanky") + " can you run to your store and grab some wine for us? ", callback: "" },
                ]
            },
            {
                chatID: 97,
                speaker: "spanky",
                text: "Fuck yeah! I love how your think! We should shove it in her ass and have her pour it into our mouths. " +
                    "This one time I saw this girl put some champagne up her ass and shake it. It sprayed everywhere! " + 
                    "That was some funny fuckin' shit. Save a load for when I get back we'll have some fun!",
                button: [
                    { chatID: 98, text: "I was just going to drink it, but that's cool too. ", callback: "envy155" },
                ]
            },
            {
                chatID: 98,
                speaker: "envy",
                text: "I need your cock in my pussy now! Please fuck me till I'm squirting all over you.",
                button: [
                    { chatID: 99, text: "There's something we need to talk about. It's really important. ", callback: "envy156" },
                ]
            },
            {
                chatID: 99,
                speaker: "envy",
                text: "No talk-y just fuck-y",
                button: [
                    { chatID: -1, text: "Well fuck", callback: "envy157" },
                ]
            },
            {
                chatID: 100,
                speaker: "envy",
                text: "Oh fuck! Shot your load in me NOW! Fill my sloppy pussy with your cum!",
                button: [
                    { chatID: 101, text: "FFFUUUUUU", callback: "envy158" },
                ]
            },
            {
                chatID: 101,
                speaker: "envy",
                text: "AAAaaaa!!!!!",
                button: [
                    { chatID: 103, text: "Oohhhhhh yes", callback: "envy156" },
                ]
            },
            {
                chatID: 102,
                speaker: "envy",
                text: "Awwww. Sorry about your cock. Looks like I won't be getting any dick. *sniffle* ",
                button: [
                    { chatID: 103, text: "Yeah. I'm a sissy now", callback: "" },
                ]
            },
            {
                chatID: 103,
                speaker: "me",
                text: "So. I need to talk to you. I saw the Hucow magazine on your table a while ago. What do you " +
                    "think about actually being a hucow?",
                button: [
                    { chatID: 104, text: "...", callback: "" },
                ]
            },
            {
                chatID: 104,
                speaker: "envy",
                text: "Really? How? I didn't think that was real. I would love to be hooked up and just milked all day. " +
                    "just let my mind go blank while I get milked. Can I get fucked while being milked? How about blow jobs. " +
                    "Can I suck cock too?",
                button: [
                    { chatID: 105, text: "I don't know about the blow jobs, but I know somewhere that can make you a Hucow. Do you want to go there? ", callback: "" },
                ]
            },
            {
                chatID: 105,
                speaker: "envy",
                text: "Fuck yes! Let's go right now! I want to get milked soooo bad!",
                button: [
                    { chatID: 106, text: "I don't think " + sc.n("rachel") + " is awake now. How about the morning?", callback: "" },
                ]
            },
            {
                chatID: 106,
                speaker: "envy",
                text: "Ok. You have to sleep with me then! I'm not going to let you get away from me! Crawl in and snuggle " +
                    "me to sleep. ",
                button: [
                    { chatID: 107, text: "Sure. But what about " + sc.n("spanky") + "?", callback: "" },
                ]
            },
            {
                chatID: 107,
                speaker: "envy",
                text: "He can just jack off over our faces like he usually does when I fall asleep. I'll lick your face clean in " +
                    "the morning. ",
                button: [
                    { chatID: -1, text: "Ok.. ", callback: "envy159" },
                ]
            },
            {
                chatID: 108,
                speaker: "me",
                text: "Hey " + sc.n("rachel") + " I've got a new Hucow for you! This is " + sc.n("envy") + ". ",
                button: [
                    { chatID: 109, text: "...", callback: "" },
                ]
            },
            {
                chatID: 109,
                speaker: "envy",
                text: "Really! You do Hucows! I soooo want to be milked! Please please please take me in and milk me! ",
                button: [
                    { chatID: 110, text: "...", callback: "" },
                ]
            },
            {
                chatID: 110,
                speaker: "rachel",
                text: "Well howdy there. You'll do nicely in my little farm. Come with me little lady while we set you up." +
                    sc.n("me") + ", here's your Hucow bonus for bringing in this little cow. *wink* ",
                button: [
                    { chatID: -1, text: "...", callback: "envy" },
                ]
            },
            {
                chatID: 111,
                speaker: "spanky",
                text: "I was just laying thinking.. oh gross, but then this bitch just starts eating it off my face. Licked " +
                    "me clean. So I thought, Hey if she'll eat cum off my face she'll totally eat ass. So I just stuck my asshole " +
                    "right in her face, and she goes all crazy on my shit hole! Really loving it and shit. She start stroking my cock " +
                    "and playing with my balls. I couldn't hold it back anymore and shot my load all over her pillow. She scrapes it off " +
                    "the pillow and shoves it up her ass to save it for later! This slut is the best! ",
                button: [
                    { chatID: 96, text: "ok", callback: "" },
                ]
            },
            {
                chatID: 112,
                speaker: "thinking",
                text: "Spanky's probably full of shit. I'll have to get the movie just to see how full of shit he " +
                    "is. I'll even watch it with her so I can tell him he's full of shit myslef!",
                button: [
                    { chatID: 33, text: "Oh. I forgot to get a movie. I'll have to bring one next time. ", callback: "boardgameset" }
                ]
            },
            {
                chatID: 113,
                speaker: "me",
                text: sc.n("envy") + " I have to confess. The movie we watched last night was a " +
                    "hypno movie. I ran into Spanky in the hallway a few days ago and he told me that he made " +
                    "some videos that would... basically turn you on. I thought he was full of crap so I plugged " +
                    "it in last time and it looks like it worked. I didn't mean to hurt you. ",
                button: [
                    { chatID: 114, text: "...", callback: "" }
                ]
            },
            {
                chatID: 114,
                speaker: "envy",
                text: "I don't understand... what did we watch? ",
                button: [
                    { chatID: 115, text: "A video that hypnotises you into being more slutty. ", callback: "" }
                ]
            },
            {
                chatID: 115,
                speaker: "envy",
                text: "WHAT! Is that why I've been masturbating all day! It's like my vagina is in constant need " +
                    "of orgasms! I haven't been able to read more than 5 pages of War and Peace without touching " +
                    "myself. I thought it was becuase I've been working out more my libido had risen. AKKKKK. ",
                button: [
                    { chatID: 116, text: "I'm sorry? ", callback: "" }
                ]
            },
            {
                chatID: 116,
                speaker: "envy",
                text: "Don't be sorry! Fix this! Fix this right now! I've got to study and I can't concentrate at " +
                    "all! If I fail my classes becuase I can't stop masturbating I'm going to kill you! ",
                button: [
                    { chatID: 117, text: "I don't know how to fix it. Maybe you need to have sex?", callback: "" }
                ]
            },
            {
                chatID: 117,
                speaker: "envy",
                text: "I'm not going to FUCK YOU! Go to Spanky and ask him how to fix me! Fix me now! ",
                button: [
                    { chatID: 118, text: "Ok. I'll talk to Spanky and ask him.", callback: "" }
                ]
            },
            {
                chatID: 118,
                speaker: "envy",
                text: "Don't stare at me! Talk to SPANKY and fix me now! ",
                button: [
                    { chatID: -1, text: "Oh yeah. I'm going.", callback: "envy100" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};