//Room name
var room728 = {};
room728.main = function () {
    if (g.pass === "endSleepyTime") {
        cl.undo();
        nav.bg("725_club/river_nextmorning_" + gender.pronoun("m") + ".webp");
        if (cl.c.cock === 5) {
            chat(39, 728);
        }
        else {
            chat(35, 728);
        }
    }
    else {
        g.internal = { text: "", btn: "" };
        chat(0, 728);
    }
};

room728.btnclick = function (name) {
    if (name.startsWith("riverq_")) {
        g.internal = {
            text: name.replace("riverq_", "").replace(/_/g, " "),
            btn: name
        }
        chat(900, 728);
        return;
    }
    switch (name) {
        default:
            break;
    }
};

room728.chatcatch = function (callback) {
    switch (callback) {
        case "river0":
        case "river1":
        case "river5":
        case "river6":
        case "river7":
        case "river_anal4":
            nav.killall();
            nav.bg("725_club/" + callback + ".webp");
            break;
        case "river4":
            nav.kill();
            nav.bg("725_club/" + callback + "_" + gender.pronoun("f") + ".webp");
            break;
        case "river2":
            nav.kill();
            nav.bg("725_club/river2.webp");
            nav.button({
                "type": "btn",
                "name": "riverq_bottle_of_wine",
                "left": 326,
                "top": 437,
                "width": 41,
                "height": 149,
                "image": "725_club/riverq_bottle_of_wine.webp",
                "title": "Slutty Mommy wine"
            }, 728);
            nav.button({
                "type": "btn",
                "name": "riverq_coil_of_rope",
                "left": 1640,
                "top": 797,
                "width": 150,
                "height": 50,
                "image": "725_club/riverq_coil_of_rope.webp",
                "title": "Coil of rope"
            }, 728);
            nav.button({
                "type": "btn",
                "name": "riverq_snacky_cake",
                "left": 540,
                "top": 592,
                "width": 62,
                "height": 43,
                "image": "725_club/riverq_snacky_cake.webp",
                "title": "Snacky cake"
            }, 728);
            nav.button({
                "type": "btn",
                "name": "riverq_bottle_of_beer",
                "left": 158,
                "top": 619,
                "width": 239,
                "height": 83,
                "image": "725_club/riverq_bottle_of_beer.webp",
                "title": "Bottle of beer"
            }, 728);
            nav.button({
                "type": "btn",
                "name": "riverq_baseball",
                "left": 338,
                "top": 347,
                "width": 38,
                "height": 38,
                "image": "725_club/riverq_baseball.webp",
                "title": "Baseball"
            }, 728);
            nav.button({
                "type": "btn",
                "name": "riverq_eye_drops",
                "left": 1696,
                "top": 590,
                "width": 21,
                "height": 43,
                "image": "725_club/riverq_eye_drops.webp",
                "title": "Eye Drops"
            }, 728);
            nav.button({
                "type": "btn",
                "name": "riverq_sunglasses",
                "left": 213,
                "top": 343,
                "width": 86,
                "height": 41,
                "image": "725_club/riverq_sunglasses.webp",
                "title": "Sunglasses"
            }, 728);
            nav.button({
                "type": "btn",
                "name": "riverq_camera",
                "left": 300,
                "top": 223,
                "width": 76,
                "height": 51,
                "image": "725_club/riverq_camera.webp",
                "title": "Camera"
            }, 728);
            break;
        case "river3":
            nav.killbutton(g.internal.btn);
            g.popUpNotice("Grabbed " + g.internal.text);
            nav.bg("725_club/river3.webp");
            if (cl.c.cock === 5)
                chat(6, 728);
            else
                chat(902, 728);
            break;
        case "river8":
            nav.kill();
            nav.bg("725_club/riverbedbg.webp");
            zcl.bellydown(420, 1100, .2, "", false);
            nav.button({
                "type": "img",
                "name": "river",
                "left": 628,
                "top": 0,
                "width": 544,
                "height": 1080,
                "image": "725_club/river8.webp",
            }, 728);
            break;
        case "river9":
            nav.kill();
            nav.bg("725_club/riverfuck.webp");
            break;
        case "river10a":
            levels.fuckedinpussy(true, "m", true, "river");
            levels.fuckedinpussy(true, "m", true, "river");
            levels.fuckedinpussy(true, "m", true, "river");
            g.pass = 728;
            char.room(28);
            break;
        case "river10":
            g.pass = 728;
            char.room(28);
            break;
        case "river_hit":
            nav.kill();
            nav.bg("725_club/riverbedbg.webp");
            nav.button({
                "type": "img",
                "name": "river",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "725_club/" + g.internal.btn + "_0.webp",
            }, 728);
            switch (g.internal.text) {
                case "bottle of wine":
                    chat(18, 728);
                    break;
                case "coil of rope":
                    chat(22, 728);
                    break;
                case "snacky cake":
                    chat(23, 728);
                    break;
                case "bottle of beer":
                    chat(18, 728);
                    break;
                case "baseball":
                    chat(18, 728);
                    break;
                case "eye drops":
                    chat(24, 728);
                    break;
                case "sunglasses":
                    chat(25, 728);
                    break;
                case "camera":
                    chat(26, 728);
                    break;
            }
            break;
        case "river_punch":
            nav.kill();
            nav.bg("725_club/river_punch.webp");
            break;
        case "river_out":
            nav.kill();
            nav.bg("725_club/river_out.webp");
            break;
        case "river_search":
            if (missy.getenvelope("river").hasKey) {
                nav.bg("725_club/river_search.webp");
                chat(20, 728);
            }
            else {
                nav.bg("725_club/river_search_0.webp");
                chat(21, 728);
            }
            missy.setenvelope("river");
            break;
        case "river_punch1":
            nav.bg("999_phone/black.jpg");
            break;
        case "river_punch2":
            g.pass = "riverpunch";
            char.room(975);
            break;
        case "river_anal0":
            cl.nude();
            nav.kill();
            nav.bg("725_club/riverbedbg.webp");
            zcl.pucker(385, 1150, .14, "", true);
            nav.button({
                "type": "img",
                "name": "river",
                "left": 628,
                "top": 0,
                "width": 544,
                "height": 1080,
                "image": "725_club/river8.webp",
            }, 728);
            break;
        case "river_anal1":
            nav.kill();
            nav.bg("725_club/river_anal1bg.webp");
            zcl.facedown(200, 300, .8, "", false);
            nav.button({
                "type": "img",
                "name": "river",
                "left": 1208,
                "top": 0,
                "width": 438,
                "height": 392,
                "image": "725_club/river_anal1fg.webp",
            }, 728);
            break;
        case "river_anal2":
            nav.kill();
            nav.bg("725_club/river_anal2bg.webp")
            zcl.facedown(200, 700, .8, "", false);
            nav.button({
                "type": "img",
                "name": "river",
                "left": 0,
                "top": 0,
                "width": 1920,
                "height": 1080,
                "image": "725_club/river_anal2fg.webp",
            }, 728);
            break;
        case "river_anal3":
            nav.kill();
            levels.anal(4, true, "m", true, "river");
            nav.bg("725_club/riverbedbg.webp");
            zcl.legsup(280, 1100, .25, "", false);
            nav.button({
                "type": "img",
                "name": "river",
                "left": 628,
                "top": 0,
                "width": 544,
                "height": 1080,
                "image": "725_club/river8.webp",
            }, 728);
            break;
        case "riverSneak0":
            if (missy.getenvelope("river").hasKey) {
                chat(36, 728);
            }
            else {
                chat(37, 728);
            }
            missy.setenvelope("river");
            break;
        case "riverSneak1":
            if (missy.getenvelope("river").hasKey) {
                chat(42, 728);
            }
            else {
                chat(43, 728);
            }
            missy.setenvelope("river");
            break;
        case "leave":
            char.addtime(90);
            char.room(0);
            break;
        case "leaveLove":
            sc.startMission("river", "*gf");
            char.addtime(90);
            char.room(0);
            break;
        default:
            break;
    }
};

