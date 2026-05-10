//Room name
var room223 = {};
room223.main = function () {
    var missyUniform = missy.get("uniform");
    if (missyUniform === 0) {
        if (cl.pantiesTxt() !== "panties") {
            sc.modSecret("missy", 100);
            chat(19, 223);
        }
        else {
            sc.modSecret("missy", 100);
            chat(0, 223);
        }
    }
    else if (missyUniform === 2) {
        chat(14, 223);
    }
    else {
        char.room(197);
    }
};

room223.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room223.chatcatch = function (callback) {
    switch (callback) {
        case "panties_update0":
            cl.c.pants = null;
            zcl.displayMain(-300, 600, .3, "clothes", true);
            break;
        case "panties_update1":
            nav.kill();
            gv.mod("arousal", 100);
            nav.bg("223_panties/panties_update1.webp");
            cl.c.panties = null;
            zcl.displayMain(-300, 600, .3, "clothes", true);
            break;
        case "panties_update2":
        case "panties_update3":
            nav.bg("223_panties/" + callback + ".webp");
            break;
        case "panties_update4":
            cl.add("panties", "missy");
            cl.c.panties = "missy";
            zcl.displayMain(-300, 600, .3, "clothes", true);
            nav.bg("223_panties/" + callback + ".webp");
            break;
        case "panties_update5":
            cl.c.pants = "s";
            cl.display();
            missy.set("uniform", 1);
            missy.set("uniformNew", 0);
            char.settime(11, 30);
            if (missy.payday().paydayHasPay)
                char.room(196);
            else
                char.room(0);
            break;
        case "panties0":
            cl.c.pants = null;
            zcl.displayMain(-300, 600, .3, "clothes", true);
            if (cl.c.panties === "missy")
                chat(3, 223);
            else
                chat(4, 223);
            break;
        case "panties1":
            cl.c.shirt = null;
            cl.c.shoes = null;
            cl.c.socks = null;
            cl.display();
            zcl.displayMain(-300, 600, .3, "clothes", true);
            break;
        case "panties2":
            nav.killall();
            nav.bg("223_panties/panties2.jpg");
            break;
        case "panties3":
            nav.bg("223_panties/panties3.jpg");
            break;
        case "panties4":
            nav.bg("203_entrance/default.jpg");
            cl.c.shirt = "s";
            cl.c.pants = "s";
            cl.c.socks = "b";
            cl.c.shoes = "d";
            cl.display();
            zcl.displayMain(0, 900, .25, "clothes", true);
            break;
        case "panties5End":
            //char.settime(17, 17);
            missy.set("uniform", 1);
            missy.set("uniformNew", 0);
            if (missy.payday().paydayHasPay)
                char.room(196);
            else
                char.room(0);
            break;
        case "newAttireEnd":
            missy.set("activeCase", 10);
            missy.set("activeCaseComplete", 0);
            missy.set("reusableCaseCounter", 0);
            missy.set("uniform", 3);
            if (g.dt.getDay() === 5 && missy.get("weeklyPay") !== 0)
                char.room(196);
            else
                char.room(0);
            break;
        case "checkPanties":
            switch (cl.c.panties) {
                case "c": //ll panties
                    chat(16, 223);
                    break;
                case "j": // janice panties
                    chat(17, 223);
                    break;
                case "b": //cross dress case dude's panties
                    chat(18, 223);
                    break;
                case "w": //lola panties
                    chat(5, 223);
                    break;
                default:
                    chat(17, 223);
                    break;
            }
            break;
        default:
            break;
    }
};

