//Room name
var room526 = {};
room526.main = function () {
    var btnList = [{
        "type": "btn",
        "name": "zoey",
        "left": 1581,
        "top": 359,
        "width": 146,
        "height": 294,
        "image": "526_bar/zoey.png"
    }];

    if (g.rand(0, 4) === 0) {
        if (sc.getMissionTask("holly", "bar", 0).notStarted) {
            btnList.push({
                "type": "btn",
                "name": "h1",
                "left": 0,
                "top": 191,
                "width": 627,
                "height": 889,
                "image": "526_bar/h1.png"
            });
        }
    }
    else {
        if (!daily.get("orchid")) {
            btnList.push({
                "type": "btn",
                "name": "g1",
                "left": 0,
                "top": 259,
                "width": 509,
                "height": 821,
                "image": "526_bar/g1.png"
            });
        }
    }

    var mid = g.rand(0, 4);
    if (mid > 1 || !daily.get("keaton")) {
        btnList.push({
            "type": "btn",
            "name": "m" + mid,
            "left": 735,
            "top": 316,
            "width": 585,
            "height": 764,
            "image": "526_bar/m" + mid + ".png"
        });
    }

    $.each(btnList, function (i, v) {
        nav.button(v, 526);
    });

    nav.buildnav([527, 0]);
};

