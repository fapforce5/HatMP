//Room name
var room176 = {};
room176.main = function () {
    switch (gv.get("sissySchoolClass")) {
        case "oral101":
            if (gv.get("sissySchoolClassDays") === 0) {
                chat(0, 176);
            }
            else {
                nav.bg("176_oral/oral1.jpg");
                chat(21, 176);
            }
            break;
        case "oral203":
            nav.bg("176_oral/oral203_0.jpg");
            chat(47, 176);
            break;
        case "finalx":
            if (gv.get("sissySchoolClassDays") === 0) {
                nav.bg("180_ballroom/bg.jpg");
                chat(59, 176);
            }
            else {
                nav.bg("176_oral/final0.jpg");
                chat(69, 176);
            }
            break;
    }
};

room176.btnclick = function (name) {
    switch (name) {
        case "blackmailSuccess":
            levels.mod("charisma", 20, 999);
            chat(34, 176);
            break;
        case "blackmailFail":
            room176.chatcatch("oral20");
            chat(35, 176);
            break;
        case "kiss":
        case "tongue":
            nav.kill();
            nav.button({
                "type": name,
                "name": "clit",
                "left": 1162,
                "top": 755,
                "width": 41,
                "height": 41,
                "image": "176_oral/smallCircle.png"
            }, 176);
            nav.button({
                "type": name,
                "name": "pphole",
                "left": 1162,
                "top": 795,
                "width": 41,
                "height": 41,
                "image": "176_oral/smallCircle.png"
            }, 176);
            nav.button({
                "type": name,
                "name": "pussy",
                "left": 1162,
                "top": 837,
                "width": 41,
                "height": 41,
                "image": "176_oral/smallCircle.png"
            }, 176);
            nav.button({
                "type": name,
                "name": "asshole",
                "left": 1150,
                "top": 930,
                "width": 61,
                "height": 61,
                "image": "176_oral/medCircle.png"
            }, 176);
            nav.button({
                "type": name,
                "name": "pussylips",
                "left": 1204,
                "top": 783,
                "width": 61,
                "height": 61,
                "image": "176_oral/medCircle.png"
            }, 176);
            nav.button({
                "type": name,
                "name": "leg",
                "left": 1331,
                "top": 652,
                "width": 136,
                "height": 136,
                "image": "176_oral/bigCircle.png"
            }, 176);
            break;
        case "clit":
            if (g.internal.love < 1) {
                g.internal.chatid = 1002;
            }
            else if (g.internal.love < 2) {
                g.internal.chatid = 1002;
            }
            else {
                g.internal.chatid = 1002;
                g.internal.love++;
            }
            room176.btnclick("drawNext");
            break;
        case "pphole":
            g.internal.chatid = 1000;
            room176.btnclick("drawNext");
            break;
        case "pussy":
            if (g.internal.love === 1) {
                g.internal.love++;
            }
            g.internal.chatid = 1003;
            room176.btnclick("drawNext");
            break;
        case "pussylips":
            if (g.internal.love === 1) {
                g.internal.love++;
            }
            g.internal.chatid = 1003;
            room176.btnclick("drawNext");
            break;
        case "asshole":
            g.internal.chatid = 1001;
            room176.btnclick("drawNext");
            break;
        case "leg":
            if (g.internal.love < 1) {
                g.internal.love++;
            }
            g.internal.chatid = 1004;
            room176.btnclick("drawNext");
            break;
        case "drawNext":
            nav.killall();
            if (g.internal.love > 2) {
                nav.bg("176_oral/oral203_l_3.jpg");
                levels.mod("oral", 50, 999);
                chat(56, 176);
            }
            else if (g.internal.love < -1) {
                nav.bg("176_oral/oral203_l_-2.jpg");
                chat(57, 176);
            }
            else {
                nav.bg("176_oral/oral203_l_" + g.internal.love + ".jpg");
                chat(g.internal.chatid, 176);
            }
            break;
        case "final4":
            nav.modbutton("final4", "176_oral/final4_1.webp", null, null);
            chat(77, 176);
            break;
        case "final5":
            nav.modbutton("final5", "176_oral/final5_1.webp", null, null);
            chat(78, 176);
            break;
        case "final6":
            nav.modbutton("final6", "176_oral/final6_1.webp", null, null);
            chat(79, 176);
            break;
        case "final7":
            nav.modbutton("final7", "176_oral/final7_1.webp", null, null);
            chat(80, 176);
            break;
        default:
            break;
    }
};

