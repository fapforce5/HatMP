//Room name
var room209 = {};
room209.main = function () {
    var mstep = sc.getstep("missy");
    if (mstep < 10) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        chat(0, 209);
    }
    else if (g.dt.getDay() === 6 || g.dt.getDay() === 0 || g.dt.getHours() > 9) {
        nav.bg("209_classroom/dark.jpg");
        nav.button({
            "type": "btn",
            "name": "exit",
            "left": 1683,
            "top": 313,
            "width": 237,
            "height": 514,
            "image": "209_classroom/darkdoor.png"
        }, 209);
        chat(1, 209);
    }
    else if (!g.sissy[54].ach) {
        room209.btnclick("bb0");
        room209.btnclick("poster0");
        room209.btnclick("displayMissy");
        room209.btnclick("displayChairsit");
        chat(3, 209);
    }
    else {
        if (sc.checkevent("missy", -1)) {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayMissybtn");
            if (g.internal === "sugar0" || g.internal === "sugar3")
                chat(23, 209);
            else if (g.internal === "sugar1") {
                chat(24, 209);
                nav.button({
                    "type": "img",
                    "name": "teatime",
                    "left": 710,
                    "top": 755,
                    "width": 522,
                    "height": 325,
                    "image": "209_classroom/tea.png"
                }, 209);
            }
            else
                chat(26, 209);
        }
        else if (g.sissy[1].ach) {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            room209.btnclick("displaypbtn");
        }
        else {
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
        }
    }
};
 
room209.btnclick = function (name) {
    switch (name) {
        case "exit":
            char.room(0);
            break;
        case "reset":
            nav.bg("209_classroom/bg.jpg");
            nav.killall();
            room209.btnclick("displayMissy");
            break;
        case "displayMissy":
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            break;
        case "displayMissybtn":
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1013,
                "top": 210,
                "width": 466,
                "height": 870,
                "image": "209_classroom/missy0.png"
            }, 209);
            break;
        case "displaypbtn":
            nav.button({
                "type": "btn",
                "name": "appearnceStart",
                "left": 1500,
                "top": 200,
                "width": 466,
                "height": 888,
                "image": "209_classroom/p0.png"
            }, 209);
            break;
        case "displayChairsit":
            zcl.displayMain(400, 100, .25, "clothes", true);
            nav.button({
                "type": "img",
                "name": "chair",
                "left": 336,
                "top": 898,
                "width": 564,
                "height": 182,
                "image": "209_classroom/chariback.png"
            }, 209);
            break;
        case "bb0":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "bb1":
            nav.button({
                "type": "img",
                "name": "bb",
                "left": 605,
                "top": 225,
                "width": 868,
                "height": 368,
                "image": "209_classroom/bbPanties.jpg"
            }, 209);
            break;
        case "poster0":
            nav.button({
                "type": "img",
                "name": "poster",
                "left": 277,
                "top": 251,
                "width": 269,
                "height": 321,
                "image": "209_classroom/" + name + ".jpg"
            }, 209);
            break;
        case "missy0accept":
            chat(10, 209);
            break;
        case "appearnceStart":
            var hasSuit = cl.c.shoes === "d" && cl.c.pants === "s" && cl.c.shirt === "s" && cl.c.socks === "b";
            var hasGirlSuit = cl.c.shoes === "fb" && cl.c.pants === "k" && cl.c.shirt === "r" && cl.c.socks === null;
            var hasPanties = cl.getEntry("panties", cl.c.panties).sex === "f";
            if (g.sissy[22].ach) {
                if (hasGirlSuit && hasPanties)
                    room209.btnclick("pointsStart");
                else
                    chat(18, 209);
            }
            else {
                if (hasSuit && hasPanties)
                    room209.btnclick("pointsStart");
                else if (!hasPanties)
                    chat(19, 209);
                else
                    chat(20, 209);
            }
            break;
        case "pointsStart":
            if (scc.get("missy").love > 98) {
                chat(21, 209);
            }
            else {
                room209.btnclick("appearanceStart");
            }
            break;
        case "appearanceStart":
            scc.changesDiffernt("missy", true);
            if (scc.changeText === "")
                room209.btnclick("selectStart");
            else
                chat(999, 209);
            break;
        case "selectStart":
            nav.killall();
            $("#room_footer").hide();
            char.changeMenu("hide");
            nav.bg("28_transformation\grid.jpg");
            room210.main();
            break;
        case "h_0":
            room209.btnclick("reset");
            chat(22, 209);
            break;
        case "h_1":
            room209.btnclick("reset");
            chat(27, 209);
            break;
        case "h_20":
            nav.bg("209_classroom/bg.jpg");
            room209.btnclick("bb1");
            room209.btnclick("poster0");
            room209.btnclick("displayChairsit");
            room209.btnclick("displayMissybtn");
            room209.btnclick("displaypbtn");
            chat(39, 209);
            break;
        default:
            break;
    }
};

