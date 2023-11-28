//Room name
var room351 = {};
room351.main = function () {
    nav.bg("351_spermJackoff/sperm0.jpg");
    if (sc.getEvent("landlord", 2))
        chat(0, 351);
    else {
        sc.setEvent("landlord", 2);
        chat(1, 351);
    }
};

room351.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room351.chatcatch = function (callback) {
    switch (callback) {
        case "s1":
            if (cl.c.chastity === null) {
                nav.bg("351_spermJackoff/sperm1.jpg");
                chat(2, 351);
            }
            else {
                nav.bg("351_spermJackoff/chastity0.jpg");
                chat(7, 351);
            }
            break;
        case "sperm2":
        case "sperm4":
        case "payme":
        case "chastity1":
        case "chastity2":
            nav.bg("351_spermJackoff/" + callback + ".jpg");
            break;
        case "chastity3":
            cl.doCum();
            stats.mod("sissygasm", "f", 1);
            nav.bg("351_spermJackoff/" + callback + ".gif");
            break;
        case "chastity4":
            cl.doCum();
            sex.mod("hand", false, "f", 1);
            nav.bg("351_spermJackoff/" + callback + ".jpg");
            break;
        case "sperm3":
            cl.doCum();
            sex.mod("hand", false, "f", 1);
            nav.bg("351_spermJackoff/" + callback + ".jpg");
            break;
        case "paymeEnd":
            daily.set("spermbank");
            gv.mod("money", 30);
            sc.modLevel("landlord", 15, 999);
            char.settime(12, 37);
            char.room(0);
            break;
        default: break;
    }
};

room351.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "!madison",
            text: "Ok mister. Please pull down your pants and present your penis so I can collect the sample. ",
            button: [
                { chatID: 2, text: "Sure! ", callback: "s1" }
            ]
        },
        {
            chatID: 1,
            speaker: "!madison",
            text: "So I want you to relax and have a good experiance. If at any time you feel uncomfortable just let me know. " +
                "I'll need you to pull down your pants and underwear so that I can get access to your penis and extract the sample. " +
                "Are you ready? ",
            button: [
                { chatID: 2, text: "Sure! ", callback: "s1" }
            ]
        },
        {
            chatID: 2,
            speaker: "!madison",
            text: "A beautiful penis like yours really makes this job better. Let me grab the cup then I'll take care of you. ",
            button: [
                { chatID: 3, text: "ok ", callback: "sperm2" }
            ]
        },
        {
            chatID: 3,
            speaker: "!madison",
            text: "Who's my big strong man that's going to cum for me? That's a good boy, cum into the glass for me. ",
            button: [
                { chatID: 4, text: "...", callback: "sperm3" }
            ]
        },
        {
            chatID: 4,
            speaker: "!madison",
            text: "Such a good job! Look at all that cum you made! I'm so proud of you!",
            button: [
                { chatID: 5, text: "oh yeah..", callback: "sperm4" }
            ]
        },
        {
            chatID: 5,
            speaker: "!madison",
            text: "I'm going to run this to the cooler. Get dressed, your " + sc.n("landlord") + " will take care of you at the front. ",
            button: [
                { chatID: 6, text: "Ok. Thanks?", callback: "payme" }
            ]
        },
        {
            chatID: 6,
            speaker: "landlord",
            text: "That was quick. I hope you last longer with the ladies, than you do with Nurse Madison. Here's your $30. " +
                "Thank you for helping out honey. ",
            button: [
                { chatID: -1, text: "Thanks! See you at home.", callback: "paymeEnd" }
            ]
        },
        {
            chatID: 7,
            speaker: "!madison",
            text: "Oh! A chastity cage. Lucky for you I'm trained to handle this situation. Turn around and try to " +
                " relax. ",
            button: [
                { chatID: 8, text: "ok...", callback: "chastity1" }
            ]
        },
        {
            chatID: 8,
            speaker: "!madison",
            text: "Now you're going to feel a slight pressure on your prostate as I slide my fingers into your rectum. " +
                "Don't worry everything you're going to feel is perfectly normal. Just relax and let it happen. ",
            button: [
                { chatID: 9, text: "ok", callback: "chastity2" }
            ]
        },
        {
            chatID: 9,
            speaker: "!madison",
            text: "That's a good boy. My fingers just slid right in.  ",
            button: [
                { chatID: 10, text: "mmHmmhhhmmmm", callback: "chastity3" }
            ]
        },
        {
            chatID: 10,
            speaker: "thinking",
            text: "⚡ 🤤",
            button: [
                { chatID: 11, text: "...", callback: "chastity4" }
            ]
        },
        {
            chatID: 10,
            speaker: "!madison",
            text: "Way to go! I can see your donation oozing into the container. That's a good boy! ",
            button: [
                { chatID: 5, text: "...", callback: "sperm4" }
            ]
        },



    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
