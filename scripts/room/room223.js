//Room name
var room223 = {};
room223.main = function () {
    var missyUniform = missy.get("uniform");
    if (missyUniform === 0) {
        chat(0, 223);
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
            char.settime(17, 17);
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
            text: "Those are such cute little panties. You're too timed to walk into a store and buy them. Where did you get them? ",
            button: [
                { chatID: 5, text: "I found them, on the street. ", callback: "" },
                { chatID: 5, text: "A friend gave them to me. ", callback: "" },
                { chatID: 6, text: "I took them from my " + sc.n("el") + ". ", callback: "" },
            ]
        },
        {
            chatID: 5,
            speaker: "missy",
            text: "You know I'm an investigator that has interrogated countless people. I can tell when you lie. Now stop " +
                "lying and tell me the truth. ",
            button: [
                { chatID: 6, text: "I took them from my " + sc.n("el") + ". ", callback: "" },
            ]
        },
        {
            chatID: 6,
            speaker: "missy",
            text: "You dirty little panty theif. Not only are you stealing panties, but you're stealing them from your " +
                sc.n("el") + ". You disgusting little sissy. ",
            button: [
                { chatID: 7, text: "...", callback: "" },
            ]
        },
        {
            chatID: 7,
            speaker: "missy",
            text: "So you like to steal panties do you? Stip off the rest of your clothing. Everything, but leave the panties on. ",
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
                "feminine features that make this so much easier. It's like you were born to be sexy. ",
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
            text: "Hey. I'm so glad you've found yourself. Take care sexy! ",
            button: [
                { chatID: -1, text: "Thanks. ", callback: "panties5End" },
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
            text: "I spoke with my friend " + sc.n("tiffany") + " at Toy 'n Us to pick you out " +
                "something suitable for working here, but also expresses your new sissy mentality. " +
                "I'm sure it will be just perfect. Go visit her and pick up your new uniform. " +
                "From now on this will be your attire to work here. If you're too embarrassed " +
                "to wear your new uniform in public you can always change in the bathroom here. ",
            button: [
                { chatID: -1, text: "Yes ma'am. I'll go visit Tiffany at Toys 'n Us. ", callback: "newAttireEnd" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};