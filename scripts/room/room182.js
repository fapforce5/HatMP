//sissyTest
var room182 = {};
room182.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "test1":
            nav.bg("182_test/t0.jpg");
            g.internal = {
                grades: ['F', 'D', 'C', 'B', 'A'],
                cardtest: 0,
                mantest: 0,
                femtest: 0,
                analtest: 0,
                cardCount: 0,
                cards: [
                    { p: 1, s: null },//0
                    { p: 2, s: null },//1
                    { p: 1, s: null },//2
                    { p: 2, s: null },//3
                    { p: 2, s: null },//4
                    { p: 1, s: null },//5
                    { p: 1, s: null },//6
                    { p: 2, s: null },//7
                    { p: 2, s: null },//8
                    { p: 2, s: null },//9
                    { p: 1, s: null },//10
                ]
            };
            chat(0, 182);
            break;
    }
};

room182.btnclick = function (name) {
    switch (name) {
        case "t5_man":
            nav.killall();
            nav.bg("182_test/t1_5_man.jpg");
            chat(10, 182);
            break;
        case "t5_sissy":
            nav.killall();
            g.internal.mantest = 5;
            nav.bg("182_test/t1_5_sissy.jpg");
            chat(13, 182);
            break;
        case "card1":
        case "card2":
            var selected = parseInt(name.replace("card", ""));
            g.internal.cards[g.internal.cardCount].s = selected;
            g.internal.cardCount++;
            if (g.internal.cardCount < 11) {
                nav.modbutton("card1", "182_test/z" + g.internal.cardCount + "_1.png", null, null);
                nav.modbutton("card2", "182_test/z" + g.internal.cardCount + "_2.png", null, null);
            }
            else {
                nav.killbutton("card1");
                nav.killbutton("card2");
                var totalCard = 100;
                for (var i = 0; i < g.internal.cards.length; i++) {
                    if (g.internal.cards[i].p !== g.internal.cards[i].s)
                        totalCard -= 7;
                }
                g.internal.cardtest = totalCard;
                nav.t({
                    type: "zimg",
                    name: "card",
                    left: 500,
                    top: 500,
                    font: 60,
                    hex: "#ffffff",
                    text: "TEST COMPLETE. GRADE: " + g.getGrade(totalCard)
                }, 1);
                if (totalCard > 73)
                    chat(42, 182);
                else
                    chat(43, 182);
            }
            break;
        case "t1_17":
            nav.kill();
            nav.bg("182_test/" + name + ".jpg");
            nav.next("t1_18");
            break;
        case "t1_18":
            nav.kill();
            nav.bg("182_test/" + name + ".jpg");
            nav.next("t1_19");
            break;
        case "t1_19":
            nav.kill();
            nav.bg("182_test/" + name + ".jpg");
            nav.next("t1_20_0");
            break;
        case "t1_20_0":
            nav.kill();
            nav.bg("182_test/" + name + ".jpg");
            chat(37, 182);
            break;
        default:
            break;
    }
};

