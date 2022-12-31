//Room name
var room300 = {};
room300.main = function () {
    var envyStep = sc.getstep("envy");
    if (envyStep === 0) {
        nav.bg("300_apartment/fight.jpg");
        chat(4, 300);
    }
    else if (envyStep === 16) {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 921,
            "top": 494,
            "width": 132,
            "height": 236,
            "image": "300_apartment/door16.png"
        }, 300);
        nav.buildnav([0]);
    }
    else if (envyStep === 14 || envyStep === 15) {
        nav.button({
            "type": "btn",
            "name": "door",
            "left": 930,
            "top": 501,
            "width": 231,
            "height": 267,
            "image": "300_apartment/door14.png"
        }, 300);
        nav.buildnav([0]);
    }
    else {
        var btnList = [
            {
                "type": "btn",
                "name": "door",
                "left": 921,
                "top": 494,
                "width": 132,
                "height": 236,
                "image": "300_apartment/door.png"
            }
        ];
        if (g.isNight()) {
            btnList.push({
                "type": "btn",
                "name": "slut",
                "left": 287,
                "top": 431,
                "width": 107,
                "height": 388,
                "image": "300_apartment/slut.png"
            });
        }
        
        $.each(btnList, function (i, v) {
            nav.button(v, 300);
        });
        var navListx = [0];
        nav.buildnav(navListx);
    }
};

room300.btnclick = function (name) {
    switch (name) {
        case "slut":
            chat(0, 300);
            break;
        case "door":
            var envystep = sc.getstep("envy");
            if (g.get("envyDayEvent")) {
                chat(2, 300);
            }
            else if (g.isNight()) {
                chat(1, 300);
            }
            else if (envystep === 1) {
                nav.killall();
                nav.bg("300_apartment/frontdoor.jpg");
                chat(13, 300);
            }
            else if (envystep === 3) {
                if (inv.has("pizza"))
                    char.room(301);
                else
                    chat(21, 300);
            }
            else if (envystep === 16) {
                chat(24, 300);
            }
            else {
                if (envystep === 13) {
                    nav.killall();
                    nav.bg("300_apartment/knock13.jpg");
                    chat(22, 300);
                }
                else if (envystep === 14 || envystep === 15) {
                    chat(23, 300);
                }
                else {
                    nav.killall();
                    if (envystep < 7)
                        nav.bg("300_apartment/knock0.jpg");
                    else if (envystep === 7)
                        nav.bg("300_apartment/knock7.jpg");
                    else if (envystep === 8)
                        nav.bg("300_apartment/knock8.jpg");
                    else if (envystep === 9)
                        nav.bg("300_apartment/knock9.jpg");
                    else if (envystep === 10)
                        nav.bg("300_apartment/knock9.jpg");
                    else if (envystep === 11)
                        nav.bg("300_apartment/knock11.jpg");
                    else if (envystep === 12)
                        nav.bg("300_apartment/knock11.jpg");
                    chat(3, 300);
                }
            }
            break;
        default:
            break;
    }
};

room300.chatcatch = function (callback) {
    switch (callback) {
        case "reset":
            char.room(300);
            break;
        case "fight1":
            nav.bg("300_apartment/fight1.jpg");
            break;
        case "fightend":
            sc.setstep("envy", 1);
            g.setflag("envyDayEvent");
            char.addtime(30);
            char.room(300);
            break;
        case "firstMeetEnd":
            sc.setstep("envy", 2);
            g.setflag("envyDayEvent");
            char.addtime(60);
            char.room(300);
            break;
        case "enter":
            char.room(301);
            break;
        default:
            break;
    }
};

