﻿//submissiveness
var room197 = {};
room197.main = function () {
    var sub = levels.get("sub").l;
    var lastEvent = missy.get("subCounter197");
    var sublist = [
        { n: "rubfeet", chatid: 0 },
        { n: "rubfeet", chatid: 0 },
        { n: "kissfeet", chatid: 0 },
        { n: "kissfeet", chatid: 5 },
        { n: "lickfeet", chatid: 8 },
        { n: "legworship", chatid: 11 },
        { n: "bj", chatid: 18 },
        { n: "eatass", chatid: 23 },
        { n: "anal", chatid: 28 },
    ];

    if (lastEvent < sub && lastEvent < 7) {
        lastEvent++;
        missy.mod("subCounter197", lastEvent);
        selected = sublist[lastEvent];
    }
    else {
        selected = sublist[g.rand(0, sublist.length)];
    }

    if (selected.n === "anal")
        nav.bg("197_sub/anal0.jpg");
    chat(selected.chatid, 197);

    
};

room197.btnclick = function (name) {
    switch (name) {
        case "leftfootRub":
            nav.killall();
            nav.bg("197_sub/sidedesk2.jpg");
            nav.button({
                "type": "hand",
                "name": "rightfootRub",
                "left": 1044,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/rightFoot.png"
            }, 197);
            chat(3, 197);
            break;
        case "rightfootRub":
            nav.killall();
            nav.bg("197_sub/sidedesk3.jpg");
            chat(4, 197);
            break;
        case "kissfoot":
            nav.killall();
            nav.bg("197_sub/sidedesk3.jpg");
            chat(7, 197);
            break;
        case "lickfoot":
            if (g.internal > 4) {
                nav.killall();
                nav.bg("197_sub/sidedesk3.jpg");
                chat(10, 197);
            }
            else if (g.internal === 3) {
                nav.killbutton("lickfoot");
                nav.button({
                    "type": "tongue",
                    "name": "lickfoot",
                    "left": 1044,
                    "top": 476,
                    "width": 173,
                    "height": 286,
                    "image": "197_sub/rightFoot.png"
                }, 197);
                nav.bg("197_sub/lick" + g.internal + ".jpg");
                g.internal++;
            }
            else {
                nav.bg("197_sub/lick" + g.internal + ".jpg");
                g.internal++;
            }
            break;
        case "legworship1":
            chat(13, 197);
            break;
        case "bj5":
            
            nav.bg("197_sub/bj" + g.internal + "_" + gender.pronoun("f") + ".jpg");
            if (g.internal === 8) {
                levels.oralGive(5, false, true, null);
                nav.killall();
                chat(22, 197);
            }
            g.internal++;
            break;
        case "eatassbtn":
            if (g.internal < 7) {
                nav.modbutton("eatassbtn", "197_sub/eatassbtn" + g.internal + ".png", null, null);
                nav.bg("197_sub/eatass" + g.internal + "_" + gender.pronoun("f") + ".jpg");
            }
            else {
                nav.killbutton("eatassbtn");
                nav.bg("197_sub/eatass" + g.internal + "_" + gender.pronoun("f") + ".jpg");
                nav.next("eatassbtn7");
            }
            g.internal++;
            break;
        case "eatassbtn7":
            nav.killall();
            nav.bg("197_sub/eatass8.jpg");
            levels.oralGive(3, false, false, "f");
            chat(27, 197);
            break;
        case "anal3":
            nav.killall();
            nav.bg("197_sub/" + name + "_" + gender.pronoun("f") + ".jpg");
            nav.next("anal4");
            break;
        case "anal4":
            nav.killall();
            nav.bg("197_sub/" + name + "_" + gender.pronoun("f") + ".jpg");
            nav.next("anal5");
            break;
        case "anal5":
            nav.killall();
            nav.bg("197_sub/anal5.jpg");
            nav.button({
                "type": "tongue",
                "name": "anal6",
                "left": 906,
                "top": 440,
                "width": 459,
                "height": 172,
                "image": "197_sub/anal5.png"
            }, 197);
            levels.anal(6, true, "f", false, null);
            chat(31, 197);
            break;
        case "anal6":
            nav.killall();
            levels.mod("cum", 25, 999);
            stats.mod("cum", "swallow", 1);
            gv.mod("energy", 80);
            chat(32, 197);
            break;
        default:
            break;
    }
};

