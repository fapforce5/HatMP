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
                        if (activeCaseComplete === 1)
                            chat(12, 200);
                        else
                            chat(13, 200);
                        break;
                    case 5:
                        if (activeCaseComplete === 1) {
                            if (missy.get("reusableCaseCounter") === 999) //tried to fuck her
                                chat(20, 200);
                            else
                                chat(18, 200);
                        }
                        else
                            chat(19, 200);
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
                }
            });
            
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
            nav.bg("200_frontOffice/" + callback + ".jpg");
            break;
        case "case_booth3":
            missy.set("activeCase", 4);
            break;
        case "case_booth_complete":
            gv.mod("money", 300);
            missy.mod("mood", 20);
            levels.mod("pi", 100);
            missy.caseComplete(4);
            room200.chatcatch("case_complete_end");
            break;
        case "case_booth_complete_bad":
            missy.caseComplete(4);
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
            missy.caseComplete(5);
            room200.chatcatch("case_complete_end");
            break;
        case "case_lostgirl_badend":
            missy.caseComplete(5);
            char.room(217);
            break;
        case "case_lostgirl_chastity":
            missy.caseComplete(5);
            g.pass = "chastity";
            char.room(205);
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
            if (g.gethourdecimal() < 10)
                room200.chatcatch("selectJob");
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
            if (gv.get("arousal") > 50) {
                nav.bg("205_chastity/chast0_1.jpg");
                char(25, 200);
            }
            else {
                nav.bg("205_chastity/soft.jpg");

            }
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
                    { chatID: 24, text: "Again. Could we just skip it? ", callback: "hate" },
                    { chatID: -1, text: "Yes ma'am", callback: "chastity0" },
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
                    { chatID: -1, text: "oh no....", callback: "chastity1" },
                ]
            },
            //},
            //{
            //    chatID: 17,
            //    speaker: "missy",
            //    text: "I'm glad to see you can follow simple instructions like dressing yourself. Your first task of the day " +
            //        "will be to clean my bathroom. As an investigator you have to be able to spend long hours watching every detail. " +
            //        "There are cleaning supplies in the closet, I expect every inch of that bathroom to be spotless. " +
            //        "If you clean it really good I'll give you a reward. Now get to work Piggy",
            //    button: [
            //        { chatID: -1, text: "[Clean the Bathroom]", callback: "clanBathroom" }
            //    ]
            //},
            //{
            //    chatID: 18,
            //    speaker: "missy",
            //    text: "Get on your knees next to that chair on my left. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "kneesStep3" }
            //    ]
            //},
            //{
            //    chatID: 19,
            //    speaker: "missy",
            //    text: "Welcome back. Follow me to the file cabinets.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "firstFile" }
            //    ]
            //},
            //{
            //    chatID: 20,
            //    speaker: "missy",
            //    text: "So Piggy, last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
            //        "I promised you would receive a proper punishment, and I always keep my word. " +
            //        "Right now you're chubby, not fat but not attractive. Take your shirt off.",
            //    button: [
            //        { chatID: 21, text: "Take your shirt off", callback: "removeshirt" }
            //    ]
            //},
            //{
            //    chatID: 21,
            //    speaker: "missy",
            //    text: "Look at yourself; it's disgusting. Until you lose the weight you're going to wear a piggy nose every time you " +
            //        "come work for me. Take this and put it on.",
            //    button: [
            //        { chatID: 22, text: "[Put on piggy nose]", callback: "piggy" }
            //    ]
            //},
            //{
            //    chatID: 22,
            //    speaker: "missy",
            //    text: "Hahahahah Piggy don't you look ridiculous. I don't believe in punishment without some kind of reward. " +
            //        "Once you lose the weight to prove you can commit to something I will let you start working some cases. " +
            //        "Until then I suggest you start running in the park, or get a gym pass. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 23,
            //    speaker: "missy",
            //    text: "So last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
            //        "I promised you would receive a proper punishment, and I always keep my word. " +
            //        "Right now you're chubby, not fat but not attractive. Take your shirt off.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "leave" }
            //    ]
            //},
            //{
            //    chatID: 24,
            //    speaker: "missy",
            //    text: "You did adequate today.",
            //    button: [
            //        { chatID: -1, text: "[Collect $55 day's pay]", callback: "payLeave" }
            //    ]
            //},
            //{
            //    chatID: 25,
            //    speaker: "missy",
            //    text: "Airhead I'm going to have you file today.",
            //    button: [
            //        { chatID: -1, text: "[Start Filing]", callback: "jobFile" }
            //    ]
            //},
            //{
            //    chatID: 26,
            //    speaker: "missy",
            //    text: "I need you to update our computer files. You can use the spare computer next to " + sc.n("cecilia") + ".",
            //    button: [
            //        { chatID: -1, text: "[Start working]", callback: "jobComputer" }
            //    ]
            //},
            //{
            //    chatID: 27,
            //    speaker: "missy",
            //    text: "The bathroom is a mess. Go clean it.",
            //    button: [
            //        { chatID: -1, text: "[Clean Bathroom]", callback: "jobBathroom" }
            //    ]
            //},
            //{
            //    chatID: 28,
            //    speaker: "missy",
            //    text: "Alright Piggy I see you've lost the weight, you're actually looking not terrible; I can work with this. " +
            //        "You are no longer Piggy, you are now Airhead. No longer fat, but still an idiot.",
            //    button: [
            //        { chatID: 29, text: "Thank you ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 29,
            //    speaker: "missy",
            //    text: "You're welcome Airhead. I guess it's time for your first real case. A friend of mine at " +
            //        "The Toy Store has an ongoing  " +
            //        "series of run-ins with some crazy cum beast. It seems that some one goes into their wack-off booths " +
            //        "and just covers it in their cum. It wouldn't be a problem if they paid for a show, but then just enter and " +
            //        "in a matter of minutes they just cover the entire booth in cum and run. It would be quite impressive if poor " +
            //        sc.n("candy") + " didn't have to spend so much time cleaning it up. " +
            //        "I need you to go there, watch the booths, and catch that animal. Do you have all this so far?",
            //    button: [
            //        { chatID: 30, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 30,
            //    speaker: "missy",
            //    text: "OK, I need you to go to the Toy Store and meet with " + sc.n("tiffany") + ", she'll explain what to do. This is your " +
            //        "first big break, don't fuck it up. Now repeat back to me what you're doing.",
            //    button: [
            //        { chatID: 31, text: "Go to the mall and buy new shoes", callback: "" },
            //        { chatID: 31, text: "Go home and masturbate to Hentai", callback: "" },
            //        { chatID: 32, text: "Going straight to Toys 'N Us and follow Tiffany's orders", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 31,
            //    speaker: "missy",
            //    text: "No you moron. Obviously you're not ready. Get the fuck out.",
            //    button: [
            //        { chatID: -1, text: "[Leave]", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 32,
            //    speaker: "missy",
            //    text: "You got it Airhead, now head over to the toy store and take care of it. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "toyStore" }
            //    ]
            //},
            //{
            //    chatID: 33,
            //    speaker: "missy",
            //    text: "Sooooo Airhead. Your first big case and instead of working it you decide to watch my friend Tiffany " +
            //        "while she's getting ready for a show... I'm not mad at you, I'm actually mad at myself.",
            //    button: [
            //        { chatID: 34, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 34,
            //    speaker: "missy",
            //    text: "Obviously I have not properly trained you for taking a real case. You  seem to like watching women in their " +
            //        "underwear. It's expected from a man of your age, but if you're going to be in this line of work you have to " +
            //        "break that desire.",
            //    button: [
            //        { chatID: 35, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 35,
            //    speaker: "missy",
            //    text: "To break you of your habit of spying on women in their underwear you will report for work from now on in " +
            //        "women's panties. Nothing to provocative, " + sc.n("cecilia") + " doesn't need to see your balls hanging out. ",
            //    button: [
            //        { chatID: 36, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 36,
            //    speaker: "missy",
            //    text: "I'm not going to force you to do anything, you choose your profession. If you're going to continue to " +
            //        "work here you will do it in panties. ",
            //    button: [
            //        { chatID: 37, text: "Where am I supposed to get panties at?!?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 37,
            //    speaker: "missy",
            //    text: "You're training to be a detective. Finding a pair of women's underwear should not be difficult. " +
            //        "I have work to do. Report back when you have decided to follow my guidance.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am [Leave]", callback: "leavePanties" }
            //    ]
            //},
            //{
            //    chatID: 38,
            //    speaker: "missy",
            //    text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. " +
            //        "Strip down to your panties and show me.",
            //    button: [
            //        { chatID: 39, text: "Yes ma'am [Strip down to your panties]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 39,
            //    speaker: "missy",
            //    text: "Nice Sissy. Those panties make you look good on you, I'm proud you've started realizing who you really are. ",
            //    button: [
            //        { chatID: 40, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 40,
            //    speaker: "missy",
            //    text: "Call me mistress. Let me see how you ass looks.",
            //    button: [
            //        { chatID: 139, text: "Yes mistress", callback: "stripPanties1" }
            //    ]
            //},
            //{
            //    chatID: 41,
            //    speaker: "missy",
            //    text: "OK, it's time for your panty check. Strip 'em off.",
            //    button: [
            //        { chatID: 42, text: "[Strip]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 42,
            //    speaker: "missy",
            //    text: "Let me see that butt now.",
            //    button: [
            //        { chatID: -1, text: "[Show Missy your butt]", callback: "turnaround" }
            //    ]
            //},
            //{
            //    chatID: 43,
            //    speaker: "missy",
            //    text: "You follow direction very well.",
            //    button: [
            //        { chatID: -1, text: "...", callback: "getPantyTask" }
            //    ]
            //},
            //{
            //    chatID: 44,
            //    speaker: "missy",
            //    text: "That bathroom is a mess Sissy, you need to clean it up.",
            //    button: [
            //        { chatID: -1, text: "[Clean bathroom]", callback: "clanBathroom" }
            //    ]
            //},
            //{
            //    chatID: 45,
            //    speaker: "missy",
            //    text: "I like you in your panties, but put your suit back on and assist with " + sc.n("cecilia") + " out front. ",
            //    button: [
            //        { chatID: -1, text: "[Get dressed and work out front]", callback: "jobComputer" }
            //    ]
            //},
            //{
            //    chatID: 46,
            //    speaker: "missy",
            //    text: "So last time you were here you were unable to properly clean a bathroom, and failed to address me properly. " +
            //        "I promised you would receive a proper punishment, and I always keep my word. " +
            //        "Since you can't seem to keep a clean bathroom you must like to live in shit, just like a " +
            //        "little piggy. I got you piggy nose. Take you piggy nose and put it on",
            //    button: [
            //        { chatID: 47, text: "[Put on piggy nose]", callback: "piggy" }
            //    ]
            //},
            //{
            //    chatID: 47,
            //    speaker: "missy",
            //    text: "Hahahahah Sissy don't you look ridiculous. Make sure you wear that next time you come in " +
            //        "my lil' piggy boy.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 48,
            //    speaker: "missy",
            //    text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. " +
            //        "Strip down to your panties and show me.",
            //    button: [
            //        { chatID: 49, text: "Yes mistress [Strip down to your panties]", callback: "stripPantiesHairy" },
            //        { chatID: -1, text: "This is too weird for me [Leave]", callback: "leaveAddHours" }
            //    ]
            //},
            //{
            //    chatID: 49,
            //    speaker: "missy",
            //    text: "I think I just puked in my mouth a little bit. You're disgusting, go shave your nasty body before " +
            //        "coming back to work!",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "leaveAndShave" }
            //    ]
            //},
            //{
            //    chatID: 50,
            //    speaker: "missy",
            //    text: "Time for the body and panty check.",
            //    button: [
            //        { chatID: 51, text: "Yes mistress [Strip down to your panties]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 51,
            //    speaker: "missy",
            //    text: "Nice, now turn around, show me your ass.",
            //    button: [
            //        { chatID: -1, text: "[Turn around]", callback: "turnaround1" }
            //    ]
            //},
            //{
            //    chatID: 52,
            //    speaker: "missy",
            //    text: "Today you're going to file",
            //    button: [
            //        { chatID: -1, text: "[File Papers]", callback: "jobFile" }
            //    ]
            //},
            //{
            //    chatID: 53,
            //    speaker: "missy",
            //    text: "Today you're going to work out front with " + sc.n("cecilia") + ". ",
            //    button: [
            //        { chatID: -1, text: "[Work with " + sc.n("cecilia") + "]", callback: "jobComputer" }
            //    ]
            //},
            //{
            //    chatID: 54,
            //    speaker: "missy",
            //    text: "I can't believe you solved the case! It's those damned cultist again! This is just one more case of them " +
            //        "bringing their debauchery outside of their compound. You know the city made a deal with them that if they " +
            //        "left the city and it's people alone they would let them continue to practice their sexual practices in peace. " +
            //        "For your great effort I'm going to reward you. $300 should cover it.",
            //    button: [
            //        { chatID: 55, text: "...", callback: "pantiesReward" }
            //    ]
            //},
            //{
            //    chatID: 55,
            //    speaker: "missy",
            //    text: "This is proof they're branching out into this city. I need you to help stop them. Infiltrating the cult is " +
            //        "going to be hard and dangerous so you're going to start small. I need you to get a pair of panties and start " +
            //        "wearing them everytime you come in.",
            //    button: [
            //        { chatID: 36, text: "Panties?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 56,
            //    speaker: "missy",
            //    text: "So, I want to see you in your new panties. Nothing makes me more excited than a man in a pair of panties. ",
            //    button: [
            //        { chatID: 57, text: "Yes ma'am [Strip down to your panties]", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 57,
            //    speaker: "missy",
            //    text: "Nice Sissy. Those panties make you look good on you, I'm proud you've started realizing who you really are. ",
            //    button: [
            //        { chatID: 58, text: "Yes ma'am", callback: "stripPanties1" }
            //    ]
            //},
            //{
            //    chatID: 58,
            //    speaker: "missy",
            //    text: "Wait right here, I have something for you. ",
            //    button: [
            //        { chatID: 59, text: "Yes ma'am", callback: "stripPanties" }
            //    ]
            //},
            //{
            //    chatID: 59,
            //    speaker: "thinking",
            //    text: "This is so embarrasing standing in in just " + sc.n("lola") + "'s panties in the middle of her office. " +
            //        "I must be a complete idiot to keep following her orders. I hope this is as bad as it gets.",
            //    button: [
            //        { chatID: 60, text: "...", callback: "stripPanties2" }
            //    ]
            //},
            //{
            //    chatID: 60,
            //    speaker: "missy",
            //    text: "You follow orders well slut. Now tell me, do you like what you see?",
            //    button: [
            //        { chatID: 61, text: "Oh what oh, uh... no, it's so big.", callback: "mhate" },
            //        { chatID: 62, text: "Oh yes, so very much", callback: "mlike" }
            //    ]
            //},
            //{
            //    chatID: 61,
            //    speaker: "missy",
            //    text: "Don't worry slut, it may look scary now, but you'll learn to love it.",
            //    button: [
            //        { chatID: 63, text: "Oh no", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 62,
            //    speaker: "missy",
            //    text: "I knew you would. When you walked in I knew you needed this.",
            //    button: [
            //        { chatID: 63, text: "Oh yes mistress", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 63,
            //    speaker: "missy",
            //    text: "Now tell me where did you get these panties?",
            //    button: [
            //        { chatID: 64, text: "Oh, ummm the store", callback: "" },
            //        { chatID: 65, text: "I took them from my " + sc.n("el") + ".", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 64,
            //    speaker: "missy",
            //    text: "Don't lie to me. They don't sell panties at the store with pee stains in them. Now tell me where you really " +
            //    "really got them.",
            //    button: [
            //        { chatID: 65, text: "Sorry mistress, I took them from my " + sc.n("el") + ".", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 65,
            //    speaker: "missy",
            //    text: "What a disgusting pervert you are. It's time I begin your real training. The next time you come here " +
            //    "take the elevator directly to the basement, there we'll give you a proper training. ",
            //    button: [
            //        { chatID: 66, text: "Yes Mistress, I'll report to the basement.", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 66,
            //    speaker: "missy",
            //    text: "Good, now get dresssed and get out of here.",
            //    button: [
            //        { chatID: -1, text: "Yes Mistress.", callback: "end9" }
            //    ]
            //},
            //{
            //    chatID: 67,
            //    speaker: "missy",
            //    text: "Hello " + sc.n("me") + " this is " + sc.n("jeffery") + ". " + sc.n("jeffery") + " has a problem that I think " +
            //        "you can help him with. ",
            //    button: [
            //        { chatID: 68, text: "Hi " + sc.n("jeffery"), callback: "" }
            //    ]
            //},
            //{
            //    chatID: 68,
            //    speaker: "jeffery",
            //    text: "H-H-H-H-H-Hello " + sc.n("me") + " I'm hoping you can h-h-help me with catch the waitress that has been stealing " +
            //        "from me. You'll need to pose as a waitress in my restaurant to gain their trust to try and catch the thief. " +
            //        "Do you think you can do that?",
            //    button: [
            //        { chatID: 69, text: "Of course I can! ", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 69,
            //    speaker: "missy",
            //    text: "As you can see my sissy is well qualified and will fit that part nicely. I have full trust that " +
            //        "he will do well, because if he doesn't he'll find out what a St. Andrew's Cross is used for. ",
            //    button: [
            //        { chatID: 70, text: "I can do it ", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 70,
            //    speaker: "jeffery",
            //    text: "I-I-I-I don't know. She doesn't seem sexy enough to work at my store.",
            //    button: [
            //        { chatID: 71, text: "huh?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 71,
            //    speaker: "missy",
            //    text: "Her sexiest trait is her obedience. Watch this. Sissy strip off your shirt. ",
            //    button: [
            //        { chatID: 72, text: "Yes ma'am", callback: "h28_1" }
            //    ]
            //},
            //{
            //    chatID: 72,
            //    speaker: "jeffery",
            //    text: "Oh my! C-c-c-can she strip off her skirt too?",
            //    button: [
            //        { chatID: 73, text: "*groan*", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 73,
            //    speaker: "missy",
            //    text: "Yes she can. Sissy strip off your skirt.",
            //    button: [
            //        { chatID: 74, text: "Yes ma'am", callback: "h28_2" }
            //    ]
            //},
            //{
            //    chatID: 74,
            //    speaker: "jeffery",
            //    text: "I love it! Tell her to strip of her panties!",
            //    button: [
            //        { chatID: 75, text: "*GROAN* again", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 75,
            //    speaker: "missy",
            //    text: "I'm paying him as an investigator, not a prostitute. If he fails you, you can have his panties. ",
            //    button: [
            //        { chatID: 76, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 76,
            //    speaker: "missy",
            //    text: "Sissy. Get dressed. Tomorrow report to the Naked Beaver Diner and start invistigating the staff to see who and " +
            //        "how they are stealing form " + sc.n("jeffery") + " here. When you're done report back to me.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "h28_3" }
            //    ]
            //},
            //{
            //    chatID: 77,
            //    speaker: "missy",
            //    text: "Oh good Sissy, you're here. Let me call " + sc.n("jeffery") + " here. ",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "callJeffery" }
            //    ]
            //},
            //{
            //    chatID: 78,
            //    speaker: "missy",
            //    text: "So " + sc.n("jeffery") + " how did my little detective do?",
            //    button: [
            //        { chatID: 79, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 79,
            //    speaker: "jeffery",
            //    text: "He did great! Not only did he figure out how they've been stealing from me, but he's a great little " +
            //        "waitress! If you ever need to pick up some extra money you're welcome to work some shifts at the Naked Beaver!",
            //    button: [
            //        { chatID: 80, text: "Thanks mister!", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 80,
            //    speaker: "missy",
            //    text: "I am surprised! I guess you're ready for more responsibility around here. I think a bonus is in order for " +
            //        "all your hard work! I'll grant your $500 for not screwing up. I also have a little reward for you. " +
            //        sc.n("jeffery") + "I'm done with you, you may go now.",
            //    button: [
            //        { chatID: 81, text: "Yes mistress! Thank you mistress. ", callback: "20jeffgo" }
            //    ]
            //},
            //{
            //    chatID: 81,
            //    speaker: "missy",
            //    text: "Sissies need to be rewarded as well and punished. Today sissy you've earned a reward for your work. I will " +
            //        "allow you to eat my ass. I don't often allow a sissy to eat my ass, but I'm so surprised with you I think you " +
            //        "deserve it.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress !!!!", callback: "20eatass" }
            //    ]
            //},
            //{
            //    chatID: 82,
            //    speaker: "missy",
            //    text: "So " + sc.n("jeffery") + " how did my little detective do?",
            //    button: [
            //        { chatID: 83, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 83,
            //    speaker: "jeffery",
            //    text: "He was t-t-t-terrible! Absolutely the worst detective I know. Good waitress though. He's welcome to come back and keep " +
            //        "working anytime he wants... as a waitress, but a terrible detective.",
            //    button: [
            //        { chatID: 84, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 84,
            //    speaker: "missy",
            //    text: "Well " + sc.n("jeffery") + " we don't tolerate failure here. Since he failed you how do you want to see " +
            //        "him punished?",
            //    button: [
            //        { chatID: 85, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 85,
            //    speaker: "jeffery",
            //    text: "I w-w-w-want to see him n-n-n-naked. Can you make him get naked? ",
            //    button: [
            //        { chatID: 86, text: "What?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 86,
            //    speaker: "missy",
            //    text: "Stop. Sissies don't get to say no. Take off your clothes.",
            //    button: [
            //        { chatID: 88, text: "Yes mistress [disrobe]", callback: "disrobe20b" },
            //        { chatID: 87, text: "You can't make me do that!", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 87,
            //    speaker: "missy",
            //    text: "I did not hire you so you could act like a spoiled child and throw a temper tantrum. Now take off your " +
            //        "clothes or you're fired!",
            //    button: [
            //        { chatID: 88, text: "Yes mistress", callback: "disrobe20b" }
            //    ]
            //},
            //{
            //    chatID: 88,
            //    speaker: "jeffery",
            //    text: "uuuhhhh well I think he should also give me his p-p-p-p-panties.  ",
            //    button: [
            //        { chatID: 89, text: "huh?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 89,
            //    speaker: "missy",
            //    text: "I did promise him your panties. Sissy give " + sc.n("jeffery") + " your panties. NOW!",
            //    button: [
            //        { chatID: 90, text: "[Give " + sc.n("jeffery") + " your panties]", callback: "givepanties20" }
            //    ]
            //},
            //{
            //    chatID: 90,
            //    speaker: "jeffery",
            //    text: "ooooOOooooOOhhh yesssss, that's so fresh! I love your scent! Can I keep these.. I'm going to keep these.",
            //    button: [
            //        { chatID: 91, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 91,
            //    speaker: "missy",
            //    text: "Yes " + sc.n("jeffery") + " you can keep them. Now kindly put those in your pocket as we continue.",
            //    button: [
            //        { chatID: 92, text: "...", callback: "pocket20" }
            //    ]
            //},
            //{
            //    chatID: 92,
            //    speaker: "missy",
            //    text: "Now We'll put you on the punishment rack. It's where bad sissies go for punishment. Come over to the rack and " +
            //        "place your arms against the wood.",
            //    button: [
            //        { chatID: 93, text: "...", callback: "rack20" }
            //    ]
            //},
            //{
            //    chatID: 93,
            //    speaker: "jeffery",
            //    text: "ooOOooo can I touch him? I want to touch him.",
            //    button: [
            //        { chatID: 94, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 94,
            //    speaker: "missy",
            //    text: "You can touch him. You can touch him however you want, my little sissy likes to be molested. If you object " +
            //        "my little sissy just say so.",
            //    button: [
            //        { chatID: 95, text: "MMmmmMMmmmmmm", callback: "" },
            //        { chatID: 95, text: "uuuuUUHhhhmmmMMMMMMMM", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 95,
            //    speaker: "missy",
            //    text: "See he wants to be molested, he already moaning like a whore. But not today. Today he's going to work on " +
            //        "being wall decoration. You may go, when he's ready for you I'll let you know, for now I have to get back to work. ",
            //    button: [
            //        { chatID: 96, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 96,
            //    speaker: "jeffery",
            //    text: "ok fine. Bb-b-b-b-b-b-but when he's ready p-p-p-p-please let me know, I'm so excited, do you want to see my " +
            //        "penis, it's so horny right now.",
            //    button: [
            //        { chatID: 97, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 97,
            //    speaker: "missy",
            //    text: "UGH, " + sc.n("jeffery") + " if you pull that thing out I'm going to punch it. Now get out, I have work to do",
            //    button: [
            //        { chatID: 98, text: "...", callback: "jeffleave20" }
            //    ]
            //},
            //{
            //    chatID: 98,
            //    speaker: "missy",
            //    text: "You just stay there while I get some work done around here. ",
            //    button: [
            //        { chatID: 99, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 99,
            //    speaker: "missy",
            //    text: "YYou're lucky I'm only keeping you on the rack. " +
            //        "The next time you make me angry it will be soooo much worse. ",
            //    button: [
            //        { chatID: 100, text: "MMmMMMmm", callback: "20stand" }
            //    ]
            //},
            //{
            //    chatID: 100,
            //    speaker: "missy",
            //    text: "[Continues to work]",
            //    button: [
            //        { chatID: 101, text: "...", callback: "20stand1" }
            //    ]
            //},
            //{
            //    chatID: 101,
            //    speaker: "missy",
            //    text: "[Continues to work]",
            //    button: [
            //        { chatID: 102, text: "...", callback: "20stand2" }
            //    ]
            //},
            //{
            //    chatID: 102,
            //    speaker: "missy",
            //    text: "[Continues to work]",
            //    button: [
            //        { chatID: 103, text: "...", callback: "20stand3" }
            //    ]
            //},
            //{
            //    chatID: 103,
            //    speaker: "missy",
            //    text: "I think you've been up there long enough. Don't fail me again or you're going to regret it!",
            //    button: [
            //        { chatID: 104, text: "Yes mistress", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 104,
            //    speaker: "missy",
            //    text: "Since you're now down a pair of panties, I'll let you have some that have been left over from previous sissies. I'll let you pick one to " +
            //        "take home. ",
            //    button: [
            //        { chatID: -1, text: "Thank you mistress", callback: "20Pick" }
            //    ]
            //},
            //{
            //    chatID: 105,
            //    speaker: "missy",
            //    text: "Oh, so you're a 'cum queen.' I had a feeling you would love to be fucked and filled by big hard cocks in your little mouth and ass. Don't worry " +
            //        "sissy, in time you will be.",
            //    button: [
            //        { chatID: 107, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 106,
            //    speaker: "missy",
            //    text: "How cute. You like the handcuffs you bondage slut. I knew you would be a great victim.",
            //    button: [
            //        { chatID: 107, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 107,
            //    speaker: "missy",
            //    text: "Now take your new panties and go. I'm sick of listening to you breath",
            //    button: [
            //        { chatID: -1, text: "Yes mistress", callback: "20End" }
            //    ]
            //},
            //{
            //    chatID: 108,
            //    speaker: "missy",
            //    text: "Now it's time for your next lesson, learning your place. Strip off your girly clothes.",
            //    button: [
            //        { chatID: 109, text: "Yes mistress [disrobe]", callback: "nude" }
            //    ]
            //},
            //{
            //    chatID: 109,
            //    speaker: "missy",
            //    text: "Now come over and kneel at my feet Sissy.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress ", callback: "g2_furniture" }
            //    ]
            //},
            //{
            //    chatID: 110,
            //    speaker: "missy",
            //    text: "You did a terrible job at being furniture. I'll expect better from you " +
            //        "in the future. Now go.",
            //    button: [
            //        { chatID: -1, text: "Yes mistress ", callback: "g2_furniture_1" }
            //    ]
            //},
            //{
            //    chatID: 111,
            //    speaker: "missy",
            //    text: "I think you are ready to start working some real cases and dirty jobs. When I first took you in, you were just " +
            //        "a pile of undisciplined goo. ",
            //    button: [
            //        { chatID: 112, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 112,
            //    speaker: "missy",
            //    text: "Now finally you've shown yourself to have the discipline it takes to help me against this cities biggest problem, those " +
            //        "damn cultists! They have been a scourge upon this city for far too long, sucking in innocent boys and girls in to their ranks. ",
            //    button: [
            //        { chatID: 113, text: "The cult?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 113,
            //    speaker: "missy",
            //    text: "Yes, surely you've come across them by now. They prey on those without self esteem and suck them in, give them a false " +
            //        "sense of self worth, but only if you follow their leader to the fullest. He pulls them in and devours their individuality; " +
            //        "makes them his servants. That's where you come in.",
            //    button: [
            //        { chatID: 114, text: "Me?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 114,
            //    speaker: "missy",
            //    text: "Yes. There are many of them, and the path to the cult's door is difficult filled with many different challenges. When " +
            //        "you walked in I felt you may just be the one. I needed someone that can move between genders, someone that can both fight and " +
            //        "fuck their way out of a situation. More importantly I need someone that can follow my direction without question. You're the " +
            //        "sissy I need to help take them down.",
            //    button: [
            //        { chatID: 115, text: "I CAN DO IT!!!!", callback: "" },
            //        { chatID: 116, text: "I don't know, it seems kinda hard", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 115,
            //    speaker: "missy",
            //    text: "Slow down. You're no where near ready for the cult. You'll either get sucked in or become a victim of the cult. ",
            //    button: [
            //        { chatID: 117, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 116,
            //    speaker: "missy",
            //    text: "Don't be silly. You're stronger than you think if you just apply yourself. ",
            //    button: [
            //        { chatID: 117, text: "...", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 117,
            //    speaker: "missy",
            //    text: "Deep in the sewers of this city there's a group that calls themselves the Clown Clan. They stole something of mine " +
            //        "that I can use to help prepare you for the long difficult road ahead. I need you to get me that item.",
            //    button: [
            //        { chatID: 118, text: "What is it ma'am?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 118,
            //    speaker: "missy",
            //    text: "I wouldn't want to ruin the surprise; you'll know it when you see it. Now you're not yet ready to take on the " +
            //        "Clown Clan yet. You need to go to the gym and receive training from " + sc.n("g") + ". She will teach you the " +
            //        "basics of fighting. ",
            //    button: [
            //        { chatID: 119, text: "Fighting ma'am?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 119,
            //    speaker: "missy",
            //    text: "Yes. There are many ways to defeat your enemies. I know your true strength is your sissy assets, but you need to " +
            //        "be more than just a fuck-hole if we're going to bring down the cult. If I wanted a whore I would've hired one. " +
            //        " Some enemies can be brought down with your sissy ass, but some " +
            //        "have to be brought down with your fists. ",
            //    button: [
            //        { chatID: 120, text: "Gulp", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 120,
            //    speaker: "missy",
            //    text: "Once you receive your first lesson " + sc.n("g") + " will give you the sewer lid opener. Make your way to the rear of the " +
            //        "sewer and retrieve my item. It will be in a red box. Keep it closed until you return to me. ",
            //    button: [
            //        { chatID: 121, text: "Yes ma'am!", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 121,
            //    speaker: "missy",
            //    text: "To help you out I'll allow you to continue your training once you've returned. ",
            //    button: [
            //        { chatID: 122, text: "Yes why is " + sc.n("cecilia") + " tied up ma'am?", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 122,
            //    speaker: "missy",
            //    text: sc.n("cecilia") + " has been busy spending all her time sucking cock and not enough time working on her " +
            //        "duties. Let " + sc.n("cecilia") + " be a lesson to you. Your duty is to obey, and serve me first, or you will pay for " +
            //        "your discretions",
            //    button: [
            //        { chatID: 123, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 123,
            //    speaker: "missy",
            //    text: "Now go, and get my package. ",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "h_19" }
            //    ]
            //},
            //{
            //    chatID: 124,
            //    speaker: "missy",
            //    text: "So you've brought me my box?",
            //    button: [
            //        { chatID: 125, text: "Yes ma'am", callback: "" }
            //    ]
            //},
            //{
            //    chatID: 125,
            //    speaker: "missy",
            //    text: "Good, leave it on my desk. You're next lesson I'll show you what's in the box. You may go now.",
            //    button: [
            //        { chatID: -1, text: "Yes ma'am", callback: "endRedBox" }
            //    ]
            //},


        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
