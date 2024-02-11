//Room name
var room300 = {};
room300.main = function () {
    g.internal = null;
    //var envyStepMeet = sc.taskGetStep("envy", "meet");// sc.getstep("envy");
    var hypnoStep = sc.taskGetStep("envy", "hypno");
    if (sc.getMission("envy", "meet").notStarted) {
        nav.bg("300_apartment/fight.jpg");
        chat(4, 300);
    }
    else if (hypnoStep === 9 || hypnoStep === 10) {
        nav.button({
                "type": "btn",
                "name": "door",
                "left": 930,
                "top": 501,
                "width": 231,
                "height": 267,
                "image": "300_apartment/door14.png"
            }, 300);
    }
    //else if (sc.getMission("envy", "gf").inProgress) {
    //    var gfStep = sc.taskGetStep("envy", "gf");
    //    switch (sc.taskGetStep("envy", "gf")) {
    //        case 0: chat()
    //    }
    //}
    //else if (envyStep > 15 && envyStep < 100) {
    //    nav.button({
    //        "type": "btn",
    //        "name": "door",
    //        "left": 921,
    //        "top": 494,
    //        "width": 132,
    //        "height": 236,
    //        "image": "300_apartment/door16.png"
    //    }, 300);
    //    nav.button({
    //        "type": "btn",
    //        "name": "stairs",
    //        "left": 1350,
    //        "top": 396,
    //        "width": 78,
    //        "height": 407,
    //        "title": "Go to the second floor. ",
    //        "image": "300_apartment/stairs1.png"
    //    }, 300);
    //}
    //else if (envyStep === 14 || envyStep === 15) {
    //    if (g.isNight()) {
    //        nav.button({
    //            "type": "btn",
    //            "name": "door",
    //            "left": 921,
    //            "top": 494,
    //            "width": 132,
    //            "height": 236,
    //            "title": "Visit Envy ",
    //            "image": "300_apartment/door.png"
    //        }, 300);
    //    }
        
    //    else {
    //        nav.button({
    //            "type": "btn",
    //            "name": "door",
    //            "left": 930,
    //            "top": 501,
    //            "width": 231,
    //            "height": 267,
    //            "image": "300_apartment/door14.png"
    //        }, 300);
    //    }
        
    //    nav.button({
    //        "type": "btn",
    //        "name": "stairs",
    //        "left": 1350,
    //        "top": 396,
    //        "width": 78,
    //        "height": 407,
    //        "title": "Go to the second floor. ",
    //        "image": "300_apartment/stairs1.png"
    //    }, 300);
    //}
    //else if (envyStep === 100) {
    //    chat(25, 300);
    //    nav.button({
    //        "type": "btn",
    //        "name": "stairs",
    //        "left": 1350,
    //        "top": 396,
    //        "width": 78,
    //        "height": 407,
    //        "title": "Go to the second floor. ",
    //        "image": "300_apartment/stairs1.png"
    //    }, 300);
    //}
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "door",
                "left": 921,
                "top": 494,
                "width": 132,
                "height": 236,
                "title": "Visit Envy ",
                "image": "300_apartment/door.png"
            },
            {
                "type": "btn",
                "name": "stairs",
                "left": 1350,
                "top": 396,
                "width": 78,
                "height": 407,
                "title": "Go to the second floor. ",
                "image": "300_apartment/stairs1.png"
            }
        ];
        if (g.isNight()) {
            btnList.push({
                "type": "btn",
                "name": "slut",
                "left": 287,
                "top": 431,
                "width": 107,
                "height": 388,
                "image": "300_apartment/slut.png"
            });
        }
        
        $.each(btnList, function (i, v) {
            nav.button(v, 300);
        });
    }
    var navListx = [315, 303, 0];
    nav.buildnav(navListx);
};

