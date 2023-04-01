//Room name
var room7 = {};
room7.main = function () {
    var sleepOutfit = 4;
    var navList;
    cl.c.shoes = cl.saveOutfit[sleepOutfit].shoes;
    cl.c.socks = cl.saveOutfit[sleepOutfit].socks;
    cl.c.pants = cl.saveOutfit[sleepOutfit].pants;
    cl.c.panties = cl.saveOutfit[sleepOutfit].panties;
    cl.c.bra = cl.saveOutfit[sleepOutfit].bra;
    cl.c.shirt = cl.saveOutfit[sleepOutfit].shirt;
    cl.c.dress = cl.saveOutfit[sleepOutfit].dress;
    cl.c.swimsuit = cl.saveOutfit[sleepOutfit].swimsuit;
    cl.c.accessories = cl.saveOutfit[sleepOutfit].accessories;
    cl.c.pj = cl.saveOutfit[sleepOutfit].pj;
    cl.display();

    var btnList = new Array();
    var lolaStep = sc.getstep("lola");
    var evaStep = sc.getstep("eva");
    var meStep = sc.getstep("me");
    var bigguyStep = sc.getstep("bigguy");
    if (meStep === 0) {
        btnList = [
            {
                "type": "btn",
                "name": "mother",
                "left": 799,
                "top": 0,
                "width": 541,
                "height": 1020,
                "image": "7_mainCharRoomAlt/7_angryMom.png"
            }];
        chat(0, 7);
    }
    else if ((evaStep === 10 || evaStep === 11) && g.pass === "phonecall") {
        if (evaStep === 10) {
            cl.nude();
            nav.killall();
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            btnList = [
                {
                    "type": "img",
                    "name": "eva",
                    "left": 734,
                    "top": 18,
                    "width": 561,
                    "height": 1000,
                    "image": "7_mainCharRoomAlt/eva0.png"
                }];
            chat(31, 7);
        }
        else {
            btnList = [
                {
                    "type": "img",
                    "name": "eva",
                    "left": 734,
                    "top": 18,
                    "width": 561,
                    "height": 1000,
                    "image": "7_mainCharRoomAlt/eva0.png"
                }];
            chat(56, 7);
        }
    }
    else if (evaStep === 12 && lolaStep === 13) {
        nav.bg("7_mainCharRoomAlt/b1.jpg");
        chat(87, 7);
    }
    else if (g.dt.getDay() === 0) {
        btnList = [
            {
                "type": "btn",
                "name": "mother",
                "left": 799,
                "top": 0,
                "width": 541,
                "height": 1020,
                "image": "7_mainCharRoomAlt/7_handout.png"
            }];
        if (sc.getstep("landlord") < 200) {
            g.set("rent", g.get("rent") - g.get("rentKnockOff") + g.get("rentOwed"));
            g.set("rentOwed", 0);

            if (g.get("rent") <= g.get("money"))
                chat(7, 7);
            else
                chat(9, 7);
        }
        else {
            g.mod("money", 100);
            chat(63, 7);
        }
    }
    else if (g.get("rentOwed") > 0 && meStep < 200) {
        btnList = [
            {
                "type": "btn",
                "name": "mother",
                "left": 799,
                "top": 0,
                "width": 541,
                "height": 1020,
                "image": "7_mainCharRoomAlt/7_handout.png"
            }];
        chat(12, 7);
    }
    else if (evaStep === 1) {
        btnList = [
            {
                "type": "btn",
                "name": "eva",
                "left": 821,
                "top": 57,
                "width": 537,
                "height": 953,
                "image": "7_mainCharRoomAlt/7_evaBook.png"
            }];
        chat(16, 7);
    }
    else if (evaStep === 9) {
        btnList = [
            {
                "type": "img",
                "name": "eva",
                "left": 734,
                "top": 18,
                "width": 561,
                "height": 1000,
                "image": "7_mainCharRoomAlt/eva0.png"
            }];
        chat(19, 7);
    }
    else if (lolaStep === 10) {
        nav.bg("7_mainCharRoomAlt/lola0.jpg");
        chat(27, 7);
    }
    
    else if (bigguyStep === 5 && (g.dt.getDay() === 0 || g.dt.getDay() === 6)) {
        nav.bg("7_mainCharRoomAlt/bigguy1.jpg");
        chat(55, 7);
    }
    else {
        chat(15, 7);
        navList = [10];
        nav.buildnav(navList);
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 7);
    });
    g.pass = "";
};

room7.btnclick = function (name) {
    switch (name) {
        case "eva10b2":
            zcl.displayMain(220, -150, .47, "", true);
            chat(42, 7);
            break;
        case "eva10b3a":
            if (g.internal === 0)
                nav.bg("7_mainCharRoomAlt/eva10b3a.jpg");
            else if (g.internal === 1)
                nav.bg("7_mainCharRoomAlt/eva10b3b.jpg");
            else if (g.internal === 2) {
                nav.bg("7_mainCharRoomAlt/eva10b3c.jpg");
                nav.killbutton("eva10b3a");
                chat(43, 7);
            }
            g.internal++;
            break;
        case "eva10b3f":
            nav.killbutton("eva10b3f");
            nav.button({
                "type": "img",
                "name": "eva10b5",
                "left": 164,
                "top": 69,
                "width": 1700,
                "height": 994,
                "image": "7_mainCharRoomAlt/eva10b4.gif"
            }, 7);
            g.roomTimeout = setTimeout(function () { chat(49, 7); }, 2000);
            break;
        case "eva11c":
            nav.killbutton("eva11c");
            nav.bg("7_mainCharRoomAlt/eva11d.jpg");
            nav.button({
                "type": "img",
                "name": "eva11d",
                "left": 1220,
                "top": 0,
                "width": 700,
                "height": 1080,
                "image": "7_mainCharRoomAlt/eva11d.gif"
            }, 7);
            chat(78, 7);
            break;
        default:
            break;
    }
};

