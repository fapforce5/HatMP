//Room name
var room209 = {};
room209.main = function () {
    var mstep = sc.getstep("missy");
    var oncase = g.get("oncase");
    if (mstep < 10) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        chat(0, 209);
    }
    else if (g.dt.getDay() === 6 || g.dt.getDay() === 0 || g.dt.getHours() > 9) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        if (g.dt.getHours() > 9)
            chat(2, 209);
        else
            chat(1, 209);
    }
    else if (oncase !== null) {
        room209.btnclick("bb1");
        room209.btnclick("poster0");
        room209.btnclick("displayChairsit");
        room209.btnclick("displayMissybtn");
        chat(60, 209);
    }
    else if (!g.sissy[54].ach) {
        room209.btnclick("bb0");
        room209.btnclick("poster0");
        room209.btnclick("displayMissy");
        room209.btnclick("displayChairsit");
        chat(3, 209);
    }
    else {
        if (sc.checkevent("missy", -1)) {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayMissybtn");
            if (g.internal === "sugar0" || g.internal === "sugar3")
                chat(23, 209);
            else if (g.internal === "sugar1") {
                chat(24, 209);
                nav.button({
                    "type": "img",
                    "name": "teatime",
                    "left": 710,
                    "top": 755,
                    "width": 522,
                    "height": 325,
                    "image": "209_classroom/tea.png"
                }, 209);
            }
            else
                chat(26, 209);
        }
        else if (g.sissy[1].ach) {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            room209.btnclick("displaypbtn");
        }
        else {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
        }
    }
};
 
room209.btnclick = function (name) {
    switch (name) {
        case "exit":
            char.room(0);
            break;
        case "reset":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("displayMissy");
            break;
        case "displayMissy":
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            break;
        case "displayMissybtn":
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            break;
        case "displaypbtn":
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1500,
                "top": 200,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            break;
        case "displayChairsit":
            zcl.displayMain(400, 100, .25, "clothes", true);
            nav.button({
                "type": "img",
                "name": "chair",
                "left": 336,
                "top": 898,
                "width": 564,
                "height": 182,
                "image": "209_classroom/chariback.png"
            }, 209);
            break;
        case "bb0":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "bb1":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/bbPanties.jpg"
            }, 209);
            break;
        case "poster0":
            nav.button({
                "type": "img",
                "name": "poster",
                "left": 277,
                "top": 251,
                "width": 269,
                "height": 321,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "missy0accept":
            chat(10, 209);
            break;
        case "appearnceStart":
            var hasSuit = cl.c.shoes === "d" && cl.c.pants === "s" && cl.c.shirt === "s" && cl.c.socks === "b";
            var hasGirlSuit = cl.c.shoes === "fb" && cl.c.pants === "k" && cl.c.shirt === "r" && cl.c.socks === null;
            var hasPanties = cl.getEntry("panties", cl.c.panties).sex === "f";
            if (g.sissy[24].ach) {
                if (hasGirlSuit && hasPanties)
                    room209.btnclick("pointsStart");
                else
                    chat(18, 209);
            }
            else {
                if (hasSuit && hasPanties)
                    room209.btnclick("pointsStart");
                else if (!hasPanties)
                    chat(19, 209);
                else
                    chat(20, 209);
            }
            break;
        case "pointsStart":
            if (scc.get("missy").love > 98) {
                chat(21, 209);
            }
            else {
                room209.btnclick("appearanceStart");
            }
            break;
        case "appearanceStart":
            scc.changesDiffernt("missy", true);
            if (scc.changeText === "")
                room209.btnclick("selectStart");
            else
                chat(999, 209);
            break;
        case "selectStart":
            nav.killall();
            $("#room_footer").hide();
            char.changeMenu("hide");
            nav.bg("28_transformation\grid.jpg");
            room210.main();
            break;
        case "h_0":
            room209.btnclick("reset");
            chat(22, 209);
            break;
        case "h_1":
            room209.btnclick("reset");
            chat(27, 209);
            break;
        case "h_20":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            room209.btnclick("displaypbtn");
            chat(39, 209);
            break;
        case "h_21":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displaypbtn");
            chat(47, 209);
            break;
        case "h_22":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displaypbtn");
            chat(48, 209);
            break;
        case "h_24":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displaypbtn");
            chat(49, 209);
            break;
        case "h_26":
            //makeup
            break;
        case "h_25":
            //heels
            break;
        case "h_28":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(59, 209);
            break;
        case "h_29":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(61, 209);
            break;
        case "h_35":
        case "h_36":
        case "h_37":
        case "h_38":
        case "h_39":
            g.set("oncase", "bigboobs");
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(63, 209);
            break;
        case "h_40":
        case "h_41":
        case "h_42":
        case "h_43":
        case "h_44":
            g.set("oncase", "bigass");
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(63, 209);
            break;
        case "h_45":
        case "h_46":
            g.set("oncase", "dslLips");
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            chat(63, 209);
            break;
        default:
            break;
    }
};

