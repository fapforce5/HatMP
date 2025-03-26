//Room name
var room170 = {};
room170.main = function () {
    if (gv.get("sissySchoolClass") === "ex317") {
        if (g.pass === 170) {
            g.pass = null;
            room170.btnclick("dressingRoom");
            return;
        }
        switch (gv.get("sissySchoolClassDays")) {
            case 0:
                nav.bg("170_stage/ex317_0.jpg");
                chat(1, 170);
                break;
            case 2:
            case 3:
                nav.bg("181_black/bg_black.jpg");
                chat(18, 170);
                break;
        }
    }
    else {
        chat(0, 170);
        nav.buildnav([213, 214, 171, 215]);
    }
    //var btnList = [
    //    {
    //        "type": "btn",
    //        "name": "name",
    //        "left": 1741,
    //        "top": 618,
    //        "width": 130,
    //        "height": 252,
    //        "image": "170_folder/hole.png"
    //    }
    //];
    //var navList = [0];
    //$.each(btnList, function (i, v) {
    //    nav.button(v, 170);
    //});
    
};

room170.btnclick = function (name) {
    switch (name) {
        case "dressingRoom":
            nav.kill();
            var askForMakeup = false;
            if (inv.get("makeup").count < 1) {
                inv.add("makeup", 5);
                askForMakeup = true;
            }
            if (inv.get("redl").count < 1) {
                inv.add("redl", 5);
                askForMakeup = true;
            }
            if (inv.get("eyeshadow").count < 1) {
                inv.add("eyeshadow", 5);
                askForMakeup = true;
            }

            nav.bg("170_stage/dressingRoom.jpg");
            sc.select("wardrobe", "316_livingroom/icon_wardrobe.png", -2);
            sc.select("makeup", "27_mirror/icon_makeup.png", 0);
            sc.select("hallway", "170_stage/icon_catwalk.png", 2);
            if (askForMakeup)
                chat(32, 170);
            break;
        case "wardrobe":
            g.pass = 170;
            char.room(8);
            break;
        case "makeup":
            g.pass = 170;
            char.room(27);
            break;
        case "hallway":
            nav.kill();
            nav.bg("170_stage/bitch.jpg");
            switch (gv.get("sissySchoolClassDays")) {
                case 0: chat(900, 170); break;
                case 1: chat(901, 170); break;
                case 2: chat(902, 170); break;
            }
            break;
        case "catwalk":
            nav.kill();
            switch (gv.get("sissySchoolClassDays")) {
                case 0: nav.bg("170_stage/ex317_4.jpg"); chat(4, 170);  break;
                case 1:
                    nav.bg("170_stage/stage.jpg");
                    zcl.displayMain(250, 800, .09, "clothes", false);
                    chat(15, 170);
                    break;
            }
            
            break;
        default:
            break;
    }
};

