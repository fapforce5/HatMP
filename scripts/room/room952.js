//Room name
var room952 = {};
room952.main = function() {
    g.map = null;
    let btnList = [];
    if (g.pass?.e === "panties") {
        btnList = [{
            "type": "btn",
            "name": "mine",
            "left": 244,
            "top": 27,
            "width": 298,
            "height": 942,
            "title": "Return to your cell",
            "image": "952_hallway/hallway1.png"
        },
        {
            "type": "btn",
            "name": "escape",
            "left": 1206,
            "top": 445,
            "width": 173,
            "height": 243,
            "title": "Attempt and escape",
            "image": "952_hallway/escape.png"
        }];
    }
    else {
        btnList = [
            {
                "type": "btn",
                "name": "mine",
                "left": 244,
                "top": 27,
                "width": 298,
                "height": 942,
                "title": "Return to your cell",
                "image": "952_hallway/hallway1.png"
            },
            {
                "type": "btn",
                "name": "bodhi",
                "left": 652,
                "top": 239,
                "width": 138,
                "height": 638,
                "title": "Bodhi's Cell",
                "image": "952_hallway/hallway2.png"
            },
            {
                "type": "btn",
                "name": "bigdick",
                "left": 858,
                "top": 357,
                "width": 60,
                "height": 467,
                "title": "Last Cell",
                "image": "952_hallway/hallway3.png"
            },
            {
                "type": "btn",
                "name": "escape",
                "left": 1206,
                "top": 445,
                "width": 173,
                "height": 243,
                "title": "Attempt and escape",
                "image": "952_hallway/escape.png"
            }
        ];
        nav.drawButton("1001_rand/turnaround.png", "turnaround", 952);
    }
    $.each(btnList, function (i, v) {
        nav.button(v, 952);
    });
};

room952.btnclick = function (name) {
    switch (name) {
        case "mine":
            chat(0, 952);
            break;
        case "turnaround":
            nav.kill();
            nav.bg("952_hallway/bg.webp");
            nav.button({
                "type": "btn",
                "name": "c1",
                "left": 1378,
                "top": 27,
                "width": 298,
                "height": 942,
                "title": "Return to your cell",
                "image": "952_hallway/hallway1r.png"
            }, 952);
            nav.button({
                "type": "btn",
                "name": "c2",
                "left": 1130,
                "top": 239,
                "width": 138,
                "height": 638,
                "title": "Bodhi's Cell",
                "image": "952_hallway/hallway2r.png"
            }, 952);
            nav.button({
                "type": "btn",
                "name": "c3",
                "left": 1002,
                "top": 357,
                "width": 60,
                "height": 467,
                "title": "Last Cell",
                "image": "952_hallway/hallway3r.png"
            }, 952);
            nav.drawButton("1001_rand/turnaround.png", "reset", 952);
            break;
        case "reset":
            char.room(952);
            break;
        case "bodhi":
            nav.kill();
            nav.bg("952_hallway/bodhi0.jpg");
            if (sc.getMissionTask("bodhi", "cult", 4).notStarted) {
                sc.startMission("bodhi", "cult");
                sc.completeMissionTask("bodhi", "cult", 0);
                sc.completeMissionTask("bodhi", "cult", 1);
                sc.completeMissionTask("bodhi", "cult", 2);
                sc.completeMissionTask("bodhi", "cult", 3);
                sc.startMissionTask("bodhi", "cult", 4);
                chat(30, 952);
            }
            else {
                if (sc.getMissionTask("bodhi", "cult", 5).notStarted) {
                    chat(53, 952);
                }
            }
            break;
        case "bigdick":
            nav.killall();
            nav.bg("950_cell/cell.jpg");
            nav.button({
                "type": "btn",
                "name": "bexit",
                "left": 496,
                "top": 824,
                "width": 423,
                "height": 166,
                "title": "Exit",
                "image": "952_hallway/bexit.png"
            }, 952);
            nav.button({
                "type": "btn",
                "name": "b0",
                "left": 1061,
                "top": 381,
                "width": 476,
                "height": 652,
                "title": "Talk to the big guy",
                "image": "952_hallway/b0.png"
            }, 952);
            break;
        case "bexit":
            char.room(952);
            break;
        case "b0":
            chat(2, 952);
            break;
        case "escape":
            g.map = null;
            g.pass = {
                e: null,
                compete: false,
                q: null
            };
            char.room(958);
            break;
        case "escape2cancel":
            char.room(952);
            break;
        case "escape2":
            nav.killall();
            //scc.love("cult", -20, 100);
            nav.bg("952_hallway/escape3.jpg");
            chat(18, 952);
            break;
        case "butt2":
            chat(65, 952);
            nav.killbutton("butt2");
            break;
        case "t1":
            if (g.pass < 4)
                nav.bg("952_hallway/l" + g.pass + ".jpg");
            else {
                nav.killbutton("t1");
                nav.bg("952_hallway/l4.jpg");
                levels.oral(3, "f", "daria");
                chat(72, 952);
            }
            g.pass++;
            break;
        case "b1":
            if (g.pass === 1)
                chat(51, 952);
            else 
                chat(52, 952);
            g.pass++;
            break;
        case "c1":
            nav.kill();
            nav.bg("952_hallway/bbg.jpg");
            if (sc.getMission("ralph", "cult").startedOrComplete) {
                if (!daily.get("celldoor_ralph")) {
                    nav.button({
                        "type": "btn",
                        "name": "ralph",
                        "left": 960,
                        "top": 252,
                        "width": 340,
                        "height": 828,
                        "image": "952_hallway/ralph0.webp"
                    }, 952);
                }
            }
            else {

            }
            nav.back("turnaround");
            break;
        case "ralph":
            if (daily.get("ralph")){
                chat(20, 952);
            }
            else if (sc.taskGetStep("ralph", "cult") < 3) {
                sc.completeMissionTask("ralph", "cult", 0);
                sc.completeMissionTask("ralph", "cult", 1);
                sc.completeMissionTask("ralph", "cult", 2);
                chat(1, 952);
            }
            else {
                sc.select("icon_chat_ralph", "952_hallway/icon_chat.webp", 0);
                sc.select("icon_boys_ralph", "952_hallway/icon_boys.webp", 1);
            }
            daily.set("ralph");
            break;
        case "icon_chat_ralph":
            nav.killbutton("icon_chat_ralph"); 
            nav.killbutton("icon_boys_ralph");
            switch (sc.taskGetStep("ralph", "cult")) {
                case 3:
                    sc.completeMissionTask("ralph", "cult", 3);
                    future.add("ralphPole", 3);
                    chat(21 , 952);
                    break;
                case 4:
                    if (future.get("ralphPole") > -1) {
                        chat(20, 952);
                    }
                    else {
                        sc.completeMissionTask("ralph", "cult", 4); 
                        future.add("ralphNoFuck", 3);
                        chat(25, 952);
                    }
                    break;
            }
            break;
        case "icon_boys_ralph":
            if (future.get("ralphNoFuck") > -1) {
                chat(42, 952);
            }
            else {
                chat(43, 952);
            }
            break;
        case "c2":
            nav.kill();
            nav.bg("952_hallway/bbg.jpg");
            if (sc.getMissionTask("security", "ranch", 6).startedOrComplete) {
                nav.button({
                    "type": "btn",
                    "name": "security",
                    "left": 999,
                    "top": 154,
                    "width": 441,
                    "height": 926,
                    "image": "952_hallway/security.webp"
                }, 952);
            }
            else {

            }
            nav.back("turnaround");
            break;
        case "security":
            switch (sc.taskGetStep("security", "cult")) {
                case -1:
                case 0:
                    sc.startMission("security", "cult");
                    sc.completeMissionTask("security", "cult", 0); 
                    chat(6, 952);
                    break;
                case 1:

                    break;
            }
            break;
        case "c3":
            nav.kill();
            nav.bg("952_hallway/bbg.jpg");
            nav.button({
                "type": "btn",
                "name": "double",
                "left": 863,
                "top": 98,
                "width": 572,
                "height": 982,
                "image": "952_hallway/double.webp"
            }, 952);
            nav.back("turnaround");
            break;
        case "double":
            if (sissy.st[0].ach)
                chat(12, 952);
            break;
        default:
            break;
    }
};

