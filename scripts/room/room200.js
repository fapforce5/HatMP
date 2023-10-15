//Room name
var room200 = {};
room200.main = function () {

    nav.button({
        "type": "btn",
        "name": "missy",
        "left": 667,
        "top": 469,
        "width": 622,
        "height": 520,
        "image": "200_frontOffice/200_missy.png"
    }, 200);
        
    g.internal = { caseList: missy.getcases(), activeCase: null };
};

room200.btnclick = function (name) {
    switch (name) {
        case "missy":
            var activeCase = missy.get("activeCase");
            var activeCaseComplete = missy.get("activeCaseComplete");
            console.log(activeCase, activeCaseComplete);
            if (missy.get("totalDaysWorked") < 1)
                chat(0, 200);
            else if (missy.get("totalDaysWorked") === 5) {
                chat(9, 200);
            }
            else if (activeCase > 3 && activeCaseComplete !== 0) {
                switch (activeCase) {
                    case 4:
                        chat(32, 200);
                        break;
                    case 5:
                        if (activeCaseComplete === 1)
                            chat(12, 200);
                        else
                            chat(13, 200);
                        break;
                    case 6:
                        if (activeCaseComplete === 1) {
                            if (missy.get("reusableCaseCounter") === 999) //tried to fuck her
                                chat(20, 200);
                            else
                                chat(18, 200);
                        }
                        else
                            chat(19, 200);
                        break;
                    case 8:
                        if (activeCaseComplete === 1) {
                            inv.use("locket");
                            chat(44, 200);
                        }
                        else
                            chat(45, 200);
                        break;
                }
            }
            else if (missy.get("uniform") > 0 && missy.get("uniformNew") === 0) {
                missy.set("uniformNew", 1);
                if (missy.get("uniform") === 1) {
                    chat(21, 200);
                }
            }
            else if (missy.get("chastity") > 0 && cl.c.chastity === null) {
                chat(23, 200);
            }
            else
                room200.chatcatch("selectJob");
        break;
        case "job_0":
        case "job_1":
        case "job_2":
        case "job_3":
        case "job_4":
            g.pass = (parseInt(name.replace("job_", "")));
            char.room(218);
            break;
        case "case_0":
        case "case_1":
        case "case_2":
        case "case_3":
            g.internal.activeCase = g.internal.caseList[parseInt(name.replace("case_", ""))];
            if (!g.internal.activeCase.active) {
                chat(999, 200);
            }
            else {
                nav.bg("200_frontOffice/bg.jpg");
                nav.killall();
                room200.chatcatch(g.internal.activeCase.callback);
            }
            break;
        default:
            break;
    }
};