room526.btnclick = function (name) {
    switch (name) {
        case "zoey":
            nav.killall();
            nav.bg("526_bar/zoey.jpg");
            if (sc.taskGetStep("zoey", "sex") === 2) {
                if (inv.has("handcuff") && cl.c.chastity !== null) {
                    chat(40, 526);
                }
                else if (!inv.has("handcuff")) {
                    chat(38, 526);
                }
                else {
                    chat(39, 526);
                }
            }
            else if (sc.getLevel("zoey") > 4 && sc.getMission("zoey", "cheating").success)
                chat(31, 526);
            else
                chat(30, 526);
            break;
        case "g1":
            nav.killall();
            nav.bg("526_bar/g2.jpg");
            if (sc.getMission("orchid", "slut").notStarted) {
                sc.startMission("orchid", "slut");
                sc.completeMissionTask("orchid", "slut", 0);
                sc.show("orchid");
                daily.set("orchid");
                chat(0, 526);
            }
            else {
                daily.set("orchid");
                chat(70, 526);
            }
            break;
        case "h1":
            nav.killall();
            nav.bg("526_bar/h2.jpg");
            chat(8, 526);
            break;
        case "m0":
            nav.killall();
            nav.bg("526_bar/m0_0.jpg");
            daily.set("keaton");
            chat(20, 526);
            break;
        case "m1":
            nav.killall();
            nav.bg("526_bar/m1_0.jpg");
            daily.set("keaton");
            chat(13, 526);
            break;
        case "m2":
            nav.killall();
            nav.bg("526_bar/m2_1.jpg");
            chat(14, 526);
            break;
        case "m3":
            nav.killall();
            nav.bg("526_bar/m3_1.jpg");
            chat(15, 526);
            break;
        case "m0_fuck":
            nav.killall();
            if (gender.isCockTooSmallForSex()) {
                nav.bg("526_bar/m0_4_tiny.jpg");
                chat(27, 526);
            }
            else {
                nav.bg("526_bar/m0_4.jpg");
                chat(25, 526);
            }
            break;
        case "m0_chastity":
            nav.killall();
            nav.bg("526_bar/m0_4_chastity.jpg");
            chat(28, 526);
            break;
        case "m0_pass":
            nav.killall();
            nav.bg("526_bar/m0_4_chastity.jpg");
            chat(29, 526);
            break;
        case "m0_5":
            nav.bg("526_bar/m0_" + g.internal + ".jpg");
            if (g.internal === 11) {
                nav.killall();
                levels.fuckass("keaton", "m");
                chat(26, 526);
            }
            g.internal++;
            break;
        case "sex1_":
            nav.bg("526_bar/sex1_" + g.internal + "_" + gender.pronoun("f") + ".jpg");
            if (g.internal > 11) {
                nav.killall();
                chat(50, 526);
            }
            g.internal++;
            break;
        case "g4":
            switch (g.internal) {
                case 0: nav.bg("526_bar/g4.jpg"); break;
                case 1: nav.bg("526_bar/g5.jpg"); break;
                case 2: nav.bg("526_bar/g6_" + gender.pronoun("f") + "_" + gender.cock() + ".jpg"); break;
                case 3: nav.killall(); chat(63, 526); break;
            }
            g.internal++;
            break;
        case "g10":
            switch (g.internal) {
                case 0: nav.bg("526_bar/g10.jpg"); break;
                case 1: nav.bg("526_bar/g11_" + gender.pronoun("f") + ".jpg"); break;
                case 2: nav.bg("526_bar/g12_" + gender.pronoun("f") + ".jpg"); break;
                case 3: nav.killall(); chat(66, 526); break;
            }
            g.internal++;
            break;
        case "sex3_1":
            switch (g.internal) {
                case 0: nav.bg("526_bar/sex3_2.jpg"); break;
                case 1:
                    nav.killall();
                    nav.next("sex3_1");
                    nav.bg("526_bar/sex3_3_" + gender.pronoun("f") + ".jpg");
                    break;
                case 2: nav.bg("526_bar/sex3_4_" + gender.pronoun("f") + ".jpg"); break;
                case 3: nav.bg("526_bar/sex3_5.jpg"); break;
                case 4: nav.bg("526_bar/sex3_6.jpg"); nav.killall(); chat(55, 526); break;
            }
            g.internal++;
            break;
        case "s4":
            switch (g.internal) {
                case 0: nav.bg("526_bar/sex3_2.jpg"); break;
                case 1:
                    nav.killall();
                    nav.next("s4");
                    nav.bg("526_bar/sex3_3_" + gender.pronoun("f") + ".jpg");
                    break;
                case 2: nav.bg("526_bar/sex3_4_" + gender.pronoun("f") + ".jpg"); break;
                case 3: nav.bg("526_bar/sex3_5.jpg"); break;
                case 4: nav.bg("526_bar/sex3_6.jpg"); nav.killall(); chat(72, 526); break;
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room526.chatcatch = function (callback) {
    switch (callback) {
        case "m0_0":
        case "m0_1":
        case "m0_2":
        case "m0_3":
        case "sex1_1":
        case "sex1_3":
        case "sex1_4":
        case "g13":
            nav.bg("526_bar/" + callback + ".jpg");
            break;
        case "sex1_5":
        case "sex1_6":
        case "sex1_13":
        case "sex1_14":
            nav.bg("526_bar/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "sex1_15":
            sc.completeMissionTask("zoey", "sex", 2);
            levels.piss(false, false, true, "f", "stormy");
            levels.mod("xdress", 40, 999);
            sc.show("stormy");
            sc.startMission("stormy", "property");
            sc.completeMissionTask("stormy", "property", 0);
            g.pass = 502;
            gv.set("map", 1);
            char.room(28);
            break;
        case "sex1_7":
            g.internal = 8;
            nav.next("sex1_");
            nav.bg("526_bar/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "sex3_1":
            nav.bg("526_bar/" + callback + ".jpg");
            g.internal = 0;
            nav.button({
                "type": "tongue",
                "name": "sex3_1",
                "left": 969,
                "top": 725,
                "width": 145,
                "height": 145,
                "image": "526_bar/sex3_1.png"
            }, 526);
            break;
        case "z1":
            nav.killall();
            if (g.gethourdecimal() > 12)
                char.addDays(1);
            char.settime(2, 15);

            nav.bg("526_bar/" + callback + ".jpg");
            break;
        case "hollyGood":
            sc.startMission("holly", "bar");
            sc.completeMissionTask("holly", "bar", 0, true);
            sc.modLevel("holly", 100, 1);
            sc.modLevel("molly", 100, 1);
            sc.modLevel("dolly", 100, 1);
            char.room(526);
            break;
        case "hollyBad":
            sc.completeMissionTask("holly", "bar", 0, true);
            char.room(526);
            break;
        case "m0_4":
            if (cl.c.chastity === null) 
                sc.select("m0_fuck", "526_bar/m0_fuck.png", 0);
            else 
                sc.select("m0_chastity", "526_bar/m0_chastity.png", 0);
            sc.select("m0_pass", "526_bar/m0_donot.png", 1);
            break;
        case "m0_5":
            g.internal = 6;
            nav.next("m0_5");
            break;
        case "zoeyLove":
            if (daily.get("zoey"))
                char.room(526);
            else {
                sc.modLevel("zoey", 30, 5);
                daily.set("zoey");
                char.room(526);
            }
            break;
        case "z2":
            switch (sc.taskGetStep("zoey", "sex")) {
                case -1:
                case 0:
                    sc.startMission("zoey", "sex");
                    sc.completeMissionTask("zoey", "sex", 0);
                    nav.bg("526_bar/z2.jpg");
                    future.add("zoeySex0", 2);
                    chat(34, 526);
                    break;
                case 1:
                case 2:
                    char.room(525);
                    break;
                case 3:
                    nav.bg("526_bar/sex3_0.jpg");
                    chat(53, 526);
                    break;
                case 4:
                    nav.bg("526_bar/sex3_0.jpg");
                    chat(71, 526);
            }
            break;
        case "sex1_0":
            nav.killall();
            nav.bg("526_bar/z2.jpg");
            break;
        case "sex1_2":
            nav.bg("502_bedroom/502_zoeyRoom.jpg");
            zcl.displayMain(-2800, -700, .8, "nude", false);
            break;
        case "g3":
            nav.killall();
            var cc = gender.cock();
            nav.bg("526_bar/g3_" + gender.pronoun("f") + "_" + cc + ".jpg");
            if (cc === "d")
                chat(65, 526);
            else
                chat(62, 526);
            break;
        case "g7":
            levels.anal(3, true, "m", true, "juniper");
            char.room(526);
            break;
        case "g14":
            levels.gotbj("n", "orchid");
            char.room(526);
            break;
        case "g4":
            g.internal = 0;
            nav.next("g4");
            break;
        case "g10":
            g.internal = 0;
            nav.next("g10");
            break;
        case "z13_5":
            sc.completeMissionTask("zoey", "sex", 3);
            levels.oral(3, "f", "zoey");
            sc.modLevel("zoey", 100, 7);
            g.pass = 502;
            char.room(28);
            break;
        case "s4":
            nav.bg("526_bar/sex3_1.jpg");
            g.internal = 0;
            nav.button({
                "type": "tongue",
                "name": "s4",
                "left": 969,
                "top": 725,
                "width": 145,
                "height": 145,
                "image": "526_bar/sex3_1.png"
            }, 526);
            break;
        case "s4_end":
            levels.oral(3, "f", "zoey");
            sc.modLevel("zoey", 20, 7);
            g.pass = 502;
            char.room(28);
            break;
        case "reset":
            char.room(526);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room526.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "orchid",
            text: "Oh... hello. We wern't expecting any new girls here! ",
            button: [
                { chatID: 1, text: "*GULP*", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "!poppy",
            text: "Oh is there someone new here! Who is it! ",
            button: [
                { chatID: 2, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "!juniper",
            text: "Yes, what's your name? ",
            button: [
                { chatID: 3, text: "I'm " + sc.n("me") + ". ", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "!poppy",
            text: "OOooo that's such a pretty name. Do you have a pretty cock? We were about to " +
                "bend Orchid over the table and fill her with our cocks. She lost the smallest " +
                "cock game again. ",
            button: [
                { chatID: 4, text: "Smallest cock game?", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!juniper",
            text: "Oh sweet summer child. We each pull out our cocks and who ever has the smallest " +
                "cock gets fucked by the bigger, superior cocks. Orchid always loses, I think she " +
                "does it on purpose.  ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "orchid",
            text: "What! I do try! I can't get it any bigger! You have no idea how hard I strain to " +
                "make my cock bigger! I love getting fucked, but just once I would love to do the " +
                "fucking! You know I'm a top! ",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!poppy",
            text: "Well, you know you're just going to lose again, unless... New girl, do you want to " +
                "play the smallest cock game? Loser gets fucked, no backing out. ",
            button: [
                { chatID: 7, text: "I'm in!", callback: "" },
                { chatID: -1, text: "Maybe some other time. ", callback: "reset" },
            ]
        },
        {
            chatID: 7,
            speaker: "!juniper",
            text: "Ok new girl, let's see each other's cocks! ",
            button: [
                { chatID: -1, text: "Compare dicks with the girls", callback: "g3" },
            ]
        },
        {
            chatID: 8,
            speaker: "holly",
            text: "Oh hi there. What's up? ",
            button: [
                { chatID: 9, text: "What are you beautiful ladies doing here? ", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "molly",
            text: "Ugh. We tried going to the club, but there's too many dudes trying to fuck " +
                "us, so we drink at the gay bar to get away from being hit on every five minutes. ",
            button: [
                { chatID: 10, text: "...", callback: "" },
            ]
        },
        {
            chatID: 10,
            speaker: "dolly",
            text: "Heck yeah sugar! Them guys keep pervin' on us lil ol' girls. We just want ta " +
                "hang with my girls and get a bit tipsy! YEEEHAAA! ",
            button: [
                { chatID: 11, text: "I know! I'm so tired of getting hit on all the time! ", callback: "" },
                { chatID: 12, text: "Sooo... Do you have pussies or dicks? ", callback: "" },
            ]
        },
        {
            chatID: 11,
            speaker: "holly",
            text: "I know. It's like guys only think with their penises. I'm so tired of being " +
                "treated like my vagina is the only interesting thing about me. Anyway, the " +
                "girls and I are going to bet back to it. See you around! ",
            button: [
                { chatID: -1, text: "See ya.", callback: "hollyGood" },
            ]
        },
        {
            chatID: 12,
            speaker: "molly",
            text: "What the fuck kind of question is that? Do we look like dudes to you? Our " +
                "pussies are just fine! This guy is a jerk! C'mon girls, let's go somewhere that " +
                "doesn't have assholes! ",
            button: [
                { chatID: -1, text: "oh.", callback: "hollyBad" },
            ]
        },
        {
            chatID: 13,
            speaker: "black",
            text: "Hi, " + sc.n("me") + ". I would love to tear your ass up, but I'm taking " +
                "little Keaton home and this sissy demands all my time to properly break her. " +
                "Let's go Keaton, I'm going to fuck you till you bleed. ",
            button: [
                { chatID: -1, text: "oh my.", callback: "reset" },
            ]
        },
        {
            chatID: 14,
            speaker: "!jeremy",
            text: "Oh. My. God. Did you see that girl I was talking to! She has the biggest " +
                "dick I've ever seen! I don't know if I can even fit it inside me.. Well actually " +
                "I can totally fit it in me, but it's still so big! I'm going to cum so many times with " +
                "that dick in me! I'm sorry I've got to chase her down. I need that dick in me! ",
            button: [
                { chatID: -1, text: "Hahaha. Ok. Go get that dick!", callback: "reset" },
            ]
        },
        {
            chatID: 15,
            speaker: "!timothy",
            text: "Hey slut! I'm really loving this bar.  ",
            button: [
                { chatID: 16, text: "My too. It's my friend, " + sc.n("zoey") + "'s bar. ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "!thomas",
            text: "It is chill, and it's nice to hang out with other girls, but I do wish there " +
                "some men here. Maybe someone that will buy me drinks and take me home. ",
            button: [
                { chatID: 17, text: "Yeah. She's not a fan of men. ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "!timothy",
            text: "I get that. It is nice to just hang out in a safe space. I guess when we " +
                "need to find someone we can always go to the club. It's such a meat market " +
                "though. Sometimes, not always, but sometimes, it would be nice for a guy to " +
                "talk to me, not just try to get his dick in me with the least amount of effort. ",
            button: [
                { chatID: 18, text: "Totally ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "!thomas",
            text: "Speaking of low effort dick, let's hit up the club, maybe we'll find a few guys " +
                "that will fuck us both. I'm kinda in the orgy mood now. ",
            button: [
                { chatID: 19, text: "...", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "!timothy",
            text: "That's why we hang out! Let's go get that dick! ",
            button: [
                { chatID: -1, text: "Ok. later girls ", callback: "reset" },
            ]
        },
        {
            chatID: 20,
            speaker: "keaton",
            text: "Well looky here. If it isn't a new cock. I'm Keaton and I have a couple holes you can use. ",
            button: [
                { chatID: 21, text: "Oh wow. Hello", callback: "m0_1" },
            ]
        },
        {
            chatID: 21,
            speaker: "zoey",
            text: "Keaton, you know you don't have to strip and show your bussy to every " +
                "person that you meet. There are subtler ways to get laid. ",
            button: [
                { chatID: 22, text: "hehe", callback: "m0_2" },
            ]
        },
        {
            chatID: 22,
            speaker: "keaton",
            text: "I know " + sc.n("zoey") + ". I just really need cock right now! My bussy is " +
                "bone dry! I need the semen in me!",
            button: [
                { chatID: 23, text: "....", callback: "m0_3" },
            ]
        },
        {
            chatID: 23,
            speaker: "zoey",
            text: "You're the sluttiest slut I know. Just don't get any cum on my floor again or " +
                "your licking it up this time! ",
            button: [
                { chatID: 24, text: "....", callback: "m0_0" },
            ]
        },
        {
            chatID: 24,
            speaker: "keaton",
            text: "Oh honey, you know I'll lick up anything that falls out of my bussy! C'mon " +
                "new girl, take your cock out and fill my smooth soft fuck hole! ",
            button: [
                { chatID: -1, text: "....", callback: "m0_4" },
            ]
        },
        {
            chatID: 25,
            speaker: "keaton",
            text: "That's the kind of cock I need! Feed me papi. Jam it down my throat hole then " +
                "stuff it up my ass! Please I need it so bad! ",
            button: [
                { chatID: -1, text: "Here it comes! ", callback: "m0_5" },
            ]
        },
        {
            chatID: 26,
            speaker: "keaton",
            text: "Fuck that was great! I'm going to do the walk of shame with your cum dripping " +
                "off my face! So excited to show everyone what a slut I am! ",
            button: [
                { chatID: -1, text: "You are the best slut. ", callback: "reset" },
            ]
        },
        {
            chatID: 27,
            speaker: "keaton",
            text: "Baby.I'm looking to get fucked, not tickeled. You need to put that tiny " +
                "dick away and never show it to another human again. ",
            button: [
                { chatID: -1, text: "Awwww", callback: "reset" },
            ]
        },
        {
            chatID: 28,
            speaker: "keaton",
            text: "Hrumph! I don't top! Call me when you free that cock sister. ",
            button: [
                { chatID: -1, text: "..ok", callback: "reset" },
            ]
        },
        {
            chatID: 29,
            speaker: "keaton",
            text: "Hrumph! You don't know what a sweet ass you're missing baby. I'm going " +
                "to find a group of real men to split me open!",
            button: [
                { chatID: -1, text: "..ok", callback: "reset" },
            ]
        },
        {
            chatID: 30,
            speaker: "zoey",
            text: "If it isn't my BFF! So glad you came! Have a drink and hang out! ",
            button: [
                { chatID: -1, text: "Totally! [Need Level 5 and complete 'Chloé' event]", callback: "zoeyLove" },
            ]
        },
        {
            chatID: 31,
            speaker: "zoey",
            text: "If it isn't my BFF! So glad you came! Have a drink and hang out! ",
            button: [
                { chatID: 32, text: "Hey, do you want me to help you clean up?", callback: "" },
                { chatID: -1, text: "Totally!", callback: "reset" }
            ]
        },
        {
            chatID: 32,
            speaker: "zoey",
            text: "Totally! That would be such an awesome help! ",
            button: [
                { chatID: 33, text: "[Wash dishes till close]", callback: "z1" },
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "So gross. The things I do for her, but she's totally worth it. I'll check up " +
                "on her as soon as I'm done with this mess. ",
            button: [
                { chatID: -1, text: "[Finish up]", callback: "z2" },
            ]
        },
        {
            chatID: 34,
            speaker: "stormy",
            text: "Hey, who's the new dish washer? ",
            button: [
                { chatID: 35, text: "Huh?", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "zoey",
            text: "That is my meilleur ami. I have known " + gender.pronoun("him") + " forever! This " +
                "is " + sc.n("stormy") + " my new petite amie. ",
            button: [
                { chatID: 36, text: "...", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "stormy",
            text: "*UGH* You know I don't speak French. Let's get going, " + sc.n("zoey") + " I " +
                "need to taste you before I head home. ",
            button: [
                { chatID: 37, text: "...", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "zoey",
            text: "ahahah. Yes, we will do a quick eat *wink*",
            button: [
                { chatID: -1, text: "*sigh* ok I'll catch you later " + sc.n("zoey") + ". Bye new friend " + sc.n("stormy") + ". ", callback: "leave" },
            ]
        },
        {
            chatID: 38,
            speaker: "zoey",
            text: "Bonjour, did you get the hand cuffs?",
            button: [
                { chatID: -1, text: "Oh. I still need to get some. Maybe I should try Toys 'n Us.", callback: "reset" },
            ]
        },
        {
            chatID: 39,
            speaker: "zoey",
            text: "Bonjour, are you wearing your chastity... thing...?",
            button: [
                { chatID: -1, text: "Oh. I'm not. I'll come back when I am wearing it. ", callback: "reset" },
            ]
        },
        {
            chatID: 40,
            speaker: "zoey",
            text: "Oooo! I am excite! Do you want to hang out till I can close?",
            button: [
                { chatID: 41, text: "Sure, I'll hang out [Wait till close]", callback: "sex1_0" },
                { chatID: -1, text: "I'll be back", callback: "reset" },
            ]
        },
        {
            chatID: 41,
            speaker: "stormy",
            text: "Awesome! I'm so excited you got your dish washer to watch us! Let's go fuck " +
                "in your bedroom. There's so much random cum on this floor we'll both get " +
                "pregnant if put our bare pussies on it. ",
            button: [
                { chatID: 42, text: "...", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "zoey",
            text: "Zut Alors! Ok. Let's go to my bedroom. ",
            button: [
                { chatID: 43, text: "[Follow them home. ]", callback: "sex1_1" },
            ]
        },
        {
            chatID: 43,
            speaker: "stormy",
            text: "So... dish washer... You want to watch me fuck your friend? ",
            button: [
                { chatID: 44, text: "I really do, also my name is " + sc.n("me") + ". ", callback: "" },
            ]
        },
        {
            chatID: 44,
            speaker: "stormy",
            text: "That makes my pussy tingle..hehehe. Strip dishwasher and show us your cage. " +
                "I want to make sure you don't try to rape us if we get too close. ",
            button: [
                { chatID: 45, text: "I'm not going to rape either of you!", callback: "" },
            ]
        },
        {
            chatID: 45,
            speaker: "stormy",
            text: "That's exactly what a rapist would say. Now show us your cage.",
            button: [
                { chatID: 46, text: "*sigh* ok ", callback: "sex1_3" },
            ]
        },
        {
            chatID: 46,
            speaker: "me",
            text: "Hey! What are you doing? ",
            button: [
                { chatID: 47, text: "...", callback: "sex1_4" },
            ]
        },
        {
            chatID: 47,
            speaker: "stormy",
            text: "Locking you up so you can watch and I know you won't try anything when my " +
                "bare ass is up in the air. ",
            button: [
                { chatID: 48, text: "*groan*", callback: "sex1_5" },
            ]
        },
        {
            chatID: 48,
            speaker: "zoey",
            text: "Mon Dieu. My pussy is uhhhh... sparkly... " + sc.n("me") + " are you good " +
                "to watch. I think you see my pussy more than others now. ahahahah.",
            button: [
                { chatID: 49, text: "Oh yes! Love the view! ", callback: "sex1_6" },
            ]
        },
        {
            chatID: 49,
            speaker: "stormy",
            text: "Since you can't touch her pussy, I'm going to cover your nose with her " +
                "wet panties so you can enjoy the smell of her pussy while I fuck your best " +
                "friend. Now you can enjoy the view and the smells. ",
            button: [
                { chatID: -1, text: "Wha...", callback: "sex1_7" },
            ]
        },
        {
            chatID: 50,
            speaker: "stormy",
            text: "Such a good little cuck. I know you want to fuck your friend, but your penis " +
                "keeps getting in the way; so you settle for watching me fucking her. I love how " +
                "desperate you are for something you can't have. You're my bitch and you don't " +
                "even know it. Do you know what I do with my bitches? ",
            button: [
                { chatID: 51, text: "huh...", callback: "sex1_13" },
            ]
        },
        {
            chatID: 51,
            speaker: "stormy",
            text: "I mark my territory on my bitches! Hahahaha. Catch you later bitch! ",
            button: [
                { chatID: 52, text: "AAAKKKK", callback: "sex1_14" },
            ]
        },
        {
            chatID: 52,
            speaker: "zoey",
            text: "Oh no. " + sc.n("stormy") + " did the pee on you. I am sorry. Very much sorry. " +
                "She does that. She made the promise she would not do that to you. I will help you " +
                "and help you clean up. I need to make this better for you tomorrow, but tonight " +
                "we will clean up and get some sleep. ",
            button: [
                { chatID: -1, text: "You always pick the crazy ones, but thanks. ", callback: "sex1_15" },
            ]
        },
        {
            chatID: 53,
            speaker: "zoey",
            text: "So, we need to talk. I'm just so cornée, I need you now. ",
            button: [
                { chatID: 54, text: "Oh wow, really? I thought you were a lesbian.", callback: "" }
            ]
        },
        {
            chatID: 54,
            speaker: "zoey",
            text: "No questions, just eat my warm baby kitten.",
            button: [
                { chatID: -1, text: "Fuck yeah?", callback: "sex3_1" }
            ]
        },
        {
            chatID: 55,
            speaker: "zoey",
            text: "Oh oui! Oui, oui, oui! Arrêter, I can not take anymore. Oh là là that was good.",
            button: [
                { chatID: 56, text: "...", callback: "z13_4" }
            ]
        },
        {
            chatID: 56,
            speaker: "zoey",
            text: "Oh wow. You are amazing, I can not believe we have not done this before. ",
            button: [
                { chatID: 57, text: "So why me, why now? I thought you were a lesbian.", callback: "" }
            ]
        },
        {
            chatID: 57,
            speaker: "zoey",
            text: "So did I, but I remembered when I began my attraction to women. When I was younger je suis tombé amoureux with " +
                "this boy. I would follow him around our park hoping he would notice me, but he never did. " +
                "One day I was following bêtement him and one of his friends m'a fait remarquer and stared se moquant de moi. Then his " +
                "other friends staring to laugh at me too. ",
            button: [
                { chatID: 58, text: "...", callback: "" }
            ]
        },
        {
            chatID: 58,
            speaker: "zoey",
            text: "When the boys were laughing the boy I loved turn his head to me. I feel shame and I hoped he would get " +
                "the other boys to stop my shame and " +
                "stop laughing at me. But he laughed also and said it looks like the fantôme effrayant is back following him. Then all " +
                "the boys chanted fantôme effrayant at me. I have never been more sad and terrible in my life. I was a girl broken.",
            button: [
                { chatID: 59, text: "That's terrible.", callback: "" }
            ]
        },
        {
            chatID: 59,
            speaker: "zoey",
            text: "I just wanted to die, hearing the boy I thoguht I loved laugh at me with his friends. That night my best friend, Amélie, " +
                "heard what had happened and came over to my room. I was so sad I just wanted to lay in bed and die. Amélie curled next to " +
                "me and snuggled with me all night. I have never felt loved like that my entire life. She was so soft and caring I " +
                "realized this is what I want. Not some garçon stupide, but a nice warm loving person. ",
            button: [
                { chatID: 60, text: "...", callback: "" }
            ]
        },
        {
            chatID: 60,
            speaker: "zoey",
            text: "Seeing you here, helping me and supporting me all this time made me realize I was not in love with just girls, but " +
                "I love someone who loves me back. No one has shown me as much l'amour as you. J'ai été si aveugle. I have been chasing " +
                "these girls who only want sex, but it is not what I want. I want you, mon meilleur ami.",
            button: [
                { chatID: 61, text: "Oh wow. I guess I've always felt the same about you. It's the reason I keep coming back. ", callback: "" }
            ]
        },
        {
            chatID: 61,
            speaker: "zoey",
            text: "I am so sorry for everything I have put you through. I guess I was searching for myself. But I've found you, and " +
                "you are perfect for me. So do you want to come to my house and cuddle me to sleep?",
            button: [
                { chatID: -1, text: "Yes I do. ", callback: "z13_5" }
            ]
        },
        {
            chatID: 62,
            speaker: "orchid",
            text: "YES! I don't lose this time! Thanks new " + gender.pronoun("girl") + 
                ". I get to put my dick in you!",
            button: [
                { chatID: -1, text: "Drat!", callback: "g4" }
            ]
        },
        {
            chatID: 63,
            speaker: "!poppy",
            text: "I feel like I just did a cum transfer! From Juniper's cock to Orchid's " +
                "ass! ",
            button: [
                { chatID: 64, text: "uuhhhgg...", callback: "" }
            ]
        },
        {
            chatID: 64,
            speaker: "orchid",
            text: "And I transfered it right to " + sc.n("me") + "'s ass! The cum " +
                "transfer is complete! ",
            button: [
                { chatID: -1, text: "...my butt is so full of cum...", callback: "g7" }
            ]
        },
        {
            chatID: 65,
            speaker: "orchid",
            text: "Damn. Lost again. Well boys, I guess I get to be the girl today. ",
            button: [
                { chatID: -1, text: "*whew*", callback: "g10" }
            ]
        },
        {
            chatID: 66,
            speaker: "!juniper",
            text: "I needed that! ",
            button: [
                { chatID: 67, text: "...", callback: "" }
            ]
        },
        {
            chatID: 67,
            speaker: "!poppy",
            text: "Totally needed that too! There's no better feeling that cumming " +
                "deep inside Orchid. Show us that hole. I want to see my work. ",
            button: [
                { chatID: 68, text: "...", callback: "g13" }
            ]
        },
        {
            chatID: 68,
            speaker: "!poppy",
            text: "So hot. You do look sexier with a sloppy hole! ",
            button: [
                { chatID: 69, text: "...", callback: "" }
            ]
        },
        {
            chatID: 69,
            speaker: "zoey",
            text: "Please clean up that cum you're dripping on my floor. I don't want " +
                "to slip on it carrying these beers. ",
            button: [
                { chatID: -1, text: "...", callback: "g14" }
            ]
        },
        {
            chatID: 70,
            speaker: "!juniper",
            text: "So. you want to smallest cock again? ",
            button: [
                { chatID: -1, text: "I sure do!", callback: "g3" },
                { chatID: -1, text: "I'm going to pass.", callback: "reset" },
            ]
        },
        {
            chatID: 71,
            speaker: "zoey",
            text: "So, you want to lick the kitten, yes?",
            button: [
                { chatID: -1, text: "I sure do!", callback: "s4" },
                { chatID: -1, text: "I've got to run.", callback: "leave" },
            ]
        },
        {
            chatID: 72,
            speaker: "zoey",
            text: "You are good friend. Always with the tongue for my vagina. Thank you. " +
                "Now we go to bed. ",
            button: [
                { chatID: -1, text: "Sure!", callback: "s4_end" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};