room952.chatcatch = function (callback) {
    switch (callback) {
        case "ralph2":
        case "ralph6":
        case "ralph7":
            nav.kill();
            nav.bg("952_hallway/" + callback + ".webp"); 
            break;
        case "ralph5":
        case "ralph9":
            nav.bg("952_hallway/" + callback + "_" + gender.pronoun("f") + ".webp"); 
            break;
        case "ralph4":
            nav.kill();
            nav.bg("952_hallway/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "ralph8":
            levels.anal(4, true, "m", false, "cult");
            nav.bg("952_hallway/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "ralph20":
            levels.oralass("m", "ralph");
            trophy.add(32);
            nav.bg("952_hallway/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "reset_c2":
        case "reset_c3": 
        case "reset_c1":
            room952.btnclick(callback.replace("reset_", ""));
            break;
        case "reset":
            char.room(952);
            break;
        case "bodhi":
            nav.kill();
            nav.bg("952_hallway/bodhi0.jpg");
            if (sc.getMission("bodhi", "cult", 4).notStarted) {
                sc.startMission("bodhi", "cult");
                sc.completeMissionTask("bodhi", "cult", 0);
                sc.completeMissionTask("bodhi", "cult", 1);
                sc.completeMissionTask("bodhi", "cult", 2);
                sc.completeMissionTask("bodhi", "cult", 3);
                sc.show("bodhi");
                chat()
            }
            if (g.internal.chaple > 0 && !sc.getEvent("daria", -1)) {
                nav.killall();
                nav.bg("952_hallway/bodhi0.jpg");
                chat(3, 952);
            }
            else {
                if (sc.getstep('daria') < 5) {
                    sc.setstep('daria', 5);
                    nav.killall();
                    nav.bg("952_hallway/bodhi0.jpg");
                    chat(15, 952);
                }
                else {
                    nav.killall();
                    nav.bg("952_hallway/bodhi0.jpg");
                    chat(46, 952);
                }
            }
            break;
        case "end1":
            sc.setstep("daria", -1);
            g.internal.interval++;
            char.room(950);
            break;
        case "escape1":
            nav.killall();
            nav.bg("952_hallway/escape1.jpg");
            nav.button({
                "type": "btn",
                "name": "escape2cancel",
                "left": 505,
                "top": 958,
                "width": 807,
                "height": 120,
                "title": "Return to your hallway",
                "image": "952_hallway/escape2cancel.png"
            }, 952);
            nav.button({
                "type": "btn",
                "name": "escape2",
                "left": 1364,
                "top": 199,
                "width": 169,
                "height": 705,
                "title": "Try the side hallway",
                "image": "952_hallway/escape2.png"
            }, 952);
            break;
        case "escape4":
            nav.bg("952_hallway/escape4.jpg");
            break;
        case "escape5":
            nav.bg("952_hallway/escape5.jpg");
            break;
        case "escape6":
            nav.bg("952_hallway/escape6.jpg");
            break;
        case "escape7":
            char.addDays(1);
            char.settime(2, 0);
            nav.bg("952_hallway/escape7.jpg");
            break;
        case "escape8":
            char.settime(9, 0);
            nav.bg("952_hallway/escape8.jpg");
            break;
        case "escape9":
            nav.bg("952_hallway/escape9.jpg");
            break;
        case "escape10":
            nav.bg("952_hallway/escape10.jpg");
            break;
        case "escape11":
            char.settime(14, 0);
            gv.set("energy", 0);
            gv.mod("receiveAnalMale", 1);
            gv.mod("creamPied", 1);
            cl.c.butthole += .5;
            g.internal.nightEvent = false;
            g.internal.interval = 2;
            g.internal.constDayDirty++;
            g.internal.day++;
            g.internal.jo = false;
            g.pass = 950;
            g.internal.food = false;
            char.room(950);
            break;
        case "butt1":
            nav.killall();
            nav.bg("952_hallway/butt1.jpg");
            break;
        case "butt2":
            nav.bg("952_hallway/butt2.jpg");
            nav.next("butt2");
            break;
        case "butt3":
            nav.bg("952_hallway/butt3.jpg");
            break;
        case "butt4":
            levels.anal(4, true, "f", false, "daria");
            room952.chatcatch("leave");
            break;
        case "l0":
            g.pass = 0;
            nav.next("t1");
            break;
        case "b1":
            g.pass = 0;
            nav.killall();
            nav.bg("952_hallway/b1.jpg");
            nav.button({
                "type": "kiss",
                "name": "b1",
                "left": 765,
                "top": 0,
                "width": 390,
                "height": 927,
                "image": "952_hallway/b1.png"
            }, 952);
            break
        case "b2":
            nav.killall();
            nav.bg("952_hallway/b2.jpg");
            zcl.kneel(-200, -200, 1.3, "open", true);
            break;
        case "b2a":
            nav.bg("952_hallway/b2.jpg");
            break;
        case "b3":
            nav.bg("952_hallway/b3.jpg");
            break;
        case "b4s":
            nav.bg("952_hallway/bbg.jpg");
            nav.button({
                "type": "img",
                "name": "xx",
                "left": 911,
                "top": 0,
                "width": 1080,
                "image": "952_hallway/b4s.png"
            }, 952);
            gv.mod("giveOralMale", 1);
            gv.mod("loadSwollowed", 1);
            break;
        case "b4f":
            nav.bg("952_hallway/bbg.jpg");
            cl.c.cumface = true;
            zcl.displayMain(0, -150, .55, "", false);
            nav.button({
                "type": "img",
                "name": "xx",
                "left": 1042,
                "top": 639,
                "width": 353,
                "height": 441,
                "image": "952_hallway/b4f.png"
            }, 952);
            gv.mod("giveOralMale", 1);
            gv.mod("loadSpit", 1);
            break;
        case "b5":
            g.internal.interval++;
            char.room(950);
            break;
        case "double1":
            if (cl.c.cock < 4) {
                inv.add("tinypp");
                nav.modbutton("double", "952_hallway/double1.webp", null, null);
                chat(19, 952);
            }
            else {
                chat(18, 952);
            }
            break;
        case "doubleReset":
            room952.btnclick("c3");
            break;
        case "ralph3":
            nav.kill();
            nav.bg("952_hallway/ralph3.webp");
            zcl.displayMain(100, 1300, .16, "clothes", true);
            break;
        case "leave":
            gv.mod("cultDayCounter", 1);
            char.room(950);
            break;
        default:
            break;
    }
};

room952.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "thinking",
            text: "Return to my cell?",
            button: [
                { chatID: -1, text: "Yes. Return to my cell.", callback: "return" },
                { chatID: -1, text: "No. Stay out here a bit longer. ", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ralph",
            text: "Oh wow, am I glad you're here! " + sc.n("!chris") + " and " + sc.n("!timothy") + 
                " are great and all, but they really just want to hang out together. I always feel like " +
                "the odd one out. Finally my buddy is here! So did they tell you? Are you a girl too? ",
            button: [
                { chatID: 2, text: "A girl too?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "ralph",
            text: "That doctor guy, what's his name. He put that thing in my butt and told me I have a " +
                "pussy under my balls. I don't know if that's true. I've been checking and I don't see " +
                "a pussy, but he says I'm really a girl. Boy will dad be suprised! I think Mom will be " +
                "ok with it though. I still don't know how to get to my pussy. I kinda want to play with it, " +
                "ya know. Just to see how it's like. ",
            button: [
                { chatID: 3, text: "Oh yeah, that. Yes, I'm a girl too. ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "ralph",
            text: "That's so awesome! I wonder how they knew we were girls? I mean, I didn't even know. But " +
                "the cool thing is when these guys have sex with me it's ok, since I'm a girl. They're just having " +
                "sex with a girl. ",
            button: [
                { chatID: 4, text: "Lol, A girl that can't find her vagina. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "ralph",
            text: "haha, yeah. I keep looking, but I have no idea where it is. They said I had to earn " +
                "the chance to find my vagina, but I'm ok with just hanging out in here. They can " +
                "sweep their own floors. And the other things. Gross! Do you know they asked me to " +
                "get peed on! Like who would do that! Not me! I have too much respect for myself for that! ",
            button: [
                { chatID: 5, text: "oh... yeah me too. ", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "ralph",
            text: "Yeah. It's pretty boring here, but you now I like that. I get to just hang out, they feed " +
                "me, and every once in a while someone comes over for sex. I do wish more girls would come " +
                "over, but *sigh* just guys. All guys. So many pensises, I've lost count. But anytime you " +
                "just want to hang out, I'm here. ",
            button: [
                { chatID: -1, text: "Ok ", callback: "reset_c1" }
            ]
        },
        {
            chatID: 6,
            speaker: "security",
            text: "Oh crap! Hello! I'm so happy to see you! I thought you'd be trapped at " + sc.n("rachel") +
                "'s forever when I left! I was so happy when I heard you made it here! You are, after all, " +
                "the reason my life has meaning now. ",
            button: [
                { chatID: 7, text: "Who are you? ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "security",
            text: sc.n("security") + "! I was your guard at " + sc.n("rachel") + "'s. At least I was the guard " +
                "before you showed me who I really am. You gave me my first sissygasm! So good. Now I'm here. I tell you " +
                "those hormones the doctor hands are are really potent! I can't wait for my giant soft titties! ",
            button: [
                { chatID: 8, text: "Oh yeah! I remember you! ", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "security",
            text: "Listen, I'm sorry I was such a dick to you before I found myself. The cult really messes " +
                "with your mind. They really brain wash you into thinking sissies are just cum holes and not " +
                "real people. I have done some terrible things before I found myself. I guess my only real problem " +
                "is now that I've found myself I'm trapped here, I don't know what happens next, but I know it's bad. ",
            button: [
                { chatID: 9, text: "Bad? ", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "security",
            text: "Yeah. Like the sows on the farm, we're here to get bred and bring about Azrael. So far no " +
                "Sissy turned girl has given birth to Azrael. A couple girls have been pregnant with real babies, " +
                "a bunch miscarried, but most aren't able to conceive. I don't know what happens after they've been " +
                "deemed a failure, but I do know they disappear. The rumor is they are either killed or sent to the " +
                "swamps to die there. ",
            button: [
                { chatID: 10, text: "The swamps?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "security",
            text: "Yes. There's been a lot lately. I think Ubels tired of waiting. I'm trying to play " +
                "it safe. Be good enough to get fucked, but not so good they try to impregnate me. Just " +
                "need to buy some time to get out of here. Maybe steal a bunch of those suppositories before " +
                "I get out of here. It's just really hard to escape. ",
            button: [
                { chatID: 11, text: "If you do escape, you should take me with you. ", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "security",
            text: "Yeah. You look for a way out of here too. We'll work together. Just be good and do what " +
                "they say in the mean time. ",
            button: [
                { chatID: -1, text: "Nice! ", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "!timothy",
            text: "We were wondering when you'd finally get out of your cage! ",
            button: [
                { chatID: 13, text: "Oh wow! Hi!", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "!chris",
            text: "I was just tellin' " + sc.n("!timothy") + " it would be so fun when you finally get out! " +
                "You are one of the fun ones. ",
            button: [
                { chatID: 14, text: "Thanks", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "!timothy",
            text: "Yeah. There's just so much dick here! Really we get to just sit back, eat and get fucked " +
                "all day! This is so heaven! My prostate is so empty of cum right now. We had 10 sissygasms " +
                "before lunch! ",
            button: [
                { chatID: 15, text: "Wow, 10?", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "!chris",
            text: "She had 10 sissygasms. I was with this guy that had a little penis. It took him " +
                "forever to cum. He said he was just really nervous, he's never been with a girl as beautiful as " +
                "me. It was really cute. ",
            button: [
                { chatID: 16, text: "Awww you are beautiful. ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "!timothy",
            text: "Those pills really do make us hot. And that penis shirnking cream is the best! So glad " +
                sc.n("!chris") + " was able to talk the doctor into letting us use it. ",
            button: [
                { chatID: 17, text: "Penis shrinking cream?", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "!chris",
            text: "Oh yes. I told the doctor I wanted a vagina now, my penis is way too big. He said it's " +
                "too soon, but he game me this cream and told me to use it every day. My clit is so small and " +
                "limp I have to sit down to pee or I pee all over my balls. ",
            button: [
                { chatID: -1, text: "Really?", callback: "double1" }
            ]
        },
        {
            chatID: 18,
            speaker: "!chris",
            text: "I would offer you some, but your clit is as tiny as ours! hehehe. ",
            button: [
                { chatID: -1, text: "Hehe. I do have a tiny pee pee.", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "!chris",
            text: "Yeah. Our clits are as tiny as they're going to get. You can take my jar. Just put it " +
                "on and while you sleep your clitty will shrink. It works really good! That doctor is amazing. ",
            button: [
                { chatID: -1, text: "Thanks, I think. ", callback: "doubleReset" }
            ]
        },
        {
            chatID: 20,
            speaker: "ralph",
            text: "I wish I could tell my parents I'm ok, but I do like it here. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "ralph",
            text: "Were you able to see my parents? I hope they're not too worried.",
            button: [
                { chatID: 22, text: "...", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "They are both so worried. No one knew exactly what happened, we all just knew " +
                "that the cult had something to do with it. They talked to the police, but you know, " +
                "the police aren't going to do anything. We have to figure out a way out of here and get you " +
                "back to them. ",
            button: [
                { chatID: 23, text: "...", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "ralph",
            text: "Damn. Yeah. If not for my parents I would probably try to stay here forever. Maybe they'll " +
                "let me out if I promise to come back? ",
            button: [
                { chatID: 24, text: "I don't think so, but I guess it can't hurt to ask. ", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "ralph",
            text: "I'll do that! When they take me up to room eight to milk the penises I'll ask around and " +
                "see if they'll let me out of here! There's got to be a way! ",
            button: [
                { chatID: -1, text: "You should do that! ", callback: "reset_c1" }
            ]
        },
        {
            chatID: 25,
            speaker: "ralph",
            text: "oh wow! They had me sit on that pole with a dildo in my mouth for three days! Three " +
                "days! The only water I drank was piss! That was the only thing I could drink! For three " +
                "days! My hole is still sore! Please rub some lotion on it. I can't reach. So chapped! ",
            button: [
                { chatID: 26, text: "*ugh* Fine", callback: "ralph2" }
            ]
        },
        {
            chatID: 26,
            speaker: "ralph",
            text: "Oh god! That feels so good. You have no idea how much my butthole hurts! Every time " +
                "I squat I can feel my hole scream in pain. ",
            button: [
                { chatID: 27, text: "Do you know why they put you out there?", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "ralph",
            text: "So I was in room eight giving this guy and hand job and I asked him if I can go home for " +
                "a bit, just to let my parents know I'm safe. He laughed and came on my face. Then he talked " +
                "to this other guy and told me to ask him. Well I asked him if I could go home for a tiny bit. ",
            button: [
                { chatID: 28, text: "uh huh..", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "ralph",
            text: "He said fuck no. How dare I even ask. He then ordered me to lay down, ass up and spanked me " +
                "in front of everyone. Told everyone I was trying to escape. I tried to say I was just asking, but " +
                "he accused me of lying. Next thing I know I have this foot long dildo down my throat and that " +
                "horrible horrible stick up my butt. ",
            button: [
                { chatID: 29, text: "Those assholes!", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "ralph",
            text: "Yeah. I suddenly don't want to be here anymore. It's just hand jobs from me from now " +
                "on! Thanks for putting that lotion on my hole. It's so sore. ",
            button: [
                { chatID: -1, text: "No problem. ", callback: "reset_c1" }
            ]
        },
        {
            chatID: 30,
            speaker: "daria",
            text: "We need to talk. With the failed ritual they sacrificed the chosen one to appease Azreal. ",
            button: [
                { chatID: 31, text: "The chosen one?", callback: "" },
            ]
        },
        {
            chatID: 31,
            speaker: "daria",
            text: "Yes. The girl you saw that was bathed in cum. It will be a while before a new chosen one is selected, " +
                "but I overheard the list of names and both of you are on it. ",
            button: [
                { chatID: 32, text: "What? Me? But I can't be one! ", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "daria",
            text: "Oh that. It's funny how word gets around and it's always wrong. The cum bath ritual that brings about the coming " +
                "of Azreal is done with girl that was born a boy. They have a lot of dumb rituals, but this one is for real. " +
                sc.n("ubel") + " has figured out how to turn a guy into a full on chick, pussy and everything. ",
            button: [
                { chatID: 33, text: "Really, how do they do that?", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "daria",
            text: "I'm not entirly sure, but I do know that they choose one of you from the cells. From what I understand " +
                "he picks the most submissive slave and forces them to take part. He gives them some drug then puts them in the tub " +
                "of cum and they are forced to stay there until they drink the entire tub. It usually takes a few days to drink that " +
                "much cum. I've been there on the third day and the smell is absolutly horrible. ",
            button: [
                { chatID: 34, text: "But why us?", callback: "" }
            ]
        },
        {
            chatID: 34,
            speaker: "daria",
            text: "I'm not sure if you pay attention, but it will consume all the femboys in this place. " +
                "That's why we need to get out of " +
                "here, all three of us. I have a plan, but I'll need your help. ",
            button: [
                { chatID: 35, text: "Sweet! What do you need?", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "daria",
            text: "Each week they do the ceremony which brings almost everyone into the main room, to " +
                "include most of the guards. This is the perfect time for our getaway. I know a rarely used side entrance. It has a " +
                "camera monitoring it, but I can clip those wires the day before the ceremony so they won't see us sneaking out. " +
                "It usually takes a few days to get supplies this far back in the woods, so that camera should stay down. I'll be " +
                "able to create a diversion to draw any guard away if they choose to guard that door. ",
            button: [
                { chatID: 36, text: "...", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "daria",
            text: "After the way is cleared you'll need to follow me. I know a side trail in the swamp that will take us to the city, but once we reach " +
                "the city " + sc.n("bodhi") + " and I are going to disappear so you'll be on your own. Now the door to the side entrace is locked and I'll " +
                "need your help unlocking it. ",
            button: [
                { chatID: 37, text: "What do you need from me?", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "daria",
            text: "When you sweep up you'll need a way to pull the keys off the desk. I don't care how you do it, but you need " +
                "those keys. I know they guard. He's an absolute tool who thinks he can never fuck up. If you can get them " +
                "he won't tell anyone because he doesn't want to get in trouble. But you'll have to hide them... in your body.",
            button: [
                { chatID: 38, text: "In my body?", callback: "" }
            ]
        },
        {
            chatID: 38,
            speaker: "daria",
            text: "Up your butt dummy. You can't get caught, so make sure you can fit those big skelton keys in your butt before " +
                "you try to steal them or this entire plan is sunk. ",
            button: [
                { chatID: 39, text: "I can do that. ", callback: "" }
            ]
        },
        {
            chatID: 39,
            speaker: "daria",
            text: "I know, you butt freak. After you get the keys I'll come get them from you. Then just act cool and wait until you're invited to " +
                "the next ceremony. Act cool and do whatever they tell you to do. ",
            button: [
                { chatID: 41, text: "Ok. ", callback: "" },
                { chatID: 40, text: "But what if I want to stay and be turned into a girl? ", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "daria",
            text: "Having a pussy is great, but you don't want to be their chosen one. " +
                "You'll be locked away in a special cell with no way to escape. You be made to bathe in the cum and one of two things will " +
                "happen. One. The cult is real and Azreal will burst from your womb and split you open killing you. Or two, the cult is " +
                "bullshit and they'll sacrafice you to appease Azreal. Either way you end up dead. It would take a full on FBI raid " +
                "with a ton of bloodshed for you to ever see the light of day again. ",
            button: [
                { chatID: 41, text: "Oh.", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "daria",
            text: "Remember to get those keys! Shove them way up there so you aren't discovered. I mean " +
                "Really deep in that ass so when you get pounded they aren't slamming their dick into the " +
                "keys. ",
            button: [
                { chatID: -1, text: "Right. Shove the keys deep in my ass. ", callback: "leave" }
            ]
        },
        {
            chatID: 42,
            speaker: "ralph",
            text: "My ass is too sore! Maybe later. ",
            button: [
                { chatID: -1, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 43,
            speaker: "ralph",
            text: "YES! I woke up so horny today! So want to get railed with you! One second I know " +
                "someone. He always says how much he likes my Badonkadonk. That means he likes my butt, hehe. ",
            button: [
                { chatID: 44, text: "Go get him!", callback: "ralph3" }
            ]
        },
        {
            chatID: 44,
            speaker: "cult",
            text: "Get over here you two. Pleasure this dick",
            button: [
                { chatID: 45, text: "[Pleasure his dick]", callback: "ralph4" }
            ]
        },
        {
            chatID: 45,
            speaker: "cult",
            text: "Oh yeah bitch, swollow that cock. Bottom bitch, gobble my balls. ",
            button: [
                { chatID: 46, text: "[Move down to his balls]", callback: "ralph5" }
            ]
        },
        {
            chatID: 46,
            speaker: "cult",
            text: "You two make a great couple. A great couple of cock suckers. Nut gobbler, bend over, " +
                "I'm gunna start with that ass. ",
            button: [
                { chatID: 47, text: "[Bend your ass over for his penis]", callback: "ralph6" }
            ]
        },
        {
            chatID: 47,
            speaker: "cult",
            text: "Oh shit that's a great asshole. Really loves to take a pouding!  ",
            button: [
                { chatID: 48, text: "I think I'm... I think... I'm...", callback: "ralph7" }
            ]
        },
        {
            chatID: 48,
            speaker: "me",
            text: "Cumming!!!! Oh god! Don't stop! ",
            button: [
                { chatID: 49, text: "I'm gunna cum again!!", callback: "" }
            ]
        },
        {
            chatID: 49,
            speaker: "cult",
            text: "Oh shit that's a great asshole. Fuck. Fat sissy bend your ass over. I'm going to " +
                "finish up in that big ass badonkadonk of yours! ",
            button: [
                { chatID: 50, text: "[Switch places]", callback: "ralph8" }
            ]
        },
        {
            chatID: 50,
            speaker: "cult",
            text: "Love the way that ass shakes when I pound my fat dick up in it! Skinny sissy, I hope " +
                "you're hungry for more than the taste of your girlfriends asshole. ",
            button: [
                { chatID: 51, text: "*slurp* *lick*", callback: "ralph9" }
            ]
        },
        {
            chatID: 51,
            speaker: "cult",
            text: "Now slurp that cum right out of his asshole like it's a fucking bowl of oatmeal.",
            button: [
                { chatID: 52, text: "[Eat up all that yummy thick cum]", callback: "ralph10" }
            ]
        },
        {
            chatID: 52,
            speaker: "cult",
            text: "Good girls. ",
            button: [
                { chatID: -1, text: "[Return to your cell]", callback: "leave" }
            ]
        },
        {
            chatID: 53,
            speaker: "me",
            text: "So what brings you two here?",
            button: [
                { chatID: 54, text: "...", callback: "" }
            ]
        },
        {
            chatID: 54,
            speaker: "daria",
            text: "That's a long story. I've kind of always been here, but " + sc.n("bodhi") + " was a " +
                "searcher. He found his way here looking to live and fuck and eat. Really a simple boy. ",
            button: [
                { chatID: 55, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 55,
            speaker: "daria",
            text: "Yes, " + sc.n("bodhi") + " had just lost his job selling surf boards. He " +
                "hated working these doldrum jobs so much that when we heard about this place we gave up everything and came here. ",
            button: [
                { chatID: 56, text: "That's crazy", callback: "" }
            ]
        },
        {
            chatID: 56,
            speaker: "daria",
            text: "Yeah. He goofed up when they asked if he was a cum giver or sissy. His last girlfriend was " +
                "named Cissey and he thought they asked if anyone else dated Cissey. My boy's not super bright. But " +
                "he was examined and they found that he does have a uterus, so now he's stuck as my bitch. ",
            button: [
                { chatID: 57, text: "Really", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "bodhi",
            text: "I haven't had a normal manly orgasm in almost 2 years! Once you get in touch with your sissy pussy it's the only way! " +
                "My orgasms are so intense they usually last for 5 minutes. " + sc.n("daria") + " really is the best! ",
            button: [
                { chatID: 58, text: "Wow", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "daria",
            text: "She really is a hungry butt slut. The best thing is there's plenty of well endowed men here that I can grab at any time " +
                "to fill both of our holes. No more searching, I just ask in the hallway on my way here. ",
            button: [
                { chatID: 59, text: "...", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "bodhi",
            text: "That cultist Tom is my favorite! I've never seen you orgasm so hard that when he was fucking you while I licked your clit. " +
                "He really filled us both so much! Nacy is fun too! Her fist is the perfect size for both of us! ",
            button: [
                { chatID: 60, text: "I want to play!", callback: "" }
            ]
        },
        {
            chatID: 60,
            speaker: "daria",
            text: "I suppose we'll let you. We like to be fucked by strong manly men, but you're not manly. If you want you can play " +
                "as our sissy. I'll even let you pick. I can fuck you both, or both of you can serve me. ",
            button: [
                { chatID: 62, text: "I want to get fucked!", callback: "" },
                { chatID: 71, text: "I want to serve you", callback: "" },
                { chatID: -1, text: "No thanks", callback: "reset" },
            ]
        },
        {
            chatID: 61,
            speaker: "daria",
            text: "So what do you want to do? ",
            button: [
                { chatID: 62, text: "I want to get fucked!", callback: "" },
                { chatID: 71, text: "I want to serve you", callback: "" },
                { chatID: -1, text: "Nothing", callback: "reset" },
            ]
        },
        {
            chatID: 62,
            speaker: "daria",
            text: "I love fucking sissies! Assume the position! ",
            button: [
                { chatID: 63, text: "Yes!", callback: "" }
            ]
        },
        {
            chatID: 63,
            speaker: "bodhi",
            text: "I get bottom! ",
            button: [
                { chatID: 64, text: "I guess I get top", callback: "butt1" }
            ]
        },
        {
            chatID: 64,
            speaker: "daria",
            text: "You two are really a couple of eager sluts. ",
            button: [
                { chatID: -1, text: "Yes we are!", callback: "butt2" }
            ]
        },
        {
            chatID: 65,
            speaker: "daria",
            text: "You like it when I alternate my strokes between your pussies? ",
            button: [
                { chatID: 66, text: "Oh yeah", callback: "" }
            ]
        },
        {
            chatID: 66,
            speaker: "daria",
            text: "It gets me so hot shoving my cock into your soft warm pussies. ",
            button: [
                { chatID: 67, text: "*moan*", callback: "" }
            ]
        },
        {
            chatID: 67,
            speaker: "bodhi",
            text: "I'm going to cum all over you! I'm so close! ",
            button: [
                { chatID: 68, text: "Fuck, I'm going to cum all over you too!", callback: "" }
            ]
        },
        {
            chatID: 68,
            speaker: "daria",
            text: "You sluts are so easy. Now clean my cock!",
            button: [
                { chatID: 69, text: "Ok. ", callback: "butt3" }
            ]
        },
        {
            chatID: 69,
            speaker: "daria",
            text: "Oh yeah. Lick it up sluts. Taste your yummy pussies. ",
            button: [
                { chatID: 70, text: "Yummy!", callback: "" }
            ]
        },
        {
            chatID: 70,
            speaker: "daria",
            text: "Nice and clean. You are both good sluts. Now run along, I've got to attend to my sissy. ",
            button: [
                { chatID: -1, text: "Ok. ", callback: "butt4" }
            ]
        },
        {
            chatID: 71,
            speaker: "daria",
            text: "Oh good. I do love it when I can relax and go at a slower pace. You sissies always want a hard fucking, spitting, " +
                "slapping and anal, but you think you're serving me. I'm going to show you what real service looks like. Lay down " +
                "while I sit on your face. ",
            button: [
                { chatID: -1, text: "...", callback: "l0" },
            ]
        },
        {
            chatID: 72,
            speaker: "daria",
            text: "I love your lips " + sc.n("bodhi") + ". And you " + sc.n("me") + " you're not bad. You really know how to serve a " +
                "woman. Come back anytime to eat my pussy. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },






















































        


















        {
            chatID: 1,
            speaker: "thinking",
            text: "Visit " + sc.n("bodhi") + "?",
            button: [
                { chatID: -1, text: "Yes. Visit " + sc.n("bodhi") + ".", callback: "bodhi" },
                { chatID: -1, text: "No. Stay out here a bit longer. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "random",
            text: "So you think it's cool to just walk into my cell? ",
            button: [
                { chatID: 49, text: "Sorry, the door was open", callback: "" },
                { chatID: -1, text: "Oh no. Sorry I'm leaving ", callback: "reset" }
            ]
        },
        
        {
            chatID: 15,
            speaker: "daria",
            text: "I see you've been a good and following the cult's orders and are behaving like a good slut. ",
            button: [
                { chatID: 29, text: "I have. ", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "I'm not supposed to go that way, but I may be able to escape if there's no one watching. ",
            button: [
                { chatID: 17, text: "Attempt to escape", callback: "escape1" },
                { chatID: -1, text: "Cancel", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "thinking",
            text: "He sounds like he's asleep. I could try the side hallway or return to the hallway. ",
            button: [
                { chatID: -1, text: "Make my choice", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "cult",
            text: "What are you doing this far out of your cell! ",
            button: [
                { chatID: 19, text: "I, uh... what? ", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cult",
            text: "Come with us slut. You must be punished for your actions. ",
            button: [
                { chatID: 20, text: "I should've guessed. ", callback: "escape4" }
            ]
        },
        {
            chatID: 20,
            speaker: "cult",
            text: "A day on the slut pole should teach you some discipline. ",
            button: [
                { chatID: 21, text: "whimper", callback: "escape5" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "It's so wide and deep! There's no way to get comfortable on this giant thing!",
            button: [
                { chatID: 22, text: "...", callback: "escape6" }
            ]
        },
        {
            chatID: 22,
            speaker: "bodhi",
            text: "That pole is the worst! I've had to sit on it once when one of the guards tried to fuck me. I told him that I " +
                "was the property of " + sc.n("daria") + " and only she can fuck me. He didn't like that and put me on the " +
                "pole before I could let her know. When " + sc.n("daria") + " found out she really kicked that guy's ass and let " +
                "everyone know I was her property. ",
            button: [
                { chatID: 23, text: "...", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "bodhi",
            text: "You do look sexy impaled on that pole. I would jack you off, but I don't want to get in trouble for wasting seed. " +
                "You won't be here forever. Just promise me you'll be good. ",
            button: [
                { chatID: 24, text: "ok", callback: "escape5" }
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "How long are they going to keep me up here?",
            button: [
                { chatID: 25, text: "...", callback: "escape7" }
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "ZZzzzZZZzzz",
            button: [
                { chatID: 26, text: "...", callback: "escape8" }
            ]
        },
        {
            chatID: 26,
            speaker: "cult",
            text: "It looks like this one passed out from exhaustion. I like it when they don't resist. ",
            button: [
                { chatID: 27 , text: "...", callback: "escape9" }
            ]
        },
        {
            chatID: 27,
            speaker: "cult",
            text: "I'll just leave her a present for when she wakes up! And by present I mean my cum dripping out of her asshole!",
            button: [
                { chatID: 28, text: "...", callback: "escape10" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "zzzZZZzzz",
            button: [
                { chatID: -1, text: "[Wake up]", callback: "escape11" }
            ]
        },
        {
            chatID: 29,
            speaker: "bodhi",
            text: "I told you, you just need to be cool!",
            button: [
                { chatID: 30, text: "So what are you two doing here?", callback: "" }
            ]
        },
        
        
        {
            chatID: 46,
            speaker: "daria",
            text: "Back again? So how do you want to play?",
            button: [
                { chatID: 37, text: "I want to get fucked!", callback: "" },
                { chatID: 47, text: "I want to serve you.", callback: "" },
                { chatID: -1, text: "Nope. ", callback: "reset" }
            ]
        },
        {
            chatID: 47,
            speaker: "daria",
            text: "Oh good. I do love it when I can relax and go at a slower pace. You sissies always want a hard fucking, spitting, " +
                "slapping and anal, but you think you're serving me. I'm going to show you what real service looks like. Lay down " +
                "while I sit on your face. ",
            button: [
                { chatID: -1, text: "...", callback: "l0" },
            ]
        },
        {
            chatID: 48,
            speaker: "daria",
            text: "I love your lips " + sc.n("bodhi") + ". And you " + sc.n("me") + " you're not bad. You really know how to serve a " +
                "woman. Come back anytime to eat my pussy. ",
            button: [
                { chatID: -1, text: "...", callback: "l4" },
            ]
        },
        {
            chatID: 49,
            speaker: "random",
            text: "You can't stop staring at my cock huh? It's really pretty. I bet you want me to shove it in your face. ",
            button: [
                { chatID: 50, text: "huh?", callback: "b1" },
                { chatID: -1, text: "Yelp [Run away]", callback: "reset" }
            ]
        },
        {
            chatID: 50,
            speaker: "random",
            text: "It's pretty ain't it. Kiss it.",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 51,
            speaker: "random",
            text: "Good slut. Kiss it again. ",
            button: [
                { chatID: -1, text: "MMmmMmmmm", callback: "" },
            ]
        },
        {
            chatID: 52,
            speaker: "random",
            text: "I bet you want to wrap your sissy lips around this cock huh? It's too pretty not to be deep down your throat. ",
            button: [
                { chatID: 53, text: "mmmmm yes.", callback: "b2" },
            ]
        },
        {
            chatID: 53,
            speaker: "random",
            text: "Now swollow this dick! ",
            button: [
                { chatID: 54, text: "glog", callback: "b3" },
            ]
        },
        {
            chatID: 54,
            speaker: "random",
            text: "Your Your throat is so tight",
            button: [
                { chatID: 55, text: "Gasp", callback: "b2" },
            ]
        },
        {
            chatID: 55,
            speaker: "random",
            text: "Your face is so fuckable.",
            button: [
                { chatID: 56, text: "GLUG", callback: "b3" },
            ]
        },
        {
            chatID: 56,
            speaker: "random",
            text: "Should I shoot it down your throat, or all over your face?",
            button: [
                { chatID: 57, text: "Swollow", callback: "b4s" },
                { chatID: 57, text: "Cum on my face", callback: "b4f" },
            ]
        },
        {
            chatID: 57,
            speaker: "random",
            text: "Allright slut. Get out. I needa nap. ",
            button: [
                { chatID: -1, text: "ok", callback: "b5" } 
            ]
        },
        
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};