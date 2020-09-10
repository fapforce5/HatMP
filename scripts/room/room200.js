//Room name
var room200 = {};
room200.main = function () {
    if (sc.getstep("missy") > 24) {
        nav.bg("200_frontOffice/200_25.jpg")
    }
    g.internal = "";
    var btnList = [
        {
            "type": "btn",
            "name": "missy",
            "left": 872,
            "top": 481,
            "width": 224,
            "height": 483,
            "image": "200_frontOffice/200_missy.png"
        }
    ];
    $("#room_footer").hide();
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 200);
    });
    var missyStep = sc.getstep("missy");
    var dontDisplay = [3, 5];
    if (dontDisplay.indexOf(missyStep) === -1)
        nav.buildnav(navList);
    if (sc.getstep("missy") === 16)
        nav.bg("200_frontOffice/200_frontOfficeJeffery.jpg");
};

room200.btnclick = function (name) {
    switch (name) {
        case "missy":
            var thisStep = sc.getstep("missy");
            if (g.pass === "bathroomRepeateLeave") {
                chat(107, 200);
            }
            else if (g.pass === "finishhypno1repeat") {
                chat(110, 200);
            }
            else if (g.pass === "repeatdildomouthfinish") {
                chat(112, 200);
            }
            else if (g.pass === "repeatstoolendend") {
                chat(114, 200);
            }
            else if (thisStep === 0) {
                char.room(0);
            }
            else if (thisStep === 1) {
                chat(0, 200);
            }
            else if (thisStep === 2) {
                chat(17, 200);
            }
            else if (thisStep === 3) {
                chat(18, 200);
            }
            else if (thisStep === 4) {
                chat(19, 200);
            }
            else if (thisStep === 5) {
                if (cl.c.chest === 0)
                    chat(20, 200);
                else
                    chat(46, 200);
            }
            else if (thisStep === 6) {
                if (g.pass === "finishComputer") {
                    g.pass = null;
                    $('#room_footer').hide();
                    chat(24, 200);
                }
                else if (cl.c.chest !== 0) {
                    chat(28, 200);
                }
                else {
                    var getTask = Math.floor(Math.random() * 10);
                    if (getTask < 6) { //card game
                        chat(25, 200);
                    }
                    else if (getTask < 12) { //computer
                        chat(26, 200);
                    }
                    else { //clean bathroom --future
                        chat(26, 200);
                    }
                }
            }
            else if (thisStep === 8) {
                if (sc.checkevent("tiffany", -4))
                    chat(137, 200);
                else
                    chat(33, 200);
            }
            else if (thisStep === 9) {
                if (cl.getBodyHair() === null)
                    chat(38, 200);
                else
                    chat(48, 200);
            }
            else if (thisStep === 10 && sc.checkevent("me", 3)) {
                chat(55, 200);
            }
            else if (thisStep === 11) {
                if (g.pass === "finishhypno1")
                    chat(93, 200);
                else
                    chat(86, 200);
            }
            else if (thisStep === 12) {
                if (g.pass === "openmouthfinish")
                    chat(99, 200);
                else
                    chat(94, 200);
            }
            else if (thisStep === 13) {
                if (g.pass === "13end")
                    chat(65, 200);
                else
                    chat(63, 200);
            }
            else if (thisStep === 14) {
                if (g.pass === "14end") {
                    nav.killall();
                    nav.bg("200_frontOffice//panties.jpg");
                    chat(104, 200);
                }
                else
                    chat(102, 200);
            }
            else if (thisStep === 14) {
                chat(66, 200);
            }
            else if (thisStep === 15) {
                chat(67, 200);
            }
            else if (thisStep === 16) {
                chat(68, 200);
            }
            else if (thisStep === 17) {
                chat(72, 200);
            }
            else if (thisStep === 18) {
                if (sc.getstep("jeffery") === 4) {
                    chat(74, 200);
                }
                else {
                    room200.btnclick("revolve");
                }
            }
            else if (thisStep === 19) {
                room200.btnclick("revolve");
            }
            else if (thisStep === 20) {
                chat(77, 200);
            }
            else if (thisStep === 21) {
                room200.btnclick("revolve");
            }
            else if (thisStep === 24) {
                chat(156, 200);
            }
            else if (thisStep === 25) {
                    chat(163, 200);
            }
            else if (thisStep === 26) {
                chat(164, 200);
            }
            else if (thisStep === 27) {
                if (inv.has("redbox"))
                    chat(183, 200);
                else if (inv.has("sewer"))
                    chat(181, 200);
                else
                    chat(182, 200);
            }
            else { //thisstep = 10
                if (g.pass === "finishComputer") {
                    g.pass = null;
                    $('#room_footer').hide();
                    chat(24, 200);
                }
                else if (cl.getBodyHair() === null)
                    room200.chatcatch("turnaround1");
                else
                    chat(48, 200);
            }
            break;
        case "revolve":
            var doingList = ["bathroom", "dildomouth", "hypno", "stool", "card"];
            var thisLen = Math.floor(Math.random() * (doingList.length));
            var thisSelection = doingList[thisLen];
            console.log(thisSelection, thisLen);
            switch (thisSelection) {
                case "bathroom":
                    chat(106, 200);
                    break;
                case "dildomouth":
                    chat(111, 200);
                    break;
                case "hypno":
                    chat(109, 200);
                    break;
                case "stool":
                    chat(113, 200);
                    break;
                case "card":
                    chat(108, 200);
                    break;
            }
            break;
        case "panty_q":
            cl.add("panties", "q");
            cl.c.panties = "q";
            nav.killbutton("panty_h");
            $.each(cl.saveOutfit, function (i, v) {
                if (i !== 4)
                    cl.saveOutfit[i].panties = "q";
            });
            chat(134, 200);
            break;
        case "panty_h":
            cl.add("panties", "h");
            cl.c.panties = "h";
            nav.killbutton("panty_q");
            $.each(cl.saveOutfit, function (i, v) {
                if (i !== 4)
                    cl.saveOutfit[i].panties = "h";
            });
            chat(135, 200);
            break;
        default:
            break;
    }
};

