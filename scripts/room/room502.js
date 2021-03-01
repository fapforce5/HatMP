//Zoey bedroom
var room502 = {};
room502.main = function () {
    var btnList = [
        {
            "type": "btn",
            "name": "dresser",
            "left": 1192,
            "top": 0,
            "width": 541,
            "height": 426,
            "image": "502_bedroom/dresser.png",
            "night": "502_bedroom/dresserN.png"
        }];
    if (sc.zoey().thisRoom) {
        nav.bg("502_bedroom/bedroomZoey.jpg", "502_bedroom/bedroomnightZoey.jpg");
        btnList.push({
            "type": "btn",
            "name": "bed",
            "left": 568,
            "top": 77,
            "width": 751,
            "height": 927,
            "image": "502_bedroom/bedZoey.png",
            "night": "502_bedroom/bedNZoey.png"
        });
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "bed",
            "left": 568,
            "top": 77,
            "width": 751,
            "height": 927,
            "image": "502_bedroom/bed.png",
            "night": "502_bedroom/bedN.png"
        });
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 502);
    });
    if (g.pass === "endSleepyTime") {
        g.pass = "";
        chat(0, 502);
    }
    else if (inv.has("tifgift")) {
            chat(2, 502);
    }
    else {
        var canGotOut = cl.hasoutfit("public");
        if (canGotOut === null) {
            var navList = [501, 503, 0];
            nav.buildnav(navList);
        }
        else {
            g.internal = canGotOut;
            g.pass = "";
            g.pass = "I'm missing my " + canGotOut + ". I need to get dressed before I go out. ";
            chat(999, 502);
        }
    }
    //var zoeyStep = sc.getstep("zoey");

    //if (g.pass === "zoeyLickPussy") {
    //    nav.bg("502_bedroom/eat2.jpg");
    //    chat(20, 502);
    //}
    //else if (g.pass === "tellZoey") {
    //    nav.bg("502_bedroom/eat1.jpg");
    //    chat(22, 502);
    //}
    //else if (g.pass === "endSleepyTime") {
    //    g.pass = "";
    //    chat(10, 502);
    //}
    //else if (sc.checkevent("me", 3) && !sc.checkevent("zoey", -1) && zoeyStep < 22) {
    //    nav.bg("502_bedroom/homeless.jpg");
    //    chat(1, 502);
    //}
    //else if (zoeyStep > 22) {
    //    nav.button({
    //        "type": "btn",
    //        "name": "dresser",
    //        "left": 1192,
    //        "top": 0,
    //        "width": 541,
    //        "height": 426,
    //        "image": "502_bedroom/dresser.png",
    //        "night": "502_bedroom/dresserN.png"
    //    }, 502);
    //    var canGotOut1 = cl.hasoutfit("public");
    //    if (canGotOut1 === null) {
    //        nav.buildnav([501, 503, 0]);
    //    }
    //    else {
    //        g.internal = canGotOut;
    //        g.pass = "";
    //        g.pass = "I'm missing my " + canGotOut1 + ". I need to get dressed before I go out. ";
    //        chat(11, 502);
    //    }
    //}
    //else {
    //    var btnList = [
    //        {
    //            "type": "btn",
    //            "name": "dresser",
    //            "left": 1192,
    //            "top": 0,
    //            "width": 541,
    //            "height": 426,
    //            "image": "502_bedroom/dresser.png",
    //            "night": "502_bedroom/dresserN.png"
    //        }];
    //    if (sc.zoey().thisRoom) {
    //        nav.bg("502_bedroom/bedroomZoey.jpg", "502_bedroom/bedroomnightZoey.jpg");
    //        btnList.push({
    //            "type": "btn",
    //            "name": "bed",
    //            "left": 568,
    //            "top": 77,
    //            "width": 751,
    //            "height": 927,
    //            "image": "502_bedroom/bedZoey.png",
    //            "night": "502_bedroom/bedNZoey.png"
    //        });
    //    }
    //    else {
    //        btnList.push({
    //            "type": "btn",
    //            "name": "bed",
    //            "left": 568,
    //            "top": 77,
    //            "width": 751,
    //            "height": 927,
    //            "image": "502_bedroom/bed.png",
    //            "night": "502_bedroom/bedN.png"
    //        });
    //    }

    //    $.each(btnList, function (i, v) {
    //        nav.button(v, 502);
    //    });
    //    var canGotOut = cl.hasoutfit("public");
    //    if (canGotOut === null) {
    //        var navList = [501, 503, 0];
    //        nav.buildnav(navList);
    //    }
    //    else {
    //        g.internal = canGotOut;
    //        g.pass = "";
    //        g.pass = "I'm missing my " + canGotOut + ". I need to get dressed before I go out. ";
    //        chat(11, 502);
    //    }
    //}
};

