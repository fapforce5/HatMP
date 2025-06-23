//Reciption
var room221 = {};
room221.main = function () {
    var rc, i;
    g.pass = {
        t: 10,
        events: new Array()
    };
    var customerList = [
        { n: "!stoner", bg: "z_stoner.jpg", btnclick: "zstoner" },
        { n: "!cheezy", bg: "z_cheezy.jpg", btnclick: "zcheezy" },
        { n: "!nips", bg: "z_nips.jpg", btnclick: "znips" },
        { n: "!lep", bg: "z_lep.jpg", btnclick: "zlep" },
        { n: "!bitch", bg: "z_bitch.jpg", btnclick: "zbitch" },
        { n: "!twat", bg: "z_twat.jpg", btnclick: "ztwat" },
        { n: "jeffery", bg: "z_jeffery.jpg", btnclick: "zjeffery" },
    ];

    if (cl.c.shirt === "r") {
        var remove = Math.round(customerList.length / 2);
        for (i = 0; i < remove; i++) {
            customerList.splice(g.rand(0, customerList.length), 1);
        }

        customerList.push({ n: "!punk", bg: "z_punk.jpg", btnclick: "zpunk" });
        customerList.push({ n: "!m", bg: "z_m.jpg", btnclick: "zm" });
        customerList.push({ n: "!football", bg: "z_football.jpg", btnclick: "zfootball" });
        customerList.push({ n: "queen", bg: "z_forest.jpg", btnclick: "zqueen" });
        customerList.push({ n: "!peeguy", bg: "zpeeguy.jpg", btnclick: "zpeeguy" });
        
    }
    
    for (i = 10; i < 13; i++) {
        var thisEvent = g.rand(0, 3);
        if (thisEvent === 0) { //no one comes in
            g.pass.events.push({ t: i, pcDisplay: "Nothing", n: "Nothing", bg: "work0.jpg", btnclick: "nothing" });
        }
        else if (thisEvent === 1) { //right person comes in
            rc = g.rand(0, customerList.length);
            g.pass.events.push({ t: i, pcDisplay: "Nothing", n: customerList[rc].n, bg: customerList[rc].bg, btnclick: customerList[rc].btnclick });
            customerList.splice(rc, 1);
        }
        else {//wrong person comes in
            rc = g.rand(0, customerList.length);
            g.pass.events.push({ t: i, pcDisplay: sc.n(customerList[rc].n), n: customerList[rc].n, bg: customerList[rc].bg, btnclick: customerList[rc].btnclick });
            customerList.splice(rc, 1);
        }
    }

    
    if (missy.get("jobWorkReciption") === 0) {
        chat(0, 221);
    }
    else {
        chat(5, 221);
    }
};