room197.chatcatch = function (callback) {
    switch (callback) {
        case "legworship0":
        case "eatass0":
            nav.bg("197_sub/" + callback + ".jpg");
            break;
        case "bj1":
        case "bj2":
        case "bj3":
        case "bj5":
        case "bj6":
        case "bj7":
        case "bj8":
        case "eatass2":
            nav.bg("197_sub/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "eatass1":
            cl.nude();
            nav.bg("197_sub/" + callback + ".jpg");
            break;
        case "eatass3":
            nav.bg("197_sub/" + callback + "_" + gender.pronoun("f") + ".jpg");
            g.internal = 4;
            nav.button({
                "type": "tongue",
                "name": "eatassbtn",
                "left": 611,
                "top": 50,
                "width": 468,
                "height": 550,
                "image": "197_sub/eatassbtn3.png"
            }, 197);
            break;
        case "anal1":
            cl.nude();
            nav.bg("197_sub/" + callback + "_" + gender.pronoun("f") + ".jpg");
            break;
        case "anal2":
            nav.bg("197_sub/" + callback + "_" + gender.pronoun("f") + ".jpg");
            nav.next("anal3");
            break;
        case "anal7":
            nav.bg("206_questions/sideEmpty.jpg");
            break;
        case "bj4":
            nav.bg("197_sub/" + callback + "_" + gender.pronoun("f") + ".jpg");
            g.internal = 5;
            nav.next("bj5");
            break;
        case "punish":
            g.pass = "insubordination";
            levels.mod("dom", 25, 999);
            missy.mod("mood", -25);
            char.room(217);
            break;
        case "sideDesk":
            nav.killall();
            levels.mod("sub", 5, 5);
            nav.bg("197_sub/sidedesk0.jpg");
            break;
        case "presentFoot":
            nav.bg("197_sub/sidedesk1.jpg");
            nav.button({
                "type": "hand",
                "name": "leftfootRub",
                "left": 723,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/leftFoot.png"
            }, 197);
            break;
        case "kissfoot":
            nav.bg("197_sub/sidedesk1.jpg");
            nav.button({
                "type": "kiss",
                "name": "kissfoot",
                "left": 723,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/leftFoot.png"
            }, 197);
            break;
        case "lickfoot":
            nav.killall();
            g.internal = 1;
            nav.bg("197_sub/sidedesk1.jpg");
            nav.button({
                "type": "tongue",
                "name": "lickfoot",
                "left": 723,
                "top": 476,
                "width": 173,
                "height": 286,
                "image": "197_sub/leftFoot.png"
            }, 197);
            break;
        case "legworship1":
            nav.button({
                "type": "kiss",
                "name": "legworship1",
                "left": 1033,
                "top": 807,
                "width": 62,
                "height": 184,
                "image": "197_sub/legworship1.png"
            }, 197);
            break;
        case "legworship2":
            nav.killall();
            if (missy.get("uniform") > 2)
                nav.bg("197_sub/legworship2_f.jpg");
            else
                nav.bg("197_sub/legworship2_m.jpg");
            break;
       
        case "increaseSub":
            levels.mod("sub", 5, 5);
            break;
        case "oralup":
            levels.mod("oral", 15, 999);
            break;
        case "analup":
            levels.mod("anal", 15, 999);
            break;
        case "complete":
            levels.mod("sub", 40, 999); //UPDATE THIS WITH NEW EVENTS
            missy.mod("mood", 30);
            char.settime(17, 5);
            char.room(203);
            break;
        default:
            break;
    }
};

room197.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "Come kneel at my feet.",
            button: [
                { chatID: 2, text: "Yes ma'am!", callback: "sideDesk" },
                { chatID: 1, text: "No", callback: "" },
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "No? I don't think you understand your place in this world. It appears I need to fix " +
                "your insubordination problem. ",
            button: [
                { chatID: -1, text: "huh?", callback: "punish" },
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "I've been running around all day. I need you to massage them.",
            button: [
                { chatID: -1, text: "Yes ma'am!", callback: "presentFoot" },
                { chatID: 1, text: "Gross, no!", callback: "" },
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "Mmmmmmm that's good. Now do my other foot.  ",
            button: [
                { chatID: -1, text: "...", callback: "" },
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "MMmmm yeah. I needed that. You can go now. ",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "complete" },
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "Come kneel at my feet. ",
            button: [
                { chatID: 6, text: "Yes ma'am", callback: "sideDesk" },
                { chatID: 1, text: "Now way!", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "Since you've been a good little submissive I'll allow you to kiss my feet. Just a small kiss, I don't want " +
                "your disgusting spit on me. ",
            button: [
                { chatID: -1, text: "Thank you ma'am", callback: "kissfoot" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "That's a good pet. Now go my little foot slave.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "complete" },
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "You are really showing what a submissive you are. I suppose I'll let you lick the soles of my bare feet. " +
                "really taste the sweat that collects in my high heel shoes as I walk around all day. Come kneel at my feet " +
                "and stick out your tongue.",
            button: [
                { chatID: 9, text: "Yes ma'am", callback: "sideDesk" },
                { chatID: 1, text: "Now way!", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "MMmmm yes. You know what to do.",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "lickfoot" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "I do enjoy a submissive foot slave. Oink for me slave. ",
            button: [
                { chatID: -1, text: "*snort* oink oink", callback: "complete" },
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "Come over here. I have a suprise for you. ",
            button: [
                { chatID: 12, text: "*gulp*", callback: "legworship0" },
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "This is Big Red. You're going to get to know big red well, but today is just " +
                "for introductions. Give Big Red a kiss. Let him know how happy you are to meet him.  ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "legworship1" },
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "That's my good sissy. You may taste my leg and stare at Big Red. I want you to " +
                "imagine what you want to Big Red to do to your tiny sissy body. ",
            button: [
                { chatID: 14, text: "thank you ma'am", callback: "legworship2" },
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "That's right, worship my big powerful legs. Show me your secret desires that " +
                "make your clitty twitch at night when you sleep. Now tell me sissy. If you wanted " +
                "to make Big Red happy, whould you do it with your lips, or sissy pussy? ",
            button: [
                { chatID: 15, text: "My mouth, ma'am.", callback: "oralup" },
                { chatID: 16, text: "My sissy pussy, ma'am.", callback: "analup" },
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "So you have an oral fixation. I know Big Red would love part your lips and " +
                "stretch your slutty throat. I would get so deep you would be able to smell my  " +
                "clit and pussy rubbing aginst your nose. You would like that wouldn't you sissy? ",
            button: [
                { chatID: 17, text: "Oh yes ma'am!", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "So you want to be bent over my desk with your sissy pussy open and ready " +
                "to take my big fat cock. You'd be moaning in pleasure as I ram into your prostate " +
                "over and over making you leak cum from you little clit into your skirt. You would like " +
                "that wouldn't you sissy?",
            button: [
                { chatID: 17, text: "Oh yes ma'am!", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "Don't worry slut. I will make your dreams come true. Dream of Big Red " +
                "thrusting into your slutty holes while you show what a submissive slut you " +
                "really are. Now go. I have work to do. ",
            button: [
                { chatID: -1, text: "Yes ma'am!", callback: "complete" },
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "Strip and get on your knees. I'm going to be right back. ",
            button: [
                { chatID: 19, text: "Yes ma'am!", callback: "bj1" },
            ]
        },
        {
            chatID: 19,
            speaker: "thinking",
            text: "Oh my. I wonder what she has on her mind this time. Hopefully she lets me " +
                "eat her pussy. I haven't seen her with any guys. She's got to crave dick at somepoint. " +
                "I mean, I'll bet she's seen and touched my dick more than anyone since I've started here. " +
                "She must like my dick. Maybe she'll finally let me fuck her. ",
            button: [
                { chatID: 20, text: "...", callback: "bj2" },
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "Now I know Big Red here is a big thick, and your poor jaw can't yet handle it, " +
                "but I'm going to fuck your face anyways. I've been working so hard I need a stress release, " +
                "and there's no better stress release than fucking a sissy.",
            button: [
                { chatID: 21, text: "oh my...", callback: "bj3" },
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "I have a treat for you my little sissy.I bet you like whip cream, don't you. " +
                " I like my little sissys full of cream.",
            button: [
                { chatID: -1, text: "umm hmmm..", callback: "bj4" },
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "Is that all you have? What a failure, I'm so disappointed, but I guess " +
                "it's a start. Clean yourself up and get out of my sight.",
            button: [
                { chatID: -1, text: "*Gasp* yes ma'am", callback: "complete" },
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "I just give give give. All day I work to make you happy. I deserve a reward " +
                "for all the time and effort I've given you. ",
            button: [
                { chatID: 24, text: "ma'am?", callback: "eatass0" },
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "Strip and lay down on the floor, face up. ",
            button: [
                { chatID: 25, text: "Yes ma'am! [Strip and lay down]", callback: "eatass1" },
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "You're going to eat my ass until I get my orgasm. Maybe three orgasms. Hmmmm... " +
                "Just eat my ass till I tell you to stop. ",
            button: [
                { chatID: 26, text: "MMmmmmmMMmm", callback: "eatass2" },
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "What are you doing? I can't orgasm to this. Stick your little tongue up into " +
                "my asshole while I finger my hard erect clit! ",
            button: [
                { chatID: -1, text: "Mlllaaass mmmaaaa", callback: "eatass3" },
            ]
        },
        {
            chatID: 27,
            speaker: "missy",
            text: "That'll do pig. That'll do.  ",
            button: [
                { chatID: -1, text: "*moan*", callback: "complete" },
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "Strip and bend over my desk. Show me your bussy hole!",
            button: [
                { chatID: 29, text: "Yes ma'am!", callback: "anal1" },
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "No hesitation, just like a proper slut should be. We've played around with " +
                "Big Red enough. I'm about to shove this giant red dick right up your tight little " +
                "ass. Are you ready slut? ",
            button: [
                { chatID: 30, text: "...no", callback: "" },
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "That was rhetorical. I don't care if you're ready. I'm going to fuck every last " +
                "bit of masculinity out of your sissy fuck hole. I'm going to fuck you so deep and " +
                "hard you're going to taste my silicone cock.",
            button: [
                { chatID: -1, text: "*gulp*", callback: "anal2" },
            ]
        },
        {
            chatID: 31,
            speaker: "missy",
            text: "Now be a good little girl and eat the cum off my carpet. After all sluts love " +
                "cum. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "" },
            ]
        },
        {
            chatID: 32,
            speaker: "missy",
            text: "That's my good girl. Go get dressed. You took my cock like a champ. ",
            button: [
                { chatID: 33, text: "Thank you ma'am", callback: "anal7" },
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "Oh fuck! My ass hurts so bad, but I can orgasm tingling in my ass. That orgasm " +
                "was soooo good my entire body is still shaking! Fuck that was good! I'm such " +
                "a slutty girl!",
            button: [
                { chatID: -1, text: "...", callback: "complete" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};