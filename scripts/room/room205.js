//Chastity
var room205 = {};
room205.main = function () {
    var chastity = missy.get("chastity");
    if (chastity === 0)
        chat(0, 205);
    else
        chat(21, 205);
};

room205.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room205.chatcatch = function (callback) {
    switch (callback) {
        case "chastity0Dom":
            missy.mod("mood", -20);
            levels.mod("dom", 40, 999);
            break;
        case "chast0_0":
            nav.killall();
            gv.mod("arousal", 100);
            nav.bg("205_chastity/chast0_0.jpg");
            break;
        case "chast0_1":
            nav.bg("205_chastity/chast0_1.jpg");
            break;
        case "chast0_2":
            nav.bg("205_chastity/chast0_1.jpg");
            nav.button({
                "type": "img",
                "name": "chast0_2",
                "left": 1238,
                "top": 290,
                "width": 500,
                "height": 500,
                "image": "205_chastity/chast0_2.gif"
            }, 661);
            break;
        case "chast0_3":
            nav.killall();
            nav.bg("205_chastity/chast0_3.jpg");
            cl.doCum(false);
            sex.mod("hand", false, "f", 1);
            break;
        case "chast0_4":
        case "chast0_5":
        case "chast0_7":
        case "chast0_8":
        case "chast0_9":
            nav.bg("205_chastity/" + callback + ".jpg");
            break;
        case "chast0_6":
            nav.bg("205_chastity/" + callback + ".jpg");
            cl.add("chastity", "cage");
            cl.c.chastity = "cage";
            break;
        case "chast0_9_bad":
            missy.mod("mood", -100);
            levels.mod("dom", 100, 999);
            nav.bg("205_chastity/chast0_9_bad.jpg");
            break;
        case "chast0_9_good":
            missy.mod("mood", 100);
            levels.mod("sub", 100, 999);
            nav.bg("222_errands/laundry3.jpg");
            break;
        case "chastity_0_endBad":
            char.addtime(210);
            missy.set("chastity", 1);
            gv.set("castitycage", "cage");
            gv.set("chastity", g.dt);
            char.room(0);
            break;
        case "chastity_0_endGood":
            char.addtime(210);
            missy.set("chastity", 1);
            gv.set("castitycage", "cage");
            gv.set("chastity", g.dt);
            if (missy.payday().paydayHasPay)
                char.room(196);
            else
                char.room(203);
            break;
        case "chastity_1":
            char.addtime(210);
            if (missy.payday().paydayHasPay)
                char.room(196);
            else
                char.room(203);
            break;
        default:
            break;
    }
};

