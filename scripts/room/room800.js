//Room name
var room800 = {};
room800.main = function () {
    if (cl.isLewd()) {
        chat(47, 800);
        return;
    }
    if (!sc.char[sc.i("ralphsmom")].show) {
        sc.show("ralphsmom");
        sc.show("ralphsdad");
        sc.show("ralph");
    }
    if (g.pass === "noRalphReset") {
        g.pass = null;
    }
    else {
        gv.mod("ralphcycle", 1);
    }
    var btnList = new Array();
    var activeCase = missy.activecase();
    if (!g.isNight()) {
        btnList.push({
            "type": "btn",
            "name": "door",
            "left": 772,
            "top": 436,
            "width": 97,
            "height": 197,
            "image": "800_ralph/door.png",
            "night": "800_ralph/door_night.png"
        });
        if (sc.getTimeline("ralphsmom").thisRoom) {
            btnList.push({
                "type": "btn",
                "name": "watering",
                "left": 1018,
                "top": 386,
                "width": 333,
                "height": 579,
                "image": "800_ralph/watering.png"
            });
            btnList.push({
                "type": "hand",
                "name": "wass",
                "left": 1018,
                "top": 503,
                "width": 101,
                "height": 102,
                "image": "800_ralph/wass.png"
            });
        }
    }
    
    if (activeCase.name === "case_saveralph" && !activeCase.isComplete) {
        chat(3, 800);
    }
    $.each(btnList, function (i, v) {
        nav.button(v, 800);
    });
    if(g.isNight())
        nav.buildnav([0]);
    else
        nav.buildnav([801, 0]);
};