room176.chatcatch = function (callback) {
    switch (callback) {
        case "oral1":
        case "oral2":
        case "oral3":
        case "oral4":
        case "oral6":
        case "oral9":
        case "oral10":
        case "oral11":
        case "oral12":
        case "oral13":
        case "oral14":
        case "oral15":
        case "oral16":
        case "oral17":
        case "oral18":
        case "oral19":
        case "oral20":
        case "oral21":
        case "oral22":
        case "oral23":
        case "oral24":
        case "oral25":
        case "oral203_1":
        case "oral203_2":
        case "oral203_bad":
        case "final_a":
        case "final1":
        case "final2":
            nav.bg("176_oral/" + callback + ".jpg");
            break;
        case "oral5":
            levels.mod("oral", 100, 999);
            //levels.mod("oral", 20, 999);
            nav.bg("176_oral/" + callback + ".jpg");
            break;
        case "oral7":
            nav.bg("176_oral/" + callback + ".jpg");
            levels.mod("oral", 100, 999);
            //levels.mod("oral", 40, 999);
            if (levels.get("oral").l < 2)
                chat(17, 176);
            else
                chat(20, 176);
            break;
        case "oral8":
            nav.bg("176_oral/oral8.jpg");
            if (!inv.has("whiteDildo")) 
                inv.add("whiteDildo");
            break;
        case "sub":
            levels.mod("oral", 100, 999);
            //levels.mod("sub", 20, 999);
            break;
        case "dom":
            levels.mod("oral", 100, 999);
            //levels.mod("dom", 20, 999);
            break;
        case "oralEnd":
            gv.mod("sissySchoolClassDays", 1);
            char.settime(17, 15);
            char.room(0);
            break;
        case "oralEndPass":
            sissy.passclass(true);
            break;
        case "oral20Check":
            charisma.init(8, "blackmailSuccess", "blackmailFail", 176);
            break;
        case "oral21x":
            nav.bg("205_chastity/chast0_9_bad.jpg");
            var lolaSecret = sc.getSecret("lola").secretOut;
            var evaSecret = sc.getSecret("eva").secretOut;
            if (lolaSecret || evaSecret)
                chat(39, 176);
            else {
                sc.modSecret("lola", 75);
                sc.modSecret("eva", 75);

                lolaSecret = sc.getSecret("lola").secretOut;
                evaSecret = sc.getSecret("eva").secretOut;
                if (lolaSecret || evaSecret)
                    chat(40, 176);
                else
                    chat(41, 176);
            }
            break;
        case "oral26":
            levels.oral(3, "m", "philbert", true);
            sc.completeMissionTask("philbert", "bully", 1);
            sc.show("philbert");
            nav.bg("205_chastity/chast0_9_bad.jpg");
            break;
        case "oral203_lick_start":
            nav.killall();
            g.internal = { step: 0, love: 0, chatid: 0 };
            nav.bg("176_oral/oral203_l_0.jpg");
            sc.select("kiss", "176_oral/icon_kiss.png", 0);
            sc.select("tongue", "176_oral/icon_lick.png", 1);
            break;
        case "oral203_lick_end":
            sissy.passclass(true);
            break;
        case "oral203_icons":
            nav.killall();
            g.internal.step++;
            sc.select("kiss", "176_oral/icon_kiss.png", 0);
            sc.select("tongue", "176_oral/icon_lick.png", 1);
            break;
        case "finalFirstEventEnd":
            sc.show("tudor");
            gv.mod("sissySchoolClassDays", 1);
            char.settime(17, 18);
            char.room(201);
            future.add("sissyfinal", 6);
            break;
        case "final4":
            nav.kill();
            nav.bg("176_oral/final4.jpg");
            nav.button({
                "type": "kiss",
                "name": "final4",
                "left": 871,
                "top": 499,
                "width": 248,
                "height": 90,
                "image": "176_oral/final4.webp"
            }, 176);
            break;
        case "final5":
            nav.kill();
            nav.bg("176_oral/final5.jpg");
            nav.button({
                "type": "kiss",
                "name": "final5",
                "left": 962,
                "top": 345,
                "width": 268,
                "height": 184,
                "image": "176_oral/final5.webp"
            }, 176);
            break;
        case "final6":
            nav.kill();
            nav.bg("176_oral/final6.jpg");
            nav.button({
                "type": "kiss",
                "name": "final6",
                "left": 744,
                "top": 392,
                "width": 470,
                "height": 290,
                "image": "176_oral/final6.webp"
            }, 176);
            break;
        case "final7":
            nav.kill();
            nav.bg("176_oral/final7.jpg");
            nav.button({
                "type": "kiss",
                "name": "final7",
                "left": 742,
                "top": 180,
                "width": 396,
                "height": 530,
                "image": "176_oral/final7.webp"
            }, 176);
            break;
        case "final8":
            nav.kill();
            nav.bg("176_oral/final8.jpg");
            zcl.displayMain(350, 520, .08, "clothes", true);
            inv.add("diploma");
            break;
        case "final9":
            zcl.kill();
            break;
        case "final10":
            if (missy.cases[7].complete && !missy.cases[7].success) {
                pic.add("class_0");
                nav.bg("176_oral/final10_0.jpg");
            }
            else {
                pic.add("class_1");
                nav.bg("176_oral/final10_1.jpg");
            }
            break;
        case "final11":
            nav.bg("176_oral/final11.jpg");
            break;
        case "finalfinal":
            char.addtime(156);
            gv.set("sissySchoolClass", null);
            gv.set("sissySchoolClassDays", 0);
            levels.mod("xdress", 200);
            gv.set("pinkroomopen", true);
            sissy.st[21].ach = true;
            char.room(207);
            break;
        default:
            break;
    }
};

