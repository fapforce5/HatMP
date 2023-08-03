//Room name
var room200 = {};
room200.main = function () {

    nav.button({
        "type": "btn",
        "name": "missy",
        "left": 667,
        "top": 469,
        "width": 622,
        "height": 520,
        "image": "200_frontOffice/200_missy.png"
    }, 200);
        

    //var oncase = gv.get("oncase");
    //if (g.pass === "h28_x") {
    //    nav.bg("200_frontOffice/200_frontOfficeJeffery.jpg");
    //    chat(67, 200);
    //}
    //else {
    //    if (g.sissy[16].ach) {
    //        nav.bg("200_frontOffice/200_25.jpg");
    //    }
    //    g.internal = "";
    //    var btnList = [
    //        {
    //            "type": "btn",
    //            "name": "missy",
    //            "left": 872,
    //            "top": 481,
    //            "width": 224,
    //            "height": 483,
    //            "image": "200_frontOffice/200_missy.png"
    //        }
    //    ];
    //    $("#room_footer").hide();
    //    var navList = [0];
    //    $.each(btnList, function (i, v) {
    //        nav.button(v, 200);
    //    });
    //    var missyStep = sc.getstep("missy");
    //    var dontDisplay = [3, 5];
    //    if (dontDisplay.indexOf(missyStep) === -1)
    //        nav.buildnav(navList);
    //}
};

room200.btnclick = function (name) {
    switch (name) {
        case "missy":
            var thisStep = sc.getstep("missy");
            if (missy.get("totalDaysWorked") < 1)
                chat(0, 200);
            else
                room200.chatcatch("selectJob");
        break;
        case "job_0":
        case "job_1":
        case "job_2":
        case "job_3":
        case "job_4":
            g.pass = (parseInt(name.replace("job_", "")));
            char.room(218);
            break;
        case "case_0":
            var caseList = missy.getcases();
            $.each(caseList, function (i, v) {
                if (v.req !== null) {
                    g.internal = v.req;
                    chat(999, 200);
                }
                else {
                    chat(v.chatId, 200);
                }
            });
            break;
        default:
            break;
    }
};

