//Bar bathroom
var room527 = {};
room527.main = function () {


    nav.button({
        "type": "btn",
        "name": "toilet",
        "left": 518,
        "top": 343,
        "width": 191,
        "height": 389,
        "image": "527_bathroom/toilet.png"
    }, 527);
    nav.button({
        "type": "btn",
        "name": "sink",
        "left": 1321,
        "top": 378,
        "width": 271,
        "height": 226,
        "image": "527_bathroom/sink.png"
    }, 527);
    sc.select("wait", "527_bathroom/icon_wait.png", 10);
    nav.buildnav([526]);

};

room527.btnclick = function (name) {
    switch (name) {
        case "s":
            nav.bg("527_bathroom/s" + g.internal + ".jpg");
            g.internal++;
            if (g.internal === 5) {
                gv.mod("pissedonMale", 1);
                nav.killbutton("s");
                chat(5, 527);
            }
            break;
        case "toilet":
            g.pass = 527;
            char.room(22);
            break;
        case "sink":
            g.pass = 527;
            char.room(27);
            break;
        case "wait":
            if (g.hourBetween(2, 17)) {
                chat(13, 527);
            }
            else {
                var zoeyPee = false;
                var wpee = false;
                var selectPee = g.rand(0, 4);
                if (selectPee === 0 && !daily.get("zoeypiss"))
                    zoeyPee = true;
                else if (selectPee === 1)
                    wpee = true;

                if (zoeyPee) {
                    daily.set("zoeypiss");
                    nav.killall();
                    nav.bg("527_bathroom/zoey0.jpg");
                    if (sc.getLevel("zoey") > 5)
                        chat(5, 527);
                    else
                        chat(0, 527);
                }
                else if (wpee) {
                    nav.killall();
                    nav.bg("527_bathroom/w0.jpg");
                    chat(9, 527);
                }
                else {
                    g.popUpNotice("An hour passed");
                }
            }
            //else if (g.rand(0, 4) === 0) {
            //    else if (app > 2) {
            //        var thisr = Math.floor(Math.random() * 10);
            //        if (app > thisr) {
            //            if (Math.floor(Math.random() * 2) === 0) {
            //                if (sc.getLevel("zoey") > 5) {
            //                    g.roomTimeout = setTimeout(function () {
            //                        nav.button({
            //                            "type": "img",
            //                            "name": "trouble",
            //                            "left": 744,
            //                            "top": 0,
            //                            "width": 722,
            //                            "height": 1080,
            //                            "image": "527_bathroom/zoey.png"
            //                        }, 526);
            //                        chat(6, 527);
            //                    }, 500);
            //                }
            //                else {
            //                    nav.killall();
            //                    nav.bg("527_bathroom/zoey0.jpg");
            //                    chat(0, 527);
            //                }
            //            }
            //            else {
            //                g.roomTimeout = setTimeout(function () {
            //                    zcl.displayMain(100, 300, .15, "clothes", false);
            //                    nav.button({
            //                        "type": "btn",
            //                        "name": "trouble",
            //                        "left": 584,
            //                        "top": 0,
            //                        "width": 1195,
            //                        "height": 1080,
            //                        "image": "527_bathroom/trouble.png"
            //                    }, 526);
            //                    chat(4, 527);
            //                }, 500);
            //            }
            //        }
            //        else {
            //            zcl.displayMain(100, 300, .15, "clothes", false);
            //            chat(3, 527);
            //        }
            //    }
            //    else {
            //        char.addtime(60);
            //        chat(2, 527);
            //    }
            //}
            //else {
            //    chat(1, 527);
            //}
            break;
        case "zoey11":
            if (g.internal < 13)
                nav.bg("527_bathroom/zoey" + g.internal + ".jpg");
            else {
                nav.killall();
                chat(8, 527);
            }
            g.internal++;
            break;
        case "w3":
            var w3chastity = cl.c.chastity === null ? "" : "c";
            nav.bg("527_bathroom/w" + g.internal + "_" + gender.pronoun("f") + w3chastity + ".jpg");
            if (g.internal > 4) {
                nav.killall();
                chat(12, 527);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room527.chatcatch = function (callback) {
    switch (callback) {
        case "zoey1":
        case "zoey2":
        case "zoey3":
        case "w1":
            nav.bg("527_bathroom/" + callback + ".jpg");
            break;
        case "zoey0_1":
            nav.bg("527_bathroom/zoey1.jpg");
            chat(1, 527);
            break;
        case "zoey4":
            sex.piss(true, false, false, "f");
            char.addtime(30);
            char.room(527);
            break;
        case "zoey10":
            if (levels.get("piss").l < 2) {
                chat(6, 527);
            }
            else
                chat(7, 527);
            break;
        case "zoey11":
            g.internal = 11;
            nav.bg("527_bathroom/zoey10.jpg");
            nav.next("zoey11");
            break;
        case "zoey12":
            sex.piss(true, false, false, "f");
            sc.modLevel("zoey", 20, 7);
            char.addtime(30);
            char.room(527);
            break;
        case "w2":
            if (levels.get("piss").l < 5) {
                levels.mod("piss", 15, 999);
                chat(11, 527);
            }
            else {
                cl.nude();
                nav.killall();
                g.internal = 3;
                var w2chast = cl.c.chastity === null ? "" : "c";
                nav.bg("527_bathroom/w2_" + gender.pronoun("f") + w2chast + ".jpg");
                nav.next("w3");
            }
            break;
        case "leave":
            char.room(526);
            break;
        case "leave60":
            char.addtime(60);
            char.room(526);
            break;
        case "s1":
            nav.killall();
            nav.bg("527_bathroom/s1.jpg");
            g.internal = 2;
            nav.button({
                "type": "btn",
                "name": "s",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 527);
            break;
        case "reset":
            char.addtime(60);
            char.room(527);
            break;
        case "resetUndo":
            char.addtime(60);
            cl.undo();
            char.room(527);
            break;
        //case "z1":
        //    nav.killall();
        //    nav.bg("527_bathroom/z1.jpg");
        //    break;
        //case "z2":
        //    nav.bg("527_bathroom/z2.jpg");
        //    break;
        //case "z3":
        //    scc.love("zoey", 5, 100); 
        //    gv.mod("pissedonFemale", 1);
        //    nav.bg("527_bathroom/z3.jpg");
        //    break;
        default:
            break;
    }
};

room527.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "zoey",
            text: "So... I need to take a leak. Are you just going to stand there and stare at me? ",
            button: [
                { chatID: -1, text: "Yes", callback: "zoey0_1" },
                { chatID: -1, text: "Oh no. I was just leaving. ", callback: "leave" }
            ]
        },
        {
            chatID: 1,
            speaker: "zoey",
            text: "So... You like the view?  ",
            button: [
                { chatID: 2, text: "Yes", callback: "zoey2" },
            ]
        },
        {
            chatID: 2,
            speaker: "zoey",
            text: "Hehehe. Désolée, I always fart before I pee. ",
            button: [
                { chatID: 3, text: "ewww", callback: "zoey3" },
            ]
        },
        {
            chatID: 3,
            speaker: "zoey",
            text: "Do not ewww me. You are the one to watch me pipi. You are the ewww.  ",
            button: [
                { chatID: 4, text: "haha yeah, I am the ewwww", callback: "zoey1" },
            ]
        },
        {
            chatID: 4,
            speaker: "zoey",
            text: "Les garçons sont tellement bizarres. The pipi is you when I play you in the video " +
                "game. hehehe. Have to get back to work. ",
            button: [
                { chatID: -1, text: "Hahaha, no, you are the pee pee!", callback: "zoey4" },
            ]
        },
        {
            chatID: 5,
            speaker: "zoey",
            text: "Hein? Are you waiting in here so you can be someone's toilet? ",
            button: [
                { chatID: 8, text: "Uhhh yea", callback: "zoey10" },
                { chatID: 0, text: "Wha. No. Gross", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "What am I saying? I don't want to be a toilet and drink her piss! ",
            button: [
                { chatID: 0, text: "[Need Piss level 4]", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "zoey",
            text: "Just like the video games, you will be drinking my pipi! Lay down pipi " +
                gender.pronoun("boy") + "! ",
            button: [
                { chatID: -1, text: "[Lay down and open your mouth]", callback: "zoey11" },
            ]
        },
        {
            chatID: 8,
            speaker: "zoey",
            text: "Hehe. Tellement bizarre. I have to get to work. Miam miam. ",
            button: [
                { chatID: -1, text: "[Gulp down the last of her piss and get dressed]", callback: "zoey12" },
            ]
        },
        {
            chatID: 9,
            speaker: "!cindy",
            text: "Well well, lookie here. It seems we got ourselves a pervert trying to " +
                "watch people pissing. ",
            button: [
                { chatID: 10, text: "...oh", callback: "w1" }
            ]
        },
        {
            chatID: 10,
            speaker: "!cindy",
            text: "I'm about to give you the best seat in the house for the piss show " + 
                gender.pronoun("girl") + ". Strip off them clothes and kneel at my feet. ",
            button: [
                { chatID: -1, text: "ok", callback: "w2" },
                { chatID: -1, text: "*YELP* [Run away!]", callback: "leave" },
            ]
        },
        {
            chatID: 11,
            speaker: "thinking",
            text: "What the fuck! I'm not letting some guy piss in my mouth! I've got to get " +
                "out of here! ",
            button: [
                { chatID: -1, text: "*YELP* [Need Piss level 5]", callback: "leave" },
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "It's so warm and salty... I am the ultimate piss whore! I'm squatting naked " +
                "in a public bathroom so some stranger can piss in my mouth and my body. Who " +
                "else fucking does that? I'm totally going to masturbate to this later to " +
                "this humiliation. ",
            button: [
                { chatID: -1, text: "[Finish gulping his warm yummy piss] Thank you sir!", callback: "resetUndo" },
            ]
        },
        {
            chatID: 13,
            speaker: "thinking",
            text: "It's getting late. I better leave. ",
            button: [
                { chatID: -1, text: "[Leave]", callback: "leave" },
            ]
        },

        

        {
            chatID: 0,
            speaker: "me",
            text: "This place is creepy...",
            button: [
                { chatID: -1, text: "Wait here", callback: "wait" },
                { chatID: -1, text: "Get out!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "It's too late to wait for someone here.",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Hmmm. An hour's passed an nothing. Maybe I'm not attactive enough. ",
            button: [
                { chatID: -1, text: "Leave", callback: "leave" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Time has passed...",
            button: [
                { chatID: -1, text: "...", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "random",
            text: "Oh look, a present for me. Strip and get on your knees toilet.",
            button: [
                { chatID: -1, text: "Do as he says", callback: "s1" },
                { chatID: -1, text: "Squeel and run away", callback: "leave60" }
            ]
        },
        {
            chatID: 5,
            speaker: "random",
            text: "Good toilet. Now thank me and clean up. ",
            button: [
                { chatID: -1, text: "Thank you sir. ", callback: "reset" }
            ]
        },
        {
            chatID: 6,
            speaker: "zoey",
            text: sc.n("me") + " are you waiting in here so you can be someone's toilet? ",
            button: [
                { chatID: 8, text: "Uhhh yea", callback: "" },
                { chatID: 7, text: "Wha. No. Gross", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "zoey",
            text: "Well I need to pee, and there's only one bathroom, so if you don't mind.",
            button: [
                { chatID: -1, text: "I was just finishing up. Later.", callback: "leave60" }
            ]
        },
        {
            chatID: 8,
            speaker: "zoey",
            text: "Sigh, fine lay down. You can be my toilet. Strip off your clothes so you don't drip pee all over my bar. ",
            button: [
                { chatID: 9, text: "Sweet!", callback: "z1" }
            ]
        },
        {
            chatID: 9,
            speaker: "zoey",
            text: "You better be ready cause once I start I can not stop. ",
            button: [
                { chatID: 10, text: "I'm ready.", callback: "z2" }
            ]
        },
        {
            chatID: 10,
            speaker: "zoey",
            text: "Bois mon pipi",
            button: [
                { chatID: 11, text: "Slurp, gurgle", callback: "z3" }
            ]
        },
        {
            chatID: 11,
            speaker: "zoey",
            text: "Hahaha. Fille dégoûtante. Don't drip any of that on my floor, there's enough gross things I have to clean up. ",
            button: [
                { chatID: 12, text: "Lol ok " + sc.n("zoey") + ". ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "zoey",
            text: "Ok, I've got to get back to work. Later ma petite amie.",
            button: [
                { chatID: -1, text: "See ya. ", callback: "leave60" }
            ]
        },
        {
            chatID: 13,
            speaker: "zoey",
            text: "je vais pisser. Get out.",
            button: [
                { chatID: -1, text: "Ok", callback: "leave60" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};