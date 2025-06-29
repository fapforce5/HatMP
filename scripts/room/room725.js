//Room name
var room725 = {};
room725.main = function () {
    if (cl.isLewd()) {
        nav.bg("725_club/no.jpg");
        chat(0, 725);
    }
    else if (sc.getMission("zoey", "cheating").inProgress
        && sc.getMissionTask("zoey", "cheating", 1).notStarted
        && !daily.get("chloe")) {
        nav.button({
            "type": "btn",
            "name": "chloe",
            "left": 463,
            "top": 428,
            "width": 446,
            "height": 621,
            "image": "725_club/chloe0.png"
        }, 725);
    }
    else {
        sc.select("drink", "725_club/icon_drink.png", 1);
        nav.button({
            "type": "btn",
            "name": "river",
            "left": 407,
            "top": 0,
            "width": 527,
            "height": 1080,
            "image": "725_club/river.png"
        }, 725);
        var navList = [0, 726, 727];

        nav.buildnav(navList);
    }
};

room725.btnclick = function (name) {
    let beer725;
    switch (name) {
        case "drink":
            nav.kill();
            nav.bg("725_club/bar.jpg");
            sc.select("drink4", "725_club/icon_drink_4.png", 0);
            sc.select("drink7", "725_club/icon_drink_7.png", 2);
            sc.select("drink10", "725_club/icon_drink_10.png", 4);
            sc.select("drink15", "725_club/icon_drink_15.png", 6);
            sc.selectCancel("reset", 8);
            break;
        case "drink4":
            if (gv.get("money") < 4) {
                chat(2, 725);
            }
            else {
                gv.mod("money", -4);
                char.addtime(20);
                beer725 = levels.beer(1);
                g.internal = { n: "beer", b: beer725 };
                chat(1000, 725);
            }
            break;
        case "drink7":
            if (gv.get("money") < 7) {
                chat(2, 725);
            }
            else {
                gv.mod("money", -7);
                char.addtime(20);
                beer725 = levels.beer(1);
                g.internal = { n: "whisky and soda", b: beer725 };
                chat(1000, 725);
            }
            break;
        case "drink10":
            if (gv.get("money") < 10) {
                chat(2, 725);
            }
            else {
                gv.mod("money", -10);
                levels.mod("xdress", 2);
                char.addtime(20);
                beer725 = levels.beer(1);
                g.internal = { n: "Strawberry Daiquiri ", b: beer725 };
                chat(1000, 725);
            }
            break;
        case "drink15":
            if (gv.get("money") < 15) {
                chat(2, 725);
            }
            else {
                gv.mod("money", -15);
                levels.mod("xdress", 4, 999);
                char.addtime(20);
                beer725 = levels.beer(1);
                g.internal = { n: "Pink Barbie Cocktail ", b: beer725 };
                chat(1000, 725);
            }
            break;
        case "chloe":
            if (sc.getstep("chloe") === 0) {
                if (sc.getstep("zoey") < 3)
                    chat(0, 725);
                else
                    chat(3, 725);
            }
            else
                chat(3, 725);
            break;
        case "river":
            chat(1, 725);
            break;
        case "chloeWin":
            chat(7, 725);
            break;
        case "chloeLose":
            chat(6, 725);
            break;
        case "reset":
            char.room(725);
            break;
        case "chloe4":
            nav.killall();
            nav.bg("725_club/chloe4.jpg");
            nav.next("chloe5");
            break;
        case "chloe5":
            nav.killall();
            chat(20, 725);
            break;
        case "chloe6":
            nav.killall();
            nav.bg("725_club/chloe6.jpg");
            nav.next("chloe7");
            break;
        case "chloe7":
            nav.killall();
            nav.bg("725_club/chloe7.jpg");
            chat(21, 725);
            break;
        default:
            break;
    }
};

room725.chatcatch = function (callback) {
    switch (callback) {
        case "chloe1":
        case "chloe1x":
        case "chloe2x":
        case "chloe3x":
        case "chloe4x":
        case "chloe8":
            nav.killall();
            nav.bg("725_club/" + callback + ".jpg");
            break;
        case "chloe2":
            nav.killall();
            nav.bg("map/300_closenight.jpg");
            setTimeout(function () {
                nav.bg("725_club/chloe2.jpg");
                chat(18, 725);
            }, 1000);
            break;
        case "chloe3":
            nav.bg("725_club/chloe3.jpg");
            nav.next("chloe4");
            break;
        case "chloe5":
            nav.killall();
            nav.bg("725_club/chloe5.jpg");
            
            nav.button({
                "type": "img",
                "name": "chloe5",
                "left": 0,
                "top": 541,
                "width": 954,
                "height": 539,
                "image": "725_club/chloe5_bj.gif"
            }, 725);
            nav.button({
                "type": "img",
                "name": "chloe5",
                "left": 0,
                "top": 0,
                "width": 950,
                "height": 544,
                "image": "725_club/chloe5_p.gif"
            }, 725);
            nav.button({
                "type": "img",
                "name": "chloe5",
                "left": 0,
                "top": 0,
                "width": 954,
                "height": 1080,
                "image": "725_club/chloe5.png"
            }, 725);
            nav.next("chloe6");
            break;
        case "chloe5y":
            daily.set("chloe");
            char.room(725);
            break;
        case "chloe5x":
            daily.set("chloe");
            char.addtime(87);
            char.room(725);
            break;
        case "chloefail":
            daily.set("chloe");
            char.addtime(30);
            char.room(725);
            break;
        case "chloeCharisma":
            if (cl.c.chastity === null)
                charisma.init(4, "chloeWin", "chloeLose", 725);
            else
                chat(10, 725);
            break;
        case "chloeGoodEnd":
            sc.completeMissionTask("zoey", "cheating", 1);
            levels.gotbj("f", "!emily");
            levels.oral(3, "f", "chloe");
            levels.fuckass("chloe", "f");
            levels.fuckpussy("!emily");
            levels.mod("xdress", 25, 999);
            char.addtime(185);
            char.room(0);
            break;
        case "passout":
            nav.killall();
            if (cl.appearance() > 3) {
                g.pass = 225;
                char.room(28);
            }
            else {
                g.pass = 450;
                char.room(28);
            }
            break;
        case "leave":
            char.room(0);
            break;
        case "reset":
            char.room(725);
            break;
        default:
            break;
    }
};

