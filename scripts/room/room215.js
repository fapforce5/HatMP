//Whore Room
var room215 = {};
room215.main = function () {
    if (g.pass === "dirtydirtywhore") {
        zcl.displayMain(300, 800, .09, "clothes", false);
        sc.select("relax", "215_pink/icon_relax.webp", 0);
        sc.select("wait", "193_afternoon/icon_wait.webp", 1);
    }
    else if (!sissy.st[23].ach) {
        chat(0, 215);
    }
    else if (sc.getMissionTask("p", "pink", 4).notStarted) {
        nav.bg("215_pink/p_first.jpg");
        chat(1, 215);
    }
    else {
        sc.select("relax", "215_pink/icon_relax.webp", 0);
        sc.select("whore", "215_pink/icon_whore.webp", 1);
    }
    nav.buildnav([213, 214, 171, 170]);
};

room215.btnclick = function (name) {
    switch (name) {
        case "relax":
            char.room(185);
            break;
        case "whore":
            nav.kill();
            zcl.displayMain(300, 800, .09, "clothes", false);
            sc.select("relax", "215_pink/icon_relax.webp", 0);
            sc.select("wait", "193_afternoon/icon_wait.webp", 1);
            break;
        case "wait":
            if (g.gethourdecimal() > 3 && g.gethourdecimal() < 7) {
                chat(4, 215);
                return;
            }
            char.addtime(30);
            if (g.rand(0, 4) === 0) {
                nav.button({
                    "type": "btn",
                    "name": "skank",
                    "left": 1315,
                    "top": 371,
                    "width": 217,
                    "height": 662,
                    "image": "215_pink/skank.webp"
                }, 215);
            }

            var thisFame = Math.floor(10 - levels.get("fame").l / 2);
            if (thisFame < 1)
                thisFame = 1;

            if (g.rand(0, thisFame) === 0) {
                nav.killbutton("relax");
                nav.killbutton("wait");

                var customerList = [1, 2, 3, 4];
                if (!daily.get("whore_river") && sc.getMission("landlord", "sissy").startedOrComplete) 
                    customerList.push(0);
                if (!daily.get("whore_beaver"))
                    customerList.push(5);

                var thisCustomer = customerList[g.rand(0, customerList.length)];

                switch (thisCustomer) {
                    case 0: //riverstart0
                        daily.set("riverwhore");
                        if (sc.getMission("landlord", "sissy").notStarted) {
                            nav.killbutton("skank");
                            nav.button({
                                "type": "img",
                                "name": "skank",
                                "left": 1315,
                                "top": 371,
                                "width": 217,
                                "height": 662,
                                "image": "215_pink/skank.webp"
                            }, 215);
                            nav.button({
                                "type": "img",
                                "name": "river",
                                "left": 937,
                                "top": 121,
                                "width": 465,
                                "height": 959,
                                "image": "215_pink/river0.webp"
                            }, 215);
                            chat(5, 215);
                        }
                        else {
                            nav.button({
                                "type": "img",
                                "name": "river",
                                "left": 937,
                                "top": 121,
                                "width": 465,
                                "height": 959,
                                "image": "215_pink/river0.webp"
                            }, 215);
                            chat(8, 215);
                        }
                        break;
                    case 1: //triostart0
                        nav.killbutton("sporty");
                        nav.button({
                            "type": "img",
                            "name": "sporty",
                            "left": 347,
                            "top": 316,
                            "width": 184,
                            "height": 698,
                            "image": "215_pink/sporty.webp"
                        }, 215);

                        nav.button({
                            "type": "img",
                            "name": "trio",
                            "left": 439,
                            "top": 151,
                            "width": 1392,
                            "height": 929,
                            "image": "215_pink/trio.webp"
                        }, 215);
                        chat(10, 215);
                        break;
                    case 2://femdom0
                        nav.button({
                            "type": "img",
                            "name": "femdom0",
                            "left": 881,
                            "top": 243,
                            "width": 460,
                            "height": 837,
                            "image": "215_pink/femdom0.webp"
                        }, 215);
                        chat(12, 215);
                        break;
                    case 3: //bbc
                        nav.button({
                            "type": "img",
                            "name": "femdom0",
                            "left": 814,
                            "top": 0,
                            "width": 686,
                            "height": 1080,
                            "image": "215_pink/bbc0.webp"
                        }, 215);
                        chat(17, 215);
                        break;
                    case 4: //bwc
                        nav.button({
                            "type": "img",
                            "name": "femdom0",
                            "left": 992,
                            "top": 0,
                            "width": 787,
                            "height": 1080,
                            "image": "215_pink/bwc.webp"
                        }, 215);
                        chat(18, 215);
                        break;
                    case 5: //beaver girls
                        nav.killbutton("skank");
                        nav.button({
                            "type": "btn",
                            "name": "skank",
                            "left": 1315,
                            "top": 371,
                            "width": 217,
                            "height": 662,
                            "image": "215_pink/skank.webp"
                        }, 215);
                        nav.button({
                            "type": "img",
                            "name": "femdom0",
                            "left": 615,
                            "top": 248,
                            "width": 1130,
                            "height": 832,
                            "image": "215_pink/beaver0.webp"
                        }, 215);
                        if (sc.getMission("holly", "mad").startedOrComplete) {
                            chat(14, 215);
                        }
                        else {
                            chat(16, 215);
                        }
                        
                }
            }
            else {
                g.popUpNoticeBottom("No customers. Try raising your fame to reduce your wait. ");
            }
            break;
        case "skank":
            chat(900, 215);
            break;
        default:
            break;
    }
};

