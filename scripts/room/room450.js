//Girl bathroom park
var room450 = {};

//tiffany tricks main into drag by saying it's an all girls apartment
//candy knows who he is and asks him why he's dressed as a chick
//tiffany laughs that she tricked him

room450.main = function () {
    var navList = new Array();
    var btnList = new Array();
    
    if (g.isNight()) {
        if (sc.getstep("cop") > 0) {
            btnList.push({
                "type": "btn",
                "name": "further",
                "left": 603,
                "top": 0,
                "width": 314,
                "height": 401,
                "image": "450_park/450_further.png",
                "night": "450_park/450_further_night.png"
            });
            btnList.push({
                "type": "btn",
                "name": "sleep",
                "left": 306,
                "top": 406,
                "width": 148,
                "height": 122,
                "image": "450_park/sleep.png"
            });
            btnList.push({
                "type": "btn",
                "name": "gbroom",
                "left": 1288,
                "top": 271,
                "width": 63,
                "height": 125,
                "image": "450_park/450_girlBroom.png"
            });
            btnList.push({
                "type": "btn",
                "name": "bbroom",
                "left": 1594,
                "top": 273,
                "width": 65,
                "height": 126,
                "image": "450_park/450_boyBroom.png"
            });
            navList = [451, 452, 0];
        }
        else {
            if (!sc.checkevent("cop", 1)) {
                btnList.push({
                    "type": "btn",
                    "name": "cop",
                    "left": 666,
                    "top": 0,
                    "width": 1000,
                    "height": 1080,
                    "image": "450_park/cop1.png"
                });
            }
        }
    }
    else {
        btnList.push({
            "type": "btn",
            "name": "gbroom",
            "left": 1288,
            "top": 271,
            "width": 63,
            "height": 125,
            "image": "450_park/450_girlBroom.png"
        });
        btnList.push({
            "type": "btn",
            "name": "bbroom",
            "left": 1594,
            "top": 273,
            "width": 65,
            "height": 126,
            "image": "450_park/450_boyBroom.png"
        });
        btnList.push({
            "type": "btn",
            "name": "further",
            "left": 603,
            "top": 0,
            "width": 314,
            "height": 401,
            "image": "450_park/450_further.png",
            "night": "450_park/450_further_night.png"
        });
        navList = [460, 452, 451, 0];
    }
    

    if (g.hourBetween(12, 13) || g.hourBetween(18, 19)) {
        btnList.push({
            "type": "btn",
            "name": "cult",
            "left": 1481,
            "top": 456,
            "width": 264,
            "height": 205,
            "image": "450_park/cultEating.png"
        });
    }


    $.each(btnList, function (i, v) {
        nav.button(v, 450);
    });

    nav.buildnav(navList);
};

room450.btnclick = function (name) {
    switch (name) {
        case "gbroom":
            char.room(452);
            break;
        case "bbroom":
            char.room(451);
            break;
        case "bench":
            chat(1, 450);
            break;
        case "further":
            char.room(460);
            break;
        case "sleep":
            if (sc.checkevent("me", 7))
                char.room(456);
            else
                chat(14, 450);
            break;
        case "":
            char.room(456);
            break;
        case "cult":
            nav.killbutton("cult");
            nav.button({
                "type": "img",
                "name": "cult1",
                "left": 750,
                "top": 0,
                "width": 933,
                "height": 1080,
                "image": "450_park/cultTalk.png"
            }, 450);
            if (sc.getstep("cultjgirl") < 1)
                chat(8, 450);
            else
                chat(13, 450);
            break;
        case "lolaPark":
            nav.killall();
            nav.bg("450_park/lola0.jpg");
            chat(15, 450);
            break;
        case "lolaPark12":
            nav.killall();
            nav.bg("450_park/lola0.jpg");
            chat(38, 450);
            break;
        case "lola2":
            chat(21, 450);
            break;
        case "lola4":
            chat(23, 450);
            break;
        case "lola5":
            chat(24, 450);
            break;
        case "cop":
            if (g.hasAccess(16).darkAccess) {
                if (q3.activeSearch("cop"))
                    chat(50, 450);
                else
                    chat(2, 450);
            }
            else
                chat(3, 450);
            break;
        default:
            break;
    }
};

