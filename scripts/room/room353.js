//Room name
var room353 = {};
room353.main = function () {
    nav.bg("353_mascot/b0.jpg");
    g.internal = { s: 0, y: 0, talk: "", good: 0, bad: 0, indif: 0, islewd: false };
    chat(0, 353);
    char.changeMenu("hide", false);
};

room353.btnclick = function (name) {
    switch (name) {
        case "":
            break;
        default:
            break;
    }
};

room353.chatcatch = function (callback) {
    switch (callback) {
        case "b1":
            var cc = g.get("mascot");
            nav.bg("353_mascot/b1.jpg");
            if (cc === 0) {
                nav.bg("353_mascot/b1.jpg");
                chat(1, 353);
            }
            else {
                nav.bg("353_mascot/bg.jpg");
                room353.chatcatch("drawmascot");
                chat(12, 353);
            }
            break;
        case "b2":
            nav.bg("353_mascot/b2.jpg");
            break;
        case "b3":
            nav.bg("353_mascot/b3.jpg");
            break;
        case "b4":
            room353.chatcatch("drawmascot");
            nav.bg("353_mascot/x2.jpg");
            break;
        case "b5":
            nav.bg("353_mascot/y2.jpg");
            room353.chatcatch("goodmessage");
            break;
        case "b6":
            nav.bg("353_mascot/x7.jpg");
            break;
        case "b7":
            nav.bg("353_mascot/y7.jpg");
            room353.chatcatch("goodmessage");
            break;
        case "b8":
            nav.bg("353_mascot/x6.jpg");
            break;
        case "b9":
            room353.chatcatch("badmessage");
            nav.bg("353_mascot/y6.jpg");
            break;
        case "b10":
            nav.killall();
            nav.bg("353_mascot/b3.jpg");
            break;
        case "b11":
            nav.bg("353_mascot/b2.jpg");
            break;
        case "b12":
            g.set("mascot", 1);
            g.mod("money", 30);
            char.addtime(480);
            char.room(0);
            break;
        case "x0":
            if (g.internal.s < 3) {
                g.internal.s++;
                if (g.internal.islewd) {
                    g.internal.s = 10;
                    if (Math.floor(Math.random() * 2) === 0)
                        g.internal.y = 11;
                    else
                        g.internal.y = 12;
                    nav.bg("353_mascot/b3.jpg");
                    chat(21, 353);
                }
                else {
                    g.internal.y = Math.floor(Math.random() * 10) + 1;
                    nav.bg("353_mascot/x" + g.internal.y + ".jpg");
                    chat(13, 353);
                }
                
            }
            else {
                nav.bg("353_mascot/b4.jpg");
                chat(1001, 353);
            }
            break;
        case "x1":
            switch (g.internal.y) {
                case 1:
                    g.internal.talk = "Awesome! I'm always looking for way to increase my financial portfolio. ";
                    g.internal.good++;
                    room353.chatcatch("goodmessage");
                    chat(999, 353);
                    break;
                case 2:
                    g.internal.talk = "Oh jolly good. I'll go do that now!";
                    g.internal.good++;
                    room353.chatcatch("goodmessage");
                    chat(999, 353);
                    break;
                case 3:
                    g.internal.talk = "I must save my cum for Azrael.";
                    g.internal.indif++;
                    chat(999, 353);
                    break;
                case 4:
                    g.internal.talk = "Well I guess I could use some money for the bar tonight. ";
                    g.internal.good++;
                    room353.chatcatch("goodmessage");
                    chat(999, 353);
                    break;
                case 5:
                    g.internal.talk = "I was going to save it for you, but a working man's gotta get money.";
                    g.internal.good++;
                    room353.chatcatch("goodmessage");
                    chat(999, 353);
                    break;
                case 6:
                    g.internal.talk = "Damn it! I told you I don't have a dick! I'm telling your manager! ";
                    g.internal.bad++;
                    room353.chatcatch("badmessage");
                    chat(1000, 353);
                    break;
                case 7:
                    g.internal.talk = "Oh yes! I love panties, masturbation, and money!";
                    g.internal.good++;
                    room353.chatcatch("goodmessage");
                    chat(999, 353);
                    break;
                case 8:
                    g.internal.talk = "Hehehe... Maybe...";
                    g.internal.good++;
                    room353.chatcatch("goodmessage");
                    chat(999, 353);
                    break;
                case 9:
                    chat(14, 353);
                    break;
                case 10:
                    g.internal.talk = "Stop harassing me pervert!  I'm telling your manager! ";
                    g.internal.bad++;
                    room353.chatcatch("badmessage");
                    chat(1000, 353);
                    break;
                case 11:
                    g.internal.talk = "Stop harassing me pervert!  I'm telling your manager! ";
                    g.internal.bad++;
                    room353.chatcatch("badmessage");
                    chat(1000, 353);
                    break;
                case 12:
                    if(!cl.c.chastity && cl.c.cock < 2)
                        g.internal.talk = "What a fucking flasher! You must be desperate for some pussy you loser!";
                    else
                        g.internal.talk = "Look at that looser dick! He probably masturbates with tweezers " +
                            "then cries himself to sleep alone wishing for a real dick!";
                    g.internal.bad++;
                    room353.chatcatch("badmessage");
                    chat(1000, 353);
                    break;
            }
            nav.bg("353_mascot/y" + g.internal.y + ".jpg");
            break;
        case "x2":

            break;
        case "x91":
            nav.killall();
            if (cl.c.chastity) {
                nav.bg("353_mascot/91_chastity.jpg");
                chat(20, 353);
            }
            else if (cl.c.cock < 2) {
                nav.bg("353_mascot/91_big.jpg");
                chat(16, 353);
            }
            else {
                nav.bg("353_mascot/91_small.jpg");
                chat(19, 353);
            }
            break;
        case "91_big1":
            nav.bg("353_mascot/91_big1.jpg");
            break;
        case "91_big2":
            nav.bg("353_mascot/91_big2.jpg");
            cl.doCum(false);
            g.mod("receiveHandjobFemale", 1);
            break;
        case "9reset":
            g.internal.islewd = true;
            room353.chatcatch("drawmascot");
            room353.chatcatch("x0");
            break;
        case "drawmascot":
            nav.killbutton("mascot");
            var thisMascot = "m2";
            if (!g.internal.islewd)
                thisMascot = "m0";
            else if (cl.c.chastity !== null)
                thisMascot = "m1";
            else if (cl.c.cock < 2)
                thisMascot = "m3";

            nav.button({
                "type": "img",
                "name": "mascot",
                "left": 425,
                "top": 21,
                "width": 535,
                "height": 1038,
                "image": "353_mascot/" + thisMascot + ".png"
            }, 353);
            break;
        case "goodmessage":
            g.popUpNotice("You got a new donor!");
            break;
        case "badmessage":
            g.popUpNotice("You got a complaint!");
            break;
        case "end":
            if (g.get("mascot") > 3 && !g.hasAccess(16).access) {
                g.mod("mascot", 1);
                char.settime(17, 0);
                chat(47, 350);
            }
            else {
                g.mod("mascot", 1);
                char.settime(17, 0);
                char.room(0);
            }
            break;
        default:
            break;
    }
};