room223.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "missy",
            text: "Today I'm going to have you sort my files and cross reference them by case date. Ready. ",
            button: [
                { chatID: 1, text: "*Groan* Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "missy",
            text: "I'm just kidding, sissy. I know your secret. You dirty little slut! Strip off those pants and show me your " +
                "pretty new panties. ",
            button: [
                { chatID: 2, text: "My pants?", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "missy",
            text: "Oh don't be bashful. I know you want to show off your pretty little panties. Now strip off those pants and show " +
                "me. ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "panties0" }
            ]
        },
        {
            chatID: 3,
            speaker: "missy",
            text: "Those are my panties! You little panty thief! You have got to be the most brazen little sissy that has " +
                "come to work for me. You disgusting little sissy. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "missy",
            text: "Those are such cute little panties. You're too timid to walk into a store and buy them. Where did you get them?",
            button: [
                { chatID: -1, text: "I found them.", callback: "checkPanties" },
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "You know I'm an investigator that has interrogated countless people. I can tell when you lie. Now stop " +
                "lying and tell me the truth.",
            button: [
                { chatID: 6, text: "I took them from my " + sc.n("el") + ".", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "You dirty little panty thief. Not only are you stealing panties, but you're stealing them from your " +
                sc.n("el") + ". You disgusting little sissy. ",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "So you like to steal panties do you? Strip off the rest of your clothing. Everything, but leave the panties on. ",
            button: [
                { chatID: 8, text: "Awwww", callback: "" },
            ]
        },
        {
            chatID: 8,
            speaker: "missy",
            text: "Stop right there. No complaining. You're going to do exactly what I say or your little secret will find its " +
                "way out to everyone. Now say yes ma'am so I know you understand that I'm in control now. ",
            button: [
                { chatID: 9, text: "Yes ma'am", callback: "panties1" },
            ]
        },
        {
            chatID: 9,
            speaker: "missy",
            text: "So you like to wear panties like a pretty little girl? It takes more than a pair of panties to be a " +
                "pretty little girl. Come here my pretty girl, let's see what you look like with some makeup. ",
            button: [
                { chatID: 10, text: "....uhhhh", callback: "panties2" },
            ]
        },
        {
            chatID: 10,
            speaker: "missy",
            text: "Hold still.. almost done... ",
            button: [
                { chatID: 11, text: "....", callback: "panties3" },
            ]
        },
        {
            chatID: 11,
            speaker: "missy",
            text: "There. Aren't you just a pretty girl in your cute little cotton panties. With a little work you'll be " +
                "such a pretty little girl. The kind of girl other girls hate and men want to fuck. You know you have natural " +
                "feminine features that make this so much easier. It's like you were born to be sexy.",
            button: [
                { chatID: 12, text: "...I am a pretty girl", callback: "" },
            ]
        },
        {
            chatID: 12,
            speaker: "missy",
            text: "Yes you were. Now go wash up. You aren't ready to let the world know what a sissy girl you are. " +
                "Also you have a change to your required attire. From now on you'll be required to wear your panties, " +
                "my dainty femboy. ",
            button: [
                { chatID: 13, text: "Yes ma'am [Go change and wash your face and leave]", callback: "panties4" },
            ]
        },
        {
            chatID: 13,
            speaker: "cecilia",
            text: "Hey. I'm so glad you've found yourself. Take care sexy! Now go get lunch.",
            button: [
                { chatID: -1, text: "Thanks.", callback: "panties5End" },
            ]
        },
        {
            chatID: 14,
            speaker: "missy",
            text: "I was looking at you in your cute little sissy outfit and I think it fits " +
                "you. You really do make an attractive girl. From now on you'll be wearing " +
                "a different attire here at the office. ",
            button: [
                { chatID: 15, text: "*gulp*", callback: "" },
            ]
        },
        {
            chatID: 15,
            speaker: "missy",
            text: "I spoke with my friend " + sc.n("tiffany") + " at Toys 'n Us to pick you out " +
                "something suitable for working here, but also expresses your new sissy mentality. " +
                "I'm sure it will be just perfect. Go visit her and pick up your new uniform. " +
                "From now on this will be your attire to work here. If you're too embarrassed " +
                "to wear your new uniform in public you can always change in the bathroom here.",
            button: [
                { chatID: -1, text: "Yes ma'am. I'll go visit Tiffany at Toys 'n Us.", callback: "newAttireEnd" },
            ]
        },
        {
            chatID: 16,
            speaker: "missy",
            text: "Hmm, cheetah panties. A young girl isn't going to wear those. They're a bit " +
                "big for your narrow butt. Definitely owned by an older female with a big butt. " +
                "They're your " + sc.n("landlord") + "'s aren't they. I would be disgusted, but " +
                "stealing your " + sc.n("landlord") + "'s panties is pretty typical for someone " +
                "like you. ",
            button: [
                { chatID: 7, text: "Yes ma'am. I stole them.  ", callback: "" },
            ]
        },
        {
            chatID: 17,
            speaker: "missy",
            text: "A pretty pink pair of panties. Sexy, but they have been worn quite a few times. " +
                "also they're made for someone with a thicker butt. You stole them from some poor " +
                "young lady you know didn't you? ",
            button: [
                { chatID: 7, text: "Yes ma'am. I stole them.  ", callback: "" },
            ]
        },
        {
            chatID: 18,
            speaker: "missy",
            text: "Those are Bill's panties aren't they? I don't even want to know what you two " +
                "did to get her panties. Can't say I'm surprised though. Strip off the rest of " +
                "your clothing. Let's see what you're working with.",
            button: [
                { chatID: 8, text: "Strip?", callback: "" },
            ]
        },
        {
            chatID: 19,
            speaker: "missy",
            text: "Today I'm going to have you sort my files and cross reference them by case date. Ready. ",
            button: [
                { chatID: 20, text: "*Groan* Yes ma'am", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "missy",
            text: "I'm just kidding. Listen. I know who you are. You don't know who you are, but I do. I've " +
                "never been more sure of anything in my life. Take you pants off. ",
            button: [
                { chatID: 21, text: "My pants?", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "missy",
            text: "Yes. I said take your pants off. Not ask stuipid questions. Now take them off.  ",
            button: [
                { chatID: 22, text: "Yes ma'am", callback: "panties_update0" }
            ]
        },
        {
            chatID: 22,
            speaker: "missy",
            text: "*ugh* Boy's underwear. Why is it always so ugly. You know you're not an ugly boy, " +
                "why do you wear ugly underware. That ends today. I'm going to make you pretty, starting " +
                "from the inside where true beauty starts. Take those horrible things off. ",
            button: [
                { chatID: 23, text: "My underwear? ", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "missy",
            text: "My god are you dumb. Yes your underware. I never want to see those terrible things again. " +
                "Take them off. ",
            button: [
                { chatID: 24, text: "Yes ma'am", callback: "panties_update1" }
            ]
        },
        {
            chatID: 24,
            speaker: "missy",
            text: "Now look at my panties. Does getting a peek make your penis start to get hard? I bet you " +
                "wish you wish you weren't locked in that chastity cage right now. Panties are just the " +
                "best best way to show our femininity. ",
            button: [
                { chatID: 25, text: "...", callback: "panties_update2" }
            ]
        },
        {
            chatID: 25,
            speaker: "missy",
            text: "Image how ugly this would look if I was sliding down ugly boy underwear right now. " +
                "*ugh* No one wants to see ugly boy underware. All ratty and drab. A tiny tight set " + 
                "of panties is what people love to see. Everyone loves to look at panties. ",
            button: [
                { chatID: 26, text: "...", callback: "panties_update3" }
            ]
        },
        {
            chatID: 26,
            speaker: "missy",
            text: "Here. Sniff my panties. Don't they just smell amazing? You know I can see your penis " +
                "dripping a cute little drop of pre cum. Is it the lingering smell of my sex in my panties " +
                " or the peek of my vagina that " +
                "is making your penis press against it's cage and leak cum? ",
            button: [
                { chatID: 27, text: "The smell of your panties ma'am", callback: "" },
                { chatID: 28, text: "The peek of your vagina ma'am", callback: "" },
            ]
        },
        {
            chatID: 27,
            speaker: "missy",
            text: "MMmmmm. A girl loves to hear how wonder her vagina smells. I have good news for " +
                "you. You take take that smell home with you and smell at your leisure. ",
            button: [
                { chatID: 29, text: "ma'am?", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "missy",
            text: "Well you're in luck. These panties have been rubbing against my vagina all morning. " +
                "You can feel that they're slightly damp from my aroused wet pussy. I have good news " +
                "for you. You can take a small piece of my warm wet pussy with you. ",
            button: [
                { chatID: 29, text: "ma'am?", callback: "" }
            ]
        },
        {
            chatID: 29,
            speaker: "missy",
            text: "Take my warm moist panties and put them on. I want to see your precum leak into them. ",
            button: [
                { chatID: 30, text: "Yes ma'am!", callback: "panties_update4" }
            ]
        },
        {
            chatID: 30,
            speaker: "missy",
            text: "So cute!!!! Your body was made to wear panties. From now on you'll be required to wear your panties, " +
                "my dainty femboy. ",
            button: [
                { chatID: -1, text: "Yes ma'am!", callback: "panties_update5" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};