room450.chatcatch = function(callback){
    switch (callback) {
        case "sitHour":
            char.addtime(60);
            break;
        case "leavePark":
            char.room(0);
            break;
        case "cop2":
            nav.killbutton("cop");
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 666,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "450_park/cop2.png"
            }, 450);
            break;
        case "cop3":
            nav.killbutton("cop");
            nav.button({
                "type": "img",
                "name": "cop",
                "left": 666,
                "top": 0,
                "width": 1000,
                "height": 1080,
                "image": "450_park/cop3.png"
            }, 450);
            break;
        case "killCop":
            nav.buildnav([0]);
            nav.killbutton("cop");
            break;
        case "killCopx":
            sc.setstep("cop", 1);
            char.room(450);
            break;
        case "cultLeave1":
            char.addtime(60);
            nav.killbutton("cult1");
            sc.setstep("cultjgirl", 1);
            break;
        case "cultLeave2":
            char.addtime(60);
            nav.killbutton("cult1");
            break;
        case "redress":
            cl.c.shirt = "g";
            cl.c.pants = "j";
            cl.c.shoes = "w";
            cl.c.socks = "w";
            cl.display();
            char.room(456);
            break;
        case "lola1":
            nav.bg("450_park/lola1.jpg");
            break;
        case "lola2":
            nav.bg("450_park/450_bg.jpg");
            nav.button({
                "type": "btn",
                "name": "lola2",
                "left": 1706,
                "top": 233,
                "width": 41,
                "height": 87,
                "image": "450_park/lola2.png"
            }, 450);
            break;
        case "lola3":
            nav.killall();
            nav.bg("450_park/lola3.jpg");
            break;
        case "lola4":
            nav.bg("450_park/lola4.jpg");
            nav.button({
                "type": "btn",
                "name": "lola4",
                "left": 1665,
                "top": 298,
                "width": 110,
                "height": 392,
                "image": "450_park/lola4.png"
            }, 450);
            break;
        case "lola5":
            nav.killall();
            nav.bg("450_park/lola5.jpg");
            nav.button({
                "type": "btn",
                "name": "lola5",
                "left": 414,
                "top": 486,
                "width": 41,
                "height": 161,
                "image": "450_park/lola5.png"
            }, 450);
            break;
        case "lola6":
            nav.killall();
            nav.bg("450_park/lola6.jpg");
            break;
        case "lola6kiss":
            nav.bg("450_park/lola6kiss.jpg");
            break;
        case "lola7a":
            sc.setstep("lola", -3);
            sc.setstep("lola", 12);
            g.setflag("lolaDayEvent");
            char.addtime(120);
            char.room(450);
            break;
        case "lola7b":
            sc.setstep("lola", -4);
            sc.setstep("lola", 12);
            g.setflag("lolaDayEvent");
            char.addtime(120);
            char.room(450);
            break;
        case "lolax1":
            g.mod("arousal", 100);
            nav.bg("450_park/lolax1.jpg");
            cl.nude();
            break;
        case "lolax2":
        case "lolax3":
        case "lolax4":
        case "lolax5":
        case "lolax6":
        case "lolax7":
            nav.bg("450_park/" + callback + ".jpg");
            break;
        case "lolax8":
            nav.bg("450_park/lolax8.jpg");
            cl.doCum(false);
            zcl.displayMain(-700, 500, .4, "clothes", true);
            break;
        case "lolax9":
            sc.setstep("lola", 13);
            char.addtime(120);
            g.mod("fuckPussy", 1);
            g.setflag("lolaDayEvent");
            cl.undo();
            scc.love("lola", 200, 100);
            char.room(450);
            break;
        case "c0":
            nav.killall();
            cl.nude();
            nav.bg("450_park/c0.jpg");
            break;
        default:
            break;
    }
}