room170.chatcatch = function (callback) {
    switch (callback) {
        case "ex317_1":
        case "ex317_2":
        case "ex317_10":
        case "ex317_100":
        case "ex317_101":
        case "ex317_102":
        case "ex317_103":
        case "ex317_104_bad":
        case "ex317_104":
        case "ex317_105":
        case "bitch":
            nav.bg("170_stage/" + callback + ".jpg");
            break;
        case "ex317_3":
            cl.add("dress", "rose");
            room170.chatcatch("dressingRoom");
            return;
        case "dressingRoom":
            nav.bg("170_stage/hallway.jpg");
            nav.button({
                "type": "btn",
                "name": "dressingRoom",
                "left": 1361,
                "top": 73,
                "width": 175,
                "height": 959,
                "image": "170_stage/dressingRoomDoor.png"
            }, 170);
            break;
        case "gotoDressingRoom":
            room170.btnclick("dressingRoom");
            break;
        case "hallwayCatwalk":
            nav.kill();
            nav.bg("170_stage/hallway.jpg");
            nav.button({
                "type": "btn",
                "name": "catwalk",
                "left": 1143,
                "top": 548,
                "width": 101,
                "height": 414,
                "image": "170_stage/catwalkDoor.png"
            }, 170);
            break;
        case "ex317_5":
            nav.bg("170_stage/stage.jpg");
            zcl.displayMain(250, 800, .09, "clothes", false);
            break;
        case "ex317_6":
            zcl.displayMain(250, 850, .055, "clothes", true);
            break;
        case "ex317_7":
            nav.kill();
            gv.set("sissySchoolClassDays", 1);
            cl.add("shirt", "cor");
            cl.add("pants", "co");
            nav.bg("170_stage/ex317_7.jpg");
            break;
        case "ex317_8":
            nav.kill();
            cl.c.panties = null;
            cl.display();
            nav.bg("170_stage/ex317_8.jpg");
            break;
        case "ex317_9":
            nav.bg("170_stage/hallwayJones.jpg");
            zcl.displayMain(100, 550, .2, "clothes", true);
            break;
        case "ex317_11":
            nav.kill();
            nav.bg("170_stage/ex317_11.jpg");
            break;
        case "ex317_105_bad":
            nav.kill();
            nav.bg("170_stage/ex317_105_bad.jpg");
            zcl.displayMain(200, 550, .17, "clothes", true);
            break;
        case "ex317_badend":
            sc.completeMission("jones", "invite", false);
            sc.startMission("jones", "fail", true);
            gv.mod("money", 20);
            sissy.passclass(true);
            break;
        case "ex317_106":
            nav.bg("170_stage/stage.jpg");
            zcl.displayMain(250, 800, .09, "clothes", false);
            break;
        case "classComplete":
            gv.mod("sissySchoolClassDays", 1);
            levels.mod("xdress", 30, 999);
            levels.mod("fame", 100);
            char.settime(17, 15);
            char.room(201);
            break;
        case "sissyEnd":
            sc.startMission("jones", "invite");
            sc.completeMissionTask("jones", "invite", 0);
            sc.show("jones");
            g.roomMapAccess(150, true, true);
            sc.modSecret("jones", 100);
            levels.mod("fame", 200);
            sissy.passclass(true);
            break;
        default:
            break;
    }
};

