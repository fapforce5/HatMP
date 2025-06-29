//Room name
var room376 = {};
room376.main = function () {
    if (g.pass === "endSleepyTime") {
        g.pass = null;
        nav.bg("376_jail/welcome.webp");
        char.addtime(180);
        gv.set("energy", 10);
        gv.mod("energy", 10);
        chat(8, 376);
    }
    else {
        cl.c.swimsuit = null;
        cl.c.dress = null;
        cl.c.pants = "p";
        cl.c.shirt = "j";
        cl.c.shoes = "d";
        cl.display();
        gv.set("map", 2);
        nav.bg("376_jail/welcome.webp");
        chat(0, 376);
    }
};

room376.btnclick = function (name) {
    switch (name) {
        case "icon_sleep":
            g.pass = 376;
            char.room(28);
            break;
        case "icon_sleep_false":
            nav.kill();
            nav.bg("376_jail/underbed.webp");
            chat(21, 376);
            break;
        case "icon_sit":
            nav.kill();
            nav.bg("376_jail/cell1_" + gender.pronoun("f") + ".webp");
            switch (gv.get("jail")) {
                case 0:
                case 1:
                    chat(10, 376);
                    gv.set("jail", 2);
                    break;
                default:
                    chat(22, 376);
                    break;
            }
            break;
        case "asskiss1":
        case "asskiss2":
        case "asskiss3":
        case "asskiss4":
            nav.modbutton(name, "376_jail/" + name + ".webp", null, "img");
            g.internal++;
            if (g.internal === 4) {
                chat(14, 376);
            }
            break
        case "kissdick":
            nav.modbutton(name, "376_jail/kissdick" + g.internal + ".webp", null, null);
            if (g.internal === 1)
                chat(16, 376);
            if (g.internal === 4)
                chat(17, 376);
            g.internal++;
            break;
        case "cellrape":
            var cellrapeAr = [4, 5, 6, 10];
            if (g.internal > 10) {
                nav.killbutton("cellrape");
                chat(19, 376);
                return;
            }
            if (cellrapeAr.includes(g.internal)) {
                nav.bg("376_jail/cell" + g.internal + "_" + gender.pronoun("f") + ".webp");
            }
            else {
                nav.bg("376_jail/cell" + g.internal + ".webp");
            }
            if (g.internal === 7)
                levels.anal(4, false, "m", true, "!jail1");
            if (g.internal === 9)
                levels.anal(4, false, "m", true, "!jail0");
            g.internal++;
            break;
        default:
            break;
    }
};