room221.btnclick = function (name) {
    switch (name) {
        case "drawScreen":
            nav.killall();
            var left = 880;
            var top = 170;
            $.each(g.internal, function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": v.n,
                    "left": left + ((i % 5) * 187),
                    "top": top + (Math.floor(i / 5) * 182),
                    "width": 157,
                    "height": 162,
                    "image": "221_recip/" + v.i
                }, 221);
            });
            nav.button({
                "type": "btn",
                "name": "passtime",
                "left": 451,
                "top": 311,
                "width": 164,
                "height": 233,
                "image": "221_recip/passtime.png"
            }, 221);
            break;
        case "drawBG":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "pic",
                "left": 865,
                "top": 154,
                "width": 1026,
                "height": 559,
                "image": "221_recip/" + g.internal.i
            }, 221);

            nav.button({
                "type": "btn",
                "name": g.internal.b,
                "left": 1780,
                "top": 170,
                "width": 90,
                "height": 90,
                "image": "9_computer/09_close.png"
            }, 221);
            nav.button({
                "type": "btn",
                "name": "passtime",
                "left": 451,
                "top": 311,
                "width": 164,
                "height": 233,
                "image": "221_recip/passtime.png"
            }, 221);
            break;
        case "main":
            g.internal = [
                { n: "sch", i: "sch.png" },
                { n: "notes", i: "notes.png" },
                { n: "pics", i: "pics.png" }
            ];
            room221.btnclick("drawScreen");
            break;
        case "notes":
            g.internal = {
                b: "main",
                i: "notes.jpg"
            };
            room221.btnclick("drawBG");
            break;
        case "sch":
            g.internal = {
                b: "main",
                i: "sch.jpg"
            };
            room221.btnclick("drawBG");
            $.each(g.pass.events, function (i, v) {
                nav.t({
                    type: "img",
                    name: "name",
                    left: 1050,
                    top: 350 + (i * 50),
                    font: 30,
                    hex: "#000000",
                    text: v.t + ":00 - " + v.pcDisplay
                });
            });
            break;
        case "pics":
            g.internal = [
                { n: "main", i: "up.png" },
                { n: "pic1", i: "img1.png" },
                { n: "pic2", i: "img2.png" },
                { n: "pic3", i: "img3.png" },
                { n: "pic4", i: "img4.png" },
                { n: "pic5", i: "img5.png" },
                { n: "pic6", i: "img6.png" },
                { n: "pic7", i: "img7.png" },
                { n: "pic8", i: "img8.png" },
                { n: "pic9", i: "img9.png" },
                { n: "pic10", i: "img10.png" },
            ];
            room221.btnclick("drawScreen");
            break;
        case "pic1":
        case "pic2":
        case "pic3":
        case "pic4":
        case "pic5":
        case "pic6":
        case "pic7":
        case "pic8":
        case "pic9":
        case "pic10":
            g.internal = {
                b: "pics",
                i: name + ".jpg"
            };
            room221.btnclick("drawBG");
            break;
        case "passtime":
            nav.killall();
            if (g.pass.events.length === 0) {
                chat(4, 221);
            }
            else {
                nav.bg("221_recip/" + g.pass.events[0].bg);
                char.settime(g.pass.t, 0);
                
                if (g.pass.events[0].n === "Nothing") {
                    chat(22, 221);
                }
                else {
                    room221.btnclick(g.pass.events[0].btnclick);
                }

            }
            break;
        case "zstoner":
            chat(6, 221);
            break;
        case "zcheezy":
            if (cl.c.shirt === "r")
                chat(41, 221);
            else
                chat(8, 221);
            break;
        case "znips":
            chat(9, 221);
            break;
        case "zlep":
            chat(10, 221);
            break;
        case "zbitch":
            if (cl.c.shirt === "r")
                chat(11, 221);
            else
                chat(14, 221);
            break;
        case "ztwat":
            chat(15, 221);
            break;
        case "zjeffery":
            var pantiesTxt = cl.pantiesTxt() === "panties";
            if (cl.c.shirt === "r" && pantiesTxt) {
                chat(20, 221);
            }
            else if (pantiesTxt) {
                chat(17, 221);
            }
            else {
                chat(16, 221);
            }
            break;
        case "zpunk":
            chat(29, 221);
            break;
        case "zm":
            chat(34, 221);
            break;
        case "zfootball":
            chat(42, 221);
            break;
        case "zqueen":
            chat(43, 221);
            break;
        case "zpeeguy":
            chat(44, 221);
            break;
        default:
            break;
    }
};

