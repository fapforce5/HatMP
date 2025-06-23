  //Room name
var room775 = {};
room775.main = function () {
    g.internal = cl.hasoutfit("public");
    if (g.internal === null && !cl.wearing().outerwear) {
        g.internal = "respectable clothing"
    }
    if (g.internal === null) {
        nav.bg("775_church/trainride.jpg");
        if (sc.getMission("priest", "confession").notStarted) {
            chat(10, 775);
        }
        else {
            g.roomTimeout = setTimeout(function () {
                nav.bg("775_church/boy.jpg");
                char.settime(9, 0);
                g.internal = 0;
                chat(999, 775);
            }, 1000);
        }
    }
    else {
        nav.bg("10_mainchar/10_bedroom.png");
        if (g.dt.toDateString() === g.startDate.toDateString()) {
            nav.button({
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "7_mainCharRoomAlt/clickHere.png"
            }, 775);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "wardrobe",
                "left": 1684,
                "top": 230,
                "width": 236,
                "height": 602,
                "title": "Wardrobe",
                "image": "10_mainchar/10_wardrobe.png"
            }, 775);
        }
         chat(1000, 775);
    }
    
};

room775.btnclick = function (name) {
    switch (name) {
        case "wardrobe":
            g.pass = 775;
            char.room(8);
            break;
        case "icon_masturbate":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 1);
            chat(50, 775);
            break;
        case "icon_peek":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 2);
            chat(51, 775);
            break;
        case "icon_job":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 3);
            chat(55, 775);
            break;
        case "icon_finger":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 4);
            chat(57, 775);
            break;
        case "icon_dildo":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 5);
            chat(59, 775);
            break;
        case "icon_dildosuck":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 6);
            chat(58, 775);
            break;
        case "icon_penis":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 7);
            chat(60, 775);
            break;
        case "icon_sissyschool":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 8);
            chat(66, 775);
            break;
        case "icon_oral_f":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 9);
            chat(61, 775);
            break;
        case "icon_oral_m":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 10);
            chat(62, 775);
            break;
        case "icon_anal":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 11);
            chat(63, 775);
            break;
        case "icon_beast":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 12);
            chat(64, 775);
            break;
        case "icon_nun":
            nav.kill();
            sc.modLevel("priest", 34);
            sc.completeMissionTask("priest", "confession", 13);
            chat(71, 775);
            break;
        default:
            break;
    }
};

room775.chatcatch = function (callback) {
    switch (callback) {
        case "collection0":
            nav.bg("775_church/basket1.jpg");
            break;
        case "collection1":
            sc.modLevel("landlord", Math.floor(g.internal / 4), 3);
            gv.mod("money", -g.internal);
            nav.bg("775_church/basket2.jpg");
            break;
        case "zoomout":
            nav.bg("775_church/boy.jpg");
            break;
        case "confession1":

            break;
        case "confessionAnal0":
        case "confessionAnal1":
        case "closeup":
            nav.bg("775_church/" + callback + ".jpg");
            break;
        case "confessionAnal2":
            nav.bg("775_church/" + callback + ".jpg");
            zcl.displayMain(200, 600, .15, "clothes", true);
            break;
        case "priestLevelUp":
            sc.modLevel("priest", 50, 999);
            break;
        case "leave":
            nav.killall();
            char.settime(10, 17);
            nav.bg("775_church/trainride.jpg");
            setTimeout(function () {
                char.room(10);
            }, 1200);
            break;
        case "confession0":
            nav.kill();
            nav.bg("775_church/confession0.jpg");
            if (sc.getMission("priest", "confession").notStarted) {
                sc.startMission("priest", "confession");
                sc.show("priest");
                chat(17, 775);
                return;
            }
            let counter = 0;
            var prp = sc.getMission("priest", "confession");
            let sclist;
            for (let i = 0; i < sc.charMission[prp.i].mission[prp.j].task.length; i++) {
                if (sc.charMission[prp.i].mission[prp.j].task[i].mStatus > 0 &&
                    sc.charMission[prp.i].mission[prp.j].task[i].mStatus < 100 && counter < 10) {
                    switch (i) {
                        case 1: sclist = "icon_masturbate"; break;
                        case 2: sclist = "icon_peek"; break;
                        case 3: sclist = "icon_job"; break;
                        case 4: sclist = "icon_finger"; break;
                        case 5: sclist = "icon_dildo"; break;
                        case 6: sclist = "icon_dildosuck"; break;
                        case 7: sclist = "icon_penis"; break;
                        case 8: sclist = "icon_sissyschool"; break;
                        case 9: sclist = "icon_oral_f"; break;
                        case 10: sclist = "icon_oral_m"; break;
                        case 11: sclist = "icon_anal"; break;
                        case 12: sclist = "icon_beast"; break;
                        case 13: sclist = "icon_nun"; break;
                    }
                    sc.select(sclist, "775_church/" + sclist + ".webp", counter);
                    counter++;
                }
            }
            if (counter === 0)
                chat(48, 775);
            break;
        default:
            break;
    }
};