room728.chat = function (chatID) {
    if (chatID === 900) {
        return {
            chatID: 900,
            speaker: "random",
            text: "Should I use this " + g.internal.text + " to try to take out " + sc.n("river") + "? ",
            button: [
                { chatID: -1, text: "Yes. ", callback: "river3" },
                { chatID: -1, text: "Pick something else. ", callback: "" },
            ]
        };
    }
    else if (chatID === 901) {
        return {
            chatID: 901,
            speaker: "river",
            text: "Really. I'm in love with you. ",
            button: [
                { chatID: 11, text: "[Let him stick his tongue in your mouth]", callback: "river4" },
                { chatID: -1, text: "[Use the " + g.internal.text + " on him]", callback: "river_hit" },
            ]
        };
    }
    else if (chatID === 902) {
        return {
            chatID: 8,
            speaker: "river",
            text: "Like, I'm not gay or anything, but I keep thinking about you. I gotta feel that ass again. " +
                "Like I really gotta fuck you. You know. Like I'll do anything to hear those girly moans of yours! " +
                "Bend that ass over! ",
            button: [
                { chatID: 29, text: "[Present your naked anus]", callback: "river_anal0" },
                { chatID: -1, text: "[Use the " + g.internal.text + " on him]", callback: "river_hit" }
            ]
        };
    }
    else {
        var cArray = [
            {
                chatID: 0,
                speaker: "river",
                text: "Really? I mean, I knew you were a dumb bimbo, but I didn't know you were a stupid " +
                    "slut too. I'm a fuck you real good, come with me. ",
                button: [
                    { chatID: 1, text: "[Follow him to his place]", callback: "river0" },
                ]
            },
            {
                chatID: 1,
                speaker: "river",
                text: "Welcome to my adobe. This is my living room, but I know you don't care about " +
                    "that. You just came to see my bedroom. This way slut. ",
                button: [
                    { chatID: 2, text: "[Follow him to his bedroom]", callback: "river1" },
                ]
            },
            {
                chatID: 2,
                speaker: "river",
                text: "This is my bedroom. Now down on your knees. Worship this dick!",
                button: [
                    { chatID: 3, text: "...", callback: "" },
                ]
            },
            {
                chatID: 3,
                speaker: "thinking",
                text: "I got to buy some time, think of a plan. If I play my hand wrong I'm sure he's " +
                    "going to take me back to the C.U.M. compound, but if I play it right I may just have " +
                    "a chance of seeing if he has that code. I'll ask him for a drink to get me some time. ",
                button: [
                    { chatID: 4, text: "Can I get a drink first. I'm really thirsty baby", callback: "" },
                ]
            },
            {
                chatID: 4,
                speaker: "river",
                text: "Yeah. I could use a drink too. One second.  ",
                button: [
                    { chatID: 5, text: "...", callback: "river2" },
                ]
            },
            {
                chatID: 5,
                speaker: "thinking",
                text: "I've got to grab something to get the upper hand! ",
                button: [
                    { chatID: -1, text: "...", callback: "" },
                ]
            },
            {
                chatID: 6,
                speaker: "me",
                text: "Where's the water? ",
                button: [
                    { chatID: 7, text: "...", callback: "" },
                ]
            },
            {
                chatID: 7,
                speaker: "river",
                text: "I took off my clothes. Listen dweeb. I have a confession. Ever since I found out you " +
                    "got a pussy I haven't been able to get my mind off you. Like, I love pussy, but I hate " +
                    "chicks. Too much bla bla bla, my feelings. So you're the best of both worlds. You have a pussy and you don't act like a chick. ",
                button: [
                    { chatID: 9, text: "...ok", callback: "" },
                ]
            },
            {
                chatID: 8,
                speaker: "river",
                text: "noop ",
                button: [
                    { chatID: 29, text: "[Present your naked anus]", callback: "river_anal0" },
                ]
            },
            {
                chatID: 9,
                speaker: "river",
                text: "Look. What I'm trying to say is I like you. Maybe love you. I've fucked a lot of " +
                    "chicks, but no chick like you. As a dude, you're a dweeb, but as a chick you're like " +
                    "really hot and fun. ",
                button: [
                    { chatID: 901, text: "Really?", callback: "" },
                ]
            },
            {
                chatID: 10,
                speaker: "river",
                text: "noop ",
                button: [
                    { chatID: 11, text: "[Let him stick his tongue in your mouth]", callback: "river4" },
                ]
            },
            {
                chatID: 11,
                speaker: "thinking",
                text: "*ugh* I think he's trying to tickle my tonsils with his tongue. At least his penis " +
                    "feels good rubbing between my other lips. ",
                button: [
                    { chatID: 12, text: "...", callback: "river5" },
                ]
            },
            {
                chatID: 12,
                speaker: "me",
                text: "*ooof* Why did you just throw me like that! ",
                button: [
                    { chatID: 13, text: "...", callback: "river6" },
                ]
            },
            {
                chatID: 13,
                speaker: "river",
                text: "Because you're about to get the best sex of your life. ",
                button: [
                    { chatID: 14, text: "really?", callback: "river7" },
                ]
            },
            {
                chatID: 14,
                speaker: "thinking",
                text: "Oh god that feels so good!!! Like amazing! How did such an ass get so good at sex? " +
                    "Mind blown, pussy blown! Fuck I'm cumming again!!",
                button: [
                    { chatID: 15, text: "...", callback: "river8" },
                ]
            },
            {
                chatID: 15,
                speaker: "me",
                text: "Wow. You were like, amazing. Like really amazing. We're going to have to get some " +
                    "towels to clean up all the sex from the bed. ",
                button: [
                    { chatID: 16, text: "...", callback: "" },
                ]
            },
            {
                chatID: 16,
                speaker: "river",
                text: "You were amazing too babe. What do you say we go at it again? ",
                button: [
                    { chatID: 17, text: "Please! Please fuck me all night long. ", callback: "river9" },
                ]
            },
            {
                chatID: 17,
                speaker: "!nar",
                text: "The two of you fucked all night long, a couple times in the middle of the night " +
                    "and once more when you both woke up. You learned what it means when a woman says " +
                    "that he really beat up my pussy. ",
                button: [
                    { chatID: -1, text: "[Sleep]", callback: "river10a" },
                ]
            },
            {
                chatID: 18,
                speaker: "me",
                text: "Take this " + sc.n("river") + "!!!",
                button: [
                    { chatID: 19, text: "...", callback: "river_out" },
                ]
            },
            {
                chatID: 19,
                speaker: "thinking",
                text: "Now to search his place to see if he has the code! ",
                button: [
                    { chatID: 20, text: "[Search his place]", callback: "river_search" },
                ]
            },
            {
                chatID: 20,
                speaker: "thinking",
                text: "Fuckin' sweet! Got the code. It's 1-2-3-4-5! Now to get back to " + sc.n("p") +
                    " and let her know! ",
                button: [
                    { chatID: -1, text: "[Get out of there]", callback: "leave" },
                ]
            },
            {
                chatID: 21,
                speaker: "thinking",
                text: "*arg* I don't know what I was thinking! This idiot doesn't have the code! ",
                button: [
                    { chatID: -1, text: "[Get out of there]", callback: "leave" },
                ]
            },
            {
                chatID: 22,
                speaker: "river",
                text: "What? Are you going to tie me up? You have to beat me in a fight first loser! ",
                button: [
                    { chatID: 27, text: "*gulp*", callback: "river_punch" },
                ]
            },
            {
                chatID: 23,
                speaker: "river",
                text: "You hit me with a snacky cake? You have got to be the dumbest bitch on the planet. ",
                button: [
                    { chatID: 27, text: "*gulp*", callback: "river_punch" },
                ]
            },
            {
                chatID: 24,
                speaker: "river",
                text: "Why did you squirt eye drops at me? Fuckin' idiot.  ",
                button: [
                    { chatID: 27, text: "*gulp*", callback: "river_punch" },
                ]
            },
            {
                chatID: 25,
                speaker: "river",
                text: "Those sunglasses are expensive bitch! Don't throw them at me!  ",
                button: [
                    { chatID: 27, text: "*gulp*", callback: "river_punch" },
                ]
            },
            {
                chatID: 26,
                speaker: "river",
                text: "Why are you taking a picture of my cock? I'll be sure you see it all the time at " +
                    "the compound! ",
                button: [
                    { chatID: 27, text: "*gulp*", callback: "river_punch" },
                ]
            },
            {
                chatID: 27,
                speaker: "river",
                text: "You're going back to where you belong!!!",
                button: [
                    { chatID: 28, text: "*ooof*", callback: "river_punch1" },
                ]
            },
            {
                chatID: 28,
                speaker: "thinking",
                text: "*ooof* my head. How long have I been out? ",
                button: [
                    { chatID: -1, text: "[slowly open your eyes]", callback: "river_punch2" },
                ]
            },
            {
                chatID: 29,
                speaker: "river",
                text: "That's what I love about you sissies. Ass up on command. The perfect cum dump! ",
                button: [
                    { chatID: 30, text: "*seductily moan*", callback: "river_anal1" },
                ]
            },
            {
                chatID: 30,
                speaker: "river",
                text: "Oh shit that's good! I love your sissy bitch asshole! Fuck that's good! ",
                button: [
                    { chatID: 31, text: "*orgasmic moans*", callback: "river_anal2" },
                ]
            },
            {
                chatID: 31,
                speaker: "river",
                text: "Oh fuck you're gunna make me cum... fuck I'm cumming up your ass! ",
                button: [
                    { chatID: 32, text: "*incoherent moans of pleasure*", callback: "river_anal3" },
                ]
            },
            {
                chatID: 32,
                speaker: "me",
                text: "You put your cum so deep inside me, hehe  ",
                button: [
                    { chatID: 33, text: "...", callback: "" },
                ]
            },
            {
                chatID: 33,
                speaker: "river",
                text: "Don't worry slut. I'm going to spend the entire night filling you so full of cum you'll be " +
                    "dripping me out for a week! ",
                button: [
                    { chatID: 34, text: "YEAH!", callback: "river_anal4" },
                ]
            },
            {
                chatID: 34,
                speaker: "river",
                text: "I'm going to spend the entire night with my cock up your ass!",
                button: [
                    { chatID: -1, text: "*moan* please daddy", callback: "river10" },
                ]
            },
            {
                chatID: 35,
                speaker: "river",
                text: "You know. I really need that ass more in my life. I just can't get enough. ",
                button: [
                    { chatID: -1, text: "I could come visit you at the compound. But not through the front door. I'll have to sneak in. ", callback: "riverSneak0" },
                ]
            },
            {
                chatID: 36,
                speaker: "river",
                text: "You know what. Fuck it. Just sneak in the back door. The code is 1-2-3-4-5. Just don't tell " +
                    "anyone I gave you the secret code, 'k? ",
                button: [
                    { chatID: 38, text: "oh, I won't! ", callback: "" },
                ]
            },
            {
                chatID: 37,
                speaker: "river",
                text: "Oh shit, there's a back door... but I don't know the code. Fuck. You know what. If you get tired " +
                    "of being out here just come back. I'll make sure you get a pillow in your cell. That's how much I love " +
                    "fuckin' you. I may even be able to talk the Castellan into wheeling down an old black and white TV. ",
                button: [
                    { chatID: 38, text: "That's so sweet.  ", callback: "" },
                ]
            },
            {
                chatID: 38,
                speaker: "river",
                text: "Welp. I've got shit to do, so you can get the fuck out. You know the way. ",
                button: [
                    { chatID: -1, text: "*sigh* Yeah. Bye", callback: "leave" },
                ]
            },
            {
                chatID: 39,
                speaker: "river",
                text: "That was the most amazing sex ever. Way better than those bitter lame Milk Maids. There's " +
                    "just something about you. I guess there's always been something about you that I never saw. " +
                    "I don't know, I just know that I don't want this to end. I don't want us to end. ",
                button: [
                    { chatID: 40, text: "We don't have to end. I can visit you. ", callback: "" },
                ]
            },
            {
                chatID: 40,
                speaker: "river",
                text: "Really? Would you come live in the compound?",
                button: [
                    { chatID: 41, text: "...", callback: "" },
                ]
            },
            {
                chatID: 41,
                speaker: "me",
                text: "I don't want to live in the compound and be shared by everyone. Or have to share you. I want " +
                    "us to be together. Maybe I could sneak in? Is there a back door perhaps that I can use so I can " +
                    "see you anytime you want? ",
                button: [
                    { chatID: -1, text: "...", callback: "riverSneak1" },
                ]
            },
            {
                chatID: 42,
                speaker: "river",
                text: "Oh shit there totally is! Yeah, you could sneak in. That would be so hot! The code is " +
                    "1-2-3-4-5. Just punch it in. Just don't try to sneak in on Fridays. You know how we be busy " +
                    "on Fridays! Oh so looking forward to our little secret! ",
                button: [
                    { chatID: 44, text: "I so am too!", callback: "" },
                ]
            },
            {
                chatID: 43,
                speaker: "river",
                text: "Oh shit there totally is! I don't know the code though. Fuck. Maybe I'll just find you around. " +
                    "You know it's only a matter of time until you're brought back once the heat dies down. I'll talk " +
                    "to " + sc.n("ubel") + ". Maybe he'll let me keep you. He does do special favors sometimes, but you " +
                    "usually have to do some fucked up shit for him when he does. I'll find a way for us to be together. ",
                button: [
                    { chatID: 44, text: "I know you will", callback: "" },
                ]
            },
            {
                chatID: 44,
                speaker: "river",
                text: "I've got to get ready for tonight, but I'll see you around. I know it's too early to say I " +
                    "love you, but damn. I really can't get you out of my head. ",
                button: [
                    { chatID: -1, text: "I can't get you out of my head either. Bye baby. ", callback: "leaveLove" },
                ]
            },
        ];
        if (cArray.length > chatID && chatID > -1)
            return cArray[chatID];
        else
            return [];
    }
};

invoker.registerRoom(728, room728);
