//Room name
var room752 = {};
room752.main = function () {
    if (!missy.cases[8].complete && !inv.has("locket")) {
        nav.bg("752_whore/bg_locket.jpg");
    }
    var btnList = [
        {
            "type": "btn",
            "name": "whore",
            "left": 676,
            "top": 277,
            "width": 644,
            "height": 729,
            "image": "752_whore/whore.png"
        }
    ];
    var navList = [750, 0];
    $.each(btnList, function (i, v) {
        nav.button(v, 752);
    });
    nav.buildnav(navList);
};

room752.btnclick = function (name) {
    switch (name) {
        case "whore":
            var activeCase = missy.activecase();
            if (!activeCase.isComplete && activeCase.caseId === 8) {
                sc.select("whore_dick", "752_whore/whore_dick.png", 0);
                sc.select("whore_chat", "752_whore/whore_chat.png", 1);
                sc.select("whore_locket", "752_whore/whore_locket.png", 2);
                sc.selectCancel("whore_cancel", 3);
            }
            else {
                sc.select("whore_dick", "752_whore/whore_dick.png", 0);
                sc.select("whore_chat", "752_whore/whore_chat.png", 1);
                sc.selectCancel("whore_cancel", 2);
            }
            break;
        case "whore_chat":
            room752.btnclick("whore_cancel");
            chat(0, 752);
            break;
        case "whore_cancel":
            nav.killbutton("whore_locket");
            nav.killbutton("whore_dick");
            nav.killbutton("whore_chat");
            nav.killbutton("whore_cancel");
            break;
        case "whore_dick":
            room752.btnclick("whore_cancel");
            if (cl.c.chastity !== null)
                chat(1, 752);
            else if (gv.get("money") < 75)
                chat(3, 752);
            else if (gender.isCockTooSmallForSex())
                chat(2, 752);
            else
                chat(4, 752);
            break;
        case "fuck1":
            nav.killbutton("fuck1");
            nav.killbutton("whore");
            nav.bg("752_whore/fuck1.jpg");
            nav.next("fuck2");
            break;
        case "fuck2":
            nav.killbutton("fuck2");
            levels.fuckpussy("whore");
            if (!missy.cases[8].complete)
                nav.bg("752_whore/bg_locket.jpg");
            else
                nav.bg("752_whore/bg.jpg");
            nav.button({
                "type": "btn",
                "name": "whore",
                "left": 676,
                "top": 277,
                "width": 644,
                "height": 729,
                "image": "752_whore/whore1.png"
            }, 752);
            chat(6, 752);
            break;
        case "whore_locket":
            room752.btnclick("whore_cancel");
            if (missy.get("reusableCaseCounter") === 0)
                chat(7, 752);
            else
                chat(16, 752);
            break;
        case "charisma_win":
            levels.mod("charisma", 25, 999);
            chat(12, 752);
            break;
        case "charisma_lose":
            levels.mod("charisma", 15, 999);
            missy.set("reusableCaseCounter", 1);
            chat(15, 752);
            break;
        default:
            break;
    }
};

room752.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(752);
            break;
        case "fuck":
            gv.mod("money", -75);
            break;
        case "fuck0":
            nav.killall();
            nav.bg("752_whore/whore1.gif");
            nav.next("fuck1");
            break;
        case "makeNav":
            setTimeout(function () {
                nav.buildnav([750, 0])
            }, 100);
            break;
        case "pay":
            if (gv.get("money") < 300) {
                missy.set("reusableCaseCounter", 1);
                chat(9, 752);
            }
            else {
                chat(10, 752);
            }
            break;
        case "getlocket":
            levels.mod("pi", 100, 999);
            inv.add("locket");
            missy.set("activeCaseComplete", 1);
            nav.bg("752_whore/bg.jpg");
            break;
        case "getlocketPanties":
            levels.mod("pi", 100, 999);
            inv.add("locket");
            missy.set("activeCaseComplete", 1);
            nav.killall();
            nav.bg("750_homeless/bg.jpg", "750_homeless/bgnight.jpg");
            if (g.internal === "w")
                chat(24, 752);
            else if (g.internal === "missy") {
                if (cl.hasClothing("panties", "w"))
                    chat(25, 752);
                else
                    chat(26, 752);
            }
            else
                chat(27, 752);
            break;
        case "charisma":
            charisma.init(8, "charisma_win", "charisma_lose", 752);
            break;
        case "underwearcheck":
            if (cl.c.panties === null)
                chat(19, 752);
            else
                chat(18, 752);
            break;
        case "fail":
            missy.set("activeCaseComplete", 2);
            nav.killall();
            nav.bg("750_homeless/bg.jpg", "750_homeless/bgnight.jpg");
            break;
        case "leave":
            char.room(750);
            break;
        case "givePanties":
            g.internal = cl.c.panties;
            var panties = cl.where("panties", cl.c.panties);
            cl.list[panties].inv = false;
            nav.button({
                "type": "img",
                "name": "panties",
                "left": 830,
                "top": 800,
                "width": 220,
                "height": 180,
                "image": "8_wardrobe/icons/" + cl.list[panties].img
            }, 752);
            cl.c.panties = null;
            break;
        case "home":
            g.pass = 10;
            char.room(8);
            break;
        default:
            break;
    }
};