room502.btnclick = function (name) {
    switch (name) {
        case "dresser":
            g.pass = 502;
            char.room(8);
            break;
        case "bed":
            var zoeystepx = sc.getstep("zoey");
            if (zoeystepx > 5 && zoeystepx < 10) {
                sc.incstep("zoey", 1);
                g.pass = 502;
                char.room(28);
            }
            else if (zoeystepx === 10) {
                if (g.dt.getHours() > 6)
                    g.dt.setDate(g.dt.getDate() + 1);
                g.dt = new Date(g.dt.getFullYear(), g.dt.getMonth(), g.dt.getDate(), 3, 7, 0, 0);
                nav.killall();
                cl.c.shoes = cl.saveOutfit[4].shoes;
                cl.c.socks = cl.saveOutfit[4].socks;
                cl.c.pants = cl.saveOutfit[4].pants;
                cl.c.panties = cl.saveOutfit[4].panties;
                cl.c.bra = cl.saveOutfit[4].bra;
                cl.c.shirt = cl.saveOutfit[4].shirt;
                cl.c.dress = cl.saveOutfit[4].dress;
                cl.c.swimsuit = cl.saveOutfit[4].swimsuit;
                cl.c.accessories = cl.saveOutfit[4].accessories;
                cl.c.pj = cl.saveOutfit[4].pj;
                cl.display();
                nav.bg("502_bedroom/single1.jpg");
                chat(13, 502);
            }
            else {
                g.pass = 502;
                char.room(28);
            }
            break;
        default:
            break;
    }
};