room176.chat = function (chatID) {
    if (chatID === 1000) {
        if(g.internal.love < 1)
        return {
            chatID: 1000,
            speaker: "p",
            text: "That's her piss hole. Try kissing her thigh. ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
            ]
            };
        return {
            chatID: 1000,
            speaker: "p",
            text: "That's her piss hole. Focus on a different part of her pussy. ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
            ]
        };
    }
    else if (chatID === 1001) {
        if (g.internal.love < 1)
            return {
                chatID: 1001,
                speaker: "p",
                text: "She's not a sissy, leave her asshole alone. Try kissing her thigh. ",
                button: [
                    { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
                ]
            };
        return {
            chatID: 1001,
            speaker: "p",
            text: "She's not a sissy, leave her asshole alone. Focus on her pussy. ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
            ]
        };
    }
    else if (chatID === 1002) {
        if (g.internal.love < 1)
            return {
                chatID: 1002,
                speaker: "p",
                text: "You have to warm her up first.  Try kissing her thigh. ",
                button: [
                    { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
                ]
            };
        return {
            chatID: 1002,
            speaker: "p",
            text: "You have to warm her a bit more before focusing on her clit. Arouse her some more. ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
            ]
        };
    }
    else if (chatID === 1003) {
        if (g.internal.love === 2)
            return {
                chatID: 1003,
                speaker: "p",
                text: "Good girl. Now she's warmed up. Lick her clit. ",
                button: [
                    { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
                ]
            };
        else if (g.internal.love < 1) {
            return {
                chatID: 1002,
                speaker: "p",
                text: "You have to warm her a bit more. Kiss her thigh. ",
                button: [
                    { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
                ]
            };
        }
        return {
            chatID: 1002,
            speaker: "p",
            text: "Good girl. Keep it up. ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
            ]
        };
    }
    else if (chatID === 1004) {
        if (g.internal.love < 2)
            return {
                chatID: 1002,
                speaker: "p",
                text: "Good girl. Now focus on her rose pedals.",
                button: [
                    { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
                ]
            };
        return {
            chatID: 1002,
            speaker: "p",
            text: "Good girl. Do it again to warm her up. ",
            button: [
                { chatID: -1, text: "Oh. ok", callback: "oral203_icons" },
            ]
        };
    }
    else {

        var cArray = [
            {
                chatID: 0,
                speaker: "!philbert",
                text: "I can't wait for this class! I'm going to totally eat that pink sluts pussy so good she's going to be " +
                    "visiting my house after school for the entire meal!  ",
                button: [
                    { chatID: 1, text: "...", callback: "" }
                ]
            },
            {
                chatID: 1,
                speaker: "!sporty",
                text: "You know we're in Sissy School right? Why would someone as hot as " + sc.n("p") + " fuck someone in this school? " +
                    "Plus what do you think the dildos are for? ",
                button: [
                    { chatID: 2, text: "...", callback: "" }
                ]
            },
            {
                chatID: 2,
                speaker: "!philbert",
                text: "That chick's a total slut! I bet she totally fucks. I have an amazing cock and I know how to use it. I'm " +
                    "going to bang her twat till she's screaming my name. ",
                button: [
                    { chatID: 3, text: "...", callback: "" }
                ]
            },
            {
                chatID: 3,
                speaker: "!sporty",
                text: "Whatever. If you're so good at fucking why are you here? ",
                button: [
                    { chatID: 4, text: "...", callback: "" }
                ]
            },
            {
                chatID: 4,
                speaker: "!philbert",
                text: "Didn't you see the flyer? Those chicks are all hot. Even " + sc.n("black") + ". I'm going to fuck them all! " +
                    "Cream in them till all their holes are drooling my cum. Just watch. ",
                button: [
                    { chatID: 5, text: "Wha...", callback: "oral1" }
                ]
            },
            {
                chatID: 5,
                speaker: "p",
                text: "Ok sluts, welcome to to oral 101, where you learn how to use your sissy mouths. I know most sluts think " +
                    "they're amazing at oral because their partner said they did good. Well you're WRONG! They said you did fine " +
                    "because they were bored and wanted to do anything other than let you continue rubbing your stupid mouth " +
                    "over their naughty bits while they fantasize someone cuter. ",
                button: [
                    { chatID: 6, text: "...", callback: "" }
                ]
            },
            {
                chatID: 6,
                speaker: "p",
                text: "When I get done with you, you'll be able to actuall please someone. We're going to focus on the tongue. " +
                    "When we're done you'll know how to please the head of a cock. Now every grab their dildo.  ",
                button: [
                    { chatID: 7, text: "...", callback: "oral2" }
                ]
            },
            {
                chatID: 7,
                speaker: "p",
                text: "Let me show you how to make love to the cock. First you have to take the initiative. Most men appreciate " +
                    "a slut that just goes in and takes control of their cock. It's such a boner killer when you when you're all timid " +
                    "and put in no work. Now I have to be naked if I'm going to make love to this cock. I hope you don't mind. And " +
                    "if you do, you can go fuck yourself. At home. With a dildo. ",
                button: [
                    { chatID: 8, text: "...", callback: "oral3" }
                ]
            },
            {
                chatID: 8,
                speaker: "p",
                text: "Ok. Lets make love to our cocks. We'll start by licking the tip. Don't just shove it in your slutty mouths, " +
                    "really lick around the head. ",
                button: [
                    { chatID: 9, text: "...", callback: "oral4" }
                ]
            },
            {
                chatID: 9,
                speaker: "p",
                text: "A good amount of drool will really give that extra slippery feeling that men love. Now you all try it. " +
                    "lick that cock. ",
                button: [
                    { chatID: 10, text: "...", callback: "oral5" }
                ]
            },
            {
                chatID: 10,
                speaker: "p",
                text: "Nice and sloppy. You really know how to drool on the cock. Good job! Hey Philbert don't stare at it, " +
                    "suck it. Just a second I have to fix some techniques. ",
                button: [
                    { chatID: 11, text: "mmmmMMmm ok", callback: "oral6" }
                ]
            },
            {
                chatID: 11,
                speaker: "p",
                text: "Put that cock in your mouth slut. This isn't hand job class. ",
                button: [
                    { chatID: 19, text: "...", callback: "" }
                ]
            },
            {
                chatID: 12,
                speaker: "!philbert",
                text: "Say, since this is oral 101, how about instead of sucking this dildo, I do some real oral. On you. I'll " +
                    "give you the orgasm of your life. ",
                button: [
                    { chatID: 13, text: "...", callback: "" }
                ]
            },
            {
                chatID: 13,
                speaker: "p",
                text: "Ok slick. Let's see what you have. If you can make me orgasm, I'll let everyone have a taste and stop sucking " +
                    "on dildos. But if you don't, you have to human centipede for me. Ass to mouth for each of you and crawl around " +
                    "the bench. Deal?",
                button: [
                    { chatID: 14, text: "Oh, Hmmmmm", callback: "" }
                ]
            },
            {
                chatID: 14,
                speaker: "!thomas",
                text: "I don't agree to this deal. I would rather just keep sucking the dildo. ",
                button: [
                    { chatID: 22, text: "What! Shut up Thomas. We agree! I want to eat that pussy. ", callback: "" },
                    { chatID: 15, text: "Yeah. I don't agree either. ", callback: "sub" },
                ]
            },
            {
                chatID: 15,
                speaker: "!sporty",
                text: "No deal. Philbert can keep sucking his dildo like the rest of us. ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "p",
                text: "Well there you go. It's test time. Let's see how good you sissies are. ",
                button: [
                    { chatID: 17, text: "...", callback: "oral7" },
                ]
            },
            {
                chatID: 17,
                speaker: "p",
                text: "Not terrible, but not good. You need to improve that mouth of yours if you're going to give a great " +
                    "blowjob. ",
                button: [
                    { chatID: 18, text: "mmmHhhhmmmm", callback: "" },
                ]
            },
            {
                chatID: 18,
                speaker: "p",
                text: "Your homework is to suck cock at home. Work on your technique. ",
                button: [
                    { chatID: -1, text: "...", callback: "oralEnd" },
                ]
            },
            {
                chatID: 19,
                speaker: "p",
                text: "I'm giving you all a cock to take home to help you. You're welcome. " +
                    " Your homework is to suck cock that cock. Focus on your technique. ",
                button: [
                    { chatID: 12, text: "...", callback: "oral8" },
                ]
            },
            {
                chatID: 20,
                speaker: "p",
                text: "Ooooo, you're really loving that cock head. Love the sloppy drool. If I had a dick I would cum  " +
                    "down your cute tight throat. You pass! Good job slut! ",
                button: [
                    { chatID: -1, text: "Sweet!", callback: "oralEndPass" },
                ]
            },
            {
                chatID: 21,
                speaker: "p",
                text: "Ok sluts. I hope you've been doing your homework! Grab your cocks and start sucking while I slip into " +
                    "something more naked! ",
                button: [
                    { chatID: 16, text: "Sweet!", callback: "oral5" },
                ]
            },
            {
                chatID: 22,
                speaker: "!sporty",
                text: "I hate you guys. I just wanted to suck my dildo, but since " + sc.n("me") + " said yes, I guess I'm in. ",
                button: [
                    { chatID: 23, text: "Yeah! You better make her cum! ", callback: "oral10" },
                ]
            },
            {
                chatID: 23,
                speaker: "p",
                text: "It's a deal! Philbert get in there and give me the best orgasm of my life. Eat my pussy like a " +
                    "sex starved octogenarian who hasn't had sex in decades. ",
                button: [
                    { chatID: 24, text: "Eat that pussy Philbert!", callback: "oral11" },
                ]
            },
            {
                chatID: 24,
                speaker: "p",
                text: "Oh is that....No, not like... wha",
                button: [
                    { chatID: 25, text: "....", callback: "oral12" },
                ]
            },
            {
                chatID: 25,
                speaker: "p",
                text: "Are chewing my labia? Who told you... What... ",
                button: [
                    { chatID: 26, text: "....", callback: "oral13" },
                ]
            },
            {
                chatID: 26,
                speaker: "p",
                text: "Ouch! Ok. That's enough. Everyone naked now! On your hands and knees. That was the worst oral I've " +
                    "ever recieved! Everyone fails. Make my human centipede and get your face in the ass in front of you. Now!",
                button: [
                    { chatID: 27, text: "....", callback: "oral14" },
                ]
            },
            {
                chatID: 27,
                speaker: "p",
                text: "Repeat after me: I'm dumb as a rock, please give me your cock! ",
                button: [
                    { chatID: 28, text: "I'm dumb as a rock, please give me your cock!", callback: "oral15" },
                ]
            },
            {
                chatID: 28,
                speaker: "p",
                text: "Keep eating that ass in front of you my nasty little piggies! You're lucky I don't make you eat that ass till " +
                    "everyone orgasms or we'd be here all night. ",
                button: [
                    { chatID: 29, text: "I'm dumb as a rock, please give me your cock!", callback: "oral16" },
                ]
            },
            {
                chatID: 29,
                speaker: "p",
                text: "I'm tired of watching you. Do five more laps and you're done for the day. Don't cheat or I'll have Ms. Black " +
                    "stick red hot pokers up each of your asses. ",
                button: [
                    { chatID: 31, text: "I'm dumb as a rock, please give me your cock!", callback: "oral17" },
                ]
            },
            {
                chatID: 30,
                speaker: "p",
                text: "noop ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 31,
                speaker: "!philbert",
                text: "So that was crazy right? All of our faces in each other's butts.  ",
                button: [
                    { chatID: 32, text: "Yeah. Really crazy. Are you going to get dressed? ", callback: "oral18" },
                ]
            },
            {
                chatID: 32,
                speaker: "!philbert",
                text: "You really seemed to enjoy it. Too bad your face wasn't licking my hole. I bet you would love " +
                    "pressing your face into my hole. ",
                button: [
                    { chatID: 33, text: "I thought you were going to make her orgasm. ", callback: "oral19" },
                ]
            },
            {
                chatID: 33,
                speaker: "!philbert",
                text: "So are your " + sc.n("el") + "'s " + sc.n("eva") + " and " + sc.n("lola") + "? You know I know them " +
                    "from school. ",
                button: [
                    { chatID: 36, text: "They are ", callback: "oral20" },
                    { chatID: -1, text: "Who? I don't know them. " + charisma.getStats(8).txt, callback: "oral20Check" },
                ]
            },
            {
                chatID: 34,
                speaker: "!philbert",
                text: "Oh. I thought you were. Hmmm. Ok. We'll I'm going to get dressed. Sorry we couldn't all taste her pussy, " +
                    "it was really fucking good.",
                button: [
                    { chatID: -1, text: "Yeah, no worries. See ya later. ", callback: "oralEnd" },
                ]
            },
            {
                chatID: 35,
                speaker: "!philbert",
                text: "I know you're lying. Don't lie to me. ",
                button: [
                    { chatID: 36, text: "ok.", callback: "" },
                ]
            },
            {
                chatID: 36,
                speaker: "!philbert",
                text: "It would really suck if they knew you liked to suck dildos and stuff your face in other " +
                    "boy's asses. I talk to them sometimes, It would be a shame if I let it slip what a sissy you are. " +
                    "I bet they would be sooooo disappointed in you. You know I could " +
                    "keep your secret, but you would have to do stuff for me. ",
                button: [
                    { chatID: 37, text: "Do stuff?  ", callback: "oral21" },
                ]
            },
            {
                chatID: 37,
                speaker: "!philbert",
                text: "Don't play coy with me. You know what you have to do to keep your secret. Just open your mouth and " +
                    "suck it. We wouldn't want everyone to know what a sissy you are. I'm doing this for you. You know you want it.",
                button: [
                    { chatID: 42, text: "[Open your mouth]", callback: "oral22" },
                    { chatID: 38, text: "No way! I'm not doing that!", callback: "" },
                ]
            },
            {
                chatID: 38,
                speaker: "!philbert",
                text: "You can run from me, but you can't run from yourself. I guess your " + sc.n("el") + " will just have to get " +
                    "a text of the true you. Should be interesting when you get home. Unless you want to, you know, do what " +
                    "you were meant to do. ",
                button: [
                    { chatID: 42, text: "[Open your mouth]", callback: "oral22" },
                    { chatID: -1, text: "I don't care if you tell them! I'm leaving! ", callback: "oral21x" },
                ]
            },
            {
                chatID: 39,
                speaker: "thinking",
                text: "What a douche! He really did it. I guess it's good that they already know everything, so no surprise from " +
                    "them. At least class is over. ",
                button: [
                    { chatID: -1, text: "...", callback: "oralEnd" },
                ]
            },
            {
                chatID: 40,
                speaker: "thinking",
                text: "Fuck! I just got a text from " + sc.n("eva") + " he really told them! They put together everthing! They " +
                    "know I'm a sissy. I don't know if I can show my face at home ever again. Crap. Just because I didn't suck " +
                    "his dick he goes and ruines my life. Fuck! ",
                button: [
                    { chatID: -1, text: "...", callback: "oralEnd" },
                ]
            },
            {
                chatID: 41,
                speaker: "thinking",
                text: "Fuck! I just got a text from " + sc.n("eva") + " he really told them! I was able to convince her he's " +
                    "lying, but I don't know if I can slip up with them ever or they'll be able to piece it together. I have to " +
                    "try harder to keep my secret. ",
                button: [
                    { chatID: -1, text: "...", callback: "oralEnd" },
                ]
            },
            {
                chatID: 42,
                speaker: "!philbert",
                text: "That's a good girl. You like it when I call you a girl, since only girls suck cock? Now just taste the " +
                    "tip. You can pretend it's the dildo you've been sucking on all day if that makes it easier. ",
                button: [
                    { chatID: 43, text: "...", callback: "oral23" },
                ]
            },
            {
                chatID: 43,
                speaker: "!philbert",
                text: "You're so pretty with my dick in your mouth, my little slut.  ",
                button: [
                    { chatID: 44, text: "MMmmmmMMMmmm *slurp*", callback: "oral24" },
                ]
            },
            {
                chatID: 44,
                speaker: "!philbert",
                text: "Oh fuck. I love the feeling of a pair of lips wrapped around my cock. ",
                button: [
                    { chatID: 45, text: "*slurp* mmammmMMmm", callback: "oral25" },
                ]
            },
            {
                chatID: 45,
                speaker: "!philbert",
                text: "That's my little blackmail slut. Don't worry I'll be using more of the tight little body of yours in the future. " +
                    "Be sure to wash that cum off your face before you get home. Wouldn't want everyone to know what a cock sucker you are. ",
                button: [
                    { chatID: 46, text: "Yes sir. ", callback: "oral26" },
                ]
            },
            {
                chatID: 46,
                speaker: "thinking",
                text: "He totally blackmailed me into sucking his dick. Came on face face and left. He totally used me like some " +
                    "kind of whore. Fuck I hate him. I'm not his whore. ",
                button: [
                    { chatID: -1, text: "...", callback: "oralEnd" },
                ]
            },
            {
                chatID: 47,
                speaker: "p",
                text: "Allright lesbos. You're going to learn how to eat a pussy right! I can't tell you how " +
                    "many times some pathetic loser tried sticking their tongue in my vagina hole or licked my " +
                    "piss hole and thought they were doing a good job! ",
                button: [
                    { chatID: 48, text: "...", callback: "" },
                ]
            },
            {
                chatID: 48,
                speaker: "!timothy",
                text: "But, " + sc.n("p") + ", I thought sissies only suck cock? Why are we learning about pussies? ",
                button: [
                    { chatID: 49, text: "...", callback: "" },
                ]
            },
            {
                chatID: 49,
                speaker: "p",
                text: "For once you have a great question " + sc.n("!timothy") + ". As you know, most girls don't want " +
                    "anything to do with a sissy besides shopping. I'm teaching you how to eat pussy in case any of you " +
                    "end up in a threesome, or orgy, and need to please a woman while you're getting fucked in your sloppy " +
                    "hole. Nothing ruins a threesome like a sissy that can't eat a cunt. ",
                button: [
                    { chatID: 50, text: "...", callback: "oral203_1" },
                ]
            },
            {
                chatID: 50,
                speaker: "p",
                text: "For some of you, today will be the first time you've looked at a real pussy. Don't just dive " +
                    "in there and rub your slimy nasty tongue all over her. You have to start slow. Kiss her thighs, " +
                    "spend some time on her outer lips before moving in. Look into her eyes as you lick her clitoris. " +
                    "Does she like her hood pulled back? Does she like an up and down motion, or is she more of a circular " +
                    "girl. You have to pay attention to her. It's not a dick where you can get it off just by ramming it " +
                    "down your throat holes. ",
                button: [
                    { chatID: 51, text: "...", callback: "" },
                ]
            },
            {
                chatID: 51,
                speaker: "!kareem",
                text: "What do we do, if like licking doesn't work. I know dis girl who said she only cums with a " +
                    "vibrator. ",
                button: [
                    { chatID: 52, text: "...", callback: "" },
                ]
            },
            {
                chatID: 52,
                speaker: "p",
                text: "Wow! We do have some great questions today! Yes " + sc.n("!kareem") + " some girls only cum " +
                    "with a vibrator. In those cases just use the vibrator on her clit and lick or finger her vaginal hole. " +
                    "If there's a real man in the room you can hold the vibrator while he fucks her, or you can eat her ass. " +
                    "Depending on the mood. ",
                button: [
                    { chatID: 53, text: "...", callback: "" },
                ]
            },
            {
                chatID: 53,
                speaker: "!chris",
                text: "I heard that vagina's smell bad. Is that true? ",
                button: [
                    { chatID: 54, text: "...", callback: "" },
                ]
            },
            {
                chatID: 54,
                speaker: "p",
                text: "Oh sweet, simple " + sc.n("!chris") + ". Vagina's taste and smell wonderful, unless she " +
                    "has a problem. It's rare and I wouldn't worry too much about the smell. Just put your tongue in " +
                    "there and get to work. A sissy like you will love the smell and taste. ",
                button: [
                    { chatID: 55, text: "...", callback: "oral203_2" },
                ]
            },
            {
                chatID: 55,
                speaker: "p",
                text: "Now enough chit chat. Time for the real thing. My friend Svetlana is kind enough to " +
                    "lend us her pussy to practice on. Each of you will get a turn trying to please her. It " +
                    "shouldn't be too hard. Svetlana is multiorgasmic, cums really easy. " + sc.n("me") +
                    "why don't you try first. ",
                button: [
                    { chatID: -1, text: "Fuck yeah! ", callback: "oral203_lick_start" },
                ]
            },
            {
                chatID: 56,
                speaker: "p",
                text: "Good girl. Look how happy she is in her orgasm. You get a pass for this class. ",
                button: [
                    { chatID: -1, text: "Thank you! [End class]", callback: "oral203_lick_end" },
                ]
            },
            {
                chatID: 57,
                speaker: "p",
                text: "You'll never please a woman. It's a good thing you were made to take cock. Go " +
                    "rape your face with a dildo in the corner until everyone is done. You are a dissapointment. ",
                button: [
                    { chatID: 58, text: "Yes ma'am", callback: "oral203_bad" },
                ]
            },
            {
                chatID: 58,
                speaker: "thinking",
                text: "I'm so terrible at pleasing a girl. I guess I really am a sissy for life. I should " +
                    "just let every guy ram their cock down my sissy slutty throat. That's what I'm really good at.",
                button: [
                    { chatID: -1, text: "[Finish class]", callback: "oral203_lick_end" },
                ]
            },
            {
                chatID: 59,
                speaker: "martha",
                text: "Welcome. Welcome to your final. For those of you who have, against all odds, managed to remain, one must offer a modicum of...congratulation. Some, of course, were born with an innate aptitude. Others, shall we say, demonstrated a commendable, if somewhat strenuous, dedication. Regardless, here we are.",
                button: [
                    { chatID: 60, text: "...", callback: "" },
                ]
            },
            {
                chatID: 60,
                speaker: "martha",
                text: "Now to give your your assigned tasks, everyone welcome Mr. Tudor, our founder. ",
                button: [
                    { chatID: 61, text: "...", callback: "final_a" },
                ]
            },
            {
                chatID: 61,
                speaker: "tudor",
                text: "Thank you Martha for giving me the chance to give the final assignment. " +
                    "It does give an old man glee so see so many wonderful sissies! When I " +
                    "started this school those many years ago we had such a hard time filling " +
                    "the seats we wern't sure if we should even continue the school. But look at " +
                    "it now. So many beautiful smiling faces and perky breasts. ",
                button: [
                    { chatID: 62, text: "...", callback: "" },
                ]
            },
            {
                chatID: 62,
                speaker: "tudor",
                text: "As you finish your time here and go out and do your assignment, I want you to " +
                    "think about regret. Not in the things you'll do, but in the things you haven't done. " +
                    "When I started this school it was to fill my own regret. You see, as a youth I always " +
                    "wrestled with my own gender identity. Back then being a girl was something that was " +
                    "out of the question for boys in my town. I may have worn some panties I found in a " +
                    "garbage a few times, but I never gave in to living the lifestyle that I knew was the " +
                    "real me. ",
                button: [
                    { chatID: 63, text: "...", callback: "" },
                ]
            },
            {
                chatID: 63,
                speaker: "tudor",
                text: "I was lucky in business and made a sizeable amout of money. More money " +
                    "than any one man can spend in his lifetime and was looking to invest it in " +
                    "businesses that I found of interest. That's when I came across a young spitfire " +
                    "Missy. She was working on building her PI business from her living room and I tell " +
                    "you, after one conversation she knew more about me than I knew. Well I tell you, she " +
                    "talked me into making this school. It was much much different in the beginning, but " +
                    "over time it has evolved into what you see today. ",
                button: [
                    { chatID: 64, text: "...", callback: "" },
                ]
            },
            {
                chatID: 64,
                speaker: "tudor",
                text: "In a way, this school is my way to live vicariously through you all. " +
                    "I am much much too old to live the life I should have lived, but I can " +
                    "give you the chance to live the life you should live. So to pass the class " +
                    "you'll have a set of challenges that you must go out and do. ",
                button: [
                    { chatID: 65, text: "...", callback: "" },
                ]
            },
            {
                chatID: 65,
                speaker: "tudor",
                text: "First, a sissy should be pretty. This Saturday we will have the biannual " +
                    "fashon show. This is your chance to wear your prettiest clothes for a large private " +
                    "audiance. <br/>" +
                    "Second, a sissy should be charismatic. You will get a phone number from " +
                    "a boy at the fast food restaurant. <br/>" +
                    "Third, a sissy should be sexy. This Friday night will be femboy Friday " +
                    "at the Fat Tony's Gentlemen's Club. It will be a chance to show you know how " +
                    "to use your body for seduction. <br/>" +
                    "Forth, and finally, a sissy fucks! You must get fucked up your tight little " +
                    "bussies. We'll use your Purity apps on your phones to track it. ",
                button: [
                    { chatID: 66, text: "...", callback: "" },
                ]
            },
            {
                chatID: 66,
                speaker: "tudor",
                text: "So I know the life of a student is a busy one which is why I'll give you a full " +
                    "week to get these tasks done. Don't forget to attend the event at the strip club on " +
                    "Friday all night and our beauty contest in the Pink Room Next door on Saturday before " +
                    nav.convertTime(18, 0) + ". The girl with the highest score will get a special prize. ",
                button: [
                    { chatID: 67, text: "...", callback: "" },
                ]
            },
            {
                chatID: 67,
                speaker: "martha",
                text: "How perfectly thrilling! I have every confidence that each of you will be absolutely remarkable in this undertaking. Now, do remember your obligations for Friday and Saturday. We shall see you all in one week's time! And please, do make certain you arrive promptly!",
                button: [
                    { chatID: 68, text: "...", callback: "" },
                ]
            },
            {
                chatID: 68,
                speaker: "thinking",
                text: "I need to make sure I don't miss the Friday or Saturday events. If " +
                    "I need a reminder on what to do I can check my phone and look for Mistress " +
                    "Martha's icon in the Character screen to remind myself. The strip club is open " +
                    "at night on Friday, and I can show up early to the fashion show, but I can't be late!",
                button: [
                    { chatID: -1, text: "...", callback: "finalFirstEventEnd" },
                ]
            },
            {
                chatID: 69,
                speaker: "martha",
                text: "My dears, I find myself in a rather curious state today, feeling both utterly delighted to see you all here and, I must confess, quite dreadfully sad that this chapter is now closing. Your journey has been a formidable one, filled with many a marvelous high, and, to be sure, a few rather daunting lows. Yet, each and every one of you has shown such magnificent resolve, persevering through what has undoubtedly been one of the most trying and difficult events of your lives. And for that, we, your teachers, are simply bursting with pride to have had the distinct privilege of being a part of it all. It has been our greatest honour.",
                button: [
                    { chatID: 70, text: "...", callback: "" },
                ]
            },
            {
                chatID: 70,
                speaker: "martha",
                text: "My dearest girls, I daresay that a certain query has been weighing upon your minds this afternoon, and that is, naturally, the matter of your final assessment. Well, it is with the most profound pleasure that I am able to report that each and every one of you has, in fact, succeeded. You must understand that this particular exercise was never intended to be an event upon which one might be graded. Instead, it was conceived as an invaluable opportunity—a rather splendid one, if I do say so myself—for you to apply all that you have so diligently absorbed to the world beyond these walls, unburdened by the usual constraints or tiresome restrictions. Indeed, I am confident in asserting that there is not a single soul among you who has failed to blossom into a truly refined and remarkable young woman. You have, without exception, succeeded in the very essence of our purpose here: you have become proper ladies!",
                button: [
                    { chatID: 71, text: "...", callback: "" },
                ]
            },
            {
                chatID: 71,
                speaker: "martha",
                text: "I must now ready myself for the graduation ceremony.",
                button: [
                    { chatID: 72, text: "...", callback: "final1" },
                ]
            },
            {
                chatID: 72,
                speaker: "martha",
                text: "Though your time here has drawn to its dignified close, let it be known that the doors of guidance remain ever open to you. Should any among you require further assistance—be it in the form of a refined hormonal supplement or the expertise of my most trusted and distinguished associate here you need only proceed by elevator to the white floor. Your continued grace, health, and composure shall ever remain a matter of deepest concern to me.",
                button: [
                    { chatID: 73, text: "...", callback: "final2" },
                ]
            },
            {
                chatID: 73,
                speaker: "black",
                text: "Like " + sc.n("martha") + " was saying. The school will remain unlocked between " +
                    "classes. For those of you that know you're still disgusting little piggies that " +
                    "need to be punished you can take the elevator to the black room and recieve your " +
                    "much needed punishments. ",
                button: [
                    { chatID: 74, text: "...", callback: "" },
                ]
            },
            {
                chatID: 74,
                speaker: "p",
                text: "While you will find both " + sc.n("martha") + " and " + sc.n("black") +
                    " here at the school, you'll find me across the hallway in the Pink Room. " +
                    "We all know that makeup, dresses, panties, and sexy lingerie is really " +
                    "expensive. There's no easier, or pleasureable way to make some extra money " +
                    "than working for as long as you like in the pink room. I've already moved " +
                    "your records over so as soon as you walk in, you can start working those sexy " +
                    "bussies of yours! ",
                button: [
                    { chatID: 75, text: "...", callback: "final2" },
                ]
            },
            {
                chatID: 75,
                speaker: "missy",
                text: "It really is a great place to work. Now that you're all officially Sissies " +
                    "it is your duty, but not required, to give back to the community in the Pink Room. " +
                    "But enough about your futures, now it's time for the graduation. We have a " +
                    "little ceremony, as we call each of you up to receive your diploma you will " +
                    "kiss the head of each of our dicks and thank us for the pleasure of serving " +
                    "us then receive you diploma. ",
                button: [
                    { chatID: 76, text: "[Wait for your turn]", callback: "final3" },
                ]
            },
            {
                chatID: 76,
                speaker: "missy",
                text: "...I can't say enough nice things about " + sc.n("!thomas") + 
                    "here. And finally " + sc.n("me") + ". A diamond in the rough " +
                    "when I found her. Step up to thank each of us. ",
                button: [
                    { chatID: -1, text: "[Kiss each cock]", callback: "final4" },
                ]
            },
            {
                chatID: 77,
                speaker: "me",
                text: "Thank you " + sc.n("p") + " for the pleasure of serving you " +
                    "and for teaching me how to open up and use my holes. ",
                button: [
                    { chatID: -1, text: "...", callback: "final5" },
                ]
            },
            {
                chatID: 78,
                speaker: "me",
                text: "Thank you " + sc.n("black") + " for the pleasure of serving you " +
                    "and for teaching me how to handle the pain of servitude. ",
                button: [
                    { chatID: -1, text: "...", callback: "final6" },
                ]
            },
            {
                chatID: 79,
                speaker: "me",
                text: "Thank you " + sc.n("martha") + " for the pleasure of serving you " +
                    "and for teaching me to be a proper lady. ",
                button: [
                    { chatID: -1, text: "...", callback: "final7" },
                ]
            },
            {
                chatID: 80,
                speaker: "me",
                text: "Thank you " + sc.n("missy") + " for the pleasure of serving you " +
                    "and for teaching me that I am truly a sissy. ",
                button: [
                    { chatID: 81, text: "...", callback: "final8" },
                ]
            },
            {
                chatID: 81,
                speaker: "missy",
                text: "Congratulations for this amazing achievement. I know we're all " +
                    "proud of everything you've accomplished. ",
                button: [
                    { chatID: 82, text: "...", callback: "final9" },
                ]
            },
            {
                chatID: 82,
                speaker: "missy",
                text: "And this concludes today's graduation. Let's all take a picture " +
                    "to remember this amazing event!",
                button: [
                    { chatID: 83, text: "...", callback: "final10" },
                ]
            },
            {
                chatID: 83,
                speaker: "p",
                text: "Now time to head to the Pink Room to celebrate!!!!",
                button: [
                    { chatID: 84, text: "...", callback: "final11" },
                ]
            },
            {
                chatID: 84,
                speaker: "!kareem",
                text: "It's so crazy that it's over. I feel like a totally new girl " +
                    "and can't remember life before this school. I'll miss seeing all " +
                    "of you, but I guess I'll see you around. Hey, where's " + sc.n("!chris") +
                    "?",
                button: [
                    { chatID: 85, text: "...", callback: "" },
                ]
            },
            {
                chatID: 85,
                speaker: "!thomas",
                text: "She's already inside. A better question is why are you naked " + 
                    sc.n("sporty") + "? We're in the middle of a public hallway!",
                button: [
                    { chatID: 86, text: "...", callback: "" },
                ]
            },
            {
                chatID: 86,
                speaker: "!sporty",
                text: "'cause I need to get laid! Like right now! I don't care if it's " +
                    "a suprise penis, which is my favorite penis, but I'm going in. Let's " +
                    "go get laid girls! ",
                button: [
                    { chatID: -1, text: "...", callback: "finalfinal" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};