room752.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "whore",
            text: "So are you the pizza delivery man, or did you come fill my pussy up with your cum? ",
            button: [
                { chatID: -1, text: "Oh uhh, hahaha", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "whore",
            text: "Look. I'm a whore, not a therapist. I'm not goint to talk about your dick being all locked up. If you want " +
                "to fuck, take that thing off and come back. ",
            button: [
                { chatID: -1, text: "Oh uhh, hahaha", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "whore",
            text: "Look. I know I'm a big girl. There's no way that tiny little pecker is going to be able to reach inside me. " +
                "I guess I can give you a hand job if you want. ",
            button: [
                { chatID: -1, text: "future release [Let me know if you get this]", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "whore",
            text: "Sure. I'll fuck you. $75. ",
            button: [
                { chatID: -1, text: "Oh. I don't have enough money. ", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "whore",
            text: "Oh yes. I love your cock. I need it deep in my wet horny pussy. Please baby feed me your dick. It'll cost " +
                "$75 to make me scream your name. ",
            button: [
                { chatID: 5, text: "Fuck yeah! Here's $75", callback: "fuck" },
                { chatID: -1, text: "Oh. I changed my mind. ", callback: "reset" }
            ]
        },
        {
            chatID: 5,
            speaker: "whore",
            text: "Strip off those clothes baby and lay down. I'm going to make you feel really good. ",
            button: [
                { chatID: -1, text: "[Strip and lay down]", callback: "fuck0" }
            ]
        },
        {
            chatID: 6,
            speaker: "whore",
            text: "Hahaha. Look at my happy pussy. Come back anytime you need those balls drained! I love being filled with cum. ",
            button: [
                { chatID: -1, text: "For sure!", callback: "makeNav" }
            ]
        },
        {
            chatID: 7,
            speaker: "me",
            text: "Hi. That really is a nice looking locket on your table. ",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "whore",
            text: "I fucking hate that thing. It's so stupid. You can have it for $300. It's what my client owes me. ",
            button: [
                { chatID: -1, text: "Pay her $300", callback: "pay" },
                { chatID: 11, text: "Talk her into getting it cheaper. " + charisma.getStats(8).txt, callback: "" },
                { chatID: 17, text: "I don't have that much money. Is there something else I could do?", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "whore",
            text: "If there's one thing a whore knows, it's money. This isn't $300. ",
            button: [
                { chatID: -1, text: "Crap. My mistake. ", callback: "reset" },
            ]
        },
        {
            chatID: 10,
            speaker: "whore",
            text: "Cool Here's your locket. If you have any more money you can fuck my pussy. I'll make you cum so good your balls " +
                "will shrink! ",
            button: [
                { chatID: -1, text: "Oh yeah. I want tiny balls. ", callback: "getlocket" },
            ]
        },
        {
            chatID: 11,
            speaker: "me",
            text: "To be honest that locket is my dear departed grandmother's It was taken from me by this terrible dirty " +  
                "old man. When I went to get it back he punched me in my face and told me it was here. I want nothing else " +
                "than to get it back to keep her memory. ",
            button: [
                { chatID: -1, text: "[Roll for charisma]", callback: "charisma" },
            ]
        },
        {
            chatID: 12,
            speaker: "whore",
            text: "That sounds like the asshole I got it from. What a piece of shit he was! Let me tell you something, that " +
                "man came in here and asked for anal. I told him I don't do that. Hurts too much, ya know. Also since I live in " +
                "a tent I can't keep it clean and I don't want shit all over. So I just don't do it. ",
            button: [
                { chatID: 13, text: "...", callback: "" },
            ]
        },
        {
            chatID: 13,
            speaker: "whore",
            text: "So he says, how about for $500. I said no, but offered this locket too. I figure I could give it to a friend of " +
                "mine that was looking for something like that, so I said  ok, just be gentle. So he just shoves it in! I told him " +
                "to pull it out, 'cause it hurt too much, but he laughs and says I need to stretch, so he jams his whole ass hand " +
                "up my ass. Really rips me in half, ya know. I scream and Dale comes running over. Dale's a really cool guy. He " +
                "reaches in his pocket and throws sand in his eyes and kicks him out. Told him if he catches him here again he'll " +
                "kill him. ",
            button: [
                { chatID: 14, text: "wow", callback: "" },
            ]
        },
        {
            chatID: 14,
            speaker: "whore",
            text: "Yeah. I told Dale I'll give him freebies anytime he wants, but he said he doesn't put his sperm anywhere " +
                "so the government can't track him or something. But yeah. You can have the locket. Just don't give it back to " +
                "him. Fuck that guy! ",
            button: [
                { chatID: -1, text: "I will and thanks so much!", callback: "getlocket" },
            ]
        },
        {
            chatID: 15,
            speaker: "whore",
            text: "No one gets lied to more than a whore. I can smell shit from a mile away. Don't fucking lie to me! ",
            button: [
                { chatID: -1, text: "Oh, sorry ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "whore",
            text: "Since you already fucking lied to me. I don't think I want to give you this locket for any amount of money. ",
            button: [
                { chatID: 17, text: "Isn't there something I could do? ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "whore",
            text: "I'll tell you what. I'll give you once chance to get this locket. Give me the underwear you have on right now " +
                "and I'll give you the locket. This is a one time deal. I know you're wearing your favorite pair and I don't want " +
                "you to go changing them on me. Underwear or nothing! ",
            button: [
                { chatID: 18, text: "My underwear? ", callback: "underwearcheck" },
            ]
        },
        {
            chatID: 18,
            speaker: "whore",
            text: "Yeah. I have a real freak of a client that comes in and buys my panties. The dirtier the better, and I'm totally " +
                "out of panties. So gimmie yours or no deal! ",
            button: [
                { chatID: 23, text: "Fine. Here's my underwear", callback: "givePanties" },
                { chatID: 20, text: "I'm not giving you my underwear!", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "whore",
            text: "Yeah. I have a real freak of a client that comes in and buys my panties. The dirtier the better, and I'm totally " +
                "out of panties. So gimmie yours or no deal! ",
            button: [
                { chatID: 20, text: "I'm not wearing underwear. ", callback: "" },
            ]
        },
        {
            chatID: 20,
            speaker: "whore",
            text: "Fine! Then you're never going to get this locket. You can fuck right off.  ",
            button: [
                { chatID: 21, text: "Awww crap. Isn't there anything I could do? ", callback: "" },
            ]
        },
        {
            chatID: 21,
            speaker: "whore",
            text: "No! I said to fuck off. Get out of my tent loser!  ",
            button: [
                { chatID: 22, text: "Crap crap crap", callback: "fail" },
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Oh fuck. I really fucked that up! Now I have to go back and tell Missy I failed. That's going to be the " +
                "worst part. She's going to be totally pissed. I guess I get to keep my panties, but was it worth it?",
            button: [
                { chatID: -1, text: "...", callback: "leave" },
            ]
        },
        {
            chatID: 23,
            speaker: "whore",
            text: "Sweet! The guy is a real pervert, but he pays well and is one of my regulars. Here's your locket. ",
            button: [
                { chatID: -1, text: "Thanks. See ya", callback: "getlocketPanties" },
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "Fuck! I lost " + sc.n("lola") + "'s panties! Even worse some guy is going to be sniffing them and jacking off " +
                "into her panties. I better get home and put on some new underwear. I know it's wrong, but maybe I could steal " +
                "another pair of her panties. But this time I won't give them away. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
        {
            chatID: 25,
            speaker: "thinking",
            text: "Fuck! I lost Missy's panties! Even worse some guy is going to be sniffing them and jacking off " +
                "into her panties. I better get home and put on some new underwear. I know it's wrong, but maybe I could steal " +
                "another pair of her panties. But this time I won't give them away. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
        {
            chatID: 26,
            speaker: "thinking",
            text: "Fuck! I lost Missy's panties! Even worse some guy is going to be sniffing them and jacking off " +
                "into her panties. Maybe I can replace them by stealing a pair of panties from " + sc.n("lola") + ". " +
                "I think I'll check her dirty laundry. I better get home and put on some new underwear. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
        {
            chatID: 27,
            speaker: "thinking",
            text: "Some dude's going to be sniffing and jacking off into my underwear. That's pretty gross.  " +
                "I better get home and put on some new underwear. ",
            button: [
                { chatID: -1, text: "...", callback: "home" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};