room353.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "random",
            text: g.internal.talk,
            button: [
                { chatID: -1, text: "Sweet! ", callback: "x0" }
            ]
        };
    }
    else if (chatID === 1000) {
        if (g.internal.y > 10)
            return {
                chatID: 100,
                speaker: "random",
                text: g.internal.talk,
                button: [
                    { chatID: -1, text: "I wish I could hide my shame ", callback: "x0" }
                ]
            };
        else
            return {
                chatID: 100,
                speaker: "random",
                text: g.internal.talk,
                button: [
                    { chatID: -1, text: "Damn it I guess wrong! ", callback: "x0" }
                ]
            };
    }
    else if (chatID === 1001) {
        var thismoney = (g.internal.good * 30) - (g.internal.bad * 30);
        if (thismoney > 0)
            g.mod("money", thismoney);
        else
            thismoney = 0;
        if (g.internal.good === 0)
            g.internal.talk = "You did horrible today. You need to do better! ";
        else if (g.internal.good === 3)
            g.internal.talk = "Wonderful! I got so many customers today thanks to you! ";
        else
            g.internal.talk = "You had " + g.internal.good + " customer come in and " + g.internal.bad + " complaints. ";

        g.internal.talk += " You made $ " + thismoney + ". ";

        if (g.internal.islewd)
            g.internal.talk += " Also keep your pants on you little weirdo. ";

        return {
            chatID: 100,
            speaker: "landlord",
            text: g.internal.talk,
            button: [
                { chatID: -1, text: "[Finish]", callback: "end" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "landlord",
                text: "Just got to lock you in place...",
                button: [
                    { chatID: -1, text: "...", callback: "b1" }
                ]
            },
            {
                chatID: 1,
                speaker: "landlord",
                text: "Trust is something you've lost with me. That's why I've chained your ankle to this pole so I know " +
                    "you're not goofing around. ",
                button: [
                    { chatID: 2, text: "So I have to stand here in this costume till then! I can't even move my hands. ", callback: "b2" }
                ]
            },
            {
                chatID: 2,
                speaker: "landlord",
                text: "That is also for your own good. You're going to stand here like a good mascot and let everyone know " +
                    "to give me their sperm. I'll come by later to let you loose. ",
                button: [
                    { chatID: 3, text: "Ugh ", callback: "b3" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "So I guess I just stand here and wait for someone to come by to tell them about the sperm store. I " +
                    "really wish I could see around me.",
                button: [
                    { chatID: 4, text: "Wait", callback: "b4" }
                ]
            },
            {
                chatID: 4,
                speaker: "thinking",
                text: "I hear someone coming. I'll yell out about the sperm store.",
                button: [
                    { chatID: 5, text: "If you want to donate sperm, the sperm bank is the best place!", callback: "b5" }
                ]
            },
            {
                chatID: 5,
                speaker: "random",
                text: "Thanks buddy! I'll go do that now!",
                button: [
                    { chatID: 6, text: "Sweet. My first customer!", callback: "b6" }
                ]
            },
            {
                chatID: 6,
                speaker: "thinking",
                text: "I hear another one! I'll tell them about the sperm store! ",
                button: [
                    { chatID: 7, text: "If you want to donate sperm, the sperm bank is the best place!", callback: "b7" }
                ]
            },
            {
                chatID: 7,
                speaker: "jeffery",
                text: "Oooo thank you sperm man. I do love masturbation and money. I'll go steal a pair of " + sc.n("holly") + "'s panties to " +
                    "sniff while I jack off.... Damn I didn't mean to say that part out loud. ",
                button: [
                    { chatID: 8, text: "Oh gross...", callback: "b8" }
                ]
            },
            {
                chatID: 8,
                speaker: "thinking",
                text: "This is too easy! I'm going to tell the next person. Hope they're not creepy like the last. ",
                button: [
                    { chatID: 9, text: "If you want to donate sperm, the sperm bank is the best place!", callback: "b9" }
                ]
            },
            {
                chatID: 9,
                speaker: "random",
                text: "Hey creep! Do you think I have a penis! I'm going to compain to your manager. Fucking idiot.",
                button: [
                    { chatID: 10, text: "Oh sorry...", callback: "b10" }
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "So each person that walks by I need to guess if they would donate sperm. I need to make sure I only " +
                    "yell at people that would donate sperm or I'll get a complaint. ",
                button: [
                    { chatID: 11, text: "Wait...", callback: "b11" }
                ]
            },
            {
                chatID: 11,
                speaker: "landlord",
                text: "I'm going to let you go. Today you got me 2 new customers and 1 complaint. I pay $30 for each customer " +
                    "and take away $30 for each complaint so you earned $30 today. You need to do better next time. ",
                button: [
                    { chatID: -1, text: "Ok.", callback: "b12" }
                ]
            },
            {
                chatID: 12,
                speaker: "thinking",
                text: "Ok. Time to start my shift. ",
                button: [
                    { chatID: -1, text: "Wait for someone to walk by", callback: "x0" }
                ]
            },
            {
                chatID: 13,
                speaker: "thinking",
                text: "Can they donate or would I get another complaint?",
                button: [
                    { chatID: -1, text: "If you want to donate sperm, the sperm bank is the best place!", callback: "x1" },
                    { chatID: 22, text: "[Don't say anything]", callback: "x2" }
                ]
            },
            {
                chatID: 14,
                speaker: "random",
                text: "Oh hehehe. Look at that giant sperm! I wonder if his sperm is giant too!",
                button: [
                    { chatID: 15, text: "huh?", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "random",
                text: "Oooo we should see what his sperm looks like! ",
                button: [
                    { chatID: -1, text: "Wha?", callback: "x91" }
                ]
            },
            {
                chatID: 16,
                speaker: "random",
                text: "Oh wow. That is a big dick. There's got to be a lot of sperm in this one. ",
                button: [
                    { chatID: 17, text: "HAY!", callback: "91_big1" }
                ]
            },
            {
                chatID: 17,
                speaker: "random",
                text: "Lets see if we can get the sperm out of it..",
                button: [
                    { chatID: 18, text: "mmmMMMmmMMMMmmMMMmmMm", callback: "91_big2" }
                ]
            },
            {
                chatID: 18,
                speaker: "random",
                text: "So much cum! You really are the alpha male! Well we gotta get to class. ",
                button: [
                    { chatID: -1, text: "Ungh.... Wait! Pull my pants back up!", callback: "9reset" }
                ]
            },
            {
                chatID: 19,
                speaker: "random",
                text: "It's so tiny! We need to show everyone what a tiny dick looser you are! ",
                button: [
                    { chatID: -1, text: "Blush", callback: "9reset" }
                ]
            },
            {
                chatID: 20,
                speaker: "random",
                text: "What is that on your penis? You sick weird-o! Everyone needs to see what a deviant you are! ",
                button: [
                    { chatID: -1, text: "Blush", callback: "9reset" }
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "I can't believe they left me like this!",
                button: [
                    { chatID: -1, text: "I hope no one walks by", callback: "x1" }
                ]
            },
            {
                chatID: 22,
                speaker: "thinking",
                text: "They were probably going to complain. ",
                button: [
                    { chatID: -1, text: "Wait for the next person. ", callback: "x0" }
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};