room221.chatcatch = function (callback) {
    switch (callback) {
        case "e1":
        case "e2":
        case "e3":
        case "blank":
        case "zpunk2":
        case "zpunk3":
        case "zm1":
        case "zpeeguy1":
            nav.bg("221_recip/" + callback + ".jpg");
            break;
        case "zpunk4":
            levels.oral(3, true, false, "m", null, "unk");
            nav.killall();
            nav.bg("221_recip/" + callback + ".jpg");
            break;
        case "zm2":
            nav.bg("221_recip/zm2.jpg");
            zcl.kneel(300, -660, 1.15, "clothes", true);
            nav.button({
                "type": "img",
                "name": "zm",
                "left": 552,
                "top": 0,
                "width": 1356,
                "height": 1080,
                "image": "221_recip/zm2.png"
            }, 221);
            
            break;
        case "zm3":
            nav.bg("221_recip/zm3.jpg");
            zcl.kneel(300, -620, 1.15, "clothes", true);
            nav.button({
                "type": "img",
                "name": "zm",
                "left": 552,
                "top": 0,
                "width": 1356,
                "height": 1080,
                "image": "221_recip/zm3.png"
            }, 221);
            break;
        case "zm4":
            nav.killall();
            levels.oral(3, false, false, "f", null, "unk");
            nav.bg("221_recip/z_m.jpg");
            break;
        case "jefferyPanties":
            cl.c.panties = null;
            nav.killall();
            nav.bg("221_recip/" + callback + ".jpg");
            break;
        case "jefferyPanties1":
            levels.mod("xdress", 10, 8);
            gv.mod("money", 50);
            nav.bg("221_recip/jefferyPanties1.jpg");
            break;
        case "fuckup":
            nav.bg("221_recip/" + callback + ".jpg");
            missy.mod("mood", -15);
            break;
        case "start":
            nav.bg("221_recip/work0.jpg");
            nav.button({
                "type": "btn",
                "name": "passtime",
                "left": 451,
                "top": 311,
                "width": 164,
                "height": 233,
                "image": "221_recip/passtime.png"
            }, 221);
            room221.btnclick("main");
            break;
        case "lunch":
            missy.didJob(3, 1, null);
            char.room(224);
            break;
        case "resetbg":
            nav.bg("221_recip/work0.jpg");
            break;
        case "appIn":
            if (g.pass.events[0].pcDisplay === "Nothing") {
                chat(400, 221);
            }
            else {
                levels.mod("pi", 15, 999);
                chat(401, 221);
            }
            break;
        case "appNo":
            if (g.pass.events[0].pcDisplay === "Nothing") {
                levels.mod("pi", 15, 999);
                chat(500, 221);
            }
            else
                chat(501, 221);
            break;
        case "zpunk1":
            nav.killall();
            nav.bg("221_recip/zpunk1.jpg");
            zcl.displayMain(170, -100, .45, "clothes", true);
            nav.button({
                "type": "img",
                "name": "punk",
                "left": 782,
                "top": 0,
                "width": 563,
                "height": 573,
                "image": "221_recip/punkHand.png"
            }, 221);
            break;
        case "zpeeguy2":
            missy.mod("mood", -20);
            levels.mod("piss", 20, 999);
            nav.bg("221_recip/blank.jpg");

            break;
        case "reset":
            g.pass.t++;
            if (g.pass.events.length > 0)
                g.pass.events.splice(0, 1);
            room221.chatcatch("start");
            break;
        default:
            break;
    }
};

