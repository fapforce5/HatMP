//Room name
var room219 = {};
room219.main = function () {
    g.internal = null;
    if (missy.get("dataEntryFirstTime") === 0) {
        missy.set("dataEntryFirstTime", 1);
        nav.bg("219_dataEntry/talk1.jpg");
        chat(0, 219);
    }
    else {
        room219.btnclick("home");
    }
};

room219.btnclick = function (name) {
    switch (name) {
        case "makeScreen":
            nav.killall();
            nav.bg("219_dataEntry/background.jpg");
            var left = 785;
            var top = 151;
            $.each(g.internal, function (i, v) {
                nav.button({
                    "type": "btn",
                    "name": v.name,
                    "left": left + ((i % 4) * 187),
                    "top": top + (i > 3 ? 182 : 0),
                    "width": 157,
                    "height": 162,
                    "image": "219_dataEntry/" + v.image
                }, 219);
            });
            break;
        case "games":
            nav.killall();
            nav.bg("219_dataEntry/missy.jpg");
            chat(5, 219);
            break;
        case "records":
            g.internal = [
                {
                    "name": "home",
                    "image": "up.png"
                },
                {
                    "name": "hypno1",
                    "image": missy.st[13].c === 0 ? "file1.png" : "file1Unlock.png"
                },
                {
                    "name": "hypno2",
                    "image": missy.st[14].c === 0 ? "file2.png" : "file2Unlock.png"
                },
                {
                    "name": "hypno3",
                    "image": missy.st[15].c === 0 ? "file3.png" : "file3Unlock.png"
                },
                {
                    "name": "hypno4",
                    "image": missy.st[16].c === 0 ? "file4.png" : "file4Unlock.png"
                },
                {
                    "name": "hypno5",
                    "image": missy.st[17].c === 0 ? "file5.png" : "file5Unlock.png"
                },
                {
                    "name": "hypno6",
                    "image": missy.st[18].c === 0 ? "file6.png" : "file6Unlock.png"
                },
            ];
            room219.btnclick("makeScreen");
            break;
        case "home":
            room219.chatcatch("start");
            break;
        case "hypno1":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "hypno",
                "left": 749,
                "top": 122,
                "width": 790,
                "height": 411,
                "image": "219_dataEntry/hypo1.gif"
            }, 219);
            missy.st[13].c++;
            g.roomTimeout = setTimeout(function () {
                levels.mod("sub", 50, 1);
                chat(6, 219);
                room219.btnclick("hypnoComplete");
            }, 7000);
            break;
        case "hypno2":
        case "hypno3":
        case "hypno4":
        case "hypno6":
            var hchatid = 0;
            nav.killall();
            nav.button({
                "type": "img",
                "name": "hypno",
                "left": 749,
                "top": 122,
                "width": 790,
                "height": 411,
                "image": "219_dataEntry/" + name + ".jpg"
            }, 219);
            switch (name) {
                case "hypno2":
                    missy.st[14].c++;
                    hchatid = 10;
                    levels.mod("xdress", 50);
                    break;
                case "hypno3":
                    missy.st[15].c++;
                    hchatid = 11;
                    levels.mod("anal", 50);
                    break;
                case "hypno4":
                    missy.st[16].c++;
                    hchatid = 12;
                    var wi = levels.i("strength");
                    if (levels.st[wi].l > 0) {
                        levels.st[wi].l--;
                        g.popUpNotice("You are now weaker. ");
                    }
                    break;
                case "hypno6":
                    missy.st[18].c++;
                    hchatid = 14;
                    levels.mod("makeup", 50);
                    break;
            }
            g.roomTimeout = setTimeout(function () {
                chat(hchatid, 219);
                room219.btnclick("hypnoComplete");
            }, 3000);
            break;
        case "hypno5":
            nav.killall();
            missy.st[17].c++;

            if (cl.c.cock > 3) {
                nav.button({
                    "type": "img",
                    "name": "hypno",
                    "left": 749,
                    "top": 122,
                    "width": 790,
                    "height": 411,
                    "image": "219_dataEntry/hypno4.jpg"
                }, 219);
                var wi1 = levels.i("strength");
                if (levels.st[wi1].l > 0) {
                    levels.st[wi1].l--;
                    g.popUpNotice("You are now weaker. ");
                }
                g.roomTimeout = setTimeout(function () {
                    chat(12, 219);
                    room219.btnclick("hypnoComplete");
                }, 3000);
            }
            else {
                cl.c.cock++;
                nav.button({
                    "type": "img",
                    "name": "hypno",
                    "left": 749,
                    "top": 122,
                    "width": 790,
                    "height": 411,
                    "image": "28_transformation/cock_" + cl.c.cock + ".gif"
                }, 219);
                g.popUpNotice("You cock got smaller. ");
                g.roomTimeout = setTimeout(function () {
                    chat(13, 219);
                    room219.btnclick("hypnoComplete");
                }, 6000);
            }
            break;
        case "hypnoComplete":
            nav.killall();
            nav.bg("219_dataEntry/hypnobg.jpg");
            g.internal = cl.c.eyes;
            cl.c.eyes = "hypno";
            zcl.displayMain(-100, -200, .6, "clothes", false);            
            break;
        case "type0":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "story",
                "left": 749,
                "top": 122,
                "width": 790,
                "height": 411,
                "image": "219_dataEntry/story" + Math.floor(Math.random() * 4) + ".jpg"
            }, 219);
            chat(8, 219);
            break;
        default:
            break;
    }
};

