//Room name
var room775 = {};
room775.main = function () {
    g.internal = cl.hasoutfit("public");
    if (g.internal === null) {
        nav.bg("775_church/trainride.jpg");
        if (sc.getLevel("priest") === 0) {
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
        case "level1":
            sc.modLevel("priest", 100, 1);
            break;
        case "confession0":
            g.internal = { sincount: 0, counter: 0, n: new Array(), o: new Array() };
            nav.bg("775_church/confession0.jpg");
            var dildoanal = stats.get("masturbate", "dildo");// gv.get("dildoanal");
            var fingeranal = stats.get("masturbate", "finger"); //gv.get("fingeranal");
            var dildooral = stats.get("masturbate", "oral"); //gv.get("dildooral");
            var jackoff = stats.get("masturbate", "dick"); //gv.get("jackoff");

            var temp = sex.getFuck();
            var didthat = gv.get("confession").split(" ");

            if ((temp.anal.take.f.sin + temp.anal.take.m.sin) > 0) {
                if (didthat.includes("anal"))
                    g.internal.o.push({ n: "anal", c: temp.anal.take.f.sin + temp.anal.take.m.sin });
                else
                    g.internal.n.push({ n: "anal", c: temp.anal.take.f.sin + temp.anal.take.m.sin });
            }

            if (temp.anal.give.m.sin > 0)
                if (didthat.includes("fuckedGuy"))
                    g.internal.o.push({ n: "fuckedGuy", c: temp.anal.give.m.sin });
                else
                    g.internal.n.push({ n: "fuckedGuy", c: temp.anal.give.m.sin });

            if ((temp.piss.take.m.sin + temp.piss.take.f.sin + temp.drankpiss.take.f.sin + temp.drankpiss.take.m.sin) > 0)
                if (didthat.includes("piss"))
                    g.internal.o.push({ n: "piss", c: temp.anal.give.m.sin });
                else
                    g.internal.n.push({ n: "piss", c: temp.anal.give.m.sin });

            if (temp.oral.give.m.sin > 0)
                if (didthat.includes("blewGuy"))
                    g.internal.o.push({ n: "blewGuy", c: temp.anal.give.m.sin });
                else
                    g.internal.n.push({ n: "blewGuy", c: temp.anal.give.m.sin });

            if (temp.oral.take.m.sin > 0)
                if (didthat.includes("bjguy"))
                    g.internal.o.push({ n: "bjguy", c: temp.anal.give.m.sin });
                else
                    g.internal.n.push({ n: "bjguy", c: temp.anal.give.m.sin });

            if ((temp.hand.give.m.sin + temp.fist.give.m.sin) > 0)
                if (didthat.includes("jackedGuyOff"))
                    g.internal.o.push({ n: "jackedGuyOff", c: temp.oral.give.f.sin });
                else
                    g.internal.n.push({ n: "jackedGuyOff", c: temp.oral.give.f.sin });

            if (temp.pussy.give.f.sin > 0)
                if (didthat.includes("sexwithgirl"))
                    g.internal.o.push({ n: "sexwithgirl", c: temp.anal.give.m.sin });
                else
                    g.internal.n.push({ n: "sexwithgirl", c: temp.anal.give.m.sin });

            if (temp.oral.take.f.sin > 0)
                if (didthat.includes("bjgirl"))
                    g.internal.o.push({ n: "bjgirl", c: temp.oral.give.f.sin });
                else
                    g.internal.n.push({ n: "bjgirl", c: temp.oral.give.f.sin });

            if (temp.oral.give.f.sin > 0)
                if (didthat.includes("atepussy"))
                    g.internal.o.push({ n: "atepussy", c: temp.oral.give.f.sin });
                else
                    g.internal.n.push({ n: "atepussy", c: temp.oral.give.f.sin });

            if ((temp.hand.give.f.sin + temp.fist.give.f.sin) > 0)
                if (didthat.includes("fingeredChick"))
                    g.internal.o.push({ n: "fingeredChick", c: temp.oral.give.f.sin });
                else
                    g.internal.n.push({ n: "fingeredChick", c: temp.oral.give.f.sin });

            if ((temp.hand.take.f.sin + temp.hand.take.m.sin) > 0)
                if (didthat.includes("gotHandJob"))
                    g.internal.o.push({ n: "gotHandJob", c: temp.oral.give.f.sin });
                else
                    g.internal.n.push({ n: "gotHandJob", c: temp.oral.give.f.sin });

            if (dildoanal > 0 && !didthat.includes("dildoanal"))
                g.internal.n.push({ n: "dildoanal", c: 1 });

            if (dildooral > 0 && !didthat.includes("dildooral"))
                g.internal.n.push({ n: "dildooral", c: 1 });

            if (fingeranal > 0 && !didthat.includes("fingeranal"))
                g.internal.n.push({ n: "fingeranal", c: 1 });

            if (jackoff > 0 && !didthat.includes("jackoff"))
                g.internal.n.push({ n: "jackoff", c: 1 });

            if (g.internal.o.length === 0 && g.internal.n.length === 0)
                g.internal.o.push({ n: "empty", c: 0 });

            

            var priestLevelCon = sc.getLevel("priest");
            if (priestLevelCon === 0)
                chat(17, 775);
            else
                chat(4, 775);
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
            text: "Church update in progress...",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        };
        //return {
        //    chatID: 999,
        //    speaker: "priest",
        //    text: sp[Math.floor(Math.random() * sp.length)],
        //    button: [
        //        { chatID: 0, text: "...", callback: "" }
        //    ]
        //};
    }
    else if (chatID === 998) {
        g.internal = gv.get("money");

        if (g.internal > 100)
            g.internal = 100;
        else if(g.internal < 1)
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
    else if (chatID === 500) {
        var sexchat = null;
        var isNew = false;
        if (g.internal.n.length > 0) {
            sexchat = g.internal.n.pop();
            isNew = true;
        }
        else if(g.internal.o.length > 0)
            sexchat = g.internal.o.pop();
        
        var qq = g.internal.counter > 4
        g.internal.counter++;

        if (sexchat === null) {
            if (g.internal.sincount === 0)
                return room775.chat(8);
            else if (g.internal.sincount < 50)
                return room775.chat(45);
            else if (g.internal.sincount < 100)
                return room775.chat(46);
            else
                return room775.chat(47);
        }
        else {
            switch (sexchat.n) {
                case "anal":
                    g.internal.sincount += 100;
                    if (isNew) {
                        gv.mod("confession", "anal ");
                        sc.modLevel("priest", 150, 7);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I have been anally penetrated by another man's penis. ",
                            button: [
                                { chatID: qq ? 9 : 31, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 50, 7);
                    if (sexchat.c > 1) {
                        sc.modLevel("priest", 30, 7);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I've had " + sexchat.c + " people anally penetrate me. My butt is still sore from all the dick I've taken. ",
                            button: [
                                { chatID: qq ? 9 : 5, text: "...", callback: "" }
                            ]
                        };
                    }
                    else {
                        sc.modLevel("priest", 25, 7);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I had anal sex. ",
                            button: [
                                { chatID: qq ? 9 : 5, text: "...", callback: "" }
                            ]
                        };
                    }
                case "fuckedGuy":
                    g.internal.sincount += 80;
                    if (isNew) {
                        gv.mod("confession", "fuckedGuy ");
                        sc.modLevel("priest", 80, 7);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I put my penis in another man's anus. ",
                            button: [
                                { chatID: qq ? 9 : 30, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 25, 7);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I stuck my penis in another man's butthole. Totally gay sex! ",
                        button: [
                            { chatID: qq ? 9 : 5, text: "...", callback: "" }
                        ]
                    };
                case "piss":
                    g.internal.sincount += 80;
                    if (isNew) {
                        sc.modLevel("priest", 80, 5);
                        gv.mod("confession", "piss ");
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I was peed on by another. ",
                            button: [
                                { chatID: qq ? 9 : 29, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 25, 7);
                    if (chat.c > 1)
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I've been pissed on many times since last we spoke. ",
                            button: [
                                { chatID: qq ? 9 : 6, text: "...", callback: "" }
                            ]
                        };
                    else
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "Someone pissed on me. ",
                            button: [
                                { chatID: qq ? 9 : 6, text: "...", callback: "" }
                            ]
                        };
                case "blewGuy":
                    g.internal.sincount += 60;
                    if (isNew) {
                        sc.modLevel("priest", 100, 7);
                        gv.mod("confession", "blewGuy ");
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I gave a guy a bro-job. You know, when you give a guy you know a friendly blow job. ",
                            button: [
                                { chatID: qq ? 9 : 26, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 20, 7);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I've had " + (sexchat.c > 1 ? "a penis " : "many penises ") + "in my mouth giving blowjobs. ",
                        button: [
                            { chatID: qq ? 9 : 6, text: "...", callback: "" }
                        ]
                    };
                case "bjguy":
                    g.internal.sincount += 60;
                    if (isNew) {
                        gv.mod("confession", "bjguy ");
                        sc.modLevel("priest", 60, 7);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "A guy gave me a blow job. ",
                            button: [
                                { chatID: qq ? 9 : 25, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 15, 7);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "A guy gave me oral sex. ",
                        button: [
                            { chatID: qq ? 9 : 7, text: "...", callback: "" }
                        ]
                    };

                case "jackedGuyOff":
                    g.internal.sincount += 50;
                    if (isNew) {
                        gv.mod("confession", "jackedGuyOff ");
                        sc.modLevel("priest", 50, 7);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I... uh... masturbated with a guy. ",
                            button: [
                                { chatID: qq ? 9 : 24, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 40, 7);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I jacked a guy off ",
                        button: [
                            { chatID: qq ? 9 : 6, text: "...", callback: "" }
                        ]
                    };
                case "sexwithgirl":
                    g.internal.sincount += 50;
                    if (isNew) {
                        gv.mod("confession", "sexwithgirl ");
                        sc.modLevel("priest", 75, 5);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I had sex... with a girl! ",
                            button: [
                                { chatID: qq ? 9 : 23, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 25, 5);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I had sex... With a girl! ",
                        button: [
                            { chatID: qq ? 9 : 7, text: "...", callback: "" }
                        ]
                    };
                case "bjgirl":
                    g.internal.sincount += 30;
                    if (isNew) {
                        gv.mod("confession", "bjgirl ");
                        sc.modLevel("priest", 25, 5);
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "A girl gave me oral sex. It was fantastic! ",
                            button: [
                                { chatID: qq ? 9 : 22, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 5, 5);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "A girl gave me oral sex. ",
                        button: [
                            { chatID: qq ? 9 : 7, text: "...", callback: "" }
                        ]
                    };

                case "atepussy":
                    g.internal.sincount += 30;
                    if (isNew) {
                        sc.modLevel("priest", 25, 5);
                        gv.mod("confession", "atepussy ");
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I admit I performed oral sex on a girl. ",
                            button: [
                                { chatID: qq ? 9 : 21, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 10, 5);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I licked a vagina. ",
                        button: [
                            { chatID: qq ? 9 : 7, text: "...", callback: "" }
                        ]
                    };

                case "fingeredChick":
                    g.internal.sincount += 20;
                    if (isNew) {
                        sc.modLevel("priest", 25, 5);
                        gv.mod("confession", "fingeredChick ");
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I must admit, I've touched a girl's vagina with my fingers. ",
                            button: [
                                { chatID: qq ? 9 : 20, text: "...", callback: "" }
                            ]
                        };

                    }
                    sc.modLevel("priest", 5, 5);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I touched a vagina. ",
                        button: [
                            { chatID: qq ? 9 : 7, text: "...", callback: "" }
                        ]
                    };

                case "gotHandJob":
                    g.internal.sincount += 20;
                    if (isNew) {
                        sc.modLevel("priest", 20, 5);
                        gv.mod("confession", "gotHandJob ");
                        return {
                            chatID: 500,
                            speaker: "me",
                            text: "I have to confess I was jacked off. It felt great, but I know it's wrong. ",
                            button: [
                                { chatID: qq ? 9 : 19, text: "...", callback: "" }
                            ]
                        };
                    }
                    sc.modLevel("priest", 5, 5);
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I was jacked off. ",
                        button: [
                            { chatID: qq ? 9 : 7, text: "...", callback: "" }
                        ]
                    };
                case "jackoff":
                    g.internal.sincount += 10;
                    sc.modLevel("priest", 20, 3);
                    gv.mod("confession", "jackoff ");
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I masturbated to porn. It was a mess. I got cum all over. ",
                        button: [
                            { chatID: qq ? 9 : 40, text: "...", callback: "" }
                        ]
                    };
                case "fingeranal":
                    g.internal.sincount += 10;
                    sc.modLevel("priest", 20, 3);
                    gv.mod("confession", "fingeranal ");
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I inserted my finger into my rectum.  ",
                        button: [
                            { chatID: qq ? 9 : 41, text: "...", callback: "" }
                        ]
                    };
                case "dildooral":
                    g.internal.sincount += 10;
                    sc.modLevel("priest", 20, 3);
                    gv.mod("confession", "dildooral ");
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I sucked on a dildo with my mouth. ",
                        button: [
                            { chatID: qq ? 9 : 42, text: "...", callback: "" }
                        ]
                    };
                case "dildoanal":
                    g.internal.sincount += 20;
                    sc.modLevel("priest", 20, 3);
                    gv.mod("confession", "dildoanal ");
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I inserted a dildo into my anus and had sex with it. ",
                        button: [
                            { chatID: qq ? 9 : 44, text: "...", callback: "" }
                        ]
                    };
                case "empty":
                    return {
                        chatID: 500,
                        speaker: "me",
                        text: "I am free of sin. ",
                        button: [
                            { chatID: qq ? 9 : 8, text: "...", callback: "" }
                        ]
                    };
            }
        }
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
                    "instead we need to bring them in and covert their sinful ways! Lead them into the light of the bible! " ,
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
                    { chatID: 500, text: "...", callback: "level1" }
                ]
            },
            {
                chatID: 19,
                speaker: "priest",
                text: "While this seems innocent, pleasures of the flesh can lead to futher sin. You must learn to control " +
                    "youself while dating, and only after marriage should you partake in such activities. ",
                button: [
                    { chatID: 500, text: "ok. ", callback: "" }
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
                    { chatID: 500, text: "Yes Father.", callback: "" }
                ]
            },
            {
                chatID: 21,
                speaker: "priest",
                text: "A wander tongue comes from the mouth of the devil. Satan uses your mouth to speak lies into the " +
                    "most delicate areas of a young lady. So not only are you walking down the path to hell, but you lead that " +
                    "poor girl along that path with your forked tongue. ",
                button: [
                    { chatID: 500, text: "Yes Father.", callback: "" }
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
                    { chatID: 500, text: "Yes Father.", callback: "" }
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
                    { chatID: 500, text: "Yes Father.", callback: "" }
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
                    { chatID: 500, text: "Yes Father.", callback: "" }
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
                    { chatID: 500, text: "Yes Father.", callback: "" }
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
                    { chatID: 500, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "priest",
                text: "This is very troubling. It's one thing to find pleasures of the flesh with a girl out of wedlock, but " +
                    "to enjoy those same pleasures with a man is the greatest sin. You must seek a life of chastity until you " +
                    "find a monogamous relationship with the right girl. ",
                button: [
                    { chatID: 500, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "priest",
                text: "I can't recall any part of the bible that strickly forbids urinating on another, I would caution you " +
                    "against such practices. To bare the genitals to one who isn't your wife, priest, or doctor is can lead " +
                    "to sins of the flesh. ",
                button: [
                    { chatID: 500, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "priest",
                text: "I know the pressures that one's own penis puts on a young man, I have lived with the same pressures my " +
                    "entire life. You must seek god, and ask him to send you a innocent young wife so that you may use your  " +
                    "penis to create a family. Seek not the pleasures of the flesh, but the life of servitude to god and family. ",
                button: [
                    { chatID: 500, text: "Yes Father. ", callback: "" },
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
                    "could feel the pulses of his cock as he drained his dick into me. ",
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
                    { chatID: 500, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "priest",
                text: "Oh, haha. It is only natural to be curious about one's own body. It's ok to explore as long as you don't " +
                    "take it further. In the future try only to touch your anus when cleaning it. ",
                button: [
                    { chatID: 500, text: "Yes Father. ", callback: "" },
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
                    { chatID: 500, text: "Yes Father. ", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "priest",
                text: "My child, you mustn't treat your anus like a vagina. A man shall not lie with another man and " +
                    "inserting a toy into yourself is a dangrous step in the path to damnation. You must stop abusing yourself " +
                    "if you wish to get into the kingdom of heaven. ",
                button: [
                    { chatID: 500, text: "Yes Father. ", callback: "" },
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
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};