room200.chatcatch = function (callback) {
    switch (callback) {
        case "minorInfraction":
            missy.mod(3, 1);
            break;
        case "selectJob":
            nav.killall();
            nav.bg("200_frontOffice/work.jpg");
            $.each(missy.jobs, function (i, v) {
                if (missy.st[v.thisWeek].c === 0) {
                    nav.button({
                        "type": "btn",
                        "name": "job_" + i,
                        "left": 400 + (Math.floor(i / 4) * 700),
                        "top": 450 + ((i % 4) * 120),
                        "width": 600,
                        "height": 100,
                        "image": "200_frontOffice/" + v.img
                    }, 200);
                }
            });

            $.each(missy.getcases(), function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": "case_" + v.id,
                    "left": 400 + (Math.floor(i / 2) * 700),
                    "top": 100 + ((i % 2) * 120),
                    "width": 600,
                    "height": 100,
                    "image": "200_frontOffice/" + v.img
                }, 200);
            });
            break;
    };
    //switch (callback) {
    //    case "moneymoney":
    //        gv.mod("money", 300);
    //        break;
    //    case "hired":
    //        char.addtime(180);
    //        sc.setstep("me", 2);
    //        sc.setstep("missy", 2);
    //        char.room(203);
    //        break;
    //    case "leave":
    //        cl.display();
    //        char.room(0);
    //        break;
    //    case "leaveAddHours":
    //        cl.display();
    //        char.addtime(120);
    //        char.room(0);
    //        break;
    //    case "clanBathroom":
    //        g.pass = "cleanbathroom";
    //        char.room(201);
    //        break;
    //    case "kneesStep3":
    //        char.room(202);
    //        break;
    //    case "202Pass":
    //        g.pass = "kneel";
    //        char.room(202);
    //        break;
    //    case "202Pass1":
    //        g.pass = "lickasshole0";
    //        char.room(202);
    //        break;
    //    case "202kneel":
    //        g.pass = "kneel";
    //        char.room(202);
    //        break;
    //    case "firstFile":
    //        g.pass = "first";
    //        char.room(204);
    //        break;
    //    case "removeshirt":
    //        $('#char-shirt').html('');
    //        break;
    //    case "piggy":
    //        cl.list[cl.where("accessories", "piggy")].inv = true;
    //        $('#char-accHead').append('<img src="./images/mainChar/' + cl.list[cl.where("accessories", "piggy")].img + '" />');
    //        cl.c.accessories.push("piggy");
    //        sc.setstep("missy", 6);
    //        break;
    //    case "payLeave":
    //        gv.mod("money", 55);
    //        cl.display();
    //        char.room(0);
    //        break;
    //    case "jobFile":
    //        g.pass = null;
    //        char.room(204);
    //        break;
    //    case "jobComputer":
    //        g.pass = "norm";
    //        char.room(205);
    //        break;
    //    case "jobBathroom":
    //        //alert("do it");
    //        break;
    //    case "toyStore":
    //        char.addtime(60);
    //        sc.setstep("missy", 7);
    //        sc.setstep("tiffany", 1);
    //        char.room(0);
    //        break;
    //    case "pantiesReward":
    //        gv.mod("money", 300);
    //        scc.love("missy", 20, 100);
    //        break;
    //    case "leavePanties":
    //        char.addtime(180);
    //        sc.setstep("missy", 9);
    //        sc.setstep("me", -1);
    //        sc.setstep("me", -2);
    //        char.room(0);
    //        break;
    //    case "getPantyTask":
    //        var getTask = Math.floor(Math.random() * 10);
    //        if (getTask < 4) { //card game
    //            chat(25, 200);
    //        }
    //        else if (getTask < 8) { //computer
    //            chat(44, 200);
    //        }
    //        else { //clean bathroom --future
    //            chat(44, 200);
    //        }
    //        break;
    //    case "stripPanties":
    //        nav.kill();
    //        cl.nude();
    //        cl.c.panties = "w";
    //        cl.display();
    //        nav.bg("200_frontOffice/pantiesShow.jpg");
    //        break;
    //    case "stripPanties1":
    //        nav.bg("200_frontOffice/pantiesShow1.jpg");
    //        break;
    //    case "stripPanties2":
    //        nav.bg("200_frontOffice/pantiesShow2.jpg");
    //        break;
    //    case "pantiesOnly":
    //        sc.setstep("missy", 11);
    //        var tempPanty = cl.c.panties;
    //        cl.nude();
    //        cl.c.panties = tempPanty;
    //        cl.display();
    //        break;
    //    case "leaveAndShave":
    //        cl.display();
    //        char.addtime(120);
    //        if (!sc.checkevent("me", -1))
    //            sc.setstep("me", -1);
    //        char.room(0);
    //        break;
    //    case "turnaround1":
    //        //52, 53, 54
    //        nav.kill();
    //        //nav.bg("200_frontOffice/200_showPantiesBack.png", "200_frontOffice/200_showPantiesBack.png");
    //        switch (Math.floor(Math.random() * 3)) {
    //            case 0:
    //                chat(52, 200);
    //                break;
    //            case 1:
    //                chat(53, 200);
    //                break;
    //            case 2:
    //                chat(54, 200);
    //                break;
    //        }
    //        break;
    //    case "turnAroundJeffery":
    //        g.back = true;
    //        cl.display();
    //        break;
    //    case "turnAroundJeffery1":
    //        g.back = false;
    //        cl.display();
    //        break;
    //    case "leave10":
    //        sc.setstep("missy", 11);
    //        sc.setstep("tiffany", 7);
    //        g.roomMapAccess(650, true, true);
    //        char.addtime(240);
    //        char.room(203);
    //        break;
    //    case "nude":
    //        cl.nude();
    //        cl.display();
    //        break;
    //    case "13end":
    //        sc.setstep("missy", 14);
    //        gv.mod("money", 30);
    //        char.addtime(180);
    //        char.room(0);
    //        break;
    //    case "14end":
    //        sc.setstep("missy", 16);
    //        char.addtime(180);
    //        gv.mod("money", 20);
    //        char.room(0);
    //        break;
    //    case "15end":
    //        sc.setstep("missy", 16);
    //        gv.mod("money", 150);
    //        char.addtime(360);
    //        char.room(0);
    //        break;
    //    case "leave16":
    //        sc.setstep("missy", 18);
    //        sc.setstep("jeffery", 3);
    //        char.addtime(400);
    //        char.room(0);
    //        break;
    //    case "leave18":
    //        sc.setstep("me", -7);
    //        sc.setstep("missy", 19);
    //        sc.setstep("jeffery", 5);
    //        gv.set("shinkCock", true);
    //        gv.mod("money", 120);
    //        char.addtime(520);
    //        char.room(0);
    //        break;
    //    case "callJeffery":
    //        nav.killall();
    //        nav.bg("200_frontOffice/200_frontOfficeJeffery.jpg");
    //        if (sc.checkevent("jeffery", -1))
    //            chat(78, 200);
    //        else
    //            chat(82, 200);
    //        break;
    //    case "dataentry":
    //        g.pass = "hypno1";
    //        nav.room(205);
    //        break;
    //    case "finish11":
    //        sc.setstep("missy", 12);
    //        char.room(0);
    //        break;
    //    case "12leave20":
    //        gv.mod("money", 20);
    //        sc.setstep("missy", 13);
    //        cl.c.shirt = "r";
    //        cl.c.panties = "w";
    //        cl.c.pants = "k";
    //        cl.c.shoes = "fb";
    //        cl.display();
    //        char.room(0);
    //        break;
    //    case "12leave0":
    //        sc.setstep("missy", 13);
    //        cl.c.shirt = "r";
    //        cl.c.panties = "w";
    //        cl.c.pants = "k";
    //        cl.c.shoes = "fb";
    //        cl.display();
    //        char.room(0);
    //        break;
    //    case "12Strip":
    //        cl.nude();
    //        nav.killall();
    //        nav.bg("200_frontOffice/buttcheeks.jpg");
    //        break;
    //    case "12Strip1":
    //        nav.bg("200_frontOffice/buttcheeks1.jpg");
    //        break;
    //    case "14next":
    //        cl.nude();
    //        char.room(202);
    //        break;
    //    case "repeatBathroom":
    //        g.pass = "repeatBathroom";
    //        char.room(201);
    //        break;
    //    case "repeatBathroomLeave":
    //        gv.mod("money", 40);
    //        char.addtime(360);
    //        g.pass = "";
    //        char.room(0);
    //        break;
    //    case "repeatCards":
    //        g.pass = "repeatCards";
    //        char.room(204);
    //        break;
    //    case "repeatHypno":
    //        g.pass = "repeatHypno";
    //        char.room(205);
    //        break;
    //    case "repeatHypnoleave":
    //        g.pass = "";
    //        gv.mod("money", 30);
    //        char.room(0);
    //        break;
    //    case "repeatdildomouth":
    //        g.pass = "repeatdildomouth";
    //        char.room(202);
    //        break;
    //    case "repeatdildomouthfinish":
    //        char.addtime(120);
    //        char.room(0);
    //        break;
    //    case "repeatstool":
    //        g.pass = "repeatstool";
    //        char.room(202);
    //        break;
    //    case "disrobe20b":
    //        nav.killall();
    //        cl.nude();
    //        nav.bg("200_frontOffice/jeff1.jpg");
    //        break;
    //    case "givepanties20":
    //        nav.bg("200_frontOffice/jeff2.jpg");
    //        break;
    //    case "pocket20":
    //        nav.bg("200_frontOffice/jeff3.jpg");
    //        break;
    //    case "rack20":
    //        nav.bg("200_frontOffice/cross.jpg");
    //        zcl.displayMain(0, 810, .18, "armsup", false);

    //        nav.button({
    //            "type": "btn",
    //            "name": "missy",
    //            "left": 0,
    //            "top": 0,
    //            "width": 1920,
    //            "height": 1080,
    //            "image": "200_frontOffice/tieddown.png"
    //        }, 200);
    //        break;
    //    case "jeffleave20":
    //        nav.killall();
    //        nav.button({
    //            "type": "img",
    //            "name": "missy",
    //            "left": 872,
    //            "top": 481,
    //            "width": 224,
    //            "height": 483,
    //            "image": "200_frontOffice/200_missy.png"
    //        }, 200);
    //        nav.bg("200_frontOffice/200_frontOffice.jpg");
    //        zcl.displayMain(445, 1380, .05, "armsup", false);
    //        nav.button({
    //            "type": "img",
    //            "name": "tiedown",
    //            "left": 1372,
    //            "top": 440,
    //            "width": 221,
    //            "height": 80,
    //            "image": "200_frontOffice/tieddownsmall.png"
    //        }, 200);

    //        break;
    //    case "20stand1":
    //        nav.killbutton("missy");
    //        nav.button({
    //            "type": "img",
    //            "name": "missy",
    //            "left": 164,
    //            "top": 389,
    //            "width": 237,
    //            "height": 628,
    //            "image": "200_frontOffice/missy_stand.png"
    //        }, 200);
    //        break;
    //    case "20stand2":
    //        nav.killbutton("missy");
    //        nav.button({
    //            "type": "img",
    //            "name": "missy",
    //            "left": 872,
    //            "top": 481,
    //            "width": 224,
    //            "height": 483,
    //            "image": "200_frontOffice/200_missy.png"
    //        }, 200);
    //        break;
    //    case "20stand3":
    //        nav.killbutton("missy");
    //        nav.button({
    //            "type": "img",
    //            "name": "missy",
    //            "left": 1489,
    //            "top": 360,
    //            "width": 218,
    //            "height": 700,
    //            "image": "200_frontOffice/missy_stand1.png"
    //        }, 200);
    //        break;
    //    case "20End":
    //        cl.undo();
    //        cl.remove("panties", "w");
    //        cl.display();
    //        char.settime(23, 12);
    //        sc.setstep("jeffery", 8);
    //        g.sissy[28].ach = true;
    //        gv.set("oncase", null); 
    //        g.roomMapAccess(250, true, true);
    //        char.room(0);
    //        break;
    //    case "20jeffgo":
    //        nav.killall();
    //        nav.button({
    //            "type": "img",
    //            "name": "missy",
    //            "left": 872,
    //            "top": 481,
    //            "width": 224,
    //            "height": 483,
    //            "image": "200_frontOffice/200_missy.png"
    //        }, 200);
    //        gv.mod("money", 500);
    //        nav.bg("200_frontOffice/200_frontOffice.jpg");
    //        break;
    //    case "20eatass":
    //        g.pass = "20eatass";
    //        nav.room(202);
    //        break;
    //    case "20Pick":
    //        nav.button({
    //            "type": "btn",
    //            "name": "panty_q",
    //            "left": 1326,
    //            "top": 377,
    //            "width": 488,
    //            "height": 227,
    //            "image": "200_frontOffice/panty_q.png"
    //        }, 200);
    //        nav.button({
    //            "type": "btn",
    //            "name": "panty_h",
    //            "left": 724,
    //            "top": 377,
    //            "width": 488,
    //            "height": 227,
    //            "image": "200_frontOffice/panty_h.png"
    //        }, 200);
    //        break;
    //    case "cock1":
    //        nav.killall();
    //        cl.nude();
    //        cl.display();
    //        nav.bg("200_frontOffice/cock1.jpg");
    //        break;
    //    case "cock2":
    //        nav.bg("200_frontOffice/cock2.jpg");
    //        break;
    //    case "cock3":
    //        nav.bg("200_frontOffice/cock3.jpg");
    //        break;
    //    case "cock4":
    //        nav.bg("200_frontOffice/cock4.jpg");
    //        break;
    //    case "cock5":
    //        nav.bg("200_frontOffice/cock5.jpg");
    //        break;
    //    case "cock6":
    //        nav.bg("200_frontOffice/cock6.jpg");
    //        break;
    //    case "cock7":
    //        nav.bg("200_frontOffice/cock7.jpg");
    //        break;
    //    case "cock8":
    //        nav.bg("200_frontOffice/cock8.jpg");
    //        break;
    //    case "cock9":
    //        nav.bg("200_frontOffice/200_frontOffice.jpg");
    //        nav.button({
    //            "type": "img",
    //            "name": "missy",
    //            "left": 872,
    //            "top": 481,
    //            "width": 224,
    //            "height": 483,
    //            "image": "200_frontOffice/200_missy.png"
    //        }, 200);
    //        cl.c.shirt = "r";
    //        cl.c.panties = "w";
    //        cl.c.pants = "k";
    //        cl.c.shoes = "fb";
    //        cl.c.panties = "w";
    //        cl.display();
    //        break;
    //    case "strip24":
    //        nav.killall();
    //        cl.nude();
    //        nav.bg("200_frontOffice/202_sideDesk.jpg");
    //        zcl.kneel(500, 1000, .3, "", false);
    //        break;
    //    case "leave24":
    //        cl.undo();
    //        char.addtime(180);
    //        char.room(0);
    //        break;
    //    case "24progress":
    //        cl.undo();
    //        sc.setstep("missy", 25);
    //        char.addtime(200);
    //        char.room(0);
    //        break;
    //    case "25ChstityCheck":
    //        if (cl.c.chastity === "pink")
    //            chat(0, 200);
    //        else
    //            chat(166, 200);
    //        break;
    //    case "25a":
    //        if (sc.checkevent("tiffany", -5))
    //            chat(166, 200);
    //        else
    //            chat(165, 200);
    //        break;
    //    case "25b":
    //        if (sc.checkevent("holly", -1))
    //            chat(167, 200);
    //        else
    //            chat(168, 200);
    //        break;
    //    case "25c":
    //        sc.setstep("missy", 27);
    //        sc.setstep("cecilia", 1);
    //        char.addtime(180);
    //        char.room(0);
    //        break;
    //    case "leaveRoom0":
    //        char.addtime(30);
    //        char.room(0);
    //        break;
    //    case "questionairre":
    //        if (g.fight === null)
    //            g.fight = 10;
    //        if (g.fight > 54) {
    //            scc.love("missy", 10, 50);
    //            chat(3, 200);
    //        }
    //        else if (g.fight > 10) {
    //            scc.love("missy", 5, 50);
    //            chat(6, 200);
    //        }
    //        else {
    //            if (g.fight < 2)
    //                scc.love("missy", -10, 100);
    //            else
    //                scc.love("missy", -5, 100);
    //            chat(7, 200);
    //        }
    //        g.fight = null;
    //        break;
    //    case "mlike":
    //        scc.love("missy", 2, 50);
    //        break;
    //    case "mhate":
    //        scc.love("missy", -2, 50);
    //        break;
    //    case "end9":
    //        cl.c.pants = "s";
    //        cl.c.shirt = "s";
    //        cl.c.socks = "b";
    //        cl.c.shoes = "d";
    //        cl.display();
    //        sc.setstep("missy", 10);
    //        char.addtime(360);
    //        char.room(0);
    //        break;
    //    case "h_19":
    //        g.sissy[19].ach = true;
    //        gv.set("oncase", "sewer");
    //        room209.chatcatch("end");
    //        break;
    //    case "endRedBox":
    //        gv.set("oncase", null);
    //        g.sissy[19].ach = true;
    //        gv.mod("money", 100);
    //        scc.love("missy", 20);
    //        inv.use("redbox");
    //        char.addtime(30);
    //        char.room(0);
    //        break;
    //    case "h28_1":
    //        cl.c.shirt = null;
    //        zcl.displayMain(0, 400, .22, "clothes", true);
    //        break;
    //    case "h28_2":
    //        cl.c.pants = null;
    //        zcl.displayMain(0, 400, .22, "clothes", true);
    //        break;
    //    case "h28_3":
    //        gv.set("oncase", "diner");
    //        sc.setstep("jeffery", 3);
    //        char.addtime(400);
    //        g.internal = "201 change";
    //        g.pass = "";
    //        char.room(201);
    //        break;
    //    case "g2_furniture":
    //        g.pass = "g2_furniture";
    //        char.room(202);
    //        break;
    //    case "g2_furniture_1":
    //        gv.mod("money", 20);
    //        gv.mod("missyPoints", 30);
    //        g.sissy[2].ach = true;
    //        room209.chatcatch("end");
    //        break;
    //    default:
    //        break;
    //}
};

