//Candy room
var room53 = {};
room53.main = function () {
    nav.buildnav([51]);
    return;

    if (sc.getTimeline("candy").thisRoom) {
        
        if (g.hourBetween(7, 22)) {
            chat(34, 53);
            //var candyStep = sc.getstep("candy");
            //if (candyStep === 101 && !daily.get("candy")) {
            //    nav.button({
            //        "type": "btn",
            //        "name": "101bj",
            //        "left": 430,
            //        "top": 0,
            //        "width": 730,
            //        "height": 1080,
            //        "image": "53_candy/101_1.png"
            //    }, 53);
            //}
            //else {
            //    nav.button({
            //        "type": "btn",
            //        "name": "candy",
            //        "left": 906,
            //        "top": 16,
            //        "width": 648,
            //        "height": 1064,
            //        "image": "53_candy/c.png"
            //    }, 53);
            //}
        }
        else
            nav.bg("53_candy/53_candyRoom_night_sleep.jpg")
    }
    var navList = [51, 55];
    nav.buildnav(navList);
};
//---------------------------------------Female assisted rape -- main char doens't like brad, candy forces main char
//---------------------------------------to fuck him. Grabs his face, Spreads your ass and shoves
//---------------------------------------brads' dick into you
//---------------------------------------Cuckold stuff first. you watch while they fuck, no touching
//---------------------------------------unless you're eating the cream pie from candy's cunt
room53.btnclick = function (name) {
    name = name.toString();
    switch (name) {
        case "candy":
            //if (cl.hasoutfit("nude") === null) {
            var candyStep = sc.getstep("candy");
            if (daily.get("candy")) {
                chat(17, 53);
            }
            else {
                if (candyStep === 100)
                    chat(6, 53);
                else if (candyStep === 102)
                    chat(31, 53);
                else if (candyStep === 2)
                    chat(19, 53);
                else
                    chat(17, 53);
            }
            //}
            //else {
            //    nav.killbutton("candy");
            //    nav.button({
            //        "type": "btn",
            //        "name": "candy",
            //        "left": 906,
            //        "top": 16,
            //        "width": 648,
            //        "height": 1064,
            //        "image": "53_candy/c1.png"
            //    }, 53);
            //    chat(4, 53);
            //}
            break;
        case "101bj":
            chat(18, 53);
            break;
        case "cumlick":
            g.internal++;
            nav.killbutton("cumlick");
            if (g.internal < 5)
                nav.button({
                    "type": "tongue",
                    "name": "cumlick",
                    "left": 963,
                    "top": 496,
                    "width": 440,
                    "height": 374,
                    "image": "53_candy/bj7_" + g.internal + ".png"
                }, 53);
            else
                chat(17, 53);
            break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
            if (!daily.get("reddoor")) {
                char.addtime(60);
                if (gv.get("reddoorloc") === parseInt(name)) {
                    inv.add("reddoor");
                    nav.button({
                        "type": "img",
                        "name": "reddoor",
                        "left": 655,
                        "top": 218,
                        "width": 635,
                        "height": 479,
                        "image": "53_candy/reddoor.png"
                    }, 53);
                    chat(3, 53);
                }
                else {
                    chat(Math.floor(Math.random() * 2), 53);
                }
                daily.set("reddoorloc");
            }
            else {
                chat(2, 53);
            }
            break;
        case "bc2":
            nav.killbutton("bc2");
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "top": 0,
                "width": 1305,
                "height": 1080,
                "image": "53_candy/bc2.png"
            }, 53);
            chat(27, 53);
            break;
        case "bc4":
            if (g.internal < 5) {
                nav.modbutton("bc4", "53_candy/bc4_" + g.internal + ".png", null, null);
                g.internal++;
            }
            else {
                nav.killbutton("bc4");
                nav.modbutton("candy", "53_candy/bc5.png", null, null);
                chat(29, 53);
            }
            break;
        case "101b":
            nav.bg("53_candy/101_" + g.internal + ".jpg");
            if (g.internal === 8) {
                nav.killbutton("101b");
                chat(26, 53);
            }
            g.internal++;
            break;
        default:
            break;
    }
};