room200.chatcatch = function (callback) {
    switch (callback) {
        case "moneymoney":
            g.mod("money", 300);
            break;
        case "hired":
            char.addtime(180);
            sc.setstep("me", 2);
            sc.setstep("missy", 2);
            char.room(203);
            break;
        case "leave":
            cl.display();
            char.room(0);
            break;
        case "leaveAddHours":
            cl.display();
            char.addtime(120);
            char.room(0);
            break;
        case "clanBathroom":
            char.room(201);
            break;
        case "kneesStep3":
            char.room(202);
            break;
        case "202Pass":
            g.pass = "kneel";
            char.room(202);
            break;
        case "202Pass1":
            g.pass = "lickasshole0";
            char.room(202);
            break;
        case "202kneel":
            g.pass = "kneel";
            char.room(202);
            break;
        case "firstFile":
            g.pass = "first";
            char.room(204);
            break;
        case "removeshirt":
            $('#char-shirt').html('');
            break;
        case "piggy":
            cl.list[cl.where("accessories", "piggy")].inv = true;
            $('#char-accHead').append('<img src="./images/mainChar/' + cl.list[cl.where("accessories", "piggy")].img + '" />');
            cl.c.accessories.push("piggy");
            sc.setstep("missy", 6);
            break;
        case "payLeave":
            g.mod("money", 55);
            cl.display();
            char.room(0);
            break;
        case "jobFile":
            g.pass = null;
            char.room(204);
            break;
        case "jobComputer":
            g.pass = "norm";
            char.room(205);
            break;
        case "jobBathroom":
            //alert("do it");
            break;
        case "toyStore":
            char.addtime(60);
            sc.setstep("missy", 7);
            sc.setstep("tiffany", 1);
            char.room(0);
            break;
        case "leavePanties":
            char.addtime(180);
            sc.setstep("missy", 9);
            sc.setstep("me", -2);
            char.room(0);
            break;
        case "getPantyTask":
            var getTask = Math.floor(Math.random() * 10);
            if (getTask < 4) { //card game
                chat(25, 200);
            }
            else if (getTask < 8) { //computer
                chat(44, 200);
            }
            else { //clean bathroom --future
                chat(44, 200);
            }
            break;
        case "stripPanties":
            nav.kill();
            cl.nude();
            cl.c.panties = "w";
            cl.display();
            nav.bg("200_frontOffice/pantiesShow.jpg");
            break;
        case "stripPanties1":
            nav.bg("200_frontOffice/pantiesShow1.jpg");
            break;
        case "stripPanties2":
            nav.bg("200_frontOffice/pantiesShow2.jpg");
            break;
        case "pantiesOnly":
            sc.setstep("missy", 11);
            var tempPanty = cl.c.panties;
            cl.nude();
            cl.c.panties = tempPanty;
            cl.display();
            break;
        case "leaveAndShave":
            cl.display();
            char.addtime(120);
            if (!sc.checkevent("me", -1))
                sc.setstep("me", -1);
            char.room(0);
            break;
        case "turnaround1":
            //52, 53, 54
            nav.kill();
            //nav.bg("200_frontOffice/200_showPantiesBack.png", "200_frontOffice/200_showPantiesBack.png");
            switch (Math.floor(Math.random() * 3)) {
                case 0:
                    chat(52, 200);
                    break;
                case 1:
                    chat(53, 200);
                    break;
                case 2:
                    chat(54, 200);
                    break;
            }
            break;
        case "turnAroundJeffery":
            g.back = true;
            cl.display();
            break;
        case "turnAroundJeffery1":
            g.back = false;
            cl.display();
            break;
        case "leave10":
            sc.setstep("missy", 11);
            sc.setstep("tiffany", 7);
            g.roomMapAccess(650, true, true);
            char.addtime(240);
            char.room(203);
            break;
        case "nude":
            cl.nude();
            cl.display();
            break;
        case "13end":
            sc.setstep("missy", 14);
            g.mod("money", 30);
            char.addtime(180);
            char.room(0);
            break;
        case "14end":
            sc.setstep("missy", 16);
            char.addtime(180);
            g.mod("money", 20);
            char.room(0);
            break;
        case "15end":
            sc.setstep("missy", 16);
            g.mod("money", 150);
            char.addtime(360);
            char.room(0);
            break;
        case "leave16":
            sc.setstep("missy", 18);
            sc.setstep("jeffery", 3);
            char.addtime(400);
            char.room(0);
            break;
        case "leave18":
            sc.setstep("me", -7);
            sc.setstep("missy", 19);
            sc.setstep("jeffery", 5);
            g.set("shinkCock", true);
            g.mod("money", 120);
            char.addtime(520);
            char.room(0);
            break;
        case "callJeffery":
            nav.killall();
            nav.bg("200_frontOffice/200_frontOfficeJeffery.jpg");
            if (sc.checkevent("jeffery", -1))
                chat(78, 200);
            else
                chat(82, 200);
            break;
        case "dataentry":
            g.pass = "hypno1";
            nav.room(205);
            break;
        case "finish11":
            sc.setstep("missy", 12);
            char.room(0);
            break;
        case "12leave20":
            g.mod("money", 20);
            sc.setstep("missy", 13);
            cl.c.shirt = "r";
            cl.c.panties = "w";
            cl.c.pants = "k";
            cl.c.shoes = "fb";
            cl.display();
            char.room(0);
            break;
        case "12leave0":
            sc.setstep("missy", 13);
            cl.c.shirt = "r";
            cl.c.panties = "w";
            cl.c.pants = "k";
            cl.c.shoes = "fb";
            cl.display();
            char.room(0);
            break;
        case "12Strip":
            cl.nude();
            nav.killall();
            nav.bg("200_frontOffice/buttcheeks.jpg");
            break;
        case "12Strip1":
            nav.bg("200_frontOffice/buttcheeks1.jpg");
            break;
        case "14next":
            cl.nude();
            char.room(202);
            break;
        case "repeatBathroom":
            g.pass = "repeatBathroom";
            char.room(201);
            break;
        case "repeatBathroomLeave":
            g.mod("money", 40);
            char.addtime(360);
            g.pass = "";
            char.room(0);
            break;
        case "repeatCards":
            g.pass = "repeatCards";
            char.room(204);
            break;
        case "repeatHypno":
            g.pass = "repeatHypno";
            char.room(205);
            break;
        case "repeatHypnoleave":
            g.pass = "";
            g.mod("money", 30);
            char.room(0);
            break;
        case "repeatdildomouth":
            g.pass = "repeatdildomouth";
            char.room(202);
            break;
        case "repeatdildomouthfinish":
            char.addtime(120);
            char.room(0);
            break;
        case "repeatstool":
            g.pass = "repeatstool";
            char.room(202);
            break;
        case "disrobe20b":
            nav.killall();
            cl.nude();
            nav.bg("200_frontOffice/jeff1.jpg");
            break;
        case "givepanties20":
            nav.bg("200_frontOffice/jeff2.jpg");
            break;
        case "pocket20":
            nav.bg("200_frontOffice/jeff3.jpg");
            break;
        case "rack20":
            nav.bg("200_frontOffice/cross.jpg");
            zcl.displayMain(0, 810, .18, "armsup", false);

            nav.button({
                "type": "btn",
                "name": "missy",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "200_frontOffice/tieddown.png"
            }, 200);
            break;
        case "jeffleave20":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 872,
                "top": 481,
                "width": 224,
                "height": 483,
                "image": "200_frontOffice/200_missy.png"
            }, 200);
            nav.bg("200_frontOffice/200_frontOffice.jpg");
            zcl.displayMain(445, 1380, .05, "armsup", false);
            nav.button({
                "type": "img",
                "name": "tiedown",
                "left": 1372,
                "top": 440,
                "width": 221,
                "height": 80,
                "image": "200_frontOffice/tieddownsmall.png"
            }, 200);

            break;
        case "20stand1":
            nav.killbutton("missy");
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 164,
                "top": 389,
                "width": 237,
                "height": 628,
                "image": "200_frontOffice/missy_stand.png"
            }, 200);
            break;
        case "20stand2":
            nav.killbutton("missy");
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 872,
                "top": 481,
                "width": 224,
                "height": 483,
                "image": "200_frontOffice/200_missy.png"
            }, 200);
            break;
        case "20stand3":
            nav.killbutton("missy");
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 1489,
                "top": 360,
                "width": 218,
                "height": 700,
                "image": "200_frontOffice/missy_stand1.png"
            }, 200);
            break;
        case "20End":
            cl.c.shirt = "r";
            cl.c.pants = "k";
            cl.c.shoes = "fb";
            cl.remove("panties", "w");
            cl.display();
            char.addtime(800);
            sc.setstep("missy", 21);
            sc.setstep("jeffery", 8);
            g.roomMapAccess(250, true, true);
            char.room(0);
            break;
        case "20jeffgo":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 872,
                "top": 481,
                "width": 224,
                "height": 483,
                "image": "200_frontOffice/200_missy.png"
            }, 200);
            g.mod("money", 500);
            nav.bg("200_frontOffice/200_frontOffice.jpg");
            break;
        case "20eatass":
            g.pass = "20eatass";
            nav.room(202);
            break;
        case "20Pick":
            nav.button({
                "type": "btn",
                "name": "panty_q",
                "left": 1326,
                "top": 377,
                "width": 488,
                "height": 227,
                "image": "200_frontOffice/panty_q.png"
            }, 200);
            nav.button({
                "type": "btn",
                "name": "panty_h",
                "left": 724,
                "top": 377,
                "width": 488,
                "height": 227,
                "image": "200_frontOffice/panty_h.png"
            }, 200);
            break;
        case "cock1":
            nav.killall();
            cl.nude();
            cl.display();
            nav.bg("200_frontOffice/cock1.jpg");
            break;
        case "cock2":
            nav.bg("200_frontOffice/cock2.jpg");
            break;
        case "cock3":
            nav.bg("200_frontOffice/cock3.jpg");
            break;
        case "cock4":
            nav.bg("200_frontOffice/cock4.jpg");
            break;
        case "cock5":
            nav.bg("200_frontOffice/cock5.jpg");
            break;
        case "cock6":
            nav.bg("200_frontOffice/cock6.jpg");
            break;
        case "cock7":
            nav.bg("200_frontOffice/cock7.jpg");
            break;
        case "cock8":
            nav.bg("200_frontOffice/cock8.jpg");
            break;
        case "cock9":
            nav.bg("200_frontOffice/200_frontOffice.jpg");
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 872,
                "top": 481,
                "width": 224,
                "height": 483,
                "image": "200_frontOffice/200_missy.png"
            }, 200);
            cl.c.shirt = "r";
            cl.c.panties = "w";
            cl.c.pants = "k";
            cl.c.shoes = "fb";
            cl.c.panties = "w";
            cl.display();
            break;
        case "stripPantiesHairy":

            break;
        case "strip24":
            nav.killall();
            cl.nude();
            nav.bg("200_frontOffice/202_sideDesk.jpg");
            zcl.kneel(500, 1000, .3, "");
            break;
        case "leave24":
            cl.undo();
            char.addtime(180);
            char.room(0);
            break;
        case "24progress":
            cl.undo();
            sc.setstep("missy", 25);
            char.addtime(200);
            char.room(0);
            break;
        case "25ChstityCheck":
            if (cl.c.chastity === "pink")
                chat(0, 200);
            else
                chat(166, 200);
            break;
        case "25a":
            if (sc.checkevent("tiffany", -5))
                chat(166, 200);
            else
                chat(165, 200);
            break;
        case "25b":
            if (sc.checkevent("holly", -1))
                chat(167, 200);
            else
                chat(168, 200);
            break;
        case "25c":
            sc.setstep("missy", 27);
            sc.setstep("cecilia", 1);
            char.addtime(180);
            char.room(0);
            break;
        case "leaveRoom0":
            char.addtime(30);
            char.room(0);
            break;
        default:
            break;
    }
};