room800.btnclick = function (name) {
    switch (name) {
        case "watering":
            nav.killbutton("watering");
            nav.button({
                "type": "img",
                "name": "watering",
                "left": 746,
                "top": 72,
                "width": 601,
                "height": 1008,
                "image": "800_ralph/ralphmom.png"
            }, 800);
            nav.killbutton("door");
            nav.button({
                "type": "btn",
                "name": "door",
                "left": 772,
                "top": 436,
                "width": 97,
                "height": 197,
                "image": "800_ralph/door.png",
                "night": "800_ralph/door_night.png"
            }, 800);
            sc.select("gift", "252_waitress/icon_gift.png", 0);
            sc.select("chat", "252_waitress/icon_chat.png", 1);
            sc.select("dick", "752_whore/whore_dick.png", 2);
            sc.selectCancel("cancel",3);
            break;
        case "wass":
            nav.killbutton("wass");
            if (sc.getSecret("ralphsmom").secretOut) {
                nav.killbutton("watering");
                nav.button({
                    "type": "img",
                    "name": "watering",
                    "left": 746,
                    "top": 72,
                    "width": 601,
                    "height": 1008,
                    "image": "800_ralph/ralphmom.png"
                }, 800);
                nav.killbutton("door");
                nav.button({
                    "type": "btn",
                    "name": "door",
                    "left": 772,
                    "top": 436,
                    "width": 97,
                    "height": 197,
                    "image": "800_ralph/door.png",
                    "night": "800_ralph/door_night.png"
                }, 800);
                chat(29, 800);
            }
            else if (sc.getLevel("ralphsmom") < 3) {
                if (!daily.get("spankRalphsMom")) {
                    daily.set("spankRalphsMom");
                    sc.modLevel("ralphsmom", 25, 3);
                }
                nav.killbutton("watering");
                nav.button({
                    "type": "img",
                    "name": "watering",
                    "left": 746,
                    "top": 72,
                    "width": 601,
                    "height": 1008,
                    "image": "800_ralph/ralphmom_s.png"
                }, 800);
                nav.killbutton("door");
                nav.button({
                    "type": "btn",
                    "name": "door",
                    "left": 772,
                    "top": 436,
                    "width": 97,
                    "height": 197,
                    "image": "800_ralph/door.png",
                    "night": "800_ralph/door_night.png"
                }, 800);
                chat(30, 800);
            }
            else {
                nav.killbutton("watering");
                nav.button({
                    "type": "img",
                    "name": "watering",
                    "left": 746,
                    "top": 72,
                    "width": 601,
                    "height": 1008,
                    "image": "800_ralph/ralphmom_h.png"
                }, 800);
                nav.killbutton("door");
                nav.button({
                    "type": "btn",
                    "name": "door",
                    "left": 772,
                    "top": 436,
                    "width": 97,
                    "height": 197,
                    "image": "800_ralph/door.png",
                    "night": "800_ralph/door_night.png"
                }, 800);
                chat(31, 800);
            }
            break;
        case "door":
            if (g.isNight())
                chat(2, 800);
            else
                char.room(801);
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
        case "cancel":
            nav.killbutton("gift");
            nav.killbutton("chat");
            nav.killbutton("dick");
            nav.killbutton("cancel");
            break;
        case "chat":
            if (!daily.get("800chat")) {
                daily.set("800chat");
                sc.modLevel("ralphsmom", 26, 6);
            }
            nav.kill();
            nav.button({
                "type": "img",
                "name": "watering",
                "left": 746,
                "top": 72,
                "width": 601,
                "height": 1008,
                "image": "800_ralph/ralphmom_h.png"
            });
            chat(500, 800);
            break;
        case "dick":
            nav.killbutton("gift");
            nav.killbutton("chat");
            nav.killbutton("dick");
            nav.killbutton("cancel");
            if (!daily.get("ralphsmompenis800")) {
                daily.set("ralphsmompenis800");
                sc.modLevel("ralphsmom", 51, 6);
            }
            else {
                chat(43, 800);
                return;
            }
            if (cl.c.chastity !== null) {
                sc.modSecret("ralphsmom", 100);
                nav.killbutton("watering");
                nav.button({
                    "type": "img",
                    "name": "watering",
                    "left": 746,
                    "top": 72,
                    "width": 601,
                    "height": 1008,
                    "image": "800_ralph/ralphmom_s.png"
                });
                chat(32, 800);
            }
            else if (!gender.canUseCock()) {
                sc.modSecret("ralphsmom", 100);
                nav.killbutton("watering");
                nav.button({
                    "type": "img",
                    "name": "watering",
                    "left": 746,
                    "top": 72,
                    "width": 601,
                    "height": 1008,
                    "image": "800_ralph/ralphmom_h.png"
                });
                chat(35, 800);
            }
            else if (sc.getLevel("ralphsmom") < 3) {
                nav.killbutton("watering");
                nav.button({
                    "type": "img",
                    "name": "watering",
                    "left": 746,
                    "top": 72,
                    "width": 601,
                    "height": 1008,
                    "image": "800_ralph/ralphmom_s.png"
                }, 800);
                chat(33, 800);
            }
            else {
                nav.kill();
                nav.bg("800_ralph/cockgrab0.webp");
                chat(34, 800);
            }
            break;
        case "gift":
            nav.killbutton("gift");
            nav.killbutton("chat");
            nav.killbutton("dick");
            nav.killbutton("cancel");
            var jl = 0;
            var tl = inv.gettype("a");
            for (let i = 0; i < tl.length; i++) {
                if (tl[i].count > 0) {
                    switch (tl[i].name) {
                        case "bouquet": sc.select("bouquet", "252_waitress/icon_bouquet.png", jl); jl++; break;
                        case "roses": sc.select("roses", "252_waitress/icon_roses.png", jl); jl++; break;
                        case "seal": sc.select("seal", "252_waitress/icon_seal.png", jl); jl++; break;
                        case "mug": sc.select("mug", "252_waitress/icon_mug.png", jl); jl++; break;
                        case "whoopee": sc.select("whoopee", "252_waitress/icon_whoopee.png", jl); jl++; break;
                    }
                }
            }
            sc.selectBack("choices", jl);
            break;
        case "bouquet":
        case "roses":
            if (!daily.get("ralphmomflowers") && sc.getLevel("ralphsmom") < 6) {
                daily.set("ralphmomflowers");
                sc.modLevel("ralphsmom", 34);
            }
            inv.use(name);
            chat(36, 800);
            break;
        case "seal":
        case "mug":
        case "whoopee":
            inv.use(name);
            chat(37, 800);
            break;
        case "choices":
            nav.kill();
            nav.button({
                "type": "img",
                "name": "watering",
                "left": 746,
                "top": 72,
                "width": 601,
                "height": 1008,
                "image": "800_ralph/ralphmom.png"
            }, 800);
            room800.chatcatch("choices");
            break;
        default:
            break;
    }
};