room7.chatcatch = function (callback) {
    switch (callback) {
        case "money":
            g.mod("money", 250);
            break;
        case "leave":
            nav.killbutton("mother");
            break;
        case "getUp":
            sc.setstep("me", 1);
            char.room(10);
            break;
        case "payYouMom":
            g.mod("money", -1 * g.get("rent"));
            g.set("rent",  200);
            g.set("rentKnockOff", 0);
            g.set("rentOwed", 0);
            break;
        case "finsihPayMom":
            //sc.setchar("landlord", -1);
            nav.killbutton("mother");
            break;
        case "momAngry":
            //sc.setchar("landlord", -1);
            break;
        case "incrementPay":
            g.set("rentOwed", g.get("rent"));
            g.set("rent", 200);
            g.set("rentOwed", g.get("rentOwed") - g.get("money"));
            g.set("money", 0);
            break;
        case "backOwe":
            if (g.gt("rentOwed", "money")) {
                g.mod("rentOwed", -1 * g.get("money"));
                g.set("money", 0);
                chat(14, 7);
            }
            else {
                g.mod("money", -1 * g.get("rentOwed"));
                g.set("rentOwed", 0);
                chat(13, 7);
            }
            break;
        case "leaveRoom":
            nav.killbutton("mother");
            break;
        case "o0":
        case "o1":
        case "o2":
        case "o3":
            var thisEntry = parseInt(callback[1]);
            cl.c.shoes = cl.saveOutfit[thisEntry].shoes;
            cl.c.socks = cl.saveOutfit[thisEntry].socks;
            cl.c.pants = cl.saveOutfit[thisEntry].pants;
            cl.c.panties = cl.saveOutfit[thisEntry].panties;
            cl.c.bra = cl.saveOutfit[thisEntry].bra;
            cl.c.shirt = cl.saveOutfit[thisEntry].shirt;
            cl.c.dress = cl.saveOutfit[thisEntry].dress;
            cl.c.swimsuit = cl.saveOutfit[thisEntry].swimsuit;
            cl.c.accessories = cl.saveOutfit[thisEntry].accessories;
            cl.c.pj = cl.saveOutfit[thisEntry].pj;
            cl.display();
            char.room(10);
            break;
        case "o4":
            char.room(10);
            break;
        case "shave":
            nav.killbutton("eva");
            sc.setstep("eva", 2);
            sc.setstep("me", -1);
            scc.love("eva", 5, null);
            break;
        case "eva1":
            nav.modbutton("eva", "7_mainCharRoomAlt/eva1.png", null, null);
            break;
        case "eva2":
            nav.modbutton("eva", "7_mainCharRoomAlt/eva2.png", null, null);
            break;
        case "eva3":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva3.jpg");
            break;
        case "eva4":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva4.jpg");
            break;
        case "eva4a":
            nav.bg("7_mainCharRoomAlt/eva4a.jpg");
            break;
        case "eva5":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva5.jpg");
            break;
        case "eva6":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva6.jpg");
            break;
        case "eva7":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            g.setflag("evaDayEvent");
            sc.setstep("eva", 10);
            char.addtime(30);
            break;
        case "lola1":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            sc.setstep("lola", 11);
            char.addtime(30);
            break;
        case "eva30":
            nav.killbutton("eva");
            char.addtime(30);
            break;
        case "eva10a":
            nav.modbutton("eva", "7_mainCharRoomAlt/eva2.png", null, null);
            break;
        case "eva10b":

            if (cl.c.chastity !== null) {
                chat(38, 7);
            }
            else if (cl.c.cock < 3) {
                nav.killall();
                nav.bg("7_mainCharRoomAlt/eva10b.jpg");
                chat(41, 7);
            }
            else {
                nav.killall();
                nav.bg("7_mainCharRoomAlt/eva10c.jpg");
                g.roomTimeout = setTimeout(function () { chat(34, 7); }, 4000);
                
            }
            break;
        case "eva10d":
            nav.bg("7_mainCharRoomAlt/eva10d.jpg");
            g.roomTimeout = setTimeout(function () { chat(36, 7); }, 4000);
            break;
        case "eva10b1":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            nav.button({
                "type": "btn",
                "name": "eva10b2",
                "left": 622,
                "top": 0,
                "width": 1289,
                "height": 1080,
                "image": "7_mainCharRoomAlt/eva10b1.png"
            }, 7);
            break;
        case "evaaaaa":
            zcl.displayMain(370, 70, .4, "", true);
            break;
        case "eva10b3":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10b3.jpg");
            nav.button({
                "type": "tongue",
                "name": "eva10b3a",
                "left": 956,
                "top": 758,
                "width": 135,
                "height": 135,
                "image": "7_mainCharRoomAlt/eva10b3.png"
            }, 7);
            g.internal = 0;
            break;
        case "eva10b3d":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10b3d.jpg");
            break;
        case "eva10b3e":
            pic.add("evapussy");
            nav.bg("7_mainCharRoomAlt/eva10b3e.jpg");
            break;
        case "eva10b3f":
            nav.bg("7_mainCharRoomAlt/eva10b4.jpg");
            nav.button({
                "type": "btn",
                "name": "eva10b3f",
                "left": 164,
                "top": 69,
                "width": 1700,
                "height": 994,
                "image": "7_mainCharRoomAlt/eva10b3f.png"
            }, 7);
            break;
        case "eva10b3g":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10b3g.jpg");
            break;
        case "eva10b3h":
            sc.setstep("eva", 11);
            cl.doCum(true);
            g.mod("giveOralFemale", 1);
            g.mod("fuckPussy", 1);
            g.setflag("evaDayEvent");
            char.addtime(60);
            char.room(10);
            break;
        case "eva10b3ht":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            nav.button({
                "type": "img",
                "name": "eva10b3ht",
                "left": 0,
                "top": 280,
                "width": 1920,
                "height": 800,
                "image": "7_mainCharRoomAlt/eva10b3ht.gif"
            }, 7);
            g.roomTimeout = setTimeout(function () { room7.chatcatch("eva10it"); }, 4000);
            break;
        case "eva10it":
            nav.killbutton("eva10b3ht");
            nav.bg("7_mainCharRoomAlt/eva10it.jpg");
            chat(53, 7);
            break;
        case "eva10jt":
            nav.bg("7_mainCharRoomAlt/eva10jt.jpg");
            break;
        case "eva10kt":
            sc.setstep("eva", 11);
            cl.doCum(true);
            g.setflag("evaDayEvent");
            char.addtime(60);
            g.mod("receiveHandjobFemale", 1);
            g.pass = "";
            char.room(10);
            break;
        case "eva10e":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva10e.jpg");
            break;
        case "eva10f":
            nav.bg("7_mainCharRoomAlt/eva10f.jpg");
            break;
        case "eva11a":
            cl.nude();
            zcl.displayMain(-300, 700, .3, "", true);
            break;
        case "eva11b":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva11b.jpg");
            break;
        case "eva11c":
            nav.bg("7_mainCharRoomAlt/eva11c.jpg");
            nav.button({
                "type": "tongue",
                "name": "eva11c",
                "left": 1216,
                "top": 68,
                "width": 612,
                "height": 892,
                "image": "7_mainCharRoomAlt/eva11c.png"
            }, 7);
            break;
        case "eva11e":
            nav.bg("7_mainCharRoomAlt/eva11e.jpg");
            break;
        case "eva11f":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva11f.jpg");
            break;
        case "eva11g":
            nav.bg("7_mainCharRoomAlt/eva11f.jpg");
            break;
        case "eva11h":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/eva11h.jpg");
            break;
        case "eva11i":
            nav.bg("7_mainCharRoomAlt/eva11i.jpg");
            break;
        case "eva11j":
            nav.bg("7_mainCharRoomAlt/eva11j.jpg");
            break;
        case "eva11k":
            nav.bg("7_mainCharRoomAlt/eva11k.jpg");
            break;
        case "eva11l":
            nav.bg("7_mainCharRoomAlt/eva6.jpg");
            break;
        case "eva11m":
            scc.love("eva", 200, 100);
            sc.setstep("eva", 12);
            char.addtime(60);
            g.mod("fuckPussy", 1);
            char.room(10);
            break;
        case "bigguy5a":
            nav.killall();
            cl.nude();
            char.changeMenu("hide", false, true);
            nav.bg("7_mainCharRoomAlt/bigguy5a.jpg");
            break;
        case "bigguy5b":
            nav.bg("7_mainCharRoomAlt/bigguy5b.jpg");
            break;
        case "bigguy5c":
            nav.bg("7_mainCharRoomAlt/bigguy5c.jpg");
            break;
        case "bigguy5d":
            nav.bg("7_mainCharRoomAlt/bigguy5d.jpg");
            break;
        case "bigguy5e":
            nav.bg("7_mainCharRoomAlt/bigguy5e.jpg");
            break;
        case "bigguy5f":
            nav.bg("7_mainCharRoomAlt/bigguy5f.jpg");
            break;
        case "bigguy5g":
            nav.bg("7_mainCharRoomAlt/black.jpg");
            break;
        case "bigguy5h":
            nav.killall();
            if(cl.c.chest < 3)
                nav.bg("7_mainCharRoomAlt/bigguy5_b.jpg");
            else
                nav.bg("7_mainCharRoomAlt/bigguy5_g.jpg");

            nav.button({
                "type": "img",
                "name": "bigguy5h",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "7_mainCharRoomAlt/bigguy5h.png"
            }, 7);
            break;
        case "bigguy5i":
            nav.modbutton("bigguy5h", "7_mainCharRoomAlt/bigguy5i.png", null, null);
            break;
        case "bigguy5j":
            nav.killbutton("bigguy5h");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 43,
                "top": 377,
                "width": 1808,
                "height": 280,
                "image": "7_mainCharRoomAlt/bigguy5j.png"
            }, 7);
            break;
        case "bigguy5k":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "7_mainCharRoomAlt/bigguy5k.png"
            }, 7);
            break;
        case "bigguy5l":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 119,
                "top": 288,
                "width": 1741,
                "height": 562,
                "image": "7_mainCharRoomAlt/bigguy5l.png"
            }, 7);
            break;
        case "bigguy5m":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 119,
                "top": 317,
                "width": 1801,
                "height": 533,
                "image": "7_mainCharRoomAlt/bigguy5m.png"
            }, 7);
            break;
        case "bigguy5n":
            nav.killbutton("bigguy5j");
            nav.button({
                "type": "img",
                "name": "bigguy5j",
                "left": 119,
                "top": 317,
                "width": 1801,
                "height": 533,
                "image": "7_mainCharRoomAlt/bigguy5n.png"
            }, 7);
            break;
        case "bigguy5o":
            sc.setstep("bigguy", 6);
            g.mod("receiveOralMale", 1);
            g.mod("receiveAnalMale", 1);
            g.mod("creamPied", 1);
            char.addtime(68);
            char.room(10);
            break;
        case "b3":
            char.changeMenu("hide", false, false);
            g.internal = { l: false, e: false };
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            break;
        case "b2":
        case "b4e":
        case "b4f":
        case "b4l":
        case "b5l2":
        case "b5l3":
        case "b5l4":
        case "b5l5":
        case "b5e2":
        case "b5e3":
        case "b5e4":
        case "b5e5":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            break;
        case "b5e1":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            g.internal.e = true;
            break;
        case "b5l1":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            g.internal.l = true;
            break;
        case "b6":
            if (!g.internal.l) {
                nav.bg("7_mainCharRoomAlt/b5l1.jpg");
                chat(98, 7);
                g.internal.l = true;
            }
            else if (!g.internal.e) {
                nav.bg("7_mainCharRoomAlt/b5e1.jpg");
                chat(103, 7);
                g.internal.e = true;
            }
            else {
                nav.bg("7_mainCharRoomAlt/b6.jpg");
                chat(108, 7);
            }
            break;
        case "b7":
            scc.love("eva", 200, 100);
            scc.love("lola", 200, 100);
            sc.setstep("eva", 13);
            sc.setstep("lola", 14);
            g.mod("fuckPussy", 2);
            g.mod("giveAnalFemale", 1);
            g.setflag("lolaDayEvent");
            g.setflag("evaDayEvent");
            char.addtime(120);
            char.room(10);
            break;
        case "reset":
            char.room(10);
            break;
        default:
            break;
    }
};