room200.chatcatch = function (callback) {
    switch (callback) {
        case "minorInfraction":
            missy.mod("weeklyPay", -10);
            break;
        case "selectJob":
            var jobCounter = 0;
            nav.killall();
            nav.bg("200_frontOffice/work.jpg");
            $.each(missy.jobs, function (i, v) {
                if (missy.st[v.thisWeek].c === 0) {
                    nav.button({
                        "type": "btn",
                        "name": "job_" + i,
                        "left": 400 + (Math.floor(i / 4) * 700),
                        "top": 450 + ((i % 4) * 120),
                        "width": 600,
                        "height": 100,
                        "image": "200_frontOffice/" + v.img
                    }, 200);
                    jobCounter++;
                }
            });

            //friday reset fix if jobs are empty
            if (jobCounter === 0) {
                $.each(missy.jobs, function (i, v) {
                    missy.st[v.thisWeek].c === 0;
                    nav.button({
                        "type": "btn",
                        "name": "job_" + i,
                        "left": 400 + (Math.floor(i / 4) * 700),
                        "top": 450 + ((i % 4) * 120),
                        "width": 600,
                        "height": 100,
                        "image": "200_frontOffice/" + v.img
                    }, 200);
                    jobCounter++;
                });
            }

            $.each(g.internal.caseList, function (i, v) {
                if (i < 4) {
                    nav.button({
                        "type": "btn",
                        "name": "case_" + i,
                        "left": 400 + (Math.floor(i / 2) * 700),
                        "top": 100 + ((i % 2) * 120),
                        "width": 600,
                        "height": 100,
                        "image": "200_frontOffice/" + v.icon
                    }, 200);
                }
            });
            break;
        case "case_booth":
            chat(4, 200);
            break;
        case "explain0":
        case "case_booth1":
        case "case_booth2":
        case "case_lostgirl1":
        case "case_usb0":
        case "case_usb1":
        case "case_usb2":
        case "case_trash1":
            nav.killall();
            nav.bg("200_frontOffice/" + callback + ".jpg");
            break;
        case "case_booth3":
            missy.set("activeCase", 4);
            break;
        case "case_booth_complete":
            gv.mod("money", 300);
            missy.mod("mood", 20);
            levels.mod("pi", 100);
            missy.caseComplete(5);
            room200.chatcatch("case_complete_end");
            break;
        case "case_booth_complete_bad":
            missy.caseComplete(5);
            char.room(205);
            break;
        case "case_lostgirl":
            nav.killall();
            nav.bg("200_frontOffice/case_lostgirl0.jpg");
            chat(14, 200);
            break;
        case "case_lostgirl2":
            pic.add("case_lostgirl");
            room200.chatcatch("case_afterExplaniation");
            break;
        case "case_lostgirl_goodend":
            gv.mod("money", 250);
            missy.mod("mood", 20);
            levels.mod("pi", 100);
            missy.caseComplete(6);
            room200.chatcatch("case_complete_end");
            break;
        case "case_lostgirl_badend":
            missy.caseComplete(6);
            char.room(217);
            break;
        case "case_lostgirl_chastity":
            missy.caseComplete(6);
            g.pass = "chastity";
            char.room(205);
            break;
        case "case_usb_end":
            gv.mod("money", 150);
            missy.mod("mood", 20);
            levels.mod("pi", 100);
            missy.caseComplete(4);
            room200.chatcatch("case_complete_end");
            break;
        case "case_trash":
            nav.killall();
            nav.bg("200_frontOffice/case_trash0.jpg");
            chat(36, 200);
            break;
        case "case_trashcheck":
            if (missy.get("chastity") === 0) {
                chat(38, 200);
            }
            else {
                room200.chatcatch("case_afterExplaniation");
            }
            break;
        case "case_trash_lockedup":
            missy.set("activeCase", g.internal.activeCase.caseId);
            missy.set("activeCaseComplete", 0);
            missy.set("reusableCaseCounter", 0);
            g.pass = "chastity";
            char.room(205);
            break;
        case "case_trash_goodend":
            gv.mod("money", 200);
            missy.mod("mood", 20);
            missy.caseComplete(8);
            room200.chatcatch("case_complete_end");
            break;
        case "case_trash_badend":
            missy.mod("mood", -50);
            missy.caseComplete(8);
            char.room(217);
            break;
        case "case_afterExplaniation":
            missy.set("activeCase", g.internal.activeCase.caseId);
            missy.set("activeCaseComplete", 0);
            missy.set("reusableCaseCounter", 0);
            if (g.dt.getDay() === 5 && missy.get("weeklyPay") !== 0)
                char.room(196);
            else
                char.room(0);
            break;
        case "case_complete_end":
            if (g.gethourdecimal() < 10) {
                g.internal = { caseList: missy.getcases(), activeCase: null };
                room200.chatcatch("selectJob");
            }
            else if (g.dt.getDay === 5)
                char.room(196);
            else
                char.room(0);
            break;
        case "hate":
            missy.mod("mood", -20);
            break;
        case "uniform1_0":
            cl.c.pants = null;
            zcl.displayMain(-200, 550, .3, "clothes", true);
            cl.c.pants = "s";
            break;
        case "chastity0":
            nav.killall();
            if (gv.get("arousal") > 50) {
                nav.bg("205_chastity/chast0_1.jpg");
                chat(25, 200);
            }
            else {
                nav.bg("205_chastity/soft.jpg");
                chat(43, 200);
            }
            break;
        case "chastity1":
            nav.bg("205_chastity/punch.jpg");
            break;
        case "chastity2":
            nav.bg("205_chastity/soft.jpg");
            break;
        case "chastity3":
            cl.c.chastity = gv.get("castitycage");
            if (cl.c.chastity === "cage")
                nav.bg("205_chastity/chast0_6.jpg");
            else
                nav.bg("205_chastity/pink.jpg");
            break;
        case "reset":
            char.room(200);
            break;
        case "case_usb":
            chat(26, 200);
            break;
    };
};