room800.chatcatch = function (callback) {
    switch (callback) {
        case "cockgrab0":
        case "cockgrab1":
        case "cockgrab2":
        case "cockgrab3":
        case "cockgrab10":
        case "cockgrab11":
            nav.bg("800_ralph/" + callback + ".webp");
            break;
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
        case "reset":
            g.pass = "noRalphReset";
            char.room(800);
            break;
        case "choices":
            sc.select("gift", "252_waitress/icon_gift.png", 0);
            sc.select("chat", "252_waitress/icon_chat.png", 1);
            sc.select("dick", "752_whore/whore_dick.png", 2);
            sc.selectCancel("cancel", 3);
            break;
        case "cockgrabpremature":
            gv.mod("arousal", 100);
            sc.completeMissionTask("ralphsmom", "room", 1);
            sc.modLevel("ralphsmom", 75, 6);
            nav.kill();
            nav.bg("800_ralph/bg.jpg", "800_ralph/bg_night.jpg");
            nav.button({
                "type": "btn",
                "name": "door",
                "left": 772,
                "top": 436,
                "width": 97,
                "height": 197,
                "image": "800_ralph/door.png",
                "night": "800_ralph/door_night.png"
            }, 800);
            break;
        case "cockgrab2checkdad":
            
            if (sc.getTimeline("ralphsdad").roomID < 800) {
                nav.bg("800_ralph/cockgrab1.webp");
                chat(44, 800);
            }
            else {
                nav.bg("800_ralph/cockgrab2.webp");
                chat(40, 800);
            }
            break;
        case "cockgrabcum":
            nav.kill();
            levels.gothandjob("f", "ralphsmom", false, true);
            sc.modLevel("ralphsmom", 75, 6);
            sc.completeMissionTask("ralphsmom", "room", 1);
            nav.bg("800_ralph/bg.jpg", "800_ralph/bg_night.jpg");
            nav.button({
                "type": "btn",
                "name": "door",
                "left": 772,
                "top": 436,
                "width": 97,
                "height": 197,
                "image": "800_ralph/door.png",
                "night": "800_ralph/door_night.png"
            }, 800);
            break;
        case "leave":
            char.room(0);
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
    else if (chatID === 500) {
        let carray = [];
        let ml = sc.getLevel("ralphsmom");
        if (ml < 3) {
            carray = [
                "Don't you just look " + gender.pronoun("pretty") + " today. I could gobble you up! hehehe",
                "You look hungry. You should come back when I'm in the kitchen. I do make some delicious cookies. ",
                "My husband is always saying I spend too much time with my flowers. Well you know what! They're the best flowers on this block!",
                "I do wish my husband didn't travel so much for work. It seems like he's here one week, gone the next. ",
                "My husband's always traveling for work. I do get so lonely when he's gone."
            ];
            if (cl.appearance() < 2) {
                carray.push("I bet a handsome boy like you gets all the girls. If I was younger.. ooo. If I was younger. ");
                carray.push("You are looking so good, I could eat you up. ");
                carray.push("You look a little like my husband when he was younger.");
                carray.push("I don't know what it is about young men, but you make me want to gobble you up!")
            }
            else {
                carray.push("You're so cute. You know I had a lesbian phase when I was younger. I would totally have dated you.");
                carray.push("You remind me of me when I was younger. Wild, free and hot!");

            }
            return {
                chatID: 500,
                speaker: "ralphsmom",
                text: carray[g.rand(0, carray.length)],
                button: [
                    { chatID: -1, text: "Thanks " + sc.n("ralphsmom"), callback: "choices" }
                ]
            };
        }
        else {//if (ml < 6) {
            carray = [
                "Don't you just look " + gender.pronoun("pretty") + " today. I could gobble you up! hehehe",
                "I do wish my husband didn't travel so much for work. It seems like he's here one week, gone the next. ",
                "My husband's always traveling for work. I do get so lonely when he's gone."
            ];
            if (cl.appearance() < 2) {
                carray.push("Well aren't you looking sexy today. ");
                carray.push("You know a woman always needs some good oral sex! I mean, when you go on dates with other girls, not me right now. Hehehe.");
                carray.push("I bet you fuck like a rock star. I do miss my party days. ");
                carray.push("I love penises... FLOWERS! I mean flowers!");
            }
            else {
                carray.push("You know, women are so much better at eating vagina than men. We know how it all works down there! ");
                carray.push("You sure do have a pretty face and sexy tongue.. uhh. never mind. ");
            }
            return {
                chatID: 500,
                speaker: "ralphsmom",
                text: carray[g.rand(0, carray.length)],
                button: [
                    { chatID: -1, text: "Oh Ralph's mom! You really do know how to make a " + gender.pronoun("boy") + " blush. ", callback: "choices" }
                ]
            };
        }
        //else {

        //}
    }
    var cArray = [
        {
            chatID: 0,
            speaker: "ralphsmom",
            text: "Oh you must be Ralph's little friend, " + sc.n("me") + ". We've heard so much about you. He's inside if " +
                "you want to play in his room. It's so good that he has friends to play with. ",
            button: [
                { chatID: -1, text: "Thanks Ralph's mom!", callback: "reset" }
            ]
        },
        {
            chatID: 1,
            speaker: "ralphsmom",
            text: "Ralph's inside if you want to play. ",
            button: [
                { chatID: -1, text: "Thanks Ralph's mom!", callback: "reset" }
            ]
        },
        {
            chatID: 2,
            speaker: "thinking",
            text: sc.n("ralph") + "'s parents don't like visitors at night. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "thinking",
            text: "Should I wait here till " + nav.convertTime(22, 0) + " for Ralph to take his walk? ",
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
                "why are there so many people forced to follow him or get tortured? You're getting tortured because Azrael isn't " +
                "really in your heart. What's in your heart is a fear of pain and death. You're all there out of a fear of pain " +
                "and torture from the Carnal Union, not because Azrael wills it. Have you ever heard the word of Azrael yourself, " +
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
        {
            chatID: 29,
            speaker: "ralphsmom",
            text: "Oh you. " + sc.n("ralph") + "'s inside. Now you two stay out of trouble " +
                "I know how hard the world is on your girls like yourselves. ",
            button: [
                { chatID: -1, text: "ok", callback: "choices" }
            ]
        },
        {
            chatID: 30,
            speaker: "ralphsmom",
            text: "oh! oh my. You smacked my butt. I'm sure you didn't mean to. " +
                sc.n("ralph") + "'s upstairs in his room again. ",
            button: [
                { chatID: -1, text: "ok", callback: "choices" }
            ]
        },
        {
            chatID: 31,
            speaker: "ralphsmom",
            text: "You dirty dirty boy. Don't let my husband see you do that! Hehehe",
            button: [
                { chatID: -1, text: "ok", callback: "choices" }
            ]
        },
        {
            chatID: 32,
            speaker: "ralphsmom",
            text: "Oh no. You're one of those sissies aren't you. If you're going to show your caged " +
                "penis to a girl, I hope you are extremely good at oral. hahaha. " +
                "I guess it makes sense that my little " + sc.n("ralph") + " would " +
                "have a sissy friend. He's a bit of a sissy too, but I'm sure you already know that. ",
            button: [
                { chatID: -1, text: "MMMhmmmm", callback: "reset" }
            ]
        },
        {
            chatID: 33,
            speaker: "ralphsmom",
            text: "Oh my, that does look nice... I mean put your penis away. " +
                "Why would you pull that out, out here! ",
            button: [
                { chatID: -1, text: "Yes ma'am", callback: "reset" }
            ]
        },
        {
            chatID: 34,
            speaker: "ralphsmom",
            text: "Oh my, is that for me? ",
            button: [
                { chatID: 38, text: "Yes ma'am", callback: "cockgrab1" }
            ]
        },
        {
            chatID: 35,
            speaker: "ralphsmom",
            text: "Oh honey. Look at the tiny little penis. You poor thing. I do hope " +
                "you are good with oral becuase " +
                "no girl's going to want to have that inside her. You can do what " +
                sc.n("ralph") + " does and just be a sissy. It's really not all that bad. " +
                "It'll be hard at first, but practice putting a dildo in your butt and in no " +
                "time you'll find your real self. I know you can do it! ",
            button: [
                { chatID: -1, text: "Oh. Thanks?", callback: "reset" }
            ]
        },
        {
            chatID: 36,
            speaker: "ralphsmom",
            text: "Oh you lovely young man! I do love flowers!  ",
            button: [
                { chatID: -1, text: "You're welcome!", callback: "reset" }
            ]
        },
        {
            chatID: 37,
            speaker: "ralphsmom",
            text: "Oh. Thanks. This is nice, but I really much prefer flowers. ",
            button: [
                { chatID: -1, text: "You're welcome!", callback: "reset" }
            ]
        },
        {
            chatID: 38,
            speaker: "ralphsmom",
            text: gender.pronoun("boy") + "s and their penises. Always looking to " +
                "cum. Does it feel good when I rub it?  ",
            button: [
                { chatID: 39, text: "So good..", callback: "cockgrab0" }
            ]
        },
        {
            chatID: 39,
            speaker: "ralphsmom",
            text: "I bet you want me to keep rubbing it till you cum, don't you? ",
            button: [
                { chatID: -1, text: "So much..", callback: "cockgrab2checkdad" }
            ]
        },
        {
            chatID: 40,
            speaker: "ralphsdad",
            text: "Hey honey, the oven's beeping. Can you check it?",
            button: [
                { chatID: 41, text: "*gulp*", callback: "" }
            ]
        },
        {
            chatID: 41,
            speaker: "ralphsmom",
            text: "Sure honey! Be there in a second.",
            button: [
                { chatID: 42, text: "...", callback: "cockgrab3" }
            ]
        },
        {
            chatID: 42,
            speaker: "ralphsmom",
            text: "Why do men act so clueless when the oven beeps. It's simple, you just " +
                "take out the cookies. I guess we'll have to finish this some other time " +
                "cutie. ",
            button: [
                { chatID: -1, text: "...yea... some other time. ", callback: "cockgrabpremature" }
            ]
        },
        {
            chatID: 43,
            speaker: "ralphsmom",
            text: "Are you just going to keep showing me your penis all day?",
            button: [
                { chatID: -1, text: "kinda. Yeah. I am a pervert", callback: "reset" }
            ]
        },
        {
            chatID: 44,
            speaker: "ralphsmom",
            text: "It's a good thing my husband is away on business. He would be so " +
                "pissed if he caught me giving my little boy's friend a hand job in " +
                "the garden. hehehe",
            button: [
                { chatID: 45, text: "...totally, keep going ", callback: "cockgrab10" }
            ]
        },
        {
            chatID: 45,
            speaker: "ralphsmom",
            text: "You like it when I rub your penis like this? My husband hates hand jobs. " +
                "He says it's the pussy or nothing. I do love feeling a hard cock in my " +
                "hand. And I'm great at hand jobs too!",
            button: [
                { chatID: 46, text: "...*ugh* so good... ", callback: "cockgrab11" }
            ]
        },
        {
            chatID: 46,
            speaker: "ralphsmom",
            text: "Hehehe. See I told you I was good at hand jobs. I've got you cum all over " +
                "my pussy. Gotta go change. I hope " + sc.n("ralph") + " doesn't see me going " +
                "to my room with your cum all over me. ",
            button: [
                { chatID: -1, text: "*huff* so good", callback: "cockgrabcum" }
            ]
        },
        {
            chatID: 47,
            speaker: "thinking",
            text: "I'm going to put some clothes on before going to my friend's house. ",
            button: [
                { chatID: -1, text: "...", callback: "leave" }
            ]
        },
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};