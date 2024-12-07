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
                bdsmtest: 0,
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
        case "grades":
            var grade = gv.get("sissyGrades").split(" ")[5];
            nav.killall();
            nav.bg("182_test/final0.jpg");
            if (grade > 89) { //crown
                levels.mod("xdress", 100, 999);
                cl.add("accessories", "crown");

                chat(78, 182);
            }
            else {
                chat(80, 182);
            }
            break;
        case "t5_man":
            nav.killall();
            nav.bg("182_test/t1_5_man.jpg");
            chat(10, 182);
            break;
        case "t5_sissy":
            nav.killall();
            g.internal.mantest = 100;
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
        case "t1_26":
            nav.killall();
            $("#room-inv").hide();
            nav.bg("182_test/t1_26.jpg");
            chat(53, 182);
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
        case "t1_25":
        case "t1_46":
        case "t1_47":
        case "t1_48":
        case "final0":
            nav.kill();
            nav.bg("182_test/" + callback + ".jpg");
            break;
        case "t1_28":
        case "t1_30":
        case "t1_32":
        case "t1_34":
        case "t1_36":
        case "t1_40":
        case "t1_41":
        case "t1_42":
        case "t1_43":
        case "t1_44":
        case "t1_45":
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
            g.internal.mantest = 65;
            break;
        case "mantestf":
            g.internal.mantest = 50;
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
                g.internal.analtest = 100;
                analImg = "t1_20_6";
            }
            else {
                switch (analLevel) {
                    case 9: g.internal.analtest = 95; analImg = "t1_20_5"; break;
                    case 8: g.internal.analtest = 90; analImg = "t1_20_5"; break;
                    case 7: g.internal.analtest = 88; analImg = "t1_20_4"; break;
                    case 6: g.internal.analtest = 85; analImg = "t1_20_3"; break;
                    case 5: g.internal.analtest = 82; analImg = "t1_20_3"; break;
                    case 4: g.internal.analtest = 79; analImg = "t1_20_2"; break;
                    case 3: g.internal.analtest = 75; analImg = "t1_20_1"; break;
                    case 2: g.internal.analtest = 70; analImg = "t1_20_1"; break;
                    case 1: g.internal.analtest = 65; analImg = "t1_20_1"; break;
                    default: g.internal.analtest = 50; analImg = "t1_20_1"; break;
                }
            }
            nav.bg("182_test/" + analImg + ".jpg");
            break;
        case "t1_26":
            sc.select("t1_26", "182_test/test4.png", 0)
            break;
        case "t1_27":
            nav.bg("182_test/" + callback + ".jpg");
            nav.t({
                type: "img",
                name: "t1_27",
                left: 300,
                top: 50,
                font: 40,
                hex: "#ffffff",
                text: "Energy"
            }, 1);
            var line = '<div id="room182_energy" class=" resize-height" style="position:absolute; width:' + (1320 * g.ratio) + 'px; height:' + (20 * g.ratio) + 'px; top:' + (100 * g.ratio) + 'px; left:' + (300 * g.ratio) + 'px; background:#333;">' +
                '<div id="room182_energy_line" style="background: #20C000; border-radius: 20px; width:100%; height: 100%;" class="resize-height rl-bar"></div>' +
                '</div>';
            $('#room-buttons').append(line);
            room182.chatcatch("t1_setenergy");
            break;
        case "t1_setenergy":
            var thisEnergy = gv.get("energy");
            if (thisEnergy > 100)
                thisEnergy = 100;
            if (thisEnergy < 0)
                thisEnergy = 0;
            $("#room182_energy_line").css({ "width": thisEnergy + "%" });
            break;
        case "t1_29":
            gv.mod("energy", -15);
            nav.bg("182_test/" + callback + ".jpg");
            room182.chatcatch("t1_setenergy");
            if (gv.get("energy") > 0) {
                chat(58, 182);
                nav.bg("182_test/" + callback + ".jpg");
            }
            else { //fail
                g.internal.bdsmtest = 55;
                nav.bg("182_test/t1_45.jpg");
                chat(997, 182);
            }
            break;
        case "t1_31":
            gv.mod("energy", -20);
            room182.chatcatch("t1_setenergy");
            if (gv.get("energy") > 0) {
                chat(60, 182);
                nav.bg("182_test/" + callback + ".jpg");
            }
            else { //fail
                g.internal.bdsmtest = 61;
                nav.bg("182_test/t1_45.jpg");
                chat(997, 182);
            }
            break;
        case "t1_33":
            gv.mod("energy", -5);
            room182.chatcatch("t1_setenergy");
            if (gv.get("energy") > 0) {
                chat(62, 182);
                nav.bg("182_test/" + callback + ".jpg");
            }
            else { //fail
                g.internal.bdsmtest = 69;
                nav.bg("182_test/t1_45.jpg");
                chat(997, 182);
            }
            break;
        case "t1_35":
            gv.mod("energy", -10);
            room182.chatcatch("t1_setenergy");
            if (gv.get("energy") > 0) {
                chat(64, 182);
                nav.bg("182_test/" + callback + ".jpg");
            }
            else { //fail
                g.internal.bdsmtest = 75;
                nav.bg("182_test/t1_45.jpg");
                chat(997, 182);
            }
            break;
        case "t1_37":
            gv.mod("energy", -17);
            room182.chatcatch("t1_setenergy");
            if (gv.get("energy") > 0) {
                chat(66, 182);
                nav.bg("182_test/" + callback + ".jpg");
            }
            else { //fail
                g.internal.bdsmtest = 80;
                nav.bg("182_test/t1_45.jpg");
                chat(997, 182);
            }
            break;
        case "t1_38":
            gv.mod("energy", -17 );
            room182.chatcatch("t1_setenergy");
            if (gv.get("energy") > 0) {
                chat(67, 182);
                nav.bg("182_test/" + callback + ".jpg");
            }
            else { //fail
                g.internal.bdsmtest = 85;
                nav.bg("182_test/t1_45.jpg");
                chat(997, 182);
            }
            break;
        case "t1_39":
            gv.mod("energy", -16);
            room182.chatcatch("t1_setenergy");
            if (gv.get("energy") > 0) {
                chat(68, 182);
                nav.bg("182_test/" + callback + ".jpg");
                g.internal.bdsmtest = 100;
            }
            else { //fail
                g.internal.bdsmtest = 90;
                nav.bg("182_test/t1_45.jpg");
                chat(997, 182);
            }
            break;
        case "makeGrades":
            var cardTest = g.internal.cardtest;
            var manTest = g.internal.mantest;
            var femTest = g.internal.femtest;
            var analTest = g.internal.analtest;
            var bdsmTest = g.internal.bdsmtest;
            var finalGrade = parseInt((cardTest + manTest + femTest + analTest + bdsmTest) / 5);
            var sissyGradeString =
                cardTest + " " +
                manTest + " " +
                femTest + " " +
                analTest + " " +
                bdsmTest + " " +
                finalGrade;
            gv.set("sissyGrades", sissyGradeString);
            nav.killall();
            nav.bg("182_test/grade.jpg");
            var gradeList = gv.get("sissyGrades").split(" ");

            nav.t({
                type: "img",
                name: "grade",
                left: 500,
                top: 500,
                font: 40,
                hex: "#000000",
                text: sc.n("me")
            }, 182);
            for (i = 0; i < gradeList.length; i++) {
                nav.t({
                    type: "img",
                    name: "grade",
                    left: 750 + (i * 125),
                    top: 500,
                    font: 40,
                    hex: "#000000",
                    text: g.getGrade(gradeList[i])
                }, 182);
            }
            nav.next("grades");
           
            break;
        case "crown0":
            nav.killall();
            cl.c.accessories = "crown";
            zcl.displayMain(380, 850, .063, "clothes", false);
            cl.display();
            break;
        case "crown0a":
            nav.bg("182_test/final1a.jpg");
            break;
        case "crown1":
            nav.killall();
            var grade = gv.get("sissyGrades").split(" ")[5];
            nav.bg("182_test/final0.jpg");
            if (grade < 67) { //crown
                cl.add("accessories", "piggy");
                chat(81, 182);
            }
            else {
                chat(82, 182);
            }
            break;
        case "piggy0":
            cl.c.accessories = "piggy";
            zcl.displayMain(380, 850, .063, "clothes", false);
            cl.display();
            break;
        case "piggy0a":
            nav.bg("182_test/piggy0a.jpg");
            break;
        case "end":
            $("#room-inv").show();
            levels.mod("xdress", 100, 999);
            sissy.passclass(true);
            break;
        default:
            break;
    }
};