room209.chatcatch = function (callback) {
    switch (callback) {
        case "contract":
            room210.chatcatch("contract");
            break;
        case "missy0_end":
            g.sissy[54].ach = true;
            g.mod("sissy", 10);
            g.mod("money", 30);
            room209.chatcatch("end");
            break;
        case "missy0_1":
            nav.killall();
            nav.bg("209_classroom/missy0_1.jpg");
            break;
        case "missy0_2":
            nav.bg("209_classroom/missy0_2.jpg");
            break;
        case "missy0Display":
            char.changeMenu("hide");
            room210.main();
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 197,
                "top": 0,
                "width": 853,
                "height": 1080,
                "image": "209_classroom/missy0_point.png"
            }, 209);
            break;
        case "missy0_tea":
            sc.setstep("missy", -1);
            char.settime(9, 0);
            g.internal = "teatime";
            char.room(207);
            break;
        case "missy0endbad":
            g.sissy[0].ach = true;
            sc.revokeStep("missy", -1);
            scc.love("missy", -50, 100);
            room209.chatcatch("end");
            break;
        case "missy0end":
            g.sissy[0].ach = true;
            sc.revokeStep("missy", -1);
            scc.love("missy", 20, 100);
            g.mod("money", 40);
            room209.chatcatch("end");
            break;
        case "m2_0":
            nav.killall();
            nav.bg("209_classroom/p3_0.jpg");
            break;
        case "m2_1":
            nav.bg("209_classroom/p3_1.jpg");
            break;
        case "m2_2":
            nav.bg("209_classroom/p3_2.jpg");
            break;
        case "m2_3":
            char.addtime(30);
            nav.bg("209_classroom/p3_3.jpg");
            break;
        case "m3_4x":
            nav.bg("209_classroom/p3_4.jpg");
            break;
        case "m2_4":
            char.addtime(60);
            g.roomTimeout = setTimeout(function () { chat(32, 209); }, 2000);
            break;
        case "m2_5":
            char.addtime(120);
            g.roomTimeout = setTimeout(function () { chat(33, 209); }, 2000);
            break;
        case "m2_6":
            nav.bg("209_classroom/p3_6.jpg");
            break;
        case "m2_x":
            nav.bg("209_classroom/p3_x.jpg");
            break;
        case "m2_end":
            g.mod("sissy", 60);
            g.mod("money", 40);
            scc.love("missy", 10);
            g.sissy[1].ach = true;
            room209.chatcatch("end");
            break;
        case "m2_endbad":
            scc.love("missy", -10);
            g.sissy[1].ach = true;
            break;
        case "p20_0":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "p",
                "left": 855,
                "top": 0,
                "width": 1031,
                "height": 1080,
                "image": "209_classroom/p1.png"
            }, 209);
            break;
        case "p20_1":
            nav.killall();
            zcl.displayMain(-1100, 200, .45, "panties", true);
            break;
        case "p20_2":
            zcl.displayMain(-1100, 200, .45, "panties", false);
            break;
        case "p20_3":
            nav.bg("209_classroom/p20_3.jpg");
            zcl.displayMain(-100, 0, .48, "panties", false);
            nav.button({
                "type": "img",
                "name": "face",
                "left": 685,
                "top": 44,
                "width": 475,
                "height": 513,
                "image": "209_classroom/p20_3.png"
            }, 209);
            break;
        case "p20_4":
            nav.killall();
            nav.bg("209_classroom/p20_4.jpg");
            break;
        case "p20_5":
            nav.bg("209_classroom/bg.jpg");
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1200,
                "top": 200,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            zcl.displayMain(-700, 300, .35, "panties", true);
            break;
        case "p20_end":
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.sissy[20].ach = true;
            room209.chatcatch("end");
            break;
        case "h_21_end":
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.sissy[21].ach = true;
            room209.chatcatch("end");
            break;
        case "h_22_end":
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.sissy[22].ach = true;
            room209.chatcatch("end");
            break;
        case "h24_0":
            nav.killbutton("chair");
            zcl.displayMain(-100, 600, .25, "clothes", true);
            break;
        case "h24_1":
            nav.killall();
            zcl.displayMain(-100, 600, .25, "clothes", true);
            nav.bg("209_classroom/h24_1.jpg");
            break;
        case "h24_2":
            cl.c.shirt = null;
            cl.c.pants = null;
            cl.c.socks = null;
            cl.c.dress = "a";
            nav.killall();
            nav.bg("209_classroom/h24_2.jpg");
            break;
        case "h24_3":
            nav.bg("209_classroom/h24_3.jpg");
            break;
        case "h24_4":
            nav.bg("209_classroom/bg.jpg");
            zcl.displayMain(150, 900, .18, "clothes", true);
            nav.button({
                "type": "img",
                "name": "p",
                "left": 810,
                "top": 105,
                "width": 449,
                "height": 975,
                "image": "209_classroom/h24_4.png"
            }, 209);
            break;
        case "h24_5":
            nav.killall();
            room209.btnclick("displayMissybtn");
            zcl.displayMain(150, 600, .18, "clothes", true);
            break;
        case "h24_6":
            g.sissy[24].ach = true;
            g.mod("sissy", 10);
            g.mod("money", 40);
            g.roomMapAccess(650, true, true);
            sc.setstep("tiffany", -8);
            cl.c.dress = null;
            cl.c.shoes = "d";
            cl.c.pants = "s";
            cl.c.shirt = "s";
            cl.c.socks === "b";
            cl.display();
            room209.chatcatch("end");
            break;
        case "h28_x":
            g.pass = "h28_x";
            char.room(200);
            break;
        case "h_29":
            g.set("oncase", "shopping");
            char.addtime(60);
            g.internal = "201 change";
            char.room(201);
            break;
        case "h_40":
            nav.killall();
            nav.bg("209_classroom/h40.jpg");
            break;
        case "h_40_1":
            var oncase40 = g.get("oncase");
            if (oncase40 === "bigboobs")
                nav.button({
                    "type": "img",
                    "name": "boobies",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "209_classroom/boobHypno.gif"
                }, 209);
            else if (oncase40 === "bigass")
                nav.button({
                    "type": "img",
                    "name": "boobies",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "209_classroom/assHypno.gif"
                }, 209);
            else if (oncase40 === "dslLips")
                nav.button({
                    "type": "img",
                    "name": "boobies",
                    "left": 0,
                    "top": 0,
                    "width": 1920,
                    "height": 1080,
                    "image": "209_classroom/dslHypno.gif"
                }, 209);
            g.roomTimeout = setTimeout(function () {
                room209.chatcatch("h_40_2");
            }, 3000);
            break;
        case "h_40_2":
            var oncase401 = g.get("oncase");
            nav.bg("209_classroom/bg.jpg");
            nav.killbutton("boobies");
            room209.btnclick("bb0");
            room209.btnclick("poster0");
            room209.btnclick("displayMissy");
            room209.btnclick("displayChairsit");
            if (oncase401 === "bigboobs")
                chat(65, 209);
            else if (oncase401 === "bigass")
                chat(66, 209);
            else if (oncase401 === "dslLips")
                chat(67, 209);
            break;
        case "h_40_3":
            g.mod("money", 20);
            room209.chatcatch("end");
            break;
        case "selectStart":
            room209.btnclick("selectStart");
            break;
        case "missyMidPoints":
            g.mod("sissy", 100);
            scc.setlove("missy", 0);
            room209.btnclick("appearanceStart");
            break;
        case "missyBadEnd":
            scc.love("missy", -10);
            char.settime(10, 27);
            char.room(0);
            break;
        case "end":
            char.settime(17, 0);
            char.room(0);
            break;
        case "endOnCase":
            char.addtime(30);
            g.internal = "201 change";
            char.room(201);
            break;
        case "love":
            scc.love("missy", 10);
            break;
        case "hate":
            scc.love("missy", -10);
            break;
        default:
            break;
    }
};