room376.chatcatch = function (callback) {
    switch (callback) {
        case "cell3":
            nav.kill();
            nav.bg("376_jail/" + callback + ".webp");
            break;
        case "cell2":
            nav.kill();
            nav.bg("376_jail/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "bail":
            if (gv.get("money") < 300) {
                chat(2, 376);
            }
            else {
                gv.mod("energy", -40);
                char.addtime(180);
                gv.mod("money", -300);
                chat(1, 376);
            }
            break;
        case "jail0":
            nav.bg("376_jail/cell0.webp");
            switch (gv.get("jail")) {
                case 0:
                    gv.set("jail", 1);
                    chat(3, 376);
                    break;
                default:
                    chat(9, 376);
                    break;
            }
            break;
        case "choices":
            sc.select("icon_sleep_false", "376_jail/icon_sleep.webp", 0);
            sc.select("icon_sit", "376_jail/icon_sit.webp", 1);
            break;
        case "leave":
            char.room(0);
            break;
        case "asskiss":
            g.internal = 0;
            nav.kill();
            nav.bg("376_jail/asskiss0.webp");
            nav.button({
                "type": "kiss",
                "name": "asskiss1",
                "left": 1420,
                "top": 273,
                "width": 400,
                "height": 400,
                "image": "376_jail/cheek.webp"
            }, 376);
            nav.button({
                "type": "kiss",
                "name": "asskiss2",
                "left": 944,
                "top": 274,
                "width": 400,
                "height": 400,
                "image": "376_jail/cheek.webp"
            }, 376);
            nav.button({
                "type": "kiss",
                "name": "asskiss3",
                "left": 478,
                "top": 290,
                "width": 400,
                "height": 400,
                "image": "376_jail/cheek.webp"
            }, 376);
            nav.button({
                "type": "kiss",
                "name": "asskiss4",
                "left": 20,
                "top": 299,
                "width": 400,
                "height": 400,
                "image": "376_jail/cheek.webp"
            }, 376);
            break;
        case "kissdick":
            nav.kill();
            g.internal = 1;
            nav.bg("376_jail/kissdick0.webp");
            nav.button({
                "type": "kiss",
                "name": "kissdick",
                "left": 798,
                "top": 101,
                "width": 357,
                "height": 879,
                "image": "376_jail/kissdick.webp"
            }, 376);
            break;
        case "cell4":
            g.internal = 5;
            nav.bg("376_jail/cell4_" + gender.pronoun("f") + ".webp");
            nav.next("cellrape");
            break;
        case "uncower":
            room376.btnclick("icon_sit");
            break;
        case "sleep":
            nav.kill();
            nav.bg("376_jail/lightsout_" + gender.pronoun("f") + ".webp");
            sc.select("icon_sleep", "376_jail/icon_sleep.webp", 0);
            break;
        default:
            break;
    }
};

room376.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "cop2",
            text: "Ok you little weird-o. hopefully a few nights in jail will set " +
                "you straight, unless you want to pay me $300 'bail money'. ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "jail0" },
                { chatID: -1, text: "Oh! Here's $300!", callback: "bail" },
            ]
        },
        {
            chatID: 1,
            speaker: "cop2",
            text: "Well, well, well. Lucky you. I guess you've learned your lesson. ",
            button: [
                { chatID: -1, text: "Sweet!!", callback: "leave" }
            ]
        },
        {
            chatID: 2,
            speaker: "cop2",
            text: "Do you think I'm stuipid? Don't answer that. You don't have $300! ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "jail0" }
            ]
        },
        {
            chatID: 3,
            speaker: "!jail0",
            text: "Well well well. Looks like we got a new fish. What you in for? ",
            button: [
                { chatID: 4, text: "I uhhh...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "!jail1",
            text: "I don't matter why you here. New fish always lie about why they're here. " +
                "what matters is you know the rules of this cell. Since we got here first we " +
                "get to make the rules. Rule #1, you have to sit to piss. We get to stand. We " +
                "don't want to step in yo' piss. ",
            button: [
                { chatID: 5, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "!jail0",
            text: "Rule #2, I get the bottom bunk, he gets the top and no one gets to sleep " +
                "on the bench. If I feel like sitting on the bench in the middle of the night " +
                "I don't want to have to move you. ",
            button: [
                { chatID: 6, text: "Oh. Where do I sleep?", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "!jail0",
            text: "I don't care, just not on the bench. ",
            button: [
                { chatID: 7, text: "*sigh*", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "!jail1",
            text: "Now that you know the rules don't make a reason for us to create " +
                "new rules. Nothing pisses us off more than having to make new rules. ",
            button: [
                { chatID: -1, text: "Yes sir", callback: "choices" }
            ]
        },
        {
            chatID: 8,
            speaker: "cop2",
            text: "Wake up. Hopefully you've learned your lesson, don't come back. ",
            button: [
                { chatID: -1, text: "Sweet!!", callback: "leave" }
            ]
        },
        {
            chatID: 9,
            speaker: "!jail1",
            text: "Well, look who's back ",
            button: [
                { chatID: -1, text: "*gulp*", callback: "choices" }
            ]
        },
        {
            chatID: 10,
            speaker: "!jail0",
            text: "Ya know, a tiny " +
                "little thing like yourself might get broken in another cell. Ya see, we " +
                "don't like it when someone just bardges there way into our home, and " +
                "you barged your way into our home. ",
            button: [
                { chatID: 11, text: "I was put here", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "!jail1",
            text: "Don't care. We were just relaxing, enjoying ourselves, and you came right " +
                "into our home. Even brought that fat pig with you. I hate looking at that fat " +
                "pig. Just thinking about him makes me mad. Makes me want to break things. ",
            button: [
                { chatID: 13, text: "I'm so sorry, I didn't mean to", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "!jail0",
            text: "Sorry? You shoould be thankful we're not breaking your head on that " +
                "toilet right now. I don't think you're thankful to us for letting you " +
                "in our home. ",
            button: [
                { chatID: 13, text: "I am thankful. Thank you, thank you.", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "!jail1",
            text: "Words don't mean shit in here. Show us your thankful. Show us by kissing " +
                "our black asses. One kiss per cheek. Pucker up buttercup else we " +
                "wreck that pretty little face o' yours.",
            button: [
                { chatID: -1, text: "oh", callback: "asskiss" }
            ]
        },
        {
            chatID: 14,
            speaker: "!jail1",
            text: "I knew you was a li'l bitch!",
            button: [
                { chatID: 15, text: "...", callback: "kissdick" }
            ]
        },
        {
            chatID: 15,
            speaker: "!jail0",
            text: "Let's see much of a bitch " + gender.pronoun("he") + " is. " +
                "Kiss ma dick. Tell me how much " +
                "you love it bitch!",
            button: [
                { chatID: -1, text: "*whimper*", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "!jail0",
            text: "That's my bitch. Appreciate that big black cock. Keep kissing down " +
                "my shaft. Show my cock how thankful you are. ",
            button: [
                { chatID: -1, text: "[Go back to thanking his cock]", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "!jail0",
            text: "MMmmmm yeah. I knew you was a bitch as soon as you walked in. ",
            button: [
                { chatID: 18, text: "mmmmm", callback: "cell3" }
            ]
        },
        {
            chatID: 18,
            speaker: "!jail1",
            text: "I think that ass needs to be thankin' us too! I do love me some " +
                "sissy bussy! ",
            button: [
                { chatID: -1, text: "Wha? No! ", callback: "cell4" }
            ]
        },
        {
            chatID: 19,
            speaker: "!jail0",
            text: "Hey man, you know the best thing about cumming in a sissy is? The " +
                "clean up. Bitches don't suck your dick after your shoved it up their " +
                "ass. Sure sum may suck it a little, but guarantee, a sissy will be throat " +
                "deep after you cum in them! ",
            button: [
                { chatID: 20, text: "*dick sucking noises*", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "!jail1",
            text: "Fo' sho. I'm going to catch some sleep. I better not hear any noises " +
                "coming from you, sissy, or I'm going to find out if I can stomp your balls " +
                "with my foot up yo ass. ",
            button: [
                { chatID: -1, text: "*dick sucking noises*", callback: "sleep" }
            ]
        },
        {
            chatID: 21,
            speaker: "!jail0",
            text: "What are you doing under the bed? It's not bed time yet. Get out of there and " +
                "sit with us!",
            button: [
                { chatID: -1, text: "*whimper*", callback: "uncower" }
            ]
        },
        {
            chatID: 22,
            speaker: "!jail0",
            text: "Well, well, well, if isn't our favorite cum dump. You come back to " +
                "to worship our cocks baby girl?",
            button: [
                { chatID: 15, text: "What can I say, I love the cock", callback: "kissdick" }
            ]
        },
        {
            chatID: 22,
            speaker: "!jail0",
            text: "Well, well, well, if isn't our favorite cum dump. You come back to " +
                "to worship our cocks baby girl? You know what to do.",
            button: [
                { chatID: -1, text: "What can I say, I love the cock", callback: "kissdick" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