room209.chatcatch = function (callback) {
    switch (callback) {
        case "contract":
            room210.chatcatch("contract");
            break;
        case "missy0_end":
            g.sissy[54].ach = true;
            g.mod("sissy", 10);
            g.mod("money", 30);
            room209.chatcatch("end");
            break;
        case "missy0_1":
            nav.killall();
            nav.bg("209_classroom/missy0_1.jpg");
            break;
        case "missy0_2":
            nav.bg("209_classroom/missy0_2.jpg");
            break;
        case "missy0Display":
            char.changeMenu("hide");
            room210.main();
            nav.button({
                "type": "img",
                "name": "missy",
                "left": 197,
                "top": 0,
                "width": 853,
                "height": 1080,
                "image": "209_classroom/missy0_point.png"
            }, 209);
            break;
        case "missy0_tea":
            sc.setstep("missy", -1);
            char.settime(9, 0);
            g.internal = "teatime";
            char.room(207);
            break;
        case "missy0endbad":
            g.sissy[0].ach = true;
            sc.revokeStep("missy", -1);
            scc.love("missy", -50, 100);
            room209.chatcatch("end");
            break;
        case "missy0end":
            g.sissy[0].ach = true;
            sc.revokeStep("missy", -1);
            scc.love("missy", 20, 100);
            g.mod("money", 40);
            room209.chatcatch("end");
            break;
        case "m2_0":
            nav.killall();
            nav.bg("209_classroom/p3_0.jpg");
            break;
        case "m2_1":
            nav.bg("209_classroom/p3_1.jpg");
            break;
        case "m2_2":
            nav.bg("209_classroom/p3_2.jpg");
            break;
        case "m2_3":
            char.addtime(30);
            nav.bg("209_classroom/p3_3.jpg");
            break;
        case "m3_4x":
            nav.bg("209_classroom/p3_4.jpg");
            break;
        case "m2_4":
            char.addtime(60);
            g.roomTimeout = setTimeout(function () { chat(32, 209); }, 2000);
            break;
        case "m2_5":
            char.addtime(120);
            g.roomTimeout = setTimeout(function () { chat(33, 209); }, 2000);
            break;
        case "m2_6":
            nav.bg("209_classroom/p3_6.jpg");
            break;
        case "m2_x":
            nav.bg("209_classroom/p3_x.jpg");
            break;
        case "m2_end":
            g.mod("sissy", 60);
            g.mod("money", 40);
            scc.love("missy", 10);
            g.sissy[1].ach = true;
            room209.chatcatch("end");
            break;
        case "m2_endbad":
            scc.love("missy", -10);
            g.sissy[1].ach = true;
            break;
        case "p20_0":

            break;





        case "selectStart":
            room209.btnclick("selectStart");
            break;
        case "missyMidPoints":
            g.mod("sissy", 100);
            scc.setlove("missy", 0);
            room209.btnclick("appearanceStart");
            break;
        case "missyBadEnd":
            scc.love("missy", -10);
            char.settime(10, 27);
            char.room(0);
            break;
        case "end":
            char.settime(17, 0);
            char.room(0);
            break;
        case "love":
            scc.love("missy", 10);
            break;
        case "hate":
            scc.love("missy", -10);
            break;
        default:
            break;
    }
};