room221.chat = function (chatID) {
    if (chatID === 999) {
        var cecilia = sc.n("cecilia");
        var chatLine = [
            "OMG I'm so bored! ",
            "I can't just sit here all day! ",
            "How does " + cecilia + " do this everyday?",
            "I'm going to poke my eyes out, just so something happens. ",
            "I'm getting dumber just sitting here. ",
            "Please! Let something happen! ",
            "Why does this position even exists?",
            "So tired. I wonder if Missy will notice if I just leave? ",
            "I could get so fat just sitting here",
            "Cramp, cramp, cramp! My foot has a terrible cramp! ",
            "I farted and it smells so bad. I hope no one comes in right now. ",
            cecilia + " is such a champ! I couldn't do this everyday! ",
            "I wonder what " + cecilia + " does in her spare time? ",
            cecilia + " must have a wild personal life. ",
            "FUUUUCKKKKKK I'm so bored!"
        ]
        return {
            chatID: 0,
            speaker: "thinking",
            text: chatLine[Math.floor(Math.random() * chatLine.length)],
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 500) {
        return {
            chatID: 500,
            speaker: g.pass.events[0].n,
            text: "oh. Crap. That's right. It's for later. ",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        };
    }
    else if (chatID === 501) {
        return {
            chatID: 500,
            speaker: g.pass.events[0].n,
            text: "No. I have an appointment now. Missy! ",
            button: [
                { chatID: 23, text: "No, don't yell.. ", callback: "fuckup" }
            ]
        };
    }
    else if (chatID === 400) {
        return {
            chatID: 500,
            speaker: g.pass.events[0].n,
            text: "Hehehe thanks! ",
            button: [
                { chatID: 25, text: "Sure", callback: "fuckup" }
            ]
        };
    }
    else if (chatID === 401) {
        return {
            chatID: 500,
            speaker: g.pass.events[0].n,
            text: "Thanks! ",
            button: [
                { chatID: -1, text: "Sure", callback: "reset" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "me",
                text: "I'm going to take reception this morning. ",
                button: [
                    { chatID: 1, text: "...", callback: "e1" }
                ]
            },
            {
                chatID: 1,
                speaker: "cecilia",
                text: "I'm so excited! Thank you so much! I'm going to the Pink Room! ",
                button: [
                    { chatID: 2, text: "Wait, wait, wait. What do I need to do? ", callback: "e2" }
                ]
            },
            {
                chatID: 2,
                speaker: "cecilia",
                text: "You'll figure it out! Just don't make Missy mad! ",
                button: [
                    { chatID: 3, text: "but....", callback: "e3" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "Damn " + sc.n("cecilia") + "! I can't believe she just ran off without telling me " +
                    "what I need to do! And what the hell in the pink room? It sounds like she's having " +
                    "fun while I'm just sitting here. Let me see if there's any notes on her computer to help ",
                button: [
                    { chatID: -1, text: "...", callback: "start" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "YES! Time for lunch! ",
                button: [
                    { chatID: -1, text: "...", callback: "lunch" }
                ]
            },
            {
                chatID: 5,
                speaker: "cecilia",
                text: "PINK ROOM TIME!",
                button: [
                    { chatID: -1, text: "...bye", callback: "start" }
                ]
            },
            {
                chatID: 6,
                speaker: "!stoner",
                text: "Hey man... I like have a, uhhhh. Where am I? ",
                button: [
                    { chatID: 7, text: "Missy's Private Investigation", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "!stoner",
                text: "Oh, yeah. Someone stole my stuff, if you know what I mean. I need to get it back or I'm in big trouble. " +
                    "So uhhh can you help me? ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 8,
                speaker: "!cheezy",
                text: "Hi. I need to see Missy. I need to find my favorite brand of cheezy poofs and Missy is the only person " +
                    "that can help. Please let me see her. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 9,
                speaker: "!nips",
                text: "I cheated on my husband.. again. I need Missy to help make sure he doens't find out. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 10,
                speaker: "!lep",
                text: "Khazâd! Amân! Someone has stolen my sword! I must get it back, post haste! A friend " +
                    "needs it to fight back the hordes of orcs at the Renaissance fair!",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 11,
                speaker: "!bitch",
                text: "Ugh! You aren't Ceclia. You look like some idiot that Missy dragged off the street as one of her projects. " +
                    "Tell me, idiot, are you house broken? ",
                button: [
                    { chatID: 12, text: "House broken? ", callback: "" },
                ]
            },
            {
                chatID: 12,
                speaker: "!bitch",
                text: "Are you smart enough to use a toilet, or do you still pee on the floor like a puppy? ",
                button: [
                    { chatID: 13, text: "I pee in the toilet? ", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "!bitch",
                text: "Missy's going to have her hands full with your 2 brain cells. Just let me in. I'm tired of talking to you. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 14,
                speaker: "!bitch",
                text: "I see Missy's little project is now as stupid as she looks. Great work advertising you only have 2 brain. " +
                    "cells. Now let me in. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 15,
                speaker: "!twat",
                text: "I need to talk to Missy right now. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 16,
                speaker: "jeffery",
                text: "I have a meeting with Missy if you don't mind letting me in. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 17,
                speaker: "jeffery",
                text: "Hmmmm *sniff* *sniff*",
                button: [
                    { chatID: 18, text: "Do you smell something? ", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "jeffery",
                text: "mmmm, is it you? I smell dirty panties. Are you wearing panties? ",
                button: [
                    { chatID: 19, text: "Oh, what? ", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "jeffery",
                text: "It is you! You're wearing panties! Dirty panties. I can smell the pussy on them. Are they Missy's panties? " +
                    "Oh no. Don't tell me. I already got in trouble once for trying to take her panties. Keep them on. You and " +
                    "I are going to be best friends! Anyway I have a meeting with Missy. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 20,
                speaker: "jeffery",
                text: "Ooooo! I can smell your panties! Dirty dirty panties! Give me your panties! I need them. I'll tell you " +
                    "what. I'll give you $50 for your panties if you give them to me know. I love a fresh pair of panties! ",
                button: [
                    { chatID: 21, text: "Sure, Let me to go the bathroom and take them off. ", callback: "" },
                    { chatID: 28, text: "No. I'm not giving you my panties. ", callback: "" },
                ]
            },
            {
                chatID: 21,
                speaker: "jeffery",
                text: "No. I want to see you take them off. That way I know they're fresh! Gimmie Gimmie! ",
                button: [
                    { chatID: 26, text: "ok, ok", callback: "jefferyPanties" },
                ]
            },
            {
                chatID: 22,
                speaker: "thinking",
                text: "So dead in here. I'm so bored.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 23,
                speaker: "missy",
                text: "This is a very important client! How hard is it to remember their appointments " +
                    " Pull your head out of your ass and let them in. ",
                button: [
                    { chatID: 24, text: "ok", callback: "blank" },
                ]
            },
            {
                chatID: 24,
                speaker: "thinking",
                text: "Crap. I'll have to check the appointment log and remember it. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "What the fuck! They weren't scheduled for today! You're supposed to turn them away if there's " +
                    "no appointment! If you don't do anything then why the fuck are you sitting here. ",
                button: [
                    { chatID: 24, text: "*gulp*", callback: "blank" },
                ]
            },
            {
                chatID: 26,
                speaker: "jeffery",
                text: "OOOOooooo b-b-b-boy! I love a fresh pair of panties! ",
                button: [
                    { chatID: 27, text: "...", callback: "jefferyPanties1" },
                ]
            },
            {
                chatID: 27,
                speaker: "jeffery",
                text: "I can't wait to get home and taste your yummy panties. Thank you! I'm " +
                    "going to cum so hard j-j-j-jacking into these after my meeting with Missy. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 28,
                speaker: "jeffery",
                text: "R-r-r-really? I'll get your panties some day. Just let me in! ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 29,
                speaker: "!punk",
                text: "I've been jamming around the clock. Wanna suck a rock star cock? Come " +
                    "around that desk and take a squat, I want to cum in something hot. ",
                button: [
                    { chatID: 31, text: "I do want to suck a rock star cock", callback: "zpunk1" },
                    { chatID: 30, text: "No. Take your dick off my desk. ", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "!punk",
                text: "You're such a cutie, now show me Missy's booty.",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 31,
                speaker: "!punk",
                text: "Oh open your mouth, your lips will spread, I really need a little head. ",
                button: [
                    { chatID: 32, text: "*glug*", callback: "zpunk2" },
                ]
            },
            {
                chatID: 32,
                speaker: "!punk",
                text: "Oh fuck your throat is so wet and tight. My dick in your mouth is quite a sight. ",
                button: [
                    { chatID: 33, text: "*glug* *glug* *glug*", callback: "zpunk3" },
                ]
            },
            {
                chatID: 33,
                speaker: "!punk",
                text: "I do love a nasty slut. Gobble gobble up my slimy nut. ",
                button: [
                    { chatID: 30, text: "*glug* *gulp* MMmmmmm", callback: "zpunk4" },
                ]
            },
            {
                chatID: 34,
                speaker: "!m",
                text: "Well well, Missy really does hire the prettiest girls doesn't she? ",
                button: [
                    { chatID: 36, text: "Oh gosh! Not as pretty as you. ", callback: "" },
                    { chatID: 35, text: "What do you want? ", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "!m",
                text: "I do have an appointment with her now.",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 36,
                speaker: "!m",
                text: "Oh I know honey. Say, I like a pretty girly penis. Would like to have a " +
                    "quickie. I haven't been properly fucked all day.",
                button: [
                    { chatID: 37, text: "Oh so much! But Missy keeps me locked up.", callback: "zm1" },
                    { chatID: 35, text: "Oh no. I don't think I'm allowed. ", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "!m",
                text: "Awww. You poor thing. That's ok, you can eat my pussy. I do love " +
                    "a good orgasm before conducting business.",
                button: [
                    { chatID: 38, text: "My mouth is yours!", callback: "zm2" },
                ]
            },
            {
                chatID: 38,
                speaker: "!m",
                text: "Ooooo you're good. Get in there deep! I'm getting there! ",
                button: [
                    { chatID: 39, text: "MMmmmmm *lick* *slurp*", callback: "zm3" },
                ]
            },
            {
                chatID: 39,
                speaker: "!m",
                text: "Ffffuuuuccckkkkk! fuck fuck fuck! ",
                button: [
                    { chatID: 40, text: "*lick* *slurp* *gulp*", callback: "zm4" },
                ]
            },
            {
                chatID: 40,
                speaker: "!m",
                text: "Whew! You were wonderful dear. Now I have to get to my meeting with Missy. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 41,
                speaker: "!cheezy",
                text: "You're pretty. I need to see Missy about lifting weights. because I'm really " +
                    "strong. I could even lift you up. 'cause I'm really strong. Can you tell Missy " +
                    "I'm here, or do you need help? ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 42,
                speaker: "!football",
                text: "You're hot. I bet you're hotter bent over a locker room bench. The football " +
                    "team would love to run a train on you pretty girl. You should come by sometime. " +
                    "I've got a meeting or I'd bend you over right here. Now go tell Missy I'm here sweet cheeks.",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 43,
                speaker: "queen",
                text: "I have a rather important meeting with Missy. ",
                button: [
                    { chatID: -1, text: "Sure. Head on in. ", callback: "appIn" },
                    { chatID: -1, text: "Sorry, no. You have to make an appointment. ", callback: "appNo" },
                ]
            },
            {
                chatID: 44,
                speaker: "!peeguy",
                text: "Tell Missy to stop talking to my wife, Nips McTits! ",
                button: [
                    { chatID: 45, text: "Whaaa... BLECHH! AAAK! Stop pissing on me! STOP! Gross! ", callback: "zpeeguy1" },
                ]
            },
            {
                chatID: 45,
                speaker: "missy",
                text: "What the hell is going on out here! ",
                button: [
                    { chatID: 46, text: "Some guy came in and just pissed on me! I'm soaking wet!", callback: "" },
                ]
            },
            {
                chatID: 46,
                speaker: "missy",
                text: "I don't care that you like to get pissed on, just don't bring it in here.  " +
                    "Now dry yourself up, clean up your mess, and get back to work. And " +
                    "open the door. It smells like piss in here. ",
                button: [
                    { chatID: 47, text: "...but", callback: "" },
                ]
            },
            {
                chatID: 47,
                speaker: "missy",
                text: "Don't. Just clean it up in here pee pee " + gender.pronoun("girl") + ".",
                button: [
                    { chatID: 48, text: "yes ma'am", callback: "zpeeguy2" },
                ]
            },
            {
                chatID: 48,
                speaker: "thinking",
                text: "Such crap. I get pissed on my some angry crazy guy because of a case " +
                    "Missy does, then I get yelled at and forced to clean up. Now I have to sit " +
                    "here in my damp pissy clothes and finish out the work day. Bullshit.",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};