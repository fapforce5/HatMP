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
    else if (g.dt.getDay() === 0 && meStep < 8) {
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
        g.set("rent", g.get("rent") - g.get("rentKnockOff") + g.get("rentOwed"));
        g.set("rentOwed", 0);

        if (g.get("rent") <= g.get("money"))
            chat(7, 7);
        else
            chat(9, 7);
    }
    else if (g.get("rentOwed") > 0 && meStep < 8) {
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
    else {
        chat(15, 7);
        navList = [10];
        nav.buildnav(navList);
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 7);
    });

};

room7.btnclick = function (name) {
    switch (name) {
        case "":
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
            sc.setstep("eva", 10);
            char.addtime(30);
            break;
        case "lola1":
            nav.bg("7_mainCharRoomAlt/7_mainCharRoomAlt.jpg");
            sc.setstep("lola", 11);
            char.addtime(30);
            break;
        default:
            break;
    }
};

room7.chat = function (chatID) {
    var tempRent, tempMoney, tempRentOwed;
    tempRent = g.get("rent");
    tempMoney = g.get("money");
    tempRentOwed = g.get("rentOwed");
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
            text: "Oh wow that was intense! " + sc.n("landlord") + "'s been brutal since her husband left her, but this time she's really turned it up. " +
                "I better get out of bed and get on my computer to start applying for jobs, hopefully  there are something for a college drop-out.",
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
            text: "Hay pervert, thanks for the math book!",
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
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

 //if (sc.getstep("me") > 7) {
        //    console.log(g.pass)
        //    nav.bg("52_myroom/52_myroom.jpg", "52_myroom/52_myroom_night.jpg");
        //    chat(15, 7);
        //    navList = [52];
        //    nav.buildnav(navList);
        //}
        //else