room300.btnclick = function (name) {
    switch (name) {
        case "slut":
            chat(0, 300);
            break;
        case "door":
            
            if (daily.get("envy")) {
                chat(2, 300);
            }
            else if (g.isNight()) {
                chat(1, 300);
            }
            else if (sc.getMission("envy", "meet").inProgress) {
                var envystep = sc.taskGetStep("envy", "meet");
                if (envystep === 0) {
                    nav.killall();
                    nav.bg("300_apartment/frontdoor.jpg");
                    chat(13, 300);
                }
                else if (envystep === 2) {
                    if (inv.has("pizza"))
                        char.room(301);
                    else
                        chat(21, 300);
                }
                else {
                    nav.kill();
                    nav.bg("300_apartment/knock0.jpg");
                    chat(3, 300);
                }
            }
            else if (sc.getMission("envy", "hypno").inProgress) {
                var hypnostep = sc.taskGetStep("envy", "hypno");
                if (hypnostep < 9) {
                    nav.kill();
                    switch (sc.taskGetStep("envy", "hypno")) {
                        case 0: nav.bg("300_apartment/knock0.jpg"); chat(3, 300); break;
                        case 1: nav.bg("300_apartment/knock0.jpg"); chat(3, 300); break;
                        case 2: nav.bg("300_apartment/knock7.jpg"); chat(3, 300); break;
                        case 3: nav.bg("300_apartment/knock8.jpg"); chat(3, 300); break;
                        case 4: case 5: nav.bg("300_apartment/knock9.jpg"); chat(3, 300); break;
                        case 6: case 7: nav.bg("300_apartment/knock11.jpg"); chat(3, 300); break;
                        case 8: nav.bg("300_apartment/knock13.jpg"); chat(22, 300); break;
                    }

                }
                else {
                    char.room(301);
                }
            }
            else if (sc.getMission("envy", "gf").inProgress) {
                var gfStep = sc.taskGetStep("envy", "gf");
                if (gfStep === 0)
                    chat(25, 300);
                else if (gfStep === 2)
                    chat(27, 300);
                else if (gfStep === 3)
                    chat(45, 300);
                else if (gfStep === 5) {
                    nav.killall();
                    nav.bg("300_apartment/knock13.jpg");
                    chat(22, 300);
                }
                else {
                    nav.kill();
                    nav.bg("300_apartment/knock0.jpg");
                    chat(3, 300);
                }
            }
            //else if (envystep > 15) {
            //    chat(24, 300);
            //}
            //else {
            //    if (envystep === 13) {
            //        nav.killall();
            //        nav.bg("300_apartment/knock13.jpg");
            //        chat(22, 300);
            //    }
            //    else if (envystep === 14 || envystep === 15) {
            //        chat(23, 300);
            //    }
            //    else {
            //        nav.killall();
            //        if (envystep < 7)
            //            nav.bg("300_apartment/knock0.jpg");
            //        else if (envystep === 7)
            //            nav.bg("300_apartment/knock7.jpg");
            //        else if (envystep === 8)
            //            nav.bg("300_apartment/knock8.jpg");
            //        else if (envystep === 9)
            //            nav.bg("300_apartment/knock9.jpg");
            //        else if (envystep === 10)
            //            nav.bg("300_apartment/knock9.jpg");
            //        else if (envystep === 11)
            //            nav.bg("300_apartment/knock11.jpg");
            //        else if (envystep === 12)
            //            nav.bg("300_apartment/knock11.jpg");
            //        chat(3, 300);
            //    }
            //}
            break;
        case "stairs":
            chat(26, 300);
            break;
        case "wait":
            var randEvent = true;
            switch (g.internal.step) {
                case 0:
                    nav.bg("300_apartment/bg.jpg");
                    char.settime(19, 0);
                    randEvent = false;
                    break;
                case 1:
                    nav.bg("300_apartment/wait_envy0.jpg");
                    char.settime(22, 0);
                    chat(31, 300);
                    randEvent = false;
                    break;
                case 10:
                    nav.bg("300_apartment/wait_envy1.jpg");
                    nav.killbutton("me");
                    nav.button({
                        "type": "img",
                        "name": "me",
                        "left": 712,
                        "top": 690,
                        "width": 221,
                        "height": 100,
                        "image": "300_apartment/sleepb_" + gender.pronoun("f") + ".png"
                    }, 300);
                    char.newdayfake();
                    char.settime(3, 27);
                    randEvent = false;
                    break;
                case 29:
                    nav.bg("300_apartment/wait_envy2.jpg");
                    chat(33, 300);
                    randEvent = false;
                    break;
            }
            if (randEvent) {
                if (g.internal.step % 4 === 2) {
                    nav.killbutton("me");
                    nav.button({
                        "type": "img",
                        "name": "me",
                        "left": 712,
                        "top": 665,
                        "width": 221,
                        "height": 100,
                        "image": "300_apartment/sleep" + (g.internal.step > 11 ? "b" : "") + "_" + gender.pronoun("f") + ".png"
                    }, 300);
                    nav.bg("300_apartment/bg.jpg");
                    char.newdayfake();
                    char.settime(3, 27);
                }
                else if (g.internal.step % 4 === 3) {
                    nav.killbutton("me");
                    nav.button({
                        "type": "img",
                        "name": "me",
                        "left": 835,
                        "top": 621,
                        "width": 85,
                        "height": 117,
                        "image": "300_apartment/sit_" + gender.pronoun("f") + ".png"
                    }, 300);
                    char.settime(8, 13);
                }
                nav.bg("300_apartment/wait_" + (g.internal.loop % 11) + ".jpg");
                g.internal.loop++;
            }
            g.internal.step++;
            break;
        default:
            break;
    }
};