room7.chat = function (chatID) {
    
    var tempRent, tempMoney, tempRentOwed;
    if (chatID < 15) {
        tempRent = g.get("rent");
        tempMoney = g.get("money");
        tempRentOwed = g.get("rentOwed");
    }
    else {
        tempRent = tempMoney = tempRentOwed = 0;
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Wake up " + sc.n("me") + "! You're late again with the rent! I can't believe I allow you to live here, you lazy lay loafer! " +
                "First you failed out of college, then you get fired from The Burger Joint, and now you just lay around doing nothing! " +
                " .... NOTHING!",
            button: [{ chatID: 1, text: "but ....", callback: "" }]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "Don't 'but...' me. It's time you start growing up. There's no more free rides for your lazy ass. " +
                "If you think I've been hard on you " +
                "up till now, you're going to see hard it can be. " + sc.n("lola") + " and " + sc.n("eva") + ", your " + sc.n('el') + ", just graduated high school " +
                "and you've been a terrible role model for them.",
            button: [{ chatID: 2, text: "....", callback: "" }]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "Here's the deal " + sc.n("me") + ", you act like a child and I'm going to treat you like a child, you act like an adult " +
                "and I'll treat you like one. You're going to get a new job so you can continue to pay me each week or you'll " +
                "find yourself out on the streets! Since I know you can't save enough money to pay me monthly you'll start paying me " +
                "weekly. <span class= 'hl'>Each week I'll come in on Sunday to collect my $200</span> starting now. " +
                "Pay up mister. ",
            button: [{ chatID: 3, text: "Pay " + sc.n('landlord'), callback: "payYouMom" }]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Good. Tomorrow's Monday, I expect you to have a job and start working.<span class='hl'> If you want to knock off $5 from your rent, you can do " +
                "the dishes in the sink</span>. I've been able to keep a job at the Sperm Bank for 5 years now, you should be able" +
                "to keep a job for a few weeks at least.",
            button: [{ chatID: 4, text: "OK", callback: "" }]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "OK deadbeat, I'm going to get out of your room now. Get on that computer and start applying for jobs.",
            button: [{ chatID: 5, text: "Bye " + sc.n("landlord"), callback: "leave" }]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Oh wow, that was intense! " + sc.n("landlord") + "'s been brutal since her husband left her, but this time she's really turned it up. " +
                "I better get out of bed and get on my computer to start applying for jobs, hopefully there is something for a college drop-out.",
            button: [{ chatID: 6, text: "Get out of bed", callback: "" }]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "Oh, I almost forgot I promised " + sc.n("zoey") + " I would stop by and play video games. Better go say hi.",
            button: [{ chatID: -1, text: "Really Get out of bed this time", callback: "getUp" }]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Good morning honey your rent's due. <span class='hl'>You owe $" + tempRent + " this week. </span>",
            button: [{ chatID: 8, text: "Pay " + sc.n("landlord") + " $" + tempRent + ".", callback: "payYouMom" }]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "I'm so proud you're working and making something of yourself.",
            button: [{ chatID: 15, text: "Thanks " + sc.n("landlord") + ".", callback: "finsihPayMom" }]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: "Good morning honey your rent's due. <span class='hl'>You owe $" + tempRent + " this week.</span> ",
            button: [{ chatID: 10, text: "Oh crap I only have $" + tempMoney + ".", callback: "momAngry" }]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "Well, I had hoped you would work harder, but I guess I shouldn't be surprised! I'll take that!",
            button: [{ chatID: 11, text: "Give " + sc.n("landlord") + " $" + tempMoney + ".", callback: "incrementPay" }]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "You need to get your ass up and actually start working. It's time to grow up",
            button: [{ chatID: 15, text: "Yes " + sc.n("landlord") + ". ", callback: "leaveRoom" }]
        },
        {
            chatID: 12,
            speaker: "landlord",
            text: "It's time to pay your back rent. You still owe <span class='hl'>$" + tempRentOwed + "</span>.",
            button: [{ chatID: -1, text: "Pay " + sc.n("landlord") + ". ", callback: "backOwe" }]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "OK your back rent has been paid off. ",
            button: [{ chatID: 15, text: "Get up", callback: "leaveRoom" }]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: sc.n("me") + " you still owe <span class='hl'>$" + tempRentOwed + "</span>. I'll keep visiting you first thing in the morning until you are caught up. ",
            button: [{ chatID: 15, text: "Yes " + sc.n("landlord"), callback: "leaveRoom" }]
        },
        {
            chatID: 15,
            speaker: "me",
            text: "What to wear.",
            button: [
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[0].name, callback: "o0" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[1].name, callback: "o1" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[2].name, callback: "o2" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[3].name, callback: "o3" },
                { chatID: -1, text: "Get Up", callback: "o4" }
            ]
        },
        {
            chatID: 16,
            speaker: "eva",
            text: "Hey pervert, thanks for the math book!",
            button: [
                { chatID: 17, text: "No prob " + sc.n("eva"), callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "eva",
            text: "Holy crap " + sc.n("me") + "! You're hairier than a fur-ball, if you want to get " +
                "the ladies you need to knock some of that off with a weed wacker. ",
            button: [
                { chatID: 18, text: "Wha... do girls really not like a hairy guy? ", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "eva",
            text: sc.n("me") + " Gross, no. There's nothing worse than running your tongue down someone's chest " +
                "and getting a mouthful of hair. Don't be gross, butt-head, shave that shag carpeting off.",
            button: [
                { chatID: 15, text: "Thanks for the tip Eva.", callback: "shave" }
            ]
        },
        {
            chatID: 19,
            speaker: "eva",
            text: "Good morning sexy. I promised " + sc.n("lola") + " we wouldn't mess around like we did earlier, but you've " +
                "been on my mind ever since that night. I can't stop thinking about you.",
            button: [
                { chatID: 20, text: "You've been on my mind too", callback: "eva1" }
            ]
        },
        {
            chatID: 20,
            speaker: "eva",
            text: "I've masturbated every night about your amazing dick since we've last played around.",
            button: [
                { chatID: 21, text: "...", callback: "eva2" }
            ]
        },
        {
            chatID: 21,
            speaker: "eva",
            text: "I need that dick in me. I need it bad!",
            button: [
                { chatID: 22, text: "It needs you too", callback: "eva3" }
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: sc.n("eva") + "?",
            button: [
                { chatID: 23, text: "hmmmm", callback: "eva4" }
            ]
        },
        {
            chatID: 23,
            speaker: "lola",
            text: "Have you seen " + sc.n("eva") + "? She borrowed my favorite socks and I can't find them anywhere.",
            button: [
                { chatID: 24, text: "Oh, I think I heard her run downstairs. You should check the kitchen.", callback: "eva4a" }
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "Oh, that's odd. She usually doesn't make breakfast this early. Thanks, I'll go check.",
            button: [
                { chatID: 25, text: "...", callback: "eva5" }
            ]
        },
        {
            chatID: 25,
            speaker: "eva",
            text: "Is she gone?",
            button: [
                { chatID: 26, text: "Yeah, she just walked out", callback: "eva6" }
            ]
        },
        {
            chatID: 26,
            speaker: "eva",
            text: "You need to clean up under your bed. Thanks for covering for me. I'll be back for that cock.",
            button: [
                { chatID: 15, text: "oh my", callback: "eva7" }
            ]
        },
        {
            chatID: 27,
            speaker: "lola",
            text: "I'm sorry to wake you, but I have a confession. " + sc.n("eva") + " and I both promised each other we wouldn't " +
                "mess up again with you, but there's just something about you that I can't get out of my head.",
            button: [
                { chatID: 28, text: sc.n("lola") + " I...", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "lola",
            text: "Please let me finish. I've been going over what I was going to say to you all night. I need to get it out before " +
                "you ultimatly reject me. I know my feelings for you are wrong, but that's the think with feelings is that they don't " +
                "care about right or wrong, they just care about the heart. ",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "Don't look at me like that with your mouth open. You had to have known. The way I look at you, and I've seen " +
                "the way you look at me. I know somewhere deep in your heart you have feeling for me too. Anyway I couldn't keep going " +
                "day in and day out without at least letting you know how I really feel. ",
            button: [
                { chatID: 30, text: sc.n("lola") + " I have feelings for your too. ", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "Thank you. I know you feel you need to say that. I'm going to go. Please don't tell " + sc.n("eva") + ". I made " +
                "her promise we wouldn't do anything to get in trouble with " + sc.n("landlord") + ". I'll be thinking about you. ",
            button: [
                { chatID: 15, text: "I'll be thinking about you too.", callback: "lola1" }
            ]
        },
        {
            chatID: 31,
            speaker: "eva",
            text: "I'm so glad you texted me! Now I know what's on your mind!",
            button: [
                { chatID: 33, text: "Oh yeah! I've been waiting for you.", callback: "eva10a" }
            ]
        },
        {
            chatID: 32,
            speaker: "eva",
            text: "Awww ok. Sleep well friend.",
            button: [
                { chatID: 15, text: "See you " + sc.n("eva") + ".", callback: "eva30" }
            ]
        },
        {
            chatID: 33,
            speaker: "eva",
            text: "I know you like looking at my naked body, let me see yours! I think you have the biggest cock I've ever seen!",
            button: [
                { chatID: -1, text: "[Show your cock]", callback: "eva10b" }
            ]
        },
        {
            chatID: 34,
            speaker: "eva",
            text: "Oh... it's so tiny. I remember it being bigger. If I knew it was so small I wouldn't have bothered. I " +
            "didn't even know dicks could be so tiny. ",
            button: [
                { chatID: 35, text: "We could try?", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "eva",
            text: "I'll try licking it, see if it get bigger?",
            button: [
                { chatID: -1, text: "Oh yeah, try that.", callback: "eva10d" }
            ]
        },
        {
            chatID: 36,
            speaker: "eva",
            text: "Nope. Still tiny. Let me stroke it.",
            button: [
                { chatID: 37, text: "...", callback: "eva10e" }
            ]
        },
        {
            chatID: 37,
            speaker: "eva",
            text: "Hmmmm. I can't get a grip on it.... Let me try something else.",
            button: [
                { chatID: 52, text: "what?", callback: "eva10f" }
            ]
        },
        {
            chatID: 38,
            speaker: "eva",
            text: "What is your penis in that thing? That's so weird, do you not like sex anymore?",
            button: [
                { chatID: 39, text: "I ahhh well no, I just don't use my penis.", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "eva",
            text: "Oh. You're a weird one. I'm going to get going, I need to get ready and stuff.",
            button: [
                { chatID: 40, text: "Oh wait...", callback: "" }
            ]
        },
        {
            chatID: 40,
            speaker: "eva",
            text: "I always knew you were a weird pervert, but this is too much. I'm going to go.",
            button: [
                { chatID: 15, text: "Oh ok", callback: "eva30" }
            ]
        },
        {
            chatID: 41,
            speaker: "eva",
            text: "Before you stick that giant thing in me I need you to get me nice and wet. ",
            button: [
                { chatID: -1, text: "Oh Yeah!", callback: "eva10b1" }
            ]
        },
        {
            chatID: 42,
            speaker: "eva",
            text: "OOoooo yeah, lick my clit " + sc.n("me") + ", lick it good.",
            button: [
                { chatID: -1, text: "**SSSLLLUUURRRPPPPP", callback: "eva10b3" }
            ]
        },
        {
            chatID: 43,
            speaker: "eva",
            text: "You're really good at that! I'm so wet.",
            button: [
                { chatID: 44, text: "Wet enough to take this dick?", callback: "eva10b3d" }
            ]
        },
        {
            chatID: 44,
            speaker: "eva",
            text: "So pervert? Do you like what you see? I've seen the way you stare at me. I've even noticed your boner when you stare. " +
            "So do you like this pose? Want to take a picture of it so you can masturbate yourself to it later?",
            button: [
                { chatID: 45, text: "[This is so hot! I'm totally going to jack off to her later!]", callback: "eva10b3e" }
            ]
        },
        {
            chatID: 45,
            speaker: "eva",
            text: "So you do you have any other naked pictures of me that I don't know about, pervert?",
            button: [
                { chatID: 46, text: "This is the first, but hopefully not the last!", callback: "eva10b3d" }
            ]
        },
        {
            chatID: 46,
            speaker: "eva",
            text: "So it's my first time, do you promise to be gentle?",
            button: [
                { chatID: 47, text: "Oh wow. Really? Your first time?", callback: "" }
            ]
        },
        {
            chatID: 47,
            speaker: "eva",
            text: "Hahaha no! Sex feels way to good not to do it! Unlike " + sc.n("lola") + " I can have sex without love.",
            button: [
                { chatID: 48, text: "You got me", callback: "" }
            ]
        },
        {
            chatID: 48,
            speaker: "eva",
            text: "So lets stop talking and start humping!",
            button: [
                { chatID: -1, text: "Oh yeah!", callback: "eva10b3f" }
            ]
        },
        {
            chatID: 49,
            speaker: "thinking",
            text: "I can't belive I'm fucking my own " + g.makeSingular(sc.n("el")) + ". This is just so crazy! I've been dreaming about " +
            "this for so long! I've done some sick things, but this is the craziest! ",
            button: [
                { chatID: 50, text: "...", callback: "" }
            ]
        },
        {
            chatID: 50,
            speaker: "eva",
            text: "Oh fuck, that is amazing! You can cum in me, I'm on the pill.",
            button: [
                { chatID: 51, text: "Fuck yeah! Here it comes!", callback: "eva10b3g" }
            ]
        },
        {
            chatID: 51,
            speaker: "eva",
            text: "That's going to be dripping out of me all day! I love you cock so much. Just text me anytime you're in your room and " +
            "we'll play some more.",
            button: [
                { chatID: -1, text: "Ok cool", callback: "eva10b3h" }
            ]
        },
        {
            chatID: 52,
            speaker: "eva",
            text: "If I grab it with just my finger tips I think I can stroke it for you. ",
            button: [
                { chatID: -1, text: "Ok cool", callback: "eva10b3ht" }
            ]
        },
        {
            chatID: 53,
            speaker: "eva",
            text: "Oh hahah you came really quick!",
            button: [
                { chatID: 54, text: "UUUGGGHHH", callback: "eva10jt" }
            ]
        },
        {
            chatID: 54,
            speaker: "eva",
            text: "Hahaha gross, there's cum all over your belly. I hope you enjoyed yourself, I just wish you were bigger so I could " +
            "enjoy myself too. Oh well, gotta go. Text me tomorrow, we'll play some more.",
            button: [
                { chatID: 15, text: "Oh yeah, See ya.", callback: "eva10kt" }
            ]
        },
        {
            chatID: 55,
            speaker: "bigguy",
            text: "Hey little girl! Sleep well?",
            button: [
                { chatID: 59, text: "Huh?", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "eva",
            text: "Hey " + sc.n("me") + ", I want to try something. Strip mister!",
            button: [
                { chatID: 57, text: "ok!", callback: "eva11a" }
            ]
        },
        {
            chatID: 57,
            speaker: "eva",
            text: "So pervert, I've always wanted to get sucked off. I know what a giant weirdo you are, so I know you'll love to suck me!",
            button: [
                { chatID: 58, text: "Wait, what?", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "eva",
            text: "My toes. I need you to suck on my toes. I read somewhere that some girls can orgasm if their toes get sucked " +
            "just right. I want to try it!",
            button: [
                { chatID: 77, text: "Oh Cool ok!", callback: "eva11b" }
            ]
        },
        {
            chatID: 59,
            speaker: "bigguy",
            text: "I see you way you watch me while I fuck your " + sc.n("landlord") + ". I love how you licked my cock clean like " +
            "a hungry little cum slut. Well now you're going to get a lot more than just a taste, you're going to get the whole thing!",
            button: [
                { chatID: 60, text: "what whole thing...", callback: "" }
            ]
        },
        {
            chatID: 60,
            speaker: "bigguy",
            text: "Oh yeah slut you love my cock",
            button: [
                { chatID: 61, text: "Huh? Want what?", callback: "bigguy5a" }
            ]
        },
        {
            chatID: 61,
            speaker: "me",
            text: "Aaahhh what are you doing!",
            button: [
                { chatID: 62, text: "....", callback: "bigguy5b" }
            ]
        },
        {
            chatID: 62,
            speaker: "bigguy",
            text: "You can't talk if if fill your mouth!",
            button: [
                { chatID: 64, text: "aaacckkkk", callback: "bigguy5c" }
            ]
        },
        {
            chatID: 63,
            speaker: "landlord",
            text: "Good morning my beautiful girl. Since girls have it so hard I'm going to give you $100 to help you get " +
                "some new clothes. Get something pretty!",
            button: [
                { chatID: 15, text: "Thanks!", callback: "leaveRoom" }
            ]
        },
        {
            chatID: 64,
            speaker: "bigguy",
            text: "Oh yeah, you throat is so tight!",
            button: [
                { chatID: 65, text: "Spurt", callback: "bigguy5d" }
            ]
        },
        {
            chatID: 65,
            speaker: "bigguy",
            text: "I just may leave it in here till I cum down your throat.",
            button: [
                { chatID: 66, text: "gurgle", callback: "bigguy5e" }
            ]
        },
        {
            chatID: 66,
            speaker: "bigguy",
            text: "Slut",
            button: [
                { chatID: 67, text: "uuuggghhh....", callback: "bigguy5f" }
            ]
        },
        {
            chatID: 67,
            speaker: "thinking",
            text: "I'm going.....",
            button: [
                { chatID: 68, text: "...", callback: "bigguy5g" }
            ]
        },
        {
            chatID: 68,
            speaker: "thinking",
            text: "...",
            button: [
                { chatID: 69, text: "...", callback: "bigguy5h" }
            ]
        },
        {
            chatID: 69,
            speaker: "bigguy",
            text: "Wake-e wake-e, I want to see your face when I enter that sweet hole of yours.",
            button: [
                { chatID: 70, text: "... huh?", callback: "bigguy5i" }
            ]
        },
        {
            chatID: 70,
            speaker: "bigguy",
            text: "Wow, that's tight.",
            button: [
                { chatID: 71, text: "... wha ...", callback: "bigguy5j" }
            ]
        },
        {
            chatID: 71,
            speaker: "me",
            text: "OW ow ow ow ow ow!!!!! OUCH!!!",
            button: [
                { chatID: 72, text: "...", callback: "bigguy5k" }
            ]
        },
        {
            chatID: 72,
            speaker: "bigguy",
            text: "GRUNT",
            button: [
                { chatID: 73, text: "STOP, please, it hurts!", callback: "bigguy5l" }
            ]
        },
        {
            chatID: 73,
            speaker: "bigguy",
            text: "SHUT UP, you'll wake everyone up. I'll be done soon, besides, you know you want it.",
            button: [
                { chatID: 74, text: "mmmMMmmm", callback: "bigguy5m" }
            ]
        },
        {
            chatID: 74,
            speaker: "bigguy",
            text: "Here it comes slut!",
            button: [
                { chatID: 75, text: "mmmMMmmm", callback: "bigguy5n" }
            ]
        },
        {
            chatID: 75,
            speaker: "bigguy",
            text: "Now don't ever tell your " + sc.n("landlord") + "about this! She would hate it if her slutty girl was " +
                "fucking around with her man, you would break her heart. This is just between you and me ok?",
            button: [
                { chatID: 76, text: "Ooooooo", callback: "" }
            ]
        },
        {
            chatID: 76,
            speaker: "bigguy",
            text: "You better keep your mouth shut, and if you need some hard dick again just text me. I'll fill your holes the " +
                "way you deserve slut. [More to come in a future release. ]",
            button: [
                { chatID: -1, text: "ok", callback: "bigguy5o" }
            ]
        },
        {
            chatID: 77,
            speaker: "eva",
            text: "Suck a cute little toe sucker! You are such my bitch! Hehehehe",
            button: [
                { chatID: -1, text: "suck, lick, suck", callback: "eva11c" }
            ]
        },
        {
            chatID: 78,
            speaker: "eva",
            text: "Oh My God! That feels so good! Don't stop! Keep licking!",
            button: [
                { chatID: 79, text: "MmmmMmmm slurp slurp slurp", callback: "eva11e" }
            ]
        },
        {
            chatID: 79,
            speaker: "eva",
            text: "Oh fuck! I'm cumming!",
            button: [
                { chatID: 80, text: "MmmmMmmm slurp slurp slurp", callback: "eva11f" }
            ]
        },
        {
            chatID: 80,
            speaker: "eva",
            text: "I'm so wet and horny! I need your cock now!",
            button: [
                { chatID: 81, text: "Yes you do!", callback: "eva11g" }
            ]
        },
        {
            chatID: 81,
            speaker: "eva",
            text: "Don't tease me, just fuck me!",
            button: [
                { chatID: 82, text: "🍆", callback: "eva11h" }
            ]
        },
        {
            chatID: 82,
            speaker: "eva",
            text: "Oh yes!",
            button: [
                { chatID: 83, text: "Grunt", callback: "eva11i" }
            ]
        },
        {
            chatID: 83,
            speaker: "eva",
            text: "Fuck me fuck me fuck me!",
            button: [
                { chatID: 84, text: "MMmmMMmmmm", callback: "eva11j" }
            ]
        },
        {
            chatID: 84,
            speaker: "eva",
            text: "Cum in me! I want it to feel it drip!",
            button: [
                { chatID: 85, text: "Blow your load!", callback: "eva11k" }
            ]
        },
        {
            chatID: 85,
            speaker: "eva",
            text: "Mmmmm dripy pussy is happy pussy.",
            button: [
                { chatID: 86, text: "Grunt", callback: "eva11l" }
            ]
        },
        {
            chatID: 86,
            speaker: "eva",
            text: "Shhh don't tell " + sc.n("lola") + " what we did. I'm going to have her eat out my pussy later. Hehehe bye!" +
                " [End of this story line]",
            button: [
                { chatID: -1, text: "That's hot, later " + sc.n("eva") + ". ", callback: "eva11m" }
            ]
        },
        {
            chatID: 87,
            speaker: "lola",
            text: sc.n("eva") + " told me what you two did! I thought you were only sleeping with me! I'm so angry right now!",
            button: [
                { chatID: 88, text: "Oh!", callback: "" }
            ]
        },
        {
            chatID: 88,
            speaker: "eva",
            text: "And I thought you were only sleeping with me pervert! How could you! We're going to get you kicked " +
                "out forever!",
            button: [
                { chatID: 89, text: "Well, you see...", callback: "b2" }
            ]
        },
        {
            chatID: 89,
            speaker: "lola",
            text: "Got you. You thought you could go behind our backs without us talking? ",
            button: [
                { chatID: 90, text: "huh?", callback: "" }
            ]
        },
        {
            chatID: 90,
            speaker: "eva",
            text: "We would never kick you out! We love your cock too much you weirdo. ",
            button: [
                { chatID: 91, text: "Oh yea", callback: "b3" }
            ]
        },
        {
            chatID: 91,
            speaker: "lola",
            text: "Now that you're all nice and hard we're going to tease you. ",
            button: [
                { chatID: 92, text: "Tease me?", callback: "" }
            ]
        },
        {
            chatID: 92,
            speaker: "eva",
            text: "I call it the pervert game! You pick the position you want us to do to each other. How " +
                "do you want us?",
            button: [
                { chatID: 94, text: sc.n("lola") + " put your finger in her butt. ", callback: "b4f" },
                { chatID: 95, text: sc.n("eva") + " ride her face. ", callback: "b4e" },
                { chatID: 96, text: sc.n("lola") + " ride her face. ", callback: "b4l" },
            ]
        },
        {
            chatID: 93,
            speaker: "lola",
            text: "What do you want us to do next?",
            button: [
                { chatID: 94, text: sc.n("lola") + " put your finger in her butt. ", callback: "b4f" },
                { chatID: 95, text: sc.n("eva") + " ride her face. ", callback: "b4e" },
                { chatID: 96, text: sc.n("lola") + " ride her face. ", callback: "b4l" },
                { chatID: 97, text: "I want you on my dick!", callback: "" }
            ]
        },
        {
            chatID: 94,
            speaker: "lola",
            text: "It's so warm. I'm glad we showered before this. ",
            button: [
                { chatID: 93, text: "I'm going to pick another", callback: "" }
            ]
        },
        {
            chatID: 95,
            speaker: "eva",
            text: "You like watching me ride her face pervert? I bet you wish you could suck my toes while I do this. ",
            button: [
                { chatID: 93, text: "I'm going to pick another", callback: "" }
            ]
        },
        {
            chatID: 96,
            speaker: "eva",
            text: "Oh wow. I love it when you do that thing with your tongue. It really makes me so wet! ",
            button: [
                { chatID: 93, text: "I'm going to pick another", callback: "" }
            ]
        },
        {
            chatID: 97,
            speaker: "lola",
            text: "So who do you want to have sex with first? ",
            button: [
                { chatID: 98, text: sc.n("lola"), callback: "b5l1" },
                { chatID: 103, text: sc.n("eva"), callback: "b5e1" }
            ]
        },
        {
            chatID: 98,
            speaker: "lola",
            text: "Oh wow. This is the best feeling ever. I love how your penis feels in me. ",
            button: [
                { chatID: 99, text: "...", callback: "b5l2" }
            ]
        },
        {
            chatID: 99,
            speaker: "lola",
            text: "Oh god, harder. Harder! I want to feel you cum.",
            button: [
                { chatID: 100, text: "...", callback: "b5l3" }
            ]
        },
        {
            chatID: 100,
            speaker: "lola",
            text: "Oh wow. I'm leaking all over. I feel so dirty, and happy at the same time.",
            button: [
                { chatID: 101, text: "...", callback: "b5l4" }
            ]
        },
        {
            chatID: 101,
            speaker: "eva",
            text: "Hahaha! You should be proud. You're the only one she's ever been with. ",
            button: [
                { chatID: 102, text: "Really?", callback: "b5l5" }
            ]
        },
        {
            chatID: 102,
            speaker: "lola",
            text: "There's no other man in the world that I would let in me. ",
            button: [
                { chatID: -1, text: "...", callback: "b6" }
            ]
        },
        {
            chatID: 103,
            speaker: "eva",
            text: "Even when you're having sex with me you're still perving on my feet. Flip me over, I want it hard!",
            button: [
                { chatID: 104, text: "Oh yeah!", callback: "b5e2" }
            ]
        },
        {
            chatID: 104,
            speaker: "eva",
            text: "Oh yeah! I've cum three times you're soo good. Now it's your turn to cum. ",
            button: [
                { chatID: 105, text: "OOooooo", callback: "b5e3" }
            ]
        },
        {
            chatID: 105,
            speaker: "eva",
            text: "Haha, it's dripping all over my feet. I bet you think that's hot. ",
            button: [
                { chatID: 106, text: "...", callback: "b5e4" }
            ]
        },
        {
            chatID: 106,
            speaker: "lola",
            text: "You're such a mess. Like always ",
            button: [
                { chatID: 107, text: "...", callback: "b5e5" }
            ]
        },
        {
            chatID: 107,
            speaker: "eva",
            text: "I know. But a dripping pussy is a happy pussy. ",
            button: [
                { chatID: 108, text: "...", callback: "b6" }
            ]
        },
        {
            chatID: 108,
            speaker: "lola",
            text: "We better get going before we get in trouble. ",
            button: [
                { chatID: 109, text: "...", callback: "" }
            ]
        },
        {
            chatID: 109,
            speaker: "eva",
            text: "Yeah perv. Stop by our room if you want any more fun. ",
            button: [
                { chatID: -1, text: "...", callback: "b7" }
            ]
        },
    ];
    
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