room53.chatcatch = function (callback) {
    switch (callback) {
        case "killkey":
            nav.killbutton("reddoor");
            char.room(53);
            break;
        case "reset":
            char.room(53);
            break;
       
        case "bj1":
            gv.mod("receiveOralFemale", 1);
            daily.set("candy");
            nav.killbutton("candy");
            nav.button({
                "type": "btn",
                "name": "candy",
                "left": 906,
                "top": 500,
                "width": 648,
                "height": 1064,
                "image": "53_candy/c1.png"
            }, 53);
            break;
        case "bj2":
            nav.killall();
            nav.bg(cl.c.cock < 2 ? "53_candy/bj2.gif" : "53_candy/bj2t.gif");
            g.roomTimeout = setTimeout(function () { chat(10, 53) }, 3000);
            break;
        case "bj3":
            cl.doCum(false);
            nav.bg(cl.c.cock < 2 ? "53_candy/bj3.jpg" : "53_candy/bj3t.jpg");
            break;
        case "bj4":
            nav.bg(cl.c.cock < 2 ? "53_candy/bj4.jpg" : "53_candy/bj4t.jpg");
            break;
        case "bj5":
            nav.bg("53_candy/bj5.jpg");
            break;
        case "bj6":
            nav.bg("53_candy/bj6.jpg");
            break;
        case "bj6a":
            char.addtime(60);
            nav.killall();
            nav.bg("53_candy/53_candyRoom.jpg", "53_candy/53_candyRoom_night.jpg");
            nav.button({
                "type": "btn",
                "name": "candy",
                "left": 906,
                "top": 16,
                "width": 648,
                "height": 1064,
                "image": "53_candy/bj6a.png"
            }, 53);
            var navList = [51, 55];
            nav.buildnav(navList);
            break;
        case "bj7":
            char.addtime(60);
            gv.mod("loadSwollowed", 1);
            g.internal = 0;
            nav.killall();
            sc.setstep("candy", 2);
            nav.bg("53_candy/bj7.jpg");
            nav.button({
                "type": "tongue",
                "name": "cumlick",
                "left": 963,
                "top": 496,
                "width": 440,
                "height": 374,
                "image": "53_candy/bj7.png"
            }, 53);
            break;
        case "bc0":
            char.addtime(60);
            daily.set("candy");
            break;
        case "bc1":
            daily.set("candy");
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "top": 0,
                "width": 1305,
                "height": 1080,
                "image": "53_candy/bc1.png"
            }, 53);
            nav.button({
                "type": "btn",
                "name": "bc2",
                "left": 1250,
                "top": 284,
                "width": 29,
                "height": 200,
                "image": "53_candy/bc1a.png"
            }, 53);
            break;
        case "bc3":
            nav.killbutton("candy");
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "width": 1305,
                "height": 1080,
                "top": 0,
                "image": "53_candy/bc3.png"
            }, 53);
            break;
        case "bc4":
            nav.killbutton("candy");
            g.internal = 0;
            nav.button({
                "type": "img",
                "name": "candy",
                "left": 450,
                "top": 0,
                "width": 1305,
                "height": 1080,
                "image": "53_candy/bc1.png"
            }, 53);
            nav.button({
                "type": "tongue",
                "name": "bc4",
                "left": 1213,
                "top": 306,
                "width": 132,
                "height": 425,
                "image": "53_candy/bc4.png"
            }, 53);
            break;
        case "bc6":
            gv.mod("loadSwollowed", 1);
            sc.setstep("candy", 3);
            char.addtime(60);
            gv.mod("arousal", 100);
            char.room(53);
            break;
        case "100_1":
            nav.killall();
            nav.bg("53_candy/100_1.jpg");
            break;
        case "100_2a":
        case "100_2b":
        case "100_3":
        case "100_4a":
        case "100_4b":
        case "101_9":
        case "101_10":
            nav.bg("53_candy/" + callback + ".jpg");
            break;
        case "100_badend":
            char.addtime(60);
            sc.setstep("candy", 101);
            daily.set("candy");
            char.room(53);
            break;
        case "100_5":
            char.addtime(60);
            nav.killall();
            nav.bg("53_candy/53_candyRoom.jpg", "53_candy/53_candyRoom_night.jpg");
            nav.button({
                "type": "img",
                "name": "100_5",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "53_candy/100_5.png"
            }, 53);
            break;
        case "100_goodend":
            pic.add("candy");
            sc.setstep("candy", 101);
            daily.set("candy");
            char.room(52);
            break;
        case "101_2":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "101_2",
                "left": 431,
                "top": 0,
                "width": 923,
                "height": 1080,
                "image": "53_candy/101_2.png"
            }, 53);
            break;
        case "101_3":
            nav.killall();
            nav.button({
                "type": "img",
                "name": "101_2",
                "left": 692,
                "top": 199,
                "width": 686,
                "height": 881,
                "image": "53_candy/101_3.png"
            }, 53);
            zcl.displayMain(500, 1000, .3, "clothes", true);
            break;
        case "101_4":
            nav.killall();
            nav.bg("53_candy/101_4.jpg");
            g.internal = 5;
            nav.button({
                "type": "btn",
                "name": "101b",
                "left": 1687,
                "top": 615,
                "width": 233,
                "height": 150,
                "image": "526_bar/arrowRight.png"
            }, 53);
            break;
        case "101_end":
            sc.setstep("candy", 102);
            daily.set("candy");
            char.addtime(120);
            char.room(52);
            break;
        case "102_end":
            sc.setstep("candy", 103);
            daily.set("candy");
            char.addtime(120);
            char.room(53);
            break;
        default:
            break;
    }
};

