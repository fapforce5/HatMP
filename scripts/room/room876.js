//Room name
var room876 = {};
room876.main = function () {
    var stacystep = sc.getstep("stacy");
    if (stacystep === 0) {
        nav.bg("876_gym/tryout.jpg");
        zcl.displayMain(350, 1000, .07, "clothes", false);
        chat(0, 876);
    }
    else if (stacystep === 1) {
        nav.bg("876_gym/tryout.jpg");
        zcl.displayMain(350, 1000, .07, "clothes", false);
        chat(39, 876);
    }
    
};

room876.btnclick = function (name) {
    switch (name) {
        case "1_1":
            nav.killbutton("1_1");
            if (g.get("cheerleader") > 90) {
                nav.bg('876_gym/pn_hips.jpg');
                chat(43, 876);
            }
            else {
                nav.bg("876_gym/meet5.jpg");
                nav.button({
                    "type": "btn",
                    "name": "1_1x",
                    "left": 1687,
                    "top": 800,
                    "width": 233,
                    "height": 150,
                    "image": "526_bar/arrowRight.png"
                }, 876);
            }
            break;
        case "1_1x":
            nav.killbutton("1_1x");
            nav.bg("876_gym/meet6.jpg");
            chat(41, 876);
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
            if (cl.c.cock < 4)
                tempList.push(" cock is too big");

            if (tempList.length === 0) {
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
            nav.bg("876_gym/" + callback + ".jpg");
            break;
        case "meet18":
            cl.undo();
            g.mod("phum", 1);
            g.mod("cheerleader", 20);
            g.mod("cheerlevel", 1);
            sc.setstep("candy", 104);
            char.settime(15, 37);
            char.room(0);
            sc.setstep("stacy", 1);
            break;
        case "1_0":
            cl.nude();
            zcl.displayMain(350, 1000, .07, "clothes", false);
            break;
        case "1_1":
            nav.killall();
            nav.bg("876_gym/meet4.jpg");
            nav.button({
                "type": "btn",
                "name": "1_1",
                "left": 1687,
                "top": 800,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 876);
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
        case "setupRoutine1":
            nav.killall();
            nav.bg("876_gym/pn_hips.jpg");
            break;
        case "doRoutine1":
            if (g.internal.step >= g.internal.t.length) {
                nav.bg("876_gym/pn_turn.jpg");
                chat(46, 876);
            }
            else {
                var tx = g.internal.t[g.internal.step];
                var cs = g.internal.outfit ? "pc_" : "pn_";
                nav.bg("876_gym/" + cs + tx.p + ".jpg");
                chat(1000, 876);
            }
            break;
        case "routine1_kick":

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
    if (chatID === 1000) {
        var c = {
            chatID: 999,
            speaker: "stacy",
            text: g.internal.t[g.internal.step].t,
            button: [
                { chatID: -1, text: g.internal.t[g.internal.step].t, callback: "doRoutine1" }
            ]
        }
        g.internal.step++;
        return c
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
                text: "What the hell would I want to come back. I thought I was just going to learn some cheers, but here I " +
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
                    { chatID: -1, text: "Turn around", callback: "routine1_kick" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};