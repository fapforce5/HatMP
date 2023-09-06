//Room name
var room800 = {};
room800.main = function () {
    var btnList = new Array();
    var activeCase = missy.activecase();
    if (!g.isNight()) {
       btnList.push({
                "type": "btn",
                "name": "watering",
                "left": 1018,
                "top": 386,
                "width": 333,
                "height": 579,
                "image": "800_ralph/watering.png"
        });
    }
    btnList.push({
        "type": "btn",
        "name": "door",
        "left": 1018,
        "top": 386,
        "width": 333,
        "height": 579,
        "image": "800_ralph/door.png",
        "night": "800_ralph/door_night.png"
    });
    if (activeCase.name === "case_saveralph" && !activeCase.isComplete) {
        chat(3, 800);
    }
    var navList = [0];
    $.each(btnList, function (i, v) {
        nav.button(v, 800);
    });
    nav.buildnav(navList);
};

room800.btnclick = function (name) {
    switch (name) {
        case "watering":
            nav.killbutton("watering");
            nav.button({
                "type": "btn",
                "name": "watering",
                "left": 746,
                "top": 72,
                "width": 601,
                "height": 1008,
                "image": "800_ralph/ralphmom.png"
            });
            if (sc.getstep("ralphsmom") === 0) {
                sc.setstep("ralphsmom", 1);
                chat(0, 800);
            }
            else {
                chat(1, 800);
            }
            break;
        case "door":
            chat(2, 800);
            break;
        case "fightRun":
            nav.bg("800_ralph/case6_6Run.jpg");
            chat(22, 800);
            break;
        case "fightLost":
            nav.killall();
            nav.bg("1_startScreen/black.jpg");
            chat(23, 800);
            break;
        case "fightWin":
            nav.killall();
            nav.bg("1_startScreen/case6_6Beat.jpg");
            chat(25, 800);
            break;
        default:
            break;
    }
};

room800.chatcatch = function (callback) {
    switch (callback) {
        case "case6_0":
            nav.killall();
            char.settime(22, 0);
            nav.bg("800_ralph/case6_0.jpg");
            break;
        case "fightStart":
            quickFight.init(12, "Cultist", "fightWin", "fightLost", "fightRun", 800);
            break;
        case "fightRun":
            nav.bg("800_ralph/case6_6Run.jpg");
            chat(22, 800);
            break;
        case "case6_badEnd":
            missy.set("activeCaseComplete", 2);
            char.addtime(157);
            sc.setstep("ralph", 300);
            char.room(0);
            break;
        case "case6_badEnd_lostFight":
            missy.set("activeCaseComplete", 2);
            sc.setstep("ralph", 300);
            missy.set("reusableCaseCounter", 1);
            char.room(800);
            break;
        case "case6_wakeup":
            char.addtime(87);
            nav.bg("800_ralph/bg.jpg", "800_ralph/bg_night.jpg");
            break;
        case "case6_6GoodEnd":
            nav.bg("800_ralph/case6_6GoodEnd.jpg");
            break;
        case "case6_6GoodEnd_complete":
            missy.set("activeCaseComplete", 1);
            char.addtime(78);
            //sc.setstep("ralph", 200);
            char.room(800);
            break;
        default:
            break;
    }
};