room300.chatcatch = function (callback) {
    switch (callback) {
        case "bg":
            nav.bg("300_apartment/bg.jpg");
            break;
        case "reset":
            char.room(300);
            break;
        case "leave":
            char.room(0);
            break;
        case "fight1":
            nav.bg("300_apartment/fight1.jpg");
            break;
        case "fightend":
            sc.startMission("envy", "meet");
            sc.show("envy");
            daily.set("envy");
            char.addtime(30);
            char.room(300);
            break;
        case "firstMeetEnd":
            sc.completeMissionTask("envy", "meet", 0);
            daily.set("envy");
            char.addtime(60);
            char.room(300);
            break;
        case "enter":
            g.pass = null;
            char.room(301);
            break;
        case "315":
            char.room(315);
            break;
        case "303":
            char.room(303);
            break;
        case "envyUp":
            sc.modLevel("envy", 25, 10);
            break;
        case "wait":
            nav.killall();
            g.internal = { step: 0, loop: 1 };
            nav.button({
                "type": "img",
                "name": "me",
                "left": 835,
                "top": 621,
                "width": 85,
                "height": 117,
                "image": "300_apartment/sit_" + gender.pronoun("f") + ".png"
            }, 300);
            nav.wait("wait");
            break;
        case "backin_0":
            nav.killall();
            nav.bg("300_apartment/wait_envy3.jpg");
            break;
        case "backin_1":
            char.addtime(30);
            sc.completeMissionTask("envy", "gf", 2);
            char.room(0);
            break;
        default:
            break;
    }
};