room182.chatcatch = function (callback) {
    switch (callback) {
        case "test1bg0":
        case "t1_0":
        case "t1_1":
        case "t1_2":
        case "t1_3":
        case "t1_6":
        case "t1_21":
        case "t1_22":
        case "t1_23":
        case "t1_24":
            nav.kill();
            nav.bg("182_test/" + callback + ".jpg");
            break;
        case "t1_16":
            nav.kill();
            nav.bg("182_test/" + callback + ".jpg");
            nav.next("t1_17");
            break;
        case "t1_4":
            nav.bg("182_test/" + callback + ".jpg");
            nav.button({
                "type": "btn",
                "name": "t5_man",
                "left": 401,
                "top": 214,
                "width": 421,
                "height": 743,
                "image": "182_test/t1_4_man.png"
            }, 182);
            nav.button({
                "type": "btn",
                "name": "t5_sissy",
                "left": 1392,
                "top": 428,
                "width": 168,
                "height": 529,
                "image": "182_test/t1_4_sissy.png"
            }, 182);

            break;
        case "t1_7":
            nav.bg("182_test/t1_7.jpg");
            zcl.displayMain(420, 600, .07, "", false);
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 434,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            
            break;
        case "t1_8":
            nav.killbutton("martha");
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 635,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            break;
        case "t1_9":
            nav.killbutton("martha");
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 840,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            break;
        case "t1_10":
            nav.killbutton("martha");
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 1067,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            break;
        case "t1_11":
            nav.killbutton("martha");
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 1233,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            break;
        case "t1_12":
            nav.killbutton("martha");
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 1375,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            break;
        case "t1_13":
            nav.killbutton("martha");
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 1527,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            break;
        case "t1_14":
            nav.killbutton("martha");
            nav.button({
                "type": "img",
                "name": "martha",
                "left": 1690,
                "top": 428,
                "width": 205,
                "height": 652,
                "image": "182_test/marthaBack.png"
            }, 182);
            break;
        case "t1_15":
            nav.bg("182_test/t1_15.jpg");
            zcl.displayMain(490, 700, .055, "", false);
            break;
        case "mantestd":
            g.internal.mantest = 0;
            break;
        case "mantestf":
            g.internal.mantest = 4;
            break;
        case "taketest0":
            nav.bg("182_test/test1bg.jpg");
            nav.button({
                "type": "btn",
                "name": "card1",
                "left": 201,
                "top": 178,
                "width": 558,
                "height": 734,
                "image": "182_test/z0_1.png"
            }, 182);
            nav.button({
                "type": "btn",
                "name": "card2",
                "left": 1162,
                "top": 178,
                "width": 558,
                "height": 734,
                "image": "182_test/z0_2.png"
            }, 182);
            break;
        case "t1_20":
            var analLevel = levels.get("anal").l;
            levels.mod("anal", 50, 999);
            var analImg = "";
            nav.kill();
            if (analLevel > 9) {
                g.internal.analLevel = 100;
                analImg = "t1_20_6";
            }
            else {
                switch (analLevel) {
                    case 9: g.internal.analtest = 95; analImg = "t1_20_5"; break;
                    case 8: g.internal.analtest = 90; analImg = "t1_20_5"; break;
                    case 7: g.internal.analtest = 88; analImg = "t1_20_4"; break;
                    case 6: g.internal.analtest = 85; analImg = "t1_20_3"; break;
                    case 5: g.internal.analtest = 79; analImg = "t1_20_3"; break;
                    case 4: g.internal.analtest = 75; analImg = "t1_20_2"; break;
                    case 3: g.internal.analtest = 69; analImg = "t1_20_1"; break;
                    case 2: g.internal.analtest = 62; analImg = "t1_20_1"; break;
                    case 1: g.internal.analtest = 40; analImg = "t1_20_1"; break;
                    default: g.internal.analtest = 20; analImg = "t1_20_1"; break;
                }
            }
            nav.bg("182_test/" + analImg + ".jpg");
            break;
        default:
            break;
    }
};