room300.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "random",
            text: "Pump my shitbox full of cum. Pull out, force your filthy, ass juice drenched cock between " +
                "my pink princess lips, and force it, balls deep, to the back of my hungry throat.",
            button: [
                { chatID: -1, text: "I'll pass [Future release]", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "It's pretty late. Maybe she's asleep ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "I already came by today. Don't want her to think I'm a weird stalker. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "envy",
            text: "Hey " + sc.n("me") + " do you want to come in? ",
            button: [
                { chatID: -1, text: "Yeah, I do", callback: "enter" },
                { chatID: -1, text: "Oh, no", callback: "reset" }
            ]
        },
        {
            chatID: 4,
            speaker: "kei",
            text: "...I don't feel like going to your place. Why should I? This place is filthy and you never put out!",
            button: [
                { chatID: 5, text: "Oh wow it looks like " + sc.n("kei") + " and his girlfriend are fighting. Maybe I'll just stick around and see what's going on.", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "envy",
            text: "I told you I'm saving myself for marriage! And if you hated my apartment so much why are you always here?",
            button: [
                { chatID: 6, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "kei",
            text: "I'm always here becuase you tease me and lead me on. You say you're waiting for marriage, but then tell " +
                "me how horny you are. I'm horny too. My balls are going to explode if I don't cum soon. Let go inside " +
                "and can finally fuck. ",
            button: [
                { chatID: 7, text: "...", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "envy",
            text: "I told you I'm waiting. This is only our fourth date and you've groped my tits, tried to finger my butt " +
                "and pulled you dick out and show me when I don't know you well enough. I'm not just a piece of meat, " +
                "I want to get to know you better. Just come in and talk with me.",
            button: [
                { chatID: 8, text: "...", callback: "" }
            ]
        },
        {
            chatID: 8,
            speaker: "kei",
            text: "I love you baby. I just want to show you how much. Let's make love.",
            button: [
                { chatID: 9, text: "...", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "envy",
            text: "No. Maybe you should just go home and jack off then call me. I'm hoping you'll be like you were " +
                "on our first date. ",
            button: [
                { chatID: 10, text: "...", callback: "" }
            ]
        },
        {
            chatID: 10,
            speaker: "kei",
            text: "If you're not going to put out I have other stuff to do. I'm going to fuck this slutty nurse I " +
                "know. At least she puts out. We're done. Call me if you want to fuck, otherwise don't call me.",
            button: [
                { chatID: 11, text: "...", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "envy",
            text: "*sobbing* fine... it's over. I never want to see you again. ",
            button: [
                { chatID: 12, text: "...", callback: "fight1" }
            ]
        },
        {
            chatID: 12,
            speaker: "kei",
            text: "Oh hi " + sc.n("me") + ". Don't date that prude bitch. She's lame as hell. I'm going to go piss in the " +
                sc.n("bimbo") + "'s face and fuck her in the ass. She loves that stuff! If you fuck her later you " +
                "can get my sloppy seconds! Later.",
            button: [
                { chatID: -1, text: "You're too kind. Later.", callback: "fightend" }
            ]
        },
        {
            chatID: 13,
            speaker: "envy",
            text: "Oh hi. You're the creepy guy that was watching me when my boyfriend dumped me. ",
            button: [
                { chatID: 14, text: "Oh, haha. Sorry about that", callback: "" },
                { chatID: 15, text: "So, do you want to fuck?", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "envy",
            text: "That's ok. I shouldn't have had that outbreak in the middle of the hallway. ",
            button: [
                { chatID: 16, text: "Yeah. I shouldn't have stood there, but I couldn't look away. ", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "envy",
            text: "Ah ha! It was you. And no. I don't want to fuck. ",
            button: [
                { chatID: 16, text: "I was trying to make a joke.", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "envy",
            text: "That's ok. I didn't expect " + sc.n("kei") + " to start a fight with me right there. Why are guys " +
                "such horny pigs? ",
            button: [
                { chatID: 17, text: "Not all of us are horny pigs. ", callback: "" },
                { chatID: 18, text: "Because your only purpose is as a cum receptacle. ", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "envy",
            text: "That's what they all say. My first boyfried said he didn't want sex, just to be my best friend. Then " +
                "I caught him jacking off in my panties. Why are guys like this?",
            button: [
                { chatID: 19, text: "Ok. we're all horny pigs.", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "envy",
            text: "You are too much! " + sc.n("kei") + " said the same thing to me! Why can't guys just be friends " +
                "for a while till we get to know each other instead of always making dirty jokes?",
            button: [
                { chatID: 19, text: "Yeah that was a bad joke. ", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "envy",
            text: "There's something about you I like, but I can't put my finger on it right now. " +
                "Do you think it's possible you and I could just be friends without sex getting in the way. ",
            button: [
                { chatID: 20, text: "There's something about you I like too. I would love to be your friend. ", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "envy",
            text: "Oh good. I was hoping you would say that and not some stupid sex joke. I've got to run. You should " +
                "stop by again sometime. ",
            button: [
                { chatID: -1, text: "Sweet! See you later my new buddy ", callback: "firstMeetEnd" }
            ]
        },
        {
            chatID: 21,
            speaker: "thinking",
            text: "I need to get the frozen pizza from " + sc.n("spanky") + "'s before I visit her again. ",
            button: [
                { chatID: -1, text: "Duh!", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "Weird. Her door is slightly open. ",
            button: [
                { chatID: -1, text: "Just go in", callback: "enter" },
                { chatID: -1, text: "I repsect her privacy and close the door and leave. ", callback: "reset" },
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "That's a lot of guys lined outside her door.... ",
            button: [
                { chatID: -1, text: "Go in", callback: "enter" },
                { chatID: -1, text: "I'll come back later", callback: "reset" },
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "Evicted... I guess she's not coming back. ",
            button: [
                { chatID: -1, text: "....", callback: "" },
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};