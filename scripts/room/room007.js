//Room name
var room7 = {};
room7.main = function () {
    
    g.pass = null; //clear end sleepy time
    //var btnList = new Array();
    //var lolaStep = sc.getstep("lola");
    //var evaStep = sc.getstep("eva");
    //var meStep = sc.getstep("me");
    //var bigguyStep = sc.getstep("bigguy");
    if (g.dt.toDateString() === g.startDate.toDateString()) {
        nav.bg("7_mainCharRoomAlt/wake_landlord_angry.jpg");
        chat(0, 7);
    }
    else if (g.dt.getDay() === 0) { //sunday
        nav.bg("7_mainCharRoomAlt/wake_landlord_angry.jpg");
        chat(7, 7);
    }
    else if (g.dt.getDay() !== 6) {
        nav.bg("7_mainCharRoomAlt/wake_landlord_nightgown.jpg");
        gv.mod("arousal", 30);
        if (cl.c.pj === null && cl.c.panties === null) {
            if (cl.c.chastity === null) {
                if (gv.get("arousal") > 80 && sc.getLevel("landlord") > 6) {
                    chat(13, 7);
                }
                else
                    chat(17, 7);
            }
            else {
                if (!gender.getChange("landlord","chastity")) {
                    gender.setChanges("landlord", "chastity");
                    sc.modSecret("landlord", 15);
                    chat(19, 7);
                }
                else {
                    sc.modSecret("landlord", 3);
                    chat(18, 7);
                }
            }
                
        }
        else if (cl.pantiesTxt() === "panties") {
            if (cl.c.panties === "c") { //ll panties
                nav.bg("7_mainCharRoomAlt/wake_landlord_nightgown_angry.jpg")
                sc.modSecret("landlord", 25);
                sc.modLevel("landlord", -100, 999);
                gender.setChanges("landlord", "panties");
                chat(24, 7);
            }
            else if (!gender.getChange("landlord","panties")) {
                sc.modSecret("landlord", 25);
                gender.setChanges("landlord", "panties");
                chat(21, 7);
            }
            else {
                sc.modSecret("landlord", 2);
                chat(23, 7);
            }
        }
        else if (g.dt.getDay() === 5) {
            chat(26, 7);
        }
        else if (gv.get("jobapplyconst") < 2)
            chat(8, 7);
        else if (missy.activecase().name === "apply")
            chat(10, 7);
        else {
            chat(11, 7);
        }
    }
    else {
        chat(12, 7);
    }
    
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
            gv.mod("money", 250);
            break;
        case "leave":
            nav.killbutton("mother");
            break;
        case "goToChurch":
            char.room(775);
            break;
        case "clearRoom":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            
            break;
        case "lastWord":
            if (g.dt.getDay() === 5) {
                chat(26, 7);
            }
            else {
                nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
                chat(9, 7);
            }
            
            break;
        //case "payYouMom":
        //    gv.mod("money", -1 * gv.get("rent"));
        //    gv.set("rent",  200);
        //    gv.set("rentKnockOff", 0);
        //    gv.set("rentOwed", 0);
        //    break;
        case "finsihPayMom":
            //sc.setchar("landlord", -1);
            nav.killbutton("mother");
            break;
        case "momAngry":
            //sc.setchar("landlord", -1);
            break;
        case "incrementPay":
            gv.set("rentOwed", gv.get("rent"));
            gv.set("rent", 200);
            gv.set("rentOwed", gv.get("rentOwed") - gv.get("money"));
            gv.set("money", 0);
            break;
        case "backOwe":
            if (g.gt("rentOwed", "money")) {
                gv.mod("rentOwed", -1 * gv.get("money"));
                gv.set("money", 0);
                chat(14, 7);
            }
            else {
                gv.mod("money", -1 * gv.get("rentOwed"));
                gv.set("rentOwed", 0);
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
        case "o4":
            cl.wearSavedOutfit(callback[1]);
            char.room(10);
            break;
        case "o5":
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
            daily.set("eva");
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
            gv.mod("giveOralFemale", 1);
            gv.mod("fuckPussy", 1);
            daily.set("eva");
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
            daily.set("eva");
            char.addtime(60);
            gv.mod("receiveHandjobFemale", 1);
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
            gv.mod("fuckPussy", 1);
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
            gv.mod("receiveOralMale", 1);
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
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
        case "bigguy6a0":
        case "bigguy6a":
        case "bigguy6b":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            break;
        case "bigguy6c":
            nav.bg("7_mainCharRoomAlt/" + callback + ".jpg");
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            char.room(10);
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
            gv.mod("fuckPussy", 2);
            gv.mod("giveAnalFemale", 1);
            daily.set("lola");
            daily.set("eva");
            char.addtime(120);
            char.room(10);
            break;
        case "reset":
            char.room(10);
            break;
        case "jack0":
            nav.killall();
            nav.bg("7_mainCharRoomAlt/jack0.gif");
            break;
        case "jack1":
            cl.doCum();
            sex.mod("hand", false, "f", 1);
            sc.modLevel("landlord", 15, 999);
            nav.bg("7_mainCharRoomAlt/jack1.jpg");
            break;
        case "removeLlPanties":
            cl.remove("panties", "c");
            break;
        default:
            break;
    }
};

