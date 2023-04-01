//Room name
var room213 = {};
room213.main = function () {
    var thisPink = g.get("pink");
    if (thisPink === 0)
        chat(0, 213);
    else if (g.get("energy") < 30)
        chat(24, 213);
    else {
        nav.button({
            "type": "btn",
            "name": "start",
            "left": 574,
            "top": 39,
            "width": 537,
            "height": 1041,
            "image": "213_pink/start.png",
            "title": "Start Work"
        }, 213);
        nav.buildnav([214, 215, 216, 0]);
    }
};

room213.btnclick = function (name) {
    switch (name) {
        case "start":
            nav.killbutton("start");
            chat(7, 213);
            break;
        //case "gamegirl":
        //    nav.killall();
        //    nav.bg("213_pink/gmw1.jpg");
        //    chat(21, 213);
        //    break;
        case "gw3":
            nav.killall();
            nav.bg("213_pink/gw3.jpg");
            chat(22, 213);
            break;
        //case "gameboy":
        //    nav.killall();
        //    nav.bg("213_pink/gm1.jpg");
        //    chat(25, 213);
        //    break;
        case "chatcum":
            nav.killall();
            nav.bg("213_pink/chat2.jpg");
            chat(37, 213);
            break;
        case "cleancum":
            if (g.internal === 3) {
                nav.killbutton("cleancum");
                nav.bg("213_pink/clean3.jpg");
                chat(35, 213);
            }
            else {
                nav.modbutton("cleancum", "213_pink/cum" + g.internal + ".png", null, null);
                g.internal++;
            }
            break;
        default:
            break;
    }
};

room213.chatcatch = function (callback) {
    switch (callback) {
        case "game":
            nav.bg("214_pink/game.jpg");
            break;
        case "hallway":
            nav.bg("213_pink/hall.jpg");
            break;
        case "hole":
            nav.bg("213_pink/hole.jpg");
            break;
        case "parlourx":
            g.mod("pink", 1);
            nav.bg("213_pink/bg.jpg");
            break;
        case "endparlour":
            g.mod("money", 50);
            g.mod("phum", 1);
            g.mod("pink", 1);
            char.addtime(120);
            g.mod("energy", -30);
            char.room(213);
            break;
        case "gamestart":
            g.internal = 0;
            nav.bg("214_pink/game.jpg");
            break;
        case "game0":
            //nav.killall();
            //nav.bg("213_pink/gm0.jpg");
            //nav.button({
            //    "type": "btn",
            //    "name": "gamegirl",
            //    "left": 1126,
            //    "top": 0,
            //    "width": 794,
            //    "height": 1080,
            //    "image": "213_pink/gm0_woman.png",
            //    "title": "Girl"
            //}, 213);
            //nav.button({
            //    "type": "btn",
            //    "name": "gameboy",
            //    "left": 119,
            //    "top": 0,
            //    "width": 1064,
            //    "height": 1080,
            //    "image": "213_pink/gm0_man.png",
            //    "title": "Boy"
            //}, 213);
            break;
        case "gw2":
            nav.bg("213_pink/gw2.jpg");
            nav.button({
                "type": "hand",
                "name": "gw3",
                "left": 639,
                "top": 37,
                "width": 430,
                "height": 1005,
                "image": "213_pink/gw2.png",
                "title": "Massage Feet"
            }, 213);
            break;
        case "gw4":
            g.mod("energy", -15);
            g.mod("phum", 1);
            g.mod("money", 25);
            nav.bg("214_pink/game.jpg");
            char.room(214);
            break;
        case "gm2":
            nav.killall();
            nav.bg("213_pink/gm2.jpg");
            break;
        case "gm3":
            nav.bg("213_pink/gm3.jpg");
            break;
        case "gmend":
            g.mod("energy", -15);
            g.mod("giveBoobJob", 1);
            g.mod("loadSwollowed", 1);
            g.mod("money", 25);
            char.room(214);
            break;
        case "chat0":
            nav.killall();
            nav.bg("213_pink/chat0.jpg");
            break;
        case "chat1":
            nav.bg("213_pink/chat1.jpg");
            break;
        case "chat2":
            nav.button({
                "type": "btn",
                "name": "chatcum",
                "left": 146,
                "top": 78,
                "width": 352,
                "height": 289,
                "image": "213_pink/chatcum.png",
                "title": "Cum"
            }, 213);
            break;
        case "chatEnd":
            g.mod("energy", -30);
            g.mod("receiveAnalMale", 1);
            g.mod("creamPied", 1);
            g.mod("sissygasm", 1);
            g.mod("money", 50);
            char.room(214);
            break;
        
        case "reset":
            char.addtime(20);
            char.room(213);
            break;
        case "end":
            char.addtime(60);
            char.room(0);
            break;
        //case "private0":
        //    g.sumSissy();
        //    var points = (g.sp.total - g.get("usedSissyPoints"));
        //    if (points < 500)
        //        chat(38, 213);
        //    break;
        //case "private1":
        //    nav.killall();
        //    nav.bg("215_pink/private1.jpg");
        //    break;
        //case "private2b":
        //    nav.bg("213_pink/private2b.jpg");
        //    g.internal = 1;
        //    break;
        //case "private2a":
        //    nav.bg("213_pink/private2a.jpg");
        //    g.internal = 0;
        //    break;
        //case "private3":
        //    if (g.internal === 1) {
        //        chat(42, 213);
        //    }
        //    else {
        //        g.internal = Math.floor(Math.random() * 3);
        //        if (g.internal === 0) {
        //            nav.button({
        //                "type": "img",
        //                "name": "f",
        //                "left": 317,
        //                "top": 222,
        //                "width": 409,
        //                "height": 858,
        //                "image": "213_pink/pri0.png"
        //            }, 213);
        //        }
        //        else if (g.internal === 1) {
        //            nav.button({
        //                "type": "img",
        //                "name": "f",
        //                "left": 327,
        //                "top": 213,
        //                "width": 442,
        //                "height": 867,
        //                "image": "213_pink/pri1.png"
        //            }, 213);
        //        }
        //        else if (g.internal === 2) {
        //            nav.button({
        //                "type": "img",
        //                "name": "f",
        //                "left": 56,
        //                "top": 163,
        //                "width": 856,
        //                "height": 917,
        //                "image": "213_pink/pri2.png"
        //            }, 213);
        //        }
        //        chat(43, 213);
        //    }
        //    break;
        //case "privateReset":
        //    nav.killbutton("f");
        //    char.addtime(30);
        //    break;
        case "resetGameRoom":
            char.room(214);
            break;
        default:
            if (callback.startsWith("par"))
                nav.bg("213_pink/" + callback + ".jpg");
            break;
    }
};