room170.chat = function (chatID) {
    if (chatID === 900) {
        if (cl.c.dress !== "rose") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Is that the Rose Dress? Shut up! No it's not! Put on the rose dress " +
                    "you stupid bimbo! ",
                button: [
                    { chatID: -1, text: "Oh. Yeah. I'll put on the pink rose dress", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.makeup === "clown") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Are you wearing clown makeup? Go put on normal makeup you supid bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on different makeup. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.lipstick === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on lipstick you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on lipstick. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.pissface === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on eyeshadow you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on eyeshadow. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.socks !== null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why the fuck are you wearing sock! This isn't a gym. Go take those off " +
                    "you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll take off my socks. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.getEntry("shoes", cl.c.shoes).sex !== "f") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Go put on some sexy shoes you knuckle dragger! ",
                button: [
                    { chatID: -1, text: "Oh. I'll put on my sexiest shoes. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        return {
            chatID: 0,
            speaker: "!bitch",
            text: "*ugh* I guess that's good enough. Go out there and don't make an ass " +
                "of us you brain dead bimbo! ",
            button: [
                { chatID: -1, text: "Yes ma'am!", callback: "hallwayCatwalk" }
            ]
        };
    }
    else if (chatID === 901) {
        if (cl.c.shirt !== "cor" || cl.c.pants !== "co") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Is that the corset and micro skirt? Shut up! No it's not! Put on the " +
                    "corset and micro skirt you stupid bimbo! ",
                button: [
                    { chatID: -1, text: "Oh. Yeah. I'll put on the pink rose dress", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.makeup === "clown") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Are you wearing clown makeup? Go put on normal makeup you supid bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on different makeup. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.lipstick === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on lipstick you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on lipstick. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.pissface === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on eyeshadow you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on eyeshadow. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.socks !== null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why the fuck are you wearing sock! This isn't a gym. Go take those off " +
                    "you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll take off my socks. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.getEntry("shoes", cl.c.shoes).sex !== "f") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Go put on some sexy shoes you knuckle dragger! ",
                button: [
                    { chatID: -1, text: "Oh. I'll put on my sexiest shoes. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.bra !== null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why are you wearing a bra? Go take that off. It's a stuipid bra! ",
                button: [
                    { chatID: -1, text: "Oh. I'll remove my bra. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.panties === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Oh gross. Go put on some panties. No one wants to see that " +
                    "nasty little dangling thing. Disgusting!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on some panties. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        nav.bg("170_stage/hallwayJones.jpg");
        zcl.displayMain(100, 550, .2, "clothes", true);
        return {
            chatID: 0,
            speaker: "jones",
            text: "Why is she wearing panties! I didn't design those rags. They " +
                "look terrible with my design! She'll ruin the show! ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 902) {
        if (!cl.wearing().nude) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Why are you wearing clothes. Strip it all off! Should I get some " +
                    "Q-tips so you can clean your ears and listen? ",
                button: [
                    { chatID: -1, text: "Oh. Yeah. I'll remove all my clothes. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.makeup === "clown") {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Are you wearing clown makeup? Go put on normal makeup you supid bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on different makeup. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.lipstick === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on lipstick you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on lipstick. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        if (cl.c.pissface === null) {
            return {
                chatID: 0,
                speaker: "!bitch",
                text: "Put on eyeshadow you dumb bimbo!",
                button: [
                    { chatID: -1, text: "Oh. I'll put on eyeshadow. ", callback: "gotoDressingRoom" }
                ]
            };
        }
        nav.bg("170_stage/ex317_101.jpg");
        return {
            chatID: 0,
            speaker: "jones",
            text: "Wonderful! You came! You're going to be the final piece of my " +
                "show, wearing the most beautiful thing a woman can wear. I'm so " +
                "excited. They'll be talking about this for years! Assistant, you " +
                "can go. I'll take it from here. ",
            button: [
                { chatID: 20, text: "...", callback: "ex317_102" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "random",
                text: "In progress. Will be added in future release",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "black",
                text: "I have such the treat for you. There's a fasion show today put on by Mr. Jones. " +
                    "Follow me to the dressing room and we'll meet his assistant. ",
                button: [
                    { chatID: 2, text: "...", callback: "ex317_1" }
                ]
            },
            {
                chatID: 2,
                speaker: "!bitch",
                text: "These must be the *ugh* sissies that are going to model for Mr. Jones. " +
                    "You can go " + sc.n("black") + ". I'll take them from here. ",
                button: [
                    { chatID: 3, text: "...", callback: "ex317_2" }
                ]
            },
            {
                chatID: 3,
                speaker: "!bitch",
                text: "Take this dress, put on some makeup and nice shoes, then come " +
                    "back out here to walk the catwalk. Chop chop!",
                button: [
                    { chatID: -1, text: "oh. ok", callback: "ex317_3" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "Holy crap. This is all happening so fast. I've never modeled before " +
                    "and here I am going out on the catwalk in front of I don't know how many " +
                    "people. I hope they don't boo me. Just remember walk through the " +
                    "blud door and don't trip, don't trip, don't fall on my ass in front of everyone.",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "Oh wow... There's so many people out there staring at me! I think " +
                    "I'm gunna barf. Maybe I could just run away... No! I'm a big girl! " +
                    "I'm going to go out there and show off this dress! And I'm not gunna " +
                    "barf doing it! Just do it!",
                button: [
                    { chatID: 6, text: "...", callback: "ex317_5" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "I made it to the end of the runway. Still haven't tripped or " +
                    "barfed! I'll do my little turn and walk back. So simple. Just " +
                    "turn and walk...",
                button: [
                    { chatID: 7, text: "...", callback: "ex317_6" }
                ]
            },
            {
                chatID: 7,
                speaker: "thinking",
                text: "Almost out. Almost free!",
                button: [
                    { chatID: 8, text: "...", callback: "ex317_7" }
                ]
            },
            {
                chatID: 8,
                speaker: "!bitch",
                text: "You did fine. Not a model, but good enough. Now we're doing " +
                    "evening wear. Go put this on. ",
                button: [
                    { chatID: 9, text: "It's very revealing. Is there more to it?", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "!bitch",
                text: "*Ugh* I don't have time for this. Just put it on and get ready " +
                    "to model it. I though you bimbo sissies wanted to show off your bodies. ",
                button: [
                    { chatID: -1, text: "*sigh* ok", callback: "gotoDressingRoom" }
                ]
            },
            {
                chatID: 10,
                speaker: "!bitch",
                text: "What if people see her penis under the skirt? *ugh* I'll have to " +
                    "get another model to wear this. You. Bimbo. You're done here. ",
                button: [
                    { chatID: 11, text: "awww", callback: "ex317_8" }
                ]
            },
            {
                chatID: 11,
                speaker: "jones",
                text: "There isn't time to get another model. Bend forward I'm going " +
                    "to rip those stupid panties off myself! ",
                button: [
                    { chatID: 12, text: "*gasp*", callback: "ex317_9" }
                ]
            },
            {
                chatID: 12,
                speaker: "jones",
                text: "Better. Now walk your little ass out there and make my designs " +
                    "sexy!",
                button: [
                    { chatID: 13, text: "Yes sir.", callback: "ex317_10" }
                ]
            },
            {
                chatID: 13,
                speaker: "!bitch",
                text: "You stupid bimbo bitch! If you ever, and I mean ever, make me " +
                    "look like a fool in front of Mr. Jones again I will ruin you! " +
                    "I will make sure you end up in a gutter on the streets where only " +
                    "the rats will want to be around you! Don't fucking ever do that again! ",
                button: [
                    { chatID: 14, text: "*gulp*", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "!bitch",
                text: "Now get out there and show that ass of yours and never come back. " +
                    "I'm so done with your ugly bimbo face! ",
                button: [
                    { chatID: -1, text: "y-y-yes ma'am", callback: "hallwayCatwalk" }
                ]
            },
            {
                chatID: 15,
                speaker: "thiking",
                text: "What a mean cruel bitch! It wasn't my fault she didn't tell me " +
                    "what to wear. I'm so done with this. I'm so not coming back " +
                    "ever again! Walking out here in barely anthing for all these " +
                    "faceless people! ",
                button: [
                    { chatID: 16, text: "...", callback: "ex317_11" }
                ]
            },
            {
                chatID: 16,
                speaker: "jones",
                text: "I was just talking with " + sc.n("black") + " here about you. Love " +
                    "your look and energy! I'm going to do a private show and I " +
                    "must have you model at it. It lines up with your next class date, so " +
                    "it's perfect! You must come! I'll even give you the dress and corset your modeled " +
                    "as a thank you. Please say yes",
                button: [
                    { chatID: 17, text: "...", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "black",
                text: "She'll do it. I'll make sure she comes to the next show. We're so happy " +
                    "you chose the pink room to display your clothing lines and are more than " +
                    "happy to help. Now I've got to get this one back to class. ",
                button: [
                    { chatID: -1, text: "...", callback: "classComplete" }
                ]
            },
            {
                chatID: 18,
                speaker: "black",
                text: "I need crack several testicles of some naughty pigs today. " +
                    "Just head to the stage in the Pink Room. I've already let the " +
                    "guard know you'll be coming through. Be on your best behavior or " +
                    "I'll be cracking your testicles today too. ",
                button: [
                    { chatID: 19, text: "Yes ma'am", callback: "ex317_100" }
                ]
            },
            {
                chatID: 19,
                speaker: "!bitch",
                text: "Oh fuck. You did come. I was so hoping you knew where you " +
                    "wern't wanted. You have two brain cells fighting over " +
                    "second place and they both lost. Go in the change room and stip " +
                    "down. Mr. Jones said he had a special dress for you. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "gotoDressingRoom" }
                ]
            },
            {
                chatID: 20,
                speaker: "jones",
                text: "I've been designing women's clothing for almost 20 years. It " +
                    "really is a passion of mine. One that has made me an amazing " +
                    "amount of money over the years. When I design a piece, I don't " +
                    "think, does this accentuate her curves, or does this hide " +
                    "her flaws. No those thoughts are for amatures. ",
                button: [
                    { chatID: 21, text: "...", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "jones",
                text: "I only make clothing that when a woman wears it, it makes me " +
                    "think... Do I want to rip it off her and fuck her right here and " +
                    "now. When I first saw you, I knew you were special. So I designed " +
                    "the perfect outfit for you, and you alone. An outfit that speaks to " +
                    "the kind of woman you really are! ",
                button: [
                    { chatID: 22, text: "Yes!", callback: "ex317_103" }
                ]
            },
            {
                chatID: 22,
                speaker: "jones",
                text: "You will be wearing my piss. It for the woman that is too " +
                    "trashy to say no, and too stupid to towel off. The most " +
                    "submissive thing a woman can wear. It shows her man that she " +
                    "is just property to with as her man pleases. Now go out there and " +
                    "show off my pièce de résistance!",
                button: [
                    { chatID: 27, text: "Yes sir", callback: "ex317_104" },
                    { chatID: 23, text: "What, no! So gross. You just pissed on my ass! No way I'm walking out there like this!", callback: "ex317_104_bad" },
                ]
            },
            {
                chatID: 23,
                speaker: "jones",
                text: "No? No one ever tells me no! Get out of here! I'm going to ruin " +
                    "your carrier! You'll never model for another soul again! I should " +
                    "have known you were just another air head, idiot bimbo! Get out " +
                    "of my hallway and back to the trash you are! " + sc.n("black") + 
                    "is going to get an ear full from me, loaning me her undesirables! " +
                    "You ruined my fucking show! ",
                button: [
                    { chatID: 24, text: "Run away crying", callback: "ex317_105_bad" },
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "What the hell? Why are you streaking across my foyer? Is " +
                    "this one of " + sc.n("black") + "'s tasks?",
                button: [
                    { chatID: 26, text: "[Tell Missy what happened]", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "What the hell? Why are you streaking across my foyer? Is " +
                    "this one of " + sc.n("black") + "'s tasks?",
                button: [
                    { chatID: 26, text: "[Tell Missy what happened]", callback: "" },
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: sc.n("jones") + " is an idiot that surrounds himself with sycophants. " +
                    "No one really cares about his options they just hold on to his kite " +
                    "string for their own financial gain. Don't worry about anything he " +
                    "says, it won't effect your life one little bit. And don't worry about " + 
                    "seeing him again. No one calls my sissies trash! I'm going to go slap " +
                    "his stupid face with my strap-on and kick him out forever. Go get dressed " +
                    "and enjoy the rest of the afternoon. Maybe get some ice cream on me. ",
                button: [
                    { chatID: -1, text: "Thanks ma'am", callback: "ex317_badend" },
                ]
            },
            {
                chatID: 27,
                speaker: "thinking",
                text: "It's one thing to walk out there in front of hundreds of strangers " +
                    "in a skimpy outfit, but to strut out there naked covered in piss... I don't " +
                    "know... Damn it. I guess I just need to put on my big girl panties " +
                    "and go out and do it! Without the panties of course. ",
                button: [
                    { chatID: 28, text: "...", callback: "ex317_105" },
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "Oh wow! They love me! They really love me! ",
                button: [
                    { chatID: 29, text: "...", callback: "ex317_106" },
                ]
            },
            {
                chatID: 29,
                speaker: "thinking",
                text: "I am a submissive trashy piss whore and everyone knows it! ",
                button: [
                    { chatID: 30, text: "...", callback: "bitch" },
                ]
            },
            {
                chatID: 30,
                speaker: "!bitch",
                text: "*ugh* " + sc.n("jones") + " ordered me to tell you that he " +
                    "loves how you've modeled his creations. You are invited to his " +
                    "mansion in the North East corner of the residential section of the city " +
                    "if you would like to do some more modeling. But I recommend you do not " +
                    "show your face there or I will make you life a living hell!",
                button: [
                    { chatID: 31, text: "If you don't want me there, why did you tell me? ", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "!bitch",
                text: "We always do what " + sc.n("jones") + " tells us to do. No questions asked, " +
                    "no matter what. He told me to tell you to come, but he didn't say I couldn't " +
                    "make your life miserable if you do show. Now, I've got to go, you just take " +
                    "your bimbo brain home and never come by. *grrrr*",
                button: [
                    { chatID: -1, text: "Oh. ok", callback: "sissyEnd" },
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "I'm a bit short of makeup. I'm sure they won't mind if I " +
                    "barrow some from this open kit... ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};