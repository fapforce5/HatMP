//Room name
var room802 = {};
room802.main = function () {
    if (sc.getMissionTask("ralph", "room", 9).inProgress) {
        sc.completeMissionTask("ralph", "room", 9);
        nav.button({
            "type": "img",
            "name": "ralph",
            "left": 979,
            "top": 86,
            "width": 401,
            "height": 994,
            "image": "802_ralphbedroom/ralph0.webp"
        }, 802);
        chat(40, 802);
        return;
    }
    if (g.rand(0, 5) === 0 && !daily.get("ralphRandEvent")) {
        daily.set("ralphRandEvent");
        switch (g.rand(0, 2)) {
            case 0: nav.bg("802_ralphbedroom/rand0.webp"); chat(6, 802); break;
            case 1: nav.bg("802_ralphbedroom/rand1.webp"); chat(8, 802); break;
        }
        return;
    }
    daily.set("ralphRandEvent");
    var btnList = [
        {
            "type": "img",
            "name": "ralph",
            "left": 979,
            "top": 86,
            "width": 401,
            "height": 994,
            "image": "802_ralphbedroom/ralph0.webp"
        }
    ];
    $.each(btnList, function (i, v) {
        nav.button(v, 802);
    });
    nav.buildnav([801, 0]);
    if (inv.has("blackDildo") && !daily.get("803bbcdildo") && sc.getMissionTask("ralph", "room", 1).notStarted) {
        chat(10, 802);
    }
    else {
        sc.select("game", "802_ralphbedroom/icon_game.webp", 0);
        sc.select("chat", "752_whore/whore_chat.png", 2);
    }
};