room200.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: g.internal,
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Welcome to your first day. I'm glad to see you can follow simple instructions like dressing yourself. " +
                    "As my employee you'll find I'm very strict. I expect your utmost loyalty and obediance in " +
                    "everything you do for me. If you do well, you'll be rewarded, if you do poorly you will be " +
                    "disciplined. ",
                button: [
                    { chatID: 1, text: "cool", callback: "" },
                    { chatID: 2, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "Thank you for the chance to demonstrate how you will be disciplined. Not calling me by my " +
                    "proper title is a minor infraction. $10 will be deducted from your paycheck on the end of " +
                    "week. ",
                button: [
                    { chatID: 2, text: "Yes ma'am", callback: "minorInfraction" },
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "I've been without proper help for far too long, so there are many things to do. Each morning " +
                    "I will allow you to pick which job you will do for me. Each one has a different compensation " +
                    "depending on it's need and difficulty. I will allow you to take lunch, then the afternoon I " +
                    "will administer any training I have for you. You have a lot to learn, and my time is valuable.  ",
                button: [
                    { chatID: 3, text: "Yes ma'am", callback: "" },
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Payday is on Friday. Don't missy work on Friday or you will not be paid. Now choose which " +
                    "job you want to do on your first day. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "selectJob" },
                ]
            },
            //},
            //{
            //    chatID: 17,
            //    speaker: "missy",
            //    text: "I'm glad to see you can follow simple instructions like dressing yourself. Your first task of the day " +
            //        "will be to clean my bathroom. As an investigator you have to be able to spend long hours watching every detail. " +
            //        "There are cleaning supplies in the closet, I expect every inch of that bathroom to be spotless. " +
            //        "If you clean it really good I'll give you a reward. Now get to work Piggy",
            //    button: [
            //        { chatID: -1, text: "[Clean the Bathroom]", callback: "clanBathroom" }
            //    ]
            //},
            //{
            //    chatID: 18,
            //    speaker: "missy",
            //    text: "Get on your knees next to that chair on my left. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "kneesStep3" }
            //    ]
            //},
            //{
            //    chatID: 19,
            //    speaker: "missy",
            //    text: "Welcome back. Follow me to the file cabinets.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "firstFile" }
            //    ]
            //},
            //{
            //    chatID: 20,
            //    speaker: "missy",
            //    text: "So Piggy, last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
            //        "I promised you would receive a proper punishment, and I always keep my word. " +
            //        "Right now you're chubby, not fat but not attractive. Take your shirt off.",
            //    button: [
            //        { chatID: 21, text: "Take your shirt off", callback: "removeshirt" }
            //    ]
            //},
            //{
            //    chatID: 21,
            //    speaker: "missy",
            //    text: "Look at yourself; it's disgusting. Until you lose the weight you're going to wear a piggy nose every time you " +
            //        "come work for me. Take this and put it on.",
            //    button: [
            //        { chatID: 22, text: "[Put on piggy nose]", callback: "piggy" }
            //    ]
            //},
            //{
            //    chatID: 22,
            //    speaker: "missy",
            //    text: "Hahahahah Piggy don't you look ridiculous. I don't believe in punishment without some kind of reward. " +
            //        "Once you lose the weight to prove you can commit to something I will let you start working some cases. " +
            //        "Until then I suggest you start running in the park, or get a gym pass. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 23,
            //    speaker: "missy",
            //    text: "So last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
            //        "I promised you would receive a proper punishment, and I always keep my word. " +
            //        "Right now you're chubby, not fat but not attractive. Take your shirt off.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "leave" }
            //    ]
            //},
            //{
            //    chatID: 24,
            //    speaker: "missy",
            //    text: "You did adequate today.",
            //    button: [
            //        { chatID: -1, text: "[Collect $55 day's pay]", callback: "payLeave" }
            //    ]
            //},
            //{
            //    chatID: 25,
            //    speaker: "missy",
            //    text: "Airhead I'm going to have you file today.",
            //    button: [
            //        { chatID: -1, text: "[Start Filing]", callback: "jobFile" }
            //    ]
            //},
            //{
            //    chatID: 26,
            //    speaker: "missy",
            //    text: "I need you to update our computer files. You can use the spare computer next to " + sc.n("cecilia") + ".",
            //    button: [
            //        { chatID: -1, text: "[Start working]", callback: "jobComputer" }
            //    ]
            //},
            //{
            //    chatID: 27,
            //    speaker: "missy",
            //    text: "The bathroom is a mess. Go clean it.",
            //    button: [
            //        { chatID: -1, text: "[Clean Bathroom]", callback: "jobBathroom" }
            //    ]
            //},
            //{
            //    chatID: 28,
            //    speaker: "missy",
            //    text: "Alright Piggy I see you've lost the weight, you're actually looking not terrible; I can work with this. " +
            //        "You are no longer Piggy, you are now Airhead. No longer fat, but still an idiot.",
            //    button: [
            //        { chatID: 29, text: "Thank you ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 29,
            //    speaker: "missy",
            //    text: "You're welcome Airhead. I guess it's time for your first real case. A friend of mine at " +
            //        "The Toy Store has an ongoing  " +
            //        "series of run-ins with some crazy cum beast. It seems that some one goes into their wack-off booths " +
            //        "and just covers it in their cum. It wouldn't be a problem if they paid for a show, but then just enter and " +
            //        "in a matter of minutes they just cover the entire booth in cum and run. It would be quite impressive if poor " +
            //        sc.n("candy") + " didn't have to spend so much time cleaning it up. " +
            //        "I need you to go there, watch the booths, and catch that animal. Do you have all this so far?",
            //    button: [
            //        { chatID: 30, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 30,
            //    speaker: "missy",
            //    text: "OK, I need you to go to the Toy Store and meet with " + sc.n("tiffany") + ", she'll explain what to do. This is your " +
            //        "first big break, don't fuck it up. Now repeat back to me what you're doing.",
            //    button: [
            //        { chatID: 31, text: "Go to the mall and buy new shoes", callback: "" },
            //        { chatID: 31, text: "Go home and masturbate to Hentai", callback: "" },
            //        { chatID: 32, text: "Going straight to Toys 'N Us and follow Tiffany's orders", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 31,
            //    speaker: "missy",
            //    text: "No you moron. Obviously you're not ready. Get the fuck out.",
            //    button: [
            //        { chatID: -1, text: "[Leave]", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 32,
            //    speaker: "missy",
            //    text: "You got it Airhead, now head over to the toy store and take care of it. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "toyStore" }
            //    ]
            //},
            //{
            //    chatID: 33,
            //    speaker: "missy",
            //    text: "Sooooo Airhead. Your first big case and instead of working it you decide to watch my friend Tiffany " +
            //        "while she's getting ready for a show... I'm not mad at you, I'm actually mad at myself.",
            //    button: [
            //        { chatID: 34, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 34,
            //    speaker: "missy",
            //    text: "Obviously I have not properly trained you for taking a real case. You  seem to like watching women in their " +
            //        "underwear. It's expected from a man of your age, but if you're going to be in this line of work you have to " +
            //        "break that desire.",
            //    button: [
            //        { chatID: 35, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 35,
            //    speaker: "missy",
            //    text: "To break you of your habit of spying on women in their underwear you will report for work from now on in " +
            //        "women's panties. Nothing to provocative, " + sc.n("cecilia") + " doesn't need to see your balls hanging out. ",
            //    button: [
            //        { chatID: 36, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 36,
            //    speaker: "missy",
            //    text: "I'm not going to force you to do anything, you choose your profession. If you're going to continue to " +
            //        "work here you will do it in panties. ",
            //    button: [
            //        { chatID: 37, text: "Where am I supposed to get panties at?!?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 37,
            //    speaker: "missy",
            //    text: "You're training to be a detective. Finding a pair of women's underwear should not be difficult. " +
            //        "I have work to do. Report back when you have decided to follow my guidance.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am [Leave]", callback: "leavePanties" }
            //    ]
            //},
            //{
            //    chatID: 38,
            //    speaker: "missy",
            //    text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. " +
            //        "Strip down to your panties and show me.",
            //    button: [
            //        { chatID: 39, text: "Yes ma'am [Strip down to your panties]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 39,
            //    speaker: "missy",
            //    text: "Nice Sissy. Those panties make you look good on you, I'm proud you've started realizing who you really are. ",
            //    button: [
            //        { chatID: 40, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 40,
            //    speaker: "missy",
            //    text: "Call me mistress. Let me see how you ass looks.",
            //    button: [
            //        { chatID: 139, text: "Yes mistress", callback: "stripPanties1" }
            //    ]
            //},
            //{
            //    chatID: 41,
            //    speaker: "missy",
            //    text: "OK, it's time for your panty check. Strip 'em off.",
            //    button: [
            //        { chatID: 42, text: "[Strip]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 42,
            //    speaker: "missy",
            //    text: "Let me see that butt now.",
            //    button: [
            //        { chatID: -1, text: "[Show Missy your butt]", callback: "turnaround" }
            //    ]
            //},
            //{
            //    chatID: 43,
            //    speaker: "missy",
            //    text: "You follow direction very well.",
            //    button: [
            //        { chatID: -1, text: "...", callback: "getPantyTask" }
            //    ]
            //},
            //{
            //    chatID: 44,
            //    speaker: "missy",
            //    text: "That bathroom is a mess Sissy, you need to clean it up.",
            //    button: [
            //        { chatID: -1, text: "[Clean bathroom]", callback: "clanBathroom" }
            //    ]
            //},
            //{
            //    chatID: 45,
            //    speaker: "missy",
            //    text: "I like you in your panties, but put your suit back on and assist with " + sc.n("cecilia") + " out front. ",
            //    button: [
            //        { chatID: -1, text: "[Get dressed and work out front]", callback: "jobComputer" }
            //    ]
            //},
            //{
            //    chatID: 46,
            //    speaker: "missy",
            //    text: "So last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
            //        "I promised you would receive a proper punishment, and I always keep my word. " +
            //        "Since you can't seem to keep a clean bathroom you must like to live in shit, just like a " +
            //        "little piggy. I got you piggy nose. Take you piggy nose and put it on",
            //    button: [
            //        { chatID: 47, text: "[Put on piggy nose]", callback: "piggy" }
            //    ]
            //},
            //{
            //    chatID: 47,
            //    speaker: "missy",
            //    text: "Hahahahah Sissy don't you look ridiculous. Make sure you wear that next time you come in " +
            //        "my lil' piggy boy.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 48,
            //    speaker: "missy",
            //    text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. " +
            //        "Strip down to your panties and show me.",
            //    button: [
            //        { chatID: 49, text: "Yes mistress [Strip down to your panties]", callback: "stripPantiesHairy" },
            //        { chatID: -1, text: "This is too weird for me [Leave]", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 49,
            //    speaker: "missy",
            //    text: "I think I just puked in my mouth a little bit. You're disgusting, go shave your nasty body before " +
            //        "coming back to work!",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "leaveAndShave" }
            //    ]
            //},
            //{
            //    chatID: 50,
            //    speaker: "missy",
            //    text: "Time for the body and panty check.",
            //    button: [
            //        { chatID: 51, text: "Yes mistress [Strip down to your panties]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 51,
            //    speaker: "missy",
            //    text: "Nice, now turn around, show me your ass.",
            //    button: [
            //        { chatID: -1, text: "[Turn around]", callback: "turnaround1" }
            //    ]
            //},
            //{
            //    chatID: 52,
            //    speaker: "missy",
            //    text: "Today you're going to file",
            //    button: [
            //        { chatID: -1, text: "[File Papers]", callback: "jobFile" }
            //    ]
            //},
            //{
            //    chatID: 53,
            //    speaker: "missy",
            //    text: "Today you're going to work out front with " + sc.n("cecilia") + ". ",
            //    button: [
            //        { chatID: -1, text: "[Work with " + sc.n("cecilia") + "]", callback: "jobComputer" }
            //    ]
            //},
            //{
            //    chatID: 54,
            //    speaker: "missy",
            //    text: "I can't believe you solved the case! It's those damned cultist again! This is just one more case of them " +
            //        "bringing their debauchery outside of their compound. You know the city made a deal with them that if they " +
            //        "left the city and it's people alone they would let them continue to practice their sexual practices in peace. " +
            //        "For your great effort I'm going to reward you. $300 should cover it.",
            //    button: [
            //        { chatID: 55, text: "...", callback: "pantiesReward" }
            //    ]
            //},
            //{
            //    chatID: 55,
            //    speaker: "missy",
            //    text: "This is proof they're branching out into this city. I need you to help stop them. Infiltrating the cult is " +
            //        "going to be hard and dangerous so you're going to start small. I need you to get a pair of panties and start " +
            //        "wearing them everytime you come in.",
            //    button: [
            //        { chatID: 36, text: "Panties?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 56,
            //    speaker: "missy",
            //    text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. ",
            //    button: [
            //        { chatID: 57, text: "Yes ma'am [Strip down to your panties]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 57,
            //    speaker: "missy",
            //    text: "Nice Sissy. Those panties make you look good on you, I'm proud you've started realizing who you really are. ",
            //    button: [
            //        { chatID: 58, text: "Yes ma'am", callback: "stripPanties1" }
            //    ]
            //},
            //{
            //    chatID: 58,
            //    speaker: "missy",
            //    text: "Wait right here, I have something for you. ",
            //    button: [
            //        { chatID: 59, text: "Yes ma'am", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 59,
            //    speaker: "thinking",
            //    text: "This is so embarrasing standing in in just " + sc.n("lola") + "'s panties in the middle of her office. " +
            //        "I must be a complete idiot to keep following her orders. I hope this is as bad as it gets.",
            //    button: [
            //        { chatID: 60, text: "...", callback: "stripPanties2" }
            //    ]
            //},
            //{
            //    chatID: 60,
            //    speaker: "missy",
            //    text: "You follow orders well slut. Now tell me, do you like what you see?",
            //    button: [
            //        { chatID: 61, text: "Oh what oh, uh... no, it's so big.", callback: "mhate" },
            //        { chatID: 62, text: "Oh yes, so very much", callback: "mlike" }
            //    ]
            //},
            //{
            //    chatID: 61,
            //    speaker: "missy",
            //    text: "Don't worry slut, it may look scary now, but you'll learn to love it.",
            //    button: [
            //        { chatID: 63, text: "Oh no", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 62,
            //    speaker: "missy",
            //    text: "I knew you would. When you walked in I knew you needed this.",
            //    button: [
            //        { chatID: 63, text: "Oh yes mistress", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 63,
            //    speaker: "missy",
            //    text: "Now tell me where did you get these panties?",
            //    button: [
            //        { chatID: 64, text: "Oh, ummm the store", callback: "" },
            //        { chatID: 65, text: "I took them from my " + sc.n("el") + ".", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 64,
            //    speaker: "missy",
            //    text: "Don't lie to me. They don't sell panties at the store with pee stains in them. Now tell me where you really " +
            //    "really got them.",
            //    button: [
            //        { chatID: 65, text: "Sorry mistress, I took them from my " + sc.n("el") + ".", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 65,
            //    speaker: "missy",
            //    text: "What a disgusting pervert you are. It's time I begin your real training. The next time you come here " +
            //    "take the elevator directly to the basement, there we'll give you a proper training. ",
            //    button: [
            //        { chatID: 66, text: "Yes Mistress, I'll report to the basement.", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 66,
            //    speaker: "missy",
            //    text: "Good, now get dresssed and get out of here.",
            //    button: [
            //        { chatID: -1, text: "Yes Mistress.", callback: "end9" }
            //    ]
            //},
            //{
            //    chatID: 67,
            //    speaker: "missy",
            //    text: "Hello " + sc.n("me") + " this is " + sc.n("jeffery") + ". " + sc.n("jeffery") + " has a problem that I think " +
            //        "you can help him with. ",
            //    button: [
            //        { chatID: 68, text: "Hi " + sc.n("jeffery"), callback: "" }
            //    ]
            //},
            //{
            //    chatID: 68,
            //    speaker: "jeffery",
            //    text: "H-H-H-H-H-Hello " + sc.n("me") + " I'm hoping you can h-h-help me with catch the waitress that has been stealing " +
            //        "from me. You'll need to pose as a waitress in my restaurant to gain their trust to try and catch the thief. " +
            //        "Do you think you can do that?",
            //    button: [
            //        { chatID: 69, text: "Of course I can! ", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 69,
            //    speaker: "missy",
            //    text: "As you can see my sissy is well qualified and will fit that part nicely. I have full trust that " +
            //        "he will do well, because if he doesn't he'll find out what a St. Andrew's Cross is used for. ",
            //    button: [
            //        { chatID: 70, text: "I can do it ", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 70,
            //    speaker: "jeffery",
            //    text: "I-I-I-I don't know. She doesn't seem sexy enough to work at my store.",
            //    button: [
            //        { chatID: 71, text: "huh?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 71,
            //    speaker: "missy",
            //    text: "Her sexiest trait is her obedience. Watch this. Sissy strip off your shirt. ",
            //    button: [
            //        { chatID: 72, text: "Yes ma'am", callback: "h28_1" }
            //    ]
            //},
            //{
            //    chatID: 72,
            //    speaker: "jeffery",
            //    text: "Oh my! C-c-c-can she strip off her skirt too?",
            //    button: [
            //        { chatID: 73, text: "*groan*", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 73,
            //    speaker: "missy",
            //    text: "Yes she can. Sissy strip off your skirt.",
            //    button: [
            //        { chatID: 74, text: "Yes ma'am", callback: "h28_2" }
            //    ]
            //},
            //{
            //    chatID: 74,
            //    speaker: "jeffery",
            //    text: "I love it! Tell her to strip of her panties!",
            //    button: [
            //        { chatID: 75, text: "*GROAN* again", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 75,
            //    speaker: "missy",
            //    text: "I'm paying him as an investigator, not a prostitute. If he fails you, you can have his panties. ",
            //    button: [
            //        { chatID: 76, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 76,
            //    speaker: "missy",
            //    text: "Sissy. Get dressed. Tomorrow report to the Naked Beaver Diner and start invistigating the staff to see who and " +
            //        "how they are stealing form " + sc.n("jeffery") + " here. When you're done report back to me.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "h28_3" }
            //    ]
            //},
            //{
            //    chatID: 77,
            //    speaker: "missy",
            //    text: "Oh good Sissy, you're here. Let me call " + sc.n("jeffery") + " here. ",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "callJeffery" }
            //    ]
            //},
            //{
            //    chatID: 78,
            //    speaker: "missy",
            //    text: "So " + sc.n("jeffery") + " how did my little detective do?",
            //    button: [
            //        { chatID: 79, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 79,
            //    speaker: "jeffery",
            //    text: "He did great! Not only did he figure out how they've been stealing from me, but he's a great little " +
            //        "waitress! If you ever need to pick up some extra money you're welcome to work some shifts at the Naked Beaver!",
            //    button: [
            //        { chatID: 80, text: "Thanks mister!", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 80,
            //    speaker: "missy",
            //    text: "I am surprised! I guess you're ready for more responsibility around here. I think a bonus is in order for " +
            //        "all your hard work! I'll grant your $500 for not screwing up. I also have a little reward for you. " +
            //        sc.n("jeffery") + "I'm done with you, you may go now.",
            //    button: [
            //        { chatID: 81, text: "Yes mistress! Thank you mistress. ", callback: "20jeffgo" }
            //    ]
            //},
            //{
            //    chatID: 81,
            //    speaker: "missy",
            //    text: "Sissies need to be rewarded as well and punished. Today sissy you've earned a reward for your work. I will " +
            //        "allow you to eat my ass. I don't often allow a sissy to eat my ass, but I'm so surprised with you I think you " +
            //        "deserve it.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress !!!!", callback: "20eatass" }
            //    ]
            //},
            //{
            //    chatID: 82,
            //    speaker: "missy",
            //    text: "So " + sc.n("jeffery") + " how did my little detective do?",
            //    button: [
            //        { chatID: 83, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 83,
            //    speaker: "jeffery",
            //    text: "He was t-t-t-terrible! Absolutely the worst detective I know. Good waitress though. He's welcome to come back and keep " +
            //        "working anytime he wants... as a waitress, but a terrible detective.",
            //    button: [
            //        { chatID: 84, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 84,
            //    speaker: "missy",
            //    text: "Well " + sc.n("jeffery") + " we don't tolerate failure here. Since he failed you how do you want to see " +
            //        "him punished?",
            //    button: [
            //        { chatID: 85, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 85,
            //    speaker: "jeffery",
            //    text: "I w-w-w-want to see him n-n-n-naked. Can you make him get naked? ",
            //    button: [
            //        { chatID: 86, text: "What?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 86,
            //    speaker: "missy",
            //    text: "Stop. Sissies don't get to say no. Take off your clothes.",
            //    button: [
            //        { chatID: 88, text: "Yes mistress [disrobe]", callback: "disrobe20b" },
            //        { chatID: 87, text: "You can't make me do that!", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 87,
            //    speaker: "missy",
            //    text: "I did not hire you so you could act like a spoiled child and throw a temper tantrum. Now take off your " +
            //        "clothes or you're fired!",
            //    button: [
            //        { chatID: 88, text: "Yes mistress", callback: "disrobe20b" }
            //    ]
            //},
            //{
            //    chatID: 88,
            //    speaker: "jeffery",
            //    text: "uuuhhhh well I think he should also give me his p-p-p-p-panties.  ",
            //    button: [
            //        { chatID: 89, text: "huh?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 89,
            //    speaker: "missy",
            //    text: "I did promise him your panties. Sissy give " + sc.n("jeffery") + " your panties. NOW!",
            //    button: [
            //        { chatID: 90, text: "[Give " + sc.n("jeffery") + " your panties]", callback: "givepanties20" }
            //    ]
            //},
            //{
            //    chatID: 90,
            //    speaker: "jeffery",
            //    text: "ooooOOooooOOhhh yesssss, that's so fresh! I love your scent! Can I keep these.. I'm going to keep these.",
            //    button: [
            //        { chatID: 91, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 91,
            //    speaker: "missy",
            //    text: "Yes " + sc.n("jeffery") + " you can keep them. Now kindly put those in your pocket as we continue.",
            //    button: [
            //        { chatID: 92, text: "...", callback: "pocket20" }
            //    ]
            //},
            //{
            //    chatID: 92,
            //    speaker: "missy",
            //    text: "Now We'll put you on the punishment rack. It's where bad sissies go for punishment. Come over to the rack and " +
            //        "place your arms against the wood.",
            //    button: [
            //        { chatID: 93, text: "...", callback: "rack20" }
            //    ]
            //},
            //{
            //    chatID: 93,
            //    speaker: "jeffery",
            //    text: "ooOOooo can I touch him? I want to touch him.",
            //    button: [
            //        { chatID: 94, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 94,
            //    speaker: "missy",
            //    text: "You can touch him. You can touch him however you want, my little sissy likes to be molested. If you object " +
            //        "my little sissy just say so.",
            //    button: [
            //        { chatID: 95, text: "MMmmmMMmmmmmm", callback: "" },
            //        { chatID: 95, text: "uuuuUUHhhhmmmMMMMMMMM", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 95,
            //    speaker: "missy",
            //    text: "See he wants to be molested, he already moaning like a whore. But not today. Today he's going to work on " +
            //        "being wall decoration. You may go, when he's ready for you I'll let you know, for now I have to get back to work. ",
            //    button: [
            //        { chatID: 96, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 96,
            //    speaker: "jeffery",
            //    text: "ok fine. Bb-b-b-b-b-b-but when he's ready p-p-p-p-please let me know, I'm so excited, do you want to see my " +
            //        "penis, it's so horny right now.",
            //    button: [
            //        { chatID: 97, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 97,
            //    speaker: "missy",
            //    text: "UGH, " + sc.n("jeffery") + " if you pull that thing out I'm going to punch it. Now get out, I have work to do",
            //    button: [
            //        { chatID: 98, text: "...", callback: "jeffleave20" }
            //    ]
            //},
            //{
            //    chatID: 98,
            //    speaker: "missy",
            //    text: "You just stay there while I get some work done around here. ",
            //    button: [
            //        { chatID: 99, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 99,
            //    speaker: "missy",
            //    text: "YYou're lucky I'm only keeping you on the rack. " +
            //        "The next time you make me angry it will be soooo much worse. ",
            //    button: [
            //        { chatID: 100, text: "MMmMMMmm", callback: "20stand" }
            //    ]
            //},
            //{
            //    chatID: 100,
            //    speaker: "missy",
            //    text: "[Continues to work]",
            //    button: [
            //        { chatID: 101, text: "...", callback: "20stand1" }
            //    ]
            //},
            //{
            //    chatID: 101,
            //    speaker: "missy",
            //    text: "[Continues to work]",
            //    button: [
            //        { chatID: 102, text: "...", callback: "20stand2" }
            //    ]
            //},
            //{
            //    chatID: 102,
            //    speaker: "missy",
            //    text: "[Continues to work]",
            //    button: [
            //        { chatID: 103, text: "...", callback: "20stand3" }
            //    ]
            //},
            //{
            //    chatID: 103,
            //    speaker: "missy",
            //    text: "I think you've been up there long enough. Don't fail me again or you're going to regret it!",
            //    button: [
            //        { chatID: 104, text: "Yes mistress", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 104,
            //    speaker: "missy",
            //    text: "Since you're now down a pair of panties, I'll let you have some that have been left over from previous sissies. I'll let you pick one to " +
            //        "take home. ",
            //    button: [
            //        { chatID: -1, text: "Thank you mistress", callback: "20Pick" }
            //    ]
            //},
            //{
            //    chatID: 105,
            //    speaker: "missy",
            //    text: "Oh, so you're a 'cum queen.' I had a feeling you would love to be fucked and filled by big hard cocks in your little mouth and ass. Don't worry " +
            //        "sissy, in time you will be.",
            //    button: [
            //        { chatID: 107, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 106,
            //    speaker: "missy",
            //    text: "How cute. You like the handcuffs you bondage slut. I knew you would be a great victim.",
            //    button: [
            //        { chatID: 107, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 107,
            //    speaker: "missy",
            //    text: "Now take your new panties and go. I'm sick of listening to you breath",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "20End" }
            //    ]
            //},
            //{
            //    chatID: 108,
            //    speaker: "missy",
            //    text: "Now it's time for your next lesson, learning your place. Strip off your girly clothes.",
            //    button: [
            //        { chatID: 109, text: "Yes mistress [disrobe]", callback: "nude" }
            //    ]
            //},
            //{
            //    chatID: 109,
            //    speaker: "missy",
            //    text: "Now come over and kneel at my feet Sissy.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress ", callback: "g2_furniture" }
            //    ]
            //},
            //{
            //    chatID: 110,
            //    speaker: "missy",
            //    text: "You did a terrible job at being furniture. I'll expect better from you " +
            //        "in the future. Now go.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress ", callback: "g2_furniture_1" }
            //    ]
            //},
            //{
            //    chatID: 111,
            //    speaker: "missy",
            //    text: "I think you are ready to start working some real cases and dirty jobs. When I first took you in, you were just " +
            //        "a pile of undisciplined goo. ",
            //    button: [
            //        { chatID: 112, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 112,
            //    speaker: "missy",
            //    text: "Now finally you've shown yourself to have the discipline it takes to help me against this cities biggest problem, those " +
            //        "damn cultists! They have been a scourge upon this city for far too long, sucking in innocent boys and girls in to their ranks. ",
            //    button: [
            //        { chatID: 113, text: "The cult?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 113,
            //    speaker: "missy",
            //    text: "Yes, surely you've come across them by now. They prey on those without self esteem and suck them in, give them a false " +
            //        "sense of self worth, but only if you follow their leader to the fullest. He pulls them in and devours their individuality; " +
            //        "makes them his servants. That's where you come in.",
            //    button: [
            //        { chatID: 114, text: "Me?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 114,
            //    speaker: "missy",
            //    text: "Yes. There are many of them, and the path to the cult's door is difficult filled with many different challenges. When " +
            //        "you walked in I felt you may just be the one. I needed someone that can move between genders, someone that can both fight and " +
            //        "fuck their way out of a situation. More importantly I need someone that can follow my direction without question. You're the " +
            //        "sissy I need to help take them down.",
            //    button: [
            //        { chatID: 115, text: "I CAN DO IT!!!!", callback: "" },
            //        { chatID: 116, text: "I don't know, it seems kinda hard", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 115,
            //    speaker: "missy",
            //    text: "Slow down. You're no where near ready for the cult. You'll either get sucked in or become a victim of the cult. ",
            //    button: [
            //        { chatID: 117, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 116,
            //    speaker: "missy",
            //    text: "Don't be silly. You're stronger than you think if you just apply yourself. ",
            //    button: [
            //        { chatID: 117, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 117,
            //    speaker: "missy",
            //    text: "Deep in the sewers of this city there's a group that calls themselves the Clown Clan. They stole something of mine " +
            //        "that I can use to help prepare you for the long difficult road ahead. I need you to get me that item.",
            //    button: [
            //        { chatID: 118, text: "What is it ma'am?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 118,
            //    speaker: "missy",
            //    text: "I wouldn't want to ruin the surprise; you'll know it when you see it. Now you're not yet ready to take on the " +
            //        "Clown Clan yet. You need to go to the gym and receive training from " + sc.n("g") + ". She will teach you the " +
            //        "basics of fighting. ",
            //    button: [
            //        { chatID: 119, text: "Fighting ma'am?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 119,
            //    speaker: "missy",
            //    text: "Yes. There are many ways to defeat your enemies. I know your true strength is your sissy assets, but you need to " +
            //        "be more than just a fuck-hole if we're going to bring down the cult. If I wanted a whore I would've hired one. " +
            //        " Some enemies can be brought down with your sissy ass, but some " +
            //        "have to be brought down with your fists. ",
            //    button: [
            //        { chatID: 120, text: "Gulp", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 120,
            //    speaker: "missy",
            //    text: "Once you receive your first lesson " + sc.n("g") + " will give you the sewer lid opener. Make your way to the rear of the " +
            //        "sewer and retrieve my item. It will be in a red box. Keep it closed until you return to me. ",
            //    button: [
            //        { chatID: 121, text: "Yes ma'am!", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 121,
            //    speaker: "missy",
            //    text: "To help you out I'll allow you to continue your training once you've returned. ",
            //    button: [
            //        { chatID: 122, text: "Yes why is " + sc.n("cecilia") + " tied up ma'am?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 122,
            //    speaker: "missy",
            //    text: sc.n("cecilia") + " has been busy spending all her time sucking cock and not enough time working on her " +
            //        "duties. Let " + sc.n("cecilia") + " be a lesson to you. Your duty is to obey, and serve me first, or you will pay for " +
            //        "your discretions",
            //    button: [
            //        { chatID: 123, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 123,
            //    speaker: "missy",
            //    text: "Now go, and get my package. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "h_19" }
            //    ]
            //},
            //{
            //    chatID: 124,
            //    speaker: "missy",
            //    text: "So you've brought me my box?",
            //    button: [
            //        { chatID: 125, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 125,
            //    speaker: "missy",
            //    text: "Good, leave it on my desk. You're next lesson I'll show you what's in the box. You may go now.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "endRedBox" }
            //    ]
            //},


        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