room182.chat = function (chatID) {
    if (chatID === 1000) {
        return {
            chatID: 1000,
            speaker: "me",
            text: " ",
            button: [
                { chatID: 22, text: "...", callback: "" }
            ]
        };
    }
    if (chatID === 999) {
        var hairtxt, bdyhair, cumface, chastity, shower;
        var grade = 100;
        if (cl.c.hairLength > 2) {
            hairtxt = "Great hair length, lovely style. ";
        }
        else if (cl.c.hairLength > 1) {
            hairtxt = "Good hair length. You would look lovely with longer hair. ";
            grade -= 3;
        }
        else if (cl.c.hairLength === 1) {
            hairtxt = "Hair length is fine, but you need to grow it out. I recommend taking the hormone class after this. ";
            grade-= 10;
        }
        else {
            hairtxt = "You hair is much too short. It's unsightly. "
            grade -= 20;
        }

        if (cl.getBodyHair() === null) {
            bdyhair = "Clean shaven like a sissy should be. ";
        }
        else {
            bdyhair = "You need to shave that disgusting hair. ";
            grade-=20;
        }

        if (!cl.c.cumface)
            cumface = "";
        else {
            cumface = "A lady doesn't walk around with cum on her face. ";
            grade-=5;
        }

        if (cl.c.chastity === null) {
            chastity = "You need to wear your cage. No wants to see that dirty thing poking out. ";
            grade-=10;
        }
        else
            chastity = "Chastity cage.. check. ";

        if (daily.get("shower"))
            shower = "Your smell is lovely. ";
        else {
            shower = "You need to shower. You smell like a vagrant. ";
            grade-= 7;
        }
        if (grade < 0)
            grade = 0;
        g.internal.femtest = grade;
        return {
            chatID: 999,
            speaker: "martha",
            text: sc.n("me") + ". Let us see how you did. " + hairtxt + bdyhair + cumface + chastity + shower +
                "For a final grade of " + g.getGrade(grade) + ".",
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
    else if (chatID === 997) {
        return {
            chatID: 0,
            speaker: "black",
            text: "You couldn't last all the way. You need to work on that if you're going " +
                "to survive. It's too bad too. If you did last longer I had a real treat for " +
                "you. You got a " + g.getGrade(g.internal.bdsmtest) +
                " for my test. Now get back upstairs for the ceremony. ",
            button: [
                { chatID: 75, text: "Yes ma'am", callback: "t1_46" }
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
                text: "Interesting. " + sc.n("me") + " I'm surprised that you've denied your true self. " +
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
                text: "Jeremy. Unshaven, no chastity, messy hair, and you haven't showered today. " +
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
                text: "Missy put one on me, but it fell off. She said my tiny penis was chastity " +
                    "enough. That if I tried to show it to a girl, they would just laugh at me. ",
                button: [
                    { chatID: 25, text: "...", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "martha",
                text: "I would not blame the ladies for laughing at your small penis. You deserve " +
                    "it. A man of your size doesn't deserve to ejaculate. Perhaps a vaginal chastity " +
                    "device would be more suited to your lack of genitalia. I shall give you a 'B'. ",
                button: [
                    { chatID: 26, text: "...", callback: "t1_12" },
                ]
            },
            {
                chatID: 26,
                speaker: "martha",
                text: "Philbert, why am I not surprised that your disgusting penis is pointing right " +
                    "at me? ",
                button: [
                    { chatID: 28, text: "...", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "martha",
                text: "Philbert, why am I not surprised that your disgusting penis is pointing right " +
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
                    "rest of my life because my butthole will never close again. Why did I try to " +
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
                    "more test. I know you can get through it, because we're going to look really hot " +
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
                    { chatID: 49, text: "Thanks. Do you mind sitting back, I can feel you dick on in my crack. ", callback: "t1_24" },
                ]
            },
            {
                chatID: 49,
                speaker: "black",
                text: "Ok you cry babies listen up. I'm going to give you your last test so " +
                    "prepare yourself how ever you need. It's going to be painful and will drain " +
                    "any energy out of you that you may have. I'll take you one at a time down " +
                    "in my dungeon and we'll see how long you last. ",
                button: [
                    { chatID: 50, text: "...", callback: "t1_25" },
                ]
            },
            {
                chatID: 50,
                speaker: "ralph",
                text: sc.n("me") + " I'm scared of " + sc.n("black") + ". Last time I went down " +
                    "there she tortured me until I cried. It hurt so back I couldn't sit down. I had " +
                    "to sleep on my stomach for two nights. ",
                button: [
                    { chatID: 51, text: "Oh yeah. I don't like her at all. She's just mean. ", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "ralph",
                text: "I know right. Look at poor Martin over there who just got back. He's just " +
                    "laying in his a puddle of tears. Do you think I can just quit once I get in there? ",
                button: [
                    { chatID: 52, text: "I don't really know. You never know what " + sc.n("black") + "'s going to do. Maybe. ", callback: "" },
                ]
            },
            {
                chatID: 52,
                speaker: "ralph",
                text: "Looks like you're next. Good luck. Remember it's ok to quit if you want. ",
                button: [
                    { chatID: -1, text: "I know. I'll see you on the other side. ", callback: "t1_26" },
                ]
            },
            {
                chatID: 53,
                speaker: "black",
                text: "Well well. If it isn't Missy favorite student. You might ask why I do what " +
                    "I do. It's because you sissies are idiots. You think you can put on a slutty outfit " +
                    "with your asshole hanging out and you'll be treated like a lady. ",
                button: [
                    { chatID: 54, text: "...", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "black",
                text: "You sissies put yourselves in bad places surrounded by bad people. Now don't " +
                    "get me wrong, a rapist is the reason for rape, but it doesn't mean you can't be " +
                    "ready. I will toughen your spirit and emotional resilience in a controlled space. ",
                button: [
                    { chatID: 55, text: "ok", callback: "" },
                ]
            },
            {
                chatID: 55,
                speaker: "black",
                text: "I'm going to go though an increasing amount of pain. When I think you've had " +
                    "enough, I'll stop. Feel free to scream and cry, my walls are soundproof. " +
                    "Nothing makes my dick harder than a sissy bawling. Now to begin I'll put on " + 
                    "this blindfold. Ready?",
                button: [
                    { chatID: 56, text: "...yeah...", callback: "t1_27" },
                ]
            },
            {
                chatID: 56,
                speaker: "black",
                text: "So first I'll start with your nipples. You're going to feel a sharp pinch. " +
                    "Now when I put this on, remember to breathe. Ready? ",
                button: [
                    { chatID: 57, text: "Sure", callback: "t1_28" },
                ]
            },
            {
                chatID: 57,
                speaker: "black",
                text: "Now, now. Remember to breathe. This is just the beginning.  ",
                button: [
                    { chatID: -1, text: "...", callback: "t1_29" },
                ]
            },
            {
                chatID: 58,
                speaker: "black",
                text: "Next up is what I call my magic wand. It's going to put 20,000 volts into " +
                    "your body. Feel free to scream if you need to. ",
                button: [
                    { chatID: 59, text: "...", callback: "t1_30" },
                ]
            },
            {
                chatID: 59,
                speaker: "black",
                text: "Oh yes! I love the sound of a gutteral scream. So sexy! ",
                button: [
                    { chatID: -1, text: "...", callback: "t1_31" },
                ]
            },
            {
                chatID: 60,
                speaker: "black",
                text: "Next is my sounding rod. You're going to love the texture. If you've never " +
                    "been sounded before you're going to feel a stretch and sharp pain down your " +
                    "urethra. Don't worry, I'll be using surgical lubrication so it slides right in. ",
                button: [
                    { chatID: 61, text: "...", callback: "t1_32" },
                ]
            },
            {
                chatID: 61,
                speaker: "black",
                text: "Your urethra sure is tight. I'm sure you can feel it slide up your pee hole. " +
                    "What's this? Is you other hole jealous? Don't worry little fella, I have something " +
                    "to fill you up too.",
                button: [
                    { chatID: -1, text: "...", callback: "t1_33" },
                ]
            },
            {
                chatID: 62,
                speaker: "black",
                text: "The next item going inside you is called the Pear of Agony. A wonderful little toy " +
                    "that slides right in, but as I twist it, it expands inside you filling and stretching " +
                    "your pretty little boy cunt. ",
                button: [
                    { chatID: 63, text: "...", callback: "t1_34" },
                ]
            },
            {
                chatID: 63,
                speaker: "black",
                text: "Yes! Can you feel that pressure inside you? Stretching you open! Push as hard as " +
                    "you want, it's not going anywhere. I love a sissy with filled holes. ",
                button: [
                    { chatID: -1, text: "...", callback: "t1_35" },
                ]
            },
            {
                chatID: 64,
                speaker: "black",
                text: "Now you may ask yourself why I didn't make you air tight and fill you sissy pie hole. " +
                    "That's because I didn't want to muffle your screams as you get your next treat. Are you ready " +
                    "my dear? ",
                button: [
                    { chatID: 65, text: "...no", callback: "t1_36" },
                ]
            },
            {
                chatID: 65,
                speaker: "black",
                text: "SCREAM YOU SLUT! Let me know how much pain you are in!",
                button: [
                    { chatID: -1, text: "...", callback: "t1_37" },
                ]
            },
            {
                chatID: 66,
                speaker: "black",
                text: "YES! My cock is so hard hearing your pain!",
                button: [
                    { chatID: -1, text: "...", callback: "t1_38" },
                ]
            },
            {
                chatID: 67,
                speaker: "black",
                text: "FUCK YES! I love how you clench your muscles in anticipation of my whip! ",
                button: [
                    { chatID: -1, text: "...", callback: "t1_39" },
                ]
            },
            {
                chatID: 68,
                speaker: "black",
                text: "Ooohhh. Did the little baby lose their sound pissing themselves? Is " +
                    "the little baby going to cry too? Wait right here while I get the next " +
                    "set of toys. ",
                button: [
                    { chatID: 69, text: "...", callback: "t1_40" },
                ]
            },
            {
                chatID: 69,
                speaker: "thinking",
                text: "I don't know how much more I can take. My holes hurt, my body hurts, and " +
                    "my back is on fire! This is the worst pain I've been in my entire life. " +
                    "I hope the rest of this pure horror doesn't get worse. I wonder if I can " +
                    "just pass out so I can't feel anymore. ",
                button: [
                    { chatID: 70, text: "...", callback: "t1_41" },
                ]
            },
            {
                chatID: 70,
                speaker: "black",
                text: "Don't worry my little baby. Let me rotate your toys. I'll take this out and " +
                    "add the dildo gag and give you a nice surprise for lasting this long. ",
                button: [
                    { chatID: 71, text: "...", callback: "t1_42" },
                ]
            },
            {
                chatID: 71,
                speaker: "black",
                text: "Now where did I put the ridged dildo at? ",
                button: [
                    { chatID: 72, text: "...", callback: "t1_43" },
                ]
            },
            {
                chatID: 72,
                speaker: "black",
                text: "Hehehe! You like that baby? You like it when I rape your asshole with my " +
                    "big black ridged dildo? Don't try to say no. I know you want to get fucked slut. " +
                    "Show Mommy how much you like getting raped. ",
                button: [
                    { chatID: 73, text: "...", callback: "t1_44" },
                ]
            },
            {
                chatID: 73,
                speaker: "black",
                text: "What a slut! You came from getting raped in the ass. It's not rape " +
                    "if you enjoyed it. ",
                button: [
                    { chatID: 74, text: "...", callback: "t1_45" },
                ]
            },
            {
                chatID: 74,
                speaker: "black",
                text: "That's my good little baby. You did better than everyone else. You get an 'A+'. " +
                    "Now go back upstairs for the ceremony. ",
                button: [
                    { chatID: 75, text: "...", callback: "t1_46" },
                ]
            },
            {
                chatID: 75,
                speaker: "missy",
                text: "Before we begin, one of you did not take the class very , and failed " +
                    "all their their tests. This person is a failure and will be leaving the class for " +
                    "good today. ",
                button: [
                    { chatID: 76, text: "...", callback: "t1_47" },
                ]
            },
            {
                chatID: 76,
                speaker: "missy",
                text: "Jeremy, step forward. You have failed this class, you have failed your " +
                    "classmates, and you failed your teachers. Grab your clothes and go. " +
                    "You are done here. You will never be a sissy. ",
                button: [
                    { chatID: 77, text: "*oh damn*", callback: "t1_48" },
                ]
            },
            {
                chatID: 77,
                speaker: "missy",
                text: "The rest of you will move on. Some of you have an overall 'F', but managed to at least " +
                    "one test. The next test is even harder so " +
                    "I suggest you do you homework and be the best sissy you can if you want to pass. " +
                    "I'll hand out the test results and post the list in the lobby so you can help each " +
                    "other where you are weak. ",
                button: [
                    { chatID: -1, text: "[See your grade. ]", callback: "makeGrades" },
                ]
            },
            {
                chatID: 78,
                speaker: "missy",
                text: "Now that you've all viewed your tests, it's time to announce our star " +
                    "sissy. This sissy is my personal favorite and I expected her to get this " +
                    "award. " + sc.n("me") + ", please set forward to receive your crown. ",
                button: [
                    { chatID: 79, text: "*squeal*", callback: "crown0" },
                ]
            },
            {
                chatID: 79,
                speaker: "missy",
                text: "She has proven she is the total package! The mind of a girl, grace of a " +
                    "lady, determination  of a whore, and anal capacity of a depraved slut. " +
                    "Congratulations. You may return to the group. ",
                button: [
                    { chatID: 81, text: "...", callback: "crown1" },
                ]
            },
            {
                chatID: 80,
                speaker: "missy",
                text: "Now that you've all viewed your tests, it's time to announce our star " +
                    "sissy. This sissy is my personal favorite and I expected her to get this " +
                    "award. Martin, please set forward to receive your crown. ", 
                button: [
                    { chatID: 79, text: "...", callback: "crown0a" },
                ]
            },
            {
                chatID: 81,
                speaker: "missy",
                text: "And now for the worst student. " + sc.n("me") + ", please step forward to " +
                    "receive the piggy nose. ",
                button: [
                    { chatID: 83, text: "...", callback: "piggy0" },
                ]
            },
            {
                chatID: 82,
                speaker: "missy",
                text: "And now for the worst student. " + sc.n("ralph") + ", please step forward to " +
                    "receive the piggy nose. ",
                button: [
                    { chatID: 83, text: "...", callback: "piggy0a" },
                ]
            },
            {
                chatID: 83,
                speaker: "missy",
                text: "Somehow you managed to either fail, or nearly fail every event. I invite " +
                    "everyone to help this poor idiot girl find her way or she will be dropped " +
                    "from the course like Jeremy. You disgust me. Go back to the group and " +
                    "think about what a horrible sissy you are. ",
                button: [
                    { chatID: 84, text: "...", callback: "final0" },
                ]
            },
            {
                chatID: 84,
                speaker: "missy",
                text: "This concludes your first test. Most of you are average. Stop being " +
                    "average and be great. To help you on your way to greatness, the next " +
                    "set of classes will really push you hard into your sissyness, but not " +
                    "every class is manditory. You must seek greatness on your own. ",
                button: [
                    { chatID: -1, text: "...", callback: "end" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};