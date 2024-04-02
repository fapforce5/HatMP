//Room name
var room480 = {};
room480.main = function () {
    g.internal = { arrive: g.dt, talkList: new Array(), amputee: 0, secretPath: 0, tod: 1, single: null };

    room480.chatcatch("settod");
    if (sc.getstep("a") === 0) {
        char.addDays(1);
        char.settime(11, 27);
        nav.bg("480_throne/meeting.jpg");
        nav.button({
            "type": "btn",
            "name": "cock",
            "left": 1439,
            "top": 268,
            "width": 248,
            "height": 752,
            "image": "480_throne/s.png"
        }, 480);
        nav.button({
            "type": "btn",
            "name": "a",
            "left": 853,
            "top": 40,
            "width": 360,
            "height": 740,
            "image": "480_throne/a.png"
        }, 480);
        zcl.displayMain(350, 380, .15, "clothes", true);
    }
    else {
        if (g.isNight()) {
            nav.button({
                "type": "btn",
                "name": "gaurds",
                "left": 636,
                "top": 205,
                "width": 696,
                "height": 526,
                "image": "480_throne/guards.png"
            }, 480);
        }
        else {
            nav.button({
                "type": "btn",
                "name": "cock2",
                "left": 1439,
                "top": 268,
                "width": 248,
                "height": 752,
                "image": "480_throne/s.png"
            }, 480);
            nav.button({
                "type": "btn",
                "name": "a2",
                "left": 853,
                "top": 40,
                "width": 360,
                "height": 740,
                "image": "480_throne/a.png"
            }, 480);
        }
        nav.buildnav([478, 479, 481]);
    }
};

room480.btnclick = function (name) {
    switch (name) {
        case "cock":
            chat(0, 480);
            break;
        case "a":
            chat(1, 480);
            break;
        case "a2":
            chat(999, 480);
            break;
        case "cock2":
            chat(8, 480);
            break;
        case "gaurds":
            chat(20, 480);
            break;
        default:
            break;
    }
};
room480.displaychar = function (chararry) {
    $.each(chararry, function (i, v) {
        if (v.tod.includes(g.internal.tod))
            nav.button(v, g.roomID);
    });
};

room480.chatcatch = function (callback) {
    switch (callback) {
        case "incrementtod":
            var hour1 = g.gethourdecimal();
            if (hour1 < 7)
                char.settime(7, 0);
            else if (hour1 < 12)
                char.settime(13, Math.floor(Math.random() * 59));
            else if (hour1 < 17)
                char.settime(18, Math.floor(Math.random() * 59));
            else if (hour1 < 22)
                char.settime(23, Math.floor(Math.random() * 59));
            else 
                char.settime(7, 0);
            room480.chatcatch("settod");
            break;
        case "settod":
            var hour = g.gethourdecimal();
            if (hour < 7)
                g.internal.tod = 0;
            else if (hour < 12)
                g.internal.tod = 1;
            else if (hour < 17)
                g.internal.tod = 2;
            else if (hour < 22)
                g.internal.tod = 3;
            else
                g.internal.tod = 4;
            break;
        case "quest0":
            g.internal = { arrive: g.dt, talkList: new Array(), amputee: 0, secretPath: 0, tod: 1, single: null };
            sc.setstep("a", 1);
            char.room(480);
            break;
        case "cg1":
            if (g.internal.talkList.includes("vag")) {
                chat(18, 480);
            }
            else {
                nav.killall();
                nav.bg("480_throne/cg1.jpg");
            }
            break;
        case "cg2":
            nav.killall();
            nav.bg("480_throne/cg2.jpg");
            break;
        case "cg3":
            if (!g.internal.talkList.includes("vag"))
                g.internal.talkList.push("vag");
            room480.chatcatch("incrementtod");
            char.room(480);
            break;
        case "reset":
            char.room(480);
            break;
        default:
            break;
    }
};