room213.chat = function (chatID) {
    if (chatID === 100) {
        return;

    }
    var cArray = [
        {
            chatID: 0,
            speaker: "p",
            text: "Welcome to the Pink Room. The most exclusive place in the entire city. Let me give you a short tour. ",
            button: [
                { chatID: 1, text: "ok!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "p",
            text: "This is the parlour. Many of my clients like to relax and network with other like minded " +
                "busy professionals in our area. I want a girl out here to serve drinks to our guests " +
                "while they wait, but I'm always so short staffed. It's a great way to start working here. ",
            button: [
                { chatID: 2, text: "Sounds like fun. ", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "p",
            text: "Yes. Just know that many of our cliets can get a little handsy. It can be surprising for a new girl. " +
                "Now follow me to the game room. ",
            button: [
                { chatID: 3, text: "[Follow her]", callback: "game" }
            ]
        },
        {
            chatID: 3,
            speaker: "p",
            text: "This is the game room. Some of our patrons like to socialize while getting serviced. There's a few " +
                "young gentlemen that spend more time here than at their own home. Let's continue the tour. ",
            button: [
                { chatID: 4, text: "[Follow her]", callback: "hallway" }
            ]
        },
        {
            chatID: 4,
            speaker: "p",
            text: "These are the rooms. Only the best get a room here. As you can see girls and boys get a steady run " +
                "of clients. The last location I'm going to show you is a favorite of the local perverts. Come. ",
            button: [
                { chatID: 5, text: "[Follow her]", callback: "hole" }
            ]
        },
        {
            chatID: 5,
            speaker: "p",
            text: "This is the glory ho wall. Only the sluttiest of sluts can serve here. Sluts that live by the rule " +
                "that the client can do anything they want to your holes. Let's return back to the main parlour.",
            button: [
                { chatID: 6, text: "[Return to the main parlour]", callback: "parlourx" }
            ]
        },
        {
            chatID: 6,
            speaker: "p",
            text: "Now that you've viewed each room, I can't have an awkward virgin working in all the room. I use your " +
                "Sissy points to determin your worth. The more sissy points you have the more options for work. ",
            button: [
                { chatID: 7, text: "ok", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "p",
            text: "So where do you want to work today? ",
            button: [
                { chatID: 9, text: "Parlour Girl", callback: "" },
                { chatID: -1, text: "Nothing", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "p",
            text: "So where do you want to work today? ",
            button: [
                { chatID: 20, text: "Game Room Entertainment", callback: "gamestart" },
                { chatID: -1, text: "Private Room", callback: "private0" },
                { chatID: -1, text: "Wall", callback: "" },
                { chatID: 7, text: "Back", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "p",
            text: "Oh good. Let's get you in costume and set up. ",
            button: [
                { chatID: 10, text: "Sweet!", callback: "par1" }
            ]
        },
        {
            chatID: 10,
            speaker: "p",
            text: "There we go. Your job is to serve drinks to our guests as they arrive. I suppose you need a fresh " +
                "tray of drinks. ",
            button: [
                { chatID: 11, text: "HHhmm", callback: "par2" }
            ]
        },
        {
            chatID: 11,
            speaker: "p",
            text: "Ok. Now don't drop the tray, I don't want stains on my 19th centure hardwood floors. ",
            button: [
                { chatID: 12, text: "uuuuUMMmmMMmm", callback: "par3" }
            ]
        },
        {
            chatID: 12,
            speaker: "thinking",
            text: "Well this is awkward. What am I supposed to do? Do I just stand here? I can't talk because as soon " +
                "as I open my mouth the drink will go everywhere. ",
            button: [
                { chatID: 13, text: "...", callback: "par4" }
            ]
        },
        {
            chatID: 13,
            speaker: "random",
            text: "Hi. Do you like your pussy eaten? I love to eat pussy. I bet your pussy smells like the lavender fields " +
                "of the Provence region in southern France. I go there often. You should join me and be my personal fuck " +
                "toy. I could show you this nice little village with a lovely cafe that makes a terrific tomato bisque. ",
            button: [
                { chatID: 14, text: "MMmhHHmmmm", callback: "par5" }
            ]
        },
        {
            chatID: 14,
            speaker: "thinking",
            text: "I didn't ever think that guy would stop talking. Who tries to have a conversation with someone " +
                "with their mouth full? ...Huh... Look at those two. They're totally gunna fuck right here.",
            button: [
                { chatID: 15, text: "...", callback: "par6" }
            ]
        },
        {
            chatID: 15,
            speaker: "thinking",
            text: "Oh hahaha. He totally came all over her before they could fuck. What a loser! Oh well, still got " +
                "a nut I guess. ",
            button: [
                { chatID: 16, text: "...", callback: "par7" }
            ]
        },
        {
            chatID: 16,
            speaker: "bimbo",
            text: "Hey you. I could use some of that wine! Why do so many men ejaculate as soon as they see me naked? " +
                "I'm here to get fucked, not dissapointed. At least there's more dicks inside. Later cutie.",
            button: [
                { chatID: 17, text: "HmmmUmmm", callback: "par8" }
            ]
        },
        {
            chatID: 17,
            speaker: "random",
            text: "Wine with a slut; my favorite combination. Come here girl, I want to play with those holes. ",
            button: [
                { chatID: 18, text: "Hmmm", callback: "par9" }
            ]
        },
        {
            chatID: 18,
            speaker: "random",
            text: "Oh.. You're that kind of girl. I can still use that hole of yours. You've never had a cock " +
                "as fat as mine in you. I'll see you inside if you want my cum leaking down your leg. ",
            button: [
                { chatID: 19, text: "mmMmmmm", callback: "par10" }
            ]
        },
        {
            chatID: 19,
            speaker: "p",
            text: "You did so well today and gave out all the dirnks. No one spends more money than drunks. " +
                "Here's $50 for your time, come back anytime. ",
            button: [
                { chatID: -1, text: "MMMmmmmUUummm", callback: "endparlour" }
            ]
        },
        {
            chatID: 20,
            speaker: "thinking",
            text: "Should I visit the gamers or hang out back here? ",
            button: [
                { chatID: -1, text: "Visit the gamers", callback: "game0" },
                { chatID: 28, text: "Chat with the group watching", callback: "chat0" }
            ]
        },
        {
            chatID: 21,
            speaker: "random",
            text: "Hay! I'm glad you stopped by. I was just thinking I needed someone to help me with my sore feet. " +
                "I need you to rub them?",
            button: [
                { chatID: -1, text: "Sure!", callback: "gw2" }
            ]
        },
        {
            chatID: 22,
            speaker: "random",
            text: "MMmmmmm. Yeah. Right there.... mmmmmmmmmmmmm. ",
            button: [
                { chatID: 23, text: "[Keep rubbing]", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "random",
            text: "That's a good girl. Thanks so much. ",
            button: [
                { chatID: -1, text: "My pleasure", callback: "gw4" }
            ]
        },
        {
            chatID: 24,
            speaker: "p",
            text: "You look tired. Get more energy before coming back. ",
            button: [
                { chatID: -1, text: "Oh. ok.", callback: "end" }
            ]
        },
        {
            chatID: 25,
            speaker: "random",
            text: "Nice. Start sucking and don't get in my way, I'm totally winning! ",
            button: [
                { chatID: 26, text: "MMmmmm", callback: "gm2" }
            ]
        },
        {
            chatID: 26,
            speaker: "random",
            text: "Fuck yeah. Suck it! I'm totally gunna cum in your mouth when I give the kill shot!",
            button: [
                { chatID: 27, text: "*Slup* *suck*", callback: "gm3" }
            ]
        },
        {
            chatID: 27,
            speaker: "random",
            text: "Oh fuck! Best head shot ever! Now swollow it! ",
            button: [
                { chatID: -1, text: "*gurgle* *swollow*", callback: "gmend" }
            ]
        },
        {
            chatID: 28,
            speaker: "me",
            text: "I couldn't help but notice your dick is sticking out. Also it's very erect. ",
            button: [
                { chatID: 29, text: "...", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "random",
            text: "I don't know why, but when ever I watch someone playing video games I get really excited. " +
                "I love this game and these two ARE JUST SO AWESOME! Wathcing them makes my dick is so hard it hurts! " +
                "Did you see that awesome move Javier did. Pure magic.",
            button: [
                { chatID: 30, text: "So.... do you want me to ride that?", callback: "" },
                { chatID: -1, text: "Ok, cool. Loser.", callback: "resetGameRoom" }
            ]
        },
        {
            chatID: 30,
            speaker: "random",
            text: "That would be awesome! Hop on up!",
            button: [
                { chatID: 31, text: "Yea!", callback: "chat1" }
            ]
        },
        {
            chatID: 31,
            speaker: "random",
            text: "Oh fuck! This is why I came here! Great games and easy sluts! You're the best, around.",
            button: [
                { chatID: -1, text: "Oh fuck my ass", callback: "chat2" }
            ]
        },
        {
            chatID: 32,
            speaker: "thinking",
            text: "They really are just absolutly covered in cum. Oh well, need to get to work.",
            button: [
                { chatID: 33, text: "...", callback: "clean1" }
            ]
        },
        {
            chatID: 33,
            speaker: "thinking",
            text: "These girls must be busy! It seems like such a waste to just put it in the cum bucket. I wonder if " +
                "she'll mind if I have a little taste? Maybe I should ask first?",
            button: [
                { chatID: 34, text: "Can I eat the cum out of your pussy?", callback: "clean2" },
                { chatID: 36, text: "[Just finish cleaning]", callback: "clean4a" }
            ]
        },
        {
            chatID: 34,
            speaker: "random",
            text: "Lick away. My pussy needs a tongue after all that cock!",
            button: [
                { chatID: -1, text: "MMmmmmm", callback: "" }
            ]
        },
        {
            chatID: 35,
            speaker: "thinking",
            text: "I'm so full! There's just so much cum!",
            button: [
                { chatID: 36, text: "*Gulp*", callback: "clean4" }
            ]
        },
        {
            chatID: 36,
            speaker: "p",
            text: "Everyone's all clean! ",
            button: [
                { chatID: -1, text: "[Return to the parlor]", callback: "reset" }
            ]
        },
        {
            chatID: 37,
            speaker: "random",
            text: "You're my favorite slut! Come back and take my cock anytime!",
            button: [
                { chatID: -1, text: "[Return to the parlor]", callback: "chatEnd" }
            ]
        }
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};