room215.chatcatch = function (callback) {
    switch (callback) {
        case "pay200":
            if (gv.get("money") > 199) {
                sc.completeMissionTask("p", "pink", 4);
                gv.mod("money", -200);
                chat(3, 215);
            }
            else {
                chat(2, 215);
            }
            break;
        case "river1":
            nav.killbutton("river");
            nav.button({
                "type": "img",
                "name": "river",
                "left": 627,
                "top": 121,
                "width": 855,
                "height": 959,
                "image": "215_pink/river1.webp"
            }, 215);
            break;
        case "riverstart0":
            g.pass = "riverstart0";
            char.room(183);
            break;
        case "triostart0":
            g.pass = "triostart0";
            char.room(183);
            break;
        case "femdom0":
            g.pass = "femdom0";
            char.room(183);
            break;
        case "beaver0":
            g.pass = "beaver0";
            char.room(183);
            break;
        case "bbc0":
            g.pass = "bbc0";
            char.room(183);
            break;
        case "bwc0":
            g.pass = "bwc0";
            char.room(183);
            break;
        case "resetwhore":
            nav.kill();
            zcl.displayMain(300, 800, .09, "clothes", false);
            sc.select("relax", "215_pink/icon_relax.webp", 0);
            sc.select("wait", "193_afternoon/icon_wait.webp", 1);
            break;
        case "reset":
            char.room(215);
            break;
        default:
            break;
    }
};