room200.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "missy",
            text: g.internal.activeCase.notReadyTxt,
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "missy",
                text: "Welcome to your first day. I'm glad to see you can follow simple instructions like dressing yourself. " +
                    "As my employee you'll find I'm very strict. I expect your utmost loyalty and obediance in " +
                    "everything you do for me. If you do well, you'll be rewarded, if you do poorly you will be " +
                    "disciplined. ",
                button: [
                    { chatID: 1, text: "cool", callback: "" },
                    { chatID: 2, text: "Yes ma'am", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "missy",
                text: "Thank you for the chance to demonstrate how you will be disciplined. Not calling me by my " +
                    "proper title is a minor infraction. $10 will be deducted from your paycheck on the end of " +
                    "week. ",
                button: [
                    { chatID: 2, text: "Yes ma'am", callback: "minorInfraction" },
                ]
            },
            {
                chatID: 2,
                speaker: "missy",
                text: "I've been without proper help for far too long, so there are many things to do. Each morning " +
                    "I will allow you to pick which job you will do for me. Each one has a different compensation " +
                    "depending on it's need and difficulty. I will allow you to take lunch, then the afternoon I " +
                    "will administer any training I have for you. You have a lot to learn, and my time is valuable.  ",
                button: [
                    { chatID: 3, text: "Yes ma'am", callback: "" },
                ]
            },
            {
                chatID: 3,
                speaker: "missy",
                text: "Payday is on Friday. Don't missy work on Friday or you will not be paid. Now choose which " +
                    "job you want to do on your first day. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "selectJob" },
                ]
            },
            {
                chatID: 4,
                speaker: "missy",
                text: "I have a suprise for you. Just a moment while I set up. ",
                button: [
                    { chatID: 5, text: "...", callback: "case_booth1" },
                ]
            },
            {
                chatID: 5,
                speaker: "missy",
                text: "Ok Airhead listen up. I guess it's time for your first real case. A friend of mine at " +
                    "Toys 'n Us has an ongoing  " +
                    "series of run-ins with some crazy cum beast. It seems that some one goes into their wack-off booths " +
                    "and just covers it in their cum. It wouldn't be a problem if they paid for a show, but then just enter and " +
                    "in a matter of minutes they just cover the entire booth in cum and run. It would be quite impressive if " +
                    sc.n("tiffany") + " and " + sc.n("candy") + " didn't have to spend so much time cleaning it up. " +
                    "I need you to go there, watch the booths, and catch that animal. Do you have all this so far?",
                button: [
                    { chatID: 6, text: "Yes ma'am", callback: "case_booth2" }
                ]
            },
            {
                chatID: 6,
                speaker: "missy",
                text: "OK, I need you to go to the Toys 'n Us and meet with " + sc.n("tiffany") + ", she'll explain what to do. This is your " +
                    "first big break, don't fuck it up. Now repeat back to me what you're doing.",
                button: [
                    { chatID: 7, text: "Go to the mall and buy new shoes", callback: "hate" },
                    { chatID: 7, text: "Go home and masturbate to Hentai", callback: "hate" },
                    { chatID: 8, text: "Going straight to Toys 'n Us and follow " + sc.n("tiffany") + "'s orders", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "missy",
                text: "No you moron. Go to Toys 'n Us and do what " + sc.n("tiffany") + " says. Now get out " + 
                    "before your stipidity spreads to me. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_afterExplaniation" }
                ]
            },
            {
                chatID: 8,
                speaker: "missy",
                text: "You got it Airhead, Head over to the toy store and take care of it. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_afterExplaniation" }
                ]
            },
            {
                chatID: 9,
                speaker: "missy",
                text: "Now that you've complete a week's worth of work I'm going to give you a chance to " +
                    "do some investigations. Some will be for me, and some for our clients. All are to be " +
                    "treated with the utmost care and dedication. Successfully completing a case will bring " +
                    "great rewards, and failures will bring great retribution. ",
                button: [
                    { chatID: 10, text: "Yes ma'am", callback: "explain0" }
                ]
            },
            {
                chatID: 10,
                speaker: "missy",
                text: "As I continue to mold you, and you improve yourself, more cases will be " +
                    "available. Those cases that you are almost ready for will show themselves with the " +
                    "red mark. You can check them to see what you need to improve to do that case. Those " +
                    "that you are ready for will show how much that case is worth successfully completed. ",
                button: [
                    { chatID: 11, text: "...", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "missy",
                text: "If you are on a case, that is your job. You will focus only on the case, and you " +
                    "won't need to come back here. Once you're complete with your case report to " + sc.n("cecilia") +
                    " and she'll inform me. Now ready to start your day? ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "selectJob" }
                ]
            },
            {
                chatID: 12,
                speaker: "missy",
                text: sc.n("tiffany") + " informed me on what happened. Great work, that cult is always up to something. I'm " +
                    "sure this little event will cause them to do their extraction process elsewhere. As promised here's $300 " +
                    "for your fine work on your first case. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am", callback: "case_booth_complete" }
                ]
            },
            {
                chatID: 13,
                speaker: "missy",
                text: sc.n("tiffany") + " informed me on what happened. All you had to do was sit there and look out of a peep " +
                    "hole and you couldn't get that right! I guess your cock is in control of your brain. ",
                button: [
                    { chatID: -1, text: "ma'am", callback: "case_booth_complete_bad" }
                ]
            },
            {
                chatID: 14,
                speaker: "missy",
                text: "At this facility we have a School for extraordinary girls. One of our Professors, Martha, who is " +
                    "the Mistress of Etiquette at the school has a daughter that has run away. ",
                button: [
                    { chatID: 15, text: "What's the school for extraordinary girls? ", callback: "" },
                    { chatID: 16, text: "Yes ma'am ", callback: "case_lostgirl1" },
                ]
            },
            {
                chatID: 15,
                speaker: "missy",
                text: "The school started as a side project of mine with a friend of mine, Princess Pink. It started as a way for us " +
                    "to give back to the community and help lost little girls find themselves. But over the years it has really " +
                    "grown to a fully funcitonal school. Princess Pink has really done some tremendous work making it what it is. " +
                    "Don't worry, I'm sure you'll see more of the school in your future. ",
                button: [
                    { chatID: 16, text: "...", callback: "case_lostgirl1" }
                ]
            },
            {
                chatID: 16,
                speaker: "missy",
                text: "This is Sanaria, Martha's daughter. Martha's fairly sure she's somewhere in town. I need you to search " +   
                    "all the buildings you can looking for her. She's probably moving around so you'll need to look around both " +
                    "day and night. She's in her party phase, so also check where there's a lot of people. I'm going to send a " +
                    "picture of her to your phone so you can verify her identity. Once you find her call me immediately. ",
                button: [
                    { chatID: 17, text: "Got it!", callback: "" }
                ]
            },
            {
                chatID: 17,
                speaker: "missy",
                text: "Good. Don't fuck around ",
                button: [
                    { chatID: -1, text: "Yes ma'am!", callback: "case_lostgirl2" }
                ]
            },
            {
                chatID: 18,
                speaker: "missy",
                text: "Excellent work in tracking down Sanaria. " + sc.n("martha") + " is thrilled to get her daughter back. " +
                    "as promised, your $250 reward for a job well done. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "case_lostgirl_goodend" }
                ]
            },
            {
                chatID: 19,
                speaker: "missy",
                text: "Your little fuckup cost me over $1000. I had to hire another investigator to track her down since I " +
                    "don't have time to do it myself. Not only do I waste money, but I look like an idiot hiring another PI " +
                    "to do a job this agency should be doing. For your stipidity a punishment is in order. ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "case_lostgirl_badend" }
                ]
            },
            {
                chatID: 20,
                speaker: "missy",
                text: "You tried to fuck " + sc.n("martha") + "'s daughter in a night club bathroom? I don't even know where to " +
                    "begin. ",
                button: [
                    { chatID: -1, text: "...", callback: "case_lostgirl_chastity" }
                ]
            },
            {
                chatID: 21,
                speaker: "missy",
                text: "Good morning my little sissy? How do those panties feel? So much softer than nasty boy's panties. " +
                    "Take your pants off. Show me your pretty panties again. ",
                button: [
                    { chatID: 22, text: "Yes ma'am", callback: "uniform1_0" }
                ]
            },
            {
                chatID: 22,
                speaker: "missy",
                text: "That's a good sissy. That panty buldge is so cute on you. Now on to work. ",
                button: [
                    { chatID: -1, text: "...", callback: "selectJob" }
                ]
            },
            {
                chatID: 23,
                speaker: "missy",
                text: "Good morning. Bring that cock over here so I can lock it back up. ",
                button: [
                    { chatID: 24, text: "Again. Could we just skip it ma'am? ", callback: "hate" },
                ]
            },
            {
                chatID: 24,
                speaker: "missy",
                text: "I'm glad you asked. Fuck No! You're wearing this cage because you can't seem to control your cock. " +
                    "My work here is too important for you to go sticking your dick in everything, so that's why you're " +
                    "getting locked back up. Now bring that cock over here before I rip it off and you become a dickless loser! ",
                button: [
                    { chatID: -1, text: "Yes ma'am", callback: "chastity0" },
                ]
            },
            {
                chatID: 25,
                speaker: "missy",
                text: "You knew you were going back into chastity and you present me this hard cock? You couldn't jack it at " +
                    "home before you came? I'm not jacking you again. Get ready, I'm going to make you soft. ",
                button: [
                    { chatID: 39, text: "oh no....", callback: "chastity1" },
                ]
            },
            {
                chatID: 26,
                speaker: "missy",
                text: "Your first case. It's not a real case. You're still too stupid. Really I just need you to go and " +
                    "retrieve a usb drive. I'll set up my projector and go through the details.  ",
                button: [
                    { chatID: 27, text: "....", callback: "case_usb0" },
                ]
            },
            {
                chatID: 27,
                speaker: "missy",
                text: "I'm going to walk you step by step so your tiny mind can absorbe what you need to do. That way you don't " +
                    "fuck it up. First you need to go to the park. ",
                button: [
                    { chatID: 28, text: "yes ma'am", callback: "case_usb1" },
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "Walk into the men's bathroom. Not the woman's. You can't go in there since you don't have tits. ",
                button: [
                    { chatID: 30, text: "...", callback: "case_usb2" },
                ]
            },
            {
                chatID: 29,
                speaker: "missy",
                text: "Go into the last stall. Don't go in the other stalls. I know what " + sc.n("cecilia") + " does in there. " +
                    "Get the USB Drive taped to the back of that toilet and bring it here. That's it. That's the entire case. " +
                    "Go get a USB drive and bring it back. Do you think you can handle that? ",
                button: [
                    { chatID: 30, text: "...", callback: "hate" },
                    { chatID: 31, text: "Yes ma'am.", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "missy",
                text: "Hey. Space cadet. Did you hear me?",
                button: [
                    { chatID: 31, text: "Yes ma'am.", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "missy",
                text: "Good now go get my USB drive from the last toilet in the park. ",
                button: [
                    { chatID: -1, text: "Yes ma'am.", callback: "case_afterExplaniation" },
                ]
            },
            {
                chatID: 32,
                speaker: "missy",
                text: "Oh good. You've brought me my USB. I trust you didn't open it.  ",
                button: [
                    { chatID: 33, text: "I did open it ma'am", callback: "hate" },
                    { chatID: 35, text: "Of course not ma'am", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "missy",
                text: "Normally disobaying me leads to a punishment fitting the action, but I guess lying is worse. You're probably " +
                    "curious as to who those young men are. You see the C.U.M. cult takes tracks the young men in this town through " +
                    "their internet activity. They've worked a deal the the local internet company for their records. Based on " +
                    "the sites they visit and basic demographic information the cult selects it's list of targets to kidnap for " +
                    "their ceremony. ",
                button: [
                    { chatID: 34, text: "...", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "missy",
                text: "Now this isn't the only way they find their candidates, but this list is what we call the internet activity " +
                    "list, put together by an old friend of mine. Being that we need to track these young men I've put together " +
                    "a class that we invite them to. This class aligns with their certain needs and desires to ensure we can " +
                    "continue to track them. " +
                    "I admit we have our own reasons for the class, but it does align with the bigger picture. While I " +
                    "don't want to give everything away, I will say you'll know about this class too in due time.",
                button: [
                    { chatID: 35, text: "...", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "missy",
                text: "For a job well done here's your $150 for completing the case. ",
                button: [
                    { chatID: -1, text: "Thank you ma'am!", callback: "case_usb_end" },
                ]
            },
            {
                chatID: 36,
                speaker: "missy",
                text: "One of my idiot clients seems to have traded a locket for sex. I need you to go retrieve it. " +
                    "I'm sure you've noticed the dreadful homeless camp beside my building. There's a prostitute there " +
                    "that is holding on to that locket. Normally I wouldn't take up a case like this since it will cost " +
                    "him more to buy it back than what he would pay for my services, but in this case he was pretty rough " +
                    "with her and now she's refusing to give it back to him. ",
                button: [
                    { chatID: 37, text: "...", callback: "case_trash1" },
                ]
            },
            {
                chatID: 37,
                speaker: "missy",
                text: "She's totally blameless in all this, and part of his payment has been a severe punishment by Ms. Black. " +
                    "Sadly I wasn't able to find out her name, but just look for the prostitute at the camp. I trust it shouldn't " +
                    "be too hard getting it back for you. Got it?",
                button: [
                    { chatID: -1, text: "Yes ma'am. Get the locket from the prostitute at the homeless camp. ", callback: "case_trashcheck" },
                ]
            },
            {
                chatID: 38,
                speaker: "missy",
                text: "Good. Also I don't need your dick getting in the way of this case, so I'm going to have to lock it up. " +
                    "Her pussy has caused enough problems, I don't need yours to add to that. That's why you're getting locked up. ",
                button: [
                    { chatID: -1, text: "What did I do wrong?", callback: "case_trash_lockedup" },
                ]
            },
            {
                chatID: 39,
                speaker: "me",
                text: "OOOoooooffff. I can't breathe! Ooooooo  ",
                button: [
                    { chatID: 40, text: "...", callback: "chastity2" },
                ]
            },
            {
                chatID: 40,
                speaker: "missy",
                text: "Quit whining. I told you it has to be soft to get the cage on. Thank me for making your cock soft. ",
                button: [
                    { chatID: 41, text: "uuughh. Thank you...", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "missy",
                text: "Thank you what?",
                button: [
                    { chatID: 42, text: "Thank you for making my cock soft ma'am. ", callback: "chastity3" },
                ]
            },
            {
                chatID: 42,
                speaker: "missy",
                text: "All locked up. Now lets get to work. ",
                button: [
                    { chatID: -1, text: "Yes ma'am. ", callback: "reset" },
                ]
            },
            {
                chatID: 43,
                speaker: "missy",
                text: "Only a sissy has a soft cock in the presence of a lady. ",
                button: [
                    { chatID: 42, text: "Yes ma'am. ", callback: "chastity3" },
                ]
            },
            {
                chatID: 44,
                speaker: "missy",
                text: "Very well done. My client is going to be very excited. $200 for your great work!",
                button: [
                    { chatID: -1, text: "Thanks ma'am. ", callback: "case_trash_goodend" },
                ]
            },
            {
                chatID: 45,
                speaker: "missy",
                text: "How do you fuck up getting a locket from a prostitute? I even had you locked in chastity. Not only " +
                    "do you not get paid, but a punishment is in order. And I have to fix your fuck up. ",
                button: [
                    { chatID: -1, text: "Yes ma'am. ", callback: "case_trash_badend" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
