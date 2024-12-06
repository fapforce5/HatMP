//Room name
var room876 = {};
room876.main = function () {
    var cheerlevel = levels.get("cheer").l;
    if (cheerlevel === 0) {
        if (sc.getMission("stacy", "cheer").notStarted) {
            sc.show("stacy");
            sc.startMission("stacy", "cheer");
        }
        nav.bg("876_gym/tryout.jpg");
        zcl.displayMain(350, 1000, .07, "clothes", false);
        chat(0, 876);
    }
    else if (cheerlevel === 1) {
        nav.bg("876_gym/tryout.jpg");
        zcl.displayMain(350, 1000, .07, "clothes", false);
        chat(39, 876);
    }
    else if (cheerlevel === 2) {
        nav.bg("876_gym/tryout.jpg");
        cl.nude();
        zcl.displayMain(350, 1000, .07, "clothes", false);
        chat(50, 876);
    }
    else if (cheerlevel === 3) {
        nav.bg("876_gym/pc_hips.jpg");
        chat(65, 876);
    }
    else if (cheerlevel === 4) {
        nav.bg("876_gym/sc_hips.jpg");
        chat(76, 876);
    }
    else if (cheerlevel === 5) {
        nav.bg("876_gym/routine1_3.jpg");
        chat(90, 876);
    }
    else if (cheerlevel === 6) {
        nav.bg("876_gym/cheer6_1.jpg");
        chat(104, 876);
    }
    else if (cheerlevel === 7) {
        nav.bg("876_gym/cheer6_1.jpg");
        chat(126, 876);
    }
    else if (cheerlevel === 8) {
        nav.bg("876_gym/cheer8_1.jpg");
        chat(127, 876);
    }
    else {
        nav.bg("876_gym/cheer8_1.jpg");
        chat(147, 876);
    }
};