room725.chat = function (chatID) {
    if (chatID === 1000) {
        if (g.internal.b.passout) {
            return {
                chatID: 1000,
                speaker: "thinking",
                text: "You drank a " + g.internal.n + " and passout out. Looks like this " +
                    "sissy doesn't know when to stop. ",
                button: [
                    { chatID: -1, text: "...", callback: "passout" }
                ]
            };
        }
        else if (g.internal.nextOneDrunk) {
            return {
                chatID: 1000,
                speaker: "thinking",
                text: "You drank a " + g.internal.n + ". You're really drunk and are in " +
                    "probably going to pass out if you have another drink. ",
                button: [
                    { chatID: -1, text: "...", callback: "" }
                ]
            };
        }
        return {
            chatID: 1000,
            speaker: "thinking",
            text: "You drank a " + g.internal.n + ". ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "random",
                text: "I can't decide if I'm going to fuck you or kick you out. But my boss would fire me if I let you in, so " +
                    "you need to go. ",
                button: [
                    { chatID: -1, text: "Oh damn... bye", callback: "leave" }
                ]
            },
            {
                chatID: 1,
                speaker: "river",
                text: "Hey Skidmark! You still a virgin? ",
                button: [
                    { chatID: -1, text: "I hate you. ", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "thinking",
                text: "I don't have enough money for that. ",
                button: [
                    { chatID: -1, text: "...", callback: "reset" }
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "Oh crap. There's " + sc.n("chloe") + "! Is that Emily? Damn she got hot since " +
                    "high school. I don't think they see me yet. ",
                button: [
                    { chatID: 24, text: "Hang back and watch from afar. ", callback: "chloe1x" },
                    { chatID: 4, text: "Approach them both. ", callback: "chloe1" },
                    { chatID: -1, text: "Ignore them. I've got other things to do", callback: "chloe5y" },
                ]
            },
            {
                chatID: 4,
                speaker: "me",
                text: "Hey " + sc.n("chloe") + ", Emily. Didn't expect to see you too out tonight. ",
                button: [
                    { chatID: 5, text: "...", callback: "" }
                ]
            },
            {
                chatID: 5,
                speaker: "chloe",
                text: "Oh. Hi, " + sc.n("zoey") + "'s friend, right? I was just chatting with " +
                    "my new friend, Emily, here. Girl's night out. We were hoping to just hang " +
                    "out together. Hope you don't mind, but can we have some privacy? ",
                button: [
                    { chatID: -1, text: "I was hoping the three of us could have some privacy " + charisma.getStats(4).txt, callback: "chloeCharisma" },
                    { chatID: 6, text: "Oh, but I was hoping to chat a bit. ", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "chloe",
                text: "Sorry hon. Just hanging out with my friend. It is getting late. I'm probably  " +
                    "just going to go home now. Bye Em, Bye " + sc.n("zoey") + "'s friend. ",
                button: [
                    { chatID: -1, text: "Oh, sorry. Sure.", callback: "chloefail" },
                ]
            },
            {
                chatID: 7,
                speaker: "chloe",
                text: "Really? You are kinda cute, but I don't...",
                button: [
                    { chatID: 8, text: "...", callback: "" },
                ]
            },
            {
                chatID: 8,
                speaker: "!emily",
                text: "Awww, don't be like that. Hi " + sc.n("me") + ". It's been a while, hehehe.",
                button: [
                    { chatID: 9, text: "Totally. You're way hotter than high school!", callback: "" },
                ]
            },
            {
                chatID: 9,
                speaker: "!emily",
                text: "Pilates, it totally changed my life. You're still as cute as you ever were. " +
                    "You were so funny hehehe. Remember that time in gym when when " + sc.n("river") +
                    " pantsed you. I never laughed harder. You still wearing tighty whities? ",
                button: [
                    { chatID: 11, text: "There's only one way to find out for sure. ", callback: "" },
                ]
            },
            {
                chatID: 10,
                speaker: "thinking",
                text: "What am I asking? I'm wearing my chastity cage! I can't seduce these girls " +
                    "while I'm locked up! ",
                button: [
                    { chatID: 6, text: "...", callback: "" },
                ]
            },
            {
                chatID: 11,
                speaker: "!emily",
                text: "Hehehe. I guess I'll have to find out. What do you say " + sc.n("chloe") +
                    "? Want to find out what underwear he's wearing? ",
                button: [
                    { chatID: 12, text: "...", callback: "" },
                ]
            },
            {
                chatID: 12,
                speaker: "chloe",
                text: "But I thought we were going to... ",
                button: [
                    { chatID: 13, text: "...", callback: "" },
                ]
            },
            {
                chatID: 13,
                speaker: "!emily",
                text: "Naaaa. This is way more fun. So what do you say, should the three of us head " +
                    "back to my place?",
                button: [
                    { chatID: 16, text: "I'm in!", callback: "" },
                    { chatID: 14, text: "Oh, sorry. I couldn't ", callback: "" },
                ]
            },
            {
                chatID: 14,
                speaker: "chloe",
                text: "I've got to go. I promised another friend I would meet them. ",
                button: [
                    { chatID: 15, text: "...", callback: "" },
                ]
            },
            {
                chatID: 15,
                speaker: "!emily",
                text: "Awww what a pooper. We'll catch up later. Nighty-night ",
                button: [
                    { chatID: -1, text: "...", callback: "chloefail" },
                ]
            },
            {
                chatID: 16,
                speaker: "chloe",
                text: "Sure. This could be a lot of fun. " + sc.n("me") + ", this is just between " +
                    "us. No telling anyone, ok? ",
                button: [
                    { chatID: 17, text: "Ok!", callback: "" },
                ]
            },
            {
                chatID: 17,
                speaker: "!emily",
                text: "Sweet! Let's head back to my place! ",
                button: [
                    { chatID: -1, text: "Let's", callback: "chloe2" },
                ]
            },
            {
                chatID: 18,
                speaker: "!emily",
                text: "Oh my god! I have been wanting to do this forever! ",
                button: [
                    { chatID: 19, text: "...", callback: "" },
                ]
            },
            {
                chatID: 19,
                speaker: "chloe",
                text: "I hope you have the stamina, 'cause we fuck all night! Now time to get " +
                    "out of these clothes baby. ",
                button: [
                    { chatID: -1, text: "Oh yeah! ", callback: "chloe3" },
                ]
            },
            {
                chatID: 20,
                speaker: "thinking",
                text: "Holy shit! I'm totally going fuck these two super hot chicks! I don't " +
                    "know how I pulled this off, but fuck. I'm totally going to fuck them! ",
                button: [
                    { chatID: -1, text: "Oh yeah! ", callback: "chloe5" },
                ]
            },
            {
                chatID: 21,
                speaker: "!emily",
                text: "You were amazing! I came so hard my pussy is still quivering. ",
                button: [
                    { chatID: 22, text: "...", callback: "" },
                ]
            },
            {
                chatID: 22,
                speaker: "chloe",
                text: "Now spray your cum all over our faces! I want to taste you while I lick " +
                    "Emily's face. Cum for us baby! ",
                button: [
                    { chatID: 23, text: "Oh fuck!", callback: "chloe8" },
                ]
            },
            {
                chatID: 23,
                speaker: "!emily",
                text: "Hehehe! So much cum from such a big boy! Best fuck of my life! Now we have " +
                    "to go to bed. You really  fucked the energy out of me. ",
                button: [
                    { chatID: -1, text: "Ok. 'night you two! ", callback: "chloeGoodEnd" },
                ]
            },
            {
                chatID: 24,
                speaker: "thinking",
                text: "I'll just hang back here with this group of frat boys. See if I can catch them " +
                    "making out or something. ",
                button: [
                    { chatID: 25, text: "[Wait and stakeout]", callback: "chloe2x" },
                ]
            },
            {
                chatID: 25,
                speaker: "thinking",
                text: "They're taking forever! I hate stake outs. Also that sissy is so going " +
                    "to get fucked by these two after her shift. ",
                button: [
                    { chatID: 26, text: "[Wait and stakeout]", callback: "chloe3x" },
                ]
            },
            {
                chatID: 26,
                speaker: "blade",
                text: "Hey faggot! You've just been standing here all night staring at those " +
                    "two girls. You can fuck off. We're going to fuck them both. hehehehe",
                button: [
                    { chatID: 27, text: "What? No, I'm just hanging out", callback: "" },
                ]
            },
            {
                chatID: 27,
                speaker: "blade",
                text: "Whatever. Later loser. ",
                button: [
                    { chatID: 28, text: "*groan*", callback: "chloe4x" },
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "What the fuck! *ugh* They got away. I guess those three losers aren't " +
                    "going to fuck these girls either... Maybe next time I should try talking " +
                    "to them and gather information. ",
                button: [
                    { chatID: -1, text: "*groan*", callback: "chloe5x" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};