room800.chat = function (chatID) {
    if (chatID === 999) {
        var getProb = quickFight.getStats(12).winProb;
        var charisma = levels.get("charisma").l;
        var btnList = new Array();
        if (charisma < 5)
            btnList.push({ chatID: 20, text: "Talk them out of it [Charisma 5 - Failed]", callback: "" });
        else
            btnList.push({ chatID: 10, text: "Talk them out of it [Charisma 5 - Pass]", callback: "" });

        btnList.push({ chatID: -1, text: "Fight [" + getProb + "% chance to win]", callback: "fightStart" });
        btnList.push({ chatID: -1, text: "Run. Leave Ralph with them. ", callback: "fightRun" });
        return {
            chatID: 999,
            speaker: "cult",
            text: "We're going to pound your face into the floor! ",
            button: btnList
        };
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "ralphsmom",
            text: "Oh you must be Ralph's little friend, " + sc.n("me") + ". We've heard so much about you. He's inside if " +
                "you want to play in his room. It's so good that he has friends to play with. ",
            button: [
                { chatID: -1, text: "Thanks Ralph's mom!", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "ralphsmom",
            text: "Ralph's inside if you want to play. ",
            button: [
                { chatID: -1, text: "Thanks Ralph's mom!", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: "Not built yet. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Should I wait here till " + gv.timeTxt(22, 0) + " for Ralph to take his walk? ",
            button: [
                { chatID: 4, text: "I'll wait. Once it's clear I'll hide in those bushes. ", callback: "case6_0" },
                { chatID: -1, text: "Nah..", callback: "" }
            ]
        },
        {
            chatID: 4,
            speaker: "thinking",
            text: "My feet are so numb waiting in here. Hope he comes out soon. ",
            button: [
                { chatID: 5, text: "Wait a bit..", callback: "case6_1" }
            ]
        },
        {
            chatID: 5,
            speaker: "thinking",
            text: "There he is. Going out for his nightly walk. I don't see anyone else around. ",
            button: [
                { chatID: 6, text: "...", callback: "case6_2" }
            ]
        },
        {
            chatID: 6,
            speaker: "thinking",
            text: "Fuck. There's the cultist just pulled up in a van. I wonder what they're saying. ",
            button: [
                { chatID: 7, text: "...", callback: "case6_3" }
            ]
        },
        {
            chatID: 7,
            speaker: "thinking",
            text: "Aw crap! They drugged him. Fuck fuck fuck. ",
            button: [
                { chatID: 8, text: "...", callback: "case6_4" }
            ]
        },
        {
            chatID: 8,
            speaker: "thinking",
            text: "I have to do something. Fuck there's two of them. What should I do? I have to stop them. ",
            button: [
                { chatID: 9, text: ".....", callback: "case6_5" }
            ]
        },
        {
            chatID: 9,
            speaker: "cult",
            text: "Hey, Who's over there? ",
            button: [
                { chatID: 999, text: "", callback: "case6_6" }
            ]
        },
        {
            chatID: 10,
            speaker: "me",
            text: "Before you pound my face into the ground hear me out. That's my friend, Ralph. I know you're on a quest " +
                "to pick up sissies to take part in the transformation ceremony, but Ralph there isn't going to work. He's " +
                "a lost cause. ",
            button: [
                { chatID: 11, text: "", callback: "" }
            ]
        },
        {
            chatID: 11,
            speaker: "cult",
            text: "How do you know about the transformation ceremony? Are you in the cult too? ",
            button: [
                { chatID: 12, text: "...", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "me",
            text: "A friend of mine is, but that's not the point. You see you go around kidnapping people for the ceremony " +
                "at the commands from higher, but you're not quite sure why. In this case they don't have their facts straight " +
                "about Ralph. To transform you have to want to transform in your heart. Ralph here just likes wearing crossdressing. " +
                "He's doens't desire to be a girl, just to wear women's clothing. So you're about to kidnap some poor crossdresser " +
                "and subject him to all the evils and tortures for nothing. ",
            button: [
                { chatID: 13, text: "...", callback: "" }
            ]
        },
        {
            chatID: 13,
            speaker: "cult",
            text: "That may be true, but we come back without him our priest will beat us and put us in the torture chamber. We " +
                "have to take him back. If you know about the transformation ceremony I'm sure you've heard of the torture for failure. " +
                "I've had to torture some of the other followers. It was horrible. I can still hear their screams when I sleep.",
            button: [
                { chatID: 14, text: "...", callback: "" }
            ]
        },
        {
            chatID: 14,
            speaker: "me",
            text: "Have you ever thought about why you have to torture your fellow followers? If Azrael really was the way then " +
                "why are there so many people forced to follow him or get tortured? You're getting tortured becuase Azrael isn't " +
                "really in your heart. What's in your heart is a fear of pain and death. You're all there out of a fear of pain " +
                "and torture from the Carnal Union, not becuase Azrael wills it. Have you ever heard the word of Azrael yourself, " +
                "or just heard from others claim to? Is kidnapping a crossdresser really what Azrael would want? ",
            button: [
                { chatID: 15, text: "...", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "cult",
            text: "I haven't heard his word, but what are we supposed to do?  ",
            button: [
                { chatID: 16, text: "...", callback: "" }
            ]
        },
        {
            chatID: 16,
            speaker: "me",
            text: "You know what the right thing is. I know you're not evil, just doing what you're told to do. You may have joined " +
                "the Carnal Union, but Ralph here didn't. You're sneaking around at night wearing dark cloaks kidnapping people, " +
                "torturing them, and just doing evil things. It's time to stop doing evil things and let the good in your heart " +
                "guide you. Go back and tell your superiors that Ralph left town before you got here. Then do yourself a favor, " +
                "set yourself free. Leave the cult and live the life you want to live, not the life where you live in fear. ",
            button: [
                { chatID: 17, text: "...", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "cult",
            text: "...I don't know...",
            button: [
                { chatID: 18, text: "...", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "me",
            text: "You do know. Do the right thing. Leave Ralph to me. Stop doing evil things out of fear and go live your life. ",
            button: [
                { chatID: 19, text: "...", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "cult",
            text: "..ok. But tell Ralph to lay low for a while. Do us a favor and don't tell anyone about us being here.  ",
            button: [
                { chatID: 27, text: "I will. ", callback: "case6_6GoodEnd" }
            ]
        },
        {
            chatID: 20,
            speaker: "me",
            text: "You two should leave. He's just a crossdresser.  ",
            button: [
                { chatID: 21, text: "...", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "cult",
            text: "Fuck out of here. We're taking him! ",
            button: [
                { chatID: 999, text: "Crap", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "thinking",
            text: "There was no way I was going to win. It's too bad I had to leave Ralph there. I hope he survives " +
                "his kidnapping. I do feel terrible. ",
            button: [
                { chatID: -1, text: "...", callback: "case6_badEnd" }
            ]
        },
        {
            chatID: 23,
            speaker: "thinking",
            text: "Ouch ouch ouch. My head hurts...",
            button: [
                { chatID: 24, text: "...", callback: "case6_wakeup" }
            ]
        },
        {
            chatID: 24,
            speaker: "thinking",
            text: "Oh no. They're all gone. I failed Ralph! Sorry I wasn't strong enough dear friend. I'll find a way to get you " +
                "free. ",
            button: [
                { chatID: -1, text: "...", callback: "case6_badEnd_lostFight" }
            ]
        },
        {
            chatID: 25,
            speaker: "me",
            text: "You're going to go back to your leaders and tell them that Ralph left town and he's no longer here. " +
                "Then you're never going to come back here 'cause if you do you're not going to be walking away next time! " +
                "Do you understand? ",
            button: [
                { chatID: 26, text: "...", callback: "" }
            ]
        },
        {
            chatID: 26,
            speaker: "cult",
            text: "Y-y-yeah. We're never coming back, I swear it. Just let us go and you'll never see us again!  ",
            button: [
                { chatID: 27, text: "Get out of here! ", callback: "case6_6GoodEnd" }
            ]
        },
        {
            chatID: 27,
            speaker: "me",
            text: "Here's Ralph ",
            button: [
                { chatID: 28, text: "Get out of here! ", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "ralphsmom",
            text: "Oh good. we accept him as crossdresser ",
            button: [
                { chatID: -1, text: "Get out of here! ", callback: "case6_6GoodEnd_complete" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};