room480.chat = function (chatID) {
    if (chatID === 999) {
        return {
            chatID: 999,
            speaker: "a",
            text: "You have spoken to " + g.internal.talkList.length + ". You need to speak with others if " +
                "if you wish to discuss leaving. ",
            button: [
                { chatID: -1, text: "ok. I'll talk to more. ", callback: "" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "cock",
                text: "You need to speak with the Lady of the Cave, " + sc.n("a") + ". ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "a",
                text: "Greeting and welcome to sanctuary. I am the Lady of the Cave, " + sc.n("a") + ". " +
                    "You may wonder why you're here and if you're safe. Have no fears new one, this is a " +
                    "place of security and acceptance. We were all like you at one time. ",
                button: [
                    { chatID: 2, text: "Like me?", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "a",
                text: "Yes. We were all victims of the cult. Smuggled, or nearly so, taken from out homes across " +
                    "the land to birth that disastrous Azrael against our wishes. The " + sc.n("queen") + " came " +
                    "to our rescue and freed us from the Cult of C.U.M. so that we may continue to live. ",
                button: [
                    { chatID: 3, text: "... but I escaped", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "a",
                text: "You may have escaped, but you are not free. Once the Cult has started they will not allow " +
                    "you to live a free life. You think you are free, but you are merely a deer on the run in a " +
                    "forest full of hunters. ",
                button: [
                    { chatID: 4, text: "So I'm locked in here so I may be free?", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "a",
                text: "Oh hahaha, silly one. You are not locked in here. We're all free to leave whenever we want. ",
                button: [
                    { chatID: 5, text: "Ok. I want to leave. ", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "a",
                text: "That would be a mistake. You say you escaped. You wouldn't be the first. Stacy escaped and " +
                    "made her way back home thinking she was free. One a month was her freedom before the Cult found " +
                    "her and punished her. They nearly took her life with the beaten she received. ",
                button: [
                    { chatID: 6, text: "So I'm not free to leave. ", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "a",
                text: "For your own good the door to freedom will open for you once you've spoken to at least three " +
                    "girls here. Once your task is complete the doors to freedom will open for you. But worry not, " +
                    "if after hearing our stories you wish to stay, you can stay as long as you desire. We may even " +
                    "find a safety daddy or mommy for you. ",
                button: [
                    { chatID: 7, text: "Oh. ok. I can do that ", callback: "" }
                ]
            },
            {
                chatID: 7,
                speaker: "a",
                text: "I do emplore you to stay for your own safety, but freedom is choice. " +
                    "The cave is yours to explore and any bed is free to use. Enjoy you stay here young one. ",
                button: [
                    { chatID: -1, text: "Thanks! ", callback: "quest0" }
                ]
            },
            {
                chatID: 8,
                speaker: "me",
                text: "Hi. ",
                button: [
                    { chatID: 9, text: "So tell me your story.", callback: "cg1" },
                    { chatID: -1, text: "Never mind. ", callback: "" }
                ]
            },
            {
                chatID: 9,
                speaker: "vag",
                text: "I'm so happy you asked! " +
                    "It all started when I was working at this fast food place. There was " +
                    "this girl, Zuri,  I was so in love with. Flawless dark skin, cute tight braids and butt any girl would " +
                    "be envious of. I was such a clueless boy back then that I just stared at her and never spoke " +
                    "a word. I was too afraid she would just laugh at me. Well one day me and my buddy were fooling " +
                    "around in the back kitchen when with the mop when I accidently tripped her! ",
                button: [
                    { chatID: 10, text: "oh no", callback: "" }
                ]
            },
            {
                chatID: 10,
                speaker: "vag",
                text: "Oh yes. She fell hard on the floor, ended up bruising her butt. Well she looked up at me " +
                    "with the most furious eyes I have ever seen. She stood up, grabbed me by my hair and gave me " +
                    "the biggest wedgie ever! Then made fun on my tighty whities. She said I had to wear panties the " +
                    "next time we had a shift together or she would tell our boss and get me fired. It was my first " +
                    "job and I was so scared! ",
                button: [
                    { chatID: 11, text: "I would be too. ", callback: "" }
                ]
            },
            {
                chatID: 11,
                speaker: "vag",
                text: "So I stole a pair from my sister and wore them into work the next day. My heart was beating " +
                    "so fast all shift. I was afriad someone would find out beside Zuri. After the lunch rush she told " +
                    "me to show her my panties or she'll tell. I asked to go to the back room so everyone didn't see, " +
                    "but she gave me the angriest look and said 'now.' So I flashed her my panties and begged her not " +
                    "to get me in trouble. Everyone laughed at me and she called me a sissy loser. I was panty boy " +
                    "for the rest of the time I worked there. ",
                button: [
                    { chatID: 12, text: "So did you ever date Zuri?", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "vag",
                text: "I wish! Zuri hated me. But I've never been so turned on in my entire life. That moment changed " +
                    "me forever. I started dressing up in my room, getting toys from the adult toy store in my town, and " +
                    "even paid for mistresses to use strapons on me while I dressed like a girl. I really went down the " +
                    "rabbit hole hard. ",
                button: [
                    { chatID: 13, text: "I'll say", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "vag",
                text: "One day I met with a new mistress. It was stupid, I should have been more safe, but she looked " +
                    "amazing! I agreed to get tied up with a hood over my head with her and she ended up kidnapping me. " +
                    "She must have drugged me somehow because everything was black then I woke up at the cult place in " +
                    "a cell. That " + sc.n("ubel") + " guy beat me once a week and they took turns on me so many times. ",
                button: [
                    { chatID: 14, text: "I know that feeling. ", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "vag",
                text: "After about six months I was taken to the cum bath ritual and changed into the girl you see now. " +
                    "I was about to be inseminated with the seed of Azrael, but the " + sc.n("queen") + " snuck into my " +
                    "cell and freed me and brought me here. I'm so happy she freed me. I'm sure they would have " +
                    "killed me if I stayed. I'm forever in her debt. That's why I stay to help others like me. ",
                button: [
                    { chatID: 15, text: "I'm glad you're here too. ", callback: "" }
                ]
            },
            {
                chatID: 15,
                speaker: "vag",
                text: "On the good side I did get the totally awesome pussy! Check it out!  ",
                button: [
                    { chatID: 16, text: "Huh?", callback: "cg2" },
                ]
            },
            {
                chatID: 16,
                speaker: "vag",
                text: "At first I was scared, but I've grown to love my pussy. I even changed my name from John to " +
                    sc.n("vag") + " after I accepted this is who I am now. ",
                button: [
                    { chatID: 17, text: "Well, it is a great pussy. ", callback: "cg1" },
                ]
            },
            {
                chatID: 17,
                speaker: "vag",
                text: "Thanks. I can't wait to get out of here and find a real femdom to take me in as her slave. " +
                    "I think with this pussy I'll have a real chance at life long servitude. ",
                button: [
                    { chatID: -1, text: "Best of luck to you. ", callback: "cg3" },
                ]
            },
            {
                chatID: 18,
                speaker: "vag",
                text: "Come by to see my totally amazing vag again? ",
                button: [
                    { chatID: 19, text: "Sure", callback: "cg2" },
                    { chatID: -1, text: "Nope, just clicking around. ", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "vag",
                text: "Masturbation is so amazing with a pussy. Totally full body orgasm. You should get one. ",
                button: [
                    { chatID: -1, text: "I wish", callback: "reset" },
                ]
            },
            {
                chatID: 20,
                speaker: "random",
                text: "None shall pass! ",
                button: [
                    { chatID: -1, text: "ok", callback: "" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};