room53.chat = function (chatID) {
    var cArray = [
        {
            chatID: 0,
            speaker: "me",
            text: "Hmmmmm nothing here.. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 1,
            speaker: "me",
            text: "Nothing here... you would think this would be overflowing with dildos.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 2,
            speaker: "me",
            text: "I don't want to get caught... I'm not going to risk it again.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 3,
            speaker: "me",
            text: "Oh nice, another key.. Hopefully this is the last time we do this cliché.",
            button: [
                { chatID: -1, text: "...", callback: "killkey" }
            ]
        },
        {
            chatID: 4,
            speaker: "candy",
            text: "Just getting ready. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 5,
            speaker: "candy",
            text: "You look so cute! I don't have anything else for you!",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 6,
            speaker: "candy",
            text: "If it isn't our good little girl. Come by to take a peek at my pussy?",
            button: [
                { chatID: 7, text: "Just saying hi. ", callback: "" },
                { chatID: 7, text: "I came by to rape the pussy! ", callback: "" }
            ]
        },
        {
            chatID: 7,
            speaker: "candy",
            text: "You're so cute. Help me write a reply text to this boy. ",
            button: [
                { chatID: 8, text: "oh ok. ", callback: "100_1" }
            ]
        },
        {
            chatID: 8,
            speaker: "candy",
            text: "He stopped by the store and I gave him my number. I think he's really cute. ",
            button: [
                { chatID: 9, text: "Brad! I can't believe you're texting Brad. He's an ass and a bully. ", callback: "" }
            ]
        },
        {
            chatID: 9,
            speaker: "candy",
            text: "A cute ass and bully! But I'm to tired tonight. What should I say to get him to wait without scaring him. ",
            button: [
                { chatID: 10, text: "I have work tomorrow", callback: "100_2b" },
                { chatID: 10, text: "You should respect me more", callback: "100_2a" },
            ]
        },
        {
            chatID: 10,
            speaker: "candy",
            text: "Let's see what he has to say to that! ",
            button: [
                { chatID: 11, text: "...", callback: "100_3" }
            ]
        },
        {
            chatID: 11,
            speaker: "candy",
            text: "I knew the dick pic was coming, I just thought he would respond. It is a nice dick though. Maybe I should " +
                "go over and take care of it. ",
            button: [
                { chatID: 12, text: "Wait. So sending a dick pic really works?", callback: "" }
            ]
        },
        {
            chatID: 12,
            speaker: "candy",
            text: "Only if your dick is as hot as his! I can't help it, my pussy is already getting wet. ",
            button: [
                { chatID: 13, text: "No. Brad's an asshole. You shouldn't have to go over there. ", callback: "" },
                { chatID: 15, text: "Oh. You should totally go over there then. ", callback: "100_4b" },
            ]
        },
        {
            chatID: 13,
            speaker: "candy",
            text: "Fine what should I say? ",
            button: [
                { chatID: 14, text: "You can go fuck yourself asshole", callback: "100_4a" },
            ]
        },
        {
            chatID: 14,
            speaker: "candy",
            text: "Well. I guess he's not going to respond to that. Oh well. I've got to get ready.  ",
            button: [
                { chatID: -1, text: "ok. later", callback: "100_badend" },
            ]
        },
        {
            chatID: 15,
            speaker: "candy",
            text: "You're such a great friend! I'm going to get this pussy fucked! See you! ",
            button: [
                { chatID: 16, text: "Glad I could help! ", callback: "100_5" },
            ]
        },
        {
            chatID: 16,
            speaker: "thinking",
            text: "Oh I got an image from " + sc.n("candy") + ". I wonder what she sent. ",
            button: [
                { chatID: -1, text: "Better check my photos.", callback: "100_goodend" },
            ]
        },
        {
            chatID: 17,
            speaker: "candy",
            text: "Aren't you excitable! I love it! I'll have more energy to play tomorrow!",
            button: [
                { chatID: -1, text: "Yep", callback: "" }
            ]
        },
        {
            chatID: 18,
            speaker: "chad",
            text: "Hey shrimp dick. Enjoying the show?",
            button: [
                { chatID: 19, text: "I just....", callback: "101_2" }
            ]
        },
        {
            chatID: 19,
            speaker: "candy",
            text: "Oh. I didn't know you wanted to watch. Do you want to see how a real man fucks?",
            button: [
                { chatID: 20, text: "What, no! ", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "chad",
            text: "It's cool loser. I'll let you watch me fuck this fine piece of pussy. She may even let you " +
                "eat my cum out of her twat. ",
            button: [
                { chatID: 21, text: "What.. that's not.. ", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "candy",
            text: "Did you want to eat his cum out of my pussy? I've never had a sissy before. You can eat his cum if you " +
                "want. ",
            button: [
                { chatID: 22, text: "...", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "me",
            text: "What is he doing here? I thought only girls could come in this building? ",
            button: [
                { chatID: 23, text: "...", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "candy",
            text: "Oh that. Hehehe. Yes, only girls can come up here. Girls and studs like " + sc.n("chad") + ". " +
                sc.n("treyvon") + " doens't let wimpy boys in. It's ok, we told him you're a sissy, not a wimpy boy " +
                "so that's how we got you in. You know he's taken a liking to you. I think he wants to fuck you. ",
            button: [
                { chatID: 24, text: "What, no, why....", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "chad",
            text: "Too much talking, not enough fucking. " + sc.n("candy") + " get on the bed with your ass up. I'm going to " +
                "fuck that cunt. " + sc.n("me") + " sit your ass on the floor and watch how a real man fucks. ",
            button: [
                { chatID: 25, text: "[Sit your ass on the floor and watch a real man fuck]", callback: "101_3" }
            ]
        },
        {
            chatID: 25,
            speaker: "chad",
            text: "I'm going to make this bitch squeel like a whore. ",
            button: [
                { chatID: -1, text: "...", callback: "101_4" }
            ]
        },
        {
            chatID: 26,
            speaker: "candy",
            text: "Oh look. My pussy is all sloppy with " + sc.n("chad") + "'s yummy cum. You want a taste? ",
            button: [
                { chatID: 27, text: "Oh....", callback: "101_9" }
            ]
        },
        {
            chatID: 27,
            speaker: "chad",
            text: "Come here cuck! Clean my cum out of that pussy! Hahahaha loser.  ",
            button: [
                { chatID: 28, text: "*GLUB* Lick *Suck*", callback: "" }
            ]
        },
        {
            chatID: 28,
            speaker: "thinking",
            text: "Oh my god, his cum is so pungent, but I better eat it all. I don't want to make " + sc.n("chad") + 
                " angry. Besides, maybe she'll let me fuck her after. ",
            button: [
                { chatID: 29, text: "...", callback: "101_10" }
            ]
        },
        {
            chatID: 29,
            speaker: "candy",
            text: "You're such a good pussy eater! I'm all clean now! I love having a sissy friend! ",
            button: [
                { chatID: 30, text: "...", callback: "" }
            ]
        },
        {
            chatID: 30,
            speaker: "chad",
            text: "Hahaha. I can't believe you watched me fuck her, then ate my cum. You're probably going to jack off " +
                "to this! What a fucking cuck you are! I'm out. Enjoy my cum fag. ",
            button: [
                { chatID: -1, text: "...", callback: "101_end" }
            ]
        },
        {
            chatID: 31,
            speaker: "candy",
            text: "I've never had a sissy best friend before, but I was trying to think of ways to thank you for cleaning " +
                "me out and watching us. It was so hot. Did you masturbate to it later? It doens't matter. I masturbated " +
                "to it. I love being watched. I love having a sissy. So anyways, do you want to be a cheerleader with me? ",
            button: [
                { chatID: 32, text: "What? ", callback: "" }
            ]
        },
        {
            chatID: 32,
            speaker: "candy",
            text: "Oh. That was all jumbled. I'm just so excited I talked it over with the other cheerleaders and they said " +
                "you can try out for the team. We have practice every Saturday and games every Sunday. If you want to " +
                "join come down to the football field on Saturday, ok! Wear some gym clothes. We'll give you a uniform once " +
                "you pass the tryout.",
            button: [
                { chatID: 33, text: "So go to the football field on Saturday morning in gym clothes? ", callback: "" }
            ]
        },
        {
            chatID: 33,
            speaker: "candy",
            text: "Yes! Saturday at the football field. Be ready for a workout. And don't mind Becky, she's a bitch to everyone. ",
            button: [
                { chatID: -1, text: "Cool. See you then! ", callback: "102_end" }
            ]
        },
        {
            chatID: 34,
            speaker: "candy",
            text: "Not updated yet. Future release. ",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },








        {
            chatID: 9,
            speaker: "candy",
            text: "I'm going to gobble that thing up!",
            button: [
                { chatID: -1, text: "oh yea...", callback: "bj2" }
            ]
        },
        {
            chatID: 10,
            speaker: "candy",
            text: "Ummm GLUMMmmmm SLOP SLOP SLOP mmmmm",
            button: [
                { chatID: 11, text: "I'm going to cum!", callback: "bj3" }
            ]
        },
        {
            chatID: 11,
            speaker: "candy",
            text: "Ohhh yeah!!!",
            button: [
                { chatID: 12, text: "!", callback: "bj4" }
            ]
        },
        {
            chatID: 12,
            speaker: "candy",
            text: "I love a face full of cum! It's so yummy! Doesn't it look yummy? ",
            button: [
                { chatID: 13, text: "sure", callback: "bj5" }
            ]
        },
        {
            chatID: 13,
            speaker: "candy",
            text: "aahahahahha... lick lick lick ",
            button: [
                { chatID: 14, text: "...", callback: "bj6" }
            ]
        },
        {
            chatID: 14,
            speaker: "candy",
            text: "I can't reach it all with my tongue! hmmmmm.... I know! Lick it off and spit it in my mouth! That'd be soooo hot! ",
            button: [
                { chatID: 17, text: "Oh yeah!", callback: "bj7" },
                { chatID: 15, text: "What? NO, no no gross", callback: "" }
            ]
        },
        {
            chatID: 15,
            speaker: "candy",
            text: "Huh? A good girl loves cum. Be a good girl and clean me up.",
            button: [
                { chatID: 17, text: "ohhh ok", callback: "bj7" },
                { chatID: 16, text: "Nope, nope, not going to do that.", callback: "bj6a" }
            ]
        },
        {
            chatID: 16,
            speaker: "candy",
            text: "Oh ok. I guess I'll just have to sleep with your cum on my face. ",
            button: [
                { chatID: -1, text: "Yep", callback: "" }
            ]
        },
        {
            chatID: 17,
            speaker: "candy",
            text: "You slut!",
            button: [
                { chatID: -1, text: "Yep", callback: "reset" }
            ]
        },
        {
            chatID: 18,
            speaker: "candy",
            text: "Aren't you excitable! I love it! I'll have more energy to play tomorrow!",
            button: [
                { chatID: -1, text: "Yep", callback: "" }
            ]
        },
        {
            chatID: 19,
            speaker: "candy",
            text: "Hey my cum drunk slut! Guess what, I got you a present!",
            button: [
                { chatID: 20, text: "Really?", callback: "" }
            ]
        },
        {
            chatID: 20,
            speaker: "candy",
            text: "Oh yeah, I've been saving it all day and I know you'll love it! Do you know " + sc.n("chad") + "?",
            button: [
                { chatID: 21, text: "I know him. He's kinda a dick", callback: "" },
                { chatID: 22, text: "He's so dreamy..", callback: "" }
            ]
        },
        {
            chatID: 21,
            speaker: "candy",
            text: "Oh hahaha, he's just having some fun! ",
            button: [
                { chatID: 23, text: "Sure", callback: "" }
            ]
        },
        {
            chatID: 22,
            speaker: "candy",
            text: "I know, and such a big cock too!",
            button: [
                { chatID: 23, text: "I wish it was in me.", callback: "" }
            ]
        },
        {
            chatID: 23,
            speaker: "candy",
            text: "So he stopped by and I fucked him in the bathroom. He totally filled my pussy up! I had to put in a tampon to keep it in. ",
            button: [
                { chatID: 24, text: "Oh, why would you do that?", callback: "" }
            ]
        },
        {
            chatID: 24,
            speaker: "candy",
            text: "So you could eat it silly! You seemed to love eating cum so much last time that I just had to get you someone else's for you to " +
            "eat. And you can eat it straight from my pussy! I bet that sounds yummy!",
            button: [
                { chatID: 25, text: "Oh no, no, no, no", callback: "" },
                { chatID: 26, text: "That' awesome! I really want to eat cum from your pussy!", callback: "bc1" }
            ]
        },
        {
            chatID: 25,
            speaker: "candy",
            text: "Awwww. ok. I'll just sleep with this in me.",
            button: [
                { chatID: 25, text: "ok", callback: "bc0" },
                { chatID: 26, text: "I'm kidding! I so want to eat cum from your pussy!", callback: "bc1" },
            ]
        },
        {
            chatID: 26,
            speaker: "candy",
            text: "Just pull out my tampon and so you can suck out " + sc.n("chad") + "'s cum baby.",
            button: [
                { chatID: -1, text: "...", callback: "" }
            ]
        },
        {
            chatID: 27,
            speaker: "candy",
            text: "Oh my god.. it's dripping",
            button: [
                { chatID: 28, text: "...", callback: "bc3" }
            ]
        },
        {
            chatID: 28,
            speaker: "candy",
            text: "Squeel!! Quick lick it up before it drips onto the floor",
            button: [
                { chatID: -1, text: "...", callback: "bc4" }
            ]
        },
        {
            chatID: 29,
            speaker: "candy",
            text: "Ohhh, so clean!",
            button: [
                { chatID: -1, text: "...", callback: "bc6" }
            ]
        },
        
    ];
    if (cArray.length > chatID && chatID > -1)
        return cArray[chatID];
    else
        return [];
};