room450.chat = function(chatID){
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "",
            button: [
                { chatID: 1, text: "", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "",
            button: [
                { chatID: -1, text: "Sit on the bench for an hour?", callback: "sitHour" },
                { chatID: -1, text: "Never mind", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "cop",
            text: "Hey buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: -1, text: "Yes sir, I'll take off", callback: "leavePark" }
            ]
        },
        {
            chatID: 3,
            speaker: "cop",
            text: "Hey buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: 4, text: "Sorry sir, I've been kicked out of my home and I've got nowhere to go. Please let me crash here tonight!", callback: "cop3" }
            ]
        },
        {
            chatID: 4,
            speaker: "cop",
            text: "Ohhhh, I'll tell you what boy, I'll let you sleep in the park if you wrap your lips around my " +
                "big fat cock and suck it till I cum down your throat.",
            button: [
                { chatID: 5, text: "Wha.... I'm not going to do that.", callback: "cop2" }
            ]
        },
        {
            chatID: 5,
            speaker: "cop",
            text: "Hahah maybe not today, but if I catch you in my park after dark you will. Go ahead and sleep on the bench. This is " +
                "your freebie.",
            button: [
                { chatID: -1, text: "Thanks?....", callback: "killCopx" }
            ]
        },
        {
            chatID: 6,
            speaker: "cop",
            text: "Oh, you come here for my cock?",
            button: [
                { chatID: 7, text: "No, I'm still homeless, please just let me sleep here without sucking your dick.", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "cop",
            text: "The bench is all yours",
            button: [
                { chatID: -1, text: "Thanks.", callback: "killCop" }
            ]
        },
        {
            chatID: 8,
            speaker: "cultjgirl",
            text: "Yes my friend, what can we do for your?",
            button: [
                { chatID: 9, text: "Who are you?", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "cultjgirl",
            text: "We are everything, we are everywhere, we are love. Have you been loved?",
            button: [
                { chatID: 10, text: "Have I what?", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "cultjgirl",
            text: "Silly boy, have you been loved? Our group has so much love, we would like to love you. ",
            button: [
                { chatID: 11, text: "Oh yea?", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "cultjgirl",
            text: "Yes, you can join us for free love, just follow the forest, it will guide you to us. When you get near " +
                "our home disrobe your earthly clothes for they serve no purpose when you have love in your heart.",
            button: [
                { chatID: 12, text: "What the fuck?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "cultjgirl",
            text: "The time draws near for us to share out love in the forest, be well new friend. ",
            button: [
                { chatID: -1, text: "Be well?", callback: "cultLeave1" }
            ]
        },
        {
            chatID: 13,
            speaker: "cultjgirl",
            text: "Hello again friend. Meet us naked, in the forest so we can share our love. Only the nude body can " +
                "can receive the gifts of our creator. ",
            button: [
                { chatID: -1, text: "Sure", callback: "cultLeave2" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Better wear my normal clothes, it's cold out here..",
            button: [
                { chatID: -1, text: "...", callback: "redress" }
            ]
        },
        {
            chatID: 15,
            speaker: "lola",
            text: "I'm so glad you called me out here on a date! I've been dreaming of this day for years, just you and me " +
                "alone together. I can't believe you've waited this ong to ask me out.",
            button: [
                { chatID: 16, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "This is so crazy! Should I even be doing this? This is wrong, but it feels so right. I don't care what anyone " +
                "says, I'm going to go on a date with " + sc.n("lola") + " and I'm going to enjoy it.",
            button: [
                { chatID: 17, text: "...", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "lola",
            text: "I can tell you're thinking about something. I've known you way too long and I've seen that look before. Is " +
                "it good thoughts?",
            button: [
                { chatID: 18, text: "Oh yea, the best of thoughts, I'm glad we're on this date.", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "lola",
            text: "I'm so relieved! I was afraid I was packing this picnic basket for nothing. I have a secrect place in the " +
                "forest I want to go and have our picnic.",
            button: [
                { chatID: 19, text: "Oh sweet, where is it?", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "lola",
            text: "I can't tell you silly, 'cause then it wouldn't be a secret. I'll tell you what, I'll run and hide, and you have " +
                "to find me.",
            button: [
                { chatID: 20, text: "Huh?", callback: "lola1" }
            ]
        },
        {
            chatID: 20,
            speaker: "lola",
            text: "FIND ME!",
            button: [
                { chatID: -1, text: "Whaaaa...", callback: "lola2" }
            ]
        },
        {
            chatID: 21,
            speaker: "lola",
            text: "You found me!",
            button: [
                { chatID: 22, text: "ok", callback: "lola3" }
            ]
        },
        {
            chatID: 22,
            speaker: "lola",
            text: "Find me again!",
            button: [
                { chatID: -1, text: "ok", callback: "lola4" }
            ]
        },
        {
            chatID: 23,
            speaker: "lola",
            text: "Hahahaha you found me again! One more time!",
            button: [
                { chatID: -1, text: "ok", callback: "lola5" }
            ]
        },
        {
            chatID: 24,
            speaker: "lola",
            text: "Got me again! I guess you deserve a reward...",
            button: [
                { chatID: 25, text: "I like rewards...", callback: "lola6" }
            ]
        },
        {
            chatID: 25,
            speaker: "lola",
            text: "A picnic!!!! I made this all for you!",
            button: [
                { chatID: 26, text: "Oh, not what I was expecting, but still nice.", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "lola",
            text: "So I brought you out here so we could talk about us.",
            button: [
                { chatID: 27, text: "Ok...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "lola",
            text: "I was going to wait for you to say something, but I just can't. My stomach is fluttering with butterflies. I'm " +
                "just so nervous since I put it all out there. So.... What's what do you think about me?",
            button: [
                { chatID: 28, text: "...", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "Oh man. " + sc.n("lola") + " is really serious about this. I've never seen her show any interest in any boy, for the " +
                "longest time I just thought she was a lesbian. I know that she's going to want someone who is true to her, and there's no way " +
                "I can be true to just her. On the other hand if I didn't return her feelings it would just break her. How do I keep her happy, " +
                "but not mislead her?",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "lola",
            text: "You've been pretty quiet over there. I'm afraid of what that means.",
            button: [
                { chatID: 30, text: "I want to tell you that I also have deep real feelings for you.", callback: "" },
                { chatID: 34, text: "I care about you very much, but I'm not really at a stage that I can remain monogamous ", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "lola",
            text: "Oh thank god! I was afraid you would think this was weird or gross. I've been sweating all week wondering what you " +
            "were thinking of me. I'm so relieved. Kiss me you fool!",
            button: [
                { chatID: 31, text: "[Kiss her]", callback: "lola6kiss" }
            ]
        },
        {
            chatID: 31,
            speaker: "lola",
            text: "**KISS**",
            button: [
                { chatID: 32, text: "...", callback: "lola6" }
            ]
        },
        {
            chatID: 32,
            speaker: "lola",
            text: "[Proceed to make small talk for a while and enjoy a delicious lunch] ",
            button: [
                { chatID: 33, text: "...", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "lola",
            text: "I've got to get going. I had a great time. We should do this again. Call me when next time you find yourself in the park. ",
            button: [
                { chatID: -1, text: "I will, This was great.", callback: "lola7a" }
            ]
        },
        {
            chatID: 34,
            speaker: "lola",
            text: "Oh hahaha. We don't have to get married right now. Maybe we take thing casually for a little while, see where  " +
            "it goes. ",
            button: [
                { chatID: 35, text: "Yeah, I can do that", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "lola",
            text: "Ok, in the mean time lets enjoy this picnic I packed all the way out here. ",
            button: [
                { chatID: 36, text: "Yea, I'm so hungry", callback: "" }
            ]
        },
        {
            chatID: 36,
            speaker: "lola",
            text: "[Proceed to make small talk for a while and enjoy a delicious lunch] ",
            button: [
                { chatID: 37, text: "...", callback: "" }
            ]
        },
        {
            chatID: 37,
            speaker: "lola",
            text: "I'm going to go. If you want to meet up again just text me when you're in the park. ",
            button: [
                { chatID: -1, text: "ok. Later", callback: "lola7b" }
            ]
        },
        {
            chatID: 38,
            speaker: "lola",
            text: "Another picnic? ",
            button: [
                { chatID: 39, text: "Sure!", callback: "lola6" }
            ]
        },
        {
            chatID: 39,
            speaker: "lola",
            text: "So I know you think this is just another picnic and you're expecting me to pour my heart out to you, " +
                "but that's not why we're here. I need something from you. Something I've needed for a while. ",
            button: [
                { chatID: 40, text: "What's that?", callback: "lolax1" }
            ]
        },
        {
            chatID: 40,
            speaker: "lola",
            text: "I need you to help me lose my virginity. I've wanted to lose it for a while and I can think of " +
                "no better person than you to help me. ",
            button: [
                { chatID: 41, text: "Sure!", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "lola",
            text: "Here I am practically throwing myself at you and all you can say is 'sure'? Surely you can say " +
                "something more romantic! ",
            button: [
                { chatID: 42, text: "...", callback: "" }
            ]
        },
        {
            chatID: 42,
            speaker: "me",
            text: sc.n("lola") + " I've thought about this day for a while now. There is nothing I want more than to " +
                "share in this moment with you. It would be an honor to be your first. ",
            button: [
                { chatID: 43, text: "...", callback: "lolax2" }
            ]
        },
        {
            chatID: 43,
            speaker: "lola",
            text: "Come here you beautiful man! I'm going to eat you up!",
            button: [
                { chatID: 44, text: "Oh yeah", callback: "lolax3" }
            ]
        },
        {
            chatID: 44,
            speaker: "lola",
            text: "Be gentle.",
            button: [
                { chatID: 45, text: "I will", callback: "lolax4" }
            ]
        },
        {
            chatID: 45,
            speaker: "lola",
            text: "OOOOOOOOOOOOoooooooooooooooooouch ouch ouch! Gentle!",
            button: [
                { chatID: 46, text: "Oh sorry. I'll be gentle", callback: "lolax5" }
            ]
        },
        {
            chatID: 46,
            speaker: "lola",
            text: "MMMMmmmm that's better. ",
            button: [
                { chatID: 47, text: "Ooooo. Fuck. You're so tight.", callback: "lolax6" }
            ]
        },
        {
            chatID: 47,
            speaker: "lola",
            text: "OOOoooo I can feel it twitch inside me. Did you cum?",
            button: [
                { chatID: 48, text: "Hahaha Yea ", callback: "lolax7" }
            ]
        },
        {
            chatID: 48,
            speaker: "lola",
            text: "Ewwwww. You never told me it was going to drip out of me. That's so gross. How am I supposed to walk " +
                "home like this? ",
            button: [
                { chatID: 49, text: "Lol. I don't know. Maybe crab walk? ", callback: "lolax8" }
            ]
        },
        {
            chatID: 49,
            speaker: "lola",
            text: "Well I guess I'm just going to walk home with your cum dripping out of my pussy. You were amazing, " +
                "I'll see you at home. ",
            button: [
                { chatID: -1, text: "Hahaha ok. Bye. ", callback: "lolax9" }
            ]
        },
        {
            chatID: 50,
            speaker: "cop",
            text: "Hey buddy, the park is closed at night. You need to move along, there's some dangerous folks around here at night.",
            button: [
                { chatID: -1, text: "Yes sir, I'll take off", callback: "leavePark" },
                { chatID: 51, text: "What's a sexy cop like you doing way out here", callback: "" }
            ]
        },
        {
            chatID: 51,
            speaker: "cop",
            text: "What's that supposed to mean? ",
            button: [
                { chatID: 52, text: "Well, I just mean that you're hot. ", callback: "" }
            ]
        },
        {
            chatID: 52,
            speaker: "cop",
            text: "I'm just fine. You need to get or I'm going to put a beating to you! ",
            button: [
                { chatID: 53, text: "...", callback: "" },
                { chatID: -1, text: "Yelp and run away", callback: "leavePark" },
            ]
        },
        {
            chatID: 53,
            speaker: "thinking",
            text: "This isn't working. I'm going to have to do something to get his attention. I know he likes fucking. Maybe " +
                "I need to show him I need to be used like a filthy slut....",
            button: [
                { chatID: -1, text: "[Bend over and show him your bussy]", callback: "c0" },
            ]
        },
        {
            chatID: 54,
            speaker: "thinking",
            text: "He really quiet. I wonder what he's thinking. I hope he doesn't bash me or arrest me. I feel like " +
                "such a ho with my bare ass sticking up. This is getting uncomfortable. ",
            button: [
                { chatID: 55, text: "...", callback: "c1" },
            ]
        },
        {
            chatID: 55,
            speaker: "cop",
            text: "So we got ourselves a little slut in the park don't we. You know I'm going to have to teach you a hard " + 
                "lesson on what we do with people who think indecent exposure is ok. ",
            button: [
                { chatID: 56, text: "sh-sh-should I put my clothes back on?", callback: "" },
            ]
        },
        {
            chatID: 56,
            speaker: "cop",
            text: "Don't you fucking move or I'm going to through your ass in jail. Just stay right there and don't reach " +
                "for anything or I'll crack your head open like a melon. ",
            button: [
                { chatID: 57, text: "GULP", callback: "c2" },
            ]
        },
        {
            chatID: 57,
            speaker: "cop",
            text: "Loose ass pussy. All you white sissy boys try to fetishise this big black cock. But I don't mind. " +
                "You know why I don't mind? ",
            button: [
                { chatID: 58, text: "why?", callback: "c3" },
            ]
        },
        {
            chatID: 58,
            speaker: "cop",
            text: "'Cause I do love fuckin'. Don't care if it's a pussy, mouth, asshole. As long as I get my nut. And I'm " +
                "going to get my nut out of you sissy boy. ",
            button: [
                { chatID: 58, text: "why?", callback: "c4" },
            ]
        },
    ];
    return cArray[chatID];
}