room502.chatcatch = function (callback) {
    switch (callback) {
        case "sleep":
            var sleepOutfit = 4;
            var zoeyStep = sc.getstep("zoey");
            if (zoeyStep >= 5 && zoeyStep <= 9)
                sc.setstep("zoey", zoeyStep + 1);
            if (zoeyStep >= 12 && zoeyStep <= 17)
                sc.setstep("zoey", zoeyStep + 1);
            if (zoeyStep >= 19 && zoeyStep <= 21)
                sc.setstep("zoey", zoeyStep + 1);
            if (zoeyStep === 10) {
                nav.killall();
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
                char.settime(4, 37);
                nav.bg("502_bedroom/overlook.jpg");
                chat(12, 502);
            }
            else if (zoeyStep === 17) {
                nav.killall();
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
                nav.bg("502_bedroom/single1.jpg");
                char.settime(7, 37);
                chat(67, 502);
            }
            else if (zoeyStep === 18 && sc.getstep("missy") >= 21) {
                char.settime(7, 37);
                nav.killall();
                nav.bg("502_bedroom/overlook.jpg");
                chat(45, 502);
            }
            else if (zoeyStep === 22) {
                char.settime(7, 37);
                nav.killall();
                nav.bg("502_bedroom/overlook.jpg");
                chat(57, 502);
            }
            else {
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

                g.pass = 502;
                char.room(28);

            }
            break;
        case "newday":
            char.room(502);
            break;
        case "zoeyBed":
            nav.bg("502_bedroom/sleepZoey.jpg");
            break;
        case "firstNewDay":
            sc.setstep("zoey", -1);
            g.pass = 502;
            char.room(28);
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
            char.room(502);
            break;
        case "o4":
            char.room(502);
            break;
        case "overLook1":
            nav.bg("502_bedroom/overlook1.jpg");
            break;
        case "overLook2":
            nav.bg("502_bedroom/overlook2.jpg");
            break;
        case "overLook3":
            nav.bg("502_bedroom/overlook3.jpg");
            break;
        case "overLook4":
            nav.bg("502_bedroom/overlook4.jpg");
            break;
        case "overLook5":
            nav.bg("502_bedroom/overlook5.jpg");
            break;
        case "leave11":
            sc.setstep("zoey", 11);
            nav.room(501);
            break;
        case "lick2":
            nav.bg("502_bedroom/eat1.jpg");
            break;
        case "room501":
            nav.room(501);
            break;
        case "tellZoey":
            nav.bg("502_bedroom/eat3.jpg");
            break;
        case "chloeGone":
            nav.bg("502_bedroom/eat4.jpg");
            break;
        case "chloeGoneSleep":
            nav.bg("502_bedroom/overlook.jpg");
            break;
        case "chloeGoneSleepBlack":
            nav.bg("24_spinTheBottle/black.jpg");
            break;
        case "chloeGoneSleepReset":
            sc.setstep("zoey", -4);
            sc.setstep("zoey", 12);
            //char.settime(15, 37);
            g.pass = 502;
            char.room(28);
            break;
        case "newClothing":
            nav.button({
                "type": "img",
                "name": "newClothing",
                "left": 905,
                "top": 183,
                "width": 423,
                "height": 646,
                "image": "502_bedroom/newClothing.png"
            }, 502);
            break;
        case "killnewClothing":
            nav.killbutton("newClothing");
            cl.add("shirt", "r");
            cl.add("pants", "k");
            cl.add("shoes", "fb");
            inv.update("tifgift", false, null);
            nav.button({
                "type": "img",
                "name": "zoey",
                "left": 860,
                "top": 42,
                "width": 677,
                "height": 1038,
                "image": "502_bedroom/zoeFace.png"
            }, 502);
            break;
        case "dressup":
            cl.nude();
            nav.killbutton("zoey");
            zcl.displayMain(-60, 750, .20, "panties shirt pants socks shoes bra", false);
            break;
        case "dressup1":
            cl.c.shirt = "r";
            cl.c.panties = "w";
            cl.c.pants = "k";
            cl.c.shoes = "fb";
            cl.display();
            zcl.displayMain(-60, 750, .20, "panties shirt pants socks shoes bra", false);
            break;
        case "zoeyLeave":
            nav.room(502);
            break;
        case "wake1":
            nav.bg("502_bedroom/overlook1.jpg");
            break;
        case "talk":
            nav.bg("502_bedroom/talk.jpg");
            break;
        case "wakeEnd":
            sc.setstep("zoey", 19);
            char.room(502);
            break;
        case "wakeEnd1":
            sc.setstep("zoey", 23);
            sc.setstep("tiffany", 13);
            sc.events[sc.getEventIndex("zoey", -1)].ach = false;
            g.setflag("zoeyDay");
            char.room(502);
            break;
        case "single2":
            nav.bg("502_bedroom/single2.jpg");
            break;
        case "single3":
            nav.bg("502_bedroom/single3.jpg");
            break;
        case "single4":
            nav.bg("502_bedroom/single4.jpg");
            break;
        case "single5":
            nav.bg("502_bedroom/single5.jpg");
            break;
        case "single6":
            nav.bg("502_bedroom/single6.jpg");
            break;
        case "single7":
            nav.bg("502_bedroom/single7.jpg");
            break;
        case "singleReset":
            nav.killall();
            nav.bg("502_bedroom/bedroomnight.jpg");
            sc.setstep("zoey", 11);
            g.pass = 502;
            char.room(28);
            break;
        default:
            break;
    }
};