room215.chat = function (chatID) {
    if (chatID === 900) {
        if (cl.stinky()) {
            return {
                chatID: 900,
                speaker: "!skank",
                text: "Bitch, you small like an unflushed toilet. You need to take your " +
                    "ass out of here. You're scaring away MY customers.",
                button: [
                    { chatID: -1, text: "...bitch", callback: "" }
                ]
            };
        }
        if (cl.isLewd() && gender.canUseCock()) {
            return {
                chatID: 900,
                speaker: "!skank",
                text: "You need to take that big dick of yours and swing it out of here! ",
                button: [
                    { chatID: -1, text: "I do have a big dick 😊", callback: "" }
                ]
            };
        }
        else {
            let txtRand = [
                "Hahaha! You have such a tiny dick I would charge you double if you tried to fuck me since it would take so long to find it!",
                "Go back to your room. We all know these guys want to fuck a pussy.",
                "I don't know why you're trying to sell your ass. Everyone knows sissies give it up for free.",
                "Your farts smell like cum. ",
            ];
            return {
                chatID: 900,
                speaker: "!skank",
                text: txtRand[g.rand(0, txtRand.length)],
                button: [
                    { chatID: -1, text: "...bitch", callback: "" }
                ]
            };
        }
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Gross! I'm not some whore!!!! There's no way I'll let a bunch " +
                "of anonymous men stick their penis in my butt for money!",
            button: [
                { chatID: -1, text: "[Need to unlock Whore in the sissy menu]", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "p",
            text: "So, you want to be a dirty dirty whore! That's my sissy slut! " +
                "I'll tell you what, usually I make my dirty whores pay $1000 a month, " +
                "plus a percentage of their profits for one of my private rooms, but " +
                "for you I'll make you a deal since you're Missy's favorite sissy. " +
                "You can have the room for $200 with no monthly rent and I'll only " +
                "take a percentage of your profits. Deal? ",
            button: [
                { chatID: -1, text: "Sweet! That's a deal!", callback: "pay200" },
                { chatID: -1, text: "Oh, no. I'm just looking. ", callback: "" },
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "Oh crap. I don't have $200. I'll be back to get the room after I've " +
                "earned it!",
            button: [
                { chatID: -1, text: "Ok. I'll be here.", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "p",
            text: "That's my cock hungry bitch! Feel free to explore the room befor you " +
                "bend that fine ass over for those thick gooey cum loads! ",
            button: [
                { chatID: -1, text: "You're the best! ", callback: "reset" },
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "It's so late, no one is coming by. ",
            button: [
                { chatID: -1, text: "[Give up]", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "river",
            text: "Hey slut! You want my dick up your butt? ",
            button: [
                { chatID: 6, text: "Fuck off " + sc.n("river") + "! I'm never fucking you! ", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "!skank",
            text: "Aren't you a real man! Shove that huge cock up my pussy baby! ",
            button: [
                { chatID: 7, text: "*grrrrr*", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "river",
            text: "Later loser! Gunna get my dick wet!",
            button: [
                { chatID: -1, text: "*sigh*", callback: "resetwhore" },
            ]
        },
        {
            chatID: 8,
            speaker: "river",
            text: "Hey skidmark. figures a loser like you would be in here. I'm going to show you what a real man's cock " +
                "looks like.",
            button: [
                { chatID: 9, text: "Fuck off " + sc.n("river") + "! I'm never fucking you! ", callback: "river1" },
            ]
        },
        {
            chatID: 9,
            speaker: "landlord",
            text: sc.n("me") + "! What the hell! Both of you, get in that room this instant!",
            button: [
                { chatID: -1, text: sc.n("landlord") + "! What are you doing here?", callback: "riverstart0" }
            ]
        },
        {
            chatID: 10,
            speaker: "!boy",
            text: "Hey! We saw you in the other room and uhh. Yout're like really hot, " +
                "and uhhh can we all fuck you?",
            button: [
                { chatID: -1, text: "Yeah! I can totally take 3 cocks at once!", callback: "triostart0" },
                { chatID: 11, text: "I'll pass", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "sporty",
            text: "OH sweet! I'll take you all at once!!! ",
            button: [
                { chatID: -1, text: "...", callback: "resetwhore" }
            ]
        },
        {
            chatID: 12,
            speaker: "!girl",
            text: "I've had the worst day and need to break a little thing youself in half! You in?",
            button: [
                { chatID: -1, text: "I'm ready to be hurt again. ", callback: "femdom0" },
                { chatID: 13, text: "I'll pass", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "!girl",
            text: "Your loss little thing. ",
            button: [
                { chatID: -1, text: "I'll pass", callback: "resetwhore" }
            ]
        },
        {
            chatID: 14,
            speaker: "holly",
            text: "Oh look, it's that traitor bitch! ",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "dolly",
            text: "We're lookin' for a lil fun, and, honey, you ain't it. We're going " +   
                "to choose anyone else but you! You're like a mouthful of bees!",
            button: [
                { chatID: -1, text: "...", callback: "resetwhore" }
            ]
        },
        {
            chatID: 16,
            speaker: "molly",
            text: "Why hello. We're so happy you're working today! You want to go and " +
                "have a little fun?",
            button: [
                { chatID: -1, text: "That's my kind fun! ", callback: "beaver0" },
                { chatID: -1, text: "I'll pass", callback: "resetwhore" }
            ]
        },
        {
            chatID: 17,
            speaker: "!bbc",
            text: "Yo. I wanna fill that ass! ",
            button: [
                { chatID: -1, text: "My ass was made to be filled! ", callback: "bbc0" },
                { chatID: -1, text: "I'll pass", callback: "resetwhore" }
            ]
        },
        {
            chatID: 18,
            speaker: "!bwc",
            text: "Great butt! You go ass to mouth?",
            button: [
                { chatID: -1, text: "I do what ever you want! ", callback: "bwc0" },
                { chatID: -1, text: "I'll pass", callback: "resetwhore" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};