room7.chat = function (chatID) {
    
    var tempRent, tempMoney, tempRentOwed;
    if (chatID < 15) {
        tempRent = gv.get("rent");
        tempMoney = gv.get("money");
        tempRentOwed = gv.get("rentOwed");
    }
    else {
        tempRent = tempMoney = tempRentOwed = 0;
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "landlord",
            text: "Wake up " + sc.n("me") + "! I can't believe I allow you to live here, you lazy lay loafer! " +
                "First you failed out of college, then you get fired from The Burger Joint, and now you just lay around doing nothing! " +
                " .... NOTHING!",
            button: [{ chatID: 1, text: "but ....", callback: "" }]
        },
        {
            chatID: 1,
            speaker: "landlord",
            text: "Don't 'but...' me. It's time you start growing up. There's no more free rides for your lazy ass. " +
                "If you think I've been hard on you " +
                "up till now, you're going to see hard it can be. " + sc.n("lola") + " and " + sc.n("eva") + ", your " + sc.n('el') +
                ", just started college and you've been a terrible role model for them.",
            button: [{ chatID: 2, text: "....", callback: "" }]
        },
        {
            chatID: 2,
            speaker: "landlord",
            text: "Here's the deal " + sc.n("me") + ", you act like a lazy child, so I'm going to treat you like a lazy child! " +
                "Expect me to be up your ass everyday to make you into the man you were meant to be. You lack the motivation to " +
                "be a real man, so I'm going to show you how to be an adult. You're going to get a new job so you don't " +
                "find yourself out on the streets!  ",
            button: [{ chatID: 3, text: "Yes " + sc.n('landlord'), callback: "payYouMom" }]
        },
        {
            chatID: 3,
            speaker: "landlord",
            text: "Good.  You can start helping around the house <span class='hl'> If you want " +
                "to get a weekly allowance I'll give you $5 if you do the dishes in the sink</span>. I can give you " +
                "an allowance because I've been working at the Sperm Bank for years now. You should be able " +
                "to keep a job for a few weeks at least.",
            button: [{ chatID: 4, text: "OK", callback: "" }]
        },
        {
            chatID: 4,
            speaker: "landlord",
            text: "Also you're going to start going to church again. We're leaving as soon as you're dressed. ",
            button: [{ chatID: 5, text: "Oh man.. ", callback: "clearRoom" }]
        },
        {
            chatID: 5,
            speaker: "me",
            text: "Oh wow, that was intense! " + sc.n("landlord") + "'s been so brutal. She's been on the warpath since " +
                "she started dating " + sc.n("bigguy") + " , but since I've been fired she's really turned it up. " +
                "I better get out of bed, get ready for church, then start applying for jobs. Hopefully there is " +
                "something for a college drop-out.",
            button: [{ chatID: 6, text: "...", callback: "" }]
        },
        {
            chatID: 6,
            speaker: "me",
            text: "I did promise " + sc.n("zoey") + " I would stop by and play video games. " +
                sc.n("janice") + " also really wanted me to take her on a date. Better get going!",
            button: [{ chatID: -1, text: "Get out of bed and get ready for church. ", callback: "goToChurch" }]
        },
        {
            chatID: 7,
            speaker: "landlord",
            text: "Wake up sleepy head. Time for church. ",
            button: [{ chatID: -1, text: "Ok, ok... ", callback: "goToChurch" }]
        },
        {
            chatID: 8,
            speaker: "landlord",
            text: "You need to wake up and get your ass a job. c'mon. Stop being a waste of a human being. ",
            button: [{ chatID: -1, text: "Ok, ok... ", callback: "lastWord" }]
        },
        {
            chatID: 9,
            speaker: "thinking",
            text: "What to wear.",
            button: [
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[0].name, callback: "o0" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[1].name, callback: "o1" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[2].name, callback: "o2" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[3].name, callback: "o3" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[4].name, callback: "o4" },
                { chatID: -1, text: "Get Up", callback: "o5" }
            ]
        },
        {
            chatID: 10,
            speaker: "landlord",
            text: "You need to get the PI license and start working for that nice Missy lady. ",
            button: [{ chatID: -1, text: "I am. ", callback: "lastWord" }]
        },
        {
            chatID: 11,
            speaker: "landlord",
            text: "Wakey wakey. Get your ass to work! ",
            button: [{ chatID: -1, text: "I am. ", callback: "lastWord" }]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "Fuck yes! Saturday! ",
            button: [
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[0].name, callback: "o0" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[1].name, callback: "o1" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[2].name, callback: "o2" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[3].name, callback: "o3" },
                { chatID: -1, text: '<img src="./images/general/shirt.png" /> ' + cl.saveOutfit[4].name, callback: "o4" },
                { chatID: -1, text: "Get Up", callback: "o5" }
            ]
        },
        {
            chatID: 13,
            speaker: "landlord",
            text: "Looks like someone is up extra hard this morning. Do you want me to help get rid of that so you can focus? ",
            button: [
                { chatID: 14, text: "Huh? What? ", callback: "jack0" },
                { chatID: 16, text: "Oh, no. I'm saving that for someone. ", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "landlord",
            text: "Doon't you worry, let " + sc.n("landlord") + " take care of it for you. ",
            button: [
                { chatID: 15, text: "oooooOOooooo", callback: "jack1" },
            ]
        },
        {
            chatID: 15,
            speaker: "landlord",
            text: "That's a good boy. I'm going to wash my hands. You get ready for work. ",
            button: [
                { chatID: -1, text: "... oh yeah", callback: "lastWord" },
            ]
        },
        {
            chatID: 16,
            speaker: "landlord",
            text: "Well, she must be a special lady. Time to get ready for work honey. ",
            button: [
                { chatID: -1, text: "ok", callback: "lastWord" },
            ]
        },
        {
            chatID: 17,
            speaker: "landlord",
            text: "You need to put some clothing between yourself and your sheets. I don't want to wash brown streaks from " +
                "your bed. ",
            button: [
                { chatID: -1, text: "...gross", callback: "lastWord" },
            ]
        },
        {
            chatID: 18,
            speaker: "landlord",
            text: "I don't know why you keep wearing that dick cage. If you keep it up, you'll break your penis and no girl will want you. ",
            button: [
                { chatID: -1, text: "I know.", callback: "lastWord" },
            ]
        },
        {
            chatID: 19,
            speaker: "landlord",
            text: "What the hell is that on your penis? ",
            button: [
                { chatID: 20, text: "huh? ", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "landlord",
            text: "There's some kind of weird dick cage around your penis! You know if you're going to take your weird sex stuff " +
                "to bed, you better put on some pajamas. I don't want to see that. No one wants to see that. If you pull that " +
                "out in front of a girl you'll scare her away. Now you should go take that thing off. Boys are supposed to have " +
                "fully erect penises. Not that thing. ",
            button: [
                { chatID: -1, text: "I know.", callback: "lastWord" },
            ]
        },
        {
            chatID: 21,
            speaker: "landlord",
            text: "Are you wearing panties! Why are you wearing panties? Why are you wearing panties? ",
            button: [
                { chatID: 22, text: "I... uh... was a dare. ", callback: "" },
            ]
        },
        {
            chatID: 22,
            speaker: "landlord",
            text: "I don't believe you. This is some of that weird sex stuff you kids do these days. Go put on some boy's underwear " +
                "before you go out. You don't want anyone to think you're some kind of panty pervert. Back in my youth you would " +
                "get a beating for doing something like this. I'm going to let it slide, but really! Stop. ",
            button: [
                { chatID: -1, text: "Oh, sure. ", callback: "lastWord" },
            ]
        },
        {
            chatID: 23,
            speaker: "landlord",
            text: "I see you're still wearing panties. I hope you find someone that is open enough to tolerate that.  ",
            button: [
                { chatID: -1, text: "I will.", callback: "lastWord" },
            ]
        },
        {
            chatID: 24,
            speaker: "landlord",
            text: "Those are MY panties! What kind fucked up shit are you doing in my panties! Give those back right now! I don't " +
                "want your butt sweat and cum in them! I've never! ",
            button: [
                { chatID: 25, text: "Oh crap [Give her back her panties]", callback: "removeLlPanties" },
            ]
        },
        {
            chatID: 25,
            speaker: "landlord",
            text: "Now I have to go wash your nastyness off them. Get up and get going!  ",
            button: [
                { chatID: -1, text: "ok", callback: "lastWord" },
            ]
        },
        {
            chatID: 26,
            speaker: "landlord",
            text: "Don't forget, it's Friday. Those aweful people from the Carnal Union will " +
                "be in town, so get back before it gets dark. They are an aweful bunch. ",
            button: [
                { chatID: 9, text: "ok", callback: "clearRoom" },
            ]
        },
    ];
    
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