room182.chat = function (chatID) {
    if (chatID === 999) {
        var hairtxt, bdyhair, cumface, chastity, shower;
        var grade = 4;
        if (cl.c.hairLength > 2) {
            hairtxt = "Great hair length, lovely style. ";
        }
        else if (cl.c.hairLength > 1) {
            hairtxt = "Good hair length. You would look lovely with longer hair. ";
        }
        else if (cl.c.hairLength === 1) {
            hairtxt = "Hair length is fine, but you need to grow it out. I recommend taking the hormone class after this. ";
            grade--;
        }
        else {
            hairtxt = "You hair is much too short. It's unsightly. "
            grade -= 2;
        }

        if (cl.getBodyHair() === null) {
            bdyhair = "Clean shaven like a sissy should be. ";
        }
        else {
            bdyhair = "You need to shave that disgusting hair. ";
            grade--;
        }

        if (!cl.c.cumface)
            cumface = "";
        else {
            cumface = "A lady doesn't walk around with cum on her face. ";
            grade--;
        }

        if (cl.c.chastity === null) {
            chastity = "You need to wear your cage. No wants to see that dirty thing poking out. ";
            grade--;
        }
        else
            chastity = "Chastity cage.. check. ";

        if (daily.get("shower"))
            shower = "Your smell is lovely. ";
        else {
            shower = "You need to shower. You smell like a vagrant. ";
            grade--;
        }
        if (grade < 0)
            grade = 0;
        g.internal.femtest = grade;
        return {
            chatID: 999,
            speaker: "martha",
            text: sc.n("me") + ". Let us see how you did. " + hairtxt + bdyhair + cumface + chastity + shower +
                "For a final grade of " + g.internal.grades[grade] + ".",
            button: [
                { chatID: 22, text: "...", callback: "t1_10" }
            ]
        };
    }
    else if (chatID === 998) {
        if (g.internal.analtest > 70)
            return {
                chatID: 0,
                speaker: "p",
                text: "Not bad slut. You get a " + g.getGrade(g.internal.analtest) + ". NEXT!",
                button: [
                    { chatID: 46, text: "*groan*", callback: "" }
                ]
            };
        else
            return {
                chatID: 0,
                speaker: "p",
                text: "You need to do more homework. You get a " + g.getGrade(g.internal.analtest) + ". NEXT!",
                button: [
                    { chatID: 46, text: "*whimper*", callback: "" }
                ]
            };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Everyone sit on your butts. Now welcome to your first series of tests. We will be evaluating whether or not " +
                    "you'll be allowed to proceed with the school. I hope you've all been studying, " +
                    "because those that fail will be kicked out and forced to continue this " +
                    "journey on your own. ",
                button: [
                    { chatID: 38, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "Test two is who you are. There's two people before you. On my right is our assistant " +
                    "instructor Malik. He's what I call, the perfect specimen of a man. Malik is on the " +
                    "defensive line of the college football team, eats his steaks raw, and breaks in little " +
                    "sissies. ",
                button: [
                    { chatID: 2, text: "...", callback: "t1_1" }
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "Just look at this monster cock! It's thicker than all of your skinny little " +
                    "arms, and has more power than your puny little bodies. This is what a man should be. ",
                button: [
                    { chatID: 3, text: "...", callback: "t1_2" }
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Over here we have " + sc.n("cecilia") + ". She's a graduate of the sissy school. " +
                    "her clitty is small and tits continue to slowly grow now that she's on hormones. " + sc.n("cecilia") + " whens " +
                    "the last time your clitty was hard? ",
                button: [
                    { chatID: 4, text: "...", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "cecilia",
                text: "Over a year ago ma'am!",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "A year without an erection! She knows her true pupose. Bend over " + sc.n("cecilia") +
                    " and show everyone that purpose. ",
                button: [
                    { chatID: 6, text: "...", callback: "t1_3" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "Look at that resting gape! She's always ready to get fucked in her sissy pussy. " +
                    sc.n("cecilia") + " what are you thinking about right now? ",
                button: [
                    { chatID: 7, text: "...", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "cecilia",
                text: "Oooo. ummm. I like bubbles.  ",
                button: [
                    { chatID: 8, text: "...", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "Not a thought in that brain of hers. Just a happy brain dead sissy willing to do " +
                    "whatever her mistress commands. Willing to get fucked by a gang of men and swallow " +
                    "every drop of cum that drips out of her ass. The ultimate sissy. ",
                button: [
                    { chatID: 9, text: "...", callback: "t1_0" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "Now each of you must decide. Are you a man, or are you a sissy? Line up behind " +
                    "the true person you are inside. ",
                button: [
                    { chatID: -1, text: "...", callback: "t1_4" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "Interesting. " + sc.n("me") + " I'm suprised that you've denied your true self. " +
                    "Tell me you wouldn't want to be tied to my bed posts, bent over with your " +
                    "ass out. Ready to take my strap on in your anus. ",
                button: [
                    { chatID: 11, text: "I would love that!", callback: "mantestd" },
                    { chatID: 12, text: "No. I would rather fuck you. ", callback: "mantestf" },
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "I thought as much. You're still a sissy in denial. That's why I'll give you a " +
                    "'D' for this test. The rest of you fail. ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: "Silly boy. You still think you're a man. All of you fail this test. ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: sc.n("ralph") + " why are you in the men's group? Do you think you're a man? ",
                button: [
                    { chatID: 14, text: "...", callback: "" },
                ]
            },
            {
                chatID: 14,
                speaker: "ralph",
                text: "No ma'am. But I don't think my butt can do that. I'm too scared to try that. ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "Oh you silly boy. Always living in fear. I suppose it's a miracle that you " +
                    "even bother showing up. We will see how you do on the rest of the tests to see " +
                    "if you can continue showing up. Everyone on this side has failed the test. ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "missy",
                text: "Everyone sit back down on your butts. Thank you Malik and " + sc.n("cecilia") +
                    " you're dismissed. Martha will now give you your next test. ",
                button: [
                    { chatID: 17, text: "...", callback: "t1_6" },
                ]
            },
            {
                chatID: 17,
                speaker: "martha",
                text: "Hello ladies. I'm going to give you all your femininity test. To properly test your femininity " +
                    "we must do away with those nasty boy clothes and check for cleanliness. Now I need everyone " +
                    "to strip naked and form a line so I may inspect your bodies. Chop chop. ",
                button: [
                    { chatID: 18, text: "...", callback: "t1_7" },
                ]
            },
            {
                chatID: 18,
                speaker: "martha",
                text: "Kareem and Sporty, great hair, cleanly shaven, chastity device are good, " +
                    "but I can smell some sweat from both of you. You both get 'B's. A lady should " +
                    "smell of flowers, not a gym locker. ",
                button: [
                    { chatID: 19, text: "...", callback: "t1_8" },
                ]
            },
            {
                chatID: 19,
                speaker: "martha",
                text: "Jeremy. Unshaven, no chasity, messy hair, and you haven't showered today. " +
                    "Simply disgraceful. You will get an F. ",
                button: [
                    { chatID: 20, text: "...", callback: "" },
                ]
            },
            {
                chatID: 20,
                speaker: "!jeremy",
                text: "Oh yeah. Sorry about that.  ",
                button: [
                    { chatID: 21, text: "...", callback: "" },
                ]
            },
            {
                chatID: 21,
                speaker: "martha",
                text: "While apologies are appreciated, demonstrating respect for this course " + 
                    "through your effort and engagement is the most important action. ",
                button: [
                    { chatID: 999, text: "...", callback: "t1_9" },
                ]
            },
            {
                chatID: 22,
                speaker: "martha",
                text: "Chris and Martin, your conduct has been exemplary. You've both clearly display " +
                    "the qualities of true ladies, and you deserves the highest commendation. ",
                button: [
                    { chatID: 23, text: "...", callback: "t1_11" },
                ]
            },
            {
                chatID: 23,
                speaker: "martha",
                text: "Thomas, where is your chastity device? ",
                button: [
                    { chatID: 24, text: "...", callback: "" },
                ]
            },
            {
                chatID: 24,
                speaker: "!thomas",
                text: "Missy put one on me, but it fell off. She said my tiny penis was chasity " +
                    "enough. That if I tried to show it to a girl, they would just laugh at me. ",
                button: [
                    { chatID: 25, text: "...", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "martha",
                text: "I would not blame the ladies for laughing at your small penis. You deserve " +
                    "it. A man of your size doens't deserve to ejaculate. Perhaps a vaginal chastity " +
                    "device would be more suited to your lack of genitalia. I shall give you a 'B'. ",
                button: [
                    { chatID: 26, text: "...", callback: "t1_12" },
                ]
            },
            {
                chatID: 26,
                speaker: "martha",
                text: "Philbert, why am I not suprised that your disgusting penis is pointing right " +
                    "at me? ",
                button: [
                    { chatID: 28, text: "...", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "martha",
                text: "Philbert, why am I not suprised that your disgusting penis is pointing right " +
                    "at me? ",
                button: [
                    { chatID: 28, text: "...", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "!philbert",
                text: "Haha. I can't help it. It points at what it wants!",
                button: [
                    { chatID: 29, text: "...", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "martha",
                text: "With your hair, you could be an attractive lady if you would just put forth " +
                    "some effort. You need to adjust your attitude if you're to succeeed. You will receive a 'C'. ",
                button: [
                    { chatID: 30, text: "...", callback: "t1_13" },
                ]
            },
            {
                chatID: 30,
                speaker: "martha",
                text: "I see the hormones are doing their work Timothy. You really are starting to " +
                    "sprout a lovely set of breasts and birthing hips. An Easy 'A' for you. ",
                button: [
                    { chatID: 31, text: "...", callback: "t1_14" },
                ]
            },
            {
                chatID: 31,
                speaker: "martha",
                text: "And last we have " + sc.n("ralph") + ". I suppose you're going to try and use " +
                    "the small penis excuse for not wearing your chastity cage. ",
                button: [
                    { chatID: 32, text: "...", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "ralph",
                text: "Oh no ma'am. Missy said I didn't have to wear one.  ",
                button: [
                    { chatID: 33, text: "...", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "ralph",
                text: "Regardless you must wear your cage. I shall give you a 'C'. This concludes my " +
                    "evaluation. " + sc.n("p") + " they are all yours. ",
                button: [
                    { chatID: 34, text: "...", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "p",
                text: "OK sluts! Lube up, 'cause we're going to see how far down the cock you " +
                    "can go! ",
                button: [
                    { chatID: 35, text: "...", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "!chris",
                text: "Oh my. I don't think I can do that! ",
                button: [
                    { chatID: 36, text: "...", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "p",
                text: "Shut up slut! You're going to take, and you're going to moan like a " +
                    "high class whore! Now stop crying and impale yourself on my giant cock! " +
                    "Purple hair, you're first! ",
                button: [
                    { chatID: -1, text: "...", callback: "t1_16" },
                ]
            },
            {
                chatID: 37,
                speaker: "p",
                text: "Ok " + sc.n("me") + " your turn. Hop on up that dildo and show us " +
                    "how much your bussy can take. ",
                button: [
                    { chatID: 44, text: "...", callback: "" },
                ]
            },
            {
                chatID: 38,
                speaker: "missy",
                text: "Each of us will test and grade your performance. While any student that " +
                    "fails will be dismissed, the student with the highest grade will receive a " +
                    "reward. I will begin by testing your mind. There will be two tests. The first " +
                    "test will a test of what you desire. It will be taken on the computer. " +
                    "The second will be who you are taken here in front of your peers. ",
                button: [
                    { chatID: 39, text: "...", callback: "" },
                ]
            },
            {
                chatID: 39,
                speaker: "missy",
                text: "We have a computer for each of you. Now proceed through the door on the right " +
                    "and follow the instructions on the screen. ",
                button: [
                    { chatID: 40, text: "[Go take your first test]", callback: "test1bg0" },
                ]
            },
            {
                chatID: 40,
                speaker: "missy",
                text: "We have a computer for each of you. Now proceed through the door on the right " +
                    "and follow the instructions on the screen. ",
                button: [
                    { chatID: 41, text: "[Go take your first test]", callback: "test1bg0" },
                ]
            },
            {
                chatID: 41,
                speaker: "thinking",
                text: "Welcome. This will test your desires. You will have limited time to click " +
                    "on what you really want. Don’t think, just click on what you desire most.",
                button: [
                    { chatID: -1, text: "Don't think, just click. Time to begin the test. ", callback: "taketest0" },
                ]
            },
            {
                chatID: 42,
                speaker: "thinking",
                text: "Oh wow. I really am a sissy. I totally belong in this school. Now I need " +
                    "to go out there and out sissy everyone else. I will show those sluts who " +
                    "the biggest slut is!",
                button: [
                    { chatID: 1, text: "Return to the group", callback: "t1_0" },
                ]
            },
            {
                chatID: 43,
                speaker: "thinking",
                text: "On no. I thought I would do better. Maybe I'm not the sissy everyone thinks " +
                    "I am. I guess I'll have to try really hard to prove myself in the next tests " +
                    "if I want to stay. I better get back to the group. ",
                button: [
                    { chatID: 1, text: "Return to the group", callback: "t1_0" },
                ]
            },
            {
                chatID: 44,
                speaker: "thinking",
                text: "I'm so nervous getting on this giant dildo in front of everyone. I've " +
                    "never had something so big inside me, and now I'm doing it in front of " +
                    "everyone. I feel so dirty. ",
                button: [
                    { chatID: 45, text: "[Impale your bussy on the giant cock]", callback: "t1_20" },
                ]
            },
            {
                chatID: 45,
                speaker: "me",
                text: "Fuck fuck fuck! I'm getting split wide open! owie owie owie! FUCK! ",
                button: [
                    { chatID: 998, text: "...", callback: "t1_21" },
                ]
            },
            {
                chatID: 46,
                speaker: "thinking",
                text: "That totally broke my bussy. I'm going to have to wear diapers for the " +
                    "rest of my life becuase my butthole will never close again. Why did I try to " +
                    "push myself so hard to prove how much I could take. I hate this school sometimes. " +
                    "It's nothing but misery. ",
                button: [
                    { chatID: 47, text: "...", callback: "t1_22" },
                ]
            },
            {
                chatID: 47,
                speaker: "ralph",
                text: "You were amazing up there. I couldn't even sit on it, but you were able to take " +
                    "get in in your bussy. I hope one day I'm half the sissy you are. There's just one " +
                    "more test. I know you can get through it, becuase we're going to look really hot " +
                    "when we get our tits!",
                button: [
                    { chatID: 48, text: "Really", callback: "t1_23" },
                ]
            },
            {
                chatID: 48,
                speaker: "ralph",
                text: "Really. Now push you ass back into you hole and lets finish this test! ",
                button: [
                    { chatID: 49, text: "Yea!", callback: "t1_24" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};