room775.chat = function (chatID) {
    if (chatID === 1000) {
        return {
            chatID: 1000,
            speaker: "thinking",
            text: "Before I go to church I need to get dressed. <span class='hl'>I'm missing my " + g.internal + ".</span>",
            button: []
        };
    }
    if (chatID === 999) {
        var sp = [
            "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
            "Now to him who is able to do immeasurably more than all we ask or imagine, according to his power that is at work within us.",
            "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.",
            "What, then, shall we say in response to these things? If God is for us, who can be against us?",
            "Be strong and courageous. Do not be afraid or terrified because of them, or the Lord your God goes with you; he will never leave you nor forsake you.",
            "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?",
            "There is no fear in love. But perfect love drives out fear, because fear has to do with punishment. The one who fears is not made perfect in love.",
            "When she carried on her prostitution openly and exposed her naked body, I turned away from her in disgust, just as I had turned away from her sister. 19 Yet she became more and more promiscuous as she recalled the days of her youth, when she was a prostitute in Egypt",
            "And I will kill her children with death; and all the churches shall know that I am he which searcheth the reins and hearts: and I will give unto every one of you according to your works.",
            "I do not permit a woman to teach or to have authority over a man; she must be silent.",
            "Now go and strike Amalek and devote to destruction all that they have. Do not spare them, but kill both man and woman, child and infant, ox and sheep, camel and donkey.",
            "Happy is he who repays you for what you have done to us – he who seizes your infants and dashes them against the rocks.",
            "In the same way also the men, giving up natural intercourse with women, were consumed with passion for one another. Men committed shameless acts with men and received in their own persons the due penalty for their error.",
            "Slaves, submit yourselves to your masters with all respect, not only to the good and gentle but also to the cruel.",
            "Come, let us make our father drink wine, and we will lie with him, that we may preserve seed of our father.",
        ];
        return {
            chatID: 999,
            speaker: "priest",
            text: sp[g.rand(0, sp.length)],
            button: [
                { chatID: 0, text: "...", callback: "" }
            ]
        };
    }
    else if (chatID === 998) {
        g.internal = gv.get("money");

        if (g.internal > 100)
            g.internal = 100;
        else if (g.internal < 1)
            g.internal = 0;

        if (g.internal > 0)
            return {
                chatID: 998,
                speaker: "landlord",
                text: "It's important to give what you can, put " + g.internal + " in the basket. ",
                button: [
                    { chatID: 1, text: "*groan*", callback: "collection1" }
                ]
            };
        else
            return {
                chatID: 998,
                speaker: "landlord",
                text: "You really need to save your money to give to the church. I expect you to donate at least $100 " +
                    "when we come here in the future. ",
                button: [
                    { chatID: 2, text: "*groan*", callback: "zoomout" }
                ]
            };

    }

    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "thinking",
                text: "Kill me, I'm so bored! When does it end! Now they're passing the collection plate. ",
                button: [
                    { chatID: 998, text: "...", callback: "collection0" }
                ]
            },
            {
                chatID: 1,
                speaker: "me",
                text: "There goes my money. ",
                button: [
                    { chatID: 2, text: "...", callback: "zoomout" }
                ]
            },
            {
                chatID: 2,
                speaker: "priest",
                text: "You may go in peace. I will be in the confessional for those that need to confess their sins. ",
                button: [
                    { chatID: 3, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "landlord",
                text: "A good follower goes to confession. ",
                button: [
                    { chatID: -1, text: "*groan* ok", callback: "confession0" }
                ]
            },
            {
                chatID: 4,
                speaker: "priest",
                text: "Welcome my " + gender.pronoun("son") + ". Share with me your confession. ",
                button: [
                    { chatID: 500, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "priest",
                text: "Anal sex is clearly against the good book. You are a sinner. ",
                button: [
                    { chatID: 500, text: "I totally am. ", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "priest",
                text: "It's a sin to take part in something sexually gratifing, even if it's gross.",
                button: [
                    { chatID: 500, text: "I totally am. ", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "priest",
                text: "Pleasures of the flesh are a sin. Even if it's enjoyable. ",
                button: [
                    { chatID: 500, text: "I totally am. ", callback: "" }
                ]
            },
            {
                chatID: 8,
                speaker: "priest",
                text: "I am proud of you " + gender.pronoun("boy") + ". You may go in peace. ",
                button: [
                    { chatID: -1, text: "Thank you. ", callback: "leave" }
                ]
            },
            {
                chatID: 9,
                speaker: "priest",
                text: "I can't hear anymore! You are a sinner.  ",
                button: [
                    { chatID: -1, text: "Thank you. ", callback: "leave" }
                ]
            },
            {
                chatID: 10,
                speaker: "landlord",
                text: "I hate traveling on this train. Sunday morning it's fine, but there so many things that happen here at night. " +
                    "You're a man, so you don't know how scary it is here. Speaking of girls,  " +
                    "there's lots of single girls at the church. Maybe you can find yourself a nice young lady. ",
                button: [
                    { chatID: 11, text: sc.n("landlord") + "... ", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "Don't whine to me. It's going to be harder for you to meet a nice girl now that you're no longer in school. " +
                    "These days the only places you'll find them are in school or church, so that's why you're going to church. " +
                    "Now I won't hear nothing more on this in public. You're going to settle down and make something of yourself. " +
                    "I won't let you be a delinquent all your life. ",
                button: [
                    { chatID: 12, text: "ok. ", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "landlord",
                text: "Now we're almost there. Don't fall asleep in church and all three of you be on your best behavior. ",
                button: [
                    { chatID: 13, text: "ok. ", callback: "zoomout" }
                ]
            },
            {
                chatID: 13,
                speaker: "priest",
                text: "Welcome all, I see many familiar faces, and some new faces. For those that are new here I'm " + sc.n("priest") +
                    " and I'm really excited to tell you about our lord and savior! Lend me your ears. ",
                button: [
                    { chatID: 14, text: "...", callback: "closeup" }
                ]
            },
            {
                chatID: 14,
                speaker: "priest",
                text: "We have joined here brothers and sisters in Christ to address the issue of biblical sexual morality " +
                    "on this particular Sunday. For example, Leviticus 18:22 states that You shall not lie with a male as with " +
                    "a woman; it is an abomination.' This passage has been used to argue that transgender people are sinful " +
                    "and that they should be excluded from the church. We should not exclude them and turn them away from christ, " +
                    "instead we need to bring them in and covert their sinful ways! Lead them into the light of the bible! ",
                button: [
                    { chatID: 15, text: "...", callback: "zoomout" }
                ]
            },
            {
                chatID: 15,
                speaker: "thinking",
                text: "Bla bla bla bla bla... I'm so bored. I can't wait for this to end. I don't know why I allow " + sc.n("landlord") +
                    " to keep dragging me to this place. At least it's only once a week. ",
                button: [
                    { chatID: 16, text: "...", callback: "" }
                ]
            },
            {
                chatID: 16,
                speaker: "thinking",
                text: "Oh look. Here comes the collection plate. Not only is it boring, but they want money too. I hope she " +
                    "doens't make me donate. It's not like I'm rich enough to give this guy money. Shit, she's looking at me " +
                    "like she's going to make me donate. Fuck. ",
                button: [
                    { chatID: 998, text: "...", callback: "collection0" }
                ]
            },
            {
                chatID: 17,
                speaker: "priest",
                text: "If it isn't little " + sc.n("me") + ". It's nice to see you back in the church. It's been so long since I've " +
                    "seen you in my booth. Still teasing your " + sc.n("el") + "? I remember you when you were just a small baby when " +
                    "I first started preaching here. Right after church I asked to hold you and you threw up all over my robes. You " +
                    "were such a cute kid that grew into a handsome man. I'll bet you can't keep the young ladies away. ",
                button: [
                    { chatID: 18, text: "..Well I...", callback: "" }
                ]
            },
            {
                chatID: 18,
                speaker: "priest",
                text: "I know. A young man needs to be careful out there. You don't want to spoil your trip to heaven by partaking in " +
                    "pleasures of the flesh. I know you'll do what's right. So tell be all your sins so I may absolve you. ",
                button: [
                    { chatID: 49, text: "I've been a good boy. I don't have anything to confess. ", callback: "" }
                ]
            },
            {
                chatID: 19,
                speaker: "priest",
                text: "While this seems innocent, pleasures of the flesh can lead to futher sin. You must learn to control " +
                    "youself while dating, and only after marriage should you partake in such activities. ",
                button: [
                    { chatID: 49, text: "ok. ", callback: "" }
                ]
            },
            {
                chatID: 20,
                speaker: "priest",
                text: "Oh to be young again. While I'm sure in both your minds it was just a massage with a bit of extra fun, " +
                    "touching or rubbing a girl's vagina can lead down the road to sin. To be a good person you must not take " +
                    "advantage of the poor innocent young ladies. They are the weaker sex and they can freeze in fear of your " +
                    "wandering hands. ",
                button: [
                    { chatID: 49, text: "Yes Father.", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "priest",
                text: "A wander tongue comes from the mouth of the devil. Satan uses your mouth to speak lies into the " +
                    "most delicate areas of a young lady. So not only are you walking down the path to hell, but you lead that " +
                    "poor girl along that path with your forked tongue. ",
                button: [
                    { chatID: 49, text: "Yes Father.", callback: "" }
                ]
            },
            {
                chatID: 22,
                speaker: "priest",
                text: "You have filled that poor girls belly with the seeds of sin. God has given you seeds to plant a new " +
                    "family into your bride, but you have chosen to spill them into that innocent lady. Not only have you sinned, " +
                    "but you have planted the seeds of sin in another. You two should practice wholesome dating in public to fend " +
                    "away temptations of the flesh. ",
                button: [
                    { chatID: 49, text: "Yes Father.", callback: "" }
                ]
            },
            {
                chatID: 23,
                speaker: "priest",
                text: "Oh my, this is quite toubling. To lay with a woman as a wife takes commitment, and since I know you " +
                    "I haven't married you, I know you aren't ready for this. While you have sinned, it is not too late to turn " +
                    "from this sinful path. When you lie with a girl who is not your wife you are forcing her from the path " +
                    "of holiness and purity. Consent is important and girls are weak in the ways of men. For both of your " +
                    "sakes, you must turn from this path or you will forever wander in the fires of sin. ",
                button: [
                    { chatID: 49, text: "Yes Father.", callback: "" }
                ]
            },
            {
                chatID: 24,
                speaker: "priest",
                text: "This is clearly a sin, but a more common sin than you may think. I've had many in here that in moments of " +
                    "lust they explore a close friend. But you must refrain. Walking this path leads to greater and more absolute " +
                    "sins. Never be alone with your male friends. Hang out with them in public where sins can not happen. Once " +
                    "you settle down and marry a nice girl, all this will be forgotten. ",
                button: [
                    { chatID: 49, text: "Yes Father.", callback: "" }
                ]
            },
            {
                chatID: 25,
                speaker: "priest",
                text: "I know you must get so horny you can't control yourself, and you think that getting a friendly blow job " +
                    "is not a big deal, but IT IS! You must never place you penis in another man's mouth. You need to find a nice " +
                    "proper young lady to show you the way of a proper relationship. Refrain from your sexual deviance and find " +
                    "a nice wholesome girl to show you how to live a proper life. There are many in this church and the community, " +
                    "you need to better yourself and find her. ",
                button: [
                    { chatID: 49, text: "Yes Father.", callback: "" }
                ]
            },
            {
                chatID: 26,
                speaker: "priest",
                text: "Oh my, this is quite troubling. A man should never receive a penis into their mouth as though they were " +
                    "a girl. Tell me, did you enjoy this penis in your mouth? ",
                button: [
                    { chatID: 28, text: "Yes Father, I did. ", callback: "priestLevelUp" },
                    { chatID: 27, text: "No Father, I did not enjoy it. ", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "priest",
                text: "Well that's a relief. This is the first step on the road to salvation. You must live a life of chastity until " +
                    "your marriage vows are complete in the church. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "priest",
                text: "This is very troubling. It's one thing to find pleasures of the flesh with a girl out of wedlock, but " +
                    "to enjoy those same pleasures with a man is the greatest sin. You must seek a life of chastity until you " +
                    "find a monogamous relationship with the right girl. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "priest",
                text: "I can't recall any part of the bible that strickly forbids urinating on another, I would caution you " +
                    "against such practices. To bare the genitals to one who isn't your wife, priest, or doctor is can lead " +
                    "to sins of the flesh. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "priest",
                text: "I know the pressures that one's own penis puts on a young man, I have lived with the same pressures my " +
                    "entire life. You must seek god, and ask him to send you a innocent young wife so that you may use your  " +
                    "penis to create a family. Seek not the pleasures of the flesh, but the life of servitude to god and family. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "priest",
                text: "This is the greatest sin one can partake in. Tell me son, did you enjoy it? ",
                button: [
                    { chatID: 32, text: "Yes Father. ", callback: "confessionAnal0" },
                    { chatID: 27, text: "No Father. ", callback: "" },
                ]
            },
            {
                chatID: 32,
                speaker: "priest",
                text: "That is so sinful! Tell me about your experience so I may absolve you from your sinful ways. ",
                button: [
                    { chatID: 33, text: "...", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "me",
                text: "Well, I was a little scared at first. I thought it would just slide it, but it was a little painful at " +
                    "first. I had to just try to tell myself to relax, breathe, and wait for my anus to loosen up. I knew " +
                    "it would feel good if I can just relax and try to enjoy the pain for a bit. ",
                button: [
                    { chatID: 34, text: "...", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "priest",
                text: "Oh yes! Relax... Tell me more of your wicked desires. ",
                button: [
                    { chatID: 35, text: "...", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "me",
                text: "Well, then he grabbed me by my hips and really started to pound my poor virgin anus. It was good though, " +
                    "since my butthole was loosing up and his dick was angled just enough down to push into my prostate. " +
                    "Also they never really tell you how good it feels on the lips of your anus, the rubbing back and forth. ",
                button: [
                    { chatID: 36, text: "...", callback: "" }, //add cum shot
                ]
            },
            {
                chatID: 36,
                speaker: "priest",
                text: "Well! Did he cum or what? ",
                button: [
                    { chatID: 37, text: "...", callback: "" }, //add cum shot
                ]
            },
            {
                chatID: 37,
                speaker: "me",
                text: "Oh yes. I could feel him pick up speed and really start fucking me. You know that hard focued fucking. " +
                    "Then he pulled my hips back and thrust forward into me getting his dick as deep into me as he could. I " +
                    "could feel the pulses of his cock as he drained his cum inside me. ",
                button: [
                    { chatID: 38, text: "...", callback: "confessionAnal1" }, //add cum shot
                ]
            },
            {
                chatID: 38,
                speaker: "priest",
                text: "That is... uhh.... terrible sin. You are forgiven. Go now in peace. Also close this confessional booth, I " +
                    "uh.. have other matters to attend to. Thank you. ",
                button: [
                    { chatID: 39, text: "Oh, ok. ", callback: "confessionAnal2" },
                ]
            },
            {
                chatID: 39,
                speaker: "thinking",
                text: "That was odd. I'm pretty sure that priest just masturbated and came all over the booth. Does he want " +
                    "to fuck me? No. Can't be that. He's a priest. I'm sure it's just stress or something. ",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
            {
                chatID: 40,
                speaker: "priest",
                text: "If every young man that masturbated went to hell, heaven would be populated only by the weaker sex. " +
                    "You need to not spill your seed in tissue, but in another young lady. Find a wife and spill your seed " +
                    "into her so she may raise your children. A woman's purpose is to raise children, and man's is to pollinate " +
                    "her so she may fulfil her purpose. Plant your seeds, son, don't waste them. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "priest",
                text: "Oh, haha. It is only natural to be curious about one's own body. It's ok to explore as long as you don't " +
                    "take it further. In the future try only to touch your anus when cleaning it. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 42,
                speaker: "priest",
                text: "You sucked on a dildo? To what ends would come of that?  ",
                button: [
                    { chatID: 43, text: "I wanted to practice giving blow jobs. ", callback: "" },
                ]
            },
            {
                chatID: 43,
                speaker: "priest",
                text: "While the male penis may fit into a mouth, the penis and the mouth were not designed by god's plan " +
                    "to meet. The penis is designed to create children, not as a lolly. For your own sanity, refrain from " +
                    "putting fake penises in your mouth. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "priest",
                text: "My child, you mustn't treat your anus like a vagina. A man shall not lie with another man and " +
                    "inserting a toy into yourself is a dangrous step in the path to damnation. You must stop abusing yourself " +
                    "if you wish to get into the kingdom of heaven. ",
                button: [
                    { chatID: 49, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 45,
                speaker: "priest",
                text: "While you have sinned, there is nothing that a normal " + gender.pronoun("boy") + " wouldn't do. " +
                    "Reflect on your actions and go in peace. ",
                button: [
                    { chatID: -1, text: "Yes Father. ", callback: "leave" },
                ]
            },
            {
                chatID: 46,
                speaker: "priest",
                text: "You need to change your ways or this sins of the flesh shall overcome you. Reflect on your actions and " +
                    "find change within yourself. ",
                button: [
                    { chatID: -1, text: "Yes Father. ", callback: "leave" },
                ]
            },
            {
                chatID: 47,
                speaker: "priest",
                text: "Your desires of the flesh shall destroy you. It is not too late to take a vow of celibacy and save your " +
                    "soul if it's not already too late. Change your ways or dark will be the path you walk. ",
                button: [
                    { chatID: -1, text: "Yes Father. ", callback: "leave" },
                ]
            },
            {
                chatID: 48,
                speaker: "me",
                text: "I have nothing new to confess. ",
                button: [
                    { chatID: 49, text: "...", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "priest",
                text: "Very well. You may go in peace. Spread love to your fellow man. ",
                button: [
                    { chatID: -1, text: "...", callback: "leave" },
                ]
            },
            {
                chatID: 50,
                speaker: "me",
                text: "I masturbated to porn. It was a mess. I got cum all over. ",
                button: [
                    { chatID: 40, text: "...", callback: "" }
                ]
            },
            {
                chatID: 51,
                speaker: "me",
                text: "I peeked on my " + sc.n("el") + " while they were taking a shower. ",
                button: [
                    { chatID: 52, text: "...", callback: "" }
                ]
            },
            {
                chatID: 52,
                speaker: "priest",
                text: "That is quite troubling. Lusting after a nude girl is a sin, but lusting after your own " + sc.n("el") +
                    " is truly sickening. Why did you do this? ",
                button: [
                    { chatID: 53, text: "I was curious about their bodies. ", callback: "" },
                    { chatID: 54, text: "I really really want to have sex with them!", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "priest",
                text: "Oh. hahaha. In that case, it is normal to be curious about the opposit sex. But you must refrain from " +
                    "lusting after those so close to you. Go outside your own house and find members of the opposit sex to " +
                    "learn about their mind and sould before you start lusting after their body.",
                button: [
                    { chatID: 49, text: "Oh hehe ok.", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "priest",
                text: "Oh no. You must refrain from such evil thoughts. As the good word states, you shall not " +
                    "indulge in familiarities with relatives, such as kissing, embracing, winking, peeping, " +
                    "which may lead to incest. Go think on the evils of your sin and learn to control these  " +
                    "lustftul thought. ",
                button: [
                    { chatID: 49, text: "I will", callback: "" },
                ]
            },
            {
                chatID: 55,
                speaker: "me",
                text: "I started a new job, but my boss, Missy, seems... a little different. She asked me some " +
                    "very personal questions about my sexuality. It made me feel very uncomfortable.",
                button: [
                    { chatID: 56, text: "...", callback: "" },
                ]
            },
            {
                chatID: 56,
                speaker: "priest",
                text: "Hmmm.... I know a young man, like yourself, needs employment for idle hands are the devils " +
                    "plaything. You know what's right and what's wrong. If you find yourself doing the wrong things " +
                    "then you have the choice. A sin is committed when you make the wrong choice. You must have the  " +
                    "moral fortitude to do the right thing if you feel this job is taking your down the dark path. ",
                button: [
                    { chatID: 49, text: "I will make the right choice when if it comes.", callback: "" },
                ]
            },
            {
                chatID: 57,
                speaker: "me",
                text: "I inserted my finger into my rectum.  ",
                button: [
                    { chatID: 41, text: "...", callback: "" }
                ]
            },
            {
                chatID: 58,
                speaker: "me",
                text: "I sucked on a dildo with my mouth. ",
                button: [
                    { chatID: 42, text: "...", callback: "" }
                ]
            },
            {
                chatID: 59,
                speaker: "me",
                text: "I inserted a dildo into my anus and had sex with it. ",
                button: [
                    { chatID: 44, text: "...", callback: "" }
                ]
            },
            {
                chatID: 60,
                speaker: "me",
                text: "I had sex... with a girl! ",
                button: [
                    { chatID: 23, text: "...", callback: "" }
                ]
            },
            {
                chatID: 61,
                speaker: "me",
                text: "I admit I performed oral sex on a girl. ",
                button: [
                    { chatID: 21, text: "...", callback: "" }
                ]
            },
            {
                chatID: 62,
                speaker: "me",
                text: "I gave a guy a bro-job. You know, when you give a guy you know a friendly blow job. ",
                button: [
                    { chatID: 26, text: "...", callback: "" }
                ]
            },
            {
                chatID: 63,
                speaker: "me",
                text: "I have been anally penetrated by another man's penis. ",
                button: [
                    { chatID: 31, text: "...", callback: "" }
                ]
            },
            {
                chatID: 64,
                speaker: "me",
                text: "I bent over so a beast may anally penetrate me. ",
                button: [
                    { chatID: 65, text: "...", callback: "" }
                ]
            },
            {
                chatID: 65,
                speaker: "priest",
                text: "What? Gross. No. So gross. I don't know what to say. You disgust me. Get out of here so I may " +
                    "take confessions from someone that may actually make it to heaven.",
                button: [
                    { chatID: -1, text: "Yes father.", callback: "leave" }
                ]
            },
            {
                chatID: 66,
                speaker: "me",
                text: "Recently I have joined a school for sissies. ",
                button: [
                    { chatID: 67, text: "...", callback: "" }
                ]
            },
            {
                chatID: 67,
                speaker: "priest",
                text: "A school for sissies? I'm not familiar with this. Please tell me more. ",
                button: [
                    { chatID: 68, text: "I learn how to be a girl", callback: "" },
                    { chatID: 68, text: "I learn to be a slutty femboy", callback: "" },
                    { chatID: 68, text: "I become a hole for all the cocks!", callback: "" },
                ]
            },
            {
                chatID: 68,
                speaker: "priest",
                text: "This is most troubling. Do you enjoy this school? ",
                button: [
                    { chatID: 69, text: "I feel pressured to take the course", callback: "" },
                    { chatID: 70, text: "I love it so very very much!", callback: "" },
                ]
            },
            {
                chatID: 69,
                speaker: "priest",
                text: "That is a relief. Pressured into sin does not absolve you from commiting the sin. The role of " +
                    "a man is sacred. A man shall not take the role of a woman, for it is an affront to God. " +
                    "even under pressure, you find find your strength and save yourself from this horrid school.",
                button: [
                    { chatID: 49, text: "Yes father", callback: "" },
                ]
            },
            {
                chatID: 70,
                speaker: "priest",
                text: "Oh my. You must save yourself before you're so deep in sin that's it's too late. The role of " +
                    "a man is sacred. A man shall not take the role of a woman, for it is an affront to God. " +
                    "even under pressure, you find find your strength and save yourself from this horrid school.",
                button: [
                    { chatID: 49, text: "Yes father", callback: "" },
                ]
            },
            {
                chatID: 71,
                speaker: "me",
                text: "I must confess. I've been corrupted by " + sc.n("nun") + ". It started innocent enough, but you could " +
                    "say I've met her in the biblical way. ",
                button: [
                    { chatID: 72, text: "...", callback: "" },
                ]
            },
            {
                chatID: 72,
                speaker: "priest",
                text: "That is quite troublesome. Sister Mary has always had her rough edges, but I would never thought " +
                    "she would corrupt a promising youth like yourself. This is not your doing, but hers. Have no worries, " +
                    "the church will help her find the path lost to her. Thank you for your honesty in such a delicate matter. ",
                button: [
                    { chatID: 49, text: "...", callback: "" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