room209.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: scc.changeText,
            button: [
                { chatID: -1, text: "Thanks ma'am!", callback: "selectStart" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "I don't know what this room is, but it's creepy as fuck.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "thinking",
                text: "I don't think there's class on the weekend.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "thinking",
                text: "It looks like class starts before 10:00 am. It appears I'm late.",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Welcome to the first day of your class. Being that you completely bungled your only simple case I've decided to rush " +
                    "you into my personal training. ",
                button: [
                    { chatID: 4, text: "...", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "It takes many different traits to make a great detective. Physically fit, mentally sharp, thorough, accurate, " +
                    "patient, and a good gut instinct. We've acheived the first step of physically fitness, but you lack all the other " +
                    "traits. Your complete failure on " + sc.n("tiffany") + "'s case shows it will take years to get you to where you need to be.",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "Lucky for you I'm in desperate need for a junior detective and you have some <span class='hl-pink'>trait's</span> " +
                    "that I can put to use. The fact that you stole your " + sc.n("el") + "' panties and wore them here, then paraded " +
                    " yourself around my office shows me a few things. ",
                button: [
                    { chatID: 6, text: "...", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "First it shows a lack of morals. A moral young gentleman wouldn't steal panties from his " +
                    sc.n("el") + ". You obviously have not morals, which will come in handy " +
                    "when you need to go undercover. ",
                button: [
                    { chatID: 7, text: "Well... you see", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "<span class='hl-red'>Shut up!!</span> This is a classroom, not a debate stage. As I was saying... " +
                    "wearing those panties to my office and shaving your entire body shows you have the indicators of a sissy. I " +
                    "am working on several cases that a sissy could come in handy, but you, in your current state would just " +
                    "bungle those cases worse than you bungled " + sc.n("tiffany") + "'s case. ",
                button: [
                    { chatID: 8, text: "...", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "My assistant instructor, " + sc.n("p") + ", and I are going to train you to be the perfect sissy to help us take " +
                    "down the cult once and for all. For far too long the inept police in this town has allowed the cult to grow in power " +
                    "which has only made them more monstrous in their rituals. If you wish to help us put a stop to them your best role " +
                    "is as our undercover sissy detective. ",
                button: [
                    { chatID: 9, text: "...", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "To prepare you I've drawn up this contract for you to read over.",
                button: [
                    { chatID: -1, text: "[Read Contact]", callback: "contract" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "So do you agree to this contract?",
                button: [
                    { chatID: 13, text: "Yes, I'm in", callback: "missy0_1" },
                    { chatID: 11, text: "This is too much, I can't do it.", callback: "hate" }
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "This is what we call a <span class='hl'>False choice.</span> This sissy school is at the root of the story line " +
                    "and you will have to do it so lets just get it over now. Also let's be honest with ourselves. Somewhere deep down " +
                    "inside you needs to be forced in to a subservient little sissy. Just agree with the contract so we can move on.",
                button: [
                    { chatID: 13, text: "You're right, I'm a sissy bitch that agrees with this stupid contract.", callback: "missy0_1" },
                    { chatID: 12, text: "NO! You can't tell me what to do. I'm still out", callback: "hate" }
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: "Listen here you little shit! You're going to be my bitch, I'm going to fuck you with my big red strapon, " +
                    "and you're going to thank me for it. Now sign the contract so we can move the story forward. ",
                button: [
                    { chatID: 13, text: "Fuck ok! I'll sign the contract. Also I'm a little bitch", callback: "missy0_1" }
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: "Good, I'm glad you so readily agreed. I'm going to install Sissy AI, the tracking software, on your phone. It really " +
                    "has the most advanced AI of its kind. It records all the audio, camera, and can even track your biometrics " +
                    "to give a complete sexual picture of the phone holder. ",
                button: [
                    { chatID: 14, text: "...", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "What the hell! There's no way a program can track everything I do, can it? I must be crazy to keep going with " +
                    "this, but I really need the job and the cult thing sounds bad. Hopefully she doens't make me do anything " +
                    "too embarrassing. I dont' think it can get much worse that having to wear <span class='hl-pink'>panties</span>.",
                button: [
                    { chatID: 15, text: "...", callback: "missy0_2" }
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "I've set up the AI to automatically give you extra credit points based on your actions. To see how many " +
                    "points you have just check the Sissy App in your phone. When you have enough you can trade in those points " +
                    "here in the Sissy School. ",
                button: [
                    { chatID: 16, text: "Yes ma'am", callback: "missy0Display" }
                ]
            },
            {
                chatID: 16,
                speaker: "missy",
                text: "Also when you come in tomorrow you'll be presented with the course list where you can choose which class " +
                    "you take. You've completed your first class, and you'll select which class you want to take next which " +
                    "happens to be Tea Time. Don't worry too much of what that is, when you get here I'll go over what you " +
                    "need to do.",
                button: [
                    { chatID: 17, text: "Yes ma'am.", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "missy",
                text: "Good. We have a lot of work ahead of us. Get a good night's sleep and well begin your " +
                    "lessons tomrrow.",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missy0_end" }
                ]
            },
            {
                chatID: 18,
                speaker: "missy",
                text: "I know you were instructed on the proper uniform and that's not it! You need to begin by wearing your " +
                    "blouse, skirt, black flats, panties, and not socks. Get out and fix yourself.",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 19,
                speaker: "missy",
                text: "You know panties are required. Come back when you can learn to follow directions!",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 20,
                speaker: "missy",
                text: "You need to wear your suit. I know you know what it is. Come back when you can learn to follow directions",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "missyBadEnd" }
                ]
            },
            {
                chatID: 21,
                speaker: "missy",
                text: "You've been doing very well lately. I knew you would make a proper sissy. For doing so well I'm going " +
                    "to give you 100 extra credit points. You should be proud of yourself.",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "missyMidPoints" }
                ]
            },
            {
                chatID: 22,
                speaker: "missy",
                text: "Today, your lesson will be on servitude. I know all you care about is getting your cock into something " +
                    "warm and wet, but you need to expand your horizons. Go upstairs and fetch me a tea with 1 lump. If you need " +
                    "help ask " + sc.n("cecilia") + " where to go to fix the tea.",
                button: [
                    { chatID: -1, text: "[Get the tea]", callback: "missy0_tea" }
                ]
            },
            {
                chatID: 23,
                speaker: "missy",
                text: "I see you didn't pay attention to my order. I said 1 lump of sugar. Tea should have an elegant sweatness, without " +
                    "becoming sugar water. You have failed to follow simple directions, I'm done with you for the day.",
                button: [
                    { chatID: -1, text: "Oh sorry ma'am", callback: "missy0endbad" }
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "A perfect cup of tea with an elegant sweatness, but not too sweet. Congratulations on carrying out the simplest of " +
                    "orders. You probably think you deserve a reward.",
                button: [
                    { chatID: 25, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "Well you don't. You will receive some spending cash, because I'm incredibly giving. That is all for today.",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "missy0end" }
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: "I simply asked you to get a cup of tea with 1 lump of sugar and you dilly-dallied through this simple task. " +
                    "You have failed to follow simple directions, I'm done with you for the day.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "missy0endbad" }
                ]
            },

            {
                chatID: 27,
                speaker: "missy",
                text: "Today we shall continue with out lessons on service. Lucky for you I'm feeling quite horny so " +
                    "you will get to service me. Come here and kneel.",
                button: [
                    { chatID: 28, text: "Nice!", callback: "m2_0" }
                ]
            },
            {
                chatID: 28,
                speaker: "missy",
                text: "You're going to be my vibrator cleaner and holder today.",
                button: [
                    { chatID: 29, text: "...", callback: "m2_1" }
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "Let me just pull this out.",
                button: [
                    { chatID: 30, text: "...", callback: "m2_2" }
                ]
            },
            {
                chatID: 30,
                speaker: "missy",
                text: "There. Aren't you the cutest dildo holder. Just sit there and don't move. I'm going to my office to do some work.",
                button: [
                    { chatID: 31, text: "...", callback: "m2_3" }
                ]
            },
            {
                chatID: 31,
                speaker: "thinking",
                text: "Did she just leave? This vibrator tasted yummy, but I've swallowed all the juices. It just tastes like " +
                    "hard plastic now. Should I get up and leave, this is really too much.",
                button: [
                    { chatID: -1, text: "[Wait a bit longer]", callback: "m2_4" }
                ]
            },
            {
                chatID: 32,
                speaker: "thinking",
                text: "What the fuck! I've been waiting over an hour now. This is absolute crap! What does " + sc.n("missy") + " think " +
                    "I am? It's like she doesn't respect me at all. I'm sure she got stuck or forgot about me. I should go up and check.",
                button: [
                    { chatID: -1, text: "[Wait longer]", callback: "m2_5" },
                    { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "m2_x" }
                ]
            },
            {
                chatID: 33,
                speaker: "thinking",
                text: "OK she totally forgot. I've been kneeling here almost 4 hours! This is just too much. " + sc.n("missy") + " doesn't " +
                    "care about me at all! I'm going to go up there and really tell her what I think!",
                button: [
                    { chatID: 34, text: "[Wait longer]", callback: "m2_6" },
                    { chatID: 36, text: "[Check on " + sc.n("missy") + "]", callback: "m2_x" }
                ]
            },
            {
                chatID: 34,
                speaker: "missy",
                text: "I see you can follow directions, that's a good boy. For successfully passing your first real assignment I'll award " +
                    "you 60 SISSY POINTS. ",
                button: [
                    { chatID: 35, text: "hank aakkk oooo", callback: "m3_4x" }
                ]
            },
            {
                chatID: 35,
                speaker: "missy",
                text: "You are free to go. Let me just take back my favorite vibrator.",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "m2_end" }
                ]
            },
            {
                chatID: 36,
                speaker: "missy",
                text: "<span class='hl-red'>Why are you standing, and why isn't my vibrator in your mouth?</span>",
                button: [
                    { chatID: 37, text: "Oh uhhhh, I thought you forgot about me.", callback: "" }
                ]
            },
            {
                chatID: 37,
                speaker: "missy",
                text: "No, I didn't forget about you! You failed this lesson. I award you no points, and may god have mercy on your soul. ",
                button: [
                    { chatID: 38, text: "What?", callback: "" }
                ]
            },
            {
                chatID: 38,
                speaker: "missy",
                text: "You failed. If you want to get anywhere you need to find the discipline within yourself or you'll never be a " +
                    "junior detective. I'm deducting 60 points. Now get out of my classroom.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "m2_endbad" }
                ]
            },
            {
                chatID: 39,
                speaker: "missy",
                text: "Today I have a treat for you. Meet " + sc.n("p") + ". She'll be my assistant trainer. Normally she runs the " +
                    "pink room, but she is going to help me with your training. Specifically she'll be your femininity trainer. Say " +
                    "hello to " + sc.n("p") + ".",
                button: [
                    { chatID: 40, text: "Hello " + sc.n("p") + ".", callback: "" }
                ]
            },
            {
                chatID: 40,
                speaker: "p",
                text: "Tehehehe! Hi " + sc.n("me") + ". " + sc.n("missy") + " has told me about you. I've only worked with sissies in the pink " +
                    "room of pleasure. You'll be my first to bring all the way up; I'm so excited! ",
                button: [
                    { chatID: 41, text: "...", callback: "p20_0" }
                ]
            },
            {
                chatID: 41,
                speaker: "p",
                text: "Now strip to your panties you little slut!",
                button: [
                    { chatID: -1, text: "Yelp! [Strip to your panties]", callback: "m14_1" }
                ]
            },
            {
                chatID: 42,
                speaker: "p",
                text: "Boy's panties.. how disappointing. No more boy's panties for you, gimme those. ",
                button: [
                    { chatID: 43, text: "Give " + sc.n("p") + " your boy panties.", callback: "m14_1x" }
                ]
            },
            {
                chatID: 43,
                speaker: "p",
                text: "I don't want to see you in boy panties ever again. They aren't for you!",
                button: [
                    { chatID: 44, text: "Yes " + sc.n("p") + ".", callback: "" }
                ]
            },
            {
                chatID: 44,
                speaker: "missy",
                text: "Good, now get dreseed and take your seat while I continue.",
                button: [
                    { chatID: 45, text: "Take your seat.", callback: "takeSeat" }
                ]
            },
            {
                chatID: 45,
                speaker: "missy",
                text: "Now that you have met " + sc.n("p") + " I'm going to introduce you to the chart on the wall. ",
                button: [
                    { chatID: 46, text: "...", callback: "" }
                ]
            },
            {
                chatID: 46,
                speaker: "missy",
                text: "We will give you the mandatory classes you'll need to prepare yourself to take down the cult, but to my left are " +
                    "extracurricular classes. Some you will need, some will help, and some are completely optional, it's up to you to " +
                    "decide which ones to do. ",
                button: [
                    { chatID: 47, text: "...", callback: "" }
                ]
            },
            {
                chatID: 47,
                speaker: "missy",
                text: "With those extracurricular classes we also have some body modification choices. A scientist friend of mine has " +
                    "developed a pill that can target specific areas of your body and make them more feminine. These pills are very " +
                    "expensive so you'll have to earn them. ",
                button: [
                    { chatID: 48, text: "...", callback: "" }
                ]
            },
            {
                chatID: 48,
                speaker: "missy",
                text: "Each morning you come in you'll have the choice to either pick an extracurricular class or body modification, ask " +
                    sc.n("p") + " to give you a femininity lesson, or ask me to give you a discipline and sexuality lesson. If you " +
                    "follow direction and behave like a good sissy " + sc.n("p") + " or myself just may give you bonus points for your " +
                    "extracurricular clases and modifications. ",
                button: [
                    { chatID: 49, text: "So each morning I choose either the extracurricular class or body modification, a lesson by " + sc.n("p") + " or a lesson by you, ma'am.", callback: "" }
                ]
            },
            {
                chatID: 49,
                speaker: "missy",
                text: "Correct. Tomorrow begins the first day of the rest of your life. Sleep well and don't forget your panties. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "endm14" }
                ]
            },
            {
                chatID: 50,
                speaker: "missy",
                text: "This is the first time you're looking through the extracurricular classes and body modification tree. " +
                    "The bright entries you have already taken, the dark ones you haven't taken yet. Some things you can start " +
                    "right away, but others you'll need to take the mandatory class first. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 51,
                speaker: "missy",
                text: "You need to wear your suit top, suit pants, black socks, and black shoes until I tell you otherwise. You " +
                    "have failed your lessons for the day.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "badend" }
                ]
            },
            {
                chatID: 52,
                speaker: "missy",
                text: "It's time for your panty check, strip it down.",
                button: [
                    { chatID: 53, text: "Yes ma'am", callback: "pantycheck" }
                ]
            },
            {
                chatID: 53,
                speaker: "missy",
                text: "You know better than to wear those disgusting things here. You have failed your lessons for the day.",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "badend" }
                ]
            },
            {
                chatID: 54,
                speaker: "missy",
                text: "I just threw up in my mouth a little bit. You need to shave your disgusting body. Now!",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "badend" }
                ]
            },
            {
                chatID: 55,
                speaker: "missy",
                text: "I have to admit, you've been doing well in class. I'm going to give you 100 bonus points. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "points!" }
                ]
            },
            {
                chatID: 56,
                speaker: "p",
                text: "Heheheh, so you want to be more girly? I'm going to start with the basics. Sitting. You're sitting there like " +
                    "some kind of knuckle dragging opressor with you genitials on full display. A proper lady crosser her legs when " +
                    "seated. ",
                button: [
                    { chatID: 57, text: "My legs?", callback: "" }
                ]
            },
            {
                chatID: 57,
                speaker: "p",
                text: "Yes, you will need to always cross your legs when you sit. Also with sitting you need to sit to pee from now on. ",
                button: [
                    { chatID: 58, text: "Lol what?", callback: "" }
                ]
            },
            {
                chatID: 58,
                speaker: "p",
                text: "Boys are so discourteous when it comes to simple bathroom etiquette. You get your little spashes on the toilet " +
                    "like some kind of untrained dog hehehe. Sitting to pee is most importatnt from now on. ",
                button: [
                    { chatID: 59, text: "ok", callback: "" }
                ]
            },
            {
                chatID: 59,
                speaker: "p",
                text: "This is the end of your first lesson. Next we're going to learn how to dress! How exciting!",
                button: [
                    { chatID: 60, text: "Yeah!", callback: "ptif8" }
                ]
            },
            {
                chatID: 61,
                speaker: "p",
                text: "Oh my... You don't have any sissy clothes. We need to fix that! " + sc.n("missy") + " told me you know " +
                    sc.n("tiffany") + ". She has a nice girly business outfit you can wear. <span class='hl-red'>" +
                    "Stop by her place to pick it up!</span>",
                button: [
                    { chatID: -1, text: "Ok. I'll stop by " + sc.n("tiffany") + "'s place to pick it up!", callback: "pinc1" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};