room209.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: scc.changeText,
            button: [
                { chatID: -1, text: "Thanks ma'am!", callback: "selectStart" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "I don't know what this room is, but it's creepy as fuck.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "I don't think there's class on the weekend.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "thinking",
                text: "It looks like class starts before 10:00 am. It appears I'm late.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Welcome to the first day of your class. Being that you completely bungled your only simple case I've decided to rush " +
                    "you into my personal training. ",
                button: [
                    { chatID: 4, text: "...", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "It takes many different traits to make a great detective. Physically fit, mentally sharp, thorough, accurate, " +
                    "patient, and a good gut instinct. We've acheived the first step of physically fitness, but you lack all the other " +
                    "traits. Your complete failure on " + sc.n("tiffany") + "'s case shows it will take years to get you to where you need to be.",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "Lucky for you I'm in desperate need for a junior detective and you have some <span class='hl-pink'>trait's</span> " +
                    "that I can put to use. The fact that you stole your " + sc.n("el") + "' panties and wore them here, then paraded " +
                    " yourself around my office shows me a few things. ",
                button: [
                    { chatID: 6, text: "...", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "First it shows a lack of morals. A moral young gentleman wouldn't steal panties from his " +
                    sc.n("el") + ". You obviously have not morals, which will come in handy " +
                    "when you need to go undercover. ",
                button: [
                    { chatID: 7, text: "Well... you see", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "<span class='hl-red'>Shut up!!</span> This is a classroom, not a debate stage. As I was saying... " +
                    "wearing those panties to my office and shaving your entire body shows you have the indicators of a sissy. I " +
                    "am working on several cases that a sissy could come in handy, but you, in your current state would just " +
                    "bungle those cases worse than you bungled " + sc.n("tiffany") + "'s case. ",
                button: [
                    { chatID: 8, text: "...", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "My assistant instructor, " + sc.n("p") + ", and I are going to train you to be the perfect sissy to help us take " +
                    "down the cult once and for all. For far too long the inept police in this town has allowed the cult to grow in power " +
                    "which has only made them more monstrous in their rituals. If you wish to help us put a stop to them your best role " +
                    "is as our undercover sissy detective. ",
                button: [
                    { chatID: 9, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "To prepare you I've drawn up this contract for you to read over.",
                button: [
                    { chatID: -1, text: "[Read Contact]", callback: "contract" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "So do you agree to this contract?",
                button: [
                    { chatID: 13, text: "Yes, I'm in", callback: "missy0_1" },
                    { chatID: 11, text: "This is too much, I can't do it.", callback: "hate" }
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "This is what we call a <span class='hl'>False choice.</span> This sissy school is at the root of the story line " +
                    "and you will have to do it so lets just get it over now. Also let's be honest with ourselves. Somewhere deep down " +
                    "inside you needs to be forced in to a subservient little sissy. Just agree with the contract so we can move on.",
                button: [
                    { chatID: 13, text: "You're right, I'm a sissy bitch that agrees with this stupid contract.", callback: "missy0_1" },
                    { chatID: 12, text: "NO! You can't tell me what to do. I'm still out", callback: "hate" }
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: "Listen here you little shit! You're going to be my bitch, I'm going to fuck you with my big red strapon, " +
                    "and you're going to thank me for it. Now sign the contract so we can move the story forward. ",
                button: [
                    { chatID: 13, text: "Fuck ok! I'll sign the contract. Also I'm a little bitch", callback: "missy0_1" }
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: "Good, I'm glad you so readily agreed. I'm going to install Sissy AI, the tracking software, on your phone. It really " +
                    "has the most advanced AI of its kind. It records all the audio, camera, and can even track your biometrics " +
                    "to give a complete sexual picture of the phone holder. ",
                button: [
                    { chatID: 14, text: "...", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "What the hell! There's no way a program can track everything I do, can it? I must be crazy to keep going with " +
                    "this, but I really need the job and the cult thing sounds bad. Hopefully she doens't make me do anything " +
                    "too embarrassing. I dont' think it can get much worse that having to wear <span class='hl-pink'>panties</span>.",
                button: [
                    { chatID: 15, text: "...", callback: "missy0_2" }
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "I've set up the AI to automatically give you extra credit points based on your actions. To see how many " +
                    "points you have just check the Sissy App in your phone. When you have enough you can trade in those points " +
                    "here in the Sissy School. ",
                button: [
                    { chatID: 16, text: "Yes ma'am", callback: "missy0Display" }
                ]
            },
            {
                chatID: 16,
                speaker: "missy",
                text: "Also when you come in tomorrow you'll be presented with the course list where you can choose which class " +
                    "you take. You've completed your first class, and you'll select which class you want to take next which " +
                    "happens to be Tea Time. Don't worry too much of what that is, when you get here I'll go over what you " +
                    "need to do.",
                button: [
                    { chatID: 17, text: "Yes ma'am.", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "missy",
                text: "Good. We have a lot of work ahead of us. Get a good night's sleep and well begin your " +
                    "lessons tomrrow.",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missy0_end" }
                ]
            },
            {
                chatID: 18,
                speaker: "missy",
                text: "I know you were instructed on the proper uniform and that's not it! You need to begin by wearing your " +
                    "blouse, skirt, black flats, panties, and not socks. Get out and fix yourself.",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 19,
                speaker: "missy",
                text: "You know panties are required. Come back when you can learn to follow directions!",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 20,
                speaker: "missy",
                text: "You need to wear your suit. I know you know what it is. Come back when you can learn to follow directions",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 21,
                speaker: "missy",
                text: "You've been doing very well lately. I knew you would make a proper sissy. For doing so well I'm going " +
                    "to give you 100 extra credit points. You should be proud of yourself.",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "missyMidPoints" }
                ]
            },
            {
                chatID: 22,
                speaker: "missy",
                text: "Today, your lesson will be on servitude. I know all you care about is getting your cock into something " +
                    "warm and wet, but you need to expand your horizons. Go upstairs and fetch me a tea with 1 lump. If you need " +
                    "help ask " + sc.n("cecilia") + " where to go to fix the tea.",
                button: [
                    { chatID: -1, text: "[Get the tea]", callback: "missy0_tea" }
                ]
            },
            {
                chatID: 23,
                speaker: "missy",
                text: "I see you didn't pay attention to my order. I said 1 lump of sugar. Tea should have an elegant sweatness, without " +
                    "becoming sugar water. You have failed to follow simple directions, I'm done with you for the day.",
                button: [
                    { chatID: -1, text: "Oh sorry ma'am", callback: "missy0endbad" }
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "A perfect cup of tea with an elegant sweatness, but not too sweet. Congratulations on carrying out the simplest of " +
                    "orders. You probably think you deserve a reward.",
                button: [
                    { chatID: 25, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "Well you don't. You will receive some spending cash, because I'm incredibly giving. That is all for today.",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "missy0end" }
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: "I simply asked you to get a cup of tea with 1 lump of sugar and you dilly-dallied through this simple task. " +
                    "You have failed to follow simple directions, I'm done with you for the day.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "missy0endbad" }
                ]
            },

            {
                chatID: 27,
                speaker: "missy",
                text: "Today we shall continue with out lessons on service. Lucky for you I'm feeling quite horny so " +
                    "you will get to service me. Come here and kneel.",
                button: [
                    { chatID: 28, text: "Nice!", callback: "m2_0" }
                ]
            },
            {
                chatID: 28,
                speaker: "missy",
                text: "You're going to be my vibrator cleaner and holder today.",
                button: [
                    { chatID: 29, text: "...", callback: "m2_1" }
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "Let me just pull this out.",
                button: [
                    { chatID: 30, text: "...", callback: "m2_2" }
                ]
            },
            {
                chatID: 30,
                speaker: "missy",
                text: "There. Aren't you the cutest dildo holder. Just sit there and don't move. I'm going to my office to do some work.",
                button: [
                    { chatID: 31, text: "...", callback: "m2_3" }
                ]
            },
            {
                chatID: 31,
                speaker: "thinking",
                text: "Did she just leave? This vibrator tasted yummy, but I've swallowed all the juices. It just tastes like " +
                    "hard plastic now. Should I get up and leave, this is really too much.",
                button: [
                    { chatID: -1, text: "[Wait a bit longer]", callback: "m2_4" }
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "What the fuck! I've been waiting over an hour now. This is absolute crap! What does " + sc.n("missy") + " think " +
                    "I am? It's like she doesn't respect me at all. I'm sure she got stuck or forgot about me. I should go up and check.",
                button: [
                    { chatID: -1, text: "[Wait longer]", callback: "m2_5" },
                    { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "m2_x" }
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "OK she totally forgot. I've been kneeling here almost 4 hours! This is just too much. " + sc.n("missy") + " doesn't " +
                    "care about me at all! I'm going to go up there and really tell her what I think!",
                button: [
                    { chatID: 34, text: "[Wait longer]", callback: "m2_6" },
                    { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "m2_x" }
                ]
            },
            {
                chatID: 34,
                speaker: "missy",
                text: "I see you can follow directions, that's a good boy. For successfully passing your first real assignment I'll award " +
                    "you 60 SISSY POINTS. ",
                button: [
                    { chatID: 35, text: "hank aakkk oooo", callback: "m3_4x" }
                ]
            },
            {
                chatID: 35,
                speaker: "missy",
                text: "You are free to go. Let me just take back my favorite vibrator.",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "m2_end" }
                ]
            },
            {
                chatID: 36,
                speaker: "missy",
                text: "<span class='hl-red'>Why are you standing, and why isn't my vibrator in your mouth?</span>",
                button: [
                    { chatID: 37, text: "Oh uhhhh, I thought you forgot about me.", callback: "" }
                ]
            },
            {
                chatID: 37,
                speaker: "missy",
                text: "No, I didn't forget about you! You failed this lesson. I award you no points, and may god have mercy on your soul. ",
                button: [
                    { chatID: 38, text: "What?", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "missy",
                text: "You failed. If you want to get anywhere you need to find the discipline within yourself or you'll never be a " +
                    "junior detective. I'm deducting 60 points. Now get out of my classroom.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "m2_endbad" }
                ]
            },
            {
                chatID: 39,
                speaker: "missy",
                text: "Today I have a treat for you. Meet " + sc.n("p") + ". She'll be my assistant trainer. Normally she runs the " +
                    "pink room, but she is going to help me with your training. Specifically she'll be your femininity trainer. Say " +
                    "hello to " + sc.n("p") + ".",
                button: [
                    { chatID: 40, text: "Hello " + sc.n("p") + ".", callback: "" }
                ]
            },
            {
                chatID: 40,
                speaker: "p",
                text: "Tehehehe! Hi " + sc.n("me") + ". " + sc.n("missy") + " has told me about you. I've only worked with sissies in the pink " +
                    "room of pleasure. You'll be my first to bring all the way up; I'm so excited! ",
                button: [
                    { chatID: 41, text: "...", callback: "p20_0" }
                ]
            },
            {
                chatID: 41,
                speaker: "p",
                text: "Now strip to your panties you little slut!",
                button: [
                    { chatID: 42, text: "Yelp! [Strip to your panties]", callback: "p20_1" }
                ]
            },
            {
                chatID: 42,
                speaker: "p",
                text: "Turn around",
                button: [
                    { chatID: 43, text: "...", callback: "p20_2" }
                ]
            },
            {
                chatID: 43,
                speaker: "p",
                text: "I like how your follow orders. You're more of a sissy than you think you are.",
                button: [
                    { chatID: 44, text: "...", callback: "p20_3" }
                ]
            },
            {
                chatID: 44,
                speaker: "p",
                text: "You are yummy...",
                button: [
                    { chatID: 45, text: "Gulp!", callback: "p20_4" }
                ]
            },
            {
                chatID: 45,
                speaker: "p",
                text: "...and so big.",
                button: [
                    { chatID: 46, text: "Gulp!", callback: "p20_5" }
                ]
            },
            {
                chatID: 46,
                speaker: "p",
                text: "I'm going to really enjoy training you. You're going to be a perfect little slut when I get down with you. " +
                    "I've got to get back to the pink room, but we're going to have fun.",
                button: [
                    { chatID: -1, text: "ok, bye", callback: "p20_end" }
                ]
            },
            {
                chatID: 47,
                speaker: "p",
                text: "With artist",
                button: [
                    { chatID: -1, text: "skip", callback: "h_21_end" }
                ]
            },
            {
                chatID: 48,
                speaker: "p",
                text: "With artist",
                button: [
                    { chatID: -1, text: "skip", callback: "h_22_end" }
                ]
            },
            {
                chatID: 49,
                speaker: "p",
                text: "Don't you just want to be a little girl! Well congratulations we're going to take your first big step!",
                button: [
                    { chatID: 50, text: "Huh? What step?", callback: "" }
                ]
            },
            {
                chatID: 50,
                speaker: "p",
                text: "Awww, you're so cute, acting like you don't know exactly what you asked for. Strip to your panties my little girl. ",
                button: [
                    { chatID: 51, text: "OK!", callback: "h24_1" }
                ]
            },
            {
                chatID: 51,
                speaker: "p",
                text: "Now for your pretty dress. Personally I think this Alice in Wonderland dress is perfect for a fist timer. " +
                    "Go ahead, try it on. ",
                button: [
                    { chatID: 52, text: "OK!", callback: "h24_2" }
                ]
            },
            {
                chatID: 52,
                speaker: "p",
                text: "That's a good girl, now curtsy for me in your new dress. ",
                button: [
                    { chatID: 53, text: "OK!", callback: "h24_3" }
                ]
            },
            {
                chatID: 53,
                speaker: "p",
                text: "You're a natural. You should have been born a girl. Let me take a look at you. ",
                button: [
                    { chatID: 54, text: "OK!", callback: "h24_4" }
                ]
            },
            {
                chatID: 54,
                speaker: "p",
                text: "You need more butt, but there's time. Missy has something for you. ",
                button: [
                    { chatID: 55, text: "OK!", callback: "h24_5" }
                ]
            },
            {
                chatID: 55,
                speaker: "missy",
                text: "So you want to be a girly sissy, such a pretty little sissy. Well if you like wearing dreses so much " +
                    "you can start reporting here in a nice pretty skirt to show off those pretty little legs of yours. " +
                    "Go down to the local store and get yourself a pretty little skirt.",
                button: [
                    { chatID: 56, text: "....", callback: "" }
                ]
            },
            {
                chatID: 56,
                speaker: "thinking",
                text: "There's no way I can go into a girl's store and buy girly clothes! What if someone sees me, they'll " +
                    "make fun of me and tell " + sc.n("lola") + " and " + sc.n("eva") + " and " + sc.n("landlord") + " and " +
                    "all my friends! They'll never let me live it down. There's no way I can do this!",
                button: [
                    { chatID: 57, text: "....", callback: "" }
                ]
            },
            {
                chatID: 57,
                speaker: "missy",
                text: "Well slut, do you have anything to say?",
                button: [
                    { chatID: 58, text: "I'm so sorry ma'am, I can do it!", callback: "" }
                ]
            },
            {
                chatID: 58,
                speaker: "missy",
                text: "Oh, I guess you're just a sissy for us. Well no matter. Go see " + sc.n("tiffany") + " at the Toys 'n " +
                    " Us store. Pick up the package. You'll know what to do with it. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h24_6" }
                ]
            },
            {
                chatID: 59,
                speaker: "missy",
                text: "I think you're ready for this case. The owner of the local diner, " + sc.n("jeffery") + " " +
                    "asked me to open a case for him. Come up to my office and we'll go over it. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h28_x" }
                ]
            },
            {
                chatID: 60,
                speaker: "missy",
                text: "There's no classes while you're on assignment. Once you complete your assignment then you can rejoin your classes. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "endOnCase" }
                ]
            },
            {
                chatID: 61,
                speaker: "missy",
                text: "So, you want to take your femininity public?",
                button: [
                    { chatID: 62, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 62,
                speaker: "missy",
                text: "Well the classroom is not an ideal place to do that. Go see my friend " + sc.n("tiffany") + ". " +
                    "She's got a suprise for you.",
                button: [
                    { chatID: -1, text: "Squeel in excitement", callback: "h_29" }
                ]
            },
            {
                chatID: 63,
                speaker: "missy",
                text: "Making a permenet body modification is a serious step. I'm glad you've decided to go down this path. ",
                button: [
                    { chatID: 64, text: "* Squeel in excitement *", callback: "h_40" }
                ]
            },
            {
                chatID: 64,
                speaker: "missy",
                text: "Take this pill and put these glasses on. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "h_40_1" }
                ]
            },
            {
                chatID: 65,
                speaker: "missy",
                text: "That should do it. The pill will take effect sometime while you sleep. Here's $20 for taking part in the " + 
                    "experimental pills.",
                button: [
                    { chatID: -1, text: "Bigger Boobs..........", callback: "h_40_3" }
                ]
            },
            {
                chatID: 66,
                speaker: "missy",
                text: "That should do it. The pill will take effect sometime while you sleep. Here's $20 for taking part in the " +
                    "experimental pills.",
                button: [
                    { chatID: -1, text: "Bigger Butt..........", callback: "h_40_3" }
                ]
            },
            {
                chatID: 67,
                speaker: "missy",
                text: "That should do it. The pill will take effect sometime while you sleep. Here's $20 for taking part in the " +
                    "experimental pills.",
                button: [
                    { chatID: -1, text: "Dick Sucking Lips..........", callback: "h_40_3" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};