room219.chatcatch = function (callback) {
    switch (callback) {
        case "start":
            g.internal = [
                {
                    "name": "type0",
                    "image": "work.png"
                },
                {
                    "name": "games",
                    "image": "games.png"
                },
                {
                    "name": "records",
                    "image": "records.png"
                },
            ];
            room219.btnclick("makeScreen");
            break;
        case "widescreen":
            if (missy.get("uniform") > 2)
                nav.bg("219_dataEntry/bg_r.jpg");
            else
                nav.bg("219_dataEntry/bg.jpg");
            break;
        case "missyHate":
            missy.mod("mood", -10);
            room219.chatcatch("start");
            break;
        case "snapout":
            nav.killall();
            gv.mod("arousal", 20);
            if (missy.get("uniform") > 2)
                nav.bg("219_dataEntry/bg_r.jpg");
            else
                nav.bg("219_dataEntry/complete.jpg");
            break;
        case "snapoutHypno":
            nav.killall();
            cl.c.eyes = g.internal;
            nav.bg("219_dataEntry/caught.jpg");
            break;
        case "hypnolunch":
            //track if success
            missy.didJob(2, 0, null);
            gv.mod("energy", -15);
            char.room(224);
            break;
        case "workLunch":
            //track if success
            missy.didJob(2, 1, null);
            char.room(224);
            break;
        default:
            break;
    }
};

room219.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cecilia",
            text: "I'm so happy I get a desk buddy! It get so boring out here all by myself all the time. It's also " +
                "helps that you're so damn sexy! Love the suit, it brings out the manliness in you. ",
            button: [
                { chatID: 1, text: "Thanks. You're really hot too!", callback: "" },
                { chatID: 2, text: "Thanks", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "cecilia",
            text: "Do you really think so! I hope it says the right message to everyone that comes in.  ",
            button: [
                { chatID: 2, text: "I'm sure it does. ", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "cecilia",
            text: "You'll be working here next to me all day! Yeah! Data Entry is super easy. Just open the " +
                "program and type what you see on these papers into the computer! Well, it's kind of easy. Missy " +    
                "had me doing it, but I didn't type too good, so she punished me and told me never use a computer " +
                "again. But you're here now! I never have to use a computer again. ",
            button: [
                { chatID: 3, text: "Cool. So is that it?", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "cecilia",
            text: "Yeppers! Oh. Also Missy told me never to go snooping around, and just do the work. But you know " +
                "me! Anyways, if you do, you get in trouble. ",
            button: [
                { chatID: 4, text: "ok. I guess I'll start. ", callback: "widescreen" },
            ]
        },
        {
            chatID: 4,
            speaker: "cecilia",
            text: "You'll do great! I hope. I don't know. Typing is hard.",
            button: [
                { chatID: -1, text: "Gotcha ", callback: "start" },
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "Don't bother turning around. Just close the game and get to work. ",
            button: [
                { chatID: -1, text: "Yes ma'am ", callback: "missyHate" },
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "...I must serve Missy. I am her slave. Service is what I live for... ",
            button: [
                { chatID: 7, text: "[Snap out of it]", callback: "snapoutHypno" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "Hey, space cadet. You're supposed to be working, not zoning out! No pay for you! ",
            button: [
                { chatID: -1, text: "Oh, huh, yes ma'am.", callback: "hypnolunch" },
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "Fuck this is boring! I hate data entry. Mmmmm boobs. I like boobs. Big soft fluffy boobs. ",
            button: [
                { chatID: 9, text: "...", callback: "snapout" },
            ]
        },
        {
            chatID: 9,
            speaker: "cecilia",
            text: "Hey, you're kinda zoned out. Take a break it's lunch time! ",
            button: [
                { chatID: -1, text: "Oh, huh, yeah.", callback: "workLunch" },
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Hapiness is a new pretty dress. Must wear dresses. Be a pretty girl. ",
            button: [
                { chatID: 7, text: "[Snap out of it]", callback: "snapoutHypno" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "Pussies need dick. Must get fucked. Anal is life. ",
            button: [
                { chatID: 7, text: "[Snap out of it]", callback: "snapoutHypno" },
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "Be a victim. Stay weak. Men love weak girls they can easily overpower. ",
            button: [
                { chatID: 7, text: "[Snap out of it]", callback: "snapoutHypno" },
            ]
        },
        {
            chatID: 13,
            speaker: "me",
            text: "Tiny dick losers never get the girl. I don't need a girl if I " +
                "am the girl.",
            button: [
                { chatID: 7, text: "[Snap out of it]", callback: "snapoutHypno" },
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Be pretty wear makeup. Attraction starts with appearances. Must " +
                "appear to be a pretty girl. ",
            button: [
                { chatID: 7, text: "[Snap out of it]", callback: "snapoutHypno" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};