room300.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Pump my shitbox full of cum. Pull out, force your filthy, ass juice drenched cock between " +
                "my pink princess lips, and force it, balls deep, to the back of my hungry throat.",
            button: [
                { chatID: 30, text: "Fuck yeah!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "It's pretty late. Maybe she's asleep ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I already came by today. Don't want her to think I'm a weird stalker. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "envy",
            text: "Hey " + sc.n("me") + " do you want to come in? ",
            button: [
                { chatID: -1, text: "Yeah, I do", callback: "enter" },
                { chatID: -1, text: "Oh, no", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "kei",
            text: "...I don't feel like going to your place. Why should I? This place is filthy and you never put out!",
            button: [
                { chatID: 5, text: "Oh wow it looks like " + sc.n("kei") + " and his girlfriend are fighting. Maybe I'll just stick around and see what's going on.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "envy",
            text: "I told you I'm saving myself for marriage! And if you hated my apartment so much why are you always here?",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "kei",
            text: "I'm always here becuase you tease me and lead me on. You say you're waiting for marriage, but then tell " +
                "me how horny you are. I'm horny too. My balls are going to explode if I don't cum soon. Let go inside " +
                "and can finally fuck. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "envy",
            text: "I told you I'm waiting. This is only our fourth date and you've groped my tits, tried to finger my butt " +
                "and pulled you dick out and show me when I don't know you well enough. I'm not just a piece of meat, " +
                "I want to get to know you better. Just come in and talk with me.",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "kei",
            text: "I love you baby. I just want to show you how much. Let's make love.",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "envy",
            text: "No. Maybe you should just go home and jack off then call me. I'm hoping you'll be like you were " +
                "on our first date. ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "kei",
            text: "If you're not going to put out I have other stuff to do. I'm going to fuck this slutty nurse I " +
                "know. At least she puts out. We're done. Call me if you want to fuck, otherwise don't call me.",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "envy",
            text: "*sobbing* fine... it's over. I never want to see you again. ",
            button: [
                { chatID: 12, text: "...", callback: "fight1" }
            ]
        },
        {
            chatID: 12,
            speaker: "kei",
            text: "Oh hi " + sc.n("me") + ". Don't date that prude bitch. She's lame as hell. I'm going to go piss in the " +
                sc.n("bimbo") + "'s face and fuck her in the ass. She loves that stuff! If you fuck her later you " +
                "can get my sloppy seconds! Later.",
            button: [
                { chatID: -1, text: "You're too kind. Later.", callback: "fightend" }
            ]
        },
        {
            chatID: 13,
            speaker: "envy",
            text: "Oh hi. You're the creepy guy that was watching me when my boyfriend dumped me. ",
            button: [
                { chatID: 14, text: "Oh, haha. Sorry about that", callback: "envyUp" },
                { chatID: 15, text: "So, do you want to fuck?", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "envy",
            text: "That's ok. I shouldn't have had that outbreak in the middle of the hallway. ",
            button: [
                { chatID: 16, text: "Yeah. I shouldn't have stood there, but I couldn't look away. ", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "envy",
            text: "Ah ha! It was you. And no. I don't want to fuck. ",
            button: [
                { chatID: 16, text: "I was trying to make a joke.", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "envy",
            text: "That's ok. I didn't expect " + sc.n("kei") + " to start a fight with me right there. Why are guys " +
                "such horny pigs? ",
            button: [
                { chatID: 17, text: "Not all of us are horny pigs. ", callback: "envyUp" },
                { chatID: 18, text: "Because your only purpose is as a cum receptacle. ", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "envy",
            text: "That's what they all say. My first boyfried said he didn't want sex, just to be my best friend. Then " +
                "I caught him jacking off in my panties. Why are guys like this?",
            button: [
                { chatID: 19, text: "Ok. we're all horny pigs.", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "envy",
            text: "You are too much! " + sc.n("kei") + " said the same thing to me! Why can't guys just be friends " +
                "for a while till we get to know each other instead of always making dirty jokes?",
            button: [
                { chatID: 19, text: "Yeah that was a bad joke. ", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "envy",
            text: "There's something about you I like, but I can't put my finger on it right now. " +
                "Do you think it's possible you and I could just be friends without sex getting in the way. ",
            button: [
                { chatID: 20, text: "There's something about you I like too. I would love to be your friend. ", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "envy",
            text: "Oh good. I was hoping you would say that and not some stupid sex joke. I've got to run. You should " +
                "stop by again sometime. ",
            button: [
                { chatID: -1, text: "Sweet! See you later my new buddy ", callback: "firstMeetEnd" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "I need to get the frozen pizza from " + sc.n("spanky") + "'s before I visit her again. ",
            button: [
                { chatID: -1, text: "Duh!", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Weird. Her door is slightly open. ",
            button: [
                { chatID: -1, text: "Just go in", callback: "enter" },
                { chatID: -1, text: "I repsect her privacy and close the door and leave. ", callback: "reset" },
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "That's a lot of guys lined outside her door.... ",
            button: [
                { chatID: -1, text: "Go in", callback: "enter" },
                { chatID: -1, text: "I'll come back later", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "Evicted... I guess she's not coming back. ",
            button: [
                { chatID: -1, text: "....", callback: "" },
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "I'm not even going to try knocking on her door until after I talk to Spanky. ",
            button: [
                { chatID: -1, text: "....", callback: "" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "I'm on the first floor. Which floor do I want to walk up?  ",
            button: [
                { chatID: -1, text: "Second floor, My girlfirend's floor", callback: "315" },
                { chatID: -1, text: "Third floor.", callback: "303" },
                { chatID: -1, text: "Stay here", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "envy",
            text: "Is that you " + sc.n("me") + "! ",
            button: [
                { chatID: 28, text: "It is. I came to aplogize. ", callback: "" },
            ]
        },
        {
            chatID: 28,
            speaker: "envy",
            text: "I told you to fuck off! Becuase of you I can't stop playing with myself. Go away!",
            button: [
                { chatID: 29, text: "I'm not going away. I'm going to stay here until you let me in to try and help you. I don't care how many days it takes. ", callback: "" },
                { chatID: -1, text: "Ok. ", callback: "" },
            ]
        },
        {
            chatID: 29,
            speaker: "thinking",
            text: "I'm just going to sit in front of her door till she lets me in. ",
            button: [
                { chatID: -1, text: "Wait.", callback: "wait" },
                { chatID: -1, text: "I'll do this later", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "random",
            text: "Oh wait. You're not Jim. I'm saving myself for Jim. ",
            button: [
                { chatID: -1, text: "oh. Drat.", callback: "reset" },
            ]
        },
        {
            chatID: 31,
            speaker: "envy",
            text: "You can go now. I don't want to talk to you. Stalking me outside my door isn't " +
            "going to change my mind. ",
            button: [
                { chatID: 32, text: "I'm so sorry. Please let me help. ", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "envy",
            text: "You can help by never coming back here. Ever. Go away! I hate you.",
            button: [
                { chatID: -1, text: "I know you don't mean that. I'm going to stay right here and wait for when you're ready.  ", callback: "bg" },
                { chatID: -1, text: "Oh. Damn. Ok, then bye.", callback: "reset" },
            ]
        },
        {
            chatID: 33,
            speaker: "envy",
            text: "Fine! I'll let you help. But nothing else. You know I'm now failing my math " +
                "class because I can't concentrate? You really ruined me and I don't know what to " +
                "do. I've masturbated so many times I'm starting to get calluses on my clit. Come " +
                "on in. But behave yourself. And no more movies. ",
            button: [
                { chatID: 34, text: "Yes. Ok. Thank you!", callback: "backin_0" },
            ]
        },
        {
            chatID: 34,
            speaker: "envy",
            text: "You know I'm mad at you. But I came to realize I should really be mad at " +
                sc.n("spanky") + " too. Even more so. What kind of weird-o goes out and pays " +
                "someone to make a hypno video, just becuase I dumped him. I'm so glad you " +
                "at least told me before showing me more. I would hate to think where I would " +
                "be if I watched more movies. ",
            button: [
                { chatID: 35, text: "Yes. It's " + sc.n("spanky") + "'s fault! I didn't think they would even work. ", callback: "" },
            ]
        },
        {
            chatID: 35,
            speaker: "envy",
            text: "You still should have told me before I watched that first video. I've got to " +
                "find a way to control these cravings! ",
            button: [
                { chatID: 36, text: "So how does it work. Do you have to masturbate all the time? ", callback: "" },
            ]
        },
        {
            chatID: 36,
            speaker: "envy",
            text: "Not all the time. Sometimes it comes on 10 minutes after I orgasm, sometime longer. " +
                "I think the longest I didn't have cravings was 4 hours. The best 4 hours of my life. I " +
                "even wake up in the middle of the night with a raging lady boner. My clit is so hard I " +
                "could cut glass with it. ",
            button: [
                { chatID: 37, text: "...hmmmm. What happens if you don't touch yourself. ", callback: "" },
            ]
        },
        {
            chatID: 37,
            speaker: "envy",
            text: "The craving just build and build till it's all I can think about. I was in a 2 hour lab " +
                " and the craving came on. I tried not touching myself, but I was so lost in my own head I " +
                "caused a little fire. Right after I put it out I had to run to the bathroom to rub one out. " +
                "it's taking over my life. My teachers think I have to poop all the time 'cause I'm gone so much. ",
            button: [
                { chatID: 38, text: "That sounds terrible. I'm so sorry I did this to you. ", callback: "" },
            ]
        },
        {
            chatID: 38,
            speaker: "envy",
            text: "You can stop being sorry and help me. I've got to stop craving orgasms somehow!",
            button: [
                { chatID: 39, text: "Hmmmm.... What if you removed your clit? ", callback: "" },
            ]
        },
        {
            chatID: 39,
            speaker: "envy",
            text: "What the fuck! I'm not cutting off my clit. What if that doesn't work and I'm just " +
                "horny all the time. Also gross! Think of something else.",
            button: [
                { chatID: 40, text: "Have you ever had the craving go away on their own? ", callback: "" },
            ]
        },
        {
            chatID: 40,
            speaker: "envy",
            text: "Yes, by masturbating. I even tried stabbing myself with a knife and it just made it worse. ",
            button: [
                { chatID: 41, text: "So you have to find a way to masturbate any time. Without getting caught. ", callback: "" },
            ]
        },
        {
            chatID: 41,
            speaker: "envy",
            text: "Yes genius. I'll just masturbate all the time no matter where I am. I'll just pull " +
                "down my panties in the middle of the store and rub one out! ",
            button: [
                { chatID: 42, text: "What if there was a way to masturbate without anyone knowing? ", callback: "" },
            ]
        },
        {
            chatID: 42,
            speaker: "envy",
            text: "What do you mean? ",
            button: [
                { chatID: 43, text: "I don't know, but I know someone that might be able to help. Wait here. I'm going to go ask someone! ", callback: "" },
            ]
        },
        {
            chatID: 43,
            speaker: "envy",
            text: "You better come back with good news! Also I have to rub one out, so you do need " +
                "to go. Like now. Fuck I'm so horny. ",
            button: [
                { chatID: 44, text: "Ok! I'll be back with good news! I think. I promise! ", callback: "bg" },
            ]
        },
        {
            chatID: 44,
            speaker: "thinking",
            text: "If anyone know how to make a girl orgasm it's " + sc.n("tiffany") + "! She'll have " +
                "something. She has to have something!",
            button: [
                { chatID: -1, text: "I'll look for her at Toy's 'n Us!", callback: "backin_1" },
            ]
        },
        {
            chatID: 45,
            speaker: "thinking",
            text: "I'm not going back until I find something to help her with pussy!",
            button: [
                { chatID: -1, text: "I need to go to Toy's 'n Us!", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};