room876.btnclick = function (name) {
    switch (name) {
        case "1_1":
            nav.killbutton("1_1");
            if (levels.get("cheer").c > 90) {
                nav.bg('876_gym/pn_hips.jpg');
                chat(43, 876);
            }
            else {
                nav.bg("876_gym/meet5.jpg");
                nav.next("1_1x");
            }
            break;
        case "1_1x":
            nav.killbutton("1_1x");
            nav.bg("876_gym/meet6.jpg");
            chat(41, 876);
            break;
        case "cheer5":
            nav.bg("876_gym/cheer5_" + g.internal + ".jpg")
            if (g.internal === 8) {
                nav.killbutton("cheer5");
                chat(98, 876);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room876.chatcatch = function (callback) {
    switch (callback) {
        case "meet0":
            zcl.displayMain(380, 1000, .07, "clothes", true);
            break;
        case "meet1":
            zcl.displayMain(350, 1000, .07, "clothes", false);
            break;
        case "meet2":
            cl.nude();
            cl.c.chastity = null;
            zcl.displayMain(350, 1000, .07, "clothes", false);
            break;
        case "meet3":
            tempList = new Array();
            if (cl.c.chest < 2)
                tempList.push(" tits are too small");
            if (cl.c.leg < 2)
                tempList.push(" butt is too manly");
            if (cl.c.hairLength < 2)
                tempList.push(" hair is too short");
            if (cl.getBodyHair() !== null)
                tempList.push(" body hair is gross");
            if (cl.c.cock < 3)
                tempList.push(" cock is too big");

            if (tempList.length === 0) {
                sc.completeMissionTask("stacy", "cheer", 0);
                chat(15, 876);
            }
            else {
                if (tempList.length > 1) {
                    var last = tempList.pop();
                    g.internal = tempList.join(", ") + " and " + last;
                }
                else {
                    g.internal = tempList.pop();
                }
                chat(999, 876);
            }
            break;
        case "meet4":
            nav.killall();
            nav.bg("876_gym/meet4.jpg");
            break;
        case "meet5":
        case "meet6":
        case "meet7":
        case "meet8":
        case "meet9":
        case "meet10":
        case "meet11":
        case "meet12":
        case "meet13":
        case "meet14":
        case "meet15":
        case "meet16":
        case "meet17":
        case "routine1_4":
        case "routine1_5":
        case "routine1_6":
        case "routine2_2":
        case "routine2_4":
        case "routine2_1_3":
        case "routine2_1_4":
        case "routine2_1_5":
        case "routine2_1_6":
        case "routine2_1_7":
        case "routine2_1_8":
        case "cheer5_1":
        case "cheer5_2":
        case "cheer5_3":
        case "cheer5_5":
        case "cheer5_6":
        case "cheer5_7":
        case "cheer5_8":
        case "cheer5_9":
        case "cheer5_11":
        case "cheer5_12":
        case "cheer5_13":
        case "cheer6_1":
        case "cheer6_1_5":
        case "cheer6_2":
        case "cheer6_3":
        case "cheer6_4":
        case "cheer6_5_1":
        case "cheer6_5_2":
        case "cheer6_5_3":
        case "cheer6_5_4":
        case "cheer6_6":
        case "cheer6_7":
        case "cheer6_8":
        case "cheer8_2":
        case "cheer8_3":
        case "cheer8_4":
        case "cheer8_5":
        case "cheer8_6":
        case "cheer8_7":
        case "cheer8_8":
        case "cheer10_1":
        case "cheer10_2":
        case "cheer10_3":
            nav.kill();
            nav.bg("876_gym/" + callback + ".jpg");
            break;
        case "meet18":
            cl.undo();
            levels.mod("xdress", 50);
            levels.mod("sub", 20);
            levels.set("cheer", 20, 1);
            char.settime(15, 37);
            char.room(0);
            break;
        case "1_0":
            cl.nude();
            zcl.displayMain(350, 1000, .07, "clothes", false);
            break;
        case "1_1":
            nav.killall();
            nav.bg("876_gym/meet4.jpg");
            nav.next("1_1");
            break;
        case "leave":
            cl.undo();
            char.settime(12, 37);
            char.room(875);
            break;
        case "routine1":
            g.internal = {
                step: 0,
                outfit: false,
                finish: 0,
                alone: false,
                t: [
                    { t: "We're the Stars, we like to fight", p: "hips" },
                    { t: "Let's go team and win tonight", p: "hips" },
                    { t: "Clap twice", p: "clap" },
                    { t: "Our boys are big and strong", p: "hips" },
                    { t: "Think you'll win, then you are wrong", p: "hips" },
                    { t: "Clap twice", p: "clap" },
                    { t: "Your boys are small and sick", p: "hips" },
                    { t: "We'll slap you with our giant dick", p: "hips" },
                    { t: "Raise your hand in the air", p: "v" }
                ]
            };
            break;
        case "routine2":
            g.internal = {
                step: 0,
                outfit: true,
                finish: 2,
                alone: false,
                t: [
                    { t: "Fetvill Stars, Fetville Stars", p: "hips" },
                    { t: "Don't be shy, stand up and give your battle cry", p: "hips" },
                    { t: "V-I-C-T-O-R-Y", p: "v" },
                    { t: "We'll smash you like a fucking flea", p: "hips" },
                    { t: "We're the best around I guarantee", p: "hips" },
                    { t: "D-E-F-E-N-S-E", p: "v" },
                    { t: "Your quarterback is running dry", p: "hips" },
                    { t: "We'll fuck you in your P-U-S-S-Y", p: "j" }
                ]
            };
            break;
        case "setupRoutine1":
            nav.killall();
            nav.bg("876_gym/pn_hips.jpg");
            break;
        case "doRoutine1":
            if (g.internal.step >= g.internal.t.length) {
                switch (g.internal.finish) {
                    case 0:
                        nav.bg("876_gym/pn_turn.jpg");
                        chat(46, 876);
                        break;
                    case 1:
                        nav.bg("876_gym/routine1_1.jpg")
                        chat(57, 876);
                        break;
                    case 2:
                        nav.bg("876_gym/pc_hips.jpg");
                        chat(66, 876);
                        break;
                    case 3:
                        nav.bg("876_gym/pc_hips.jpg");
                        chat(77, 876);
                        break;
                };
            }
            else {
                var tx = g.internal.t[g.internal.step];
                var cs = (g.internal.alone ? "s" : "p") + (g.internal.outfit ? "c_" : "n_");
                nav.bg("876_gym/" + cs + tx.p + ".jpg");
                if (g.internal.alone)
                    chat(1001, 876);
                else
                    chat(1000, 876);
            }
            break;
        case "routine1_kick":
            nav.bg("876_gym/kick.jpg");
            break;
        case "routine1_kick1":
            nav.bg("876_gym/kick1.jpg")
            break;
        case "routine1_kick2":
            nav.bg("876_gym/meet9.jpg");
            break;
        case "routine1_kick3":
            cl.undo();
            levels.mod("sub", 20);
            sc.completeMissionTask("stacy", "cheer", 1)
            levels.set("cheer", 20, 2);
            char.settime(15, 37);
            char.room(0);
            break;
        case "routine1_1":
            nav.killall();
            nav.bg("876_gym/sn_hips.jpg");
            if (levels.get("cheer").c < 90) {
                chat(51, 876);
            }
            else {
                room876.chatcatch("routine1");
                g.internal.alone = true;
                g.internal.finish = 1;
                chat(1001, 876);
            }
            break;
        case "routine1_2":
            nav.bg("876_gym/routine1_2.jpg");
            break;
        case "routine1_3":
            sc.completeMissionTask("stacy", "cheer", 2);
            sc.completeMissionTask("stacy", "cheer", 3);
            cl.c.panties = "cl";
            cl.c.pants = "cl";
            cl.c.shirt = "cl";
            cl.c.socks = "cl";
            cl.c.shoes = "cl";
            cl.add("panties", "cl");
            cl.add("pants", "cl");
            cl.add("shirt", "cl");
            cl.add("socks", "cl");
            cl.add("shoes", "cl");
            cl.display();
            nav.bg("876_gym/routine1_3.jpg");
            break;
        case "routine1_7":
            levels.mod("sub", 20);
            levels.set("cheer", 20, 3);
            char.settime(20, 7);
            char.room(0);
            break;
        case "routine2_1":
            room876.chatcatch("routine2");
            chat(1000, 876);
            break;
        case "routine2_3":
            nav.bg("876_gym/meet9.jpg");
            break;
        case "routine2_5":
            levels.mod("sub", 20);
            levels.set("cheer", 20, 4);
            char.settime(20, 7);
            char.room(0);
            break;
        case "routine2_1_1":
            room876.chatcatch("routine2");
            g.internal.alone = true;
            g.internal.finish = 3;
            chat(1001, 876);
            break;
        case "routine2_1_2":
            nav.bg("876_gym/routine1_3.jpg");
            break;
        case "routine2_1_9":
            levels.oralGive(4, false, false, "f");
            levels.set("cheer", 20, 5);
            char.settime(20, 7);
            char.room(0);
            break;
        case "cheer5_4":
            g.internal = 5;
            nav.bg("876_gym/cheer5_4.jpg");
            nav.next("cheer5");
            break;
        case "cheer5_10":
            nav.bg("876_gym/" + callback + ".jpg");
            break;
        case "cheer5_14":
            levels.anal(5, true);
            levels.set("cheer", 20, 6);
            cl.add("accessories", "pompom");
            char.settime(20, 7);
            char.room(0);
            break;
        case "cheer6_9":
            sc.completeMissionTask("stacy", "cheer", 4);
            levels.set("cheer", 20, 7);
            char.settime(20, 7);
            char.room(0);
            break;
        case "cheer8_9":
            levels.set("cheer", 20, 9);
            levels.anal(5, false, "m", true);
            char.settime(17, 7);
            char.room(0);
            break;
        case "cheer8_9bad":
            levels.set("cheer", 100, 9);
            char.settime(17, 7);
            char.room(0);
            break;
        case "cheer10_4":
            char.settime(17, 7);
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            char.room(0);
            break;
        case "exit":
            char.settime(16, 7);
            char.room(0);
            break;
        default:
            break;
    }
};

room876.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "stacy",
            text: "She not cheerleader material at all. Her " + g.internal + ". We're cheerleaders, not some gross roller " +
                "derby skanks. When you stop being a disgusting neckbeard you can try out again. ",
            button: [
                { chatID: 13, text: "huh", callback: "" }
            ]
        };
    }
    else if (chatID === 1000) {
        var c1000 = {
            chatID: 1000,
            speaker: "stacy",
            text: g.internal.t[g.internal.step].t,
            button: [
                { chatID: -1, text: g.internal.t[g.internal.step].t, callback: "doRoutine1" }
            ]
        }
        g.internal.step++;
        return c1000
    }
    else if (chatID === 1001) {
        var c1001 = {
            chatID: 999,
            speaker: "me",
            text: g.internal.t[g.internal.step].t,
            button: [
                { chatID: -1, text: "...", callback: "doRoutine1" }
            ]
        }
        g.internal.step++;
        return c1001
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "stacy",
                text: "So this is the new girl you were talking about " + sc.n("candy") + "? ",
                button: [
                    { chatID: 1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "candy",
                text: "It is. I think she'll make a great cheerleader. ",
                button: [
                    { chatID: 2, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "stacy",
                text: "Hmmm. Turn around. We have to see your butt. ",
                button: [
                    { chatID: 3, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "courtney",
                text: "Show us your butt. Turn around and face the other way idiot. ",
                button: [
                    { chatID: 4, text: "Oh. Sure", callback: "meet0" }
                ]
            },
            {
                chatID: 4,
                speaker: "stacy",
                text: "Hmmmm.... ",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "stacy",
                text: "Turn back around and face us. ",
                button: [
                    { chatID: 6, text: "ok...", callback: "meet1" }
                ]
            },
            {
                chatID: 6,
                speaker: "courtney",
                text: "Are you hiding some fat under your shirt? How do we know she's not hiding fat under her clothing? ",
                button: [
                    { chatID: 7, text: "...", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "candy",
                text: "She's not fat. She's really fit. ",
                button: [
                    { chatID: 8, text: "Yeah. I really am. ", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "stacy",
                text: "Prove it. Strip down. Everything. We need to make sure you don't have anything weird like ugly feet. ",
                button: [
                    { chatID: 9, text: "Huh ?", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "courtney",
                text: "What are you, stupid. Strip down. No ugly girls allowed here. All of it.",
                button: [
                    { chatID: 10, text: "Remove everything. ", callback: "meet2" },
                    { chatID: -1, text: "Run away crying. ", callback: "leave" }
                ]
            },
            {
                chatID: 10,
                speaker: "courtney",
                text: "Oh My God! Is that a dick! " + sc.n("candy") + " does she have a dick? ",
                button: [
                    { chatID: 11, text: "Oh, well ", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "candy",
                text: "Yes it's a dick, but she's an amazing girl that deserves a chance. Don't judge her by whether or " +
                    "not she has a dick, but how hot her body is. ",
                button: [
                    { chatID: 13, text: "Thanks.. ", callback: "meet3" }
                ]
            },
            {
                chatID: 12,
                speaker: "candy",
                text: "Yes it's a dick, but she's an amazing girl that deserves a chance. Don't judge her by whether or " +
                    "not she has a dick, but how hot her body is. ",
                button: [
                    { chatID: -1, text: "Thanks.. ", callback: "meet3" }
                ]
            },
            {
                chatID: 13,
                speaker: "courtney",
                text: "Yeah. No uggos allowed.  ",
                button: [
                    { chatID: 14, text: "oh", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "candy",
                text: "Sorry honey. Just keep working on yourself and we'll try again. ",
                button: [
                    { chatID: -1, text: "oh, ok.", callback: "leave" }
                ]
            },
            {
                chatID: 15,
                speaker: "stacy",
                text: "I guess you're ok. Not quite as pretty as us, but we can work on that. Maybe we'll just put you " +
                    "in the back. ",
                button: [
                    { chatID: 16, text: "Thanks. I think. ", callback: "" }
                ]
            },
            {
                chatID: 16,
                speaker: "courtney",
                text: "So can you cheer or just stand there looking pretty? ",
                button: [
                    { chatID: 17, text: "Oh well, I haven't cheered before. ", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "candy",
                text: "She can learn. When I started I hadn't cheered before and look at me now! I am cheer-tastic.  ",
                button: [
                    { chatID: 18, text: "I can do it!", callback: "" }
                ]
            },
            {
                chatID: 18,
                speaker: "stacy",
                text: "Training a new cheerleader is a lot of work. So how bad do you want this? Are you willing to do " +
                    "anything we say, no questions asked?  ",
                button: [
                    { chatID: 19, text: "a-a-anything? ", callback: "" }
                ]
            },
            {
                chatID: 19,
                speaker: "candy",
                text: "Don't worry too much. Each of us agreed to this before we could join. ",
                button: [
                    { chatID: 20, text: "Ok. I'm in! Should I get dressed? ", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "courtney",
                text: "Hahahah, no. Do a cartwheel ! ",
                button: [
                    { chatID: 21, text: "I don't know, I've never done... ", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "courtney",
                text: "Shut up! Just do a cartwheel maggot!",
                button: [
                    { chatID: 22, text: ". ok", callback: "meet4" }
                ]
            },
            {
                chatID: 22,
                speaker: "thinking",
                text: "Oh My God! I can do it!",
                button: [
                    { chatID: 23, text: "...", callback: "meet5" }
                ]
            },
            {
                chatID: 23,
                speaker: "thinking",
                text: "Aaaaaa",
                button: [
                    { chatID: 24, text: "...", callback: "meet6" }
                ]
            },
            {
                chatID: 24,
                speaker: "courtney",
                text: "That was the worst cartwheel I've ever seen! ",
                button: [
                    { chatID: 25, text: "Ooof", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "candy",
                text: "Hahaha, yeah that was pretty bad.",
                button: [
                    { chatID: 26, text: "...", callback: "meet7" }
                ]
            },
            {
                chatID: 26,
                speaker: "stacy",
                text: "You're a complete embarrassment. My little sister can do better than you and she's 10! You have " +
                    "the coordination of a Parkinson's patient. We aren't the clown squad, we're the cheerleaders for the Fetville " +
                    "Stars! The best college football team in the state. Your face is ugly, your feet are huge, your hair is " +
                    "stupid, and your fat like a piggy! Fry like bacon you fat piggy! ",
                button: [
                    { chatID: 27, text: "Huh? ", callback: "meet8" }
                ]
            },
            {
                chatID: 27,
                speaker: "stacy",
                text: "And you're too stupid to follow simple directions! A pig is smarter than you. You're tiny little weiner " +
                    "looks like a little hot dog. Are you a hot dog? ",
                button: [
                    { chatID: 28, text: "..a hot dog? ", callback: "meet9" }
                ]
            },
            {
                chatID: 28,
                speaker: "courtney",
                text: "Yeah. A nasty gross hot dog. " + sc.n("candy") + " get the ketchup and mustard. We're going to have " +
                    "hotdogs for lunch. You just lay there hotdog. ",
                button: [
                    { chatID: 29, text: "...", callback: "meet10" }
                ]
            },
            {
                chatID: 29,
                speaker: "stacy",
                text: "Hotdogs don't curl up. Stretch out like a hotdog! Can't you do anything right? ",
                button: [
                    { chatID: 30, text: "Hmmmm", callback: "meet11" }
                ]
            },
            {
                chatID: 30,
                speaker: "courtney",
                text: "Now just lay there hot dog. We're going to make lunch! ",
                button: [
                    { chatID: 31, text: "...", callback: "meet12" }
                ]
            },
            {
                chatID: 31,
                speaker: "courtney",
                text: "Hahaha. Every hotdog needs ketchup and mustard!  ",
                button: [
                    { chatID: 32, text: "...", callback: "meet13" }
                ]
            },
            {
                chatID: 32,
                speaker: "stacy",
                text: "Now open your mouth. I want to spit in it you stupid loser! ",
                button: [
                    { chatID: 33, text: "...", callback: "meet14" }
                ]
            },
            {
                chatID: 33,
                speaker: "courtney",
                text: "I want to spit on the piggy too! ",
                button: [
                    { chatID: 34, text: "...", callback: "meet15" }
                ]
            },
            {
                chatID: 34,
                speaker: "stacy",
                text: "You're lower than dirt. You are poopy scum that deserves to be spit on. ",
                button: [
                    { chatID: 35, text: "...", callback: "meet16" }
                ]
            },
            {
                chatID: 35,
                speaker: "thinking",
                text: "Ugh! " + sc.n("courtney") + " needs to brush her teeth. Her spit tastes like cigarettes. ",
                button: [
                    { chatID: 36, text: "...", callback: "" }
                ]
            },
            {
                chatID: 36,
                speaker: "candy",
                text: "Ok. You can get up now. We're going to hose you off, then we have to get back to practice. ",
                button: [
                    { chatID: 37, text: "Thank god", callback: "meet17" }
                ]
            },
            {
                chatID: 37,
                speaker: "stacy",
                text: "You were a good maggot. We'll let you continue to train with us. Practice your cartwheels and we'll " +
                    "go over the cheers next time. ",
                button: [
                    { chatID: 38, text: "Ugh", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "thinking",
                text: "Why the hell would I want to come back. I thought I was just going to learn some cheers, but here I " +
                    "am covered in ketchup and mustard getting hosed off by the coldest water in this town naked in front " +
                    "of the gym with those people watching. Why couldn't I just use the shower! And these bitches! They think " +
                    "they're so much better than everyone! I should just quit! But I've always wanted to be a cheerleader and " +
                    "cheer at the football games! Fuck that water's cold.",
                button: [
                    { chatID: -1, text: "....", callback: "meet18" }
                ]
            },
            {
                chatID: 39,
                speaker: "stacy",
                text: "Ok. strip it off. We need to make sure you haven't gotten fat since you were last here. ",
                button: [
                    { chatID: 40, text: "[strip]", callback: "1_0" }
                ]
            },
            {
                chatID: 40,
                speaker: "stacy",
                text: "Now do a cartwheel so we can see if you've been practicing. ",
                button: [
                    { chatID: -1, text: "...", callback: "1_1" }
                ]
            },
            {
                chatID: 41,
                speaker: "courtney",
                text: "UGH! You're still terrible! You didn't practice enough! Clumsy idiots just waste our time! ",
                button: [
                    { chatID: 42, text: "...", callback: "" }
                ]
            },
            {
                chatID: 42,
                speaker: "candy",
                text: "You should practice some more in your room, then come back. We've got to get back to practicing. ",
                button: [
                    { chatID: -1, text: "Ok. I'll practice more in my room. ", callback: "leave" }
                ]
            },
            {
                chatID: 43,
                speaker: "candy",
                text: "A-W-E  S-O-M-E, AWESOME. I'm so happy you practiced! That was the best! ",
                button: [
                    { chatID: 44, text: "Thanks! I did practice so much!", callback: "routine1" }
                ]
            },
            {
                chatID: 44,
                speaker: "stacy",
                text: "That was fine. You can do your first practice with us. ",
                button: [
                    { chatID: 45, text: "Sweet!", callback: "setupRoutine1" }
                ]
            },
            {
                chatID: 45,
                speaker: "courtney",
                text: "Ok. Hands on hips and repeat after me.",
                button: [
                    { chatID: -1, text: "...", callback: "doRoutine1" }
                ]
            },
            {
                chatID: 46,
                speaker: "courtney",
                text: "Turn around ",
                button: [
                    { chatID: 47, text: "Turn around", callback: "routine1_kick" }
                ]
            },
            {
                chatID: 47,
                speaker: "courtney",
                text: "NOW LAY ON THE FLOOR!",
                button: [
                    { chatID: 48, text: "AAAAAAaaaaaaa", callback: "routine1_kick1" }
                ]
            },
            {
                chatID: 48,
                speaker: "courtney",
                text: "Awwww does it hurt when I kick your balls. It wouldn't be bad if you had a pussy. ",
                button: [
                    { chatID: 49, text: "*groan*", callback: "routine1_kick2" }
                ]
            },
            {
                chatID: 49,
                speaker: "stacy",
                text: "What a loser. Get out of here so the real cheerleaders can practice. If you can do the cheer " +
                    "right next practice maybe we'll give you an actual outfit so you can pretend to be one of us. ",
                button: [
                    { chatID: -1, text: "Oohhh yeah", callback: "routine1_kick3" }
                ]
            },
            {
                chatID: 50,
                speaker: "stacy",
                text: "Let's see if you've been practicing. ",
                button: [
                    { chatID: -1, text: "Ok. Here goes! ", callback: "routine1_1" }
                ]
            },
            {
                chatID: 51,
                speaker: "me",
                text: "We're the Stars, we like to fight",
                button: [
                    { chatID: 52, text: "...", callback: "" }
                ]
            },
            {
                chatID: 52,
                speaker: "me",
                text: "Let's go team and win tonight",
                button: [
                    { chatID: 53, text: "...", callback: "" }
                ]
            },
            {
                chatID: 53,
                speaker: "me",
                text: "Our boys are big and strong",
                button: [
                    { chatID: 54, text: "...", callback: "" }
                ]
            },
            {
                chatID: 54,
                speaker: "stacy",
                text: "No you fucking idiot! You forgot to clap. ",
                button: [
                    { chatID: 55, text: "Oh shit. ", callback: "" }
                ]
            },
            {
                chatID: 55,
                speaker: "candy",
                text: "Oh, you didn't practice did you. That's too bad. You were almost a real cheerleader. ",
                button: [
                    { chatID: 56, text: "Awwwww", callback: "" }
                ]
            },
            {
                chatID: 56,
                speaker: "stacy",
                text: "Get out of here and practice so you aren't so stupid. ",
                button: [
                    { chatID: -1, text: "fuck", callback: "leave" }
                ]
            },
            {
                chatID: 57,
                speaker: "candy",
                text: "OMG!!!! You did it! You're amazing! ",
                button: [
                    { chatID: 58, text: "Awwww", callback: "routine1_2" }
                ]
            },
            {
                chatID: 58,
                speaker: "candy",
                text: "I told you she was cheerleader material! You get to wear the uniform and everything! I'm so " +
                    "proud of you! ",
                button: [
                    { chatID: 59, text: "Thanks so much!", callback: "" }
                ]
            },
            {
                chatID: 59,
                speaker: "stacy",
                text: "Fine. You can have a uniform. Just don't embarrass us. Go change and we'll work on some floor " +
                    "routines. ",
                button: [
                    { chatID: 60, text: "Sweet! [Go change]", callback: "routine1_3" }
                ]
            },
            {
                chatID: 60,
                speaker: "thinking",
                text: "This is so awesome! I'm finally part of the squad! I'm going to be such a great cheerleader. I wonder " +
                    "when they'll let me cheer at the games in front of everyone. This just feels so right.",
                button: [
                    { chatID: 61, text: "[Finish practicing and go change]", callback: "routine1_4" }
                ]
            },
            {
                chatID: 61,
                speaker: "me",
                text: "I had so much fun out there! I'm so excited to finally be part of the squad. I'm going to keep " +
                    "practicing till I'm as good as you two! I can't wait to cheer at a game! ",
                button: [
                    { chatID: 62, text: "...", callback: "" }
                ]
            },
            {
                chatID: 62,
                speaker: "courtney",
                text: "Why are you talking to us? Washing machines don't talk, and they don't cheer in games. ",
                button: [
                    { chatID: 63, text: "Washing machine? ", callback: "routine1_5" }
                ]
            },
            {
                chatID: 63,
                speaker: "stacy",
                text: "Yeah, washing machine. Beginners don't talk to us after practice, and they don't cheer in games. " +
                    "Since we let you wear the uniform you have to wash our uniforms so they're fresh for the game tomorrow. " +
                    "Make sure they're nice and crisp. ",
                button: [
                    { chatID: 64, text: "Oh...[Wash their uniforms]", callback: "routine1_6" }
                ]
            },
            {
                chatID: 64,
                speaker: "thinking",
                text: "I really thought they accepted me, instead I'm just a washing machine for them to clean their " +
                    "dirty spankies. Those girls are such bitches. I'm going to show them. I'm going to practice and be " +
                    "the best cheerleader. Everyone will know how awesome I am and how terrible " + sc.n("stacy") + 
                    " and " + sc.n("courtney") + " are. They're going to see!",
                button: [
                    { chatID: -1, text: "[Finish up and go home]", callback: "routine1_7" }
                ]
            },
            {
                chatID: 65,
                speaker: "courtney",
                text: "Ok. We have a new cheer for you to learn. Ready?",
                button: [
                    { chatID: -1, text: "Ready!", callback: "routine2_1" }
                ]
            },
            {
                chatID: 66,
                speaker: "courtney",
                text: "Turn around ",
                button: [
                    { chatID: 67, text: "I'm not falling for that again. It really hurt", callback: "" }
                ]
            },
            {
                chatID: 67,
                speaker: "stacy",
                text: "Oh so you think you know the routine better than us now! Turn around you stupid slut or you're off the " +
                    "team. ",
                button: [
                    { chatID: 68, text: "...but", callback: "" }
                ]
            },
            {
                chatID: 68,
                speaker: "candy",
                text: "You better turn around. ",
                button: [
                    { chatID: 69, text: "fuck", callback: "routine2_2" }
                ]
            },
            {
                chatID: 69,
                speaker: "courtney",
                text: "Hahahahaha ",
                button: [
                    { chatID: 70, text: "*groan* again", callback: "routine2_3" }
                ]
            },
            {
                chatID: 70,
                speaker: "stacy",
                text: "You fell for it again dumb ass. You're so stupid. ",
                button: [
                    { chatID: 71, text: "...no *whimper*", callback: "" }
                ]
            },
            {
                chatID: 71,
                speaker: "courtney",
                text: "Haha, stop whining and wash my dirty uniform ",
                button: [
                    { chatID: 72, text: "*Grrrr*", callback: "routine1_6" }
                ]
            },
            {
                chatID: 72,
                speaker: "thinking",
                text: "Those pranks are so stupid. I can't believe they kicked my balls again. So childish... ",
                button: [
                    { chatID: 73, text: "...", callback: "routine2_4" }
                ]
            },
            {
                chatID: 73,
                speaker: "chuck",
                text: "Oh hi. I'm looking for Stacy. Do you know where she's gone? ",
                button: [
                    { chatID: 74, text: "Oh. She should be changing. Who are you?", callback: "" }
                ]
            },
            {
                chatID: 74,
                speaker: "chuck",
                text: "Sorry, I'm Chuck. I'm just her ride home. I'll see if I can catch her when she's done. See ya. ",
                button: [
                    { chatID: 75, text: "Bye", callback: "routine1_6" }
                ]
            },
            {
                chatID: 75,
                speaker: "thinking",
                text: "I wonder if that's her boyfriend. I bet she would be pissed if he cheated on her. Maybe that's the " +
                    "way to get back at the bitch. I want to see the look on her face when she finds out. ",
                button: [
                    { chatID: -1, text: "[Finish up]", callback: "routine2_5" }
                ]
            },
            {
                chatID: 76,
                speaker: "stacy",
                text: "Let's see if you've been practicing. ",
                button: [
                    { chatID: -1, text: "Ok. Here goes! ", callback: "routine2_1_1" }
                ]
            },
            {
                chatID: 77,
                speaker: "courtney",
                text: "That was acceptable. We're not going to kick you off the team this time. Let's practice. ",
                button: [
                    { chatID: 78, text: "Yes! ", callback: "routine2_1_2" }
                ]
            },
            {
                chatID: 78,
                speaker: "candy",
                text: "Awesome practice. I'm totally beat. Let's call it. ",
                button: [
                    { chatID: 79, text: "Totally. Me too", callback: "routine2_1_3" }
                ]
            },
            {
                chatID: 79,
                speaker: "stacy",
                text: "I get so horny after practice. You're good at cleaning our uniforms, lets see how good you are at " +
                    " cleaning my pussy. ",
                button: [
                    { chatID: 80, text: "huh? ", callback: "" }
                ]
            },
            {
                chatID: 80,
                speaker: "courtney",
                text: "New girl has to serve the head cheerleader. Now that " + sc.n("candy") + "'s not the new girl, it's " +
                    "your turn! hahaha",
                button: [
                    { chatID: 81, text: "hmmm. I'm ok with this. ", callback: "routine2_1_4" }
                ]
            },
            {
                chatID: 81,
                speaker: "stacy",
                text: "Oh shit. You are a good pussy eater. Get in there deeper!",
                button: [
                    { chatID: 82, text: "MMmmmMmmm", callback: "routine2_1_5" }
                ]
            },
            {
                chatID: 82,
                speaker: "stacy",
                text: "Oh fuck you dyke. You're are way better than " + sc.n("candy") + ". I'm going to cum all over your lezbo " +
                    "face. ",
                button: [
                    { chatID: 83, text: "*lick* *slurp*", callback: "routine2_1_6" }
                ]
            },
            {
                chatID: 83,
                speaker: "chuck",
                text: "I know I'm a bit early, but are you ready to go " + sc.n("stacy") + "? ",
                button: [
                    { chatID: 84, text: "*slurp* *slurp* *lick*", callback: "" }
                ]
            },
            {
                chatID: 84,
                speaker: "stacy",
                text: "Almost ready " + sc.n("chuck") + ". Just got to finish coaching the new cheerleader. Come back in 5 minutes.  ",
                button: [
                    { chatID: 85, text: "*lick*", callback: "routine2_1_7" }
                ]
            },
            {
                chatID: 85,
                speaker: "stacy",
                text: "FFFFfffffffuck",
                button: [
                    { chatID: 86, text: "*GLUG* *Baaa*", callback: "routine2_1_8" }
                ]
            },
            {
                chatID: 86,
                speaker: "me",
                text: "Soooo, is " + sc.n("chuck") + " your boyfriend? ",
                button: [
                    { chatID: 87, text: "...", callback: "" }
                ]
            },
            {
                chatID: 87,
                speaker: "stacy",
                text: "Not that it's any of your business, but no. He's just a friend that I keep around to drive me places. " +
                    "I don't know why they take your license away just because you drive drunk. It's not like I hit anyone when " +
                    "I crashed. ",
                button: [
                    { chatID: 88, text: "Well, he's kinda cute. ", callback: "" }
                ]
            },
            {
                chatID: 88,
                speaker: "stacy",
                text: "I guess. I dunno, he's just too nice. He's mine though, don't you try to fuck him or you're off the " +
                    "team. Now go wash my spankies dyke. ",
                button: [
                    { chatID: 89, text: "wow. ok ", callback: "routine1_6" }
                ]
            },
            {
                chatID: 89,
                speaker: "thinking",
                text: "Ughhh I can still taste her pussy and smell it on my face. She was so sweaty. I'll have to shower " +    
                    "to get the smell of her out of my hair. ",
                button: [
                    { chatID: -1, text: "...", callback: "routine2_1_9" }
                ]
            },
            {
                chatID: 90,
                speaker: "candy",
                text: "Great practice girls! I really think we're going to be amazing tomorrow! I'm super sweaty and stinky, " +
                    "gunna hit the showers and take off. ",
                button: [
                    { chatID: 91, text: "Totally, me too! ", callback: "cheer5_1" }
                ]
            },
            {
                chatID: 91,
                speaker: "me",
                text: "So did they used to pick on you too when you were new?",
                button: [
                    { chatID: 92, text: "...", callback: "" }
                ]
            },
            {
                chatID: 92,
                speaker: "candy",
                text: "OMG! So much. It's like Stacy needs to prove she's in charge. We had a different new girl trying out a " +
                    "few months ago. She lasted until Stacy wanted to play puppets. She stuck her hand up the new girl's ass " +   
                    "and pretended she was a ventriloquist. It was pretty funny till the girl's mom walked in. Boy was her mom " +
                    "mad! Stacy had to pay her off to keep her quiet. ",
                button: [
                    { chatID: 93, text: "I would have died of embarrassment! ", callback: "" }
                ]
            },
            {
                chatID: 93,
                speaker: "candy",
                text: "Me too. I almost peed myself I was laughing so hard when they left. It's pretty rough, but no one is the " +
                    "new girl forever. At least she started easy. Trust me, the worst is yet to come, but I know you'll be fine. " +
                    "We all did it. Just some fun to make the day go by. Just remember it's never personal.  ",
                button: [
                    { chatID: 94, text: "Yeah. Still sucks. Getting kicked in the balls really hurts. Twice! ", callback: "" }
                ]
            },
            {
                chatID: 94,
                speaker: "candy",
                text: "I wouldn't know. But I do know getting fisting in the pussy when you're not ready hurts. We each " +
                    "have our own things. I've got to run. I'll see you on the other side. ",
                button: [
                    { chatID: 95, text: "Sure. I'm just about done here too. I gotta do their laundry then I'm out.  ", callback: "cheer5_2" }
                ]
            },
            {
                chatID: 95,
                speaker: "me",
                text: "What the hell!  ",
                button: [
                    { chatID: 96, text: "...", callback: "cheer5_3" }
                ]
            },
            {
                chatID: 96,
                speaker: "stacy",
                text: "You've been doing so well we feel like it's time you earned your pom-poms. Half of our trainees " +
                    "quit or get cut before they have a chance to earn this cheertasitc milestone. To earn them you must first " +
                    "clear I like to call the konga line. You're luck Courtney was " +
                    "nice enough to put them in order, smallest to largest. It'll give you a good stretch. ",
                button: [
                    { chatID: 97, text: "I'm not going to do that.", callback: "" }
                ]
            },
            {
                chatID: 97,
                speaker: "courtney",
                text: "Ugh! I told you she wasn't real cheerleader material. She's just playing one. Go back to the " +
                    "steet corner skank. You're not good enough to be one of us. Pom-poms are for winners, not losers " +
                    "like you. ",
                button: [
                    { chatID: -1, text: "You know what " + sc.n("courtney") + ", I am going to ride each one of those dildos and you're going to get me those pom-poms.", callback: "cheer5_4" }
                ]
            },
            {
                chatID: 98,
                speaker: "courtney",
                text: "What did you stop for? Surely it's not too big for a slut like you. ",
                button: [
                    { chatID: 99, text: "I can't. It's too much...", callback: "cheer5_9" }
                ]
            },
            {
                chatID: 99,
                speaker: "stacy",
                text: "I said sit on every cock slut! ",
                button: [
                    { chatID: 100, text: "OOOoooooo", callback: "cheer5_10" }
                ]
            },
            {
                chatID: 100,
                speaker: "me",
                text: "*moan* ",
                button: [
                    { chatID: 101, text: "...", callback: "cheer5_11" }
                ]
            },
            {
                chatID: 101,
                speaker: "courtney",
                text: "Oh my fucking god! Did you just shoot a load of cum in the locker room? You fucking skanky slut. ",
                button: [
                    { chatID: 102, text: "...", callback: "cheer5_12" }
                ]
            },
            {
                chatID: 102,
                speaker: "stacy",
                text: "You nasty bitch. You can clean that cum off the floor while you do our laundry. ",
                button: [
                    { chatID: 103, text: "*groan*", callback: "cheer5_13" }
                ]
            },
            {
                chatID: 103,
                speaker: "thinking",
                text: "Cum really is a bitch to clean up. I'm just glad there's no carpet in here... ",
                button: [
                    { chatID: -1, text: "...", callback: "cheer5_14" }
                ]
            },
            {
                chatID: 104,
                speaker: "candy",
                text: "I'm so glad you earned your pom-poms! I wanted to watch, but I had a date with " + sc.n("chad") +
                    " that I didn't want to miss. You go girl! ",
                button: [
                    { chatID: 105, text: "I'm so glad too! I love these things!", callback: "cheer6_1_5" }
                ]
            },
            {
                chatID: 105,
                speaker: "courtney",
                text: "You totally earned them! I even think you're ready to cheer in a real game, even if you did " +
                    "orgasm all over the floor. ",
                button: [
                    { chatID: 106, text: "Hahaha, I couldn't help it. But do you really think I'm ready to cheer for real. ", callback: "cheer6_2" }
                ]
            },
            {
                chatID: 106,
                speaker: "stacy",
                text: "We were talking and we think you're ready. You're not awesome yet, but we could really use you " +
                    "out there. So what do you say, ready to cheer for real? ",
                button: [
                    { chatID: 107, text: "Oh My God. I'm so totally ready! ", callback: "cheer6_2" }
                ]
            },
            {
                chatID: 107,
                speaker: "candy",
                text: "I'm so excited. Wait till you get the rush of thousands of eyes on you. It's so fun and crazy being " +
                    "out there! ",
                button: [
                    { chatID: 108, text: "I'm a bit nervous, but I think I can do it! ", callback: "cheer6_3" }
                ]
            },
            {
                chatID: 108,
                speaker: "courtney",
                text: "You better. If you embarass us out there we're going to use your face as toilet paper.  ",
                button: [
                    { chatID: 109, text: "That's graphic ", callback: "cheer6_4" }
                ]
            },
            {
                chatID: 109,
                speaker: "utah",
                text: "Hey girls! We need a release before the big game tomorrow. ",
                button: [
                    { chatID: 110, text: "Huh? ", callback: "cheer6_5_1" }
                ]
            },
            {
                chatID: 110,
                speaker: "stacy",
                text: "Oh fuck " + sc.n("utah") + "! You have the best dick in the world! ",
                button: [
                    { chatID: 111, text: "...", callback: "cheer6_5_2" }
                ]
            },
            {
                chatID: 111,
                speaker: "courtney",
                text: "That's because you haven't tried Darqwan's massive dick. It's stretching me out sooooo much! ",
                button: [
                    { chatID: 112, text: "...", callback: "cheer6_5_3" }
                ]
            },
            {
                chatID: 112,
                speaker: "candy",
                text: "Why do you have to fuck me in the ass everytime Jarome? ",
                button: [
                    { chatID: 113, text: "...", callback: "cheer6_5_4" }
                ]
            },
            {
                chatID: 113,
                speaker: "utah",
                text: "Oh fuck I love that pussy babe! ",
                button: [
                    { chatID: 114, text: "...", callback: "cheer6_6" }
                ]
            },
            {
                chatID: 114,
                speaker: "courtney",
                text: "Oh My God that was hot! Best way to end practice. ",
                button: [
                    { chatID: 115, text: "...", callback: "" }
                ]
            },
            {
                chatID: 115,
                speaker: "utah",
                text: "Yeah. We got a big game tomorrow against the Eagles, had to get a release in. I can't get a good nights " +
                    "sleep when we're all horned up. Needed to detroy those pussies of yours. Just like we're going to destroy the " +
                    "the Eagles tomorrow. Remember when I threw " +
                    "that 40 yard touchdown. Best pass of the season. Almost as good as that time I saved us from a safety " +
                    "by throwing it off balance to Darqwan. As long as these guys keep blocking like they do I can keep " +
                    "winning games like I do. ",
                button: [
                    { chatID: 116, text: "...", callback: "" }
                ]
            },
            {
                chatID: 116,
                speaker: "stacy",
                text: "We're so lucky to have you as our qurterback. We're just so happy to help anyway we can. ",
                button: [
                    { chatID: 117, text: "...", callback: "" }
                ]
            },
            {
                chatID: 117,
                speaker: "utah",
                text: "Hey new girl. Didn't know you were here. Next time we'll invite another so you're not left out. " +
                    "We gotta run and study some film. Catch you tomorrow! ",
                button: [
                    { chatID: 118, text: "Thanks? ", callback: "" }
                ]
            },
            {
                chatID: 118,
                speaker: "candy",
                text: "Good. I have to run to the toilet and do the biggest cum fart ever before it leaks into my shoes. ",
                button: [
                    { chatID: 119, text: "...", callback: "cheer6_7" }
                ]
            },
            {
                chatID: 119,
                speaker: "thinking",
                text: "That was unexpected. I wonder if they person that fucks me will be mad that I have balls? Maybe I'll take " +
                    sc.n("candy") + "'s place so Jarome just fucks me in the ass. He didn't see to check, just shoved it right in, " +
                    "maybe he won't notice my balls...",
                button: [
                    { chatID: 120, text: "...", callback: "cheer6_8" }
                ]
            },
            {
                chatID: 120,
                speaker: "chuck",
                text: "Hi you. Looking for " + sc.n("stacy") + " again. I never did ask your name. I'm " + sc.n("chuck") + ".",
                button: [
                    { chatID: 121, text: "Hi, I'm " + sc.n("me") + ". " + sc.n("stacy") + "'s still changing. ", callback: "" }
                ]
            },
            {
                chatID: 121,
                speaker: "chuck",
                text: "She does take forever to change. I took her to the mall last week and she spent over six hours trying on " +
                    "clothes. I almost fell asleep waiting on her. ",
                button: [
                    { chatID: 122, text: "So what's the deal with you two? Are you dating?", callback: "" }
                ]
            },
            {
                chatID: 122,
                speaker: "chuck",
                text: "Oh, hahaha, no. Just good friends. Why does she talk about me at all? Do you think she likes me? ",
                button: [
                    { chatID: 123, text: "Oh. I don't know. Just curious. Do you like her? ", callback: "" }
                ]
            },
            {
                chatID: 123,
                speaker: "chuck",
                text: "More than anything. I asked her out a year ago, but she said the time wasn't right, so we're just " +
                    "friends. I do enjoy spending time with her. Best part of my day. ",
                button: [
                    { chatID: 124, text: "Ohhh that's so sad. Have you thought about dating anyone else? ", callback: "" }
                ]
            },
            {
                chatID: 124,
                speaker: "chuck",
                text: "Someone else? No. I couldn't. Stacy is all I think about. She really is a wonderful, sweet, and caring " +
                    "girl. She's perfect. ",
                button: [
                    { chatID: 125, text: "Ok. We'll I've got to do some laundry. I'll catch you later. ", callback: "laundry" }
                ]
            },
            {
                chatID: 125,
                speaker: "thinking",
                text: "That poor boy's got it bad. He could really do better. Such a shame. But I'm so excited. I get to cheer " +
                    "in the game! I need to show up to the stadium tomorrow, on Sunday before 2PM, so I can cheer for real! ",
                button: [
                    { chatID: -1, text: "Yeah me!", callback: "cheer6_9" }
                ]
            },
            {
                chatID: 126,
                speaker: "candy",
                text: "That was a great practice! You should join us cheering for the game tomorrow!",
                button: [
                    { chatID: -1, text: "Yeah me!", callback: "exit" }
                ]
            },
            {
                chatID: 127,
                speaker: "candy",
                text: "You two went to far at the game! ",
                button: [
                    { chatID: 128, text: "Yea. You really hurt me. ", callback: "" }
                ]
            },
            {
                chatID: 128,
                speaker: "stacy",
                text: "You're right. That was too far. We thought it would be funny, but we didn't think about how it would " +
                    "make you feel. We got so caught up in hazing you, the new cheerleader, that like, we forgot that you're " +
                    "part of the team. ",
                button: [
                    { chatID: 129, text: "oh", callback: "" }
                ]
            },
            {
                chatID: 129,
                speaker: "courtney",
                text: "Totally. I just, you know, thought you would laugh it off. When " + sc.n("candy") + " said you " +
                    "were crying in the locker room I felt real bad. I didn't mean to make you feel bad. I'm so sorry. ",
                button: [
                    { chatID: 130, text: "...", callback: "" }
                ]
            },
            {
                chatID: 130,
                speaker: "stacy",
                text: "I'm sorry too. We won't play anymore pranks on you or make you do our laundry anymore. " +
                    "You're officially a cheerleader and we would " +
                    "love to keep you on the team. What do you say, can you forgive us? ",
                button: [
                    { chatID: 131, text: "I'm still mad, but ok. No more mean stuff. ", callback: "" }
                ]
            },
            {
                chatID: 131,
                speaker: "courtney",
                text: "Thank you, thank you, thank you. I would be so sad with myself if you didn't forgive us. " +
                    "I promise never to prank you again. I just feel terrible.  ",
                button: [
                    { chatID: 132, text: "You should, but yeah, let's move on. ", callback: "" }
                ]
            },
            {
                chatID: 132,
                speaker: "candy",
                text: "Allright. Let's get to practice so we're ready for the game. ",
                button: [
                    { chatID: 133, text: "...", callback: "cheer6_1" }
                ]
            },
            {
                chatID: 133,
                speaker: "random",
                text: "Go Team! ",
                button: [
                    { chatID: 134, text: "...", callback: "cheer8_2" }
                ]
            },
            {
                chatID: 134,
                speaker: "utah",
                text: "Hi Stacy. We're here to get ready for the big game tomorrow and need to blow off some steam. We even " +
                    "brought Alonzo for your new trainee. ",
                button: [
                    { chatID: 135, text: "...", callback: "" }
                ]
            },
            {
                chatID: 135,
                speaker: "stacy",
                text: "That's so sweet, but she's no longer a trainee, she's a full blown cheerleader! " + sc.n("me") + 
                    " you're going to love Alonzo, he's a really knows how to treat a girl, if you know what I mean. *wink* ",
                button: [
                    { chatID: 136, text: "Oh. Thanks. He looks like he knows what he's doing. ", callback: "cheer8_3" },
                    { chatID: -1, text: "Squeel and run away! ", callback: "cheer8_9bad" }
                ]
            },
            {
                chatID: 136,
                speaker: "football",
                text: "So little girl, ready to ride this monster? He don't bite, promise ",
                button: [
                    { chatID: 137, text: "Hmmmmm", callback: "cheer8_4" },
                ]
            },
            {
                chatID: 137,
                speaker: "me",
                text: "Make me squeel big guy! ",
                button: [
                    { chatID: 138, text: "...", callback: "cheer8_5" },
                ]
            },
            {
                chatID: 138,
                speaker: "stacy",
                text: "The only thing better that great dick, is getting great dick with friends! ",
                button: [
                    { chatID: 139, text: "Oh fuck. I'm so glad I came back. ", callback: "" },
                ]
            },
            {
                chatID: 139,
                speaker: "stacy",
                text: "Me too! You know you have a really hot body! I don't know why I was so mean to you. You're an " +
                    "awesome cheerleader. I'm so glad you're here. ",
                button: [
                    { chatID: 140, text: "I'm great because you were such a great cheer captain! ", callback: "cheer8_6" },
                ]
            },
            {
                chatID: 140,
                speaker: "football",
                text: "I'm cumming! ",
                button: [
                    { chatID: 141, text: "...", callback: "cheer8_7" },
                ]
            },
            {
                chatID: 141,
                speaker: "stacy",
                text: "That was awesome. Let's go shower so I can let this cum leak out of us.  ",
                button: [
                    { chatID: 142, text: "For real. ", callback: "cheer8_8" },
                ]
            },
            {
                chatID: 142,
                speaker: "stacy",
                text: "God, I just love how " + sc.n("utah") + " fucks. I tried to take Alonzo's cock when I first got on the team. " +
                    "He kept hitting me right in the cervix. When I told him to slow down he just gripped me tight and destroyed me. " +
                    "I just sat on the toilet for an hour crying, it hurt so much. ",
                button: [
                    { chatID: 143, text: "I'll bet. Alonzo really straightened my colon out. ", callback: "" },
                ]
            },
            {
                chatID: 143,
                speaker: "me",
                text: "God, I just love how " + sc.n("utah") + " fucks. I tried to take Alonzo's cock when I first got on the team. " +
                    "He kept hitting me right in the cervix. When I told him to slow down he just gripped me tight and destroyed me. " +
                    "I just sat on the toilet for an hour crying, it hurt so much. ",
                button: [
                    { chatID: 144, text: "I'll bet. Alonzo really straightened my colon out. So are you and " + sc.n("utah") + " dating?", callback: "" },
                ]
            },
            {
                chatID: 144,
                speaker: "stacy",
                text: "Oh " + sc.n("utah") + " doesn't date, he's just a fuck boy. As much as I love his dick, I can't stand him. " +
                    "He's always talking about himself and how great he is. His stories are cool at first, but they get old after " +
                    "a while. I would love to date someone with his dick and body, but with a personality, ya know. ",
                button: [
                    { chatID: 145, text: "Totally. Chuck has a nice body, what's his dick like? ", callback: "" },
                ]
            },
            {
                chatID: 145,
                speaker: "stacy",
                text: "Oh hahaha, ya know, I don't know. My guess would be a good size. But he's always around. Like a puppy dog. " +
                    "I know he thinks he's in love with me, but it feels like it's more of an infatuation with me for some reason. " +
                    "Besides, he's too pathetic to actually date. So are you seeing anyone? ",
                button: [
                    { chatID: 146, text: "Me? A girl never kisses and tells. *wink* ", callback: "" },
                ]
            },
            {
                chatID: 146,
                speaker: "stacy",
                text: "I'll bet. I can smell a slut from a mile away, 'cause we sluts can always sniff our own. I'm going to " +
                    "get dressed, don't want to keep Chuck waiting forever. ",
                button: [
                    { chatID: -1, text: "Ok, later", callback: "cheer8_9" },
                ]
            },
            {
                chatID: 147,
                speaker: "random",
                text: "Our boys are the very best, You'll eat our shit like the rest<br/>" +
                    "Their cocks are big and fat and long, c'mon boys get your friction on<br/>" +
                    "We're the girls who love to cheer, We love your cocks in our rear",
                button: [
                    { chatID: 148, text: "...", callback: "cheer8_2" }
                ]
            },
            {
                chatID: 148,
                speaker: "utah",
                text: "Looking good ladies! So you ready for our pregame warmup?",
                button: [
                    { chatID: 149, text: "I so am!", callback: "cheer10_1" },
                    { chatID: -1, text: "Run away ", callback: "exit" },
                ]
            },
            {
                chatID: 149,
                speaker: "football",
                text: "I love fucking cheer leader sluts! ",
                button: [
                    { chatID: 150, text: "...", callback: "cheer10_2" },
                ]
            },
            {
                chatID: 150,
                speaker: "utah",
                text: "We gotta get ready for the big game tomorrow. Totally gunna beats those pussies. ",
                button: [
                    { chatID: 151, text: "...", callback: "cheer10_3" },
                ]
            },
            {
                chatID: 151,
                speaker: "courtney",
                text: "That was fun. Now off to squeeze this cum out. ",
                button: [
                    { chatID: -1, text: "...", callback: "cheer10_4" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};