room802.btnclick = function (name) {
    switch (name) {
        case "game":
            room802.btnclick("killbtns");
            if (g.gethourdecimal() > 19) {
                chat(3, 802);
            }
            else if (daily.get("ralphSettlers")) {
                chat(4, 802);
            }
            else {
                chat(0, 802);
            }
            break;
        case "chat":
            room802.btnclick("killbtns");
            if (sc.getMissionTask("ralph", "room", 0).notStarted) {
                sc.startMission("ralph", "room");
                sc.completeMissionTask("ralph", "room", 0);
                chat(17, 802);
            }
            else if (sc.getMissionTask("ralph", "room", 6).inProgress) {
                chat(36, 802);
            }
            else if (sissy.st[0].ach && sc.getMissionTask("ralph", "room", 2).notStarted) {
                if (cl.isCrossdressing()) {
                    sc.completeMissionTask("ralph", "room", 2, false);
                    room802.btnclick("chat");
                    return;
                }
                chat(20, 802);
            }
            else if (sissy.st[10].ach && sc.getMissionTask("ralph", "room", 3).notStarted) {
                if (sissy.st[21].ach) {
                    sc.completeMissionTask("ralph", "room", 3, false);
                    room802.btnclick("chat");
                    return;
                }
                sc.completeMissionTask("ralph", "room", 3);
                chat(26, 802);
            }
            else if (sissy.st[21].ach && sc.getMissionTask("ralph", "room", 4).notStarted && !daily.get("801ralphjob")) {
                daily.set("801ralphjob");
                if (sc.getMissionTask("zoey", "sex", 3).notStarted) {
                    chat(31, 802);
                }
                else {
                    sc.completeMissionTask("ralph", "room", 4);
                    sc.startMissionTask("ralph", "room", 5);
                    future.add("802ralphjob", 999);
                    chat(32, 802);
                }
            }
            else if (daily.get("ralphChat")) {
                chat(5, 802);
            }
            else {
                chat(900, 802);
            }
            break;
        case "killbtns":
            nav.killbutton("chat");
            nav.killbutton("game");
            break;
        case "eatass":
            if (g.internal > 6) {
                nav.kill();
                levels.gotbj("m", "ralph");
                nav.bg("802_ralphbedroom/eatass1.webp");
                chat(43, 802);
            }
            else if (g.internal === 6 && cl.c.chastity !== null) {
                nav.bg("802_ralphbedroom/eatass6_c.webp");
            }
            else {
                nav.bg("802_ralphbedroom/eatass" + g.internal + ".webp");
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room802.chatcatch = function (callback) {
    switch (callback) {
        case "rand1_0":
            nav.bg("802_ralphbedroom/" + callback + ".webp");
            break;
        case "eatass0":
            nav.kill();
            nav.bg("802_ralphbedroom/" + callback + ".webp");
            g.internal = 1;
            nav.next("eatass");
            break;
        case "bbc0":
            nav.kill();
            nav.bg("802_ralphbedroom/" + callback + ".webp");
            break;
        case "settlers":
            nav.killall();
            nav.bg("802_ralphbedroom/settlers.webp");
            char.addtime(180);
            daily.set("ralphSettlers");
            if (g.rand(0, 2) === 0) {
                levels.mod("charisma", 10);
                levels.mod("pi", 10);
                chat(1, 802);
            }
            else {
                levels.mod("charisma", 30);
                levels.mod("pi", 30);
                chat(2, 802);
            }
            break;
        case "reset":
            char.room(802);
            break;
        case "good":
            sc.modLevel("ralph", 34, 7);
            char.room(802);
            break;
        case "blackdildobadend":
            sc.completeMissionTask("ralph", "room", 1, false);
            char.room(802);
            break;
        case "blackdildogoodend":
            sc.completeMissionTask("ralph", "room", 1);
            char.addtime(20);
            char.room(802);
            break;
        case "showpanties":
            g.internal = cl.c.pants;
            cl.c.pants = null;
            zcl.displayMain(0, 900, .2, "clothes", true);
            nav.modbutton("ralph", "802_ralphbedroom/ralph1.webp", null, null);
            if (cl.c.panties === null) {
                chat(21, 802);
            }
            else if (cl.pantiesTxt() === "panties") {
                chat(24, 802);
            }
            else {
                chat(23, 802);
            }
            break;
        case "dorkReset":
            cl.c.pants = g.internal;
            char.room(802);
            break;
        case "ralph6complete":
            sc.completeMissionTask("ralph", "room", 6);
            sc.startMissionTask("ralph", "room", 7);
            daily.set("nottodayralph");
            char.addtime(30);
            char.room(802);
            break;
        case "scselect":
            nav.buildnav([801, 0]);
            sc.select("game", "802_ralphbedroom/icon_game.webp", 0);
            sc.select("chat", "752_whore/whore_chat.png", 2);
            break;
        case "scselect50":
            gv.mod("money", 50);
            sc.select("game", "802_ralphbedroom/icon_game.webp", 0);
            sc.select("chat", "752_whore/whore_chat.png", 2);
            break;
        case "leave":
            char.room(0);
            break;
        default:
            break;
    }
};

room802.chat = function (chatID) {
    daily.set("ralphChat");
    if (chatID === 900) {
        let rchat = [
            { t: "Did you ever think bug bunny was sexy when he dressed up like a girl bunny?", r1: "Fuck yeah she's hot!", r2: "Hahaha. No" }, 
            { t: "Oh man, I just ordered the new Kekko Kamen doll doing a muff attack. So excited for it to come! ", r1: "Fuck yeah!", r2: "You need to grow up" },
            { t: "Who do you think would win an arm wrestling contest, Hulk or Super Man?", r1: "Super Man", r2: "Hulk" },
            { t: "I would do anything to be enslaved by Snu Snus!  ", r1: "We all do", r2: "They're way too big" },
            { t: "My dad got so mad at me last night when he caught me playing with my resin figures. I got the worst spanking of my life! ", r1: "That sucks. So glad I don't have a dad that spanks me", r2: "Hahah what? " },
            { t: "Do you really think Bruce Wayne would be able to date the president's wife if he really wanted to?", r1: "Bruce Wayne can do anything", r2: "No way! He'd never get past the secret service!" },
            { t: "Do girls fart cum after they have anal sex, or does it just come out like a poo?", r1: "I like to think they just randomly do cum farts", r2: "I'm sure they just push it out into the toilet" },
            { t: "Is it weird if your dad sleeps in the same bed as you? ", r1: "Not at all", r2: "Yeah. He should sleep with the mom" },
            { t: "My mom is so crazy! I tried to watch the big TV and she kicked me out to watch musicals! Who even watches musicals anymore?", r1: "I do. I love a good musical", r2: "Psh. Musicals are for losers." },
            { t: "If we were able to create a girl, like Frankenstein, but sexy, do you think she would have sex with us?", r1: "With us! Totally!", r2: "She would just tear us apart!" },
            { t: "I love chocolate soooo much! ", r1: "mmmm Chocolate", r2: "Hahah. Only girls eat chocolate" },
            { t: "Do you think if Nana were here she would have sex with us? I think she might. ", r1: "She's so dreamy", r2: "She would never have sex with guys like us" },
            { t: "Meiko Shiraki is so much my waifu!!!", r1: "I would so be her prisoner", r2: "She's a little mean don't you think" }
        ];
        let tc = rchat[g.rand(0, rchat.length)];
        return {
            chatID: 900,
            speaker: "ralph",
            text: tc.t,
            button: [
                { chatID: -1, text: tc.r1, callback: "good" },
                { chatID: -1, text: tc.r2, callback: "reset" },
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "ralph",
                text: "You know I'm going to wipe the floor with you!",
                button: [
                    { chatID: -1, text: "No way! ", callback: "settlers" },
                ]
            },
            {
                chatID: 1,
                speaker: "ralph",
                text: "Yes! You are such my bitch! Maybe next time you'll learn how to trade!",
                button: [
                    { chatID: -1, text: "*groan* Yeah, I'm your bitch", callback: "reset" },
                ]
            },
            {
                chatID: 2,
                speaker: "me",
                text: "Hahaha! Did the great game player lose! Maybe next time you'll learn how to " +
                    "properly use the robber! ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" },
                ]
            },
            {
                chatID: 3,
                speaker: "ralph",
                text: "It's starting to get pretty late. My dad will spank me if I'm up all night " +
                    "playing games. ",
                button: [
                    { chatID: -1, text: "oh, ok", callback: "reset" },
                ]
            },
            {
                chatID: 4,
                speaker: "ralph",
                text: "We already played silly!",
                button: [
                    { chatID: -1, text: "oh, ok", callback: "reset" },
                ]
            },
            {
                chatID: 5,
                speaker: "ralph",
                text: "I wish my resin figures would come to life. ",
                button: [
                    { chatID: -1, text: "oh, ok", callback: "reset" },
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "Why are you naked! Are you jackin' off!",
                button: [
                    { chatID: 7, text: "...", callback: "" },
                ]
            },
            {
                chatID: 7,
                speaker: "ralph",
                text: "No! No way! None of your business! Get out!! GET OUT!!",
                button: [
                    { chatID: -1, text: "ok, ok. I'm going. Also I'm never going to sit in that chair. ", callback: "leave" },
                ]
            },
            {
                chatID: 8,
                speaker: "me",
                text: sc.n("ralph") + "!",
                button: [
                    { chatID: 9, text: "...", callback: "rand1_0" },
                ]
            },
            {
                chatID: 9,
                speaker: "ralph",
                text: "Get out! get out get out get out get out get out get out!!!",
                button: [
                    { chatID: -1, text: "ok. I'm going", callback: "leave" },
                ]
            },
            {
                chatID: 10,
                speaker: "ralph",
                text: "Oh man! I just got yelled at for stealing my mom's dildo! But " +
                    "you know what, I didn't steal it. The only other person in the house " +
                    "was you. Did you steal her dildo? ",
                button: [
                    { chatID: 12, text: "Oh no. I'm so sorry. I just wanted to look at it.", callback: "" },
                    { chatID: 11, text: "Nope. Wasn't me", callback: "" },

                ]
            },
            {
                chatID: 11,
                speaker: "ralph",
                text: "ok. It wasn't me. I guess she may have lost it. ",
                button: [
                    { chatID: -1, text: "Yeah. Must have", callback: "blackdildobadend" },
                ]
            },
            {
                chatID: 12,
                speaker: "ralph",
                text: "Oh man! I go in so much trouble! I even said you took it, but they " +
                    "didn't believe me! So do you have it?",
                button: [
                    { chatID: 13, text: "Yeah. Why?", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "ralph",
                text: "I want to see it. I never knew my mom had a dildo. I want to see it. " +
                    "My dad totally took my Blade model and threw him in the trash. So embarrassing. " +
                    "You owe me, let me see my mom's dildo. ",
                button: [
                    { chatID: 14, text: "Yeah, here it is. ", callback: "bbc0" },
                ]
            },
            {
                chatID: 14,
                speaker: "ralph",
                text: "*sniff* Huh. Smells kinda funky. I wonder if this is what my " +
                    "mom smells like. You know I've never smelled a real pussy. I've " +
                    "never seen one either. ",
                button: [
                    { chatID: 15, text: "Really? ", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "ralph",
                text: "I think i saw one kind of at the beach. This one girl was sunbathing " +
                    "and she rolled over and I'm pretty sure part of her pussy slipped out and " +
                    "I saw half of it. It was pretty cool. Almost as good as that time I was at " +
                    "the beach and this girl's bikini top slipped down in a wave and I saw her boobs. " +
                    "Like full on total boobs. That was amazing. So do you think I can have it? To keep? ",
                button: [
                    { chatID: 16, text: "Have it? Your mom's dildo? ", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "ralph",
                text: "What? uh, no. Never mind. Put it away. You want to play some " +
                    "games? ",
                button: [
                    { chatID: -1, text: "Totally! ", callback: "blackdildogoodend" },
                ]
            },
            {
                chatID: 17,
                speaker: "ralph",
                text: "I was wondering when you would come by! This is my room! ",
                button: [
                    { chatID: 18, text: "You have a lot of stuff ", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "ralph",
                text: "Yeah. My dad says I have too many toys and I need to get a job, but all the jobs " +
                    "in this town are so lame. He's just mad becuase he has to travel for work on Friday, " +
                    "Saturday, and Sunday. The good thing is here not here to give me a hard time. ",
                button: [
                    { chatID: 19, text: "Totally ", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "ralph",
                text: "So you want to play a game? I'm totally the best! ",
                button: [
                    { chatID: -1, text: "It's on! ", callback: "reset" },
                ]
            },
            {
                chatID: 20,
                speaker: "ralph",
                text: "I'm so excited you're in class too! Don't tell my parents. They think I'm just taking " +
                    "a class at the community college. I'm just so giddy! I didn't think anyone else I knew " +
                    "would ever wear panties! Well except for girls, of course. It would be weird if the didn't. " +
                    "So are you wearing panties now? Can I see???",
                button: [
                    { chatID: -1, text: "I total am!", callback: "showpanties" },
                    { chatID: -1, text: "Oh no. I would never wear panties in public. ", callback: "reset" },
                ]
            },
            {
                chatID: 21,
                speaker: "ralph",
                text: "Dude. You're not wearing any underwear. I can totally see your dork. ",
                button: [
                    { chatID: 22, text: "Oh. hahaha. Yeah. Let me put that away. ", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "ralph",
                text: "Please do. And try not to pull your dick out in my room again. I can't imagine what " +
                    "my dad would say if he walked in on us like this. ",
                button: [
                    { chatID: -1, text: "Eeeee yeah. ", callback: "dorkReset" },
                ]
            },
            {
                chatID: 23,
                speaker: "ralph",
                text: "Dude. You're now wearing panties. You're just standing my my room in your underwear? " +
                    "Please put your pants back on. I don't know what my dad would say if he walked in on us " +
                    "like this. ",
                button: [
                    { chatID: -1, text: "Eeeee yeah. ", callback: "dorkReset" },
                ]
            },
            {
                chatID: 24,
                speaker: "ralph",
                text: "OMG! That's so cute! I mean cute for a dude in panties. I mean.. No. I mean that's " +  
                    "totally cute! I love it! I'm going to wear panties too. Not right now, but I will. But " +
                    "your panties look totally cute on you! I should wear panties. I will wear panties! ",
                button: [
                    { chatID: 25, text: "Dude, relax. You're free to wear panties when you want. ", callback: "" },
                ]
            },
            {
                chatID: 25,
                speaker: "ralph",
                text: "You're right. But I do love them so so much. I once stole a pair of my mom's panties. " +
                    "I couldn't help it. They were so silky smooth and cute. I wore them in my room for a " +
                    "whole hour before I changed back into my underwear. I was going to put them back, but " +
                    "my dad came home, so I just threw them into the garbage. Mom never asked me about them. " +
                    "I always wonder if she noticed they disappeared. I really am happy you're in class with me. " +
                    "I don't know if I could do it alone. ",
                button: [
                    { chatID: -1, text: "I'm glad you're there too. ", callback: "dorkReset" },
                ]
            },
            {
                chatID: 26,
                speaker: "ralph",
                text: "That mid-term was BRUTAL!!! Do you know " + sc.n("black") + " tried to put a thingy in my pee hole! " +
                    "I mean I get the dildo in the butt, but my pee hole! I tapped out right then and there! " +
                    "No way that was going in. ",
                button: [
                    { chatID: 27, text: "She's totally crazy! So why didn't you pick " + sc.n("cecilia") + "'s side?", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "ralph",
                text: "Oh. She's amazing. I could never be as hot as her. I mean, I'm a bigger guy, so I picked the " +
                    "big guy. No way I'll ever pass as a girl, no matter how much I want to. ",
                button: [
                    { chatID: 28, text: "...", callback: "" },
                ]
            },
            {
                chatID: 28,
                speaker: "me",
                text: "Listen. You are a girl. Other people may not know it, but I know it, and you know it. Also every " +
                    "in class knows it. Even Missy. Girls come in all shapes and sizes. Just becuase you're not a tiny " +
                    "girl makes you no less a girl. Besides. Some people like bigger girls. Don't ever try to " +
                    "pretend to be a boy around me. I know you. And I know that you're a girl. You just have to " +
                    "learn to accept who you really are. ",
                button: [
                    { chatID: 29, text: "...", callback: "" },
                ]
            },
            {
                chatID: 29,
                speaker: "ralph",
                text: "Oh yeah. I guess I do. Can I be a girl and still wear my normal clothes? ",
                button: [
                    { chatID: 30, text: "You've never heard of a tomboy?", callback: "" },
                ]
            },
            {
                chatID: 30,
                speaker: "ralph",
                text: "Yeah! I'm just a tomboy, girl. I'm not ready for pretty dresses yet. But I can be a tomboy! " +
                    "Thanks so much! I guess I really am a girl. ",
                button: [
                    { chatID: -1, text: "Any time.", callback: "reset" },
                ]
            },
            {
                chatID: 31,
                speaker: "ralph",
                text: "My dad's still pissed at me. He says I need to get a job. Do you know anywhere I can " +
                    "get one? ",
                button: [
                    { chatID: -1, text: "Can't think of any. [Need to complete " + sc.n("zoey") + "'s quest: fuck me please - Mon cœur souffre pour toi", callback: "reset" },
                ]
            },
            {
                chatID: 32,
                speaker: "ralph",
                text: "My dad's still pissed at me. He says I need to get a job. Do you know anywhere I can " +
                    "get one? ",
                button: [
                    { chatID: 33, text: "Hmmm. I know my girlfriend, " + sc.n("zoey") + " could use some help. ", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "ralph",
                text: "Really, What does she do? Whould would I do? ",
                button: [
                    { chatID: 34, text: "She owns her own bar and really needs help cleaning up. It's that bar Caravaggio.", callback: "" },
                ]
            },
            {
                chatID: 34,
                speaker: "ralph",
                text: "That's awesome! I tried to go in there once and they told me girls only. I would love to be " +
                    "around lesbians all the time!",
                button: [
                    { chatID: 35, text: "Well... It's not just lesbians. But I'll ask. ", callback: "" },
                ]
            },
            {
                chatID: 35,
                speaker: "ralph",
                text: "Sweet dude. You're the best!",
                button: [
                    { chatID: -1, text: "[I just need to go to " + sc.n("zoey") + " at her bar and ask now. ]", callback: "reset" },
                ]
            },
            {
                chatID: 36,
                speaker: "me",
                text: "Oh hey! I talked to " + sc.n("zoey") + " and she said you can have the job. It's a barback, " +
                    "so you'll only be cleaning. ",
                button: [
                    { chatID: 37, text: "...", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "ralph",
                text: "EEEEeeee!!!! Yes! Thank you dude! Do I need to get an apron? Can I wear these clothes, or should I " +
                    "get something else? What do bar backs wear? ",
                button: [
                    { chatID: 38, text: "Oh. You'll have to get a dress. Only people wearing dresses can go in. ", callback: "" },
                ]
            },
            {
                chatID: 38,
                speaker: "ralph",
                text: "Oh. I should have guessed that for a lesbian bar. I guess I'll get a dress. In a way I " +
                    "am a lesbian. I guess I could look the part. Is a kilt ok?",
                button: [
                    { chatID: 39, text: "I don't know. Also it's not quite a lesbian bar, but kind of is. ", callback: "" },
                ]
            },
            {
                chatID: 39,
                speaker: "ralph",
                text: "I'll figure something out. I can just change after I leave. I'm so excited!!! I'll see you there!!",
                button: [
                    { chatID: -1, text: "Totally", callback: "ralph6complete" },
                ]
            },
            {
                chatID: 40,
                speaker: "ralph",
                text: "You are so my hero!!! No more night time walks in my panties I'll tell you what! I " +
                    "wonder what they wanted from me? I don't know, but I'm totally going to stay in at " +
                    "night from now on! I can't thank you enough! Anything you want from me, it's yours! " +
                    "Anything, just name it! ",
                button: [
                    { chatID: -1, text: "Having you as a friend is enough. ", callback: "scselect" },
                    { chatID: 41, text: "I could use $50 ", callback: "" },
                    { chatID: 42, text: "You could eat my ass ", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "ralph",
                text: "Oh. yeah, sure. Thanks so much! ",
                button: [
                    { chatID: -1, text: "...", callback: "scselect50" },
                ]
            },
            {
                chatID: 42,
                speaker: "ralph",
                text: "Oh. I didn't...uhhh... Sure. I did say anything. It would be an honor. ",
                button: [
                    { chatID: -1, text: "Sweet! [Pull your pants down and bend over]", callback: "eatass0" },
                ]
            },
            {
                chatID: 43,
                speaker: "ralph",
                text: "Did I do good? ",
                button: [
                    { chatID: -1, text: "You did great. Those oral classes really payed off. ", callback: "scselect" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};