room205.chat = function (chatID) {
    if (chatID === 999) {
        var sexCheck = sex.getFuck();
        var btn = new Array();
        if (sexCheck.virginDick)
            btn.push({ chatID: 1, text: "No ma'am, I'm a virgin. ", callback: "" });
        else if (sexCheck.pussy)
            btn.push({ chatID: 2, text: "Yes I have ma'am. ", callback: "" });
        else if (sexCheck.anal)
            btn.push({ chatID: 3, text: "No ma'am, but I've fucked a butt. ", callback: "" });
        else if (sexCheck.oral)
            btn.push({ chatID: 4, text: "No ma'am, but I've had a blow job. ", callback: "" });
        else if (sexCheck.tits)
            btn.push({ chatID: 5, text: "No ma'am, but I've had sex with some boobs. ", callback: "" });
        else if (sexCheck.foot)
            btn.push({ chatID: 5, text: "No ma'am, but I've received a foot job. ", callback: "" });
        else if (sexCheck.hand)
            btn.push({ chatID: 5, text: "No ma'am, but I've had a hand job. ", callback: "" });
        else if (sexCheck.beast)
            btn.push({ chatID: 1, text: "No ma'am, I'm kind of a virgin with girls. ", callback: "" });

        return {
            chatID: 1,
            speaker: "missy",
            text: "It's so big and hard. Have you ever stuck this monster in some poor girl's vagina? ",
            button: btn
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "So you probably think I'm going to punish you for being naughty, don't you? To get compliance from " +
                "a person sometimes you have to use different approaches. Not everyone reacts to the whip, some people " +
                "change their behavior through positive conditioning. Stip off your pants and " + cl.pantiesTxt() + ", " +
                "drop your tie, and bring that cock over here. ",
            button: [
                { chatID: 999, text: "Huh? Yes ma'am!", callback: "chast0_0" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "It was a rhetorical question. You're not a man. A man fucks. You're a pathetic loser sissy. But " +
                "don't worry my little sissy, I'm going to give you one little glimpse of what it's like to be a man " +
                "before I take away all of your manhood. ",
            button: [
                { chatID: 6, text: "*Gulp*", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "You must have given that poor girl the worst 10 seconds of her life. But don't worry, when I'm through " +
                "with you, you won't be disappointing those poor girls any longer. ",
            button: [
                { chatID: 6, text: "*Gulp*", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "You must have given that poor person the worst 10 seconds of their life. But don't worry, when I'm through " +
                "with you, you won't be disappointing those poor people any longer. ",
            button: [
                { chatID: 6, text: "*Gulp*", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "You convinced some poor person into sticking your dick in their mouth? I'll bet it was the most disappointing " +
                "10 seconds of their life. But don't worry, when I'm through with you, you won't be disappointing those poor " +
                "people any longer.",
            button: [
                { chatID: 6, text: "*Gulp*", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "Oh. So you almost had sex. What a disappointment that must have been. But don't worry, when I'm through with you, you won't be disappointing those poor " +
                "people any longer.",
            button: [
                { chatID: 6, text: "*Gulp*", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "That is quite the impressive cock. I can see why you run around trying to stick it in things. Bring that " +
                "cock over here. ",
            button: [
                { chatID: 7, text: "Y-y-yes ma'am ", callback: "chast0_1" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "I do love cocks. They're so smooth and fun. Much better than a dildo, don't you think? ",
            button: [
                { chatID: 8, text: "Yes?", callback: "chast0_2" },
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "The great thing about the cock is it's so easy to control. Once a man is horny enough he'll do anything " +
                "he can to cum. It becomes the single overwhelming thought in their tiny little brain. ",
            button: [
                { chatID: 9, text: "MMmmmm", callback: "" },
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "I'll bet you want to cum, don't you? You'll do anything to get off. Be my good little boy and cum " +
                "for me. Shoot your load on my fresh clean suit. ",
            button: [
                { chatID: 10, text: "oooOOOoooooo", callback: "chast0_3" },
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "OOOoooooo Ffffffuck! ",
            button: [
                { chatID: 11, text: "...", callback: "chast0_4" },
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "That's my good little idiot. I have one more suprise for you. ",
            button: [
                { chatID: 12, text: "...", callback: "chast0_5" },
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "See how limp and soft your little cock is. It makes a mess of everything then runs and hides. Your " +
                "cock is the reason you're a failure in life. It controls you far too much. I have a fun little thing for " +
                "you. relax and let me play with this cock a bit more.",
            button: [
                { chatID: 13, text: "ummm hmmmm", callback: "chast0_6" },
            ]
        },
        {
            chatID: 13,
            speaker: "missy",
            text: "Now you don't have to worry about being controlled by this evil dirty cock anymore. This is not " +
                "your cock anymore. It's my cock now. ",
            button: [
                { chatID: 14, text: "hmmm?", callback: "chast0_7" },
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "What is that? Aaaak! Get it off! Get it off!",
            button: [
                { chatID: 15, text: "...", callback: "chast0_8" },
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "That is a chastity cage. There will be no more mistakes brought about by your cock. Consider yourself lucky, " +
                "when I first started putting my subs in chastity I would beat their balls till their cock was soft then lock " +
                "them up. I find one last orgasm makes my subs more compliant and it's so much fun for me. ",
            button: [
                { chatID: 16, text: "This is too far! I want this off of me right now! ", callback: "" },
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "Oh sissy boy. Really it's for the best. Don't worry, if you behave yourself and prove that you can " +
                "be trusted to use your cock responsibly again I'll remove the cage. Now stop complaining, it's starting " +
                "to make me angry. You wouldn't like it if I gave you back to the cult would you?  ",
            button: [
                { chatID: 17, text: "b-b-b-but... When are you taking it off?  ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "I told you. When you can learn to control yourself. Now I have things to do, you've already wasted enough " +
                "of my time. ",
            button: [
                { chatID: 18, text: "*Hrumph*  ", callback: "chast0_9" },
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "Now go take my dirty suit to the cleaners since you've soaked it in cum. It's the least you can do " +
                "since you didn't even thank me for giving you a hand job. Now go!",
            button: [
                { chatID: 20, text: "Yes ma'am. [Wash her clothes]", callback: "chast0_9_good" },
                { chatID: 19, text: "No! [Storm off without washing her clothes]", callback: "chast0_9_bad" },
            ]
        },
        {
            chatID: 19,
            speaker: "me",
            text: "This is such bullshit! What kind of sadistic evil bitch locks a man's cock up! This thing is so uncomfortable! " +
                "Why does this even exist? Just because I made one small mistake doesn't mean you can take my dick away. " +
                "I should just quit and never come back! But then I'll never get this thing off. Fuck! I'll have to " +
                "go back to get this off. Fuck!",
            button: [
                { chatID: -1, text: "Fuck!", callback: "chastity_0_endBad" },
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "I'm such a loser! Not only did I let her lock me in chastity, but I'm doing her laundry too? Did she call " +
                "me a sissy too? Am I a sissy? A man wouldn't let themselves be locked in chastity then do their laundry. " +
                "Maybe I am a sissy. What does that even mean? ",
            button: [
                { chatID: -1, text: "...", callback: "chastity_0_endGood" },
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "Work in progress.. prepare to be locked up for life sissy. ",
            button: [
                { chatID: -1, text: "...", callback: "chastity_1" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};