room502.chat = function (chatID) {
    var cArray;
    if (chatID === 999)
        return {
            chatID: 11,
            speaker: "me",
            text: g.pass,
            button: []
        };
    else {
        cArray = [
            {
                chatID: 0,
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
                chatID: 2,
                speaker: "me",
                text: "Time to check what's in the bag.",
                button: [
                    { chatID: 3, text: "[Open Bag From " + sc.n("tiffany") + "]", callback: "newClothing" }
                ]
            },
            {
                chatID: 3,
                speaker: "me",
                text: "What the hell am I supposed to do with this? It's women's office clothing!",
                button: [
                    { chatID: 4, text: "...", callback: "killnewClothing" }
                ]
            },
            {
                chatID: 4,
                speaker: "zoey",
                text: "Zut alors!!! Is that a skirt and blouse! They are so pretty!",
                button: [
                    { chatID: 5, text: "I.. uh.... no?", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "zoey",
                text: "You know, I guess I have always known you were a crossdresser, that is why we are such good friends!",
                button: [
                    { chatID: 6, text: "Whaaa, no I'm not a ", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "zoey",
                text: "oh ma petite amie tu es si mignonne. It is Ok, I bet you look so pretty in your outfit! Let me see! Let me see! ",
                button: [
                    { chatID: 7, text: "Ok, promise not to laugh?", callback: "" },
                    { chatID: 12, text: "Oh, I don't know.. I wasn't going to wear it..", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "zoey",
                text: "I would never laugh at you, I am really excited to see you dress up!",
                button: [
                    { chatID: 8, text: "ok, here goes [dress up]", callback: "dressup" }
                ]
            },
            {
                chatID: 8,
                speaker: "zoey",
                text: "Oh putain! I never knew what you had a pénis géant! How have you been hiding that item? ",
                button: [
                    { chatID: 9, text: "Do you want to touch it?", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "zoey",
                text: "Hmmmm non. I admire its beauty, but I am not in love with the penis. Now show me your pretty clothes!",
                button: [
                    { chatID: 10, text: "It was worth a try [Put on girls clothes]", callback: "dressup1" }
                ]
            },
            {
                chatID: 10,
                speaker: "zoey",
                text: "You are sooo pretty! I love it! Your cute little mamelons are almost poking out! I am proud you can be your true self!",
                button: [
                    { chatID: 11, text: "No, I have to do this..", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "zoey",
                text: "It is ok. I will leave you to get dressed. Imagine such a large penis under that tiny skirt! You are too cute.",
                button: [
                    { chatID: -1, text: "See ya " + sc.n("zoey"), callback: "zoeyLeave" }
                ]
            },
            {
                chatID: 12,
                speaker: "zoey",
                text: "It is ok. I know you are shy, but you will look sexy in those clothes",
                button: [
                    { chatID: -1, text: "See ya " + sc.n("zoey"), callback: "zoeyLeave" }
                ]
            },
            {
                chatID: 13,
                speaker: "me",
                text: "**Snore** **Snort** I think I heard something in the living room. ",
                button: [
                    { chatID: 14, text: "[Check out noise]", callback: "single2" }
                ]
            },
            {
                chatID: 14,
                speaker: "zoey",
                text: "c'est trop amusant! You are so dirty!",
                button: [
                    { chatID: 15, text: "Hmm?", callback: "single3" }
                ]
            },
            {
                chatID: 15,
                speaker: "zoey",
                text: "You taste amazing! Je pourrais te manger toute la nuit!",
                button: [
                    { chatID: 16, text: "....", callback: "" }
                ]
            },
            {
                chatID: 16,
                speaker: "stormy",
                text: "HHhhmmmMMmmmm ",
                button: [
                    { chatID: 17, text: "...", callback: "single4" }
                ]
            },
            {
                chatID: 17,
                speaker: "stormy",
                text: "Huh?",
                button: [
                    { chatID: 18, text: "Oh hi", callback: "single5" }
                ]
            },
            {
                chatID: 18,
                speaker: "zoey",
                text: "Oh.." + sc.n("me") + " sorry we were so loud, we get carried away sometimes... This is my friend " + sc.n("stormy") + ".",
                button: [
                    { chatID: 19, text: "That's ok, Please continue..", callback: "single6" }
                ]
            },
            {
                chatID: 19,
                speaker: "stormy",
                text: "The pervy roommate I've heard so much about. " + sc.n("zoey") + " says you like to watch. So what do you think?",
                button: [
                    { chatID: 20, text: "I uhhh. what?", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "zoey",
                text: "Oh " + sc.n("stormy") + "! Tu as promis. You would not say anything if he caught us!",
                button: [
                    { chatID: 21, text: "Wait, what did you tell her? You are the one that's always naked!", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "zoey",
                text: "Haha I know. Well, I think that's the end of our fun for the night. Au revoir " + sc.n("stormy") + ". Next time we'll " +
                    "go to your house!",
                button: [
                    { chatID: 22, text: "You don't have to leave.", callback: "single7" }
                ]
            },
            {
                chatID: 22,
                speaker: "stormy",
                text: "You are a perv! I love it! But I'm going to get going. I'm sure I'll see you again. " + sc.n("me") + ". " + sc.n("zoey") +
                    " I'll see you again soon!",
                button: [
                    { chatID: -1, text: "By " + sc.n("stormy") + " good night " + sc.n("zoey") + ".", callback: "singleReset" }
                ]
            },

            //{
            //    chatID: 12,
            //    speaker: "zoey",
            //    text: "ZZZZZzzzzzz",
            //    button: [
            //        { chatID: 13, text: "...", callback: "overLook1" }
            //    ]
            //},
            //{
            //    chatID: 13,
            //    speaker: "me",
            //    text: "ZZZZZzzzzzz",
            //    button: [
            //        { chatID: 14, text: "...", callback: "overLook2" }
            //    ]
            //},
            //{
            //    chatID: 14,
            //    speaker: "zoey",
            //    text: "huh",
            //    button: [
            //        { chatID: 15, text: "...", callback: "overLook3" }
            //    ]
            //},
            //{
            //    chatID: 15,
            //    speaker: "zoey",
            //    text: sc.n("chloe") + ".....?",
            //    button: [
            //        { chatID: 16, text: "...", callback: "overLook4" }
            //    ]
            //},
            //{
            //    chatID: 16,
            //    speaker: "chloe",
            //    text: "I need you...",
            //    button: [
            //        { chatID: 17, text: "...", callback: "overLook5" }
            //    ]
            //},
            //{
            //    chatID: 17,
            //    speaker: "chloe",
            //    text: "Sorry " + sc.n("me") + ". I didn't know you were here, I need to borrow " + sc.n("zoey") + " for a sec. " +
            //        "My clit is aching and needs some attention.",
            //    button: [
            //        { chatID: 18, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 18,
            //    speaker: "zoey",
            //    text: "Sorry " + sc.n("me") + ", do you mind giving " + sc.n("chloe") + " and I some time. I promised her an " +
            //        "orgasm earlier today. S'il vous plaît",
            //    button: [
            //        { chatID: 19, text: "Oh, of course, I'll let you two ...talk", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 19,
            //    speaker: "zoey",
            //    text: "Merci mon amour. You are the best friend ever!",
            //    button: [
            //        { chatID: -1, text: "[Go to the living room]", callback: "leave11" }
            //    ]
            //},
            
            //},
            //{
            //    chatID: 33,
            //    speaker: "me",
            //    text: "zzzZZZzzz",
            //    button: [
            //        { chatID: -1, text: "...", callback: "chloeGoneSleepReset" }
            //    ]
            //},
            
            //{
            //    chatID: 45,
            //    speaker: "zoey",
            //    text: "ZZzzZZzzz **snort**",
            //    button: [
            //        { chatID: 46, text: "zzZZzzz", callback: "wake1" }
            //    ]
            //},
            //{
            //    chatID: 46,
            //    speaker: "zoey",
            //    text: sc.n("me") + " are you awake...",
            //    button: [
            //        { chatID: 47, text: "zzZZzzz zzzZZZzzz", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 47,
            //    speaker: "zoey",
            //    text: sc.n("me") + "!!!",
            //    button: [
            //        { chatID: 48, text: "zzZZzzz **snort** huh?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 48,
            //    speaker: "zoey",
            //    text: "Oh good, you are awake. There is something I have wanted to talk to you about.",
            //    button: [
            //        { chatID: 49, text: "Huh, yes?", callback: "talk" }
            //    ]
            //},
            //{
            //    chatID: 49,
            //    speaker: "zoey",
            //    text: "So first of all you know I love you, oui?",
            //    button: [
            //        { chatID: 50, text: "Of course, I love you too.", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 50,
            //    speaker: "zoey",
            //    text: "Do you remember when you first came here? ",
            //    button: [
            //        { chatID: 51, text: "Yes", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 51,
            //    speaker: "zoey",
            //    text: "J'aime être tout seul... I like sleeping alone. I love when girls stop by and we have sex, but I always kick them out. " +
            //        "I have never slept with someone as long as we have slept together. Weirdly you are my longest relationship, mon amant secret. ",
            //    button: [
            //        { chatID: 52, text: "That's sweet", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 52,
            //    speaker: "zoey",
            //    text: "Je suis vraiment désolé, I have to have the place back to myself. I do not like sharing my bed everynight. " +
            //        "I hope you do not hate me, I will " +
            //        "always love you, and you can come visit me anytime. I just have to have my privacy back again. I am so sorry.",
            //    button: [
            //        { chatID: 53, text: "You want me to leave?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 53,
            //    speaker: "zoey",
            //    text: "Just stop sleeping here everynight. You can always come visit. I love it when you visit, but I need my space back. ",
            //    button: [
            //        { chatID: 54, text: "When do you want me to leave?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 54,
            //    speaker: "zoey",
            //    text: "Trois jours? I am so sorry, but a few days should be good, you are working so you can afford a new place.",
            //    button: [
            //        { chatID: 55, text: "It's ok. I'll look for a new place.", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 55,
            //    speaker: "zoey",
            //    text: "I tried to not want you to leave, I tried to share my space, but I need it, I will always love you.",
            //    button: [
            //        { chatID: 56, text: "I love you too, thank you for letting me stay for as long as you did.", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 56,
            //    speaker: "zoey",
            //    text: "I love you too. You are always free to visit.",
            //    button: [
            //        { chatID: -1, text: "I love you.", callback: "wakeEnd" }
            //    ]
            //},
            //{
            //    chatID: 57,
            //    speaker: "zoey",
            //    text: "Hay... hay",
            //    button: [
            //        { chatID: 58, text: "zzzZZZzzz", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 58,
            //    speaker: "zoey",
            //    text: sc.n("me") + ". Are you awake....",
            //    button: [
            //        { chatID: 59, text: "zzzZZZzzz", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 59,
            //    speaker: "zoey",
            //    text: "Hay...... Bonjour",
            //    button: [
            //        { chatID: 60, text: "zzzZZZzzz  **snort**", callback: "wake1" }
            //    ]
            //},
            //{
            //    chatID: 60,
            //    speaker: "zoey",
            //    text: "C'est aujourd'hui le jour.. You are not mad are you?",
            //    button: [
            //        { chatID: 61, text: "Of course not, I understand", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 61,
            //    speaker: "zoey",
            //    text: "I love you, I am going to go for a walk and let you get ready. Je vous aimerai toujours",
            //    button: [
            //        { chatID: -1, text: "I will always love you too", callback: "wakeEnd1" }
            //    ]
            //},
            //{
            //    chatID: 62,
            //    speaker: "me",
            //    text: "Oh wow, all that working out has really paid off! I feel so much sexier with this new bod!",
            //    button: [
            //        { chatID: -1, text: "....", callback: "newday" }
            //    ]
            //},
            //{
            //    chatID: 63,
            //    speaker: "me",
            //    text: "Are those itty bitty tits? I think these pills are changing my body.",
            //    button: [
            //        { chatID: -1, text: "....", callback: "newday" }
            //    ]
            //},
            //{
            //    chatID: 64,
            //    speaker: "me",
            //    text: "Oh no... is my penis getting shrinking!?!?",
            //    button: [
            //        { chatID: -1, text: "....", callback: "newday" }
            //    ]
            //},
            //{
            //    chatID: 64,
            //    speaker: "me",
            //    text: "Hahah nice, bigger titties!",
            //    button: [
            //        { chatID: -1, text: "....", callback: "newday" }
            //    ]
            //},
            //{
            //    chatID: 66,
            //    speaker: "me",
            //    text: "Check that ass out! So much to grab",
            //    button: [
            //        { chatID: -1, text: "....", callback: "newday" }
            //    ]
            //},
            
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