room200.chat = function (chatID) {
    var tempSissy;
    tempSissy = g.get("sissy");
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "So " + sc.n("me") + ", you want to be a Private Investigator? Do what kind of college degree do you have?",
            button: [
                { chatID: 1, text: "I don't have a degree, you see what happened...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "Stop right there. A simple 'no' works. I hate when my employees feel the need to stammer through an excuse.",
            button: [
                { chatID: 2, text: "Sorry", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "Stop!<br />You're boring me. If you're going to waste my time you can at least be interesting.<br />" +
                "Let's look over your application..",
            button: [
                { chatID: tempSissy > 54 ? 3 : (tempSissy > 10 ? 6 : 7), text: "Yes..", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "Oh my, what a little cock hungry slut we have. It's a good thing you came here or you would find yourself at " +
                "at a truck stop glory hole searching for cock for the rest of your life. I've never seen such high scores before, " +
                "you'll do well here. ",
            button: [
                { chatID: 4, text: "Thank you?", callback: "" }
            ]
        },
        {//gender
            chatID: 4,
            speaker: "missy",
            text: "No, thank you. I'm going to mold you into what you've always dreamed about. By the time I'm through with you " +
                "you'll be on your knees kissing my feet in gratitude. Your looks though....",
            button: [
                { chatID: 9, text: "What about my looks?", callback: "" }
            ]
        },
        {//gender
            chatID: 5,
            speaker: "missy",
            text: "",
            button: [
                { chatID: 9, text: "", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "So another average applicant.. That's ok, I'll mold you into something wonderful so you can shed your bland " +
                "middle class upbrining. It's going to take a lot of work and time, but let's start at the beginning shall we? " +
                "Your appearace is pretty shabby, almost wretching. Well have to change your appearce.",
            button: [
                { chatID: 9, text: "My appearance?", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "Oh... This is rather disappointing... According to this application you are as exciting as plain white rice " +
                "with a side of tofu. This may be the wrong place for you. You should just quit now and never come back. Without " +
                "change you're in for a really miserable time. Do you think you can change or do you want to be more than white rice " +
                "and tofu? ",
            button: [
                { chatID: 8, text: "My quiz wasn't the real me, I'm ready for change. ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "HHHHmmmmmmmmmmmmmmmmmm. Like they say the harder the task, the more rewarding it is when it's complete. I'll " +
                "give you a chance kid, but you'll owe. I should just get rid of you right now. I'll start with your looks. " +
                "You look like a mix of dog vomit and a pile of trash. I'll have to change you're looks. ",
            button: [
                { chatID: 9, text: "What's wrong with the way I look?", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "You look like a sloppy mess. I can't have sloppy messes working for me.... " +
                "Today's your lucky day. I'm going to fix you. " +
                "First off I have to have someone that will follow all orders I give without question. " +
                "If I tell you to do something you don't ask why, you just do it. Is this something you can do?",
            button: [
                { chatID: 11, text: "Yes " + sc.n("missy") + ", I can do that.", callback: "" },
                { chatID: 10, text: "What?? No. You make me uncomfortable. ", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "I think you want someone that makes you uncomfortable. you need me. I'm going to take that puddle of mush and make something of " +
                "you. When I'm done you're going to find yourself. Are you ready " + sc.n("me") + "?",
            button: [
                { chatID: 11, text: "I'm ready " + sc.n("missy") + ". ", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "Don't call me " + sc.n("missy") + ". Ever. We're not locker room buddies. You will address me as ma'am at all times. ",
            button: [
                { chatID: 12, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "While we're at it. I don't like the name " + sc.n("me") + ". From now on you'll be called Piggy. Oink for me Piggy.",
            button: [
                { chatID: 13, text: "Oink Oink ma'am", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "Good Piggy. Here's what's going to happen. <br />" +
                "Your job is to do the shit work I don't want to do. Each day you come in I'll give you a task. " +
                "Sometimes it will be stalking a house for a client, sometimes it will be cleaning my toilet for 8 hours. " +
                "If you want to work here you will do exactly what I tell you to do when I tell you to do it.<br /><br />" +
                "Right now you're an idiot and a pervert, I'm going to work on you until you're less of an idiot. " +
                "At the end of the day you will come and thank me in a way I see fit for spending my valuable time mentoring you.<br /><br />" +
                "Is this something you can handle?",
            button: [
                { chatID: 14, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "My employees don't dress like slobs. Since you may have to do some undercover work you will wear what I tell you " +
                "to wear when I tell you to wear it. " +
                "Since you're new I'm going to give you $300 to get the proper attire. " +
                "You will go purchase black dress pants, suit top, black socks, and black dress shoes. " +
                "If you aren't wearing the full suit don't bother showing up. Each morning " + sc.n("cecilia") + " will inspect your to ensure you're " +
                "wearing the proper attire. ",
            button: [
                { chatID: 15, text: "Yes ma'am ", callback: "moneymoney" }
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "Good. " +
                "The work day start between 8 AM and 10 AM Monday - Friday. If you're late don't bother coming in. " +
                "Also shower and get in shape. Fat smelly guys disgust me.<br /> Oink for me to let me know you understand. ",
            button: [
                { chatID: 16, text: "Oink", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "Ok. Now get out before I change my mind.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "hired" }
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "I'm glad to see you can follow simple instructions like dressing yourself. Your first task of the day " +
                "will be to clean my bathroom. As an investigator you have to be able to spend long hours watching every detail. " +
                "There are cleaning supplies in the closet, I expect every inch of that bathroom to be spotless. " +
                "If you clean it really good I'll give you a reward. Now get to work Piggy",
            button: [
                { chatID: -1, text: "[Clean the Bathroom]", callback: "clanBathroom" }
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "Get on your knees next to that chair on my left. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "kneesStep3" }
            ]
        },
        {
            chatID: 19,
            speaker: "missy",
            text: "Welcome back. Follow me to the file cabinets.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "firstFile" }
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "So Piggy, last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
                "I promised you would receive a proper punishment, and I always keep my word. " +
                "Right now you're chubby, not fat but not attractive. Take your shirt off.",
            button: [
                { chatID: 21, text: "Take your shirt off", callback: "removeshirt" }
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "Look at yourself; it's disgusting. Until you lose the weight you're going to wear a piggy nose every time you " +
                "come work for me. Take this and put it on.",
            button: [
                { chatID: 22, text: "[Put on piggy nose]", callback: "piggy" }
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "Hahahahah Piggy don't you look ridiculous. I don't believe in punishment without some kind of reward. " +
                "Once you lose the weight to prove you can commit to something I will let you start working some cases. " +
                "Until then I suggest you start running in the park, or get a gym pass. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "leaveAddHours" }
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "So last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
                "I promised you would receive a proper punishment, and I always keep my word. " +
                "Right now you're chubby, not fat but not attractive. Take your shirt off.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "leave" }
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "You did adequate today.",
            button: [
                { chatID: -1, text: "[Collect $55 day's pay]", callback: "payLeave" }
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "Airhead I'm going to have you file today.",
            button: [
                { chatID: -1, text: "[Start Filing]", callback: "jobFile" }
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "I need you to update our computer files. You can use the spare computer next to " + sc.n("cecilia") + ".",
            button: [
                { chatID: -1, text: "[Start working]", callback: "jobComputer" }
            ]
        },
        {
            chatID: 27,
            speaker: "missy",
            text: "The bathroom is a mess. Go clean it.",
            button: [
                { chatID: -1, text: "[Clean Bathroom]", callback: "jobBathroom" }
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "Allright Piggy I see you've lost the weight, you're actually looking not terrible; I can work with this. " +
                "You are no longer Piggy, you are now Airhead. No longer fat, but still an idiot.",
            button: [
                { chatID: 29, text: "Thank you ma'am", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "You're welcome Airhead. I guess it's time for your first real case. A friend of mine at " +
                "The Toy Store has an ongoing  " +
                "series of run-ins with some crazy cum beast. It seems that some one goes into their wack-off booths " +
                "and just covers it in their cum. It wouldn't be a problem if they paid for a show, but then just enter and " +
                "in a matter of minutes they just cover the entire booth in cum and run. It would be quite impressive if poor " +
                sc.n("candy") + " didn't have to spend so much time cleaning it up. " +
                "I need you to go there, watch the booths, and catch that animal. Do you have all this so far?",
            button: [
                { chatID: 30, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "OK, I need you to go to the Toy Store and meet with " + sc.n("tiffany") + ", she'll explain what to do. This is your " +
                "first big break, don't fuck it up. Now repeat back to me what you're doing.",
            button: [
                { chatID: 31, text: "Go to the mall and buy new shoes", callback: "" },
                { chatID: 31, text: "Go home and masturbate to Hentai", callback: "" },
                { chatID: 32, text: "Going straight to Toys 'N Us and follow Tiffany's orders", callback: "" }
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "No you moron. Obviously you're not ready. Get the fuck out.",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leaveAddHours" }
            ]
        },
        {
            chatID: 32,
            speaker: "missy",
            text: "You got it Airhed, now head over to the toy store and take care of it. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "toyStore" }
            ]
        },
        {
            chatID: 33,
            speaker: "missy",
            text: "Sooooo Airhead. Your first big case and instead of working it you decide to watch my friend Tiffany " +
                "while she's getting ready for a show... I'm not mad at you, I'm actually mad at myself.",
            button: [
                { chatID: 34, text: "...", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "missy",
            text: "Obviously I have not properly trained you for taking a real case. You  seem to like watching women in their " +
                "underwear. It's expected from a man of your age, but if you're going to be in this line of work you have to " +
                "break that desire.",
            button: [
                { chatID: 35, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "missy",
            text: "To break you of your habit of spying on women in their underwear you will report for work from now on in " +
                "women's panties. Nothing to provocative, " + sc.n("cecilia") + " doesn't need to see your balls hanging out. ",
            button: [
                { chatID: 36, text: "...", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "missy",
            text: "I'm not going to force you to do anything, you choose your profession. If you're going to continue to " +
                "work here you will do it in panties. ",
            button: [
                { chatID: 37, text: "Where am I supposed to get panties at?!?", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "missy",
            text: "You're training to be a detective. Finding a pair of women's underwear should not be difficult. " +
                "I have work to do. Report back when you have decided to follow my guidance.",
            button: [
                { chatID: -1, text: "Yes ma'am [Leave]", callback: "leavePanties" }
            ]
        },
        {
            chatID: 38,
            speaker: "missy",
            text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. " +
                "Strip down to your panties and show me.",
            button: [
                { chatID: 39, text: "Yes ma'am [Strip down to your panties]", callback: "stripPanties" }
            ]
        },
        {
            chatID: 39,
            speaker: "missy",
            text: "Nice Sissy. Those panties make you look good on you, I'm proud you've started realizing who you really are. ",
            button: [
                { chatID: 40, text: "Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "missy",
            text: "Call me mistress. Let me see how you ass looks.",
            button: [
                { chatID: 139, text: "Yes mistress", callback: "stripPanties1" }
            ]
        },
        {
            chatID: 41,
            speaker: "missy",
            text: "OK, it's time for your panty check. Strip 'em off.",
            button: [
                { chatID: 42, text: "[Strip]", callback: "stripPanties" }
            ]
        },
        {
            chatID: 42,
            speaker: "missy",
            text: "Let me see that butt now.",
            button: [
                { chatID: -1, text: "[Show Missy your butt]", callback: "turnaround" }
            ]
        },
        {
            chatID: 43,
            speaker: "missy",
            text: "You follow direction very well.",
            button: [
                { chatID: -1, text: "...", callback: "getPantyTask" }
            ]
        },
        {
            chatID: 44,
            speaker: "missy",
            text: "That bathroom is a mess Sissy, you need to clean it up.",
            button: [
                { chatID: -1, text: "[Clean bathroom]", callback: "clanBathroom" }
            ]
        },
        {
            chatID: 45,
            speaker: "missy",
            text: "I like you in your panties, but put your suit back on and assist with " + sc.n("cecilia") + " out front. ",
            button: [
                { chatID: -1, text: "[Get dressed and work out front]", callback: "jobComputer" }
            ]
        },
        {
            chatID: 46,
            speaker: "missy",
            text: "So last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
                "I promised you would receive a proper punishment, and I always keep my word. " +
                "Since you cna't seem to keep a clean bathroom you must like to live in shit, just like a " +
                "little piggy. I got you piggy nose. Take you piggy nose and put it on",
            button: [
                { chatID: 47, text: "[Put on piggy nose]", callback: "piggy" }
            ]
        },
        {
            chatID: 47,
            speaker: "missy",
            text: "Hahahahah Sissy don't you look ridiculous. Make sure you wear that next time you come in " +
                "my lil' piggy boy.",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "leaveAddHours" }
            ]
        },
        {
            chatID: 48,
            speaker: "missy",
            text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. " +
                "Strip down to your panties and show me.",
            button: [
                { chatID: 49, text: "Yes mistress [Strip down to your panties]", callback: "stripPantiesHairy" },
                { chatID: -1, text: "This is too weird for me [Leave]", callback: "leaveAddHours" }
            ]
        },
        {
            chatID: 49,
            speaker: "missy",
            text: "I think I just puked in my mouth a little bit. You're disgusting, go shave your nasty body before " +
                "coming back to work!",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "leaveAndShave" }
            ]
        },
        {
            chatID: 50,
            speaker: "missy",
            text: "Time for the body and panty check.",
            button: [
                { chatID: 51, text: "Yes mistress [Strip down to your panties]", callback: "stripPanties" }
            ]
        },
        {
            chatID: 51,
            speaker: "missy",
            text: "Nice, now turn around, show me your ass.",
            button: [
                { chatID: -1, text: "[Turn around]", callback: "turnaround1" }
            ]
        },
        {
            chatID: 52,
            speaker: "missy",
            text: "Today you're going to file",
            button: [
                { chatID: -1, text: "[File Papers]", callback: "jobFile" }
            ]
        },
        {
            chatID: 53,
            speaker: "missy",
            text: "Today you're going to work out front with " + sc.n("cecilia") + ". ",
            button: [
                { chatID: -1, text: "[Work with " + sc.n("cecilia") + "]", callback: "jobComputer" }
            ]
        },
        {
            chatID: 54,
            speaker: "missy",
            text: "Today you're going to clean my bathroom in your panties.",
            button: [
                { chatID: -1, text: "[Clean bathroom]", callback: "clanBathroom" }
            ]
        },
        {
            chatID: 55,
            speaker: "missy",
            text: "So my little Sissy, are you ready for another menial task that is worthy of your boorish behaviour? ",
            button: [
                { chatID: 56, text: "Well mistress, I was hoping for something better.", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "missy",
            text: "Oh really, why is that?",
            button: [
                { chatID: 57, text: "I've been kicked out of my home so I need to start making more money so I can afford to rent an apartment.", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "missy",
            text: "Oh don't tell me, you did something naughty didn't you. Don't lie!",
            button: [
                { chatID: 58, text: "Yes mistress [Tell the story of how you got kicked out]", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "missy",
            text: "You are a naughty boy! With your " + sc.n("el") + " no less. I'm not suprised at all. Really you're " +
                "quite the average boy, high on your own testosterone and desperate to get laid.",
            button: [
                { chatID: 59, text: "....", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "missy",
            text: "Based on your own actions I'm going to have to severely modify how I train you. Apprently giving you " +
                "a task and having you carry out that task isn't working. Your first lesson is going to be humility and " +
                "femininity.",
            button: [
                { chatID: 60, text: "Lesson?", callback: "missy10panties" }
            ]
        },
        {
            chatID: 60,
            speaker: "missy",
            text: "What did I say about how to address me? Always address me as mistress, so you know how little power you have. " +
                "Go to " + sc.n("tiffany") + "'s and ask for a package she's getting ready for you. " +
                "When you get home, open it up. You'll know what to do from there. ",
            button: [
                { chatID: 61, text: "Yes mistress", callback: "" }
            ]
        },
        {
            chatID: 61,
            speaker: "missy",
            text: "Don't just stand there, go. ",
            button: [
                { chatID: -1, text: "Yes mistress [Go to " + sc.n("tiffany") + "'s]", callback: "leave10" }
            ]
        },
        {
            chatID: 62,
            speaker: "missy",
            text: "",
            button: [
                { chatID: 63, text: "Yes mistress", callback: "" }
            ]
        },
        {
            chatID: 63,
            speaker: "missy",
            text: "Now it's time for your next lesson, learning your place. Stip off your girly clothes.",
            button: [
                { chatID: 64, text: "Yes mistress [disrobe]", callback: "nude" }
            ]
        },
        {
            chatID: 64,
            speaker: "missy",
            text: "Now come over and kneel at my feet Sissy.",
            button: [
                { chatID: -1, text: "Yes mistress ", callback: "202Pass" }
            ]
        },
        {
            chatID: 65,
            speaker: "missy",
            text: "You did a terrible job at being furniture, even for your first day. I'll expect better from you " +
                "in the future. Now go.",
            button: [
                { chatID: -1, text: "Yes mistress ", callback: "13end" }
            ]
        },
        {
            chatID: 66,
            speaker: "missy",
            text: "Something's just occured to me. I spend all this time molding you, training you, paying you, and helping you, " +
                "but I get nothing in return for all my hard work. It's time for you to reward me for all the hard work I do for you.",
            button: [
                { chatID: -1, text: "Yes mistress ", callback: "202Pass1" }
            ]
        },
        {
            chatID: 67,
            speaker: "missy",
            text: "I'm feeling rather generous perhaps tomorrow I'll give you a real job. ",
            button: [
                { chatID: -1, text: "Thank you mistress ", callback: "15end" }
            ]
        },
        {
            chatID: 68,
            speaker: "missy",
            text: "Hello " + sc.n("me") + " this is " + sc.n("jeffery") + ". " + sc.n("jeffery") + " has a problem that I think " +
                "you can help him with. ",
            button: [
                { chatID: 69, text: "Hi " + sc.n("jeffery"), callback: "" }
            ]
        },
        {
            chatID: 69,
            speaker: "jeffery",
            text: "H-H-H-H-H-Hello " + sc.n("me") + " I'm hoping you can h-h-help me with catch the waitress that has been stealing " +
                "from me. You'll need to pose as a waitress in my restaurant to gain their trust to try and catch the theif. " +
                "Do you think you can do that?",
            button: [
                { chatID: 70, text: "Of course I can! ", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "missy",
            text: "As you can see Sissy is well qualified and will fit that part nicely. I have full trust that " +
                "he will do well, because if he doesn't he'll find out what a St. Andrew's Cross is used for. ",
            button: [
                { chatID: 71, text: "I can do it ", callback: "" }
            ]
        },
        {
            chatID: 71,
            speaker: "missy",
            text: "I know you will. Clean my bathroom while " + sc.n("jeffery") + " and I discuss the details of your case.",
            button: [
                { chatID: -1, text: "[Clean the bathroom]", callback: "clanBathroom" }
            ]
        },
        {
            chatID: 72,
            speaker: "missy",
            text: "Since I still have tasks for you around the office you can choose to either work on " + sc.n("jeffery") + "'s case " +
                "at the Naked Beaver Diner, or you can work here, the choice is yours. You will report to either place each morning, clear?",
            button: [
                { chatID: 73, text: "Yes mistress, I can work at the Naked Beaver or here each morning.", callback: "" }
            ]
        },
        {
            chatID: 73,
            speaker: "missy",
            text: "Good, don't screw this up this time.",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "leave16" }
            ]
        },
        {
            chatID: 74,
            speaker: "missy",
            text: "What did I say about not screwing up? It seems to be a pattern with you. You didn't last an hour working for " +
                sc.n("jeffery") + " before you're flashing your cock at everyone! ",
            button: [
                { chatID: 75, text: "But he....", callback: "" }
            ]
        },
        {
            chatID: 75,
            speaker: "missy",
            text: "I didn't ask for you to stammer through your excuses. I'm going to have to fix your problems again. Strip down " +
                "and get over here so we can figure this out.",
            button: [
                { chatID: 143, text: "[Strip]", callback: "cock1" }
            ]
        },
        {
            chatID: 76,
            speaker: "missy",
            text: "Good, I'm going to inform " + sc.n("jeffery") + " to only allow you to work with your chastity device on. " +
                "Now get out and stop screwing up! ",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "leave18" }
            ]
        },
        {
            chatID: 77,
            speaker: "missy",
            text: "Oh good Sissy, you're here. Let me call " + sc.n("jeffery") + " here. ",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "callJeffery" }
            ]
        },
        {
            chatID: 78,
            speaker: "missy",
            text: "So " + sc.n("jeffery") + " how did my little detective do?",
            button: [
                { chatID: 79, text: "...", callback: "" }
            ]
        },
        {
            chatID: 79,
            speaker: "jeffery",
            text: "He did great! Not only did he figure out how they've been stealing from me, but he's a great little " +
                "waitress! If you ever need to pick up some extra money you're welcome to work some shifts at the Naked Beaver!",
            button: [
                { chatID: 80, text: "Thanks mister!", callback: "" }
            ]
        },
        {
            chatID: 80,
            speaker: "missy",
            text: "I am suprised! I guess you're ready for more responsiblity around here. I think a bonus is in order for " +
                "all your hard work! I'll grant your $500 for not screwing up. I also have a little reward for you. " +
                sc.n("jeffery") + "I'm done with you, you may go now.",
            button: [
                { chatID: 81, text: "Yes mistress! Thank you mistress. ", callback: "20jeffgo" }
            ]
        },
        {
            chatID: 81,
            speaker: "missy",
            text: "Sissies need to be rewarded as well and punished. Today sissy you've earned a reward for your work. I will " +
                "allow you to eat my ass. I don't often allow a sissy to eat my ass, but I'm so suprised with you I think you " +
                "deserve it.",
            button: [
                { chatID: -1, text: "Yes mistress !!!!", callback: "20eatass" }
            ]
        },
        {
            chatID: 82,
            speaker: "missy",
            text: "So " + sc.n("jeffery") + " how did my little detective do?",
            button: [
                { chatID: 83, text: "...", callback: "" }
            ]
        },
        {
            chatID: 83,
            speaker: "jeffery",
            text: "He was t-t-t-terrible! Absolutly the worst detective I know. Good waitress though. He's welcome to come back and keep " +
                "working anytime he wants... as a waitress, but a terrible detective.",
            button: [
                { chatID: 84, text: "...", callback: "" }
            ]
        },
        {
            chatID: 84,
            speaker: "missy",
            text: "Well " + sc.n("jeffery") + " we don't tolerate failure here. Since he failed you how do you want to see " +
                "him punished?",
            button: [
                { chatID: 85, text: "...", callback: "" }
            ]
        },
        {
            chatID: 85,
            speaker: "jeffery",
            text: "I w-w-w-want to see him n-n-n-naked. Can you make him get naked? ",
            button: [
                { chatID: 115, text: "What?", callback: "" }
            ]
        },
        {
            chatID: 86,
            speaker: "missy",
            text: "Oh don't you look so much better now! This is your second big step to learning how to be a proper employee. " +
                "That blouse is a little loose, but I'm sure in time you'll fill it out. ",
            button: [
                { chatID: 87, text: "Yes mistress", callback: "" }
            ]
        },
        {
            chatID: 87,
            speaker: "missy",
            text: "So have you heard the term sissy before? ",
            button: [
                { chatID: 88, text: "Like a weakling mistress?", callback: "" }
            ]
        },
        {
            chatID: 88,
            speaker: "missy",
            text: "Hahaha, no, not like a weak male. A sissy is a boy that hasn't found themselves yet. Becasue they haven't found " +
                "themselves they long to serves a person greater than themselves. Sometimes they serve that person scrubbing toilets on " +
                "their hands and knees, and sometimes they servers that person's sexual desires. You are a person who is longing to find " +
                " yourself. Luckily you've found me to serve and help you on your journey. In time I'll help you find others to serve. ",
            button: [
                { chatID: 89, text: "...", callback: "" }
            ]
        },
        {
            chatID: 89,
            speaker: "missy",
            text: "You, Slut, are a sissy, even if you don't fully realize it. Do you know how I know you're a " +
                "sissy?",
            button: [
                { chatID: 90, text: "How?", callback: "" }
            ]
        },
        {
            chatID: 90,
            speaker: "missy",
            text: "You chose to dress like a girl. You had the option to not come in here, to work construction or some other manly " +
                "job, but you choose to keep coming back. You choose to steal your " + sc.n("el") + "'s panties and wear them. " +
                "You chose to clean my bathroom in those panties. You even chose to dress like a sissy secretary and parade yourself " +
                "around. You did this because you know deep down you are a sissy. ",
            button: [
                { chatID: 91, text: "...", callback: "" }
            ]
        },
        {
            chatID: 91,
            speaker: "missy",
            text: "Don't worry my simple simple sissy, I will train you right. You are one of many I have help transform from " +
                "an ugly worthless boy into a beautiful sissy slut. You're in good hands. You first task as my sissy is an easy one " +
                " that even you can handle. I need you to go the the front and do some data entry.  ",
            button: [
                { chatID: 92, text: "but...", callback: "" }
            ]
        },
        {
            chatID: 92,
            speaker: "missy",
            text: "Shhhh.... I know this is a lot to take in, but as a sissy you needn't worry yourself about thinking. " +
                "just go out there and do your data entry.",
            button: [
                { chatID: -1, text: "yes mistress", callback: "dataentry" }
            ]
        },
        {
            chatID: 93,
            speaker: "missy",
            text: "You've taken your first real step. You should be proud of yourself. Tomorrow we shall continue your training " +
                "and find your true self. ",
            button: [
                { chatID: -1, text: "yes mistress", callback: "finish11" }
            ]
        },
        {
            chatID: 94,
            speaker: "missy",
            text: "You know Sissy you look absolutly ridiculous in that outfit. Your nipples are hanging " +
                "out like some kind of street whore. But I guess you need to dress for the job you want, not the job you have. ",
            button: [
                { chatID: 95, text: "yes mistress", callback: "" }
            ]
        },
        {
            chatID: 95,
            speaker: "missy",
            text: "Your first set of lessons is about being comfortable displaying your sissy body to others. I'm going to make " +
                "it so easy even you can do it. Now strip off all your clothing.",
            button: [
                { chatID: 96, text: "What? I can't strip in here mistress", callback: "" },
                { chatID: 97, text: "yes mistress", callback: "12Strip" }
            ]
        },
        {
            chatID: 96,
            speaker: "missy",
            text: "It's not a request, it's an order. Now strip off those clothes.",
            button: [
                { chatID: 97, text: "yes mistress", callback: "12Strip" }
            ]
        },
        {
            chatID: 97,
            speaker: "missy",
            text: "Hmmmmm. Not bad. I bet you would be a great slut. You have a body made to please others. I bet that ass of yours " +
                "is a lot of fun......",
            button: [
                { chatID: 98, text: "😳", callback: "12Strip1" }
            ]
        },
        {
            chatID: 98,
            speaker: "missy",
            text: "Now come over here and kneel at the side of my desk and open your mouth.",
            button: [
                { chatID: -1, text: "yes mistress", callback: "202kneel" }
            ]
        },
        {
            chatID: 99,
            speaker: "missy",
            text: "So do you think I should pay you for allowing you to suck on my pussy juices?",
            button: [
                { chatID: 100, text: "oh well, I could really use the money mistress", callback: "" },
                { chatID: 101, text: "No mistress. Sucking on your juices was all I deserve", callback: "" }
            ]
        },
        {
            chatID: 100,
            speaker: "missy",
            text: "Sigh... Ok, here's $20, and you should be greatful for that.",
            button: [
                { chatID: -1, text: "Thank you mistress", callback: "12leave20" }
            ]
        },
        {
            chatID: 101,
            speaker: "missy",
            text: "You really are turning into a sissy slut! I'm so proud that deep throating my dildo is all you desire.",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "12leave0" }
            ]
        },
        {
            chatID: 102,
            speaker: "missy",
            text: "So you peed all over my rug the last time you were here. While I like it when my sissies pee themselves, I " +
                "don't like it all over my floor. We'll work on that. For this next lesson we'll work on presenting yourself. ",
            button: [
                { chatID: 103, text: "mistress?", callback: "" }
            ]
        },
        {
            chatID: 103,
            speaker: "missy",
            text: "A sissy should be ready at anytime to present their best assets on demand. Think of it as advertising yourself. " +
                "Now strip down and come over here. ",
            button: [
                { chatID: -1, text: "mistress?", callback: "14next" }
            ]
        },
        {
            chatID: 104,
            speaker: "missy",
            text: "Oh Sissy before you put on your cute little skirt I just want you to know that you look " +
                "cute in those panties. They really suit you. You look so cute in girl's clothes I feel it's a shame to that you " +
                "don't let others see you. You're next case we'll fix that. We'll let everyone see how cute you are!",
            button: [
                { chatID: 105, text: "Thank you mistress", callback: "" }
            ]
        },
        {
            chatID: 105,
            speaker: "missy",
            text: "Since you showed off that sissy ass so well, I guess you deserve something, here's $20.",
            button: [
                { chatID: -1, text: "Thank you mistress", callback: "14end" }
            ]
        },
        {
            chatID: 106,
            speaker: "missy",
            text: "My bathroom has a bit dirty, I need you to strip down to your panties and clean it up. I don't want you to " +
                "get your office clothes dirty.",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "repeatBathroom" }
            ]
        },
        {
            chatID: 107,
            speaker: "missy",
            text: "You did well, here's $40 for your time. ",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "repeatBathroomLeave" }
            ]
        },
        {
            chatID: 108,
            speaker: "missy",
            text: "I'm going to have you do some filing today, that airhead " + sc.n("cecilia") + " messed it up again.",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "repeatCards" }
            ]
        },
        {
            chatID: 109,
            speaker: "missy",
            text: "I need to to do some data entry, Sissy. Now get to it.",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "repeatHypno" }
            ]
        },
        {
            chatID: 110,
            speaker: "missy",
            text: "I suppose you did well, but it's hard to screw up sitting on your ass. I'll give you $30 for your time. ",
            button: [
                { chatID: -1, text: "Thank you mistress", callback: "repeatHypnoleave" }
            ]
        },
        {
            chatID: 111,
            speaker: "missy",
            text: "It's your lucky day, today you get to taste me, now strip and open up.",
            button: [
                { chatID: -1, text: "Thank you mistress", callback: "repeatdildomouth" }
            ]
        },
        {
            chatID: 112,
            speaker: "missy",
            text: "Getting a taste of my pussy is it's own reward, go.",
            button: [
                { chatID: -1, text: "Thank you mistress", callback: "repeatdildomouthfinish" }
            ]
        },
        {
            chatID: 113,
            speaker: "missy",
            text: "You get to practice being a stool again. Well see if you can do it without pissing all over my carpet again. ",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "repeatstool" }
            ]
        },
        {
            chatID: 114,
            speaker: "missy",
            text: "I suppose furniture isn't free, here's $30",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "repeatHypnoleave" }
            ]
        },
        {
            chatID: 115,
            speaker: "missy",
            text: "Stop. Sissies don't get to say no. Take off your clothes.",
            button: [
                { chatID: 117, text: "Yes mistress [disrobe]", callback: "disrobe20b" },
                { chatID: 116, text: "You can't make me do that!", callback: "" }
            ]
        },
        {
            chatID: 116,
            speaker: "missy",
            text: "I did not hire you so you could act like a spoiled child and throw a temper tantrum. Now take off your " +
                "clothes or you're fired!",
            button: [
                { chatID: 117, text: "Yes mistress", callback: "disrobe20b" }
            ]
        },
        {
            chatID: 117,
            speaker: "jeffery",
            text: "uuuhhhh well I think he should also give me his p-p-p-p-panties.  ",
            button: [
                { chatID: 118, text: "huh?", callback: "" }
            ]
        },
        {
            chatID: 118,
            speaker: "missy",
            text: "That seems fitting, Sissy give " + sc.n("jeffery") + " your panties. NOW!",
            button: [
                { chatID: 119, text: "[Give " + sc.n("jeffery") + " your panties]", callback: "givepanties20" }
            ]
        },
        {
            chatID: 119,
            speaker: "jeffery",
            text: "ooooOOooooOOhhh yesssss, that's so fresh! I love your scent! Can I keep these.. I'm going to keep these.",
            button: [
                { chatID: 120, text: "...", callback: "" }
            ]
        },
        {
            chatID: 120,
            speaker: "missy",
            text: "Yes " + sc.n("jeffery") + " you can keep them. Now kindly put those in your pocket as we continue.",
            button: [
                { chatID: 121, text: "...", callback: "pocket20" }
            ]
        },
        {
            chatID: 121,
            speaker: "missy",
            text: "Now We'll put you on the punishment rack. It's where bad sissies go for punishment. Come over to the rack and " +
                "place your arms againts the wood.",
            button: [
                { chatID: 122, text: "...", callback: "rack20" }
            ]
        },
        {
            chatID: 122,
            speaker: "jeffery",
            text: "ooOOooo can I touch him? I want to touch him.",
            button: [
                { chatID: 123, text: "...", callback: "" }
            ]
        },
        {
            chatID: 123,
            speaker: "missy",
            text: "You can touch him. You can touch him however you want, my little sissy likes to be molested. If you object " +
                "my little sissy just say so.",
            button: [
                { chatID: 124, text: "MMmmmMMmmmmmm", callback: "" },
                { chatID: 124, text: "uuuuUUHhhhmmmMMMMMMMM", callback: "" }
            ]
        },
        {
            chatID: 124,
            speaker: "missy",
            text: "See he wants to be molested, he already moaning like a whore. But not today. Today he's going to work on " +
                "being wall decoration. You may go, when he's ready for you I'll let you know, for now I have to get back to work. ",
            button: [
                { chatID: 125, text: "...", callback: "" }
            ]
        },
        {
            chatID: 125,
            speaker: "jeffery",
            text: "ok fine. Bb-b-b-b-b-b-but when he's ready p-p-p-p-please let me know, I'm so excited, do you want to see my " +
                "penis, it's so horny right now.",
            button: [
                { chatID: 126, text: "...", callback: "" }
            ]
        },
        {
            chatID: 126,
            speaker: "missy",
            text: "UGH, " + sc.n("jeffery") + " if you pull that thing out I'm going to punch it. Now get out, I have work to do",
            button: [
                { chatID: 127, text: "...", callback: "jeffleave20" }
            ]
        },
        {
            chatID: 127,
            speaker: "missy",
            text: "You just stay there while I get some work done around here. ",
            button: [
                { chatID: 128, text: "...", callback: "" }
            ]
        },
        {
            chatID: 128,
            speaker: "missy",
            text: "YYou're lucky I'm only keeping you on the rack. " +
                "The next time you make me angry it will be soooo much worse. ",
            button: [
                { chatID: 129, text: "MMmMMMmm", callback: "20stand" }
            ]
        },
        {
            chatID: 129,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 130, text: "...", callback: "20stand1" }
            ]
        },
        {
            chatID: 130,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 131, text: "...", callback: "20stand2" }
            ]
        },
        {
            chatID: 131,
            speaker: "missy",
            text: "[Continues to work]",
            button: [
                { chatID: 132, text: "...", callback: "20stand3" }
            ]
        },
        {
            chatID: 132,
            speaker: "missy",
            text: "I think you've been up there long enough. Don't fail me again or you're going to regret it!",
            button: [
                { chatID: 133, text: "Yes mistress", callback: "" }
            ]
        },
        {
            chatID: 133,
            speaker: "missy",
            text: "Since you're now down a pair of panties, I'll let you have some that have been left over from previous sissies. I'll let you pick one to " +
                "take home. ",
            button: [
                { chatID: -1, text: "Thank you mistress", callback: "20Pick" }
            ]
        },
        {
            chatID: 134,
            speaker: "missy",
            text: "Oh, so you're a 'cum queen.' I had a feeling you would love to be fucked and filled by big hard cocks in your little mouth and ass. Don't worry " +
                "sissy, in time you will be.",
            button: [
                { chatID: 136, text: "...", callback: "" }
            ]
        },
        {
            chatID: 135,
            speaker: "missy",
            text: "How cute. You like the handcuffs you bondage slut. I knew you would be a great victim.",
            button: [
                { chatID: 136, text: "...", callback: "" }
            ]
        },
        {
            chatID: 136,
            speaker: "missy",
            text: "New take your new panties and go. I'm sick of listening to you breath",
            button: [
                { chatID: -1, text: "Yes mistress", callback: "20End" }
            ]
        },
        {
            chatID: 137,
            speaker: "missy",
            text: "I can't believe you fell asleep on the job. In a sex shop, no less. You're so lethargic, you need something around you all the time to " +
                "keep your attention.... Hmmmmmmm",
            button: [
                { chatID: 138, text: "Yes mistress?", callback: "" }
            ]
        },
        {
            chatID: 138,
            speaker: "missy",
            text: "I'm going to have you start wearing panties. That should put a little jolt in your system. Having your cock wrapped in some silky smooth fabric. " +
                " Nothing to provocative, " + sc.n("cecilia") + " doesn't need to see your balls hanging out.",
            button: [
                { chatID: 36, text: "Yes mistress?", callback: "" }
            ]
        },
        {
            chatID: 139,
            speaker: "missy",
            text: "You do have a nice plump ass. A little masuline, but we'll change that in time. Wait here while I change and give you your reward.",
            button: [
                { chatID: 140, text: "Yes mistress", callback: "stripPanties" }
            ]
        },
        {
            chatID: 140,
            speaker: "me",
            text: "...What's she doing?",
            button: [
                { chatID: 141, text: "...", callback: "stripPanties2" }
            ]
        },
        {
            chatID: 141,
            speaker: "missy",
            text: "I usually save this treat for when you're futher along, but... you seem like you would enjoy this, an early taste of what's to come.",
            button: [
                { chatID: 142, text: "**Gulp**", callback: "" }
            ]
        },
        {
            chatID: 142,
            speaker: "missy",
            text: "**Laughs** Don't worry, you're not ready for Big Red here. I just wanted you to know what lies in your future. Now go clean my " +
                "bathroom. ",
            button: [
                { chatID: -1, text: "Right away", callback: "clanBathroom" }
            ]
        },
        {
            chatID: 143,
            speaker: "missy",
            text: "Hmmm, I see the problem, this cock of yours is far too large. It's not clit like at all... Boys have cocks, and women have " +
                "clits. Cocks are big dominate instruments to impale innocent pussies. Clits are cute little spots on girls and sissies that you can " +
                "rub for pleasure. If you're going to dress like a sissy, you have to have a clit like a sissy. ",
            button: [
                { chatID: 144, text: "...", callback: "cock2" }
            ]
        },
        {
            chatID: 144,
            speaker: "missy",
            text: "Since you don't have a cute little clit, we're going to shove that cock into a smaller space so you're not running around " +
                "shoving that cock into poor little women. Let's put on your first chastity device. I know it may look scary, but it's better for you.",
            button: [
                { chatID: 145, text: "...", callback: "cock3" }
            ]
        },
        {
            chatID: 145,
            speaker: "missy",
            text: "So we'll just slide it on your cock...",
            button: [
                { chatID: 146, text: "...", callback: "cock4" }
            ]
        },
        {
            chatID: 146,
            speaker: "missy",
            text: "JUSTTTT..... ERRRR",
            button: [
                { chatID: 147, text: "...", callback: "cock5" }
            ]
        },
        {
            chatID: 147,
            speaker: "missy",
            text: "AAAARRRGGG.... SLIDDDEEE",
            button: [
                { chatID: 148, text: "...", callback: "cock1" }
            ]
        },
        {
            chatID: 148,
            speaker: "missy",
            text: "Hmmmm... So that is the largest chastity device " + sc.n("tiffany") + " carries... Well have to do something about that. " +
                "Hmmmmmm",
            button: [
                { chatID: 149, text: "...", callback: "" }
            ]
        },
        {
            chatID: 149,
            speaker: "missy",
            text: "......I know... The cage isn't too small for your cock, your cock is too large for the cage. We just need to make it smaller. " +
                "One second while I get the cream... hehe it's not that kind of cream.",
            button: [
                { chatID: 150, text: "...", callback: "cock6" }
            ]
        },
        {
            chatID: 150,
            speaker: "missy",
            text: ".............oh here it is!!!",
            button: [
                { chatID: 151, text: "...", callback: "cock7" }
            ]
        },
        {
            chatID: 151,
            speaker: "missy",
            text: "Tiny PP! When your cock is just too big. One little application closer to a sissy clitty.",
            button: [
                { chatID: 152, text: "...", callback: "cock8" }
            ]
        },
        {
            chatID: 152,
            speaker: "missy",
            text: "Just leave that overnight and and in the morning you'll be able to fit into your chastity device. Won't that be fun. " +
                "You're taking you next big step into being my little sissy. I'm so excited for you.",
            button: [
                { chatID: 153, text: "But I like having a giant cock..", callback: "" },
                { chatID: 154, text: "Oh thank you! I want so badly to have a tiny pretty little clit!", callback: "" }
            ]
        },
        {
            chatID: 153,
            speaker: "missy",
            text: "Oh don't be silly. You only think you like having a big cock. Soon you'll be experiencing pleasures you didn't know existed. " +
                "Now stop whining like a petulant child and put on your cute little skirt and blouse. ",
            button: [
                { chatID: 155, text: "Yes mistress", callback: "cock9" }
            ]
        },
        {
            chatID: 154,
            speaker: "missy",
            text: "You are quite welcome. I'm glad you realize you're try purpose my little sissy. I'll take good care of you on your journey. Now put " +
                "your pretty little skirt and blouse. ",
            button: [
                { chatID: 155, text: "Thank you mistress", callback: "cock9" }
            ]
        },
        {
            chatID: 155,
            speaker: "missy",
            text: "I'm going to give you $120 to purchase your first chastity device. In the morning your sissy dick will be small enough to " +
                "fit in that device. " +
                "You're still going to bave a rather large penis, so it won't fit in all devices, make sure to get the biggest device " +
                sc.n("candy") + " has. In time you'll we'll shink that cock into a proper sissy clit. Do you understand?",
            button: [
                { chatID: 76, text: "Yes mistress", callback: "cock9" }
            ]
        },
        {
            chatID: 156,
            speaker: "missy",
            text: "Strip down and kneel before me.",
            button: [
                { chatID: 157, text: "Yes mistress.", callback: "strip24" }
            ]
        },
        {
            chatID: 157,
            speaker: "missy",
            text: "I suppose you're ready for the real training. To take part you must give into me, fully and completely. If I allow you to " +
                "serve me and partake in the full sissy training you must do what I say, when I say it without questions. You will be my slave, my " +
                "braindead, slutty slave. Do you agree to be my personal slut?",
            button: [
                { chatID: 158, text: "I have a question.", callback: "" },
                { chatID: 158, text: "No, I'm not ready", callback: "" },
                { chatID: 158, text: "What's the training?", callback: "" },
                { chatID: 159, text: "Yes mistress.", callback: "" }
            ]
        },
        {
            chatID: 158,
            speaker: "missy",
            text: "You are not ready. Leave me until you can learn to serve without question.",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave24" },
            ]
        },
        {
            chatID: 159,
            speaker: "missy",
            text: "Good, those are the only words a slave needs. I can't keep having you piss on my floor. Your training will continue in " +
                "my training rooms. Because I am a good Mistress I shall allow you to choose your training. Each floor will have a different " +
                "type of training for you to choose from. ",
            button: [
                { chatID: 160, text: "...", callback: "" },
            ]
        },
        {
            chatID: 160,
            speaker: "missy",
            text: "Going forward you will only be allowed in here if I have a case for you, and all future cases will be based on your " +
                "progression in my program. ",
            button: [
                { chatID: 161, text: "...", callback: "" },
            ]
        },
        {
            chatID: 161,
            speaker: "missy",
            text: "I will let the elevator operator know you can now use it. Simply go into the hallway and use the elevator. Press the button " +
                "for the floor you want. I'll let you enter the Red Room of Disicpline, but the other two you'll have to earn. Since I have only have " +
                "so much time in my day you'll have to arrive by 10:00 each day you wish to progress. Do you understand?",
            button: [
                { chatID: 160, text: "Sorry mistress, can you repeat that", callback: "" },
                { chatID: 162, text: "Yes mistress.", callback: "" },
            ]
        },
        {
            chatID: 162,
            speaker: "missy",
            text: "Good now go. ",
            button: [
                { chatID: -1, text: "yes mistress", callback: "24progress" },
            ]
        },
        {
            chatID: 163,
            speaker: "missy",
            text: "You still need to pass the red room of discipline. ",
            button: [
                { chatID: -1, text: "yes mistress", callback: "leave" },
            ]
        },
        {
            chatID: 164,
            speaker: "missy",
            text: "Your trial is complete, you have proven yourself a worthy sissy. As you may have guessed by now I did not hire " +
                "you to simply file paperwork and assist with menial cases. The cases were to test you, see how you would react.",
            button: [
                { chatID: -1, text: "huh?", callback: "25a" },
            ]
        },
        {
            chatID: 165,
            speaker: "missy",
            text: "When I assigned you to help " + sc.n("tiffany") + " find the person covering her booths in cum I assumed you would " +
                "peek on her like an untrained sex starved boy, but you suprised me with your self discipline. I must applaud your resilience. ",
            button: [
                { chatID: -1, text: "...", callback: "25b" },
            ]
        },
        {
            chatID: 166,
            speaker: "missy",
            text: "When I assigned you to help " + sc.n("tiffany") + " find the person covering her booths in cum I knew you wouldn't " +
                "be able to help yourself. Like a young male pervert you had to peek. You needed to look at her pussy. I need you to " +
                "know that about yourself. Your lust, if used improperly, will be your downfall.",
            button: [
                { chatID: -1, text: "...", callback: "25b" },
            ]
        },

        {
            chatID: 167,
            speaker: "missy",
            text: "Then when you helped " + sc.n("jeffery") + " find who was stealing from him, I will admit I didn't expect you to rat " +
                "out those poor girls. I honestly thought you had a conscious. It's that kind of heartlessness that may serve me well.  ",
            button: [
                { chatID: 169, text: "...", callback: "" },
            ]
        },
        {
            chatID: 168,
            speaker: "missy",
            text: "When I assigned you to help " + sc.n("jeffery") + " find who was stealing from him, I knew you would fail. I had already figured " +
                "out what happened before I assigned you to the case. Those girls are so careless in how they rob the diner. The true " +
                "purpose was to show you that you have such feminine features you could crossdress in public.  ",
            button: [
                { chatID: 169, text: "...", callback: "" },
            ]
        },
        {
            chatID: 169,
            speaker: "missy",
            text: "And finally you've shown yourself to have the discipline it takes to help me against this cities biggest problem, those " +
                "damn cultists! They have been a scourge upon this city for far too long, sucking in innocent boys and girls in to their ranks. ",
            button: [
                { chatID: 170, text: "The cult?", callback: "" },
            ]
        },
        {
            chatID: 170,
            speaker: "missy",
            text: "Yes, surely you've come across them by now. They prey on those without self esteem and suck them in, give them a false " +
                "sense of self worth, but only if you follow their leader to the fullest. He pulls them in and devours their individuality; " +
                "makes them his servents. That's where you come in.",
            button: [
                { chatID: 171, text: "Me?", callback: "" },
            ]
        },
        {
            chatID: 171,
            speaker: "missy",
            text: "Yes. There are many of them, and the path to the cult's door is difficult filled with many different challenges. When " +
                "you walked in I felt you may just be the one. I needed someone that can move between genders, someone that can both fight and " +
                "fuck their way out of a situation. More importantly I need someone that can follow my direction without question. You're the " +
                "sissy I need to help take them down.",
            button: [
                { chatID: 172, text: "I CAN DO IT!!!!", callback: "" },
                { chatID: 173, text: "I don't know, it seems kinda hard", callback: "" },
            ]
        },
        {
            chatID: 172,
            speaker: "missy",
            text: "Slow down. You're no where near ready for the cult. You'll either get sucked in or become a victim of the cult. ",
            button: [
                { chatID: 174, text: "...", callback: "" },
            ]
        },
        {
            chatID: 173,
            speaker: "missy",
            text: "Don't be silly. You're stronger than you think if you just apply yourself. ",
            button: [
                { chatID: 174, text: "...", callback: "" },
            ]
        },
        {
            chatID: 174,
            speaker: "missy",
            text: "Deep in the sewers of this city there's a group that calls themselves the Clown Clan. They stole something of mine " +
                "that I can use to help prepare you for the long difficult road ahead. I need you to get me that item.",
            button: [
                { chatID: 175, text: "What is it ma'am?", callback: "" },
            ]
        },
        {
            chatID: 175,
            speaker: "missy",
            text: "I wouldn't want to ruin the suprise; you'll know it when you see it. Now you're not yet ready to take on the " +
                "Clown Clan yet. You need to go to the gym and receive training from " + sc.n("g") + ". She will teach you the " +
                "basics of fighting. ",
            button: [
                { chatID: 176, text: "Fighting ma'am?", callback: "" },
            ]
        },
        {
            chatID: 176,
            speaker: "missy",
            text: "Yes. There are many ways to defeat your enemies. I know your true strength is your sissy assets, but you need to " +
                "be more than just a fuckhole if we're going to bring down the cult. If I wanted a whore I would've hired one. You need " +
                "to be able to use all your skills to your best ability. Some enemies can be brought down with your sissy ass, but some " +
                "have to be brought down with your fists. ",
            button: [
                { chatID: 177, text: "Gulp", callback: "" },
            ]
        },
        {
            chatID: 177,
            speaker: "missy",
            text: "Once you receive your first lesson " + sc.n("g") + " will give you the sewer lid opener. Make your way to the rear of the " +
                "sewer and retreive my item. It will be in a red box. Keep it closed until you return to me. ",
            button: [
                { chatID: 178, text: "Yes ma'am!", callback: "" },
            ]
        },
        {
            chatID: 178,
            speaker: "missy",
            text: "To help you out I'll allow you to continue your training. The pink room of pleasure will help you be better with your " +
                "sissy skills. The black room of pain will help you improve your defences and raise your pain tolerance. Any questions? ",
            button: [
                { chatID: 179, text: "Yes why is " + sc.n("cecilia") + " tied up ma'am?", callback: "" },
                { chatID: 180, text: "No ma'am", callback: "" },
            ]
        },
        {
            chatID: 178,
            speaker: "missy",
            text: sc.n("cecilia") + " has been busy spending all her time sucking cock and not enough time working on her " +
                "duties. Let " + sc.n("cecilia") + " be a lesson to you. Your duty is to obey, and serve me first, or you will pay for " +
                "your discretions",
            button: [
                { chatID: 180, text: "Yes ma'am", callback: "" },
            ]
        },
        {
            chatID: 180,
            speaker: "missy",
            text: "Now go, and get my package. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "25c" },
            ]
        },
        {
            chatID: 181,
            speaker: "missy",
            text: "Come back when you have my package. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "leaveRoom0" },
            ]
        },
        {
            chatID: 182,
            speaker: "missy",
            text: "You need to meet " + sc.n("g") + " at the gym. Make sure you're fit enough to get invited to the back gym. There " +
                "you'll have to take sparring training from her, then you can go to the sewer and get my box.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "leaveRoom0" },
            ]
        },
        {
            chatID: 183,
            speaker: "missy",
            text: "What's in the box!!! You'll have to tune into next releases exciting conclusion to find out! Or vote for it on my " +
            "Patreon. Thanks for playing, this is the end of this release.",
            button: [
                { chatID: -1, text: "Drat! Till next time you fiend!!", callback: "leaveRoom0" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};